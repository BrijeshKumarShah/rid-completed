const questions = [
  {
    "num": 1,
    "question_hi": "भारत का सबसे लंबा नदी पुल कौन सा है?",
    "options_hi": ["महात्मा गांधी सेतु", "विक्रमशिला सेतु", "भूपेन हजारिका सेतु", "रविन्द्र सेतु"],
    "answer_hi": "भूपेन हजारिका सेतु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "प्रकाश वर्ष किसकी इकाई है?",
    "options_hi": ["समय", "दूरी", "प्रकाश की तीव्रता", "ऊर्जा"],
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "पानी का रासायनिक सूत्र है:",
    "options_hi": ["H₂O", "CO₂", "NaCl", "O₂"],
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "त्रिभुज के तीनों कोणों का योग कितना होता है?",
    "options_hi": ["90°", "180°", "270°", "360°"],
    "answer_hi": "180°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "ममता बनर्जी"],
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "सूर्य से पृथ्वी तक प्रकाश आने में कितना समय लगता है?",
    "options_hi": ["8 मिनट 20 सेकंड", "1 घंटा", "24 घंटे", "1 सेकंड"],
    "answer_hi": "8 मिनट 20 सेकंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "मानव शरीर में हृदय के कितने कोष्ठक होते हैं?",
    "options_hi": ["2", "3", "4", "5"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "π (पाई) का मान लगभग कितना होता है?",
    "options_hi": ["3.14", "2.71", "1.61", "9.81"],
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_hi": ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
    "answer_hi": "प्रशांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विद्युत बल्ब के आविष्कारक कौन हैं?",
    "options_hi": ["थॉमस एडीसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "माइकल फैराडे"],
    "answer_hi": "थॉमस एडीसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "रक्त का लाल रंग किसके कारण होता है?",
    "options_hi": ["हीमोग्लोबिन", "प्लाज्मा", "श्वेत रक्त कणिकाएं", "प्लेटलेट्स"],
    "answer_hi": "हीमोग्लोबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "(a+b)² का सूत्र है:",
    "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² - b²"],
    "answer_hi": "a² + 2ab + b²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "ताजमहल किस नदी के किनारे स्थित है?",
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "कृष्णा"],
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "पृथ्वी का एकमात्र प्राकृतिक उपग्रह है:",
    "options_hi": ["मंगल", "शुक्र", "चंद्रमा", "सूर्य"],
    "answer_hi": "चंद्रमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "HCl का पूरा नाम है:",
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "कार्बोनिक अम्ल"],
    "answer_hi": "हाइड्रोक्लोरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "100 डिग्री सेल्सियस कितने डिग्री फारेनहाइट के बराबर है?",
    "options_hi": ["180°F", "212°F", "32°F", "100°F"],
    "answer_hi": "212°F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "भारत का राष्ट्रीय पक्षी है:",
    "options_hi": ["मोर", "गिद्ध", "चील", "हंस"],
    "answer_hi": "मोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "गुरुत्वाकर्षण का सिद्धांत किसने दिया?",
    "options_hi": ["आइंस्टाइन", "न्यूटन", "गैलीलियो", "आर्किमिडीज"],
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "मानव शरीर की सबसे बड़ी हड्डी है:",
    "options_hi": ["करोटि", "फीमर", "अस्थि", "पसली"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "एक दशक में कितने वर्ष होते हैं?",
    "options_hi": ["10", "100", "1000", "5"],
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे ऊँचा पर्वत शिखर है:",
    "options_hi": ["कंचनजंगा", "नंदा देवी", "K2", "माउंट एवरेस्ट"],
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "पृथ्वी का वायुमंडल किस गैस की सर्वाधिक मात्रा से बना है?",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "चीनी का रासायनिक सूत्र है:",
    "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "NaCl", "H₂O"],
    "answer_hi": "C₁₂H₂₂O₁₁",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "एक वृत्त की परिधि का सूत्र है:",
    "options_hi": ["πr", "2πr", "πr²", "πd"],
    "answer_hi": "2πr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "मीरा कुमार"],
    "answer_hi": "प्रतिभा पाटिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "ध्वनि की चाल किसमें सबसे अधिक होती है?",
    "options_hi": ["वायु", "जल", "लोहा", "निर्वात"],
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी है:",
    "options_hi": ["फीमर", "करोटि", "स्टेपीज", "पसली"],
    "answer_hi": "स्टेपीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "144 का वर्गमूल कितना है?",
    "options_hi": ["11", "12", "13", "14"],
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "अंटार्कटिका किस प्रकार का महाद्वीप है?",
    "options_hi": ["सबसे गर्म", "सबसे ठंडा", "सबसे छोटा", "सबसे घना आबाद"],
    "answer_hi": "सबसे ठंडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "टेलीफोन के आविष्कारक हैं:",
    "options_hi": ["थॉमस एडीसन", "अलेक्जेंडर ग्राहम बेल", "मार्कोनी", "जेम्स वाट"],
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "रक्त समूहों की खोज किसने की?",
    "options_hi": ["लुई पाश्चर", "कार्ल लैंडस्टीनर", "रॉबर्ट कोच", "एलेक्जेंडर फ्लेमिंग"],
    "answer_hi": "कार्ल लैंडस्टीनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "दो संख्याओं का HCF × LCM बराबर होता है:",
    "options_hi": ["संख्याओं के योग", "संख्याओं के गुणनफल", "संख्याओं के अंतर", "संख्याओं के भागफल"],
    "answer_hi": "संख्याओं के गुणनफल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "गेटवे ऑफ इंडिया कहाँ स्थित है?",
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "सौर मंडल का सबसे बड़ा ग्रह है:",
    "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "वायु में सबसे अधिक मात्रा में पाई जाने वाली गैस है:",
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "एक स्कोर में कितने वर्ष होते हैं?",
    "options_hi": ["10", "20", "30", "40"],
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "भारत का राष्ट्रीय जलीय जीव है:",
    "options_hi": ["मगरमच्छ", "डॉल्फिन", "हंस", "मछली"],
    "answer_hi": "डॉल्फिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "न्यूटन की गति का पहला नियम कहलाता है:",
    "options_hi": ["गति का नियम", "जड़त्व का नियम", "क्रिया-प्रतिक्रिया का नियम", "त्वरण का नियम"],
    "answer_hi": "जड़त्व का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि है:",
    "options_hi": ["हृदय", "फेफड़े", "यकृत", "गुर्दे"],
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "एक सदी में कितने वर्ष होते हैं?",
    "options_hi": ["10", "100", "1000", "50"],
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा राज्य क्षेत्रफल में है:",
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "ओज़ोन परत किससे हमारी रक्षा करती है?",
    "options_hi": ["वायु प्रदूषण", "सूर्य की पराबैंगनी किरणें", "ध्वनि प्रदूषण", "वर्षा"],
    "answer_hi": "सूर्य की पराबैंगनी किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "सोडियम क्लोराइड का सूत्र है:",
    "options_hi": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "समकोण त्रिभुज में कर्ण का सूत्र है:",
    "options_hi": ["√(a² + b²)", "a² + b²", "a + b", "√(a² - b²)"],
    "answer_hi": "√(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "भारत के पहले उपग्रह का नाम था:",
    "options_hi": ["भास्कर", "आर्यभट्ट", "रोहिणी", "इन्सैट"],
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "प्रकाश की चाल है (वैक्यूम में):",
    "options_hi": ["3 × 10⁵ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10³ m/s"],
    "answer_hi": "3 × 10⁸ m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कहाँ पाई जाती है?",
    "options_hi": ["कान", "हाथ", "पैर", "रीढ़"],
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "15² का मान है:",
    "options_hi": ["225", "250", "125", "150"],
    "answer_hi": "225",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "विश्व का सबसे बड़ा रेगिस्तान है:",
    "options_hi": ["थार", "सहारा", "गोबी", "अटाकामा"],
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "रेडियो का आविष्कार किसने किया?",
    "options_hi": ["थॉमस एडीसन", "गुग्लिल्मो मार्कोनी", "अलेक्जेंडर फ्लेमिंग", "निकोला टेस्ला"],
    "answer_hi": "गुग्लिल्मो मार्कोनी",
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

