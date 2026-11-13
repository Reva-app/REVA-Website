import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { ArrowRight, Ruler, Sparkles, BarChart3, Users, Palette, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { PhotoWithDemo } from "@/components/ui/PhotoWithDemo";
import { StoryRow } from "@/components/features/FeatureShowcase";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { REVA_LIBRARY } from "@/lib/features";

const URL = "https://www.reva-app.nl/functies/voor-fysios";

export const metadata: Metadata = {
  title: "REVA voor fysiotherapeuten: overzicht tussen de afspraken",
  description:
    "Zo werkt REVA voor de fysiotherapeut: intake door de patiënt, herstelplannen in fases, testen, zien wie aandacht nodig heeft en een compleet dossier.",
  openGraph: {
    images: OG_IMAGES,
    title: "REVA voor fysiotherapeuten",
    description: "Van intake tot afronding: zo houd je met REVA grip op elke patiënt, ook tussen de afspraken door.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const journey = [
  {
    eyebrow: "Dag 1: de intake",
    title: "Je patiënt vult de intake zelf in, jij rondt af",
    text: "Je nodigt je patiënt uit, of importeert je patiëntenlijst via CSV. Na het inloggen vult de patiënt zelf de intake in de app in: waarvoor hij komt, zijn klachten en wat hij weer wil kunnen. Jij ziet de ingevulde intake bij Aandacht nodig, vult aan en rondt af. REVA zet een intake-inzicht klaar als voorstel. Jij beslist.",
    demo: "intake" as const,
    link: { href: "/functies#intake", label: "Meer over de intake" },
  },
  {
    eyebrow: "Week 1: het herstelplan",
    title: "Een plan in fases, dat je zelf in de hand houdt",
    text: `Je wijst een herstelplan toe uit je eigen bibliotheek of uit de REVA-bibliotheek met ${REVA_LIBRARY.protocols} herstelplannen, te filteren op blessure. Per fase staan criteria, mijlpalen, educatie en verboden activiteiten klaar. Pas als alle criteria zijn behaald, zet je de patiënt door naar de volgende fase, met een korte meting erbij. REVA-inzichten stelt een fase-overgang voor zodra het past; jij beslist.`,
    demo: "herstelplan" as const,
    link: { href: "/functies#herstelplannen", label: "Meer over herstelplannen" },
  },
  {
    eyebrow: "Tussen de afspraken",
    title: "Je ziet wie aandacht nodig heeft, zonder te bellen",
    text: "Je patiënt doet thuis een check-in van ongeveer 30 seconden en logt oefeningen en medicatie. Op je dashboard Mijn patiënten zet REVA in de lijst Aandacht nodig wie hoge pijn of zwelling meldde, een lage dagscore had of weinig actief is. Zo neem je gericht contact op, op het moment dat het ertoe doet.",
    demo: "signalering" as const,
    link: { href: "/functies#signalering", label: "Meer over signalering" },
  },
  {
    eyebrow: "Voor het consult",
    title: "In 30 seconden weet je hoe de week ging",
    text: "Open het dossier en je ziet het verloop van de check-ins, het herstelplan, het schema en de testen, met de laatste foto, medicatie en afspraken van de patiënt. Leg een test vast en je ziet de LSI meteen. Wil je de voortgang delen, dan maak je een voortgangsrapport als PDF.",
    demo: "dossier" as const,
    link: { href: "/functies#dossier", label: "Meer over het dossier" },
  },
  {
    eyebrow: "Tijdens het consult",
    title: "Oefeningen aanpassen terwijl de patiënt er nog is",
    text: "Voeg een oefening toe uit ongeveer 480 REVA-oefeningen of je eigen oefeningen, pas de dosering aan of haal een oefening weg. Je patiënt krijgt een pushmelding bij het nieuwe schema. In de praktijk start je de workoutmodus op volledig scherm en log je de training samen.",
    demo: "oefeningen" as const,
    link: { href: "/functies#oefeningen", label: "Meer over oefeningen en schema's" },
  },
];

const practiceItems = [
  { icon: Ruler, title: "Testen en metingen", text: "36 tests met resultaten in de tijd en LSI, optioneel per fase.", href: "/functies#testen" },
  { icon: Sparkles, title: "REVA-inzichten", text: "Voorstellen voor dosering en fase-overgang. Jij beslist.", href: "/functies#inzichten" },
  { icon: BarChart3, title: "Analyse en rapporten", text: "Uitkomst, behandelduur, therapietrouw en tevredenheid met NPS.", href: "/functies#analyse" },
  { icon: Users, title: "Team, locaties en import", text: "Praktijkeigenaar en fysiotherapeut, patiënten importeren via CSV.", href: "/functies#team" },
  { icon: Palette, title: "Eigen huisstijl", text: "Logo en kleur in portaal, patiëntenapp, e-mails en pushmeldingen.", href: "/functies#huisstijl" },
  { icon: ShieldCheck, title: "Veiligheid", text: "Tweestapsverificatie voor iedereen, activiteitenlog (NEN 7513) en Europese servers.", href: "/functies#veiligheid" },
];

const faq = [
  {
    q: "Hoeveel tijd kost REVA mij per patiënt?",
    a: "De patiënt vult de intake zelf in; jij vult aan en rondt af. Een herstelplan wijs je toe uit je bibliotheek. Daarna houdt de patiënt zelf het herstel bij. Voor het consult zie je in een halve minuut hoe de week ging.",
  },
  {
    q: "Kan ik mijn eigen herstelplannen en oefeningen gebruiken?",
    a: `Ja. Je bouwt je eigen bibliotheek met herstelplannen, schema's en oefeningen. De REVA-bibliotheek met ${REVA_LIBRARY.protocols} herstelplannen en ${REVA_LIBRARY.exercises} oefeningen gebruik je als startpunt: je kopieert ze, beoordeelt ze en past ze aan voordat je ze toewijst. Eigen oefeningen voeg je toe met je eigen foto of video.`,
  },
  {
    q: "Wanneer markeert REVA een patiënt als aandacht nodig?",
    a: "Bij een pijnscore van 7 of hoger, gemelde zwelling of een lage dagscore in de check-in, bij weinig activiteit en als een patiënt zijn intake heeft ingevuld. Je ziet die patiënten in de lijst Aandacht nodig op je dashboard Mijn patiënten.",
  },
  {
    q: "Beslist de AI zelf?",
    a: "Nee. REVA-inzichten doet voorstellen voor de dosering, een fase-overgang, een samenvatting van de voortgang en een intake-inzicht. Jij past een voorstel met één klik toe of negeert het. REVA stelt geen diagnoses en geeft geen medisch advies.",
  },
  {
    q: "Vervangt REVA mijn EPD?",
    a: "Nee. REVA werkt naast je EPD, zonder koppeling. Agenda, verslaglegging en declaratie blijven daar, dus je voert niets dubbel in. REVA richt zich op het herstel van je patiënten tussen de behandelingen door.",
  },
];

export default function VoorFysiosPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: URL,
          name: "REVA voor fysiotherapeuten",
          description: "Hoe REVA de fysiotherapeut ondersteunt van intake tot afronding.",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${URL}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Functies", url: "https://www.reva-app.nl/functies" },
          { name: "Voor fysio's", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Voor fysiotherapeuten</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Grip op elke patiënt, ook tussen de afspraken door
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                REVA neemt het nabellen, zoeken en losse lijstjes uit handen. Je patiënten houden zelf hun
                herstel bij, en jij ziet wie aandacht nodig heeft en hoe de week ging.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Plan een demo van 30 minuten
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/functies"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Alle functies
                </Link>
              </div>
            </AnimateIn>
            <div className="lg:pl-12 lg:pb-14">
              <PhotoWithDemo src="/beeld/behandelruimte.webp" alt="Lichte behandelruimte van een fysiotherapiepraktijk" demo="signalering" position="40% center" priority />
            </div>
          </div>
        </section>

        {/* Route van een patiënt */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Zo werkt REVA, van intake tot consult
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Volg één patiënt door een week met REVA, en zie wat er voor jou verandert.
              </p>
            </AnimateIn>
            <div className="space-y-20 md:space-y-28">
              {journey.map((j, i) => (
                <StoryRow key={j.title} index={i} {...j} />
              ))}
            </div>
          </div>
        </section>

        {/* Voor de hele praktijk */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                En voor de hele praktijk
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Werk je met een team of meerdere locaties? Dan regelt REVA ook de randzaken.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {practiceItems.map(({ icon: Icon, title, text, href }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 60} className="h-full">
                  <Link href={href} className="group block h-full rounded-2xl border p-5 transition-shadow hover:shadow-md" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                    <Icon className="w-5 h-5 mb-3" style={{ color: "#e8632a" }} />
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Vragen */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Vragen van fysiotherapeuten
              </h2>
              <FaqAccordion items={faq} />
              <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
                Meer vragen?{" "}
                <Link href="/faq" className="font-medium hover-orange" style={{ color: "#e8632a" }}>Bekijk alle veelgestelde vragen</Link>.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Afsluiter */}
        <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Zie het zelf, met jouw patiënten in gedachten
              </h2>
              <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>
                In een demo lopen we deze route door voor jouw praktijk.
              </p>
              <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3 mb-10">
                Plan een demo
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
              <div className="text-left">
                <PilotOfferBanner dark />
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
