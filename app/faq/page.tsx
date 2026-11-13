import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqExplorer } from "@/components/FaqExplorer";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over REVA",
  description:
    "Ruim 40 antwoorden over REVA, het patiëntenportaal voor fysiotherapiepraktijken: functies, implementatie, prijzen, proefperiode, AVG en beveiliging.",
  openGraph: {
    images: OG_IMAGES,
    title: "Veelgestelde vragen over REVA",
    description: "Antwoorden op de meest gestelde vragen over REVA, voor fysiotherapiepraktijken.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/faq",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/faq",
  },
};

const allFaqItems = faqGroups.flatMap((g) => g.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.reva-app.nl/faq#faq",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Veelgestelde vragen", url: "https://www.reva-app.nl/faq" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="pt-16 md:pt-20 pb-10" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4" style={{ color: "#1a1a1a" }}>
                Veelgestelde vragen over REVA
              </h1>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                Antwoorden over het patiëntenportaal voor fysiotherapiepraktijken: wat het doet, hoe je
                start, wat het kost en hoe REVA omgaat met gezondheidsgegevens.
              </p>
            </AnimateIn>
          </div>
        </section>

        <section className="pb-16 md:pb-24 pt-4" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <FaqExplorer groups={faqGroups} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Nog niet alle antwoorden gevonden?
              </h2>
              <p className="mb-6" style={{ color: "#7c7c8a" }}>
                Stel je vraag rechtstreeks aan ons, of plan een demo en ervaar zelf hoe REVA werkt.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                  Plan een demo
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <a href="mailto:info@reva-app.nl" className="btn-dark px-6 py-3 text-sm">
                  Stel je vraag per e-mail
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
