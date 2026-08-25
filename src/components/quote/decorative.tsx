import { Flower2 } from "lucide-react"
import { cn } from "@/lib/utils"

/** A thin rule with a small flower glyph at its center, used above/below the Sanskrit text. */
export function FlourishDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden>
      <span className="h-px w-14 bg-line-strong sm:w-20" />
      <Flower2 className="h-4 w-4 shrink-0 text-clay" />
      <span className="h-px w-14 bg-line-strong sm:w-20" />
    </div>
  )
}

/** A thin rule with a small rotated diamond at its center, a quieter sibling of FlourishDivider. */
export function DiamondDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)} aria-hidden>
      <span className="h-px w-20 bg-line-strong sm:w-28" />
      <span className="h-1.5 w-1.5 rotate-45 bg-clay/50" />
      <span className="h-px w-20 bg-line-strong sm:w-28" />
    </div>
  )
}

/**
 * A faint botanical line-art flourish (a stem with a few leaves and a small blossom), meant to
 * sit in a card corner at low opacity as background texture, not a focal illustration. Flip
 * horizontally with `-scale-x-100` for the opposite corner.
 */
export function BotanicalCorner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M20 195 Q45 150 35 105 Q25 60 55 25" />
      <ellipse cx="48" cy="72" rx="15" ry="6.5" transform="rotate(-35 48 72)" />
      <ellipse cx="34" cy="112" rx="17" ry="7" transform="rotate(-12 34 112)" />
      <ellipse cx="52" cy="150" rx="15" ry="6.5" transform="rotate(28 52 150)" />
      <circle cx="58" cy="20" r="7" />
      <path d="M58 13 Q46 0 58 -6 Q70 0 58 13" />
      <path d="M51 20 Q38 14 40 2" />
      <path d="M65 20 Q78 14 76 2" />
    </svg>
  )
}

/** A simplified temple-pavilion silhouette, meant as faint background texture in a card. */
export function PavilionArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M82 38 Q100 8 118 38" />
      <line x1="100" y1="8" x2="100" y2="0" />
      <path d="M68 44 L100 38 L132 44 L138 52 L62 52 Z" />
      <line x1="75" y1="55" x2="75" y2="88" />
      <line x1="91" y1="55" x2="91" y2="88" />
      <line x1="109" y1="55" x2="109" y2="88" />
      <line x1="125" y1="55" x2="125" y2="88" />
      <line x1="60" y1="88" x2="140" y2="88" />
      <line x1="54" y1="96" x2="146" y2="96" />
      <line x1="48" y1="104" x2="152" y2="104" />
      <path d="M0 100 Q40 90 80 100 T160 98 T200 102" />
    </svg>
  )
}
