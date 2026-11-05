import { ImageResponse } from "next/og";
import { revaLogoDataUri } from "@/lib/brand";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

export const alt = "REVA Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "REVA Blog";
  const category = post?.category ?? "REVA";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#18181a",
          padding: "80px",
        }}
      >
        <img src={revaLogoDataUri("#ffffff")} width={165} height={56} alt="REVA" />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              color: "#e8632a",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "58px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#9ca3af" }}>
            Patiëntenportaal voor fysiotherapiepraktijken
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
