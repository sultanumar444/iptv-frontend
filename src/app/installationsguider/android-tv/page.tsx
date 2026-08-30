import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import AndroidTvHubAppsGrid from "@/components/installation/android-tv/hub/AppsGrid";
import AndroidTvHubSteps from "@/components/installation/android-tv/hub/Steps";
import AndroidTvHubDownloadStep from "@/components/installation/android-tv/hub/DownloadStep";
import AndroidTvHubSummaryStep from "@/components/installation/android-tv/hub/SummaryStep";
import { androidTvSteps } from "@/content/android-tv/steps";
import { androidTvDownloadStep } from "@/content/android-tv/download-step";
import { androidTvSummaryStep } from "@/content/android-tv/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Android TV",
  description:
    "IPTV Android boxar Instruktioner – Se vilka appar vi rekommenderar för Android box och kom igång på några minuter.",
};

export default function AndroidTvGuidePage() {
  const stepsBeforeDownload = androidTvSteps.filter(
    (s) => s.step < androidTvDownloadStep.step
  );
  const stepsBetween = androidTvSteps.filter(
    (s) =>
      s.step > androidTvDownloadStep.step &&
      s.step < androidTvSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="IPTV Android Boxar Instruktioner"
        description="IPTV Android boxar Instruktioner – För att kunna se på IPTV med din Android Box så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Android box. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp."
      />
      <AndroidTvHubAppsGrid />
      <AndroidTvHubSteps steps={stepsBeforeDownload} />
      <AndroidTvHubDownloadStep />
      <AndroidTvHubSteps steps={stepsBetween} />
      <AndroidTvHubSummaryStep />
    </>
  );
}
