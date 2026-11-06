"use client";

import { useState, useEffect, useRef } from "react";
import { preload } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  Dumbbell,
  Target,
  CheckCircle,
  Star,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Calendar,
  Plus,
  Camera,
  Heart,
  Award,
  Users,
  Activity,
  MapPin,
  Server,
  HeartHandshake,
  ChartLine,
  Smartphone,
} from "lucide-react";
import { AnimateIn } from "./ui/AnimateIn";
import { BlogCover } from "./blog/BlogCover";
import { getSortedBlogPosts } from "@/lib/blog-posts";
import { homeFaq } from "@/lib/home-faq";
import { RevaGlyph } from "@/components/brand/RevaLogo";
import { pilotDemoHref, pilotOffer, pilotSpotsLabel } from "@/lib/offer";
import { PilotOfferBanner } from "@/components/PilotOfferBanner";
import { pricingTiers, TRIAL_DAYS } from "@/lib/pricing";

// ─── Data ─────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Anne de Groot",
    role: "Praktijkeigenaar",
    text: "We bellen nu veel minder achter patiënten aan. Ik zie in één oogopslag wie extra aandacht nodig heeft.",
    stars: 5,
  },
  {
    name: "Tom Bakker",
    role: "Fysiotherapeut",
    text: "Mijn patiënten loggen zelf hun pijn en oefeningen. Dat scheelt me elke week uren aan telefoontjes en appjes.",
    stars: 5,
  },
  {
    name: "Femke van Dijk",
    role: "Praktijkmanager",
    text: "Implementeren ging sneller dan ik had verwacht. Binnen een week hadden we onze eerste patiënten uitgenodigd.",
    stars: 5,
  },
];


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
              <p className="animate-fade-in-up delay-100 flex items-center gap-2 text-sm font-medium" style={{ color: "#e8632a" }}>
                <span className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: pilotOffer.spotsTotal }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: i < pilotOffer.spotsLeft ? "#e8632a" : "rgba(255,255,255,0.3)" }}
                    />
                  ))}
                </span>
                Pilotaanbod: {pilotSpotsLabel().toLowerCase()}
              </p>
              <h1 className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-white max-w-3xl">
                Het eerste jaar REVA voor <span style={{ color: "#e8632a" }}>de halve prijs</span>
              </h1>
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
            Het patiëntenportaal voor fysiotherapiepraktijken: patiënten houden zelf hun herstel bij,
            jij ziet wie aandacht nodig heeft.
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

const featureBanners = [
  {
    title: "Bespaar tijd met vaste herstelplannen",
    description:
      "Start vanuit een basisplan met oefeningen, dat je zelf per fysio inricht en later nog per patiënt kunt aanpassen. Nooit meer een herstelplan vanaf nul opbouwen.",
    href: "/functies#herstelplannen-en-oefeningen",
  },
  {
    title: "Goed voorbereid aan elk consult",
    description:
      "Voor de afspraak zie je meteen de check-ins van de afgelopen dagen, hoe vaak er getraind is en de laatste foto-update van de blessure.",
    href: "/functies#praktijkoverzicht",
  },
  {
    title: "Een service waarmee je opvalt",
    description:
      "Een eigen patiëntenportaal in de huisstijl van je praktijk is zichtbare extra zorg. Patiënten die tussen praktijken kiezen, ervaren dat als een concreet verschil.",
    href: "/functies#check-ins-van-pati-nten",
  },
];

function IconChips({ items }: { items: { icon: typeof Star; bg: string; color: string }[] }) {
  return (
    <div className="flex gap-2 mb-3">
      {items.map(({ icon: Icon, bg, color }, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-full flex items-center justify-center animate-fade-in-up"
          style={{ background: bg, animationDelay: `${i * 100}ms` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </div>
      ))}
    </div>
  );
}

function FeatureBannerVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="px-8">
        <IconChips
          items={[
            { icon: Dumbbell, bg: "#fff3ee", color: "#e8632a" },
            { icon: ClipboardCheck, bg: "#f0fdf4", color: "#16a34a" },
            { icon: Target, bg: "#fffbeb", color: "#d97706" },
          ]}
        />
        <div className="flex items-center gap-2.5">
          <div className="flex-1 rounded-xl border p-3" style={{ borderColor: "#e8e5df", background: "#f8f7f4" }}>
            <p className="text-[9px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#9ca3af" }}>
              Basisplan
            </p>
            <div className="space-y-1.5">
              {["Buigoefening knie", "Balanstraining", "Fietsen 10 min"].map((t, i) => (
                <div key={t} className="flex items-center gap-1.5 animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <CheckCircle className="w-3 h-3 shrink-0" style={{ color: "#16a34a" }} />
                  <span className="text-[10px]" style={{ color: "#374151" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <ArrowRight className="w-4 h-4 shrink-0 animate-arrow-nudge" style={{ color: "#e8632a" }} />
          <div className="flex-1 rounded-xl p-3" style={{ background: "#1c1c1e" }}>
            <p className="text-[9px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#7c7c8a" }}>
              J. Willems
            </p>
            <p className="text-[10px] leading-snug" style={{ color: "#d1d5db" }}>Plan toegepast, direct aan te passen</p>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    const rows = [
      { label: "Check-ins deze week", value: "6/7", color: "#1a1a1a" },
      { label: "Trainingen afgerond", value: "4x", color: "#1a1a1a" },
      { label: "Laatste foto-update", value: "2 dagen geleden", color: "#e8632a" },
    ];
    return (
      <div className="px-8">
        <IconChips
          items={[
            { icon: ClipboardCheck, bg: "#fff3ee", color: "#e8632a" },
            { icon: Dumbbell, bg: "#f0fdf4", color: "#16a34a" },
            { icon: Camera, bg: "#fffbeb", color: "#d97706" },
          ]}
        />
        <div className="rounded-xl border p-4 space-y-2.5" style={{ borderColor: "#e8e5df", background: "#f8f7f4" }}>
          {rows.map((r, i) => (
            <div key={r.label} className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="text-[10px]" style={{ color: "#9ca3af" }}>{r.label}</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: r.color }}>
                {r.color === "#e8632a" && (
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: "#e8632a" }} />
                )}
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Patiëntenportaal in de huisstijl van de praktijk zelf
  return (
    <div className="px-8">
      <IconChips
        items={[
          { icon: Star, bg: "#fff3ee", color: "#e8632a" },
          { icon: Heart, bg: "#f0fdf4", color: "#16a34a" },
          { icon: Award, bg: "#fffbeb", color: "#d97706" },
        ]}
      />
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#e8e5df", background: "#ffffff" }}>
        <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#1c1c1e" }}>
          <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "#e8632a" }}>
            L
          </span>
          <span className="text-[10px] font-semibold text-white">Fysiopraktijk de Linde</span>
          <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)", color: "#d1d5db" }}>
            Jouw huisstijl
          </span>
        </div>
        <div className="p-3 space-y-1.5" style={{ background: "#f8f7f4" }}>
          <p className="text-[10px] font-semibold animate-fade-in-up" style={{ color: "#1a1a1a" }}>Welkom terug, Sanne</p>
          <div className="h-1.5 rounded-full animate-fade-in-up" style={{ background: "#e8e5df", animationDelay: "120ms" }}>
            <div className="h-1.5 rounded-full" style={{ width: "50%", background: "#e8632a" }} />
          </div>
          <p className="text-[9px] animate-fade-in-up" style={{ color: "#9ca3af", animationDelay: "240ms" }}>Herstelplan knie, week 6 van 12</p>
        </div>
      </div>
    </div>
  );
}

function FeatureBannersSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
            Waarom REVA<br />het verschil maakt
          </h2>
          <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
            Van tijdsbesparing tot een betere patiëntervaring: dit is de impact die REVA voor je
            praktijk heeft.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {featureBanners.map((f, i) => (
            <AnimateIn key={f.title} direction="up" delay={i * 100} className="h-full">
              <div
                className="h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div className="flex-1 flex flex-col p-8 pb-6">
                  <h3 className="text-xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a1a" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {f.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={f.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      style={{ background: "#f1ede8", color: "#1a1a1a" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8e5df"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f1ede8"; }}
                    >
                      Ontdek meer
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                <div style={{ height: 176 }} className="shrink-0 flex items-center">
                  <div className="w-full">
                    <FeatureBannerVisual index={i} />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const workflowSteps = [
  {
    nr: "1",
    title: "Richt je praktijk in",
    description:
      "Je maakt een organisatie aan voor je praktijk. Daarin voeg je medewerkers toe met verschillende rollen, richt je locaties in en stel je herstelplannen, oefeningen en schema's samen die je telkens opnieuw kunt gebruiken.",
    bg: "#1c1c1e",
    numberColor: "rgba(255,255,255,0.06)",
  },
  {
    nr: "2",
    title: "Nodig je patiënt uit",
    description:
      "Je vult de gegevens van je patiënt in: de blessure, de datum en het herstelplan dat past bij de situatie. REVA bouwt hier automatisch een persoonlijk dashboard voor, en de patiënt ontvangt direct een e-mail om te starten.",
    bg: "#e8632a",
    numberColor: "rgba(255,255,255,0.18)",
  },
  {
    nr: "3",
    title: "De patiënt houdt zelf grip op het herstel",
    description:
      "Met dagelijkse check-ins blijft het overzicht behouden, ook op dagen dat het herstel makkelijk uit het zicht verdwijnt. Medicatie, oefeningen, afspraken en foto-updates komen allemaal samen op één plek.",
    bg: "#7a3c1d",
    numberColor: "rgba(255,255,255,0.1)",
  },
  {
    nr: "4",
    title: "Jij ziet het in één oogopslag terug",
    description:
      "De belangrijkste data wordt automatisch doorgezet naar jou. In 30 seconden voor de afspraak zie je hoe de afgelopen week ging: trainingen, foto-updates en de laatste medicatie-inname. Tijdens de afspraak stem je de oefeningen en het schema af, en volgen jullie samen de mijlpalen richting de volgende fase.",
    bg: "#18181a",
    numberColor: "rgba(255,255,255,0.06)",
  },
];

function WorkflowStepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-[10px] font-semibold uppercase tracking-wide mb-3" style={{ color: "#9ca3af" }}>
          Team &amp; locaties
        </p>
        <div className="space-y-2">
          {[
            { name: "Anne de Groot", role: "Praktijkeigenaar" },
            { name: "Tom Bakker", role: "Fysiotherapeut" },
            { name: "Femke van Dijk", role: "Praktijkmanager" },
          ].map((m, i) => (
            <div key={m.name} className="flex items-center gap-2.5 animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0" style={{ background: "#e8632a" }}>
                {m.name[0]}
              </div>
              <div>
                <p className="text-xs font-medium text-white leading-tight">{m.name}</p>
                <p className="text-[10px]" style={{ color: "#7c7c8a" }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-2xl p-4 bg-white">
        <p className="text-[10px] font-semibold uppercase tracking-wide mb-3" style={{ color: "#9ca3af" }}>
          Nieuwe patiënt
        </p>
        <div className="space-y-2 mb-3">
          {[
            { label: "Blessure", value: "Kniebandletsel" },
            { label: "Datum blessure", value: "3 juli 2026" },
            { label: "Herstelplan", value: "Basisplan knie" },
          ].map((r, i) => (
            <div key={r.label} className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="text-[10px]" style={{ color: "#9ca3af" }}>{r.label}</span>
              <span className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{r.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5" style={{ background: "#fff3ee" }}>
          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#e8632a" }} />
          <span className="text-[10px] font-medium" style={{ color: "#e8632a" }}>Uitnodiging verstuurd per e-mail</span>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}>
        <div className="relative w-full" style={{ aspectRatio: "1254 / 1254" }}>
          <Image
            src="/check-in-mobile.png"
            alt="Patiënt vult een dagelijkse check-in in op zijn telefoon in de REVA app"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 320px, 80vw"
          />
        </div>
      </div>
    );
  }

  const rows = [
    { label: "Trainingen deze week", value: "5/6" },
    { label: "Laatste foto-update", value: "Vandaag" },
    { label: "Laatste medicatie", value: "08:00" },
  ];
  return (
    <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-wide mb-3" style={{ color: "#9ca3af" }}>
        J. Willems &middot; voor de afspraak
      </p>
      <div className="space-y-2 mb-3">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
            <span className="text-[10px]" style={{ color: "#7c7c8a" }}>{r.label}</span>
            <span className="text-xs font-medium text-white">{r.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5" style={{ background: "rgba(232,99,42,0.15)" }}>
        <Target className="w-3.5 h-3.5 shrink-0" style={{ color: "#e8632a" }} />
        <span className="text-[10px] font-medium" style={{ color: "#e8632a" }}>Mijlpaal in zicht: traplopen zonder pijn</span>
      </div>
    </div>
  );
}

const functiesSliderItems = [
  {
    title: "Praktijkoverzicht voor eigenaren",
    anchor: "praktijkoverzicht",
    stat: "Per fysio inzichtelijk",
    description: "Zie als praktijkeigenaar in één oogopslag hoeveel patiënten elke fysio onder behandeling heeft en waar de drukte in je praktijk zit.",
    image: "/praktijk-eigenaar.png",
    imagePosition: "center",
  },
  {
    title: "Mijlpalen en doelstellingen",
    anchor: "behandeldoelen-en-mijlpalen",
    stat: "Voortgang zichtbaar",
    description: "Leg doelen en mijlpalen vast, zodat patiënten letterlijk zien hoe ver ze al gekomen zijn in hun herstel.",
    image: "/5.png",
    imagePosition: "center",
  },
  {
    title: "Bereid een consult voor",
    anchor: "praktijkoverzicht",
    stat: "30 seconden per patiënt",
    description: "Zie vlak voor het consult hoe het gaat: laatste check-in, pijnscore en medicatie. Zo start je goed voorbereid het gesprek.",
    image: "/2.png",
    imagePosition: "center",
  },
  {
    title: "Nauw betrokken bij het herstel",
    anchor: "check-ins-van-pati-nten",
    stat: "Check-ins en foto's automatisch binnen",
    description: "Volg de dagelijkse check-ins, pijnscores en foto-updates van je patiënten, zonder zelf te hoeven bellen of appen.",
    image: "/3.png",
    imagePosition: "center",
  },
  {
    title: "Herstelplannen per fysio",
    anchor: "herstelplannen-en-oefeningen",
    stat: "Eigen aanpak, eigen sjabloon",
    description: "Iedere fysio heeft zijn eigen visie op herstel. Bouw en beheer herstelplannen die aansluiten bij de werkwijze van elke behandelaar.",
    image: "/8.png",
    imagePosition: "center",
  },
  {
    title: "Herstelplan per patiënt",
    anchor: "herstelplannen-en-oefeningen",
    stat: "Volledig op maat",
    description: "Geen twee patiënten herstellen hetzelfde. Stel voor iedere patiënt een persoonlijk plan samen dat meebeweegt met zijn traject.",
    image: "/6.png",
    imagePosition: "center",
  },
  {
    title: "Oefeningen aanpassen tijdens het consult",
    anchor: "herstelplannen-en-oefeningen",
    stat: "Direct bijsturen",
    description: "Pas oefeningen aan, voeg ze toe of haal ze weg terwijl de patiënt nog op de behandelbank ligt.",
    image: "/4.png",
    imagePosition: "center",
  },
  {
    title: "Afspraken automatisch in de agenda",
    anchor: "afspraken-en-behandelplan",
    stat: "Geen dubbele boekingen",
    description: "Plan nieuwe afspraken in een paar klikken. Ze verschijnen direct in de agenda van de behandelaar.",
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
            Alle functies,<br />ontworpen voor jouw praktijk
          </h2>
          <p className="text-base max-w-sm" style={{ color: "#6b7280" }}>
            Acht modules die samen zorgen dat je nooit meer het overzicht over je patiënten kwijtraakt.
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
            ~ Sleep of scroll om alle functies te bekijken
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

const SITE_HEADER_HEIGHT = 96;
const WORKFLOW_HEADING_HEIGHT = 140;
const WORKFLOW_STICKY_BASE = SITE_HEADER_HEIGHT + WORKFLOW_HEADING_HEIGHT;
const WORKFLOW_STEP_STAGGER = 48;

function WorkflowSection() {
  // De kop krijgt een eigen, kortere "houdbaarheid" dan de gedeelde kaartenstapel:
  // hij laat los zodra het laatste blok in beeld komt, in plaats van de hele sectie
  // te blijven plakken. De negatieve margin voorkomt dat dit extra scrollruimte toevoegt.
  const headingReleaseVh = 65 + (workflowSteps.length - 1) * 100;

  return (
    <section className="relative" style={{ background: "#f8f7f4" }}>
      <div
        className="relative"
        style={{ height: `${headingReleaseVh}vh`, marginBottom: `-${headingReleaseVh}vh` }}
      >
        <div
          className="sticky w-full z-0"
          style={{ top: SITE_HEADER_HEIGHT, background: "#f8f7f4", height: WORKFLOW_HEADING_HEIGHT }}
        >
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center pt-6 pb-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Hoe het werkt
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a1a" }}>
              In vier stappen operationeel
            </h2>
            <p className="text-base" style={{ color: "#6b7280" }}>
              Dit is wat er nodig is om REVA voor jouw praktijk aan de praat te krijgen, van eerste
              inrichting tot een afspraak met overzicht.
            </p>
          </div>
        </div>
      </div>

      {/* Ruimte vóór stap 1, zodat die net als de andere stappen van onderaf omhoog komt */}
      <div style={{ height: "65vh" }} aria-hidden="true" />

      {/* Eén gedeelde scroll-container: alle stappen blijven hierbinnen sticky staan, zodat ze
          opgestapeld blijven staan in plaats van na hun eigen scrollbeurt te verdwijnen. */}
      <div className="relative">
        {workflowSteps.map((step, i) => (
          <div
            key={step.nr}
            className="sticky"
            style={{
              top: WORKFLOW_STICKY_BASE + i * WORKFLOW_STEP_STAGGER,
              zIndex: i + 1,
              // De laatste kaart krijgt geen extra hoogte: die ruimte zou als lege ruimte
              // zichtbaar blijven staan omdat er geen volgende kaart meer overheen schuift.
              // De eerdere kaarten krijgen wat extra baan (hun overschot wordt toch afgedekt
              // door de kaart die erna over hen heen valt), zodat de laatste kaart nog steeds
              // genoeg tijd krijgt om zijn eigen stapelpositie te bereiken.
              minHeight: i === workflowSteps.length - 1 ? "70vh" : "100vh",
            }}
          >
            <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
              <div
                className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                style={{ background: step.bg, minHeight: 420, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              >
                <span
                  className="absolute -right-4 md:right-6 top-1/2 -translate-y-1/2 font-bold select-none pointer-events-none"
                  style={{ fontSize: "min(40vw, 260px)", color: step.numberColor, lineHeight: 1 }}
                >
                  {step.nr}
                </span>

                <AnimateIn direction="up" className="relative z-10 max-w-xs">
                  <WorkflowStepVisual index={i} />
                </AnimateIn>

                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Stap {step.nr}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mt-2 mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Extra staartruimte: geeft de laatste kaart genoeg baan om zijn eigen stapel-positie
            te bereiken vóórdat de hele gedeelde stapel loslaat. */}
        <div style={{ height: "12vh" }} aria-hidden="true" />
      </div>
    </section>
  );
}

const dataFlowLeftItems = [
  { icon: Users, label: "Patiënten" },
  { icon: MapPin, label: "Locaties" },
  { icon: Calendar, label: "Afspraken" },
];
const dataFlowRightItems = [
  { icon: Dumbbell, label: "Herstelplannen" },
  { icon: Activity, label: "Oefeningen" },
  { icon: ClipboardCheck, label: "Check-ins" },
];

const DATA_FLOW_PATHS = [
  "M 110 55 Q 260 55 400 160",
  "M 110 160 L 400 160",
  "M 110 265 Q 260 265 400 160",
  "M 690 55 Q 540 55 400 160",
  "M 690 160 L 400 160",
  "M 690 265 Q 540 265 400 160",
];

function DataFlowSection() {
  return (
    <section className="py-14 md:py-20" style={{ background: "#1c1c1e" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-10 md:mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
            style={{ color: "#e8632a", background: "rgba(232,99,42,0.14)" }}
          >
            Alles op één plek
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Alle data van je praktijk komt samen in REVA
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            Patiënten, herstelplannen, oefeningen, locaties, afspraken en check-ins: alles stroomt
            automatisch samen op één centrale plek, zodat jij nooit meer iets hoeft na te zoeken.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={100}>
          <div className="relative mx-auto w-full max-w-3xl" style={{ aspectRatio: "800 / 320" }}>
            <svg viewBox="0 0 800 320" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true">
              {DATA_FLOW_PATHS.map((d, i) => (
                <path key={`line-${i}`} d={d} stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
              ))}
              {DATA_FLOW_PATHS.map((d, i) => (
                <circle key={`dot-${i}`} r="5" fill="#e8632a">
                  <animateMotion dur="3s" repeatCount="indefinite" path={d} begin={`${i * 0.4}s`} />
                </circle>
              ))}
            </svg>

            {/* Centrale REVA-node */}
            <div className="absolute z-10" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
                style={{ background: "#e8632a", boxShadow: "0 20px 50px rgba(232,99,42,0.35)" }}
              >
                <RevaGlyph className="h-8 md:h-10 text-white" />
              </div>
            </div>

            {/* Linkerkolom */}
            {dataFlowLeftItems.map((item, i) => {
              const Icon = item.icon;
              const topPct = [17.2, 50, 82.8][i];
              return (
                <div
                  key={item.label}
                  className="absolute flex items-center gap-2.5"
                  style={{ left: "13.75%", top: `${topPct}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#ffffff" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                  </div>
                  <span className="hidden sm:inline text-xs font-medium whitespace-nowrap" style={{ color: "#9ca3af" }}>
                    {item.label}
                  </span>
                </div>
              );
            })}

            {/* Rechterkolom */}
            {dataFlowRightItems.map((item, i) => {
              const Icon = item.icon;
              const topPct = [17.2, 50, 82.8][i];
              return (
                <div
                  key={item.label}
                  className="absolute flex flex-row-reverse items-center gap-2.5"
                  style={{ left: "86.25%", top: `${topPct}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#ffffff" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                  </div>
                  <span className="hidden sm:inline text-xs font-medium whitespace-nowrap" style={{ color: "#9ca3af" }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
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
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Over REVA
            </span>
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
            <p className="text-base leading-relaxed mb-3" style={{ color: "#6b7280" }}>
              Dus hield ik het zelf bij: medicatie via WhatsApp-berichtjes aan mezelf, hoe ik me
              voelde in mijn Notities-app, en een Word-document met wat er die dag gebeurde. Toen
              ik terugkeek op wat ik al had doorgemaakt, gaf dat me pas echt grip.
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

function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
            Ervaringen
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
            Wat praktijken zeggen
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} direction="up" delay={i * 100}>
              <div
                className="rounded-2xl p-6 h-full border"
                style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#e8632a" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#374151" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                    style={{ background: "#e8632a" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
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
                    {isOpen && (
                      <p className="text-sm leading-relaxed pb-5 pr-8" style={{ color: "#6b7280" }}>
                        {item.a}
                      </p>
                    )}
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
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-6"
            style={{ background: "#e8632a" }}
          >
            <RevaGlyph className="h-[22px] text-white" />
          </div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
            style={{ color: "#e8632a", background: "rgba(232,99,42,0.14)" }}
          >
            Aan de slag
          </span>
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
          <div className="mt-10 text-left">
            <PilotOfferBanner dark />
          </div>
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
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {usps.map(({ icon: Icon, title, text }, i) => (
          <AnimateIn key={title} direction="up" delay={i * 80}>
            <div className="flex lg:flex-col gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
              </div>
              <div>
                <h2 className="text-base font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
              </div>
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
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Prijzen
            </span>
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
      <FeatureBannersSection />
      <FunctiesSliderSection />
      <WorkflowSection />
      <DataFlowSection />
      <PricingTeaserSection />
      {/* <TestimonialsSection /> verborgen tot er echte klantervaringen zijn */}
      <AboutTeaserSection />
      <FaqTeaserSection />
      <BlogTeaserSection />
      <CtaSection />
    </>
  );
}
