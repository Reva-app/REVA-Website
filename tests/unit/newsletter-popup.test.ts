import { test } from "node:test";
import assert from "node:assert/strict";
import { isExcludedPath, parseStored, shouldOfferPopup, SNOOZE_DAYS } from "@/lib/newsletter-popup";

const now = new Date("2026-11-06T12:00:00Z");
const daysAgo = (d: number) => new Date(now.getTime() - d * 86_400_000).toISOString();

test("pop-up verschijnt niet op conversie- en juridische pagina's", () => {
  for (const p of ["/demo-aanvragen", "/contact", "/inloggen", "/privacy-policy", "/cookiebeleid", "/legal/dpa"]) {
    assert.equal(isExcludedPath(p), true, p);
    assert.equal(shouldOfferPopup(p, null, false, now), false, p);
  }
  for (const p of ["/", "/blog", "/blog/software-voor-fysiopraktijken", "/prijzen", "/contactpersoon"]) {
    assert.equal(isExcludedPath(p), false, p);
  }
});

test("maximaal één keer per bezoek, nooit meer na aanmelden", () => {
  assert.equal(shouldOfferPopup("/", null, false, now), true);
  assert.equal(shouldOfferPopup("/", null, true, now), false);
  assert.equal(shouldOfferPopup("/", { state: "subscribed", at: daysAgo(400) }, false, now), false);
});

test("na wegklikken een maand rust", () => {
  assert.equal(shouldOfferPopup("/", { state: "dismissed", at: daysAgo(3) }, false, now), false);
  assert.equal(shouldOfferPopup("/", { state: "dismissed", at: daysAgo(SNOOZE_DAYS + 1) }, false, now), true);
});

test("kapotte opslag telt als geen eerdere keuze", () => {
  assert.equal(parseStored("{niet json"), null);
  assert.equal(parseStored(JSON.stringify({ state: "iets" })), null);
  assert.deepEqual(parseStored(JSON.stringify({ state: "dismissed", at: "x" })), { state: "dismissed", at: "x" });
});
