import Link from "next/link";
import { smartTvEasyApps, smartTvMoreApps } from "@/content/smart-tv/guides";

export default function SmartTvHubAppsGrid() {
  return (
    <section id="appar" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-sky-400">
            KOM IGÅNG
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kom igång</h2>
          <p className="mt-5 text-white/70">
            När du ska komma igång så börjar du med att söka efter
            nedanstående appar i ordningen de syns. Skulle det visa sig att
            du inte lyckas komma igång med första appen du testar så testar
            du med nästa och nästa tills det fungerar för dig. Med dina
            inloggningsuppgifter kan du använda vilka appar du vill. Du är
            alltså inte begränsad till en specifik app.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5">
          <span className="h-8 w-1 shrink-0 rounded-full bg-yellow-400" />
          <p className="text-white/90">
            Kom bara ihåg att vara noga så att du endast använder{" "}
            <span className="font-bold text-white">en app åt gången</span>!
          </p>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Rekommenderade appar att börja med
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            Vi rekommenderar att man börjar med någon utav nedanstående appar
            då de är enklast att komma igång med om man börjar med ett
            gratis test eller om man är nybörjare. Spellistan är enkel att
            aktivera på dessa appar.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            De &quot;relativt enkla apparna&quot; är också enkla att komma
            igång med men här behöver man besöka appens hemsida och ladda
            upp sin spellista genom att kopiera och klistra in sin m3u länk
            man får från oss vid test/köp.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {smartTvEasyApps.map((app) => {
            const content = (
              <>
                <h4 className="text-lg font-bold">{app.name}</h4>
                <span className="mt-4 inline-block rounded-md border border-yellow-400/50 px-4 py-1.5 text-xs font-bold text-yellow-400">
                  {app.difficulty}
                </span>
              </>
            );

            return app.slug ? (
              <Link
                key={app.name}
                href={`/installationsguider/apple-tv/${app.slug}`}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                {content}
              </Link>
            ) : (
              <div
                key={app.name}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Fler IPTV appar till Smart TV
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {smartTvMoreApps.map((app) => {
            const content = (
              <>
                <h4 className="text-lg font-bold">{app.name}</h4>
                <span className="mt-4 inline-block rounded-md border border-sky-400/50 px-4 py-1.5 text-xs font-bold text-sky-400">
                  Kompatibel med Smart TV
                </span>
              </>
            );

            return app.slug ? (
              <Link
                key={app.name}
                href={`/installationsguider/apple-tv/${app.slug}`}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                {content}
              </Link>
            ) : (
              <div
                key={app.name}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
