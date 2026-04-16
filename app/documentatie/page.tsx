import type { Metadata } from "next";
import {
  LayoutDashboard, ClipboardCheck, CalendarDays,
  Dumbbell, Pill, FolderOpen, BarChart3, HelpCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Documentatie — REVA App",
  description:
    "Alles wat je nodig hebt om aan de slag te gaan met REVA. Uitleg per functie, tips en veelgestelde vragen.",
};

const sections = [
  {
    id: "aan-de-slag",
    icon: LayoutDashboard,
    title: "Aan de slag",
    content: [
      {
        heading: "Account aanmaken",
        text: "Ga naar dashboard.reva-app.nl en klik op 'Registreren'. Vul je naam, e-mailadres en een wachtwoord in. Je hebt direct toegang zonder creditcard.",
      },
      {
        heading: "Je profiel instellen",
        text: "Na het aanmaken van je account stel je je hersteltraject in: wat is je blessure of operatie, wanneer is het begonnen en wat is je doel? Dit helpt REVA je beter te begeleiden.",
      },
      {
        heading: "Dashboard inrichten",
        text: "Voeg je eerste afspraken, medicatie en oefeningen toe. Je dashboard past zich automatisch aan op basis van wat je invult.",
      },
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    content: [
      {
        heading: "Wat zie je op het dashboard?",
        text: "Het dashboard toont je dagelijkse samenvatting: je check-in streak, pijnscore van vandaag, eerstvolgende afspraak en je herstelvoortgang. Alles in één oogopslag.",
      },
      {
        heading: "Statistieken deze week",
        text: "Het blok 'Deze week' geeft een overzicht van je gemiddelde check-in score, afgeronde trainingen, medicijn-innames en behaalde mijlpalen.",
      },
    ],
  },
  {
    id: "check-ins",
    icon: ClipboardCheck,
    title: "Dagelijkse check-ins",
    content: [
      {
        heading: "Wat is een check-in?",
        text: "Een dagelijkse check-in is een korte registratie van hoe je je voelt. Je geeft een score voor pijn, energie en stemming. Het duurt minder dan een minuut.",
      },
      {
        heading: "Waarom dagelijks?",
        text: "Door elke dag bij te houden hoe het gaat, ontstaat er een patroon. Je kunt zien op welke dagen je je beter voelt, wat je herstel positief of negatief beïnvloedt en hoe je overall voortgang verloopt.",
      },
      {
        heading: "Streak",
        text: "Elke dag dat je een check-in doet, bouw je een streak op. De streak is een motivator om consistent bij te houden hoe het gaat.",
      },
    ],
  },
  {
    id: "afspraken",
    icon: CalendarDays,
    title: "Afspraken",
    content: [
      {
        heading: "Afspraken toevoegen",
        text: "Voeg afspraken toe via het tabblad 'Afspraken'. Geef de naam van de zorgverlener aan, de datum en het tijdstip. Optioneel kun je een locatie of notitie toevoegen.",
      },
      {
        heading: "Overzicht",
        text: "Je ziet je komende en eerdere afspraken in chronologische volgorde. De eerstvolgende afspraak verschijnt ook op je dashboard.",
      },
    ],
  },
  {
    id: "trainingen",
    icon: Dumbbell,
    title: "Trainingen en oefeningen",
    content: [
      {
        heading: "Oefeningen bijhouden",
        text: "Voeg oefeningen toe die je van je fysiotherapeut hebt gekregen. Je kunt ze per dag afvinken en eventueel sets, herhalingen of een notitie toevoegen.",
      },
      {
        heading: "Voortgang",
        text: "REVA houdt bij hoeveel trainingen je per week hebt afgerond. Dit is zichtbaar op je dashboard en in de analyse.",
      },
    ],
  },
  {
    id: "medicatie",
    icon: Pill,
    title: "Medicatie",
    content: [
      {
        heading: "Medicatie toevoegen",
        text: "Voeg je medicijnen toe met naam, dosering en innametijdstip. REVA onthoudt wanneer je wat neemt.",
      },
      {
        heading: "Innames registreren",
        text: "Na elke inname vink je het af. Zo houd je bij of je je schema hebt gevolgd en zie je in de analyse wanneer je medicatie nodig had.",
      },
    ],
  },
  {
    id: "dossier",
    icon: FolderOpen,
    title: "Persoonlijk dossier",
    content: [
      {
        heading: "Wat kun je opslaan?",
        text: "Sla diagnoses, brieven van specialisten, röntgenfoto's, echo's en andere medische documenten op in je persoonlijk dossier. Alles bij elkaar, altijd beschikbaar.",
      },
      {
        heading: "Privacy",
        text: "Je dossier is privé. Alleen jij hebt toegang. Documenten worden versleuteld opgeslagen en niet gedeeld met derden.",
      },
    ],
  },
  {
    id: "analyse",
    icon: BarChart3,
    title: "Voortgang en analyse",
    content: [
      {
        heading: "Grafieken",
        text: "De analyse toont grafieken van je pijnscore, energie en stemming over tijd. Zo zie je patronen die je anders makkelijk mist.",
      },
      {
        heading: "Mijlpalen",
        text: "Stel mijlpalen in, zoals 'eerste keer lopen zonder kruk' of '10 kilometer fietsen'. REVA viert je vooruitgang met je mee.",
      },
    ],
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "Veelgestelde vragen",
    content: [
      {
        heading: "Werkt REVA ook op mijn telefoon?",
        text: "Ja. REVA werkt als een Progressive Web App (PWA) op iPhone en Android. Je kunt het toevoegen aan je beginscherm voor een native app-ervaring.",
      },
      {
        heading: "Kan ik mijn gegevens exporteren?",
        text: "Ja, met REVA Pro kun je een export maken van je check-ins, afspraken en andere gegevens als PDF of CSV.",
      },
      {
        heading: "Is REVA geschikt voor alle soorten blessures?",
        text: "Ja. REVA is ontworpen voor iedereen in een hersteltraject, ongeacht het type blessure of operatie.",
      },
      {
        heading: "Wat doe ik als ik een probleem heb?",
        text: "Neem contact op via onze contactpagina. We helpen je zo snel mogelijk, meestal binnen één werkdag.",
      },
    ],
  },
];

export default function DocumentatiePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Documentatie
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Hoe werkt REVA?
            </h1>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Alles wat je nodig hebt om aan de slag te gaan en het meeste uit REVA te halen.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

            {/* Sidebar nav — CSS-only hover, no event handlers */}
            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.id} href={`#${s.id}`} className="nav-link-doc">
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      {s.title}
                    </a>
                  );
                })}
              </div>
            </aside>

            {/* Main content */}
            <div className="md:col-span-3 space-y-12">
              {sections.map((s, si) => {
                const Icon = s.icon;
                return (
                  <AnimateIn key={s.id} direction="up" delay={si * 40}>
                    <div id={s.id} className="scroll-mt-24">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: "#e8e5df" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#fff3ee" }}>
                          <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                        </div>
                        <h2 className="text-xl font-semibold" style={{ color: "#1a1a1a" }}>{s.title}</h2>
                      </div>
                      <div className="space-y-5">
                        {s.content.map((c) => (
                          <div key={c.heading}>
                            <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#1a1a1a" }}>{c.heading}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{c.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
