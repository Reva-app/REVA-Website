"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:cursor-not-allowed"
      style={{ background: checked ? "#e8632a" : "#e8e5df", opacity: disabled ? 0.6 : 1 }}
    >
      <span
        className="inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform"
        style={{ transform: checked ? "translateX(18px)" : "translateX(3px)" }}
      />
    </button>
  );
}

export function CookieBanner() {
  const { consent, hasChosen, bannerVisible, preferencesOpen, acceptAll, rejectAll, savePreferences, dismissPreferences } =
    useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState({ analytics: consent.analytics, marketing: consent.marketing });

  useEffect(() => {
    if (bannerVisible) {
      setDraft({ analytics: consent.analytics, marketing: consent.marketing });
      setExpanded(preferencesOpen);
    }
  }, [bannerVisible, preferencesOpen, consent.analytics, consent.marketing]);

  if (!bannerVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6"
      role="dialog"
      aria-modal="false"
      aria-label="Cookiemelding"
    >
      <div
        className="mx-auto max-w-2xl rounded-2xl border p-5 md:p-6"
        style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
            <Cookie className="w-4 h-4" style={{ color: "#e8632a" }} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>
              Jouw cookievoorkeuren
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              We gebruiken alleen noodzakelijke cookies om de website goed te laten werken. Voor
              analytische of marketingcookies vragen we altijd eerst jouw toestemming.{" "}
              <Link href="/cookiebeleid" className="underline" style={{ color: "#e8632a" }}>
                Lees ons cookiebeleid
              </Link>
              .
            </p>
          </div>
          {hasChosen && (
            <button
              type="button"
              onClick={dismissPreferences}
              aria-label="Sluiten"
              className="p-1 rounded-lg shrink-0"
              style={{ color: "#9ca3af" }}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {expanded && (
          <div className="space-y-3 mb-4 rounded-xl border p-4" style={{ borderColor: "#e8e5df", background: "#f8f7f4" }}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Noodzakelijk</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  Nodig om de website goed te laten werken. Kan niet worden uitgezet.
                </p>
              </div>
              <Toggle checked disabled label="Noodzakelijke cookies (altijd aan)" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Analytisch</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  Helpt ons begrijpen hoe bezoekers de website gebruiken.
                </p>
              </div>
              <Toggle
                checked={draft.analytics}
                onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                label="Analytische cookies"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Marketing</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  Voor het meten van de effectiviteit van campagnes.
                </p>
              </div>
              <Toggle
                checked={draft.marketing}
                onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
                label="Marketingcookies"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2.5">
          {expanded ? (
            <>
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors"
                style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
              >
                Alles weigeren
              </button>
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                style={{ background: "#e8632a" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
              >
                Voorkeuren opslaan
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors"
                style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
              >
                Alles weigeren
              </button>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors"
                style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}
              >
                Voorkeuren
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                style={{ background: "#e8632a" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
              >
                Alles accepteren
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
