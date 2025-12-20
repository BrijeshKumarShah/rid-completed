const questions = [
  {
  num: 1,
  question_en: "What is 15 + 27?",
  question_hi: "15 + 27 कितना होता है?",
  options_en: ["42", "40", "43", "41"],
  options_hi: ["42", "40", "43", "41"],
  answer_en: "42",
  answer_hi: "42",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the chemical symbol of water?",
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
  question_en: "Who is the President of India?",
  question_hi: "भारत के राष्ट्रपति कौन हैं?",
  options_en: ["Droupadi Murmu", "Narendra Modi", "Amit Shah", "Ram Nath Kovind"],
  options_hi: ["द्रौपदी मुर्मू", "नरेंद्र मोदी", "अमित शाह", "रामनाथ कोविंद"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल क्या है?",
  options_en: ["12", "14", "16", "10"],
  options_hi: ["12", "14", "16", "10"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 5,
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
  num: 6,
  question_en: "Who is known as the Father of the Nation?",
  question_hi: "राष्ट्रपिता किसे कहा जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhash Bose"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष बोस"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is 20% of 150?",
  question_hi: "150 का 20% कितना है?",
  options_en: ["30", "25", "35", "40"],
  options_hi: ["30", "25", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 8,
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
  num: 9,
  question_en: "Capital of India is?",
  question_hi: "भारत की राजधानी क्या है?",
  options_en: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which is the largest continent?",
  question_hi: "सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "Australia"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who invented the bulb?",
  question_hi: "बल्ब का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Newton", "Einstein", "Tesla"],
  options_hi: ["थॉमस एडिसन", "न्यूटन", "आइंस्टीन", "टेस्ला"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडिसन",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the square of 15?",
  question_hi: "15 का वर्ग कितना है?",
  options_en: ["225", "215", "235", "210"],
  options_hi: ["225", "215", "235", "210"],
  answer_en: "225",
  answer_hi: "225",
  attempted: false,
  selected: ""
},
{
  num: 13,
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
  num: 14,
  question_en: "Who is known as the Missile Man of India?",
  question_hi: "भारत के मिसाइल मैन कौन कहलाते हैं?",
  options_en: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
  options_hi: ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"],
  answer_en: "A.P.J. Abdul Kalam",
  answer_hi: "ए.पी.जे. अब्दुल कलाम",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which gas is used for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण में कौन सी गैस उपयोग होती है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 16,
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
  num: 17,
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
  num: 18,
  question_en: "Which city is called the Pink City?",
  question_hi: "गुलाबी शहर किसे कहा जाता है?",
  options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
  options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सा धातु कमरे के तापमान पर तरल होता है?",
  options_en: ["Mercury", "Iron", "Gold", "Silver"],
  options_hi: ["पारा", "लोहा", "सोना", "चांदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 20,
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
  num: 21,
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
  num: 22,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Bose"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "सुभाष बोस"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which vitamin is obtained from sunlight?",
  question_hi: "सूर्य के प्रकाश से कौन सा विटामिन मिलता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is 45 ÷ 5?",
  question_hi: "45 ÷ 5 कितना होता है?",
  options_en: ["9", "8", "7", "10"],
  options_hi: ["9", "8", "7", "10"],
  answer_en: "9",
  answer_hi: "9",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which Indian state has the largest population?",
  question_hi: "सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
  options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
  answer_en: "Uttar Pradesh",
  answer_hi: "उत्तर प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which gas is filled in balloons?",
  question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
  options_en: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  options_hi: ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the capital of Madhya Pradesh?",
  question_hi: "मध्य प्रदेश की राजधानी क्या है?",
  options_en: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
  options_hi: ["भोपाल", "इंदौर", "जबलपुर", "ग्वालियर"],
  answer_en: "Bhopal",
  answer_hi: "भोपाल",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which is the smallest planet in the solar system?",
  question_hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
  options_en: ["Mercury", "Mars", "Venus", "Earth"],
  options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 29,
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
  num: 30,
  question_en: "Who is called the Iron Man of India?",
  question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
  options_en: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "B.R. Ambedkar", "Subhash Bose"],
  options_hi: ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "बी.आर. आंबेडकर", "सुभाष बोस"],
  answer_en: "Sardar Vallabhbhai Patel",
  answer_hi: "सरदार वल्लभभाई पटेल",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is 7 × 8?",
  question_hi: "7 × 8 कितना होता है?",
  options_en: ["56", "54", "48", "64"],
  options_hi: ["56", "54", "48", "64"],
  answer_en: "56",
  answer_hi: "56",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which ocean is the largest?",
  question_hi: "सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
  options_hi: ["प्रशांत महासागर", "हिंद महासागर", "अटलांटिक महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 33,
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
  num: 34,
  question_en: "What is the national flower of India?",
  question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
  options_en: ["Lotus", "Rose", "Lily", "Sunflower"],
  options_hi: ["कमल", "गुलाब", "लिली", "सूरजमुखी"],
  answer_en: "Lotus",
  answer_hi: "कमल",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is 20% of 300?",
  question_hi: "300 का 20% कितना है?",
  options_en: ["60", "50", "70", "80"],
  options_hi: ["60", "50", "70", "80"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which country is known as the Land of Rising Sun?",
  question_hi: "उगते सूरज की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "Thailand", "Korea"],
  options_hi: ["जापान", "चीन", "थाईलैंड", "कोरिया"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 37,
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
  num: 38,
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
  num: 39,
  question_en: "Which day is celebrated as Independence Day?",
  question_hi: "स्वतंत्रता दिवस कब मनाया जाता है?",
  options_en: ["15 August", "26 January", "2 October", "14 November"],
  options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 नवंबर"],
  answer_en: "15 August",
  answer_hi: "15 अगस्त",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the full form of ATM?",
  question_hi: "ATM का पूरा नाम क्या है?",
  options_en: ["Automated Teller Machine", "Any Time Money", "Auto Transfer Machine", "All Time Money"],
  options_hi: ["ऑटोमेटेड टेलर मशीन", "एनी टाइम मनी", "ऑटो ट्रांसफर मशीन", "ऑल टाइम मनी"],
  answer_en: "Automated Teller Machine",
  answer_hi: "ऑटोमेटेड टेलर मशीन",
  attempted: false,
  selected: ""
},
{
  num: 41,
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
  num: 42,
  question_en: "What is the capital of Uttar Pradesh?",
  question_hi: "उत्तर प्रदेश की राजधानी क्या है?",
  options_en: ["Lucknow", "Kanpur", "Agra", "Varanasi"],
  options_hi: ["लखनऊ", "कानपुर", "आगरा", "वाराणसी"],
  answer_en: "Lucknow",
  answer_hi: "लखनऊ",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is 9 × 9?",
  question_hi: "9 × 9 कितना होता है?",
  options_en: ["81", "72", "90", "99"],
  options_hi: ["81", "72", "90", "99"],
  answer_en: "81",
  answer_hi: "81",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who discovered gravity?",
  question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
  options_en: ["Isaac Newton", "Einstein", "Galileo", "Tesla"],
  options_hi: ["आइजैक न्यूटन", "आइंस्टीन", "गैलीलियो", "टेस्ला"],
  answer_en: "Isaac Newton",
  answer_hi: "आइजैक न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which metal is used to make electric wires?",
  question_hi: "बिजली के तार किस धातु से बनाए जाते हैं?",
  options_en: ["Copper", "Iron", "Silver", "Gold"],
  options_hi: ["तांबा", "लोहा", "चांदी", "सोना"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the capital of Japan?",
  question_hi: "जापान की राजधानी क्या है?",
  options_en: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
  options_hi: ["टोक्यो", "ओसाका", "क्योटो", "हिरोशिमा"],
  answer_en: "Tokyo",
  answer_hi: "टोक्यो",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which gas is essential for respiration?",
  question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Parrot", "Eagle", "Sparrow"],
  options_hi: ["मोर", "तोता", "गरुड़", "गौरैया"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which instrument measures air pressure?",
  question_hi: "वायुदाब मापने का यंत्र कौन सा है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the SI unit of electric current?",
  question_hi: "विद्युत धारा की SI इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Watt"],
  options_hi: ["एम्पियर", "वोल्ट", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पियर",
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