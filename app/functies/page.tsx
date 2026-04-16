import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardCheck,
  CalendarDays,
  Dumbbell,
  Pill,
  FolderOpen,
  BarChart3,
  CreditCard,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Functies — REVA App",
  description:
    "Ontdek alle 9 functies van REVA: dagelijkse check-ins, afspraken, medicatie, dossier, voortgangsanalyse, zorgverzekering en meer. Alles op één plek voor jouw hersteltraject.",
  openGraph: {
    title: "Functies — REVA App",
    description: "Alle 9 functies van REVA voor een gestructureerd en overzichtelijk hersteltraject.",
    locale: "nl_NL",
    type: "website",
  },
};

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

const features = [
  {
    icon: LayoutDashboard,
    title: "Persoonlijk dashboard",
    subtitle: "Jouw herstel in één oogopslag",
    description:
      "Het dashboard is de eerste pagina die je ziet als je REVA opent. In één oogopslag zie je alles wat er toe doet: je dagelijkse streak, de pijnscore van gisteren, je volgende afspraak en je voortgang over de afgelopen week.",
    example:
      "Stel je voor: je wordt wakker na je knieoperatie. Je opent REVA en ziet direct dat je al 12 dagen in herstel bent, dat je pijnscore gisteren 3.2 was (verbeterd ten opzichte van vorige week) en dat je morgen om 10:00 bij de fysiotherapeut bent.",
    benefits: [
      "Altijd direct overzicht zonder door meerdere schermen te scrollen",
      "Motiverende streak die je aanmoedigt elke dag bij te houden",
      "Pijnscore en voortgang in één oogopslag zichtbaar",
      "Volgende afspraken prominent weergegeven",
    ],
    dark: false,
  },
  {
    icon: ClipboardCheck,
    title: "Dagelijkse check-ins",
    subtitle: "Hoe voel je je vandaag?",
    description:
      "Elke dag vul je een korte check-in in: hoe is je pijnniveau, hoe is je energieniveau en hoe voel je je mentaal? Dit duurt minder dan een minuut, maar levert over tijd waardevolle inzichten op over hoe je herstel werkelijk verloopt.",
    example:
      "Na weken van dagelijkse check-ins zie je duidelijk dat je pijnscore elke maandag iets hoger is — dat wil zeggen na het weekend. Dit helpt je en je fysiotherapeut begrijpen wanneer je meer rust nodig hebt.",
    benefits: [
      "In minder dan 60 seconden gedaan",
      "Pijn, energie en stemming apart bijgehouden",
      "Bouwt over tijd een compleet herstelpatroon op",
      "Herinneringen zodat je nooit een dag vergeet",
    ],
    dark: true,
  },
  {
    icon: CalendarDays,
    title: "Afspraken bijhouden",
    subtitle: "Nooit meer een afspraak vergeten",
    description:
      "Voeg al je medische en revalidatie-afspraken toe aan REVA: fysiotherapeut, orthopeed, controle in het ziekenhuis of een sportarts. Je ziet ze overzichtelijk in een agenda en krijgt een herinnering voor de afspraak.",
    example:
      "Je hebt in de komende weken vijf afspraken verspreid over drie zorgverleners. In REVA staan ze netjes op volgorde met datum, tijd en locatie. Geen dubbele reserveringen, geen vergeten controles.",
    benefits: [
      "Alle afspraken op één plek — geen losse aantekeningen meer",
      "Automatische herinneringen zodat je nooit te laat bent",
      "Overzicht van komende én afgelopen afspraken",
      "Per afspraak notities toevoegen voor voorbereiding",
    ],
    dark: false,
  },
  {
    icon: Dumbbell,
    title: "Trainingen en oefeningen",
    subtitle: "Volg je revalidatieschema stap voor stap",
    description:
      "Je fysiotherapeut geeft je oefeningen mee. In REVA registreer je welke oefeningen je hebt gedaan, hoe lang en hoe het voelde. Zo bouw je rustig en gestructureerd op, en zie je duidelijk je activiteitspatroon over de weken.",
    example:
      "Je hebt 7 oefeningen per dag gekregen van je fysiotherapeut. In REVA vink je ze één voor één af als je ze hebt gedaan. Je ziet meteen: 5 van de 7 klaar. En volgende week zie je dat je consistent 6 of 7 oefeningen afrondde — dat is vooruitgang.",
    benefits: [
      "Oefeningen afvinken geeft motivatie en overzicht",
      "Activiteitsniveau bijhouden over weken en maanden",
      "Koppeling met je pijnscore: zie hoe training je pijn beïnvloedt",
      "Rustig opbouwen op basis van je eigen tempo",
    ],
    dark: true,
  },
  {
    icon: Pill,
    title: "Medicatie en pijn",
    subtitle: "Exact bijhouden wat je neemt en wanneer",
    description:
      "Registreer welke medicatie je neemt, welke dosering en op welke tijden. REVA houdt de pijnontwikkeling bij naast je medicatiegebruik, zodat je zelf en je arts duidelijk kunnen zien wat werkt en wat niet.",
    example:
      "Je gebruikt pijnstillers na je operatie. In REVA zie je dat je de eerste week 3 keer per dag ibuprofen nam, en dat dit na drie weken al terugliep naar eenmaal per dag — een teken dat je herstel vordert.",
    benefits: [
      "Nooit meer vergeten of je je medicatie al hebt genomen",
      "Pijnverloop direct naast medicatiegebruik zichtbaar",
      "Handige overzichten voor gesprekken met je arts",
      "Registreer bijwerkingen of opmerkingen per inname",
    ],
    dark: false,
  },
  {
    icon: FolderOpen,
    title: "Persoonlijk dossier",
    subtitle: "Alles op één veilige plek",
    description:
      "Upload brieven van de specialist, röntgenfoto's, operatieverslagen of uitslagen. Jouw digitale dossier in REVA is altijd beschikbaar — ook als je naar een nieuwe zorgverlener gaat of een second opinion vraagt.",
    example:
      "Je bent bij een nieuwe fysiotherapeut en moet je diagnose uitleggen. Je opent je REVA dossier, toont de brief van de orthopeed en de röntgenuitslag. De fysiotherapeut heeft direct de juiste context — in plaats van dat je alles uit je hoofd moet reconstrueren.",
    benefits: [
      "Documenten altijd bij de hand op je telefoon of laptop",
      "Veilig opgeslagen, versleuteld en privé",
      "Nooit meer zoeken in e-mails of papieren mappen",
      "Ideaal voor second opinions of nieuwe zorgverleners",
    ],
    dark: true,
  },
  {
    icon: BarChart3,
    title: "Voortgang en analyse",
    subtitle: "Zie hoe je herstel werkelijk verloopt",
    description:
      "REVA zet je dagelijkse check-ins en activiteitsdata om in inzichtelijke grafieken. Je ziet trends in pijn, energie en stemming over weken. Dat geeft je motivatie op goede dagen en inzicht op moeilijke momenten.",
    example:
      "Na 6 weken revalidatie open je de analyseweergave in REVA. Je ziet dat je pijnscore van gemiddeld 4.5 naar 2.1 is gedaald — een halvering. Je energieniveau is elk week iets gestegen. Dat zijn concrete bewijzen dat je herstel werkt.",
    benefits: [
      "Grafieken van pijn, energie en stemming over tijd",
      "Weekoverzichten om trends te herkennen",
      "Motiverend: zie je vooruitgang zwart op wit",
      "Exporteer data voor gesprekken met je arts of fysiotherapeut",
    ],
    dark: false,
  },
  {
    icon: CreditCard,
    title: "Zorgverzekering & contacten",
    subtitle: "Altijd de juiste informatie bij de hand",
    description:
      "Sla je zorgverzekeringsgegevens op in REVA: je polisnummer, de naam van je zorgverzekeraar, het telefoonnummer van je ziekenhuis en andere relevante contacten. Zo heb je altijd alles bij de hand als je snel moet bellen of een afspraak wil maken.",
    example:
      "Je wilt het ziekenhuis bellen om een afspraak te verzetten, maar je weet je polisnummer niet meer uit je hoofd en je verzekeringspas ligt ergens thuis. In REVA open je de zorgverzekeringskaart — alles staat er direct in.",
    benefits: [
      "Polisnummer en verzekeringsnaam altijd bij de hand",
      "Contacten van het ziekenhuis, huisarts en specialist opslaan",
      "Ideaal voor als je snel informatie nodig hebt",
      "Nooit meer zoeken in papieren of e-mails",
    ],
    dark: true,
  },
  {
    icon: Target,
    title: "Doelen & mijlpalen",
    subtitle: "Van kleine stap naar volledig herstel",
    description:
      "Stel persoonlijke hersteldoelen in en vier elke mijlpaal die je bereikt. Of het nu gaat om 'lopen zonder kruk', 'volledig trap op en af' of 'terugkeren naar sport' — REVA helpt je je herstelreis te structureren en te motiveren.",
    example:
      "Je stelt het doel in: 'Binnen 8 weken 10 minuten lopen zonder pijn'. Na 6 weken bereik je dit doel 2 weken eerder dan gepland. REVA markeert dit als een behaalde mijlpaal — een moment om trots op te zijn.",
    benefits: [
      "Concrete doelen geven richting aan je hersteltraject",
      "Mijlpalen vieren geeft motivatie om door te gaan",
      "Inzicht in je tempo: ben je voor of achter op schema?",
      "Bespreek je doelen met je fysiotherapeut voor afstemming",
    ],
    dark: false,
  },
];

export default function FunctiesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Functies
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
              9 modules voor een<br />
              <span style={{ color: "#e8632a" }}>gestructureerd herstel</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              REVA bundelt alles wat je nodig hebt tijdens je revalidatie. Van dagelijkse check-ins tot zorgverzekering en hersteldoelen — op één plek, overzichtelijk en betrouwbaar.
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${DASHBOARD_URL}/register`}
              className="btn-primary px-5 py-3 text-sm"
            >
              Start 4 dagen gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/prijzen"
              className="btn-secondary px-5 py-3 text-sm"
            >
              Bekijk prijzen
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Feature overview grid */}
      <section className="py-12 border-y" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimateIn key={f.title} direction="up" delay={i * 40}>
                  <a
                    href={`#${f.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl border text-center transition-shadow hover:shadow-md cursor-pointer group"
                    style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: "#fff3ee" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                    </div>
                    <p className="text-xs font-medium leading-tight" style={{ color: "#374151" }}>{f.title}</p>
                  </a>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed feature sections */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const sectionId = feature.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");

        return (
          <section
            key={feature.title}
            id={sectionId}
            className="py-16 md:py-24"
            style={{ background: feature.dark ? "#1c1c1e" : index % 2 === 0 ? "#f8f7f4" : "#ffffff" }}
          >
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Text */}
                <AnimateIn direction="up" className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                  <div className="space-y-5 max-w-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: feature.dark ? "rgba(232,99,42,0.18)" : "#fff3ee" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          background: feature.dark ? "rgba(232,99,42,0.12)" : "#fff3ee",
                          color: "#e8632a",
                        }}
                      >
                        Module {index + 1} van 9
                      </span>
                    </div>

                    <div>
                      <h2
                        className="text-2xl md:text-3xl font-semibold tracking-tight mb-1"
                        style={{ color: feature.dark ? "#ffffff" : "#1a1a1a" }}
                      >
                        {feature.title}
                      </h2>
                      <p className="text-base font-medium" style={{ color: "#e8632a" }}>
                        {feature.subtitle}
                      </p>
                    </div>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: feature.dark ? "#9ca3af" : "#6b7280" }}
                    >
                      {feature.description}
                    </p>

                    <ul className="space-y-2.5">
                      {feature.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: feature.dark ? "#e8632a" : "#16a34a" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: feature.dark ? "#d1d5db" : "#374151" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>

                {/* Example card */}
                <AnimateIn direction="up" delay={120} className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                      background: feature.dark ? "rgba(255,255,255,0.05)" : "#ffffff",
                      border: feature.dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e8e5df",
                      boxShadow: feature.dark ? "none" : "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: "#e8632a" }}
                    >
                      Voorbeeld in de praktijk
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: feature.dark ? "#9ca3af" : "#6b7280" }}
                    >
                      {feature.example}
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: "#1c1c1e" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Alle 9 modules direct beschikbaar
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#7c7c8a" }}>
              Begin met 4 dagen REVA Premium volledig gratis. Geen creditcard, geen gedoe. Gewoon beginnen en zelf ervaren hoe het werkt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${DASHBOARD_URL}/register`}
                className="btn-primary px-6 py-3.5 text-base"
              >
                Start 4 dagen gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/prijzen"
                className="btn-dark px-6 py-3.5 text-sm"
              >
                Bekijk de prijs
              </Link>
            </div>
            <p className="mt-5 text-xs" style={{ color: "#52525e" }}>Daarna €6,99/maand · Altijd opzegbaar</p>
          </AnimateIn>
        </div>
      </section>
    </SiteLayout>
  );
}
