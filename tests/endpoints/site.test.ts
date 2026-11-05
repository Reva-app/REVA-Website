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

test("homepage: HTML bij Accept: text/html, met Vary: Accept", async () => {
  const res = await get("/", "text/html");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") ?? "", /^text\/html/);
  assert.ok(variesOnAccept(res.headers.get("vary")), `Vary: ${res.headers.get("vary")}`);
  const html = await res.text();
  assert.match(html, /<title>REVA App \| Patiëntenportaal en fysiotherapiesoftware<\/title>/);
  assert.ok(html.includes('"@type":"Organization"'));
  assert.ok(html.includes('"contactPoint"'));
});

test("404: Markdown met uitleg en links, status 404", async () => {
  const res = await get("/deze-pagina-bestaat-echt-niet", "text/markdown");
  assert.equal(res.status, 404);
  assert.match(res.headers.get("content-type") ?? "", /^text\/markdown/);
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
