const SITE_NAME = "Bhagavad Gita Quotes"
const SITE_URL = "https://bhagvadgitaquotes.com"

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface SeoProps {
  title: string
  description: string
  /** Omit for pages that shouldn't claim a canonical URL (e.g. a soft-404). */
  path?: string
  /** One structured-data object, or several (e.g. a BreadcrumbList alongside a CreativeWork). */
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
  /** Excludes the page from indexing (and skips the canonical) without hiding it from users. */
  noindex?: boolean
  /** Link-preview image (site-relative path) and its pixel size. Defaults to the site-wide card. */
  image?: { path: string; width: number; height: number }
}

const DEFAULT_IMAGE = { path: "/og-image.jpg", width: 1200, height: 800 }

/**
 * Renders document title, meta description, canonical URL, social tags, and structured
 * data directly as JSX. React 19 hoists <title>/<meta>/<link> into <head> automatically,
 * both on the client and during server-side renderToString — so this works identically
 * for prerendering and for normal client navigation, unlike the old useEffect-based version.
 */
export function Seo({ title, description, path, structuredData, noindex, image = DEFAULT_IMAGE }: SeoProps) {
  // Skip the site-name suffix when the title already contains it, so keyword-led titles like
  // "Bhagavad Gita Quotes on Karma" don't end up repeating the phrase.
  const fullTitle = title.includes(SITE_NAME) ? title : `${title}: ${SITE_NAME}`
  const url = path ? `${SITE_URL}${path}` : undefined
  const jsonLd = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : []

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {url && <link rel="canonical" href={url} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={path === "/" ? "website" : "article"} />
      <meta property="og:image" content={`${SITE_URL}${image.path}`} />
      <meta property="og:image:width" content={String(image.width)} />
      <meta property="og:image:height" content={String(image.height)} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image.path}`} />

      {jsonLd.map((data, i) => (
        // eslint-disable-next-line react/no-array-index-key -- static, order-stable list per page
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </>
  )
}

/** Builds schema.org BreadcrumbList structured data from an ordered list of crumbs. */
export function buildBreadcrumbList(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export { SITE_NAME, SITE_URL }
