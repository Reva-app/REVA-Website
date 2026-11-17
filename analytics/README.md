# Analytics: Tag Manager en GA4 instellen

De website stuurt meetgebeurtenissen naar de dataLayer (zie `lib/analytics.ts`).
Tag Manager (GTM-MP34DGQB) stuurt ze door naar GA4 (G-Z41NDQDPDP).
Persoonsgegevens worden nooit meegestuurd.

## 1. Tag Manager: importbestand inladen (5 minuten)

1. Open tagmanager.google.com en kies de container **GTM-MP34DGQB**.
2. Ga naar **Beheer** en dan **Container importeren**.
3. Kies het bestand `analytics/gtm-import-reva-events.json`.
4. Kies de werkruimte **Bestaande** (Default Workspace).
5. Kies de importoptie **Samenvoegen**, met **Conflicterende tags, triggers en variabelen hernoemen**.
6. Klik op **Bevestigen**.

Dit voegt toe:
- de tag **GA4 - REVA website-events** voor `savings_calculated`, `pricing_calculator_use`, `cta_click`, `login_click` en `contact_click`;
- de tag **GA4 - generate_lead (met waarde)**, die behandelaars, facturatie, aanbod, `value` en `currency` meestuurt;
- 2 triggers en 14 dataLayer-variabelen.

Daarna, in **Tags**:
- **Pauzeer** de oude tag voor `generate_lead`, want de nieuwe vervangt hem. Anders telt elke aanvraag dubbel.
- **Pauzeer** de oude tag `demo_cta_click`. Demo-klikken worden nu gemeten als `cta_click` met `cta = demo`.

Test daarna met **Voorbeeld**. Doe op reva-app.nl een berekening in de besparingstool en klik op een demoknop. In Tag Assistant zie je de tags afgaan. Klik daarna op **Indienen** om te publiceren.

## 2. GA4: key events

Ga in GA4 naar **Beheer** en dan **Gebeurtenissen**, en markeer als key event:
- `generate_lead`: de belangrijkste conversie. Die heeft al een waarde in euro.
- `savings_calculated`: optioneel, als microconversie.

Een nieuwe gebeurtenis verschijnt pas in die lijst nadat hij minstens één keer is binnengekomen. Doe dus eerst stap 1 en een test.

## 3. GA4: aangepaste dimensies

Ga naar **Beheer**, **Aangepaste definities** en dan **Aangepaste dimensie maken**. Kies telkens het bereik **Gebeurtenis**:

| Dimensienaam | Gebeurtenisparameter |
| --- | --- |
| Behandelaars | `behandelaars` |
| Facturatie | `facturatie` |
| CTA | `cta` |
| Formulier | `form_name` |
| Contactmethode | `methode` |

Maak ook een aangepaste statistiek met de naam **Uren per week** voor de parameter `uren_per_week`, met de meeteenheid **Standaard**.

## 4. GA4: algemene instellingen

- **Bewaartermijn:** ga naar **Beheer**, **Gegevensverzameling en -aanpassing** en dan **Gegevensbewaring**. Zet de bewaartermijn van gebeurtenisgegevens op **14 maanden**.
- **Intern verkeer:** ga naar **Beheer**, **Gegevensstreams**, de webstream, **Tagsinstellingen configureren** en dan **Intern verkeer definiëren**. Voeg je eigen IP-adres toe. Zet daarna onder **Beheer** en **Gegevensfilters** het filter "Internal Traffic" op **Actief**.
- **Search Console koppelen:** ga naar **Beheer** en dan **Productkoppelingen**, kies **Search Console** en koppel de property van www.reva-app.nl.
- **Google Ads:** de koppeling bestaat al. Importeer in Google Ads `generate_lead` als conversie, via **Doelen**, **Conversies**, **Nieuwe conversieactie** en dan **Importeren uit Google Analytics 4**.

## Gebeurtenissen op een rij

| Gebeurtenis | Wanneer | Belangrijkste parameters |
| --- | --- | --- |
| `generate_lead` | Demo- of pilotaanvraag verstuurd | `form_name`, `behandelaars`, `facturatie`, `aanbod`, `value`, `currency` |
| `contact_form_submit` | Contactformulier verstuurd | `onderwerp` |
| `newsletter_signup` | Aanmelding nieuwsbrief | `form_name` |
| `savings_calculated` | Besparingstool berekend | `behandelaars`, `werkdagen`, `uren_per_week`, `value` |
| `pricing_calculator_use` | Maand/jaar gewisseld in de prijscalculator | `behandelaars`, `facturatie` |
| `cta_click` | Klik naar demo, pilot, prijzen, besparing of herstelplannen | `cta`, `link_url`, `link_text` |
| `login_click` | Klik naar inloggen of het dashboard | `link_url` |
| `contact_click` | Klik op e-mailadres of telefoonnummer | `methode` |
