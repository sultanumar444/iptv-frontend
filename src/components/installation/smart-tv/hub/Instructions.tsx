import Image from "next/image";

export default function SmartTvHubInstructions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="w-full sm:w-[55%]">
          <h2 className="text-3xl font-bold sm:text-4xl">
            IPTV Smart TV Instruktioner
          </h2>
          <p className="mt-5 text-white/70">
            IPTV med Smart TV – Här ser du hur man kommer igång med sin
            Smart TV! Detta är en utav de smidigaste sätten att se på IPTV.
            Även om det in många fall ger en bra upplevelse så rekommenderas
            det alltid att man använder en IPTV box. Börja med att ladda ned
            valfri app. Nedan ser du de olika apparna som vi rekommenderar
            till Smart TV. Klicka på valfri app för att läsa hur man kommer
            igång. Det finns naturligtvis även andra appar som fungerar med
            din enhet men här finner du de som vi rekommenderar mest.
          </p>
          <p className="mt-5 text-white/70">
            IPTV Smarters är enklast att komma igång med men Tivimate är
            bäst på Smart TV.
          </p>
        </div>

        <div className="relative aspect-[433/300] w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#05070d] p-4 sm:w-[45%]">
          <div className="relative h-full w-full">
            <Image
              src="/installation/smart-tv.webp"
              alt="Smart TV"
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
