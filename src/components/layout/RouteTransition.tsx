import { useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

/**
 * Fades and lifts page content into place on navigation, so route changes feel less like a
 * hard cut. Keyed on pathname only (not search params), so typing in a search box or toggling
 * a filter never remounts and replays the animation.
 *
 * The animation is deliberately skipped for the first view (the prerendered/hydrated route):
 * `animate-fade-up` starts at opacity 0, so running it on initial load just delays FCP/LCP.
 * It kicks in from the first in-app navigation onward.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [firstPath] = useState(location.pathname)
  const [navigated, setNavigated] = useState(false)
  if (!navigated && location.pathname !== firstPath) setNavigated(true)

  return (
    <div
      key={location.pathname}
      className={navigated ? "animate-fade-up motion-reduce:animate-none" : undefined}
    >
      {children}
    </div>
  )
}
