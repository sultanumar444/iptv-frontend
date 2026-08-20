const faqs = [
  {
    question: "Vilka kanaler, serier och filmer finns det?",
    answer: (
      <>
        <p>
          SVERIGE TV är den ultimata svenska TV-tjänsten som tillfredsställer
          alla dina underhållningsbehov! Vi erbjuder en komplett
          TV-upplevelse med ett omfattande utbud av sportevenemang från
          spännande UFC-fighter, flådiga motorsporter, stimulerande
          golftävlingar, fängslande NHL-spel, underhållande SHL
          Allsvenskan-serier, engagerande Champions League-matcher, och mer!
          Vårt urval av TV-kanaler, serier och filmer är stort, och vi
          lägger kontinuerligt till nytt innehåll dagligen eller veckovis
          för att hålla våra tittare engagerade och underhållna!
        </p>
        <p className="mt-4">
          Med SVERIGE IPTV kan du njuta av den ultimata TV-upplevelsen med
          din familj och vänner. Vår tjänst är utformad för att tillgodose
          alla åldersgrupper, vilket gör den till ett utmärkt val för
          familjer. Från de senaste Hollywood-blockbusterfilmerna till några
          av de mest populära TV-programmen har vi allt! Vårt
          innehållsbibliotek är enormt, och vi är stolta över att ha något
          för alla.
        </p>
        <p className="mt-4">
          Så vad väntar du på? Registrera dig för SVERIGE TV idag och
          upplev den bästa svenska TV-tjänsten med ett omfattande utbud av
          sport, TV-kanaler, serier och filmer. Vi garanterar att du inte
          kommer bli besviken!
        </p>
      </>
    ),
  },
  {
    question: "Hur bra fungerar kanalerna?",
    answer: (
      <p>
        Sverige TV har en drifttid som genomsnittligt ligger på 99,8 %.
        Vilket innebär att våra kanaler fungerar felfritt under 99,8 % av
        tiden. Detta för att du ska slippa buffrande och andra
        störningsmoment. Vi är stolta över att kunna erbjuda en så hög nivå
        av pålitlighet till våra användare, och vi arbetar ständigt för att
        förbättra vår service och vidareutveckla våra tekniska lösningar.
        Genom våra dedikerade tekniker och moderna servers kan vi
        säkerställa att du alltid har tillgång till kvalitativ underhållning
        med kristallklar skärpa.
      </p>
    ),
  },
  {
    question: "Kan jag byta till er som TV-leverantör?",
    answer: (
      <p>
        Vår process är smidig och tar maximalt 30 minuter. Vårt
        exceptionella supportteam är alltid tillgängligt för att
        säkerställa en sömlös installation och hjälpa till med eventuella
        frågor du kan ha längs vägen. Vi är dedikerade till att ge det
        bästa för våra kunder, och vår kundsupport tillhandahåller den
        hjälp du behöver.
      </p>
    ),
  },
  {
    question: "Är det bindningstid?",
    answer: (
      <p>
        Vi har ingen fastbindning på våra prenumerationer. Du betalar för
        den period du önskar, och det är upp till dig om du vill förnya
        den. Några dagar innan din prenumeration löper ut skickar vi dig
        ett mail ifall du vill förlänga den.
      </p>
    ),
  },
  {
    question: "Finns det undertexter?",
    answer: <p>Vi tillhandahåller undertexter för TV-kanaler, filmer och serier.</p>,
  },
  {
    question: "Vad har ni för betalningssätt?",
    answer: (
      <p>
        För tillfället tillhandahåller vi alternativ för kortbetalning och
        kryptovaluta. Om du har några frågor eller funderingar, står vår
        support till ditt förfogande via chatt eller e-post.{" "}
        <a href="mailto:support@sverigeiptv.net" className="text-sky-400 hover:underline">
          support@sverigeiptv.net
        </a>
      </p>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Vanliga Frågor
      </h2>

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
