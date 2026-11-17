"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Meet klikken op de belangrijkste knoppen en links op de hele site, zonder elke
// knop apart aan te passen. Links met data-no-track meten zelf al iets specifieks.

const ctaTargets: [RegExp, string][] = [
  [/^\/demo-aanvragen/, "demo"],
  [/^\/pilot/, "pilot"],
  [/^\/prijzen/, "prijzen"],
  [/^\/besparing-berekenen/, "besparing"],
  [/^\/herstelplannen/, "herstelplannen"],
];

export function AnalyticsClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.hasAttribute("data-no-track")) return;
      const href = a.getAttribute("href") ?? "";
      const text = (a.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
      const page = window.location.pathname;

      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        track("contact_click", { methode: href.startsWith("mailto:") ? "email" : "telefoon", page_path: page });
        return;
      }
      if (/dashboard\.reva-app\.nl/.test(href) || href.startsWith("/inloggen")) {
        track("login_click", { link_url: href, link_text: text, page_path: page });
        return;
      }
      const path = href.startsWith("http") ? href.replace(/^https?:\/\/(www\.)?reva-app\.nl/, "") : href;
      for (const [re, cta] of ctaTargets) {
        if (re.test(path)) {
          track("cta_click", { cta, link_url: path, link_text: text, page_path: page });
          return;
        }
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
