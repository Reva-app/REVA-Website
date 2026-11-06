// Pilotprogramma voor de eerste praktijken. Pas `spotsLeft` aan zodra een plek is
// ingevuld; zet `active` op false om het aanbod overal van de site te halen.
// De voorwaarden hieronder staan op /pilot, in de banners en in de mail.

export const pilotOffer = {
  active: true,
  spotsTotal: 3,
  spotsLeft: 3,
  discountPercent: 50,
  /** Korte vermelding, bijvoorbeeld in de hero */
  short: "50% korting op het eerste jaar",
  /** Wat een praktijk ervoor teruggeeft, in één zin */
  inReturn: "In ruil voor je feedback en een klantervaring die we mogen delen",
  /** Querystring waarmee het formulier en de mail het aanbod herkennen */
  param: "pilot",
};

/** Wat een pilotpraktijk krijgt */
export const pilotBenefits = [
  {
    title: `${pilotOffer.discountPercent}% korting op het eerste jaar`,
    text: "Op elk pakket, van Solo tot Praktijk Plus. Daarna geldt het gewone tarief van je pakket.",
  },
  {
    title: "Persoonlijke onboarding",
    text: "We richten REVA samen met je in: medewerkers, locaties, huisstijl en je eerste herstelplannen.",
  },
  {
    title: "Direct contact met de oprichter",
    text: "Vragen en wensen bespreek je rechtstreeks met Stef Robberts, zonder ticketsysteem of wachtrij.",
  },
  {
    title: "Invloed op wat we bouwen",
    text: "Jullie ervaringen in de praktijk bepalen mee welke verbeteringen en functies voorrang krijgen.",
  },
];

/** Wat we van een pilotpraktijk vragen */
export const pilotAsks = [
  {
    title: "REVA gebruiken in de praktijk",
    text: "Je zet REVA in bij echte patiënten in een revalidatietraject, als vast onderdeel van je werkwijze.",
  },
  {
    title: "Eerlijke feedback",
    text: "Regelmatig een kort evaluatiegesprek over wat werkt en wat beter kan, op momenten die jou uitkomen.",
  },
  {
    title: "Een klantervaring",
    text: "Na de eerste maanden een korte klantervaring die we, met naam en logo van je praktijk, op de site mogen tonen.",
  },
];

/** Voor welke praktijken de pilot bedoeld is */
export const pilotFit = [
  "Je begeleidt patiënten in revalidatietrajecten, bijvoorbeeld na een operatie of sportblessure",
  "Je wilt minder tijd kwijt zijn aan telefoontjes en appjes tussen de behandelingen door",
  "Je staat open voor een nieuwe werkwijze en deelt graag je mening",
  "Je praktijk is gevestigd in Nederland, als zelfstandige of met een team",
];

export const pilotDemoHref = "/pilot#aanmelden";

export function pilotSpotsLabel() {
  const { spotsLeft, spotsTotal } = pilotOffer;
  if (spotsLeft <= 0) return "Alle plekken zijn vergeven";
  return spotsLeft === spotsTotal
    ? `${spotsTotal} plekken beschikbaar`
    : `Nog ${spotsLeft} van de ${spotsTotal} plekken beschikbaar`;
}

/** Is het aanbod uit een formulier geldig? Alleen als het aanbod nog loopt. */
export function isPilotRequest(aanbod: unknown) {
  return pilotOffer.active && pilotOffer.spotsLeft > 0 && aanbod === pilotOffer.param;
}
