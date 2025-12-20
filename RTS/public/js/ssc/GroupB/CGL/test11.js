const questions = [
{
  num: 1,
  question_en: "What is the chemical symbol for gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Gd", "Go"],
  options_hi: ["Au", "Ag", "Gd", "Go"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
  options_en: ["Mars", "Jupiter", "Venus", "Mercury"],
  options_hi: ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who wrote the Mahabharata?",
  question_hi: "महाभारत किसने लिखा?",
  options_en: ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
  options_hi: ["व्यास", "वाल्मीकि", "कालिदास", "तुलसीदास"],
  answer_en: "Vyasa",
  answer_hi: "व्यास",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the boiling point of water in Celsius?",
  question_hi: "पानी का उबालने का तापमान (सेल्सियस) क्या है?",
  options_en: ["100°C", "90°C", "80°C", "120°C"],
  options_hi: ["100°C", "90°C", "80°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which gas is essential for human respiration?",
  question_hi: "मानव श्वसन के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 6,
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
  num: 7,
  question_en: "Which is the largest continent by area?",
  question_hi: "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "North America"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which Indian festival is known as the festival of colors?",
  question_hi: "भारत का कौन सा त्योहार 'रंगों का त्योहार' कहलाता है?",
  options_en: ["Holi", "Diwali", "Eid", "Christmas"],
  options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
  answer_en: "Holi",
  answer_hi: "होली",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
  options_hi: ["राजेंद्र प्रसाद", "डा. एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरी"],
  answer_en: "Rajendra Prasad",
  answer_hi: "राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the largest organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  options_en: ["Skin", "Liver", "Heart", "Lungs"],
  options_hi: ["त्वचा", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Skin",
  answer_hi: "त्वचा",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which Indian state is famous for its tea gardens?",
  question_hi: "कौन सा भारतीय राज्य अपने चाय बगानों के लिए प्रसिद्ध है?",
  options_en: ["Assam", "Kerala", "West Bengal", "Tamil Nadu"],
  options_hi: ["असम", "केरल", "पश्चिम बंगाल", "तमिलनाडु"],
  answer_en: "Assam",
  answer_hi: "असम",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लीएल्मो मार्कोनी"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which is the smallest planet in the solar system?",
  question_hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
  options_en: ["Mercury", "Mars", "Venus", "Earth"],
  options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which vitamin is essential for blood clotting?",
  question_hi: "कौन सा विटामिन रक्त का थक्का बनने के लिए आवश्यक है?",
  options_en: ["Vitamin K", "Vitamin D", "Vitamin A", "Vitamin C"],
  options_hi: ["विटामिन K", "विटामिन D", "विटामिन A", "विटामिन C"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which Indian river flows into the Arabian Sea?",
  question_hi: "कौन सी भारतीय नदी अरब सागर में बहती है?",
  options_en: ["Narmada", "Ganga", "Yamuna", "Godavari"],
  options_hi: ["नर्मदा", "गंगा", "यमुना", "गोदावरी"],
  answer_en: "Narmada",
  answer_hi: "नर्मदा",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which is the largest gland in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा ग्रंथि कौन सा है?",
  options_en: ["Liver", "Pancreas", "Thyroid", "Adrenal"],
  options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "अड्रेनल"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which country is known as the Land of the Midnight Sun?",
  question_hi: "कौन सा देश 'मध्यरात्रि सूर्य की भूमि' के नाम से जाना जाता है?",
  options_en: ["Norway", "Sweden", "Finland", "Iceland"],
  options_hi: ["नॉर्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"],
  answer_en: "Norway",
  answer_hi: "नॉर्वे",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की?",
  options_en: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "जोसेफ लिस्टर"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which Indian state is famous for its backwaters?",
  question_hi: "कौन सा भारतीय राज्य अपने बैकवाटर्स के लिए प्रसिद्ध है?",
  options_en: ["Kerala", "Goa", "Tamil Nadu", "Karnataka"],
  options_hi: ["केरल", "गोवा", "तमिलनाडु", "कर्नाटक"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which is the largest ocean in the world?",
  question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which gas is most abundant in the Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
  options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Who is known as the 'Father of Nation' in India?",
  question_hi: "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh", "Subhash Chandra Bose"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "भगत सिंह", "सुभाष चंद्र बोस"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which is the smallest bone in the human body?",
  question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  options_en: ["Stapes", "Femur", "Tibia", "Humerus"],
  options_hi: ["स्टेप्स", "फीमर", "टिबिया", "ह्यूमरस"],
  answer_en: "Stapes",
  answer_hi: "स्टेप्स",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which Indian city is called the 'Pink City'?",
  question_hi: "कौन सा भारतीय शहर 'गुलाबी शहर' कहलाता है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सा धातु सामान्य तापमान पर द्रव होती है?",
  options_en: ["Mercury", "Lead", "Iron", "Copper"],
  options_hi: ["पारा", "सीसा", "लौह", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Who was the first woman Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
  options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
  options_hi: ["इंदिरा गांधी", "सोनिया गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which planet has the most moons in the solar system?",
  question_hi: "सौरमंडल में किस ग्रह के सबसे अधिक चंद्रमा हैं?",
  options_en: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  options_hi: ["शनि", "बृहस्पति", "यूरेनस", "नेप्च्यून"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Eagle", "Parrot", "Sparrow"],
  options_hi: ["मोर", "गरुड़", "तोता", "गौरैया"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which is the largest desert in India?",
  question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Thar", "Sahara", "Gobi", "Kalahari"],
  options_hi: ["थार", "सहारा", "गोबी", "कालाहारी"],
  answer_en: "Thar",
  answer_hi: "थार",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which instrument is used to measure atmospheric pressure?",
  question_hi: "वायुमंडलीय दबाव मापने के लिए कौन सा यंत्र प्रयोग होता है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइज्रोमीटर", "एनमामीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 31,
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
  num: 32,
  question_en: "Which is the first Indian satellite to orbit the Earth?",
  question_hi: "पृथ्वी की परिक्रमा करने वाला पहला भारतीय उपग्रह कौन सा है?",
  options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
  options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
  answer_en: "Aryabhata",
  answer_hi: "आर्यभट्ट",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which is the largest mammal in the world?",
  question_hi: "विश्व का सबसे बड़ा स्तनपायी कौन सा है?",
  options_en: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
  options_hi: ["ब्लू व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
  answer_en: "Blue Whale",
  answer_hi: "ब्लू व्हेल",
  attempted: false,
  selected: ""
},
{
  num: 34,
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
  num: 35,
  question_en: "Which Indian river is called the 'Sorrow of Bihar'?",
  question_hi: "कौन सी भारतीय नदी 'बिहार का दुःख' कहलाती है?",
  options_en: ["Kosi", "Ganga", "Yamuna", "Brahmaputra"],
  options_hi: ["कोसी", "गंगा", "यमुना", "ब्रह्मपुत्र"],
  answer_en: "Kosi",
  answer_hi: "कोसी",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which element has the atomic number 1?",
  question_hi: "कौन सा तत्व का परमाणु क्रमांक 1 है?",
  options_en: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  options_hi: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
  question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' के नाम से जाना जाता है?",
  options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
  options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Who is known as the 'Missile Man of India'?",
  question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
  options_en: ["APJ Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "C.V. Raman"],
  options_hi: ["ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "विक्रम साराभाई", "सी.वी. रमन"],
  answer_en: "APJ Abdul Kalam",
  answer_hi: "ए.पी.जे. अब्दुल कलाम",
  attempted: false,
  selected: ""
},
{
  num: 39,
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
  num: 40,
  question_en: "Which is the first Indian city to get electricity?",
  question_hi: "कौन सा भारतीय शहर सबसे पहले विद्युत प्राप्त किया?",
  options_en: ["Darjeeling", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["दार्जीलिंग", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "Darjeeling",
  answer_hi: "दार्जीलिंग",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which is the largest island in India?",
  question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
  options_en: ["Andaman", "Lakshadweep", "Majuli", "Divar"],
  options_hi: ["अंडमान", "लक्षद्वीप", "माजुली", "दीवार"],
  answer_en: "Andaman",
  answer_hi: "अंडमान",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which is the largest planet in the solar system?",
  question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Earth", "Neptune"],
  options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "नेप्च्यून"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which is the national aquatic animal of India?",
  question_hi: "भारत का राष्ट्रीय जलीय पशु कौन सा है?",
  options_en: ["River Dolphin", "Shark", "Turtle", "Whale"],
  options_hi: ["नदी डॉल्फिन", "शार्क", "कछुआ", "व्हेल"],
  answer_en: "River Dolphin",
  answer_hi: "नदी डॉल्फिन",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who wrote 'Ramcharitmanas'?",
  question_hi: "'रामचरितमानस' किसने लिखा?",
  options_en: ["Tulsidas", "Valmiki", "Kalidasa", "Kabir"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "कालिदास", "कबीर"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 45,
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
  num: 46,
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
  num: 47,
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
  num: 48,
  question_en: "Which Indian river is known as the 'Ganga of the South'?",
  question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
  options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 49,
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
  num: 50,
  question_en: "Which Indian festival is known as the 'Festival of Lights'?",
  question_hi: "भारत का कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
  options_en: ["Diwali", "Holi", "Eid", "Christmas"],
  options_hi: ["दीवाली", "होली", "ईद", "क्रिसमस"],
  answer_en: "Diwali",
  answer_hi: "दीवाली",
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