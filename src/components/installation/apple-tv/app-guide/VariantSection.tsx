import Image from "next/image";
import parseInlineLinks from "../../shared/parseInlineLinks";

export default function AppleTvAppGuideVariantSection({
  heading,
  body,
  image,
  imagePosition = "left",
}: {
  heading: string;
  body: string;
  image?: string;
  /** Vilken sida bilden hamnar på (sm+). Standard: "left". */
  imagePosition?: "left" | "right";
}) {
  if (!image) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-4 text-center text-white/70">
          {parseInlineLinks(body)}
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div
        className={
          imagePosition === "right"
            ? "flex flex-col gap-8 sm:flex-row-reverse sm:items-center"
            : "flex flex-col gap-8 sm:flex-row sm:items-center"
        }
      >
        <div className="relative aspect-video w-full shrink-0 sm:w-[38%]">
          <Image
            src={image}
            alt={heading}
            fill
            sizes="(min-width: 640px) 38vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-[62%]">
          <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
          <p className="mt-4 text-white/70">{parseInlineLinks(body)}</p>
        </div>
      </div>
    </section>
  );
}
