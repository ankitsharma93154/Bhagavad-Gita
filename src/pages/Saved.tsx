import { Bookmark } from "lucide-react"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Button } from "@/components/ui/Button"
import { useSavedQuotes } from "@/hooks/useSavedQuotes"
import { verses } from "@/data/verses"
import { Seo } from "@/lib/seo"

export function Saved() {
  const { savedIds } = useSavedQuotes()
  const savedVerses = verses.filter((v) => savedIds.includes(v.id))

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="Your Saved Quotes"
        description="The Bhagavad Gita quotes you've saved for later reflection."
        noindex
      />
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Saved quotes
        </h1>
        <p className="mt-3 text-ink-soft">
          Kept on this device, no account needed. Saved quotes stay here across visits.
        </p>
      </header>

      <div className="mt-10">
        {savedVerses.length > 0 ? (
          <QuoteGrid verses={savedVerses} />
        ) : (
          <div className="mx-auto flex max-w-sm flex-col items-center py-12 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal-deep">
              <Bookmark className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-5 font-serif text-xl text-ink">Your saved wisdom will appear here.</p>
            <p className="mt-2 text-ink-soft">
              Tap the bookmark icon on any quote to keep it close for next time.
            </p>
            <div className="mt-6">
              <Button href="/quotes" variant="secondary">
                Browse quotes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
