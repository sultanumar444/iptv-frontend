import type { Metadata } from "next";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/iptv-smarters";

export const metadata: Metadata = {
  title: guide.pageTitle,
  description: guide.pageDescription,
};

export default function IptvSmartersGuidePage() {
  return <AppleTvAppGuideView guide={guide} />;
}
