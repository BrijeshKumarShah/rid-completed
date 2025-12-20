const questions = [
  {
  num: 1,
  question_en: "What is the capital of Rajasthan?",
  question_hi: "राजस्थान की राजधानी क्या है?",
  options_en: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "कोटा"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which vitamin is known as Ascorbic Acid?",
  question_hi: "एस्कॉर्बिक एसिड किस विटामिन को कहा जाता है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is 15% of 200?",
  question_hi: "200 का 15% कितना है?",
  options_en: ["30", "25", "35", "40"],
  options_hi: ["30", "25", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who is known as the Father of the Indian Constitution?",
  question_hi: "भारतीय संविधान के जनक कौन कहलाते हैं?",
  options_en: ["B. R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad"],
  options_hi: ["बी. आर. आंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
  answer_en: "B. R. Ambedkar",
  answer_hi: "बी. आर. आंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which river is the longest in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
  options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल कितना है?",
  options_en: ["12", "14", "16", "10"],
  options_hi: ["12", "14", "16", "10"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which gas is released during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is 7 × 9?",
  question_hi: "7 × 9 कितना होता है?",
  options_en: ["63", "56", "72", "64"],
  options_hi: ["63", "56", "72", "64"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which state is known as the 'Land of Five Rivers'?",
  question_hi: "'पाँच नदियों की भूमि' किस राज्य को कहा जाता है?",
  options_en: ["Punjab", "Haryana", "Bihar", "Assam"],
  options_hi: ["पंजाब", "हरियाणा", "बिहार", "असम"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the chemical formula of common salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "HCl", "Na2CO3"],
  options_hi: ["NaCl", "KCl", "HCl", "Na2CO3"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is 25 × 4?",
  question_hi: "25 × 4 कितना होता है?",
  options_en: ["100", "90", "110", "95"],
  options_hi: ["100", "90", "110", "95"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which planet is the largest in the solar system?",
  question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Earth", "Mars"],
  options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who wrote Ramcharitmanas?",
  question_hi: "रामचरितमानस किसने लिखी?",
  options_en: ["Tulsidas", "Kabir", "Surdas", "Valmiki"],
  options_hi: ["तुलसीदास", "कबीर", "सूरदास", "वाल्मीकि"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the value of 18²?",
  question_hi: "18 का वर्ग कितना है?",
  options_en: ["324", "256", "288", "312"],
  options_hi: ["324", "256", "288", "312"],
  answer_en: "324",
  answer_hi: "324",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which metal is used to make electric wires?",
  question_hi: "बिजली के तार बनाने में कौन सी धातु प्रयोग होती है?",
  options_en: ["Copper", "Iron", "Aluminium", "Silver"],
  options_hi: ["तांबा", "लोहा", "एल्युमिनियम", "चाँदी"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
  options_en: ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
  options_hi: ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is 560 ÷ 8?",
  question_hi: "560 ÷ 8 कितना है?",
  options_en: ["70", "60", "75", "65"],
  options_hi: ["70", "60", "75", "65"],
  answer_en: "70",
  answer_hi: "70",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which blood group is called universal donor?",
  question_hi: "किस रक्त समूह को सार्वभौमिक दाता कहा जाता है?",
  options_en: ["O-", "O+", "AB+", "AB-"],
  options_hi: ["O-", "O+", "AB+", "AB-"],
  answer_en: "O-",
  answer_hi: "O-",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who discovered gravity?",
  question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
  options_en: ["Isaac Newton", "Albert Einstein", "Galileo", "Edison"],
  options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो", "एडिसन"],
  answer_en: "Isaac Newton",
  answer_hi: "आइज़ैक न्यूटन",
  attempted: false,
  selected: ""
},
{
  "num": 21,
  "question_en": "What is the capital of India?",
  "question_hi": "भारत की राजधानी क्या है?",
  "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  "answer_en": "New Delhi",
  "answer_hi": "नई दिल्ली",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which planet is known as the Red Planet?",
  "question_hi": "कौन सा ग्रह लाल ग्रह कहलाता है?",
  "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
  "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
  "answer_en": "Mars",
  "answer_hi": "मंगल",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "What is the national animal of India?",
  "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
  "options_en": ["Tiger", "Lion", "Elephant", "Leopard"],
  "options_hi": ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  "answer_en": "Tiger",
  "answer_hi": "बाघ",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Who wrote the Indian National Anthem?",
  "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
  "options_en": ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Subhash Bose"],
  "options_hi": ["रवीन्द्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "सुभाष बोस"],
  "answer_en": "Rabindranath Tagore",
  "answer_hi": "रवीन्द्रनाथ टैगोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Which gas is essential for breathing?",
  "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "What is the largest ocean in the world?",
  "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
  "answer_en": "Pacific Ocean",
  "answer_hi": "प्रशांत महासागर",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which is the smallest continent?",
  "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
  "options_en": ["Australia", "Europe", "Antarctica", "South America"],
  "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  "answer_en": "Australia",
  "answer_hi": "ऑस्ट्रेलिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "How many days are there in a leap year?",
  "question_hi": "लीप वर्ष में कितने दिन होते हैं?",
  "options_en": ["366", "365", "364", "367"],
  "options_hi": ["366", "365", "364", "367"],
  "answer_en": "366",
  "answer_hi": "366",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "Which instrument is used to measure temperature?",
  "question_hi": "तापमान मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
  "options_en": ["Thermometer", "Barometer", "Hygrometer", "Speedometer"],
  "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "स्पीडोमीटर"],
  "answer_en": "Thermometer",
  "answer_hi": "थर्मामीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "Who was the first Prime Minister of India?",
  "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
  "options_en": ["Jawaharlal Nehru", "Gandhi", "Patel", "Rajendra Prasad"],
  "options_hi": ["जवाहरलाल नेहरू", "गांधी", "पटेल", "राजेंद्र प्रसाद"],
  "answer_en": "Jawaharlal Nehru",
  "answer_hi": "जवाहरलाल नेहरू",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which metal is liquid at room temperature?",
  "question_hi": "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
  "options_en": ["Mercury", "Iron", "Aluminium", "Copper"],
  "options_hi": ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  "answer_en": "Mercury",
  "answer_hi": "पारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Which organ pumps blood in the human body?",
  "question_hi": "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
  "options_en": ["Heart", "Lungs", "Liver", "Kidney"],
  "options_hi": ["हृदय", "फेफड़े", "यकृत", "गुर्दा"],
  "answer_en": "Heart",
  "answer_hi": "हृदय",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "What is the national flower of India?",
  "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
  "options_en": ["Lotus", "Rose", "Sunflower", "Lily"],
  "options_hi": ["कमल", "गुलाब", "सूरजमुखी", "लिली"],
  "answer_en": "Lotus",
  "answer_hi": "कमल",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which vitamin is produced in the skin by sunlight?",
  "question_hi": "धूप से त्वचा में कौन सा विटामिन बनता है?",
  "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  "answer_en": "Vitamin D",
  "answer_hi": "विटामिन D",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which country is known as the Land of the Rising Sun?",
  "question_hi": "उगते सूरज की भूमि किस देश को कहा जाता है?",
  "options_en": ["Japan", "China", "Korea", "Thailand"],
  "options_hi": ["जापान", "चीन", "कोरिया", "थाईलैंड"],
  "answer_en": "Japan",
  "answer_hi": "जापान",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "What is the largest mammal?",
  "question_hi": "सबसे बड़ा स्तनपायी कौन सा है?",
  "options_en": ["Blue Whale", "Elephant", "Giraffe", "Rhino"],
  "options_hi": ["नीली व्हेल", "हाथी", "जिराफ", "गैंडा"],
  "answer_en": "Blue Whale",
  "answer_hi": "नीली व्हेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Which river is the longest in the world?",
  "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Nile", "Amazon", "Ganga", "Yangtze"],
  "options_hi": ["नील", "अमेज़न", "गंगा", "यांग्त्से"],
  "answer_en": "Nile",
  "answer_hi": "नील",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which gas plants use for photosynthesis?",
  "question_hi": "प्रकाश संश्लेषण के लिए पौधे किस गैस का उपयोग करते हैं?",
  "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Which is the hardest natural substance?",
  "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  "options_en": ["Diamond", "Gold", "Iron", "Silver"],
  "options_hi": ["हीरा", "सोना", "लोहा", "चांदी"],
  "answer_en": "Diamond",
  "answer_hi": "हीरा",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Who is known as the Father of the Nation in India?",
  "question_hi": "भारत में राष्ट्रपिता किसे कहा जाता है?",
  "options_en": ["Mahatma Gandhi", "Nehru", "Subhash Bose", "Ambedkar"],
  "options_hi": ["महात्मा गांधी", "नेहरू", "सुभाष बोस", "अंबेडकर"],
  "answer_en": "Mahatma Gandhi",
  "answer_hi": "महात्मा गांधी",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which device is used to see distant objects?",
  "question_hi": "दूर की वस्तुओं को देखने के लिए किस यंत्र का उपयोग किया जाता है?",
  "options_en": ["Telescope", "Microscope", "Periscope", "Binocular"],
  "options_hi": ["दूरबीन", "सूक्ष्मदर्शी", "पेरिस्कोप", "बाइनोक्युलर"],
  "answer_en": "Telescope",
  "answer_hi": "दूरबीन",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "Which festival is known as the Festival of Lights?",
  "question_hi": "प्रकाश का त्योहार किसे कहा जाता है?",
  "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
  "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which part of the plant conducts photosynthesis?",
  "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
  "options_en": ["Leaf", "Root", "Stem", "Flower"],
  "options_hi": ["पत्ता", "जड़", "तना", "फूल"],
  "answer_en": "Leaf",
  "answer_hi": "पत्ता",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "What is the SI unit of force?",
  "question_hi": "बल की SI इकाई क्या है?",
  "options_en": ["Newton", "Joule", "Watt", "Pascal"],
  "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
  "answer_en": "Newton",
  "answer_hi": "न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which continent is known as the Dark Continent?",
  "question_hi": "किस महाद्वीप को काला महाद्वीप कहा जाता है?",
  "options_en": ["Africa", "Asia", "Europe", "Australia"],
  "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
  "answer_en": "Africa",
  "answer_hi": "अफ्रीका",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Which blood group is called the universal donor?",
  "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता कहलाता है?",
  "options_en": ["O Negative", "O Positive", "AB Positive", "A Negative"],
  "options_hi": ["O नेगेटिव", "O पॉजिटिव", "AB पॉजिटिव", "A नेगेटिव"],
  "answer_en": "O Negative",
  "answer_hi": "O नेगेटिव",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which is the fastest land animal?",
  "question_hi": "सबसे तेज़ स्थलीय जानवर कौन सा है?",
  "options_en": ["Cheetah", "Lion", "Horse", "Dog"],
  "options_hi": ["चीता", "शेर", "घोड़ा", "कुत्ता"],
  "answer_en": "Cheetah",
  "answer_hi": "चीता",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "Which Indian city is known as the Pink City?",
  "question_hi": "भारत का गुलाबी शहर किसे कहा जाता है?",
  "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
  "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
  "answer_en": "Jaipur",
  "answer_hi": "जयपुर",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Which element is required for combustion?",
  "question_hi": "दहन के लिए कौन सा तत्व आवश्यक है?",
  "options_en": ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  num: 50,
  question_en: "What is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Eagle", "Parrot", "Sparrow"],
  options_hi: ["मोर", "गरुड़", "तोता", "गौरैया"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
}
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};