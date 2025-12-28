const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा सागर कौन सा है?",
    "options_hi": ["दक्षिण चीन सागर", "अरब सागर", "कैरिबियन सागर", "भूमध्य सागर"],
    "answer_hi": "दक्षिण चीन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर में .mp3 फाइल एक्सटेंशन क्या दर्शाता है?",
    "options_hi": ["ऑडियो फाइल", "वीडियो फाइल", "इमेज फाइल", "डॉक्यूमेंट फाइल"],
    "answer_hi": "ऑडियो फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "श्री चैतन्य महाप्रभु का जन्म स्थान कहाँ है?",
    "options_hi": ["नवद्वीप", "वृंदावन", "पुरी", "मायापुर"],
    "answer_hi": "नवद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कहाँ स्थित है?",
    "options_hi": ["कान में", "हाथ में", "पैर में", "रीढ़ में"],
    "answer_hi": "कान में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय फल है:",
    "options_hi": ["आम", "केला", "सेब", "अंगूर"],
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "URL का पूरा नाम है:",
    "options_hi": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Locator", "Universal Reference Link"],
    "answer_hi": "Uniform Resource Locator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "आदित्य L1 मिशन का उद्देश्य क्या है?",
    "options_hi": ["सूर्य का अध्ययन", "चंद्रमा का अध्ययन", "मंगल का अध्ययन", "वेनस का अध्ययन"],
    "answer_hi": "सूर्य का अध्ययन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी रेलवे लाइन कौन सी है?",
    "options_hi": ["ट्रांस-साइबेरियन रेलवे", "ट्रांस-कनाडा रेलवे", "किंग्स क्रॉस रेलवे", "ओरिएंट एक्सप्रेस"],
    "answer_hi": "ट्रांस-साइबेरियन रेलवे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक सदी में कितने वर्ष होते हैं?",
    "options_hi": ["100", "10", "1000", "50"],
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे ऊँची नदी कौन सी है?",
    "options_hi": ["ब्रह्मपुत्र", "गंगा", "यांग्त्ज़ी", "अमेज़न"],
    "answer_hi": "ब्रह्मपुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे अधिक विद्युत चालकता वाली धातु कौन सी है?",
    "options_hi": ["चांदी", "ताँबा", "सोना", "एल्युमीनियम"],
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "फील्ड्स मेडल किस क्षेत्र से संबंधित है?",
    "options_hi": ["गणित", "भौतिकी", "रसायन", "चिकित्सा"],
    "answer_hi": "गणित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला लेफ्टिनेंट जनरल कौन थीं?",
    "options_hi": ["पुनीत अरोड़ा", "सुधा चौधरी", "माधुरी कानिटकर", "पद्मावती बंदोपाध्याय"],
    "answer_hi": "पुनीत अरोड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "पिंटरेस्ट के संस्थापक कौन हैं?",
    "options_hi": ["बेन सिल्बरमैन", "मार्क जुकरबर्ग", "जैक डोर्सी", "लैरी पेज"],
    "answer_hi": "बेन सिल्बरमैन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "रवींद्रनाथ टैगोर का जन्म कब हुआ था?",
    "options_hi": ["1861", "1875", "1885", "1890"],
    "answer_hi": "1861",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का सबसे निचला परत कौन सा है?",
    "options_hi": ["आंतरिक क्रोड", "बाह्य क्रोड", "मैंटल", "भूपर्पटी"],
    "answer_hi": "आंतरिक क्रोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे कठोर प्राकृतिक तत्व कौन सा है?",
    "options_hi": ["कार्बन (हीरा)", "टंगस्टन", "लोहा", "टाइटेनियम"],
    "answer_hi": "कार्बन (हीरा)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "कर्नाटक का प्राचीन नाम क्या था?",
    "options_hi": ["मैसूर राज्य", "कर्नाट", "बीजापुर", "विजयनगर"],
    "answer_hi": "मैसूर राज्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा स्तनधारी सबसे तेज दौड़ सकता है?",
    "options_hi": ["चीता", "शेर", "हाथी", "कंगारू"],
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "DNS का पूरा नाम है:",
    "options_hi": ["Domain Name System", "Domain Network System", "Digital Name System", "Domain Naming Service"],
    "answer_hi": "Domain Name System",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन सा है?",
    "options_hi": ["मुंबई", "चेन्नई", "कोचीन", "विशाखापत्तनम"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में रक्त का थक्का बनाने वाला प्रोटीन कौन सा है?",
    "options_hi": ["फाइब्रिनोजेन", "हीमोग्लोबिन", "इंसुलिन", "कैल्सीटोनिन"],
    "answer_hi": "फाइब्रिनोजेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "कोलोसियम किस देश में स्थित है?",
    "options_hi": ["इटली", "ग्रीस", "तुर्की", "मिस्र"],
    "answer_hi": "इटली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "IPV4 और IPV6 में क्या अंतर है?",
    "options_hi": ["IPV6 में अधिक IP एड्रेस", "IPV4 तेज", "IPV6 पुराना", "कोई अंतर नहीं"],
    "answer_hi": "IPV6 में अधिक IP एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "स्वराज्य दिवस कब मनाया जाता है?",
    "options_hi": ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "14 नवंबर"],
    "answer_hi": "26 जनवरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे अधिक प्रतिरोधी प्राकृतिक पदार्थ कौन सा है?",
    "options_hi": ["टंगस्टन", "हीरा", "स्टील", "टाइटेनियम"],
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "स्काइप के संस्थापक कौन हैं?",
    "options_hi": ["निकलस जेनस्ट्रॉम और जानस फ्राइस", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "निकलस जेनस्ट्रॉम और जानस फ्राइस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "विक्टोरिया मेमोरियल कहाँ स्थित है?",
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "HTML का पूरा नाम है:",
    "options_hi": ["HyperText Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "High Tech Markup Language"],
    "answer_hi": "HyperText Markup Language",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा राष्ट्रीय राजमार्ग कौन सा है?",
    "options_hi": ["NH-1", "NH-44", "NH-48", "NH-27"],
    "answer_hi": "NH-44",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन E की कमी से कौन सा रोग होता है?",
    "options_hi": ["मांसपेशी कमजोरी", "रतौंधी", "स्कर्वी", "रिकेट्स"],
    "answer_hi": "मांसपेशी कमजोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे घना ग्रह कौन सा है?",
    "options_hi": ["पृथ्वी", "बुध", "शुक्र", "मंगल"],
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "सोशल मीडिया का जनक किसे माना जाता है?",
    "options_hi": ["एंड्रयू वेनरिक", "मार्क जुकरबर्ग", "टॉम एंडरसन", "जैक डोर्सी"],
    "answer_hi": "एंड्रयू वेनरिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहला संविधान दिवस कब मनाया गया?",
    "options_hi": ["2015", "1950", "1947", "2000"],
    "answer_hi": "2015",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "आवेशित कणों की खोज किसने की?",
    "options_hi": ["जे.जे. थॉमसन", "माइकल फैराडे", "जेम्स क्लर्क मैक्सवेल", "हेंडरिक लोरेंत्ज़"],
    "answer_hi": "जे.जे. थॉमसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे बड़ी मूंगे की चट्टान कौन सी है?",
    "options_hi": ["ग्रेट बैरियर रीफ", "बेलिज़ बैरियर रीफ", "रेड सी रीफ", "मालदीव रीफ"],
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "एंटासिड किस रोग के लिए उपयोगी है?",
    "options_hi": ["अम्लता", "सिरदर्द", "बुखार", "एलर्जी"],
    "answer_hi": "अम्लता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'लैंड ऑफ स्माइल्स' कहा जाता है?",
    "options_hi": ["थाईलैंड", "जापान", "चीन", "कोरिया"],
    "answer_hi": "थाईलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "RAM का पूरा नाम है:",
    "options_hi": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
    "answer_hi": "Random Access Memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "डार्विन का विकासवाद का सिद्धांत किस पुस्तक में प्रकाशित हुआ?",
    "options_hi": ["ऑन द ओरिजिन ऑफ स्पीशीज", "द डिसेंट ऑफ मैन", "द वॉयेज ऑफ द बीगल", "द एक्सप्रेशन ऑफ इमोशन्स"],
    "answer_hi": "ऑन द ओरिजिन ऑफ स्पीशीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा रेगिस्तान राष्ट्रीय उद्यान कौन सा है?",
    "options_hi": ["डेजर्ट नेशनल पार्क", "रणथंभौर", "गिर", "कान्हा"],
    "answer_hi": "डेजर्ट नेशनल पार्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधों में पत्तियों का मुख्य कार्य क्या है?",
    "options_hi": ["प्रकाश संश्लेषण", "सहारा देना", "जड़ों को पोषण", "पानी संग्रह"],
    "answer_hi": "प्रकाश संश्लेषण",
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
    "question_hi": "ऑगमेंटेड रियलिटी का मुख्य उपकरण क्या है?",
    "options_hi": ["स्मार्टफोन/टैबलेट", "VR हेडसेट", "डेस्कटॉप", "लैपटॉप"],
    "answer_hi": "स्मार्टफोन/टैबलेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "जंतर मंतर कहाँ स्थित है?",
    "options_hi": ["दिल्ली", "जयपुर", "उज्जैन", "वाराणसी"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "बृहस्पति पर पहला यान कौन सा था?",
    "options_hi": ["पायोनियर 10", "वॉयजर 1", "गैलीलियो", "जूनो"],
    "answer_hi": "पायोनियर 10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "आईरिस स्कैनर कैसे काम करता है?",
    "options_hi": ["आंख की पुतली से", "उंगली से", "चेहरे से", "आवाज से"],
    "answer_hi": "आंख की पुतली से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "राजस्थान नहर किस नदी से निकलती है?",
    "options_hi": ["सतलुज", "यमुना", "गंगा", "चम्बल"],
    "answer_hi": "सतलुज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे लंबा अंग कौन सा है?",
    "options_hi": ["त्वचा", "आंत", "तंत्रिका", "रक्त वाहिका"],
    "answer_hi": "त्वचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "JPEG का पूरा नाम है:",
    "options_hi": ["Joint Photographic Experts Group", "Joint Picture Experts Group", "Joint Photographic Encoding Group", "Joint Picture Encoding Graphics"],
    "answer_hi": "Joint Photographic Experts Group",
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
