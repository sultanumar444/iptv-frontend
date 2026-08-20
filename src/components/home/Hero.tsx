import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
      {/* Text section */}
      <div>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Sverige TV – smidig streaming för svensk underhållning
        </h1>

        <p className="mt-6 text-white/70">
          Upptäck svensk och internationell underhållning på dina
          kompatibla enheter. Njut av en enkel tittarupplevelse med tydlig
          installation, användarstöd och hjälp när du behöver det.
        </p>

        <p className="mt-4 text-white/70">
          Sverige TV är utformat för en smidig och lättförståelig
          streamingupplevelse. Välj en kompatibel enhet, följ vår{" "}
          <Link
            href="/installationsguider"
            className="font-semibold text-sky-400 hover:underline"
          >
            installations guide
          </Link>{" "}
          och få hjälp att komma igång på ett enkelt sätt.
        </p>

        <Link
          href="/vart-paket"
          className="mt-8 inline-block rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Bli Kund
        </Link>
      </div>

      {/* Image section */}
      <div className="overflow-hidden rounded-3xl">
        <Image
          src="/sveirge-banner.webp"
          alt="Sverige TV"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
