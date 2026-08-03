import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  CalendarDays,
  FolderOpen,
  BarChart3,
  CreditCard,
  Target,
  ArrowRight,
  Play,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Functies voor fysio's",
  description:
    "Ontdek wat REVA voor jou en je team als fysiotherapeut doet: praktijkoverzicht, afspraken en behandelplan, digitaal patiëntdossier, voortgangsanalyse en behandeldoelen, allemaal op één plek.",
  openGraph: {
    title: "Functies voor fysio's",
    description: "Praktijkoverzicht, dossier, voortgang en behandeldoelen: wat REVA voor jou als fysiotherapeut doet.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/functies/voor-fysios",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/functies/voor-fysios",
  },
};

const features = [
  {
    icon: LayoutDashboard,
    title: "Praktijkoverzicht",
    description:
      "Zie in één oogopslag hoeveel patiënten actief zijn, welke pijnscores binnenkwamen en wie er aandacht nodig heeft, zonder elk dossier apart te openen.",
  },
  {
    icon: CalendarDays,
    title: "Afspraken en behandelplan",
    description:
      "Plan en beheer afspraken per patiënt en behandelaar, met automatische herinneringen die no-shows verminderen.",
  },
  {
    icon: FolderOpen,
    title: "Digitaal patiëntdossier",
    description:
      "Diagnoses, verslagen, foto's en documenten overzichtelijk per patiënt, direct beschikbaar tijdens de behandeling.",
  },
  {
    icon: BarChart3,
    title: "Voortgangsanalyse",
    description:
      "Grafieken die trends in pijn, energie en therapietrouw laten zien, per patiënt en over je hele caseload.",
  },
  {
    icon: CreditCard,
    title: "Patiëntgegevens en contacten",
    description:
      "Verzekerings- en contactgegevens centraal en beschikbaar voor je hele team, niet alleen de behandelaar.",
  },
  {
    icon: Target,
    title: "Behandeldoelen en mijlpalen",
    description:
      "Leg per patiënt doelen vast en zie mijlpalen automatisch bijgehouden worden, als onderbouwing voor je rapportage.",
  },
];

export default function FunctiesVoorFysiosPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/functies/voor-fysios",
          name: "Functies voor fysio's | REVA",
          description:
            "Ontdek wat REVA voor jou en je team als fysiotherapeut doet: praktijkoverzicht, afspraken en behandelplan, digitaal patiëntdossier, voortgangsanalyse en behandeldoelen.",
        })}
      />
      <JsonLd data={itemListJsonLd(features.map((f) => ({ name: f.title, description: f.description })))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Functies", url: "https://www.reva-app.nl/functies" },
          { name: "Voor fysio's", url: "https://www.reva-app.nl/functies/voor-fysios" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Voor fysio&apos;s
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
                Overzicht en grip,<br />
                <span style={{ color: "#e8632a" }}>gebouwd voor jouw team</span>
              </h1>
              <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                REVA geeft jou en je collega&apos;s overzicht over de hele caseload, zonder dat je
                daar actief achteraan hoeft te bellen of appen. Van praktijkoverzicht tot dossier en
                voortgang: alles wat je als fysio nodig hebt om patiënten goed te begeleiden.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="group btn-primary px-5 py-3 text-sm">
                Vraag een demo aan
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
              <Link href="/functies/voor-patienten" className="btn-secondary px-5 py-3 text-sm">
                Bekijk functies voor patiënten
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Showcase foto */}
        <section className="py-12 md:py-16" style={{ background: "#f8f7f4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                  <Image
                    src="/7.png"
                    alt="Een fysiotherapeut die op kantoor REVA gebruikt, terwijl op de achtergrond een patiënt wordt behandeld"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 1024px, 100vw"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                Zie REVA in actie
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
                Binnenkort delen we hier een video die laat zien hoe fysio&apos;s in de praktijk met
                REVA werken. Wil je het nu al zien? Vraag een persoonlijke demo aan.
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
                Ontdek REVA voor jouw team
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#7c7c8a" }}>
                Tijdens een demo laten we zien hoe REVA past bij jouw praktijk en de manier waarop
                jij en je collega&apos;s patiënten begeleiden.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact" className="group btn-primary px-6 py-3.5 text-base">
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
