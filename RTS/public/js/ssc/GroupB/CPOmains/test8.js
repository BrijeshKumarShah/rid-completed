const questions = [
{
  num: 1,
  question_en: "What is the capital of India?",
  question_hi: "भारत की राजधानी क्या है?",
  options_en: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the chemical symbol for water?",
  question_hi: "पानी का रासायनिक सूत्र क्या है?",
  options_en: ["H2O", "CO2", "NaCl", "O2"],
  options_hi: ["H2O", "CO2", "NaCl", "O2"],
  answer_en: "H2O",
  answer_hi: "H2O",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who is known as the Father of the Nation?",
  question_hi: "राष्ट्रपिता किसे कहा जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "B.R. Ambedkar"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष बोस", "बी.आर. आंबेडकर"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is 25 × 4?",
  question_hi: "25 × 4 कितना है?",
  options_en: ["100", "90", "110", "95"],
  options_hi: ["100", "90", "110", "95"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह किसे कहा जाता है?",
  options_en: ["Mars", "Jupiter", "Venus", "Saturn"],
  options_hi: ["मंगल", "बृहस्पति", "शुक्र", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Subhash Bose"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "सुभाष बोस"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the SI unit of length?",
  question_hi: "लंबाई की SI इकाई क्या है?",
  options_en: ["Meter", "Kilogram", "Second", "Ampere"],
  options_hi: ["मीटर", "किलोग्राम", "सेकंड", "एम्पियर"],
  answer_en: "Meter",
  answer_hi: "मीटर",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which river is the longest in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
  options_hi: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 12 × 8?",
  question_hi: "12 × 8 कितना है?",
  options_en: ["96", "88", "84", "92"],
  options_hi: ["96", "88", "84", "92"],
  answer_en: "96",
  answer_hi: "96",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which gas is essential for breathing?",
  question_hi: "सांस लेने के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Who is the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Dr. Rajendra Prasad", "Zakir Husain", "Radhakrishnan", "V.V. Giri"],
  options_hi: ["डॉ. राजेंद्र प्रसाद", "जाकिर हुसैन", "राधाकृष्णन", "वी.वी. गिरि"],
  answer_en: "Dr. Rajendra Prasad",
  answer_hi: "डॉ. राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर कौन सी धातु तरल होती है?",
  options_en: ["Mercury", "Iron", "Gold", "Silver"],
  options_hi: ["पारा", "लोहा", "सोना", "चांदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल क्या है?",
  options_en: ["12", "14", "10", "16"],
  options_hi: ["12", "14", "10", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which Indian state has the largest population?",
  question_hi: "सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
  options_en: ["Uttar Pradesh", "Bihar", "Maharashtra", "West Bengal"],
  options_hi: ["उत्तर प्रदेश", "बिहार", "महाराष्ट्र", "पश्चिम बंगाल"],
  answer_en: "Uttar Pradesh",
  answer_hi: "उत्तर प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Newton", "Tesla"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "न्यूटन", "टेस्ला"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which planet has rings?",
  question_hi: "किस ग्रह के चारों ओर छल्ले हैं?",
  options_en: ["Saturn", "Mars", "Earth", "Venus"],
  options_hi: ["शनि", "मंगल", "पृथ्वी", "शुक्र"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 17,
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
  num: 18,
  question_en: "Which organ pumps blood?",
  question_hi: "रक्त पंप करने वाला अंग कौन सा है?",
  options_en: ["Heart", "Lungs", "Kidney", "Liver"],
  options_hi: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who is known as the Iron Man of India?",
  question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
  options_en: ["Sardar Patel", "Nehru", "Gandhi", "Ambedkar"],
  options_hi: ["सरदार पटेल", "नेहरू", "गांधी", "आंबेडकर"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक क्या है?",
  options_en: ["100°C", "90°C", "0°C", "50°C"],
  options_hi: ["100°C", "90°C", "0°C", "50°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "Which city is called Pink City?",
  question_hi: "गुलाबी शहर कौन सा है?",
  options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
  options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the chemical symbol of Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Fe", "Cu"],
  options_hi: ["Au", "Ag", "Fe", "Cu"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Modi"],
  options_hi: ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "मोदी"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is 9 × 7?",
  question_hi: "9 × 7 कितना है?",
  options_en: ["63", "56", "72", "64"],
  options_hi: ["63", "56", "72", "64"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which vitamin is Vitamin C?",
  question_hi: "विटामिन C को क्या कहते हैं?",
  options_en: ["Ascorbic Acid", "Citric Acid", "Folic Acid", "Lactic Acid"],
  options_hi: ["एस्कॉर्बिक एसिड", "साइट्रिक एसिड", "फोलिक एसिड", "लैक्टिक एसिड"],
  answer_en: "Ascorbic Acid",
  answer_hi: "एस्कॉर्बिक एसिड",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which is the largest ocean?",
  question_hi: "सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific", "Indian", "Atlantic", "Arctic"],
  options_hi: ["प्रशांत", "हिंद", "अटलांटिक", "आर्कटिक"],
  answer_en: "Pacific",
  answer_hi: "प्रशांत",
  attempted: false,
  selected: ""
},
{
  num: 27,
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
  num: 28,
  question_en: "Which gas is used in balloons?",
  question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
  options_en: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  options_hi: ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is 50% of 80?",
  question_hi: "80 का 50% कितना है?",
  options_en: ["40", "30", "50", "60"],
  options_hi: ["40", "30", "50", "60"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who is known as Missile Man of India?",
  question_hi: "भारत के मिसाइल मैन कौन हैं?",
  options_en: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
  options_hi: ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"],
  answer_en: "A.P.J. Abdul Kalam",
  answer_hi: "ए.पी.जे. अब्दुल कलाम",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Which is the smallest planet?",
  question_hi: "सबसे छोटा ग्रह कौन सा है?",
  options_en: ["Mercury", "Mars", "Venus", "Earth"],
  options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the full form of RBI?",
  question_hi: "RBI का पूरा नाम क्या है?",
  options_en: ["Reserve Bank of India", "Regional Bank of India", "Royal Bank", "Rural Bank"],
  options_hi: ["भारतीय रिज़र्व बैंक", "क्षेत्रीय बैंक", "रॉयल बैंक", "ग्रामीण बैंक"],
  answer_en: "Reserve Bank of India",
  answer_hi: "भारतीय रिज़र्व बैंक",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which country is called Land of Rising Sun?",
  question_hi: "उगते सूरज की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "India", "Korea"],
  options_hi: ["जापान", "चीन", "भारत", "कोरिया"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 11 × 11?",
  question_hi: "11 × 11 कितना है?",
  options_en: ["121", "111", "131", "110"],
  options_hi: ["121", "111", "131", "110"],
  answer_en: "121",
  answer_hi: "121",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which organ filters blood?",
  question_hi: "कौन सा अंग रक्त को छानता है?",
  options_en: ["Kidney", "Heart", "Lungs", "Liver"],
  options_hi: ["गुर्दा", "हृदय", "फेफड़े", "यकृत"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which festival is known as Festival of Lights?",
  question_hi: "रोशनी का त्योहार किसे कहा जाता है?",
  options_en: ["Diwali", "Holi", "Eid", "Christmas"],
  options_hi: ["दीवाली", "होली", "ईद", "क्रिसमस"],
  answer_en: "Diwali",
  answer_hi: "दीवाली",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
  options_en: ["Tiger", "Lion", "Elephant", "Leopard"],
  options_hi: ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which gas is essential for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के लिए आवश्यक गैस कौन सी है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is 7²?",
  question_hi: "7 का वर्ग कितना है?",
  options_en: ["49", "42", "56", "36"],
  options_hi: ["49", "42", "56", "36"],
  answer_en: "49",
  answer_hi: "49",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which state is called Land of Five Rivers?",
  question_hi: "पाँच नदियों की भूमि किस राज्य को कहा जाता है?",
  options_en: ["Punjab", "Haryana", "Bihar", "Assam"],
  options_hi: ["पंजाब", "हरियाणा", "बिहार", "असम"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "What is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Eagle", "Parrot", "Sparrow"],
  options_hi: ["मोर", "गरुड़", "तोता", "गौरैया"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का हिमांक क्या है?",
  options_en: ["0°C", "100°C", "50°C", "10°C"],
  options_hi: ["0°C", "100°C", "50°C", "10°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which instrument measures pressure?",
  question_hi: "दाब मापने का यंत्र कौन सा है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is 18 ÷ 3?",
  question_hi: "18 ÷ 3 कितना है?",
  options_en: ["6", "9", "5", "7"],
  options_hi: ["6", "9", "5", "7"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which continent is largest?",
  question_hi: "सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "Australia"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which blood group is universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा रक्त समूह है?",
  options_en: ["O-", "AB+", "A+", "B+"],
  options_hi: ["O-", "AB+", "A+", "B+"],
  answer_en: "O-",
  answer_hi: "O-",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the full form of CPU?",
  question_hi: "CPU का पूरा नाम क्या है?",
  options_en: ["Central Processing Unit", "Computer Power Unit", "Control Program Unit", "Central Program Unit"],
  options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट", "कंट्रोल प्रोग्राम यूनिट", "सेंट्रल प्रोग्राम यूनिट"],
  answer_en: "Central Processing Unit",
  answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which city is Financial Capital of India?",
  question_hi: "भारत की वित्तीय राजधानी कौन सी है?",
  options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
  options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
  answer_en: "Mumbai",
  answer_hi: "मुंबई",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is 10% of 500?",
  question_hi: "500 का 10% कितना है?",
  options_en: ["50", "40", "60", "45"],
  options_hi: ["50", "40", "60", "45"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which day is celebrated as Independence Day in India?",
  question_hi: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
  options_en: ["15 August", "26 January", "2 October", "14 November"],
  options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 नवंबर"],
  answer_en: "15 August",
  answer_hi: "15 अगस्त",
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