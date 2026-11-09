import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { FeatureDemo } from "@/components/features/FeatureDemo";
import { PhotoWithDemo } from "@/components/ui/PhotoWithDemo";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import type { DemoKey } from "@/lib/features";
import { pilotOffer } from "@/lib/offer";
import { TRIAL_DAYS } from "@/lib/pricing";
import { pageDates } from "@/lib/page-dates";

/**
 * Bouwstenen voor SEO-landingspagina's (/fysiotherapie-software, /alternatief-voor-whatsapp,
 * /oefenprogramma-app). Elke pagina heeft dezelfde opbouw: hero, korte feiten voor lezers en
 * AI-zoekmachines, eigen inhoud, vragen met FAQPage-schema en een afsluitende demo-oproep.
 */

export type FaqItem = { q: string; a: string };

const SITE = "https://www.reva-app.nl";

export function LandingJsonLd({ path, name, description, faq }: { path: string; name: string; description: string; faq: FaqItem[] }) {
  const url = `${SITE}${path}`;
  return (
    <>
      <JsonLd
        data={{
          ...webPageJsonLd({ url, name, description }),
          dateModified: pageDates[path],
          mainEntity: { "@id": `${SITE}/#app` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE}/` },
          { name, url },
        ])}
      />
    </>
  );
}

export function LandingHero({
  eyebrow,
  title,
  lead,
  demo,
  photo,
  secondary = { href: "/prijzen", label: "Bekijk de prijzen" },
}: {
  eyebrow: string;
  title: string;
  lead: string;
  demo: DemoKey;
  /** Sfeerfoto achter de productkaart; zonder foto staat alleen de kaart er */
  photo?: { src: string; alt: string; position?: string };
  secondary?: { href: string; label: string };
}) {
  const offerOpen = pilotOffer.active && pilotOffer.spotsLeft > 0;
  return (
    <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimateIn direction="up">
          <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
            {title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "#6b7280" }}>{lead}</p>
          {offerOpen && (
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
              href={secondary.href}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
              style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
            >
              {secondary.label}
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
        {photo ? (
          <div className="lg:pl-12 lg:pb-14">
            <PhotoWithDemo src={photo.src} alt={photo.alt} position={photo.position} demo={demo} priority />
          </div>
        ) : (
          <AnimateIn direction="up" delay={120}>
            <div className="rounded-3xl p-5 sm:p-8 md:p-10" style={{ background: "#f1ede8" }}>
              <div className="max-w-md mx-auto">
                <FeatureDemo demo={demo} />
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}

export function FactsBox({ title, facts, path }: { title: string; facts: string[]; path: string }) {
  const updated = new Date(pageDates[path] ?? "2026-11-06").toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section className="py-14 md:py-16" style={{ background: "#ffffff" }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up">
          <div className="rounded-2xl border p-6 md:p-8" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#1a1a1a" }}>{title}</h2>
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
  );
}

export function SectionIntro({ title, text }: { title: string; text?: string }) {
  return (
    <AnimateIn direction="up" className="max-w-2xl mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>{title}</h2>
      {text && <p className="text-base" style={{ color: "#6b7280" }}>{text}</p>}
    </AnimateIn>
  );
}

export function LandingFaq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>{title}</h2>
          <FaqAccordion items={items} />
          <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
            Meer vragen?{" "}
            <Link href="/faq" className="font-medium hover-orange" style={{ color: "#e8632a" }}>Bekijk alle veelgestelde vragen</Link>.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

export function LandingClosingCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <AnimateIn direction="up">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">{title}</h2>
          <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>{text}</p>
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
  );
}
