import FAQSection from "@/components/home/FAQSection";
import FeatureImageSection from "@/components/home/FeatureImageSection";
import Hero from "@/components/home/Hero";
import MediaSlider from "@/components/home/MediaSlider";
import PricingSection from "@/components/home/PricingSection";
import ServerFeaturesSection from "@/components/home/ServerFeaturesSection";
import StepsSection from "@/components/home/StepsSection";
import TrustGridSection from "@/components/home/TrustGridSection";

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
