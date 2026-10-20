import { useState } from "react"
import { Link } from "react-router-dom"
import { Check, Copy, MessageCircle } from "lucide-react"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { verses, verseSlug, type Verse } from "@/data/verses"
import { Seo, SITE_URL, buildBreadcrumbList } from "@/lib/seo"

/** Update each year, along with DATE_NOTE and DATE_NOTE_HI (the FAQ reuses DATE_NOTE). */
const YEAR = 2026
const DATE_NOTE =
  "In 2026, Gita Jayanti falls on Saturday, 19 December in most Indian calendars, when the Ekadashi tithi begins that morning. Some calendars follow the sunrise rule and mark it on Sunday, 20 December instead, so check your local panchang if you're fasting."

const DATE_NOTE_HI =
  "2026 में ज़्यादातर पंचांगों के अनुसार यह शनिवार, 19 दिसंबर को है, जबकि कुछ पंचांग उदया तिथि के नियम से रविवार, 20 दिसंबर बताते हैं। व्रत रखना हो तो अपने स्थानीय पंचांग से तिथि ज़रूर देख लें।"

const PATH = "/gita-jayanti"

/** Verses that suit the day: the best-known teachings, plus 18.78, the Gita's closing verse. */
const featuredIds = ["2-47", "4-7", "4-8", "18-66", "2-20", "6-5", "2-14", "18-78"]
const featuredVerses = featuredIds
  .map((id) => verses.find((v) => v.id === id))
  .filter((v): v is Verse => v !== undefined)

const wishes = [
  {
    hi: "गीता जयंती की हार्दिक शुभकामनाएँ। गीता का संदेश आपके हर कर्म को सही दिशा दे।",
    en: "Happy Gita Jayanti. May the Gita's message guide everything you do.",
  },
  {
    hi: "कर्म करते रहिए, फल की चिंता छोड़ दीजिए। गीता जयंती की शुभकामनाएँ।",
    en: "Keep doing your work and let go of worrying about the result. Happy Gita Jayanti.",
  },
  {
    hi: "इस गीता जयंती पर आपका मन शांत रहे और हर निर्णय में स्पष्टता हो।",
    en: "This Gita Jayanti, may your mind stay steady and your choices clear.",
  },
  {
    hi: "जैसे कृष्ण ने अर्जुन को राह दिखाई, वैसे ही गीता आपको हर उलझन में राह दिखाए।",
    en: "Krishna showed Arjuna the way when he was lost. May the Gita do the same for you, whatever you're facing.",
  },
  {
    hi: "सुख-दुख में एक जैसे रहना ही गीता की सीख है। गीता जयंती मंगलमय हो।",
    en: "Staying even through joy and sorrow is what the Gita teaches. Wishing you a blessed Gita Jayanti.",
  },
  {
    hi: "आपको और आपके परिवार को मोक्षदा एकादशी और गीता जयंती की शुभकामनाएँ।",
    en: "Warm wishes to you and your family on Mokshada Ekadashi and Gita Jayanti.",
  },
]

const faqs = [
  {
    question: `When is Gita Jayanti ${YEAR}?`,
    answer: DATE_NOTE,
  },
  {
    question: "Why is Gita Jayanti celebrated?",
    answer:
      "It marks the day Krishna is traditionally said to have spoken the Bhagavad Gita to Arjuna, on the battlefield of Kurukshetra just before the war began. The Gita has 700 verses across 18 chapters.",
  },
  {
    question: "What is Mokshada Ekadashi?",
    answer:
      "It's the Ekadashi (eleventh day) of the bright half of the month of Margashirsha. Gita Jayanti is observed on the same day, and many people keep the Ekadashi fast alongside it.",
  },
  {
    question: "How do people observe Gita Jayanti?",
    answer:
      "Mostly by reading or reciting the Gita. Some read all 18 chapters in one sitting, others pick one chapter or a single verse to sit with. Kurukshetra holds a large Gita festival around the date, and temples hold recitations and talks.",
  },
]

function whatsappUrl(text: string): string {
  return `https://wa.me/?text=${encodeURIComponent(`${text}\n${SITE_URL}${PATH}`)}`
}

function WishCard({ hi, en }: { hi: string; en: string }) {
  const [copied, setCopied] = useState<"hi" | "en" | null>(null)

  async function copy(lang: "hi" | "en") {
    try {
      await navigator.clipboard.writeText(lang === "hi" ? hi : en)
      setCopied(lang)
      setTimeout(() => setCopied(null), 1800)
    } catch {
      // Clipboard blocked: the text is still on screen to select by hand.
    }
  }

  const chip =
    "gradient-border-chip focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:text-clay-deep"

  return (
    <li className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
      {(["hi", "en"] as const).map((lang) => (
        <div key={lang} className={lang === "en" ? "mt-4 border-t border-line-soft pt-4" : undefined}>
          <p
            lang={lang}
            className={
              lang === "hi" ? "font-devanagari text-lg leading-relaxed text-ink" : "font-serif text-ink"
            }
          >
            {lang === "hi" ? hi : en}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" className={chip} onClick={() => void copy(lang)}>
              {copied === lang ? (
                <Check className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden />
              )}
              {copied === lang ? "Copied" : lang === "hi" ? "Copy Hindi" : "Copy English"}
            </button>
            <a
              href={whatsappUrl(lang === "hi" ? hi : en)}
              target="_blank"
              rel="noopener noreferrer"
              className={chip}
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      ))}
    </li>
  )
}

export function GitaJayanti() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: `Gita Jayanti ${YEAR}`, path: PATH },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16">
      <Seo
        title={`Gita Jayanti ${YEAR}: Quotes and Wishes in Hindi and English`}
        description={`Gita Jayanti ${YEAR} (गीता जयंती) date, what the day marks, and Bhagavad Gita quotes and wishes in Hindi and English to share on WhatsApp.`}
        path={PATH}
        structuredData={[
          buildBreadcrumbList(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Bhagavad Gita quotes for Gita Jayanti ${YEAR}`,
            itemListElement: featuredVerses.map((v, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/quotes/${verseSlug(v)}`,
              name: `Bhagavad Gita ${v.chapter}.${v.verse}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mx-auto mt-6 max-w-2xl text-center">
        <p lang="hi" className="font-devanagari text-lg text-clay-deep">
          गीता जयंती {YEAR}
        </p>
        <h1 className="bg-gradient-brand mt-2 bg-clip-text font-serif text-4xl text-transparent sm:text-5xl">
          Gita Jayanti {YEAR}: Quotes and Wishes
        </h1>
        <p className="mt-4 text-ink-soft">
          Gita Jayanti marks the day the Bhagavad Gita was spoken. Here's when it falls this year,
          a few verses worth reading on the day, and wishes in Hindi and English you can send.
        </p>
      </header>

      <section className="reading-width mx-auto mt-12 space-y-4 text-ink-soft">
        <SectionHeading>What Gita Jayanti marks</SectionHeading>
        <p className="leading-relaxed">
          By tradition, this is the day Krishna spoke the Gita to Arjuna at Kurukshetra, with both
          armies already lined up and Arjuna refusing to fight. It's observed on Mokshada Ekadashi,
          the eleventh day of the bright half of Margashirsha. That month gets a mention in the Gita
          itself: in 10.35, Krishna says that of the months, he is Margashirsha.
        </p>
        <p className="leading-relaxed">
          There's no single way to mark it. Most people read from the Gita, whether that's all 18
          chapters, one chapter, or one verse read slowly.
        </p>
        <div lang="hi" className="rounded-2xl bg-teal-soft/50 px-5 py-4">
          <p className="text-xs font-semibold tracking-[0.15em] text-teal-deep">हिंदी में</p>
          <p className="mt-2 leading-relaxed">
            गीता जयंती वह दिन है जब, परंपरा के अनुसार, श्रीकृष्ण ने कुरुक्षेत्र में अर्जुन को भगवद
            गीता का उपदेश दिया था। यह मार्गशीर्ष मास के शुक्ल पक्ष की एकादशी, यानी मोक्षदा एकादशी
            को मनाई जाती है। {DATE_NOTE_HI}{" "}
            <Link to="/languages/hindi" className="text-clay-deep underline underline-offset-2">
              गीता के श्लोक हिंदी अर्थ सहित पढ़ें
            </Link>
            ।
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-clay bg-paper-dim p-5">
          <p className="text-xs font-semibold tracking-wide text-clay-deep uppercase">
            Date in {YEAR}
          </p>
          <p className="mt-2 leading-relaxed text-ink">{DATE_NOTE}</p>
        </div>
      </section>

      <section className="mt-16">
        <div className="text-center">
          <SectionHeading size="lg">Bhagavad Gita quotes for Gita Jayanti</SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Each card switches between English and Hindi, and the share button turns it into an
            image for WhatsApp status or Instagram.
          </p>
        </div>
        <div className="mt-8">
          <QuoteGrid verses={featuredVerses} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="text-center">
          <SectionHeading size="lg">Gita Jayanti wishes in Hindi and English</SectionHeading>
          <p lang="hi" className="mt-4 font-devanagari text-ink-soft">
            गीता जयंती की शुभकामनाएँ, हिंदी और अंग्रेज़ी में
          </p>
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {wishes.map((wish) => (
            <WishCard key={wish.en} {...wish} />
          ))}
        </ul>
      </section>

      <section className="reading-width mx-auto mt-16 space-y-6 text-ink-soft">
        <SectionHeading>Common questions</SectionHeading>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-serif text-lg text-ink">{faq.question}</h3>
            <p className="mt-2 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
        <p className="pt-4 leading-relaxed">
          Want more than eight verses?{" "}
          <Link to="/quotes" className="text-clay-deep underline underline-offset-2">
            Browse the full collection
          </Link>{" "}
          or{" "}
          <Link to="/languages/hindi" className="text-clay-deep underline underline-offset-2">
            read them in Hindi
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
