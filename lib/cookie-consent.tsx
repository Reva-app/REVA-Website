"use client";

import { createContext, useCallback, useContext, useState, useSyncExternalStore, ReactNode } from "react";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent {
  version: number;
  consent: ConsentState;
  updatedAt: string;
}

const STORAGE_KEY = "reva-cookie-consent";
// Ophogen forceert een nieuwe toestemmingsvraag bij iedereen, bijvoorbeeld
// wanneer er een nieuwe cookiecategorie wordt toegevoegd.
const CONSENT_VERSION = 1;

const DEFAULT_CONSENT: ConsentState = { necessary: true, analytics: false, marketing: false };

// ─── Opslag ─────────────────────────────────────────────────────────────────
// De keuze staat in localStorage. useSyncExternalStore leest die uit zonder
// hydration-verschillen: op de server (en bij de eerste render) is er nog geen keuze.

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: StoredConsent | null = null;

function readStoredConsent(): StoredConsent | null {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as StoredConsent) : null;
    cachedValue = parsed && parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    cachedValue = null;
  }
  return cachedValue;
}

function writeStoredConsent(consent: ConsentState) {
  const payload: StoredConsent = { version: CONSENT_VERSION, consent, updatedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Opslag geblokkeerd (bijvoorbeeld privévenster): de keuze geldt dan alleen voor dit bezoek
    cachedRaw = JSON.stringify(payload);
    cachedValue = payload;
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => e.key === STORAGE_KEY && listener();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

// ─── Google Consent Mode v2 ─────────────────────────────────────────────────

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function consentModeSignals(consent: ConsentState) {
  const v = (granted: boolean) => (granted ? "granted" : "denied");
  return {
    analytics_storage: v(consent.analytics),
    ad_storage: v(consent.marketing),
    ad_user_data: v(consent.marketing),
    ad_personalization: v(consent.marketing),
  };
}

function updateConsentMode(consent: ConsentState) {
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  // gtag() moet het arguments-object pushen, niet een array
  const gtag =
    w.gtag ??
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  gtag("consent", "update", consentModeSignals(consent));
  w.dataLayer.push({ event: "cookie_consent_update", ...consent });
}

/** Verwijdert Google Analytics-cookies na het intrekken van toestemming. */
function removeAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of document.cookie.split(";").map((c) => c.split("=")[0].trim())) {
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat") {
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      }
    }
  }
}

// ─── Context ────────────────────────────────────────────────────────────────

interface CookieConsentContextValue {
  consent: ConsentState;
  hasChosen: boolean;
  bannerVisible: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (choice: { analytics: boolean; marketing: boolean }) => void;
  openPreferences: () => void;
  dismissPreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStoredConsent, () => null);
  // Op de server en tijdens hydration nog niets tonen; daarna pas de banner
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const consent = stored?.consent ?? DEFAULT_CONSENT;
  const hasChosen = stored !== null;

  const choose = useCallback(
    (next: ConsentState) => {
      if (consent.analytics && !next.analytics) removeAnalyticsCookies();
      writeStoredConsent(next);
      updateConsentMode(next);
      setPreferencesOpen(false);
    },
    [consent.analytics],
  );

  const acceptAll = useCallback(() => choose({ necessary: true, analytics: true, marketing: true }), [choose]);
  const rejectAll = useCallback(() => choose({ necessary: true, analytics: false, marketing: false }), [choose]);
  const savePreferences = useCallback(
    (choice: { analytics: boolean; marketing: boolean }) => choose({ necessary: true, ...choice }),
    [choose],
  );
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  // Sluiten zonder keuze mag alleen als er al eerder een keuze is gemaakt
  // (bij het eerste bezoek is een actieve keuze vereist).
  const dismissPreferences = useCallback(() => {
    if (hasChosen) setPreferencesOpen(false);
  }, [hasChosen]);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasChosen,
        bannerVisible: hydrated && (!hasChosen || preferencesOpen),
        preferencesOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        dismissPreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}
