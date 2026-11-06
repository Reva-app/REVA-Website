// Pilotaanbod voor de eerste praktijken. Pas `spotsLeft` aan zodra een plek is
// ingevuld; zet `active` op false om het aanbod overal van de site te halen.

export const pilotOffer = {
  active: true,
  spotsTotal: 3,
  spotsLeft: 3,
  discountPercent: 50,
  /** Korte vermelding, bijvoorbeeld in de hero */
  short: "50% korting op het eerste jaar",
  /** Wat een praktijk ervoor teruggeeft */
  inReturn: "In ruil voor je feedback en een korte klantervaring",
  /** Querystring waarmee het formulier en de mail het aanbod herkennen */
  param: "pilot",
};

export const pilotDemoHref = `/demo-aanvragen?aanbod=${pilotOffer.param}`;

export function pilotSpotsLabel() {
  const { spotsLeft, spotsTotal } = pilotOffer;
  if (spotsLeft <= 0) return "Alle plekken zijn vergeven";
  return spotsLeft === spotsTotal
    ? `Voor de eerste ${spotsTotal} praktijken`
    : `Nog ${spotsLeft} van de ${spotsTotal} plekken beschikbaar`;
}

/** Is het aanbod uit een formulier geldig? Alleen als het aanbod nog loopt. */
export function isPilotRequest(aanbod: unknown) {
  return pilotOffer.active && pilotOffer.spotsLeft > 0 && aanbod === pilotOffer.param;
}
