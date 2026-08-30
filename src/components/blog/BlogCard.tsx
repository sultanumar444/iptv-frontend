import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/bloggar/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-white/50">
          {formatDate(post.date)} · {post.readTime}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm text-white/70">{post.excerpt}</p>
        <span className="mt-4 text-sm font-semibold text-sky-400 group-hover:underline">
          Läs mer →
        </span>
      </div>
    </Link>
  );
}
