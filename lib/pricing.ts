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

/** Omgerekend maandbedrag bij jaarlijks betalen, afgerond op hele euro's. */
export function yearlyPerMonth(tier: PricingTier) {
  return Math.round(tier.yearly / 12);
}
