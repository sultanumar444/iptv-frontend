import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import AppleTvHubInstructions from "@/components/installation/apple-tv/hub/Instructions";
import AppleTvHubAppsGrid from "@/components/installation/apple-tv/hub/AppsGrid";
import AppleTvHubSteps from "@/components/installation/apple-tv/hub/Steps";
import AppleTvHubDownloadStep from "@/components/installation/apple-tv/hub/DownloadStep";
import AppleTvHubSummaryStep from "@/components/installation/apple-tv/hub/SummaryStep";
import { appleTvSteps } from "@/content/apple-tv/steps";
import { appleTvDownloadStep } from "@/content/apple-tv/download-step";
import { appleTvSummaryStep } from "@/content/apple-tv/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Apple TV",
  description:
    "IPTV med Apple TV Instruktioner. Se vilka appar vi rekommenderar för Apple TV 4 och Apple TV gen 5 (4K) och kom igång på några minuter.",
};

export default function AppleTvGuidePage() {
  const stepsBeforeDownload = appleTvSteps.filter(
    (s) => s.step < appleTvDownloadStep.step
  );
  const stepsBetween = appleTvSteps.filter(
    (s) => s.step > appleTvDownloadStep.step && s.step < appleTvSummaryStep.step
  );
  const stepsAfterSummary = appleTvSteps.filter(
    (s) => s.step > appleTvSummaryStep.step
  );

  return (
    <>
      <PageTitleBar title="Installationsguide – Apple TV" />
      <AppleTvHubInstructions />
      <AppleTvHubAppsGrid />
      <AppleTvHubSteps steps={stepsBeforeDownload} />
      <AppleTvHubDownloadStep />
      <AppleTvHubSteps steps={stepsBetween} />
      <AppleTvHubSummaryStep />
      <AppleTvHubSteps steps={stepsAfterSummary} />
    </>
  );
}
