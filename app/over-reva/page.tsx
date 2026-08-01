import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Activity, Stethoscope, Code2, Heart, Quote, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Over REVA",
  description:
    "Het verhaal achter REVA: hoe een afgescheurde kniepees en een omslachtige eigen administratie via WhatsApp en Word leidden tot een patiëntenportaal voor fysiotherapiepraktijken.",
  openGraph: {
    title: "Over REVA",
    description: "Het persoonlijke verhaal achter REVA, ontstaan vanuit een eigen hersteltraject en uitgegroeid tot een patiëntenportaal voor fysiotherapiepraktijken.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/over-reva",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/over-reva",
  },
};

const timeline = [
  {
    icon: Activity,
    date: "Vijf wedstrijden voor het einde",
    title: "De blessure",
    description: "Tijdens een van zijn laatste wedstrijden scheurt de kniepees van Stef volledig af.",
  },
  {
    icon: Stethoscope,
    date: "Kort daarna",
    title: "De operatie",
    description: "Een operatie volgt, en daarmee begint een lang en onzeker hersteltraject.",
  },
  {
    icon: Code2,
    date: "Tijdens het herstel",
    title: "REVA ontstaat",
    description: "Uit WhatsApp-berichtjes aan zichzelf, losse notities en een Word-document groeit het eerste persoonlijke dashboard.",
  },
  {
    icon: Heart,
    date: "Vandaag",
    title: "REVA voor praktijken",
    description: "Wat begon als persoonlijk hulpmiddel, wordt nu aangeboden aan fysiotherapiepraktijken.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.reva-app.nl/over-reva#aboutpage",
  name: "Over REVA",
  description:
    "Het verhaal achter REVA: ontstaan vanuit een persoonlijk hersteltraject na een afgescheurde kniepees.",
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
                REVA is niet ontstaan op een tekentafel, maar tijdens mijn eigen herstel van een
                afgescheurde kniepees. Dit is dat verhaal.
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
              <div className="space-y-8 text-base leading-relaxed" style={{ color: "#374151" }}>
                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Vijf wedstrijden voor het einde
                  </h2>
                  <p>
                    Ik had voor mezelf al besloten dat ik na dat seizoen zou stoppen met voetballen.
                    Nog vijf wedstrijden te gaan, was het idee. Tijdens een van die laatste
                    wedstrijden scheurde mijn kniepees volledig af. In plaats van een rustig afscheid
                    van het voetbal, begon er een lang en onzeker hersteltraject.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Foto's: ziekenhuis en röntgenfoto */}
            <AnimateIn direction="up" delay={80} className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                  <Image
                    src="/ziekenhuis-knie.jpeg"
                    alt="Stef vanuit het ziekenhuisbed, kort na de operatie aan zijn knie"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 340px, 45vw"
                  />
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df", background: "#000" }}>
                <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                  <Image
                    src="/rontgenfoto-knie.png"
                    alt="Röntgenfoto van Stef's knieblessure"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 340px, 45vw"
                  />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                Vanuit het ziekenhuisbed, en de röntgenfoto van diezelfde dag.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={120} className="mt-10">
              <div className="space-y-8 text-base leading-relaxed" style={{ color: "#374151" }}>
                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    De operatie, en de afstand die ik voelde
                  </h2>
                  <p>
                    Kort na de blessure volgde een operatie. Daarna begon het echte werk. Ik heb
                    zelf het CIOS gedaan en dus wel een sportachtergrond, maar dat maakte het
                    herstel niet per se makkelijker. Wat me vooral opviel: de afstand tussen een
                    fysiotherapeut en een patiënt is bij veel praktijken best groot. Je ziet elkaar
                    een keer per week, en de rest van de tijd sta je er grotendeels alleen voor.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Systemen die niet aansloten
                  </h2>
                  <p>
                    Ik ging op zoek naar een manier om mijn herstel bij te houden, en merkte al snel
                    dat de bestaande systemen niet aansloten op wat ik nodig had. Software voor
                    fysiopraktijken is meestal gericht op declareren en agenda&apos;s. Apps voor
                    herstel zijn vaak generieke fitnessschema&apos;s. Geen van beide keek echt naar
                    wat er allemaal bij een hersteltraject komt kijken: de verschillende fases, de
                    schema&apos;s, de kleine dingen die je dag in dag uit bijhoudt.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Wat ik zelf ben gaan bijhouden
                  </h2>
                  <p>
                    Dus begon ik het zelf te doen, op de meest omslachtige manier die er is. Mijn
                    medicatie-inname hield ik bij door mezelf berichtjes te sturen via WhatsApp. In
                    mijn Notities-app schreef ik op hoe ik me voelde. En in één lang Word-document
                    beschreef ik dag voor dag wat er gebeurde, puur voor mezelf, om het later te
                    kunnen teruglezen.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* WhatsApp screenshot */}
            <AnimateIn direction="up" delay={100} className="mt-8 flex justify-center">
              <div className="rounded-2xl overflow-hidden border w-[220px]" style={{ borderColor: "#e8e5df" }}>
                <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                  <Image
                    src="/Whats-app.jpeg"
                    alt="WhatsApp-berichtjes waarmee Stef zijn medicatie-inname bijhield"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={120}>
              <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                Zo hield ik destijds mijn medicatie-inname bij: via WhatsApp-berichtjes aan mezelf.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={140} className="mt-10">
              <div className="space-y-8 text-base leading-relaxed" style={{ color: "#374151" }}>
                <div>
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    Het eerste persoonlijke dashboard
                  </h2>
                  <p>
                    Eigenlijk was ik op zoek naar één plek waar al die losse stukjes samenkwamen, en
                    die plek bestond nog niet. Dus bouwde ik hem zelf: een persoonlijk dashboard
                    waar ik uiteindelijk zelf enorm veel aan heb gehad. Terugkijken op wat ik de
                    weken daarvoor allemaal al had gedaan, gaf me grip. Herstel werd daardoor
                    tastbaarder, in plaats van een vaag gevoel van &ldquo;het gaat wel oké&rdquo; of
                    &ldquo;het gaat niet zo goed&rdquo;.
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
              <div className="text-base leading-relaxed" style={{ color: "#374151" }}>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                  REVA nu, en waar we naartoe willen
                </h2>
                <p>
                  Dat persoonlijke dashboard heb ik doorontwikkeld tot wat REVA nu is: een
                  patiëntenportaal dat elke fysiotherapiepraktijk aan haar patiënten kan aanbieden.
                  We zijn daarmee nog lang niet klaar. Er staan functies op de planning, zoals een
                  agendamodule, en daarbij kunnen we alle hulp gebruiken. Fysiotherapeuten en
                  patiënten kunnen via een feedbackformulier wensen, bugs en ideeën met ons delen.
                  Zo bouwen we, stap voor stap, aan wat wij hopen dat het systeem voor
                  fysiotherapie in Nederland wordt.
                </p>
              </div>
            </AnimateIn>

            {/* Signature */}
            <AnimateIn direction="up" delay={200} className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative">
                <Image src="/stef.png" alt="Stef Robberts, oprichter van REVA" fill className="object-cover" sizes="48px" />
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
                Nieuwsgierig wat REVA voor jouw praktijk kan doen?
              </h2>
              <p className="mb-6" style={{ color: "#7c7c8a" }}>
                Plan een demo en ontdek hoe REVA past bij jouw praktijk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary px-6 py-3">
                  Vraag een demo aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
