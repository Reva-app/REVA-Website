import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Quote, ArrowRight, ArrowDown, HeartPulse, Stethoscope, ShieldCheck, MessagesSquare, MapPin, Mail, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { StoryProgressLine } from "@/components/about/StoryProgressLine";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { aboutFaq, company } from "@/lib/about";

const URL = "https://www.reva-app.nl/over-reva";

export const metadata: Metadata = {
  title: "Over REVA: het verhaal achter het patiëntenportaal",
  description:
    "Stef Robberts richtte REVA op na zijn eigen knieblessure. Lees hoe een persoonlijk hersteldashboard uitgroeide tot een patiëntenportaal voor fysiopraktijken.",
  openGraph: {
    title: "Over REVA: het verhaal achter het patiëntenportaal",
    description:
      "Van afgescheurde kniepees tot patiëntenportaal voor fysiotherapiepraktijken: het verhaal van oprichter Stef Robberts.",
    locale: "nl_NL",
    type: "profile",
    url: URL,
  },
  alternates: { canonical: URL },
};

const personJsonLd = {
  "@type": "Person",
  "@id": "https://www.reva-app.nl/#person-stef-robberts",
  name: company.founder,
  jobTitle: "Oprichter van REVA",
  url: URL,
  image: "https://www.reva-app.nl/stef.png",
  description:
    "Oprichter van REVA. Voormalig voetballer met een sportopleiding (CIOS), die na een zware knieblessure en operatie een persoonlijk hersteldashboard bouwde dat uitgroeide tot REVA.",
  sameAs: [company.founderLinkedIn],
  worksFor: { "@id": "https://www.reva-app.nl/#organization" },
  alumniOf: { "@type": "EducationalOrganization", name: "CIOS" },
  knowsAbout: ["Revalidatie na knieblessures", "Patiëntenportalen", "Fysiotherapiesoftware", "Hersteltrajecten"],
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${URL}#aboutpage`,
      name: "Over REVA",
      url: URL,
      inLanguage: "nl-NL",
      description:
        "Het verhaal achter REVA, het patiëntenportaal voor fysiotherapiepraktijken, opgericht door Stef Robberts na zijn eigen hersteltraject.",
      about: { "@id": "https://www.reva-app.nl/#organization" },
      mainEntity: { "@id": "https://www.reva-app.nl/#person-stef-robberts" },
      primaryImageOfPage: "https://www.reva-app.nl/stef.png",
    },
    personJsonLd,
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: aboutFaq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

const facts = [
  { label: "Opgericht door", value: "Stef Robberts" },
  { label: "Voor", value: "Fysiotherapiepraktijken in Nederland" },
  { label: "Gevestigd in", value: company.city },
  { label: "Patiëntdata", value: "Versleuteld op Europese servers" },
];

const principles = [
  {
    icon: HeartPulse,
    title: "Gebouwd door een ervaringsdeskundige",
    text: "REVA is ontstaan vanuit een eigen hersteltraject. Daardoor weten we wat een patiënt tussen de afspraken door nodig heeft om het vol te houden.",
  },
  {
    icon: Stethoscope,
    title: "Gemaakt voor de praktijk",
    text: "De praktijk staat centraal: overzicht over alle patiënten, signalering van wie aandacht nodig heeft en een portaal in de eigen huisstijl.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy als uitgangspunt",
    text: "Gezondheidsdata staat versleuteld op servers binnen de EU. De praktijk blijft verantwoordelijk, REVA werkt op basis van een verwerkersovereenkomst.",
  },
  {
    icon: MessagesSquare,
    title: "Samen doorontwikkelen",
    text: "Fysiotherapeuten en patiënten delen wensen en ideeën via een feedbackformulier. Zo bepaalt de praktijk mee wat REVA morgen kan.",
  },
];

function Chapter({
  nr,
  title,
  children,
  media,
}: {
  nr: number;
  title: string;
  children: ReactNode;
  media?: ReactNode;
}) {
  return (
    <AnimateIn direction="up" className="relative pl-12 md:pl-16">
      {/* Markering op de tijdlijn */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] md:left-[11px] top-1 w-[18px] h-[18px] rounded-full border-[3px]"
        style={{ background: "#ffffff", borderColor: "#e8632a" }}
      />
      <div className={media ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" : "max-w-2xl"}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#e8632a" }}>
            Hoofdstuk {nr}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
            {title}
          </h3>
          <div className="space-y-4 text-[15px] md:text-base leading-relaxed" style={{ color: "#4b5563" }}>
            {children}
          </div>
        </div>
        {media && <div>{media}</div>}
      </div>
    </AnimateIn>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Photo({ src, alt, ratio, dark = false, sizes }: { src: string; alt: string; ratio: string; dark?: boolean; sizes: string }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border transition-transform duration-500 hover:-translate-y-1"
      style={{ borderColor: "#e8e5df", background: dark ? "#000" : "#f8f7f4", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </div>
    </div>
  );
}

export default function OverRevaPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Over REVA", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-12 md:gap-16 items-center">
            <AnimateIn direction="up">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ color: "#e8632a", background: "#fff3ee" }}
              >
                Over REVA
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6" style={{ color: "#1a1a1a" }}>
                Ontstaan in een eigen hersteltraject, gebouwd voor{" "}
                <span style={{ color: "#e8632a" }}>fysiopraktijken</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                REVA is een Nederlands patiëntenportaal voor fysiotherapiepraktijken, opgericht door
                Stef Robberts. Het idee ontstond tijdens zijn eigen herstel na een zware knieblessure,
                toen hij merkte dat er geen plek was waar pijn, medicatie, oefeningen en voortgang
                samenkwamen. Die plek bouwde hij zelf.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#verhaal" className="group btn-primary px-5 py-3 text-sm justify-center">
                  Lees het verhaal
                  <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <Link
                  href="/demo-aanvragen"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Plan een demo
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={120}>
              <div className="relative max-w-sm mx-auto md:ml-auto">
                <div
                  className="relative rounded-3xl overflow-hidden border"
                  style={{ aspectRatio: "4 / 5", borderColor: "#e8e5df", boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                >
                  <Image
                    src="/stef.png"
                    alt="Portret van Stef Robberts, oprichter van REVA"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 768px) 384px, 90vw"
                  />
                </div>
                <div
                  className="absolute -bottom-5 left-5 right-5 rounded-2xl border px-5 py-4 flex items-center justify-between gap-3"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Stef Robberts</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>Oprichter van REVA</p>
                  </div>
                  <a
                    href={company.founderLinkedIn}
                    target="_blank"
                    rel="noopener me"
                    aria-label="Stef Robberts op LinkedIn"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-[#ffe6da]"
                    style={{ background: "#fff3ee", color: "#e8632a" }}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Kernfeiten */}
        <section className="border-y" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
          <dl className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {facts.map((f, i) => (
              <AnimateIn key={f.label} direction="up" delay={i * 70}>
                <dt className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#9ca3af" }}>
                  {f.label}
                </dt>
                <dd className="text-base md:text-lg font-semibold" style={{ color: "#1a1a1a" }}>{f.value}</dd>
              </AnimateIn>
            ))}
          </dl>
        </section>

        {/* Het verhaal als tijdlijn */}
        <section id="verhaal" className="py-16 md:py-24 scroll-mt-24" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="mb-12 md:mb-16 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Het verhaal achter REVA
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Van een blessure vijf wedstrijden voor het einde van een voetbalcarrière, tot een
                patiëntenportaal dat elke fysiopraktijk aan haar patiënten kan aanbieden.
              </p>
            </AnimateIn>

            <div className="relative space-y-16 md:space-y-20">
              <StoryProgressLine className="left-[15px] md:left-[19px]" />

              <Chapter
                nr={1}
                title="Vijf wedstrijden voor het einde"
                media={
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <Photo src="/ziekenhuis-knie.jpeg" alt="Stef in het ziekenhuisbed, kort na de operatie aan zijn knie" ratio="3 / 4" sizes="(min-width: 1024px) 220px, 45vw" />
                      <Photo src="/rontgenfoto-knie.png" alt="Röntgenfoto van de knieblessure van Stef" ratio="3 / 4" dark sizes="(min-width: 1024px) 220px, 45vw" />
                    </div>
                    <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                      Vanuit het ziekenhuisbed, en de röntgenfoto van diezelfde dag.
                    </p>
                  </>
                }
              >
                <p>
                  Ik had voor mezelf al besloten dat ik na dat seizoen zou stoppen met voetballen. Nog
                  vijf wedstrijden te gaan, was het idee. In een van die laatste wedstrijden schoot mijn
                  knieschijf uit de kom en scheurde mijn kniepees volledig af.
                </p>
                <p>
                  Kort daarna volgde een operatie, en daarmee begon een lang en onzeker hersteltraject.
                  Weken van revalideren, oefenen en vooral veel onzekerheid: gaat het wel de goede kant op?
                </p>
              </Chapter>

              <Chapter nr={2} title="De afstand tussen fysio en patiënt">
                <p>
                  Ik had zelf het CIOS gedaan en dus een sportachtergrond, maar dat maakte het herstel
                  niet per se makkelijker. Wat me vooral opviel: de afstand tussen fysiotherapeut en
                  patiënt is bij veel praktijken best groot.
                </p>
                <p>
                  Je ziet elkaar een of twee keer per week, en de rest van de tijd sta je er grotendeels
                  alleen voor. Juist in die dagen tussen de afspraken gebeurt een groot deel van het
                  herstel, en juist daar heeft de fysiotherapeut het minste zicht op.
                </p>
              </Chapter>

              <Chapter
                nr={3}
                title="Systemen die niet aansloten"
                media={
                  <>
                    <div className="max-w-[230px] mx-auto">
                      <Photo src="/Whats-app.jpeg" alt="Berichten via WhatsApp waarmee Stef zijn medicatiegebruik bijhield" ratio="9 / 16" sizes="230px" />
                    </div>
                    <p className="text-xs text-center mt-3" style={{ color: "#9ca3af" }}>
                      Zo hield ik mijn medicatiegebruik bij: via berichten aan mezelf.
                    </p>
                  </>
                }
              >
                <p>
                  Ik ging op zoek naar een manier om mijn herstel bij te houden, en merkte al snel dat de
                  bestaande systemen niet aansloten. Software voor fysiopraktijken is meestal gericht op
                  declareren en agenda&apos;s. Apps voor herstel zijn vaak generieke fitnessschema&apos;s.
                  Geen van beide keek naar wat een hersteltraject echt inhoudt: de fases, de schema&apos;s,
                  de kleine dingen die je dag in dag uit bijhoudt.
                </p>
                <p>
                  Dus deed ik het zelf, op de meest omslachtige manier die er is. Mijn medicatie hield ik
                  bij met berichten aan mezelf via WhatsApp. In mijn Notities app schreef ik op hoe ik me
                  voelde. En in één lang Word document beschreef ik dag voor dag wat er gebeurde.
                </p>
              </Chapter>

              <Chapter nr={4} title="Het eerste persoonlijke dashboard">
                <p>
                  Eigenlijk zocht ik één plek waar al die losse stukjes samenkwamen. Die plek bestond nog
                  niet, dus bouwde ik hem zelf: een persoonlijk dashboard voor mijn eigen herstel.
                </p>
                <p>
                  Terugkijken op wat ik de weken daarvoor al had gedaan, gaf me grip. Herstel werd
                  tastbaar, in plaats van een vaag gevoel van &ldquo;het gaat wel oké&rdquo; of &ldquo;het
                  gaat niet zo goed&rdquo;.
                </p>
                <figure
                  className="rounded-2xl p-6 md:p-7 mt-6"
                  style={{ background: "#f8f7f4", border: "1px solid #e8e5df" }}
                >
                  <Quote className="w-6 h-6 mb-3" style={{ color: "#e8632a" }} />
                  <blockquote className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: "#1a1a1a" }}>
                    Door je herstel op meerdere fronten bij te houden, zie je de kleine stapjes die je op
                    een moeilijke dag anders zou missen.
                  </blockquote>
                  <figcaption className="text-sm mt-3" style={{ color: "#9ca3af" }}>Stef Robberts</figcaption>
                </figure>
              </Chapter>

              <Chapter nr={5} title="Van dashboard naar patiëntenportaal">
                <p>
                  Wat voor mij werkte, kon voor veel meer mensen werken, maar alleen als de
                  fysiotherapeut erbij betrokken is. Daarom heb ik het dashboard doorontwikkeld tot wat
                  REVA nu is: een patiëntenportaal dat elke fysiotherapiepraktijk aan haar patiënten kan
                  aanbieden, in de eigen huisstijl.
                </p>
                <p>
                  Patiënten houden zelf hun herstel bij: korte checks over pijn en energie, oefeningen,
                  medicatie en voortgang. De praktijk ziet in één overzicht wie aandacht nodig heeft,
                  zonder extra telefoontjes of appjes. Zo komen patiënt en fysiotherapeut dichter bij
                  elkaar, ook tussen de afspraken door.{" "}
                  <Link href="/functies" className="font-medium underline underline-offset-2" style={{ color: "#e8632a" }}>
                    Bekijk alle functies
                  </Link>
                  .
                </p>
              </Chapter>

              <Chapter nr={6} title="Wat er nog komt">
                <p>
                  We zijn nog lang niet klaar, en bij de volgende stappen kunnen we alle hulp gebruiken. Fysiotherapeuten en patiënten delen via een
                  feedbackformulier hun wensen, ideeën en bugs met ons.
                </p>
                <p>
                  De eerste praktijken die met REVA starten, krijgen een pilotplek: ze denken mee over
                  de doorontwikkeling en krijgen daar korting voor terug. Zo bouwen we stap voor stap aan
                  wat wij hopen dat hét systeem voor fysiotherapie in Nederland wordt.
                </p>
              </Chapter>
            </div>
          </div>
        </section>

        {/* Missie */}
        <section className="py-20 md:py-28" style={{ background: "#1c1c1e" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#e8632a" }}>
                Onze missie
              </p>
              <p className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug text-white">
                Patiënt en fysiotherapeut dichter bij elkaar brengen, ook op de dagen tussen de
                afspraken door.
              </p>
              <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
                Zodat patiënten grip houden op hun herstel, en praktijken precies weten waar hun
                aandacht nodig is.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Uitgangspunten */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="mb-10 md:mb-12 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Waar REVA voor staat
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Vier uitgangspunten die terugkomen in elke keuze die we maken.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 80} className="h-full">
                  <div
                    className="h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Over de oprichter */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-center">
            <AnimateIn direction="up">
              <div className="relative w-40 h-40 md:w-[220px] md:h-[220px] rounded-3xl overflow-hidden border mx-auto md:mx-0" style={{ borderColor: "#e8e5df" }}>
                <Image src="/stef-home.jpeg" alt="Stef Robberts, oprichter van REVA" fill className="object-cover" sizes="220px" />
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Over de oprichter
              </h2>
              <div className="space-y-4 text-[15px] md:text-base leading-relaxed" style={{ color: "#4b5563" }}>
                <p>
                  Stef Robberts is de oprichter van REVA. Hij voetbalde tot zijn blessure, heeft een
                  sportachtergrond via het CIOS en kent het herstel na een zware knieoperatie van
                  binnenuit. Die ervaring als patiënt vormt de basis van hoe REVA werkt.
                </p>
                <p>
                  Vandaag bouwt hij verder aan REVA, samen met de praktijken en patiënten die via
                  feedback meedenken. Met één doel: dat geen patiënt zich tussen de afspraken door
                  alleen voelt staan, en dat praktijken daar grip op hebben.
                </p>
              </div>
              <a
                href={company.founderLinkedIn}
                target="_blank"
                rel="noopener me"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:bg-[#f1ede8]"
                style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
              >
                <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
                Volg Stef op LinkedIn
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* FAQ en bedrijfsgegevens */}
        <section className="py-16 md:py-24 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-start">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Veelgestelde vragen over REVA
              </h2>
              <FaqAccordion items={aboutFaq} />
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div className="rounded-2xl border p-6 md:p-7" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <h2 className="text-lg font-semibold mb-5" style={{ color: "#1a1a1a" }}>Bedrijfsgegevens</h2>
                <address className="not-italic space-y-4 text-sm" style={{ color: "#4b5563" }}>
                  <p className="flex gap-3">
                    <Building2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                    <span>{company.legalName}</span>
                  </p>
                  <p className="flex gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                    <span>
                      {company.street}
                      <br />
                      {company.postalCode} {company.city}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                    <a href={`mailto:${company.email}`} className="hover-orange">{company.email}</a>
                  </p>
                </address>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Afsluiter */}
        <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Schrijf het volgende hoofdstuk mee
              </h2>
              <p className="mb-8 text-base md:text-lg" style={{ color: "#9ca3af" }}>
                Ontdek in een demo wat REVA voor jouw praktijk en je patiënten kan betekenen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                  Plan een demo
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <Link href="/functies" className="btn-dark px-6 py-3 text-sm">
                  Bekijk functies
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
