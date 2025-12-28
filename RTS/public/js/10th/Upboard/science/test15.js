const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे बड़ा ज्वालामुखी कौन सा है?",
    "options_hi": ["मौना लोआ", "माउंट एवरेस्ट", "किलीमंजारो", "वेसुवियस"],
    "answer_hi": "मौना लोआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "कंप्यूटर में .pptx फाइल एक्सटेंशन क्या दर्शाता है?",
    "options_hi": ["पावरपॉइंट प्रेजेंटेशन", "वर्ड डॉक्यूमेंट", "एक्सेल स्प्रेडशीट", "एक्सेस डेटाबेस"],
    "answer_hi": "पावरपॉइंट प्रेजेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "संत ज्ञानेश्वर का जन्म स्थान कहाँ है?",
    "options_hi": ["आपेगाव", "पंढरपुर", "शिरडी", "नासिक"],
    "answer_hi": "आपेगाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "मानव शरीर में सबसे लंबी तंत्रिका कौन सी है?",
    "options_hi": ["साइटिक नर्व", "वेगस नर्व", "ऑप्टिक नर्व", "ऑडिटरी नर्व"],
    "answer_hi": "साइटिक नर्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत का राष्ट्रीय मांसाहारी पशु है:",
    "options_hi": ["बाघ", "शेर", "चीता", "तेंदुआ"],
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "FTP का पूरा नाम है:",
    "options_hi": ["File Transfer Protocol", "File Transmission Protocol", "Fast Transfer Protocol", "File Transport Protocol"],
    "answer_hi": "File Transfer Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "ओशनसैट शृंखला का प्राथमिक उद्देश्य क्या है?",
    "options_hi": ["समुद्र अध्ययन", "मौसम पूर्वानुमान", "भूमि उपयोग", "वन अध्ययन"],
    "answer_hi": "समुद्र अध्ययन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "विश्व की सबसे लंबी तट रेखा वाला देश कौन सा है?",
    "options_hi": ["कनाडा", "इंडोनेशिया", "रूस", "फिलीपींस"],
    "answer_hi": "कनाडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "एक सहस्राब्दी में कितने दशक होते हैं?",
    "options_hi": ["100", "10", "1000", "50"],
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व की सबसे पुरानी नदी कौन सी है?",
    "options_hi": ["फुरात", "नील", "गंगा", "यांग्त्ज़ी"],
    "answer_hi": "फुरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "सबसे अधिक अपवर्तक धातु कौन सी है?",
    "options_hi": ["सोना", "चाँदी", "प्लैटिनम", "रोडियम"],
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "अशोक चक्र पुरस्कार किस क्षेत्र से संबंधित है?",
    "options_hi": ["वीरता", "साहित्य", "विज्ञान", "खेल"],
    "answer_hi": "वीरता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत की पहली महिला रेलवे इंजीनियर कौन थीं?",
    "options_hi": ["इला मुखर्जी", "सुनीता सिंह", "मीना कुमारी", "ललिता राजू"],
    "answer_hi": "इला मुखर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "स्लैक ऐप के संस्थापक कौन हैं?",
    "options_hi": ["स्टीवर्ट बटरफील्ड", "मार्क जुकरबर्ग", "जैक डोर्सी", "लैरी पेज"],
    "answer_hi": "स्टीवर्ट बटरफील्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "चंद्रशेखर आजाद का जन्म कब हुआ था?",
    "options_hi": ["1906", "1910", "1920", "1930"],
    "answer_hi": "1906",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "पृथ्वी का सबसे गर्म वायुमंडलीय परत कौन सा है?",
    "options_hi": ["थर्मोस्फीयर", "एक्सोस्फीयर", "मेसोस्फीयर", "स्ट्रैटोस्फीयर"],
    "answer_hi": "थर्मोस्फीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सबसे अधिक ऑक्सीकरण प्रतिरोधी धातु कौन सी है?",
    "options_hi": ["प्लैटिनम", "सोना", "इरिडियम", "रोडियम"],
    "answer_hi": "प्लैटिनम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "असम का प्राचीन नाम क्या था?",
    "options_hi": ["प्रागज्योतिषपुर", "कामरूप", "अहोम", "ब्रह्मपुत्र"],
    "answer_hi": "प्रागज्योतिषपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "कौन सा पक्षी सबसे अधिक समय तक उड़ सकता है?",
    "options_hi": ["अल्बाट्रॉस", "गिद्ध", "बाज़", "सारस"],
    "answer_hi": "अल्बाट्रॉस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "SQL का पूरा नाम है:",
    "options_hi": ["Structured Query Language", "System Query Language", "Structured Question Language", "System Question Language"],
    "answer_hi": "Structured Query Language",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा पेट्रोलियम क्षेत्र कौन सा है?",
    "options_hi": ["मुम्बई हाई", "असम", "गुजरात", "राजस्थान"],
    "answer_hi": "मुम्बई हाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "मानव शरीर में मेटाबॉलिज्म को नियंत्रित करने वाली ग्रंथि कौन सी है?",
    "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
    "answer_hi": "थायरॉयड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "माचू पिच्चू किस देश में स्थित है?",
    "options_hi": ["पेरू", "मेक्सिको", "ब्राजील", "चिली"],
    "answer_hi": "पेरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "मोबाइल ओएस और डेस्कटॉप ओएस में क्या अंतर है?",
    "options_hi": ["मोबाइल टच-आधारित, डेस्कटॉप कीबोर्ड-आधारित", "दोनों समान", "कोई अंतर नहीं", "मोबाइल बड़ा, डेस्कटॉप छोटा"],
    "answer_hi": "मोबाइल टच-आधारित, डेस्कटॉप कीबोर्ड-आधारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "राष्ट्रीय एकता दिवस कब मनाया जाता है?",
    "options_hi": ["31 अक्टूबर", "26 जनवरी", "15 अगस्त", "2 अक्टूबर"],
    "answer_hi": "31 अक्टूबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "सबसे अधिक प्रतिबिंबित करने वाला प्राकृतिक पदार्थ कौन सा है?",
    "options_hi": ["सिल्वर", "गोल्ड", "मर्करी", "अल्युमिनियम"],
    "answer_hi": "सिल्वर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "ट्विच के संस्थापक कौन हैं?",
    "options_hi": ["जस्टिन कान", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "जस्टिन कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "खजुराहो मंदिर कहाँ स्थित है?",
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "बिहार"],
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "XML का पूरा नाम है:",
    "options_hi": ["eXtensible Markup Language", "Extended Markup Language", "XML Markup Language", "Extra Markup Language"],
    "answer_hi": "eXtensible Markup Language",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे ऊँचा कृत्रिम झील कौन सा है?",
    "options_hi": ["गोविंद सागर", "चन्द्रताल", "सतोपंथ ताल", "नेचुरा लेक"],
    "answer_hi": "गोविंद सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "विटामिन B3 की कमी से कौन सा रोग होता है?",
    "options_hi": ["पेलाग्रा", "स्कर्वी", "रिकेट्स", "बेरीबेरी"],
    "answer_hi": "पेलाग्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "सौरमंडल का सबसे तेज घूमने वाला ग्रह कौन सा है?",
    "options_hi": ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"],
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "ई-कॉमर्स का जनक किसे माना जाता है?",
    "options_hi": ["माइकल ऑल्ड्रिच", "जेफ बेजोस", "जैक मा", "एलोन मस्क"],
    "answer_hi": "माइकल ऑल्ड्रिच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पहला अंतर्राष्ट्रीय योग दिवस कब मनाया गया?",
    "options_hi": ["2015", "2014", "2016", "2017"],
    "answer_hi": "2015",
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
    "question_hi": "विश्व की सबसे बड़ी भूमिगत झील कौन सी है?",
    "options_hi": ["ड्रैकेन्सबर्ग की गुफा झील", "वैटनाजोकुल ग्लेशियर झील", "लॉस्ट सी", "रेड सी"],
    "answer_hi": "ड्रैकेन्सबर्ग की गुफा झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "एस्पिरिन की खोज किसने की?",
    "options_hi": ["फेलिक्स हॉफमैन", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
    "answer_hi": "फेलिक्स हॉफमैन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "किस देश को 'लैंड ऑफ मिडनाइट बास्केटबॉल' कहा जाता है?",
    "options_hi": ["फिनलैंड", "नॉर्वे", "स्वीडन", "आइसलैंड"],
    "answer_hi": "फिनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "OS का पूरा नाम है:",
    "options_hi": ["Operating System", "Operating Software", "Office System", "Organization System"],
    "answer_hi": "Operating System",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "हॉकिंग विकिरण की व्याख्या किसने की?",
    "options_hi": ["स्टीफन हॉकिंग", "अल्बर्ट आइंस्टाइन", "निकोला टेस्ला", "रिचर्ड फेनमैन"],
    "answer_hi": "स्टीफन हॉकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा घास का मैदान कौन सा है?",
    "options_hi": ["काजीरंगा", "सुंदरबन", "कच्छ का रण", "बन्नी ग्रासलैंड"],
    "answer_hi": "बन्नी ग्रासलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "पौधों में स्टेम का मुख्य कार्य क्या है?",
    "options_hi": ["पत्तियों और फूलों को सहारा देना", "पानी अवशोषित करना", "प्रकाश संश्लेषण", "प्रजनन"],
    "answer_hi": "पत्तियों और फूलों को सहारा देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "किस देश को 'लैंड ऑफ सी ईगल' कहा जाता है?",
    "options_hi": ["अलास्का", "नॉर्वे", "कनाडा", "आइसलैंड"],
    "answer_hi": "अलास्का",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "नेचुरल लैंग्वेज प्रोसेसिंग क्या है?",
    "options_hi": ["कंप्यूटर को मानव भाषा समझने की क्षमता", "प्रोग्रामिंग भाषा", "डेटा स्टोरेज", "नेटवर्किंग"],
    "answer_hi": "कंप्यूटर को मानव भाषा समझने की क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "नालंदा विश्वविद्यालय कहाँ स्थित था?",
    "options_hi": ["बिहार", "उत्तर प्रदेश", "बंगाल", "असम"],
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "नेपच्यून पर पहला यान कौन सा था?",
    "options_hi": ["वॉयजर 2", "वॉयजर 1", "पायोनियर 10", "पायोनियर 11"],
    "answer_hi": "वॉयजर 2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "वीइन रिकग्निशन कैसे काम करता है?",
    "options_hi": ["हथेली की नसों के पैटर्न से", "आवाज से", "चेहरे से", "आंख से"],
    "answer_hi": "हथेली की नसों के पैटर्न से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "नर्मदा सागर परियोजना किस नदी पर है?",
    "options_hi": ["नर्मदा", "ताप्ती", "गोदावरी", "कृष्णा"],
    "answer_hi": "नर्मदा",
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
    "question_hi": "PHP का पूरा नाम है:",
    "options_hi": ["Hypertext Preprocessor", "Personal Home Page", "Programming Hypertext Processor", "Preprocessor Hypertext Page"],
    "answer_hi": "Hypertext Preprocessor",
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
