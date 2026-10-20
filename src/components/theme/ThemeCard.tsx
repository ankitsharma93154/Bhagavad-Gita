import { Link } from "react-router-dom"
import {
  RefreshCw,
  Flame,
  Sunrise,
  Trophy,
  Feather,
  BookOpen,
  Shield,
  Wind,
  Compass,
  Leaf,
  Heart,
  GraduationCap,
  CloudLightning,
  Sunset,
  HeartHandshake,
  Waves,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import type { Theme, ThemeSlug } from "@/data/themes"
import { getThemeVerses } from "@/data/verses"
import { cn } from "@/lib/utils"

const themeIcons: Record<ThemeSlug, LucideIcon> = {
  karma: RefreshCw,
  motivation: Flame,
  "positive-thinking": Sunrise,
  success: Trophy,
  peace: Feather,
  wisdom: BookOpen,
  courage: Shield,
  detachment: Wind,
  purpose: Compass,
  life: Leaf,
  "heart-touching": Heart,
  students: GraduationCap,
  anger: CloudLightning,
  "death-and-loss": Sunset,
  love: HeartHandshake,
  stress: Waves,
  "short-quotes": MessageCircle,
  krishna: Sparkles,
}

/** Rotates the three accent hues across themes so the theme grid reads as varied, not monochrome. */
const themeTones: Record<ThemeSlug, "clay" | "teal" | "gold"> = {
  karma: "gold",
  motivation: "clay",
  "positive-thinking": "gold",
  success: "gold",
  peace: "teal",
  wisdom: "teal",
  courage: "clay",
  detachment: "teal",
  purpose: "clay",
  life: "teal",
  "heart-touching": "clay",
  students: "gold",
  anger: "clay",
  "death-and-loss": "teal",
  love: "clay",
  stress: "teal",
  "short-quotes": "gold",
  krishna: "gold",
}

const toneClasses = {
  clay: { bar: "bg-clay", chip: "bg-clay-soft text-clay-deep" },
  teal: { bar: "bg-teal", chip: "bg-teal-soft text-teal-deep" },
  gold: { bar: "bg-gold", chip: "bg-gold-soft text-gold-deep" },
}

interface ThemeCardProps {
  theme: Theme
  className?: string
}

export function ThemeCard({ theme, className }: ThemeCardProps) {
  const Icon = themeIcons[theme.slug]
  const tone = toneClasses[themeTones[theme.slug]]
  const count = getThemeVerses(theme).length

  return (
    <Link
      to={`/themes/${theme.slug}`}
      className={cn(
        "focus-ring group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      <span className={cn("block h-1.5 w-full", tone.bar)} aria-hidden />
      <div className="flex flex-col p-7">
        <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-full", tone.chip)}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 font-serif text-lg text-ink">{theme.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {theme.description}
        </p>
        <span className="mt-5 text-xs font-medium tracking-wide text-ink-faint uppercase">
          {count} {count === 1 ? "quote" : "quotes"}
        </span>
      </div>
    </Link>
  )
}
