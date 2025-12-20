const questions = [
  {
  num: 1,
  question_en: "What is 45 + 27?",
  question_hi: "45 + 27 कितना होता है?",
  options_en: ["72", "70", "74", "68"],
  options_hi: ["72", "70", "74", "68"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which organ purifies blood in the human body?",
  question_hi: "मानव शरीर में रक्त को शुद्ध कौन सा अंग करता है?",
  options_en: ["Kidney", "Heart", "Liver", "Lungs"],
  options_hi: ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
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
  question_en: "What is 12 × 8?",
  question_hi: "12 × 8 कितना होता है?",
  options_en: ["96", "88", "92", "84"],
  options_hi: ["96", "88", "92", "84"],
  answer_en: "96",
  answer_hi: "96",
  attempted: false,
  selected: ""
},
{
  num: 5,
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
  num: 6,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri", "Sardar Patel"],
  options_hi: ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "सरदार पटेल"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the square of 14?",
  question_hi: "14 का वर्ग कितना है?",
  options_en: ["196", "186", "176", "206"],
  options_hi: ["196", "186", "176", "206"],
  answer_en: "196",
  answer_hi: "196",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
  options_en: ["Mercury", "Iron", "Aluminium", "Copper"],
  options_hi: ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 75% of 200?",
  question_hi: "200 का 75% कितना है?",
  options_en: ["150", "125", "175", "100"],
  options_hi: ["150", "125", "175", "100"],
  answer_en: "150",
  answer_hi: "150",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the largest mammal?",
  question_hi: "सबसे बड़ा स्तनधारी कौन सा है?",
  options_en: ["Blue Whale", "Elephant", "Giraffe", "Rhino"],
  options_hi: ["नीली व्हेल", "हाथी", "जिराफ", "गैंडा"],
  answer_en: "Blue Whale",
  answer_hi: "नीली व्हेल",
  attempted: false,
  selected: ""
},

{
  num: 11,
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
  num: 12,
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
  num: 13,
  question_en: "What is 9³?",
  question_hi: "9³ कितना होता है?",
  options_en: ["729", "81", "243", "512"],
  options_hi: ["729", "81", "243", "512"],
  answer_en: "729",
  answer_hi: "729",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which vitamin is obtained from sunlight?",
  question_hi: "धूप से कौन सा विटामिन मिलता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the value of 360 ÷ 12?",
  question_hi: "360 ÷ 12 कितना होता है?",
  options_en: ["30", "25", "35", "40"],
  options_hi: ["30", "25", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which element has the chemical symbol 'Na'?",
  question_hi: "कौन सा तत्व 'Na' के रासायनिक प्रतीक से जाना जाता है?",
  options_en: ["Sodium", "Nitrogen", "Neon", "Nickel"],
  options_hi: ["सोडियम", "नाइट्रोजन", "नीऑन", "निकेल"],
  answer_en: "Sodium",
  answer_hi: "सोडियम",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the capital of Odisha?",
  question_hi: "ओड़िशा की राजधानी क्या है?",
  options_en: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela"],
  options_hi: ["भुवनेश्वर", "कटक", "पुरी", "राउरकेला"],
  answer_en: "Bhubaneswar",
  answer_hi: "भुवनेश्वर",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की?",
  options_en: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "आईजैक न्यूटन", "अल्बर्ट आइंस्टीन"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the square root of 256?",
  question_hi: "256 का वर्गमूल क्या है?",
  options_en: ["16", "14", "18", "20"],
  options_hi: ["16", "14", "18", "20"],
  answer_en: "16",
  answer_hi: "16",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूर्य के सबसे नज़दीक ग्रह कौन सा है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who wrote 'Gitanjali'?",
  question_hi: "'गीतांजलि' किसने लिखी?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Premchand", "Sarojini Naidu"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "प्रेमचंद", "सरोजिनी नायडू"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the chemical formula of common salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "CaCO3", "MgSO4"],
  options_hi: ["NaCl", "KCl", "CaCO3", "MgSO4"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which organ produces bile?",
  question_hi: "कौन सा अंग पित्त (Bile) का निर्माण करता है?",
  options_en: ["Liver", "Pancreas", "Kidney", "Heart"],
  options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 24,
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
  num: 25,
  question_en: "Which river is the longest in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
  options_hi: ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is 8 × 12?",
  question_hi: "8 × 12 कितना होता है?",
  options_en: ["96", "88", "92", "100"],
  options_hi: ["96", "88", "92", "100"],
  answer_en: "96",
  answer_hi: "96",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which gas do humans exhale?",
  question_hi: "मनुष्य किस गैस का उत्सर्जन करता है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Who invented the light bulb?",
  question_hi: "बिजली का बल्ब किसने बनाया?",
  options_en: ["Thomas Edison", "Nikola Tesla", "James Watt", "Alexander Graham Bell"],
  options_hi: ["थॉमस एडीसन", "निकोला टेस्ला", "जेम्स वाट", "अलेक्जेंडर ग्राहम बेल"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडीसन",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which country is known as the Land of Maple Leaf?",
  question_hi: "कौन सा देश मेपल लीफ की भूमि के रूप में जाना जाता है?",
  options_en: ["Canada", "USA", "Australia", "Germany"],
  options_hi: ["कनाडा", "अमेरिका", "ऑस्ट्रेलिया", "जर्मनी"],
  answer_en: "Canada",
  answer_hi: "कनाडा",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is 100 ÷ 25?",
  question_hi: "100 ÷ 25 कितना होता है?",
  options_en: ["4", "5", "6", "3"],
  options_hi: ["4", "5", "6", "3"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which is the largest planet in our solar system?",
  question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Earth", "Mars"],
  options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Who wrote 'Ramcharitmanas'?",
  question_hi: "'रामचरितमानस' किसने लिखा?",
  options_en: ["Tulsidas", "Valmiki", "Kalidasa", "Kabir"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "कालिदास", "कबीर"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which vitamin is found in citrus fruits?",
  question_hi: "साइट्रस फलों में कौन सा विटामिन पाया जाता है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin B12"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन B12"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 50 × 6?",
  question_hi: "50 × 6 कितना होता है?",
  options_en: ["300", "250", "350", "320"],
  options_hi: ["300", "250", "350", "320"],
  answer_en: "300",
  answer_hi: "300",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which is the smallest continent by area?",
  question_hi: "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Australia", "Europe", "Antarctica", "South America"],
  options_hi: ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 36,
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
  num: 37,
  question_en: "Which organ stores bile?",
  question_hi: "कौन सा अंग पित्त (Bile) संग्रहीत करता है?",
  options_en: ["Gallbladder", "Liver", "Stomach", "Pancreas"],
  options_hi: ["पित्ताशय", "यकृत", "आमाशय", "अग्न्याशय"],
  answer_en: "Gallbladder",
  answer_hi: "पित्ताशय",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yen", "Dollar", "Euro", "Rupee"],
  options_hi: ["येन्", "डॉलर", "यूरो", "रुपया"],
  answer_en: "Yen",
  answer_hi: "येन्",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which planet is known as the Blue Planet?",
  question_hi: "कौन सा ग्रह नीला ग्रह कहलाता है?",
  options_en: ["Earth", "Neptune", "Uranus", "Saturn"],
  options_hi: ["पृथ्वी", "नेपच्यून", "यूरेनस", "शनि"],
  answer_en: "Earth",
  answer_hi: "पृथ्वी",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is 7 × 13?",
  question_hi: "7 × 13 कितना होता है?",
  options_en: ["91", "92", "87", "95"],
  options_hi: ["91", "92", "87", "95"],
  answer_en: "91",
  answer_hi: "91",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who is the Father of the Indian Constitution?",
  question_hi: "भारतीय संविधान के पिता कौन हैं?",
  options_en: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
  options_hi: ["डॉ. बी.आर. अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
  answer_en: "Dr. B.R. Ambedkar",
  answer_hi: "डॉ. बी.आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 42,
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
  num: 43,
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
  num: 44,
  question_en: "Which Indian state is famous for backwaters?",
  question_hi: "कौन सा भारतीय राज्य बैकवाटर्स के लिए प्रसिद्ध है?",
  options_en: ["Kerala", "Goa", "Tamil Nadu", "Karnataka"],
  options_hi: ["केरल", "गोवा", "तमिलनाडु", "कर्नाटक"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is 19 × 5?",
  question_hi: "19 × 5 कितना होता है?",
  options_en: ["95", "90", "100", "85"],
  options_hi: ["95", "90", "100", "85"],
  answer_en: "95",
  answer_hi: "95",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which gas is essential for photosynthesis?",
  question_hi: "फोटोसिंथेसिस के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who is the first woman Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन हैं?",
  options_en: ["Indira Gandhi", "Pratibha Patil", "Sushma Swaraj", "Mamata Banerjee"],
  options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज", "ममता बनर्जी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which planet is known as the Morning Star?",
  question_hi: "कौन सा ग्रह 'सुबह का तारा' कहलाता है?",
  options_en: ["Venus", "Mars", "Jupiter", "Mercury"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "बुध"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the value of √121?",
  question_hi: "√121 का मान क्या है?",
  options_en: ["11", "10", "12", "13"],
  options_hi: ["11", "10", "12", "13"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which instrument measures temperature?",
  question_hi: "तापमान मापने वाला यंत्र कौन सा है?",
  options_en: ["Thermometer", "Barometer", "Hygrometer", "Speedometer"],
  options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "स्पीडोमीटर"],
  answer_en: "Thermometer",
  answer_hi: "थर्मामीटर",
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