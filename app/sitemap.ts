import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { practices } from "@/lib/practices";
import { pageDates } from "@/lib/page-dates";
import { provinces } from "@/lib/provinces";

const BASE = "https://www.reva-app.nl";
const abs = (path: string) => `${BASE}${path}`;

// Pagina's in volgorde van belang. Afbeeldingen komen in de sitemap terecht als
// image:image-regels, zodat ze in Google Afbeeldingen gevonden kunnen worden.
const pages: { path: string; images?: string[] }[] = [
  { path: "/", images: ["/headline-reva-app.webp", "/image-reva-app.png"] },
  { path: "/functies", images: ["/image-reva-app.png"] },
  { path: "/functies/voor-fysios" },
  { path: "/functies/voor-patienten", images: ["/check-in-mobile.png"] },
  { path: "/fysiotherapie-software", images: ["/image-reva-app.png"] },
  { path: "/besparing-berekenen" },
  { path: "/alternatief-voor-whatsapp" },
  { path: "/oefenprogramma-app" },
  { path: "/pilot" },
  { path: "/prijzen" },
  { path: "/faq" },
  { path: "/over-reva", images: ["/stef.png", "/ziekenhuis-knie.jpeg", "/rontgenfoto-knie.png"] },
  { path: "/blog" },
  { path: "/demo-aanvragen" },
  { path: "/contact" },
  { path: "/documentatie" },
  { path: "/inloggen" },
  { path: "/privacy-policy" },
  { path: "/algemene-voorwaarden" },
  { path: "/cookiebeleid" },
  { path: "/legal/dpa" },
  { path: "/verwijder-account" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const postDate = (p: (typeof blogPosts)[number]) => p.updatedAt ?? p.publishedAt;
  const newestPost = blogPosts.map(postDate).sort().at(-1)!;

  const staticEntries: MetadataRoute.Sitemap = pages.map(({ path, images }) => ({
    // De homepage zonder slash, gelijk aan de canonical
    url: path === "/" ? BASE : abs(path),
    // Het blogoverzicht verandert mee met het nieuwste artikel
    lastModified: path === "/blog" ? newestPost : pageDates[path],
    ...(images && { images: images.map(abs) }),
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: postDate(post),
    ...(post.image && { images: [abs(post.image.src)] }),
  }));

  // Praktijkenkaart pas opnemen als er praktijken op staan (tot die tijd noindex)
  const practiceEntries: MetadataRoute.Sitemap = practices.length
    ? [{ url: abs("/praktijken"), lastModified: pageDates["/praktijken"] }]
    : [];

  // Provinciepagina's voor lokale vindbaarheid
  const provinceEntries: MetadataRoute.Sitemap = provinces.map((p) => ({
    url: abs(`/fysiotherapie-software/${p.slug}`),
    lastModified: pageDates[`/fysiotherapie-software/${p.slug}`],
  }));

  return [...staticEntries, ...provinceEntries, ...practiceEntries, ...blogEntries];
}
