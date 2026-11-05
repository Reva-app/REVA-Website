import { NextRequest, NextResponse } from "next/server";

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

  const subject =
    type === "demo"
      ? `Demo-aanvraag: ${fields.practice} (${fields.name})`
      : `Contactformulier: ${fields.topic || "Algemene vraag"} (${fields.name})`;

  const rows = FIELD_LABELS[type].filter(([key]) => fields[key]);
  const text = rows.map(([key, label]) => `${label}: ${fields[key]}`).join("\n");
  const html = `
    <h2 style="font-family:sans-serif;color:#1a1a1a">${escapeHtml(subject)}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([key, label]) => `<tr>
        <td style="padding:6px 16px 6px 0;color:#6b7280;vertical-align:top">${label}</td>
        <td style="padding:6px 0;color:#1a1a1a;white-space:pre-wrap">${escapeHtml(fields[key])}</td>
      </tr>`
        )
        .join("")}
    </table>`;

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
