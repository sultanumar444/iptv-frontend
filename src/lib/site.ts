/**
 * Sätt NEXT_PUBLIC_SITE_URL i miljövariablerna när ni har ett riktigt
 * produktionsdomän, annars används fallback-värdet nedan.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sverigeiptv.net";

export const siteName = "SverigeIPTV";
