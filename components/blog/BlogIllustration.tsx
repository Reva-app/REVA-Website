import { MessageSquare, Laptop2, ShieldCheck, Building2, ClipboardList, Activity, type LucideIcon } from "lucide-react";

const categoryConfig: Record<string, { icon: LucideIcon }> = {
  "Patiëntbegeleiding": { icon: MessageSquare },
  "Digitalisering": { icon: Laptop2 },
  "Privacy & AVG": { icon: ShieldCheck },
  "Praktijkvoering": { icon: Building2 },
  "Herstel & revalidatie": { icon: Activity },
};

export function BlogIllustration({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  const Icon = categoryConfig[category]?.icon ?? ClipboardList;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: "#1c1c1e" }}
      role="img"
      aria-label={`Illustratie bij het onderwerp ${category}`}
    >
      {/* Soft accent glows */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-40 blur-2xl"
        style={{ background: "#e8632a" }}
      />
      <div
        className="absolute -bottom-14 -left-14 w-48 h-48 rounded-full opacity-20 blur-2xl"
        style={{ background: "#e8632a" }}
      />

      {/* Dot grid texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`dots-${category.replace(/\s+/g, "-")}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${category.replace(/\s+/g, "-")})`} />
      </svg>

      {/* Centered icon */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: "clamp(56px, 22%, 96px)",
            height: "clamp(56px, 22%, 96px)",
            background: "rgba(232,99,42,0.15)",
            border: "1px solid rgba(232,99,42,0.3)",
          }}
        >
          <Icon
            style={{ width: "45%", height: "45%", color: "#e8632a" }}
            strokeWidth={1.75}
          />
        </div>
      </div>
    </div>
  );
}
