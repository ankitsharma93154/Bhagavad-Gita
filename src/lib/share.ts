import { SITE_URL } from "./seo"
import type { Verse } from "@/data/verses"
import { verseSlug } from "@/data/verses"

export function verseUrl(v: Verse): string {
  return `${SITE_URL}/quotes/${verseSlug(v)}`
}

export function verseShareText(v: Verse): string {
  return `"${v.quote}" (Bhagavad Gita ${v.chapter}.${v.verse})`
}

export async function copyVerseLink(v: Verse): Promise<"copied" | "failed"> {
  const url = verseUrl(v)
  try {
    await navigator.clipboard.writeText(url)
    return "copied"
  } catch {
    return "failed"
  }
}

export function whatsappShareUrl(v: Verse): string {
  const message = `${verseShareText(v)}\n${verseUrl(v)}`
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}
