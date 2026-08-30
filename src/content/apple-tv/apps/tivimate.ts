import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "tivimate",
  pageTitle: "Tivimate Instruktioner",
  pageDescription:
    "Tivimate gör det möjligt för dig att se IPTV kanaler på din enhet/app. Med appen kommer du enkelt igång med ditt TV-tittande och får tillgång till alla världens kanaler på ett ögonblick, se instruktionerna nedan!",
  deviceTabs: [
    { label: "Smart TV", href: "#instruktioner" },
    { label: "Nvidia Shield", href: "#tivimate-steg" },
    { label: "Android Box", href: "#tivimate-steg" },
    { label: "Formuler Box", href: "#instruktioner" },
    { label: "Xiaomi Mi", href: "#instruktioner" },
  ],
  selectorHeading: "Tivimate Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för Tivimate IPTV Player",
  instructionsIntro:
    "Tivimate finns tillgänglig till Smart TV apparater och Android boxar. Tivimate finns även tillgänglig till andra enheter men den rekommenderas endast på TV och boxar. Med appen kan du ladda upp din spellista på flera olika sätt men vi rekommenderar endast dessa (helst xtreamcodes):",
  uploadMethods: [
    "M3U länk",
    "Xtream Codes API (Användarnamn)",
    "Portal",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden. Väljer du exempelvis M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Appen är en utav de mest nedladdade IPTV apparna de senaste åren efter [IPTV smarters](https://sverigeiptv.com/iptv-smarters-instruktioner/). Tivimate Player finns tillgänglig till vissa Smart TV apparater och Android enheter. Den finns dock inte tillgänglig till Apple enheter av någon anledning.",
  ],
  variantSections: [
    {
      heading: "Tivimate Premium",
      body: "Tivimate Premium är den betalda versionen av appen och rekommenderas starkt om du ska se på IP-TV. Den fungerar mycket bra tillsammans med Android TV och Android Boxar. I och med att man kan installera Tivimate appen men även många andra appar på sin Android TV eller Android Box så är dessa två bra enheter som går att användas för IPTV tittande. I samband med att man använder sin enhet (TV, Box osv) för att se på IPTV så rekommenderar vi dock alltid att man avinstallerar onödiga appar som inte används då de kan ta upp nödvändigt utrymme, samt att man bör ha en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom kanaler, filmer, serier, dokumentärer osv. Vilket innebär att man kan uppleva lagg om man har för många onödiga appar på sin enhet. Instruktioner på hur du genomför installationen finns här. Vanligtvis så tar det ca 5-15 minuter att komma igång när man för första gången försöker att få igång IP-TV kanalerna på sin Android TV eller vilken annan enhet som helst. Skulle man dock fastna och behöva hjälp kan man alltid kontakta vår support.",
    },
    {
      heading: "Tivimate IPTV Player App",
      body: 'Tivimate IPTV Player är en strålande app när det kommer till Smart TV apparater eller boxar som kan ladda ned appar. Den finns även tillgänglig på stickor som exempelvis Xiaomi Mi Stick men stickor rekommenderas överlag inte då de har sämre hårdvara. Det är nu dags för dig att begära ett gratis test genom att trycka på knappen "Prova IPTV gratis!". I det här fallet så rekommenderar vi alltid att man köper 3-6 månader av IPTV efter sitt gratis test för att hinna testa ordentligt då vårt utbud är väldigt väldigt stort. Läs mer om vårt utbud här.',
    },
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned från Playbutiken till din enhet. Appen finns inte tillgänglig till alla Smart TV enheter och boxar. Har du ett Android baserat system är chansen dock stor att denna app finns att ladda ned.",
    downloadLabel: "Ladda ned Tivimate här.",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: "Tivimate på Smart TV fungerar utmärkt. Dock behöver Smart TVn du använder ha ett android baserat system. Appen finns tyvärr inte tillgänglig till vanliga Smart TV enheter.",
      },
      {
        heading: "Nvidia Shield",
        body: "Tivimate med Nvidia Shield fungerar väldigt bra då Nvidia Shield är en Android baserad enhet med bra hårdvara. Det vill säga, bra processor, RAM mine osv. Därav fungerar appen tillsammans med Nvidia Shield väldigt bra. Det rekomenderas starkt att du använder en android baser box.",
      },
      {
        heading: "Android Box",
        body: "Tivimate med Android Box fungerar givetvis bra. Precis som ovan så fungerar appen utmärkt med android baserade enheter där man framförallt föredrar boxar över andra enheter. Köp gärna Premium versionen av appen om du planerar att titta under längre tid.",
        specsImage: "/installation/tivimate.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "Tivimate" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "395kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "tivimate-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/tivimate-steg-1.jpg",
            body: 'Starta appen och välj "Lägg till Spellista".',
          },
          {
            step: 2,
            image: "/installation/tivimate-steg-2.jpg",
            body: "Välj nu typ av spellista. Vi rekommenderar Xtream Codes.",
          },
          {
            step: 3,
            image: "/installation/tivimate-steg-3.jpg",
            body: "På server-adress fyller du i din portal URL du fått från oss i mailen samt ditt användarnamn och lösenord. Låt VOD och TV-kanaler vara ikryssat.",
          },
          {
            step: 4,
            image: "/installation/tivimate-steg-4.jpg",
            body: "sverigeiptv.com kan du välja som namn till din nya spellista.",
          },
          {
            step: 5,
            image: "/installation/tivimate-steg-5.jpg",
            body: "Klart!",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "Tivimate FAQ",
    items: [
      {
        question: "Hur installerar man Tivimate på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan. Notera att din enhet måste vara Android baserad.",
      },
      {
        question: "Är Tivimate gratis?",
        answer:
          "Appen är gratis att ladda ned men du kommer att behöva premium versionen för att den ska fungera smidigt med alla funktioner. Appen kostar ca 400 SEK.",
      },
      {
        question: "Hur får man undertexter på Tivimate?",
        answer:
          "Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll. Dock har många rapporterat att de senare versionerna av appen inte längre stöder undertexter. Därför rekommenderas en annan app.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "Tivimate EPG",
        body: [
          "EPG eller Electronic Program Guide finns tillgänglig på appen. På många appar behöver man manuellt kopiera och klistra in en EPG länk (XML) som du får utav oss vid köp.",
          "Däremot hämtar vissa appar EPG informationen när du loggar in med Xtreamcodes API utan att du manuellt behöver lägga till något. Om din app endast kan ta emot M3U länkar så kommer du med stor sannolikhet att manuellt behöva ladda upp en xml epg länk.",
        ],
      },
      {
        heading: "Tivimate undertexter",
        body: [
          "De flesta titlar har undertexter automatiskt som laddas in tillsammans med kanalerna. Om vissa kanaler inte har undertexter så finns det tyvärr inte. De flesta har dock undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor. Det är dock inget vi erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort.",
        ],
      },
    ],
    ctaLabel: "Prova IPTV med Tivimate",
    ctaHref: "/vart-paket",
  },
};

export default guide;
