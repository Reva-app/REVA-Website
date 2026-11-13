"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Minus, Plus } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  CALCULATOR_MAX,
  demoHref,
  euro,
  includedInPrice,
  maatwerk,
  maatwerkContactHref,
  monthlyPrice,
  PRICING,
  TRIAL_DAYS,
  vatNote,
  whoCounts,
  yearlyPrice,
} from "@/lib/pricing";

const behandelaars = (n: number) => `${n} ${n === 1 ? "behandelaar" : "behandelaars"}`;

/** Prijscalculator: aantal behandelaars, maand of jaar, alles inclusief btw. */
export function PricingCalculator() {
  const [seats, setSeats] = useState(3);
  const [yearly, setYearly] = useState(false);

  const set = (n: number) => setSeats(Math.min(CALCULATOR_MAX, Math.max(1, n)));
  const total = yearly ? yearlyPrice(seats) : monthlyPrice(seats);
  const regular = Math.min(seats, PRICING.staffelFrom - 1);
  const staffel = Math.max(0, seats - regular);
  const factor = yearly ? PRICING.yearlyMonths : 1;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 items-stretch">
        <AnimateIn direction="up" className="h-full">
          <div className="h-full rounded-2xl p-6 md:p-8" style={{ background: "#1c1c1e", boxShadow: "0 20px 40px rgba(0,0,0,0.18)" }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="text-sm font-medium" style={{ color: yearly ? "#7c7c8a" : "#ffffff" }}>
                Maandelijks
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={yearly}
                aria-label="Wissel tussen maandelijks en jaarlijks betalen"
                onClick={() => setYearly((v) => !v)}
                className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors"
                style={{ background: yearly ? "#e8632a" : "#3f3f46" }}
              >
                <span
                  className="inline-block h-5 w-5 rounded-full bg-white shadow transition-transform"
                  style={{ transform: yearly ? "translateX(22px)" : "translateX(3px)" }}
                />
              </button>
              <span className="flex flex-wrap items-center gap-2 text-sm font-medium" style={{ color: yearly ? "#ffffff" : "#7c7c8a" }}>
                Jaarlijks
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#fff3ee", color: "#e8632a" }}>
                  2 maanden gratis
                </span>
              </span>
            </div>

            <label htmlFor="behandelaars" className="block text-sm mb-3" style={{ color: "#9ca3af" }}>
              Aantal behandelaars
            </label>
            <div className="flex items-center gap-3 mb-4">
              <button
                type="button"
                onClick={() => set(seats - 1)}
                disabled={seats <= 1}
                aria-label="Eén behandelaar minder"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-40"
                style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff" }}
              >
                <Minus className="w-4 h-4" />
              </button>
              <output
                htmlFor="behandelaars"
                aria-live="polite"
                className="min-w-[3ch] text-center text-3xl font-bold tabular-nums text-white"
              >
                {seats}
              </output>
              <button
                type="button"
                onClick={() => set(seats + 1)}
                disabled={seats >= CALCULATOR_MAX}
                aria-label="Eén behandelaar meer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-40"
                style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff" }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <input
              id="behandelaars"
              type="range"
              min={1}
              max={CALCULATOR_MAX}
              value={seats}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full mb-8 accent-[#e8632a]"
              aria-valuetext={behandelaars(seats)}
            />

            <div className="flex items-end gap-2 mb-1">
              <span className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums text-white">{euro(total)}</span>
              <span className="text-sm mb-1.5" style={{ color: "#9ca3af" }}>
                per {yearly ? "jaar" : "maand"}, incl. btw
              </span>
            </div>
            <p className="text-sm mb-7" style={{ color: "#9ca3af" }}>
              {regular} × {euro(PRICING.seatPrice * factor)}
              {staffel > 0 && <> + {staffel} × {euro(PRICING.staffelPrice * factor)}</>} per {yearly ? "jaar" : "maand"}
              {yearly && <> · {euro(Math.round(total / 12))} per maand</>}
            </p>

            <Link
              href={demoHref(seats, yearly)}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white transition-colors duration-150"
              style={{ background: "#e8632a" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4581f"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#e8632a"; }}
            >
              Plan een demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="mt-3 text-xs" style={{ color: "#7c7c8a" }}>
              Of probeer REVA {TRIAL_DAYS} dagen gratis.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={100} className="h-full">
          <div className="h-full rounded-2xl p-6 md:p-8" style={{ background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#e8632a" }}>
              Per behandelaar
            </p>
            <p className="mb-1">
              <span className="text-3xl font-bold tracking-tight" style={{ color: "#1a1a1a" }}>{euro(PRICING.seatPrice)}</span>
              <span className="text-sm" style={{ color: "#6b7280" }}> per maand, incl. btw</span>
            </p>
            <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
              Vanaf de {PRICING.staffelFrom}e behandelaar {euro(PRICING.staffelPrice)} per maand.
            </p>
            <ul className="space-y-2.5">
              {includedInPrice.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#e8632a" }} />
                  <span style={{ color: "#374151" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      </div>

      {/* Maatwerk: rustige brede balk onder de calculator */}
      <AnimateIn direction="up" delay={200}>
        <div
          className="mt-5 rounded-2xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
          style={{ background: "#f8f7f4", border: "1px solid #e8e5df" }}
        >
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>
              <span className="text-xs uppercase tracking-widest" style={{ color: "#e8632a" }}>
                {maatwerk.name}
              </span>
              <span className="mx-2" style={{ color: "#c4c0b8" }}>&middot;</span>
              prijs op aanvraag
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>{maatwerk.description}</p>
          </div>
          <Link
            href={maatwerkContactHref}
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-colors duration-150 shrink-0"
            style={{ background: "#ffffff", color: "#1a1a1a", border: "1px solid #e8e5df" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f1ede8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
          >
            Neem contact op
            <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        </div>
      </AnimateIn>

      <div className="mt-6 space-y-1 text-center text-xs" style={{ color: "#9ca3af" }}>
        <p>{vatNote}</p>
        <p>{whoCounts}</p>
      </div>
    </div>
  );
}
