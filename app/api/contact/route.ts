import { NextRequest, NextResponse } from "next/server";
import { renderContactEmail, telHref, type ContactEmailRow } from "@/lib/contact-email";
import { EMAIL_LOGO_CID, EMAIL_LOGO_PNG_BASE64 } from "@/lib/email-logo";
import { describeInterest } from "@/lib/pricing";

// Resend — server-only (geen NEXT_PUBLIC_ prefix, nooit zichtbaar in browser)
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@reva-app.nl";
// Afzender moet op een in Resend geverifieerd domein staan
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "REVA <info@reva-app.nl>";

type FormType = "demo" | "contact";

const FIELD_LABELS: Record<FormType, [string, string][]> = {
  demo: [
    ["name", "Naam"],
    ["practice", "Bedrijf"],
    ["email", "E-mail"],
    ["phone", "Telefoon"],
    ["employees", "Aantal medewerkers"],
    ["software", "Huidige software"],
    ["message", "Opmerkingen"],
  ],
  contact: [
    ["name", "Naam"],
    ["email", "E-mail"],
    ["topic", "Onderwerp"],
    ["message", "Bericht"],
  ],
};

const REQUIRED: Record<FormType, string[]> = {
  demo: ["name", "practice", "email"],
  contact: ["name", "email", "message"],
};

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY niet geconfigureerd.");
    return NextResponse.json(
      { error: "Server configuratiefout." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  // Honeypot: bots vullen dit verborgen veld in, mensen niet
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const type: FormType = body.type === "demo" ? "demo" : "contact";
  const fields: Record<string, string> = {};
  for (const [key] of FIELD_LABELS[type]) {
    const raw = body[key];
    fields[key] = typeof raw === "string" ? raw.trim().slice(0, 5000) : "";
  }

  // Basisvalidatie server-side
  if (REQUIRED[type].some((key) => !fields[key])) {
    return NextResponse.json(
      { error: "Vul alle verplichte velden in." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json(
      { error: "Voer een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  // Pakketkeuze van de prijspagina, alleen als het een bestaand pakket is
  const interest = describeInterest(body.pakket, body.facturatie);
  const interestTag = interest ? ` (${interest.name})` : "";

  const subject =
    type === "demo"
      ? `Demo-aanvraag${interestTag}: ${fields.practice} (${fields.name})`
      : `Contactformulier${interestTag}: ${fields.topic || "Algemene vraag"} (${fields.name})`;

  const interestRows: ContactEmailRow[] = interest
    ? [
        { label: "Pakket", value: interest.name },
        ...(interest.billing
          ? [{ label: "Betaling", value: interest.billing === "jaarlijks" ? "Jaarlijks" : "Maandelijks" }]
          : []),
        { label: "Prijs", value: interest.price },
        { label: "Gekozen via", value: "Prijzenpagina" },
      ]
    : [];
  const interestSections = interest ? [{ title: "Interesse", rows: interestRows }] : [];

  const rows = FIELD_LABELS[type].filter(([key]) => fields[key]);
  const text = [
    ...interestRows.map(({ label, value }) => `${label}: ${value}`),
    ...rows.map(([key, label]) => `${label}: ${fields[key]}`),
  ].join("\n");

  const row = (label: string, key: string, href?: string): ContactEmailRow[] =>
    fields[key] ? [{ label, value: fields[key], href }] : [];
  const contactRows = [
    ...row("Naam", "name"),
    ...row("E-mail", "email", `mailto:${fields.email}`),
    ...(type === "demo" ? row("Telefoon", "phone", telHref(fields.phone)) : []),
  ];

  const html = renderContactEmail(
    type === "demo"
      ? {
          badge: interest ? `Demo-aanvraag · ${interest.name}` : "Demo-aanvraag",
          title: fields.practice,
          intro: interest
            ? `${fields.name} wil graag een demo van REVA inplannen en koos op de prijzenpagina voor het pakket ${interest.name}. Neem binnen één werkdag contact op om een moment af te spreken.`
            : `${fields.name} wil graag een demo van REVA inplannen. Neem binnen één werkdag contact op om een moment af te spreken.`,
          sections: [
            ...interestSections,
            { title: "Contactpersoon", rows: contactRows },
            {
              title: "Praktijk",
              rows: [
                ...row("Naam praktijk", "practice"),
                ...row("Aantal medewerkers", "employees"),
                ...row("Huidige software", "software"),
              ],
            },
          ],
          message: fields.message ? { title: "Opmerkingen", value: fields.message } : undefined,
          replyEmail: fields.email,
          phone: fields.phone || undefined,
          source: "het demoformulier",
        }
      : {
          badge: fields.topic || "Contactformulier",
          title: `Nieuw bericht van ${fields.name}`,
          intro: "Er is een vraag binnengekomen via het contactformulier. Reageer binnen één werkdag.",
          sections: [...interestSections, { title: "Afzender", rows: contactRows }],
          message: { title: "Bericht", value: fields.message },
          replyEmail: fields.email,
          source: "het contactformulier",
        }
  );

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject,
        text,
        html,
        attachments: [
          {
            filename: "reva-logo.png",
            content: EMAIL_LOGO_PNG_BASE64,
            content_type: "image/png",
            content_id: EMAIL_LOGO_CID,
          },
        ],
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    // Fout van Resend: log details server-side, stuur generieke melding
    const errorBody = await response.json().catch(() => null);
    console.error("Resend fout:", response.status, errorBody);

    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Resend fetch fout:", err);
    return NextResponse.json(
      { error: "Geen verbinding mogelijk. Probeer het later opnieuw." },
      { status: 503 }
    );
  }
}
