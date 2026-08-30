import Image from "next/image";
import Link from "next/link";
import { deviceGuides } from "@/content/install-guides";
import { appleTvApps } from "@/content/apple-tv/guides";
import { smartTvEasyApps, smartTvMoreApps } from "@/content/smart-tv/guides";
import {
  iosAndroidBothApps,
  iosApps,
  androidApps,
} from "@/content/ios-android/guides";
import { windowsMacDownloadApps } from "@/content/windows-mac/guides";
import {
  androidTvBestApps,
  androidTvMoreApps,
} from "@/content/android-tv/guides";
import {
  formulerBestApps,
  formulerMoreApps,
  formulerButtonApps,
} from "@/content/formuler/guides";
import {
  nvidiaShieldBestApps,
  nvidiaShieldMoreApps,
} from "@/content/nvidia-shield/guides";
import {
  chromecastBestApps,
  chromecastMoreApps,
} from "@/content/chromecast/guides";

const badgeColors = [
  "border-yellow-400/40 text-yellow-400",
  "border-white/30 text-white",
  "border-emerald-400/40 text-emerald-400",
  "border-violet-400/40 text-violet-400",
  "border-sky-400/40 text-sky-400",
  "border-pink-400/40 text-pink-400",
  "border-blue-400/40 text-blue-400",
  "border-lime-400/40 text-lime-400",
  "border-orange-400/40 text-orange-400",
  "border-cyan-400/40 text-cyan-400",
];

export default function DeviceGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-violet-400">
          VÄLJ DIN ENHET
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Välj enhet och följ guiden
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {deviceGuides.map((device, i) => (
          <div
            key={device.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={device.image}
                  alt={device.name}
                  width={220}
                  height={150}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div>
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${
                    badgeColors[i % badgeColors.length]
                  }`}
                >
                  {device.badge}
                </span>
                <h3 className="mt-2 text-lg font-bold">{device.name}</h3>
                <p className="mt-1 text-sm text-white/60">
                  {device.description}
                </p>
                <Link
                  href={device.href ?? `/installationsguider/${device.slug}`}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky-400 hover:underline"
                >
                  Visa installationsguide
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {device.slug === "apple-tv" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {appleTvApps.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/installationsguider/apple-tv/${app.slug}`}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                  >
                    {app.name}
                  </Link>
                ))}
              </div>
            )}

            {device.slug === "smart-tv" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...smartTvEasyApps, ...smartTvMoreApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "ios-android" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...iosAndroidBothApps, ...iosApps, ...androidApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "windows-mac" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {windowsMacDownloadApps
                  .filter((app) => app.slug)
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "android-tv" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...androidTvBestApps, ...androidTvMoreApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "formuler" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...formulerBestApps, ...formulerMoreApps, ...formulerButtonApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "xbox" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/installationsguider/apple-tv/myiptv-player"
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                >
                  MyIPTV Player
                </Link>
              </div>
            )}

            {device.slug === "tvip-s-box" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {["TVIP 705", "TVIP 605", "Övriga TVIP boxar"].map((label) => (
                  <Link
                    key={label}
                    href="/installationsguider/tvip-s-box"
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {device.slug === "nvidia-shield" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...nvidiaShieldBestApps, ...nvidiaShieldMoreApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}

            {device.slug === "chromecast-instruktioner" && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {[...chromecastBestApps, ...chromecastMoreApps]
                  .filter(
                    (app, i, arr) =>
                      app.slug &&
                      arr.findIndex((a) => a.slug === app.slug) === i
                  )
                  .map((app) => (
                    <Link
                      key={app.slug}
                      href={`/installationsguider/apple-tv/${app.slug}`}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-sky-400/40 hover:text-sky-400"
                    >
                      {app.name}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
