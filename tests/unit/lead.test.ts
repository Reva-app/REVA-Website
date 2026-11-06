import { test } from "node:test";
import assert from "node:assert/strict";
import { buildLeadPayload, pushLeadToPipeline } from "@/lib/lead";

test("demo-aanvraag wordt een lead in stap 'nieuw' met bron en notities", () => {
  const lead = buildLeadPayload({
    practice: "Fysio de Linde",
    name: "Jan Jansen",
    email: "jan@delinde.nl",
    phone: "0612345678",
    notes: ["Aanbod: Pilotaanbod", "Pakket: Team"],
  });
  assert.equal(lead.company_name, "Fysio de Linde");
  assert.equal(lead.stage, "nieuw");
  assert.equal(lead.contact_phone, "0612345678");
  assert.match(lead.notes, /^Bron: demo-aanvraag via www.reva-app.nl\nAanbod: Pilotaanbod\nPakket: Team$/);
});

test("zonder instellingen wordt er niets verstuurd", async () => {
  delete process.env.REVA_LEAD_ENDPOINT;
  delete process.env.REVA_LEAD_SECRET;
  assert.equal(await pushLeadToPipeline({ practice: "x", name: "y", email: "z@z.nl", notes: [] }), "niet ingesteld");
});
