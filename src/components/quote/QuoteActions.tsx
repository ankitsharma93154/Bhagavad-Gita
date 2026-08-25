import { useState } from "react"
import { Heart, Share2, Volume2, VolumeOff, Check } from "lucide-react"
import { IconButton } from "@/components/ui/IconButton"
import { useSavedQuotes } from "@/hooks/useSavedQuotes"
import { useSpeech } from "@/hooks/useSpeech"
import { shareVerse } from "@/lib/share"
import type { Verse } from "@/data/verses"
import { cn } from "@/lib/utils"

interface QuoteActionsProps {
  verse: Verse
  size?: "compact" | "expanded"
}

/** Save, share, and listen actions — shared between QuoteCard and the verse detail page. */
export function QuoteActions({ verse, size = "compact" }: QuoteActionsProps) {
  const { isSaved, toggleSaved } = useSavedQuotes()
  const { isSpeaking, toggle: toggleSpeech } = useSpeech()
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
        icon={
          isSpeaking ? (
            <VolumeOff className="h-4.5 w-4.5" aria-hidden />
          ) : (
            <Volume2 className="h-4.5 w-4.5" aria-hidden />
          )
        }
        label={isSpeaking ? "Stop reading" : "Listen to the English translation"}
        active={isSpeaking}
        aria-pressed={isSpeaking}
        onClick={() => toggleSpeech(verse.english)}
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
          <Heart
            className={cn(
              "h-4.5 w-4.5 transition-transform duration-200",
              saved && "animate-pop motion-reduce:animate-none",
            )}
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
