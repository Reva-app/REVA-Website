"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Stappenteller voor de functie-animaties. Telt van 0 tot `total` zolang de demo
 * in beeld is, houdt de eindstand even vast en begint dan opnieuw. Op de server,
 * buiten beeld en bij "minder beweging" staat de demo op de eindstand.
 */
export function useDemoStep(total: number, interval = 850) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(total);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          setStep(0);
          // Eindstand twee extra tellen vasthouden voor de volgende ronde
          timer = window.setInterval(() => setStep((s) => (s >= total + 2 ? 0 : s + 1)), interval);
        } else if (!entry.isIntersecting) {
          stop();
          setStep(total);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [total, interval]);

  /** Is stap `k` al bereikt? */
  const at = (k: number) => step >= k;
  return { ref, step: Math.min(step, total), at };
}
