import { test } from "node:test";
import assert from "node:assert/strict";
import { demoHref, describeInterest, enterpriseContactHref, pricingTiers } from "@/lib/pricing";

test("prijskaarten linken naar het demoformulier met pakket en betaling", () => {
  const plus = pricingTiers.find((t) => t.name === "Praktijk Plus")!;
  assert.equal(demoHref(plus, true), "/demo-aanvragen?pakket=praktijk-plus&facturatie=jaarlijks");
  assert.equal(demoHref(pricingTiers[0], false), "/demo-aanvragen?pakket=solo&facturatie=maandelijks");
  assert.equal(enterpriseContactHref, "/contact?pakket=enterprise");
});

test("elk pakket uit de link wordt herkend, met de juiste prijs", () => {
  assert.deepEqual(describeInterest("team", "maandelijks"), { name: "Team", billing: "maandelijks", price: "€129 per maand" });
  assert.deepEqual(describeInterest("team", "jaarlijks"), { name: "Team", billing: "jaarlijks", price: "€1.290 per jaar (€108 per maand)" });
  assert.equal(describeInterest("praktijk-plus", "jaarlijks")?.price, "€3.490 per jaar (€291 per maand)");
  assert.deepEqual(describeInterest("enterprise", undefined), { name: "Enterprise", billing: null, price: "vanaf €699 per maand" });
  for (const tier of pricingTiers) {
    const url = new URL(demoHref(tier, false), "https://www.reva-app.nl");
    assert.equal(describeInterest(url.searchParams.get("pakket"), url.searchParams.get("facturatie"))?.name, tier.name);
  }
});

test("onbekende of ontbrekende waarden komen niet in de mail", () => {
  assert.equal(describeInterest(undefined, undefined), null);
  assert.equal(describeInterest("<script>", "jaarlijks"), null);
  assert.equal(describeInterest("gratis-voor-altijd", "jaarlijks"), null);
  assert.equal(describeInterest("solo", "elke-eeuw")?.billing, "maandelijks");
});
