import { SITE_URL } from "./seo"
import type { Verse } from "@/data/verses"
import { verseSlug } from "@/data/verses"

export function verseUrl(v: Verse): string {
  return `${SITE_URL}/quotes/${verseSlug(v)}`
}

export function verseShareText(v: Verse): string {
  return `"${v.quote}" (Bhagavad Gita ${v.chapter}.${v.verse})`
}

export async function shareVerse(v: Verse): Promise<"shared" | "copied" | "failed"> {
  const url = verseUrl(v)
  const text = verseShareText(v)

  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title: "Bhagavad Gita Quotes", text, url })
      return "shared"
    } catch {
      // user cancelled the share sheet, or share failed — fall through to copy
    }
  }

  return copyVerseLink(v)
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
