// Pilotprogramma voor de eerste praktijken. Pas `spotsLeft` aan zodra een plek is
// ingevuld; zet `active` op false om het aanbod overal van de site te halen.
// De voorwaarden hieronder staan op /pilot, in de banners en in de mail.

import { euro, PRICING, TRIAL_DAYS } from "@/lib/pricing";

export const pilotOffer = {
  active: true,
  spotsTotal: 5,
  spotsLeft: 5,
  /** Gratis periode in maanden, in plaats van de standaard proefperiode */
  freeMonths: 3,
  /** Vaste prijs per behandelaar na de gratis periode: de staffelprijs, vanaf de eerste behandelaar */
  pilotSeatPrice: PRICING.staffelPrice,
  /** Minimaal aantal patiënten in de eerste 2 maanden */
  minPatients: 10,
  /** Korte vermelding, bijvoorbeeld in labels en knoppen */
  short: `3 maanden gratis, daarna voor altijd ${euro(PRICING.staffelPrice)} per behandelaar`,
  /** Volledige omschrijving in een zin */
  full: `3 maanden gratis en daarna voor altijd ${euro(PRICING.staffelPrice)} per behandelaar per maand (incl. btw), zolang je klant blijft`,
  /** Voor wie het aanbod geldt */
  eligible: "Nederlandse fysiotherapiepraktijken, van zelfstandige tot team. Ketens en Maatwerk vallen er niet onder",
  /** Wat een praktijk ervoor teruggeeft, in één zin */
  inReturn: "In ruil voor echt gebruik, eerlijke feedback en een klantervaring die we mogen delen",
  /** Querystring waarmee het formulier en de mail het aanbod herkennen */
  param: "pilot",
};

/** Eén citeerbare zin over het pilotaanbod (llms.txt, agent-markdown, FAQ). */
export const pilotSentence = `REVA zoekt ${pilotOffer.spotsTotal} pilotpraktijken: zij krijgen ${pilotOffer.freeMonths} maanden gratis in plaats van ${TRIAL_DAYS} dagen, en betalen daarna voor altijd ${euro(PRICING.staffelPrice)} per behandelaar per maand inclusief btw, de prijs die anderen pas vanaf de ${PRICING.staffelFrom}e behandelaar krijgen.`;

/** Wat een pilotpraktijk krijgt */
export const pilotBenefits = [
  {
    title: `${pilotOffer.freeMonths} maanden gratis`,
    text: `In plaats van de standaard ${TRIAL_DAYS} dagen. Lang genoeg om meerdere patiënten echt door een herstelfase te begeleiden.`,
  },
  {
    title: `Daarna voor altijd ${euro(PRICING.staffelPrice)} per behandelaar`,
    text: `De prijs die anderen pas vanaf de ${PRICING.staffelFrom}e behandelaar krijgen, voor jou vanaf de eerste, zolang je klant blijft. Inclusief btw, ook jaarlijks (${euro(PRICING.staffelPrice * PRICING.yearlyMonths)} per behandelaar per jaar).`,
  },
  {
    title: "Persoonlijke inrichting",
    text: "We richten je praktijk samen in: huisstijl, medewerkers en locaties, je bestaande patiëntenlijst importeren (CSV) en je eerste herstelplannen klaarzetten.",
  },
  {
    title: "Direct contact met de oprichter",
    text: "Vragen en wensen bespreek je rechtstreeks met Stef Robberts, zonder ticketsysteem of wachtrij.",
  },
  {
    title: "Invloed op de roadmap",
    text: "Jouw ervaringen in de praktijk bepalen mee wat we als eerste bouwen.",
  },
  {
    title: "Je praktijk op de site",
    text: "Als je dat wilt, staat je praktijk als pilotpraktijk op de kaart met praktijken die met REVA werken.",
  },
];

/** Wat we van een pilotpraktijk vragen */
export const pilotAsks = [
  {
    title: `Minimaal ${pilotOffer.minPatients} patiënten`,
    text: `Je gebruikt REVA in de eerste 2 maanden bij minimaal ${pilotOffer.minPatients} patiënten in een herstel- of revalidatietraject.`,
  },
  {
    title: "Twee korte evaluatiegesprekken",
    text: "Na ongeveer 4 en 10 weken bespreken we wat werkt en wat beter kan, op momenten die jou uitkomen.",
  },
  {
    title: "Een klantervaring",
    text: `Na ${pilotOffer.freeMonths} maanden een korte klantervaring die we, met naam en logo van je praktijk, op de site mogen tonen.`,
  },
];

/** Voor welke praktijken de pilot bedoeld is */
export const pilotFit = [
  "Je begeleidt patiënten na een operatie of sportblessure, in een herstel- of revalidatietraject",
  "Je wilt weten hoe het met je patiënten gaat tussen de behandelingen door",
  "Je staat open voor een nieuwe werkwijze en deelt graag eerlijk je mening",
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
