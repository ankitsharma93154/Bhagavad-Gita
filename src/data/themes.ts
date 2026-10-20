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
  | "students"
  | "anger"
  | "death-and-loss"
  | "love"
  | "stress"
  | "short-quotes"
  | "krishna"

export interface ThemeFaq {
  question: string
  answer: string
}

/**
 * `seoTitle`/`seoDescription` override the generated search-result title and meta
 * description, for themes whose real search phrasing differs from the default pattern.
 * `intro` (paragraphs) and `faqs` are optional long-form copy shown below the quote grid;
 * the FAQs are also emitted as FAQPage structured data.
 *
 * Situational themes ("for students", "on anger") match how people actually search, rather
 * than the abstract topics verses are tagged with. They set `verseIds`, a hand-picked list,
 * instead of being matched through each verse's `categories`, and `heading` for an H1 that
 * reads naturally ("Bhagavad Gita Quotes for Students"). Each needs its own intro so the
 * page isn't a thin reshuffle of verses shown elsewhere.
 */
export interface Theme {
  slug: ThemeSlug
  title: string
  description: string
  seoTitle?: string
  seoDescription?: string
  intro?: string[]
  faqs?: ThemeFaq[]
  heading?: string
  verseIds?: string[]
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
  {
    slug: "students",
    title: "Students",
    heading: "Bhagavad Gita Quotes for Students",
    description:
      "For exams, focus and a restless mind: verses on effort, discipline and not being crushed by results.",
    seoTitle: "Bhagavad Gita Quotes for Students, with Meaning",
    seoDescription:
      "Bhagavad Gita quotes for students: verses on focus, exam pressure, discipline and a restless mind, in Sanskrit with English translation and meaning.",
    verseIds: ["2-47", "2-7", "6-5", "6-26", "6-34", "6-35", "6-17", "2-40", "4-34", "3-8", "4-39"],
    intro: [
      "A lot of the Gita reads like advice for someone under pressure, which makes sense. Arjuna is a student too. In 2.7 he tells Krishna, \"I am your student. Teach me,\" and the rest of the conversation is the lesson.",
      "The verses here are the ones that fit a student's life most directly: putting your effort into the work instead of the marks (2.47), training a mind that keeps wandering off (6.26, 6.35), keeping sleep, food and study in balance (6.17), and knowing that no honest effort is wasted (2.40). Each one comes with the Sanskrit, an English translation and a plain explanation.",
    ],
    faqs: [
      {
        question: "Which Bhagavad Gita verse is best for students?",
        answer:
          "2.47 is the one most students reach for: your right is to the work, never to its results. It doesn't mean results don't matter. It means your focus belongs on the preparation, which is the part you control. 6.5, on lifting yourself by your own mind, is a close second.",
      },
      {
        question: "What does the Gita say about concentration?",
        answer:
          "That the mind is restless and hard to hold, and Arjuna says so himself in 6.34. Krishna agrees, and says it can be trained through steady practice and letting go (6.35). In 6.26 he gives the method: each time the mind wanders, bring it back.",
      },
    ],
  },
  {
    slug: "anger",
    title: "Anger",
    heading: "Bhagavad Gita Quotes on Anger",
    description:
      "How anger starts, what it does to judgment, and how the Gita says to get ahead of it.",
    seoTitle: "Bhagavad Gita Quotes on Anger: Krodha Shlokas with Meaning",
    seoDescription:
      "Bhagavad Gita quotes on anger (krodha): 2.62, 2.63, 3.37 and 16.21 in Sanskrit with English translation, and what they say about controlling anger.",
    verseIds: ["2-62", "2-63", "3-37", "16-21", "2-56", "6-7", "12-15", "2-70"],
    intro: [
      "The Gita's best-known lines on anger describe a chain. In 2.62 and 2.63 Krishna traces it step by step: dwelling on something leads to attachment, then desire, then anger, then confusion, lost memory, lost judgment and ruin. The useful part is where it starts. Anger begins long before you feel angry.",
      "Elsewhere he names anger as one of three gates to ruin, along with lust and greed (16.21), and calls desire and anger the real enemy (3.37). The other verses here describe the opposite: a mind that isn't knocked around by praise and insult (6.7), and someone who neither disturbs the world nor is disturbed by it (12.15).",
    ],
    faqs: [
      {
        question: "What does Krishna say about anger in the Gita?",
        answer:
          "That it grows out of blocked desire, and that it destroys judgment. In 2.63 he says anger leads to delusion, delusion to confused memory, and confused memory to the loss of discernment. In 16.21 he calls anger one of the three gates to hell, with lust and greed.",
      },
      {
        question: "How do you control anger according to the Gita?",
        answer:
          "By catching it early. The chain in 2.62 starts with simply dwelling on something, and that's the easiest point to step in. The Gita's broader answer is a steadier mind, one that meets pleasure and pain, praise and insult, the same way (2.56, 6.7).",
      },
    ],
  },
  {
    slug: "death-and-loss",
    title: "Death and Loss",
    heading: "Bhagavad Gita Quotes on Death and Loss",
    description:
      "For grief and the fear of death: the verses Krishna speaks to a man overwhelmed by loss.",
    seoTitle: "Bhagavad Gita Quotes on Death, Grief and Loss",
    seoDescription:
      "Bhagavad Gita quotes on death and grief: verses on the soul, loss and letting go, in Sanskrit with English translation. Comforting shlokas for hard days.",
    verseIds: ["2-20", "2-22", "2-23", "2-27", "2-13", "2-11", "2-14", "15-7"],
    intro: [
      "The Gita starts with grief. Arjuna looks across the battlefield at his teachers and relatives and can't go on, and Krishna's first long answer is about death. That's where the verses on this page come from, all of them but one in chapter two.",
      "Krishna's argument is that death touches the body, not the self. The self was never born and won't die (2.20). It changes bodies the way a person changes clothes (2.22). Nothing physical can cut or burn it (2.23). The verses are honest about loss too: what is born will die (2.27), and the wise learn not to be undone by it (2.11).",
    ],
    faqs: [
      {
        question: "What does the Bhagavad Gita say about death?",
        answer:
          "That death is the end of the body, not of the self. In 2.20 Krishna says the self is never born and never dies, and in 2.22 he compares death to taking off worn-out clothes and putting on new ones. In 2.27 he adds that death is certain for whatever is born.",
      },
      {
        question: "Which Gita verses are read when someone dies?",
        answer:
          "Verses from chapter two are the ones most often read and shared, especially 2.20 (na jayate mriyate va) and 2.22 (vasansi jirnani yatha vihaya). Some families read the whole Gita during the days of mourning.",
      },
    ],
  },
  {
    slug: "love",
    title: "Love and Relationships",
    heading: "Bhagavad Gita Quotes on Love and Relationships",
    description:
      "What the Gita says about love: not romance, but kindness, fairness and seeing yourself in others.",
    seoTitle: "Bhagavad Gita Quotes on Love and Relationships",
    seoDescription:
      "Bhagavad Gita quotes on love and relationships: verses on compassion, devotion and seeing others as yourself, in Sanskrit with English translation.",
    verseIds: ["12-13", "6-32", "12-15", "9-26", "9-29", "5-18", "6-30", "9-22"],
    intro: [
      "The Gita isn't a book about romantic love, and it's worth saying that up front, since plenty of quotes shared as \"Gita on love\" aren't from it. What it does have is a lot to say about how to treat people, and about the love between a person and the divine.",
      "The clearest relationship advice is in 12.13: hate no one, be friendly and compassionate, and be forgiving. In 6.32 Krishna says the highest yogi feels other people's pain and joy as their own. And on the devotional side, he describes a love that accepts the smallest offering, a leaf or a flower, given with a full heart (9.26).",
    ],
    faqs: [
      {
        question: "Does the Bhagavad Gita talk about love?",
        answer:
          "Yes, though not romantic love. It talks about compassion and friendliness toward every being (12.13), feeling others' joy and pain as your own (6.32), and the love between a devotee and the divine (9.26, 9.29).",
      },
      {
        question: "What does the Gita say about relationships?",
        answer:
          "It doesn't give rules for relationships, but its picture of a good person works as a guide: someone who hates no one, who forgives, who doesn't unsettle the people around them and isn't easily unsettled by them (12.13, 12.15).",
      },
    ],
  },
  {
    slug: "stress",
    title: "Stress and Anxiety",
    heading: "Bhagavad Gita Quotes for Stress and Anxiety",
    description:
      "For overthinking, pressure and worry about results: verses on a steadier mind.",
    seoTitle: "Bhagavad Gita Quotes for Stress, Anxiety and Overthinking",
    seoDescription:
      "Bhagavad Gita quotes for stress and anxiety: verses on worry, overthinking and staying calm under pressure, in Sanskrit with English translation.",
    verseIds: ["2-14", "2-47", "2-48", "2-38", "6-26", "6-35", "2-56", "6-19", "18-58"],
    intro: [
      "Arjuna on the battlefield is about as anxious as a person gets. His limbs give way, his mouth goes dry and his bow slips from his hand (1.29 and 1.30). The Gita is Krishna's answer to that state, so it has more to say about anxiety than you might expect from a text this old.",
      "Most of it comes back to one idea: a lot of stress comes from tying your peace to results you can't control. Krishna's advice is to put your full effort into the work and loosen your grip on the outcome (2.47, 2.48), to remember that pleasure and pain both pass (2.14), and to keep bringing a wandering mind back, without drama, every time it drifts (6.26).",
    ],
    faqs: [
      {
        question: "What does the Bhagavad Gita say about anxiety?",
        answer:
          "That much of it comes from attachment to outcomes. In 2.47 Krishna says your right is to the work, not its results, and in 2.48 he calls evenness in success and failure the real practice. In 2.14 he says pain and pleasure come and go, and can be borne patiently.",
      },
      {
        question: "Which Gita verse helps with overthinking?",
        answer:
          "6.26 is the practical one: whenever the mind wanders, bring it back. 6.35 admits the mind is hard to control but says it can be trained through practice and letting go. If the overthinking keeps circling a result, read 2.47 alongside them.",
      },
    ],
  },
  {
    slug: "short-quotes",
    title: "Short Quotes for Status",
    heading: "Short Bhagavad Gita Quotes for WhatsApp Status",
    description:
      "One-line Gita quotes in English and Hindi, short enough for a status or a caption.",
    seoTitle: "Short Bhagavad Gita Quotes for WhatsApp Status",
    seoDescription:
      "Short Bhagavad Gita quotes for WhatsApp status and Instagram captions, in English and Hindi, each with the Sanskrit verse it comes from.",
    verseIds: ["6-40", "2-20", "9-26", "2-69", "2-7", "2-71", "4-11", "5-18", "7-7", "2-3", "6-19", "2-47"],
    intro: [
      "These are the shortest lines in the collection, the ones that fit in a status, a caption or a lock screen. Each card switches between English and Hindi, and the share button turns any of them into an image sized for a WhatsApp status or an Instagram story.",
      "One thing worth knowing before you post: the short line on each card is a reflection on the verse, not a word-for-word translation. Tap through to any verse for the Sanskrit and a plain translation, so you know exactly what the original says.",
    ],
    faqs: [
      {
        question: "Are these exact quotes from the Gita?",
        answer:
          "They're short reflections on real verses, written to be easy to share. Each one links to its verse, where you'll find the Sanskrit and a direct translation.",
      },
      {
        question: "How do I share a quote as a WhatsApp status?",
        answer:
          "Tap the share button on any card. It makes an image of the quote in English or Hindi, which you can save or send straight to WhatsApp.",
      },
    ],
  },
  {
    slug: "krishna",
    title: "Krishna Quotes",
    heading: "Krishna Quotes from the Bhagavad Gita",
    description:
      "The verses where Krishna speaks about himself, and about those who turn to him.",
    seoTitle: "Krishna Quotes from the Bhagavad Gita, with Meaning",
    seoDescription:
      "Lord Krishna quotes from the Bhagavad Gita: his best-known words to Arjuna, in Sanskrit with English translation and meaning.",
    verseIds: ["4-7", "4-8", "18-66", "7-7", "10-20", "15-15", "9-22", "4-11", "9-26", "10-8", "18-65", "11-32"],
    intro: [
      "Almost all of the Gita is Krishna speaking. Arjuna asks the questions, and Sanjaya narrates the scene for the blind king Dhritarashtra, but nearly every verse people quote is Krishna's answer.",
      "This page gathers the verses where he talks about himself: why he takes birth again and again (4.7, 4.8), how everything is strung on him like pearls on a thread (7.7), how he sits in every heart (10.20, 15.15), and the promises he makes to anyone who turns to him, from carrying what they lack (9.22) to his last words on surrender (18.66).",
    ],
    faqs: [
      {
        question: "What are Krishna's most famous words in the Gita?",
        answer:
          "2.47, on doing your work without claiming its fruits, is the most quoted. About himself, the best known are 4.7 and 4.8, on taking birth whenever righteousness declines, and 18.66, where he asks Arjuna to take refuge in him alone.",
      },
      {
        question: "Who did Krishna speak the Gita to?",
        answer:
          "To Arjuna, his friend and cousin, on the battlefield of Kurukshetra just before the war. Arjuna had lost the will to fight, and the Gita is their conversation.",
      },
    ],
  },
]

/** Themes matched through verse categories: the ones verses are tagged with and /quotes filters by. */
export const topicalThemes = themes.filter((t) => !t.verseIds)
/** Hand-picked pages for how people search ("for students", "on anger"). */
export const situationThemes = themes.filter((t) => t.verseIds)

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug)
}
