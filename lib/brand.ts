/**
 * REVA-merk: de enige bron voor het logo op de website.
 *
 * Beeldmerk en woordmerk komen uit het REVA-logopakket (zelfde vorm als in de
 * app, zie lib/brand.ts in reva-app). In de UI: components/brand/RevaLogo.tsx.
 */

export const REVA_ORANGE = "#e8632a";

export const REVA_GLYPH = {
  width: 625.47,
  height: 801.59,
  path:
    "M 0 801.59 L 0 0 L 335.33 0 C 393.27 0 443.32 9.79 485.47 29.36 C 527.63 48.93 560.37 76.78 583.7 112.91 " +
    "C 607.04 149.03 618.7 191.56 618.7 240.48 C 618.7 277.36 610.8 310.1 594.98 338.7 C 579.18 367.31 557.92 390.27 531.2 407.58 " +
    "C 504.48 424.89 474.94 435.43 442.58 439.19 L 436.94 427.89 C 488.86 427.89 528.94 439.56 557.16 462.89 " +
    "C 585.38 486.23 601.38 521.98 605.16 570.16 L 625.47 801.59 L 476.45 801.59 L 459.52 591.59 " +
    "C 457.25 559.99 447.09 536.66 429.03 521.61 C 410.97 506.55 380.86 499.02 338.7 499.02 L 146.78 499.02 L 146.78 801.59 Z " +
    "M 146.78 370.31 L 326.28 370.31 C 370.7 370.31 405.32 359.78 430.16 338.7 C 454.99 317.63 467.41 287.9 467.41 249.52 " +
    "C 467.41 210.38 454.8 180.28 429.58 159.2 C 404.37 138.12 367.68 127.58 319.52 127.58 L 146.78 127.58 Z",
} as const;

// Woordmerk "REVA" (Geist Bold, -2,5% letterafstand), uitgelijnd op de basislijn.
export const REVA_WORDMARK = {
  width: 862,
  height: 236,
  path: "M24.55 0L24.55 -235.52L127.71 -235.52Q153.59 -235.52 172.66 -226.9Q191.73 -218.27 202.02 -202.51Q212.3 -186.76 212.3 -165.2Q212.3 -148.94 205.5 -136.34Q198.7 -123.73 186.92 -115.77Q175.15 -107.81 159.89 -105.82L158.89 -108.8Q182.45 -108.8 194.72 -98.69Q206.99 -88.57 208.65 -67.67L214.62 0L163.21 0L158.89 -59.71Q157.9 -73.31 150.43 -79.78Q142.97 -86.25 125.06 -86.25L74.97 -86.25L74.97 0ZM74.97 -128.37L122.07 -128.37Q140.32 -128.37 150.43 -136.83Q160.55 -145.29 160.55 -160.88Q160.55 -176.81 150.27 -184.93Q139.99 -193.06 120.41 -193.06L74.97 -193.06Z M247.53 0L247.53 -235.52L411.4 -235.52L411.4 -193.06L297.95 -193.06L297.95 -138.99L407.42 -138.99L407.42 -97.19L297.95 -97.19L297.95 -42.46L414.05 -42.46L414.05 0Z M514.89 0L429.97 -235.52L482.05 -235.52L544.75 -56.72L607.44 -235.52L659.52 -235.52L574.27 0Z M625.89 0L710.81 -235.52L770.52 -235.52L855.44 0L803.02 0L785.77 -50.09L695.22 -50.09L677.97 0ZM709.48 -91.55L771.84 -91.55L740.66 -182.45Z",
} as const;

/**
 * Volledig logo (tegel + woordmerk) als SVG-tekst, voor plekken zonder React-DOM
 * zoals de OG-afbeeldingen. Zelfde opbouw als reva-logo.svg uit het logopakket.
 */
export function revaLogoSvg(wordmarkColor = "#1a1a1a") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1507 512" width="1507" height="512"><rect width="512" height="512" rx="112.64" fill="${REVA_ORANGE}"/><path transform="translate(152.128 122.88) scale(0.332)" fill="#ffffff" d="${REVA_GLYPH.path}"/><path transform="translate(645.12 373.76)" fill="${wordmarkColor}" d="${REVA_WORDMARK.path}"/></svg>`;
}

export function revaLogoDataUri(wordmarkColor?: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(revaLogoSvg(wordmarkColor))}`;
}
