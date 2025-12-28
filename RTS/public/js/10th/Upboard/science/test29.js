


const questions = [
  {
    "num": 1,
    "question_hi": "निम्नलिखित में से कौन सी गैस पौधों द्वारा प्रकाश संश्लेषण में उपयोग की जाती है?",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "मानव मस्तिष्क का कौन सा भाग श्वसन और हृदय गति को नियंत्रित करता है?",
    "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला ओब्लोंगेटा", "हाइपोथैलेमस"],
    "answer_hi": "मेडुला ओब्लोंगेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "किस धातु का उपयोग थर्मामीटर में किया जाता है?",
    "options_hi": ["पारा", "सोडियम", "लोहा", "ताँबा"],
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "विद्युत बल्ब के तंतु का तापमान लगभग कितना होता है?",
    "options_hi": ["500°C", "1000°C", "2500°C", "3500°C"],
    "answer_hi": "2500°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "निम्नलिखित में से कौन सा कार्बोहाइड्रेट है?",
    "options_hi": ["ग्लूकोज", "वसा", "प्रोटीन", "न्यूक्लिक अम्ल"],
    "answer_hi": "ग्लूकोज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "उत्तल लेंस द्वारा बना प्रतिबिंब हमेशा कैसा होता है?",
    "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "परिस्थिति पर निर्भर"],
    "answer_hi": "परिस्थिति पर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "पृथ्वी पर जीवन के लिए सबसे महत्वपूर्ण गैस कौन सी है?",
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "मानव शरीर में हीमोग्लोबिन कहाँ पाया जाता है?",
    "options_hi": ["लाल रक्त कोशिकाओं में", "श्वेत रक्त कोशिकाओं में", "प्लेटलेट्स में", "प्लाज्मा में"],
    "answer_hi": "लाल रक्त कोशिकाओं में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "निम्नलिखित में से कौन सा अम्ल नारंगी में पाया जाता है?",
    "options_hi": ["साइट्रिक अम्ल", "ऐसीटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विद्युत मोटर किस सिद्धांत पर कार्य करती है?",
    "options_hi": ["चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव", "प्रकाशीय प्रभाव"],
    "answer_hi": "चुंबकीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "प्रकाश वर्ष किसकी इकाई है?",
    "options_hi": ["समय", "दूरी", "चाल", "ऊर्जा"],
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    "options_hi": ["फीमर", "टिबिया", "फिबुला", "रेडियस"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "निम्नलिखित में से कौन सा तत्व आवर्त सारणी का सबसे हल्का तत्व है?",
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरिलियम"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "विद्युत प्रतिरोध किस पर निर्भर करता है?",
    "options_hi": ["तार की लंबाई", "तार के अनुप्रस्थ काट का क्षेत्रफल", "तार के पदार्थ की प्रकृति", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "ओज़ोन परत किस विकिरण से हमारी रक्षा करती है?",
    "options_hi": ["अवरक्त किरणें", "पराबैंगनी किरणें", "रेडियो तरंगें", "सूक्ष्म तरंगें"],
    "answer_hi": "पराबैंगनी किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पौधों में जल का परिवहन किसके द्वारा होता है?",
    "options_hi": ["जाइलम", "फ्लोएम", "रंध्र", "मूल रोम"],
    "answer_hi": "जाइलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "निम्नलिखित में से कौन सा विटामिन वसा में घुलनशील है?",
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन B1", "विटामिन B12"],
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "विद्युत बल्ब का आविष्कार किसने किया?",
    "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे", "आइजैक न्यूटन"],
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
    "options_hi": ["यकृत", "अग्न्याशय", "थायरॉयड", "पीयूष ग्रंथि"],
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "निम्नलिखित में से कौन सा धातु सबसे अधिक तन्य है?",
    "options_hi": ["सोना", "चाँदी", "ताँबा", "लोहा"],
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "विद्युत परिपथ में वोल्टमीटर कैसे जोड़ा जाता है?",
    "options_hi": ["श्रेणीक्रम", "समानांतर क्रम", "दोनों", "किसी में नहीं"],
    "answer_hi": "समानांतर क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "पौधों में प्रकाशानुवर्तन किसके कारण होता है?",
    "options_hi": ["प्रकाश", "गुरुत्व", "जल", "स्पर्श"],
    "answer_hi": "प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "मानव शरीर का सामान्य तापमान कितना होता है?",
    "options_hi": ["36.5°C", "37°C", "37.5°C", "38°C"],
    "answer_hi": "37°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "निम्नलिखित में से कौन सा असंतृप्त हाइड्रोकार्बन है?",
    "options_hi": ["CH₄", "C₂H₆", "C₂H₄", "C₃H₈"],
    "answer_hi": "C₂H₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "विद्युत मोटर में विद्युत ऊर्जा किसमें परिवर्तित होती है?",
    "options_hi": ["यांत्रिक ऊर्जा", "प्रकाश ऊर्जा", "तापीय ऊर्जा", "ध्वनि ऊर्जा"],
    "answer_hi": "यांत्रिक ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "प्रकाश की चाल सबसे अधिक किसमें होती है?",
    "options_hi": ["वायु", "जल", "कांच", "निर्वात"],
    "answer_hi": "निर्वात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कहाँ पाई जाती है?",
    "options_hi": ["कान", "नाक", "उंगली", "पैर"],
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "निम्नलिखित में से कौन सा यौगिक सोडियम क्लोराइड है?",
    "options_hi": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "विद्युत बल्ब के अंदर कौन सी गैस भरी होती है?",
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "हीलियम"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "पौधों में प्रकाश संश्लेषण किस कोशिकांग में होता है?",
    "options_hi": ["माइटोकॉन्ड्रिया", "हरित लवक", "राइबोसोम", "केंद्रक"],
    "answer_hi": "हरित लवक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "मानव शरीर में रक्त का थक्का बनाने में कौन सा विटामिन सहायक है?",
    "options_hi": ["विटामिन A", "विटामिन K", "विटामिन C", "विटामिन D"],
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "विद्युत धारा का चुंबकीय प्रभाव सबसे पहले किसने खोजा?",
    "options_hi": ["ओरस्टेड", "फैराडे", "एम्पीयर", "मैक्सवेल"],
    "answer_hi": "ओरस्टेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "पौधों में जड़ द्वारा जल का अवशोषण किस प्रक्रिया से होता है?",
    "options_hi": ["परासरण", "अपोहन", "प्रसार", "सक्रिय परिवहन"],
    "answer_hi": "परासरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "निम्नलिखित में से कौन सा तत्व ड्यूटेरियम का समस्थानिक है?",
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरिलियम"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विद्युत फ्यूज तार किस धातु का बना होता है?",
    "options_hi": ["टिन और सीसा का मिश्रधातु", "ताँबा", "एल्युमिनियम", "लोहा"],
    "answer_hi": "टिन और सीसा का मिश्रधातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "मानव शरीर में कुल हड्डियों की संख्या कितनी होती है?",
    "options_hi": ["206", "306", "106", "406"],
    "answer_hi": "206",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "निम्नलिखित में से कौन सा जैव अपघटित नहीं है?",
    "options_hi": ["कागज", "लकड़ी", "प्लास्टिक", "खाद्य अपशिष्ट"],
    "answer_hi": "प्लास्टिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "विद्युत परिपथ में एमीटर कैसे जोड़ा जाता है?",
    "options_hi": ["श्रेणीक्रम", "समानांतर क्रम", "दोनों", "किसी में नहीं"],
    "answer_hi": "श्रेणीक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "पौधों में फलों के पकने के लिए कौन सा हॉर्मोन जिम्मेदार है?",
    "options_hi": ["ऑक्सिन", "जिबरेलिन", "एथिलीन", "साइटोकाइनिन"],
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "मानव आँख में रंगों को पहचानने वाली कोशिकाएँ क्या कहलाती हैं?",
    "options_hi": ["रॉड कोशिकाएँ", "कोन कोशिकाएँ", "नेत्रकाच कोशिकाएँ", "पुतली"],
    "answer_hi": "कोन कोशिकाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस है?",
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रस ऑक्साइड", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "विद्युत ऊर्जा का व्यापारिक मात्रक क्या है?",
    "options_hi": ["जूल", "वाट", "किलोवाट-घंटा", "वोल्ट"],
    "answer_hi": "किलोवाट-घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "पौधों में प्रकाश संश्लेषण के लिए आवश्यक प्रकाश किस रंग का होता है?",
    "options_hi": ["लाल और नीला", "हरा", "पीला", "सफेद"],
    "answer_hi": "लाल और नीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "मानव शरीर में सबसे बड़ी कोशिका कौन सी है?",
    "options_hi": ["लाल रक्त कोशिका", "श्वेत रक्त कोशिका", "तंत्रिका कोशिका", "अंडाणु"],
    "answer_hi": "तंत्रिका कोशिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "निम्नलिखित में से कौन सा अम्ल विटामिन C है?",
    "options_hi": ["एस्कॉर्बिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "ऐसीटिक अम्ल"],
    "answer_hi": "एस्कॉर्बिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "विद्युत मोटर में विद्युत धारा की दिशा बदलने वाले उपकरण को क्या कहते हैं?",
    "options_hi": ["कम्यूटेटर", "ब्रश", "आर्मेचर", "फील्ड कॉइल"],
    "answer_hi": "कम्यूटेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "पौधों में पत्तियों का हरा रंग किसके कारण होता है?",
    "options_hi": ["क्लोरोफिल", "कैरोटीन", "जैंथोफिल", "फाइकोसायनिन"],
    "answer_hi": "क्लोरोफिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में रक्त का शुद्धीकरण कहाँ होता है?",
    "options_hi": ["वृक्क", "हृदय", "फेफड़े", "यकृत"],
    "answer_hi": "वृक्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "विद्युत चालकता की दृष्टि से सबसे अच्छा चालक कौन सा है?",
    "options_hi": ["चाँदी", "ताँबा", "एल्युमिनियम", "लोहा"],
    "answer_hi": "चाँदी",
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
