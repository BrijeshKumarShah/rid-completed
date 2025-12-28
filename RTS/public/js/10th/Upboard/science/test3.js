const questions = [
  {
    "num": 1,
    "question_hi": "मानव नेत्र में प्रकाश संवेदी कोशिकाएँ कहाँ पाई जाती हैं?",
    "options_hi": ["रेटिना", "कॉर्निया", "आइरिस", "पुतली"],
    "answer_hi": "रेटिना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "अम्लीय वर्षा का मुख्य कारण है:",
    "options_hi": ["CO₂", "SO₂ और NO₂", "O₂", "N₂"],
    "answer_hi": "SO₂ और NO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "प्रकाश संश्लेषण में उत्पन्न होने वाला गैस है:",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "विद्युत मोटर किस सिद्धांत पर कार्य करती है?",
    "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
    "answer_hi": "चुंबकीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "परागण किसके द्वारा होता है?",
    "options_hi": ["वायु, जल, कीट", "केवल वायु", "केवल जल", "केवल कीट"],
    "answer_hi": "वायु, जल, कीट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "परावर्तन के नियम के अनुसार आपतन कोण होता है:",
    "options_hi": ["परावर्तन कोण के बराबर", "परावर्तन कोण से अधिक", "परावर्तन कोण से कम", "इनमें से कोई नहीं"],
    "answer_hi": "परावर्तन कोण के बराबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "एक अवतल दर्पण की फोकस दूरी 15 cm है। इसकी वक्रता त्रिज्या होगी:",
    "options_hi": ["30 cm", "15 cm", "7.5 cm", "45 cm"],
    "answer_hi": "30 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "लेंस सूत्र है:",
    "options_hi": ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "f = v + u", "f = v - u"],
    "answer_hi": "1/f = 1/v - 1/u",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "मानव हृदय में कक्षों की संख्या है:",
    "options_hi": ["2", "3", "4", "5"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विद्युत धारा का SI मात्रक है:",
    "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
    "answer_hi": "एम्पियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "ओजोन परत किससे हमारी रक्षा करती है?",
    "options_hi": ["अवरक्त किरणें", "पराबैंगनी किरणें", "दृश्य प्रकाश", "रेडियो तरंगें"],
    "answer_hi": "पराबैंगनी किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "फैराडे का विद्युत चुंबकीय प्रेरण का नियम किससे संबंधित है?",
    "options_hi": ["विद्युत धारा उत्पन्न करना", "विद्युत बल्ब जलाना", "प्रतिरोध मापना", "ताप उत्पन्न करना"],
    "answer_hi": "विद्युत धारा उत्पन्न करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "रक्त में हीमोग्लोबिन का कार्य है:",
    "options_hi": ["ऑक्सीजन का परिवहन", "कार्बन डाइऑक्साइड का परिवहन", "पोषण पहुँचाना", "रोगाणुओं से लड़ना"],
    "answer_hi": "ऑक्सीजन का परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "प्रकाश का वेग निर्वात में होता है:",
    "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
    "answer_hi": "3 × 10⁸ m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "pH स्केल पर शुद्ध जल का pH मान होता है:",
    "options_hi": ["0", "7", "14", "10"],
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पौधों में जल का परिवहन किसके द्वारा होता है?",
    "options_hi": ["जाइलम", "फ्लोएम", "रंध्र", "मूल रोम"],
    "answer_hi": "जाइलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "विद्युत हीटर किस सिद्धांत पर कार्य करता है?",
    "options_hi": ["चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव", "प्रकाशीय प्रभाव"],
    "answer_hi": "तापीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "निम्नलिखित में से कौन अम्ल है?",
    "options_hi": ["NaOH", "HCl", "NaCl", "Ca(OH)₂"],
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "मनुष्य के मस्तिष्क का सबसे बड़ा भाग है:",
    "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला ओब्लोंगेटा", "थैलेमस"],
    "answer_hi": "सेरिब्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "प्रतिरोध का SI मात्रक है:",
    "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "फोटोसिंथेसिस के लिए आवश्यक प्रकाश किस रंग का होता है?",
    "options_hi": ["हरा", "नीला और लाल", "पीला", "सफेद"],
    "answer_hi": "नीला और लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "एक प्रिज्म द्वारा सूर्य के प्रकाश के विभिन्न रंगों में विभक्त होने को कहते हैं:",
    "options_hi": ["विवर्तन", "प्रकीर्णन", "विक्षेपण", "परावर्तन"],
    "answer_hi": "विक्षेपण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "वनस्पति तेलों का हाइड्रोजनीकरण करने पर प्राप्त होता है:",
    "options_hi": ["वनस्पति घी", "पेट्रोल", "डीजल", "मोम"],
    "answer_hi": "वनस्पति घी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी है:",
    "options_hi": ["फीमर", "स्टेपीज़", "रेडियस", "टिबिया"],
    "answer_hi": "स्टेपीज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "ओम का नियम किसके बीच संबंध बताता है?",
    "options_hi": ["वोल्टेज और करंट", "वोल्टेज और प्रतिरोध", "करंट और प्रतिरोध", "शक्ति और ऊर्जा"],
    "answer_hi": "वोल्टेज और करंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "पौधों में प्रकाश संश्लेषण किस अंग में होता है?",
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "लेंस की शक्ति का मात्रक है:",
    "options_hi": ["मीटर", "डायोप्टर", "वोल्ट", "वाट"],
    "answer_hi": "डायोप्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "निम्नलिखित में से कौन क्षार है?",
    "options_hi": ["H₂SO₄", "HCl", "NaOH", "HNO₃"],
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "मानव शरीर में पाचन क्रिया कहाँ से शुरू होती है?",
    "options_hi": ["मुख", "आमाशय", "छोटी आंत", "बड़ी आंत"],
    "answer_hi": "मुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "विद्युत फ्यूज किस सिद्धांत पर कार्य करता है?",
    "options_hi": ["चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव", "प्रकाशीय प्रभाव"],
    "answer_hi": "तापीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "निम्नलिखित में से कौन नवीकरणीय ऊर्जा स्रोत है?",
    "options_hi": ["कोयला", "पेट्रोलियम", "पवन ऊर्जा", "प्राकृतिक गैस"],
    "answer_hi": "पवन ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "मनुष्य के शरीर का सामान्य तापमान होता है:",
    "options_hi": ["37°C", "98.6°F", "दोनों", "25°C"],
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "लाल लिटमस पत्र नीला हो जाता है जब इसे डुबोया जाता है:",
    "options_hi": ["अम्ल में", "क्षार में", "लवण में", "जल में"],
    "answer_hi": "क्षार में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "न्यूटन के गति के प्रथम नियम को कहा जाता है:",
    "options_hi": ["संवेग संरक्षण का नियम", "जड़त्व का नियम", "क्रिया-प्रतिक्रिया का नियम", "गुरुत्वाकर्षण का नियम"],
    "answer_hi": "जड़त्व का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "क्लोरोफिल किस रंग का होता है?",
    "options_hi": ["लाल", "नीला", "हरा", "पीला"],
    "answer_hi": "हरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विद्युत बल्ब के फिलामेंट के लिए प्रयुक्त धातु है:",
    "options_hi": ["ताँबा", "एल्युमीनियम", "टंगस्टन", "लोहा"],
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
    "options_hi": ["अग्न्याशय", "थायरॉइड", "यकृत", "अधिवृक्क"],
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "अवतल लेंस द्वारा बना प्रतिबिंब हमेशा होता है:",
    "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
    "answer_hi": "आभासी और सीधा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "प्रकाश वर्ष किसकी इकाई है?",
    "options_hi": ["समय", "दूरी", "प्रकाश की तीव्रता", "ऊर्जा"],
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "पौधों में श्वसन किस अंग द्वारा होता है?",
    "options_hi": ["जड़", "पत्ती", "रंध्र", "फूल"],
    "answer_hi": "रंध्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "विद्युत जनरेटर किस सिद्धांत पर कार्य करता है?",
    "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
    "answer_hi": "विद्युत चुंबकीय प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "मानव शरीर में RBC (लाल रक्त कोशिकाओं) का जीवनकाल होता है:",
    "options_hi": ["120 दिन", "90 दिन", "60 दिन", "30 दिन"],
    "answer_hi": "120 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "ध्वनि की चाल सबसे अधिक होती है:",
    "options_hi": ["वायु में", "जल में", "लोहे में", "निर्वात में"],
    "answer_hi": "लोहे में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "कैल्सियम कार्बोनेट का रासायनिक सूत्र है:",
    "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
    "answer_hi": "CaCO₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "मानव शरीर में सबसे लंबी हड्डी है:",
    "options_hi": ["ह्यूमरस", "फीमर", "टिबिया", "रेडियस"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "प्रकाश का परावर्तन किसमें नहीं होता?",
    "options_hi": ["दर्पण", "काँच", "लकड़ी", "पानी"],
    "answer_hi": "लकड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "वनस्पति घी बनाने के लिए किया जाता है:",
    "options_hi": ["हाइड्रोजनीकरण", "ऑक्सीकरण", "भंजन", "निर्जलीकरण"],
    "answer_hi": "हाइड्रोजनीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "मानव मस्तिष्क का भार लगभग होता है:",
    "options_hi": ["1.5 kg", "2.5 kg", "3.5 kg", "4.5 kg"],
    "answer_hi": "1.5 kg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "ओजोन का रासायनिक सूत्र है:",
    "options_hi": ["O₂", "O₃", "O₄", "HO₂"],
    "answer_hi": "O₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "निम्नलिखित में से कौन विद्युत का सुचालक है?",
    "options_hi": ["रबर", "लकड़ी", "ताँबा", "प्लास्टिक"],
    "answer_hi": "ताँबा",
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

