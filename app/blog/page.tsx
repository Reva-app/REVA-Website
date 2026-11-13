import type { Metadata } from "next";
import { OG_IMAGES } from "@/lib/og";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { blogCategories, getSortedBlogPosts } from "@/lib/blog-posts";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog voor fysiotherapiepraktijken",
  description:
    "Artikelen over patiëntcommunicatie, therapietrouw, digitalisering en AVG voor fysiotherapiepraktijken. Praktische inzichten om overzicht te houden.",
  openGraph: {
    images: OG_IMAGES,
    title: "Blog voor fysiotherapiepraktijken",
    description: "Artikelen voor fysiotherapiepraktijken over patiëntcommunicatie, therapietrouw en digitalisering.",
    locale: "nl_NL",
    type: "website",
    url: "https://www.reva-app.nl/blog",
  },
  alternates: {
    canonical: "https://www.reva-app.nl/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": "https://www.reva-app.nl/blog#blog",
          name: "REVA Blog",
          description:
            "Artikelen voor fysiotherapiepraktijken over patiëntcommunicatie, therapietrouw, digitalisering en AVG.",
          url: "https://www.reva-app.nl/blog",
          inLanguage: "nl-NL",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `https://www.reva-app.nl/blog/${post.slug}`,
            datePublished: post.publishedAt,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Blog", url: "https://www.reva-app.nl/blog" },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-16 md:py-20" style={{ background: "#f8f7f4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                Blog
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                Inzichten voor fysiotherapiepraktijken
              </h1>
              <p className="text-base" style={{ color: "#6b7280" }}>
                Praktische artikelen over patiëntcommunicatie, therapietrouw en digitalisering,
                geschreven om je te helpen overzicht te houden over je praktijk.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <BlogGrid
              categories={blogCategories}
              posts={posts.map(({ slug, title, excerpt, category, publishedAt, readTime, image }) => ({ slug, title, excerpt, category, publishedAt, readTime, image }))}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20" style={{ background: "#1c1c1e" }}>
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <AnimateIn direction="up">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Klaar voor overzicht over je patiënten?
              </h2>
              <p className="mb-6" style={{ color: "#7c7c8a" }}>
                Plan een demo en ontdek hoe REVA past bij jouw praktijk.
              </p>
              <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                Plan een demo
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
