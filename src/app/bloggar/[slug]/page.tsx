import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitleBar from "@/components/PageTitleBar";
import BlogCard from "@/components/blog/BlogCard";
import { TocDesktop, TocMobile } from "@/components/blog/TocSidebar";
import { blogPosts, getBlogPost } from "@/content/blog";
import { siteName, siteUrl } from "@/lib/site";
import { slugify } from "@/lib/slugify";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/bloggar/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  const metaTitle = post.seo?.metaTitle ?? post.title;
  const metaDescription = post.seo?.metaDescription ?? post.excerpt;
  const ogImage = post.seo?.ogImage ?? post.image;
  const url = `/bloggar/${post.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.keywords ?? post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: metaTitle,
      description: metaDescription,
      url,
      siteName,
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/bloggar/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/sverige-logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/bloggar/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageTitleBar title={post.title} />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-[1fr_300px] lg:items-start lg:gap-12">
        <article>
          <p className="text-sm text-white/50">
            {formatDate(post.date)} · {post.readTime}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-8 space-y-5 text-white/80">
            {post.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <TocMobile headings={post.content.map((section) => section.heading)} />
          </div>

          <div className="mt-8 space-y-10">
            {post.content.map((section) => (
              <div key={section.heading}>
                <h2
                  id={slugify(section.heading)}
                  className="scroll-mt-28 text-2xl font-bold"
                >
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5 text-white/80">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/bloggar"
            className="mt-10 inline-block font-semibold text-sky-400 hover:underline"
          >
            ← Tillbaka till bloggen
          </Link>
        </article>

        <TocDesktop headings={post.content.map((section) => section.heading)} />
      </div>

      {relatedPosts.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Fler artiklar</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
