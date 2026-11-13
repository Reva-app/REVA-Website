import type { Metadata } from "next";
import {
  LayoutDashboard, ClipboardCheck, CalendarDays,
  Dumbbell, Pill, FolderOpen, BarChart3, HelpCircle, Smartphone,
} from "lucide-react";
import { HomescreenGuide } from "@/components/HomescreenGuide";
import { homescreenSteps } from "@/lib/homescreen";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Handleiding patiëntenportaal REVA",
  description:
    "Handleiding voor het patiëntenportaal van REVA: zo gebruiken patiënten van je fysiopraktijk check-ins, oefeningen, testresultaten en hun dossier.",
  openGraph: {
    title: "Handleiding patiëntenportaal REVA",
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
        heading: "Uitnodiging openen",
        text: "Een patiënt ontvangt van jouw praktijk een uitnodiging per e-mail en maakt een account aan op dashboard.reva-app.nl. Patiënten krijgen alleen toegang via een uitnodiging van hun praktijk, en REVA is voor hen gratis.",
      },
      {
        heading: "Tweestapsverificatie instellen",
        text: "Bij het eerste inloggen stelt de patiënt tweestapsverificatie in met een authenticator-app, zoals Google Authenticator, Microsoft Authenticator of Authy. Dat is verplicht voor iedereen. Is de patiënt zijn telefoon kwijt, dan kan de behandelaar de tweestapsverificatie resetten.",
      },
      {
        heading: "Intake invullen",
        text: "Daarna vult de patiënt zelf de intake in de app in. De fysiotherapeut ziet de ingevulde intake, vult aan waar nodig en rondt hem af. Vanaf dan staan het herstelplan en het schema klaar.",
      },
      {
        heading: "REVA op het beginscherm zetten",
        text: "REVA werkt in de browser. Op iPhone en Android kan de patiënt REVA als app op het beginscherm zetten, zodat het net zo snel opent als een gewone app. Hieronder staat stap voor stap hoe dat werkt.",
      },
    ],
  },
  {
    id: "beginscherm",
    icon: Smartphone,
    title: "REVA op het beginscherm",
    content: [
      {
        heading: "Waarom op het beginscherm?",
        text: "REVA werkt in de browser, zonder App Store of Google Play. Zet je REVA op het beginscherm, dan opent het met één tik, net als een gewone app. Zo is de dagelijkse check-in in ongeveer 30 seconden gedaan.",
      },
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Het eigen herstel in één overzicht",
    content: [
      {
        heading: "Wat de patiënt ziet",
        text: "De patiënt ziet het herstelplan en de fase waarin hij zit, het schema van de fysiotherapeut, zijn doelen en mijlpalen en zijn voortgang. Alles in de huisstijl van jouw praktijk.",
      },
      {
        heading: "Pushmeldingen",
        text: "De patiënt krijgt een pushmelding als herinnering voor de check-in, herinneringen voor de medicatie, en een melding als de fysiotherapeut het schema aanpast of een nieuwe fase start.",
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
        text: "Een dagelijkse check-in is een korte registratie van hoe het gaat: een dagscore, pijn, mobiliteit, energie, slaap, stemming en zwelling, met een notitie als er iets te melden is. Het kost ongeveer 30 seconden.",
      },
      {
        heading: "Waarom elke dag?",
        text: "Door elke dag bij te houden hoe het gaat, ontstaat er een patroon. De fysiotherapeut ziet zo tussen de behandelingen door wie aandacht nodig heeft, bijvoorbeeld bij meer pijn of zwelling.",
      },
    ],
  },
  {
    id: "afspraken",
    icon: CalendarDays,
    title: "Eigen afspraken",
    content: [
      {
        heading: "Afspraken bijhouden",
        text: "Een patiënt houdt zijn eigen afspraken bij, bijvoorbeeld in het ziekenhuis, voor een scan of bij de fysiotherapeut, als onderdeel van zijn herstel.",
      },
      {
        heading: "Geen planning door de praktijk",
        text: "De praktijk plant geen afspraken in REVA. De agenda van de praktijk blijft in het eigen EPD of agendasysteem.",
      },
    ],
  },
  {
    id: "trainingen",
    icon: Dumbbell,
    title: "Trainingen en oefeningen",
    content: [
      {
        heading: "Het schema van de fysiotherapeut",
        text: "De patiënt ziet het schema dat de fysiotherapeut heeft klaargezet, met uitleg per oefening en de dosering: sets, herhalingen, duur en belasting.",
      },
      {
        heading: "Trainen in de workoutmodus",
        text: "In de workoutmodus doorloopt de patiënt de oefeningen een voor een en logt hij per oefening de pijn. Eigen thuisschema's kan de patiënt ook toevoegen.",
      },
    ],
  },
  {
    id: "medicatie",
    icon: Pill,
    title: "Medicatie",
    content: [
      {
        heading: "Medicatie bijhouden",
        text: "Een patiënt voegt medicatie toe met naam, dosering en innametijdstip, krijgt een herinnering bij elke inname en vinkt die af. De fysiotherapeut ziet in het dossier de laatste medicatie, bijvoorbeeld bij het afbouwen van pijnstilling.",
      },
      {
        heading: "Geen medisch advies",
        text: "REVA geeft geen medisch advies over medicatie. Bij vragen raadpleegt de patiënt altijd de arts of apotheker.",
      },
    ],
  },
  {
    id: "dossier",
    icon: FolderOpen,
    title: "Persoonlijk dossier",
    content: [
      {
        heading: "Documenten opslaan",
        text: "Brieven van specialisten, verslagen en andere documenten bewaart de patiënt overzichtelijk in het eigen dossier. Die documenten zijn alleen voor de patiënt zelf zichtbaar.",
      },
      {
        heading: "Wie kan het zien?",
        text: "Gegevens zijn afgeschermd per praktijk: zorgverleners zien alleen patiënten van hun eigen praktijk, en elke inzage in een dossier wordt gelogd. Gegevens worden versleuteld opgeslagen en nooit gedeeld met derden.",
      },
    ],
  },
  {
    id: "analyse",
    icon: BarChart3,
    title: "Mijn herstel",
    content: [
      {
        heading: "Voortgang en wat al bereikt is",
        text: "In Mijn herstel ziet de patiënt zijn voortgang in grafieken en wat hij al heeft bereikt, zoals afgeronde fases en mijlpalen.",
      },
      {
        heading: "Testresultaten",
        text: "Testen die de fysiotherapeut afneemt, zoals een hop test of kracht links en rechts, ziet de patiënt hier terug, met de resultaten in de tijd.",
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
        text: "Ja. REVA werkt in de browser op elke telefoon, en de patiënt kan het als app op het beginscherm van een iPhone of Android-telefoon zetten.",
      },
      {
        heading: "Betaalt een patiënt iets voor REVA?",
        text: "Nee. De REVA-app is gratis voor patiënten van een aangesloten praktijk.",
      },
      {
        heading: "Is REVA geschikt voor alle soorten blessures?",
        text: "Ja. REVA is ontworpen voor patiënten in een herstel- of revalidatietraject: van een knieblessure, enkelblessure of schouderoperatie tot een heupprothese of rugklachten.",
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
  description: "Stap voor stap hoe een patiënt van jouw praktijk met REVA begint: uitnodiging openen, tweestapsverificatie instellen, intake invullen en REVA op het beginscherm zetten.",
  step: gettingStarted.content.map((c) => ({
    "@type": "HowToStep",
    name: c.heading,
    text: c.text,
  })),
};

const homescreenHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "REVA op het beginscherm van je iPhone zetten",
  description: "Zo zet je REVA als app op het beginscherm van een iPhone, via Safari.",
  step: homescreenSteps.ios.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.text })),
};

export default function DocumentatiePage() {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <JsonLd data={homescreenHowTo} />
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
                      {s.id === "beginscherm" && (
                        <div className="mb-6">
                          <HomescreenGuide />
                        </div>
                      )}
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
