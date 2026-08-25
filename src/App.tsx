import { Route, Routes } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { Home } from "@/pages/Home"
import { Quotes } from "@/pages/Quotes"
import { QuoteDetail } from "@/pages/QuoteDetail"
import { Themes } from "@/pages/Themes"
import { Theme } from "@/pages/Theme"
import { LanguagesHindi } from "@/pages/LanguagesHindi"
import { Saved } from "@/pages/Saved"
import { About } from "@/pages/About"
import { NotFound } from "@/pages/NotFound"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div
        aria-hidden
        className="bg-gradient-brand pointer-events-none fixed left-1/2 -top-40 -z-10 h-136 w-5xl -translate-x-1/2 rounded-full opacity-[0.15] blur-3xl"
      />
      <ScrollToTop />
      <a
        href="#main-content"
        className="focus:bg-clay sr-only rounded-full px-4 py-2 text-sm font-medium text-surface focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:slug" element={<QuoteDetail />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/themes/:slug" element={<Theme />} />
          <Route path="/languages/hindi" element={<LanguagesHindi />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
