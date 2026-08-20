const items = [
  {
    title: "TV Prisgaranti",
    description:
      "Vi erbjuder den bästa streamingupplevelsen på marknaden till några av de lägsta priserna. Kvaliteten kompromissas aldrig, trots det förmånliga priset.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m3.75-9.75c0-1.243-1.679-2.25-3.75-2.25s-3.75 1.007-3.75 2.25S9.929 10.5 12 10.5s3.75 1.007 3.75 2.25S14.071 15 12 15s-3.75-1.007-3.75-2.25" />
      </svg>
    ),
  },
  {
    title: "Bästa kundtjänst",
    description:
      "Vi är stolta över att erbjuda en överlägsen TV-upplevelse för våra kunder. Vår omtyckta support står redo att hjälpa dig uppleva skillnaden - kontakta oss redan idag!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5s1.25 1.5 3.5 1.5 3.5-1.5 3.5-1.5M9 9.5h.01M15 9.5h.01" />
      </svg>
    ),
  },
  {
    title: "Flest kanaler",
    description:
      "Vi erbjuder dig de bästa och flesta IPTV kanalerna i Sverige. Vårt utbud av sportevenemang, serier och filmer uppdateras ständigt för att ge dig den bästa tittarupplevelsen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
      </svg>
    ),
  },
  {
    title: "Säkra betalningar",
    description:
      "Vår anonymitet är vår högsta prioritet. Vi erbjuder därför flera säkra betalningsalternativ, däribland Bitcoins, kreditkort och Swish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="2.5" y="5.5" width="19" height="13" rx="1.5" />
        <path strokeLinecap="round" d="M2.5 9.5h19M6 15h4" />
      </svg>
    ),
  },
  {
    title: "Alltid nya filmer & serier",
    description:
      "Upptäck vårt imponerande sortiment av klassiska filmer, spännande action och älskade barnfavoriter - något som för hela familjen!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
        <path strokeLinecap="round" d="M3 9h18M3 15h18M8 4.5v15M16 4.5v15" />
      </svg>
    ),
  },
  {
    title: "TV-kanaler från hela världen",
    description:
      "Titta på svenska och internationella kanaler var du än är. Ta med dig Sverige TV vart i världen du än befinner dig.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 20h8M12 16.5V20" />
      </svg>
    ),
  },
  {
    title: "Säkra servrar",
    description:
      "Våra servrar är överlägset de bästa, snabbaste och mest pålitliga i världen. Hos oss kan du lita på att få en exceptionell TV-upplevelse.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="4" y="3.5" width="16" height="6" rx="1.2" />
        <rect x="4" y="11.5" width="16" height="6" rx="1.2" />
        <path strokeLinecap="round" d="M7.5 6.5h.01M7.5 14.5h.01" />
      </svg>
    ),
  },
  {
    title: "Alla Enheter",
    description:
      "Vårt TV-system är utformat för att leverera en enastående upplevelse på alla dina enheter – från Smart TV och Apple TV till mobiltelefoner och datorer. Vi är övertygade om att du kommer att uppskatta den smidiga och pålitliga funktionaliteten.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="7" y="2.5" width="10" height="19" rx="1.8" />
        <path strokeLinecap="round" d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    title: "Högupplöst",
    description:
      "Se våra HD-format, inklusive FHD och 4K, för en överlägsen tittarupplevelse. Vi levererar premium tv-kanaler, utan buffring eller störningar i full HD kvalitet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <rect x="2.5" y="7" width="19" height="11" rx="1.5" />
        <path strokeLinecap="round" d="M2.5 7l3-3.5h13l3 3.5" />
      </svg>
    ),
  },
];

export default function TrustGridSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <p className="font-bold tracking-wide text-emerald-400">
        ETT TRYGGT VAL MED SVERIGE IPTV OCH HÖG INTEGRITET
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
        Njut av smart Streaming TV i Sverige med skarp bild i Full HD och 4K
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-white/70">
        Utforska ett omfattande utbud av Streaming-kanaler anpassade för den
        svenska och nordiska marknaden. Njut av varierat innehåll, inklusive
        sport, filmer och serier från olika delar av världen. Tjänsten är
        utformad för att ge en stabil och kvalitativ upplevelse. Hör av dig
        för att få veta mer om våra alternativ.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-[#150f2e] p-6"
          >
            <div className="text-emerald-400">{item.icon}</div>
            <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
