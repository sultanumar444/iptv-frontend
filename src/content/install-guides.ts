export type DeviceGuide = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  /** Valfri länk som ersätter standardlänken /installationsguider/{slug}. */
  href?: string;
};

export const deviceGuides: DeviceGuide[] = [
  {
    slug: "smart-tv",
    name: "Smart TV",
    badge: "SMART TV",
    description: "Installation av IPTV på Samsung, LG och andra Smart TV.",
    image: "/installation/smart-tv.webp",
  },
  {
    slug: "android-tv",
    name: "Android TV",
    badge: "ANDROID TV",
    description: "Installation av IPTV på Android TV och TV-boxar.",
    image: "/installation/android-tv.png",
  },
  {
    slug: "ios-android",
    name: "iOS/Android",
    badge: "IOS/ANDROID",
    description: "Titta på IPTV via appar på iPhone, iPad och Android-enheter.",
    image: "/installation/ios.webp",
  },
  {
    slug: "nvidia-shield",
    name: "Nvidia Shield",
    badge: "NVIDIA SHIELD",
    description: "Installation av IPTV på Nvidia Shield och Android TV-enheter.",
    image: "/installation/nvidia-shield.webp",
  },
  {
    slug: "formuler",
    name: "Formuler",
    badge: "FORMULER",
    description: "Installation av IPTV på Formuler-enheter (Z Series).",
    image: "/installation/formuler.png",
  },
  {
    slug: "chromecast-instruktioner",
    name: "Chromecast",
    badge: "CHROMECAST",
    description: "Casta IPTV till din TV med Google Chromecast.",
    image: "/installation/chromecast.png",
  },
  {
    slug: "windows-mac",
    name: "Windows/Mac",
    badge: "WINDOWS/MAC",
    description: "Streaming på dator via Windows eller macOS med spelare eller appar.",
    image: "/installation/windows-mac.webp",
  },
  {
    slug: "tvip-s-box",
    name: "TVIP S-BOX",
    badge: "TVIP S-BOX",
    description: "Installation av IPTV på TVIP S-Box (med Stalker Portal).",
    image: "/installation/tvip.webp",
  },
  {
    slug: "apple-tv",
    name: "Apple TV",
    badge: "APPLE TV",
    description: "Installation av IPTV på Apple TV med tvOS.",
    image: "/installation/apple-tv.png",
  },
  {
    slug: "xbox",
    name: "Xbox",
    badge: "XBOX",
    description: "Installation av IPTV på Xbox.",
    image: "/installation/xbox.png",
    href: "/installationsguider/apple-tv/myiptv-player",
  },
];

export function getDeviceGuide(slug: string) {
  return deviceGuides.find((device) => device.slug === slug);
}

/** Generella installationssteg, återanvänds på varje enhets guide-sida. */
export const genericInstallSteps = [
  {
    title: "Kontrollera din internetanslutning",
    body: "För att streaming ska fungera smidigt är en stabil och snabb internetanslutning ett måste. Kontrollera din internethastighet och se till att den är tillräcklig för att streama högupplöst video.",
  },
  {
    title: "Installera med rätt utrustning",
    body: "Se till att din enhet är uppdaterad och stödjer de senaste streamingstandarderna innan du fortsätter med installationen.",
  },
  {
    title: "Installera mjukvaran",
    body: "Ladda ner och installera den nödvändiga appen. Vi rekommenderar en app som stödjer M3U-listor eller Xtream Codes.",
  },
  {
    title: "Ange dina uppgifter",
    body: "Ange de uppgifter du fått via mail efter ditt köp: användarnamn, lösenord och server-URL (eller M3U-länk).",
  },
  {
    title: "Njut av ditt innehåll",
    body: "När allt är inställt är det bara att börja bläddra i kanalerna och njuta av ditt innehåll.",
  },
];
