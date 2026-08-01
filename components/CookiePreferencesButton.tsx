"use client";

import { useCookieConsent } from "@/lib/cookie-consent";

export function CookiePreferencesButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
      style={{ background: "#e8632a" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
    >
      Cookie-instellingen aanpassen
    </button>
  );
}
