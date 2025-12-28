const questions = [
  {
    "num": 1,
    "question_hi": "मानव नेत्र में कौन सा लेंस पाया जाता है?",
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "समतल-अवतल लेंस", "उभयोत्तल लेंस"],
    "answer_hi": "उभयोत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "फोटोसिंथेसिस के दौरान पौधे किस गैस का उपयोग करते हैं?",
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "विद्युत हीटर का तार किस धातु का बना होता है?",
    "options_hi": ["ताँबा", "नाइक्रोम", "एल्युमीनियम", "स्टील"],
    "answer_hi": "नाइक्रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में कुल हड्डियों की संख्या लगभग होती है:",
    "options_hi": ["106", "206", "306", "406"],
    "answer_hi": "206",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "प्रकाश का वायु से जल में प्रवेश करने पर होता है:",
    "options_hi": ["अपवर्तन", "परावर्तन", "विवर्तन", "प्रकीर्णन"],
    "answer_hi": "अपवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "विद्युत धारा का चुंबकीय प्रभाव सबसे पहले किसने खोजा?",
    "options_hi": ["एडिसन", "फैराडे", "ओर्स्टेड", "न्यूटन"],
    "answer_hi": "ओर्स्टेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "पौधों में प्रकाश संश्लेषण मुख्य रूप से किस भाग में होता है?",
    "options_hi": ["जड़", "तना", "पत्तियाँ", "फूल"],
    "answer_hi": "पत्तियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "एसिड और बेस की अभिक्रिया से बनता है:",
    "options_hi": ["लवण और जल", "गैस", "अम्ल", "क्षार"],
    "answer_hi": "लवण और जल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "मानव शरीर में रक्त का शुद्धीकरण कहाँ होता है?",
    "options_hi": ["हृदय", "फेफड़े", "वृक्क", "यकृत"],
    "answer_hi": "वृक्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "एक उत्तल लेंस की फोकस दूरी 20 cm है। इसकी क्षमता होगी:",
    "options_hi": ["+5 D", "-5 D", "+0.5 D", "-0.5 D"],
    "answer_hi": "+5 D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "ओजोन परत पृथ्वी के किस भाग में पाई जाती है?",
    "options_hi": ["ट्रोपोस्फीयर", "स्ट्रैटोस्फीयर", "मेसोस्फीयर", "थर्मोस्फीयर"],
    "answer_hi": "स्ट्रैटोस्फीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "विद्युत मोटर में विद्युत ऊर्जा परिवर्तित होती है:",
    "options_hi": ["यांत्रिक ऊर्जा में", "तापीय ऊर्जा में", "रासायनिक ऊर्जा में", "प्रकाश ऊर्जा में"],
    "answer_hi": "यांत्रिक ऊर्जा में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "मानव शरीर में सबसे लंबी कोशिका है:",
    "options_hi": ["तंत्रिका कोशिका", "रक्त कोशिका", "मांसपेशी कोशिका", "त्वचा कोशिका"],
    "answer_hi": "तंत्रिका कोशिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "विद्युत बल्ब के अंदर कौन सी गैस भरी होती है?",
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन या आर्गन", "हीलियम"],
    "answer_hi": "नाइट्रोजन या आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "पौधों में प्रकाश संश्लेषण के लिए आवश्यक प्रकाश किस रंग का सबसे अधिक प्रभावी है?",
    "options_hi": ["हरा", "लाल", "पीला", "नीला"],
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "विद्युत प्रतिरोधकता का SI मात्रक है:",
    "options_hi": ["ओम", "ओम-मीटर", "वोल्ट/एम्पियर", "वाट"],
    "answer_hi": "ओम-मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "मानव शरीर का pH मान लगभग होता है:",
    "options_hi": ["4.5-5.5", "6.5-7.5", "7.35-7.45", "8.5-9.5"],
    "answer_hi": "7.35-7.45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "सूर्य से आने वाली पराबैंगनी किरणों को अवशोषित करती है:",
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "ओजोन", "कार्बन डाइऑक्साइड"],
    "answer_hi": "ओजोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "विद्युत जनरेटर द्वारा उत्पन्न विद्युत धारा होती है:",
    "options_hi": ["दिष्ट धारा", "प्रत्यावर्ती धारा", "दोनों", "इनमें से कोई नहीं"],
    "answer_hi": "प्रत्यावर्ती धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "पौधों में जाइलम का कार्य है:",
    "options_hi": ["जल का परिवहन", "भोजन का परिवहन", "श्वसन", "प्रकाश संश्लेषण"],
    "answer_hi": "जल का परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "उत्तल दर्पण द्वारा बना प्रतिबिंब हमेशा होता है:",
    "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
    "answer_hi": "आभासी और सीधा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में इंसुलिन हार्मोन कहाँ से स्रावित होता है?",
    "options_hi": ["अग्न्याशय", "यकृत", "थायरॉइड", "अधिवृक्क"],
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "विद्युत ऊर्जा का व्यावसायिक मात्रक है:",
    "options_hi": ["वाट", "जूल", "किलोवाट-घंटा", "कैलोरी"],
    "answer_hi": "किलोवाट-घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "पादपों में श्वसन के दौरान निकलने वाली गैस है:",
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "अवतल लेंस की फोकस दूरी होती है:",
    "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
    "answer_hi": "ऋणात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "मानव शरीर का सबसे बड़ा अंग है:",
    "options_hi": ["यकृत", "त्वचा", "फेफड़े", "हृदय"],
    "answer_hi": "त्वचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "विद्युत बल्ब के आविष्कारक हैं:",
    "options_hi": ["थॉमस एडिसन", "ग्राहम बेल", "माइकल फैराडे", "जेम्स वाट"],
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "पौधों में पत्तियों के रंध्रों का कार्य है:",
    "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "गैसों का आदान-प्रदान", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "विद्युत परिपथ में वोल्टमीटर को कैसे जोड़ा जाता है?",
    "options_hi": ["श्रेणीक्रम", "समानांतर क्रम", "दोनों में", "किसी में नहीं"],
    "answer_hi": "समानांतर क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "मानव शरीर में रक्त का लाल रंग किसके कारण होता है?",
    "options_hi": ["प्लाज्मा", "हीमोग्लोबिन", "श्वेत रक्त कणिकाएँ", "प्लेटलेट्स"],
    "answer_hi": "हीमोग्लोबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "प्रकाश का प्रकीर्णन किसके कारण होता है?",
    "options_hi": ["वायु के कण", "जल के कण", "धूल के कण", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "विद्युत हीटर का तार नाइक्रोम का होता है क्योंकि यह:",
    "options_hi": ["सस्ता है", "उच्च प्रतिरोधकता रखता है", "चमकीला है", "हल्का है"],
    "answer_hi": "उच्च प्रतिरोधकता रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "मानव शरीर में पाचन की शुरुआत कहाँ होती है?",
    "options_hi": ["मुख", "आमाशय", "ग्रसनी", "ग्रहणी"],
    "answer_hi": "मुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "उत्तल लेंस द्वारा बना प्रतिबिंब आभासी और बड़ा होता है जब वस्तु रखी जाती है:",
    "options_hi": ["फोकस पर", "फोकस और प्रकाश केंद्र के बीच", "वक्रता केंद्र पर", "अनंत पर"],
    "answer_hi": "फोकस और प्रकाश केंद्र के बीच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "पौधों में फ्लोएम का कार्य है:",
    "options_hi": ["जल का परिवहन", "भोजन का परिवहन", "खनिजों का परिवहन", "गैसों का परिवहन"],
    "answer_hi": "भोजन का परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विद्युत धारा का तापीय प्रभाव किस पर आधारित है?",
    "options_hi": ["जूल का नियम", "ओम का नियम", "फैराडे का नियम", "न्यूटन का नियम"],
    "answer_hi": "जूल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "मानव शरीर में हीमोग्लोबिन पाया जाता है:",
    "options_hi": ["श्वेत रक्त कणिकाओं में", "लाल रक्त कणिकाओं में", "प्लेटलेट्स में", "प्लाज्मा में"],
    "answer_hi": "लाल रक्त कणिकाओं में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "प्रकाश के अपवर्तन के कारण होता है:",
    "options_hi": ["प्रकाश के वेग में परिवर्तन", "प्रकाश के रंग में परिवर्तन", "प्रकाश की तीव्रता में परिवर्तन", "प्रकाश की दिशा में परिवर्तन"],
    "answer_hi": "प्रकाश के वेग में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "विद्युत फ्यूज तार किस धातु का बना होता है?",
    "options_hi": ["ताँबा", "टिन और सीसा का मिश्रधातु", "एल्युमीनियम", "लोहा"],
    "answer_hi": "टिन और सीसा का मिश्रधातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कान में पाई जाती है, जिसे कहते हैं:",
    "options_hi": ["स्टेपीज़", "मैलियस", "इनकस", "फीमर"],
    "answer_hi": "स्टेपीज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "पादपों में प्रकाश संश्लेषण के लिए आवश्यक क्लोरोफिल किसमें पाया जाता है?",
    "options_hi": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी बॉडी"],
    "answer_hi": "क्लोरोप्लास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "विद्युत मोटर में विद्युत धारा की दिशा बदलने के लिए प्रयोग किया जाता है:",
    "options_hi": ["ब्रश", "कम्यूटेटर", "आर्मेचर", "फील्ड मैग्नेट"],
    "answer_hi": "कम्यूटेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "मानव शरीर में पाचन क्रिया पूरी होती है:",
    "options_hi": ["मुख में", "आमाशय में", "छोटी आंत में", "बड़ी आंत में"],
    "answer_hi": "छोटी आंत में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "अवतल दर्पण की फोकस दूरी और वक्रता त्रिज्या के बीच संबंध है:",
    "options_hi": ["f = R", "f = R/2", "f = 2R", "f = R/4"],
    "answer_hi": "f = R/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "पौधों में वाष्पोत्सर्जन किसके द्वारा होता है?",
    "options_hi": ["रंध्र", "जड़", "तना", "फूल"],
    "answer_hi": "रंध्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "विद्युत परिपथ में एमीटर को कैसे जोड़ा जाता है?",
    "options_hi": ["श्रेणीक्रम", "समानांतर क्रम", "दोनों में", "किसी में नहीं"],
    "answer_hi": "श्रेणीक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "मानव शरीर में थायरॉक्सिन हार्मोन कहाँ से स्रावित होता है?",
    "options_hi": ["थायरॉइड", "अग्न्याशय", "अधिवृक्क", "पीयूष ग्रंथि"],
    "answer_hi": "थायरॉइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "उत्तल लेंस को कहा जाता है:",
    "options_hi": ["अभिसारी लेंस", "अपसारी लेंस", "समतल लेंस", "बेलनाकार लेंस"],
    "answer_hi": "अभिसारी लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "पौधों में परागण होता है:",
    "options_hi": ["वायु द्वारा", "जल द्वारा", "कीट द्वारा", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "विद्युत शक्ति का सूत्र है:",
    "options_hi": ["P = VI", "P = I²R", "P = V²/R", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
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

