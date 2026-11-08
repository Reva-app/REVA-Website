// Markdown-versies van de belangrijkste pagina's, voor AI-agents die met
// `Accept: text/markdown` om een pagina vragen. De inhoud komt uit dezelfde
// bronnen als de HTML-pagina's, zodat beide versies altijd gelijk lopen.

import { blogPosts, getBlogPost, getSortedBlogPosts, type BlogPost } from "@/lib/blog-posts";
import { enterpriseTier, pricingFaq, pricingTiers, TRIAL_DAYS, yearlyPerMonth } from "@/lib/pricing";
import { faqGroups } from "@/lib/faq";
import { comparisonRows, homeFaq } from "@/lib/home-faq";
import { pilotOffer } from "@/lib/offer";

export const SITE_URL = "https://www.reva-app.nl";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
// Interne links in blogteksten ([tekst](/pad)) absoluut maken voor agents
const absLinks = (text: string) => text.replace(/\]\((\/[^)]*)\)/g, (_, p: string) => `](${abs(p)})`);
const euro = (n: number) => `€${n.toLocaleString("nl-NL")}`;

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
  const rows = pricingTiers.map((t) => {
    const f = t.features.slice(1); // "Alle functies van REVA" geldt voor elk pakket
    return `| ${t.name}${t.popular ? " (meest gekozen)" : ""} | ${euro(t.monthly)} | ${euro(t.yearly)} (${euro(yearlyPerMonth(t))} per maand) | ${f.join(", ")} |`;
  });
  return [
    "| Pakket | Per maand | Per jaar | Inbegrepen |",
    "| --- | --- | --- | --- |",
    ...rows,
    `| ${enterpriseTier.name} | vanaf ${euro(enterpriseTier.fromMonthly)} | op maat | ${enterpriseTier.features.slice(1).join(", ")} |`,
    "",
    `Elk pakket bevat alle functies van REVA. Bij jaarlijks betalen krijg je 2 maanden gratis. Je kunt REVA ${TRIAL_DAYS} dagen gratis proberen. Alleen actieve patiënten tellen mee; patiënten van wie de behandeling is afgerond tellen niet mee. Alle prijzen zijn exclusief btw.`,
  ].join("\n");
}

export function homeMarkdown() {
  return [
    "# REVA App: patiëntenportaal en fysiotherapiesoftware voor praktijken",
    "",
    "> REVA is een patiëntenportaal voor fysiotherapiepraktijken. Patiënten houden zelf hun herstel bij (pijn, energie, oefeningen, medicatie en voortgang), en de praktijk ziet in één overzicht wie aandacht nodig heeft. Minder telefoontjes en berichten via WhatsApp, meer overzicht over alle patiënten.",
    "",
    ...(pilotOffer.active && pilotOffer.spotsLeft > 0
      ? [
          `**Pilotprogramma:** REVA zoekt ${pilotOffer.spotsTotal} praktijken die REVA als eerste gebruiken, met ${pilotOffer.discountPercent}% korting op het eerste jaar en persoonlijke onboarding, in ruil voor feedback en een klantervaring. Voorwaarden en aanmelden via ${SITE_URL}/pilot.`,
          "",
        ]
      : []),
    "## Waarom praktijken voor REVA kiezen",
    "",
    "- **Europese servers:** patiëntdata staat versleuteld op servers binnen de EU, op basis van een verwerkersovereenkomst onder de AVG.",
    "- **Patiënt en fysio dichter bij elkaar:** ook tussen afspraken door blijft de fysiotherapeut betrokken, zonder extra telefoontjes.",
    "- **Meer grip op het herstel:** patiënten zien hun eigen voortgang, de fysiotherapeut ziet wie afwijkt van het plan.",
    "- **Altijd een coach bij de hand:** herstelplan, oefeningen en advies staan op de telefoon van de patiënt.",
    "",
    "## Voor wie",
    "",
    "REVA is bedoeld voor fysiotherapiepraktijken van elke omvang: van de zelfstandige fysiotherapeut tot praktijken met meerdere behandelaars en vestigingen. Het is vooral waardevol voor praktijken die patiënten begeleiden na een operatie, blessure of langdurig hersteltraject.",
    "",
    "## Wat REVA oplost",
    "",
    "- Je ziet in één oogopslag welke patiënten aandacht nodig hebben (hoge pijnscore, weinig activiteit, gemiste checks), zonder elk dossier handmatig te bekijken.",
    "- Minder tijd kwijt aan telefoontjes en appjes over hoe het gaat: patiënten loggen dat zelf.",
    "- Een professioneel patiëntenportaal in de huisstijl van je eigen praktijk.",
    "- Eenvoudig te implementeren, zonder ingewikkeld traject met IT.",
    "",
    "REVA vervangt je EPD, agenda of declaratiesysteem niet. Het is een aanvullend patiëntenportaal voor de tijd tussen behandelingen.",
    "",
    "## Functies",
    "",
    "- Praktijkoverzicht met signalering",
    "- Checks van patiënten over pijn, energie en stemming",
    "- Afspraken en behandelplan",
    "- Herstelplannen en oefeningen",
    "- Pijn en medicatieregistratie",
    "- Digitaal patiëntdossier",
    "- Voortgangsanalyse met grafieken",
    "- Patiëntgegevens en contacten",
    "- Behandeldoelen en mijlpalen",
    "",
    "REVA werkt in de browser en op iOS en Android, voor zowel het praktijkteam als patiënten.",
    "",
    "## REVA naast WhatsApp, telefoon en Excel",
    "",
    "| | WhatsApp, telefoon en Excel | Met REVA |",
    "| --- | --- | --- |",
    ...comparisonRows.map((r) => `| ${r.topic} | ${r.old} | ${r.reva} |`),
    "",
    "## De demo",
    "",
    "Een demo duurt 30 minuten en is online en vrijblijvend. Daarin komen aan bod: de huidige werkwijze van de praktijk, het dashboard met voorbeeldpatiënten (signalering, dossier en herstelplan), de app van de patiënt en de check-in, en welk pakket past met prijs en planning. Na een aanvraag neemt REVA binnen één werkdag contact op. Aanvragen via " + `${SITE_URL}/demo-aanvragen.`,
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
    "> Vijf pakketten voor fysiotherapiepraktijken, van zelfstandig fysiotherapeut tot keten. Elk pakket bevat alle functies van REVA; het verschil zit in het aantal medewerkers, vestigingen en actieve patiënten, en in support en onboarding.",
    "",
    pricingTable(),
    "",
    `${enterpriseTier.name}: ${enterpriseTier.description} Neem contact op via ${SITE_URL}/contact of info@reva-app.nl.`,
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
    `REVA is een patiëntenportaal voor fysiotherapiepraktijken. [Vraag een demo aan](${SITE_URL}/demo-aanvragen) of bekijk de [prijzen](${SITE_URL}/prijzen).`,
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
