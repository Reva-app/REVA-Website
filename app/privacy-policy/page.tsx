import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — REVA App",
  description:
    "Lees hoe REVA omgaat met jouw persoonsgegevens en gezondheidsdata. Wij verwerken jouw data uitsluitend voor jouw herstel en verkopen deze nooit aan derden.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <LegalLayout title="Privacy Policy" lastUpdated="16 april 2026">

        <p>
          REVA App hecht grote waarde aan jouw privacy. Jouw gezondheidsgegevens zijn bijzonder
          persoonlijk en gevoelig. In deze privacyverklaring leggen wij helder en transparant uit
          welke gegevens wij verwerken, waarom wij dat doen en welke rechten jij hebt als gebruiker.
        </p>

        <h2>1. Wie zijn wij?</h2>
        <p>
          REVA App is een product ontwikkeld en beheerd in Nederland. REVA biedt een persoonlijk
          herstel dashboard waarmee gebruikers hun revalidatietraject kunnen bijhouden na een
          blessure, operatie of langdurig herstelproces.
        </p>
        <p>
          Voor vragen over deze privacyverklaring of over de verwerking van jouw gegevens kun je
          contact opnemen via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

        <h2>2. Welke gegevens verwerken wij?</h2>
        <p>
          REVA verwerkt gegevens die jij zelf actief invoert, aangevuld met technische gebruiksgegevens.
          Wij verwerken uitsluitend wat noodzakelijk is voor de dienstverlening.
        </p>

        <p><strong>2.1 Accountgegevens</strong></p>
        <ul>
          <li>Naam (voornaam en/of achternaam)</li>
          <li>E-mailadres</li>
          <li>Wachtwoord (versleuteld opgeslagen, nooit leesbaar voor ons)</li>
          <li>Datum van registratie</li>
        </ul>

        <p><strong>2.2 Gezondheidsgegevens (bijzondere persoonsgegevens)</strong></p>
        <p>
          De onderstaande gegevens zijn gezondheidsgegevens in de zin van artikel 9 van de
          Algemene Verordening Gegevensbescherming (AVG). Wij verwerken deze gegevens uitsluitend
          op basis van jouw expliciete toestemming, die je geeft bij het aanmaken van een account
          en bevestigt bij het invoeren van deze gegevens.
        </p>
        <ul>
          <li>
            <strong>Dagelijkse check-ins:</strong> pijnscore (schaal 1–5), energieniveau,
            stemming en eventuele notities per dag.
          </li>
          <li>
            <strong>Afspraken:</strong> datum, tijd, type afspraak (fysiotherapeut, orthopeed,
            specialist, huisarts, etc.), locatie en persoonlijke notities.
          </li>
          <li>
            <strong>Trainingen en oefeningen:</strong> type oefening, aantal herhalingen of
            duur, afvinkstatus en activiteitsoverzichten per week.
          </li>
          <li>
            <strong>Medicatiegegevens:</strong> naam van het medicijn, dosering, innamemomenten,
            registratie van innames en eventuele bijwerkingen of opmerkingen.
          </li>
          <li>
            <strong>Persoonlijk dossier:</strong> documenten die je zelf uploadt, zoals
            diagnoseverslagen, röntgenfoto's, brieven van specialisten, operatieverslagen
            of andere medische documenten.
          </li>
          <li>
            <strong>Zorgverzekering en contactgegevens:</strong> naam van de zorgverzekeraar,
            polisnummer, contactgegevens van het ziekenhuis, specialist, huisarts of andere
            zorgverleners die jij zelf invoert.
          </li>
          <li>
            <strong>Doelen en mijlpalen:</strong> persoonlijke hersteldoelen die jij formuleert
            en mijlpalen die jij markeert als behaald.
          </li>
          <li>
            <strong>Herstelcontext:</strong> type blessure of aandoening, operatiedatum,
            herstelstadium en andere informatie die jij toevoegt om je dashboard in te richten.
          </li>
        </ul>

        <p><strong>2.3 Technische gebruiksgegevens</strong></p>
        <ul>
          <li>IP-adres (anoniem verwerkt voor beveiligingsdoeleinden)</li>
          <li>Browsertype en besturingssysteem</li>
          <li>Tijdstip en datum van inlogmomenten</li>
          <li>Paginabezoeken binnen de applicatie (voor het verbeteren van de gebruikerservaring)</li>
        </ul>

        <p><strong>2.4 Betalingsgegevens</strong></p>
        <p>
          Betaalgegevens (zoals creditcardnummer of IBAN) worden nooit direct door REVA verwerkt of
          opgeslagen. Betalingen verlopen via een gecertificeerde betalingsdienstverlener. Wij
          ontvangen uitsluitend een bevestiging van de transactie (betaald/niet betaald) en het
          abonnementstype.
        </p>

        <h2>3. Waarom verwerken wij jouw gegevens?</h2>
        <p>Wij verwerken jouw gegevens uitsluitend voor de volgende doeleinden:</p>
        <ul>
          <li>
            <strong>Het leveren van de REVA dienst:</strong> om jouw persoonlijk dashboard te
            tonen, check-ins op te slaan, afspraken te beheren en inzichten over je herstel
            te genereren.
          </li>
          <li>
            <strong>Accountbeheer:</strong> om jouw account en abonnement te beheren, inclusief
            aanmelden, inloggen en het bijhouden van je abonnementsstatus.
          </li>
          <li>
            <strong>Servicemeldingen:</strong> om je te informeren over wijzigingen in de app,
            nieuwe functies of technische mededelingen. Wij sturen geen commerciële e-mails
            zonder jouw toestemming.
          </li>
          <li>
            <strong>Verbetering van de dienst:</strong> geanonimiseerde gebruiksgegevens helpen
            ons begrijpen welke functies goed werken en wat beter kan. Individuele
            gezondheidsgegevens worden hiervoor nooit gebruikt.
          </li>
          <li>
            <strong>Beveiliging:</strong> om misbruik te detecteren en jouw account en data te
            beschermen.
          </li>
          <li>
            <strong>Wettelijke verplichtingen:</strong> om te voldoen aan van toepassing zijnde
            wet- en regelgeving.
          </li>
        </ul>

        <h2>4. Rechtsgrond voor verwerking</h2>
        <p>
          De verwerking van jouw persoonsgegevens is gebaseerd op de volgende rechtsgrondslagen
          zoals bedoeld in de AVG:
        </p>
        <ul>
          <li>
            <strong>Uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG):</strong> voor de
            verwerking van accountgegevens en technische gegevens die noodzakelijk zijn om de
            dienst te leveren.
          </li>
          <li>
            <strong>Expliciete toestemming (art. 6 lid 1 sub a en art. 9 lid 2 sub a AVG):</strong>{" "}
            voor de verwerking van gezondheidsgegevens. Gezondheidsgegevens zijn bijzondere
            persoonsgegevens waarvoor wij jouw uitdrukkelijke toestemming nodig hebben. Je geeft
            deze toestemming bij registratie en bevestigt deze elke keer dat je gezondheidsdata
            invoert. Je kunt deze toestemming te allen tijde intrekken door je account te
            verwijderen.
          </li>
          <li>
            <strong>Gerechtvaardigde belangen (art. 6 lid 1 sub f AVG):</strong> voor
            beveiligingsdoeleinden en het geanonimiseerd verbeteren van de dienst, voor zover
            jouw belangen niet zwaarder wegen.
          </li>
        </ul>

        <h2>5. Hoe lang bewaren wij jouw gegevens?</h2>
        <p>
          Wij bewaren jouw gegevens zo lang als noodzakelijk voor de doeleinden waarvoor zij zijn
          verzameld:
        </p>
        <ul>
          <li>
            <strong>Actieve accounts:</strong> alle gegevens worden bewaard zolang je een actief
            account hebt bij REVA.
          </li>
          <li>
            <strong>Na accountverwijdering:</strong> jouw gegevens worden binnen <strong>30 dagen</strong>{" "}
            na het verwijderen van je account permanent en onherstelbaar gewist, inclusief alle
            gezondheidsgegevens, documenten en check-ins.
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

        <h2>6. Delen wij jouw gegevens met derden?</h2>
        <p>
          Wij verkopen jouw gegevens nooit aan derden. Jouw gezondheidsgegevens worden nooit
          gedeeld met externe partijen zonder jouw expliciete toestemming.
        </p>
        <p>
          Wij maken gebruik van een beperkt aantal zorgvuldig geselecteerde subverwerkers die
          in opdracht van ons technische diensten verlenen:
        </p>
        <ul>
          <li>
            <strong>Hostingprovider:</strong> voor het opslaan van jouw data op beveiligde servers.
            Met deze partij is een verwerkersovereenkomst gesloten conform de AVG.
          </li>
          <li>
            <strong>Betalingsdienstverlener:</strong> voor de verwerking van betalingen. Deze
            partij heeft geen toegang tot jouw gezondheidsgegevens.
          </li>
          <li>
            <strong>E-maildienst:</strong> uitsluitend voor het versturen van transactionele
            e-mails (zoals wachtwoordherstel en abonnementsbevestigingen).
          </li>
        </ul>
        <p>
          Met alle subverwerkers zijn verwerkersovereenkomsten gesloten die voldoen aan de
          vereisten van de AVG. Subverwerkers hebben uitsluitend toegang tot de gegevens die
          strikt noodzakelijk zijn voor hun specifieke dienst.
        </p>
        <p>
          Wij verstrekken gegevens aan overheidsinstanties of toezichthouders uitsluitend indien
          wij hiertoe wettelijk verplicht zijn.
        </p>

        <h2>7. Beveiliging van jouw gegevens</h2>
        <p>
          Wij nemen de beveiliging van jouw (gezondheids)gegevens zeer serieus en passen passende
          technische en organisatorische maatregelen toe:
        </p>
        <ul>
          <li>Alle gegevens worden versleuteld opgeslagen (encryptie in rust).</li>
          <li>Alle datatransport verloopt via beveiligde HTTPS-verbindingen (TLS).</li>
          <li>Toegang tot productiedatabases is strikt beperkt en wordt gelogd.</li>
          <li>Wachtwoorden worden nooit in leesbare vorm opgeslagen (bcrypt hashing).</li>
          <li>Geüploade documenten in het persoonlijk dossier worden versleuteld bewaard.</li>
          <li>Regelmatige beveiligingsevaluaties en updates van onze systemen.</li>
        </ul>
        <p>
          Bij een datalek dat risico oplevert voor jouw rechten en vrijheden, informeren wij jou
          en de Autoriteit Persoonsgegevens conform de wettelijke verplichting binnen 72 uur.
        </p>

        <h2>8. Jouw rechten onder de AVG</h2>
        <p>
          Als betrokkene heb je op grond van de Algemene Verordening Gegevensbescherming de
          volgende rechten:
        </p>
        <ul>
          <li>
            <strong>Recht op inzage (art. 15 AVG):</strong> je hebt het recht om een overzicht
            op te vragen van alle persoonsgegevens die wij van jou verwerken.
          </li>
          <li>
            <strong>Recht op rectificatie (art. 16 AVG):</strong> je kunt onjuiste of
            onvolledige gegevens laten corrigeren. Veel gegevens kun je ook zelf aanpassen
            in de app.
          </li>
          <li>
            <strong>Recht op verwijdering (art. 17 AVG):</strong> je kunt verzoeken al jouw
            gegevens te verwijderen. Dit kan ook direct in de app via accountverwijdering.
          </li>
          <li>
            <strong>Recht op beperking van verwerking (art. 18 AVG):</strong> je kunt de
            verwerking van jouw gegevens tijdelijk laten beperken terwijl een klacht of
            verzoek wordt behandeld.
          </li>
          <li>
            <strong>Recht op overdraagbaarheid (art. 20 AVG):</strong> je kunt jouw gegevens
            opvragen in een gestructureerd, veelgebruikt en machineleesbaar formaat.
          </li>
          <li>
            <strong>Recht van bezwaar (art. 21 AVG):</strong> je kunt bezwaar maken tegen de
            verwerking van jouw gegevens op basis van gerechtvaardigde belangen.
          </li>
          <li>
            <strong>Recht op intrekking van toestemming:</strong> je kunt je toestemming voor
            de verwerking van gezondheidsgegevens te allen tijde intrekken. Dit doet geen
            afbreuk aan de rechtmatigheid van de verwerking vóór intrekking.
          </li>
        </ul>
        <p>
          Om gebruik te maken van een van bovenstaande rechten, stuur een e-mail naar{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a> met een duidelijke omschrijving
          van je verzoek. Wij reageren binnen <strong>30 dagen</strong>. Wij kunnen om
          verificatie van jouw identiteit vragen voordat wij een verzoek verwerken.
        </p>

        <h2>9. Cookies en vergelijkbare technologieën</h2>
        <p>
          REVA maakt gebruik van een beperkt aantal cookies die strikt noodzakelijk zijn voor de
          werking van de applicatie:
        </p>
        <ul>
          <li>
            <strong>Sessiecookies:</strong> om jou ingelogd te houden tijdens het gebruik van
            de app. Deze cookies worden verwijderd zodra je uitlogt of je browser sluit.
          </li>
          <li>
            <strong>Veiligheids-tokens:</strong> om CSRF-aanvallen te voorkomen en jouw sessie
            te beveiligen.
          </li>
        </ul>
        <p>
          Wij gebruiken geen tracking cookies, advertentiecookies of analytische cookies van
          derden zonder jouw toestemming. Wij plaatsen geen cookies voor profilering of
          gerichte advertenties.
        </p>

        <h2>10. Gegevens van minderjarigen</h2>
        <p>
          REVA is niet gericht op personen jonger dan 16 jaar. Wij verwerken bewust geen
          gegevens van minderjarigen zonder toestemming van een ouder of wettelijk voogd.
          Als je vermoedt dat wij gegevens van een minderjarige verwerken zonder geldige
          toestemming, neem dan contact op via{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

        <h2>11. Internationale doorgifte</h2>
        <p>
          Jouw gegevens worden opgeslagen op servers binnen de Europese Economische Ruimte (EER).
          Wij geven jouw gegevens niet door aan landen buiten de EER, tenzij er passende
          waarborgen zijn getroffen conform de AVG (zoals een adequaatheidsbesluit of
          standaardcontractbepalingen).
        </p>

        <h2>12. Klachten</h2>
        <p>
          Heb je een klacht over hoe wij met jouw gegevens omgaan? Neem dan eerst contact met
          ons op via <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>. Wij nemen iedere
          klacht serieus en streven ernaar dit binnen 30 dagen op te lossen.
        </p>
        <p>
          Kom je er met ons niet uit, dan heb je het recht een klacht in te dienen bij de
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
          Bij wezenlijke wijzigingen die van invloed zijn op hoe wij jouw gezondheidsgegevens
          verwerken, informeren wij jou actief via e-mail of een melding in de app, en vragen wij
          opnieuw jouw toestemming waar dat wettelijk vereist is.
        </p>
        <p>
          De meest actuele versie van deze privacyverklaring is altijd beschikbaar op{" "}
          <a href="/privacy-policy">reva-app.nl/privacy-policy</a>.
        </p>

      </LegalLayout>
    </SiteLayout>
  );
}
