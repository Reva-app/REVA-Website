// Controleert de publieke eindpunten van een draaiende site.
// Gebruik: BASE_URL=https://www.reva-app.nl npm run test:endpoints  (standaard http://localhost:3000)
import { test } from "node:test";
import assert from "node:assert/strict";

const BASE = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
// Vary bevat "Accept" als los token (niet alleen "Accept-Encoding")
const variesOnAccept = (vary: string | null) => (vary ?? "").split(",").some((v) => v.trim().toLowerCase() === "accept");
const get = (path: string, accept: string) => fetch(`${BASE}${path}`, { headers: { accept }, redirect: "follow" });

test("homepage: Markdown bij Accept: text/markdown", async () => {
  const res = await get("/", "text/markdown");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") ?? "", /^text\/markdown/);
  assert.ok(variesOnAccept(res.headers.get("vary")), `Vary: ${res.headers.get("vary")}`);
  const body = await res.text();
  assert.match(body, /^# REVA App/);
});

// Vary: Accept is verplicht op de Markdown-response. Voorgebouwde HTML-pagina's krijgen op
// Vercel een vaste Vary-header uit de cache; omdat proxy.ts vóór die cache draait, krijgt een
// Markdown-verzoek nooit opgeslagen HTML. Daarom controleren we hier dat HTML HTML blijft.
test("homepage: HTML bij Accept: text/html", async () => {
  const res = await get("/", "text/html");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") ?? "", /^text\/html/);
  const html = await res.text();
  assert.match(html, /<title>Software voor fysiopraktijken en patiëntenportaal \| REVA App<\/title>/);
  assert.ok(html.includes('"@type":"Organization"'));
  assert.ok(html.includes('"contactPoint"'));
  assert.ok(html.includes('"@type":"PostalAddress"') && html.includes('"postalCode":"2153 BH"'));
});

test("provinciepagina's: 200 met Service-schema en dialect met lang-attribuut, onbekende provincie 404", async () => {
  const html = await (await get("/fysiotherapie-software/limburg", "text/html")).text();
  assert.match(html, /<h1[^>]*>Software voor fysiopraktijken in Limburg<\/h1>/);
  assert.ok(html.includes('"@type":"Service"') && html.includes('"name":"Maastricht"'));
  assert.ok(html.includes('lang="li"'));
  assert.ok(html.includes('"@type":"FAQPage"'));
  assert.equal((await get("/fysiotherapie-software/atlantis", "text/html")).status, 404);
});

test("404: Markdown met uitleg en links, status 404", async () => {
  const res = await get("/deze-pagina-bestaat-echt-niet", "text/markdown");
  assert.equal(res.status, 404);
  assert.match(res.headers.get("content-type") ?? "", /^text\/markdown/);
  assert.ok(variesOnAccept(res.headers.get("vary")), `Vary: ${res.headers.get("vary")}`);
  const body = await res.text();
  assert.ok(body.length >= 20);
  assert.ok(body.includes("/llms.txt") && body.includes("/sitemap.xml"));
});

test("404: HTML-pagina met de herstelboodschap", async () => {
  const res = await get("/deze-pagina-bestaat-echt-niet", "text/html");
  assert.equal(res.status, 404);
  assert.ok((await res.text()).includes("Deze pagina werkt aan zijn herstel"));
});

test("overige pagina's zijn ook als Markdown beschikbaar", async () => {
  for (const path of ["/prijzen", "/faq", "/blog", "/blog/software-voor-fysiopraktijken", "/functies", "/over-reva", "/fysiotherapie-software", "/alternatief-voor-whatsapp", "/oefenprogramma-app", "/pilot"]) {
    const res = await get(path, "text/markdown");
    assert.equal(res.status, 200, path);
    assert.match(res.headers.get("content-type") ?? "", /^text\/markdown/, path);
    assert.match(await res.text(), /^# /m, path);
  }
});

test("llms.txt, sitemap en robots zijn bereikbaar", async () => {
  const llms = await get("/llms.txt", "text/plain");
  assert.equal(llms.status, 200);
  const txt = await llms.text();
  assert.match(txt, /^# REVA/);
  assert.ok(txt.includes("## Wanneer REVA te gebruiken (when to use)"));
  assert.equal((await get("/sitemap.xml", "application/xml")).status, 200);
  assert.ok((await (await get("/robots.txt", "text/plain")).text()).includes("Sitemap:"));
});

test("prijzen: Product-schema met afbeelding en de prijs per behandelaar incl. btw", async () => {
  const html = await (await get("/prijzen", "text/html")).text();
  const product = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((d) => d["@type"] === "Product");
  assert.ok(product, "Product-schema ontbreekt");
  assert.ok(Array.isArray(product.image) && product.image.length > 0, "image ontbreekt");
  for (const url of product.image) assert.equal((await fetch(url)).status, 200, url);
  const offer = product.offers;
  assert.equal(offer["@type"], "Offer");
  assert.equal(offer.price, 29);
  assert.equal(offer.priceCurrency, "EUR");
  assert.equal(offer.priceSpecification["@type"], "UnitPriceSpecification");
  assert.equal(offer.priceSpecification.price, 29);
  assert.equal(offer.priceSpecification.unitText, "per behandelaar per maand");
  assert.equal(offer.priceSpecification.valueAddedTaxIncluded, true);
  assert.ok(offer.validFrom && offer.priceValidUntil);
});

test("over REVA: AboutPage, Person en FAQ in de structured data", async () => {
  const html = await (await get("/over-reva", "text/html")).text();
  const nodes = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .flatMap((d) => d["@graph"] ?? [d]);
  const types = nodes.map((n) => n["@type"]);
  for (const t of ["AboutPage", "Person", "FAQPage"]) assert.ok(types.includes(t), t);
  const person = nodes.find((n) => n["@type"] === "Person");
  assert.equal(person.name, "Stef Robberts");
  assert.match(html, /<title>Over REVA: het verhaal achter het patiëntenportaal \| REVA App<\/title>/);
});

test("homepage: H1 met zoekterm, FAQ-schema en geen placeholders", async () => {
  const html = await (await get("/", "text/html")).text();
  assert.match(html, /<h1[^>]*>Software voor fysiopraktijken: patiëntenportaal naast je EPD<\/h1>/);
  assert.ok(html.includes("Welke software heeft een fysiopraktijk nodig?"));
  assert.ok(html.includes("Hoeveel tijd wint jouw praktijk terug?"));
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
  assert.ok(html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("REVA naast WhatsApp, telefoon en Excel"));
  assert.ok(!/\[(KvK|BTW|Vestigingsplaats)/.test(html), "placeholders in de pagina");
  assert.ok(html.includes("Kerkstraat 129"));
});

test("homepage-Markdown bevat de vergelijking", async () => {
  const md = await (await get("/", "text/markdown")).text();
  assert.ok(md.includes("## REVA naast WhatsApp, telefoon en Excel"));
});

const jsonLd = (html: string) =>
  [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .flatMap((d) => d["@graph"] ?? [d]);

test("functies: alle functie-ankers en een ItemList", async () => {
  const { features } = await import("../../lib/features");
  const html = await (await get("/functies", "text/html")).text();
  for (const f of features) assert.ok(html.includes(`id="${f.id}"`), f.id);
  assert.ok(jsonLd(html).some((n) => n["@type"] === "ItemList"));
});

test("FAQ en doelgroeppagina's hebben FAQ-schema", async () => {
  const { faqGroups } = await import("../../lib/faq");
  const faqHtml = await (await get("/faq", "text/html")).text();
  const faq = jsonLd(faqHtml).find((n) => n["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, faqGroups.flatMap((g) => g.items).length);
  for (const path of ["/functies/voor-fysios", "/functies/voor-patienten"]) {
    const html = await (await get(path, "text/html")).text();
    assert.ok(jsonLd(html).some((n) => n["@type"] === "FAQPage"), path);
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, path);
  }
});

test("sitemap: elke URL bestaat, is indexeerbaar en heeft een gelijke canonical; afbeeldingen laden", async () => {
  const xml = await (await get("/sitemap.xml", "application/xml")).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const images = [...xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1]);
  assert.ok(urls.length >= 20 && images.length > 0, `${urls.length} urls, ${images.length} afbeeldingen`);
  for (const url of urls) {
    const res = await get(url.replace("https://www.reva-app.nl", "") || "/", "text/html");
    assert.equal(res.status, 200, url);
    const html = await res.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(canonical, url, `canonical van ${url}`);
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `${url} staat op noindex`);
  }
  for (const img of images) {
    const res = await fetch(img.replace("https://www.reva-app.nl", BASE));
    assert.equal(res.status, 200, img);
  }
});

