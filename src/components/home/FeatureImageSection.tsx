import Image from "next/image";
import Link from "next/link";

export default function FeatureImageSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-lime-400/40">
        <Image
          src="/iptvsvsport.webp"
          alt="Svensk och internationell underhållning"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Svensk och internationell underhållning på ett ställe
        </h2>

        <p className="mt-6 text-white/70">
          Få tillgång till varierad digital underhållning på kompatibla
          enheter. Välj bland filmer, serier, sport och annat innehåll som
          passar olika tittarintressen och behov.
        </p>

        <p className="mt-4 text-white/70">
          Med enkel installation och tydlig användarinformation blir det
          smidigt att komma igång. Läs mer om våra{" "}
          <Link
            href="/vart-paket"
            className="font-semibold text-sky-400 hover:underline"
          >
            tjänster
          </Link>{" "}
          och välj den lösning som passar dina enheter och tittarvanor.
        </p>
      </div>
    </section>
  );
}
