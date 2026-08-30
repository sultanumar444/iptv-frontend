import Link from "next/link";
import { windowsMacDownloadApps } from "@/content/windows-mac/guides";
import { windowsMacDownloadStep as data } from "@/content/windows-mac/download-step";
import AppleTvStepBadge from "../../shared/StepBadge";
import parseInlineLinks from "../../shared/parseInlineLinks";

export default function WindowsMacHubDownloadStep() {
  return (
    <section id="ladda-ned" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AppleTvStepBadge step={data.step} />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-white/70">{parseInlineLinks(data.intro)}</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <ul className="space-y-3">
            {windowsMacDownloadApps.map((app) =>
              app.slug ? (
                <li key={app.name}>
                  <Link
                    href={`/installationsguider/apple-tv/${app.slug}`}
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
              ) : (
                <li
                  key={app.name}
                  className="flex items-center gap-3 text-white/60"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  <span className="font-semibold">{app.name}</span>
                </li>
              )
            )}
          </ul>

          {data.closingNote && (
            <p className="mt-6 text-sm text-white/50">{data.closingNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
