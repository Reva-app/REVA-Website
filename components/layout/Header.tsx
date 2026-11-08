"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { RevaLogo } from "@/components/brand/RevaLogo";
import { featureGroups, featuresByGroup } from "@/lib/features";

const navLinks = [
  { label: "Over REVA", href: "/over-reva" },
  { label: "Blog", href: "/blog" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Contact", href: "/contact" },
];

const audienceLinks = [
  { label: "Voor fysio's", href: "/functies/voor-fysios" },
  { label: "Voor patiënten", href: "/functies/voor-patienten" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const productRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Korte sluitvertraging, zodat een (schuine) beweging naar het paneel het menu niet sluit
  const openProduct = () => {
    window.clearTimeout(closeTimer.current);
    setProductOpen(true);
  };
  const closeProductSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setProductOpen(false), 150);
  };

  // Menu's sluiten bij het wisselen van pagina (state bijwerken tijdens het renderen,
  // zodat er geen extra render via een effect nodig is)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setProductOpen(false);
    setMobileProductOpen(false);
  }

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Productmenu sluiten bij klikken buiten het menu of met Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) setProductOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    const timer = closeTimer;
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer.current);
    };
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  // Een open mobiel menu forceert altijd de solide balk, ook op de transparante hero-stand,
  // zodat menu-items nooit onleesbaar over de achtergrondfoto vallen.
  const barTransparent = transparent && !menuOpen;
  const navTextColor = barTransparent ? "#ffffff" : "#374151";

  return (
    <>
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${barTransparent ? "px-0 pt-0" : "px-3 pt-3 md:px-5 md:pt-4"}`}
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
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="REVA, naar de homepage">
          <RevaLogo size={32} color={barTransparent ? "#ffffff" : "#1a1a1a"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Hoofdnavigatie">
          {/* Productmenu */}
          <div
            ref={productRef}
            className="h-16 flex items-center"
            onMouseEnter={openProduct}
            onMouseLeave={closeProductSoon}
          >
            <button
              type="button"
              id="product-menu-button"
              onClick={() => setProductOpen((v) => !v)}
              aria-expanded={productOpen}
              aria-haspopup="true"
              aria-controls="product-menu"
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: productOpen || isActive("/functies") ? "#e8632a" : navTextColor,
                background: isActive("/functies") ? "#fff3ee" : "transparent",
              }}
            >
              Product
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productOpen ? "rotate-180" : ""}`} />
            </button>

            {productOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(920px,calc(100vw-2.5rem))]" onMouseEnter={openProduct}>
                <div
                  id="product-menu"
                  role="region"
                  aria-labelledby="product-menu-button"
                  className="rounded-2xl border overflow-hidden animate-fade-in"
                  style={{ background: "#ffffff", borderColor: "#e8e5df", boxShadow: "0 24px 50px rgba(0,0,0,0.12)" }}
                >
                  <div className="grid grid-cols-3 gap-2 p-6">
                    {featureGroups.map((g) => (
                      <div key={g.id}>
                        <p className="px-3 text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#9ca3af" }}>
                          {g.title}
                        </p>
                        <ul>
                          {featuresByGroup(g.id).map((f) => (
                            <li key={f.id}>
                              <Link
                                href={`/functies#${f.id}`}
                                onClick={() => setProductOpen(false)}
                                className="group block px-3 py-2 rounded-xl transition-colors hover:bg-[#f8f7f4]"
                              >
                                <span className="block text-sm font-semibold transition-colors group-hover:text-[#e8632a]" style={{ color: "#1a1a1a" }}>
                                  {f.title}
                                </span>
                                <span className="block text-xs mt-0.5 leading-snug" style={{ color: "#6b7280" }}>{f.menu}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 px-9 py-4" style={{ background: "#f8f7f4" }}>
                    <Link
                      href="/functies"
                      onClick={() => setProductOpen(false)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover-orange"
                      style={{ color: "#e8632a" }}
                    >
                      Bekijk alle functies <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="flex items-center gap-5">
                      {audienceLinks.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setProductOpen(false)} className="text-sm font-medium hover-orange" style={{ color: "#374151" }}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
          <Link
            href="/inloggen"
            className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
            style={{ color: navTextColor, borderColor: barTransparent ? "rgba(255,255,255,0.4)" : "#d1d5db", background: barTransparent ? "transparent" : "#ffffff" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = barTransparent ? "rgba(255,255,255,0.5)" : "#f9fafb"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = barTransparent ? "transparent" : "#ffffff"; }}
          >
            Inloggen
          </Link>
          <Link
            href="/demo-aanvragen"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ background: "#e8632a" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4581f"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e8632a"; }}
          >
            Plan een demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile actions: directe inlogknop + menu */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/inloggen"
            className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors"
            style={{ color: navTextColor, borderColor: barTransparent ? "rgba(255,255,255,0.4)" : "#d1d5db", background: barTransparent ? "transparent" : "#ffffff" }}
          >
            Inloggen
          </Link>
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
        <div id="mobile-menu" className="md:hidden px-5 pb-4 pt-1 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <button
            type="button"
            onClick={() => setMobileProductOpen((v) => !v)}
            aria-expanded={mobileProductOpen}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium"
            style={{ color: isActive("/functies") ? "#e8632a" : "#374151", background: isActive("/functies") ? "#fff3ee" : "transparent" }}
          >
            Product
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileProductOpen && (
            <div className="pl-3 pb-2 space-y-3">
              {featureGroups.map((g) => (
                <div key={g.id}>
                  <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#9ca3af" }}>{g.title}</p>
                  {featuresByGroup(g.id).map((f) => (
                    <Link key={f.id} href={`/functies#${f.id}`} onClick={() => setMenuOpen(false)} className="block px-3 py-1.5 rounded-lg text-sm" style={{ color: "#374151" }}>
                      {f.title}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/functies" onClick={() => setMenuOpen(false)} className="flex items-center gap-1.5 px-3 pt-1 text-sm font-semibold" style={{ color: "#e8632a" }}>
                Bekijk alle functies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
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
          <div className="pt-3">
            <Link
              href="/demo-aanvragen"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white"
              style={{ background: "#e8632a" }}
            >
              Plan een demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
    {/* Ruimte voor de vaste header; op de homepage valt de hero er bewust onder */}
    {!isHome && <div aria-hidden="true" className="h-[78px] md:h-[82px] shrink-0" />}
    </>
  );
}
