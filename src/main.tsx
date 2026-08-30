import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, matchPath } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { routePreloaders } from './pages/lazy'

const rootEl = document.getElementById('root')!
const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered pages arrive with real markup already in #root and need to hydrate onto it;
// the app-shell fallback (served for /saved and any unmatched URL) has an empty #root and
// needs a plain client render, same as before prerendering existed.
if (rootEl.hasChildNodes()) {
  // The matched route's page is a lazy chunk. It MUST be downloaded and its module evaluated
  // before hydrateRoot, otherwise React hydrates the <Suspense> as empty, mismatches the
  // server markup, and throws (React error #418), discarding the prerendered DOM.
  const here = window.location.pathname
  const match = routePreloaders.find((r) => matchPath({ path: r.path, end: true }, here))
  Promise.resolve(match?.preload())
    .catch(() => {})
    .finally(() => hydrateRoot(rootEl, tree))
} else {
  createRoot(rootEl).render(tree)
}
