import type { Verse } from "@/data/verses"

interface Layer {
  heading: string
  body: string
}

/** Splits a field into paragraphs on blank lines, so a layer can run longer when it needs to. */
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

/**
 * The "layers of understanding" shown below the verse and quote: what the verse means,
 * the same thing in plain words, the idea underneath it, and how it lands in daily life.
 * Every layer past the first is optional — the section just shows what's written.
 * Rendered server-side with the rest of the page, so it's in the prerendered HTML.
 */
export function VerseExplanation({ verse }: { verse: Verse }) {
  const layers: Layer[] = [
    { heading: "What does this mean?", body: verse.meaning },
    verse.simpleMeaning && { heading: "In simple words", body: verse.simpleMeaning },
    verse.deeperMeaning && { heading: "The deeper idea", body: verse.deeperMeaning },
    verse.lifeApplication && { heading: "How it applies to life", body: verse.lifeApplication },
  ].filter((layer): layer is Layer => Boolean(layer))

  return (
    <section aria-label="Understanding this verse">
      <div className="space-y-8">
        {layers.map((layer) => (
          <div key={layer.heading}>
            <h2 className="font-serif text-xl text-ink sm:text-2xl">{layer.heading}</h2>
            <span className="mt-2 block h-0.5 w-8 bg-clay" aria-hidden />
            <div className="mt-4">
              <Prose text={layer.body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
