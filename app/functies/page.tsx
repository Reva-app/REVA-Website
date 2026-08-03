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
import { JsonLd, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Functies",
  description:
    "Ontdek alle 9 functies van REVA: patiëntoverzicht, check-ins, afspraken, herstelplannen, medicatie, dossier en voortgangsanalyse. Het patiëntenportaal voor fysiotherapiepraktijken, alles op één plek voor je hele caseload.",
  openGraph: {
    title: "Functies",
    description: "Alle 9 functies van REVA voor overzicht over je patiënten, ongeacht de grootte van je praktijk.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/functies",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/functies",
  },
};

const features = [
  {
    icon: LayoutDashboard,
    title: "Praktijkoverzicht",
    subtitle: "Al je patiënten in één oogopslag",
    description:
      "Het dashboard is het eerste scherm dat je ziet als je REVA opent. In één oogopslag zie je hoeveel patiënten actief zijn, welke pijnscores binnenkwamen en wie er aandacht nodig heeft.",
    example:
      "Je opent REVA tussen twee behandelingen door. Je ziet direct dat drie patiënten deze week een hoge pijnscore doorgaven en dat één patiënt al twee check-ins heeft gemist.",
    benefits: [
      "Direct overzicht zonder elk dossier apart te openen",
      "Signalering van patiënten die aandacht nodig hebben",
      "Nieuwe check-ins in één oogopslag",
      "Snel schakelen tussen patiënten tijdens een drukke dag",
    ],
    dark: false,
  },
  {
    icon: ClipboardCheck,
    title: "Check-ins van patiënten",
    subtitle: "Patiënten loggen zelf, jij ziet het automatisch",
    description:
      "Patiënten vullen dagelijks een korte check-in in: pijn, energie en hoe het herstel voelt. Jij ziet die gegevens binnenkomen zonder dat je ernaar hoeft te bellen of appen.",
    example:
      "Een patiënt geeft drie dagen op rij een oplopende pijnscore door. Jij ziet dat signaal in je overzicht, nog voordat de volgende afspraak gepland staat.",
    benefits: [
      "Minder telefoontjes en WhatsApp-berichten tussendoor",
      "Pijn, energie en stemming automatisch verzameld",
      "Signalen zichtbaar vóór de volgende behandeling",
      "Patiënten voelen zich gehoord zonder dat het jou tijd kost",
    ],
    dark: true,
  },
  {
    icon: CalendarDays,
    title: "Afspraken en behandelplan",
    subtitle: "Overzicht per patiënt, geen dubbele boekingen",
    description:
      "Plan en beheer afspraken en behandelmomenten per patiënt. Jij en je patiënt zien in REVA wat er gepland staat, inclusief automatische herinneringen.",
    example:
      "Je hebt deze week 31 afspraken verspreid over je team. In REVA staat alles overzichtelijk per patiënt en per behandelaar, zonder losse agenda's naast elkaar.",
    benefits: [
      "Eén overzicht voor je hele praktijkagenda",
      "Automatische herinneringen verminderen no-shows",
      "Notities per afspraak zichtbaar voor het hele team",
      "Minder tijd kwijt aan telefonisch afspraken verzetten",
    ],
    dark: false,
  },
  {
    icon: Dumbbell,
    title: "Herstelplannen en oefeningen",
    subtitle: "Zie wie het schema volgt en wie achterblijft",
    description:
      "Geef oefenprogramma's mee die patiënten thuis afvinken. Jij ziet per patiënt hoe consistent het schema wordt gevolgd, zonder daarnaar te hoeven vragen.",
    example:
      "Je geeft een patiënt zeven oefeningen per week mee. In REVA zie je dat de eerste twee weken vijf van de zeven werden afgevinkt: waardevolle informatie voor je volgende behandeling.",
    benefits: [
      "Oefenprogramma's digitaal meegeven per patiënt",
      "Zicht op therapietrouw zonder ernaar te vragen",
      "Sneller bijsturen bij patiënten die achterblijven",
      "Minder uitleg herhalen tijdens de behandeling",
    ],
    dark: true,
  },
  {
    icon: Pill,
    title: "Pijn- en medicatieregistratie",
    subtitle: "Patronen herkennen zonder los gesprek",
    description:
      "Patiënten registreren welke medicatie ze nemen en hoe hun pijn zich ontwikkelt. Jij ziet die gegevens naast elkaar, zodat je sneller patronen herkent.",
    example:
      "Een patiënt geeft aan dat de pijn ondanks medicatie aanhoudt. In REVA zie je dat direct terug, in plaats van dat pas te horen tijdens de eerstvolgende afspraak.",
    benefits: [
      "Pijn en medicatiegebruik overzichtelijk naast elkaar",
      "Sneller signaleren wanneer iets niet aanslaat",
      "Concrete gegevens voor het behandelgesprek",
      "Minder afhankelijk van wat een patiënt zich nog herinnert",
    ],
    dark: false,
  },
  {
    icon: FolderOpen,
    title: "Digitaal patiëntdossier",
    subtitle: "Alles per patiënt op één plek",
    description:
      "Diagnoses, verslagen, foto's en documenten sla je overzichtelijk op per patiënt. Direct beschikbaar tijdens de behandeling, ook als een patiënt van behandelaar wisselt binnen je praktijk.",
    example:
      "Een patiënt wisselt van behandelaar binnen je praktijk. De nieuwe fysiotherapeut opent het dossier in REVA en heeft direct de juiste context, zonder alles opnieuw te hoeven navragen.",
    benefits: [
      "Documenten per patiënt veilig en overzichtelijk opgeslagen",
      "Direct beschikbaar tijdens de behandeling",
      "Makkelijk overdragen tussen behandelaars binnen je team",
      "Nooit meer zoeken in e-mails of papieren dossiers",
    ],
    dark: true,
  },
  {
    icon: BarChart3,
    title: "Voortgangsanalyse",
    subtitle: "Onderbouwd bijsturen in plaats van op gevoel",
    description:
      "REVA zet de check-ins en activiteit van patiënten om in grafieken. Je ziet trends in pijn, energie en therapietrouw per patiënt en over je hele caseload.",
    example:
      "Je opent de analyse van een patiënt na zes weken behandeling. De pijnscore daalde van gemiddeld 6.5 naar 3.2: een concreet resultaat om te bespreken en te rapporteren.",
    benefits: [
      "Grafieken per patiënt en over je hele praktijk",
      "Trends zichtbaar die je in een los gesprek zou missen",
      "Onderbouwing voor behandelgesprekken en rapportages",
      "Exporteerbaar voor overleg met patiënt of verwijzer",
    ],
    dark: false,
  },
  {
    icon: CreditCard,
    title: "Patiëntgegevens en contacten",
    subtitle: "Altijd de juiste gegevens bij de hand",
    description:
      "Sla per patiënt de verzekeringsgegevens en relevante contacten op: huisarts, specialist of ziekenhuis. Zo heeft je team altijd de juiste informatie bij de hand.",
    example:
      "Een patiënt belt met een vraag over de verwijzing. Je collega aan de balie opent REVA en heeft direct de juiste gegevens, zonder de patiënt te hoeven doorverbinden.",
    benefits: [
      "Verzekerings- en contactgegevens per patiënt centraal",
      "Beschikbaar voor je hele team, niet alleen de behandelaar",
      "Sneller schakelen bij vragen aan de balie",
      "Nooit meer zoeken in mappen of losse systemen",
    ],
    dark: true,
  },
  {
    icon: Target,
    title: "Behandeldoelen en mijlpalen",
    subtitle: "Motivatie voor de patiënt, rapportage voor jou",
    description:
      "Leg per patiënt behandeldoelen vast en zie mijlpalen automatisch worden bijgehouden. Dat motiveert de patiënt en geeft jou een duidelijk overzicht van de voortgang.",
    example:
      "Je stelt met een patiënt het doel 'binnen 8 weken 10 minuten pijnvrij lopen'. Na 6 weken wordt dit doel bereikt en automatisch als mijlpaal gemarkeerd, zichtbaar voor jullie beiden.",
    benefits: [
      "Behandeldoelen per patiënt concreet vastgelegd",
      "Mijlpalen motiveren de patiënt tijdens het traject",
      "Duidelijk overzicht van voortgang voor je rapportage",
      "Goed onderbouwd gespreksmateriaal richting verwijzers",
    ],
    dark: false,
  },
];

export default function FunctiesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/functies",
          name: "Functies | REVA",
          description:
            "Alle 9 functies van REVA voor overzicht over je patiënten, ongeacht de grootte van je praktijk.",
          type: "CollectionPage",
        })}
      />
      <JsonLd
        data={itemListJsonLd(
          features.map((f) => ({
            name: f.title,
            description: f.subtitle,
            url: `https://www.reva-app.nl/functies#${f.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`,
          }))
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Functies", url: "https://www.reva-app.nl/functies" },
        ])}
      />
      <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Functies
            </span>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
              9 modules voor<br />
              <span style={{ color: "#e8632a" }}>grip op je patiëntenzorg</span>
            </h1>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              REVA bundelt alles wat je praktijk nodig heeft om patiënten te begeleiden na een
              blessure of operatie. Van check-ins en afspraken tot dossier en behandeldoelen:
              alles op één plek, overzichtelijk en betrouwbaar voor je hele team.
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group btn-primary px-5 py-3 text-sm"
            >
              Vraag een demo aan
              <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <Link
              href="/faq"
              className="btn-secondary px-5 py-3 text-sm"
            >
              Veelgestelde vragen
            </Link>
          </AnimateIn>

          <AnimateIn direction="up" delay={200} className="mt-6">
            <p className="text-sm" style={{ color: "#9ca3af" }}>
              Bekijk functies per rol:{" "}
              <Link href="/functies/voor-fysios" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                voor fysio&apos;s
              </Link>
              {" "}·{" "}
              <Link href="/functies/voor-patienten" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                voor patiënten
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Feature overview grid */}
      <section className="py-12" style={{ background: "#ffffff" }}>
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
              Alle 9 modules in één portaal
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#7c7c8a" }}>
              Ontdek tijdens een demo hoe REVA past bij jouw praktijk, aan de hand van jouw eigen situatie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group btn-primary px-6 py-3.5 text-base"
              >
                Vraag een demo aan
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
              <Link
                href="/faq"
                className="btn-dark px-6 py-3.5 text-sm"
              >
                Veelgestelde vragen
              </Link>
            </div>
            <p className="mt-5 text-xs" style={{ color: "#52525e" }}>Persoonlijke demo · Geen verplichtingen</p>
          </AnimateIn>
        </div>
      </section>
      </SiteLayout>
    </>
  );
}
