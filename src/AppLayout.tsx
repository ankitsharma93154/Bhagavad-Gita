import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { RouteTransition } from "@/components/layout/RouteTransition"

/**
 * The persistent page chrome (header, footer, skip link, scroll reset, route transition).
 * Shared verbatim by the client entry (App.tsx) and the SSR/prerender entry
 * (entry-server.tsx) so the two can never drift, while each supplies its own <Routes>:
 * the client one lazy-loaded per route, the server one statically imported so
 * renderToString stays synchronous.
 */
export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="focus:bg-clay sr-only rounded-full px-4 py-2 text-sm font-medium text-surface focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <RouteTransition>{children}</RouteTransition>
      </main>
      <Footer />
      <Analytics />
      {/* Real-visitor Core Web Vitals, reported to Vercel Speed Insights. Loads its own small script
          after the page, so it doesn't affect the metrics it measures. */}
      <SpeedInsights />
    </div>
  )
}
