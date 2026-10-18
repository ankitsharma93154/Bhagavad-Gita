import type { ThemeSlug } from "./themes"

/**
 * Content model for a single Bhagavad Gita verse.
 *
 * `english` is a plain translation of the verse. `meaning` is a short,
 * accessible explanation of what it points to. `quote` is a short,
 * quote-friendly interpretation for everyday reading, not a literal
 * translation. These three are kept distinct in the UI, see the About page.
 *
 * `moment`, `simpleMeaning`, `deeperMeaning`, and `lifeApplication` are the
 * optional sections of the verse detail page's reading path: where the verse
 * sits in the conversation (who's speaking, what was just asked; real
 * Mahabharata context, never invented), what the verse is getting at in
 * plain words (an interpretation, not a second translation, shown in place
 * of `meaning`, which is the short card version), one idea the verse turns
 * on that the other sections don't cover (collapsed by default), and one
 * concrete thing to try in ordinary life. Each should add something the
 * others and the translation don't. They're optional so unwritten verses
 * still render cleanly. Split paragraphs with a blank line. All of it follows
 * voice_rules.md.
 *
 * Each verse's illustration lives in scripts/verse-art/drawings.mjs, keyed by
 * the same id.
 *
 * `relatedVerses` is an optional hand-picked list of verse ids. When omitted,
 * the detail page falls back to shared-theme matching (see getRelatedVersesFor).
 *
 * `hindi` is a plain Hindi translation of the verse (parallel to `english`)
 * and isn't populated yet. `quoteHindi` is a Hindi rendering of `quote`,
 * shown by the Hindi/English toggle on the quote card.
 *
 * Array order is curated, not chronological: the most well-known and most
 * searched verses lead the list, since Home's "More reflections" and the
 * default Quotes/Theme browse order both surface array order directly.
 */
export interface Verse {
  id: string
  chapter: number
  verse: number
  sanskrit: string
  transliteration?: string
  english: string
  hindi?: string
  meaning: string
  quote: string
  quoteHindi?: string
  categories: ThemeSlug[]
  moment?: string
  simpleMeaning?: string
  deeperMeaning?: string
  lifeApplication?: string
  relatedVerses?: string[]
}

export const verses: Verse[] = [
  {
    id: "2-47",
    chapter: 2,
    verse: 47,
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration:
      "karmaṇy-evādhikāras te mā phaleṣu kadācana, mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    english:
      "Your right is to action alone, never to its fruits. Don't let the fruits of action be your motive, and don't be attached to not acting either.",
    meaning:
      "Give your full effort to the work itself. The outcome is never fully in your hands, so anchoring your peace to it only creates anxiety. This isn't motivation to give up. It's freedom to act wholeheartedly.",
    quote: "You have the right to your actions, never to the fruits of those actions.",
    quoteHindi: "आपका अधिकार केवल अपने कर्म पर है, कभी उसके फल पर नहीं।",
    categories: ["karma", "purpose", "detachment"],
    moment:
      "Krishna has finished arguing from Arjuna's duty as a warrior and switched to teaching the yoga of action. He's just warned against people who perform rituals only for the rewards they promise.",
    simpleMeaning:
      "Your job is the effort, not the outcome. The result depends on too many things outside you to be the measure of whether you acted well. That isn't permission to stop caring. It's a way to care about the right part.",
    deeperMeaning:
      "The verse makes four separate moves in two lines. Act. Don't claim the fruit. Don't let the fruit be your motive. Don't fall back on doing nothing.\n\nThe last one matters because it blocks the easy misreading. Letting go of results isn't a reason to stop working. It's what frees all of your attention for the work.",
    lifeApplication:
      "Before an interview or an exam, write down what's actually in your hands: the hours, the practice, how honestly you prepare. Put everything into that list. Then treat the result as information when it arrives, not as a verdict you spent weeks bracing for.",
  },
  {
    id: "2-22",
    chapter: 2,
    verse: 22,
    sanskrit:
      "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
    transliteration:
      "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi, tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",
    english:
      "As a person casts off worn-out clothes and puts on new ones, so the self casts off worn-out bodies and enters into new ones.",
    meaning:
      "One of the most quoted lines in the Gita, and it's a simple image. What you wear isn't what you are. The body changes the way clothing does. What's underneath continues on.",
    quote: "The body is worn like clothing. What's underneath it doesn't end.",
    quoteHindi: "शरीर वस्त्र की तरह पहना जाता है। उसके भीतर जो है, वह कभी समाप्त नहीं होता।",
    categories: ["wisdom", "peace", "life", "heart-touching"],
    moment:
      "Arjuna is grieving at the thought of killing his teachers and relatives. Krishna's first answer is about what death actually touches, and this image comes in the middle of it.",
    simpleMeaning:
      "Death isn't the end of you, only of the body you're wearing. Krishna uses the most ordinary comparison he can find to make that feel less frightening.",
    deeperMeaning:
      "The image is ordinary on purpose. Nobody mourns an old shirt or thinks they ended when it was thrown out. By choosing clothing, Krishna moves death out of the category of destruction and into the category of change.\n\nYou don't have to accept rebirth to notice the question underneath it: where do you actually place your identity?",
    lifeApplication:
      "When someone you love is aging or ill, try holding this image alongside the grief rather than instead of it. The change you're watching is real and so is the loss. The verse just offers a place to stand where that change isn't the whole story.",
  },
  {
    id: "18-66",
    chapter: 18,
    verse: 66,
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration:
      "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja, ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    english:
      "Abandon all duties and take refuge in me alone. I will free you from all sins. Do not grieve.",
    meaning:
      "One of the Gita's most quoted lines: an offer of rest for anyone who's been carrying every responsibility alone. It's safe to let go and trust.",
    quote: "Let go of what you're carrying alone. Surrender, and don't be afraid.",
    quoteHindi: "जो बोझ आप अकेले उठा रहे हैं, उसे छोड़ दें। समर्पण करें, और चिंता न करें।",
    categories: ["peace", "courage", "detachment", "heart-touching"],
    moment:
      "This is near the very end of the conversation. Krishna has just told Arjuna to think it all over and choose for himself. Then, because Arjuna is dear to him, he gives one last and most personal teaching, and this is its heart.",
    simpleMeaning:
      "You don't have to carry everything alone. After all the instructions, the last one is to trust, and to let go of the fear that comes from trying to get every duty exactly right by yourself.",
    deeperMeaning:
      "It's usually called the Gita's final teaching, and it's notable for what it doesn't ask. After seventeen chapters of practices and paths, the last word is about trust rather than technique.\n\n'Abandon all duties' doesn't mean stop acting, since Arjuna goes on to fight. It means stop treating the whole weight of right and wrong as something you have to carry and calculate alone.",
    lifeApplication:
      "If you're the person who feels everything collapses the moment you stop straining, notice that feeling the next time it peaks. Pick one thing you're gripping, do your part of it, and consciously hand the rest over. Then see whether anything actually falls.",
  },
  {
    id: "2-3",
    chapter: 2,
    verse: 3,
    sanskrit:
      "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
    transliteration:
      "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate, kṣudraṁ hṛdaya-daurbalyaṁ tyaktvottiṣṭha parantapa",
    english:
      "Do not give in to this weakness, Arjuna. It doesn't suit you. Cast off this small-hearted faintness and rise up, conqueror of enemies.",
    meaning:
      "This is Krishna's first response to Arjuna's despair on the battlefield, and it's blunt. Not comfort, but a direct call to stand back up. Sometimes what's needed isn't sympathy. It's someone telling you plainly that you're better than the moment you're stuck in.",
    quote: "Don't give in to this weakness. Rise up. It doesn't suit you.",
    quoteHindi: "इस कमज़ोरी के आगे न झुकें। उठ खड़े हों, यह आप पर शोभा नहीं देती।",
    categories: ["courage", "motivation"],
    moment:
      "At the end of chapter one, Arjuna dropped his bow and sat down in the chariot, weeping. These are among Krishna's very first words to him, and they aren't gentle.",
    simpleMeaning:
      "Arjuna's collapse isn't who he is. It's a passing weakness, and Krishna's first move is to say so plainly and tell him to stand up.",
    deeperMeaning:
      "Krishna opens with a challenge, not comfort. The long teaching comes later. He calls Arjuna's state 'kshudram hridaya-daurbalyam', a petty weakness of the heart, which treats it as a temporary shrinking rather than his real character.\n\nArjuna doesn't stand up yet. He argues back, and that argument is what opens the rest of the Gita.",
    lifeApplication:
      "Sometimes the kind thing to say to a friend who's stuck isn't 'that sounds hard.' It's 'This isn't you. Get up.' It only works coming from someone who clearly believes in them, so check which one you're offering before you say it.",
  },
  {
    id: "2-14",
    chapter: 2,
    verse: 14,
    sanskrit:
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    transliteration:
      "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ, āgamāpāyino 'nityās tāṁs titikṣasva bhārata",
    english:
      "The contact between the senses and their objects gives rise to heat and cold, pleasure and pain. They come and go and do not last, so bear them patiently, Arjuna.",
    meaning:
      "Sensation and circumstance are always in motion. Neither discomfort nor pleasure is permanent, and steadiness comes from not over-identifying with either while it passes through.",
    quote: "This too shall pass. Meet both joy and sorrow with the same steady heart.",
    quoteHindi: "यह भी बीत जाएगा। सुख और दुख दोनों को एक ही स्थिर मन से स्वीकार करें।",
    categories: ["peace", "wisdom", "life", "heart-touching"],
    moment:
      "Krishna has just told Arjuna that the self passes through childhood, youth and old age without being troubled. Now he brings it down from death to the everyday: the sensations that come and go all day long.",
    simpleMeaning:
      "Every feeling that comes through the senses is temporary, the pleasant ones as much as the painful ones. Steadiness comes from letting them pass instead of being swept along by each one.",
    deeperMeaning:
      "The word Krishna uses is 'titikshasva', bear it patiently. It's a skill word, not a feeling word. He calls these experiences 'agamapayinah', things whose nature is to arrive and leave.\n\nThe verse works on pleasure as much as pain. The good stretch is just as temporary as the bad one.",
    lifeApplication:
      "In a rough week, try telling yourself plainly that this is weather, not climate. Then do the same in a great week. Holding the good stretch a little loosely is what keeps the next bad one from feeling like a fall.",
  },
  {
    id: "6-30",
    chapter: 6,
    verse: 30,
    sanskrit:
      "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति। तस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
    transliteration:
      "yo māṁ paśyati sarvatra sarvaṁ ca mayi paśyati, tasyāhaṁ na praṇaśyāmi sa ca me na praṇaśyati",
    english:
      "One who sees me in everything, and sees everything within me, is never separated from me, and I am never separated from them.",
    meaning:
      "A verse about a connection that doesn't depend on circumstances changing. Once you see the same thread running through everything, nothing can fully cut you off from it again.",
    quote: "Once you see the same thread running through everything, nothing can fully cut you off.",
    quoteHindi: "जब आप हर चीज़ में एक ही धागा देखने लगते हैं, तो कुछ भी आपको पूरी तरह अलग नहीं कर सकता।",
    categories: ["peace", "wisdom", "heart-touching"],
    moment:
      "In chapter six Krishna has been teaching meditation in detail. Here he describes where that practice leads: a person who sees the same presence in everyone and everything.",
    simpleMeaning:
      "Once you see the same presence in everything, being truly cut off stops being possible. The connection doesn't depend on where you are or what's happening.",
    deeperMeaning:
      "The promise runs both ways. It isn't only that the seer stays connected. Krishna says he never loses them either.\n\nThat changes what the connection is. It isn't something you keep alive by effort. It's a fact you start seeing, and once you've seen it, it's hard to unsee.",
    lifeApplication:
      "Next time you feel cut off from everyone, pick one ordinary moment, a stranger's kindness or a shared joke, and look at it as evidence of the same thread rather than a lucky exception. You're not forcing a belief. You're checking whether the wall is as solid as it feels.",
  },
  {
    id: "2-20",
    chapter: 2,
    verse: 20,
    sanskrit:
      "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    transliteration:
      "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ, ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre",
    english:
      "The self is never born, and it never dies. It did not come into being, and it will not cease to be. Unborn, eternal, everlasting and ancient, it is not killed when the body is killed.",
    meaning:
      "What you most fundamentally are is described here as untouched by birth and death, deeper and steadier than any single chapter of a life.",
    quote: "What is truly you was never born, and will never die.",
    quoteHindi: "जो सच में आप हैं, वह कभी जन्मा नहीं और कभी मरेगा भी नहीं।",
    categories: ["wisdom", "peace", "life"],
    moment:
      "This is part of Krishna's first long answer to Arjuna's grief, explaining why the self can't be killed. A nearly identical verse appears in the Katha Upanishad, so Krishna is drawing on teaching that was already old.",
    simpleMeaning:
      "What you really are doesn't begin at birth or end at death. Those happen to the body. Krishna is telling Arjuna that the self he's afraid of destroying can't be destroyed.",
    deeperMeaning:
      "The verse is built almost entirely out of negations: not born, not dying, not coming to be, not ceasing. That's deliberate.\n\nWhatever the self is, it doesn't fit the categories we use for events on a timeline, so the verse describes it by ruling those out. Birth and death are left to the body.",
    lifeApplication:
      "When fear of death gets loud, notice what exactly it's fear of: pain, decline, leaving people behind. Those are real, and the verse doesn't wave them away. It separates them from the idea that you'll be erased, which is often the part doing most of the damage.",
  },
  {
    id: "2-23",
    chapter: 2,
    verse: 23,
    sanskrit:
      "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥",
    transliteration:
      "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ, na cainaṁ kledayanty āpo na śoṣayati mārutaḥ",
    english:
      "Weapons cannot cut the self, and fire cannot burn it. Water cannot wet it, and wind cannot dry it.",
    meaning:
      "Whatever the deepest part of you is, nothing in the physical world can reach it. Not blades, fire, water or wind.",
    quote: "No weapon can cut what you truly are, and no fire can burn it.",
    quoteHindi: "जो आप सच में हैं, उसे न कोई शस्त्र काट सकता है, न कोई आग जला सकती है।",
    categories: ["wisdom", "courage", "peace"],
    moment:
      "Krishna is explaining to a grieving Arjuna why the self can't be killed. He's just compared the body to clothes that wear out, and now he lists the things that can't touch the self.",
    simpleMeaning:
      "Cutting, burning, drowning and drying out can all destroy a body. None of them touches the self, because it's outside the reach of anything physical.",
    deeperMeaning:
      "The four things named line up with four of the five classical elements in Indian thought: earth (the metal of a weapon), fire, water and air.\n\nBetween them they stand for the whole physical world. So the point isn't a random list of dangers. It's that nothing made of matter can act on the self.",
    lifeApplication:
      "When you feel damaged by something, a failure or a harsh word or a loss, ask what exactly was damaged. Your plans, your reputation, maybe your body. The verse suggests there's a part of you none of those reach, and it's worth knowing where it is.",
  },
  {
    id: "11-32",
    chapter: 11,
    verse: 32,
    sanskrit:
      "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः॥",
    transliteration:
      "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ, ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ",
    english:
      "I am time, the mighty destroyer of worlds, come here to bring these people to their end. Even without you, none of the warriors lined up against you will survive.",
    meaning:
      "Time ends everything, and it doesn't wait for anyone's permission. Arjuna's choice was never whether the outcome happens, only what part he plays in it.",
    quote: "Time ends everything. The only question is how you act while it runs.",
    quoteHindi: "समय हर चीज़ का अंत करता है। सवाल सिर्फ़ इतना है कि उसके चलते आप कैसे कर्म करते हैं।",
    categories: ["life", "wisdom", "courage"],
    moment:
      "Arjuna is staring at Krishna's universal form and has just watched the warriors of both armies rushing into its mouths. Terrified, he asks who Krishna really is. This is the answer.",
    simpleMeaning:
      "Krishna reveals himself as time itself, the force that eventually destroys everything. The warriors facing Arjuna are already doomed, with or without his help.",
    deeperMeaning:
      "This is the verse Oppenheimer famously rendered as 'Now I am become death, the destroyer of worlds.' The word he translated as death is 'kāla', which more exactly means time.\n\nIn context, the point isn't to frighten Arjuna. It's to free him from thinking he's the one who decides who lives. In the next verse Krishna tells him to be simply the instrument.",
    lifeApplication:
      "When you feel like everything depends on you, remember how much is already moving without you: time, other people, events that were in motion long before you arrived. Your part still matters. It just isn't the whole of it.",
  },
  {
    id: "2-38",
    chapter: 2,
    verse: 38,
    sanskrit:
      "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    transliteration:
      "sukha-duḥkhe same kṛtvā lābhālābhau jayājayau, tato yuddhāya yujyasva naivaṁ pāpam avāpsyasi",
    english:
      "Treat pleasure and pain, gain and loss, victory and defeat as the same, and then get ready for battle. Fighting this way, you will incur no sin.",
    meaning:
      "This is practical advice before a practical task. Don't wait for the odds to feel fair or the outcome to feel certain. Treat both directions of the result the same way, and then simply do the work in front of you.",
    quote: "Treat winning and losing the same. Then just do the work in front of you.",
    quoteHindi: "जीत और हार को एक समान समझें। फिर बस अपना काम करें।",
    categories: ["success", "courage", "peace"],
    moment:
      "Krishna has spent several verses appealing to Arjuna's duty and honor as a warrior. This verse wraps up that argument, and right after it he moves on to the deeper teaching about action.",
    simpleMeaning:
      "Stop letting the possible outcome decide whether you act. Accept that it could go either way, then do what's right in front of you.",
    deeperMeaning:
      "There's an order here that's easy to miss. Evenness comes first, then action.\n\nKrishna isn't asking Arjuna to stop caring who wins. He's asking him to stop letting the forecast decide whether he moves. It's the first hint of the idea the rest of chapter two builds out.",
    lifeApplication:
      "If there's a decision you keep circling, write down both outcomes and how you'd handle each one. Once you've accepted that you can live with either, the circling usually loses its grip.",
  },
  {
    id: "4-7",
    chapter: 4,
    verse: 7,
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration:
      "yadā yadā hi dharmasya glānir bhavati bhārata, abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    english:
      "Whenever righteousness declines and unrighteousness rises, I manifest myself.",
    meaning:
      "A promise of renewal: balance that has faded doesn't stay lost. The conditions for its return keep arising, again and again.",
    quote: "Wherever goodness fades, the strength to restore it rises again.",
    quoteHindi: "जहां भी अच्छाई कमज़ोर पड़ती है, उसे फिर से जगाने की शक्ति भी वहीं उठती है।",
    categories: ["courage", "motivation", "positive-thinking"],
    moment:
      "Krishna has just said he taught this yoga to the sun god in ancient times. Arjuna objects that Krishna was born recently, so how could that be? Krishna answers that he takes birth again and again, and this verse says when.",
    simpleMeaning:
      "Whenever the world tips badly out of balance, the divine steps in to set it right. Krishna is explaining why he, the eternal, takes birth at all.",
    deeperMeaning:
      "This is the verse behind the idea of the avatar, the divine taking form in different ways across the ages.\n\nIt describes a pattern, not a single rescue. Things tip out of balance, and something rises to correct them, again and again. The next verse says what for.",
    lifeApplication:
      "When a workplace, a community or your own habits have slid, it's easy to treat the slide as permanent. The verse argues against that. The correction usually starts small, often with one person deciding to hold a line, and that person can be you.",
  },
  {
    id: "4-24",
    chapter: 4,
    verse: 24,
    sanskrit:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्। ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
    transliteration:
      "brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam, brahmaiva tena gantavyaṁ brahma-karma-samādhinā",
    english:
      "The act of offering is Brahman, the offering is Brahman, poured by Brahman into the fire of Brahman. Whoever sees Brahman in every action reaches Brahman.",
    meaning:
      "Many families say this verse as a prayer before meals. It sees the sacred in every part of an act: the giver, the gift, the fire and the giving.",
    quote: "The giver, the gift and the giving are all sacred. See it that way, and every act becomes worship.",
    quoteHindi: "देने वाला, भेंट और देना, सब पवित्र हैं। ऐसे देखें, तो हर कर्म पूजा बन जाता है।",
    categories: ["wisdom", "karma", "peace"],
    moment:
      "Krishna is explaining how the wise can act without being bound by their actions. He describes action done as an offering, and this verse shows what that looks like from the inside.",
    simpleMeaning:
      "In a fire offering, everything involved is the divine: the act of offering, the offering itself, the fire, and the person making it. Someone who sees every action that way reaches the divine through it.",
    deeperMeaning:
      "This is one of the best-known verses in the Gita, because many families recite it before eating. Food becomes the offering, the body becomes the fire, and the meal becomes a small act of worship.\n\nThe idea underneath is that nothing sits outside the sacred. A meal, a chore or a day's work can be seen the same way as a temple ritual.",
    lifeApplication:
      "Try saying a short line of thanks before your next meal, this verse or anything else that means something to you. It takes ten seconds. The point is to notice that eating, like most of what you do, can be done with attention instead of on autopilot.",
  },
  {
    id: "2-13",
    chapter: 2,
    verse: 13,
    sanskrit:
      "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
    transliteration:
      "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā, tathā dehāntara-prāptir dhīras tatra na muhyati",
    english:
      "Just as the embodied self passes, within this body, through childhood, youth, and old age, so too it passes into another body at death. The wise are not troubled by this.",
    meaning:
      "Growing older is already a series of small departures. You aren't the child you were, and you're not upset about that. This verse asks you to hold the biggest departure of all with that same steadiness.",
    quote: "You've already changed bodies once, from child to now. Death is just the next change.",
    quoteHindi: "आप पहले भी शरीर बदल चुके हैं, बचपन से अब तक। मृत्यु बस अगला बदलाव है।",
    categories: ["wisdom", "peace", "life"],
    moment:
      "This is close to the start of Krishna's teaching. He's just told Arjuna there was never a time when either of them, or the kings on the field, didn't exist. Now he gives his first example.",
    simpleMeaning:
      "You've already lived through one big change of body after another without losing yourself. Death, Krishna says, is one more change of that kind, so there's no need to be thrown by it.",
    deeperMeaning:
      "The argument works by pointing at something you've already accepted. You aren't the child you were, and you don't mourn that child as dead, because you experience yourself as continuous through the change.\n\nKrishna asks you to extend that same sense of continuity across one more change. The word 'dhira', steady, is about not being thrown, not about feeling nothing.",
    lifeApplication:
      "Look at a photo of yourself at seven. Almost nothing about that body is still here, and yet there's an unbroken thread from that child to you. Sit with that for a minute, and notice how calmly you already hold that change.",
  },
  {
    id: "9-22",
    chapter: 9,
    verse: 22,
    sanskrit:
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration:
      "ananyāś cintayanto māṁ ye janāḥ paryupāsate, teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    english:
      "For those who worship me with single-minded devotion, ever united with me, I carry what they lack and preserve what they already have.",
    meaning:
      "A verse about steady, wholehearted focus being met with support: the sense that what's genuinely needed tends to arrive.",
    quote: "What you truly need has a way of arriving when your focus is whole.",
    quoteHindi: "जब आपका ध्यान पूरी तरह एकाग्र होता है, तो जो सच में ज़रूरी है वह अपने आप मिल जाता है।",
    categories: ["peace", "purpose", "life"],
    moment:
      "Krishna has just described people who worship for heavenly rewards. They get them, but when the reward runs out they come back. Then he turns to those who rely on him alone.",
    simpleMeaning:
      "When your attention is wholly turned to the divine, you're looked after on both ends. What you lack comes, and what you have is kept safe.",
    deeperMeaning:
      "The phrase here is 'yoga-kshemam vahamy aham', I carry their yoga and kshema. Yoga is gaining what you lack, and kshema is keeping what you've got. It's familiar in India for another reason: it's the motto of the Life Insurance Corporation of India.\n\nThe verse isn't a deal, though. It describes what happens when attention stops splitting itself across every possible shortfall.",
    lifeApplication:
      "Notice how much background energy goes into worrying whether there'll be enough time, money or help. For one task this week, give it your whole attention and deliberately leave the worrying for later. See what the work is like without that noise.",
  },
  {
    id: "2-40",
    chapter: 2,
    verse: 40,
    sanskrit:
      "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥",
    transliteration:
      "nehābhikrama-nāśo 'sti pratyavāyo na vidyate, svalpam apy asya dharmasya trāyate mahato bhayāt",
    english:
      "In this effort, nothing is ever lost, and no harm comes from trying. Even a small amount of this practice protects you from great fear.",
    meaning:
      "A reassurance for anyone worried that starting small isn't worth it. Effort here doesn't evaporate if it's incomplete. Even a little of it stays with you and counts for something.",
    quote: "No sincere effort is ever wasted. Even a little of it protects you.",
    quoteHindi: "कोई भी सच्चा प्रयास व्यर्थ नहीं जाता। थोड़ा सा प्रयास भी आपकी रक्षा करता है।",
    categories: ["motivation", "courage", "positive-thinking"],
    moment:
      "Krishna has just told Arjuna he's moving from theory to practice, the yoga of action. This is the first thing he says about it, and it's a reassurance.",
    simpleMeaning:
      "In this practice, no sincere effort is ever wasted, no matter how small or unfinished. Even a little of it helps.",
    deeperMeaning:
      "The verse is aimed at the fear of starting badly. In a ritual, a mistake can spoil the whole thing, and a half-finished ceremony gets you nothing.\n\nKrishna says this practice doesn't work like that. Partial effort isn't lost, and there's no penalty for having tried. The bar for starting is set as low as it can go.",
    lifeApplication:
      "Pick something you've put off because you can't do it properly yet: meditation, exercise, a hard project. Do ten minutes of it today. The verse says those ten minutes count, so test it.",
  },
  {
    id: "4-18",
    chapter: 4,
    verse: 18,
    sanskrit:
      "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः। स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्॥",
    transliteration:
      "karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ, sa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt",
    english:
      "Whoever sees inaction in action, and action in inaction, is wise among people. Such a person is a yogi, even while doing every kind of work.",
    meaning:
      "There's busywork that accomplishes nothing, and there's quiet stillness that accomplishes a great deal. This verse points at the difference and says real wisdom is being able to tell them apart.",
    quote: "Busy isn't the same as effective. Learn to tell the two apart.",
    quoteHindi: "व्यस्त होना असरदार होने के बराबर नहीं है। इन दोनों में फर्क पहचानना सीखें।",
    categories: ["wisdom", "karma", "success"],
    moment:
      "Krishna has just admitted that even wise people get confused about what action and inaction really are. This verse is his answer, and it's deliberately a riddle.",
    simpleMeaning:
      "Being busy and doing something real aren't the same. Wisdom is being able to tell which one you're looking at, in others and in yourself.",
    deeperMeaning:
      "The riddle breaks the assumption that visible motion equals doing. A person working hard without ego or grasping isn't entangled in anything, so there's inaction in their action.\n\nAnd someone who sits out, avoiding a duty, is still making a choice with consequences. That's the action in their inaction.",
    lifeApplication:
      "At the end of a busy day, ask what actually moved, not how full the calendar was. Hours of meetings can change nothing, and one quiet hour of thinking can solve the real problem. Plan tomorrow around the second kind.",
  },
  {
    id: "6-5",
    chapter: 6,
    verse: 5,
    sanskrit:
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration:
      "uddhared ātmanātmānaṁ nātmānam avasādayet, ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    english:
      "Lift yourself up by your own self, and don't let yourself sink. The self alone is your friend, and the self alone is your enemy.",
    meaning:
      "You carry both your greatest support and your biggest obstacle in the same place: how you direct your own mind.",
    quote: "Lift yourself by your own mind. It can be your closest friend or your fiercest enemy.",
    quoteHindi: "अपने ही मन के सहारे स्वयं को ऊपर उठाएं। यह आपका सबसे करीबी मित्र भी हो सकता है और सबसे बड़ा शत्रु भी।",
    categories: ["motivation", "courage", "positive-thinking", "heart-touching"],
    moment:
      "Chapter six opens with Krishna explaining that real renunciation isn't giving up work. Then, before teaching meditation, he puts the responsibility where it belongs.",
    simpleMeaning:
      "Nobody else can do your inner work for you. Your own mind can lift you up or pull you down, so the responsibility and the power both sit with you.",
    deeperMeaning:
      "The Sanskrit keeps reusing one word, atman, which can mean self and also mind. 'Uddhared atmanatmanam' is literally 'lift the self by the self.'\n\nThe one doing the lifting is the one being lifted. That's uncomfortable, because it means nobody can do it for you. It's also where the leverage is.",
    lifeApplication:
      "On a bad day, write down what your mind is saying about you. Then write down what's actually true, what's in your control and the next small step. That second list is the friend version of the same mind.",
  },
  {
    id: "2-62",
    chapter: 2,
    verse: 62,
    sanskrit:
      "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    transliteration:
      "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate, saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
    english:
      "When a person dwells on the objects of the senses, attachment to them develops. From attachment comes desire, and from desire, anger is born.",
    meaning:
      "This traces the very start of the chain that the next verse follows through to ruin. It begins somewhere quiet: not with anger, but with dwelling on something a little too long.",
    quote: "Anger doesn't start with anger. It starts with dwelling on something too long.",
    quoteHindi: "क्रोध की शुरुआत क्रोध से नहीं होती। यह किसी चीज़ पर बहुत देर तक ठहरने से शुरू होता है।",
    categories: ["wisdom", "life"],
    moment:
      "Arjuna asked how someone with steady wisdom behaves. Krishna has been describing it, and here he shows what happens to a mind that isn't steady.",
    simpleMeaning:
      "Anger doesn't start as anger. It starts with letting your mind dwell on something, which grows into attachment, then craving, then frustration.",
    deeperMeaning:
      "This is the first half of a chain that runs across two verses, and it starts somewhere very quiet: 'dhyayatah', just dwelling on something.\n\nNo one decides to become angry. The chain makes the earliest step visible, and that's the only point where it's easy to stop.",
    lifeApplication:
      "Notice the next time something keeps replaying in your head, a promotion someone else got or a remark that stung. That replaying is the first link. Turning your attention elsewhere at that point is far easier than dealing with the anger a day later.",
  },
  {
    id: "2-63",
    chapter: 2,
    verse: 63,
    sanskrit:
      "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    transliteration:
      "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ, smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",
    english:
      "From anger comes delusion, from delusion comes confused memory, from confused memory comes loss of discernment, and from loss of discernment one is ruined.",
    meaning:
      "A chain reaction, traced step by step: unchecked anger clouds judgment long before it shows on the surface.",
    quote: "Anger left unchecked slowly clouds the mind. Notice it before it grows.",
    quoteHindi: "बिना रोका गया क्रोध धीरे-धीरे मन को धुंधला कर देता है। इसे बढ़ने से पहले पहचानें।",
    categories: ["wisdom", "courage", "life"],
    moment:
      "This continues straight on from the previous verse. It picks up the chain at the point where desire has turned into anger.",
    simpleMeaning:
      "Once anger takes hold, it knocks out your clarity, then your memory of what matters, then your judgment. The damage is done inside long before it shows.",
    deeperMeaning:
      "Each step is the loss of a specific capacity: clear sight, then memory of what matters, then 'buddhi', the faculty that decides well.\n\nThe important point is timing. By the time anger shows in what you do, several of these losses have already happened inside. That's why you can feel so sure of yourself when you're wrong.",
    lifeApplication:
      "Make a rule for yourself: no messages or decisions while you're angry, and wait at least an hour. Once anger is running, the part of you that would catch the mistake is switched off. The delay is how you get it back.",
  },
  {
    id: "2-48",
    chapter: 2,
    verse: 48,
    sanskrit:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration:
      "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya, siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate",
    english:
      "Established in yoga, perform your actions, abandoning attachment, and remain even-minded in success and failure. This evenness of mind is called yoga.",
    meaning:
      "The Gita defines yoga here not as a posture but as balance of mind: the ability to give real effort without being thrown off by whether it succeeds or fails.",
    quote: "Do your work in balance. That steadiness of mind is the real practice.",
    quoteHindi: "अपना काम संतुलन के साथ करें। मन की यही स्थिरता असली साधना है।",
    categories: ["karma", "success", "peace"],
    moment:
      "This comes right after the famous verse about having a right to action but not its fruits. Here Krishna gives his first definition of yoga.",
    simpleMeaning:
      "Yoga, in the Gita's sense, is staying balanced while you act. You give your full effort and don't let success or failure throw you.",
    deeperMeaning:
      "'Samatvam yoga uchyate', evenness is called yoga. It moves yoga away from posture and ritual toward an inner stance you hold while working.\n\nFull effort and non-attachment are paired on purpose. You do all the work. Your stability just doesn't ride on how it lands.",
    lifeApplication:
      "Each time a result comes in this week, good or bad, notice where your calm was anchored. If it rose and fell with the result, that's the anchor to move. Building this is mostly noticing, over and over.",
  },
  {
    id: "2-70",
    chapter: 2,
    verse: 70,
    sanskrit:
      "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्। तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी॥",
    transliteration:
      "āpūryamāṇam acala-pratiṣṭhaṁ samudram āpaḥ praviśanti yadvat, tadvat kāmā yaṁ praviśanti sarve sa śāntim āpnoti na kāma-kāmī",
    english:
      "As rivers flow into the ocean, which remains ever still and full, so do desires flow into the one who is unmoved by them. That person alone finds peace, not the one who chases desire.",
    meaning:
      "Desires will keep arriving, and that isn't the problem. Peace belongs to whoever can let them arrive without being swept out to sea by each one.",
    quote: "Be like the ocean. Let desires arrive without disturbing your depth.",
    quoteHindi: "समुद्र जैसे बनें। इच्छाओं को आने दें, पर अपनी गहराई को अशांत न होने दें।",
    categories: ["peace", "detachment", "wisdom"],
    moment:
      "This is the second-to-last verse of chapter two, near the end of Krishna's portrait of the person with steady wisdom.",
    simpleMeaning:
      "Desires will always keep coming. Peace belongs to the person who can let them arrive without being carried off by each one.",
    deeperMeaning:
      "The ocean never stops receiving rivers, and that's the detail that matters. The verse doesn't promise desires will stop arriving.\n\nIt describes a depth that can take them in without rising or churning. The problem isn't wanting things. It's running after each want as soon as it shows up.",
    lifeApplication:
      "When a want shows up this week, a purchase, a message to check, a bit of approval to chase, try noticing it without acting on it for an hour. Some will pass on their own. The ones that stay, you can act on from a steadier place.",
  },
  {
    id: "2-71",
    chapter: 2,
    verse: 71,
    sanskrit:
      "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। निर्ममो निरहङ्कारः स शान्तिमधिगच्छति॥",
    transliteration:
      "vihāya kāmān yaḥ sarvān pumāṁś carati niḥspṛhaḥ, nirmamo nirahaṅkāraḥ sa śāntim adhigacchati",
    english:
      "The person who gives up all desires and moves through life free of longing, without any sense of 'mine' or 'I', attains peace.",
    meaning:
      "Ownership and ego are named here as the two quiet sources of restlessness. Loosen their grip, and peace has room to settle in.",
    quote: "Let go of craving and ego, and peace has room to arrive.",
    quoteHindi: "लालसा और अहंकार को छोड़ दें, तभी शांति के लिए जगह बनती है।",
    categories: ["peace", "detachment", "purpose"],
    moment:
      "This comes right after the ocean image, at the very end of Krishna's portrait of the person with steady wisdom.",
    simpleMeaning:
      "Peace comes when you stop living from craving, possessiveness and ego. Let those go, and there's room for calm.",
    deeperMeaning:
      "Three things get dropped here: longing, 'mine' and 'I'. Each is a place the world can hook you. 'Mine' turns things into stakes you can lose. 'I' turns events into verdicts on your worth. Longing keeps the mind leaning toward what isn't here.\n\nPeace isn't added at the end. It's what's left when those quiet down.",
    lifeApplication:
      "Count how many small irritations in a day come from 'mine': my parking spot, my idea, my turn. You won't drop them by force. But when you catch yourself gripping one, ask whether it's worth the disturbance. Most aren't.",
  },
  {
    id: "3-21",
    chapter: 3,
    verse: 21,
    sanskrit:
      "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    transliteration:
      "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ, sa yat pramāṇaṁ kurute lokas tad anuvartate",
    english:
      "Whatever a great person does, others do too. Whatever standard they set, the world follows.",
    meaning:
      "People learn far more from what you do than from what you say, a reason to hold your own actions to the standard you'd want reflected back.",
    quote: "Lead by example. The world follows what you do, not what you say.",
    quoteHindi: "उदाहरण बनकर आगे बढ़ें। संसार वही करता है जो आप करते हैं, जो आप कहते हैं वह नहीं।",
    categories: ["purpose", "motivation", "karma"],
    moment:
      "Krishna has just pointed to King Janaka, who reached perfection while still ruling, and told Arjuna to act for the good of the world. Here he explains why leaders especially can't sit out.",
    simpleMeaning:
      "People copy what respected people do, far more than what they say. If others look up to you, your actions set the standard.",
    deeperMeaning:
      "The verse is about influence through example, and it's aimed at Arjuna as a famous warrior. If he walks off the battlefield, others will take it as permission.\n\nYour actions set a reference point whether you meant to lead or not. That makes private conduct less private than it feels.",
    lifeApplication:
      "If people watch you, at work or at home, the useful question isn't what you're telling them to do. It's what you're showing them. Pick one thing you'd like the people around you to do, and make sure you're visibly doing it first.",
  },
  {
    id: "3-27",
    chapter: 3,
    verse: 27,
    sanskrit:
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
    transliteration:
      "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ, ahaṅkāra-vimūḍhātmā kartāham iti manyate",
    english:
      "All actions, without exception, are carried out by the qualities of nature. But someone confused by ego thinks, 'I am the doer.'",
    meaning:
      "A useful check on how much credit or blame any one person can really claim. So much of what happens comes from circumstances larger than you. Holding that loosely tends to make both success and failure easier to carry.",
    quote: "So much of what happens comes from more than just you. Hold both success and failure loosely.",
    quoteHindi: "जो कुछ होता है, उसमें आपसे कहीं ज़्यादा शामिल होता है। सफलता और असफलता दोनों को हल्के से थामें।",
    categories: ["wisdom", "detachment", "karma"],
    moment:
      "Krishna is explaining how the three qualities of nature drive all action. This verse names the mistake that gets layered on top.",
    simpleMeaning:
      "Far more goes into every action than your own will. Believing you're the sole doer of everything is the ego's confusion.",
    deeperMeaning:
      "'Ahankara', the ego, literally means 'I-maker'. Its mistake is claiming sole authorship of something that came from a huge web of causes: temperament, upbringing, the state of your body, other people, chance.\n\nThis isn't an argument that you have no responsibility. It corrects both the pride and the crushing guilt that come from thinking you alone caused every result.",
    lifeApplication:
      "Next time something goes very well or very badly, list three things that contributed besides you. It doesn't make the result less yours. It makes success less inflating and failure less devastating.",
  },
  {
    id: "3-35",
    chapter: 3,
    verse: 35,
    sanskrit:
      "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    transliteration:
      "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt, sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ",
    english:
      "It is better to do your own duty imperfectly than to do another's duty well. Even death in your own duty is better. Another's duty is full of danger.",
    meaning:
      "A reminder to trust your own path rather than a borrowed or imitated one. Even walked imperfectly, it fits you in a way another's can't.",
    quote: "Better your own path walked imperfectly than someone else's walked perfectly.",
    quoteHindi: "अपने रास्ते पर अपूर्ण चलना, किसी और के रास्ते पर पूर्ण चलने से बेहतर है।",
    categories: ["purpose", "courage", "karma"],
    moment:
      "Earlier, Arjuna said he'd rather live on alms than fight, taking up a path that wasn't his. Krishna ends this part of chapter three by addressing exactly that.",
    simpleMeaning:
      "It's better to live your own path, even clumsily, than to imitate someone else's perfectly. What fits you matters more than how impressive it looks.",
    deeperMeaning:
      "'Svadharma' means the duty or way that genuinely belongs to you, by your nature and situation. The verse makes a strong claim: fit matters more than performance.\n\nBeing skilled at a path that isn't yours has a cost the skill doesn't cancel. The question 'is this mine?' comes before 'am I good at it?'",
    lifeApplication:
      "If you're successful at something that was chosen for you, by family or prestige or momentum, and it still feels wrong, take that feeling seriously. Being good at it isn't proof it's yours. Spend some time on what you'd do if nobody was watching.",
  },
  {
    id: "4-8",
    chapter: 4,
    verse: 8,
    sanskrit:
      "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    transliteration:
      "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām, dharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
    english:
      "To protect the virtuous, to put an end to wrongdoing, and to firmly establish what is right, I appear age after age.",
    meaning:
      "This continues the idea from the previous verse: every era finds a way to protect what's good and restore what has gone off balance.",
    quote: "To protect what's good and restore balance. That renewal happens again and again.",
    quoteHindi: "जो अच्छा है उसकी रक्षा करने और संतुलन लौटाने के लिए। यह नवीनीकरण बार-बार होता है।",
    categories: ["purpose", "courage", "motivation"],
    moment:
      "This follows straight on from the previous verse. Krishna has said when he takes form, and now he says why.",
    simpleMeaning:
      "Krishna comes into the world for three reasons: to protect the good, to stop the harmful and to re-establish what's right. And he keeps doing it, in every age.",
    deeperMeaning:
      "'Sambhavami yuge yuge', I come into being age after age, is one of the most quoted lines in the Gita. The weight falls on the repetition.\n\nProtecting the good and correcting the harmful aren't framed as one dramatic event at the end of history. They're a recurring job, done in every era, in whatever form that era needs.",
    lifeApplication:
      "If you're in a long effort for something decent, a healthier team or a fairer rule or a kinder household, this is a reminder that the work is meant to be repeated. Having to do it again doesn't mean it failed last time. It's how the job has always worked.",
  },
  {
    id: "4-11",
    chapter: 4,
    verse: 11,
    sanskrit:
      "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्। मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः॥",
    transliteration:
      "ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham, mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ",
    english:
      "However people come to me, that is how I receive them. Everyone, in every way, follows my path, Arjuna.",
    meaning:
      "A generous verse about how many different roads can lead to the same place. It doesn't ask everyone to arrive the same way, only acknowledges that however they come, they're met.",
    quote: "Whatever road you take, however you arrive, you are met.",
    quoteHindi: "आप चाहे किसी भी रास्ते से आएं, आप स्वीकार किए जाते हैं।",
    categories: ["peace", "purpose", "life"],
    moment:
      "Krishna has just said that people who understand his birth and work reach him, freed from fear and anger. Then he widens it to everyone.",
    simpleMeaning:
      "Krishna meets every person in the way they come to him. All sincere paths lead toward the same place, different as they look.",
    deeperMeaning:
      "This is often read as one of the Gita's most generous verses, an early statement that many roads can lead to the same place.\n\nThe emphasis is on being met where you are. Sincerity is answered in kind, rather than everyone having to pass the same entrance test.",
    lifeApplication:
      "Notice when you're tempted to decide your way of finding meaning is the only real one. Someone else's route, through service or study or prayer or plain hard work, might look nothing like yours and still be carrying them somewhere good.",
  },
  {
    id: "4-34",
    chapter: 4,
    verse: 34,
    sanskrit:
      "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया। उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥",
    transliteration:
      "tad viddhi praṇipātena paripraśnena sevayā, upadekṣyanti te jñānaṁ jñāninas tattva-darśinaḥ",
    english:
      "Learn that truth through humble approach, through sincere inquiry, and through service. Those who have realized the truth will impart this knowledge to you.",
    meaning:
      "Real understanding tends to open up through humility and honest questions, not certainty. And it's often passed on person to person.",
    quote: "Approach wisdom with humility, honest questions, and an open hand.",
    quoteHindi: "ज्ञान के पास विनम्रता, सच्चे सवालों और खुले मन से जाएं।",
    categories: ["wisdom", "purpose", "life"],
    moment:
      "Krishna has just listed many kinds of sacrifice and said the sacrifice of knowledge is the best. Here he tells Arjuna how to actually get that knowledge.",
    simpleMeaning:
      "Deep understanding comes through humility, honest questions and service, usually from someone who's lived it. You can't demand it or fake your way into it.",
    deeperMeaning:
      "The three conditions are pranipata (humble approach), pariprashna (real questioning) and seva (service). All three cut against the ego's preference for already knowing.\n\nThe knowledge is pictured as passing from person to person, from those who've seen it, not assembled alone from books.",
    lifeApplication:
      "Find someone further along than you in something you care about. Ask a real question, the kind where you might have to change your mind, and offer to help them with something. Then actually listen to the answer.",
  },
  {
    id: "6-6",
    chapter: 6,
    verse: 6,
    sanskrit:
      "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः। अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    transliteration:
      "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ, anātmanas tu śatrutve vartetātmaiva śatru-vat",
    english:
      "For someone who has conquered themselves, the self is their friend. For someone who hasn't, the self acts like an enemy.",
    meaning:
      "The same mind can work for you or against you. The difference is whether it's been trained or left to run unchecked.",
    quote: "A mastered mind is your best friend. An unmastered one, your worst enemy.",
    quoteHindi: "वश में किया गया मन सबसे अच्छा मित्र है। अनियंत्रित मन सबसे बड़ा शत्रु।",
    categories: ["courage", "wisdom", "motivation", "success"],
    moment:
      "This follows straight on from the previous verse, where Krishna said the self is its own friend and its own enemy. Here he says which one you get.",
    simpleMeaning:
      "Your mind is never neutral. Trained, it works for you. Left to itself, it works against you.",
    deeperMeaning:
      "The verse leaves no neutral option. An untrained mind doesn't sit quietly waiting. It actively produces worry, distraction and self-attack.\n\nSo training it isn't about adding something extra to your life. It's about turning your most powerful tool so it isn't pointed at you.",
    lifeApplication:
      "The mind that builds disasters at 3am is the same one that can walk you through a crisis calmly in daylight. When it starts at night, try one plain question: what do I actually know right now? It's a small way of putting it back on your side.",
  },
  {
    id: "6-16",
    chapter: 6,
    verse: 16,
    sanskrit:
      "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः। न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन॥",
    transliteration:
      "nātyaśnatas tu yogo 'sti na caikāntam anaśnataḥ, na cāti-svapna-śīlasya jāgrato naiva cārjuna",
    english:
      "There is no yoga for one who eats too much, and none for one who eats too little. It isn't for one who sleeps too much, or for one who stays awake too much.",
    meaning:
      "Discipline here isn't extremity in either direction. Depriving yourself is treated the same as overindulging: both throw you off balance.",
    quote: "Discipline isn't extremity in either direction. Balance is the practice.",
    quoteHindi: "अनुशासन का मतलब किसी भी दिशा में अति करना नहीं है। संतुलन ही साधना है।",
    categories: ["peace", "life", "wisdom"],
    moment:
      "Krishna has just described how to sit for meditation: a clean seat, a steady posture, a calm mind. Then he adds that the rest of your life has to support it.",
    simpleMeaning:
      "Spiritual discipline doesn't mean punishing the body. Too much and too little both get in the way.",
    deeperMeaning:
      "This rules out harsh self-denial as a path, which stands out given how often seriousness gets measured by suffering.\n\nThe Gita treats starving and overeating as the same kind of problem. Both disturb the steadiness the practice depends on, so moderation isn't a compromise. It's the requirement.",
    lifeApplication:
      "If you're about to get serious about something, watch for the urge to swing to an extreme, the crash diet or the four-hour nights. That swing usually ends in a collapse. Start with a version you could keep up in your worst week.",
  },
  {
    id: "6-17",
    chapter: 6,
    verse: 17,
    sanskrit:
      "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    transliteration:
      "yuktāhāra-vihārasya yukta-ceṣṭasya karmasu, yukta-svapnāvabodhasya yogo bhavati duḥkha-hā",
    english:
      "For the one who is balanced in eating and recreation, balanced in effort, and balanced in sleep and waking, yoga becomes the destroyer of suffering.",
    meaning:
      "A follow-through on the previous verse's point. Balance across the ordinary parts of a day, eating, resting, working, isn't a minor detail. It's presented here as the actual practice.",
    quote: "Balance across your ordinary days is the real practice, not a side detail.",
    quoteHindi: "आपके सामान्य दिनों में संतुलन ही असली साधना है, कोई छोटी बात नहीं।",
    categories: ["peace", "life", "success"],
    moment:
      "Right after ruling out the extremes, Krishna states the positive version of the same rule.",
    simpleMeaning:
      "Getting ordinary things in proportion, food and rest and work and sleep, is the practice. It's what lets the practice actually ease suffering.",
    deeperMeaning:
      "The verse makes a big claim about small things. It names meals, play, work and sleep, and says getting them in proportion is what makes yoga 'duhkha-ha', the destroyer of sorrow.\n\nThe spiritual work is placed inside the ordinary running of a day, not above it.",
    lifeApplication:
      "Pick the one rhythm in your day that's most out of balance right now, which for most people is sleep. Fix just that one for two weeks before you add any new practice on top. Everything else rests on it.",
  },
  {
    id: "6-19",
    chapter: 6,
    verse: 19,
    sanskrit:
      "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता। योगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥",
    transliteration:
      "yathā dīpo nivāta-stho neṅgate sopamā smṛtā, yogino yata-cittasya yuñjato yogam ātmanaḥ",
    english:
      "As a lamp sheltered from wind does not flicker, so is the disciplined mind of one steady in practice.",
    meaning:
      "A well-known image for a trained mind. Not motionless because nothing happens around it, but steady because it's learned not to flicker at every draft.",
    quote: "A steady mind is a lamp that doesn't flicker, even in the wind.",
    quoteHindi: "स्थिर मन वह दीपक है जो हवा में भी नहीं कांपता।",
    categories: ["peace", "wisdom", "life"],
    moment:
      "Krishna is describing the meditator whose mind has become steady. This is the image he picks, and it's one of the best known in the Gita.",
    simpleMeaning:
      "A trained mind is steady like a sheltered flame. It's still fully alive. It just isn't shaken by every passing draft.",
    deeperMeaning:
      "The image is careful. The flame is still burning. Only the flicker is gone, and the reason is shelter, not the absence of a world outside.\n\nThe steady mind isn't empty or numb. It's out of the wind.",
    lifeApplication:
      "When bad news lands, you'll still feel it. The practice is in what happens next: does it replay all day, or does it pass through? A few quiet minutes each morning build the shelter, and they work even on days when they feel like nothing.",
  },
  {
    id: "6-35",
    chapter: 6,
    verse: 35,
    sanskrit:
      "असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
    transliteration:
      "asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam, abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
    english:
      "The mind is indeed restless and hard to control, but it can be mastered through steady practice and non-attachment.",
    meaning:
      "An honest acknowledgment that stillness of mind doesn't come easily for anyone, followed immediately by reassurance that it's still within reach.",
    quote: "The restless mind can be tamed through patient practice and letting go.",
    quoteHindi: "अस्थिर मन को धैर्यपूर्ण अभ्यास और त्याग के माध्यम से वश में किया जा सकता है।",
    categories: ["courage", "motivation", "positive-thinking", "success"],
    moment:
      "Arjuna has just objected that this kind of steady mind sounds impossible. He says controlling the mind is as hard as controlling the wind. Krishna doesn't argue with him.",
    simpleMeaning:
      "Krishna agrees the mind is hard to control, but he doesn't agree it's impossible. Repeated practice and loosening your attachments will get you there.",
    deeperMeaning:
      "The answer has two parts, and the second matters as much as the first. 'Abhyasa' is practice, coming back over and over. 'Vairagya' is dispassion, slowly loosening the wants that keep pulling the mind away.\n\nPractice without dispassion is a constant fight. Dispassion without practice has nothing to stand on.",
    lifeApplication:
      "If you've tried meditating and found your mind all over the place, that's not failure. Arjuna said the same thing to Krishna. Expect progress to be slow, so slowness doesn't become your reason to stop.",
  },
  {
    id: "7-7",
    chapter: 7,
    verse: 7,
    sanskrit:
      "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
    transliteration:
      "mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya, mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
    english:
      "There is nothing higher than me, Arjuna. Everything that exists is strung on me, the way pearls are strung on a thread.",
    meaning:
      "A simple image for something hard to picture: an underlying unity holding together everything that looks separate. Different pearls, one thread running through all of them.",
    quote: "Everything that looks separate is strung on the same thread.",
    quoteHindi: "जो कुछ भी अलग दिखता है, वह एक ही धागे में पिरोया हुआ है।",
    categories: ["wisdom", "peace"],
    moment:
      "Chapter seven opens with Krishna promising to teach both knowledge and its direct experience. He's just described his two natures, the material world and the life within it. Now he says what holds them together.",
    simpleMeaning:
      "Everything that looks separate is held together by one underlying reality. The differences are real, and so is what runs through them.",
    deeperMeaning:
      "In a necklace the pearls really are separate. You can count them, and each one is itself. And yet one thread passes through every one of them, hidden inside, holding the shape.\n\nThe image allows for difference and unity at the same time, which is harder to picture than either one alone.",
    lifeApplication:
      "When a problem feels isolated and huge, ask what connects it to the rest of your life: the people, the history, the bigger picture. Seeing it as one pearl on a longer string usually takes some of the panic out of it.",
  },
  {
    id: "8-7",
    chapter: 8,
    verse: 7,
    sanskrit:
      "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥",
    transliteration:
      "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca, mayy arpita-mano-buddhir mām evaiṣyasy asaṁśayam",
    english:
      "So remember me at all times, and fight. With your mind and understanding given to me, you will surely come to me. Have no doubt about this.",
    meaning:
      "Remembering and acting aren't presented as separate here. You don't have to pause your life to stay centered. The instruction is to carry that center with you into whatever you're already doing.",
    quote: "Stay centered while you act. You don't have to pause your life to remember what matters.",
    quoteHindi: "काम करते हुए भी केंद्रित रहें। जो मायने रखता है उसे याद रखने के लिए ज़िंदगी रोकने की ज़रूरत नहीं।",
    categories: ["peace", "purpose", "motivation"],
    moment:
      "Arjuna has asked how Krishna can be known at the moment of death. Krishna has just said that whatever a person remembers at the end is where they go. So, he concludes, remember me all the time.",
    simpleMeaning:
      "You don't have to step out of your life to stay connected to what matters. Keep it in mind while you do your work, even the hardest parts.",
    deeperMeaning:
      "The Sanskrit is blunt: 'mam anusmara yudhya cha', remember me and fight. Many translations soften it.\n\nKrishna doesn't ask Arjuna to step back from the battle to stay centered. Remembering isn't a separate activity you schedule for later. It's meant to run underneath whatever the hands are doing.",
    lifeApplication:
      "If you're waiting for life to calm down before you get to what matters, the verse disagrees. Pick a small anchor, like one slow breath before each meeting, and carry it into the busiest part of your day instead of saving it for a quiet one.",
  },
  {
    id: "9-26",
    chapter: 9,
    verse: 26,
    sanskrit:
      "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    transliteration:
      "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati, tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
    english:
      "Whoever offers me a leaf, a flower, fruit, or water with devotion, I accept that offering, given with a pure heart.",
    meaning:
      "It's the sincerity of an offering, not its size, that gives it worth. A small gesture given wholeheartedly outweighs a grand one given carelessly.",
    quote: "A small gift given with a whole heart is never small.",
    quoteHindi: "पूरे मन से दिया गया छोटा सा उपहार कभी छोटा नहीं होता।",
    categories: ["peace", "purpose", "life", "heart-touching"],
    moment:
      "Krishna has been talking about the different things people worship and what they get from it. Here he says what he himself asks for, and it's almost nothing.",
    simpleMeaning:
      "What matters in an offering is the love behind it, not what it costs. The smallest thing given sincerely is fully accepted.",
    deeperMeaning:
      "The four things listed are the cheapest, most available things there are. Anyone, rich or poor, can find a leaf or a cup of water.\n\nThat's the point. What the verse asks for is 'bhakti', love, and a sincere heart. Nobody can buy those, and everyone has access to them.",
    lifeApplication:
      "Send one short message today to someone you've been meaning to thank. Write it properly, with real attention. It costs nothing, and by the verse's measure it's worth more than a bigger gesture made carelessly.",
  },
  {
    id: "9-27",
    chapter: 9,
    verse: 27,
    sanskrit:
      "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्। यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥",
    transliteration:
      "yat karoṣi yad aśnāsi yaj juhoṣi dadāsi yat, yat tapasyasi kaunteya tat kuruṣva mad-arpaṇam",
    english:
      "Whatever you do, whatever you eat, whatever you offer, whatever you give, whatever discipline you practice, Arjuna, do it as an offering to me.",
    meaning:
      "This turns an entire ordinary day into one continuous act of devotion, not by adding rituals to it, but by changing the spirit behind what's already being done. Working, eating, giving. The same actions, held differently.",
    quote: "The same ordinary actions, held differently, become something like devotion.",
    quoteHindi: "वही साधारण काम, अलग भाव से किए जाएं, तो भक्ति जैसे बन जाते हैं।",
    categories: ["purpose", "peace", "life"],
    moment:
      "Right after saying a leaf or a flower is enough, Krishna widens it. The offering doesn't have to be a special act at all.",
    simpleMeaning:
      "You don't need new rituals. Doing what you already do, in the spirit of an offering, turns an ordinary day into devotion.",
    deeperMeaning:
      "The verse doesn't add a single new task. It changes the intention behind the ones you already have. Eating, working and giving look the same from outside.\n\nWhat shifts is that each becomes something given rather than something taken from you. The Gita's bet is that this change, repeated across a whole day, adds up to a spiritual life inside an ordinary one.",
    lifeApplication:
      "Pick one chore you resent, the dishes or the commute or a dull report. For a week, do it as something you're giving to someone, your household or the people who'll read it. The task takes the same time. Notice whether it costs you as much.",
  },
  {
    id: "9-29",
    chapter: 9,
    verse: 29,
    sanskrit:
      "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः। ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्॥",
    transliteration:
      "samo 'haṁ sarva-bhūteṣu na me dveṣyo 'sti na priyaḥ, ye bhajanti tu māṁ bhaktyā mayi te teṣu cāpy aham",
    english:
      "I am the same toward all beings. No one is hateful to me, and no one is dear. But those who turn to me with devotion live in me, and I live in them.",
    meaning:
      "A description of impartiality that doesn't rule out closeness. Fairness and genuine relationship aren't presented as opposites here. One is simply the ground that the other grows from.",
    quote: "Fairness and closeness aren't opposites. One can be the ground the other grows from.",
    quoteHindi: "निष्पक्षता और नज़दीकी विपरीत नहीं हैं। एक दूसरे की नींव बन सकती है।",
    categories: ["peace", "wisdom", "life"],
    moment:
      "Krishna has just promised that whoever offers their actions to him is freed from their results. Then he heads off an obvious question: does he have favorites?",
    simpleMeaning:
      "Krishna doesn't play favorites. But anyone who turns to him with love finds a closeness that's real, and it's open to everyone equally.",
    deeperMeaning:
      "The verse holds together two things that usually seem to clash. Total impartiality sounds cold, like a rule applied evenly to everyone.\n\nKrishna says the evenness is the ground, and closeness grows out of it for anyone who turns toward him. Sunlight falls on every plant the same, and the plant that turns toward it is the one that flowers.",
    lifeApplication:
      "Good teachers and parents work this way. Nobody's written off, and the ones who lean in still end up with a real relationship. If you want that kind of closeness with someone, the door is usually already open. Walking through it is up to you.",
  },
  {
    id: "10-20",
    chapter: 10,
    verse: 20,
    sanskrit:
      "अहमात्मा गुडाकेश सर्वभूताशयस्थितः। अहमादिश्च मध्यं च भूतानामन्त एव च॥",
    transliteration:
      "aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ, aham ādiś ca madhyaṁ ca bhūtānām anta eva ca",
    english:
      "I am the Self, seated in the heart of every being. I am the beginning, the middle, and the end of all that exists.",
    meaning:
      "Not a distant presence, but one described as already at the center of things, including you. Whatever you're looking for outward, this verse suggests it's also already here.",
    quote: "What you're looking for out there is also already here, at the center of you.",
    quoteHindi: "जो आप बाहर ढूंढ रहे हैं, वह आपके भीतर, आपके केंद्र में भी पहले से है।",
    categories: ["wisdom", "peace", "heart-touching"],
    moment:
      "Arjuna has just asked how he can recognise Krishna in the world, and in what forms to think of him. Krishna replies that his manifestations are endless but he'll name the chief ones. This is the very first: before any mountain, river, or hero, he names the Self in every heart.",
    simpleMeaning:
      "Krishna isn't describing a God who lives far away. He is the Self at the core of every living being, and he is the beginning, middle, and end of everything that exists.",
    deeperMeaning:
      "Notice the order. Asked where the divine can be found, Krishna starts with the closest place there is, the heart of the one asking, and only then goes on to the grand examples of the rest of the chapter.\n\nCalling himself beginning, middle, and end also leaves no outside vantage point to search from. The seeker is already inside what's being sought.",
    lifeApplication:
      "Next time you catch yourself thinking peace will arrive with the right place, practice or experience, stop for a minute and turn your attention to the one doing the looking. The outer things aren't worthless. What they point to is just closer than any of them.",
  },
  {
    id: "12-13",
    chapter: 12,
    verse: 13,
    sanskrit:
      "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
    transliteration:
      "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca, nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī",
    english:
      "One who hates no creature, who is friendly and compassionate, free from possessiveness and ego, equal in pleasure and pain, and forgiving.",
    meaning:
      "A short portrait of a settled mind: goodwill toward others, humility, and roughly the same composure whether things are going well or badly.",
    quote: "Meet every being with kindness, and every swing of fortune with the same steady heart.",
    quoteHindi: "हर प्राणी से दया से मिलें, और भाग्य के हर उतार-चढ़ाव को एक ही स्थिर मन से स्वीकार करें।",
    categories: ["peace", "wisdom", "life"],
    moment:
      "Arjuna has asked which devotee is better, one who worships Krishna in a personal form or one who meditates on the formless. Krishna answers, and then begins listing the qualities of the devotee he loves.",
    simpleMeaning:
      "The person Krishna loves isn't marked by special powers. They're marked by ordinary goodness: no hatred, real kindness, little ego and easy forgiveness.",
    deeperMeaning:
      "This opens a list that runs for eight verses, and what stands out is how ordinary it is. There are no powers or visions on it, just goodwill, humility, steadiness and forgiveness.\n\nThe list reads less like rules to obey and more like a description of what a settled inner life looks like from the outside.",
    lifeApplication:
      "Read the list as a mirror, not a test. Where do you hold a quiet grudge, or take things too personally? Pick one and just notice it this week. The verse describes a direction to walk in, not a bar you've failed.",
  },
  {
    id: "12-15",
    chapter: 12,
    verse: 15,
    sanskrit:
      "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    transliteration:
      "yasmān nodvijate loko lokān nodvijate ca yaḥ, harṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ",
    english:
      "One who does not disturb the world, and who is not disturbed by the world, free from elation, envy, fear and anxiety, is dear to me.",
    meaning:
      "A quiet kind of strength: being someone who doesn't unsettle others, and who has enough steadiness not to be easily unsettled by them either.",
    quote: "Be someone the world doesn't unsettle, and who doesn't unsettle the world.",
    quoteHindi: "ऐसे बनें जिसे संसार विचलित न कर सके, और जो संसार को भी विचलित न करे।",
    categories: ["peace", "courage", "life", "heart-touching"],
    moment:
      "This is from the same list of qualities Krishna loves in a devotee, a couple of verses further in.",
    simpleMeaning:
      "Being dear to Krishna looks like quiet, two-way steadiness. You don't stir up trouble for others, and their trouble doesn't knock you over.",
    deeperMeaning:
      "Not disturbing the world means you aren't a source of drama or pressure for the people around you. Not being disturbed means their moods don't capsize you.\n\nThe four things named, excitement, envy, fear and anxiety, are the usual handles the world grabs you by. Without them, both kinds of steadiness come easily.",
    lifeApplication:
      "Think of someone who calms a room just by being in it, and is also hard to rattle. They're rarely the loudest person there. Next time a conversation heats up, try being the one who doesn't raise the temperature, and watch what happens.",
  },
  {
    id: "14-26",
    chapter: 14,
    verse: 26,
    sanskrit:
      "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥",
    transliteration:
      "māṁ ca yo 'vyabhicāreṇa bhakti-yogena sevate, sa guṇān samatītyaitān brahma-bhūyāya kalpate",
    english:
      "Whoever serves me with steady, unwavering devotion rises above these three qualities of nature and becomes fit to become one with the eternal.",
    meaning:
      "Steadiness is the operative word here, not intensity. A devotion that doesn't waver, even a quiet one, is what's described as carrying someone through and beyond the usual pull of moods and impulses.",
    quote: "Steadiness, not intensity, is what carries you through. A quiet, unwavering effort is enough.",
    quoteHindi: "तीव्रता नहीं, स्थिरता ही आपको आगे ले जाती है। एक शांत, अटूट प्रयास ही काफी है।",
    categories: ["peace", "detachment", "wisdom"],
    moment:
      "Arjuna has asked how someone gets beyond the three gunas, the qualities of nature behind every mood and impulse. Krishna has described what that person looks like, and now he says how to get there.",
    simpleMeaning:
      "The way past the pull of your moods and impulses isn't a burst of willpower. It's steady, faithful devotion kept up over time.",
    deeperMeaning:
      "The three gunas are sattva (clarity), rajas (restless activity) and tamas (heaviness). The Gita says every state of mind is some mix of them.\n\nKrishna's answer to getting beyond them isn't more effort or more knowledge. It's 'avyabhicharena', devotion that doesn't stray. Consistency is what's asked for, not intensity.",
    lifeApplication:
      "If you tend to start things at full intensity and burn out, try the opposite. Choose a version so modest you could do it on your worst day, and keep it going for a month. Steady beats intense over any long stretch.",
  },
  {
    id: "15-7",
    chapter: 15,
    verse: 7,
    sanskrit:
      "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
    transliteration:
      "mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ, manaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati",
    english:
      "An eternal portion of myself, becoming a living being in this world, draws to itself the mind and the five senses.",
    meaning:
      "A description of the self as something eternal at the core, temporarily working through the mind and senses like tools it has taken up.",
    quote: "Something eternal lives at the center of you, wearing the mind and senses like a garment.",
    quoteHindi: "आपके भीतर कुछ शाश्वत बसता है, जो मन और इंद्रियों को वस्त्र की तरह धारण करता है।",
    categories: ["wisdom", "life", "purpose"],
    moment:
      "Chapter fifteen opens with the image of an upside-down tree, roots above, standing for the world. Now Krishna turns to the individual living being inside it.",
    simpleMeaning:
      "At your core is something eternal, a part of the divine. Your mind and senses are tools it has gathered for living in this world, not the whole of you.",
    deeperMeaning:
      "The next verse adds an image: the self carries the mind and senses from body to body the way the wind carries scent from flowers. The scent travels with the wind, but the wind isn't the scent.\n\nYou aren't your equipment. The mind and senses are things you're using, not everything you are.",
    lifeApplication:
      "When a craving or a strong mood hits, try naming it as a report rather than an order: 'the senses want this' or 'the mind is telling a story.' That small gap between the signal and you is often enough to choose what happens next.",
  },
  {
    id: "16-21",
    chapter: 16,
    verse: 21,
    sanskrit:
      "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    transliteration:
      "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ, kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
    english:
      "There are three gates to hell that ruin the self: lust, anger and greed. So give up all three.",
    meaning:
      "Three habits of mind are singled out as the ones most likely to unravel a person from within. Worth noticing early, before they take hold.",
    quote: "Lust, anger, and greed are the three gates that lead a person to ruin. Walk away from them.",
    quoteHindi: "काम, क्रोध और लोभ, ये तीन द्वार हैं जो व्यक्ति को विनाश की ओर ले जाते हैं। इनसे दूर रहें।",
    categories: ["wisdom", "courage", "life"],
    moment:
      "Chapter sixteen contrasts two kinds of nature, one that leads toward freedom and one that leads into bondage. After describing the second at length, Krishna boils it down to three things.",
    simpleMeaning:
      "Lust, anger and greed are the three openings through which a person destroys themselves. Krishna's advice is simply to turn away from all three.",
    deeperMeaning:
      "Calling them gates is precise. A gate isn't the destination. It's where you go in, which means it's also where you can turn around.\n\nLust here means compulsive craving in general, not only sexual desire. The three are linked, and the Gita sees most of the harm people do to themselves passing through one of them.",
    lifeApplication:
      "Look at the decision you most regret. There's usually one of these three under it: wanting something badly enough to override your judgment, acting in heat, or holding on past the point of sense. Learn your own early signs for each, while it's still a flicker.",
  },
  {
    id: "18-63",
    chapter: 18,
    verse: 63,
    sanskrit:
      "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया। विमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥",
    transliteration:
      "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā, vimṛśyaitad aśeṣeṇa yathecchasi tathā kuru",
    english:
      "So I have shared with you this knowledge, more secret than any secret. Reflect on it fully, and then do as you choose.",
    meaning:
      "After chapters of guidance, this is where it's handed back to Arjuna. Not as an order, but as something to actually think through, with the freedom to decide for himself what to do with it.",
    quote: "Reflect on it fully. Then the choice is genuinely yours to make.",
    quoteHindi: "इस पर पूरी तरह विचार करें। फिर निर्णय सच में आपका अपना है।",
    categories: ["wisdom", "purpose", "life"],
    moment:
      "This comes right at the end of the teaching. Krishna has said everything he has to say, and instead of giving an order, he hands the decision back to Arjuna.",
    simpleMeaning:
      "Krishna has given Arjuna everything he knows. Now the choice is Arjuna's, made after real reflection, not out of obedience.",
    deeperMeaning:
      "'Yathechchhasi tatha kuru', do as you wish. It's a surprising way for an authoritative teacher to finish.\n\nAfter all this teaching, Krishna treats Arjuna as someone who has to reach his own conclusion for it to mean anything. The teaching is offered, not imposed, and that makes Arjuna's decision to fight a real choice.",
    lifeApplication:
      "When you give advice, try ending it the way Krishna does here: this is what I think, now think it through and decide. People hold on to conclusions they reached themselves far longer than instructions they were handed.",
  },
  {
    id: "18-65",
    chapter: 18,
    verse: 65,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
    transliteration:
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru, mām evaiṣyasi satyaṁ te pratijāne priyo 'si me",
    english:
      "Keep your mind on me, be devoted to me, offer to me, bow to me. You will surely come to me. I promise you this, because you are dear to me.",
    meaning:
      "The reasoning offered here isn't obligation. It's affection. Whatever else this verse asks for, it's grounded first in being told, plainly, that you're cared for.",
    quote: "Whatever else is asked of you, know this first: you are cared for.",
    quoteHindi: "और कुछ भी मांगा जाए, पहले यह जान लें: आपकी परवाह की जाती है।",
    categories: ["heart-touching", "peace", "purpose"],
    moment:
      "Krishna has just told Arjuna to decide for himself. Then he says he'll speak his highest word once more, because Arjuna is very dear to him, and this verse begins it.",
    simpleMeaning:
      "Krishna's last request is for Arjuna's whole heart. And the reason he gives isn't duty. It's that Arjuna is dear to him.",
    deeperMeaning:
      "The first line repeats verse 9.34 almost word for word. What's new is the ending: a promise, and 'priyo 'si me', you are dear to me.\n\nThe instructions could read as demands. The reason given at the end changes that. Krishna puts the relationship first and the practices second.",
    lifeApplication:
      "Commitment that runs on fear wears you down. Commitment that runs on knowing you're valued tends to last. If you're asking something of someone, a partner or a team or a child, make sure they've heard the second part first.",
  },
  {
    id: "18-78",
    chapter: 18,
    verse: 78,
    sanskrit:
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    transliteration:
      "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ, tatra śrīr vijayo bhūtir dhruvā nītir matir mama",
    english:
      "Wherever there is Krishna, the master of yoga, and Arjuna, the archer, there will be fortune, victory, well-being and sound judgment. That is my conviction.",
    meaning:
      "The Gita's closing verse: a statement that when wisdom and disciplined, committed action come together, good outcomes tend to follow.",
    quote: "Where wisdom and determined action meet, success naturally follows.",
    quoteHindi: "जहां ज्ञान और दृढ़ कर्म मिलते हैं, वहां सफलता स्वाभाविक रूप से आती है।",
    categories: ["success", "motivation", "positive-thinking"],
    moment:
      "This is the last verse of the Gita, and Krishna doesn't say it. Sanjaya does. He's been narrating the whole conversation to the blind king Dhritarashtra, whose sons are fighting Arjuna, and this is his final word to the king.",
    simpleMeaning:
      "Where wisdom and skilled, committed action come together, good things follow. That's the conclusion the narrator draws from everything he's heard.",
    deeperMeaning:
      "It reads as a quiet answer to the question the king asked at the very start of the Gita, about what his sons and the Pandavas were doing on the battlefield.\n\nSanjaya's reply, after everything, is that the side with both wisdom and skilled action will win. Krishna stands for one and Arjuna for the other, and the verse says it takes both.",
    lifeApplication:
      "Look at a goal that's stalled. Usually one half is missing. Either you have a clear plan you're not acting on, or you're very busy without a clear sense of why. Name which half you're short of this week, and work on that one.",
  },
  {
    id: "2-11",
    chapter: 2,
    verse: 11,
    sanskrit:
      "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥",
    transliteration:
      "aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase, gatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ",
    english:
      "You grieve for those who should not be grieved for, and yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.",
    meaning:
      "Krishna's first real teaching opens by naming the gap between what Arjuna says and what he does. You can know that everything changes and still spend your days grieving things you were never able to hold onto. Clear thinking means letting that knowledge actually reach the way you live.",
    quote: "You keep grieving what you were never able to hold onto. The wise don't.",
    quoteHindi: "आप उस चीज़ का शोक करते रहते हैं जिसे आप कभी थाम ही नहीं सकते थे। ज्ञानी ऐसा नहीं करते।",
    categories: ["wisdom", "peace", "life", "heart-touching"],
    moment:
      "Arjuna has just said 'I will not fight' and fallen silent. Krishna smiles, there between the two armies, and this is how his teaching begins.",
    simpleMeaning:
      "Arjuna is mourning things that were never going to last, while talking as if he understood. Krishna's teaching begins by pointing at that gap.",
    deeperMeaning:
      "The 'words of wisdom' are Arjuna's own arguments from chapter one, about family, tradition and the sin of killing kin. Krishna opens by pointing at the gap between that talk and the grief underneath it.\n\nHe isn't dismissing loss. He's pointing at grief that comes from arguing with the fact that everything changes.",
    lifeApplication:
      "Notice where you're mourning something that was never going to stay the same: a stage of your kids' lives, a version of a friendship, a younger body. Let yourself feel it, then ask whether you're also arguing with the fact itself. That second part is the bit you can put down.",
  },
  {
    id: "2-15",
    chapter: 2,
    verse: 15,
    sanskrit:
      "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ। समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते॥",
    transliteration:
      "yaṁ hi na vyathayanty ete puruṣaṁ puruṣarṣabha, sama-duḥkha-sukhaṁ dhīraṁ so 'mṛtatvāya kalpate",
    english:
      "The person whom these do not trouble, who stays steady in pain and pleasure alike, that wise one is fit for immortality.",
    meaning:
      "The same events hit everyone. What changes is whether they knock you over. Someone who stays level through both a good day and a bad one isn't suppressing anything. They've just stopped handing their stability over to whatever the day brings.",
    quote: "Stay level through the good days and the bad ones. That steadiness is what lasts.",
    quoteHindi: "अच्छे दिनों और बुरे दिनों में एक जैसा बने रहें। यही स्थिरता टिकती है।",
    categories: ["peace", "wisdom", "courage"],
    moment:
      "Krishna has just told Arjuna that heat and cold, pleasure and pain come and go. Here he says what bearing them steadily leads to.",
    simpleMeaning:
      "Someone who stays steady through both pleasure and pain is ready for something that doesn't change. Steadiness is what opens the door.",
    deeperMeaning:
      "'Amritatvaya kalpate', fit for immortality, puts a very high reward on something that sounds modest.\n\nStaying level through good days and bad isn't treated as a nice personality trait. In the Gita's view it's the ground that freedom grows from, because a mind thrown around by every swing can't see anything that lasts.",
    lifeApplication:
      "For one week, note your mood each evening next to what happened that day. If they line up perfectly, good news up and bad news down, that's the space the verse wants you to widen. Not so you stop feeling, but so a rough Tuesday doesn't own you.",
  },
  {
    id: "2-37",
    chapter: 2,
    verse: 37,
    sanskrit:
      "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्। तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः॥",
    transliteration:
      "hato vā prāpsyasi svargaṁ jitvā vā bhokṣyase mahīm, tasmād uttiṣṭha kaunteya yuddhāya kṛta-niścayaḥ",
    english:
      "If you are killed, you will reach heaven. If you win, you will enjoy the earth. So rise up, Arjuna, resolved to fight.",
    meaning:
      "This is Krishna cutting through the paralysis with plain arithmetic. Arjuna is frozen because he's staring at the outcome, so Krishna walks both outcomes forward and shows that neither one is the disaster he fears. Once the result stops being the thing that decides everything, it's possible to just stand up and act.",
    quote: "Stop weighing the outcome. Stand up and do what's in front of you.",
    quoteHindi: "नतीजे को तौलना बंद करें। उठें और जो सामने है वह करें।",
    categories: ["courage", "motivation"],
    moment:
      "Krishna is still making his practical case, appealing to Arjuna's duty as a warrior. Here he walks Arjuna through both possible outcomes of the battle.",
    simpleMeaning:
      "Neither outcome of the battle is the disaster Arjuna fears, so there's no reason to stay frozen. Krishna wants him to stand up and act.",
    deeperMeaning:
      "This is Krishna using Arjuna's own frame, the warrior's code of his time, to break the paralysis. It's one of the most worldly arguments in the Gita, and the teaching soon moves past it to acting with no concern for reward at all.\n\nBut it shows something useful. Fear of an outcome often shrinks once you actually look at it.",
    lifeApplication:
      "When you're frozen before a decision, take the outcome you dread and walk it forward. If this fails, then what, concretely? Usually the honest answer is that you'd cope and carry on. Saying that out loud often drains the paralysis.",
  },
  {
    id: "2-50",
    chapter: 2,
    verse: 50,
    sanskrit:
      "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते। तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥",
    transliteration:
      "buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte, tasmād yogāya yujyasva yogaḥ karmasu kauśalam",
    english:
      "One settled in evenness of mind lets go, in this life, of both good and bad deeds. So devote yourself to yoga. Yoga is skill in action.",
    meaning:
      "Skill here isn't about doing the task faster or better than everyone else. It's the ability to work without being jerked around by how it turns out. When your calm doesn't depend on the result, you can give the work your full attention instead of splitting it with anxiety about the score.",
    quote: "Skill in action is doing the work without being ruled by how it turns out.",
    quoteHindi: "कर्म में कुशलता यही है कि काम पूरे मन से करें, और नतीजे को ख़ुद पर हावी न होने दें।",
    categories: ["karma", "success", "wisdom"],
    moment:
      "This is in the middle of Krishna's first explanation of the yoga of action, a few verses after he told Arjuna to act without claiming the fruits.",
    simpleMeaning:
      "Real skill is working with an even mind, not knocked off balance by success or failure. That, Krishna says, is what yoga is.",
    deeperMeaning:
      "'Yogah karmasu kaushalam', yoga is skill in action, is one of the most quoted lines in the Gita. The skill it means isn't technical.\n\nIt's the ability to act without your inner state hanging on the result. That counts as skill because anxiety about the score always takes some attention away from the work itself.",
    lifeApplication:
      "Watch someone really good under pressure, a surgeon or a musician or a teacher with a hard class. Part of what you're seeing is that they aren't bracing against failure. Next time you're under pressure, put your attention on the very next action instead of the outcome.",
  },
  {
    id: "2-56",
    chapter: 2,
    verse: 56,
    sanskrit:
      "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥",
    transliteration:
      "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ, vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate",
    english:
      "One whose mind is untroubled in sorrow, free from craving amid pleasures, and free from attachment, fear, and anger, is called a sage of steady wisdom.",
    meaning:
      "A steady mind isn't one that never feels anything. It's one that doesn't get dragged under by sadness or strung out by pleasure. Attachment, fear, and anger are what usually do the dragging, and loosening their grip is what leaves you actually settled rather than just performing calm.",
    quote: "Not dragged under by sorrow, not strung out by pleasure. That's a steady mind.",
    quoteHindi: "न दुख में डूबना, न सुख में बहक जाना। यही स्थिर मन है।",
    categories: ["peace", "wisdom", "detachment"],
    moment:
      "Arjuna has just asked a practical question: how does someone with steady wisdom speak, sit and walk? Krishna's answer runs to the end of chapter two, and this is near its start.",
    simpleMeaning:
      "A wise person still feels sorrow and pleasure. They just aren't ruled by them, because attachment, fear and anger have lost their grip.",
    deeperMeaning:
      "It's easy to misread this as emotional flatness. Sorrow and pleasure still arrive. They just don't take over.\n\nAttachment, fear and anger are named as the three things that usually do the taking over. It's their grip that loosens, not the capacity to feel.",
    lifeApplication:
      "In a hard week, separate the difficulty itself from what you're adding on top: fear about where it leads, anger at how unfair it is. You may not be able to change the difficulty. The add-ons are yours to work on, and they're often most of the weight.",
  },
  {
    id: "2-66",
    chapter: 2,
    verse: 66,
    sanskrit:
      "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना। न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्॥",
    transliteration:
      "nāsti buddhir ayuktasya na cāyuktasya bhāvanā, na cābhāvayataḥ śāntir aśāntasya kutaḥ sukham",
    english:
      "The undisciplined mind has no clear understanding and no steady reflection. Without reflection there is no peace, and without peace, where is happiness?",
    meaning:
      "This traces a chain most people feel but never name. A mind pulled in ten directions can't think clearly, and without clear thinking there's no steadiness. Without steadiness there's no peace, and a restless mind never quite reaches happiness no matter how hard it chases it.",
    quote: "A scattered mind finds no peace. And without peace, where would happiness even come from?",
    quoteHindi: "बिखरा हुआ मन शांति नहीं पाता। और शांति के बिना, सुख कहां से आएगा?",
    categories: ["peace", "wisdom", "life"],
    moment:
      "This is part of Krishna's portrait of the person with steady wisdom. He's just said that a controlled mind finds serenity, and now he describes the opposite.",
    simpleMeaning:
      "Without a steady mind there's no clear thinking, and without that there's no peace. Happiness comes at the end of that chain, not the start.",
    deeperMeaning:
      "The verse is a short chain of causes, and the order is what matters. Happiness is the last link, not the first.\n\nChasing it directly while skipping the earlier links (a steadied mind, clear thinking, focus) doesn't work, because the thing it depends on was never built.",
    lifeApplication:
      "On a frazzled day, you sit down to relax and the rest doesn't land because your mind is still racing. Before trying to enjoy anything, spend five minutes settling your attention on one thing. The verse says that order isn't optional.",
  },
  {
    id: "3-8",
    chapter: 3,
    verse: 8,
    sanskrit:
      "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
    transliteration:
      "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ, śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ",
    english:
      "Do the work you are meant to do, for action is better than inaction. Even keeping your body going would not be possible without it.",
    meaning:
      "Waiting for motivation to show up before you act usually means nothing happens. Krishna's point is blunt: doing something is better than doing nothing, and even staying alive takes action. The bar isn't inspiration. It's just starting the work that's yours to do.",
    quote: "Doing something beats doing nothing. Start the work that's yours.",
    quoteHindi: "कुछ करना, कुछ न करने से बेहतर है। जो काम आपका है, उसे शुरू करें।",
    categories: ["motivation", "karma", "success"],
    moment:
      "Arjuna has asked why Krishna pushes him toward terrible action if understanding is better than action. Krishna has just answered that nobody can stop acting, even for a moment.",
    simpleMeaning:
      "You can't avoid action, so you may as well do the work that's yours on purpose. Doing nothing isn't the safe option it looks like.",
    deeperMeaning:
      "Inaction isn't neutral in the Gita's view. It isn't even possible, since breathing and eating are already actions.\n\nSo the real choice was never between acting and not acting. It's between doing your work deliberately and drifting.",
    lifeApplication:
      "If you're waiting to feel motivated before starting something, try reversing the order. Start badly for fifteen minutes and see if the motivation shows up after. It usually does, and if it doesn't, you've still done fifteen minutes.",
  },
  {
    id: "3-25",
    chapter: 3,
    verse: 25,
    sanskrit:
      "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत। कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम्॥",
    transliteration:
      "saktāḥ karmaṇy avidvāṁso yathā kurvanti bhārata, kuryād vidvāṁs tathāsaktaś cikīrṣur loka-saṅgraham",
    english:
      "As the unwise act with attachment to their work, so the wise should act without attachment, seeking the good of the world.",
    meaning:
      "Most people work with a tight grip on what they'll get out of it. This verse asks for the same effort with a looser hold, aimed at something larger than your own return. The work doesn't get less serious. What changes is that it's no longer only about you.",
    quote: "Put in the same effort, but aim it at more than your own gain.",
    quoteHindi: "वही मेहनत करें, पर उसे सिर्फ़ अपने फ़ायदे से आगे की ओर लगाएं।",
    categories: ["karma", "purpose", "motivation"],
    moment:
      "Krishna has just pointed out that he has nothing to gain anywhere in the three worlds, and still he keeps working. If he stopped, he says, everything would fall into confusion.",
    simpleMeaning:
      "The wise work just as hard as anyone, but they aren't working only for themselves. Their effort is aimed at the good of everyone.",
    deeperMeaning:
      "The contrast isn't between hard work and laziness. Both kinds of people work equally hard. The difference is what the work is fastened to.\n\n'Loka-sangraha', holding the world together, is the aim Krishna gives the wise. The effort stays the same and the target widens.",
    lifeApplication:
      "On your next project, spend a minute on who it's actually for and how it helps them, before you think about what you'll get. You'll probably do the same work. You'll also be less flattened if the credit is smaller than you hoped.",
  },
  {
    id: "3-37",
    chapter: 3,
    verse: 37,
    sanskrit:
      "काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥",
    transliteration:
      "kāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ, mahāśano mahā-pāpmā viddhy enam iha vairiṇam",
    english:
      "It is desire, it is anger, born of the mode of passion, all-consuming and deeply harmful. Know this to be the enemy here.",
    meaning:
      "When something keeps going wrong in your life, it's worth checking what's driving it. Krishna names desire and anger as the usual engine: the wanting that's never satisfied, and the resentment that follows when it's blocked. It's not a comfortable answer, but knowing where the trouble starts is the only way to deal with it.",
    quote: "Unfilled wanting, and the anger when it's blocked. That's the enemy, and it's inside.",
    quoteHindi: "अधूरी चाहत, और उसके रुकने पर आया गुस्सा। यही असली दुश्मन है, और यह भीतर ही है।",
    categories: ["wisdom", "courage", "life"],
    moment:
      "Arjuna has just asked a very human question. What makes a person do wrong even when they don't want to, as if they're being forced? This is Krishna's answer.",
    simpleMeaning:
      "The force that pushes people into wrongdoing is inside them: desire, and the anger it turns into when it's blocked. Krishna calls it the real enemy.",
    deeperMeaning:
      "Krishna names one force with two faces. Desire comes first, and anger is what desire becomes when something blocks it.\n\nIn the next verse he says it covers wisdom the way dust covers a mirror. The mirror isn't damaged. It just can't show anything until it's wiped clean.",
    lifeApplication:
      "Think of a pattern that keeps hurting you, the same kind of blowup or self-sabotage. Trace it back one step and you'll usually find a want that wasn't met. Working on that want is slower than blaming the circumstances, but it's the only part you can reach.",
  },
  {
    id: "4-20",
    chapter: 4,
    verse: 20,
    sanskrit:
      "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः। कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः॥",
    transliteration:
      "tyaktvā karma-phalāsaṅgaṁ nitya-tṛpto nirāśrayaḥ, karmaṇy abhipravṛtto 'pi naiva kiñcit karoti saḥ",
    english:
      "Having let go of attachment to the fruits of action, ever content and needing no support, such a person does nothing at all even while fully engaged in work.",
    meaning:
      "There's a way of working hard that doesn't leave you drained, and it comes from not needing the outcome to be a certain way. When you're already content and not leaning your whole weight on the result, the effort stops feeling like a gamble. You act fully, but nothing is riding on it the way it used to be.",
    quote: "Work fully and need nothing from it. That's when the effort stops draining you.",
    quoteHindi: "पूरे मन से काम करें, पर उससे कुछ पाने की चाह न रखें। तब मेहनत आपको थकाती नहीं।",
    categories: ["detachment", "peace", "purpose"],
    moment:
      "Krishna is in the middle of describing how the wise can act without being bound by what they do. This verse describes that person.",
    simpleMeaning:
      "When you don't need the result to go a certain way, even hard work stops binding you. You act fully and stay free.",
    deeperMeaning:
      "The paradox is the point. Outwardly the person is busy and effective. Inwardly they aren't 'doing' in the sense that binds, because they aren't staking their sense of being okay on how it turns out.\n\n'Nitya-tripta', always content, is what makes this possible. Contentment comes first, not as a reward at the end.",
    lifeApplication:
      "Notice the difference between a task done from a settled place and the same task done while your future feels like it's riding on it. The hours are the same, and the cost isn't. Before your next big piece of work, remind yourself what stays fine about your life whatever happens.",
  },
  {
    id: "4-42",
    chapter: 4,
    verse: 42,
    sanskrit:
      "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः। छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत॥",
    transliteration:
      "tasmād ajñāna-sambhūtaṁ hṛt-sthaṁ jñānāsinātmanaḥ, chittvainaṁ saṁśayaṁ yogam ātiṣṭhottiṣṭha bhārata",
    english:
      "So with the sword of knowledge cut down this doubt in your heart, born of not seeing clearly. Take refuge in yoga, and rise up, Arjuna.",
    meaning:
      "Doubt that sits in you unaddressed will keep you stuck longer than any outside obstacle. Krishna's instruction is direct: cut through it with what you actually know to be true, and then get up. Endless deliberation isn't the same as being careful. At some point you have to stand and move.",
    quote: "Cut through the doubt with what you know is true. Then get up.",
    quoteHindi: "जो सच आप जानते हैं, उससे संदेह को काट दें। फिर उठ खड़े हों।",
    categories: ["courage", "motivation", "positive-thinking"],
    moment:
      "This is the last verse of chapter four. Krishna has been praising knowledge as the greatest purifier, and he ends by telling Arjuna to use it.",
    simpleMeaning:
      "Doubt that comes from confusion keeps you stuck. Krishna tells Arjuna to cut through it with clear understanding and get on with what he has to do.",
    deeperMeaning:
      "The doubt Krishna means is specific. It's born of 'ajnana', not seeing clearly, so it's the kind you could resolve by looking straight at it.\n\nFor that kind, more thinking doesn't help. It needs a decision. The sword image says the same thing: you don't untie this knot. You cut it.",
    lifeApplication:
      "If you've had the information for weeks and keep re-examining it without getting closer, that's this kind of doubt. Write down what you actually know is true, make the call based on it, and take the next step today.",
  },
  {
    id: "5-10",
    chapter: 5,
    verse: 10,
    sanskrit:
      "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
    transliteration:
      "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ, lipyate na sa pāpena padma-patram ivāmbhasā",
    english:
      "One who acts offering all actions to the divine, letting go of attachment, is untouched by wrong, as a lotus leaf is untouched by water.",
    meaning:
      "You can be fully involved in your work and still not get stained by it. The move is to offer the results outward instead of clutching them, so success doesn't inflate you and failure doesn't crush you. The lotus leaf sits in the water without getting wet. Same idea.",
    quote: "Be in the work without being stained by how it turns out. Like a lotus leaf in water.",
    quoteHindi: "काम में रहें, पर उसके नतीजे से बेदाग़ रहें। जैसे पानी में कमल का पत्ता।",
    categories: ["karma", "detachment", "peace"],
    moment:
      "Arjuna has asked whether it's better to renounce action or to act. Krishna says acting is better, and here he shows how someone can act without getting caught in it.",
    simpleMeaning:
      "You can be fully involved in the world without being stained by it. The key is to offer your work up rather than clutch at what it brings you.",
    deeperMeaning:
      "The lotus leaf is a well-known image in Indian thought. It grows in water and lies on water, and drops still roll straight off it.\n\nThe leaf isn't avoiding the water. It's fully in it. That's the picture Krishna gives of a person fully engaged in work who doesn't get soaked by the results.",
    lifeApplication:
      "Notice whether the reception of your work changes how you feel about yourself for days afterward. If it does, try treating the next piece as something you're giving away rather than a verdict on you. That's what lets the response roll off.",
  },
  {
    id: "5-22",
    chapter: 5,
    verse: 22,
    sanskrit:
      "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते। आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः॥",
    transliteration:
      "ye hi saṁsparśa-jā bhogā duḥkha-yonaya eva te, ādy-antavantaḥ kaunteya na teṣu ramate budhaḥ",
    english:
      "The pleasures that come from contact with the senses are themselves sources of pain. They have a beginning and an end, Arjuna, so the wise do not delight in them.",
    meaning:
      "The hit you get from wanting something and finally getting it always fades, and often it leaves you worse off than before. Every pleasure that depends on the outside has a start and a finish built into it. Knowing that doesn't mean refusing to enjoy anything. It means not building your life around the next hit.",
    quote: "Every pleasure that comes from outside has an expiry date. Don't build your life on the next one.",
    quoteHindi: "बाहर से मिलने वाला हर सुख एक दिन ख़त्म हो जाता है। अपनी ज़िंदगी अगले सुख के सहारे न टिकाएं।",
    categories: ["detachment", "wisdom", "life"],
    moment:
      "Krishna has just said that someone who isn't attached to outside contacts finds happiness within. Here he explains why outside pleasures can't do the same job.",
    simpleMeaning:
      "Pleasures that depend on the senses always end, and their ending brings pain. That's why the wise don't build their happiness on them.",
    deeperMeaning:
      "The verse doesn't say these pleasures are wicked. It says they're 'adyantavantah', things with a beginning and an end built in.\n\nThat's where the pain comes from: the letdown when they finish and the craving to repeat them. The wise still have them. They just don't build on them.",
    lifeApplication:
      "Think about the last thing you badly wanted and got. There was the wanting, a short high, the fade and often a small dip afterward. Enjoy the next one fully, and don't make it the thing holding your week up.",
  },
  {
    id: "6-7",
    chapter: 6,
    verse: 7,
    sanskrit:
      "जितात्मनः प्रशान्तस्य परमात्मा समाहितः। शीतोष्णसुखदुःखेषु तथा मानापमानयोः॥",
    transliteration:
      "jitātmanaḥ praśāntasya paramātmā samāhitaḥ, śītoṣṇa-sukha-duḥkheṣu tathā mānāpamānayoḥ",
    english:
      "For one who has mastered the mind and is at peace, the Supreme Self stays steady and present, through cold and heat, pleasure and pain, honor and dishonor alike.",
    meaning:
      "Once the mind is actually under your control, the outside stuff loses its power to swing you around. Heat and cold, a good week and a bad one, praise and insult all land on steadier ground. It's not that any of it stops happening. It just stops running the show.",
    quote: "When your mind is steady, praise and insult land the same way. Neither one runs you.",
    quoteHindi: "जब मन स्थिर हो, तो तारीफ़ और अपमान एक जैसे लगते हैं। कोई भी आप पर हावी नहीं होता।",
    categories: ["peace", "wisdom", "success"],
    moment:
      "Krishna has just said the mind is either your friend or your enemy. Here he describes what happens once it's become your friend.",
    simpleMeaning:
      "Once you've mastered your mind, outside conditions lose their power over you. Heat and cold, pleasure and pain, praise and insult all meet the same calm.",
    deeperMeaning:
      "Look at what's on the list. Cold and heat are physical. Pleasure and pain are personal. Honor and insult are social, and Krishna puts them on the same line as the weather.\n\nPraise and criticism are treated as just another pair of conditions that come and go.",
    lifeApplication:
      "Praise and criticism are the clearest test of this. Next time you get either, notice how long it moves you. You don't have to stop caring about feedback. The aim is for both to land on the same steady ground.",
  },
  {
    id: "6-26",
    chapter: 6,
    verse: 26,
    sanskrit:
      "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्। ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    transliteration:
      "yato yato niścarati manaś cañcalam asthiram, tatas tato niyamyaitad ātmany eva vaśaṁ nayet",
    english:
      "Wherever the restless, unsteady mind wanders off to, one should draw it back each time and bring it under the control of the self.",
    meaning:
      "The mind wandering off isn't a failure. It's just what minds do. The instruction is simple, and you repeat it as many times as needed: notice it's gone, and bring it back. Done steadily instead of with frustration, that returning is the whole practice.",
    quote: "The mind wanders. You notice, and you bring it back. That's the practice, repeated.",
    quoteHindi: "मन भटकता है। आप ध्यान देते हैं, और उसे वापस लाते हैं। यही साधना है, बार-बार।",
    categories: ["peace", "motivation", "positive-thinking"],
    moment:
      "Krishna is giving practical meditation instructions here. He's just told Arjuna to settle the mind gradually, step by step.",
    simpleMeaning:
      "The mind will wander. The practice is simply to bring it back each time, without frustration, as often as it takes.",
    deeperMeaning:
      "The instruction is almost mechanical, and that's its strength. There's no special technique, just a loop: the mind leaves, you notice, and you bring it back.\n\n'Yato yato', wherever and whenever, assumes the wandering will keep happening. The practice is in the returning, not in a mind that never drifts.",
    lifeApplication:
      "When your attention slides off a conversation or a task, come back without the inner sigh. Treat each return as one repetition, like a rep at the gym. A day with fifty returns isn't a failed day. It's fifty reps.",
  },
  {
    id: "6-32",
    chapter: 6,
    verse: 32,
    sanskrit:
      "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन। सुखं वा यदि वा दुःखं स योगी परमो मतः॥",
    transliteration:
      "ātmaupamyena sarvatra samaṁ paśyati yo 'rjuna, sukhaṁ vā yadi vā duḥkhaṁ sa yogī paramo mataḥ",
    english:
      "One who sees all beings as like themselves, Arjuna, and feels their pleasure and their pain as their own, is regarded as the highest yogi.",
    meaning:
      "The highest mark of practice here isn't a state you reach alone on a cushion. It's being able to feel someone else's pain and joy with the same weight as your own. When the line between your wellbeing and theirs gets thin, that's the sign something real has shifted.",
    quote: "Feel someone else's pain and joy as if they were your own. That's the real measure.",
    quoteHindi: "किसी और के दुख और सुख को अपना समझकर महसूस करें। यही असली पैमाना है।",
    categories: ["heart-touching", "wisdom", "life", "peace"],
    moment:
      "This closes Krishna's description of where meditation leads. He's described the yogi who sees the self in everyone, and this is the highest form of it.",
    simpleMeaning:
      "The highest practice is feeling other people's joy and pain as if they were your own. It's measured by how you treat others, not by private calm.",
    deeperMeaning:
      "It's striking where the Gita puts the peak of practice. Not in private bliss or great feats of concentration, but in how you feel about other people.\n\n'Atmaupamyena', by comparison with yourself, is the method. You know what your own pain is like, so you take theirs just as seriously.",
    lifeApplication:
      "Use this as a check on any self-improvement. If years of practice have made you calmer but no better at feeling for other people, something's unfinished. Next time a friend shares bad news, notice whether it actually lands in you.",
  },
  {
    id: "9-30",
    chapter: 9,
    verse: 30,
    sanskrit:
      "अपि चेत्सुदुराचारो भजते मामनन्यभाक्। साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥",
    transliteration:
      "api cet su-durācāro bhajate mām ananya-bhāk, sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ",
    english:
      "Even if someone of very bad conduct turns to me with undivided devotion, they should be considered righteous, for they have resolved rightly.",
    meaning:
      "A sincere turn in the right direction counts from the moment you make it, not after you've proven yourself for years. Krishna says even someone with a bad track record, if they've genuinely committed, should be regarded as on the right path already. The resolve is what matters. The rest follows.",
    quote: "The moment you sincerely turn things around, you're already on the right path.",
    quoteHindi: "जिस पल आप सच्चे मन से ख़ुद को बदलते हैं, आप उसी पल सही राह पर होते हैं।",
    categories: ["positive-thinking", "courage", "heart-touching"],
    moment:
      "Krishna has just said he's the same toward everyone. Now he pushes that further, to the people you'd least expect.",
    simpleMeaning:
      "A sincere turn toward the divine counts from the moment you make it, no matter what came before. Your past doesn't disqualify you.",
    deeperMeaning:
      "The key phrase is 'samyag vyavasitah', rightly resolved. Krishna doesn't say the past didn't happen. He says the decisive thing is the turn itself, and it counts from the moment it's made, not after years of probation.\n\nThe next verse adds that such a person quickly becomes righteous.",
    lifeApplication:
      "If you're trying to change something big, a habit or a way of treating people, don't wait until you've proven yourself to believe the change is real. Treating the decision as real from day one is part of what makes it hold. A slip doesn't cancel the direction.",
  },
  {
    id: "17-3",
    chapter: 17,
    verse: 3,
    sanskrit:
      "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
    transliteration:
      "sattvānurūpā sarvasya śraddhā bhavati bhārata, śraddhā-mayo 'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ",
    english:
      "Each person's faith matches their nature, Arjuna. A person is made of their faith. As their faith is, so are they.",
    meaning:
      "What you genuinely believe about yourself and the world quietly sets the shape of your life. Krishna puts it plainly: a person is made of their faith, and whatever they put their trust in is what they become. It's worth checking, then, what you've actually placed your faith in.",
    quote: "You are made of what you believe. Whatever you put your faith in is what you become.",
    quoteHindi: "आप वही हैं जो आप मानते हैं। जिस पर आप विश्वास रखते हैं, वही आप बन जाते हैं।",
    categories: ["positive-thinking", "motivation", "purpose"],
    moment:
      "Arjuna has asked about people who don't follow the scriptures but still worship with faith. Krishna answers that faith comes in three kinds, depending on a person's nature.",
    simpleMeaning:
      "What you truly trust shapes who you become. A person's faith and their character are, in the end, the same thing.",
    deeperMeaning:
      "Faith here is wider than religion. 'Shraddha' means what you actually trust and treat as real at gut level, whatever you'd say out loud.\n\nThe claim is that this shapes your choices and attention until it shapes you. So the useful question isn't what you believe. It's what you live as if it were true.",
    lifeApplication:
      "Look at your calendar and your reactions under pressure rather than your stated values. If you act as if money keeps you safe, or other people's approval decides your worth, that's a faith. Naming it is the first step toward choosing it on purpose.",
  },
  {
    id: "18-48",
    chapter: 18,
    verse: 48,
    sanskrit:
      "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्। सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥",
    transliteration:
      "sahajaṁ karma kaunteya sa-doṣam api na tyajet, sarvārambhā hi doṣeṇa dhūmenāgnir ivāvṛtāḥ",
    english:
      "One should not give up the work suited to one's nature, Arjuna, even if it is flawed. Every undertaking is clouded by some flaw, as fire is covered by smoke.",
    meaning:
      "Waiting for the flawless version of your work before you commit to it means waiting forever. Every effort has something wrong with it, the same way any fire gives off smoke. That's not a reason to walk away from the work that's genuinely yours. Do it, flaws and all.",
    quote: "Every effort has a flaw in it, like fire has smoke. Do your work anyway.",
    quoteHindi: "हर काम में कोई न कोई कमी होती है, जैसे आग में धुआं। फिर भी अपना काम करें।",
    categories: ["motivation", "courage", "purpose", "karma"],
    moment:
      "In the final chapter Krishna is describing how each person's natural work grows out of their nature. He's just repeated that your own path done imperfectly beats someone else's done well.",
    simpleMeaning:
      "Every kind of work has flaws, so flaws aren't a reason to abandon work that suits you. Do your own work, imperfections and all.",
    deeperMeaning:
      "The fire and smoke image makes flaws universal. There's no fire without smoke, so waiting for a smokeless one means never lighting anything.\n\nThat changes the question. It isn't whether the work has problems, since all work does. It's whether this work is genuinely yours.",
    lifeApplication:
      "If you're thinking of quitting something because you've found real problems in it, check whether the problems are the smoke or the fire. Every path has smoke. The thing to decide is whether this one fits you.",
  },
  {
    id: "18-58",
    chapter: 18,
    verse: 58,
    sanskrit:
      "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि। अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
    transliteration:
      "mac-cittaḥ sarva-durgāṇi mat-prasādāt tariṣyasi, atha cet tvam ahaṅkārān na śroṣyasi vinaṅkṣyasi",
    english:
      "With your mind fixed on me, you will cross over every obstacle by my grace. But if out of ego you will not listen, you will be lost.",
    meaning:
      "With your attention steady on what matters, obstacles that looked impossible turn out to be crossable. The warning attached is just as plain: if your ego won't let you listen and adjust, you're the thing that sinks you. It's the same choice most hard moments come down to.",
    quote: "Focus on what matters and you'll get through. Let ego stop you from listening, and you won't.",
    quoteHindi: "जो मायने रखता है उस पर ध्यान रखें, तो आप हर मुश्किल पार कर लेंगे। पर अगर अहंकार आपको सुनने न दे, तो नहीं।",
    categories: ["courage", "motivation", "success"],
    moment:
      "Near the end, Krishna has told Arjuna to offer all his actions to him. Now he spells out the two ways this can go.",
    simpleMeaning:
      "With your attention on the divine, you'll get through every obstacle. The real danger isn't the obstacles. It's ego refusing to listen.",
    deeperMeaning:
      "The failure Krishna describes isn't about the size of the obstacles. It's ego blocking the help.\n\nThe next verse makes it concrete. If Arjuna decides out of pride that he won't fight, his own nature will force him to anyway. Refusing to listen doesn't avoid the situation. It just means facing it without guidance.",
    lifeApplication:
      "Think of a time someone told you something true that you couldn't take because it hurt your pride. Next time feedback stings, wait a day before rejecting it. The sting is often a sign it's worth hearing.",
  },
  {
    id: "2-7",
    chapter: 2,
    verse: 7,
    sanskrit:
      "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः। यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥",
    transliteration:
      "kārpaṇya-doṣopahata-svabhāvaḥ pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ, yac chreyaḥ syān niścitaṁ brūhi tan me śiṣyas te 'haṁ śādhi māṁ tvāṁ prapannam",
    english:
      "My nature is overcome by weakness and pity, and my mind is confused about what is right. I ask you to tell me clearly what is best for me. I am your student. Teach me, for I have come to you for refuge.",
    meaning:
      "This is the turning point of the Gita. Arjuna stops arguing and admits he doesn't know. Asking honestly for guidance is where the real teaching begins.",
    quote: "Admitting you don't know is where real guidance begins.",
    quoteHindi: "यह मान लेना कि आप नहीं जानते, सच्चे मार्गदर्शन की शुरुआत है।",
    categories: ["wisdom", "courage", "life"],
    moment:
      "Arjuna has spent the end of chapter one and the start of chapter two arguing that fighting is wrong. Here he stops arguing, and for the first time he asks Krishna to teach him.",
    simpleMeaning:
      "Arjuna admits he's lost. His usual strength has given way, and he can't tell what's right anymore. So he does the hardest thing for a proud warrior: he asks to be taught.",
    deeperMeaning:
      "This verse is why the Gita exists at all. Until now Krishna has been Arjuna's friend and charioteer. Here Arjuna calls himself 'shishya', a student, and the relationship changes.\n\nThe teaching only starts once he admits he doesn't know. Up to this point he's been the one telling Krishna what's right.",
    lifeApplication:
      "Next time you're stuck on a hard decision, notice whether you're asking for advice or asking for agreement. Try saying plainly to someone you trust, 'I don't know what to do here.' It often opens up help that defending your position never would.",
  },
  {
    id: "2-27",
    chapter: 2,
    verse: 27,
    sanskrit:
      "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥",
    transliteration:
      "jātasya hi dhruvo mṛtyur dhruvaṁ janma mṛtasya ca, tasmād aparihārye 'rthe na tvaṁ śocitum arhasi",
    english:
      "Death is certain for whoever is born, and birth is certain for whoever dies. So you shouldn't grieve over what can't be avoided.",
    meaning:
      "Some things can't be changed, and death is the clearest of them. Grieving is human. Fighting the fact itself only adds suffering.",
    quote: "What is born will die. Don't spend your life grieving what can't be avoided.",
    quoteHindi: "जो जन्मा है, उसकी मृत्यु निश्चित है। जो टाला नहीं जा सकता, उस पर जीवन भर शोक न करें।",
    categories: ["life", "wisdom", "peace"],
    moment:
      "Krishna has been giving Arjuna spiritual reasons not to grieve. Here he adds a plain, practical one: even if you don't accept that the self is eternal, death still comes to everyone.",
    simpleMeaning:
      "Everyone who's born will die, and in the Gita's view everyone who dies is born again. That cycle can't be stopped, so grieving as though it could is a mistake.",
    deeperMeaning:
      "This argument works even if you set the spiritual claims aside. In the verse before, Krishna says 'even if you think the self is born and dies', and then gives this reason anyway.\n\nThe word 'aparihārya', unavoidable, carries the point. Grief for a loss is natural. Grief that refuses the fact itself has nowhere to go.",
    lifeApplication:
      "If you're carrying grief that feels like an argument with what happened, try saying the plain fact out loud: this happened, and it couldn't have been otherwise. It won't stop the sadness. It can stop the second layer of suffering that comes from fighting reality.",
  },
  {
    id: "2-58",
    chapter: 2,
    verse: 58,
    sanskrit:
      "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥",
    transliteration:
      "yadā saṁharate cāyaṁ kūrmo 'ṅgānīva sarvaśaḥ, indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā",
    english:
      "When someone can draw their senses back from the objects of the senses, the way a tortoise draws in its limbs, their wisdom is steady.",
    meaning:
      "A steady mind isn't one that never meets temptation. It's one that can pull back when it needs to, as easily as a tortoise pulls into its shell.",
    quote: "Like a tortoise drawing in its limbs, learn to pull your senses back when you need to.",
    quoteHindi: "जैसे कछुआ अपने अंग समेट लेता है, वैसे ही ज़रूरत पड़ने पर अपनी इंद्रियों को समेटना सीखें।",
    categories: ["peace", "detachment", "wisdom"],
    moment:
      "Arjuna has asked what a person of steady wisdom is like. Krishna is answering, and this is the image he uses for how that person handles the pull of the senses.",
    simpleMeaning:
      "The wise person can withdraw their attention from whatever is pulling at it, whenever they choose. That ability is what makes their wisdom steady.",
    deeperMeaning:
      "The tortoise is a careful choice. It doesn't lose its limbs or stop using them. It walks, eats and moves through the world, and it pulls in when there's danger.\n\nSo the verse isn't about giving up the senses. It's about being able to withdraw at will, which is a skill you can practice.",
    lifeApplication:
      "Pick one pull that runs your day, probably your phone. Practice drawing back from it for short, planned stretches, like the first half hour after waking. The goal isn't to never use it. It's to be the one deciding when.",
  },
  {
    id: "2-69",
    chapter: 2,
    verse: 69,
    sanskrit:
      "या निशा सर्वभूतानां तस्यां जागर्ति संयमी। यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः॥",
    transliteration:
      "yā niśā sarva-bhūtānāṁ tasyāṁ jāgarti saṁyamī, yasyāṁ jāgrati bhūtāni sā niśā paśyato muneḥ",
    english:
      "What is night for all beings is the time of waking for the self-controlled. And what all beings are awake to is night for the sage who sees.",
    meaning:
      "The wise are awake to what most people sleep through, and unmoved by what most people chase. They live by a different clock.",
    quote: "What the world sleeps through, the wise are awake to.",
    quoteHindi: "जिसमें दुनिया सोई रहती है, उसमें ज्ञानी जागते हैं।",
    categories: ["wisdom", "life", "purpose"],
    moment:
      "This is near the end of Krishna's long portrait of the person with steady wisdom. Here he describes how differently that person sees the world.",
    simpleMeaning:
      "The things most people ignore, the wise pay full attention to. The things most people are absorbed in, the wise barely notice. Their priorities run almost opposite to everyone else's.",
    deeperMeaning:
      "The night here is a figure of speech. Most people are awake to pleasure, status and possessions, and asleep to the self. For the sage it's the reverse.\n\nThe verse is also a gentle warning that real clarity can look odd from the outside. Someone awake to different things will seem asleep to yours.",
    lifeApplication:
      "Look at what took most of your attention yesterday. Then ask what you were asleep to while you did it: a person, your health, a question that matters. That second list is often where the verse wants you to wake up.",
  },
  {
    id: "3-19",
    chapter: 3,
    verse: 19,
    sanskrit:
      "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    transliteration:
      "tasmād asaktaḥ satataṁ kāryaṁ karma samācara, asakto hy ācaran karma param āpnoti pūruṣaḥ",
    english:
      "So always do the work that needs doing, without attachment. By working without attachment, a person reaches the highest.",
    meaning:
      "You don't have to step away from work to grow. Doing what needs doing, without clinging to what you'll get, is itself the path.",
    quote: "Do the work that needs doing, without clinging. That is the path.",
    quoteHindi: "जो काम ज़रूरी है, उसे बिना आसक्ति के करें। यही मार्ग है।",
    categories: ["karma", "purpose", "detachment"],
    moment:
      "Arjuna has asked why he should act at all if understanding is higher than action. Krishna has spent several verses arguing that action can't be avoided, and here he draws his conclusion.",
    simpleMeaning:
      "Work isn't an obstacle to spiritual growth. Done without clinging to results, the work itself takes you to the highest goal.",
    deeperMeaning:
      "The word 'kāryam', what ought to be done, matters. Krishna isn't saying do anything at all. He means the work that genuinely falls to you.\n\nThe next verse gives King Janaka as proof: a ruler who reached perfection while still running a kingdom. Freedom isn't kept for people who leave the world.",
    lifeApplication:
      "Pick a task you've been treating as a distraction from the life you'd rather be living. Do it today as if it were the practice itself, with full attention and no running commentary on what it gets you. Notice whether it feels lighter.",
  },
  {
    id: "4-39",
    chapter: 4,
    verse: 39,
    sanskrit:
      "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    transliteration:
      "śraddhāvāl labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ, jñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati",
    english:
      "Someone with faith, devoted to it and in control of their senses, gains knowledge. And having gained it, they soon reach the highest peace.",
    meaning:
      "Real understanding comes to people who trust the path, commit to it and keep their senses in check. Peace follows soon after.",
    quote: "Faith, focus and self-control bring knowledge. And knowledge brings peace.",
    quoteHindi: "श्रद्धा, लगन और संयम से ज्ञान मिलता है, और ज्ञान से शांति।",
    categories: ["wisdom", "peace", "motivation"],
    moment:
      "Krishna has just said that nothing in the world purifies like knowledge. Here he tells Arjuna who actually gets that knowledge.",
    simpleMeaning:
      "Three things open the door to real understanding: trust in the path, steady commitment and self-control. Once that understanding comes, deep peace isn't far behind.",
    deeperMeaning:
      "'Shraddhāvān labhate jnānam', the person with faith gains knowledge, is one of the most quoted lines in the Gita. Faith here doesn't mean believing without thinking.\n\nIt means trusting the process enough to keep going before you see results. Learning almost anything hard needs that trust, because the understanding arrives after the effort, not before it.",
    lifeApplication:
      "Think of something you gave up on because it wasn't working yet: a skill, a practice, a book. Ask whether you stopped before the understanding had time to arrive. Pick one and give it a set period of real commitment before you judge it.",
  },
  {
    id: "4-40",
    chapter: 4,
    verse: 40,
    sanskrit:
      "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति। नायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥",
    transliteration:
      "ajñaś cāśraddadhānaś ca saṁśayātmā vinaśyati, nāyaṁ loko 'sti na paro na sukhaṁ saṁśayātmanaḥ",
    english:
      "But someone who is ignorant, without faith and full of doubt, is lost. For the doubter there is no happiness, not in this world or the next.",
    meaning:
      "Some doubt is healthy. Doubt that never settles into a decision eats away at your peace and keeps you from moving at all.",
    quote: "Endless doubt brings no happiness, here or anywhere.",
    quoteHindi: "अंतहीन संदेह से कोई सुख नहीं मिलता, न यहाँ, न कहीं और।",
    categories: ["wisdom", "courage", "life"],
    moment:
      "This comes right after the verse about faith leading to knowledge and peace. Here Krishna describes the opposite.",
    simpleMeaning:
      "Someone who doubts everything and trusts nothing can't build anything, inside or out. They don't find happiness anywhere, because the doubt goes with them.",
    deeperMeaning:
      "'Samshayātmā vinashyati', the doubting self is lost, is the famous line here. The word describes someone whose very self has become doubt, not someone who simply has questions.\n\nThe Gita isn't against questioning. Arjuna asks questions all the way through. It's against doubt that never resolves, because that keeps a person from ever committing to a path.",
    lifeApplication:
      "If you've been undecided about something for a long time, set a date to decide. Gather what you need before then, and when the day comes, choose and commit. You can adjust later. Living in permanent doubt costs more than a choice that turns out imperfect.",
  },
  {
    id: "5-18",
    chapter: 5,
    verse: 18,
    sanskrit:
      "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
    transliteration:
      "vidyā-vinaya-sampanne brāhmaṇe gavi hastini, śuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ",
    english:
      "The wise look with the same eye on a learned and humble priest, a cow, an elephant, a dog and the person society has cast out.",
    meaning:
      "Real wisdom sees the same worth in every being, whatever their status or form. It doesn't rank souls.",
    quote: "The wise see the same light in every being, high or low.",
    quoteHindi: "ज्ञानी हर प्राणी में एक ही प्रकाश देखते हैं, चाहे वह ऊँचा हो या नीचा।",
    categories: ["wisdom", "peace", "heart-touching"],
    moment:
      "Krishna is describing people who have found inner freedom through knowledge. This verse names the clearest sign of it: how they see others.",
    simpleMeaning:
      "Someone who truly understands sees the same self in everyone. The respected scholar, the animals and the person the world looks down on are all equal in their eyes.",
    deeperMeaning:
      "The list was deliberately shocking for its time. It puts a learned priest, the most honored person in that society, next to animals and someone treated as untouchable.\n\nThe word is 'sama-darshinah', those who see equally. It's not that the wise can't see differences. They see past them to what's the same in everyone.",
    lifeApplication:
      "Notice who you treat with extra warmth and who you barely see: the boss and the cleaner, the person who can help you and the one who can't. For one day, try giving everyone the same attention. It's harder than it sounds, and that's the point.",
  },
  {
    id: "6-34",
    chapter: 6,
    verse: 34,
    sanskrit:
      "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्। तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥",
    transliteration:
      "cañcalaṁ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham, tasyāhaṁ nigrahaṁ manye vāyor iva su-duṣkaram",
    english:
      "The mind is restless, Krishna, turbulent, strong and stubborn. I think controlling it is as hard as controlling the wind.",
    meaning:
      "Arjuna says what everyone who's tried to calm their mind has felt: it seems impossible. The Gita takes that honesty seriously.",
    quote: "The mind is as restless as the wind. Admitting that is the first step.",
    quoteHindi: "मन हवा जितना चंचल है। यह मान लेना पहला कदम है।",
    categories: ["peace", "wisdom", "life"],
    moment:
      "Krishna has just described the yogi whose mind is perfectly steady. Arjuna pushes back, and this is his honest objection.",
    simpleMeaning:
      "Arjuna tells Krishna plainly that the mind is restless, powerful and hard to pin down. Trying to control it feels like trying to hold the wind.",
    deeperMeaning:
      "It matters that this objection is in the Gita at all. Arjuna isn't a beginner. He's a disciplined warrior, and he still finds his mind ungovernable.\n\nKrishna doesn't scold him for it. In the very next verse he agrees, then explains how it can be done anyway. The honesty comes first, then the method.",
    lifeApplication:
      "If you've tried meditating and felt like a failure, you're in good company. Write down one sentence describing how your mind actually behaves, without judging it. Seeing it clearly is the start of working with it.",
  },
  {
    id: "6-40",
    chapter: 6,
    verse: 40,
    sanskrit:
      "पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते। न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति॥",
    transliteration:
      "pārtha naiveha nāmutra vināśas tasya vidyate, na hi kalyāṇa-kṛt kaścid durgatiṁ tāta gacchati",
    english:
      "Arjuna, someone on this path is never destroyed, in this world or the next. No one who does good ever comes to a bad end, my friend.",
    meaning:
      "Effort toward the good is never wasted, even if you don't finish the journey. Whatever you build stays with you.",
    quote: "No one who does good ever comes to a bad end.",
    quoteHindi: "जो भला करता है, उसका कभी बुरा अंत नहीं होता।",
    categories: ["positive-thinking", "motivation", "peace"],
    moment:
      "Arjuna has just asked what happens to someone who starts this path sincerely but falls away before reaching the goal. Do they lose everything? This is Krishna's reassurance.",
    simpleMeaning:
      "If you sincerely try to live well and fall short, you haven't lost anything. Krishna promises that someone who does good never ends up badly, in this life or after it.",
    deeperMeaning:
      "Krishna calls Arjuna 'tāta' here, a warm word, roughly 'my dear'. It's one of the gentlest moments in the conversation.\n\nThe verses after this explain the promise. Someone who falls away is born again in good circumstances and picks up where they left off. No sincere effort is ever cancelled.",
    lifeApplication:
      "If you've abandoned a good effort, a habit or a change you were making, and feel like it was all wasted, it wasn't. Start again from where you are now. The verse's whole point is that the earlier work still counts.",
  },
  {
    id: "7-19",
    chapter: 7,
    verse: 19,
    sanskrit:
      "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥",
    transliteration:
      "bahūnāṁ janmanām ante jñānavān māṁ prapadyate, vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
    english:
      "After many births, the one who truly knows comes to me, realizing that Vasudeva is everything. Such a great soul is very rare.",
    meaning:
      "Real understanding takes a long time to ripen, and when it does, it sees the divine in everything. That's why such people are rare.",
    quote: "After a long journey, the wise see the divine in everything. Such a person is rare.",
    quoteHindi: "लंबी यात्रा के बाद ज्ञानी हर चीज़ में ईश्वर को देखते हैं। ऐसा व्यक्ति दुर्लभ है।",
    categories: ["wisdom", "purpose", "heart-touching"],
    moment:
      "Krishna has been describing four kinds of people who turn to him: the distressed, the curious, those who want something and the wise. Here he says what the wisest of them finally sees.",
    simpleMeaning:
      "Understanding the divine isn't a quick event. After a very long journey, the wise person sees that everything is the divine. People who get there are rare.",
    deeperMeaning:
      "'Vāsudevah sarvam iti', Vasudeva is everything, is the heart of the verse. Vasudeva is a name for Krishna, so the claim is that nothing stands outside him.\n\nThe phrase 'after many births' sets realistic expectations. The Gita doesn't promise sudden enlightenment. It describes something that ripens slowly, over a very long time.",
    lifeApplication:
      "If spiritual or personal growth feels slow, this verse is a reminder that slowness is normal. Pick a practice you can see yourself doing for years, not weeks, and judge it on that timescale.",
  },
  {
    id: "9-34",
    chapter: 9,
    verse: 34,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥",
    transliteration:
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru, mām evaiṣyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ",
    english:
      "Fix your mind on me, be devoted to me, offer to me and bow to me. Joining yourself to me this way, with me as your goal, you will come to me.",
    meaning:
      "The whole path in one line: keep the divine in mind, love it, offer to it and bow to it. The rest follows.",
    quote: "Fix your mind on the divine, love it, and you will arrive.",
    quoteHindi: "अपना मन ईश्वर पर लगाइए, उससे प्रेम कीजिए, और आप उस तक पहुँच जाएँगे।",
    categories: ["wisdom", "peace", "heart-touching"],
    moment:
      "This is the last verse of chapter nine, which Krishna calls the royal secret. After explaining how close he is to everyone who turns to him, he sums up the whole path.",
    simpleMeaning:
      "Krishna gives four simple instructions: think of me, love me, offer to me and bow to me. Living that way, you'll reach him.",
    deeperMeaning:
      "This verse comes back almost word for word near the very end of the Gita, as 18.65. Krishna repeats it because it's the simplest form of everything he teaches.\n\nNone of the four steps needs special skill or learning. Thinking, loving, offering and bowing are open to anyone, which fits chapter nine's theme that this path is easy to follow.",
    lifeApplication:
      "Choose one small daily act for each of the four: a moment of remembering, something done with love, something offered, a moment of bowing your head. Keep each one tiny and do them every day for a week.",
  },
  {
    id: "10-8",
    chapter: 10,
    verse: 8,
    sanskrit:
      "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते। इति मत्वा भजन्ते मां बुधा भावसमन्विताः॥",
    transliteration:
      "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate, iti matvā bhajante māṁ budhā bhāva-samanvitāḥ",
    english:
      "I am the source of everything, and everything comes from me. The wise, understanding this, worship me with all their heart.",
    meaning:
      "Everything that exists has one source. Seeing that clearly turns, quite naturally, into love and reverence.",
    quote: "Everything comes from one source. Seeing that turns knowledge into love.",
    quoteHindi: "सब कुछ एक ही स्रोत से आता है। यह देखना ज्ञान को प्रेम में बदल देता है।",
    categories: ["wisdom", "heart-touching", "peace"],
    moment:
      "Chapter ten is where Krishna describes his divine glories. This verse opens a group of four that some teachers call the essence of the whole Gita.",
    simpleMeaning:
      "Krishna says he's the origin of everything, and all of creation unfolds from him. The wise understand this and respond with heartfelt devotion.",
    deeperMeaning:
      "The verse moves from knowing to loving. 'Iti matvā', having understood this, leads straight to 'bhajante', they worship.\n\nThe Gita doesn't treat knowledge and devotion as rival paths here. Real understanding of where everything comes from naturally becomes love for that source.",
    lifeApplication:
      "Next time you enjoy something, a meal or a view or a friend's kindness, take a moment to ask where it came from, and where that came from. Following the chain back a few steps tends to turn enjoyment into gratitude.",
  },
  {
    id: "11-12",
    chapter: 11,
    verse: 12,
    sanskrit:
      "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता। यदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः॥",
    transliteration:
      "divi sūrya-sahasrasya bhaved yugapad utthitā, yadi bhāḥ sadṛśī sā syād bhāsas tasya mahātmanaḥ",
    english:
      "If the light of a thousand suns were to blaze up in the sky all at once, it might resemble the brilliance of that great being.",
    meaning:
      "When Arjuna sees Krishna's universal form, the only comparison that comes close is a thousand suns rising at once.",
    quote: "If a thousand suns rose at once, it might come close to that light.",
    quoteHindi: "अगर आकाश में एक साथ हज़ार सूरज उग जाएँ, तो शायद वह उस प्रकाश के समान हो।",
    categories: ["wisdom", "heart-touching", "life"],
    moment:
      "Arjuna has asked to see Krishna's universal form, and Krishna has given him divine sight to see it. In this verse the narrator, Sanjaya, tries to describe what Arjuna sees.",
    simpleMeaning:
      "What Arjuna sees is so bright that ordinary words fail. The best Sanjaya can offer is that a thousand suns blazing in the sky at once might come close.",
    deeperMeaning:
      "The verse became famous far outside India in 1945. J. Robert Oppenheimer is said to have thought of this line while watching the first atomic bomb test. Years later he quoted another verse from the same chapter, 'Now I am become death'.\n\nIn the Gita itself, the image is about scale. The divine is too vast for human sight, so Krishna has to give Arjuna special eyes just to see it.",
    lifeApplication:
      "When something moves you so much you can't describe it, a birth or a mountain or a piece of music, let it stay beyond words for a moment. The Gita's own narrator runs out of language here, and doesn't pretend otherwise.",
  },
  {
    id: "15-1",
    chapter: 15,
    verse: 1,
    sanskrit:
      "ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्। छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥",
    transliteration:
      "ūrdhva-mūlam adhaḥ-śākham aśvatthaṁ prāhur avyayam, chandāṁsi yasya parṇāni yas taṁ veda sa veda-vit",
    english:
      "They speak of an eternal ashvattha tree with its roots above and its branches below. Its leaves are the Vedic hymns. Whoever knows this tree knows the Vedas.",
    meaning:
      "The world is pictured as a giant upside-down tree, rooted in the divine above. Understanding how it grows is understanding what all scripture is for.",
    quote: "The world is a tree rooted above. Know its roots, and you know the rest.",
    quoteHindi: "संसार एक ऐसा पेड़ है जिसकी जड़ें ऊपर हैं। जड़ों को जान लें, तो बाकी सब समझ आ जाता है।",
    categories: ["wisdom", "life", "purpose"],
    moment:
      "Chapter fifteen opens with this image. Krishna has just finished describing how to rise above the three qualities of nature, and now he gives a picture of the world those qualities make.",
    simpleMeaning:
      "The world is like a huge sacred fig tree turned upside down. Its roots are in the divine above, its branches spread down into the world, and its leaves are the sacred hymns.",
    deeperMeaning:
      "The ashvattha is the sacred fig, or peepal, still honored across India. Picturing it upside down puts the source of the world above, in the divine, and its growth below, in everyday life.\n\nThe image also appears in the Katha Upanishad. Two verses later Krishna says the tree has to be cut down with the axe of detachment, which is why it's an image to understand, not just admire.",
    lifeApplication:
      "Pick one part of your life that feels tangled, a habit or a worry, and trace it back to its root instead of trimming the branches. Asking 'where does this actually come from?' usually shows you the one place change would work.",
  },
  {
    id: "15-15",
    chapter: 15,
    verse: 15,
    sanskrit:
      "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
    transliteration:
      "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca, vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham",
    english:
      "I am seated in the hearts of all. Memory, knowledge and forgetting come from me. I am what all the Vedas aim to know. I am the author of Vedanta and the knower of the Vedas.",
    meaning:
      "The divine isn't far away. It lives in every heart and is the source of everything we remember, know and forget.",
    quote: "Everything you know, remember and forget begins in the heart.",
    quoteHindi: "जो कुछ आप जानते हैं, याद रखते हैं और भूलते हैं, वह सब हृदय से शुरू होता है।",
    categories: ["wisdom", "heart-touching", "peace"],
    moment:
      "Krishna has been describing how his presence sustains the world: as the light of the sun and moon, the strength that holds up the earth and the fire that digests food. Here he moves from the world into the human heart.",
    simpleMeaning:
      "Krishna lives in every heart. He's where memory, understanding and even forgetting come from. All scripture is ultimately about knowing him.",
    deeperMeaning:
      "The surprising word is 'apohanam', forgetting. Krishna claims not only memory and knowledge but forgetting too.\n\nThat makes sense if you've ever been grateful to forget something painful. Forgetting is part of how a mind heals, and the verse treats it as coming from the same source as knowing.",
    lifeApplication:
      "Next time you can't stop replaying something painful, try treating forgetting as something you're allowed to receive rather than a failure. Stop rehearsing it on purpose, and give your mind room to let it go.",
  },
  {
    id: "18-61",
    chapter: 18,
    verse: 61,
    sanskrit:
      "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति। भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    transliteration:
      "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati, bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā",
    english:
      "The Lord dwells in the heart of every being, Arjuna, turning them all by his power, as if they were mounted on a machine.",
    meaning:
      "Every being is moved by forces deeper than its own will. The divine sits at the heart of it all, turning the great wheel.",
    quote: "The divine lives in every heart, quietly turning the wheel of the world.",
    quoteHindi: "ईश्वर हर हृदय में बसते हैं और चुपचाप संसार का चक्र घुमाते हैं।",
    categories: ["wisdom", "life", "peace"],
    moment:
      "Near the end, Krishna has just warned Arjuna that his own nature will drive him to fight even if he refuses. This verse explains where that driving force finally comes from.",
    simpleMeaning:
      "Krishna says the divine lives in every heart and moves all beings through its power, as if they were riding on a machine that turns them.",
    deeperMeaning:
      "The machine image, 'yantra', isn't meant to make people sound like robots. It describes how much of what we do comes from nature, habit and causes we didn't choose.\n\nThe next verse gives the response: take refuge in that inner Lord with your whole being. If something deeper is already turning the wheel, trust is wiser than resistance.",
    lifeApplication:
      "Notice one pattern you keep repeating even though you've decided not to. Rather than fighting it by willpower alone, ask what deeper need is driving it. Working with that need tends to go further than wrestling the wheel.",
  },
]

export function verseSlug(v: Pick<Verse, "chapter" | "verse">): string {
  return `bhagavad-gita-${v.chapter}-${v.verse}`
}

export function getVerseBySlug(slug: string): Verse | undefined {
  return verses.find((v) => verseSlug(v) === slug)
}

export function getVersesByTheme(theme: ThemeSlug): Verse[] {
  return verses.filter((v) => v.categories.includes(theme))
}

export function getRelatedVerses(v: Verse, count = 3): Verse[] {
  const scored = verses
    .filter((other) => other.id !== v.id)
    .map((other) => ({
      verse: other,
      score: other.categories.filter((c) => v.categories.includes(c)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, count).map((entry) => entry.verse)
}

/**
 * Related verses for the detail page: a hand-picked `relatedVerses` list when the verse
 * has one, otherwise shared-theme matching. Kept small on purpose (2–4 links).
 */
export function getRelatedVersesFor(v: Verse, count = 3): Verse[] {
  if (v.relatedVerses?.length) {
    const picked = v.relatedVerses
      .map((id) => verses.find((other) => other.id === id))
      .filter((other): other is Verse => other !== undefined)
    if (picked.length > 0) return picked.slice(0, count)
  }
  return getRelatedVerses(v, count)
}

export function getAdjacentVerses(v: Verse): { previous?: Verse; next?: Verse } {
  const sorted = [...verses].sort((a, b) => a.chapter - b.chapter || a.verse - b.verse)
  const index = sorted.findIndex((entry) => entry.id === v.id)
  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  }
}

export function getRelatedThemes(theme: ThemeSlug, count = 3): ThemeSlug[] {
  const counts = new Map<ThemeSlug, number>()
  for (const v of verses) {
    if (!v.categories.includes(theme)) continue
    for (const c of v.categories) {
      if (c === theme) continue
      counts.set(c, (counts.get(c) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([slug]) => slug)
}

export function getFeaturedVerse(date: Date = new Date()): Verse {
  const dayOfYear = Math.floor(
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
      86_400_000,
  )
  return verses[dayOfYear % verses.length]
}
