import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AppleTvAppGuideView from "@/components/installation/apple-tv/app-guide/View";
import guide from "@/content/apple-tv/apps/ibo-player";

export const metadata: Metadata = buildMetadata({
  title: guide.pageTitle,
  description: guide.pageDescription,
  path: "/installationsguider/apple-tv/ibo-player",
});

export default function IboPlayerGuidePage() {
  return <AppleTvAppGuideView guide={guide} path="/installationsguider/apple-tv/ibo-player" />;
}
