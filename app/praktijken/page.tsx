import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { NL_MAP, projectLatLng } from "@/lib/nl-map";
import { practices } from "@/lib/practices";
import { pilotOffer } from "@/lib/offer";

const URL = "https://www.reva-app.nl/praktijken";

export const metadata: Metadata = {
  title: "Fysiopraktijken die werken met REVA",
  description:
    "Op deze kaart zie je welke fysiotherapiepraktijken in Nederland hun patiënten begeleiden met het patiëntenportaal van REVA.",
  alternates: { canonical: URL },
  // Pas indexeren als er praktijken op de kaart staan
  robots: { index: practices.length > 0, follow: true },
};

export default function PraktijkenPage() {
  const sorted = [...practices].sort((a, b) => a.city.localeCompare(b.city, "nl"));
  const offerOpen = pilotOffer.active && pilotOffer.spotsLeft > 0;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Praktijken", url: URL },
        ])}
      />
      <SiteLayout>
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ color: "#e8632a", background: "#fff3ee" }}
              >
                Praktijken
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Fysiopraktijken die werken met REVA
              </h1>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Deze praktijken begeleiden hun patiënten ook tussen de afspraken door met een eigen
                patiëntenportaal. Staat jouw praktijk hier straks ook?
              </p>
            </AnimateIn>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            {/* Kaart */}
            <AnimateIn direction="up" className="lg:col-span-3">
              <div
                className="relative rounded-2xl border p-6 md:p-10"
                style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
              >
                <svg
                  viewBox={`0 0 ${NL_MAP.width} ${NL_MAP.height}`}
                  className="w-full h-auto max-h-[640px] mx-auto"
                  role="img"
                  aria-label={
                    sorted.length
                      ? `Kaart van Nederland met ${sorted.length} praktijken die REVA gebruiken`
                      : "Kaart van Nederland, nog zonder praktijken"
                  }
                >
                  {NL_MAP.provinces.map((p) => (
                    <path key={p.name} d={p.d} fill="#ffffff" stroke="#e1ddd5" strokeWidth={1.2} strokeLinejoin="round">
                      <title>{p.name}</title>
                    </path>
                  ))}
                  {sorted.map((practice) => {
                    const { x, y } = projectLatLng(practice.lat, practice.lng);
                    return (
                      <g key={`${practice.name}-${practice.city}`}>
                        <circle cx={x} cy={y} r={14} fill="#e8632a" opacity={0.15} />
                        <circle cx={x} cy={y} r={6} fill="#e8632a" stroke="#ffffff" strokeWidth={2.5}>
                          <title>{`${practice.name}, ${practice.city}`}</title>
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {sorted.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                    <div
                      className="rounded-2xl border px-5 py-4 flex items-center gap-3 max-w-xs"
                      style={{ background: "rgba(255,255,255,0.95)", borderColor: "#e8e5df", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                    >
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                        <MapPin className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </span>
                      <p className="text-sm" style={{ color: "#374151" }}>
                        Binnenkort verschijnen hier de eerste praktijken.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </AnimateIn>

            {/* Lijst of lege staat */}
            <AnimateIn direction="up" delay={100} className="lg:col-span-2">
              {sorted.length > 0 ? (
                <div>
                  <h2 className="text-lg font-semibold mb-4" style={{ color: "#1a1a1a" }}>
                    {sorted.length} {sorted.length === 1 ? "praktijk" : "praktijken"}
                  </h2>
                  <ul className="space-y-3">
                    {sorted.map((practice) => (
                      <li
                        key={`${practice.name}-${practice.city}`}
                        className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                        style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                      >
                        <MapPin className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                        <div className="flex-1">
                          <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{practice.name}</p>
                          <p className="text-xs" style={{ color: "#9ca3af" }}>{practice.city}</p>
                        </div>
                        {practice.website && (
                          <a
                            href={practice.website}
                            target="_blank"
                            rel="noopener"
                            aria-label={`Website van ${practice.name}`}
                            className="p-1.5 rounded-lg hover-orange"
                            style={{ color: "#9ca3af" }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-2xl border p-6 md:p-7" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                  <h2 className="text-lg font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                    De kaart is nog leeg
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                    REVA is net gestart. De eerste praktijken die met REVA gaan werken, krijgen hier
                    een eigen plek op de kaart, met een link naar hun website.
                  </p>
                  {offerOpen ? (
                    <PilotOfferBanner stacked />
                  ) : (
                    <Link href="/demo-aanvragen" className="group btn-primary px-5 py-2.5 text-sm">
                      Plan een demo
                      <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  )}
                </div>
              )}
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
