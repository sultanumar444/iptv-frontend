import Image from "next/image";
import Link from "next/link";

export default function PageTitleBar({ title }: { title: string }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/ptb.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0a0e1a]/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-white/70">
          <Link href="/" className="hover:text-white hover:underline">
            Hem
          </Link>{" "}
          / {title}
        </p>
      </div>
    </div>
  );
}
