// Runs after both the client build (`vite build`) and the SSR build
// (`vite build --ssr src/entry-server.tsx --outDir dist-ssr`). Writes one static
// dist/<route>/index.html per indexable route, with real per-route <title>/meta/OG/JSON-LD
// and rendered content baked in — see src/entry-server.tsx and src/routes.ts.
import { readFile, writeFile, copyFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { render, getStaticRoutePaths } from "../dist-ssr/entry-server.js"

const DIST = path.resolve("dist")

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

  const routes = getStaticRoutePaths()
  for (const { path: routePath } of routes) {
    const html = render({ url: routePath, cssHref, scriptSrc })
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
