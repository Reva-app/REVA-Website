import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, CreditCard, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Prijzen — nu volledig gratis",
  description:
    "REVA is nog in ontwikkeling. De app is voorlopig volledig gratis te gebruiken, zonder creditcard en zonder verplichtingen.",
  openGraph: {
    title: "Prijzen — nu volledig gratis",
    description: "REVA is nog in ontwikkeling en voorlopig volledig gratis te gebruiken.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/prijzen",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/prijzen",
  },
};

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

const includedFeatures = [
  "Persoonlijk herstel dashboard",
  "Dagelijkse check-ins (pijn, energie, stemming)",
  "Afspraken bijhouden",
  "Trainingen en oefeningen volgen",
  "Medicatie en pijnregistratie",
  "Persoonlijk digitaal dossier",
  "Voortgang en analyse met grafieken",
  "Zorgverzekering & contactgegevens",
  "Doelen & mijlpalen instellen",
];

const faq = [
  {
    q: "Is REVA echt gratis?",
    a: "Ja, volledig. Je kunt nu alle functies van REVA gebruiken zonder te betalen en zonder creditcard.",
  },
  {
    q: "Waarom is REVA nog gratis?",
    a: "REVA is nog in ontwikkeling. We willen eerst een groep gebruikers goed helpen en van hun feedback leren, voordat we de app verder doorontwikkelen.",
  },
  {
    q: "Blijft REVA altijd gratis?",
    a: "Dat kunnen we op dit moment niet garanderen. Mochten we in de toekomst betaalde functies toevoegen, dan laten we dat ruim van tevoren weten aan alle gebruikers.",
  },
  {
    q: "Is er een versie voor zorgverleners of praktijken?",
    a: "We werken aan een variant voor fysiotherapiepraktijken en revalidatiecentra. Neem contact op voor meer informatie.",
  },
  {
    q: "Is mijn gezondheidsdata veilig?",
    a: "Ja. Jouw data wordt versleuteld opgeslagen en nooit gedeeld of verkocht. Jouw gezondheidsinformatie is privé en blijft van jou.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PrijzenPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "In ontwikkeling", url: "https://www.reva-app.nl/prijzen" },
        ])}
      />
      <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              In ontwikkeling
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Nu volledig gratis te gebruiken
            </h1>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              We bouwen REVA nog volop uit. Daarom is de app op dit moment gratis, zonder creditcard en zonder verplichtingen.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-lg mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "#1c1c1e" }}
            >
              <span
                className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "#e8632a", color: "#ffffff" }}
              >
                Early access
              </span>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1" style={{ color: "#7c7c8a" }}>REVA</p>
                <div className="flex items-end gap-2 mb-1">
                  <p className="text-5xl font-bold text-white">€0</p>
                  <p className="text-sm mb-2" style={{ color: "#7c7c8a" }}>voorlopig</p>
                </div>
                <p className="text-sm" style={{ color: "#52525e" }}>
                  Alle functies direct beschikbaar. Geen creditcard nodig.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {includedFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${DASHBOARD_URL}/register`}
                className="btn-primary flex justify-center px-5 py-3.5 text-base w-full"
              >
                Start gratis
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs mt-4" style={{ color: "#52525e" }}>
                Geen creditcard · Geen verplichtingen · Nu volledig gratis
              </p>
            </div>
          </AnimateIn>

          {/* Trust icons */}
          <AnimateIn direction="up" delay={150} className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Veilige data" },
              { icon: Sparkles, label: "Alle functies" },
              { icon: CreditCard, label: "Geen creditcard" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#fff3ee" }}>
                  <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                </div>
                <p className="text-xs font-medium" style={{ color: "#6b7280" }}>{label}</p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Why free right now */}
      <section className="py-12 md:py-16 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <div className="rounded-2xl p-7 md:p-8 border" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
              <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                Waarom is REVA nu gratis?
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                REVA is nog in ontwikkeling. Voordat we de app verder uitbouwen, willen we eerst
                een groep gebruikers goed helpen tijdens hun herstel en van hun ervaringen leren.
                Daarom is REVA voorlopig volledig gratis, zonder beperkingen op functies.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                We kunnen op dit moment niet garanderen dat REVA altijd gratis blijft. Mochten we
                in de toekomst betaalde functies toevoegen, dan laten we dat ruim van tevoren weten
                aan iedereen die de app gebruikt.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What's included: expanded */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              Alles inbegrepen. Geen verrassingen.
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              REVA geeft je nu toegang tot alle 9 modules, direct en volledig.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includedFeatures.map((f, i) => (
              <AnimateIn key={f} direction="up" delay={i * 40}>
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                  style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                >
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#16a34a" }} />
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{f}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              Veelgestelde vragen
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <AnimateIn key={item.q} direction="up" delay={i * 60}>
                <div
                  className="rounded-2xl p-5 border"
                  style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "#1a1a1a" }}>{item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="up" delay={200} className="mt-8 text-center">
            <p className="text-sm" style={{ color: "#6b7280" }}>
              Nog een vraag?{" "}
              <Link href="/contact" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                Neem contact op
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Begin vandaag. Volledig gratis.
            </h2>
            <p className="mb-6" style={{ color: "#7c7c8a" }}>
              Geen creditcard nodig, geen verplichtingen. Ervaar zelf wat REVA voor je herstel doet.
            </p>
            <a
              href={`${DASHBOARD_URL}/register`}
              className="btn-primary px-6 py-3"
            >
              Start gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs" style={{ color: "#52525e" }}>Nu volledig gratis · Geen creditcard nodig</p>
          </AnimateIn>
        </div>
      </section>
      </SiteLayout>
    </>
  );
}
