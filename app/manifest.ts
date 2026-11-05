import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "REVA | Patiëntenportaal voor fysiotherapiepraktijken",
    short_name: "REVA",
    description:
      "REVA is het patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden zelf hun herstel bij, praktijken krijgen overzicht en signalering van wie aandacht nodig heeft.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f4",
    theme_color: "#e8632a",
    lang: "nl",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
