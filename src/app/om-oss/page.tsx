import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Om oss",
  description:
    "Läs mer om Sverige TV – en modern IPTV-plattform för enkel, flexibel streaming på alla dina enheter.",
  path: "/om-oss",
});

export default function OmOssPage() {
  return (
    <>
      <PageTitleBar title="Om oss" path="/om-oss" />

      <div className="mx-auto max-w-7xl px-6 py-16 text-white/80">
        <p className="font-bold">Senast uppdaterad: 11 juni 2026</p>

        <p className="mt-6">
          Välkommen till <span className="font-bold text-white">Sverige TV</span> – en
          modern IPTV-plattform skapad för användare som vill njuta av
          digital TV på ett enkelt, smidigt och flexibelt sätt. Vårt mål är
          att erbjuda en bekväm streamingupplevelse med tillgång till ett
          brett utbud av underhållning, inklusive TV-kanaler, filmer,
          serier, sport och innehåll på begäran via en stabil
          internetanslutning.
        </p>

        <p className="mt-6">
          På <span className="font-bold text-white">Sverige TV</span> anser vi att
          modern television ska vara tillgänglig när som helst och var som
          helst. Därför är våra IPTV-lösningar kompatibla med flera typer av
          enheter, såsom Smart TV, Android TV, smartphones, surfplattor,
          datorer, iPhone, Apple TV och andra enheter som stödjer
          IPTV-applikationer.
        </p>

        <p className="mt-6">
          Vi erbjuder användarvänliga IPTV-paket, enkel aktivering av
          tjänster, tillgång till omfattande underhållningsinnehåll samt
          vägledning för installation och grundläggande teknisk hjälp. Vårt
          fokus är att göra hela processen – från att välja rätt abonnemang
          till att börja streama – så enkel och bekymmersfri som möjligt.
        </p>

        <p className="mt-6">
          Vår vision hos <span className="font-bold text-white">Sverige TV</span> är
          att erbjuda ett modernt alternativ till traditionell TV genom att
          kombinera flexibilitet, enkel användning och en kundorienterad
          service. Vi strävar efter att ge våra kunder tydlig information,
          snabb support och en positiv upplevelse före, under och efter
          aktivering av tjänsten.
        </p>

        <p className="mt-6">
          Vi arbetar kontinuerligt med att förbättra våra tjänster,
          användarupplevelsen och den information vi tillhandahåller för
          att säkerställa en smidig IPTV-upplevelse. Oavsett om du tittar
          hemma, reser eller använder en annan kompatibel enhet vill vi ge
          dig friheten att njuta av ditt favoritinnehåll utan
          begränsningar.
        </p>

        <p className="mt-6">
          Om du har frågor om våra tjänster, abonnemang eller behöver hjälp
          med installation och konfiguration är du alltid välkommen att
          kontakta vårt supportteam.
        </p>

        <p className="mt-6 font-bold text-white">E-post:</p>
        <a
          href="mailto:supporten@sverigeiptv.net"
          className="text-sky-400 hover:underline"
        >
          supporten@sverigeiptv.net
        </a>
      </div>
    </>
  );
}
