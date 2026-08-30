import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "set-iptv",
  pageTitle: "Set IPTV Instruktioner",
  pageDescription:
    "Set IPTV instruktioner ser du på denna sida. Appen finns tillgänglig till de flesta enheterna såsom Smart TV, Android boxar osv. Appen gör det möjligt för dig att streama kanaler på din IPTV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#set-iptv-steg" },
    { label: "Nvidia Shield", href: "#set-iptv-steg" },
    { label: "Android Box", href: "#set-iptv-steg" },
    { label: "Xiaomi Mi", href: "#set-iptv-steg" },
    { label: "Formuler Box", href: "#set-iptv-steg" },
  ],
  selectorHeading: "Set IPTV Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för SET IPTV",
  instructionsIntro:
    "SET IPTV kan laddas ned till de flesta anroid boxarana och Smart TV apparaterna idag. Appen är ganska enkel att komma igång med och rekommenderas till som inte har möjligheten att köpa en box eller ladda ned en bättre app som exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/).",
  uploadMethods: [],
  instructionsBody: [
    "SET IPTV är dock inte den enklaste appen att komma igång med då man måste ladda upp sin spellista via deras hemsida vilket kan vara krångligt om man är nybörjare.",
    "Vi rekommenderar att man istället börjar med [IPTV Smarters](https://sverigeiptv.com/iptv-smarters-instruktioner/) om appen finns tillgänglig till din enhet för att senare gå över till en mer avancerad app som således är lite stabilare samt har ett bättre gränssnitt. Vi har på denna sida samlat guiderna för appen så att du snabbt kan komma igång på just din enhet oavsett om du har en Android Box eller en Smart TV. På denna sida ser du instruktioner för appen till följande enheter: Smart TV, Nvidia Shield, Xiaomi Mi Box, Xiaomi Mi Stick, Firestick och Android Box.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Apparna går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) till din enhet. Ladda endast ned appen från en välkänd källa som exempelvis Playbutiken. Detta eftersom att man av misstag därmed kan ladda ned virus om man inte är vaksam.",
    downloadLabel: "Ladda ned SET IPTV",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned SET IPTV till följande enhet genom att trycka på texten nedan:",
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
        body: "Set IPTV med Smart TV är en bra kombination när man är nybörjare eller när andra alternativ inte finns. Appen är relativt smidig på TV apparater då den är skapad för att fungera bra på alla enheter. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV som har Android baserade system. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/).",
      },
      {
        heading: "Nvidia Shield",
        body: "Set IPTV med Nvidia Shield är därmed en snabb och smidig lösning då den är enkel att komma igång med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "Set IPTV med Android Box fungerar helt okej till att börja med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "Set IPTV med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare, smidigare och mer långsiktig lösning så är detta sätt inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "Set IPTV med Formuler Box fungerar ganska bra. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IPTV app MyTVOnline. MyTVOnline apparna är mycket bättre än SET appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/set-iptv.jpg",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "SET IPTV" },
          { label: "Installationstid", value: "Ca 7 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "170kr" },
          { label: "Erbjuder fritt test", value: "Ja (7 dagar)" },
        ],
        stepsId: "set-iptv-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 3,
        steps: [
          {
            step: 1,
            image: "/installation/set-iptv-steg-1.jpg",
            body: "Starta appen och notera din MAC-adress i mitten av rutan.",
          },
          {
            step: 2,
            image: "/installation/set-iptv-steg-2.jpg",
            body: 'Besök nu https://setsysteme.com/set.app och fyll i din mac adress i översta rutan som syns på bilden. Tryck sedan på knappen markerad i den röda rutan uppe till höger som heter "Reset TV Playlists".',
          },
          {
            step: 3,
            image: "/installation/set-iptv-steg-3.jpg",
            body: 'Kopiera nu in din m3u länk i rutan "url m3u" och fyll i namnet sverigeiptv.com i rutan "Playlist Name". Spara allt genom att trycka på "Submit". Starta nu om din app på TVn så bör du efter en stund se dina kanaler! 🙂',
          },
        ],
      },
    ],
  },
};

export default guide;
