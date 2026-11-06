"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, ShieldCheck, BarChart3, Megaphone } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";
import { RevaMark } from "@/components/brand/RevaLogo";

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
      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors disabled:cursor-not-allowed"
      style={{ background: checked ? "#e8632a" : "#d6d2cb", opacity: disabled ? 0.55 : 1 }}
    >
      <span
        className="inline-block h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-transform"
        style={{ transform: checked ? "translateX(23px)" : "translateX(3px)" }}
      />
    </button>
  );
}

const categories = [
  {
    key: "necessary" as const,
    icon: ShieldCheck,
    title: "Noodzakelijk",
    text: "Onthoudt je cookiekeuze en zorgt dat de site werkt. Altijd aan.",
    services: "Alleen opslag in je eigen browser",
  },
  {
    key: "analytics" as const,
    icon: BarChart3,
    title: "Analytisch",
    text: "Laat ons anoniem zien welke pagina's worden bezocht, zodat we de site kunnen verbeteren.",
    services: "Google Analytics via Google Tag Manager",
  },
  {
    key: "marketing" as const,
    icon: Megaphone,
    title: "Marketing",
    text: "Meet het effect van onze advertenties, bijvoorbeeld via Google of Meta. Nu nog niet in gebruik.",
    services: "Advertentiemeting, alleen als we campagnes draaien",
  },
];

const equalButton =
  "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 active:scale-[0.98]";

function CookieDialog({ startExpanded }: { startExpanded: boolean }) {
  const { consent, hasChosen, acceptAll, rejectAll, savePreferences, dismissPreferences } = useCookieConsent();
  const [expanded, setExpanded] = useState(startExpanded);
  const [draft, setDraft] = useState({ analytics: consent.analytics, marketing: consent.marketing });

  // Weigeren en accepteren zien er bewust hetzelfde uit (richtlijn Autoriteit Persoonsgegevens)
  const neutral = { background: "#1c1c1e", color: "#ffffff" };

  return (
    <div
      className="fixed z-[60] inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:bottom-6 animate-fade-in-up"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
    >
      <div
        className={`rounded-2xl border p-5 md:p-6 w-full ${expanded ? "md:w-[520px]" : "md:w-[420px]"}`}
        style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }}
      >
        <div className="flex items-start gap-3 mb-3">
          <RevaMark size={30} />
          <div className="flex-1 min-w-0">
            <p id="cookie-title" className="text-[15px] font-semibold" style={{ color: "#1a1a1a" }}>
              Mag REVA cookies gebruiken?
            </p>
          </div>
          {hasChosen && (
            <button
              type="button"
              onClick={dismissPreferences}
              aria-label="Sluiten zonder wijzigingen"
              className="p-1 -m-1 rounded-lg shrink-0 transition-colors hover:bg-gray-100"
              style={{ color: "#9ca3af" }}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
          We gebruiken alleen wat nodig is om de site te laten werken. Met jouw toestemming meten we
          anoniem hoe de site wordt gebruikt, zodat we hem kunnen verbeteren.
          <span className="hidden sm:inline">
            {" "}Je kunt je keuze altijd aanpassen via &ldquo;Cookie-instellingen&rdquo; onderaan elke pagina.
          </span>{" "}
          <Link href="/cookiebeleid" className="underline underline-offset-2" style={{ color: "#1a1a1a" }}>
            Cookiebeleid
          </Link>
        </p>

        {expanded && (
          <ul className="space-y-2 mb-4">
            {categories.map(({ key, icon: Icon, title, text, services }) => {
              const checked = key === "necessary" ? true : draft[key];
              return (
                <li key={key} className="flex items-start gap-3 rounded-xl p-3.5" style={{ background: "#f8f7f4" }}>
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                    <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{title}</p>
                    <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#6b7280" }}>{text}</p>
                    <p className="text-[11px] mt-1" style={{ color: "#9ca3af" }}>{services}</p>
                  </div>
                  <Toggle
                    checked={checked}
                    disabled={key === "necessary"}
                    label={key === "necessary" ? `${title}, altijd aan` : title}
                    onChange={key === "necessary" ? undefined : (v) => setDraft((d) => ({ ...d, [key]: v }))}
                  />
                </li>
              );
            })}
          </ul>
        )}

        <div className={`flex gap-2 ${expanded ? "flex-col sm:flex-row" : "flex-row"}`}>
          <button type="button" onClick={rejectAll} className={`${equalButton} hover:bg-black`} style={neutral}>
            Alles weigeren
          </button>
          {expanded && (
            <button
              type="button"
              onClick={() => savePreferences(draft)}
              className={`${equalButton} border hover:bg-[#f1ede8]`}
              style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
            >
              Keuze opslaan
            </button>
          )}
          <button type="button" onClick={acceptAll} className={`${equalButton} hover:bg-black`} style={neutral}>
            Alles accepteren
          </button>
        </div>

        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium hover-orange"
            style={{ color: "#6b7280" }}
          >
            Zelf kiezen
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

export function CookieBanner() {
  const { bannerVisible, preferencesOpen } = useCookieConsent();
  if (!bannerVisible) return null;
  // De key zorgt dat de keuzes opnieuw worden ingeladen telkens als de banner opent
  return <CookieDialog key={preferencesOpen ? "voorkeuren" : "melding"} startExpanded={preferencesOpen} />;
}
