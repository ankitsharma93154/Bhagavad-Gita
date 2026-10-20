import type { Verse } from "@/data/verses"
import { getThemeBySlug } from "@/data/themes"

function normalize(value: string): string {
  return value.toLowerCase().trim()
}

export function searchVerses(verses: Verse[], rawQuery: string): Verse[] {
  const query = normalize(rawQuery)
  if (!query) return verses

  const chapterVerseMatch = query.match(/^(\d+)[.\-:\s]+(\d+)$/)
  if (chapterVerseMatch) {
    const [, chapter, verse] = chapterVerseMatch
    return verses.filter(
      (v) => String(v.chapter) === chapter && String(v.verse) === verse,
    )
  }

  return verses.filter((v) => {
    const haystack = [
      v.english,
      v.meaning,
      v.quote,
      v.transliteration ?? "",
      v.shlokaName ?? "",
      v.sanskrit,
      `chapter ${v.chapter} verse ${v.verse}`,
      `${v.chapter}.${v.verse}`,
      ...v.categories.map((c) => getThemeBySlug(c)?.title ?? c),
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(query)
  })
}
