import { NextResponse, type NextRequest } from "next/server";
import { prefersMarkdown } from "@/lib/agent/negotiation";

// Content negotiation voor AI-agents (acceptmarkdown.com): wie een pagina opvraagt
// met `Accept: text/markdown` krijgt de Markdown-versie op dezelfde URL. Browsers
// krijgen gewoon HTML. Elke pagina varieert daardoor op Accept.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  if ((method === "GET" || method === "HEAD") && prefersMarkdown(request.headers.get("accept"))) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${pathname === "/" ? "" : pathname}`;
    const headers = new Headers(request.headers);
    headers.set("x-markdown-negotiated", "1");
    return NextResponse.rewrite(url, { request: { headers } });
  }

  const response = NextResponse.next();
  response.headers.append("Vary", "Accept");
  return response;
}

export const config = {
  // Alle pagina's, behalve API-routes, Next-bestanden, bestanden met een extensie
  // (llms.txt, sitemap.xml, afbeeldingen) en gegenereerde OG-afbeeldingen.
  matcher: ["/((?!api/|_next/|.*\\..*|.*opengraph-image).*)"],
};
