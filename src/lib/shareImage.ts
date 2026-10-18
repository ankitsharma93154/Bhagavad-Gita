import type { Verse } from "@/data/verses"

/**
 * Draws a verse as a shareable image on a canvas: an Instagram story / WhatsApp status
 * (1080×1920), a phone wallpaper (1080×2340), or a link-preview card (1200×630, rendered
 * ahead of time into public/og/ by scripts/share-images/build.mjs).
 *
 * Kept free of React and of the page's CSS so the result is identical everywhere: colors are
 * copied from the theme tokens in index.css, the serif is Crimson Pro (loaded here, not used
 * by the site itself), and the verse drawing is fetched from public/verse-art/ and recolored.
 * Loaded lazily, only when someone opens the "Save as image" dialog.
 */

export type ShareFormat = "story" | "wallpaper" | "og"
export type ShareLang = "en" | "hi"
export type ShareTheme = "light" | "dark"

export interface ShareImageOptions {
  format: ShareFormat
  lang: ShareLang
  theme: ShareTheme
}

export const SHARE_SIZES: Record<ShareFormat, { width: number; height: number }> = {
  story: { width: 1080, height: 1920 },
  wallpaper: { width: 1080, height: 2340 },
  og: { width: 1200, height: 630 },
}

const DOMAIN = "bhagvadgitaquotes.com"

// Keep in sync with the light tokens in @theme and the dark-tokens utility in index.css.
const PALETTES = {
  light: {
    paper: "#fbeedf",
    ink: "#241a12",
    inkSoft: "#675340",
    inkFaint: "#73604a",
    lineStrong: "#93794c",
    clay: "#b5233f",
    claySoft: "#f5d7dd",
    teal: "#3b2e6b",
    gold: "#c99a3e",
    goldDeep: "#7c5c1d",
    goldSoft: "#f3e3bc",
    saffron: "#9c4a1c",
  },
  dark: {
    paper: "#17120e",
    ink: "#f3e7d6",
    inkSoft: "#cdb9a0",
    inkFaint: "#a8937a",
    lineStrong: "#8a7350",
    clay: "#e57d90",
    claySoft: "#3d1d25",
    teal: "#a99be0",
    gold: "#e2bd6e",
    goldDeep: "#e9c983",
    goldSoft: "#33291a",
    saffron: "#e5925e",
  },
} as const

type Palette = (typeof PALETTES)[ShareTheme]

// Registered under their own names (same files the site uses for Inter and Devanagari, so
// they're usually already cached) so the renderer never depends on the page's @font-face rules.
const SERIF = '"Share Serif", Georgia, serif'
const DEVANAGARI = '"Share Deva", "Share Serif", serif'
const SANS = '"Share Sans", "Segoe UI", sans-serif'

const FONT_FILES = [
  { family: "Share Serif", url: "/fonts/crimson-pro-500-latin.woff2", weight: "500" },
  { family: "Share Sans", url: "/fonts/inter-latin.woff2", weight: "400 600" },
  { family: "Share Deva", url: "/fonts/noto-serif-devanagari-400.woff2", weight: "400" },
]

let fontsReady: Promise<void> | undefined

function ensureFonts(): Promise<void> {
  fontsReady ??= Promise.all(
    FONT_FILES.map(async ({ family, url, weight }) => {
      const face = new FontFace(family, `url(${url})`, { weight })
      document.fonts.add(await face.load())
    }),
  ).then(() => undefined)
  return fontsReady
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Couldn't load ${src}`))
    img.src = src
  })
}

/** The verse drawing with its var(--color-*) styles swapped for this palette's hex values. */
async function loadArt(id: string, p: Palette): Promise<HTMLImageElement | null> {
  const res = await fetch(`/verse-art/${id}.svg`)
  if (!res.ok) return null
  const tokenToHex: Record<string, string> = {
    clay: p.clay,
    gold: p.gold,
    saffron: p.saffron,
    "line-strong": p.lineStrong,
    teal: p.teal,
    paper: p.paper,
  }
  const svg = (await res.text())
    .replace(/var\(--color-([a-z-]+),#[0-9a-fA-F]+\)/g, (m, name: string) => tokenToHex[name] ?? m)
    // Canvas needs an intrinsic size to draw an SVG image in every browser.
    .replace("<svg ", '<svg width="480" height="480" ')
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }))
  try {
    return await loadImage(url)
  } finally {
    URL.revokeObjectURL(url)
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function mix(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a)
  const [r2, g2, b2] = hexToRgb(b)
  return `rgb(${Math.round(r1 + (r2 - r1) * t)}, ${Math.round(g1 + (g2 - g1) * t)}, ${Math.round(b1 + (b2 - b1) * t)})`
}

function alpha(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

/** An elliptical radial bloom, fading to transparent, like the page's background. */
function bloom(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number, color: string) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.scale(1, ry / rx)
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx)
  // Fade to the same color at zero alpha: fading to transparent *black* goes grey on canvas.
  g.addColorStop(0, color)
  g.addColorStop(0.7, color.replace(/rgba?\(([^,]+),([^,]+),([^,)]+)(?:,[^)]+)?\)/, "rgba($1,$2,$3, 0)"))
  ctx.fillStyle = g
  ctx.fillRect(-rx, -rx, rx * 2, rx * 2)
  ctx.restore()
}

/** Same layers as the body background in index.css: diagonal wash plus two rose blooms. */
function paintBackground(ctx: CanvasRenderingContext2D, w: number, h: number, p: Palette) {
  // 160deg CSS gradient → direction vector (sin160°, -cos160°)
  const a = (160 * Math.PI) / 180
  const dx = Math.sin(a)
  const dy = -Math.cos(a)
  const half = (Math.abs(w * dx) + Math.abs(h * dy)) / 2
  const lin = ctx.createLinearGradient(w / 2 - dx * half, h / 2 - dy * half, w / 2 + dx * half, h / 2 + dy * half)
  lin.addColorStop(0, p.claySoft)
  lin.addColorStop(0.48, p.paper)
  lin.addColorStop(0.72, p.paper)
  lin.addColorStop(1, p.goldSoft)
  ctx.fillStyle = lin
  ctx.fillRect(0, 0, w, h)
  bloom(ctx, 0, 0, w * 0.9, h * 0.55, mix(p.claySoft, p.clay, 0.14))
  bloom(ctx, w, 0, w * 0.7, h * 0.45, alpha(p.claySoft, 0.65))
}

/** Greedy word wrap. Splits on spaces, which works for both English and Hindi. */
function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let line = ""
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

/**
 * Wrap at the narrowest width that still gives the same number of lines, like CSS
 * `text-wrap: balance`, so a quote never ends on a lone word.
 */
function wrapBalanced(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const target = wrap(ctx, text, maxWidth).length
  if (target < 2) return wrap(ctx, text, maxWidth)
  let lo = maxWidth * 0.4
  let hi = maxWidth
  while (hi - lo > 4) {
    const mid = (lo + hi) / 2
    if (wrap(ctx, text, mid).length > target) lo = mid
    else hi = mid
  }
  return wrap(ctx, text, hi)
}

interface TextBlock {
  lines: string[]
  size: number
  lineHeight: number
  font: string
  color: string
}

/** Largest font size (stepping down) at which `text` fits in `maxLines` lines. */
function fitText(
  ctx: CanvasRenderingContext2D,
  text: string,
  family: string,
  weight: string,
  maxWidth: number,
  maxSize: number,
  minSize: number,
  maxLines: number,
  lineHeight: number,
  color: string,
): TextBlock {
  let size = maxSize
  for (; size > minSize; size -= 2) {
    ctx.font = `${weight} ${size}px ${family}`
    if (wrap(ctx, text, maxWidth).length <= maxLines) break
  }
  ctx.font = `${weight} ${size}px ${family}`
  return { lines: wrapBalanced(ctx, text, maxWidth), size, lineHeight: size * lineHeight, font: ctx.font, color }
}

function blockHeight(b: TextBlock): number {
  return b.lines.length * b.lineHeight
}

function drawBlock(ctx: CanvasRenderingContext2D, b: TextBlock, x: number, top: number, align: CanvasTextAlign = "center") {
  ctx.font = b.font
  ctx.fillStyle = b.color
  ctx.textAlign = align
  ctx.textBaseline = "middle"
  b.lines.forEach((line, i) => ctx.fillText(line, x, top + b.lineHeight * (i + 0.5)))
}

/** Small caps-style label with letter spacing (spacing skipped for Devanagari, which it breaks). */
function drawLabel(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, size: number, color: string, lang: ShareLang, align: CanvasTextAlign = "center") {
  ctx.font = lang === "hi" ? `${size * 1.15}px ${DEVANAGARI}` : `600 ${size}px ${SANS}`
  ctx.fillStyle = color
  ctx.textAlign = align
  ctx.textBaseline = "middle"
  if ("letterSpacing" in ctx && lang === "en") ctx.letterSpacing = `${size * 0.16}px`
  ctx.fillText(text, x, y)
  if ("letterSpacing" in ctx) ctx.letterSpacing = "0px"
}

function drawDivider(ctx: CanvasRenderingContext2D, cx: number, y: number, half: number, p: Palette) {
  ctx.strokeStyle = alpha(p.lineStrong, 0.7)
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(cx - half, y)
  ctx.lineTo(cx - 14, y)
  ctx.moveTo(cx + 14, y)
  ctx.lineTo(cx + half, y)
  ctx.stroke()
  ctx.save()
  ctx.translate(cx, y)
  ctx.rotate(Math.PI / 4)
  ctx.fillStyle = alpha(p.clay, 0.6)
  ctx.fillRect(-5, -5, 10, 10)
  ctx.restore()
}

/** The verse drawing inside its dashed ring, centered at (cx, cy) with the given diameter. */
function drawArt(ctx: CanvasRenderingContext2D, art: HTMLImageElement | null, cx: number, cy: number, size: number, p: Palette) {
  const scale = size / 240
  ctx.save()
  ctx.strokeStyle = alpha(p.lineStrong, 0.35)
  ctx.lineWidth = 1.5 * scale
  ctx.setLineDash([2 * scale, 6 * scale])
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.arc(cx, cy + 2 * scale, 100 * scale, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
  if (art) ctx.drawImage(art, cx - size / 2, cy - size / 2 - 2 * scale, size, size)
}

function drawFrame(ctx: CanvasRenderingContext2D, w: number, h: number, inset: number, p: Palette) {
  ctx.save()
  ctx.strokeStyle = alpha(p.lineStrong, 0.3)
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(inset, inset, w - inset * 2, h - inset * 2, 40)
  ctx.stroke()
  ctx.restore()
}

function drawBrand(ctx: CanvasRenderingContext2D, logo: HTMLImageElement | null, cx: number, y: number, size: number, p: Palette, align: "center" | "right" = "center") {
  ctx.font = `500 ${size}px ${SANS}`
  const textWidth = ctx.measureText(DOMAIN).width
  const logoSize = logo ? size * 1.9 : 0
  const gap = logo ? size * 0.5 : 0
  const total = logoSize + gap + textWidth
  const left = align === "center" ? cx - total / 2 : cx - total
  if (logo) ctx.drawImage(logo, left, y - logoSize / 2, logoSize, logoSize)
  ctx.fillStyle = p.inkSoft
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  ctx.fillText(DOMAIN, left + logoSize + gap, y)
}

function quoteText(verse: Verse, lang: ShareLang): string {
  const text = lang === "hi" && verse.quoteHindi ? verse.quoteHindi : verse.quote
  // Curly apostrophes: the data uses straight ones, which look like typewriter marks at this size.
  return `“${text.replace(/'/g, "’")}”`
}

function referenceLabel(verse: Verse, lang: ShareLang): string {
  return lang === "hi" ? `भगवद् गीता ${verse.chapter}.${verse.verse}` : `BHAGAVAD GITA ${verse.chapter}.${verse.verse}`
}

/** Renders the image onto a new canvas. Call from the browser only. */
export async function renderShareImage(verse: Verse, { format, lang, theme }: ShareImageOptions): Promise<HTMLCanvasElement> {
  const p = PALETTES[theme]
  const { width: w, height: h } = SHARE_SIZES[format]
  const [, art, logo] = await Promise.all([
    ensureFonts(),
    loadArt(verse.id, p),
    loadImage("/logo-mark.webp").catch(() => null),
  ])

  const canvas = document.createElement("canvas")
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas isn't available")
  paintBackground(ctx, w, h, p)

  const quoteFamily = lang === "hi" ? DEVANAGARI : SERIF
  const useHindi = lang === "hi" && Boolean(verse.quoteHindi)
  const quoteLang: ShareLang = useHindi ? "hi" : "en"

  if (format === "og") {
    // Landscape card: drawing on the left, text on the right.
    drawArt(ctx, art, 250, h / 2, 330, p)
    const x = 470
    const maxWidth = w - x - 80
    const quote = fitText(ctx, quoteText(verse, quoteLang), quoteLang === "hi" ? DEVANAGARI : SERIF, quoteLang === "hi" ? "400" : "500", maxWidth, 58, 36, 4, 1.25, p.ink)
    const blockTop = h / 2 - (blockHeight(quote) + 70) / 2 + 30
    drawLabel(ctx, referenceLabel(verse, "en"), x, blockTop - 20, 22, p.goldDeep, "en", "left")
    drawBlock(ctx, quote, x, blockTop + 16, "left")
    drawBrand(ctx, logo, w - 64, h - 56, 22, p, "right")
    return canvas
  }

  const isStory = format === "story"
  const cx = w / 2
  const maxWidth = 860
  // Safe areas: Instagram covers ~250px at the top and bottom of a story. A lock screen's clock
  // and widgets cover roughly the top 40% of a wallpaper, its shortcuts the bottom ~10%.
  const region = isStory ? { top: 250, bottom: 1580 } : { top: 940, bottom: 2020 }
  const brandY = isStory ? 1670 : 2120
  const artSize = isStory ? 400 : 320
  const labelSize = isStory ? 30 : 26

  const quote = fitText(
    ctx,
    quoteText(verse, quoteLang),
    quoteFamily,
    quoteLang === "hi" ? "400" : "500",
    maxWidth,
    isStory ? 84 : 68,
    46,
    isStory ? 6 : 5,
    quoteLang === "hi" ? 1.45 : 1.26,
    p.ink,
  )
  const sanskrit = fitText(ctx, verse.sanskrit, DEVANAGARI, "400", maxWidth, isStory ? 42 : 36, 30, 3, 1.55, p.saffron)

  // Stack: drawing, label, divider, quote, then the Sanskrit if it fits. Centered in the region.
  const gapArt = 70
  const gapLabel = 60
  const gapQuote = 70
  const gapSanskrit = 64
  const head = artSize + gapArt + labelSize + gapLabel + gapQuote
  const withSanskrit = head + blockHeight(quote) + gapSanskrit + blockHeight(sanskrit) <= region.bottom - region.top
  const total = head + blockHeight(quote) + (withSanskrit ? gapSanskrit + blockHeight(sanskrit) : 0)
  let y = region.top + Math.max(0, (region.bottom - region.top - total) / 2)

  drawFrame(ctx, w, h, 48, p)
  drawArt(ctx, art, cx, y + artSize / 2, artSize, p)
  y += artSize + gapArt + labelSize / 2
  drawLabel(ctx, referenceLabel(verse, quoteLang), cx, y, labelSize, p.goldDeep, quoteLang)
  y += labelSize / 2 + gapLabel
  drawDivider(ctx, cx, y - gapLabel / 2 + 6, 90, p)
  y += gapQuote - gapLabel / 2
  drawBlock(ctx, quote, cx, y)
  y += blockHeight(quote)
  if (withSanskrit) {
    drawDivider(ctx, cx, y + gapSanskrit / 2, 40, p)
    drawBlock(ctx, sanskrit, cx, y + gapSanskrit)
  }

  drawBrand(ctx, logo, cx, brandY, isStory ? 30 : 24, p)
  return canvas
}

export function canvasToBlob(canvas: HTMLCanvasElement, type = "image/png", quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Couldn't encode the image"))), type, quality),
  )
}

export function shareImageFilename(verse: Verse, { format, lang, theme }: ShareImageOptions): string {
  return `bhagavad-gita-${verse.chapter}-${verse.verse}-${format}-${lang}-${theme}.png`
}
