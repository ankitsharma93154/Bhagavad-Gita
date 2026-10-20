import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppLayout } from "./AppLayout"
import { AppRoutesServer } from "./AppRoutes.server"
import { SITE_NAME } from "./lib/seo"
import { THEME_COLORS, THEME_INIT_SCRIPT } from "./lib/theme"

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
/** Routes whose main content is Hindi, so the prerendered <html lang> matches the page. */
function isHindiRoute(url: string): boolean {
  return url.startsWith("/hi/") || url === "/languages/hindi"
}

export function render({ url, cssHref, scriptSrc }: RenderInput): string {
  const doc = (
    <html lang={isHindiRoute(url) ? "hi" : "en"}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={THEME_COLORS.light} />
        {/* eslint-disable-next-line react/no-danger -- static, first-party theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <meta property="og:site_name" content={SITE_NAME} />
        {/* og:image / twitter:image come from each page's <Seo>, so verse pages get their own card. */}
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="stylesheet" href={cssHref} />
      </head>
      <body>
        <div id="root">
          <StrictMode>
            <StaticRouter location={url}>
              <AppLayout>
                <AppRoutesServer />
              </AppLayout>
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
