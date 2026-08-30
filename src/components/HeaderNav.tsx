"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/vart-paket", label: "Vårt paket" },
  { href: "/kanallista", label: "Kanallista" },
  {
    href: "/installationsguider",
    label: "Installationsguider",
    children: [
      { href: "/installationsguider/apple-tv", label: "Apple TV" },
      { href: "/installationsguider/smart-tv", label: "Smart TV" },
      { href: "/installationsguider/ios-android", label: "iOS/Android" },
      { href: "/installationsguider/windows-mac", label: "Windows/Mac" },
      { href: "/installationsguider/android-tv", label: "Android TV" },
      { href: "/installationsguider/formuler", label: "Formuler box" },
      { href: "/installationsguider/tvip-s-box", label: "TVIP S-BOX" },
      { href: "/installationsguider/nvidia-shield", label: "Nvidia Shield" },
      { href: "/installationsguider/chromecast-instruktioner", label: "Chromecast" },
    ],
  },
  { href: "/kontakta", label: "Kontakta" },
  { href: "/bloggar", label: "Bloggar" },
];

export default function HeaderNav({ cartIcon }: { cartIcon: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8 text-[15px] font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={
                    active
                      ? "flex items-center gap-1 text-[#8b7bf0]"
                      : "flex items-center gap-1 text-white/90 transition-colors hover:text-[#8b7bf0]"
                  }
                >
                  {link.label}
                  {link.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>

                {link.children && (
                  <ul className="invisible absolute top-full left-0 z-50 mt-3 min-w-[180px] -translate-y-1 rounded-xl border border-white/10 bg-[#0a0e1a] py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-white/80 transition-colors hover:bg-white/5 hover:text-[#8b7bf0]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {cartIcon}

        <button
          type="button"
          aria-label="Öppna meny"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-7 w-7"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full border-t border-white/10 bg-[#0a0e1a] lg:hidden">
          <ul className="flex flex-col px-6 py-4 text-[15px] font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      active
                        ? "block py-2.5 text-[#8b7bf0]"
                        : "block py-2.5 text-white/90 hover:text-[#8b7bf0]"
                    }
                  >
                    {link.label}
                  </Link>

                  {link.children && (
                    <ul className="ml-4 border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-white/70 hover:text-[#8b7bf0]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
