import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/tvip/guide";

export const metadata: Metadata = buildMetadata({
  title: guide.pageTitle,
  description: guide.pageDescription,
  path: "/installationsguider/tvip-s-box",
});

export default function TvipGuidePage() {
  return <AppleTvAppGuideView guide={guide} path="/installationsguider/tvip-s-box" />;
}
