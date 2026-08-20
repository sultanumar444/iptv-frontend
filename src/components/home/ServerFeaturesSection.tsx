const features = [
  {
    title: "Optimerad streamingteknik",
    description:
      "Redundanta nätverksanslutningar med 10 Gbps bandbredd för snabb dataöverföring!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
      </svg>
    ),
  },
  {
    title: "Snabb och stabil server",
    description:
      "99,9% drifttid. Ingen mer buffring eller stuttering. Våra IPTV-tjänster är alltid redo med våra kraftfulla streamingservrar",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3.75l7.5 4.5 7.5-4.5M4.5 3.75v10.5l7.5 4.5m-7.5-15l7.5 4.5m0 10.5l7.5-4.5V3.75m-7.5 15V8.25" />
      </svg>
    ),
  },
  {
    title: "Support dygnet runt",
    description:
      "Har du problem eller behöver du hjälp? Kontakta oss, vi finns här för att hjälpa och stödja dig 24/7",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-4.126-.899L3 21l1.395-3.72C3.512 16.107 3 14.605 3 13c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function ServerFeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-violet-800 to-[#0a0e1a] px-8 py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
          Sverige fokuserar på smarta TV-streamingtjänster i Sverige
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/80">
          Upplev stabil och modern serverprestanda med våra snabba och
          pålitliga lösningar. Vi strävar efter en smidig
          streamingupplevelse utan avbrott, och vår kundtjänst finns
          tillgänglig dygnet runt, året om.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
