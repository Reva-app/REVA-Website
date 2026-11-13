import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { Lock, Server, ShieldCheck } from "lucide-react";
import { LoginOptions } from "@/components/LoginOptions";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Inloggen bij REVA",
  description:
    "Log in bij REVA: ga naar het praktijkportaal als fysiotherapeut of naar het patiëntenportaal als patiënt.",
  openGraph: {
    images: OG_IMAGES,
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

            <LoginOptions />

            <AnimateIn direction="up" delay={150} className="mt-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: "#9ca3af" }}>
                <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Beveiligde verbinding</li>
                <li className="flex items-center gap-1.5"><Server className="w-3.5 h-3.5" /> Data op Europese servers</li>
                <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Versleuteld opgeslagen</li>
              </ul>
            </AnimateIn>

            <AnimateIn direction="up" delay={200} className="mt-10 text-center">
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Nog geen account voor je praktijk?{" "}
                <Link href="/demo-aanvragen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  Plan een demo
                </Link>
                . Hulp nodig bij inloggen? Mail{" "}
                <a href="mailto:info@reva-app.nl" className="font-medium hover-orange" style={{ color: "#6b7280" }}>
                  info@reva-app.nl
                </a>
                .
              </p>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
