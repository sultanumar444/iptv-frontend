import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Anvandarvillkor",
  description: "Användarvillkor för SverigeIPTV.",
};

export default function AnvandarvillkorPage() {
  return (
    <>
      <PageTitleBar title="Anvandarvillkor" />
      <TermsContent />
    </>
  );
}
