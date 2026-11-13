// Alle functies van REVA, gebaseerd op het werkelijke dashboard (reva-app).
// Gedeeld door /functies, /functies/voor-fysios en /functies/voor-patienten.

export type FeatureGroup = "fysio" | "praktijk" | "patient";

export type DemoKey =
  | "intake"
  | "herstelplan"
  | "signalering"
  | "dossier"
  | "oefeningen"
  | "analyse"
  | "team"
  | "huisstijl"
  | "veiligheid"
  | "checkin"
  | "training"
  | "medicatie"
  | "doelen"
  | "inzicht"
  | "patientdossier"
  | "testen"
  | "inzichten";

export interface Feature {
  id: string;
  group: FeatureGroup;
  title: string;
  /** Eén zin: wat het oplost */
  lead: string;
  /** Korte omschrijving voor het productmenu */
  menu: string;
  text: string;
  bullets: string[];
  demo: DemoKey;
}

export const featureGroups: { id: FeatureGroup; title: string; intro: string }[] = [
  {
    id: "fysio",
    title: "Voor de fysiotherapeut",
    intro: "Van intake tot afsluiting: alles om patiënten ook tussen de behandelingen door goed te begeleiden.",
  },
  {
    id: "praktijk",
    title: "Voor de praktijk",
    intro: "Inzicht in je praktijk, je team en je locaties, met de veiligheid die gezondheidsdata vraagt.",
  },
  {
    id: "patient",
    title: "Voor je patiënten",
    intro: "Een eigen app op de telefoon van je patiënt, in de huisstijl van jouw praktijk.",
  },
];

export const features: Feature[] = [
  // ─── Voor de fysiotherapeut ──────────────────────────────────────────────
  {
    id: "intake",
    group: "fysio",
    title: "Intake door de patiënt zelf",
    lead: "Je patiënt vult de intake thuis in, jij vult aan en rondt af.",
    menu: "Patiënt vult in, jij rondt af",
    text: "Na het inloggen vult je patiënt zelf de intake in de app in: de aanleiding, de klachten en wat hij weer wil kunnen. Jij ziet de ingevulde intake in je overzicht, vult aan waar nodig en rondt hem af. REVA zet daarbij een intake-inzicht klaar als voorstel, zodat je sneller de belangrijkste punten ziet. Jij beslist.",
    bullets: [
      "De patiënt vult de intake zelf in, in de app",
      "Een ingevulde intake verschijnt bij Aandacht nodig",
      "De therapeut vult aan en rondt af",
      "Intake-inzicht van REVA als voorstel",
    ],
    demo: "intake",
  },
  {
    id: "herstelplannen",
    group: "fysio",
    title: "Herstelplannen in fases",
    lead: "Bouw het herstel op in fases, met duidelijke criteria voordat een patiënt verder mag.",
    menu: "Ruim 40 REVA-herstelplannen in fases",
    text: "Een herstelplan bestaat uit fases met criteria, mijlpalen, educatie en verboden activiteiten. Pas als alle criteria zijn afgevinkt, start je de volgende fase, met een korte meting bij elke overgang. Je start vanuit de bibliotheek met ruim 40 REVA-herstelplannen, onder andere voor ACL-reconstructie, knieprothese, heupprothese, enkel, hamstring, lies, schouder, achilles, lage rug en lopersknie. Je filtert, kopieert en past ze aan, of maakt je eigen herstelplannen, met een eigen eerste fase.",
    bullets: [
      "Ruim 40 REVA-herstelplannen, te filteren op blessure",
      "Kopiëren en aanpassen aan je eigen werkwijze",
      "Eigen herstelplannen, met een eigen eerste fase",
      "Fases met criteria, mijlpalen, educatie en verboden activiteiten",
      "Korte meting bij elke fase-overgang",
    ],
    demo: "herstelplan",
  },
  {
    id: "signalering",
    group: "fysio",
    title: "Mijn patiënten en Aandacht nodig",
    lead: "Zie in één oogopslag welke patiënten aandacht nodig hebben, zonder elk dossier te openen.",
    menu: "Zie direct wie aandacht nodig heeft",
    text: "Op je dashboard Mijn patiënten zie je per patiënt het herstelplan en de fase. De slimme lijst Aandacht nodig zet bovenaan wie je nu het best kunt bekijken: bij een hoge pijnscore, gemelde zwelling, een lage dagscore, weinig activiteit of een ingevulde intake. Zo neem je gericht contact op, in plaats van iedereen na te bellen.",
    bullets: [
      "Per patiënt het herstelplan en de huidige fase",
      "Hoge pijnscore (7 of hoger op 10) en gemelde zwelling",
      "Lage dagscore en weinig activiteit",
      "Ingevulde intakes die op je wachten",
    ],
    demo: "signalering",
  },
  {
    id: "dossier",
    group: "fysio",
    title: "Patiëntdossier",
    lead: "Alles wat de patiënt tussen de behandelingen door bijhoudt, op één plek voor het consult.",
    menu: "Check-ins, herstelplan, schema en testen",
    text: "Het dossier opent met een overzicht, met onder andere de laatste foto, medicatie en afspraken die de patiënt zelf bijhoudt. Daarnaast zie je het verloop van de check-ins, het herstelplan, het schema en de testen. Bij het afsluiten leg je de uitkomst vast, en met één klik maak je een voortgangsrapport als PDF om te printen of op te slaan.",
    bullets: [
      "Overzicht met de laatste foto, medicatie en afspraken van de patiënt",
      "Verloop van de check-ins",
      "Herstelplan, schema en testen",
      "Afsluiting en voortgangsrapport als PDF",
    ],
    demo: "dossier",
  },
  {
    id: "oefeningen",
    group: "fysio",
    title: "Oefeningen en schema's",
    lead: "Stel schema's samen uit ongeveer 480 REVA-oefeningen of je eigen oefeningen.",
    menu: "Ongeveer 480 oefeningen en schema's per patiënt",
    text: "In de oefeningenbibliotheek staan ongeveer 480 REVA-oefeningen, en je voegt eigen oefeningen toe met je eigen foto of video. Daarmee maak je trainingsschema's per patiënt, met de dosering per oefening: sets, herhalingen, duur en belasting. In de praktijk start je de workoutmodus op volledig scherm en log je de training samen met je patiënt.",
    bullets: [
      "Ongeveer 480 REVA-oefeningen als startpunt",
      "Eigen oefeningen met eigen foto of video",
      "Dosering per oefening: sets, herhalingen, duur en belasting",
      "Workoutmodus op volledig scherm, ook samen in de praktijk",
    ],
    demo: "oefeningen",
  },
  {
    id: "testen",
    group: "fysio",
    title: "Testen en metingen",
    lead: "Objectieve metingen per patiënt, zodat je voortgang ook in cijfers ziet.",
    menu: "36 tests, met resultaten in de tijd en LSI",
    text: "Je kiest uit een bibliotheek van 36 tests en legt per patiënt de resultaten vast. Je ziet de resultaten in de tijd en de LSI, de vergelijking tussen links en rechts. Een test koppel je optioneel aan een fase van het herstelplan. Je patiënt ziet zijn testresultaten terug in de app.",
    bullets: [
      "Bibliotheek met 36 tests",
      "Resultaten in de tijd per patiënt",
      "LSI: vergelijking tussen links en rechts",
      "Optioneel gekoppeld aan een fase, zichtbaar voor de patiënt",
    ],
    demo: "testen",
  },
  {
    id: "inzichten",
    group: "fysio",
    title: "REVA-inzichten",
    lead: "Voorstellen op basis van de gegevens van je patiënt. Jij beslist.",
    menu: "AI-suggesties als voorstel, jij beslist",
    text: "REVA-inzichten doet voorstellen op basis van wat je patiënt bijhoudt: voor de dosering, voor een fase-overgang, een samenvatting van de voortgang en een intake-inzicht. Het blijft altijd een voorstel. Jij beoordeelt het en past het met één klik toe, of je negeert het. REVA-inzichten stelt geen diagnoses en geeft geen medisch advies. Het is inbegrepen in de prijs.",
    bullets: [
      "Voorstellen voor dosering en fase-overgang",
      "Samenvatting van de voortgang en intake-inzicht",
      "Met één klik toepassen of negeren",
      "Inbegrepen in de prijs, zonder meerprijs",
    ],
    demo: "inzichten",
  },

  // ─── Voor de praktijk ────────────────────────────────────────────────────
  {
    id: "analyse",
    group: "praktijk",
    title: "Analyse en rapporten",
    lead: "Inzicht in uitkomsten, behandelduur en tevredenheid, zonder zelf lijstjes bij te houden.",
    menu: "KPI's, rapporten en tevredenheid",
    text: "Als praktijkeigenaar zie je een overzicht met KPI's en de vergelijking met de vorige periode. Rapporten laten onder andere de uitkomst bij afsluiting zien, de behandelduur per blessure, de tijd per fase, therapietrouw, testresultaten en tevredenheid, met het gemiddelde en de NPS. Na afsluiting geeft de patiënt een score met een optionele toelichting, alleen voor je eigen praktijk. Op maandagochtend krijg je een korte e-mail met de KPI's van de afgelopen week. Behandelaars zien de analyse van hun eigen patiënten.",
    bullets: [
      "KPI's met vergelijking met de vorige periode",
      "Uitkomst, behandelduur, tijd per fase en therapietrouw",
      "Tevredenheid bij afsluiting, met gemiddelde en NPS",
      "CSV-export en een wekelijkse e-mail op maandag",
    ],
    demo: "analyse",
  },
  {
    id: "team",
    group: "praktijk",
    title: "Team, locaties en import",
    lead: "Je team en je patiëntenlijst staan snel klaar, op één of meerdere locaties.",
    menu: "Rollen, locaties en CSV-import",
    text: "Je nodigt medewerkers uit en geeft ze een rol: praktijkeigenaar of fysiotherapeut. Werk je met meerdere locaties, dan koppel je medewerkers en patiënten aan de juiste locatie. Je bestaande patiëntenlijst laad je in één keer in via een CSV-bestand, met een voorbeeldbestand en een controle vooraf. Exporteren kan ook. Op werkdagen krijgen behandelaars een pushmelding met het aantal patiënten dat aandacht nodig heeft, zonder patiëntgegevens.",
    bullets: [
      "Rollen voor praktijkeigenaar en fysiotherapeut",
      "Meerdere locaties binnen één organisatie",
      "Patiënten importeren en exporteren via CSV",
      "Dagelijks overzicht als pushmelding, alleen aantallen",
    ],
    demo: "team",
  },
  {
    id: "huisstijl",
    group: "praktijk",
    title: "In je eigen huisstijl",
    lead: "Je patiënten zien het platform van jouw praktijk, niet dat van ons.",
    menu: "Je eigen logo en kleur",
    text: "Je stelt het logo en de kleur van je praktijk in. Die komen terug in het praktijkportaal, de app van je patiënten, de inlogschermen, de e-mails en de pushmeldingen. Zo voelt REVA voor je patiënt als het platform van jouw praktijk.",
    bullets: [
      "Eigen logo en kleur",
      "In portaal, patiëntenapp en inlogschermen",
      "In e-mails en pushmeldingen",
    ],
    demo: "huisstijl",
  },
  {
    id: "veiligheid",
    group: "praktijk",
    title: "Veiligheid en privacy",
    lead: "Gebouwd voor gezondheidsdata, met waarborgen die verder gaan dan een wachtwoord.",
    menu: "Tweestapsverificatie en NEN 7513",
    text: "Tweestapsverificatie is verplicht voor iedereen, voor medewerkers én patiënten. Gezondheidsgegevens zijn afgeschermd per praktijk: zorgverleners zien alleen patiënten van hun eigen praktijk. In het activiteitenlog zie je wie welk dossier heeft ingezien, zoals de norm NEN 7513 vraagt. Gegevens staan versleuteld op servers binnen de EU. Jouw praktijk blijft verwerkingsverantwoordelijke, REVA werkt op basis van een verwerkersovereenkomst.",
    bullets: [
      "Verplichte tweestapsverificatie voor medewerkers en patiënten",
      "Gegevens afgeschermd per praktijk",
      "Activiteitenlog met inzage in dossiers (NEN 7513)",
      "Verwerkersovereenkomst onder de AVG",
    ],
    demo: "veiligheid",
  },

  // ─── Voor je patiënten ───────────────────────────────────────────────────
  {
    id: "check-in",
    group: "patient",
    title: "Dagelijkse check-in",
    lead: "In ongeveer 30 seconden laat je patiënt weten hoe het gaat.",
    menu: "Dagelijks in ongeveer 30 seconden",
    text: "Je patiënt geeft een dagscore en vult pijn, mobiliteit, energie, slaap, stemming en zwelling in, met een notitie als er iets te melden is. Dat kost ongeveer 30 seconden. Een pushmelding herinnert eraan, en jij ziet alles terug in het dossier.",
    bullets: [
      "Dagscore, pijn en mobiliteit",
      "Energie, slaap, stemming en zwelling",
      "Notitie voor de fysiotherapeut",
      "Herinnering als pushmelding",
    ],
    demo: "checkin",
  },
  {
    id: "training",
    group: "patient",
    title: "Training en oefeningen",
    lead: "Het schema van de fysio altijd op zak, met uitleg per oefening.",
    menu: "Het schema van de fysio, met workoutmodus",
    text: "Je patiënt ziet het schema dat jij hebt klaargezet en traint in de workoutmodus, met uitleg per oefening. Per oefening logt hij de pijn, zodat jij ziet hoe een oefening valt. Past de fysio het schema aan of start een nieuwe fase, dan krijgt de patiënt een pushmelding. Eigen thuisschema's kan de patiënt ook toevoegen.",
    bullets: [
      "Het schema van de fysio, met uitleg per oefening",
      "Workoutmodus en pijn per oefening loggen",
      "Pushmelding bij een nieuw schema of een nieuwe fase",
      "Eigen thuisschema's",
    ],
    demo: "training",
  },
  {
    id: "medicatie",
    group: "patient",
    title: "Medicatie en herinneringen",
    lead: "Een vast medicatieschema met herinneringen op de juiste momenten.",
    menu: "Schema met herinneringen",
    text: "Je patiënt legt medicatie en pijnstilling vast met dosering en vaste tijdstippen, en krijgt een herinnering bij elke inname. Zo zie je in het dossier hoe het medicatiegebruik zich ontwikkelt, bijvoorbeeld het afbouwen van pijnstilling.",
    bullets: [
      "Medicatieschema met dosering, tijdstippen en herinneringen",
      "Het afbouwen van pijnstilling terugzien",
      "Zichtbaar voor de fysio in het dossier",
    ],
    demo: "medicatie",
  },
  {
    id: "doelen",
    group: "patient",
    title: "Doelstellingen en mijlpalen",
    lead: "Een concreet doel voor ogen houdt patiënten gemotiveerd.",
    menu: "Doelen en mijlpalen",
    text: "Je patiënt stelt eigen doelen, en de mijlpalen uit het herstelplan maken zichtbaar hoe ver het herstel al is.",
    bullets: [
      "Eigen doelstellingen",
      "Mijlpalen uit het herstelplan",
      "Zichtbaar wat al bereikt is",
    ],
    demo: "doelen",
  },
  {
    id: "inzicht",
    group: "patient",
    title: "Mijn herstel",
    lead: "Patiënten zien zelf dat ze vooruitgaan, ook op een moeilijke dag.",
    menu: "Voortgang, bereikte stappen en testresultaten",
    text: "In Mijn herstel ziet je patiënt de voortgang, wat al bereikt is en de resultaten van de testen die jij hebt afgenomen. Zo blijft het herstel zichtbaar, ook als het een dag tegenzit. De analyse is informatief en geen medisch advies.",
    bullets: [
      "Voortgang in grafieken",
      "Wat al bereikt is",
      "Testresultaten van de fysio",
    ],
    demo: "inzicht",
  },
  {
    id: "patientdossier",
    group: "patient",
    title: "Eigen dossier en afspraken",
    lead: "Documenten en afspraken van het hele herstel op één plek.",
    menu: "Documenten en eigen afspraken",
    text: "Je patiënt bewaart documenten zoals medische brieven en verslagen in een eigen dossier, en houdt zijn eigen afspraken bij, bijvoorbeeld in het ziekenhuis of voor een scan. De praktijk plant daar niets mee: de agenda van de praktijk blijft in het EPD.",
    bullets: [
      "Documenten zoals brieven en verslagen",
      "Eigen afspraken bijhouden, zoals in het ziekenhuis",
      "Laatste afspraken zichtbaar voor de fysio",
    ],
    demo: "patientdossier",
  },
];

export const featuresByGroup = (group: FeatureGroup) => features.filter((f) => f.group === group);

export const REVA_LIBRARY = { protocols: "ruim 40", exercises: "ongeveer 480", tests: 36 };
