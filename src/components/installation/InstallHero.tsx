import Image from "next/image";

const features = [
  {
    title: "Snabb och enkel installation",
    description: "Kom igång på bara några minuter.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    ),
  },
  {
    title: "Säker och stabil streaming",
    description: "Njut av hög kvalitet utan avbrott.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3zM9 12l2 2 4-4" />
    ),
  },
  {
    title: "Fungerar på alla dina enheter",
    description: "TV, boxar, mobiler och datorer.",
    icon: (
      <>
        <rect x="3" y="4" width="14" height="10" rx="1.5" />
        <path strokeLinecap="round" d="M8 18h4M10 14v4" />
        <rect x="18" y="9" width="4" height="7" rx="1" />
      </>
    ),
  },
];

export default function InstallHero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div>
        <p className="text-sm font-bold tracking-wide text-violet-400">
          ENKELT OCH SMIDIGT
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
          Installera IPTV enkelt på alla dina enheter
        </h1>
        <p className="mt-5 text-white/70">
          Följ våra guider steg för steg och kom igång med dina
          favoritkanaler på bara några minuter.
        </p>

        <div className="mt-8 space-y-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="h-5 w-5"
                >
                  {feature.icon}
                </svg>
              </div>
              <div>
                <p className="font-bold">{feature.title}</p>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/installation/Live-TV.png"
        alt="Live TV-gränssnitt"
        width={1523}
        height={1033}
        priority
        className="h-auto w-full"
      />
    </section>
  );
}
