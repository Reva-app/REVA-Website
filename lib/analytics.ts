// Meetgebeurtenissen voor Google Tag Manager (GTM-MP34DGQB). Alles gaat via de
// dataLayer; Tag Manager en Consent Mode bepalen of en waarheen het verstuurd wordt.
// Stuur nooit persoonsgegevens mee (geen naam, e-mail of telefoonnummer).
//
// Gebeurtenissen:
//   generate_lead           demo- of pilotaanvraag verstuurd (met value in EUR per jaar)
//   contact_form_submit     contactformulier verstuurd
//   newsletter_signup       aanmelding nieuwsbrief
//   savings_calculated      besparingstool berekend
//   pricing_calculator_use  aantal behandelaars of maand/jaar gewijzigd in de prijscalculator
//   cta_click               klik op een knop of link naar demo, pilot, prijzen of besparingstool
//   login_click             klik naar inloggen of het dashboard
//   contact_click           klik op e-mailadres of telefoonnummer

type Params = Record<string, string | number | boolean | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
