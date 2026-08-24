import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Resets scroll position on route changes, respecting reduced-motion preference. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
  }, [pathname])

  return null
}
