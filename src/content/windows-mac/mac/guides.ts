export type MacApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
};

/** Rekommenderade appar i "Mac IPTV - Kom igång"-avsnittet, i rekommenderad ordning. */
export const macKomIgangApps: MacApp[] = [
  { name: "IPTV Expert", slug: "iptv-expert" },
  { name: "IPTV Smarters", slug: "iptv-smarters" },
  { name: "GSE Smart", slug: "gse-smart-iptv-pro" },
  { name: "IPTV Pro", slug: "iptv-pro" },
  { name: "Mega IPTV", slug: "mega-iptv" },
  { name: "IPTV Streamer", slug: "iptv-streamer" },
];

/** Appar i "Ladda ned en Mac IPTV app"-avsnittet, med länk till respektive guide om en finns. */
export const macDownloadApps: MacApp[] = [
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
