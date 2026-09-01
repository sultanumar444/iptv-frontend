import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kanallista",
  description:
    "Se vilka TV-kanaler som ingår i SverigeIPTV:s streamingpaket.",
  path: "/kanallista",
  // TODO: ta bort noindex när den riktiga kanallistan är på plats.
  noindex: true,
});

export default function KanallistaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Kanallista</h1>
      <p className="mt-4 text-white/70">
        Här kommer listan över tillgängliga kanaler att visas.
      </p>
    </div>
  );
}
