// Provinciepagina's onder /fysiotherapie-software/[provincie], voor lokale vindbaarheid
// in Google en AI-zoekmachines. Elke provincie heeft eigen steden, een eigen regionale
// invalshoek en een alinea in de streektaal of het dialect van de regio, met een
// Nederlandse vertaling. De dialectteksten zijn een knipoog; laat ze bij twijfel
// nalezen door iemand uit de regio.

export type City = { name: string; lat: number; lng: number };

export type Province = {
  slug: string;
  /** Naam zoals in de tekst */
  name: string;
  /** Naam in NL_MAP (lib/nl-map.ts) */
  mapName: string;
  /** Hoofdstad van de provincie */
  capital: string;
  /** Belangrijkste steden, grootste eerst */
  cities: City[];
  /** Twee alinea's met de eigen invalshoek van de regio */
  regional: [string, string];
  dialect: {
    /** Naam van de streektaal of het dialect */
    label: string;
    /** BCP 47-taalcode voor het lang-attribuut */
    lang: string;
    text: string;
  };
};

/** Nederlandse vertaling van de dialectalinea (alle dialectteksten vertellen dit) */
export const dialectTranslation =
  "Hoe gaat het met je patiënten als ze na de behandeling weer naar huis gaan? Vaak hoor je dat pas bij de volgende afspraak. Met REVA houden patiënten elke dag kort bij hoe het gaat: pijn, zwelling en of ze hun oefeningen gedaan hebben. Jij ziet in één overzicht wie extra aandacht nodig heeft. Je EPD blijft gewoon zoals het is: geen dubbel werk. Zo blijft de fysiotherapeut dichtbij, ook tussen de behandelingen door.";

export const provinces: Province[] = [
  {
    slug: "groningen",
    name: "Groningen",
    mapName: "Groningen",
    capital: "Groningen",
    cities: [
      { name: "Groningen", lat: 53.219, lng: 6.567 },
      { name: "Hoogezand", lat: 53.161, lng: 6.762 },
      { name: "Veendam", lat: 53.106, lng: 6.879 },
      { name: "Stadskanaal", lat: 52.99, lng: 6.95 },
      { name: "Delfzijl", lat: 53.33, lng: 6.919 },
      { name: "Winschoten", lat: 53.144, lng: 7.035 },
      { name: "Leek", lat: 53.163, lng: 6.376 },
      { name: "Appingedam", lat: 53.321, lng: 6.858 },
    ],
    regional: [
      "In de stad Groningen is het druk in de praktijk: studenten, sporters en patiënten die na een operatie in de stad revalideren. In de Ommelanden, het Oldambt en de Veenkoloniën zijn de afstanden juist groter, en is een extra afspraak voor een patiënt niet altijd makkelijk in te plannen.",
      "Juist dan helpt het om tussen de behandelingen door te zien hoe het gaat. Met REVA doet je patiënt thuis in Delfzijl, Stadskanaal of Leek een korte check-in, en zie jij in je praktijk wie aandacht nodig heeft, zonder te bellen of te appen.",
    ],
    dialect: {
      label: "Gronings",
      lang: "gos",
      text: "Hou gaait t mit dien pazzjenten as ze noa de behandeln weer noar hoes goan? Vaak heurst doar pas wat van bie de volgende ofsproak. Mit REVA holden pazzjenten elke dag kört bie hou t gaait: pien, opzwellen en of ze heur oefens doan hebben. Doe zugst in ain overzicht wel ekstra aandacht neudeg het. Dien EPD blift gewoon zo as t is: gain dubbel waark. Zo blift de fysio dichtbie, ook tussen de behandelns deur.",
    },
  },
  {
    slug: "friesland",
    name: "Friesland",
    mapName: "Fryslân",
    capital: "Leeuwarden",
    cities: [
      { name: "Leeuwarden", lat: 53.201, lng: 5.799 },
      { name: "Drachten", lat: 53.107, lng: 6.099 },
      { name: "Sneek", lat: 53.033, lng: 5.659 },
      { name: "Heerenveen", lat: 52.96, lng: 5.92 },
      { name: "Harlingen", lat: 53.174, lng: 5.423 },
      { name: "Franeker", lat: 53.187, lng: 5.543 },
      { name: "Dokkum", lat: 53.326, lng: 5.999 },
      { name: "Bolsward", lat: 53.064, lng: 5.531 },
    ],
    regional: [
      "Friesland is een provincie van schaatsers, kaatsers en fierljeppers, en van dorpen die ver uit elkaar liggen. Een patiënt uit de Wouden of van de Waddeneilanden komt niet zomaar even langs voor een extra controle na een knie- of enkelblessure.",
      "Met REVA blijf je als fysiotherapeut in Leeuwarden, Drachten, Sneek of Heerenveen toch betrokken. Je patiënt houdt thuis bij hoe het gaat en volgt zijn oefenschema in de app, en jij ziet in één overzicht wie aandacht nodig heeft.",
    ],
    dialect: {
      label: "Frysk",
      lang: "fy",
      text: "Hoe giet it mei dyn pasjinten as se nei de behanneling wer nei hûs ta geane? Faak hearst dat pas by de folgjende ôfspraak. Mei REVA hâlde pasjinten alle dagen koart by hoe't it giet: pine, swolling en oft se harren oefeningen dien hawwe. Do sjochst yn ien oersjoch wa't ekstra omtinken nedich hat. Dyn EPD bliuwt gewoan sa't it is: gjin dûbel wurk. Sa bliuwt de fysioterapeut tichtby, ek tusken de behannelingen troch.",
    },
  },
  {
    slug: "drenthe",
    name: "Drenthe",
    mapName: "Drenthe",
    capital: "Assen",
    cities: [
      { name: "Emmen", lat: 52.785, lng: 6.897 },
      { name: "Assen", lat: 52.993, lng: 6.564 },
      { name: "Hoogeveen", lat: 52.723, lng: 6.477 },
      { name: "Meppel", lat: 52.696, lng: 6.194 },
      { name: "Coevorden", lat: 52.661, lng: 6.741 },
      { name: "Roden", lat: 53.138, lng: 6.432 },
      { name: "Beilen", lat: 52.861, lng: 6.513 },
    ],
    regional: [
      "Drenthe is een provincie van fietsers en wandelaars, met ruime afstanden tussen de dorpen en relatief veel ouderen. Veel patiënten revalideren na een knie- of heupprothese, en een rit naar de praktijk is voor hen niet altijd vanzelfsprekend.",
      "REVA helpt fysiotherapeuten in Emmen, Assen, Hoogeveen en Meppel om die patiënten ook thuis te volgen. De patiënt doet een korte check-in en volgt zijn schema in de app; jij ziet wie meer pijn of zwelling meldt en neemt gericht contact op.",
    ],
    dialect: {
      label: "Drents",
      lang: "drt",
      text: "Hoe gaot het mit oew patiënten as ze nao de behaandeling weer naor huus gaot? Vake heur ie daor pas wat van bij de volgende ofspraok. Mit REVA hoolt patiënten elke dag even bij hoe het gaot: pien, opzetten en of ze heur oefeningen daon hebt. Ie zien in één overzicht wie der wat extra aandacht neudig hef. Oew EPD blef gewoon zoas het is: gien dubbel wark. Zo blef de fysio dichtbij, ok tussen de behaandelingen deur.",
    },
  },
  {
    slug: "overijssel",
    name: "Overijssel",
    mapName: "Overijssel",
    capital: "Zwolle",
    cities: [
      { name: "Enschede", lat: 52.222, lng: 6.893 },
      { name: "Zwolle", lat: 52.516, lng: 6.083 },
      { name: "Deventer", lat: 52.255, lng: 6.164 },
      { name: "Hengelo", lat: 52.266, lng: 6.793 },
      { name: "Almelo", lat: 52.357, lng: 6.662 },
      { name: "Kampen", lat: 52.555, lng: 5.911 },
      { name: "Oldenzaal", lat: 52.313, lng: 6.929 },
      { name: "Rijssen", lat: 52.307, lng: 6.519 },
    ],
    regional: [
      "Van de steden in Twente tot de Sallandse Heuvelrug en de IJsseldelta: Overijssel heeft een sterke verenigingscultuur, met veel voetballers, hardlopers en wielrenners. Een sportblessure of een operatie aan knie of schouder betekent vaak een traject van maanden.",
      "In zo'n traject wil je weten of je patiënt thuis oefent en hoe de knie reageert. Met REVA zien fysiotherapeuten in Enschede, Zwolle, Deventer en Hengelo dat tussen de afspraken door, met herstelplannen in fases en testen die laten zien hoe het been zich ontwikkelt.",
    ],
    dialect: {
      label: "Twents",
      lang: "twd",
      text: "Hoe geet et met oew patiënten as ze nao de behaandeling weer noar hoes gaot? Vake heur ie doar pas wat van bie de volgende ofsproak. Met REVA hold patiënten elke dag effen bie hoe et geet: pien, opzetten en of ze eur oefeningen doan hebt. Ie zeet in één overzicht wee der wat extra aandacht neudig hef. Oew EPD blif gewoon zo as et is: gin dubbel wark. Zo blif de fysio dichte biej, ok tusken de behaandelingen deur.",
    },
  },
  {
    slug: "flevoland",
    name: "Flevoland",
    mapName: "Flevoland",
    capital: "Lelystad",
    cities: [
      { name: "Almere", lat: 52.371, lng: 5.222 },
      { name: "Lelystad", lat: 52.518, lng: 5.471 },
      { name: "Dronten", lat: 52.525, lng: 5.718 },
      { name: "Emmeloord", lat: 52.711, lng: 5.749 },
      { name: "Zeewolde", lat: 52.33, lng: 5.541 },
      { name: "Urk", lat: 52.662, lng: 5.601 },
    ],
    regional: [
      "Flevoland is de jongste provincie van Nederland en groeit snel, met name in Almere en Lelystad. Veel jonge gezinnen, veel sporters en praktijken met een volle agenda. In de Noordoostpolder en rond Dronten liggen de afstanden juist ruimer.",
      "REVA helpt fysiotherapeuten in Almere, Lelystad, Emmeloord en Dronten om overzicht te houden over al hun patiënten. Patiënten loggen zelf hoe het gaat, en de lijst Aandacht nodig laat zien wie je vandaag het best kunt bellen.",
    ],
    dialect: {
      label: "Urkers",
      lang: "nl",
      text: "Hoe gaet et mit joe pasiënten as ze nae de behaandeling weer nae huus gaen? Vaek heur je d'r pas wat van bie de volgende ofspraek. Mit REVA houwen pasiënten elke dag effen bie hoe et gaet: pien, opzetten en of ze eur oefenings daen hebben. Jie zie in één overzicht wie d'r wat extra aandacht neudig hep. Joe EPD blieft gewoon zoas et is: gien dubbel wark. Zo blieft de fysio dichtbie, ok tussen de behaandelings deur.",
    },
  },
  {
    slug: "gelderland",
    name: "Gelderland",
    mapName: "Gelderland",
    capital: "Arnhem",
    cities: [
      { name: "Nijmegen", lat: 51.842, lng: 5.853 },
      { name: "Apeldoorn", lat: 52.211, lng: 5.97 },
      { name: "Arnhem", lat: 51.985, lng: 5.899 },
      { name: "Ede", lat: 52.04, lng: 5.665 },
      { name: "Doetinchem", lat: 51.965, lng: 6.289 },
      { name: "Harderwijk", lat: 52.342, lng: 5.632 },
      { name: "Zutphen", lat: 52.139, lng: 6.196 },
      { name: "Tiel", lat: 51.887, lng: 5.429 },
      { name: "Winterswijk", lat: 51.972, lng: 6.72 },
    ],
    regional: [
      "Gelderland is groot en divers: de Veluwe met zijn wandelaars en mountainbikers, de Achterhoek, het Rivierenland en de stedendriehoek Arnhem, Nijmegen en Apeldoorn. En elk jaar in juli lopen tienduizenden mensen de Vierdaagse, met de blaren en overbelaste knieën die daarbij horen.",
      "Hoe verschillend de regio's ook zijn, de vraag in de praktijk is dezelfde: hoe gaat het met je patiënt als hij weer thuis is? Met REVA zien fysiotherapeuten in Nijmegen, Apeldoorn, Arnhem, Ede en Doetinchem dat tussen de behandelingen door, zonder extra telefoontjes.",
    ],
    dialect: {
      label: "Achterhoeks",
      lang: "act",
      text: "Hoe geet 't met oe patiënten as ze nao de behaandeling weer naor huus gaot? Vake heur ie daor pas wat van bie de volgende afsproak. Met REVA hold patiënten elken dag effen bie hoe 't geet: pien, opzetten en of ze eur oefeningen edaon hebt. Ie zeet in één overzicht wee d'r wat extra aandacht neudig hef. Oe EPD blif gewoon zo as 't is: gin dubbel wark. Zo blif de fysio dichte bie, ok tussen de behaandelingen deur.",
    },
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    mapName: "Utrecht",
    capital: "Utrecht",
    cities: [
      { name: "Utrecht", lat: 52.091, lng: 5.122 },
      { name: "Amersfoort", lat: 52.156, lng: 5.388 },
      { name: "Veenendaal", lat: 52.028, lng: 5.559 },
      { name: "Nieuwegein", lat: 52.029, lng: 5.081 },
      { name: "Zeist", lat: 52.089, lng: 5.233 },
      { name: "Houten", lat: 52.028, lng: 5.168 },
      { name: "IJsselstein", lat: 52.02, lng: 5.043 },
      { name: "Woerden", lat: 52.086, lng: 4.883 },
    ],
    regional: [
      "De provincie Utrecht ligt in het hart van het land, met veel praktijken dicht op elkaar. Utrecht en Amersfoort zijn fietssteden, de Utrechtse Heuvelrug trekt hardlopers en wielrenners, en de agenda's van fysiotherapeuten zitten vol.",
      "In zo'n regio maakt het verschil hoe je patiënten tussen de behandelingen door begeleidt. Met REVA bieden praktijken in Utrecht, Amersfoort, Veenendaal en Zeist een eigen app in hun huisstijl, en zien ze in één overzicht wie aandacht nodig heeft.",
    ],
    dialect: {
      label: "Utrechts",
      lang: "nl",
      text: "Hoe gaat ut mè je patiënte as ze nah de behandeling weer nah huis gaan? Vaak hoor je d'r pas wat van bij de volgende afspraak. Mè REVA houwe je patiënte elke dag effe bij hoe ut gaat: pijn, zwelling en of ze d'r oefeninge gedaan hebbe. Jij zie in één overzicht wie d'r wat extra aandacht nodig heb. Je EPD blijf gewoon zoas ut is: gein dubbel werk. Zo blijf de fysio dichtbij, ook tussen de behandelinge door.",
    },
  },
  {
    slug: "noord-holland",
    name: "Noord-Holland",
    mapName: "Noord-Holland",
    capital: "Haarlem",
    cities: [
      { name: "Amsterdam", lat: 52.37, lng: 4.895 },
      { name: "Haarlem", lat: 52.387, lng: 4.646 },
      { name: "Zaandam", lat: 52.439, lng: 4.826 },
      { name: "Amstelveen", lat: 52.301, lng: 4.864 },
      { name: "Alkmaar", lat: 52.632, lng: 4.749 },
      { name: "Hilversum", lat: 52.223, lng: 5.177 },
      { name: "Hoorn", lat: 52.643, lng: 5.06 },
      { name: "Purmerend", lat: 52.505, lng: 4.959 },
      { name: "Den Helder", lat: 52.959, lng: 4.76 },
    ],
    regional: [
      "Van de drukke praktijken in Amsterdam en Haarlem tot de Kop van Noord-Holland: de verschillen zijn groot. In de stad zitten de agenda's vol en volgen hardlopers een strak schema richting een marathon; in West-Friesland en rond Den Helder rijden patiënten verder voor een afspraak.",
      "REVA past bij allebei. Patiënten in Amsterdam, Haarlem, Alkmaar of Hoorn houden thuis zelf bij hoe het gaat, en de fysiotherapeut ziet in één overzicht wie aandacht nodig heeft, zonder de dag vol te plannen met terugbellen.",
    ],
    dialect: {
      label: "Amsterdams",
      lang: "nl",
      text: "Hoe gaat het met je patiënte as ze na de behandeling weer naar huis gaan? Meestal hoor je d'r pas wat van bij de volgende afspraak. Met REVA houwe je patiënte elke dag effe bij hoe 't gaat: pijn, zwelling en of ze d'r oefeninge gedaan hebbe. Jij ziet in één overzicht wie d'r effe wat extra aandacht nodig heb. Je EPD blijft gewoon zoals 't is: geen dubbel werk, gozer. Zo blijft de fysio dichtbij, ook tussen de behandelinge door.",
    },
  },
  {
    slug: "zuid-holland",
    name: "Zuid-Holland",
    mapName: "Zuid-Holland",
    capital: "Den Haag",
    cities: [
      { name: "Rotterdam", lat: 51.924, lng: 4.478 },
      { name: "Den Haag", lat: 52.07, lng: 4.3 },
      { name: "Leiden", lat: 52.16, lng: 4.497 },
      { name: "Zoetermeer", lat: 52.057, lng: 4.494 },
      { name: "Dordrecht", lat: 51.813, lng: 4.69 },
      { name: "Delft", lat: 52.012, lng: 4.357 },
      { name: "Alphen aan den Rijn", lat: 52.129, lng: 4.656 },
      { name: "Gouda", lat: 52.017, lng: 4.709 },
      { name: "Westland", lat: 51.994, lng: 4.209 },
    ],
    regional: [
      "Zuid-Holland is de dichtstbevolkte provincie van Nederland, met Rotterdam, Den Haag en Leiden als grote steden. Veel voetballers, hockeyers en hardlopers, en praktijken met meerdere behandelaars en vestigingen.",
      "Werk je met een groter team, dan wil je dat iedere collega hetzelfde ziet. In REVA ziet elke fysiotherapeut in Rotterdam, Den Haag, Leiden of Dordrecht hetzelfde dossier en herstelplan, ook bij vakantie of ziekte, en ziet de praktijkeigenaar in de analyse hoe het met de uitkomsten gaat.",
    ],
    dialect: {
      label: "Rotterdams",
      lang: "nl",
      text: "Hoe gaat het met je patiënte as ze na de behandeling weer na huis gaan? Meestal hoor je d'r pas wat van bij de volgende afspraak. Met REVA houwe je patiënte elke dag effe bij hoe 't gaat: pijn, zwelling en of ze d'r oefeninge gedaan hebbe. Jij ziet in één overzicht wie d'r wat extra aandacht nodig heb. Je EPD blijf gewoon zoas 't is: gein dubbel werk. Niet lullen maar poetsen: zo blijf de fysio dichtbij, ook tussen de behandelinge door.",
    },
  },
  {
    slug: "zeeland",
    name: "Zeeland",
    mapName: "Zeeland",
    capital: "Middelburg",
    cities: [
      { name: "Middelburg", lat: 51.499, lng: 3.614 },
      { name: "Vlissingen", lat: 51.443, lng: 3.573 },
      { name: "Goes", lat: 51.504, lng: 3.889 },
      { name: "Terneuzen", lat: 51.336, lng: 3.828 },
      { name: "Zierikzee", lat: 51.65, lng: 3.919 },
      { name: "Hulst", lat: 51.281, lng: 4.052 },
    ],
    regional: [
      "Zeeland bestaat uit eilanden en schiereilanden, verbonden door dammen, bruggen en de Westerscheldetunnel. Veel patiënten wonen een flink eind van de praktijk, en watersporters, fietsers en wandelaars zorgen in het seizoen voor de nodige blessures.",
      "Met REVA blijf je als fysiotherapeut in Middelburg, Vlissingen, Goes of Terneuzen dichtbij, ook als de patiënt aan de andere kant van de Oosterschelde woont. Hij doet thuis een check-in en volgt zijn schema, en jij ziet wie je moet bellen.",
    ],
    dialect: {
      label: "Zeeuws",
      lang: "zea",
      text: "Hoe gaet 't mee je patiënten as ze nae de behandelienge wee nae 'uus gaen? Vee 'oor je d'r pas wat van bie de volgende afspraeke. Mee REVA 'ouwen je patiënten elke dag effen bie 'oe 't gaet: pien, zwellienge en of ze d'r oefenienge gedaen 'ebbe. Je zie in één overzicht wie d'r wat extra aendacht nôdig 'eit. Je EPD blieft gewoon zô as 't is: gin dubbel werk. Zô blieft de fysio dichtebie, ok tussen de behandelienge deur.",
    },
  },
  {
    slug: "noord-brabant",
    name: "Noord-Brabant",
    mapName: "Noord-Brabant",
    capital: "'s-Hertogenbosch",
    cities: [
      { name: "Eindhoven", lat: 51.441, lng: 5.478 },
      { name: "Tilburg", lat: 51.556, lng: 5.091 },
      { name: "Breda", lat: 51.589, lng: 4.776 },
      { name: "'s-Hertogenbosch", lat: 51.697, lng: 5.304 },
      { name: "Helmond", lat: 51.481, lng: 5.661 },
      { name: "Oss", lat: 51.765, lng: 5.518 },
      { name: "Roosendaal", lat: 51.531, lng: 4.465 },
      { name: "Bergen op Zoom", lat: 51.495, lng: 4.29 },
    ],
    regional: [
      "Brabant is de provincie van de sportverenigingen: voetbal, tennis, wielrennen en hardlopen, van Eindhoven tot Bergen op Zoom. En Brabanders hechten aan persoonlijk contact, ook met hun fysiotherapeut.",
      "Dat contact hoeft niet te stoppen als de patiënt de praktijk uitloopt. Met REVA blijven fysiotherapeuten in Eindhoven, Tilburg, Breda en Den Bosch betrokken bij het herstel, met een app in de eigen huisstijl van de praktijk en een overzicht van wie aandacht nodig heeft.",
    ],
    dialect: {
      label: "Brabants",
      lang: "nl",
      text: "Hoe gao't mee oew patiënte as ze nao de behandeling weer nor huis gaon? Meestal heurde gij dor pas iets van bij de volgende afspraak. Mee REVA houwe oew patiënte elke dag efkes bij hoe 't gaot: pijn, zwelling en of ze hun oefeninge gedaon hebbe. Gij ziet in één overzicht wie d'r wa extra aandacht nodig hee. Oewen EPD blijft gewoon zoals 't is: gin dubbel werk. Zo blijft de fysio dichtbij, ok tussen de behandelinge deur. Houdoe!",
    },
  },
  {
    slug: "limburg",
    name: "Limburg",
    mapName: "Limburg",
    capital: "Maastricht",
    cities: [
      { name: "Maastricht", lat: 50.851, lng: 5.691 },
      { name: "Venlo", lat: 51.37, lng: 6.172 },
      { name: "Heerlen", lat: 50.888, lng: 5.98 },
      { name: "Sittard-Geleen", lat: 50.998, lng: 5.869 },
      { name: "Roermond", lat: 51.194, lng: 5.987 },
      { name: "Weert", lat: 51.252, lng: 5.707 },
      { name: "Kerkrade", lat: 50.866, lng: 6.063 },
      { name: "Venray", lat: 51.525, lng: 5.975 },
    ],
    regional: [
      "In het Heuvelland rond Maastricht en Valkenburg fietsen en wandelen het hele jaar door veel mensen, en de klimmen van de Amstel Gold Race trekken wielrenners uit het hele land. Dat geeft knie-, enkel- en rugklachten die om een goed opgebouwd herstel vragen.",
      "Van Zuid-Limburg tot Venlo en Venray: met REVA zien fysiotherapeuten tussen de behandelingen door hoe hun patiënten herstellen. Herstelplannen in fases, een oefenschema in de app en een overzicht van wie aandacht nodig heeft, naast het EPD dat je al gebruikt.",
    ],
    dialect: {
      label: "Limburgs",
      lang: "li",
      text: "Wie geit 't mèt dien patiënte es ze nao de behanjeling weer nao hoes goon? Dèks huurs te dao pas get van bie de volgende aafspraok. Mèt REVA haoje patiënte eder daag kort bie wie 't geit: pien, zwèlling en of ze hun oefeninge gedoon höbbe. Doe zuus in ein euverzich wee get extra aandach neudig haet. Dien EPD blief gewoen wie 't is: gein dubbel wèrk. Zoe blief de fysio dichbie, ouch tösse de behanjelinge door.",
    },
  },
];

export const getProvince = (slug: string) => provinces.find((p) => p.slug === slug);
