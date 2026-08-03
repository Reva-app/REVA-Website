import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  Dumbbell,
  Pill,
  Smartphone,
  ArrowRight,
  Play,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Functies voor patiënten",
  description:
    "Wat patiënten ervaren in het REVA-portaal dat jouw praktijk aanbiedt: dagelijkse check-ins, herstelplannen, oefeningen en medicatieregistratie op de telefoon.",
  openGraph: {
    title: "Functies voor patiënten",
    description: "Check-ins, herstelplannen en medicatieregistratie: wat patiënten ervaren in het REVA-portaal.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/functies/voor-patienten",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/functies/voor-patienten",
  },
};

const features = [
  {
    icon: ClipboardCheck,
    title: "Dagelijkse check-ins",
    description:
      "In minder dan een minuut geeft een patiënt door hoe het herstel voelt: pijn, energie en stemming. Geen telefoontje of app-bericht nodig.",
  },
  {
    icon: Dumbbell,
    title: "Herstelplannen en oefeningen",
    description:
      "Patiënten zien precies welke oefeningen ze moeten doen en vinken hun voortgang af, zodat het herstelplan altijd duidelijk is.",
  },
  {
    icon: Pill,
    title: "Pijn- en medicatieregistratie",
    description:
      "Medicatiegebruik en pijnscores worden bijgehouden op één plek, in plaats van in losse notities of WhatsApp-berichten.",
  },
  {
    icon: Smartphone,
    title: "Altijd bij de hand",
    description:
      "Het portaal werkt op de browser, iOS en Android, zodat een patiënt zijn eigen herstel altijd en overal kan bijhouden.",
  },
];

export default function FunctiesVoorPatientenPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/functies/voor-patienten",
          name: "Functies voor patiënten | REVA",
          description:
            "Ontdek wat patiënten ervaren in het REVA-portaal dat jouw praktijk aan hen aanbiedt: dagelijkse check-ins, herstelplannen en oefeningen, pijn- en medicatieregistratie.",
        })}
      />
      <JsonLd data={itemListJsonLd(features.map((f) => ({ name: f.title, description: f.description })))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Functies", url: "https://www.reva-app.nl/functies" },
          { name: "Voor patiënten", url: "https://www.reva-app.nl/functies/voor-patienten" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Voor patiënten
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
                Een portaal dat je patiënten<br />
                <span style={{ color: "#e8632a" }}>zelf grip geeft op hun herstel</span>
              </h1>
              <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                Als jouw praktijk REVA aanbiedt, krijgen patiënten een persoonlijk portaal waarin ze
                dagelijks bijhouden hoe het herstel gaat. Overzichtelijk voor hen, en automatisch
                zichtbaar voor jou en je team.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/demo-aanvragen" className="group btn-primary px-5 py-3 text-sm">
                Vraag een demo aan
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
              <Link href="/functies/voor-fysios" className="btn-secondary px-5 py-3 text-sm">
                Bekijk functies voor fysio&apos;s
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AnimateIn key={f.title} direction="up" delay={i * 60}>
                    <div
                      className="h-full rounded-2xl p-6 border"
                      style={{ background: "#f8f7f4", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#fff3ee" }}>
                        <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                      </div>
                      <h3 className="text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.description}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video placeholder */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                Zie het patiëntenportaal in actie
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
                Binnenkort delen we hier een video die laat zien hoe patiënten hun herstel bijhouden
                in REVA. Wil je het nu al zien? Vraag een persoonlijke demo aan.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div
                className="relative rounded-3xl overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: "16 / 9", background: "#1c1c1e" }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(232,99,42,0.18)" }}>
                    <Play className="w-6 h-6 ml-0.5" style={{ color: "#e8632a" }} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: "#9ca3af" }}>Video volgt binnenkort</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
                Bied je patiënten een professioneel portaal
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#7c7c8a" }}>
                Tijdens een demo laten we zien hoe patiënten REVA ervaren, en hoe dat voor jouw
                praktijk overzicht oplevert.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3.5 text-base">
                  Vraag een demo aan
                  <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <Link href="/functies" className="btn-dark px-6 py-3.5 text-sm">
                  Bekijk alle functies
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
