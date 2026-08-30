import type { Metadata } from "next";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/tvip/guide";

export const metadata: Metadata = {
  title: guide.pageTitle,
  description: guide.pageDescription,
};

export default function TvipGuidePage() {
  return <AppleTvAppGuideView guide={guide} />;
}
