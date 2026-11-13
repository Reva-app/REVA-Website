"use client";

import type { ReactNode } from "react";
import {
  Check,
  ChevronRight,
  Bell,
  Pill,
  Lock,
  Eye,
  Pencil,
  Sparkles,
  Camera,
  FileText,
  UserPlus,
  Dumbbell,
  Trophy,
} from "lucide-react";
import type { DemoKey } from "@/lib/features";
import { useDemoStep } from "./useDemoStep";

// ─── Bouwstenen ─────────────────────────────────────────────────────────────

const ORANGE = "#e8632a";
const show = (on: boolean) =>
  `transition-all duration-500 ease-out ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"}`;

function Frame({ title, meta, children, dark = false }: { title: string; meta?: string; children: ReactNode; dark?: boolean }) {
  return (
    <div
      className="w-full rounded-2xl border p-4 sm:p-5 text-left"
      style={{
        background: dark ? "#1c1c1e" : "#ffffff",
        borderColor: dark ? "#1c1c1e" : "#e8e5df",
        boxShadow: "0 18px 40px rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex items-center justify-between mb-3.5">
        <p className="text-[13px] font-semibold" style={{ color: dark ? "#ffffff" : "#1a1a1a" }}>{title}</p>
        {meta && <span className="text-[11px]" style={{ color: dark ? "#7c7c8a" : "#9ca3af" }}>{meta}</span>}
      </div>
      {children}
    </div>
  );
}

function Pill2({ children, tone = "orange" }: { children: ReactNode; tone?: "orange" | "red" | "amber" | "purple" | "gray" | "green" }) {
  const tones = {
    orange: { bg: "#fff3ee", fg: ORANGE },
    red: { bg: "#fef2f2", fg: "#b91c1c" },
    amber: { bg: "#fffbeb", fg: "#b45309" },
    purple: { bg: "#f5f3ff", fg: "#6d28d9" },
    gray: { bg: "#f3f4f6", fg: "#4b5563" },
    green: { bg: "#f0fdf4", fg: "#15803d" },
  }[tone];
  return (
    <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: tones.bg, color: tones.fg }}>
      {children}
    </span>
  );
}

function Tick({ on }: { on: boolean }) {
  return (
    <span
      className="w-4 h-4 rounded-[5px] flex items-center justify-center shrink-0 transition-colors duration-300"
      style={{ background: on ? ORANGE : "#ffffff", border: on ? "none" : "1.5px solid #e1ddd5" }}
    >
      <Check className={`w-2.5 h-2.5 text-white transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`} strokeWidth={3.5} />
    </span>
  );
}

function Dots({ value, max, on, color = ORANGE }: { value: number; max: number; on: boolean; color?: string }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
          style={{ background: on && i < value ? color : "#ece8e2", transitionDelay: `${i * 70}ms` }}
        />
      ))}
    </span>
  );
}

function Phone({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="mx-auto w-[248px] rounded-[2rem] p-2" style={{ background: "#0e0e10", boxShadow: "0 24px 50px rgba(0,0,0,0.22)" }}>
      <div className="rounded-[1.6rem] overflow-hidden px-3.5 pt-7 pb-4 relative text-left" style={{ background: "#f8f7f4", minHeight: 360 }}>
        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full" style={{ background: "#0e0e10" }} />
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ORANGE }}>R</span>
          <span className="text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── Demo's voor de fysiotherapeut ──────────────────────────────────────────

function IntakeDemo() {
  const { ref, step, at } = useDemoStep(7);
  const stage = step < 2 ? 0 : step < 5 ? 1 : 2;
  const rows: [string, string][] = [
    ["Waarvoor komt de patiënt?", "Operatie"],
    ["Blessuretype", "Voorste kruisband"],
    ["Pijnscore nu", "4 van 10"],
    ["Hulpmiddel", "2 krukken"],
    ["Doel", "Terug naar voetbal"],
  ];
  return (
    <div ref={ref}>
      <Frame title="Intake van Sanne" meta="Ingevuld door patiënt">
        <div className="flex gap-1.5 mb-4">
          {["Patiënt vult in", "Jij vult aan", "Afronden"].map((s, i) => (
            <span
              key={s}
              className="flex-1 text-center text-[10.5px] font-semibold py-1.5 rounded-lg transition-colors duration-300"
              style={{ background: i <= stage ? "#fff3ee" : "#f8f7f4", color: i <= stage ? ORANGE : "#9ca3af" }}
            >
              {i + 1}. {s}
            </span>
          ))}
        </div>
        <div className="space-y-1.5">
          {rows.map(([l, v], i) => (
            <div key={l} className={`flex justify-between text-[12px] px-3 py-2 rounded-lg ${show(at(i + 1))}`} style={{ background: "#f8f7f4" }}>
              <span style={{ color: "#6b7280" }}>{l}</span>
              <span className="font-medium" style={{ color: "#1a1a1a" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className={`mt-3 rounded-xl p-3 ${show(at(6))}`} style={{ background: "#1c1c1e" }}>
          <p className="flex items-center gap-1.5 text-[10.5px] font-semibold mb-1" style={{ color: "#f59e6b" }}>
            <Sparkles className="w-3 h-3" /> Intake-inzicht, voorstel
          </p>
          <p className="text-[13px] font-semibold text-white">Past bij herstelplan ACL-reconstructie</p>
          <p className="text-[11px] mt-0.5" style={{ color: "#9ca3af" }}>Toepassen of negeren: jij beslist</p>
        </div>
      </Frame>
    </div>
  );
}

function HerstelplanDemo() {
  const { ref, at } = useDemoStep(6);
  const criteria = ["Volledige extensie", "Flexie 120 graden", "Geen zwelling na training"];
  return (
    <div ref={ref}>
      <Frame title="ACL-reconstructie" meta="Herstelplan">
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {["Fase 1", "Fase 2", "Fase 3", "Fase 4"].map((f, i) => {
            const done = i === 0 || (i === 1 && at(5));
            const active = (i === 1 && !at(5)) || (i === 2 && at(5));
            return (
              <div key={f} className="rounded-lg p-2 transition-colors duration-500" style={{ background: done ? "#1c1c1e" : active ? "#fff3ee" : "#f8f7f4" }}>
                <p className="text-[10px] font-semibold" style={{ color: done ? "#ffffff" : active ? ORANGE : "#9ca3af" }}>{f}</p>
                <p className="text-[9.5px]" style={{ color: done ? "#9ca3af" : "#9ca3af" }}>wk {i * 4 + 1} tot {i * 4 + 4}</p>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] font-semibold mb-2" style={{ color: "#6b7280" }}>Criteria voor volgende fase</p>
        <div className="space-y-1.5 mb-3">
          {criteria.map((c, i) => (
            <div key={c} className="flex items-center gap-2 text-[12px]" style={{ color: "#1a1a1a" }}>
              <Tick on={at(i + 1)} />
              {c}
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-center gap-1.5 text-[12px] font-semibold rounded-lg py-2.5 transition-all duration-300"
          style={{ background: at(4) ? ORANGE : "#f1ede8", color: at(4) ? "#ffffff" : "#9ca3af" }}
        >
          {at(5) ? "Fase 2 afgerond, fase 3 gestart" : "Markeer fase voltooid en start volgende"}
        </div>
      </Frame>
    </div>
  );
}

function SignaleringDemo() {
  const { ref, at } = useDemoStep(6);
  const rows: { name: string; last: string; badge?: { t: string; tone: "red" | "amber" | "purple" | "gray" }; k: number }[] = [
    { name: "Sanne de Vries", last: "vandaag", badge: { t: "Hoge pijnscore", tone: "red" }, k: 2 },
    { name: "Mark Bakker", last: "gisteren", badge: { t: "Zwelling gemeld", tone: "amber" }, k: 3 },
    { name: "Lotte Jansen", last: "vandaag", k: 0 },
    { name: "Ruben Kok", last: "5 weken geleden", badge: { t: "Weinig activiteit", tone: "gray" }, k: 4 },
  ];
  return (
    <div ref={ref}>
      <Frame title="Mijn patiënten" meta="Dashboard">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            ["Mijn patiënten", "24"],
            ["Aandacht nodig", at(4) ? "3" : at(3) ? "2" : at(2) ? "1" : "0"],
            ["Check-ins deze week", "61"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl p-2.5" style={{ background: i === 1 ? "#fffbeb" : "#f8f7f4" }}>
              <p className="text-[9.5px] leading-tight" style={{ color: "#9ca3af" }}>{l}</p>
              <p className="text-lg font-semibold" style={{ color: i === 1 ? "#b45309" : "#1a1a1a" }}>{v}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#fcfbf9" }}>
              <div className="min-w-0">
                <p className="text-[12px] font-medium truncate" style={{ color: "#1a1a1a" }}>{r.name}</p>
                <p className="text-[10px]" style={{ color: "#9ca3af" }}>Laatste check-in {r.last}</p>
              </div>
              {r.badge && (
                <span className={`transition-all duration-300 ${at(r.k) ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                  <Pill2 tone={r.badge.tone}>{r.badge.t}</Pill2>
                </span>
              )}
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}

function DossierDemo() {
  const { ref, step } = useDemoStep(8, 1100);
  const tab = Math.min(3, Math.floor(step / 2));
  const tabs = ["Check-ins", "Foto", "Medicatie", "Schema"];
  return (
    <div ref={ref}>
      <Frame title="Sanne de Vries" meta="Patiëntdossier">
        <div className="flex gap-1 mb-3 overflow-hidden">
          {tabs.map((t, i) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors duration-300"
              style={{ background: i === tab ? "#1c1c1e" : "#f8f7f4", color: i === tab ? "#ffffff" : "#6b7280" }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="min-h-[148px]">
          {tab === 0 && (
            <div className="space-y-1">
              <div className="grid grid-cols-5 text-[9.5px] font-semibold px-2" style={{ color: "#9ca3af" }}>
                <span>Datum</span><span>Dag</span><span>Pijn</span><span>Mobiliteit</span><span>Slaap</span>
              </div>
              {[["ma 3", "4", "3", "4", "4"], ["zo 2", "3", "4", "3", "3"], ["za 1", "3", "5", "3", "2"], ["vr 31", "2", "6", "2", "3"]].map((r, i) => (
                <div key={r[0]} className="grid grid-cols-5 text-[11.5px] px-2 py-1.5 rounded-lg animate-fade-in-up" style={{ background: "#f8f7f4", animationDelay: `${i * 90}ms`, color: "#1a1a1a" }}>
                  {r.map((c, j) => <span key={j} className={j === 2 && Number(c) >= 6 ? "font-semibold text-red-700" : ""}>{c}</span>)}
                </div>
              ))}
            </div>
          )}
          {tab === 1 && (
            <div className="grid grid-cols-3 gap-2">
              {["Week 2", "Week 4", "Week 6"].map((w, i) => (
                <div key={w} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="aspect-square rounded-xl flex items-center justify-center" style={{ background: ["#efe7df", "#f3ece5", "#f6f1eb"][i] }}>
                    <Camera className="w-5 h-5" style={{ color: "#c8bfb4" }} />
                  </div>
                  <p className="text-[10px] mt-1 text-center" style={{ color: "#9ca3af" }}>{w}</p>
                </div>
              ))}
            </div>
          )}
          {tab === 2 && (
            <div className="space-y-1.5">
              {[["Paracetamol 500 mg", "3 keer per dag", "Afbouwen"], ["Ibuprofen 400 mg", "2 keer per dag", "Gestopt"]].map((m, i) => (
                <div key={m[0]} className="flex items-center justify-between px-3 py-2 rounded-lg animate-fade-in-up" style={{ background: "#f8f7f4", animationDelay: `${i * 90}ms` }}>
                  <div>
                    <p className="text-[12px] font-medium" style={{ color: "#1a1a1a" }}>{m[0]}</p>
                    <p className="text-[10px]" style={{ color: "#9ca3af" }}>{m[1]}</p>
                  </div>
                  <Pill2 tone={i ? "gray" : "green"}>{m[2]}</Pill2>
                </div>
              ))}
            </div>
          )}
          {tab === 3 && (
            <div className="space-y-1.5">
              {[["Mini squat", "3 x 12", true], ["Step-up op opstapje", "3 x 10", true], ["Fietsen op hometrainer", "15 min", false]].map(([t, s, d], i) => (
                <div key={t as string} className="flex items-center gap-2 px-3 py-2 rounded-lg animate-fade-in-up" style={{ background: "#f8f7f4", animationDelay: `${i * 90}ms` }}>
                  <Tick on={d as boolean} />
                  <span className="flex-1 text-[12px]" style={{ color: "#1a1a1a" }}>{t as string}</span>
                  <span className="text-[10.5px]" style={{ color: "#9ca3af" }}>{s as string}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Frame>
    </div>
  );
}

function OefeningenDemo() {
  const { ref, at } = useDemoStep(5);
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-3 items-start">
      <Frame title="Bibliotheek">
        <div className="space-y-1.5">
          {["Glute bridge", "Wandzit (wall sit)", "Step-down", "Nordic hamstring curl"].map((e, i) => (
            <div
              key={e}
              className="flex items-center justify-between text-[11px] px-2.5 py-2 rounded-lg transition-all duration-300"
              style={{ background: i === 2 && at(1) ? "#fff3ee" : "#f8f7f4", color: "#1a1a1a" }}
            >
              <span className="truncate">{e}</span>
              <ChevronRight className="w-3 h-3 shrink-0" style={{ color: i === 2 && at(1) ? ORANGE : "#c4c0b8" }} />
            </div>
          ))}
        </div>
      </Frame>
      <Frame title="Schema fase 2" meta="3 keer per week">
        <div className="space-y-1.5">
          {[["Mini squat", "3 x 12"], ["Step-up op opstapje", "3 x 10"]].map(([t, s]) => (
            <div key={t} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#f8f7f4" }}>
              <Dumbbell className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
              <span className="flex-1 text-[11px] truncate" style={{ color: "#1a1a1a" }}>{t}</span>
              <span className="text-[10px]" style={{ color: "#9ca3af" }}>{s}</span>
            </div>
          ))}
          <div className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border ${show(at(2))}`} style={{ background: "#ffffff", borderColor: "rgba(232,99,42,0.4)" }}>
            <Dumbbell className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
            <span className="flex-1 text-[11px] truncate" style={{ color: "#1a1a1a" }}>Step-down</span>
            <span className="text-[10px] font-semibold transition-colors" style={{ color: at(4) ? ORANGE : "#9ca3af" }}>{at(4) ? "3 x 8" : "3 x 10"}</span>
          </div>
          <p className={`flex items-center gap-1 text-[10px] ${show(at(4))}`} style={{ color: "#9ca3af" }}>
            <Pencil className="w-3 h-3" /> Aangepast voor deze patiënt
          </p>
        </div>
      </Frame>
    </div>
  );
}

// ─── Demo's voor de praktijk ────────────────────────────────────────────────

function TestenDemo() {
  const { ref, at } = useDemoStep(6);
  const results: [string, string, number, number][] = [
    ["Week 6", "71%", 71, 1],
    ["Week 10", "84%", 84, 2],
    ["Week 14", "93%", 93, 3],
  ];
  return (
    <div ref={ref}>
      <Frame title="Single leg hop test" meta="Testen">
        <div className="grid grid-cols-2 gap-2 mb-3.5">
          {[["Links (geopereerd)", at(3) ? "131 cm" : at(2) ? "119 cm" : "101 cm"], ["Rechts", "141 cm"]].map(([l, v]) => (
            <div key={l} className="rounded-xl p-2.5" style={{ background: "#f8f7f4" }}>
              <p className="text-[9.5px]" style={{ color: "#9ca3af" }}>{l}</p>
              <p className="text-base font-semibold tabular-nums" style={{ color: "#1a1a1a" }}>{v}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] font-semibold mb-2" style={{ color: "#6b7280" }}>LSI in de tijd</p>
        <div className="space-y-2 mb-3">
          {results.map(([w, label, pct, k]) => (
            <div key={w} className="grid grid-cols-[56px_1fr_36px] items-center gap-2 text-[11px]">
              <span style={{ color: "#1a1a1a" }}>{w}</span>
              <div className="h-2.5 rounded-full" style={{ background: "#f1ede8" }}>
                <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: at(k) ? `${pct}%` : "0%", background: k === 3 ? ORANGE : "#f2a07a" }} />
              </div>
              <span className="text-right tabular-nums" style={{ color: "#9ca3af" }}>{label}</span>
            </div>
          ))}
        </div>
        <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${show(at(4))}`} style={{ background: "#fff3ee" }}>
          <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
          <span className="text-[11px]" style={{ color: "#1a1a1a" }}>Gekoppeld aan fase 3, zichtbaar voor de patiënt</span>
        </div>
      </Frame>
    </div>
  );
}

function InzichtenDemo() {
  const { ref, at } = useDemoStep(6);
  return (
    <div ref={ref}>
      <Frame title="REVA-inzichten" meta="Sanne de Vries">
        <div className={`rounded-xl p-3 mb-2 ${show(at(1))}`} style={{ background: "#1c1c1e" }}>
          <p className="flex items-center gap-1.5 text-[10.5px] font-semibold mb-1" style={{ color: "#f59e6b" }}>
            <Sparkles className="w-3 h-3" /> Voorstel: dosering
          </p>
          <p className="text-[12.5px] font-semibold text-white">Step-down van 3 x 8 naar 3 x 10</p>
          <p className="text-[10.5px] mt-0.5" style={{ color: "#9ca3af" }}>Pijn bij deze oefening 2 weken lang 2 van 10 of lager</p>
          <div className="flex gap-1.5 mt-2.5">
            <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-md transition-colors duration-300" style={{ background: at(3) ? ORANGE : "rgba(255,255,255,0.12)", color: "#ffffff" }}>
              {at(4) ? "Toegepast" : "Toepassen"}
            </span>
            <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af" }}>Negeren</span>
          </div>
        </div>
        <div className={`rounded-xl p-3 ${show(at(2))}`} style={{ background: "#f8f7f4" }}>
          <p className="flex items-center gap-1.5 text-[10.5px] font-semibold mb-1" style={{ color: ORANGE }}>
            <Sparkles className="w-3 h-3" /> Voorstel: fase-overgang
          </p>
          <p className="text-[12px] font-medium" style={{ color: "#1a1a1a" }}>Alle criteria van fase 2 zijn behaald</p>
        </div>
        <p className={`mt-2.5 text-[10.5px] ${show(at(5))}`} style={{ color: "#9ca3af" }}>
          Altijd een voorstel. Jij beslist.
        </p>
      </Frame>
    </div>
  );
}

function AnalyseDemo() {
  const { ref, at } = useDemoStep(4);
  const bars: [string, number, string][] = [
    ["Enkelverzwikking", 30, "6 wk"],
    ["Meniscus", 52, "10 wk"],
    ["Rotator cuff", 74, "14 wk"],
    ["ACL-reconstructie", 100, "38 wk"],
  ];
  return (
    <div ref={ref}>
      <Frame title="Analyse en rapporten" meta="Dit jaar">
        <p className="text-[11px] font-semibold mb-2" style={{ color: "#6b7280" }}>Behandelduur per blessure</p>
        <div className="space-y-2 mb-4">
          {bars.map(([l, w, v], i) => (
            <div key={l} className="grid grid-cols-[100px_1fr_40px] items-center gap-2 text-[11px]">
              <span className="truncate" style={{ color: "#1a1a1a" }}>{l}</span>
              <div className="h-2.5 rounded-full" style={{ background: "#f1ede8" }}>
                <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: at(i + 1) ? `${w}%` : "0%", background: i === 3 ? ORANGE : "#f2a07a" }} />
              </div>
              <span className="text-right" style={{ color: "#9ca3af" }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl p-3" style={{ background: "#1c1c1e" }}>
            <p className="text-[10px]" style={{ color: "#7c7c8a" }}>Afgesloten, vs. vorige periode</p>
            <p className="text-xl font-semibold text-white">{at(2) ? "184" : at(1) ? "96" : "0"}{at(2) && <span className="text-[11px] font-medium ml-1" style={{ color: "#86efac" }}>+12%</span>}</p>
          </div>
          <div className="rounded-xl p-3" style={{ background: "#f8f7f4" }}>
            <p className="text-[10px]" style={{ color: "#9ca3af" }}>Tevredenheid (NPS)</p>
            <p className="text-xl font-semibold" style={{ color: "#1a1a1a" }}>{at(3) ? "+62" : "..."}</p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

function TeamDemo() {
  const { ref, at } = useDemoStep(5);
  const members: [string, string, "orange" | "gray"][] = [
    ["Anne de Groot", "Praktijkeigenaar", "orange"],
    ["Tom Bakker", "Fysiotherapeut", "gray"],
    ["Femke van Dijk", "Fysiotherapeut", "gray"],
    ["Joyce Smit", "Fysiotherapeut", "gray"],
  ];
  return (
    <div ref={ref}>
      <Frame title="Medewerkers" meta="2 locaties">
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg border" style={{ borderColor: "#e8e5df" }}>
          <UserPlus className="w-3.5 h-3.5" style={{ color: ORANGE }} />
          <span className="flex-1 text-[11.5px]" style={{ color: at(1) ? "#1a1a1a" : "#9ca3af" }}>
            {at(1) ? "joyce@fysiodelinde.nl" : "E-mailadres"}
          </span>
          <span className="text-[10.5px] font-semibold px-2 py-1 rounded-md transition-colors" style={{ background: at(2) ? ORANGE : "#f1ede8", color: at(2) ? "#fff" : "#9ca3af" }}>
            Uitnodigen
          </span>
        </div>
        <div className="space-y-1">
          {members.map(([n, r, tone], i) => (
            <div key={n} className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg ${i === 3 ? show(at(3)) : ""}`}>
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-[10.5px] font-semibold text-white shrink-0" style={{ background: i === 0 ? ORANGE : "#52525e" }}>
                {n[0]}
              </span>
              <span className="flex-1 text-[12px]" style={{ color: "#1a1a1a" }}>{n}</span>
              <Pill2 tone={tone}>{r}</Pill2>
            </div>
          ))}
        </div>
        <p className={`mt-2 text-[10.5px] ${show(at(4))}`} style={{ color: "#9ca3af" }}>
          Patiëntenlijst importeren via CSV, met een controle vooraf.
        </p>
      </Frame>
    </div>
  );
}

function HuisstijlDemo() {
  const { ref, step } = useDemoStep(6, 1000);
  const themes = [
    { color: "#e8632a", name: "Fysio de Linde", letter: "L" },
    { color: "#0f766e", name: "Fysio Noord", letter: "N" },
    { color: "#9d174d", name: "Sportfysio Delta", letter: "D" },
  ];
  const t = themes[Math.min(2, Math.floor(step / 2))];
  return (
    <div ref={ref} className="grid grid-cols-[1fr_auto] gap-4 items-center">
      <Frame title="Huisstijl">
        <p className="text-[11px] mb-2" style={{ color: "#6b7280" }}>Kleur van je praktijk</p>
        <div className="flex gap-2 mb-3">
          {themes.map((th) => (
            <span
              key={th.color}
              className="w-7 h-7 rounded-full transition-all duration-300"
              style={{ background: th.color, outline: th === t ? `2px solid ${th.color}` : "none", outlineOffset: 2 }}
            />
          ))}
        </div>
        <p className="text-[11px] mb-1" style={{ color: "#6b7280" }}>Praktijknaam</p>
        <p className="text-[12.5px] font-medium px-3 py-2 rounded-lg" style={{ background: "#f8f7f4", color: "#1a1a1a" }}>{t.name}</p>
      </Frame>
      <div className="w-[150px] rounded-[1.4rem] p-1.5" style={{ background: "#0e0e10" }}>
        <div className="rounded-[1.1rem] px-2.5 pt-5 pb-3" style={{ background: "#f8f7f4" }}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold text-white transition-colors duration-500" style={{ background: t.color }}>{t.letter}</span>
            <span className="text-[9px] font-semibold truncate" style={{ color: "#1a1a1a" }}>{t.name}</span>
          </div>
          <p className="text-[10px] font-semibold mb-2" style={{ color: "#1a1a1a" }}>Hoe gaat het vandaag?</p>
          <div className="h-1.5 rounded-full mb-2.5" style={{ background: "#e8e5df" }}>
            <div className="h-full w-1/2 rounded-full transition-colors duration-500" style={{ background: t.color }} />
          </div>
          <div className="text-[9px] font-semibold text-white text-center rounded-md py-1.5 transition-colors duration-500" style={{ background: t.color }}>
            Check-in invullen
          </div>
        </div>
      </div>
    </div>
  );
}

function VeiligheidDemo() {
  const { ref, at } = useDemoStep(7);
  const code = "482913";
  const log: [string, string, typeof Eye][] = [
    ["Dossier ingezien", "T. Bakker, 09:14", Eye],
    ["Herstelplan gewijzigd", "F. van Dijk, 09:32", Pencil],
    ["Dossier ingezien", "A. de Groot, 10:05", Eye],
  ];
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-3 items-start">
      <Frame title="Tweestapsverificatie" dark>
        <p className="flex items-center gap-1.5 text-[11px] mb-3" style={{ color: "#9ca3af" }}>
          <Lock className="w-3.5 h-3.5" style={{ color: ORANGE }} /> Code uit je authenticator-app
        </p>
        <div className="grid grid-cols-6 gap-1">
          {code.split("").map((c, i) => (
            <span key={i} className="h-9 rounded-md flex items-center justify-center text-[14px] font-semibold text-white transition-colors" style={{ background: at(1) && i < Math.min(6, 1 + Math.floor((at(3) ? 6 : at(2) ? 4 : 2))) ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)" }}>
              {at(1) && i < (at(3) ? 6 : at(2) ? 4 : 2) ? c : ""}
            </span>
          ))}
        </div>
        <p className={`mt-3 flex items-center gap-1.5 text-[11px] ${show(at(3))}`} style={{ color: "#86efac" }}>
          <Check className="w-3.5 h-3.5" /> Ingelogd
        </p>
      </Frame>
      <Frame title="Activiteitenlog" meta="NEN 7513">
        <div className="space-y-1.5">
          {log.map(([a, w, Icon], i) => (
            <div key={i} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg ${show(at(i + 4))}`} style={{ background: "#f8f7f4" }}>
              <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
              <div className="min-w-0">
                <p className="text-[11.5px] font-medium" style={{ color: "#1a1a1a" }}>{a}</p>
                <p className="text-[10px]" style={{ color: "#9ca3af" }}>{w}</p>
              </div>
            </div>
          ))}
        </div>
      </Frame>
    </div>
  );
}

// ─── Demo's voor de patiënt ─────────────────────────────────────────────────

function CheckinDemo() {
  const { ref, at } = useDemoStep(8);
  const rows: [string, number, number][] = [
    ["Pijn", 3, 10],
    ["Mobiliteit", 4, 5],
    ["Energie", 3, 5],
    ["Stemming", 4, 5],
    ["Slaap", 3, 5],
  ];
  return (
    <div ref={ref}>
      <Phone title="Dagelijkse check-in">
        <p className="text-[13px] font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Hoe was je dag?</p>
        <p className="text-[10px] mb-2.5" style={{ color: "#9ca3af" }}>Dagscore van vandaag</p>
        <div className="grid grid-cols-5 gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="h-7 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors duration-300" style={at(1) && n === 4 ? { background: ORANGE, color: "#fff" } : { background: "#fff", border: "1px solid #e8e5df", color: "#6b7280" }}>
              {n}
            </span>
          ))}
        </div>
        <div className="space-y-2 mb-3">
          {rows.map(([l, v, m], i) => (
            <div key={l} className="flex items-center justify-between">
              <span className="text-[11px]" style={{ color: "#4b5563" }}>{l}</span>
              {m === 10 ? (
                <span className="text-[11px] font-semibold transition-opacity" style={{ color: at(i + 2) ? "#1a1a1a" : "#d1d5db" }}>{at(i + 2) ? `${v} / 10` : "  / 10"}</span>
              ) : (
                <Dots value={v} max={m} on={at(i + 2)} />
              )}
            </div>
          ))}
        </div>
        <div className="text-[11px] font-semibold text-center rounded-lg py-2 transition-all duration-300" style={{ background: at(7) ? "#16a34a" : ORANGE, color: "#fff" }}>
          {at(7) ? "Check-in opgeslagen" : "Check-in opslaan"}
        </div>
      </Phone>
    </div>
  );
}

function TrainingDemo() {
  const { ref, at } = useDemoStep(5);
  const ex: [string, string][] = [["Mini squat", "3 x 12"], ["Step-up op opstapje", "3 x 10"], ["Wandzit (wall sit)", "3 x 30 sec"], ["Fietsen op hometrainer", "15 min"]];
  return (
    <div ref={ref}>
      <Phone title="Training van vandaag">
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#9ca3af" }}>VAN JE FYSIO, FASE 2</p>
        <div className="space-y-1.5 mb-3">
          {ex.map(([t, s], i) => (
            <div key={t} className="flex items-center gap-2 bg-white border rounded-xl px-2.5 py-2" style={{ borderColor: "#e8e5df" }}>
              <Tick on={at(i + 1)} />
              <div className="min-w-0">
                <p className="text-[11px] font-medium truncate" style={{ color: "#1a1a1a" }}>{t}</p>
                <p className="text-[9.5px]" style={{ color: "#9ca3af" }}>{s}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`rounded-xl px-3 py-2 text-[10.5px] ${show(at(5))}`} style={{ background: "#fff3ee", color: "#1a1a1a" }}>
          Sessie gelogd. Pijn bij step-up: 2 van 10
        </div>
      </Phone>
    </div>
  );
}

function MedicatieDemo() {
  const { ref, at } = useDemoStep(5);
  return (
    <div ref={ref}>
      <Phone title="Medicatie">
        <div className={`flex items-start gap-2 rounded-xl px-3 py-2.5 mb-3 ${show(at(1))}`} style={{ background: "#1c1c1e" }}>
          <Bell className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: ORANGE }} />
          <div>
            <p className="text-[10.5px] font-semibold text-white">Herinnering, 08:00</p>
            <p className="text-[10px]" style={{ color: "#9ca3af" }}>Tijd voor Paracetamol 500 mg</p>
          </div>
        </div>
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#9ca3af" }}>INNAMES VANDAAG</p>
        <div className="space-y-1.5">
          {[["08:00", 2], ["14:00", 4], ["20:00", 9]].map(([t, k]) => (
            <div key={t as string} className="flex items-center gap-2 bg-white border rounded-xl px-2.5 py-2" style={{ borderColor: "#e8e5df" }}>
              <Pill className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
              <span className="flex-1 text-[11px]" style={{ color: "#1a1a1a" }}>Paracetamol 500 mg</span>
              <span className="text-[10px]" style={{ color: "#9ca3af" }}>{t as string}</span>
              <Tick on={at(k as number)} />
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9.5px]" style={{ color: "#9ca3af" }}>REVA geeft geen medisch advies.</p>
      </Phone>
    </div>
  );
}

function DoelenDemo() {
  const { ref, at } = useDemoStep(5);
  const pct = at(4) ? 75 : at(3) ? 60 : at(2) ? 45 : at(1) ? 30 : 15;
  return (
    <div ref={ref}>
      <Phone title="Doelstellingen">
        <div className="rounded-xl p-3 mb-3" style={{ background: "#1c1c1e" }}>
          <p className="text-[9.5px]" style={{ color: "#7c7c8a" }}>Hoofddoel, streefdatum 1 maart</p>
          <p className="text-[12.5px] font-semibold text-white mb-2">Weer voetballen met mijn team</p>
          <div className="h-1.5 rounded-full" style={{ background: "#3f3f46" }}>
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: ORANGE }} />
          </div>
          <p className="text-[9.5px] mt-1.5" style={{ color: "#9ca3af" }}>{pct}% van het hersteltraject</p>
        </div>
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#9ca3af" }}>MIJLPALEN</p>
        <div className="space-y-1.5">
          {["Zonder krukken lopen", "Traplopen zonder pijn", "Hardlopen 10 minuten"].map((m, i) => (
            <div key={m} className="flex items-center gap-2 bg-white border rounded-xl px-2.5 py-2" style={{ borderColor: "#e8e5df" }}>
              <Tick on={at(i + 1) && i < 2 ? true : i === 2 && at(4)} />
              <span className="text-[11px]" style={{ color: "#1a1a1a" }}>{m}</span>
            </div>
          ))}
        </div>
        <div className={`mt-3 flex items-center gap-2 rounded-xl px-3 py-2 ${show(at(4))}`} style={{ background: "#f0fdf4" }}>
          <Trophy className="w-3.5 h-3.5" style={{ color: "#15803d" }} />
          <span className="text-[10.5px] font-semibold" style={{ color: "#15803d" }}>Sterk, deze is behaald!</span>
        </div>
      </Phone>
    </div>
  );
}

function InzichtDemo() {
  const { ref, at } = useDemoStep(4);
  const day = "0,62 20,58 40,60 60,50 80,46 100,40 120,36 140,30 160,26 180,22";
  const pain = "0,30 20,34 40,32 60,36 80,34 100,36 120,35 140,37 160,36 180,38";
  return (
    <div ref={ref}>
      <Phone title="Mijn herstel">
        <p className="text-[10px] font-semibold mb-1" style={{ color: "#9ca3af" }}>VOORTGANG</p>
        <p className="text-[12px] font-semibold mb-2" style={{ color: "#1a1a1a" }}>Mobiliteit en pijn</p>
        <div className="bg-white border rounded-xl p-2.5 mb-3" style={{ borderColor: "#e8e5df" }}>
          <svg viewBox="0 0 180 70" className="w-full h-20 overflow-visible">
            <polyline points={day} fill="none" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: at(1) ? 0 : 1, transition: "stroke-dashoffset 1.4s ease-out" }} />
            <polyline points={pain} fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="0" strokeLinecap="round" pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: at(2) ? 0 : 1, transition: "stroke-dashoffset 1.4s ease-out" }} />
          </svg>
          <div className="flex gap-3 text-[9.5px]" style={{ color: "#6b7280" }}>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: ORANGE }} /> Mobiliteit</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#9ca3af" }} /> Pijn</span>
          </div>
        </div>
        <p className="text-[10px] font-semibold mb-1.5" style={{ color: "#9ca3af" }}>BEREIKT</p>
        <div className={`rounded-xl px-3 py-2 text-[10.5px] mb-1.5 ${show(at(3))}`} style={{ background: "#fff3ee", color: "#1a1a1a" }}>
          Fase 2 afgerond: traplopen zonder pijn
        </div>
        <div className={`rounded-xl px-3 py-2 text-[10.5px] ${show(at(4))}`} style={{ background: "#f8f7f4", border: "1px solid #e8e5df", color: "#1a1a1a" }}>
          Testresultaat hop test: 93% van je andere been
        </div>
      </Phone>
    </div>
  );
}

function PatientDossierDemo() {
  const { ref, at } = useDemoStep(6);
  return (
    <div ref={ref}>
      <Phone title="Dossier">
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#9ca3af" }}>FOTO UPDATES</p>
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {["Week 2", "Week 4", "Week 6"].map((w, i) => (
            <div key={w} className={show(at(i + 1))}>
              <div className="aspect-square rounded-lg flex items-center justify-center" style={{ background: ["#efe7df", "#f3ece5", "#f6f1eb"][i] }}>
                <Camera className="w-4 h-4" style={{ color: "#c8bfb4" }} />
              </div>
              <p className="text-[9px] text-center mt-0.5" style={{ color: "#9ca3af" }}>{w}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#9ca3af" }}>DOCUMENTEN</p>
        <div className="space-y-1.5 mb-3">
          {[["Operatieverslag", 4], ["Verwijsbrief huisarts", 5]].map(([d, k]) => (
            <div key={d as string} className={`flex items-center gap-2 bg-white border rounded-xl px-2.5 py-2 ${show(at(k as number))}`} style={{ borderColor: "#e8e5df" }}>
              <FileText className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
              <span className="text-[11px]" style={{ color: "#1a1a1a" }}>{d as string}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-semibold mb-1.5" style={{ color: "#9ca3af" }}>MIJN AFSPRAKEN</p>
        <div className={`flex items-center gap-2 bg-white border rounded-xl px-2.5 py-2 ${show(at(6))}`} style={{ borderColor: "#e8e5df" }}>
          <span className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold text-white" style={{ background: ORANGE }}>14</span>
          <div>
            <p className="text-[11px] font-medium" style={{ color: "#1a1a1a" }}>Controle orthopeed</p>
            <p className="text-[9.5px]" style={{ color: "#9ca3af" }}>Ziekenhuis, 10:30</p>
          </div>
        </div>
      </Phone>
    </div>
  );
}

// ─── Kiezer ─────────────────────────────────────────────────────────────────

const demos: Record<DemoKey, () => React.JSX.Element> = {
  intake: IntakeDemo,
  herstelplan: HerstelplanDemo,
  signalering: SignaleringDemo,
  dossier: DossierDemo,
  oefeningen: OefeningenDemo,
  analyse: AnalyseDemo,
  team: TeamDemo,
  huisstijl: HuisstijlDemo,
  veiligheid: VeiligheidDemo,
  checkin: CheckinDemo,
  training: TrainingDemo,
  medicatie: MedicatieDemo,
  doelen: DoelenDemo,
  inzicht: InzichtDemo,
  patientdossier: PatientDossierDemo,
  testen: TestenDemo,
  inzichten: InzichtenDemo,
};

/** Korte, rustige animatie van een functie zoals die in het dashboard werkt. */
export function FeatureDemo({ demo }: { demo: DemoKey }) {
  const Demo = demos[demo];
  return (
    <div aria-hidden="true" className="select-none">
      <Demo />
    </div>
  );
}
