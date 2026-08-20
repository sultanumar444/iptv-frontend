import Image from "next/image";

const quickLinks = [
  { label: "DMCA", href: "#" },
  { label: "Integritetspolicy", href: "#" },
  { label: "Anvandarvillkor", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0e1a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <Image
            src="/sverige-logo.webp"
            alt="SverigeIPTV"
            width={500}
            height={183}
            className="h-24 w-auto"
          />
          <p className="mt-6 text-sm text-white/70">
            Sverige TV, den bästa TV-tjänsten i Norden, med tusentals nöjda
            kunder och 5 stjärnor på Trust Pilot. Vilket gör oss till den
            ledande TV-leverantören både i Sverige och i Norden 2026. Vårt
            mål är att fler ska få ta del av TV i det svenska folkhemmet.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Snabba Länkar</h3>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xs">
          <h3 className="text-lg font-bold">Kundtjänst 24/7</h3>
          <a
            href="mailto:supporten@sverigeiptv.net"
            className="mt-6 flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7" />
            </svg>
            supporten@sverigeiptv.net
          </a>

          <Image
            src="/payment-methods.png"
            alt="Betalningsmetoder"
            width={768}
            height={211}
            className="mt-6 h-auto w-full max-w-xs"
          />

          <Image
            src="/trustpilot.png"
            alt="Rated excellent on Trustpilot"
            width={768}
            height={128}
            className="mt-4 h-auto w-full max-w-xs"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-white/60 sm:flex-row">
          <p>© 2026 SVERIGE IPTV. All rights reserved.</p>
          <p>
            Epost:{" "}
            <a href="mailto:supporten@sverigeiptv.net" className="text-sky-400 hover:underline">
              supporten@sverigeiptv.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
