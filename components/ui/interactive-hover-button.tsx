import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

/**
 * Aangepast aan het REVA design system: gebruikt de vaste oranje accentkleur
 * (#e8632a / #d4581f) in plaats van shadcn's generieke primary/background
 * tokens, die in dit project niet bestaan. Geen vulcirkel: op hover schuift
 * en vervaagt alleen een pijltje in, naast de al zichtbare tekst.
 */
const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3.5 text-center text-base font-medium text-white transition-colors duration-300",
        className,
      )}
      style={{ background: "#e8632a" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#d4581f"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e8632a"; }}
      {...props}
    >
      {text}
      <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
