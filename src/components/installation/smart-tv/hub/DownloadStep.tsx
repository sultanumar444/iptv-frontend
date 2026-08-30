import Image from "next/image";
import Link from "next/link";
import { smartTvDownloadApps } from "@/content/smart-tv/guides";
import { smartTvDownloadStep as data } from "@/content/smart-tv/download-step";
import AppleTvStepBadge from "../../shared/StepBadge";

export default function SmartTvHubDownloadStep() {
  const half = Math.ceil(smartTvDownloadApps.length / 2);
  const columnLeft = smartTvDownloadApps.slice(0, half);
  const columnRight = smartTvDownloadApps.slice(half);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AppleTvStepBadge step={data.step} />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-white/70">{data.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-white/70">{data.cardIntro}</p>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {[columnLeft, columnRight].map((column, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {column.map((app) => (
                    <li key={app.name} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span className="font-semibold text-white">
                        {app.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <Link
              href={data.ctaHref}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-bold text-white transition-colors hover:bg-violet-500"
            >
              {data.ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <p className="mt-6 text-sm text-white/50">
              Bästa IPTV appen läser du mer om här.
            </p>
          </div>

          <div className="relative flex items-center overflow-hidden rounded-2xl border border-white/10 bg-[#05070d] p-4">
            <div className="relative aspect-[433/300] w-full">
              <Image
                src="/installation/smart-tv.webp"
                alt="Smart TV"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {data.infoBoxes.map((box) => (
            <div
              key={box.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="font-bold text-yellow-400">{box.title}</p>
              <p className="mt-2 text-sm text-white/70">{box.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
