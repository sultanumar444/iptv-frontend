import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageTitleBar from "@/components/PageTitleBar";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = buildMetadata({
  title: "Integritetspolicy",
  description: "Integritetspolicy för SverigeIPTV.",
  path: "/integritetspolicy",
});

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageTitleBar title="Integritetspolicy" path="/integritetspolicy" />
      <TermsContent />
    </>
  );
}
