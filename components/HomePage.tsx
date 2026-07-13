"use client";

import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  ClipboardCheck,
  CalendarDays,
  Dumbbell,
  Pill,
  FolderOpen,
  BarChart3,
  CreditCard,
  Target,
  Layers,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Star,
  ChevronRight,
  Shield,
  Clock,
  Users,
  Calendar,
  Plus,
} from "lucide-react";
import { AnimateIn } from "./ui/AnimateIn";
import { BlogIllustration } from "./blog/BlogIllustration";
import { getSortedBlogPosts } from "@/lib/blog-posts";

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

// ─── Data ─────────────────────────────────────────────────────

const features = [
  {
    icon: LayoutDashboard,
    title: "Persoonlijk dashboard",
    description:
      "Alles in één oogopslag. Je streak, afspraken, pijnscore en voortgang zichtbaar zodra je de app opent.",
  },
  {
    icon: ClipboardCheck,
    title: "Dagelijkse check-ins",
    description:
      "Registreer elke dag hoe je je voelt: pijn, energie en stemming. In een paar tikken gedaan.",
  },
  {
    icon: CalendarDays,
    title: "Afspraken bijhouden",
    description:
      "Fysiotherapeut, specialist of controle: plan en bekijk al je afspraken op één plek, met herinneringen zodat je nooit iets mist.",
  },
  {
    icon: Dumbbell,
    title: "Trainingen en oefeningen",
    description:
      "Volg je revalidatieschema, vink oefeningen af en bouw je activiteit rustig op.",
  },
  {
    icon: Pill,
    title: "Medicatie en pijn",
    description:
      "Houd bij welke medicatie je neemt, wanneer je dat doet en hoe je pijn zich ontwikkelt over tijd.",
  },
  {
    icon: FolderOpen,
    title: "Persoonlijk dossier",
    description:
      "Diagnoses, röntgenfoto's, operatieverslagen en brieven van specialisten: alles veilig en overzichtelijk opgeslagen in jouw digitale dossier.",
  },
  {
    icon: BarChart3,
    title: "Voortgang en analyse",
    description:
      "Grafieken en inzichten die laten zien hoe je herstel verloopt. Motiverend en helder.",
  },
  {
    icon: CreditCard,
    title: "Zorgverzekering & contacten",
    description:
      "Houd je polisnummer, zorgverzekeraar en ziekenhuiscontacten bij de hand. Nooit meer zoeken als je snel iemand moet bellen.",
  },
  {
    icon: Target,
    title: "Doelen & mijlpalen",
    description:
      "Stel hersteldoelen in en vier elke mijlpaal, van de eerste stap zonder kruk tot volledig herstel. Stap voor stap vooruit, met concreet bewijs van je voortgang.",
  },
];

const usps = [
  {
    icon: Layers,
    title: "9 functionaliteiten",
    description:
      "Van dagelijkse check-ins tot zorgverzekering en hersteldoelen: REVA bundelt alles wat je nodig hebt tijdens je herstel in één complete app. Geen losse schriftjes of aparte apps meer nodig.",
    highlight: "Compleet",
    stat: "9",
    statLabel: "modules",
  },
  {
    icon: TrendingUp,
    title: "100% inzicht op je herstel",
    description:
      "Grafieken, pijnscores en dagelijkse data geven je volledig overzicht over hoe je herstel verloopt. Zo zie je exact waar je staat en wat er nog komt.",
    highlight: "Inzicht",
    stat: "100%",
    statLabel: "inzicht",
  },
  {
    icon: Smartphone,
    title: "Altijd bij de hand",
    description:
      "REVA werkt op je telefoon, tablet en laptop. Je gegevens zijn automatisch gesynchroniseerd en altijd bereikbaar, thuis, onderweg, bij je fysiotherapeut of tijdens een controleafspraak in het ziekenhuis.",
    highlight: "Toegankelijk",
    stat: "24/7",
    statLabel: "beschikbaar",
  },
];

const steps = [
  {
    nr: "01",
    title: "Maak een account aan",
    description: "Registreer je in een minuut. Geen creditcard nodig, gewoon starten.",
  },
  {
    nr: "02",
    title: "Richt je dashboard in",
    description:
      "Voeg je blessure of operatie toe, vul je afspraken in en stel je medicatieschema in.",
  },
  {
    nr: "03",
    title: "Houd dagelijks bij",
    description:
      "Doe je dagelijkse check-in, vink afspraken af en zie hoe je herstel vordert.",
  },
];

const testimonials = [
  {
    name: "Sophie R.",
    role: "Na knieoperatie",
    text: "Eindelijk overzicht tijdens mijn herstel. REVA helpt me echt om grip te houden. Ik zou niet meer zonder willen.",
    stars: 5,
  },
  {
    name: "Mark V.",
    role: "Sporter in revalidatie",
    text: "De dagelijkse check-ins motiveren me. Ik zie mijn voortgang zwart op wit, dat helpt enorm op de moeilijke dagen.",
    stars: 5,
  },
  {
    name: "Lisa M.",
    role: "Herstel na heupoperatie",
    text: "Alles wat ik nodig heb staat in één app. Mijn fysiotherapeut was onder de indruk van hoe goed ik alles bijhield.",
    stars: 5,
  },
];

const targetGroups = [
  {
    icon: Users,
    title: "Na een operatie",
    description:
      "Knieoperatie, heupvervanging, schouderoperatie of een andere ingreep: REVA helpt je gestructureerd te revalideren met een helder overzicht van je hele herstelproces.",
  },
  {
    icon: Dumbbell,
    title: "Sporters met een blessure",
    description:
      "Een knieblessure, enkelblessure of andere sportblessure kost tijd en frustratie. REVA geeft je structuur tijdens je herstel, zodat je verantwoord en gemotiveerd terugkeert naar je sport.",
  },
  {
    icon: Clock,
    title: "Langdurig hersteltraject",
    description:
      "Maanden of langer herstellen vraagt om overzicht. REVA houdt alles voor je bij, van medicatie en afspraken tot je voortgang week na week en maand na maand.",
  },
];

const homeFaq = [
  {
    q: "Wat is REVA?",
    a: "REVA is een persoonlijk herstel dashboard voor iedereen die revalideert van een blessure, operatie of langdurig hersteltraject: van knie en enkel tot schouder, heup en rug.",
  },
  {
    q: "Wat kost REVA?",
    a: "Niets op dit moment. REVA is nu volledig gratis te gebruiken terwijl we de app samen met onze eerste gebruikers doorontwikkelen.",
  },
  {
    q: "Werkt REVA ook op mobiel?",
    a: "Ja. REVA is beschikbaar op web, iOS en Android.",
  },
  {
    q: "Is mijn data veilig bij REVA?",
    a: "Ja. Je gezondheidsdata wordt versleuteld opgeslagen en nooit gedeeld of verkocht.",
  },
];

// ─── Phone mockup ──────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <div className="relative rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" />
        <div className="bg-[#f8f7f4] flex flex-col" style={{ minHeight: 520 }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-6 pb-1">
            <span className="text-[10px] font-semibold" style={{ color: "#1a1a1a" }}>12:04</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#1a1a1a"/><rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#1a1a1a"/><rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#1a1a1a"/><rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#1a1a1a"/></svg>
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="#1a1a1a" strokeWidth="1"/><rect x="15" y="3" width="2" height="4" rx="1" fill="#1a1a1a"/><rect x="2" y="2" width="10" height="6" rx="1" fill="#1a1a1a"/></svg>
            </div>
          </div>
          {/* App header */}
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b" style={{ borderColor: "#e8e5df" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#e8632a" }}>S</div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#e8632a" }}>
                <span className="text-white font-bold text-xs leading-none">R</span>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>REVA</span>
            </div>
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: "#e8632a" }}>3</div>
          </div>
          {/* Content */}
          <div className="flex-1 px-3 py-3 space-y-2.5">
            {/* Welcome card */}
            <div className="bg-white rounded-2xl p-3.5 border" style={{ borderColor: "#e8e5df" }}>
              <p className="text-[9px] font-medium uppercase tracking-wide mb-0.5" style={{ color: "#9ca3af" }}>DONDERDAG 9 APRIL</p>
              <p className="text-base font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Goedemiddag, Stef</p>
              <p className="text-[9px] mb-2" style={{ color: "#6b7280" }}>Herstel van knieband blessure · dag 33</p>
              <div className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ borderColor: "#e8632a", background: "#fff3ee" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#e8632a" }} />
                <span className="text-[9px] font-medium" style={{ color: "#e8632a" }}>Fase 2: vroeg herstel</span>
              </div>
              <div className="flex gap-5 mt-2.5">
                <div><p className="text-xl font-bold" style={{ color: "#1a1a1a" }}>33</p><p className="text-[9px]" style={{ color: "#6b7280" }}>dagen herstel</p></div>
                <div><p className="text-xl font-bold" style={{ color: "#1a1a1a" }}>30</p><p className="text-[9px]" style={{ color: "#6b7280" }}>na operatie</p></div>
              </div>
            </div>
            {/* Deze week */}
            <div className="rounded-2xl p-3 relative" style={{ background: "#1c1c1e" }}>
              <p className="text-[9px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#9ca3af" }}>DEZE WEEK</p>
              <div className="bg-white rounded-xl p-2.5 space-y-1.5">
                {[
                  { label: "Gem. check-in score", value: "3.0", unit: "/5", color: "#d97706" },
                  { label: "Trainingen afgerond", value: "1", unit: "/7", color: "#1a1a1a" },
                  { label: "Medicijn innames", value: "0", unit: null, color: "#1a1a1a" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-[9px]" style={{ color: "#6b7280" }}>{row.label}</span>
                    <span className="text-[10px] font-bold" style={{ color: row.color }}>
                      {row.value}
                      {row.unit && <span className="font-normal text-[9px]" style={{ color: "#9ca3af" }}>{row.unit}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-2xl p-2.5 border" style={{ borderColor: "#e8e5df" }}>
                <p className="text-[9px] mb-0.5" style={{ color: "#6b7280" }}>Pijnscore</p>
                <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>3.2</p>
                <p className="text-[9px] text-green-600">↓ 0.8 vs gisteren</p>
              </div>
              <div className="bg-white rounded-2xl p-2.5 border" style={{ borderColor: "#e8e5df" }}>
                <p className="text-[9px] mb-0.5" style={{ color: "#6b7280" }}>Afspraak</p>
                <p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Fysio</p>
                <p className="text-[9px] mt-0.5" style={{ color: "#6b7280" }}>Do 10 apr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sections ──────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#f8f7f4" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #fff3ee, transparent)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-6 max-w-xl">
            <div className="animate-fade-in-up delay-100">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                style={{ background: "#fff3ee", color: "#e8632a", borderColor: "rgba(232,99,42,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: "#e8632a" }} />
                Jouw herstel dashboard
              </span>
            </div>
            <h1
              className="animate-fade-in-up delay-200 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
              style={{ color: "#1a1a1a" }}
            >
              Grip op je herstel,{" "}
              <span style={{ color: "#e8632a" }}>dag voor dag.</span>
            </h1>
            <p className="animate-fade-in-up delay-300 text-lg leading-relaxed" style={{ color: "#6b7280" }}>
              REVA helpt je alles bij te houden wat er tijdens je herstel toe doet, of je nu revalideert
              van een knieblessure, enkelblessure, schouderoperatie, heupvervanging of een ander langdurig
              hersteltraject. Van afspraken en dagelijkse check-ins tot medicatie, oefeningen en voortgang:
              overzichtelijk, rustig en betrouwbaar op één plek.
            </p>
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-3">
              <a
                href={`${DASHBOARD_URL}/register`}
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ background: "#e8632a" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
              >
                Start gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/functies"
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium border transition-colors"
                style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; }}
              >
                Bekijk functies
              </Link>
            </div>
            <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                <span className="text-sm" style={{ color: "#6b7280" }}>Nu volledig gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                <span className="text-sm" style={{ color: "#6b7280" }}>Geen creditcard nodig</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                <span className="text-sm" style={{ color: "#6b7280" }}>In 1 minuut aan de slag</span>
              </div>
            </div>
          </div>

          {/* Right: mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-right delay-300">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "9", label: "modules in één app" },
    { value: "€0", label: "nu volledig gratis te gebruiken" },
    { value: "100%", label: "jouw data, jouw privacy" },
  ];
  return (
    <section className="border-y" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} direction="up" delay={i * 100} className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#e8632a" }}>{s.value}</p>
              <p className="text-sm" style={{ color: "#6b7280" }}>{s.label}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="functies" className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
            Functies
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
            Alles in één app
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            REVA bundelt alles wat je nodig hebt tijdens je hersteltraject in één overzichtelijke app,
            van je eerste dag na een blessure of operatie tot je volledige herstel. Zo heb je altijd
            overzicht, zonder gedoe en zonder losse schriftjes of aparte apps.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimateIn key={f.title} direction="up" delay={i * 60}>
                <div
                  className="group h-full rounded-2xl p-6 border transition-shadow hover:shadow-md cursor-default"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#fff3ee" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                  </div>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn direction="up" delay={200} className="text-center mt-10">
          <Link
            href="/functies"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "#e8632a" }}
          >
            Bekijk alle functies in detail
            <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

function UspSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
            Waarom REVA
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
            Rust in je herstel
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Herstel vraagt al genoeg van je, of het nu gaat om een blessure, operatie of langdurig
            revalidatietraject. REVA zorgt dat je hoofd leeg kan zijn, terwijl de app alles voor je bijhoudt.
          </p>
        </AnimateIn>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-5 px-5 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {usps.map((u, i) => {
            const Icon = u.icon;
            return (
              <AnimateIn
                key={u.title}
                direction="up"
                delay={i * 120}
                className="shrink-0 w-[82%] snap-center md:w-auto md:shrink md:snap-none"
              >
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{ background: "#f8f7f4", border: "1px solid #e8e5df" }}
                >
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full"
                    style={{ background: "#fff3ee", color: "#e8632a" }}
                  >
                    {u.highlight}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#1c1c1e" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-end gap-1.5">
                      <p className="text-4xl font-bold leading-none" style={{ color: "#1a1a1a" }}>{u.stat}</p>
                      <p className="text-sm mb-0.5" style={{ color: "#9ca3af" }}>{u.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>{u.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{u.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-center md:hidden" style={{ color: "#9ca3af" }}>
          ← Swipe voor meer →
        </p>
      </div>
    </section>
  );
}

function TargetGroupSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
            Voor wie
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
            REVA is voor jou als je herstelt
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Of het nu gaat om een knieblessure, schouderoperatie, spierblessure, heupvervanging of een ander
            langdurig revalidatietraject: REVA geeft je structuur en overzicht, welke blessure of operatie je ook hebt.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {targetGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <AnimateIn key={g.title} direction="up" delay={i * 100}>
                <div
                  className="rounded-2xl p-7 border h-full"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#1c1c1e" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{g.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{g.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#1c1c1e" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "rgba(232,99,42,0.12)" }}>
            Hoe het werkt
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            In drie stappen aan de slag
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#7c7c8a" }}>
            REVA is binnen enkele minuten opgezet, zonder technische kennis. Zo heb je snel een
            overzicht dat echt werkt tijdens je herstel.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <AnimateIn key={s.nr} direction="up" delay={i * 120}>
              <div className="relative rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="block text-4xl font-bold mb-5" style={{ color: "rgba(232,99,42,0.3)" }}>{s.nr}</span>
                <h3 className="text-base font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7c7c8a" }}>{s.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn direction="up" delay={400} className="text-center mt-10">
          <a
            href={`${DASHBOARD_URL}/register`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors"
            style={{ background: "#e8632a" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
          >
            Begin vandaag
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

function TrustSection() {
  const trustPoints = [
    {
      icon: Shield,
      title: "Jouw data is van jou",
      description: "We verkopen je gegevens nooit. Je gezondheidsdata wordt versleuteld opgeslagen en is alleen toegankelijk voor jou.",
    },
    {
      icon: Clock,
      title: "Klaar in 5 minuten",
      description: "Account aanmaken, blessure invoeren, eerste check-in doen. REVA is snel opgezet zonder technische kennis.",
    },
    {
      icon: CheckCircle,
      title: "Geen verborgen kosten",
      description: "REVA is nu volledig gratis te gebruiken. Geen creditcard nodig, geen kleine lettertjes.",
    },
  ];

  return (
    <section className="py-16 md:py-20 border-t" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
            Gebouwd op vertrouwen
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustPoints.map((t, i) => {
            const Icon = t.icon;
            return (
              <AnimateIn key={t.title} direction="up" delay={i * 100}>
                <div className="flex gap-4 p-5 rounded-2xl border" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                  <div className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center" style={{ background: "#fff3ee" }}>
                    <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>{t.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{t.description}</p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
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
            Wat gebruikers zeggen
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

function PricingTeaserSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#ffffff", borderTop: "1px solid #e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up">
          <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: "#f8f7f4", border: "1px solid #e8e5df" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#e8632a" }}>In ontwikkeling</p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                Nu volledig gratis te gebruiken
              </h3>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                We bouwen REVA nog volop uit samen met onze eerste gebruikers. Geen creditcard, geen verplichtingen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`${DASHBOARD_URL}/register`}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white text-sm transition-colors"
                style={{ background: "#e8632a" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
              >
                Start gratis
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/faq"
                className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg font-medium text-sm border transition-colors"
                style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; }}
              >
                Veelgestelde vragen
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function FaqTeaserSection() {
  return (
    <section className="py-16 md:py-20 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
            Veelgestelde vragen
          </h2>
        </AnimateIn>
        <div className="space-y-3">
          {homeFaq.map((item, i) => (
            <AnimateIn key={item.q} direction="up" delay={i * 60}>
              <div className="rounded-2xl p-5 border" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                <p className="font-semibold text-sm mb-1.5" style={{ color: "#1a1a1a" }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn direction="up" delay={240} className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange"
            style={{ color: "#e8632a" }}
          >
            Bekijk alle veelgestelde vragen
            <Plus className="w-3.5 h-3.5" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

function BlogTeaserSection() {
  const posts = getSortedBlogPosts().slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <AnimateIn direction="up" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
            Vanuit de blog
          </h2>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            Praktische artikelen over herstel, revalidatie en sporthervatting.
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
                <BlogIllustration category={post.category} className="aspect-[16/9]" />
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
    <section className="py-20 md:py-28" style={{ background: "#1c1c1e" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <AnimateIn direction="up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 text-white">
            Klaar om grip te krijgen<br />op je herstel?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#7c7c8a" }}>
            Start vandaag. Geen creditcard nodig, geen verplichtingen.
            REVA is nu volledig gratis te gebruiken. Gewoon beginnen en zelf ervaren wat overzicht met je herstel doet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`${DASHBOARD_URL}/register`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white transition-colors text-base"
              style={{ background: "#e8632a" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
            >
              Start gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-colors"
              style={{ color: "#ffffff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
            >
              Veelgestelde vragen
            </Link>
          </div>
          <p className="mt-5 text-sm" style={{ color: "#52525e" }}>Nu volledig gratis · Geen creditcard nodig</p>
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
      <StatsSection />
      <FeaturesSection />
      <UspSection />
      <TargetGroupSection />
      <HowItWorksSection />
      <TrustSection />
      <TestimonialsSection />
      <PricingTeaserSection />
      <FaqTeaserSection />
      <BlogTeaserSection />
      <CtaSection />
    </>
  );
}
