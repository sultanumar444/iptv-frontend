import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageTitleBar from "@/components/PageTitleBar";
import MacHubAppsGrid from "@/components/installation/windows-mac/mac/AppsGrid";
import WindowsMacHubSteps from "@/components/installation/windows-mac/hub/Steps";
import MacHubDownloadStep from "@/components/installation/windows-mac/mac/DownloadStep";
import MacHubSummaryStep from "@/components/installation/windows-mac/mac/SummaryStep";
import { macSteps } from "@/content/windows-mac/mac/steps";
import { macDownloadStep } from "@/content/windows-mac/mac/download-step";
import { macSummaryStep } from "@/content/windows-mac/mac/summary-step";

export const metadata: Metadata = buildMetadata({
  title: "MAC IPTV Instruktioner",
  description:
    "IPTV Mac – Detta är ett av de mest flexibla sätten att njuta av IPTV på en Mac-dator. Se vilka appar vi rekommenderar och kom igång på några minuter.",
  path: "/installationsguider/windows-mac/mac",
});

export default function MacGuidePage() {
  const stepsBeforeDownload = macSteps.filter(
    (s) => s.step < macDownloadStep.step
  );
  const stepsBetween = macSteps.filter(
    (s) => s.step > macDownloadStep.step && s.step < macSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="MAC IPTV Instruktioner"
        description="IPTV Mac – Detta är ett av de mest flexibla sätten att njuta av IPTV, särskilt om du vill ha enkelhet och kontroll över din streamingupplevelse på en Mac-dator. Även om det kan vara praktiskt att använda andra enheter som IPTV med Smart TV eller mobiltelefoner, fungerar en Mac utmärkt, särskilt om du är på språng och vill se dina favoritkanaler på en större skärm jämfört med mobilen. Börja med att ladda ner en IPTV-app som är kompatibel med macOS. Du kan enkelt ladda ner dessa appar från deras officiella webbplatser eller via App Store. Klicka på valfri app för att läsa hur du snabbt kan komma igång och få ut det mesta av din IPTV-tjänst. Naturligtvis finns det även andra program som fungerar på Mac, men dessa är de appar vi anser ger den smidigaste och mest pålitliga IPTV-upplevelsen. Oavsett om du streamar live-TV, filmer eller serier, ger Mac-plattformen en stabil och flexibel lösning för IPTV, vilket gör den till ett utmärkt val för både hemmabruk och när du är på språng. Mac IPTV är ett bra sätt att se på dina favorit kanaler även på resande fot!"
        path="/installationsguider/windows-mac/mac"
      />
      <MacHubAppsGrid />
      <WindowsMacHubSteps steps={stepsBeforeDownload} />
      <MacHubDownloadStep />
      <WindowsMacHubSteps steps={stepsBetween} />
      <MacHubSummaryStep />
    </>
  );
}
