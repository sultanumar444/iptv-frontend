import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/om-oss", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/vart-paket", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/kanallista", changeFrequency: "monthly" as const, priority: 0.6 },
  {
    path: "/installationsguider",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  { path: "/kontakta", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/bloggar", changeFrequency: "weekly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/bloggar/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
