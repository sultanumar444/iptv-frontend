import Image from "next/image";

export default function AppleTvAppGuideSpecsCompact({
  image,
  specs,
  layout = "row",
  card = true,
}: {
  image: string;
  specs: { label: string; value: string }[];
  /** "row" (standard) placerar bilden till vänster och specs till höger på en rad (sm+). "stack" är bilden ovanför. */
  layout?: "stack" | "row";
  /** Rama in hela avsnittet i ett kort med bakgrund/border. Standard: true. */
  card?: boolean;
}) {
  return (
    <div
      className={
        card
          ? "w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
          : "w-full"
      }
    >
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Specifikationer
      </h2>

      <div
        className={
          layout === "row"
            ? "mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center"
            : "mt-8 flex flex-col items-center gap-8"
        }
      >
        <div
          className={
            layout === "row"
              ? "relative mx-auto aspect-video w-full max-w-lg shrink-0 overflow-hidden rounded-[20px] sm:mx-0 sm:w-[50%]"
              : "relative mx-auto aspect-video w-full max-w-sm shrink-0 overflow-hidden rounded-[20px] sm:w-[35%]"
          }
        >
          <Image
            src={image}
            alt="Appens ikon"
            fill
            sizes={
              layout === "row"
                ? "(min-width: 640px) 50vw, 100vw"
                : "(min-width: 640px) 35vw, 100vw"
            }
            className="object-contain"
          />
        </div>

        <div className="w-full">
          <dl className="divide-y divide-white/10">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between gap-4 py-3"
              >
                <dt className="text-white/60">{spec.label}</dt>
                <dd className="font-semibold text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
