import { useEffect, useRef, useState } from "react"
import { Check, Download, Link2, MessageCircle, Send, Share2, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SegmentedToggle } from "@/components/ui/SegmentedToggle"
import type { Verse } from "@/data/verses"
import {
  canvasToBlob,
  renderShareImage,
  shareImageFilename,
  type ShareFormat,
  type ShareLang,
  type ShareTheme,
} from "@/lib/shareImage"
import { copyVerseLink, verseShareText, verseUrl, whatsappShareUrl } from "@/lib/share"
import { getTheme } from "@/lib/theme"

const formatOptions = [
  { value: "story", label: "Story" },
  { value: "wallpaper", label: "Wallpaper" },
] as const
const langOptions = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी" },
] as const
const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] as const

interface ShareDialogProps {
  verse: Verse
  onClose: () => void
  initialLang?: ShareLang
}

/**
 * The one place to share a verse. Leads with an image (Instagram story / WhatsApp status, or a
 * phone wallpaper) the visitor can share or download, then offers the plain link for chats,
 * where it's tappable and unfurls into the verse's preview card. Lazy-loaded with the canvas
 * renderer, so none of this ships until someone opens it.
 */
export function ShareDialog({ verse, onClose, initialLang = "en" }: ShareDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [format, setFormat] = useState<ShareFormat>("story")
  const [lang, setLang] = useState<ShareLang>(verse.quoteHindi ? initialLang : "en")
  const [theme, setTheme] = useState<ShareTheme>(() => getTheme())
  const [themeChosen, setThemeChosen] = useState(false)
  const [image, setImage] = useState<{ blob: Blob; url: string } | null>(null)
  // Which option combination last failed to draw, so changing any option clears the error.
  const [failedKey, setFailedKey] = useState<string | null>(null)
  const [canShareFiles, setCanShareFiles] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const canShareLink = typeof navigator.share === "function"

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    // showModal() focuses the first button (Close), which then shows a focus ring as if the
    // visitor had tabbed there. Focus the dialog itself instead; Tab still reaches everything.
    dialog?.focus()
  }, [])

  useEffect(() => {
    let cancelled = false
    let url: string | undefined
    renderShareImage(verse, { format, lang, theme })
      .then((canvas) => canvasToBlob(canvas))
      .then((blob) => {
        if (cancelled) return
        url = URL.createObjectURL(blob)
        setImage({ blob, url })
        const file = new File([blob], shareImageFilename(verse, { format, lang, theme }), { type: blob.type })
        setCanShareFiles(typeof navigator.canShare === "function" && navigator.canShare({ files: [file] }))
      })
      .catch(() => !cancelled && setFailedKey(`${format}-${lang}-${theme}`))
    return () => {
      cancelled = true
      if (url) URL.revokeObjectURL(url)
    }
  }, [verse, format, lang, theme])

  function chooseFormat(next: ShareFormat) {
    setFormat(next)
    // Wallpapers read best dark (and on OLED phones), unless the visitor already picked a theme.
    if (!themeChosen) setTheme(next === "wallpaper" ? "dark" : getTheme())
  }

  function chooseTheme(next: ShareTheme) {
    setTheme(next)
    setThemeChosen(true)
  }

  const error = failedKey === `${format}-${lang}-${theme}`
  const filename = shareImageFilename(verse, { format, lang, theme })

  async function share() {
    if (!image) return
    const file = new File([image.blob], filename, { type: image.blob.type })
    try {
      await navigator.share({ files: [file], title: `Bhagavad Gita ${verse.chapter}.${verse.verse}` })
    } catch {
      // cancelled from the share sheet: nothing to do
    }
  }

  async function sendLink() {
    try {
      await navigator.share({
        title: `Bhagavad Gita ${verse.chapter}.${verse.verse}`,
        text: verseShareText(verse),
        url: verseUrl(verse),
      })
    } catch {
      // cancelled from the share sheet: nothing to do
    }
  }

  async function copyLink() {
    if ((await copyVerseLink(verse)) === "copied") {
      setLinkCopied(true)
      window.setTimeout(() => setLinkCopied(false), 1800)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // Clicks on the backdrop land on the <dialog> element itself.
      onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      aria-labelledby="share-image-title"
      tabIndex={-1}
      className="relative m-auto outline-none max-h-[calc(100dvh-2rem)] w-[min(100%-2rem,46rem)] overflow-y-auto rounded-3xl border border-line bg-surface p-0 text-ink shadow-lift backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        aria-label="Close"
        className="focus-ring absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/85 text-ink-soft backdrop-blur-sm hover:bg-surface-soft hover:text-ink"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
      <div className="grid gap-6 p-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:p-7">
        <div className="flex items-center justify-center rounded-2xl bg-paper-dim p-3">
          {image && !error ? (
            <img
              src={image.url}
              alt={`Preview of the ${format} image for Bhagavad Gita ${verse.chapter}.${verse.verse}`}
              className="max-h-[36vh] w-auto rounded-xl shadow-soft sm:max-h-[26rem]"
            />
          ) : (
            <div className="flex aspect-[9/16] w-40 items-center justify-center text-center text-sm text-ink-faint">
              {error ? "Couldn't draw the image. Try again in a moment." : "Drawing…"}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="pr-10">
            <div>
              <h2 id="share-image-title" className="font-serif text-2xl text-ink">
                Share this verse
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                As an image for your story, status or lock screen, or as a link.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Field label="Format">
              <SegmentedToggle options={formatOptions} value={format} onChange={chooseFormat} />
            </Field>
            {verse.quoteHindi && (
              <Field label="Language">
                <SegmentedToggle options={langOptions} value={lang} onChange={setLang} />
              </Field>
            )}
            <Field label="Theme">
              <SegmentedToggle options={themeOptions} value={theme} onChange={chooseTheme} />
            </Field>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-auto sm:pt-8">
            {canShareFiles && (
              <Button onClick={share} disabled={!image}>
                <Share2 className="h-4 w-4" aria-hidden />
                Share or save
              </Button>
            )}
            <Button
              variant={canShareFiles ? "secondary" : "primary"}
              disabled={!image}
              onClick={() => {
                if (!image) return
                const a = document.createElement("a")
                a.href = image.url
                a.download = filename
                a.click()
              }}
            >
              <Download className="h-4 w-4" aria-hidden />
              Download image
            </Button>
          </div>
          {canShareFiles && (
            <p className="mt-3 text-xs text-ink-faint">
              On iPhone, pick “Save Image” in the share sheet to add it to Photos.
            </p>
          )}

          <div className="mt-6 border-t border-line-soft pt-5">
            <p className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">
              Or share the link
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {canShareLink ? (
                <Button variant="secondary" size="sm" onClick={sendLink}>
                  <Send className="h-4 w-4" aria-hidden />
                  Send link
                </Button>
              ) : (
                <a
                  href={whatsappShareUrl(verse)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-transparent px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay-deep"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
              )}
              <Button variant="secondary" size="sm" onClick={copyLink} aria-live="polite">
                {linkCopied ? (
                  <Check className="h-4 w-4" aria-hidden />
                ) : (
                  <Link2 className="h-4 w-4" aria-hidden />
                )}
                {linkCopied ? "Link copied" : "Copy link"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-semibold tracking-[0.12em] text-ink-faint uppercase">{label}</span>
      {children}
    </div>
  )
}
