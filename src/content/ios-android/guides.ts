export type IosAndroidApp = {
  name: string;
  /** Slug till en egen guide under /installationsguider/apple-tv/, om en finns. */
  slug?: string;
  /** Kort undertext, t.ex. "(Bäst på Android)" eller "(iPhone)". */
  subtitle: string;
};

/** Appar som fungerar på både iPhone och Android. */
export const iosAndroidBothApps: IosAndroidApp[] = [
  { name: "IPTV Smarters", slug: "iptv-smarters", subtitle: "Bäst på Android" },
  { name: "GSE Smart IPTV", slug: "gse-smart-iptv-pro", subtitle: "Bäst på iPhone" },
  { name: "IPTV Streamer", slug: "iptv-streamer", subtitle: "Bäst på Android" },
  { name: "Xtream IPTV", slug: "xtream-iptv", subtitle: "iPhone & Android" },
];

/** Rekommenderade appar för iPhone, i rekommenderad ordning. */
export const iosApps: IosAndroidApp[] = [
  { name: "IPTVX", slug: "iptvx", subtitle: "iPhone" },
  { name: "Perfect IPTV", slug: "perfect-iptv", subtitle: "iPhone" },
  { name: "IPTV Expert", slug: "iptv-expert", subtitle: "iPhone" },
  { name: "Mega IPTV", slug: "mega-iptv", subtitle: "iPhone" },
  { name: "IPTV World", slug: "iptv-world", subtitle: "iPhone" },
];

/** Rekommenderade appar för Android, i rekommenderad ordning. */
export const androidApps: IosAndroidApp[] = [
  { name: "IPTV Pro", slug: "iptv-pro", subtitle: "Android" },
  { name: "Televizo", slug: "televizo-iptv", subtitle: "Android" },
  { name: "9Xtream", slug: "9xtream-iptv", subtitle: "Android" },
  { name: "iMPlayer Mobile", slug: "implayer-iptv", subtitle: "Android" },
];

/** Appar i "Ladda ned en IPTV mobil app"-avsnittet, med länk till respektive guide. */
export const iosAndroidDownloadApps: IosAndroidApp[] = [
  { name: "IPTV Smarters (iOS & Android)", slug: "iptv-smarters", subtitle: "" },
  { name: "IPTV Streamer (iOS & Android)", slug: "iptv-streamer", subtitle: "" },
  { name: "Extreme IPTV Pro (Android)", slug: "iptv-extreme", subtitle: "" },
  { name: "GSE Smart IPTV Pro (iOS & Android)", slug: "gse-smart-iptv-pro", subtitle: "" },
  { name: "Perfect IPTV (iOS)", slug: "perfect-iptv", subtitle: "" },
  { name: "IPTVX (iOS)", slug: "iptvx", subtitle: "" },
];
