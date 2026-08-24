import type { Verse } from "@/data/verses"
import { QuoteCard } from "@/components/quote/QuoteCard"

interface QuoteGridProps {
  verses: Verse[]
  defaultLang?: "en" | "hi"
}

export function QuoteGrid({ verses, defaultLang }: QuoteGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {verses.map((verse, index) => (
        <div
          key={verse.id}
          className="animate-fade-up"
          style={{ animationDelay: `${Math.min(index, 6) * 60}ms`, animationFillMode: "backwards" }}
        >
          <QuoteCard verse={verse} defaultLang={defaultLang} />
        </div>
      ))}
    </div>
  )
}
