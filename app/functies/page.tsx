import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { FeatureShowcase } from "@/components/features/FeatureShowcase";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/components/seo/JsonLd";
import { featureGroups, features, featuresByGroup, REVA_LIBRARY } from "@/lib/features";

const URL = "https://www.reva-app.nl/functies";

export const metadata: Metadata = {
  title: "Software voor fysiotherapeuten: alle functies van REVA",
  description:
    "Alle functies van REVA: intake, herstelplannen in fases, signalering, patiëntdossier, oefenschema's, agenda en ruimtes, analyse en de patiëntapp met dagelijkse check-in.",
  openGraph: {
    title: "Software voor fysiotherapeuten: alle functies van REVA",
    description: "Zie per functie hoe REVA werkt, voor de fysiotherapeut, de praktijk en de patiënt.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

export default function FunctiesPage() {
  let index = 0;
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: URL,
          name: "Functies van REVA",
          description: "Alle functies van het patiëntenportaal REVA voor fysiotherapiepraktijken.",
          type: "CollectionPage",
        })}
      />
      <JsonLd data={itemListJsonLd(features.map((f) => ({ name: f.title, description: f.lead, url: `${URL}#${f.id}` })))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Functies", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero met inhoudsopgave */}
        <section className="pt-16 md:pt-24 pb-14 md:pb-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Alle functies van REVA, <span style={{ color: "#e8632a" }}>van intake tot afronding</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                REVA is software voor fysiotherapeuten en hun patiënten, naast je EPD. Hieronder zie je per functie wat
                het doet en hoe het eruitziet: voor de fysiotherapeut, voor de praktijk en voor je patiënten.
              </p>
            </AnimateIn>

            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {featureGroups.map((g, gi) => (
                <AnimateIn key={g.id} direction="up" delay={gi * 80} className="h-full">
                  <nav
                    aria-label={g.title}
                    className="h-full rounded-2xl border p-6"
                    style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                  >
                    <a href={`#${g.id}`} className="text-base font-semibold hover-orange" style={{ color: "#1a1a1a" }}>
                      {g.title}
                    </a>
                    <ul className="mt-3 space-y-2">
                      {featuresByGroup(g.id).map((f) => (
                        <li key={f.id}>
                          <a href={`#${f.id}`} className="group flex items-center justify-between gap-2 text-sm hover-orange" style={{ color: "#6b7280" }}>
                            {f.title}
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Functies per groep */}
        {featureGroups.map((g, gi) => (
          <section
            key={g.id}
            id={g.id}
            className="scroll-mt-24 py-16 md:py-24"
            style={{ background: gi % 2 ? "#f8f7f4" : "#ffffff" }}
          >
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <AnimateIn direction="up" className="max-w-2xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                  {g.title}
                </h2>
                <p className="text-base" style={{ color: "#6b7280" }}>{g.intro}</p>
              </AnimateIn>
              <div className="space-y-20 md:space-y-28">
                {featuresByGroup(g.id).map((f) => (
                  <FeatureShowcase key={f.id} feature={f} index={index++} />
                ))}
              </div>

              {g.id === "fysio" && (
                <AnimateIn direction="up" className="mt-20">
                  <div className="rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row gap-5 md:items-center" style={{ background: "#fcfbf9", borderColor: "#e8e5df" }}>
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                      <BookOpen className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1" style={{ color: "#1a1a1a" }}>De REVA-bibliotheek als startpunt</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                        Je begint niet met een leeg scherm. REVA bevat {REVA_LIBRARY.protocols} voorbeeldherstelplannen,
                        van ACL-reconstructie en knieprothese tot enkelverzwikking en hersenschudding, en{" "}
                        {REVA_LIBRARY.exercises} oefeningen. Je kopieert ze naar je eigen bibliotheek, beoordeelt ze
                        en past ze aan op jouw werkwijze voordat je ze aan een patiënt toewijst.
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>
          </section>
        ))}

        {/* Afsluiter */}
        <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Zie REVA in actie, in jouw praktijk
              </h2>
              <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>
                In een demo laten we zien hoe deze functies passen bij jouw patiënten en je team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                  Vraag een demo aan
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <Link href="/prijzen" className="btn-dark px-6 py-3 text-sm">
                  Bekijk prijzen
                </Link>
              </div>
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
