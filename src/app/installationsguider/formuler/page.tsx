import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import FormulerHubAppsGrid from "@/components/installation/formuler/hub/AppsGrid";
import FormulerHubSteps from "@/components/installation/formuler/hub/Steps";
import FormulerHubDownloadStep from "@/components/installation/formuler/hub/DownloadStep";
import FormulerHubSummaryStep from "@/components/installation/formuler/hub/SummaryStep";
import { formulerSteps } from "@/content/formuler/steps";
import { formulerDownloadStep } from "@/content/formuler/download-step";
import { formulerSummaryStep } from "@/content/formuler/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Formuler",
  description:
    "Formuler IPTV Instruktioner – Se vilka appar vi rekommenderar för Formuler-boxar och kom igång på några minuter.",
};

export default function FormulerGuidePage() {
  const stepsBeforeDownload = formulerSteps.filter(
    (s) => s.step < formulerDownloadStep.step
  );
  const stepsBetween = formulerSteps.filter(
    (s) =>
      s.step > formulerDownloadStep.step &&
      s.step < formulerSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="Formuler IPTV Instruktioner"
        description="Formuler IPTV Instruktioner – För att kunna se på IPTV med din Formuler iptv Box så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Formuler box. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp."
      />
      <FormulerHubAppsGrid />
      <FormulerHubSteps steps={stepsBeforeDownload} />
      <FormulerHubDownloadStep />
      <FormulerHubSteps steps={stepsBetween} />
      <FormulerHubSummaryStep />
    </>
  );
}
