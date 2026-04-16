import { ReactNode } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-18" style={{ background: "#f8f7f4", borderBottom: "1px solid #e8e5df" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimateIn direction="up">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a1a" }}>
              {title}
            </h1>
            <p className="text-sm" style={{ color: "#9ca3af" }}>
              Laatst bijgewerkt: {lastUpdated}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
        <div
          className="max-w-3xl mx-auto px-5 md:px-8 legal-content"
          style={{
            color: "#374151",
            lineHeight: "1.75",
            fontSize: "0.95rem",
          }}
        >
          <AnimateIn direction="up">
            {children}
          </AnimateIn>
        </div>
      </section>

      <style>{`
        .legal-content h2 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .legal-content h2:first-child {
          margin-top: 0;
        }
        .legal-content p {
          margin-bottom: 1rem;
          color: #4b5563;
        }
        .legal-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: #4b5563;
        }
        .legal-content ul li {
          margin-bottom: 0.4rem;
        }
        .legal-content a {
          color: #e8632a;
          text-decoration: underline;
        }
        .legal-content a:hover {
          color: #d4581f;
        }
        .legal-content strong {
          color: #1a1a1a;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
