import { Navigate, useParams } from "react-router-dom"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Badge } from "@/components/ui/Badge"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { getThemeBySlug } from "@/data/themes"
import { getRelatedThemes, getThemeVerses, getTopThemesAmong, verseSlug } from "@/data/verses"
import { Seo, SITE_URL, buildBreadcrumbList } from "@/lib/seo"
import { truncate } from "@/lib/utils"

export function Theme() {
  const { slug = "" } = useParams()
  const theme = getThemeBySlug(slug)

  if (!theme) {
    return <Navigate to="/themes" replace />
  }

  const themeVerses = getThemeVerses(theme)
  // A situational page has no verses tagged with its slug, so it links out to the topics its verses share.
  const relatedSlugs = theme.verseIds ? getTopThemesAmong(themeVerses) : getRelatedThemes(theme.slug)
  const heading = theme.heading ?? `Bhagavad Gita Quotes About ${theme.title}`
  const relatedThemes = relatedSlugs.map(getThemeBySlug).filter((t) => t !== undefined)
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Themes", path: "/themes" },
    { name: theme.title, path: `/themes/${slug}` },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title={theme.seoTitle ?? `${theme.title} Bhagavad Gita Quotes`}
        description={
          theme.seoDescription ??
          truncate(
            `${theme.description} A curated set of Bhagavad Gita quotes about ${theme.title.toLowerCase()}.`,
            155,
          )
        }
        path={`/themes/${slug}`}
        structuredData={[
          buildBreadcrumbList(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: heading,
            itemListElement: themeVerses.map((v, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/quotes/${verseSlug(v)}`,
              name: `Bhagavad Gita ${v.chapter}.${v.verse}`,
            })),
          },
          ...(theme.faqs
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: theme.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                  })),
                },
              ]
            : []),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-wider text-clay-deep uppercase">
          {theme.verseIds ? "Collection" : "Theme"}
        </p>
        <h1 className="bg-gradient-brand mt-2 bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          {heading}
        </h1>
        <p className="mt-4 text-ink-soft">{theme.description}</p>
      </header>

      <div className="mt-10">
        <QuoteGrid verses={themeVerses} />
      </div>

      {(theme.intro || theme.faqs) && (
        <section className="reading-width mx-auto mt-16 space-y-10 text-ink-soft">
          {theme.intro && (
            <div className="space-y-4">
              <SectionHeading>
                {theme.verseIds ? "About these verses" : `${theme.title} in the Bhagavad Gita`}
              </SectionHeading>
              {theme.intro.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          {theme.faqs && (
            <div className="space-y-6">
              <SectionHeading>Common questions</SectionHeading>
              {theme.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-serif text-lg text-ink">{faq.question}</h3>
                  <p className="mt-2 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

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
