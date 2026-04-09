"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, Bell, LayoutDashboard, BookOpen, ClipboardCheck, Dumbbell, MoreHorizontal, Plus } from "lucide-react";

// ─── Logo ────────────────────────────────────────────────────────────────────

const RevaLogo = () => (
  <div className="flex items-center gap-2.5">
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ background: "#e8632a" }}
    >
      <span className="text-white font-bold text-base leading-none select-none">R</span>
    </div>
    <span className="text-lg font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
      REVA
    </span>
  </div>
);

// ─── Email form ───────────────────────────────────────────────────────────────

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Voer een geldig e-mailadres in.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Er ging iets mis. Probeer het later opnieuw.");
        setStatus("idle");
      }
    } catch {
      setErrorMsg("Geen verbinding mogelijk. Probeer het later opnieuw.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="animate-fade-in animate-success-pop flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
        <div>
          <p className="font-medium text-green-800 text-sm">Je staat op de lijst.</p>
          <p className="text-green-700 text-sm mt-0.5">
            We sturen je een e-mail zodra REVA beschikbaar is.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <div className="flex gap-2">
        <div className="reva-input-wrapper flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@emailadres.nl"
            className="reva-input"
            disabled={status === "loading"}
            autoComplete="email"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-sm text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed touch-press"
          style={{ background: "#e8632a" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Aanmelden
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
      {errorMsg && <p className="text-xs text-red-500 px-1">{errorMsg}</p>}
      <p className="text-xs" style={{ color: "#6b7280" }}>
        Geen spam. Alleen nieuws over REVA. Uitschrijven kan altijd.
      </p>
    </form>
  );
};

// ─── App Mockup (gebaseerd op echte app screenshot) ───────────────────────────

const DashboardMockup = () => (
  <div className="w-full max-w-[260px] mx-auto">
    {/* Phone frame */}
    <div className="relative rounded-[2.2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" />

      {/* Screen */}
      <div className="bg-[#f8f7f4] flex flex-col" style={{ minHeight: 490 }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-6 pb-1">
          <span className="text-[10px] font-semibold" style={{ color: "#1a1a1a" }}>12:04</span>
          <div className="flex items-center gap-1">
            {/* Signal bars */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#1a1a1a"/>
              <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#1a1a1a"/>
              <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#1a1a1a"/>
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#1a1a1a"/>
            </svg>
            {/* WiFi */}
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M6.5 8.5a1 1 0 110 1.5 1 1 0 010-1.5z" fill="#1a1a1a"/>
              <path d="M3 5.5a5 5 0 017 0" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              <path d="M0.5 3A8.5 8.5 0 0112.5 3" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            </svg>
            {/* Battery */}
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="#1a1a1a" strokeWidth="1"/>
              <rect x="15" y="3" width="2" height="4" rx="1" fill="#1a1a1a"/>
              <rect x="2" y="2" width="10" height="6" rx="1" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b" style={{ borderColor: "#e8e5df" }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "#e8632a" }}
          >
            S
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "#e8632a" }}
            >
              <span className="text-white font-bold text-xs leading-none">R</span>
            </div>
            <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>REVA</span>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5" style={{ color: "#1a1a1a" }} />
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-white flex items-center justify-center font-bold"
              style={{ background: "#e8632a", fontSize: 7 }}
            >
              3
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-3 py-3 space-y-2.5 overflow-hidden">

          {/* Welcome card */}
          <div className="bg-white rounded-2xl p-3.5 border" style={{ borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <p className="text-[9px] font-medium uppercase tracking-wide mb-1" style={{ color: "#9ca3af" }}>
              DONDERDAG 9 APRIL
            </p>
            <p className="text-base font-bold mb-0.5" style={{ color: "#1a1a1a" }}>Goedemiddag, Stef</p>
            <p className="text-[9px] mb-2" style={{ color: "#6b7280" }}>
              Herstel van knieband blessure · dag 33 · Halverwege de dag
            </p>
            <p className="text-[10px] mb-2" style={{ color: "#1a1a1a" }}>Hoe gaat het vandaag met je herstel?</p>
            <div
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
              style={{ borderColor: "#e8632a", background: "#fff3ee" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#e8632a" }} />
              <span className="text-[9px] font-medium" style={{ color: "#e8632a" }}>Fase 2 — Vroeg herstel</span>
            </div>
            <div className="flex gap-5 mt-2.5">
              <div>
                <p className="text-xl font-bold" style={{ color: "#1a1a1a" }}>33</p>
                <p className="text-[9px]" style={{ color: "#6b7280" }}>dagen herstel</p>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ color: "#1a1a1a" }}>30</p>
                <p className="text-[9px]" style={{ color: "#6b7280" }}>na operatie</p>
              </div>
            </div>
          </div>

          {/* Deze week card (dark) */}
          <div className="rounded-2xl p-3 relative" style={{ background: "#1c1c1e" }}>
            <p className="text-[9px] font-semibold uppercase tracking-wide mb-2" style={{ color: "#9ca3af" }}>
              DEZE WEEK
            </p>
            {/* Inner white card */}
            <div className="bg-white rounded-xl p-2.5 space-y-1.5">
              {[
                { label: "Gem. check-in score", value: "3.0", unit: "/5", accent: "#d97706" },
                { label: "Trainingen afgerond", value: "1", unit: "/7", accent: "#1a1a1a" },
                { label: "Medicijn innames", value: "0", unit: null, accent: "#1a1a1a" },
                { label: "Mijlpalen behaald", value: "0", unit: null, accent: "#1a1a1a" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[9px]" style={{ color: "#6b7280" }}>{row.label}</span>
                  <span className="text-[10px] font-bold" style={{ color: row.accent }}>
                    {row.value}
                    {row.unit && <span className="font-normal text-[9px]" style={{ color: "#9ca3af" }}>{row.unit}</span>}
                  </span>
                </div>
              ))}
            </div>
            {/* FAB button */}
            <div
              className="absolute -bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "#e8632a" }}
            >
              <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="bg-white border-t px-2 py-1.5" style={{ borderColor: "#e8e5df" }}>
          <div className="flex items-end justify-around">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: BookOpen, label: "Dagboek", active: false },
              { icon: ClipboardCheck, label: "Check-in", active: false, fab: true },
              { icon: Dumbbell, label: "Training", active: false },
              { icon: MoreHorizontal, label: "Meer", active: false },
            ].map(({ icon: Icon, label, active, fab }) => (
              <div key={label} className="flex flex-col items-center gap-0.5" style={{ minWidth: 36 }}>
                {fab ? (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center -mt-3 shadow-md"
                    style={{ background: "#e8632a" }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <Icon
                    className="w-4 h-4"
                    style={{ color: active ? "#e8632a" : "#9ca3af" }}
                  />
                )}
                <span
                  className="text-[8px] font-medium"
                  style={{ color: fab ? "#e8632a" : active ? "#e8632a" : "#9ca3af" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────

export const LaunchPage: React.FC = () => {
  return (
    <div
      className="h-[100dvh] overflow-hidden flex flex-col md:flex-row"
      style={{ fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* ── Left column ── */}
      <section className="flex-1 flex flex-col justify-center px-8 py-10 md:py-0 md:px-12 lg:px-16 xl:px-20 min-w-0">
        <div className="max-w-lg w-full mx-auto md:mx-0 space-y-6">

          {/* Logo */}
          <div className="animate-fade-in-up delay-100">
            <RevaLogo />
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up delay-200">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{ background: "#fff3ee", color: "#e8632a", borderColor: "rgba(232,99,42,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: "#e8632a" }} />
              Binnenkort beschikbaar
            </span>
          </div>

          {/* Heading */}
          <div className="animate-fade-in-up delay-300">
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12]"
              style={{ color: "#1a1a1a" }}
            >
              Grip op je herstel.{" "}
              <span style={{ color: "#e8632a" }}>Op één plek.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up delay-400">
            <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
              Met REVA houd je alles bij wat er tijdens je herstel toe doet.
              Afspraken, dagelijkse check-ins, medicatie en voortgang. Overzichtelijk
              op één plek, op iedere dag van je revalidatie.
            </p>
          </div>

          {/* Email form */}
          <div className="animate-fade-in-up delay-500">
            <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
              Meld je aan voor vroege toegang
            </p>
            <EmailSignupForm />
          </div>

          {/* Footer */}
          <p className="animate-fade-in delay-600 text-xs" style={{ color: "#9ca3af" }}>
            © {new Date().getFullYear()} REVA App &middot; reva-app.nl
          </p>
        </div>
      </section>

      {/* ── Right column ── */}
      <section
        className="hidden md:flex flex-1 items-center justify-center relative p-8 lg:p-12 overflow-hidden"
        style={{ background: "#f1ede8" }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "rgba(232,99,42,0.08)" }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full blur-3xl"
            style={{ background: "rgba(28,28,30,0.06)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 w-full">
          {/* Mockup */}
          <div className="animate-slide-right delay-300 w-full flex justify-center">
            <DashboardMockup />
          </div>

          {/* Caption */}
          <div className="animate-fade-in delay-600 text-center">
            <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
              Jouw persoonlijke herstel dashboard
            </p>
            <p className="text-xs mt-1" style={{ color: "#6b7280" }}>
              Altijd inzicht. Altijd overzicht. Altijd rust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
