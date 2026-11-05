import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterCookieSettingsLink } from "@/components/FooterCookieSettingsLink";
import { RevaLogo } from "@/components/brand/RevaLogo";

export function Footer() {
  return (
    <footer style={{ background: "#18181a", color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center" aria-label="REVA, naar de homepage">
              <RevaLogo size={32} color="#ffffff" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#7c7c8a" }}>
              Het patiëntenportaal voor fysiotherapiepraktijken. Overzicht over je patiënten, minder telefoontjes.
            </p>
            <Link
              href="/demo-aanvragen"
              className="group btn-primary px-4 py-2 text-sm"
            >
              Vraag een demo aan
              <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <div className="text-xs leading-relaxed pt-2" style={{ color: "#52525e" }}>
              <p>REVA B.V.</p>
              <p>KvK: [KvK-nummer]</p>
              <p>BTW: [BTW-nummer]</p>
              <p>[Vestigingsplaats]</p>
              <a href="mailto:info@reva-app.nl" className="footer-link">
                info@reva-app.nl
              </a>
            </div>
          </div>

          {/* Product links */}
          <nav className="space-y-3" aria-label="Product">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525e" }}>
              Product
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Functies", href: "/functies" },
                { label: "Prijzen", href: "/prijzen" },
                { label: "Over REVA", href: "/over-reva" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Documentatie", href: "/documentatie" },
                { label: "Inloggen", href: "/inloggen" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav className="space-y-3" aria-label="Juridisch">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525e" }}>
              Juridisch
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" },
                { label: "Cookiebeleid", href: "/cookiebeleid" },
                { label: "Account verwijderen", href: "/verwijder-account" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <FooterCookieSettingsLink />
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#52525e" }}
        >
          <p>© {new Date().getFullYear()} REVA App · reva-app.nl</p>
          <p>Gebouwd voor de fysiotherapiepraktijk van vandaag.</p>
        </div>
      </div>
    </footer>
  );
}
