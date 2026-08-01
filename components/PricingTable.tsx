"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { pricingTiers } from "@/lib/pricing";

function formatPrice(value: number) {
  return value.toLocaleString("nl-NL");
}

function formatMonthlyEquivalent(value: number) {
  return value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function PricingTable() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-10 md:mb-14">
        <span className="text-sm font-medium" style={{ color: yearly ? "#9ca3af" : "#1a1a1a" }}>
          Maandelijks
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Wissel tussen maandelijkse en jaarlijkse facturatie"
          onClick={() => setYearly((v) => !v)}
          className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors"
          style={{ background: yearly ? "#e8632a" : "#e8e5df" }}
        >
          <span
            className="inline-block h-5 w-5 rounded-full bg-white shadow transition-transform"
            style={{ transform: yearly ? "translateX(22px)" : "translateX(3px)" }}
          />
        </button>
        <span className="flex items-center gap-2 text-sm font-medium" style={{ color: yearly ? "#1a1a1a" : "#9ca3af" }}>
          Jaarlijks
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "#fff3ee", color: "#e8632a" }}
          >
            2 maanden gratis
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {pricingTiers.map((tier, i) => {
          const monthlyEquivalent = tier.yearly / 12;
          return (
            <AnimateIn key={tier.name} direction="up" delay={i * 80} className="h-full">
              <div
                className="relative h-full flex flex-col rounded-2xl p-6 md:p-7"
                style={{
                  background: tier.popular ? "#1c1c1e" : "#ffffff",
                  border: tier.popular ? "none" : "1px solid #e8e5df",
                  boxShadow: tier.popular ? "0 20px 40px rgba(0,0,0,0.18)" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "#e8632a", color: "#ffffff" }}
                  >
                    Meest gekozen
                  </span>
                )}

                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: tier.popular ? "#e8632a" : "#e8632a" }}
                >
                  {tier.name}
                </p>

                <div className="mb-1 flex items-end gap-1.5">
                  {tier.enterprise && (
                    <span className="text-sm font-medium mb-1.5" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}>
                      vanaf
                    </span>
                  )}
                  <span className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: tier.popular ? "#ffffff" : "#1a1a1a" }}>
                    &euro;{yearly ? formatMonthlyEquivalent(monthlyEquivalent) : formatPrice(tier.monthly)}
                  </span>
                  <span className="text-sm mb-1" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}>
                    / maand
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: tier.popular ? "#6b7280" : "#9ca3af", minHeight: "1rem" }}>
                  {yearly ? `€${formatPrice(tier.yearly)} gefactureerd per jaar` : " "}
                </p>
                <p className="text-sm mb-6" style={{ color: tier.popular ? "#9ca3af" : "#6b7280" }}>
                  {tier.tagline}
                </p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#e8632a" }}
                      />
                      <span style={{ color: tier.popular ? "#d1d5db" : "#374151" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-colors duration-300"
                  style={
                    tier.popular
                      ? { background: "#e8632a", color: "#ffffff" }
                      : { background: "#f8f7f4", color: "#1a1a1a", border: "1px solid #e8e5df" }
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = tier.popular ? "#d4581f" : "#f1ede8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = tier.popular ? "#e8632a" : "#f8f7f4";
                  }}
                >
                  {tier.enterprise ? "Neem contact op" : "Vraag een demo aan"}
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
