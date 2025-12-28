


const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा फ्लोटिंग द्वीप कौन सा है?",
    "options_hi": ["ओकिनोशिमा", "मैनहट्टन", "हॉन्ग कॉन्ग", "वेनेशिया"],
    "answer_hi": "ओकिनोशिमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर में .gif फाइल एक्सटेंशन क्या दर्शाता है?",
    "options_hi": ["ग्राफिक्स इंटरचेंज फॉर्मेट", "ग्राफिक्स इमेज फॉर्मेट", "ग्राफिक्स इंटरफेस फॉर्मेट", "ग्राफिक्स इंटरनेट फॉर्मेट"],
    "answer_hi": "ग्राफिक्स इंटरचेंज फॉर्मेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "संत रविदास का जन्म स्थान कहाँ है?",
    "options_hi": ["वाराणसी", "दिल्ली", "मथुरा", "हरिद्वार"],
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे छोटी ग्रंथि कौन सी है?",
    "options_hi": ["पीनियल ग्रंथि", "पिट्यूटरी ग्रंथि", "थाइमस ग्रंथि", "थायरॉयड ग्रंथि"],
    "answer_hi": "पीनियल ग्रंथि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय जलीय पक्षी है:",
    "options_hi": ["सारस", "हंस", "बगुला", "मोर"],
    "answer_hi": "सारस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "SSL का पूरा नाम है:",
    "options_hi": ["Secure Sockets Layer", "Secure Socket Layer", "Security Socket Layer", "Secure System Layer"],
    "answer_hi": "Secure Sockets Layer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "नविक (NAVIC) नेविगेशन सिस्टम कितने उपग्रहों से बना है?",
    "options_hi": ["7", "5", "9", "11"],
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी अंडरवॉटर माउंटेन रेंज कौन सी है?",
    "options_hi": ["मिड-अटलांटिक रिज", "पैसिफिक-अंटार्कटिक रिज", "इंडियन ओशन रिज", "आर्कटिक रिज"],
    "answer_hi": "मिड-अटलांटिक रिज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक नैनोसेकंड में कितने सेकंड होते हैं?",
    "options_hi": ["0.000000001", "0.000001", "0.0000001", "0.00000001"],
    "answer_hi": "0.000000001",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे ऊँची नेविगेबल नदी कौन सी है?",
    "options_hi": ["यांग्त्ज़ी", "अमेज़न", "मिसिसिपी", "डेन्यूब"],
    "answer_hi": "यांग्त्ज़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे अधिक घनत्व वाली गैस कौन सी है?",
    "options_hi": ["रेडॉन", "ज़ीनॉन", "क्रिप्टॉन", "आर्गन"],
    "answer_hi": "रेडॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "कलिंग पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["विज्ञान लोकप्रियकरण", "साहित्य", "खेल", "चिकित्सा"],
    "answer_hi": "विज्ञान लोकप्रियकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला पुलिस महानिदेशक कौन थीं?",
    "options_hi": ["कंचन चौधरी भट्टाचार्य", "किरण बेदी", "सुनीता कृष्णन", "रुक्मिणी मेनन"],
    "answer_hi": "कंचन चौधरी भट्टाचार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "पेटीएम के संस्थापक कौन हैं?",
    "options_hi": ["विजय शेखर शर्मा", "सचिन बंसल", "मुकेश अंबानी", "रतन टाटा"],
    "answer_hi": "विजय शेखर शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "सरोजिनी नायडू का जन्म कब हुआ था?",
    "options_hi": ["1879", "1889", "1899", "1900"],
    "answer_hi": "1879",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का सबसे पतला वायुमंडलीय परत कौन सा है?",
    "options_hi": ["एक्सोस्फीयर", "थर्मोस्फीयर", "मेसोस्फीयर", "स्ट्रैटोस्फीयर"],
    "answer_hi": "एक्सोस्फीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे कम घनत्व वाली धातु कौन सी है?",
    "options_hi": ["लिथियम", "पोटैशियम", "सोडियम", "रुबिडियम"],
    "answer_hi": "लिथियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "गोवा का प्राचीन नाम क्या था?",
    "options_hi": ["गोमांतक", "गोपुर", "गोवर्धन", "गोलोक"],
    "answer_hi": "गोमांतक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा स्तनधारी सबसे अधिक उँचाई पर रह सकता है?",
    "options_hi": ["याक", "स्नो लेपर्ड", "हिमालयन टहर", "पांडा"],
    "answer_hi": "याक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "ARP का पूरा नाम है:",
    "options_hi": ["Address Resolution Protocol", "Address Resolution Process", "Address Resolution Program", "Address Recognition Protocol"],
    "answer_hi": "Address Resolution Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा सोना उत्पादक राज्य कौन सा है?",
    "options_hi": ["कर्नाटक", "झारखंड", "आंध्र प्रदेश", "तमिलनाडु"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में तनाव के समय कौन सा हार्मोन निकलता है?",
    "options_hi": ["कोर्टिसोल", "इंसुलिन", "थायरोक्सिन", "एस्ट्रोजन"],
    "answer_hi": "कोर्टिसोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "अंगकोर वाट किस देश में स्थित है?",
    "options_hi": ["कंबोडिया", "थाईलैंड", "वियतनाम", "लाओस"],
    "answer_hi": "कंबोडिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "मोनोलिथिक और माइक्रोसर्विसेज आर्किटेक्चर में क्या अंतर है?",
    "options_hi": ["मोनोलिथिक एकल, माइक्रोसर्विसेज अनेक सेवाएँ", "दोनों समान", "कोई अंतर नहीं", "मोनोलिथिक अनेक, माइक्रोसर्विसेज एकल"],
    "answer_hi": "मोनोलिथिक एकल, माइक्रोसर्विसेज अनेक सेवाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "राष्ट्रीय प्रौद्योगिकी दिवस कब मनाया जाता है?",
    "options_hi": ["11 मई", "26 जनवरी", "15 अगस्त", "2 अक्टूबर"],
    "answer_hi": "11 मई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे अधिक संपीड़न योग्य गैस कौन सी है?",
    "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "स्पॉटिफ़ाई के संस्थापक कौन हैं?",
    "options_hi": ["डैनियल एक और मार्टिन लोरेंटज़ोन", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "डैनियल एक और मार्टिन लोरेंटज़ोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "दिलवाड़ा मंदिर कहाँ स्थित है?",
    "options_hi": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "उत्तर प्रदेश"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "NFC का पूरा नाम है:",
    "options_hi": ["Near Field Communication", "Near Field Connection", "Near Frequency Communication", "Near Frequency Connection"],
    "answer_hi": "Near Field Communication",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा प्राकृतिक गर्म पानी का झरना कौन सा है?",
    "options_hi": ["तत्तापानी", "युमथांग", "मणिकरण", "गंगानी"],
    "answer_hi": "तत्तापानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन B7 की कमी से कौन सा रोग होता है?",
    "options_hi": ["डर्मेटाइटिस", "स्कर्वी", "रिकेट्स", "पेलाग्रा"],
    "answer_hi": "डर्मेटाइटिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे अधिक वायुमंडल वाला ग्रह कौन सा है?",
    "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बृहस्पति"],
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "ऑनलाइन स्ट्रीमिंग का जनक किसे माना जाता है?",
    "options_hi": ["रिड हेस्टिंग्स", "स्टीव जॉब्स", "बिल गेट्स", "मार्क जुकरबर्ग"],
    "answer_hi": "रिड हेस्टिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहला संसदीय चुनाव कब हुआ?",
    "options_hi": ["1952", "1947", "1950", "1951"],
    "answer_hi": "1952",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "मेसॉन की खोज किसने की?",
    "options_hi": ["हिदेकी युकावा", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर"],
    "answer_hi": "हिदेकी युकावा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "विश्व की सबसे बड़ी भूमिगत शहर कौन सी है?",
    "options_hi": ["डेरिंकयु", "कैपाडोसिया", "मटमाटा", "पेट्रा"],
    "answer_hi": "डेरिंकयु",
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
    "question_hi": "QR कोड का पूरा नाम है:",
    "options_hi": ["Quick Response Code", "Quick Read Code", "Quality Response Code", "Quick Recognition Code"],
    "answer_hi": "Quick Response Code",
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
    "question_hi": "भारत का सबसे बड़ा पीटलैंड (पीट का दलदल) कौन सा है?",
    "options_hi": ["पलक्कड़ पीटलैंड", "सुंदरबन", "चिल्का", "वेम्बनाड"],
    "answer_hi": "पलक्कड़ पीटलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधों में हाइड्रोट्रोपिज्म क्या है?",
    "options_hi": ["पानी की ओर वृद्धि", "प्रकाश की ओर वृद्धि", "गुरुत्वाकर्षण की ओर वृद्धि", "स्पर्श के प्रति प्रतिक्रिया"],
    "answer_hi": "पानी की ओर वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "किस देश को 'लैंड ऑफ मिडनाइट वॉलीबॉल' कहा जाता है?",
    "options_hi": ["स्वीडन", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
    "answer_hi": "स्वीडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "डेटा माइनिंग क्या है?",
    "options_hi": ["बड़े डेटा से पैटर्न खोजना", "डेटा स्टोर करना", "डेटा डिलीट करना", "डेटा ट्रांसफर करना"],
    "answer_hi": "बड़े डेटा से पैटर्न खोजना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "बृहदेश्वर मंदिर कहाँ स्थित है?",
    "options_hi": ["तंजावुर", "मदुरै", "कांचीपुरम", "तिरुपति"],
    "answer_hi": "तंजावुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "किस ग्रह का दिन सबसे लंबा होता है?",
    "options_hi": ["शुक्र", "बृहस्पति", "मंगल", "पृथ्वी"],
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "रिटिना स्कैन कैसे काम करता है?",
    "options_hi": ["आंख के पर्दे की छवि से", "आवाज से", "चेहरे से", "उंगली से"],
    "answer_hi": "आंख के पर्दे की छवि से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "कोयना बांध किस नदी पर है?",
    "options_hi": ["कोयना", "कृष्णा", "गोदावरी", "कावेरी"],
    "answer_hi": "कोयना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "मानव शरीर में सबसे छोटी हड्डी कौन सी है?",
    "options_hi": ["स्टेपीज", "मैलियस", "इनकस", "फीमर"],
    "answer_hi": "स्टेपीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "ERP का पूरा नाम है:",
    "options_hi": ["Enterprise Resource Planning", "Enterprise Resource Program", "Enterprise Resource Process", "Enterprise Resource Protocol"],
    "answer_hi": "Enterprise Resource Planning",
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
