const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    "options_hi": ["अफ्रीका", "उत्तरी अमेरिका", "एशिया", "यूरोप"],
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर की फाइल का एक्सटेंशन .pdf क्या दर्शाता है?",
    "options_hi": ["Portable Document Format", "Personal Data File", "Printed Document File", "Public Document Format"],
    "answer_hi": "Portable Document Format",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "बुद्ध का जन्म स्थान कहाँ है?",
    "options_hi": ["बोधगया", "कुशीनगर", "लुम्बिनी", "सारनाथ"],
    "answer_hi": "लुम्बिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी का नाम क्या है?",
    "options_hi": ["स्टेपीज", "फीमर", "टिबिया", "अस्थि"],
    "answer_hi": "स्टेपीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय पुष्प है:",
    "options_hi": ["गुलाब", "कमल", "गेंदा", "चमेली"],
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "ATM का पूरा नाम है:",
    "options_hi": ["Automatic Teller Machine", "Automated Transaction Machine", "Automatic Transaction Module", "Automated Teller Module"],
    "answer_hi": "Automatic Teller Machine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "मंगलयान कब लॉन्च किया गया था?",
    "options_hi": ["2013", "2014", "2015", "2016"],
    "answer_hi": "2013",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी दीवार कौन सी है?",
    "options_hi": ["ग्रेट वॉल ऑफ चाइना", "बर्लिन वॉल", "हद्रियन वॉल", "इजरायल की दीवार"],
    "answer_hi": "ग्रेट वॉल ऑफ चाइना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक दिन में कितने सेकंड होते हैं?",
    "options_hi": ["86,400", "60,000", "100,000", "24,000"],
    "answer_hi": "86,400",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे व्यस्त नदी कौन सी है?",
    "options_hi": ["अमेज़न", "गंगा", "मिसिसिपी", "डेन्यूब"],
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे भारी धातु कौन सी है?",
    "options_hi": ["सोना", "प्लैटिनम", "ओस्मियम", "यूरेनियम"],
    "answer_hi": "ओस्मियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "ग्रैमी पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["साहित्य", "संगीत", "खेल", "फिल्म"],
    "answer_hi": "संगीत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला चीफ जस्टिस कौन थीं?",
    "options_hi": ["रूमा पाल", "सुजाता मनोहर", "लीला सेठ", "फातिमा बीबी"],
    "answer_hi": "फातिमा बीबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "इंस्टाग्राम के संस्थापक कौन हैं?",
    "options_hi": ["केविन सिस्ट्रॉम और माइक क्रिगर", "मार्क जुकरबर्ग", "जैक डोर्सी", "एलोन मस्क"],
    "answer_hi": "केविन सिस्ट्रॉम और माइक क्रिगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "भगत सिंह का जन्म कब हुआ था?",
    "options_hi": ["1907", "1911", "1920", "1931"],
    "answer_hi": "1907",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का वायुमंडल कितने परतों में विभाजित है?",
    "options_hi": ["3", "4", "5", "6"],
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे हल्का तत्व कौन सा है?",
    "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "गुजरात का प्राचीन नाम क्या था?",
    "options_hi": ["गुरजर देश", "काठियावाड़", "सौराष्ट्र", "वडोदरा"],
    "answer_hi": "गुरजर देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा पक्षी सबसे तेज उड़ सकता है?",
    "options_hi": ["गिद्ध", "बाज़", "पेरिग्रीन फाल्कन", "हंस"],
    "answer_hi": "पेरिग्रीन फाल्कन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "URL का पूरा नाम है:",
    "options_hi": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Locator", "Universal Reference Link"],
    "answer_hi": "Uniform Resource Locator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा मीठे पानी की झील कौन सी है?",
    "options_hi": ["चिल्का झील", "वुलर झील", "डल झील", "लोकटक झील"],
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में इंसुलिन कहाँ बनता है?",
    "options_hi": ["अग्न्याशय", "यकृत", "गुर्दे", "थाइरॉयड"],
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "आइफिल टॉवर किस शहर में स्थित है?",
    "options_hi": ["लंदन", "पेरिस", "रोम", "न्यूयॉर्क"],
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "CPU और GPU में क्या अंतर है?",
    "options_hi": ["CPU सामान्य प्रयोजन, GPU ग्राफिक्स", "GPU सामान्य प्रयोजन, CPU ग्राफिक्स", "दोनों समान", "CPU तेज, GPU धीमा"],
    "answer_hi": "CPU सामान्य प्रयोजन, GPU ग्राफिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "दांडी मार्च कब शुरू हुआ?",
    "options_hi": ["1930", "1920", "1942", "1919"],
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे कठोर कृत्रिम पदार्थ कौन सा है?",
    "options_hi": ["स्टील", "ग्रेफीन", "टाइटेनियम", "कार्बन फाइबर"],
    "answer_hi": "ग्रेफीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "ट्विटर के संस्थापक कौन हैं?",
    "options_hi": ["जैक डोर्सी, बिज़ स्टोन, एवन विलियम्स", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "जैक डोर्सी, बिज़ स्टोन, एवन विलियम्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "लाल किला किसने बनवाया?",
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगजेब", "हुमायूँ"],
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "HTTP का पूरा नाम है:",
    "options_hi": ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol", "Hyper Transfer Protocol"],
    "answer_hi": "HyperText Transfer Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा बांध कौन सा है?",
    "options_hi": ["टिहरी बांध", "भाखड़ा बांध", "सरदार सरोवर", "हीराकुंड"],
    "answer_hi": "टिहरी बांध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन D की कमी से कौन सा रोग होता है?",
    "options_hi": ["रिकेट्स", "स्कर्वी", "बेरीबेरी", "रतौंधी"],
    "answer_hi": "रिकेट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे चमकीला ग्रह कौन सा है?",
    "options_hi": ["शुक्र", "बृहस्पति", "मंगल", "शनि"],
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "कैशलेस लेनदेन का जनक किसे माना जाता है?",
    "options_hi": ["फ्रैंक मैक्नामरा", "जॉन शेपर्ड-बैरन", "मार्टिन कूपर", "टिम बर्नर्स ली"],
    "answer_hi": "जॉन शेपर्ड-बैरन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहली बार मतदान कब हुआ?",
    "options_hi": ["1951-52", "1947", "1935", "1962"],
    "answer_hi": "1951-52",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "न्यूट्रॉन की खोज किसने की?",
    "options_hi": ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर"],
    "answer_hi": "जेम्स चैडविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "options_hi": ["कैस्पियन सागर", "अरल सागर", "डेड सी", "ग्रेट साल्ट लेक"],
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "पैरासिटामोल किस रोग के लिए उपयोगी है?",
    "options_hi": ["बुखार और दर्द", "मधुमेह", "उच्च रक्तचाप", "एलर्जी"],
    "answer_hi": "बुखार और दर्द",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'लैंड ऑफ माउंटेन्स' कहा जाता है?",
    "options_hi": ["नेपाल", "भूटान", "स्विट्जरलैंड", "ऑस्ट्रिया"],
    "answer_hi": "नेपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "DVD का पूरा नाम है:",
    "options_hi": ["Digital Versatile Disc", "Digital Video Disc", "Digital Virtual Disc", "Data Video Disc"],
    "answer_hi": "Digital Versatile Disc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "गुरुत्वाकर्षण के सिद्धांत के बारे में न्यूटन को कहाँ प्रेरणा मिली?",
    "options_hi": ["सेब के पेड़ के नीचे", "प्रयोगशाला में", "पुस्तकालय में", "सोते समय"],
    "answer_hi": "सेब के पेड़ के नीचे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे पुराना राष्ट्रीय उद्यान कौन सा है?",
    "options_hi": ["कॉर्बेट नेशनल पार्क", "कान्हा नेशनल पार्क", "बांदीपुर नेशनल पार्क", "रणथंभौर नेशनल पार्क"],
    "answer_hi": "कॉर्बेट नेशनल पार्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधे दिन में कौन सी गैस लेते हैं?",
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "किस देश को 'लैंड ऑफ मिडनाइट सन' कहा जाता है?",
    "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"],
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "ब्लॉकचेन टेक्नोलॉजी किसके लिए प्रसिद्ध है?",
    "options_hi": ["क्रिप्टोकरेंसी", "सोशल मीडिया", "ईमेल", "गेमिंग"],
    "answer_hi": "क्रिप्टोकरेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "कुतुब मीनार किसने बनवाया?",
    "options_hi": ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
    "answer_hi": "कुतुबुद्दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "चंद्रमा पर पहला मानव रहित यान कौन सा था?",
    "options_hi": ["लूना 2", "अपोलो 11", "स्पुतनिक 1", "वॉयजर 1"],
    "answer_hi": "लूना 2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "QR कोड कैसे काम करता है?",
    "options_hi": ["2D बारकोड के रूप में", "साउंड वेव्स से", "मैग्नेटिक स्ट्रिप से", "RFID टैग से"],
    "answer_hi": "2D बारकोड के रूप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "भाखड़ा बांध किस नदी पर बना है?",
    "options_hi": ["सतलुज", "यमुना", "चिनाब", "रावी"],
    "answer_hi": "सतलुज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे लंबी हड्डी कौन सी है?",
    "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "अल्ना"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "SMS का पूरा नाम है:",
    "options_hi": ["Short Message Service", "Simple Message Service", "Short Messaging System", "Simple Messaging System"],
    "answer_hi": "Short Message Service",
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
