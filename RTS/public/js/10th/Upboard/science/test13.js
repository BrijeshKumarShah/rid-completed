const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे ऊँचा जलप्रपात कौन सा है?",
    "options_hi": ["एंजल फॉल्स", "नियाग्रा फॉल्स", "विक्टोरिया फॉल्स", "इगाज़ू फॉल्स"],
    "answer_hi": "एंजल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर में .docx फाइल एक्सटेंशन क्या दर्शाता है?",
    "options_hi": ["माइक्रोसॉफ्ट वर्ड डॉक्यूमेंट", "एक्सेल फाइल", "पावरपॉइंट फाइल", "टेक्स्ट फाइल"],
    "answer_hi": "माइक्रोसॉफ्ट वर्ड डॉक्यूमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "संत तुकाराम का जन्म स्थान कहाँ है?",
    "options_hi": ["देहू", "पंढरपुर", "शिरडी", "नासिक"],
    "answer_hi": "देहू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे बड़ी मांसपेशी कौन सी है?",
    "options_hi": ["ग्लूटस मैक्सिमस", "क्वाड्रिसेप्स", "बाइसेप्स", "ट्राइसेप्स"],
    "answer_hi": "ग्लूटस मैक्सिमस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय जलीय जीव है:",
    "options_hi": ["गंगा डॉल्फिन", "मगरमच्छ", "हंस", "कछुआ"],
    "answer_hi": "गंगा डॉल्फिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "VPN का पूरा नाम है:",
    "options_hi": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Virtual Personal Network"],
    "answer_hi": "Virtual Private Network",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "शुक्रयान-1 का उद्देश्य क्या है?",
    "options_hi": ["शुक्र ग्रह का अध्ययन", "चंद्रमा का अध्ययन", "मंगल का अध्ययन", "बृहस्पति का अध्ययन"],
    "answer_hi": "शुक्र ग्रह का अध्ययन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी सड़क सुरंग कौन सी है?",
    "options_hi": ["लैरडल टनल", "गोटहार्ड रोड टनल", "सेन बर्नार्डिनो टनल", "मोंट ब्लांक टनल"],
    "answer_hi": "लैरडल टनल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक मिलेनियम में कितने वर्ष होते हैं?",
    "options_hi": ["1000", "100", "10", "500"],
    "answer_hi": "1000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे छोटी नदी कौन सी है?",
    "options_hi": ["रो नदी", "अमेज़न", "नील", "गंगा"],
    "answer_hi": "रो नदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे अधिक तन्य धातु कौन सी है?",
    "options_hi": ["सोना", "चाँदी", "ताँबा", "प्लैटिनम"],
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "मैन बुकर पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["साहित्य", "विज्ञान", "संगीत", "खेल"],
    "answer_hi": "साहित्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला एयर वाइस मार्शल कौन थीं?",
    "options_hi": ["पद्मावती बंदोपाध्याय", "सुधा चौधरी", "हरिता कौर देओल", "शिखा सुरेन्द्रन"],
    "answer_hi": "पद्मावती बंदोपाध्याय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "व्हाट्सएप के संस्थापक कौन हैं?",
    "options_hi": ["जैन कौम और ब्रायन एक्टन", "मार्क जुकरबर्ग", "जैक डोर्सी", "लैरी पेज"],
    "answer_hi": "जैन कौम और ब्रायन एक्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "सरदार वल्लभभाई पटेल का जन्म कब हुआ था?",
    "options_hi": ["1875", "1890", "1900", "1910"],
    "answer_hi": "1875",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का सबसे ऊपरी वायुमंडलीय परत कौन सा है?",
    "options_hi": ["एक्सोस्फीयर", "थर्मोस्फीयर", "मेसोस्फीयर", "स्ट्रैटोस्फीयर"],
    "answer_hi": "एक्सोस्फीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे हल्की गैस कौन सी है?",
    "options_hi": ["हाइड्रोजन", "हीलियम", "नीयन", "ऑक्सीजन"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "ओडिशा का प्राचीन नाम क्या था?",
    "options_hi": ["कलिंग", "उत्कल", "ओड्र देश", "सभी सही"],
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा पक्षी सबसे ऊँचा उड़ सकता है?",
    "options_hi": ["हिमालयन ग्रिफॉन", "गिद्ध", "बाज़", "सारस"],
    "answer_hi": "हिमालयन ग्रिफॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "HTTP का पूरा नाम है:",
    "options_hi": ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Protocol"],
    "answer_hi": "HyperText Transfer Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा प्राकृतिक गैस क्षेत्र कौन सा है?",
    "options_hi": ["मुम्बई हाई", "कृष्णा गोदावरी बेसिन", "असम", "त्रिपुरा"],
    "answer_hi": "मुम्बई हाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में खून का थक्का बनने में कौन सा विटामिन मदद करता है?",
    "options_hi": ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन A"],
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "स्टोनहेंज किस देश में स्थित है?",
    "options_hi": ["इंग्लैंड", "स्कॉटलैंड", "आयरलैंड", "वेल्स"],
    "answer_hi": "इंग्लैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "सॉफ्टवेयर और हार्डवेयर में क्या अंतर है?",
    "options_hi": ["सॉफ्टवेयर प्रोग्राम, हार्डवेयर भौतिक उपकरण", "दोनों समान", "हार्डवेयर प्रोग्राम, सॉफ्टवेयर भौतिक", "कोई अंतर नहीं"],
    "answer_hi": "सॉफ्टवेयर प्रोग्राम, हार्डवेयर भौतिक उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "शिक्षक दिवस कब मनाया जाता है?",
    "options_hi": ["5 सितंबर", "15 अगस्त", "26 जनवरी", "14 नवंबर"],
    "answer_hi": "5 सितंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे अधिक चमकीला प्राकृतिक पदार्थ कौन सा है?",
    "options_hi": ["हीरा", "सोना", "चाँदी", "मोती"],
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "टेलीग्राम के संस्थापक कौन हैं?",
    "options_hi": ["पावेल डुरोव", "मार्क जुकरबर्ग", "जैक डोर्सी", "लैरी पेज"],
    "answer_hi": "पावेल डुरोव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "सांची स्तूप कहाँ स्थित है?",
    "options_hi": ["मध्य प्रदेश", "बिहार", "उत्तर प्रदेश", "महाराष्ट्र"],
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "CSS का पूरा नाम है:",
    "options_hi": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Cascading Style System"],
    "answer_hi": "Cascading Style Sheets",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा रेलवे पुल कौन सा है?",
    "options_hi": ["चेनाब पुल", "कोनकान रेलवे पुल", "हावड़ा पुल", "विक्टोरिया पुल"],
    "answer_hi": "चेनाब पुल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन B1 की कमी से कौन सा रोग होता है?",
    "options_hi": ["बेरीबेरी", "रिकेट्स", "स्कर्वी", "रतौंधी"],
    "answer_hi": "बेरीबेरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे ठंडा स्थान कहाँ है?",
    "options_hi": ["प्लूटो", "नेपच्यून", "यूरेनस", "शनि"],
    "answer_hi": "प्लूटो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "ब्लॉगिंग का जनक किसे माना जाता है?",
    "options_hi": ["जस्टिन हॉल", "टिम बर्नर्स ली", "मार्क जुकरबर्ग", "बिल गेट्स"],
    "answer_hi": "जस्टिन हॉल",
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
    "question_hi": "आइसोटोप की खोज किसने की?",
    "options_hi": ["फ्रेडरिक सोडी", "अर्नेस्ट रदरफोर्ड", "मैरी क्यूरी", "जे.जे. थॉमसन"],
    "answer_hi": "फ्रेडरिक सोडी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे बड़ी अंडरवाटर गुफा कौन सी है?",
    "options_hi": ["सैक एक्टुन", "ग्रेट ब्लू होल", "मोविल गुफा", "क्रिस्टल गुफा"],
    "answer_hi": "सैक एक्टुन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "एंटीबायोटिक्स की खोज किसने की?",
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'लैंड ऑफ माउंटेन एंड मैपल' कहा जाता है?",
    "options_hi": ["कनाडा", "न्यूजीलैंड", "स्विट्जरलैंड", "नेपाल"],
    "answer_hi": "कनाडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "CPU का पूरा नाम है:",
    "options_hi": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    "answer_hi": "Central Processing Unit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "न्यूटन ने गुरुत्वाकर्षण के नियम कब प्रकाशित किए?",
    "options_hi": ["1687", "1666", "1700", "1650"],
    "answer_hi": "1687",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा मैंग्रोव वन कौन सा है?",
    "options_hi": ["सुंदरबन", "भीतरकनिका", "पिचावरम", "चिल्का"],
    "answer_hi": "सुंदरबन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधों में फूलों का मुख्य कार्य क्या है?",
    "options_hi": ["प्रजनन", "प्रकाश संश्लेषण", "सहारा देना", "पानी संग्रह"],
    "answer_hi": "प्रजनन",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 43,
  "question_hi": "किस देश को 'लैंड ऑफ वाइट लिली' कहा जाता है?",
  "options_hi": ["फ्रांस", "इटली", "स्पेन", "पुर्तगाल"],
  "answer_hi": "फ्रांस",
  "attempted": false,
  "selected": ""
  },
  {
    "num": 44,
    "question_hi": "मशीन लर्निंग का मुख्य उद्देश्य क्या है?",
    "options_hi": ["कंप्यूटर को स्वयं सीखने की क्षमता देना", "डेटा स्टोर करना", "ग्राफिक्स डिजाइन करना", "नेटवर्क बनाना"],
    "answer_hi": "कंप्यूटर को स्वयं सीखने की क्षमता देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "कौन सा जानवर अपनी पूँछ से लटक सकता है?",
    "options_hi": ["बंदर", "कोआला", "स्लॉथ", "चमगादड़"],
    "answer_hi": "बंदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "शनि ग्रह पर पहला यान कौन सा था?",
    "options_hi": ["पायोनियर 11", "वॉयजर 1", "कैसिनी", "ह्यूजेंस"],
    "answer_hi": "पायोनियर 11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "फेशियल रिकग्निशन कैसे काम करता है?",
    "options_hi": ["चेहरे की विशेषताओं से", "आवाज से", "उंगली से", "आंख से"],
    "answer_hi": "चेहरे की विशेषताओं से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "दामोदर घाटी परियोजना किस नदी पर है?",
    "options_hi": ["दामोदर", "गंगा", "यमुना", "सोन"],
    "answer_hi": "दामोदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे छोटी अस्थि कौन सी है?",
    "options_hi": ["स्टेपीज", "मैलियस", "इनकस", "फीमर"],
    "answer_hi": "स्टेपीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "PNG का पूरा नाम है:",
    "options_hi": ["Portable Network Graphics", "Portable Network Group", "Picture Network Graphics", "Portable New Graphics"],
    "answer_hi": "Portable Network Graphics",
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
