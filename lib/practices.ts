// Fysiopraktijken die met REVA werken, voor de kaart op /praktijken.
// Voeg een praktijk toe met haar coördinaten (bijvoorbeeld via Google Maps:
// rechtsklik op de locatie en kopieer de getallen). Zolang deze lijst leeg is,
// staat de pagina niet in Google en niet in de sitemap.

export type Practice = {
  name: string;
  city: string;
  lat: number;
  lng: number;
  website?: string;
  /** Pad naar het logo in /public, bijvoorbeeld "/praktijken/fysio-de-linde.svg". Zonder logo niet in de slider. */
  logo?: string;
};

/** Praktijken met een logo, voor de logo-slider op de homepage */
export const practicesWithLogo = () => practices.filter((p) => !!p.logo);

export const practices: Practice[] = [];
