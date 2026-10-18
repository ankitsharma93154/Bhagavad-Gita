import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface SectionNavItem {
  id: string
  label: string
}

/**
 * The verse page's "on this page" rail: a dot per section on a thin line, highlighting the
 * one being read. Server render marks the first item active; scroll tracking takes over after
 * hydration. Jumping to a collapsed <details> section opens it.
 */
export function SectionNav({ items, className }: { items: SectionNavItem[]; className?: string }) {
  const [active, setActive] = useState(items[0]?.id)

  // Keyed on the ids rather than the array, so a fresh-but-equal items prop doesn't re-subscribe.
  const ids = items.map((item) => item.id).join(" ")

  useEffect(() => {
    const targets = ids
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    // The active section is the last one whose top has passed a line a third down the viewport.
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight / 3
      let current = targets[0]?.id
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) current = el.id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    // The rail only shows at the lg breakpoint (64rem). Below it, skip the per-frame layout reads
    // entirely, so scrolling on phones does no work for a hidden element.
    const wide = window.matchMedia("(min-width: 64rem)")
    const sync = () => {
      window.removeEventListener("scroll", onScroll)
      if (!wide.matches) return
      update()
      window.addEventListener("scroll", onScroll, { passive: true })
    }
    sync()
    wide.addEventListener("change", sync)
    return () => {
      wide.removeEventListener("change", sync)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  function jump(e: React.MouseEvent, id: string) {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    if (el instanceof HTMLDetailsElement) el.open = true
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    setActive(id)
  }

  return (
    <nav aria-label="On this page" className={className}>
      <p className="text-xs font-semibold tracking-[0.15em] text-ink-faint uppercase">
        On this page
      </p>
      <ol className="mt-4 border-l border-line">
        {items.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => jump(e, item.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "focus-ring relative -ml-px flex items-center gap-3 py-1.5 pl-4 text-sm transition-colors",
                  isActive ? "text-clay-deep" : "text-ink-faint hover:text-ink-soft",
                )}
              >
                <span
                  className={cn(
                    "absolute -left-[3.5px] h-1.5 w-1.5 rounded-full transition-[background-color,transform]",
                    isActive ? "scale-150 bg-clay" : "bg-line-strong/60",
                  )}
                  aria-hidden
                />
                {item.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
