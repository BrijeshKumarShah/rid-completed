


const questions = [
  {
    "num": 1,
    "question_hi": "सन 1848 में फ्रांस में किस वर्ग के पुरुषों को सार्वभौमिक मताधिकार दिया गया था?",
    "options_hi": ["21 वर्ष से अधिक आयु के सभी", "25 वर्ष से अधिक आयु के सभी", "30 वर्ष से अधिक आयु के सभी", "केवल संपत्तिधारी पुरुष"],
    "answer_hi": "21 वर्ष से अधिक आयु के सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "जर्मनी का एकीकरण किसने पूरा किया?",
    "options_hi": ["काउंट कैवूर", "जोसेफ मेजिनी", "ऑटो वॉन बिस्मार्क", "नेपोलियन"],
    "answer_hi": "ऑटो वॉन बिस्मार्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "वियतनाम में 'टोनकिन फ्री स्कूल' की स्थापना किसने की?",
    "options_hi": ["हो ची मिन्ह", "फान बोई चाऊ", "फान चू त्रिन्ह", "बाओ दाई"],
    "answer_hi": "फान बोई चाऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "महात्मा गांधी ने 'सविनय अवज्ञा आंदोलन' कहाँ से शुरू किया?",
    "options_hi": ["अहमदाबाद", "दांडी", "साबरमती", "चंपारण"],
    "answer_hi": "दांडी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत में राष्ट्रीय आय का प्रमुख स्रोत कौन-सा क्षेत्र है?",
    "options_hi": ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "इनमें से कोई नहीं"],
    "answer_hi": "तृतीयक क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "भारत में सबसे लंबी सड़क है:",
    "options_hi": ["एन.एच.-1", "एन.एच.-7", "एन.एच.-8", "ग्रांड ट्रंक रोड"],
    "answer_hi": "एन.एच.-7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "भारत का संविधान लागू हुआ:",
    "options_hi": ["26 जनवरी 1947", "26 जनवरी 1948", "26 जनवरी 1949", "26 जनवरी 1950"],
    "answer_hi": "26 जनवरी 1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "भारत में किस प्रकार की शासन प्रणाली अपनाई गई है?",
    "options_hi": ["अध्यक्षात्मक", "संसदीय", "अर्द्ध-अध्यक्षात्मक", "राजतंत्रात्मक"],
    "answer_hi": "संसदीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "विश्व व्यापार संगठन (WTO) की स्थापना कब हुई?",
    "options_hi": ["1945", "1948", "1995", "2001"],
    "answer_hi": "1995",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "भारत में राष्ट्रीय जलमार्ग संख्या-1 किस नदी पर है?",
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "नर्मदा"],
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "भारत का सबसे बड़ा लौह अयस्क उत्पादक राज्य कौन-सा है?",
    "options_hi": ["झारखंड", "कर्नाटक", "ओडिशा", "छत्तीसगढ़"],
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "भारत में 'भूराजस्व' किसके अंतर्गत आता है?",
    "options_hi": ["प्रत्यक्ष कर", "अप्रत्यक्ष कर", "उपहार कर", "संपदा कर"],
    "answer_hi": "प्रत्यक्ष कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "बेल्जियम में सामुदायिक सरकार किस आधार पर बनाई गई है?",
    "options_hi": ["धर्म", "क्षेत्र", "भाषा", "जाति"],
    "answer_hi": "भाषा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "भारत में सबसे पहले किस राज्य ने महिलाओं के लिए आरक्षण लागू किया?",
    "options_hi": ["उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश", "केरल"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "भारत का पहला राष्ट्रीय उद्यान कौन-सा है?",
    "options_hi": ["कॉर्बेट", "काजीरंगा", "गिर", "सुंदरबन"],
    "answer_hi": "कॉर्बेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "विश्व बैंक की स्थापना कब हुई?",
    "options_hi": ["1942", "1944", "1945", "1947"],
    "answer_hi": "1944",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "भारत में 'स्वतंत्रता के बाद का सबसे बड़ा बैंक विलय' किस वर्ष हुआ?",
    "options_hi": ["2017", "2019", "2020", "2021"],
    "answer_hi": "2019",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "गुट निरपेक्ष आंदोलन (NAM) के संस्थापक नेताओं में शामिल नहीं हैं:",
    "options_hi": ["नेहरू", "नासिर", "टीटो", "माओ"],
    "answer_hi": "माओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "यूरोप में 'अनाजों की जननी' किसे कहा जाता है?",
    "options_hi": ["फ्रांस", "यूक्रेन", "जर्मनी", "रूस"],
    "answer_hi": "यूक्रेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "निम्न में से कौन 'मुद्रा आपूर्ति' का घटक नहीं है?",
    "options_hi": ["सिक्के", "करेंसी नोट", "बैंक जमा", "सरकारी बॉन्ड"],
    "answer_hi": "सरकारी बॉन्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत के संविधान की आठवीं अनुसूची में कितनी भाषाएँ शामिल हैं?",
    "options_hi": ["18", "20", "22", "24"],
    "answer_hi": "22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "विश्व में सबसे बड़ा लोकतंत्र किस देश को माना जाता है?",
    "options_hi": ["अमेरिका", "भारत", "इंडोनेशिया", "ब्राजील"],
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "सिन्धु घाटी सभ्यता किस युग की थी?",
    "options_hi": ["लौह युग", "कांस्य युग", "पाषाण युग", "ताम्र युग"],
    "answer_hi": "कांस्य युग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "भारत में पहली रेलवे लाइन कब शुरू हुई?",
    "options_hi": ["1850", "1853", "1857", "1861"],
    "answer_hi": "1853",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "विश्व में सबसे अधिक जनसंख्या वाला देश कौन-सा है?",
    "options_hi": ["भारत", "चीन", "अमेरिका", "इंडोनेशिया"],
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "भारत की पहली महिला राज्यपाल कौन थीं?",
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "सुचेता कृपलानी"],
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "यूनेस्को की स्थापना कब हुई?",
    "options_hi": ["1945", "1946", "1948", "1950"],
    "answer_hi": "1945",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "भारत में 'हरित क्रांति' के जनक कौन माने जाते हैं?",
    "options_hi": ["एम.एस. स्वामीनाथन", "वर्गीज कुरियन", "नॉर्मन बोरलॉग", "सी. सुब्रह्मण्यम"],
    "answer_hi": "एम.एस. स्वामीनाथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
    "options_hi": ["1885", "1887", "1905", "1920"],
    "answer_hi": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन-सा है?",
    "options_hi": ["चेन्नई", "मुंबई", "कोच्चि", "विशाखापत्तनम"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "भारत में 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण' (NDMA) का गठन कब हुआ?",
    "options_hi": ["2001", "2005", "2010", "2014"],
    "answer_hi": "2005",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्यालय कहाँ है?",
    "options_hi": ["जिनेवा", "न्यूयॉर्क", "वाशिंगटन डी.सी.", "पेरिस"],
    "answer_hi": "वाशिंगटन डी.सी.",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "भारत में किस फसल को 'गोल्डन फाइबर' कहा जाता है?",
    "options_hi": ["कपास", "जूट", "सिल्क", "ऊन"],
    "answer_hi": "जूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत की प्रथम महिला मुख्यमंत्री कौन थीं?",
    "options_hi": ["इंदिरा गांधी", "सुचेता कृपलानी", "जयललिता", "ममता बनर्जी"],
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "भारत में प्रथम परमाणु परीक्षण कब किया गया?",
    "options_hi": ["1972", "1974", "1998", "2002"],
    "answer_hi": "1974",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "राष्ट्रीय विकास परिषद (NDC) का अध्यक्ष कौन होता है?",
    "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "वित्त मंत्री", "योजना आयोग के अध्यक्ष"],
    "answer_hi": "प्रधानमंत्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "भारत में 'पहली पंचवर्षीय योजना' कब शुरू हुई?",
    "options_hi": ["1947", "1950", "1951", "1952"],
    "answer_hi": "1951",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "भारत में 'सार्वजनिक वितरण प्रणाली' (PDS) किस वस्तु से संबंधित है?",
    "options_hi": ["कपड़ा", "खाद्यान्न", "ईंधन", "शिक्षा"],
    "answer_hi": "खाद्यान्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "अशोक के शिलालेख किस लिपि में लिखे गए हैं?",
    "options_hi": ["ब्राह्मी", "खरोष्ठी", "देवनागरी", "गुरुमुखी"],
    "answer_hi": "ब्राह्मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "भारत का सबसे बड़ा सॉफ्टवेयर निर्यातक राज्य कौन-सा है?",
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तमिल नाडु", "तेलंगाना"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "मुगल साम्राज्य का संस्थापक कौन था?",
    "options_hi": ["अकबर", "बाबर", "हुमायूँ", "औरंगजेब"],
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "भारत में 'मेक इन इंडिया' अभियान कब शुरू हुआ?",
    "options_hi": ["2012", "2014", "2015", "2016"],
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "विश्व व्यापार संगठन (WTO) का मुख्यालय कहाँ है?",
    "options_hi": ["न्यूयॉर्क", "जिनेवा", "पेरिस", "वाशिंगटन डी.सी."],
    "answer_hi": "जिनेवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "भारत में 'सर्व शिक्षा अभियान' कब शुरू हुआ?",
    "options_hi": ["2000", "2001", "2002", "2005"],
    "answer_hi": "2001",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "भारत की प्रथम महिला राष्ट्रपति कौन थीं?",
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "मीरा कुमार"],
    "answer_hi": "प्रतिभा पाटिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "भारत का सबसे बड़ा लिग्नाइट उत्पादक राज्य कौन-सा है?",
    "options_hi": ["झारखंड", "तमिल नाडु", "गुजरात", "राजस्थान"],
    "answer_hi": "तमिल नाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "संयुक्त राष्ट्र संघ (UNO) की स्थापना कब हुई?",
    "options_hi": ["1944", "1945", "1946", "1948"],
    "answer_hi": "1945",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "भारत में 'आयुष्मान भारत योजना' कब शुरू हुई?",
    "options_hi": ["2016", "2017", "2018", "2019"],
    "answer_hi": "2018",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "भारतीय संविधान में 'मौलिक कर्तव्य' किस देश के संविधान से लिए गए हैं?",
    "options_hi": ["अमेरिका", "ब्रिटेन", "रूस", "जापान"],
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
    "options_hi": ["लॉर्ड माउंटबेटन", "चक्रवर्ती राजगोपालाचारी", "लॉर्ड वेवेल", "डॉ. राजेंद्र प्रसाद"],
    "answer_hi": "लॉर्ड माउंटबेटन",
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
