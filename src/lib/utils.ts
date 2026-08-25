export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}

/** Truncates to a max length at the last whole word, so generated meta descriptions never
 *  overflow a search snippet regardless of how long the underlying content is. */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  const cut = text.slice(0, maxLength - 1)
  const lastSpace = cut.lastIndexOf(" ")
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1)}…`
}
