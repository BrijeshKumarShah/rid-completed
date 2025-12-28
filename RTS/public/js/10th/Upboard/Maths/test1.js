const questions = [
     {
      "num": 1,
      "question_hi": "दो संख्याओं का LCM 1820 और HCF 26 है। यदि एक संख्या 130 है, तो दूसरी संख्या क्या है?",
      "options_hi": ["350", "364", "370", "380"],
      "answer_hi": "364",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_hi": "यदि द्विघात बहुपद x² + kx + k के शून्यक बराबर हैं, तो k का मान क्या है?",
      "options_hi": ["0", "4", "0 या 4", "2"],
      "answer_hi": "0 या 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_hi": "समीकरण युग्म 3x + 2y = 5 और 2x - 3y = 7 हैं:",
      "options_hi": ["असंगत", "संगत", "आश्रित", "इनमें से कोई नहीं"],
      "answer_hi": "संगत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_hi": "द्विघात समीकरण 2x² - √5x + 1 = 0 के मूलों की प्रकृति है:",
      "options_hi": ["वास्तविक और समान", "वास्तविक और भिन्न", "कोई वास्तविक मूल नहीं", "इनमें से कोई नहीं"],
      "answer_hi": "कोई वास्तविक मूल नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_hi": "समान्तर श्रेणी: 10, 7, 4, ... का 30वाँ पद है:",
      "options_hi": ["97", "77", "-77", "-87"],
      "answer_hi": "-77",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफल 64 cm² और 121 cm² हैं। यदि पहले त्रिभुज की एक भुजा 8 cm है, तो दूसरे त्रिभुज की संगत भुजा है:",
      "options_hi": ["11 cm", "12 cm", "13 cm", "14 cm"],
      "answer_hi": "11 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_hi": "बिंदुओं (2, 3) और (4, 1) के बीच की दूरी है:",
      "options_hi": ["2√2", "3√2", "√10", "2√3"],
      "answer_hi": "2√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_hi": "sin 30° + cos 60° का मान है:",
      "options_hi": ["1/2", "1", "√3/2", "0"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_hi": "tan θ = √3, तो θ का मान है:",
      "options_hi": ["30°", "45°", "60°", "90°"],
      "answer_hi": "60°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_hi": "एक वृत्त की त्रिज्या 5 cm है और किसी बिंदु पर स्पर्श रेखा की लंबाई 12 cm है, तो केंद्र से बिंदु की दूरी है:",
      "options_hi": ["7 cm", "13 cm", "17 cm", "11 cm"],
      "answer_hi": "13 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_hi": "त्रिज्या 7 cm वाले वृत्त के एक त्रिज्यखंड का क्षेत्रफल जिसका कोण 60° है:",
      "options_hi": ["77/3 cm²", "154/3 cm²", "77/6 cm²", "154/6 cm²"],
      "answer_hi": "77/3 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_hi": "एक घनाभ के कोरों की संख्या है:",
      "options_hi": ["12", "8", "6", "4"],
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_hi": "एक बेलन के आधार की त्रिज्या 7 cm और ऊँचाई 10 cm है, इसका वक्र पृष्ठीय क्षेत्रफल है:",
      "options_hi": ["440 cm²", "528 cm²", "616 cm²", "704 cm²"],
      "answer_hi": "440 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_hi": "एक गोले का आयतन 38808 cm³ है, तो इसकी त्रिज्या है: (π=22/7)",
      "options_hi": ["21 cm", "14 cm", "7 cm", "28 cm"],
      "answer_hi": "21 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_hi": "आँकड़ों 6, 4, 3, 8, 9, 12, 13, 9 का माध्य है:",
      "options_hi": ["8", "7.5", "9", "7"],
      "answer_hi": "8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_hi": "किसी घटना के होने की प्रायिकता हमेशा होती है:",
      "options_hi": ["0 और 1 के बीच", "0 से अधिक", "1 से कम या बराबर", "उपरोक्त सभी"],
      "answer_hi": "उपरोक्त सभी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_hi": "संख्या 7 × 11 × 13 + 13 है:",
      "options_hi": ["अभाज्य संख्या", "भाज्य संख्या", "न तो अभाज्य न भाज्य", "इनमें से कोई नहीं"],
      "answer_hi": "भाज्य संख्या",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_hi": "द्विघात बहुपद के शून्यकों का योग 5 और गुणनफल 6 है, बहुपद है:",
      "options_hi": ["x² - 5x + 6", "x² + 5x + 6", "x² - 5x - 6", "x² + 5x - 6"],
      "answer_hi": "x² - 5x + 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_hi": "यदि रेखाएँ 3x + 2ky = 2 और 2x + 5y + 1 = 0 समांतर हैं, तो k का मान है:",
      "options_hi": ["-5/4", "15/4", "4/15", "-4/5"],
      "answer_hi": "15/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_hi": "द्विघात समीकरण x² - 3x - 10 = 0 के मूल हैं:",
      "options_hi": ["2, -5", "-2, 5", "2, 5", "-2, -5"],
      "answer_hi": "-2, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_hi": "समान्तर श्रेणी 3, 8, 13, ... का कौन-सा पद 78 है?",
      "options_hi": ["15वाँ", "16वाँ", "17वाँ", "18वाँ"],
      "answer_hi": "16वाँ",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_hi": "थेल्स प्रमेय किससे संबंधित है?",
      "options_hi": ["समरूप त्रिभुज", "सर्वांगसम त्रिभुज", "वृत्त", "समान्तर चतुर्भुज"],
      "answer_hi": "समरूप त्रिभुज",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_hi": "बिंदु (0, 5), (0, -9) के बीच की दूरी है:",
      "options_hi": ["4", "14", "5", "9"],
      "answer_hi": "14",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_hi": "1 - tan² 45° / 1 + tan² 45° का मान है:",
      "options_hi": ["tan 90°", "0", "1", "2"],
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_hi": "sin A = 3/4, तो cos A है:",
      "options_hi": ["√7/4", "4/√7", "3/√7", "1/√7"],
      "answer_hi": "√7/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_hi": "किसी वृत्त के बाहर स्थित बिंदु से वृत्त पर खींची गई स्पर्श रेखाओं की संख्या होती है:",
      "options_hi": ["1", "2", "3", "अनंत"],
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_hi": "एक घड़ी की मिनट वाली सुई की लंबाई 14 cm है। 5 मिनट में इस सुई द्वारा रचित क्षेत्रफल है:",
      "options_hi": ["154/3 cm²", "154 cm²", "308/3 cm²", "77 cm²"],
      "answer_hi": "154/3 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_hi": "एक शंकु के आधार की त्रिज्या 7 cm और तिरछी ऊँचाई 25 cm है, इसकी ऊँचाई है:",
      "options_hi": ["24 cm", "20 cm", "18 cm", "22 cm"],
      "answer_hi": "24 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_hi": "एक अर्धगोले का कुल पृष्ठीय क्षेत्रफल (त्रिज्या r) है:",
      "options_hi": ["2πr²", "3πr²", "4πr²", "πr²"],
      "answer_hi": "3πr²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_hi": "आँकड़ों 14, 25, 14, 28, 18, 17, 18, 14, 23, 22, 14, 18 का बहुलक है:",
      "options_hi": ["14", "16", "18", "20"],
      "answer_hi": "14",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_hi": "52 पत्तों की गड्डी में से एक लाल रंग का बादशाह प्राप्त होने की प्रायिकता है:",
      "options_hi": ["1/26", "1/13", "1/52", "1/4"],
      "answer_hi": "1/26",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_hi": "√2 है एक:",
      "options_hi": ["परिमेय संख्या", "अपरिमेय संख्या", "पूर्णांक", "प्राकृत संख्या"],
      "answer_hi": "अपरिमेय संख्या",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_hi": "बहुपद p(x) = 2x + 5 का शून्यक है:",
      "options_hi": ["5/2", "-5/2", "2/5", "-2/5"],
      "answer_hi": "-5/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_hi": "समीकरण x + y = 7 और 2x + 2y = 14 के हल हैं:",
      "options_hi": ["अद्वितीय", "कोई हल नहीं", "अनंत हल", "दो हल"],
      "answer_hi": "अनंत हल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_hi": "द्विघात समीकरण 2x² + x - 528 = 0 का एक मूल है:",
      "options_hi": ["12", "16", "18", "22"],
      "answer_hi": "16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_hi": "समान्तर श्रेणी 21, 18, 15, ... का कौन-सा पद शून्य है?",
      "options_hi": ["7वाँ", "8वाँ", "9वाँ", "10वाँ"],
      "answer_hi": "8वाँ",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_hi": "त्रिभुजों की समरूपता के लिए कौन-सी कसौटी नहीं है?",
      "options_hi": ["SSS", "SAS", "AAA", "RHS"],
      "answer_hi": "AAA",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_hi": "वह अनुपात जिसमें बिंदु (2, -3), बिंदुओं (5, 6) और (-1, 4) को जोड़ने वाले रेखाखंड को विभाजित करता है:",
      "options_hi": ["1:2", "2:1", "2:3", "3:2"],
      "answer_hi": "1:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_hi": "यदि sin θ = cos θ, तो θ का मान है:",
      "options_hi": ["30°", "45°", "60°", "90°"],
      "answer_hi": "45°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_hi": "sec² θ - tan² θ बराबर है:",
      "options_hi": ["0", "1", "2", "-1"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_hi": "किसी वृत्त के केंद्र से 25 cm दूरी पर स्थित बिंदु से वृत्त पर स्पर्श रेखा की लंबाई 24 cm है। वृत्त की त्रिज्या है:",
      "options_hi": ["7 cm", "12 cm", "15 cm", "24 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_hi": "त्रिज्या 14 cm वाले वृत्त के चतुर्थांश का क्षेत्रफल है:",
      "options_hi": ["154 cm²", "77 cm²", "308 cm²", "616 cm²"],
      "answer_hi": "154 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_hi": "एक लंब वृत्तीय शंकु का आयतन 1570 cm³ है और ऊँचाई 15 cm है, आधार की त्रिज्या है: (π=3.14)",
      "options_hi": ["5 cm", "10 cm", "15 cm", "20 cm"],
      "answer_hi": "10 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_hi": "एक गोले का पृष्ठीय क्षेत्रफल 616 cm² है, त्रिज्या है:",
      "options_hi": ["5 cm", "6 cm", "7 cm", "8 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_hi": "प्रथम 10 प्राकृत संख्याओं का माध्य है:",
      "options_hi": ["5", "5.5", "6", "6.5"],
      "answer_hi": "5.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_hi": "एक पासे को फेंकने पर 3 से बड़ी संख्या आने की प्रायिकता है:",
      "options_hi": ["1/6", "1/3", "1/2", "2/3"],
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_hi": "HCF × LCM = ?",
      "options_hi": ["दोनों संख्याओं का योग", "दोनों संख्याओं का अंतर", "दोनों संख्याओं का गुणनफल", "दोनों संख्याओं का भागफल"],
      "answer_hi": "दोनों संख्याओं का गुणनफल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_hi": "यदि α और β बहुपद x² - 4x + 3 के शून्यक हैं, तो α + β = ?",
      "options_hi": ["4", "3", "-4", "-3"],
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_hi": "समीकरण x - 2y = 4 के हलों की संख्या है:",
      "options_hi": ["एक", "दो", "अनंत", "कोई नहीं"],
      "answer_hi": "अनंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_hi": "यदि किसी AP का nवाँ पद 2n + 5 है, तो पहला पद है:",
      "options_hi": ["5", "7", "9", "11"],
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    }
  ]




// --------------------------- GLOBAL VARS -----------------------------
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

