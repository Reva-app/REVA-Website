import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reva-app.nl"),
  title: {
    default: "REVA | Patiëntenportaal voor fysiotherapiepraktijken",
    template: "%s | REVA App",
  },
  description:
    "REVA is het patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden zelf hun herstel bij: pijn, energie, oefeningen en voortgang. Jij ziet dat in één overzicht, met signalering van wie aandacht nodig heeft. Minder telefoontjes, meer overzicht over je hele praktijk.",
  keywords: [
    "patiëntenportaal fysiotherapie",
    "software fysiotherapiepraktijk",
    "praktijksoftware fysiotherapie",
    "patiëntcommunicatie fysio",
    "digitaal patiëntdossier",
    "therapietrouw verhogen",
    "patiëntenportaal software",
    "praktijkmanagement fysiotherapie",
    "AVG patiëntdata fysiotherapie",
    "patiëntoverzicht fysiopraktijk",
    "check-ins patiënten software",
    "fysiotherapiepraktijk digitaliseren",
    "REVA app",
  ],
  authors: [{ name: "REVA App" }],
  creator: "REVA App",
  publisher: "REVA App",
  openGraph: {
    title: "REVA | Patiëntenportaal voor fysiotherapiepraktijken",
    description:
      "Overzicht over je patiënten, zonder extra telefoontjes. REVA is het patiëntenportaal waarmee fysiotherapiepraktijken patiënten begeleiden na een blessure of operatie.",
    siteName: "REVA App",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVA | Patiëntenportaal voor fysiotherapiepraktijken",
    description:
      "Overzicht over je patiënten, zonder extra telefoontjes. Het patiëntenportaal voor fysiotherapiepraktijken.",
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
  category: "business",
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
        "REVA is een patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden zelf hun herstel bij, praktijken krijgen overzicht en signalering van wie aandacht nodig heeft.",
      founder: {
        "@type": "Person",
        "@id": "https://www.reva-app.nl/#person-stef-robberts",
        name: "Stef Robberts",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.reva-app.nl/#website",
      url: "https://www.reva-app.nl",
      name: "REVA App",
      description: "Patiëntenportaal voor fysiotherapiepraktijken: overzicht over je patiënten, zonder extra telefoontjes.",
      publisher: {
        "@id": "https://www.reva-app.nl/#organization",
      },
      inLanguage: "nl-NL",
    },
    {
      "@type": ["SoftwareApplication", "WebApplication", "MobileApplication"],
      "@id": "https://www.reva-app.nl/#app",
      name: "REVA App",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: "https://www.reva-app.nl",
      description:
        "Patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden hun herstel bij (check-ins, afspraken, oefeningen, medicatie en voortgang), praktijken krijgen overzicht en signalering van wie aandacht nodig heeft.",
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
      <body className="min-h-full flex flex-col">
        <CookieConsentProvider>
          {children}
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
