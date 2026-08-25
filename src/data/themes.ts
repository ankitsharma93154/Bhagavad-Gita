export type ThemeSlug =
  | "karma"
  | "motivation"
  | "positive-thinking"
  | "success"
  | "peace"
  | "wisdom"
  | "courage"
  | "detachment"
  | "purpose"
  | "life"
  | "heart-touching"

export interface Theme {
  slug: ThemeSlug
  title: string
  description: string
}

export const themes: Theme[] = [
  {
    slug: "karma",
    title: "Karma",
    description:
      "On action, duty, and letting go of the outcome: the Gita's central, inspiring teaching on doing your work without being ruled by its results.",
  },
  {
    slug: "motivation",
    title: "Motivation",
    description:
      "Inspiring, motivational verses that steady resolve and rekindle effort, for the days willpower runs thin.",
  },
  {
    slug: "positive-thinking",
    title: "Positive Thinking",
    description:
      "On steadying the mind, renewal, and meeting setbacks without losing your footing.",
  },
  {
    slug: "success",
    title: "Success",
    description:
      "What the Gita considers true success: even-mindedness and disciplined effort, not just outcomes.",
  },
  {
    slug: "peace",
    title: "Peace",
    description:
      "Verses on stillness of mind, equanimity, and lasting happiness: the kind of calm that isn't shaken by circumstance.",
  },
  {
    slug: "wisdom",
    title: "Wisdom",
    description:
      "On the nature of the self, discernment, and seeing clearly beneath the surface of things.",
  },
  {
    slug: "courage",
    title: "Courage",
    description:
      "For facing difficulty, uncertainty, and inner struggle without turning away.",
  },
  {
    slug: "detachment",
    title: "Detachment",
    description:
      "On releasing attachment and craving. Not indifference, but freedom from being controlled by desire.",
  },
  {
    slug: "purpose",
    title: "Purpose",
    description:
      "On duty, one's own path, and living in alignment with who you truly are.",
  },
  {
    slug: "life",
    title: "Life",
    description:
      "Broader reflections on the self, impermanence, and how to meet everyday life with steadiness.",
  },
  {
    slug: "heart-touching",
    title: "Heart Touching",
    description:
      "The verses that tend to land hardest: on being carried, on impermanence, and on the quiet strength underneath it all.",
  },
]

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug)
}
