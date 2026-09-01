import type { Metadata } from "next";
import Image from "next/image";
import PageTitleBar from "@/components/PageTitleBar";
import PricingSection from "@/components/home/PricingSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Vårt paket",
  description:
    "Se SverigeIPTV:s streamingpaket – stabil och högkvalitativ streaming, säkra betalningar och ingen bindningstid.",
  path: "/vart-paket",
});

const motto = [
  {
    title: "Säkra betalningar",
    description:
      "Vi erbjuder säker betalning med alla stora betalningsmetoder. Din betalning är 100% skyddad genom vår säkra betalningsprocess.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-10 w-10 text-violet-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.5c0 4.42-3 8.28-7 9.5-4-1.22-7-5.08-7-9.5V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5l2 2 4-4.5" />
      </svg>
    ),
  },
  {
    title: "Ingen bindningstid",
    description:
      "Vi vill att du ska vara nöjd med vår tjänst, det är därför vi inte har någon bindningstid. Du kan avbryta din prenumeration när som helst utan extra kostnad.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-10 w-10 text-violet-400">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l2.5 2.5L16 13" />
      </svg>
    ),
  },
];

export default function VartPaketPage() {
  return (
    <>
      <PageTitleBar title="Vårt paket" path="/vart-paket" />

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Streamingpaket från Sverige Streaming – Svensk streaming med
          fokus på kvalitet
        </h2>
        <p className="mt-3 text-sm font-semibold tracking-wide text-violet-400">
          – STABIL OCH HÖGKVALITATIV STREAMING FRÅN STREAMING SVERIGE –
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-white/70">
          Upptäck den ultimata streamingunderhållningsupplevelsen med våra
          unika premiumtjänster och streamingpaket. Streama högkvalitativt
          innehåll dygnet runt och anpassa din TV precis som du vill ha den.
          Njut av ett brett utbud av kanaler och erbjudanden, samt
          videoinnehåll i imponerande upplösning. Med vår exceptionella
          streamingtjänst kan du uppleva underhållning på en helt ny nivå –
          så kom igång idag med oss!
        </p>
      </section>

      <PricingSection />

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-wide text-violet-400">
            Vår motto
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Upplev den bästa streamingtjänsten
          </h2>
          <p className="mt-4 text-white/70">
            Få tillgång till den bästa TV-streamingtjänsten i Sverige.
            Starta din prenumeration och njut av högkvalitativ streaming
            idag.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {motto.map((item) => (
              <div key={item.title}>
                {item.icon}
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/best-stream.jpg"
            alt="Populära filmer och serier"
            width={1024}
            height={585}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
