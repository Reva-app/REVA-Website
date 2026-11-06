import Link from "next/link";
import { ArrowRight, BadgePercent } from "lucide-react";
import { pilotDemoHref, pilotOffer, pilotSpotsLabel } from "@/lib/offer";

/** Pilotaanbod voor de eerste praktijken; verdwijnt vanzelf als het aanbod niet meer loopt. */
export function PilotOfferBanner({ dark = false, stacked = false }: { dark?: boolean; stacked?: boolean }) {
  if (!pilotOffer.active || pilotOffer.spotsLeft <= 0) return null;
  return (
    <div
      className={`rounded-2xl p-5 md:p-6 flex flex-col gap-4 ${stacked ? "" : "md:flex-row md:items-center md:gap-6"}`}
      style={
        dark
          ? { background: "rgba(232,99,42,0.12)", border: "1px solid rgba(232,99,42,0.3)" }
          : { background: "#fff3ee", border: "1px solid rgba(232,99,42,0.25)" }
      }
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#e8632a" }}>
        <BadgePercent className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#e8632a" }}>
          Pilotaanbod &middot; {pilotSpotsLabel()}
        </p>
        <p className="text-base font-semibold" style={{ color: dark ? "#ffffff" : "#1a1a1a" }}>
          {pilotOffer.discountPercent}% korting op het eerste jaar
        </p>
        <p className="text-sm" style={{ color: dark ? "#c9c9ce" : "#6b7280" }}>
          {pilotOffer.inReturn}. Je denkt mee over de doorontwikkeling van REVA.
        </p>
      </div>
      <Link href={pilotDemoHref} className={`group btn-primary px-5 py-2.5 text-sm justify-center shrink-0 ${stacked ? "w-full" : ""}`}>
        Claim een pilotplek
        <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    </div>
  );
}
