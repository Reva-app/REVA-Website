"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const navLinks = [
  { label: "Over REVA", href: "/over-reva" },
  { label: "Blog", href: "/blog" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Contact", href: "/contact" },
];

const functiesLinks = [
  {
    icon: Stethoscope,
    title: "Functies voor fysio's",
    description: "Praktijkoverzicht, dossier, voortgang en behandeldoelen",
    href: "/functies/voor-fysios",
  },
  {
    icon: HeartPulse,
    title: "Functies voor patiënten",
    description: "Check-ins, herstelplannen en medicatieregistratie",
    href: "/functies/voor-patienten",
  },
];

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [functiesOpen, setFunctiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const functiesRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu and functies dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setFunctiesOpen(false);
  }, [pathname]);

  // Close functies dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (functiesRef.current && !functiesRef.current.contains(e.target as Node)) {
        setFunctiesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  // Een open mobiel menu forceert altijd de solide balk, ook op de transparante hero-stand,
  // zodat menu-items nooit onleesbaar over de achtergrondfoto vallen.
  const barTransparent = transparent && !menuOpen;
  const navTextColor = barTransparent ? "#ffffff" : "#374151";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-300 ${barTransparent ? "px-0 pt-0" : "px-3 pt-3 md:px-5 md:pt-4"}`}
    >
      <div
        className="mx-auto transition-all duration-300"
        style={{
          maxWidth: barTransparent ? "100%" : "72rem",
          background: barTransparent ? "transparent" : "rgba(255,255,255,0.92)",
          backdropFilter: barTransparent ? "none" : "blur(12px)",
          border: barTransparent ? "none" : "1px solid #e8e5df",
          borderRadius: barTransparent ? "0px" : menuOpen ? "28px" : "9999px",
          boxShadow: barTransparent ? "none" : "0 8px 28px rgba(0,0,0,0.08)",
        }}
      >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#e8632a" }}
          >
            <span className="text-white font-bold text-base leading-none select-none">
              R
            </span>
          </div>
          <span className="text-base font-semibold tracking-tight" style={{ color: navTextColor }}>
            REVA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Hoofdnavigatie">
          {/* Functies dropdown */}
          <div
            className="relative"
            ref={functiesRef}
            onMouseEnter={() => setFunctiesOpen(true)}
            onMouseLeave={() => setFunctiesOpen(false)}
          >
            <button
              type="button"
              id="functies-menu-button"
              onClick={() => setFunctiesOpen((v) => !v)}
              aria-expanded={functiesOpen}
              aria-haspopup="true"
              aria-controls="functies-dropdown"
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: functiesOpen || isActive("/functies") ? "#e8632a" : navTextColor,
                background: isActive("/functies") ? "#fff3ee" : "transparent",
              }}
            >
              Functies
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${functiesOpen ? "rotate-180" : ""}`} />
            </button>

            {functiesOpen && (
              <>
                {/* Onzichtbare brug: voorkomt dat de dropdown sluit tijdens het oversteken van de kleine ruimte tussen knop en menu */}
                <div className="absolute left-0 top-full w-full h-2" aria-hidden="true" />
                <div
                  id="functies-dropdown"
                  role="menu"
                  aria-labelledby="functies-menu-button"
                  className="absolute left-0 top-full mt-2 rounded-2xl border p-3 space-y-1"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", width: 320 }}
                >
                {functiesLinks.map((f) => {
                  const Icon = f.icon;
                  return (
                    <Link
                      key={f.title}
                      href={f.href}
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50"
                      onClick={() => setFunctiesOpen(false)}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{f.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{f.description}</p>
                      </div>
                    </Link>
                  );
                })}
                <div className="pt-2 mt-1 border-t px-3" style={{ borderColor: "#e8e5df" }}>
                  <Link
                    href="/functies"
                    className="text-sm font-medium hover-orange"
                    style={{ color: "#e8632a" }}
                    onClick={() => setFunctiesOpen(false)}
                  >
                    Bekijk alle functies →
                  </Link>
                </div>
                </div>
              </>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? "#e8632a" : navTextColor,
                background: isActive(link.href) ? "#fff3ee" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  (e.currentTarget as HTMLAnchorElement).style.background = barTransparent ? "rgba(255,255,255,0.5)" : "#f9fafb";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`${DASHBOARD_URL}/login`}
            className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
            style={{ color: navTextColor, borderColor: barTransparent ? "rgba(255,255,255,0.4)" : "#d1d5db", background: barTransparent ? "transparent" : "#ffffff" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = barTransparent ? "rgba(255,255,255,0.5)" : "#f9fafb"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = barTransparent ? "transparent" : "#ffffff"; }}
          >
            Inloggen
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ background: "#e8632a" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
          >
            Vraag een demo aan
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile actions: directe inlogknop + menu */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={`${DASHBOARD_URL}/login`}
            className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors"
            style={{ color: navTextColor, borderColor: barTransparent ? "rgba(255,255,255,0.4)" : "#d1d5db", background: barTransparent ? "transparent" : "#ffffff" }}
          >
            Inloggen
          </a>
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: navTextColor }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-5 py-4 space-y-1"
          style={{ borderColor: "#e8e5df" }}
        >
          <Link
            href="/functies"
            aria-current={isActive("/functies") ? "page" : undefined}
            className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            style={{
              color: isActive("/functies") ? "#e8632a" : "#374151",
              background: isActive("/functies") ? "#fff3ee" : "transparent",
            }}
          >
            Functies
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? "#e8632a" : "#374151",
                background: isActive(link.href) ? "#fff3ee" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t mt-3" style={{ borderColor: "#e8e5df" }}>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white"
              style={{ background: "#e8632a" }}
            >
              Vraag een demo aan
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
