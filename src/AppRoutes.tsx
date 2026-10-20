import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import {
  AboutPage,
  GitaJayantiPage,
  HindiQuoteDetailPage,
  HomePage,
  LanguagesHindiPage,
  NotFoundPage,
  QuoteDetailPage,
  QuotesPage,
  SavedPage,
  ThemePage,
  ThemesPage,
} from "@/pages/lazy"

/**
 * Client route table. Pages are lazy chunks; the current route's chunk is preloaded before
 * hydration in main.tsx, so the fallback is only ever seen on subsequent in-app navigations
 * to a not-yet-visited route (chunks are small and same-origin — a bare `null` is enough).
 */
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/quotes/:slug" element={<QuoteDetailPage />} />
        <Route path="/hi/quotes/:slug" element={<HindiQuoteDetailPage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/themes/:slug" element={<ThemePage />} />
        <Route path="/languages/hindi" element={<LanguagesHindiPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gita-jayanti" element={<GitaJayantiPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
