import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StoryRow } from "@/components/features/FeatureShowcase";
import { FactsBox, LandingClosingCta, LandingFaq, LandingHero, LandingJsonLd, SectionIntro } from "@/components/landing/Landing";
import { REVA_LIBRARY } from "@/lib/features";
import { priceSentence, TRIAL_DAYS } from "@/lib/pricing";

const PATH = "/oefenprogramma-app";
const URL = `https://www.reva-app.nl${PATH}`;
const NAME = "Oefenprogramma-app voor fysiotherapeuten";
const DESCRIPTION = `Thuisoefeningen in een app die past bij het herstelplan: schema's per fase, ${REVA_LIBRARY.exercises} oefeningen als startpunt, en je ziet of je patiënt oefent.`;

export const metadata: Metadata = {
  title: "Oefenprogramma-app voor fysiotherapeuten en hun patiënten",
  description: DESCRIPTION,
  keywords: ["oefenprogramma app fysiotherapie", "oefenschema app", "thuisoefeningen app fysiotherapie", "huiswerkoefeningen fysiotherapie", "oefenapp fysio"],
  openGraph: {
    images: OG_IMAGES,
    title: "Oefenprogramma-app voor fysiotherapeuten",
    description: "Oefenschema's per fase van het herstelplan, en zien of je patiënt ze ook doet.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const facts = [
  "In REVA stel je oefenschema's samen uit je eigen oefeningen of uit de REVA-bibliotheek, met sets, herhalingen, duur en belasting per oefening.",
  "Een schema hoort bij een fase van het herstelplan, met een frequentie per week. Gaat de patiënt naar de volgende fase, dan staat het schema van die fase klaar.",
  "De patiënt ziet de oefeningen met uitleg in de eigen app en logt na elke sessie wat er gedaan is, met ruimte voor een opmerking.",
  "Jij ziet in het dossier welke trainingen zijn gedaan, en REVA markeert patiënten die weinig actief zijn. Tijdens het consult pas je het schema direct aan.",
];

const blocks = [
  {
    title: "Schema's die bij het herstelplan horen",
    text: "Geen losse lijstjes meer. Je stelt per patiënt een schema samen, met per oefening de dosering: sets, herhalingen, duur en belasting.",
    demo: "oefeningen" as const,
    eyebrow: "Voor de fysiotherapeut",
    link: { href: "/functies#oefeningen", label: "Meer over oefeningen en schema's" },
  },
  {
    title: "Op de telefoon van je patiënt",
    text: "Je patiënt ziet het schema met uitleg per oefening, traint in de workoutmodus en logt de pijn per oefening.",
    demo: "training" as const,
    eyebrow: "Voor de patiënt",
    link: { href: "/functies#training", label: "Meer over de patiëntapp" },
  },
  {
    title: "Je ziet of er geoefend wordt",
    text: "Gelogde trainingen en de pijn per oefening komen in het dossier. Wie weinig actief is, staat in de lijst Aandacht nodig op je dashboard.",
    demo: "dossier" as const,
    eyebrow: "In het dossier",
    link: { href: "/functies#dossier", label: "Meer over het dossier" },
  },
];

const faq = [
  {
    q: "Wat is een oefenprogramma-app voor fysiotherapie?",
    a: "Een app waarmee de fysiotherapeut huiswerkoefeningen samenstelt en meegeeft, zodat de patiënt ze thuis kan uitvoeren. In REVA is het oefenprogramma onderdeel van het herstelplan, en logt de patiënt ook pijn, voortgang en trainingen.",
  },
  {
    q: "Welke oefeningen zitten in de REVA-bibliotheek?",
    a: `De bibliotheek bevat ${REVA_LIBRARY.exercises} oefeningen en ${REVA_LIBRARY.protocols} herstelplannen als startpunt. Eigen oefeningen voeg je toe met je eigen foto of video. Je kopieert ze, beoordeelt ze en past ze aan voordat je ze toewijst. De bibliotheek is nog niet klinisch getoetst, de fysiotherapeut blijft verantwoordelijk voor de keuze.`,
  },
  {
    q: "Kan ik mijn eigen oefeningen toevoegen?",
    a: "Ja. Je bouwt je eigen bibliotheek met oefeningen, uitleg, sets, herhalingen, duur en belasting, en combineert die tot schema's die je hergebruikt.",
  },
  {
    q: "Zie ik of mijn patiënt de oefeningen doet?",
    a: "Ja. De patiënt logt zijn training in de workoutmodus, met de pijn per oefening. Dat zie je terug in het dossier, en patiënten die weinig actief zijn, verschijnen in de lijst Aandacht nodig.",
  },
  {
    q: "Wat is het verschil met een losse oefenapp?",
    a: "Een losse oefenapp richt zich meestal alleen op het delen van oefeningen. In REVA horen de oefeningen bij het herstelplan, en zie je ze naast pijn, zwelling, mobiliteit en slaap van dezelfde patiënt. Zo zie je of een zwaarder schema ook samengaat met meer pijn.",
  },
  {
    q: "Wat kost het?",
    a: `Het oefenprogramma zit gewoon in REVA, zonder meerprijs. ${priceSentence} Je probeert REVA ${TRIAL_DAYS} dagen gratis.`,
  },
];

export default function OefenprogrammaAppPage() {
  return (
    <>
      <LandingJsonLd path={PATH} name={NAME} description={DESCRIPTION} faq={faq} />
      <SiteLayout>
        <LandingHero
          eyebrow="Oefenprogramma-app"
          title="Een oefenprogramma-app die meebeweegt met het herstel"
          lead="Geef thuisoefeningen mee die horen bij de fase van het herstelplan. Je patiënt heeft het schema altijd op zak, en jij ziet of er ook echt geoefend wordt."
          demo="training"
          photo={{ src: "/headline-2.webp", alt: "Patiënt met kniebrace loopt door de oefenzaal van een fysiotherapiepraktijk", position: "60% center" }}
          secondary={{ href: "/functies#oefeningen", label: "Meer over oefeningen" }}
        />

        <FactsBox title="Het oefenprogramma in REVA in het kort" facts={facts} path={PATH} />

        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Van schema tot uitvoering, in één omgeving"
              text="Geen papiertjes, pdf's of losse video's. Het schema, de uitvoering en het verloop van het herstel staan bij elkaar."
            />
            <div className="space-y-20 md:space-y-28">
              {blocks.map((b, i) => (
                <StoryRow key={b.title} index={i} {...b} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="flex flex-col md:flex-row gap-6 md:items-start rounded-2xl border p-6 md:p-8" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                  <RefreshCw className="w-6 h-6" style={{ color: "#e8632a" }} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>Aanpassen tijdens het consult</h2>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#6b7280" }}>
                    Voeg een oefening toe uit de bibliotheek, pas sets of herhalingen aan of haal een oefening weg, terwijl de
                    patiënt er nog is. De wijziging staat direct in de app van je patiënt. Wil je weten hoe je patiënten vaker
                    blijven oefenen? Lees{" "}
                    <Link href="/blog/therapietrouw-verhogen-patienten-herkennen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                      hoe je afhakende patiënten op tijd herkent
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title="Vragen over het oefenprogramma" items={faq} />
        <LandingClosingCta
          title="Zie hoe een schema bij je patiënt aankomt"
          text="In een demo van 30 minuten stellen we samen een schema samen en laten we zien wat je patiënt in de app ziet."
        />
      </SiteLayout>
    </>
  );
}
