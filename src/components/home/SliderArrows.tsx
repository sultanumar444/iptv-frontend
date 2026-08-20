"use client";

function scroll(direction: "left" | "right") {
  const el = document.getElementById("media-scroller");
  if (!el) return;

  const amount = el.clientWidth * 0.8;
  const start = el.scrollLeft;
  const maxScroll = el.scrollWidth - el.clientWidth;
  const atEnd = start >= maxScroll - 2;
  const atStart = start <= 2;

  let target: number;
  if (direction === "right" && atEnd) {
    target = 0;
  } else if (direction === "left" && atStart) {
    target = maxScroll;
  } else {
    target = Math.max(
      0,
      Math.min(start + (direction === "left" ? -amount : amount), maxScroll)
    );
  }

  const distance = target - start;
  const duration = 400;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - (1 - progress) * (1 - progress);
    el.scrollLeft = start + distance * eased;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function SliderArrows() {
  return (
    <>
      <button
        type="button"
        aria-label="Föregående"
        onClick={() => scroll("left")}
        className="absolute top-1/2 -left-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 sm:flex"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Nästa"
        onClick={() => scroll("right")}
        className="absolute top-1/2 -right-4 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 sm:flex"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </>
  );
}
