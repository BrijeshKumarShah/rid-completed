const questions = [
  {
    "num": 1,
    "question_hi": "‘सूरदास’ किस भक्ति धारा के कवि थे?",
    "options_hi": ["ज्ञानमार्ग", "कर्ममार्ग", "सगुण भक्ति", "निर्गुण भक्ति"],
    "answer_hi": "सगुण भक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "‘रामचरितमानस’ के रचयिता कौन हैं?",
    "options_hi": ["कबीर", "तुलसीदास", "सूरदास", "मीरा"],
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "कबीर की भाषा को क्या कहा जाता है?",
    "options_hi": ["ब्रज", "अवधी", "सधुक्कड़ी", "खड़ी बोली"],
    "answer_hi": "सधुक्कड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "‘मीरा’ किसकी उपासक थीं?",
    "options_hi": ["राम", "कृष्ण", "शिव", "हनुमान"],
    "answer_hi": "कृष्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "रीतिकाल के प्रमुख कवि कौन हैं?",
    "options_hi": ["तुलसीदास", "बिहारी", "भारतेंदु", "निराला"],
    "answer_hi": "बिहारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "‘साकेत’ महाकाव्य के रचयिता कौन हैं?",
    "options_hi": ["निराला", "मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "महादेवी वर्मा"],
    "answer_hi": "मैथिलीशरण गुप्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "छायावाद के चार प्रमुख स्तंभों में कौन शामिल नहीं हैं?",
    "options_hi": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
    "answer_hi": "हरिवंश राय बच्चन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "‘कामायनी’ किस विधा की रचना है?",
    "options_hi": ["नाटक", "महाकाव्य", "कहानी", "निबंध"],
    "answer_hi": "महाकाव्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "‘गोदान’ उपन्यास किसने लिखा?",
    "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "यशपाल", "अज्ञेय"],
    "answer_hi": "प्रेमचंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "प्रेमचंद का वास्तविक नाम क्या था?",
    "options_hi": ["धनपत राय", "दयानंद", "रामचंद्र", "श्यामलाल"],
    "answer_hi": "धनपत राय",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_hi": "‘पंच परमेश्वर’ कहानी किस लेखक की है?",
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "मोहन राकेश", "शिवानी"],
    "answer_hi": "प्रेमचंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "नाटक ‘आषाढ़ का एक दिन’ के लेखक कौन हैं?",
    "options_hi": ["जयशंकर प्रसाद", "मोहन राकेश", "भारतेंदु", "धर्मवीर भारती"],
    "answer_hi": "मोहन राकेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "‘मधुशाला’ के रचयिता कौन हैं?",
    "options_hi": ["निराला", "हरिवंश राय बच्चन", "पंत", "दिनकर"],
    "answer_hi": "हरिवंश राय बच्चन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "‘उर्वशी’ के कवि कौन हैं?",
    "options_hi": ["रामधारी सिंह दिनकर", "पंत", "निराला", "प्रसाद"],
    "answer_hi": "रामधारी सिंह दिनकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "‘रश्मिरथी’ किस पात्र पर आधारित है?",
    "options_hi": ["अर्जुन", "भीष्म", "कर्ण", "दुर्योधन"],
    "answer_hi": "कर्ण",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_hi": "निबंध ‘लोभ और प्रीति’ के लेखक कौन हैं?",
    "options_hi": ["रामधारी सिंह दिनकर", "आचार्य रामचंद्र शुक्ल", "हजारीप्रसाद द्विवेदी", "महावीर प्रसाद द्विवेदी"],
    "answer_hi": "आचार्य रामचंद्र शुक्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "‘भारतेंदु हरिश्चंद्र’ किस युग के प्रवर्तक थे?",
    "options_hi": ["आधुनिक युग", "रीतिकाल", "भक्तिकाल", "आदिकाल"],
    "answer_hi": "आधुनिक युग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "‘सरोज स्मृति’ किसकी रचना है?",
    "options_hi": ["निराला", "पंत", "प्रसाद", "महादेवी"],
    "answer_hi": "निराला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "महादेवी वर्मा को किस नाम से जाना जाता है?",
    "options_hi": ["आधुनिक मीरा", "भारत की सरस्वती", "छायावाद की जननी", "कवयित्री शिरोमणि"],
    "answer_hi": "आधुनिक मीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "‘यामा’ किसकी काव्य कृति है?",
    "options_hi": ["महादेवी वर्मा", "निराला", "दिनकर", "पंत"],
    "answer_hi": "महादेवी वर्मा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_hi": "‘दो बैलों की कथा’ कहानी का मुख्य विषय क्या है?",
    "options_hi": ["मित्रता", "स्वतंत्रता", "न्याय", "करुणा"],
    "answer_hi": "मित्रता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "‘कफन’ कहानी में किस समस्या को दर्शाया गया है?",
    "options_hi": ["गरीबी", "अशिक्षा", "भ्रष्टाचार", "बेरोजगारी"],
    "answer_hi": "गरीबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "‘सूर्यकांत त्रिपाठी निराला’ किस काव्य धारा से जुड़े थे?",
    "options_hi": ["छायावाद", "रीतिकाल", "भक्तिकाल", "प्रगतिवाद"],
    "answer_hi": "छायावाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "‘गीतांजलि’ के रचयिता कौन हैं?",
    "options_hi": ["रवींद्रनाथ टैगोर", "दिनकर", "प्रसाद", "पंत"],
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "किस काव्य युग को स्वर्ण युग कहा जाता है?",
    "options_hi": ["भक्तिकाल", "रीतिकाल", "आधुनिक काल", "आदिकाल"],
    "answer_hi": "भक्तिकाल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_hi": "‘अंधेर नगरी’ नाटक किसने लिखा?",
    "options_hi": ["भारतेंदु हरिश्चंद्र", "प्रसाद", "मोहन राकेश", "प्रेमचंद"],
    "answer_hi": "भारतेंदु हरिश्चंद्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "‘भारत भारती’ के लेखक कौन हैं?",
    "options_hi": ["मैथिलीशरण गुप्त", "दिनकर", "पंत", "निराला"],
    "answer_hi": "मैथिलीशरण गुप्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "‘कबीर’ किस समाज सुधारक के रूप में प्रसिद्ध थे?",
    "options_hi": ["धार्मिक", "सामाजिक", "राजनीतिक", "आर्थिक"],
    "answer_hi": "सामाजिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "‘मैला आँचल’ उपन्यास किस लेखक का है?",
    "options_hi": ["फणीश्वरनाथ रेणु", "प्रेमचंद", "अज्ञेय", "यशपाल"],
    "answer_hi": "फणीश्वरनाथ रेणु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "‘आधुनिक हिंदी साहित्य’ की भाषा क्या है?",
    "options_hi": ["ब्रज", "अवधी", "खड़ी बोली", "संस्कृत"],
    "answer_hi": "खड़ी बोली",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_hi": "‘निराला’ का जन्म नाम क्या था?",
    "options_hi": ["सूर्यकांत त्रिपाठी", "रामचंद्र", "श्यामलाल", "हरिप्रसाद"],
    "answer_hi": "सूर्यकांत त्रिपाठी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "‘प्रगतिवाद’ का संबंध किससे है?",
    "options_hi": ["सौंदर्य", "यथार्थ", "भक्ति", "रीति"],
    "answer_hi": "यथार्थ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "‘धूमिल’ किस विधा के रचनाकार थे?",
    "options_hi": ["कविता", "नाटक", "कहानी", "उपन्यास"],
    "answer_hi": "कविता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "‘गद्य’ की प्रमुख विधा कौन सी है?",
    "options_hi": ["कविता", "कहानी", "छंद", "दोहा"],
    "answer_hi": "कहानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "‘निबंध’ किस प्रकार की रचना है?",
    "options_hi": ["पद्य", "गद्य", "नाटक", "महाकाव्य"],
    "answer_hi": "गद्य",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_hi": "‘सुमित्रानंदन पंत’ किस प्रकृति के कवि थे?",
    "options_hi": ["प्रकृति", "वीर", "श्रृंगार", "भक्ति"],
    "answer_hi": "प्रकृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "‘हिंदी दिवस’ कब मनाया जाता है?",
    "options_hi": ["14 सितंबर", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"],
    "answer_hi": "14 सितंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "‘पद’ किस काव्य रूप से संबंधित है?",
    "options_hi": ["भक्ति", "वीर", "रीति", "प्रगतिवाद"],
    "answer_hi": "भक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "‘महाकाव्य’ की विशेषता क्या है?",
    "options_hi": ["लघु कथा", "विस्तृत कथानक", "संक्षिप्त वर्णन", "केवल संवाद"],
    "answer_hi": "विस्तृत कथानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "‘छायावाद’ का प्रमुख विषय क्या है?",
    "options_hi": ["आत्मा", "प्रकृति और भावना", "नीति", "समाज सुधार"],
    "answer_hi": "प्रकृति और भावना",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_hi": "‘कहानी’ की प्रमुख विशेषता क्या है?",
    "options_hi": ["संक्षिप्तता", "दीर्घता", "छंद", "तुक"],
    "answer_hi": "संक्षिप्तता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "‘नाटक’ किस विधा से संबंधित है?",
    "options_hi": ["संवाद", "वर्णन", "छंद", "भाव"],
    "answer_hi": "संवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "‘अज्ञेय’ किस युग के लेखक थे?",
    "options_hi": ["आधुनिक", "भक्ति", "रीति", "आदिकाल"],
    "answer_hi": "आधुनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "‘गीत’ किस विधा से संबंधित है?",
    "options_hi": ["कविता", "नाटक", "निबंध", "कहानी"],
    "answer_hi": "कविता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "‘साहित्य’ शब्द का अर्थ क्या है?",
    "options_hi": ["ज्ञान", "सुंदर लेखन", "इतिहास", "व्याकरण"],
    "answer_hi": "सुंदर लेखन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_hi": "‘हिंदी’ किस भाषा परिवार से संबंधित है?",
    "options_hi": ["आर्य", "द्रविड़", "चीनी", "सेमेटिक"],
    "answer_hi": "आर्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "‘कविता’ का मूल तत्व क्या है?",
    "options_hi": ["भाव", "संवाद", "कथानक", "तथ्य"],
    "answer_hi": "भाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "‘छंद’ किससे संबंधित है?",
    "options_hi": ["लय", "संवाद", "कथानक", "वर्णन"],
    "answer_hi": "लय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "‘नाटक’ में सबसे महत्वपूर्ण तत्व कौन सा है?",
    "options_hi": ["संवाद", "वर्णन", "छंद", "अलंकार"],
    "answer_hi": "संवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "‘हिंदी साहित्य’ का उद्देश्य क्या है?",
    "options_hi": ["मनोरंजन", "शिक्षा और आनंद", "केवल ज्ञान", "इतिहास लेखन"],
    "answer_hi": "शिक्षा और आनंद",
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
