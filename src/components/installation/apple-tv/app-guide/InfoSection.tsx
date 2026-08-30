import Link from "next/link";
import parseInlineLinks from "../../shared/parseInlineLinks";

export default function AppleTvAppGuideInfoSection({
  blocks,
  ctaLabel,
  ctaHref,
  layout = "grid",
}: {
  blocks: { heading: string; body: string[] }[];
  ctaLabel: string;
  ctaHref: string;
  /** "grid" (standard) = 2 kolumner vid fler än 1 block. "single" = alltid 1 kolumn/rad. */
  layout?: "grid" | "single";
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div
        className={
          layout === "single"
            ? "grid grid-cols-1 gap-8"
            : blocks.length > 1
              ? "grid grid-cols-1 gap-8 sm:grid-cols-2"
              : "grid grid-cols-1 gap-8"
        }
      >
        {blocks.map((block) => (
          <div key={block.heading} className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {block.heading}
            </h2>
            <div className="mt-4 space-y-4 text-white/70">
              {block.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {parseInlineLinks(paragraph)}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={ctaHref}
          className="inline-block rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
