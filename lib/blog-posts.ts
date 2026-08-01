export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  intro: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tijd-besparen-patientcommunicatie-fysiopraktijk",
    title: "Stop met WhatsAppen: zo win je uren terug in je fysiopraktijk",
    metaDescription:
      "Telefoontjes en WhatsApp-berichten tussen behandelingen door kosten fysiopraktijken veel tijd. Een overzicht van waar die tijd naartoe gaat en hoe een patiëntenportaal dat oplost.",
    excerpt:
      "Telefoontjes en appjes tussen behandelingen door kosten meer tijd dan je denkt. Zo win je die tijd terug.",
    category: "Patiëntcommunicatie",
    publishedAt: "2026-07-06",
    readTime: "7 min",
    intro: [
      "Een volle agenda met behandelingen is de kern van een fysiopraktijk, maar het is niet de enige plek waar de tijd naartoe gaat. Tussen de behandelingen door komen telefoontjes, WhatsApp-berichten en vragen aan de balie binnen, allemaal van patiënten die willen laten weten hoe het gaat of die een vraag hebben over hun herstel.",
      "Die communicatie is belangrijk, patiënten die zich gehoord voelen, houden zich beter aan hun behandelplan. Het probleem zit niet in de communicatie zelf, maar in hoe versnipperd die binnenkomt en hoe veel tijd het kost om die bij te houden naast een volle praktijk.",
    ],
    sections: [
      {
        heading: "Waar de tijd nu naartoe gaat",
        paragraphs: [
          "Een telefoontje van twee minuten lijkt onschuldig, maar bij tien patiënten per week is dat al twintig minuten, en dan tel je de tijd om terug te bellen, een notitie te maken of een collega bij te praten nog niet mee. WhatsApp voelt sneller, maar brengt een ander probleem met zich mee: berichten verspreiden zich over meerdere gesprekken, telefoons en soms zelfs meerdere behandelaars.",
          "Het resultaat is dat waardevolle informatie, zoals een oplopende pijnscore of een gemiste oefening, ergens in een berichtenlijst blijft hangen in plaats van dat die op tijd bij de juiste behandelaar terechtkomt.",
        ],
      },
      {
        heading: "WhatsApp voelt snel, maar kost tijd",
        paragraphs: [
          "WhatsApp is laagdrempelig voor de patiënt, en dat is precies waarom het zo vaak wordt gebruikt. Voor de praktijk is het echter een van de moeilijkste kanalen om te beheren: berichten komen op persoonlijke telefoons binnen, zijn niet doorzoekbaar per patiënt en verdwijnen tussen andere gesprekken.",
          "Bij meerdere behandelaars wordt dit nog lastiger. Wie heeft het laatste bericht van een patiënt gezien? Is er al gereageerd? Zonder een centraal overzicht is die informatie afhankelijk van wie toevallig die telefoon in handen had.",
        ],
      },
      {
        heading: "Wat je eigenlijk zou willen: signalen, geen ruis",
        paragraphs: [
          "De vraag is niet of je met patiënten wilt communiceren tussen behandelingen door, dat wil je, het levert waardevolle informatie op. De vraag is hoe je alleen de signalen ziet die aandacht nodig hebben, zonder elk bericht apart te moeten lezen en beoordelen.",
          "Dat is een ander probleem dan 'minder communiceren'. Het gaat om structuur: patiënten geven op een vaste, voorspelbare manier aan hoe het gaat, en jij ziet in één overzicht wie daarvan afwijkt.",
        ],
      },
      {
        heading: "Hoe een patiëntenportaal dit oplost",
        paragraphs: [
          "Een patiëntenportaal zoals REVA verplaatst die communicatie van losse berichten naar gestructureerde check-ins. Patiënten geven op vaste momenten aan hoe hun pijn, energie en herstel verlopen, en die gegevens komen automatisch samen in een overzicht per praktijk.",
          "In plaats van elk bericht te lezen, zie je in één oogopslag wie een hoge pijnscore doorgaf of een check-in heeft gemist. Je beslist zelf wie je actief benadert, in plaats van dat iedere binnenkomende vraag om directe aandacht vraagt.",
        ],
        list: [
          "Minder telefoontjes en WhatsApp-berichten tussen behandelingen door",
          "Eén overzicht in plaats van losse gesprekken per behandelaar",
          "Signalering van patiënten die aandacht nodig hebben",
          "Meer tijd voor de patiënten die dat echt nodig hebben",
        ],
      },
    ],
  },
  {
    slug: "therapietrouw-verhogen-patienten-herkennen",
    title: "De stille afhakers: zo herken je patiënten voordat ze stoppen",
    metaDescription:
      "Patiënten die afhaken doen dat vaak geleidelijk en onopgemerkt. Zo herken je vroege signalen van afnemende therapietrouw en werkt structureel bijhouden beter dan een los gesprek.",
    excerpt:
      "Patiënten haken zelden plotseling af. De signalen zijn er vaak al weken eerder, als je weet waar je op moet letten.",
    category: "Therapietrouw",
    publishedAt: "2026-07-13",
    readTime: "7 min",
    intro: [
      "Een patiënt die afhaakt van zijn of haar behandelplan doet dat zelden van de ene op de andere dag. Meestal gaat er een periode aan vooraf waarin oefeningen wat vaker worden overgeslagen, afspraken wat losser worden ingepland en de motivatie langzaam wegzakt.",
      "Het probleem is dat die signalen makkelijk gemist worden als je ze alleen tijdens de behandeling zelf kunt observeren. Tegen de tijd dat een patiënt een afspraak afzegt of niet meer terugkomt, is er vaak al veel tijd verloren gegaan.",
    ],
    sections: [
      {
        heading: "Waarom afhaken vaak geleidelijk gaat",
        paragraphs: [
          "Therapietrouw daalt zelden in één keer. Een patiënt die het druk heeft, slaat een oefendag over. Die ene dag wordt een week, en die week wordt het nieuwe normaal. Zonder een vast moment om daarop terug te kijken, valt dat patroon vaak pas op als het al ver gevorderd is.",
          "Voor de behandelaar is dat frustrerend: het gevoel bekruipt je pas achteraf dat er eerder had kunnen worden bijgestuurd, als het signaal maar op tijd zichtbaar was geweest.",
        ],
      },
      {
        heading: "De signalen die je makkelijk mist",
        paragraphs: [
          "Een paar patronen komen vaak terug bij patiënten die dreigen af te haken: een dalend aantal afgevinkte oefeningen, een pijnscore die stagneert in plaats van verbetert, en check-ins die minder consistent binnenkomen. Los van elkaar lijken dit kleine dingen. Samen vormen ze een duidelijk signaal.",
          "Zonder gestructureerde gegevens is dit lastig te zien. Je vertrouwt dan op wat een patiënt vertelt tijdens de behandeling, en patiënten die minder gemotiveerd zijn, zijn vaak ook minder geneigd om dat actief te melden.",
        ],
      },
      {
        heading: "Waarom een los gesprek niet genoeg is",
        paragraphs: [
          "Een goed gesprek tijdens de behandeling blijft waardevol, maar het is een momentopname. Het vertelt je hoe het nu gaat, niet hoe het patroon zich de afgelopen weken heeft ontwikkeld. Juist die trend is waar vroege signalen van afhakende patiënten in zichtbaar worden.",
          "Om dat patroon te zien heb je gegevens nodig die niet afhankelijk zijn van het geheugen van de patiënt of van wat er toevallig ter sprake komt tijdens een behandeling van twintig minuten.",
        ],
      },
      {
        heading: "Structureel bijhouden in plaats van incidenteel navragen",
        paragraphs: [
          "Een patiëntenportaal maakt therapietrouw zichtbaar zonder dat je er actief naar hoeft te vragen. Oefeningen die worden afgevinkt, check-ins die binnenkomen en pijnscores die zich ontwikkelen, geven samen een objectief beeld van hoe een patiënt er werkelijk voor staat.",
          "In REVA zie je dat per patiënt terug: wie het schema consistent volgt en wie afwijkt van het gebruikelijke patroon. Dat maakt het mogelijk om bij te sturen op het moment dat het nog een klein gesprek is, in plaats van een grote inhaalslag.",
        ],
        list: [
          "Vroege signalen van afnemende therapietrouw per patiënt zichtbaar",
          "Objectieve gegevens naast het gesprek tijdens de behandeling",
          "Sneller bijsturen voordat een patiënt volledig afhaakt",
          "Minder afhankelijk van wat een patiënt zich nog herinnert",
        ],
      },
    ],
  },
  {
    slug: "van-whatsapp-naar-patientenportaal",
    title: "Van WhatsApp-chaos naar overzicht: waarom praktijken overstappen",
    metaDescription:
      "Steeds meer fysiotherapiepraktijken stappen over van WhatsApp en telefoon naar een patiëntenportaal. Wat die overstap in de praktijk oplevert en waar je op let bij de keuze.",
    excerpt:
      "WhatsApp werkte prima toen de praktijk klein was. Bij groei wordt het al snel een systeem dat tegen je begint te werken.",
    category: "Digitalisering",
    publishedAt: "2026-07-20",
    readTime: "6 min",
    intro: [
      "Veel fysiotherapiepraktijken zijn begonnen met WhatsApp als praktische manier om met patiënten te communiceren: laagdrempelig, iedereen heeft het al, en het kost niets om op te zetten. Voor een kleine praktijk met een handvol vaste patiënten werkt dat prima.",
      "Naarmate een praktijk groeit, met meer patiënten, meer behandelaars en soms meerdere locaties, begint diezelfde laagdrempeligheid tegen te werken. Wat begon als een snelle oplossing wordt een systeem waarin informatie makkelijk verloren gaat.",
    ],
    sections: [
      {
        heading: "Wat WhatsApp goed doet, en waar het misgaat",
        paragraphs: [
          "WhatsApp is direct, vertrouwd en drempelloos voor patiënten. Dat is ook precies het probleem: er is geen structuur. Berichten van verschillende patiënten, over verschillende onderwerpen, komen door elkaar binnen op persoonlijke telefoons van behandelaars.",
          "Zodra een praktijk groeit, ontstaan er vragen die WhatsApp niet beantwoordt: wie heeft dit bericht al gezien? Staat deze informatie ook in het dossier? Wat gebeurt er als een behandelaar met vakantie is of de praktijk verlaat?",
        ],
      },
      {
        heading: "De verborgen kosten van versnippering",
        paragraphs: [
          "Versnipperde communicatie kost meer dan tijd alleen. Belangrijke signalen, zoals een patiënt die aangeeft dat de pijn toeneemt, kunnen tussen andere berichten verdwijnen. Bij een personeelswissel gaat historische context verloren als die alleen op een telefoon van een vertrekkende behandelaar heeft gestaan.",
          "Daarnaast is WhatsApp niet gebouwd voor gezondheidsgegevens. Praktijken die groeien en professionaliseren, lopen hier vroeg of laat tegenaan: patiëntinformatie hoort in een systeem waar je grip op hebt, niet verspreid over privételefoons.",
        ],
      },
      {
        heading: "Wat de overstap in de praktijk oplevert",
        paragraphs: [
          "Praktijken die overstappen naar een patiëntenportaal, merken vooral verschil in overzicht. In plaats van berichten na te zoeken, staat alle communicatie en voortgang per patiënt op één centrale plek, toegankelijk voor het hele team.",
          "Dat overzicht is vooral waardevol op de momenten dat het ertoe doet: bij een personeelswissel, bij overdracht tussen behandelaars, of simpelweg tijdens een drukke dag waarop je snel moet kunnen zien wie aandacht nodig heeft.",
        ],
      },
      {
        heading: "Waar je op let bij de keuze",
        paragraphs: [
          "Niet elk systeem is gebouwd voor de dagelijkse realiteit van een fysiopraktijk. Let op of een portaal patiënten laagdrempelig toegang geeft zonder ingewikkelde installatie, of het overzicht geeft per patiënt én over je hele caseload, en of het voldoet aan de eisen rond gezondheidsdata.",
          "REVA is gebouwd vanuit die praktijkbehoefte: een patiëntenportaal dat de laagdrempeligheid van WhatsApp behoudt voor de patiënt, maar het overzicht en de structuur biedt die een groeiende praktijk nodig heeft.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-een-patientenportaal",
    title: "Patiëntenportaal: nice-to-have of onmisbaar voor je praktijk?",
    metaDescription:
      "Een patiëntenportaal legt communicatie en voortgang tussen praktijk en patiënt vast op één centrale plek. Uitleg over wat het is, wat het oplost en voor welke praktijken het meerwaarde heeft.",
    excerpt:
      "De term valt steeds vaker, maar wat is een patiëntenportaal precies en wanneer heeft het meerwaarde voor jouw praktijk?",
    category: "Digitalisering",
    publishedAt: "2026-07-27",
    readTime: "6 min",
    intro: [
      "De term patiëntenportaal duikt steeds vaker op in gesprekken tussen fysiotherapiepraktijken, maar wat het precies inhoudt, is niet altijd duidelijk. Voor sommige praktijken klinkt het als iets voor grote, complexe organisaties. In werkelijkheid is het een hulpmiddel dat net zo goed waarde heeft voor een praktijk met twee behandelaars als voor een praktijk met twintig.",
    ],
    sections: [
      {
        heading: "Wat een patiëntenportaal precies is",
        paragraphs: [
          "Een patiëntenportaal is een omgeving waarin patiënten zelf gegevens over hun herstel bijhouden, zoals pijn, energie en oefeningen, en waar zij afspraken en documenten terugvinden. De praktijk krijgt aan de andere kant een overzicht van al die gegevens, per patiënt en over de hele caseload.",
          "Het verschil met bijvoorbeeld e-mail of WhatsApp is structuur: informatie komt niet als los bericht binnen, maar als onderdeel van een vast, herkenbaar overzicht dat voor iedere patiënt op dezelfde manier is opgebouwd.",
        ],
      },
      {
        heading: "Wat het oplost voor een praktijk",
        paragraphs: [
          "Het kernprobleem dat een patiëntenportaal oplost, is versnippering. Zonder centraal systeem verspreidt patiëntinformatie zich over telefoons, e-mails en het geheugen van individuele behandelaars. Een portaal brengt dat samen op één plek, toegankelijk voor iedereen in de praktijk die daar toegang toe moet hebben.",
          "Daarnaast geeft het patiënten een eigen rol in het bijhouden van hun herstel. In plaats van dat alle informatie via de behandelaar moet lopen, registreren patiënten zelf hoe het gaat, wat tijd bespaart en vaak een completer beeld geeft dan een los gesprek tijdens de behandeling.",
        ],
      },
      {
        heading: "Voor welke praktijken het meerwaarde heeft",
        paragraphs: [
          "Een patiëntenportaal is niet alleen voor grote praktijken. Ook een eenmanspraktijk profiteert van minder losse telefoontjes en een professionelere uitstraling naar patiënten. Bij praktijken met meerdere behandelaars of vestigingen wordt de meerwaarde nog groter, omdat overdracht en samenwerking anders al snel afhankelijk worden van losse aantekeningen.",
          "De grootste meerwaarde ontstaat bij praktijken die willen groeien of professionaliseren: een eigen patiëntenportaal versterkt het imago van de praktijk en maakt tegelijk het werk van het team overzichtelijker.",
        ],
      },
      {
        heading: "Hoe REVA hierin past",
        paragraphs: [
          "REVA is het patiëntenportaal waarin patiënten hun herstel bijhouden en praktijken in één overzicht zien wie aandacht nodig heeft. Het is opgezet om snel te implementeren, zonder een lang IT-traject.",
        ],
        list: [
          "Eén centrale plek voor communicatie en voortgang per patiënt",
          "Overzicht voor je hele team, niet alleen de behandelend fysiotherapeut",
          "Patiënten houden zelf hun herstel bij, met minder tijdsdruk voor de praktijk",
          "Bruikbaar voor zowel kleine als groeiende praktijken",
        ],
      },
    ],
  },
  {
    slug: "avg-patientdata-fysiopraktijk",
    title: "AVG en patiëntdata: de praktische gids voor je fysiopraktijk",
    metaDescription:
      "Fysiotherapiepraktijken verwerken gevoelige gezondheidsgegevens en hebben daarom een zorgplicht onder de AVG. Een overzicht van de belangrijkste aandachtspunten bij het digitaliseren van patiëntcommunicatie.",
    excerpt:
      "Gezondheidsgegevens zijn bijzondere persoonsgegevens onder de AVG. Een overzicht van waar je op let als je patiëntcommunicatie digitaliseert.",
    category: "AVG & privacy",
    publishedAt: "2026-07-31",
    readTime: "8 min",
    intro: [
      "Fysiotherapiepraktijken werken dagelijks met gevoelige informatie: pijnklachten, medische geschiedenis, behandelverslagen. Onder de Algemene Verordening Gegevensbescherming (AVG) vallen dit soort gegevens onder de categorie bijzondere persoonsgegevens, met strengere eisen dan gewone contactgegevens.",
      "Dit artikel geeft een algemeen overzicht van de belangrijkste aandachtspunten. Het is geen juridisch advies: raadpleeg bij twijfel altijd een specialist op het gebied van privacyrecht of de Autoriteit Persoonsgegevens.",
    ],
    sections: [
      {
        heading: "Wie is verantwoordelijk voor patiëntdata?",
        paragraphs: [
          "Als praktijk ben je in de regel de verwerkingsverantwoordelijke voor de gegevens van je patiënten: jij bepaalt waarom en hoe die gegevens worden verwerkt. Maak je gebruik van software zoals een patiëntenportaal, dan treedt de leverancier van die software meestal op als verwerker, die de gegevens namens jou verwerkt.",
          "Dat onderscheid is belangrijk, want het bepaalt wie welke verantwoordelijkheid draagt. Als verwerkingsverantwoordelijke blijf jij eindverantwoordelijk richting je patiënten, ook als een externe partij de technische verwerking uitvoert.",
        ],
      },
      {
        heading: "Waarom een verwerkersovereenkomst nodig is",
        paragraphs: [
          "Wanneer je patiëntdata laat verwerken door een softwareleverancier, schrijft de AVG voor dat daar een verwerkersovereenkomst voor moet zijn. Daarin staat onder meer vastgelegd welke gegevens worden verwerkt, met welk doel, hoe lang ze worden bewaard en welke beveiligingsmaatregelen gelden.",
          "Voordat je een patiëntenportaal of ander softwaresysteem in gebruik neemt, is het verstandig om te controleren of een verwerkersovereenkomst beschikbaar is en of deze aansluit bij de situatie van jouw praktijk.",
        ],
      },
      {
        heading: "Toestemming en informatieplicht",
        paragraphs: [
          "Patiënten moeten weten welke gegevens worden verzameld en waarom, en in veel gevallen is voor de verwerking van gezondheidsgegevens expliciete toestemming vereist. Dat betekent dat een patiëntenportaal helder moet communiceren wat er met check-ins, dossiers en andere gegevens gebeurt.",
          "Een goed portaal maakt dit voor de patiënt inzichtelijk, zodat toestemming niet alleen een vinkje is bij registratie, maar aansluit bij wat de patiënt daadwerkelijk begrijpt over het gebruik van zijn of haar gegevens.",
        ],
      },
      {
        heading: "Beveiliging en bewaartermijnen",
        paragraphs: [
          "Gezondheidsgegevens moeten passend beveiligd worden, denk aan versleuteling, beperkte toegang en beveiligde verbindingen. Daarnaast geldt dat gegevens niet langer bewaard mogen worden dan noodzakelijk. Na beëindiging van de behandelrelatie of op verzoek van de patiënt moeten gegevens binnen een redelijke termijn kunnen worden verwijderd.",
          "Dit is een van de redenen waarom losse WhatsApp-berichten en spreadsheets in de praktijk lastig verdedigbaar zijn: er is geen duidelijke bewaartermijn, geen centrale verwijdermogelijkheid en vaak geen goed zicht op wie toegang heeft.",
        ],
      },
      {
        heading: "Hoe REVA hierin ondersteunt",
        paragraphs: [
          "REVA is gebouwd met deze eisen als uitgangspunt. Patiëntdata wordt versleuteld opgeslagen, praktijken werken op basis van een verwerkersovereenkomst, en patiënten kunnen hun account en gegevens op elk moment zelf laten verwijderen. Dat ontslaat je niet van je eigen verantwoordelijkheid als verwerkingsverantwoordelijke, maar het geeft wel een stevige basis om vanuit te werken.",
        ],
      },
    ],
  },
  {
    slug: "fysio-op-vakantie-continuiteit-van-zorg",
    title: "Je fysio is met vakantie: wat gebeurt er dan met je herstel?",
    metaDescription:
      "In de zomer zijn fysiotherapeuten met vakantie en worden patiënten tijdelijk bij een collega of andere locatie ingepland. Zonder centraal overzicht gaat daarbij vaak informatie verloren. Zo voorkom je dat met een patiëntenportaal.",
    excerpt:
      "Het is weer vakantieperiode. Fijn voor je collega's, maar wat gebeurt er met de behandeling van hun patiënten in die twee weken?",
    category: "Praktijkvoering",
    publishedAt: "2026-08-03",
    readTime: "6 min",
    intro: [
      "Het is weer die tijd van het jaar: de agenda's lopen leeg, collega's plannen twee weken vakantie in, en iedereen kijkt ernaar uit om even niks te moeten. Ook fysiotherapeuten hebben, gelukkig, gewoon vakantie. Voor de praktijk betekent dat vaak schuiven: patiënten worden tijdelijk bij een collega ingepland, of soms zelfs op een andere locatie.",
      "Precies daar gaat het regelmatig mis. Niet omdat de waarnemende fysio het niet goed doet, maar omdat die simpelweg niet dezelfde informatie tot zijn beschikking heeft als de vaste behandelaar.",
    ],
    sections: [
      {
        heading: "Een herkenbare situatie",
        paragraphs: [
          "Neem een praktijk met meerdere vestigingen, iets wat steeds vaker voorkomt. Een patiënt wordt normaal behandeld op locatie A, waar ook het papieren herstelschema in een map ligt. De vaste fysio gaat twee weken op vakantie, en de patiënt wordt voor die periode ingepland op locatie B, bij een collega die het overneemt.",
          "Alleen ligt dat schema dus op locatie A. De patiënt heeft het niet bij de hand, en de waarnemende fysio ook niet. Er zijn geen interne notities overgedragen, dus die collega weet eigenlijk niet veel meer dan wat de patiënt zelf op dat moment kan vertellen. Twee weken behandeling die, in het beste geval, op gevoel worden ingevuld.",
        ],
      },
      {
        heading: "Waarom dit vaker gebeurt dan je denkt",
        paragraphs: [
          "Dit is geen uitzonderlijk scenario. Vakantie, ziekte, een drukke periode waarin patiënten worden herverdeeld over het team: het gebeurt continu in een praktijk die groeit of meerdere locaties heeft. Zolang informatie vastzit aan een papieren dossier, een los systeem per locatie of het geheugen van één behandelaar, ontstaat er bij iedere overdracht hetzelfde risico.",
          "Het is niet dat waarnemende fysio's hun werk niet goed kunnen doen. Het probleem is dat ze moeten werken zonder de context die de vaste behandelaar wél heeft: hoe de pijn zich de afgelopen weken ontwikkelde, welke oefeningen wel en niet aansloegen, waar de patiënt precies in het schema zit.",
        ],
      },
      {
        heading: "Wat de patiënt intussen wel kan doen",
        paragraphs: [
          "Belangrijk detail: een patiënt hoeft tijdens zo'n overdracht niet stil te staan. Met een goed bijgehouden herstelplan kan iemand prima twee weken zelfstandig verder, ook zonder dat elke sessie exact wordt begeleid. Wat daarvoor nodig is, is dat het schema, de voortgang en de laatste check-ins ergens staan waar zowel de patiënt als iedere behandelaar bij kan, ongeacht op welke locatie die op dat moment werkt.",
          "Dat is een andere insteek dan 'de fysio moet er altijd bij zijn'. Het gaat erom dat het herstel niet afhankelijk is van één persoon of één map op één locatie.",
        ],
      },
      {
        heading: "Hoe REVA dit voorkomt",
        paragraphs: [
          "In REVA staat het herstelplan van een patiënt niet vast aan een locatie of een behandelaar, maar aan het patiëntdossier zelf. Elke fysio binnen de praktijk, op elke vestiging, ziet dezelfde actuele informatie: het schema, de laatste check-ins, pijnscores en voortgang tot nu toe.",
          "Neemt een collega tijdelijk een patiënt over, dan opent die het dossier in REVA en heeft binnen een minuut hetzelfde beeld als de vaste behandelaar. De patiënt merkt daar weinig van, behalve dat de begeleiding gewoon doorloopt, ook als de eigen fysio twee weken op een strand ligt.",
        ],
        list: [
          "Eén herstelplan per patiënt, zichtbaar voor elke behandelaar en elke vestiging",
          "Geen papieren schema's die aan één locatie vastzitten",
          "Check-ins en voortgang lopen door, ook zonder de vaste fysio",
          "Waarnemende collega's zijn binnen een minuut op de hoogte, in plaats van te gissen",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
