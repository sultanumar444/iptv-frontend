import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import FAQSection from "@/components/home/FAQSection";
import FeatureImageSection from "@/components/home/FeatureImageSection";
import Hero from "@/components/home/Hero";
import MediaSlider from "@/components/home/MediaSlider";
import PricingSection from "@/components/home/PricingSection";
import ServerFeaturesSection from "@/components/home/ServerFeaturesSection";
import StepsSection from "@/components/home/StepsSection";
import TrustGridSection from "@/components/home/TrustGridSection";

export const metadata: Metadata = buildMetadata({
  title: "SverigeIPTV – Streama svensk och internationell TV enkelt",
  description:
    "Sverige TV ger dig svensk och internationell underhållning på dina kompatibla enheter – enkel installation, tydligt användarstöd och inga bindningstider.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <MediaSlider />
      <PricingSection />
      <FeatureImageSection />
      <ServerFeaturesSection />
      <TrustGridSection />
      <StepsSection />
      <FAQSection />
    </>
  );
}
