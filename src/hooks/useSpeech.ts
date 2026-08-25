import { useEffect, useRef, useState } from "react"

/** Name fragments that tend to mark a browser's higher-quality voices over its basic compact ones. */
const QUALITY_HINTS = ["Natural", "Neural", "Premium", "Enhanced", "Google"]

/**
 * The Web Speech API has no real gender field, so this is a guess from common voice names
 * across platforms (Chrome/Edge, Windows SAPI, macOS/iOS). Good enough in practice, not
 * guaranteed on every browser.
 */
const MALE_HINTS = [
  "Male",
  "David",
  "Mark",
  "Guy",
  "Ryan",
  "Daniel",
  "Alex",
  "Fred",
  "Aaron",
  "Arthur",
  "James",
  "Oliver",
  "Thomas",
]
const FEMALE_HINTS = ["Female", "Zira", "Samantha", "Susan", "Victoria", "Karen", "Moira", "Tessa", "Fiona"]

function isLikelyMale(voice: SpeechSynthesisVoice) {
  if (FEMALE_HINTS.some((hint) => voice.name.includes(hint))) return false
  return MALE_HINTS.some((hint) => voice.name.includes(hint))
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  if (voices.length === 0) return undefined
  const english = voices.filter((v) => v.lang.startsWith("en"))
  const pool = english.length > 0 ? english : voices
  const male = pool.filter(isLikelyMale)
  const searchPool = male.length > 0 ? male : pool
  const highQuality = searchPool.find((v) => QUALITY_HINTS.some((hint) => v.name.includes(hint)))
  return highQuality ?? searchPool.find((v) => v.lang === "en-US") ?? searchPool[0]
}

/**
 * Reads text aloud via the browser's built-in Web Speech API. No backend, no dependency,
 * and no cost, but voice quality depends on the visitor's OS/browser. Only ever used for
 * English text: most system voices have no real Sanskrit phoneme support and would
 * mispronounce it badly, so the Sanskrit text is never passed through this.
 */
export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const speakingRef = useRef(false)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    speakingRef.current = isSpeaking
  }, [isSpeaking])

  useEffect(() => {
    if (!("speechSynthesis" in window)) return

    // Voices often aren't loaded yet on first call (especially in Chrome), so cache the
    // list now and again whenever the browser finishes loading its full voice set.
    function loadVoices() {
      voicesRef.current = window.speechSynthesis.getVoices()
    }
    loadVoices()
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices)
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices)
  }, [])

  useEffect(() => {
    return () => {
      if (speakingRef.current) window.speechSynthesis.cancel()
    }
  }, [])

  function toggle(text: string) {
    if (!("speechSynthesis" in window)) return

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    const voice = pickVoice(voicesRef.current)
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    } else {
      utterance.lang = "en-US"
    }
    // A calmer, quieter reading pace, in keeping with the site's tone, rather than a brisk default read.
    utterance.rate = 0.85
    utterance.pitch = 0.95
    utterance.volume = 0.85
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

  return { isSpeaking, toggle }
}
