import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, HelpCircle, Phone } from "lucide-react";
import { company } from "@/lib/about";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SimpleContactForm } from "@/components/SimpleContactForm";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Heb je een vraag over REVA? Neem contact op via het formulier of mail naar info@reva-app.nl. Wil je liever een demo? Vraag die apart aan.",
  openGraph: {
    title: "Contact",
    description: "Neem contact op met REVA voor vragen over de software, je account of een samenwerking.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/contact",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          url: "https://www.reva-app.nl/contact",
          name: "Contact | REVA",
          description:
            "Neem contact op met REVA voor vragen over de software, je account of een samenwerking.",
          type: "ContactPage",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Contact", url: "https://www.reva-app.nl/contact" },
        ])}
      />
      <SiteLayout>
        <section className="py-16 md:py-24" style={{ background: "#f8f7f4" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Left: intro */}
              <div className="lg:col-span-2">
                <AnimateIn direction="up">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                    Contact
                  </span>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                    Heb je een vraag? <span style={{ color: "#e8632a" }}>We helpen je verder</span>
                  </h1>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                    Vul het formulier in of mail ons direct. We reageren doorgaans binnen één werkdag.
                    Wil je liever zien hoe REVA werkt in jouw praktijk? Vraag dan een demo aan.
                  </p>
                </AnimateIn>

                <div className="space-y-5">
                  <AnimateIn direction="up" delay={100}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <Mail className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Mail ons direct</p>
                        <a href="mailto:info@reva-app.nl" className="text-sm leading-relaxed hover-orange" style={{ color: "#6b7280" }}>
                          info@reva-app.nl
                        </a>
                      </div>
                    </div>
                  </AnimateIn>
                  <AnimateIn direction="up" delay={140}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <Phone className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Bel ons</p>
                        <a href={`tel:${company.phoneIntl}`} className="text-sm leading-relaxed hover-orange" style={{ color: "#6b7280" }}>
                          {company.phone}
                        </a>
                        <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Maandag tot en met vrijdag, 9:00 tot 17:00</p>
                      </div>
                    </div>
                  </AnimateIn>
                  <AnimateIn direction="up" delay={180}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <MessageCircle className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Wil je een demo?</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                          <Link href="/demo-aanvragen" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                            Vraag hier een demo aan
                          </Link>{" "}
                          en we plannen een rondleiding op maat.
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                  <AnimateIn direction="up" delay={260}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <HelpCircle className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1a1a" }}>Eerst zelf lezen?</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                          Bekijk de{" "}
                          <Link href="/faq" className="font-medium hover-orange" style={{ color: "#e8632a" }}>
                            veelgestelde vragen
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              </div>

              {/* Right: form card */}
              <div className="lg:col-span-3">
                <AnimateIn direction="right">
                  <div
                    className="rounded-2xl p-6 md:p-8"
                    style={{ background: "#ffffff", border: "1px solid #e8e5df", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <SimpleContactForm />
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
