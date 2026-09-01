import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kontakta",
  description:
    "Kontakta SverigeIPTV för frågor om paket, installation eller support.",
  path: "/kontakta",
  // TODO: ta bort noindex när kontaktformuläret/kontaktuppgifterna är på plats.
  noindex: true,
});

export default function KontaktaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Kontakta</h1>
      <p className="mt-4 text-white/70">
        Här kommer kontaktuppgifter och ett kontaktformulär att visas.
      </p>
    </div>
  );
}
