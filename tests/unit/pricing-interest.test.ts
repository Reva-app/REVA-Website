import { test } from "node:test";
import assert from "node:assert/strict";
import { demoHref, describeInterest, maatwerkContactHref, monthlyPrice, PRICING, yearlyPrice } from "@/lib/pricing";

test("prijs per behandelaar is getrapt vanaf de 10e behandelaar", () => {
  assert.equal(monthlyPrice(1), 29);
  assert.equal(monthlyPrice(3), 87);
  assert.equal(monthlyPrice(5), 145);
  assert.equal(monthlyPrice(9), 261);
  assert.equal(monthlyPrice(10), 284);
  assert.equal(monthlyPrice(12), 9 * 29 + 3 * 23);
  assert.equal(yearlyPrice(1), 290);
  assert.equal(yearlyPrice(12), 3300);
  // Een extra behandelaar leidt nooit tot een lagere totaalprijs
  for (let n = 1; n < 100; n++) assert.ok(monthlyPrice(n + 1) > monthlyPrice(n), `${n}`);
  // Ongeldige invoer valt terug op 1 behandelaar
  assert.equal(monthlyPrice(0), PRICING.seatPrice);
  assert.equal(monthlyPrice(Number.NaN), PRICING.seatPrice);
});

test("calculator linkt naar het demoformulier met aantal behandelaars en betaling", () => {
  assert.equal(demoHref(5, true), "/demo-aanvragen?behandelaars=5&facturatie=jaarlijks");
  assert.equal(demoHref(1, false), "/demo-aanvragen?behandelaars=1&facturatie=maandelijks");
  assert.equal(maatwerkContactHref, "/contact?pakket=maatwerk");
});

test("keuze uit de link wordt herkend, met de juiste prijs incl. btw", () => {
  assert.deepEqual(describeInterest({ behandelaars: "3", facturatie: "maandelijks" }), { name: "3 behandelaars", billing: "maandelijks", price: "€87 per maand, incl. btw" });
  assert.deepEqual(describeInterest({ behandelaars: "1", facturatie: "jaarlijks" }), { name: "1 behandelaar", billing: "jaarlijks", price: "€290 per jaar, incl. btw" });
  assert.equal(describeInterest({ behandelaars: "12", facturatie: "jaarlijks" })?.price, "€3.300 per jaar, incl. btw");
  assert.deepEqual(describeInterest({ pakket: "maatwerk" }), { name: "Maatwerk", billing: null, price: "prijs op aanvraag" });
  const url = new URL(demoHref(7, true), "https://www.reva-app.nl");
  assert.equal(describeInterest({ behandelaars: url.searchParams.get("behandelaars"), facturatie: url.searchParams.get("facturatie") })?.name, "7 behandelaars");
});

test("onbekende, oude of ontbrekende waarden komen niet in de mail", () => {
  assert.equal(describeInterest({}), null);
  assert.equal(describeInterest({ behandelaars: "<script>" }), null);
  assert.equal(describeInterest({ behandelaars: "0" }), null);
  assert.equal(describeInterest({ behandelaars: "3.5" }), null);
  assert.equal(describeInterest({ pakket: "solo", facturatie: "jaarlijks" }), null);
  assert.equal(describeInterest({ pakket: "enterprise" }), null);
  assert.equal(describeInterest({ behandelaars: "2", facturatie: "elke-eeuw" })?.billing, "maandelijks");
});
