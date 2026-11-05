import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";
import { BlogIllustration } from "@/components/blog/BlogIllustration";

/** Omslag van een blogartikel: eigen afbeelding als die er is, anders de categorie-illustratie. */
export function BlogCover({
  post,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 400px, 100vw",
}: {
  post: Pick<BlogPost, "image" | "category">;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!post.image) {
    return <BlogIllustration category={post.category} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: "#1c1c1e" }}>
      <Image
        src={post.image.src}
        alt={post.image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
