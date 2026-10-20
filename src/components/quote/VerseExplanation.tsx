import { ChevronDown } from "lucide-react"
import { englishExplanationLabels, type ExplanationLabels } from "./explanationLabels"

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

export interface ExplanationContent {
  moment?: string
  meaning: string
  deeper?: string
  life?: string
}

/**
 * The reading path below the verse: where it sits in the story, what it means, the idea
 * underneath (collapsed, for readers who want it), and how it lands in daily life. Each
 * section says something the others don't. On the English page `meaning` is the verse's
 * `simpleMeaning`, not the shorter card `meaning`, so the two never repeat.
 * Every section past "What it means" is optional. Section ids are the targets of the
 * page's SectionNav. Collapsed content is still in the prerendered HTML, so it stays indexable.
 * Shared by the English and Hindi verse pages, which pass their own content and labels.
 */
export function VerseExplanation({
  content,
  labels = englishExplanationLabels,
}: {
  content: ExplanationContent
  labels?: ExplanationLabels
}) {
  return (
    <section aria-label={labels.section} className="space-y-10">
      {content.moment && (
        <div id="moment" className="scroll-mt-24 rounded-2xl bg-teal-soft/50 px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.15em] text-teal-deep uppercase">
            {labels.moment}
          </p>
          <p className="mt-2 leading-relaxed text-ink-soft">{content.moment}</p>
        </div>
      )}

      <div id="meaning" className="scroll-mt-24">
        <SectionHeading>{labels.meaning}</SectionHeading>
        <div className="mt-4">
          <Prose text={content.meaning} />
        </div>
      </div>

      {content.deeper && (
        <details
          id="deeper"
          className="group scroll-mt-24 rounded-2xl border border-line-soft px-5 py-4 sm:px-6"
        >
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-3 rounded-md font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
            {labels.deeper}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-clay transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="mt-4">
            <Prose text={content.deeper} />
          </div>
        </details>
      )}

      {content.life && (
        <div id="life" className="scroll-mt-24">
          <SectionHeading>{labels.life}</SectionHeading>
          <div className="mt-4">
            <Prose text={content.life} />
          </div>
        </div>
      )}
    </section>
  )
}
