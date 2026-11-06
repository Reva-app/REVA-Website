"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookie-consent";

const GTM_ID = "GTM-MP34DGQB";

export function GoogleTagManager() {
  const { consent } = useCookieConsent();

  // Consent Mode (zie layout) zorgt dat Google-tags zich per categorie aan de keuze houden;
  // Tag Manager zelf laadt pas als er voor minstens één categorie toestemming is.
  if (!consent.analytics && !consent.marketing) return null;

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
