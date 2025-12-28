const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा द्वीप कौन सा है?",
    "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "मेडागास्कर", "बोर्नियो"],
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर की आंतरिक मेमोरी किससे बनी होती है?",
    "options_hi": ["कागज", "सिलिकॉन चिप्स", "प्लास्टिक", "लोहा"],
    "answer_hi": "सिलिकॉन चिप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "नोबेल पुरस्कार किस क्षेत्र में नहीं दिया जाता?",
    "options_hi": ["साहित्य", "शांति", "गणित", "चिकित्सा"],
    "answer_hi": "गणित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे मजबूत मांसपेशी कौन सी है?",
    "options_hi": ["जीभ", "जबड़े की मांसपेशी", "हृदय", "पैर की मांसपेशी"],
    "answer_hi": "जबड़े की मांसपेशी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का सबसे बड़ा बाघ अभयारण्य कौन सा है?",
    "options_hi": ["काजीरंगा", "सुंदरबन", "बांदीपुर", "कान्हा"],
    "answer_hi": "सुंदरबन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "LED का पूरा नाम है:",
    "options_hi": ["Light Emitting Diode", "Light Energy Device", "Low Energy Device", "Laser Emitting Diode"],
    "answer_hi": "Light Emitting Diode",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "चंद्रयान-1 कब लॉन्च किया गया था?",
    "options_hi": ["2008", "2010", "2014", "2019"],
    "answer_hi": "2008",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व में सबसे ज्यादा भाषाएँ किस देश में बोली जाती हैं?",
    "options_hi": ["भारत", "चीन", "इंडोनेशिया", "पापुआ न्यू गिनी"],
    "answer_hi": "पापुआ न्यू गिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक घंटे में कितने सेकंड होते हैं?",
    "options_hi": ["360", "3600", "60", "600"],
    "answer_hi": "3600",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
    "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "किस धातु को तरल धातु कहा जाता है?",
    "options_hi": ["लोहा", "पारा", "सोना", "चाँदी"],
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "ऑस्कर पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["साहित्य", "चिकित्सा", "फिल्म", "खेल"],
    "answer_hi": "फिल्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला IPS अधिकारी कौन थीं?",
    "options_hi": ["किरण बेदी", "आर. के. रागिनी", "सुष्मा चावला", "प्रेरणा सिंह"],
    "answer_hi": "किरण बेदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "व्हाट्सएप के संस्थापक कौन हैं?",
    "options_hi": ["मार्क जुकरबर्ग", "जैन कौम", "जैक डोर्सी", "लैरी पेज"],
    "answer_hi": "जैन कौम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "महात्मा गांधी का पूरा नाम क्या था?",
    "options_hi": ["मोहनदास करमचंद गांधी", "महात्मा गांधी", "बापू गांधी", "मोहन गांधी"],
    "answer_hi": "मोहनदास करमचंद गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का व्यास लगभग कितना है?",
    "options_hi": ["12,742 किमी", "6,371 किमी", "40,075 किमी", "51,00,000 किमी"],
    "answer_hi": "12,742 किमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे हल्की गैस कौन सी है?",
    "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "बिहार का प्राचीन नाम क्या था?",
    "options_hi": ["मगध", "अवध", "मिथिला", "विदेह"],
    "answer_hi": "मगध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा जानवर सबसे तेज दौड़ सकता है?",
    "options_hi": ["शेर", "चीता", "हाथी", "कंगारू"],
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "ISO का पूरा नाम है:",
    "options_hi": ["International Organization for Standardization", "Indian Standards Organization", "International Science Organization", "Information Systems Organization"],
    "answer_hi": "International Organization for Standardization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा झील कौन सा है?",
    "options_hi": ["डल झील", "चिल्का झील", "वुलर झील", "लोकटक झील"],
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में हीमोग्लोबिन कहाँ पाया जाता है?",
    "options_hi": ["रक्त", "हड्डियों", "मस्तिष्क", "फेफड़ों"],
    "answer_hi": "रक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "स्टेच्यू ऑफ लिबर्टी किस देश में स्थित है?",
    "options_hi": ["फ्रांस", "इंग्लैंड", "यूएसए", "कनाडा"],
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "RAM और ROM में क्या अंतर है?",
    "options_hi": ["RAM अस्थायी, ROM स्थायी", "ROM अस्थायी, RAM स्थायी", "दोनों स्थायी", "दोनों अस्थायी"],
    "answer_hi": "RAM अस्थायी, ROM स्थायी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "भारत छोड़ो आंदोलन कब शुरू हुआ?",
    "options_hi": ["1942", "1930", "1920", "1947"],
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_hi": ["हीरा", "प्लैटिनम", "स्टील", "ग्रेनाइट"],
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "यूट्यूब के संस्थापक कौन हैं?",
    "options_hi": ["चाड हर्ले, स्टीव चैन, जावेद करीम", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "चाड हर्ले, स्टीव चैन, जावेद करीम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "ताजमहल को किसने डिजाइन किया?",
    "options_hi": ["शाहजहाँ", "उस्ताद अहमद लाहौरी", "बीरबल", "अकबर"],
    "answer_hi": "उस्ताद अहमद लाहौरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "VPN का पूरा नाम है:",
    "options_hi": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Virtual Personal Network"],
    "answer_hi": "Virtual Private Network",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
    "options_hi": ["जोग प्रपात", "धुआँधार", "कुंचिकल प्रपात", "अथिराप्पिल्ली"],
    "answer_hi": "कुंचिकल प्रपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन C की कमी से कौन सा रोग होता है?",
    "options_hi": ["स्कर्वी", "रतौंधी", "रिकेट्स", "बेरीबेरी"],
    "answer_hi": "स्कर्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे ठंडा ग्रह कौन सा है?",
    "options_hi": ["यूरेनस", "नेपच्यून", "शनि", "प्लूटो"],
    "answer_hi": "नेपच्यून",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "क्रेडिट कार्ड का आविष्कार किसने किया?",
    "options_hi": ["फ्रैंक मैक्नामरा", "जॉन बिगिन्स", "एलिसा डेल", "मार्क कार्ड"],
    "answer_hi": "फ्रैंक मैक्नामरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहली जनगणना कब हुई?",
    "options_hi": ["1872", "1881", "1901", "1951"],
    "answer_hi": "1872",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "प्रोटॉन की खोज किसने की?",
    "options_hi": ["अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "जे.जे. थॉमसन", "नील्स बोहर"],
    "answer_hi": "अर्नेस्ट रदरफोर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे गहरी झील कौन सी है?",
    "options_hi": ["बैकाल झील", "विक्टोरिया झील", "सुपीरियर झील", "टैंगानिका झील"],
    "answer_hi": "बैकाल झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "एस्पिरिन किस रोग के लिए उपयोगी है?",
    "options_hi": ["सिरदर्द", "मधुमेह", "उच्च रक्तचाप", "एलर्जी"],
    "answer_hi": "सिरदर्द",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'मिडिल ईस्ट का स्विट्जरलैंड' कहा जाता है?",
    "options_hi": ["कतर", "संयुक्त अरब अमीरात", "लेबनान", "जॉर्डन"],
    "answer_hi": "लेबनान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "CD का पूरा नाम है:",
    "options_hi": ["Compact Disc", "Computer Disc", "Compact Device", "Computer Device"],
    "answer_hi": "Compact Disc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "ग्रहों की गति का नियम किसने दिया?",
    "options_hi": ["गैलीलियो", "कैपलर", "न्यूटन", "आइंस्टाइन"],
    "answer_hi": "कैपलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा गुफा समूह कौन सा है?",
    "options_hi": ["अजंता", "एलोरा", "एलीफेंटा", "भीमबेटका"],
    "answer_hi": "एलोरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधे रात में कौन सी गैस छोड़ते हैं?",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "किस देश को 'लैंड ऑफ व्हाइट एलिफेंट' कहा जाता है?",
    "options_hi": ["थाईलैंड", "भारत", "श्रीलंका", "म्यांमार"],
    "answer_hi": "थाईलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "क्लाउड कंप्यूटिंग का क्या अर्थ है?",
    "options_hi": ["इंटरनेट पर डेटा स्टोर करना", "कंप्यूटर में डेटा स्टोर करना", "पेन ड्राइव में डेटा स्टोर करना", "सीडी में डेटा स्टोर करना"],
    "answer_hi": "इंटरनेट पर डेटा स्टोर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "इंडिया गेट कहाँ स्थित है?",
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "चंद्रमा पर पहला कदम रखने वाला व्यक्ति कौन था?",
    "options_hi": ["नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "यूरी गागरिन", "जॉन ग्लेन"],
    "answer_hi": "नील आर्मस्ट्रांग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "बारकोड स्कैनर कैसे काम करता है?",
    "options_hi": ["लाइट बीम से", "साउंड वेव्स से", "मैग्नेटिक फील्ड से", "रेडियो वेव्स से"],
    "answer_hi": "लाइट बीम से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "हीराकुंड बांध किस राज्य में है?",
    "options_hi": ["ओडिशा", "मध्य प्रदेश", "छत्तीसगढ़", "झारखंड"],
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कहाँ है?",
    "options_hi": ["कान", "हाथ", "पैर", "नाक"],
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "SIM का पूरा नाम है:",
    "options_hi": ["Subscriber Identity Module", "Subscriber Information Module", "Smart Identity Module", "Smart Information Module"],
    "answer_hi": "Subscriber Identity Module",
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
