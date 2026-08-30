import Image from "next/image";

export default function AppleTvHubInstructions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="w-full sm:w-[55%]">
          <h2 className="text-3xl font-bold sm:text-4xl">
            IPTV Apple TV Instruktioner
          </h2>
          <p className="mt-5 text-white/70">
            IPTV med Apple TV Instruktioner ser du här. Apple TV ger en utav
            de bästa IPTV upplevelserna man kan få när det kommer till TV
            tittande. Börja med att ladda ned valfri app. Nedan ser du de
            olika apparna som vi rekommenderar till Apple TV boxar. Klicka på
            valfri app för att läsa hur man kommer igång. Det finns
            naturligtvis även andra appar som fungerar med din enhet men här
            finner du de som vi rekommenderar mest. Vi rekommenderar
            följande IPTV app: iPlayTV eller Perfect IPTV med Apple TV 4 och
            IPTVX eller Perfect IPTV med Apple TV gen 5 (4K) men läs texten
            på denna sida noga först!
          </p>
        </div>

        <div className="relative aspect-[1713/918] w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#05070d] p-4 sm:w-[45%]">
          <div className="relative h-full w-full">
            <Image
              src="/installation/apple-tv-device.png"
              alt="Apple TV box med fjärrkontroll och App Store"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
