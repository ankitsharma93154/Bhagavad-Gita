// Generates dist/sitemap.xml from the same route list used by scripts/prerender.mjs
// (src/routes.ts), so the sitemap and the actually-prerendered routes can never drift apart.
import { writeFile } from "node:fs/promises"
import path from "node:path"
import { getStaticRoutePaths, SITE_URL } from "../dist-ssr/entry-server.js"

async function main() {
  const routes = getStaticRoutePaths()
  const urls = routes
    .map(
      ({ path: routePath, priority }) =>
        `  <url><loc>${SITE_URL}${routePath}</loc><priority>${priority.toFixed(1)}</priority></url>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  const outPath = path.resolve("dist", "sitemap.xml")
  await writeFile(outPath, xml, "utf-8")
  console.log(`Wrote sitemap.xml with ${routes.length} URLs.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
