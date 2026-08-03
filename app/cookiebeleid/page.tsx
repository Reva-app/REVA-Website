import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description:
    "Lees welke cookies REVA gebruikt, waarom, en hoe je op elk moment je cookievoorkeuren kunt aanpassen.",
  openGraph: {
    title: "Cookiebeleid",
    description: "Welke cookies REVA gebruikt en hoe je je voorkeuren aanpast.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/cookiebeleid",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.reva-app.nl/cookiebeleid",
  },
};

export default function CookiebeleidPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Cookiebeleid", url: "https://www.reva-app.nl/cookiebeleid" },
        ])}
      />
      <SiteLayout>
      <LegalLayout title="Cookiebeleid" lastUpdated="1 augustus 2026">

        <p>
          Deze pagina legt uit welke cookies en vergelijkbare technieken reva-app.nl gebruikt,
          waarom, en hoe je je voorkeuren op elk moment kunt aanpassen.
        </p>

        <h2>1. Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine tekstbestanden die een website op je apparaat kan opslaan. Sommige
          cookies zijn noodzakelijk om een website goed te laten werken, andere worden gebruikt om
          bijvoorbeeld bezoekersgedrag te analyseren of advertenties te personaliseren. Voor alles
          behalve strikt noodzakelijke cookies is volgens de wet (de ePrivacyverordening en de AVG)
          jouw voorafgaande, actieve toestemming vereist.
        </p>

        <h2>2. Welke cookies gebruikt REVA op dit moment?</h2>
        <p>
          Op dit moment plaatst reva-app.nl <strong>geen</strong> analytische of
          marketingcookies. We slaan uitsluitend je eigen cookievoorkeur op (welke categorieën je
          hebt geaccepteerd of geweigerd), zodat we je niet bij ieder bezoek opnieuw hoeven te
          vragen. Deze voorkeur wordt lokaal in je browser bewaard (via localStorage) en valt onder
          de categorie strikt noodzakelijk: hiervoor is geen toestemming vereist, omdat het enige
          doel is om je eigen keuze te onthouden.
        </p>
        <p>
          Onze cookiemelding ondersteunt daarnaast al de onderstaande categorieën, zodat we, mocht
          REVA in de toekomst bijvoorbeeld website-analytics toevoegen, dat nooit zonder jouw
          voorafgaande toestemming zullen doen.
        </p>

        <h2>3. Cookiecategorieën</h2>
        <p><strong>Noodzakelijk (altijd actief)</strong></p>
        <ul>
          <li>Onthoudt je cookievoorkeur, zodat de melding niet steeds opnieuw verschijnt.</li>
          <li>Geen toestemming vereist: noodzakelijk voor het functioneren van de website.</li>
        </ul>
        <p><strong>Analytisch (uit, tenzij je toestemming geeft)</strong></p>
        <ul>
          <li>Bedoeld om anoniem inzicht te krijgen in hoe bezoekers de website gebruiken.</li>
          <li>Wordt op dit moment niet gebruikt op reva-app.nl.</li>
        </ul>
        <p><strong>Marketing (uit, tenzij je toestemming geeft)</strong></p>
        <ul>
          <li>Bedoeld voor het meten van de effectiviteit van advertentiecampagnes.</li>
          <li>Wordt op dit moment niet gebruikt op reva-app.nl.</li>
        </ul>

        <h2>4. Jouw voorkeuren aanpassen</h2>
        <p>
          Je kunt je cookievoorkeuren op elk moment wijzigen, ook als je eerder al een keuze hebt
          gemaakt. Dit kan via onderstaande knop of via &ldquo;Cookie-instellingen&rdquo; onderaan
          elke pagina.
        </p>
        <div className="my-6">
          <CookiePreferencesButton />
        </div>
        <p>
          Wil je liever cookies volledig via je browser beheren of blokkeren? Dat kan ook: de meeste
          browsers bieden instellingen om cookies te weigeren of automatisch te verwijderen. Let op:
          dit kan het functioneren van sommige websites beïnvloeden.
        </p>

        <h2>5. Bewaartermijn</h2>
        <p>
          Je cookievoorkeur wordt bewaard tot je deze zelf wijzigt, je browsergegevens wist, of tot
          wij de categorieën in deze cookiemelding wijzigen (in dat geval vragen we je opnieuw om
          een keuze).
        </p>

        <h2>6. Meer informatie</h2>
        <p>
          Voor meer informatie over hoe REVA omgaat met persoonsgegevens, bekijk onze{" "}
          <a href="/privacy-policy">Privacy Policy</a>. Heb je vragen over dit cookiebeleid, neem
          dan contact op via <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

      </LegalLayout>
      </SiteLayout>
    </>
  );
}
