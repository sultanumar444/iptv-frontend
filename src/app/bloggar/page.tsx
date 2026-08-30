import PageTitleBar from "@/components/PageTitleBar";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/content/blog";

export default function BloggarPage() {
  return (
    <>
      <PageTitleBar title="Bloggar" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
