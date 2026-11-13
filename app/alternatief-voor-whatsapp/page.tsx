import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FactsBox, LandingClosingCta, LandingFaq, LandingHero, LandingJsonLd, SectionIntro } from "@/components/landing/Landing";
import { euro, PRICING, priceSentence } from "@/lib/pricing";

const PATH = "/alternatief-voor-whatsapp";
const URL = `https://www.reva-app.nl${PATH}`;
const NAME = "Alternatief voor WhatsApp in de fysiopraktijk";
const DESCRIPTION =
  "Een veilig alternatief voor WhatsApp met je patiënten: ze geven gestructureerd door hoe het gaat, en alles staat in het dossier, niet op een telefoon.";

export const metadata: Metadata = {
  title: "Alternatief voor WhatsApp in je fysiopraktijk",
  description: DESCRIPTION,
  keywords: ["alternatief whatsapp fysiotherapie", "whatsapp fysiotherapeut patiënten", "whatsapp avg fysiotherapie", "veilig communiceren met patiënten"],
  openGraph: {
    title: "Alternatief voor WhatsApp in je fysiopraktijk",
    description: "Geen gezondheidsgegevens meer op privételefoons. Patiënten loggen hun herstel in REVA, jij ziet het in het dossier.",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const facts = [
  "WhatsApp is gemaakt voor privégesprekken, niet voor zorg. Berichten over pijn en herstel staan op telefoons, vaak privételefoons, en buiten het dossier van de praktijk.",
  "In REVA geeft de patiënt via een korte check-in door hoe het gaat: dagscore, pijn van 0 tot 10, zwelling, mobiliteit, energie, stemming en slaap, met een notitie.",
  "Je hoeft niet meer elke update te lezen. REVA markeert wie aandacht nodig heeft, bijvoorbeeld bij een pijnscore van 7 of hoger of gemelde zwelling.",
  "Gegevens staan versleuteld op servers binnen de EU, met een verwerkersovereenkomst. Elke collega met toegang ziet hetzelfde dossier.",
];

const rows = [
  { topic: "Waar de informatie staat", whatsapp: "Op de telefoon van de behandelaar, vaak een privételefoon", reva: "In het dossier van de praktijk, versleuteld op Europese servers" },
  { topic: "Overzicht per patiënt", whatsapp: "Losse berichten in een chat, terugscrollen om iets te vinden", reva: "Verloop van pijn, mobiliteit en slaap in één dossier" },
  { topic: "Wie aandacht nodig heeft", whatsapp: "Je leest elk bericht en beoordeelt het zelf", reva: "Automatische markering bij hoge pijn, zwelling of weinig activiteit" },
  { topic: "Bij vakantie of ziekte", whatsapp: "De gesprekken zitten bij één persoon", reva: "Elke collega met toegang ziet hetzelfde dossier" },
  { topic: "Oefeningen", whatsapp: "Foto's, pdf's en losse uitleg in de chat", reva: "Het schema uit het herstelplan, met sets, herhalingen en uitleg" },
  { topic: "Bereikbaarheid", whatsapp: "Patiënten verwachten snel antwoord, ook 's avonds", reva: "Patiënten loggen zelf, jij kijkt wanneer het uitkomt" },
  { topic: "Kosten", whatsapp: "Gratis", reva: `${euro(PRICING.seatPrice)} per behandelaar per maand, inclusief btw` },
];

const steps = [
  { title: "Begin met nieuwe trajecten", text: "Nodig eerst patiënten uit die net starten met een revalidatietraject. Zij kennen nog geen andere werkwijze." },
  { title: "Leg het uit bij de intake", text: "Vertel waarom updates via REVA lopen: jij ziet het verloop, en de patiënt hoeft niet te bellen om te laten weten dat het goed gaat." },
  { title: "Maak één afspraak voor het hele team", text: "Updates over het herstel gaan via REVA. Dringende vragen blijven via de telefoon. Zo weet iedereen waar wat staat." },
];

const faq = [
  {
    q: "Mag een fysiotherapeut WhatsApp gebruiken met patiënten?",
    a: "WhatsApp is niet verboden, maar de praktijk is onder de AVG verantwoordelijk voor de bescherming van gezondheidsgegevens. Bij WhatsApp staan die gegevens op telefoons, vaak privé, buiten het dossier en zonder verwerkersovereenkomst met de praktijk. Daarom kiezen steeds meer praktijken voor een beveiligde omgeving zoals een patiëntenportaal.",
  },
  {
    q: "Is WhatsApp Business wel geschikt?",
    a: "WhatsApp Business maakt het makkelijker om berichten te beheren, maar de gesprekken blijven buiten het dossier en staan nog steeds op een telefoon. Je mist ook het overzicht over meerdere patiënten en de signalering van wie aandacht nodig heeft.",
  },
  {
    q: "Heeft REVA een chatfunctie?",
    a: "Nee, REVA is geen chatapp. Patiënten geven gestructureerd door hoe het gaat via een check-in, met een notitie of een opmerking bij een training. Voor dringende vragen blijft de telefoon het juiste kanaal.",
  },
  {
    q: "Moeten mijn patiënten een app installeren?",
    a: "Nee. REVA werkt in de browser, en patiënten kunnen het als app op het beginscherm van hun telefoon zetten. Een check-in kost een patiënt ongeveer 30 seconden.",
  },
  {
    q: "Wat kost REVA in vergelijking met WhatsApp?",
    a: `WhatsApp is gratis. ${priceSentence} Daar staat tegenover dat je minder tijd kwijt bent aan berichten en telefoontjes, en dat gezondheidsgegevens niet meer op telefoons staan.`,
  },
  {
    q: "Hoe stap ik over zonder dat patiënten afhaken?",
    a: "Begin met nieuwe revalidatietrajecten, leg bij de intake uit waarom updates via REVA lopen, en spreek met het hele team af dat updates over het herstel niet meer via WhatsApp gaan.",
  },
];

export default function AlternatiefVoorWhatsappPage() {
  return (
    <>
      <LandingJsonLd path={PATH} name={NAME} description={DESCRIPTION} faq={faq} />
      <SiteLayout>
        <LandingHero
          eyebrow="Alternatief voor WhatsApp"
          title="Een veilig alternatief voor WhatsApp met je patiënten"
          lead="Appjes over pijn, oefeningen en voortgang lopen via privételefoons en verdwijnen in chats. Met REVA geven patiënten zelf door hoe het gaat, en zie jij het verloop terug in het dossier."
          demo="checkin"
          photo={{ src: "/beeld/thuis-oefenen.webp", alt: "Patiënt doet thuis een oefening met haar telefoon op de oefenmat", position: "55% center" }}
          secondary={{ href: "/blog/van-whatsapp-naar-patientenportaal", label: "Lees over de overstap" }}
        />

        <FactsBox title="Waarom praktijken overstappen" facts={facts} path={PATH} />

        {/* Vergelijking */}
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="WhatsApp of REVA: het verschil in de praktijk"
              text="WhatsApp is snel en iedereen heeft het. Voor een enkel bericht prima, maar als vaste manier om het herstel van je patiënten te volgen loop je tegen grenzen aan."
            />
            <AnimateIn direction="up" delay={100}>
              <table className="w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden border" style={{ borderColor: "#e8e5df" }}>
                <thead className="hidden md:table-header-group">
                  <tr style={{ background: "#ffffff" }}>
                    <th scope="col" className="text-left font-semibold px-5 py-4 w-1/4" style={{ color: "#6b7280" }}><span className="sr-only">Onderwerp</span></th>
                    <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#6b7280" }}>WhatsApp</th>
                    <th scope="col" className="text-left font-semibold px-5 py-4" style={{ color: "#e8632a" }}>REVA</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.topic} className="block md:table-row" style={{ background: i % 2 ? "#fcfbf9" : "#ffffff" }}>
                      <th scope="row" className="block md:table-cell text-left font-semibold px-5 pt-4 md:py-4 align-top" style={{ color: "#1a1a1a" }}>{row.topic}</th>
                      <td className="block md:table-cell px-5 pt-2 md:py-4 align-top" style={{ color: "#9ca3af" }}>
                        <span className="md:hidden font-medium" style={{ color: "#6b7280" }}>WhatsApp: </span>
                        {row.whatsapp}
                      </td>
                      <td className="block md:table-cell px-5 pt-1 pb-4 md:py-4 align-top font-medium" style={{ color: "#1a1a1a" }}>
                        <span className="inline-flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                          {row.reva}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimateIn>
          </div>
        </section>

        {/* Overstappen */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro
              title="Zo stap je over in drie stappen"
              text="De overstap lukt het best als je hem klein begint en als team één duidelijke afspraak maakt."
            />
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((s, i) => (
                <AnimateIn key={s.title} direction="up" delay={i * 80} className="h-full">
                  <li className="h-full rounded-2xl border p-6" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-semibold text-white mb-4" style={{ background: "#e8632a" }}>
                      {i + 1}
                    </span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.text}</p>
                  </li>
                </AnimateIn>
              ))}
            </ol>
            <AnimateIn direction="up" delay={250}>
              <p className="mt-8 text-sm" style={{ color: "#6b7280" }}>
                Meer achtergrond lees je in{" "}
                <Link href="/blog/van-whatsapp-naar-patientenportaal" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  Van WhatsApp naar patiëntenportaal
                </Link>{" "}
                en in{" "}
                <Link href="/blog/avg-patientdata-fysiopraktijk" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                  AVG en patiëntdata in je fysiopraktijk
                </Link>
                .
              </p>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title="Vragen over WhatsApp in de praktijk" items={faq} />
        <LandingClosingCta
          title="Van appjes naar overzicht"
          text="In een demo van 30 minuten zie je hoe je patiënten hun herstel bijhouden in REVA, en wat jij daarvan terugziet."
        />
      </SiteLayout>
    </>
  );
}
