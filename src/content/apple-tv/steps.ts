export type AppleTvStep = {
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

/** Steg-för-steg-guiden på Apple TV-sidan. Lägg till fler steg i ordning här. */
export const appleTvSteps: AppleTvStep[] = [
  {
    step: 1,
    title: "IPTV med Apple TV Box",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Apple TV box på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad Apple TV Box då man aldrig kan veta hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Den föregående ägaren kan även ha tappat enheten eller låtit den samla på sig en massa damm som sugits in i enheten. I värsta fall kan interna delar sluta fungera pga syrebrist & värme av allt damm.",
      "Det är viktigt att du köper en Apple TV 5 även om Apple TV 4 eller 4K också fungerar. IPTV med Apple TV 3 fungerar dessvärre inte då nedladdning utav de appar som krävs på en Apple TV 3 inte är möjligt. Även IPTV med TVIP box är ett bra sätt att se på IPTV.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar till Apple TV",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din nya Apple TV. Logga även in på iCloud och installera nödvändiga appar. Spara förpackningen då din garanti kan vara knuten till den.",
      "Koppla även upp din nya enhet till ditt nätverk. Det rekommenderas alltid att man använder en Ethernet kabel (nätverkssladd) men det fungerar även bra med Wifi förutsatt att din router inte är för långt bort samt att det är en bra router som ger en god täckning utav nätverket i hemmet.",
      "Om stora saker såsom kylskåp, garderober, dörrar och annat står i vägen så kan din Apple TV tappa eller få försämrad anslutning emellanåt. Ta därför det säkra före det osäkra och använd en nätverkskabel mellan enheten och routern.",
    ],
  },
  {
    step: 4,
    title: "Testa IPTV på Apple TV",
    background: "/sveirge-banner.webp",
    body: [
      "Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen nedan. Vi rekommenderar alltid att man köper 3 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Vi erbjuder i princip all sport, alla filmer samt alla serier och dokumentärer du kan tänka dig. Givetvis ingår hela utbudet även när du testar vår tjänst kostnadsfritt.",
      "När du börjar med en längre period så har du möjligheten att hinna se många olika event som visas oavsett om du är sportintresserad eller inte. Givetvis ingår alla filmer, serier och dokumentärer du kan tänka dig. När du testat vårt IPTV-paket kommer du med stor sannolikhet att säga upp dina streamingtjänster och eventuellt TV-paket (om du har ett från exempelvis Telia, Tele2 osv).",
    ],
    cta: {
      label: "Gratis test",
      href: "/vart-paket",
    },
  },
];
