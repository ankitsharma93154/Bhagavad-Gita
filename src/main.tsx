import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, matchRoutes } from 'react-router-dom'
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
  // The matched route's page is a lazy chunk. Warm it before hydrateRoot so React hydrates
  // straight onto the server markup instead of dropping it for the Suspense fallback.
  const matched = matchRoutes(routePreloaders, window.location.pathname)
  const preload = (matched?.[0]?.route as { preload?: () => Promise<unknown> } | undefined)
    ?.preload
  Promise.resolve(preload?.()).finally(() => hydrateRoot(rootEl, tree))
} else {
  createRoot(rootEl).render(tree)
}
