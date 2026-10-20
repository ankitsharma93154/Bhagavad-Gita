import { ThemeGrid } from "@/components/theme/ThemeGrid"
import { situationThemes, topicalThemes } from "@/data/themes"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Seo } from "@/lib/seo"

export function Themes() {
  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="Browse Bhagavad Gita Quotes by Theme"
        description="Explore Bhagavad Gita quotes by theme and by situation: karma, peace, courage, plus verses for students, anger, grief, stress, love and more."
        path="/themes"
      />
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Explore by theme
        </h1>
        <p className="mt-3 text-ink-soft">
          {topicalThemes.length} threads running through the Gita. Pick the one that matches where you are today.
        </p>
      </header>
      <div className="mt-10">
        <ThemeGrid themes={topicalThemes} />
      </div>
      <section className="mt-16">
        <SectionHeading size="lg">For where you are right now</SectionHeading>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Hand-picked verses for a particular moment: an exam, a loss, a temper you'd like to keep.
        </p>
        <div className="mt-8">
          <ThemeGrid themes={situationThemes} />
        </div>
      </section>
    </div>
  )
}
