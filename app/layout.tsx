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
    default: "REVA | Grip op je herstel",
    template: "%s | REVA App",
  },
  description:
    "REVA is jouw persoonlijk herstel dashboard voor iedereen die grip wil op zijn of haar herstel: na een knieblessure, enkelblessure, schouderblessure, heupoperatie, rugklachten, sportblessure of een ander langdurig hersteltraject. Houd afspraken, dagelijkse check-ins, medicatie, oefeningen en voortgang overzichtelijk bij op één plek, zodat jij en je zorgverleners precies zien hoe je herstel verloopt.",
  keywords: [
    "herstel dashboard",
    "revalidatie app",
    "blessure herstellen app",
    "sportblessure herstel",
    "herstel na operatie",
    "knieblessure app",
    "knieoperatie herstel",
    "enkelblessure herstel",
    "schouderblessure herstel",
    "heupoperatie herstel",
    "rugblessure herstel",
    "revalidatie bijhouden",
    "hersteltraject app",
    "fysiotherapie app",
    "medicatie bijhouden",
    "afspraken fysiotherapeut",
    "revalidatie overzicht",
    "pijnscore bijhouden",
    "dagelijkse check-in herstel",
    "grip op je herstel",
    "REVA app",
  ],
  authors: [{ name: "REVA App" }],
  creator: "REVA App",
  publisher: "REVA App",
  openGraph: {
    title: "REVA | Grip op je herstel",
    description:
      "Jouw persoonlijk herstel dashboard voor elke blessure, operatie of langdurig hersteltraject. Houd grip op je herstel met dagelijkse check-ins, afspraken, medicatie en voortgangsanalyse. Nu volledig gratis te gebruiken.",
    siteName: "REVA App",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVA | Grip op je herstel",
    description:
      "Jouw persoonlijk herstel dashboard voor iedereen die herstelt van een blessure of operatie. Nu volledig gratis te gebruiken.",
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
        "REVA is een persoonlijk herstel dashboard voor mensen met een knieblessure, enkelblessure, schouderblessure, heupoperatie, rugklachten, sportblessure of een ander langdurig revalidatietraject.",
      founder: {
        "@type": "Person",
        name: "Stef Robberts",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.reva-app.nl/#website",
      url: "https://www.reva-app.nl",
      name: "REVA App",
      description: "Grip op je herstel: jouw persoonlijk revalidatie dashboard voor elke blessure of operatie",
      publisher: {
        "@id": "https://www.reva-app.nl/#organization",
      },
      inLanguage: "nl-NL",
    },
    {
      "@type": ["SoftwareApplication", "WebApplication", "MobileApplication"],
      "@id": "https://www.reva-app.nl/#app",
      name: "REVA App",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web, iOS, Android",
      url: "https://www.reva-app.nl",
      description:
        "Persoonlijk herstel dashboard voor revalidatie na een blessure of operatie, van knie tot schouder, enkel of heup. Houd check-ins, afspraken, medicatie en voortgang bij op één plek.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        description: "REVA is momenteel in ontwikkeling en volledig gratis te gebruiken.",
      },
      inLanguage: "nl-NL",
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
