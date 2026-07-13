import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogIllustration } from "@/components/blog/BlogIllustration";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `https://www.reva-app.nl/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      locale: "nl_NL",
      type: "article",
      url,
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: url,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = `https://www.reva-app.nl/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "nl-NL",
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "REVA App",
      url: "https://www.reva-app.nl",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.reva-app.nl/#organization",
      name: "REVA App",
      logo: {
        "@type": "ImageObject",
        url: "https://www.reva-app.nl/logo.png",
      },
    },
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://www.reva-app.nl/" },
          { name: "Blog", url: "https://www.reva-app.nl/blog" },
          { name: post.title, url },
        ])}
      />
      <SiteLayout>
        {/* Hero */}
        <section className="py-14 md:py-18" style={{ background: "#f8f7f4", borderBottom: "1px solid #e8e5df" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover-orange"
                style={{ color: "#6b7280" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Terug naar blog
              </Link>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full"
                style={{ color: "#e8632a", background: "#fff3ee" }}
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "#1a1a1a" }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm mb-8" style={{ color: "#9ca3af" }}>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} leestijd
                </span>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={80}>
              <BlogIllustration category={post.category} className="w-full aspect-[21/9] rounded-2xl" />
            </AnimateIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              <div className="space-y-5 mb-10" style={{ color: "#374151", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                {post.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {post.sections.map((section) => (
                <div key={section.heading} className="mb-9">
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4" style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {section.list && (
                    <ul className="mt-4 space-y-2 list-disc pl-5" style={{ color: "#4b5563" }}>
                      {section.list.map((item) => (
                        <li key={item} className="text-[1.0625rem] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <p className="text-xs mt-10 pt-6 border-t" style={{ color: "#9ca3af", borderColor: "#e8e5df" }}>
                Dit artikel is bedoeld als algemene informatie en vervangt geen medisch advies.
                Raadpleeg bij twijfel altijd je arts of fysiotherapeut.
              </p>
            </AnimateIn>

            {/* Inline CTA */}
            <AnimateIn direction="up" className="mt-12">
              <div
                className="rounded-2xl p-7 md:p-8 text-center"
                style={{ background: "#1c1c1e" }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Houd grip op je eigen herstel
                </h3>
                <p className="text-sm mb-5" style={{ color: "#7c7c8a" }}>
                  Start vandaag gratis met REVA. Geen creditcard nodig.
                </p>
                <a href="https://dashboard.reva-app.nl/register" className="btn-primary px-5 py-2.5 text-sm">
                  Start gratis
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <section className="py-12 md:py-16 border-t" style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}>
            <div className="max-w-3xl mx-auto px-5 md:px-8">
              <h2 className="text-lg font-semibold mb-6" style={{ color: "#1a1a1a" }}>
                Meer artikelen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block rounded-2xl p-5 border transition-shadow hover:shadow-md"
                    style={{ background: "#ffffff", borderColor: "#e8e5df" }}
                  >
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-full"
                      style={{ color: "#e8632a", background: "#fff3ee" }}
                    >
                      {p.category}
                    </span>
                    <p className="text-sm font-semibold leading-snug" style={{ color: "#1a1a1a" }}>
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </SiteLayout>
    </>
  );
}
