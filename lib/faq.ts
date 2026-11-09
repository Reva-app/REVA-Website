// Veelgestelde vragen, gedeeld door de FAQ-pagina, het FAQ-schema en de Markdown-versie voor AI-agents.
// Antwoorden zijn gebaseerd op hoe het REVA-dashboard werkelijk werkt.

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; category: string; intro: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "algemeen",
    category: "Algemeen",
    intro: "Wat REVA is, voor wie en hoe het zich verhoudt tot je huidige software.",
    items: [
      {
        q: "Wat is REVA precies?",
        a: "REVA is een patiëntenportaal dat specifiek gebouwd is voor fysiotherapiepraktijken. Patiënten houden na een blessure of operatie zelf hun herstel bij: dagelijkse check-ins over pijn en energie, foto-updates, medicatiegebruik en de voortgang van hun oefenprogramma. Als praktijk zie je al die informatie automatisch samenkomen in één overzicht, inclusief signalering van patiënten die extra aandacht nodig hebben.",
      },
      {
        q: "Voor wie is REVA bedoeld?",
        a: "REVA is bedoeld voor fysiotherapiepraktijken van elke omvang: van zelfstandige fysiotherapeuten tot praktijken met meerdere behandelaars en vestigingen. Het is vooral waardevol voor praktijken die patiënten begeleiden na een operatie, blessure of langdurig hersteltraject, waarbij overzicht en therapietrouw tussen behandelingen door belangrijk zijn.",
      },
      {
        q: "Vervangt REVA mijn bestaande EPD of praktijksoftware?",
        a: "Nee, REVA vervangt je bestaande EPD, agenda- of declaratiesysteem niet. REVA is een aanvullend patiëntenportaal dat zich richt op de communicatie en het overzicht tussen behandelingen door: check-ins, herstelplannen en voortgang. De meeste praktijken gebruiken REVA naast hun huidige software.",
      },
      {
        q: "Koppelt REVA met mijn EPD?",
        a: "Op dit moment heeft REVA geen koppeling met een EPD. REVA werkt ernaast, voor de tijd tussen de behandelingen. De patiëntenlijst kun je wel exporteren als CSV-bestand. Wil je weten wat er in jouw situatie mogelijk is, neem dan contact met ons op.",
      },
      {
        q: "Wat maakt REVA anders dan een algemene fitness- of trainingsapp?",
        a: "Generieke fitnessapps zijn gebouwd voor trainingsschema's, niet voor een hersteltraject onder begeleiding. REVA is ontworpen rond de fases van herstel na een blessure of operatie: het combineert intake, herstelplannen met criteria per fase, pijn- en medicatieregistratie, een dossier en voortgangsanalyse, en de fysiotherapeut kijkt mee.",
      },
      {
        q: "Wie zit er achter REVA?",
        a: "REVA is opgericht door Stef Robberts, die het idee kreeg tijdens zijn eigen herstel na een zware knieblessure. REVA wordt aangeboden door REVA B.V., gevestigd in Nieuw-Vennep.",
      },
    ],
  },
  {
    id: "functies",
    category: "Functies voor de praktijk",
    intro: "Wat je als fysiotherapeut en als praktijk met REVA kunt.",
    items: [
      {
        q: "Welke functies heeft REVA voor de praktijk?",
        a: "Een intake met voorgesteld herstelplan, herstelplannen in fases met criteria en mijlpalen, een patiëntoverzicht met signalering, een compleet patiëntdossier, een bibliotheek met oefeningen en trainingsschema's, agenda en ruimteplanning, praktijkanalyse, rollen voor je team en een portaal in je eigen huisstijl. Op de functiepagina zie je per functie hoe het werkt.",
      },
      {
        q: "Hoe weet ik welke patiënten aandacht nodig hebben?",
        a: "Op je dashboard markeert REVA patiënten bij een pijnscore van 7 of hoger, gemelde zwelling of een lage dagscore in de laatste check-in, en bij weinig activiteit. Je ziet het signaal per patiënt, en het totale aantal patiënten dat aandacht nodig heeft.",
      },
      {
        q: "Hoe werkt de intake van een nieuwe patiënt?",
        a: "Je doorloopt drie stappen: de aanleiding (sport, operatie of klacht, blessuretype en zijde), de intake zelf (onder meer pijn, zwelling, hulpmiddel, belasting, beperking en doelen) en een samenvatting. REVA zet de aandachtspunten en hersteldoelen op een rij en stelt een passend herstelplan voor. Alle velden zijn optioneel, je vult in wat je al weet.",
      },
      {
        q: "Kan ik mijn eigen herstelplannen maken?",
        a: "Ja. Je bouwt herstelplannen met fases, en per fase een doel, weken, criteria, mijlpalen, educatie, verboden activiteiten en gekoppelde trainingsschema's. Een patiënt gaat pas naar de volgende fase als alle criteria zijn afgevinkt, met een korte meting bij elke overgang.",
      },
      {
        q: "Wat zit er in de REVA-bibliotheek?",
        a: "Ruim 40 voorbeeldherstelplannen, onder andere voor ACL-reconstructie, meniscus, rotator cuff, knie- en heupprothese, enkelverzwikking, hamstring, lage rug en hersenschudding, en 100 oefeningen. Ze zijn bedoeld als startpunt: je kopieert ze naar je eigen bibliotheek, beoordeelt ze en past ze aan voordat je ze aan een patiënt toewijst.",
      },
      {
        q: "Kan ik oefeningen aanpassen tijdens een consult?",
        a: "Ja. Je voegt oefeningen toe, past sets, herhalingen of duur aan of haalt ze weg, terwijl de patiënt er nog is. De patiënt ziet de wijziging direct terug in het eigen portaal, zonder dat je een los document hoeft te sturen.",
      },
      {
        q: "Werkt REVA met meerdere behandelaars en vestigingen?",
        a: "Ja. Je richt meerdere locaties in binnen één organisatie en koppelt medewerkers en patiënten aan de juiste behandelaar en vestiging. Neemt een collega een patiënt over, dan ziet die hetzelfde dossier en herstelplan.",
      },
      {
        q: "Welke rollen zijn er voor medewerkers?",
        a: "Er zijn rollen voor de praktijkeigenaar, de fysiotherapeut en de receptie. De praktijkeigenaar beheert onder meer het team, de huisstijl, de analyse en het activiteitenlog. De receptie ziet alleen contactgegevens en de agenda, geen medische informatie.",
      },
      {
        q: "Kan REVA ook roosters en ruimtes plannen?",
        a: "Ja. Per locatie leg je ruimtes, werkroosters en verlof vast. In de weekplanning zie je reserveringen per ruimte en fysio, en met de AI-suggestie verdeelt REVA de ruimtes over de behandelaars die die dag werken. Handmatig plannen kan altijd.",
      },
      {
        q: "Kan ik mijn eigen agenda koppelen?",
        a: "Ja. Medewerkers kunnen hun persoonlijke agenda koppelen via een iCal-link, bijvoorbeeld uit Google Agenda. REVA leest die agenda alleen uit en schrijft er nooit in terug.",
      },
      {
        q: "Welke inzichten geeft de praktijkanalyse?",
        a: "De praktijkeigenaar ziet de gemiddelde doorlooptijd per blessure, het aantal nieuwe patiënten per jaar, de werkdruk per behandelaar en hoe REVA binnen het team wordt gebruikt.",
      },
      {
        q: "Kan REVA in de huisstijl van mijn praktijk?",
        a: "Ja. Je stelt het logo, de kleur en de naam van je praktijk in. Die zie je terug in het portaal, in de app van je patiënten en als afzender van de e-mails.",
      },
    ],
  },
  {
    id: "patienten",
    category: "Voor patiënten",
    intro: "Wat je patiënten in REVA doen en hoe ze toegang krijgen.",
    items: [
      {
        q: "Wat houdt een patiënt precies bij in REVA?",
        a: "Patiënten vullen een korte check-in in met een dagscore en, waar relevant, pijn, mobiliteit, energie, stemming, slaap en zwelling. Daarnaast loggen ze trainingen en medicatie, voegen ze foto-updates en documenten toe en werken ze aan hun doelen en mijlpalen. Al die gegevens komen samen in het dossier dat jij als fysio inziet.",
      },
      {
        q: "Hoe nodig ik een patiënt uit voor REVA?",
        a: "Na de intake ontvangt de patiënt direct een e-mail om het eigen portaal te activeren. Het herstelplan staat dan al klaar. Patiënten krijgen alleen toegang via een uitnodiging van hun praktijk.",
      },
      {
        q: "Werkt REVA op de telefoon van mijn patiënten?",
        a: "Ja. Zowel jij als je patiënten kunnen REVA gebruiken via de browser, iOS en Android. Patiënten vullen hun dagelijkse check-in doorgaans in minder dan een minuut in op hun telefoon.",
      },
      {
        q: "Krijgen patiënten herinneringen?",
        a: "Ja. Patiënten kunnen herinneringen krijgen om hun check-in in te vullen, en herinneringen op de vaste tijdstippen van hun medicatieschema.",
      },
      {
        q: "Geeft REVA medisch advies aan patiënten?",
        a: "Nee. Observaties in de app zijn informatief en vormen geen medisch advies. Bij medicatie staat expliciet dat de patiënt altijd de arts of apotheker raadpleegt. Het behandeladvies komt van de fysiotherapeut.",
      },
      {
        q: "Kan een patiënt zijn of haar gegevens laten verwijderen?",
        a: "Ja. Een patiënt kan op elk moment het eigen account en de bijbehorende gegevens laten verwijderen, in lijn met de AVG. Op de pagina Account verwijderen staat hoe dat werkt.",
      },
    ],
  },
  {
    id: "implementatie",
    category: "Implementatie en onboarding",
    intro: "Hoe je met REVA start en wat dat van je team vraagt.",
    items: [
      {
        q: "Hoe lang duurt het om REVA in mijn praktijk in te richten?",
        a: "De meeste praktijken hebben REVA snel operationeel, zonder ingewikkeld traject met IT. Je richt je organisatie in, voegt medewerkers en locaties toe en kiest herstelplannen uit je eigen of de REVA-bibliotheek. Daarna nodig je direct je eerste patiënten uit.",
      },
      {
        q: "Heeft mijn team veel training nodig om met REVA te werken?",
        a: "Nee. REVA is bewust eenvoudig opgezet, vergelijkbaar met apps die je team al dagelijks gebruikt. Bij de start begeleiden we je team persoonlijk. In de pakketten Praktijk en Praktijk Plus is persoonlijke onboarding standaard inbegrepen.",
      },
      {
        q: "Kan ik REVA eerst zien voordat ik overstap?",
        a: "Ja. Tijdens een persoonlijke demo laten we REVA zien aan de hand van jouw eigen praktijksituatie, zodat je precies ziet hoe het werkt voor je patiënten en je team. Daarnaast kun je REVA 30 dagen gratis proberen.",
      },
      {
        q: "Moet ik al mijn patiënten tegelijk overzetten?",
        a: "Nee. Veel praktijken beginnen met een groep, bijvoorbeeld nieuwe patiënten na een operatie of de patiënten van één behandelaar, en breiden uit zodra het werkt.",
      },
      {
        q: "Hoe voeg ik medewerkers toe?",
        a: "Je nodigt medewerkers uit per mail en kiest hun rol en locatie. Het aantal medewerkers hangt af van je pakket. Openstaande uitnodigingen tellen mee.",
      },
    ],
  },
  {
    id: "prijzen",
    category: "Prijzen en pakketten",
    intro: "Wat REVA kost en hoe de pakketten werken.",
    items: [
      {
        q: "Wat kost REVA voor mijn praktijk?",
        a: "REVA heeft vijf pakketten: Solo (49 euro per maand) voor de zelfstandige fysiotherapeut, Team (129 euro per maand) voor een kleine praktijk, Praktijk (229 euro per maand) voor een gevestigde praktijk met een vast team, Praktijk Plus (349 euro per maand) voor meerdere locaties en Enterprise (vanaf 699 euro per maand) voor grote praktijken en ketens. Bij jaarlijks betalen krijg je 2 maanden gratis. Alle prijzen zijn exclusief btw.",
      },
      {
        q: "Is er een proefperiode?",
        a: "Ja. Je kunt REVA 30 dagen gratis proberen. Wil je eerst zien hoe REVA werkt in jouw praktijk, dan laten we het je graag zien tijdens een persoonlijke demo.",
      },
      {
        q: "Wat gebeurt er na de proefperiode?",
        a: "Kies je een pakket, dan werk je gewoon door met alles wat je hebt ingericht. Kies je geen pakket, dan kunnen medewerkers niet meer in het praktijkportaal, maar houden patiënten toegang tot hun eigen gegevens.",
      },
      {
        q: "Wat is het pilotprogramma?",
        a: "REVA zoekt 3 praktijken die REVA als eerste gebruiken. Pilotpraktijken krijgen de eerste 6 maanden gratis en daarna 50% korting tot het einde van het eerste contractjaar, met persoonlijke onboarding. Het aanbod geldt voor Solo, Team, Praktijk en Praktijk Plus. In ruil daarvoor vragen we hun feedback en een klantervaring, zodat we REVA samen verder verbeteren. Meer informatie en aanmelden via de pilotpagina.",
      },
      {
        q: "Zijn alle functies inbegrepen in elk pakket?",
        a: "Ja. Er is geen afgeslankte versie: elk pakket geeft toegang tot alle functies van REVA. Het verschil zit in het aantal medewerkers, vestigingen en actieve patiënten, en in support en onboarding.",
      },
      {
        q: "Wat zijn actieve patiënten?",
        a: "Alleen patiënten die op dit moment bij je in behandeling zijn, tellen mee voor je pakket. Patiënten van wie de behandeling is afgerond, tellen niet mee.",
      },
      {
        q: "Wat gebeurt er als ik boven de limiet van mijn pakket kom?",
        a: "Je kunt gewoon doorwerken. We nemen contact met je op over een passend pakket. Alleen nieuwe medewerkers uitnodigen kan niet meer zodra je het maximum van je pakket hebt bereikt.",
      },
      {
        q: "Zitten er verborgen kosten aan REVA?",
        a: "Nee. Elk pakket heeft een vaste maand- of jaarprijs waarin alle functies zijn inbegrepen. Alle prijzen zijn exclusief btw.",
      },
    ],
  },
  {
    id: "privacy",
    category: "Veiligheid en privacy",
    intro: "Hoe REVA omgaat met gezondheidsgegevens.",
    items: [
      {
        q: "Is patiëntdata veilig bij REVA?",
        a: "Ja. Gezondheidsgegevens worden versleuteld opgeslagen op servers binnen de Europese Economische Ruimte en nooit gedeeld of verkocht aan derden. Tweestapsverificatie is verplicht voor alle medewerkers van de praktijk.",
      },
      {
        q: "Is REVA AVG-proof, en is er een verwerkersovereenkomst?",
        a: "Ja. Jouw praktijk blijft verwerkingsverantwoordelijke voor de gegevens van je patiënten, en REVA treedt op als verwerker op basis van een verwerkersovereenkomst die aansluit bij de AVG.",
      },
      {
        q: "Waar worden de gegevens opgeslagen?",
        a: "Op servers binnen de Europese Economische Ruimte. Gegevens worden niet doorgegeven aan landen buiten de EER, tenzij daar passende waarborgen voor zijn getroffen conform de AVG.",
      },
      {
        q: "Wordt bijgehouden wie een dossier inziet?",
        a: "Ja. In het activiteitenlog ziet de praktijkeigenaar wie welk patiëntdossier heeft ingezien, gewijzigd of geëxporteerd, en wanneer. Zo sluit REVA aan bij de norm NEN 7513 voor logging in de zorg.",
      },
      {
        q: "Wie in mijn praktijk kan welke gegevens zien?",
        a: "Dat bepaalt de rol. Fysiotherapeuten zien de patiënten waarmee ze werken, de praktijkeigenaar beheert de organisatie, en de receptie ziet alleen contactgegevens en de agenda. Interne notities over een patiënt zijn alleen zichtbaar voor collega's binnen de praktijk.",
      },
      {
        q: "Hoe log ik veilig in als medewerker?",
        a: "Met je wachtwoord en een code uit een authenticator-app op je telefoon. Die tweestapsverificatie is verplicht voor medewerkers van de praktijk en wordt afgedwongen in de database zelf, dus niet alleen op het inlogscherm.",
      },
    ],
  },
];
