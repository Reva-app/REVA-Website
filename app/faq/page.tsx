import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over REVA: wat het is, voor wie het bedoeld is, welke blessures en operaties je ermee kunt bijhouden, wat het kost en hoe veilig je data is.",
  openGraph: {
    title: "Veelgestelde vragen",
    description: "Antwoorden op de meest gestelde vragen over REVA, voor iedereen die grip wil op zijn of haar herstel.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/faq",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/faq",
  },
};

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

const faqGroups = [
  {
    category: "Algemeen",
    items: [
      {
        q: "Wat is REVA?",
        a: "REVA is een persoonlijk herstel dashboard voor iedereen die grip wil op zijn of haar herstel. Of je nu revalideert van een blessure, een operatie hebt gehad of in een langdurig hersteltraject zit: in de app houd je dagelijkse check-ins, afspraken, oefeningen, medicatie en voortgang bij op één overzichtelijke plek.",
      },
      {
        q: "Voor wie is REVA bedoeld?",
        a: "REVA is bedoeld voor iedereen die herstelt van een blessure of operatie: van een knieblessure, enkelblessure of schouderblessure tot een heupoperatie, rugklachten of een andere ingreep. Ook sporters in een langdurig revalidatietraject en mensen die simpelweg structuur willen tijdens hun herstel gebruiken REVA.",
      },
      {
        q: "Is REVA alleen voor knieblessures?",
        a: "Nee. REVA is oorspronkelijk ontstaan vanuit een knieblessure, maar werkt inmiddels voor elke blessure, operatie of langdurig hersteltraject waarin je afspraken, oefeningen, medicatie en voortgang wilt bijhouden. Denk aan enkel-, schouder-, heup- en rugklachten, maar ook aan herstel na een val of botbreuk.",
      },
      {
        q: "Werkt REVA ook voor een enkelblessure, schouderblessure of sportblessure?",
        a: "Ja. De functies van REVA zijn algemeen bruikbaar voor elk type blessure of operatie. Je kunt zelf aangeven waar je van herstelt, en de check-ins, oefeningen en pijnregistratie richt je in op jouw eigen situatie.",
      },
      {
        q: "Kan ik REVA gebruiken naast mijn fysiotherapeut?",
        a: "Ja. REVA vervangt geen fysiotherapeut, arts of ander zorgverlener, maar helpt je om je herstel gestructureerd bij te houden zodat je met concrete gegevens naar je afspraken gaat.",
      },
    ],
  },
  {
    category: "Gebruik & functies",
    items: [
      {
        q: "Wat kan ik allemaal bijhouden in REVA?",
        a: "In REVA houd je je dagelijkse check-ins (pijn, energie, stemming), afspraken, trainingen en oefeningen, medicatie en pijnregistratie, foto's van je herstel, je digitale dossier en je voortgang met grafieken bij.",
      },
      {
        q: "Hoeveel tijd kost een dagelijkse check-in?",
        a: "Een check-in duurt minder dan een minuut. Je beantwoordt een paar korte vragen over pijn, energie en gemoedstoestand.",
      },
      {
        q: "Kan ik mijn afspraken en medicatie bijhouden in REVA?",
        a: "Ja. Je voegt afspraken toe met datum, tijd en locatie en krijgt een herinnering. Medicatie en pijnregistratie houd je apart bij, zodat je patronen kunt herkennen, bijvoorbeeld dat je pijn toeneemt na een zware trainingsdag.",
      },
      {
        q: "Kan ik foto's van mijn herstel toevoegen?",
        a: "Ja. Je kunt foto's toevoegen aan je dossier of check-ins, bijvoorbeeld van een wond, zwelling of littekenherstel, zodat je zichtbaar kunt volgen hoe je herstel er ook uiterlijk aan toe is.",
      },
      {
        q: "Werkt REVA ook op mobiel?",
        a: "Ja. REVA is beschikbaar op web, iOS en Android, zodat je je herstel altijd en overal kunt bijhouden.",
      },
    ],
  },
  {
    category: "Gratis gebruik",
    items: [
      {
        q: "Wat kost REVA?",
        a: "Niets op dit moment. REVA is nog in ontwikkeling en is voorlopig volledig gratis te gebruiken, zonder creditcard.",
      },
      {
        q: "Blijft REVA gratis?",
        a: "Dat kunnen we nu nog niet garanderen. We bouwen REVA momenteel door samen met onze eerste gebruikers. Mochten we in de toekomst betaalde functies toevoegen, dan laten we dat ruim van tevoren weten.",
      },
    ],
  },
  {
    category: "Veiligheid & privacy",
    items: [
      {
        q: "Is mijn data veilig bij REVA?",
        a: "Ja. Jouw gezondheidsdata wordt versleuteld opgeslagen en nooit gedeeld of verkocht aan derden. Je gegevens zijn en blijven van jou.",
      },
      {
        q: "Kan ik mijn account en gegevens verwijderen?",
        a: "Ja, je kunt je account en alle bijbehorende gegevens op elk moment permanent verwijderen via de instellingen van de app.",
      },
      {
        q: "Is er een versie voor zorgverleners of praktijken?",
        a: "REVA werkt momenteel aan een variant voor fysiotherapiepraktijken en revalidatiecentra. Neem contact op voor meer informatie.",
      },
    ],
  },
];

const allFaqItems = faqGroups.flatMap((g) => g.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Veelgestelde vragen", url: "https://www.reva-app.nl/faq" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Veelgestelde vragen
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Alles wat je wilt weten over REVA
              </h1>
              <p className="text-lg" style={{ color: "#6b7280" }}>
                Vind je je vraag hier niet terug? Neem gerust contact met ons op.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 space-y-12">
            {faqGroups.map((group, gi) => (
              <AnimateIn key={group.category} direction="up" delay={gi * 60}>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#e8632a" }}>
                    {group.category}
                  </h2>
                  <FaqAccordion items={group.items} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Nog niet alle antwoorden gevonden?
              </h2>
              <p className="mb-6" style={{ color: "#7c7c8a" }}>
                Stel je vraag rechtstreeks aan ons, of probeer REVA gratis en ervaar het zelf.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`${DASHBOARD_URL}/register`} className="btn-primary px-6 py-3">
                  Start gratis
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="btn-dark px-6 py-3 text-sm">
                  Neem contact op
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
