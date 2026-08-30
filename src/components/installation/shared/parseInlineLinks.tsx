/**
 * Tolkar enkel markdown-länksyntax i vanlig text, t.ex.
 * "prova [IPTV Smarters Pro](https://...)" och gör om det till riktig
 * text + <a>-länkar. Använd i valfri brödtext för att kunna skriva
 * innehåll med länkar utan att behöva bygga en särskild datastruktur.
 */
import type { ReactElement } from "react";

export default function parseInlineLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactElement)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        className="font-semibold text-violet-400 hover:underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
