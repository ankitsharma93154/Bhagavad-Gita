// Renders every verse's link-preview card (1200×630, src/lib/shareImage.ts "og" format) into
// public/og/<id>.jpg, the og:image / twitter:image for that verse's page. Story and wallpaper
// images aren't stored: visitors' browsers draw those on demand.
// Not part of `npm run build`: rerun by hand after changing a quote, a drawing or the card layout.
//
//   node scripts/share-images/build.mjs
//
// How: starts the Vite dev server with a small endpoint that saves uploaded images, then opens
// render.html?all=og in headless Edge/Chrome, which draws each card and posts it back.
// Set BROWSER to a Chrome/Edge executable if it isn't found automatically.
import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const OUT = path.join(ROOT, "public/og")
const PORT = 5299

const BROWSERS = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean)

const browser = BROWSERS.find((p) => existsSync(p))
if (!browser) throw new Error("No Chrome/Edge found. Set BROWSER to its executable path.")

await mkdir(OUT, { recursive: true })
let saved = 0

const server = await createServer({
  root: ROOT,
  logLevel: "warn",
  server: { port: PORT, strictPort: true },
  plugins: [
    {
      name: "save-og-images",
      configureServer(dev) {
        dev.middlewares.use("/__save-og", async (req, res) => {
          const id = new URL(req.url ?? "", "http://x").searchParams.get("id") ?? ""
          if (!/^\d+-\d+$/.test(id)) {
            res.statusCode = 400
            res.end()
            return
          }
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          await writeFile(path.join(OUT, `${id}.jpg`), Buffer.concat(chunks))
          saved++
          res.end("ok")
        })
      },
    },
  ],
})
await server.listen()

const url = `http://localhost:${PORT}/scripts/share-images/render.html?all=og`
await new Promise((resolve, reject) => {
  const proc = spawn(browser, ["--headless=new", "--disable-gpu", "--virtual-time-budget=240000", "--dump-dom", url], {
    stdio: ["ignore", "ignore", "ignore"],
  })
  proc.on("error", reject)
  proc.on("exit", resolve)
})
await server.close()

const files = (await readdir(OUT)).filter((f) => f.endsWith(".jpg"))
console.log(`Saved ${saved} link-preview images (${files.length} in public/og/)`)
