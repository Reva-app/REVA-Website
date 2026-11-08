import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Gift, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { pilotAsks, pilotBenefits, pilotFit, pilotOffer, pilotSpotsLabel } from "@/lib/offer";
import { pricingTiers, TRIAL_DAYS } from "@/lib/pricing";

const URL = "https://www.reva-app.nl/pilot";
const DESCRIPTION = `REVA zoekt ${pilotOffer.spotsTotal} fysiotherapiepraktijken die REVA als eerste gebruiken. Pilotpraktijken krijgen ${pilotOffer.discountPercent}% korting op het eerste jaar en persoonlijke onboarding, in ruil voor feedback en een klantervaring.`;

export const metadata: Metadata = {
  title: "Pilotprogramma: word pilotpraktijk van REVA",
  description: DESCRIPTION,
  openGraph: {
    title: "Word pilotpraktijk van REVA",
    description: `We zoeken ${pilotOffer.spotsTotal} praktijken die REVA als eerste gebruiken, met ${pilotOffer.discountPercent}% korting op het eerste jaar.`,
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const benefitIcons = [Gift, GraduationCap, MessageCircle, Sparkles];

const euro = (n: number) =>
  n.toLocaleString("nl-NL", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

const steps = [
  { title: "Aanmelden", text: "Vul het formulier in. Dat kost twee minuten.", time: "2 minuten" },
  { title: "Kennismaken", text: "We laten REVA zien en bespreken samen of de pilot bij je praktijk past.", time: "30 minuten" },
  { title: "Samen inrichten", text: "We zetten je praktijk, team en eerste herstelplannen samen klaar.", time: "Eén sessie" },
  { title: "Gebruiken en evalueren", text: "Je nodigt patiënten uit en we bespreken regelmatig wat werkt en wat beter kan.", time: "Eerste maanden" },
];

const faq = [
  {
    q: "Waarom zoekt REVA pilotpraktijken?",
    a: "REVA is net gestart. We willen dat het portaal aansluit op hoe fysiotherapeuten echt werken, en dat leer je alleen in de dagelijkse praktijk. Daarom werken we het eerste jaar nauw samen met een klein aantal praktijken.",
  },
  {
    q: "Is REVA al klaar voor gebruik?",
    a: "Ja. De functies die op deze site staan, kun je direct gebruiken met je patiënten. De pilot gaat over verfijnen op basis van jullie ervaring, niet over het testen van een half product.",
  },
  {
    q: "Wat kost de pilot?",
    a: `Je betaalt het eerste jaar de helft van het gewone tarief van je pakket. Voor een praktijk met 2 tot 5 medewerkers (Team) is dat ${euro(pricingTiers[1].monthly / 2)} euro per maand in plaats van ${pricingTiers[1].monthly} euro. Prijzen zijn exclusief btw.`,
  },
  {
    q: "Wat gebeurt er na het eerste jaar?",
    a: "Dan geldt het gewone tarief van je pakket. Je houdt alles wat je in REVA hebt opgebouwd, zoals herstelplannen, oefeningen en patiëntgegevens.",
  },
  {
    q: "Hoeveel tijd kost de pilot naast het gewone gebruik?",
    a: "Weinig. Naast het gebruik van REVA met je patiënten vragen we een paar korte evaluatiegesprekken, op momenten die jou uitkomen, en na de eerste maanden een korte klantervaring.",
  },
  {
    q: "Wat als alle plekken vergeven zijn?",
    a: `Dan kun je REVA gewoon gebruiken tegen het normale tarief, en je probeert het eerst ${TRIAL_DAYS} dagen gratis.`,
  },
];

export default function PilotPage() {
  const open = pilotOffer.active && pilotOffer.spotsLeft > 0;

  return (
    <>
      <JsonLd data={webPageJsonLd({ url: URL, name: "Pilotprogramma REVA", description: DESCRIPTION })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${URL}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Pilotprogramma", url: URL },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <AnimateIn direction="up" className="lg:col-span-3">
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>
                Pilotprogramma &middot; {pilotSpotsLabel()}
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Word een van de drie pilotpraktijken van REVA
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                REVA is net gestart. We zoeken {pilotOffer.spotsTotal} fysiotherapiepraktijken die REVA als eerste in de
                dagelijkse praktijk gebruiken en ons helpen het nog beter te maken. Je krijgt{" "}
                {pilotOffer.discountPercent}% korting op het eerste jaar en persoonlijke begeleiding, in ruil voor je
                feedback en een klantervaring.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#aanmelden" className="group btn-primary px-5 py-3 text-sm justify-center">
                  {open ? "Meld je praktijk aan" : "Plan een demo"}
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <Link
                  href="/functies/voor-fysios"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                  style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
                >
                  Eerst zien hoe REVA werkt
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={120} className="lg:col-span-2">
              <div className="rounded-2xl p-6 md:p-8" style={{ background: "#1c1c1e" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#e8632a" }}>
                  Pilotplekken
                </p>
                <div className="flex items-center gap-2 mb-2" aria-hidden="true">
                  {Array.from({ length: pilotOffer.spotsTotal }).map((_, i) => (
                    <span
                      key={i}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: i < pilotOffer.spotsLeft ? "#e8632a" : "rgba(255,255,255,0.08)" }}
                    >
                      {i >= pilotOffer.spotsLeft && <Check className="w-4 h-4" style={{ color: "#7c7c8a" }} />}
                    </span>
                  ))}
                </div>
                <p className="text-sm mb-6" style={{ color: "#c9c9ce" }}>{pilotSpotsLabel()}</p>
                <ul className="space-y-3">
                  {pilotBenefits.map((b) => (
                    <li key={b.title} className="flex items-start gap-2.5 text-sm text-white">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                      {b.title}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Wat je krijgt */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Wat je als pilotpraktijk krijgt
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Meer dan korting: je bent de eerste praktijk die REVA gebruikt, en dat merk je in de begeleiding.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pilotBenefits.map((b, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <AnimateIn key={b.title} direction="up" delay={i * 70} className="h-full">
                    <div className="h-full rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#fff3ee" }}>
                        <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                      </span>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{b.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{b.text}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wat we vragen + voor wie */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Wat we van je vragen
              </h2>
              <ol className="space-y-4">
                {pilotAsks.map((a, i) => (
                  <li key={a.title} className="flex items-start gap-4 rounded-2xl border p-5" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0" style={{ background: "#e8632a" }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold mb-1" style={{ color: "#1a1a1a" }}>{a.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{a.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Voor welke praktijken
              </h2>
              <ul className="space-y-3 mb-6">
                {pilotFit.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "#1a1a1a" }}>
                    <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Twijfel je of je praktijk past? Meld je aan, dan bespreken we het in de kennismaking.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Prijs */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Wat je betaalt in het eerste jaar
              </h2>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Alle functies zitten in elk pakket. Na het eerste jaar geldt het gewone tarief. Prijzen per maand, exclusief btw.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={80}>
              <table className="w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                <thead>
                  <tr style={{ background: "#f8f7f4" }}>
                    <th scope="col" className="text-left font-semibold px-4 md:px-5 py-4" style={{ color: "#6b7280" }}>Pakket</th>
                    <th scope="col" className="text-right font-semibold px-4 md:px-5 py-4" style={{ color: "#6b7280" }}>Normaal</th>
                    <th scope="col" className="text-right font-semibold px-4 md:px-5 py-4" style={{ color: "#e8632a" }}>Als pilotpraktijk</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((t, i) => (
                    <tr key={t.name} style={{ background: i % 2 ? "#fcfbf9" : "#ffffff" }}>
                      <th scope="row" className="text-left px-4 md:px-5 py-4 align-top">
                        <span className="block font-semibold" style={{ color: "#1a1a1a" }}>{t.name}</span>
                        <span className="block text-xs font-normal mt-0.5" style={{ color: "#9ca3af" }}>
                          {t.features.find((f) => f.includes("medewerker"))}
                        </span>
                      </th>
                      <td className="text-right px-4 md:px-5 py-4 align-top tabular-nums line-through" style={{ color: "#9ca3af" }}>
                        &euro;{euro(t.monthly)}
                      </td>
                      <td className="text-right px-4 md:px-5 py-4 align-top tabular-nums font-semibold" style={{ color: "#1a1a1a" }}>
                        &euro;{euro(t.monthly * (1 - pilotOffer.discountPercent / 100))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm" style={{ color: "#6b7280" }}>
                Meer dan 20 medewerkers? Dan maken we een voorstel op maat. Alle details per pakket staan op de{" "}
                <Link href="/prijzen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>prijzenpagina</Link>.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Verloop */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up" className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight" style={{ color: "#1a1a1a" }}>
                Zo verloopt de pilot
              </h2>
            </AnimateIn>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <AnimateIn key={s.title} direction="up" delay={i * 70} className="h-full">
                  <li className="h-full rounded-2xl border p-6 flex flex-col" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
                    <span className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#e8632a" }}>Stap {i + 1}</span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{s.text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs" style={{ color: "#9ca3af" }}>
                      <Clock className="w-3.5 h-3.5" /> {s.time}
                    </span>
                  </li>
                </AnimateIn>
              ))}
            </ol>
          </div>
        </section>

        {/* Aanmelden */}
        <section id="aanmelden" className="py-16 md:py-24 scroll-mt-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <AnimateIn direction="up" className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                {open ? "Meld je praktijk aan" : "Alle pilotplekken zijn vergeven"}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                {open
                  ? "Laat je gegevens achter. We nemen binnen één werkdag contact op voor een kennismaking van 30 minuten. Aanmelden is vrijblijvend."
                  : `Je kunt REVA wel gewoon gebruiken. Plan een demo en probeer REVA ${TRIAL_DAYS} dagen gratis.`}
              </p>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Liever eerst een vraag stellen? Mail naar <span className="font-medium" style={{ color: "#1a1a1a" }}>info@reva-app.nl</span>.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={100} className="lg:col-span-3">
              <div className="rounded-2xl border p-6 md:p-8" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                <ContactForm variant={open ? "pilot" : "demo"} />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Vragen */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
                Vragen over de pilot
              </h2>
              <FaqAccordion items={faq} />
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
