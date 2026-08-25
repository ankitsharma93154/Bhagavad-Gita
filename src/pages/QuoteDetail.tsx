import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, Flower2, Quote } from "lucide-react"
import { VerseDisplay } from "@/components/quote/VerseDisplay"
import { QuoteActions } from "@/components/quote/QuoteActions"
import { SegmentedToggle } from "@/components/ui/SegmentedToggle"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { DiamondDivider, PavilionArt } from "@/components/quote/decorative"
import { getAdjacentVerses, getRelatedVerses, getVerseBySlug, verseSlug } from "@/data/verses"
import { getThemeBySlug } from "@/data/themes"
import { getChapterTitle } from "@/data/chapters"
import { Seo, buildBreadcrumbList } from "@/lib/seo"
import { truncate } from "@/lib/utils"

const readingViewOptions = [
  { value: "plain", label: "In plain words" },
  { value: "literal", label: "Literal" },
] as const

export function QuoteDetail() {
  const { slug = "" } = useParams()
  const verse = getVerseBySlug(slug)
  const reference = verse ? `Bhagavad Gita ${verse.chapter}.${verse.verse}` : "Bhagavad Gita Quotes"
  const [view, setView] = useState<"literal" | "plain">("plain")

  if (!verse) {
    return <Navigate to="/quotes" replace />
  }

  const related = getRelatedVerses(verse, 4)
  const { previous, next } = getAdjacentVerses(verse)
  const chapterTitle = getChapterTitle(verse.chapter)
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Quotes", path: "/quotes" },
    { name: `Chapter ${verse.chapter}, Verse ${verse.verse}`, path: `/quotes/${slug}` },
  ]

  // A search-result title/description sized for real SERP display: embedding the full quote
  // (up to ~90 characters) plus the full literal translation blew both past Google's practical
  // truncation point on every quote page. This keeps titles under ~60 chars and descriptions
  // under ~155 by construction, however long the underlying verse content is.
  const primaryTheme = getThemeBySlug(verse.categories[0])
  const seoTitle = primaryTheme ? `${reference} · ${primaryTheme.title}` : reference
  const seoDescription = truncate(
    `${reference}, on ${primaryTheme?.title.toLowerCase() ?? "the Gita"}: "${verse.quote}" Read the Sanskrit verse and meaning.`,
    155,
  )

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title={seoTitle}
        description={seoDescription}
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

      <header className="mt-8 text-center">
        <h1 className="inline-flex items-center gap-3 font-serif text-4xl text-ink sm:text-5xl">
          Chapter {verse.chapter}
          <Flower2 className="h-7 w-7 shrink-0 text-clay sm:h-8 sm:w-8" aria-hidden />
          Verse {verse.verse}
        </h1>
        <DiamondDivider className="mt-5" />
        {chapterTitle && (
          <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-gold-deep uppercase sm:text-sm">
            {chapterTitle}
          </p>
        )}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {verse.categories.map((slugName) => {
            const theme = getThemeBySlug(slugName)
            if (!theme) return null
            return (
              <Link
                key={slugName}
                to={`/themes/${slugName}`}
                className="focus-ring gradient-border-chip rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-[color,transform,box-shadow] hover:-translate-y-0.5 hover:text-gold-deep hover:shadow-soft hover:[--chip-fill:var(--color-gold-soft)]"
              >
                {theme.title}
              </Link>
            )
          })}
        </div>
      </header>

      <div className="mt-10">
        <VerseDisplay verse={verse} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-3">
          <div className="shadow-soft relative overflow-hidden rounded-2xl border-l-4 border-clay bg-paper p-6 sm:p-8">
            <div>
              <h2 className="font-serif text-xl text-ink">Meaning</h2>
              <span className="mt-0.5 block h-0.5 w-8 bg-clay" aria-hidden />
            </div>
            <div className="mt-5">
              <SegmentedToggle options={readingViewOptions} value={view} onChange={setView} />
            </div>
            <p className="relative mt-4 leading-relaxed text-ink-soft">
              {view === "literal" ? verse.english : verse.meaning}
            </p>
            <PavilionArt className="pointer-events-none absolute -bottom-3 left-1/2 h-20 w-44 -translate-x-1/2 text-clay/10" />
          </div>

          <div className="shadow-soft rounded-2xl border-l-4 border-clay bg-paper-dim p-6 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold tracking-wide text-clay-deep uppercase">
                  Reflection
                </span>
                <span className="mt-0.5 block h-0.5 w-8 bg-clay" aria-hidden />
              </div>
              <Quote className="h-8 w-8 shrink-0 text-clay/20" fill="currentColor" aria-hidden />
            </div>
            <p className="mt-4 font-serif text-lg leading-snug text-ink italic">{verse.quote}</p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="lg:col-span-2">
            <h2 className="font-serif text-lg text-ink">Related quotes</h2>
            <span className="mt-0.5 block h-0.5 w-8 bg-clay" aria-hidden />
            <div className="mt-3 grid gap-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/quotes/${verseSlug(r)}`}
                  className="focus-ring shadow-soft block rounded-md border-l-4 border-clay bg-paper py-2 pr-3 pl-4 transition-[background-color,box-shadow] hover:bg-paper-dim/60 hover:shadow-lift"
                >
                  <p className="text-sm font-semibold text-clay-deep">
                    {r.chapter}.{r.verse}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-ink-soft">{r.quote}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <QuoteActions verse={verse} size="expanded" />
      </div>

      <nav
        aria-label="Adjacent verses"
        className="relative mt-10 flex items-stretch justify-between gap-4 border-t border-line pt-8"
      >
        {previous ? (
          <Link
            to={`/quotes/${verseSlug(previous)}`}
            className="focus-ring group flex max-w-[48%] items-center gap-2 rounded-lg text-left text-sm text-ink-soft hover:text-clay-deep"
          >
            <ChevronLeft
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden
            />
            <span>
              <span className="block text-xs text-ink-faint">Previous</span>
              {previous.chapter}.{previous.verse}
            </span>
          </Link>
        ) : (
          <span />
        )}
        <Flower2
          className="absolute top-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 text-clay/40 sm:block"
          aria-hidden
        />
        {next ? (
          <Link
            to={`/quotes/${verseSlug(next)}`}
            className="focus-ring group ml-auto flex max-w-[48%] items-center gap-2 rounded-lg text-right text-sm text-ink-soft hover:text-clay-deep"
          >
            <span>
              <span className="block text-xs text-ink-faint">Next</span>
              {next.chapter}.{next.verse}
            </span>
            <ChevronRight
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
