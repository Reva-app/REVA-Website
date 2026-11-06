import { test } from "node:test";
import assert from "node:assert/strict";
import sitemap from "@/app/sitemap";
import { blogPosts } from "@/lib/blog-posts";

const today = new Date().toISOString().slice(0, 10);

test("sitemap: elke pagina een geldige datum, niet in de toekomst", () => {
  for (const e of sitemap()) {
    const d = String(e.lastModified);
    assert.match(d, /^\d{4}-\d{2}-\d{2}$/, e.url);
    assert.ok(d <= today, `${e.url} ligt in de toekomst (${d})`);
  }
});

test("sitemap: unieke www-URL's zonder slash aan het eind, geen priority of changefreq", () => {
  const urls = sitemap().map((e) => e.url);
  assert.equal(new Set(urls).size, urls.length);
  for (const e of sitemap()) {
    assert.ok(e.url.startsWith("https://www.reva-app.nl"), e.url);
    assert.ok(!e.url.endsWith("/"), e.url);
    assert.equal(e.priority, undefined);
    assert.equal(e.changeFrequency, undefined);
  }
});

test("sitemap: alle blogs met hun omslag, blogoverzicht op de datum van het nieuwste artikel", () => {
  const map = new Map(sitemap().map((e) => [e.url, e]));
  for (const p of blogPosts) {
    const e = map.get(`https://www.reva-app.nl/blog/${p.slug}`);
    assert.ok(e, p.slug);
    assert.equal(e.lastModified, p.updatedAt ?? p.publishedAt);
    if (p.image) assert.deepEqual(e.images, [`https://www.reva-app.nl${p.image.src}`]);
  }
  const newest = blogPosts.map((p) => p.updatedAt ?? p.publishedAt).sort().at(-1);
  assert.equal(map.get("https://www.reva-app.nl/blog")?.lastModified, newest);
});
