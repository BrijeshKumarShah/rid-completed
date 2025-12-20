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
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह के नाम से कौन सा ग्रह जाना जाता है?",
  options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
  options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is 12 × 8?",
  question_hi: "12 × 8 कितना होता है?",
  options_en: ["96", "84", "88", "92"],
  options_hi: ["96", "84", "88", "92"],
  answer_en: "96",
  answer_hi: "96",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who wrote the National Anthem of India?",
  question_hi: "भारत का राष्ट्रगान किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra", "Premchand", "Sarojini Naidu"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "प्रेमचंद", "सरोजिनी नायडू"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which gas is essential for breathing?",
  question_hi: "साँस लेने के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is 15 + 27?",
  question_hi: "15 + 27 कितना होता है?",
  options_en: ["42", "40", "44", "45"],
  options_hi: ["42", "40", "44", "45"],
  answer_en: "42",
  answer_hi: "42",
  attempted: false,
  selected: ""
},
{
  num: 7,
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
  num: 8,
  question_en: "Who is known as the Father of the Indian Constitution?",
  question_hi: "भारतीय संविधान के जनक कौन हैं?",
  options_en: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
  options_hi: ["डॉ. बी.आर. अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
  answer_en: "Dr. B.R. Ambedkar",
  answer_hi: "डॉ. बी.आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the square of 12?",
  question_hi: "12 का वर्ग कितना है?",
  options_en: ["144", "124", "132", "156"],
  options_hi: ["144", "124", "132", "156"],
  answer_en: "144",
  answer_hi: "144",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which gas is essential for breathing?",
  question_hi: "साँस लेने के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "What is 9 × 8?",
  question_hi: "9 × 8 कितना होता है?",
  options_en: ["72", "64", "81", "70"],
  options_hi: ["72", "64", "81", "70"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 12,
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
  num: 13,
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
  num: 14,
  question_en: "Who wrote Ramcharitmanas?",
  question_hi: "रामचरितमानस किसने लिखी?",
  options_en: ["Tulsidas", "Valmiki", "Kalidas", "Surdas"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "कालिदास", "सूरदास"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is 100 ÷ 4?",
  question_hi: "100 ÷ 4 कितना होता है?",
  options_en: ["25", "20", "30", "40"],
  options_hi: ["25", "20", "30", "40"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},

{
  num: 16,
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
  num: 17,
  question_en: "What is 14 × 6?",
  question_hi: "14 × 6 कितना होता है?",
  options_en: ["84", "72", "96", "90"],
  options_hi: ["84", "72", "96", "90"],
  answer_en: "84",
  answer_hi: "84",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which country is known as the Land of Rising Sun?",
  question_hi: "उगते सूर्य की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "Thailand", "Korea"],
  options_hi: ["जापान", "चीन", "थाईलैंड", "कोरिया"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the cube of 4?",
  question_hi: "4 का घन कितना है?",
  options_en: ["64", "16", "24", "32"],
  options_hi: ["64", "16", "24", "32"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which organ purifies blood?",
  question_hi: "रक्त को शुद्ध करने वाला अंग कौन सा है?",
  options_en: ["Kidney", "Heart", "Liver", "Lungs"],
  options_hi: ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},

{
  num: 21,
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
  num: 22,
  question_en: "Which gas is used in balloons?",
  question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
  options_en: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the capital of Rajasthan?",
  question_hi: "राजस्थान की राजधानी क्या है?",
  options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
  options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is 20% of 200?",
  question_hi: "200 का 20% कितना है?",
  options_en: ["40", "20", "60", "80"],
  options_hi: ["40", "20", "60", "80"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर द्रव धातु कौन सी है?",
  options_en: ["Mercury", "Iron", "Copper", "Aluminium"],
  options_hi: ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "What is 16 × 5?",
  question_hi: "16 × 5 कितना होता है?",
  options_en: ["80", "75", "85", "90"],
  options_hi: ["80", "75", "85", "90"],
  answer_en: "80",
  answer_hi: "80",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which Indian city is known as Pink City?",
  question_hi: "गुलाबी शहर किसे कहा जाता है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक क्या है?",
  options_en: ["100°C", "90°C", "80°C", "110°C"],
  options_hi: ["100°C", "90°C", "80°C", "110°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is 18 ÷ 3?",
  question_hi: "18 ÷ 3 कितना होता है?",
  options_en: ["6", "5", "7", "8"],
  options_hi: ["6", "5", "7", "8"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which part of plant makes food?",
  question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
  options_en: ["Leaf", "Root", "Stem", "Flower"],
  options_hi: ["पत्ती", "जड़", "तना", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},

{
  num: 31,
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
  num: 32,
  question_en: "Which ocean is the largest?",
  question_hi: "सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific", "Atlantic", "Indian", "Arctic"],
  options_hi: ["प्रशांत", "अटलांटिक", "हिंद", "आर्कटिक"],
  answer_en: "Pacific",
  answer_hi: "प्रशांत",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the SI unit of power?",
  question_hi: "शक्ति की SI इकाई क्या है?",
  options_en: ["Watt", "Joule", "Newton", "Volt"],
  options_hi: ["वाट", "जूल", "न्यूटन", "वोल्ट"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 30% of 300?",
  question_hi: "300 का 30% कितना है?",
  options_en: ["90", "60", "120", "75"],
  options_hi: ["90", "60", "120", "75"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "सबसे लंबा समुद्री तट किस राज्य का है?",
  options_en: ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
  options_hi: ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "What is 49 ÷ 7?",
  question_hi: "49 ÷ 7 कितना होता है?",
  options_en: ["7", "6", "8", "9"],
  options_hi: ["7", "6", "8", "9"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which gas causes global warming?",
  question_hi: "वैश्विक ऊष्मीकरण के लिए कौन सी गैस जिम्मेदार है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the capital of Karnataka?",
  question_hi: "कर्नाटक की राजधानी क्या है?",
  options_en: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru"],
  options_hi: ["बेंगलुरु", "मैसूर", "हुबली", "मंगलुरु"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is 5³?",
  question_hi: "5 का घन कितना है?",
  options_en: ["125", "25", "75", "100"],
  options_hi: ["125", "25", "75", "100"],
  answer_en: "125",
  answer_hi: "125",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which instrument measures temperature?",
  question_hi: "तापमान मापने वाला यंत्र कौन सा है?",
  options_en: ["Thermometer", "Barometer", "Hygrometer", "Speedometer"],
  options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "स्पीडोमीटर"],
  answer_en: "Thermometer",
  answer_hi: "थर्मामीटर",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "What is 22 × 4?",
  question_hi: "22 × 4 कितना होता है?",
  options_en: ["88", "84", "92", "96"],
  options_hi: ["88", "84", "92", "96"],
  answer_en: "88",
  answer_hi: "88",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which Indian festival is known as Festival of Lights?",
  question_hi: "रोशनी का त्योहार कौन सा है?",
  options_en: ["Diwali", "Holi", "Eid", "Navratri"],
  options_hi: ["दीपावली", "होली", "ईद", "नवरात्रि"],
  answer_en: "Diwali",
  answer_hi: "दीपावली",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का हिमांक बिंदु क्या है?",
  options_en: ["0°C", "10°C", "-10°C", "5°C"],
  options_hi: ["0°C", "10°C", "-10°C", "5°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who is known as Netaji?",
  question_hi: "नेताजी के नाम से कौन जाने जाते हैं?",
  options_en: ["Subhash Chandra Bose", "Bhagat Singh", "Sardar Patel", "Lala Lajpat Rai"],
  options_hi: ["सुभाष चंद्र बोस", "भगत सिंह", "सरदार पटेल", "लाला लाजपत राय"],
  answer_en: "Subhash Chandra Bose",
  answer_hi: "सुभाष चंद्र बोस",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is 121 ÷ 11?",
  question_hi: "121 ÷ 11 कितना होता है?",
  options_en: ["11", "10", "12", "9"],
  options_hi: ["11", "10", "12", "9"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which organ stores bile?",
  question_hi: "पित्त को कौन सा अंग संग्रहित करता है?",
  options_en: ["Gall Bladder", "Liver", "Pancreas", "Stomach"],
  options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
  answer_en: "Gall Bladder",
  answer_hi: "पित्ताशय",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 18 × 5?",
  question_hi: "18 × 5 कितना होता है?",
  options_en: ["90", "85", "95", "80"],
  options_hi: ["90", "85", "95", "80"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which planet is known as the Blue Planet?",
  question_hi: "नीला ग्रह किसे कहा जाता है?",
  options_en: ["Earth", "Neptune", "Uranus", "Saturn"],
  options_hi: ["पृथ्वी", "नेपच्यून", "यूरेनस", "शनि"],
  answer_en: "Earth",
  answer_hi: "पृथ्वी",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is √144?",
  question_hi: "√144 का मान क्या है?",
  options_en: ["12", "14", "16", "10"],
  options_hi: ["12", "14", "16", "10"],
  answer_en: "12",
  answer_hi: "12",
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