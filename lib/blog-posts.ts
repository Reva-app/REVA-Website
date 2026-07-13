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
    slug: "herstellen-na-knieoperatie-eerste-weken",
    title: "Herstellen na een knieoperatie: wat je de eerste weken kunt verwachten",
    metaDescription:
      "Wat gebeurt er de eerste weken na een knieoperatie? Een overzicht van zwelling, pijn, mobiliteit en waarom overzicht houden je herstel helpt.",
    excerpt:
      "De eerste weken na een knieoperatie zijn bepalend voor je herstel. Dit kun je realistisch verwachten, week voor week.",
    category: "Knieoperatie",
    publishedAt: "2026-05-04",
    readTime: "7 min",
    intro: [
      "Een knieoperatie is een ingrijpende gebeurtenis, ook al is de ingreep zelf vaak succesvol en routinematig voor de chirurg. Wat daarna gebeurt, bepaalt grotendeels hoe goed en hoe snel je herstelt. De eerste weken voelen voor veel mensen onvoorspelbaar: de ene dag gaat het beter dan verwacht, de andere dag lijkt het alsof je stilstaat. Dat is normaal.",
      "Hieronder een realistisch overzicht van wat je de eerste weken kunt verwachten. Elk lichaam en elke operatie is anders, dus zie dit als een algemene richtlijn — luister altijd naar de instructies van je chirurg en fysiotherapeut.",
    ],
    sections: [
      {
        heading: "De eerste 48 uur: rust en voorzichtig bewegen",
        paragraphs: [
          "Direct na de operatie draait alles om pijnbeheersing, het beperken van zwelling en het voorkomen van complicaties zoals trombose. De meeste ziekenhuizen en klinieken moedigen je aan om binnen 24 uur al voorzichtig te bewegen, vaak met hulp van een looprek of krukken.",
          "Zwelling en stijfheid zijn in deze fase het grootst. Elevatie van het been, ijs en de voorgeschreven pijnmedicatie zijn de belangrijkste hulpmiddelen. Verwacht geen grote sprongen vooruit — het doel is simpelweg dat je lichaam de kans krijgt om te herstellen van de ingreep zelf.",
        ],
      },
      {
        heading: "Week 1: zwelling, pijn en de eerste oefeningen",
        paragraphs: [
          "In de eerste week start meestal de eerste lichte fysiotherapie: buig- en strekoefeningen om stijfheid te voorkomen, en oefeningen om de spieren rond de knie weer te activeren. Pijn en zwelling pieken vaak rond dag drie tot vijf, wat verontrustend kan aanvoelen als je dit niet verwacht.",
          "Veel mensen onderschatten hoe vermoeiend deze week is — niet alleen fysiek, maar ook mentaal. Je lichaam verbruikt veel energie aan herstel, dus voldoende rust is net zo belangrijk als de oefeningen zelf.",
        ],
      },
      {
        heading: "Week 2 en 3: opbouwen van mobiliteit",
        paragraphs: [
          "Vanaf week twee zie je bij de meeste mensen geleidelijk verbetering: minder zwelling, meer buigingsgraad in de knie en meer vertrouwen bij het lopen. Dit is ook het moment waarop de meeste mensen hun krukken langzaam durven los te laten, in overleg met hun fysiotherapeut.",
          "Het is verleidelijk om in deze fase harder te pushen omdat het beter voelt. Toch is dit precies het moment waarop overbelasting vaak misgaat — een tijdelijke terugval in zwelling of pijn na een actieve dag is geen reden tot paniek, maar wel een signaal om het tempo aan te passen.",
        ],
      },
      {
        heading: "Week 4 tot 6: van herstel naar revalidatie",
        paragraphs: [
          "Rond week vier tot zes verschuift de focus vaak van 'herstellen van de operatie' naar 'revalideren richting je oude niveau'. Kracht, balans en functionele bewegingen — zoals traplopen of langer wandelen — komen steeds meer aan bod.",
          "Dit is ook het moment waarop het waardevol wordt om terug te kijken: hoe heeft je pijn zich ontwikkeld, hoe vaak heb je je oefeningen gedaan, welke afspraken staan er nog gepland? Zonder een vorm van bijhouden vervaagt dat overzicht snel.",
        ],
      },
      {
        heading: "Waarom overzicht houden in deze fase het verschil maakt",
        paragraphs: [
          "Herstel na een knieoperatie is geen rechte lijn. Juist daarom is het waardevol om dagelijks een paar dingen bij te houden: je pijnscore, hoe je je energetisch voelt, welke oefeningen je hebt gedaan en welke afspraken eraan komen. Zo herken je patronen — bijvoorbeeld dat je pijn steevast toeneemt na een dag zonder rust — en kun je dit gericht bespreken met je fysiotherapeut.",
          "REVA is hiervoor gebouwd: een persoonlijk herstel dashboard waarin je dagelijkse check-ins, afspraken, oefeningen en voortgang op één plek bijhoudt, zodat je nooit het overzicht kwijtraakt tijdens je herstel.",
        ],
        list: [
          "Dagelijkse pijnscore en energieniveau bijhouden",
          "Oefeningen en trainingen afvinken",
          "Afspraken met fysiotherapeut of chirurg overzichtelijk plannen",
          "Voortgang in grafieken terugzien over weken en maanden",
        ],
      },
    ],
  },
  {
    slug: "grip-op-je-herstel-7-tips",
    title: "Hoe houd je grip op je herstel? 7 praktische tips",
    metaDescription:
      "7 praktische tips om structuur en grip te houden tijdens een langdurig hersteltraject, van vast ritme tot het vieren van kleine mijlpalen.",
    excerpt:
      "Grip houden op een langdurig hersteltraject is lastig. Deze 7 tips helpen je structuur, motivatie en overzicht te bewaren.",
    category: "Herstel & mindset",
    publishedAt: "2026-05-18",
    readTime: "6 min",
    intro: [
      "Een langdurig hersteltraject vraagt om meer dan geduld alleen. Zonder structuur voelt herstel al snel chaotisch: losse afspraken, vergeten oefeningen, een pijnscore die je alleen op je gevoel probeert te onthouden. Deze zeven tips helpen je om praktisch grip te houden op je herstel — dag na dag.",
    ],
    sections: [
      {
        heading: "1. Houd een vast dagritme aan",
        paragraphs: [
          "Herstel gaat makkelijker als je lichaam weet wat het kan verwachten. Een vaste tijd voor oefeningen, medicatie en rust helpt niet alleen fysiek, maar geeft ook mentale rust. Je hoeft niet elke dag opnieuw te beslissen wanneer je iets doet — het ritme doet dat voor je.",
        ],
      },
      {
        heading: "2. Noteer dagelijks je pijn en energie",
        paragraphs: [
          "Pijn en energie schommelen sterk tijdens herstel, en het is moeilijk om achteraf terug te halen hoe een week écht verliep. Een korte dagelijkse check-in — hooguit een minuut — geeft je een eerlijk beeld over tijd, in plaats van een vaag 'het ging wisselend'.",
        ],
      },
      {
        heading: "3. Zet realistische doelen op korte termijn",
        paragraphs: [
          "Een groot einddoel zoals 'weer sporten' voelt in het begin ver weg en kan demotiverend werken. Kleinere doelen — een week zonder gemiste oefeningen, tien graden meer buiging in de knie — zijn concreter en geven je vaker een gevoel van vooruitgang.",
        ],
      },
      {
        heading: "4. Bouw rust net zo bewust in als inspanning",
        paragraphs: [
          "Veel mensen plannen hun oefeningen, maar niet hun rust. Rust is echter geen bijzaak tijdens herstel — het is het moment waarop je lichaam daadwerkelijk herstelt. Behandel rustmomenten als een vast onderdeel van je schema, niet als iets dat overblijft als er tijd over is.",
        ],
      },
      {
        heading: "5. Betrek je omgeving bij je herstel",
        paragraphs: [
          "Partners, familie of vrienden willen vaak helpen, maar weten niet altijd hoe. Door je voortgang concreet te delen — 'deze week ging het beter met traplopen' — maak je het makkelijker voor hen om aan te sluiten en je te steunen op de momenten dat het zwaar is.",
        ],
      },
      {
        heading: "6. Bereid je afspraken voor",
        paragraphs: [
          "Een afspraak met je fysiotherapeut of arts is waardevoller als je concrete informatie meeneemt: hoe je pijn zich ontwikkelde, welke oefeningen lastig waren, wanneer je terugval voelde. Zonder die gegevens val je vaak terug op een algemeen 'het gaat wel oké'.",
        ],
      },
      {
        heading: "7. Vier kleine mijlpalen",
        paragraphs: [
          "De eerste keer weer traplopen zonder pijn, een week volledig zonder gemiste check-in, minder pijnmedicatie nodig hebben dan de week ervoor — dit zijn allemaal signalen van echte vooruitgang. Sta er bewust bij stil. Herstel is een optelsom van kleine stappen, niet van één groot moment.",
        ],
      },
      {
        heading: "Structuur maakt herstel behapbaar",
        paragraphs: [
          "Al deze tips komen neer op hetzelfde principe: herstel is makkelijker vol te houden met structuur en overzicht dan zonder. REVA is gebouwd om dat overzicht voor je te organiseren — je check-ins, afspraken, oefeningen en voortgang op één plek, zodat grip houden op je herstel geen dagelijkse puzzel meer is.",
        ],
      },
    ],
  },
  {
    slug: "wat-noteer-je-tijdens-revalidatie",
    title: "Wat noteer je tijdens revalidatie? Een compleet overzicht",
    metaDescription:
      "Welke gegevens zijn waardevol om bij te houden tijdens revalidatie? Een compleet overzicht van pijn, afspraken, oefeningen, medicatie en voortgang.",
    excerpt:
      "Van pijnscore tot mijlpalen: dit zijn de gegevens die je tijdens revalidatie het beste kunt bijhouden, en waarom.",
    category: "Revalidatie",
    publishedAt: "2026-06-01",
    readTime: "6 min",
    intro: [
      "Revalidatie levert veel informatie op — maar alleen als je die vastlegt. Zonder bijhouden vervagen details snel: hoeveel pijn had je precies vorige week dinsdag, en was dat na of voor je training? Dit overzicht laat zien welke gegevens het meest waardevol zijn om bij te houden tijdens een hersteltraject, en waarom.",
    ],
    sections: [
      {
        heading: "Pijn en symptomen",
        paragraphs: [
          "Pijn is de meest voor de hand liggende, maar ook de meest onderschatte gegevens tijdens herstel. Een dagelijkse pijnscore, bijvoorbeeld op een schaal van 0 tot 10, laat trends zien die je op je gevoel nooit zou herkennen — zoals een terugkerende piek na een specifieke oefening of activiteit.",
        ],
      },
      {
        heading: "Afspraken en behandelingen",
        paragraphs: [
          "Een hersteltraject brengt vaak meerdere zorgverleners met zich mee: fysiotherapeut, chirurg, huisarts, soms een sportarts. Al deze afspraken overzichtelijk op één plek bijhouden voorkomt dubbele boekingen, gemiste controles en het gevoel dat je het overzicht kwijt bent.",
        ],
      },
      {
        heading: "Oefeningen en trainingen",
        paragraphs: [
          "Welke oefeningen heb je gedaan, hoe vaak en hoe voelde dat? Dit is direct bruikbare informatie voor je fysiotherapeut om je programma bij te sturen. Het geeft jou bovendien een tastbaar bewijs van consistentie, ook op dagen dat vooruitgang niet voelbaar is.",
        ],
      },
      {
        heading: "Medicatie en pijnregistratie",
        paragraphs: [
          "Wanneer nam je pijnmedicatie, en hielp het? Dit soort gegevens is waardevol om te bepalen of je medicatie nog nodig is, moet worden aangepast, of dat pijn een ander patroon vertoont dan verwacht.",
        ],
      },
      {
        heading: "Energie en mentale toestand",
        paragraphs: [
          "Herstel is niet alleen fysiek. Energieniveau en stemming beïnvloeden hoeveel je aankunt, en andersom. Het bijhouden hiervan helpt om fysieke tegenslagen in perspectief te plaatsen — soms is een mindere dag simpelweg een vermoeide dag, geen achteruitgang.",
        ],
      },
      {
        heading: "Doelen en mijlpalen",
        paragraphs: [
          "Concrete doelen — meer buiging in de knie, een langere wandeling zonder pijn, terugkeer naar een specifieke sport — geven richting aan je herstel. Het bijhouden van mijlpalen maakt vooruitgang zichtbaar, ook wanneer die langzaam gaat.",
        ],
      },
      {
        heading: "Alles op één plek",
        paragraphs: [
          "Losse notities, een dagboekje en berichten aan jezelf raken al snel versnipperd. REVA brengt al deze gegevens — pijn, afspraken, oefeningen, medicatie, energie en mijlpalen — samen in één persoonlijk herstel dashboard, zodat je nooit meer hoeft te zoeken naar wat je vorige week hebt bijgehouden.",
        ],
      },
    ],
  },
  {
    slug: "sporthervatting-na-blessure",
    title: "Sporthervatting na een blessure: veilig en verantwoord opbouwen",
    metaDescription:
      "Hoe bouw je verantwoord sporthervatting op na een blessure? Signalen dat je klaar bent, opbouwstrategie en de rol van je fysiotherapeut.",
    excerpt:
      "Terugkeren naar sport na een blessure gaat het beste stap voor stap. Zo bouw je veilig en verantwoord op.",
    category: "Sport & blessures",
    publishedAt: "2026-06-15",
    readTime: "7 min",
    intro: [
      "Voor sporters is de terugkeer naar hun sport vaak het echte doel van revalidatie — niet alleen 'pijnvrij zijn', maar weer kunnen presteren zoals voorheen. Juist die drang om terug te keren zorgt geregeld voor te snel opbouwen, met een nieuwe blessure of terugval als gevolg. Dit artikel geeft een realistisch kader voor verantwoorde sporthervatting.",
    ],
    sections: [
      {
        heading: "Waarom te snel opbouwen vaak misgaat",
        paragraphs: [
          "Een blessure geneest niet lineair, en 'geen pijn meer voelen' betekent niet automatisch dat weefsel, kracht en stabiliteit alweer op het oude niveau zijn. Veel herblessures ontstaan juist in de fase waarin iemand zich weer goed voelt en te snel terugkeert naar volledige belasting.",
        ],
      },
      {
        heading: "Signalen dat je klaar bent voor de volgende stap",
        paragraphs: [
          "In plaats van te vertrouwen op alleen 'hoe het voelt', is het waardevoller om te kijken naar een combinatie van signalen: pijnvrij bewegen tijdens dagelijkse activiteiten, voldoende kracht en stabiliteit in vergelijking met de andere kant van het lichaam, en het vermogen om basisbewegingen — lopen, traplopen, richting veranderen — zonder compensatie uit te voeren.",
        ],
      },
      {
        heading: "Stapsgewijs opbouwen in plaats van springen",
        paragraphs: [
          "Een veelgebruikt uitgangspunt is om trainingsbelasting geleidelijk te verhogen, bijvoorbeeld met kleine stappen per week in plaats van grote sprongen. Van wandelen naar joggen, van joggen naar intervallen, van individuele training naar contact met teamgenoten — elke stap verdient tijd om te wennen voordat je verder opbouwt.",
          "Een tijdelijke toename van lichte pijn of stijfheid na een nieuwe belasting is niet per definitie een probleem. Aanhoudende of toenemende pijn de dag erna is wél een signaal om een stap terug te doen.",
        ],
      },
      {
        heading: "De rol van je fysiotherapeut",
        paragraphs: [
          "Een fysiotherapeut of sportarts kan objectief beoordelen of kracht, stabiliteit en beweeglijkheid daadwerkelijk voldoende zijn hersteld — iets wat lastig is om zelf goed in te schatten, zeker als je gemotiveerd bent om snel terug te keren. Regelmatig overleg tijdens de opbouwfase voorkomt dat enthousiasme de overhand krijgt op verstandig opbouwen.",
        ],
      },
      {
        heading: "De mentale kant van terugkeren",
        paragraphs: [
          "Naast het fysieke aspect speelt vertrouwen een grote rol. Twijfel of angst voor een nieuwe blessure is normaal en verdient net zoveel aandacht als kracht en mobiliteit. Een geleidelijke opbouw geeft niet alleen je lichaam, maar ook je hoofd de tijd om weer vertrouwen op te bouwen.",
        ],
      },
      {
        heading: "Overzicht houden tijdens de opbouwfase",
        paragraphs: [
          "Juist in deze fase is bijhouden waardevol: welke belasting deed je, hoe reageerde je lichaam de dag erna, en hoe ontwikkelt je pijnscore zich over de weken? Met dat overzicht herken je sneller of een opbouwstap te groot was, in plaats van dat achteraf te ontdekken via een nieuwe blessure. REVA helpt je dit per dag bij te houden, zodat je opbouw gebaseerd is op gegevens in plaats van alleen op gevoel.",
        ],
      },
    ],
  },
  {
    slug: "medicatie-en-pijnregistratie-bijhouden",
    title: "Omgaan met medicatie en pijnregistratie tijdens herstel",
    metaDescription:
      "Waarom is pijnregistratie waardevol tijdens herstel, en hoe houd je medicatiegebruik overzichtelijk bij? Praktische uitleg en tips.",
    excerpt:
      "Pijn en medicatie bijhouden geeft je en je zorgverleners waardevol inzicht tijdens herstel. Zo pak je het praktisch aan.",
    category: "Medicatie & pijn",
    publishedAt: "2026-06-29",
    readTime: "6 min",
    intro: [
      "Pijn en medicatie horen voor veel mensen bij herstel, maar worden zelden systematisch bijgehouden. Terwijl juist deze gegevens — hoeveel pijn, wanneer, en welke medicatie hielp — waardevolle aanknopingspunten geven voor jezelf en je zorgverleners. Dit artikel legt uit waarom, en hoe je dit praktisch aanpakt.",
    ],
    sections: [
      {
        heading: "Waarom pijn bijhouden meer oplevert dan je denkt",
        paragraphs: [
          "Pijn is subjectief en wisselt per dag, per activiteit en soms zelfs per moment van de dag. Zonder registratie onthoud je vooral de uitschieters — een hele zware dag, of juist een dag zonder klachten — en verdwijnt de rest in een vage indruk. Met dagelijkse registratie ontstaat een eerlijker beeld: neemt de pijn geleidelijk af, blijft die gelijk, of zie je pieken die samenhangen met specifieke activiteiten?",
        ],
      },
      {
        heading: "Hoe een pijnscore werkt",
        paragraphs: [
          "De meest gebruikte methode is een schaal van 0 (geen pijn) tot 10 (ondraaglijke pijn). Belangrijker dan het exacte cijfer is de consistentie: als je elke dag op hetzelfde moment scoort, wordt het patroon over tijd betekenisvol, ook al is de score zelf subjectief.",
        ],
      },
      {
        heading: "Medicatie op tijd en overzichtelijk bijhouden",
        paragraphs: [
          "Naast pijn is het waardevol om bij te houden wanneer je medicatie hebt ingenomen, en of dit het gewenste effect had. Dit voorkomt niet alleen gemiste doses, maar geeft ook een compleet beeld: als pijn ondanks medicatie aanhoudt, is dat relevante informatie voor een vervolgafspraak.",
        ],
      },
      {
        heading: "Patronen herkennen",
        paragraphs: [
          "Met een paar weken aan gegevens worden patronen zichtbaar die op losse dagen onzichtbaar blijven: pijn die structureel toeneemt na een trainingsdag, een terugkerende piek in het weekend, of juist een geleidelijke, geruststellende afname over tijd. Deze patronen zijn precies wat een fysiotherapeut of arts nodig heeft om een behandeling gericht bij te sturen.",
        ],
      },
      {
        heading: "Beter communiceren met je zorgverleners",
        paragraphs: [
          "In plaats van tijdens een afspraak te vertrouwen op je geheugen — 'het ging wisselend de laatste weken' — geeft een overzicht van pijnscores en medicatiegebruik je fysiotherapeut of arts concrete gegevens om op te reageren. Dat leidt tot gerichtere adviezen en een efficiënter gebruik van je afspraaktijd.",
        ],
      },
      {
        heading: "Eén plek voor pijn, medicatie en de rest van je herstel",
        paragraphs: [
          "Pijn en medicatie staan zelden op zichzelf — ze hangen samen met je oefeningen, je energie en je afspraken. REVA brengt dit allemaal samen in één dashboard, zodat je niet alleen pijn en medicatie bijhoudt, maar ook het volledige beeld van je herstel overzichtelijk houdt.",
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
