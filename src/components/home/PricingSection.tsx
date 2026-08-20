const features = [
  "Stort utbud av underhållningsalternativ",
  "Live- och on-demand-visning",
  "Stöd för Catch-up, Timeshift och EPG",
  "Tillgång till innehåll från auktoriserade leverantörer",
  "Stöd för SD, HD, FHD och 4K",
  "Regelbundna uppdateringar av tjänst och innehåll",
  "Kompatibel med Android, PC, Smart TV, Mac, iOS och andra stödda enheter",
];

const plans = [
  { duration: "1 MÅNAD", price: "299kr" },
  { duration: "3 MÅNADER", price: "499kr" },
  { duration: "6 MÅNADER", price: "899kr" },
  { duration: "12 MÅNADER", price: "1499kr", oldPrice: "1599kr" },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className="h-5 w-5 shrink-0 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5"
    >
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Begränsat erbjudande på TV-streaming i Sverige vid 1 års
          abonnemang
        </h2>
        <p className="mt-4 text-white/70">
          Utnyttja det fantastiska streaming-erbjudandet och spara tusentals
          kronor per år.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.duration}
            className="flex flex-col rounded-3xl bg-gradient-to-b from-violet-600 to-indigo-950 p-8"
          >
            <h3 className="text-center text-2xl font-extrabold">
              {plan.duration}
            </h3>

            <p className="mt-4 text-center text-sm text-white/70">
              Engångsbetalning – Inget bindande avtal
            </p>

            <p className="mt-4 text-center text-4xl font-extrabold">
              {plan.oldPrice && (
                <span className="mr-2 text-2xl font-semibold text-white/50 line-through">
                  {plan.oldPrice}
                </span>
              )}
              <span className={plan.oldPrice ? "text-sky-400" : ""}>
                {plan.price}
              </span>
            </p>

            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {features.map((feature, i) => (
                <li
                  key={feature}
                  className={
                    i < features.length - 1
                      ? "flex items-start gap-3 border-b border-white/10 pb-4 text-sm text-white/90"
                      : "flex items-start gap-3 text-sm text-white/90"
                  }
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-4 font-bold text-black transition-colors hover:bg-lime-300"
            >
              <MonitorIcon />
              BESTÄLL HÄR!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
