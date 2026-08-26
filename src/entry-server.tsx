import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from "./App"
import { SITE_NAME, SITE_URL } from "./lib/seo"

export interface RenderInput {
  url: string
  /** Hashed asset paths from the real client build, e.g. "/assets/index-abc123.css". */
  cssHref: string
  scriptSrc: string
}

/**
 * Renders the full HTML document (not just the app) in one renderToString call, so React 19's
 * <title>/<meta>/<link> hoisting has a real <head> in the same render tree to hoist into — the
 * per-page <Seo> tags rendered deep inside <App/> end up in <head> below.
 */
export function render({ url, cssHref, scriptSrc }: RenderInput): string {
  const doc = (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#fbeedf" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Serif+Devanagari:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={cssHref} />
      </head>
      <body>
        <div id="root">
          <StrictMode>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </StrictMode>
        </div>
        <script type="module" src={scriptSrc}></script>
      </body>
    </html>
  )

  return `<!doctype html>\n${renderToString(doc)}`
}

export { getStaticRoutePaths } from "./routes"
export { SITE_URL } from "./lib/seo"
