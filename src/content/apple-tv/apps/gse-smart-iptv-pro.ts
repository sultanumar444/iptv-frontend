import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "gse-smart-iptv-pro",
  pageTitle: "GSE Smart IPTV Instruktioner",
  pageDescription:
    "GSE Smart IPTV instruktioner ser du på denna sida. Appen finns i tre olika varianter och kommer från olika utvecklare, GSE Smart IPTV PRO, GSE Player och GSE Online. Appen gör det möjligt för dig att streama kanaler på din IP-TV enhet.",
  deviceTabs: [
    { label: "Apple TV", href: "#gse-steg" },
    { label: "Smart TV", href: "#gse-steg" },
    { label: "Nvidia Shield", href: "#gse-steg" },
    { label: "Android Box", href: "#gse-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
    { label: "Xiaomi Mi", href: "#gse-steg" },
    { label: "Formuler Box", href: "#gse-steg" },
  ],
  selectorHeading: "GSE Smart IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för GSE Smart IPTV PRO",
  instructionsIntro:
    "GSE Smart IPTV app kan laddas ned till de flesta enheterna idag. Appen är alltså relativt enkel och smidig att komma igång med och rekommenderas till alla som är vana med appen sedan tidigare. Det är dock inte den enklaste appen att komma igång med. Vi rekommenderar att man börjar med [IPTV Smarters](https://sverigeiptv.com/iptv-smarters-instruktioner/) för att senare gå över till en mer avancerad app som således är lite stabilare (exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/)) samt har ett bättre gränssnitt om man är nybörjare. Vi har på denna sida samlat guiderna för appen så att du snabbt kan komma igång på just din enhet oavsett om du har en Apple TV, Smart TV eller annan enhet. På denna sida ser du instruktioner för apparna (observera att dessa appar har olika utvecklare. De kommer alltså inte från samma app utvecklare/företag): Apple TV, Smart TV, Nvidia Shield, Xiaomi Mi Box, Xiaomi Mi Stick, Firestick, Android Box, Mobilen och Surfplattan.",
  instructionsDownloadLinks: [
    {
      label: "Playbutiken",
      href: "https://play.google.com/store/apps?device=tv&hl=sv&gl=sv",
    },
    { label: "Appstore", href: "https://www.apple.com/se/app-store/" },
  ],
  uploadMethodsIntro:
    "GSE Smart IPTV PRO är som det låter den mest avancerade versionen av apparna. Dock är den hyffsat enkel att komma igång med. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtream Codes API (Användarnamn)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IP-TV spellista med Xtream-codes API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). GSE Smart IPTV PRO är en utav de mest nedladdade IPTV apparna de senaste fyra åren till Apple TV. Pro versionen finns även tillgänglig till vissa Smart TV apparater och Android enheter.",
  ],
  variantSections: [
    {
      heading: "GSE Player",
      body: 'GSE Smart IPTV Player är i princip samma som de andra varianterna. Player versionen har dock endast två sätt att ladda upp sin spellista med, nämligen med hjälp av ditt "username", "password" och "portal-url" som du får utav oss efter köp/gratis test. Även via M3U länk. Appen tar dessutom mindre plats än PRO versionen då den har färre funktioner. Instruktioner för just denna app ser du här.',
      image: "/installation/gse-player.jpg",
      imagePosition: "right",
    },
    {
      heading: "GSE Online",
      body: 'GSE Smart IPTV Online exempelvis är i princip samma som de andra varianterna. Skillnaden här är att Online versionen är en bantad version av de andra apparna. I och med att appen tar mindre plats så är den även enklare. Här kan du även ladda upp din ip tv spellista med hjälp av ditt "username", "password" och "portal-url" som du får utav oss efter köp/gratis test. Även m3u fungerar här. Instruktioner för just denna app ser du här.',
      image: "/installation/gse-online.jpg",
      imagePosition: "left",
    },
  ],
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Apple TV",
        body: "GSE Smart IPTV PRO med Apple TV fungerar helt okej. Den var dock bättre förr när det inte fanns fler alternativ till bättre appar. Även om appen finns att ladda ned till Apple TV så är inte gränsnittet det bästa och användarvänligheten är inte heller på topp. Även grafiken har inte varit detsamma då bild formatet kan skilja sig beroende på vilken version du har. Det rekommenderas att man istället använder appen IPTVX med Apple TV.",
      },
      {
        heading: "Smart TV",
        body: "GSE Smart IPTV PRO med Smart TV är en bra kombination när man är nybörjare eller när andra alternativ inte finns. Appen är relativt smidig på TV apparater då den är skapad för att fungera bra på alla enheter. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
      {
        heading: "Nvidia Shield",
        body: "GSE IPTV med Nvidia Shield är därmed en snabb och smidig lösning då den är enkel att komma igång med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "GSE Smart IPTV PRO med Android Box fungerar helt okej till att börja med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "GSE PRO med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare, smidigare och mer långsiktig lösning så är detta sätt inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "GSE Smart PRO med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IPTV app MyTVOnline. MyTVOnline apparna är mycket bättre än GSE appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/gse-smart-iptv-pro-appletv.jpg",
        specsLayout: "row",
        specs: [
          { label: "App", value: "GSE Smart IPTV Pro" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "50kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "gse-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        steps: [
          {
            step: 1,
            image: "/installation/gse-smart-iptv-pro-steg-1.jpg",
            body: 'Starta appen och tryck på "Xtream-codes API".',
          },
          {
            step: 2,
            image: "/installation/gse-smart-iptv-pro-steg-2.jpg",
            body: 'Tryck på plusstecknet eller "Lägg till spellista" och fyll i uppgifterna du fått utav oss på mail.',
          },
          {
            step: 3,
            image: "/installation/gse-smart-iptv-pro-steg-3.jpg",
            body: 'När du sparat din nya lista trycker du på den. I detta fall heter listan "KANALER".',
          },
          {
            step: 4,
            image: "/installation/gse-smart-iptv-pro-steg-4.jpg",
            body: "Nu är det bara att välja land för att se kanalerna för det valda landet. Klart! 🙂",
          },
        ],
      },
    ],
  },
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Apparna går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) och [Appstore](https://www.apple.com/se/app-store/) till din enhet. Ladda dock endast ned appen från en välkänd källa som exempelvis deras hemsida vi länkat till båda ovan och nedan eller från Appstore eller Playbutiken. Detta eftersom att man av misstag därmed kan ladda ned virus om man inte är vaksam.",
    downloadLabel: "Ladda ned GSE Smart IPTV",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned GSE Smart IPTV till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "[iPhone & iPad](https://apps.apple.com/us/app/gse-smart-iptv-pro/id6443923265)",
      "[Android baserade Mobiler & Surfplattor](https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2&hl=en_US)",
      "[Android Boxar](https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2&hl=en_US)",
      "[Smart TV](https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2&hl=en_US)",
    ],
  },
  mobileSection: {
    id: "mobil-instruktioner",
    devices: [
      {
        heading: "Mobil",
        body: "GSE Smart IPTV PRO med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP tv i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. På iPhone rekommenderas istället appen IPTVX och på Android baserade mobiler rekommenderas appen IPTV Player.",
      },
      {
        heading: "Surfplatta",
        body: "GSE Smart IPTV PRO med Surfplatta är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP tv i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX. Har man en android baserad surfplatta rekommenderas istället appen IPTV Player.",
      },
    ],
    specsImage: "/installation/gse-smart-iptv-pro-mobil-app.png",
    specs: [
      { label: "App", value: "GSE Smart IPTV Pro" },
      { label: "Installationstid", value: "Ca 5 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "69kr" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 4,
    stepsNumberLayout: "stacked",
    stepsPortraitAspectClass: "aspect-[4/5]",
    steps: [
      {
        step: 1,
        image: "/installation/gse-smart-iptv-pro-mobil-steg-1.jpg",
        body: 'Starta appen och tryck på "Xtream-codes API".',
      },
      {
        step: 2,
        image: "/installation/gse-smart-iptv-pro-mobil-steg-2.jpg",
        body: 'Tryck på plusstecknet eller "Lägg till spellista" och fyll i uppgifterna du fått utav oss på mail.',
      },
      {
        step: 3,
        image: "/installation/gse-smart-iptv-pro-mobil-steg-3.jpg",
        body: 'När du sparat din nya lista trycker du på den. I detta fall heter listan "lol.bz".',
      },
      {
        step: 4,
        image: "/installation/gse-smart-iptv-pro-mobil-steg-4.jpg",
        body: 'Klart! Tryck nu på exempelvis "Live" för att se alla kanaler.',
      },
    ],
  },
  faqSection: {
    heading: "GSE Smart IPTV FAQ",
    items: [
      {
        question: "Hur installerar man GSE Smart IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är GSE Smart IPTV PRO gratis?",
        answer:
          "Ja, appen är gratis. Vi rekommenderar dock att man köper premium versionen för ca 69kr då den låser upp en del bra funktioner samt tar bort den otroligt irriterande reklamen.",
      },
      {
        question: "Hur får man undertexter på GSE Smart IPTV Pro?",
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
        heading: "GSE Smart IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här! Sammanfattningsvis så kan man dock påstå att undertexter inte är de bästa för denna app.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med GSE Smart IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
