export type SmartTvAppBadge = "recommended" | "compatible";

export type SmartTvApp = {
  slug: string;
  name: string;
  description: string;
  badge: SmartTvAppBadge;
};

/**
 * Rekommenderade appar för Smart TV. Länkar till samma guider som under
 * Apple TV eftersom instruktionerna för dessa appar redan täcker Smart TV.
 */
export const smartTvApps: SmartTvApp[] = [
  {
    slug: "iptv-smarters",
    name: "IPTV Smarters",
    description: "Enkel och användarvänlig app, perfekt för nybörjare.",
    badge: "recommended",
  },
  {
    slug: "perfect-iptv",
    name: "Perfect IPTV",
    description: "Smidig och snabb app för live-TV och VOD på Smart TV.",
    badge: "recommended",
  },
  {
    slug: "gse-smart-iptv-pro",
    name: "GSE Smart IPTV Pro",
    description: "Flexibel app med stöd för flera spellistor och format.",
    badge: "compatible",
  },
  {
    slug: "xtream-iptv",
    name: "Xtream IPTV",
    description: "Stöd för Xtream Codes API och enkel integration.",
    badge: "compatible",
  },
  {
    slug: "iptv-streamer",
    name: "IPTV Streamer",
    description: "Lättviktig och snabb app för streaming av live-TV och VOD.",
    badge: "compatible",
  },
];

export function getSmartTvApp(slug: string) {
  return smartTvApps.find((app) => app.slug === slug);
}

export type SmartTvEasyApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
  difficulty: string;
};

/**
 * Apparna vi rekommenderar att man börjar med. Enklast att aktivera sin
 * spellista på och passar bäst för nybörjare eller ett första gratis test.
 */
export const smartTvEasyApps: SmartTvEasyApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters", difficulty: "Enkel installation" },
  { name: "Xtream IPTV", slug: "xtream-iptv", difficulty: "Enkel installation" },
  { name: "IBO Player", slug: "ibo-player", difficulty: "Enkel installation" },
  { name: "IPTV Pro", slug: "iptv-pro", difficulty: "Enkel installation" },
  { name: "Televizo IPTV", slug: "televizo-iptv", difficulty: "Enkel installation" },
  { name: "SET IPTV", slug: "set-iptv", difficulty: "Relativt enkel installation" },
  { name: "NET IPTV", slug: "net-iptv", difficulty: "Relativt enkel installation" },
];

export type SmartTvMoreApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
};

/** Fler kompatibla appar för Smart TV, utöver de vi rekommenderar att börja med. */
export const smartTvMoreApps: SmartTvMoreApp[] = [
  { name: "Tivimate", slug: "tivimate" },
  { name: "IPTV Extreme", slug: "iptv-extreme" },
  { name: "IPTV Streamer", slug: "iptv-streamer" },
  { name: "Duplex Play", slug: "duplex-play" },
  { name: "HOT IPTV", slug: "hot-iptv" },
  { name: "Xtream IPTV", slug: "xtream-iptv" },
  { name: "XUI IPTV Player", slug: "xui-iptv-player" },
  { name: "Smart STB", slug: "smart-stb" },
];

/** Checklistan i "Ladda ned en IPTV app"-avsnittet. */
export const smartTvDownloadApps: { name: string }[] = [
  { name: "IPTV Smarters" },
  { name: "Tivimate" },
  { name: "SET IPTV" },
  { name: "NET IPTV" },
  { name: "IPTV Streamer" },
  { name: "Duplex Play" },
  { name: "Extreme IPTV Pro" },
  { name: "Smart STB" },
  { name: "GSE Smart IPTV Pro" },
  { name: "SS IPTV" },
];

/** Appguider i sammanfattningsavsnittet, länkade till sverigeiptv.com. */
export const smartTvSummaryApps: { name: string; href: string }[] = [
  { name: "IPTV Smarters", href: "https://sverigeiptv.com/iptv-smarters-instruktioner/" },
  { name: "Tivimate", href: "https://sverigeiptv.com/tivimate-instruktioner/" },
  { name: "SET IPTV", href: "https://sverigeiptv.com/set-iptv-instruktioner/" },
  { name: "NET IPTV", href: "https://sverigeiptv.com/net-iptv-instruktioner/" },
  { name: "IPTV Streamer", href: "https://sverigeiptv.com/iptv-streamer-instruktioner/" },
  { name: "Duplex Play", href: "https://sverigeiptv.com/duplex-play-instruktioner/" },
  { name: "Extreme IPTV Pro", href: "https://sverigeiptv.com/extreme-iptv-pro-instruktioner/" },
  { name: "Smart STB", href: "https://sverigeiptv.com/smart-stb-instruktioner/" },
  { name: "GSE Smart IPTV Pro", href: "https://sverigeiptv.com/gse-smart-iptv-pro-instruktioner/" },
  { name: "SS IPTV", href: "https://sverigeiptv.com/ss-iptv-instruktioner/" },
];
