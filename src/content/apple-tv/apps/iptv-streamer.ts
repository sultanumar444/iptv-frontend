import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iptv-streamer",
  pageTitle: "IPTV Streamer Instruktioner",
  pageDescription:
    "IPTV Streamer gör det möjligt för dig att streama kanaler på din IPTV enhet. Med appen kommer du enkelt igång och får tillgång till alla världens kanaler!",
  deviceTabs: [
    { label: "Apple TV", href: "#tv-steg" },
    { label: "Smart TV", href: "#smarttv-steg" },
    { label: "Nvidia Shield", href: "#smarttv-steg" },
    { label: "Android Box", href: "#smarttv-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
    { label: "Xiaomi Mi", href: "#smarttv-steg" },
    { label: "Formuler Box", href: "#smarttv-steg" },
  ],
  selectorHeading: "IPTV Streamer Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IPTV Streamer",
  instructionsIntro:
    "IPTV Streamer är typisk IPTV app med ett medelbetyg från kunder som recenserat appen. Den är hyffsat enkel att komma igång med och appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtreamcodes (User, Pass & Portal URL)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IP TV spellista med Xtreamcodes (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Väljer du exempelvis M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Appen är en utav de mest nedladdade IPTV apparna genom tiderna efter [Smart IPTV](https://sverigeiptv.com/smart-iptv-instruktioner/).",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Apparna går att ladda ned från företagets [hemsida](https://www.iptvsmarters.com/#downloads) samt [Playbutiken](https://play.google.com/store/apps/details?id=com.iptvstreamer.iptvstreamerpro&hl=en_US) och [Appstore](https://apps.apple.com/us/app/iptv-streamer-pro/id1137962801) till din enhet. Ladda endast ned appen från en välkänd källa som exempelvis deras hemsida vi länkat till båda ovan och nedan eller från Appstore eller Playbutiken.",
    downloadLabel: "Ladda ned IPTV Streamer",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned IPTV Smarters till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "[iPhone & iPad](https://apps.apple.com/us/app/smarters-pro/id6450746159)",
      "[Android baserade Mobiler & Surfplattor](http://web.archive.org/web/20230403045121/https://play.google.com/store/apps/details?id=com.nst.smartersplayer)",
      "[Windows](https://www.iptvsmarters.com/download?download=windows_app)",
      "[Webläsare i Datorn](https://webtv.iptvsmarters.com/)",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Apple TV",
        body: "IPTV Streamer med Apple TV är dessvärre inte den bästa lösningen då gränssnittet egentligen är skapat för Android enheter. Även om appen finns att ladda ned till Apple TV så kan det vara krångligt att backa eller byta kanal. Även grafiken har inte varit detsamma då bild formatet kan skilja sig beroende på vilken version du har. Appen har dessutom fått 3/5 i betyg på appstore för Apple TV. Det rekommenderas därför att man istället använder appen IPTVX med Apple TV.",
        specsImage: "/installation/iptv-streamer-appletv.webp",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "IPTV Streamer" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "149kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "tv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/iptv-streamer-steg-1.png",
            body: 'Starta appen och välj "Live TV".',
          },
          {
            step: 2,
            image: "/installation/iptv-streamer-steg-2.png",
            body: 'Tryck på "Add an IPTV Provider".',
          },
          {
            step: 3,
            image: "/installation/iptv-streamer-steg-3.png",
            body: 'Välj "Import with login and password".',
          },
          {
            step: 4,
            image: "/installation/iptv-streamer-steg-4.png",
            body: 'Fyll i inloggningsuppgifterna du fått via mail. Tryck sedan på "Save".',
          },
          {
            step: 5,
            image: "/installation/iptv-streamer-steg-5.png",
            body: "Klart! 🙂",
          },
        ],
      },
      {
        heading: "Smart TV",
        body: "IPTV Streamer med Smart TV är en bra kombination när man är nybörjare. Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar samt mobiler. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
      {
        heading: "Nvidia Shield",
        body: "IPTV Streamer med Nvidia Shield är en snabb och smidig lösning då den är enkel att komma igång med samt att den är skapad för att fungera som bäst med Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "IPTV Streamer med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system. Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "IPTV Streamer med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "IPTV Streamer med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IP TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Smarters appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/iptv-streamer-smarttv.jpg",
        specsLayout: "row",
        specs: [
          { label: "App", value: "IPTV Streamer" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "60kr/år" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "smarttv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/iptv-streamer-steg-1.png",
            body: 'Starta appen och välj "Live TV".',
          },
          {
            step: 2,
            image: "/installation/iptv-streamer-steg-2.png",
            body: 'Tryck på "Add an IPTV Provider".',
          },
          {
            step: 3,
            image: "/installation/iptv-streamer-steg-3.png",
            body: 'Välj "Import with login and password".',
          },
          {
            step: 4,
            image: "/installation/iptv-streamer-steg-4.png",
            body: 'Fyll i inloggningsuppgifterna du fått via mail. Tryck sedan på "Save".',
          },
          {
            step: 5,
            image: "/installation/iptv-streamer-steg-5.png",
            body: "Klart! 🙂",
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
        body: "IPTV Streamer med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP tv i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Dock är appen egentligen skapad till android enheter så om du har en iPhone blir upplevelsen inte den bästa. Då rekommenderas det istället att använda appen IPTVX.",
      },
      {
        heading: "Surfplatta",
        body: "IPTV Streamer med Surfplatta är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP tv i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX.",
      },
    ],
    specsImage: "/installation/iptv-streamer-mobil-app.jpg",
    specsCard: true,
    specs: [
      { label: "App", value: "IPTV Streamer Pro" },
      { label: "Installationstid", value: "Ca 3 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "99kr/år" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 5,
    steps: [
      {
        step: 1,
        image: "/installation/iptv-streamer-mobil-steg-1.jpg",
        body: 'Starta appen och välj "Lägg till IPTV-leverantörer".',
      },
      {
        step: 2,
        image: "/installation/iptv-streamer-mobil-steg-2.jpg",
        body: 'Välj "Importera med inloggning och lösenord".',
      },
      {
        step: 3,
        image: "/installation/iptv-streamer-mobil-steg-3.jpg",
        body: 'Fyll i uppgifterna du fått utav oss via mail. På fliken "Namn på IPTV-leverantör" skriver du sverigeiptv.com.',
      },
      {
        step: 4,
        image: "/installation/iptv-streamer-mobil-steg-4.jpg",
        body: "Tryck nu på texten sverigeiptv.com.",
      },
      {
        step: 5,
        image: "/installation/iptv-streamer-mobil-steg-5.jpg",
        body: "Klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "IPTV Streamer FAQ",
    items: [
      {
        question: "Hur installerar man IPTV Streamer på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är IPTV Streamer gratis?",
        answer:
          "Ja, appen är gratis men vi rekommenderar dock att man köper premium versionen för ca 99kr/år då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på IPTV Streamer?",
        answer:
          "Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll. Dock har många rapporterat att de senare versionerna av appen inte längre stöder undertexter. Därför rekommenderas en annan app.",
      },
      {
        question: "Hur installerar man IPTV Streamer på en bärbar dator?",
        answer: "Appen finns tyvärr inte tillgänglig till i skrivande stund.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "IPTV Streamer Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med IPTV Streamer",
    ctaHref: "/vart-paket",
  },
};

export default guide;
