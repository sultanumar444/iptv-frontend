import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageTitleBar from "@/components/PageTitleBar";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = buildMetadata({
  title: "Anvandarvillkor",
  description: "Användarvillkor för SverigeIPTV.",
  path: "/anvandarvillkor",
});

export default function AnvandarvillkorPage() {
  return (
    <>
      <PageTitleBar title="Anvandarvillkor" path="/anvandarvillkor" />
      <TermsContent />
    </>
  );
}
