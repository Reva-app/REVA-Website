import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterCookieSettingsLink } from "@/components/FooterCookieSettingsLink";
import { RevaLogo } from "@/components/brand/RevaLogo";
import { company } from "@/lib/about";

export function Footer() {
  return (
    <footer className="pb-20 md:pb-0" style={{ background: "#18181a", color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 space-y-4">
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
              Plan een demo
              <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <div className="text-xs leading-relaxed pt-2" style={{ color: "#52525e" }}>
              <p>{company.legalName}</p>
              <p>{company.street}, {company.postalCode} {company.city}</p>
              {company.kvk && <p>KvK: {company.kvk}</p>}
              {company.vat && <p>Btw: {company.vat}</p>}
              <a href="mailto:info@reva-app.nl" className="footer-link block">
                info@reva-app.nl
              </a>
              <a href={`tel:${company.phoneIntl}`} className="footer-link block">
                {company.phone}
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
                { label: "Praktijken", href: "/praktijken" },
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

          {/* Landingspagina's */}
          <nav className="space-y-3" aria-label="Pagina's">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525e" }}>
              Pagina&apos;s
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Fysiotherapie software", href: "/fysiotherapie-software" },
                { label: "Alternatief voor WhatsApp", href: "/alternatief-voor-whatsapp" },
                { label: "Oefenprogramma-app", href: "/oefenprogramma-app" },
                { label: "Software voor fysiopraktijken", href: "/blog/software-voor-fysiopraktijken" },
                { label: "Pilotprogramma", href: "/pilot" },
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
