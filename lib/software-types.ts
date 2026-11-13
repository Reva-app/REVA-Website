// De vijf soorten software in een fysiopraktijk en de rol van REVA daarin.
// Gedeeld door de homepage en /fysiotherapie-software.

/** Welke software een praktijk gebruikt, en welke rol REVA daarin heeft */
export const softwareTypes: { type: string; what: string; reva: "ja" | "deels" | "nee"; role: string }[] = [
  { type: "EPD", what: "Dossier, anamnese, behandelplan en verslaglegging per behandeling", reva: "nee", role: "Blijft leidend. REVA werkt ernaast, zonder koppeling en zonder dubbele invoer." },
  { type: "Declareren", what: "Behandelingen indienen bij zorgverzekeraars", reva: "nee", role: "Loopt via je EPD of declaratiesoftware." },
  { type: "Agenda", what: "Afspraken plannen en online boeken", reva: "nee", role: "Blijft in je EPD of agendasysteem. REVA plant geen afspraken; patiënten kunnen in de app alleen hun eigen afspraken bijhouden." },
  { type: "Oefenprogramma's", what: "Huiswerkoefeningen samenstellen en meegeven", reva: "ja", role: "Schema's per patiënt uit ongeveer 480 REVA-oefeningen of je eigen oefeningen, met dosering per oefening en een workoutmodus." },
  { type: "Patiëntenportaal", what: "Patiënten volgen tussen de afspraken door", reva: "ja", role: "De kern van REVA: dagelijkse check-ins, Aandacht nodig, herstelplannen, testen en een app in je huisstijl." },
];
