import type { Metadata } from "next";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/iptv-world";

export const metadata: Metadata = {
  title: guide.pageTitle,
  description: guide.pageDescription,
};

export default function IptvWorldGuidePage() {
  return <AppleTvAppGuideView guide={guide} />;
}
