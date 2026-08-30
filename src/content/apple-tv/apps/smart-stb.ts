import type { AppleTvAppGuide } from "./types";

const guide: AppleTvAppGuide = {
  slug: "smart-stb",
  pageTitle: "Smart STB Instruktioner",
  pageDescription:
    "Smart STB instruktioner ser du på denna sida. Appen finns tillgänglig till de flesta enheterna idag men rekommenderas endast om inget annat alternativ för app finns. Appen gör det möjligt för dig att streama kanaler på din IPTV enhet.",
  deviceTabs: [
    { label: "Smart TV", href: "#smart-stb-steg" },
    { label: "Nvidia Shield", href: "#smart-stb-steg" },
    { label: "Android Box", href: "#smart-stb-steg" },
    { label: "Xiaomi Mi", href: "#smart-stb-steg" },
    { label: "Formuler Box", href: "#smart-stb-steg" },
  ],
  selectorHeading: "Smart STB Instruktioner för just din enhet",
  instructionsHeading: "Instruktioner för Smart STB",
  instructionsIntro:
    "Smart STB kan laddas ned till de flesta enheterna idag. Appen är alltså relativt enkel och smidig att komma igång med och rekommenderas till alla som är vana med appen sedan tidigare. Det är dock inte den enklaste appen att komma igång med. Vi rekommenderar att man börjar med [IPTV Smarters](https://sverigeiptv.com/iptv-smarters-instruktioner/) för att senare gå över till en mer avancerad app som således är lite stabilare (exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/)) samt har ett bättre gränssnitt om man är nybörjare. Vi har på denna sida samlat guiderna för appen så att du snabbt kan komma igång på just din enhet oavsett om du har en Apple TV, Smart TV eller annan enhet. På denna sida ser du instruktioner för apparna (observera att dessa appar har olika utvecklare. De kommer alltså inte från samma app utvecklare/företag): Apple TV, Smart TV, Nvidia Shield, Xiaomi Mi Box, Xiaomi Mi Stick, Firestick, Android Box, Mobilen och Surfplattan.",
  instructionsDownloadLinks: [
    {
      label: "Playbutiken",
      href: "https://play.google.com/store/apps?device=tv&hl=sv&gl=sv",
    },
  ],
  uploadMethodsIntro:
    "Smart STB är som det låter den mest avancerade versionen av apparna. Dock är den hyffsat enkel att komma igång med. Appen tillåter dig att ladda upp dina kanaler på följande sätt:",
  uploadMethods: ["M3U länk", "Portal URL (via appen eller deras hemsida)"],
  instructionsBody: [
    "I detta fall rekommenderas det att man väljer uppladdning utav sina IPTV kanaler direkt via portalen. Se instruktionerna nedan.",
  ],
  downloadSection: {
    heading: "Vart kan jag ladda ned appen?",
    introBeforeDownload:
      "Appen går att ladda ned från [Playbutiken](https://play.google.com/store/apps?device=tv&hl=sv&gl=sv) och [Appstore](https://www.apple.com/se/app-store/) till din enhet. Men vi rekommenderar inte denna app till Apple enheter. Ladda endast ned appen från en välkänd källa som exempelvis Appstore eller Playbutiken. Detta eftersom att man av misstag därmed kan ladda ned virus om man inte är vaksam.",
    downloadLabel: "Ladda ned Smart STB",
    introAfterDownload: [],
    recommendationsIntro:
      "Ladda ned Smart STB till följande enhet genom att trycka på texten nedan:",
    recommendations: [
      "[Android Boxar](https://play.google.com/store/apps/details?id=net.smart_stb.app&hl=lv&gl=US)",
      "[Smart TV](https://play.google.com/store/apps/details?id=net.smart_stb.app&hl=lv&gl=US)",
    ],
  },
  deviceCompatSection: {
    heading: "Vilka enheter kan jag använda?",
    devices: [
      {
        heading: "Smart TV",
        body: "Smart STB med Smart TV är en bra kombination när andra alternativ inte finns. Appen är relativt smidig på TV apparater då den är skapad för att fungera bra på Smart TV enheter, dock är den krånglig att komma igång med. Appen finns tillgänglig på de flesta LG, Sony, Samsung och Philips TV. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis [Tivimate](https://sverigeiptv.com/tivimate-instruktioner/).",
      },
      {
        heading: "Nvidia Shield",
        body: "Smart STB med Nvidia Shield är inte den bästa lösningen då appen är krånglig att komma igång med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Nanomid.",
      },
      {
        heading: "Android Box",
        body: "Smart STB med Android Box fungerar helt okej till att börja med. Även om appen fungerar bra med din enhet så rekommenderas det att man istället använder en bättre app som exempelvis Tivimate då den appen har bättre gränssnitt och stabilare servrar.",
      },
      {
        heading: "Xiaomi Mi",
        body: "Smart STB med Xiaomi Mi S Box eller Xiaomi Mi Stick är tyvärr inte de bästa enheterna för IPTV-tittande när man jämför med exempelvis Apple TV. Detta är för att processorn i båda enheterna inte är de starkaste. Vill man se på IPTV med Xiaomi Mi-enheter så går det givetvis och upplevelsen kan trots allt bli bra. Är man dock ute efter en stabilare, smidigare och mer långsiktig lösning så är detta sätt inte att föredra.",
      },
      {
        heading: "Formuler Box",
        body: "Smart STB med Formuler Box fungerar ganska okej. Formuler boxen är dock skapad som en lite mer annorlunda Android box för IPTV då den har sin egna IPTV app MyTVOnline. MyTVOnline apparna är mycket bättre än STB appen och därav rekommenderas det att man använder de istället.",
        specsImage: "/installation/smart-stb.png",
        specsLayout: "row",
        specsCard: true,
        specs: [
          { label: "App", value: "Smart STB" },
          { label: "Installationstid", value: "Ca 10 min" },
          { label: "Wifi/Kabel", value: "Stöd för båda" },
          { label: "Kostnad", value: "245kr" },
          { label: "Erbjuder fritt test", value: "Ja" },
        ],
        stepsId: "smart-stb-steg",
        stepsHeading: "Instruktioner",
        stepsColumns: 5,
        stepsNumberLayout: "stacked",
        steps: [
          {
            step: 1,
            image: "/installation/smart-stb-steg-1.png",
            body: 'Börja med att ladda ned appen. När du startat den kommer denna ruta upp. Försvinner den inte av sig själv så trycker du på "OK" knappen. Acceptera appens villkor om frågan kommer, acceptera även att du får 7 dagars prov utav appen. OBS! Du behöver ta fram din "Virtual MAC Address" och ange den i formuläret när du begär ditt gratis test/köper vår tjänst. Se steg 3.',
          },
          {
            step: 2,
            image: "/installation/smart-stb-steg-2.png",
            body: 'När du sen ser denna ruta på bilden trycker du snabbt på "OK" knappen för att komma till inställningarna. Om du inte hinner göra det kan rutan bli svart och fastna i det läget. Då behöver du starta om appen eller i värsta fall tvn genom att dra ut den.',
          },
          {
            step: 3,
            image: "/installation/smart-stb-steg-3.png",
            body: 'Välj "Device info" för att ta fram din "Virtual MAC address". Skriv ned den och dubbelkolla din stavning. Välj "Embedded portal" för att komma till bilden du ser i detta steg. När du väl är här så väljer du "Portals".',
          },
          {
            step: 4,
            image: "/installation/smart-stb-steg-4.png",
            body: 'Läget "Multiportal mode" ska vara aktiverat. Se till att alternativet "Use portal 1" är aktiverat så att du kan lägga till din egen portal-URL genom att scrolla längre ned på sidan.',
          },
          {
            step: 5,
            image: "/installation/smart-stb-steg-5.png",
            body: 'I fältet "Namn" fyller du i "sverigeiptv.com". I fältet "URL 1" fyller du i vår Portal URL som du får när du begärt ett gratis test eller köpt vår tjänst. För att kunna testa vår tjänst med Smart STB appen behöver du först ta reda på din Virtuella MAC adress (som börjar på 00:1A:79). Du anger den sedan i formuläret på länken nedan efter att ha valt appen Smart STB i menyn.',
          },
        ],
      },
    ],
  },
  faqSection: {
    heading: "Smart STB FAQ",
    items: [
      {
        question: "Hur installerar man Smart STB på Smart TV?",
        answer:
          "För att installera appen på din Smart TV (Samsung, Google TV, LG eller annat märke) så börjar du med att ladda ned appen från Playbutiken. När du gjort det så läser du igenom instruktionerna för hur appen fungerar på just din enhet. Sedan begär du ett gratis test genom att klicka på knappen nedan.",
      },
      {
        question: "Är Smart STB gratis?",
        answer:
          "Nej, appen är inte gratis. De erbjuder dock ett gratis test på 7 dagar innan man måste köpa den fulla versionen för ca 250kr.",
      },
      {
        question: "Hur får man undertexter på Smart STB?",
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
        heading: "Smart STB Undertexter",
        body: [
          "Dessvärre fungerar undertexter dåligt på denna app. Är undertexter viktigt för dig så bör du välja en annan app.",
          "De flesta titlar har undertexter som automatiskt laddas in tillsammans med kanalerna när du startar appen. Om vissa kanaler inte har undertexter så finns det tyvärr inte även om de flesta har undertexter. Man kan i vissa fall själv ladda upp undertexter från sina egna källor men det är dock inget vi rekommenderar eller erbjuder support på då vårt fokus ligger på mer viktiga uppgifter till våra kunder.",
          "Vill du veta mer om undertexter till din app så finns det oftast en googling bort där man huvudsakligen kan läsa om detta på app tillverkarens egna hemsida. Vi önskar dig lycka till! Skulle du behöva hjälp så finns vi alltid här! Sammanfattningsvis så kan man dock påstå att undertexter inte är de bästa för denna app.",
        ],
      },
    ],
    ctaLabel: "Testa IPTV med Smart STB",
    ctaHref: "/vart-paket",
  },
};

export default guide;
