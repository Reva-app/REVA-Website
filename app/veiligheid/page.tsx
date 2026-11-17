import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Eye, FileCheck2, KeyRound, Lock, ServerCog, ShieldCheck, Sparkles, UserX, Users } from "lucide-react";
import { OG_IMAGES } from "@/lib/og";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FactsBox, LandingClosingCta, LandingFaq, SectionIntro } from "@/components/landing/Landing";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { pageDates } from "@/lib/page-dates";

const PATH = "/veiligheid";
const URL = `https://www.reva-app.nl${PATH}`;
const TITLE = "Veiligheid en privacy van REVA: AVG en inzagelogging";
const DESCRIPTION =
  "Hoe REVA gezondheidsgegevens beschermt: verplichte tweestapsverificatie, afscherming per praktijk, een activiteitenlog van elke inzage en opslag in de EU.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["AVG fysiotherapie software", "inzagelogging patiëntdossier", "veilig patiëntenportaal", "verwerkersovereenkomst fysiotherapie", "tweestapsverificatie zorg"],
  openGraph: { images: OG_IMAGES, title: TITLE, description: DESCRIPTION, locale: "nl_NL", type: "website", url: URL },
  alternates: { canonical: URL },
};

const facts = [
  "Tweestapsverificatie is verplicht voor iedereen in REVA, voor medewerkers én patiënten, met een code uit een authenticator-app.",
  "Gezondheidsgegevens zijn afgeschermd per praktijk: zorgverleners zien alleen patiënten van hun eigen praktijk.",
  "Elke inzage, wijziging of export van een dossier wordt vastgelegd in een activiteitenlog. De praktijkeigenaar ziet wie welk dossier heeft geopend, en wanneer.",
  "Gegevens staan versleuteld op servers binnen de Europese Economische Ruimte. De praktijk is verwerkingsverantwoordelijke, REVA is verwerker op basis van een verwerkersovereenkomst.",
];

const measures = [
  { icon: KeyRound, title: "Tweestapsverificatie voor iedereen", text: "Inloggen gaat met een wachtwoord en een code uit een authenticator-app, zoals Google Authenticator, Microsoft Authenticator of Authy. Dat geldt voor medewerkers én patiënten. Is een patiënt zijn telefoon kwijt, dan kan de behandelaar de tweestapsverificatie resetten." },
  { icon: Users, title: "Afgeschermd per praktijk", text: "Zorgverleners zien alleen patiënten van hun eigen praktijk. Binnen de praktijk bepaalt de rol wat iemand ziet: de praktijkeigenaar beheert de organisatie, fysiotherapeuten werken met hun patiënten." },
  { icon: Eye, title: "Activiteitenlog van elke inzage", text: "De praktijkeigenaar ziet wie welk dossier heeft ingezien, gewijzigd of geëxporteerd, en wanneer. Zo kun je verantwoorden wie er bij gezondheidsgegevens is geweest." },
  { icon: ServerCog, title: "Versleutelde opslag in de EU", text: "Gegevens staan versleuteld op servers binnen de Europese Economische Ruimte. Ze worden niet doorgegeven aan landen buiten de EER, tenzij daar passende waarborgen voor zijn getroffen conform de AVG." },
  { icon: FileCheck2, title: "Verwerkersovereenkomst", text: "Jouw praktijk blijft verwerkingsverantwoordelijke voor de gegevens van je patiënten. REVA treedt op als verwerker, op basis van een verwerkersovereenkomst die aansluit bij de AVG." },
  { icon: Sparkles, title: "AI zonder externe partij", text: "REVA-inzichten doet voorstellen op basis van de gegevens in REVA. Daarvoor worden patiëntgegevens niet gedeeld met een externe AI-partij, en de fysiotherapeut beslist altijd zelf." },
  { icon: Lock, title: "Documenten van de patiënt", text: "Documenten die een patiënt in zijn eigen dossier bewaart, zijn alleen voor hemzelf zichtbaar. Interne notities over een patiënt zijn alleen zichtbaar voor collega's binnen de praktijk." },
  { icon: UserX, title: "Gegevens laten verwijderen", text: "Een patiënt kan op elk moment zijn account en de bijbehorende gegevens laten verwijderen, in lijn met de AVG." },
];

const checklist = [
  "Is er een verwerkersovereenkomst, en wie is verwerkingsverantwoordelijke?",
  "Waar staan de gegevens, en gaan ze naar landen buiten de EER?",
  "Is tweestapsverificatie verplicht, ook voor patiënten?",
  "Wordt bijgehouden wie welk dossier inziet, wijzigt of exporteert?",
  "Zijn gegevens afgeschermd per praktijk en per rol?",
  "Gaan gezondheidsgegevens naar een externe AI-dienst?",
  "Kan een patiënt zijn gegevens laten verwijderen?",
];

const faq = [
  {
    q: "Is REVA AVG-proof?",
    a: "REVA is gebouwd voor gezondheidsgegevens onder de AVG. Je praktijk blijft verwerkingsverantwoordelijke en REVA werkt als verwerker op basis van een verwerkersovereenkomst. Gegevens staan versleuteld in de EER, tweestapsverificatie is verplicht voor iedereen en elke inzage wordt gelogd.",
  },
  {
    q: "Wordt bijgehouden wie een dossier inziet?",
    a: "Ja. In het activiteitenlog van REVA ziet de praktijkeigenaar wie welk dossier heeft ingezien, gewijzigd of geëxporteerd, en wanneer. Zo kun je verantwoorden wie er bij de gezondheidsgegevens van je patiënten is geweest.",
  },
  {
    q: "Moeten patiënten ook tweestapsverificatie gebruiken?",
    a: "Ja. Tweestapsverificatie is verplicht voor iedereen, ook voor patiënten. Ze loggen in met een code uit een authenticator-app. Is een patiënt zijn telefoon kwijt, dan kan de behandelaar de tweestapsverificatie resetten.",
  },
  {
    q: "Gaan patiëntgegevens naar een AI-dienst?",
    a: "Nee. REVA-inzichten doet voorstellen op basis van de gegevens in REVA, zonder patiëntgegevens te delen met een externe AI-partij. Het blijft altijd een voorstel: de fysiotherapeut beslist.",
  },
  {
    q: "Waar vind ik de verwerkersovereenkomst?",
    a: "De verwerkersovereenkomst staat op de site, net als de privacyverklaring en de algemene voorwaarden. Heb je vragen van je IT-adviseur of functionaris gegevensbescherming, mail dan naar info@reva-app.nl.",
  },
];

export default function VeiligheidPage() {
  return (
    <>
      <JsonLd data={{ ...webPageJsonLd({ url: URL, name: TITLE, description: DESCRIPTION }), dateModified: pageDates[PATH] }} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${URL}#faq`,
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", url: "https://www.reva-app.nl/" }, { name: "Veiligheid en privacy", url: URL }])} />
      <SiteLayout>
        <section className="py-14 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "#fff3ee" }}>
                <ShieldCheck className="w-6 h-6" style={{ color: "#e8632a" }} />
              </span>
              <p className="text-sm font-semibold mb-3" style={{ color: "#e8632a" }}>Veiligheid en privacy</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5" style={{ color: "#1a1a1a" }}>
                Gebouwd voor gezondheidsgegevens
              </h1>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                Je patiënten vertrouwen je hun gezondheidsgegevens toe. Op deze pagina lees je hoe REVA die beschermt: van inloggen
                tot logging, opslag en de verwerkersovereenkomst. Handig voor jezelf, je IT-adviseur of je functionaris
                gegevensbescherming.
              </p>
            </AnimateIn>
          </div>
        </section>

        <FactsBox title="In het kort" facts={facts} path={PATH} />

        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <SectionIntro title="Zo beschermt REVA de gegevens van je patiënten" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {measures.map(({ icon: Icon, title, text }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 40} className="h-full">
                  <div className="h-full rounded-2xl border p-6 flex gap-4" style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                      <Icon className="w-5 h-5" style={{ color: "#e8632a" }} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{text}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4" style={{ color: "#1a1a1a" }}>
                Checklist voor je IT-adviseur
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                Kies je software voor gezondheidsgegevens, stel dan deze vragen. Bij REVA is het antwoord op elk van deze vragen te
                vinden op deze pagina en in de documenten hiernaast.
              </p>
              <ul className="space-y-2.5">
                {checklist.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm md:text-base" style={{ color: "#1a1a1a" }}>
                    <CheckCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: "#e8632a" }} />
                    {c}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div className="rounded-2xl border p-6 md:p-8" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#1a1a1a" }}>De documenten</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    { href: "/legal/dpa", label: "Verwerkersovereenkomst (DPA)", text: "De afspraken tussen REVA en je praktijk onder de AVG" },
                    { href: "/privacy-policy", label: "Privacyverklaring", text: "Welke gegevens REVA verwerkt en waarom" },
                    { href: "/algemene-voorwaarden", label: "Algemene voorwaarden", text: "De overeenkomst tussen REVA en je praktijk" },
                    { href: "/verwijder-account", label: "Account verwijderen", text: "Hoe een patiënt zijn gegevens laat verwijderen" },
                  ].map((d) => (
                    <li key={d.href}>
                      <Link href={d.href} className="font-medium hover-orange" style={{ color: "#e8632a" }}>{d.label}</Link>
                      <span className="block" style={{ color: "#6b7280" }}>{d.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
                  Meer over de AVG in je praktijk lees je in{" "}
                  <Link href="/blog/avg-patientdata-fysiopraktijk" className="font-medium hover-orange" style={{ color: "#e8632a" }}>AVG en patiëntdata in de fysiopraktijk</Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        <LandingFaq title="Vragen over veiligheid en privacy" items={faq} />
        <LandingClosingCta
          title="Vragen van je IT-adviseur?"
          text="Plan een demo, of mail je vragen naar info@reva-app.nl. We lopen de beveiliging graag samen met je door."
        />
      </SiteLayout>
    </>
  );
}
