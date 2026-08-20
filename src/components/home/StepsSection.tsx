import Link from "next/link";

const steps = [
  {
    title: "1. Välj Paket",
    description: "Välj mellan abonnemang på 1, 3, 6 eller 12 månader.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16l-1.5 10.5a1.5 1.5 0 01-1.48 1.28H6.98A1.5 1.5 0 015.5 18.5L4 8zM8 8a4 4 0 118 0" />
      </svg>
    ),
  },
  {
    title: "2. Slutför betalning",
    description: "Fyll i formuläret och genomför betalningen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-10 w-10">
        <rect x="2.5" y="5.5" width="19" height="13" rx="1.5" />
        <path strokeLinecap="round" d="M2.5 9.5h19M6 15h4" />
      </svg>
    ),
  },
  {
    title: "3. Njut av din TV-kanaler",
    description:
      "Du får dina inloggningsuppgifter tillsammans med installationsanvisningarna till din epost.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-10 w-10">
        <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
      </svg>
    ),
    withButton: true,
  },
];

export default function StepsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Skaffa svenska TV-streamingkanaler i 3 steg
      </h2>

      <div className="mt-12 grid grid-cols-1 divide-y divide-white/10 rounded-3xl border border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center px-8 py-10 text-center"
          >
            <div className="text-white">{step.icon}</div>
            <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
            <p className="mt-3 text-sm text-white/70">{step.description}</p>
            {step.withButton && (
              <Link
                href="/vart-paket"
                className="mt-6 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500"
              >
                Bli Kund
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
