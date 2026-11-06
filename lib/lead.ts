// Demo-aanvraag doorzetten naar de sales-pipeline in het REVA-dashboard (/admin).
// De website kent alleen een eigen, beperkte route in het dashboard en een gedeelde
// geheime sleutel; de databasesleutel met volledige rechten blijft in het dashboard.

export type LeadInput = {
  practice: string;
  name: string;
  email: string;
  phone?: string;
  notes: string[];
};

/** Gegevens in het formaat van de tabel sales_leads (stap "nieuw"). */
export function buildLeadPayload(input: LeadInput) {
  return {
    company_name: input.practice.slice(0, 200),
    contact_name: input.name.slice(0, 200),
    contact_email: input.email.slice(0, 320),
    contact_phone: input.phone ? input.phone.slice(0, 50) : null,
    stage: "nieuw" as const,
    notes: ["Bron: demo-aanvraag via www.reva-app.nl", ...input.notes].filter(Boolean).join("\n").slice(0, 5000),
  };
}

/**
 * Stuurt de lead naar het dashboard. Faalt stil (alleen loggen), zodat de
 * aanvraag per mail altijd doorgaat, ook als de pipeline even niet bereikbaar is.
 */
export async function pushLeadToPipeline(input: LeadInput): Promise<"verstuurd" | "niet ingesteld" | "mislukt"> {
  const url = process.env.REVA_LEAD_ENDPOINT;
  const secret = process.env.REVA_LEAD_SECRET;
  if (!url || !secret) return "niet ingesteld";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-website-lead-secret": secret },
      body: JSON.stringify(buildLeadPayload(input)),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.error("Pipeline fout:", res.status, await res.text().catch(() => ""));
      return "mislukt";
    }
    return "verstuurd";
  } catch (err) {
    console.error("Pipeline niet bereikbaar:", err);
    return "mislukt";
  }
}
