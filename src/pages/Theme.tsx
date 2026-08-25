import { Navigate, useParams } from "react-router-dom"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Badge } from "@/components/ui/Badge"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { getThemeBySlug } from "@/data/themes"
import { getRelatedThemes, getVersesByTheme, verseSlug } from "@/data/verses"
import { Seo, SITE_URL, buildBreadcrumbList } from "@/lib/seo"
import { truncate } from "@/lib/utils"

export function Theme() {
  const { slug = "" } = useParams()
  const theme = getThemeBySlug(slug)

  if (!theme) {
    return <Navigate to="/themes" replace />
  }

  const themeVerses = getVersesByTheme(theme.slug)
  const relatedSlugs = getRelatedThemes(theme.slug)
  const relatedThemes = relatedSlugs.map(getThemeBySlug).filter((t) => t !== undefined)
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Themes", path: "/themes" },
    { name: theme.title, path: `/themes/${slug}` },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title={`${theme.title} Bhagavad Gita Quotes`}
        description={truncate(
          `${theme.description} A curated set of Bhagavad Gita quotes about ${theme.title.toLowerCase()}.`,
          155,
        )}
        path={`/themes/${slug}`}
        structuredData={[
          buildBreadcrumbList(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${theme.title} Bhagavad Gita Quotes`,
            itemListElement: themeVerses.map((v, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/quotes/${verseSlug(v)}`,
              name: `Bhagavad Gita ${v.chapter}.${v.verse}`,
            })),
          },
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-wider text-clay-deep uppercase">Theme</p>
        <h1 className="bg-gradient-brand mt-2 bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Bhagavad Gita Quotes About {theme.title}
        </h1>
        <p className="mt-4 text-ink-soft">{theme.description}</p>
      </header>

      <div className="mt-10">
        <QuoteGrid verses={themeVerses} />
      </div>

      {relatedThemes.length > 0 && (
        <div className="mt-16 border-t border-line pt-10 text-center">
          <h2 className="text-xs font-semibold tracking-wider text-ink-faint uppercase">
            Related themes
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {relatedThemes.map((t) => (
              <Badge key={t.slug} to={`/themes/${t.slug}`} tone="clay">
                {t.title}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
