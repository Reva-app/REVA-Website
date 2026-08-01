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
    "Antwoorden op de meest gestelde vragen over REVA: wat het is, voor wie het bedoeld is, hoe de implementatie werkt, wat het kost en hoe REVA omgaat met patiëntdata.",
  openGraph: {
    title: "Veelgestelde vragen",
    description: "Antwoorden op de meest gestelde vragen over REVA, voor fysiotherapiepraktijken.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/faq",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/faq",
  },
};

const faqGroups = [
  {
    category: "Algemeen",
    items: [
      {
        q: "Wat is REVA precies?",
        a: "REVA is een patiëntenportaal dat specifiek gebouwd is voor fysiotherapiepraktijken. Patiënten houden na een blessure of operatie zelf hun herstel bij: dagelijkse check-ins over pijn en energie, foto-updates, medicatiegebruik en de voortgang van hun oefenprogramma. Als praktijk zie je al die informatie automatisch samenkomen in één overzicht, inclusief signalering van patiënten die extra aandacht nodig hebben. Zo hoef je niet meer zelf actief te bellen of appen om te weten hoe het met iemand gaat.",
      },
      {
        q: "Voor wie is REVA bedoeld?",
        a: "REVA is bedoeld voor fysiotherapiepraktijken van elke omvang: van zelfstandige fysiotherapeuten tot praktijken met meerdere behandelaars en vestigingen. Het is vooral waardevol voor praktijken die patiënten begeleiden na een operatie, blessure of langdurig hersteltraject, waarbij overzicht en therapietrouw tussen behandelingen door belangrijk zijn.",
      },
      {
        q: "Vervangt REVA mijn bestaande EPD of praktijksoftware?",
        a: "Nee, REVA vervangt je bestaande EPD, agenda- of declaratiesysteem niet. REVA is een aanvullend patiëntenportaal dat zich specifiek richt op de communicatie en het overzicht tussen behandelingen door: check-ins, herstelplannen en voortgang. De meeste praktijken gebruiken REVA naast hun huidige software. Tijdens een demo bespreken we hoe REVA aansluit op wat je al gebruikt.",
      },
      {
        q: "Wat maakt REVA anders dan een algemene fitness- of trainings-app?",
        a: "Generieke fitness-apps zijn gebouwd voor trainingsschema's, niet voor een medisch hersteltraject. REVA is specifiek ontworpen rond de fases van herstel na een blessure of operatie: het combineert pijn- en medicatieregistratie, een digitaal dossier, behandeldoelen en voortgangsanalyse in één systeem dat is afgestemd op fysiotherapie, niet op sportprestatie.",
      },
    ],
  },
  {
    category: "Implementatie",
    items: [
      {
        q: "Hoe lang duurt het om REVA in mijn praktijk in te richten?",
        a: "De meeste praktijken hebben REVA snel operationeel, zonder een langdurig IT-traject. Je richt je organisatie in, voegt medewerkers en locaties toe en stelt herstelplannen samen die je telkens opnieuw kunt gebruiken. Daarna kun je direct je eerste patiënten uitnodigen.",
      },
      {
        q: "Heeft mijn team veel training nodig om met REVA te werken?",
        a: "Nee. REVA is bewust eenvoudig en intuïtief opgezet, vergelijkbaar met apps die je team al dagelijks gebruikt. De meeste fysiotherapeuten en praktijkmedewerkers hebben binnen enkele minuten door hoe het werkt. Bij de start begeleiden we je team persoonlijk, zodat iedereen zich vanaf dag één zeker voelt.",
      },
      {
        q: "Werkt REVA ook met meerdere behandelaars of vestigingen?",
        a: "Ja. Je kunt meerdere medewerkers met verschillende rollen toevoegen en meerdere locaties inrichten binnen dezelfde organisatie. Patiënten en herstelplannen zijn overzichtelijk gekoppeld aan de juiste behandelaar en vestiging, ook als een patiënt van behandelaar wisselt.",
      },
      {
        q: "Kan ik REVA eerst zien voordat ik overstap?",
        a: "Ja. Tijdens een persoonlijke demo laten we REVA zien aan de hand van jouw eigen praktijksituatie, zodat je precies ziet hoe het voor jouw patiënten en team zou werken voordat je een keuze maakt.",
      },
    ],
  },
  {
    category: "Gebruik & functies",
    items: [
      {
        q: "Wat houdt een patiënt precies bij in REVA?",
        a: "Patiënten vullen dagelijks een korte check-in in over pijn, energie en hoe het herstel voelt, loggen medicatiegebruik, voegen foto-updates toe en vinken hun oefenprogramma af. Al die gegevens komen automatisch samen in het dossier dat jij als fysio inziet, inclusief grafieken die trends in pijn en therapietrouw laten zien.",
      },
      {
        q: "Hoe nodig ik een patiënt uit voor REVA?",
        a: "Je vult de gegevens van je patiënt in: de blessure of operatie, de startdatum en het herstelplan dat bij de situatie past. REVA bouwt hier automatisch een persoonlijk dashboard voor, en de patiënt ontvangt direct een e-mail om zijn of haar eigen portaal te activeren.",
      },
      {
        q: "Kan ik oefeningen of herstelplannen aanpassen tijdens een consult?",
        a: "Ja. Tijdens het consult kun je oefeningen direct toevoegen, aanpassen of verwijderen uit het herstelplan van een patiënt. De patiënt ziet de wijziging meteen terug in zijn of haar eigen portaal, zonder dat je een los document hoeft door te sturen.",
      },
      {
        q: "Werkt REVA ook op de telefoon van mijn patiënten?",
        a: "Ja. Zowel jij als je patiënten kunnen REVA gebruiken via de browser, iOS en Android. Patiënten vullen hun dagelijkse check-in doorgaans in minder dan een minuut in op hun telefoon.",
      },
    ],
  },
  {
    category: "Prijzen",
    items: [
      {
        q: "Wat kost REVA voor mijn praktijk?",
        a: "REVA heeft vier pakketten: Solo (49 euro per maand) voor de zelfstandige fysiotherapeut, Team (129 euro per maand) voor een kleine praktijk, Praktijk (349 euro per maand) voor meerdere vestigingen en Enterprise (vanaf 699 euro per maand) voor grote praktijken en ketens. Bij jaarlijkse facturering betaal je het equivalent van 2 maanden gratis. Bekijk de prijzenpagina voor de volledige vergelijking.",
      },
      {
        q: "Zitten er verborgen kosten aan REVA?",
        a: "Nee. Elk pakket heeft een vaste maand- of jaarprijs waarin alle functies van REVA zijn inbegrepen, zonder verborgen kosten.",
      },
      {
        q: "Is er een proefperiode of gratis versie?",
        a: "Neem contact op om de mogelijkheden te bespreken. We laten je tijdens een persoonlijke demo eerst zien hoe REVA werkt, zodat je een weloverwogen keuze kunt maken voordat je instapt.",
      },
    ],
  },
  {
    category: "Veiligheid & privacy",
    items: [
      {
        q: "Is patiëntdata veilig bij REVA?",
        a: "Ja. Gezondheidsgegevens van patiënten worden versleuteld opgeslagen en nooit gedeeld of verkocht aan derden. REVA is gebouwd met de vertrouwelijkheid van medische gegevens als uitgangspunt.",
      },
      {
        q: "Is REVA AVG-proof, en is er een verwerkersovereenkomst?",
        a: "Ja. Jouw praktijk blijft verwerkingsverantwoordelijke voor de gegevens van je patiënten, en REVA treedt op als verwerker op basis van een verwerkersovereenkomst die aansluit bij de AVG.",
      },
      {
        q: "Kan een patiënt zijn of haar gegevens laten verwijderen?",
        a: "Ja. Een patiënt kan op elk moment vragen om het eigen account en de bijbehorende gegevens te laten verwijderen, in lijn met de AVG.",
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
                Vind je je vraag over REVA voor jouw praktijk hier niet terug? Neem gerust contact met ons op.
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
                Stel je vraag rechtstreeks aan ons, of plan een demo en ervaar zelf hoe REVA werkt.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary px-6 py-3">
                  Vraag een demo aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:info@reva-app.nl" className="btn-dark px-6 py-3 text-sm">
                  Stel je vraag per e-mail
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
