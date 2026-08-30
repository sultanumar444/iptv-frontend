import Link from "next/link";
import { macKomIgangApps, type MacApp } from "@/content/windows-mac/mac/guides";

function AppButton({ app }: { app: MacApp }) {
  return app.slug ? (
    <Link
      href={`/installationsguider/apple-tv/${app.slug}`}
      className="flex items-center justify-center rounded-lg bg-violet-600 px-6 py-4 text-center font-semibold text-white transition-colors hover:bg-violet-500"
    >
      {app.name}
    </Link>
  ) : (
    <div className="flex items-center justify-center rounded-lg bg-white/10 px-6 py-4 text-center font-semibold text-white/70">
      {app.name}
    </div>
  );
}

export default function MacHubAppsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Mac IPTV - Kom igång
          </h2>
          <p className="mt-5 text-white/70">
            När du ska komma igång så börjar du med att söka efter
            nedanstående appar i ordningen de syns. Skulle det visa sig att
            du inte lyckas komma igång med första appen du testar så testar
            du med nästa och nästa tills det fungerar för dig. Med dina
            inloggingsuppgifter kan du använda vilka appar du vill. Du är
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
            då de är enklast att komma igång med om man börjar med ett gratis
            test eller om man är nybörjare. Spellistan är enkel att aktivera
            på dessa appar.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            De &ldquo;relativt enkla apparna&rdquo; är också enkla att komma
            igång med men här behöver man besöka appens hemsida och ladda upp
            sin spellista genom att kopiera och klistra in sin m3u länk man
            får från oss vid test/köp.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {macKomIgangApps.map((app) => (
            <AppButton key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
