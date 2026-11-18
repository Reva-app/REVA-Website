import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BellRing, CheckCircle, Ban, Info, Ruler, Smartphone, Sparkles } from "lucide-react";
import { OG_IMAGES } from "@/lib/og";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FactsBox, LandingClosingCta, LandingFaq, SectionIntro } from "@/components/landing/Landing";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { getInjuryPage, injuryPages, planDisclaimer, plansFor, planSpan } from "@/lib/herstelplannen";
import { pageDates } from "@/lib/page-dates";
import { priceSentence, TRIAL_DAYS } from "@/lib/pricing";

type Props = { params: Promise<{ blessure: string }> };

const SITE = "https://www.reva-app.nl";

export const dynamicParams = false;

export function generateStaticParams() {
  return injuryPages.map((p) => ({ blessure: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blessure } = await params;
  const page = getInjuryPage(blessure);
  if (!page) return {};
  const url = `${SITE}/herstelplannen/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: { images: OG_IMAGES, title: page.title, description: page.description, locale: "nl_NL", type: "website", url },
    alternates: { canonical: url },
  };
}

export default async function BlessurePage({ params }: Props) {
  const { blessure } = await params;
  const page = getInjuryPage(blessure);
  if (!page) notFound();
  const { main, variants } = plansFor(page);
  const path = `/herstelplannen/${page.slug}`;
  const url = `${SITE}${path}`;
  const others = injuryPages.filter((p) => p.slug !== page.slug);

  const facts = [
    `Het REVA-herstelplan "${main.name}" heeft ${main.phases.length} fases, van ${main.phases[0].weeks.toLowerCase()} tot ${planSpan(main).toLowerCase()}, met per fase een doel, criteria en activiteiten die nog niet mogen.`,
    variants.length
      ? `Daarnaast staan er ${variants.length === 1 ? "een variant" : `${variants.length} varianten`} klaar: ${variants.map((v) => v.name).join("; ")}.`
      : "Je kopieert het plan naar je eigen bibliotheek en past het aan op je eigen werkwijze.",
    `Voortgang meet je met testen uit de REVA-bibliotheek, zoals ${page.tests.slice(0, 3).join(", ")}, met de resultaten en de vergelijking tussen links en rechts in de tijd.`,
    "De patiënt houdt thuis een dagelijkse check-in bij en volgt zijn oefenschema in de app; de fysiotherapeut ziet in de lijst Aandacht nodig wie meer pijn of zwelling meldt.",
  ];

  const faq = [
    ...page.faq,
    {
      q: "Is dit herstelplan klinisch getoetst?",
      a: planDisclaimer,
    },
    {
      q: "Wat kost REVA?",
      a: `${priceSentence} Alle herstelplannen, oefeningen en testen zijn inbegrepen. Je probeert REVA ${TRIAL_DAYS} dagen gratis.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          ...webPageJsonLd({ url, name: page.h1, description: page.description }),
          dateModified: pageDates[path],
          about: { "@type": "Thing", name: page.label },
          audience: { "@type": "BusinessAudience", audienceType: "Fysiotherapiepraktijken" },
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
          { name: "Herstelplannen", url: `${SITE}/herstelplannen` },
          { name: page.label, url },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-14 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <nav aria-label="Kruimelpad" className="text-xs mb-5" style={{ color: "#9ca3af" }}>
                <Link href="/" className="hover-orange">Home</Link>
                <span className="mx-1.5">/</span>
                <Link href="/herstelplannen" className="hover-orange">Herstelplannen</Link>
                <span className="mx-1.5">/</span>
                <span style={{ color: "#6b7280" }}>{page.label}</span>
              </nav>
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Herstelplan voor fysiotherapeuten</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>{page.h1}</h1>
              <div className="space-y-4 text-base md:text-lg leading-relaxed mb-7" style={{ color: "#6b7280" }}>
                {page.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Bekijk dit plan in een demo
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/herstelplannen"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Alle herstelplannen
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        <FactsBox title="In het kort" facts={facts} path={path} />

        {/* Fases */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <SectionIntro title={`De fases van het herstelplan`} text={main.description} />
            <ol className="relative space-y-4">
              {main.phases.map((ph, i) => (
                <AnimateIn key={ph.name} direction="up" delay={i * 50}>
                  <li className="rounded-2xl border p-5 md:p-6" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <h3 className="text-lg font-semibold" style={{ color: "#1a1a1a" }}>{ph.name}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "#fff3ee", color: "#e8632a" }}>{ph.weeks}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{ph.goal}</p>
                    {ph.criteria.length > 0 && (
                      <>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#9ca3af" }}>Criteria voor de volgende fase</p>
                        <ul className="space-y-1.5 mb-4">
                          {ph.criteria.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm" style={{ color: "#1a1a1a" }}>
                              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {ph.forbidden.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-xs font-medium mr-1" style={{ color: "#6b7280" }}>
                          <Ban className="w-3.5 h-3.5" /> Nog niet:
                        </span>
                        {ph.forbidden.map((f) => (
                          <span key={f} className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">{f}</span>
                        ))}
                      </div>
                    )}
                  </li>
                </AnimateIn>
              ))}
            </ol>
            <AnimateIn direction="up">
              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed rounded-xl p-4" style={{ background: "#ffffff", color: "#6b7280", border: "1px solid #e8e5df" }}>
                <Info className="w-4 h-4 shrink-0" style={{ color: "#9ca3af" }} />
                {planDisclaimer}
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Varianten */}
        {variants.length > 0 && (
          <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
            <div className="max-w-4xl mx-auto px-5 md:px-8">
              <SectionIntro title="Andere varianten in REVA" text="Niet elk traject is hetzelfde. Kies het plan dat het best past bij de patiënt en de ingreep, en pas het aan." />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {variants.map((v) => (
                  <li key={v.name} className="rounded-2xl border p-5" style={{ borderColor: "#e8e5df", background: "#f8f7f4" }}>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{v.name}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>{v.description}</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>{v.phases.length} fases · {v.phases.map((ph) => ph.weeks).join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Testen en hoe REVA helpt */}
        <section className="py-16 md:py-24" style={{ background: variants.length ? "#f8f7f4" : "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>Voortgang meten met testen</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                In de testbibliotheek van REVA staan 36 tests. Voor dit herstel passen onder andere deze. Je ziet de resultaten in de tijd en,
                waar het kan, de LSI: de vergelijking tussen links en rechts.
              </p>
              <ul className="flex flex-wrap gap-2">
                {page.tests.map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border" style={{ background: "#ffffff", borderColor: "#e8e5df", color: "#1a1a1a" }}>
                    <Ruler className="w-3.5 h-3.5" style={{ color: "#e8632a" }} /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm">
                <Link href="/functies#testen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>Meer over testen en metingen</Link>
                <span className="mx-2" style={{ color: "#c4c0b8" }}>·</span>
                <Link href="/blog/proms-fysiotherapie-uitkomsten-meten" className="font-medium hover-orange" style={{ color: "#e8632a" }}>Zo meet je uitkomsten met PROMs</Link>
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>Zo begeleid je dit herstel met REVA</h2>
              <ul className="space-y-4">
                {[
                  { icon: Smartphone, title: "De patiënt houdt het thuis bij", text: "Een dagelijkse check-in van ongeveer 30 seconden en het oefenschema in de app, met pijn per oefening." },
                  { icon: BellRing, title: "Jij ziet wie aandacht nodig heeft", text: "Meer pijn, zwelling of weinig activiteit? De patiënt staat bovenaan in de lijst Aandacht nodig." },
                  { icon: Sparkles, title: "Voorstellen voor de volgende stap", text: "REVA-inzichten stelt een fase-overgang of andere dosering voor als het past. Het blijft een voorstel: jij beslist." },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                      <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                    </span>
                    <span>
                      <span className="block text-base font-semibold" style={{ color: "#1a1a1a" }}>{title}</span>
                      <span className="block text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title={`Vragen over het herstelplan ${page.label.toLowerCase()}`} items={faq} />

        {/* Andere herstelplannen */}
        <section className="py-14 md:py-16" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>Andere herstelplannen</h2>
            <ul className="flex flex-wrap gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/herstelplannen/${o.slug}`}
                    className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-[#f1ede8]"
                    style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                  >
                    Herstelplan {o.label.toLowerCase()}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/herstelplannen" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold hover-orange" style={{ color: "#e8632a" }}>
                  Alle herstelplannen <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <LandingClosingCta
          title={`Zie het herstelplan ${page.label.toLowerCase()} in REVA`}
          text="In een demo van 30 minuten laten we zien hoe je het plan kopieert, aanpast en aan een patiënt toewijst, en wat je patiënt in de app ziet."
        />
      </SiteLayout>
    </>
  );
}
