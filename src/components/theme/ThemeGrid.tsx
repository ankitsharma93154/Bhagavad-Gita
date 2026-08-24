import type { Theme } from "@/data/themes"
import { ThemeCard } from "@/components/theme/ThemeCard"

interface ThemeGridProps {
  themes: Theme[]
}

export function ThemeGrid({ themes }: ThemeGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {themes.map((theme) => (
        <ThemeCard key={theme.slug} theme={theme} />
      ))}
    </div>
  )
}
