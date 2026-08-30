import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import IosAndroidHubInstructions from "@/components/installation/ios-android/hub/Instructions";
import IosAndroidHubAppsGrid from "@/components/installation/ios-android/hub/AppsGrid";
import IosAndroidHubSteps from "@/components/installation/ios-android/hub/Steps";
import IosAndroidHubDownloadStep from "@/components/installation/ios-android/hub/DownloadStep";
import IosAndroidHubSummaryStep from "@/components/installation/ios-android/hub/SummaryStep";
import { iosAndroidSteps } from "@/content/ios-android/steps";
import { iosAndroidDownloadStep } from "@/content/ios-android/download-step";
import { iosAndroidSummaryStep } from "@/content/ios-android/summary-step";

export const metadata: Metadata = {
  title: "Installationsguide – iOS/Android",
  description:
    "IPTV med Mobilen eller Surfplattan. Se vilka appar vi rekommenderar för iPhone och Android och kom igång på några minuter.",
};

export default function IosAndroidGuidePage() {
  const stepsBeforeDownload = iosAndroidSteps.filter(
    (s) => s.step < iosAndroidDownloadStep.step
  );
  const stepsBetween = iosAndroidSteps.filter(
    (s) =>
      s.step > iosAndroidDownloadStep.step &&
      s.step < iosAndroidSummaryStep.step
  );
  const stepsAfterSummary = iosAndroidSteps.filter(
    (s) => s.step > iosAndroidSummaryStep.step
  );

  return (
    <>
      <PageTitleBar title="Installationsguide – iOS/Android" />
      <IosAndroidHubInstructions />
      <IosAndroidHubAppsGrid />
      <IosAndroidHubSteps steps={stepsBeforeDownload} />
      <IosAndroidHubDownloadStep />
      <IosAndroidHubSteps steps={stepsBetween} />
      <IosAndroidHubSummaryStep />
      <IosAndroidHubSteps steps={stepsAfterSummary} />
    </>
  );
}
