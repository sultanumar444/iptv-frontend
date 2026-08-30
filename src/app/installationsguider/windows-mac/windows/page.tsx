import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import WindowsMacHubSteps from "@/components/installation/windows-mac/hub/Steps";
import WindowsHubAppsGrid from "@/components/installation/windows-mac/windows/AppsGrid";
import WindowsHubDownloadStep from "@/components/installation/windows-mac/windows/DownloadStep";
import WindowsHubSummaryStep from "@/components/installation/windows-mac/windows/SummaryStep";
import { windowsSteps } from "@/content/windows-mac/windows/steps";
import { windowsDownloadStep } from "@/content/windows-mac/windows/download-step";
import { windowsSummaryStep } from "@/content/windows-mac/windows/summary-step";

export const metadata: Metadata = {
  title: "IPTV Windows Instruktioner",
  description:
    "IPTV Windows – Här ser du hur man kommer igång med IPTV på din Windows dator! Se vilka appar vi rekommenderar och kom igång på några minuter.",
};

export default function WindowsGuidePage() {
  const stepsBeforeDownload = windowsSteps.filter(
    (s) => s.step < windowsDownloadStep.step
  );
  const stepsBetween = windowsSteps.filter(
    (s) =>
      s.step > windowsDownloadStep.step && s.step < windowsSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="IPTV Windows Instruktioner"
        description="IPTV Windows – Här ser du hur man kommer igång med IPTV på din Windows dator! Detta är ett av de smidigaste sätten att njuta av IPTV, särskilt om du vill ha flexibilitet och kontroll över din streamingupplevelse. Även om det kan vara praktiskt att använda andra enheter som IPTV med Smart TV eller mobiltelefoner, fungerar även en Windows-dator bra, speciellt om du är på resande fot och vill se på dina favorit kanaler på en större skärm en IPTV med mobil. Börja med att ladda ned valfri IPTV app windows som är kompatibel från Microsoft Store. Nedan ser du några av de mest populära apparna som vi rekommenderar för Windows plattformen. Klicka på valfri app för att läsa hur du kommer igång och få ut det mesta av din IPTV tjänst. Det finns naturligtvis även andra program som fungerar med Windows, men här hittar du de appar som vi anser är bäst lämpade för en smidig och pålitlig IPTV-upplevelse."
      />
      <WindowsHubAppsGrid />
      <WindowsMacHubSteps steps={stepsBeforeDownload} />
      <WindowsHubDownloadStep />
      <WindowsMacHubSteps steps={stepsBetween} />
      <WindowsHubSummaryStep />
    </>
  );
}
