const faqs = [
  {
    question: "Vad du ska tänka på vid installation av streaming",
    answer: (
      <>
        <p>
          Vid installation av streaming finns det några viktiga saker att
          tänka på för att säkerställa att allt fungerar smidigt. Följ
          anvisningarna i manualen steg för steg – det hjälper dig att
          undvika vanliga problem och förseningar.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Kontrollera att du har en stabil och snabb internetanslutning.
            Att installera streaming kräver hög bandbredd för att fungera
            utan avbrott.
          </li>
          <li>
            Använd de specifika appar och boxar som rekommenderas i
            manualen. Om du använder annan utrustning kan vi inte
            garantera att det fungerar som förväntat.
          </li>
          <li>
            Se till att alla appar och enheter är uppdaterade till de
            senaste versionerna, eftersom detta kan lösa
            kompatibilitetsproblem och förbättra prestandan.
          </li>
          <li>
            Kontrollera att du har den senaste kanallistan från din
            streamingleverantör. Felaktiga listor kan leda till att vissa
            kanaler inte fungerar.
          </li>
          <li>
            Ibland kan brandväggar och antivirusprogram blockera
            streamingtrafik. Se till att din enhet har de nödvändiga
            undantagen i dessa program.
          </li>
          <li>
            Anpassa inställningarna för bästa möjliga prestanda och
            bildkvalitet utifrån din internetanslutning och enhetens
            kapacitet.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Behöver jag en streamingbox eller räcker det med en app?",
    answer: (
      <>
        <p>
          En streamingbox är en dedikerad enhet som ansluts till din TV
          och hanterar streaming. En streamingapp är en programvara som
          du kan installera på olika enheter, som en smart-TV,
          smartphone, surfplatta eller dator.
        </p>
        <p className="mt-4">
          Valet mellan en streamingbox och en app beror på din nuvarande
          utrustning och dina preferenser. Om du har en modern smart-TV
          och vill ha flexibilitet, kan en app räcka. Om du vill ha en
          stabil och pålitlig upplevelse, särskilt om du har en äldre TV,
          kan en streamingbox vara det bästa alternativet.
        </p>
      </>
    ),
  },
  {
    question: "Kontakta Sverige Streaming kundtjänst vid installationsproblem",
    answer: (
      <>
        <p>
          När du installerar streaming är det viktigt att noggrant följa
          anvisningarna i manualen och använda de rekommenderade
          applikationerna och boxarna för att säkerställa en smidig
          installation. Vid eventuella installationsproblem, tveka inte
          att kontakta oss för hjälp.
        </p>
        <p className="mt-4">
          Vi strävar efter att erbjuda Sveriges främsta kundservice och är
          tillgängliga dygnet runt för att assistera dig. Du kan enkelt nå
          oss genom att skicka ett e-postmeddelande till{" "}
          <a
            href="mailto:supporten@sverigeiptv.net"
            className="text-sky-400 hover:underline"
          >
            supporten@sverigeiptv.net
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function InstallFaq() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-violet-400">
          VANLIGA FRÅGOR
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Vanliga frågor
        </h2>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            className="group border-b border-white/10 last:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white/[0.03] px-6 py-5 font-semibold marker:content-none hover:bg-white/[0.06]">
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>

            <div className="px-6 py-6 text-sm leading-relaxed text-white/70">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
