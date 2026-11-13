// Eén prijsmodel voor de hele site: betalen per behandelaar, met een staffel vanaf
// de 10e behandelaar. Alle bedragen zijn inclusief btw. Fysiotherapie is vrijgesteld
// van btw, dus een praktijk kan btw niet terugvragen: het bedrag inclusief btw is
// voor hen de echte prijs. Teksten op de site, in de FAQ, de blog, llms.txt en de
// markdown voor AI-agents halen hun bedragen hieruit, zodat ze niet uit elkaar lopen.

export const PRICING = {
  /** Prijs per behandelaar per maand, behandelaar 1 t/m 9 */
  seatPrice: 29,
  /** Prijs per behandelaar per maand vanaf de staffel */
  staffelPrice: 23,
  /** Vanaf deze behandelaar geldt de staffelprijs */
  staffelFrom: 10,
  /** Jaarlijks betalen: je betaalt dit aantal keer de maandprijs (2 maanden gratis) */
  yearlyMonths: 10,
  currency: "EUR",
  unit: "per behandelaar per maand",
} as const;

export const TRIAL_DAYS = 30;

/** Bovengrens van de calculator; daarboven is Maatwerk logischer. */
export const CALCULATOR_MAX = 50;

const clampSeats = (n: number) => (Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1);

/**
 * Maandprijs voor een aantal behandelaars, getrapt: behandelaar 1 t/m 9 kosten de
 * gewone prijs, elke behandelaar vanaf de 10e de staffelprijs. Zo leidt een extra
 * behandelaar nooit tot een lagere totaalprijs.
 */
export function monthlyPrice(seats: number) {
  const n = clampSeats(seats);
  const regular = Math.min(n, PRICING.staffelFrom - 1);
  const staffel = Math.max(0, n - (PRICING.staffelFrom - 1));
  return regular * PRICING.seatPrice + staffel * PRICING.staffelPrice;
}

/** Jaarprijs: 10 x de maandprijs. */
export function yearlyPrice(seats: number) {
  return monthlyPrice(seats) * PRICING.yearlyMonths;
}

/** Bedrag als "€1.234". */
export const euro = (n: number) => `€${n.toLocaleString("nl-NL")}`;

/** Rekenvoorbeelden per maand, incl. btw. */
export const priceExamples = [1, 3, 5, 9, 12].map((seats) => ({
  seats,
  monthly: monthlyPrice(seats),
  yearly: yearlyPrice(seats),
}));

/** Kernzinnen, op zichzelf te citeren (site, FAQ, llms.txt, agent-markdown). */
export const priceSentence = `REVA kost ${euro(PRICING.seatPrice)} per behandelaar per maand inclusief btw, vanaf de ${PRICING.staffelFrom}e behandelaar ${euro(PRICING.staffelPrice)}, met onbeperkt patiënten en locaties.`;
export const priceShort = `${euro(PRICING.seatPrice)} per behandelaar per maand, incl. btw`;
export const yearlySentence = `Bij jaarlijks betalen krijg je 2 maanden gratis: je betaalt ${PRICING.yearlyMonths} keer de maandprijs, dus ${euro(PRICING.seatPrice * PRICING.yearlyMonths)} per behandelaar per jaar (${euro(PRICING.staffelPrice * PRICING.yearlyMonths)} vanaf de ${PRICING.staffelFrom}e).`;
export const vatNote = "Fysiotherapie is vrijgesteld van btw. Daarom tonen we de prijs die je echt betaalt, inclusief btw.";
export const whoCounts = "Iedere praktijkeigenaar en fysiotherapeut met een account in het praktijkportaal telt als behandelaar. Patiënten betalen niets.";

/** Wat er in de prijs zit */
export const includedInPrice = [
  "Alle functies, ook de AI-suggesties van REVA-inzichten",
  "Onbeperkt patiënten",
  "Onbeperkt locaties",
  "Eigen huisstijl en praktijkanalyse",
  "Persoonlijke onboarding",
  "Support per e-mail en telefoon",
];

/** Maatwerk voor ketens en afwijkende afspraken */
export const maatwerk = {
  name: "Maatwerk",
  description:
    "Een keten of afwijkende afspraken nodig? We maken een voorstel op maat, met een vaste contactpersoon.",
};

export const pricingFaq = [
  {
    q: "Wat kost REVA?",
    a: `${priceSentence} Alle functies zijn inbegrepen. ${yearlySentence}`,
  },
  {
    q: "Wie telt als behandelaar?",
    a: `${whoCounts} Je betaalt dus voor het aantal mensen in je team dat met REVA werkt, niet voor het aantal patiënten.`,
  },
  {
    q: "Hoe werkt de prijs vanaf de 10e behandelaar?",
    a: `Behandelaar 1 tot en met 9 kosten ${euro(PRICING.seatPrice)} per maand, elke behandelaar vanaf de ${PRICING.staffelFrom}e kost ${euro(PRICING.staffelPrice)}. Met 12 behandelaars betaal je dus 9 × ${euro(PRICING.seatPrice)} + 3 × ${euro(PRICING.staffelPrice)} = ${euro(monthlyPrice(12))} per maand.`,
  },
  {
    q: "Kan ik REVA eerst gratis proberen?",
    a: `Ja. Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Wil je eerst zien hoe REVA werkt in jouw praktijk, vraag dan een persoonlijke demo aan.`,
  },
  {
    q: "Zijn alle functies inbegrepen?",
    a: "Ja. Er is geen afgeslankte versie: iedere behandelaar heeft toegang tot alle functies van REVA, ook de AI-suggesties van REVA-inzichten, de eigen huisstijl en de praktijkanalyse. Er komen geen kosten per functie bij.",
  },
  {
    q: "Kan ik maandelijks of jaarlijks betalen?",
    a: `Beide kan. ${yearlySentence}`,
  },
  {
    q: "Zijn de prijzen inclusief btw?",
    a: `Ja, alle prijzen zijn inclusief btw. Wat je ziet, is wat je betaalt. ${vatNote}`,
  },
  {
    q: "Wat gebeurt er als mijn praktijk groeit?",
    a: "Je voegt een behandelaar toe en betaalt vanaf dat moment voor één behandelaar meer. Het aantal patiënten en locaties is onbeperkt, dus daar loop je nooit tegenaan.",
  },
  {
    q: "Is er een prijs voor ketens?",
    a: `Ja. Voor ketens en afwijkende afspraken maken we een voorstel op maat, met een vaste contactpersoon. Neem contact op via info@reva-app.nl.`,
  },
  {
    q: "Is patiëntdata veilig bij REVA?",
    a: "Ja. Gezondheidsgegevens zijn afgeschermd per praktijk, tweestapsverificatie is verplicht voor iedereen, elke inzage in een dossier wordt gelogd en REVA werkt op basis van een verwerkersovereenkomst met jouw praktijk.",
  },
];

// ─── Keuze doorgeven aan het demo- en contactformulier ─────────────────────

export type Billing = "maandelijks" | "jaarlijks";

/** Link vanuit de calculator naar het demoformulier, met aantal behandelaars en betaling. */
export function demoHref(seats: number, yearly: boolean) {
  return `/demo-aanvragen?behandelaars=${clampSeats(seats)}&facturatie=${yearly ? "jaarlijks" : "maandelijks"}`;
}

export const maatwerkContactHref = "/contact?pakket=maatwerk";

const behandelaars = (n: number) => `${n} ${n === 1 ? "behandelaar" : "behandelaars"}`;

/**
 * Leesbare keuze voor in de notificatiemail. Alleen een geldig aantal behandelaars
 * of "maatwerk" wordt herkend, zodat er geen willekeurige tekst uit de URL in de
 * mail komt. Oude pakketlinks (?pakket=solo) geven null en breken dus niets.
 */
export function describeInterest(input: { behandelaars?: unknown; pakket?: unknown; facturatie?: unknown }) {
  const { behandelaars: seatsRaw, pakket, facturatie } = input;
  if (typeof pakket === "string" && pakket.trim().toLowerCase() === "maatwerk") {
    return { name: maatwerk.name, billing: null, price: "prijs op aanvraag" };
  }
  if (typeof seatsRaw !== "string" && typeof seatsRaw !== "number") return null;
  const raw = String(seatsRaw).trim();
  if (!/^\d{1,3}$/.test(raw)) return null;
  const seats = Number(raw);
  if (seats < 1 || seats > 999) return null;
  const billing: Billing = facturatie === "jaarlijks" ? "jaarlijks" : "maandelijks";
  const price =
    billing === "jaarlijks"
      ? `${euro(yearlyPrice(seats))} per jaar, incl. btw`
      : `${euro(monthlyPrice(seats))} per maand, incl. btw`;
  return { name: behandelaars(seats), billing, price };
}
