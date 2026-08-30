// Runs after both the client build (`vite build`) and the SSR build
// (`vite build --ssr src/entry-server.tsx --outDir dist-ssr`). Writes one static
// dist/<route>/index.html per indexable route, with real per-route <title>/meta/OG/JSON-LD
// and rendered content baked in — see src/entry-server.tsx and src/routes.ts.
import { readFile, writeFile, copyFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { render, getStaticRoutePaths } from "../dist-ssr/entry-server.js"

const DIST = path.resolve("dist")

// Which lazy page chunk (src/pages/lazy.ts) backs each route, so we can inject a
// <link rel="modulepreload"> for it (and its shared imports) into that route's HTML —
// otherwise the split-out chunk only starts downloading after the main bundle parses.
function pageModuleForRoute(routePath) {
  if (routePath === "/") return "src/pages/Home.tsx"
  if (routePath === "/quotes") return "src/pages/Quotes.tsx"
  if (routePath === "/themes") return "src/pages/Themes.tsx"
  if (routePath === "/languages/hindi") return "src/pages/LanguagesHindi.tsx"
  if (routePath === "/about") return "src/pages/About.tsx"
  if (routePath.startsWith("/quotes/")) return "src/pages/QuoteDetail.tsx"
  if (routePath.startsWith("/themes/")) return "src/pages/Theme.tsx"
  return null
}

/** Collect a manifest entry's output file plus every file it transitively static-imports. */
function collectChunks(manifest, key, seen = new Set()) {
  const entry = manifest[key]
  if (!entry || seen.has(key)) return seen
  seen.add(key)
  for (const dep of entry.imports ?? []) collectChunks(manifest, dep, seen)
  return seen
}

async function main() {
  const shellPath = path.join(DIST, "index.html")
  const shell = await readFile(shellPath, "utf-8")

  // Snapshot the plain CSR-only build as the SPA-fallback shell BEFORE "/" below overwrites
  // dist/index.html with real prerendered Home content — the fallback must stay empty, or
  // /saved and any unmatched URL would flash real Home content before hydration corrects it.
  await copyFile(shellPath, path.join(DIST, "app-shell.html"))

  const cssHref = shell.match(/<link rel="stylesheet"[^>]*href="([^"]+)"/)?.[1]
  const scriptSrc = shell.match(/<script type="module"[^>]*src="([^"]+)"/)?.[1]
  if (!cssHref || !scriptSrc) {
    throw new Error(`Could not locate built asset tags in ${shellPath}`)
  }

  // The one stylesheet is small (~8 KB gzipped) and render-blocking. Inline it into each
  // prerendered page so first paint doesn't wait on a separate request. Client-side
  // navigation reuses the same document, so there's nothing to re-download.
  const cssText = await readFile(path.join(DIST, cssHref.replace(/^\//, "")), "utf-8")
  const linkTag = new RegExp(`<link rel="stylesheet"[^>]*href="${cssHref}"[^>]*>`)

  const manifest = JSON.parse(await readFile(path.join(DIST, ".vite", "manifest.json"), "utf-8"))
  const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry)
  // Imports the browser would otherwise only discover after fetching+parsing the entry chunk.
  const entryDeps = [...collectChunks(manifest, entryKey)]
    .filter((k) => k !== entryKey)
    .map((k) => manifest[k].file)

  const routes = getStaticRoutePaths()
  for (const { path: routePath } of routes) {
    let html = render({ url: routePath, cssHref, scriptSrc })

    const pageKey = pageModuleForRoute(routePath)
    const routeChunks = pageKey ? [...collectChunks(manifest, pageKey)].map((k) => manifest[k].file) : []
    const preloads = [...new Set([...entryDeps, ...routeChunks])]
      .map((file) => `<link rel="modulepreload" href="/${file}">`)
      .join("")
    if (preloads) html = html.replace("</head>", `${preloads}</head>`)

    html = html.replace(linkTag, `<style>${cssText}</style>`)

    const outDir = routePath === "/" ? DIST : path.join(DIST, routePath)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, "index.html"), html, "utf-8")
  }

  console.log(`Prerendered ${routes.length} routes, plus app-shell.html.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
