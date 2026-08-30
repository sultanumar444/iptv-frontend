import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Integritetspolicy för SverigeIPTV.",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageTitleBar title="Integritetspolicy" />
      <TermsContent />
    </>
  );
}
