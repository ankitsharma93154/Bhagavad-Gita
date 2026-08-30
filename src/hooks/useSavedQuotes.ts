import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "gita-quotes:saved"
const STORAGE_EVENT = "gita-quotes:saved-changed"

function readSaved(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : []
  } catch {
    return []
  }
}

function writeSaved(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    window.dispatchEvent(new Event(STORAGE_EVENT))
  } catch {
    // localStorage unavailable (private mode, disabled storage) — saving silently no-ops
  }
}

/** Saved-quote ids persisted to localStorage, kept in sync across components in the same tab. */
export function useSavedQuotes() {
  // Starts empty so the first client render matches the prerendered HTML (which had no
  // localStorage); the real list is read in the effect below, right after mount.
  const [savedIds, setSavedIds] = useState<string[]>([])

  useEffect(() => {
    setSavedIds(readSaved())
    const sync = () => setSavedIds(readSaved())
    window.addEventListener(STORAGE_EVENT, sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener(STORAGE_EVENT, sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds])

  const toggleSaved = useCallback((id: string) => {
    const current = readSaved()
    const next = current.includes(id)
      ? current.filter((existing) => existing !== id)
      : [...current, id]
    writeSaved(next)
    setSavedIds(next)
  }, [])

  return { savedIds, isSaved, toggleSaved }
}
