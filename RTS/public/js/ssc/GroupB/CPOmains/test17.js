const questions = [
 {
  num: 1,
  question_en: "What is 45 + 38?",
  question_hi: "45 + 38 कितना होता है?",
  options_en: ["83", "78", "82", "85"],
  options_hi: ["83", "78", "82", "85"],
  answer_en: "83",
  answer_hi: "83",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which vitamin is obtained from sunlight?",
  question_hi: "सूर्य प्रकाश से कौन सा विटामिन प्राप्त होता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the capital of Madhya Pradesh?",
  question_hi: "मध्य प्रदेश की राजधानी क्या है?",
  options_en: ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  options_hi: ["भोपाल", "इंदौर", "ग्वालियर", "जबलपुर"],
  answer_en: "Bhopal",
  answer_hi: "भोपाल",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is 12 × 11?",
  question_hi: "12 × 11 कितना होता है?",
  options_en: ["132", "121", "144", "120"],
  options_hi: ["132", "121", "144", "120"],
  answer_en: "132",
  answer_hi: "132",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which part of the plant makes food?",
  question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
  options_en: ["Leaf", "Root", "Stem", "Flower"],
  options_hi: ["पत्ती", "जड़", "तना", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},

{
  num: 6,
  question_en: "What is the square root of 169?",
  question_hi: "169 का वर्गमूल क्या है?",
  options_en: ["13", "12", "14", "15"],
  options_hi: ["13", "12", "14", "15"],
  answer_en: "13",
  answer_hi: "13",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri", "Indira Gandhi"],
  options_hi: ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "इंदिरा गांधी"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
  options_en: ["Mercury", "Iron", "Copper", "Aluminium"],
  options_hi: ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 25% of 400?",
  question_hi: "400 का 25% कितना है?",
  options_en: ["100", "80", "120", "90"],
  options_hi: ["100", "80", "120", "90"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the longest river in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
  options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "What is the SI unit of power?",
  question_hi: "शक्ति की SI इकाई क्या है?",
  options_en: ["Watt", "Joule", "Newton", "Ampere"],
  options_hi: ["वाट", "जूल", "न्यूटन", "एम्पियर"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which organ purifies blood?",
  question_hi: "कौन सा अंग रक्त को शुद्ध करता है?",
  options_en: ["Kidney", "Heart", "Liver", "Lungs"],
  options_hi: ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is 560 ÷ 7?",
  question_hi: "560 ÷ 7 कितना होता है?",
  options_en: ["80", "70", "75", "90"],
  options_hi: ["80", "70", "75", "90"],
  answer_en: "80",
  answer_hi: "80",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which river flows through Delhi?",
  question_hi: "दिल्ली से कौन सी नदी बहती है?",
  options_en: ["Yamuna", "Ganga", "Ghaghara", "Chambal"],
  options_hi: ["यमुना", "गंगा", "घाघरा", "चंबल"],
  answer_en: "Yamuna",
  answer_hi: "यमुना",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the cube root of 64?",
  question_hi: "64 का घनमूल क्या है?",
  options_en: ["4", "8", "6", "2"],
  options_hi: ["4", "8", "6", "2"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which gas is used for artificial ripening of fruits?",
  question_hi: "फलों को कृत्रिम रूप से पकाने में कौन सी गैस उपयोग होती है?",
  options_en: ["Ethylene", "Oxygen", "Carbon Dioxide", "Nitrogen"],
  options_hi: ["एथिलीन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
  answer_en: "Ethylene",
  answer_hi: "एथिलीन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who is the author of Ramayana?",
  question_hi: "रामायण के लेखक कौन हैं?",
  options_en: ["Valmiki", "Tulsidas", "Kalidas", "Ved Vyasa"],
  options_hi: ["वाल्मीकि", "तुलसीदास", "कालिदास", "वेदव्यास"],
  answer_en: "Valmiki",
  answer_hi: "वाल्मीकि",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is 18 × 4?",
  question_hi: "18 × 4 कितना होता है?",
  options_en: ["72", "64", "68", "76"],
  options_hi: ["72", "64", "68", "76"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which mineral is required for strong bones?",
  question_hi: "मजबूत हड्डियों के लिए कौन सा खनिज आवश्यक है?",
  options_en: ["Calcium", "Iron", "Sodium", "Potassium"],
  options_hi: ["कैल्शियम", "आयरन", "सोडियम", "पोटैशियम"],
  answer_en: "Calcium",
  answer_hi: "कैल्शियम",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which state is the largest by area in India?",
  question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
  options_en: ["Rajasthan", "Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
  options_hi: ["राजस्थान", "महाराष्ट्र", "मध्य प्रदेश", "उत्तर प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},

{
  num: 21,
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
  num: 22,
  question_en: "What is 150 − 68?",
  question_hi: "150 − 68 कितना होता है?",
  options_en: ["82", "78", "88", "92"],
  options_hi: ["82", "78", "88", "92"],
  answer_en: "82",
  answer_hi: "82",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which organ stores bile?",
  question_hi: "पित्त को कौन सा अंग संग्रह करता है?",
  options_en: ["Gall bladder", "Liver", "Pancreas", "Stomach"],
  options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
  answer_en: "Gall bladder",
  answer_hi: "पित्ताशय",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which metal is used in making electric wires?",
  question_hi: "बिजली के तार बनाने में कौन सी धातु उपयोग होती है?",
  options_en: ["Copper", "Iron", "Silver", "Lead"],
  options_hi: ["तांबा", "लोहा", "चांदी", "सीसा"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is 9² + 7?",
  question_hi: "9² + 7 कितना होता है?",
  options_en: ["88", "81", "90", "79"],
  options_hi: ["88", "81", "90", "79"],
  answer_en: "88",
  answer_hi: "88",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is √196?",
  question_hi: "√196 का मान क्या है?",
  options_en: ["14", "13", "15", "16"],
  options_hi: ["14", "13", "15", "16"],
  answer_en: "14",
  answer_hi: "14",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which Indian state is famous for tea gardens?",
  question_hi: "कौन सा भारतीय राज्य चाय बागानों के लिए प्रसिद्ध है?",
  options_en: ["Assam", "Kerala", "Odisha", "Bihar"],
  options_hi: ["असम", "केरल", "ओडिशा", "बिहार"],
  answer_en: "Assam",
  answer_hi: "असम",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is 30% of 200?",
  question_hi: "200 का 30% कितना है?",
  options_en: ["60", "50", "70", "80"],
  options_hi: ["60", "50", "70", "80"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which gas is essential for respiration?",
  question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Monoxide"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "कार्बन मोनोऑक्साइड"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Who was known as Iron Man of India?",
  question_hi: "भारत के लौह पुरुष किसे कहा जाता है?",
  options_en: ["Sardar Patel", "Subhash Bose", "Bhagat Singh", "Rajendra Prasad"],
  options_hi: ["सरदार पटेल", "सुभाष बोस", "भगत सिंह", "राजेंद्र प्रसाद"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is 72 ÷ 8?",
  question_hi: "72 ÷ 8 कितना होता है?",
  options_en: ["9", "8", "7", "6"],
  options_hi: ["9", "8", "7", "6"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood group is universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा है?",
  options_en: ["O−", "AB+", "A+", "B+"],
  options_hi: ["O−", "AB+", "A+", "B+"],
  answer_en: "O−",
  answer_hi: "O−",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which festival is known as the Festival of Lights?",
  question_hi: "प्रकाश का पर्व किसे कहा जाता है?",
  options_en: ["Diwali", "Holi", "Navratri", "Raksha Bandhan"],
  options_hi: ["दीपावली", "होली", "नवरात्रि", "रक्षा बंधन"],
  answer_en: "Diwali",
  answer_hi: "दीपावली",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the SI unit of pressure?",
  question_hi: "दाब की SI इकाई क्या है?",
  options_en: ["Pascal", "Newton", "Joule", "Watt"],
  options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
  answer_en: "Pascal",
  answer_hi: "पास्कल",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which planet is known as Earth's twin?",
  question_hi: "पृथ्वी का जुड़वां ग्रह किसे कहा जाता है?",
  options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is 15% of 300?",
  question_hi: "300 का 15% कितना है?",
  options_en: ["45", "40", "50", "35"],
  options_hi: ["45", "40", "50", "35"],
  answer_en: "45",
  answer_hi: "45",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which is the largest desert in the world?",
  question_hi: "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
  options_en: ["Sahara", "Gobi", "Thar", "Kalahari"],
  options_hi: ["सहारा", "गोबी", "थार", "कालाहारी"],
  answer_en: "Sahara",
  answer_hi: "सहारा",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which instrument measures atmospheric pressure?",
  question_hi: "वायुमंडलीय दाब मापने वाला यंत्र कौन सा है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is 8³?",
  question_hi: "8³ कितना होता है?",
  options_en: ["512", "256", "216", "128"],
  options_hi: ["512", "256", "216", "128"],
  answer_en: "512",
  answer_hi: "512",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Which Indian state has highest population?",
  question_hi: "भारत में सर्वाधिक जनसंख्या वाला राज्य कौन सा है?",
  options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
  answer_en: "Uttar Pradesh",
  answer_hi: "उत्तर प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is 96 ÷ 6?",
  question_hi: "96 ÷ 6 कितना होता है?",
  options_en: ["16", "14", "18", "12"],
  options_hi: ["16", "14", "18", "12"],
  answer_en: "16",
  answer_hi: "16",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ produces insulin?",
  question_hi: "इंसुलिन किस अंग द्वारा बनाया जाता है?",
  options_en: ["Pancreas", "Liver", "Kidney", "Stomach"],
  options_hi: ["अग्न्याशय", "यकृत", "गुर्दा", "आमाशय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which day is celebrated as Independence Day of India?",
  question_hi: "भारत का स्वतंत्रता दिवस कब मनाया जाता है?",
  options_en: ["15 August", "26 January", "2 October", "1 May"],
  options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "1 मई"],
  answer_en: "15 August",
  answer_hi: "15 अगस्त",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of 10² − 25?",
  question_hi: "10² − 25 कितना होता है?",
  options_en: ["75", "85", "65", "95"],
  options_hi: ["75", "85", "65", "95"],
  answer_en: "75",
  answer_hi: "75",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which vitamin helps in wound healing?",
  question_hi: "घाव भरने में कौन सा विटामिन सहायक है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 6 × 9 − 6?",
  question_hi: "6 × 9 − 6 कितना होता है?",
  options_en: ["48", "54", "42", "36"],
  options_hi: ["48", "54", "42", "36"],
  answer_en: "48",
  answer_hi: "48",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which city is known as the City of Lakes?",
  question_hi: "झीलों का शहर किसे कहा जाता है?",
  options_en: ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
  options_hi: ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
  answer_en: "Udaipur",
  answer_hi: "उदयपुर",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which instrument measures wind speed?",
  question_hi: "हवा की गति मापने वाला यंत्र कौन सा है?",
  options_en: ["Anemometer", "Barometer", "Thermometer", "Hygrometer"],
  options_hi: ["एनीमोमीटर", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
  answer_en: "Anemometer",
  answer_hi: "एनीमोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
  options_en: ["Tiger", "Lion", "Elephant", "Leopard"],
  options_hi: ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
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