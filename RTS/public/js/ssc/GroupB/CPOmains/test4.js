const questions = [
{
  num: 1,
  question_en: "Who is the author of 'The Discovery of India'?",
  question_hi: "'भारत की खोज' के लेखक कौन हैं?",
  options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "R.K. Narayan", "Rabindranath Tagore"],
  options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "आर.के. नारायण", "रवींद्रनाथ टैगोर"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is 36 ÷ 6?",
  question_hi: "36 ÷ 6 कितना है?",
  options_en: ["5", "6", "7", "8"],
  options_hi: ["5", "6", "7", "8"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूर्य के सबसे नजदीक कौन सा ग्रह है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Find the missing number: 1, 4, 9, 16, ?",
  question_hi: "श्रृंखला पूरी करें: 1, 4, 9, 16, ?",
  options_en: ["20", "24", "25", "30"],
  options_hi: ["20", "24", "25", "30"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which is the smallest planet in our solar system?",
  question_hi: "हमारे सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
  options_en: ["Mercury", "Mars", "Venus", "Earth"],
  options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is 13 × 7?",
  question_hi: "13 × 7 कितना है?",
  options_en: ["91", "92", "93", "94"],
  options_hi: ["91", "92", "93", "94"],
  answer_en: "91",
  answer_hi: "91",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which Indian leader launched the Quit India Movement?",
  question_hi: "किस भारतीय नेता ने भारत छोड़ो आंदोलन शुरू किया?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is the chemical symbol for Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Go", "Gd"],
  options_hi: ["Au", "Ag", "Go", "Gd"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which number comes next: 5, 10, 20, 40, ?",
  question_hi: "श्रृंखला पूरी करें: 5, 10, 20, 40, ?",
  options_en: ["60", "70", "80", "90"],
  options_hi: ["60", "70", "80", "90"],
  answer_en: "80",
  answer_hi: "80",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the currency of USA?",
  question_hi: "अमेरिका की मुद्रा क्या है?",
  options_en: ["Dollar", "Euro", "Rupee", "Pound"],
  options_hi: ["डॉलर", "यूरो", "रुपया", "पाउंड"],
  answer_en: "Dollar",
  answer_hi: "डॉलर",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which Indian festival is called 'Festival of Colors'?",
  question_hi: "भारत का कौन सा त्योहार 'रंगों का त्योहार' कहलाता है?",
  options_en: ["Holi", "Diwali", "Eid", "Raksha Bandhan"],
  options_hi: ["होली", "दिवाली", "ईद", "रक्षा बंधन"],
  answer_en: "Holi",
  answer_hi: "होली",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the square root of 196?",
  question_hi: "196 का वर्गमूल क्या है?",
  options_en: ["12", "13", "14", "15"],
  options_hi: ["12", "13", "14", "15"],
  answer_en: "14",
  answer_hi: "14",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"],
  options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "राजेंद्र प्रसाद"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is 6³?",
  question_hi: "6 का घन क्या है?",
  options_en: ["126", "216", "196", "256"],
  options_hi: ["126", "216", "196", "256"],
  answer_en: "216",
  answer_hi: "216",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which Indian state is known as the 'Land of the Rising Sun'?",
  question_hi: "कौन सा भारतीय राज्य 'सूर्योदय का प्रदेश' कहलाता है?",
  options_en: ["Assam", "Arunachal Pradesh", "Himachal Pradesh", "Sikkim"],
  options_hi: ["असम", "अरुणाचल प्रदेश", "हिमाचल प्रदेश", "सिक्किम"],
  answer_en: "Arunachal Pradesh",
  answer_hi: "अरुणाचल प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which city is called 'City of Lakes' in India?",
  question_hi: "भारत में 'झीलों का शहर' किसे कहा जाता है?",
  options_en: ["Udaipur", "Jaipur", "Bhopal", "Kolkata"],
  options_hi: ["उदयपुर", "जयपुर", "भोपाल", "कोलकाता"],
  answer_en: "Udaipur",
  answer_hi: "उदयपुर",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is 25% of 400?",
  question_hi: "400 का 25% कितना है?",
  options_en: ["90", "100", "110", "120"],
  options_hi: ["90", "100", "110", "120"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which gas is absorbed by plants during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the next number: 2, 4, 8, 16, ?",
  question_hi: "श्रृंखला पूरी करें: 2, 4, 8, 16, ?",
  options_en: ["30", "32", "34", "36"],
  options_hi: ["30", "32", "34", "36"],
  answer_en: "32",
  answer_hi: "32",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which Indian state is called the 'Spice Garden of India'?",
  question_hi: "कौन सा भारतीय राज्य 'भारत का मसालों का बगीचा' कहलाता है?",
  options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
  options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which Indian river is called the 'Ganga of the South'?",
  question_hi: "दक्षिण भारत की 'गंगा' किस नदी को कहा जाता है?",
  options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is 9² + 12²?",
  question_hi: "9² + 12² कितना है?",
  options_en: ["225", "243", "180", "210"],
  options_hi: ["225", "243", "180", "210"],
  answer_en: "225",
  answer_hi: "225",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Rajendra Prasad", "Zakir Husain", "V.V. Giri", "Radhakrishnan"],
  options_hi: ["राजेंद्र प्रसाद", "जाकिर हुसैन", "वी.वी. गिरी", "राधाकृष्णन"],
  answer_en: "Rajendra Prasad",
  answer_hi: "राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which gas is essential for respiration?",
  question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Find the missing number: 5, 10, 20, 40, ?",
  question_hi: "श्रृंखला पूरी करें: 5, 10, 20, 40, ?",
  options_en: ["60", "70", "80", "90"],
  options_hi: ["60", "70", "80", "90"],
  answer_en: "80",
  answer_hi: "80",
  attempted: false,
  selected: ""
},
{
  num: 26,
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
  num: 27,
  question_en: "Who wrote the Indian national song 'Vande Mataram'?",
  question_hi: "भारतीय राष्ट्रगान 'वन्दे मातरम्' किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subhash Chandra Bose", "Mahatma Gandhi"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सुभाष चंद्र बोस", "महात्मा गांधी"],
  answer_en: "Bankim Chandra Chatterjee",
  answer_hi: "बंकिम चंद्र चट्टोपाध्याय",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is 15% of 200?",
  question_hi: "200 का 15% कितना है?",
  options_en: ["25", "30", "35", "40"],
  options_hi: ["25", "30", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which Indian state is known as the 'Rice Bowl of India'?",
  question_hi: "भारत का कौन सा राज्य 'भारत का धान का कटोरा' कहलाता है?",
  options_en: ["Punjab", "West Bengal", "Kerala", "Tamil Nadu"],
  options_hi: ["पंजाब", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
  answer_en: "West Bengal",
  answer_hi: "पश्चिम बंगाल",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is 50 × 8?",
  question_hi: "50 × 8 कितना है?",
  options_en: ["300", "350", "400", "450"],
  options_hi: ["300", "350", "400", "450"],
  answer_en: "400",
  answer_hi: "400",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which Indian state has the largest population?",
  question_hi: "सबसे अधिक जनसंख्या वाला भारतीय राज्य कौन सा है?",
  options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
  answer_en: "Uttar Pradesh",
  answer_hi: "उत्तर प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which is the largest planet in our solar system?",
  question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Earth", "Neptune"],
  options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "वरुण"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the next number: 3, 6, 12, 24, ?",
  question_hi: "श्रृंखला पूरी करें: 3, 6, 12, 24, ?",
  options_en: ["30", "36", "48", "50"],
  options_hi: ["30", "36", "48", "50"],
  answer_en: "48",
  answer_hi: "48",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which Indian festival is celebrated on the full moon of Shravan?",
  question_hi: "श्रावण पूर्णिमा पर कौन सा त्योहार मनाया जाता है?",
  options_en: ["Raksha Bandhan", "Holi", "Diwali", "Eid"],
  options_hi: ["रक्षा बंधन", "होली", "दिवाली", "ईद"],
  answer_en: "Raksha Bandhan",
  answer_hi: "रक्षा बंधन",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुलिएल्मो मार्कोनी"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is 7 × 14?",
  question_hi: "7 × 14 कितना है?",
  options_en: ["88", "96", "98", "100"],
  options_hi: ["88", "96", "98", "100"],
  answer_en: "98",
  answer_hi: "98",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which element has the chemical symbol 'O'?",
  question_hi: "O का रासायनिक प्रतीक किस तत्व का है?",
  options_en: ["Oxygen", "Osmium", "Gold", "Silver"],
  options_hi: ["ऑक्सीजन", "ऑस्मियम", "सोना", "चांदी"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Who founded the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की?",
  options_en: ["A.O. Hume", "Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru"],
  options_hi: ["ए.ओ. ह्यूम", "बाल गंगाधर तिलक", "महात्मा गांधी", "जवाहरलाल नेहरू"],
  answer_en: "A.O. Hume",
  answer_hi: "ए.ओ. ह्यूम",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which Indian state is famous for tea production?",
  question_hi: "चाय उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
  options_en: ["Assam", "Punjab", "Kerala", "Rajasthan"],
  options_hi: ["असम", "पंजाब", "केरल", "राजस्थान"],
  answer_en: "Assam",
  answer_hi: "असम",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the cube of 5?",
  question_hi: "5 का घन क्या है?",
  options_en: ["100", "125", "150", "75"],
  options_hi: ["100", "125", "150", "75"],
  answer_en: "125",
  answer_hi: "125",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which Indian state is called the 'Spice Garden of India'?",
  question_hi: "भारत का कौन सा राज्य 'मसालों का बगीचा' कहलाता है?",
  options_en: ["Kerala", "Karnataka", "Goa", "Tamil Nadu"],
  options_hi: ["केरल", "कर्नाटक", "गोवा", "तमिलनाडु"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is 1/4 of 100?",
  question_hi: "100 का 1/4 कितना है?",
  options_en: ["20", "25", "30", "35"],
  options_hi: ["20", "25", "30", "35"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who was the last Mughal emperor?",
  question_hi: "अंतिम मुग़ल सम्राट कौन थे?",
  options_en: ["Bahadur Shah II", "Aurangzeb", "Shah Jahan", "Akbar"],
  options_hi: ["बहादुर शाह द्वितीय", "औरंगज़ेब", "शाहजहाँ", "अकबर"],
  answer_en: "Bahadur Shah II",
  answer_hi: "बहादुर शाह द्वितीय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which instrument measures atmospheric pressure?",
  question_hi: "वायुमंडलीय दबाव मापने का यंत्र कौन सा है?",
  options_en: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनेमोमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which Indian river is considered the holiest?",
  question_hi: "भारत की कौन सी नदी सबसे पवित्र मानी जाती है?",
  options_en: ["Yamuna", "Ganga", "Godavari", "Krishna"],
  options_hi: ["यमुना", "गंगा", "गोदावरी", "कृष्णा"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is 60 ÷ 3?",
  question_hi: "60 ÷ 3 कितना है?",
  options_en: ["18", "20", "22", "24"],
  options_hi: ["18", "20", "22", "24"],
  answer_en: "20",
  answer_hi: "20",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which Indian freedom fighter was also called 'Netaji'?",
  question_hi: "किस भारतीय स्वतंत्रता सेनानी को 'नेताजी' कहा गया?",
  options_en: ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
  options_hi: ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "भगत सिंह"],
  answer_en: "Subhash Chandra Bose",
  answer_hi: "सुभाष चंद्र बोस",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which organ filters blood in the human body?",
  question_hi: "मानव शरीर में कौन सा अंग रक्त को फिल्टर करता है?",
  options_en: ["Kidney", "Liver", "Heart", "Lungs"],
  options_hi: ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which Indian city is called the 'Electronic City of India'?",
  question_hi: "भारत का कौन सा शहर 'इलेक्ट्रॉनिक सिटी' के नाम से जाना जाता है?",
  options_en: ["Bangalore", "Hyderabad", "Pune", "Chennai"],
  options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  answer_en: "Bangalore",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the full form of ATM?",
  question_hi: "ATM का पूरा नाम क्या है?",
  options_en: ["Automatic Teller Machine", "Automated Transfer Machine", "Automatic Transaction Machine", "Automated Teller Method"],
  options_hi: ["ऑटोमैटिक टेलर मशीन", "ऑटोमेटेड ट्रांसफर मशीन", "ऑटोमैटिक ट्रांजेक्शन मशीन", "ऑटोमेटेड टेलर मेथड"],
  answer_en: "Automatic Teller Machine",
  answer_hi: "ऑटोमैटिक टेलर मशीन",
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