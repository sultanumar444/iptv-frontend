import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iptv-expert",
  pageTitle: "IPTV Expert Instruktioner",
  pageDescription:
    "IPTV Expert finns i två olika varianter, IPTV Expert Premium och IPTV Expert Lite. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [
    { label: "Apple TV", href: "#tv-steg" },
    { label: "Dator", href: "#dator-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
  ],
  selectorHeading: "IPTV Expert Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IPTV Expert",
  instructionsIntro:
    "IPTV Expert är en väldigt användarvänlig app. Appen är väldigt enkel att komma igång med och påminner till viss del om enkelheten hos appen [IPTV Smarters Pro](https://sverigeiptv.com/iptv-smarters-instruktioner/). IPTV Expert tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: [
    "M3U länk",
    "Xtream Codes Playlist (inloggningsuppgifter)",
    "MAG/Stalker Portal",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes. (Alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned från Playbutiken. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus. APK filen från IPTV Extreme´s egna hemsida verkar inte finnas tillgänglig längre.",
    downloadLabel: "Ladda ned IPTV Expert här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Apple TV",
        body: [
          "IPTV Expert på Apple TV är en avancerad applikation för Apple TV som gör det möjligt att streama IPTV-kanaler direkt på din TV med högsta kvalitet. Den är speciellt utformad för att fungera sömlöst på Apple TV-plattformen och erbjuder en intuitiv användarupplevelse, perfekt anpassad för större skärmar. Med IPTV Expert kan du enkelt importera M3U-spellistor, vilket ger tillgång till ett stort utbud av live-TV, filmer och serier. Appen stöder även EPG (elektronisk programguide), vilket gör det enkelt att få en tydlig översikt över vad som sänds på olika kanaler.",
          "Appen erbjuder stöd för HD- och 4K-upplösning, vilket gör att du kan njuta av innehåll med fantastisk skärpa och detaljrikedom. IPTV Expert på Apple TV har en smidig navigering och lättanvända funktioner som låter dig snabbt byta mellan kanaler, bläddra i spellistor och anpassa dina visningsinställningar för bästa möjliga upplevelse. Appen stöder också flera format och ger möjlighet att välja mellan olika videospelare, vilket innebär att du kan anpassa din visningsupplevelse efter dina behov och preferenser.",
          "Sammanfattningsvis är IPTV Expert på Apple TV en pålitlig och flexibel lösning för alla som vill njuta av IPTV-innehåll på en större skärm med högsta möjliga kvalitet och komfort. Har man dock tillgång till en Apple TV så rekommenderas istället appen IPTVX.",
        ],
        specsImage: "/installation/iptv-expert-appletv.png",
        specs: [
          { label: "App", value: "IPTV Expert" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "299kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "tv-steg",
        stepsHeading: "Instruktioner för Apple TV",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/iptv-expert-steg-1.png",
            body: 'Starta appen och tryck på/välj "Add profile".',
          },
          {
            step: 2,
            image: "/installation/iptv-expert-steg-2.png",
            body: 'Välj "Xtream Codes" som är mitten alternativet på bilden nedan. I fältet "Name" fyller du i "sverigeiptv.com". På "Server" fyller du i din Portal URL som du får från oss vid gratis test eller köp. Tryck sedan på knappen "Add profile".',
          },
          {
            step: 3,
            image: "/installation/iptv-expert-steg-3.png",
            body: "Klart! Köp premium versionen för bästa upplevelse.",
          },
        ],
      },
      {
        heading: "Dator",
        body: "IPTV Expert på Dator är en kraftfull och användarvänlig applikation för datorer som låter dig streama IPTV-kanaler på ett enkelt och smidigt sätt. Med sitt användarvänliga gränssnitt ger den en intuitiv upplevelse för både nybörjare och erfarna användare. Du kan enkelt importera M3U-spellistor och använda EPG (elektronisk programguide) för att få en strukturerad översikt av tillgängliga kanaler och program. IPTV Expert stöder en mängd olika videoformat och levererar högupplöst streaming, vilket gör den idealisk för dig som vill se på live-TV, filmer och serier med bästa möjliga bildkvalitet. Appen är optimerad för både Windows och macOS, och den ger dig möjligheten att anpassa inställningar för att optimera din streamingupplevelse. Dess stöd för flera spellistor och enkel hantering av innehåll gör den till ett utmärkt val för IPTV-entusiaster som vill ha full kontroll över sitt medieinnehåll på datorn.",
        specsImage: "/installation/iptv-expert-appletv.png",
        specs: [
          { label: "App", value: "IPTV Expert" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "129kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "dator-steg",
        stepsHeading: "Instruktioner för Dator",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/iptv-expert-dator-steg-1.png",
            body: 'Starta appen. Välj "Xtream Codes" som är mitten alternativet på bilden nedan. I fältet "Name" fyller du i "sverigeiptv.com". På "Server" fyller du i din Portal URL som du får från oss vid gratis test eller köp. Tryck sedan på knappen "Add profile".',
          },
          {
            step: 2,
            image: "/installation/iptv-expert-dator-steg-2.png",
            body: "Klart! Köp premium versionen för bästa upplevelse.",
          },
          {
            step: 3,
            image: "/installation/iptv-expert-dator-steg-3.png",
            body: "I menyn kan du uppdatera och ladda om din EPG och spellista.",
          },
        ],
      },
    ],
  },
  mobileSection: {
    id: "mobil-instruktioner",
    devices: [
      {
        heading: "Mobil",
        body: "IPTV Expert med Mobilen är en mobilapp som gör det enkelt att streama IPTV-kanaler direkt på din smartphone eller surfplatta. Appen är utformad för användare som vill ha en smidig och användarvänlig upplevelse när de tittar på live-TV, filmer och serier via IPTV. Den stöder både M3U-listor och EPG (elektronisk programguide), vilket ger en organiserad och lättöverskådlig översikt över kanaler och program. Med appen kan du enkelt importera och hantera flera spellistor. Den erbjuder stöd för högupplösta sändningar och anpassningsbara inställningar för bästa visningsupplevelse. Appen har också ett rent och intuitivt gränssnitt, vilket gör det enkelt även för nya användare att snabbt komma igång. Den är kompatibel med både Android och iOS och har stöd för flera videoformat, vilket gör den till ett kraftfullt verktyg för alla som använder IPTV-tjänster. Vi rekommenderar appen [IPTVX](https://sverigeiptv.com/iptvx-instruktioner/).",
      },
      {
        heading: "Surfplatta",
        body: "IPTV Expert med Surfplatta är en mångsidig app för surfplattor som ger dig tillgång till IPTV-kanaler på ett smidigt och effektivt sätt. Appen är designad för att fungera optimalt på större skärmar, vilket gör den idealisk för surfplattor, där du kan njuta av live-TV, filmer och serier med kristallklar bild. Den stöder M3U-listor och EPG (elektronisk programguide), så att du enkelt kan hantera och organisera dina favoritkanaler. Med stöd för både HD- och 4K-streaming ger appen en förstklassig visuell upplevelse, samtidigt som dess användarvänliga gränssnitt gör det enkelt att navigera mellan kanaler och innehåll. Du kan också importera flera spellistor, justera streamingkvaliteten och välja olika videospelare för att anpassa upplevelsen efter dina behov. IPTV Expert är kompatibel med både Android- och iOS-surfplattor och erbjuder stöd för flera format, vilket gör den till en flexibel lösning för alla IPTV-användare.",
      },
    ],
    specsImage: "/installation/iptv-expert-appletv.png",
    specsLayout: "stack",
    specs: [
      { label: "App", value: "IPTV Expert" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "299kr" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 2,
    stepsNumberLayout: "side",
    steps: [
      {
        step: 1,
        image: "/installation/iptv-expert-mobil-steg-1.png",
        body: 'Starta appen. Välj "Xtream Codes" som är mitten alternativet på bilden nedan. I fältet "Name" fyller du i "sverigeiptv.com". På "Server" fyller du i din Portal URL som du får från oss vid gratis test eller köp. Tryck sedan på knappen "Add profile".',
      },
      {
        step: 2,
        image: "/installation/iptv-expert-mobil-steg-2.png",
        body: "Klart! Köp premium versionen för bästa upplevelse.",
      },
    ],
  },
  faqSection: {
    heading: "IPTV Expert FAQ",
    items: [
      {
        question: "Hur installerar man IPTV Expert på Smart TV?",
        answer:
          "För tillfället finns inte denna exakta app tillgänglig till Smart TV. Liknande appar med samma eller liknande namn finns tillgängliga. Vänligen se våra andra guider för Smart TV.",
      },
      {
        question: "Är IPTV Expert gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 200kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på IPTV Expert?",
        answer:
          'Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll. Du kan även välja "Subtitles" i menyn längst nere på valfri film/serie.',
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
