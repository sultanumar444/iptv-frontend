import Link from "next/link";

export default function AppleTvAppGuideFaq({
  heading,
  items,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  items: { question: string; answer: string }[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {heading}
      </h2>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {items.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group border-b border-white/10 last:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white/[0.03] px-6 py-5 font-semibold marker:content-none hover:bg-white/[0.06]">
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>

            <div className="px-6 py-6 text-sm leading-relaxed text-white/70">
              {faq.answer}
            </div>
          </details>
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
