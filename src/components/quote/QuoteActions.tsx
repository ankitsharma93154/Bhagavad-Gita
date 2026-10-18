import { lazy, Suspense, useState } from "react"
import { Heart, Share2, Volume2, VolumeOff } from "lucide-react"
import { IconButton } from "@/components/ui/IconButton"
import { useSavedQuotes } from "@/hooks/useSavedQuotes"
import { useSpeech } from "@/hooks/useSpeech"
import type { Verse } from "@/data/verses"
import { cn } from "@/lib/utils"

// The share dialog and its canvas renderer only load when someone heads for the Share button:
// fetching starts on hover/touch/focus, so it's usually ready by the time they tap.
const loadShareDialog = () => import("./ShareDialog")
const ShareDialog = lazy(() => loadShareDialog().then((m) => ({ default: m.ShareDialog })))

interface QuoteActionsProps {
  verse: Verse
  size?: "compact" | "expanded"
  /** Language the quote is currently shown in, used as the image's starting language. */
  lang?: "en" | "hi"
}

/** Listen, share and save actions — shared between QuoteCard and the verse detail page. */
export function QuoteActions({ verse, size = "compact", lang = "en" }: QuoteActionsProps) {
  const { isSaved, toggleSaved } = useSavedQuotes()
  const { isSpeaking, toggle: toggleSpeech } = useSpeech()
  const [shareOpen, setShareOpen] = useState(false)
  const saved = isSaved(verse.id)

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
        icon={<Share2 className="h-4.5 w-4.5" aria-hidden />}
        label="Share this verse as an image or link"
        active={shareOpen}
        aria-haspopup="dialog"
        onPointerEnter={() => void loadShareDialog()}
        onFocus={() => void loadShareDialog()}
        onTouchStart={() => void loadShareDialog()}
        onClick={() => setShareOpen(true)}
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
      {shareOpen && (
        <Suspense fallback={null}>
          <ShareDialog verse={verse} initialLang={lang} onClose={() => setShareOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}
