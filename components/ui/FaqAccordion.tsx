"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `faq-question-${i}-${item.q.length}`;
        const panelId = `faq-answer-${i}-${item.q.length}`;
        return (
          <div
            key={item.q}
            className="rounded-2xl border overflow-hidden"
            style={{ background: "#ffffff", borderColor: "#e8e5df" }}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
              >
                <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                  {item.q}
                </span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 transition-transform duration-200"
                  style={{
                    color: "#e8632a",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </h3>
            {/* Altijd in de HTML (alleen verborgen), zodat zoekmachines alle antwoorden kunnen lezen */}
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-5 pb-4">
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
