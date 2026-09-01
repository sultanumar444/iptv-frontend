"use client";

import { useState } from "react";
import type { BlogPost } from "@/content/blog";
import BlogCard from "./BlogCard";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 6;

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      {/*
        All posts are always rendered (and so present in the server-rendered
        HTML / crawlable by search engines) — `hidden` only controls what a
        visiting browser shows. Don't switch this back to slicing `posts`,
        that would remove posts 13+ from the page entirely until a user
        clicks, making them undiscoverable to crawlers despite being listed
        in the sitemap.
      */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={post.slug} hidden={index >= visibleCount}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
            className="rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Visa fler bloggar
          </button>
        </div>
      )}
    </>
  );
}
