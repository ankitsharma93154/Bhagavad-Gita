import type { ThemeSlug } from "./themes"
import { themes } from "./themes"
import type { Verse } from "./verses"

/**
 * The topic line printed at the top of a verse's Pinterest pin, so someone scrolling a feed
 * can tell in a glance what it's about. Only used by scripts/share-images (pins aren't part
 * of the site), but kept in src so the Devanagari font subset covers the Hindi labels.
 *
 * Situational topics win, in PIN_SITUATIONS order, matching the board each pin is filed under
 * in scripts/share-images/build.mjs. Otherwise the verse's first theme is used.
 */
export const PIN_SITUATIONS: ThemeSlug[] = ["krishna", "death-and-loss", "anger", "students", "stress", "love"]

const LABELS: Partial<Record<ThemeSlug, { en: string; hi: string }>> = {
  krishna: { en: "Krishna's words", hi: "श्रीकृष्ण के वचन" },
  "death-and-loss": { en: "The Gita on loss", hi: "मृत्यु और शोक पर गीता" },
  anger: { en: "The Gita on anger", hi: "क्रोध पर गीता" },
  students: { en: "The Gita for students", hi: "विद्यार्थियों के लिए गीता" },
  stress: { en: "The Gita for stress", hi: "तनाव पर गीता" },
  love: { en: "The Gita on love", hi: "प्रेम पर गीता" },
  karma: { en: "The Gita on karma", hi: "कर्म पर गीता" },
  motivation: { en: "The Gita on motivation", hi: "गीता से प्रेरणा" },
  "positive-thinking": { en: "The Gita on a steady mind", hi: "सकारात्मक सोच पर गीता" },
  success: { en: "The Gita on success", hi: "सफलता पर गीता" },
  peace: { en: "The Gita on peace", hi: "शांति पर गीता" },
  wisdom: { en: "The Gita on wisdom", hi: "ज्ञान पर गीता" },
  courage: { en: "The Gita on courage", hi: "साहस पर गीता" },
  detachment: { en: "The Gita on letting go", hi: "वैराग्य पर गीता" },
  purpose: { en: "The Gita on purpose", hi: "जीवन के उद्देश्य पर गीता" },
  life: { en: "The Gita on life", hi: "जीवन पर गीता" },
  "heart-touching": { en: "Words from the Gita", hi: "गीता के अनमोल वचन" },
}

/** The situational theme a verse's pin is filed under, if any. */
export function pinSituation(v: Pick<Verse, "id">): ThemeSlug | undefined {
  return PIN_SITUATIONS.find((slug) => themes.find((t) => t.slug === slug)?.verseIds?.includes(v.id))
}

export function pinTopic(v: Pick<Verse, "id" | "categories">, lang: "en" | "hi"): string | undefined {
  const slug = pinSituation(v) ?? v.categories[0]
  return LABELS[slug]?.[lang]
}
