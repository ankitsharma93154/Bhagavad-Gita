import { Link } from "react-router-dom"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { verses, verseSlug } from "@/data/verses"
import { Seo, SITE_URL, buildBreadcrumbList } from "@/lib/seo"

export function LanguagesHindi() {
  const hindiVerses = verses.filter((v) => v.quoteHindi)
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Hindi", path: "/languages/hindi" },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="Bhagavad Gita Quotes in Hindi"
        description="Bhagavad Gita quotes in Hindi (गीता के विचार), with the original Sanskrit and an English translation alongside each one."
        path="/languages/hindi"
        structuredData={[
          buildBreadcrumbList(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Bhagavad Gita Quotes in Hindi",
            itemListElement: hindiVerses.map((v, index) => ({
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
        <p className="text-xs font-semibold tracking-wider text-clay-deep uppercase">Hindi</p>
        <h1 className="bg-gradient-brand mt-2 bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Bhagavad Gita Quotes in Hindi
        </h1>
        <p className="mt-4 text-ink-soft">
          <span lang="hi">गीता के कुछ चुने हुए विचार, हिंदी में।</span> Each quote is shown with
          the original Sanskrit verse and its Hindi rendering, so the source is always clear.
          Prefer English?{" "}
          <Link to="/quotes" className="text-clay-deep underline underline-offset-2">
            Browse the English collection
          </Link>
          .
        </p>
      </header>

      <div className="mt-10">
        <QuoteGrid verses={hindiVerses} defaultLang="hi" />
      </div>
    </div>
  )
}
