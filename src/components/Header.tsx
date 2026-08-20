import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";

function CartIcon() {
  return (
    <div className="relative text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.998-4.684 2.62-7.152.078-.312-.155-.598-.475-.598H5.106M7.5 14.25L5.106 5.25M7.5 14.25l-1.293 1.293c-.63.63-.184 1.707.707 1.707H18.75"
        />
      </svg>
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
        0
      </span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-[#16223f] px-4 py-3 text-center text-sm text-slate-200">
        Om du får problem med betalningen trycker du bara på den här knappen{" "}
        <Link href="/kontakta" className="text-sky-400 hover:underline">
          kontakta oss.
        </Link>
      </div>

      {/* Main nav */}
      <div className="relative bg-[#0a0e1a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <Link href="/" className="shrink-0">
            <Image
              src="/sverige-logo.webp"
              alt="SverigeIPTV"
              width={800}
              height={283}
              priority
              className="h-20 w-auto"
            />
          </Link>

          <HeaderNav cartIcon={<CartIcon />} />
        </div>
      </div>
    </header>
  );
}
