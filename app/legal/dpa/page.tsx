import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Verwerkersovereenkomst",
  description:
    "De verwerkersovereenkomst (DPA) tussen REVA en fysiotherapiepraktijken die REVA gebruiken, conform de AVG. Wordt geaccepteerd bij het afsluiten van een abonnement.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.reva-app.nl/legal/dpa",
  },
};

export default function DpaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Verwerkersovereenkomst", url: "https://www.reva-app.nl/legal/dpa" },
        ])}
      />
      <SiteLayout>
      <LegalLayout title="Verwerkersovereenkomst" lastUpdated="1 augustus 2026">

        <p>
          <strong>Opmerking vooraf:</strong> dit is een modelverwerkersovereenkomst die de standaard
          afspraken tussen REVA en een fysiotherapiepraktijk beschrijft conform de AVG. Deze tekst is
          nog niet juridisch getoetst en dient voor gebruik als bindend contract te worden
          gecontroleerd en waar nodig aangepast door een jurist. Een praktijk accepteert deze
          verwerkersovereenkomst bij het afsluiten van een abonnement op REVA.
        </p>

        <h2>1. Partijen</h2>
        <p>
          Deze verwerkersovereenkomst wordt gesloten tussen de fysiotherapiepraktijk die een
          abonnement op REVA afsluit (hierna: de <strong>verwerkingsverantwoordelijke</strong>) en
          REVA B.V. (hierna: de <strong>verwerker</strong>), en vormt een onlosmakelijk onderdeel van
          de algemene voorwaarden en de overeenkomst tussen partijen.
        </p>

        <h2>2. Onderwerp en duur</h2>
        <p>
          Deze overeenkomst regelt de verwerking van persoonsgegevens die de verwerker namens de
          verwerkingsverantwoordelijke uitvoert bij het leveren van de REVA-dienst. De overeenkomst
          geldt voor de duur van de hoofdovereenkomst (het abonnement op REVA) en eindigt automatisch
          op het moment dat die hoofdovereenkomst eindigt, onverminderd de bepalingen die naar hun
          aard ook na beëindiging van kracht blijven, zoals geheimhouding en de verplichtingen
          rondom teruggave en vernietiging van gegevens.
        </p>

        <h2>3. Aard en doel van de verwerking</h2>
        <p>
          De verwerker verwerkt persoonsgegevens uitsluitend ten behoeve van het leveren van het
          REVA-patiëntenportaal: het faciliteren van check-ins, afspraken, herstelplannen,
          medicatie- en pijnregistratie, het digitale patiëntdossier, voortgangsanalyse en
          behandeldoelen, zoals beschreven op <a href="/functies">reva-app.nl/functies</a> en in de{" "}
          <a href="/privacy-policy">privacyverklaring</a>. De verwerker verwerkt geen gegevens voor
          eigen doeleinden en gebruikt gegevens nooit voor profilering, marketing of verkoop aan
          derden.
        </p>

        <h2>4. Categorieën van betrokkenen en persoonsgegevens</h2>
        <p>Deze overeenkomst ziet op de verwerking van persoonsgegevens van de volgende betrokkenen:</p>
        <ul>
          <li>Patiënten die door de verwerkingsverantwoordelijke worden uitgenodigd voor REVA;</li>
          <li>Medewerkers van de verwerkingsverantwoordelijke met een REVA-account.</li>
        </ul>
        <p>Het gaat daarbij onder meer om de volgende categorieën gegevens:</p>
        <ul>
          <li>Contactgegevens (naam, e-mailadres);</li>
          <li>
            Gezondheidsgegevens in de zin van artikel 9 AVG: pijnscores, energieniveau, stemming,
            oefenvoortgang, medicatiegebruik, dossierdocumenten, behandeldoelen en herstelcontext;
          </li>
          <li>Afspraakgegevens en behandelnotities;</li>
          <li>Zorgverzekerings- en contactgegevens van zorgverleners;</li>
          <li>Technische gebruiksgegevens (IP-adres, inlogmomenten, apparaatinformatie).</li>
        </ul>
        <p>
          Een volledig overzicht van de verwerkte gegevens staat in hoofdstuk 2 van de{" "}
          <a href="/privacy-policy">privacyverklaring</a>.
        </p>

        <h2>5. Verplichtingen van de verwerker</h2>
        <p>De verwerker:</p>
        <ul>
          <li>
            verwerkt persoonsgegevens uitsluitend op basis van gedocumenteerde instructies van de
            verwerkingsverantwoordelijke, tenzij een wettelijke verplichting anders vereist;
          </li>
          <li>
            zorgt ervoor dat personen die geautoriseerd zijn om persoonsgegevens te verwerken zich
            hebben verbonden tot geheimhouding;
          </li>
          <li>
            treft passende technische en organisatorische beveiligingsmaatregelen conform artikel 32
            AVG, waaronder versleuteling van gegevens in rust en tijdens transport, toegangscontrole
            op productiesystemen en regelmatige beveiligingsevaluaties;
          </li>
          <li>
            schakelt geen andere verwerker (subverwerker) in zonder voorafgaande toestemming van de
            verwerkingsverantwoordelijke, met dien verstande dat toestemming voor de subverwerkers
            genoemd in artikel 6 hierbij algemeen wordt verleend;
          </li>
          <li>
            verleent, rekening houdend met de aard van de verwerking, bijstand aan de
            verwerkingsverantwoordelijke bij het beantwoorden van verzoeken van betrokkenen tot
            uitoefening van hun rechten onder de AVG;
          </li>
          <li>
            meldt een datalek zonder onnodige vertraging, en in ieder geval binnen 48 uur nadat de
            verwerker daarvan kennis heeft genomen, aan de verwerkingsverantwoordelijke, zodat deze
            aan haar eigen wettelijke meldplichten kan voldoen;
          </li>
          <li>
            verleent, na voorafgaande schriftelijke aankondiging met een redelijke termijn, medewerking
            aan audits die redelijkerwijs noodzakelijk zijn om de naleving van deze overeenkomst te
            controleren;
          </li>
          <li>
            wist of retourneert, naar keuze van de verwerkingsverantwoordelijke, alle
            persoonsgegevens na afloop van de dienstverlening, tenzij verdere opslag wettelijk
            verplicht is, conform de termijnen in hoofdstuk 5 van de{" "}
            <a href="/privacy-policy">privacyverklaring</a>.
          </li>
        </ul>

        <h2>6. Subverwerkers</h2>
        <p>
          De verwerker maakt gebruik van een beperkt aantal subverwerkers voor het leveren van de
          dienst: een hostingprovider voor de opslag van gegevens, een betalingsdienstverlener voor
          het verwerken van betalingen (zonder toegang tot patiëntgegevens), en een e-maildienst voor
          transactionele e-mails. Met elke subverwerker is een verwerkersovereenkomst gesloten die
          ten minste dezelfde verplichtingen oplegt als deze overeenkomst. De verwerker informeert de
          verwerkingsverantwoordelijke over voorgenomen wijzigingen in subverwerkers, zodat bezwaar
          kan worden gemaakt voordat de wijziging ingaat.
        </p>

        <h2>7. Doorgifte buiten de EER</h2>
        <p>
          Persoonsgegevens worden opgeslagen op servers binnen de Europese Economische Ruimte (EER).
          Doorgifte van persoonsgegevens naar landen buiten de EER vindt niet plaats, tenzij passende
          waarborgen zijn getroffen conform hoofdstuk V van de AVG.
        </p>

        <h2>8. Aansprakelijkheid</h2>
        <p>
          De aansprakelijkheid van partijen onder deze verwerkersovereenkomst is onderworpen aan de
          aansprakelijkheidsbepaling in de algemene voorwaarden van REVA. Iedere partij is
          verantwoordelijk voor het naleven van de op haar rustende verplichtingen onder de AVG in
          haar respectievelijke rol als verwerkingsverantwoordelijke of verwerker.
        </p>

        <h2>9. Duur en beëindiging</h2>
        <p>
          Deze verwerkersovereenkomst treedt in werking op het moment van acceptatie bij het
          afsluiten van het abonnement, en eindigt van rechtswege bij beëindiging van de
          hoofdovereenkomst. Verplichtingen die naar hun aard bestemd zijn om ook na beëindiging voort
          te duren, zoals geheimhouding en de teruggave of vernietiging van gegevens, blijven
          onverminderd van kracht.
        </p>

        <h2>10. Toepasselijk recht</h2>
        <p>
          Op deze verwerkersovereenkomst is Nederlands recht van toepassing. Geschillen worden
          voorgelegd aan de bevoegde rechter in Nederland, tenzij partijen anders overeenkomen.
        </p>

        <h2>11. Contact</h2>
        <p>
          Vragen over deze verwerkersovereenkomst kunnen worden gestuurd naar{" "}
          <a href="mailto:info@reva-app.nl">info@reva-app.nl</a>.
        </p>

      </LegalLayout>
      </SiteLayout>
    </>
  );
}
