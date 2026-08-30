import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import ChromecastHubAppsGrid from "@/components/installation/chromecast/hub/AppsGrid";
import ChromecastHubSteps from "@/components/installation/chromecast/hub/Steps";
import ChromecastHubDownloadStep from "@/components/installation/chromecast/hub/DownloadStep";
import ChromecastHubSummaryStep from "@/components/installation/chromecast/hub/SummaryStep";
import { chromecastSteps } from "@/content/chromecast/steps";
import { chromecastDownloadStep } from "@/content/chromecast/download-step";
import { chromecastSummaryStep } from "@/content/chromecast/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – Chromecast",
  description:
    "IPTV Chromecast Instruktioner – Se vilka appar vi rekommenderar för Chromecast och kom igång på några minuter.",
};

export default function ChromecastGuidePage() {
  const stepsBeforeDownload = chromecastSteps.filter(
    (s) => s.step < chromecastDownloadStep.step
  );
  const stepsBetween = chromecastSteps.filter(
    (s) =>
      s.step > chromecastDownloadStep.step &&
      s.step < chromecastSummaryStep.step
  );
  const stepsAfterSummary = chromecastSteps.filter(
    (s) => s.step > chromecastSummaryStep.step
  );

  return (
    <>
      <PageTitleBar
        title="IPTV Chromecast Instruktioner"
        description="IPTV Chromecast Instruktioner – För att kunna se på IPTV med din Chromecast så behöver du ladda ned en IPTV app. Nedan ser du olika appar som fungerar med din Chromecast IPTV. Klicka på valfri app för att läsa hur man kommer igång. Det finns naturligtvis även andra appar som fungerar med din enhet men nedan finner du de som vi rekommenderar. Vi har listat apparna i ordning efter vilken vi anser vara enklast att komma igång med där bäst är först/högst upp."
      />

      <section className="mx-auto max-w-7xl px-6 pt-4">
        <div className="flex items-start gap-4 rounded-xl border border-yellow-400/30 bg-yellow-400/[0.06] px-6 py-5">
          <span className="h-full w-1 shrink-0 self-stretch rounded-full bg-yellow-400" />
          <p className="text-white/90">
            <span className="font-bold text-yellow-400">OBS!</span> Om du har
            en Chromecast där du inte kan ladda ned appar så rekommenderas
            det INTE att du använder denna. Att casta från sin Mobil,
            Surfplatta eller dator är en ostabil lösning som även kan
            överhetta din enhet!
          </p>
        </div>
      </section>

      <ChromecastHubAppsGrid />
      <ChromecastHubSteps steps={stepsBeforeDownload} />
      <ChromecastHubDownloadStep />
      <ChromecastHubSteps steps={stepsBetween} />
      <ChromecastHubSummaryStep />
      <ChromecastHubSteps steps={stepsAfterSummary} />
    </>
  );
}
