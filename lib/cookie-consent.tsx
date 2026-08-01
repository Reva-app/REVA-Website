"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

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

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStoredConsent(consent: ConsentState) {
  const payload: StoredConsent = {
    version: CONSENT_VERSION,
    consent,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

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
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [hasChosen, setHasChosen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored.consent);
      setHasChosen(true);
    } else {
      setBannerVisible(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const next: ConsentState = { necessary: true, analytics: true, marketing: true };
    setConsent(next);
    writeStoredConsent(next);
    setHasChosen(true);
    setBannerVisible(false);
    setPreferencesOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const next: ConsentState = { necessary: true, analytics: false, marketing: false };
    setConsent(next);
    writeStoredConsent(next);
    setHasChosen(true);
    setBannerVisible(false);
    setPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback(
    (choice: { analytics: boolean; marketing: boolean }) => {
      const next: ConsentState = { necessary: true, ...choice };
      setConsent(next);
      writeStoredConsent(next);
      setHasChosen(true);
      setBannerVisible(false);
      setPreferencesOpen(false);
    },
    []
  );

  const openPreferences = useCallback(() => {
    setBannerVisible(true);
    setPreferencesOpen(true);
  }, []);

  const dismissPreferences = useCallback(() => {
    // Alleen sluiten zonder nieuwe keuze is enkel toegestaan als er al eerder
    // een keuze is gemaakt (AVG vereist een actieve keuze bij het eerste bezoek).
    if (hasChosen) {
      setBannerVisible(false);
      setPreferencesOpen(false);
    }
  }, [hasChosen]);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasChosen,
        bannerVisible,
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

/**
 * Gebruik deze helper om toekomstige analytische of marketingscripts pas te
 * laden nadat de bezoeker daar expliciet toestemming voor heeft gegeven, bv.:
 *
 *   const { consent } = useCookieConsent();
 *   useEffect(() => {
 *     if (consent.analytics) {
 *       // laad hier pas het analytics-script
 *     }
 *   }, [consent.analytics]);
 */
