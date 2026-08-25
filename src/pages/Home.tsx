import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { QuoteCard } from "@/components/quote/QuoteCard"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { ThemeGrid } from "@/components/theme/ThemeGrid"
import { themes, type Theme, type ThemeSlug } from "@/data/themes"
import { verses, getFeaturedVerse } from "@/data/verses"
import { Seo, SITE_NAME, SITE_URL } from "@/lib/seo"

/**
 * The homepage only ever shows a curated top-10, ordered by SEO priority: 4 on mobile, 6
 * from sm, all 10 from lg (matching the grid's 2/3/5-column breakpoints, so it's always
 * exactly two full rows). The full 11-theme list, including "heart-touching", still lives
 * on /themes.
 */
const homepageThemeSlugs: ThemeSlug[] = [
  "karma",
  "motivation",
  "positive-thinking",
  "peace",
  "success",
  "wisdom",
  "life",
  "purpose",
  "courage",
  "detachment",
]
const homepageThemes = homepageThemeSlugs
  .map((slug) => themes.find((theme) => theme.slug === slug))
  .filter((theme): theme is Theme => theme !== undefined)

/**
 * Prerendering and the first client render must agree on the featured verse, or React
 * flags a hydration mismatch (server picks the build-day verse, client picks the visit-day
 * one). So the first render always uses the same fixed verse, and the real date-based pick
 * swaps in after mount, once there's no server-rendered markup left to mismatch against.
 */
function useFeaturedVerse() {
  const [featured, setFeatured] = useState(() => verses[0])

  useEffect(() => {
    // Intentional: swaps in the real date-based verse only after the deterministic first
    // render, to match prerendered HTML and avoid a hydration mismatch.
    setFeatured(getFeaturedVerse())
  }, [])

  return featured
}

export function Home() {
  const featured = useFeaturedVerse()
  const more = verses.filter((v) => v.id !== featured.id).slice(0, 6)

  return (
    <>
      <Seo
        title="Timeless Wisdom for Everyday Life"
        description="A calm, beautifully presented collection of Bhagavad Gita quotes: Sanskrit verses, English translations, and simple meanings on karma, peace, purpose, and inner strength."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/quotes?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <section className="container-page pt-8 pb-4 sm:pt-12">
        <div className="text-center">
          <span className="bg-gradient-brand inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-surface uppercase">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            A verse for today
          </span>
          <h1 className="bg-gradient-brand mt-5 bg-clip-text font-serif text-5xl leading-tight text-transparent sm:text-6xl">
            Timeless wisdom for everyday life.
          </h1>
          <p className="reading-width mx-auto mt-4 text-lg leading-relaxed text-ink-soft">
            A small, unhurried collection of verses from the Bhagavad Gita. Read one, sit
            with it, and come back tomorrow for another.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <Button href="/quotes">Explore quotes</Button>
            <Button href="/themes" variant="secondary">
              Browse by theme
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <QuoteCard verse={featured} featured />
      </section>

      <section className="container-page py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionHeading size="lg">Explore by theme</SectionHeading>
            <p className="text-ink-soft">Find the verse that matches where you are today.</p>
          </div>
        </div>
        <div className="mt-8">
          <ThemeGrid themes={homepageThemes} responsiveReveal={{ base: 4, sm: 6 }} />
        </div>
      </section>

      <section className="container-page py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionHeading size="lg">More reflections</SectionHeading>
            <p className="text-ink-soft">A few more verses worth sitting with.</p>
          </div>
          <div className="hidden shrink-0 sm:block">
            <Button href="/quotes" variant="ghost">
              View all
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <QuoteGrid verses={more} />
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button href="/quotes" variant="secondary">
            View all quotes
          </Button>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="bg-gradient-brand rounded-3xl px-6 py-10 text-center text-surface shadow-soft sm:px-12">
          <h2 className="font-serif text-2xl sm:text-3xl">One verse a day</h2>
          <p className="mx-auto mt-3 max-w-md text-surface">
            The featured verse changes daily. Save the ones that stay with you, and build your
            own quiet collection over time.
          </p>
          <div className="mt-6">
            <Button href="/saved" variant="inverse">
              View your saved quotes
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-10 sm:py-16">
        <div className="space-y-4 text-ink-soft">
          <SectionHeading>About Bhagavad Gita quotes</SectionHeading>
          <p className="leading-relaxed">
            The Bhagavad Gita is a 700-verse dialogue between Prince Arjuna and Krishna, set on
            the eve of a battle Arjuna doesn't wish to fight. Across its eighteen chapters, it
            moves through questions of duty, action, grief, and the nature of the self, which is
            part of why individual verses from it are so often lifted out and quoted on their own.
          </p>
          <p className="leading-relaxed">
            This collection gathers a small, curated set of those verses: the ones most often
            reached for around{" "}
            <Link to="/themes/karma" className="text-clay-deep underline underline-offset-2">
              karma
            </Link>
            ,{" "}
            <Link to="/themes/peace" className="text-clay-deep underline underline-offset-2">
              peace
            </Link>
            , and{" "}
            <Link to="/themes/purpose" className="text-clay-deep underline underline-offset-2">
              purpose
            </Link>
            . Each one is shown with its original Sanskrit, a plain English translation, and a
            short, simplified interpretation, so it's always clear what is a direct rendering of
            the text and what is a reflection on it.
          </p>
        </div>
      </section>
    </>
  )
}
