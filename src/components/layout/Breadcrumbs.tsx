import { Link } from "react-router-dom"
import type { BreadcrumbItem } from "@/lib/seo"

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/** Visual breadcrumb trail. Pair with `buildBreadcrumbList()` for the matching structured data. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>/</span>}
              {isLast ? (
                <span className="text-ink-soft" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="focus-ring rounded text-clay-deep hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
