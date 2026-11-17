// Herstelplannen uit de REVA-app, voor /herstelplannen en de blessurepagina's.
// De fases, weken en criteria komen uit lib/herstelplannen-data.json, dat het script
// scripts/sync-herstelplannen.py uit de app-migraties genereert. Per blessurepagina
// staan hieronder alleen de eigen teksten (intro, testen en FAQ).

import raw from "@/lib/herstelplannen-data.json";

export type PlanPhase = { name: string; goal: string; weeks: string; forbidden: string[]; criteria: string[] };
export type Plan = { name: string; category: string; description: string; phases: PlanPhase[] };

/** Geen gedachtestreepjes in teksten op de site (schrijfregel), wel in de app-data */
const clean = (s: string) => s.replace(/\s[—–]\s/g, ", ").replace(/[—–]/g, "-");

export const plans: Plan[] = (raw as Plan[]).map((p) => ({
  name: clean(p.name),
  category: p.category,
  description: clean(p.description),
  phases: p.phases.map((ph) => ({
    name: clean(ph.name),
    goal: clean(ph.goal),
    weeks: clean(ph.weeks),
    forbidden: ph.forbidden.map(clean),
    criteria: ph.criteria.map(clean),
  })),
}));

/** Lichaamsregio per categorie, voor het overzicht op /herstelplannen */
export const regions: { title: string; categories: string[] }[] = [
  { title: "Knie", categories: ["acl", "total_knee_replacement", "meniscus", "mcl_sprain", "patellofemoral_pain", "knee_osteoarthritis"] },
  { title: "Heup, lies en bekken", categories: ["total_hip_replacement", "hip_osteoarthritis", "groin_strain", "pelvic_instability", "pelvic_floor_dysfunction", "rectus_diastasis"] },
  { title: "Enkel, voet en onderbeen", categories: ["ankle_sprain", "ankle_ligament", "achilles_tendinopathy", "calf_strain", "shin_splints", "plantar_fasciitis"] },
  { title: "Schouder en arm", categories: ["rotator_cuff", "shoulder_dislocation", "shoulder_chronic_pain", "elbow_tendinopathy"] },
  { title: "Rug en nek", categories: ["low_back_pain", "neck_pain_chronic"] },
  { title: "Spieren, pezen en overig", categories: ["hamstring_strain", "muscle_strain_general", "tendinopathy_general", "concussion"] },
];

export type InjuryPage = {
  slug: string;
  /** Korte naam in lijsten en kruimelpad */
  label: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  /** Categorieën uit de app; de eerste plannaam is het hoofdplan */
  categories: string[];
  mainPlan: string;
  intro: [string, string];
  /** Namen uit de testbibliotheek van REVA */
  tests: string[];
  faq: { q: string; a: string }[];
};

export const injuryPages: InjuryPage[] = [
  {
    slug: "voorste-kruisband",
    label: "Voorste kruisband",
    h1: "Herstelplan voorste kruisband (ACL) in REVA",
    title: "Herstelplan voorste kruisband (ACL) voor fysiotherapeuten",
    description: "Het REVA-herstelplan na een voorste-kruisbandreconstructie: zes fases van de acute fase tot terugkeer naar sport, met criteria, testen en LSI.",
    keywords: ["herstelplan voorste kruisband", "revalidatie voorste kruisband fysiotherapie", "ACL revalidatie protocol", "kruisbandoperatie revalidatie", "terugkeer naar sport ACL"],
    categories: ["acl"],
    mainPlan: "ACL-reconstructie herstelprotocol",
    intro: [
      "Een voorste-kruisbandreconstructie is een van de langste trajecten in de fysiotherapiepraktijk: van de eerste weken met krukken tot een begeleide terugkeer naar sport na acht tot twaalf maanden. In die tijd ziet de fysiotherapeut de patiënt maar een deel van de weken, terwijl het herstel thuis doorloopt.",
      "In REVA staat het traject klaar als herstelplan in fases, met per fase een doel, criteria en de activiteiten die nog niet mogen. De patiënt houdt thuis pijn, zwelling en zijn oefeningen bij, en jij legt de hoptest en andere metingen vast, zodat je de LSI tussen beide benen in de tijd ziet.",
    ],
    tests: ["Single leg hop test", "Triple hop test", "Side hop test", "Knie flexie (ROM)", "Knie extensie (ROM)", "Quadricepskracht (dynamometer)", "Hamstringkracht (dynamometer)", "IKDC", "KOOS (knie)", "Return-to-sport vragenlijst (ACL-RSI)"],
    faq: [
      {
        q: "Hoeveel fases heeft het REVA-herstelplan na een voorste-kruisbandreconstructie?",
        a: "Zes: de acute fase, vroege mobilisatie, kracht- en stabiliteitsopbouw, neuromusculaire controle en hardlopen, sportspecifieke training en terugkeer naar sport. Daarnaast staat er een conservatief traject zonder operatie klaar.",
      },
      {
        q: "Kan ik de hoptest en LSI bijhouden in REVA?",
        a: "Ja. In de testbibliotheek staan onder andere de single leg hop test, triple hop test en side hop test. Je legt de resultaten per patiënt vast en ziet de LSI, de vergelijking tussen links en rechts, in de tijd. Een test koppel je optioneel aan een fase.",
      },
    ],
  },
  {
    slug: "knieprothese",
    label: "Knieprothese",
    h1: "Herstelplan knieprothese in REVA",
    title: "Herstelplan knieprothese (TKP) voor fysiotherapeuten",
    description: "Het REVA-herstelplan na een totale knieprothese: fases met criteria voor buiging, lopen en kracht, plus een fast-track variant. Naast je EPD.",
    keywords: ["herstelplan knieprothese", "revalidatie knieprothese fysiotherapie", "TKP revalidatie", "fast track knieprothese", "oefeningen na knieprothese"],
    categories: ["total_knee_replacement"],
    mainPlan: "Totale knieprothese herstelprotocol",
    intro: [
      "Na een totale knieprothese draait de revalidatie om buigen en strekken, zelfstandig lopen en het terugwinnen van kracht. Veel patiënten zijn ouder, revalideren grotendeels thuis en komen minder vaak naar de praktijk dan sporters.",
      "In REVA staat de revalidatie klaar als herstelplan in fases, en voor versneld herstel is er een fast-track variant. De patiënt doet thuis een korte check-in en volgt zijn oefenschema in de app; jij ziet wie meer pijn of zwelling meldt, of weinig actief is, en neemt gericht contact op.",
    ],
    tests: ["Knie flexie (ROM)", "Knie extensie (ROM)", "Quadricepskracht (dynamometer)", "Timed Up and Go", "30 seconden stoeltest", "6-minuten wandeltest", "KOOS (knie)"],
    faq: [
      {
        q: "Is er een fast-track variant voor de knieprothese?",
        a: "Ja. Naast het standaard herstelplan staat er een versneld hersteltraject (fast-track) klaar. Je kopieert het plan dat het best past en past het aan op je eigen werkwijze en de afspraken met het ziekenhuis.",
      },
      {
        q: "Werkt REVA ook voor oudere patiënten?",
        a: "Ja. De check-in is kort en eenvoudig, REVA werkt in de browser en patiënten kunnen het als app op hun beginscherm zetten. Kinderen of partners kunnen helpen bij het installeren; de uitleg staat stap voor stap op de documentatiepagina.",
      },
    ],
  },
  {
    slug: "heupprothese",
    label: "Heupprothese",
    h1: "Herstelplan heupprothese in REVA",
    title: "Herstelplan heupprothese (THP) voor fysiotherapeuten",
    description: "Het REVA-herstelplan na een totale heupprothese, ook voor de voorste benadering: fases met criteria, leefregels per fase en metingen. Naast je EPD.",
    keywords: ["herstelplan heupprothese", "revalidatie heupprothese fysiotherapie", "THP revalidatie", "voorste benadering heupprothese", "oefeningen na heupprothese"],
    categories: ["total_hip_replacement"],
    mainPlan: "Totale heupprothese herstelprotocol",
    intro: [
      "Na een totale heupprothese wil een patiënt zo snel mogelijk weer veilig en zelfstandig lopen, traplopen en in en uit de auto stappen. Welke bewegingen in het begin nog niet mogen, hangt af van de operatietechniek.",
      "In REVA staan daarom twee plannen klaar: het standaard herstelplan en een variant voor de voorste (anterieure) benadering. Per fase staan de activiteiten die nog niet mogen, zichtbaar voor de patiënt in de app. Jij ziet tussen de behandelingen door hoe het lopen en de pijn zich ontwikkelen.",
    ],
    tests: ["Heup flexie (ROM)", "HOOS (heup)", "Timed Up and Go", "30 seconden stoeltest", "6-minuten wandeltest"],
    faq: [
      {
        q: "Is er een herstelplan voor de voorste benadering?",
        a: "Ja. Naast het standaard herstelplan staat er een variant voor de voorste (anterieure) benadering klaar. Je kiest het plan dat past bij de operatie en de afspraken van het ziekenhuis, en past het waar nodig aan.",
      },
      {
        q: "Ziet de patiënt welke bewegingen nog niet mogen?",
        a: "Ja. Per fase staan in het herstelplan de activiteiten die nog niet mogen. De patiënt ziet die in de app, zodat hij thuis weet waar hij op moet letten.",
      },
    ],
  },
  {
    slug: "meniscus",
    label: "Meniscus",
    h1: "Herstelplan meniscus in REVA",
    title: "Herstelplan meniscus voor fysiotherapeuten",
    description: "REVA-herstelplannen na een meniscusoperatie en een partiële meniscectomie: fases met criteria, oefenschema's en metingen, naast je EPD.",
    keywords: ["herstelplan meniscus", "revalidatie meniscusoperatie", "meniscectomie revalidatie fysiotherapie", "meniscus hechting revalidatie", "oefeningen na meniscusoperatie"],
    categories: ["meniscus"],
    mainPlan: "Meniscusoperatie herstelprotocol",
    intro: [
      "Een meniscusoperatie is niet altijd hetzelfde traject. Na een hechting moet de knie langer worden ontzien, na een partiële meniscectomie gaat het opbouwen vaak sneller. Dat vraagt om een plan dat past bij de ingreep.",
      "In REVA staan daarom twee herstelplannen klaar: na een meniscusoperatie en na een partiële meniscectomie. Je kiest het plan dat past, de patiënt volgt zijn oefenschema in de app en jij ziet aan de check-ins of de knie reageert met pijn of zwelling.",
    ],
    tests: ["Knie flexie (ROM)", "Knie extensie (ROM)", "Quadricepskracht (dynamometer)", "KOOS (knie)", "Lysholm", "Single leg hop test", "Y-balance test anterior"],
    faq: [
      {
        q: "Welke meniscusplannen staan er in REVA?",
        a: "Twee: een herstelplan na een meniscusoperatie en een herstelplan na een partiële meniscectomie. Beide zijn een startpunt dat je kopieert en aanpast aan de ingreep en de afspraken met het ziekenhuis.",
      },
      {
        q: "Hoe zie ik of de knie reageert op de belasting?",
        a: "De patiënt meldt in de dagelijkse check-in pijn en zwelling, en logt per oefening de pijn. Meldt hij meer pijn of zwelling, dan staat hij in de lijst Aandacht nodig op je dashboard.",
      },
    ],
  },
  {
    slug: "enkelverzwikking",
    label: "Enkelverzwikking",
    h1: "Herstelplan enkelverzwikking en enkelbandletsel in REVA",
    title: "Herstelplan enkelverzwikking en enkelband",
    description: "REVA-herstelplannen voor enkelverzwikking en enkelbandletsel, voor voetballers, hardlopers en na een reconstructie. Met fases, criteria en balanstesten.",
    keywords: ["herstelplan enkelverzwikking", "revalidatie enkelbandletsel", "enkelband revalidatie fysiotherapie", "enkelverstuiking oefeningen", "terugkeer naar sport enkel"],
    categories: ["ankle_sprain", "ankle_ligament"],
    mainPlan: "Herstelplan enkelverzwikking (voetbal)",
    intro: [
      "Een verzwikte enkel lijkt een kleine blessure, maar zonder goede opbouw komt hij vaak terug. Balans, stabiliteit en een geleidelijke terugkeer naar sport bepalen of een patiënt het daarna bij die ene keer houdt.",
      "In REVA staan meerdere plannen klaar: voor voetballers, voor hardlopers, bij chronische klachten of na een operatie, en een versneld traject na een reconstructie. De patiënt traint thuis met zijn schema in de app, en jij volgt met balanstesten en de CAIT of de enkel stabieler wordt.",
    ],
    tests: ["Weight-bearing lunge test", "Y-balance test anterior", "Eenbeensstand ogen dicht", "Heel raise test", "Side hop test", "CAIT (enkelinstabiliteit)"],
    faq: [
      {
        q: "Welke enkelplannen staan er in REVA?",
        a: "Herstelplannen voor een enkelverzwikking bij voetbal en bij hardlopen, voor enkelbandletsel bij chronische klachten of na een operatie, en een versneld traject na een enkelbandreconstructie voor topsporters.",
      },
      {
        q: "Hoe volg ik of de enkel stabieler wordt?",
        a: "Je legt testen vast zoals de Y-balance test, de eenbeensstand met de ogen dicht en de CAIT. De resultaten zie je in de tijd, en de patiënt ziet ze terug in de app.",
      },
    ],
  },
  {
    slug: "achillespees",
    label: "Achillespees",
    h1: "Herstelplan achillespees-tendinopathie in REVA",
    title: "Herstelplan achillespees voor fysiotherapeuten",
    description: "Het REVA-herstelplan bij achillespees-tendinopathie: geleidelijke belastingsopbouw in fases, pijn per oefening loggen en testen. Naast je EPD.",
    keywords: ["herstelplan achillespees", "achillespees tendinopathie revalidatie", "achillespeesklachten oefeningen fysiotherapie", "belastingsopbouw achillespees", "achillespees hardlopen"],
    categories: ["achilles_tendinopathy"],
    mainPlan: "Herstelplan achillespees-tendinopathie",
    intro: [
      "Achillespeesklachten vragen geduld: de pees herstelt door geleidelijk meer te belasten, en dat gebeurt vooral thuis. Of een patiënt de oefeningen doet en hoe de pees erop reageert, zie je in de praktijk vaak pas weken later.",
      "In REVA logt de patiënt bij elke oefening de pijn, zodat je ziet hoe de pees reageert op de belasting. Het herstelplan bouwt de belasting in fases op, en met REVA-inzichten krijg je een voorstel om de dosering aan te passen. Jij beslist.",
    ],
    tests: ["Heel raise test", "Weight-bearing lunge test", "Single leg hop test", "Eenbeensstand ogen dicht"],
    faq: [
      {
        q: "Hoe helpt REVA bij de belastingsopbouw van de achillespees?",
        a: "De patiënt logt per oefening de pijn in de workoutmodus. Jij ziet dat in het dossier, en REVA-inzichten kan een voorstel doen om de dosering aan te passen. Het blijft een voorstel: jij beslist.",
      },
      {
        q: "Is er ook een algemeen plan voor peesklachten?",
        a: "Ja. Naast het plan voor de achillespees staat er een algemeen herstelplan voor peesklachten klaar, dat je kunt kopiëren en aanpassen voor andere pezen.",
      },
    ],
  },
  {
    slug: "rotator-cuff",
    label: "Rotator cuff",
    h1: "Herstelplan rotator cuff en schouder in REVA",
    title: "Herstelplan rotator cuff en schouder voor fysiotherapeuten",
    description: "REVA-herstelplannen na een rotator cuff operatie, subacromiale decompressie of bij schouderoverbelasting: fases, criteria en schoudertesten.",
    keywords: ["herstelplan rotator cuff", "revalidatie rotator cuff operatie", "schouderoperatie revalidatie fysiotherapie", "subacromiale decompressie revalidatie", "impingement oefeningen"],
    categories: ["rotator_cuff"],
    mainPlan: "Rotator cuff schouderoperatie herstelprotocol",
    intro: [
      "Na een rotator cuff operatie is de schouder lang kwetsbaar: eerst beschermen, dan voorzichtig bewegen en pas daarna kracht opbouwen. Patiënten willen vaak sneller dan goed is, of durven juist niet te bewegen.",
      "In REVA staan drie schouderplannen klaar: na een rotator cuff operatie, na een subacromiale decompressie en bij schouderoverbelasting zonder operatie. Per fase ziet de patiënt in de app wat nog niet mag, en jij volgt de beweeglijkheid en kracht met schoudertesten en vragenlijsten.",
    ],
    tests: ["Schouder anteflexie (ROM)", "Schouder exorotatie (ROM)", "Exorotatiekracht schouder", "QuickDASH", "SPADI", "Handknijpkracht"],
    faq: [
      {
        q: "Welke schouderplannen staan er in REVA?",
        a: "Herstelplannen na een rotator cuff operatie, na een subacromiale decompressie en bij schouderoverbelasting (impingement) zonder operatie. Daarnaast zijn er plannen voor een schouderluxatie en een bevroren schouder.",
      },
      {
        q: "Hoe meet ik de voortgang van de schouder?",
        a: "Met testen uit de bibliotheek, zoals anteflexie en exorotatie (ROM), exorotatiekracht en vragenlijsten als de QuickDASH en SPADI. Je ziet de resultaten in de tijd.",
      },
    ],
  },
  {
    slug: "lage-rugklachten",
    label: "Lage rugklachten",
    h1: "Herstelplan lage rugklachten in REVA",
    title: "Herstelplan lage rugklachten voor fysiotherapeuten",
    description: "REVA-herstelplannen bij lage rugklachten, met en zonder uitstraling: fases met criteria, oefenschema's en de Oswestry Disability Index.",
    keywords: ["herstelplan lage rugklachten", "fysiotherapie lage rugpijn oefeningen", "revalidatie rugklachten", "lage rugpijn uitstraling", "Oswestry Disability Index"],
    categories: ["low_back_pain"],
    mainPlan: "Herstelplan lage rugklachten",
    intro: [
      "Bij lage rugklachten is het herstel vaak meer een kwestie van gedrag dan van één oefening: blijven bewegen, de belasting opbouwen en vertrouwen houden. Juist dat gebeurt grotendeels buiten de behandelkamer.",
      "In REVA staan twee plannen klaar: bij lage rugklachten en bij klachten met uitstraling naar het been. De patiënt doet een dagelijkse check-in over pijn, slaap en stemming, en jij ziet in het verloop of het de goede kant op gaat. Met de Oswestry Disability Index meet je het effect op het dagelijks functioneren.",
    ],
    tests: ["Oswestry Disability Index", "Biering-Sørensen test", "Sit-and-reach"],
    faq: [
      {
        q: "Zijn er plannen voor rugklachten met uitstraling?",
        a: "Ja. Naast het herstelplan bij lage rugklachten staat er een plan voor klachten met uitstraling naar het been (radiculair) klaar.",
      },
      {
        q: "Waarom ook slaap en stemming in de check-in?",
        a: "Bij rugklachten spelen slaap en stemming vaak mee in hoe een patiënt herstelt. Door ze naast pijn en mobiliteit bij te houden, zie je het verloop completer en kun je het gesprek gerichter voeren.",
      },
    ],
  },
  {
    slug: "hamstringblessure",
    label: "Hamstringblessure",
    h1: "Herstelplan hamstringblessure in REVA",
    title: "Herstelplan hamstringblessure voor fysiotherapeuten",
    description: "REVA-herstelplannen bij een hamstringblessure, voor voetballers en bij een proximale graad II blessure: fases tot terugkeer naar sport, met testen.",
    keywords: ["herstelplan hamstringblessure", "revalidatie hamstring", "hamstring scheur revalidatie voetbal", "terugkeer naar sport hamstring", "hamstring oefeningen fysiotherapie"],
    categories: ["hamstring_strain"],
    mainPlan: "Herstelplan hamstringblessure (voetbal)",
    intro: [
      "Een hamstringblessure komt bij sporters vaak terug, zeker als de terugkeer naar sport te snel gaat. Kracht, sprintvermogen en vertrouwen moeten weer op niveau zijn voordat een speler het veld op gaat.",
      "In REVA staan twee plannen klaar: voor een hamstringblessure bij voetballers en voor een proximale blessure (graad II). Per fase staan de criteria voordat de speler verder mag, en met testen als hamstringkracht en de single leg hop test onderbouw je de terugkeer naar sport.",
    ],
    tests: ["Hamstringkracht (dynamometer)", "Single leg hop test", "Sit-and-reach", "Shuttle run test (beep test)"],
    faq: [
      {
        q: "Welke hamstringplannen staan er in REVA?",
        a: "Een herstelplan bij een hamstringblessure voor voetballers en een plan voor een proximale hamstringblessure (graad II). Daarnaast is er een algemeen plan voor spierverrekkingen.",
      },
      {
        q: "Hoe onderbouw ik de terugkeer naar sport?",
        a: "Per fase staan criteria in het plan. Daarnaast leg je testen vast, zoals hamstringkracht met een dynamometer en de single leg hop test, en zie je de vergelijking tussen links en rechts in de tijd.",
      },
    ],
  },
  {
    slug: "lopersknie",
    label: "Lopersknie",
    h1: "Herstelplan lopersknie (patellofemoraal pijnsyndroom) in REVA",
    title: "Herstelplan lopersknie voor fysiotherapeuten",
    description: "Het REVA-herstelplan bij een lopersknie (patellofemoraal pijnsyndroom): belasting opbouwen in fases, pijn per oefening loggen en kniemetingen.",
    keywords: ["herstelplan lopersknie", "patellofemoraal pijnsyndroom oefeningen", "lopersknie revalidatie fysiotherapie", "knieklachten hardlopers", "patellofemorale pijn"],
    categories: ["patellofemoral_pain"],
    mainPlan: "Herstelplan lopersknie (patellofemoraal pijnsyndroom)",
    intro: [
      "Een lopersknie is een klassieke overbelastingsklacht: de knie protesteert als de belasting sneller oploopt dan het lichaam aankan. Herstel betekent de belasting tijdelijk aanpassen en daarna gecontroleerd weer opbouwen.",
      "In REVA bouw je de belasting op in fases, met een oefenschema in de app van de patiënt. De patiënt logt de pijn per oefening en doet een korte check-in, zodat je ziet wanneer een volgende stap kan, of wanneer het even te veel was.",
    ],
    tests: ["Quadricepskracht (dynamometer)", "Y-balance test anterior", "KOOS (knie)", "Single leg hop test"],
    faq: [
      {
        q: "Hoe zie ik of de belasting te snel oploopt?",
        a: "De patiënt logt per oefening de pijn en meldt in de check-in hoe het gaat. Meldt hij meer pijn, dan staat hij in de lijst Aandacht nodig en kun je het schema aanpassen. De patiënt krijgt een pushmelding bij een nieuw schema.",
      },
      {
        q: "Zijn er ook plannen voor andere hardloopblessures?",
        a: "Ja. Er staan onder andere plannen klaar voor scheenbeenvliesklachten, hielspoor, een kuitblessure en een enkelverzwikking bij hardlopers.",
      },
    ],
  },
];

export const getInjuryPage = (slug: string) => injuryPages.find((p) => p.slug === slug);

export const plansFor = (page: InjuryPage) => {
  const all = plans.filter((p) => page.categories.includes(p.category));
  const main = all.find((p) => p.name === page.mainPlan) ?? all[0];
  return { main, variants: all.filter((p) => p !== main) };
};

/** Totale duur van een plan, zoals de weekindicatie van de laatste fase */
export const planSpan = (p: Plan) => p.phases.at(-1)?.weeks ?? "";

/** Disclaimer bij de klinische inhoud van de bibliotheek */
export const planDisclaimer =
  "De REVA-herstelplannen zijn een startpunt, samengesteld op basis van gangbare indelingen uit de fysiotherapie. Ze zijn nog niet klinisch getoetst. Je kopieert een plan naar je eigen bibliotheek, beoordeelt het en past het aan voordat je het aan een patiënt toewijst. De fysiotherapeut blijft verantwoordelijk voor de behandeling.";
