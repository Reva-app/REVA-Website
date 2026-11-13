import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lees hoe REVA als verwerker omgaat met patiëntgegevens namens fysiotherapiepraktijken, en welke afspraken daarover gelden in de verwerkersovereenkomst.",
  openGraph: {
    images: OG_IMAGES,
    title: "Privacy Policy",
    description: "Hoe REVA omgaat met patiëntgegevens namens fysiotherapiepraktijken.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.reva-app.nl/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Privacy Policy", url: "https://www.reva-app.nl/privacy-policy" },
        ])}
      />
      <SiteLayout>
      <LegalLayout title="Privacy Policy" lastUpdated="6 november 2026">

        <p>
          <strong>Opmerking vooraf:</strong> deze pagina gaat ervan uit dat de fysiotherapiepraktijk
          die REVA gebruikt, verwerkingsverantwoordelijke is voor de gegevens van haar patiënten, en
          dat REVA App optreedt als verwerker op basis van een verwerkersovereenkomst met die
          praktijk. Deze tekst is nog niet juridisch getoetst aan het daadwerkelijke
          dienstverleningsmodel en dient voor publicatie te worden gecontroleerd door een jurist.
        </p>

        <p>
          REVA App hecht grote waarde aan de privacy van praktijken en hun patiënten. Gezondheidsgegevens
          zijn bijzonder persoonlijk en gevoelig. In deze privacyverklaring leggen wij helder en
          transparant uit welke gegevens wij verwerken, in welke rol, waarom wij dat doen en welke
          rechten betrokkenen hebben.
        </p>

        <h2>1. Wie zijn wij en in welke rol?</h2>
        <p>
          REVA App is een patiëntenportaal voor fysiotherapiepraktijken, ontwikkeld en beheerd in
          Nederland. Praktijken gebruiken REVA om patiënten na een blessure of operatie te begeleiden:
          patiënten houden zelf hun herstel bij, de praktijk krijgt daar overzicht over.
        </p>
        <p>
          In deze relatie is de fysiotherapiepraktijk de <strong>verwerkingsverantwoordelijke</strong>{" "}
          voor de gegevens van haar patiënten: de praktijk bepaalt met welk doel en op welke manier
          patiëntgegevens worden verwerkt. REVA App treedt op als <strong>verwerker</strong>: wij
          verwerken gegevens uitsluitend in opdracht van en volgens de instructies van de praktijk,
          vastgelegd in de <a href="/legal/dpa">verwerkersovereenkomst</a>, die elke praktijk
          accepteert bij het afsluiten van een abonnement.
        </p>
        <p>
          Voor gegevens van de praktijk zelf, zoals accountgegevens van het praktijkteam en
          facturatiegegevens, is REVA App verwerkingsverantwoordelijke.
        </p>
        <p>
          Voor vragen over deze privacyverklaring kun je contact opnemen via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>. Ben je patiënt bij een praktijk die
          REVA gebruikt en heb je een vraag over jouw gegevens? Neem dan in eerste instantie contact
          op met jouw praktijk, zij is verantwoordelijk voor de verwerking van jouw gegevens.
        </p>

        <h2>2. Welke gegevens verwerken wij?</h2>
        <p>
          REVA verwerkt gegevens die de praktijk en haar patiënten zelf invoeren, aangevuld met
          technische gebruiksgegevens. Wij verwerken uitsluitend wat noodzakelijk is voor de
          dienstverlening.
        </p>

        <p><strong>2.1 Praktijkgegevens</strong></p>
        <ul>
          <li>Naam en gegevens van de praktijk</li>
          <li>Naam, e-mailadres en rol van teamleden met een REVA-account</li>
          <li>Wachtwoord (versleuteld opgeslagen, nooit leesbaar voor ons)</li>
          <li>Facturatie- en contractgegevens</li>
        </ul>

        <p><strong>2.2 Patiëntaccountgegevens</strong></p>
        <ul>
          <li>Naam (voornaam en/of achternaam)</li>
          <li>E-mailadres</li>
          <li>Wachtwoord (versleuteld opgeslagen, nooit leesbaar voor ons)</li>
          <li>Datum van uitnodiging en registratie</li>
        </ul>

        <p><strong>2.3 Gezondheidsgegevens van patiënten (bijzondere persoonsgegevens)</strong></p>
        <p>
          De onderstaande gegevens zijn gezondheidsgegevens in de zin van artikel 9 van de
          Algemene Verordening Gegevensbescherming (AVG). Deze gegevens worden door de patiënt zelf
          ingevoerd binnen het portaal van de praktijk, en verwerkt door REVA App als verwerker in
          opdracht van de praktijk.
        </p>
        <ul>
          <li>
            <strong>Dagelijkse check-ins:</strong> pijnscore (0 tot 10), dagscore (1 tot 5), energieniveau,
            stemming en eventuele notities per dag.
          </li>
          <li>
            <strong>Afspraken:</strong> datum, tijd, type afspraak, behandelaar, locatie en
            notities.
          </li>
          <li>
            <strong>Herstelplannen en oefeningen:</strong> type oefening, aantal herhalingen of
            duur, afvinkstatus en activiteitsoverzichten per week.
          </li>
          <li>
            <strong>Medicatiegegevens:</strong> naam van het medicijn, dosering, innamemomenten,
            registratie van innames en eventuele bijwerkingen of opmerkingen.
          </li>
          <li>
            <strong>Patiëntdossier:</strong> documenten die de patiënt of de praktijk uploadt,
            zoals diagnoseverslagen, röntgenfoto&apos;s, brieven van specialisten of andere medische
            documenten.
          </li>
          <li>
            <strong>Zorgverzekering en contactgegevens:</strong> naam van de zorgverzekeraar,
            polisnummer, contactgegevens van het ziekenhuis, specialist, huisarts of andere
            zorgverleners.
          </li>
          <li>
            <strong>Behandeldoelen en mijlpalen:</strong> doelen die per patiënt worden
            vastgelegd en mijlpalen die als behaald worden gemarkeerd.
          </li>
          <li>
            <strong>Herstelcontext:</strong> type blessure of aandoening, operatiedatum,
            herstelstadium en andere informatie die relevant is voor het behandeltraject.
          </li>
        </ul>

        <p><strong>2.4 Technische gebruiksgegevens</strong></p>
        <ul>
          <li>IP-adres (anoniem verwerkt voor beveiligingsdoeleinden)</li>
          <li>Browsertype en besturingssysteem</li>
          <li>Tijdstip en datum van inlogmomenten</li>
          <li>Paginabezoeken binnen de applicatie (voor het verbeteren van de gebruikerservaring)</li>
        </ul>

        <p><strong>2.5 Betalingsgegevens</strong></p>
        <p>
          Betaalgegevens van praktijken (zoals IBAN) worden nooit direct door REVA App verwerkt of
          opgeslagen. Betalingen verlopen via een gecertificeerde betalingsdienstverlener. Wij
          ontvangen uitsluitend een bevestiging van de transactie.
        </p>

        <h2>3. Waarom verwerken wij deze gegevens?</h2>
        <p>Wij verwerken gegevens uitsluitend voor de volgende doeleinden:</p>
        <ul>
          <li>
            <strong>Het leveren van de REVA dienst:</strong> om het praktijkoverzicht te tonen,
            check-ins van patiënten op te slaan, afspraken te beheren en voortgangsinzichten te
            genereren voor de praktijk.
          </li>
          <li>
            <strong>Accountbeheer:</strong> om praktijk- en patiëntaccounts te beheren, inclusief
            uitnodigen, inloggen en het bijhouden van de abonnementsstatus van de praktijk.
          </li>
          <li>
            <strong>Servicemeldingen:</strong> om praktijken te informeren over wijzigingen in de
            app, nieuwe functies of technische mededelingen.
          </li>
          <li>
            <strong>Verbetering van de dienst:</strong> geanonimiseerde gebruiksgegevens helpen
            ons begrijpen welke functies goed werken en wat beter kan. Individuele
            gezondheidsgegevens worden hiervoor nooit gebruikt.
          </li>
          <li>
            <strong>Beveiliging:</strong> om misbruik te detecteren en accounts en data te
            beschermen.
          </li>
          <li>
            <strong>Wettelijke verplichtingen:</strong> om te voldoen aan van toepassing zijnde
            wet- en regelgeving.
          </li>
        </ul>

        <h2>4. Rechtsgrond voor verwerking</h2>
        <p>
          Voor gegevens van de praktijk zelf (praktijkaccount, facturatie) is de rechtsgrond de
          uitvoering van de overeenkomst tussen REVA App en de praktijk (art. 6 lid 1 sub b AVG).
        </p>
        <p>
          Voor patiëntgegevens, waaronder gezondheidsgegevens, geldt dat de praktijk als
          verwerkingsverantwoordelijke de rechtsgrond bepaalt en met de patiënt afstemt, doorgaans de
          uitvoering van de behandelovereenkomst en waar vereist expliciete toestemming van de patiënt
          (art. 6 lid 1 sub a en art. 9 lid 2 sub a of h AVG). REVA App verwerkt deze gegevens louter
          op instructie van de praktijk, vastgelegd in de verwerkersovereenkomst.
        </p>

        <h2>5. Hoe lang bewaren wij gegevens?</h2>
        <p>
          Wij bewaren gegevens zo lang als noodzakelijk voor de doeleinden waarvoor zij zijn
          verzameld, en in lijn met de afspraken in de verwerkersovereenkomst met de praktijk:
        </p>
        <ul>
          <li>
            <strong>Actieve accounts:</strong> gegevens worden bewaard zolang de praktijk een
            actief abonnement heeft en de patiënt een actief account heeft.
          </li>
          <li>
            <strong>Na accountverwijdering:</strong> gegevens van een patiënt worden binnen{" "}
            <strong>30 dagen</strong> na verwijdering permanent en onherstelbaar gewist, inclusief
            alle gezondheidsgegevens, documenten en check-ins.
          </li>
          <li>
            <strong>Na beëindiging van de praktijkovereenkomst:</strong> gegevens worden verwijderd
            of aan de praktijk overgedragen conform de afspraken in de verwerkersovereenkomst.
          </li>
          <li>
            <strong>Back-ups:</strong> back-ups worden maximaal 90 dagen bewaard waarna ze
            automatisch worden verwijderd.
          </li>
          <li>
            <strong>Wettelijke bewaartermijnen:</strong> in uitzonderingsgevallen kunnen wij
            verplicht zijn bepaalde gegevens langer te bewaren op grond van een wettelijke
            verplichting (bijv. fiscale bewaarplicht van 7 jaar voor factuurgegevens).
          </li>
        </ul>

        <h2>6. Delen wij gegevens met derden?</h2>
        <p>
          Wij verkopen gegevens nooit aan derden. Gezondheidsgegevens worden nooit gedeeld met
          externe partijen zonder geldige grondslag.
        </p>
        <p>
          Uiteraard heeft de praktijk zelf, als verwerkingsverantwoordelijke, toegang tot de gegevens
          van haar eigen patiënten binnen REVA. Dat is geen verstrekking aan een derde, maar
          onderdeel van de behandelrelatie tussen praktijk en patiënt.
        </p>
        <p>
          Daarnaast maken wij gebruik van een beperkt aantal zorgvuldig geselecteerde subverwerkers
          die in opdracht van ons technische diensten verlenen:
        </p>
        <ul>
          <li>
            <strong>Hostingprovider:</strong> voor het opslaan van data op beveiligde servers.
            Met deze partij is een verwerkersovereenkomst gesloten conform de AVG.
          </li>
          <li>
            <strong>Betalingsdienstverlener:</strong> voor de verwerking van betalingen van
            praktijken. Deze partij heeft geen toegang tot patiëntgegevens.
          </li>
          <li>
            <strong>E-maildienst:</strong> uitsluitend voor het versturen van transactionele
            e-mails (zoals wachtwoordherstel en uitnodigingen).
          </li>
        </ul>
        <p>
          <strong>Nieuwsbrief:</strong> meld je je aan voor onze nieuwsbrief, dan verwerken wij je
          e-mailadres op basis van jouw toestemming, om je artikelen en nieuws over REVA en
          praktijkvoering te sturen. Hiervoor gebruiken wij Klaviyo (Klaviyo, Inc.). Je kunt je op
          elk moment afmelden via de link onderaan elke e-mail; daarna gebruiken we je e-mailadres
          niet meer voor de nieuwsbrief. Verwerkt Klaviyo gegevens buiten de EER, dan gebeurt dat
          op basis van passende waarborgen conform de AVG, zoals het EU-VS Data Privacy Framework
          of standaardcontractbepalingen.
        </p>
        <p>
          Met alle subverwerkers zijn verwerkersovereenkomsten gesloten die voldoen aan de
          vereisten van de AVG. Subverwerkers hebben uitsluitend toegang tot de gegevens die
          strikt noodzakelijk zijn voor hun specifieke dienst.
        </p>
        <p>
          Wij verstrekken gegevens aan overheidsinstanties of toezichthouders uitsluitend indien
          wij hiertoe wettelijk verplicht zijn, en informeren de betrokken praktijk daarover waar dat
          wettelijk is toegestaan.
        </p>

        <h2>7. Beveiliging van gegevens</h2>
        <p>
          Wij nemen de beveiliging van (gezondheids)gegevens zeer serieus en passen passende
          technische en organisatorische maatregelen toe:
        </p>
        <ul>
          <li>Alle gegevens worden versleuteld opgeslagen (encryptie in rust).</li>
          <li>Alle datatransport verloopt via beveiligde HTTPS-verbindingen (TLS).</li>
          <li>Toegang tot productiedatabases is strikt beperkt en wordt gelogd.</li>
          <li>Wachtwoorden worden nooit in leesbare vorm opgeslagen (bcrypt hashing).</li>
          <li>Geüploade documenten in het patiëntdossier worden versleuteld bewaard.</li>
          <li>Regelmatige beveiligingsevaluaties en updates van onze systemen.</li>
        </ul>
        <p>
          Bij een datalek dat risico oplevert voor de rechten en vrijheden van betrokkenen,
          informeren wij de betrokken praktijk zonder onnodige vertraging, zodat de praktijk als
          verwerkingsverantwoordelijke aan haar eigen meldplichten kan voldoen.
        </p>

        <h2>8. Rechten van patiënten onder de AVG</h2>
        <p>
          Patiënten hebben op grond van de Algemene Verordening Gegevensbescherming rechten ten
          aanzien van hun gegevens, waaronder recht op inzage, rectificatie, verwijdering, beperking
          van verwerking, overdraagbaarheid en bezwaar. Omdat de praktijk verwerkingsverantwoordelijke
          is, kunnen deze verzoeken het beste eerst bij de eigen praktijk worden ingediend. Wij
          ondersteunen praktijken bij het afhandelen van dergelijke verzoeken.
        </p>
        <p>
          Een patiënt kan daarnaast op elk moment zelf het eigen account en de bijbehorende gegevens
          permanent verwijderen via de instellingen van de app, zoals beschreven op onze{" "}
          <a href="/verwijder-account">pagina over accountverwijdering</a>.
        </p>
        <p>
          Voor vragen over hoe REVA App als verwerker met gegevens omgaat, kun je een e-mail sturen
          naar <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

        <h2>9. Cookies en vergelijkbare technologieën</h2>
        <p>
          Binnen de REVA App (dashboard.reva-app.nl) gebruiken wij een beperkt aantal cookies die
          strikt noodzakelijk zijn voor de werking van de applicatie:
        </p>
        <ul>
          <li>
            <strong>Sessiecookies:</strong> om gebruikers ingelogd te houden tijdens het gebruik
            van de app. Deze cookies worden verwijderd zodra je uitlogt of je browser sluit.
          </li>
          <li>
            <strong>Veiligheids-tokens:</strong> om CSRF-aanvallen te voorkomen en sessies te
            beveiligen.
          </li>
        </ul>
        <p>
          Op onze marketingwebsite (www.reva-app.nl) plaatsen wij op dit moment geen analytische of
          marketingcookies. Voordat wij dat ooit zouden doen, vragen wij altijd eerst jouw
          expliciete toestemming via de cookiemelding op de website. Wij plaatsen geen cookies voor
          profilering of gerichte advertenties zonder toestemming. Zie ons volledige{" "}
          <a href="/cookiebeleid">cookiebeleid</a> voor alle details en om je voorkeuren op elk
          moment aan te passen.
        </p>

        <h2>10. Gegevens van minderjarigen</h2>
        <p>
          Sommige patiënten van een praktijk kunnen minderjarig zijn. De praktijk is als
          verwerkingsverantwoordelijke verantwoordelijk voor het verkrijgen van de juiste toestemming
          van een ouder of wettelijk voogd waar dat wettelijk vereist is, voordat een minderjarige
          patiënt toegang krijgt tot REVA.
        </p>

        <h2>11. Internationale doorgifte</h2>
        <p>
          Gegevens worden opgeslagen op servers binnen de Europese Economische Ruimte (EER). Wij
          geven gegevens niet door aan landen buiten de EER, tenzij er passende waarborgen zijn
          getroffen conform de AVG (zoals een adequaatheidsbesluit of standaardcontractbepalingen).
        </p>

        <h2>12. Klachten</h2>
        <p>
          Heb je als praktijk een klacht over hoe wij met gegevens omgaan? Neem dan eerst contact met
          ons op via <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>. Ben je patiënt, neem dan
          in eerste instantie contact op met je praktijk.
        </p>
        <p>
          Kom je er niet uit, dan heeft de betrokkene het recht een klacht in te dienen bij de
          Nederlandse toezichthouder: de{" "}
          <strong>Autoriteit Persoonsgegevens</strong> via{" "}
          <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
            autoriteitpersoonsgegevens.nl
          </a>
          .
        </p>

        <h2>13. Wijzigingen in deze privacyverklaring</h2>
        <p>
          Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen als de dienst of de
          wetgeving verandert. De datum bovenaan deze pagina geeft aan wanneer de verklaring voor
          het laatst is bijgewerkt.
        </p>
        <p>
          Bij wezenlijke wijzigingen die van invloed zijn op hoe wij gezondheidsgegevens verwerken,
          informeren wij aangesloten praktijken actief via e-mail.
        </p>
        <p>
          De meest actuele versie van deze privacyverklaring is altijd beschikbaar op{" "}
          <a href="/privacy-policy">reva-app.nl/privacy-policy</a>.
        </p>

      </LegalLayout>
      </SiteLayout>
    </>
  );
}
