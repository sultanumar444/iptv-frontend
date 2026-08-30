import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "myiptv-player",
  pageTitle: "MyIPTV Player Instruktioner",
  pageDescription:
    "MyIPTV Player instruktioner ser du på denna sida. Appen finns tillgänglig till Windows datorer från exempelvis Lenovo, Acer, Asus och många fler. Med appen kan du se på IPTV både med Windows 10 och Windows 11.",
  deviceTabs: [
    { label: "Windows", href: "#myiptv-player-steg" },
    { label: "Xbox", href: "#myiptv-player-steg" },
  ],
  selectorHeading: "MyIPTV Player Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för MyIPTV Player",
  instructionsIntro:
    "MyIPTV Player app kan laddas ned till de flesta enheterna idag. Appen är alltså relativt enkel och smidig i utseendet men lite svår att komma igång med och rekommenderas till alla som är vana med appen sedan tidigare. Det är dock inte den enklaste appen att komma igång med som sagt och vi rekommenderar därför [IPTV Smarters](/installationsguider/apple-tv/iptv-smarters) istället om du ska använda din PC då den tenderar att vara stabilare.",
  uploadMethodsIntro:
    "På denna sida ser du instruktioner för appen till följande märken men även alla märken där Windows finns installerat:",
  uploadMethods: [
    "Asus",
    "Acer",
    "Lenovo",
    "Chromebook",
    "Dell",
    "HP",
    "MSI",
    "Xbox",
  ],
  instructionsBody: [],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen kan laddas ned från Microsoft Store. Ladda inte ned appen från någon annan källa som exempelvis deras en främmande hemsida eller liknande. Detta eftersom att man av misstag därmed kan ladda ned virus om man inte är vaksam.",
    downloadLabel: "Ladda ned MyIPTV Player här",
    introAfterDownload: [
      "MyIPTV Player är en populär app för att strömma IPTV-innehåll på Windows och Xbox-enheter. Den fungerar som en mediespelare med stöd för M3U-länkar och kanaluppgifter från din IPTV-leverantör, vilket ger dig enkel åtkomst till live-TV, filmer och serier via internet. Appen har ett användarvänligt gränssnitt med stöd för elektroniska programguider (EPG), flera ljudspår och undertexter. Du kan också spela in program och skapa favoritlistor för en anpassad tittarupplevelse. MyIPTV Player erbjuder en pålitlig och smidig lösning för IPTV-streaming med flexibla funktioner för att förbättra din upplevelse.",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Dator",
        body: "MyIPTV Player med Datorn är en snabb och smidig lösning om man vill komma igång på nolltid. IPTV i datorn med denna app är en medioker lösning om man vill titta på tv på resande fot. Det rekommenderas istället att man använder appen IPTV Smarters.",
      },
      {
        heading: "Xbox",
        body: "MyIPTV Player med Xbox är inte den bästa lösningen men om du inte har någon annan enhet att se på TV med så behöver du jobba med det du har. Se guiden nedan för att komma igång med Xbox.",
        specsImage: "/installation/myiptv-player.jpg",
        specsLayout: "row",
        specsCard: true,
        specsWarning: "Fungerar endast på Windows datorer!",
        specs: [
          { label: "App", value: "MyIPTV Player" },
          { label: "Installationstid", value: "Ca 5 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "0kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "myiptv-player-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 4,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/myiptv-player-steg-1.jpg",
            body: 'Starta appen och välj "Add new playlist and EPG source".',
          },
          {
            step: 2,
            image: "/installation/myiptv-player-steg-2.jpg",
            body: 'Fyll i namnet sverigeiptv.com som playlist name. Kopiera och klistra in din m3u länk du fått utav oss på mail. Tryck sen på "Add remote list". OBS! Skapa listan under rubriken "Remote channel List"!',
          },
          {
            step: 3,
            image: "/installation/myiptv-player-steg-3.jpg",
            body: 'När du sparat listan går du tillbaka till "Settings" som du ser på bilden. Under fliken "Select channel playlist" väljer du din nya spellista och trycker på knappen "Refresh".',
          },
          {
            step: 4,
            image: "/installation/myiptv-player-steg-4.jpg",
            body: 'Gå nu till fliken "Channels". Klart! 🙂',
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "MyIPTV Player FAQ",
    items: [
      {
        question: "Hur installerar man MyIPTV Player på Datorn?",
        answer:
          "För att installera appen på din dator så börjar du med att ladda ned appen från Microsoft store. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är MyIPTV Player gratis?",
        answer:
          "Ja, appen är gratis. Vi rekommenderar dock att man köper permium versionen då den låser upp en del bra funktioner samt tar bort den otroligt irriterande reklamen.",
      },
      {
        question: "Hur får man undertexter på MyIPTV Player?",
        answer: "Undertexter på appen stöds inte. Därför rekommenderas en annan app.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "MyIPTV Player Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här! Sammanfattningsvis så kan man dock påstå att undertexter inte är de bästa för denna app.",
        ],
      },
      {
        heading: "MyIPTV Player På Windows 10 & Windows 11",
        body: [
          "Appen fungerar bra med Windows 10. I och med att man kan installera MyIPTV Player appen och många andra appar så är Windows 10 en enhet som går att användas för TV tittande. Vi rekommenderar dock alltid att man rensar onödiga appar som inte används samt har en lite nyare modell då de flesta IPTV listorna idag är väldigt stora och innehåller hundratusentals titlar såsom Kanaler, filmer, serier, dokumentärer osv.",
          "Instruktioner på hur du genomför installationen finns här. Vanligtvis så tar det ca 5-15 min att komma igång när man för första gången försöker att få igång TV kanalerna på sin Windows 10 och Windows 11. Skulle man dock fastna och behöva hjälp kan man alltid kontakta vår support. Appen fungerar även på Xbox men det rekommenderas inte att använda den där då upplevelsen inte brukar bli den bästa. Andra bättre appar finns tillgängliga när man ska se på datorn.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med MyIPTV Player",
    ctaHref: "/vart-paket",
  },
};

export default guide;
