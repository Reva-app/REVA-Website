import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, ArrowLeft, Check } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogCover } from "@/components/blog/BlogCover";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
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
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      locale: "nl_NL",
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Zet [tekst](/pad) in alinea's om naar interne links
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    return (
      <Link key={i} href={match[2]} className="font-medium underline underline-offset-2" style={{ color: "#e8632a" }}>
        {match[1]}
      </Link>
    );
  });
}

function stripLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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
    "@type": ["BlogPosting", "Article"],
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: `https://www.reva-app.nl${post.image.src}`,
        width: 2400,
        height: 1350,
      },
    }),
    ...(post.keywords && { keywords: post.keywords.join(", ") }),
    articleSection: post.category,
    inLanguage: "nl-NL",
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      "@id": "https://www.reva-app.nl/#person-stef-robberts",
      name: "Stef Robberts",
      url: "https://www.reva-app.nl/over-reva",
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

  const faqJsonLd = post.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripLinks(item.answer),
      },
    })),
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
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
                {post.updatedAt && post.updatedAt !== post.publishedAt && (
                  <span className="hidden sm:inline">Bijgewerkt op {formatDate(post.updatedAt)}</span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} leestijd
                </span>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={80}>
              <BlogCover
                post={post}
                priority
                sizes="(min-width: 768px) 704px, 100vw"
                className="w-full aspect-[21/9] rounded-2xl"
              />
            </AnimateIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <AnimateIn direction="up">
              {post.summary && (
                <aside
                  className="rounded-2xl border p-6 md:p-7 mb-10"
                  style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
                  aria-label="In het kort"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#e8632a" }}>
                    In het kort
                  </p>
                  <ul className="space-y-3">
                    {post.summary.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.975rem] leading-relaxed" style={{ color: "#374151" }}>
                        <span
                          className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: "#fff3ee" }}
                        >
                          <Check className="w-3 h-3" style={{ color: "#e8632a" }} strokeWidth={3} />
                        </span>
                        <span>{renderInline(item)}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

              <div className="space-y-5 mb-10" style={{ color: "#374151", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                {post.intro.map((p, i) => (
                  <p key={i}>{renderInline(p)}</p>
                ))}
              </div>

              {post.sections.map((section) => (
                <div key={section.heading} className="mb-9">
                  <h2
                    id={headingId(section.heading)}
                    className="text-xl font-semibold mb-3 scroll-mt-28"
                    style={{ color: "#1a1a1a" }}
                  >
                    {section.heading}
                  </h2>
                  <div className="space-y-4" style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{renderInline(p)}</p>
                    ))}
                  </div>
                  {section.table && (
                    <div className="mt-5 md:hidden space-y-3" aria-hidden="true">
                      {section.table.rows.map((row, ri) => (
                        <div key={ri} className="rounded-2xl border p-4" style={{ borderColor: "#e8e5df", background: "#fcfbf9" }}>
                          <p className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{row[0]}</p>
                          <dl className="space-y-1.5 text-sm">
                            {row.slice(1).map((cell, ci) => (
                              <div key={ci}>
                                <dt className="text-xs font-medium" style={{ color: "#9ca3af" }}>{section.table!.headers[ci + 1]}</dt>
                                <dd style={{ color: "#4b5563" }}>{cell}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.table && (
                    <div className="mt-5 hidden md:block overflow-x-auto rounded-2xl border" style={{ borderColor: "#e8e5df" }}>
                      <table className="w-full min-w-[560px] text-sm text-left">
                        <caption className="sr-only">{section.table.caption}</caption>
                        <thead style={{ background: "#f8f7f4" }}>
                          <tr>
                            {section.table.headers.map((h) => (
                              <th key={h} scope="col" className="px-4 py-3 font-semibold" style={{ color: "#1a1a1a" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri} style={{ background: ri % 2 ? "#fcfbf9" : "#ffffff" }}>
                              {row.map((cell, ci) =>
                                ci === 0 ? (
                                  <th key={ci} scope="row" className="px-4 py-3 align-top font-semibold" style={{ color: "#1a1a1a" }}>{cell}</th>
                                ) : (
                                  <td key={ci} className="px-4 py-3 align-top leading-relaxed" style={{ color: "#4b5563" }}>{cell}</td>
                                ),
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.list && (
                    <ul className="mt-4 space-y-2 list-disc pl-5" style={{ color: "#4b5563" }}>
                      {section.list.map((item) => (
                        <li key={item} className="text-[1.0625rem] leading-relaxed">
                          {renderInline(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {post.faq && (
                <div className="mt-12 mb-4">
                  <h2
                    id="veelgestelde-vragen"
                    className="text-xl font-semibold mb-5 scroll-mt-28"
                    style={{ color: "#1a1a1a" }}
                  >
                    Veelgestelde vragen
                  </h2>
                  <FaqAccordion items={post.faq.map((item) => ({ q: item.question, a: stripLinks(item.answer) }))} />
                </div>
              )}

              <p className="text-xs mt-10 pt-6 border-t" style={{ color: "#9ca3af", borderColor: "#e8e5df" }}>
                Dit artikel is bedoeld als algemene informatie en vervangt geen juridisch of
                professioneel advies. Raadpleeg bij twijfel altijd een specialist.
              </p>
            </AnimateIn>

            {/* Inline CTA */}
            <AnimateIn direction="up" className="mt-12">
              <div
                className="rounded-2xl p-7 md:p-8 text-center"
                style={{ background: "#1c1c1e" }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Overzicht over je patiënten, zonder extra telefoontjes
                </h3>
                <p className="text-sm mb-5" style={{ color: "#7c7c8a" }}>
                  Ontdek tijdens een demo hoe REVA past bij jouw praktijk.
                </p>
                <Link href="/demo-aanvragen" className="group btn-primary px-5 py-2.5 text-sm">
                  Plan een demo
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
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
