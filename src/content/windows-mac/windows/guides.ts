export type WindowsApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
};

/** Appar i "IPTV Windows - Kom igång"-avsnittet, i rekommenderad ordning. */
export const windowsKomIgangApps: WindowsApp[] = [
  { name: "IPTV Expert", slug: "iptv-expert" },
  { name: "IPTV Smarters", slug: "iptv-smarters" },
  { name: "HOT IPTV Player", slug: "hot-iptv" },
  { name: "IBO Player Pro", slug: "ibo-player" },
  { name: "MyIPTV Player", slug: "myiptv-player" },
];

/** Appar i "Ladda ned en IPTV Windows app"-avsnittet, med länk till respektive guide om en finns. */
export const windowsDownloadApps: WindowsApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters" },
  { name: "Tivimate", slug: "tivimate" },
  { name: "SET IPTV", slug: "set-iptv" },
  { name: "NET IPTV", slug: "net-iptv" },
  { name: "IPTV Streamer", slug: "iptv-streamer" },
  { name: "Duplex Play", slug: "duplex-play" },
  { name: "Extreme IPTV Pro", slug: "iptv-extreme" },
  { name: "Smart STB", slug: "smart-stb" },
  { name: "GSE Smart IPTV Pro", slug: "gse-smart-iptv-pro" },
];
