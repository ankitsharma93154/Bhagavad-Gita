import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SegmentedToggleOption<T extends string> {
  value: T
  label: string
}

interface SegmentedToggleProps<T extends string> {
  options: readonly [SegmentedToggleOption<T>, SegmentedToggleOption<T>]
  value: T
  onChange: (value: T) => void
  className?: string
}

/**
 * A two-option pill toggle with a sliding colored thumb behind the active label, instead of
 * an instant color swap. The thumb is measured against the actual button, not assumed to be
 * an even 50/50 split, since option labels are rarely the same width (e.g. "English" vs "Hindi").
 */
export function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedToggleProps<T>) {
  const activeIndex = options.findIndex((option) => option.value === value)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [thumb, setThumb] = useState<{ left: number; width: number } | null>(null)

  useEffect(() => {
    function measure() {
      const activeButton = buttonRefs.current[activeIndex]
      if (activeButton) {
        setThumb({ left: activeButton.offsetLeft, width: activeButton.offsetWidth })
      }
    }

    measure()

    // Re-measure on any button resize, not just when the active option changes: a web font
    // finishing its (async) load after the first measurement can reflow the buttons and leave
    // a one-shot measurement stale, so the thumb no longer matches the button underneath it.
    const observer = new ResizeObserver(measure)
    buttonRefs.current.forEach((button) => button && observer.observe(button))
    return () => observer.disconnect()
  }, [activeIndex, options])

  return (
    <div
      className={cn(
        "relative inline-flex items-center overflow-hidden rounded-full border border-line-strong bg-surface p-0.5",
        className,
      )}
    >
      {thumb && (
        <span
          aria-hidden
          className="bg-clay-deep absolute top-0.5 bottom-0.5 rounded-full transition-[transform,width] duration-300 ease-out motion-reduce:transition-none"
          style={{ width: thumb.width, transform: `translateX(${thumb.left}px)` }}
        />
      )}
      {options.map((option, index) => (
        <button
          key={option.value}
          ref={(el) => {
            buttonRefs.current[index] = el
          }}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={option.value === value}
          className={cn(
            "focus-ring relative z-10 cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors duration-300",
            option.value === value ? "text-surface" : "text-ink-faint hover:text-ink-soft",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
