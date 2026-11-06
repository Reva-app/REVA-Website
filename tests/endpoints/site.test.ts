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
  assert.match(html, /<title>REVA App \| Patiëntenportaal en fysiotherapiesoftware<\/title>/);
  assert.ok(html.includes('"@type":"Organization"'));
  assert.ok(html.includes('"contactPoint"'));
  assert.ok(html.includes('"@type":"PostalAddress"') && html.includes('"postalCode":"2153 BH"'));
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
  for (const path of ["/prijzen", "/faq", "/blog", "/blog/software-voor-fysiopraktijken", "/functies", "/over-reva"]) {
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

test("prijzen: Product-schema met afbeelding en alle pakketten", async () => {
  const html = await (await get("/prijzen", "text/html")).text();
  const product = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((d) => d["@type"] === "Product");
  assert.ok(product, "Product-schema ontbreekt");
  assert.ok(Array.isArray(product.image) && product.image.length > 0, "image ontbreekt");
  for (const url of product.image) assert.equal((await fetch(url)).status, 200, url);
  assert.deepEqual(
    product.offers.map((o: { name: string; price: number }) => `${o.name} ${o.price}`),
    ["REVA Solo 49", "REVA Team 129", "REVA Praktijk 229", "REVA Praktijk Plus 349", "REVA Enterprise 699"],
  );
  for (const offer of product.offers) assert.ok(offer.validFrom && offer.priceValidUntil);
});

