import { REVA_GLYPH, REVA_ORANGE, REVA_WORDMARK } from "@/lib/brand";

/**
 * Breedte en hoogte expliciet zetten (attributen én stijl). Safari berekent bij een SVG
 * met alleen een hoogte en `width: auto` soms een te smalle breedte en knipt de rest af.
 */
function sized(height: number, ratio: number): { width: number; height: number; style: React.CSSProperties } {
  const width = Math.round(height * ratio * 100) / 100;
  return { width, height, style: { width, height } };
}

/**
 * De "R" uit het REVA-logo als inline SVG: scherp op elk formaat, neemt de
 * tekstkleur over (`text-white`). Geef de hoogte in pixels mee; de breedte
 * volgt uit de verhouding.
 */
export function RevaGlyph({ height, className = "" }: { height: number; className?: string }) {
  const dims = sized(height, REVA_GLYPH.width / REVA_GLYPH.height);
  return (
    <svg
      viewBox={`0 0 ${REVA_GLYPH.width} ${REVA_GLYPH.height}`}
      width={dims.width}
      height={dims.height}
      className={`shrink-0 ${className}`}
      style={dims.style}
      overflow="visible"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={REVA_GLYPH.path} />
    </svg>
  );
}

/** Het woord "REVA" uit het logo. Neemt de tekstkleur over; geef een hoogte mee. */
export function RevaWordmark({ height, className = "" }: { height: number; className?: string }) {
  const dims = sized(height, REVA_WORDMARK.width / REVA_WORDMARK.height);
  return (
    <svg
      viewBox={`0 0 ${REVA_WORDMARK.width} ${REVA_WORDMARK.height}`}
      width={dims.width}
      height={dims.height}
      className={`shrink-0 ${className}`}
      style={dims.style}
      overflow="visible"
      fill="currentColor"
      role="img"
      aria-label="REVA"
    >
      <path transform="translate(0 235.52)" d={REVA_WORDMARK.path} />
    </svg>
  );
}

/**
 * Het beeldmerk: witte R op de oranje afgeronde tegel (het app-icoon).
 * `size` in pixels; afronding en R-grootte volgen de verhoudingen uit het logopakket.
 */
export function RevaMark({ size = 32, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size, borderRadius: size * 0.22, background: REVA_ORANGE, ...style }}
      aria-hidden="true"
    >
      <RevaGlyph height={Math.round(size * 0.52 * 10) / 10} className="text-white" />
    </span>
  );
}

/**
 * Volledig logo: beeldmerk + woordmerk, in de verhoudingen uit het logopakket.
 * Het woordmerk neemt de tekstkleur over, dus zet `color` voor lichte of donkere achtergronden.
 */
export function RevaLogo({ size = 32, className = "", color }: { size?: number; className?: string; color?: string }) {
  return (
    <span className={`inline-flex items-center shrink-0 ${className}`} style={{ gap: size * 0.26, color }}>
      <RevaMark size={size} />
      <RevaWordmark height={Math.round(size * 0.46 * 10) / 10} />
    </span>
  );
}
