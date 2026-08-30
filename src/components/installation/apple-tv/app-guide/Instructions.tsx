import Image from "next/image";
import parseInlineLinks from "../../shared/parseInlineLinks";

export default function AppleTvAppGuideInstructions({
  heading,
  intro,
  downloadLinks,
  uploadMethodsIntro,
  uploadMethods,
  body,
  image,
  imagePosition = "right",
}: {
  heading: string;
  intro: string;
  downloadLinks?: { label: string; href: string }[];
  uploadMethodsIntro?: string;
  uploadMethods: string[];
  body: string[];
  image?: string;
  imagePosition?: "left" | "right";
}) {
  return (
    <section
      id="instruktioner"
      className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24"
    >
      <div
        className={
          image
            ? imagePosition === "left"
              ? "flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:flex-row-reverse sm:items-center sm:p-10"
              : "flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-10"
            : "rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
        }
      >
        {image && (
          <div className="relative aspect-video w-full shrink-0 sm:w-[38%]">
            <Image
              src={image}
              alt={heading}
              fill
              sizes="(min-width: 640px) 38vw, 100vw"
              className="object-contain"
            />
          </div>
        )}
        <div className={image ? "w-full sm:w-[62%]" : undefined}>
        <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>

        <p className="mt-5 text-white/75">{parseInlineLinks(intro)}</p>

        {downloadLinks && downloadLinks.length > 0 && (
          <p className="mt-5 text-white/75">
            Appen kan laddas ner från{" "}
            {downloadLinks.map((link, i) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-violet-400 hover:underline"
                >
                  {link.label}
                </a>
                {i < downloadLinks.length - 2 && ", "}
                {i === downloadLinks.length - 2 && " och "}
              </span>
            ))}
            .
          </p>
        )}

        {uploadMethodsIntro && (
          <p className="mt-5 text-white/75">{uploadMethodsIntro}</p>
        )}

        <ul className="mt-5 space-y-3">
          {uploadMethods.map((method) => (
            <li key={method} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span className="text-white/85">{method}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-4 text-white/75">
          {body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {parseInlineLinks(paragraph)}
            </p>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
