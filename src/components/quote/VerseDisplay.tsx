import type { Verse } from "@/data/verses"
import { BotanicalCorner, FlourishDivider, DiamondDivider } from "@/components/quote/decorative"

interface VerseDisplayProps {
  verse: Verse
}

/** The Sanskrit reading centerpiece of a verse detail page: original text plus transliteration. */
export function VerseDisplay({ verse }: VerseDisplayProps) {
  return (
    <div className="shadow-soft relative overflow-hidden rounded-3xl border border-line-soft bg-paper-dim p-6 text-center sm:p-14">
      <BotanicalCorner className="pointer-events-none absolute bottom-0 left-0 h-40 w-32 text-clay/10 sm:h-56 sm:w-44" />
      <BotanicalCorner className="pointer-events-none absolute right-0 bottom-0 h-40 w-32 -scale-x-100 text-clay/10 sm:h-56 sm:w-44" />

      <div className="relative">
        <FlourishDivider />
        <p
          lang="sa"
          className="text-gold-shine animate-shine motion-reduce:animate-none mt-5 font-devanagari text-3xl leading-loose sm:mt-6 sm:text-4xl"
        >
          {verse.sanskrit}
        </p>
        {verse.transliteration && (
          <>
            <DiamondDivider className="mt-5 sm:mt-6" />
            <p className="reading-width mx-auto mt-5 font-serif text-base leading-relaxed text-ink-faint italic sm:mt-6 sm:text-lg">
              {verse.transliteration}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
