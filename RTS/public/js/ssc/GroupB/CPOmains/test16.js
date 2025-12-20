const questions = [
{
  num: 1,
  question_en: "What is 28 + 47?",
  question_hi: "28 + 47 कितना होता है?",
  options_en: ["75", "72", "70", "78"],
  options_hi: ["75", "72", "70", "78"],
  answer_en: "75",
  answer_hi: "75",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which gas is called life gas?",
  question_hi: "जीवन गैस किसे कहा जाता है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the capital of Rajasthan?",
  question_hi: "राजस्थान की राजधानी क्या है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is 9 × 7?",
  question_hi: "9 × 7 कितना होता है?",
  options_en: ["63", "56", "72", "69"],
  options_hi: ["63", "56", "72", "69"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which animal is known as the Ship of the Desert?",
  question_hi: "रेगिस्तान का जहाज किसे कहा जाता है?",
  options_en: ["Camel", "Horse", "Elephant", "Donkey"],
  options_hi: ["ऊँट", "घोड़ा", "हाथी", "गधा"],
  answer_en: "Camel",
  answer_hi: "ऊँट",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the square of 16?",
  question_hi: "16 का वर्ग कितना है?",
  options_en: ["256", "196", "144", "225"],
  options_hi: ["256", "196", "144", "225"],
  answer_en: "256",
  answer_hi: "256",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who is known as the Father of the Nation in India?",
  question_hi: "भारत में राष्ट्रपिता किसे कहा जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "Sardar Patel"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष बोस", "सरदार पटेल"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which metal is used to make coins?",
  question_hi: "सिक्के बनाने में कौन सी धातु प्रयोग होती है?",
  options_en: ["Copper", "Mercury", "Sodium", "Zinc"],
  options_hi: ["तांबा", "पारा", "सोडियम", "जिंक"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 60% of 150?",
  question_hi: "150 का 60% कितना है?",
  options_en: ["90", "80", "70", "100"],
  options_hi: ["90", "80", "70", "100"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the smallest continent?",
  question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Australia", "Europe", "Antarctica", "South America"],
  options_hi: ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "What is the SI unit of mass?",
  question_hi: "द्रव्यमान की SI इकाई क्या है?",
  options_en: ["Kilogram", "Gram", "Pound", "Tonne"],
  options_hi: ["किलोग्राम", "ग्राम", "पाउंड", "टन"],
  answer_en: "Kilogram",
  answer_hi: "किलोग्राम",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which organ helps in breathing?",
  question_hi: "सांस लेने में कौन सा अंग सहायता करता है?",
  options_en: ["Lungs", "Heart", "Kidney", "Brain"],
  options_hi: ["फेफड़े", "हृदय", "गुर्दा", "मस्तिष्क"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is 1000 ÷ 20?",
  question_hi: "1000 ÷ 20 कितना होता है?",
  options_en: ["50", "40", "60", "45"],
  options_hi: ["50", "40", "60", "45"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which river is called the Ganga of the South?",
  question_hi: "दक्षिण की गंगा किस नदी को कहा जाता है?",
  options_en: ["Godavari", "Krishna", "Kaveri", "Narmada"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the cube of 5?",
  question_hi: "5 का घन कितना है?",
  options_en: ["125", "25", "75", "100"],
  options_hi: ["125", "25", "75", "100"],
  answer_en: "125",
  answer_hi: "125",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which gas is filled in LPG?",
  question_hi: "LPG में कौन सी गैस भरी होती है?",
  options_en: ["Propane & Butane", "Oxygen", "Hydrogen", "Nitrogen"],
  options_hi: ["प्रोपेन व ब्यूटेन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
  answer_en: "Propane & Butane",
  answer_hi: "प्रोपेन व ब्यूटेन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra", "Premchand", "Sarojini Naidu"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "प्रेमचंद", "सरोजिनी नायडू"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is 13 × 6?",
  question_hi: "13 × 6 कितना होता है?",
  options_en: ["78", "72", "84", "90"],
  options_hi: ["78", "72", "84", "90"],
  answer_en: "78",
  answer_hi: "78",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which vitamin is good for eyes?",
  question_hi: "आँखों के लिए कौन सा विटामिन अच्छा है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which state is called the Land of Five Rivers?",
  question_hi: "पाँच नदियों की भूमि किस राज्य को कहा जाता है?",
  options_en: ["Punjab", "Haryana", "Bihar", "Uttar Pradesh"],
  options_hi: ["पंजाब", "हरियाणा", "बिहार", "उत्तर प्रदेश"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "What is the SI unit of temperature?",
  question_hi: "तापमान की SI इकाई क्या है?",
  options_en: ["Kelvin", "Celsius", "Fahrenheit", "Joule"],
  options_hi: ["केल्विन", "सेल्सियस", "फारेनहाइट", "जूल"],
  answer_en: "Kelvin",
  answer_hi: "केल्विन",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is 90 − 37?",
  question_hi: "90 − 37 कितना होता है?",
  options_en: ["53", "57", "47", "63"],
  options_hi: ["53", "57", "47", "63"],
  answer_en: "53",
  answer_hi: "53",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which organ controls the body?",
  question_hi: "शरीर को नियंत्रित करने वाला अंग कौन सा है?",
  options_en: ["Brain", "Heart", "Liver", "Kidney"],
  options_hi: ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
  answer_en: "Brain",
  answer_hi: "मस्तिष्क",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which metal is the best conductor of electricity?",
  question_hi: "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
  options_en: ["Silver", "Copper", "Iron", "Gold"],
  options_hi: ["चांदी", "तांबा", "लोहा", "सोना"],
  answer_en: "Silver",
  answer_hi: "चांदी",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is 14 × 5?",
  question_hi: "14 × 5 कितना होता है?",
  options_en: ["70", "75", "65", "80"],
  options_hi: ["70", "75", "65", "80"],
  answer_en: "70",
  answer_hi: "70",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which planet has rings around it?",
  question_hi: "किस ग्रह के चारों ओर छल्ले हैं?",
  options_en: ["Saturn", "Jupiter", "Mars", "Earth"],
  options_hi: ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the value of √225?",
  question_hi: "√225 का मान क्या है?",
  options_en: ["15", "14", "16", "13"],
  options_hi: ["15", "14", "16", "13"],
  answer_en: "15",
  answer_hi: "15",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which Indian city is known as Silicon Valley?",
  question_hi: "भारत का सिलिकॉन वैली किसे कहा जाता है?",
  options_en: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is 5² + 4²?",
  question_hi: "5² + 4² कितना होता है?",
  options_en: ["41", "45", "39", "49"],
  options_hi: ["41", "45", "39", "49"],
  answer_en: "41",
  answer_hi: "41",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "अग्निशामक यंत्र में कौन सी गैस प्रयोग होती है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},

{
  num: 31,
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
  num: 32,
  question_en: "What is 81 ÷ 9?",
  question_hi: "81 ÷ 9 कितना होता है?",
  options_en: ["9", "8", "7", "6"],
  options_hi: ["9", "8", "7", "6"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood group is universal receiver?",
  question_hi: "सार्वभौमिक रक्तग्राही कौन सा है?",
  options_en: ["AB+", "O-", "O+", "A+"],
  options_hi: ["AB+", "O-", "O+", "A+"],
  answer_en: "AB+",
  answer_hi: "AB+",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which festival is called the festival of colours?",
  question_hi: "रंगों का त्योहार किसे कहा जाता है?",
  options_en: ["Holi", "Diwali", "Eid", "Christmas"],
  options_hi: ["होली", "दीपावली", "ईद", "क्रिसमस"],
  answer_en: "Holi",
  answer_hi: "होली",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the SI unit of work?",
  question_hi: "कार्य की SI इकाई क्या है?",
  options_en: ["Joule", "Watt", "Newton", "Pascal"],
  options_hi: ["जूल", "वाट", "न्यूटन", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},

{
  num: 36,
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
  num: 37,
  question_en: "What is 20% of 250?",
  question_hi: "250 का 20% कितना है?",
  options_en: ["50", "45", "60", "40"],
  options_hi: ["50", "45", "60", "40"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which is the largest ocean?",
  question_hi: "सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific", "Atlantic", "Indian", "Arctic"],
  options_hi: ["प्रशांत", "अटलांटिक", "हिंद", "आर्कटिक"],
  answer_en: "Pacific",
  answer_hi: "प्रशांत",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which device is used to measure electricity consumption?",
  question_hi: "बिजली की खपत मापने वाला यंत्र कौन सा है?",
  options_en: ["Electric Meter", "Voltmeter", "Ammeter", "Galvanometer"],
  options_hi: ["इलेक्ट्रिक मीटर", "वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर"],
  answer_en: "Electric Meter",
  answer_hi: "इलेक्ट्रिक मीटर",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the value of 6³?",
  question_hi: "6³ कितना होता है?",
  options_en: ["216", "36", "96", "186"],
  options_hi: ["216", "36", "96", "186"],
  answer_en: "216",
  answer_hi: "216",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
  options_en: ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
  options_hi: ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is 144 ÷ 12?",
  question_hi: "144 ÷ 12 कितना होता है?",
  options_en: ["12", "14", "10", "16"],
  options_hi: ["12", "14", "10", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ helps in digestion?",
  question_hi: "पाचन में सहायता करने वाला अंग कौन सा है?",
  options_en: ["Stomach", "Heart", "Lungs", "Brain"],
  options_hi: ["आमाशय", "हृदय", "फेफड़े", "मस्तिष्क"],
  answer_en: "Stomach",
  answer_hi: "आमाशय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which day is celebrated as World Environment Day?",
  question_hi: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
  options_en: ["5 June", "15 August", "22 April", "1 May"],
  options_hi: ["5 जून", "15 अगस्त", "22 अप्रैल", "1 मई"],
  answer_en: "5 June",
  answer_hi: "5 जून",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of π (approx)?",
  question_hi: "π का लगभग मान क्या है?",
  options_en: ["3.14", "3.41", "3.04", "3.24"],
  options_hi: ["3.14", "3.41", "3.04", "3.24"],
  answer_en: "3.14",
  answer_hi: "3.14",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which vitamin helps in clotting of blood?",
  question_hi: "रक्त के थक्के जमाने में कौन सा विटामिन सहायक है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 7 × 8 + 4?",
  question_hi: "7 × 8 + 4 कितना होता है?",
  options_en: ["60", "56", "64", "68"],
  options_hi: ["60", "56", "64", "68"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which Indian city is known as Pink City?",
  question_hi: "पिंक सिटी किस भारतीय शहर को कहा जाता है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which instrument measures temperature?",
  question_hi: "तापमान मापने वाला यंत्र कौन सा है?",
  options_en: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
  answer_en: "Thermometer",
  answer_hi: "थर्मामीटर",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the national flower of India?",
  question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
  options_en: ["Lotus", "Rose", "Lily", "Sunflower"],
  options_hi: ["कमल", "गुलाब", "लिली", "सूरजमुखी"],
  answer_en: "Lotus",
  answer_hi: "कमल",
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