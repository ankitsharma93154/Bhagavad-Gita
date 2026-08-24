import type { AnchorHTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface BadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string
  tone?: "clay" | "teal"
}

export function Badge({ to, tone = "teal", className, children, ...props }: BadgeProps) {
  const classes = cn(
    "focus-ring inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase transition-colors duration-200",
    tone === "teal"
      ? "border-teal-soft bg-teal-soft text-teal-deep hover:border-teal"
      : "border-clay-soft bg-clay-soft text-clay-deep hover:border-clay",
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
