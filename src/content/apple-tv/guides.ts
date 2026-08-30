export type AppleTvAppBadge = "recommended" | "compatible";

export type AppleTvApp = {
  slug: string;
  name: string;
  description: string;
  badge: AppleTvAppBadge;
};

/** Sub-page apps for the Apple TV installation guide, in the order they should be shown/tried. */
export const appleTvApps: AppleTvApp[] = [
  {
    slug: "iptvx",
    name: "IPTVX",
    description: "Kompatibel med Apple TV.",
    badge: "recommended",
  },
  {
    slug: "iplaytv",
    name: "iPlayTV",
    description: "Fungerar perfekt på Apple TV med kraftfullt appstöd.",
    badge: "recommended",
  },
  {
    slug: "perfect-iptv",
    name: "Perfect IPTV",
    description: "Smidig och snabb app för live-TV och VOD på Apple TV.",
    badge: "recommended",
  },
  {
    slug: "iptv-expert",
    name: "IPTV Expert",
    description: "Avancerade inställningar och EPG-stöd för en bättre upplevelse.",
    badge: "recommended",
  },
  {
    slug: "xtream-iptv",
    name: "Xtream IPTV",
    description: "Stöd för Xtream Codes API och enkel integration på Apple TV.",
    badge: "compatible",
  },
  {
    slug: "gse-smart-iptv-pro",
    name: "GSE Smart IPTV Pro",
    description: "Flexibel app med stöd för flera spellistor och format på Apple TV.",
    badge: "compatible",
  },
  {
    slug: "iptv-streamer",
    name: "IPTV Streamer",
    description: "Lättviktig och snabb app för streaming av live-TV och VOD.",
    badge: "compatible",
  },
  {
    slug: "iptv-smarters",
    name: "IPTV Smarters",
    description: "Populär app med stöd för flera användare och spellistor.",
    badge: "compatible",
  },
  {
    slug: "ibo-player",
    name: "IBO Player",
    description: "Enkel app för Smart TV med stöd för Xtream Codes API.",
    badge: "compatible",
  },
];

export function getAppleTvApp(slug: string) {
  return appleTvApps.find((app) => app.slug === slug);
}
