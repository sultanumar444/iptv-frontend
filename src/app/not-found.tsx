import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-semibold tracking-wide text-violet-400">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        Vi kunde inte hitta sidan du sökte
      </h1>
      <p className="mt-4 text-white/70">
        Sidan kan ha flyttats eller tagits bort. Prova att gå tillbaka till
        startsidan eller se våra bloggar och installationsguider.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Till startsidan
        </Link>
        <Link
          href="/bloggar"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Bloggar
        </Link>
        <Link
          href="/installationsguider"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Installationsguider
        </Link>
      </div>
    </div>
  );
}
