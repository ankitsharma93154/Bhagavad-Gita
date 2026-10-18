export type Theme = "light" | "dark"

export const THEME_STORAGE_KEY = "theme"

/** Browser chrome color per theme, matching --color-paper in each palette. */
export const THEME_COLORS: Record<Theme, string> = { light: "#fbeedf", dark: "#17120e" }

/**
 * Runs inline in <head> before first paint, so a dark-mode visitor never sees a flash of the
 * light palette: applies the stored choice, else the OS setting. Keep in sync with the copy
 * in index.html (used for the app shell and dev server).
 */
export const THEME_INIT_SCRIPT = `(function(){var t;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"${THEME_COLORS.dark}":"${THEME_COLORS.light}")})()`

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light"
}

export function applyTheme(theme: Theme, persist: boolean) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme])
  if (!persist) return
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // storage unavailable (private mode) — the choice just lasts for this page view
  }
}

export function hasStoredTheme(): boolean {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) !== null
  } catch {
    return false
  }
}
