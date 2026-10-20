import { lazy, type ComponentType, type LazyExoticComponent } from "react"

/**
 * Route-level code splitting. Each page becomes its own async chunk, so the first load of
 * "/" no longer ships the JS for /quotes, /themes, /about, etc. The pages use named exports,
 * hence the `.then()` unwrap.
 *
 * Every lazy component also exposes `.preload()` (the same import factory) so the client
 * entry can warm the chunk for the current URL *before* hydrateRoot — without that, hydrating
 * a prerendered page whose chunk hasn't downloaded makes React drop the server markup and
 * flash the Suspense fallback.
 */
type Loader = () => Promise<{ default: ComponentType<unknown> }>
type Preloadable = LazyExoticComponent<ComponentType<unknown>> & { preload: Loader }

function page(loader: Loader): Preloadable {
  const Component = lazy(loader) as Preloadable
  Component.preload = loader
  return Component
}

export const HomePage = page(() => import("@/pages/Home").then((m) => ({ default: m.Home })))
export const QuotesPage = page(() => import("@/pages/Quotes").then((m) => ({ default: m.Quotes })))
export const QuoteDetailPage = page(() =>
  import("@/pages/QuoteDetail").then((m) => ({ default: m.QuoteDetail })),
)
export const HindiQuoteDetailPage = page(() =>
  import("@/pages/QuoteDetail").then((m) => ({ default: m.HindiQuoteDetail })),
)
export const ThemesPage = page(() => import("@/pages/Themes").then((m) => ({ default: m.Themes })))
export const ThemePage = page(() => import("@/pages/Theme").then((m) => ({ default: m.Theme })))
export const LanguagesHindiPage = page(() =>
  import("@/pages/LanguagesHindi").then((m) => ({ default: m.LanguagesHindi })),
)
export const SavedPage = page(() => import("@/pages/Saved").then((m) => ({ default: m.Saved })))
export const AboutPage = page(() => import("@/pages/About").then((m) => ({ default: m.About })))
export const NotFoundPage = page(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound })),
)

/** Route pattern -> chunk preloader, consumed by matchRoutes() in main.tsx. */
export const routePreloaders: { path: string; preload: Loader }[] = [
  { path: "/", preload: HomePage.preload },
  { path: "/quotes", preload: QuotesPage.preload },
  { path: "/quotes/:slug", preload: QuoteDetailPage.preload },
  { path: "/hi/quotes/:slug", preload: HindiQuoteDetailPage.preload },
  { path: "/themes", preload: ThemesPage.preload },
  { path: "/themes/:slug", preload: ThemePage.preload },
  { path: "/languages/hindi", preload: LanguagesHindiPage.preload },
  { path: "/saved", preload: SavedPage.preload },
  { path: "/about", preload: AboutPage.preload },
]
