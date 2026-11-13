import { test } from "node:test";
import assert from "node:assert/strict";
import { computeSavings, savingsDefaults, savingsExampleSentence, WORK_WEEKS } from "@/lib/savings";
import { monthlyPrice, yearlyPrice } from "@/lib/pricing";

test("standaardvoorbeeld: 3 behandelaars, 5 × 5 minuten, 4 dagen, 50%", () => {
  const r = computeSavings(savingsDefaults);
  assert.equal(r.hoursNowPerWeek, 5); // 3 × 5 × 5 × 4 = 300 minuten
  assert.equal(r.hoursSavedPerWeek, 2.5);
  assert.equal(r.hoursSavedPerYear, 2.5 * WORK_WEEKS);
  assert.equal(r.valuePerYear, 2.5 * WORK_WEEKS * 60);
  assert.equal(r.revaPerYear, monthlyPrice(3) * 12);
  assert.equal(r.netPerYear, r.valuePerYear - r.revaPerYear);
  assert.ok(Math.abs(r.treatmentsPerMonth - (150 * WORK_WEEKS) / 12 / 30) < 1e-9);
});

test("jaarlijks betalen rekent met de jaarprijs, ook boven de 10 behandelaars", () => {
  const r = computeSavings({ ...savingsDefaults, seats: 12, yearly: true });
  assert.equal(r.revaPerYear, yearlyPrice(12));
});

test("invoer buiten de grenzen wordt begrensd", () => {
  const r = computeSavings({ ...savingsDefaults, seats: 0, reductionPct: 500, hourValue: Number.NaN });
  assert.equal(r.input.seats, 1);
  assert.equal(r.input.reductionPct, 80);
  assert.equal(r.input.hourValue, 30);
});

test("voorbeeldzin noemt de berekende uren en bedragen", () => {
  const s = savingsExampleSentence();
  assert.match(s, /2,5 uur per week/);
  assert.match(s, /115 uur per jaar/);
  assert.match(s, /€6\.900 per jaar/);
  assert.match(s, /€1\.044 voor REVA/);
});
