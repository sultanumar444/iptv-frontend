import { slugify } from "@/lib/slugify";

type TocProps = {
  headings: string[];
};

function TocList({ headings }: TocProps) {
  return (
    <ol className="space-y-3">
      {headings.map((heading, i) => (
        <li key={heading}>
          <a
            href={`#${slugify(heading)}`}
            className="flex gap-3 text-sm text-white/70 hover:text-sky-400"
          >
            <span className="font-semibold text-sky-400">{i + 1}.</span>
            <span>{heading}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Hopfällbar innehållsförteckning, visas endast under lg-brytpunkten. */
export function TocMobile({ headings }: TocProps) {
  if (headings.length === 0) return null;

  return (
    <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:hidden">
      <summary className="cursor-pointer list-none font-bold marker:content-none">
        Innehållsförteckning
      </summary>
      <div className="mt-4">
        <TocList headings={headings} />
      </div>
    </details>
  );
}

/** Sticky innehållsförteckning i sidofältet, visas endast från lg och uppåt. */
export function TocDesktop({ headings }: TocProps) {
  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-28 hidden self-start rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:block">
      <p className="font-bold">Innehållsförteckning</p>
      <div className="mt-4">
        <TocList headings={headings} />
      </div>
    </nav>
  );
}
