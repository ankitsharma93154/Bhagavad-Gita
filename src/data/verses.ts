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
