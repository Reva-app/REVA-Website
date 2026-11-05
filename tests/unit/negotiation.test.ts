import { test } from "node:test";
import assert from "node:assert/strict";
import { prefersMarkdown } from "@/lib/agent/negotiation";

test("vraagt Markdown bij Accept: text/markdown", () => {
  assert.equal(prefersMarkdown("text/markdown"), true);
  assert.equal(prefersMarkdown("text/markdown; charset=utf-8"), true);
  assert.equal(prefersMarkdown("TEXT/MARKDOWN"), true);
});

test("Markdown wint als het minstens zo hoog staat als HTML", () => {
  assert.equal(prefersMarkdown("text/markdown, text/html;q=0.9"), true);
  assert.equal(prefersMarkdown("text/markdown, text/html"), true);
  assert.equal(prefersMarkdown("text/markdown, */*;q=0.1"), true);
});

test("HTML blijft de standaard voor browsers en crawlers", () => {
  assert.equal(prefersMarkdown(null), false);
  assert.equal(prefersMarkdown(""), false);
  assert.equal(prefersMarkdown("*/*"), false);
  assert.equal(prefersMarkdown("text/*"), false);
  assert.equal(prefersMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), false);
  assert.equal(prefersMarkdown("text/html, text/markdown;q=0.5"), false);
  assert.equal(prefersMarkdown("text/markdown;q=0"), false);
});
