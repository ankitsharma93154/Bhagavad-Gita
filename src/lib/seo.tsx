const SITE_NAME = "Bhagavad Gita Quotes"
const SITE_URL = "https://bhagavadgitaquotes.example.com"

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
}

/**
 * Renders document title, meta description, canonical URL, social tags, and structured
 * data directly as JSX. React 19 hoists <title>/<meta>/<link> into <head> automatically,
 * both on the client and during server-side renderToString — so this works identically
 * for prerendering and for normal client navigation, unlike the old useEffect-based version.
 */
export function Seo({ title, description, path, structuredData, noindex }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title}: ${SITE_NAME}`
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

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

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
