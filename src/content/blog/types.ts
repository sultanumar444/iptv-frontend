export type BlogPost = {
  /** Måste matcha filnamnet (utan .ts) — används i URL:en /bloggar/[slug] */
  slug: string;
  title: string;
  excerpt: string;
  /** Sökväg till bild i /public, t.ex. "/mitt-inlagg.webp" */
  image: string;
  /** Format: ÅÅÅÅ-MM-DD */
  date: string;
  readTime: string;
  /**
   * Inledande stycke(n) som visas direkt under bilden, innan
   * innehållsförteckningen och de rubrikindelade avsnitten.
   */
  intro: string[];
  /**
   * Artikelns avsnitt. Varje avsnitt får en rubrik (H2) som också blir
   * en länk i innehållsförteckningen (Table of Contents) i sidofältet.
   */
  content: {
    heading: string;
    body: string[];
  }[];
  /** Ämnestaggar, visas på inlägget och används för SEO-nyckelord */
  tags: string[];
  /**
   * Valfria SEO-inställningar för inlägget. Allt är valfritt — om ett
   * fält utelämnas används title/excerpt/image/tags istället.
   */
  seo?: {
    /**
     * Titel i webbläsarfliken och Google-sökresultat (om annan än title).
     * Skriv INTE "| SverigeIPTV" i slutet — det läggs till automatiskt.
     */
    metaTitle?: string;
    /** Beskrivning i Google-sökresultat och när länken delas (om annan än excerpt) */
    metaDescription?: string;
    /** Extra sökord utöver taggarna */
    keywords?: string[];
    /** Bild som visas när länken delas på t.ex. Facebook/X (om annan än image) */
    ogImage?: string;
  };
};
