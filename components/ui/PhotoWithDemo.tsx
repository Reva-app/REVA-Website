import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FeatureDemo } from "@/components/features/FeatureDemo";
import type { DemoKey } from "@/lib/features";

/**
 * Sfeerfoto met daarop een zwevende productkaart. De foto geeft gevoel, de kaart laat
 * direct zien wat REVA doet. Op mobiel schuift de kaart onder de foto, op desktop
 * overlapt hij de rand.
 */
export function PhotoWithDemo({
  src,
  alt,
  demo,
  position = "center",
  aspect = "5 / 4",
  side = "left",
  priority = false,
}: {
  src: string;
  alt: string;
  demo: DemoKey;
  position?: string;
  aspect?: string;
  side?: "left" | "right";
  priority?: boolean;
}) {
  return (
    <AnimateIn direction="up" className="relative">
      <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: aspect, background: "#f1ede8" }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover img-reveal"
          style={{ objectPosition: position }}
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
      <div
        className={`relative -mt-16 mx-4 sm:mx-10 lg:absolute lg:mt-0 lg:mx-0 lg:bottom-[-56px] lg:w-[64%] ${side === "left" ? "lg:-left-12" : "lg:-right-12"}`}
      >
        <div className="animate-float-soft">
          <div className="rounded-2xl p-2 sm:p-3" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", boxShadow: "0 24px 60px rgba(0,0,0,0.16)" }}>
            <FeatureDemo demo={demo} />
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
