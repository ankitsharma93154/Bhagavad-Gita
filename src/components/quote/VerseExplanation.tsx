import { ChevronDown } from "lucide-react"
import type { Verse } from "@/data/verses"

/** Splits a field into paragraphs on blank lines, so a section can run longer when it needs to. */
function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\n+/).map((paragraph, i) => (
        // eslint-disable-next-line react/no-array-index-key -- static, order-stable split
        <p key={i} className="mt-4 leading-relaxed text-ink-soft first:mt-0">
          {paragraph}
        </p>
      ))}
    </>
  )
}

function SectionHeading({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-serif text-xl text-ink sm:text-2xl">{children}</h2>
      <span className="mt-2 block h-0.5 w-8 bg-clay" aria-hidden />
    </>
  )
}

/**
 * The reading path below the verse: where it sits in the story, what it means, the idea
 * underneath (collapsed, for readers who want it), and how it lands in daily life. Each
 * section says something the others don't — `simpleMeaning` replaces `meaning` here rather
 * than repeating it, since `meaning` is the short version written for cards.
 * Every section past "What it means" is optional. Section ids are the targets of the
 * page's SectionNav (see verseSections in QuoteDetail). Collapsed content is still in the
 * prerendered HTML, so it stays indexable.
 */
export function VerseExplanation({ verse }: { verse: Verse }) {
  return (
    <section aria-label="Understanding this verse" className="space-y-10">
      {verse.moment && (
        <div id="moment" className="scroll-mt-24 rounded-2xl bg-teal-soft/50 px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.15em] text-teal-deep uppercase">
            The moment
          </p>
          <p className="mt-2 leading-relaxed text-ink-soft">{verse.moment}</p>
        </div>
      )}

      <div id="meaning" className="scroll-mt-24">
        <SectionHeading>What it means</SectionHeading>
        <div className="mt-4">
          <Prose text={verse.simpleMeaning ?? verse.meaning} />
        </div>
      </div>

      {verse.deeperMeaning && (
        <details
          id="deeper"
          className="group scroll-mt-24 rounded-2xl border border-line-soft px-5 py-4 sm:px-6"
        >
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
            Going deeper
            <ChevronDown
              className="h-5 w-5 shrink-0 text-clay transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="mt-4">
            <Prose text={verse.deeperMeaning} />
          </div>
        </details>
      )}

      {verse.lifeApplication && (
        <div id="life" className="scroll-mt-24">
          <SectionHeading>In your life</SectionHeading>
          <div className="mt-4">
            <Prose text={verse.lifeApplication} />
          </div>
        </div>
      )}
    </section>
  )
}
