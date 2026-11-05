import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogCover } from "@/components/blog/BlogCover";
import { getSortedBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog voor fysiotherapiepraktijken",
  description:
    "Artikelen over patiëntcommunicatie, therapietrouw, digitalisering en AVG voor fysiotherapiepraktijken. Praktische inzichten om overzicht te houden.",
  openGraph: {
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <AnimateIn key={post.slug} direction="up" delay={i * 60}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col h-full rounded-2xl border overflow-hidden transition-shadow hover:shadow-md"
                    style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                  >
                    <BlogCover post={post} className="aspect-[16/9]" />
                    <div className="flex flex-col flex-1 p-6">
                      <span
                        className="inline-block w-fit text-xs font-semibold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full"
                        style={{ color: "#e8632a", background: "#fff3ee" }}
                      >
                        {post.category}
                      </span>
                      <h2 className="text-lg font-semibold mb-2 leading-snug" style={{ color: "#1a1a1a" }}>
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                        {post.excerpt}
                      </p>
                      <div
                        className="mt-auto flex items-center gap-4 text-xs pt-4 border-t"
                        style={{ color: "#9ca3af", borderColor: "#e8e5df" }}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
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
                Vraag een demo aan en ontdek hoe REVA past bij jouw praktijk.
              </p>
              <Link href="/demo-aanvragen" className="group btn-primary px-6 py-3">
                Vraag een demo aan
                <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </AnimateIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
