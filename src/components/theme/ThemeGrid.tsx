import type { Theme } from "@/data/themes"
import { ThemeCard } from "@/components/theme/ThemeCard"

interface ThemeGridProps {
  themes: Theme[]
  /**
   * When set, only the first `base` themes show on mobile, the first `sm` show from the sm
   * breakpoint up, and the full list only shows at lg+. `themes` must already be given in
   * priority order for this to make sense.
   */
  responsiveReveal?: { base: number; sm: number }
}

function revealClass(index: number, responsiveReveal?: { base: number; sm: number }) {
  if (!responsiveReveal) return undefined
  if (index < responsiveReveal.base) return undefined
  if (index < responsiveReveal.sm) return "hidden sm:block"
  return "hidden lg:block"
}

export function ThemeGrid({ themes, responsiveReveal }: ThemeGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {themes.map((theme, index) => (
        <ThemeCard key={theme.slug} theme={theme} className={revealClass(index, responsiveReveal)} />
      ))}
    </div>
  )
}
