export type AppleTvAppGuide = {
  /** Måste matcha slug i apple-tv-guides.ts */
  slug: string;
  /** Rubrik i page title bar, t.ex. "IPTVX Instruktioner" */
  pageTitle: string;
  /** Ingress under rubriken i page title bar */
  pageDescription: string;
  /** Valfri CTA-knapp i page title bar, t.ex. "GRATIS TEST" */
  pageCtaLabel?: string;
  pageCtaHref?: string;
  /** Valfri rad under CTA-knappen i page title bar, t.ex. en scroll-hint */
  pageScrollHint?: string;
  /** Valfri steg-för-steg-sektion som visas direkt efter page title bar, före allt annat. */
  topStepsSection?: {
    heading?: string;
    columns?: 2 | 3 | 4 | 5;
    steps: { step: number; image: string; body: string }[];
  };
  /** Enheter som visas som knappar i enhetsväljaren, varje knapp länkar till en sektion på sidan */
  deviceTabs: { label: string; href: string }[];
  /** Rubrik ovanför enhetsväljarens knappar */
  selectorHeading: string;
  /** Rubrik för instruktionsavsnittet */
  instructionsHeading: string;
  /** Ingress före punktlistan */
  instructionsIntro: string;
  /** Valfria nedladdningslänkar (t.ex. Google Play, App Store), visas som en egen rad med riktiga länkar */
  instructionsDownloadLinks?: { label: string; href: string }[];
  /** Valfri rad direkt före punktlistan, t.ex. "Du kan lägga till din IPTV-spellista på två sätt:" */
  uploadMethodsIntro?: string;
  /** Punktlista över sätt att ladda upp kanaler/spellista */
  uploadMethods: string[];
  /** Ett eller flera stycken text efter punktlistan */
  instructionsBody: string[];
  /** Valfri bild bredvid instruktionstexten */
  instructionsImage?: string;
  /** Vilken sida bilden hamnar på (sm+). Standard: "right" */
  instructionsImagePosition?: "left" | "right";
  /**
   * Nedanstående avsnitt är valfria — sidan renderar bara de sektioner som
   * finns ifyllda. Så kan varje app-guide byggas ut sektion för sektion,
   * precis som IPTVX gjordes.
   */
  /**
   * "Vilka enheter kan jag använda?"-avsnittet: en rubrik + lista med
   * enhetsomdömen. Varje enhet renderas i sin helhet (omdöme → egen
   * Specifikationer → egna instruktioner) innan nästa enhet börjar — så
   * "Apple TV Instruktioner" hamnar direkt efter Apple TV, inte efter alla
   * enheters omdömen. Alla fält utöver heading/body är valfria.
   */
  deviceCompatSection?: {
    heading: string;
    devices: {
      heading: string;
      /** Ett stycke, eller flera stycken (visas i ordning). Stöder [text](url)-länkar. */
      body: string | string[];
      specsImage?: string;
      specs?: { label: string; value: string }[];
      /** Valfri varningstext (OBS-ruta) under specifikationerna */
      specsWarning?: string;
      /** "stack" (standard) = bild ovanför specs. "row" = bild vänster / specs höger i en rad (sm+). */
      specsLayout?: "stack" | "row";
      /** Rama in Specifikationer-avsnittet i ett kort med bakgrund/border. */
      specsCard?: boolean;
      /** Valfritt ankare, t.ex. för enhetsväljarens knappar att länka till */
      stepsId?: string;
      /** Valfri rubrik ovanför enhetens bildrutnät, t.ex. "Apple TV Instruktioner" */
      stepsHeading?: string;
      /** Antal kolumner på desktop-bredd. Standard: 2 */
      stepsColumns?: 2 | 3 | 4 | 5;
      /** Hur stegnumret visas. Standard: "row" */
      stepsNumberLayout?: "row" | "stacked" | "side";
      steps?: { step: number; image: string; body: string }[];
    }[];
  };
  /**
   * Extra avsnitt för app-varianter (t.ex. "GSE Player", "GSE Online"):
   * rubrik + text, med en valfri bild till vänster.
   */
  variantSections?: {
    heading: string;
    body: string;
    image?: string;
    /** Vilken sida bilden hamnar på (sm+). Standard: "left". */
    imagePosition?: "left" | "right";
  }[];
  /** Bild i /public som visas i specifikationsavsnittet */
  specsImage?: string;
  /** Rad-för-rad specifikationer, t.ex. { label: "App", value: "IPTVX" } */
  specs?: { label: string; value: string }[];
  /** Valfri varningstext (OBS-ruta) under specifikationerna */
  specsWarning?: string;
  /** Gör bilden till vänster i specifikationsavsnittet lite mindre */
  specsSmallImage?: boolean;
  /** "Ladda ned och kom igång"-introtexten, visas bredvid Specifikationer */
  downloadSection?: {
    heading: string;
    /** Första stycket, innan nedladdningsraden */
    introBeforeDownload: string;
    /** Framhävd rad, t.ex. "Ladda ned IPTVX från App Store" */
    downloadLabel: string;
    /** Valfri riktig länk (t.ex. App Store-URL) för downloadLabel. Utan den visas raden bara som framhävd text. */
    downloadHref?: string;
    /** Stycken direkt efter nedladdningsraden, innan en eventuell lista */
    introAfterDownload: string[];
    /** Valfri inledande rad till en punktlista, t.ex. "För bästa upplevelse rekommenderar vi:" */
    recommendationsIntro?: string;
    /** Valfri punktlista, t.ex. rekommenderad utrustning */
    recommendations?: string[];
    /** Valfria avslutande stycken efter listan */
    closingParagraphs?: string[];
  };
  /**
   * En eller flera steg-för-steg-sektioner med skärmdumpar, oberoende av
   * downloadSection. Lägg till en ny post här för varje enhet som får sin
   * egen instruktionsguide (t.ex. "Apple TV Instruktioner", "Smart TV
   * Instruktioner").
   */
  stepSections?: {
    /** Valfritt ankare, t.ex. för enhetsväljarens knappar att länka till */
    id?: string;
    /** Valfri rubrik ovanför bildrutnätet, t.ex. "Apple TV Instruktioner" */
    heading?: string;
    /** Antal kolumner på desktop-bredd. Standard: 2 */
    columns?: 2 | 3 | 4 | 5;
    steps: { step: number; image: string; body: string }[];
  }[];
  /** Avsnitt för mobil/surfplatta: enhetsbeskrivningar, specifikationer och steg-för-steg */
  mobileSection?: {
    id: string;
    devices: { heading: string; body: string | string[] }[];
    specsImage: string;
    specs: { label: string; value: string }[];
    /** "row" (standard) = bild vänster, specs höger. "stack" = bild ovanför specs. */
    specsLayout?: "stack" | "row";
    /** Rama in Specifikationer-avsnittet i ett kort med bakgrund/border. */
    specsCard?: boolean;
    instructionsHeading: string;
    /** Antal kolumner på desktop-bredd för stegrutnätet. Standard: 4 */
    stepsColumns?: 2 | 3 | 4 | 5;
    /** "row" = nummer bredvid texten (standard). "stacked" = nummer centrerat ovanför centrerad text. */
    stepsNumberLayout?: "row" | "stacked" | "side";
    /** Åsidosätt bildrutans aspect-ratio-klass för stegbilderna (standard: aspect-[9/19]). */
    stepsPortraitAspectClass?: string;
    /** Mellanrum mellan stegrutorna (standard: gap-6). */
    stepsGapClass?: string;
    /** Åsidosätt stegkortens max-bredd (standard: max-w-[220px]). */
    stepsPortraitMaxWidthClass?: string;
    steps: { step: number; image: string; body: string }[];
  };
  /** FAQ-avsnitt med accordion och en CTA-knapp */
  faqSection?: {
    heading: string;
    items: { question: string; answer: string }[];
    ctaLabel: string;
    ctaHref: string;
  };
  /** Kompletterande info-avsnitt (t.ex. undertexter, EPG) med en CTA-knapp */
  infoSection?: {
    blocks: { heading: string; body: string[] }[];
    ctaLabel: string;
    ctaHref: string;
    /** "grid" (standard) = 2 kolumner vid fler än 1 block. "single" = alltid 1 kolumn/rad. */
    layout?: "grid" | "single";
  };
};
