export type PricingTier = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  popular?: boolean;
  enterprise?: boolean;
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
      "Tot 200 patiënten",
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
      "Tot 750 patiënten",
      "E-mail- en telefoonsupport",
    ],
  },
  {
    name: "Praktijk",
    tagline: "Voor meerdere locaties en een groter team",
    monthly: 349,
    yearly: 3490,
    features: [
      "Alle functies van REVA",
      "6 tot 15 medewerkers",
      "Tot 4 vestigingen",
      "Tot 3.000 patiënten",
      "Persoonlijke onboarding",
      "Prioriteitsondersteuning",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Voor grote praktijken en ketens",
    monthly: 699,
    yearly: 6990,
    enterprise: true,
    features: [
      "Alle functies van REVA",
      "16 of meer medewerkers",
      "Onbeperkt aantal vestigingen",
      "Onbeperkt aantal patiënten",
      "Persoonlijke accountmanager",
      "Maatwerkafspraken op aanvraag",
    ],
  },
];
