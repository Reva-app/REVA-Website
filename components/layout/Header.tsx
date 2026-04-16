"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Functies", href: "/functies" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Documentatie", href: "/documentatie" },
  { label: "Contact", href: "/contact" },
];

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-200"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "#e8e5df" : "#e8e5df"}`,
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
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
          <span className="text-base font-semibold tracking-tight" style={{ color: "#1a1a1a" }}>
            REVA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? "#e8632a" : "#374151",
                background: isActive(link.href) ? "#fff3ee" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb";
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
            style={{ color: "#374151", borderColor: "#e8e5df", background: "#ffffff" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; }}
          >
            Inloggen
          </a>
          <a
            href={`${DASHBOARD_URL}/register`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ background: "#e8632a" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
          >
            Start gratis
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#374151" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu openen"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-5 py-4 space-y-1"
          style={{ borderColor: "#e8e5df", background: "#ffffff" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? "#e8632a" : "#374151",
                background: isActive(link.href) ? "#fff3ee" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t mt-3" style={{ borderColor: "#e8e5df" }}>
            <a
              href={`${DASHBOARD_URL}/login`}
              className="flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium border"
              style={{ color: "#374151", borderColor: "#e8e5df" }}
            >
              Inloggen
            </a>
            <a
              href={`${DASHBOARD_URL}/register`}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white"
              style={{ background: "#e8632a" }}
            >
              Start gratis
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
