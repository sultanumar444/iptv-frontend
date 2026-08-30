import Image from "next/image";
import Link from "next/link";
import type { FormulerStep } from "@/content/formuler/steps";
import AppleTvStepBadge from "../../shared/StepBadge";
import parseInlineLinks from "../../shared/parseInlineLinks";

export default function FormulerHubSteps({
  steps,
}: {
  steps: FormulerStep[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="space-y-6">
        {steps.map((item) => {
          const reversed = item.step % 2 === 0;

          return (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={item.background}
                alt=""
                fill
                className="object-cover"
              />
              <div
                className={
                  reversed
                    ? "absolute inset-0 bg-gradient-to-l from-[#0a0e1a] via-[#0a0e1a]/95 to-[#0a0e1a]/50"
                    : "absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/95 to-[#0a0e1a]/50"
                }
              />

              <div
                className={
                  reversed
                    ? "relative flex justify-end px-8 py-12 sm:px-12 sm:py-16"
                    : "relative px-8 py-12 sm:px-12 sm:py-16"
                }
              >
                <div className="max-w-2xl">
                  <AppleTvStepBadge step={item.step} />

                  <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                    {item.title}
                  </h2>

                  <div className="mt-6 space-y-4 text-white/75">
                    {item.body.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {parseInlineLinks(paragraph)}
                      </p>
                    ))}
                  </div>

                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className="mt-8 inline-block rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
                    >
                      {item.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
