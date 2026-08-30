import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import SmartTvHubInstructions from "@/components/installation/smart-tv/hub/Instructions";
import SmartTvHubAppsGrid from "@/components/installation/smart-tv/hub/AppsGrid";
import SmartTvHubSteps from "@/components/installation/smart-tv/hub/Steps";
import SmartTvHubDownloadStep from "@/components/installation/smart-tv/hub/DownloadStep";
import SmartTvHubSummaryStep from "@/components/installation/smart-tv/hub/SummaryStep";
import { smartTvSteps } from "@/content/smart-tv/steps";
import { smartTvDownloadStep } from "@/content/smart-tv/download-step";
import { smartTvSummaryStep } from "@/content/smart-tv/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Smart TV",
  description:
    "IPTV med Smart TV Instruktioner. Se vilka appar vi rekommenderar för Smart TV och kom igång på några minuter.",
};

export default function SmartTvGuidePage() {
  const stepsBeforeDownload = smartTvSteps.filter(
    (s) => s.step < smartTvDownloadStep.step
  );
  const stepsBetween = smartTvSteps.filter(
    (s) => s.step > smartTvDownloadStep.step && s.step < smartTvSummaryStep.step
  );
  const stepsAfterSummary = smartTvSteps.filter(
    (s) => s.step > smartTvSummaryStep.step
  );

  return (
    <>
      <PageTitleBar title="Installationsguide – Smart TV" />
      <SmartTvHubInstructions />
      <SmartTvHubAppsGrid />
      <SmartTvHubSteps steps={stepsBeforeDownload} />
      <SmartTvHubDownloadStep />
      <SmartTvHubSteps steps={stepsBetween} />
      <SmartTvHubSummaryStep />
      <SmartTvHubSteps steps={stepsAfterSummary} />
    </>
  );
}
