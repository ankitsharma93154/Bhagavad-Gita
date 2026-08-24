import type { Verse } from "@/data/verses"

interface VerseDisplayProps {
  verse: Verse
}

/** The Sanskrit reading centerpiece of a verse detail page: original text plus transliteration. */
export function VerseDisplay({ verse }: VerseDisplayProps) {
  return (
    <div className="rounded-3xl bg-paper-dim p-8 text-center sm:p-14">
      <p
        lang="sa"
        className="text-gold-shine animate-shine motion-reduce:animate-none font-devanagari text-3xl leading-relaxed sm:text-4xl"
      >
        {verse.sanskrit}
      </p>
      {verse.transliteration && (
        <p className="mt-5 font-serif text-lg leading-relaxed text-ink-soft italic">
          {verse.transliteration}
        </p>
      )}
    </div>
  )
}
