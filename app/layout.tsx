import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e8632a",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reva-app.nl"),
  title: {
    default: "REVA | Patiëntenportaal voor fysiotherapiepraktijken",
    template: "%s | REVA App",
  },
  description:
    "Patiëntenportaal voor fysiotherapiepraktijken. Patiënten loggen pijn, energie en oefeningen zelf, jij ziet direct wie aandacht nodig heeft. Minder bellen.",
  keywords: [
    "patiëntenportaal fysiotherapie",
    "software fysiotherapiepraktijk",
    "praktijksoftware fysiotherapie",
    "praktijkmanagement software fysiotherapie",
    "revalidatiesoftware",
    "herstelplan software",
    "patiëntcommunicatie fysio",
    "digitaal patiëntdossier",
    "therapietrouw verhogen",
    "patiëntenportaal software",
    "praktijkmanagement fysiotherapie",
    "AVG patiëntdata fysiotherapie",
    "patiëntoverzicht fysiopraktijk",
    "check-ins patiënten software",
    "fysiotherapiepraktijk digitaliseren",
    "digitale fysiotherapie",
    "zorgtechnologie fysiotherapie",
    "REVA app",
  ],
  authors: [{ name: "Stef Robberts", url: "https://www.reva-app.nl/over-reva" }, { name: "REVA App" }],
  creator: "REVA App",
  publisher: "REVA App",
  applicationName: "REVA",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  manifest: "/manifest.webmanifest",
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
      legalName: "REVA B.V.",
      url: "https://www.reva-app.nl",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.reva-app.nl/#logo",
        url: "https://www.reva-app.nl/logo.png",
        contentUrl: "https://www.reva-app.nl/logo.png",
        width: "512",
        height: "512",
        caption: "REVA logo",
      },
      image: { "@id": "https://www.reva-app.nl/#logo" },
      description:
        "REVA is een patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden zelf hun herstel bij, praktijken krijgen overzicht en signalering van wie aandacht nodig heeft.",
      slogan: "Grip op je herstel",
      founder: {
        "@type": "Person",
        "@id": "https://www.reva-app.nl/#person-stef-robberts",
        name: "Stef Robberts",
        jobTitle: "Oprichter",
        url: "https://www.reva-app.nl/over-reva",
      },
      knowsAbout: [
        "Fysiotherapie",
        "Revalidatiesoftware",
        "Patiëntenportalen",
        "Praktijkmanagement",
        "Digitale zorg",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@reva-app.nl",
          url: "https://www.reva-app.nl/demo-aanvragen",
          areaServed: "NL",
          availableLanguage: ["Dutch", "nl"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@reva-app.nl",
          url: "https://www.reva-app.nl/contact",
          areaServed: "NL",
          availableLanguage: ["Dutch", "nl"],
        },
      ],
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
      applicationSubCategory: "Healthcare Practice Management Software",
      operatingSystem: "Web, iOS, Android",
      url: "https://www.reva-app.nl",
      description:
        "Patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden hun herstel bij (check-ins, afspraken, oefeningen, medicatie en voortgang), praktijken krijgen overzicht en signalering van wie aandacht nodig heeft.",
      inLanguage: "nl-NL",
      provider: { "@id": "https://www.reva-app.nl/#organization" },
      creator: { "@id": "https://www.reva-app.nl/#organization" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Fysiotherapiepraktijken",
      },
      featureList: [
        "Praktijkoverzicht met signalering",
        "Dagelijkse check-ins van patiënten",
        "Afspraken en behandelplan",
        "Herstelplannen en oefeningen",
        "Pijn- en medicatieregistratie",
        "Digitaal patiëntdossier",
        "Voortgangsanalyse met grafieken",
        "Patiëntgegevens en contacten",
        "Behandeldoelen en mijlpalen",
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "49",
        highPrice: "699",
        offerCount: "4",
        url: "https://www.reva-app.nl/prijzen",
      },
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
          <GoogleTagManager />
          {children}
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
