import { HomePage } from "@/components/HomePage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import type { Metadata } from "next";
import { JsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import { pageDates } from "@/lib/page-dates";

const URL = "https://www.reva-app.nl";
const TITLE = "Software voor fysiopraktijken en patiëntenportaal | REVA App";
const DESCRIPTION =
  "Software voor fysiopraktijken naast je EPD: patiënten loggen pijn en oefeningen, jij ziet wie aandacht nodig heeft. €29 per behandelaar per maand incl. btw.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "software voor fysiopraktijken",
    "fysiotherapie software",
    "software fysiotherapiepraktijk",
    "patiëntenportaal fysiotherapie",
    "software voor fysiotherapeuten",
    "recovery management platform",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "REVA App",
    locale: "nl_NL",
    type: "website",
    url: URL,
  },
  alternates: { canonical: URL },
};

const webPage = {
  ...webPageJsonLd({ url: `${URL}/`, name: TITLE, description: DESCRIPTION }),
  dateModified: pageDates["/"],
  mainEntity: { "@id": `${URL}/#app` },
  primaryImageOfPage: `${URL}/headline-reva-app.webp`,
  keywords: "software voor fysiopraktijken, fysiotherapie software, patiëntenportaal fysiotherapie, recovery management platform",
};
import { homeFaq } from "@/lib/home-faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.reva-app.nl/#faq",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={faqJsonLd} />
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    </>
  );
}
