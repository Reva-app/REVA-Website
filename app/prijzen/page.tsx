import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, Clock, CreditCard } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Prijzen — REVA App",
  description:
    "Probeer REVA Premium 4 dagen volledig gratis. Geen creditcard nodig. Daarna slechts €6,99 per maand, altijd opzegbaar.",
  openGraph: {
    title: "Prijzen — REVA App",
    description: "4 dagen REVA Premium gratis proberen. Daarna €6,99/maand. Geen verborgen kosten.",
    locale: "nl_NL",
    type: "website",
  },
};

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

const premiumFeatures = [
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
    q: "Is de proefperiode echt gratis?",
    a: "Ja, volledig. Je hebt 4 dagen lang toegang tot alle functies van REVA Premium zonder betaling. Geen creditcard nodig om te starten.",
  },
  {
    q: "Wat gebeurt er na de 4 dagen?",
    a: "Na de proefperiode kun je kiezen om door te gaan met REVA Premium voor €6,99 per maand. Als je niets doet, vervalt de toegang tot de premiumfuncties.",
  },
  {
    q: "Kan ik op elk moment opzeggen?",
    a: "Ja. Je abonnement is maandelijks opzegbaar. Er zijn geen langlopende verplichtingen of verborgen kosten.",
  },
  {
    q: "Zijn er kortingen voor langere periodes?",
    a: "We werken momenteel aan een jaarabonnement met korting. Houd onze website in de gaten voor updates.",
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

export default function PrijzenPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Prijzen
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Eerlijk geprijsd,<br />altijd opzegbaar
            </h1>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Begin 4 dagen gratis. Geen creditcard nodig. Daarna slechts €6,99 per maand.
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
                4 dagen gratis
              </span>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1" style={{ color: "#7c7c8a" }}>REVA Premium</p>
                <div className="flex items-end gap-2 mb-1">
                  <p className="text-5xl font-bold text-white">€6,99</p>
                  <p className="text-sm mb-2" style={{ color: "#7c7c8a" }}>/maand</p>
                </div>
                <p className="text-sm" style={{ color: "#52525e" }}>
                  Start met 4 dagen volledig gratis. Geen creditcard nodig.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((f) => (
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
                Start 4 dagen gratis
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs mt-4" style={{ color: "#52525e" }}>
                Geen creditcard · Altijd opzegbaar · Daarna €6,99/maand
              </p>
            </div>
          </AnimateIn>

          {/* Trust icons */}
          <AnimateIn direction="up" delay={150} className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Veilige data" },
              { icon: Clock, label: "4 dagen gratis" },
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

      {/* What's included — expanded */}
      <section className="py-12 md:py-16 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "#1a1a1a" }}>
              Alles inbegrepen. Geen verrassingen.
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              REVA Premium geeft je toegang tot alle 9 modules — direct en volledig.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {premiumFeatures.map((f, i) => (
              <AnimateIn key={f} direction="up" delay={i * 40}>
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                  style={{ background: "#ffffff", borderColor: "#e8e5df" }}
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
      <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
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
                  style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
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
              Begin vandaag. 4 dagen gratis.
            </h2>
            <p className="mb-6" style={{ color: "#7c7c8a" }}>
              Geen creditcard nodig, geen verplichtingen. Ervaar zelf wat REVA voor je herstel doet.
            </p>
            <a
              href={`${DASHBOARD_URL}/register`}
              className="btn-primary px-6 py-3"
            >
              Start 4 dagen gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs" style={{ color: "#52525e" }}>Daarna €6,99/maand · Altijd opzegbaar</p>
          </AnimateIn>
        </div>
      </section>
    </SiteLayout>
  );
}
