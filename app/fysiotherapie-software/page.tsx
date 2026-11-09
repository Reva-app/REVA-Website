import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BellRing, CheckCircle, ClipboardList, Layers, ShieldCheck, Smartphone, Minus } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { PhotoWithDemo } from "@/components/ui/PhotoWithDemo";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { pricingTiers, enterpriseTier, TRIAL_DAYS } from "@/lib/pricing";
import { pilotOffer } from "@/lib/offer";
import { pageDates } from "@/lib/page-dates";

const PATH = "/fysiotherapie-software";
const URL = `https://www.reva-app.nl${PATH}`;
const TITLE = "Fysiotherapie software voor overzicht tussen de behandelingen";
const DESCRIPTION =
  "Fysiotherapie software naast je EPD: patiënten loggen pijn, oefeningen en voortgang, jij ziet wie aandacht nodig heeft. Vanaf 49 euro per maand.";

export const metadata: Metadata = {
  title: "Fysiotherapie software: patiëntenportaal naast je EPD",
  description: DESCRIPTION,
  keywords: [
    "fysiotherapie software",
    "software fysiotherapie",
    "fysio software",
    "praktijksoftware fysiotherapie",
    "software voor fysiotherapeuten",
    "patiëntenportaal fysiotherapie",
  ],
  openGraph: {
    title: "Fysiotherapie software: patiëntenportaal naast je EPD",
    description: "Zie wie aandacht nodig heeft, zonder te bellen. REVA werkt naast je EPD, vanaf 49 euro per maand.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

/** Kernfeiten bovenaan: direct antwoord voor lezers en citeerbaar voor AI-zoekmachines */
const facts = [
  "REVA is fysiotherapie software voor de tijd tussen de behandelingen: patiënten houden zelf pijn, oefeningen, medicatie en voortgang bij, en de praktijk ziet dat terug in één overzicht.",
  "REVA werkt naast je EPD. Dossiervorming, declareren en online afspraken boeken blijven in je eigen systeem.",
  "REVA markeert automatisch patiënten met een pijnscore van 7 of hoger, gemelde zwelling, een lage dagscore of weinig activiteit.",
  `Pakketten van 49 tot 349 euro per maand, Enterprise vanaf ${enterpriseTier.fromMonthly} euro, exclusief btw. Alle functies zitten in elk pakket en je probeert REVA ${TRIAL_DAYS} dagen gratis.`,
];

/** Welke software een praktijk gebruikt, en welke rol REVA daarin heeft */
const softwareTypes: { type: string; what: string; reva: "ja" | "deels" | "nee"; role: string }[] = [
  { type: "EPD", what: "Dossier, anamnese, behandelplan en verslaglegging per behandeling", reva: "nee", role: "Blijft je basis. REVA werkt ernaast en heeft nu geen EPD-koppeling." },
  { type: "Declareren", what: "Behandelingen indienen bij zorgverzekeraars", reva: "nee", role: "Loopt via je EPD of declaratiesoftware." },
  { type: "Agenda", what: "Afspraken plannen en online boeken", reva: "deels", role: "Online boeken blijft in je eigen systeem. REVA regelt werkroosters, verlof en ruimtes per locatie, en toont de afspraken van patiënten in de weekplanning." },
  { type: "Oefenprogramma's", what: "Huiswerkoefeningen samenstellen en meegeven", reva: "ja", role: "Oefenschema's per fase van het herstelplan, met een eigen bibliotheek en de REVA-bibliotheek als startpunt." },
  { type: "Patiëntenportaal", what: "Patiënten volgen tussen de afspraken door", reva: "ja", role: "De kern van REVA: dagelijkse check-ins, signalering, herstelplannen en een app in je huisstijl." },
];

const outcomes = [
  {
    icon: BellRing,
    title: "Je ziet wie aandacht nodig heeft",
    text: "Geen dossiers meer nalopen of wachten tot een patiënt belt. Het dashboard laat zien wie afwijkt van het verwachte herstel.",
    href: "/functies#signalering",
  },
  {
    icon: ClipboardList,
    title: "In 30 seconden voorbereid op het consult",
    text: "Het verloop van pijn, mobiliteit, energie en slaap staat in het dossier, met foto-updates, medicatie en trainingen.",
    href: "/functies#dossier",
  },
  {
    icon: Layers,
    title: "Herstelplannen in fases",
    text: "Per fase een doel, criteria, mijlpalen en oefenschema's. De patiënt gaat pas door als de criteria zijn behaald.",
    href: "/functies#herstelplannen",
  },
  {
    icon: Smartphone,
    title: "Een app in de huisstijl van je praktijk",
    text: "Je patiënten krijgen een eigen portaal met jouw logo en kleur. Een check-in kost ze minder dan een minuut.",
    href: "/functies/voor-patienten",
  },
];

const steps = [
  { title: "Demo van 30 minuten", text: "We lopen REVA door met jouw praktijk in gedachten en kijken welk pakket past." },
  { title: "Praktijk inrichten", text: "Je voegt medewerkers en locaties toe, kiest je huisstijl en zet je eerste herstelplannen klaar. Zonder IT-traject." },
  { title: "Eerste patiënten uitnodigen", text: "Na de intake krijgt de patiënt een uitnodiging per mail. Vanaf de eerste check-in zie je het verloop." },
];

const faq = [
  {
    q: "Wat is fysiotherapie software?",
    a: "Fysiotherapie software is de verzamelnaam voor de systemen waarmee een praktijk zorg, administratie en patiëntcontact organiseert: een EPD, een agenda, software om te declareren, een tool voor oefenprogramma's en een patiëntenportaal. De meeste praktijken combineren een EPD met een of meer aanvullende tools.",
  },
  {
    q: "Welke fysiotherapie software heb ik naast mijn EPD nodig?",
    a: "Het EPD legt vast wat er tijdens de behandeling gebeurt. Voor de tijd daartussen, zoals pijn volgen, oefeningen meegeven en zien wie aandacht nodig heeft, gebruik je een patiëntenportaal zoals REVA. Daarmee vervang je ook het contact via WhatsApp en telefoon.",
  },
  {
    q: "Vervangt REVA mijn EPD?",
    a: "Nee. REVA is een aanvullend patiëntenportaal. Je EPD, declaratie- en agendasysteem blijf je gebruiken. REVA heeft op dit moment geen koppeling met een EPD, de patiëntenlijst kun je wel exporteren als CSV-bestand.",
  },
  {
    q: "Wat kost fysiotherapie software zoals REVA?",
    a: `REVA kost 49 euro per maand voor een zelfstandige fysiotherapeut, 129 euro voor een team tot 5 medewerkers, 229 euro voor 6 tot 10 medewerkers en 349 euro voor 11 tot 20 medewerkers. Enterprise begint bij ${enterpriseTier.fromMonthly} euro per maand. Prijzen zijn exclusief btw, bij jaarlijks betalen krijg je 2 maanden gratis.`,
  },
  {
    q: "Hoe snel kan mijn praktijk met REVA starten?",
    a: "Je hebt geen IT-traject nodig. Na het inrichten van medewerkers, locaties, huisstijl en herstelplannen nodig je direct je eerste patiënten uit. Bij de pakketten Praktijk en hoger hoort persoonlijke onboarding.",
  },
  {
    q: "Is REVA geschikt voor gezondheidsgegevens onder de AVG?",
    a: "Ja. Gegevens staan versleuteld op servers binnen de EU. Je praktijk blijft verwerkingsverantwoordelijke en REVA werkt op basis van een verwerkersovereenkomst. Er is tweestapsverificatie en een activiteitenlog volgens NEN 7513.",
  },
  {
    q: "Werkt REVA op de telefoon van mijn patiënten?",
    a: "Ja. Zowel je patiënten als je team gebruiken REVA via de browser, iOS en Android. Patiënten vullen hun dagelijkse check-in doorgaans in minder dan een minuut in.",
  },
];

const updated = new Date(pageDates[PATH] ?? "2026-11-06").toLocaleDateString("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function RevaRole({ value }: { value: "ja" | "deels" | "nee" }) {
  if (value === "ja")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: "#fff3ee", color: "#e8632a" }}>
        <CheckCircle className="w-3.5 h-3.5" /> In REVA
      </span>
    );
  if (value === "deels")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap bg-gray-100 text-gray-700">
        Deels
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap bg-gray-100 text-gray-500">
      <Minus className="w-3.5 h-3.5" /> Eigen systeem
    </span>
  );
}

export default function FysiotherapieSoftwarePage() {
  return (
    <>
      <JsonLd
        data={{
          ...webPageJsonLd({ url: URL, name: TITLE, description: DESCRIPTION }),
          dateModified: pageDates[PATH],
          mainEntity: { "@id": "https://www.reva-app.nl/#app" },
        }}
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
          { name: "Fysiotherapie software", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Fysiotherapie software</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Fysiotherapie software voor overzicht tussen de behandelingen
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                Je EPD laat zien wat er in de behandelkamer gebeurt. REVA laat zien hoe het je patiënten daarna
                vergaat: wie pijn heeft, wie oefent en wie aandacht nodig heeft, zonder te bellen of te appen.
              </p>
              {pilotOffer.active && pilotOffer.spotsLeft > 0 && (
                <p className="text-sm mb-6" style={{ color: "#1a1a1a" }}>
                  <span className="font-semibold">Pilotprogramma:</span> we zoeken {pilotOffer.spotsTotal} praktijken die REVA als
                  eerste gebruiken: {pilotOffer.short}.{" "}
                  <Link href="/pilot" className="font-medium underline underline-offset-2" style={{ color: "#e8632a" }}>
                    Bekijk de pilot
                  </Link>
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Plan een demo van 30 minuten
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/prijzen"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Bekijk de prijzen
                </Link>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#6b7280" }}>
                {[`${TRIAL_DAYS} dagen gratis proberen`, "Vanaf 49 euro per maand", "Naast je EPD", "Europese servers"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <div className="lg:pl-12 lg:pb-14">
              <PhotoWithDemo src="/image-reva-app.png" alt="Fysiotherapeut bekijkt het patiëntoverzicht van REVA in de praktijk" demo="signalering" priority />
            </div>
          </div>
        </section>

        {/* In het kort */}
        <section className="py-14 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="rounded-2xl border p-6 md:p-8" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#1a1a1a" }}>REVA in het kort</h2>
                <ul className="space-y-3">
                  {facts.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: "#1a1a1a" }}>
                      <CheckCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: "#e8632a" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs" style={{ color: "#9ca3af" }}>Bijgewerkt op {updated}</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Welke software heb je nodig */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Welke fysiotherapie software heeft je praktijk nodig?
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Een fysiopraktijk werkt meestal met vijf soorten software. Geen enkel pakket doet alles even goed.
                Zo zie je waar REVA past, en wat je in je eigen systemen houdt.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <table className="w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                <thead className="hidden md:table-header-group">
                  <tr style={{ background: "#ffffff" }}>
                    <th scope="col" className="text-left font-semibold px-5 py-4 w-1/5" style={{ color: "#6b7280" }}>Soort software</th>
                    <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#6b7280" }}>Waarvoor</th>
                    <th scope="col" className="text-left font-semibold px-5 py-4 w-40" style={{ color: "#6b7280" }}>REVA</th>
                    <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#6b7280" }}>Hoe het samenwerkt</th>
                  </tr>
                </thead>
                <tbody>
                  {softwareTypes.map((row, i) => (
                    <tr key={row.type} className="block md:table-row" style={{ background: i % 2 ? "#fcfbf9" : "#ffffff" }}>
                      <th scope="row" className="block md:table-cell text-left font-semibold px-5 pt-4 md:py-4 align-top" style={{ color: "#1a1a1a" }}>{row.type}</th>
                      <td className="block md:table-cell px-5 pt-1 md:py-4 align-top" style={{ color: "#6b7280" }}>{row.what}</td>
                      <td className="block md:table-cell px-5 pt-3 md:py-4 align-top"><RevaRole value={row.reva} /></td>
                      <td className="block md:table-cell px-5 pt-2 pb-4 md:py-4 align-top" style={{ color: "#1a1a1a" }}>{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-sm" style={{ color: "#6b7280" }}>
                Wil je de vijf soorten uitgebreider vergelijken, met een checklist om te kiezen? Lees{" "}
                <Link href="/blog/software-voor-fysiopraktijken" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  Software voor fysiopraktijken: welke systemen heb je echt nodig?
                </Link>
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Wat het oplevert */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Wat REVA oplevert voor je praktijk
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Minder telefoontjes en appjes, en betere informatie op het moment dat je hem nodig hebt.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map(({ icon: Icon, title, text, href }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 70} className="h-full">
                  <Link
                    href={href}
                    className="group flex flex-col h-full rounded-2xl border p-6 transition-shadow hover:shadow-md"
                    style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#e8632a" }}>
                      Meer hierover
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Zo start je */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Zo start je met REVA
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>Geen implementatietraject van maanden. Drie stappen, en je eerste patiënten doen mee.</p>
            </AnimateIn>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((s, i) => (
                <AnimateIn key={s.title} direction="up" delay={i * 80} className="h-full">
                  <li className="h-full rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-semibold text-white mb-4" style={{ background: "#e8632a" }}>
                      {i + 1}
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.text}</p>
                  </li>
                </AnimateIn>
              ))}
            </ol>
          </div>
        </section>

        {/* Prijzen */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
                Wat kost fysiotherapie software van REVA?
              </h2>
              <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
                Je betaalt naar de grootte van je praktijk. Alle functies zitten in elk pakket, prijzen zijn exclusief btw.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingTiers.map((tier, i) => (
                <AnimateIn key={tier.name} direction="up" delay={i * 60} className="h-full">
                  <div
                    className="h-full rounded-2xl p-6 flex flex-col"
                    style={
                      tier.popular
                        ? { background: "#1c1c1e" }
                        : { background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }
                    }
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#e8632a" }}>{tier.name}</h3>
                    <p className="mb-2">
                      <span className="text-3xl font-bold tracking-tight" style={{ color: tier.popular ? "#ffffff" : "#1a1a1a" }}>&euro;{tier.monthly}</span>
                      <span className="text-sm" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}> / maand</span>
                    </p>
                    <p className="text-sm" style={{ color: tier.popular ? "#c9c9ce" : "#6b7280" }}>{tier.tagline}</p>
                    <p className="mt-3 text-xs" style={{ color: tier.popular ? "#9ca3af" : "#9ca3af" }}>
                      {tier.features.filter((f) => f.includes("medewerker") || f.includes("patiënten")).join(" · ")}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn direction="up" delay={200} className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Meer dan 20 medewerkers of een keten? Enterprise vanaf &euro;{enterpriseTier.fromMonthly} per maand.
                Bij jaarlijks betalen krijg je 2 maanden gratis.
              </p>
              <Link href="/prijzen" className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange shrink-0" style={{ color: "#e8632a" }}>
                Alle pakketten vergelijken
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Veiligheid */}
        <section className="py-14 md:py-16" style={{ background: "#f8f7f4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="flex flex-col md:flex-row gap-6 md:items-center rounded-2xl border p-6 md:p-8" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                  <ShieldCheck className="w-6 h-6" style={{ color: "#e8632a" }} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>Gebouwd voor gezondheidsgegevens</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    Versleutelde opslag op servers binnen de EU, een verwerkersovereenkomst onder de AVG, tweestapsverificatie
                    en een activiteitenlog volgens NEN 7513. Je praktijk blijft eigenaar van de gegevens.{" "}
                    <Link href="/blog/avg-patientdata-fysiopraktijk" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                      Lees meer over de AVG in je praktijk
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Vragen */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Vragen over fysiotherapie software
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
                Zie in 30 minuten of REVA bij je praktijk past
              </h2>
              <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>
                We laten REVA zien met jouw patiënten en werkwijze in gedachten. Daarna probeer je het {TRIAL_DAYS} dagen gratis.
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
