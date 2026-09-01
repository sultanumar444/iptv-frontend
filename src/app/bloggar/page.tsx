import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import BlogList from "@/components/blog/BlogList";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Bloggar",
  description:
    "Guider, nyheter och tips om IPTV, streaming och TV-paket i Sverige.",
  path: "/bloggar",
});

export default function BloggarPage() {
  return (
    <>
      <PageTitleBar title="Bloggar" path="/bloggar" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <BlogList posts={blogPosts} />
      </div>
    </>
  );
}
