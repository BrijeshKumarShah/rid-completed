const questions = [
  {
    "num": 1,
    "question_hi": "भारत की जनगणना कितने वर्ष बाद होती है?",
    "options_hi": ["5 वर्ष", "10 वर्ष", "15 वर्ष", "20 वर्ष"],
    "answer_hi": "10 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "भारत में 'जैव विविधता हॉटस्पॉट' कितने हैं?",
    "options_hi": ["2", "4", "6", "8"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "नर्मदा नदी का उद्गम स्थल कहाँ है?",
    "options_hi": ["अमरकंटक", "महाबलेश्वर", "गंगोत्री", "त्रिवेणी"],
    "answer_hi": "अमरकंटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "भारत का सबसे बड़ा लौह अयस्क उत्पादक राज्य कौन सा है?",
    "options_hi": ["झारखंड", "ओडिशा", "कर्नाटक", "छत्तीसगढ़"],
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत में प्रथम पंचवर्षीय योजना कब शुरू हुई?",
    "options_hi": ["1947", "1950", "1951", "1955"],
    "answer_hi": "1951",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "विश्व व्यापार संगठन (WTO) की स्थापना कब हुई?",
    "options_hi": ["1945", "1948", "1995", "2001"],
    "answer_hi": "1995",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "1857 के विद्रोह का तात्कालिक कारण क्या था?",
    "options_hi": ["भूराजस्व", "सती प्रथा", "चर्बी वाले कारतूस", "अंग्रेजी शिक्षा"],
    "answer_hi": "चर्बी वाले कारतूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "महात्मा गांधी ने दांडी मार्च कब शुरू किया?",
    "options_hi": ["12 मार्च 1930", "15 अगस्त 1942", "9 अगस्त 1942", "26 जनवरी 1930"],
    "answer_hi": "12 मार्च 1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "भारत का संविधान कब लागू हुआ?",
    "options_hi": ["26 जनवरी 1949", "26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949"],
    "answer_hi": "26 जनवरी 1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "राज्यसभा के सदस्यों का कार्यकाल कितना होता है?",
    "options_hi": ["5 वर्ष", "6 वर्ष", "4 वर्ष", "अनिश्चित"],
    "answer_hi": "6 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "भारत में सबसे लंबी स्थलीय सीमा किस देश के साथ है?",
    "options_hi": ["चीन", "पाकिस्तान", "बांग्लादेश", "नेपाल"],
    "answer_hi": "बांग्लादेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "पृथ्वी पर सबसे बड़ा महाद्वीप कौन सा है?",
    "options_hi": ["अफ्रीका", "उत्तरी अमेरिका", "एशिया", "दक्षिणी अमेरिका"],
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत में 'श्वेत क्रांति' किससे संबंधित है?",
    "options_hi": ["गेहूं उत्पादन", "दूध उत्पादन", "मत्स्य पालन", "चावल उत्पादन"],
    "answer_hi": "दूध उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "भारत में राष्ट्रीय आय की गणना कौन करता है?",
    "options_hi": ["RBI", "भारतीय सांख्यिकी संस्थान", "केंद्रीय सांख्यिकी कार्यालय", "योजना आयोग"],
    "answer_hi": "केंद्रीय सांख्यिकी कार्यालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
    "options_hi": ["1885", "1905", "1920", "1942"],
    "answer_hi": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "भारत छोड़ो आंदोलन कब शुरू हुआ?",
    "options_hi": ["1940", "1942", "1945", "1947"],
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "भारत के राष्ट्रपति का चुनाव कितने वर्ष के लिए होता है?",
    "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
    "answer_hi": "5 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "उच्चतम न्यायालय के न्यायाधीश की सेवानिवृत्ति की आयु क्या है?",
    "options_hi": ["60 वर्ष", "62 वर्ष", "65 वर्ष", "70 वर्ष"],
    "answer_hi": "65 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "भारत में सबसे अधिक वर्षा वाला स्थान कौन सा है?",
    "options_hi": ["चेरापूंजी", "मौसिनराम", "उटी", "दार्जिलिंग"],
    "answer_hi": "मौसिनराम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "भारत में कुल कितने राज्य हैं?",
    "options_hi": ["26", "28", "29", "30"],
    "answer_hi": "28",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत में सबसे बड़ा जल विद्युत केंद्र कौन सा है?",
    "options_hi": ["भाखड़ा नांगल", "टिहरी बांध", "कोयना बांध", "हीराकुंड बांध"],
    "answer_hi": "टिहरी बांध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मुद्रास्फीति की दर मापने के लिए किस सूचकांक का प्रयोग किया जाता है?",
    "options_hi": ["थोक मूल्य सूचकांक", "उपभोक्ता मूल्य सूचकांक", "जीडीपी डिफ्लेटर", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "बंगाल का विभाजन कब हुआ?",
    "options_hi": ["1905", "1911", "1947", "1857"],
    "answer_hi": "1905",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "साइमन कमीशन भारत कब आया?",
    "options_hi": ["1927", "1928", "1930", "1935"],
    "answer_hi": "1928",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "संविधान सभा की पहली बैठक कब हुई?",
    "options_hi": ["9 दिसंबर 1946", "26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949"],
    "answer_hi": "9 दिसंबर 1946",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "भारत के प्रथम उपराष्ट्रपति कौन थे?",
    "options_hi": ["डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "वी.वी. गिरी", "आर. वेंकटरमण"],
    "answer_hi": "डॉ. सर्वपल्ली राधाकृष्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "भारत का सबसे बड़ा कपास उत्पादक राज्य कौन सा है?",
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "आंध्र प्रदेश"],
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "अंटार्कटिका महाद्वीप पर पहला भारतीय अनुसंधान केंद्र कौन सा है?",
    "options_hi": ["मैत्री", "दक्षिण गंगोत्री", "भारती", "हिमाद्री"],
    "answer_hi": "दक्षिण गंगोत्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "भारत में योजना आयोग का गठन कब हुआ?",
    "options_hi": ["1947", "1950", "1951", "1952"],
    "answer_hi": "1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "विश्व बैंक का मुख्यालय कहाँ है?",
    "options_hi": ["जिनेवा", "वाशिंगटन डी.सी.", "न्यूयॉर्क", "पेरिस"],
    "answer_hi": "वाशिंगटन डी.सी.",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "भारत की पहली महिला राज्यपाल कौन थी?",
    "options_hi": ["सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "इंदिरा गांधी", "मदर टेरेसा"],
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
    "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "लॉर्ड वेवेल", "राजेंद्र प्रसाद"],
    "answer_hi": "लॉर्ड माउंटबेटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "भारत में सबसे लंबी नदी कौन सी है?",
    "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_hi": ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
    "answer_hi": "प्रशांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "भारत में सबसे बड़ा सौर ऊर्जा पार्क कहाँ है?",
    "options_hi": ["कच्छ, गुजरात", "जैसलमेर, राजस्थान", "लेह, लद्दाख", "तमिलनाडु"],
    "answer_hi": "कच्छ, गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "भारत में गरीबी रेखा से नीचे की गणना किसके द्वारा की जाती है?",
    "options_hi": ["रिजर्व बैंक", "योजना आयोग", "निजी एजेंसी", "निति आयोग"],
    "answer_hi": "निति आयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "असहयोग आंदोलन कब शुरू हुआ?",
    "options_hi": ["1919", "1920", "1922", "1930"],
    "answer_hi": "1920",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "मुस्लिम लीग की स्थापना कब हुई?",
    "options_hi": ["1905", "1906", "1916", "1920"],
    "answer_hi": "1906",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "भारत के संविधान को बनाने में कितना समय लगा?",
    "options_hi": ["2 वर्ष 11 माह", "2 वर्ष 18 दिन", "3 वर्ष", "1 वर्ष 10 माह"],
    "answer_hi": "2 वर्ष 11 माह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "लोकसभा के अध्यक्ष को कौन चुनता है?",
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा सदस्य", "सर्वोच्च न्यायालय"],
    "answer_hi": "लोकसभा सदस्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत में सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_hi": ["थार", "सहारा", "कराकुम", "गोबी"],
    "answer_hi": "थार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "दक्कन का पठार किन पर्वतों के बीच स्थित है?",
    "options_hi": ["विंध्य और सतपुड़ा", "सह्याद्रि और विंध्य", "हिमालय और अरावली", "सतपुड़ा और अरावली"],
    "answer_hi": "सह्याद्रि और विंध्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "भारत में सबसे बड़ा प्राकृतिक गैस उत्पादक क्षेत्र कौन सा है?",
    "options_hi": ["बॉम्बे हाई", "कृष्णा गोदावरी", "असम", "त्रिपुरा"],
    "answer_hi": "बॉम्बे हाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "किस पंचवर्षीय योजना का नारा 'गरीबी हटाओ' था?",
    "options_hi": ["तृतीय", "चतुर्थ", "पंचम", "षष्ठम"],
    "answer_hi": "पंचम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "भारत का पहला परमाणु परीक्षण कब किया गया?",
    "options_hi": ["1972", "1974", "1998", "1975"],
    "answer_hi": "1974",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "महात्मा गांधी की हत्या कब हुई?",
    "options_hi": ["30 जनवरी 1948", "15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1948"],
    "answer_hi": "30 जनवरी 1948",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "भारतीय संविधान में मौलिक अधिकार किस देश के संविधान से लिए गए हैं?",
    "options_hi": ["अमेरिका", "ब्रिटेन", "कनाडा", "आयरलैंड"],
    "answer_hi": "अमेरिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "राज्य सभा में कितने सदस्य होते हैं?",
    "options_hi": ["245", "250", "260", "280"],
    "answer_hi": "245",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "भारत का सबसे बड़ा बंदरगाह कौन सा है?",
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "जवाहरलाल नेहरू (न्हावा शेवा)"],
    "answer_hi": "जवाहरलाल नेहरू (न्हावा शेवा)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "भारत का सबसे बड़ा रबर उत्पादक राज्य कौन सा है?",
    "options_hi": ["तमिलनाडु", "कर्नाटक", "केरल", "आंध्र प्रदेश"],
    "answer_hi": "केरल",
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
