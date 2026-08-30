import Link from "next/link";
import { windowsKomIgangApps, type WindowsApp } from "@/content/windows-mac/windows/guides";

function AppCard({ app }: { app: WindowsApp }) {
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

export default function WindowsHubAppsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            IPTV Windows - Kom igång
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {windowsKomIgangApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
