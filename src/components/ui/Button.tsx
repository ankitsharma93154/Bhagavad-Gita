import type { ButtonHTMLAttributes } from "react"
import { Link, type LinkProps } from "react-router-dom"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-gradient-brand text-surface shadow-sm hover:shadow-glow hover:brightness-90 active:brightness-90",
  secondary:
    "bg-transparent text-ink border border-line hover:border-clay hover:text-clay-deep",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:bg-surface-soft",
  inverse: "bg-surface text-clay-deep hover:bg-surface-soft",
}

const sizes = {
  md: "text-sm px-5 py-2.5 gap-2",
  sm: "text-sm px-4 py-2 gap-1.5",
}

const base =
  "focus-ring inline-flex items-center justify-center rounded-full font-medium transition-[color,background-color,border-color,filter,box-shadow] duration-200 disabled:opacity-50 disabled:pointer-events-none"

type Variant = keyof typeof variants
type Size = keyof typeof sizes

interface ButtonOwnProps {
  variant?: Variant
  size?: Size
}

type ButtonAsButton = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = ButtonOwnProps &
  Omit<LinkProps, "to"> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props
    return <Link to={href} className={classes} {...rest} />
  }

  return <button className={classes} {...(props as ButtonAsButton)} />
}
