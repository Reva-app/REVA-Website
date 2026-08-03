import type { Metadata } from "next";
import Link from "next/link";
import { Users, LayoutDashboard, Lightbulb, Euro } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Vraag een demo aan",
  description:
    "Vraag een vrijblijvende demo aan van REVA. In een gesprek van hooguit 30 minuten laten we de software zien, beantwoorden we je vragen en geven we direct inzicht in de prijs.",
  openGraph: {
    title: "Vraag een demo aan",
    description: "Een vrijblijvend gesprek van hooguit 30 minuten over REVA voor jouw praktijk.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/contact",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/contact",
  },
};

const demoPoints = [
  {
    icon: Users,
    title: "Kennismaken",
    description: "We kijken samen of er een match is tussen REVA en jouw praktijk.",
  },
  {
    icon: LayoutDashboard,
    title: "Volledige rondleiding",
    description: "We nemen je helemaal mee door de software en beantwoorden direct je vragen.",
  },
  {
    icon: Lightbulb,
    title: "Strategisch meedenken",
    description: "We denken met je mee over hoe je REVA het beste inzet in jouw praktijk.",
  },
  {
    icon: Euro,
    title: "Direct inzicht in de prijs",
    description: "Je weet aan het einde van het gesprek precies wat REVA voor jouw praktijk kost.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/contact",
          name: "Vraag een demo aan | REVA",
          description:
            "Vraag een vrijblijvende demo aan van REVA. In een gesprek van hooguit 30 minuten laten we de software zien, beantwoorden we vragen en geven we direct inzicht in de prijs.",
          type: "ContactPage",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Contact", url: "https://www.reva-app.nl/contact" },
        ])}
      />
      <SiteLayout>
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Left: intro + wat je kunt verwachten */}
              <div className="lg:col-span-2">
                <AnimateIn direction="up">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                    Demo aanvragen
                  </span>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                    Zie hoe REVA in <span style={{ color: "#e8632a" }}>jouw praktijk</span> past
                  </h1>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                    Laat je gegevens achter, dan bellen we binnen één werkdag terug. We plannen een
                    moment dat in jouw agenda past en lopen het systeem stap voor stap door. Geheel
                    vrijblijvend, en hooguit 30 minuten van je tijd.
                  </p>
                </AnimateIn>

                <div className="space-y-5">
                  {demoPoints.map((point, i) => {
                    const Icon = point.icon;
                    return (
                      <AnimateIn key={point.title} direction="up" delay={100 + i * 80}>
                        <div className="flex items-start gap-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: "#fff3ee" }}
                          >
                            <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>{point.title}</p>
                            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{point.description}</p>
                          </div>
                        </div>
                      </AnimateIn>
                    );
                  })}
                </div>

                <AnimateIn direction="up" delay={450} className="mt-8 pt-6" >
                  <p className="text-sm" style={{ color: "#9ca3af" }}>
                    Liever eerst zelf lezen?{" "}
                    <Link href="/faq" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                      Bekijk de veelgestelde vragen
                    </Link>{" "}
                    of mail naar{" "}
                    <a href="mailto:info@reva-app.nl" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                      info@reva-app.nl
                    </a>
                    .
                  </p>
                </AnimateIn>
              </div>

              {/* Right: form card */}
              <div className="lg:col-span-3">
                <AnimateIn direction="right">
                  <div
                    className="rounded-2xl p-6 md:p-8"
                    style={{ background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <ContactForm />
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
