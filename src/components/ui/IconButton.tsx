import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  active?: boolean
}

/** An icon-only button. `label` is required and used as the accessible name. */
export function IconButton({ icon, label, active, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full transition-[color,background-color,transform] duration-200",
        "hover:bg-surface-soft hover:text-ink active:scale-90",
        active ? "text-clay" : "text-ink-soft",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
