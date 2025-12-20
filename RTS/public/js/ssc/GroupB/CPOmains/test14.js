const questions = [
  {
  num: 1,
  question_en: "What is 32 + 18?",
  question_hi: "32 + 18 कितना होता है?",
  options_en: ["50", "45", "55", "48"],
  options_hi: ["50", "45", "55", "48"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह किसे कहा जाता है?",
  options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
  options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the square root of 81?",
  question_hi: "81 का वर्गमूल क्या है?",
  options_en: ["9", "8", "7", "6"],
  options_hi: ["9", "8", "7", "6"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who wrote the National Song of India?",
  question_hi: "भारत का राष्ट्रगीत किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Tulsidas", "Premchand"],
  options_hi: ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "तुलसीदास", "प्रेमचंद"],
  answer_en: "Bankim Chandra Chatterjee",
  answer_hi: "बंकिम चंद्र चटर्जी",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which gas is most abundant in the atmosphere?",
  question_hi: "वायुमंडल में सबसे अधिक पाई जाने वाली गैस कौन सी है?",
  options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is 15 × 6?",
  question_hi: "15 × 6 कितना होता है?",
  options_en: ["90", "80", "85", "95"],
  options_hi: ["90", "80", "85", "95"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which river flows through Egypt?",
  question_hi: "मिस्र से होकर कौन सी नदी बहती है?",
  options_en: ["Nile", "Amazon", "Yangtze", "Tigris"],
  options_hi: ["नील", "अमेज़न", "यांग्त्से", "टाइग्रिस"],
  answer_en: "Nile",
  answer_hi: "नील",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is the cube of 3?",
  question_hi: "3 का घन कितना है?",
  options_en: ["27", "9", "18", "21"],
  options_hi: ["27", "9", "18", "21"],
  answer_en: "27",
  answer_hi: "27",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which part of the plant prepares food?",
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
  question_en: "What is the SI unit of time?",
  question_hi: "समय की SI इकाई क्या है?",
  options_en: ["Second", "Minute", "Hour", "Day"],
  options_hi: ["सेकंड", "मिनट", "घंटा", "दिन"],
  answer_en: "Second",
  answer_hi: "सेकंड",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "What is 20% of 200?",
  question_hi: "200 का 20% कितना है?",
  options_en: ["40", "30", "50", "60"],
  options_hi: ["40", "30", "50", "60"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 12,
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
  num: 13,
  question_en: "Who was the first Indian woman to go to space?",
  question_hi: "अंतरिक्ष जाने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Kalpana Chawla", "Sunita Williams", "Indira Gandhi", "Kiran Bedi"],
  options_hi: ["कल्पना चावला", "सुनीता विलियम्स", "इंदिरा गांधी", "किरण बेदी"],
  answer_en: "Kalpana Chawla",
  answer_hi: "कल्पना चावला",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which metal is used to make electric wires?",
  question_hi: "बिजली के तार बनाने में कौन सी धातु प्रयोग होती है?",
  options_en: ["Copper", "Iron", "Gold", "Silver"],
  options_hi: ["तांबा", "लोहा", "सोना", "चांदी"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is 7 × 9?",
  question_hi: "7 × 9 कितना होता है?",
  options_en: ["63", "56", "72", "69"],
  options_hi: ["63", "56", "72", "69"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which vitamin helps in blood clotting?",
  question_hi: "रक्त के थक्के जमाने में कौन सा विटामिन सहायक है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is 144 ÷ 9?",
  question_hi: "144 ÷ 9 कितना होता है?",
  options_en: ["16", "18", "14", "12"],
  options_hi: ["16", "18", "14", "12"],
  answer_en: "16",
  answer_hi: "16",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which country is called the Land of Rising Sun?",
  question_hi: "उगते सूरज की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "Korea", "Thailand"],
  options_hi: ["जापान", "चीन", "कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which part of the human brain controls balance?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
  options_en: ["Cerebellum", "Cerebrum", "Medulla", "Spinal Cord"],
  options_hi: ["सेरिबेलम", "सेरिब्रम", "मेडुला", "रीढ़ की हड्डी"],
  answer_en: "Cerebellum",
  answer_hi: "सेरिबेलम",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the square of 15?",
  question_hi: "15 का वर्ग कितना है?",
  options_en: ["225", "215", "235", "250"],
  options_hi: ["225", "215", "235", "250"],
  answer_en: "225",
  answer_hi: "225",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Jawaharlal Nehru", "Rajiv Gandhi"],
  options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "राजीव गांधी"],
  answer_en: "Dr. Rajendra Prasad",
  answer_hi: "डॉ. राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which gas is released during respiration?",
  question_hi: "श्वसन के दौरान कौन सी गैस निकलती है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is 35% of 200?",
  question_hi: "200 का 35% कितना है?",
  options_en: ["70", "60", "75", "80"],
  options_hi: ["70", "60", "75", "80"],
  answer_en: "70",
  answer_hi: "70",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which organ produces insulin?",
  question_hi: "इंसुलिन का उत्पादन कौन सा अंग करता है?",
  options_en: ["Pancreas", "Liver", "Kidney", "Stomach"],
  options_hi: ["अग्न्याशय", "यकृत", "गुर्दा", "आमाशय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which is the longest bone in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
  options_en: ["Femur", "Humerus", "Tibia", "Radius"],
  options_hi: ["फीमर", "ह्यूमरस", "टिबिया", "रेडियस"],
  answer_en: "Femur",
  answer_hi: "फीमर",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is the capital of Uttarakhand?",
  question_hi: "उत्तराखंड की राजधानी क्या है?",
  options_en: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
  options_hi: ["देहरादून", "हरिद्वार", "नैनीताल", "ऋषिकेश"],
  answer_en: "Dehradun",
  answer_hi: "देहरादून",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is 11 × 11?",
  question_hi: "11 × 11 कितना होता है?",
  options_en: ["121", "111", "110", "131"],
  options_hi: ["121", "111", "110", "131"],
  answer_en: "121",
  answer_hi: "121",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which acid is present in lemon?",
  question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
  options_en: ["Citric Acid", "Lactic Acid", "Acetic Acid", "Sulphuric Acid"],
  options_hi: ["साइट्रिक अम्ल", "लैक्टिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल"],
  answer_en: "Citric Acid",
  answer_hi: "साइट्रिक अम्ल",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who is known as the Iron Man of India?",
  question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
  options_en: ["Sardar Patel", "Subhash Bose", "Bhagat Singh", "Nehru"],
  options_hi: ["सरदार पटेल", "सुभाष बोस", "भगत सिंह", "नेहरू"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the SI unit of electric current?",
  question_hi: "विद्युत धारा की SI इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Watt"],
  options_hi: ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पीयर",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is 250 − 175?",
  question_hi: "250 − 175 कितना होता है?",
  options_en: ["75", "85", "65", "70"],
  options_hi: ["75", "85", "65", "70"],
  answer_en: "75",
  answer_hi: "75",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which desert is the largest in the world?",
  question_hi: "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
  options_en: ["Sahara", "Gobi", "Thar", "Kalahari"],
  options_hi: ["सहारा", "गोबी", "थार", "कालाहारी"],
  answer_en: "Sahara",
  answer_hi: "सहारा",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood group is universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा रक्त समूह है?",
  options_en: ["O Negative", "O Positive", "AB Positive", "A Negative"],
  options_hi: ["O नेगेटिव", "O पॉजिटिव", "AB पॉजिटिव", "A नेगेटिव"],
  answer_en: "O Negative",
  answer_hi: "O नेगेटिव",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का हिमांक क्या है?",
  options_en: ["0°C", "10°C", "5°C", "100°C"],
  options_hi: ["0°C", "10°C", "5°C", "100°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Edison", "Newton", "Tesla"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "एडिसन", "न्यूटन", "टेस्ला"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is 3³ + 2²?",
  question_hi: "3³ + 2² कितना होता है?",
  options_en: ["31", "29", "27", "25"],
  options_hi: ["31", "29", "27", "25"],
  answer_en: "31",
  answer_hi: "31",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which organ is responsible for pumping blood?",
  question_hi: "रक्त पंप करने के लिए कौन सा अंग जिम्मेदार है?",
  options_en: ["Heart", "Lungs", "Kidney", "Brain"],
  options_hi: ["हृदय", "फेफड़े", "गुर्दा", "मस्तिष्क"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Eagle", "Sparrow", "Parrot"],
  options_hi: ["मोर", "गरुड़", "गौरैया", "तोता"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is 64 ÷ 8?",
  question_hi: "64 ÷ 8 कितना होता है?",
  options_en: ["8", "6", "7", "9"],
  options_hi: ["8", "6", "7", "9"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
  options_en: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
  options_hi: ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "महाराष्ट्र"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the value of √196?",
  question_hi: "√196 का मान क्या है?",
  options_en: ["14", "12", "16", "18"],
  options_hi: ["14", "12", "16", "18"],
  answer_en: "14",
  answer_hi: "14",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which gas is used in refrigerators?",
  question_hi: "रेफ्रिजरेटर में कौन सी गैस प्रयोग होती है?",
  options_en: ["Freon", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["फ्रिऑन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Freon",
  answer_hi: "फ्रिऑन",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who was the first Indian to win a Nobel Prize?",
  question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
  options_en: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
  options_hi: ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is 20²?",
  question_hi: "20² कितना होता है?",
  options_en: ["400", "200", "800", "600"],
  options_hi: ["400", "200", "800", "600"],
  answer_en: "400",
  answer_hi: "400",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which continent is known as the Dark Continent?",
  question_hi: "डार्क कॉन्टिनेंट किस महाद्वीप को कहा जाता है?",
  options_en: ["Africa", "Asia", "Europe", "Australia"],
  options_hi: ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Africa",
  answer_hi: "अफ्रीका",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which organ helps in detoxification?",
  question_hi: "विषहरण (डिटॉक्सिफिकेशन) में कौन सा अंग सहायक है?",
  options_en: ["Liver", "Kidney", "Heart", "Lungs"],
  options_hi: ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the value of 7³?",
  question_hi: "7³ कितना होता है?",
  options_en: ["343", "49", "147", "512"],
  options_hi: ["343", "49", "147", "512"],
  answer_en: "343",
  answer_hi: "343",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which festival is known as the Festival of Lights?",
  question_hi: "प्रकाश का पर्व किसे कहा जाता है?",
  options_en: ["Diwali", "Holi", "Eid", "Christmas"],
  options_hi: ["दीपावली", "होली", "ईद", "क्रिसमस"],
  answer_en: "Diwali",
  answer_hi: "दीपावली",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the SI unit of power?",
  question_hi: "शक्ति की SI इकाई क्या है?",
  options_en: ["Watt", "Joule", "Volt", "Ampere"],
  options_hi: ["वाट", "जूल", "वोल्ट", "एम्पीयर"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is 500 ÷ 25?",
  question_hi: "500 ÷ 25 कितना होता है?",
  options_en: ["20", "25", "30", "15"],
  options_hi: ["20", "25", "30", "15"],
  answer_en: "20",
  answer_hi: "20",
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