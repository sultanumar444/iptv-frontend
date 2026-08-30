"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppleTvStepImage({
  src,
  alt,
  aspectClass,
  sizes,
}: {
  src: string;
  alt: string;
  aspectClass: string;
  sizes: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Förstora bild: ${alt}`}
        className={`${aspectClass} block w-full cursor-zoom-in bg-black`}
      >
        <div className="relative h-full w-full">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Stäng"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative h-full max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
