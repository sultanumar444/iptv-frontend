import Link from "next/link";
import {
  formulerBestApps,
  formulerMoreApps,
  formulerButtonApps,
  type FormulerApp,
} from "@/content/formuler/guides";

function AppCard({ app }: { app: FormulerApp }) {
  const content = (
    <>
      <h4 className="text-lg font-bold">{app.name}</h4>
      {app.subtitle && (
        <span className="mt-4 inline-block rounded-md border border-yellow-400/50 px-4 py-1.5 text-xs font-bold text-yellow-400">
          {app.subtitle}
        </span>
      )}
    </>
  );

  return app.slug ? (
    <Link
      href={`/installationsguider/apple-tv/${app.slug}`}
      className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-white/20 hover:bg-white/[0.05]"
    >
      {content}
    </Link>
  ) : (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
      {content}
    </div>
  );
}

function AppButton({ app }: { app: FormulerApp }) {
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

export default function FormulerHubAppsGrid() {
  return (
    <section id="appar" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-sky-400">
            KOM IGÅNG
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kom igång</h2>
          <p className="mt-5 text-white/70">
            När du ska komma igång med formuler iptv box så börjar du med att
            söka efter nedanstående appar i ordningen de syns. Skulle det
            visa sig att du inte lyckas komma igång med första appen du
            testar så testar du med nästa och nästa tills det fungerar för
            dig. Med dina inloggingsuppgifter kan du använda vilka appar du
            vill. Du är alltså inte begränsad till en specifik app. Läs mer
            nedan!
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
            Observera att MyTVonline apparna är Formulers egna appar och
            därför rekommenderas det starkt att man använder dessa.
            Spellistan är enkel att aktivera på dessa appar.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {formulerBestApps.map((app) => (
            <AppButton key={app.name} app={app} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Fler IPTV appar till Formuler boxar
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formulerMoreApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formulerButtonApps.map((app) => (
            <AppButton key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
