import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PricingTable } from "@/components/PricingTable";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pricingTiers } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "REVA heeft vier heldere pakketten: Solo (49 euro per maand), Team (129 euro per maand), Praktijk (349 euro per maand) en Enterprise (vanaf 699 euro per maand). Alle functies inbegrepen, geen verborgen kosten.",
  openGraph: {
    title: "Prijzen",
    description: "Vier heldere pakketten voor fysiotherapiepraktijken, van zelfstandig fysiotherapeut tot praktijk met meerdere vestigingen.",
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
    text: "Je werkt alleen en hebt geen uitgebreid team nodig om toch overzicht te houden over je patiënten. Met ruimte voor 200 patiënten heb je volop tijd om te groeien voordat je aan een groter pakket toe bent.",
  },
  {
    name: "Team",
    price: "129 euro per maand",
    text: "Met twee tot vijf medewerkers werk je samen aan overzicht over tot 750 patiënten. Dit pakket wordt het vaakst gekozen: het past precies bij praktijken die net beginnen te groeien.",
  },
  {
    name: "Praktijk",
    price: "349 euro per maand",
    text: "Vanaf zes medewerkers en meerdere vestigingen komt er meer bij kijken dan software alleen. Daarom krijg je bij dit pakket ook persoonlijke onboarding en prioriteitsondersteuning, zodat een grotere implementatie soepel verloopt.",
  },
  {
    name: "Enterprise",
    price: "vanaf 699 euro per maand",
    text: "Bij 16 medewerkers of meer, en een onbeperkt aantal vestigingen en patiënten, werken we op maat. Je krijgt een vaste accountmanager en maken we afspraken die passen bij de schaal van jouw organisatie.",
  },
];

const faq = [
  {
    q: "Wat kost REVA?",
    a: "REVA heeft vier pakketten: Solo (49 euro per maand), Team (129 euro per maand), Praktijk (349 euro per maand) en Enterprise (vanaf 699 euro per maand). Bij jaarlijkse facturering betaal je het equivalent van 2 maanden gratis. Welk pakket het beste past hangt af van het aantal medewerkers, vestigingen en patiënten in je praktijk.",
  },
  {
    q: "Zijn alle functies inbegrepen, in elk pakket?",
    a: "Ja. Er is geen aparte, afgeslankte versie: elk pakket geeft toegang tot alle functies van REVA. Het verschil tussen de pakketten zit in het aantal medewerkers, vestigingen en patiënten, en in het niveau van support en onboarding.",
  },
  {
    q: "Kan ik maandelijks of jaarlijks betalen?",
    a: "Beide kan. Bij jaarlijkse betaling ontvang je het equivalent van 2 maanden gratis ten opzichte van maandelijks betalen.",
  },
  {
    q: "Wat gebeurt er als mijn praktijk groeit?",
    a: "Je kunt op elk moment overstappen naar een groter pakket. Neem contact met ons op zodra je tegen de grenzen van je huidige pakket aanloopt, dan regelen we de overstap samen.",
  },
  {
    q: "Kan ik REVA eerst zien voordat ik een pakket kies?",
    a: "Ja. Tijdens een persoonlijke demo laten we REVA zien aan de hand van jouw praktijk, zodat je precies weet wat je kunt verwachten voordat je een pakket kiest.",
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
  description: "Patiëntenportaal voor fysiotherapiepraktijken, beschikbaar in vier pakketten.",
  brand: {
    "@type": "Brand",
    name: "REVA",
  },
  offers: pricingTiers.map((tier) => ({
    "@type": "Offer",
    name: `REVA ${tier.name}`,
    price: tier.monthly,
    priceCurrency: "EUR",
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
              <AnimateIn key={t.name} direction="up" delay={i * 80}>
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
              href="/contact"
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
