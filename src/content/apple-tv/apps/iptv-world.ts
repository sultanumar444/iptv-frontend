import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iptv-world",
  pageTitle: "IPTV World instruktioner",
  pageDescription:
    "IPTV World gör det möjligt för dig att streama kanaler på din IPTV enhet. Med appen kommer du enkelt igång och får tillgång till alla världens kanaler!",
  pageCtaLabel: "GRATIS TEST",
  pageCtaHref: "/vart-paket",
  topStepsSection: {
    heading: "IPTV World Instruktioner",
    columns: 3,
    steps: [
      {
        step: 1,
        image: "/installation/iptv-world-mobil-steg-1.png",
        body: 'Starta appen och tryck på plustecknet i nedra hörnet. Välj sedan "Add Xtream-Codes API Playlist".',
      },
      {
        step: 2,
        image: "/installation/iptv-world-mobil-steg-2.png",
        body: "Fyll i inloggningsuppgifterna du fått via e-post.",
      },
      {
        step: 3,
        image: "/installation/iptv-world-mobil-steg-3.png",
        body: "Tryck nu på din nya spellista. Klart! 🙂",
      },
    ],
  },
  deviceTabs: [
    { label: "Apple TV", href: "#instruktioner" },
    { label: "iPhone", href: "#instruktioner" },
    { label: "Android TV", href: "#instruktioner" },
    { label: "Android Box", href: "#instruktioner" },
    { label: "Smart TV", href: "#instruktioner" },
  ],
  selectorHeading: "IPTV World Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IPTV World",
  instructionsIntro:
    "IPTV World gör det möjligt för dig att streama kanaler på din IPTV enhet. Med appen kommer du enkelt igång och får tillgång till alla världens kanaler!",
  uploadMethods: [],
  instructionsBody: [],
  infoSection: {
    blocks: [
      {
        heading: "World IPTV på Apple TV",
        body: [
          "Appen fungerar bra med Apple TV. I och med att man kan installera World IPTV appen och många andra appar så är Apple TV en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "Instruktioner på hur du genomför installationen finns här. Vanligtvis så tar det ca 5-15 min att komma igång när man för första gången försöker att få igång TV kanalerna på sin Apple TV. Skulle man dock fastna och behöva hjälp kan man alltid kontakta vår support.",
        ],
      },
      {
        heading: "Prova IPTV",
        body: [
          "Nu är det dags för dig att begära ett gratis test utav oss genom att trycka på knappen. Vi rekommenderar alltid att man köper 3-6 månader efter sitt gratis test för att hinna testa ordentligt då vårt utbud är enormt. Läs mer om vårt utbud här.",
          "Observera att våra test endast är aktiva i en timme för att motverka fusk. Begär bara ett gratis test om du verkligen har tid att testa kanalerna i lugn och ro. Testet är inte till för att hinna titta på en fotbollsmatch eller dylikt utan endast för att få en snabb inblick. Här kan du se instruktioner.",
        ],
      },
      {
        heading: "Vilka enheter?",
        body: [
          "IPTV World går att använda på flera enheter. Nedan ser du några exempel.",
          "Är man ute efter den bästa IPTV upplevelsen tittar du mycket på TV så rekommenderas alltid att man köper en box som exempelvis Apple TV eller en TVIP box. Har man dock inte den möjligheten så kan man använda appen på följande enheter.",
          "[Apple TV](https://www.sverigeiptv.com/iptv-apple-tv)",
          "[iPhone](https://www.sverigeiptv.com/iptv-med-mobil-surfplatta)",
          "[Android TV](https://www.sverigeiptv.com/iptv-smart-tv)",
          "[Android Box](https://www.sverigeiptv.com/iptv-box-android)",
          "[Smart TV](https://www.sverigeiptv.com/iptv-smart-tv)",
          "IPTV World fungerar utmärkt på Surfplatta och iOS. Vill man hinna uppleva allt bör man köpa minst en månad då utbudet är enormt.",
          "Tänk på att våra test endast är på en timme så ta vara på testet och planera gärna så att det inte rinner ut i sanden.",
        ],
      },
      {
        heading: "Vanliga funderingar",
        body: [
          "Hur installerar man appen?",
          "Hur får man undertexter?",
          "Vart laddar man ned appen?",
          "Hur får man in EPG?",
          "Hur återställer man appen?",
          "Alla frågor besvaras på vår sida där våra instruktioner finns. Klicka på respektive app/enhet du vill läsa om så finner du svaren på dina frågor där. Här kan du se våra [instruktioner](https://www.sverigeiptv.com/iptv-instruktioner-enheter/).",
          "Läs igenom guiden ordentligt för att undvika problem med installationen då viktiga delar kan missas om man hoppar över viktiga delar.",
        ],
      },
      {
        heading: "4K kvalité väntar...",
        body: [
          "För att sammanfatta allt så rekommenderar vi att man helst köper en nya enhet. Sedan går man igenom grundinställningarna och kopplar upp enheten på nätet. Ladda ned appen och begär ett gratis test eller köp 1-12 mån paket av oss.",
          "Njut av, kanaler, filmer, serier, dokumentärer + alla PPV event!",
          "Olika appar på olika enheter",
          "IPTV med din nya app",
          "Gratis test IPTV",
          "Njut av IPTV!",
        ],
      },
      {
        heading: "IPTV World EPG",
        body: [
          "Den elektroniska Program Guiden (EPG) finns tillgänglig på appen. På många appar behöver man manuellt kopiera och klistra in en EPG länk (XML) som du får utav oss vid köp.",
          "Däremot hämtar vissa appar EPG informationen när du loggar in med Xtreamcodes API utan att du manuellt behöver lägga till något. Om din app endast kan ta emot M3U länkar så kommer du med stor sannolikhet att manuellt behöva ladda upp en xml epg länk.",
        ],
      },
      {
        heading: "Undertexter",
        body: [
          "De flesta titlar har undertexter automatiskt som laddas in tillsammans med kanalerna. Om vissa kanaler inte har undertexter så finns det tyvärr inte. De flesta har dock undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor. Det är dock inget vi erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort.",
        ],
      },
    ],
    ctaLabel: "IPTV Test",
    ctaHref: "/vart-paket",
    layout: "single",
  },
};

export default guide;
