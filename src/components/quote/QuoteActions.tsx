import { useState } from "react"
import { Bookmark, Share2, Volume2, Check } from "lucide-react"
import { IconButton } from "@/components/ui/IconButton"
import { useSavedQuotes } from "@/hooks/useSavedQuotes"
import { shareVerse } from "@/lib/share"
import type { Verse } from "@/data/verses"
import { cn } from "@/lib/utils"

interface QuoteActionsProps {
  verse: Verse
  size?: "compact" | "expanded"
}

/** Save, share, and listen (placeholder) actions — shared between QuoteCard and the verse detail page. */
export function QuoteActions({ verse, size = "compact" }: QuoteActionsProps) {
  const { isSaved, toggleSaved } = useSavedQuotes()
  const [justShared, setJustShared] = useState(false)
  const saved = isSaved(verse.id)

  async function handleShare() {
    const result = await shareVerse(verse)
    if (result !== "failed") {
      setJustShared(true)
      window.setTimeout(() => setJustShared(false), 1800)
    }
  }

  return (
    <div className={cn("flex items-center", size === "expanded" ? "gap-2" : "gap-1")}>
      <IconButton
        icon={<Volume2 className="h-4.5 w-4.5" aria-hidden />}
        label="Listen (coming soon)"
        disabled
        className="cursor-not-allowed opacity-40 hover:bg-transparent"
      />
      <IconButton
        icon={
          justShared ? (
            <Check className="h-4.5 w-4.5" aria-hidden />
          ) : (
            <Share2 className="h-4.5 w-4.5" aria-hidden />
          )
        }
        label={justShared ? "Link copied" : "Share this quote"}
        onClick={handleShare}
        active={justShared}
      />
      <IconButton
        icon={
          <Bookmark
            className="h-4.5 w-4.5 transition-transform duration-200"
            fill={saved ? "currentColor" : "none"}
            aria-hidden
          />
        }
        label={saved ? "Remove from saved quotes" : "Save this quote"}
        active={saved}
        aria-pressed={saved}
        onClick={() => toggleSaved(verse.id)}
      />
    </div>
  )
}
