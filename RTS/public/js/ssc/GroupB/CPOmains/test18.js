const questions = [
{
  num: 1,
  question_en: "What is 45 + 38?",
  question_hi: "45 + 38 कितना होता है?",
  options_en: ["83", "78", "73", "88"],
  options_hi: ["83", "78", "73", "88"],
  answer_en: "83",
  answer_hi: "83",
  attempted: false,
  selected: ""
},
{
  num: 2,
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
  num: 3,
  question_en: "What is the square root of 121?",
  question_hi: "121 का वर्गमूल क्या है?",
  options_en: ["11", "12", "13", "10"],
  options_hi: ["11", "12", "13", "10"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Edison", "Newton", "Einstein"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "एडिसन", "न्यूटन", "आइंस्टीन"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
  options_en: ["Mercury", "Iron", "Aluminium", "Copper"],
  options_hi: ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},

{
  num: 6,
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
  num: 7,
  question_en: "Which river flows through Delhi?",
  question_hi: "दिल्ली से होकर कौन सी नदी बहती है?",
  options_en: ["Yamuna", "Ganga", "Godavari", "Narmada"],
  options_hi: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"],
  answer_en: "Yamuna",
  answer_hi: "यमुना",
  attempted: false,
  selected: ""
},
{
  num: 8,
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
  num: 9,
  question_en: "Which part of plant makes food?",
  question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
  options_en: ["Leaf", "Root", "Stem", "Flower"],
  options_hi: ["पत्ता", "जड़", "तना", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ता",
  attempted: false,
  selected: ""
},
{
  num: 10,
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
  num: 11,
  question_en: "Which vitamin is obtained from sunlight?",
  question_hi: "सूर्य के प्रकाश से कौन सा विटामिन मिलता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin B", "Vitamin C"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन B", "विटामिन C"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन है?",
  options_en: ["Tiger", "Lion", "Elephant", "Leopard"],
  options_hi: ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the cube root of 64?",
  question_hi: "64 का घनमूल क्या है?",
  options_en: ["4", "6", "8", "3"],
  options_hi: ["4", "6", "8", "3"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which Indian state has no coastline?",
  question_hi: "किस भारतीय राज्य की समुद्र तटरेखा नहीं है?",
  options_en: ["Madhya Pradesh", "Gujarat", "Kerala", "Odisha"],
  options_hi: ["मध्य प्रदेश", "गुजरात", "केरल", "ओडिशा"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which instrument measures atmospheric pressure?",
  question_hi: "वायुमंडलीय दाब मापने का यंत्र कौन सा है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Speedometer"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "स्पीडोमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "What is 18 × 4?",
  question_hi: "18 × 4 कितना होता है?",
  options_en: ["72", "68", "64", "76"],
  options_hi: ["72", "68", "64", "76"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Gandhi", "Patel", "Rajendra Prasad"],
  options_hi: ["जवाहरलाल नेहरू", "गांधी", "पटेल", "राजेंद्र प्रसाद"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which gas is heavier than air?",
  question_hi: "हवा से भारी गैस कौन सी है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Helium"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन", "हीलियम"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का हिमांक क्या है?",
  options_en: ["0°C", "100°C", "10°C", "5°C"],
  options_hi: ["0°C", "100°C", "10°C", "5°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which Indian festival marks the harvest season?",
  question_hi: "कौन सा भारतीय त्योहार फसल से जुड़ा है?",
  options_en: ["Pongal", "Diwali", "Holi", "Raksha Bandhan"],
  options_hi: ["पोंगल", "दीपावली", "होली", "रक्षा बंधन"],
  answer_en: "Pongal",
  answer_hi: "पोंगल",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "What is 7³?",
  question_hi: "7³ कितना होता है?",
  options_en: ["343", "49", "216", "512"],
  options_hi: ["343", "49", "216", "512"],
  answer_en: "343",
  answer_hi: "343",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which organ purifies blood?",
  question_hi: "कौन सा अंग रक्त को शुद्ध करता है?",
  options_en: ["Kidney", "Liver", "Heart", "Lungs"],
  options_hi: ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which Indian city is known as the City of Lakes?",
  question_hi: "झीलों का शहर किसे कहा जाता है?",
  options_en: ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
  options_hi: ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
  answer_en: "Udaipur",
  answer_hi: "उदयपुर",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the value of 3/4 of 80?",
  question_hi: "80 का 3/4 कितना है?",
  options_en: ["60", "50", "40", "70"],
  options_hi: ["60", "50", "40", "70"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which metal is used in thermometers?",
  question_hi: "थर्मामीटर में कौन सी धातु प्रयोग होती है?",
  options_en: ["Mercury", "Iron", "Copper", "Aluminium"],
  options_hi: ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which Indian river is longest?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Godavari", "Narmada"],
  options_hi: ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is 125 ÷ 5?",
  question_hi: "125 ÷ 5 कितना होता है?",
  options_en: ["25", "20", "30", "15"],
  options_hi: ["25", "20", "30", "15"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which part of the body pumps blood?",
  question_hi: "शरीर में रक्त पंप करने वाला अंग कौन सा है?",
  options_en: ["Heart", "Brain", "Kidney", "Liver"],
  options_hi: ["हृदय", "मस्तिष्क", "गुर्दा", "यकृत"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which country is called the Land of Rising Sun?",
  question_hi: "उगते सूरज की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "Thailand", "Korea"],
  options_hi: ["जापान", "चीन", "थाईलैंड", "कोरिया"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the value of 10²?",
  question_hi: "10² कितना होता है?",
  options_en: ["100", "20", "10", "200"],
  options_hi: ["100", "20", "10", "200"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Which gas is used by plants for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण में पौधे कौन सी गैस लेते हैं?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which is the smallest prime number?",
  question_hi: "सबसे छोटी अभाज्य संख्या कौन सी है?",
  options_en: ["2", "1", "3", "5"],
  options_hi: ["2", "1", "3", "5"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which Indian monument is one of the Seven Wonders?",
  question_hi: "सात अजूबों में शामिल भारतीय स्मारक कौन सा है?",
  options_en: ["Taj Mahal", "Qutub Minar", "Red Fort", "Gateway of India"],
  options_hi: ["ताजमहल", "कुतुब मीनार", "लाल किला", "गेटवे ऑफ इंडिया"],
  answer_en: "Taj Mahal",
  answer_hi: "ताजमहल",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 50% of 90?",
  question_hi: "90 का 50% कितना है?",
  options_en: ["45", "40", "50", "35"],
  options_hi: ["45", "40", "50", "35"],
  answer_en: "45",
  answer_hi: "45",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which sense organ is used to see?",
  question_hi: "देखने के लिए कौन सा इंद्रिय अंग प्रयोग होता है?",
  options_en: ["Eyes", "Ears", "Nose", "Tongue"],
  options_hi: ["आंखें", "कान", "नाक", "जीभ"],
  answer_en: "Eyes",
  answer_hi: "आंखें",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which Indian state is known as Spice Garden of India?",
  question_hi: "भारत का मसाला उद्यान किस राज्य को कहा जाता है?",
  options_en: ["Kerala", "Assam", "Tamil Nadu", "Karnataka"],
  options_hi: ["केरल", "असम", "तमिलनाडु", "कर्नाटक"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the value of √144?",
  question_hi: "√144 का मान क्या है?",
  options_en: ["12", "14", "16", "10"],
  options_hi: ["12", "14", "16", "10"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which device is used to measure wind speed?",
  question_hi: "हवा की गति मापने का यंत्र कौन सा है?",
  options_en: ["Anemometer", "Barometer", "Thermometer", "Altimeter"],
  options_hi: ["एनीमोमीटर", "बैरोमीटर", "थर्मामीटर", "अल्टीमीटर"],
  answer_en: "Anemometer",
  answer_hi: "एनीमोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which metal is called red metal?",
  question_hi: "लाल धातु किसे कहा जाता है?",
  options_en: ["Copper", "Iron", "Gold", "Silver"],
  options_hi: ["तांबा", "लोहा", "सोना", "चांदी"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is 19 × 5?",
  question_hi: "19 × 5 कितना होता है?",
  options_en: ["95", "85", "90", "100"],
  options_hi: ["95", "85", "90", "100"],
  answer_en: "95",
  answer_hi: "95",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Which blood group is universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा है?",
  options_en: ["O-", "AB+", "A+", "B+"],
  options_hi: ["O-", "AB+", "A+", "B+"],
  answer_en: "O-",
  answer_hi: "O-",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which continent is called Dark Continent?",
  question_hi: "किस महाद्वीप को अंधकार महाद्वीप कहा जाता है?",
  options_en: ["Africa", "Asia", "Europe", "Australia"],
  options_hi: ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Africa",
  answer_hi: "अफ्रीका",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक क्या है?",
  options_en: ["100°C", "0°C", "50°C", "90°C"],
  options_hi: ["100°C", "0°C", "50°C", "90°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which part of computer is called brain?",
  question_hi: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
  options_en: ["CPU", "Keyboard", "Mouse", "Monitor"],
  options_hi: ["CPU", "कीबोर्ड", "माउस", "मॉनिटर"],
  answer_en: "CPU",
  answer_hi: "CPU",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of 8²?",
  question_hi: "8² कितना होता है?",
  options_en: ["64", "16", "32", "48"],
  options_hi: ["64", "16", "32", "48"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which Indian state is largest by area?",
  question_hi: "क्षेत्रफल के अनुसार सबसे बड़ा राज्य कौन सा है?",
  options_en: ["Rajasthan", "Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
  options_hi: ["राजस्थान", "महाराष्ट्र", "मध्य प्रदेश", "उत्तर प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},
{
  num: 47,
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
  num: 48,
  question_en: "What is the value of 240 ÷ 6?",
  question_hi: "240 ÷ 6 कितना होता है?",
  options_en: ["40", "30", "36", "45"],
  options_hi: ["40", "30", "36", "45"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which organ helps in hearing?",
  question_hi: "सुनने में कौन सा अंग सहायक है?",
  options_en: ["Ear", "Eye", "Nose", "Skin"],
  options_hi: ["कान", "आंख", "नाक", "त्वचा"],
  answer_en: "Ear",
  answer_hi: "कान",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which Indian currency unit is called paisa?",
  question_hi: "भारतीय मुद्रा की छोटी इकाई क्या कहलाती है?",
  options_en: ["Rupee", "Paisa", "Dollar", "Cent"],
  options_hi: ["रुपया", "पैसा", "डॉलर", "सेंट"],
  answer_en: "Paisa",
  answer_hi: "पैसा",
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