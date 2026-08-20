"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/vart-paket", label: "Vårt paket" },
  { href: "/kanallista", label: "Kanallista" },
  { href: "/installationsguider", label: "Installationsguider" },
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
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    active
                      ? "text-[#8b7bf0]"
                      : "text-white/90 transition-colors hover:text-[#8b7bf0]"
                  }
                >
                  {link.label}
                </Link>
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
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
