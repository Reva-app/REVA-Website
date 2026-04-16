import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — REVA App",
  description:
    "Heb je een vraag of wil je meer weten over REVA? Neem contact op, we helpen je graag.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
              Hoe kunnen we helpen?
            </h1>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Heb je een vraag, opmerking of wil je meer weten over REVA? Stuur ons een bericht.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">

            {/* Left info */}
            <div className="md:col-span-2 space-y-6">
              <AnimateIn direction="left">
                <div>
                  <h2 className="text-xl font-semibold mb-5" style={{ color: "#1a1a1a" }}>
                    Neem contact op
                  </h2>
                  <div className="space-y-4">
                    <div
                      className="flex items-start gap-3 rounded-2xl p-4 border"
                      style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <Mail className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5" style={{ color: "#1a1a1a" }}>E-mail</p>
                        <a
                          href="mailto:info@reva-app.nl"
                          className="text-sm hover-orange"
                          style={{ color: "#6b7280" }}
                        >
                          info@reva-app.nl
                        </a>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-3 rounded-2xl p-4 border"
                      style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fff3ee" }}
                      >
                        <MessageSquare className="w-4 h-4" style={{ color: "#e8632a" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5" style={{ color: "#1a1a1a" }}>Reactietijd</p>
                        <p className="text-sm" style={{ color: "#6b7280" }}>
                          We reageren binnen 1 werkdag
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right form */}
            <div className="md:col-span-3">
              <AnimateIn direction="right">
                <ContactForm />
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
