export type WindowsMacStep = {
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

/** Steg-för-steg-guiden på Windows/Mac-sidan. Lägg till fler steg i ordning här. */
export const windowsMacSteps: WindowsMacStep[] = [
  {
    step: 1,
    title: "Köp en dator - IPTV på datorn",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en dator på någon utav de större kedjorna som exempelvis [Elgiganten](https://www.elgiganten.se/), [Power](https://www.power.se/) eller [Webhallen](https://www.webhallen.com/). Vi rekommenderar inte att man köper en begagnad dator då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en dator egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en [Apple TV](/installationsguider/apple-tv) eller exempelvis en [Formuler Box](/installationsguider/formuler). Låt dig dock inte bli avskräckt utav detta. En dator kommer alltid att fungera med IPTV men vill du få den bästa upplevelsen så är det givetvis en TV och Box som gäller.",
      "Oavsett om du redan har en dator eller om du köper en ny så kan det vara bra att ta bort onödiga appar och program som inte används då de tar upp plats i lagringsutrymmet och även RAM minnet ibland om programmet körs i bakgrunden.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din nya dator (om den är ny). Logga sedan in eller skapa ett google eller icloud konto på datorn beroende på om det är en MAC eller Windows baserad dator. Installera nödvändiga appar/program och spara förpackningen då din garanti kan vara knuten till den.",
      "Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.",
      "Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din dator tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.",
    ],
  },
  {
    step: 4,
    title: "IPTV med datorn - Provperiod",
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
    title: "IPTV dator är enklare än vad du tror",
    background: "/best-stream.jpg",
    body: [
      "Att använda IPTV på en dator är ett populärt och enkelt sätt att få tillgång till ett stort utbud av kanaler, filmer och serier via internet. För att komma igång behöver du en stabil internetuppkoppling och en IPTV-spelare som kan hantera de strömmar som din IPTV-leverantör erbjuder. Några av de vanligaste IPTV-spelarna för dator inkluderar VLC Media Player, Kodi och MyIPTV Player.",
      "Processen för att använda IPTV på en dator är enkel. Först måste du ladda ner och installera en IPTV-spelare. Efter installationen behöver du IPTV-leverantörens M3U-länk eller en fil med dina kanaluppgifter. Denna länk eller fil laddas sedan in i spelaren, vilket ger dig tillgång till IPTV-tjänsten.",
      "VLC Media Player är en av de enklaste och mest använda IPTV-spelarna för datorer. Det är gratis och stödjer en mängd olika filformat. Om du söker en mer anpassningsbar lösning med tillägg och extra funktioner kan Kodi vara ett bra alternativ. MyIPTV Player, tillgänglig för Windows, erbjuder också en enkel och ren användarupplevelse.",
      "Med IPTV på din dator kan du enkelt streama live-TV, on-demand-filmer och serier, vilket ger en flexibel lösning för underhållning på din skärm.",
    ],
  },
];
