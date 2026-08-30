import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "mytvonline",
  pageTitle: "MyTVOnline Instruktioner",
  pageDescription:
    "MyTVOnline instruktioner ser du på denna sida. Appen finns i tre olika varianter än så länge och den fjärde är på väg. MyTVOnline1, MyTVOnline2, MyTVOnline3 och snart MyTVOnline4. Appen gör det möjligt för dig att streama kanaler på din IP-TV enhet, i detta fall din Formuler Box oavsett modell.",
  deviceTabs: [{ label: "Formuler Box", href: "#mytvonline-steg" }],
  selectorHeading: "MyTVOnline Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för MyTVOnline",
  instructionsIntro:
    "MyTVOnline apparna kan laddas ned till din box men även till din mobil inom kort (MyTVOnline+). Appen är enkel och smidig att komma igång med på din box oavsett modell och rekommenderas till alla som har en Formuler box. Även om det är en Android Box som kan tillhandahålla flera olika appar så rekommenderas det att du endast använder MyTVOnline.",
  uploadMethodsIntro: "På denna sida ser du instruktioner för följande appar:",
  uploadMethods: ["MyTVOnline1", "MyTVOnline2", "MyTVOnline3"],
  instructionsBody: [
    "Appen går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) i din box men bör redan finnas där vid start.",
    "MyTVOnline3 är den mest avancerade versionen av apparna än så länge innan MyTVOnline4 släpps. Den är hyffsat enkel att komma igång med och appen tillåter dig att ladda upp dina kanaler på följande sätt: M3U länk, Xtream Codes API (Användarnamn) eller Via Portal.",
    "Det rekommenderas vanligvis att man laddar upp sin IPTV spellista med Xtream-codes API (alltså med sitt användarnamn, lösenord och Portal URL som man får utav oss vid köp eller gratis test). MyTVOnline är dock ett undantag då du använder en box. Här rekommenderas det istället att du kommer igång via Portal alternativet. Längre ned ser du hur.",
  ],
  variantSections: [
    {
      heading: "MyTVOnline 1",
      body: "MyTVOnline1 fungerar bra med äldre Boxar. I och med att man kan installera MyTVOnline1 app appen och många andra appar så är de äldre boxarna en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv. MyTVonline1 är den första appen i serien där det finns totalt tre olika versioner i skrivande stund.",
      image: "/installation/mytvonline-1.jpg",
      imagePosition: "left",
    },
    {
      heading: "MyTVOnline 2",
      body: "MyTVOnline2 fungerar bra med medel åldriga boxar. I och med att man kan installera MyTVOnline2 appen och många andra appar så rekommenderar vi dessa. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv. MyTVonline2 är just nu den näst senaste appen i serien.",
      image: "/installation/mytvonline-2.jpg",
      imagePosition: "right",
    },
    {
      heading: "MyTVOnline 3",
      body: "MyTVOnline3 fungerar bra med nyare boxar. I och med att man kan installera MyTVOnline3 appen och många andra appar så rekommenderar vi dessa på din Formula enhet. MyTVonline3 är just nu den senaste appen i serien där appen fungerar som bäst med senare modeller av Formula boxarna. Den fjärde versinen av appen borde släppas inom kort (beräknat år 2025).",
      image: "/installation/mytvonline-3.png",
      imagePosition: "left",
    },
    {
      heading: "MyTVOnline 4",
      body: "MyTVOnline4 har ännu inte släppts. Den förväntas släppas någon gång år 2025 men det är endast ett preliminärt datum. Appen förväntas att släppas tillsammans med en senare version av Formula boxen. Håll utkik på deras hemsida så missar du inte släppet!",
      image: "/installation/mytvonline-4.png",
      imagePosition: "right",
    },
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      'Apparna finns redan i din box vid uppstart beroende på vilken box du har i Formula serien. Om du av misstag skulle råka ta bort appen så kan den laddas ned i boxens "marketplace" eller appbutik. Du kan även fabriksåterställa boxen och då dyker den upp igen.',
    downloadLabel: "Ladda ned MyTVOnline här",
    introAfterDownload: [],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "MyTVOnline1",
        body: "MyTVOnline1 är en snabb och smidig lösning då den är enkel att komma igång med. Dock är appen till för de äldre boxarna.",
        specsImage: "/installation/mytvonline-1.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "MyTVOnline1" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "0kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "mytvonline-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/mytvonline1-steg-1.png",
            body: 'Starta boxen och gå in på MyTVonline1 appen. Gå sedan till "Menu" och välj sedan "Edit Portal". När du står på "Edit Portal som på bilden trycker du på högerpilen. Tryck sedan på "Edit" igen.',
          },
          {
            step: 2,
            image: "/installation/mytvonline1-steg-2.png",
            body: "Fyll nu i din Portal URL du fått utav oss på mailen. Tryck sedan på OK knappen på din fjärr. Om du ännu inte gjort det så bör du nu genomföra en beställning och ange ditt ID till oss som finns i inställningarna eller på undersidan av din box.",
          },
          {
            step: 3,
            image: "/installation/mytvonline1-steg-3.png",
            body: "Klart! 🙂",
          },
        ],
      },
      {
        heading: "MyTVOnline2",
        body: "MyTVOnline2 fungerar jättebra på medelåldriga boxar då appen lanserades för några år sedan. Se instruktionerna nedan.",
        specsImage: "/installation/mytvonline-2.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "MyTVOnline2" },
          { label: "Installationstid", value: "Ca 3 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "0kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "mytvonline2-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/mytvonline2-steg-1.png",
            body: 'Starta boxen och gå in på appen MyTVonline2. Välj sedan "Add Portal".',
          },
          {
            step: 2,
            image: "/installation/mytvonline2-steg-2.png",
            body: 'På fältet "Portal Nickname" fyller du i sverigeiptv.com. I fältet "Portal URL" fyller du i din portal url som du fått utav oss på mailen. Om du inte redan gjort det så bör du nu lägga en beställning hos oss så att du kan ange ditt box ID som finns i inställningarna eller på undersidan av boxen.',
          },
          {
            step: 3,
            image: "/installation/mytvonline2-steg-3.jpg",
            body: "Klart! 🙂",
          },
        ],
      },
      {
        heading: "MyTVOnline3",
        body: "MyTVOnline3 är för tillfället den senaste appen i serien innan 4:an lanseras inom kort. Denna app fungerar utmärkt med de senare boxarna och rekommenderas starkt över andra Android baserade appar. Se instruktionerna nedan för denna app.",
        specsImage: "/installation/mytvonline-3-specs.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "MyTVOnline3" },
          { label: "Installationstid", value: "Ca 3 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "0kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "mytvonline3-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/mytvonline3-steg-1.jpg",
            body: 'Starta boxen och gå in på appen MyTVOnline3. Gå in på "Content Sources". På "Portal Nickname" fyller du i namnet sverigeiptv.com. I fältet "Portal URL" fyller du i din Portal URL du fått utav oss på mailen. Tryck sedan på OK knappen på din fjärr. Om du ännu inte gjort det så bör du nu genomföra en beställning och ange ditt ID till oss som finns i inställningarna eller på undersidan av din box.',
          },
          {
            step: 2,
            image: "/installation/mytvonline3-steg-2.jpg",
            body: "Nu ser du alla kanaler i din enhet.",
          },
          {
            step: 3,
            image: "/installation/mytvonline3-steg-3.jpg",
            body: "Starta om din box. Klart! 🙂",
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "MyTVOnline FAQ",
    items: [
      {
        question: "Hur installerar man MyTVOnline på sin Formuler box?",
        answer: "Du behöver inte installera appen. Den finns redan på din enhet.",
      },
      {
        question: "Är MyTVOnline gratis?",
        answer:
          "Ja, appen är gratis då den ingår i din box. När du köper boxen har du alltså även betalat för appen.",
      },
      {
        question: "Hur får man undertexter på MyTVOnline?",
        answer:
          'Undertexter på appen får du genom att trycka på den röda knappen på din fjärrkontroll. Du kan även välja "Subtitles" i menyn på varje enskild kanal för att få fram undertexter om det finns tillgängligt.',
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
