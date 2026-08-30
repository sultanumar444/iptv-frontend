import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "basta-filmerna-och-serierna-just-nu",
  title: "De bästa filmerna och serierna att streama just nu",
  excerpt:
    "Osäker på vad du ska se ikväll? Här är några av de mest populära titlarna i vårt bibliotek just nu.",
  image: "/best-stream.jpg",
  date: "2026-06-25",
  readTime: "3 min läsning",
  intro: [
    "Vårt innehållsbibliotek uppdateras kontinuerligt med nya filmer och serier, och vi har satt ihop en lista över några av de mest populära titlarna just nu.",
  ],
  content: [
    {
      heading: "Populära filmer just nu",
      body: [
        "Bland de mest sedda filmerna hittar vi stora actionäventyr och prisbelönta dramer som passar alla smaker.",
      ],
    },
    {
      heading: "Populära serier just nu",
      body: [
        "På serie-sidan lockas tittarna av allt från fantasyepos till spännande thrillers, med nya avsnitt som läggs till varje vecka.",
      ],
    },
    {
      heading: "Utforska hela biblioteket",
      body: [
        "Nyfiken på vad som finns tillgängligt? Logga in på din spelare och utforska hela biblioteket – nytt innehåll läggs till dagligen och veckovis.",
      ],
    },
  ],
  tags: ["Filmer", "Serier", "Underhållning"],
};

export default post;
