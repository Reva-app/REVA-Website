import { test } from "node:test";
import assert from "node:assert/strict";
import { injuryPages, plans, plansFor, regions } from "@/lib/herstelplannen";

const dashes = /[–—]|\s-\s/;

test("herstelplannen: data uit de app geladen, elk plan in een regio", () => {
  assert.ok(plans.length >= 40, `${plans.length} plannen`);
  const cats = new Set(regions.flatMap((r) => r.categories));
  for (const p of plans) {
    assert.ok(cats.has(p.category), `${p.name} valt in geen regio`);
    assert.ok(p.phases.length >= 2, p.name);
    for (const ph of p.phases) for (const t of [ph.name, ph.goal, ...ph.criteria, ...ph.forbidden]) assert.ok(!dashes.test(t), `${p.name}: ${t}`);
  }
});

test("blessurepagina's: hoofdplan bestaat, titels en beschrijvingen passen in Google", () => {
  assert.equal(new Set(injuryPages.map((p) => p.slug)).size, injuryPages.length);
  for (const page of injuryPages) {
    const { main } = plansFor(page);
    assert.equal(main?.name, page.mainPlan, page.slug);
    assert.ok(page.title.length <= 60, `${page.slug}: titel ${page.title.length}`);
    assert.ok(page.description.length <= 160, `${page.slug}: description ${page.description.length}`);
    assert.ok(page.tests.length >= 3, page.slug);
    for (const t of [page.h1, ...page.intro, ...page.faq.flatMap((f) => [f.q, f.a])]) assert.ok(!dashes.test(t), `${page.slug}: ${t.slice(0, 40)}`);
  }
});
