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

export interface ThemeFaq {
  question: string
  answer: string
}

/**
 * `seoTitle`/`seoDescription` override the generated search-result title and meta
 * description, for themes whose real search phrasing differs from the default pattern.
 * `intro` (paragraphs) and `faqs` are optional long-form copy shown below the quote grid;
 * the FAQs are also emitted as FAQPage structured data.
 */
export interface Theme {
  slug: ThemeSlug
  title: string
  description: string
  seoTitle?: string
  seoDescription?: string
  intro?: string[]
  faqs?: ThemeFaq[]
}

export const themes: Theme[] = [
  {
    slug: "karma",
    title: "Karma",
    description:
      "On action, duty, and letting go of the outcome: the Gita's central, inspiring teaching on doing your work without being ruled by its results.",
    seoTitle: "Bhagavad Gita Quotes on Karma: Shlokas with Meaning",
    seoDescription:
      "Bhagavad Gita quotes on karma: the famous karma shlokas, from 2.47 to 3.8, in Sanskrit with English translation and a simple meaning of each.",
    intro: [
      "Karma, in the Gita, simply means action. Krishna's teaching on it, often called karma yoga, isn't about cosmic payback. It's about how to act: fully, with care, and without letting the hope of a particular result decide your peace of mind.",
      "The best-known karma shloka is 2.47, karmaṇy evādhikāras te: you have a right to your work, never to its fruits. Around it sit verses on staying even-minded in success and failure (2.48), on why action is better than inaction (3.8), and on working for the good of the world rather than for yourself (3.25). Each quote here comes with its Sanskrit shloka, an English translation, and a plain explanation.",
    ],
    faqs: [
      {
        question: "What does Krishna say about karma in the Bhagavad Gita?",
        answer:
          "That you should act, and act well, but let go of attachment to the outcome. In 2.47 Krishna tells Arjuna he has a right to his duty but never to its fruits, and in 3.8 that action is better than inaction. The point isn't to stop caring. It's to stop making your peace depend on results you don't control.",
      },
      {
        question: "What is the most famous karma shloka in the Gita?",
        answer:
          "Chapter 2, verse 47: karmaṇy evādhikāras te mā phaleṣu kadācana, \"your right is to action alone, never to its fruits.\" It's the line most people mean when they quote the Gita on karma.",
      },
      {
        question: "What is karma yoga?",
        answer:
          "Karma yoga is the path of selfless action: doing your work as a duty or an offering, without attachment to what you get from it. The Gita calls yoga \"skill in action\" (2.50) and describes the evenness of mind behind it as yoga itself (2.48).",
      },
    ],
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
    seoTitle: "Bhagavad Gita Quotes on Peace and a Calm Mind",
    seoDescription:
      "Bhagavad Gita quotes on peace of mind, in Sanskrit with English translation and meaning: verses on stillness, equanimity, and an unshakable calm.",
    intro: [
      "The peace the Gita talks about isn't the absence of trouble. It's a steadiness that holds whatever is going on outside, like the ocean, which stays full and still however many rivers pour into it (2.70), or a lamp that doesn't flicker in a sheltered place (6.19).",
      "Krishna ties that peace to things you can actually practice: meeting pleasure and pain alike (2.14, 2.38), drawing the wandering mind back each time it strays (6.26), and letting go of craving and the sense of \"mine\" (2.71). Every quote here includes the Sanskrit verse, an English translation, and a simple meaning.",
    ],
    faqs: [
      {
        question: "What does the Bhagavad Gita say about peace?",
        answer:
          "That lasting peace comes from within, not from circumstances. In 2.66 Krishna says that without a disciplined mind there is no peace, \"and without peace, where is happiness?\" In 2.71 he says peace comes to the one who lets go of desire and possessiveness.",
      },
      {
        question: "Which Gita verse is best for peace of mind?",
        answer:
          "Many readers turn to 2.70, the ocean that stays still as rivers flow into it, and 6.26, on gently bringing a restless mind back. On hard days, 2.14 is a reminder that pleasure and pain come and go, and can be borne patiently.",
      },
    ],
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
    seoTitle: "Bhagavad Gita Quotes on Detachment, with Sanskrit",
    seoDescription:
      "Bhagavad Gita quotes on detachment, in Sanskrit with English translation and meaning: what the Gita really means by letting go, and what it doesn't.",
    intro: [
      "Detachment is one of the Gita's most misunderstood ideas. It doesn't mean owning nothing, feeling nothing, or walking away from your responsibilities. Krishna keeps sending Arjuna back into action. What he asks him to give up is attachment (saṅga in Sanskrit): the craving for a particular result, and the sense of \"mine\" that turns every loss into a wound.",
      "The verses here trace that idea, from acting without attachment to the fruits of action (2.47, 4.20), to the person who lives free of longing and finds peace (2.71), to acting like a lotus leaf, untouched by the water it rests on (5.10). Each is shown in the original Sanskrit with an English translation and its meaning.",
    ],
    faqs: [
      {
        question: "What does the Bhagavad Gita say about detachment?",
        answer:
          "That you should act fully but without clinging to the outcome. Detachment in the Gita isn't withdrawal from life. It's freedom from being controlled by desire. In 2.71 Krishna says the one who lives without longing, and without the sense of \"I\" and \"mine\", attains peace.",
      },
      {
        question: "Does detachment mean not caring?",
        answer:
          "No. The Gita's detached person still works, loves, and acts for the good of others (3.25). What drops away is the anxious grip on results. Krishna compares such a person to a lotus leaf, untouched by the water around it (5.10).",
      },
      {
        question:
          "Is \"Detachment is not that you should own nothing, but that nothing should own you\" from the Gita?",
        answer:
          "No. It's widely shared as a Bhagavad Gita quote, but it doesn't appear in the text. It's usually attributed to Ali ibn Abi Talib, though its origin is uncertain. It does echo the Gita's idea closely. For the Gita's own words, see 2.71 and 4.20.",
      },
    ],
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
