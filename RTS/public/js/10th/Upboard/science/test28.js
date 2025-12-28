


const questions = [
  {
    "num": 1,
    "question_hi": "मनुष्य के हृदय में ऑक्सीजन युक्त रक्त किस भाग में पाया जाता है?",
    "options_hi": ["बायाँ अलिंद", "बायाँ निलय", "दायाँ अलिंद", "दायाँ निलय"],
    "answer_hi": "बायाँ अलिंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "निम्नलिखित में से कौन सा क्षारकीय है?",
    "options_hi": ["Na₂CO₃", "NaCl", "HCl", "H₂SO₄"],
    "answer_hi": "Na₂CO₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "प्रकाश संश्लेषण की दर किस पर निर्भर करती है?",
    "options_hi": ["प्रकाश की तीव्रता", "CO₂ सांद्रता", "तापमान", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "विद्युत परिपथ में प्रतिरोधों के समानांतर संयोजन में क्या स्थिर रहता है?",
    "options_hi": ["वोल्टेज", "धारा", "प्रतिरोध", "शक्ति"],
    "answer_hi": "वोल्टेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "मानव आँख में किस भाग पर प्रतिबिंब बनता है?",
    "options_hi": ["आइरिस", "पुतली", "रेटिना", "कॉर्निया"],
    "answer_hi": "रेटिना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "निम्नलिखित में से कौन सा कार्बन का अपररूप है?",
    "options_hi": ["हीरा", "ग्रेफाइट", "फुलरीन", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "विद्युत मोटर की दक्षता बढ़ाने के लिए क्या प्रयोग किया जाता है?",
    "options_hi": ["ताँबे के तार", "चुंबकीय क्षेत्र", "लोहे के क्रोड", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "निम्नलिखित में से कौन सा रोग वायरस से होता है?",
    "options_hi": ["टीबी", "हैजा", "पोलियो", "टायफाइड"],
    "answer_hi": "पोलियो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "पृथ्वी के चुंबकीय क्षेत्र का कारण क्या है?",
    "options_hi": ["बाहरी कोर में तरल लोहा", "भू-पर्पटी", "मैंटल", "आंतरिक कोर"],
    "answer_hi": "बाहरी कोर में तरल लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "एकल संकरण वाले कार्बन परमाणु में कितने σ बंध होते हैं?",
    "options_hi": ["1", "2", "3", "4"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "मनुष्य के मस्तिष्क का वजन लगभग कितना होता है?",
    "options_hi": ["500 ग्राम", "1.4 किलोग्राम", "2.5 किलोग्राम", "3 किलोग्राम"],
    "answer_hi": "1.4 किलोग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "जल का रासायनिक सूत्र क्या है?",
    "options_hi": ["H₂O", "HO", "H₂O₂", "H₃O"],
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "प्रतिरोधकता का मात्रक क्या है?",
    "options_hi": ["ओम", "ओम-मीटर", "वोल्ट/एम्पीयर", "एम्पीयर/वोल्ट"],
    "answer_hi": "ओम-मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "निम्नलिखित में से कौन सा यौगिक सोडियम हाइड्रॉक्साइड है?",
    "options_hi": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "प्रकाश वर्ष किसकी इकाई है?",
    "options_hi": ["समय", "दूरी", "चाल", "आवृत्ति"],
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "मानव शरीर में सबसे बड़ी धमनी कौन सी है?",
    "options_hi": ["पल्मोनरी धमनी", "अधोमहाधमनी", "कारोटिड धमनी", "रेडियल धमनी"],
    "answer_hi": "अधोमहाधमनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "निम्नलिखित में से कौन सा ईंधन जीवाश्म ईंधन नहीं है?",
    "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "बायोगैस"],
    "answer_hi": "बायोगैस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "विद्युत चुम्बकीय प्रेरण की घटना किसने खोजी?",
    "options_hi": ["थॉमस एडिसन", "माइकल फैराडे", "ओरस्टेड", "एम्पीयर"],
    "answer_hi": "माइकल फैराडे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "पौधों में फलों के पकने के लिए कौन सा हॉर्मोन जिम्मेदार है?",
    "options_hi": ["ऑक्सिन", "जिबरेलिन", "एथिलीन", "साइटोकाइनिन"],
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "निम्नलिखित में से कौन सा तत्व कार्बनिक यौगिकों का आधार है?",
    "options_hi": ["कार्बन", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "वायुमंडलीय दबाव को मापने वाला उपकरण क्या कहलाता है?",
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मनुष्य में पाचन क्रिया कहाँ समाप्त होती है?",
    "options_hi": ["मुंह", "आमाशय", "छोटी आंत", "बड़ी आंत"],
    "answer_hi": "छोटी आंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "निम्नलिखित में से कौन सा अम्ल विटामिन C है?",
    "options_hi": ["एस्कॉर्बिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "ऐसीटिक अम्ल"],
    "answer_hi": "एस्कॉर्बिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "विद्युत धारा उत्पन्न करने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफार्मर", "डायनेमो"],
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "प्रकाश संश्लेषण में कार्बन डाइऑक्साइड का स्थिरीकरण किसके द्वारा होता है?",
    "options_hi": ["ATP", "NADPH", "रुबिस्को", "क्लोरोफिल"],
    "answer_hi": "रुबिस्को",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कहाँ पाई जाती है?",
    "options_hi": ["कान", "नाक", "उंगली", "पैर"],
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "निम्नलिखित में से कौन सा कार्बनिक यौगिक है?",
    "options_hi": ["CH₄", "CO₂", "CaCO₃", "NaCl"],
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "विद्युत बल्ब का तंतु किस धातु का बना होता है?",
    "options_hi": ["ताँबा", "टंगस्टन", "लोहा", "एल्युमिनियम"],
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "पौधों में जल का अवशोषण मुख्य रूप से किस भाग द्वारा होता है?",
    "options_hi": ["मूल रोम", "पत्तियाँ", "तना", "फूल"],
    "answer_hi": "मूल रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस है?",
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रस ऑक्साइड", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "मानव आँख में रंगों को पहचानने वाली कोशिकाएँ क्या कहलाती हैं?",
    "options_hi": ["रॉड कोशिकाएँ", "कोन कोशिकाएँ", "नेत्रकाच कोशिकाएँ", "पुतली"],
    "answer_hi": "कोन कोशिकाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सूर्य की ऊर्जा का स्रोत क्या है?",
    "options_hi": ["नाभिकीय संलयन", "नाभिकीय विखंडन", "रासायनिक अभिक्रिया", "गुरुत्वाकर्षण"],
    "answer_hi": "नाभिकीय संलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "विद्युत परिपथ में प्रतिरोधों के श्रेणीक्रम में क्या स्थिर रहता है?",
    "options_hi": ["वोल्टेज", "धारा", "प्रतिरोध", "शक्ति"],
    "answer_hi": "धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "निम्नलिखित में से कौन सा विटामिन रतौंधी रोग से बचाता है?",
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "पौधों में प्रकाशानुवर्तन किस हॉर्मोन के कारण होता है?",
    "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    "answer_hi": "ऑक्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "वायुमंडल की सबसे निचली परत कौन सी है?",
    "options_hi": ["ट्रोपोस्फियर", "स्ट्रैटोस्फियर", "मेसोस्फियर", "थर्मोस्फियर"],
    "answer_hi": "ट्रोपोस्फियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "मानव शरीर में रक्त का शुद्धीकरण कहाँ होता है?",
    "options_hi": ["हृदय", "फेफड़े", "वृक्क", "यकृत"],
    "answer_hi": "वृक्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "निम्नलिखित में से कौन सा अम्ल नींबू में पाया जाता है?",
    "options_hi": ["साइट्रिक अम्ल", "ऐसीटिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "विद्युत मोटर में विद्युत ऊर्जा किसमें परिवर्तित होती है?",
    "options_hi": ["यांत्रिक ऊर्जा", "प्रकाश ऊर्जा", "तापीय ऊर्जा", "ध्वनि ऊर्जा"],
    "answer_hi": "यांत्रिक ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "प्रकाश की चाल निर्वात में कितनी होती है?",
    "options_hi": ["3×10⁸ m/s", "3×10⁵ m/s", "330 m/s", "1500 m/s"],
    "answer_hi": "3×10⁸ m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "मानव शरीर में सबसे बड़ी कोशिका कौन सी है?",
    "options_hi": ["लाल रक्त कोशिका", "श्वेत रक्त कोशिका", "तंत्रिका कोशिका", "अंडाणु"],
    "answer_hi": "तंत्रिका कोशिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "निम्नलिखित में से कौन सा पदार्थ अम्ल और क्षारक दोनों के साथ अभिक्रिया करता है?",
    "options_hi": ["उभयधर्मी ऑक्साइड", "अम्लीय ऑक्साइड", "क्षारकीय ऑक्साइड", "लवण"],
    "answer_hi": "उभयधर्मी ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "विद्युत फ्यूज तार किस सिद्धांत पर कार्य करता है?",
    "options_hi": ["तापीय प्रभाव", "चुंबकीय प्रभाव", "रासायनिक प्रभाव", "प्रकाशीय प्रभाव"],
    "answer_hi": "तापीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "पौधों में पत्तियों का हरा रंग किसके कारण होता है?",
    "options_hi": ["क्लोरोफिल", "कैरोटीन", "जैंथोफिल", "फाइकोसायनिन"],
    "answer_hi": "क्लोरोफिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "वायुमंडल में ऑक्सीजन का प्रतिशत कितना है?",
    "options_hi": ["21%", "78%", "0.03%", "0.93%"],
    "answer_hi": "21%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "मानव शरीर में पाचन क्रिया शुरू होती है:",
    "options_hi": ["मुंह में", "आमाशय में", "छोटी आंत में", "बड़ी आंत में"],
    "answer_hi": "मुंह में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "निम्नलिखित में से कौन सा धातु जल के साथ अभिक्रिया करती है?",
    "options_hi": ["सोना", "चाँदी", "सोडियम", "ताँबा"],
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "विद्युत बल्ब के अंदर कौन सी गैस भरी होती है?",
    "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "पौधों में प्रकाश संश्लेषण के लिए आवश्यक प्रकाश किस रंग का होता है?",
    "options_hi": ["लाल और नीला", "हरा", "पीला", "सफेद"],
    "answer_hi": "लाल और नीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "मानव शरीर का सामान्य रक्तचाप कितना होता है?",
    "options_hi": ["120/80 mmHg", "80/120 mmHg", "100/70 mmHg", "140/90 mmHg"],
    "answer_hi": "120/80 mmHg",
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
