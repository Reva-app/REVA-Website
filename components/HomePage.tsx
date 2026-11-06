"use client";

import { useState, useEffect, useRef } from "react";
import { preload } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Calendar,
  Plus,
  Server,
  HeartHandshake,
  ChartLine,
  Smartphone,
} from "lucide-react";
import { AnimateIn } from "./ui/AnimateIn";
import { BlogCover } from "./blog/BlogCover";
import { getSortedBlogPosts } from "@/lib/blog-posts";
import { comparisonRows, homeFaq } from "@/lib/home-faq";
import { pilotDemoHref, pilotOffer } from "@/lib/offer";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { PracticeLogos } from "@/components/PracticeLogos";
import { pricingTiers, TRIAL_DAYS } from "@/lib/pricing";

// ─── Data ─────────────────────────────────────────────────────

// ─── Rotating headline ───────────────────────────────────────────

const rotatingPhrases = [
  "tijd willen besparen.",
  "minder willen bellen en appen.",
  "patiënten tussen afspraken volgen.",
  "zich willen onderscheiden.",
];

function useTypewriter(phrases: string[], typingSpeed = 45, deletingSpeed = 30, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}

// ─── Sections ──────────────────────────────────────────────────

function HeroSection() {
  const rotatingText = useTypewriter(rotatingPhrases);
  preload("/headline-reva-app.webp", { as: "image", fetchPriority: "high" });
  const offerOpen = pilotOffer.active && pilotOffer.spotsLeft > 0;

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "88vh",
        backgroundImage: "url(/headline-reva-app.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay: donker naar transparant, van links naar rechts, zodat linkse tekst leesbaar blijft over een foto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(100deg, rgba(24,24,26,0.95) 0%, rgba(24,24,26,0.85) 42%, rgba(24,24,26,0.5) 70%, rgba(24,24,26,0.2) 100%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full py-28 md:py-32">
        <div className="w-full text-left space-y-6">
          {offerOpen ? (
            <>
              <h1 className="animate-fade-in-up delay-100 text-sm font-medium" style={{ color: "#e8632a" }}>
                Patiëntenportaal voor fysiotherapiepraktijken
              </h1>
              <p className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-white max-w-3xl">
                Het eerste jaar REVA voor <span style={{ color: "#e8632a" }}>de halve prijs</span>
              </p>
            </>
          ) : (
            <>
              <div className="animate-fade-in-up delay-100">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{ background: "#fff3ee", color: "#e8632a", borderColor: "rgba(232,99,42,0.2)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: "#e8632a" }} />
                  Voor fysiotherapiepraktijken
                </span>
              </div>
              <h1 className="animate-fade-in-up delay-200 md:whitespace-nowrap text-2xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.15]">
                <span className="text-white">Voor fysiopraktijken die </span>
                <br className="md:hidden" />
                <span style={{ color: "#e8632a" }}>
                  {rotatingText}
                  <span className="animate-pulse-soft">|</span>
                </span>
              </h1>
            </>
          )}

          <div className="max-w-2xl space-y-6">
          <p className="animate-fade-in-up delay-300 text-base leading-relaxed" style={{ color: "#c9c9ce" }}>
            Met REVA houden je patiënten zelf hun herstel bij en zie jij in één overzicht wie
            aandacht nodig heeft. Minder telefoontjes, meer grip op je caseload.
            {offerOpen && (
              <> De eerste {pilotOffer.spotsTotal} praktijken krijgen {pilotOffer.discountPercent}% korting op het eerste jaar, in ruil voor feedback en een korte klantervaring.</>
            )}
          </p>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-3">
            <Link
              href={offerOpen ? pilotDemoHref : "/demo-aanvragen"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white text-base transition-colors duration-300"
              style={{ background: "#e8632a" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
            >
              {offerOpen ? "Claim een pilotplek" : "Vraag een demo aan"}
              <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <Link
              href="/prijzen"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-base transition-colors"
              style={{ color: "#ffffff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
            >
              Bekijk prijzen
            </Link>
          </div>

          {offerOpen && (
            <p className="animate-fade-in-up delay-500 flex items-center gap-2 text-sm" style={{ color: "#c9c9ce" }}>
              <span className="flex gap-1" aria-hidden="true">
                {Array.from({ length: pilotOffer.spotsTotal }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: i < pilotOffer.spotsLeft ? "#e8632a" : "rgba(255,255,255,0.3)" }}
                  />
                ))}
              </span>
              Nog {pilotOffer.spotsLeft} van de {pilotOffer.spotsTotal} pilotplekken beschikbaar
            </p>
          )}

          <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-x-5 gap-y-2">
            {["Europese servers", `${TRIAL_DAYS} dagen gratis proberen`, "Persoonlijke onboarding"].map((label) => (
              <div key={label} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" style={{ color: "#e8632a" }} />
                <span className="text-sm" style={{ color: "#c9c9ce" }}>{label}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const functiesSliderItems = [
  {
    title: "Praktijkoverzicht voor eigenaren",
    anchor: "signalering",
    stat: "Per fysio inzichtelijk",
    description: "Zie als praktijkeigenaar in één oogopslag hoeveel patiënten elke fysio onder behandeling heeft en waar de drukte in je praktijk zit.",
    image: "/praktijk-eigenaar.png",
    imagePosition: "center",
  },
  {
    title: "Mijlpalen en doelstellingen",
    anchor: "doelen",
    stat: "Voortgang zichtbaar",
    description: "Leg doelen en mijlpalen vast, zodat patiënten letterlijk zien hoe ver ze al gekomen zijn in hun herstel.",
    image: "/5.png",
    imagePosition: "center",
  },
  {
    title: "Bereid een consult voor",
    anchor: "signalering",
    stat: "30 seconden per patiënt",
    description: "Zie vlak voor het consult hoe het gaat: laatste check-in, pijnscore en medicatie. Zo start je goed voorbereid het gesprek.",
    image: "/2.png",
    imagePosition: "center",
  },
  {
    title: "Nauw betrokken bij het herstel",
    anchor: "check-in",
    stat: "Check-ins en foto's automatisch binnen",
    description: "Volg de dagelijkse check-ins, pijnscores en foto-updates van je patiënten, zonder zelf te hoeven bellen of appen.",
    image: "/3.png",
    imagePosition: "center",
  },
  {
    title: "Eigen herstelplannen",
    anchor: "herstelplannen",
    stat: "Fases met criteria",
    description: "Bouw herstelplannen in fases die aansluiten bij de werkwijze van je praktijk, of start vanuit de REVA-bibliotheek.",
    image: "/8.png",
    imagePosition: "center",
  },
  {
    title: "Herstelplan per patiënt",
    anchor: "herstelplannen",
    stat: "Volledig op maat",
    description: "Geen twee patiënten herstellen hetzelfde. Stel voor iedere patiënt een persoonlijk plan samen dat meebeweegt met zijn traject.",
    image: "/6.png",
    imagePosition: "center",
  },
  {
    title: "Oefeningen aanpassen tijdens het consult",
    anchor: "herstelplannen",
    stat: "Direct bijsturen",
    description: "Pas oefeningen aan, voeg ze toe of haal ze weg terwijl de patiënt nog op de behandelbank ligt.",
    image: "/4.png",
    imagePosition: "center",
  },
  {
    title: "Agenda en ruimteplanning",
    anchor: "agenda",
    stat: "Met AI-suggestie",
    description: "Plan ruimtes en behandelaars per locatie, met werkroosters, verlof en een voorstel voor de ruimteverdeling.",
    image: "/1.png",
    imagePosition: "center",
  },
];

function FunctiesSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 overflow-hidden" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
            Wat je met REVA kunt
          </h2>
          <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
            Van praktijkoverzicht tot herstelplan per patiënt. Klik op een functie voor meer uitleg.
          </p>
        </AnimateIn>
      </div>

      <div className="breakout-grid">
        <div
          ref={scrollRef}
          className="breakout-bleed-right no-scrollbar flex gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2"
        >
          {functiesSliderItems.map((f, i) => {
            return (
              <AnimateIn key={f.title} direction="up" delay={i * 60} className="shrink-0 w-[350px] snap-start">
                <Link
                  href={`/functies#${f.anchor}`}
                  className="group relative block w-[350px] h-[460px] rounded-2xl overflow-hidden border"
                  style={{ borderColor: "#e8e5df" }}
                >
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: f.imagePosition }}
                    sizes="350px"
                  />

                  <span
                    className="absolute top-4 left-4 inline-block text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.92)", color: "#1a1a1a", backdropFilter: "blur(4px)" }}
                  >
                    {f.stat}
                  </span>

                  <div
                    className="absolute inset-x-0 bottom-0 p-5 pt-14"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)" }}
                  >
                    <h3 className="text-white text-lg font-semibold mb-1.5">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {f.description}
                    </p>
                    <div
                      className="flex items-center gap-2 max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3 overflow-hidden transition-all duration-300"
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "#e8632a" }}>
                        <Plus className="w-3.5 h-3.5 text-white" />
                      </span>
                      <span className="text-white text-sm font-medium">Meer informatie</span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between mt-6">
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            Sleep of scroll voor meer functies
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Vorige functie"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
              style={{ background: "#ffffff", borderColor: "#e8e5df" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
            >
              <ChevronLeft className="w-4 h-4" style={{ color: "#374151" }} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Volgende functie"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "#e8632a" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Herkenning ────────────────────────────────────────────────

const painPoints = [
  {
    title: "Telefoontjes en appjes tussen behandelingen door",
    text: "Vragen en updates komen binnen via telefoon, WhatsApp en de balie, verspreid over behandelaars en privételefoons.",
    href: "/blog/tijd-besparen-patientcommunicatie-fysiopraktijk",
    link: "Zo win je die tijd terug",
  },
  {
    title: "Afhakers zie je pas als het te laat is",
    text: "Een dalende therapietrouw valt vaak pas op als de patiënt een afspraak afzegt of niet meer terugkomt.",
    href: "/blog/therapietrouw-verhogen-patienten-herkennen",
    link: "Herken de signalen eerder",
  },
  {
    title: "Bij overdracht gaat informatie verloren",
    text: "Bij vakantie of ziekte mist een collega het verloop van pijn, oefeningen en afspraken van de vaste behandelaar.",
    href: "/blog/fysio-op-vakantie-continuiteit-van-zorg",
    link: "Zo blijft de zorg doorlopen",
  },
];

function ProblemSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <AnimateIn direction="up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
            Het herstel gebeurt tussen de afspraken. Daar heb je nu weinig zicht op.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "#6b7280" }}>
            Je ziet een patiënt een of twee keer per week. Wat er in de dagen daartussen gebeurt, bepaalt
            voor een groot deel het resultaat. Herken je dit?
          </p>
        </AnimateIn>
        <div className="space-y-4">
          {painPoints.map((p, i) => (
            <AnimateIn key={p.title} direction="up" delay={i * 80}>
              <div className="rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <h3 className="text-base md:text-lg font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>{p.text}</p>
                <Link href={p.href} className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange" style={{ color: "#e8632a" }}>
                  {p.link}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Product ───────────────────────────────────────────────────

const productPoints = [
  { title: "Signalering", text: "Zie direct wie een hoge pijnscore doorgaf, zwelling meldt of checks mist." },
  { title: "Herstelplannen", text: "Start vanuit je eigen basisplan en pas het per patiënt aan, ook tijdens het consult." },
  { title: "Voorbereid op elk consult", text: "Zie in 30 seconden hoe de afgelopen week ging: checks, oefeningen en medicatie." },
  { title: "In je eigen huisstijl", text: "Patiënten zien het portaal van jouw praktijk, op hun eigen telefoon." },
];

function ProductSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <AnimateIn direction="up">
          <div className="relative rounded-2xl overflow-hidden border" style={{ aspectRatio: "16 / 10", borderColor: "#e8e5df" }}>
            <Image
              src="/image-reva-app.png"
              alt="Fysiotherapeut bekijkt het patiëntoverzicht van REVA op een computer in de praktijk"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </AnimateIn>
        <AnimateIn direction="up" delay={100}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
            Eén overzicht van al je patiënten
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
            Patiënten vullen op hun telefoon korte checks in over pijn, energie en oefeningen. Jij ziet
            alles samenkomen in het praktijkoverzicht, per behandelaar en per vestiging.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {productPoints.map((p) => (
              <div key={p.title}>
                <dt className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                  {p.title}
                </dt>
                <dd className="text-sm leading-relaxed pl-6" style={{ color: "#6b7280" }}>{p.text}</dd>
              </div>
            ))}
          </dl>
          <Link href="/functies" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover-orange" style={{ color: "#e8632a" }}>
            Bekijk alle functies
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Zo werkt het ──────────────────────────────────────────────

const steps = [
  { title: "Richt je praktijk in", text: "Voeg je team en locaties toe en maak herstelplannen die je steeds opnieuw gebruikt." },
  { title: "Nodig je patiënt uit", text: "Vul blessure, startdatum en herstelplan in. Je patiënt krijgt direct een uitnodiging per mail." },
  { title: "Je patiënt houdt het bij", text: "Korte dagelijkse checks, oefeningen, medicatie en foto-updates, op de eigen telefoon." },
  { title: "Jij ziet wie aandacht nodig heeft", text: "Voor elk consult zie je hoe de week ging, en je past het plan direct aan." },
];

function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="max-w-2xl mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
            Zo werkt REVA in je praktijk
          </h2>
          <p className="text-base" style={{ color: "#6b7280" }}>
            Geen ingewikkeld traject met IT. De meeste praktijken nodigen binnen korte tijd hun eerste patiënten uit.
          </p>
        </AnimateIn>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <AnimateIn key={step.title} direction="up" delay={i * 80} className="h-full">
              <li className="h-full rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <span className="text-sm font-semibold" style={{ color: "#e8632a" }}>Stap {i + 1}</span>
                <h3 className="mt-2 text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{step.text}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Vergelijking ──────────────────────────────────────────────


function ComparisonSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
            REVA naast WhatsApp, telefoon en Excel
          </h2>
          <p className="text-base" style={{ color: "#6b7280" }}>
            Veel praktijken houden contact met patiënten via WhatsApp, telefoon en losse lijstjes. Zo verschilt dat van REVA.
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={100}>
          <table className="w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
            <thead className="hidden md:table-header-group">
              <tr style={{ background: "#f8f7f4" }}>
                <th scope="col" className="text-left font-semibold px-5 py-4 w-1/4" style={{ color: "#6b7280" }}><span className="sr-only">Onderwerp</span></th>
                <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#6b7280" }}>WhatsApp, telefoon en Excel</th>
                <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#e8632a" }}>Met REVA</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.topic} className="block md:table-row" style={{ background: i % 2 ? "#fcfbf9" : "#ffffff" }}>
                  <th scope="row" className="block md:table-cell text-left font-semibold px-5 pt-4 md:py-4" style={{ color: "#1a1a1a" }}>{row.topic}</th>
                  <td className="block md:table-cell px-5 pt-2 md:py-4" style={{ color: "#9ca3af" }}>
                    <span className="md:hidden font-medium" style={{ color: "#6b7280" }}>Nu: </span>
                    {row.old}
                  </td>
                  <td className="block md:table-cell px-5 pt-1 pb-4 md:py-4 font-medium" style={{ color: "#1a1a1a" }}>
                    <span className="inline-flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                      {row.reva}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimateIn>
      </div>
    </section>
  );
}

function AboutTeaserSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
          <AnimateIn direction="left" className="md:col-span-2">
            <div
              className="relative mx-auto rounded-2xl overflow-hidden max-w-[280px]"
              style={{ aspectRatio: "1 / 1", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <Image
                src="/stef-home.jpeg"
                alt="Stef Robberts, oprichter van REVA"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 280px, 60vw"
              />
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100} className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Gebouwd vanuit eigen ervaring
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#6b7280" }}>
              Vijf wedstrijden voor het einde van mijn voetbalcarrière scheurde ik mijn kniepees
              volledig af. Tijdens het lange herstel dat volgde merkte ik, met mijn achtergrond in
              sport (CIOS), hoe groot de afstand tussen fysio en patiënt vaak is. De systemen die
              er waren, waren gemaakt voor declareren en agenda&apos;s, of generieke
              fitnessschema&apos;s. Niets keek echt naar wat een hersteltraject inhoudt.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              Daarna ben ik zelf een systeem gaan bouwen: een dashboard dat mij nog veel meer grip
              gaf op mijn herstel en waarmee ik heel visueel de stappen kon zien die ik al gezet
              had. Dat persoonlijke dashboard is uitgegroeid tot REVA: een patiëntenportaal dat elke
              fysiotherapiepraktijk aan haar patiënten kan aanbieden.
            </p>
            <Link
              href="/over-reva"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange"
              style={{ color: "#e8632a" }}
            >
              Lees het volledige verhaal
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function FaqTeaserSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <AnimateIn direction="left" className="md:col-span-4 h-full flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
              Veelgestelde vragen
            </h2>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center mt-10 md:mt-0 w-fit px-5 py-2.5 rounded-full text-sm font-medium border transition-colors"
              style={{ color: "#1a1a1a", borderColor: "#e8e5df", background: "#ffffff" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; }}
            >
              Lees alle FAQs
            </Link>
          </AnimateIn>

          <div className="md:col-span-8">
            {homeFaq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <AnimateIn key={item.q} direction="up" delay={i * 60}>
                  <div className="border-b" style={{ borderColor: "#e8e5df" }}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-semibold text-base" style={{ color: "#1a1a1a" }}>
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        style={{ color: "#6b7280" }}
                      />
                    </button>
                    <p hidden={!isOpen} className="text-sm leading-relaxed pb-5 pr-8" style={{ color: "#6b7280" }}>
                      {item.a}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogTeaserSection() {
  const posts = getSortedBlogPosts().slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
            Vanuit de blog
          </h2>
          <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
            Praktische artikelen voor fysiotherapiepraktijken over patiëntbegeleiding en praktijkvoering.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} direction="up" delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full rounded-2xl border overflow-hidden transition-shadow hover:shadow-md"
                style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
              >
                <BlogCover post={post} className="aspect-[16/9]" />
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className="inline-block w-fit text-xs font-semibold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full"
                    style={{ color: "#e8632a", background: "#fff3ee" }}
                  >
                    {post.category}
                  </span>
                  <p className="text-base font-semibold mb-2 leading-snug" style={{ color: "#1a1a1a" }}>
                    {post.title}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                    {post.excerpt}
                  </p>
                  <span
                    className="mt-auto flex items-center gap-1.5 text-xs pt-3 border-t"
                    style={{ color: "#9ca3af", borderColor: "#e8e5df" }}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {post.readTime} leestijd
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn direction="up" delay={240} className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange"
            style={{ color: "#e8632a" }}
          >
            Bekijk alle artikelen
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/headline-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(24,24,26,0.9) 0%, rgba(24,24,26,0.86) 45%, rgba(24,24,26,0.94) 100%)" }}
      />
      <div className="relative max-w-2xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
        <AnimateIn direction="up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 text-white leading-tight">
            Benieuwd wat REVA voor <span style={{ color: "#e8632a" }}>jouw praktijk</span> oplevert?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#c9c9ce" }}>
            Laat je gegevens achter, dan nemen we binnen één werkdag contact op voor een
            persoonlijke rondleiding door REVA en antwoord op al je vragen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo-aanvragen"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white transition-colors duration-300 text-base"
              style={{ background: "#e8632a" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
            >
              Vraag een demo aan
              <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-base transition-colors"
              style={{ color: "#ffffff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
            >
              Stel een vraag
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "#9ca3af" }}>
            Liever eerst zelf verder kijken? Bekijk{" "}
            <Link href="/prijzen" className="font-medium hover-orange" style={{ color: "#ffffff" }}>
              de prijzen
            </Link>{" "}
            of{" "}
            <Link href="/functies" className="font-medium hover-orange" style={{ color: "#ffffff" }}>
              hoe REVA werkt
            </Link>
            .
          </p>
          {pilotOffer.active && pilotOffer.spotsLeft > 0 && (
            <p className="mt-8 text-sm" style={{ color: "#c9c9ce" }}>
              <span className="font-semibold text-white">Pilotaanbod:</span> {pilotOffer.discountPercent}% korting op het
              eerste jaar voor de eerste {pilotOffer.spotsTotal} praktijken.{" "}
              <Link href={pilotDemoHref} className="font-medium underline underline-offset-2" style={{ color: "#e8632a" }}>
                Claim een pilotplek
              </Link>
            </p>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

const usps = [
  {
    icon: Server,
    title: "Europese servers",
    text: "Patiëntdata staat versleuteld op servers binnen de EU, op basis van een verwerkersovereenkomst onder de AVG.",
  },
  {
    icon: HeartHandshake,
    title: "Patiënt en fysio dichter bij elkaar",
    text: "Ook tussen afspraken door blijf je betrokken bij het herstel, zonder extra telefoontjes of appjes.",
  },
  {
    icon: ChartLine,
    title: "Meer grip op het herstel",
    text: "Je patiënten zien hun eigen voortgang, jij ziet direct wie afwijkt van het plan en aandacht nodig heeft.",
  },
  {
    icon: Smartphone,
    title: "Altijd een coach bij de hand",
    text: "Herstelplan, oefeningen en jouw advies staan op de telefoon van je patiënt, ook op dagen zonder afspraak.",
  },
];

function UspSection() {
  return (
    <section className="py-14 md:py-16 border-b" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.18fr_1fr_1fr] gap-8 lg:gap-6">
        {usps.map(({ icon: Icon, title, text }, i) => (
          <AnimateIn key={title} direction="up" delay={i * 80}>
            <div>
              <h2 className="flex items-center gap-2 text-base font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>
                <Icon className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                {title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

function PricingTeaserSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
              Heldere pakketten,<br />alle functies inbegrepen
            </h2>
          </div>
          <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
            Je betaalt naar de grootte van je praktijk, niet per functie. Probeer REVA {TRIAL_DAYS} dagen gratis.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {pricingTiers.map((tier, i) => {
            const staff = tier.features.find((f) => f.includes("medewerker")) ?? "";
            const patients = tier.features.find((f) => f.includes("patiënten")) ?? "";
            return (
              <AnimateIn key={tier.name} direction="up" delay={i * 70} className="h-full">
                <Link
                  href={`/prijzen`}
                  className="relative h-full flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={
                    tier.popular
                      ? { background: "#1c1c1e", boxShadow: "0 20px 40px rgba(0,0,0,0.18)" }
                      : { background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }
                  }
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: "#e8632a" }}>
                      Meest gekozen
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#e8632a" }}>
                    {tier.name}
                  </p>
                  <p className="mb-3">
                    <span className="text-3xl font-bold tracking-tight" style={{ color: tier.popular ? "#ffffff" : "#1a1a1a" }}>
                      &euro;{tier.monthly}
                    </span>
                    <span className="text-sm" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}> / maand</span>
                  </p>
                  <p className="text-sm mb-4" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}>{tier.tagline}</p>
                  <ul className="mt-auto space-y-1.5">
                    {[staff, patients].filter(Boolean).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: tier.popular ? "#d1d5db" : "#374151" }}>
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#e8632a" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn direction="up" delay={200}>
          <p className="text-xs mb-8" style={{ color: "#9ca3af" }}>
            Prijzen per maand, exclusief btw. Bij jaarlijks betalen krijg je 2 maanden gratis. Meer dan 20
            medewerkers of een keten? Dan maken we een voorstel op maat.
          </p>
          <PilotOfferBanner />
          <div className="mt-8 text-center">
            <Link href="/prijzen" className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange" style={{ color: "#e8632a" }}>
              Bekijk alle pakketten en wat er inbegrepen is
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────

export function HomePage() {
  return (
    <>
      <HeroSection />
      <UspSection />
      <PracticeLogos />
      <ProblemSection />
      <ProductSection />
      <FunctiesSliderSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingTeaserSection />
      <AboutTeaserSection />
      <FaqTeaserSection />
      <BlogTeaserSection />
      <CtaSection />
    </>
  );
}
