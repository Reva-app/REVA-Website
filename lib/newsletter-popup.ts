// Regels voor de nieuwsbrief-pop-up: wanneer en waar hij mag verschijnen.

export const NEWSLETTER_STORAGE_KEY = "reva-newsletter";
export const NEWSLETTER_SESSION_KEY = "reva-newsletter-seen";

/** Na wegklikken een maand rust */
export const SNOOZE_DAYS = 30;
/** Tijd op de site voordat de pop-up verschijnt */
export const DELAY_MS = 25_000;
/** Scrolldiepte (fractie van de pagina) die de pop-up eerder laat verschijnen */
export const SCROLL_TRIGGER = 0.5;
/** Minimale tijd op de pagina voordat scrollen of exit-intent meetelt */
export const MIN_TIME_MS = 6_000;

// Pagina's waar iemand al converteert of iets juridisch leest
const EXCLUDED_PREFIXES = [
  "/demo-aanvragen",
  "/contact",
  "/inloggen",
  "/verwijder-account",
  "/privacy-policy",
  "/algemene-voorwaarden",
  "/cookiebeleid",
  "/legal",
];

export type StoredNewsletter = { state: "dismissed" | "subscribed"; at: string };

export function isExcludedPath(pathname: string) {
  return EXCLUDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function shouldOfferPopup(pathname: string, stored: StoredNewsletter | null, seenThisSession: boolean, now = new Date()) {
  if (isExcludedPath(pathname) || seenThisSession) return false;
  if (!stored) return true;
  if (stored.state === "subscribed") return false;
  const dismissedAt = new Date(stored.at).getTime();
  if (Number.isNaN(dismissedAt)) return true;
  return now.getTime() - dismissedAt > SNOOZE_DAYS * 24 * 60 * 60 * 1000;
}

export function parseStored(raw: string | null): StoredNewsletter | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as StoredNewsletter;
    return value && (value.state === "dismissed" || value.state === "subscribed") ? value : null;
  } catch {
    return null;
  }
}
