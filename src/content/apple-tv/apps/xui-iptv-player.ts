import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "xui-iptv-player",
  pageTitle: "XUI IPTV Player Instruktioner",
  pageDescription:
    "XUI IPTV Player finns tillgänglig till flera enheter såsom Smart TV och boxar. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#xui-iptv-player-steg" },
    { label: "Nvidia Shield", href: "#xui-iptv-player-steg" },
    { label: "Android Box", href: "#xui-iptv-player-steg" },
    { label: "Formuler Box", href: "#xui-iptv-player-steg" },
  ],
  selectorHeading: "XUI IPTV Player Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för XUI IPTV Player",
  instructionsIntro:
    "XUI IPTV Player är en någorlunda ny app som finns tillgänglig till flera olika enheter. XUI IPTV Player är enkel att komma igång med då du endast behöver fylla i dina inloggningsuppgifter direkt i appen. Du behöver alltså inte ladda upp din spellista via deras hemsida som med många andra appar. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtream Codes Playlist (inloggningsuppgifter)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      'Appen går att ladda ned från Playbutiken eller från "butiken" i din TV. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus. APK filen från deras egna hemsida är dock okej att ladda ned.',
    downloadLabel: "Ladda ned XUI IPTV Player här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: [
          "XUI IPTV Player med Smart TV är ett utmärkt val för dig som precis har kommit igång med IPTV. Appen fungerar utmärkt med Smart TV-modeller som LG, Samsung, Sony, Philips och andra. Genom att installera XUI IPTV Player, tillsammans med många andra IPTV-appar, blir din Smart TV en perfekt enhet för att njuta av TV-tittande. Vi rekommenderar dock att du rensar bort onödiga appar som inte används och ser till att ha en nyare TV-modell, eftersom de flesta IPTV-listor idag innehåller hundratusentals titlar som kanaler, filmer, serier, dokumentärer med mera.",
          "XUI IPTV Player är en kraftfull applikation som ger Smart TV-användare tillgång till ett brett urval av IPTV-kanaler, filmer och serier. Appen är lätt att installera och erbjuder en smidig användarupplevelse med snabb navigering och högkvalitativ streaming. Den stödjer olika format och upplösningar, vilket gör att du kan njuta av innehåll i både HD och 4K, beroende på din internetanslutning. Dessutom har appen stöd för EPG (Electronic Program Guide) för enkel hantering och planering av dina kanaler. Appen är ett idealiskt val för dig som vill maximera din TV-underhållning med ett omfattande och varierat innehåll.",
          "Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
        ],
      },
      {
        heading: "Nvidia Shield",
        body: [
          "XUI IPTV Player med Nvidia Shield är en bra lösning för Nvidia Shield, även om det kan finnas andra alternativ att överväga beroende på dina behov. Appen är utvecklad för att fungera optimalt med Android-baserade system som Nvidia Shield.",
          "XUI IPTV Player är en idealisk app för Nvidia Shield som erbjuder högkvalitativ IPTV-streaming med ett omfattande utbud av TV-kanaler, filmer och serier. Den är optimerad för att utnyttja Nvidia Shields kraftfulla hårdvara fullt ut, vilket ger en snabb och smidig användarupplevelse. Med stöd för både HD- och 4K-upplösning får du kristallklar bildkvalitet och sömlös uppspelning, vilket gör den perfekt för att titta på underhållning på stora skärmar. Användarvänliga funktioner som EPG (Electronic Program Guide) och enkel navigering gör det enkelt att bläddra och hantera dina kanaler. Appen på Nvidia Shield är ett utmärkt val för en förstklassig IPTV-upplevelse.",
        ],
      },
      {
        heading: "Android Box",
        body: [
          "XUI IPTV Player med Android Box fungerar helt okej som ett första steg, särskilt eftersom den är utformad för att prestera optimalt på Android-baserade system som Android Box.",
          "XUI IPTV Player är en effektiv app för Android Box som ger användare tillgång till ett brett utbud av IPTV-kanaler, filmer och serier. Den är optimerad för Android-enheter och erbjuder en smidig och stabil streamingupplevelse med hög kvalitet. Med stöd för olika videoformat och upplösningar, inklusive HD och 4K, kan du enkelt njuta av dina favoritprogram utan avbrott. Appens användarvänliga gränssnitt och EPG (Electronic Program Guide) gör det enkelt att navigera bland kanaler och planera dina tittarupplevelser. XUI IPTV Player är ett perfekt val för att maximera underhållningen på din Android Box.",
          "Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
        ],
      },
      {
        heading: "Xiaomi Mi",
        body: "XUI IPTV Player med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "XUI IPTV Player med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box då den har sin egna IP-TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Extreme appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/xui-iptv-player.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "XUI IPTV Player" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "149kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "xui-iptv-player-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/xui-iptv-player-steg-1.jpg",
            body: "När du startar appen för första gången ska du kunna lägga till en spellista direkt såsom på steg 2 i denna guide. Om detta inte är möjligt behöver du köpa appen genom att följa instruktionerna enligt bilden nedan.",
          },
          {
            step: 2,
            image: "/installation/xui-iptv-player-steg-2.png",
            body: 'Om du startar appen för första gången så ska du kunna lägga till en spellista genom att välja "Xtream account", fyll sedan i inloggningsuppgifterna du fått ifrån oss via epost. Notera att du behöver fylla i appens mac adress som du ska kunna se första gången du startar appen. På "Host" fyller du i din portal url. Tryck sedan på "UPLOAD".',
          },
          {
            step: 3,
            image: "/installation/xui-iptv-player-steg-3.jpg",
            body: 'Tryck nu på exempelvis "Live TV" om du vill se alla kanaler. Klart! 🙂',
          },
          {
            step: 4,
            image: "/installation/xui-iptv-player-steg-4.jpg",
            body: "Så ser det ut när installationen utförts korrekt.",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "XUI IPTV Player FAQ",
    items: [
      {
        question: "Hur installerar man XUI IPTV Player på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är XUI IPTV Player gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis i ca 10 dagar innan man måste betala för den.",
      },
      {
        question: "Hur får man undertexter på XUI IPTV Player?",
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
        heading: "XUI IPTV Player Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med XUI IPTV Player",
    ctaHref: "/vart-paket",
  },
};

export default guide;
