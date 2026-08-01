import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "De algemene voorwaarden van REVA App voor fysiotherapiepraktijken. Lees de afspraken en gebruiksregels van onze dienst.",
  alternates: {
    canonical: "https://www.reva-app.nl/algemene-voorwaarden",
  },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Algemene Voorwaarden", url: "https://www.reva-app.nl/algemene-voorwaarden" },
        ])}
      />
      <SiteLayout>
      <LegalLayout title="Algemene Voorwaarden" lastUpdated="1 augustus 2026">
        <p>
          <strong>Opmerking vooraf:</strong> deze voorwaarden gaan uit van een B2B-relatie waarin een
          fysiotherapiepraktijk REVA afneemt en zelf patiënten uitnodigt. Deze tekst is nog niet
          juridisch getoetst aan het daadwerkelijke dienstverleningsmodel en dient voor publicatie te
          worden gecontroleerd door een jurist, samen met de bijbehorende verwerkersovereenkomst.
        </p>

        <h2>1. Definities</h2>
        <p>In deze algemene voorwaarden wordt verstaan onder:</p>
        <ul>
          <li><strong>REVA / wij:</strong> de aanbieder van de REVA App dienst.</li>
          <li><strong>Praktijk / Klant:</strong> de fysiotherapiepraktijk die een overeenkomst met REVA aangaat om de dienst te gebruiken.</li>
          <li><strong>Praktijkgebruiker:</strong> een medewerker van de praktijk met een REVA-account.</li>
          <li><strong>Patiënt:</strong> de natuurlijke persoon die door de praktijk wordt uitgenodigd om REVA te gebruiken voor zijn of haar hersteltraject.</li>
          <li><strong>Dienst:</strong> het patiëntenportaal dat via reva-app.nl en dashboard.reva-app.nl wordt aangeboden.</li>
          <li><strong>Account:</strong> de persoonlijke omgeving van een praktijkgebruiker of patiënt binnen de dienst.</li>
        </ul>

        <h2>2. Toepasselijkheid</h2>
        <p>
          Deze algemene voorwaarden zijn van toepassing op de overeenkomst tussen REVA en de praktijk,
          en op elk gebruik van de dienst door praktijkgebruikers en patiënten. Door een praktijkaccount
          aan te maken, gaat de praktijk akkoord met deze voorwaarden en zorgt zij ervoor dat
          patiënten op de hoogte zijn van de relevante bepalingen. Wij behouden het recht deze
          voorwaarden te wijzigen. Bij ingrijpende wijzigingen wordt de praktijk hiervan tijdig op de
          hoogte gesteld.
        </p>

        <h2>3. Gebruik van de dienst</h2>
        <p>
          De REVA App is bedoeld als hulpmiddel voor fysiotherapiepraktijken om patiënten te
          begeleiden bij het bijhouden van hun hersteltraject. De dienst vervangt nadrukkelijk geen
          medisch advies, diagnose of behandeling en is geen medisch hulpmiddel. De praktijk blijft
          verantwoordelijk voor de behandelrelatie met haar patiënten.
        </p>
        <p>
          De praktijk en haar patiënten zijn zelf verantwoordelijk voor de juistheid van de informatie
          die in de app wordt ingevoerd. REVA kan niet aansprakelijk worden gesteld voor beslissingen
          die worden genomen op basis van in de app ingevoerde gegevens.
        </p>

        <h2>4. Account en toegang</h2>
        <p>
          Een praktijkaccount kan alleen worden aangemaakt door een persoon die bevoegd is om namens
          de praktijk te handelen. De praktijk is verantwoordelijk voor het beheer van accounts van
          haar eigen praktijkgebruikers en voor het uitnodigen van patiënten.
        </p>
        <p>
          Praktijkgebruikers en patiënten zijn zelf verantwoordelijk voor het geheimhouden van hun
          inloggegevens en voor alle activiteiten die plaatsvinden via hun account. Neem direct contact
          op als je vermoedt dat iemand anders toegang heeft tot een account.
        </p>
        <p>
          Bij minderjarige patiënten is de praktijk verantwoordelijk voor het verkrijgen van
          toestemming van een ouder of wettelijk voogd, voorafgaand aan het uitnodigen van de
          minderjarige voor REVA.
        </p>

        <h2>5. Abonnementen en pakketten</h2>
        <p>
          REVA wordt aangeboden in vier pakketten: Solo, Team, Praktijk en Enterprise. Elk pakket
          geeft toegang tot alle functies van REVA en verschilt in het aantal medewerkers,
          vestigingen en patiënten dat is inbegrepen, en in het niveau van support en onboarding. De
          actuele pakketten en de bijbehorende prijzen staan op{" "}
          <a href="/prijzen">reva-app.nl/prijzen</a>.
        </p>
        <p>
          Een abonnement wordt aangegaan voor de duur van een maand of een jaar, afhankelijk van de
          gekozen facturatiewijze, en wordt telkens stilzwijgend verlengd voor eenzelfde periode
          tenzij de praktijk tijdig opzegt conform artikel 7. Een praktijk kan op elk moment
          overstappen naar een groter of kleiner pakket door contact met ons op te nemen; wij
          bevestigen de wijziging en de ingangsdatum schriftelijk.
        </p>
        <p>
          Groeit een praktijk buiten de grenzen van het gekozen pakket, dan nemen wij contact op om
          samen een passend pakket te bepalen voordat er extra kosten in rekening worden gebracht.
        </p>

        <h2>6. Betalingen en facturatie</h2>
        <p>
          Facturatie vindt plaats maandelijks of jaarlijks vooraf, afhankelijk van de gekozen
          facturatiewijze. Bij jaarlijkse facturatie geldt de korting die op het moment van afsluiten
          op de prijzenpagina is vermeld.
        </p>
        <p>
          Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij het uitblijven van
          betaling kunnen wij, na een herinnering, de toegang tot de dienst tijdelijk opschorten
          totdat het openstaande bedrag is voldaan. Wijzigingen in de prijs van een pakket worden
          minimaal 30 dagen van tevoren aangekondigd aan de praktijk.
        </p>

        <h2>7. Opzegging en beëindiging</h2>
        <p>
          Een praktijk kan het abonnement opzeggen tegen het einde van de lopende factuurperiode, met
          inachtneming van een opzegtermijn van 30 dagen. Opzeggen kan via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>. Een patiënt kan het eigen account op
          elk moment verwijderen via de instellingen, ongeacht het abonnement van de praktijk.
        </p>
        <p>
          Wij behouden het recht om accounts of het abonnement te schorsen of te beëindigen bij
          misbruik, herhaalde overtreding van deze voorwaarden, of bij het uitblijven van betaling
          ondanks een herinnering. Bij beëindiging worden gegevens verwijderd conform de termijnen in
          de privacyverklaring en de <a href="/legal/dpa">verwerkersovereenkomst</a>.
        </p>

        <h2>8. Beschikbaarheid en onderhoud</h2>
        <p>
          Wij streven naar een beschikbaarheid van 99,5%. Gepland onderhoud kondigen wij
          vooraf aan. Wij zijn niet aansprakelijk voor schade als gevolg van tijdelijke
          onbeschikbaarheid.
        </p>

        <h2>9. Support</h2>
        <p>
          Alle pakketten geven recht op e-mailsupport tijdens werkdagen, met een reactietijd van
          maximaal 1 werkdag. Het Team-pakket en hoger geeft daarnaast recht op telefonische support.
          Het Praktijk-pakket en hoger geeft recht op prioriteitsondersteuning met een kortere
          reactietijd. Enterprise-klanten krijgen een vaste, persoonlijke accountmanager als eerste
          aanspreekpunt. Support is bereikbaar via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

        <h2>10. Intellectueel eigendom</h2>
        <p>
          Alle rechten op de REVA App, inclusief software, ontwerp, teksten en merknamen,
          berusten bij REVA. De praktijk en haar patiënten behouden alle rechten op de gegevens die
          zij zelf invoeren. Wij claimen geen eigendom op deze gegevens.
        </p>

        <h2>11. Aansprakelijkheid</h2>
        <p>
          REVA is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
          Onze aansprakelijkheid jegens de praktijk is in alle gevallen beperkt tot het bedrag dat de
          praktijk in de afgelopen drie maanden aan REVA heeft betaald.
        </p>
        <p>
          REVA is geen medisch hulpmiddel en is niet gecertificeerd als zodanig. Het gebruik
          van de app vervangt nooit professioneel medisch advies of de eigen verantwoordelijkheid van
          de praktijk in de behandelrelatie met haar patiënten.
        </p>

        <h2>12. Toepasselijk recht</h2>
        <p>
          Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd
          aan de bevoegde rechter in Nederland. Wij geven altijd de voorkeur aan een oplossing
          in onderling overleg voordat een geschil aan de rechter wordt voorgelegd.
        </p>

        <h2>13. Contact</h2>
        <p>
          Bij vragen over deze algemene voorwaarden kun je contact opnemen via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>
      </LegalLayout>
      </SiteLayout>
    </>
  );
}
