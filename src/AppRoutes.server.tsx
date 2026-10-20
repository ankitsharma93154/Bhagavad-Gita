import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { Quotes } from "@/pages/Quotes"
import { HindiQuoteDetail, QuoteDetail } from "@/pages/QuoteDetail"
import { Themes } from "@/pages/Themes"
import { Theme } from "@/pages/Theme"
import { LanguagesHindi } from "@/pages/LanguagesHindi"
import { Saved } from "@/pages/Saved"
import { About } from "@/pages/About"
import { NotFound } from "@/pages/NotFound"

/**
 * SSR/prerender route table — statically imported so renderToString resolves synchronously
 * and every prerendered HTML file still contains its route's fully rendered markup. Must be
 * kept in sync with AppRoutes.tsx (the client, lazy-loaded equivalent).
 *
 * The <Suspense> wrapper is structurally required, not functional: the client tree has one
 * (around the lazy pages), so the server must emit the matching boundary or hydration fails
 * with a mismatch. Nothing here ever suspends.
 */
export function AppRoutesServer() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:slug" element={<QuoteDetail />} />
        <Route path="/hi/quotes/:slug" element={<HindiQuoteDetail />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/themes/:slug" element={<Theme />} />
        <Route path="/languages/hindi" element={<LanguagesHindi />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
