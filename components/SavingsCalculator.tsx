"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Wallet, Euro, CalendarPlus, TrendingUp } from "lucide-react";
import { computeSavings, euroRound, nl1, savingsDefaults, savingsLimits, TREATMENT_MINUTES, WORK_WEEKS, type SavingsInput } from "@/lib/savings";
import { demoHref } from "@/lib/pricing";

const ORANGE = "#e8632a";

type Field = {
  key: Exclude<keyof SavingsInput, "yearly">;
  label: string;
  help: string;
  step: number;
  format: (n: number) => string;
};

const groups: { title: string; fields: Field[] }[] = [
  {
    title: "Je praktijk",
    fields: [
      { key: "seats", label: "Behandelaars", help: "Fysiotherapeuten en praktijkeigenaren die behandelen", step: 1, format: (n) => `${n}` },
      { key: "daysPerWeek", label: "Werkdagen per behandelaar", help: "Gemiddeld per week", step: 0.5, format: (n) => `${nl1(n)} ${n === 1 ? "dag" : "dagen"}` },
    ],
  },
  {
    title: "Contact buiten de behandeling",
    fields: [
      { key: "contactsPerDay", label: "Contactmomenten per dag", help: "Per behandelaar: telefoontjes, appjes, vragen via de balie", step: 1, format: (n) => `${n}` },
      { key: "minutesPerContact", label: "Minuten per contactmoment", help: "Inclusief terugbellen, vastleggen en een collega bijpraten", step: 1, format: (n) => `${n} min` },
    ],
  },
  {
    title: "Aannames",
    fields: [
      { key: "reductionPct", label: "Minder contactmomenten met REVA", help: "Doordat patiënten zelf een check-in doen en jij ziet wie aandacht nodig heeft", step: 5, format: (n) => `${n}%` },
      { key: "hourValue", label: "Waarde van een uur", help: "Wat een uur van een behandelaar je praktijk oplevert", step: 5, format: (n) => euroRound(n) },
    ],
  },
];

/** Interactieve tool: hoeveel tijd en geld een praktijk terugwint met REVA. */
export function SavingsCalculator({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const [input, setInput] = useState<SavingsInput>(savingsDefaults);
  const r = computeSavings(input);
  const set = (key: Field["key"], value: number) => setInput((prev) => ({ ...prev, [key]: value }));
  const H = headingLevel;
  const withReva = Math.max(0, r.hoursNowPerWeek - r.hoursSavedPerWeek);
  const pctWithReva = r.hoursNowPerWeek > 0 ? (withReva / r.hoursNowPerWeek) * 100 : 0;

  return (
    <div className="rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]" style={{ borderColor: "#e8e5df", background: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      {/* Invoer */}
      <div className="p-6 md:p-8 space-y-7">
        {groups.map((g) => (
          <fieldset key={g.title} className="space-y-5 min-w-0">
            <legend className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>{g.title}</legend>
            {g.fields.map((f) => {
              const [min, max] = savingsLimits[f.key];
              const value = input[f.key];
              const id = `besparing-${f.key}`;
              return (
                <div key={f.key}>
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <label htmlFor={id} className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{f.label}</label>
                    <output htmlFor={id} className="text-sm font-semibold tabular-nums shrink-0" style={{ color: "#1a1a1a" }}>{f.format(value)}</output>
                  </div>
                  <input
                    id={id}
                    type="range"
                    min={min}
                    max={max}
                    step={f.step}
                    value={value}
                    onChange={(e) => set(f.key, Number(e.target.value))}
                    aria-valuetext={f.format(value)}
                    aria-describedby={`${id}-help`}
                    className="w-full accent-[#e8632a]"
                  />
                  <p id={`${id}-help`} className="text-xs mt-1" style={{ color: "#9ca3af" }}>{f.help}</p>
                </div>
              );
            })}
          </fieldset>
        ))}
      </div>

      {/* Uitkomst */}
      <div className="p-6 md:p-8 flex flex-col" style={{ background: "#1c1c1e" }} aria-live="polite">
        <H className="text-sm font-medium mb-2" style={{ color: "#9ca3af" }}>Tijd die je praktijk terugwint</H>
        <p className="mb-1">
          <span className="text-5xl md:text-6xl font-bold tracking-tight tabular-nums text-white">{nl1(r.hoursSavedPerWeek)}</span>
          <span className="text-lg ml-2" style={{ color: "#c9c9ce" }}>uur per week</span>
        </p>
        <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
          Dat is {Math.round(r.hoursSavedPerYear).toLocaleString("nl-NL")} uur per jaar, over {WORK_WEEKS} werkweken.
        </p>

        {/* Nu tegenover met REVA */}
        <div className="space-y-2.5 mb-7" aria-hidden="true">
          <div>
            <div className="flex justify-between text-xs mb-1" style={{ color: "#9ca3af" }}>
              <span>Nu, per week</span><span className="tabular-nums">{nl1(r.hoursNowPerWeek)} uur</span>
            </div>
            <div className="h-2.5 rounded-full" style={{ background: "#52525e" }} />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1" style={{ color: "#9ca3af" }}>
              <span>Met REVA, per week</span><span className="tabular-nums">{nl1(withReva)} uur</span>
            </div>
            <div className="h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pctWithReva}%`, background: ORANGE }} />
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: CalendarPlus, label: "Ruimte voor extra behandelingen", value: `${Math.round(r.treatmentsPerMonth)} per maand`, note: `van ${TREATMENT_MINUTES} minuten` },
            { icon: Euro, label: "Waarde van die tijd", value: `${euroRound(r.valuePerYear)}`, note: "per jaar" },
            { icon: Wallet, label: "REVA kost", value: `${euroRound(r.revaPerYear)}`, note: input.yearly ? "per jaar, jaarlijks betaald" : "per jaar, incl. btw" },
            { icon: TrendingUp, label: "Netto voordeel", value: `${euroRound(r.netPerYear)}`, note: r.returnMultiple >= 1 ? `${nl1(r.returnMultiple)} keer de kosten` : "per jaar" },
          ].map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="rounded-xl p-3.5" style={{ background: "rgba(255,255,255,0.05)" }}>
              <dt className="flex items-center gap-1.5 text-[11px] mb-1" style={{ color: "#9ca3af" }}>
                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} /> {label}
              </dt>
              <dd className="text-base sm:text-lg font-semibold tabular-nums text-white leading-tight">{value}</dd>
              <dd className="text-[11px]" style={{ color: "#7c7c8a" }}>{note}</dd>
            </div>
          ))}
        </dl>

        <label className="flex items-center gap-2.5 text-sm mb-6 cursor-pointer" style={{ color: "#c9c9ce" }}>
          <input
            type="checkbox"
            id="besparing-jaarlijks"
            checked={input.yearly}
            onChange={(e) => setInput((prev) => ({ ...prev, yearly: e.target.checked }))}
            className="w-4 h-4 accent-[#e8632a]"
          />
          Jaarlijks betalen (2 maanden gratis)
        </label>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Link
            href={demoHref(r.input.seats, input.yearly)}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-white transition-colors duration-150"
            style={{ background: ORANGE }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#d4581f"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = ORANGE; }}
          >
            Bespreek dit in een demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/prijzen"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm transition-colors"
            style={{ color: "#ffffff", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            Bekijk de prijzen
          </Link>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed" style={{ color: "#7c7c8a" }}>
          Een schatting op basis van jouw invoer. De uitgangspunten komen uit ons{" "}
          <Link href="/blog/tijd-besparen-patientcommunicatie-fysiopraktijk" className="underline underline-offset-2">rekenvoorbeeld voor fysiopraktijken</Link>.
          De werkelijke tijdwinst hangt af van je werkwijze.
        </p>
      </div>
    </div>
  );
}
