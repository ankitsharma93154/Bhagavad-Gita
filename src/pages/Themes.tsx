import { ThemeGrid } from "@/components/theme/ThemeGrid"
import { themes } from "@/data/themes"
import { Seo } from "@/lib/seo"

export function Themes() {
  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="Browse Bhagavad Gita Quotes by Theme"
        description="Explore Bhagavad Gita quotes grouped by theme: karma, peace, purpose, courage, wisdom, heart-touching, and more."
        path="/themes"
      />
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Explore by theme
        </h1>
        <p className="mt-3 text-ink-soft">
          Ten threads running through the Gita. Pick the one that matches where you are today.
        </p>
      </header>
      <div className="mt-10">
        <ThemeGrid themes={themes} />
      </div>
    </div>
  )
}
