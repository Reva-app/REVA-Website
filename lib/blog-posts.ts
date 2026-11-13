import { euro, PRICING, priceSentence, TRIAL_DAYS } from "@/lib/pricing";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** Optionele tabel, bijvoorbeeld een vergelijking. Eerste kolom is de rijkop. */
  table?: { caption: string; headers: string[]; rows: string[][] };
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  // Eigen omslagafbeelding (16:9, onderwerp gecentreerd); zonder valt het terug op de categorie-illustratie
  image?: { src: string; alt: string };
  keywords?: string[];
  // Kort, direct antwoord bovenaan: scanbaar voor lezers en citeerbaar voor AI-zoekmachines
  summary?: string[];
  intro: string[];
  sections: BlogSection[];
  faq?: BlogFaq[];
}

/** De vaste onderwerpen van de blog, in de volgorde van de filter op /blog */
export const blogCategories = [
  "Praktijkvoering",
  "Digitalisering",
  "Patiëntbegeleiding",
  "Herstel & revalidatie",
  "Privacy & AVG",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "tijd-besparen-patientcommunicatie-fysiopraktijk",
    title: "Stop met WhatsAppen: zo win je uren terug in je fysiopraktijk",
    metaDescription: "Telefoontjes en berichten via WhatsApp tussen behandelingen door kosten fysiopraktijken uren per week. Waar die tijd naartoe gaat en hoe je hem terugwint.",
    excerpt: "Telefoontjes en appjes tussen behandelingen door kosten meer tijd dan je denkt. Zo win je die tijd terug.",
    category: "Patiëntbegeleiding",
    publishedAt: "2026-07-06",
    updatedAt: "2026-11-05",
    readTime: "5 min",
    image: {
      src: "/blog/tijd-besparen-foto.webp",
      alt: "Fysiotherapeut werkt aan een bureau in de praktijk, met de behandelruimte op de achtergrond",
    },
    keywords: [
      "tijd besparen fysiopraktijk",
      "patiëntcommunicatie fysiotherapie",
      "WhatsApp fysiotherapeut",
      "minder telefoontjes fysiopraktijk",
      "administratie fysiotherapie verminderen",
    ],
    summary: [
      "Telefoontjes en berichten via WhatsApp tussen behandelingen door lijken klein, maar lopen bij een volle praktijk op tot uren per week.",
      "Het probleem is niet dat patiënten contact zoeken, maar dat die informatie versnipperd binnenkomt: op privételefoons, bij verschillende behandelaars en zonder vaste structuur.",
      "Met vaste, korte checks in een patiëntenportaal zie je in één overzicht wie aandacht nodig heeft, in plaats van elk bericht apart te lezen.",
      "Zo houd je het contact met patiënten, maar zonder de onderbrekingen en het zoekwerk.",
    ],
    intro: [
      "Een volle agenda met behandelingen is de kern van een fysiopraktijk, maar het is niet de enige plek waar de tijd naartoe gaat. Tussen de behandelingen door komen telefoontjes, berichten via WhatsApp en vragen aan de balie binnen, allemaal van patiënten die willen laten weten hoe het gaat of die een vraag hebben over hun herstel.",
      "Die communicatie is belangrijk. Patiënten die zich gehoord voelen, houden zich beter aan hun behandelplan. Het probleem zit niet in de communicatie zelf, maar in hoe versnipperd die binnenkomt en hoeveel tijd het kost om die bij te houden naast een volle praktijk. In dit artikel lees je waar die tijd precies blijft, en hoe je hem terugwint zonder dat het contact met je patiënten eronder lijdt.",
    ],
    sections: [
      {
        heading: "Waar de tijd nu naartoe gaat",
        paragraphs: [
          "Een telefoontje van twee minuten lijkt onschuldig. Maar wie terugbelt, een notitie maakt in het dossier en een collega bijpraat, is al snel vijf tot tien minuten verder. Doe dat een paar keer per dag, en er verdwijnt ongemerkt een flink deel van je week.",
          "Berichten via WhatsApp voelen sneller, maar brengen een ander probleem met zich mee. Ze verspreiden zich over meerdere gesprekken, telefoons en soms meerdere behandelaars. Waardevolle informatie, zoals een oplopende pijnscore of een gemiste oefening, blijft daardoor ergens in een berichtenlijst hangen in plaats van dat die op tijd bij de juiste behandelaar terechtkomt.",
        ],
      },
      {
        heading: "Een rekenvoorbeeld voor jouw praktijk",
        paragraphs: [
          "Reken het eens na voor je eigen praktijk. Stel dat elke behandelaar per dag vijf korte contactmomenten heeft buiten de behandeling om: een telefoontje, een bericht, een vraag aan de balie die doorgezet wordt. Reken per contactmoment vijf minuten inclusief terugkoppelen en vastleggen. Dan gaat het om bijna een half uur per behandelaar per dag, en ruim twee uur per week.",
          "Bij een team van vier behandelaars is dat al snel een volle werkdag per week. Dat is tijd die niet in de agenda staat, maar wel van je dag af gaat: tussen twee behandelingen door, in de lunchpauze of aan het eind van de dag. Het voorbeeld is bewust eenvoudig gehouden. Vul je eigen aantallen in, dan zie je snel of het in jouw praktijk meer of minder is.",
        ],
      },
      {
        heading: "WhatsApp voelt snel, maar kost tijd",
        paragraphs: [
          "WhatsApp is laagdrempelig voor de patiënt, en dat is precies waarom het zo vaak wordt gebruikt. Voor de praktijk is het echter een van de moeilijkste kanalen om te beheren: berichten komen op persoonlijke telefoons binnen, zijn niet doorzoekbaar per patiënt en verdwijnen tussen andere gesprekken.",
          "Bij meerdere behandelaars wordt dit nog lastiger. Wie heeft het laatste bericht van een patiënt gezien? Is er al gereageerd? Zonder een centraal overzicht is die informatie afhankelijk van wie toevallig die telefoon in handen had. Daarnaast is WhatsApp niet gebouwd voor gezondheidsgegevens, wat vragen oproept rond de AVG. Lees daarover meer in [AVG en patiëntdata: de praktische gids voor je fysiopraktijk](/blog/avg-patientdata-fysiopraktijk).",
        ],
      },
      {
        heading: "Wat je eigenlijk wilt: signalen, geen ruis",
        paragraphs: [
          "De vraag is niet of je met patiënten wilt communiceren tussen behandelingen door. Dat wil je, het levert waardevolle informatie op. De vraag is hoe je alleen de signalen ziet die aandacht nodig hebben, zonder elk bericht apart te moeten lezen en beoordelen.",
          "Dat is een ander probleem dan minder communiceren. Het gaat om structuur: patiënten geven op een vaste, voorspelbare manier aan hoe het gaat, en jij ziet in één overzicht wie daarvan afwijkt. Een patiënt met een stabiele, dalende pijnscore heeft geen telefoontje nodig. Een patiënt bij wie de zwelling toeneemt wel.",
        ],
      },
      {
        heading: "Vijf manieren om vandaag al tijd terug te winnen",
        paragraphs: [
          "Je hoeft niet alles in één keer om te gooien. Deze stappen leveren direct tijd op, ook als je nog geen nieuwe software gebruikt.",
        ],
        list: [
          "Spreek vaste momenten af waarop patiënten laten weten hoe het gaat, in plaats van dat ze op elk moment contact zoeken.",
          "Maak onderscheid tussen vragen die direct antwoord nodig hebben en updates die kunnen wachten tot het volgende consult.",
          "Leg informatie vast op één plek die het hele team kan zien, niet op de telefoon van één behandelaar.",
          "Geef patiënten hun oefeningen en herstelplan mee in een vorm die ze altijd bij de hand hebben, zodat ze minder hoeven te vragen.",
          "Bekijk één keer per dag een overzicht van wie aandacht nodig heeft, in plaats van de hele dag door te reageren.",
        ],
      },
      {
        heading: "Hoe een patiëntenportaal dit oplost",
        paragraphs: [
          "Een [patiëntenportaal](/blog/wat-is-een-patientenportaal) zoals REVA verplaatst die communicatie van losse berichten naar gestructureerde checks. Patiënten geven op vaste momenten aan hoe hun pijn, energie en herstel verlopen, en die gegevens komen automatisch samen in een overzicht per praktijk.",
          "In plaats van elk bericht te lezen, zie je in één oogopslag wie een hoge pijnscore doorgaf of een check heeft gemist. Je beslist zelf wie je actief benadert, in plaats van dat iedere binnenkomende vraag om directe aandacht vraagt. Hoe je die overstap aanpakt, lees je in [Van WhatsApp naar patiëntenportaal](/blog/van-whatsapp-naar-patientenportaal).",
        ],
        list: [
          "Minder telefoontjes en berichten via WhatsApp tussen behandelingen door",
          "Eén overzicht in plaats van losse gesprekken per behandelaar",
          "Signalering van patiënten die aandacht nodig hebben",
          "Meer tijd voor de patiënten die dat echt nodig hebben",
        ],
      },
      {
        heading: "Wat je patiënten ervan merken",
        paragraphs: [
          "Patiënten merken vooral dat ze beter weten waar ze aan toe zijn. Ze hebben hun oefeningen en herstelplan altijd bij de hand, zien hun eigen voortgang en weten dat de praktijk meekijkt. Dat geeft rust, ook op de dagen dat ze hun fysiotherapeut niet zien.",
          "Contact blijft gewoon mogelijk. Het verschil is dat het contact gerichter wordt: jij neemt contact op als de gegevens daar aanleiding toe geven, en de patiënt hoeft niet meer te bellen om te laten weten dat alles goed gaat. Bekijk de [functies voor fysiotherapeuten](/functies/voor-fysios) om te zien hoe dat er in REVA uitziet.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoeveel tijd kost patiëntcommunicatie buiten de behandeling?",
        answer: "Dat verschilt per praktijk, maar korte contactmomenten lopen snel op. Vijf contactmomenten van vijf minuten per behandelaar per dag zijn samen ruim twee uur per week per behandelaar. Bij een team van vier is dat al snel een volle werkdag.",
      },
      {
        question: "Mag ik als fysiotherapeut met patiënten appen via WhatsApp?",
        answer: "Het is niet verboden, maar het is lastig om daarbij aan de AVG te voldoen. Berichten met gezondheidsinformatie staan dan op privételefoons, zijn niet gekoppeld aan het dossier en er is geen verwerkersovereenkomst met WhatsApp. Een patiëntenportaal dat voor de zorg is gebouwd, is daarom een veiligere keuze.",
      },
      {
        question: "Hoe verminder ik het aantal telefoontjes in mijn fysiopraktijk?",
        answer: "Spreek vaste momenten af waarop patiënten laten weten hoe het gaat, geef ze hun oefeningen en herstelplan mee in een vorm die ze altijd bij de hand hebben, en werk vanuit één overzicht van wie aandacht nodig heeft. Een patiëntenportaal zoals REVA regelt dat op één plek.",
      },
      {
        question: "Verlies ik niet het persoonlijke contact met patiënten?",
        answer: "Nee. Het contact wordt gerichter. Je ziet op basis van de checks wie aandacht nodig heeft en neemt dan zelf contact op. Patiënten die goed op schema liggen, hoeven niet te bellen om dat te melden.",
      },
    ],
  },
  {
    slug: "therapietrouw-verhogen-patienten-herkennen",
    title: "De stille afhakers: zo herken je patiënten voordat ze stoppen",
    metaDescription: "Therapietrouw daalt zelden plotseling. Zo herken je vroege signalen van afhakende patiënten in je fysiopraktijk en stuur je bij voordat ze stoppen.",
    excerpt: "Patiënten haken zelden plotseling af. De signalen zijn er vaak al weken eerder, als je weet waar je op moet letten.",
    category: "Patiëntbegeleiding",
    publishedAt: "2026-07-13",
    updatedAt: "2026-11-05",
    readTime: "4 min",
    image: {
      src: "/blog/therapietrouw-foto.webp",
      alt: "Patiënt doet thuis een kniebuiging, met haar telefoon op de oefenmat",
    },
    keywords: [
      "therapietrouw fysiotherapie",
      "therapietrouw verhogen",
      "afhakende patiënten fysiotherapie",
      "patiënten motiveren oefeningen",
      "no show fysiopraktijk",
    ],
    summary: [
      "Therapietrouw is de mate waarin een patiënt zijn behandelplan volgt, zoals thuisoefeningen doen en afspraken nakomen.",
      "Patiënten haken zelden in één keer af. Minder afgevinkte oefeningen, gemiste checks en een pijnscore die niet verbetert, zijn vaak weken eerder zichtbaar.",
      "Een gesprek tijdens de behandeling is een momentopname. Structureel bijgehouden gegevens laten de trend zien.",
      "Wie een signaal vroeg ziet, kan bijsturen met een kort gesprek in plaats van een grote inhaalslag.",
    ],
    intro: [
      "Een patiënt die afhaakt van zijn behandelplan doet dat zelden van de ene op de andere dag. Meestal gaat er een periode aan vooraf waarin oefeningen wat vaker worden overgeslagen, afspraken wat losser worden ingepland en de motivatie langzaam wegzakt.",
      "Het probleem is dat die signalen makkelijk gemist worden als je ze alleen tijdens de behandeling kunt zien. Tegen de tijd dat een patiënt een afspraak afzegt of niet meer terugkomt, is er vaak al veel tijd verloren gegaan. In dit artikel lees je welke signalen je kunt herkennen, en hoe je bijstuurt voordat een patiënt echt stopt.",
    ],
    sections: [
      {
        heading: "Wat is therapietrouw in de fysiotherapie?",
        paragraphs: [
          "Therapietrouw is de mate waarin een patiënt zich aan zijn behandelplan houdt. In de fysiotherapie gaat het dan vooral om het doen van thuisoefeningen, het nakomen van afspraken en het opvolgen van adviezen over belasting en rust. Het herstel van een patiënt hangt voor een groot deel af van wat er tussen de behandelingen gebeurt.",
          "Dat maakt therapietrouw een van de belangrijkste factoren voor een goed behandelresultaat, en tegelijk een van de lastigste om zicht op te houden. Je ziet een patiënt immers maar een paar keer per week, of minder.",
        ],
      },
      {
        heading: "Waarom afhaken vaak geleidelijk gaat",
        paragraphs: [
          "Therapietrouw daalt zelden in één keer. Een patiënt die het druk heeft, slaat een oefendag over. Die ene dag wordt een week, en die week wordt het nieuwe normaal. Zonder een vast moment om daarop terug te kijken, valt dat patroon vaak pas op als het al ver gevorderd is.",
          "Voor de behandelaar is dat frustrerend. Achteraf bekruipt je het gevoel dat er eerder had kunnen worden bijgestuurd, als het signaal maar op tijd zichtbaar was geweest.",
        ],
      },
      {
        heading: "Vijf vroege signalen van een afhakende patiënt",
        paragraphs: [
          "Een paar patronen komen vaak terug bij patiënten die dreigen af te haken. Los van elkaar lijken het kleine dingen. Samen vormen ze een duidelijk signaal.",
        ],
        list: [
          "Het aantal afgevinkte oefeningen daalt een paar weken achter elkaar.",
          "Checks over pijn en herstel komen minder vaak of onregelmatiger binnen.",
          "De pijnscore stagneert of loopt op, terwijl je verbetering zou verwachten.",
          "Afspraken worden vaker verzet of op het laatste moment afgezegd.",
          "De patiënt geeft kortere antwoorden of stelt minder vragen dan eerst.",
        ],
      },
      {
        heading: "Waarom een los gesprek niet genoeg is",
        paragraphs: [
          "Een goed gesprek tijdens de behandeling blijft waardevol, maar het is een momentopname. Het vertelt je hoe het nu gaat, niet hoe het patroon zich de afgelopen weken heeft ontwikkeld. Juist in die trend worden vroege signalen zichtbaar.",
          "Patiënten die minder gemotiveerd zijn, zijn bovendien vaak minder geneigd om dat zelf te melden. Om het patroon te zien heb je gegevens nodig die niet afhankelijk zijn van het geheugen van de patiënt of van wat er toevallig ter sprake komt tijdens een behandeling van een half uur.",
        ],
      },
      {
        heading: "Structureel bijhouden in plaats van incidenteel navragen",
        paragraphs: [
          "Een [patiëntenportaal](/blog/wat-is-een-patientenportaal) maakt therapietrouw zichtbaar zonder dat je er actief naar hoeft te vragen. Oefeningen die worden afgevinkt, checks die binnenkomen en pijnscores die zich ontwikkelen, geven samen een objectief beeld van hoe een patiënt er werkelijk voor staat.",
          "In REVA zie je dat per patiënt terug: wie het schema consistent volgt en wie afwijkt van het gebruikelijke patroon. Zo kun je bijsturen op het moment dat het nog een klein gesprek is, in plaats van een grote inhaalslag.",
        ],
        list: [
          "Vroege signalen van afnemende therapietrouw per patiënt zichtbaar",
          "Objectieve gegevens naast het gesprek tijdens de behandeling",
          "Sneller bijsturen voordat een patiënt volledig afhaakt",
          "Minder afhankelijk van wat een patiënt zich nog herinnert",
        ],
      },
      {
        heading: "Wat je doet als je een signaal ziet",
        paragraphs: [
          "Een signaal is geen reden voor een preek, maar voor een vraag. Vaak zit er een concrete reden achter: drukte op het werk, onzekerheid over een oefening, of het gevoel dat het herstel stilstaat. Hoe eerder je dat boven tafel krijgt, hoe makkelijker het op te lossen is.",
          "Neem kort contact op en vraag hoe het gaat. Kijk samen of het oefenprogramma nog past bij wat de patiënt aankan en wil bereiken. Soms helpt het om het programma tijdelijk te vereenvoudigen, of om een concreet tussendoel af te spreken dat binnen een paar weken haalbaar is. Een patiënt die vooruitgang ziet, blijft gemotiveerder.",
        ],
      },
      {
        heading: "Therapietrouw en continuïteit van zorg",
        paragraphs: [
          "Therapietrouw staat extra onder druk op momenten dat de vaste behandelaar er even niet is, bijvoorbeeld tijdens vakanties. Als een collega waarneemt zonder zicht op de voortgang, is de kans groot dat het ritme van de patiënt verloren gaat. Lees in [Fysio met vakantie](/blog/fysio-op-vakantie-continuiteit-van-zorg) hoe je dat voorkomt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat is therapietrouw?",
        answer: "Therapietrouw is de mate waarin een patiënt zijn behandelplan volgt. In de fysiotherapie gaat het vooral om het doen van thuisoefeningen, het nakomen van afspraken en het opvolgen van adviezen over belasting en rust.",
      },
      {
        question: "Hoe herken ik dat een patiënt dreigt af te haken?",
        answer: "Let op een dalend aantal afgevinkte oefeningen, minder of onregelmatiger checks, een pijnscore die niet verbetert en afspraken die vaker worden verzet. Los van elkaar zijn het kleine signalen, samen vormen ze een duidelijk patroon.",
      },
      {
        question: "Hoe verhoog ik de therapietrouw van mijn patiënten?",
        answer: "Maak het oefenprogramma haalbaar en concreet, spreek tussendoelen af, laat patiënten hun eigen voortgang zien en neem contact op zodra je een dalende trend ziet. Een patiëntenportaal helpt omdat het die trend zichtbaar maakt zonder dat je ernaar hoeft te vragen.",
      },
      {
        question: "Kan ik therapietrouw meten?",
        answer: "Ja. Door bij te houden hoeveel oefeningen een patiënt afvinkt, hoe vaak checks binnenkomen en hoe pijnscores zich ontwikkelen, krijg je een objectief beeld per week. In REVA zie je dat per patiënt in grafieken terug.",
      },
    ],
  },
  {
    slug: "van-whatsapp-naar-patientenportaal",
    title: "Van WhatsApp naar patiëntenportaal: waarom fysiopraktijken overstappen",
    metaDescription: "Steeds meer fysiopraktijken stappen over van WhatsApp en telefoon naar een patiëntenportaal. Wat de overstap oplevert, hoe je hem aanpakt en waar je op let.",
    excerpt: "WhatsApp werkte prima toen de praktijk klein was. Bij groei wordt het al snel een systeem dat tegen je begint te werken.",
    category: "Digitalisering",
    publishedAt: "2026-07-20",
    updatedAt: "2026-11-13",
    readTime: "4 min",
    image: {
      src: "/blog/van-whatsapp-naar-patientenportaal.webp",
      alt: "De overstap van losse berichten op privételefoons naar één patiëntenportaal in drie stappen: patiënt uitnodigen, herstelplan koppelen en checks die vanzelf lopen",
    },
    keywords: [
      "WhatsApp fysiotherapie",
      "patiëntenportaal fysiotherapie",
      "overstappen patiëntenportaal",
      "WhatsApp AVG zorg",
      "digitale communicatie fysiopraktijk",
    ],
    summary: [
      "WhatsApp is laagdrempelig, maar mist structuur: berichten staan op privételefoons, zijn niet gekoppeld aan het dossier en raken verspreid over behandelaars.",
      "Voor gezondheidsgegevens is WhatsApp lastig te verantwoorden onder de AVG, omdat de praktijk er weinig grip op heeft.",
      "Een patiëntenportaal behoudt het gemak voor de patiënt en geeft de praktijk één centraal overzicht.",
      "De overstap kun je klein beginnen: nodig eerst een groep patiënten uit en breid uit zodra het werkt.",
    ],
    intro: [
      "Veel fysiotherapiepraktijken zijn begonnen met WhatsApp als praktische manier om met patiënten te communiceren: laagdrempelig, iedereen heeft het al, en het kost niets om op te zetten. Voor een kleine praktijk met een handvol vaste patiënten werkt dat prima.",
      "Naarmate een praktijk groeit, met meer patiënten, meer behandelaars en soms meerdere locaties, begint diezelfde laagdrempeligheid tegen te werken. Wat begon als een snelle oplossing, wordt een systeem waarin informatie makkelijk verloren gaat. In dit artikel lees je waarom steeds meer praktijken overstappen naar een patiëntenportaal, en hoe je die overstap rustig aanpakt.",
    ],
    sections: [
      {
        heading: "Wat WhatsApp goed doet, en waar het misgaat",
        paragraphs: [
          "WhatsApp is direct, vertrouwd en drempelloos voor patiënten. Dat is ook precies het probleem: er is geen structuur. Berichten van verschillende patiënten, over verschillende onderwerpen, komen door elkaar binnen op persoonlijke telefoons van behandelaars.",
          "Zodra een praktijk groeit, ontstaan er vragen die WhatsApp niet beantwoordt. Wie heeft dit bericht al gezien? Staat deze informatie ook in het dossier? Wat gebeurt er als een behandelaar met vakantie is of de praktijk verlaat?",
        ],
      },
      {
        heading: "Mag je als fysiotherapeut WhatsApp gebruiken?",
        paragraphs: [
          "Het gebruik van WhatsApp is niet verboden, maar het is lastig om er aan de eisen van de AVG te voldoen. Gezondheidsgegevens zijn bijzondere persoonsgegevens, en als praktijk ben je verantwoordelijk voor hoe die worden verwerkt. Bij WhatsApp staan die gegevens op privételefoons, vaak met automatische reservekopieën buiten de praktijk, en er is geen verwerkersovereenkomst met de praktijk.",
          "Daarnaast is het lastig om berichten bij het dossier te bewaren of ze op verzoek van een patiënt te verwijderen. Praktijken die professionaliseren, kiezen daarom voor een systeem dat voor de zorg is gebouwd. Lees meer in [AVG en patiëntdata: de praktische gids voor je fysiopraktijk](/blog/avg-patientdata-fysiopraktijk).",
        ],
      },
      {
        heading: "De verborgen kosten van versnippering",
        paragraphs: [
          "Versnipperde communicatie kost meer dan tijd alleen. Belangrijke signalen, zoals een patiënt die aangeeft dat de pijn toeneemt, kunnen tussen andere berichten verdwijnen. Bij een personeelswissel gaat context verloren als die alleen op de telefoon van een vertrekkende behandelaar stond.",
          "En dan is er de tijd zelf. Elk bericht moet gelezen, beantwoord en eventueel vastgelegd worden, vaak tussen twee behandelingen door. Hoeveel tijd dat in jouw praktijk kost, lees je in [Stop met WhatsAppen: zo win je uren terug](/blog/tijd-besparen-patientcommunicatie-fysiopraktijk).",
        ],
      },
      {
        heading: "Wat de overstap in de praktijk oplevert",
        paragraphs: [
          "Praktijken die overstappen naar een patiëntenportaal, merken vooral verschil in overzicht. In plaats van berichten na te zoeken, staan communicatie en voortgang per patiënt op één centrale plek, toegankelijk voor het hele team.",
          "Dat overzicht is vooral waardevol op de momenten dat het ertoe doet: bij een personeelswissel, bij overdracht tussen behandelaars, of tijdens een drukke dag waarop je snel moet kunnen zien wie aandacht nodig heeft.",
        ],
        list: [
          "Alle informatie per patiënt op één plek, niet op privételefoons",
          "Signalering van patiënten die aandacht nodig hebben",
          "Overdracht tussen behandelaars en vestigingen zonder informatieverlies",
          "Een professionele uitstraling in de huisstijl van je eigen praktijk",
        ],
      },
      {
        heading: "Zo pak je de overstap aan in vier stappen",
        paragraphs: [
          "Een overstap hoeft geen groot project te zijn. Met deze vier stappen houd je het overzichtelijk voor je team en je patiënten.",
        ],
        list: [
          "Kies een startgroep, bijvoorbeeld alle nieuwe patiënten na een operatie, of de patiënten van één behandelaar.",
          "Maak een paar herstelplannen die je vaak gebruikt, zodat je ze bij elke nieuwe patiënt opnieuw kunt inzetten.",
          "Nodig de patiënten uit. In REVA vul je de blessure of operatie en de startdatum in, waarna de patiënt direct een uitnodiging per mail ontvangt.",
          "Spreek af dat updates over het herstel voortaan via het portaal lopen, en breid uit naar de rest van de praktijk zodra het werkt.",
        ],
      },
      {
        heading: "Hoe je patiënten meeneemt",
        paragraphs: [
          "Patiënten stappen makkelijk over als het nieuwe systeem minstens zo eenvoudig is als wat ze gewend zijn. Leg bij de start kort uit waarom je met een portaal werkt: hun herstel is zo voor de hele praktijk zichtbaar, en ze hebben hun oefeningen altijd bij de hand.",
          "Houd de dagelijkse check kort. In REVA kost de check-in patiënten ongeveer 30 seconden op hun telefoon. Hoe minder moeite het kost, hoe beter patiënten het volhouden.",
        ],
      },
      {
        heading: "Waar je op let bij de keuze",
        paragraphs: [
          "Niet elk systeem is gebouwd voor de dagelijkse realiteit van een fysiopraktijk. Let op of een portaal patiënten laagdrempelig toegang geeft zonder ingewikkelde installatie, of het overzicht geeft per patiënt én over je hele praktijk, en of het voldoet aan de eisen rond gezondheidsdata. Een uitgebreide checklist vind je in [Software voor fysiopraktijken](/blog/software-voor-fysiopraktijken).",
          "REVA is gebouwd vanuit die praktijkbehoefte: een patiëntenportaal dat het gemak van WhatsApp behoudt voor de patiënt, maar het overzicht en de structuur biedt die een groeiende praktijk nodig heeft. Op de pagina [alternatief voor WhatsApp](/alternatief-voor-whatsapp) zie je het verschil per onderwerp. Of [vraag een vrijblijvende demo aan](/demo-aanvragen) om te zien hoe dat werkt in jouw praktijk.",
        ],
      },
    ],
    faq: [
      {
        question: "Voldoet WhatsApp aan de AVG voor fysiotherapeuten?",
        answer: "WhatsApp is niet gebouwd voor gezondheidsgegevens. Berichten staan op privételefoons, er is geen verwerkersovereenkomst met de praktijk en het is lastig om berichten bij het dossier te bewaren of te verwijderen. Daardoor is het moeilijk om er aan de AVG te voldoen.",
      },
      {
        question: "Wat is het alternatief voor WhatsApp in een fysiopraktijk?",
        answer: "Een patiëntenportaal dat voor de zorg is gebouwd. Patiënten houden daarin zelf hun herstel bij en kunnen hun oefeningen en herstelplan inzien, terwijl de praktijk alles op één plek terugziet.",
      },
      {
        question: "Hoe lang duurt de overstap naar een patiëntenportaal?",
        answer: "Een aanvullend patiëntenportaal zoals REVA is meestal snel ingericht. Je voegt medewerkers en locaties toe, maakt een paar herstelplannen en nodigt daarna direct je eerste patiënten uit. Begin met een kleine groep en breid uit zodra het werkt.",
      },
      {
        question: "Willen oudere patiënten wel met een portaal werken?",
        answer: "Dat hangt vooral af van hoe eenvoudig het portaal is. REVA werkt in de browser en patiënten kunnen het als app op hun beginscherm zetten. De dagelijkse check-in kost ongeveer 30 seconden. Leg bij de start kort uit hoe het werkt, dan lukt het de meeste patiënten goed.",
      },
    ],
  },
  {
    slug: "wat-is-een-patientenportaal",
    title: "Wat is een patiëntenportaal en heeft je fysiopraktijk er een nodig?",
    metaDescription: "Wat is een patiëntenportaal in de fysiotherapie, wat is het verschil met een EPD, welke functies horen erin en voor welke praktijken heeft het meerwaarde?",
    excerpt: "De term valt steeds vaker, maar wat is een patiëntenportaal precies en wanneer heeft het meerwaarde voor jouw praktijk?",
    category: "Digitalisering",
    publishedAt: "2026-07-27",
    updatedAt: "2026-11-13",
    readTime: "5 min",
    image: {
      src: "/blog/wat-is-een-patientenportaal.webp",
      alt: "Een patiëntenportaal op de telefoon waarin de patiënt checks, oefeningen, medicatie en voortgang bijhoudt, met het overzicht dat de praktijk daarvan terugziet",
    },
    keywords: [
      "wat is een patiëntenportaal",
      "patiëntenportaal fysiotherapie",
      "patiëntenportaal fysiopraktijk",
      "verschil EPD patiëntenportaal",
      "patiëntenportaal kosten",
    ],
    summary: [
      "Een patiëntenportaal is een online omgeving waarin patiënten zelf hun herstel bijhouden, zoals pijn, oefeningen en voortgang, en waarin de praktijk die gegevens terugziet.",
      "Het verschil met een EPD: het EPD is het dossier van de behandelaar, het portaal is bedoeld voor de patiënt en de tijd tussen behandelingen.",
      "Een portaal lost versnippering op: informatie komt niet meer binnen via losse telefoontjes en berichten, maar op één vaste plek.",
      "Het heeft meerwaarde voor elke praktijk die patiënten begeleidt na een blessure of operatie, van zelfstandige fysiotherapeut tot keten.",
    ],
    intro: [
      "De term patiëntenportaal duikt steeds vaker op in gesprekken tussen fysiotherapiepraktijken, maar wat het precies inhoudt, is niet altijd duidelijk. Voor sommige praktijken klinkt het als iets voor grote, complexe organisaties. In werkelijkheid is het een hulpmiddel dat net zo goed waarde heeft voor een praktijk met twee behandelaars als voor een praktijk met twintig.",
      "In dit artikel lees je wat een patiëntenportaal is, hoe het verschilt van je EPD, welke functies erin horen en voor welke praktijken het meerwaarde heeft.",
    ],
    sections: [
      {
        heading: "Wat is een patiëntenportaal?",
        paragraphs: [
          "Een patiëntenportaal is een online omgeving waarin patiënten zelf gegevens over hun herstel bijhouden, zoals pijn, energie en oefeningen, en waar zij hun herstelplan en afspraken terugvinden. De praktijk krijgt aan de andere kant een overzicht van al die gegevens, per patiënt en over alle patiënten samen.",
          "Het verschil met mail of WhatsApp is structuur. Informatie komt niet als los bericht binnen, maar als onderdeel van een vast, herkenbaar overzicht dat voor iedere patiënt op dezelfde manier is opgebouwd.",
        ],
      },
      {
        heading: "Patiëntenportaal, EPD of app: wat is het verschil?",
        paragraphs: [
          "Een EPD is het elektronisch patiëntendossier van de fysiotherapeut. Daarin leg je vast wat er tijdens de behandeling gebeurt: anamnese, onderzoek, behandelplan en verslaglegging. Het EPD is gebouwd voor de behandelaar en het consult.",
          "Een patiëntenportaal is gebouwd voor de patiënt en de tijd tussen behandelingen. De patiënt houdt bij hoe het gaat, de praktijk kijkt mee. Een losse oefenapp richt zich meestal alleen op het delen van oefeningen, zonder zicht op pijn, voortgang en therapietrouw. Een portaal brengt die onderdelen samen, zoals het [oefenprogramma in REVA](/oefenprogramma-app). Lees in [Software voor fysiopraktijken](/blog/software-voor-fysiopraktijken) hoe deze systemen samen een geheel vormen.",
        ],
      },
      {
        heading: "Wat het oplost voor een praktijk",
        paragraphs: [
          "Het kernprobleem dat een patiëntenportaal oplost, is versnippering. Zonder centraal systeem verspreidt patiëntinformatie zich over telefoons, mailboxen en het geheugen van individuele behandelaars. Een portaal brengt dat samen op één plek, toegankelijk voor iedereen in de praktijk die daar toegang toe moet hebben.",
          "Daarnaast geeft het patiënten een eigen rol in hun herstel. In plaats van dat alle informatie via de behandelaar moet lopen, registreren patiënten zelf hoe het gaat. Dat bespaart tijd en geeft vaak een completer beeld dan een los gesprek tijdens de behandeling. Hoeveel tijd dat scheelt, lees je in [Stop met WhatsAppen](/blog/tijd-besparen-patientcommunicatie-fysiopraktijk).",
        ],
      },
      {
        heading: "Welke functies horen in een goed patiëntenportaal?",
        paragraphs: [
          "Niet elk portaal biedt hetzelfde. Voor een fysiopraktijk zijn dit de functies die het verschil maken.",
        ],
        list: [
          "Korte dagelijkse checks over pijn, energie en herstel",
          "Herstelplannen en oefeningen die de patiënt kan afvinken",
          "Pijn en medicatieregistratie met grafieken over het verloop",
          "Een praktijkoverzicht dat laat zien welke patiënten aandacht nodig hebben",
          "Een digitaal dossier dat elke behandelaar en vestiging kan inzien",
          "Behandeldoelen en mijlpalen, zodat patiënten hun voortgang zien",
          "Werkt op de telefoon van de patiënt, zonder ingewikkelde installatie",
        ],
      },
      {
        heading: "Voor welke praktijken het meerwaarde heeft",
        paragraphs: [
          "Een patiëntenportaal is niet alleen voor grote praktijken. Ook een zelfstandige fysiotherapeut profiteert van minder losse telefoontjes en een professionelere uitstraling naar patiënten. Bij praktijken met meerdere behandelaars of vestigingen wordt de meerwaarde nog groter, omdat overdracht en samenwerking anders al snel afhankelijk worden van losse aantekeningen.",
          "De grootste meerwaarde ontstaat bij praktijken die patiënten begeleiden na een operatie, blessure of langdurig hersteltraject. Juist daar is de tijd tussen behandelingen lang, en is zicht op therapietrouw belangrijk. Lees ook [De stille afhakers](/blog/therapietrouw-verhogen-patienten-herkennen).",
        ],
      },
      {
        heading: "Wat kost een patiëntenportaal?",
        paragraphs: [
          "Patiëntenportalen werken meestal met een abonnement per maand of per jaar, afhankelijk van de grootte van de praktijk.",
          `${priceSentence} Alle functies zijn inbegrepen. Bij jaarlijks betalen krijg je 2 maanden gratis, en je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Bereken je prijs op de [prijzenpagina](/prijzen).`,
        ],
      },
      {
        heading: "Hoe REVA hierin past",
        paragraphs: [
          "REVA is het patiëntenportaal waarin patiënten hun herstel bijhouden en praktijken in één overzicht zien wie aandacht nodig heeft. Het vervangt je EPD niet, maar vult het aan. REVA is opgezet om snel te implementeren, zonder ingewikkeld traject met IT, en werkt in de huisstijl van je eigen praktijk. Bekijk de [functies voor fysiotherapeuten](/functies/voor-fysios).",
        ],
        list: [
          "Eén centrale plek voor communicatie en voortgang per patiënt",
          "Overzicht voor je hele team, niet alleen de behandelend fysiotherapeut",
          "Patiënten houden zelf hun herstel bij, met minder tijdsdruk voor de praktijk",
          "Bruikbaar voor zowel kleine als groeiende praktijken",
        ],
      },
    ],
    faq: [
      {
        question: "Wat is een patiëntenportaal?",
        answer: "Een patiëntenportaal is een online omgeving waarin patiënten zelf hun herstel bijhouden, zoals pijn, energie en oefeningen, en waarin ze hun herstelplan terugvinden. De praktijk ziet al die gegevens in één overzicht terug.",
      },
      {
        question: "Wat is het verschil tussen een patiëntenportaal en een EPD?",
        answer: "Het EPD is het dossier van de fysiotherapeut en legt vast wat er tijdens de behandeling gebeurt. Een patiëntenportaal is bedoeld voor de patiënt en de tijd tussen behandelingen. De twee vullen elkaar aan.",
      },
      {
        question: "Is een patiëntenportaal ook geschikt voor een kleine praktijk?",
        answer: `Ja. Ook een zelfstandige fysiotherapeut profiteert van minder losse telefoontjes en meer overzicht. Je betaalt per behandelaar: als zelfstandige ${euro(PRICING.seatPrice)} per maand, inclusief btw.`,
      },
      {
        question: "Wat kost een patiëntenportaal voor fysiotherapie?",
        answer: `${priceSentence} Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen.`,
      },
      {
        question: "Werkt een patiëntenportaal op de telefoon?",
        answer: "Een goed portaal wel. REVA werkt in de browser, voor zowel je team als je patiënten, en patiënten kunnen het als app op hun beginscherm zetten. De dagelijkse check-in kost ongeveer 30 seconden.",
      },
    ],
  },
  {
    slug: "avg-patientdata-fysiopraktijk",
    title: "AVG en patiëntdata: de praktische gids voor je fysiopraktijk",
    metaDescription: "Fysiopraktijken verwerken gezondheidsgegevens en hebben extra plichten onder de AVG. Een praktische gids over grondslag, verwerkersovereenkomst en beveiliging.",
    excerpt: "Gezondheidsgegevens zijn bijzondere persoonsgegevens onder de AVG. Een overzicht van waar je op let als je patiëntcommunicatie digitaliseert.",
    category: "Privacy & AVG",
    publishedAt: "2026-07-31",
    updatedAt: "2026-11-05",
    readTime: "5 min",
    image: {
      src: "/blog/avg-patientdata-fysiopraktijk.webp",
      alt: "Een verwerkersovereenkomst tussen een fysiopraktijk en REVA naast versleutelde patiëntgegevens die alleen zichtbaar zijn voor bevoegde behandelaars",
    },
    keywords: [
      "AVG fysiotherapie",
      "AVG fysiopraktijk",
      "patiëntgegevens AVG",
      "verwerkersovereenkomst fysiotherapie",
      "privacy fysiotherapeut",
      "datalek fysiopraktijk",
    ],
    summary: [
      "Gezondheidsgegevens zijn bijzondere persoonsgegevens onder de AVG, met strengere regels dan gewone persoonsgegevens.",
      "Je praktijk is verwerkingsverantwoordelijke. Een softwareleverancier is verwerker, en daarvoor is een verwerkersovereenkomst verplicht.",
      "Voor de behandeling zelf is de behandelovereenkomst (WGBO) de basis. Patiënten moeten wel altijd weten wat er met hun gegevens gebeurt.",
      "Let op versleuteling, toegangsbeheer, bewaartermijnen en een vaste werkwijze bij datalekken.",
    ],
    intro: [
      "Fysiotherapiepraktijken werken dagelijks met gevoelige informatie: pijnklachten, medische geschiedenis en behandelverslagen. Onder de Algemene Verordening Gegevensbescherming (AVG) vallen dit soort gegevens onder de bijzondere persoonsgegevens, met strengere eisen dan gewone contactgegevens.",
      "Dit artikel geeft een praktisch overzicht van de belangrijkste aandachtspunten, vooral als je patiëntcommunicatie digitaliseert. Het is geen juridisch advies. Raadpleeg bij twijfel altijd een specialist op het gebied van privacyrecht, of kijk op de website van de Autoriteit Persoonsgegevens.",
    ],
    sections: [
      {
        heading: "Welke gegevens zijn bijzondere persoonsgegevens?",
        paragraphs: [
          "Gegevens over iemands gezondheid zijn volgens de AVG bijzondere persoonsgegevens. In een fysiopraktijk gaat het dan om veel meer dan het dossier alleen: ook een pijnscore, een foto van een zwelling, de naam van een medicijn of een bericht over hoe een patiënt zich voelt, valt eronder.",
          "Voor die gegevens geldt in principe een verwerkingsverbod, met uitzonderingen. Een van die uitzonderingen is de zorg zelf: als zorgverlener mag je gezondheidsgegevens verwerken voor zover dat nodig is voor de behandeling. Daar horen wel strenge eisen bij aan beveiliging en geheimhouding.",
        ],
      },
      {
        heading: "Wie is verantwoordelijk voor patiëntdata?",
        paragraphs: [
          "Als praktijk ben je in de regel de verwerkingsverantwoordelijke voor de gegevens van je patiënten: jij bepaalt waarom en hoe die gegevens worden verwerkt. Gebruik je software zoals een patiëntenportaal, dan treedt de leverancier meestal op als verwerker, die de gegevens namens jou verwerkt.",
          "Dat onderscheid is belangrijk, want het bepaalt wie welke verantwoordelijkheid draagt. Als verwerkingsverantwoordelijke blijf jij eindverantwoordelijk richting je patiënten, ook als een externe partij de technische verwerking uitvoert.",
        ],
      },
      {
        heading: "Grondslag: wanneer heb je toestemming nodig?",
        paragraphs: [
          "Voor gegevens die je verwerkt in het kader van de behandeling, is de behandelovereenkomst onder de WGBO de basis. Daarvoor hoef je in de regel geen aparte toestemming te vragen. Wil je gegevens gebruiken voor iets anders dan de behandeling, zoals onderzoek of marketing, dan is vaak wel uitdrukkelijke toestemming nodig.",
          "Los daarvan geldt altijd een informatieplicht. Patiënten moeten weten welke gegevens je verzamelt, waarom, met wie je ze deelt en hoe lang je ze bewaart. Een goed patiëntenportaal maakt dat voor de patiënt inzichtelijk, zodat het niet alleen een vinkje bij registratie is.",
        ],
      },
      {
        heading: "Waarom een verwerkersovereenkomst nodig is",
        paragraphs: [
          "Laat je patiëntdata verwerken door een softwareleverancier, dan schrijft de AVG een verwerkersovereenkomst voor. Daarin staat onder meer welke gegevens worden verwerkt, met welk doel, hoe lang ze worden bewaard en welke beveiligingsmaatregelen gelden.",
          "Controleer voordat je een patiëntenportaal of ander systeem in gebruik neemt of er een verwerkersovereenkomst beschikbaar is, en of die aansluit bij jouw praktijk. De verwerkersovereenkomst van REVA vind je op de pagina [verwerkersovereenkomst](/legal/dpa).",
        ],
      },
      {
        heading: "Beveiliging en bewaartermijnen",
        paragraphs: [
          "Gezondheidsgegevens moeten passend beveiligd worden. Denk aan versleuteling, beveiligde verbindingen, sterke wachtwoorden en toegang die beperkt is tot de mensen die de gegevens echt nodig hebben. NEN 7510 is de Nederlandse norm voor informatiebeveiliging in de zorg, en een goed uitgangspunt om leveranciers op te bevragen.",
          "Voor het medisch dossier geldt op grond van de WGBO in principe een bewaartermijn van twintig jaar. Voor andere gegevens geldt dat je ze niet langer bewaart dan nodig. Dat is een van de redenen waarom losse berichten via WhatsApp en spreadsheets in de praktijk lastig te verdedigen zijn: er is geen duidelijke bewaartermijn, geen centrale verwijdermogelijkheid en vaak geen zicht op wie toegang heeft. Lees ook [Van WhatsApp naar patiëntenportaal](/blog/van-whatsapp-naar-patientenportaal).",
        ],
      },
      {
        heading: "Datalekken: wat moet je doen?",
        paragraphs: [
          "Een datalek is elke inbreuk waarbij persoonsgegevens verloren gaan of bij de verkeerde persoon terechtkomen. Denk aan een gestolen telefoon met patiëntberichten, of een mail met een behandelverslag naar het verkeerde adres.",
          "Een datalek dat een risico vormt voor de betrokkenen, meld je binnen 72 uur bij de Autoriteit Persoonsgegevens. Bij een hoog risico informeer je ook de patiënten zelf. Houd daarnaast intern een overzicht bij van alle datalekken, ook als je ze niet hoeft te melden. Spreek met je softwareleverancier af hoe en hoe snel die jou informeert bij een incident.",
        ],
      },
      {
        heading: "Checklist voor je praktijk",
        paragraphs: [
          "Gebruik deze checklist om te controleren of de basis in jouw praktijk op orde is.",
        ],
        list: [
          "Je hebt een privacyverklaring die patiënten uitlegt wat je met hun gegevens doet.",
          "Je hebt met elke softwareleverancier die patiëntdata verwerkt een verwerkersovereenkomst.",
          "Patiëntinformatie staat niet op privételefoons of in losse spreadsheets.",
          "Toegang tot patiëntgegevens is beperkt tot de behandelaars die ze nodig hebben.",
          "Je weet welke bewaartermijnen gelden en hoe je gegevens verwijdert.",
          "Je team weet wat een datalek is en wat te doen als het gebeurt.",
          "Bij grootschalige verwerking van gezondheidsgegevens heb je beoordeeld of een DPIA nodig is.",
        ],
      },
      {
        heading: "Hoe REVA hierin ondersteunt",
        paragraphs: [
          "REVA is gebouwd met deze eisen als uitgangspunt. Gezondheidsdata wordt versleuteld opgeslagen en nooit gedeeld of verkocht aan derden. Jouw praktijk blijft verwerkingsverantwoordelijke en REVA werkt als verwerker op basis van een [verwerkersovereenkomst](/legal/dpa). Patiënten kunnen hun account en gegevens op elk moment laten verwijderen.",
          "Dat ontslaat je niet van je eigen verantwoordelijkheid als verwerkingsverantwoordelijke, maar het geeft wel een stevige basis om vanuit te werken. Heb je vragen over privacy in jouw situatie, [neem dan contact met ons op](/contact).",
        ],
      },
    ],
    faq: [
      {
        question: "Valt een fysiotherapeut onder de AVG?",
        answer: "Ja. Een fysiotherapeut verwerkt gezondheidsgegevens, en dat zijn bijzondere persoonsgegevens onder de AVG. De praktijk is verwerkingsverantwoordelijke en moet zorgen voor een passende beveiliging, een duidelijke informatievoorziening aan patiënten en verwerkersovereenkomsten met leveranciers.",
      },
      {
        question: "Heb ik toestemming van de patiënt nodig om gegevens te verwerken?",
        answer: "Voor gegevens die je nodig hebt voor de behandeling, is de behandelovereenkomst onder de WGBO in de regel de basis en is geen aparte toestemming nodig. Voor gebruik buiten de behandeling, zoals onderzoek of marketing, is vaak wel uitdrukkelijke toestemming nodig. Je moet patiënten altijd informeren over wat je met hun gegevens doet.",
      },
      {
        question: "Wat is een verwerkersovereenkomst?",
        answer: "Een verwerkersovereenkomst is een verplichte afspraak tussen je praktijk en een partij die namens jou persoonsgegevens verwerkt, zoals een softwareleverancier. Er staat in welke gegevens worden verwerkt, met welk doel, hoe lang ze worden bewaard en hoe ze worden beveiligd.",
      },
      {
        question: "Hoe lang moet een fysiotherapeut het dossier bewaren?",
        answer: "Op grond van de WGBO geldt voor het medisch dossier in principe een bewaartermijn van twintig jaar. Voor andere gegevens geldt dat je ze niet langer bewaart dan nodig.",
      },
      {
        question: "Wat moet ik doen bij een datalek?",
        answer: "Een datalek dat een risico vormt voor patiënten, meld je binnen 72 uur bij de Autoriteit Persoonsgegevens. Bij een hoog risico informeer je ook de betrokken patiënten. Leg elk datalek intern vast, ook als je het niet hoeft te melden.",
      },
    ],
  },
  {
    slug: "fysio-op-vakantie-continuiteit-van-zorg",
    title: "Fysio met vakantie: zo loopt de zorg voor je patiënten gewoon door",
    metaDescription: "Als een fysiotherapeut met vakantie is, gaat er bij de overdracht vaak informatie verloren. Zo borg je de continuïteit van zorg, ook over meerdere vestigingen.",
    excerpt: "Het is weer vakantieperiode. Fijn voor je collega's, maar wat gebeurt er met de behandeling van hun patiënten in die twee weken?",
    category: "Praktijkvoering",
    publishedAt: "2026-08-03",
    updatedAt: "2026-11-05",
    readTime: "5 min",
    image: {
      src: "/blog/fysio-op-vakantie-foto.webp",
      alt: "Twee collega's in een fysiotherapiepraktijk bekijken samen gegevens op een laptop",
    },
    keywords: [
      "continuïteit van zorg fysiotherapie",
      "overdracht fysiotherapeut",
      "waarneming fysiopraktijk",
      "fysiotherapeut vakantie",
      "meerdere vestigingen fysiopraktijk",
    ],
    summary: [
      "Bij vakantie, ziekte of drukte nemen collega's patiënten over, soms op een andere vestiging. Zonder centraal overzicht gaat daarbij informatie verloren.",
      "Het probleem is niet de waarnemer, maar dat die de context mist: het verloop van de pijn, welke oefeningen aansloegen en waar de patiënt in het schema zit.",
      "Als herstelplan, voortgang en laatste checks aan het dossier hangen in plaats van aan een locatie of persoon, kan elke collega direct verder.",
      "Een vaste overdrachtschecklist helpt om niets te vergeten.",
    ],
    intro: [
      "Het is weer die tijd van het jaar: collega's plannen twee weken vakantie in, en iedereen kijkt ernaar uit om even niks te hoeven. Ook fysiotherapeuten hebben gelukkig gewoon vakantie. Voor de praktijk betekent dat vaak schuiven: patiënten worden tijdelijk bij een collega ingepland, of soms zelfs op een andere locatie.",
      "Precies daar gaat het regelmatig mis. Niet omdat de waarnemende fysiotherapeut het niet goed doet, maar omdat die simpelweg niet dezelfde informatie tot zijn beschikking heeft als de vaste behandelaar. In dit artikel lees je hoe je de continuïteit van zorg borgt, ook als de vaste behandelaar er even niet is.",
    ],
    sections: [
      {
        heading: "Een herkenbare situatie",
        paragraphs: [
          "Neem een praktijk met meerdere vestigingen, iets wat steeds vaker voorkomt. Een patiënt wordt normaal behandeld op locatie A, waar ook het papieren herstelschema in een map ligt. De vaste fysiotherapeut gaat twee weken op vakantie, en de patiënt wordt voor die periode ingepland op locatie B, bij een collega die het overneemt.",
          "Alleen ligt dat schema dus op locatie A. De patiënt heeft het niet bij de hand, en de waarnemer ook niet. Er zijn geen notities overgedragen, dus die collega weet niet veel meer dan wat de patiënt zelf op dat moment kan vertellen. Twee weken behandeling die in het beste geval op gevoel worden ingevuld.",
        ],
      },
      {
        heading: "Waarom dit vaker gebeurt dan je denkt",
        paragraphs: [
          "Dit is geen uitzonderlijk scenario. Vakantie, ziekte, een drukke periode waarin patiënten over het team worden verdeeld: het gebeurt continu in een praktijk die groeit of meerdere locaties heeft. Zolang informatie vastzit aan een papieren dossier, een los systeem per locatie of het geheugen van één behandelaar, ontstaat bij iedere overdracht hetzelfde risico.",
          "Waarnemers kunnen hun werk prima doen. Het probleem is dat ze moeten werken zonder de context die de vaste behandelaar wel heeft: hoe de pijn zich de afgelopen weken ontwikkelde, welke oefeningen wel en niet aansloegen, en waar de patiënt precies in het schema zit.",
        ],
      },
      {
        heading: "Wat een waarnemer minimaal moet weten",
        paragraphs: [
          "Een goede overdracht hoeft niet uitgebreid te zijn, als de belangrijkste informatie maar direct beschikbaar is. Dit is wat een waarnemende collega minimaal nodig heeft.",
        ],
        list: [
          "De diagnose of operatie, en de datum waarop het herstel begon",
          "Het actuele herstelplan en de fase waarin de patiënt zit",
          "Het verloop van pijn en zwelling over de afgelopen weken",
          "Welke oefeningen goed gaan, en welke zijn aangepast of gestopt",
          "Afspraken over belasting, en signalen waarbij de patiënt contact moet opnemen",
          "De behandeldoelen en wanneer de vaste behandelaar terug is",
        ],
      },
      {
        heading: "Wat de patiënt intussen zelf kan doen",
        paragraphs: [
          "Een patiënt hoeft tijdens een overdracht niet stil te staan. Met een goed bijgehouden herstelplan kan iemand prima twee weken zelfstandig verder, ook zonder dat elke sessie exact wordt begeleid. Wat daarvoor nodig is, is dat het schema, de voortgang en de laatste checks ergens staan waar zowel de patiënt als iedere behandelaar bij kan, ongeacht op welke locatie die werkt.",
          "Het gaat er dus niet om dat de vaste fysiotherapeut er altijd bij moet zijn. Het gaat erom dat het herstel niet afhankelijk is van één persoon of één map op één locatie. Dat helpt ook de therapietrouw, want een patiënt die zijn ritme vasthoudt, haakt minder snel af. Lees daarover meer in [De stille afhakers](/blog/therapietrouw-verhogen-patienten-herkennen).",
        ],
      },
      {
        heading: "Extra aandachtspunten bij meerdere vestigingen",
        paragraphs: [
          "Bij praktijken met meerdere vestigingen speelt nog iets: elke locatie heeft vaak zijn eigen gewoontes, mappen en soms zelfs eigen systemen. Spreek daarom praktijkbreed af waar het herstelplan en de voortgang van een patiënt staan, en zorg dat iedere behandelaar daar vanaf elke vestiging bij kan.",
          "Leg ook vast wie verantwoordelijk is tijdens een waarneming, en hoe de vaste behandelaar na terugkomst ziet wat er in de tussentijd is gebeurd. Zo voorkom je dat dezelfde vragen twee keer worden gesteld, en dat een patiënt zijn verhaal opnieuw moet vertellen.",
        ],
      },
      {
        heading: "Hoe REVA dit voorkomt",
        paragraphs: [
          "In REVA staat het herstelplan van een patiënt niet vast aan een locatie of een behandelaar, maar aan het patiëntdossier zelf. Elke fysiotherapeut binnen de praktijk ziet, op elke vestiging, dezelfde actuele informatie: het schema, de laatste checks, pijnscores en voortgang tot nu toe.",
          "Neemt een collega tijdelijk een patiënt over, dan opent die het dossier in REVA en heeft binnen een minuut hetzelfde beeld als de vaste behandelaar. De patiënt merkt daar weinig van, behalve dat de begeleiding gewoon doorloopt. Bekijk de [functies voor fysiotherapeuten](/functies/voor-fysios) of [vraag een demo aan](/demo-aanvragen).",
        ],
        list: [
          "Eén herstelplan per patiënt, zichtbaar voor elke behandelaar en elke vestiging",
          "Geen papieren schema's die aan één locatie vastzitten",
          "Checks en voortgang lopen door, ook zonder de vaste fysiotherapeut",
          "Waarnemende collega's zijn binnen een minuut op de hoogte, in plaats van te gissen",
        ],
      },
    ],
    faq: [
      {
        question: "Wat is continuïteit van zorg in de fysiotherapie?",
        answer: "Continuïteit van zorg betekent dat de behandeling van een patiënt zonder onderbreking of informatieverlies doorloopt, ook als de vaste behandelaar er niet is. Daarvoor moeten herstelplan, voortgang en afspraken beschikbaar zijn voor iedere behandelaar die de patiënt overneemt.",
      },
      {
        question: "Hoe regel ik een goede overdracht als een fysiotherapeut met vakantie gaat?",
        answer: "Zorg dat de diagnose, het actuele herstelplan, het verloop van pijn en zwelling, de oefeningen en de behandeldoelen op één plek staan die iedere collega kan inzien. Spreek af wie verantwoordelijk is tijdens de waarneming en hoe de vaste behandelaar na terugkomst ziet wat er is gebeurd.",
      },
      {
        question: "Kan een patiënt zelfstandig verder als de fysiotherapeut afwezig is?",
        answer: "Vaak wel, als het herstelplan duidelijk is en de patiënt zijn oefeningen en voortgang bij de hand heeft. Met korte checks blijft de praktijk zien hoe het gaat, zodat een collega kan ingrijpen als dat nodig is.",
      },
      {
        question: "Werkt REVA ook voor praktijken met meerdere vestigingen?",
        answer: "Ja. Je kunt meerdere medewerkers en vestigingen inrichten binnen dezelfde organisatie. Het dossier en herstelplan van een patiënt zijn op elke vestiging zichtbaar, ook als een patiënt van behandelaar wisselt.",
      },
    ],
  },
  {
    slug: "software-voor-fysiopraktijken",
    title: "Software voor fysiopraktijken: welke systemen heb je echt nodig?",
    metaDescription: "Welke software heeft je fysiopraktijk nodig? EPD, agenda, declareren, oefenprogramma's en patiëntenportaal op een rij, met een checklist om goed te kiezen.",
    excerpt: "EPD, agenda, declareren, oefenprogramma's en een patiëntenportaal: welke software heeft een fysiopraktijk nodig, en waar let je op bij het kiezen?",
    category: "Digitalisering",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-13",
    readTime: "7 min",
    image: {
      src: "/blog/software-voor-fysiopraktijken.webp",
      alt: "Software voor fysiopraktijken: EPD, agenda, declareren en oefenprogramma's komen samen in het praktijkoverzicht van REVA, met een dagelijkse check van de patiënt op de telefoon",
    },
    keywords: [
      "software voor fysiopraktijken",
      "praktijksoftware fysiotherapie",
      "software fysiotherapiepraktijk",
      "EPD fysiotherapie",
      "patiëntenportaal fysiotherapie",
    ],
    summary: [
      "Een fysiopraktijk werkt meestal met vijf soorten software: een EPD voor dossier en verslaglegging, een agenda, software om te declareren, een tool voor oefenprogramma's en een patiëntenportaal.",
      "Het EPD is de basis. Het legt vast wat er tijdens een behandeling gebeurt, maar laat niet zien hoe het een patiënt tussen twee afspraken vergaat.",
      "Een patiëntenportaal zoals REVA vult dat gat: patiënten houden zelf pijn, oefeningen en voortgang bij, en de praktijk ziet in één overzicht wie aandacht nodig heeft.",
      "Let bij het kiezen op de AVG en een verwerkersovereenkomst, gebruiksgemak voor patiënten, samenwerking tussen behandelaars en een helder prijsmodel.",
    ],
    intro: [
      "Wie een fysiopraktijk runt, werkt al snel met meer software dan gedacht. Een systeem voor het dossier, een agenda, iets om te declareren, een app voor huiswerkoefeningen en vaak nog een losse telefoon met WhatsApp voor de vragen van patiënten. Elk systeem lost een eigen probleem op, maar samen vormen ze lang niet altijd een logisch geheel.",
      "In dit artikel zetten we op een rij welke software een fysiopraktijk nodig heeft, wat elk type software wel en niet doet, en waar je op let als je een nieuw systeem kiest. Zo kun je beter beoordelen wat er in jouw praktijk al goed geregeld is, en waar nog tijd en overzicht te winnen valt.",
    ],
    sections: [
      {
        heading: "Wat is software voor fysiopraktijken?",
        paragraphs: [
          "Software voor fysiopraktijken is de verzamelnaam voor alle digitale systemen waarmee een fysiotherapiepraktijk haar zorg, administratie en communicatie met patiënten organiseert. Denk aan het elektronisch patiëntendossier (EPD), de agenda, het declareren bij zorgverzekeraars, oefenprogramma's voor thuis en een patiëntenportaal.",
          "Er bestaat geen enkel pakket dat al deze taken even goed doet. De meeste praktijken combineren daarom een centraal EPD met een of meer aanvullende tools. De kunst is om die combinatie zo te kiezen dat informatie niet versnipperd raakt over systemen, telefoons en losse notities.",
        ],
      },
      {
        heading: "De vijf soorten software in een fysiopraktijk",
        paragraphs: [
          "Grofweg werkt een fysiopraktijk met vijf soorten software. Sommige pakketten combineren er meerdere, maar het helpt om ze los van elkaar te bekijken. Zo zie je sneller welke taak al goed geregeld is en welke niet.",
        ],
        list: [
          "EPD: het dossier van de patiënt, met anamnese, onderzoek, behandelplan en verslaglegging per behandeling.",
          "Agenda en online afspraken: het plannen van behandelingen, vaak met de mogelijkheid voor patiënten om zelf online een afspraak te maken.",
          "Declareren: het indienen van behandelingen bij zorgverzekeraars, meestal geïntegreerd in het EPD.",
          "Oefenprogramma's: het samenstellen en delen van huiswerkoefeningen, vaak met video's of afbeeldingen.",
          "Patiëntenportaal: een omgeving waarin patiënten tussen behandelingen door zelf hun herstel bijhouden en de praktijk die informatie terugziet.",
        ],
      },
      {
        heading: "Het EPD: de basis van je praktijk",
        paragraphs: [
          "Het EPD is voor bijna elke praktijk het hart van de software. Een fysiotherapeut is volgens de WGBO verplicht een dossier bij te houden, en de KNGF richtlijn voor verslaglegging beschrijft wat daarin hoort. Een goed EPD maakt dat zo eenvoudig mogelijk en regelt vaak ook de agenda en het declareren via VECOZO. Bekende voorbeelden in Nederland zijn onder meer Intramed en FysioManager.",
          "Het EPD is gebouwd rond het consult. Het legt goed vast wat er tijdens een behandeling gebeurt, wat je hebt onderzocht en welke afspraken je met de patiënt maakt. Wat het EPD niet laat zien, is hoe het de patiënt vergaat in de dagen en weken tussen twee afspraken. En juist daar gebeurt een groot deel van het herstel.",
        ],
      },
      {
        heading: "Waar de meeste praktijksoftware ophoudt: de tijd tussen behandelingen",
        paragraphs: [
          "Een patiënt ziet zijn fysiotherapeut misschien een of twee keer per week, een half uur per keer. De rest van de week oefent hij thuis, ervaart hij pijn of juist vooruitgang, en twijfelt hij soms of hij het goed doet. Die informatie komt nu vaak versnipperd binnen: via een telefoontje, een bericht op WhatsApp of pas bij de volgende afspraak.",
          "Dat kost tijd, en er gaat informatie verloren. Een oplopende pijnscore of een gemiste oefenweek valt pas op als de patiënt weer op de behandeltafel ligt, of helemaal niet. Lees ook hoe je [uren terugwint door minder te appen en te bellen](/blog/tijd-besparen-patientcommunicatie-fysiopraktijk) en hoe je [patiënten herkent voordat ze afhaken](/blog/therapietrouw-verhogen-patienten-herkennen).",
        ],
      },
      {
        heading: "Wat een patiëntenportaal toevoegt",
        paragraphs: [
          "Een [patiëntenportaal](/blog/wat-is-een-patientenportaal) is software die de tijd tussen behandelingen zichtbaar maakt. Patiënten vullen op vaste momenten een korte check in over pijn, energie en hoe het herstel voelt, vinken hun oefeningen af en zien hun eigen voortgang. De praktijk ziet al die gegevens samenkomen in één overzicht, inclusief signalering van patiënten die extra aandacht nodig hebben.",
          "Zo verschuift de communicatie van losse berichten naar gestructureerde informatie. In plaats van elk bericht apart te lezen, zie je in één oogopslag wie een hoge pijnscore doorgaf of al een paar dagen niets heeft ingevuld. Jij bepaalt zelf wie je actief benadert.",
        ],
        list: [
          "Een praktijkoverzicht met signalering van patiënten die aandacht nodig hebben",
          "Dagelijkse checks van patiënten over pijn, energie en herstel",
          "Herstelplannen en oefeningen die je tijdens het consult direct aanpast",
          "Pijn en medicatieregistratie met grafieken over het verloop",
          "Een professioneel portaal in de huisstijl van je eigen praktijk",
        ],
      },
      {
        heading: "Waar let je op bij het kiezen van software?",
        paragraphs: [
          "Software kiezen is een beslissing voor jaren. Overstappen kost tijd, en je team moet er dagelijks mee werken. Deze punten helpen je om pakketten eerlijk met elkaar te vergelijken.",
        ],
        list: [
          "Privacy en AVG: de software verwerkt gezondheidsgegevens. Vraag naar versleutelde opslag, waar de data staat en of er een verwerkersovereenkomst is. Vraag ook hoe de leverancier omgaat met NEN 7510, de Nederlandse norm voor informatiebeveiliging in de zorg.",
          "Gebruiksgemak voor de patiënt: software waar patiënten mee werken, moet op de telefoon in een minuut te gebruiken zijn. Anders haken ze af.",
          "Gebruiksgemak voor je team: hoe sneller collega's ermee overweg kunnen, hoe kleiner de kans dat oude gewoontes terugkomen.",
          "Samenwerken: werk je met meerdere behandelaars of vestigingen, dan moet iedereen dezelfde actuele informatie zien.",
          "Aansluiting op wat je al hebt: nieuwe software moet je bestaande systemen aanvullen, niet dubbel werk opleveren.",
          "Implementatie: vraag hoe lang het duurt voordat je eerste patiënten ermee werken, en of je begeleiding krijgt bij de start.",
          "Prijsmodel: kies voor een vaste prijs per maand of jaar waarin alles is inbegrepen, zonder verrassingen achteraf.",
        ],
      },
      {
        heading: "Wat kost software voor een fysiopraktijk?",
        paragraphs: [
          "De kosten verschillen sterk per type software en per leverancier. Een EPD wordt vaak afgerekend per behandelaar per maand, soms aangevuld met kosten voor modules of koppelingen. Aanvullende tools zoals oefenprogramma's en patiëntenportalen werken meestal met een abonnement per maand of per jaar.",
          `${priceSentence} Alle functies zijn inbegrepen. Bij jaarlijks betalen krijg je 2 maanden gratis, en je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Bereken je prijs op de [prijzenpagina](/prijzen).`,
        ],
      },
      {
        heading: "Zo kies en implementeer je nieuwe software in vier stappen",
        paragraphs: [
          "Een nieuw systeem slaagt of faalt meestal niet op de techniek, maar op de invoering. Met deze vier stappen houd je het overzichtelijk.",
        ],
        list: [
          "Breng in kaart waar nu de tijd naartoe gaat: telefoontjes, berichten, dubbele invoer of het zoeken naar informatie.",
          "Bepaal welke taak de nieuwe software moet oplossen, en welke taken je bestaande systemen al goed doen.",
          "Vraag een demo aan op basis van je eigen praktijksituatie, en betrek een of twee collega's bij de keuze.",
          "Start klein met een groep patiënten of één behandelaar, en breid uit zodra het werkt.",
        ],
      },
      {
        heading: "Waar REVA in jouw softwarepakket past",
        paragraphs: [
          "REVA is [software voor fysiopraktijken](/): een patiëntenportaal en Recovery Management Platform. Het vervangt je EPD, agenda of declaratiesoftware niet en koppelt er niet mee, maar werkt ernaast op het punt waar die systemen ophouden: de tijd tussen behandelingen, zonder dubbele invoer. Patiënten houden zelf hun herstel bij, en jij ziet in één overzicht wie aandacht nodig heeft, zonder extra telefoontjes.",
          "REVA werkt via de browser, voor zowel je team als je patiënten, en patiënten zetten het als app op hun beginscherm. De meeste praktijken zijn snel operationeel, zonder ingewikkeld traject met IT. Op de pagina [fysiotherapie software van REVA](/fysiotherapie-software) zie je per soort software wat REVA wel en niet doet, met prijzen. Of [vraag een vrijblijvende demo aan](/demo-aanvragen) om te zien hoe REVA past bij jouw praktijk.",
        ],
      },
    ],
    faq: [
      {
        question: "Welke software heeft een fysiotherapeut nodig?",
        answer: "De meeste fysiotherapeuten werken met een EPD voor dossiervorming en verslaglegging, een agenda, software om te declareren bij zorgverzekeraars en een tool voor oefenprogramma's. Steeds meer praktijken voegen daar een patiëntenportaal aan toe, zodat patiënten tussen behandelingen door zelf hun herstel bijhouden.",
      },
      {
        question: "Wat is het verschil tussen een EPD en een patiëntenportaal?",
        answer: "Een EPD is het dossier van de fysiotherapeut en legt vast wat er tijdens de behandeling gebeurt. Een patiëntenportaal is bedoeld voor de patiënt en de tijd tussen behandelingen: patiënten houden daarin zelf pijn, oefeningen en voortgang bij, en de praktijk ziet die informatie in één overzicht terug.",
      },
      {
        question: "Vervangt REVA mijn bestaande EPD of praktijksoftware?",
        answer: "Nee. REVA werkt naast je EPD, zonder koppeling, en vervangt je EPD, agenda of declaratiesysteem niet. Agenda en administratie blijven daar, dus er is geen dubbele invoer. REVA richt zich op het herstel van je patiënten tussen de behandelingen door.",
      },
      {
        question: "Wat kost software voor een fysiopraktijk?",
        answer: `Dat verschilt per type software en leverancier. Een EPD wordt vaak per behandelaar per maand afgerekend. ${priceSentence} Alle functies zijn inbegrepen.`,
      },
      {
        question: "Waar moet software voor fysiotherapie aan voldoen op het gebied van privacy?",
        answer: "Software die gezondheidsgegevens verwerkt, moet voldoen aan de AVG. De praktijk blijft verwerkingsverantwoordelijke, de leverancier is verwerker en sluit daarvoor een verwerkersovereenkomst af. Let daarnaast op versleutelde opslag en vraag hoe de leverancier omgaat met NEN 7510, de norm voor informatiebeveiliging in de zorg.",
      },
      {
        question: "Hoe snel kan ik met nieuwe software aan de slag?",
        answer: "Dat hangt af van het type software. Een overstap naar een ander EPD is een groter project, omdat dossiers en declaraties mee moeten. Een aanvullend patiëntenportaal zoals REVA is meestal snel ingericht: je voegt medewerkers en locaties toe, stelt herstelplannen samen en nodigt daarna direct je eerste patiënten uit.",
      },
    ],
  },
  {
    slug: "pijn-na-een-operatie",
    title: "Pijn na een operatie: wat is normaal per type ingreep?",
    metaDescription: "Pijn na een operatie verschilt per ingreep: bot, gewricht, pees, band, spier of kijkoperatie. Het normale verloop, de verschillen en de alarmsignalen.",
    excerpt: "Pijn na een botoperatie voelt anders dan na een peeshechting of kijkoperatie. Een overzicht van wat normaal is per type ingreep, en wanneer pijn een alarmsignaal is.",
    category: "Herstel & revalidatie",
    publishedAt: "2026-11-06",
    readTime: "8 min",
    image: {
      src: "/blog/pijn-na-een-operatie-foto.webp",
      alt: "Patiënt met een kniebrace loopt door de oefenzaal van een fysiotherapiepraktijk",
    },
    keywords: [
      "pijn na operatie",
      "pijn na knieoperatie",
      "hoe lang pijn na operatie",
      "pijn na botoperatie",
      "zenuwpijn na operatie",
      "chronische pijn na operatie",
      "pijn na kijkoperatie",
    ],
    summary: [
      "Pijn na een operatie is in de eerste dagen meestal het hevigst en neemt daarna geleidelijk af, met pijn bij belasten als normaal onderdeel van de revalidatie.",
      "Het soort weefsel bepaalt hoe de pijn voelt: bot geeft vaak een diepe, zeurende pijn, pezen en spieren reageren op aanspannen, en zenuwpijn voelt branderig of tintelend.",
      "Een totale knieprothese wordt door veel patiënten als pijnlijker ervaren dan een heupprothese. Een kijkoperatie geeft doorgaans minder en kortere pijn.",
      "Koorts, een rode en warme wond, een dikke pijnlijke kuit of benauwdheid zijn alarmsignalen waarbij direct contact met een arts nodig is.",
      "Pijn volgen op vaste momenten, met een score van 0 tot 10, zegt meer over het herstel dan één losse meting.",
    ],
    intro: [
      "Pijn na een operatie is normaal, maar wat normaal is, verschilt sterk per ingreep. Een patiënt met een plaat in de enkel ervaart iets anders dan iemand met een gehechte schouderpees of een kijkoperatie aan de knie. Dat maakt het voor patiënten lastig om in te schatten of hun pijn past bij het herstel, of juist een signaal is om aan de bel te trekken.",
      "Voor fysiotherapeuten is dat een vaste vraag in de begeleiding. In dit artikel zetten we op een rij hoe pijn na een operatie meestal verloopt, hoe de pijn verschilt per soort weefsel en ingreep, welke signalen aandacht vragen en hoe je pijn tijdens de revalidatie goed volgt. Het is algemene informatie: de behandelend arts en fysiotherapeut beoordelen altijd de individuele situatie.",
    ],
    sections: [
      {
        heading: "Waarom doet een operatie pijn?",
        paragraphs: [
          "Bij een operatie worden weefsels beschadigd: huid, spieren, botten, pezen of banden. Het lichaam reageert daarop met een ontstekingsreactie die nodig is voor het herstel. Die reactie maakt het weefsel gevoeliger, waardoor bewegen en belasten pijn doen. Dat is nuttig: de pijn beschermt het weefsel in de eerste fase.",
          "Daarnaast kunnen kleine zenuwen in de huid of rond het operatiegebied geraakt worden. Dat geeft een ander soort pijn, die vaak branderig, tintelend of schietend voelt. Ook factoren als slecht slapen, spanning en angst om te bewegen beïnvloeden hoe pijn wordt ervaren.",
        ],
      },
      {
        heading: "Het normale verloop van pijn na een operatie",
        paragraphs: [
          "In de eerste 24 tot 72 uur na de operatie is de pijn meestal het hevigst. Daarna neemt de rustpijn geleidelijk af, in de loop van dagen tot weken, afhankelijk van de ingreep. Wat langer blijft, is pijn bij belasten: bij het oefenen, lopen of tillen. Dat hoort bij de revalidatie, zolang de pijn na de inspanning weer zakt en het verloop over de weken gunstig is.",
          "Het herstel verloopt zelden in een rechte lijn. Een drukke dag, een nieuwe oefening of een slechte nacht kan de pijn tijdelijk verhogen. Daarom zegt het verloop over meerdere dagen meer dan één losse meting.",
          "Houdt pijn langer dan drie maanden aan na de operatie, dan spreken we van chronische postoperatieve pijn. Dat vraagt een andere aanpak en overleg met de behandelend arts.",
        ],
      },
      {
        heading: "Pijn per type weefsel en ingreep",
        paragraphs: [
          "Het soort weefsel dat geopereerd wordt, bepaalt voor een groot deel hoe de pijn voelt en hoe lang het herstel duurt. Onderstaande tabel geeft een algemeen beeld. Individuele verschillen zijn groot.",
        ],
        table: {
          caption: "Vergelijking van pijn na een operatie per type weefsel",
          headers: [
            "Weefsel",
            "Voorbeelden van ingrepen",
            "Hoe de pijn vaak voelt",
            "Waar je op let",
          ],
          rows: [
            [
              "Bot",
              "Fractuur met plaat of schroeven, osteotomie",
              "Diep en zeurend, toenemend bij belasten",
              "Belasting opbouwen volgens het advies van de specialist",
            ],
            [
              "Gewricht",
              "Totale knieprothese, totale heupprothese",
              "Combinatie van wondpijn, zwelling en stijfheid",
              "Mobiliteit en zwelling; de knie wordt vaak als pijnlijker ervaren dan de heup",
            ],
            [
              "Pees",
              "Hechting van de rotator cuff of achillespees",
              "Zeurend; bij de schouder vaak erger in de nacht",
              "De beschermingsfase respecteren, want pezen helen langzaam",
            ],
            [
              "Band",
              "Voorste kruisbandreconstructie, enkelbandreconstructie",
              "Mede afhankelijk van waar de nieuwe band vandaan komt",
              "Zwelling, het strekken van de knie en pijn bij de donorplaats",
            ],
            [
              "Spier",
              "Hechting van een afgescheurde spier of spierpees",
              "Krampachtig, vooral bij aanspannen en rekken",
              "Geleidelijke opbouw van kracht en rek",
            ],
            [
              "Kijkoperatie",
              "Meniscectomie, artroscopie van knie of schouder",
              "Meestal minder hevig en korter",
              "Zwelling kan de pijn in de eerste dagen verhogen",
            ],
            [
              "Zenuw",
              "Kleine huidzenuwen rond het litteken, bij elke ingreep",
              "Branderig, tintelend, schietend of juist doof",
              "Aanhoudende of toenemende klachten bespreken",
            ],
          ],
        },
      },
      {
        heading: "Pijn na een botoperatie",
        paragraphs: [
          "Na een operatie aan bot, zoals het vastzetten van een breuk met een plaat of schroeven of het rechtzetten van een bot, voelt de pijn vaak diep en zeurend. Belasten doet in het begin pijn, omdat het bot nog moet vergroeien. Bot herstelt in weken tot maanden, en de specialist bepaalt hoe snel de belasting omhoog mag.",
          "Een plaat of schroeven kunnen later nog gevoelig zijn, vooral op plekken waar weinig weefsel over het bot ligt, zoals de enkel. Dat is iets anders dan pijn door een slecht genezend bot, die juist toeneemt of niet verbetert bij belasten. Bij twijfel is overleg met de specialist nodig.",
        ],
      },
      {
        heading: "Pijn na een gewrichtsvervanging: knie en heup",
        paragraphs: [
          "Bij een totale knie of heupprothese komen wondpijn, zwelling en stijfheid samen. Veel patiënten ervaren een knieprothese als pijnlijker en zwaarder om van te herstellen dan een heupprothese. Bij de knie kost het terugwinnen van de beweeglijkheid, vooral buigen en strekken, vaak meer moeite, en dat gaat gepaard met pijn tijdens het oefenen.",
          "Juist bij een knieprothese is het belangrijk dat pijn het oefenen niet volledig stillegt, omdat de beweeglijkheid anders achterblijft. Goede afspraken over pijnstilling rond de oefenmomenten en een duidelijk beeld van het verloop helpen daarbij.",
        ],
      },
      {
        heading: "Pijn na een operatie aan pezen en banden",
        paragraphs: [
          "Pezen en banden hebben weinig doorbloeding en herstellen daardoor langzaam. Na het hechten van een pees, zoals de rotator cuff in de schouder of de achillespees, volgt meestal een periode waarin het weefsel beschermd moet worden. Bij een schouderoperatie melden veel patiënten dat de pijn in de nacht erger is, vooral bij liggen.",
          "Bij een voorste kruisbandreconstructie hangt een deel van de pijn samen met de plek waar de nieuwe band vandaan komt. Komt die uit de kniepees aan de voorkant, dan geeft knielen of druk aan de voorkant van de knie vaak langer klachten. Komt die uit de hamstrings, dan kan de achterkant van het bovenbeen gevoelig zijn bij aanspannen. Zwelling en het volledig strekken van de knie zijn in de eerste weken belangrijke aandachtspunten.",
        ],
      },
      {
        heading: "Pijn na een spieroperatie",
        paragraphs: [
          "Na het hechten van een afgescheurde spier of spierpees voelt de pijn vaak krampachtig. De pijn neemt toe bij aanspannen en bij rekken, omdat juist dan spanning op het herstellende weefsel komt. De opbouw van kracht en rek gebeurt daarom geleidelijk, binnen de grenzen die de chirurg aangeeft.",
        ],
      },
      {
        heading: "Pijn na een kijkoperatie",
        paragraphs: [
          "Een kijkoperatie, zoals het verwijderen van een deel van de meniscus, gebeurt via kleine sneetjes. De pijn is daardoor meestal minder hevig en korter dan na een open operatie. Toch kan het gewricht in de eerste dagen dik en gevoelig zijn door vocht in het gewricht.",
          "Omdat de eerste pijn snel afneemt, wordt de belasting soms te snel opgevoerd. Een gewricht dat na een drukke dag weer dikker en pijnlijker wordt, geeft aan dat de opbouw rustiger moet.",
        ],
      },
      {
        heading: "Zenuwpijn en een doof gevoel rond het litteken",
        paragraphs: [
          "Bij vrijwel elke operatie worden kleine huidzenuwen geraakt. Dat geeft rond het litteken vaak een doof gevoel, tintelingen of een branderige pijn. Na een knieoperatie is een doof plekje aan de buitenkant van de knie bijvoorbeeld veelvoorkomend. Dit verbetert vaak in de loop van maanden, maar kan ook blijvend zijn.",
          "Zenuwpijn reageert anders dan pijn uit gewricht of spier: hij kan ook in rust optreden en voelt vaak elektrisch of branderig. Neemt zenuwpijn toe, of ontstaat er nieuwe krachtsvermindering of gevoelsverlies, dan is overleg met de behandelend arts nodig.",
        ],
      },
      {
        heading: "Wanneer is pijn een alarmsignaal?",
        paragraphs: [
          "De meeste pijn na een operatie hoort bij het herstel. Sommige signalen vragen echter direct actie. Bij de volgende klachten neemt de patiënt contact op met de huisarts of de behandelend specialist, en bij benauwdheid of pijn op de borst direct met 112.",
        ],
        list: [
          "Koorts, of een wond die rood, warm en dik wordt of vocht afscheidt",
          "Pijn die na een periode van verbetering juist weer duidelijk toeneemt",
          "Een dikke, warme en pijnlijke kuit (mogelijk een trombosebeen)",
          "Benauwdheid of pijn op de borst: bel direct 112",
          "Hevige pijn die niet past bij de ingreep, met een strakke zwelling of een koud, bleek of gevoelloos been of arm",
          "Nieuwe krachtsvermindering of gevoelsverlies",
        ],
      },
      {
        heading: "Pijn meten en volgen tijdens de revalidatie",
        paragraphs: [
          "Een pijnscore van 0 tot 10 is de eenvoudigste manier om pijn te volgen. Meet op vaste momenten, bijvoorbeeld elke dag op hetzelfde tijdstip, en noteer apart hoe de pijn is tijdens en na het oefenen. Zo ontstaat een verloop waarin je ziet of de pijn over de weken afneemt, en hoe de patiënt reageert op een zwaardere belasting.",
          "Spreek met de patiënt af welke pijn tijdens het oefenen acceptabel is en wanneer het signaal is om te minderen. Patiënten die weten wat ze kunnen verwachten, zijn minder angstig om te bewegen en houden hun oefeningen beter vol. Lees ook hoe je [patiënten herkent voordat ze afhaken](/blog/therapietrouw-verhogen-patienten-herkennen).",
        ],
      },
      {
        heading: "Hoe REVA helpt om pijn na een operatie te volgen",
        paragraphs: [
          "In REVA vult de patiënt dagelijks een korte check in met een pijnscore van 0 tot 10, aangevuld met zwelling, mobiliteit, energie en slaap. De fysiotherapeut ziet het verloop terug in het dossier, en op het dashboard markeert REVA patiënten met een pijnscore van 7 of hoger of met gemelde zwelling. Ook het medicatiegebruik, zoals het afbouwen van pijnstilling, is zichtbaar.",
          "Zo bespreek je pijn niet op basis van een herinnering, maar op basis van het verloop van de afgelopen weken. Bekijk hoe de [dagelijkse check](/functies#check-in) en de [signalering](/functies#signalering) werken.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe lang heb je pijn na een operatie?",
        answer: "Dat verschilt per ingreep. De pijn is meestal het hevigst in de eerste 24 tot 72 uur en neemt daarna geleidelijk af over dagen tot weken. Pijn bij belasten kan tijdens de revalidatie langer aanwezig zijn. Pijn die langer dan drie maanden aanhoudt, heet chronische postoperatieve pijn.",
      },
      {
        question: "Welke operatie is het meest pijnlijk?",
        answer: "Dat verschilt per persoon, maar operaties aan bot en gewrichten en het hechten van pezen geven vaak meer en langer pijn dan een kijkoperatie. Een totale knieprothese wordt door veel patiënten als pijnlijker ervaren dan een heupprothese.",
      },
      {
        question: "Is pijn bij het oefenen na een operatie normaal?",
        answer: "Ja, pijn bij belasten hoort vaak bij de revalidatie, zolang de pijn na het oefenen weer zakt en het verloop over de weken gunstig is. Spreek met de fysiotherapeut af welke pijn acceptabel is en wanneer het signaal is om te minderen.",
      },
      {
        question: "Waarom is de huid rond mijn litteken doof of branderig?",
        answer: "Bij een operatie worden vaak kleine huidzenuwen geraakt. Dat geeft rond het litteken een doof gevoel, tintelingen of een branderige pijn. Dit verbetert vaak in de loop van maanden. Neemt het toe of ontstaat er nieuwe krachtsvermindering, overleg dan met de arts.",
      },
      {
        question: "Wanneer moet je na een operatie contact opnemen met een arts?",
        answer: "Bij koorts, een rode, warme of lekkende wond, pijn die na verbetering weer duidelijk toeneemt, een dikke pijnlijke kuit, nieuwe krachtsvermindering of gevoelsverlies. Bij benauwdheid of pijn op de borst bel je direct 112.",
      },
      {
        question: "Hoe meet je pijn na een operatie?",
        answer: "Met een pijnscore van 0 tot 10, op vaste momenten en apart tijdens en na het oefenen. Het verloop over meerdere dagen en weken zegt meer over het herstel dan één losse meting.",
      },
    ],
  },
  {
    slug: "eigen-fysiotherapiepraktijk-starten",
    title: "Eigen fysiotherapiepraktijk starten: stappen, eisen en kosten",
    metaDescription: "Een eigen fysiotherapiepraktijk starten? De stappen op een rij: BIG en AGB, kwaliteitsregister, zorgverzekeraars, wettelijke eisen, kosten en financiering.",
    excerpt: "Van ondernemingsplan tot eerste patiënt: welke registraties je nodig hebt, aan welke wetten je praktijk moet voldoen, wat het kost en hoe je contracten met zorgverzekeraars regelt.",
    category: "Praktijkvoering",
    publishedAt: "2026-11-08",
    updatedAt: "2026-11-13",
    readTime: "12 min",
    image: {
      src: "/blog/eigen-fysiotherapiepraktijk-starten.webp",
      alt: "Lichte behandelruimte van een fysiotherapiepraktijk met behandelbank, wandrek en oefenmaterialen",
    },
    keywords: [
      "eigen fysiotherapiepraktijk starten",
      "fysiotherapiepraktijk beginnen",
      "zelfstandig fysiotherapeut worden",
      "kosten fysiotherapiepraktijk starten",
      "AGB-code fysiotherapeut",
      "contract zorgverzekeraar fysiotherapie",
      "fysiotherapiepraktijk overnemen",
    ],
    summary: [
      "Een eigen fysiotherapiepraktijk start je in drie routes: als zelfstandige binnen een bestaande praktijk, door een praktijk over te nemen of door helemaal nieuw te beginnen.",
      "Je hebt een BIG-registratie nodig, een persoonlijke AGB-code en een AGB-code voor je praktijk via Vektis, een inschrijving bij de KvK en een registratie in een kwaliteitsregister zoals KRF NL of Keurmerk Fysiotherapie.",
      "Wettelijk moet je praktijk onder meer voldoen aan de Wkkgz (klachtenregeling, klachtenfunctionaris en aansluiting bij een geschilleninstantie), de WGBO, de AVG en de meldcode huiselijk geweld en kindermishandeling.",
      "Om behandelingen vergoed te krijgen sluit je contracten met zorgverzekeraars en declareer je via VECOZO. Zonder contract krijgt je patiënt vaak maar een deel van het tarief vergoed.",
      "De kosten verschillen sterk per situatie. Reken op eenmalige kosten voor inrichting en apparatuur, en op vaste lasten zoals huur, software, verzekeringen, registraties en pensioen.",
    ],
    intro: [
      "Veel fysiotherapeuten spelen na een paar jaar werken met de gedachte om voor zichzelf te beginnen. Meer vrijheid in hoe je behandelt, een eigen visie op zorg en een praktijk die je zelf opbouwt. Tegelijk komt er veel bij kijken dat je in je opleiding niet leert: registraties, contracten met zorgverzekeraars, wetgeving, financiering en ondernemerschap.",
      "In dit artikel zetten we alle stappen op een rij, van het eerste plan tot je eerste patiënt. Regels en eisen veranderen geregeld, en zorgverzekeraars stellen elk hun eigen voorwaarden. Gebruik dit artikel daarom als overzicht, en controleer de actuele eisen bij de betreffende instanties en bij een adviseur die de zorg kent.",
    ],
    sections: [
      {
        heading: "Drie manieren om voor jezelf te beginnen",
        paragraphs: [
          "Voor je de stappen doorloopt, is het goed om te bepalen welke route bij je past. Elke route vraagt een andere investering en geeft een ander risico.",
        ],
        table: {
          caption: "De drie routes naar een eigen praktijk vergeleken",
          headers: ["Route", "Wat het inhoudt", "Voordelen", "Aandachtspunten"],
          rows: [
            ["Zelfstandige in een bestaande praktijk", "Je werkt als zzp'er en huurt ruimte of werkt op basis van een afdrachtregeling", "Lage investering, patiëntenstroom en contracten vaak al aanwezig", "Minder eigen zeggenschap, afspraken over afdracht en waarneming"],
            ["Een praktijk overnemen", "Je koopt een bestaande praktijk, vaak inclusief patiëntenbestand, inventaris en goodwill", "Direct omzet, bestaande naam en verwijzers", "Hoge overnamesom, waardering van goodwill, bestaande afspraken en personeel"],
            ["Helemaal nieuw starten", "Je bouwt een praktijk op vanaf nul, op een eigen locatie", "Volledige vrijheid in visie, locatie en specialisatie", "Hoogste risico, patiënten werven kost tijd, contracten zelf regelen"],
          ],
        },
      },
      {
        heading: "Stap 1: schrijf een ondernemingsplan",
        paragraphs: [
          "Een ondernemingsplan dwingt je om na te denken over de haalbaarheid van je praktijk. Daarnaast vraagt een bank of andere financier er vrijwel altijd om. Houd het concreet en reken met voorzichtige aannames.",
        ],
        list: [
          "Visie en specialisatie: wat voor praktijk wil je zijn, en voor welke patiënten?",
          "Markt en locatie: hoeveel praktijken zitten er al in de buurt, en wie zijn je verwijzers, zoals huisartsen, specialisten en sportclubs?",
          "Omzetprognose: hoeveel behandelingen per week verwacht je in het eerste jaar, en tegen welk tarief?",
          "Kosten: eenmalige investeringen en maandelijkse vaste lasten.",
          "Financiering: hoeveel eigen geld breng je in, en hoeveel moet je lenen?",
        ],
      },
      {
        heading: "Stap 2: registraties en certificeringen",
        paragraphs: [
          "Als fysiotherapeut heb je een aantal registraties nodig voordat je zelfstandig mag werken en kunt declareren. Een deel heb je als werknemer waarschijnlijk al, een deel is nieuw.",
        ],
        table: {
          caption: "Registraties voor een zelfstandig fysiotherapeut",
          headers: ["Registratie", "Waarvoor", "Waar"],
          rows: [
            ["BIG-registratie", "De titel fysiotherapeut is wettelijk beschermd. Elke vijf jaar volgt herregistratie op basis van werkervaring of scholing", "BIG-register (bigregister.nl)"],
            ["AGB-code zorgverlener", "Je persoonlijke code om zorg te kunnen declareren en contracten te sluiten", "Vektis"],
            ["AGB-code praktijk", "Een aparte code voor je onderneming", "Vektis"],
            ["Inschrijving KvK", "Verplicht voor elke onderneming", "Kamer van Koophandel"],
            ["Landelijk Register Zorgaanbieders", "Registratie van zorgaanbieders", "LRZa, gekoppeld aan je KvK-inschrijving"],
            ["Kwaliteitsregister", "Zorgverzekeraars stellen registratie meestal als voorwaarde voor een contract", "KRF NL of Stichting Keurmerk Fysiotherapie"],
            ["Pensioenfonds", "Zelfstandig fysiotherapeuten vallen onder het beroepspensioen. Meld je tijdig aan", "Pensioenfonds Fysiotherapeuten"],
          ],
        },
      },
      {
        heading: "Stap 3: kies een rechtsvorm",
        paragraphs: [
          "De meeste startende fysiotherapeuten beginnen als eenmanszaak. Dat is eenvoudig op te zetten en je profiteert van ondernemersaftrekken. Begin je met een collega, dan kies je vaak voor een vof of maatschap. Een bv is vooral interessant bij hogere winsten of als je je privévermogen wilt afschermen.",
          "Fysiotherapie door een BIG-geregistreerde fysiotherapeut is in de regel vrijgesteld van btw. Dat geldt niet automatisch voor alles wat je aanbiedt, zoals losse sportlessen of producten. Bespreek met je boekhouder welke diensten wel en niet onder de vrijstelling vallen.",
        ],
      },
      {
        heading: "Stap 4: zoek een geschikte praktijkruimte",
        paragraphs: [
          "De locatie bepaalt voor een groot deel hoe snel je praktijk groeit. Denk aan bereikbaarheid, parkeren, zichtbaarheid en de nabijheid van verwijzers. Veel starters huren eerst een ruimte in een gezondheidscentrum of sportschool, wat de drempel en de kosten verlaagt.",
          "Controleer bij de gemeente of de ruimte gebruikt mag worden voor een praktijk, zeker als je aan huis begint. Let daarnaast op privacy (gesprekken mogen niet te volgen zijn in de wachtruimte), hygiëne, toegankelijkheid en voldoende ruimte om te oefenen.",
        ],
      },
      {
        heading: "Stap 5: regel je verzekeringen",
        paragraphs: [
          "Als zelfstandige ben je zelf verantwoordelijk voor je verzekeringen. Een aantal is onmisbaar, andere zijn sterk aan te raden.",
        ],
        list: [
          "Beroepsaansprakelijkheidsverzekering (BAV): dekt schade door fouten in je behandeling. Zorgverzekeraars vragen hier vaak naar.",
          "Bedrijfsaansprakelijkheidsverzekering (AVB): dekt schade aan personen of spullen die niet uit de behandeling zelf voortkomt.",
          "Arbeidsongeschiktheidsverzekering (AOV): als je niet kunt werken, heb je geen inkomen. Voor een fysiotherapeut met een fysiek beroep is dit een belangrijke afweging.",
          "Inventaris- en rechtsbijstandsverzekering: voor je apparatuur en bij juridische geschillen.",
        ],
      },
      {
        heading: "Stap 6: sluit contracten met zorgverzekeraars",
        paragraphs: [
          "De meeste patiënten krijgen fysiotherapie vergoed via hun aanvullende verzekering of, bij bepaalde aandoeningen, via de basisverzekering. Om rechtstreeks te kunnen declareren tegen het afgesproken tarief, sluit je een contract met elke zorgverzekeraar afzonderlijk. Dat doe je via hun zorginkoopportaal.",
          "Elke verzekeraar stelt eigen voorwaarden, bijvoorbeeld registratie in een kwaliteitsregister, eisen aan je praktijk en aan de verslaglegging. Contracten lopen meestal per kalenderjaar, dus vraag ze tijdig aan.",
          "Zonder contract kun je wel behandelen, maar dan is het ongecontracteerde zorg. De patiënt krijgt dan vaak maar een deel van het tarief vergoed, en het verschil betaalt hij of zij zelf. Dat maakt het lastiger om patiënten te trekken.",
        ],
      },
      {
        heading: "Stap 7: kies je software",
        paragraphs: [
          "Software bepaalt hoeveel tijd je kwijt bent aan administratie. Kies systemen die op elkaar aansluiten en die voldoen aan de eisen voor gezondheidsgegevens.",
        ],
        list: [
          "EPD: het dossier van de patiënt, met anamnese, onderzoek, behandelplan en verslaglegging. Vaak met agenda en declaratiemodule.",
          "Declareren via VECOZO: zorgverzekeraars ontvangen declaraties via VECOZO. Je hebt een VECOZO-registratie en een toestemmingsverklaring nodig, en een EPD dat daarmee kan werken.",
          "Online afspraken: laat patiënten zelf een afspraak maken. Dat scheelt telefoontjes.",
          "Oefenprogramma's: om huiswerkoefeningen mee te geven.",
          "Patiëntenportaal: om patiënten tussen de behandelingen door te volgen, en te zien wie aandacht nodig heeft. Lees meer in [Software voor fysiopraktijken](/blog/software-voor-fysiopraktijken).",
        ],
      },
      {
        heading: "Stap 8: voldoe aan de wettelijke verplichtingen",
        paragraphs: [
          "Als zorgaanbieder heb je te maken met een aantal wetten. Die gelden ook voor een praktijk met één fysiotherapeut.",
        ],
        list: [
          "Wkkgz: je hebt een klachtenregeling, biedt patiënten een onafhankelijke klachtenfunctionaris en bent aangesloten bij een erkende geschilleninstantie, zoals de Geschillencommissie Fysiotherapie.",
          "WGBO: je legt een dossier aan per patiënt en bewaart het in de regel 20 jaar. Je informeert de patiënt en vraagt toestemming voor de behandeling.",
          "AVG: gezondheidsgegevens zijn bijzondere persoonsgegevens. Sluit verwerkersovereenkomsten met je softwareleveranciers, beveilig je systemen en communiceer niet via onbeveiligde kanalen. Lees meer in [AVG en patiëntdata in je fysiopraktijk](/blog/avg-patientdata-fysiopraktijk).",
          "Meldcode huiselijk geweld en kindermishandeling: als zorgverlener ben je verplicht een meldcode te hebben en te gebruiken.",
        ],
      },
      {
        heading: "Wat kost het om een fysiotherapiepraktijk te starten?",
        paragraphs: [
          "Er is geen vast bedrag te noemen. Een zzp'er die ruimte huurt in een bestaande praktijk start met een paar duizend euro, terwijl een volledig nieuwe praktijk met eigen ruimte en oefenzaal een veelvoud daarvan vraagt. Een overname is meestal de duurste route, vanwege de overnamesom en goodwill.",
          "Zet de kosten in je ondernemingsplan op een rij en vraag offertes op. De bedragen hieronder zijn indicaties van leveranciers en adviseurs, geen vaste prijzen.",
        ],
        table: {
          caption: "Kostenposten bij het starten van een fysiotherapiepraktijk",
          headers: ["Kostenpost", "Soort", "Indicatie"],
          rows: [
            ["Inrichting en apparatuur (behandelbank, oefenmateriaal, meubilair)", "Eenmalig", "Sterk afhankelijk van de omvang. Leasen spreidt de kosten"],
            ["Verbouwing of aanpassing van de ruimte", "Eenmalig", "Alleen bij een eigen ruimte, vraag offertes op"],
            ["Huur praktijkruimte", "Maandelijks", "Afhankelijk van locatie en oppervlakte"],
            ["EPD met declaratiemodule", "Maandelijks", "Voor een solopraktijk vaak 40 tot 80 euro per maand"],
            ["Beroeps- en bedrijfsaansprakelijkheid", "Maandelijks of jaarlijks", "Voor veel zzp'ers grofweg 15 tot 60 euro per maand samen"],
            ["Arbeidsongeschiktheidsverzekering", "Maandelijks", "Sterk afhankelijk van leeftijd, dekking en wachttijd"],
            ["Kwaliteitsregister, beroepsvereniging en pensioen", "Jaarlijks of maandelijks", "Contributie en premie volgens de actuele tarieven"],
            ["Website, vindbaarheid en promotie", "Eenmalig en doorlopend", "Van een eenvoudige eigen site tot uitbesteed werk"],
          ],
        },
      },
      {
        heading: "Financiering: hoe betaal je de start?",
        paragraphs: [
          "De meeste starters combineren eigen geld met een lening. Banken vragen een ondernemingsplan en vaak een eigen inbreng. Voor kleinere bedragen of als een bank afhaakt, is Qredits een bekende financier van starters. Apparatuur zoals behandelbanken kun je ook leasen, zodat je minder in één keer hoeft te investeren.",
          "Reken in je begroting ook met de aanloopperiode. In de eerste maanden heb je minder patiënten, terwijl de vaste lasten wel doorlopen. Een buffer voor die periode voorkomt dat je in de knel komt.",
        ],
      },
      {
        heading: "Je eerste patiënten: zo word je gevonden",
        paragraphs: [
          "Een praktijk groeit vooral via verwijzers en via mond-tot-mondreclame. Investeer daarom vanaf het begin in relaties en in je online vindbaarheid.",
        ],
        list: [
          "Stel je voor bij huisartsen, praktijkondersteuners en specialisten in de buurt.",
          "Werk samen met sportclubs, sportscholen en andere zorgverleners.",
          "Maak een Google Bedrijfsprofiel aan, zodat je gevonden wordt in Google Maps.",
          "Zorg voor een heldere website met je specialisaties, je vergoedingen en een manier om direct een afspraak te maken.",
          "Vraag tevreden patiënten om een beoordeling, bijvoorbeeld op Google of ZorgkaartNederland.",
        ],
      },
      {
        heading: "Checklist voor het starten van je praktijk",
        paragraphs: [
          "Gebruik deze lijst om bij te houden waar je staat.",
        ],
        list: [
          "Route gekozen: zelfstandige in een bestaande praktijk, overname of nieuwe start",
          "Ondernemingsplan en begroting geschreven",
          "BIG-registratie actueel",
          "AGB-code voor jezelf en voor de praktijk aangevraagd bij Vektis",
          "Ingeschreven bij de KvK en rechtsvorm gekozen",
          "Geregistreerd in een kwaliteitsregister",
          "Aangemeld bij het pensioenfonds",
          "Praktijkruimte geregeld en gecontroleerd bij de gemeente",
          "Verzekeringen afgesloten",
          "Contracten met zorgverzekeraars aangevraagd",
          "EPD gekozen en VECOZO ingericht",
          "Klachtenregeling, klachtenfunctionaris en geschilleninstantie geregeld",
          "Privacybeleid, verwerkersovereenkomsten en meldcode op orde",
          "Website, Google Bedrijfsprofiel en contact met verwijzers",
        ],
      },
      {
        heading: "Hoe REVA een startende praktijk ondersteunt",
        paragraphs: [
          "Als startende praktijk wil je je tijd besteden aan behandelen, niet aan nabellen en losse appjes. REVA is een patiëntenportaal dat naast je EPD werkt. Patiënten houden zelf hun herstel bij met een korte check-in, en jij ziet in één overzicht wie aandacht nodig heeft. Het portaal draait in de huisstijl van je eigen praktijk, wat een nieuwe praktijk direct een professionele uitstraling geeft.",
          `REVA kost ${euro(PRICING.seatPrice)} per behandelaar per maand, inclusief btw, en je probeert het ${TRIAL_DAYS} dagen gratis. Bekijk de [prijzen](/prijzen) of [vraag een demo aan](/demo-aanvragen).`,
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost het om een fysiotherapiepraktijk te starten?",
        answer: "Dat hangt sterk af van de route. Als zelfstandige in een bestaande praktijk start je met een paar duizend euro. Een nieuwe praktijk met eigen ruimte en apparatuur, of een overname, vraagt een veelvoud daarvan. Daarnaast heb je maandelijkse kosten voor onder meer huur, software, verzekeringen, registraties en pensioen.",
      },
      {
        question: "Welke registraties heb ik nodig als zelfstandig fysiotherapeut?",
        answer: "Een BIG-registratie, een persoonlijke AGB-code en een AGB-code voor je praktijk via Vektis, een inschrijving bij de KvK, registratie in het Landelijk Register Zorgaanbieders en meestal een registratie in een kwaliteitsregister zoals KRF NL of Keurmerk Fysiotherapie. Zelfstandig fysiotherapeuten melden zich daarnaast aan bij het Pensioenfonds Fysiotherapeuten.",
      },
      {
        question: "Kan ik een praktijk starten zonder contract met zorgverzekeraars?",
        answer: "Ja, maar dan geef je ongecontracteerde zorg. Je patiënten krijgen dan vaak maar een deel van het tarief vergoed en betalen het verschil zelf. De meeste praktijken sluiten daarom contracten met de grote zorgverzekeraars.",
      },
      {
        question: "Moet ik btw rekenen als fysiotherapeut?",
        answer: "Fysiotherapie door een BIG-geregistreerde fysiotherapeut is in de regel vrijgesteld van btw. Andere diensten of producten, zoals losse sportlessen of de verkoop van hulpmiddelen, kunnen wel onder de btw vallen. Laat dit nagaan door je boekhouder.",
      },
      {
        question: "Moet ik lid zijn van het KNGF?",
        answer: "Nee, lidmaatschap van een beroepsvereniging is niet verplicht. Het KNGF biedt wel ondersteuning voor ondernemers, en leden krijgen korting op onder meer verzekeringen.",
      },
      {
        question: "Hoe lang duurt het om een eigen praktijk te starten?",
        answer: "Reken op enkele maanden voorbereiding. Vooral het vinden van een ruimte, het regelen van financiering en het afsluiten van contracten met zorgverzekeraars kost tijd. Contracten lopen meestal per kalenderjaar, dus begin daar op tijd mee.",
      },
    ],
  },
  {
    slug: "verschil-epd-en-recovery-management-platform",
    title: "EPD of Recovery Management Platform: wat is het verschil?",
    metaDescription: "Wat is het verschil tussen een EPD en een Recovery Management Platform in de fysiotherapie? Wat je waar vastlegt, en waarom ze naast elkaar werken.",
    excerpt: "Het EPD legt vast wat er in de behandelkamer gebeurt. Een Recovery Management Platform laat zien hoe het daarna met je patiënt gaat. Zo werken ze samen.",
    category: "Digitalisering",
    publishedAt: "2026-11-13",
    readTime: "6 min",
    keywords: [
      "recovery management platform",
      "verschil EPD en patiëntenportaal",
      "EPD fysiotherapie",
      "software voor fysiopraktijken",
      "herstelbegeleiding tussen behandelingen",
    ],
    summary: [
      "Een EPD (elektronisch patiëntendossier) legt vast wat er tijdens een behandeling gebeurt, en regelt vaak ook agenda en declaratie. Voor een fysiotherapeut is dat dossier wettelijk verplicht.",
      "Een Recovery Management Platform (RMP) richt zich op de tijd tussen de behandelingen: hoe het thuis met de patiënt gaat, het herstelplan, de oefeningen, testen en voortgang.",
      "De twee vervangen elkaar niet. Het EPD blijft leidend voor agenda, verslaglegging en declaratie; een RMP zoals REVA werkt ernaast, zonder koppeling en zonder dubbele invoer.",
      "REVA is bewust geen EPD. Daardoor kan het zich volledig richten op herstel, betrokkenheid en inzicht in voortgang.",
    ],
    intro: [
      "Wie software voor een fysiopraktijk vergelijkt, komt al snel twee begrippen tegen: het EPD en het patiëntenportaal. Sinds kort valt ook de term Recovery Management Platform. Wat is het verschil, en heb je ze allebei nodig?",
      "In dit artikel zetten we het EPD en een Recovery Management Platform naast elkaar: wat ze doen, wie ze invult, en hoe je voorkomt dat je dingen dubbel vastlegt. Aan het eind lees je onze eigen insteek met REVA.",
    ],
    sections: [
      {
        heading: "Wat is een EPD in de fysiotherapie?",
        paragraphs: [
          "Een EPD, het elektronisch patiëntendossier, is het dossier van de praktijk. Daarin legt de fysiotherapeut de anamnese, het onderzoek, het behandelplan en het verslag van elke behandeling vast. Een fysiotherapeut is volgens de WGBO verplicht een dossier bij te houden, dus het EPD is voor bijna elke praktijk de basis.",
          "De meeste EPD's voor fysiotherapie regelen meer dan het dossier alleen. Vaak zitten de agenda, online afspraken maken en het declareren bij zorgverzekeraars er ook in. Het EPD is daarmee het administratieve hart van de praktijk.",
        ],
      },
      {
        heading: "Wat is een Recovery Management Platform?",
        paragraphs: [
          "Een Recovery Management Platform is software voor herstelbegeleiding tussen de behandelingen door. Waar het EPD vastlegt wat er in de behandelkamer gebeurt, laat een Recovery Management Platform zien hoe het daarna met de patiënt gaat.",
          "De patiënt houdt thuis zelf zijn herstel bij, bijvoorbeeld met een korte dagelijkse check-in over pijn, zwelling, mobiliteit en slaap, en volgt zijn oefenschema. De fysiotherapeut ziet in één overzicht wie aandacht nodig heeft, werkt met herstelplannen in fases en volgt de voortgang met testen en metingen.",
          "Een patiëntenportaal is een onderdeel daarvan: de plek waar de patiënt inlogt. Een Recovery Management Platform omvat ook de kant van de fysiotherapeut en de praktijk, zoals signalering, herstelplannen en analyse. Lees meer in [wat is een patiëntenportaal](/blog/wat-is-een-patientenportaal).",
        ],
      },
      {
        heading: "EPD en Recovery Management Platform naast elkaar",
        paragraphs: [
          "Het verschil wordt het duidelijkst als je ze naast elkaar zet. Ze beantwoorden een andere vraag: het EPD vraagt wat er tijdens de behandeling is gedaan, een Recovery Management Platform vraagt hoe het herstel ervoor staat.",
        ],
        table: {
          caption: "Verschil tussen een EPD en een Recovery Management Platform in de fysiotherapie",
          headers: ["Onderwerp", "EPD", "Recovery Management Platform"],
          rows: [
            ["Hoofdvraag", "Wat is er tijdens de behandeling gedaan?", "Hoe gaat het herstel tussen de behandelingen?"],
            ["Wie vult het in", "De fysiotherapeut", "De patiënt en de fysiotherapeut samen"],
            ["Wanneer", "Tijdens of direct na de behandeling", "Dagelijks, thuis en in de praktijk"],
            ["Wat staat erin", "Anamnese, onderzoek, behandelplan, verslaglegging", "Check-ins, herstelplan in fases, oefenschema, testen, voortgang"],
            ["Agenda en declaratie", "Meestal wel", "Nee, die blijven in het EPD"],
            ["Signalering", "Meestal niet", "Ja, wie aandacht nodig heeft"],
            ["Wettelijke basis", "Verplicht dossier volgens de WGBO", "Aanvullend, naast het dossier"],
          ],
        },
      },
      {
        heading: "Waarom de tijd tussen de behandelingen ertoe doet",
        paragraphs: [
          "Een patiënt ziet zijn fysiotherapeut misschien een of twee keer per week. De rest van de week werkt hij thuis aan zijn herstel, of juist niet. Juist in die tijd ontstaan de signalen die ertoe doen: meer pijn, zwelling na een training, of een patiënt die stilletjes stopt met oefenen.",
          "Het EPD ziet die tijd niet, omdat het pas weer opengaat bij de volgende afspraak. Daardoor vallen afhakende patiënten vaak pas op als ze een afspraak afzeggen. Hoe je die signalen eerder herkent, lees je in [de stille afhakers](/blog/therapietrouw-verhogen-patienten-herkennen).",
        ],
      },
      {
        heading: "Geen dubbele invoer: wat leg je waar vast?",
        paragraphs: [
          "De grootste zorg van praktijkeigenaren bij extra software is dubbel werk. Dat voorkom je met een heldere taakverdeling: elk systeem doet waar het goed in is.",
        ],
        list: [
          "In het EPD: agenda, verslaglegging per behandeling, het wettelijke dossier en declaraties.",
          "In het Recovery Management Platform: het herstelplan, de oefeningen, testen en de voortgang tussen de behandelingen.",
          "Door de patiënt zelf: de dagelijkse check-in, de uitgevoerde trainingen, medicatie en eigen doelen.",
        ],
      },
      {
        heading: "Onze insteek: REVA is bewust geen EPD",
        paragraphs: [
          "Wij bouwen REVA bewust niet als EPD en zonder agenda of declaratie. Elke praktijk heeft al een EPD dat dat goed doet, en nog een agenda erbij zorgt alleen voor dubbele invoer. Door die keuze kan REVA zich volledig richten op het herstel van de patiënt: het menselijke aspect en inzicht in voortgang.",
          "Denk aan drie stations. Het EPD regelt agenda, verslaglegging en declaratie. De fysiotherapeut begeleidt het herstel in het REVA-praktijkportaal. De patiënt houdt zijn herstel thuis bij in de REVA-app, in de huisstijl van de praktijk. REVA werkt naast elk EPD, zonder koppeling: je patiëntenlijst laad je in één keer in via een CSV-bestand.",
          "AI speelt daarbij een ondersteunende rol. REVA-inzichten doet voorstellen, bijvoorbeeld voor de dosering of een fase-overgang, maar de fysiotherapeut beslist altijd. Hoe dat in de praktijk werkt, zie je op de pagina [software voor fysiopraktijken](/) en bij de [functies van REVA](/functies).",
        ],
      },
      {
        heading: "Heeft jouw praktijk een Recovery Management Platform nodig?",
        paragraphs: [
          "Niet elke praktijk heeft dezelfde behoefte. Een Recovery Management Platform levert het meest op als een paar van deze punten herkenbaar zijn:",
        ],
        list: [
          "Je begeleidt patiënten na een operatie of sportblessure, in trajecten van weken of maanden.",
          "Je hoort pas bij de volgende afspraak hoe de afgelopen week ging.",
          "Er komen veel telefoontjes en appjes binnen over pijn en oefeningen, vaak op privételefoons.",
          "Bij vakantie of ziekte mist een collega het verloop van een patiënt.",
          "Je wilt als praktijk inzicht in uitkomsten, behandelduur en tevredenheid.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat is het verschil tussen een EPD en een Recovery Management Platform?",
        answer: "Een EPD legt vast wat er tijdens de behandeling gebeurt en regelt vaak agenda en declaratie. Een Recovery Management Platform richt zich op het herstel tussen de behandelingen door: check-ins van de patiënt, herstelplannen, oefeningen, testen en voortgang. Ze werken naast elkaar.",
      },
      {
        question: "Vervangt een Recovery Management Platform het EPD?",
        answer: "Nee. Het EPD blijft nodig voor het wettelijke dossier, de agenda en declaraties. Een Recovery Management Platform zoals REVA werkt ernaast, zonder koppeling en zonder dubbele invoer.",
      },
      {
        question: "Moet ik gegevens dubbel invoeren als ik naast mijn EPD REVA gebruik?",
        answer: "Nee. In REVA leg je alleen vast wat over herstel gaat: het herstelplan, de oefeningen, testen en voortgang. Agenda en administratie blijven in je EPD. Je patiëntenlijst laad je in één keer in via een CSV-bestand.",
      },
      {
        question: "Is een patiëntenportaal hetzelfde als een Recovery Management Platform?",
        answer: "Niet helemaal. Een patiëntenportaal is de plek waar de patiënt inlogt. Een Recovery Management Platform omvat ook de kant van de fysiotherapeut en de praktijk, zoals signalering van wie aandacht nodig heeft, herstelplannen in fases en analyse.",
      },
      {
        question: "Wat kost een Recovery Management Platform zoals REVA?",
        answer: `${priceSentence} Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen.`,
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
