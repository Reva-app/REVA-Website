import { test } from "node:test";
import assert from "node:assert/strict";
import { features, featureGroups, featuresByGroup } from "@/lib/features";
import { faqGroups } from "@/lib/faq";

// Leesbare tekst zonder gedachtestreepjes (en-dash, em-dash) of losse koppeltekens als leesteken
const dashes = /[–—]|\s-\s/;

test("functies: unieke ankers, elke groep gevuld, volledige teksten", () => {
  const ids = features.map((f) => f.id);
  assert.equal(new Set(ids).size, ids.length, "dubbele ankers");
  for (const g of featureGroups) assert.ok(featuresByGroup(g.id).length >= 4, g.id);
  for (const f of features) {
    assert.ok(f.lead && f.text && f.bullets.length >= 3, f.id);
    for (const t of [f.title, f.lead, f.text, ...f.bullets]) assert.ok(!dashes.test(t), `${f.id}: ${t}`);
  }
});

test("FAQ: ruim 40 unieke vragen in zes categorieën, zonder streepjes", () => {
  const items = faqGroups.flatMap((g) => g.items);
  assert.ok(items.length >= 40, `${items.length} vragen`);
  assert.equal(faqGroups.length, 6);
  assert.equal(new Set(items.map((i) => i.q)).size, items.length, "dubbele vragen");
  assert.equal(new Set(faqGroups.map((g) => g.id)).size, faqGroups.length);
  for (const i of items) assert.ok(!dashes.test(i.a) && !dashes.test(i.q), i.q);
});
