import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "xtream-iptv",
  pageTitle: "Xtream IPTV Instruktioner",
  pageDescription:
    "Xtream IPTV instruktioner finns tillgänglig till iOS och Android enheter. Appen kan användas för att se på IPTV på Mobiler, Surfplattor, Smart TV apparater och på Apple TV.",
  deviceTabs: [
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Apple TV", href: "#tv-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
    { label: "Smart TV", href: "#tv-steg" },
  ],
  selectorHeading: "Xtream IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för Xtream IPTV",
  instructionsIntro:
    "Xtream IPTV instruktioner ser du här. Appen är relativt ny och fungerar bra för att se på IPTV. Den är även väldigt enkel att komma igång med. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtream Codes API (User & Pass)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden. Väljer du exempelvis M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Detta gäller dock inte denna app. Med Xtream IPTV kan man varken redigera sin spellista eller installera EPG separat.",
    "Pro versionen finns tillgänglig till alla ovanstående enheter oavsett om det är iOS eller Android baserat. Dessvärre är denna app ganska dyr i jämförelse med andra appar och priserna skiljer sig beroende på operativ system. På iOS enheter (Apple) kostar appen 299kr/år och på Android baserade enheter kostar den 265kr/år. Den är därför ganska dyr i vårt tycke.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen Xtream IPTV?",
    introBeforeDownload:
      "Appen går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) och [Appstore](https://www.apple.com/se/app-store/) till din enhet. Ladda endast ned appen från en välkänd källa som exempelvis Appstore eller Playbutiken.",
    downloadLabel: "Ladda ned Xtream IPTV",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned Xtream IPTV till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "[iPhone & iPad](https://www.apple.com/se/app-store/)",
      "[Android baserade Mobiler & Surfplattor](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv)",
    ],
  },
  deviceCompatSection: {
    heading: "Xtream IPTV Instruktioner - Vilka enheter?",
    devices: [
      {
        heading: "Apple TV",
        body: "Xtream IPTV med Apple TV är en relativt bra lösning då gränssnittet ser bra ut. I och med att man inte kan redigera spellistan eller ändra på andra inställningar så anser vi inte att detta är den bästa appen för Apple TV även om den tenderar att fungera bra. Xtream IPTVs utvecklare behöver lägga till fler funktioner för att appen ska vara värd 299kr/år. IPTVX med Apple TV är enligt oss en bättre lösning samt mer prisvärd.",
      },
      {
        heading: "Smart TV",
        body: "Xtream IPTV med Smart TV är en bra kombination när man är nybörjare. Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar samt mobiler. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
    ],
  },
  specsImage: "/installation/xtream-iptv-appletv.png",
  specsSmallImage: true,
  specs: [
    { label: "App", value: "Xtream IPTV" },
    { label: "Installationstid", value: "Ca 5 min" },
    { label: "Wifi/Kabel", value: "Stöd för båda" },
    { label: "Kostnad", value: "299kr" },
    { label: "Erbjuder fritt test", value: "Ja" },
  ],
  stepSections: [
    {
      id: "tv-steg",
      heading: "Instruktioner",
      columns: 3,
      steps: [
        {
          step: 1,
          image: "/installation/xtream-iptv-steg-1.png",
          body: 'Starta appen och trycka på "Add Playlist".',
        },
        {
          step: 2,
          image: "/installation/xtream-iptv-steg-2.png",
          body: 'Här fyller du i uppgifterna du fått utav oss på mail. Uppgifterna får du när du begärt ett gratis test eller köpt vår tjänst. I rutan "Account Name" som det står på bilden fyller du i "sverigeiptv.com". Uppgifterna för de andra fälten får du via e-post efter beställningen.',
        },
        {
          step: 3,
          image: "/installation/xtream-iptv-steg-3.png",
          body: "Klart! Notera att man med denna app i skrivande stund på Apple TV inte kan redigera spellistan eller ladda om/ändra EPG inställningar.",
        },
      ],
    },
  ],
  mobileSection: {
    id: "mobil-instruktioner",
    devices: [
      {
        heading: "Mobil",
        body: "Xtream IPTV med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP TV i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har du dock en Apple TV så rekommenderas det istället att använda appen IPTVX.",
      },
      {
        heading: "Surfplatta",
        body: "Xtream IPTV med Surfplatta är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP TV i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Appen fungerar bra på iPad (iOS) också men appen IPTVX rekommenderas där istället.",
      },
    ],
    specsImage: "/installation/xtream-iptv-appletv.png",
    specs: [
      { label: "App", value: "Xtream IPTV" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "299kr" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 4,
    stepsNumberLayout: "stacked",
    stepsPortraitMaxWidthClass: "max-w-[280px]",
    steps: [
      {
        step: 1,
        image: "/installation/xtream-iptv-mobil-steg-1.jpg",
        body: 'Starta appen och trycka på "Add Playlist".',
      },
      {
        step: 2,
        image: "/installation/xtream-iptv-mobil-steg-2.jpg",
        body: 'Välj "Xtream Codes API".',
      },
      {
        step: 3,
        image: "/installation/xtream-iptv-mobil-steg-3.jpg",
        body: 'Här fyller du i uppgifterna du fått utav oss på mail. Uppgifterna får du när du begärt ett gratis test eller köpt vår tjänst. I rutan "Account Name" som det står på bilden fyller du i "sverigeiptv.com". Uppgifterna för de andra fälten får du via e-post efter beställningen.',
      },
      {
        step: 4,
        image: "/installation/xtream-iptv-mobil-steg-4.jpg",
        body: 'Innan ett event spelas som du vill se på, behöver du ladda om spellistan. Det gör du genom att trycka på gubben uppe till höger och sedan trycker du på "Reload".',
      },
    ],
  },
  faqSection: {
    heading: "Xtream IPTV Instruktioner FAQ",
    items: [
      {
        question: "Hur installerar man Xtream IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är Xtream IPTV gratis?",
        answer:
          "Det finns en gratis version av appen men den betalda versionen är givetvis snäppet bättre. Vi rekommenderar alltså att man köper den fulla versionen för ca 299kr/år då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på Xtream IPTV?",
        answer:
          'Undertexter finns som standard på de flesta filmer och serier men för att få fram det på denna app måste du välja "Subtitles" på nedre delen av skärmen.',
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "Sammanfattning",
        body: [
          "Xtream IPTV är en populär app för streaming av TV-kanaler, filmer och serier via IPTV (Internet Protocol Television). Den ger användare tillgång till tusentals kanaler från hela världen och fungerar både på mobila enheter, datorer och smarta TV-apparater. En av de största fördelarna med Xtream IPTV är att den stödjer både live-TV och on-demand-innehåll, vilket innebär att användare kan titta på sina favoritprogram när som helst.",
          "Appen är enkel att installera och använda. Efter att ha laddat ner appen behöver användaren bara ange sina inloggningsuppgifter från sin IPTV-leverantör, vilket inkluderar användarnamn, lösenord och serveradress. Xtream IPTV erbjuder en anpassningsbar upplevelse med möjligheten att skapa favoritlistor, samt olika visningslägen för att göra navigeringen enkel och smidig.",
          "Xtream IPTV är också känt för att stödja olika format och codecs, vilket säkerställer att strömmarna spelas upp med hög kvalitet, oavsett enhetens prestanda. Med en stabil internetuppkoppling kan användarna njuta av en sömlös tittarupplevelse utan buffring. Sammanfattningsvis är Xtream IPTV ett mångsidigt och användarvänligt alternativ för dem som vill ha ett brett utbud av TV-kanaler och on-demand-innehåll direkt på sina enheter.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med Xtream IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
