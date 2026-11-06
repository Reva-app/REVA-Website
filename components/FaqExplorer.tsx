"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, ChevronDown, Mail } from "lucide-react";
import type { FaqGroup } from "@/lib/faq";

const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Doorzoekbare FAQ met categorieën. Alle antwoorden staan in de HTML (details/summary). */
export function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("alle");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return groups
      .filter((g) => active === "alle" || g.id === active)
      .map((g) => ({
        ...g,
        items: q ? g.items.filter((i) => normalize(`${i.q} ${i.a}`).includes(q)) : g.items,
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query, active]);

  const total = filtered.reduce((n, g) => n + g.items.length, 0);
  const all = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-14 items-start">
      {/* Categorieën */}
      <nav aria-label="Categorieën" className="lg:sticky lg:top-28">
        <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 pb-1">
          {[{ id: "alle", category: "Alle vragen", items: groups.flatMap((g) => g.items) }, ...groups].map((g) => {
            const on = active === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActive(g.id)}
                aria-pressed={on}
                className="shrink-0 flex items-center justify-between gap-3 text-left text-sm font-medium px-4 py-2.5 rounded-full lg:rounded-xl transition-colors"
                style={on ? { background: "#1c1c1e", color: "#ffffff" } : { background: "#ffffff", color: "#374151", border: "1px solid #e8e5df" }}
              >
                <span className="whitespace-nowrap">{g.category}</span>
                <span className="text-xs" style={{ color: on ? "#9ca3af" : "#9ca3af" }}>{g.id === "alle" ? all : g.items.length}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div>
        {/* Zoeken */}
        <div className="mb-8">
          <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
          <label htmlFor="faq-zoeken" className="sr-only">Zoek in de veelgestelde vragen</label>
          <input
            id="faq-zoeken"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek een vraag, bijvoorbeeld proefperiode of AVG"
            className="w-full pl-11 pr-11 py-3.5 rounded-xl text-sm outline-none border focus:border-[#e8632a] focus:ring-4 focus:ring-[#e8632a]/15"
            style={{ background: "#ffffff", borderColor: "#e8e5df", color: "#1a1a1a" }}
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Zoekopdracht wissen" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-gray-100" style={{ color: "#9ca3af" }}>
              <X className="w-4 h-4" />
            </button>
          )}
          </div>
          {query && (
            <p className="mt-2 text-xs" style={{ color: "#9ca3af" }} aria-live="polite">
              {total} {total === 1 ? "vraag" : "vragen"} gevonden
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border p-8 text-center" style={{ background: "#ffffff", borderColor: "#e8e5df" }}>
            <p className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>Geen vraag gevonden voor &ldquo;{query}&rdquo;</p>
            <p className="text-sm mb-5" style={{ color: "#6b7280" }}>Stel je vraag gerust direct aan ons. We reageren doorgaans binnen één werkdag.</p>
            <a href="mailto:info@reva-app.nl" className="inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm">
              <Mail className="w-4 h-4" /> Mail je vraag
            </a>
          </div>
        ) : (
          <div className="space-y-12">
            {filtered.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28" aria-labelledby={`faq-${g.id}`}>
                <h2 id={`faq-${g.id}`} className="text-xl md:text-2xl font-semibold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>
                  {g.category}
                </h2>
                <p className="text-sm mb-5" style={{ color: "#6b7280" }}>{g.intro}</p>
                <div className="space-y-3">
                  {g.items.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-2xl border transition-shadow open:shadow-sm"
                      style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                      open={!!query}
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                        <h3 className="text-[15px] font-semibold" style={{ color: "#1a1a1a" }}>{item.q}</h3>
                        <ChevronDown className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: "#e8632a" }} />
                      </summary>
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <p className="mt-10 text-sm" style={{ color: "#6b7280" }}>
          Wil je zien hoe dit eruitziet? Bekijk{" "}
          <Link href="/functies" className="font-medium hover-orange" style={{ color: "#e8632a" }}>alle functies</Link>{" "}
          of de{" "}
          <Link href="/prijzen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>prijzen</Link>.
        </p>
      </div>
    </div>
  );
}
