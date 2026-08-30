import Image from "next/image";
import Link from "next/link";
import { smartTvSummaryApps } from "@/content/smart-tv/guides";
import { smartTvSummaryStep as data } from "@/content/smart-tv/summary-step";
import AppleTvStepBadge from "../../shared/StepBadge";

export default function SmartTvHubSummaryStep() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AppleTvStepBadge step={data.step} />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            {data.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-4 text-white/70">
              {data.intro.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-6 font-bold text-white">
              {data.listTitle}
            </p>

            <ul className="mt-4 space-y-3">
              {smartTvSummaryApps.map((app) => (
                <li key={app.name}>
                  <Link
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5 shrink-0 rounded-full bg-violet-500/15 p-1 text-violet-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                      />
                    </svg>
                    <span className="font-semibold">{app.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={data.ctaHref}
              className="mt-8 inline-block w-fit rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
            >
              {data.ctaLabel}
            </Link>
          </div>

          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={data.image}
              alt="Person som tittar på IPTV via Smart TV"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
