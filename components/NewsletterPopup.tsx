"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Loader2, CheckCircle, BookOpen, HeartPulse, ShieldCheck } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";
import { RevaMark } from "@/components/brand/RevaLogo";
import {
  DELAY_MS,
  MIN_TIME_MS,
  NEWSLETTER_SESSION_KEY,
  NEWSLETTER_STORAGE_KEY,
  SCROLL_TRIGGER,
  parseStored,
  shouldOfferPopup,
  type StoredNewsletter,
} from "@/lib/newsletter-popup";

function remember(state: StoredNewsletter["state"]) {
  try {
    window.localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify({ state, at: new Date().toISOString() }));
  } catch {
    // Opslag geblokkeerd: dan alleen voor dit bezoek onthouden via de sessie
  }
}

const topics = [
  { icon: HeartPulse, label: "Therapietrouw en patiëntbegeleiding" },
  { icon: BookOpen, label: "Praktijkvoering en tijd besparen" },
  { icon: ShieldCheck, label: "AVG en privacy in de praktijk" },
];

export function NewsletterPopup() {
  const pathname = usePathname();
  const { hasChosen, bannerVisible } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    if (status !== "success") remember("dismissed");
    setOpen(false);
  }, [status]);

  // Triggers pas inschakelen na een cookiekeuze, zodat de pop-up nooit over de cookiebanner valt
  useEffect(() => {
    if (!hasChosen || bannerVisible || open) return;
    let stored: StoredNewsletter | null = null;
    let seen = false;
    try {
      stored = parseStored(window.localStorage.getItem(NEWSLETTER_STORAGE_KEY));
      seen = window.sessionStorage.getItem(NEWSLETTER_SESSION_KEY) === "1";
    } catch {
      return;
    }
    if (!shouldOfferPopup(pathname, stored, seen)) return;

    const start = Date.now();
    const show = () => {
      try {
        window.sessionStorage.setItem(NEWSLETTER_SESSION_KEY, "1");
      } catch {}
      setOpen(true);
    };
    const timer = window.setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_TRIGGER && Date.now() - start > MIN_TIME_MS) show();
    };
    // Exit-intent op desktop: de muis verlaat het venster aan de bovenkant
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0 && Date.now() - start > MIN_TIME_MS) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [pathname, hasChosen, bannerVisible, open]);

  // Escape sluit de pop-up; focus direct op het invoerveld
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Voer een geldig e-mailadres in.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "popup" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Er ging iets mis. Probeer het later opnieuw.");
        setStatus("error");
        return;
      }
    } catch {
      setError("Geen verbinding mogelijk. Probeer het later opnieuw.");
      setStatus("error");
      return;
    }
    remember("subscribed");
    setStatus("success");
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "newsletter_signup", form_name: "nieuwsbrief_popup" });
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end md:items-center justify-center md:p-6 animate-fade-in"
      style={{ background: "rgba(24,24,26,0.55)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        className="relative w-full md:max-w-3xl grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-t-3xl md:rounded-3xl animate-fade-in-up"
        style={{ background: "#ffffff", boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Sluiten"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors md:bg-white/90 hover:bg-gray-100"
          style={{ color: "#6b7280" }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Visuele kant */}
        <div className="hidden md:flex md:col-span-2 relative flex-col justify-between p-8 overflow-hidden" style={{ background: "#1c1c1e" }}>
          <div className="relative">
            <RevaMark size={36} />
            <p className="mt-5 text-xl font-semibold text-white leading-snug">De Praktijkbrief</p>
            <p className="mt-1 text-sm" style={{ color: "#9ca3af" }}>Van REVA, voor fysiopraktijken</p>
          </div>
          <ul className="relative space-y-2.5">
            {topics.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#e4e4e7" }}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color: "#e8632a" }} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulier */}
        <div className="md:col-span-3 p-6 pt-8 md:p-10">
          {status === "success" ? (
            <div className="py-6 text-center md:text-left">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0" style={{ background: "#f0fdf4" }}>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>Bedankt voor je aanmelding</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                Je ontvangt de Praktijkbrief voortaan in je inbox. Krijg je een mail om je aanmelding te
                bevestigen, klik dan op de link daarin.
              </p>
              <button type="button" onClick={close} className="btn-primary px-5 py-2.5 text-sm">
                Verder lezen
              </button>
            </div>
          ) : (
            <>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ color: "#e8632a", background: "#fff3ee" }}
              >
                Nieuwsbrief
              </span>
              <h2 id="newsletter-title" className="text-2xl md:text-[28px] font-semibold tracking-tight leading-tight mb-3" style={{ color: "#1a1a1a" }}>
                Praktische inzichten voor je fysiopraktijk
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                Ontvang artikelen over patiëntbegeleiding, therapietrouw en praktijkvoering, en hoor als
                eerste wat er nieuw is in REVA.
              </p>
              <form onSubmit={submit} noValidate className="space-y-3">
                <label htmlFor="newsletter-email" className="sr-only">E-mailadres</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    ref={inputRef}
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="naam@praktijk.nl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 px-4 py-3 rounded-lg text-sm outline-none border focus:border-[#e8632a] focus:ring-4 focus:ring-[#e8632a]/15"
                    style={{ borderColor: "#e8e5df", color: "#1a1a1a" }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary px-5 py-3 text-sm justify-center disabled:opacity-60"
                  >
                    {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Aanmelden"}
                  </button>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                  Geen spam. Afmelden kan altijd via de link in elke mail. Lees onze{" "}
                  <Link href="/privacy-policy" className="underline underline-offset-2" style={{ color: "#6b7280" }}>
                    privacyverklaring
                  </Link>
                  .
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
