"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";

/** Pagina's waar de demo-balk niets toevoegt of in de weg zit */
const HIDDEN = ["/demo-aanvragen", "/pilot", "/inloggen", "/contact"];

/**
 * Vaste balk onderin op mobiel met de demo-knop. Verschijnt pas na de hero, zodat
 * hij de eerste indruk niet verstoort, en wacht tot de cookiekeuze is gemaakt.
 */
export function StickyDemoCta() {
  const pathname = usePathname();
  const { hasChosen } = useCookieConsent();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Verberg de balk zodra de footer in beeld komt: daar staat zelf een demoknop,
    // en de balk zou die anders afdekken.
    let footerVisible = false;
    const update = () => setShown(window.scrollY > 640 && !footerVisible);
    const footer = document.querySelector("footer");
    const observer = footer
      ? new IntersectionObserver(([entry]) => {
          footerVisible = entry.isIntersecting;
          update();
        })
      : null;
    if (footer && observer) observer.observe(footer);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      observer?.disconnect();
    };
  }, [pathname]);

  if (HIDDEN.some((p) => pathname === p || pathname.startsWith(`${p}/`)) || !hasChosen) return null;

  return (
    <div
      className={`sticky-cta md:hidden fixed inset-x-0 bottom-0 z-40 ${shown ? "is-shown" : ""}`}
      style={{
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid #e8e5df",
      }}
      aria-hidden={!shown}
    >
      <div className="flex items-center gap-3 px-4 pt-3">
        <p className="flex-1 text-xs leading-snug" style={{ color: "#6b7280" }}>
          <span className="block font-semibold text-sm" style={{ color: "#1a1a1a" }}>Zie REVA in 30 minuten</span>
          Vrijblijvend en online
        </p>
        <Link href="/demo-aanvragen#aanvraag" tabIndex={shown ? 0 : -1} className="btn-primary px-4 py-2.5 text-sm shrink-0">
          Plan een demo
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
