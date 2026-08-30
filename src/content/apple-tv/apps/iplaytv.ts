import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "iplaytv",
  pageTitle: "iPlayTV Instruktioner",
  pageDescription:
    "iPlayTV instruktioner ser du här! Appen gör det möjligt för dig att streama kanaler på din IPTV enhet. Med iPlayTV kommer du enkelt igång och får tillgång till alla världens kanaler!",
  deviceTabs: [{ label: "Apple TV", href: "#instruktioner" }],
  selectorHeading: "iPlayTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för iPlayTV på Apple TV",
  instructionsIntro:
    "iPlayTV är en stabil och användarvänlig IPTV-app för Apple TV. Det tydliga gränssnittet gör det enkelt att navigera mellan livekanaler, filmer, serier och programguiden. Du kan lägga till din IPTV-tjänst på tre olika sätt:",
  uploadMethods: [
    "Xtream Server – med användarnamn, lösenord och Portal URL",
    "Remote Playlist File – genom en M3U-länk",
    "Local File – genom en sparad M3U-fil",
  ],
  instructionsBody: [
    "Vi rekommenderar att du använder Xtream Server eftersom kanallista, kategorier och EPG vanligtvis läses in automatiskt. Om du väljer en M3U-länk kan du även behöva lägga till en separat EPG-länk manuellt.",
    "Installationen tar normalt cirka 5–15 minuter. När appen är installerad anger du uppgifterna som du fått från din IPTV-leverantör och väntar medan innehållet läses in. För bästa prestanda rekommenderar vi en nyare Apple TV-modell, tillräckligt med ledigt lagringsutrymme och en stabil internetanslutning. En nätverkskabel mellan Apple TV och routern kan ge en jämnare upplevelse, särskilt vid direktsänd sport eller användning av stora IPTV-listor.",
    "Om du får problem under installationen kan du följa vår steg-för-steg-guide eller kontakta supporten för personlig hjälp.",
  ],
  specsImage: "/installation/iplaytv-specification.jpg",
  specs: [
    { label: "App", value: "iPlayTV" },
    { label: "Installationstid", value: "Ca 5 min" },
    { label: "Wifi/Kabel", value: "Stöd för båda" },
    { label: "Kostnad", value: "79kr" },
    { label: "Erbjuder fritt test", value: "Nej" },
  ],
  downloadSection: {
    heading: "Ladda ned och använd iPlayTV på Apple TV",
    introBeforeDownload:
      "iPlayTV kan laddas ned direkt från App Store till en kompatibel Apple TV. För din säkerhet bör appen endast installeras från den officiella App Store-sidan. Undvik nedladdningslänkar från okända webbplatser eftersom de kan innehålla falska eller osäkra versioner.",
    downloadLabel: "Ladda ned iPlayTV från App Store",
    downloadHref:
      "https://apps.apple.com/us/app/iplaytv-iptv-m3u-player/id1072226801",
    introAfterDownload: [
      "Appen fungerar bäst på Apple TV 4 eller senare. Den kan inte installeras på Apple TV 3 eftersom den modellen saknar stöd för App Store och moderna tvOS-appar. Kontrollera alltid kompatibilitetsinformationen i App Store före köp eller installation.",
      "iPlayTV är ett populärt alternativ för IPTV på Apple TV tack vare sitt enkla gränssnitt, snabba navigering och relativt låga resursanvändning. Appen gör det lätt att organisera och komma åt livekanaler, filmer, serier och programinformation utan komplicerade inställningar.",
    ],
    recommendationsIntro: "För bästa möjliga upplevelse rekommenderar vi:",
    recommendations: [
      "En nyare och uppdaterad Apple TV-modell",
      "En stabil internetanslutning",
      "Tillräckligt med ledigt lagringsutrymme",
      "Nätverkskabel mellan Apple TV och routern när det är möjligt",
    ],
    closingParagraphs: [
      "En kabelanslutning kan ge stabilare uppspelning, särskilt under direktsända sportevenemang eller när många tittare använder tjänsten samtidigt. Om du använder ett tidsbegränsat test bör du installera appen och förbereda enheten innan testperioden aktiveras, så att du får tillräckligt med tid att kontrollera kanaler, bildkvalitet och funktioner.",
    ],
  },
  stepSections: [
    {
      id: "tv-steg",
      steps: [
        {
          step: 1,
          image: "/installation/iplaytv-steg-1.jpg",
          body: 'Starta appen och tryck på det stora Plus-tecknet "Add Playlist".',
        },
        {
          step: 2,
          image: "/installation/iplaytv-steg-2.jpg",
          body: 'Tryck på "Xtream Server".',
        },
        {
          step: 3,
          image: "/installation/iplaytv-steg-3.jpg",
          body: 'Välj ett namn till din nya lista. I detta fall valde vi "Kanaler". Se till så att "Channel Refresh" och "EPG Refresh" står på 12 Hours. Tryck sen på "Save".',
        },
        {
          step: 4,
          image: "/installation/iplaytv-steg-4.jpg",
          body: "Nu har du sparat din kanallista. Tryck på den med hjälp av din fjärrkontroll.",
        },
        {
          step: 5,
          image: "/installation/iplaytv-steg-5.jpg",
          body: "Klart! 🙂",
        },
      ],
    },
  ],
  faqSection: {
    heading: "iPlayTV FAQ",
    items: [
      {
        question: "Hur installerar man iPlayTV på Apple TV?",
        answer:
          "För att installera appen på din Apple TV så börjar du med att ladda ned appen från Appstore. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan. Instruktioner ser du längre upp på denna sida.",
      },
      {
        question: "Är iPlayTV gratis?",
        answer:
          "Nej, appen är inte gratis. Man kan inte heller testa den kostnadsfritt innan man köper som man däremot kan på många andra liknande appar. Appen kostar ca 79 SEK.",
      },
      {
        question: "Hur får man undertexter på iPlayTV?",
        answer:
          "Undertexter på appen får du genom att svepa upp på din Apple TV fjärrkontroll när du är inne på en film, serie, dokumentär eller kanal. På mobilen och surfplattan är det samma princip men då petar du på skärmen för att få fram inställningarna när du är inne på en kanal.",
      },
    ],
    ctaLabel: "Testa IPTV",
    ctaHref: "/vart-paket",
  },
  infoSection: {
    blocks: [
      {
        heading: "iPlayTV Undertexter",
        body: [
          "De flesta titlar har undertexter automatiskt som laddas in tillsammans med kanalerna. Om vissa kanaler inte har undertexter så finns det tyvärr inte. Kom ihåg att du bör logga in med Xtream Server alternativet för att automatiskt få undertexter och EPG.",
          "De flesta titlar har dock undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor. Det är dock inget vi erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort.",
        ],
      },
      {
        heading: "iPlayTV EPG",
        body: [
          "EPG (Electronic Program Guide) finns tillgänglig på appen. På många appar behöver man manuellt kopiera och klistra in en EPG länk (XML) som du får utav oss vid köp.",
          "Däremot hämtar vissa appar EPG informationen när du loggar in med Xtreamcodes API utan att du manuellt behöver lägga till något. Om din app endast kan ta emot M3U länkar så kommer du med stor sannolikhet att manuellt behöva ladda upp en xml epg länk.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med iPlayTV",
    ctaHref: "/vart-paket",
  },
};

export default guide;
