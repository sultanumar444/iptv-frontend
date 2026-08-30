import parseInlineLinks from "../../shared/parseInlineLinks";

export default function AppleTvAppGuideDownloadSection({
  heading,
  introBeforeDownload,
  downloadLabel,
  downloadHref,
  introAfterDownload,
  recommendationsIntro,
  recommendations,
  closingParagraphs,
}: {
  heading: string;
  introBeforeDownload: string;
  downloadLabel: string;
  downloadHref?: string;
  introAfterDownload: string[];
  recommendationsIntro?: string;
  recommendations?: string[];
  closingParagraphs?: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>

      <p className="mt-5 text-white/70">{parseInlineLinks(introBeforeDownload)}</p>

      {downloadHref ? (
        <a
          href={downloadHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block font-bold text-violet-400 hover:underline"
        >
          {downloadLabel}
        </a>
      ) : (
        <p className="mt-5 font-bold text-violet-400">{downloadLabel}</p>
      )}

      <div className="mt-5 space-y-4 text-white/70">
        {introAfterDownload.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {recommendations && recommendations.length > 0 && (
        <div className="mt-5">
          {recommendationsIntro && (
            <p className="text-white/70">{recommendationsIntro}</p>
          )}
          <ul className="mt-3 space-y-3">
            {recommendations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span className="text-white/85">{parseInlineLinks(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {closingParagraphs && closingParagraphs.length > 0 && (
        <div className="mt-5 space-y-4 text-white/70">
          {closingParagraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
