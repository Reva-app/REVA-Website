import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { BellRing, ClipboardCheck, MessageCircleOff, PhoneCall, Smartphone, Users } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { FactsBox, LandingClosingCta, LandingFaq, LandingHero, LandingJsonLd, SectionIntro } from "@/components/landing/Landing";
import { computeSavings, euroRound, nl1, savingsDefaults, savingsExampleSentence, TREATMENT_MINUTES, WORK_WEEKS } from "@/lib/savings";
import { priceSentence } from "@/lib/pricing";

const PATH = "/besparing-berekenen";
const URL = `https://www.reva-app.nl${PATH}`;
const NAME = "Bereken hoeveel tijd je fysiopraktijk bespaart";
const DESCRIPTION =
  "Bereken in een minuut hoeveel uur en euro je fysiopraktijk per jaar terugwint met minder telefoontjes en appjes tussen de behandelingen door.";

export const metadata: Metadata = {
  title: "Tijdsbesparing berekenen voor je fysiopraktijk",
  description: DESCRIPTION,
  keywords: [
    "tijd besparen fysiopraktijk",
    "besparing berekenen fysiotherapie",
    "administratie fysiotherapie verminderen",
    "minder telefoontjes fysiopraktijk",
    "rendement fysiotherapie software",
  ],
  openGraph: {
    images: OG_IMAGES,
    title: "Tijdsbesparing berekenen voor je fysiopraktijk",
    description: "Zie hoeveel uur en euro je praktijk per jaar terugwint met REVA, op basis van je eigen cijfers.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const ex = computeSavings(savingsDefaults);

const facts = [
  "Korte contactmomenten buiten de behandeling om, zoals telefoontjes, appjes en vragen via de balie, kosten per keer al snel vijf minuten inclusief terugbellen en vastleggen.",
  savingsExampleSentence(),
  "REVA verkleint die contactmomenten doordat patiënten zelf een dagelijkse check-in van ongeveer 30 seconden doen en de fysiotherapeut in de lijst Aandacht nodig ziet wie contact nodig heeft.",
  priceSentence,
];

const sinks = [
  { icon: PhoneCall, title: "Terugbellen en navragen", text: "Een patiënt belt met een vraag over pijn of een oefening. Terugbellen, opzoeken en vastleggen kost meer dan het gesprek zelf." },
  { icon: MessageCircleOff, title: "Appjes op losse telefoons", text: "Berichten via WhatsApp komen binnen tussen twee behandelingen door, vaak op een privételefoon en buiten het dossier." },
  { icon: Users, title: "Collega's bijpraten", text: "Bij vakantie of ziekte moet een collega eerst uitzoeken hoe het met een patiënt gaat, voordat de behandeling verder kan." },
];

const levers = [
  { icon: ClipboardCheck, title: "Dagelijkse check-in", text: "De patiënt geeft in ongeveer 30 seconden door hoe het gaat: pijn, zwelling, mobiliteit, slaap en een notitie. Je hoeft er niet naar te vragen." },
  { icon: BellRing, title: "Aandacht nodig", text: "REVA zet bovenaan wie je nu het best kunt bekijken, bijvoorbeeld bij een pijnscore van 7 of hoger of weinig activiteit. Je neemt gericht contact op." },
  { icon: Smartphone, title: "Schema en uitleg in de app", text: "Oefeningen met uitleg staan in de app, en bij een nieuw schema krijgt de patiënt een pushmelding. Minder vragen over hoe een oefening ook alweer ging." },
];

const assumptions = [
  ["Contactmomenten per behandelaar per dag", `${savingsDefaults.contactsPerDay}`, "Telefoontjes, appjes en vragen via de balie buiten de behandeling om"],
  ["Minuten per contactmoment", `${savingsDefaults.minutesPerContact}`, "Inclusief terugbellen, vastleggen en een collega bijpraten"],
  ["Minder contactmomenten met REVA", `${savingsDefaults.reductionPct}%`, "Bewust voorzichtig: niet elk contact verdwijnt, en dat is ook niet de bedoeling"],
  ["Werkweken per jaar", `${WORK_WEEKS}`, "Na vakantie en feestdagen"],
  ["Duur van een behandeling", `${TREATMENT_MINUTES} minuten`, "Om vrijgekomen tijd om te rekenen naar behandelingen"],
  ["Waarde van een uur", euroRound(savingsDefaults.hourValue), "Pas dit aan naar wat een uur van een behandelaar jouw praktijk oplevert"],
];

const faq = [
  {
    q: "Hoeveel tijd bespaart een fysiopraktijk met REVA?",
    a: `Dat hangt af van hoeveel contact er nu buiten de behandelingen om is. ${savingsExampleSentence()} Met de tool op deze pagina reken je het uit met je eigen cijfers.`,
  },
  {
    q: "Hoe komt de besparing tot stand?",
    a: "Patiënten geven zelf in een dagelijkse check-in door hoe het gaat, en de fysiotherapeut ziet in de lijst Aandacht nodig wie contact nodig heeft. Daardoor hoef je minder te bellen en na te vragen, en komen er minder losse appjes en telefoontjes binnen.",
  },
  {
    q: "Is de uitkomst een garantie?",
    a: "Nee. Het is een schatting op basis van je eigen invoer. Wij rekenen bewust voorzichtig met 50% minder contactmomenten. Hoeveel tijd je werkelijk terugwint, hangt af van je werkwijze en je patiënten.",
  },
  {
    q: "Wat kost REVA tegenover de besparing?",
    a: `${priceSentence} In het rekenvoorbeeld met 3 behandelaars kost REVA ${euroRound(ex.revaPerYear)} per jaar, tegenover ${euroRound(ex.valuePerYear)} aan teruggewonnen tijd.`,
  },
  {
    q: "Wat doe ik met de tijd die vrijkomt?",
    a: `Dat bepaal je zelf: meer aandacht voor de patiënten die het nodig hebben, minder overwerk, of ruimte voor extra behandelingen. In het rekenvoorbeeld komt ongeveer ${Math.round(ex.treatmentsPerMonth)} behandelingen van ${TREATMENT_MINUTES} minuten per maand vrij.`,
  },
];

export default function BesparingBerekenenPage() {
  return (
    <>
      <LandingJsonLd path={PATH} name={NAME} description={DESCRIPTION} faq={faq} />
      <SiteLayout>
        <LandingHero
          eyebrow="Besparing berekenen"
          title="Bereken hoeveel tijd je fysiopraktijk terugwint"
          lead="Telefoontjes, appjes en navragen tussen de behandelingen door lijken klein, maar lopen op tot uren per week. Vul je eigen cijfers in en zie wat REVA je praktijk oplevert, in uren en in euro's."
          demo="signalering"
          photo={{ src: "/beeld/demo-gesprek.webp", alt: "Fysiotherapeut en praktijkeigenaar bekijken samen REVA op een laptop in de praktijk", position: "center" }}
          secondary={{ href: "#tool", label: "Direct berekenen" }}
        />

        {/* De tool */}
        <section id="tool" className="scroll-mt-24 py-14 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Jouw besparing in één minuut"
              text={`Begin met de standaardwaarden: een praktijk met ${savingsDefaults.seats} behandelaars wint dan ongeveer ${nl1(ex.hoursSavedPerWeek)} uur per week terug. Schuif daarna met je eigen cijfers.`}
            />
            <AnimateIn direction="up" delay={80}>
              <SavingsCalculator />
            </AnimateIn>
          </div>
        </section>

        <FactsBox title="In het kort" facts={facts} path={PATH} />

        {/* Waar de tijd naartoe gaat */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Waar de tijd nu naartoe gaat"
              text="Het probleem is niet dat patiënten contact zoeken. Het probleem is dat de informatie versnipperd binnenkomt, op momenten die niet uitkomen."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sinks.map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 70} className="h-full">
                  <div className="h-full rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Hoe REVA tijd terugwint */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Zo wint REVA die tijd terug"
              text="REVA werkt naast je EPD, zonder dubbele invoer. Het richt zich op de tijd tussen de behandelingen, precies waar de losse contactmomenten ontstaan."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {levers.map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 70} className="h-full">
                  <div className="h-full rounded-2xl p-6" style={{ background: i === 1 ? "#1c1c1e" : "#f8f7f4" }}>
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: i === 1 ? "rgba(232,99,42,0.16)" : "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: i === 1 ? "#ffffff" : "#1a1a1a" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: i === 1 ? "#c9c9ce" : "#6b7280" }}>{text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn direction="up" delay={220}>
              <p className="mt-8 text-sm" style={{ color: "#6b7280" }}>
                Bekijk alle{" "}
                <Link href="/functies" className="font-medium hover-orange" style={{ color: "#e8632a" }}>functies van REVA</Link>, of lees{" "}
                <Link href="/blog/tijd-besparen-patientcommunicatie-fysiopraktijk" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  hoe je uren terugwint in je fysiopraktijk
                </Link>
                .
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Aannames */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="De aannames, eerlijk uitgelegd"
              text="Een berekening is zo goed als de aannames erachter. Dit zijn de standaardwaarden; in de tool pas je ze aan naar je eigen praktijk."
            />
            <AnimateIn direction="up" delay={80}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                  <caption className="sr-only">Aannames van de besparingstool</caption>
                  <thead>
                    <tr style={{ background: "#ffffff" }}>
                      <th scope="col" className="text-left font-semibold px-4 md:px-5 py-4" style={{ color: "#6b7280" }}>Aanname</th>
                      <th scope="col" className="text-left font-semibold px-4 md:px-5 py-4" style={{ color: "#e8632a" }}>Standaard</th>
                      <th scope="col" className="hidden md:table-cell text-left font-semibold px-5 py-4" style={{ color: "#6b7280" }}>Toelichting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assumptions.map(([label, value, note], i) => (
                      <tr key={label} style={{ background: i % 2 ? "#fcfbf9" : "#ffffff" }}>
                        <th scope="row" className="text-left font-medium px-4 md:px-5 py-3.5 align-top" style={{ color: "#1a1a1a" }}>
                          {label}
                          <span className="md:hidden block text-xs font-normal mt-0.5" style={{ color: "#9ca3af" }}>{note}</span>
                        </th>
                        <td className="px-4 md:px-5 py-3.5 align-top font-semibold tabular-nums" style={{ color: "#1a1a1a" }}>{value}</td>
                        <td className="hidden md:table-cell px-5 py-3.5 align-top" style={{ color: "#6b7280" }}>{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title="Vragen over de besparing" items={faq} />
        <LandingClosingCta
          title="Zie wat REVA in jouw praktijk oplevert"
          text="In een demo van 30 minuten rekenen we de besparing samen door, met jouw team en werkwijze in gedachten."
        />
      </SiteLayout>
    </>
  );
}
