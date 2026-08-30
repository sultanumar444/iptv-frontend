import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitleBar from "@/components/PageTitleBar";
import { appleTvApps, getAppleTvApp } from "@/content/apple-tv/guides";

/**
 * Fallback för appar som ännu inte har en egen sida (mapp) under
 * installationsguider/apple-tv/. När en app får sin egen sida (se t.ex.
 * .../apple-tv/iptvx/page.tsx), tar den mappen automatiskt över och denna
 * fallback slutar visas för just den appen — ta då bort dess slug nedan.
 */
const appsWithDedicatedPages = [
  "iptvx",
  "iplaytv",
  "perfect-iptv",
  "iptv-expert",
  "xtream-iptv",
  "gse-smart-iptv-pro",
  "iptv-streamer",
  "iptv-smarters",
  "ibo-player",
  "iptv-pro",
  "televizo-iptv",
  "set-iptv",
  "net-iptv",
  "tivimate",
  "iptv-extreme",
  "duplex-play",
  "hot-iptv",
  "xui-iptv-player",
  "smart-stb",
  "mega-iptv",
  "iptv-world",
  "9xtream-iptv",
  "implayer-iptv",
];

export async function generateStaticParams() {
  return appleTvApps
    .filter((app) => !appsWithDedicatedPages.includes(app.slug))
    .map((app) => ({ app: app.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/installationsguider/apple-tv/[app]">): Promise<Metadata> {
  const { app: slug } = await params;
  const app = getAppleTvApp(slug);

  if (!app) return {};

  return {
    title: `${app.name} Instruktioner`,
    description: app.description,
  };
}

export default async function AppleTvAppComingSoonPage({
  params,
}: PageProps<"/installationsguider/apple-tv/[app]">) {
  const { app: slug } = await params;
  const app = getAppleTvApp(slug);

  if (!app) notFound();

  return (
    <>
      <PageTitleBar title={`${app.name} Instruktioner`} />

      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-white/70">
          Guiden för {app.name} på Apple TV är på väg. Kom snart tillbaka!
        </p>

        <Link
          href="/installationsguider/apple-tv"
          className="mt-8 inline-block font-semibold text-sky-400 hover:underline"
        >
          ← Tillbaka till Apple TV
        </Link>
      </div>
    </>
  );
}
