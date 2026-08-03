import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Over REVA",
  description:
    "Het verhaal achter REVA: hoe een afgescheurde kniepees en omslachtige administratie via WhatsApp en Word leidden tot een patiëntenportaal voor fysiopraktijken.",
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
        {/* Hero: korte, pakkende intro, links uitgelijnd */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Over REVA
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
                Het verhaal achter REVA
              </h1>
              <p className="text-base max-w-2xl" style={{ color: "#6b7280" }}>
                Mijn naam is Stef, oprichter van REVA. Tijdens mijn eigen herstel na een
                afgescheurde kniepees miste ik één plek waar mijn pijn, medicatie en oefeningen
                samenkwamen. Die plek bestond niet, dus bouwde ik hem zelf. Dit is dat verhaal, van
                persoonlijk hulpmiddel tot patiëntenportaal voor fysiotherapiepraktijken.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Narrative: mijn verhaal, om en om tekst en foto */}
        <section className="py-14 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8 space-y-16 md:space-y-20">

            {/* Blok 1: tekst links, foto rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimateIn direction="up">
                <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#374151" }}>
                  <h2 className="text-xl font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                    Vijf wedstrijden voor het einde
                  </h2>
                  <p>
                    Ik had voor mezelf al besloten dat ik na dat seizoen zou stoppen met voetballen.
                    Nog vijf wedstrijden te gaan, was het idee. Tijdens een van die laatste
                    wedstrijden scheurde mijn kniepees volledig af. Kort daarna volgde een operatie,
                    en daarmee begon een lang en onzeker hersteltraject.
                  </p>
                  <p>
                    Ik had zelf het CIOS gedaan en dus wel een sportachtergrond, maar dat maakte het
                    herstel niet per se makkelijker. Wat me vooral opviel: de afstand tussen een
                    fysiotherapeut en een patiënt is bij veel praktijken best groot. Je ziet elkaar
                    een keer per week, en de rest van de tijd sta je er grotendeels alleen voor.
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn direction="up" delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                    <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                      <Image
                        src="/ziekenhuis-knie.jpeg"
                        alt="Stef vanuit het ziekenhuisbed, kort na de operatie aan zijn knie"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 260px, 45vw"
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df", background: "#000" }}>
                    <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                      <Image
                        src="/rontgenfoto-knie.png"
                        alt="Röntgenfoto van Stef zijn knieblessure"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 260px, 45vw"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                  Vanuit het ziekenhuisbed, en de röntgenfoto van diezelfde dag.
                </p>
              </AnimateIn>
            </div>

            {/* Blok 2: foto links, tekst rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimateIn direction="up" className="order-2 lg:order-1">
                <div className="flex justify-center">
                  <div className="rounded-2xl overflow-hidden border w-[220px]" style={{ borderColor: "#e8e5df" }}>
                    <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                      <Image
                        src="/Whats-app.jpeg"
                        alt="WhatsApp berichten waarmee Stef zijn medicatiegebruik bijhield"
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                  Zo hield ik destijds mijn medicatiegebruik bij: via berichten aan mezelf.
                </p>
              </AnimateIn>
              <AnimateIn direction="up" delay={100} className="order-1 lg:order-2">
                <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#374151" }}>
                  <h2 className="text-xl font-semibold mb-1" style={{ color: "#1a1a1a" }}>
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
                  <p>
                    Dus begon ik het zelf te doen, op de meest omslachtige manier die er is. Mijn
                    medicatiegebruik hield ik bij door mezelf berichten te sturen via WhatsApp. In
                    mijn Notities app schreef ik op hoe ik me voelde. En in één lang Word document
                    beschreef ik dag voor dag wat er gebeurde, puur voor mezelf, om het later te
                    kunnen teruglezen.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Pull quote */}
            <AnimateIn direction="up">
              <div
                className="rounded-2xl p-7 md:p-8 relative"
                style={{ background: "#f8f7f4", border: "1px solid #e8e5df" }}
              >
                <Quote className="w-7 h-7 mb-4" style={{ color: "#e8632a" }} />
                <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: "#1a1a1a" }}>
                  Door je herstel op meerdere fronten bij te houden, zie je de kleine stapjes die je
                  op een moeilijke dag anders zou missen.
                </p>
              </div>
            </AnimateIn>

            {/* Blok 3: volledige breedte, geen foto */}
            <AnimateIn direction="up">
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#374151" }}>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                  Het eerste persoonlijke dashboard
                </h2>
                <p>
                  Eigenlijk was ik op zoek naar één plek waar al die losse stukjes samenkwamen, en
                  die plek bestond nog niet. Dus bouwde ik hem zelf: een persoonlijk dashboard
                  waar ik uiteindelijk zelf enorm veel aan heb gehad.
                </p>
                <p>
                  Terugkijken op wat ik de weken daarvoor allemaal al had gedaan, gaf me grip.
                  Herstel werd daardoor tastbaarder, in plaats van een vaag gevoel van &ldquo;het
                  gaat wel oké&rdquo; of &ldquo;het gaat niet zo goed&rdquo;.
                </p>
              </div>
            </AnimateIn>

            {/* Blok 4: volledige breedte, geen foto */}
            <AnimateIn direction="up">
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#374151" }}>
                <h2 className="text-xl font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                  REVA nu, en waar we naartoe willen
                </h2>
                <p>
                  Dat persoonlijke dashboard heb ik doorontwikkeld tot wat REVA nu is: een
                  patiëntenportaal dat elke fysiotherapiepraktijk aan haar patiënten kan aanbieden.
                  We zijn daarmee nog lang niet klaar.
                </p>
                <p>
                  Er staan functies op de planning, zoals een agendamodule, en daarbij kunnen we
                  alle hulp gebruiken. Fysiotherapeuten en patiënten kunnen via een
                  feedbackformulier wensen, bugs en ideeën met ons delen. Zo bouwen we, stap voor
                  stap, aan wat wij hopen dat het systeem voor fysiotherapie in Nederland wordt.
                </p>
              </div>
            </AnimateIn>

            {/* Signature */}
            <AnimateIn direction="up" className="flex items-center gap-4">
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
                <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                  Vraag een demo aan
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
