// Alle functies van REVA, gebaseerd op het werkelijke dashboard (reva-app).
// Gedeeld door /functies, /functies/voor-fysios en /functies/voor-patienten.

export type FeatureGroup = "fysio" | "praktijk" | "patient";

export type DemoKey =
  | "intake"
  | "herstelplan"
  | "signalering"
  | "dossier"
  | "oefeningen"
  | "agenda"
  | "analyse"
  | "team"
  | "huisstijl"
  | "veiligheid"
  | "checkin"
  | "training"
  | "medicatie"
  | "doelen"
  | "inzicht"
  | "patientdossier";

export interface Feature {
  id: string;
  group: FeatureGroup;
  title: string;
  /** Eén zin: wat het oplost */
  lead: string;
  text: string;
  bullets: string[];
  demo: DemoKey;
}

export const featureGroups: { id: FeatureGroup; title: string; intro: string }[] = [
  {
    id: "fysio",
    title: "Voor de fysiotherapeut",
    intro: "Van intake tot afronding: alles wat je nodig hebt om patiënten ook tussen de afspraken door goed te begeleiden.",
  },
  {
    id: "praktijk",
    title: "Voor de praktijk",
    intro: "Overzicht over je team, je locaties en je agenda, met de veiligheid die gezondheidsdata vraagt.",
  },
  {
    id: "patient",
    title: "Voor je patiënten",
    intro: "Een eigen portaal op de telefoon van je patiënt, in de huisstijl van jouw praktijk.",
  },
];

export const features: Feature[] = [
  // ─── Voor de fysiotherapeut ──────────────────────────────────────────────
  {
    id: "intake",
    group: "fysio",
    title: "Intake met REVA-analyse",
    lead: "Een nieuwe patiënt staat in een paar minuten klaar, met een voorstel voor het herstelplan.",
    text: "Je doorloopt een korte intake in drie stappen: de aanleiding, de intake zelf en een samenvatting. REVA zet de belangrijkste aandachtspunten en hersteldoelen op een rij en stelt een passend herstelplan voor op basis van het blessuretype. Daarna krijgt je patiënt direct een uitnodiging per mail.",
    bullets: [
      "Aanleiding: sport, operatie of klacht, blessuretype en zijde",
      "Pijnscore, zwelling, hulpmiddel, belasting en beperking in het dagelijks leven",
      "Doelen zoals terug naar sport of werk, en wat de patiënt weer wil kunnen",
      "Samenvatting met aandachtspunten, hersteldoelen en een aanbevolen herstelplan",
    ],
    demo: "intake",
  },
  {
    id: "herstelplannen",
    group: "fysio",
    title: "Herstelplannen in fases",
    lead: "Bouw het herstel op in fases, met duidelijke criteria voordat een patiënt verder mag.",
    text: "Een herstelplan bestaat uit fases met een doel, een weekindeling en trainingsschema's. Per fase leg je criteria, mijlpalen, educatie en verboden activiteiten vast. Pas als alle criteria zijn afgevinkt, start je de volgende fase. Bij die overgang leg je kort de pijnscore, het functioneren, zwelling en de tevredenheid van de patiënt vast.",
    bullets: [
      "Fases met doel, weken, criteria, mijlpalen en educatie",
      "Verboden activiteiten per fase, zichtbaar voor de patiënt",
      "Volgende fase pas na het afvinken van alle criteria",
      "Korte meting bij elke fase-overgang",
      "Start vanuit de REVA-bibliotheek of je eigen herstelplannen",
    ],
    demo: "herstelplan",
  },
  {
    id: "signalering",
    group: "fysio",
    title: "Patiëntoverzicht met signalering",
    lead: "Zie in één oogopslag welke patiënten aandacht nodig hebben, zonder elk dossier te openen.",
    text: "Op je dashboard staan je eigen patiënten met hun laatste check-in. REVA markeert wie aandacht nodig heeft: bij een hoge pijnscore, gemelde zwelling, een lage dagscore of weinig activiteit. Zo neem je gericht contact op, in plaats van iedereen na te bellen.",
    bullets: [
      "Hoge pijnscore (7 of hoger op 10)",
      "Zwelling gemeld bij de laatste check-in",
      "Lage dagscore en weinig activiteit",
      "Aantal check-ins deze week per behandelaar",
    ],
    demo: "signalering",
  },
  {
    id: "dossier",
    group: "fysio",
    title: "Compleet patiëntdossier",
    lead: "Alles wat de patiënt tussen de afspraken door bijhoudt, op één plek voor het consult.",
    text: "In het dossier zie je de geschiedenis van alle check-ins met dagscore, pijn, mobiliteit, energie, stemming en slaap, naast foto-updates, medicatie, trainingen en afspraken. Je legt observaties vast en houdt met collega's interne notities bij. Bij het afsluiten van de behandeling noteer je de uitkomst en de tevredenheid van de patiënt.",
    bullets: [
      "Check-in geschiedenis met dagscore, pijn, mobiliteit, energie, stemming en slaap",
      "Foto-updates, medicatie, trainingen en afspraken",
      "Observaties van de therapeut en interne notities voor collega's",
      "Behandeling afsluiten met uitkomst en tevredenheid",
    ],
    demo: "dossier",
  },
  {
    id: "oefeningen",
    group: "fysio",
    title: "Oefeningen en trainingsschema's",
    lead: "Stel schema's samen uit je eigen oefeningen of de REVA-bibliotheek, en pas ze aan per patiënt.",
    text: "In de bibliotheek beheer je oefeningen met uitleg, sets, herhalingen, duur en belasting. Die combineer je tot trainingsschema's en koppel je aan een fase van het herstelplan, met een frequentie per week. Tijdens het consult voeg je oefeningen toe of pas je ze aan, en de patiënt ziet de wijziging direct.",
    bullets: [
      "REVA-bibliotheek met 100 oefeningen als startpunt",
      "Eigen oefeningen en schema's, te kopiëren en aan te passen",
      "Sets, herhalingen, duur en belasting per oefening",
      "Schema's koppelen aan een fase, met frequentie per week",
    ],
    demo: "oefeningen",
  },

  // ─── Voor de praktijk ────────────────────────────────────────────────────
  {
    id: "agenda",
    group: "praktijk",
    title: "Agenda, roosters en ruimtes",
    lead: "Plan ruimtes en behandelaars per locatie, met een voorstel dat REVA voor je maakt.",
    text: "Per locatie leg je ruimtes, werkroosters en verlof vast. In de weekplanning zie je reserveringen per ruimte en fysio, en de afspraken van patiënten. Met de AI-suggestie verdeelt REVA de ruimtes over de behandelaars die op die dag werken. Medewerkers kunnen hun eigen agenda koppelen, zodat die afspraken meegenomen worden.",
    bullets: [
      "Ruimtes, werkroosters en verlof per locatie",
      "Weekoverzicht van reserveringen per ruimte en fysio",
      "AI-suggestie voor de verdeling van ruimtes",
      "Persoonlijke agenda koppelen via een iCal-link (alleen lezen)",
    ],
    demo: "agenda",
  },
  {
    id: "analyse",
    group: "praktijk",
    title: "Praktijkanalyse",
    lead: "Inzicht in doorlooptijden, groei en werkdruk, zonder zelf lijstjes bij te houden.",
    text: "Als praktijkeigenaar zie je de gemiddelde doorlooptijd per blessure, het aantal nieuwe patiënten per jaar en de werkdruk per behandelaar. Je ziet ook hoe REVA binnen je praktijk wordt gebruikt en hoe goed vastleggingen worden bijgehouden.",
    bullets: [
      "Gemiddelde doorlooptijd per blessure",
      "Nieuwe patiënten per jaar",
      "Werkdruk per behandelaar",
      "Gebruik en activiteit van je team",
    ],
    demo: "analyse",
  },
  {
    id: "team",
    group: "praktijk",
    title: "Team, rollen en locaties",
    lead: "Iedereen ziet wat hij nodig heeft, en niet meer dan dat.",
    text: "Je nodigt medewerkers uit per mail en geeft ze een rol. De praktijkeigenaar beheert alles, fysiotherapeuten werken met hun patiënten, en de receptie ziet alleen contactgegevens en de agenda. Werk je met meerdere vestigingen, dan koppel je medewerkers en patiënten aan de juiste locatie.",
    bullets: [
      "Rollen voor praktijkeigenaar, fysiotherapeut en receptie",
      "Receptie ziet alleen contactgegevens en de agenda",
      "Meerdere locaties binnen één organisatie",
      "Patiënten en herstelplannen gekoppeld aan behandelaar en locatie",
    ],
    demo: "team",
  },
  {
    id: "huisstijl",
    group: "praktijk",
    title: "In je eigen huisstijl",
    lead: "Je patiënten zien het portaal van jouw praktijk, niet dat van ons.",
    text: "Je stelt het logo, de kleur en de naam van je praktijk in. Die komen terug in het portaal, in de app van je patiënten en als afzender van de e-mails. Zo versterkt REVA de uitstraling van je eigen praktijk.",
    bullets: [
      "Eigen logo, kleur en praktijknaam",
      "Zichtbaar in het portaal, de patiëntapp en e-mails",
      "Direct te zien hoe patiënten en collega's het ervaren",
    ],
    demo: "huisstijl",
  },
  {
    id: "veiligheid",
    group: "praktijk",
    title: "Veiligheid en privacy",
    lead: "Gebouwd voor gezondheidsdata, met waarborgen die verder gaan dan een wachtwoord.",
    text: "Gezondheidsdata staat versleuteld op servers binnen de EU. Tweestapsverificatie is verplicht voor alle medewerkers van de praktijk. In het activiteitenlog zie je wie welk dossier heeft ingezien of gewijzigd, zoals de norm NEN 7513 vraagt. Jouw praktijk blijft verwerkingsverantwoordelijke, REVA werkt op basis van een verwerkersovereenkomst.",
    bullets: [
      "Verplichte tweestapsverificatie voor praktijkmedewerkers",
      "Activiteitenlog met inzage en wijzigingen (NEN 7513)",
      "Versleutelde opslag op Europese servers",
      "Verwerkersovereenkomst onder de AVG",
    ],
    demo: "veiligheid",
  },

  // ─── Voor je patiënten ───────────────────────────────────────────────────
  {
    id: "check-in",
    group: "patient",
    title: "Dagelijkse check-in",
    lead: "In minder dan een minuut laat je patiënt weten hoe het gaat.",
    text: "Je patiënt geeft een dagscore en vult aan wat relevant is: pijn, mobiliteit, energie, stemming, slaap en zwelling, met een notitie. Een check-in voor een eerdere dag kan ook. De patiënt ziet zelf de hersteltrend van de afgelopen 14 dagen, en jij ziet alles terug in het dossier.",
    bullets: [
      "Dagscore van 1 tot 5, pijn van 0 tot 10",
      "Mobiliteit, energie, stemming, slaap en zwelling",
      "Herinneringen om de check-in in te vullen",
      "Hersteltrend van de laatste 14 dagen",
    ],
    demo: "checkin",
  },
  {
    id: "training",
    group: "patient",
    title: "Training en oefeningen",
    lead: "Het schema van de fysio altijd op zak, met uitleg per oefening.",
    text: "Je patiënt ziet de oefeningen uit het herstelplan, met sets, herhalingen en uitleg, en logt na elke sessie wat er gedaan is. Opmerkingen bij een sessie komen direct in jouw overzicht terecht.",
    bullets: [
      "Oefeningen uit de actuele fase van het herstelplan",
      "Sets, herhalingen en uitleg per oefening",
      "Sessies loggen, met opmerkingen voor de fysio",
    ],
    demo: "training",
  },
  {
    id: "medicatie",
    group: "patient",
    title: "Medicatie en herinneringen",
    lead: "Een vast medicatieschema met herinneringen op de juiste momenten.",
    text: "Je patiënt legt medicatie vast met dosering en vaste tijdstippen, krijgt herinneringen en logt elke inname. Zo zie je terug hoe het medicatiegebruik zich ontwikkelt, bijvoorbeeld het afbouwen van pijnstilling.",
    bullets: [
      "Medicatieschema met dosering en tijdstippen",
      "Herinneringen op de ingestelde tijden",
      "Innames loggen en terugzien per dag",
    ],
    demo: "medicatie",
  },
  {
    id: "doelen",
    group: "patient",
    title: "Doelen en mijlpalen",
    lead: "Een concreet doel voor ogen houdt patiënten gemotiveerd.",
    text: "Je patiënt stelt een hoofddoel met een streefdatum, aangevuld met kleinere doelen. Mijlpalen uit het herstelplan maken zichtbaar hoe ver het herstel al is, en elk behaald doel wordt gevierd.",
    bullets: [
      "Hoofddoel met streefdatum en omschrijving",
      "Mijlpalen per fase van het herstelplan",
      "Zichtbare voortgang en behaalde stappen",
    ],
    demo: "doelen",
  },
  {
    id: "inzicht",
    group: "patient",
    title: "Inzicht in het eigen herstel",
    lead: "Patiënten zien zelf dat ze vooruitgaan, ook op een moeilijke dag.",
    text: "In de analyse ziet je patiënt de hersteltrend, het verloop van pijn en mobiliteit en de score op trainingsdagen tegenover rustdagen. Korte observaties maken het begrijpelijk, bijvoorbeeld dat de mobiliteit verbetert terwijl de pijn stabiel blijft. Deze observaties zijn informatief en geen medisch advies.",
    bullets: [
      "Hersteltrend ten opzichte van de vorige periode",
      "Pijn en mobiliteit in één grafiek",
      "Score op trainingsdagen tegenover rustdagen",
    ],
    demo: "inzicht",
  },
  {
    id: "patientdossier",
    group: "patient",
    title: "Eigen dossier en dagboek",
    lead: "Documenten, foto's en afspraken van het hele herstel op één plek.",
    text: "Je patiënt bewaart medische brieven, verslagen en scans, voegt foto-updates toe om de voortgang week voor week vast te leggen en houdt contactgegevens van zorgverleners bij. In het dagboek staan per dag de afspraken, check-ins, trainingen en medicatie.",
    bullets: [
      "Documenten zoals brieven, verslagen en scans",
      "Foto-updates van de voortgang",
      "Contactpersonen van het behandelteam",
      "Dagboek met afspraken, check-ins, trainingen en medicatie",
    ],
    demo: "patientdossier",
  },
];

export const featuresByGroup = (group: FeatureGroup) => features.filter((f) => f.group === group);

export const REVA_LIBRARY = { protocols: "ruim 40", exercises: 100 };
