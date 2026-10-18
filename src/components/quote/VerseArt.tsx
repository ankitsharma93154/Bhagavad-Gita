import { cn } from "@/lib/utils"
import { verseArtLabels } from "./verseArtLabels"

/**
 * Symbolic line-art illustration for a verse page, on a shared 240×240 grid with a faint
 * dashed ring behind it. The drawing itself is a static file (public/verse-art/<id>.svg,
 * generated from scripts/verse-art/drawings.mjs) pulled in with <use>, so it costs no
 * JavaScript. Its colors are var(--color-*) theme tokens, which inherit into <use> content,
 * so it follows dark mode. Verses without a drawing render nothing.
 */
export function VerseArt({ id, className }: { id: string; className?: string }) {
  const label = verseArtLabels[id]
  if (!label) return null
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={label}
      className={cn("h-auto w-full", className)}
    >
      {/* Keep in sync with RING in scripts/verse-art/build.mjs. */}
      <circle
        cx="120"
        cy="122"
        r="100"
        className="text-line-strong"
        opacity=".35"
        strokeDasharray="2 6"
      />
      <use href={`/verse-art/${id}.svg#art`} />
    </svg>
  )
}
