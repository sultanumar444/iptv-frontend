import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import NvidiaShieldHubAppsGrid from "@/components/installation/nvidia-shield/hub/AppsGrid";
import NvidiaShieldHubSteps from "@/components/installation/nvidia-shield/hub/Steps";
import NvidiaShieldHubDownloadStep from "@/components/installation/nvidia-shield/hub/DownloadStep";
import NvidiaShieldHubSummaryStep from "@/components/installation/nvidia-shield/hub/SummaryStep";
import { nvidiaShieldSteps } from "@/content/nvidia-shield/steps";
import { nvidiaShieldDownloadStep } from "@/content/nvidia-shield/download-step";
import { nvidiaShieldSummaryStep } from "@/content/nvidia-shield/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Nvidia Shield",
  description:
    "IPTV Nvidia Shield Instruktioner – Se vilka appar vi rekommenderar för Nvidia Shield och kom igång på några minuter.",
};

export default function NvidiaShieldGuidePage() {
  const stepsBeforeDownload = nvidiaShieldSteps.filter(
    (s) => s.step < nvidiaShieldDownloadStep.step
  );
  const stepsBetween = nvidiaShieldSteps.filter(
    (s) =>
      s.step > nvidiaShieldDownloadStep.step &&
      s.step < nvidiaShieldSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="IPTV Nvidia Shield Instruktioner"
        description="IPTV Nvidia Shield Instruktioner – För att kunna se på IPTV med din Nvidia Shield så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Nvidia Shield. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp."
      />
      <NvidiaShieldHubAppsGrid />
      <NvidiaShieldHubSteps steps={stepsBeforeDownload} />
      <NvidiaShieldHubDownloadStep />
      <NvidiaShieldHubSteps steps={stepsBetween} />
      <NvidiaShieldHubSummaryStep />
    </>
  );
}
