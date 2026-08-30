import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "net-iptv",
  pageTitle: "Net IPTV Instruktioner",
  pageDescription:
    "Net IPTV instruktioner ser du på denna sida. Appen finns tillgänglig till de flesta enheterna såsom Smart TV, Android boxar osv. Appen gör det möjligt för dig att streama kanaler på din IPTV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#net-iptv-steg" },
    { label: "Nvidia Shield", href: "#net-iptv-steg" },
    { label: "Android Box", href: "#net-iptv-steg" },
    { label: "Xiaomi Mi", href: "#net-iptv-steg" },
    { label: "Formuler Box", href: "#net-iptv-steg" },
  ],
  selectorHeading: "Net IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för NET IPTV",
  instructionsIntro:
    "NET IPTV kan laddas ned till de flesta anroid boxarana och Smart TV apparaterna idag. Appen är ganska enkel att komma igång med och rekommenderas till som inte har möjligheten att köpa en box eller ladda ned en bättre app som exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/).",
  uploadMethods: [],
  instructionsBody: [
    "NET IPTV är dock inte den enklaste appen att komma igång med då man måste ladda upp sin spellista via deras hemsida vilket kan vara krångligt om man är nybörjare.",
    "Vi rekommenderar att man istället börjar med [IPTV Smarters](https://sverigeiptv.com/iptv-smarters-instruktioner/) om appen finns tillgänglig till din enhet för att senare gå över till en mer avancerad app som således är lite stabilare samt har ett bättre gränssnitt. Vi har på denna sida samlat guiderna för appen så att du snabbt kan komma igång på just din enhet oavsett om du har en Android Box eller en Smart TV. På denna sida ser du instruktioner för appen till följande enheter: Smart TV, Nvidia Shield, Xiaomi Mi Box, Xiaomi Mi Stick, Firestick och Android Box.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Apparna går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) till din enhet. Ladda endast ned appen från en välkänd källa som exempelvis Playbutiken. Detta eftersom att man av misstag därmed kan ladda ned virus om man inte är vaksam.",
    downloadLabel: "Ladda ned NET IPTV",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned NET IPTV till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "[Android Boxar](https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2&hl=en_US)",
      "[Smart TV](https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2&hl=en_US)",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: "Net IPTV med Smart TV är en bra kombination när man är nybörjare eller när andra alternativ inte finns. Appen är relativt smidig på TV apparater då den är skapad för att fungera bra på alla enheter. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/).",
      },
      {
        heading: "Nvidia Shield",
        body: "Net IPTV med Nvidia Shield är därmed en snabb och smidig lösning då den är enkel att komma igång med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "Net IPTV med Android Box fungerar helt okej till att börja med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "Net IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare, smidigare och mer långsiktig lösning så är detta sätt inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "Net IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IPTV app MyTVOnline. MyTVOnline apparna är mycket bättre än NET appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/net-iptv-smart-tv.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "NET IPTV" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "150kr" },
          { label: "Erbjuder fritt test", value: "Ja (7 dagar)" },
        ],
        stepsId: "net-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        steps: [
          {
            step: 1,
            image: "/installation/net-iptv-steg-1.jpg",
            body: "Starta appen och notera din MAC-adress som i detta exempel syns bredvid den röda pilen (slutar på 60:04).",
          },
          {
            step: 2,
            image: "/installation/net-iptv-steg-2.jpg",
            body: 'Besök nu https://netiptv.eu/upload och fyll i din mac adress i rutan "Delete All M3u/URL". Tryck sedan på "Delete All" efter att ha bockat i rutan "Im not a robot".',
          },
          {
            step: 3,
            image: "/installation/net-iptv-steg-3.jpg",
            body: 'Fyll nu i din mac adress i rutan "Upload M3U/URL" och tryck sedan på "Add List".',
          },
          {
            step: 4,
            image: "/installation/net-iptv-steg-4.jpg",
            body: 'Här klistrar du in din M3U länk och trycker sedan på "Add List". Starta nu om din app. Klart! 🙂',
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "Net IPTV FAQ",
    items: [
      {
        question: "Hur installerar man Net IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är Net IPTV gratis?",
        answer:
          "Nej, appen är inte gratis. Du kan testa appen gratis i 7 dagar. Sedan behöver du betala för den.",
      },
      {
        question: "Hur får man undertexter på Net IPTV?",
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
        heading: "Net IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här! Sammanfattningsvis så kan man dock påstå att undertexter inte är de bästa för denna app.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med Net IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
