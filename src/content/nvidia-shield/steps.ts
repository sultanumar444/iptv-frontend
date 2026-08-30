export type NvidiaShieldStep = {
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

/** Steg-för-steg-guiden på Nvidia Shield-sidan. Lägg till fler steg i ordning här. */
export const nvidiaShieldSteps: NvidiaShieldStep[] = [
  {
    step: 1,
    title: "Köp en IPTV Nvidia Shield",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Nvidia Shield på någon utav de större kedjorna som exempelvis [Elgiganten](https://www.elgiganten.se/), [Power](https://www.power.se/) eller [Webhallen](https://www.webhallen.com/) alternativt [Satvision](https://satvision.se/). Vi rekommenderar inte att man köper en begagnad iptv nvidia shield då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Det rekommenderas alltid att man använder en Nvidia Shield, TVIP box, [Apple TV](/installationsguider/apple-tv) eller en [Formuler Box](/installationsguider/formuler).",
      "Oavsett om du redan har en Nvidia Shield eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i boxens lagringsutrymme.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din nya Nvidia Shield om den är ny. Spara förpackningen då din garanti kan vara knuten till den.",
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
];
