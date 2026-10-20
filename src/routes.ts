import { themes } from "@/data/themes"
import { verses, verseSlug } from "@/data/verses"
import { hasHindiPage } from "@/data/versesHindi"

export interface StaticRouteMeta {
  path: string
  /** Sitemap priority hint, 0–1. Higher for pages closer to the primary keyword targets. */
  priority: number
}

/**
 * Every route that should be statically prerendered and listed in the sitemap.
 * Single source of truth shared by scripts/prerender.mjs and scripts/sitemap.mjs, so the
 * prerendered route set and the sitemap can never drift apart.
 *
 * Deliberately excludes `/saved` (personalization-only, no unique server content, disallowed
 * in robots.txt) and the `*` NotFound route (a soft-404 has no single canonical URL to prerender).
 */
export function getStaticRoutePaths(): StaticRouteMeta[] {
  return [
    { path: "/", priority: 1.0 },
    { path: "/quotes", priority: 0.9 },
    { path: "/themes", priority: 0.8 },
    { path: "/languages/hindi", priority: 0.6 },
    { path: "/about", priority: 0.3 },
    // Seasonal: Gita Jayanti falls in December. Kept live all year so it builds up ranking.
    { path: "/gita-jayanti", priority: 0.8 },
    ...verses.map((v) => ({ path: `/quotes/${verseSlug(v)}`, priority: 0.7 })),
    // Hindi verse pages exist only once a verse has Hindi content (src/data/versesHindi.ts).
    ...verses.filter(hasHindiPage).map((v) => ({ path: `/hi/quotes/${verseSlug(v)}`, priority: 0.7 })),
    ...themes.map((t) => ({ path: `/themes/${t.slug}`, priority: 0.6 })),
  ]
}
