import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageTitleBar from "@/components/PageTitleBar";
import DeviceGrid from "@/components/installation/DeviceGrid";
import InstallFaq from "@/components/installation/InstallFaq";
import InstallHero from "@/components/installation/InstallHero";
import InstallSteps from "@/components/installation/InstallSteps";

export const metadata: Metadata = buildMetadata({
  title: "Installationsguider",
  description:
    "Installera IPTV enkelt på alla dina enheter. Följ våra guider steg för steg för Smart TV, Apple TV, Android TV, TVIP, Chromecast och fler.",
  path: "/installationsguider",
});

export default function InstallationsguiderPage() {
  return (
    <>
      <PageTitleBar title="Installationsguider" path="/installationsguider" />
      <InstallHero />
      <DeviceGrid />
      <InstallSteps />
      <InstallFaq />
    </>
  );
}
