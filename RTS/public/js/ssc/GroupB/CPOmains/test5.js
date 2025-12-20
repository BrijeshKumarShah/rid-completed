const questions = [

{
  num: 1,
  question_en: "Who wrote the book 'India After Gandhi'?",
  question_hi: "'इंडिया आफ्टर गांधी' किताब किसने लिखी?",
  options_en: ["Ramachandra Guha", "R.K. Narayan", "Jawaharlal Nehru", "B.R. Ambedkar"],
  options_hi: ["रामचंद्र गुहा", "आर.के. नारायण", "जवाहरलाल नेहरू", "बी.आर. आंबेडकर"],
  answer_en: "Ramachandra Guha",
  answer_hi: "रामचंद्र गुहा",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is 12 × 12?",
  question_hi: "12 × 12 कितना होता है?",
  options_en: ["144", "142", "154", "124"],
  options_hi: ["144", "142", "154", "124"],
  answer_en: "144",
  answer_hi: "144",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which planet is known as the 'Red Planet'?",
  question_hi: "'लाल ग्रह' के रूप में कौन सा ग्रह जाना जाता है?",
  options_en: ["Mars", "Jupiter", "Venus", "Mercury"],
  options_hi: ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Find the missing number: 2, 6, 12, 20, ?",
  question_hi: "श्रृंखला पूरी करें: 2, 6, 12, 20, ?",
  options_en: ["30", "32", "28", "26"],
  options_hi: ["30", "32", "28", "26"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the chemical symbol for Sodium?",
  question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Na", "S", "So", "N"],
  options_hi: ["Na", "S", "So", "N"],
  answer_en: "Na",
  answer_hi: "Na",
  attempted: false,
  selected: ""
},
{
  num: 6,
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
  num: 7,
  question_en: "What is the cube of 4?",
  question_hi: "4 का घन क्या होता है?",
  options_en: ["64", "16", "32", "48"],
  options_hi: ["64", "16", "32", "48"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which river is called 'Sorrow of Bihar'?",
  question_hi: "'बिहार का दुःख' किस नदी को कहा जाता है?",
  options_en: ["Kosi", "Ganga", "Yamuna", "Son"],
  options_hi: ["कोसी", "गंगा", "यमुना", "सोन"],
  answer_en: "Kosi",
  answer_hi: "कोसी",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which organ produces insulin in the human body?",
  question_hi: "मानव शरीर में इंसुलिन कौन सा अंग बनाता है?",
  options_en: ["Pancreas", "Liver", "Kidney", "Heart"],
  options_hi: ["अग्न्याशय", "यकृत", "गुर्दा", "हृदय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is 75 ÷ 5?",
  question_hi: "75 ÷ 5 कितना है?",
  options_en: ["12", "15", "18", "20"],
  options_hi: ["12", "15", "18", "20"],
  answer_en: "15",
  answer_hi: "15",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which festival is celebrated as the 'Festival of Lights'?",
  question_hi: "कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
  options_en: ["Diwali", "Holi", "Eid", "Raksha Bandhan"],
  options_hi: ["दिवाली", "होली", "ईद", "रक्षा बंधन"],
  answer_en: "Diwali",
  answer_hi: "दिवाली",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the next number in the series: 1, 1, 2, 3, 5, ?",
  question_hi: "श्रृंखला पूरी करें: 1, 1, 2, 3, 5, ?",
  options_en: ["7", "8", "9", "6"],
  options_hi: ["7", "8", "9", "6"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which Indian leader gave the 'Quit India' speech?",
  question_hi: "किस भारतीय नेता ने 'भारत छोड़ो' का भाषण दिया?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the SI unit of energy?",
  question_hi: "ऊर्जा की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which planet has rings around it?",
  question_hi: "किस ग्रह के चारों ओर छल्ले हैं?",
  options_en: ["Saturn", "Jupiter", "Mars", "Venus"],
  options_hi: ["शनि", "बृहस्पति", "मंगल", "शुक्र"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which Indian state is called 'God's Own Country'?",
  question_hi: "कौन सा भारतीय राज्य 'गॉड्स ओन कंट्री' कहलाता है?",
  options_en: ["Kerala", "Goa", "Punjab", "Karnataka"],
  options_hi: ["केरल", "गोवा", "पंजाब", "कर्नाटक"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is 45% of 200?",
  question_hi: "200 का 45% कितना है?",
  options_en: ["80", "85", "90", "95"],
  options_hi: ["80", "85", "90", "95"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which gas do plants release during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस छोड़ते हैं?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which Indian river originates from Yamunotri?",
  question_hi: "यमुनोत्री से कौन सी नदी निकलती है?",
  options_en: ["Yamuna", "Ganga", "Godavari", "Krishna"],
  options_hi: ["यमुना", "गंगा", "गोदावरी", "कृष्णा"],
  answer_en: "Yamuna",
  answer_hi: "यमुना",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is 100 ÷ 4?",
  question_hi: "100 ÷ 4 कितना है?",
  options_en: ["20", "25", "30", "24"],
  options_hi: ["20", "25", "30", "24"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who was the first Indian woman to go to space?",
  question_hi: "पहली भारतीय महिला अंतरिक्ष में कौन गई?",
  options_en: ["Kalpana Chawla", "Sunita Williams", "Koneru Humpy", "Indira Gandhi"],
  options_hi: ["कल्पना चावला", "सुनिता विलियम्स", "कोनेरु हम्पी", "इंदिरा गांधी"],
  answer_en: "Kalpana Chawla",
  answer_hi: "कल्पना चावला",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which Indian state is called the 'Land of Five Rivers'?",
  question_hi: "कौन सा राज्य 'पांच नदियों की भूमि' कहलाता है?",
  options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
  options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the freezing point of water in Celsius?",
  question_hi: "पानी का शून्यांक तापमान क्या है?",
  options_en: ["0°C", "100°C", "32°C", "-1°C"],
  options_hi: ["0°C", "100°C", "32°C", "-1°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की?",
  options_en: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "आइजैक न्यूटन", "अल्बर्ट आइंस्टीन"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is 8³?",
  question_hi: "8 का घन कितना है?",
  options_en: ["512", "256", "128", "64"],
  options_hi: ["512", "256", "128", "64"],
  answer_en: "512",
  answer_hi: "512",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which Indian monument is called 'Symbol of Love'?",
  question_hi: "भारत की कौन सी इमारत 'प्रेम का प्रतीक' कहलाती है?",
  options_en: ["Taj Mahal", "Red Fort", "Qutub Minar", "India Gate"],
  options_hi: ["ताज महल", "लाल किला", "कुतुब मीनार", "इंडिया गेट"],
  answer_en: "Taj Mahal",
  answer_hi: "ताज महल",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which is the smallest continent by area?",
  question_hi: "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Australia", "Europe", "Antarctica", "South America"],
  options_hi: ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is 7 × 8?",
  question_hi: "7 × 8 कितना होता है?",
  options_en: ["54", "56", "58", "52"],
  options_hi: ["54", "56", "58", "52"],
  answer_en: "56",
  answer_hi: "56",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which Indian state has the largest area?",
  question_hi: "सबसे बड़ा क्षेत्रफल वाला भारतीय राज्य कौन सा है?",
  options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
  options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which Indian river is known as 'Dakshin Ganga'?",
  question_hi: "कौन सी नदी 'दक्षिण की गंगा' कहलाती है?",
  options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who wrote 'Ramayana'?",
  question_hi: "'रामायण' किसने लिखा?",
  options_en: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
  options_hi: ["वाल्मीकि", "तुलसीदास", "व्यास", "कालिदास"],
  answer_en: "Valmiki",
  answer_hi: "वाल्मीकि",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is 144 ÷ 12?",
  question_hi: "144 ÷ 12 कितना होता है?",
  options_en: ["11", "12", "13", "14"],
  options_hi: ["11", "12", "13", "14"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which Indian state is called 'Scotland of India'?",
  question_hi: "भारत का कौन सा राज्य 'भारत का स्कॉटलैंड' कहलाता है?",
  options_en: ["Meghalaya", "Goa", "Himachal Pradesh", "Sikkim"],
  options_hi: ["मेघालय", "गोवा", "हिमाचल प्रदेश", "सिक्किम"],
  answer_en: "Meghalaya",
  answer_hi: "मेघालय",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who discovered the law of gravity?",
  question_hi: "गुरुत्वाकर्षण का नियम किसने खोजा?",
  options_en: ["Isaac Newton", "Albert Einstein", "Galileo", "Copernicus"],
  options_hi: ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो", "कोपरनिकस"],
  answer_en: "Isaac Newton",
  answer_hi: "आइजैक न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the square root of 225?",
  question_hi: "225 का वर्गमूल क्या है?",
  options_en: ["14", "15", "16", "13"],
  options_hi: ["14", "15", "16", "13"],
  answer_en: "15",
  answer_hi: "15",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which Indian city is called 'Pink City'?",
  question_hi: "भारत का कौन सा शहर 'पिंक सिटी' कहलाता है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which planet is known for its rings?",
  question_hi: "किस ग्रह के चारों ओर छल्ले हैं?",
  options_en: ["Saturn", "Jupiter", "Mars", "Venus"],
  options_hi: ["शनि", "बृहस्पति", "मंगल", "शुक्र"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Who was the first Indian to win a Nobel Prize?",
  question_hi: "पहले भारतीय जिसने नोबेल पुरस्कार जीता?",
  options_en: ["Rabindranath Tagore", "C.V. Raman", "Amartya Sen", "Hargobind Khorana"],
  options_hi: ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "अमर्त्य सेन", "हरगोबिंद खुराना"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the chemical symbol for Iron?",
  question_hi: "लौह का रासायनिक प्रतीक क्या है?",
  options_en: ["Fe", "Ir", "In", "I"],
  options_hi: ["Fe", "Ir", "In", "I"],
  answer_en: "Fe",
  answer_hi: "Fe",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which Indian state is called 'Land of Rising Sun'?",
  question_hi: "कौन सा भारतीय राज्य 'सूर्योदय का प्रदेश' कहलाता है?",
  options_en: ["Arunachal Pradesh", "Assam", "Sikkim", "Himachal Pradesh"],
  options_hi: ["अरुणाचल प्रदेश", "असम", "सिक्किम", "हिमाचल प्रदेश"],
  answer_en: "Arunachal Pradesh",
  answer_hi: "अरुणाचल प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who is known as the 'Father of Indian Constitution'?",
  question_hi: "भारतीय संविधान का 'पिता' किसे कहा जाता है?",
  options_en: ["B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
  options_hi: ["बी.आर. आंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
  answer_en: "B.R. Ambedkar",
  answer_hi: "बी.आर. आंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the next number: 11, 22, 33, 44, ?",
  question_hi: "श्रृंखला पूरी करें: 11, 22, 33, 44, ?",
  options_en: ["54", "55", "56", "57"],
  options_hi: ["54", "55", "56", "57"],
  answer_en: "55",
  answer_hi: "55",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ pumps blood in the human body?",
  question_hi: "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
  options_en: ["Heart", "Lungs", "Kidney", "Liver"],
  options_hi: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which gas do humans breathe in for survival?",
  question_hi: "जीवित रहने के लिए मनुष्य कौन सी गैस सांस के माध्यम से लेता है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who invented the light bulb?",
  question_hi: "लाइट बल्ब का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
  options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "जेम्स वॉट"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडिसन",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which is the largest ocean in the world?",
  question_hi: "दुनिया का सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 13 × 12?",
  question_hi: "13 × 12 कितना है?",
  options_en: ["156", "154", "158", "150"],
  options_hi: ["156", "154", "158", "150"],
  answer_en: "156",
  answer_hi: "156",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which Indian state is called 'Rice Bowl of India'?",
  question_hi: "भारत का कौन सा राज्य 'धान का कटोरा' कहलाता है?",
  options_en: ["West Bengal", "Punjab", "Kerala", "Odisha"],
  options_hi: ["पश्चिम बंगाल", "पंजाब", "केरल", "ओडिशा"],
  answer_en: "West Bengal",
  answer_hi: "पश्चिम बंगाल",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Who is the 'Missile Man of India'?",
  question_hi: "भारत के 'मिसाइल मैन' कौन हैं?",
  options_en: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
  options_hi: ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"],
  answer_en: "A.P.J. Abdul Kalam",
  answer_hi: "ए.पी.जे. अब्दुल कलाम",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the full form of RBI?",
  question_hi: "RBI का पूरा नाम क्या है?",
  options_en: ["Reserve Bank of India", "Regional Bank of India", "Rural Bank of India", "Royal Bank of India"],
  options_hi: ["भारतीय रिज़र्व बैंक", "क्षेत्रीय बैंक ऑफ़ इंडिया", "ग्रामीण बैंक ऑफ़ इंडिया", "रॉयल बैंक ऑफ़ इंडिया"],
  answer_en: "Reserve Bank of India",
  answer_hi: "भारतीय रिज़र्व बैंक",
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