import type { ThemeSlug } from "./themes"

/**
 * Content model for a single Bhagavad Gita verse.
 *
 * `english` is a plain translation of the verse. `meaning` is a short,
 * accessible explanation of what it points to. `quote` is a short,
 * quote-friendly interpretation for everyday reading, not a literal
 * translation. These three are kept distinct in the UI, see the About page.
 *
 * `simpleMeaning`, `deeperMeaning`, and `lifeApplication` are the optional
 * "layers of understanding" the verse detail page reveals below the quote:
 * a plain-English restatement for someone new to the Gita, the philosophical
 * idea the verse turns on, and how that principle plays out in ordinary
 * modern life. They're optional so verses without them written yet still
 * render cleanly (the page just shows fewer layers). Split paragraphs with
 * a blank line.
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
      "You have a right to perform your prescribed duty, but never to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.",
    meaning:
      "Give your full effort to the work itself. The outcome is never fully in your hands, so anchoring your peace to it only creates anxiety. This isn't motivation to give up. It's freedom to act wholeheartedly.",
    quote: "You have the right to your actions, never to the fruits of those actions.",
    quoteHindi: "आपका अधिकार केवल अपने कर्म पर है, कभी उसके फल पर नहीं।",
    categories: ["karma", "purpose", "detachment"],
    simpleMeaning:
      "Krishna is telling Arjuna to put himself fully into the work and stop fixating on what he'll get out of it. You control the effort. You don't control how it lands, so pinning your peace of mind to the result just sets you up for anxiety. He isn't saying results don't matter or that you should stop caring. He's saying they aren't the part that's yours to command.",
    deeperMeaning:
      "The verse draws a clean line between an action and its outcome. The action is yours. The fruit of it depends on countless other things, timing, other people, chance, none of which take orders from you. Treating yourself as the sole cause of results is both inaccurate and exhausting. The last line guards against the opposite overcorrection: using all this as a reason to do nothing. Detachment here isn't withdrawal. It's dropping the anxious grip on the scoreboard so your full attention is free for the work itself.",
    lifeApplication:
      "Think about preparing for an interview or an exam. The preparation is in your hands, how many hours you put in, how honestly you practice. The result depends partly on things you'll never see: who else applied, what mood the examiner is in, which questions come up. If your calm depends entirely on the outcome, you'll be miserable through the wait and shaky during the work itself. Prepare as well as you can, then let the outcome be what it is.",
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
    simpleMeaning:
      "This is the famous line comparing the body to clothing. When a shirt wears out you replace it, and you don't think the real you has ended. Krishna is saying death works the same way for what he calls the self. The body is the garment. What wears it carries on.",
    deeperMeaning:
      "The verse rests on a distinction between the body and the self that occupies it. In the Gita's framework the self isn't produced by the body and doesn't end when the body does, and changing bodies is treated as ordinary, closer to changing clothes than to being destroyed. Whether or not you accept the metaphysics, the move it's making is worth noticing: it asks you to locate your identity somewhere other than the physical form that's always aging and breaking down. That's what takes some of the terror out of the change.",
    lifeApplication:
      "Most fear of death is really fear of the body failing, the diagnosis, the decline, the ending. This verse doesn't argue you out of that with logic. It offers a different place to stand: if what you most fundamentally are isn't the body, then the body wearing out is a change of clothes, not the end of you. People who sit with this idea often find it loosens the grip of that fear, even a little, when a parent gets old or a scan comes back wrong.",
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
      "Abandon all varieties of duty and take refuge in me alone. I will free you from all misfortune; do not fear.",
    meaning:
      "One of the Gita's most quoted lines: an offer of rest for anyone who's been carrying every responsibility alone. It's safe to let go and trust.",
    quote: "Let go of what you're carrying alone. Surrender, and don't be afraid.",
    quoteHindi: "जो बोझ आप अकेले उठा रहे हैं, उसे छोड़ दें। समर्पण करें, और भयभीत न हों।",
    categories: ["peace", "courage", "detachment", "heart-touching"],
    simpleMeaning:
      "After seventeen chapters of instruction, Krishna gives Arjuna the simplest version. Stop trying to carry every rule and every responsibility on your own, and trust me instead. Let go, take refuge, and don't be afraid. It's an offer of rest for someone who's been holding everything alone.",
    deeperMeaning:
      "This is often called the final teaching of the Gita, the essence saved for last. 'Abandon all varieties of duty' doesn't mean stop acting. It means stop treating your web of obligations as something you have to manage perfectly by sheer personal effort. The instruction is to hand that weight to something larger and act from trust rather than fear. The promise attached, 'I will free you from all misfortune, do not fear,' is what makes letting go possible. It reframes surrender as safety, not defeat.",
    lifeApplication:
      "There's a specific exhaustion that comes from feeling personally responsible for every outcome in your family, your job, your future, as if the whole structure collapses the moment you stop straining. This verse speaks to that state. It's permission to loosen the grip, to act because something is right rather than because you're terrified of what happens if you slip. That shift, from carrying everything to trusting that you don't have to, is where the fear starts to drain out.",
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
    quote: "Don't give in to this weakness. Rise up, it doesn't suit you.",
    quoteHindi: "इस कमज़ोरी के आगे न झुकें। उठ खड़े हों, यह आप पर शोभा नहीं देती।",
    categories: ["courage", "motivation"],
    simpleMeaning:
      "Arjuna has frozen up on the battlefield, overwhelmed and ready to quit. This is Krishna's first real response, and it's blunt. Don't collapse into this weakness. It isn't who you are. Shake off the smallness and stand back up.",
    deeperMeaning:
      "Krishna doesn't open with comfort or sympathy. He names Arjuna's state as a small-hearted faintness, a temporary shrinking, and calls him back to a fuller version of himself. The verse assumes the person in front of him is capable and that the paralysis is a passing condition, not a verdict. Sometimes the useful thing isn't validation of how hard the moment feels. It's someone who clearly sees your capacity and refuses to let you settle into the smaller story.",
    lifeApplication:
      "There are moments, before a hard conversation, a deadline, a decision you've been dreading, when the honest thing a friend can say isn't 'that sounds really tough.' It's 'this isn't like you, get up.' Said with contempt it just wounds. Said by someone who genuinely believes you're bigger than the moment, it can be the thing that gets you moving. This verse is that second kind of push.",
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
      "The contact between the senses and their objects gives rise to fleeting experiences of heat and cold, pleasure and pain. They come and go and do not last, so learn to tolerate them.",
    meaning:
      "Sensation and circumstance are always in motion. Neither discomfort nor pleasure is permanent, and steadiness comes from not over-identifying with either while it passes through.",
    quote: "This too shall pass. Meet both joy and sorrow with the same steady heart.",
    quoteHindi: "यह भी बीत जाएगा। सुख और दुख दोनों को एक ही स्थिर मन से स्वीकार करें।",
    categories: ["peace", "wisdom", "life", "heart-touching"],
    simpleMeaning:
      "Krishna is pointing out that heat and cold, comfort and pain, all come from the senses meeting the world, and none of them stick around. They show up, they pass. His advice is to learn to sit through them without letting each one throw you.",
    deeperMeaning:
      "The key idea is impermanence. The verse isn't denying that discomfort is real or that pleasure is nice. It's noting that both are temporary by nature, arising from contact and then fading. 'Learn to tolerate them' points at a skill rather than a mood. Steadiness comes from not over-identifying with whatever sensation is passing through right now, from treating it as weather rather than climate. That applies as much to a good feeling you want to cling to as to a bad one you want gone.",
    lifeApplication:
      "A rough week at work, a stretch of loneliness, a run of things going well, all of it feels total while you're inside it. This verse is a reminder that the feeling has an expiry date built in. That's not an excuse to numb out or refuse to enjoy the good stretches. It's a way to keep your footing: when you're low, it will lift, and when you're high, hold it a little loosely, because that passes too.",
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
    simpleMeaning:
      "Krishna is describing a way of seeing where you notice the same underlying presence in everything, and everything as held within it. Someone who sees like that is never really cut off from it, and it's never cut off from them. The connection stops depending on circumstances.",
    deeperMeaning:
      "The verse describes a shift in perception rather than a set of beliefs. Once you start seeing one continuous thread running through people, events, and yourself, the sense of being isolated or abandoned loses its grip, because separateness was the thing that made those states possible. The phrasing is mutual: 'I am never separated from them' either. It isn't a connection you have to maintain by effort. It's closer to something you stop being able to un-see.",
    lifeApplication:
      "Loneliness often isn't about being physically alone. It's the feeling of being fundamentally separate, walled off from everyone else. This verse points at an experience some people describe after long practice or a hard loss: a sense that the wall was never as solid as it looked, that the same life running through them runs through everything else. You don't get there by arguing yourself into it. But knowing others have found that ground can make it easier to keep looking.",
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
      "The soul is never born, nor does it ever die. It does not come into being, nor will it ever cease to be. Unborn, eternal, ever-existing and primeval, it is not destroyed when the body is destroyed.",
    meaning:
      "What you most fundamentally are is described here as untouched by birth and death, deeper and steadier than any single chapter of a life.",
    quote: "What is truly you was never born, and will never die.",
    quoteHindi: "जो सच में आप हैं, वह कभी जन्मा नहीं और कभी मरेगा भी नहीं।",
    categories: ["wisdom", "peace", "life"],
    simpleMeaning:
      "Krishna is saying that the real you, the self, was never born and will never die. It doesn't come and go the way a life does. It's older and steadier than any single lifetime, and it isn't touched when the body is.",
    deeperMeaning:
      "The verse stacks up negations, not born, not dying, not coming into being, not ceasing, to point at something the ordinary categories don't fit. In the Gita's view the self isn't an event on a timeline. Birth and death happen to the body. The instruction underneath the description is to stop identifying so completely with the part of you that's temporary. The verse doesn't ask you to prove this. It asks you to consider standing somewhere other than the fear that follows from assuming you're only the body.",
    lifeApplication:
      "When you're gripped by the fear of dying, or watching someone you love near the end, this verse offers a different frame rather than a consolation. If what you most deeply are isn't the thing that ages and stops, then the ending you're bracing for isn't the total erasure it feels like. People carry this idea into hospital rooms and funerals, not as a slogan, but as a quieter place to stand while everything else is hard.",
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
      "Treat pleasure and pain, gain and loss, victory and defeat as the same. Then prepare for action. Acting this way, you bring no wrongdoing on yourself.",
    meaning:
      "This is practical advice before a practical task. Don't wait for the odds to feel fair or the outcome to feel certain. Treat both directions of the result the same way, and then simply do the work in front of you.",
    quote: "Treat winning and losing the same. Then just do the work in front of you.",
    quoteHindi: "जीत और हार को एक समान समझें। फिर बस अपना काम करें।",
    categories: ["success", "courage", "peace"],
    simpleMeaning:
      "Krishna tells Arjuna to stop waiting for the situation to feel fair or the outcome to look certain. Hold winning and losing, gain and loss, as the same, and then just do the task in front of you. Acting that way, he says, you take on no blame.",
    deeperMeaning:
      "This comes right before the Gita turns to its teaching on action. The point is that Arjuna is paralyzed by staring at outcomes, and the fix is to stop letting the result decide whether he moves. 'Treat them as the same' isn't indifference to whether you succeed. It's refusing to let the forecast run you. Once the outcome stops being load-bearing, action becomes possible again.",
    lifeApplication:
      "Think of a decision you keep circling because you can't tell how it'll land, taking the job, having the hard talk, submitting the work. The circling itself is the problem. This verse says to accept that it could go either way, that you can handle either way, and then act. The stuckness usually isn't caused by the situation being genuinely impossible. It's caused by needing to know the ending first.",
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
    simpleMeaning:
      "Krishna says that whenever goodness and right order fade and wrongdoing takes over, he shows up to set things right. It's a promise that balance which has been lost doesn't stay lost. The conditions for its return keep coming back around.",
    deeperMeaning:
      "In its own context this is Krishna describing why he takes form across the ages. Read more broadly, it's a statement about how decline works: things fall out of balance, and something rises to correct them, again and again, as a pattern rather than a one-time rescue. The verse doesn't promise the correction is instant or painless. It promises it's reliable. Whatever has gone wrong isn't the permanent state of things.",
    lifeApplication:
      "When a workplace turns toxic, or a community loses its decency, or your own habits slide, it can feel like that's just how things are now. This verse pushes back on the permanence. The slide isn't the end of the story, and the turn usually starts small, one person deciding to hold a line. You can be part of what rises to correct it rather than waiting for someone else to.",
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
    simpleMeaning:
      "Krishna points out that you've already lived through big changes of body, from child to teenager to adult, without being destroyed by any of them. Death, he says, is the next change of that kind. The steady person doesn't panic about it.",
    deeperMeaning:
      "The argument works by analogy. You accept that the child you were is gone and you aren't in mourning about it, because you experience yourself as continuous through those changes. The verse asks you to extend that same sense of continuity across the largest change. 'The wise are not troubled' doesn't mean they feel nothing. It means they've stopped treating each transformation of the body as the end of the self that moves through them.",
    lifeApplication:
      "Look at an old photo of yourself at seven. That body is gone, most of those cells long since replaced, and yet there's an unbroken thread of you connecting then to now. Aging is already a slow series of these departures, and you've made peace with most of them without noticing. This verse asks you to bring that same unpanicked steadiness to thinking about the last one.",
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
    simpleMeaning:
      "Krishna says that for people whose focus on him is steady and undivided, he takes care of the gaps, carrying what they lack and protecting what they have. The sense is that when your attention is genuinely whole, what you actually need tends to arrive.",
    deeperMeaning:
      "The two phrases often translated as acquiring what you lack and preserving what you have describe being looked after on both ends. The condition attached is single-minded, steady devotion, not intensity in bursts. The verse isn't a transaction where worship buys supplies. It's describing what happens when a scattered mind becomes an undivided one: the constant anxious managing of provision quiets down, and there's a trust that the essentials are handled.",
    lifeApplication:
      "A lot of daily stress is low-grade resource anxiety, will there be enough time, money, energy, help. This verse describes a state where that background hum settles, not because the future is guaranteed, but because your attention has stopped fragmenting across every possible shortfall. When you're fully committed to the thing in front of you, the needful things have a way of showing up, and the frantic accounting eases.",
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
    simpleMeaning:
      "Krishna reassures Arjuna that in this kind of effort, nothing you put in is wasted and there's no penalty for trying. Even a small amount of the practice gives real protection. You don't have to do it perfectly for it to count.",
    deeperMeaning:
      "The verse addresses a specific fear: that partial effort is pointless, that if you can't do the whole thing you may as well not start. Krishna says this domain doesn't work like that. Progress here isn't lost when it's incomplete, and there's no worse-off state for having attempted it. 'Even a small amount protects you from great fear' sets a very low bar for entry. The point is to remove the excuse that you're not ready enough to begin.",
    lifeApplication:
      "People put off starting things, meditation, exercise, a hard project, because they can't commit to doing it fully and assume a half-version is worthless. This verse says the half-version still counts, still builds something, still steadies you against the worst of the fear. Ten minutes is not nothing. The effort banks even when the session was short or the attempt fell short.",
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
      "One who sees inaction within action, and action within inaction, is wise among people. Such a person has, in truth, understood how to work.",
    meaning:
      "There's busywork that accomplishes nothing, and there's quiet stillness that accomplishes a great deal. This verse points at the difference and says real wisdom is being able to tell them apart.",
    quote: "Busy isn't the same as effective. Learn to tell the two apart.",
    quoteHindi: "व्यस्त होना असरदार होने के बराबर नहीं है। इन दोनों में फर्क पहचानना सीखें।",
    categories: ["wisdom", "karma", "success"],
    simpleMeaning:
      "Krishna says the wise person can spot when a lot of busy activity is actually accomplishing nothing, and when apparent stillness is doing a great deal. Being able to tell those two apart is what he means by really understanding how to work.",
    deeperMeaning:
      "The verse plays with the words for action and inaction to break the assumption that visible motion equals productivity. Frantic activity driven by ego or anxiety can leave nothing behind. A calm, unattached person can be fully engaged and, in the sense the Gita cares about, not be doing anything at all, because they're not entangled in it. The wisdom being praised is discernment: seeing what a given effort is actually made of, rather than judging by how busy it looks.",
    lifeApplication:
      "Think of a workday spent answering messages and sitting in meetings where, by evening, nothing real moved. Then think of an hour of quiet, focused thought that actually solved the problem. The first looked like work and wasn't. The second looked like idleness and was the whole job. This verse is the reminder to measure by what's actually shifting, not by how full the calendar was.",
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
      "Let a person lift themselves by their own mind, and not degrade themselves. The mind alone is one's friend, and the mind alone is one's enemy.",
    meaning:
      "You carry both your greatest support and your biggest obstacle in the same place: how you direct your own mind.",
    quote: "Lift yourself by your own mind. It can be your closest friend or your fiercest enemy.",
    quoteHindi: "अपने ही मन के सहारे स्वयं को ऊपर उठाएं। यह आपका सबसे करीबी मित्र भी हो सकता है और सबसे बड़ा शत्रु भी।",
    categories: ["motivation", "courage", "positive-thinking", "heart-touching"],
    simpleMeaning:
      "Krishna says you have to lift yourself up using your own mind, and not let yourself sink. The same mind can be your closest ally or your worst enemy, depending on how you handle it. Nobody else can do this part for you.",
    deeperMeaning:
      "The striking claim is that your biggest support and your biggest obstacle live in the same place, and it's how you direct your mind that decides which one shows up. This isn't a call to grit your teeth alone forever. It's naming where the real work happens: not in changing circumstances, but in whether the mind is trained toward helping you or left to sabotage you. The responsibility is uncomfortable because it can't be handed off, but it's also where the leverage is.",
    lifeApplication:
      "On a bad day the mind runs a case against you, replaying failures, forecasting disaster. The same mind, deliberately turned, can list what's actually true, what's in your control, and the next small step. Encouragement from other people helps, but it doesn't stick unless your own mind picks it up and repeats it. This verse points at that inner talk as the thing to get on your side.",
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
    simpleMeaning:
      "Krishna traces how trouble starts. You dwell on something you want. The dwelling turns into attachment. Attachment becomes craving. And blocked craving turns into anger. It doesn't begin with anger. It begins with letting your mind linger too long on the thing.",
    deeperMeaning:
      "This is the first half of a two-verse chain that ends in ruin. What's useful is where it locates the start: not at the dramatic end, the outburst, but at the quiet beginning, the mind circling an object of desire. Each step is small and feels harmless. By naming the sequence, the verse gives you earlier places to catch it, long before you're angry. The intervention point is the dwelling, not the explosion.",
    lifeApplication:
      "Notice how a minor irritation can escalate over a day. Someone gets a promotion you wanted. You think about it on the commute, at lunch, before bed. By the next morning you're resentful and short with people who had nothing to do with it. The anger didn't come from nowhere. It came from the hours your mind spent circling. Catching it at the circling stage is far easier than managing it once it's heat.",
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
    simpleMeaning:
      "This picks up where the last verse left off. Anger clouds your judgment. Clouded judgment scrambles your memory of what matters. That scrambling wrecks your ability to reason. And without reason, you come undone. Krishna is showing that anger does its damage well before it's visible on the surface.",
    deeperMeaning:
      "The verse is a step-by-step account of how a person unravels from the inside. Each link is the loss of a specific faculty: clarity, then memory, then discernment, then the capacity to function at all. The important claim is about timing. By the time anger shows up in your behavior, several of these internal steps have already happened. Understanding the sequence is what lets you treat anger as an early warning rather than a late one.",
    lifeApplication:
      "Think of a time you sent a message while furious and regretted it within the hour. In the moment it felt justified and clear. Looking back, you can see your judgment was already gone, you'd forgotten what you actually wanted from the situation, and you argued yourself into something that cost you. This verse is the case for building in a delay: once anger is running, the parts of you that would catch the mistake are already offline.",
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
    simpleMeaning:
      "Krishna defines yoga here, and it isn't a posture. It's doing your work while staying even, letting go of the grip on results, and staying level whether things succeed or fail. That evenness of mind, he says, is what the word actually means.",
    deeperMeaning:
      "This is one of the Gita's working definitions of yoga: samatva, evenness or balance of mind. It reframes the practice away from ritual or physical discipline and toward an inner stance you hold while acting. Letting go of attachment is the mechanism, and staying even-minded in success and failure is the visible result. The verse pairs full engagement with non-attachment on purpose. You're meant to do the work completely, just without your stability riding on how it lands.",
    lifeApplication:
      "Two people can do the same job to the same standard. One is wrecked by every setback and inflated by every win, so their focus is always half on the scoreboard. The other does the work just as hard but doesn't hand their mood to the result, so all of their attention stays on the task. The Gita calls that second stance the actual practice, and you build it by noticing, each time, where your calm is currently anchored.",
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
      "Desires will keep arriving; that isn't the problem. Peace belongs to whoever can let them arrive without being swept out to sea by each one.",
    quote: "Be like the ocean. Let desires arrive without disturbing your depth.",
    quoteHindi: "समुद्र जैसे बनें। इच्छाओं को आने दें, पर अपनी गहराई को अशांत न होने दें।",
    categories: ["peace", "detachment", "wisdom"],
    simpleMeaning:
      "Krishna uses the image of the ocean. Rivers pour into it constantly and it stays full and still, not overflowing, not disturbed. Peace belongs to the person who can let desires arrive like that, without being swept away by each one. Chasing after them is what breaks the calm.",
    deeperMeaning:
      "The verse doesn't say desires stop coming. The ocean keeps receiving rivers. The distinction is between receiving and chasing. The person at peace isn't free of desire, they're unmoved, able to let wanting arise and pass without reorganizing their life around it. 'Not the one who chases desire' is the contrast: restlessness isn't caused by having desires, it's caused by treating each one as something you must run after. Depth is what lets you absorb them without churning.",
    lifeApplication:
      "You'll always want things, a better phone, a different job, someone's approval. The wanting isn't the problem. The problem is when each want immediately becomes a plan, a purchase, a preoccupation. Practice letting a desire show up and just noticing it, without acting on it that minute. Some pass on their own. The ones that stay, you can act on from a steadier place, not because the craving was driving.",
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
    simpleMeaning:
      "Krishna says the person who stops running after desires, and moves through life without the constant pull of 'I want' and 'that's mine', reaches peace. He names ownership and ego as the two quiet things that keep us restless. Loosen them and there's room for calm.",
    deeperMeaning:
      "Three things get dropped in this verse: longing, the sense of 'mine', and the sense of 'I' as the center of everything. The Gita treats these as the machinery of restlessness. 'Mine' turns things into stakes you can lose. 'I' makes every event a referendum on your worth. Longing keeps the mind leaning forward into what isn't here. The claim is that peace isn't something you add. It's what's left when that machinery quiets down.",
    lifeApplication:
      "Notice how much daily agitation traces back to possessiveness and ego, my parking spot, my idea, my turn, how this makes me look. Each one is a place the world can poke you. You don't fix this by force, but you can catch yourself mid-grip and ask whether the thing is worth the disturbance. Most aren't. The loosening is gradual, and each time you let one go, there's a little more quiet.",
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
      "Whatever action a great person performs, others follow. Whatever standard they set, the world pursues.",
    meaning:
      "People learn far more from what you do than from what you say, a reason to hold your own actions to the standard you'd want reflected back.",
    quote: "Lead by example. The world follows what you do, not what you say.",
    quoteHindi: "उदाहरण बनकर आगे बढ़ें। संसार वही करता है जो आप करते हैं, जो आप कहते हैं वह नहीं।",
    categories: ["purpose", "motivation", "karma"],
    simpleMeaning:
      "Krishna points out that whatever a respected person does, others copy, and whatever standard they set becomes the standard everyone follows. People learn from what you do far more than from what you tell them.",
    deeperMeaning:
      "The verse is about influence through example, and it's aimed particularly at people in visible positions. The claim is that behavior propagates: your actions set a reference point that others quietly calibrate to, whether or not you intended to lead. That raises the stakes on private conduct, because it isn't really private if people can see it. The implied instruction is to hold your own actions to the standard you'd actually want reflected back through everyone watching.",
    lifeApplication:
      "A manager who says the right things about work-life balance and then emails at midnight has set the real policy, and it isn't the one in the handbook. Kids absorb how their parents handle frustration, not the lecture about patience. If you're in any position where people watch you, the useful question isn't what you're telling them to do. It's what you're modeling, because that's what actually spreads.",
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
      "All actions, without exception, are carried out by the workings of nature. But the one confused by ego believes, 'I am the doer.'",
    meaning:
      "A useful check on how much credit or blame any one person can really claim. So much of what happens comes from circumstances larger than you. Holding that loosely tends to make both success and failure easier to carry.",
    quote: "So much of what happens comes from more than just you. Hold both success and failure loosely.",
    quoteHindi: "जो कुछ होता है, उसमें आपसे कहीं ज़्यादा शामिल होता है। सफलता और असफलता दोनों को हल्के से थामें।",
    categories: ["wisdom", "detachment", "karma"],
    simpleMeaning:
      "Krishna says that actions are actually carried out by the workings of nature, the forces and conditions you're made of and surrounded by. It's the ego, confused, that says 'I did that' as if it were the sole author. So much of what happens runs on causes larger than you.",
    deeperMeaning:
      "The verse questions how much any single person authors their own actions. In the Gita's picture, what you do emerges from a web of prior causes: temperament, upbringing, circumstance, the state of the body and mind in that moment. The ego's mistake is claiming exclusive credit. This isn't an argument that you have no responsibility. It's a corrective to the inflation, and to the crushing weight, that both come from believing you alone caused every result.",
    lifeApplication:
      "When something goes well, the ego wants full credit. When it goes badly, the same ego takes the full hit and calls it proof you're a failure. Both are distortions. The win drew on luck, timing, other people's work, and a version of you that circumstances shaped. So did the loss. Holding your role in either one a little more loosely makes success less inflating and failure less devastating.",
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
      "It is better to perform one's own duty imperfectly than to perform another's duty well. It is better to fail at one's own path than to succeed at one that was never truly yours.",
    meaning:
      "A reminder to trust your own path rather than a borrowed or imitated one. Even walked imperfectly, it fits you in a way another's cannot.",
    quote: "Better your own path walked imperfectly than someone else's walked perfectly.",
    quoteHindi: "अपने रास्ते पर अपूर्ण चलना, किसी और के रास्ते पर पूर्ण चलने से बेहतर है।",
    categories: ["purpose", "courage", "karma"],
    simpleMeaning:
      "Krishna says it's better to do your own work imperfectly than to do someone else's work well. Better to stumble on the path that's actually yours than to succeed on one that was never a fit. A borrowed life doesn't become yours just because you're good at it.",
    deeperMeaning:
      "The word usually translated 'duty' here, sva-dharma, means something closer to the role and nature that genuinely belong to you. The verse makes a strong claim: fit matters more than performance. Another person's path, even walked skillfully, is called dangerous, because living against your own grain has a cost that competence doesn't cancel. This isn't romanticizing failure. It's saying the question 'is this mine?' comes before the question 'am I doing it well?'",
    lifeApplication:
      "People end up successful in careers that were chosen for them, by family, by prestige, by momentum, and feel a persistent wrongness they can't explain. This verse names it. Being good at something isn't proof it's yours. It can be worth trading a smoother version of the wrong life for a rougher version of the right one. That choice looks reckless from outside and often isn't.",
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
    simpleMeaning:
      "Krishna says he appears in every age to protect the good, put a stop to wrongdoing, and set what's right back on a firm footing. It's a statement that the work of protecting goodness and restoring balance keeps happening, generation after generation.",
    deeperMeaning:
      "This continues the previous verse's idea and makes the purpose explicit: protection of the decent, an end to the destructive, re-establishment of dharma. Read within the tradition it's about divine incarnation across the ages. Read more widely, it describes a recurring pattern rather than a single rescue. The correction shows up again and again, in different forms, whenever things tip far enough out of balance. The renewal is framed as dependable, not occasional.",
    lifeApplication:
      "When things are going badly in an institution or a society, it's easy to assume the decline just continues indefinitely. History and this verse both suggest otherwise. The correction tends to arrive, often carried by ordinary people who decide to hold a line. That's not a reason to wait passively for rescue. It's a reason to believe the effort of restoring something good is worth making, because that's how the turn has always come.",
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
      "As people come to me, so I receive them. In every way, everyone walks a path that eventually leads back to me.",
    meaning:
      "A generous verse about how many different roads can lead to the same place. It doesn't ask everyone to arrive the same way, only acknowledges that however they come, they're met.",
    quote: "Whatever road you take, however you arrive, you are met.",
    quoteHindi: "आप चाहे किसी भी रास्ते से आएं, आप स्वीकार किए जाते हैं।",
    categories: ["peace", "purpose", "life"],
    simpleMeaning:
      "Krishna says he meets people however they come to him, and that all paths, in the end, lead back to the same place. It doesn't demand that everyone arrive the same way. It just says that however you come, you're received.",
    deeperMeaning:
      "This is one of the Gita's more generous verses, often read as an early statement of religious pluralism. The point isn't that all approaches are identical, but that sincerity of approach is met in kind, and that the many roads aren't in competition. 'As people come to me, so I receive them' puts the emphasis on being met where you are rather than on passing a single correct entry test.",
    lifeApplication:
      "People reach the same steadiness, or meaning, or peace by routes that look nothing alike, through service, through study, through devotion, through plain hard work on themselves. This verse is a caution against deciding your route is the only valid one and everyone else is lost. If someone's approach is sincere and it's carrying them somewhere good, the difference in method probably matters less than it seems.",
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
    simpleMeaning:
      "Krishna tells Arjuna to seek out real understanding by approaching people who have it with humility, asking honest questions, and being willing to serve. Those who've actually realized the truth will pass it on. It usually moves person to person, not from certainty but from asking.",
    deeperMeaning:
      "The verse names three conditions for genuine learning: humble approach, sincere inquiry, and service. All three run against the ego's preferred stance of already knowing. It also frames deep understanding as something transmitted through relationship with people who've seen it directly, rather than assembled alone from books. The word for the honest question suggests real inquiry, not a challenge dressed up as one. Humility isn't a nicety here, it's a precondition for anything getting through.",
    lifeApplication:
      "The fastest way to stop learning from someone is to approach them needing to prove you already get it. Real questions, the kind where you might have to change your mind, tend to come from people willing to look a little ignorant for a moment. This verse is a case for that posture: find people further along than you, ask honestly, be useful to them, and stay open enough for the answer to actually land.",
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
      "For one who has mastered the mind, the mind is the best of friends; but for one who has not, it behaves like an enemy.",
    meaning:
      "The same mind can work for you or against you. The difference is whether it's been trained or left to run unchecked.",
    quote: "A mastered mind is your best friend. An unmastered one, your worst enemy.",
    quoteHindi: "वश में किया गया मन सबसे अच्छा मित्र है। अनियंत्रित मन सबसे बड़ा शत्रु।",
    categories: ["courage", "wisdom", "motivation", "success"],
    simpleMeaning:
      "Krishna says the same mind is your best friend if you've mastered it and behaves like an enemy if you haven't. It's the same instrument either way. What decides which one you get is whether it's been trained or left to run loose.",
    deeperMeaning:
      "This follows directly from the previous verse about lifting yourself by your own mind. The claim is that the mind isn't neutral, it actively helps or actively undermines, and there's no third option of it just sitting there. An untrained mind doesn't stay still, it works against you, generating fear, distraction, and self-attack. Training it isn't about domination so much as no longer leaving your most powerful tool pointed at yourself.",
    lifeApplication:
      "The same mind that can talk you through a crisis calmly, one step at a time, is the mind that at 3am builds elaborate catastrophes out of nothing. Same equipment, opposite effect. The difference is largely practice: attention you've trained to return to what's true and useful, versus attention left to wander wherever anxiety takes it. This verse frames that training as deciding whether the mind is on your side.",
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
    simpleMeaning:
      "Krishna says this practice isn't for someone who eats too much or someone who eats too little, or for someone who oversleeps or barely sleeps at all. Going to extremes in either direction throws you off. Depriving yourself is treated as just as unbalanced as overindulging.",
    deeperMeaning:
      "The verse rules out harsh asceticism as a path, which is notable, given how often spiritual seriousness gets equated with severe self-denial. Both poles, excess and deprivation, are named as obstacles because both disturb the steadiness the practice needs. The framing is that the body and its basic rhythms are part of the work, not an enemy to be starved into submission. Moderation here isn't a compromise. It's the actual requirement.",
    lifeApplication:
      "People trying to get serious about something often swing to a punishing extreme, the crash diet, the four-hours-of-sleep grind, the total cutoff from rest and enjoyment, and then collapse back. This verse says that swing was never the path. Whatever you're building, discipline that ignores your body's real needs isn't more virtuous, it's just less sustainable. The middle is where it holds.",
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
    simpleMeaning:
      "Following on from the last verse, Krishna says that for the person who's balanced in eating, in recreation, in effort, and in sleep, this practice becomes the thing that ends suffering. Balance across the ordinary parts of a day isn't a minor detail. It's the practice itself.",
    deeperMeaning:
      "The previous verse ruled out the extremes. This one states the positive version: balanced, well-joined, across food, activity, work, and rest. The claim is strong, that this balance is what makes the practice the destroyer of suffering. It locates the spiritual work in the mundane management of a day rather than in dramatic gestures. How you eat and sleep and pace yourself isn't preliminary to the real practice. It substantially is the real practice.",
    lifeApplication:
      "It's tempting to think the meaningful work is the meditation session or the big project, and the rest, meals, sleep, downtime, is just logistics around it. This verse flips that. The way you handle the ordinary rhythm of your days is doing most of the work, for better or worse. Steady sleep, reasonable food, a sane pace, real rest, that's not the boring part around the practice. It's a lot of what actually reduces the suffering.",
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
    simpleMeaning:
      "Krishna compares a disciplined mind to a lamp flame in a place with no wind. It doesn't flicker. Not because nothing is happening around it, but because it's sheltered enough, and steady enough, that the drafts don't reach it.",
    deeperMeaning:
      "The image is precise. A flame flickers when air moves across it. A trained mind is likened to a flame that's been placed out of the wind, so it burns straight and still. The stillness isn't the absence of a world full of disturbances. It's the result of practice that keeps those disturbances from reaching the flame. The verse is describing an achievable inner condition, not a magical one, and the word for it is steadiness under conditions that would normally cause wavering.",
    lifeApplication:
      "Two people get the same piece of bad news. One is visibly rattled for the rest of the day, snapping at people, unable to focus. The other registers it, feels it, and stays largely level. The difference usually isn't that the second person cares less. It's that they've built some shelter around the flame through practice, so the gust moves the air without putting the light out.",
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
    simpleMeaning:
      "Arjuna admits the mind is restless and almost impossible to control, and Krishna agrees, it really is hard. Then he adds that it can still be done, through steady practice and through letting go of what keeps pulling it. The honesty about the difficulty comes with reassurance that it isn't hopeless.",
    deeperMeaning:
      "What's valuable here is the structure of the answer: full acknowledgment of the problem, then a concrete path. Krishna doesn't pretend a calm mind comes easily to anyone. The two tools he names are abhyasa, repeated practice, and vairagya, the gradual loosening of the cravings that keep the mind agitated. Neither is a quick fix. Together they're presented as sufficient. The mind is trainable, just not by wishing.",
    lifeApplication:
      "Anyone who's tried to meditate knows the first honest discovery is how uncontrolled the mind is. This verse meets that discovery without discouragement. The restlessness is normal and shared. The way through is unglamorous: show up to the practice repeatedly, and slowly reduce the grip of the wants that keep the mind spinning. Progress is real but slow, and expecting it to be slow is part of not quitting.",
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
    simpleMeaning:
      "Krishna says nothing stands above him, and that everything in existence is held together by him the way pearls are held on a single string. The pearls look separate. The thread runs through all of them.",
    deeperMeaning:
      "The image is doing careful work. Pearls on a thread are genuinely distinct, you can count them, and they're also not really separate, because one thing passes through every one of them. The verse points at a unity that doesn't erase differences. Things stay themselves while still being connected at a level you don't usually see. The claim that nothing is higher frames that underlying thread as the most basic fact about reality, not a nice add-on.",
    lifeApplication:
      "It's easy to move through a day experiencing everything as disconnected fragments, separate people, separate problems, separate you. This verse offers the opposite starting assumption: that the separateness is the surface and something continuous runs underneath it. You don't have to accept the metaphysics to test the shift in attention. Looking for what connects a situation to the rest of your life, instead of treating it as an isolated crisis, tends to lower the panic.",
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
      "So remember me at all times, and do what needs to be done. With your mind and reason fixed on me, you will surely come to me. Have no doubt about this.",
    meaning:
      "Remembering and acting aren't presented as separate here. You don't have to pause your life to stay centered. The instruction is to carry that center with you into whatever you're already doing.",
    quote: "Stay centered while you act. You don't have to pause your life to remember what matters.",
    quoteHindi: "काम करते हुए भी केंद्रित रहें। जो मायने रखता है उसे याद रखने के लिए ज़िंदगी रोकने की ज़रूरत नहीं।",
    categories: ["peace", "purpose", "motivation"],
    simpleMeaning:
      "Krishna tells Arjuna to keep him in mind constantly and also to do what the situation requires. You don't stop your life to stay centered. You carry the center into whatever you're already doing.",
    deeperMeaning:
      "The verse joins two things people usually treat as a trade-off: staying inwardly connected to what matters, and being fully active in the world. Krishna's instruction is to do both at once, remember me and act. Remembrance here isn't a separate activity you schedule. It's a background steadiness held while the hands are busy. The promise attached, that this reliably leads you where you're trying to go, is meant to remove the worry that ordinary work pulls you off the path.",
    lifeApplication:
      "A lot of people assume they'll get to the meaningful inner work later, once the job calms down, once the kids are older, once there's time. This verse says that framing is a mistake. Whatever you're anchored to, your values, a sense of purpose, a practice, you're meant to keep it running through the busy parts, not save it for a quiet stretch that may never come. The work and the center happen in the same hours.",
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
    simpleMeaning:
      "Krishna says that whoever offers him even a leaf, a flower, a piece of fruit, or water, given with real devotion and a sincere heart, has his full acceptance. It's the spirit behind the offering that gives it worth, not the size of it.",
    deeperMeaning:
      "The items listed, leaf, flower, fruit, water, are deliberately the cheapest, most available things. The verse strips away any idea that access depends on wealth or grand gesture. What's specified instead is devotion and a pure heart, a settled, sincere intention. A small thing given wholeheartedly outweighs an expensive thing given carelessly. The measure is the quality of attention and love in the giving, which is available to everyone equally.",
    lifeApplication:
      "This applies well beyond ritual. A short message written with real care lands harder than an expensive gift chosen in thirty seconds. Fifteen minutes of genuine attention to someone means more than an afternoon spent half-present. The verse is a reminder that people, and by its account the divine, register the sincerity behind an offering more than its cost, so the small things done with a whole heart are never actually small.",
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
      "Whatever you do, whatever you eat, whatever you offer, whatever you give, whatever discipline you practice, do it as an offering.",
    meaning:
      "This turns an entire ordinary day into one continuous act of devotion, not by adding rituals to it, but by changing the spirit behind what's already being done. Working, eating, giving. The same actions, held differently.",
    quote: "The same ordinary actions, held differently, become something like devotion.",
    quoteHindi: "वही साधारण काम, अलग भाव से किए जाएं, तो भक्ति जैसे बन जाते हैं।",
    categories: ["purpose", "peace", "life"],
    simpleMeaning:
      "Krishna says to take whatever you're already doing, eating, working, giving, and do it as an offering rather than adding new rituals. Same actions, different spirit behind them. That shift is what turns an ordinary day into something like devotion.",
    deeperMeaning:
      "The verse is striking for how little it asks you to change on the outside. It doesn't add tasks. It reframes the ones you have. Doing something as an offering changes the internal orientation of an action from 'this is for me and my gain' to 'this is given'. The Gita's wager is that this small change in intention, applied across a whole day, adds up to a spiritual life without requiring you to withdraw from an ordinary one.",
    lifeApplication:
      "Try it with one recurring task you resent, the dishes, a commute, a report. Doing it as something offered, to your household, to the people who'll read it, rather than as a cost extracted from you, doesn't make the task shorter. It changes what the task does to you while you're in it. Over months, that reframing is the difference between a life that feels like a series of extractions and one that feels like it's being given.",
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
    simpleMeaning:
      "Krishna says he's equal toward everyone, with no favorites and no one he rejects. And yet those who turn to him with devotion end up living in him, and he in them. Fairness and closeness aren't opposites here.",
    deeperMeaning:
      "The verse holds together two things that usually seem to conflict. Perfect impartiality sounds cold, like a system that treats everyone identically and connects with no one. Krishna says that's not how it works. The evenness is the ground, available to all equally, and genuine closeness grows out of it for anyone who turns toward it. The relationship isn't favoritism. It's what the impartial openness becomes when someone actually engages with it.",
    lifeApplication:
      "Good teachers, mentors, and parents often work this way. They're fair to everyone, no student is written off, no child is the favorite, and the ones who lean in, ask, show up, end up with a real relationship anyway. That closeness isn't unfairness. It's what the fairness makes possible for whoever meets it halfway. The door is open to everyone, and it still matters whether you walk through it.",
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
    simpleMeaning:
      "Krishna says he isn't off somewhere distant. He's the Self seated in the heart of every living being, and the start, middle, and end of everything there is. Whatever you're searching for outside, this verse says it's also already here.",
    deeperMeaning:
      "The verse relocates the divine from out there to at the center of you. Seated in the heart of every being means the thing being sought is also the thing doing the seeking. Naming himself as beginning, middle, and end closes off the idea that you could get outside it to look for it. This is the Gita undercutting spiritual searching that always points away from where the searcher already is.",
    lifeApplication:
      "Much of the effort people put into finding meaning, peace, or a sense of the sacred is aimed outward and elsewhere, the right place, the right practice, the right experience. This verse suggests some of that searching energy is better turned around. Not because the outer things are worthless, but because the thing they're pointing at is closer than any of them, already present in the one doing the looking.",
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
    simpleMeaning:
      "Krishna starts describing the kind of person he holds dear: someone who hates no living thing, who's friendly and kind, not possessive, not run by ego, about equally steady whether things are going well or badly, and quick to forgive. It's a short sketch of a settled character.",
    deeperMeaning:
      "This begins a passage listing the qualities of the devotee dear to Krishna, and what's striking is how ordinary and relational the qualities are. Not supernatural powers, but the absence of hatred, the presence of goodwill, freedom from possessiveness and ego, evenness across pleasure and pain, and forgiveness. The list treats these as the natural fruit of an inner life that's actually settled, rather than as rules to force.",
    lifeApplication:
      "It's worth reading a list like this as a mirror rather than a standard to fail. Where do you carry quiet hatred, hold grudges, get possessive, take everything personally, swing hard with your circumstances? None of it changes by willpower alone, but noticing it is the start. The verse describes a direction, not a bar, and the direction is toward being easier on others and less at the mercy of your own moods.",
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
    simpleMeaning:
      "Krishna describes someone easy to be around and hard to knock off balance: they don't unsettle other people, and other people don't easily unsettle them. Free of the swings of elation, envy, fear, and anxiety. That person, he says, is dear to him.",
    deeperMeaning:
      "This is part of the list of qualities of the devotee Krishna holds dear, and it describes a two-way steadiness. Not disturbing the world means you aren't a source of friction, drama, or pressure for the people around you. Not being disturbed by the world means you have enough inner ground that other people's moods and events don't capsize you. The four things named, elation, envy, fear, anxiety, are the usual channels through which the world gets a grip, and freedom from them is what makes both directions possible.",
    lifeApplication:
      "Think about the people who lower the temperature of a room just by being in it, and are also hard to rattle. They're usually not the loudest or the most impressive. They've just stopped running on the reactivity that makes someone both agitating to others and easily agitated themselves. That's a quiet kind of strength, and it's built by working on the fear and envy underneath, not by performing calm.",
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
      "One who serves me with steady, unwavering devotion rises above these three qualities of nature and becomes fit to know the eternal.",
    meaning:
      "Steadiness is the operative word here, not intensity. A devotion that doesn't waver, even a quiet one, is what's described as carrying someone through and beyond the usual pull of moods and impulses.",
    quote: "Steadiness, not intensity, is what carries you through. A quiet, unwavering effort is enough.",
    quoteHindi: "तीव्रता नहीं, स्थिरता ही आपको आगे ले जाती है। एक शांत, अटूट प्रयास ही काफी है।",
    categories: ["peace", "detachment", "wisdom"],
    simpleMeaning:
      "Krishna says the person whose devotion is steady and doesn't waver rises above the three forces of nature that usually pull people around, and becomes ready to know what's lasting. The key word is steady, not intense.",
    deeperMeaning:
      "In its chapter, this verse is about rising past the three gunas, the qualities of clarity, restlessness, and inertia that the Gita says shape all ordinary experience and mood. What carries a person beyond their pull isn't a burst of effort. It's unwavering devotion, something consistent and low-drama that keeps going through good stretches and bad. The Gita repeatedly favors this: a quiet practice held for years over an intense one abandoned in weeks.",
    lifeApplication:
      "People start things at high intensity, a new discipline, a new commitment, and burn out, because intensity is expensive and moods don't cooperate. This verse points at the alternative that actually works: something modest you can sustain no matter what kind of day it is. The unglamorous version done for years beats the dramatic version done until you crash. Steadiness compounds. Intensity spikes and fades.",
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
    simpleMeaning:
      "Krishna describes the living self as an eternal piece of him that has taken up residence in the world, gathering the mind and the five senses around itself. The core is lasting. The mind and senses are equipment it's using for now.",
    deeperMeaning:
      "The verse draws a line between what you are at the core and the apparatus you operate through. The self is called an eternal portion, something continuous and not produced by the body. The mind and senses are things it draws to itself, tools it picks up, not what it fundamentally is. This matters because most confusion and suffering come from identifying completely with the equipment, taking every passing sensory pull or mental state as the whole of you.",
    lifeApplication:
      "When a craving or a strong mood hits, it can feel like it's simply what you are in that moment, so you either obey it or fight it as yourself against yourself. This verse offers a small gap: the senses reporting a pull, the mind spinning a story, and something steadier that's using both and isn't identical to either. Noticing that gap, even briefly, is what makes it possible to not be jerked around by every signal.",
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
      "There are three gates leading to self-destruction: lust, anger, and greed. One should give up these three.",
    meaning:
      "Three habits of mind are singled out as the ones most likely to unravel a person from within. Worth noticing early, before they take hold.",
    quote: "Lust, anger, and greed are the three gates that lead a person to ruin. Walk away from them.",
    quoteHindi: "काम, क्रोध और लोभ, ये तीन द्वार हैं जो व्यक्ति को विनाश की ओर ले जाते हैं। इनसे दूर रहें।",
    categories: ["wisdom", "courage", "life"],
    simpleMeaning:
      "Krishna names three things as the doors to wrecking yourself from the inside: craving, anger, and greed. His advice is blunt. Give up all three. They're worth catching early, before they set in.",
    deeperMeaning:
      "The verse calls these gates, which is precise. They're entrances, the points where self-destruction gets in, not the destruction itself. Lust here is the wider sense of compulsive craving, anger is the reactive heat, and greed is the accumulating grip that's never satisfied. The Gita treats them as linked and as the common root of most of the harm people do to themselves and others. Naming them as a short, specific list is meant to make them easier to watch for.",
    lifeApplication:
      "Look back at the decisions you most regret and there's usually one of these three underneath: wanting something badly enough to override your judgment, acting in heat, or grabbing and holding past the point of sense. This verse isn't asking for instant purity. It's saying that if you learn to recognize these three early, when they're a flicker rather than a fire, you catch most of the serious mistakes before they happen.",
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
    simpleMeaning:
      "After chapters of teaching, Krishna stops and hands the decision back to Arjuna. Think it all through carefully, he says, and then do what you decide. Not an order. Something to actually weigh, with the choice genuinely yours.",
    deeperMeaning:
      "This is a notable move for a teacher who has just delivered a long, authoritative teaching. Krishna doesn't close by commanding. He says reflect on it fully, without leaving anything out, and then act as you wish. The knowledge is offered, not imposed. It treats Arjuna as someone who has to arrive at his own conclusion for it to mean anything, and it trusts him with the freedom to reject it.",
    lifeApplication:
      "Good advice, from a mentor, a friend, a book, works best when it's held this way. Taken as a command, you either obey resentfully or rebel against it, and neither is really yours. Taken as something to think all the way through and then decide on, it can actually become part of how you see. This verse models the handoff: here's what I've got, now it's your call, and it has to be.",
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
    simpleMeaning:
      "Krishna asks Arjuna to keep his mind on him and stay devoted, and then gives the reason: not duty, but affection. You are dear to me. Whatever else the verse asks for, it rests first on being told plainly that you're cared for.",
    deeperMeaning:
      "The structure matters. The instructions, keep your mind here, be devoted, offer, bow, could read as demands. But the verse grounds them in a promise and a reason, and the reason is love, not obligation. Being dear to him is the foundation the rest sits on. The Gita is saying the relationship comes first and the practices follow from it, not the other way around.",
    lifeApplication:
      "There's a big difference between doing something for someone because you're afraid of what happens if you don't, and doing it because you know they care about you and you care back. The first is compliance and it wears you down. The second is relationship and it tends to hold. This verse is a reminder that the durable version of commitment, to a person, a practice, a path, runs on knowing you're valued, not on pressure.",
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
      "Wherever there is Krishna, the master of yoga, and Arjuna, the skilled archer, there will surely be prosperity, victory, and sound judgment.",
    meaning:
      "The Gita's closing verse: a statement that when wisdom and disciplined, committed action come together, good outcomes tend to follow.",
    quote: "Where wisdom and determined action meet, success naturally follows.",
    quoteHindi: "जहां ज्ञान और दृढ़ कर्म मिलते हैं, वहां सफलता स्वाभाविक रूप से आती है।",
    categories: ["success", "motivation", "positive-thinking"],
    simpleMeaning:
      "The Gita's final verse says that wherever Krishna, the master of yoga, and Arjuna, the skilled archer, are together, there will be prosperity, victory, and sound judgment. Where wisdom and disciplined, committed action come together, good outcomes tend to follow.",
    deeperMeaning:
      "The closing line pairs two figures on purpose: Krishna as guidance and wisdom, Arjuna as capable, willing action. The claim is that neither alone is enough. Wisdom without someone to act on it stays abstract. Skilled action without wisdom directing it can go anywhere. It's the combination, clear understanding joined to determined effort, that the text says reliably produces good results. It's a fitting note to end on: the whole book has been Krishna supplying the first half so Arjuna can supply the second.",
    lifeApplication:
      "Think about any goal you've actually reached. There was usually a clear understanding of what mattered and why, and there was consistent effort to back it. When one was missing, you either had a good plan you never executed or a lot of motion with no direction. This verse is the reminder to check for both: know what you're doing and why, then commit to the work of it.",
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
    simpleMeaning:
      "Krishna's first real teaching begins by pointing out a gap in Arjuna. He's speaking wise words but grieving as if he'd forgotten all of them. The wise, Krishna says, don't grieve endlessly for the living or the dead. Knowing that everything changes has to actually reach how you live.",
    deeperMeaning:
      "The verse opens the Gita's philosophical core, and it opens with a mild rebuke about the distance between knowledge and practice. Arjuna speaks words of wisdom and acts against them. Krishna isn't dismissing grief itself. He's pointing at grief that runs on refusing to accept impermanence, mourning that you couldn't hold on to what was never holdable. Clear thinking, in this frame, means letting what you already know actually change your response.",
    lifeApplication:
      "Most people can state that nothing lasts, that people age and leave, that circumstances turn over. And most people still spend real energy in a low grief over exactly those facts, as if they might have been otherwise. This verse isn't telling you not to feel loss. It's pointing at the specific suffering that comes from arguing with reality, and suggesting that the knowledge you already hold is meant to be lived, not just recited.",
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
    simpleMeaning:
      "Krishna says the person who isn't knocked over by pain or pleasure, who stays about the same through a good day and a bad one, is the one ready for something lasting. It's not that they've stopped feeling. They've stopped handing their stability to whatever the day brings.",
    deeperMeaning:
      "This continues the previous verse's point about sensations coming and going, and draws the consequence: steadiness through both poles is what makes a person fit for the deathless thing the Gita keeps pointing at. The word for the steady person suggests composure rather than coldness. What's being praised isn't indifference to life. It's no longer being at the mercy of its swings, which is treated as a prerequisite for anything deeper opening up.",
    lifeApplication:
      "Track your mood against your circumstances for a week and the correlation is usually near total, good news up, bad news down, with almost no space in between where you get to choose your response. This verse points at widening that space. Not so you feel nothing, but so a rough Tuesday doesn't fully own you, and a win doesn't leave you unable to function once it fades.",
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
      "If you are killed you will attain heaven, and if you win you will enjoy the earth. So rise up, Arjuna, resolved to act.",
    meaning:
      "This is Krishna cutting through the paralysis with plain arithmetic. Arjuna is frozen because he's staring at the outcome, so Krishna walks both outcomes forward and shows that neither one is the disaster he fears. Once the result stops being the thing that decides everything, it's possible to just stand up and act.",
    quote: "Stop weighing the outcome. Stand up and do what's in front of you.",
    quoteHindi: "नतीजे को तौलना बंद करें। उठें और जो सामने है वह करें।",
    categories: ["courage", "motivation"],
    simpleMeaning:
      "Krishna does the arithmetic for Arjuna. If you're killed, you reach heaven. If you win, you rule the earth. Either way it isn't the catastrophe you're imagining, so stand up and act. Once you stop staring at the outcome, moving becomes possible.",
    deeperMeaning:
      "In context this is Krishna working through both branches of the outcome to show that neither is the disaster Arjuna fears. The reasoning is specific to that setting, but the move is general: paralysis comes from fixating on a result you've decided you can't survive, and it breaks when you actually look at the outcomes and find that you can. Once the result stops being the thing that decides everything, the next step gets clear.",
    lifeApplication:
      "When you're frozen before a big decision, it's usually because one outcome feels unbearable and you're refusing to look straight at it. Try actually walking it forward. If this fails, then what, concretely? Often the honest answer is that you'd cope, adjust, and carry on. Naming that out loud tends to drain the paralysis, because the thing keeping you stuck was the unexamined fear, not the situation.",
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
    quoteHindi: "कर्म में कुशलता यही है, काम करना पर नतीजे के वश में न होना।",
    categories: ["karma", "success", "wisdom"],
    simpleMeaning:
      "Krishna says the person with an even mind sets down both the credit and the blame while still alive, and tells Arjuna to practice yoga, which he defines here as skill in action. The skill isn't speed or polish. It's working without being jerked around by how it turns out.",
    deeperMeaning:
      "'Yoga is skill in action' is one of the Gita's most quoted phrases, and the skill it means is specific. It's not technical excellence. It's the ability to act without your inner state being controlled by the result. When your calm doesn't depend on the outcome, your full attention is available for the work itself, instead of being split with anxiety about the score. Letting go of good and bad deeds is part of the same move: not carrying the ledger.",
    lifeApplication:
      "Watch someone skilled do something under pressure, a surgeon, a musician, a good teacher handling a hard room. Part of what you're seeing is technical, but part of it is that they're not fighting the situation or bracing against failure. Their attention is fully on what's in front of them. That composure is trainable, and the Gita treats it as the real definition of being good at something.",
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
    simpleMeaning:
      "Krishna describes the person of steady wisdom: untroubled in sorrow, not grasping in pleasure, free of the pull of attachment, fear, and anger. It's not someone who feels nothing. It's someone who doesn't get dragged under by sadness or strung out by good feelings.",
    deeperMeaning:
      "This is part of the Gita's portrait of the person settled in wisdom. The point is easy to misread as emotional flatness. What's actually described is non-reactivity: emotions arise, but they don't capture the person. Attachment, fear, and anger are singled out as the specific forces that usually do the capturing, and it's their grip that loosens. What's left isn't numbness. It's someone genuinely settled rather than performing calm.",
    lifeApplication:
      "There's a difference between a person who's suppressing a hard week behind a tight smile and a person who's actually steady through it. The first is holding a lid down. The second has less pressure under the lid to begin with, because they're not adding fear about the future and anger about the unfairness on top of the plain difficulty. That state is built by loosening those add-ons, not by clamping down harder.",
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
    simpleMeaning:
      "Krishna traces a chain most people feel but never spell out. A scattered mind can't think clearly. Without clear thinking there's no steady reflection. Without that there's no peace. And without peace, where would happiness even come from?",
    deeperMeaning:
      "The verse is a short causal sequence running from an undisciplined mind to the absence of happiness, with each step making the next one follow. The starting point matters: it isn't bad luck or hard circumstances that block happiness here, it's a mind that was never steadied, so it can't hold a clear thought long enough for peace to form. The implication is that chasing happiness directly, while skipping the work on the mind, is chasing the last link in a chain whose first links aren't in place.",
    lifeApplication:
      "Notice how a genuinely frazzled day resists every attempt to enjoy anything. You sit down to relax and the mind is still sprinting, so the rest doesn't land. This verse says that's the normal order of things: the scattered mind has to settle before clear thinking is possible, and peace and satisfaction come after that, not before. It reframes 'I just need to unwind' as 'I need to actually steady my attention first'.",
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
    simpleMeaning:
      "Krishna tells Arjuna to do the work he's meant to do, because doing something beats doing nothing, and even keeping your body alive takes action. Waiting to feel ready or inspired before you start usually means nothing gets done.",
    deeperMeaning:
      "The verse is a plain argument for action over inertia. Inaction isn't a neutral, safe option in the Gita's view, it's a kind of decay, and it isn't even fully possible, since staying alive is itself continuous activity. The instruction is to do the work that's assigned to you by your role and situation, rather than opting out. The bar being set is deliberately low: not brilliance, not motivation, just starting the work that's yours.",
    lifeApplication:
      "Procrastination often hides behind waiting for the right mood. You'll write when you feel inspired, exercise when you have energy, deal with the hard thing when you're ready. This verse cuts that off. The mood usually follows the action rather than preceding it. Start the task at hand, badly if necessary, because doing nothing isn't actually keeping your options open, it's just a slower kind of loss.",
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
    simpleMeaning:
      "Krishna says most people work with a tight grip on what they'll personally get out of it. He asks for that same effort with a looser hold, pointed at something bigger than your own return. The work stays serious. It just stops being only about you.",
    deeperMeaning:
      "The verse isn't contrasting hard work with laziness. Both the unwise and the wise are working hard. The difference is what the work is fastened to. The unwise are attached to their personal stake in the outcome. The wise put in identical effort while aiming at the good of the world, a wider benefit. Loosening the personal grip doesn't reduce the quality or intensity of the work. It changes what the work is in service of.",
    lifeApplication:
      "Two people build the same thing. One is tracking, the whole time, exactly what credit, money, or advancement they'll get. The other does the job just as well while mostly thinking about whether it'll actually help the people it's for. The second person usually does work that's at least as good, often better, and is far less wrecked when the personal payoff is smaller than hoped. Widening the aim past your own return is a practical move, not just a noble one.",
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
    simpleMeaning:
      "Arjuna asks what drives a person to do harm even against their own will. Krishna's answer is direct: desire, and the anger that shows up when desire is blocked. That's the enemy, he says, and it isn't outside you.",
    deeperMeaning:
      "The verse answers a specific question, what actually pushes people into destructive behavior. Krishna names it as one linked force: craving that's never satisfied, and the anger that erupts when the craving hits an obstacle. Born of the mode of passion ties it to the restless, grasping quality the Gita describes. Calling it the enemy here is deliberate. The trouble isn't primarily out in the world. It's an internal engine, and you can't deal with it until you'll admit where it lives.",
    lifeApplication:
      "When there's a pattern in your life that keeps causing damage, the same kind of blowup, the same self-sabotage, it's worth tracing it back instead of blaming the circumstances each time. Usually you'll find a want that isn't being met and a flare of anger when something gets in its way. That's not a comfortable thing to locate in yourself. But it's the only place you can actually work on it.",
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
    quote: "Work fully, need nothing from it. That's when the effort stops draining you.",
    quoteHindi: "पूरे मन से काम करें, उससे कुछ न मांगें। तभी मेहनत थकाना बंद करती है।",
    categories: ["detachment", "peace", "purpose"],
    simpleMeaning:
      "Krishna describes a way of working hard that doesn't leave you empty. It comes from not needing the result to land a certain way. When you're already content and not leaning your whole weight on the outcome, you can act fully without it feeling like a gamble.",
    deeperMeaning:
      "The paradox in the verse, doing nothing at all even while fully engaged, is the point. Outwardly the person is busy and effective. Inwardly they aren't 'doing' in the entangled sense, because they're not gripping the outcome, not staking their sufficiency on it, not bracing. Being ever content and needing no support is the condition that makes this possible. When your okayness doesn't depend on how the work turns out, the effort stops being a bet you could lose.",
    lifeApplication:
      "Notice the difference between a task you do from a settled place and one you do while your whole future feels like it's riding on it. Same hours, completely different cost. The drain usually isn't the work itself. It's the constant low-level fear about the result running alongside it. Getting your sense of being okay to not depend on the outcome is what lets you put in the effort without it hollowing you out.",
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
    simpleMeaning:
      "Krishna tells Arjuna that the doubt sitting unaddressed in his heart, the kind that comes from not seeing the situation clearly, will keep him stuck longer than any outside obstacle. Cut through it with what you actually know to be true, and then get up and move.",
    deeperMeaning:
      "The verse distinguishes doubt that comes from genuine uncertainty from doubt that comes from not seeing clearly, confusion you could resolve if you looked straight at it. Krishna's prescription for the second kind is decisive: use knowledge as a blade, cut the doubt, and act. Endless deliberation gets mistaken for being careful, but past a point it's just paralysis wearing a responsible face. At some stage you have to stand and move on what you know.",
    lifeApplication:
      "There's a kind of stuckness that feels like thoroughness but is really just circling. You've had the information for weeks. You keep re-examining it and feeling no closer. This verse says that at that point, more analysis isn't the answer, deciding is. Name what you actually know to be true, let that settle the question, and take the next step. The clarity often comes from moving, not from more sitting still.",
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
    simpleMeaning:
      "Krishna says the person who does their work as an offering, without clinging to the results, stays unstained by it, the way a lotus leaf sits in water without getting wet. You can be fully involved in something and still not be marked by how it turns out.",
    deeperMeaning:
      "The lotus leaf is a stock image in Indian thought for being in something without being soaked by it. The mechanism the verse gives is dedicating the action outward, offering it rather than gripping the outcome for yourself. When the result isn't personal property, success doesn't puff you up and failure doesn't stain you. The point isn't to care less about the work. It's to change what you're doing with the result.",
    lifeApplication:
      "Some people finish a project and are visibly changed by how it landed, a good review makes them insufferable for a week, a bad one wounds them for a month. Others do work just as invested and let the outcome roll off. The difference is whether they held the result as a verdict on themselves. Treating the work as something you offer rather than something you own is what keeps the water from soaking in.",
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
    quoteHindi: "बाहर से मिलने वाला हर सुख कुछ देर में ख़त्म हो जाता है। अगली ख़ुराक पर अपनी ज़िंदगी मत टिकाएं।",
    categories: ["detachment", "wisdom", "life"],
    simpleMeaning:
      "Krishna points out that the pleasures you get from the senses meeting the world come with pain built in. They start and they stop. Knowing that doesn't mean refusing to enjoy anything. It means not building your life around chasing the next one.",
    deeperMeaning:
      "The verse makes a specific claim: sense pleasures are sources of pain, they generate suffering as part of their nature, not by accident. Part of that is the letdown when they end, part is the craving to repeat them. Having a beginning and an end names the structural problem, anything dependent on external contact is temporary by design. The wise do not delight in them, not because enjoyment is forbidden, but because they've stopped treating these pleasures as a reliable foundation.",
    lifeApplication:
      "Think about the arc of getting something you badly wanted, the phone, the trip, the approval. The wanting, the brief high, the fade, and often a small dip afterward. This verse isn't telling you to skip the trip. It's telling you not to organize your life around the next high, because that structure guarantees you spend most of your time either craving or coming down. Enjoy the thing. Just don't make it load-bearing.",
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
    simpleMeaning:
      "Krishna says that for someone who's actually got their mind under control and is at peace, the deepest part of them stays steady and present no matter what's happening outside, cold or heat, comfort or pain, praise or insult. The events still happen. They just stop running the show.",
    deeperMeaning:
      "The verse pairs an inner achievement with an outer result. The achievement is a mastered, peaceful mind. The result is that the deepest, steadiest layer of you stays established through all the usual pairs of opposites. Honor and dishonor are included alongside heat and cold on purpose, social standing is treated as just another swinging condition. What changes isn't the world's behavior. It's whether it can reach the center.",
    lifeApplication:
      "Praise and criticism are the clearest test. Most people are visibly lifted by one and wounded by the other, which means both are effectively in charge. This verse describes a state where a compliment and an insult land on the same steady ground and neither one takes over. That's not indifference to feedback. It's that your footing isn't for sale, and it's built by working on the mind, not by pretending the words didn't sting.",
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
    simpleMeaning:
      "Krishna's instruction for a wandering mind is simple: wherever it drifts off to, notice, and bring it back. Repeat as needed. The wandering isn't a failure. It's just what the mind does, and the returning is the practice.",
    deeperMeaning:
      "The verse is almost mechanical in its plainness, and that's the point. There's no technique to master, just a loop: the mind leaves, you catch it, you bring it back under the self's direction. Done with frustration, each wandering feels like proof you can't do this. Done matter-of-factly, the same wandering is simply the raw material the practice works on. Steadiness is built by the repetitions of returning, not by somehow preventing the drift.",
    lifeApplication:
      "This is the most practical meditation instruction in the Gita, and it generalizes. Your attention slides off the conversation, the task, the person in front of you, dozens of times an hour. The skill isn't a mind that never drifts, that's not on offer. It's noticing sooner and coming back without the self-criticism. Every return is a rep, and the reps are what change things.",
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
    simpleMeaning:
      "Krishna says the highest yogi isn't the one who's gone furthest alone. It's the one who can feel another person's pain and joy with the same weight as their own, because they see everyone as basically like themselves.",
    deeperMeaning:
      "This is a striking place to locate the peak of practice. Not in a private state of bliss or a feat of concentration, but in a specific way of relating to others: the line between your wellbeing and theirs getting thin. Seeing all beings as like yourself is the perception, and feeling their pleasure and pain as your own is what follows from it. The Gita is saying that if all the inner work doesn't produce this, it hasn't reached its highest point.",
    lifeApplication:
      "It's a useful check on any kind of self-improvement. If years of practice have made you calmer and more disciplined but no more able to feel with other people, this verse suggests something's incomplete. The measure it offers is concrete: when someone else's bad news actually lands in you, and their good news genuinely lifts you, without you having to perform either, something real has shifted.",
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
    simpleMeaning:
      "Krishna says that even someone with a genuinely bad track record, if they turn toward him with their whole heart, should be counted as on the right path already, because they've made the right decision. The resolve is what matters. The rest follows from it.",
    deeperMeaning:
      "The verse pushes back hard on the idea that you have to earn your way back over years before a change of direction counts. Krishna says the sincere turn itself, having resolved rightly, is enough to be regarded as righteous from that moment. It's not claiming the past behavior didn't happen or that change is instant. It's saying the decisive thing is the wholehearted commitment to a new direction, and that gets credited immediately, not retroactively after a probation period.",
    lifeApplication:
      "People trying to change, an addiction, a pattern of harm, a way of treating people, often get told, and tell themselves, that they don't get to feel any different until they've proven it for a long time. This verse disagrees. The genuine decision to turn things around is itself the turning point, and treating it as real from day one, rather than as provisional, is part of what lets it hold. Slips afterward don't cancel the direction.",
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
    simpleMeaning:
      "Krishna says a person's faith lines up with their underlying nature, and then puts it more strongly: you are made of what you have faith in. Whatever you genuinely put your trust in is what you become. So it's worth checking what that actually is.",
    deeperMeaning:
      "Faith here is broader than religious belief. It's what you actually trust, orient toward, and treat as real at a gut level, whether or not you'd state it out loud. The verse's claim is that this operates as a kind of blueprint: it shapes your choices, your attention, and over time your character, until as your faith is, so are you. That makes the honest question not what you say you believe, but what you're actually living as if it were true.",
    lifeApplication:
      "People often discover their real faith by looking at their calendar and their reflexes rather than their stated values. If, under pressure, you act as though money will make you safe, or as though other people's approval decides your worth, that's a faith, and this verse says you're gradually being shaped into its image. Getting clear on what you're actually trusting is the first step to choosing it deliberately instead of drifting into it.",
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
    simpleMeaning:
      "Krishna says don't abandon the work that fits your nature just because it has problems. Every effort has something wrong with it, the way every fire gives off smoke. That's not a reason to walk away from work that's genuinely yours.",
    deeperMeaning:
      "The verse targets a specific kind of avoidance: quitting, or never starting, because the work isn't clean or perfect. Krishna's point is that flaw is universal, every undertaking is wrapped in some defect the way fire is wrapped in smoke, so waiting for the flawless version is waiting forever. The relevant question isn't whether the work has problems. It's whether the work is suited to your nature. If it is, the flaws come with the territory and you do it anyway.",
    lifeApplication:
      "People abandon good paths, careers, projects, relationships, on the grounds that they've spotted real problems, as if the existence of problems were the signal to leave. This verse reframes that. Problems are the smoke, present in every fire. The thing to actually evaluate is fit: is this genuinely mine to do? If it is, expecting it to be flawless first is just a way of never doing it.",
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
    quoteHindi: "जो मायने रखता है उस पर ध्यान रखें, तो आप पार हो जाएंगे। अहंकार को सुनने से रोकने दें, तो नहीं।",
    categories: ["courage", "motivation", "success"],
    simpleMeaning:
      "Krishna tells Arjuna that with his attention held steady on what matters, obstacles that looked impossible turn out to be crossable. The warning comes right after: if ego won't let you listen and adjust, you're the thing that sinks you.",
    deeperMeaning:
      "The verse lays out a fork. One path is attention fixed on the center, which is paired with getting through every obstacle. The other is ego refusing to hear, which ends in being lost. What's notable is that the failure mode isn't the difficulty of the obstacles, it's the ego blocking the input that would help. Most hard moments come down to some version of this choice: stay open and adjustable, or let pride wall off the thing you need to hear.",
    lifeApplication:
      "Think of a time you were stuck and someone told you something true that you couldn't take in because it stung your pride. The obstacle wasn't really the situation at that point. It was the refusal to listen. This verse frames staying coachable, keeping your attention on the goal rather than on defending your self-image, as the actual difference between getting through and going under.",
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
