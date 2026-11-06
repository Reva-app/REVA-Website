"use client";

import { useSyncExternalStore } from "react";
import { Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const STORAGE_KEY = "reva-login-keuze";

const loginOptions = [
  {
    key: "praktijk",
    icon: Stethoscope,
    badge: "Praktijk",
    title: "Ik ben fysiotherapeut",
    description:
      "Log in op het praktijkportaal voor je patiëntoverzicht, dossiers, signaleringen en herstelplannen.",
    cta: "Inloggen als fysiotherapeut",
    href: "https://dashboard.reva-app.nl/portal",
    help: { text: "Wachtwoord vergeten of geen toegang?", link: "Mail ons", href: "mailto:info@reva-app.nl?subject=Inloggen%20praktijkportaal" },
    direction: "left" as const,
  },
  {
    key: "patient",
    icon: HeartPulse,
    badge: "Patiënt",
    title: "Ik ben patiënt",
    description:
      "Log in op je persoonlijke portaal voor je dagelijkse check, oefeningen, medicatie en je herstelplan.",
    cta: "Inloggen als patiënt",
    href: "https://dashboard.reva-app.nl/login",
    help: { text: "Wachtwoord vergeten?", link: "Stel een nieuw wachtwoord in", href: "https://dashboard.reva-app.nl/forgot-password" },
    note: "Nog geen account? Je krijgt toegang via een uitnodiging van je fysiotherapiepraktijk.",
    direction: "right" as const,
  },
];

// De laatst gekozen optie uit localStorage, zonder hydration-verschillen
const subscribe = () => () => {};
const readChoice = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export function LoginOptions() {
  const lastChoice = useSyncExternalStore(subscribe, readChoice, () => null);

  const remember = (key: string) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {}
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {loginOptions.map((option, i) => {
        const Icon = option.icon;
        const isLast = lastChoice === option.key;
        return (
          <AnimateIn key={option.key} direction={option.direction} delay={i * 100} className="h-full">
            <div
              className="group relative flex flex-col h-full rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: "#ffffff",
                border: `1px solid ${isLast ? "rgba(232,99,42,0.45)" : "#e8e5df"}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ color: "#e8632a", background: "#fff3ee" }}
                >
                  {option.badge}
                </span>
                {isLast && (
                  <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>
                    Laatst gebruikt
                  </span>
                )}
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ background: "#fff3ee" }}
              >
                <Icon className="w-6 h-6" style={{ color: "#e8632a" }} />
              </div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                {option.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6b7280" }}>
                {option.description}
              </p>

              {/* Hoofdknop; de link beslaat het hele blok */}
              <a
                href={option.href}
                onClick={() => remember(option.key)}
                className="flex items-center gap-1.5 text-sm font-semibold after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                style={{ color: "#e8632a" }}
              >
                {option.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="relative z-10 mt-4 text-xs leading-relaxed space-y-1 md:min-h-[3.75rem]" style={{ color: "#9ca3af" }}>
                <p>
                  {option.help.text}{" "}
                  <a href={option.help.href} className="font-medium underline underline-offset-2 hover-orange" style={{ color: "#6b7280" }}>
                    {option.help.link}
                  </a>
                </p>
                {option.note && <p>{option.note}</p>}
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
}
