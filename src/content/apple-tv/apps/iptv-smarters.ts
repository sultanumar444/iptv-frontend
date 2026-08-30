import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iptv-smarters",
  pageTitle: "IPTV Smarters Instruktioner",
  pageDescription:
    "IPTV Smarters finns i tre olika varianter, IPTV Smarters PRO, IPTV Smarters Player och Smarters Player Lite. Appen gör det möjligt för dig att streama kanaler på din IP-TV enhet.",
  deviceTabs: [
    { label: "Apple TV", href: "#tv-steg" },
    { label: "Smart TV", href: "#tv-steg" },
    { label: "Nvidia Shield", href: "#tv-steg" },
    { label: "Android Box", href: "#tv-steg" },
    { label: "Formuler Box", href: "#tv-steg" },
    { label: "Xiaomi Mi", href: "#tv-steg" },
    { label: "Dator", href: "#tv-steg" },
    { label: "Mobil", href: "#mobil-steg" },
    { label: "Surfplatta", href: "#mobil-steg" },
    { label: "Övriga Enheter", href: "#instruktioner" },
  ],
  selectorHeading: "IPTV Smarters Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IPTV Smarters",
  instructionsIntro:
    "IPTV Smarters PRO är som det låter den mest avancerade versionen av apparna. Dock är den väldigt enkel att komma igång med. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: [
    "M3U fil",
    "M3U länk",
    "Via annan enhet",
    "Xtream Codes API (Användarnamn)",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden. Väljer du exempelvis M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Appen är en utav de mest nedladdade IPTV apparna genom tiderna efter [Smart IPTV](https://sverigeiptv.com/smart-iptv-instruktioner/). Pro versionen finns tillgänglig till vissa Smart TV apparater och Android enheter. Den finns dock inte tillgänglig till Apple enheter av någon anledning.",
  ],
  variantSections: [
    {
      heading: "IPTV Smarters Player",
      body: 'IPTV Smarters Player är i princip samma som de andra varianterna. Player versionen har dock endast ett sätt att ladda upp sin spellista med, nämligen med hjälp av ditt "username", "password" och "portal-url" som du får utav oss efter köp/gratis test. Appen tar dessutom mindre plats än PRO versionen då den har färre funktioner.',
      image: "/installation/iptv-smarters-player.jpg",
      imagePosition: "left",
    },
    {
      heading: "Smarters Player Lite",
      body: 'IPTV Smarters Player Lite är i princip samma som de andra varianterna. Skillnaden här är att Lite versionen är en bantad version av de andra apparna. I och med att appen tar mindre plats så är den även enklare. Här kan du endast ladda upp din ip tv spellista med hjälp av ditt "username", "password" och "portal-url" som du får utav oss efter köp/gratis test.',
      image: "/installation/smarters-player-lite.jpg",
      imagePosition: "right",
    },
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Apparna går att ladda ned från företagets hemsida samt Playbutiken och Appstore till din enhet. Ladda endast ned appen från en välkänd källa som exempelvis deras hemsida vi länkat till båda ovan och nedan eller från Appstore eller Playbutiken.",
    downloadLabel: "Ladda ned IPTV Smarters",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned IPTV Smarters till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "iPhone & iPad",
      "Android baserade Mobiler & Surfplattor",
      "Windows",
      "Webläsare i Datorn",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Apple TV",
        body: "IPTV Smarters med Apple TV är dessvärre inte den bästa lösningen då gränssnittet egentligen är skapat för Android enheter. Även om appen finns att ladda ned till Apple TV så kan det vara krångligt att backa eller byta kanal. Även grafiken har inte varit detsamma då bild formatet kan skilja sig beroende på vilken version du har. Det rekommenderas att man istället använder appen IPTVX med Apple TV.",
      },
      {
        heading: "Smart TV",
        body: "IPTV Smarters med Smart TV är en bra kombination när man är nybörjare. Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar samt mobiler. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
      },
      {
        heading: "Dator",
        body: "IPTV Smarters med datorn (Mac eller Windows). Vill du se på IP TV i din dator så är faktiskt appen i fråga en bra app. Detsamma går tyvärr inte att säga när det kommer till många andra enheter men på datorn fungerar den bättre än vanligt. Oavsett om du har en MAC eller Windows dator så kan du använda appen på ett flitigt sätt. IPTV Smarters på MAC dator fungerar bra men troligtvis behöver du ladda ned APK filen från deras hemsida istället för på Appstore. IPTV Smarters på Windows dator fungerar också väldigt bra. Appen laddar du även där helst ned från deras egna hemsida.",
      },
      {
        heading: "Nvidia Shield",
        body: "IPTV Smarters med Nvidia Shield är en snabb och smidig lösning då den är enkel att komma igång med samt att den är skapad för att fungera som bäst med Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "IPTV Smarters med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system. Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "IPTV Smarters med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare och smidigare lösning så är detta inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "IPTV Smarters med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IP TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Smarters appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/iptv-smarters-pro-app.png",
        specsLayout: "row",
        specsCard: true,
        specsWarning:
          "Denna app fungerar generellt sätt väldigt bra men kan dessvärre ha ett icke användarvänligt gränsnitt på vissa Apple TV boxar.",
        specs: [
          { label: "App", value: "IPTV Smarters Pro/Player" },
          { label: "Installationstid", value: "Ca 3 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "27kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "tv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/iptv-smarters-steg-1.jpg",
            body: "Ladda ned appen från Appstore eller från annan källa på din enhet. När du startar appen för första gången ser det ibland ut såhär. Välj TV. Om du inte får upp denna ruta så hoppar du till steg 2 eller 3.",
          },
          {
            step: 2,
            image: "/installation/iptv-smarters-steg-2.jpg",
            body: "Välj Xtreamcodes API och tryck på OK på din fjärr. Om du ser en annan bild när du öppnar appen för första gången så hoppar du till steg 3.",
          },
          {
            step: 3,
            image: "/installation/iptv-smarters-steg-3.jpg",
            body: 'På fältet högst upp skriver du sverigeiptv.com. Fyll i uppgifterna nedan som du fått från oss i din mail inkorg och tryck sen på LÄGG TILL ANVÄNDARE. OBS! Se till att du dubbelkollar stavningen när du fyller i fälten!',
          },
          {
            step: 4,
            image: "/installation/iptv-smarters-steg-4.jpg",
            body: 'Nu laddar du ned listorna du ser på bilden nedan genom att välja respektive lista med din fjärr. Tryck sedan på OK på din fjärr. Får du frågan om en PIN kod trycker du bara på "Skip".',
          },
          {
            step: 5,
            image: "/installation/iptv-smarters-steg-5.png",
            body: 'Övrig info: För att få in EPG (programguide) så trycker du bara på "Update EPG" eller "Install EPG". På vissa enheter krånglar dock denna funktion och även FHD (Full HD) kanalerna kan lagga. Om du har dessa problem rekommenderar vi dig att avvakta upp till en timme då problemet ibland kan ligga i att kanalerna eller EPGn behöver ladda i bakgrunden.',
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
        body: "IPTV Smarters med Mobilen är en snabb och smidig lösning om man vill komma igång på nolltid. IP tv i mobilen med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Dock är appen egentligen skapad till android enheter så om du har en iPhone blir upplevelsen inte den bästa. Då rekommenderas det istället att använda appen IPTVX.",
      },
      {
        heading: "Surfplatta",
        body: "IPTV Smarters med Surfplatta är en snabb och smidig lösning om man vill komma igång snabbt på sin iPad eller android baserade surfplatta. IP tv i surfplattan med appen är en väldigt enkel lösning om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX.",
      },
    ],
    specsImage: "/installation/smarters-player-lite.webp",
    specsCard: true,
    specs: [
      { label: "App", value: "IPTV Smarters Player & Pro" },
      { label: "Installationstid", value: "Ca 3 min" },
      { label: "Wifi/Kabel", value: "Stöd för båda" },
      { label: "Kostnad", value: "29kr" },
      { label: "Erbjuder fritt test", value: "Ja" },
    ],
    instructionsHeading: "Instruktioner",
    stepsColumns: 4,
    stepsPortraitAspectClass: "aspect-[9/19] sm:aspect-[13/6]",
    stepsNumberLayout: "stacked",
    stepsGapClass: "gap-1.5",
    stepsPortraitMaxWidthClass: "max-w-[300px]",
    steps: [
      {
        step: 1,
        image: "/installation/iptv-smarters-mobil-steg-1.jpg",
        body: 'Starta appen och fyll i uppgifterna du fått utav oss på mail. På fältet högst upp eller om det står "Playlist name" så fyller du i sverigeiptv.com. Tryck sedan på "Add User".',
      },
      {
        step: 2,
        image: "/installation/iptv-smarters-mobil-steg-2.jpg",
        body: "Tryck nu på din nya lista.",
      },
      {
        step: 3,
        image: "/installation/iptv-smarters-mobil-steg-3.jpg",
        body: 'Du kan ställa in ett barnlås. Om du inte vill göra det så trycker du på "Skip".',
      },
      {
        step: 4,
        image: "/installation/iptv-smarters-mobil-steg-4.jpg",
        body: "Klart! 🙂",
      },
    ],
  },
  faqSection: {
    heading: "IPTV Smarters FAQ",
    items: [
      {
        question: "Hur installerar man IPTV Smarters på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är IPTV Smarters gratis?",
        answer:
          "Ja, appen är gratis. Vi rekommenderar dock att man köper premium versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på IPTV Smarters Pro?",
        answer:
          "Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll. Dock har många rapporterat att de senare versionerna av appen inte längre stöder undertexter. Därför rekommenderas en annan app.",
      },
      {
        question: "Hur installerar man IPTV Smarters på en bärbar dator?",
        answer:
          "Installera appen på din bärbara dator genom att först ladda ned appen från deras hemsida med hjälp av länken ovan. När du gjort det så följer du även guiden ovan.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "IPTV Smarters Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med IPTV Smarters",
    ctaHref: "/vart-paket",
  },
};

export default guide;
