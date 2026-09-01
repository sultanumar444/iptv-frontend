import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/iptv-extreme";

export const metadata: Metadata = buildMetadata({
  title: guide.pageTitle,
  description: guide.pageDescription,
  path: "/installationsguider/apple-tv/iptv-extreme",
});

export default function IptvExtremeGuidePage() {
  return <AppleTvAppGuideView guide={guide} path="/installationsguider/apple-tv/iptv-extreme" />;
}
