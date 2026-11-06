import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarRange, BarChart3, Users, Palette, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { FeatureDemo } from "@/components/features/FeatureDemo";
import { StoryRow } from "@/components/features/FeatureShowcase";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { REVA_LIBRARY } from "@/lib/features";

const URL = "https://www.reva-app.nl/functies/voor-fysios";

export const metadata: Metadata = {
  title: "REVA voor fysiotherapeuten: overzicht tussen de afspraken",
  description:
    "Zo werkt REVA voor de fysiotherapeut: intake met voorgesteld herstelplan, fases met criteria, signalering van wie aandacht nodig heeft en een compleet dossier voor elk consult.",
  openGraph: {
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
    title: "Een nieuwe patiënt staat binnen een paar minuten klaar",
    text: "Je loopt de intake door: waarvoor de patiënt komt, de blessure en zijde, pijn, zwelling, hulpmiddel, belasting en wat de patiënt weer wil kunnen. REVA zet de aandachtspunten en hersteldoelen op een rij en stelt een passend herstelplan voor. Je patiënt krijgt direct een uitnodiging per mail.",
    demo: "intake" as const,
    link: { href: "/functies#intake", label: "Meer over de intake" },
  },
  {
    eyebrow: "Week 1: het herstelplan",
    title: "Een plan in fases, dat je zelf in de hand houdt",
    text: `Je wijst een herstelplan toe uit je eigen bibliotheek of uit de REVA-bibliotheek met ${REVA_LIBRARY.protocols} voorbeeldplannen. Per fase staan doel, criteria, mijlpalen, educatie en oefenschema's klaar. Pas als alle criteria zijn behaald, zet je de patiënt door naar de volgende fase, met een korte meting erbij.`,
    demo: "herstelplan" as const,
    link: { href: "/functies#herstelplannen", label: "Meer over herstelplannen" },
  },
  {
    eyebrow: "Tussen de afspraken",
    title: "Je ziet wie aandacht nodig heeft, zonder te bellen",
    text: "Je patiënt vult thuis korte check-ins in en logt oefeningen en medicatie. Op je dashboard markeert REVA wie een hoge pijnscore doorgaf, zwelling meldde, een lage dagscore had of weinig actief is. Zo neem je gericht contact op, op het moment dat het ertoe doet.",
    demo: "signalering" as const,
    link: { href: "/functies#signalering", label: "Meer over signalering" },
  },
  {
    eyebrow: "Voor het consult",
    title: "In 30 seconden weet je hoe de week ging",
    text: "Open het dossier en je ziet het verloop van dagscore, pijn, mobiliteit, energie, stemming en slaap, naast foto-updates, medicatie en trainingen. Tijdens het consult pas je oefeningen direct aan, en je patiënt ziet de wijziging meteen in de eigen app.",
    demo: "dossier" as const,
    link: { href: "/functies#dossier", label: "Meer over het dossier" },
  },
  {
    eyebrow: "Tijdens het consult",
    title: "Oefeningen aanpassen terwijl de patiënt er nog is",
    text: "Voeg een oefening toe uit de bibliotheek, pas sets of herhalingen aan of haal een oefening weg. Het schema hoort bij de fase van het herstelplan, met een vaste frequentie per week. Geen losse papiertjes of pdf's meer.",
    demo: "oefeningen" as const,
    link: { href: "/functies#oefeningen", label: "Meer over oefeningen en schema's" },
  },
];

const practiceItems = [
  { icon: CalendarRange, title: "Agenda en ruimtes", text: "Werkroosters, verlof en ruimteverdeling per locatie, met een AI-suggestie.", href: "/functies#agenda" },
  { icon: BarChart3, title: "Praktijkanalyse", text: "Doorlooptijd per blessure, nieuwe patiënten en werkdruk per behandelaar.", href: "/functies#analyse" },
  { icon: Users, title: "Team en rollen", text: "Praktijkeigenaar, fysiotherapeut en receptie, op meerdere locaties.", href: "/functies#team" },
  { icon: Palette, title: "Eigen huisstijl", text: "Logo, kleur en praktijknaam in het portaal, de app en e-mails.", href: "/functies#huisstijl" },
  { icon: ShieldCheck, title: "Veiligheid", text: "Tweestapsverificatie, activiteitenlog (NEN 7513) en Europese servers.", href: "/functies#veiligheid" },
];

const faq = [
  {
    q: "Hoeveel tijd kost REVA mij per patiënt?",
    a: "De intake duurt een paar minuten en een herstelplan wijs je toe uit je bibliotheek. Daarna houdt de patiënt zelf het herstel bij. Voor het consult zie je in een halve minuut hoe de week ging.",
  },
  {
    q: "Kan ik mijn eigen herstelplannen en oefeningen gebruiken?",
    a: `Ja. Je bouwt je eigen bibliotheek met herstelplannen, schema's en oefeningen. De REVA-bibliotheek met ${REVA_LIBRARY.protocols} voorbeeldplannen en ${REVA_LIBRARY.exercises} oefeningen gebruik je als startpunt: je kopieert ze, beoordeelt ze en past ze aan voordat je ze toewijst.`,
  },
  {
    q: "Wanneer markeert REVA een patiënt als aandacht nodig?",
    a: "Bij een pijnscore van 7 of hoger, gemelde zwelling of een lage dagscore in de laatste check-in, en bij weinig activiteit. Je ziet het signaal per patiënt op je dashboard en in de patiëntenlijst.",
  },
  {
    q: "Vervangt REVA mijn EPD?",
    a: "Nee. REVA is een aanvullend patiëntenportaal voor de tijd tussen de behandelingen. Je EPD, agenda- en declaratiesysteem blijf je gewoon gebruiken.",
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
                  Vraag een demo aan
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
            <AnimateIn direction="up" delay={120}>
              <div className="rounded-3xl p-5 sm:p-8 md:p-10" style={{ background: "#f1ede8" }}>
                <div className="max-w-md mx-auto">
                  <FeatureDemo demo="signalering" />
                </div>
              </div>
            </AnimateIn>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                Vraag een demo aan
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
