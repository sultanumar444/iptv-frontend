import type { WindowsMacStep } from "@/content/windows-mac/steps";

/** Steg-för-steg-guiden på Mac-sidan. Lägg till fler steg i ordning här. */
export const macSteps: WindowsMacStep[] = [
  {
    step: 1,
    title: "IPTV Mac app",
    background: "/iptvsvsport.webp",
    body: [
      "Köp en Mac dator på någon utav de större kedjorna som exempelvis Elgiganten, Power eller Webhallen. Vi rekommenderar inte att man köper en begagnad mac dator då man aldrig vet hur den tidigare använts. En begagnad enhet kan ha missbrukats och då kan viktiga komponenter som exempelvis hårddisk, processor eller RAM-minne tagit stryk. Dessutom så är en dator egentligen inte gjord för att hantera stora IPTV spellistor som kan ha flera hundra tusen titlar. Därför rekommenderas det att man helst använder en Apple TV eller exempelvis en Formuler Box.",
      "Oavsett om du redan har en dator eller om du köper en ny så kan det vara bra att ta bort onödiga appar som inte används då de tar upp plats i datorns lagringsutrymme.",
    ],
  },
  {
    step: 2,
    title: "Grundinställningar",
    background: "/installation/iptv-app-mac-dator.png",
    body: [
      "Genomför grundinställningarna och acceptera eventuella villkor på din Mac-dator om den är ny. Logga sedan in eller skapa ett Apple ID för att få tillgång till alla nödvändiga tjänster och appar. Installera de IPTV-program du behöver för mac IPTV. Kom ihåg att spara eventuell dokumentation och förpackning, då garantin för din Mac ofta är kopplad till dessa.",
      "Koppla även upp din Mac iptv till nätverket. Det rekommenderas alltid att använda en Ethernet-kabel (nätverkssladd) för bästa prestanda och stabilitet, men det fungerar också bra med WiFi om din router är tillräckligt nära och ger en stark signal. För att säkerställa en jämn IPTV-upplevelse, se till att din router ger tillräcklig täckning och hastighet i hela hemmet.",
      "Om stora föremål som väggar, möbler eller dörrar blockerar signalen kan din Mac-enhet få försämrad anslutning, vilket kan påverka IPTV-streamingen. Därför är det bäst att använda en nätverkskabel direkt mellan din Mac och routern för att undvika avbrott och optimera din IPTV-anslutning.",
      "För att komma igång med IPTV på din Mac-dator behöver du först välja en pålitlig IPTV-leverantör som erbjuder bra innehåll och stabil streaming. Dessutom bör du kontrollera att leverantören har stöd för de appar och program du planerar att använda. Många IPTV-leverantörer erbjuder M3U-listor som kan importeras till olika IPTV-spelare.",
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
    title: "Varför Välja MAC för IPTV?",
    background: "/best-stream.jpg",
    body: [
      "Först och främst erbjuder macOS operativsystem en kombination av stabilitet och användarvänlighet, vilket gör det till en utmärkt plattform för IPTV-tjänster. Mac-användare har tillgång till ett brett urval av program och appar som är utformade för att fungera smidigt med macOS. Populära IPTV-appar som IPTV Smarters och GSE Smart IPTV fungerar sömlöst på Mac, vilket ger användarna möjlighet att anpassa sin streamingupplevelse och välja den lösning som bäst passar deras behov. Vidare är det också möjligt att installera dedikerade IPTV-spelare, vilket ger fler anpassningsmöjligheter och en bättre streamingupplevelse.",
      "En annan fördel med att använda Mac för IPTV är att macOS regelbundet får uppdateringar som förbättrar både prestandan och säkerheten. Detta innebär att du alltid kan räkna med en smidig och säker IPTV-upplevelse, utan störningar eller risker. Dessutom erbjuder Mac en flexibel miljö där du enkelt kan hantera andra uppgifter medan du streamar, vilket gör det till ett idealiskt val för både arbete och nöje.",
    ],
  },
];
