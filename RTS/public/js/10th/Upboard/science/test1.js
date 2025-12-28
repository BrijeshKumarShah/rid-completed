const questions = [
  {
    "num": 1,
    "question_hi": "प्रकाश के परावर्तन का नियम क्या है?",
    "options_hi": ["कोण परावर्तन बराबर होता है", "कोण परावर्तन आधा होता है", "कोण परावर्तन दोगुना होता है", "कोण परावर्तन शून्य होता है"],
    "answer_hi": "कोण परावर्तन बराबर होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "विभिन्न माध्यमों में प्रकाश की गति किस पर निर्भर करती है?",
    "options_hi": ["माध्यम का घनत्व", "रंग", "तापमान", "कोण"],
    "answer_hi": "माध्यम का घनत्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "विकिरण ऊर्जा के स्रोत कौन से हैं?",
    "options_hi": ["सूर्य", "चाँद", "पृथ्वी", "सभी"],
    "answer_hi": "सूर्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "प्लांट्स में भोजन बनाने की प्रक्रिया को क्या कहते हैं?",
    "options_hi": ["सांस", "प्रकाशसंश्लेषण", "पाचन", "उत्सर्जन"],
    "answer_hi": "प्रकाशसंश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "मानव शरीर में रक्त का मुख्य कार्य क्या है?",
    "options_hi": ["ऑक्सीजन ले जाना", "पोषक तत्व ले जाना", "अवशिष्ट पदार्थ निकालना", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "धातु और अधातु का उदाहरण चुनें।",
    "options_hi": ["सोना और सल्फर", "लौह और तांबा", "पारा और लोहा", "क्लोरीन और सोना"],
    "answer_hi": "सोना और सल्फर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "कार्बन के प्रमुख यौगिक कौन से हैं?",
    "options_hi": ["कार्बन डाइऑक्साइड और मिथेन", "पानी और ऑक्सीजन", "हाइड्रोजन और हीलियम", "नाइट्रोजन और सल्फर"],
    "answer_hi": "कार्बन डाइऑक्साइड और मिथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "मानव नेत्र में रंगीन वस्तु देखने की क्रिया किस पर निर्भर करती है?",
    "options_hi": ["सापेक्ष प्रकाश", "कॉर्निया का आकार", "रेतिना में श्वेत रसायन", "लेंस का घनत्व"],
    "answer_hi": "सापेक्ष प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "विद्युत धारा का चुंबकीय प्रभाव किसने खोजा?",
    "options_hi": ["हैंड्रिक", "ओर्स्टेड", "फाराडे", "जूल"],
    "answer_hi": "ओर्स्टेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "पदार्थ के कौन से रूप में अणु सबसे तेज गति करते हैं?",
    "options_hi": ["ठोस", "तरल", "गैस", "प्लाज़्मा"],
    "answer_hi": "गैस",
    "attempted": false,
    "selected": ""
  },

  // अब 11 से 50 तक के 40 प्रश्न
  {
    "num": 11,
    "question_hi": "जल का रासायनिक सूत्र क्या है?",
    "options_hi": ["H2O", "CO2", "O2", "NaCl"],
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "मानव हृदय में कुल कितने कक्ष होते हैं?",
    "options_hi": ["2", "3", "4", "5"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "सौर ऊर्जा को विद्युत में बदलने के लिए किस यंत्र का प्रयोग होता है?",
    "options_hi": ["सोलर पैनल", "जेनरेटर", "बैटरी", "ट्रांसफार्मर"],
    "answer_hi": "सोलर पैनल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "वायुमंडल में सबसे अधिक गैस कौन सी है?",
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "प्राकृतिक आवर्त सारणी का आविष्कार किसने किया?",
    "options_hi": ["मेंडेलेव", "रदरफोर्ड", "हैमिल्टन", "न्यूटन"],
    "answer_hi": "मेंडेलेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "किस जीव में रक्त नीला होता है?",
    "options_hi": ["मनुष्य", "सिंह", "समुद्री घोंघा", "मेंढक"],
    "answer_hi": "समुद्री घोंघा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "सांद्रण और अवसादन किस प्रक्रिया में होता है?",
    "options_hi": ["घुलनशीलता", "पानी की शुद्धिकरण", "संश्लेषण", "वायुमंडलीकरण"],
    "answer_hi": "पानी की शुद्धिकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "कौन सा धातु सबसे हल्का होता है?",
    "options_hi": ["सोडियम", "पारा", "पोटैशियम", "लिथियम"],
    "answer_hi": "लिथियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "प्राकृतिक वातावरण में सबसे अधिक उर्जा किस रूप में मौजूद है?",
    "options_hi": ["सौर ऊर्जा", "जल ऊर्जा", "पवन ऊर्जा", "भूतापीय ऊर्जा"],
    "answer_hi": "सौर ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "मानव शरीर में पाचन अंग कौन सा है?",
    "options_hi": ["यकृत", "मस्तिष्क", "हृदय", "फेफड़े"],
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "प्रकाश का अपवर्तन किस माध्यम में सबसे अधिक होता है?",
    "options_hi": ["जल", "वायु", "कांच", "कागज"],
    "answer_hi": "कांच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "जल में घुलनशीलता किस पर निर्भर करती है?",
    "options_hi": ["तापमान", "रंग", "दाब", "सभी"],
    "answer_hi": "तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "विद्युत चालक कौन है?",
    "options_hi": ["पारा", "काँच", "लकड़ी", "प्लास्टिक"],
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "किस प्रक्रिया में CO2 उत्सर्जित होता है?",
    "options_hi": ["साँस", "प्रकाशसंश्लेषण", "पोषण", "विकिरण"],
    "answer_hi": "साँस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "रेशेदार कोशिकाएँ किस प्रकार की होती हैं?",
    "options_hi": ["पौधे", "प्राणी", "जीवाणु", "कवक"],
    "answer_hi": "पौधे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "धातु का विद्युत और ऊष्मा चालक होना किस कारण से है?",
    "options_hi": ["मुफ्त इलेक्ट्रॉनों", "भारी परमाणु", "आयन का आकार", "घनत्व"],
    "answer_hi": "मुफ्त इलेक्ट्रॉनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "किस जीव में संवेदनशीलता सबसे अधिक होती है?",
    "options_hi": ["मनुष्य", "सिंह", "सांप", "गिलहरी"],
    "answer_hi": "मनुष्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "पदार्थ का ठोस रूप किसकी वजह से स्थिर रहता है?",
    "options_hi": ["अणु कनेक्शन", "ऊष्मा", "दाब", "रासायनिक प्रतिक्रिया"],
    "answer_hi": "अणु कनेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "गर्म और ठंडे पानी की मिलावट में कौन सा प्रभाव होता है?",
    "options_hi": ["सहनशीलता", "अपवर्तन", "संपीड़न", "विलयन"],
    "answer_hi": "विलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "किस गैस का प्रयोग लाइट बल्ब में होता है?",
    "options_hi": ["नाइट्रोजन", "हाइड्रोजन", "आर्गन", "ऑक्सीजन"],
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "कौन सा अंग भोजन को पचाने में मुख्य भूमिका निभाता है?",
    "options_hi": ["आँत", "यकृत", "पित्ताशय", "अमाशय"],
    "answer_hi": "अमाशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "मनुष्य में सबसे बड़ी हड्डी कौन सी है?",
    "options_hi": ["फीमर", "ह्यूमरस", "कूल्हा", "कंधा"],
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "किस रसायन से अम्ल का पता चलता है?",
    "options_hi": ["लिटमस", "जिप्सम", "सोडियम क्लोराइड", "कैल्सियम कार्बोनेट"],
    "answer_hi": "लिटमस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "कौन सी गैस हरा पौधों द्वारा उत्सर्जित होती है?",
    "options_hi": ["ऑक्सीजन", "CO2", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "कौन सा अंग इंसान में श्वास लेने में मदद करता है?",
    "options_hi": ["फेफड़े", "हृदय", "यकृत", "किडनी"],
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "ध्वनि का सबसे तेज माध्यम कौन सा है?",
    "options_hi": ["वायु", "पानी", "लौह", "लकड़ी"],
    "answer_hi": "लौह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "किस गैस का प्रयोग रॉकेट में ईंधन के रूप में होता है?",
    "options_hi": ["हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन", "CO2"],
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "कौन सी प्रक्रिया में पौधे ऊर्जा ग्रहण करते हैं?",
    "options_hi": ["प्रकाश संश्लेषण", "साँस", "पाचन", "उत्सर्जन"],
    "answer_hi": "प्रकाश संश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "पानी का Ph मान क्या होता है?",
    "options_hi": ["7", "5", "9", "10"],
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "किस अंग में इंसुलिन का निर्माण होता है?",
    "options_hi": ["अग्न्याशय", "यकृत", "किडनी", "हृदय"],
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "धातु और अधातु के यौगिक को क्या कहते हैं?",
    "options_hi": ["लवण", "एसिड", "क्षार", "कार्बोहाइड्रेट"],
    "answer_hi": "लवण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "कौन सा अंग रक्त को साफ करता है?",
    "options_hi": ["किडनी", "फेफड़े", "हृदय", "यकृत"],
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "मानव शरीर में सबसे छोटा हड्डी कौन सी है?",
    "options_hi": ["स्ट्रेपेस", "फीमर", "कूल्हा", "कंधा"],
    "answer_hi": "स्ट्रेपेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "कौन सी गैस रंगहीन और गंधहीन होती है?",
    "options_hi": ["CO2", "O2", "H2", "N2"],
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "कौन सा अंग भोजन को पचाने में एंजाइम छोड़ता है?",
    "options_hi": ["अग्न्याशय", "यकृत", "पित्ताशय", "आँत"],
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "पृथ्वी का सबसे ऊँचा पर्वत कौन सा है?",
    "options_hi": ["माउंट एवरेस्ट", "कंचनजंघा", "क2", "अनापूर्णा"],
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "विद्युत परिपथ में रोधक का कार्य क्या है?",
    "options_hi": ["धारा को नियंत्रित करना", "ऊर्जा पैदा करना", "ऊष्मा उत्पन्न करना", "किसी का कार्य नहीं"],
    "answer_hi": "धारा को नियंत्रित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "कौन सा धातु पानी में सबसे तेज प्रतिक्रिया करता है?",
    "options_hi": ["सोडियम", "लौह", "तांबा", "सोना"],
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_hi": "कौन सा अंग शरीर में वायु का आदान-प्रदान करता है?",
    "options_hi": ["फेफड़े", "हृदय", "किडनी", "पेट"],
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
},
{
    "num": 50,
    "question_hi": "जलवायु परिवर्तन का मुख्य कारण क्या है?",
    "options_hi": ["औद्योगिकीकरण", "वृक्षारोपण", "सौर ऊर्जा", "पवन ऊर्जा"],
    "answer_hi": "औद्योगिकीकरण",
    "attempted": false,
    "selected": ""
}

]



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

