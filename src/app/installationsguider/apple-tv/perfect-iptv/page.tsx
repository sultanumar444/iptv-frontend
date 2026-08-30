import type { Metadata } from "next";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/perfect-iptv";

export const metadata: Metadata = {
  title: guide.pageTitle,
  description: guide.pageDescription,
};

export default function PerfectIptvGuidePage() {
  return <AppleTvAppGuideView guide={guide} />;
}
