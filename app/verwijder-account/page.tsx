import type { Metadata } from "next";
import Link from "next/link";
import { Settings, Trash2, AlertTriangle, CheckCircle, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Account verwijderen — REVA App",
  description:
    "Lees hoe je jouw REVA account en alle bijbehorende gegevens permanent kunt verwijderen via de instellingen van de app.",
  robots: {
    index: true,
    follow: true,
  },
};

const steps = [
  {
    nr: "1",
    icon: Settings,
    title: "Ga naar Instellingen",
    description:
      "Open de REVA App en navigeer naar je persoonlijke instellingen. Je vindt deze via het profielicoon rechtsboven in de app.",
  },
  {
    nr: "2",
    icon: Trash2,
    title: "Klik op \"Account verwijderen\"",
    description:
      "Scroll naar beneden in de instellingen totdat je de knop \"Account verwijderen\" ziet. Klik hierop om het verwijderproces te starten.",
  },
  {
    nr: "3",
    icon: AlertTriangle,
    title: "Volg de bevestigingsstappen",
    description:
      "Je krijgt een bevestigingsscherm te zien met een waarschuwing dat deze actie niet ongedaan gemaakt kan worden. Lees deze goed door.",
  },
  {
    nr: "4",
    icon: CheckCircle,
    title: "Typ \"VERWIJDER\" ter bevestiging",
    description:
      "Voer het woord VERWIJDER in het invulveld in (in hoofdletters). Dit is een bewuste extra stap om onbedoelde verwijdering te voorkomen.",
  },
];

export default function VerwijderAccountPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-14 md:py-18 border-b" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#9ca3af" }}>
              <Link href="/" className="hover-orange transition-colors" style={{ color: "#9ca3af" }}>Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Account verwijderen</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
              Account verwijderen
            </h1>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: "#6b7280" }}>
              Je kunt je REVA account en alle bijbehorende gegevens op elk moment permanent verwijderen.
              Dit is een onomkeerbare actie — lees deze pagina goed door voordat je verder gaat.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Warning banner */}
      <section className="py-6" style={{ background: "#fffbeb", borderBottom: "1px solid #fde68a" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#d97706" }} />
            <div>
              <p className="text-sm font-semibold mb-0.5" style={{ color: "#92400e" }}>
                Let op: deze actie kan niet ongedaan worden gemaakt
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#78350f" }}>
                Als je je account verwijdert, worden al jouw gegevens permanent gewist. Dit omvat je check-ins,
                afspraken, medicatiegeschiedenis, dossier, trainingen, doelen en alle andere opgeslagen informatie.
                Exporteer eventueel eerst je gegevens als je die wilt bewaren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up" className="mb-8">
            <h2 className="text-xl font-semibold" style={{ color: "#1a1a1a" }}>
              Stap voor stap je account verwijderen
            </h2>
          </AnimateIn>

          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.nr} direction="up" delay={i * 80}>
                  <div
                    className="flex gap-4 rounded-2xl p-5 border"
                    style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                  >
                    {/* Step number + icon */}
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: "#1c1c1e" }}
                      >
                        {step.nr}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 min-h-[16px]" style={{ background: "#e8e5df" }} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-1 pb-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                        <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{step.title}</p>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{step.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* Confirmation code highlight */}
          <AnimateIn direction="up" delay={360}>
            <div
              className="mt-6 rounded-2xl p-5 border"
              style={{ background: "#fff3ee", borderColor: "rgba(232,99,42,0.25)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                Bevestigingswoord
              </p>
              <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
                Typ het onderstaande woord exact over in het bevestigingsveld om je account te verwijderen:
              </p>
              <div
                className="inline-block rounded-lg px-5 py-2.5 font-mono font-bold text-lg tracking-widest"
                style={{ background: "#1c1c1e", color: "#ffffff" }}
              >
                VERWIJDER
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What gets deleted */}
      <section className="py-12 md:py-14 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#1a1a1a" }}>
              Wat wordt er verwijderd?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Accountgegevens (naam en e-mailadres)",
                "Alle dagelijkse check-ins",
                "Afspraken en agenda",
                "Medicatiegegevens en pijnregistraties",
                "Trainingen en oefeningen",
                "Persoonlijk dossier en documenten",
                "Zorgverzekering en contactgegevens",
                "Doelen en mijlpalen",
                "Voortgangsdata en grafieken",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <Trash2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#dc2626" }} />
                  <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>
              Gegevens worden binnen 30 dagen na verwijdering permanent gewist uit onze systemen, inclusief back-ups.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Help / contact */}
      <section className="py-12 md:py-14 border-t" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#1a1a1a" }}>
              Hulp nodig of vragen?
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
              Lukt het niet om je account te verwijderen, of heb je een andere vraag over jouw gegevens?
              Neem dan contact met ons op via{" "}
              <a
                href="mailto:info@reva-app.nl"
                className="font-medium underline"
                style={{ color: "#e8632a" }}
              >
                info@reva-app.nl
              </a>
              . Wij helpen je binnen 2 werkdagen.
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              Meer informatie over hoe wij omgaan met jouw gegevens vind je in onze{" "}
              <Link href="/privacy-policy" className="font-medium underline" style={{ color: "#e8632a" }}>
                Privacy Policy
              </Link>
              .
            </p>
          </AnimateIn>
        </div>
      </section>
    </SiteLayout>
  );
}
