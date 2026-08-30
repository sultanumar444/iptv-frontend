export type ChromecastStep = {
  step: number;
  title: string;
  /** Sökväg till bakgrundsbild i /public för detta steg. */
  background: string;
  body: string[];
  cta?: {
    label: string;
    href: string;
  };
};

/** Steg-för-steg-guiden på Chromecast-sidan. Lägg till fler steg i ordning här. */
export const chromecastSteps: ChromecastStep[] = [
  {
    step: 1,
    title: "Köp en Chromecast",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Chromecast på någon utav de större kedjorna som exempelvis [Elgiganten](https://www.elgiganten.se/), [Power](https://www.power.se/) eller [Webhallen](https://www.webhallen.com/) alternativt [Satvision](https://satvision.se/). Vi rekommenderar inte att man köper en begagnad chromecast då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Det rekommenderas alltid att man använder en [Apple TV](/installationsguider/apple-tv) eller exempelvis en [Formuler Box](/installationsguider/formuler).",
      "Oavsett om du redan har en chromecast eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i chromecastens lagringsutrymme.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din nya Chromecast IPTV om den är ny. Spara förpackningen då din garanti kan vara knuten till den.",
      "Koppla även upp din nya box till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.",
      "Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din android box tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.",
    ],
  },
  {
    step: 4,
    title: "IPTV - GRATIS TEST",
    background: "/sveirge-banner.webp",
    body: [
      "Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. [Läs mer om vårt utbud här](/vart-paket).",
    ],
    cta: {
      label: "GRATIS TEST",
      href: "/vart-paket",
    },
  },
  {
    step: 6,
    title: "IPTV Chromecast enklare än vad du tror",
    background: "/best-stream.jpg",
    body: [
      "För att komma igång behöver du först konfigurera din Chromecast genom Google Home-appen. Därefter installerar du en kompatibel IPTV-app på din enhet och lägger till din IPTV-leverantörs M3U-länk eller inloggningsuppgifter. När allt är inställt kan du enkelt casta innehållet genom att trycka på cast-ikonen i appen.",
      "Fördelen med att använda Chromecast är att den stödjer högupplöst video och erbjuder stabil streaming. Dessutom kan du multitaska på din enhet medan du tittar, vilket ger en flexibel och användarvänlig upplevelse. Chromecast är ett kostnadseffektivt sätt att förvandla din vanliga TV till en smart TV med full tillgång till IPTV.",
    ],
  },
];
