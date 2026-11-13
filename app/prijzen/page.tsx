import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PricingCalculator } from "@/components/PricingCalculator";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { euro, priceExamples, PRICING, pricingFaq as faq, priceSentence } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Prijzen patiëntenportaal fysiotherapie",
  description:
    "REVA kost €29 per behandelaar per maand incl. btw, vanaf de 10e €23. Onbeperkt patiënten en locaties, alle functies inbegrepen.",
  openGraph: {
    title: "Prijzen patiëntenportaal fysiotherapie",
    description: "€29 per behandelaar per maand incl. btw, vanaf de 10e €23. Onbeperkt patiënten en locaties, alle functies inbegrepen, 30 dagen gratis proberen.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/prijzen",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/prijzen",
  },
};

const includedFeatures = [
  "Mijn patiënten met Aandacht nodig",
  "Dagelijkse check-ins van patiënten",
  "Intake door de patiënt, met intake-inzicht",
  "Ruim 40 herstelplannen in fases",
  "Ongeveer 480 oefeningen en schema's",
  "Testen en metingen, met LSI",
  "REVA-inzichten: AI-suggesties als voorstel",
  "Analyse, rapporten en tevredenheid",
  "Voortgangsrapport als PDF",
  "Eigen huisstijl in portaal en patiëntenapp",
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

// Ingangsdatum van het huidige prijsmodel
const PRICES_VALID_FROM = "2026-11-13";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.reva-app.nl/prijzen#product",
  name: "REVA patiëntenportaal",
  description: `Recovery Management Platform voor fysiotherapiepraktijken: het platform voor herstelbegeleiding tussen de behandelingen door. ${priceSentence}`,
  url: "https://www.reva-app.nl/prijzen",
  // Meerdere verhoudingen (16:9 en 1:1), zoals Google aanbeveelt
  image: ["https://www.reva-app.nl/image-reva-app.png", "https://www.reva-app.nl/logo.png"],
  brand: {
    "@type": "Brand",
    name: "REVA",
  },
  offers: {
    "@type": "Offer",
    name: "REVA per behandelaar",
    price: PRICING.seatPrice,
    priceCurrency: PRICING.currency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: PRICING.seatPrice,
      priceCurrency: PRICING.currency,
      unitText: PRICING.unit,
      valueAddedTaxIncluded: true,
    },
    validFrom: PRICES_VALID_FROM,
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    url: "https://www.reva-app.nl/prijzen",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://www.reva-app.nl/#organization" },
  },
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
              Je betaalt per behandelaar: {euro(PRICING.seatPrice)} per maand, inclusief btw, en vanaf
              de {PRICING.staffelFrom}e behandelaar {euro(PRICING.staffelPrice)}. Onbeperkt patiënten en locaties, alle functies inbegrepen.
              Voor minder dan de prijs van één behandeling per maand begeleid je al je patiënten ook tussen de afspraken door.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <PricingCalculator />
          <div className="mt-10">
            <PilotOfferBanner />
          </div>
        </div>
      </section>

      {/* Rekenvoorbeelden */}
      <section className="py-16 md:py-20 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
              Wat kost REVA voor jouw praktijk?
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              Behandelaar 1 tot en met 9 kosten {euro(PRICING.seatPrice)}, elke behandelaar vanaf de {PRICING.staffelFrom}e kost {euro(PRICING.staffelPrice)}. Zo leidt een extra behandelaar nooit tot een lagere totaalprijs.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={80}>
            <div className="rounded-2xl overflow-hidden border" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <table className="w-full text-sm">
                <caption className="sr-only">Rekenvoorbeelden van de prijs van REVA, inclusief btw</caption>
                <thead>
                  <tr style={{ background: "#f8f7f4" }}>
                    <th scope="col" className="text-left font-semibold px-4 md:px-6 py-4" style={{ color: "#1a1a1a" }}>Behandelaars</th>
                    <th scope="col" className="text-right font-semibold px-4 md:px-6 py-4" style={{ color: "#1a1a1a" }}>Per maand</th>
                    <th scope="col" className="text-right font-semibold px-4 md:px-6 py-4" style={{ color: "#6b7280" }}>Per jaar</th>
                  </tr>
                </thead>
                <tbody>
                  {priceExamples.map((ex) => (
                    <tr key={ex.seats} className="border-t" style={{ borderColor: "#f1ede8" }}>
                      <td className="px-4 md:px-6 py-3.5" style={{ color: "#374151" }}>{ex.seats}</td>
                      <td className="px-4 md:px-6 py-3.5 text-right font-semibold tabular-nums" style={{ color: "#1a1a1a" }}>{euro(ex.monthly)}</td>
                      <td className="px-4 md:px-6 py-3.5 text-right tabular-nums" style={{ color: "#6b7280" }}>{euro(ex.yearly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-center" style={{ color: "#9ca3af" }}>
              Alle bedragen inclusief btw. Per jaar betaal je {PRICING.yearlyMonths} keer de maandprijs.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Full feature set, shared across all tiers */}
      <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              Voor elke behandelaar: het complete platform
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              Geen afgeslankte versie en geen kosten per functie: iedere behandelaar heeft toegang tot alle{" "}
              <Link href="/functies" className="font-medium hover-orange" style={{ color: "#e8632a" }}>functies van REVA</Link>.
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
              Plan een demo en we laten zien hoe REVA werkt naast het EPD van jouw praktijk.
            </p>
            <Link
              href="/demo-aanvragen"
              className="group btn-primary px-6 py-3"
            >
              Plan een demo
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
