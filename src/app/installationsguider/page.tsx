import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import DeviceGrid from "@/components/installation/DeviceGrid";
import InstallFaq from "@/components/installation/InstallFaq";
import InstallHero from "@/components/installation/InstallHero";
import InstallSteps from "@/components/installation/InstallSteps";

export const metadata: Metadata = {
  title: "Installationsguider",
  description:
    "Installera IPTV enkelt på alla dina enheter. Följ våra guider steg för steg för Smart TV, Apple TV, Android TV, TVIP, Chromecast och fler.",
};

export default function InstallationsguiderPage() {
  return (
    <>
      <PageTitleBar title="Installationsguider" />
      <InstallHero />
      <DeviceGrid />
      <InstallSteps />
      <InstallFaq />
    </>
  );
}
