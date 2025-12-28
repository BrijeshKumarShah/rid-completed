const questions =[
    {
      "num": 1,
      "question_hi": "निम्नलिखित में से कौन सी संख्या परिमेय है?",
      "options_hi": ["√3", "π", "22/7", "√7"],
      "answer_hi": "22/7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_hi": "बहुपद x² - 5x + 6 के शून्यकों का योग है:",
      "options_hi": ["5", "-5", "6", "-6"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_hi": "समीकरण युग्म 3x - 5y = 20 और 6x - 10y = 40 का हल है:",
      "options_hi": ["अद्वितीय", "कोई हल नहीं", "अनंत हल", "दो हल"],
      "answer_hi": "अनंत हल",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_hi": "द्विघात समीकरण x² + x + 1 = 0 के विविक्तकर का मान है:",
      "options_hi": ["-3", "3", "0", "1"],
      "answer_hi": "-3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_hi": "समांतर श्रेणी 3, 8, 13, 18, ... के प्रथम 20 पदों का योग है:",
      "options_hi": ["1010", "1020", "1030", "1040"],
      "answer_hi": "1010",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफल क्रमशः 16 cm² और 36 cm² हैं। उनकी संगत भुजाओं का अनुपात है:",
      "options_hi": ["2:3", "3:2", "4:9", "16:36"],
      "answer_hi": "2:3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_hi": "बिंदु (1, 2) और (4, 5) को मिलाने वाली रेखा का ढाल (slope) है:",
      "options_hi": ["1", "2", "3", "4"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_hi": "cos 45° × sec 45° का मान है:",
      "options_hi": ["0", "1", "√2", "1/2"],
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_hi": "यदि cot θ = 3/4, तो sin θ = ?",
      "options_hi": ["3/5", "4/5", "5/4", "5/3"],
      "answer_hi": "4/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_hi": "एक वृत्त की दो समांतर जीवाओं की लंबाई 6 cm और 8 cm हैं। यदि वृत्त की त्रिज्या 5 cm है, तो जीवाओं के बीच की दूरी है:",
      "options_hi": ["1 cm", "7 cm", "1 cm या 7 cm", "5 cm"],
      "answer_hi": "1 cm या 7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_hi": "त्रिज्या 28 cm वाले वृत्त के एक त्रिज्यखंड का क्षेत्रफल जिसका कोण 45° है:",
      "options_hi": ["308 cm²", "616 cm²", "154 cm²", "77 cm²"],
      "answer_hi": "308 cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_hi": "एक घन के फलकों की संख्या है:",
      "options_hi": ["4", "6", "8", "12"],
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_hi": "एक बेलन के आधार की त्रिज्या 14 cm और ऊँचाई 10 cm है। इसका आयतन है: (π=22/7)",
      "options_hi": ["6160 cm³", "3080 cm³", "1540 cm³", "770 cm³"],
      "answer_hi": "6160 cm³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_hi": "दो गोलों की त्रिज्याएँ 1:2 के अनुपात में हैं। उनके आयतनों का अनुपात है:",
      "options_hi": ["1:2", "1:4", "1:8", "1:16"],
      "answer_hi": "1:8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_hi": "आँकड़ों 2, 3, 4, 5, 0, 1, 3, 3, 4, 3 का बहुलक है:",
      "options_hi": ["2", "3", "4", "5"],
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_hi": "दो पासों को एक साथ फेंकने पर योग 9 आने की प्रायिकता है:",
      "options_hi": ["1/9", "1/12", "1/18", "1/36"],
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_hi": "संख्या 15 और 20 का HCF है:",
      "options_hi": ["5", "10", "15", "20"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_hi": "यदि बहुपद x² - kx + 6 का एक शून्यक 3 है, तो k का मान है:",
      "options_hi": ["3", "5", "-5", "-3"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_hi": "k के किस मान के लिए समीकरण युग्म x + 2y = 3 और 5x + ky + 7 = 0 असंगत है?",
      "options_hi": ["10", "5", "2.5", "3.5"],
      "answer_hi": "10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_hi": "द्विघात समीकरण 2x² - 5x - 3 = 0 का एक मूल है:",
      "options_hi": ["1/2", "3", "-1/2", "-3"],
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_hi": "समांतर श्रेणी का nवाँ पद 4n - 3 है। इसका 15वाँ पद है:",
      "options_hi": ["57", "60", "63", "66"],
      "answer_hi": "57",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_hi": "थेल्स प्रमेय के अनुसार, यदि एक रेखा किसी त्रिभुज की दो भुजाओं को समान अनुपात में विभाजित करती है, तो वह रेखा तीसरी भुजा के:",
      "options_hi": ["लंबवत होती है", "समांतर होती है", "45° पर होती है", "कोई नहीं"],
      "answer_hi": "समांतर होती है",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_hi": "बिंदु (-3, 4) मूल बिंदु से कितनी दूरी पर है?",
      "options_hi": ["3", "4", "5", "7"],
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_hi": "2 sin 30° cos 30° का मान है:",
      "options_hi": ["sin 60°", "cos 60°", "tan 60°", "cot 60°"],
      "answer_hi": "sin 60°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_hi": "यदि sin θ = 5/13, तो cosec θ = ?",
      "options_hi": ["13/5", "5/13", "12/13", "13/12"],
      "answer_hi": "13/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_hi": "एक वृत्त के केंद्र से 17 cm दूर स्थित बिंदु से वृत्त पर स्पर्श रेखा की लंबाई 15 cm है। वृत्त का क्षेत्रफल है:",
      "options_hi": ["49π cm²", "64π cm²", "81π cm²", "100π cm²"],
      "answer_hi": "64π cm²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_hi": "त्रिज्या 7 cm वाले वृत्त के चतुर्थांश का परिमाप है:",
      "options_hi": ["11 cm", "25 cm", "32 cm", "39 cm"],
      "answer_hi": "25 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_hi": "एक शंकु की ऊँचाई 24 cm और आधार की त्रिज्या 7 cm है। इसका आयतन है: (π=22/7)",
      "options_hi": ["1232 cm³", "616 cm³", "308 cm³", "154 cm³"],
      "answer_hi": "1232 cm³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_hi": "एक गोले का व्यास 6 cm है। इसका आयतन है:",
      "options_hi": ["36π cm³", "144π cm³", "288π cm³", "12π cm³"],
      "answer_hi": "36π cm³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_hi": "प्रथम 50 प्राकृत संख्याओं का माध्य है:",
      "options_hi": ["25", "25.5", "26", "26.5"],
      "answer_hi": "25.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_hi": "52 पत्तों की गड्डी से एक लाल पत्ता निकालने की प्रायिकता है:",
      "options_hi": ["1/2", "1/4", "1/13", "1/26"],
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_hi": "संख्या 5.363663666... है:",
      "options_hi": ["परिमेय", "अपरिमेय", "पूर्णांक", "प्राकृतिक"],
      "answer_hi": "अपरिमेय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_hi": "बहुपद 4x² - 9 के शून्यक हैं:",
      "options_hi": ["3/2, -3/2", "2/3, -2/3", "9/4, -9/4", "4/9, -4/9"],
      "answer_hi": "3/2, -3/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_hi": "समीकरण x + y = 7 में, यदि x = 3, तो y = ?",
      "options_hi": ["4", "5", "6", "7"],
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_hi": "द्विघात समीकरण x² - 8x + 15 = 0 के मूल हैं:",
      "options_hi": ["3, 5", "-3, -5", "2, 7", "-2, -7"],
      "answer_hi": "3, 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_hi": "समांतर श्रेणी 10, 7, 4, ... के प्रथम 12 पदों का योग है:",
      "options_hi": ["-66", "-78", "78", "66"],
      "answer_hi": "-78",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_hi": "यदि ΔABC ~ ΔPQR और AB/PQ = 3/4 है, तो ΔABC और ΔPQR के क्षेत्रफलों का अनुपात है:",
      "options_hi": ["3:4", "4:3", "9:16", "16:9"],
      "answer_hi": "9:16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_hi": "बिंदु (0, 5) और (-5, 0) के बीच की दूरी है:",
      "options_hi": ["5", "5√2", "10", "10√2"],
      "answer_hi": "5√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_hi": "tan 60° का मान है:",
      "options_hi": ["1/√3", "1", "√3", "2"],
      "answer_hi": "√3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_hi": "sin(90° - A) = ?",
      "options_hi": ["sin A", "cos A", "tan A", "cosec A"],
      "answer_hi": "cos A",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_hi": "एक वृत्त की त्रिज्या 5 cm है। 8 cm लंबी जीवा की केंद्र से दूरी है:",
      "options_hi": ["3 cm", "4 cm", "5 cm", "6 cm"],
      "answer_hi": "3 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_hi": "त्रिज्या 21 cm वाले वृत्त की परिधि है: (π=22/7)",
      "options_hi": ["66 cm", "132 cm", "264 cm", "1386 cm"],
      "answer_hi": "132 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_hi": "एक शंकु का वक्र पृष्ठीय क्षेत्रफल 550 cm² है और तिर्यक ऊँचाई 25 cm है। आधार की त्रिज्या है: (π=22/7)",
      "options_hi": ["3.5 cm", "7 cm", "14 cm", "21 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_hi": "एक अर्धगोले का कुल पृष्ठीय क्षेत्रफल 462 cm² है। इसकी त्रिज्या है: (π=22/7)",
      "options_hi": ["3.5 cm", "7 cm", "10.5 cm", "14 cm"],
      "answer_hi": "7 cm",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_hi": "आँकड़ों 1, 3, 2, 5, 4, 7, 6 का माध्यक है:",
      "options_hi": ["3", "4", "5", "6"],
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_hi": "एक पासे को फेंकने पर 2 का गुणज आने की प्रायिकता है:",
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_hi": "√50 + √18 का सरलीकृत रूप है:",
      "options_hi": ["8√2", "8", "6√2", "68"],
      "answer_hi": "8√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_hi": "बहुपद 2x² + 3x - 2 के शून्यक हैं:",
      "options_hi": ["1/2, -2", "-1/2, 2", "2, -2", "1, -1"],
      "answer_hi": "1/2, -2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_hi": "समीकरण y = 3 का ग्राफ है:",
      "options_hi": ["x-अक्ष के समांतर", "y-अक्ष के समांतर", "मूल बिंदु से गुजरता है", "(3, 0) से गुजरता है"],
      "answer_hi": "x-अक्ष के समांतर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_hi": "समांतर श्रेणी का 5वाँ पद 11 और 9वाँ पद 19 है। इसका सार्व अंतर है:",
      "options_hi": ["1", "2", "3", "4"],
      "answer_hi": "2",
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


