


const questions = [
  {
    "num": 1,
    "question_hi": "मनुष्य में भोजन का पाचन कहाँ आरंभ होता है?",
    "options_hi": ["आमाशय", "मुख", "छोटी आंत", "बड़ी आंत"],
    "answer_hi": "मुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्सर्जित होती है?",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "मनुष्य के हृदय में कितने कक्ष होते हैं?",
    "options_hi": ["दो", "तीन", "चार", "पाँच"],
    "answer_hi": "चार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "विद्युत धारा का SI मात्रक क्या है?",
    "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "वाट"],
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "क्लोरोफिल किस रंग का होता है?",
    "options_hi": ["लाल", "नीला", "हरा", "पीला"],
    "answer_hi": "हरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "निम्नलिखित में से कौन अधातु है?",
    "options_hi": ["लोहा", "ताँबा", "सल्फर", "एल्युमिनियम"],
    "answer_hi": "सल्फर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "वायुमंडल में सबसे अधिक मात्रा में पाई जाने वाली गैस कौन सी है?",
    "options_hi": ["ऑक्सीजन", "आर्गन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "पादप में जल का परिवहन किसके द्वारा होता है?",
    "options_hi": ["फ्लोएम", "जाइलम", "रंध्र", "मूल रोम"],
    "answer_hi": "जाइलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "pH पैमाने का मान कितने से कितने तक होता है?",
    "options_hi": ["0-7", "0-14", "1-10", "7-14"],
    "answer_hi": "0-14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "प्रतिरोध का SI मात्रक क्या है?",
    "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "वाट"],
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "निम्नलिखित में से कौन अम्लीय ऑक्साइड है?",
    "options_hi": ["CaO", "CO₂", "MgO", "Na₂O"],
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "लेंस की क्षमता का मात्रक क्या है?",
    "options_hi": ["मीटर", "डायोप्टर", "वाट", "जूल"],
    "answer_hi": "डायोप्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "मानव नेत्र में किस लेंस का प्रयोग होता है?",
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "समतल-उत्तल", "द्वि-उत्तल लेंस"],
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "निम्नलिखित में से कौन क्षारकीय ऑक्साइड है?",
    "options_hi": ["SO₂", "P₂O₅", "CaO", "CO₂"],
    "answer_hi": "CaO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "फोटोसिंथेसिस के लिए आवश्यक ऊर्जा कहाँ से प्राप्त होती है?",
    "options_hi": ["पानी", "मिट्टी", "सूर्य का प्रकाश", "वायु"],
    "answer_hi": "सूर्य का प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "श्वसन की दर सबसे अधिक किसमें होती है?",
    "options_hi": ["मनुष्य", "हाथी", "चूहा", "गाय"],
    "answer_hi": "चूहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "विद्युत बल्ब के तंतु किस धातु के बने होते हैं?",
    "options_hi": ["ताँबा", "टंगस्टन", "लोहा", "एल्युमिनियम"],
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "विद्युत मोटर किस सिद्धांत पर कार्य करती है?",
    "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
    "answer_hi": "चुंबकीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "अम्ल का pH मान कितना होता है?",
    "options_hi": ["7", "7 से अधिक", "7 से कम", "14"],
    "answer_hi": "7 से कम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "ओज़ोन परत किस गैस से बनी है?",
    "options_hi": ["O₂", "O₃", "CO₂", "N₂"],
    "answer_hi": "O₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "निम्नलिखित में से कौन असंतृप्त हाइड्रोकार्बन है?",
    "options_hi": ["C₂H₆", "C₃H₈", "C₂H₄", "CH₄"],
    "answer_hi": "C₂H₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
    "options_hi": ["साइट्रिक अम्ल", "ऐसीटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_hi": "ऐसीटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "शुक्र ग्रह को 'सांझ का तारा' क्यों कहा जाता है?",
    "options_hi": ["सबसे चमकीला", "सबसे बड़ा", "पृथ्वी के सबसे निकट", "सूर्य के सबसे निकट"],
    "answer_hi": "सबसे चमकीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "रक्त का लाल रंग किसके कारण होता है?",
    "options_hi": ["प्लाज्मा", "हीमोग्लोबिन", "श्वेत रक्त कण", "प्लेटलेट्स"],
    "answer_hi": "हीमोग्लोबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "पृथ्वी पर जीवन के लिए कौन सी गैस आवश्यक है?",
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "आर्गन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "निम्नलिखित में से कौन अवकाशी अंग है?",
    "options_hi": ["अपेंडिक्स", "हृदय", "फेफड़े", "यकृत"],
    "answer_hi": "अपेंडिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "दूध से दही बनाने में कौन सा जीवाणु सहायक होता है?",
    "options_hi": ["राइजोबियम", "लैक्टोबैसिलस", "स्ट्रेप्टोकोकस", "ई. कोलाई"],
    "answer_hi": "लैक्टोबैसिलस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "विद्युत जनरेटर किस सिद्धांत पर कार्य करता है?",
    "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
    "answer_hi": "विद्युत चुंबकीय प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "अंडे के खोल का मुख्य घटक क्या है?",
    "options_hi": ["कैल्शियम कार्बोनेट", "कैल्शियम सल्फेट", "कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
    "answer_hi": "कैल्शियम कार्बोनेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "निम्नलिखित में से कौन सा तत्व आवर्त सारणी का सबसे हल्का तत्व है?",
    "options_hi": ["लिथियम", "हाइड्रोजन", "हीलियम", "बेरिलियम"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "वनस्पति तेल को वनस्पति घी में परिवर्तित करने की प्रक्रिया को क्या कहते हैं?",
    "options_hi": ["हाइड्रोजनीकरण", "ऑक्सीकरण", "किण्वन", "भंजन"],
    "answer_hi": "हाइड्रोजनीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "प्रतिबिंब बनने के लिए आवश्यक है कि प्रकाश की किरणें किस पर पड़ें?",
    "options_hi": ["पारदर्शी सतह", "अपारदर्शी सतह", "चमकदार सतह", "खुरदरी सतह"],
    "answer_hi": "चमकदार सतह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "पादपों में प्रकाशानुवर्तन किसके कारण होता है?",
    "options_hi": ["जल", "गुरुत्व", "प्रकाश", "स्पर्श"],
    "answer_hi": "प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "विद्युत हीटर में किसका प्रयोग होता है?",
    "options_hi": ["टंगस्टन", "नाइक्रोम", "ताँबा", "एल्युमिनियम"],
    "answer_hi": "नाइक्रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "कौन सी गैस ग्रीनहाउस प्रभाव के लिए मुख्य रूप से उत्तरदायी है?",
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "DNA का पूरा नाम क्या है?",
    "options_hi": ["डीऑक्सीराइबो न्यूक्लिक अम्ल", "डाइनाइट्रोजन अम्ल", "डायनामिक न्यूक्लिक अम्ल", "डीऑक्सीराइबो न्यूक्लियोटाइड"],
    "answer_hi": "डीऑक्सीराइबो न्यूक्लिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "निम्नलिखित में से कौन सा यौगिक सोडियम क्लोराइड है?",
    "options_hi": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "प्रकाश की चाल सबसे अधिक किसमें होती है?",
    "options_hi": ["हवा", "पानी", "कांच", "निर्वात"],
    "answer_hi": "निर्वात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "आयोडीन की कमी से कौन सा रोग होता है?",
    "options_hi": ["गण्डमाला", "एनीमिया", "रतौंधी", "स्कर्वी"],
    "answer_hi": "गण्डमाला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "विद्युत बल्ब का आविष्कार किसने किया?",
    "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे", "आइजैक न्यूटन"],
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन सा है?",
    "options_hi": ["मंगल", "बृहस्पति", "चंद्रमा", "शुक्र"],
    "answer_hi": "चंद्रमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "एकल लेंस वाला सूक्ष्मदर्शी क्या कहलाता है?",
    "options_hi": ["संयुक्त सूक्ष्मदर्शी", "सरल सूक्ष्मदर्शी", "इलेक्ट्रॉन सूक्ष्मदर्शी", "दूरदर्शी"],
    "answer_hi": "सरल सूक्ष्मदर्शी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "निम्नलिखित में से कौन सा विटामिन जल में घुलनशील है?",
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "नाइट्रोजन स्थिरीकरण में सहायक जीवाणु कौन सा है?",
    "options_hi": ["राइजोबियम", "लैक्टोबैसिलस", "ई. कोलाई", "स्ट्रेप्टोकोकस"],
    "answer_hi": "राइजोबियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "अम्ल और क्षारक के बीच अभिक्रिया को क्या कहते हैं?",
    "options_hi": ["उदासीनीकरण", "ऑक्सीकरण", "अपचयन", "विस्थापन"],
    "answer_hi": "उदासीनीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "विद्युत धारा का चुंबकीय प्रभाव सबसे पहले किसने खोजा?",
    "options_hi": ["थॉमस एडिसन", "हेनरी", "ओरस्टेड", "फैराडे"],
    "answer_hi": "ओरस्टेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "पौधे में प्रकाश संश्लेषण की क्रिया किस कोशिकांग में होती है?",
    "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "हरित लवक", "केंद्रक"],
    "answer_hi": "हरित लवक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "दूध का pH मान लगभग कितना होता है?",
    "options_hi": ["4.5", "5.5", "6.5", "7.5"],
    "answer_hi": "6.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "निम्नलिखित में से कौन सा धातु सबसे अधिक तन्य है?",
    "options_hi": ["सोना", "चाँदी", "ताँबा", "लोहा"],
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    "options_hi": ["अग्न्याशय", "थायरॉयड", "यकृत", "पीयूष ग्रंथि"],
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  }
]
// Add more questions here...

let currentQuestion = 0; 
let language = "hindi";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
