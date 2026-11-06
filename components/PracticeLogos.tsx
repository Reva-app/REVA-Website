import Image from "next/image";
import { practicesWithLogo } from "@/lib/practices";

/**
 * Doorlopende strook met logo's van praktijken die REVA gebruiken.
 * Rendert niets zolang er nog geen praktijken met een logo zijn.
 */
export function PracticeLogos() {
  const logos = practicesWithLogo();
  if (logos.length === 0) return null;
  // Dubbele rij zodat de animatie naadloos doorloopt
  const row = [...logos, ...logos];
  return (
    <section aria-label="Praktijken die werken met REVA" className="py-10 overflow-hidden" style={{ background: "#ffffff" }}>
      <p className="text-center text-sm mb-6" style={{ color: "#6b7280" }}>
        Fysiopraktijken die hun patiënten begeleiden met REVA
      </p>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max items-center gap-14 animate-logo-marquee motion-reduce:animate-none">
          {row.map((p, i) => (
            <li key={`${p.name}-${i}`} aria-hidden={i >= logos.length} className="shrink-0">
              <Image
                src={p.logo!}
                alt={p.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
