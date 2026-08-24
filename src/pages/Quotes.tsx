import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { Search, X } from "lucide-react"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { themes, type Theme, type ThemeSlug } from "@/data/themes"
import { verses } from "@/data/verses"
import { searchVerses } from "@/lib/search"
import { Seo } from "@/lib/seo"
import { cn } from "@/lib/utils"

/** Kept short enough to lay out on a single line at the container's max width. */
const quickFilterSlugs: ThemeSlug[] = [
  "karma",
  "motivation",
  "success",
  "peace",
  "wisdom",
  "courage",
  "detachment",
  "purpose",
  "life",
]
const quickFilterThemes = quickFilterSlugs
  .map((slug) => themes.find((theme) => theme.slug === slug))
  .filter((theme): theme is Theme => theme !== undefined)

export function Quotes() {
  const [params, setParams] = useSearchParams()
  const query = params.get("q") ?? ""
  const activeTheme = (params.get("theme") as ThemeSlug | null) ?? null

  const results = useMemo(() => {
    const byQuery = searchVerses(verses, query)
    return activeTheme ? byQuery.filter((v) => v.categories.includes(activeTheme)) : byQuery
  }, [query, activeTheme])

  function updateQuery(value: string) {
    const next = new URLSearchParams(params)
    if (value.trim()) next.set("q", value)
    else next.delete("q")
    setParams(next, { replace: true })
  }

  function toggleTheme(slug: ThemeSlug) {
    const next = new URLSearchParams(params)
    if (activeTheme === slug) next.delete("theme")
    else next.set("theme", slug)
    setParams(next, { replace: true })
  }

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="Bhagavad Gita Quotes"
        description="Browse the full collection of Bhagavad Gita quotes in English and Hindi, with Sanskrit verses, plain translations, and simple meanings. Filter by theme or search by chapter and verse."
        path="/quotes"
      />
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Browse all quotes
        </h1>
        <p className="mt-3 text-ink-soft">
          Every verse in this collection, in one place. Search by word, theme, or chapter and
          verse, like "2.47".
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-4xl">
        <label htmlFor="quotes-search" className="sr-only">
          Search quotes
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-ink-faint"
            aria-hidden
          />
          <input
            id="quotes-search"
            name="q"
            type="search"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            placeholder="Search wisdom, e.g. “peace” or “2.47”…"
            className="focus-ring w-full rounded-full border border-line-strong bg-surface py-3 pr-4 pl-11 text-sm text-ink placeholder:text-ink-faint"
          />
          {query && (
            <button
              type="button"
              onClick={() => updateQuery("")}
              aria-label="Clear search"
              className="focus-ring absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-ink-faint hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>

        <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter by theme"
        >
          {quickFilterThemes.map((theme) => (
            <button
              key={theme.slug}
              type="button"
              onClick={() => toggleTheme(theme.slug)}
              aria-pressed={activeTheme === theme.slug}
              className={cn(
                "focus-ring rounded-full px-3.5 py-1.5 text-sm font-medium transition-[color,box-shadow]",
                activeTheme === theme.slug
                  ? "bg-gradient-brand shadow-glow border border-transparent text-surface"
                  : "gradient-border-chip text-ink-soft hover:text-clay-deep",
              )}
            >
              {theme.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {results.length > 0 ? (
          <QuoteGrid verses={results} />
        ) : (
          <div className="mx-auto max-w-md py-12 text-center">
            <p className="font-serif text-xl text-ink">No wisdom found for that search.</p>
            <p className="mt-2 text-ink-soft">Try a different word, or explore a theme instead.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {themes.slice(0, 5).map((theme) => (
                <button
                  key={theme.slug}
                  type="button"
                  onClick={() => {
                    updateQuery("")
                    toggleTheme(theme.slug)
                  }}
                  className="gradient-border-chip focus-ring rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-clay-deep"
                >
                  {theme.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
