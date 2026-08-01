"use client";

import { useCookieConsent } from "@/lib/cookie-consent";

export function FooterCookieSettingsLink() {
  const { openPreferences } = useCookieConsent();

  return (
    <button type="button" onClick={openPreferences} className="footer-link text-left">
      Cookie-instellingen
    </button>
  );
}
