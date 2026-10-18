import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { applyTheme, getTheme, hasStoredTheme } from "@/lib/theme"
import { cn } from "@/lib/utils"

/**
 * Light/dark switch. Holds no React state: the current theme lives on <html data-theme>,
 * set before paint by THEME_INIT_SCRIPT, and the icon swap is pure CSS (`dark:`), so the
 * prerendered markup is identical in both themes and hydration never mismatches.
 */
export function ThemeToggle({ className }: { className?: string }) {
  // Until the visitor picks one explicitly, keep following the OS setting live.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e: MediaQueryListEvent) => {
      if (!hasStoredTheme()) applyTheme(e.matches ? "dark" : "light", false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return (
    <button
      type="button"
      onClick={() => applyTheme(getTheme() === "dark" ? "light" : "dark", true)}
      aria-label="Toggle dark mode"
      className={cn(
        "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-soft hover:text-ink",
        className,
      )}
    >
      <Moon className="h-4.5 w-4.5 dark:hidden" aria-hidden />
      <Sun className="hidden h-4.5 w-4.5 dark:block" aria-hidden />
    </button>
  )
}
