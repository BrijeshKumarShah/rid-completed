const questions =[
    {
      "num": 1,
      "question_hi": "संख्या √0.09 है:",
      "options_hi": ["0.3", "0.03", "0.003", "3"],
      "answer_hi": "0.3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_hi": "बहुपद 3x² - 12 के शून्यक हैं:",
      "options_hi": ["2, -2", "4, -4", "√2, -√2", "2√2, -2√2"],
      "answer_hi": "2, -2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_hi": "समीकरण युग्म 2x + 3y = 5 और 4x + 6y = 15 का हल है:",
      "options_hi": ["अद्वितीय", "कोई हल नहीं", "अनंत हल", "दो हल"],
      "answer_hi": "कोई हल नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_hi": "द्विघात समीकरण x² + 2x - 3 = 0 के मूलों का योग है:",
      "options_hi": ["2", "-2", "3", "-3"],
      "answer_hi": "-2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_hi": "समांतर श्रेणी 2, 5, 8, 11, ... का 15वाँ पद है:",
      "options_hi": ["44", "47", "50", "53"],
      "answer_hi": "44",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफल 36 cm² और 100 cm² हैं। उनकी संगत ऊँचाइयों का अनुपात है:",
      "options_hi": ["3:5", "6:10", "9:25", "36:100"],
      "answer_hi": "3:5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_hi": "बिंदु (1, 1) और (5, 5) के बीच की दूरी है:",
      "options_hi": ["4", "4√2", "5", "5√2"],
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_hi": "sin 45° + cos 45° - tan 45° का मान है:",
      "options_hi": ["0", "√2 - 1", "1", "√2"],
      "answer_hi": "√2 - 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_hi": "यदि cot θ = 5/12, तो sin θ = ?",
      "options_hi": ["5/13", "12/13", "13/5", "13/12"],
      "answer_hi": "12/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_hi": "एक वृत्त की त्रिज्या 13 cm है। 24 cm लंबी जीवा की केंद्र से दूरी है:",
      "options_hi": ["5 cm", "7 cm", "10 cm", "12 cm"],
      "answer_hi": "5 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_hi": "त्रिज्या 14 cm वाले वृत्त के एक त्रिज्यखंड का क्षेत्रफल जिसका कोण 90° है: (π=22/7)",
      "options_hi": ["154 cm²", "308 cm²", "462 cm²", "616 cm²"],
      "answer_hi": "154 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_hi": "एक घन का पृष्ठीय क्षेत्रफल 150 cm² है। इसकी कोर की लंबाई है:",
      "options_hi": ["5 cm", "6 cm", "7 cm", "8 cm"],
      "answer_hi": "5 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_hi": "एक बेलन का आयतन 4620 cm³ और ऊँचाई 15 cm है। आधार की त्रिज्या है: (π=22/7)",
      "options_hi": ["7 cm", "14 cm", "21 cm", "28 cm"],
      "answer_hi": "14 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_hi": "एक गोले का पृष्ठीय क्षेत्रफल 2464 cm² है। इसकी त्रिज्या है: (π=22/7)",
      "options_hi": ["7 cm", "14 cm", "21 cm", "28 cm"],
      "answer_hi": "14 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_hi": "आँकड़ों 5, 7, 9, 11, 13, 15, 17, 19, 21 का माध्यक है:",
      "options_hi": ["11", "12", "13", "14"],
      "answer_hi": "13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_hi": "दो सिक्कों को एक साथ उछालने पर दोनों चित आने की प्रायिकता है:",
      "options_hi": ["1/4", "1/2", "3/4", "1"],
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_hi": "संख्या 9 और 15 का HCF है:",
      "options_hi": ["3", "5", "9", "15"],
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_hi": "यदि बहुपद x² - 4x + k के शून्यक समान हैं, तो k = ?",
      "options_hi": ["2", "4", "6", "8"],
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_hi": "k के किस मान के लिए समीकरण युग्म 3x + 4y = 10 और 9x + 12y = k के अनंत हल होंगे?",
      "options_hi": ["20", "30", "40", "50"],
      "answer_hi": "30",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_hi": "द्विघात समीकरण 5x² - 6x - 2 = 0 के विविक्तकर का मान है:",
      "options_hi": ["56", "76", "36", "16"],
      "answer_hi": "76",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_hi": "समांतर श्रेणी 1, 4, 7, 10, ... के प्रथम 12 पदों का योग है:",
      "options_hi": ["210", "222", "234", "246"],
      "answer_hi": "222",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_hi": "त्रिभुजों की समरूपता के लिए SAS कसौटी में 'S' क्या दर्शाता है?",
      "options_hi": ["भुजा", "कोण", "क्षेत्रफल", "परिमाप"],
      "answer_hi": "भुजा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_hi": "बिंदु (2, 3), (5, 7), (8, 11) और (5, 7) से बनने वाला चतुर्भुज है:",
      "options_hi": ["वर्ग", "आयत", "समचतुर्भुज", "बिंदु"],
      "answer_hi": "बिंदु",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_hi": "2 cos 30° sin 30° का मान है:",
      "options_hi": ["sin 60°", "cos 60°", "tan 60°", "cot 60°"],
      "answer_hi": "sin 60°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_hi": "यदि sec θ = 5/4, तो tan θ = ?",
      "options_hi": ["3/4", "4/3", "3/5", "5/3"],
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_hi": "एक वृत्त के केंद्र से 25 cm दूर स्थित बिंदु से वृत्त पर स्पर्श रेखा की लंबाई 24 cm है। वृत्त का क्षेत्रफल है:",
      "options_hi": ["49π cm²", "196π cm²", "441π cm²", "784π cm²"],
      "answer_hi": "49π cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_hi": "एक घड़ी की मिनट वाली सुई 10.5 cm लंबी है। 20 मिनट में सुई द्वारा तय किया गया क्षेत्रफल है: (π=22/7)",
      "options_hi": ["115.5 cm²", "231 cm²", "346.5 cm²", "462 cm²"],
      "answer_hi": "115.5 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_hi": "एक शंकु की ऊँचाई 9 cm और आधार की त्रिज्या 12 cm है। इसकी तिर्यक ऊँचाई है:",
      "options_hi": ["13 cm", "15 cm", "17 cm", "21 cm"],
      "answer_hi": "15 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_hi": "दो गोलों के आयतनों का अनुपात 1:27 है। उनकी त्रिज्याओं का अनुपात है:",
      "options_hi": ["1:3", "1:9", "1:27", "1:81"],
      "answer_hi": "1:3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_hi": "प्रथम 40 प्राकृत संख्याओं का माध्य है:",
      "options_hi": ["20.5", "21", "21.5", "22"],
      "answer_hi": "20.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_hi": "52 पत्तों की गड्डी से एक काले रंग का पत्ता निकालने की प्रायिकता है:",
      "options_hi": ["1/2", "1/4", "1/13", "1/26"],
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_hi": "संख्या 1.414213... है:",
      "options_hi": ["परिमेय", "अपरिमेय", "पूर्णांक", "प्राकृतिक"],
      "answer_hi": "अपरिमेय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_hi": "बहुपद 4x² - 4x + 1 के शून्यक हैं:",
      "options_hi": ["1/2, 1/2", "1, 1", "-1/2, -1/2", "2, 2"],
      "answer_hi": "1/2, 1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_hi": "समीकरण x - 2y = 4 का x-अंतःखंड है:",
      "options_hi": ["2", "4", "-2", "-4"],
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_hi": "द्विघात समीकरण x² + 5x + 6 = 0 के मूल हैं:",
      "options_hi": ["2, 3", "-2, -3", "2, -3", "-2, 3"],
      "answer_hi": "-2, -3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_hi": "समांतर श्रेणी 10, 7, 4, ... का 8वाँ पद है:",
      "options_hi": ["-11", "-14", "-17", "-20"],
      "answer_hi": "-11",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_hi": "यदि ΔABC ~ ΔDEF और AB/DE = 2/5 है, तो ΔABC और ΔDEF के क्षेत्रफलों का अनुपात है:",
      "options_hi": ["2:5", "4:25", "25:4", "5:2"],
      "answer_hi": "4:25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_hi": "बिंदु (-3, -4) मूल बिंदु से कितनी दूरी पर है?",
      "options_hi": ["3", "4", "5", "7"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_hi": "cos 45° × sec 45° + sin 45° × cosec 45° का मान है:",
      "options_hi": ["1", "2", "√2", "2√2"],
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_hi": "यदि sin θ = cos θ, तो θ का मान हो सकता है:",
      "options_hi": ["30°", "45°", "60°", "90°"],
      "answer_hi": "45°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_hi": "एक वृत्त के केंद्र से 13 cm दूर स्थित बिंदु से वृत्त पर स्पर्श रेखा की लंबाई 12 cm है। वृत्त का व्यास है:",
      "options_hi": ["5 cm", "10 cm", "12 cm", "24 cm"],
      "answer_hi": "10 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_hi": "त्रिज्या 7 cm वाले वृत्त के चतुर्थांश का परिमाप है:",
      "options_hi": ["11 cm", "25 cm", "39 cm", "53 cm"],
      "answer_hi": "25 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_hi": "एक शंकु का वक्र पृष्ठीय क्षेत्रफल 308 cm² और तिर्यक ऊँचाई 14 cm है। आधार की त्रिज्या है: (π=22/7)",
      "options_hi": ["3.5 cm", "7 cm", "10.5 cm", "14 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_hi": "एक अर्धगोले का वक्र पृष्ठीय क्षेत्रफल 308 cm² है। इसकी त्रिज्या है: (π=22/7)",
      "options_hi": ["3.5 cm", "7 cm", "14 cm", "21 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_hi": "आँकड़ों 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 का माध्य है:",
      "options_hi": ["6.5", "7", "7.5", "8"],
      "answer_hi": "6.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_hi": "एक पासे को फेंकने पर 6 से छोटी संख्या आने की प्रायिकता है:",
      "options_hi": ["1/6", "1/3", "1/2", "5/6"],
      "answer_hi": "5/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_hi": "दो संख्याओं का HCF 7 और LCM 84 है। यदि एक संख्या 14 है, तो दूसरी संख्या है:",
      "options_hi": ["42", "56", "28", "21"],
      "answer_hi": "42",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_hi": "बहुपद x² - 10x + 25 के शून्यक हैं:",
      "options_hi": ["5, 5", "-5, -5", "5, -5", "10, 25"],
      "answer_hi": "5, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_hi": "समीकरण y = 4x - 5 का ग्राफ:",
      "options_hi": ["x-अक्ष के समांतर है", "y-अक्ष के समांतर है", "मूल बिंदु से गुजरता है", "एक सीधी रेखा है"],
      "answer_hi": "एक सीधी रेखा है",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_hi": "समांतर श्रेणी 6, 9, 12, 15, ... के प्रथम 10 पदों का योग है:",
      "options_hi": ["195", "210", "225", "240"],
      "answer_hi": "195",
      "attempted": false,
      "selected": ""
    }
  ]
    
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


