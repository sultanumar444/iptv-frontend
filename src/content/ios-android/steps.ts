export type IosAndroidStep = {
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

/** Steg-för-steg-guiden på iOS/Android-sidan. Lägg till fler steg i ordning här. */
export const iosAndroidSteps: IosAndroidStep[] = [
  {
    step: 1,
    title: "IPTV på mobilen",
    background: "/iptvsvsport.webp",
    body: [
      "Med IPTV på Mobilen får du ett utav de bästa sätten att se på IPTV. IPTV med mobilen innebär att du kan ha med dig alla dina kanaler i fickan så länge du har en internet anslutning. Apparna kan med andra ord ersätta dina dyra streamingtjänster då du har allt i mobilen på resande fot. Självklart fungerar våra kanaler i alla länder runtom i världen. Vill du spara pengar kan du säga upp dina streamingtjänster då du inte kommer att behöva de efter att du börjat se på [ip-tv](https://sverigeiptv.com/) i din mobiltelefon.",
    ],
  },
  {
    step: 2,
    title: "IPTV med surfplatta",
    background: "/ptb.webp",
    body: [
      "IPTV med Surfplatta – Genomför grundinställningarna och acceptera eventuella villkor på din nya mobil eller surfplatta om den är ny. Logga sedan in eller skapa ett Google konto eller iCloud konto beroende på om din enhet har ett iOS eller Android baserat system. Spara förpackningen då din garanti kan vara knuten till den.",
      "Koppla även upp din nya enhet till ditt nätverk (du kan givetvis använda din mobil surf också men se då till så att den inte tar slut om den är begränsad). Det rekommenderas alltid att man använder en Ethernet kabel/nätverkssladd (dock fungerar det ju givetvis inte i ditt fall) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet. När du sedan är på resande fot så fungerar 4G och 5G utmärkt.",
      "Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din enhet tappa eller få försämrad anslutning emellanåt.",
      "Vi rekommenderar följande Smartphones för IPTV även om i princip alla smarta mobiltelefoner fungerar: iPhone (X – 15 PRO), Samsung (senare Galaxy-modeller), Samsung (Z Fold eller Flip).",
      "Har du inte någon utav dessa modeller så kan du vara lugn! Detta är endast en rekommendation, egentligen ska man givetvis se på IPTV med en box kopplad till sin TV hemma för att uppleva det på bästa sätt.",
    ],
  },
  {
    step: 3,
    title: "IPTV med iPhone",
    background: "/sveirge-banner.webp",
    body: [
      "Vi rekommenderar att man köper en ny iPhone-modell från någon utav de större kedjorna som exempelvis [Elgiganten](https://www.elgiganten.se/), [Power](https://www.power.se/) eller [Webhallen](https://www.webhallen.com/). Givetvis kan du använda den du redan har. Vi rekommenderar inte att man köper en begagnad mobil eller surfplatta då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk.",
      "Om din enhet ska användas för att se på IPTV när du reser eller bara är utanför hemmet så är detta en utmärkt lösning för dig. Tänker du däremot att din mobila enhet ska ersätta en box eller TV så rekommenderas det istället att man helst använder en Apple TV eller exempelvis en Formuler Box.",
      "Oavsett om du redan har en iPhone-enhet eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i enhetens lagringsutrymme och RAM-minne då många appar är påslagna i bakgrunden.",
    ],
  },
  {
    step: 4,
    title: "IPTV med Android",
    background: "/best-stream.jpg",
    body: [
      "Vi rekommenderar att man köper en ny Android-modell från någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Givetvis kan du använda den du redan har. Vi rekommenderar inte att man köper en begagnad mobil eller surfplatta då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk.",
      "Om din enhet ska användas för att se på IPTV när du reser eller bara är utanför hemmet så är detta en utmärkt lösning för dig. Tänker du däremot att din mobila enhet ska ersätta en box eller TV så rekommenderas det istället att man helst använder en Apple TV eller exempelvis en Formuler Box.",
      "Oavsett om du redan har en Android-enhet eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i enhetens lagringsutrymme och RAM-minne då många appar är påslagna i bakgrunden.",
    ],
  },
  {
    step: 6,
    title: "IPTV med mobilen - GRATIS TEST",
    background: "/girl.webp",
    body: [
      "Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt. Läs mer om vårt utbud här.",
    ],
    cta: {
      label: "GRATIS TEST",
      href: "/vart-paket",
    },
  },
];
