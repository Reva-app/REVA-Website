import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REVA — Grip op je herstel",
  description:
    "REVA is jouw persoonlijk herstel dashboard. Houd overzicht over afspraken, check-ins, oefeningen, medicatie en voortgang — op één plek.",
  openGraph: {
    title: "REVA — Grip op je herstel",
    description:
      "Jouw persoonlijk herstel dashboard. Houd grip op je revalidatie met dagelijkse check-ins, afspraken en voortgangsanalyse.",
    siteName: "REVA App",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
