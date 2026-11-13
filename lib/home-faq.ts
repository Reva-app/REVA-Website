// FAQ op de homepage, gedeeld met de Markdown-versie voor AI-agents

import { priceSentence, TRIAL_DAYS } from "@/lib/pricing";
import { savingsExampleSentence } from "@/lib/savings";

export const homeFaq = [
  {
    q: "Wat is REVA precies?",
    a: "REVA is een Recovery Management Platform voor fysiotherapiepraktijken: het platform voor herstelbegeleiding tussen de behandelingen door. Patiënten houden na een blessure of operatie in de app zelf hun herstel bij: check-ins, oefeningen, medicatie en doelen. Jij ziet in het praktijkportaal wie aandacht nodig heeft en volgt de voortgang per patiënt.",
  },
  {
    q: "Welke software heeft een fysiopraktijk nodig?",
    a: "Een fysiopraktijk werkt meestal met vijf soorten software: een EPD voor dossier en verslaglegging, een agenda, software om te declareren, een tool voor oefenprogramma's en een patiëntenportaal. Het EPD is de basis. REVA vult het aan voor de tijd tussen de behandelingen: patiënten houden zelf hun herstel bij en de fysiotherapeut ziet wie aandacht nodig heeft.",
  },
  {
    q: "Wat is het verschil tussen een EPD en een Recovery Management Platform?",
    a: "Een EPD legt vast wat er tijdens de behandeling gebeurt en regelt vaak agenda en declaratie. Een Recovery Management Platform zoals REVA richt zich op het herstel tussen de behandelingen door: check-ins, herstelplannen, oefeningen, testen en voortgang. De twee werken naast elkaar, zonder dubbele invoer.",
  },
  {
    q: "Vervangt REVA mijn bestaande EPD of praktijksoftware?",
    a: "Nee. REVA werkt naast elk EPD, zonder koppeling. Agenda, verslaglegging en declaraties blijven in je EPD, dus er is geen dubbele invoer. REVA richt zich op het herstel van je patiënten tussen de behandelingen door.",
  },
  {
    q: "Wat kost REVA voor mijn praktijk?",
    a: `${priceSentence} Alle functies zijn inbegrepen. Bij jaarlijks betalen krijg je 2 maanden gratis, en je kunt REVA ${TRIAL_DAYS} dagen gratis proberen.`,
  },
  {
    q: "Hoeveel tijd bespaart REVA een fysiopraktijk?",
    a: `${savingsExampleSentence()} Met de besparingstool op de homepage reken je het uit met je eigen cijfers.`,
  },
  {
    q: "Hoe lang duurt het om REVA in te richten?",
    a: "De meeste praktijken hebben REVA snel operationeel, zonder IT-traject en zonder koppeling met je EPD. Je richt je organisatie in, importeert je patiëntenlijst via CSV, kiest herstelplannen en nodigt daarna direct je eerste patiënten uit.",
  },
  {
    q: "Werkt REVA ook op de telefoon van mijn patiënten?",
    a: "Ja. REVA werkt in de browser op elke telefoon, en patiënten kunnen het als app op hun beginscherm zetten. De dagelijkse check-in kost ongeveer 30 seconden. Voor patiënten is REVA gratis.",
  },
  {
    q: "Is patiëntdata veilig bij REVA?",
    a: "Ja. Gezondheidsgegevens zijn afgeschermd per praktijk, tweestapsverificatie is verplicht voor iedereen en elke inzage in een dossier wordt gelogd. Jouw praktijk blijft verwerkingsverantwoordelijke, REVA werkt op basis van een verwerkersovereenkomst die aansluit bij de AVG.",
  },
];

// Vergelijking op de homepage (en in de Markdown-versie voor AI-agents)
export const comparisonRows = [
  { topic: "Overzicht per patiënt", old: "Verspreid over telefoons, mappen en notities", reva: "Alles in één dossier, voor het hele team" },
  { topic: "Wie heeft aandacht nodig", old: "Zelf nalopen of wachten tot de patiënt belt", reva: "De lijst Aandacht nodig, automatisch bijgewerkt" },
  { topic: "Oefeningen en herstelplan", old: "Papiertjes, pdf's of losse video's", reva: "In het portaal, altijd bij de hand" },
  { topic: "Bij vakantie of ziekte", old: "Informatie zit bij één behandelaar", reva: "Elke collega ziet hetzelfde dossier" },
  { topic: "Privacy", old: "Gezondheidsdata op privételefoons", reva: "Versleuteld op Europese servers, met verwerkersovereenkomst" },
  { topic: "Jouw tijd", old: "Reageren tussen behandelingen door", reva: "Patiënten loggen zelf, jij kijkt wanneer het uitkomt" },
];
