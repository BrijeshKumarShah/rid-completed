const questions = [
 {
  num: 1,
  question_en: "What is 25 + 35?",
  question_hi: "25 + 35 कितना होता है?",
  options_en: ["60", "55", "65", "70"],
  options_hi: ["60", "55", "65", "70"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which is the capital of India?",
  question_hi: "भारत की राजधानी क्या है?",
  options_en: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the square of 9?",
  question_hi: "9 का वर्ग कितना है?",
  options_en: ["81", "72", "99", "90"],
  options_hi: ["81", "72", "99", "90"],
  answer_en: "81",
  answer_hi: "81",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who is known as the Father of the Nation?",
  question_hi: "राष्ट्रपिता किसे कहा जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "Bhagat Singh"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष बोस", "भगत सिंह"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
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
  question_en: "What is 48 ÷ 6?",
  question_hi: "48 ÷ 6 कितना होता है?",
  options_en: ["8", "6", "7", "9"],
  options_hi: ["8", "6", "7", "9"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which river is called the lifeline of India?",
  question_hi: "भारत की जीवन रेखा किस नदी को कहा जाता है?",
  options_en: ["Ganga", "Yamuna", "Godavari", "Narmada"],
  options_hi: ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 8,
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
  num: 9,
  question_en: "Who is the first woman President of India?",
  question_hi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
  options_en: ["Pratibha Patil", "Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu"],
  options_hi: ["प्रतिभा पाटिल", "इंदिरा गांधी", "सोनिया गांधी", "सरोजिनी नायडू"],
  answer_en: "Pratibha Patil",
  answer_hi: "प्रतिभा पाटिल",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "अग्निशामक यंत्र में कौन सी गैस प्रयोग होती है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is 17 × 3?",
  question_hi: "17 × 3 कितना होता है?",
  options_en: ["51", "47", "54", "49"],
  options_hi: ["51", "47", "54", "49"],
  answer_en: "51",
  answer_hi: "51",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which state is known as the Spice Garden of India?",
  question_hi: "भारत का मसाला बागान किस राज्य को कहा जाता है?",
  options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
  options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the SI unit of mass?",
  question_hi: "द्रव्यमान की SI इकाई क्या है?",
  options_en: ["Kilogram", "Gram", "Quintal", "Tonne"],
  options_hi: ["किलोग्राम", "ग्राम", "क्विंटल", "टन"],
  answer_en: "Kilogram",
  answer_hi: "किलोग्राम",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who invented the electric bulb?",
  question_hi: "विद्युत बल्ब का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Newton", "Tesla", "Einstein"],
  options_hi: ["थॉमस एडिसन", "न्यूटन", "टेस्ला", "आइंस्टीन"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडिसन",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is 60% of 150?",
  question_hi: "150 का 60% कितना है?",
  options_en: ["90", "80", "100", "85"],
  options_hi: ["90", "80", "100", "85"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which organ helps in breathing?",
  question_hi: "श्वसन में कौन सा अंग सहायक है?",
  options_en: ["Lungs", "Heart", "Kidney", "Liver"],
  options_hi: ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the capital of Gujarat?",
  question_hi: "गुजरात की राजधानी क्या है?",
  options_en: ["Gandhinagar", "Ahmedabad", "Surat", "Vadodara"],
  options_hi: ["गांधीनगर", "अहमदाबाद", "सूरत", "वडोदरा"],
  answer_en: "Gandhinagar",
  answer_hi: "गांधीनगर",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which vitamin is essential for eyesight?",
  question_hi: "आंखों के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 19,
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
  num: 20,
  question_en: "Who was the first Governor-General of India?",
  question_hi: "भारत के पहले गवर्नर जनरल कौन थे?",
  options_en: ["Lord William Bentinck", "Lord Mountbatten", "Warren Hastings", "Dalhousie"],
  options_hi: ["लॉर्ड विलियम बेंटिंक", "लॉर्ड माउंटबेटन", "वॉरेन हेस्टिंग्स", "डलहौजी"],
  answer_en: "Warren Hastings",
  answer_hi: "वॉरेन हेस्टिंग्स",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सा धातु कमरे के तापमान पर तरल होता है?",
  options_en: ["Mercury", "Iron", "Aluminium", "Copper"],
  options_hi: ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the national tree of India?",
  question_hi: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
  options_en: ["Banyan", "Neem", "Peepal", "Mango"],
  options_hi: ["बरगद", "नीम", "पीपल", "आम"],
  answer_en: "Banyan",
  answer_hi: "बरगद",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is 9 × 7?",
  question_hi: "9 × 7 कितना होता है?",
  options_en: ["63", "56", "72", "49"],
  options_hi: ["63", "56", "72", "49"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which continent has the largest population?",
  question_hi: "सबसे अधिक जनसंख्या वाला महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "America"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "अमेरिका"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which part of computer is called the brain?",
  question_hi: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
  options_en: ["CPU", "Monitor", "Keyboard", "Mouse"],
  options_hi: ["CPU", "मॉनिटर", "कीबोर्ड", "माउस"],
  answer_en: "CPU",
  answer_hi: "CPU",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is 75% of 80?",
  question_hi: "80 का 75% कितना है?",
  options_en: ["60", "50", "70", "65"],
  options_hi: ["60", "50", "70", "65"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which gas is essential for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Who was the first Indian woman IPS officer?",
  question_hi: "भारत की पहली महिला IPS अधिकारी कौन थीं?",
  options_en: ["Kiran Bedi", "Indira Gandhi", "Kalpana Chawla", "Bachendri Pal"],
  options_hi: ["किरण बेदी", "इंदिरा गांधी", "कल्पना चावला", "बछेंद्री पाल"],
  answer_en: "Kiran Bedi",
  answer_hi: "किरण बेदी",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक क्या है?",
  options_en: ["100°C", "90°C", "80°C", "120°C"],
  options_hi: ["100°C", "90°C", "80°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which planet is known as Earth’s twin?",
  question_hi: "पृथ्वी का जुड़वां ग्रह किसे कहा जाता है?",
  options_en: ["Venus", "Mars", "Jupiter", "Mercury"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "बुध"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is the value of 5² + 3²?",
  question_hi: "5² + 3² का मान क्या है?",
  options_en: ["34", "28", "30", "40"],
  options_hi: ["34", "28", "30", "40"],
  answer_en: "34",
  answer_hi: "34",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which Indian city is known as the Silicon Valley of India?",
  question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
  options_en: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood cells help in clotting?",
  question_hi: "रक्त का थक्का जमाने में कौन सी कोशिकाएं सहायक होती हैं?",
  options_en: ["Platelets", "RBC", "WBC", "Plasma"],
  options_hi: ["प्लेटलेट्स", "RBC", "WBC", "प्लाज्मा"],
  answer_en: "Platelets",
  answer_hi: "प्लेटलेट्स",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 144 ÷ 12?",
  question_hi: "144 ÷ 12 कितना होता है?",
  options_en: ["12", "10", "14", "16"],
  options_hi: ["12", "10", "14", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who wrote the Ramcharitmanas?",
  question_hi: "रामचरितमानस किसने लिखी?",
  options_en: ["Tulsidas", "Valmiki", "Ved Vyasa", "Kabir"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "वेदव्यास", "कबीर"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which instrument measures earthquakes?",
  question_hi: "भूकंप मापने का यंत्र कौन सा है?",
  options_en: ["Seismograph", "Barometer", "Thermometer", "Anemometer"],
  options_hi: ["सीस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
  answer_en: "Seismograph",
  answer_hi: "सीस्मोग्राफ",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the capital of Himachal Pradesh?",
  question_hi: "हिमाचल प्रदेश की राजधानी क्या है?",
  options_en: ["Shimla", "Manali", "Dharamshala", "Kullu"],
  options_hi: ["शिमला", "मनाली", "धर्मशाला", "कुल्लू"],
  answer_en: "Shimla",
  answer_hi: "शिमला",
  attempted: false,
  selected: ""
},
{
  num: 38,
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
  num: 39,
  question_en: "Which animal is called the King of the Jungle?",
  question_hi: "जंगल का राजा किसे कहा जाता है?",
  options_en: ["Lion", "Tiger", "Elephant", "Leopard"],
  options_hi: ["शेर", "बाघ", "हाथी", "तेंदुआ"],
  answer_en: "Lion",
  answer_hi: "शेर",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the chemical formula of common salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "HCl", "Na2CO3"],
  options_hi: ["NaCl", "KCl", "HCl", "Na2CO3"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who is known as the Flying Sikh of India?",
  question_hi: "भारत का फ्लाइंग सिख किसे कहा जाता है?",
  options_en: ["Milkha Singh", "P.T. Usha", "Neeraj Chopra", "Kapil Dev"],
  options_hi: ["मिल्खा सिंह", "पी.टी. उषा", "नीरज चोपड़ा", "कपिल देव"],
  answer_en: "Milkha Singh",
  answer_hi: "मिल्खा सिंह",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the average of 5, 10 and 15?",
  question_hi: "5, 10 और 15 का औसत कितना है?",
  options_en: ["10", "12", "15", "8"],
  options_hi: ["10", "12", "15", "8"],
  answer_en: "10",
  answer_hi: "10",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ stores bile?",
  question_hi: "पित्त का संग्रह कौन सा अंग करता है?",
  options_en: ["Gall Bladder", "Liver", "Pancreas", "Kidney"],
  options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "गुर्दा"],
  answer_en: "Gall Bladder",
  answer_hi: "पित्ताशय",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the national game of India (traditional)?",
  question_hi: "भारत का पारंपरिक राष्ट्रीय खेल कौन सा है?",
  options_en: ["Hockey", "Cricket", "Kabaddi", "Football"],
  options_hi: ["हॉकी", "क्रिकेट", "कबड्डी", "फुटबॉल"],
  answer_en: "Hockey",
  answer_hi: "हॉकी",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is 2³?",
  question_hi: "2³ कितना होता है?",
  options_en: ["8", "6", "4", "12"],
  options_hi: ["8", "6", "4", "12"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which acid is found in curd?",
  question_hi: "दही में कौन सा अम्ल पाया जाता है?",
  options_en: ["Lactic Acid", "Citric Acid", "Acetic Acid", "Sulphuric Acid"],
  options_hi: ["लैक्टिक अम्ल", "सिट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल"],
  answer_en: "Lactic Acid",
  answer_hi: "लैक्टिक अम्ल",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the SI unit of length?",
  question_hi: "लंबाई की SI इकाई क्या है?",
  options_en: ["Metre", "Kilometre", "Centimetre", "Millimetre"],
  options_hi: ["मीटर", "किलोमीटर", "सेंटीमीटर", "मिलीमीटर"],
  answer_en: "Metre",
  answer_hi: "मीटर",
  attempted: false,
  selected: ""
},
{
  num: 48,
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
  num: 49,
  question_en: "What is 20 × 5?",
  question_hi: "20 × 5 कितना होता है?",
  options_en: ["100", "90", "80", "110"],
  options_hi: ["100", "90", "80", "110"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which instrument is used to see very small objects?",
  question_hi: "बहुत छोटे वस्तुओं को देखने के लिए किस यंत्र का प्रयोग होता है?",
  options_en: ["Microscope", "Telescope", "Periscope", "Binocular"],
  options_hi: ["सूक्ष्मदर्शी", "दूरबीन", "पेरिस्कोप", "द्विनेत्री"],
  answer_en: "Microscope",
  answer_hi: "सूक्ष्मदर्शी",
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