import Link from "next/link";
import {
  iosAndroidBothApps,
  iosApps,
  androidApps,
  type IosAndroidApp,
} from "@/content/ios-android/guides";

function AppCard({ app }: { app: IosAndroidApp }) {
  const content = (
    <>
      <h4 className="text-lg font-bold">{app.name}</h4>
      <span className="mt-4 inline-block rounded-md border border-yellow-400/50 px-4 py-1.5 text-xs font-bold text-yellow-400">
        {app.subtitle}
      </span>
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

export default function IosAndroidHubAppsGrid() {
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
            IPTV appar till iPhone &amp; Android
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            Om du har en iOS och Android baserad mobil så kan du använda
            någon utav dessa appar. Dessa appar fungerar alltså till båda.
            Fler appar till iOS och Android baserade mobiler ser du längre
            ned.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {iosAndroidBothApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Rekommenderade appar till iPhone
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            Dessa appar fungerar bäst på iPhone och rekommenderas i följande
            ordning.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {iosApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Rekommenderade appar till Android
          </h3>
          <div className="mx-auto mt-4 flex w-40 items-center justify-center gap-1">
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
            <span className="h-1 w-10 rounded-full bg-yellow-400" />
            <span className="h-0.5 flex-1 rounded-full bg-white/15" />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-white/70">
            Dessa appar fungerar bäst på Android mobiler och rekommenderas i
            följande ordning.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {androidApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
