// Source for the verse illustrations, keyed by verse id. Each entry is SVG markup on a 240x240
// grid (the shared dashed ring, r=100 around 120,122, is drawn by the VerseArt wrapper).
// Colors are Tailwind classes resolved from the theme tokens, so drawings follow dark mode:
// text-* sets the stroke (currentColor), fill-* sets fills. Symbols, never figures, each taken
// from the verse itself or from where it sits in the dialogue.
//
// House style, so the set reads as one series:
//   - Everything stays inside the safe circle (r=86 around 120,122). `build.mjs --check` flags
//     anything that strays outside it.
//   - The subject is clay with a faint tint fill (TINT). Light (sun, flame, moon) is gold with a
//     soft halo. Water and cold are teal. Ground, wind and other surroundings are line-strong.
//   - Ground and water use the ground()/water() helpers, which size themselves to the circle.
//   - Secondary detail drops to opacity .5 rather than adding a new color.
//
// After editing, regenerate the files and eyeball the contact sheet:
//   node scripts/verse-art/build.mjs
//   node scripts/verse-art/build.mjs --check
//   node scripts/verse-art/build.mjs --sheet > sheet.html      (add "dark" for the dark palette)

const f = (n) => Math.round(n * 10) / 10
const rad = (deg) => (deg * Math.PI) / 180
const TINT = 'fill-opacity=".08"'

/** Translate + scale an absolute-coordinate path (M/L/Q/C/T/Z only). */
function tp(d, x, y, s = 1) {
  return d.replace(/(-?\d+(?:\.\d+)?)[ ,](-?\d+(?:\.\d+)?)/g, (_, a, b) => `${f(x + a * s)} ${f(y + b * s)}`)
}

/** Half-width of the safe circle at height y, so horizontal lines can end inside it. */
function halfWidth(y, r = 84) {
  return Math.sqrt(Math.max(0, r * r - (y - 122) ** 2))
}

function ground(y = 178, cls = "text-line-strong") {
  const w = halfWidth(y) - 4
  const w2 = w * 0.6
  return `<g class="${cls}"><path opacity=".75" d="M${f(120 - w)} ${y} Q120 ${y - 6} ${f(120 + w)} ${y}"/><path opacity=".4" d="M${f(120 - w2)} ${y + 10} Q120 ${y + 6} ${f(120 + w2)} ${y + 10}"/></g>`
}

function water(y = 178, cls = "text-teal", lines = 2) {
  let out = ""
  for (let i = 0; i < lines; i++) {
    const yy = y + i * 11
    const w = (halfWidth(y) - 6) * (1 - i * 0.35)
    const q = w / 2
    out += `<path opacity="${f(0.75 - i * 0.25)}" d="M${f(120 - w)} ${yy} Q${f(120 - w + q)} ${yy - 5} 120 ${yy} T${f(120 + w)} ${yy}"/>`
  }
  return `<g class="${cls}">${out}</g>`
}

function halo(x, y, r) {
  return `<circle class="fill-gold text-transparent" fill-opacity=".13" cx="${x}" cy="${y}" r="${r}"/>`
}

function flame(x, y, h = 52, withHalo = false) {
  const s = h / 52
  return `${withHalo ? halo(x, f(y - h * 0.48), f(h * 0.62)) : ""}<path class="fill-gold text-saffron" fill-opacity=".25" d="${tp("M0 0 Q-13 -14 -9 -28 Q-5 -40 0 -52 Q5 -40 9 -28 Q13 -14 0 0 Z", x, y, s)}"/><path class="fill-gold text-transparent" d="${tp("M0 -5 Q-6 -13 -4 -21 Q-2 -27 0 -33 Q2 -27 4 -21 Q6 -13 0 -5 Z", x, y, s)}"/>`
}

function diya(x, y, w = 48) {
  const s = w / 48
  return `<g class="text-clay"><path class="fill-clay" ${TINT} d="${tp("M-24 0 L24 0 Q20 19 0 21 Q-20 19 -24 0 Z", x, y, s)}"/><path opacity=".5" d="${tp("M-16 7 Q0 12 16 7", x, y, s)}"/></g>`
}

function lamp(x, y, w = 48, h = 52, withHalo = true) {
  return flame(x, y - 2, h, withHalo) + diya(x, y, w)
}

function rays(x, y, r1, r2, n, from = 0, to = 360) {
  const full = to - from === 360
  let d = ""
  for (let i = 0; i < n; i++) {
    const a = rad(from + ((to - from) * (full ? i : i + 0.5)) / (full ? n : n))
    d += `M${f(x + Math.cos(a) * r1)} ${f(y + Math.sin(a) * r1)} L${f(x + Math.cos(a) * r2)} ${f(y + Math.sin(a) * r2)}`
  }
  return `<path class="text-gold" d="${d}"/>`
}

function sun(x, y, r, n = 8, len = 7) {
  return `<circle class="fill-gold text-gold" fill-opacity=".16" cx="${x}" cy="${y}" r="${r}"/>${rays(x, y, r + 5, r + 5 + len, n, -90, 270)}`
}

function risingSun(x, y, r, n = 9, len = 11) {
  return `<path class="fill-gold text-gold" fill-opacity=".16" d="M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y} Z"/>${rays(x, y, r + 6, r + 6 + len, n, 180, 360)}`
}

function moon(x, y, r) {
  return `${halo(x, y, f(r * 1.5))}<path class="fill-gold text-gold" fill-opacity=".18" d="M${x} ${y - r} A${r} ${r} 0 1 0 ${x} ${y + r} A${f(r * 0.72)} ${r} 0 1 1 ${x} ${y - r} Z"/>`
}

function sparkle(x, y, s = 4, cls = "text-gold") {
  return `<path class="${cls}" d="M${x} ${y - s} L${x} ${y + s} M${x - s} ${y} L${x + s} ${y}"/>`
}

function snowflake(x, y, r) {
  let d = ""
  for (let i = 0; i < 6; i++) {
    const a = rad(i * 60 - 90)
    d += `M${x} ${y} L${f(x + Math.cos(a) * r)} ${f(y + Math.sin(a) * r)}`
    for (const t of [0.45, 0.72]) {
      const mx = x + Math.cos(a) * r * t
      const my = y + Math.sin(a) * r * t
      const len = r * (t < 0.5 ? 0.26 : 0.18)
      for (const side of [-1, 1]) {
        const b = a + side * rad(45)
        d += `M${f(mx)} ${f(my)} L${f(mx + Math.cos(b) * len)} ${f(my + Math.sin(b) * len)}`
      }
    }
  }
  return `<path class="text-teal" d="${d}"/>`
}

function drop(x, y, s = 1) {
  return `<path class="fill-teal text-teal" fill-opacity=".14" d="${tp("M0 -9 Q-6 -1 -5 3 Q-4 7 0 7 Q4 7 5 3 Q6 -1 0 -9 Z", x, y, s)}"/>`
}

function lotus(x, y, s = 1) {
  return `<g class="text-clay">
<path class="fill-clay" ${TINT} d="${tp("M-4 3 Q-38 4 -48 -14 Q-24 -16 -4 0 Z", x, y, s)}"/>
<path class="fill-clay" ${TINT} d="${tp("M4 3 Q38 4 48 -14 Q24 -16 4 0 Z", x, y, s)}"/>
<path class="fill-clay" ${TINT} d="${tp("M-2 1 Q-24 -6 -28 -28 Q-10 -22 -2 -4 Z", x, y, s)}"/>
<path class="fill-clay" ${TINT} d="${tp("M2 1 Q24 -6 28 -28 Q10 -22 2 -4 Z", x, y, s)}"/>
<path class="fill-clay" ${TINT} d="${tp("M0 0 Q-13 -18 0 -40 Q13 -18 0 0 Z", x, y, s)}"/>
</g>`
}

function leaf(x, y, s = 1, rot = 0, cls = "text-clay", fillCls = "fill-clay") {
  return `<g class="${cls}" transform="rotate(${rot} ${x} ${y})"><path class="${fillCls}" ${TINT} d="${tp("M0 0 Q9 -10 24 -8 Q17 5 0 0 Z", x, y, s)}"/><path opacity=".5" d="${tp("M2 -1 Q12 -5 20 -7", x, y, s)}"/></g>`
}

function flower5(x, y, r = 6, cls = "text-clay") {
  const petals = [0, 72, 144, 216, 288]
    .map((a) => `<circle class="fill-clay" ${TINT} cx="${f(x + Math.cos(rad(a - 90)) * r * 1.35)}" cy="${f(y + Math.sin(rad(a - 90)) * r * 1.35)}" r="${r}"/>`)
    .join("")
  return `<g class="${cls}">${petals}</g><circle class="fill-gold text-gold" fill-opacity=".45" cx="${x}" cy="${y}" r="${f(r * 0.6)}"/>`
}

function wheel(cx, cy, r, spokes, hub = 9) {
  let d = ""
  for (let i = 0; i < spokes; i++) {
    const a = (i * 2 * Math.PI) / spokes
    d += `M${f(cx + Math.cos(a) * hub)} ${f(cy + Math.sin(a) * hub)} L${f(cx + Math.cos(a) * (r - 8))} ${f(cy + Math.sin(a) * (r - 8))}`
  }
  return `<g class="text-clay"><circle class="fill-clay" ${TINT} cx="${cx}" cy="${cy}" r="${r}"/><circle cx="${cx}" cy="${cy}" r="${r - 8}"/><path d="${d}"/></g>`
}

/** Archimedean spiral from the outside in, as a smooth polyline. */
function spiral(cx, cy, rOuter, rInner, turns, start = 180) {
  const steps = Math.round(turns * 60)
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const a = rad(start + t * turns * 360)
    const r = rOuter - (rOuter - rInner) * t
    pts.push(`${f(cx + Math.cos(a) * r)} ${f(cy + Math.sin(a) * r)}`)
  }
  return `M${pts.join(" L")}`
}

function footprint(x, y, s, rot, cls) {
  return `<g class="${cls}" transform="rotate(${rot} ${x} ${y})"><ellipse class="fill-clay" ${TINT} cx="${x}" cy="${y}" rx="${f(5 * s)}" ry="${f(9 * s)}"/><circle cx="${f(x - 3 * s)}" cy="${f(y - 12.5 * s)}" r="${f(1.6 * s)}"/><circle cx="${f(x + 1 * s)}" cy="${f(y - 13.5 * s)}" r="${f(1.6 * s)}"/><circle cx="${f(x + 4.5 * s)}" cy="${f(y - 11.5 * s)}" r="${f(1.4 * s)}"/></g>`
}

function ripples(x, y, radii, cls, fillCls) {
  return radii
    .map((r, i) => `<circle class="${cls}${i === 0 ? ` ${fillCls}` : ""}" ${i === 0 ? 'fill-opacity=".3"' : ""} opacity="${f(1 - i * 0.2)}" cx="${x}" cy="${y}" r="${r}"/>`)
    .join("")
}

/** A balance: finial (or custom top), post, foot, beam and two pans hanging at x=60 and x=180. */
function scale(left = "", right = "", top = "") {
  return `<g class="text-clay">
<path d="M120 66 L120 178 M58 84 L182 84"/>
<path class="fill-clay" ${TINT} d="M98 186 Q120 174 142 186 Z"/>
${top || `<circle class="fill-clay" fill-opacity=".2" cx="120" cy="62" r="4"/>`}
<circle cx="58" cy="84" r="2.5"/><circle cx="182" cy="84" r="2.5"/>
<path class="fill-clay" ${TINT} d="M40 138 Q60 156 80 138 Z M160 138 Q180 156 200 138 Z"/>
</g>
<path class="text-line-strong" d="M58 86 L42 138 M58 86 L78 138 M182 86 L162 138 M182 86 L198 138"/>
${left}${right}`
}

function shirt(cx, top, cls, extra = "") {
  return `<path class="${cls}" ${extra} d="${tp("M-8 3 Q0 12 8 3 L20 6 L28 24 L18 28 L18 70 L-18 70 L-18 28 L-28 24 L-20 6 Z", cx, top)}"/>`
}

function cloud(x, y, s = 1, cls = "text-line-strong", fill = true) {
  return `<path class="${cls}${fill ? " fill-paper" : ""}" d="${tp("M-22 8 Q-24 -4 -12 -4 Q-8 -14 4 -12 Q12 -18 20 -8 Q30 -6 26 8 Z", x, y, s)}"/>`
}

function bird(x, y, s = 1, cls = "text-line-strong") {
  return `<path class="${cls}" d="${tp("M-14 -2 Q-8 -10 0 0 Q8 -10 14 -2", x, y, s)}"/>`
}

const ring12 = Array.from({ length: 12 }, (_, k) => [120 + Math.cos((k * Math.PI) / 6) * 62, 122 + Math.sin((k * Math.PI) / 6) * 62])

// Necklace thread: quadratic from (52,92) via (120,206) to (188,92), clasped at the top.
const pearlPts = [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9].map((t) => [
  52 * (1 - t) ** 2 + 240 * t * (1 - t) + 188 * t * t,
  92 * (1 - t) ** 2 + 412 * t * (1 - t) + 92 * t * t,
])

export const art = {
  "10-20": {
    label: "A lamp burning at the center of a lotus",
    svg: `${halo(120, 118, 34)}
${rays(120, 118, 42, 52, 7, 180, 360)}
${flame(120, 146)}
<g class="text-clay">
<path class="fill-clay" ${TINT} d="M96 148 L144 148 Q140 167 120 169 Q100 167 96 148 Z"/>
<path d="M104 155 Q120 160 136 155" opacity=".5"/>
<path class="fill-clay" ${TINT} d="M103 167 Q84 163 79 137 Q94 141 97 151 Z"/>
<path class="fill-clay" ${TINT} d="M137 167 Q156 163 161 137 Q146 141 143 151 Z"/>
<path class="fill-clay" ${TINT} d="M116 182 Q74 184 58 158 Q92 156 116 178 Z"/>
<path class="fill-clay" ${TINT} d="M124 182 Q166 184 182 158 Q148 156 124 178 Z"/>
</g>
${water(190)}`,
  },

  "2-47": {
    label: "A seed being sown, with the tree it may become drawn only in outline",
    svg: `<g class="text-gold" stroke-dasharray="2 5"><path d="M120 140 L120 106"/><circle cx="120" cy="80" r="30"/></g>
<g class="text-gold" stroke-dasharray="1.5 3.5"><circle cx="105" cy="76" r="5"/><circle cx="133" cy="70" r="5"/><circle cx="127" cy="94" r="5"/></g>
<path class="fill-line-strong text-line-strong" fill-opacity=".1" d="M78 174 Q120 150 162 174 Z"/>
${ground(176)}
<ellipse class="fill-clay text-clay" fill-opacity=".25" cx="120" cy="168" rx="7" ry="4.5"/>
<g class="text-clay"><path d="M120 164 Q118 153 121 144"/><path class="fill-clay" ${TINT} d="M121 150 Q131 142 138 146 Q130 154 121 150 Z"/><path class="fill-clay" ${TINT} d="M120 155 Q109 149 104 153 Q112 160 120 155 Z"/></g>
${drop(92, 132, 0.75)}${drop(100, 150, 0.6)}`,
  },

  "2-22": {
    label: "Worn clothes set aside on a line, with fresh ones hung beside them",
    svg: `<g class="text-line-strong"><path d="M58 178 L58 74 M182 178 L182 74"/><path d="M58 80 Q120 96 182 80"/><circle cx="58" cy="72" r="2.5"/><circle cx="182" cy="72" r="2.5"/></g>
${shirt(90, 87, "text-line-strong", 'stroke-dasharray="3 4" opacity=".75"')}
<path class="text-line-strong" opacity=".55" d="M80 128 L86 133 M98 118 L102 125 M84 144 L90 140"/>
${shirt(150, 87, "text-clay fill-clay", TINT)}
<path class="text-gold" d="M144 92 Q150 100 156 92 M150 106 L150 107 M150 118 L150 119 M150 130 L150 131"/>
<g class="text-line-strong"><path d="M86 89 L86 84 M94 89 L94 84 M146 89 L146 84 M154 89 L154 84"/></g>
${ground(180)}`,
  },

  "18-66": {
    label: "A broad leaf sheltering a small lamp from the rain",
    svg: `<g class="text-teal" opacity=".6"><path d="M88 52 L84 62 M110 46 L106 56 M134 46 L130 56 M156 52 L152 62 M76 70 L72 80 M168 70 L164 80 M58 128 L54 138 M64 150 L60 160 M184 128 L180 138 M178 150 L174 160"/></g>
<g class="text-clay"><path class="fill-clay" fill-opacity=".1" d="M56 116 Q120 56 184 116 Q120 98 56 116 Z"/><path opacity=".45" d="M120 78 L120 104 M92 92 L98 108 M148 92 L142 108 M72 106 L80 112 M168 106 L160 112"/><path d="M120 104 Q132 140 150 178"/></g>
${lamp(102, 170, 36, 40)}
${ground(180)}`,
  },

  "2-3": {
    label: "A bow raised upright against a rising sun",
    svg: `${risingSun(104, 166, 42, 9, 11)}
${ground(166)}
<g class="text-clay"><path d="M158 50 Q124 74 136 100 M136 122 Q124 146 158 166"/><path class="fill-clay" fill-opacity=".3" d="M131 99 L141 99 L141 123 L131 123 Z"/><path d="M158 50 L162 45"/></g>
<path class="text-clay" opacity=".55" d="M158 50 L158 166"/>`,
  },

  "2-14": {
    label: "Sun and snow, heat and cold, each passing into the other",
    svg: `${sun(82, 120, 17, 8, 7)}
${snowflake(158, 120, 22)}
<g class="text-line-strong" stroke-dasharray="2 5"><path d="M98 86 Q120 66 142 86"/><path d="M142 156 Q120 176 98 156"/></g>
<g class="text-line-strong"><path d="M136 80 L142 86 L134 89"/><path d="M104 162 L98 156 L106 153"/></g>`,
  },

  "6-30": {
    label: "Points of light around a circle, each joined to the same center",
    svg: `${halo(120, 122, 20)}
<path class="text-gold" opacity=".55" d="${ring12.map(([x, y]) => `M120 122 L${f(x)} ${f(y)}`).join("")}"/>
<path class="text-clay" opacity=".35" d="M${ring12.map(([x, y]) => `${f(x)} ${f(y)}`).join(" L")} Z"/>
${ring12.map(([x, y]) => `<circle class="fill-clay text-clay" fill-opacity=".18" cx="${f(x)}" cy="${f(y)}" r="5"/>`).join("")}
<circle class="fill-gold text-gold" fill-opacity=".5" cx="120" cy="122" r="7"/>`,
  },

  "2-20": {
    label: "An unbroken circle around a small, steady flame",
    svg: `<circle class="text-line-strong" opacity=".5" cx="120" cy="122" r="78"/>
<circle class="fill-clay text-clay" fill-opacity=".05" cx="120" cy="122" r="64"/>
<circle class="text-gold" stroke-dasharray="1 7" cx="120" cy="122" r="50"/>
${flame(120, 142, 40, true)}`,
  },

  "2-38": {
    label: "A scale held level, with a sun on one side and a cloud on the other",
    svg: scale(sun(60, 122, 7, 6, 4), cloud(180, 128, 0.62, "text-line-strong")),
  },

  "2-48": {
    label: "An even scale with a lotus at its center",
    svg: scale("", "", lotus(120, 66, 0.5)),
  },

  "4-7": {
    label: "The moon setting as the sun rises again",
    svg: `${moon(76, 82, 13)}
${sparkle(106, 66, 3)}${sparkle(166, 78, 3)}${sparkle(96, 100, 2.5)}
${risingSun(130, 164, 38, 9, 11)}
<path class="text-line-strong" d="M${f(120 - halfWidth(164) + 6)} 164 L${f(120 + halfWidth(164) - 6)} 164"/>
${water(178)}`,
  },

  "4-8": {
    label: "The sun rising, high and setting, again and again across the sky",
    svg: `<path class="text-line-strong" stroke-dasharray="2 6" d="M52 166 Q120 26 188 166"/>
${sun(72, 130, 8, 8, 4)}${sun(120, 96, 13, 10, 6)}${sun(168, 130, 8, 8, 4)}
<path class="text-line-strong" d="M${f(120 - halfWidth(166) + 4)} 166 L${f(120 + halfWidth(166) - 4)} 166"/>
${water(178)}`,
  },

  "2-13": {
    label: "A sapling, a young tree and an old tree standing in a row",
    svg: `${ground(180)}
<g class="text-clay"><path d="M68 180 L68 152"/></g>${leaf(68, 158, 0.75, -35)}${leaf(68, 164, 0.75, 215)}
<g class="text-clay"><path d="M118 180 L118 132"/><circle class="fill-clay" ${TINT} cx="118" cy="106" r="26"/><path opacity=".45" d="M118 132 L108 118 M118 124 L128 112"/></g>
<g class="text-clay"><path d="M168 180 Q170 150 164 126 M176 180 Q174 150 180 124 M166 140 Q152 128 148 112 M178 136 Q192 126 192 110 M168 126 Q166 108 170 94 M178 124 Q182 106 178 92"/></g>
${leaf(148, 112, 0.55, -65, "text-gold", "fill-gold")}${leaf(192, 110, 0.55, -25, "text-gold", "fill-gold")}${leaf(170, 94, 0.55, -80, "text-gold", "fill-gold")}${leaf(186, 152, 0.5, 30, "text-gold", "fill-gold")}`,
  },

  "9-22": {
    label: "A water pot being filled drop by drop",
    svg: `${drop(120, 60)}${drop(120, 82, 0.8)}
<g class="text-clay"><path class="fill-clay" ${TINT} d="M92 122 Q72 152 96 180 L144 180 Q168 152 148 122 Q140 114 146 106 L94 106 Q100 114 92 122 Z"/><path d="M88 106 L152 106"/><path opacity=".45" d="M90 124 Q120 130 150 124"/></g>
<path class="text-teal" opacity=".6" d="M82 148 Q120 156 158 148"/>
${leaf(100, 106, 0.6, -110, "text-gold", "fill-gold")}${leaf(140, 106, 0.6, -70, "text-gold", "fill-gold")}
${ground(184)}`,
  },

  "2-40": {
    label: "A single small sprout, already rooted",
    svg: `${ground(146)}
<g class="text-clay"><path d="M120 146 Q117 120 122 96"/><path class="fill-clay" ${TINT} d="M122 112 Q140 96 156 104 Q142 120 122 112 Z"/><path opacity=".5" d="M124 111 Q138 104 152 104"/><path class="fill-clay" ${TINT} d="M120 124 Q100 112 86 120 Q100 134 120 124 Z"/><path opacity=".5" d="M118 123 Q102 118 90 120"/></g>
<g class="text-gold" opacity=".85"><path d="M120 148 Q110 164 100 178 M120 148 Q130 166 142 180 M120 150 L120 192 M106 168 Q98 170 92 166 M134 170 Q142 174 148 170 M120 172 Q114 180 110 186"/></g>`,
  },

  "4-18": {
    label: "A turning wheel around a perfectly still center",
    svg: `${wheel(120, 122, 56, 8)}
${halo(120, 122, 18)}
<circle class="fill-gold text-gold" fill-opacity=".5" cx="120" cy="122" r="9"/>
<g class="text-line-strong" opacity=".7"><path d="M120 52 A70 70 0 0 1 186 100 M183 90 L186 100 L176 98"/><path d="M120 192 A70 70 0 0 1 54 144 M57 154 L54 144 L64 146"/></g>`,
  },

  "6-5": {
    label: "A lotus rising from the mud to bloom above the water",
    svg: `<path class="fill-line-strong text-transparent" fill-opacity=".1" d="M74 186 Q98 178 120 184 Q144 190 166 184 L160 194 Q120 202 80 194 Z"/>
<path class="text-line-strong" d="M74 186 Q98 178 120 184 Q144 190 166 184"/>
<g class="fill-line-strong text-transparent" opacity=".6"><circle cx="96" cy="191" r="1.2"/><circle cx="132" cy="192" r="1.2"/><circle cx="150" cy="189" r="1.2"/></g>
<path class="text-clay" d="M120 184 Q106 156 122 128 Q126 118 120 112"/>
${water(128)}
<path class="fill-clay text-clay" fill-opacity=".1" d="M140 130 Q160 122 182 130 Q160 138 140 130 Z"/>
${lotus(120, 112, 0.85)}`,
  },

  "6-6": {
    label: "The same rope, tangled on one side and neatly coiled on the other",
    svg: `<g class="text-line-strong"><ellipse cx="74" cy="118" rx="18" ry="9" transform="rotate(30 74 118)"/><ellipse cx="82" cy="128" rx="12" ry="18" transform="rotate(-20 82 128)"/><ellipse cx="70" cy="132" rx="19" ry="7" transform="rotate(70 70 132)"/><path d="M90 130 Q104 140 116 128"/></g>
<path class="text-clay" d="M116 128 Q124 122 132 124 ${spiral(160, 124, 28, 3, 3.2, 180).replace(/^M/, "L")}"/>
<circle class="fill-clay text-transparent" fill-opacity=".08" cx="160" cy="124" r="28"/>`,
  },

  "6-16": {
    label: "A bowl of food and a crescent moon held in balance",
    svg: scale(
      `<g class="text-clay"><path class="fill-clay" fill-opacity=".15" d="M48 128 Q60 140 72 128 Z"/></g><path class="text-line-strong" opacity=".7" d="M55 122 Q52 116 56 110 M64 122 Q61 116 65 110"/>`,
      moon(178, 124, 9),
    ),
  },

  "6-17": {
    label: "A circle divided evenly between day and night",
    svg: `<path class="fill-gold text-transparent" fill-opacity=".08" d="M120 64 A58 58 0 0 0 120 180 Z"/>
<path class="fill-teal text-transparent" fill-opacity=".07" d="M120 64 A58 58 0 0 1 120 180 Z"/>
<circle class="text-clay" cx="120" cy="122" r="58"/>
<path class="text-clay" d="M120 64 L120 180"/>
${sun(92, 122, 11, 8, 5)}
${moon(146, 120, 12)}
${sparkle(162, 98, 2.5)}${sparkle(158, 148, 2.5)}
<g class="text-line-strong" opacity=".6"><path d="M120 52 L120 44 M120 192 L120 200 M50 122 L42 122 M190 122 L198 122"/></g>`,
  },

  "6-19": {
    label: "A lamp burning straight in a sheltered niche while the wind curls outside",
    svg: `<path class="fill-clay text-clay" fill-opacity=".06" d="M80 180 L80 112 Q80 68 120 64 Q160 68 160 112 L160 180 Z"/>
<path class="text-clay" opacity=".4" d="M90 180 L90 114 Q90 78 120 74 Q150 78 150 114 L150 180"/>
${lamp(120, 160, 40, 60)}
<g class="text-line-strong" opacity=".8"><path d="M44 98 Q56 88 66 96 Q70 104 62 107"/><path d="M42 138 Q56 130 68 140"/><path d="M196 98 Q184 88 174 96 Q170 104 178 107"/><path d="M198 138 Q184 130 172 140"/></g>
${ground(182)}`,
  },

  "6-35": {
    label: "Restless wind settling into level, still water",
    svg: `<g class="text-line-strong"><path d="M62 82 Q78 66 94 80 Q102 92 90 96 Q80 94 84 86"/><path d="M118 70 Q138 58 154 74 Q160 86 148 88 Q140 84 144 78"/><path d="M50 112 Q70 100 90 112 Q110 124 132 114 Q154 104 176 116"/></g>
<path class="text-teal" d="M58 140 Q88 130 120 140 Q150 150 182 140"/>
<g class="text-teal"><path d="M${f(120 - halfWidth(162) + 6)} 162 L${f(120 + halfWidth(162) - 6)} 162"/><path opacity=".7" d="M${f(120 - halfWidth(176) + 14)} 176 L${f(120 + halfWidth(176) - 14)} 176"/><path opacity=".45" d="M${f(120 - halfWidth(190) + 14)} 190 L${f(120 + halfWidth(190) - 14)} 190"/></g>`,
  },

  "7-7": {
    label: "Pearls strung on a single thread",
    svg: `<path class="text-gold" d="M52 92 Q120 206 188 92 Q178 64 120 64 Q62 64 52 92"/>
<circle class="fill-gold text-gold" fill-opacity=".4" cx="120" cy="64" r="4"/>
${pearlPts.map(([x, y]) => `<circle class="fill-paper text-clay" cx="${f(x)}" cy="${f(y)}" r="7"/><circle class="fill-clay text-transparent" fill-opacity=".08" cx="${f(x)}" cy="${f(y)}" r="7"/><path class="text-clay" opacity=".45" d="M${f(x - 3.5)} ${f(y - 2)} Q${f(x - 1.5)} ${f(y - 4.5)} ${f(x + 1)} ${f(y - 4.5)}"/>`).join("")}
<path class="fill-gold text-gold" fill-opacity=".2" d="M120 150 Q110 164 112 172 Q114 180 120 180 Q126 180 128 172 Q130 164 120 150 Z"/>`,
  },

  "8-7": {
    label: "A chariot wheel with a steady flame at its hub",
    svg: `${wheel(120, 116, 60, 12, 16)}
<circle class="fill-paper text-clay" cx="120" cy="116" r="16"/>
${halo(120, 112, 14)}
${flame(120, 126, 26)}
${ground(178)}`,
  },

  "9-26": {
    label: "A leaf, a flower, a fruit and a little water, laid out on a leaf",
    svg: `<g class="text-clay"><path class="fill-clay" fill-opacity=".07" d="M48 156 Q84 126 140 132 Q178 136 192 152 Q160 178 104 176 Q66 174 48 156 Z"/><path opacity=".45" d="M50 160 Q110 150 192 154 M84 156 L96 144 M112 154 L126 140 M140 154 L154 142 M98 158 L110 170 M128 156 L140 168"/></g>
<g class="text-gold"><circle class="fill-gold" fill-opacity=".16" cx="86" cy="138" r="14"/><path d="M86 124 Q88 116 94 112"/></g>${leaf(90, 118, 0.55, -20, "text-gold", "fill-gold")}
${flower5(122, 128, 6)}
<g class="text-teal"><path class="fill-teal" fill-opacity=".1" d="M144 132 L172 132 Q170 152 158 154 Q146 152 144 132 Z"/><path d="M140 132 L176 132"/></g>
${drop(158, 114, 0.75)}
`,
  },

  "9-27": {
    label: "An offering plate with a lamp, a flower and grains of rice",
    svg: `<g class="text-clay"><ellipse class="fill-clay" ${TINT} cx="120" cy="152" rx="70" ry="20"/><ellipse opacity=".5" cx="120" cy="150" rx="56" ry="13"/></g>
${lamp(98, 146, 30, 34)}
${flower5(146, 142, 4.5)}
<g class="text-gold"><path d="M118 156 L120 155 M126 158 L128 157 M110 160 L112 159 M134 154 L136 153 M162 152 L164 151 M140 160 L142 159 M86 158 L88 157"/></g>
<g class="text-line-strong" opacity=".65"><path d="M166 146 L166 120"/><path d="M166 120 Q160 108 168 98 Q176 88 168 76"/></g>
<circle class="fill-saffron text-saffron" cx="166" cy="120" r="1.5"/>`,
  },

  "9-29": {
    label: "The sun shining on every plant alike, and one turned toward it in bloom",
    svg: `${sun(120, 62, 13, 10, 6)}
<g class="text-gold" opacity=".35" stroke-dasharray="2 6"><path d="M110 82 L68 146 M115 84 L94 146 M120 86 L120 146 M125 84 L146 146 M130 82 L172 146"/></g>
${ground(180)}
<g class="text-clay"><path d="M68 180 L68 154"/><path d="M94 180 L94 152"/><path d="M120 180 L120 154"/><path d="M172 180 L172 154"/><path d="M146 180 Q146 158 140 146"/></g>
${leaf(68, 162, 0.6, -40)}${leaf(94, 160, 0.6, 210)}${leaf(120, 162, 0.6, -40)}${leaf(172, 162, 0.6, 210)}${leaf(146, 166, 0.6, -30)}
${lotus(140, 146, 0.42)}`,
  },

  "12-13": {
    label: "A tree spreading its shade, with birds resting in its branches",
    svg: `<ellipse class="fill-line-strong text-line-strong" fill-opacity=".1" opacity=".6" cx="120" cy="184" rx="50" ry="6"/>
<g class="text-clay"><path d="M114 184 Q116 156 110 136 M126 184 Q124 156 132 134 M116 150 Q100 140 92 128 M124 146 Q140 138 150 126"/>
<path class="fill-clay" ${TINT} d="M60 122 Q50 96 76 88 Q80 62 108 66 Q122 48 142 64 Q170 62 172 88 Q194 96 182 122 Q168 138 140 130 Q120 142 100 130 Q72 138 60 122 Z"/></g>
${bird(94, 96, 0.5)}${bird(146, 86, 0.5)}${bird(128, 108, 0.45)}`,
  },

  "12-15": {
    label: "A swan gliding on still water",
    svg: `<g class="text-clay"><path class="fill-clay" ${TINT} d="M66 142 Q84 168 146 162 Q174 156 172 136 Q150 148 114 142 Q88 138 66 142 Z"/>
<path d="M160 144 Q138 110 154 94 Q164 86 170 96"/><path class="fill-saffron" fill-opacity=".4" d="M170 96 L182 101 L169 102 Z"/><path opacity=".5" d="M92 148 Q118 136 152 142"/></g>
<circle class="fill-clay text-clay" cx="162" cy="95" r="1"/>
${water(172, "text-teal", 2)}
<path class="text-clay" opacity=".18" stroke-dasharray="2 5" d="M74 180 Q100 194 150 190"/>`,
  },

  "14-26": {
    label: "A lotus rising above three intertwined strands",
    svg: `<path class="text-gold" d="M56 176 Q72 162 88 176 T120 176 T152 176 T184 176"/>
<path class="text-clay" d="M56 176 Q72 190 88 176 T120 176 T152 176 T184 176"/>
<path class="text-line-strong" d="M56 168 Q72 182 88 168 T120 168 T152 168 T184 168"/>
<path class="text-clay" d="M120 172 Q114 142 120 116"/>
${lotus(120, 112, 0.95)}
${sun(120, 54, 6, 8, 4)}`,
  },

  "15-7": {
    label: "A breeze carrying fragrance away from a flower",
    svg: `<g class="text-clay"><path d="M74 186 Q70 160 76 138"/></g>${leaf(73, 170, 0.85, -25)}
${lotus(76, 138, 0.55)}
<g class="text-line-strong"><path d="M96 114 Q128 94 154 110 Q174 122 190 108"/><path d="M100 134 Q132 126 158 140 Q174 148 188 140"/><path d="M94 94 Q118 72 148 80"/></g>
<g class="fill-gold text-transparent" fill-opacity=".8"><circle cx="120" cy="100" r="1.8"/><circle cx="140" cy="130" r="1.8"/><circle cx="164" cy="114" r="1.8"/><circle cx="174" cy="146" r="1.8"/><circle cx="132" cy="80" r="1.8"/><circle cx="184" cy="112" r="1.8"/><circle cx="108" cy="124" r="1.5"/></g>`,
  },

  "16-21": {
    label: "Three gateways, and a path turning away from them",
    svg: `<g class="text-line-strong" transform="translate(0 14)">${[72, 120, 168]
      .map((x) => `<path class="fill-line-strong" fill-opacity=".1" d="M${x - 15} 126 L${x - 15} 84 Q${x} 62 ${x + 15} 84 L${x + 15} 126 Z"/><path opacity=".45" d="M${x - 8} 126 L${x - 8} 90 Q${x} 78 ${x + 8} 90 L${x + 8} 126"/>`)
      .join("")}<path d="M50 126 L190 126"/></g>
<path class="text-clay" stroke-dasharray="4 5" d="M116 196 Q112 172 122 160 Q132 150 150 152 Q168 154 178 168"/>
<path class="text-clay" d="M168 166 L178 168 L178 158"/>`,
  },

  "18-63": {
    label: "An open gate with a path leading through it toward the sun",
    svg: `${risingSun(120, 128, 16, 7, 7)}
<path class="text-line-strong" d="M${f(120 - halfWidth(128) + 8)} 128 L${f(120 + halfWidth(128) - 8)} 128"/>
<g class="text-clay"><path d="M86 182 L86 84 M154 182 L154 84"/><path d="M76 80 L164 80 M80 86 Q120 66 160 86"/><circle class="fill-clay" fill-opacity=".2" cx="76" cy="80" r="3"/><circle class="fill-clay" fill-opacity=".2" cx="164" cy="80" r="3"/>
<path class="fill-clay" ${TINT} d="M154 98 L178 108 L178 168 L154 176 Z"/><path opacity=".5" d="M154 120 L178 126 M154 146 L178 148"/></g>
<path class="text-gold" d="M106 184 L118 128 M134 184 L122 128"/>
${ground(186)}`,
  },

  "18-65": {
    label: "A lotus bud bowing gently on its stem",
    svg: `<path class="text-clay" d="M96 178 Q90 124 124 98 Q146 84 156 104"/>
<g class="text-clay"><path class="fill-clay" fill-opacity=".12" d="M156 104 Q140 116 148 136 Q153 144 156 150 Q160 144 164 136 Q172 116 156 104 Z"/><path opacity=".5" d="M156 110 Q150 126 156 146"/><path d="M150 106 Q146 102 142 106 M162 106 Q166 102 170 106"/></g>
${leaf(100, 140, 1.1, 200)}
<path class="fill-clay text-clay" fill-opacity=".1" d="M60 178 Q80 168 104 178 Q80 186 60 178 Z"/>
${water(186)}`,
  },

  "18-78": {
    label: "A conch and a bow together",
    svg: `<g class="text-clay"><path d="M80 56 Q50 90 64 116 M64 134 Q50 160 80 190"/><path class="fill-clay" fill-opacity=".25" d="M59 114 L69 114 L69 136 L59 136 Z"/><path d="M80 56 L84 51 M80 190 L84 195"/></g>
<path class="text-line-strong" d="M80 56 L80 190"/>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M140 62 Q150 64 150 74 Q164 76 162 88 Q180 94 174 112 Q172 150 148 184 L144 196 L140 184 Q112 150 110 116 Q110 92 124 86 Q122 74 132 70 Q130 62 140 62 Z"/>
<path opacity=".55" d="M124 86 Q144 94 162 88 M132 70 Q142 76 150 74"/><path d="M172 112 Q190 136 172 162 Q164 174 152 180"/><path opacity=".5" d="M168 114 Q156 148 146 182"/><path opacity=".4" d="M114 124 Q136 128 166 122 M118 148 Q138 152 160 146"/></g>`,
  },

  "2-11": {
    label: "Leaves falling from a tree that keeps standing",
    svg: `<g class="text-clay"><path d="M114 180 Q118 150 110 124 M126 180 Q124 150 132 122 M112 136 Q92 122 82 100 M130 132 Q150 118 158 96 M114 124 Q108 102 114 80 M128 122 Q134 100 128 76 M96 116 Q86 116 76 108 M146 112 Q156 112 166 106"/></g>
${leaf(82, 100, 0.6, -70)}${leaf(114, 80, 0.6, -80)}${leaf(128, 76, 0.6, -60)}${leaf(158, 96, 0.6, -40)}${leaf(76, 108, 0.55, 190)}${leaf(166, 106, 0.55, -10)}
${leaf(72, 138, 0.55, 20, "text-gold", "fill-gold")}${leaf(164, 132, 0.55, 140, "text-gold", "fill-gold")}${leaf(150, 162, 0.55, 60, "text-gold", "fill-gold")}${leaf(82, 166, 0.55, 170, "text-gold", "fill-gold")}
<g class="text-gold" opacity=".4" stroke-dasharray="1.5 4"><path d="M78 124 Q70 130 72 136 M168 118 Q172 126 166 132"/></g>
${ground(182)}`,
  },

  "2-15": {
    label: "A stone standing steady as the stream flows around it",
    svg: `<path class="fill-line-strong text-line-strong" fill-opacity=".14" d="M84 146 Q80 124 100 112 Q124 100 146 110 Q164 120 158 142 Q154 156 120 158 Q92 158 84 146 Z"/>
<path class="text-line-strong" opacity=".5" d="M100 122 Q110 114 124 112"/>
<g class="text-teal"><path d="M${f(120 - halfWidth(96) + 8)} 96 Q90 92 104 98 Q120 90 136 98 Q150 92 ${f(120 + halfWidth(96) - 8)} 96"/>
<path d="M44 126 Q62 120 76 128 Q80 124 84 130"/><path d="M162 132 Q166 124 176 128 Q186 124 196 128"/>
<path d="M${f(120 - halfWidth(170) + 8)} 170 Q90 160 104 166 Q120 172 136 166 Q152 160 ${f(120 + halfWidth(170) - 8)} 170"/>
<path opacity=".5" d="M${f(120 - halfWidth(186) + 12)} 186 Q120 180 ${f(120 + halfWidth(186) - 12)} 186"/></g>
<g class="text-teal" opacity=".6"><path d="M74 140 Q78 136 80 140 M160 118 Q164 114 166 118"/></g>`,
  },

  "2-37": {
    label: "A banner raised high in the morning wind",
    svg: `${risingSun(88, 172, 26, 7, 8)}
<path class="text-line-strong" d="M${f(120 - halfWidth(172) + 4)} 172 L${f(120 + halfWidth(172) - 4)} 172"/>
<path class="text-clay" d="M132 172 L132 52"/>
<circle class="fill-clay text-clay" fill-opacity=".25" cx="132" cy="48" r="4"/>
<path class="fill-clay text-clay" ${TINT} d="M132 58 Q150 50 164 62 Q176 72 186 68 Q180 86 166 88 Q150 90 132 102 Z"/>
<path class="text-gold" opacity=".8" d="M140 76 Q156 70 172 76"/>
<g class="text-line-strong" opacity=".6"><path d="M150 112 Q166 106 182 112 M160 124 Q172 120 184 124"/></g>`,
  },

  "2-50": {
    label: "An arrow resting at the center of its target",
    svg: `<g class="text-clay"><circle class="fill-clay" ${TINT} cx="130" cy="130" r="52"/><circle cx="130" cy="130" r="35"/><circle cx="130" cy="130" r="18"/></g>
${halo(130, 130, 12)}
<circle class="fill-gold text-gold" fill-opacity=".55" cx="130" cy="130" r="5"/>
<path class="text-line-strong" d="M66 66 L126 126"/>
<g class="text-gold"><path class="fill-gold" fill-opacity=".2" d="M66 66 L56 64 L62 74 Z M72 72 L62 70 L68 80 Z"/><path class="fill-gold" fill-opacity=".2" d="M66 66 L64 56 L74 62 Z M72 72 L70 62 L80 68 Z"/></g>`,
  },

  "2-56": {
    label: "A mountain standing still as clouds pass by",
    svg: `${sun(160, 70, 11, 8, 5)}
<g class="text-clay"><path class="fill-clay" ${TINT} d="M58 178 L96 104 L114 130 L138 84 L182 178 Z"/><path opacity=".55" d="M138 84 L130 102 L140 98 L146 110 M96 104 L90 118 L100 114"/></g>
${cloud(78, 116, 0.7)}${cloud(164, 132, 0.8)}
${ground(180)}`,
  },

  "2-66": {
    label: "Scattered sparks gathering into a single flame",
    svg: `<g class="text-gold" stroke-dasharray="1.5 5" opacity=".55"><path d="M66 70 Q86 96 104 112 M176 72 Q156 96 136 112 M50 132 Q80 128 100 130 M190 136 Q160 130 140 130 M120 46 L120 80"/></g>
${sparkle(64, 66, 4, "text-saffron")}${sparkle(178, 68, 4, "text-saffron")}${sparkle(46, 134, 3.5, "text-saffron")}${sparkle(194, 138, 3.5, "text-saffron")}${sparkle(120, 42, 3.5, "text-saffron")}${sparkle(80, 186, 3, "text-saffron")}${sparkle(162, 188, 3, "text-saffron")}
${lamp(120, 166, 40, 64)}`,
  },

  "3-8": {
    label: "A waterwheel turning in a stream",
    svg: `<g class="text-clay"><circle class="fill-clay" ${TINT} cx="120" cy="104" r="46"/><circle cx="120" cy="104" r="38"/><circle cx="120" cy="104" r="8"/>
<path d="${Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4
      return `M${f(120 + Math.cos(a) * 8)} ${f(104 + Math.sin(a) * 8)} L${f(120 + Math.cos(a) * 38)} ${f(104 + Math.sin(a) * 38)}`
    }).join("")}"/>
${Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180
      const x = 120 + Math.cos(a) * 50
      const y = 104 + Math.sin(a) * 50
      return `<rect class="fill-clay" fill-opacity=".2" x="${f(x - 6)}" y="${f(y - 3)}" width="12" height="6" transform="rotate(${i * 30 + 90} ${f(x)} ${f(y)})"/>`
    }).join("")}</g>
<path class="text-line-strong" d="M120 104 L96 176 M120 104 L144 176"/>
${drop(70, 140, 0.55)}${drop(76, 156, 0.45)}
${water(168, "text-teal", 2)}`,
  },

  "3-25": {
    label: "A lamp lighting everything around it",
    svg: `${rays(120, 140, 40, 60, 9, 180, 360)}
${Array.from({ length: 7 }, (_, i) => {
      const a = Math.PI + ((i + 1) * Math.PI) / 8
      return flower5(f(120 + Math.cos(a) * 76), f(140 + Math.sin(a) * 76), 3.2)
    }).join("")}
${lamp(120, 160, 44, 52)}
${ground(184)}`,
  },

  "3-37": {
    label: "A mirror clouded with dust, with one stroke wiped clean",
    svg: `<g class="text-clay"><circle class="fill-teal" fill-opacity=".05" cx="120" cy="96" r="48"/><circle opacity=".5" cx="120" cy="96" r="40"/><path class="fill-clay" ${TINT} d="M113 144 L113 182 Q120 190 127 182 L127 144 Z"/><path d="M102 192 L138 192"/><circle class="fill-clay" fill-opacity=".2" cx="120" cy="45" r="3"/></g>
<g class="fill-line-strong text-transparent" opacity=".55">${[
      [98, 72], [112, 66], [134, 76], [88, 94], [146, 92], [104, 116], [138, 118], [124, 126], [92, 110], [150, 108], [116, 80], [132, 62], [108, 128], [142, 82],
    ].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6"/>`).join("")}</g>
<path class="text-gold" stroke-width="7" opacity=".2" d="M90 106 Q120 88 150 86"/>
<path class="text-gold" d="M100 104 Q120 94 140 92"/>`,
  },

  "4-20": {
    label: "A full moon reflected in still water",
    svg: `${halo(120, 82, 36)}
<circle class="fill-gold text-gold" fill-opacity=".18" cx="120" cy="82" r="24"/>
${sparkle(72, 74, 2.5)}${sparkle(168, 66, 2.5)}${sparkle(160, 98, 2)}
<path class="text-line-strong" d="M${f(120 - halfWidth(132) + 6)} 132 L${f(120 + halfWidth(132) - 6)} 132"/>
<g class="text-gold" opacity=".65"><path d="M100 148 L140 148 M96 162 L144 162 M104 176 L136 176 M112 188 L128 188"/></g>
<g class="text-teal" opacity=".5"><path d="M46 148 L80 148 M160 148 L194 148 M60 168 L86 168 M154 168 L180 168"/></g>`,
  },

  "4-42": {
    label: "A sword cutting cleanly through a knot",
    svg: `<g class="text-line-strong"><path d="M50 150 Q72 140 92 146 C96 120 128 122 124 140 C120 156 96 152 100 138 C104 128 114 130 118 134"/><path d="M136 132 Q162 126 190 132"/><path opacity=".6" d="M136 132 L132 127 M136 132 L131 133 M136 132 L133 137"/></g>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M168 60 L163 76 L118 154 L110 148 L154 70 Z"/><path opacity=".5" d="M161 70 L116 148"/><path d="M98 142 L128 162"/><path d="M110 154 L98 174"/><circle class="fill-clay" fill-opacity=".25" cx="96" cy="177" r="3.5"/></g>
<g class="text-gold"><path d="M172 62 L178 60 M166 56 L168 51"/></g>`,
  },

  "5-10": {
    label: "Water drops beading on a lotus leaf",
    svg: `<g class="text-clay"><path class="fill-clay" fill-opacity=".07" d="M120 120 L114 94 Q56 96 52 126 Q58 156 120 158 Q182 156 188 126 Q184 96 126 94 Z"/>
<path opacity=".4" d="M120 120 L62 118 M120 120 L76 146 M120 120 L120 156 M120 120 L164 146 M120 120 L178 116"/></g>
${drop(96, 130, 0.85)}${drop(146, 124, 0.95)}${drop(122, 142, 0.6)}${drop(186, 146, 0.7)}
<path class="text-teal" opacity=".5" stroke-dasharray="1.5 3" d="M180 134 Q184 138 186 140"/>
<path class="text-clay" d="M120 158 Q118 174 122 188"/>
${water(186)}`,
  },

  "5-22": {
    label: "An hourglass with petals falling through it",
    svg: `<g class="text-clay"><path class="fill-clay" fill-opacity=".25" d="M84 52 L156 52 L156 58 L84 58 Z M84 186 L156 186 L156 192 L84 192 Z"/><path d="M80 58 L80 186 M160 58 L160 186" opacity=".5"/>
<path class="fill-clay" fill-opacity=".05" d="M92 58 Q92 102 116 122 Q92 142 92 186 L148 186 Q148 142 124 122 Q148 102 148 58 Z"/></g>
${leaf(108, 82, 0.5, -20)}${leaf(124, 92, 0.5, 200)}${leaf(116, 104, 0.4, 30)}
<path class="text-gold" stroke-dasharray="1 4" d="M120 116 L120 168"/>
<path class="fill-gold text-gold" fill-opacity=".2" d="M100 186 Q120 166 140 186 Z"/>
${leaf(112, 180, 0.35, -10)}${leaf(124, 176, 0.35, 190)}`,
  },

  "6-7": {
    label: "Stones balanced in a stack between sun and snow",
    svg: `${sun(70, 76, 10, 8, 5)}
${snowflake(170, 76, 14)}
<g class="text-clay"><path class="fill-clay" ${TINT} d="M78 178 Q76 156 120 154 Q164 156 162 178 Z"/><path class="fill-clay" ${TINT} d="M90 154 Q88 134 120 132 Q152 134 150 154 Z"/><path class="fill-clay" ${TINT} d="M100 132 Q98 114 120 112 Q142 114 140 132 Z"/><path class="fill-clay" ${TINT} d="M108 112 Q108 96 120 94 Q132 96 132 112 Z"/></g>
${ground(180)}`,
  },

  "6-26": {
    label: "A wandering line that keeps returning to its center",
    svg: `<path class="text-line-strong" d="M120 122 C130 100 150 96 158 84 C166 72 150 60 138 70 C126 80 146 96 168 100 C186 104 186 128 170 132 C154 136 150 120 140 126 C128 134 160 160 146 170 C134 178 112 168 104 178 C94 190 70 176 78 160 C84 148 104 156 100 140 C96 128 72 136 66 124 C60 110 80 100 92 108 Q106 116 116 120"/><path class="text-line-strong" d="M108 114 L116 120 L106 122"/>
${halo(120, 122, 16)}
<circle class="fill-gold text-gold" fill-opacity=".5" cx="120" cy="122" r="6"/>`,
  },

  "6-32": {
    label: "Two ripples spreading until they meet",
    svg: `${ripples(92, 114, [5, 17, 31, 45], "text-clay", "fill-clay")}
${ripples(150, 134, [5, 17, 31, 45], "text-teal", "fill-teal")}`,
  },

  "9-30": {
    label: "A path that turns around toward the sunrise",
    svg: `${risingSun(152, 112, 26, 7, 9)}
<path class="text-line-strong" d="M${f(120 - halfWidth(112) + 6)} 112 L${f(120 + halfWidth(112) - 6)} 112"/>
<path class="text-clay" stroke-dasharray="4 5" d="M116 196 Q110 170 86 160 Q60 150 66 134 Q74 120 102 126 Q128 132 146 118"/>
<path class="text-clay" d="M138 118 L146 118 L142 126"/>`,
  },

  "17-3": {
    label: "A flower turning its face toward the sun",
    svg: `${sun(78, 78, 12, 8, 6)}
<path class="text-clay" d="M166 190 Q172 148 148 120 Q136 106 124 102"/>
${leaf(162, 152, 0.85, -150)}${leaf(166, 172, 0.85, -20)}
<g class="text-clay">${Array.from({ length: 10 }, (_, i) => {
      const a = (i * 36 * Math.PI) / 180
      const x = 112 + Math.cos(a) * 19
      const y = 96 + Math.sin(a) * 19
      return `<ellipse class="fill-clay" ${TINT} cx="${f(x)}" cy="${f(y)}" rx="4" ry="8" transform="rotate(${i * 36 + 90} ${f(x)} ${f(y)})"/>`
    }).join("")}</g>
<circle class="fill-gold text-gold" fill-opacity=".35" cx="112" cy="96" r="10"/>
<g class="fill-gold text-transparent" opacity=".8"><circle cx="109" cy="93" r="1.2"/><circle cx="115" cy="94" r="1.2"/><circle cx="111" cy="99" r="1.2"/><circle cx="116" cy="99" r="1.2"/></g>`,
  },

  "18-48": {
    label: "A fire with smoke curling up from it",
    svg: `<g class="text-line-strong" opacity=".7"><path d="M114 98 Q100 82 114 68 Q128 54 114 40"/><path d="M128 102 Q144 86 132 72 Q122 58 138 46"/></g>
${halo(120, 140, 30)}
<path class="fill-gold text-saffron" fill-opacity=".25" d="M120 170 Q96 150 104 126 Q110 112 112 98 Q122 112 124 104 Q132 118 138 112 Q148 146 120 170 Z"/>
${flame(120, 168, 40)}
<g class="text-clay"><path d="M80 184 L160 166 M80 166 L160 184"/></g>
${ground(186)}`,
  },

  "18-58": {
    label: "A small boat crossing the river toward a lit far shore",
    svg: `<path class="fill-line-strong text-line-strong" fill-opacity=".1" d="M44 104 Q70 82 96 98 Q120 74 150 92 Q176 84 196 104 Z"/>
${flame(150, 90, 18, true)}
<g class="text-teal"><path d="M${f(120 - halfWidth(112) + 4)} 112 L${f(120 + halfWidth(112) - 4)} 112"/></g>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M76 160 L164 160 Q152 178 120 178 Q88 178 76 160 Z"/><path d="M120 160 L120 116"/><path class="fill-clay" fill-opacity=".12" d="M122 120 Q148 132 152 156 L122 156 Z"/></g>
<path class="text-line-strong" d="M92 150 L72 188"/>
${water(184, "text-teal", 2)}`,
  },

  "2-62": {
    label: "A thought spiraling inward until it catches fire",
    svg: `<path class="text-line-strong" d="${spiral(120, 122, 78, 30, 2.2, 180)}"/>
<path class="text-clay" d="${spiral(120, 122, 30, 18, 0.6, 180 + 2.2 * 360)}"/>
${flame(120, 134, 28, true)}`,
  },

  "2-63": {
    label: "A chain whose links loosen until the last one breaks",
    svg: `${[0, 1, 2, 3, 4].map((i) => {
      const x = 72 + i * 19
      const y = 78 + i * 19
      const o = f(1 - i * 0.15)
      return i % 2 === 0
        ? `<rect class="fill-clay text-clay" fill-opacity=".08" opacity="${o}" x="${x - 17}" y="${y - 9}" width="34" height="18" rx="9" transform="rotate(45 ${x} ${y})"/>`
        : `<rect class="text-clay" opacity="${o}" x="${x - 17}" y="${y - 4}" width="34" height="8" rx="4" transform="rotate(45 ${x} ${y})"/>`
    }).join("")}
<g class="text-clay" opacity=".35" transform="rotate(45 166 172)"><path d="M158 164 L170 164 Q178 164 178 172 Q178 180 170 180 L162 180"/></g>
<g class="text-gold" opacity=".7"><path d="M158 146 L164 140 M170 154 L178 152 M154 158 L148 164"/></g>`,
  },

  "2-70": {
    label: "Rivers flowing into a still, full ocean",
    svg: `<g class="text-teal"><path class="fill-teal" fill-opacity=".07" stroke="none" d="M${f(120 - halfWidth(74))} 74 L${f(120 + halfWidth(74))} 74 L${f(120 + halfWidth(110))} 110 L${f(120 - halfWidth(110))} 110 Z"/><path d="M${f(120 - halfWidth(74) + 4)} 74 L${f(120 + halfWidth(74) - 4)} 74"/><path opacity=".6" d="M54 90 Q86 86 120 90 T186 90"/><path opacity=".4" d="M60 102 Q90 98 120 102 T180 102"/></g>
<path class="text-line-strong" opacity=".7" d="M${f(120 - halfWidth(112) + 2)} 112 Q120 118 ${f(120 + halfWidth(112) - 2)} 112"/>
<g class="text-teal" opacity=".85"><path class="fill-teal" fill-opacity=".12" d="M60 184 Q86 160 74 142 Q66 128 108 112 L114 112 Q94 130 100 142 Q114 160 92 186 Z"/><path class="fill-teal" fill-opacity=".12" d="M180 184 Q154 160 166 142 Q174 128 132 112 L126 112 Q146 130 140 142 Q126 160 148 186 Z"/></g>
<g class="text-teal" opacity=".4"><path d="M76 176 Q90 162 84 150 M164 176 Q150 162 156 150"/></g>`,
  },

  "2-71": {
    label: "An empty bowl, and a bird flying free above it",
    svg: `<g class="text-clay"><path class="fill-clay" ${TINT} d="M70 152 L170 152 Q164 190 120 192 Q76 190 70 152 Z"/><path d="M66 152 L174 152"/><path opacity=".5" d="M86 164 Q120 172 154 164"/></g>
<g class="text-line-strong"><path class="fill-line-strong" fill-opacity=".12" d="M108 92 Q124 84 142 90 Q126 96 108 92 Z"/><path d="M122 88 Q110 70 90 66 Q104 78 112 90"/><path d="M128 87 Q140 66 162 60 Q148 76 136 89"/><circle class="fill-line-strong" cx="143" cy="89" r="1.6"/><path d="M108 92 L100 96 M108 92 L101 89"/></g>
<path class="text-gold" stroke-dasharray="1.5 5" d="M120 142 Q112 124 118 104"/>`,
  },

  "3-21": {
    label: "Footprints on a path, with smaller ones following",
    svg: `<path class="fill-line-strong text-transparent" fill-opacity=".07" d="M92 198 Q120 160 114 122 Q110 86 146 54 L170 64 Q136 92 140 124 Q144 164 124 200 Z"/>
${footprint(142, 68, 1.1, 30, "text-clay")}${footprint(126, 98, 1.1, 10, "text-clay")}${footprint(134, 128, 1.1, 0, "text-clay")}
${footprint(122, 156, 0.75, -5, "text-gold")}${footprint(116, 178, 0.75, -15, "text-gold")}`,
  },

  "3-27": {
    label: "Three interlocking rings for the three qualities of nature",
    svg: `<circle class="fill-gold text-gold" fill-opacity=".07" cx="120" cy="96" r="34"/>
<circle class="fill-clay text-clay" fill-opacity=".06" cx="98" cy="136" r="34"/>
<circle class="fill-line-strong text-line-strong" fill-opacity=".06" cx="142" cy="136" r="34"/>
<g class="text-line-strong" opacity=".55"><path d="M120 46 A76 76 0 0 1 186 160 M180 152 L186 160 L190 150"/></g>`,
  },

  "3-35": {
    label: "A straight borrowed road beside a winding path of one's own",
    svg: `<path class="text-line-strong" d="M${f(120 - halfWidth(74) + 6)} 74 L${f(120 + halfWidth(74) - 6)} 74"/>
<path class="text-line-strong" stroke-dasharray="3 6" d="M70 188 L96 74 M104 188 L102 74"/>
<path class="fill-clay text-transparent" fill-opacity=".08" d="M138 188 Q118 160 146 140 Q172 122 144 102 Q124 88 142 74 L150 74 Q134 90 156 104 Q186 124 160 144 Q136 162 158 188 Z"/>
<g class="text-clay"><path d="M138 188 Q118 160 146 140 Q172 122 144 102 Q124 88 142 74"/><path d="M158 188 Q136 162 160 144 Q186 124 156 104 Q134 90 150 74"/></g>
${flame(146, 72, 18, true)}`,
  },

  "4-11": {
    label: "Many paths winding up to the same summit",
    svg: `${sun(120, 50, 6, 8, 4)}
<path class="fill-clay text-clay" ${TINT} d="M58 180 L120 68 L182 180 Z"/>
<g class="text-gold" stroke-dasharray="3 4"><path d="M76 180 Q90 148 106 128 Q114 102 120 70"/><path d="M104 180 Q100 156 118 138 Q128 110 120 70"/><path d="M140 180 Q146 152 132 132 Q122 106 120 70"/><path d="M166 180 Q150 164 142 138 Q134 110 120 70"/></g>
${ground(182)}`,
  },

  "4-34": {
    label: "One lamp lighting another",
    svg: `${lamp(90, 158, 44, 60)}
${lamp(160, 158, 40, 22)}
<path class="text-gold" stroke-dasharray="1.5 5" d="M96 96 Q132 84 156 132"/>
${sparkle(150, 124, 2.5)}${sparkle(168, 128, 2.5)}
${ground(182)}`,
  },
  "2-7": {
    label: "A bow set down beneath a lamp",
    svg: `${lamp(124, 100, 36, 42)}
${rays(124, 78, 32, 41, 7, 180, 360)}
<g class="text-clay"><path d="M60 174 Q100 112 180 132"/><path d="M60 174 L55 177 M180 132 L185 135"/><path class="fill-clay" fill-opacity=".25" transform="rotate(-25 106 140)" d="M100 135 L112 135 L112 145 L100 145 Z"/></g>
<path class="text-clay" opacity=".55" d="M60 174 L180 132"/>
${ground(180)}`,
  },

  "2-23": {
    label: "Blade, fire, water and wind circling an untouched center",
    svg: `<circle class="text-line-strong" opacity=".5" stroke-dasharray="2 5" cx="120" cy="122" r="36"/>
${halo(120, 122, 20)}
<circle class="fill-gold text-gold" fill-opacity=".5" cx="120" cy="122" r="7"/>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M116 52 L124 52 L124 76 L120 84 L116 76 Z"/><path d="M110 52 L130 52 M120 52 L120 42"/></g>
${flame(178, 140, 36)}
${drop(120, 180, 1.5)}
<g class="text-line-strong"><path d="M48 116 Q60 104 72 114 Q78 124 68 126 Q62 124 64 118"/><path d="M46 134 Q60 128 76 134"/></g>`,
  },

  "2-27": {
    label: "A falling leaf and a new sprout joined on one turning circle",
    svg: `<circle class="text-line-strong" stroke-dasharray="3 6" cx="120" cy="122" r="56"/>
<g class="text-line-strong"><path d="M171 114 L176 122 L182 114"/><path d="M58 130 L64 122 L70 130"/></g>
${leaf(108, 74, 1, 25, "text-gold", "fill-gold")}
<g class="text-gold" opacity=".4" stroke-dasharray="1.5 4"><path d="M128 60 Q134 66 130 72"/></g>
<g class="text-clay"><path d="M120 178 Q118 162 121 150"/></g>${leaf(121, 158, 0.8, -35)}${leaf(120, 164, 0.75, 210)}
<path class="text-line-strong" opacity=".7" d="M98 179 Q120 175 142 179"/>`,
  },

  "2-58": {
    label: "A tortoise with its limbs drawn into its shell",
    svg: `<g class="text-clay"><path class="fill-clay" fill-opacity=".15" d="M174 140 Q190 136 192 146 Q190 152 176 150 Z"/><circle class="fill-clay" cx="186" cy="143" r="1.2"/><path class="fill-clay" fill-opacity=".15" d="M78 150 Q80 160 92 158 L92 150 Z M148 150 L148 158 Q160 160 162 150 Z"/></g>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M62 150 Q70 102 120 98 Q170 102 178 150 Z"/>
<path opacity=".5" d="M98 104 L108 122 L132 122 L142 104 M108 122 L100 146 M132 122 L140 146 M108 122 L84 116 M132 122 L156 116"/>
<path d="M62 150 Q70 158 78 150 Q86 158 94 150 Q102 158 110 150 Q118 158 126 150 Q134 158 142 150 Q150 158 158 150 Q166 158 178 150"/></g>
${ground(166)}`,
  },

  "2-69": {
    label: "One lit window in a village asleep under the night sky",
    svg: `${moon(78, 70, 12)}
${sparkle(110, 58, 3)}${sparkle(150, 72, 3)}${sparkle(172, 96, 2.5)}${sparkle(130, 90, 2)}
<g class="text-line-strong"><path class="fill-line-strong" fill-opacity=".1" d="M58 178 L58 158 L71 149 L84 158 L84 178 Z"/><path class="fill-line-strong" fill-opacity=".1" d="M156 178 L156 158 L169 149 L182 158 L182 178 Z"/></g>
<g class="text-clay"><path class="fill-clay" ${TINT} d="M90 178 L90 136 L120 114 L150 136 L150 178 Z"/></g>
${halo(120, 152, 18)}
<path class="fill-gold text-gold" fill-opacity=".3" d="M110 142 L130 142 L130 162 L110 162 Z"/>
${flame(120, 158, 14)}
${ground(180)}`,
  },

  "3-19": {
    label: "A pot taking shape on a turning potter's wheel",
    svg: `<g class="text-clay"><path class="fill-clay" ${TINT} d="M100 152 Q92 128 106 114 Q112 108 108 100 L132 100 Q128 108 134 114 Q148 128 140 152 Z"/><path opacity=".5" d="M100 132 Q120 138 140 132"/></g>
<g class="text-line-strong"><ellipse class="fill-line-strong" fill-opacity=".1" cx="120" cy="158" rx="58" ry="12"/><path d="M108 170 L104 184 L136 184 L132 170"/></g>
<g class="text-line-strong" opacity=".7"><path d="M54 150 Q58 140 70 138 M66 134 L70 138 L64 142"/><path d="M186 166 Q182 176 170 178 M174 182 L170 178 L176 174"/></g>`,
  },

  "4-24": {
    label: "A ladle pouring an offering into the sacred fire",
    svg: `${halo(120, 128, 32)}
${flame(102, 154, 30)}${flame(138, 154, 30)}${flame(120, 154, 52)}
<g class="text-clay"><path class="fill-clay" ${TINT} d="M80 160 L160 160 L170 176 L70 176 Z"/><path d="M84 154 L156 154 L160 160 L80 160 Z"/></g>
<g class="text-line-strong"><path d="M182 68 L138 98"/><ellipse class="fill-line-strong" fill-opacity=".15" cx="133" cy="101" rx="9" ry="5" transform="rotate(-34 133 101)"/></g>
<path class="fill-gold text-gold" fill-opacity=".35" d="M128 108 Q124 114 125 117 Q126 120 128 120 Q130 120 131 117 Q132 114 128 108 Z"/>
${ground(180)}`,
  },

  "4-39": {
    label: "A flame rising from a palm-leaf manuscript",
    svg: `${flame(120, 138, 48, true)}
<g class="text-clay"><rect class="fill-clay" fill-opacity=".08" x="54" y="146" width="132" height="10" rx="5"/><rect class="fill-clay" fill-opacity=".08" x="56" y="158" width="128" height="10" rx="5"/><rect class="fill-clay" fill-opacity=".08" x="58" y="170" width="124" height="10" rx="5"/></g>
<g class="text-line-strong"><circle cx="86" cy="163" r="2"/><circle cx="154" cy="163" r="2"/><path opacity=".6" d="M86 146 L86 140 Q86 134 92 134 M154 146 L154 140 Q154 134 148 134"/></g>
<g class="text-line-strong" opacity=".45"><path d="M98 151 L142 151 M98 163 L140 163 M100 175 L140 175"/></g>`,
  },

  "4-40": {
    label: "A compass needle that can't settle on a direction",
    svg: `<g class="text-clay"><circle class="fill-clay" ${TINT} cx="120" cy="122" r="58"/><circle opacity=".5" cx="120" cy="122" r="50"/></g>
<g class="text-line-strong"><path d="M120 66 L120 74 M120 170 L120 178 M64 122 L72 122 M168 122 L176 122"/></g>
${[20, 75, 140, 200].map((deg) => {
      const a = rad(deg)
      const p = (r, off) => `${f(120 + Math.cos(a + off) * r)} ${f(122 + Math.sin(a + off) * r)}`
      return `<path class="text-line-strong" opacity=".3" stroke-dasharray="2 4" d="M${p(42, 0)} L${p(6, Math.PI / 2)} L${p(42, Math.PI)} L${p(6, -Math.PI / 2)} Z"/>`
    }).join("")}
${(() => {
      const a = rad(-60)
      const p = (r, off) => `${f(120 + Math.cos(a + off) * r)} ${f(122 + Math.sin(a + off) * r)}`
      return `<path class="fill-clay text-clay" fill-opacity=".35" d="M${p(44, 0)} L${p(7, Math.PI / 2)} L${p(0, 0)} L${p(7, -Math.PI / 2)} Z"/><path class="text-clay" d="M${p(7, Math.PI / 2)} L${p(44, Math.PI)} L${p(7, -Math.PI / 2)}"/>`
    })()}
<circle class="fill-gold text-gold" fill-opacity=".6" cx="120" cy="122" r="4"/>`,
  },

  "5-18": {
    label: "One moon reflected alike in five different pots",
    svg: `${moon(120, 66, 13)}
<g class="text-gold" opacity=".3" stroke-dasharray="2 6"><path d="M114 84 L62 150 M117 86 L90 140 M120 88 L120 132 M123 86 L150 140 M126 84 L178 150"/></g>
${[
      [62, 22, 30],
      [90, 28, 40],
      [120, 34, 50],
      [150, 28, 40],
      [178, 22, 30],
    ]
      .map(([x, w, h]) => {
        const b = 178
        return `<path class="fill-clay text-clay" ${TINT} d="M${f(x - w * 0.35)} ${b} Q${f(x - w / 2)} ${f(b - h * 0.5)} ${f(x - w * 0.32)} ${f(b - h * 0.8)} L${f(x - w * 0.22)} ${b - h} L${f(x + w * 0.22)} ${b - h} L${f(x + w * 0.32)} ${f(b - h * 0.8)} Q${f(x + w / 2)} ${f(b - h * 0.5)} ${f(x + w * 0.35)} ${b} Z"/><circle class="fill-gold text-gold" fill-opacity=".35" cx="${x}" cy="${f(b - h * 0.5)}" r="${f(w * 0.14)}"/>`
      })
      .join("")}
${ground(180)}`,
  },

  "6-34": {
    label: "A lamp flame bent sideways by a strong, restless wind",
    svg: `<g class="text-line-strong"><path d="M44 104 Q90 88 128 104 Q158 116 174 100 Q182 90 172 86"/><path d="M40 130 Q76 120 104 132"/><path d="M60 80 Q96 70 124 80"/><path d="M150 134 Q172 140 192 128"/></g>
<g transform="rotate(40 120 158)">${flame(120, 158, 46)}</g>
${diya(120, 160, 44)}
${leaf(170, 72, 0.6, 30, "text-gold", "fill-gold")}${leaf(190, 112, 0.5, 70, "text-gold", "fill-gold")}
${ground(184)}`,
  },

  "6-40": {
    label: "A new shoot growing from a cut tree stump",
    svg: `<g class="text-clay"><path class="fill-clay" ${TINT} d="M88 178 L92 134 Q120 126 148 134 L152 178 Z"/><ellipse class="fill-clay" fill-opacity=".1" cx="120" cy="134" rx="28" ry="7"/><ellipse opacity=".5" cx="120" cy="134" rx="17" ry="4"/><ellipse opacity=".4" cx="120" cy="134" rx="7" ry="1.6"/><path d="M88 178 Q78 182 70 182 M152 178 Q162 182 170 182"/></g>
<g class="text-clay"><path d="M126 131 Q130 108 120 88"/></g>${leaf(124, 104, 0.95, -40)}${leaf(122, 112, 0.85, 205)}${leaf(120, 90, 0.7, -80)}
${ground(184)}`,
  },

  "7-19": {
    label: "A long path over many hills toward the dawn",
    svg: `${risingSun(120, 98, 22, 7, 8)}
<g class="text-line-strong"><path class="fill-line-strong" fill-opacity=".08" d="M44 104 Q84 84 120 98 Q156 84 196 104 Z"/><path class="fill-line-strong" fill-opacity=".1" d="M44 142 Q88 112 130 134 Q166 118 196 142 Z"/></g>
<path class="fill-clay text-clay" ${TINT} d="M58 178 Q96 150 140 170 Q170 156 182 178 Z"/>
<path class="text-clay" stroke-dasharray="3 4" d="M120 192 Q100 176 116 162 Q132 148 112 134 Q100 120 120 104"/>`,
  },

  "9-34": {
    label: "A garland of flowers around a steady flame",
    svg: `${Array.from({ length: 12 }, (_, i) => {
      const a = rad(i * 30 - 90)
      return flower5(f(120 + Math.cos(a) * 52), f(122 + Math.sin(a) * 52), 3.6)
    }).join("")}
<circle class="text-clay" opacity=".35" cx="120" cy="122" r="52"/>
<g class="text-clay"><path d="M120 174 L120 190 M114 190 L126 190"/></g>
${flame(120, 146, 46, true)}`,
  },

  "10-8": {
    label: "One spring at the top feeding every stream below",
    svg: `${halo(120, 60, 18)}
<path class="fill-gold text-gold" fill-opacity=".3" d="M120 48 Q110 62 112 68 Q114 74 120 74 Q126 74 128 68 Q130 62 120 48 Z"/>
<g class="text-teal"><path d="M120 76 L120 100"/><path d="M120 100 Q100 116 84 140 Q76 156 70 174"/><path d="M120 100 Q140 116 156 140 Q164 156 170 174"/><path d="M120 100 L120 176"/><path opacity=".7" d="M84 140 Q96 156 98 176"/><path opacity=".7" d="M156 140 Q144 156 142 176"/></g>
${leaf(70, 176, 0.6, -60)}${leaf(98, 178, 0.55, -70)}${leaf(120, 178, 0.6, -90)}${leaf(142, 178, 0.55, -110)}${leaf(170, 176, 0.6, -120)}
${ground(184)}`,
  },

  "11-12": {
    label: "A blazing sun surrounded by countless suns",
    svg: `${Array.from({ length: 18 }, (_, i) => {
      const a = rad(i * 20 + 10)
      return `<circle class="fill-gold text-gold" fill-opacity=".25" opacity=".55" cx="${f(120 + Math.cos(a) * 78)}" cy="${f(122 + Math.sin(a) * 78)}" r="2.5"/>`
    }).join("")}
${Array.from({ length: 12 }, (_, i) => {
      const a = rad(i * 30)
      return `<circle class="fill-gold text-gold" fill-opacity=".3" cx="${f(120 + Math.cos(a) * 60)}" cy="${f(122 + Math.sin(a) * 60)}" r="4.5"/>`
    }).join("")}
${halo(120, 122, 44)}
${sun(120, 122, 24, 16, 12)}`,
  },

  "11-32": {
    label: "The sun setting under the long arc of time",
    svg: `<path class="text-line-strong" stroke-dasharray="3 6" d="M46 150 A74 74 0 0 1 194 150"/>
<path class="text-line-strong" d="M188 142 L194 150 L198 140"/>
${risingSun(120, 150, 34, 9, 10)}
<path class="text-line-strong" d="M${f(120 - halfWidth(150) + 6)} 150 L${f(120 + halfWidth(150) - 6)} 150"/>
<g class="text-clay" opacity=".8"><path d="M70 172 L104 164 M70 172 L76 167 M70 172 L76 175 M104 164 L110 162"/><path d="M132 176 L170 168 M132 176 L138 171 M132 176 L138 179 M170 168 L176 166"/></g>
${ground(182)}`,
  },

  "15-1": {
    label: "An upside-down tree with its roots above and branches below",
    svg: `${halo(120, 58, 18)}
<g class="text-line-strong"><path d="M120 86 Q108 72 92 64 M120 86 Q132 72 148 64 M120 86 L120 52 M108 74 Q100 64 96 54 M132 74 Q140 64 144 54 M92 64 L84 62 M148 64 L156 62"/></g>
<g class="text-clay"><path d="M120 86 L120 120"/><path d="M120 120 Q96 132 78 158 M120 120 Q144 132 162 158 M120 120 L120 176 M102 136 Q92 152 94 176 M138 136 Q148 152 146 176"/></g>
${leaf(78, 158, 0.75, 110)}${leaf(162, 158, 0.75, 70)}${leaf(120, 176, 0.75, 90)}${leaf(94, 176, 0.65, 100)}${leaf(146, 176, 0.65, 80)}${leaf(90, 146, 0.6, 140)}${leaf(150, 146, 0.6, 40)}`,
  },

  "15-15": {
    label: "A small flame glowing inside a closed lotus bud",
    svg: `<g class="text-clay"><path class="fill-clay" fill-opacity=".07" d="M120 166 Q84 140 94 104 Q102 84 120 70 Q138 84 146 104 Q156 140 120 166 Z"/><path opacity=".45" d="M120 166 Q102 140 110 106 M120 166 Q138 140 130 106"/><path d="M120 166 L120 192"/></g>
${leaf(118, 170, 0.9, 155)}${leaf(122, 170, 0.9, 25)}
${halo(120, 122, 20)}
${flame(120, 138, 30)}
${water(192)}`,
  },

  "18-61": {
    label: "Beings riding a great wheel that turns around a light at its hub",
    svg: `${wheel(120, 122, 60, 8, 10)}
${halo(120, 122, 18)}
<circle class="fill-gold text-gold" fill-opacity=".55" cx="120" cy="122" r="7"/>
${Array.from({ length: 8 }, (_, i) => {
      const a = rad(i * 45 + 22.5)
      return `<circle class="fill-paper text-clay" cx="${f(120 + Math.cos(a) * 60)}" cy="${f(122 + Math.sin(a) * 60)}" r="6"/><circle class="fill-clay text-transparent" fill-opacity=".2" cx="${f(120 + Math.cos(a) * 60)}" cy="${f(122 + Math.sin(a) * 60)}" r="6"/>`
    }).join("")}
<g class="text-line-strong" opacity=".7"><path d="M120 48 A74 74 0 0 1 190 98 M187 88 L190 98 L180 96"/></g>`,
  },
}
