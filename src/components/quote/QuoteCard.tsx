import { useState } from "react"
import { Link } from "react-router-dom"
import type { Verse } from "@/data/verses"
import { verseSlug } from "@/data/verses"
import { getThemeBySlug } from "@/data/themes"
import { Badge } from "@/components/ui/Badge"
import { SegmentedToggle } from "@/components/ui/SegmentedToggle"
import { QuoteActions } from "@/components/quote/QuoteActions"
import { cn } from "@/lib/utils"

const quoteLangOptions = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
] as const

interface QuoteCardProps {
  verse: Verse
  featured?: boolean
  /** Which quote language the toggle starts on. Defaults to English; the Hindi quotes page starts on Hindi. */
  defaultLang?: "en" | "hi"
}

/** The central, reusable card for presenting a single verse — used across Home, Quotes, and Theme pages. */
export function QuoteCard({ verse, featured = false, defaultLang = "en" }: QuoteCardProps) {
  const href = `/quotes/${verseSlug(verse)}`
  const [quoteLang, setQuoteLang] = useState<"en" | "hi">(defaultLang)

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-shadow duration-300",
        featured ? "hover:shadow-glow" : "hover:shadow-lift",
      )}
    >
      {featured && <span className="bg-gradient-brand block h-2 w-full" aria-hidden />}

      <Link
        to={href}
        aria-label={`Read Bhagavad Gita ${verse.chapter}.${verse.verse}: “${verse.quote}”`}
        className="focus-ring absolute inset-0 z-0 rounded-3xl"
      />

      <div className="flex flex-1 flex-col p-7">
        <p className="bg-gradient-brand inline-flex w-fit items-center gap-2 self-start bg-clip-text text-xs font-semibold tracking-wider text-transparent uppercase">
          Chapter {verse.chapter}
          <span aria-hidden>/</span>
          Verse {verse.verse}
        </p>

        {verse.sanskrit && (
          <div
            className={cn(
              "rounded-2xl border border-line bg-paper",
              featured ? "mt-6 p-5" : "mt-5 p-4",
            )}
          >
            <p className="text-[10px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Sanskrit
            </p>
            <p
              lang="sa"
              className={cn(
                "text-gold-shine animate-shine motion-reduce:animate-none font-devanagari leading-relaxed",
                featured ? "mt-2 text-xl sm:text-2xl" : "mt-1.5 text-[1.0625rem] sm:text-[1.1875rem]",
              )}
            >
              {verse.sanskrit}
            </p>
          </div>
        )}

        <div
          className={cn(
            "rounded-2xl border border-line-soft bg-paper",
            featured ? "mt-6 p-5" : "mt-5 p-4",
          )}
        >
          <SegmentedToggle
            options={quoteLangOptions}
            value={quoteLang}
            onChange={setQuoteLang}
            className="z-10 w-fit"
          />
          <p
            lang={quoteLang === "hi" ? "hi" : "en"}
            className={cn(
              "font-serif leading-snug",
              quoteLang === "hi" && !verse.quoteHindi ? "text-ink-faint italic" : "text-ink",
              featured ? "mt-2 text-3xl sm:text-4xl" : "mt-2 text-xl sm:text-2xl",
            )}
          >
            {quoteLang === "hi" ? (verse.quoteHindi ?? "Hindi translation coming soon.") : verse.quote}
          </p>
        </div>

        <div className={featured ? "mt-5 mb-8" : "mt-4 mb-6"}>
          <p
            className={cn(
              "leading-relaxed text-ink-soft",
              featured ? "text-base" : "line-clamp-2 text-sm",
            )}
          >
            {verse.meaning}
          </p>
          {!featured && (
            <span className="mt-1 inline-block text-xs font-semibold text-clay-deep transition-transform duration-200 group-hover:translate-x-0.5">
              Read more…
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-7">
          <div className="relative z-10 flex flex-wrap gap-2">
            {verse.categories.slice(0, featured ? 3 : 2).map((slug) => {
              const theme = getThemeBySlug(slug)
              if (!theme) return null
              return (
                <Badge key={slug} to={`/themes/${slug}`}>
                  {theme.title}
                </Badge>
              )
            })}
          </div>

          <div className="relative z-10">
            <QuoteActions verse={verse} />
          </div>
        </div>
      </div>
    </article>
  )
}
