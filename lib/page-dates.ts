// Datum van de laatste inhoudelijke wijziging per pagina, voor de sitemap (lastmod).
// Pas de datum aan als de inhoud van een pagina echt verandert; Google negeert lastmod
// als die bij elke deploy verspringt zonder dat de inhoud wijzigt.

import { provinces } from "@/lib/provinces";

/** Laatste inhoudelijke wijziging van de provinciepagina's */
const PROVINCES_UPDATED = "2026-11-13";

export const pageDates: Record<string, string> = {
  "/besparing-berekenen": "2026-11-13",
  "/": "2026-11-13",
  "/functies": "2026-11-13",
  "/fysiotherapie-software": "2026-11-13",
  "/alternatief-voor-whatsapp": "2026-11-13",
  "/oefenprogramma-app": "2026-11-13",
  "/pilot": "2026-11-13",
  "/functies/voor-fysios": "2026-11-13",
  "/functies/voor-patienten": "2026-11-13",
  "/prijzen": "2026-11-13",
  "/faq": "2026-11-13",
  "/over-reva": "2026-11-13",
  "/documentatie": "2026-11-13",
  "/demo-aanvragen": "2026-11-09",
  "/contact": "2026-08-03",
  "/inloggen": "2026-11-06",
  "/privacy-policy": "2026-11-06",
  "/algemene-voorwaarden": "2026-11-13",
  "/cookiebeleid": "2026-11-06",
  "/legal/dpa": "2026-08-01",
  "/verwijder-account": "2026-11-13",
  "/praktijken": "2026-11-06",
  ...Object.fromEntries(provinces.map((p) => [`/fysiotherapie-software/${p.slug}`, PROVINCES_UPDATED])),
};
