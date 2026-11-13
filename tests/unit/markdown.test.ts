import { test } from "node:test";
import assert from "node:assert/strict";
import { blogPosts } from "@/lib/blog-posts";
import { euro, priceExamples, priceSentence } from "@/lib/pricing";
import { isMissingBlogPost, markdownForPath, notFoundMarkdown } from "@/lib/agent/markdown";
import { htmlToMarkdown } from "@/lib/agent/html-to-markdown";

test("homepage heeft een Markdown-versie met merk, positionering en prijzen", () => {
  const md = markdownForPath("/");
  assert.ok(md);
  assert.match(md, /^# REVA App: Recovery Management Platform/);
  assert.ok(md.includes(priceSentence));
  assert.ok(md.includes("https://www.reva-app.nl/llms.txt"));
  for (const old of ["Solo", "Praktijk Plus", "Enterprise", "exclusief btw", "actieve patiënten", "iOS"]) assert.ok(!md.includes(old), old);
});

test("prijzen in Markdown komen overeen met de prijsdata", () => {
  const md = markdownForPath("/prijzen")!;
  for (const ex of priceExamples) {
    assert.ok(md.includes(`| ${ex.seats} | ${euro(ex.monthly)} | ${euro(ex.yearly)} |`), `${ex.seats} behandelaars`);
  }
  assert.ok(md.includes("inclusief btw"));
  assert.ok(!md.includes("exclusief btw"));
  assert.deepEqual(priceExamples.map((e) => e.monthly), [29, 87, 145, 261, 330]);
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

test("HTML naar Markdown: kop zonder harde regelafbreking, links gescheiden, beschrijving onder de titel", () => {
  const html = `<title>Functies | REVA App</title><meta name="description" content="Alle functies.">
    <main><p>Functies</p><h1>9 modules voor<br>grip op je zorg</h1><a href="/demo-aanvragen">Demo</a><a href="/faq">FAQ</a></main>`;
  const md = htmlToMarkdown(html);
  assert.ok(md.includes("# 9 modules voor grip op je zorg\n\n> Alle functies."));
  assert.ok(md.includes("[Demo](https://www.reva-app.nl/demo-aanvragen) [FAQ](https://www.reva-app.nl/faq)"));
  assert.ok(!md.startsWith(">"));
});

test("HTML naar Markdown: afbeeldingen weg, link los van voorgaande tekst", () => {
  const html = `<main><h1>Over</h1><p><a href="#verhaal">Lees het verhaal</a><a href="/demo-aanvragen">Demo</a></p><img src="/x.png" alt="Portret"></main>`;
  const md = htmlToMarkdown(html);
  assert.ok(!md.includes("!["), md);
  assert.ok(md.includes("Lees het verhaal [Demo](https://www.reva-app.nl/demo-aanvragen)"), md);
});


test("llms.txt loopt gelijk met de prijs- en pilotdata en noemt geen oude pakketten", async () => {
  const { readFileSync } = await import("node:fs");
  const { pilotSentence } = await import("@/lib/offer");
  const txt = readFileSync(new URL("../../public/llms.txt", import.meta.url), "utf8");
  assert.ok(txt.includes(priceSentence), "kernzin prijs");
  assert.ok(txt.includes(pilotSentence), "kernzin pilot");
  for (const ex of priceExamples) assert.ok(txt.includes(`${ex.seats === 1 ? "1 behandelaar" : `${ex.seats} behandelaars`} ${euro(ex.monthly)}`), `${ex.seats} behandelaars`);
  for (const old of ["Solo", "Praktijk Plus", "Enterprise", "exclusief btw", "actieve patiënten", "50% korting", "6 maanden gratis", "receptie"]) {
    assert.ok(!txt.includes(old), old);
  }
});
