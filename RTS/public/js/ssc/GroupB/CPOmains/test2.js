const questions = [
  {
  num: 1,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Lal Bahadur Shastri", "Rajendra Prasad"],
  options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "लाल बहादुर शास्त्री", "राजेंद्र प्रसाद"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is 36 ÷ 6?",
  question_hi: "36 ÷ 6 कितना है?",
  options_en: ["4", "5", "6", "7"],
  options_hi: ["4", "5", "6", "7"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
  options_en: ["Venus", "Earth", "Mercury", "Mars"],
  options_hi: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the antonym of 'Brave'?",
  question_hi: "'Brave' का विलोम क्या है?",
  options_en: ["Bold", "Coward", "Strong", "Fearless"],
  options_hi: ["बहादुर", "कायर", "मजबूत", "निडर"],
  answer_en: "Coward",
  answer_hi: "कायर",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the national game of India?",
  question_hi: "भारत का राष्ट्रीय खेल क्या है?",
  options_en: ["Cricket", "Hockey", "Football", "Kabaddi"],
  options_hi: ["क्रिकेट", "हॉकी", "फुटबॉल", "कबड्डी"],
  answer_en: "Hockey",
  answer_hi: "हॉकी",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is 18 × 5?",
  question_hi: "18 × 5 कितना है?",
  options_en: ["80", "85", "90", "95"],
  options_hi: ["80", "85", "90", "95"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 8,
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
  num: 9,
  question_en: "What is the currency of the USA?",
  question_hi: "अमेरिका की मुद्रा क्या है?",
  options_en: ["Dollar", "Pound", "Euro", "Yen"],
  options_hi: ["डॉलर", "पाउंड", "यूरो", "येन"],
  answer_en: "Dollar",
  answer_hi: "डॉलर",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the square of 15?",
  question_hi: "15 का वर्ग कितना है?",
  options_en: ["215", "225", "235", "245"],
  options_hi: ["215", "225", "235", "245"],
  answer_en: "225",
  answer_hi: "225",
  attempted: false,
  selected: ""
},

// ---------- GK / Maths / Reasoning MIX ----------

{
  num: 11,
  question_en: "Which is the smallest continent?",
  question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Europe", "Australia", "Antarctica", "Africa"],
  options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "अफ्रीका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the full form of CCTV?",
  question_hi: "CCTV का पूरा नाम क्या है?",
  options_en: ["Closed Circuit Television", "Central Control TV", "Common Circuit TV", "Closed Camera TV"],
  options_hi: ["क्लोज्ड सर्किट टेलीविजन", "सेंट्रल कंट्रोल टीवी", "कॉमन सर्किट टीवी", "क्लोज्ड कैमरा टीवी"],
  answer_en: "Closed Circuit Television",
  answer_hi: "क्लोज्ड सर्किट टेलीविजन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which vitamin helps in blood clotting?",
  question_hi: "कौन सा विटामिन रक्त का थक्का जमाने में सहायक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन K", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is 20% of 250?",
  question_hi: "250 का 20% कितना है?",
  options_en: ["40", "45", "50", "55"],
  options_hi: ["40", "45", "50", "55"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who discovered gravity?",
  question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
  options_en: ["Einstein", "Newton", "Galileo", "Tesla"],
  options_hi: ["आइंस्टीन", "न्यूटन", "गैलीलियो", "टेस्ला"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
  {
  num: 16,
  question_en: "Which country hosted the 2016 Olympics?",
  question_hi: "2016 ओलंपिक की मेज़बानी किस देश ने की?",
  options_en: ["China", "Brazil", "Japan", "UK"],
  options_hi: ["चीन", "ब्राज़ील", "जापान", "यूके"],
  answer_en: "Brazil",
  answer_hi: "ब्राज़ील",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the cube of 4?",
  question_hi: "4 का घन कितना है?",
  options_en: ["12", "16", "64", "24"],
  options_hi: ["12", "16", "64", "24"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which part of the plant conducts photosynthesis?",
  question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
  options_en: ["Root", "Stem", "Leaf", "Flower"],
  options_hi: ["जड़", "तना", "पत्ती", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the average of 10 and 20?",
  question_hi: "10 और 20 का औसत कितना है?",
  options_en: ["10", "15", "20", "25"],
  options_hi: ["10", "15", "20", "25"],
  answer_en: "15",
  answer_hi: "15",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who was known as the Iron Man of India?",
  question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
  options_en: ["Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose", "Bhagat Singh"],
  options_hi: ["जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस", "भगत सिंह"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is 45 ÷ 5?",
  question_hi: "45 ÷ 5 कितना है?",
  options_en: ["7", "8", "9", "10"],
  options_hi: ["7", "8", "9", "10"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which metal is used to make electric wires?",
  question_hi: "बिजली के तार बनाने में कौन सी धातु प्रयोग होती है?",
  options_en: ["Iron", "Copper", "Aluminium", "Silver"],
  options_hi: ["लोहा", "तांबा", "एल्युमिनियम", "चांदी"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Find the missing number: 3, 6, 9, ?, 15",
  question_hi: "श्रृंखला पूरी करें: 3, 6, 9, ?, 15",
  options_en: ["10", "11", "12", "13"],
  options_hi: ["10", "11", "12", "13"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which Mughal emperor built the Red Fort?",
  question_hi: "लाल किला किस मुगल शासक ने बनवाया?",
  options_en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
  options_hi: ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगज़ेब"],
  answer_en: "Shah Jahan",
  answer_hi: "शाहजहाँ",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is 30% of 90?",
  question_hi: "90 का 30% कितना है?",
  options_en: ["18", "21", "27", "30"],
  options_hi: ["18", "21", "27", "30"],
  answer_en: "27",
  answer_hi: "27",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which organ helps in breathing?",
  question_hi: "श्वसन में कौन सा अंग सहायता करता है?",
  options_en: ["Heart", "Lungs", "Kidney", "Liver"],
  options_hi: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the full form of PIN?",
  question_hi: "PIN का पूरा नाम क्या है?",
  options_en: ["Personal Identification Number", "Private Identity Number", "Personal Information Number", "Primary Identity Number"],
  options_hi: ["पर्सनल आइडेंटिफिकेशन नंबर", "प्राइवेट आइडेंटिटी नंबर", "पर्सनल इंफॉर्मेशन नंबर", "प्राइमरी आइडेंटिटी नंबर"],
  answer_en: "Personal Identification Number",
  answer_hi: "पर्सनल आइडेंटिफिकेशन नंबर",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which state is known as the Land of Five Rivers?",
  question_hi: "पांच नदियों की भूमि किस राज्य को कहा जाता है?",
  options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
  options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "बिहार"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the next prime number after 7?",
  question_hi: "7 के बाद अगली अभाज्य संख्या कौन सी है?",
  options_en: ["9", "10", "11", "13"],
  options_hi: ["9", "10", "11", "13"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
  num: 30,
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
  num: 31,
  question_en: "What is 11 × 9?",
  question_hi: "11 × 9 कितना है?",
  options_en: ["88", "90", "99", "101"],
  options_hi: ["88", "90", "99", "101"],
  answer_en: "99",
  answer_hi: "99",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Who gave the slogan 'Inquilab Zindabad'?",
  question_hi: "'इंकलाब ज़िंदाबाद' का नारा किसने दिया?",
  options_en: ["Bhagat Singh", "Mahatma Gandhi", "Subhash Bose", "Lala Lajpat Rai"],
  options_hi: ["भगत सिंह", "महात्मा गांधी", "सुभाष बोस", "लाला लाजपत राय"],
  answer_en: "Bhagat Singh",
  answer_hi: "भगत सिंह",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which number is a multiple of both 2 and 3?",
  question_hi: "कौन सी संख्या 2 और 3 दोनों की गुणज है?",
  options_en: ["4", "6", "8", "10"],
  options_hi: ["4", "6", "8", "10"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which Indian city is known as the Pink City?",
  question_hi: "भारत का गुलाबी शहर किसे कहा जाता है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the synonym of 'Quick'?",
  question_hi: "'Quick' का पर्यायवाची क्या है?",
  options_en: ["Slow", "Fast", "Lazy", "Weak"],
  options_hi: ["धीमा", "तेज़", "आलसी", "कमज़ोर"],
  answer_en: "Fast",
  answer_hi: "तेज़",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which layer of the atmosphere protects us from UV rays?",
  question_hi: "वायुमंडल की कौन सी परत हमें UV किरणों से बचाती है?",
  options_en: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
  options_hi: ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "तापमंडल"],
  answer_en: "Stratosphere",
  answer_hi: "समतापमंडल",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is 2³ + 2²?",
  question_hi: "2³ + 2² कितना है?",
  options_en: ["10", "12", "14", "16"],
  options_hi: ["10", "12", "14", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which Indian river is called Dakshin Ganga?",
  question_hi: "दक्षिण गंगा किस नदी को कहा जाता है?",
  options_en: ["Krishna", "Cauvery", "Godavari", "Tungabhadra"],
  options_hi: ["कृष्णा", "कावेरी", "गोदावरी", "तुंगभद्रा"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the antonym of 'Victory'?",
  question_hi: "'Victory' का विलोम क्या है?",
  options_en: ["Success", "Win", "Defeat", "Achievement"],
  options_hi: ["सफलता", "जीत", "हार", "उपलब्धि"],
  answer_en: "Defeat",
  answer_hi: "हार",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "How many hours are there in 3 days?",
  question_hi: "3 दिनों में कितने घंटे होते हैं?",
  options_en: ["48", "60", "72", "84"],
  options_hi: ["48", "60", "72", "84"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which sport uses the term 'Love'?",
  question_hi: "'लव' शब्द किस खेल में प्रयोग होता है?",
  options_en: ["Cricket", "Football", "Tennis", "Hockey"],
  options_hi: ["क्रिकेट", "फुटबॉल", "टेनिस", "हॉकी"],
  answer_en: "Tennis",
  answer_hi: "टेनिस",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the chemical symbol of Sodium?",
  question_hi: "सोडियम का रासायनिक संकेत क्या है?",
  options_en: ["So", "Na", "S", "Sn"],
  options_hi: ["So", "Na", "S", "Sn"],
  answer_en: "Na",
  answer_hi: "Na",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which number is not a prime number?",
  question_hi: "निम्न में से कौन अभाज्य संख्या नहीं है?",
  options_en: ["2", "3", "5", "9"],
  options_hi: ["2", "3", "5", "9"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who was the first Indian woman IPS officer?",
  question_hi: "भारत की पहली महिला IPS अधिकारी कौन थीं?",
  options_en: ["Kiran Bedi", "Indira Gandhi", "Aruna Roy", "Kalpana Chawla"],
  options_hi: ["किरण बेदी", "इंदिरा गांधी", "अरुणा रॉय", "कल्पना चावला"],
  answer_en: "Kiran Bedi",
  answer_hi: "किरण बेदी",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the SI unit of electric current?",
  question_hi: "विद्युत धारा की SI इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Ohm", "Watt"],
  options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पीयर",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the next number: 1, 4, 9, 16, ?",
  question_hi: "श्रृंखला पूरी करें: 1, 4, 9, 16, ?",
  options_en: ["20", "25", "30", "36"],
  options_hi: ["20", "25", "30", "36"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
  options_en: ["Tamil Nadu", "Maharashtra", "Gujarat", "Kerala"],
  options_hi: ["तमिलनाडु", "महाराष्ट्र", "गुजरात", "केरल"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the meaning of 'Abandon'?",
  question_hi: "'Abandon' का अर्थ क्या है?",
  options_en: ["Accept", "Leave", "Hold", "Protect"],
  options_hi: ["स्वीकार करना", "छोड़ना", "पकड़ना", "सुरक्षित करना"],
  answer_en: "Leave",
  answer_hi: "छोड़ना",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is 14 × 7?",
  question_hi: "14 × 7 कितना है?",
  options_en: ["84", "91", "98", "105"],
  options_hi: ["84", "91", "98", "105"],
  answer_en: "98",
  answer_hi: "98",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which device converts AC to DC?",
  question_hi: "AC को DC में बदलने वाला उपकरण कौन सा है?",
  options_en: ["Transformer", "Rectifier", "Generator", "Inverter"],
  options_hi: ["ट्रांसफॉर्मर", "रेक्टिफायर", "जनरेटर", "इन्वर्टर"],
  answer_en: "Rectifier",
  answer_hi: "रेक्टिफायर",
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