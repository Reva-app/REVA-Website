import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Stethoscope, Code2, Heart, Quote, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Over REVA",
  description:
    "Het verhaal achter REVA: hoe een zware knieblessure tijdens het voetballen leidde tot een persoonlijk herstel dashboard voor iedereen die grip wil op zijn of haar herstel.",
  openGraph: {
    title: "Over REVA",
    description: "Het persoonlijke verhaal achter REVA, ontstaan vanuit een eigen hersteltraject na een zware knieblessure.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/over-reva",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/over-reva",
  },
};

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

const timeline = [
  {
    icon: Activity,
    date: "8 maart",
    title: "De blessure",
    description: "Tijdens het voetballen schiet de knieschijf uit de kom en scheurt de kniepees volledig af.",
  },
  {
    icon: Stethoscope,
    date: "10 maart",
    title: "De operatie",
    description: "Twee dagen later volgt de operatie. Daarna begint het echte werk: het herstel.",
  },
  {
    icon: Code2,
    date: "De weken erna",
    title: "REVA ontstaat",
    description: "Uit de behoefte om herstel nauwkeurig bij te houden, wordt de eerste versie van REVA gebouwd.",
  },
  {
    icon: Heart,
    date: "Vandaag",
    title: "REVA voor iedereen",
    description: "Wat begon als persoonlijk hulpmiddel, is nu een dashboard voor iedereen die grip wil op zijn herstel.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.reva-app.nl/over-reva#aboutpage",
  name: "Over REVA",
  description:
    "Het verhaal achter REVA: ontstaan vanuit een persoonlijk hersteltraject na een zware knieblessure.",
  url: "https://www.reva-app.nl/over-reva",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.reva-app.nl/#person-stef-robberts",
    name: "Stef Robberts",
    jobTitle: "Oprichter van REVA",
    worksFor: {
      "@id": "https://www.reva-app.nl/#organization",
    },
  },
};

export default function OverRevaPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Over REVA", url: "https://www.reva-app.nl/over-reva" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Over REVA
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
                Het verhaal achter REVA
              </h1>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                REVA is niet ontstaan op een tekentafel, maar op de bank tijdens mijn eigen herstel
                van een zware knieblessure. Dit is dat verhaal.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Timeline visual */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden" style={{ background: "#1c1c1e" }}>
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-25 blur-3xl"
                  style={{ background: "#e8632a" }}
                />
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {timeline.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <AnimateIn key={item.title} direction="up" delay={i * 100}>
                        <div>
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                            style={{ background: "rgba(232,99,42,0.15)", border: "1px solid rgba(232,99,42,0.3)" }}
                          >
                            <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#e8632a" }}>
                            {item.date}
                          </p>
                          <h3 className="text-base font-semibold mb-1.5 text-white">{item.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                            {item.description}
                          </p>
                        </div>
                      </AnimateIn>
                    );
                  })}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Narrative */}
        <section className="py-12 md:py-16" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="space-y-8" style={{ color: "#374151", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    8 maart: een zaterdag op het voetbalveld
                  </h2>
                  <p>
                    Op 8 maart stond ik op het voetbalveld, zoals zoveel zaterdagen daarvoor. Een
                    verkeerde beweging, een klap op mijn knie, en ineens lag ik op het gras. Mijn
                    knieschijf was uit de kom geschoten en bij de val had ik mijn volledige kniepees
                    afgescheurd. Binnen een paar seconden veranderde mijn zaterdagmiddag in het begin
                    van een lang hersteltraject.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    De operatie en de eerste weken
                  </h2>
                  <p>
                    Twee dagen later, op dinsdag 10 maart, werd ik geopereerd. De operatie verliep
                    goed, maar ik wist dat het echte werk nog moest beginnen. Ik ben iemand die
                    graag alles piekfijn in de gaten houdt, dus ik wilde mijn herstel heel
                    nauwkeurig gaan bijhouden: hoe mijn pijn zich ontwikkelde, welke oefeningen ik
                    deed, wanneer ik medicatie nam en hoe mijn knie er letterlijk uitzag naarmate de
                    weken vorderden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Waarom bestaande apps niet volstonden
                  </h2>
                  <p>
                    Al snel merkte ik dat daar eigenlijk geen goede, complete app voor bestond. Er
                    waren losse appjes voor stappen tellen, een notitieapp voor mijn oefeningen, een
                    fotomap voor mijn knie en een agenda voor mijn afspraken. Niets bracht het
                    samen. Dus besloot ik het zelf te bouwen, in eerste instantie puur voor mezelf.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Wat REVA me tijdens mijn herstel gaf
                  </h2>
                  <p>
                    Wat me tijdens mijn eigen herstel enorm heeft geholpen, is dat je door er
                    dagelijks mee bezig te zijn de kleine stapjes ziet die je anders zou missen. Op
                    een moeilijke dag voelt herstel soms alsof je geen millimeter opschiet. Maar als
                    je terugkijkt op je check-ins van de afgelopen weken, je foto&apos;s naast elkaar
                    legt en je grafieken bekijkt, zie je zwart op wit hoeveel vooruitgang je
                    eigenlijk hebt geboekt. Door mijn herstel op meerdere fronten bij te houden,
                    zoals foto&apos;s, dagelijkse check-ins, medicatie en oefeningen, kreeg ik steeds
                    weer een positief gevoel over mijn herstel, ook op de dagen dat het zwaar was.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Pull quote */}
            <AnimateIn direction="up" delay={100} className="mt-10">
              <div
                className="rounded-2xl p-7 md:p-8 relative"
                style={{ background: "#ffffff", border: "1px solid #e8e5df" }}
              >
                <Quote className="w-7 h-7 mb-4" style={{ color: "#e8632a" }} />
                <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: "#1a1a1a" }}>
                  Door je herstel op meerdere fronten bij te houden, zie je de kleine stapjes die je
                  op een moeilijke dag anders zou missen.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={150} className="mt-10">
              <div style={{ color: "#374151", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                  REVA nu, voor iedereen die herstelt
                </h2>
                <p>
                  Dat is de reden dat ik REVA heb ontwikkeld. Wat begon als een persoonlijk
                  hulpmiddel tijdens mijn eigen herstel van een knieblessure, wil ik nu beschikbaar
                  maken voor iedereen die grip wil op zijn of haar herstel. Of je nu net als ik een
                  sportblessure hebt, herstelt van een operatie of een ander langdurig
                  hersteltraject doorloopt: ik hoop dat REVA jou net zo goed kan steunen als het mij
                  heeft geholpen.
                </p>
              </div>
            </AnimateIn>

            {/* Signature */}
            <AnimateIn direction="up" delay={200} className="mt-10 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                style={{ background: "#e8632a" }}
              >
                S
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#1a1a1a" }}>Stef Robberts</p>
                <p className="text-sm" style={{ color: "#6b7280" }}>Oprichter van REVA</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Ook grip krijgen op je herstel?
              </h2>
              <p className="mb-6" style={{ color: "#7c7c8a" }}>
                REVA is nu volledig gratis te gebruiken. Geen creditcard nodig, gewoon beginnen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`${DASHBOARD_URL}/register`} className="btn-primary px-6 py-3">
                  Start gratis
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/functies" className="btn-dark px-6 py-3 text-sm">
                  Bekijk functies
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
