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
      <LegalLayout title="Cookiebeleid" lastUpdated="6 november 2026">

        <p>
          Deze pagina legt uit welke cookies en vergelijkbare technieken reva-app.nl gebruikt,
          waarom, en hoe je je voorkeuren op elk moment kunt aanpassen.
        </p>

        <h2>1. Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine tekstbestanden die een website op je apparaat kan opslaan. Sommige
          cookies zijn noodzakelijk om een website goed te laten werken, andere worden gebruikt om
          bijvoorbeeld bezoekersgedrag te analyseren of advertenties te personaliseren. Voor alles
          behalve strikt noodzakelijke cookies is volgens de wet (artikel 11.7a van de
          Telecommunicatiewet en de AVG) jouw voorafgaande, actieve toestemming vereist. Weigeren is
          bij ons net zo eenvoudig als accepteren.
        </p>

        <h2>2. Welke cookies gebruikt REVA op dit moment?</h2>
        <p>
          We slaan altijd je eigen cookievoorkeur op (welke categorieën je hebt geaccepteerd of
          geweigerd), zodat we je niet bij ieder bezoek opnieuw hoeven te vragen. Deze voorkeur
          wordt lokaal in je browser bewaard (via localStorage) en valt onder de categorie strikt
          noodzakelijk: hiervoor is geen toestemming vereist, omdat het enige doel is om je eigen
          keuze te onthouden.
        </p>
        <p>
          Daarnaast gebruiken we Google Tag Manager om Google Analytics te laden, waarmee we
          anoniem inzicht krijgen in hoe bezoekers onze website gebruiken. Google Tag Manager wordt
          pas geladen nadat je voor minstens één categorie toestemming geeft. We gebruiken daarbij
          Google Consent Mode: standaard staat alles op &ldquo;geweigerd&rdquo;, en Google-diensten
          houden zich per categorie aan jouw keuze. Geef je alleen toestemming voor analytische
          cookies, dan worden er dus geen advertentiecookies geplaatst, en andersom.
        </p>
        <p>
          Trek je je toestemming later in, dan geven we dat direct door en verwijderen we de
          analytische cookies (zoals <code>_ga</code>) van je apparaat.
        </p>

        <h2>3. Cookiecategorieën</h2>
        <p><strong>Noodzakelijk (altijd actief)</strong></p>
        <ul>
          <li>Onthoudt je cookievoorkeur, zodat de melding niet steeds opnieuw verschijnt.</li>
          <li>Geen toestemming vereist: noodzakelijk voor het functioneren van de website.</li>
        </ul>
        <p><strong>Analytisch (uit, tenzij je toestemming geeft)</strong></p>
        <ul>
          <li>
            <strong>Google Tag Manager</strong> (Google Ireland Limited): laadt Google Analytics
            op onze website, zodat we tags kunnen beheren zonder de website-code te wijzigen.
          </li>
          <li>
            <strong>Google Analytics</strong> (Google Ireland Limited): meet paginaweergaven en
            bezoekersgedrag, zodat we de website kunnen verbeteren. Plaatst cookies zoals{" "}
            <code>_ga</code> en <code>_ga_*</code>, met een bewaartermijn van maximaal 2 jaar.
          </li>
          <li>Beide worden alleen geladen als je hiervoor toestemming geeft.</li>
        </ul>
        <p><strong>Marketing (uit, tenzij je toestemming geeft)</strong></p>
        <ul>
          <li>
            Bedoeld voor het meten van de effectiviteit van advertentiecampagnes, bijvoorbeeld via
            Google Ads of Meta.
          </li>
          <li>
            Wordt op dit moment niet gebruikt op reva-app.nl. Gaan we dat wel doen, dan passen we
            dit cookiebeleid eerst aan en vragen we opnieuw om je toestemming.
          </li>
        </ul>

        <h2>4. Jouw voorkeuren aanpassen</h2>
        <p>
          Je kunt je cookievoorkeuren op elk moment wijzigen, ook als je eerder al een keuze hebt
          gemaakt. Dit kan via onderstaande knop of via &ldquo;Cookie-instellingen&rdquo; onderaan
          elke pagina. Je kunt per categorie kiezen, of alles in één keer weigeren of accepteren.
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
