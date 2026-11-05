// Zet een gerenderde HTML-pagina om naar Markdown, voor pagina's zonder eigen
// Markdown-versie. Alleen de hoofdinhoud (<main>) wordt meegenomen.

import TurndownService from "turndown";
import { SITE_URL } from "@/lib/agent/markdown";

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

export function htmlToMarkdown(html: string): string {
  const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "");
  const description = decode(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? "");
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html;

  const turndown = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });
  turndown.remove(["script", "style", "noscript", "button", "form", "iframe", "img", "picture", "video"]);
  // svg staat niet in de HTML-elementtypes van turndown, daarom via een filterfunctie
  turndown.remove((node) => node.nodeName.toLowerCase() === "svg");
  // Relatieve links absoluut maken, zodat agents ze direct kunnen volgen
  turndown.addRule("absoluteLinks", {
    filter: "a",
    replacement: (content, node) => {
      const href = (node as HTMLAnchorElement).getAttribute("href") ?? "";
      const text = content.trim();
      if (!text) return "";
      if (!href || href.startsWith("#")) return text;
      return `[${text}](${href.startsWith("/") ? SITE_URL + href : href})`;
    },
  });

  const body = turndown
    .turndown(main)
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const header = [title && !/^# /m.test(body) ? `# ${title}` : "", description ? `> ${description}` : ""]
    .filter(Boolean)
    .join("\n\n");
  return `${header ? `${header}\n\n` : ""}${body}\n`;
}
