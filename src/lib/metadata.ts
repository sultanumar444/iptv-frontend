import type { Metadata } from "next";
import { siteName } from "./site";

const defaultOgImage = "/sverige-logo.webp";

/**
 * Bygger konsekvent metadata (canonical, Open Graph, Twitter Card) för en
 * sida utifrån titel, beskrivning och sökväg. `path` ska börja med "/",
 * t.ex. "/installationsguider/apple-tv".
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Sätt true för sidor som ännu inte har färdigt innehåll (t.ex. platshållarsidor). */
  noindex?: boolean;
}): Metadata {
  const ogImage = image ?? defaultOgImage;

  return {
    title,
    description,
    ...(noindex && {
      robots: { index: false, follow: true },
    }),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
