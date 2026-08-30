import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "perfect-iptv",
  pageTitle: "Perfect IPTV Instruktioner",
  pageDescription:
    "Perfect IPTV instruktioner ser du på denna sida. Appen finns tillgänglig till flera olika enheter. Appen gör det möjligt för dig att streama kanaler på din IP-TV enhet.",
  deviceTabs: [
    { label: "Apple TV", href: "#tv-steg" },
    { label: "Smart TV", href: "#tv-steg" },
    { label: "Nvidia Shield", href: "#tv-steg" },
    { label: "Android Box", href: "#tv-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
    { label: "Xiaomi Mi", href: "#tv-steg" },
    { label: "Formuler Box", href: "#tv-steg" },
  ],
  selectorHeading: "Perfect IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för Perfect IPTV",
  instructionsIntro:
    "Perfect IPTV är en användarvänlig och stabil IPTV-app med ett modernt gränssnitt. Den finns tillgänglig för de flesta enheter, bland annat Apple TV, Smart TV, Nvidia Shield, Xiaomi Mi Box, Xiaomi Mi Stick, Fire TV Stick, Android-boxar, mobiltelefoner och surfplattor.",
  instructionsDownloadLinks: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps?device=tv&hl=sv&gl=sv",
    },
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/iptv-watch-tv-online/id1516946830",
    },
  ],
  uploadMethodsIntro: "Du kan lägga till din IPTV-spellista på två sätt:",
  uploadMethods: ["M3U-länk", "Xtream Codes API"],
  instructionsBody: [
    "Vi rekommenderar Xtream Codes API. Då använder du användarnamnet, lösenordet och portaladressen som du får i samband med ditt köp eller kostnadsfria test.",
  ],
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Apple TV",
        body: "Perfect IPTV med Apple TV fungerar helt okej. Den var dock bättre förr när det inte fanns fler alternativ till bättre appar. Även om appen finns att ladda ned till Apple TV så är inte gränsnittet det bästa och användarvänligheten är inte heller på topp. Även grafiken har inte varit detsamma då bild formatet kan skilja sig beroende på vilken version du har. Det rekommenderas att man istället använder appen IPTVX med Apple TV.",
      },
      {
        heading: "Smart TV",
        body: "Perfect IPTV med Smart TV är en bra kombination när man är nybörjare eller när andra alternativ inte finns. Appen är relativt smidig på TV apparater då den är skapad för att fungera bra på alla enheter. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
      {
        heading: "Nvidia Shield",
        body: "Perfect IPTV med Nvidia Shield är därmed en snabb och smidig lösning då den är enkel att komma igång med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "Perfect IPTV med Android Box fungerar helt okej till att börja med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "Perfect IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare, smidigare och mer långsiktig lösning så är detta sätt inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "Perfect IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IPTV-app MyTVOnline. MyTVOnline-apparna är bättre än Perfect-appen på Formuler boxar och därav rekommenderas det att man använder de istället.",
      },
    ],
  },
  specsImage: "/installation/perfect-iptv-specification.jpg",
  specs: [
    { label: "App", value: "PerfectIPTV" },
    { label: "Installationstid", value: "Ca 3 min" },
    { label: "Wifi/Kabel", value: "Stöd för båda" },
    { label: "Kostnad", value: "50kr" },
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
          image: "/installation/perfect-iptv-steg-1.jpg",
          body: 'Starta appen och välj "add playlist". Tryck sedan på "Go here" längst ned.',
        },
        {
          step: 2,
          image: "/installation/perfect-iptv-steg-2.jpg",
          body: 'Här fyller du i namnet på din spellista som är "sverigeiptv.com". Fyll sedan i resten utav uppgifterna du fått via mail.',
        },
        {
          step: 3,
          image: "/installation/perfect-iptv-steg-3.jpg",
          body: "Klart! 🙂",
        },
      ],
    },
  ],
  mobileSection: {
    id: "mobil-instruktioner",
    devices: [
      {
        heading: "Mobil",
        body: "Perfect IPTV med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP tv i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. På iPhone rekommenderas istället appen IPTVX och på Android baserade mobiler rekommenderas appen IPTV Player.",
      },
      {
        heading: "Surfplatta",
        body: "Perfect IPTV med Surfplatta är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP tv i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX. Har man en android baserad surfplatta rekommenderas istället appen IPTV Player.",
      },
    ],
    specsImage: "/installation/perfect-iptv-mobile-specification.jpg",
    specs: [
      { label: "App", value: "PerfectIPTV" },
      { label: "Installationstid", value: "Ca 4 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "119kr/år" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 5,
    stepsNumberLayout: "stacked",
    steps: [
      {
        step: 1,
        image: "/installation/perfect-iptv-mobil-steg-1.jpg",
        body: 'Starta appen och välj språket "English" om Svenska inte finns.',
      },
      {
        step: 2,
        image: "/installation/perfect-iptv-mobil-steg-2.jpg",
        body: "Tryck på plus tecknet.",
      },
      {
        step: 3,
        image: "/installation/perfect-iptv-mobil-steg-3.jpg",
        body: 'Tryck på den blåa texten "Go here" bredvid texten "Add Xtream-Codes API playlist".',
      },
      {
        step: 4,
        image: "/installation/perfect-iptv-mobil-steg-4.jpg",
        body: 'Högst upp eller där det står "Playlist name" fyller du i sverigeiptv.com. Sedan fyller du i resterande utav uppgifterna du fått från oss via mail.',
      },
      {
        step: 5,
        image: "/installation/perfect-iptv-mobil-steg-5.jpg",
        body: "Klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "Perfect IPTV FAQ",
    items: [
      {
        question: "Hur installerar man Perfect IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är Perfect IPTV gratis?",
        answer:
          "Ja, appen är gratis. Vi rekommenderar dock att man köper premium versionen för ca 69kr då den låser upp en del bra funktioner samt tar bort den otroligt irriterande reklamen.",
      },
      {
        question: "Hur får man undertexter på Perfect IPTV?",
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
        heading: "Perfect IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här! Sammanfattningsvis så kan man dock påstå att undertexter inte är de bästa för denna app.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med Perfect IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
