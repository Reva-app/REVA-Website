import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — REVA App",
  description:
    "De algemene voorwaarden van REVA App. Lees de afspraken en gebruiksregels van onze dienst.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <SiteLayout>
      <LegalLayout title="Algemene Voorwaarden" lastUpdated="9 april 2025">
        <h2>1. Definities</h2>
        <p>In deze algemene voorwaarden wordt verstaan onder:</p>
        <ul>
          <li><strong>REVA / wij:</strong> de aanbieder van de REVA App dienst.</li>
          <li><strong>Gebruiker / jij:</strong> iedere natuurlijke persoon die gebruik maakt van de REVA App.</li>
          <li><strong>Dienst:</strong> het persoonlijk herstel dashboard dat via reva-app.nl en dashboard.reva-app.nl wordt aangeboden.</li>
          <li><strong>Account:</strong> de persoonlijke omgeving van de gebruiker binnen de dienst.</li>
        </ul>

        <h2>2. Toepasselijkheid</h2>
        <p>
          Deze algemene voorwaarden zijn van toepassing op elk gebruik van de REVA App dienst.
          Door een account aan te maken, ga je akkoord met deze voorwaarden. Wij behouden het
          recht deze voorwaarden te wijzigen. Bij ingrijpende wijzigingen word je hiervan tijdig
          op de hoogte gesteld.
        </p>

        <h2>3. Gebruik van de dienst</h2>
        <p>
          De REVA App is bedoeld als persoonlijk hulpmiddel bij het bijhouden van een
          hersteltraject. De dienst vervangt nadrukkelijk geen medisch advies, diagnose of
          behandeling. Bij medische vragen of noodgevallen dien je altijd contact op te nemen
          met een zorgverlener.
        </p>
        <p>
          Je bent zelf verantwoordelijk voor de juistheid van de informatie die je in de app
          invoert. REVA kan niet aansprakelijk worden gesteld voor beslissingen die worden
          genomen op basis van door jou ingevoerde gegevens.
        </p>

        <h2>4. Account en toegang</h2>
        <p>
          Om gebruik te maken van de dienst dien je een account aan te maken. Je bent
          verantwoordelijk voor het geheimhouden van je inloggegevens en voor alle activiteiten
          die plaatsvinden via jouw account. Neem direct contact op als je vermoedt dat iemand
          anders toegang heeft tot jouw account.
        </p>
        <p>
          Je dient minimaal 16 jaar oud te zijn om een account aan te maken. Personen jonger
          dan 16 jaar hebben toestemming nodig van een ouder of voogd.
        </p>

        <h2>5. Abonnement en betaling</h2>
        <p>
          Na de gratis proefperiode van 30 dagen kun je kiezen voor een betaald abonnement.
          De actuele prijzen zijn te vinden op de prijzenpagina. Betaling verloopt via de
          aangeboden betaalmethoden.
        </p>
        <p>
          Abonnementen worden automatisch verlengd tenzij je opzegt. Opzeggen kan op elk moment
          via je accountinstellingen, met ingang van de volgende facturatieperiode.
        </p>

        <h2>6. Proefperiode</h2>
        <p>
          Nieuwe gebruikers krijgen een proefperiode van 30 dagen met volledige toegang tot alle
          functies. Er is geen creditcard vereist voor de proefperiode. Na afloop van de
          proefperiode wordt het account automatisch omgezet naar de beperkte gratis versie,
          tenzij je een betaald abonnement activeert.
        </p>

        <h2>7. Beschikbaarheid en onderhoud</h2>
        <p>
          Wij streven naar een beschikbaarheid van 99,5%. Gepland onderhoud kondigen wij
          vooraf aan. Wij zijn niet aansprakelijk voor schade als gevolg van tijdelijke
          onbeschikbaarheid.
        </p>

        <h2>8. Intellectueel eigendom</h2>
        <p>
          Alle rechten op de REVA App, inclusief software, ontwerp, teksten en merknamen,
          berusten bij REVA. Jij bezit alle rechten op de gegevens die je zelf invoert. Wij
          claimen geen eigendom op jouw persoonlijke gegevens.
        </p>

        <h2>9. Aansprakelijkheid</h2>
        <p>
          REVA is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
          Onze aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat jij in de
          afgelopen drie maanden aan abonnement hebt betaald.
        </p>
        <p>
          REVA is geen medisch hulpmiddel en is niet gecertificeerd als zodanig. Het gebruik
          van de app vervangt nooit professioneel medisch advies.
        </p>

        <h2>10. Beëindiging</h2>
        <p>
          Je kunt je account op elk moment verwijderen via de instellingen. Wij behouden het
          recht om accounts te sluiten bij misbruik of overtreding van deze voorwaarden.
          Bij beëindiging worden jouw gegevens binnen 30 dagen verwijderd.
        </p>

        <h2>11. Toepasselijk recht</h2>
        <p>
          Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd
          aan de bevoegde rechter in Nederland. Wij geven altijd de voorkeur aan een oplossing
          in onderling overleg voordat een geschil aan de rechter wordt voorgelegd.
        </p>

        <h2>12. Contact</h2>
        <p>
          Bij vragen over deze algemene voorwaarden kun je contact opnemen via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>
      </LegalLayout>
    </SiteLayout>
  );
}
