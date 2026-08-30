export type ChromecastApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
  /** Kort undertext, t.ex. "(Enkel installation)". */
  subtitle?: string;
};

/** Rekommenderade appar att börja med, i rekommenderad ordning. */
export const chromecastBestApps: ChromecastApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters", subtitle: "Enkel installation" },
  { name: "IPTV Streamer", slug: "iptv-streamer", subtitle: "Enkel installation" },
  { name: "Televizo IPTV", slug: "televizo-iptv", subtitle: "Enkel installation" },
  { name: "9Xtream IPTV", slug: "9xtream-iptv", subtitle: "Enkel installation" },
  { name: "Xtream IPTV", slug: "xtream-iptv", subtitle: "Enkel installation" },
  { name: "SET IPTV", slug: "set-iptv", subtitle: "Relativt enkel installation" },
  { name: "NET IPTV", slug: "net-iptv", subtitle: "Relativt enkel installation" },
];

/** Fler IPTV appar till Chromecast. */
export const chromecastMoreApps: ChromecastApp[] = [
  { name: "Tivimate", slug: "tivimate" },
  { name: "IPTV Extreme", slug: "iptv-extreme" },
  { name: "IBO Player", slug: "ibo-player" },
  { name: "IPTV Pro", slug: "iptv-pro" },
  { name: "HOT IPTV", slug: "hot-iptv" },
  { name: "Duplex Play", slug: "duplex-play" },
  { name: "Smart STB", slug: "smart-stb" },
];

/** Appar i "Ladda ned en IPTV app"-avsnittet och Sammanfattning, med länk till respektive guide om en finns. */
export const chromecastDownloadApps: ChromecastApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters" },
  { name: "Tivimate", slug: "tivimate" },
  { name: "SET IPTV", slug: "set-iptv" },
  { name: "NET IPTV", slug: "net-iptv" },
  { name: "IPTV Streamer", slug: "iptv-streamer" },
  { name: "Duplex Play", slug: "duplex-play" },
  { name: "Extreme IPTV Pro", slug: "iptv-extreme" },
  { name: "Smart STB", slug: "smart-stb" },
  { name: "GSE Smart IPTV Pro", slug: "gse-smart-iptv-pro" },
  { name: "9Xtream IPTV", slug: "9xtream-iptv" },
  { name: "XUI IPTV Player", slug: "xui-iptv-player" },
  { name: "IPTV Pro", slug: "iptv-pro" },
  { name: "Xtream IPTV", slug: "xtream-iptv" },
  { name: "IBO Premium", slug: "ibo-player" },
  { name: "HOT IPTV", slug: "hot-iptv" },
];
