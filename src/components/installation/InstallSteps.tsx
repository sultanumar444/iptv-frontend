import Link from "next/link";
import { genericInstallSteps } from "@/content/install-guides";

export default function InstallSteps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-violet-400">
          STEG FÖR STEG
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Så fungerar installationen
        </h2>
      </div>

      <div className="mx-auto mt-12 w-[70%] space-y-6">
        {genericInstallSteps.map((step, i) => (
          <div
            key={step.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
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

      <div className="mx-auto mt-12 flex w-[70%] flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Behöver du hjälp?</p>
            <p className="text-sm text-white/70">
              Vårt supportteam finns här för dig om du stöter på problem
              eller har frågor om installation, konfiguration eller
              kompatibilitet.
            </p>
          </div>
        </div>

        <Link
          href="/kontakta"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-bold text-white transition-colors hover:bg-violet-500"
        >
          Kontakta support
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
