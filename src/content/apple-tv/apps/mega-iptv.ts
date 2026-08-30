import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "mega-iptv",
  pageTitle: "Mega IPTV Player Instruktioner",
  pageDescription:
    "Mega IPTV Player finns tillgänglig till flera enheter såsom Smart TV, boxar och till mobilen och surfplattan. Appen gör det möjligt för dig att streama kanaler på din IP TV enhet.",
  deviceTabs: [{ label: "Mobil", href: "#mega-iptv-steg" }],
  selectorHeading: "Mega IPTV Player Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för Mega IPTV Player",
  instructionsIntro:
    "Mega IPTV Player är en någorlunda ny app som finns tillgänglig till flera olika enheter. Mega IPTV Player är enkel att komma igång med då du endast behöver fylla i dina inloggningsuppgifter direkt i appen. Du behöver alltså inte ladda upp din spellista via deras hemsida som med många andra appar. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Xtream Codes Playlist (inloggningsuppgifter)"],
  instructionsBody: [
    "Det rekommenderas att man laddar upp sin IPTV spellista med Xtream Codes (alltså med sina inloggningsuppgifter som man får utav oss vid köp eller gratis test). Detta eftersom att din EPG (Programguide) då installeras per automatik i bakgrunden.",
    "Om du exempelvis väljer M3U så behöver du manuellt fylla i din EPG länk som du får utav oss.",
  ],
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Mobil",
        body: [
          "Mega IPTV Player med Mobilen är en helt okej lösning om man inte har några andra alternativ. IPTV i mobilen med denna app är en lite krångligare lösning om man vill titta på tv på resande fot. Det finns med andra ord bättre appar som är lämpade till mobilen såsom IPTV Smarters. Har du en iPhone så rekommenderas det istället att du använder appen IPTVX.",
          "Appen är en kraftfull applikation som erbjuder en smidig och flexibel lösning för att streama IPTV-innehåll direkt på din mobil och surfplatta. Med den ökade populariteten för IPTV (Internet Protocol Television) har appar som denna blivit oumbärliga för användare som söker tillgång till tusentals kanaler, filmer, serier och annat multimedia-innehåll via sina mobila enheter. Denna app har blivit populär tack vare sin enkelhet, användarvänliga gränssnitt och förmågan att leverera högkvalitativ streaming oavsett var du befinner dig.",
        ],
      },
      {
        heading: "Surfplatta",
        body: [
          "Mega IPTV Player med Surfplatta är bättre än på mobilen om man vill komma igång på sin Android baserade surfplatta. IP-tv i surfplattan med fungerar helt okej om man vill titta på tv på resande fot. Har man dock en iOS (iPad) enhet så rekommenderas istället appen IPTVX.",
          "IPTV är en teknologi som tillåter överföring av TV-program och annat videoinnehåll över internet, i stället för genom traditionella sändningssätt som satellit eller kabel. Med IPTV behöver du inte längre vara beroende av fasta kanallistor eller dyra TV-abonnemang. Genom appar som denna får du möjlighet att se på TV-kanaler, filmer och serier på begäran, vilket ger dig full kontroll över vad och när du tittar.",
          "Appen sticker ut i mängden genom att erbjuda en sömlös upplevelse på både mobil och surfplatta. Den har stöd för ett brett utbud av IPTV-format och fungerar på en rad olika plattformar, vilket gör den till ett mångsidigt verktyg för alla typer av användare, oavsett deras tekniska erfarenhet.",
        ],
        specsImage: "/installation/mega-iptv-player.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "Mega IPTV Player" },
          { label: "Installationstid", value: "Ca 6 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "299kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "mega-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 5,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/mega-iptv-player-steg-1.jpg",
            body: "Starta appen och tryck på plus tecknet i hörnet.",
          },
          {
            step: 2,
            image: "/installation/mega-iptv-player-steg-2.jpg",
            body: 'Välj "Xtream Login".',
          },
          {
            step: 3,
            image: "/installation/mega-iptv-player-steg-3.jpg",
            body: 'Fyll i sverigeiptv.com under rubriken "Namnlista". Fyll sedan i resten av uppgifterna du fått utav oss på mail.',
          },
          {
            step: 4,
            image: "/installation/mega-iptv-player-steg-4.jpg",
            body: "Tryck nu på texten sverigeiptv.com för att komma åt din nya lista.",
          },
          {
            step: 5,
            image: "/installation/mega-iptv-player-steg-5.jpg",
            body: "Klart! 🙂",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "Mega IPTV Player FAQ",
    items: [
      {
        question: "Hur installerar man Mega IPTV Player på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är Mega IPTV Player gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan testa den gratis men vi rekommenderar att man köper PRO versionen för ca 30kr då den låser upp en del bra funktioner.",
      },
      {
        question: "Hur får man undertexter på Mega IPTV Player?",
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
        heading: "Enkel installation och användning",
        body: [
          "En av Mega IPTV Players största fördelar är den enkla installationen. Appen är tillgänglig för både Android och iOS-enheter, vilket innebär att du kan ladda ner den direkt från Google Play eller App Store. Efter installationen är det bara att ladda upp din M3U- eller XSPF-fil, vilket är filformat som vanligtvis används för att distribuera IPTV-kanaler. För de som inte är bekanta med dessa filformat kan det låta komplicerat, men denna app gör processen enkel genom att erbjuda detaljerade instruktioner och ett intuitivt användargränssnitt.",
          "När du väl har laddat upp din kanalista kan du enkelt navigera mellan olika kanaler och innehåll. Gränssnittet är utformat för att vara användarvänligt, vilket gör det enkelt för både nybörjare och erfarna användare att hantera sina IPTV-listor. Den inbyggda sökfunktionen gör det också lätt att hitta specifika program, filmer eller serier utan att behöva bläddra igenom hela listan.",
        ],
      },
      {
        heading: "Funktionalitet och anpassningsmöjligheter",
        body: [
          "Appen erbjuder en mängd funktioner som förbättrar användarupplevelsen. För det första stöder appen flera format, vilket innebär att den kan spela upp både livekanaler och video-on-demand-innehåll (VOD). Detta gör att du inte bara kan titta på direktsända program, utan även strömma filmer och serier på begäran, precis som du skulle göra med andra streamingtjänster.",
          "Appen har också stöd för elektronisk programguide (EPG), vilket innebär att du kan se vilka program som sänds och planera ditt tittande i förväg. Detta är en mycket uppskattad funktion för de som vill ha full kontroll över sitt IPTV-tittande. EPG ger en tydlig översikt över aktuella och kommande program, vilket gör det lättare att navigera mellan olika kanaler och tidsplanera sin underhållning.",
          "En annan funktion som är värd att nämna är Mega IPTV Players stöd för flera spellistor. Detta innebär att du kan organisera dina kanaler i olika kategorier eller listor, till exempel en lista för nyhetskanaler, en för sportkanaler och en annan för underhållning. Detta gör det lättare att hålla ordning på ditt innehåll och snabbt hitta vad du vill titta på.",
        ],
      },
      {
        heading: "Mega IPTV Player Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här!",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med Mega IPTV Player",
    ctaHref: "/vart-paket",
    layout: "single",
  },
};

export default guide;
