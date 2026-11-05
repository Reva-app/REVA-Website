import { test } from "node:test";
import assert from "node:assert/strict";
import { blogPosts } from "@/lib/blog-posts";
import { pricingTiers, enterpriseTier, yearlyPerMonth } from "@/lib/pricing";
import { isMissingBlogPost, markdownForPath, notFoundMarkdown } from "@/lib/agent/markdown";
import { htmlToMarkdown } from "@/lib/agent/html-to-markdown";

test("homepage heeft een Markdown-versie met merk, product en prijzen", () => {
  const md = markdownForPath("/");
  assert.ok(md);
  assert.match(md, /^# REVA App: patiëntenportaal en fysiotherapiesoftware/);
  for (const tier of pricingTiers) assert.ok(md.includes(`| ${tier.name}`), tier.name);
  assert.ok(md.includes("https://www.reva-app.nl/llms.txt"));
});

test("prijzen in Markdown komen overeen met de prijsdata", () => {
  const md = markdownForPath("/prijzen")!;
  for (const tier of pricingTiers) {
    assert.ok(md.includes(`€${tier.monthly}`), `${tier.name} maandprijs`);
    assert.ok(md.includes(`€${yearlyPerMonth(tier)} per maand`), `${tier.name} jaarprijs per maand`);
  }
  assert.ok(md.includes(`vanaf €${enterpriseTier.fromMonthly}`));
  assert.ok(md.includes("exclusief btw"));
  assert.equal(yearlyPerMonth(pricingTiers[0]), 41);
  assert.deepEqual(pricingTiers.map(yearlyPerMonth), [41, 108, 191, 291]);
});

test("elk blogartikel heeft een Markdown-versie met absolute links", () => {
  for (const post of blogPosts) {
    const md = markdownForPath(`/blog/${post.slug}`)!;
    assert.ok(md.startsWith(`# ${post.title}`), post.slug);
    assert.ok(!/\]\(\//.test(md), `${post.slug} bevat geen relatieve links`);
  }
  assert.ok(markdownForPath("/blog")!.includes(blogPosts[0].title));
});

test("onbekend blogartikel geeft de 404-tekst", () => {
  assert.equal(isMissingBlogPost("/blog/bestaat-niet"), true);
  assert.equal(isMissingBlogPost(`/blog/${blogPosts[0].slug}`), false);
  assert.match(markdownForPath("/blog/bestaat-niet")!, /^# 404/);
});

test("404 in Markdown legt de fout uit en linkt naar llms.txt en sitemap", () => {
  const md = notFoundMarkdown("/iets");
  assert.ok(md.length >= 20);
  assert.ok(md.includes("/iets"));
  assert.ok(md.includes("https://www.reva-app.nl/llms.txt"));
  assert.ok(md.includes("https://www.reva-app.nl/sitemap.xml"));
});

test("pagina zonder eigen versie valt terug op omzetting", () => {
  assert.equal(markdownForPath("/functies"), null);
});

test("HTML naar Markdown neemt alleen de hoofdinhoud mee", () => {
  const html = `<html><head><title>Functies | REVA App</title><meta name="description" content="Alle functies."></head>
    <body><header><nav>Menu</nav></header><main><h1>Functies</h1><p>Tekst met <a href="/prijzen">prijzen</a>.</p>
    <button>Klik</button><script>x()</script><svg><path d="M0"/></svg></main><footer>Footer</footer></body></html>`;
  const md = htmlToMarkdown(html);
  assert.match(md, /# Functies/);
  assert.ok(md.includes("[prijzen](https://www.reva-app.nl/prijzen)"));
  assert.ok(md.includes("> Alle functies."));
  for (const noise of ["Menu", "Footer", "Klik", "x()"]) assert.ok(!md.includes(noise), noise);
});
