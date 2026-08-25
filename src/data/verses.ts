import type { ThemeSlug } from "./themes"

/**
 * Content model for a single Bhagavad Gita verse.
 *
 * `english` is a plain translation of the verse. `meaning` is a short,
 * accessible explanation of what it points to. `quote` is a short,
 * quote-friendly interpretation for everyday reading, not a literal
 * translation. These three are kept distinct in the UI, see the About page.
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
