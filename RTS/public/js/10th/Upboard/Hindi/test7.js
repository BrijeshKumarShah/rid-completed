const questions = [
  {
    "num": 1,
    "question_hi": "डॉ. भीमराव अंबेडकर किस विषय के विद्वान थे?",
    "options_hi": ["अर्थशास्त्र", "राजनीति शास्त्र", "समाजशास्त्र", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "‘श्रम विभाजन और जाति प्रथा’ किस प्रकार की रचना है?",
    "options_hi": ["कविता", "निबंध", "नाटक", "कहानी"],
    "answer_hi": "निबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "‘कबीर’ किस सामाजिक बुराई के विरोधी थे?",
    "options_hi": ["जाति प्रथा", "अंधविश्वास", "पाखंड", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "‘मीरा’ किस भक्ति धारा की कवयित्री थीं?",
    "options_hi": ["सगुण", "निर्गुण", "ज्ञानमार्गी", "सूफी"],
    "answer_hi": "सगुण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "‘रामचरितमानस’ के रचयिता कौन हैं?",
    "options_hi": ["सूरदास", "तुलसीदास", "कबीर", "मीरा"],
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_hi": "‘सूरदास’ किस रस के कवि माने जाते हैं?",
    "options_hi": ["वीर", "श्रृंगार", "वात्सल्य", "करुण"],
    "answer_hi": "वात्सल्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "‘भारतेंदु हरिश्चंद्र’ को किसका जनक कहा जाता है?",
    "options_hi": ["आधुनिक हिंदी साहित्य", "रीतिकाल", "भक्तिकाल", "छायावाद"],
    "answer_hi": "आधुनिक हिंदी साहित्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "‘छायावाद’ के प्रमुख कवि कौन हैं?",
    "options_hi": ["निराला", "पंत", "प्रसाद", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "‘कामायनी’ महाकाव्य किसने लिखा?",
    "options_hi": ["जयशंकर प्रसाद", "निराला", "पंत", "दिनकर"],
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "‘उपन्यास सम्राट’ की उपाधि किसे मिली?",
    "options_hi": ["प्रेमचंद", "यशपाल", "रेणु", "अज्ञेय"],
    "answer_hi": "प्रेमचंद",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_hi": "‘गोदान’ उपन्यास का मुख्य विषय क्या है?",
    "options_hi": ["किसान जीवन", "शहरी जीवन", "प्रेम कथा", "इतिहास"],
    "answer_hi": "किसान जीवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "‘रीतिकाल’ में काव्य का केंद्र क्या था?",
    "options_hi": ["श्रृंगार", "भक्ति", "वीरता", "देशप्रेम"],
    "answer_hi": "श्रृंगार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "‘आदिकाल’ को और किस नाम से जाना जाता है?",
    "options_hi": ["वीरगाथा काल", "भक्तिकाल", "रीतिकाल", "आधुनिक काल"],
    "answer_hi": "वीरगाथा काल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "‘नई कविता’ का संबंध किससे है?",
    "options_hi": ["आधुनिक जीवन", "भक्ति", "रीति", "पौराणिक कथा"],
    "answer_hi": "आधुनिक जीवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "‘हालावाद’ के प्रमुख कवि कौन हैं?",
    "options_hi": ["हरिवंश राय बच्चन", "निराला", "पंत", "दिनकर"],
    "answer_hi": "हरिवंश राय बच्चन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_hi": "‘नाटक’ की भाषा कैसी होती है?",
    "options_hi": ["संवादात्मक", "कठिन", "काव्यात्मक", "शास्त्रीय"],
    "answer_hi": "संवादात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "‘कहानी’ का मुख्य तत्व क्या है?",
    "options_hi": ["कथानक", "छंद", "रस", "अलंकार"],
    "answer_hi": "कथानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "‘निबंध’ का उद्देश्य क्या है?",
    "options_hi": ["विचार अभिव्यक्ति", "मनोरंजन", "कथा कहना", "संवाद"],
    "answer_hi": "विचार अभिव्यक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "‘रस’ की अनुभूति किसे होती है?",
    "options_hi": ["पाठक", "कवि", "लेखक", "अभिनेता"],
    "answer_hi": "पाठक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "‘श्रृंगार रस’ का स्थायी भाव क्या है?",
    "options_hi": ["रति", "शोक", "क्रोध", "उत्साह"],
    "answer_hi": "रति",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_hi": "‘वीर रस’ का स्थायी भाव क्या है?",
    "options_hi": ["उत्साह", "क्रोध", "रति", "भय"],
    "answer_hi": "उत्साह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "‘करुण रस’ का स्थायी भाव क्या है?",
    "options_hi": ["शोक", "भय", "रति", "हास"],
    "answer_hi": "शोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "‘भयानक रस’ का स्थायी भाव क्या है?",
    "options_hi": ["भय", "क्रोध", "हर्ष", "शोक"],
    "answer_hi": "भय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "‘हास्य रस’ का स्थायी भाव क्या है?",
    "options_hi": ["हास", "रति", "शोक", "क्रोध"],
    "answer_hi": "हास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "‘शांत रस’ का स्थायी भाव क्या है?",
    "options_hi": ["निर्वेद", "उत्साह", "रति", "हर्ष"],
    "answer_hi": "निर्वेद",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_hi": "‘अलंकार’ का कार्य क्या है?",
    "options_hi": ["सौंदर्य बढ़ाना", "सूचना देना", "इतिहास लिखना", "संवाद करना"],
    "answer_hi": "सौंदर्य बढ़ाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "‘उपमा अलंकार’ में किस शब्द का प्रयोग होता है?",
    "options_hi": ["सा/सी/जैसा", "ही", "ही नहीं तो", "क्योंकि"],
    "answer_hi": "सा/सी/जैसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "‘रूपक अलंकार’ में किसका अभाव होता है?",
    "options_hi": ["उपमेय-उपमान भेद", "भाव", "रस", "छंद"],
    "answer_hi": "उपमेय-उपमान भेद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "‘दोहे’ में कुल कितनी मात्राएँ होती हैं?",
    "options_hi": ["24", "48", "13-11", "16-16"],
    "answer_hi": "13-11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "‘चौपाई’ में प्रत्येक चरण में कितनी मात्राएँ होती हैं?",
    "options_hi": ["16", "24", "13", "11"],
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_hi": "‘कविता’ की आत्मा किसे कहा जाता है?",
    "options_hi": ["रस", "छंद", "अलंकार", "भाषा"],
    "answer_hi": "रस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "‘गद्य’ की प्रमुख विशेषता क्या है?",
    "options_hi": ["सरलता", "लय", "तुक", "छंद"],
    "answer_hi": "सरलता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "‘नाटक’ किसके लिए लिखा जाता है?",
    "options_hi": ["मंच", "पुस्तक", "पत्रिका", "अखबार"],
    "answer_hi": "मंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "‘कहानी’ का अंत प्रायः कैसा होता है?",
    "options_hi": ["संकेतात्मक", "बहुत लंबा", "शुष्क", "अस्पष्ट"],
    "answer_hi": "संकेतात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "‘महाकाव्य’ का विषय क्या होता है?",
    "options_hi": ["संपूर्ण जीवन", "एक घटना", "संवाद", "गीत"],
    "answer_hi": "संपूर्ण जीवन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_hi": "‘हिंदी साहित्य’ का आरंभ किस काल से माना जाता है?",
    "options_hi": ["आदिकाल", "भक्तिकाल", "रीतिकाल", "आधुनिक काल"],
    "answer_hi": "आदिकाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "‘लोक साहित्य’ किससे जुड़ा होता है?",
    "options_hi": ["जनजीवन", "राजदरबार", "धर्मग्रंथ", "इतिहास"],
    "answer_hi": "जनजीवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "‘भाषा’ का मुख्य कार्य क्या है?",
    "options_hi": ["भाव अभिव्यक्ति", "लेखन", "पठन", "अनुवाद"],
    "answer_hi": "भाव अभिव्यक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "‘साहित्य समाज का दर्पण है’ यह कथन किससे संबंधित है?",
    "options_hi": ["यथार्थवाद", "भक्ति", "रीति", "श्रृंगार"],
    "answer_hi": "यथार्थवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "‘नई कविता’ में किसकी प्रधानता है?",
    "options_hi": ["व्यक्ति अनुभूति", "भक्ति", "श्रृंगार", "पौराणिकता"],
    "answer_hi": "व्यक्ति अनुभूति",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_hi": "‘कहानी’ किस काल में विकसित हुई?",
    "options_hi": ["आधुनिक काल", "भक्तिकाल", "रीतिकाल", "आदिकाल"],
    "answer_hi": "आधुनिक काल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "‘साहित्य’ शब्द किस भाषा से आया है?",
    "options_hi": ["संस्कृत", "पाली", "प्राकृत", "अपभ्रंश"],
    "answer_hi": "संस्कृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "‘काव्यशास्त्र’ का संबंध किससे है?",
    "options_hi": ["काव्य सिद्धांत", "इतिहास", "व्याकरण", "भाषाविज्ञान"],
    "answer_hi": "काव्य सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "‘निबंध’ का जनक किसे कहा जाता है?",
    "options_hi": ["आचार्य रामचंद्र शुक्ल", "भारतेंदु", "प्रेमचंद", "महावीर प्रसाद द्विवेदी"],
    "answer_hi": "आचार्य रामचंद्र शुक्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "‘खड़ी बोली’ किस युग में प्रतिष्ठित हुई?",
    "options_hi": ["भारतेंदु युग", "भक्तिकाल", "रीतिकाल", "आदिकाल"],
    "answer_hi": "भारतेंदु युग",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_hi": "‘कविता’ का शाब्दिक अर्थ क्या है?",
    "options_hi": ["रचना", "गीत", "कथा", "संवाद"],
    "answer_hi": "रचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "‘नाटक’ में दृश्य परिवर्तन को क्या कहते हैं?",
    "options_hi": ["अंक", "रस", "भाव", "छंद"],
    "answer_hi": "अंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "‘साहित्य’ का अंतिम उद्देश्य क्या है?",
    "options_hi": ["लोक कल्याण", "मनोरंजन", "सूचना", "इतिहास"],
    "answer_hi": "लोक कल्याण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "‘काव्य’ में सौंदर्य बढ़ाने वाला तत्व कौन सा है?",
    "options_hi": ["अलंकार", "संवाद", "तथ्य", "इतिहास"],
    "answer_hi": "अलंकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "‘हिंदी’ भारत की किस प्रकार की भाषा है?",
    "options_hi": ["राजभाषा", "राष्ट्रीय भाषा", "प्रादेशिक भाषा", "विदेशी भाषा"],
    "answer_hi": "राजभाषा",
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