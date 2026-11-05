// Content negotiation voor AI-agents: bepaalt op basis van de Accept-header of
// een verzoek Markdown wil in plaats van HTML (RFC 9110, sectie 12.5.1).

export const MARKDOWN_TYPE = "text/markdown";

type MediaRange = { type: string; subtype: string; q: number };

function parseAccept(header: string): MediaRange[] {
  return header
    .split(",")
    .map((part) => {
      const [range, ...params] = part.trim().split(";");
      const [type = "", subtype = ""] = range.trim().toLowerCase().split("/");
      let q = 1;
      for (const param of params) {
        const [key, value] = param.trim().split("=");
        if (key?.trim().toLowerCase() === "q") {
          const parsed = Number.parseFloat(value);
          q = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 1) : 0;
        }
      }
      return { type, subtype, q };
    })
    .filter((r) => r.type && r.subtype);
}

/** Kwaliteitswaarde die de client aan een mediatype geeft; de meest specifieke range wint. */
function qualityFor(ranges: MediaRange[], type: string, subtype: string): number {
  const exact = ranges.find((r) => r.type === type && r.subtype === subtype);
  if (exact) return exact.q;
  const typeWildcard = ranges.find((r) => r.type === type && r.subtype === "*");
  if (typeWildcard) return typeWildcard.q;
  const any = ranges.find((r) => r.type === "*" && r.subtype === "*");
  return any ? any.q : 0;
}

/**
 * True als de client Markdown expliciet vraagt en het minstens zo graag wil als HTML.
 * Wildcards (*\/*, text/*) tellen niet als vraag om Markdown, zodat browsers en
 * crawlers die niets specifieks vragen gewoon HTML blijven krijgen.
 */
export function prefersMarkdown(accept: string | null | undefined): boolean {
  if (!accept) return false;
  const ranges = parseAccept(accept);
  const markdown = ranges.find((r) => r.type === "text" && r.subtype === "markdown");
  if (!markdown || markdown.q === 0) return false;
  return markdown.q >= qualityFor(ranges, "text", "html");
}
