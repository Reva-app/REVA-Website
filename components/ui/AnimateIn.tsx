"use client";

import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "fade";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = {
    up: "scroll-anim-up",
    left: "scroll-anim-left",
    right: "scroll-anim-right",
    fade: "scroll-anim-fade",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${dirClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
