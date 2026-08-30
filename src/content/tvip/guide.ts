import type { AppleTvAppGuide } from "@/content/apple-tv/apps/types";

const guide: AppleTvAppGuide = {
  slug: "tvip-s-box",
  pageTitle: "IPTV TVIP Instruktioner",
  pageDescription:
    "IPTV TVIP Instruktioner till all TVIP boxar finns här. Boxen finns i många olika modeller men de tre vanligaste är TVIP 705, TVIP 605 och TV IP 415. Alla modeller är riktigt bra för att se på IPTV med.",
  deviceTabs: [
    { label: "TVIP 705", href: "#tvip-705-steg" },
    { label: "TVIP 605", href: "#tvip-705-steg" },
    { label: "Övriga TVIP boxar", href: "#tvip-705-steg" },
  ],
  selectorHeading: "IPTV TVIP Instruktioner för just din box",
  instructionsHeading: "Instruktioner för TVIP boxar",
  instructionsIntro:
    "TVIP boxen är en utav de mest avancerade IPTV boxarna på marknaden idag. Den dessutom relativt enkel att komma igång med. Boxen tillåter dig att installera dina kanaler via boxens portal inställningar.",
  uploadMethods: [],
  instructionsBody: [
    "Det rekommenderas i vanliga fall att man laddar upp sin IPTV spellista med Xtream Codes API (alltså med sitt användarnam, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Detta behöver du dock inte tänka på med din TVIP box. Med våra TVIP instruktioner kommer du enkelt igång med dina nya box.",
  ],
  instructionsImage: "/installation/tvip-instruktioner-tvip-705-box.png",
  instructionsImagePosition: "right",
  variantSections: [
    {
      heading: "TVIP 705",
      body: "TVIP Instruktioner. TVIP 705 är en populär IPTV-box känd för sin pålitliga prestanda och användarvänlighet. Den erbjuder en smidig och stabil upplevelse för att strömma TV-kanaler och on-demand-innehåll via internet. Boxen är kompatibel med olika IPTV-tjänster och har stöd för både högupplösta (HD) och ultra-högupplösta (4K) videoströmmar, vilket gör den till ett utmärkt val för de som vill njuta av högkvalitativ bild på sina TV-apparater. En av de stora fördelarna med TVIP 705 är dess enkla installation och intuitiva användargränssnitt. Den levereras med en fjärrkontroll som gör det enkelt att navigera mellan olika appar och innehåll. Med stöd för både trådbundet (Ethernet) och trådlöst (Wi-Fi) internet, erbjuder den flexibilitet beroende på användarens nätverksinställningar. Boxen är även utrustad med en kraftfull processor, vilket gör att den kan hantera flera applikationer samtidigt utan förseningar. TVIP 705 har också stöd för populära format som MPEG-2, MPEG-4, H.264 och H.265, vilket säkerställer att den kan spela upp ett brett utbud av mediefiler utan problem. Sammanfattningsvis är TVIP 705 en pålitlig och mångsidig IPTV-box som passar både nybörjare och erfarna användare som vill ha en enkel och stabil lösning för att strömma sina favoritkanaler och filmer. Förutom TVIP boxarna så rekommenderar via även [IPTV Nvidia Shield](/installationsguider/nvidia-shield), [IPTV Apple TV](/installationsguider/apple-tv), [IPTV Formuler Box](/installationsguider/formuler).",
      image: "/installation/tvip-instruktioner-tvip-705-box.png",
      imagePosition: "left",
    },
    {
      heading: "TVIP 605",
      body: "Den föregående modellen TVIP 605, är en kompakt och prisvärd IPTV-box som erbjuder en pålitlig streamingupplevelse för TV-kanaler och on-demand-innehåll via internet. Boxen har stöd för HD-upplösning och erbjuder enkel installation med ett användarvänligt gränssnitt. Med stöd för både trådbundet Ethernet och Wi-Fi-anslutning, ger den flexibilitet beroende på användarens nätverksförhållanden. TVIP 605 är utrustad med en effektiv processor som möjliggör snabb navigering och stabil prestanda. Den har också stöd för populära videoformat som MPEG-4 och H.264, vilket gör den till ett bra val för de som söker en smidig IPTV-lösning till ett överkomligt pris.",
      image: "/installation/tvip-605-4k-iptv-box.png",
      imagePosition: "right",
    },
  ],
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Övriga TVIP boxar",
        body: "TVIP Instruktioner för alla TVIP boxar. Alla TVIP boxar är likadana när det kommer till installationen. Oavsett om du har en äldre eller senare modell så är installationsprocessen snarlik om inte exakt likadan.",
      },
      {
        heading: "TVIP 605 Instruktioner",
        body: "TVIP Instruktioner för boxen 605. TVIP 605 är den föregående modellen som var väldigt populär i flera år. 605:an var den box som gjorde TVIP så pass kända som de blev. Installationsprocessen på denna box är likandan som på de andra TVIP boxarna i samma serie. Denna box installeras på följande sätt.",
      },
      {
        heading: "TVIP 705 Instruktioner",
        body: "TVIP instruktioner för TVIP 705. Denna box är den senare varianten i deras utbud. Boxen är relativt enkel att komma igång med och håller samma kvalite som de andra boxarna med något bättre funktioner. En uppsättning som håller samma kvalite som TVIP 705 är appen [IPTVX med Apple TV](/installationsguider/apple-tv/iptvx).",
        specsImage: "/installation/tvip-605-4k-iptv-box.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "Ingen app behövs" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "Ca 1500 kr" },
          { label: "Stabilitet", value: "5/5" },
        ],
        stepsId: "tvip-705-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 5,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/tvip-705-instruktioner-steg-1.jpeg",
            body: "Har du köpt en begagnad box eller ska installera om kanalerna så bör du först genomföra en fabriksåterställning (se hur på steg 5). Ställ in boxens språk och tidzon och koppla den till ditt nätverk (helst med nätverkskabel).",
          },
          {
            step: 2,
            image: "/installation/tvip-705-instruktioner-steg-2.jpeg",
            body: 'Se till så att följande text och inställningar är inlagda i din box (se bild), förutom "MPEG-TS buffer", där väljer du 5000 ms istället för No.',
          },
          {
            step: 3,
            image: "/installation/tvip-705-instruktioner-steg-3.png",
            body: 'På fliken "Content Source" eller "Innehållskälla" så väljer du "Web-Portal" och fyll därefter i Portal URL (som du får av oss efter köp). Se även till så att resten utav dina inställningar ser ut som på bilden. När du fyllt i allt trycker du på "Apply" och startar om boxen. OBS! Dubbelkolla så att du fyller i allt korrekt!',
          },
          {
            step: 4,
            image: "/installation/tvip-705-instruktioner-steg-4.jpg",
            body: "Undertexter. Nu har du slutfört alla steg och kan behöva aktivera dina undertexter (subtitles). För att göra det väljer du förstoringsglaset på din fjärr när du är inne på en valfri kanal, sedan dyker olika alternativ upp där du kan aktivera undertexter på ditt språk. Finns inga alternativ så finns tyvärr inte undertexter för den kanalen/titeln.",
          },
          {
            step: 5,
            image: "/installation/tvip-705-instruktioner-steg-5.png",
            body: "Fabriksåterställning. Här ser du hur man gör en fabriksåterställning på din TVIP box. Tryck på följande knappar i ordning: S.INFO, 4, 9, S.INFO. Du bör efter några sekunder se att boxen påbörjar en fabriksåterställning.",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "TVIP Box FAQ",
    items: [
      {
        question: "Hur installerar man IPTV på en TVIP box?",
        answer:
          "För att installera sina kanaler på en TVIP box så behöver man en Portal URL/Server Adress. Denna får du utav oss när du begär ett gratis test och anger att du vill prova vår tjänst med en TVIP box.",
      },
      {
        question: "Var köper man boxen?",
        answer:
          "Boxen finns att köpa på [www.iptv-box.se](https://www.iptv-box.se).",
      },
      {
        question: "Hur får man undertexter på sin TVIP box?",
        answer:
          "Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll.",
      },
      {
        question: "Behöver jag ladda ned någon app?",
        answer: "Nej det behövs inte.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
