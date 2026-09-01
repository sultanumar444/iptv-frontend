import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

export default function PageTitleBar({
  title,
  description,
  ctaLabel,
  ctaHref,
  scrollHint,
  path,
}: {
  title: string;
  description?: string;
  /** Valfri CTA-knapp under texten. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Valfri rad under CTA-knappen, t.ex. en scroll-hint. */
  scrollHint?: string;
  /**
   * Sidans sökväg, t.ex. "/om-oss". Valfri — anges den läggs strukturerad
   * data (BreadcrumbList) till utöver den synliga brödsmuls-navigationen.
   */
  path?: string;
}) {
  const breadcrumbSchema = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${siteUrl}${path}`,
          },
        ],
      }
    : null;

  return (
    <div className="relative overflow-hidden">
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <Image
        src="/ptb.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0a0e1a]/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto w-full md:w-[65%]">
          <h1 className="text-4xl leading-snug font-bold sm:text-5xl">{title}</h1>
          <nav aria-label="Brödsmulor" className="mt-3 text-white/70">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Hem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          {description && (
            <p className="mt-5 text-white/80">{description}</p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-6 inline-block rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-violet-500"
            >
              {ctaLabel}
            </Link>
          )}
          {scrollHint && (
            <p className="mt-4 text-sm text-white/60">{scrollHint}</p>
          )}
        </div>
      </div>
    </div>
  );
}
