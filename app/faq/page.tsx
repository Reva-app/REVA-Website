import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over REVA",
  description:
    "Antwoorden op de meest gestelde vragen over REVA: wat het patiëntenportaal doet, hoe implementatie werkt, wat het kost en hoe REVA omgaat met patiëntdata.",
  openGraph: {
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
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Veelgestelde vragen
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Alles wat je wilt weten over REVA
              </h1>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Vind je je vraag over REVA voor jouw praktijk hier niet terug? Neem gerust contact met ons op.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 space-y-12">
            {faqGroups.map((group, gi) => (
              <AnimateIn key={group.category} direction="up" delay={gi * 60}>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#e8632a" }}>
                    {group.category}
                  </h2>
                  <FaqAccordion items={group.items} />
                </div>
              </AnimateIn>
            ))}
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
                  Vraag een demo aan
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
