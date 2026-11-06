"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Verticale lijn langs de tijdlijn die rustig oranje meeloopt terwijl je scrolt.
 * Plaats binnen een `relative` container; de lijn volgt de hoogte van die container.
 */
export function StoryProgressLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (!container) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      // De lijn loopt mee tot ongeveer 60% van de schermhoogte
      const value = (window.innerHeight * 0.6 - rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, value)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`absolute top-2 bottom-2 w-[2px] rounded-full ${className}`} style={{ background: "#e8e5df" }}>
      <div
        className="w-full rounded-full motion-safe:transition-[height] motion-safe:duration-200"
        style={{ height: `${progress * 100}%`, background: "#e8632a" }}
      />
    </div>
  );
}
