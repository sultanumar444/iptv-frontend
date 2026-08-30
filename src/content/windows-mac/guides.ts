export type WindowsMacApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
};

/** Appar i "Ladda ned en IPTV app"-avsnittet, med länk till respektive guide om en finns. */
export const windowsMacDownloadApps: WindowsMacApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters" },
  { name: "MyIPTV Player", slug: "myiptv-player" },
  { name: "Duplex Play", slug: "duplex-play" },
  { name: "GSE Smart IPTV Pro", slug: "gse-smart-iptv-pro" },
];
