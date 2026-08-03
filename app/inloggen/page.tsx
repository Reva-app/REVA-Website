import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Inloggen",
  description:
    "Log in bij REVA: ga naar het praktijkportaal als fysiotherapeut of naar het patiëntenportaal als patiënt.",
  openGraph: {
    title: "Inloggen",
    description: "Kies of je inlogt als fysiotherapeut of als patiënt bij REVA.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/inloggen",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.reva-app.nl/inloggen",
  },
};

const loginOptions = [
  {
    icon: Stethoscope,
    badge: "Praktijk",
    title: "Ik ben fysiotherapeut",
    description:
      "Log in op het praktijkportaal voor je patiëntoverzicht, dossiers, signaleringen en herstelplannen.",
    cta: "Inloggen als fysiotherapeut",
    href: "https://dashboard.reva-app.nl/portal",
    direction: "left" as const,
  },
  {
    icon: HeartPulse,
    badge: "Patiënt",
    title: "Ik ben patiënt",
    description:
      "Log in op je persoonlijke portaal voor check-ins, oefeningen, medicatie en je herstelplan.",
    cta: "Inloggen als patiënt",
    href: "https://dashboard.reva-app.nl/login",
    direction: "right" as const,
  },
];

export default function InloggenPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/inloggen",
          name: "Inloggen | REVA",
          description: "Kies of je inlogt als fysiotherapeut of als patiënt bij REVA.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Inloggen", url: "https://www.reva-app.nl/inloggen" },
        ])}
      />
      <SiteLayout>
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="text-center mb-12 md:mb-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Inloggen
              </span>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Waar wil je inloggen?
              </h1>
              <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: "#6b7280" }}>
                REVA heeft een apart portaal voor praktijken en voor patiënten. Kies hieronder waar je bij hoort.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loginOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <AnimateIn key={option.title} direction={option.direction} delay={i * 100}>
                    <a
                      href={option.href}
                      className="group flex flex-col h-full rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{ background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                    >
                      <span
                        className="inline-block self-start text-xs font-semibold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full"
                        style={{ color: "#e8632a", background: "#fff3ee" }}
                      >
                        {option.badge}
                      </span>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: "#fff3ee" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#e8632a" }} />
                      </div>
                      <h2 className="text-lg font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                        {option.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6b7280" }}>
                        {option.description}
                      </p>
                      <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#e8632a" }}>
                        {option.cta}
                        <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                    </a>
                  </AnimateIn>
                );
              })}
            </div>

            <AnimateIn direction="up" delay={200} className="mt-10 text-center">
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Nog geen account voor je praktijk?{" "}
                <Link href="/demo-aanvragen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  Vraag een demo aan
                </Link>
                .
              </p>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
