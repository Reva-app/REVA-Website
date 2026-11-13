import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, KeyRound, ClipboardCheck, Smartphone, Globe } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { FeatureDemo } from "@/components/features/FeatureDemo";
import { StoryRow } from "@/components/features/FeatureShowcase";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";

const URL = "https://www.reva-app.nl/functies/voor-patienten";

export const metadata: Metadata = {
  title: "Fysio app voor je patiënten: oefeningen en check-ins",
  description:
    "De fysio app voor je patiënten: een eigen app in je huisstijl, met dagelijkse check-in, oefeningen, medicatieherinneringen en inzicht in het eigen herstel.",
  openGraph: {
    images: OG_IMAGES,
    title: "Fysio app voor je patiënten: oefeningen en check-ins",
    description: "Een eigen patiëntenportaal op de telefoon van je patiënt, in de huisstijl van jouw praktijk.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const start = [
  { icon: Mail, title: "Uitnodiging per mail", text: "Je patiënt krijgt een uitnodiging in de huisstijl van je praktijk. Gratis voor de patiënt." },
  { icon: KeyRound, title: "Inloggen en intake", text: "Je patiënt logt in met tweestapsverificatie en vult zelf de intake in. Jij rondt hem af." },
  { icon: ClipboardCheck, title: "Eerste check-in", text: "In ongeveer 30 seconden de eerste check-in ingevuld. Vanaf dan zie jij het verloop." },
];

const experience = [
  {
    eyebrow: "Elke dag",
    title: "Een check-in in ongeveer 30 seconden",
    text: "Je patiënt geeft een dagscore en vult pijn, mobiliteit, energie, slaap, stemming en zwelling in, met een notitie als er iets te melden is. Een pushmelding helpt om het vol te houden.",
    demo: "checkin" as const,
  },
  {
    eyebrow: "Thuis oefenen",
    title: "Het schema van de fysio altijd bij de hand",
    text: "Het schema dat jij klaarzet, staat in de app met uitleg per oefening. In de workoutmodus traint je patiënt oefening voor oefening en logt hij de pijn per oefening. Pas jij het schema aan of start een nieuwe fase, dan krijgt hij een pushmelding.",
    demo: "training" as const,
  },
  {
    eyebrow: "Medicatie",
    title: "Herinneringen op de juiste momenten",
    text: "Je patiënt legt het medicatieschema vast met dosering en tijdstippen en krijgt een herinnering bij elke inname. Jij ziet de laatste medicatie in het dossier, en zo ook het afbouwen van pijnstilling.",
    demo: "medicatie" as const,
  },
  {
    eyebrow: "Motivatie",
    title: "Een doel voor ogen, en zichtbare mijlpalen",
    text: "Eigen doelen zoals weer voetballen of zonder pijn traplopen, met mijlpalen uit het herstelplan. Elke behaalde stap wordt zichtbaar, en dat houdt patiënten gemotiveerd.",
    demo: "doelen" as const,
  },
  {
    eyebrow: "Inzicht",
    title: "Zien dat het herstel vooruitgaat",
    text: "In Mijn herstel ziet je patiënt zijn voortgang, wat hij al heeft bereikt en de resultaten van de testen die jij afneemt. Dat geeft houvast, ook op een mindere dag.",
    demo: "inzicht" as const,
  },
  {
    eyebrow: "Alles op één plek",
    title: "Een eigen dossier en eigen afspraken",
    text: "Brieven, verslagen en foto's van de voortgang staan bij elkaar in het eigen dossier. Je patiënt houdt ook zijn eigen afspraken bij, bijvoorbeeld in het ziekenhuis. De agenda van je praktijk blijft in je EPD.",
    demo: "patientdossier" as const,
  },
];

const faq = [
  {
    q: "Hoe krijgt een patiënt toegang tot REVA?",
    a: "Via de praktijk. De patiënt ontvangt een uitnodiging per mail, logt in met tweestapsverificatie en vult zelf de intake in. Zonder uitnodiging van een praktijk kan een patiënt geen account aanmaken voor jouw praktijk. Voor de patiënt is REVA gratis.",
  },
  {
    q: "Werkt REVA op de telefoon van mijn patiënten?",
    a: "Ja. REVA werkt in de browser op elke telefoon, en je patiënt kan het als app op het beginscherm zetten. De dagelijkse check-in kost ongeveer 30 seconden.",
  },
  {
    q: "Geeft REVA medisch advies aan patiënten?",
    a: "Nee. De informatie in de app is informatief en geen medisch advies. Bij medicatie raadpleegt de patiënt altijd de arts of apotheker. Het advies komt van jou als fysiotherapeut.",
  },
  {
    q: "Kan een patiënt zijn gegevens laten verwijderen?",
    a: "Ja. Een patiënt kan het eigen account en alle bijbehorende gegevens op elk moment laten verwijderen, in lijn met de AVG.",
  },
];

export default function VoorPatientenPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: URL,
          name: "Wat je patiënten met REVA krijgen",
          description: "Het patiëntenportaal van REVA vanuit het perspectief van de patiënt van een aangesloten praktijk.",
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
          { name: "Voor patiënten", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Voor je patiënten</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Een eigen portaal dat je patiënten grip geeft op hun herstel
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                Je patiënten krijgen een persoonlijk hersteldashboard op hun telefoon, in de huisstijl van jouw
                praktijk en gratis voor hen. Zij houden het herstel bij, jij ziet het verloop terug in het dossier.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Plan een demo van 30 minuten
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/functies/voor-fysios"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Wat jij ervan terugziet
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#6b7280" }}>
                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4" style={{ color: "#e8632a" }} /> Als app op het beginscherm</span>
                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" style={{ color: "#e8632a" }} /> In de browser</span>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={120}>
              <div className="relative rounded-3xl overflow-hidden py-10 px-4">
                <Image
                  src="/beeld/thuis-oefenen.webp"
                  alt="Patiënt doet thuis een oefening, met haar telefoon op de oefenmat"
                  fill
                  priority
                  className="object-cover img-reveal"
                  style={{ objectPosition: "55% center" }}
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(24,24,26,0.05), rgba(24,24,26,0.35))" }} />
                <div className="relative animate-float-soft">
                  <FeatureDemo demo="checkin" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Zo start je patiënt */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Zo start je patiënt
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>Geen app zoeken of ingewikkelde installatie. Drie stappen en je patiënt is onderweg.</p>
            </AnimateIn>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {start.map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 80} className="h-full">
                  <li className="h-full rounded-2xl border p-6" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                    <span className="text-sm font-semibold" style={{ color: "#e8632a" }}>Stap {i + 1}</span>
                    <Icon className="w-5 h-5 mt-3 mb-2" style={{ color: "#1a1a1a" }} />
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
                  </li>
                </AnimateIn>
              ))}
            </ol>
          </div>
        </section>

        {/* Wat je patiënt ervaart */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Wat je patiënt in REVA kan
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Alles wat een patiënt tussen de afspraken door bijhoudt, komt automatisch bij jou terecht.
              </p>
            </AnimateIn>
            <div className="space-y-20 md:space-y-28">
              {experience.map((e, i) => (
                <StoryRow key={e.title} index={i} {...e} />
              ))}
            </div>
          </div>
        </section>

        {/* Vragen */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Vragen over de patiëntkant
              </h2>
              <FaqAccordion items={faq} />
              <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
                Wil je zien hoe het portaal er stap voor stap uitziet? Bekijk de{" "}
                <Link href="/documentatie" className="font-medium hover-orange" style={{ color: "#e8632a" }}>documentatie voor patiënten</Link>.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Afsluiter */}
        <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Bied je patiënten een eigen portaal
              </h2>
              <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>
                Ontdek in een demo hoe REVA eruitziet in de huisstijl van jouw praktijk.
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
