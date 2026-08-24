import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl sm:text-3xl",
}

interface SectionHeadingProps {
  children: ReactNode
  size?: keyof typeof sizes
  className?: string
}

/** A gradient-text section heading with a short gradient underline beneath it, used for major page/section titles. */
export function SectionHeading({ children, size = "md", className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "bg-gradient-brand relative inline-block bg-clip-text pb-3 font-serif text-transparent after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:rounded-full after:bg-gradient-brand after:content-['']",
        sizes[size],
        className,
      )}
    >
      {children}
    </h2>
  )
}
