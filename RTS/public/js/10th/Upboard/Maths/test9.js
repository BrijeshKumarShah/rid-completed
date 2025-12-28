const questions =[
    {
      "num": 1,
      "question_hi": "संख्या √8 है:",
      "options_hi": ["परिमेय", "अपरिमेय", "पूर्णांक", "प्राकृतिक"],
      "answer_hi": "अपरिमेय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_hi": "बहुपद 4x² - 8x के शून्यक हैं:",
      "options_hi": ["0, 2", "0, -2", "2, 2", "-2, -2"],
      "answer_hi": "0, 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_hi": "समीकरण युग्म x + y = 8 और 2x + 2y = 16 के हलों की संख्या है:",
      "options_hi": ["0", "1", "2", "अनंत"],
      "answer_hi": "अनंत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_hi": "द्विघात समीकरण x² + 4x - 5 = 0 के मूलों का योग है:",
      "options_hi": ["4", "-4", "5", "-5"],
      "answer_hi": "-4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_hi": "समांतर श्रेणी 7, 13, 19, ... का 25वाँ पद है:",
      "options_hi": ["145", "151", "157", "163"],
      "answer_hi": "151",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफल 49 cm² और 64 cm² हैं। उनकी संगत भुजाओं का अनुपात है:",
      "options_hi": ["7:8", "8:7", "49:64", "64:49"],
      "answer_hi": "7:8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_hi": "बिंदु (1, 2) और (4, 6) के बीच की दूरी है:",
      "options_hi": ["4", "5", "√13", "5√2"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_hi": "sin 30° × cos 60° + cos 30° × sin 60° का मान है:",
      "options_hi": ["0", "1/2", "√3/2", "1"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_hi": "यदि cot θ = 1, तो sin θ + cos θ = ?",
      "options_hi": ["1", "√2", "2", "1/√2"],
      "answer_hi": "√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_hi": "एक वृत्त की त्रिज्या 5 cm है। 8 cm लंबी जीवा की केंद्र से दूरी है:",
      "options_hi": ["3 cm", "4 cm", "5 cm", "6 cm"],
      "answer_hi": "3 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_hi": "त्रिज्या 28 cm वाले वृत्त के एक त्रिज्यखंड का क्षेत्रफल जिसका कोण 45° है: (π=22/7)",
      "options_hi": ["154 cm²", "308 cm²", "462 cm²", "616 cm²"],
      "answer_hi": "308 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_hi": "एक घन का आयतन 125 cm³ है। इसकी कोर की लंबाई है:",
      "options_hi": ["5 cm", "10 cm", "12.5 cm", "25 cm"],
      "answer_hi": "5 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_hi": "त्रिज्या 14 cm और ऊँचाई 30 cm वाले बेलन का आयतन है: (π=22/7)",
      "options_hi": ["18480 cm³", "9240 cm³", "4620 cm³", "2310 cm³"],
      "answer_hi": "18480 cm³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_hi": "एक गोले का आयतन 904.32 cm³ है। इसकी त्रिज्या है: (π=3.14)",
      "options_hi": ["3 cm", "6 cm", "9 cm", "12 cm"],
      "answer_hi": "6 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_hi": "आँकड़ों 3, 5, 7, 9, 11, 13, 15, 17, 19, 21 का माध्य है:",
      "options_hi": ["11", "12", "13", "14"],
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_hi": "एक सिक्के को दो बार उछालने पर कम से कम एक चित आने की प्रायिकता है:",
      "options_hi": ["1/4", "1/2", "3/4", "1"],
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_hi": "संख्या 24 और 36 का HCF है:",
      "options_hi": ["6", "12", "24", "36"],
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_hi": "यदि बहुपद x² - 5x + 6 के शून्यक α और β हैं, तो α² + β² = ?",
      "options_hi": ["13", "17", "19", "25"],
      "answer_hi": "13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_hi": "k के किस मान के लिए समीकरण युग्म 2x + 3y = 5 और 4x + ky = 10 का कोई हल नहीं है?",
      "options_hi": ["k = 6", "k ≠ 6", "k = 3", "कोई मान नहीं"],
      "answer_hi": "कोई मान नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_hi": "द्विघात समीकरण 3x² - 4x + 1 = 0 के मूलों का गुणनफल है:",
      "options_hi": ["1/3", "4/3", "-1/3", "-4/3"],
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_hi": "समांतर श्रेणी 3, 6, 9, 12, ... के प्रथम 20 पदों का योग है:",
      "options_hi": ["630", "660", "690", "720"],
      "answer_hi": "630",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_hi": "त्रिभुजों की समरूपता के लिए AAA कसौटी का अर्थ है:",
      "options_hi": ["तीनों कोण बराबर", "तीनों भुजाएँ बराबर", "तीनों ऊँचाइयाँ बराबर", "तीनों माध्यिकाएँ बराबर"],
      "answer_hi": "तीनों कोण बराबर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_hi": "बिंदु (2, 3) और (6, y) के बीच की दूरी 5 है। y का मान हो सकता है:",
      "options_hi": ["0 या 6", "1 या 5", "2 या 4", "3 या 3"],
      "answer_hi": "0 या 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_hi": "2 sin 45° cos 45° का मान है:",
      "options_hi": ["0", "1", "√2", "1/2"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_hi": "यदि sin θ = 3/5, तो tan θ = ?",
      "options_hi": ["3/4", "4/3", "4/5", "5/4"],
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_hi": "वृत्त के बाहर स्थित बिंदु से वृत्त पर खींची गई स्पर्श रेखाएँ होती हैं:",
      "options_hi": ["असमान", "समान", "समांतर", "लंबवत"],
      "answer_hi": "समान",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_hi": "एक घड़ी की मिनट वाली सुई 21 cm लंबी है। 30 मिनट में सुई द्वारा तय किया गया क्षेत्रफल है: (π=22/7)",
      "options_hi": ["231 cm²", "462 cm²", "693 cm²", "1386 cm²"],
      "answer_hi": "693 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_hi": "एक शंकु का वक्र पृष्ठीय क्षेत्रफल 550 cm² और तिर्यक ऊँचाई 25 cm है। आधार की त्रिज्या है: (π=22/7)",
      "options_hi": ["3.5 cm", "7 cm", "10.5 cm", "14 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_hi": "दो गोलों की त्रिज्याएँ 1:4 के अनुपात में हैं। उनके आयतनों का अनुपात है:",
      "options_hi": ["1:4", "1:16", "1:64", "1:256"],
      "answer_hi": "1:64",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_hi": "प्रथम 25 प्राकृत संख्याओं का माध्य है:",
      "options_hi": ["12", "13", "12.5", "13.5"],
      "answer_hi": "13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_hi": "52 पत्तों की गड्डी से एक चिड़ी का पत्ता निकालने की प्रायिकता है:",
      "options_hi": ["1/4", "1/13", "1/26", "1/52"],
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_hi": "√18/√2 का मान है:",
      "options_hi": ["3", "√9", "9", "6"],
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_hi": "बहुपद x² + 2x - 15 के शून्यक हैं:",
      "options_hi": ["3, 5", "-3, 5", "3, -5", "-3, -5"],
      "answer_hi": "3, -5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_hi": "समीकरण 2x - y = 3 का हल है:",
      "options_hi": ["(1, -1)", "(2, 1)", "(3, 3)", "सभी सही"],
      "answer_hi": "सभी सही",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_hi": "द्विघात समीकरण x² - 5x = 0 के मूल हैं:",
      "options_hi": ["0, 5", "0, -5", "5, 5", "-5, -5"],
      "answer_hi": "0, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_hi": "समांतर श्रेणी 10, 6, 2, ... के कितने पद लेने पर योग -150 होगा?",
      "options_hi": ["15", "20", "25", "30"],
      "answer_hi": "15",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_hi": "यदि ΔABC ~ ΔPQR और AB = 6 cm, PQ = 8 cm, तो ΔABC और ΔPQR के क्षेत्रफलों का अनुपात है:",
      "options_hi": ["3:4", "9:16", "16:9", "4:3"],
      "answer_hi": "9:16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_hi": "बिंदु (5, 0) और (0, 12) के बीच की दूरी है:",
      "options_hi": ["12", "13", "17", "19"],
      "answer_hi": "13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_hi": "sin 60° - cos 30° का मान है:",
      "options_hi": ["0", "√3", "1", "1/2"],
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_hi": "यदि tan θ = 1/√3, तो θ का मान है:",
      "options_hi": ["30°", "45°", "60°", "90°"],
      "answer_hi": "30°",
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
      "question_hi": "त्रिज्या 14 cm वाले वृत्त के चतुर्थांश का क्षेत्रफल है: (π=22/7)",
      "options_hi": ["77 cm²", "154 cm²", "308 cm²", "616 cm²"],
      "answer_hi": "154 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_hi": "एक शंकु की ऊँचाई 15 cm और आधार की त्रिज्या 8 cm है। इसका आयतन है: (π=22/7)",
      "options_hi": ["320 cm³", "640 cm³", "960 cm³", "1280 cm³"],
      "answer_hi": "320 cm³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_hi": "एक गोले का पृष्ठीय क्षेत्रफल 1256 cm² है। इसकी त्रिज्या है: (π=3.14)",
      "options_hi": ["5 cm", "10 cm", "15 cm", "20 cm"],
      "answer_hi": "10 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_hi": "आँकड़ों 5, 8, 10, 12, 15, 18, 20 का माध्यक है:",
      "options_hi": ["10", "12", "13", "15"],
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_hi": "एक पासे को फेंकने पर एक विषम अभाज्य संख्या आने की प्रायिकता है:",
      "options_hi": ["1/6", "1/3", "1/2", "2/3"],
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_hi": "दो संख्याओं का HCF 8 और LCM 48 है। यदि एक संख्या 16 है, तो दूसरी संख्या है:",
      "options_hi": ["24", "32", "40", "48"],
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_hi": "बहुपद 2x² + 3x + 1 के शून्यक हैं:",
      "options_hi": ["-1, -1/2", "1, 1/2", "-1, 1/2", "1, -1/2"],
      "answer_hi": "-1, -1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_hi": "समीकरण y = -3 का ग्राफ है:",
      "options_hi": ["x-अक्ष के समांतर", "y-अक्ष के समांतर", "मूल बिंदु से गुजरता है", "(0, -3) से गुजरता है"],
      "answer_hi": "x-अक्ष के समांतर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_hi": "समांतर श्रेणी 4, 7, 10, ... के प्रथम 12 पदों का योग है:",
      "options_hi": ["210", "222", "234", "246"],
      "answer_hi": "222",
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

