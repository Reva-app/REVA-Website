// Rekenmodel voor de besparingstool (homepage en /besparing-berekenen).
// Uitgangspunten sluiten aan op het rekenvoorbeeld in de blog "Stop met WhatsAppen":
// vijf korte contactmomenten van vijf minuten per behandelaar per dag. Alles is een
// schatting die de bezoeker zelf aanpast; de prijs komt uit lib/pricing.ts.

import { monthlyPrice, yearlyPrice } from "@/lib/pricing";

export type SavingsInput = {
  /** Aantal behandelaars in de praktijk */
  seats: number;
  /** Contactmomenten buiten de behandeling om, per behandelaar per werkdag (bellen, appjes, balie) */
  contactsPerDay: number;
  /** Minuten per contactmoment, inclusief terugbellen, vastleggen en een collega bijpraten */
  minutesPerContact: number;
  /** Deel van die contactmomenten dat de dagelijkse check-in en Aandacht nodig overbodig maken, in procenten */
  reductionPct: number;
  /** Werkdagen per behandelaar per week */
  daysPerWeek: number;
  /** Wat een uur van een behandelaar de praktijk waard is, in euro */
  hourValue: number;
  /** Jaarlijks betalen (2 maanden gratis) */
  yearly: boolean;
};

/** Werkweken per jaar, na vakantie en feestdagen */
export const WORK_WEEKS = 46;
/** Duur van een standaardbehandeling in minuten, voor de omrekening naar behandelingen */
export const TREATMENT_MINUTES = 30;

export const savingsDefaults: SavingsInput = {
  seats: 3,
  contactsPerDay: 5,
  minutesPerContact: 5,
  reductionPct: 50,
  daysPerWeek: 4,
  hourValue: 60,
  yearly: false,
};

/** Grenzen van de schuifjes in de tool */
export const savingsLimits = {
  seats: [1, 30],
  contactsPerDay: [1, 15],
  minutesPerContact: [1, 15],
  reductionPct: [10, 80],
  daysPerWeek: [1, 5],
  hourValue: [30, 120],
} as const;

const clamp = (n: number, [min, max]: readonly [number, number]) =>
  Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));

export function computeSavings(raw: SavingsInput) {
  const input: SavingsInput = {
    seats: Math.round(clamp(raw.seats, savingsLimits.seats)),
    contactsPerDay: clamp(raw.contactsPerDay, savingsLimits.contactsPerDay),
    minutesPerContact: clamp(raw.minutesPerContact, savingsLimits.minutesPerContact),
    reductionPct: clamp(raw.reductionPct, savingsLimits.reductionPct),
    daysPerWeek: clamp(raw.daysPerWeek, savingsLimits.daysPerWeek),
    hourValue: clamp(raw.hourValue, savingsLimits.hourValue),
    yearly: raw.yearly,
  };
  const minutesNowPerWeek = input.seats * input.contactsPerDay * input.minutesPerContact * input.daysPerWeek;
  const minutesSavedPerWeek = minutesNowPerWeek * (input.reductionPct / 100);
  const hoursSavedPerWeek = minutesSavedPerWeek / 60;
  const hoursSavedPerYear = hoursSavedPerWeek * WORK_WEEKS;
  const valuePerYear = hoursSavedPerYear * input.hourValue;
  const revaPerYear = input.yearly ? yearlyPrice(input.seats) : monthlyPrice(input.seats) * 12;
  const netPerYear = valuePerYear - revaPerYear;
  // Behandelingen per maand die in de vrijgekomen tijd passen
  const treatmentsPerMonth = (minutesSavedPerWeek * WORK_WEEKS) / 12 / TREATMENT_MINUTES;
  return {
    input,
    hoursNowPerWeek: minutesNowPerWeek / 60,
    hoursSavedPerWeek,
    hoursSavedPerYear,
    valuePerYear,
    revaPerYear,
    netPerYear,
    /** Hoe vaak de waarde van de tijdwinst de kosten van REVA dekt */
    returnMultiple: revaPerYear > 0 ? valuePerYear / revaPerYear : 0,
    treatmentsPerMonth,
  };
}

/** Getal als "2,5" (maximaal één decimaal, Nederlandse notatie) */
export const nl1 = (n: number) => n.toLocaleString("nl-NL", { maximumFractionDigits: 1 });
/** Bedrag als "€6.900", afgerond op hele euro's */
export const euroRound = (n: number) => `€${Math.round(n).toLocaleString("nl-NL")}`;

/** Het standaardvoorbeeld als citeerbare zin (site, llms.txt, FAQ) */
export function savingsExampleSentence() {
  const r = computeSavings(savingsDefaults);
  const d = savingsDefaults;
  return `Rekenvoorbeeld: een praktijk met ${d.seats} behandelaars die elk ${d.contactsPerDay} korte contactmomenten van ${d.minutesPerContact} minuten per dag hebben, ${d.daysPerWeek} dagen per week, wint bij ${d.reductionPct}% minder van die contactmomenten ongeveer ${nl1(r.hoursSavedPerWeek)} uur per week terug, ${Math.round(r.hoursSavedPerYear)} uur per jaar. Bij ${euroRound(d.hourValue)} per uur is dat ${euroRound(r.valuePerYear)} per jaar, tegenover ${euroRound(r.revaPerYear)} voor REVA.`;
}
