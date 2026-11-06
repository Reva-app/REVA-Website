export type PricingTier = {
  name: string;
  tagline: string;
  monthly: number;
  // Jaarprijs = 10 x maandprijs (2 maanden gratis)
  yearly: number;
  popular?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Solo",
    tagline: "Voor de zelfstandige fysiotherapeut",
    monthly: 49,
    yearly: 490,
    features: [
      "Alle functies van REVA",
      "1 medewerker",
      "1 vestiging",
      "Tot 200 actieve patiënten",
      "E-mailsupport",
    ],
  },
  {
    name: "Team",
    tagline: "Voor een kleine, groeiende praktijk",
    monthly: 129,
    yearly: 1290,
    popular: true,
    features: [
      "Alle functies van REVA",
      "2 tot 5 medewerkers",
      "Tot 2 vestigingen",
      "Tot 750 actieve patiënten",
      "E-mail- en telefoonsupport",
    ],
  },
  {
    name: "Praktijk",
    tagline: "Voor een gevestigde praktijk met een vast team",
    monthly: 229,
    yearly: 2290,
    features: [
      "Alle functies van REVA",
      "6 tot 10 medewerkers",
      "Tot 3 vestigingen",
      "Tot 1.500 actieve patiënten",
      "E-mail- en telefoonsupport",
      "Persoonlijke onboarding",
    ],
  },
  {
    name: "Praktijk Plus",
    tagline: "Voor meerdere locaties en een groter team",
    monthly: 349,
    yearly: 3490,
    features: [
      "Alle functies van REVA",
      "11 tot 20 medewerkers",
      "Tot 5 vestigingen",
      "Tot 3.000 actieve patiënten",
      "Persoonlijke onboarding",
      "Prioriteitsondersteuning",
    ],
  },
];

// Enterprise staat niet als kaart, maar als brede balk onder de pakketten
export const enterpriseTier = {
  name: "Enterprise",
  fromMonthly: 699,
  tagline: "Voor grote praktijken en ketens",
  description:
    "Meer dan 20 medewerkers of meerdere vestigingen in een keten? We maken een voorstel op maat.",
  features: [
    "Alle functies van REVA",
    "21 of meer medewerkers",
    "Onbeperkt aantal vestigingen",
    "Onbeperkt aantal actieve patiënten",
    "Persoonlijke accountmanager",
    "Maatwerkafspraken",
  ],
};

export const TRIAL_DAYS = 30;

export const pricingFaq = [
  {
    q: "Wat kost REVA?",
    a: "REVA heeft vijf pakketten: Solo (49 euro per maand), Team (129 euro per maand), Praktijk (229 euro per maand), Praktijk Plus (349 euro per maand) en Enterprise (vanaf 699 euro per maand). Bij jaarlijks betalen krijg je 2 maanden gratis. Welk pakket past, hangt af van het aantal medewerkers, vestigingen en actieve patiënten in je praktijk. Alle prijzen zijn exclusief btw.",
  },
  {
    q: "Kan ik REVA eerst gratis proberen?",
    a: `Ja. Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Wil je eerst zien hoe REVA werkt in jouw praktijk, vraag dan een persoonlijke demo aan.`,
  },
  {
    q: "Zijn alle functies inbegrepen, in elk pakket?",
    a: "Ja. Er is geen aparte, afgeslankte versie: elk pakket geeft toegang tot alle functies van REVA. Het verschil tussen de pakketten zit in het aantal medewerkers, vestigingen en actieve patiënten, en in het niveau van support en onboarding.",
  },
  {
    q: "Wat zijn actieve patiënten?",
    a: "Alleen patiënten die op dit moment bij je in behandeling zijn, tellen mee voor je pakket. Patiënten van wie de behandeling is afgerond, tellen niet mee.",
  },
  {
    q: "Kan ik maandelijks of jaarlijks betalen?",
    a: "Beide kan. Bij jaarlijks betalen krijg je 2 maanden gratis: je betaalt tien keer de maandprijs voor een heel jaar.",
  },
  {
    q: "Zijn de prijzen inclusief btw?",
    a: "Nee. Alle prijzen op deze pagina zijn exclusief btw.",
  },
  {
    q: "Wat gebeurt er als mijn praktijk groeit?",
    a: "Je kunt op elk moment overstappen naar een groter pakket. Neem contact met ons op zodra je tegen de grenzen van je huidige pakket aanloopt, dan regelen we de overstap samen.",
  },
  {
    q: "Is patiëntdata veilig bij REVA?",
    a: "Ja, in elk pakket. Gezondheidsdata wordt versleuteld opgeslagen en REVA werkt op basis van een verwerkersovereenkomst met jouw praktijk.",
  },
];

/** Omgerekend maandbedrag bij jaarlijks betalen, afgerond op hele euro's. */
export function yearlyPerMonth(tier: PricingTier) {
  return Math.round(tier.yearly / 12);
}

// ─── Pakketkeuze doorgeven aan het demo- en contactformulier ───────────────

export type Billing = "maandelijks" | "jaarlijks";

export const tierSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

/** Link van een prijskaart naar het demoformulier, met het gekozen pakket. */
export function demoHref(tier: PricingTier, yearly: boolean) {
  return `/demo-aanvragen?pakket=${tierSlug(tier.name)}&facturatie=${yearly ? "jaarlijks" : "maandelijks"}`;
}

export const enterpriseContactHref = `/contact?pakket=${tierSlug(enterpriseTier.name)}`;

const euro = (n: number) => `€${n.toLocaleString("nl-NL")}`;

/**
 * Leesbare pakketkeuze voor in de notificatiemail. Alleen bekende pakketten
 * worden herkend, zodat er geen willekeurige tekst uit de URL in de mail komt.
 */
export function describeInterest(pakket: unknown, facturatie: unknown) {
  if (typeof pakket !== "string") return null;
  const slug = pakket.trim().toLowerCase();
  if (slug === tierSlug(enterpriseTier.name)) {
    return { name: enterpriseTier.name, billing: null, price: `vanaf ${euro(enterpriseTier.fromMonthly)} per maand` };
  }
  const tier = pricingTiers.find((t) => tierSlug(t.name) === slug);
  if (!tier) return null;
  const billing: Billing = facturatie === "jaarlijks" ? "jaarlijks" : "maandelijks";
  const price =
    billing === "jaarlijks"
      ? `${euro(tier.yearly)} per jaar (${euro(yearlyPerMonth(tier))} per maand)`
      : `${euro(tier.monthly)} per maand`;
  return { name: tier.name, billing, price };
}
