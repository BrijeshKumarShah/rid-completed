const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा नदी डेल्टा कौन सा है?",
    "options_hi": ["सुंदरबन डेल्टा", "मिसिसिपी डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "अमेज़न डेल्टा"],
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर में .ico फाइल एक्सटेंशन क्या दर्शाता है?",
    "options_hi": ["आइकन फाइल", "इमेज फाइल", "वीडियो फाइल", "ऑडियो फाइल"],
    "answer_hi": "आइकन फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "संत तुकाराम का जन्म कब हुआ था?",
    "options_hi": ["1608", "1650", "1700", "1750"],
    "answer_hi": "1608",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे बड़ी लसिका ग्रंथि कौन सी है?",
    "options_hi": ["थाइमस", "स्प्लीन", "लिम्फ नोड", "टॉन्सिल"],
    "answer_hi": "स्प्लीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय खेल है:",
    "options_hi": ["हॉकी", "क्रिकेट", "फुटबॉल", "कबड्डी"],
    "answer_hi": "हॉकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "RIP का पूरा नाम है:",
    "options_hi": ["Routing Information Protocol", "Routing Internet Protocol", "Router Information Protocol", "Router Internet Protocol"],
    "answer_hi": "Routing Information Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "सार्थक उपग्रह का प्राथमिक उद्देश्य क्या है?",
    "options_hi": ["नौवहन", "संचार", "पृथ्वी अवलोकन", "मौसम पूर्वानुमान"],
    "answer_hi": "नौवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी प्रवाल दीवार कौन सी है?",
    "options_hi": ["ग्रेट बैरियर रीफ", "बेलिज़ बैरियर रीफ", "रेड सी रीफ", "न्यू कैलेडोनिया बैरियर रीफ"],
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक ज़ेप्टोसेकंड में कितने सेकंड होते हैं?",
    "options_hi": ["0.000000000000000000001", "0.000000000000001", "0.000000001", "0.000001"],
    "answer_hi": "0.000000000000000000001",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे अधिक भाषाएँ बोलने वाला देश कौन सा है?",
    "options_hi": ["पापुआ न्यू गिनी", "भारत", "इंडोनेशिया", "नाइजीरिया"],
    "answer_hi": "पापुआ न्यू गिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे अधिक कठोर अधातु कौन सा है?",
    "options_hi": ["कार्बन (हीरा)", "बोरॉन", "सिलिकॉन", "सल्फर"],
    "answer_hi": "कार्बन (हीरा)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "अर्जुन पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["खेल", "विज्ञान", "साहित्य", "कला"],
    "answer_hi": "खेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला क्रिकेट टीम की कप्तान कौन थीं?",
    "options_hi": ["शांता रंगास्वामी", "झूलन गोस्वामी", "मिताली राज", "दीना मेहता"],
    "answer_hi": "शांता रंगास्वामी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "बाइजू के संस्थापक कौन हैं?",
    "options_hi": ["बायजू रवींद्रन और दिव्या गोकुलनाथ", "रोहन पांडा", "अमित सिंह", "राजन अनादी"],
    "answer_hi": "बायजू रवींद्रन और दिव्या गोकुलनाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "सरोजिनी नायडू का जन्म कब हुआ था?",
    "options_hi": ["1879", "1885", "1890", "1900"],
    "answer_hi": "1879",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का सबसे ठंडा परत कौन सा है?",
    "options_hi": ["मेसोस्फीयर", "ट्रोपोस्फीयर", "स्ट्रैटोस्फीयर", "थर्मोस्फीयर"],
    "answer_hi": "मेसोस्फीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे कम कठोर अधातु कौन सा है?",
    "options_hi": ["ग्रेफाइट", "सल्फर", "फॉस्फोरस", "आयोडीन"],
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "मणिपुर का प्राचीन नाम क्या था?",
    "options_hi": ["कंगलेइपाक", "मणिपुर", "मेइतेइ", "पोरोम"],
    "answer_hi": "कंगलेइपाक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा जानवर सबसे अधिक ऊँची छलांग लगा सकता है?",
    "options_hi": ["प्यूमा", "कंगारू", "हिरण", "बाघ"],
    "answer_hi": "प्यूमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "EIGRP का पूरा नाम है:",
    "options_hi": ["Enhanced Interior Gateway Routing Protocol", "Enhanced Internet Gateway Routing Protocol", "Extended Interior Gateway Routing Protocol", "Extended Internet Gateway Routing Protocol"],
    "answer_hi": "Enhanced Interior Gateway Routing Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा जस्ता उत्पादक राज्य कौन सा है?",
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "बिहार", "झारखंड"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में रेनिन एंजाइम कहाँ पाया जाता है?",
    "options_hi": ["गुर्दे", "आमाशय", "अग्न्याशय", "यकृत"],
    "answer_hi": "गुर्दे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "पार्थेनन मंदिर किस देश में स्थित है?",
    "options_hi": ["ग्रीस", "इटली", "तुर्की", "मिस्र"],
    "answer_hi": "ग्रीस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "पब्लिक क्लाउड और प्राइवेट क्लाउड में क्या अंतर है?",
    "options_hi": ["पब्लिक सभी के लिए, प्राइवेट संगठन विशेष", "दोनों समान", "कोई अंतर नहीं", "पब्लिक संगठन विशेष, प्राइवेट सभी के लिए"],
    "answer_hi": "पब्लिक सभी के लिए, प्राइवेट संगठन विशेष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?",
    "options_hi": ["28 फरवरी", "26 जनवरी", "15 अगस्त", "2 अक्टूबर"],
    "answer_hi": "28 फरवरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे अधिक गलनांक वाला अधातु कौन सा है?",
    "options_hi": ["कार्बन", "बोरॉन", "सिलिकॉन", "फॉस्फोरस"],
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "स्नैपचैट के संस्थापक कौन हैं?",
    "options_hi": ["एवन स्पीगल और बॉबी मर्फी", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "एवन स्पीगल और बॉबी मर्फी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "श्रीनगर का शंकराचार्य मंदिर किस पहाड़ी पर स्थित है?",
    "options_hi": ["तख्त-ए-सुलेमान", "शंकराचार्य पहाड़ी", "हरि पर्वत", "जवाहर पहाड़ी"],
    "answer_hi": "तख्त-ए-सुलेमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "QoS का पूरा नाम है:",
    "options_hi": ["Quality of Service", "Quality of System", "Quality of Security", "Quality of Software"],
    "answer_hi": "Quality of Service",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा प्राकृतिक वॉटरफॉल कौन सा है?",
    "options_hi": ["कुंचिकल प्रपात", "जोग प्रपात", "धुआंधार प्रपात", "अथिराप्पिल्ली प्रपात"],
    "answer_hi": "कुंचिकल प्रपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन K की कमी से कौन सा रोग होता है?",
    "options_hi": ["रक्तस्राव रोग", "स्कर्वी", "रिकेट्स", "पेलाग्रा"],
    "answer_hi": "रक्तस्राव रोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे ठंडा स्थान कौन सा है?",
    "options_hi": ["प्लूटो", "नेपच्यून", "यूरेनस", "शनि"],
    "answer_hi": "प्लूटो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "सोशल नेटवर्किंग का जनक किसे माना जाता है?",
    "options_hi": ["टॉम एंडरसन", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "टॉम एंडरसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहला गणतंत्र दिवस कब मनाया गया?",
    "options_hi": ["1950", "1947", "1951", "1948"],
    "answer_hi": "1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "न्यूट्रिनो की खोज किसने की?",
    "options_hi": ["वोल्फगैंग पाउली", "एनरिको फर्मी", "नील्स बोहर", "अर्नेस्ट रदरफोर्ड"],
    "answer_hi": "वोल्फगैंग पाउली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे बड़ी भूमिगत झील कौन सी है?",
    "options_hi": ["ड्रैकेन्सबर्ग की गुफा झील", "वैटनाजोकुल ग्लेशियर झील", "लॉस्ट सी", "रेड सी"],
    "answer_hi": "ड्रैकेन्सबर्ग की गुफा झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "डिजिटलिस की खोज किसने की?",
    "options_hi": ["विलियम विदरिंग", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
    "answer_hi": "विलियम विदरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'लैंड ऑफ मिडनाइट बेसबॉल' कहा जाता है?",
    "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"],
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "CICD का पूरा नाम है:",
    "options_hi": ["Continuous Integration/Continuous Deployment", "Continuous Integration/Continuous Delivery", "Continuous Implementation/Continuous Deployment", "Continuous Implementation/Continuous Delivery"],
    "answer_hi": "Continuous Integration/Continuous Deployment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "श्रोडिंगर की बिल्ली प्रयोग किसने प्रस्तावित किया?",
    "options_hi": ["अर्विन श्रोडिंगर", "अल्बर्ट आइंस्टाइन", "नील्स बोहर", "वर्नर हाइजेनबर्ग"],
    "answer_hi": "अर्विन श्रोडिंगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा प्राकृतिक झील द्वीप कौन सा है?",
    "options_hi": ["लोकटक में फुमदी", "चिल्का में नलबाणा", "वुलर में ज़ैनुल लंक", "डल में चर चिनार"],
    "answer_hi": "लोकटक में फुमदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधों में थर्मोट्रोपिज्म क्या है?",
    "options_hi": ["ताप की ओर वृद्धि", "प्रकाश की ओर वृद्धि", "गुरुत्वाकर्षण की ओर वृद्धि", "पानी की ओर वृद्धि"],
    "answer_hi": "ताप की ओर वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "किस देश को 'लैंड ऑफ मिडनाइट बैडमिंटन' कहा जाता है?",
    "options_hi": ["फिनलैंड", "नॉर्वे", "स्वीडन", "आइसलैंड"],
    "answer_hi": "फिनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "माइक्रोफ्रंटेंड आर्किटेक्चर क्या है?",
    "options_hi": ["फ्रंटेंड एप्लिकेशन को छोटे भागों में बाँटना", "बैकेंड एप्लिकेशन को छोटे भागों में बाँटना", "डेटाबेस डिजाइन", "नेटवर्क आर्किटेक्चर"],
    "answer_hi": "फ्रंटेंड एप्लिकेशन को छोटे भागों में बाँटना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "बादामी की गुफाएँ कहाँ स्थित हैं?",
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "मध्य प्रदेश", "राजस्थान"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "किस ग्रह का वर्ष सबसे छोटा होता है?",
    "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
    "answer_hi": "बुध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "ओडोर रिकग्निशन कैसे काम करता है?",
    "options_hi": ["गंध के आधार पर", "आवाज के आधार पर", "चेहरे के आधार पर", "आंख के आधार पर"],
    "answer_hi": "गंध के आधार पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "हीराकुंड बांध किस नदी पर है?",
    "options_hi": ["महानदी", "गोदावरी", "कृष्णा", "कावेरी"],
    "answer_hi": "महानदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे लंबी हड्डी कौन सी है?",
    "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "पेल्विस"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "IaaS का पूरा नाम है:",
    "options_hi": ["Infrastructure as a Service", "Infrastructure as Service", "Internet as a Service", "Internet as Service"],
    "answer_hi": "Infrastructure as a Service",
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
