import { Link } from "react-router-dom"
import { QuoteGrid } from "@/components/quote/QuoteGrid"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { verses, verseSlug } from "@/data/verses"
import { getVerseHindi, hasHindiPage } from "@/data/versesHindi"
import { Seo, SITE_URL, buildBreadcrumbList } from "@/lib/seo"

const faqs = [
  {
    question: "भगवद गीता में कितने श्लोक हैं?",
    answer:
      "भगवद गीता में 18 अध्याय और 700 श्लोक हैं। यह महाभारत के भीष्म पर्व का हिस्सा है।",
  },
  {
    question: "गीता का सबसे प्रसिद्ध श्लोक कौन-सा है?",
    answer:
      "सबसे ज़्यादा दोहराया जाने वाला श्लोक शायद 2.47 है, 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन', जो कहता है कि अधिकार केवल कर्म पर है, फल पर नहीं। 4.7 'यदा यदा हि धर्मस्य' और 18.66 'सर्वधर्मान्परित्यज्य' भी बहुत प्रसिद्ध हैं।",
  },
  {
    question: "गीता का उपदेश किसने और किसे दिया?",
    answer:
      "गीता का उपदेश श्रीकृष्ण ने अर्जुन को कुरुक्षेत्र के युद्धक्षेत्र में दिया। यह युद्ध शुरू होने से ठीक पहले की बात है, जब अर्जुन अपने ही गुरुओं और संबंधियों से लड़ने को लेकर दुविधा में थे।",
  },
  {
    question: "क्या यहां दिए गए हिंदी अर्थ शब्दशः अनुवाद हैं?",
    answer:
      "हर श्लोक के पेज पर 'हिंदी अनुवाद' श्लोक का सीधा अनुवाद है। 'इसका अर्थ' और 'आपके जीवन में' वाले हिस्से व्याख्या हैं, शब्दशः अनुवाद नहीं। कार्ड पर दिखने वाली छोटी पंक्ति भी श्लोक से प्रेरित एक विचार है।",
  },
]

export function LanguagesHindi() {
  const fullVerses = verses.filter(hasHindiPage)
  const otherVerses = verses.filter((v) => v.quoteHindi && !hasHindiPage(v))
  const breadcrumbItems = [
    { name: "होम", path: "/" },
    { name: "हिंदी", path: "/languages/hindi" },
  ]

  return (
    <div className="container-page pt-8 sm:pt-12 pb-12 sm:pb-16" lang="hi">
      <Seo
        title="भगवद गीता के श्लोक हिंदी में अर्थ सहित | Gita Quotes in Hindi"
        description="भगवद गीता के प्रसिद्ध श्लोक हिंदी अर्थ के साथ: कर्मण्येवाधिकारस्ते, यदा यदा हि धर्मस्य और अन्य। हर श्लोक का संस्कृत पाठ, हिंदी अनुवाद, सरल अर्थ और जीवन में उपयोग।"
        path="/languages/hindi"
        alternates={[
          { lang: "en", path: "/quotes" },
          { lang: "hi", path: "/languages/hindi" },
        ]}
        structuredData={[
          buildBreadcrumbList(breadcrumbItems),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "भगवद गीता के श्लोक हिंदी में",
            itemListElement: fullVerses.map((v, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/hi/quotes/${verseSlug(v)}`,
              name: `भगवद गीता ${v.chapter}.${v.verse}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "hi",
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
        <p lang="en" className="text-xs font-semibold tracking-wider text-clay-deep uppercase">
          Bhagavad Gita Quotes in Hindi
        </p>
        <h1 className="bg-gradient-brand mt-2 bg-clip-text font-serif text-4xl leading-tight text-transparent sm:text-5xl">
          भगवद गीता के श्लोक, हिंदी में
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          यहां गीता के कुछ चुने हुए श्लोक हैं, उनके मूल संस्कृत पाठ, हिंदी अनुवाद और सरल अर्थ के
          साथ। हर श्लोक के साथ यह भी बताया गया है कि वह किस प्रसंग में कहा गया और आज के जीवन में
          उसका क्या मतलब हो सकता है।
        </p>
        <p lang="en" className="mt-3 text-sm text-ink-faint">
          Prefer English?{" "}
          <Link to="/quotes" hrefLang="en" className="text-clay-deep underline underline-offset-2">
            Browse the English collection
          </Link>
          .
        </p>
      </header>

      {fullVerses.length > 0 && (
        <section className="mt-12">
          <SectionHeading size="lg">अर्थ सहित श्लोक</SectionHeading>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fullVerses.map((v) => {
              const hindi = getVerseHindi(v)
              if (!hindi) return null
              return (
                <li key={v.id}>
                  <Link
                    to={`/hi/quotes/${verseSlug(v)}`}
                    className="focus-ring group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
                  >
                    <p className="bg-gradient-brand w-fit bg-clip-text text-xs font-semibold tracking-wider text-transparent">
                      अध्याय {v.chapter}, श्लोक {v.verse}
                    </p>
                    <p className="text-gold-shine mt-3 font-devanagari text-2xl leading-relaxed">
                      {hindi.name}
                    </p>
                    {v.quoteHindi && (
                      <p className="mt-3 font-serif text-lg leading-relaxed text-ink">
                        {v.quoteHindi}
                      </p>
                    )}
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                      {hindi.meaning.split(/\n\n+/)[0]}
                    </p>
                    <span className="mt-auto pt-4 text-sm font-semibold text-clay-deep transition-transform duration-200 group-hover:translate-x-0.5">
                      पूरा अर्थ पढ़ें →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {otherVerses.length > 0 && (
        <section className="mt-16">
          <SectionHeading size="lg">और श्लोक</SectionHeading>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            इन श्लोकों का पूरा हिंदी अर्थ अभी लिखा जा रहा है। तब तक यहां इनका हिंदी सार पढ़ें, और
            पूरी व्याख्या अंग्रेज़ी पेज पर।
          </p>
          <div className="mt-8">
            <QuoteGrid verses={otherVerses} defaultLang="hi" />
          </div>
        </section>
      )}

      <section className="reading-width mx-auto mt-16 space-y-6 text-ink-soft">
        <SectionHeading>अक्सर पूछे जाने वाले सवाल</SectionHeading>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-serif text-lg text-ink">{faq.question}</h3>
            <p className="mt-2 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
