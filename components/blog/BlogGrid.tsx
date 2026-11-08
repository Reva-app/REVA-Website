"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BlogCover } from "@/components/blog/BlogCover";
import type { BlogPost } from "@/lib/blog-posts";

export type BlogCard = Pick<BlogPost, "slug" | "title" | "excerpt" | "category" | "publishedAt" | "readTime" | "image">;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

/** Blogoverzicht met filter op onderwerp. Alle artikelen staan in de HTML; de filter verbergt alleen. */
export function BlogGrid({ posts, categories }: { posts: BlogCard[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const counts = Object.fromEntries(categories.map((c) => [c, posts.filter((p) => p.category === c).length]));
  const visible = active ? posts.filter((p) => p.category === active) : posts;

  const chip = (label: string, value: string | null, count: number) => {
    const on = active === value;
    return (
      <button
        key={label}
        type="button"
        onClick={(e) => {
          setActive(value);
          e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
        }}
        aria-pressed={on}
        className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border transition-colors"
        style={on ? { background: "#1a1a1a", color: "#ffffff", borderColor: "#1a1a1a" } : { background: "#ffffff", color: "#374151", borderColor: "#e8e5df" }}
      >
        {label}
        <span className="text-xs" style={{ color: on ? "#c9c9ce" : "#9ca3af" }}>{count}</span>
      </button>
    );
  };

  return (
    <>
      <div className="no-scrollbar flex gap-2 overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap mb-8" role="group" aria-label="Filter op onderwerp">
        {chip("Alle artikelen", null, posts.length)}
        {categories.filter((c) => counts[c] > 0).map((c) => chip(c, c, counts[c]))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((post, i) => (
          <AnimateIn key={post.slug} direction="up" delay={Math.min(i, 5) * 60}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full rounded-2xl border overflow-hidden transition-shadow hover:shadow-md"
              style={{ background: "#f8f7f4", borderColor: "#e8e5df" }}
            >
              <div className="overflow-hidden">
                <BlogCover post={post} className="aspect-[16/9] transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block w-fit text-xs font-semibold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full" style={{ color: "#e8632a", background: "#fff3ee" }}>
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold mb-2 leading-snug" style={{ color: "#1a1a1a" }}>{post.title}</h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-4 text-xs pt-4 border-t" style={{ color: "#9ca3af", borderColor: "#e8e5df" }}>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </>
  );
}
