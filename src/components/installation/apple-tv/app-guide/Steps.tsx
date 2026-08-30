import AppleTvStepImage from "../../shared/StepImage";

type DownloadStep = {
  step: number;
  image: string;
  body: string;
};

const colsClasses: Record<2 | 3 | 4 | 5, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
};

const sizesByColumns: Record<2 | 3 | 4 | 5, string> = {
  2: "(min-width: 640px) 50vw, 100vw",
  3: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  4: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  5: "(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw",
};

export default function AppleTvAppGuideSteps({
  steps,
  columns = 2,
  imageAspect = "landscape",
  id,
  bare = false,
  numberLayout = "row",
  portraitAspectClass,
  gapClass = "gap-6",
  portraitMaxWidthClass,
}: {
  steps: DownloadStep[];
  /** Antal kolumner på desktop-bredd (raderna följer automatiskt). */
  columns?: 2 | 3 | 4 | 5;
  /** Bildformat: "landscape" för TV-skärmdumpar, "portrait" för mobil/surfplatta. */
  imageAspect?: "landscape" | "portrait";
  /** Valfritt ankare för enhetsväljarens knappar att länka till. */
  id?: string;
  /** Utelämna den yttre <section>/bredd-wrappern, t.ex. när komponenten redan ligger inuti en annan sektion. */
  bare?: boolean;
  /** "row" = nummer bredvid texten under bilden (standard). "stacked" = nummer centrerat ovanför centrerad text under bilden. "side" = bilden till vänster, nummer + text till höger om bilden. */
  numberLayout?: "row" | "stacked" | "side";
  /** Åsidosätt bildrutans aspect-ratio-klass för "portrait" (standard: aspect-[9/19]). Använd t.ex. när skärmdumparna redan har mycket rymd runt innehållet. */
  portraitAspectClass?: string;
  /** Mellanrum mellan bildrutorna (standard: gap-6). */
  gapClass?: string;
  /** Åsidosätt kortets max-bredd för "portrait" (standard: max-w-[220px]). */
  portraitMaxWidthClass?: string;
}) {
  const gridClass = `grid ${gapClass} ${colsClasses[columns]}`;

  const aspectClass =
    imageAspect === "portrait"
      ? `relative ${portraitAspectClass ?? "aspect-[9/19]"}`
      : "relative aspect-video";

  const sizes = imageAspect === "portrait" ? "220px" : sizesByColumns[columns];

  const isSide = numberLayout === "side";

  const cardClass = isSide
    ? "flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    : imageAspect === "portrait"
      ? `mx-auto w-full ${portraitMaxWidthClass ?? "max-w-[220px]"} overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]`
      : "overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]";

  const grid = (
    <div className={gridClass}>
      {steps.map((item) => (
        <div key={item.step} className={cardClass}>
          {isSide ? (
            <>
              <div className="w-48 shrink-0">
                <AppleTvStepImage
                  src={item.image}
                  alt={`Steg ${item.step}`}
                  aspectClass={aspectClass}
                  sizes="192px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-400">
                  {item.step}
                </span>
                <p className="text-white/80">{item.body}</p>
              </div>
            </>
          ) : (
            <>
              <AppleTvStepImage
                src={item.image}
                alt={`Steg ${item.step}`}
                aspectClass={aspectClass}
                sizes={sizes}
              />

              {numberLayout === "stacked" ? (
                <div className="flex flex-col items-center gap-3 p-6 text-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-400">
                    {item.step}
                  </span>
                  <p className="text-sm text-white/80">{item.body}</p>
                </div>
              ) : (
                <div className="flex gap-4 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-400">
                    {item.step}
                  </span>
                  <p className="text-white/80">{item.body}</p>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );

  if (bare) {
    return id ? (
      <div id={id} className="scroll-mt-24">
        {grid}
      </div>
    ) : (
      grid
    );
  }

  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24">
      {grid}
    </section>
  );
}
