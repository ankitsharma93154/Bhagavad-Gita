// Renders share images ahead of time with src/lib/shareImage.ts. Not part of `npm run build`:
// rerun by hand after changing a quote, a drawing or a card layout.
//
//   node scripts/share-images/build.mjs
//     Every verse's link-preview card (1200×630) into public/og/<id>.jpg, the og:image /
//     twitter:image for that verse's page.
//
//   node scripts/share-images/build.mjs pins [--start 2026-10-21]
//     Every verse's Pinterest pin (1000×1500), in English and Hindi, into
//     public/pins/<id>-<lang>.jpg, plus Pinterest bulk-upload CSVs in pinterest/ (one per week,
//     three pins a day from --start, default tomorrow) and the board list they refer to.
//     The CSVs point at the live site, so deploy the pins before uploading them.
//
// Story and wallpaper images aren't stored: visitors' browsers draw those on demand.
//
// How: starts the Vite dev server with a small endpoint that saves uploaded images, then opens
// render.html?all=og (or ?all=pin) in headless Edge/Chrome, which draws each image and posts it
// back. Set BROWSER to a Chrome/Edge executable if it isn't found automatically.
import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const PORT = 5299
const SITE = "https://www.bhagvadgitaquotes.com"

// Situational boards win over topical ones, in this order, since they match how people search.
const BOARDS = [
  { name: "Krishna Quotes from the Bhagavad Gita", situation: "krishna", about: "Lord Krishna's words to Arjuna from the Bhagavad Gita, with the Sanskrit shloka and meaning." },
  { name: "Bhagavad Gita Quotes on Death and Loss", situation: "death-and-loss", about: "Comforting Bhagavad Gita quotes on death, grief and the eternal soul." },
  { name: "Bhagavad Gita Quotes on Anger", situation: "anger", about: "What the Bhagavad Gita says about anger and how to master it." },
  { name: "Bhagavad Gita Quotes for Students", situation: "students", about: "Gita quotes for students on focus, exams, discipline and a restless mind." },
  { name: "Bhagavad Gita Quotes for Stress and Anxiety", situation: "stress", about: "Calming Bhagavad Gita quotes for stress, anxiety and overthinking." },
  { name: "Bhagavad Gita Quotes on Love", situation: "love", about: "Bhagavad Gita quotes on love, compassion and devotion." },
  { name: "Bhagavad Gita Quotes on Karma", category: "karma", about: "Karma yoga quotes from the Bhagavad Gita, on doing your work without attachment to results." },
  { name: "Bhagavad Gita Quotes on Peace", category: "peace", about: "Bhagavad Gita quotes for peace of mind and a steady heart." },
  { name: "Bhagavad Gita Quotes", about: "Bhagavad Gita quotes with Sanskrit shlokas, English translation and simple meaning." },
]
const HINDI_BOARD = {
  name: "Bhagavad Gita Quotes in Hindi",
  about: "भगवद गीता के श्लोक हिंदी अर्थ सहित। Bhagavad Gita quotes in Hindi with the Sanskrit shloka and meaning.",
}

const mode = process.argv[2] === "pins" ? "pin" : "og"
const OUT = path.join(ROOT, mode === "pin" ? "public/pins" : "public/og")
const startArg = process.argv.indexOf("--start")
const start = startArg > 0 ? new Date(`${process.argv[startArg + 1]}T00:00:00`) : tomorrow()
if (Number.isNaN(start.getTime())) throw new Error("--start must be a date like 2026-10-21")

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
      name: "save-share-images",
      configureServer(dev) {
        dev.middlewares.use("/__save", async (req, res) => {
          const id = new URL(req.url ?? "", "http://x").searchParams.get("id") ?? ""
          if (!/^\d+-\d+(-en|-hi)?$/.test(id)) {
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

const url = `http://localhost:${PORT}/scripts/share-images/render.html?all=${mode}`
await new Promise((resolve, reject) => {
  const proc = spawn(browser, ["--headless=new", "--disable-gpu", "--virtual-time-budget=600000", "--dump-dom", url], {
    stdio: ["ignore", "ignore", "ignore"],
  })
  proc.on("error", reject)
  proc.on("exit", resolve)
})

if (mode === "pin") await writePinterestFiles()
await server.close()

const files = (await readdir(OUT)).filter((f) => f.endsWith(".jpg"))
console.log(`Saved ${saved} ${mode === "pin" ? "pins" : "link-preview images"} (${files.length} in ${path.relative(ROOT, OUT)}/)`)

function tomorrow() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 1)
  return d
}

/** Writes pinterest/boards.txt and one bulk-upload CSV per week of pins. */
async function writePinterestFiles() {
  const { verses, verseSlug } = await server.ssrLoadModule("/src/data/verses.ts")
  const { versesHindi } = await server.ssrLoadModule("/src/data/versesHindi.ts")
  const { themes, getThemeBySlug } = await server.ssrLoadModule("/src/data/themes.ts")

  const boardFor = (v) =>
    BOARDS.find((b) =>
      b.situation
        ? themes.find((t) => t.slug === b.situation)?.verseIds?.includes(v.id)
        : b.category
          ? v.categories.includes(b.category)
          : true,
    )

  const pins = []
  // Array order is curated: the best-known verses come first, so they're pinned first.
  for (const v of verses) {
    const ref = `${v.chapter}.${v.verse}`
    const slug = verseSlug(v)
    const topics = v.categories.map((c) => getThemeBySlug(c)?.title.toLowerCase()).filter(Boolean)
    pins.push({
      title: v.shlokaName
        ? `${v.shlokaName} Meaning | Bhagavad Gita ${ref}`
        : `Bhagavad Gita ${ref} Quote on ${getThemeBySlug(v.categories[0])?.title ?? "Life"}`,
      media: `${SITE}/pins/${v.id}-en.jpg`,
      board: boardFor(v).name,
      description: `"${v.quote}" ${v.simpleMeaning ?? v.meaning} Read the Sanskrit shloka, translation and meaning of Bhagavad Gita ${ref}.`,
      link: `${SITE}/quotes/${slug}`,
      keywords: [
        "bhagavad gita quotes",
        `bhagavad gita ${ref}`,
        v.shlokaName && `${v.shlokaName.toLowerCase()} meaning`,
        "krishna quotes",
        ...topics.slice(0, 2).map((t) => `gita quotes on ${t}`),
      ],
    })
    const hi = versesHindi[v.id]
    if (hi) {
      pins.push({
        title: `${hi.name} का अर्थ | भगवद गीता ${ref} हिंदी में`,
        media: `${SITE}/pins/${v.id}-hi.jpg`,
        board: HINDI_BOARD.name,
        description: `"${v.quoteHindi ?? v.quote}" ${hi.meaning.replace(/\n\n+/g, " ")} श्लोक का संस्कृत पाठ, हिंदी अनुवाद और पूरा अर्थ पढ़ें।`,
        link: `${SITE}/hi/quotes/${slug}`,
        keywords: [
          "gita quotes in hindi",
          "bhagavad gita in hindi",
          "गीता के श्लोक",
          `gita ${ref} in hindi`,
          v.shlokaName && `${v.shlokaName.toLowerCase()} meaning in hindi`,
        ],
      })
    }
  }

  // Three a day, spread out, so the account grows steadily instead of dumping everything at once.
  const SLOTS = ["09:00", "14:00", "20:00"]
  const PER_WEEK = SLOTS.length * 7
  const dir = path.join(ROOT, "pinterest")
  await mkdir(dir, { recursive: true })
  const header = ["Title", "Media URL", "Pinterest board", "Thumbnail", "Description", "Link", "Publish date", "Keywords"]
  const weeks = Math.ceil(pins.length / PER_WEEK)
  for (let w = 0; w < weeks; w++) {
    const rows = pins.slice(w * PER_WEEK, (w + 1) * PER_WEEK).map((pin, i) => {
      const n = w * PER_WEEK + i
      const day = new Date(start)
      day.setDate(day.getDate() + Math.floor(n / SLOTS.length))
      return [
        clip(pin.title, 100),
        pin.media,
        pin.board,
        "",
        clip(pin.description, 500),
        pin.link,
        `${isoDate(day)}T${SLOTS[n % SLOTS.length]}:00`,
        pin.keywords.filter(Boolean).join(", "),
      ]
    })
    const csv = [header, ...rows].map((r) => r.map(csvField).join(",")).join("\n") + "\n"
    await writeFile(path.join(dir, `pins-week-${String(w + 1).padStart(2, "0")}.csv`), csv, "utf-8")
  }

  const used = new Map()
  for (const pin of pins) used.set(pin.board, (used.get(pin.board) ?? 0) + 1)
  const boards = [...BOARDS, HINDI_BOARD]
    .filter((b) => used.has(b.name))
    .map((b) => `${b.name}  (${used.get(b.name)} pins)\n  ${b.about}`)
    .join("\n\n")
  await writeFile(
    path.join(dir, "boards.txt"),
    `Create these boards on Pinterest first, named exactly as below. The CSVs refer to them by name.\n\n${boards}\n`,
    "utf-8",
  )
  console.log(`Wrote ${pins.length} pins across ${weeks} weekly CSVs, starting ${isoDate(start)}, to pinterest/`)
}

function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

/** Shortens to `max` characters at a word boundary, adding an ellipsis. */
function clip(text, max) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

function csvField(value) {
  return `"${String(value).replace(/"/g, '""')}"`
}
