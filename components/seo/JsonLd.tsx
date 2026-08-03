export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generieke WebPage schema voor pagina's zonder specifieker primair type
 * (bijv. ContactPage, FAQPage, BlogPosting). Koppelt de pagina aan de
 * site-brede Organization/WebSite/SoftwareApplication entiteiten uit layout.tsx.
 */
export function webPageJsonLd({
  url,
  name,
  description,
  type = "WebPage",
}: {
  url: string;
  name: string;
  description: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "nl-NL",
    isPartOf: { "@id": "https://www.reva-app.nl/#website" },
    about: { "@id": "https://www.reva-app.nl/#app" },
    publisher: { "@id": "https://www.reva-app.nl/#organization" },
  };
}

export function itemListJsonLd(items: { name: string; description?: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}
