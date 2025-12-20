const questions = [
  {
    num: 1,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक गैस कौन सी है?",
    options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Who is known as the 'Iron Man of India'?",
    question_hi: "भारत के 'लौह पुरुष' के नाम से किसे जाना जाता है?",
    options_en: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi"],
    options_hi: ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
    answer_en: "Sardar Vallabhbhai Patel",
    answer_hi: "सरदार वल्लभभाई पटेल",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which Indian state is famous for its tea gardens?",
    question_hi: "कौन सा भारतीय राज्य अपनी चाय बागानों के लिए प्रसिद्ध है?",
    options_en: ["Assam", "Kerala", "Tamil Nadu", "West Bengal"],
    options_hi: ["असम", "केरल", "तमिलनाडु", "पश्चिम बंगाल"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    options_hi: ["अलेक्ज़ेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुइलेमो मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्ज़ेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which is the largest mammal on Earth?",
    question_hi: "पृथ्वी का सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    options_hi: ["नीला व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
    answer_en: "Blue Whale",
    answer_hi: "नीला व्हेल",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which is the first Indian satellite?",
    question_hi: "भारत का पहला उपग्रह कौन सा था?",
    options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Chandrayaan-1"],
    options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "चंद्रयान-1"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which element is represented by the symbol 'O'?",
    question_hi: "किस तत्व का प्रतीक 'O' है?",
    options_en: ["Oxygen", "Gold", "Osmium", "Oxide"],
    options_hi: ["ऑक्सीजन", "सोना", "ओस्मियम", "ऑक्साइड"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which Indian river is known as the 'Sorrow of Bihar'?",
    question_hi: "कौन सी भारतीय नदी 'बिहार का दुःख' के नाम से जानी जाती है?",
    options_en: ["Kosi", "Ganga", "Yamuna", "Gandak"],
    options_hi: ["कोसी", "गंगा", "यमुना", "गंडक"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "Which is the largest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "नेपच्यून", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which Indian festival is celebrated as the 'Festival of Colors'?",
    question_hi: "कौन सा भारतीय त्योहार 'रंगों का त्योहार' कहलाता है?",
    options_en: ["Holi", "Diwali", "Eid", "Christmas"],
    options_hi: ["होली", "दिवाली", "ईद", "क्रिसमस"],
    answer_en: "Holi",
    answer_hi: "होली",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which metal is used in electrical wiring?",
    question_hi: "विद्युत तारों में कौन सा धातु प्रयोग होता है?",
    options_en: ["Copper", "Iron", "Aluminum", "Gold"],
    options_hi: ["तांबा", "लोहा", "एल्यूमिनियम", "सोना"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "Who wrote the 'Mahabharata'?",
    question_hi: "'महाभारत' के लेखक कौन हैं?",
    options_en: ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
    options_hi: ["व्यास", "वाल्मीकि", "कालिदास", "तुलसीदास"],
    answer_en: "Vyasa",
    answer_hi: "व्यास",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "Which is the national bird of India?",
    question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options_en: ["Peacock", "Sparrow", "Eagle", "Parrot"],
    options_hi: ["मोर", "गौरैया", "गरुड़", "तोता"],
    answer_en: "Peacock",
    answer_hi: "मोर",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    options_hi: ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which is the first city to be fully solar-powered in India?",
    question_hi: "भारत का पहला पूर्ण सौर-शक्तिचालित शहर कौन सा है?",
    options_en: ["Bhuj", "Jaipur", "Ahmedabad", "Pune"],
    options_hi: ["भुज", "जयपुर", "अहमदाबाद", "पुणे"],
    answer_en: "Bhuj",
    answer_hi: "भुज",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "Who discovered the law of gravity?",
    question_hi: "गुरुत्वाकर्षण का नियम किसने खोजा?",
    options_en: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    answer_en: "Isaac Newton",
    answer_hi: "आइज़ैक न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which Indian state is famous for the 'Hornbill Festival'?",
    question_hi: "कौन सा भारतीय राज्य 'हॉर्नबिल फेस्टिवल' के लिए प्रसिद्ध है?",
    options_en: ["Nagaland", "Assam", "Manipur", "Arunachal Pradesh"],
    options_hi: ["नागालैंड", "असम", "मणिपुर", "अरुणाचल प्रदेश"],
    answer_en: "Nagaland",
    answer_hi: "नागालैंड",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which is the chemical formula of water?",
    question_hi: "जल का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Which Indian monument is also called the 'Symbol of Love'?",
    question_hi: "भारत का कौन सा स्मारक 'प्रेम का प्रतीक' कहलाता है?",
    options_en: ["Taj Mahal", "Red Fort", "India Gate", "Qutub Minar"],
    options_hi: ["ताज महल", "लाल किला", "इंडिया गेट", "कुतुब मीनार"],
    answer_en: "Taj Mahal",
    answer_hi: "ताज महल",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which is the largest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which Indian state is called the 'Spice Garden of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत का मसाले का बगीचा' कहलाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Which is the first Indian woman astronaut?",
    question_hi: "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन हैं?",
    options_en: ["Kalpana Chawla", "Sunita Williams", "Ritu Karidhal", "Anousheh Ansari"],
    options_hi: ["कल्पना चावला", "सुनिता विलियम्स", "ऋतु करीधल", "अनुशेह अंसारी"],
    answer_en: "Kalpana Chawla",
    answer_hi: "कल्पना चावला",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Which Indian river is called the 'Dakshin Ganga'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which planet is called the 'Red Planet'?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "Which Indian festival is celebrated as the harvest festival in Punjab?",
    question_hi: "पंजाब में कौन सा त्यौहार फसल कटाई के रूप में मनाया जाता है?",
    options_en: ["Baisakhi", "Pongal", "Makar Sankranti", "Onam"],
    options_hi: ["बैसाखी", "पोंगल", "मकर संक्रांति", "ओणम"],
    answer_en: "Baisakhi",
    answer_hi: "बैसाखी",
    attempted: false,
    selected: ""
},
{
    num: 26,
    question_en: "Which Indian leader gave the 'Quit India' speech in 1942?",
    question_hi: "1942 में 'भारत छोड़ो' आंदोलन की घोषणा किसने की?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Which is the largest coral reef in the world?",
    question_hi: "विश्व का सबसे बड़ा प्रवाल भित्ति कौन सा है?",
    options_en: ["Great Barrier Reef", "Belize Reef", "Red Sea Reef", "New Caledonia Reef"],
    options_hi: ["ग्रेट बैरियर रीफ", "बेलीज़ रीफ", "रेड सी रीफ", "न्यू कैलेडोनिया रीफ"],
    answer_en: "Great Barrier Reef",
    answer_hi: "ग्रेट बैरियर रीफ",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which is the fastest land animal?",
    question_hi: "सबसे तेज़ स्थलीय जानवर कौन सा है?",
    options_en: ["Cheetah", "Lion", "Tiger", "Leopard"],
    options_hi: ["चीता", "सिंह", "बाघ", "तेंदुआ"],
    answer_en: "Cheetah",
    answer_hi: "चीता",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Which is the largest volcano in India?",
    question_hi: "भारत का सबसे बड़ा ज्वालामुखी कौन सा है?",
    options_en: ["Barren Island", "Mount Abu", "Deccan Volcanoes", "Narcondam"],
    options_hi: ["बैरेन द्वीप", "माउंट आबू", "डेक्कन ज्वालामुखी", "नारकोंदम"],
    answer_en: "Barren Island",
    answer_hi: "बैरेन द्वीप",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which Indian state has the largest population?",
    question_hi: "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "Which is the first artificial satellite of India?",
    question_hi: "भारत का पहला कृत्रिम उपग्रह कौन सा था?",
    options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
    options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which Indian monument is a UNESCO World Heritage Site?",
    question_hi: "कौन सा भारतीय स्मारक यूनेस्को विश्व धरोहर स्थल है?",
    options_en: ["Taj Mahal", "Qutub Minar", "Red Fort", "All of these"],
    options_hi: ["ताज महल", "कुतुब मीनार", "लाल किला", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "Which Indian festival marks the harvest in South India?",
    question_hi: "दक्षिण भारत में कौन सा त्यौहार फसल कटाई का प्रतीक है?",
    options_en: ["Pongal", "Baisakhi", "Makar Sankranti", "Onam"],
    options_hi: ["पोंगल", "बैसाखी", "मकर संक्रांति", "ओणम"],
    answer_en: "Pongal",
    answer_hi: "पोंगल",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which vitamin is produced when skin is exposed to sunlight?",
    question_hi: "सूरज की रोशनी में त्वचा के संपर्क में आने पर कौन सा विटामिन बनता है?",
    options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    options_hi: ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Which is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Tiger", "Lion", "Elephant", "Peacock"],
    options_hi: ["बाघ", "सिंह", "हाथी", "मोर"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which is the national flower of India?",
    question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
    options_en: ["Lotus", "Rose", "Marigold", "Jasmine"],
    options_hi: ["कमल", "गुलाब", "गेंदा", "चमेली"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which is the first Indian nuclear test site?",
    question_hi: "भारत का पहला परमाणु परीक्षण स्थल कौन सा था?",
    options_en: ["Pokhran", "Kalpakkam", "Bhabha Atomic Research Centre", "Rajasthan Desert"],
    options_hi: ["पोखरण", "कल्पक्कम", "भाभा एटॉमिक रिसर्च सेंटर", "राजस्थान रेगिस्तान"],
    answer_en: "Pokhran",
    answer_hi: "पोखरण",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which Indian river is called the 'Ganga of the South'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which planet is known as the Blue Planet?",
    question_hi: "कौन सा ग्रह 'नीला ग्रह' के नाम से जाना जाता है?",
    options_en: ["Earth", "Neptune", "Uranus", "Saturn"],
    options_hi: ["पृथ्वी", "नेपच्यून", "यूरनस", "शनि"],
    answer_en: "Earth",
    answer_hi: "पृथ्वी",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के नाम से किसे जाना जाता है?",
    options_en: ["APJ Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    options_hi: ["ए पी जे अब्दुल कलाम", "होमी भाभा", "विक्रम साराभाई", "सत्येन्द्र नाथ बोस"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए पी जे अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Which is the national reptile of India?",
    question_hi: "भारत का राष्ट्रीय सरीसृप कौन सा है?",
    options_en: ["King Cobra", "Crocodile", "Python", "Monitor Lizard"],
    options_hi: ["किंग कोबरा", "मगरमच्छ", "अजगर", "मानिटर लिज़ार्ड"],
    answer_en: "King Cobra",
    answer_hi: "किंग कोबरा",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which is the largest desert in the world?",
    question_hi: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Sahara", "Gobi", "Kalahari", "Thar"],
    options_hi: ["सहारा", "गोबी", "कालाहारी", "थार"],
    answer_en: "Sahara",
    answer_hi: "सहारा",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which Indian state is known as the 'Land of Rising Sun'?",
    question_hi: "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
    options_en: ["Arunachal Pradesh", "Assam", "Manipur", "Nagaland"],
    options_hi: ["अरुणाचल प्रदेश", "असम", "मणिपुर", "नागालैंड"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "Which is the first Indian rocket to reach space?",
    question_hi: "अंतरिक्ष तक पहुँचने वाली पहली भारतीय रॉकेट कौन सी थी?",
    options_en: ["SLV-3", "PSLV", "GSLV", "Rohini"],
    options_hi: ["SLV-3", "PSLV", "GSLV", "रोहिणी"],
    answer_en: "SLV-3",
    answer_hi: "SLV-3",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which is the national fish of India?",
    question_hi: "भारत की राष्ट्रीय मछली कौन सी है?",
    options_en: ["Hilsa", "Rohu", "Catla", "Mrigal"],
    options_hi: ["हिल्सा", "रोहू", "कातला", "मृगल"],
    answer_en: "Hilsa",
    answer_hi: "हिल्सा",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which is the tallest mountain in India?",
    question_hi: "भारत का सबसे ऊँचा पर्वत कौन सा है?",
    options_en: ["Kanchenjunga", "Everest", "Nanda Devi", "Annapurna"],
    options_hi: ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "अन्नपूर्णा"],
    answer_en: "Kanchenjunga",
    answer_hi: "कंचनजंगा",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which is the longest river in the world?",
    question_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
    options_en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    options_hi: ["नाइल", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which is the fastest bird in the world?",
    question_hi: "विश्व का सबसे तेज़ पक्षी कौन सा है?",
    options_en: ["Peregrine Falcon", "Eagle", "Hawk", "Ostrich"],
    options_hi: ["पेरेग्रिन फाल्कन", "गरुड़", "बाज़", "शुतुरमुर्ग"],
    answer_en: "Peregrine Falcon",
    answer_hi: "पेरेग्रिन फाल्कन",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which is the fastest marine animal?",
    question_hi: "सबसे तेज़ जलीय जानवर कौन सा है?",
    options_en: ["Sailfish", "Dolphin", "Shark", "Tuna"],
    options_hi: ["सेलफ़िश", "डॉल्फिन", "शार्क", "टूना"],
    answer_en: "Sailfish",
    answer_hi: "सेलफ़िश",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which is the largest bone in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    options_en: ["Femur", "Tibia", "Humerus", "Fibula"],
    options_hi: ["फीमर", "टिबिया", "ह्यूमरस", "फिबुला"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
}

];


let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};