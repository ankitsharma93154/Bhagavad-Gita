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
