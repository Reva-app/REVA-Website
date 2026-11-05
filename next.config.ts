import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Pagina's hebben een HTML- en een Markdown-versie op dezelfde URL (zie proxy.ts),
        // dus caches moeten op de Accept-header variëren.
        source: "/((?!api/|_next/|.*\\..*).*)",
        headers: [{ key: "Vary", value: "Accept" }],
      },
    ];
  },
};

export default nextConfig;
