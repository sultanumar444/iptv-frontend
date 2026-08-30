export type SmartTvStep = {
  step: number;
  title: string;
  /** Sökväg till bakgrundsbild i /public för detta steg. */
  background: string;
  /** Ett eller flera stycken brödtext, visas i angiven ordning. */
  body: string[];
  /** Valfri call-to-action-knapp under texten. */
  cta?: {
    label: string;
    href: string;
  };
};

/** Steg-för-steg-guiden på Smart TV-sidan. Lägg till fler steg i ordning här. */
export const smartTvSteps: SmartTvStep[] = [
  {
    step: 1,
    title: "Köp en Smart TV",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Smart TV på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad Smart TV då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en Smart TV egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en Apple TV eller exempelvis en Formuler Box.",
      "Oavsett om du redan har en Smart TV eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i TVns lagringsutrymme.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din nya Smart TV om den är ny. Logga sedan in eller skapa ett LG, Samsung, Philips konto på TVn och installera nödvändiga appar. Spara förpackningen då din garanti kan vara knuten till den.",
      "Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.",
      "Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din Smart TV tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.",
    ],
  },
  {
    step: 4,
    title: "IPTV - GRATIS TEST",
    background: "/sveirge-banner.webp",
    body: [
      "Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. Läs mer om vårt utbud här.",
    ],
    cta: {
      label: "GRATIS TEST",
      href: "/vart-paket",
    },
  },
];
