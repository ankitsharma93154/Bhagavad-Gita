import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, Flower2, Languages, Quote } from "lucide-react"
import { VerseDisplay } from "@/components/quote/VerseDisplay"
import { VerseExplanation } from "@/components/quote/VerseExplanation"
import {
  englishExplanationLabels,
  hindiExplanationLabels,
} from "@/components/quote/explanationLabels"
import { QuoteActions } from "@/components/quote/QuoteActions"
import { SectionNav } from "@/components/quote/SectionNav"
import { VerseArt } from "@/components/quote/VerseArt"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { DiamondDivider } from "@/components/quote/decorative"
import {
  getAdjacentVerses,
  getRelatedVersesFor,
  getVerseBySlug,
  verses,
  type Verse,
} from "@/data/verses"
import { getVerseHindi, hasHindiPage, verseHref } from "@/data/versesHindi"
import { getThemeBySlug } from "@/data/themes"
import { getChapterTitle } from "@/data/chapters"
import { Seo, buildBreadcrumbList } from "@/lib/seo"
import { truncate } from "@/lib/utils"

type Lang = "en" | "hi"

const strings = {
  en: {
    verse: "The verse",
    translation: "Translation",
    takeaway: "Take this with you",
    keepReading: "Keep reading",
    previous: "Previous",
    next: "Next",
    chapter: "Chapter",
    verseWord: "Verse",
  },
  hi: {
    verse: "श्लोक",
    translation: "हिंदी अनुवाद",
    takeaway: "याद रखने की बात",
    keepReading: "आगे पढ़ें",
    previous: "पिछला",
    next: "अगला",
    chapter: "अध्याय",
    verseWord: "श्लोक",
  },
} as const

/** Previous/next in chapter order, limited to verses that have a Hindi page so readers stay in Hindi. */
function getAdjacentHindiVerses(v: Verse): { previous?: Verse; next?: Verse } {
  const sorted = verses
    .filter(hasHindiPage)
    .sort((a, b) => a.chapter - b.chapter || a.verse - b.verse)
  const index = sorted.findIndex((entry) => entry.id === v.id)
  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  }
}

export function QuoteDetail() {
  return <VerseDetail lang="en" />
}

export function HindiQuoteDetail() {
  return <VerseDetail lang="hi" />
}

function VerseDetail({ lang }: { lang: Lang }) {
  const { slug = "" } = useParams()
  const verse = getVerseBySlug(slug)
  const hindi = verse ? getVerseHindi(verse) : undefined
  const t = strings[lang]

  // The prerendered HTML already carries the right <html lang>. This keeps it right across
  // client-side navigation between English and Hindi pages.
  useEffect(() => {
    if (lang !== "hi") return
    document.documentElement.lang = "hi"
    return () => {
      document.documentElement.lang = "en"
    }
  }, [lang])

  if (!verse) {
    return <Navigate to={lang === "hi" ? "/languages/hindi" : "/quotes"} replace />
  }
  if (lang === "hi" && !hindi) {
    return <Navigate to={`/quotes/${slug}`} replace />
  }

  const ref = `${verse.chapter}.${verse.verse}`
  const reference = `Bhagavad Gita ${ref}`
  const englishPath = `/quotes/${slug}`
  const hindiPath = `/hi/quotes/${slug}`
  const path = lang === "hi" ? hindiPath : englishPath
  const alternates = hindi
    ? [
        { lang: "en" as const, path: englishPath },
        { lang: "hi" as const, path: hindiPath },
      ]
    : undefined

  const related = getRelatedVersesFor(verse, 4)
  const { previous, next } = lang === "hi" ? getAdjacentHindiVerses(verse) : getAdjacentVerses(verse)
  const chapterTitle = lang === "en" ? getChapterTitle(verse.chapter) : undefined
  const content =
    lang === "hi" && hindi
      ? { moment: hindi.moment, meaning: hindi.meaning, deeper: hindi.deeper, life: hindi.life }
      : {
          moment: verse.moment,
          meaning: verse.simpleMeaning ?? verse.meaning,
          deeper: verse.deeperMeaning,
          life: verse.lifeApplication,
        }
  const labels = lang === "hi" ? hindiExplanationLabels : englishExplanationLabels
  const takeaway = lang === "hi" ? (verse.quoteHindi ?? verse.quote) : verse.quote
  const quoteFor = (v: Verse) => (lang === "hi" ? (v.quoteHindi ?? v.quote) : v.quote)

  // Must match the section ids rendered below and in VerseExplanation.
  const sections = [
    { id: "verse", label: t.verse },
    content.moment && { id: "moment", label: labels.moment },
    { id: "meaning", label: labels.meaning },
    content.deeper && { id: "deeper", label: labels.deeper },
    content.life && { id: "life", label: labels.life },
    { id: "takeaway", label: t.takeaway },
  ].filter((s): s is { id: string; label: string } => Boolean(s))
  const breadcrumbItems =
    lang === "hi"
      ? [
          { name: "होम", path: "/" },
          { name: "हिंदी", path: "/languages/hindi" },
          { name: `अध्याय ${verse.chapter}, श्लोक ${verse.verse}`, path },
        ]
      : [
          { name: "Home", path: "/" },
          { name: "Quotes", path: "/quotes" },
          { name: `Chapter ${verse.chapter}, Verse ${verse.verse}`, path },
        ]

  // Search-result title/description sized for real SERP display. "Meaning" is worked into
  // the title because that's the intent people actually search for on a verse number.
  // Well-known verses lead with their opening words, since that's how people search them
  // ("karmanye vadhikaraste meaning") more often than by number. Hindi titles lead with the
  // Devanagari opening and keep the English reference for Hinglish searches ("gita 2.47 in hindi").
  const primaryTheme = getThemeBySlug(verse.categories[0])
  const seoTitle =
    lang === "hi" && hindi
      ? `${hindi.name} का अर्थ: Bhagavad Gita ${ref} in Hindi`
      : verse.shlokaName
        ? `${verse.shlokaName} Meaning (${reference})`
        : primaryTheme
          ? `${reference} Meaning · ${primaryTheme.title}`
          : `${reference} Meaning`
  const seoDescription =
    lang === "hi"
      ? truncate(
          `${verse.shlokaName ? `${verse.shlokaName}, ` : ""}भगवद गीता ${ref} का हिंदी अर्थ: "${takeaway}" संस्कृत श्लोक, हिंदी अनुवाद और सरल व्याख्या के साथ।`,
          155,
        )
      : truncate(
          `${verse.shlokaName ? `${verse.shlokaName}: ` : ""}${reference} (BG ${ref}) meaning, on ${primaryTheme?.title.toLowerCase() ?? "the Gita"}: "${verse.quote}" With the Sanskrit, translation, and a plain-English explanation.`,
          155,
        )

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16" lang={lang}>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={path}
        alternates={alternates}
        // Generated by scripts/share-images/build.mjs.
        image={{ path: `/og/${verse.id}.jpg`, width: 1200, height: 630 }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: lang === "hi" ? `भगवद गीता ${ref}` : reference,
            text: takeaway,
            description: content.meaning,
            inLanguage: lang,
            isPartOf: {
              "@type": "Book",
              name: "Bhagavad Gita",
            },
          },
          buildBreadcrumbList(breadcrumbItems),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mt-6 text-center sm:mt-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-ink-faint uppercase sm:text-sm">
          {lang === "hi" ? `भगवद गीता ${ref}` : `${reference} · BG ${ref}`}
        </p>
        <h1 className="font-serif text-ink">
          {lang === "hi" && hindi ? (
            <span className="mb-2 block font-devanagari text-2xl text-ink-soft sm:text-3xl">
              {hindi.name}
            </span>
          ) : (
            verse.shlokaName && (
              <span className="mb-2 block text-2xl text-ink-soft italic sm:text-3xl">
                {verse.shlokaName}
              </span>
            )
          )}
          <span className="inline-flex items-center gap-3 text-4xl sm:text-5xl">
            {t.chapter} {verse.chapter}
            <Flower2 className="h-7 w-7 shrink-0 text-clay sm:h-8 sm:w-8" aria-hidden />
            {t.verseWord} {verse.verse}
          </span>
        </h1>
        <DiamondDivider className="mt-5" />
        {chapterTitle && (
          <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-gold-deep uppercase sm:text-sm">
            {chapterTitle}
          </p>
        )}
        {lang === "en" && (
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
        )}
        {hindi && (
          <Link
            to={lang === "hi" ? englishPath : hindiPath}
            lang={lang === "hi" ? "en" : "hi"}
            hrefLang={lang === "hi" ? "en" : "hi"}
            className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-clay-deep underline-offset-2 hover:underline"
          >
            <Languages className="h-4 w-4" aria-hidden />
            {lang === "hi" ? "Read in English" : "हिंदी में पढ़ें"}
          </Link>
        )}
      </header>

      <div id="verse" className="mt-6 scroll-mt-24 sm:mt-10">
        <VerseDisplay verse={verse} />
      </div>

      {/*
        One reading column, top to bottom: verse → translation → explanation → takeaway → more.
        On desktop the side columns hold a sticky "on this page" rail and the verse's art.
      */}
      <div className="mt-8 sm:mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_38rem_minmax(0,1fr)] lg:gap-8">
        <aside className="hidden lg:block">
          <SectionNav items={sections} className="sticky top-40" />
        </aside>

        <div className="reading-width mx-auto lg:max-w-none">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.15em] text-gold-deep uppercase">
              {t.translation}
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-ink sm:text-xl">
              {lang === "hi" && hindi ? hindi.translation : verse.english}
            </p>
          </div>

          <VerseArt id={verse.id} className="mx-auto mt-8 max-w-44 lg:hidden" />

          <DiamondDivider className="my-10 sm:my-12" />

          <VerseExplanation content={content} labels={labels} />

          <div id="takeaway" className="mt-12 scroll-mt-24">
            <div className="shadow-soft rounded-2xl border-l-4 border-clay bg-paper-dim p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold tracking-wide text-clay-deep uppercase">
                    {t.takeaway}
                  </span>
                  <span className="mt-0.5 block h-0.5 w-8 bg-clay" aria-hidden />
                </div>
                <Quote className="h-8 w-8 shrink-0 text-clay/20" fill="currentColor" aria-hidden />
              </div>
              <p
                className={
                  lang === "hi"
                    ? "mt-4 font-serif text-xl leading-relaxed text-ink"
                    : "mt-4 font-serif text-xl leading-snug text-ink italic"
                }
              >
                {takeaway}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <QuoteActions verse={verse} size="expanded" lang={lang} />
            </div>
          </div>
        </div>

        <aside className="hidden lg:block" aria-hidden>
          <VerseArt id={verse.id} className="sticky top-40" />
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-label={t.keepReading} className="mt-14 sm:mt-16">
          <h2 className="text-center font-serif text-2xl text-ink">{t.keepReading}</h2>
          <span className="mx-auto mt-2 block h-0.5 w-8 bg-clay" aria-hidden />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to={verseHref(r, lang)}
                className="focus-ring shadow-soft block rounded-md border-l-4 border-clay bg-paper py-3 pr-3 pl-4 transition-[background-color,box-shadow] hover:bg-paper-dim/60 hover:shadow-lift"
              >
                <p className="text-sm font-semibold text-clay-deep">
                  {r.chapter}.{r.verse}
                </p>
                <p className="mt-1 line-clamp-3 text-sm leading-snug text-ink-soft">{quoteFor(r)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav
        aria-label={lang === "hi" ? "पिछला और अगला श्लोक" : "Adjacent verses"}
        className="relative mt-10 flex items-stretch justify-between gap-4 border-t border-line pt-8"
      >
        {previous ? (
          <Link
            to={verseHref(previous, lang)}
            className="focus-ring group flex max-w-[48%] items-center gap-2 rounded-lg text-left text-sm text-ink-soft hover:text-clay-deep"
          >
            <ChevronLeft
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden
            />
            <span>
              <span className="block text-xs text-ink-faint">{t.previous}</span>
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
            to={verseHref(next, lang)}
            className="focus-ring group ml-auto flex max-w-[48%] items-center gap-2 rounded-lg text-right text-sm text-ink-soft hover:text-clay-deep"
          >
            <span>
              <span className="block text-xs text-ink-faint">{t.next}</span>
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
