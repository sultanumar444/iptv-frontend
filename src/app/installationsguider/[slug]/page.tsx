import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitleBar from "@/components/PageTitleBar";
import {
  deviceGuides,
  genericInstallSteps,
  getDeviceGuide,
} from "@/content/install-guides";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return deviceGuides.map((device) => ({ slug: device.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/installationsguider/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const device = getDeviceGuide(slug);

  if (!device) return {};

  return buildMetadata({
    title: `Installationsguide – ${device.name}`,
    description: device.description,
    path: `/installationsguider/${device.slug}`,
  });
}

export default async function DeviceGuidePage({
  params,
}: PageProps<"/installationsguider/[slug]">) {
  const { slug } = await params;
  const device = getDeviceGuide(slug);

  if (!device) notFound();

  return (
    <>
      <PageTitleBar
        title={`Installationsguide – ${device.name}`}
        path={`/installationsguider/${device.slug}`}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image
              src={device.image}
              alt={device.name}
              width={220}
              height={150}
              className="h-full w-full object-contain p-2"
            />
          </div>
          <p className="text-white/70">{device.description}</p>
        </div>

        <div className="mt-10 space-y-8">
          {genericInstallSteps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sky-400 font-bold text-sky-400">
                {i + 1}
              </div>
              <div>
                <p className="font-bold">{step.title}</p>
                <p className="mt-1 text-sm text-white/70">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/60">
          Kör du fast? Kontakta vårt supportteam på{" "}
          <a
            href="mailto:supporten@sverigeiptv.net"
            className="text-sky-400 hover:underline"
          >
            supporten@sverigeiptv.net
          </a>{" "}
          så hjälper vi dig vidare.
        </p>

        <Link
          href="/installationsguider"
          className="mt-10 inline-block font-semibold text-sky-400 hover:underline"
        >
          ← Tillbaka till alla enheter
        </Link>
      </div>
    </>
  );
}
