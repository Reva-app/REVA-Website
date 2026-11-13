"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { homescreenSteps, type Platform } from "@/lib/homescreen";
import { EllipsisVertical, Lock, Pause, Play, Plus, RotateCcw, Share, Bookmark, Copy, Download, History } from "lucide-react";

// Stap-voor-stap animatie: REVA als app op het beginscherm zetten, voor iPhone (Safari)
// en Android (Chrome). De stappen staan ook als tekst naast de telefoon, zodat de uitleg
// zonder animatie (en voor schermlezers) volledig blijft.

const ORANGE = "#e8632a";
const STEP_MS = 2800;

/**
 * Het element waarop getikt wordt. Als `on` waar is, staat er een pulserende cirkel
 * precies gecentreerd op het element, zodat de tik altijd op het juiste doel valt.
 */
function Target({ on, children }: { on: boolean; children: ReactNode }) {
  return (
    <span className="relative inline-flex items-center justify-center">
      {children}
      {on && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(232,99,42,0.35)" }} />
          <span className="relative block w-7 h-7 rounded-full border-2" style={{ borderColor: ORANGE, background: "rgba(232,99,42,0.18)" }} />
        </span>
      )}
    </span>
  );
}

function RevaScreen() {
  return (
    <div className="px-3 pt-3">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ORANGE }}>R</span>
        <span className="text-[11px] font-semibold" style={{ color: "#1a1a1a" }}>REVA</span>
      </div>
      <p className="text-[12px] font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Goedemorgen, Sanne</p>
      <p className="text-[9.5px] mb-2.5" style={{ color: "#9ca3af" }}>Fase 2 van je herstelplan</p>
      <div className="rounded-xl p-2.5 mb-2" style={{ background: "#1c1c1e" }}>
        <p className="text-[9px]" style={{ color: "#9ca3af" }}>Vandaag</p>
        <p className="text-[11px] font-semibold text-white">Check-in invullen</p>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["Training", "Medicatie", "Doelen", "Mijn herstel"].map((t) => (
          <div key={t} className="rounded-lg px-2 py-2 text-[9.5px] font-medium bg-white border" style={{ borderColor: "#e8e5df", color: "#1a1a1a" }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

function IosPhone({ step }: { step: number }) {
  const home = step >= 4;
  return (
    <div className="relative h-full" style={{ background: home ? "linear-gradient(160deg,#f3d9c8,#e8b9a0 45%,#c98f74)" : "#f8f7f4" }}>
      {!home && (
        <>
          <RevaScreen />
          {/* Safari: adresbalk en werkbalk onderin */}
          <div className="absolute inset-x-0 bottom-0 px-2.5 pb-2.5 pt-2" style={{ background: "rgba(248,247,244,0.96)", borderTop: "1px solid #e8e5df" }}>
            <div className="flex items-center justify-center gap-1 rounded-lg py-1.5 mb-2 text-[9.5px]" style={{ background: "#ebe8e3", color: "#1a1a1a" }}>
              <Lock className="w-2.5 h-2.5" /> dashboard.reva-app.nl
            </div>
            <div className="relative flex items-center justify-between px-3" style={{ color: "#2563eb" }}>
              <span className="text-[13px]">‹</span>
              <span className="text-[13px] opacity-40">›</span>
              <Target on={step === 1}><Share className="w-3.5 h-3.5" /></Target>
              <Bookmark className="w-3.5 h-3.5" />
              <span className="text-[11px] leading-none">•••</span>
            </div>
          </div>
          {/* Deelmenu */}
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-2xl px-3 pt-2 pb-4 transition-transform duration-500 ease-out"
            style={{ background: "#f2f1ef", transform: step === 2 ? "translateY(0)" : "translateY(105%)", boxShadow: "0 -10px 30px rgba(0,0,0,0.15)" }}
          >
            <span className="block mx-auto w-8 h-1 rounded-full mb-2.5" style={{ background: "#c9c6c0" }} />
            <div className="rounded-xl bg-white overflow-hidden text-[10.5px]" style={{ color: "#1a1a1a" }}>
              {[
                ["Kopieer", Copy],
                ["Voeg bladwijzer toe", Bookmark],
                ["Zet op beginscherm", Plus],
              ].map(([label, Icon], i) => {
                const I = Icon as typeof Copy;
                const hit = i === 2;
                return (
                  <div key={label as string} className="relative flex items-center justify-between px-3 py-2.5" style={{ borderTop: i ? "1px solid #f1ede8" : "none", background: hit ? "#fff3ee" : "#ffffff" }}>
                    <Target on={hit && step === 2}><span className={hit ? "font-semibold" : ""}>{label as string}</span></Target>
                    <I className="w-3.5 h-3.5" style={{ color: hit ? ORANGE : "#6b7280" }} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Bevestigen */}
          <div
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{ background: "#f2f1ef", opacity: step === 3 ? 1 : 0, transform: step === 3 ? "translateY(0)" : "translateY(12%)", pointerEvents: "none" }}
          >
            <div className="relative flex items-center justify-between px-3 pt-4 pb-3 text-[10.5px]">
              <span style={{ color: "#2563eb" }}>Annuleer</span>
              <span className="font-semibold" style={{ color: "#1a1a1a" }}>Zet op beginscherm</span>
              <Target on={step === 3}><span className="font-semibold" style={{ color: "#2563eb" }}>Voeg toe</span></Target>
            </div>
            <div className="mx-3 rounded-xl bg-white p-3 flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold text-white" style={{ background: ORANGE }}>R</span>
              <div className="text-[10.5px]">
                <p className="font-semibold" style={{ color: "#1a1a1a" }}>REVA</p>
                <p style={{ color: "#9ca3af" }}>dashboard.reva-app.nl</p>
              </div>
            </div>
          </div>
        </>
      )}
      {home && <HomeScreen label="REVA" />}
    </div>
  );
}

function AndroidPhone({ step }: { step: number }) {
  const home = step >= 4;
  return (
    <div className="relative h-full" style={{ background: home ? "linear-gradient(160deg,#cfd8d3,#9fb3a9 50%,#6f8a7e)" : "#f8f7f4" }}>
      {!home && (
        <>
          {/* Chrome: adresbalk bovenin */}
          <div className="relative flex items-center gap-2 px-2.5 py-2" style={{ background: "#ffffff", borderBottom: "1px solid #e8e5df" }}>
            <div className="flex-1 flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[9.5px]" style={{ background: "#f1f1f1", color: "#1a1a1a" }}>
              <Lock className="w-2.5 h-2.5" /> dashboard.reva-app.nl
            </div>
            <Target on={step === 1}><EllipsisVertical className="w-4 h-4" style={{ color: "#1a1a1a" }} /></Target>
          </div>
          <RevaScreen />
          {/* Menu */}
          <div
            className="absolute right-2 top-9 w-[72%] rounded-xl bg-white overflow-hidden text-[10.5px] transition-all duration-300 origin-top-right"
            style={{ color: "#1a1a1a", boxShadow: "0 12px 30px rgba(0,0,0,0.18)", opacity: step === 2 ? 1 : 0, transform: step === 2 ? "scale(1)" : "scale(0.9)" }}
          >
            {[
              ["Nieuw tabblad", Plus],
              ["Geschiedenis", History],
              ["Downloads", Download],
              ["Toevoegen aan startscherm", Plus],
            ].map(([label, Icon], i) => {
              const I = Icon as typeof Plus;
              const hit = i === 3;
              return (
                <div key={label as string} className="relative flex items-center gap-2 px-3 py-2.5" style={{ background: hit ? "#fff3ee" : "#ffffff" }}>
                  <I className="w-3.5 h-3.5" style={{ color: hit ? ORANGE : "#6b7280" }} />
                  <Target on={hit && step === 2}><span className={hit ? "font-semibold" : ""}>{label as string}</span></Target>
                </div>
              );
            })}
          </div>
          {/* Dialoog */}
          <div className="absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.35)", opacity: step === 3 ? 1 : 0, pointerEvents: "none" }}>
            <div className="w-full rounded-2xl bg-white p-4" style={{ transform: step === 3 ? "scale(1)" : "scale(0.94)", transition: "transform 300ms" }}>
              <p className="text-[12px] font-semibold mb-3" style={{ color: "#1a1a1a" }}>App installeren</p>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: ORANGE }}>R</span>
                <div className="text-[10px]">
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>REVA</p>
                  <p style={{ color: "#9ca3af" }}>dashboard.reva-app.nl</p>
                </div>
              </div>
              <div className="relative flex justify-end gap-4 text-[10.5px] font-semibold" style={{ color: "#1a73e8" }}>
                <span>Annuleren</span>
                <Target on={step === 3}><span>Installeren</span></Target>
              </div>
            </div>
          </div>
        </>
      )}
      {home && <HomeScreen label="REVA" round />}
    </div>
  );
}

function HomeScreen({ label, round = false }: { label: string; round?: boolean }) {
  const tiles = ["#5b8def", "#52b788", "#f4a261", "#9b8cf2", "#e76f51", "#2a9d8f", "#8d99ae", "#e9c46a", "#6d6875", "#457b9d", "#b5838d"];
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-3 px-3.5 pt-8">
      {tiles.map((c, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className={`w-10 h-10 ${round ? "rounded-full" : "rounded-[11px]"}`} style={{ background: c, opacity: 0.85 }} />
          <span className="h-1.5 w-7 rounded-full" style={{ background: "rgba(255,255,255,0.6)" }} />
        </div>
      ))}
      <div className="flex flex-col items-center gap-1 animate-success-pop">
        <span className={`w-10 h-10 ${round ? "rounded-full" : "rounded-[11px]"} flex items-center justify-center text-base font-bold text-white`} style={{ background: ORANGE, boxShadow: "0 0 0 3px rgba(255,255,255,0.7)" }}>R</span>
        <span className="text-[9px] font-semibold text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>{label}</span>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[244px] rounded-[2.2rem] p-2" style={{ background: "#0e0e10", boxShadow: "0 24px 50px rgba(0,0,0,0.22)" }}>
      <div className="relative rounded-[1.75rem] overflow-hidden pt-6" style={{ background: "#ffffff", height: 440 }}>
        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10" style={{ background: "#0e0e10" }} />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}

export function HomescreenGuide() {
  const ref = useRef<HTMLDivElement>(null);
  const [platform, setPlatform] = useState<Platform>("ios");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const steps = homescreenSteps[platform];

  // Juiste tabblad voor het toestel van de bezoeker; bij minder beweging niet automatisch afspelen
  const detected = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      // Bij de eerste keer in beeld: tabblad van het toestel kiezen, minder beweging respecteren
      if (e.isIntersecting && !detected.current) {
        detected.current = true;
        if (/android/i.test(navigator.userAgent)) setPlatform("android");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
      }
      setInView(e.isIntersecting);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % steps.length), step === steps.length - 1 ? STEP_MS + 1400 : STEP_MS);
    return () => window.clearTimeout(t);
  }, [playing, inView, step, steps.length]);

  const choose = (p: Platform) => {
    setPlatform(p);
    setStep(0);
  };

  return (
    <div ref={ref} className="rounded-2xl border p-5 md:p-7" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
      <div role="tablist" aria-label="Kies je telefoon" className="inline-flex rounded-lg p-1 mb-6" style={{ background: "#ffffff", border: "1px solid #e8e5df" }}>
        {(["ios", "android"] as const).map((p) => (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={platform === p}
            onClick={() => choose(p)}
            className="px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150"
            style={platform === p ? { background: "#1c1c1e", color: "#ffffff" } : { color: "#6b7280" }}
          >
            {p === "ios" ? "iPhone (Safari)" : "Android (Chrome)"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
        <div aria-hidden="true" className="select-none">
          <PhoneFrame>{platform === "ios" ? <IosPhone step={step} /> : <AndroidPhone step={step} />}</PhoneFrame>
        </div>

        <div>
          <ol className="space-y-2">
            {steps.map((s, i) => {
              const active = i === step;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(i);
                      setPlaying(false);
                    }}
                    aria-current={active ? "step" : undefined}
                    className="w-full text-left flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150"
                    style={{ background: active ? "#ffffff" : "transparent", boxShadow: active ? "0 1px 3px rgba(0,0,0,0.04)" : "none", border: active ? "1px solid #e8e5df" : "1px solid transparent" }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors"
                      style={{ background: active || i < step ? ORANGE : "#e8e5df", color: active || i < step ? "#ffffff" : "#6b7280" }}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold" style={{ color: "#1a1a1a" }}>{s.title}</span>
                      <span className="block text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border bg-white transition-colors hover:bg-[#f1ede8]"
              style={{ borderColor: "#e8e5df", color: "#374151" }}
            >
              {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {playing ? "Pauzeer" : "Afspelen"}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep(0);
                setPlaying(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Opnieuw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
