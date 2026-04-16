import Link from "next/link";

const DASHBOARD_URL = "https://dashboard.reva-app.nl";

export function Footer() {
  return (
    <footer style={{ background: "#18181a", color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#e8632a" }}
              >
                <span className="text-white font-bold text-base leading-none select-none">R</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-white">REVA</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#7c7c8a" }}>
              Jouw persoonlijk herstel dashboard. Grip op je herstel, dag voor dag.
            </p>
            <a
              href={`${DASHBOARD_URL}/register`}
              className="btn-primary px-4 py-2 text-sm"
            >
              Start gratis
            </a>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525e" }}>
              Product
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Functies", href: "/functies" },
                { label: "Prijzen", href: "/prijzen" },
                { label: "Documentatie", href: "/documentatie" },
                { label: "Inloggen", href: `${DASHBOARD_URL}/login` },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525e" }}>
              Juridisch
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#52525e" }}
        >
          <p>© {new Date().getFullYear()} REVA App · reva-app.nl</p>
          <p>Gebouwd voor mensen die beter worden.</p>
        </div>
      </div>
    </footer>
  );
}
