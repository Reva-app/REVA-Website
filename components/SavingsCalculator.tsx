"use client";

import { useRef, useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import Link from "next/link";
import { ArrowRight, Wallet, Euro, CalendarPlus, TrendingUp, Minus, Plus, Calculator, RotateCcw } from "lucide-react";
import { computeSavings, euroRound, nl1, savingsDefaults, savingsLimits, TREATMENT_MINUTES, WORK_WEEKS } from "@/lib/savings";
import { demoHref } from "@/lib/pricing";

const ORANGE = "#e8632a";

// Wat de praktijk zelf invult. Alle andere aannames staan vast in savingsDefaults.
type PracticeInput = { seats: number; daysPerWeek: number };

const fields: {
  key: keyof PracticeInput;
  label: string;
  help: string;
  step: number;
  unit: (n: number) => string;
}[] = [
  { key: "seats", label: "Aantal behandelaars", help: "Fysiotherapeuten en praktijkeigenaren die behandelen", step: 1, unit: (n) => (n === 1 ? "behandelaar" : "behandelaars") },
  { key: "daysPerWeek", label: "Werkdagen per behandelaar", help: "Gemiddeld per week, halve dagen mag ook", step: 0.5, unit: (n) => (n === 1 ? "dag per week" : "dagen per week") },
];

/** Vaste aannames, zichtbaar onder de invoer */
const fixedAssumptions = [
  `${savingsDefaults.contactsPerDay} contactmomenten per behandelaar per dag (bellen, appjes, balie)`,
  `${savingsDefaults.minutesPerContact} minuten per contactmoment, inclusief terugbellen en vastleggen`,
  `${savingsDefaults.reductionPct}% minder contactmomenten met REVA`,
  `${euroRound(savingsDefaults.hourValue)} per uur, over ${WORK_WEEKS} werkweken per jaar`,
];

/** Leest een getal uit een invulveld (komma of punt), of null als het geen getal is */
function parse(raw: string) {
  const n = Number(raw.replace(",", ".").trim());
  return raw.trim() !== "" && Number.isFinite(n) ? n : null;
}

/** Interactieve tool: de praktijk vult haar gegevens in en berekent hoeveel tijd en geld ze terugwint. */
export function SavingsCalculator({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const [values, setValues] = useState<Record<keyof PracticeInput, string>>({
    seats: String(savingsDefaults.seats),
    daysPerWeek: String(savingsDefaults.daysPerWeek),
  });
  const [errors, setErrors] = useState<Partial<Record<keyof PracticeInput, string>>>({});
  const [calculated, setCalculated] = useState<PracticeInput | null>(null);
  const [yearly, setYearly] = useState(false);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const H = headingLevel;

  const validate = (): PracticeInput | null => {
    const next: typeof errors = {};
    const out = {} as PracticeInput;
    for (const f of fields) {
      const [min, max] = savingsLimits[f.key];
      const n = parse(values[f.key]);
      if (n === null) next[f.key] = "Vul een getal in.";
      else if (n < min || n > max) next[f.key] = `Vul een getal tussen ${min} en ${max} in.`;
      else if (f.key === "seats" && !Number.isInteger(n)) next[f.key] = "Vul een heel aantal behandelaars in.";
      else if (f.key === "daysPerWeek" && Math.round(n * 2) !== n * 2) next[f.key] = "Gebruik hele of halve dagen, zoals 4 of 4,5.";
      else out[f.key] = n;
    }
    setErrors(next);
    return Object.keys(next).length ? null : out;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const input = validate();
    if (!input) return;
    setCalculated(input);
    const res = computeSavings({ ...savingsDefaults, ...input });
    track("savings_calculated", {
      behandelaars: input.seats,
      werkdagen: input.daysPerWeek,
      uren_per_week: Math.round(res.hoursSavedPerWeek * 10) / 10,
      value: Math.round(res.valuePerYear),
      currency: "EUR",
    });
    // Na het berekenen de uitkomst in beeld en voorlezen
    requestAnimationFrame(() => {
      resultRef.current?.focus({ preventScroll: true });
      if (window.matchMedia("(max-width: 1023px)").matches) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const step = (key: keyof PracticeInput, dir: 1 | -1) => {
    const f = fields.find((x) => x.key === key)!;
    const [min, max] = savingsLimits[key];
    const current = parse(values[key]) ?? savingsDefaults[key];
    const next = Math.min(max, Math.max(min, Math.round((current + dir * f.step) * 2) / 2));
    setValues((v) => ({ ...v, [key]: String(next).replace(".", ",") }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const dirty =
    calculated !== null &&
    (parse(values.seats) !== calculated.seats || parse(values.daysPerWeek) !== calculated.daysPerWeek);

  const r = calculated ? computeSavings({ ...savingsDefaults, ...calculated, yearly }) : null;
  const withReva = r ? Math.max(0, r.hoursNowPerWeek - r.hoursSavedPerWeek) : 0;
  const pctWithReva = r && r.hoursNowPerWeek > 0 ? (withReva / r.hoursNowPerWeek) * 100 : 0;

  return (
    <div className="rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]" style={{ borderColor: "#e8e5df", background: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      {/* Invoer */}
      <form onSubmit={submit} noValidate className="p-6 md:p-8 flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: ORANGE }}>Je praktijk</p>
        <div className="space-y-6 mb-7">
          {fields.map((f) => {
            const id = `besparing-${f.key}`;
            const err = errors[f.key];
            const n = parse(values[f.key]);
            return (
              <div key={f.key}>
                <label htmlFor={id} className="block text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>{f.label}</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => step(f.key, -1)}
                    aria-label={`${f.label}: minder`}
                    className="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 transition-colors hover:bg-[#f1ede8]"
                    style={{ borderColor: "#e8e5df", color: "#374151" }}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    id={id}
                    type="text"
                    inputMode={f.key === "seats" ? "numeric" : "decimal"}
                    value={values[f.key]}
                    onChange={(e) => {
                      setValues((v) => ({ ...v, [f.key]: e.target.value }));
                      if (err) setErrors((er) => ({ ...er, [f.key]: undefined }));
                    }}
                    aria-invalid={!!err}
                    aria-describedby={`${id}-help${err ? ` ${id}-error` : ""}`}
                    className="w-24 h-11 rounded-lg border px-3 text-center text-lg font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#e8632a]/40"
                    style={{ borderColor: err ? "#dc2626" : "#e8e5df", color: "#1a1a1a" }}
                  />
                  <button
                    type="button"
                    onClick={() => step(f.key, 1)}
                    aria-label={`${f.label}: meer`}
                    className="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 transition-colors hover:bg-[#f1ede8]"
                    style={{ borderColor: "#e8e5df", color: "#374151" }}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="text-sm ml-1" style={{ color: "#6b7280" }}>{f.unit(n ?? 2)}</span>
                </div>
                {err ? (
                  <p id={`${id}-error`} className="text-xs mt-1.5" style={{ color: "#dc2626" }}>{err}</p>
                ) : null}
                <p id={`${id}-help`} className="text-xs mt-1.5" style={{ color: "#9ca3af" }}>{f.help}</p>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-base text-white transition-colors duration-150 mb-7"
          style={{ background: ORANGE }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#d4581f"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = ORANGE; }}
        >
          {calculated ? <RotateCcw className="w-4 h-4" /> : <Calculator className="w-4 h-4" />}
          {calculated ? "Opnieuw berekenen" : "Bereken mijn besparing"}
        </button>

        <div className="mt-auto rounded-xl p-4" style={{ background: "#f8f7f4" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "#1a1a1a" }}>Hiermee rekenen we</p>
          <ul className="space-y-1">
            {fixedAssumptions.map((a) => (
              <li key={a} className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{a}</li>
            ))}
          </ul>
        </div>
      </form>

      {/* Uitkomst */}
      <div className="p-6 md:p-8 flex flex-col" style={{ background: "#1c1c1e" }}>
        <div aria-live="polite" className="flex flex-col flex-1">
          {!r ? (
            <div className="flex-1 flex flex-col justify-center py-6">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(232,99,42,0.16)" }}>
                <Calculator className="w-6 h-6" style={{ color: ORANGE }} />
              </span>
              <H className="text-xl md:text-2xl font-semibold text-white mb-2">Jouw besparing verschijnt hier</H>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#9ca3af" }}>
                Vul het aantal behandelaars en werkdagen in en klik op Bereken mijn besparing. Je ziet dan hoeveel uur
                per week je praktijk terugwint, wat die tijd waard is en wat REVA kost.
              </p>
            </div>
          ) : (
            <>
              <H ref={resultRef} tabIndex={-1} className="scroll-mt-24 text-sm font-medium mb-2 focus:outline-none" style={{ color: "#9ca3af" }}>
                Tijd die je praktijk terugwint, met {calculated!.seats} {calculated!.seats === 1 ? "behandelaar" : "behandelaars"}
              </H>
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
                  { icon: Euro, label: "Waarde van die tijd", value: euroRound(r.valuePerYear), note: "per jaar" },
                  { icon: Wallet, label: "REVA kost", value: euroRound(r.revaPerYear), note: yearly ? "per jaar, jaarlijks betaald" : "per jaar, incl. btw" },
                  { icon: TrendingUp, label: "Netto voordeel", value: euroRound(r.netPerYear), note: r.returnMultiple >= 1 ? `${nl1(r.returnMultiple)} keer de kosten` : "per jaar" },
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

              <label className="flex items-center gap-2.5 text-sm mb-4 cursor-pointer" style={{ color: "#c9c9ce" }}>
                <input
                  type="checkbox"
                  id="besparing-jaarlijks"
                  checked={yearly}
                  onChange={(e) => setYearly(e.target.checked)}
                  className="w-4 h-4 accent-[#e8632a]"
                />
                Jaarlijks betalen (2 maanden gratis)
              </label>
              {dirty && (
                <p className="text-xs mb-4 rounded-lg px-3 py-2" style={{ background: "rgba(232,99,42,0.14)", color: "#f5c4ad" }}>
                  Je hebt de invoer aangepast. Klik op Opnieuw berekenen voor de nieuwe uitkomst.
                </p>
              )}
            </>
          )}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Link
            href={demoHref(calculated?.seats ?? savingsDefaults.seats, yearly)}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-white transition-colors duration-150"
            style={{ background: r ? ORANGE : "rgba(255,255,255,0.08)" }}
          >
            {r ? "Bespreek dit in een demo" : "Liever samen rekenen? Plan een demo"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {r && (
            <Link
              href="/prijzen"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm transition-colors"
              style={{ color: "#ffffff", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              Bekijk de prijzen
            </Link>
          )}
        </div>
        <p className="mt-4 text-[11px] leading-relaxed" style={{ color: "#7c7c8a" }}>
          Een schatting op basis van jouw invoer en de vaste aannames links. De uitgangspunten komen uit ons{" "}
          <Link href="/blog/tijd-besparen-patientcommunicatie-fysiopraktijk" className="underline underline-offset-2">rekenvoorbeeld voor fysiopraktijken</Link>.
          De werkelijke tijdwinst hangt af van je werkwijze.
        </p>
      </div>
    </div>
  );
}
