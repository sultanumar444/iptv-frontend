import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/iplaytv";

export const metadata: Metadata = buildMetadata({
  title: guide.pageTitle,
  description: guide.pageDescription,
  path: "/installationsguider/apple-tv/iplaytv",
});

export default function IplaytvGuidePage() {
  return <AppleTvAppGuideView guide={guide} />;
}
