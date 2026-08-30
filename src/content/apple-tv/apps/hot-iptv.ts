import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "hot-iptv",
  pageTitle: "HOT IPTV Instruktioner",
  pageDescription:
    "HOT IPTV appen finns tillgänglig till datorn och TVn. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet och är väldigt enkel att använda!",
  deviceTabs: [
    { label: "Smart TV", href: "#instruktioner" },
    { label: "Nvidia Shield", href: "#instruktioner" },
    { label: "Android Box", href: "#instruktioner" },
    { label: "Formuler Box", href: "#instruktioner" },
    { label: "Dator", href: "#hot-iptv-steg" },
  ],
  selectorHeading: "HOT IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för HOT IPTV",
  instructionsIntro:
    "HOT IPTV är som det låter den mest avancerade versionen av apparna. Appen är relativt enkel att komma igång med. Du behöver besöka deras hemsida och ladda upp din spellista den vägen. Du laddar upp din spellista här: https://hotplayer.app/upload. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: [
    "M3U länk",
    "Xtream Codes Playlist (inloggningsuppgifter)",
    "MAG/Stalker Portal",
  ],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss. Pro versionen finns tillgänglig till vissa Smart TV apparater och Android enheter. De finns dock inte tillgängliga till Apple enheter då apparna är specifikt skapade till android baserade enheter.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned från Playbutiken och Microsoft Store. Det finns även APK filer tillgängliga att ladda ned men detta rekommenderas inte då många kan innehålla virus. APK filen från HOT IPTV:s egna hemsida är okej att ladda ned.",
    downloadLabel: "Ladda ned HOT IPTV här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: [
          "HOT IPTV med Smart TV är en bra kombination när man har erfarenhet utav IPTV appar. Appen fungerar bra med Smart TV LG och givetvis andra Smart TV märken som Samsung, Sony, Philips osv. I och med att man kan installera IPTV Extreme Pro appen och många andra appar så är Smart TV LG en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "HOT IPTV är en populär app för Smart TV som ger användare tillgång till ett enormt utbud av IPTV-kanaler, filmer och serier i hög kvalitet. Appen är designad för att fungera smidigt på Smart TV-enheter och erbjuder en användarvänlig upplevelse med snabb navigering och enkel kanalhantering. Med stöd för HD- och 4K-upplösningar kan du njuta av kristallklar bild och stabil streaming, vilket förbättrar din TV-tittarupplevelse. HOT IPTV har också stöd för EPG (Electronic Program Guide), vilket gör det lättare att hålla koll på program och kanaler. För dem som söker ett omfattande och tillförlitligt IPTV-alternativ är HOT IPTV ett utmärkt val.",
          "Appen är smidig på TV apparater då den är skapad för att fungera som bäst på Smart TV system, Android TV och Android boxar samt mobiler. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate.",
        ],
      },
      {
        heading: "Nvidia Shield",
        body: [
          "HOT IPTV med Nvidia Shield är en bra lösning men det finns bättre lösningar att komma igång med. Appen är skapad för att fungera som bäst med Android baserade system.",
          "HOT IPTV är en högpresterande app för Nvidia Shield, designad för att erbjuda en förstklassig IPTV-upplevelse. Med ett enormt urval av TV-kanaler, filmer och serier i HD och 4K, utnyttjar appen Nvidia Shields kraftfulla hårdvara för att leverera snabb och stabil streaming. Den användarvänliga designen och enkla navigeringen gör det lätt att bläddra bland tusentals kanaler och hitta ditt favoritmaterial. Appen stöder även EPG (Electronic Program Guide), vilket gör det enkelt att planera och hantera ditt tittarschema. HOT IPTV på Nvidia Shield ger en premiumupplevelse för användare som söker högkvalitativ IPTV-streaming på sin enhet.",
          "Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
        ],
      },
      {
        heading: "Android Box",
        body: [
          "HOT IPTV med Android Box fungerar helt okej till att börja med. Appen är ju skapad för att fungera som bäst med Android baserade system.",
          "HOT IPTV är en kraftfull app för Android Box, som ger användare tillgång till ett stort utbud av IPTV-kanaler, filmer och serier i hög kvalitet. Appen är optimerad för Android-enheter och erbjuder en smidig och stabil streamingupplevelse. Med stöd för upplösningar som HD och 4K kan du njuta av kristallklar bild och snabbt byta mellan kanaler. HOT IPTVs användarvänliga gränssnitt gör det enkelt att navigera och hitta dina favoritprogram. Dessutom finns stöd för EPG (Electronic Program Guide), vilket gör att du enkelt kan hålla koll på kommande program och planera ditt tittande. HOT IPTV är ett utmärkt val för underhållning på Android Box.",
          "Men även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
        ],
      },
      {
        heading: "Formuler Box",
        body: "HOT IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box då den har sin egna IP-TV app MyTVOnline. MyTVOnline apparna är mycket bättre än HOT Player appen och därav rekommenderas det att man använder de istället.",
      },
      {
        heading: "Dator",
        body: [
          "HOT IPTV på Dator är en bra kombination när man har erfarenhet utav IPTV appar. Appen fungerar väldigt bra.",
          "HOT IPTV Player är en avancerad IPTV-app för datorer som erbjuder användare en omfattande underhållningsupplevelse med tillgång till tusentals IPTV-kanaler, filmer och serier i hög kvalitet. Appens användarvänliga och intuitiva gränssnitt gör det enkelt att navigera mellan olika kanaler och innehåll. Oavsett om du vill titta på sport, nyheter, filmer eller TV-serier, erbjuder HOT Player en smidig och snabb upplevelse med stabil streaming.",
          "Appen stödjer både HD- och 4K-upplösningar, vilket gör att du kan njuta av kristallklar bildkvalitet på din dator. Den är också optimerad för att säkerställa att streaming sker utan störningar eller buffring, vilket ger en sömlös visuell upplevelse. För dem som vill planera sitt tittande erbjuder HOT Player EPG (Electronic Program Guide), vilket gör det lätt att hålla koll på scheman för dina favoritprogram och framtida sändningar.",
          "En annan styrka med HOT Player är dess flexibilitet och stöd för olika videoformat, vilket säkerställer kompatibilitet med många olika IPTV-tjänster. Detta gör appen till en pålitlig och praktisk lösning för IPTV-streaming på dator. Med HOT Player får du ett mångsidigt och kraftfullt verktyg för att maximera din IPTV-upplevelse och njuta av ett brett utbud av innehåll direkt på din skärm.",
        ],
        specsImage: "/installation/hot-player.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "HOT IPTV Player" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "150kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "hot-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/hot-player-steg-1.png",
            body: "Starta appen och notera din MAC-adress som står i mitten av rutan med orange text.",
          },
          {
            step: 2,
            image: "/installation/hot-player-steg-2.png",
            body: 'Besök: https://hotplayer.app/upload och fyll i din MAC adress i fältet "Your MAC Address" under fliken "Upload your playlist". Tryck sedan på "Next".',
          },
          {
            step: 3,
            image: "/installation/hot-player-steg-3.png",
            body: 'I rutan "Source" väljer du "Xtream Code", under fältet "Host" fyller du i din portal URL som du fått med dina andra inloggningsuppgifter i vårt välkomstmail. Under fältet "Playlist name" fyller du i "sverigeiptv.com". Tryck sedan på "Save" och ladda om appen i din box/TV.',
          },
          {
            step: 4,
            image: "/installation/hot-player-steg-4.png",
            body: "Klart! 🙂",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "HOT IPTV FAQ",
    items: [
      {
        question: "Hur installerar man HOT IPTV på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är HOT IPTV gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på HOT IPTV?",
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
        heading: "HOT IPTV Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med HOT IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
