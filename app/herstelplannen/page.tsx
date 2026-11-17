import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { OG_IMAGES } from "@/lib/og";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FactsBox, LandingClosingCta, LandingFaq, SectionIntro } from "@/components/landing/Landing";
import { JsonLd, breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { injuryPages, planDisclaimer, plans, planSpan, regions } from "@/lib/herstelplannen";
import { REVA_LIBRARY } from "@/lib/features";
import { pageDates } from "@/lib/page-dates";

const PATH = "/herstelplannen";
const URL = `https://www.reva-app.nl${PATH}`;
const TITLE = "Herstelplannen fysiotherapie: ruim 40 plannen in fases";
const DESCRIPTION =
  "Ruim 40 herstelplannen voor fysiotherapeuten, van voorste kruisband en knieprothese tot lage rug en achillespees: in fases, met criteria en testen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["herstelplannen fysiotherapie", "revalidatieprotocol fysiotherapie", "herstelplan blessure", "behandelplan fysiotherapie fases", "revalidatie na operatie"],
  openGraph: { images: OG_IMAGES, title: TITLE, description: DESCRIPTION, locale: "nl_NL", type: "website", url: URL },
  alternates: { canonical: URL },
};

const pageFor = (category: string) => injuryPages.find((p) => p.categories.includes(category));

const facts = [
  `REVA bevat ${plans.length} herstelplannen voor fysiotherapeuten, ingedeeld in fases met per fase een doel, criteria, mijlpalen en activiteiten die nog niet mogen.`,
  "De plannen gaan van operaties zoals een voorste-kruisbandreconstructie, knie- en heupprothese tot sportblessures, peesklachten, rugklachten en bekkenklachten.",
  `Daarnaast bevat REVA ${REVA_LIBRARY.exercises} oefeningen en ${REVA_LIBRARY.tests} tests, zodat je bij elk plan een oefenschema en objectieve metingen hebt.`,
  "Je filtert de plannen op blessure, kopieert ze naar je eigen bibliotheek en past ze aan. Je kunt ook je eigen herstelplannen maken, met een eigen eerste fase.",
];

const faq = [
  {
    q: "Hoeveel herstelplannen heeft REVA?",
    a: `REVA bevat ${plans.length} herstelplannen, onder andere voor de voorste kruisband, knie- en heupprothese, meniscus, enkel, achillespees, schouder, lage rug, hamstring, lies en lopersknie.`,
  },
  {
    q: "Kan ik de herstelplannen aanpassen?",
    a: "Ja. Je kopieert een plan naar je eigen bibliotheek en past de fases, criteria, mijlpalen en oefenschema's aan op je eigen werkwijze. Je kunt ook helemaal zelf een herstelplan maken.",
  },
  {
    q: "Zijn de herstelplannen klinisch getoetst?",
    a: planDisclaimer,
  },
  {
    q: "Hoe gaat een patiënt naar de volgende fase?",
    a: "Per fase staan criteria. Pas als die behaald zijn, zet de fysiotherapeut de patiënt door naar de volgende fase, met een korte meting bij de overgang. REVA-inzichten kan een fase-overgang voorstellen; de fysiotherapeut beslist.",
  },
];

export default function HerstelplannenPage() {
  return (
    <>
      <JsonLd data={{ ...webPageJsonLd({ url: URL, name: TITLE, description: DESCRIPTION, type: "CollectionPage" }), dateModified: pageDates[PATH] }} />
      <JsonLd data={itemListJsonLd(injuryPages.map((p) => ({ name: p.h1, description: p.description, url: `https://www.reva-app.nl/herstelplannen/${p.slug}` })))} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${URL}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", url: "https://www.reva-app.nl/" }, { name: "Herstelplannen", url: URL }])} />
      <SiteLayout>
        <section className="py-14 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Herstelplannen</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Herstelplannen voor fysiotherapeuten, in fases
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: "#6b7280" }}>
                Je begint niet met een leeg scherm. REVA bevat {plans.length} herstelplannen, van de voorste kruisband tot lage
                rugklachten. Elk plan is opgebouwd in fases met criteria, zodat je patiënt pas verder gaat als hij er klaar voor is.
                Kies een plan, pas het aan en wijs het toe.
              </p>
              <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                Bekijk de herstelplannen in een demo
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </AnimateIn>
          </div>
        </section>

        <FactsBox title="In het kort" facts={facts} path={PATH} />

        {/* Uitgelicht */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro title="Uitgelichte herstelplannen" text="De plannen die fysiotherapeuten het vaakst gebruiken, met per plan de fases, criteria en passende testen." />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {injuryPages.map((p, i) => (
                <AnimateIn key={p.slug} direction="up" delay={i * 40} className="h-full">
                  <li className="h-full">
                    <Link
                      href={`/herstelplannen/${p.slug}`}
                      className="group h-full flex flex-col rounded-2xl border p-5 transition-shadow hover:shadow-md"
                      style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                    >
                      <h3 className="text-base font-semibold mb-1.5 group-hover:text-[#e8632a] transition-colors" style={{ color: "#1a1a1a" }}>
                        Herstelplan {p.label.toLowerCase()}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{p.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#e8632a" }}>
                        Bekijk de fases <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </section>

        {/* Alle plannen per regio */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro title={`Alle ${plans.length} herstelplannen per lichaamsdeel`} text="Per plan zie je het aantal fases en de weekindicatie van de laatste fase." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {regions.map((r) => {
                const list = plans.filter((p) => r.categories.includes(p.category));
                return (
                  <AnimateIn key={r.title} direction="up">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#1a1a1a" }}>{r.title}</h3>
                    <ul className="rounded-2xl border overflow-hidden" style={{ borderColor: "#e8e5df" }}>
                      {list.map((p, i) => {
                        const page = pageFor(p.category);
                        return (
                          <li key={p.name} className="flex items-center justify-between gap-3 px-4 py-3 text-sm" style={{ borderTop: i ? "1px solid #f1ede8" : "none" }}>
                            {page ? (
                              <Link href={`/herstelplannen/${page.slug}`} className="font-medium hover-orange min-w-0" style={{ color: "#1a1a1a" }}>{p.name}</Link>
                            ) : (
                              <span className="min-w-0" style={{ color: "#1a1a1a" }}>{p.name}</span>
                            )}
                            <span className="text-xs shrink-0 tabular-nums" style={{ color: "#9ca3af" }}>
                              {p.phases.length} fases · {planSpan(p)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </AnimateIn>
                );
              })}
            </div>
            <AnimateIn direction="up">
              <p className="mt-10 flex items-start gap-2 text-xs leading-relaxed rounded-xl p-4" style={{ background: "#f8f7f4", color: "#6b7280" }}>
                <Info className="w-4 h-4 shrink-0" style={{ color: "#9ca3af" }} />
                {planDisclaimer}
              </p>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title="Vragen over de herstelplannen" items={faq} />
        <LandingClosingCta
          title="Zie de herstelplannen in REVA"
          text="In een demo van 30 minuten laten we zien hoe je een plan kiest, aanpast en aan een patiënt toewijst."
        />
      </SiteLayout>
    </>
  );
}
