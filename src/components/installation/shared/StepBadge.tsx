export default function AppleTvStepBadge({ step }: { step: number }) {
  return (
    <div className="flex h-16 w-14 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-500 to-sky-500 shadow-[0_0_25px_-5px] shadow-violet-500/60">
      <span className="text-xl font-extrabold leading-none text-white">
        {step}
      </span>
      <span className="mt-1 text-[9px] font-bold tracking-widest text-white/90">
        STEG
      </span>
    </div>
  );
}
