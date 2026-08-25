import type { ReactNode } from "react"
import { useLocation } from "react-router-dom"

/**
 * Fades and lifts page content into place on navigation, so route changes feel less like a
 * hard cut. Keyed on pathname only (not search params), so typing in a search box or toggling
 * a filter never remounts and replays the animation.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="animate-fade-up motion-reduce:animate-none">
      {children}
    </div>
  )
}
