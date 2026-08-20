import Image from "next/image";
import SliderArrows from "./SliderArrows";

const items = [
  { src: "/aquaman.webp", alt: "Aquaman" },
  { src: "/girl.webp", alt: "The Handmaid's Tale" },
  { src: "/jadoo.webp", alt: "Agatha" },
  { src: "/cat.webp", alt: "Puss in Boots" },
  { src: "/princess.webp", alt: "The Crown" },
  { src: "/strong.webp", alt: "Aquaman" },
];

export default function MediaSlider() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Sverige TV – Enkel åtkomst till din underhållning
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-white/70">
        Sverige TV ger dig en smidig plattform för svensk och internationell
        underhållning på kompatibla enheter. Upptäck ett varierat innehåll
        och hitta något som passar din tittarstil, oavsett om du föredrar
        filmer, serier, nyheter eller annat digitalt innehåll.
      </p>

      <p className="mx-auto mt-4 max-w-4xl text-white/70">
        Tjänsten är utformad med fokus på enkel användning och flexibel
        visning. Med tydliga installationsanvisningar och användarstöd blir
        det enklare att komma igång och använda tjänsten på den enhet som
        passar dig bäst.
      </p>

      <div className="relative mt-10">
        <div
          id="media-scroller"
          className="no-scrollbar flex gap-4 overflow-x-auto"
        >
          {items.map((item) => (
            <div
              key={item.src}
              className="aspect-2/3 w-[45%] shrink-0 snap-start overflow-hidden rounded-xl bg-white/10 sm:w-[30%] lg:w-[18%]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <SliderArrows />
      </div>
    </section>
  );
}
