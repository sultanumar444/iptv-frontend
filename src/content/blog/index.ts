/**
 * Så lägger du till ett nytt blogginlägg:
 * 1. Skapa en ny fil här i mappen, t.ex. "mitt-nya-inlagg.ts"
 *    (kopiera valfri befintlig fil som mall).
 * 2. Fyll i fälten (slug, title, excerpt, image, date, readTime, content,
 *    tags). Se types.ts för alla fält.
 * 3. Importera filen nedan och lägg till den i `blogPosts`-listan.
 *
 * SEO: lägg till ett `seo`-objekt (metaTitle, metaDescription, keywords,
 * ogImage) i inlägget om du vill skriva en egen titel/beskrivning för
 * Google och sociala medier. Annars används title/excerpt automatiskt.
 *
 * För att redigera ett inlägg: öppna bara dess fil och ändra texten.
 * För att ta bort ett inlägg: ta bort importen och raden i listan
 * nedan (filen kan sparas eller raderas).
 */

import basta_filmerna_och_serierna_just_nu from "./basta-filmerna-och-serierna-just-nu";
import fem_anledningar_att_valja_iptv from "./5-anledningar-att-valja-iptv";
import installera_sverige_tv_pa_smart_tv from "./installera-sverige-tv-pa-smart-tv";
import populara_sportkanaler_i_vart_utbud from "./populara-sportkanaler-i-vart-utbud";
import streama_i_4k_vad_du_behover_veta from "./streama-i-4k-vad-du-behover-veta";
import titta_pa_svenska_tv_kanaler_utomlands from "./titta-pa-svenska-tv-kanaler-utomlands";
import valj_ratt_iptv_paket from "./valj-ratt-iptv-paket";

export type { BlogPost } from "./types";

const allPosts = [
  fem_anledningar_att_valja_iptv,
  installera_sverige_tv_pa_smart_tv,
  populara_sportkanaler_i_vart_utbud,
  streama_i_4k_vad_du_behover_veta,
  basta_filmerna_och_serierna_just_nu,
  valj_ratt_iptv_paket,
  titta_pa_svenska_tv_kanaler_utomlands,
];

export const blogPosts = [...allPosts].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
