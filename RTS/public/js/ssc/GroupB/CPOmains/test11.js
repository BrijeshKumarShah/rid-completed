const questions = [
  {
  num: 1,
  question_en: "What is 18 + 24?",
  question_hi: "18 + 24 कितना होता है?",
  options_en: ["42", "40", "44", "46"],
  options_hi: ["42", "40", "44", "46"],
  answer_en: "42",
  answer_hi: "42",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the capital of Maharashtra?",
  question_hi: "महाराष्ट्र की राजधानी क्या है?",
  options_en: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  options_hi: ["मुंबई", "पुणे", "नागपुर", "नासिक"],
  answer_en: "Mumbai",
  answer_hi: "मुंबई",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which vitamin helps in blood clotting?",
  question_hi: "कौन सा विटामिन रक्त का थक्का जमाने में सहायक है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 4,
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
  num: 5,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajendra Prasad"],
  options_hi: ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which river flows through Delhi?",
  question_hi: "दिल्ली से कौन सी नदी बहती है?",
  options_en: ["Yamuna", "Ganga", "Saraswati", "Godavari"],
  options_hi: ["यमुना", "गंगा", "सरस्वती", "गोदावरी"],
  answer_en: "Yamuna",
  answer_hi: "यमुना",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is 25% of 400?",
  question_hi: "400 का 25% कितना है?",
  options_en: ["100", "75", "125", "150"],
  options_hi: ["100", "75", "125", "150"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which is the hardest natural substance?",
  question_hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  options_en: ["Diamond", "Iron", "Gold", "Silver"],
  options_hi: ["हीरा", "लोहा", "सोना", "चांदी"],
  answer_en: "Diamond",
  answer_hi: "हीरा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the full form of CPU?",
  question_hi: "CPU का पूरा नाम क्या है?",
  options_en: ["Central Processing Unit", "Computer Power Unit", "Central Program Unit", "Control Processing Unit"],
  options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
  answer_en: "Central Processing Unit",
  answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which country hosted the 2016 Olympics?",
  question_hi: "2016 ओलंपिक की मेजबानी किस देश ने की?",
  options_en: ["Brazil", "China", "UK", "Japan"],
  options_hi: ["ब्राज़ील", "चीन", "यूके", "जापान"],
  answer_en: "Brazil",
  answer_hi: "ब्राज़ील",
  attempted: false,
  selected: ""
},
{
  num: 11,
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
  num: 12,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह किसे कहा जाता है?",
  options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
  options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is 56 ÷ 7?",
  question_hi: "56 ÷ 7 कितना होता है?",
  options_en: ["8", "6", "7", "9"],
  options_hi: ["8", "6", "7", "9"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who is the Father of the Indian Constitution?",
  question_hi: "भारतीय संविधान के जनक कौन हैं?",
  options_en: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Rajendra Prasad"],
  options_hi: ["डॉ. बी.आर. आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "राजेंद्र प्रसाद"],
  answer_en: "Dr. B.R. Ambedkar",
  answer_hi: "डॉ. बी.आर. आंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 15,
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
  num: 16,
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
  num: 17,
  question_en: "Which metal is the best conductor of electricity?",
  question_hi: "बिजली का सबसे अच्छा चालक कौन सा धातु है?",
  options_en: ["Silver", "Copper", "Aluminium", "Iron"],
  options_hi: ["चांदी", "तांबा", "एल्युमिनियम", "लोहा"],
  answer_en: "Silver",
  answer_hi: "चांदी",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
  options_en: ["Tiger", "Lion", "Elephant", "Leopard"],
  options_hi: ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the value of π (approx)?",
  question_hi: "π का लगभग मान क्या है?",
  options_en: ["3.14", "3.41", "3.24", "3.04"],
  options_hi: ["3.14", "3.41", "3.24", "3.04"],
  answer_en: "3.14",
  answer_hi: "3.14",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
  options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जाकिर हुसैन", "जवाहरलाल नेहरू"],
  answer_en: "Dr. Rajendra Prasad",
  answer_hi: "डॉ. राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the square of 14?",
  question_hi: "14 का वर्ग कितना है?",
  options_en: ["196", "186", "176", "166"],
  options_hi: ["196", "186", "176", "166"],
  answer_en: "196",
  answer_hi: "196",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which Indian state is known as the Land of Five Rivers?",
  question_hi: "पाँच नदियों की भूमि किस राज्य को कहा जाता है?",
  options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
  options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "बिहार"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 23,
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
  num: 24,
  question_en: "Who wrote 'Vande Mataram'?",
  question_hi: "'वंदे मातरम्' किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Bose", "Sarojini Naidu"],
  options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष बोस", "सरोजिनी नायडू"],
  answer_en: "Bankim Chandra Chatterjee",
  answer_hi: "बंकिम चंद्र चट्टोपाध्याय",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which vitamin is also called Ascorbic Acid?",
  question_hi: "किस विटामिन को एस्कॉर्बिक एसिड कहा जाता है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 26,
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
  num: 27,
  question_en: "Which is the largest desert in the world?",
  question_hi: "दुनिया का सबसे बड़ा मरुस्थल कौन सा है?",
  options_en: ["Sahara", "Gobi", "Thar", "Kalahari"],
  options_hi: ["सहारा", "गोबी", "थार", "कालाहारी"],
  answer_en: "Sahara",
  answer_hi: "सहारा",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the SI unit of work?",
  question_hi: "कार्य की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who was known as the Nightingale of India?",
  question_hi: "भारत की कोकिला किसे कहा जाता है?",
  options_en: ["Sarojini Naidu", "Indira Gandhi", "Lata Mangeshkar", "Annie Besant"],
  options_hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "लता मंगेशकर", "एनी बेसेंट"],
  answer_en: "Sarojini Naidu",
  answer_hi: "सरोजिनी नायडू",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is 11 × 11?",
  question_hi: "11 × 11 कितना होता है?",
  options_en: ["121", "111", "131", "101"],
  options_hi: ["121", "111", "131", "101"],
  answer_en: "121",
  answer_hi: "121",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which organ controls the human body?",
  question_hi: "मानव शरीर को कौन सा अंग नियंत्रित करता है?",
  options_en: ["Brain", "Heart", "Liver", "Kidney"],
  options_hi: ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
  answer_en: "Brain",
  answer_hi: "मस्तिष्क",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the capital of Kerala?",
  question_hi: "केरल की राजधानी क्या है?",
  options_en: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Alappuzha"],
  options_hi: ["तिरुवनंतपुरम", "कोच्चि", "कोझिकोड", "अलप्पुझा"],
  answer_en: "Thiruvananthapuram",
  answer_hi: "तिरुवनंतपुरम",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is 1000 ÷ 25?",
  question_hi: "1000 ÷ 25 कितना होता है?",
  options_en: ["40", "35", "45", "50"],
  options_hi: ["40", "35", "45", "50"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which gas is known as laughing gas?",
  question_hi: "हंसाने वाली गैस कौन सी है?",
  options_en: ["Nitrous Oxide", "Oxygen", "Carbon Monoxide", "Hydrogen"],
  options_hi: ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "कार्बन मोनोऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrous Oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 35,
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
  num: 36,
  question_en: "What is the perimeter of a square of side 5 cm?",
  question_hi: "5 सेमी भुजा वाले वर्ग का परिमाप कितना है?",
  options_en: ["20 cm", "25 cm", "10 cm", "15 cm"],
  options_hi: ["20 सेमी", "25 सेमी", "10 सेमी", "15 सेमी"],
  answer_en: "20 cm",
  answer_hi: "20 सेमी",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which planet has rings around it?",
  question_hi: "किस ग्रह के चारों ओर छल्ले होते हैं?",
  options_en: ["Saturn", "Mars", "Earth", "Mercury"],
  options_hi: ["शनि", "मंगल", "पृथ्वी", "बुध"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yen", "Won", "Dollar", "Peso"],
  options_hi: ["येन", "वोन", "डॉलर", "पेसो"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which blood group is known as universal donor?",
  question_hi: "सार्वभौमिक दाता किस रक्त समूह को कहा जाता है?",
  options_en: ["O Negative", "O Positive", "AB Positive", "A Negative"],
  options_hi: ["O नेगेटिव", "O पॉजिटिव", "AB पॉजिटिव", "A नेगेटिव"],
  answer_en: "O Negative",
  answer_hi: "O नेगेटिव",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is 3/4 of 200?",
  question_hi: "200 का 3/4 कितना है?",
  options_en: ["150", "100", "125", "175"],
  options_hi: ["150", "100", "125", "175"],
  answer_en: "150",
  answer_hi: "150",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which metal is used in making coins?",
  question_hi: "सिक्के बनाने में किस धातु का प्रयोग होता है?",
  options_en: ["Nickel", "Sodium", "Mercury", "Lead"],
  options_hi: ["निकेल", "सोडियम", "पारा", "सीसा"],
  answer_en: "Nickel",
  answer_hi: "निकेल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the capital of Assam?",
  question_hi: "असम की राजधानी क्या है?",
  options_en: ["Dispur", "Guwahati", "Silchar", "Jorhat"],
  options_hi: ["दिसपुर", "गुवाहाटी", "सिलचर", "जोरहाट"],
  answer_en: "Dispur",
  answer_hi: "दिसपुर",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which part of plant conducts food?",
  question_hi: "पौधे का कौन सा भाग भोजन का संवहन करता है?",
  options_en: ["Phloem", "Xylem", "Root", "Leaf"],
  options_hi: ["फ्लोएम", "जाइलम", "जड़", "पत्ता"],
  answer_en: "Phloem",
  answer_hi: "फ्लोएम",
  attempted: false,
  selected: ""
},
{
  num: 44,
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
  num: 45,
  question_en: "Which continent is the smallest?",
  question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Australia", "Europe", "Antarctica", "South America"],
  options_hi: ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which acid is present in lemon?",
  question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
  options_en: ["Citric Acid", "Lactic Acid", "Acetic Acid", "Sulphuric Acid"],
  options_hi: ["सिट्रिक अम्ल", "लैक्टिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल"],
  answer_en: "Citric Acid",
  answer_hi: "सिट्रिक अम्ल",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who is the author of Ramayana?",
  question_hi: "रामायण के लेखक कौन हैं?",
  options_en: ["Valmiki", "Ved Vyasa", "Tulsidas", "Kalidas"],
  options_hi: ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
  answer_en: "Valmiki",
  answer_hi: "वाल्मीकि",
  attempted: false,
  selected: ""
},
{
  num: 48,
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
  num: 49,
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
  num: 50,
  question_en: "What is the average of 10, 20 and 30?",
  question_hi: "10, 20 और 30 का औसत कितना है?",
  options_en: ["20", "25", "15", "30"],
  options_hi: ["20", "25", "15", "30"],
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