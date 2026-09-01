import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/iptvx";

export const metadata: Metadata = buildMetadata({
  title: guide.pageTitle,
  description: guide.pageDescription,
  path: "/installationsguider/apple-tv/iptvx",
});

export default function IptvxGuidePage() {
  return <AppleTvAppGuideView guide={guide} path="/installationsguider/apple-tv/iptvx" />;
}
