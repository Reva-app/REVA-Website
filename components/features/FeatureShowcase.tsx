import { CheckCircle } from "lucide-react";
import type { Feature } from "@/lib/features";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FeatureDemo } from "./FeatureDemo";

/** Eén functie: uitleg met wat je ermee kunt, naast een korte animatie. */
export function FeatureShowcase({ feature, index, headingLevel = 3 }: { feature: Feature; index: number; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const reversed = index % 2 === 1;
  return (
    <article id={feature.id} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <AnimateIn direction="up" className={reversed ? "lg:order-2" : ""}>
        <Heading className="text-2xl md:text-3xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
          {feature.title}
        </Heading>
        <p className="text-base md:text-lg font-medium mb-4" style={{ color: "#374151" }}>
          {feature.lead}
        </p>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#6b7280" }}>
          {feature.text}
        </p>
        <ul className="space-y-2.5">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "#374151" }}>
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
              {b}
            </li>
          ))}
        </ul>
      </AnimateIn>
      <AnimateIn direction="up" delay={100} className={reversed ? "lg:order-1" : ""}>
        <div className="rounded-3xl p-5 sm:p-8 md:p-10 flex items-center justify-center" style={{ background: "#f1ede8" }}>
          <div className="w-full max-w-md">
            <FeatureDemo demo={feature.demo} />
          </div>
        </div>
      </AnimateIn>
    </article>
  );
}

/** Variant met eigen tekst, voor verhalen op de doelgroeppagina's. */
export function StoryRow({
  eyebrow,
  title,
  text,
  bullets,
  demo,
  index,
  link,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  bullets?: string[];
  demo: Feature["demo"];
  index: number;
  link?: { href: string; label: string };
}) {
  const reversed = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <AnimateIn direction="up" className={reversed ? "lg:order-2" : ""}>
        {eyebrow && (
          <p className="text-sm font-semibold mb-2" style={{ color: "#e8632a" }}>{eyebrow}</p>
        )}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>{title}</h3>
        <p className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: "#6b7280" }}>{text}</p>
        {bullets && (
          <ul className="space-y-2.5 mb-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "#374151" }}>
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e8632a" }} />
                {b}
              </li>
            ))}
          </ul>
        )}
        {link && (
          <a href={link.href} className="inline-flex items-center gap-1.5 text-sm font-medium hover-orange" style={{ color: "#e8632a" }}>
            {link.label} <span aria-hidden="true">→</span>
          </a>
        )}
      </AnimateIn>
      <AnimateIn direction="up" delay={100} className={reversed ? "lg:order-1" : ""}>
        <div className="rounded-3xl p-5 sm:p-8 md:p-10 flex items-center justify-center" style={{ background: "#f1ede8" }}>
          <div className="w-full max-w-md">
            <FeatureDemo demo={demo} />
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
