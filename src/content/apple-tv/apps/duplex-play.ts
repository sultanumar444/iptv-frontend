import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "duplex-play",
  pageTitle: "Duplex IPTV Instruktioner",
  pageDescription:
    "Duplex IPTV som också heter Duplex Play gör det möjligt för dig att streama kanaler på din IPTV enhet.",
  pageCtaLabel: "GRATIS TEST",
  pageCtaHref: "/vart-paket",
  pageScrollHint: "↓Scrolla ned för att se instruktioner för just din enhet↓",
  deviceTabs: [
    { label: "Smart TV", href: "#instruktioner" },
    { label: "Nvidia Shield", href: "#instruktioner" },
    { label: "Android Box", href: "#instruktioner" },
    { label: "Formuler Box", href: "#instruktioner" },
    { label: "Xiaomi Mi", href: "#instruktioner" },
    { label: "Dator", href: "#duplex-play-steg" },
  ],
  selectorHeading: "Duplex IPTV Instruktioner för just din enhet",
  instructionsHeading: "Duplex IPTV Instruktioner",
  instructionsIntro:
    "Duplex IPTV är en väldigt enkel app att använda och komma igång med. Appen tillåter dig att ladda upp dina kanaler med en M3U länk via deras hemsida: https://edit.duplexplay.com/",
  uploadMethods: [],
  instructionsBody: [
    "Duplex IPTV (Duplex Play) är en utav de mest nedladdade IPTV apparna efter [Smart IPTV](https://sverigeiptv.com/smart-iptv-instruktioner/). Den finns dock inte tillgänglig till Apple enheter av någon anledning.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned till vissa enheter från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv). Dock har appen försvunnit för många då det verkar som att företaget numera satsat på appen [IBO player](https://sverigeiptv.com/ibo-player-instruktioner/). Ladda endast ned Duplex Play från en välkänd källa.",
    downloadLabel: "Ladda ned Duplex IPTV här",
    introAfterDownload: [],
    recommendationsIntro: "Ladda ned Duplex IPTV här:",
    recommendations: [
      "[Android baserade enheter](http://web.archive.org/web/20230403045121/https://play.google.com/store/apps/details?id=com.nst.smartersplayer)",
      "[Windows](https://www.iptvsmarters.com/download?download=windows_app)",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: "Duplex IPTV med Smart TV är en bra kombination om man fortfarande har tillgång till appen. Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar. IPTV Smarters app finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
      {
        heading: "Nvidia Shield",
        body: "Duplex IPTV med Nvidia Shield är en snabb och smidig lösning då den är enkel att komma igång med samt att den är skapad för att fungera som bäst med Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "Duplex IPTV med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system. Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "Duplex IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. S boxen är givetvis bättre än Mi sticken. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "Duplex IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IP TV app MyTVOnline. MyTVOnline apparna är mycket bättre än IPTV Smarters och därav rekommenderas det att man använder de istället.",
      },
      {
        heading: "Dator",
        body: "Duplex IPTV på datorn med Windows fungerar faktiskt väldigt bra. Vill du se på IPTV i din dator så är faktiskt Duplex Play en bra app. Detsamma går tyvärr inte att säga när det kommer till många andra enheter men på datorn fungerar den bättre än vanligt. Appen laddar du även där helst ned från deras egna hemsida.",
        specsImage: "/installation/duplex-play.jpg",
        specsLayout: "row",
        specsCard: true,
        specsWarning:
          "Denna app går tyvärr inte längre att köpa. I vissa fall kan man köpa fler koder via sin dator.",
        specs: [
          { label: "App", value: "DuplexPlay" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "19kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "duplex-play-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/duplex-play-steg-1.jpg",
            body: 'Börja med att starta appen. Notera ditt "Device ID" och "Device Key".',
          },
          {
            step: 2,
            image: "/installation/duplex-play-steg-2.jpg",
            body: 'Gå in på www.edit.duplexplay.com och fyll i ditt "Device ID" och "Device Key". Tryck sedan på "Manage Device" efter att ha klickat i rätt ruta på de små ikonerna som roterar.',
          },
          {
            step: 3,
            image: "/installation/duplex-play-steg-3.jpg",
            body: 'Tryck på "Add playlist".',
          },
          {
            step: 4,
            image: "/installation/duplex-play-steg-4.jpg",
            body: 'På "Playlist name" fyller du i sverigeiptv.com och på "Playlist Url" klistar du in din M3U länk som du fått på mailen utav oss. Tryck sedan på "Save" och starta om din tv så bör du se din nya lista när du öppnar appen.',
          },
        ],
      },
    ],
  },
  infoSection: {
    blocks: [
      {
        heading: "GRATIS TEST -IPTV",
        body: [
          "När du har läst igenom instruktionerna för din enhet bör du begära ett gratis test genom att trycka på knappen. Vi rekommenderar dig att köpa 3-6 månader då målet är att hinna testa tjänsten i lugn och ro, därav rekommenderas en längre period. Givetvis kan du köpa en månad men se då till att krypa ned i soffan lite oftare. Läs mer om vårt utbud här.",
          "Vi ber dig läsa igenom instruktionerna för hur man kommer igång även om du tror dig kunna installationen utantill.",
          "Som de flesta IPTV leverantörer idag erbjuder vi endast en timmes test och därför ska du bara begära ett gratis test om du verkligen har tid att testa kanalerna i lugn och ro.",
          "Testet är inte till för att hinna titta på en fotbollsmatch eller dylikt utan endast för att få en snabb inblick i hur vårt upplägg ser ut. Här kan du se instruktioner (ta en titt även om du tror dig kunna installationen utantill).",
          "Lycka till!",
        ],
      },
      {
        heading: "Vilka enheter?",
        body: [
          "Duplex Play går att använda på flera enheter och nedan ser du några exempel.",
          "Inledningsvis kan det vara bra att testa appen på din befintliga enhet.",
          "Är du därav ute efter den bästa IPTV upplevelsen d.v.s. tittar du mycket på TV så rekommenderas alltid att man köper en box som exempelvis Apple TV eller en TVIP box. Har man dock inte den möjligheten så kan man använda appen på följande enheter och många mer.",
          "[Smart TV](https://www.sverigeiptv.com/iptv-apple-tv)",
          "[Nvidia Shield](https://www.sverigeiptv.com/iptv-box-android)",
          "[Xiaomi Mi Box/Stick](https://www.sverigeiptv.com/iptv-med-mobil-surfplatta/)",
          "[Android Box/Firestick](https://www.sverigeiptv.com/iptv-med-mobil-surfplatta/)",
          "[Datorn (Windows)](https://www.sverigeiptv.com/iptv-smart-tv/)",
        ],
      },
      {
        heading: "Duplex IPTV EPG",
        body: [
          "Den elektroniska Program Guiden (EPG) finns tillgänglig på appen varpå man på många appar manuellt behöver kopiera och klistra in en EPG länk (XML) som du får utav oss vid köp.",
          "Däremot hämtar vissa appar EPG informationen när du loggar in med Xtreamcodes API utan att du manuellt behöver lägga till något. Om din app endast kan ta emot M3U länkar så kommer du med stor sannolikhet att manuellt behöva ladda upp en xml epg länk.",
        ],
      },
      {
        heading: "Duplex IPTV Undertexter",
        body: [
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
      {
        heading: "DuplexPlay på Samsung TV",
        body: [
          "Appen fungerar bra med Samsung TV. I och med att man kan installera DuplexPlay appen och många andra appar så är Samsung TV en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "Instruktioner på hur du genomför installationen finns här. Vanligtvis så tar det ca 5-15 min att komma igång när man för första gången försöker att få igång TV kanalerna på sin Samsung TV. Skulle man dock fastna och behöva hjälp kan man alltid kontakta vår support.",
        ],
      },
    ],
    ctaLabel: "Köp IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
