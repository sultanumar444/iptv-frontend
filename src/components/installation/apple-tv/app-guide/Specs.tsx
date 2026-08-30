import Image from "next/image";

export default function AppleTvAppGuideSpecs({
  image,
  specs,
  warning,
  compact = false,
  smallImage = false,
  compactLayout = "stack",
  card = true,
}: {
  image: string;
  specs: { label: string; value: string }[];
  warning?: string;
  /** Smalare sektion (70% bredd), mindre bild med rundade hörn. Används av per-enhet-specifikationer (t.ex. DeviceCompat). */
  compact?: boolean;
  /** Gör bilden till vänster lite mindre (endast icke-compact). */
  smallImage?: boolean;
  /** Endast för compact: "stack" (standard) = bild ovanför, "row" = bild vänster / text höger i en rad (sm+). */
  compactLayout?: "stack" | "row";
  /** Rama in hela avsnittet i ett kort med bakgrund/border. Standard: true. */
  card?: boolean;
}) {
  return (
    <div
      className={
        card
          ? "w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
          : compact
            ? "w-full"
            : undefined
      }
    >
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Specifikationer
      </h2>

      <div
        className={
          compact
            ? compactLayout === "row"
              ? "mt-8 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center"
              : "mt-8 flex flex-col items-center gap-8"
            : "mt-8 flex flex-col gap-8 sm:flex-row sm:items-start"
        }
      >
        <div
          className={
            compact
              ? compactLayout === "row"
                ? "relative mx-auto aspect-video w-full max-w-sm shrink-0 overflow-hidden rounded-[20px] sm:mx-0 sm:w-[42%]"
                : "relative mx-auto aspect-video w-full max-w-sm shrink-0 overflow-hidden rounded-[20px] sm:w-[35%]"
              : smallImage
                ? "relative mx-auto aspect-video w-full max-w-sm shrink-0 sm:mx-0 sm:w-[38%]"
                : "relative aspect-video w-full shrink-0 sm:w-[50%]"
          }
        >
          <Image
            src={image}
            alt="Appens skärm i App Store"
            fill
            sizes={
              compact
                ? compactLayout === "row"
                  ? "(min-width: 640px) 42vw, 100vw"
                  : "(min-width: 640px) 35vw, 100vw"
                : smallImage
                  ? "(min-width: 640px) 38vw, 100vw"
                  : "(min-width: 640px) 50vw, 100vw"
            }
            className="object-contain"
          />
        </div>

        <div
          className={
            compact
              ? "w-full"
              : "w-full pr-6 sm:w-[50%] sm:pr-10"
          }
        >
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

          {warning && (
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-yellow-400/20 bg-yellow-400/[0.05] px-6 py-5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
              <p className="text-white/85">
                <span className="font-bold text-yellow-400">OBS!</span>{" "}
                {warning}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
