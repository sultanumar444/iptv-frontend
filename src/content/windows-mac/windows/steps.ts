import type { WindowsMacStep } from "@/content/windows-mac/steps";

/** Steg-för-steg-guiden på Windows-sidan. Lägg till fler steg i ordning här. */
export const windowsSteps: WindowsMacStep[] = [
  {
    step: 1,
    title: "IPTV app Windows",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Windows dator på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad windows dator då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en dator egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en Apple TV eller exempelvis en Formuler Box.",
      "Oavsett om du redan har en dator eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i TVns lagringsutrymme.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/ptb.webp",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din Windows-dator om den är ny. Logga sedan in eller skapa ett Microsoft-konto för att få tillgång till alla nödvändiga tjänster och appar. Installera de IPTV-program du behöver, såsom VLC Media Player eller Kodi, som är populära alternativ för IPTV på Windows. Kom ihåg att spara eventuell dokumentation och förpackning, då garantin för din dator ofta är knuten till dessa.",
      "Koppla även upp din dator till nätverket. Det rekommenderas alltid att använda en Ethernet-kabel (nätverkssladd) för bästa prestanda och stabilitet, men det fungerar även bra med WiFi om din router är tillräckligt nära och ger en stark signal. För att säkerställa en jämn IPTV-upplevelse, se till att din router ger tillräcklig täckning och hastighet i hemmet.",
      "Om stora föremål som väggar, möbler eller dörrar blockerar signalen kan din Windows-enhet få försämrad anslutning, vilket kan påverka IPTV-streamingen. Därför är det bäst att använda en nätverkskabel direkt mellan datorn och routern för att undvika avbrott och optimera din IPTV-anslutning.",
      "För att komma igång med IPTV på din Windows-dator behöver du först välja en IPTV-leverantör. Det är viktigt att välja en pålitlig leverantör som erbjuder bra innehåll och stabil streaming. Dessutom bör du kontrollera att leverantören har stöd för de appar och program du planerar att använda. Många IPTV-leverantörer erbjuder M3U-listor, som kan importeras till olika IPTV-spelare, inklusive VLC och Kodi.",
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
    step: 5,
    title: "Varför Välja Windows för IPTV?",
    background: "/best-stream.jpg",
    body: [
      "Först och främst erbjuder Windows operativsystem stabilitet och användarvänlighet. Detta gör det till en idealisk plattform för IPTV-tjänster. Dessutom finns det ett stort urval av program och appar som är designade för Windows, vilket gör att användare kan välja vad som passar deras behov bäst. Populära IPTV-appar som VLC Media Player och Kodi fungerar sömlöst på Windows. Vidare är det också möjligt att installera dedikerade IPTV-spelare som MyIPTV Player och Simple TV, vilka ger bättre streamingalternativ och fler anpassningsmöjligheter.",
      "En annan fördel med att använda Windows är att operativsystemet ofta får uppdateringar som förbättrar prestandan och säkerheten. Därför kan du alltid vara säker på att du får en smidig och säker IPTV-upplevelse, utan avbrott eller osäkerheter. Dessutom har du möjligheten att enkelt hantera andra uppgifter på din dator medan du streamar, vilket skapar en flexibel och produktiv arbetsmiljö.",
    ],
  },
];
