import { test } from "node:test";
import assert from "node:assert/strict";
import { provinces, dialectTranslation } from "@/lib/provinces";
import { NL_MAP, projectLatLng } from "@/lib/nl-map";

const dashes = /[–—]|\s-\s/;

test("provincies: alle 12, unieke slugs, bekend op de kaart", () => {
  assert.equal(provinces.length, 12);
  assert.equal(new Set(provinces.map((p) => p.slug)).size, 12);
  const mapNames = new Set<string>(NL_MAP.provinces.map((p) => p.name));
  for (const p of provinces) assert.ok(mapNames.has(p.mapName), p.mapName);
});

test("provincies: steden met coördinaten binnen de kaart, teksten zonder streepjes", () => {
  for (const p of provinces) {
    assert.ok(p.cities.length >= 6, `${p.slug}: te weinig steden`);
    for (const c of p.cities) {
      const { x, y } = projectLatLng(c.lat, c.lng);
      assert.ok(x > 0 && x < NL_MAP.width && y > 0 && y < NL_MAP.height, `${p.slug}: ${c.name} valt buiten de kaart`);
    }
    for (const t of [...p.regional, p.dialect.text]) assert.ok(!dashes.test(t), `${p.slug}: ${t.slice(0, 40)}`);
    assert.ok(p.dialect.lang.length >= 2, p.slug);
  }
  assert.ok(!dashes.test(dialectTranslation));
});
