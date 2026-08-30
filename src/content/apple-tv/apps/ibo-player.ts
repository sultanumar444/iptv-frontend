import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "ibo-player",
  pageTitle: "IBO Player Instruktioner",
  pageDescription:
    "IBO Player finns i olika varianter, IBO Player och IBO Player Pro. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#tv-steg" },
    { label: "Nvidia Shield", href: "#formuler-steg" },
    { label: "Android Box", href: "#formuler-steg" },
    { label: "Formuler Box", href: "#formuler-steg" },
    { label: "Dator", href: "#dator-steg" },
  ],
  selectorHeading: "IBO Player Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för IBO Player",
  instructionsIntro:
    "IBO Player är en populär app som blir tillgänglig på fler och fler enheter allt eftersom att tiden går framåt. Appen kan vara smått avancerad att komma igång med och därför rekommenderas den till de som är vana att ladda upp IPTV spellistor. Du laddar upp din spellista via [deras hemsida här](https://iboplayerpro.com/device/login).",
  uploadMethods: ["M3U länk", "Xtream Codes Playlist (inloggningsuppgifter)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Pro versionen finns tillgänglig till vissa Smart TV apparater och Android enheter. De finns dock inte tillgängliga till Apple enheter då apparna är specifikt skapade till android baserade enheter.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned från Playbutiken men även på andra ställen beroende på vilken enhet du vill använda. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus.",
    downloadLabel: "Ladda ned IBO Player här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: [
          "IBO Player med Smart TV är en bra kombination när man har erfarenhet utav IPTV appar. Appen fungerar bra med Smart TV LG och givetvis andra Smart TV märken som Samsung, Sony, Philips osv. I och med att man kan installera IPTV Extreme Pro appen och många andra appar så är Smart TV LG en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar samt mobiler. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
        ],
        specsImage: "/installation/ibo-player.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "IBO Player" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "150kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "tv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/ibo-player-smart-tv-steg-1.jpg",
            body: 'Starta appen och notera ditt "Device ID" och "Device Key".',
          },
          {
            step: 2,
            image: "/installation/ibo-player-smart-tv-steg-2.png",
            body: 'Besök https://iboplayerpro.com/device/login och fyll i dina uppgifter. I detta fall är ditt "Device ID" din "Mac Address" som efterfrågas på hemsidan.',
          },
          {
            step: 3,
            image: "/installation/ibo-player-smart-tv-steg-3.png",
            body: 'Klicka på "Add XC Playlist".',
          },
          {
            step: 4,
            image: "/installation/ibo-player-smart-tv-steg-4.png",
            body: 'Här fyller du i dina inloggningsuppgifter som du fått utav oss på mail. Du fyller i din portal url som du fått på mail i fältet "Host".',
          },
          {
            step: 5,
            image: "/installation/ibo-player-smart-tv-steg-5.png",
            body: 'Välj "Live TV" längst till vänster på bilden eller "Change Server" för att sedan kunna välja din spellista som syns på nästa steg.',
          },
          {
            step: 6,
            image: "/installation/ibo-player-smart-tv-steg-6.png",
            body: "Klart! 🙂",
          },
        ],
      },
      {
        heading: "Nvidia Shield",
        body: "IBO Player med Nvidia Shield är en bra lösning men det finns bättre lösningar att komma igång med. Appen är skapad för att fungera som bäst med Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "IBO Player med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system. Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Formuler Box",
        body: "IBO Player med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box då den har sin egna IP-TV app MyTVOnline. MyTVOnline apparna är mycket bättre än Extreme appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/ibo-player.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "IBO Player" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "150kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "formuler-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        steps: [
          {
            step: 1,
            image: "/installation/ibo-player-formuler-box-steg-1.png",
            body: 'Starta appen och om rutan på bilden dyker upp så väljer du "Allow".',
          },
          {
            step: 2,
            image: "/installation/ibo-player-formuler-box-steg-2.png",
            body: 'Notera din "Mac Address". Denna MAC adress använder du för att ladda upp din spellista på de enheter som kräver uppladdning via deras hemsida. Har du inte alternativet att trycka på "Continue" som syns på bilden nedan så behöver du scrolla ned och följa guiden för just din enhet.',
          },
          {
            step: 3,
            image: "/installation/ibo-player-formuler-box-steg-3.png",
            body: 'Välj "XTREAM-CODES-API". Skriv in dina inloggningsuppgifter som du fått via mail. I rutan "Playlist Name" fyller du i "sverigeiptv.com". Tryck sedan på "ADD PLAYLIST" efter att ha dubbelkollat din stavning!',
          },
          {
            step: 4,
            image: "/installation/ibo-player-formuler-box-steg-4.png",
            body: "Klart!",
          },
        ],
      },
      {
        heading: "Dator",
        body: [
          "IBO Player på Dator fungerar ganska bra. IBO Player är en mångsidig IPTV-app som ger datoranvändare, oavsett om de använder Windows eller Mac, en utmärkt upplevelse med tillgång till ett brett utbud av IPTV-kanaler, filmer och serier. Appen är designad för att fungera smidigt på båda operativsystemen, vilket gör den till ett flexibelt val för olika typer av användare. Med ett intuitivt och lättanvänt gränssnitt är det enkelt att navigera mellan olika kanaler och hitta önskat innehåll snabbt och smidigt.",
          "IBO Player stödjer både HD- och 4K-upplösningar, vilket ger kristallklar bildkvalitet och en förbättrad tittarupplevelse direkt på din dator. Den snabba och stabila streamingupplevelsen säkerställer att du kan titta utan irriterande buffring eller avbrott. Appen fungerar också med en mängd olika IPTV-tjänster, vilket ger dig flexibiliteten att välja och anpassa ditt tittande.",
          "En annan fördel med IBO Player är dess stöd för EPG (Electronic Program Guide), vilket gör det enkelt att planera ditt tittarschema och hålla koll på framtida program och sändningar. Oavsett om du använder en Windows- eller Mac-dator, levererar IBO Player en pålitlig och högkvalitativ IPTV-lösning som passar dina behov.",
        ],
        specsImage: "/installation/ibo-player.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "IBO Player" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "150kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "dator-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/ibo-player-dator-steg-1.png",
            body: 'Starta appen och tryck på "Change Playlist", välj sedan "Add Playlist".',
          },
          {
            step: 2,
            image: "/installation/ibo-player-dator-steg-2.png",
            body: 'Välj "XTREAM-CODES-API" och fyll i dina inloggningsuppgifter du fått utav oss på mail.',
          },
          {
            step: 3,
            image: "/installation/ibo-player-dator-steg-3.png",
            body: "Klart! 🙂",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "IBO Player FAQ",
    items: [
      {
        question: "Hur installerar man IBO Player på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är IBO Player gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på IBO Player?",
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
        heading: "IBO Player Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med IBO Player",
    ctaHref: "/vart-paket",
  },
};

export default guide;
