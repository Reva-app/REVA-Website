import type { Metadata } from "next";
import {
  LayoutDashboard, ClipboardCheck, CalendarDays,
  Dumbbell, Pill, FolderOpen, BarChart3, HelpCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Documentatie",
  description:
    "Een kijkje in het patiëntenportaal van REVA: zo ervaren je patiënten check-ins, afspraken, oefeningen en dossier in de praktijk.",
  openGraph: {
    title: "Documentatie",
    description: "Zo werkt het patiëntenportaal van REVA voor de patiënten van jouw praktijk.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/documentatie",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/documentatie",
  },
};

const sections = [
  {
    id: "aan-de-slag",
    icon: LayoutDashboard,
    title: "Aan de slag",
    content: [
      {
        heading: "Account aanmaken",
        text: "Een patiënt ontvangt van jouw praktijk een uitnodiging en gaat naar dashboard.reva-app.nl om te registreren. Naam, e-mailadres en een wachtwoord zijn voldoende: er is geen creditcard nodig.",
      },
      {
        heading: "Hersteltraject instellen",
        text: "Na het aanmaken van het account vult de patiënt het eigen hersteltraject in: de blessure of operatie, de startdatum en het doel. Op basis daarvan stelt REVA het persoonlijke dashboard samen.",
      },
      {
        heading: "Dashboard inrichten",
        text: "De patiënt voegt de eerste afspraken, medicatie en oefeningen toe. Het dashboard past zich automatisch aan op basis van wat er wordt ingevuld.",
      },
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    content: [
      {
        heading: "Wat ziet een patiënt op het dashboard?",
        text: "Het dashboard toont een dagelijkse samenvatting: de check-in streak, de pijnscore van vandaag, de eerstvolgende afspraak en de herstelvoortgang. Alles in één oogopslag.",
      },
      {
        heading: "Statistieken deze week",
        text: "Het blok 'Deze week' geeft een overzicht van de gemiddelde check-in score, afgeronde trainingen, medicijninnames en behaalde mijlpalen van de patiënt.",
      },
    ],
  },
  {
    id: "check-ins",
    icon: ClipboardCheck,
    title: "Dagelijkse check-ins",
    content: [
      {
        heading: "Wat is een check-in?",
        text: "Een dagelijkse check-in is een korte registratie van hoe een patiënt zich voelt: een score voor pijn, energie en stemming. Het duurt minder dan een minuut.",
      },
      {
        heading: "Waarom dagelijks?",
        text: "Door elke dag bij te houden hoe het gaat, ontstaat er een patroon. Zo wordt zichtbaar op welke dagen het beter gaat, wat het herstel positief of negatief beïnvloedt en hoe de voortgang zich ontwikkelt.",
      },
      {
        heading: "Streak",
        text: "Elke dag dat een patiënt een check-in doet, bouwt die een streak op. De streak motiveert om consistent te blijven bijhouden hoe het gaat.",
      },
    ],
  },
  {
    id: "afspraken",
    icon: CalendarDays,
    title: "Afspraken",
    content: [
      {
        heading: "Afspraken toevoegen",
        text: "Een patiënt voegt afspraken toe via het tabblad 'Afspraken': naam van de zorgverlener, datum en tijdstip, met optioneel een locatie of notitie.",
      },
      {
        heading: "Overzicht",
        text: "Komende en eerdere afspraken staan in chronologische volgorde. De eerstvolgende afspraak verschijnt ook op het dashboard.",
      },
    ],
  },
  {
    id: "trainingen",
    icon: Dumbbell,
    title: "Trainingen en oefeningen",
    content: [
      {
        heading: "Oefeningen bijhouden",
        text: "Een patiënt voegt de oefeningen toe die van de fysiotherapeut zijn meegekregen, en vinkt ze per dag af, eventueel met sets, herhalingen of een notitie.",
      },
      {
        heading: "Voortgang",
        text: "REVA houdt bij hoeveel trainingen per week zijn afgerond. Dit is zichtbaar op het dashboard van de patiënt en in de analyse voor de behandelend fysiotherapeut.",
      },
    ],
  },
  {
    id: "medicatie",
    icon: Pill,
    title: "Medicatie",
    content: [
      {
        heading: "Medicatie toevoegen",
        text: "Een patiënt voegt medicijnen toe met naam, dosering en innametijdstip. REVA onthoudt wanneer wat moet worden ingenomen.",
      },
      {
        heading: "Innames registreren",
        text: "Na elke inname wordt dit afgevinkt. Zo is zichtbaar of het schema is gevolgd, en is in de analyse terug te zien wanneer medicatie nodig was.",
      },
    ],
  },
  {
    id: "dossier",
    icon: FolderOpen,
    title: "Persoonlijk dossier",
    content: [
      {
        heading: "Wat kan een patiënt opslaan?",
        text: "Diagnoses, brieven van specialisten, röntgenfoto's, echo's en andere medische documenten worden overzichtelijk opgeslagen in het persoonlijke dossier. Alles bij elkaar, altijd beschikbaar.",
      },
      {
        heading: "Privacy",
        text: "Het dossier van een patiënt is privé. Alleen de patiënt zelf heeft toegang. Documenten worden versleuteld opgeslagen en nooit gedeeld met derden.",
      },
    ],
  },
  {
    id: "analyse",
    icon: BarChart3,
    title: "Voortgang en analyse",
    content: [
      {
        heading: "Grafieken",
        text: "De analyse toont grafieken van pijnscore, energie en stemming over tijd, zodat patronen zichtbaar worden die in een enkel gesprek makkelijk worden gemist.",
      },
      {
        heading: "Mijlpalen",
        text: "Patiënten stellen mijlpalen in, zoals 'eerste keer lopen zonder kruk' of '10 kilometer fietsen'. REVA markeert de voortgang zodra een mijlpaal wordt behaald.",
      },
    ],
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "Veelgestelde vragen",
    content: [
      {
        heading: "Werkt REVA ook op de telefoon van een patiënt?",
        text: "Ja. REVA werkt als Progressive Web App (PWA) op iPhone en Android. Patiënten kunnen het toevoegen aan hun beginscherm voor een native app-ervaring.",
      },
      {
        heading: "Kan een patiënt de eigen gegevens exporteren?",
        text: "Ja. Een patiënt kan een export maken van check-ins, afspraken en andere gegevens als PDF of CSV, bijvoorbeeld om te delen met de behandelend fysiotherapeut of arts.",
      },
      {
        heading: "Is REVA geschikt voor alle soorten blessures?",
        text: "Ja. REVA is ontworpen voor patiënten in elk hersteltraject, ongeacht het type blessure of operatie: van een knieblessure, enkelblessure of schouderoperatie tot een heupvervanging, rugklachten of herstel na een val of botbreuk.",
      },
      {
        heading: "Wat als een patiënt een probleem heeft?",
        text: "Patiënten en praktijken kunnen contact opnemen via onze contactpagina. We helpen zo snel mogelijk, meestal binnen één werkdag.",
      },
    ],
  },
];

const gettingStarted = sections.find((s) => s.id === "aan-de-slag")!;

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Hoe patiënten aan de slag gaan met REVA",
  description: "Stap voor stap hoe een patiënt van jouw praktijk met REVA begint: account aanmaken, hersteltraject instellen en dashboard inrichten.",
  step: gettingStarted.content.map((c) => ({
    "@type": "HowToStep",
    name: c.heading,
    text: c.text,
  })),
};

export default function DocumentatiePage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Documentatie", url: "https://www.reva-app.nl/documentatie" },
        ])}
      />
      <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Documentatie
            </span>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Zo werkt het portaal voor je patiënten
            </h1>
            <p className="text-base" style={{ color: "#6b7280" }}>
              Een kijkje in wat je patiënten ervaren in hun eigen REVA-portaal, van de eerste
              check-in tot hun dossier en voortgang.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

            {/* Sidebar nav: CSS-only hover, no event handlers */}
            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.id} href={`#${s.id}`} className="nav-link-doc">
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      {s.title}
                    </a>
                  );
                })}
              </div>
            </aside>

            {/* Main content */}
            <div className="md:col-span-3 space-y-12">
              {sections.map((s, si) => {
                const Icon = s.icon;
                return (
                  <AnimateIn key={s.id} direction="up" delay={si * 40}>
                    <div id={s.id} className="scroll-mt-24">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: "#e8e5df" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#fff3ee" }}>
                          <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                        </div>
                        <h2 className="text-xl font-semibold" style={{ color: "#1a1a1a" }}>{s.title}</h2>
                      </div>
                      <div className="space-y-5">
                        {s.content.map((c) => (
                          <div key={c.heading}>
                            <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{c.heading}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{c.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </SiteLayout>
    </>
  );
}
