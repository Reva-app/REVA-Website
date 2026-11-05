import type { NextRequest } from "next/server";
import { isMissingBlogPost, markdownForPath, notFoundMarkdown, SITE_URL } from "@/lib/agent/markdown";
import { htmlToMarkdown } from "@/lib/agent/html-to-markdown";

// Markdown-versie van elke pagina, voor AI-agents. proxy.ts stuurt verzoeken met
// `Accept: text/markdown` hierheen; de URL in de browser blijft gewoon de pagina-URL.

type Context = { params: Promise<{ path?: string[] }> };

function markdownResponse(body: string, status: number, pathname: string, negotiated: boolean) {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
    Link: `<${SITE_URL}${pathname === "/" ? "" : pathname}>; rel="canonical"`,
    "Cache-Control": status === 200 ? "public, max-age=300, s-maxage=3600" : "public, max-age=60",
  });
  // Direct opvragen van /api/markdown hoort niet in zoekmachines
  if (!negotiated) headers.set("X-Robots-Tag", "noindex");
  return new Response(body, { status, headers });
}

async function handle(request: NextRequest, { params }: Context) {
  const { path = [] } = await params;
  const pathname = `/${path.map((p) => decodeURIComponent(p)).join("/")}`.replace(/\/+$/, "") || "/";
  const negotiated = request.headers.get("x-markdown-negotiated") === "1";

  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/")) {
    return markdownResponse(notFoundMarkdown(pathname), 404, pathname, negotiated);
  }

  const own = markdownForPath(pathname);
  if (own !== null) {
    return markdownResponse(own, isMissingBlogPost(pathname) ? 404 : 200, pathname, negotiated);
  }

  // Geen eigen Markdown-versie: de HTML-pagina ophalen en omzetten
  try {
    const res = await fetch(new URL(pathname, request.nextUrl.origin), {
      headers: { accept: "text/html" },
      redirect: "follow",
    });
    if (res.status === 404) return markdownResponse(notFoundMarkdown(pathname), 404, pathname, negotiated);
    if (!res.ok) {
      return markdownResponse(`# Tijdelijk niet beschikbaar\n\nProbeer het later opnieuw of bekijk ${SITE_URL}/llms.txt.\n`, 502, pathname, negotiated);
    }
    return markdownResponse(htmlToMarkdown(await res.text()), 200, pathname, negotiated);
  } catch {
    return markdownResponse(`# Tijdelijk niet beschikbaar\n\nProbeer het later opnieuw of bekijk ${SITE_URL}/llms.txt.\n`, 502, pathname, negotiated);
  }
}

export const GET = handle;
export const HEAD = handle;
