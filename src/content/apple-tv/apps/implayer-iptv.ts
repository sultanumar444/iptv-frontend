import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "implayer-iptv",
  pageTitle: "iMPlayer IPTV Instruktioner",
  pageDescription:
    "iMPlayer IPTV finns tillgänglig till flera enheter såsom Smart TV, boxar och till mobilen och surfplattan. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#implayer-iptv-steg" },
    { label: "Nvidia Shield", href: "#implayer-iptv-steg" },
    { label: "Android Box", href: "#implayer-iptv-steg" },
    { label: "Formuler Box", href: "#implayer-iptv-steg" },
    { label: "Mobil", href: "#instruktioner" },
    { label: "Surfplatta", href: "#instruktioner" },
  ],
  selectorHeading: "iMPlayer IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för iMPlayer IPTV",
  instructionsIntro:
    "iMPlayer IPTV är en någorlunda ny app som finns tillgänglig till flera olika enheter. iMPlayer IPTV är enkel att komma igång med då du endast behöver fylla i dina inloggningsuppgifter direkt i appen. Du behöver alltså inte ladda upp din spellista via deras hemsida som med många andra appar. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtream Codes Playlist (inloggningsuppgifter)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      'Appen går att ladda ned från Playbutiken eller från "butiken" i din TV. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus. APK filen från iMPlayer IPTV:s egna hemsida är dock okej att ladda ned.',
    downloadLabel: "Ladda ned iMPlayer IPTV här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: [
          "iMPlayer IPTV med Smart TV är ett utmärkt alternativ för dig som precis har börjat med IPTV. Appen fungerar smidigt på Smart TV-modeller från LG, Samsung, Sony, Philips och andra tillverkare. Genom att installera iMPlayer IPTV och andra kompatibla appar kan du använda din Smart TV för att få tillgång till en enorm mängd innehåll. Vi rekommenderar dock att du rensar bort onödiga appar som du inte använder och att du har en nyare TV-modell, eftersom många IPTV-listor idag är stora och innehåller hundratusentals kanaler, filmer, serier och dokumentärer.",
          "iMPlayer IPTV är en kraftfull app som ger Smart TV-användare tillgång till ett brett utbud av IPTV-kanaler, filmer och serier. Den är enkel att installera och erbjuder en smidig användarupplevelse med snabb navigering och högkvalitativ streaming. Appen stödjer flera format och upplösningar, vilket innebär att du kan njuta av ditt favoritmaterial i HD eller 4K, beroende på din internetuppkoppling. Dessutom inkluderar appen en EPG (Electronic Program Guide) för enkel hantering och planering av dina kanaler. Appen är det perfekta valet för dig som vill maximera din TV-underhållning med ett mångsidigt och omfattande innehåll.",
          "Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
        ],
      },
      {
        heading: "Nvidia Shield",
        body: [
          "iMPlayer IPTV med Nvidia Shield är ett utmärkt alternativ för dig som använder Nvidia Shield och vill komma igång med IPTV. Appen fungerar smidigt på Nvidia Shield-enheter, vilket gör den till ett kraftfullt verktyg för att få tillgång till en omfattande mängd IPTV-innehåll. Tack vare Nvidia Shields starka prestanda får du en snabb och sömlös upplevelse när du streamar kanaler, filmer, serier och dokumentärer. Vi rekommenderar att du håller din enhet uppdaterad och ser till att du har tillräckligt med lagringsutrymme för att hantera stora IPTV-listor med tusentals titlar.",
          "Appen är enkel att installera och erbjuder en smidig användarupplevelse med snabb navigering och högkvalitativ streaming. Appen stödjer flera format och upplösningar, vilket gör att du kan njuta av ditt favoritmaterial i HD eller 4K, beroende på din internetanslutning och Nvidia Shields kapacitet. Dessutom erbjuder iMPlayer IPTV en EPG (Electronic Program Guide) som underlättar kanalhantering och planering. iMPlayer IPTV på Nvidia Shield är ett perfekt val för dig som vill maximera din underhållningsupplevelse med ett mångsidigt och rikt IPTV-innehåll.",
        ],
      },
      {
        heading: "Android Box",
        body: [
          "iMPlayer IPTV med Android Box är ett utmärkt alternativ för dig som använder en Android Box och vill komma igång med IPTV. Appen fungerar smidigt på Android Box-enheter och ger dig tillgång till ett omfattande utbud av IPTV-innehåll. Med Android Boxens kraftfulla prestanda kan du njuta av en snabb och sömlös streamingupplevelse, oavsett om du tittar på kanaler, filmer, serier eller dokumentärer. Vi rekommenderar att du håller din enhet uppdaterad och ser till att ha tillräckligt med lagringsutrymme för att hantera de stora IPTV-listor som idag innehåller tusentals titlar.",
          "Appen är enkel att installera och erbjuder en smidig användarupplevelse med snabb navigering och högkvalitativ streaming. Appen stödjer flera format och upplösningar, vilket gör att du kan njuta av ditt favoritmaterial i HD eller 4K, beroende på din internetanslutning och kapaciteten på din Android Box. Dessutom inkluderar iMPlayer IPTV en EPG (Electronic Program Guide) som gör det lätt att hantera och planera dina kanaler. Appen på Android Box är ett utmärkt val för dig som vill få ut maximalt av din TV-underhållning med ett brett och varierat IPTV-innehåll.",
          "Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
        ],
      },
      {
        heading: "Xiaomi Mi",
        body: "iMPlayer IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "iMPlayer IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box då den har sin egna IP-TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Extreme appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/implayer-iptv.webp",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "iMPlayer IPTV" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "270kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "implayer-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/implayer-iptv-steg-1.png",
            body: 'Starta appen och välj "Add Playlist". Välj sedan "XC API". Fyll sedan i dina inloggningsuppgifter du fått utav oss på mail och klicka på "Next" eller "Save".',
          },
          {
            step: 2,
            image: "/installation/implayer-iptv-steg-2.png",
            body: "Gå igenom tipsen i lugn och ro.",
          },
          {
            step: 3,
            image: "/installation/implayer-iptv-steg-3.png",
            body: "Klart! Notera att appen är något avancerad och därav laddar den längre än vanligt vid installation då alla funktioner och inställningar ställs in för första gången. Du kommer troligtvis att få en svart skärm när din lista laddat klart. Då trycker du bara på back knappen på din fjärrkontroll! 🙂",
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
        body: [
          "iMPlayer IPTV med Mobilen är ett utmärkt alternativ för dig som vill använda IPTV på din mobil. Appen fungerar smidigt på mobiltelefoner och ger dig tillgång till ett stort utbud av IPTV-innehåll, var du än befinner dig. Med iMPlayer IPTV på mobilen kan du enkelt streama kanaler, filmer, serier och dokumentärer direkt på din enhet. För bästa upplevelse rekommenderar vi att du använder en mobil med tillräckligt med lagringsutrymme och en snabb internetuppkoppling för att hantera de omfattande IPTV-listorna som innehåller tusentals titlar.",
          "Appen är enkel att installera och erbjuder en användarvänlig upplevelse med snabb navigering och högkvalitativ streaming. iMPlayer IPTV stödjer flera format och upplösningar, vilket innebär att du kan njuta av ditt favoritmaterial i HD eller 4K, beroende på din internetanslutning och mobilens kapacitet. Dessutom erbjuder appen en EPG (Electronic Program Guide) som gör det enkelt att hantera och planera dina kanaler. iMPlayer IPTV på mobil är det perfekta valet för dig som vill ha flexibel och mobil TV-underhållning med ett brett utbud av innehåll.",
          "Det finns med andra ord bättre appar som är lämpade till mobilen såsom IPTV Smarters. Har du en iPhone så rekommenderas det istället att du använder appen IPTVX.",
        ],
      },
      {
        heading: "Surfplatta",
        body: "iMPlayer IPTV med Surfplatta är bättre än på mobilen om man vill komma igång på sin Android baserade surfplatta. IP-tv i surfplattan med fungerar helt okej om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX.",
      },
    ],
    specsImage: "/installation/implayer-iptv.webp",
    specsCard: true,
    specs: [
      { label: "App", value: "iMPlayer IPTV" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "270kr" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 3,
    stepsNumberLayout: "stacked",
    steps: [
      {
        step: 1,
        image: "/installation/implayer-iptv-mobil-steg-1.jpg",
        body: 'Starta appen och tryck på "Add Playlist".',
      },
      {
        step: 2,
        image: "/installation/implayer-iptv-mobil-steg-2.jpg",
        body: 'Fyll i dina inloggningsuppgifter du fått utav oss på mail. I fältet "Nickname" fyller du i "sverigeiptv.com". Tryck sedan på "Next".',
      },
      {
        step: 3,
        image: "/installation/implayer-iptv-mobil-steg-3.jpg",
        body: "Klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "iMPlayer IPTV FAQ",
    items: [
      {
        question: "Hur installerar man iMPlayer IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är iMPlayer IPTV gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på iMPlayer IPTV?",
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
        heading: "iMPlayer IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med iMPlayer IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
