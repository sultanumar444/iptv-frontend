import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iptvx",
  pageTitle: "IPTVX Instruktioner",
  pageDescription:
    "IPTVX gör det möjligt för dig att streama kanaler på din IPTV enhet. Med appen kommer du enkelt igång och får tillgång till alla världens kanaler!",
  deviceTabs: [
    { label: "Apple TV", href: "#tv-steg" },
    { label: "iPhone", href: "#mobil-steg" },
    { label: "iPad", href: "#mobil-steg" },
  ],
  selectorHeading: "IPTVX Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IPTVX",
  instructionsIntro:
    "IPTVX är enligt oss en utav de bästa apparna att se på IPTV med. Den är väldigt enkel att komma igång med och appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: [
    "M3U länk",
    "M3U spellista med user, pass och domän.",
    "Xtream API",
    "Via SMB delning",
    "Mapp via ditt lokala nätverk",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden. Väljer du exempelvis M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
    "Appen är en utav de populäraste IPTV apparna till Apple TV då deras gränssnitt är fantastiskt jämfört med många andra appar i samma kategori. Appen finns endast tillgänglig till Apple enheter.",
  ],
  specsImage: "/installation/iptvx.jpg",
  specs: [
    { label: "App", value: "IPTVX" },
    { label: "Installationstid", value: "Ca 5 min" },
    { label: "Wifi/Kabel", value: "Stöd för båda" },
    { label: "Kostnad", value: "245kr/år" },
    { label: "Erbjuder fritt test", value: "Ja" },
  ],
  specsWarning:
    "Denna app är mycket bra men kan i ytterst få fall lagga på nya Apple TV 5.",
  downloadSection: {
    heading: "IPTVX för Apple TV – ladda ned och kom igång",
    introBeforeDownload:
      "IPTVX är en modern och användarvänlig IPTV-app för Apple TV, iPhone och iPad. Appen laddas ned direkt från App Store och bör aldrig installeras från okända webbplatser eller andra inofficiella källor.",
    downloadLabel: "Ladda ned IPTVX från App Store",
    introAfterDownload: [
      "På Apple TV erbjuder IPTVX ett snabbt och tydligt gränssnitt där du enkelt kan navigera mellan kanaler, filmer, serier och andra kategorier. Den inbyggda sökfunktionen hjälper dig att hitta specifika program, sportevenemang eller kanaler. Om samma evenemang visas på flera kanaler kan du dessutom välja den stream som ger bäst kvalitet.",
      "Installationen tar vanligtvis cirka 5–15 minuter. För bästa möjliga prestanda rekommenderar vi en nyare Apple TV-modell, gott om ledigt lagringsutrymme och en stabil internetanslutning. Vid större kanallistor eller direktsända evenemang ger en nätverkskabel mellan Apple TV och routern ofta en stabilare upplevelse än Wi-Fi.",
      "När appen är installerad behöver du endast lägga till inloggningsuppgifterna från din IPTV-leverantör och låta appen läsa in innehållet. Behöver du hjälp under installationen kan du följa vår installationsguide eller kontakta supporten.",
    ],
  },
  stepSections: [
    {
      id: "tv-steg",
      steps: [
        {
          step: 1,
          image: "/installation/iptvx-steg-1.jpg",
          body: 'Starta appen och välj "Add playlist". Välj sedan alternativ 3 "Xtream API".',
        },
        {
          step: 2,
          image: "/installation/iptvx-steg-2.png",
          body: 'Välj ett namn till din nya spellista. I detta fall valde vi namnet "sverigeiptv.com". Fyll sedan i uppgifterna du fått utav oss på mailen. Tryck sen på "Save".',
        },
        {
          step: 3,
          image: "/installation/iptvx-steg-3.png",
          body: "Tryck nu på din nya lista med hjälp av din fjärrkontroll.",
        },
        {
          step: 4,
          image: "/installation/iptvx-steg-4.jpg",
          body: "Klart! EPG:n syns inte på just denna bild då vi använde ett gratis test när vi skapade guiden.",
        },
      ],
    },
  ],
  mobileSection: {
    id: "mobil-instruktioner",
    devices: [
      {
        heading: "Mobil",
        body: "IPTVX med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP tv i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Om du har en iPhone blir upplevelsen en utav de bästa då appen fungerar otroligt även på mobilen. Se alltid till att ha den senaste versionen av appen nedladdad från appstore.",
      },
      {
        heading: "iPad",
        body: "IPTVX med iPad är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP tv i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har man en iOS (iPad) enhet så fungerar appen perfekt som ett mellanting för TV och mobil. Det bästa av två världar helt enkelt (större skärm på resande fot).",
      },
    ],
    specsImage: "/installation/iptvx-icon.jpg",
    specs: [
      { label: "App", value: "IPTVX" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "245kr/år" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    steps: [
      {
        step: 1,
        image: "/installation/iptvx-mobil-steg-1.png",
        body: 'Starta appen och tryck på de tre sträcken nere i högra hörnet i den röda rutan om menyn på vänster sida inte dyker upp av sig själv. Tryck sedan på "New playlist".',
      },
      {
        step: 2,
        image: "/installation/iptvx-mobil-steg-2.png",
        body: 'Välj "Xtream API".',
      },
      {
        step: 3,
        image: "/installation/iptvx-mobil-steg-3.png",
        body: "Fyll nu i dina inloggningsuppgifter du fått utav oss på mail efter köp eller gratis test.",
      },
      {
        step: 4,
        image: "/installation/iptvx-mobil-steg-4.png",
        body: "Nu laddar appen en stund och sedan är det klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "IPTVX FAQ",
    items: [
      {
        question: "Hur installerar man IPTVX på Apple TV?",
        answer:
          "För att installera appen på din Apple TV, iPhone, iPad eller iPod Touch så börjar du med att ladda ned appen från Appstore. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är IPTVX gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den kostnadsfritt innan man köper den. Sedan kostar den 245kr/år.",
      },
      {
        question: "Hur får man undertexter på IPTVX?",
        answer:
          "Undertexter på appen får du genom att svepa upp på din Apple TV fjärrkontroll när du är inne på en film, serie, dokumentär eller kanal. På mobilen och surfplattan är det samma princip men då petar du på skärmen för att få fram inställningarna när du är inne på en kanal.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "IPTVX Undertexter",
        body: [
          "De flesta titlar har undertexter automatiskt som laddas in tillsammans med kanalerna. Om vissa kanaler inte har undertexter så finns det tyvärr inte. De flesta har dock undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor. Det är dock inget vi erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort.",
        ],
      },
      {
        heading: "IPTVX EPG",
        body: [
          "EPG (Electronic Program Guide) finns tillgänglig på appen. På många appar behöver man manuellt kopiera och klistra in en EPG länk (XML) som du får utav oss vid köp.",
          "Däremot hämtar vissa appar EPG informationen när du loggar in med Xtreamcodes API utan att du manuellt behöver lägga till något. Om din app endast kan ta emot M3U länkar så kommer du med stor sannolikhet att manuellt behöva ladda upp en xml epg länk.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med IPTVX",
    ctaHref: "/vart-paket",
  },
};

export default guide;
