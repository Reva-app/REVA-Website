import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reva-app.nl"),
  title: {
    default: "REVA — Grip op je herstel",
    template: "%s | REVA App",
  },
  description:
    "REVA is jouw persoonlijk herstel dashboard voor revalidatie na knieblessure, knieoperatie of langdurig hersteltraject. Houd overzicht over afspraken, check-ins, medicatie, oefeningen en voortgang — op één plek.",
  keywords: [
    "herstel dashboard",
    "revalidatie app",
    "knieblessure app",
    "knieoperatie herstel",
    "revalidatie bijhouden",
    "hersteltraject app",
    "medicatie bijhouden",
    "afspraken fysiotherapeut",
    "herstel na operatie",
    "revalidatie overzicht",
    "pijnscore bijhouden",
    "dagelijkse check-in herstel",
    "REVA app",
  ],
  authors: [{ name: "REVA App" }],
  creator: "REVA App",
  publisher: "REVA App",
  openGraph: {
    title: "REVA — Grip op je herstel",
    description:
      "Jouw persoonlijk herstel dashboard. Houd grip op je revalidatie met dagelijkse check-ins, afspraken, medicatie en voortgangsanalyse. 4 dagen gratis proberen.",
    siteName: "REVA App",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVA — Grip op je herstel",
    description:
      "Jouw persoonlijk herstel dashboard voor revalidatie na blessure of operatie. 4 dagen gratis proberen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.reva-app.nl",
  },
  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.reva-app.nl/#organization",
      name: "REVA App",
      url: "https://www.reva-app.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.reva-app.nl/logo.png",
      },
      description:
        "REVA is een persoonlijk herstel dashboard voor mensen met een knieblessure, na een operatie of in een langdurig revalidatietraject.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.reva-app.nl/#website",
      url: "https://www.reva-app.nl",
      name: "REVA App",
      description: "Grip op je herstel — jouw persoonlijk revalidatie dashboard",
      publisher: {
        "@id": "https://www.reva-app.nl/#organization",
      },
      inLanguage: "nl-NL",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.reva-app.nl/#app",
      name: "REVA App",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web, iOS, Android",
      url: "https://www.reva-app.nl",
      description:
        "Persoonlijk herstel dashboard voor revalidatie na knieblessure of operatie. Houd check-ins, afspraken, medicatie en voortgang bij op één plek.",
      offers: {
        "@type": "Offer",
        price: "6.99",
        priceCurrency: "EUR",
        priceValidUntil: "2027-01-01",
        availability: "https://schema.org/InStock",
        description: "REVA Premium — 4 dagen gratis proberen, daarna €6,99 per maand",
      },
      inLanguage: "nl-NL",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.reva-app.nl/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is REVA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "REVA is een persoonlijk herstel dashboard voor mensen die herstellen van een knieblessure, operatie of langdurig revalidatietraject. Je houdt er dagelijkse check-ins, afspraken, medicatie, oefeningen en voortgang bij op één plek.",
          },
        },
        {
          "@type": "Question",
          name: "Voor wie is REVA bedoeld?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "REVA is bedoeld voor mensen met een knieblessure, na een knieoperatie of in een langdurig hersteltraject. Ook voor sporters die terug willen keren naar hun sport na een blessure.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel kost REVA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "REVA Premium kost €6,99 per maand. Je kunt 4 dagen volledig gratis proberen, zonder creditcard.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik REVA gratis proberen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, je kunt REVA Premium 4 dagen volledig gratis proberen. Geen creditcard nodig. Daarna betaal je €6,99 per maand.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
