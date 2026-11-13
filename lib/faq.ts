// Veelgestelde vragen, gedeeld door de FAQ-pagina, het FAQ-schema en de Markdown-versie voor AI-agents.
// Antwoorden zijn gebaseerd op hoe het REVA-dashboard werkelijk werkt. Bedragen komen uit lib/pricing.ts.

import { euro, PRICING, priceSentence, TRIAL_DAYS, vatNote, whoCounts, yearlySentence } from "@/lib/pricing";
import { pilotSentence } from "@/lib/offer";

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
        a: "REVA is een Recovery Management Platform voor fysiotherapiepraktijken: het platform voor herstelbegeleiding tussen de behandelingen door. Patiënten houden na een blessure of operatie in de REVA-app hun herstel bij: een dagelijkse check-in, hun oefenschema, medicatie en doelen. De fysiotherapeut ziet in het praktijkportaal wie aandacht nodig heeft, werkt met herstelplannen in fases en volgt de voortgang per patiënt.",
      },
      {
        q: "Wat is een Recovery Management Platform?",
        a: "Een Recovery Management Platform is software voor het begeleiden van herstel tussen de behandelingen door. Het EPD van de praktijk blijft leidend voor agenda, verslaglegging en declaratie. REVA richt zich op wat daar niet in past: hoe het thuis met de patiënt gaat, het herstelplan en de voortgang. REVA is de brug tussen fysiotherapeut en patiënt.",
      },
      {
        q: "Voor wie is REVA bedoeld?",
        a: "REVA is bedoeld voor fysiotherapiepraktijken van elke omvang: van zelfstandige fysiotherapeuten tot praktijken met meerdere behandelaars en vestigingen. Het is vooral waardevol voor praktijken die patiënten begeleiden na een operatie, sportblessure of langdurig hersteltraject, waarbij overzicht en therapietrouw tussen behandelingen door belangrijk zijn.",
      },
      {
        q: "Vervangt REVA mijn bestaande EPD of praktijksoftware?",
        a: "Nee. REVA werkt naast je EPD. Agenda, verslaglegging, administratie en declaraties blijven daar. REVA richt zich op het herstel van je patiënten tussen de behandelingen door: check-ins, herstelplannen, oefeningen, testen en voortgang.",
      },
      {
        q: "Moeten we gegevens dubbel invoeren?",
        a: "Nee. In REVA leg je alleen vast wat over herstel gaat: het herstelplan, de oefeningen, testen en voortgang. Agenda en administratie blijven in je EPD. Je bestaande patiëntenlijst laad je in één keer in via een CSV-bestand.",
      },
      {
        q: "Koppelt REVA met mijn EPD?",
        a: "Nee. REVA werkt naast elk EPD, zonder koppeling. Je patiëntenlijst kun je wel importeren en exporteren als CSV-bestand. Wil je weten wat er in jouw situatie mogelijk is, neem dan contact met ons op.",
      },
      {
        q: "Doet REVA ook agenda of planning?",
        a: "Nee. De agenda en planning van je praktijk blijven in je EPD. REVA plant geen afspraken en geen ruimtes. Een patiënt kan in de app wel zijn eigen afspraken bijhouden, bijvoorbeeld in het ziekenhuis of voor een scan, als onderdeel van zijn herstel.",
      },
      {
        q: "Heeft REVA een chatfunctie?",
        a: "Nee. REVA heeft geen chatfunctie. Patiënten laten via de dagelijkse check-in weten hoe het gaat, en jij ziet in het overzicht wie aandacht nodig heeft. Zo neem je gericht contact op, op een moment dat jou uitkomt.",
      },
      {
        q: "Wat maakt REVA anders dan een algemene fitness- of trainingsapp?",
        a: "Generieke fitnessapps zijn gebouwd voor trainingsschema's, niet voor een hersteltraject onder begeleiding. REVA is ontworpen rond de fases van herstel na een blessure of operatie: het combineert intake, herstelplannen met criteria per fase, testen, pijn- en medicatieregistratie, een dossier en voortgangsanalyse, en de fysiotherapeut kijkt mee.",
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
        a: "Een dashboard Mijn patiënten met de lijst Aandacht nodig, een patiëntdossier, een intake die de patiënt zelf invult, herstelplannen in fases, een oefeningenbibliotheek met schema's per patiënt, testen en metingen, REVA-inzichten met AI-suggesties, analyse en rapporten, een voortgangsrapport als PDF, patiënten importeren via CSV, rollen voor je team en een eigen huisstijl. Op de functiepagina zie je per functie hoe het werkt.",
      },
      {
        q: "Hoe weet ik welke patiënten aandacht nodig hebben?",
        a: "Op je dashboard Mijn patiënten staat de lijst Aandacht nodig. Daarin zet REVA patiënten met een pijnscore van 7 of hoger, gemelde zwelling, een lage dagscore of weinig activiteit, en patiënten die hun intake hebben ingevuld. Op werkdagen krijg je als behandelaar een pushmelding met het aantal, zonder patiëntgegevens.",
      },
      {
        q: "Hoe werkt de intake van een nieuwe patiënt?",
        a: "Je patiënt vult na het inloggen zelf de intake in de app in. Jij ziet de ingevulde intake bij Aandacht nodig, vult aan waar nodig en rondt hem af. REVA zet daarbij een intake-inzicht klaar als voorstel. Jij beslist.",
      },
      {
        q: "Kan ik mijn eigen herstelplannen maken?",
        a: "Ja. Je maakt eigen herstelplannen in fases, en per fase leg je criteria, mijlpalen, educatie en verboden activiteiten vast. Een patiënt gaat pas naar de volgende fase als alle criteria zijn afgevinkt, met een korte meting bij elke overgang. Je kunt een eigen eerste fase instellen, of een REVA-herstelplan kopiëren en aanpassen.",
      },
      {
        q: "Wat zit er in de REVA-bibliotheek?",
        a: "Ruim 40 REVA-herstelplannen, onder andere voor ACL-reconstructie, knieprothese, heupprothese, enkel, hamstring, lies, schouder, achilles, lage rug en lopersknie, ongeveer 480 oefeningen en 36 tests. Ze zijn bedoeld als startpunt: je filtert, kopieert en past ze aan voordat je ze aan een patiënt toewijst. Eigen oefeningen voeg je toe met je eigen foto of video.",
      },
      {
        q: "Kan ik oefeningen aanpassen tijdens een consult?",
        a: "Ja. Je past de dosering per oefening aan (sets, herhalingen, duur en belasting), voegt oefeningen toe of haalt ze weg. De patiënt krijgt een pushmelding en ziet het nieuwe schema direct in de app. In de praktijk kun je ook samen trainen in de workoutmodus op volledig scherm.",
      },
      {
        q: "Kunnen patiënten mijn gegevens of documenten zien, en ik die van hen?",
        a: "Documenten die een patiënt in het eigen dossier bewaart, zijn alleen voor de patiënt zelf. Als fysiotherapeut zie je wat voor het herstel nodig is: de check-ins, het herstelplan, het schema, de testen en onder andere de laatste foto, medicatie en afspraken.",
      },
      {
        q: "Hoe werken testen in REVA?",
        a: "Je kiest uit een bibliotheek van 36 tests en legt per patiënt de resultaten vast. Je ziet de resultaten in de tijd en de LSI, de vergelijking tussen links en rechts. Een test kun je koppelen aan een fase van het herstelplan. De patiënt ziet zijn testresultaten in de app.",
      },
      {
        q: "Beslist de AI in REVA zelf?",
        a: "Nee. REVA-inzichten doet voorstellen, bijvoorbeeld voor de dosering, een fase-overgang, een samenvatting van de voortgang of een intake-inzicht. Het blijft altijd een voorstel: jij beoordeelt het en past het met één klik toe, of je negeert het. REVA-inzichten stelt geen diagnoses en geeft geen medisch advies. Het is inbegrepen in de prijs.",
      },
      {
        q: "Werkt REVA met meerdere behandelaars en vestigingen?",
        a: "Ja. Je richt meerdere locaties in binnen één organisatie en koppelt medewerkers en patiënten aan de juiste behandelaar en locatie. Neemt een collega een patiënt over, dan ziet die hetzelfde dossier en herstelplan. Het aantal locaties is onbeperkt.",
      },
      {
        q: "Welke rollen zijn er voor medewerkers?",
        a: "Er zijn twee rollen: praktijkeigenaar en fysiotherapeut. De praktijkeigenaar beheert onder meer het team, de locaties, de huisstijl, de analyse en het activiteitenlog. Fysiotherapeuten werken met hun patiënten en zien de analyse van hun eigen patiënten.",
      },
      {
        q: "Welke inzichten geeft de analyse?",
        a: "Als praktijkeigenaar zie je een overzicht met KPI's en de vergelijking met de vorige periode, en rapporten over onder andere de uitkomst bij afsluiting, de behandelduur per blessure, de tijd per fase, therapietrouw, testresultaten en tevredenheid (gemiddelde en NPS). Je exporteert de gegevens als CSV. Op maandagochtend krijg je een korte e-mail met de KPI's van de afgelopen week; die kun je uitzetten.",
      },
      {
        q: "Hoe meet REVA de tevredenheid van patiënten?",
        a: "Na afsluiting van de behandeling geeft de patiënt een score met een optionele toelichting. Die is alleen zichtbaar voor je eigen praktijk, in de analyse. Het is geen openbare review en wordt niet op Google geplaatst.",
      },
      {
        q: "Kan ik een voortgangsrapport delen?",
        a: "Ja. Per patiënt maak je een voortgangsrapport als PDF, dat je kunt printen of opslaan.",
      },
      {
        q: "Kan REVA in de huisstijl van mijn praktijk?",
        a: "Ja. Je stelt het logo en de kleur van je praktijk in. Die zie je terug in het praktijkportaal, de app van je patiënten, de inlogschermen, de e-mails en de pushmeldingen.",
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
        a: "Patiënten doen een dagelijkse check-in van ongeveer 30 seconden met een dagscore, pijn, mobiliteit, energie, slaap, stemming en zwelling, met een notitie. Daarnaast volgen ze hun oefenschema in de workoutmodus, houden ze medicatie en eigen afspraken bij, werken ze aan doelen en mijlpalen en bewaren ze documenten in hun dossier. In Mijn herstel zien ze hun voortgang en testresultaten.",
      },
      {
        q: "Hoe nodig ik een patiënt uit voor REVA?",
        a: "Je nodigt een patiënt uit vanuit het praktijkportaal, of je importeert je bestaande patiëntenlijst in één keer via CSV. De patiënt logt in, stelt tweestapsverificatie in en vult zelf de intake in. Patiënten krijgen alleen toegang via een uitnodiging van hun praktijk.",
      },
      {
        q: "Werkt REVA op de telefoon van mijn patiënten?",
        a: "Ja. REVA werkt in de browser op elke telefoon, tablet en computer. Patiënten kunnen REVA als app op het beginscherm van hun telefoon zetten. De dagelijkse check-in kost ongeveer 30 seconden.",
      },
      {
        q: "Krijgen patiënten meldingen?",
        a: "Ja. Patiënten krijgen een pushmelding als herinnering voor de check-in, herinneringen op de vaste tijdstippen van hun medicatieschema, en een melding als de fysiotherapeut het schema aanpast of een nieuwe fase start.",
      },
      {
        q: "Betalen patiënten iets?",
        a: "Nee. De REVA-app is gratis voor patiënten van een aangesloten praktijk. De praktijk betaalt per behandelaar.",
      },
      {
        q: "Geeft REVA medisch advies aan patiënten?",
        a: "Nee. De informatie in de app is informatief en vormt geen medisch advies. Bij medicatie raadpleegt de patiënt altijd de arts of apotheker. Het behandeladvies komt van de fysiotherapeut.",
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
        a: "De meeste praktijken hebben REVA snel operationeel, zonder ingewikkeld traject met IT en zonder koppeling met je EPD. Je stelt je huisstijl in, voegt medewerkers en locaties toe, importeert je patiëntenlijst via CSV en kiest herstelplannen uit je eigen of de REVA-bibliotheek. Daarna nodig je direct je eerste patiënten uit.",
      },
      {
        q: "Heeft mijn team veel training nodig om met REVA te werken?",
        a: "Nee. REVA is bewust eenvoudig opgezet, vergelijkbaar met apps die je team al dagelijks gebruikt. Bij de start krijg je persoonlijke onboarding, en support per e-mail en telefoon.",
      },
      {
        q: "Kan ik REVA eerst zien voordat ik start?",
        a: `Ja. Tijdens een persoonlijke demo laten we REVA zien aan de hand van jouw eigen praktijksituatie, zodat je precies ziet hoe het werkt voor je patiënten en je team. Daarnaast kun je REVA ${TRIAL_DAYS} dagen gratis proberen.`,
      },
      {
        q: "Moet ik al mijn patiënten tegelijk overzetten?",
        a: "Nee. Veel praktijken beginnen met een groep, bijvoorbeeld nieuwe patiënten na een operatie of de patiënten van één behandelaar, en breiden uit zodra het werkt.",
      },
      {
        q: "Hoe voeg ik medewerkers toe?",
        a: "Je nodigt medewerkers uit per mail en kiest hun rol (praktijkeigenaar of fysiotherapeut) en locatie. Iedere medewerker met een account telt als behandelaar voor de prijs.",
      },
    ],
  },
  {
    id: "prijzen",
    category: "Prijzen",
    intro: "Wat REVA kost en hoe de prijs per behandelaar werkt.",
    items: [
      {
        q: "Wat kost REVA voor mijn praktijk?",
        a: `${priceSentence} Alle functies zijn inbegrepen, ook de AI-suggesties. ${yearlySentence}`,
      },
      {
        q: "Wie telt als behandelaar?",
        a: whoCounts,
      },
      {
        q: "Zijn de prijzen inclusief btw?",
        a: `Ja, alle prijzen zijn inclusief btw. Wat je ziet, is wat je betaalt. ${vatNote}`,
      },
      {
        q: "Is er een proefperiode?",
        a: `Ja. Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Wil je eerst zien hoe REVA werkt in jouw praktijk, dan laten we het je graag zien tijdens een persoonlijke demo.`,
      },
      {
        q: "Wat gebeurt er na de proefperiode?",
        a: "Kies je voor REVA, dan werk je gewoon door met alles wat je hebt ingericht. Kies je er niet voor, dan kunnen medewerkers niet meer in het praktijkportaal, maar houden patiënten toegang tot hun eigen gegevens.",
      },
      {
        q: "Wat is het pilotprogramma?",
        a: `${pilotSentence} Je krijgt persoonlijke inrichting en direct contact met de oprichter. In ruil daarvoor vraagt REVA echt gebruik bij minimaal 10 patiënten, twee korte evaluatiegesprekken en een klantervaring. Meer informatie en aanmelden via de pilotpagina.`,
      },
      {
        q: "Zijn alle functies inbegrepen?",
        a: "Ja. Er is geen afgeslankte versie: iedere behandelaar heeft toegang tot alle functies van REVA, ook REVA-inzichten, de eigen huisstijl en de praktijkanalyse.",
      },
      {
        q: "Zit er een limiet op het aantal patiënten of locaties?",
        a: `Nee. Het aantal patiënten en locaties is onbeperkt. Alleen behandelaars tellen: ${euro(PRICING.seatPrice)} per behandelaar per maand, vanaf de ${PRICING.staffelFrom}e ${euro(PRICING.staffelPrice)}.`,
      },
      {
        q: "Zitten er verborgen kosten aan REVA?",
        a: "Nee. Je betaalt een vaste prijs per behandelaar per maand of per jaar, inclusief btw, met alle functies inbegrepen. Voor ketens en afwijkende afspraken maken we een voorstel op maat.",
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
        a: "Ja. Gezondheidsgegevens zijn afgeschermd per praktijk en worden versleuteld opgeslagen op servers binnen de Europese Economische Ruimte. Ze worden nooit gedeeld of verkocht aan derden. Tweestapsverificatie is verplicht voor iedereen, ook voor patiënten.",
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
        q: "Wie kan welke gegevens zien?",
        a: "Zorgverleners zien alleen patiënten van hun eigen praktijk. Fysiotherapeuten werken met hun patiënten, de praktijkeigenaar beheert de organisatie. Interne notities over een patiënt zijn alleen zichtbaar voor collega's binnen de praktijk.",
      },
      {
        q: "Is inloggen veilig?",
        a: "Ja. Tweestapsverificatie is verplicht voor iedereen, voor medewerkers én patiënten. Je logt in met je wachtwoord en een code uit een authenticator-app, zoals Google Authenticator, Microsoft Authenticator of Authy. Is een patiënt zijn telefoon kwijt, dan kan de behandelaar de tweestapsverificatie resetten.",
      },
    ],
  },
];
