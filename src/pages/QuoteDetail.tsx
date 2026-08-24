import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { VerseDisplay } from "@/components/quote/VerseDisplay"
import { QuoteActions } from "@/components/quote/QuoteActions"
import { Badge } from "@/components/ui/Badge"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { getAdjacentVerses, getRelatedVerses, getVerseBySlug, verseSlug } from "@/data/verses"
import { getThemeBySlug } from "@/data/themes"
import { Seo, buildBreadcrumbList } from "@/lib/seo"
import { cn } from "@/lib/utils"

export function QuoteDetail() {
  const { slug = "" } = useParams()
  const verse = getVerseBySlug(slug)
  const reference = verse ? `Bhagavad Gita ${verse.chapter}.${verse.verse}` : "Bhagavad Gita Quotes"
  const [view, setView] = useState<"literal" | "plain">("plain")

  if (!verse) {
    return <Navigate to="/quotes" replace />
  }

  const related = getRelatedVerses(verse)
  const { previous, next } = getAdjacentVerses(verse)
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Quotes", path: "/quotes" },
    { name: `Chapter ${verse.chapter}, Verse ${verse.verse}`, path: `/quotes/${slug}` },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title={`${reference}: "${verse.quote}"`}
        description={`${verse.english} Read the Sanskrit, translation, and simple meaning of Bhagavad Gita chapter ${verse.chapter}, verse ${verse.verse}.`}
        path={`/quotes/${slug}`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: reference,
            text: verse.quote,
            description: verse.meaning,
            inLanguage: "en",
            isPartOf: {
              "@type": "Book",
              name: "Bhagavad Gita",
            },
          },
          buildBreadcrumbList(breadcrumbItems),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mt-6">
        <p className="text-xs font-semibold tracking-wider text-clay-deep uppercase">Bhagavad Gita</p>
        <h1 className="bg-gradient-brand mt-1 bg-clip-text font-serif text-3xl text-transparent sm:text-4xl">
          Chapter {verse.chapter} · Verse {verse.verse}
        </h1>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div className="min-w-0 space-y-10">
          <VerseDisplay verse={verse} />

          <div className="rounded-2xl border border-line-soft bg-paper p-6 sm:p-8">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-line-strong bg-surface p-0.5">
              <button
                type="button"
                onClick={() => setView("plain")}
                aria-pressed={view === "plain"}
                className={cn(
                  "focus-ring cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors",
                  view === "plain" ? "bg-clay-deep text-surface" : "text-ink-faint hover:text-ink-soft",
                )}
              >
                In plain words
              </button>
              <button
                type="button"
                onClick={() => setView("literal")}
                aria-pressed={view === "literal"}
                className={cn(
                  "focus-ring cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors",
                  view === "literal" ? "bg-clay-deep text-surface" : "text-ink-faint hover:text-ink-soft",
                )}
              >
                Literal
              </button>
            </div>
            <p className="reading-width mt-4 text-lg leading-relaxed text-ink-soft">
              {view === "literal" ? verse.english : verse.meaning}
            </p>
          </div>

          <div className="reading-width mx-auto text-center">
            <p className="font-serif text-3xl leading-snug text-ink italic sm:text-4xl">
              {verse.quote}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
            <div className="flex flex-wrap gap-2">
              {verse.categories.map((slugName) => {
                const theme = getThemeBySlug(slugName)
                if (!theme) return null
                return (
                  <Badge key={slugName} to={`/themes/${slugName}`}>
                    {theme.title}
                  </Badge>
                )
              })}
            </div>
            <QuoteActions verse={verse} size="expanded" />
          </div>

          <nav
            aria-label="Adjacent verses"
            className="flex items-stretch justify-between gap-4 border-t border-line pt-8"
          >
            {previous ? (
              <Link
                to={`/quotes/${verseSlug(previous)}`}
                className="focus-ring group flex max-w-[48%] items-center gap-2 rounded-lg text-left text-sm text-ink-soft hover:text-clay-deep"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                <span>
                  <span className="block text-xs text-ink-faint">Previous</span>
                  {previous.chapter}.{previous.verse}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/quotes/${verseSlug(next)}`}
                className="focus-ring group ml-auto flex max-w-[48%] items-center gap-2 rounded-lg text-right text-sm text-ink-soft hover:text-clay-deep"
              >
                <span>
                  <span className="block text-xs text-ink-faint">Next</span>
                  {next.chapter}.{next.verse}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        {related.length > 0 && (
          <aside aria-label="Related quotes" className="lg:pt-1">
            <SectionHeading size="sm">Related quotes</SectionHeading>
            <div className="mt-2 space-y-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/quotes/${verseSlug(r)}`}
                  className="focus-ring block rounded-2xl border border-line-soft bg-paper-dim/40 p-5 transition-colors hover:border-line-strong"
                >
                  <p className="text-[11px] font-medium tracking-[0.15em] text-ink-faint uppercase">
                    {r.chapter}.{r.verse}
                  </p>
                  <p className="mt-2 font-serif text-base leading-snug text-ink">{r.quote}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
