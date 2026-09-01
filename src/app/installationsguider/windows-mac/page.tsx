import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageTitleBar from "@/components/PageTitleBar";
import WindowsMacHubInstructions from "@/components/installation/windows-mac/hub/Instructions";
import WindowsMacHubSteps from "@/components/installation/windows-mac/hub/Steps";
import WindowsMacHubDownloadStep from "@/components/installation/windows-mac/hub/DownloadStep";
import WindowsMacHubSummaryStep from "@/components/installation/windows-mac/hub/SummaryStep";
import { windowsMacSteps } from "@/content/windows-mac/steps";
import { windowsMacDownloadStep } from "@/content/windows-mac/download-step";
import { windowsMacSummaryStep } from "@/content/windows-mac/summary-step";

export const metadata: Metadata = buildMetadata({
  title: "Installationsguide – Windows/Mac",
  description:
    "Streaming på dator via Windows eller macOS med spelare eller appar. Se vilka appar vi rekommenderar och kom igång på några minuter.",
  path: "/installationsguider/windows-mac",
});

export default function WindowsMacGuidePage() {
  const stepsBeforeDownload = windowsMacSteps.filter(
    (s) => s.step < windowsMacDownloadStep.step
  );
  const stepsBetween = windowsMacSteps.filter(
    (s) =>
      s.step > windowsMacDownloadStep.step &&
      s.step < windowsMacSummaryStep.step
  );
  const stepsAfterSummary = windowsMacSteps.filter(
    (s) => s.step > windowsMacSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="IPTV Dator Instruktioner"
        description="IPTV med Dator – Här ser du hur man kommer igång med IPTV på sin Dator! För att kunna se på IPTV med din dator så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din dator. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Oavsett om du har en dator med Windows eller MAC OS så kan du givetvis se på IPTV. Det fungerar även väldigt bra om du använder apparna nedan. Självklart kan du använda andra appar också."
        path="/installationsguider/windows-mac"
      />
      <WindowsMacHubInstructions />
      <WindowsMacHubSteps steps={stepsBeforeDownload} />
      <WindowsMacHubDownloadStep />
      <WindowsMacHubSteps steps={stepsBetween} />
      <WindowsMacHubSummaryStep />
      <WindowsMacHubSteps steps={stepsAfterSummary} />
    </>
  );
}
