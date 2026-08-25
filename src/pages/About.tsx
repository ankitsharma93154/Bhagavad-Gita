import { Link } from "react-router-dom"
import { BookOpen, Heart, Info, Languages, Lightbulb, Quote as QuoteIcon } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { verses } from "@/data/verses"
import { Seo } from "@/lib/seo"
import { cn } from "@/lib/utils"

const verseParts = [
  {
    icon: Languages,
    tone: "clay",
    title: "Sanskrit",
    description: "The verse in its original language.",
  },
  {
    icon: BookOpen,
    tone: "teal",
    title: "English translation",
    description: "A plain rendering of what the verse says.",
  },
  {
    icon: Lightbulb,
    tone: "gold",
    title: "Simple meaning",
    description: "A short explanation of the idea behind the verse, in everyday language.",
  },
  {
    icon: QuoteIcon,
    tone: "clay",
    title: "Quote-friendly interpretation",
    description:
      "A short, reflective line inspired by the verse, written for easy reading and sharing. Not a literal translation.",
  },
] as const

const toneClasses = {
  clay: "bg-clay-soft text-clay-deep",
  teal: "bg-teal-soft text-teal-deep",
  gold: "bg-gold-soft text-gold-deep",
}

export function About() {
  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title="About Bhagavad Gita Quotes"
        description="What this project is, how its Sanskrit verses and translations are presented, and how saved quotes work."
        path="/about"
      />
      <div>
        <h1 className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          About this project
        </h1>
        <p className="reading-width mt-4 text-lg leading-relaxed text-ink-soft">
          Bhagavad Gita Quotes is a small, unhurried place to read a handful of verses from the
          Gita. No clutter, no account, and nobody trying to sell you anything in between.
        </p>

        <div className="mt-12 space-y-12 text-ink-soft">
          <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <SectionHeading>A small, curated collection</SectionHeading>
              <p className="reading-width leading-relaxed">
                The Bhagavad Gita runs to roughly 700 verses across eighteen chapters. This site
                intentionally covers only a small, carefully chosen set of them: the ones most
                often read on their own, outside the context of the full dialogue. The goal is
                depth and care over completeness, and the collection may grow over time.
              </p>
            </div>
            <div className="flex shrink-0 gap-6 rounded-2xl border border-line bg-paper px-8 py-6 text-center">
              <div>
                <p className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent">
                  {verses.length}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-ink-faint uppercase">
                  Verses today
                </p>
              </div>
              <div className="border-l border-line-soft pl-6">
                <p className="bg-gradient-brand bg-clip-text font-serif text-4xl text-transparent">
                  700
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-ink-faint uppercase">
                  In the Gita
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading>How each verse is presented</SectionHeading>
            <p className="reading-width leading-relaxed">
              Every verse on this site is shown in four distinct parts, kept clearly separate so
              it's always obvious what you're reading:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {verseParts.map((part) => (
                <div
                  key={part.title}
                  className="rounded-2xl border border-line bg-paper p-5"
                >
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-full",
                      toneClasses[part.tone],
                    )}
                  >
                    <part.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-serif text-lg text-ink">{part.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{part.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex gap-4 rounded-2xl border border-line-strong bg-paper-dim p-6 sm:p-8">
            <Info className="h-5 w-5 shrink-0 text-clay-deep" aria-hidden />
            <div>
              <h2 className="font-serif text-lg text-ink">On translation and accuracy</h2>
              <p className="mt-2 leading-relaxed">
                Sanskrit is a dense, layered language, and any translation involves
                interpretation. The renderings here aim to be faithful and readable for everyday
                reflection, but they're simplified, and this isn't a scholarly edition. If you're
                studying the Gita in depth, please cross-reference a published critical
                translation alongside what's shown here.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-paper p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal-deep">
                <Heart className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-serif text-lg text-ink">Saving quotes</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed">
                  There's no sign-up on this site. Saved quotes are stored only in your own
                  browser's local storage. Nothing is sent anywhere, and nothing is tracked.
                </p>
              </div>
            </div>
            <Link
              to="/saved"
              className="focus-ring shrink-0 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink hover:border-clay hover:text-clay-deep"
            >
              View saved quotes
            </Link>
          </section>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link to="/quotes" className="focus-ring rounded font-medium text-clay-deep hover:underline">
            Start reading the quotes →
          </Link>
        </div>
      </div>
    </div>
  )
}
