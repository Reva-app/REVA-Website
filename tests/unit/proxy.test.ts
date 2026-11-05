import { test } from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { proxy } from "@/proxy";
import { GET } from "@/app/api/markdown/[[...path]]/route";

const req = (path: string, accept?: string) =>
  new NextRequest(`https://www.reva-app.nl${path}`, { headers: accept ? { accept } : {} });

test("proxy stuurt Markdown-verzoeken door naar de Markdown-route", () => {
  const res = proxy(req("/", "text/markdown"));
  assert.equal(new URL(res.headers.get("x-middleware-rewrite")!).pathname, "/api/markdown");
  const res2 = proxy(req("/prijzen", "text/markdown"));
  assert.equal(new URL(res2.headers.get("x-middleware-rewrite")!).pathname, "/api/markdown/prijzen");
});

test("proxy laat HTML-verzoeken door en zet Vary: Accept", () => {
  const res = proxy(req("/", "text/html,*/*;q=0.8"));
  assert.equal(res.headers.get("x-middleware-rewrite"), null);
  assert.ok((res.headers.get("vary") ?? "").split(",").some((v) => v.trim() === "Accept"));
});

const call = (segments: string[], negotiated = true) =>
  GET(
    new NextRequest(`https://www.reva-app.nl/api/markdown/${segments.join("/")}`, {
      headers: negotiated ? { "x-markdown-negotiated": "1" } : {},
    }),
    { params: Promise.resolve({ path: segments.length ? segments : undefined }) },
  );

test("route geeft Markdown met de juiste headers voor de homepage", async () => {
  const res = await call([]);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.equal(res.headers.get("vary"), "Accept");
  assert.equal(res.headers.get("x-robots-tag"), null);
  assert.match(await res.text(), /^# REVA App/);
});

test("route geeft 404 in Markdown voor een onbekend artikel", async () => {
  const res = await call(["blog", "bestaat-niet"]);
  assert.equal(res.status, 404);
  assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
  assert.match(await res.text(), /werkt aan zijn herstel/);
});

test("direct opvragen van de route wordt niet geïndexeerd", async () => {
  const res = await call(["prijzen"], false);
  assert.equal(res.headers.get("x-robots-tag"), "noindex");
});
