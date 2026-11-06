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
};

export const practices: Practice[] = [];
