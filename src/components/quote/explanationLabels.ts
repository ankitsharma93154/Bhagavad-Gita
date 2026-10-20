/** Section labels for VerseExplanation, per page language. */
export interface ExplanationLabels {
  section: string
  moment: string
  meaning: string
  deeper: string
  life: string
}

export const englishExplanationLabels: ExplanationLabels = {
  section: "Understanding this verse",
  moment: "The moment",
  meaning: "What it means",
  deeper: "Going deeper",
  life: "In your life",
}

export const hindiExplanationLabels: ExplanationLabels = {
  section: "इस श्लोक को समझें",
  moment: "प्रसंग",
  meaning: "इसका अर्थ",
  deeper: "गहराई से",
  life: "आपके जीवन में",
}
