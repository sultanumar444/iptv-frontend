import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "9xtream-iptv",
  pageTitle: "9Xtream IPTV Instruktioner",
  pageDescription:
    "9Xtream IPTV finns tillgänglig till flera enheter såsom Smart TV, boxar och till mobilen och surfplattan. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#9xtream-iptv-steg" },
    { label: "Nvidia Shield", href: "#9xtream-iptv-android-box-steg" },
    { label: "Android Box", href: "#9xtream-iptv-android-box-steg" },
    { label: "Formuler Box", href: "#9xtream-iptv-android-box-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
  ],
  selectorHeading: "9Xtream IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för 9Xtream IPTV",
  instructionsIntro:
    "9Xtream IPTV är en någorlunda ny app som finns tillgänglig till flera olika enheter. 9Xtream IPTV är enkel att komma igång med då du endast behöver fylla i dina inloggningsuppgifter direkt i appen. Du behöver alltså inte ladda upp din spellista via deras hemsida som med många andra appar. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: [
    "M3U länk",
    "Xtream Codes Playlist (inloggningsuppgifter)",
    "MAG/Stalker Portal",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      'Appen går att ladda ned från Playbutiken eller från "butiken" i din TV. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus. APK filen från 9Xtream IPTV:s egna hemsida är dock okej att ladda ned.',
    downloadLabel: "Ladda ned 9Xtream IPTV här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: [
          "9Xtream IPTV med Smart TV är en bra kombination när man precis har kommit igång med IPTV. Appen fungerar bra med Smart TV LG och givetvis andra Smart TV märken som Samsung, Sony, Philips osv. I och med att man kan installera 9Xtream IPTV appen och många andra appar så är Smart TV LG en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "9Xtream IPTV är en kraftfull app som erbjuder Smart TV-användare tillgång till ett stort urval av IPTV-kanaler, filmer och serier. Appen är enkel att installera och ger en smidig användarupplevelse med snabb navigering och högkvalitativ streaming. Med stöd för olika format och upplösningar kan du njuta av ditt favoritmaterial i HD eller 4K, beroende på din internetanslutning. Dessutom erbjuder appen EPG (Electronic Program Guide) för enkel kanalhantering och planering. 9Xtream IPTV är ett idealiskt val för dem som vill maximera sin TV-underhållning med ett omfattande och varierat innehåll. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
        ],
        specsImage: "/installation/9xtream-iptv.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "Extreme IPTV Pro" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "29kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "9xtream-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/9xtream-iptv-steg-1.png",
            body: 'Starta appen och tryck på "Add Playlist" uppe i högra hörnet. Välj sedan "Xtream Codes" och fyll i dina inloggningsuppgifter. Spara sedan spellistan.',
          },
          {
            step: 2,
            image: "/installation/9xtream-iptv-steg-2.png",
            body: "Välj nu din spellista du skapat.",
          },
          {
            step: 3,
            image: "/installation/9xtream-iptv-steg-3.png",
            body: 'Tryck på exempelvis "Live TV" om du vill se på live TV kanaler.',
          },
          {
            step: 4,
            image: "/installation/9xtream-iptv-steg-4.png",
            body: "Klart! 🙂",
          },
        ],
      },
      {
        heading: "Nvidia Shield",
        body: [
          "9Xtream IPTV med Nvidia Shield är en bra lösning men det finns bättre lösningar att komma igång med. Appen är skapad för att fungera som bäst med Android baserade system.",
          "9Xtream IPTV är en idealisk app för Nvidia Shield som erbjuder högkvalitativ IPTV-streaming med ett stort utbud av TV-kanaler, filmer och serier. Appen är optimerad för att dra full nytta av Nvidia Shields kraftfulla hårdvara och ger en smidig och snabb användarupplevelse. Med stöd för HD- och 4K-upplösning levererar den kristallklar bild och sömlös uppspelning, vilket gör den perfekt för underhållning på stora skärmar. Användarvänliga funktioner som EPG (Electronic Program Guide) och enkel navigering gör det lätt att bläddra och hantera kanaler. 9Xtream IPTV på Nvidia Shield är ett utmärkt val för en förstklassig IPTV-upplevelse.",
        ],
      },
      {
        heading: "Android Box",
        body: [
          "9Xtream IPTV med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system.",
          "9Xtream IPTV är en effektiv app för Android Box som ger användare tillgång till ett brett utbud av IPTV-kanaler, filmer och serier. Appen är optimerad för Android-enheter och erbjuder en smidig och stabil streamingupplevelse i hög kvalitet. Med funktioner som stöd för olika videoformat och upplösningar, inklusive HD och 4K, kan du enkelt njuta av dina favoritprogram utan avbrott. Appen har också en användarvänlig gränssnitt och stödjer EPG (Electronic Program Guide) för att underlätta kanalbläddring och schemaläggning. 9Xtream IPTV är ett perfekt val för att maximera din underhållning på Android Box.",
          "Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
        ],
      },
      {
        heading: "Xiaomi Mi",
        body: "9Xtream IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "9Xtream IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box då den har sin egna IP-TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Extreme appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/9xtream-iptv.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "9Xtream IPTV" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Kostnad", value: "249kr" },
          { label: "Erbjuder fritt test", value: "Ja (5 dygn)" },
        ],
        stepsId: "9xtream-iptv-android-box-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/9xtream-iptv-android-box-steg-1.png",
            body: 'Tryck sedan på "Add Xtream Codes API". Fyll sedan i dina inloggningsuppgifter du fått från oss. Tryck sedan på "Save" eller "Next".',
          },
          {
            step: 2,
            image: "/installation/9xtream-iptv-android-box-steg-2.png",
            body: 'Starta appen och tryck på "Add Playlist" uppe i högra hörnet.',
          },
          {
            step: 3,
            image: "/installation/9xtream-iptv-android-box-steg-3.png",
            body: 'Tryck nu på exempelvis "Live TV" om du vill se alla kanaler. Klart! 🙂',
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
        body: "9Xtream IPTV med Mobilen är en helt okej lösning om man inte har några andra alternativ. IPTV i mobilen med denna app är en lite krångligare lösning om man vill titta på tv på resande fot. Det finns med andra ord bättre appar som är lämpade till mobilen såsom IPTV Smarters. Har du en iPhone så rekommenderas det istället att du använder appen IPTVX.",
      },
      {
        heading: "Surfplatta",
        body: "9Xtream IPTV med Surfplatta är bättre än på mobilen om man vill komma igång på sin Android baserade surfplatta. IP-tv i surfplattan med fungerar helt okej om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX.",
      },
    ],
    specsImage: "/installation/9xtream-iptv.png",
    specsCard: true,
    specs: [
      { label: "App", value: "9Xtream IPTV" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Kostnad", value: "249kr" },
      { label: "Erbjuder fritt test", value: "Ja (5 dygn)" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 4,
    stepsNumberLayout: "stacked",
    steps: [
      {
        step: 1,
        image: "/installation/9xtream-iptv-mobil-steg-1.png",
        body: 'Starta appen och tryck på "Add Playlist" uppe i högra hörnet.',
      },
      {
        step: 2,
        image: "/installation/9xtream-iptv-mobil-steg-2.png",
        body: 'Tryck sedan på "Add Xtream Codes API". Fyll sedan i dina inloggningsuppgifter du fått från oss. Tryck sedan på "Save" eller "Next".',
      },
      {
        step: 3,
        image: "/installation/9xtream-iptv-mobil-steg-3.png",
        body: 'Tryck på din nya spellista och sedan på "Login".',
      },
      {
        step: 4,
        image: "/installation/9xtream-iptv-mobil-steg-4.png",
        body: "Klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "9Xtream IPTV FAQ",
    items: [
      {
        question: "Hur installerar man 9Xtream IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är 9Xtream IPTV gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på 9Xtream IPTV?",
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
        heading: "9Xtream IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med 9Xtream IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
