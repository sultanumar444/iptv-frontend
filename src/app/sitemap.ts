import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { deviceGuides } from "@/content/install-guides";
import { siteUrl } from "@/lib/site";

// `appleTvApps` in @/content/apple-tv/guides only lists the apps shown in
// the Apple TV hub's recommended-apps grid, not every app with its own
// dedicated page — so the sitemap can't be derived from it. This list
// mirrors the folder names under src/app/installationsguider/apple-tv/.
const appleTvAppSlugs = [
  "9xtream-iptv",
  "duplex-play",
  "gse-smart-iptv-pro",
  "hot-iptv",
  "ibo-player",
  "implayer-iptv",
  "iplaytv",
  "iptv-expert",
  "iptv-extreme",
  "iptv-pro",
  "iptv-smarters",
  "iptv-streamer",
  "iptv-world",
  "iptvx",
  "mega-iptv",
  "myiptv-player",
  "mytvonline",
  "net-iptv",
  "perfect-iptv",
  "set-iptv",
  "smart-stb",
  "televizo-iptv",
  "tivimate",
  "xtream-iptv",
  "xui-iptv-player",
];

// kanallista och kontakta är medvetet uteslutna: de är satta till noindex
// tills de har riktigt innehåll (se buildMetadata({ noindex: true }) i
// respektive page.tsx) och ska därför inte listas i sitemapen.
const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/om-oss", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/vart-paket", changeFrequency: "weekly" as const, priority: 0.9 },
  {
    path: "/installationsguider",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  { path: "/bloggar", changeFrequency: "weekly" as const, priority: 0.7 },
  {
    path: "/installationsguider/windows-mac/mac",
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    path: "/installationsguider/windows-mac/windows",
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    path: "/anvandarvillkor",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  { path: "/dmca", changeFrequency: "yearly" as const, priority: 0.3 },
  {
    path: "/integritetspolicy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const deviceGuideEntries = deviceGuides.map((device) => ({
    url: `${siteUrl}/installationsguider/${device.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const appleTvAppEntries = appleTvAppSlugs.map((slug) => ({
    url: `${siteUrl}/installationsguider/apple-tv/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/bloggar/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...deviceGuideEntries,
    ...appleTvAppEntries,
    ...blogEntries,
  ];
}
