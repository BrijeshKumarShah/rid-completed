const questions = [
{
  num: 1,
  question_en: "What is 64 + 29?",
  question_hi: "64 + 29 कितना होता है?",
  options_en: ["93", "92", "91", "94"],
  options_hi: ["93", "92", "91", "94"],
  answer_en: "93",
  answer_hi: "93",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which gas is used by plants for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण में पौधे कौन सी गैस का उपयोग करते हैं?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the capital of Himachal Pradesh?",
  question_hi: "हिमाचल प्रदेश की राजधानी क्या है?",
  options_en: ["Shimla", "Manali", "Dharamshala", "Solan"],
  options_hi: ["शिमला", "मनाली", "धर्मशाला", "सोलन"],
  answer_en: "Shimla",
  answer_hi: "शिमला",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is 15 × 12?",
  question_hi: "15 × 12 कितना होता है?",
  options_en: ["180", "170", "160", "190"],
  options_hi: ["180", "170", "160", "190"],
  answer_en: "180",
  answer_hi: "180",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which part of the body helps in thinking?",
  question_hi: "सोचने में शरीर का कौन सा भाग सहायता करता है?",
  options_en: ["Brain", "Heart", "Liver", "Lungs"],
  options_hi: ["मस्तिष्क", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Brain",
  answer_hi: "मस्तिष्क",
  attempted: false,
  selected: ""
},

{
  num: 6,
  question_en: "What is the square of 18?",
  question_hi: "18 का वर्ग कितना है?",
  options_en: ["324", "256", "288", "361"],
  options_hi: ["324", "256", "288", "361"],
  answer_en: "324",
  answer_hi: "324",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who was the first woman Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
  options_en: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
  options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which metal is used in thermometers?",
  question_hi: "थर्मामीटर में कौन सी धातु उपयोग होती है?",
  options_en: ["Mercury", "Iron", "Copper", "Silver"],
  options_hi: ["पारा", "लोहा", "तांबा", "चांदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 40% of 250?",
  question_hi: "250 का 40% कितना है?",
  options_en: ["100", "90", "110", "120"],
  options_hi: ["100", "90", "110", "120"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the largest state of India by area?",
  question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
  options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
  options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "What is the SI unit of electric current?",
  question_hi: "विद्युत धारा की SI इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Watt"],
  options_hi: ["एम्पियर", "वोल्ट", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पियर",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which organ helps in pumping blood?",
  question_hi: "रक्त पंप करने वाला अंग कौन सा है?",
  options_en: ["Heart", "Brain", "Kidney", "Lungs"],
  options_hi: ["हृदय", "मस्तिष्क", "गुर्दा", "फेफड़े"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is 900 ÷ 30?",
  question_hi: "900 ÷ 30 कितना होता है?",
  options_en: ["30", "25", "35", "40"],
  options_hi: ["30", "25", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which river is known as the Sorrow of Bihar?",
  question_hi: "बिहार का शोक किस नदी को कहा जाता है?",
  options_en: ["Kosi", "Ganga", "Son", "Gandak"],
  options_hi: ["कोसी", "गंगा", "सोन", "गंडक"],
  answer_en: "Kosi",
  answer_hi: "कोसी",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the cube of 4?",
  question_hi: "4 का घन कितना है?",
  options_en: ["64", "16", "12", "32"],
  options_hi: ["64", "16", "12", "32"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which gas is used in balloons?",
  question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
  options_en: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
  options_hi: ["हीलियम", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who wrote the Mahabharata?",
  question_hi: "महाभारत के लेखक कौन हैं?",
  options_en: ["Ved Vyasa", "Valmiki", "Kalidas", "Tulsidas"],
  options_hi: ["वेदव्यास", "वाल्मीकि", "कालिदास", "तुलसीदास"],
  answer_en: "Ved Vyasa",
  answer_hi: "वेदव्यास",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is 21 × 3?",
  question_hi: "21 × 3 कितना होता है?",
  options_en: ["63", "66", "60", "69"],
  options_hi: ["63", "66", "60", "69"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which nutrient gives energy to the body?",
  question_hi: "शरीर को ऊर्जा कौन सा पोषक तत्व देता है?",
  options_en: ["Carbohydrate", "Protein", "Vitamin", "Mineral"],
  options_hi: ["कार्बोहाइड्रेट", "प्रोटीन", "विटामिन", "खनिज"],
  answer_en: "Carbohydrate",
  answer_hi: "कार्बोहाइड्रेट",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which Indian state is known as the Land of Gods?",
  question_hi: "देवभूमि किस भारतीय राज्य को कहा जाता है?",
  options_en: ["Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Kerala"],
  options_hi: ["उत्तराखंड", "हिमाचल प्रदेश", "जम्मू कश्मीर", "केरल"],
  answer_en: "Uttarakhand",
  answer_hi: "उत्तराखंड",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "What is the SI unit of energy?",
  question_hi: "ऊर्जा की SI इकाई क्या है?",
  options_en: ["Joule", "Watt", "Newton", "Volt"],
  options_hi: ["जूल", "वाट", "न्यूटन", "वोल्ट"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is 200 − 79?",
  question_hi: "200 − 79 कितना होता है?",
  options_en: ["121", "119", "111", "129"],
  options_hi: ["121", "119", "111", "129"],
  answer_en: "121",
  answer_hi: "121",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which organ helps in breathing?",
  question_hi: "सांस लेने में कौन सा अंग सहायता करता है?",
  options_en: ["Lungs", "Heart", "Kidney", "Liver"],
  options_hi: ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which metal is used to coat iron to prevent rusting?",
  question_hi: "जंग से बचाने के लिए लोहे पर कौन सी धातु चढ़ाई जाती है?",
  options_en: ["Zinc", "Copper", "Aluminium", "Lead"],
  options_hi: ["जिंक", "तांबा", "एल्युमिनियम", "सीसा"],
  answer_en: "Zinc",
  answer_hi: "जिंक",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is 11² + 1?",
  question_hi: "11² + 1 कितना होता है?",
  options_en: ["122", "121", "123", "120"],
  options_hi: ["122", "121", "123", "120"],
  answer_en: "122",
  answer_hi: "122",
  attempted: false,
  selected: ""
},

{
  num: 26,
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
  num: 27,
  question_en: "What is √121?",
  question_hi: "√121 का मान क्या है?",
  options_en: ["11", "12", "10", "13"],
  options_hi: ["11", "12", "10", "13"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which Indian state is famous for spices?",
  question_hi: "मसालों के लिए कौन सा भारतीय राज्य प्रसिद्ध है?",
  options_en: ["Kerala", "Punjab", "Haryana", "Rajasthan"],
  options_hi: ["केरल", "पंजाब", "हरियाणा", "राजस्थान"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is 75% of 80?",
  question_hi: "80 का 75% कितना है?",
  options_en: ["60", "55", "65", "70"],
  options_hi: ["60", "55", "65", "70"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 30,
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
  num: 31,
  question_en: "Who gave the slogan 'Jai Jawan Jai Kisan'?",
  question_hi: "'जय जवान जय किसान' का नारा किसने दिया?",
  options_en: ["Lal Bahadur Shastri", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"],
  options_hi: ["लाल बहादुर शास्त्री", "जवाहरलाल नेहरू", "इंदिरा गांधी", "सरदार पटेल"],
  answer_en: "Lal Bahadur Shastri",
  answer_hi: "लाल बहादुर शास्त्री",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is 84 ÷ 7?",
  question_hi: "84 ÷ 7 कितना होता है?",
  options_en: ["12", "14", "10", "16"],
  options_hi: ["12", "14", "10", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood group is called universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा रक्त समूह है?",
  options_en: ["O−", "O+", "AB+", "A−"],
  options_hi: ["O−", "O+", "AB+", "A−"],
  answer_en: "O−",
  answer_hi: "O−",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which festival is celebrated after harvesting?",
  question_hi: "फसल कटाई के बाद कौन सा त्योहार मनाया जाता है?",
  options_en: ["Pongal", "Diwali", "Eid", "Christmas"],
  options_hi: ["पोंगल", "दीपावली", "ईद", "क्रिसमस"],
  answer_en: "Pongal",
  answer_hi: "पोंगल",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the SI unit of frequency?",
  question_hi: "आवृत्ति की SI इकाई क्या है?",
  options_en: ["Hertz", "Joule", "Watt", "Newton"],
  options_hi: ["हर्ट्ज़", "जूल", "वाट", "न्यूटन"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज़",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which planet is known as the Morning Star?",
  question_hi: "भोर का तारा किस ग्रह को कहा जाता है?",
  options_en: ["Venus", "Mercury", "Mars", "Jupiter"],
  options_hi: ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is 10% of 450?",
  question_hi: "450 का 10% कितना है?",
  options_en: ["45", "40", "50", "35"],
  options_hi: ["45", "40", "50", "35"],
  answer_en: "45",
  answer_hi: "45",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which is the largest plateau in the world?",
  question_hi: "विश्व का सबसे बड़ा पठार कौन सा है?",
  options_en: ["Tibetan Plateau", "Deccan Plateau", "Brazilian Plateau", "African Plateau"],
  options_hi: ["तिब्बती पठार", "दक्कन पठार", "ब्राजील पठार", "अफ्रीकी पठार"],
  answer_en: "Tibetan Plateau",
  answer_hi: "तिब्बती पठार",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which instrument measures humidity?",
  question_hi: "आर्द्रता मापने वाला यंत्र कौन सा है?",
  options_en: ["Hygrometer", "Thermometer", "Barometer", "Anemometer"],
  options_hi: ["हाइग्रोमीटर", "थर्मामीटर", "बैरोमीटर", "एनीमोमीटर"],
  answer_en: "Hygrometer",
  answer_hi: "हाइग्रोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is 9³?",
  question_hi: "9³ कितना होता है?",
  options_en: ["729", "243", "81", "512"],
  options_hi: ["729", "243", "81", "512"],
  answer_en: "729",
  answer_hi: "729",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Which Indian state has maximum literacy rate?",
  question_hi: "भारत में सर्वाधिक साक्षरता दर किस राज्य की है?",
  options_en: ["Kerala", "Tamil Nadu", "Maharashtra", "Punjab"],
  options_hi: ["केरल", "तमिलनाडु", "महाराष्ट्र", "पंजाब"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is 108 ÷ 12?",
  question_hi: "108 ÷ 12 कितना होता है?",
  options_en: ["9", "8", "10", "12"],
  options_hi: ["9", "8", "10", "12"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ helps in digestion of food?",
  question_hi: "भोजन के पाचन में कौन सा अंग सहायता करता है?",
  options_en: ["Stomach", "Heart", "Lungs", "Brain"],
  options_hi: ["आमाशय", "हृदय", "फेफड़े", "मस्तिष्क"],
  answer_en: "Stomach",
  answer_hi: "आमाशय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which day is celebrated as Teachers' Day in India?",
  question_hi: "भारत में शिक्षक दिवस कब मनाया जाता है?",
  options_en: ["5 September", "14 November", "2 October", "26 January"],
  options_hi: ["5 सितंबर", "14 नवंबर", "2 अक्टूबर", "26 जनवरी"],
  answer_en: "5 September",
  answer_hi: "5 सितंबर",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of 20² − 100?",
  question_hi: "20² − 100 कितना होता है?",
  options_en: ["300", "200", "250", "350"],
  options_hi: ["300", "200", "250", "350"],
  answer_en: "300",
  answer_hi: "300",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which vitamin is essential for healthy teeth?",
  question_hi: "स्वस्थ दाँतों के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 14 × 7 − 8?",
  question_hi: "14 × 7 − 8 कितना होता है?",
  options_en: ["90", "88", "86", "92"],
  options_hi: ["90", "88", "86", "92"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which city is known as the City of Temples?",
  question_hi: "मंदिरों का शहर किसे कहा जाता है?",
  options_en: ["Bhubaneswar", "Varanasi", "Madurai", "Puri"],
  options_hi: ["भुवनेश्वर", "वाराणसी", "मदुरै", "पुरी"],
  answer_en: "Bhubaneswar",
  answer_hi: "भुवनेश्वर",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which instrument measures earthquakes?",
  question_hi: "भूकंप मापने वाला यंत्र कौन सा है?",
  options_en: ["Seismograph", "Barometer", "Anemometer", "Thermometer"],
  options_hi: ["सीस्मोग्राफ", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
  answer_en: "Seismograph",
  answer_hi: "सीस्मोग्राफ",
  attempted: false,
  selected: ""
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