import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, LayoutGrid, Tag, BookOpen, HelpCircle, Mail } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { RevaMark } from "@/components/brand/RevaLogo";

export const metadata: Metadata = {
  title: "Deze pagina werkt aan zijn herstel",
  description: "Deze pagina bestaat niet (meer). Ga terug naar de homepage of kies een van de populaire pagina's.",
  robots: { index: false },
};

const popular = [
  { href: "/functies", label: "Functies", icon: LayoutGrid },
  { href: "/prijzen", label: "Prijzen", icon: Tag },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/faq", label: "Veelgestelde vragen", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28" style={{ background: "#f8f7f4" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
              style={{ color: "#e8632a", background: "#fff3ee" }}
            >
              404
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5" style={{ color: "#1a1a1a" }}>
              Deze pagina werkt aan zijn herstel
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              We hebben overal gezocht, maar deze pagina staat even aan de zijlijn. Misschien is de
              link verouderd of zit er een typefout in het adres. Geen zorgen: de rest van de site is
              in topvorm.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="group btn-primary px-5 py-3 text-sm justify-center">
                Terug naar de homepage
                <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
              <Link
                href="/demo-aanvragen"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-[#f1ede8]"
                style={{ background: "#ffffff", color: "#1a1a1a", borderColor: "#e8e5df" }}
              >
                Plan een demo
              </Link>
            </div>
          </div>

          {/* Een check zoals in de app, maar dan van deze pagina */}
          <div
            className="rounded-2xl border p-6"
            style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            aria-hidden="true"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <RevaMark size={26} />
                <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Dagelijkse check</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
                In revalidatie
              </span>
            </div>
            <div className="space-y-3 text-sm">
              {[
                ["Patiënt", "Deze pagina"],
                ["Status", "Niet gevonden"],
                ["Foutcode", "404"],
                ["Verwachte terugkeer", "Onbekend"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 rounded-xl px-4 py-3" style={{ background: "#f8f7f4" }}>
                  <span style={{ color: "#6b7280" }}>{label}</span>
                  <span className="font-medium" style={{ color: "#1a1a1a" }}>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs" style={{ color: "#9ca3af" }}>
              <Activity className="w-3.5 h-3.5" style={{ color: "#e8632a" }} />
              Advies: rust, en neem een andere route
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-lg font-semibold mb-5" style={{ color: "#1a1a1a" }}>
            Misschien zocht je een van deze pagina&apos;s
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {popular.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-2xl border px-4 py-4 text-sm font-medium transition-shadow hover:shadow-md"
                style={{ background: "#f8f7f4", borderColor: "#e8e5df", color: "#1a1a1a" }}
              >
                <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#fff3ee" }}>
                  <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                </span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
