// Markdown-versies van de belangrijkste pagina's, voor AI-agents die met
// `Accept: text/markdown` om een pagina vragen. De inhoud komt uit dezelfde
// bronnen als de HTML-pagina's, zodat beide versies altijd gelijk lopen.

import { blogPosts, getBlogPost, getSortedBlogPosts, type BlogPost } from "@/lib/blog-posts";
import { euro, maatwerk, PRICING, priceExamples, priceSentence, pricingFaq, TRIAL_DAYS, vatNote, whoCounts, yearlySentence } from "@/lib/pricing";
import { faqGroups } from "@/lib/faq";
import { comparisonRows, homeFaq } from "@/lib/home-faq";
import { pilotOffer, pilotSentence } from "@/lib/offer";
import { features } from "@/lib/features";

export const SITE_URL = "https://www.reva-app.nl";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
// Interne links in blogteksten ([tekst](/pad)) absoluut maken voor agents
const absLinks = (text: string) => text.replace(/\]\((\/[^)]*)\)/g, (_, p: string) => `](${abs(p)})`);

function faqSection(items: { q: string; a: string }[], heading = "## Veelgestelde vragen") {
  return [heading, "", ...items.flatMap((i) => [`### ${i.q}`, "", i.a, ""])].join("\n");
}

const MORE_LINKS = [
  "## Meer informatie",
  "",
  `- [Functies](${SITE_URL}/functies)`,
  `- [Fysiotherapie software](${SITE_URL}/fysiotherapie-software)`,
  `- [Alternatief voor WhatsApp](${SITE_URL}/alternatief-voor-whatsapp)`,
  `- [Oefenprogramma-app](${SITE_URL}/oefenprogramma-app)`,
  `- [Pilotprogramma](${SITE_URL}/pilot)`,
  `- [Prijzen](${SITE_URL}/prijzen)`,
  `- [Veelgestelde vragen](${SITE_URL}/faq)`,
  `- [Blog](${SITE_URL}/blog)`,
  `- [Demo aanvragen](${SITE_URL}/demo-aanvragen)`,
  `- [Contact](${SITE_URL}/contact): info@reva-app.nl, 06 14933478`,
  `- [Samenvatting voor AI-agents (llms.txt)](${SITE_URL}/llms.txt)`,
  `- [Sitemap](${SITE_URL}/sitemap.xml)`,
].join("\n");

export function pricingTable() {
  return [
    priceSentence,
    "",
    "| Behandelaars | Per maand (incl. btw) | Per jaar (incl. btw) |",
    "| --- | --- | --- |",
    ...priceExamples.map((ex) => `| ${ex.seats} | ${euro(ex.monthly)} | ${euro(ex.yearly)} |`),
    "",
    `Rekenregel: behandelaar 1 tot en met 9 kosten ${euro(PRICING.seatPrice)} per maand, elke behandelaar vanaf de ${PRICING.staffelFrom}e ${euro(PRICING.staffelPrice)}. ${yearlySentence} Alle functies zijn inbegrepen, ook de AI-suggesties van REVA-inzichten. ${whoCounts} Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. ${vatNote}`,
    "",
    `${maatwerk.name}: ${maatwerk.description} Prijs op aanvraag via ${SITE_URL}/contact of info@reva-app.nl.`,
  ].join("\n");
}

export function homeMarkdown() {
  return [
    "# REVA App: Recovery Management Platform en patiëntenportaal voor fysiotherapiepraktijken",
    "",
    "> REVA is een Recovery Management Platform voor fysiotherapiepraktijken: het platform voor herstelbegeleiding tussen de behandelingen door. Het EPD blijft leidend voor agenda en declaratie. Patiënten houden in de REVA-app zelf hun herstel bij (check-in, oefeningen, medicatie en voortgang), en de fysiotherapeut ziet in het praktijkportaal wie aandacht nodig heeft.",
    "",
    `**Prijs:** ${priceSentence}`,
    "",
    ...(pilotOffer.active && pilotOffer.spotsLeft > 0
      ? [
          `**Pilotprogramma:** ${pilotSentence} Voorwaarden en aanmelden via ${SITE_URL}/pilot.`,
          "",
        ]
      : []),
    "## Waarom praktijken voor REVA kiezen",
    "",
    "- **Europese servers:** patiëntdata staat versleuteld op servers binnen de EU, op basis van een verwerkersovereenkomst onder de AVG.",
    "- **Patiënt en fysio dichter bij elkaar:** ook tussen afspraken door blijft de fysiotherapeut betrokken, zonder extra telefoontjes.",
    "- **Meer grip op het herstel:** patiënten zien hun eigen voortgang, de fysiotherapeut ziet wie afwijkt van het plan.",
    "- **Naast elk EPD:** agenda, verslaglegging en declaratie blijven in het EPD. REVA richt zich op het herstel, zonder dubbele invoer.",
    "",
    "## Voor wie",
    "",
    "REVA is bedoeld voor fysiotherapiepraktijken van elke omvang: van de zelfstandige fysiotherapeut tot praktijken met meerdere behandelaars en vestigingen. Het is vooral waardevol voor praktijken die patiënten begeleiden na een operatie, blessure of langdurig hersteltraject.",
    "",
    "## Drie stations",
    "",
    "- **EPD:** agenda, verslaglegging, administratie en declaratie. Blijft zoals het is en blijft leidend.",
    "- **Fysiotherapeut:** begeleidt het herstel via het REVA-praktijkportaal.",
    "- **Patiënt:** houdt het herstel thuis bij in de REVA-app, gratis voor de patiënt.",
    "",
    "## Wat REVA oplost",
    "",
    "- Je ziet in één oogopslag welke patiënten aandacht nodig hebben (hoge pijn, zwelling, lage dagscore, weinig activiteit of een ingevulde intake), zonder elk dossier handmatig te bekijken.",
    "- Minder tijd kwijt aan telefoontjes en appjes over hoe het gaat: patiënten loggen dat zelf.",
    "- Een professioneel patiëntenportaal in de huisstijl van je eigen praktijk.",
    "- Eenvoudig te implementeren, zonder ingewikkeld traject met IT.",
    "",
    "REVA vervangt je EPD niet en heeft er geen koppeling mee. REVA doet geen agenda, planning of declaratie, en heeft geen chatfunctie.",
    "",
    "## Functies",
    "",
    ...features.map((f) => `- **${f.title}:** ${f.lead}`),
    "",
    "REVA werkt in de browser, voor zowel het praktijkteam als patiënten. Patiënten kunnen REVA als app op het beginscherm van hun telefoon zetten.",
    "",
    "## REVA naast WhatsApp, telefoon en Excel",
    "",
    "| | WhatsApp, telefoon en Excel | Met REVA |",
    "| --- | --- | --- |",
    ...comparisonRows.map((r) => `| ${r.topic} | ${r.old} | ${r.reva} |`),
    "",
    "## De demo",
    "",
    "Een demo duurt 30 minuten en is online en vrijblijvend. Daarin komen aan bod: de huidige werkwijze van de praktijk, het dashboard met voorbeeldpatiënten (signalering, dossier en herstelplan), de app van de patiënt en de check-in, en wat REVA kost voor het aantal behandelaars, met de planning. Na een aanvraag neemt REVA binnen één werkdag contact op. Aanvragen via " + `${SITE_URL}/demo-aanvragen.`,
    "",
    "## Prijzen",
    "",
    pricingTable(),
    "",
    faqSection(homeFaq),
    MORE_LINKS,
    "",
  ].join("\n");
}

export function pricingMarkdown() {
  return [
    "# Prijzen van REVA",
    "",
    "> Eén prijsmodel: betalen per behandelaar, inclusief btw. Onbeperkt patiënten en locaties, alle functies inbegrepen.",
    "",
    pricingTable(),
    ...(pilotOffer.active && pilotOffer.spotsLeft > 0 ? ["", `**Pilotprogramma:** ${pilotSentence} Zie ${SITE_URL}/pilot.`] : []),
    "",
    faqSection(pricingFaq),
    MORE_LINKS,
    "",
  ].join("\n");
}

export function faqMarkdown() {
  return [
    "# Veelgestelde vragen over REVA",
    "",
    ...faqGroups.flatMap((g) => [faqSection(g.items, `## ${g.category}`)]),
    MORE_LINKS,
    "",
  ].join("\n");
}

export function blogIndexMarkdown() {
  return [
    "# Blog van REVA",
    "",
    "> Artikelen voor fysiotherapiepraktijken over patiëntcommunicatie, therapietrouw, digitalisering, AVG en praktijkvoering.",
    "",
    ...getSortedBlogPosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) (${p.publishedAt}): ${p.excerpt}`),
    "",
    MORE_LINKS,
    "",
  ].join("\n");
}

export function blogPostMarkdown(post: BlogPost) {
  const lines = [
    `# ${post.title}`,
    "",
    `Categorie: ${post.category}. Gepubliceerd op ${post.publishedAt}${post.updatedAt ? `, bijgewerkt op ${post.updatedAt}` : ""}. Leestijd: ${post.readTime}.`,
    "",
    `> ${post.metaDescription}`,
    "",
  ];
  if (post.summary) lines.push("## In het kort", "", ...post.summary.map((s) => `- ${absLinks(s)}`), "");
  lines.push(...post.intro.map((p) => `${absLinks(p)}\n`));
  for (const section of post.sections) {
    lines.push(`## ${section.heading}`, "", ...section.paragraphs.map((p) => `${absLinks(p)}\n`));
    if (section.list) lines.push(...section.list.map((i) => `- ${absLinks(i)}`), "");
    if (section.table) {
      const t = section.table;
      lines.push(`| ${t.headers.join(" | ")} |`, `| ${t.headers.map(() => "---").join(" | ")} |`, ...t.rows.map((r) => `| ${r.join(" | ")} |`), "");
    }
  }
  if (post.faq) lines.push(faqSection(post.faq.map((f) => ({ q: f.question, a: absLinks(f.answer) }))));
  lines.push(
    "## Over REVA",
    "",
    `REVA is een Recovery Management Platform en patiëntenportaal voor fysiotherapiepraktijken, naast het EPD. ${priceSentence} [Vraag een demo aan](${SITE_URL}/demo-aanvragen) of bekijk de [prijzen](${SITE_URL}/prijzen).`,
    "",
  );
  return lines.join("\n");
}

export function notFoundMarkdown(path: string) {
  return [
    "# 404: Deze pagina werkt aan zijn herstel",
    "",
    `De pagina \`${path}\` bestaat niet (meer) op ${SITE_URL}. Misschien is de link verouderd of zit er een typefout in het adres.`,
    "",
    "Hier vind je wel wat je zoekt:",
    "",
    `- [Homepage](${SITE_URL}/)`,
    `- [Overzicht van REVA voor AI-agents (llms.txt)](${SITE_URL}/llms.txt)`,
    `- [Sitemap met alle pagina's](${SITE_URL}/sitemap.xml)`,
    `- [Prijzen](${SITE_URL}/prijzen)`,
    `- [Blog](${SITE_URL}/blog)`,
    `- [Contact](${SITE_URL}/contact): info@reva-app.nl, 06 14933478`,
    "",
  ].join("\n");
}

/** Markdown voor een pad met een eigen, schone versie; null als er geen is. */
export function markdownForPath(path: string): string | null {
  const clean = path.replace(/\/+$/, "") || "/";
  if (clean === "/") return homeMarkdown();
  if (clean === "/prijzen") return pricingMarkdown();
  if (clean === "/faq") return faqMarkdown();
  if (clean === "/blog") return blogIndexMarkdown();
  const blog = clean.match(/^\/blog\/([^/]+)$/);
  if (blog) {
    const post = getBlogPost(blog[1]);
    return post ? blogPostMarkdown(post) : notFoundMarkdown(clean);
  }
  return null;
}

/** True als het pad een blogartikel is dat niet bestaat. */
export function isMissingBlogPost(path: string) {
  const m = path.replace(/\/+$/, "").match(/^\/blog\/([^/]+)$/);
  return !!m && !blogPosts.some((p) => p.slug === m[1]);
}
