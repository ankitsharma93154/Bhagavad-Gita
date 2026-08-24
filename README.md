# Bhagavad Gita Quotes

A small, calm site for discovering, reading, saving, and sharing verses from the
Bhagavad Gita — Sanskrit, a plain English translation, a simple meaning, and a
short quote-friendly interpretation for each one.

This is an intentionally small MVP: ~24 curated verses, not the full text.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + React Router + Lucide icons.
All content lives locally in `src/data/`. No backend, database, auth, or CMS —
saved quotes are stored in the browser via `localStorage`.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Project structure

- `src/data/` — verse and theme content, plus small query helpers (by slug,
  by theme, related verses/themes, the daily featured verse).
- `src/components/quote/` — `QuoteCard` (the core reusable card), `QuoteActions`
  (save/share/listen), `VerseDisplay` (Sanskrit + translation reading block),
  `QuoteGrid`.
- `src/components/theme/` — `ThemeCard`, `ThemeGrid`.
- `src/components/layout/` — `Header`, `Footer`, `ScrollToTop`.
- `src/hooks/useSavedQuotes.ts` — localStorage-backed saved-quotes state.
- `src/lib/` — `search.ts` (client-side search), `share.ts` (Web Share /
  copy-link / WhatsApp), `seo.ts` (per-route document title, meta, and
  structured data).
- `src/pages/` — one component per route.

## Content

Sanskrit, transliteration, and translations are simplified renderings intended
for everyday reflection, not a scholarly edition — see `/about` on the site for
details. Extending the collection means adding entries to `src/data/verses.ts`;
the sitemap and prerendered routes are generated at build time from
`src/routes.ts`, so no other file needs to be touched to grow from ~24 verses
toward more.

## Deployment

Static site, deployable to Vercel as-is — see [SEO — rendering architecture](#rendering-architecture)
below for how the build produces prerendered HTML per route. `vercel.json`
rewrites any unmatched path to `app-shell.html` (the SPA fallback, used only
for `/saved` and genuinely unknown URLs) — every indexable route is served as
its own static `index.html` file instead.

Once a real domain is registered, it needs updating in exactly 3 places:
`SITE_URL` in `src/lib/seo.tsx`, the canonical/OG URLs in `index.html`, and the
`Sitemap:` line in `public/robots.txt`.

## SEO

### Rendering architecture

Meta tags (title, description, canonical, Open Graph, Twitter card, JSON-LD)
are rendered declaratively by the `<Seo>` component (`src/lib/seo.tsx`) using
React 19's built-in `<title>`/`<meta>`/`<link>` head-hoisting, instead of
mutating `document.head` imperatively. `npm run build` runs a second,
SSR-only Vite build of `src/entry-server.tsx` and then `scripts/prerender.mjs`,
which renders every route in `src/routes.ts` to a real static
`dist/<route>/index.html` with actual content and per-route metadata already
baked in — not dependent on JS execution, which matters for both search
crawlers and non-JS link-preview bots (WhatsApp, X, iMessage). The client
bundle then hydrates over the prerendered markup (`src/main.tsx`). This adds
no new runtime dependency (`react-dom/server` and `react-router-dom`'s
`StaticRouter` are already part of the existing dependencies) and no backend —
the output is still a fully static `dist/` folder.

`scripts/sitemap.mjs` generates `dist/sitemap.xml` from the same route list,
so the sitemap and the prerendered routes can never drift apart.

### Keyword → URL mapping

One canonical page per keyword cluster, to avoid the site competing with
itself in search results:

| URL | Primary keyword target(s) |
| --- | --- |
| `/quotes` | bhagavad gita quotes, gita quotes |
| `/themes/karma` | karma bhagavad gita quotes, bhagavad gita quotes about karma |
| `/themes/positive-thinking` | positive thinking bhagavad gita quotes |
| `/themes/motivation` | motivational bhagavad gita quotes, inspiring bhagavad gita quotes |
| `/themes/heart-touching` | heart touching bhagavad gita quotes |
| `/themes/peace` | bhagavad gita quotes about peace |
| `/themes/success` | bhagavad gita quotes about success |
| `/themes/courage` | bhagavad gita quotes about courage |
| `/themes/wisdom`, `/themes/purpose`, `/themes/detachment`, `/themes/life` | supporting long-tail, no dedicated primary keyword |
| `/languages/hindi` | bhagavad gita quotes in hindi, gita quotes in hindi |
| `/quotes/bhagavad-gita-{chapter}-{verse}` | chapter/verse-specific and long-tail queries |
| `/about` | (not a search-intent page — describes the project) |

Deliberately **not** built yet (no adequate content or would cannibalize an
existing page): `/languages/english` (would duplicate `/quotes`, which is
already English-primary), `/languages/sanskrit`, and Telugu/Tamil pages (no
translated content exists). See the SEO audit report for the recommended next
content pages.
