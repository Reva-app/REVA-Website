import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PricingTable } from "@/components/PricingTable";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { enterpriseTier, pricingTiers, TRIAL_DAYS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Prijzen patiëntenportaal fysiotherapie",
  description:
    "Vijf heldere pakketten voor fysiopraktijken: Solo 49, Team 129, Praktijk 229, Praktijk Plus 349 en Enterprise vanaf 699 euro per maand. 30 dagen gratis proberen.",
  openGraph: {
    title: "Prijzen patiëntenportaal fysiotherapie",
    description: "Vijf heldere pakketten voor fysiotherapiepraktijken, van zelfstandig fysiotherapeut tot keten. Alle functies inbegrepen, 30 dagen gratis proberen.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/prijzen",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/prijzen",
  },
};

const includedFeatures = [
  "Praktijkoverzicht met signalering",
  "Check-ins van patiënten (pijn, energie, stemming)",
  "Afspraken en behandelplan",
  "Herstelplannen en oefeningen",
  "Pijn- en medicatieregistratie",
  "Digitaal patiëntdossier",
  "Voortgangsanalyse met grafieken",
  "Patiëntgegevens en contacten",
  "Behandeldoelen en mijlpalen",
];

const tierExplanations = [
  {
    name: "Solo",
    price: "49 euro per maand",
    text: "Je werkt als zelfstandig fysiotherapeut en wilt toch overzicht over al je patiënten. Met plek voor 200 actieve patiënten heb je volop ruimte om te groeien voordat je aan een groter pakket toe bent.",
  },
  {
    name: "Team",
    price: "129 euro per maand",
    text: "Met twee tot vijf medewerkers en tot twee vestigingen werk je samen aan overzicht over 750 actieve patiënten. Dit pakket wordt het vaakst gekozen: het past bij praktijken die aan het groeien zijn.",
  },
  {
    name: "Praktijk",
    price: "229 euro per maand",
    text: "Voor een gevestigde praktijk met een vast team van zes tot tien medewerkers, tot drie vestigingen en 1.500 actieve patiënten. Met persoonlijke onboarding zet je REVA in één keer goed neer voor het hele team.",
  },
  {
    name: "Praktijk Plus",
    price: "349 euro per maand",
    text: "Werk je met elf tot twintig medewerkers op maximaal vijf locaties, dan komt er meer bij kijken dan software alleen. Je krijgt persoonlijke onboarding en prioriteitsondersteuning, voor tot 3.000 actieve patiënten.",
  },
  {
    name: "Enterprise",
    price: "vanaf 699 euro per maand",
    text: "Meer dan twintig medewerkers of meerdere vestigingen in een keten? Dan maken we een voorstel op maat, met een onbeperkt aantal vestigingen en patiënten, een persoonlijke accountmanager en maatwerkafspraken.",
  },
];

const faq = [
  {
    q: "Wat kost REVA?",
    a: "REVA heeft vijf pakketten: Solo (49 euro per maand), Team (129 euro per maand), Praktijk (229 euro per maand), Praktijk Plus (349 euro per maand) en Enterprise (vanaf 699 euro per maand). Bij jaarlijks betalen krijg je 2 maanden gratis. Welk pakket past, hangt af van het aantal medewerkers, vestigingen en actieve patiënten in je praktijk. Alle prijzen zijn exclusief btw.",
  },
  {
    q: "Kan ik REVA eerst gratis proberen?",
    a: `Ja. Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Wil je eerst zien hoe REVA werkt in jouw praktijk, vraag dan een persoonlijke demo aan.`,
  },
  {
    q: "Zijn alle functies inbegrepen, in elk pakket?",
    a: "Ja. Er is geen aparte, afgeslankte versie: elk pakket geeft toegang tot alle functies van REVA. Het verschil tussen de pakketten zit in het aantal medewerkers, vestigingen en actieve patiënten, en in het niveau van support en onboarding.",
  },
  {
    q: "Wat zijn actieve patiënten?",
    a: "Alleen patiënten die op dit moment bij je in behandeling zijn, tellen mee voor je pakket. Patiënten van wie de behandeling is afgerond, tellen niet mee.",
  },
  {
    q: "Kan ik maandelijks of jaarlijks betalen?",
    a: "Beide kan. Bij jaarlijks betalen krijg je 2 maanden gratis: je betaalt tien keer de maandprijs voor een heel jaar.",
  },
  {
    q: "Zijn de prijzen inclusief btw?",
    a: "Nee. Alle prijzen op deze pagina zijn exclusief btw.",
  },
  {
    q: "Wat gebeurt er als mijn praktijk groeit?",
    a: "Je kunt op elk moment overstappen naar een groter pakket. Neem contact met ons op zodra je tegen de grenzen van je huidige pakket aanloopt, dan regelen we de overstap samen.",
  },
  {
    q: "Is patiëntdata veilig bij REVA?",
    a: "Ja, in elk pakket. Gezondheidsdata wordt versleuteld opgeslagen en REVA werkt op basis van een verwerkersovereenkomst met jouw praktijk.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "REVA patiëntenportaal",
  description: "Patiëntenportaal voor fysiotherapiepraktijken, beschikbaar in vijf pakketten.",
  brand: {
    "@type": "Brand",
    name: "REVA",
  },
  offers: [
    ...pricingTiers.map((tier) => ({ name: tier.name, price: tier.monthly })),
    { name: enterpriseTier.name, price: enterpriseTier.fromMonthly },
  ].map((tier) => ({
    "@type": "Offer",
    name: `REVA ${tier.name}`,
    price: tier.price,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: tier.price,
      priceCurrency: "EUR",
      unitText: "per maand",
      valueAddedTaxIncluded: false,
    },
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    url: "https://www.reva-app.nl/prijzen",
    availability: "https://schema.org/InStock",
  })),
};

export default function PrijzenPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={productJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Prijzen", url: "https://www.reva-app.nl/prijzen" },
        ])}
      />
      <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Prijzen
            </span>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Eenvoudige, transparante prijzen
            </h1>
            <p className="text-base" style={{ color: "#6b7280" }}>
              Kies het pakket dat past bij de grootte van je praktijk. Van zelfstandig
              fysiotherapeut tot praktijk met meerdere vestigingen: elk pakket geeft toegang tot
              alle functies van REVA.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <PricingTable />
        </div>
      </section>

      {/* Why this tier makes sense, per package */}
      <section className="py-16 md:py-20 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
              Welk pakket past bij jouw praktijk?
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tierExplanations.map((t, i) => (
              <AnimateIn
                key={t.name}
                direction="up"
                delay={i * 80}
                className={i === tierExplanations.length - 1 ? "sm:col-span-2" : undefined}
              >
                <div
                  className="h-full rounded-2xl p-6 border"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#e8632a" }}>
                    {t.name} &middot; {t.price}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{t.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature set, shared across all tiers */}
      <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              In elk pakket: het complete REVA-portaal
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              Geen aparte, afgeslankte versie: elk pakket geeft toegang tot alle functies van REVA.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includedFeatures.map((f, i) => (
              <AnimateIn key={f} direction="up" delay={i * 40}>
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                  style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                >
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#16a34a" }} />
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{f}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              Veelgestelde vragen over prijzen
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <AnimateIn key={item.q} direction="up" delay={i * 60}>
                <div
                  className="rounded-2xl p-5 border"
                  style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "#1a1a1a" }}>{item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="up" delay={200} className="mt-8 text-center">
            <p className="text-sm" style={{ color: "#6b7280" }}>
              Nog een vraag?{" "}
              <Link href="/contact" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                Neem contact op
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Klaar om te starten met REVA?
            </h2>
            <p className="mb-6" style={{ color: "#7c7c8a" }}>
              Vraag een demo aan en we helpen je het juiste pakket te kiezen voor jouw praktijk.
            </p>
            <Link
              href="/demo-aanvragen"
              className="group btn-primary px-6 py-3"
            >
              Vraag een demo aan
              <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <p className="mt-4 text-xs" style={{ color: "#52525e" }}>Persoonlijke demo · Geen verplichtingen</p>
          </AnimateIn>
        </div>
      </section>
      </SiteLayout>
    </>
  );
}
