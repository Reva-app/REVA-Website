import { test } from "node:test";
import assert from "node:assert/strict";
import { isPilotRequest, pilotDemoHref, pilotOffer, pilotSpotsLabel } from "@/lib/offer";
import { NL_MAP, projectLatLng } from "@/lib/nl-map";
import { practices } from "@/lib/practices";
import sitemap from "@/app/sitemap";
import { consentModeSignals } from "@/lib/cookie-consent";
import { markdownForPath } from "@/lib/agent/markdown";

test("pilotaanbod: link, label en alleen geldig zolang het loopt", () => {
  assert.equal(pilotDemoHref, "/pilot#aanmelden");
  assert.equal(pilotOffer.discountPercent, 50);
  assert.equal(pilotSpotsLabel(), "3 plekken beschikbaar");
  assert.equal(isPilotRequest("pilot"), true);
  assert.equal(isPilotRequest("iets-anders"), false);
  assert.equal(isPilotRequest(undefined), false);
});

test("homepage-Markdown noemt het pilotaanbod en de USP's", () => {
  const md = markdownForPath("/")!;
  assert.ok(md.includes("de eerste 6 maanden gratis"));
  assert.ok(md.includes("Europese servers"));
});

test("kaart: Nederlandse steden vallen binnen de kaart, op de juiste plek", () => {
  const amsterdam = projectLatLng(52.3676, 4.9041);
  const maastricht = projectLatLng(50.8514, 5.691);
  const groningen = projectLatLng(53.2194, 6.5665);
  for (const p of [amsterdam, maastricht, groningen]) {
    assert.ok(p.x > 0 && p.x < NL_MAP.width && p.y > 0 && p.y < NL_MAP.height, JSON.stringify(p));
  }
  assert.ok(maastricht.y > amsterdam.y, "Maastricht ligt zuidelijker");
  assert.ok(groningen.x > amsterdam.x && groningen.y < amsterdam.y, "Groningen ligt noordoostelijker");
  assert.equal(NL_MAP.provinces.length, 12);
});

test("lege praktijkenkaart staat niet in de sitemap", () => {
  const urls = sitemap().map((e) => e.url);
  assert.equal(urls.some((u) => u.endsWith("/praktijken")), practices.length > 0);
});

test("cookiekeuze wordt per categorie doorgegeven aan Consent Mode", () => {
  assert.deepEqual(consentModeSignals({ necessary: true, analytics: false, marketing: false }), {
    analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  assert.deepEqual(consentModeSignals({ necessary: true, analytics: true, marketing: false }), {
    analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  assert.equal(consentModeSignals({ necessary: true, analytics: false, marketing: true }).ad_storage, "granted");
});
