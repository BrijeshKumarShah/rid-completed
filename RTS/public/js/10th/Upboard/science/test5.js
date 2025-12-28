const questions = [
  {
    "num": 1,
    "question_hi": "विद्युत शक्ति का सूत्र है:",
    "options_hi": ["P = VI", "P = I²R", "P = V²/R", "उपरोक्त सभी"],
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "ओम का नियम किससे संबंधित है?",
    "options_hi": ["V ∝ I", "V ∝ 1/I", "R ∝ 1/V", "R ∝ I²"],
    "answer_hi": "V ∝ I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "प्रतिरोध का SI मात्रक है:",
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "विद्युत धारा का SI मात्रक है:",
    "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "कूलॉम"],
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "विद्युत परिपथ में वोल्टमीटर को कैसे जोड़ा जाता है?",
    "options_hi": ["श्रेणीक्रम में", "समानांतर क्रम में", "टेढ़ा", "किसी भी तरह"],
    "answer_hi": "समानांतर क्रम में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "1 किलोवाट-घंटा (kWh) बराबर है:",
    "options_hi": ["3600 जूल", "36000 जूल", "3.6 × 10⁶ जूल", "1000 जूल"],
    "answer_hi": "3.6 × 10⁶ जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "विद्युत बल्ब के तंतु किस धातु के बने होते हैं?",
    "options_hi": ["ताँबा", "टंगस्टन", "लोहा", "एल्युमीनियम"],
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "फ्यूज तार किस सिद्धांत पर काम करता है?",
    "options_hi": ["चुंबकीय प्रभाव", "उष्मीय प्रभाव", "रासायनिक प्रभाव", "प्रकाशीय प्रभाव"],
    "answer_hi": "उष्मीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "विद्युत मोटर किस सिद्धांत पर काम करती है?",
    "options_hi": ["विद्युत चुम्बकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
    "answer_hi": "चुंबकीय प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विद्युत जनरेटर किस सिद्धांत पर काम करता है?",
    "options_hi": ["विद्युत चुम्बकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "उपरोक्त में से कोई नहीं"],
    "answer_hi": "विद्युत चुम्बकीय प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "दिष्ट धारा (DC) का स्रोत है:",
    "options_hi": ["डायनेमो", "ऑल्टरनेटर", "ट्रांसफार्मर", "फ्यूज"],
    "answer_hi": "डायनेमो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "प्रत्यावर्ती धारा (AC) का स्रोत है:",
    "options_hi": ["बैटरी", "ऑल्टरनेटर", "सौर सेल", "इनमें से कोई नहीं"],
    "answer_hi": "ऑल्टरनेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "विद्युत हीटर में किस सिद्धांत का उपयोग होता है?",
    "options_hi": ["चुंबकीय प्रभाव", "रासायनिक प्रभाव", "जूल का तापन नियम", "प्रकाशीय प्रभाव"],
    "answer_hi": "जूल का तापन नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "विद्युत फ्यूज का कार्य है:",
    "options_hi": ["धारा बढ़ाना", "सर्किट सुरक्षा", "वोल्टेज बढ़ाना", "प्रतिरोध घटाना"],
    "answer_hi": "सर्किट सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "ट्रांसफॉर्मर किस सिद्धांत पर काम करता है?",
    "options_hi": ["विद्युत चुम्बकीय प्रेरण", "तापीय प्रभाव", "जूल का नियम", "ओम का नियम"],
    "answer_hi": "विद्युत चुम्बकीय प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 16,
  "question_hi": "विद्युत आवेश का SI मात्रक है:",
  "options_hi": ["वोल्ट", "एम्पीयर", "कूलॉम", "वाट"],
  "answer_hi": "कूलॉम",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_hi": "कूलॉम का नियम किसके बीच बल से संबंधित है?",
  "options_hi": ["द्रव्यमान", "आवेश", "चुंबक", "प्रकाश"],
  "answer_hi": "आवेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_hi": "विद्युत क्षेत्र की तीव्रता का मात्रक है:",
  "options_hi": ["न्यूटन/कूलॉम", "वोल्ट/मीटर", "दोनों", "जूल/सेकंड"],
  "answer_hi": "दोनों",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_hi": "विद्युत विभव का SI मात्रक है:",
  "options_hi": ["जूल", "वोल्ट", "एम्पीयर", "ओम"],
  "answer_hi": "वोल्ट",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_hi": "धारिता का मात्रक है:",
  "options_hi": ["फैरड", "हेनरी", "सीमेन्स", "टेस्ला"],
  "answer_hi": "फैरड",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_hi": "प्रतिरोधकों का श्रेणीक्रम संयोजन में समतुल्य प्रतिरोध:",
  "options_hi": ["सबसे छोटे से कम", "सभी के योग के बराबर", "सबसे बड़े से अधिक", "शून्य"],
  "answer_hi": "सभी के योग के बराबर",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_hi": "किरचॉफ का धारा नियम किसके संरक्षण पर आधारित है?",
  "options_hi": ["ऊर्जा", "आवेश", "संवेग", "द्रव्यमान"],
  "answer_hi": "आवेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_hi": "विद्युत सेल का आंतरिक प्रतिरोध:",
  "options_hi": ["शून्य होता है", "बहुत कम होता है", "बहुत अधिक होता है", "अनंत होता है"],
  "answer_hi": "बहुत कम होता है",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_hi": "अर्धचालक में, तापमान बढ़ने पर प्रतिरोध:",
  "options_hi": ["बढ़ता है", "घटता है", "स्थिर रहता है", "शून्य हो जाता है"],
  "answer_hi": "घटता है",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_hi": "p-n संधि डायोड किस रूप में कार्य करता है?",
  "options_hi": ["प्रवर्धक", "दोलित्र", "एकतरफा स्विच", "प्रतिरोधक"],
  "answer_hi": "एकतरफा स्विच",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_hi": "ट्रांजिस्टर है:",
  "options_hi": ["दो टर्मिनल उपकरण", "तीन टर्मिनल उपकरण", "चार टर्मिनल उपकरण", "एक टर्मिनल उपकरण"],
  "answer_hi": "तीन टर्मिनल उपकरण",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_hi": "संधारित्र में संग्रहित ऊर्जा का सूत्र है:",
  "options_hi": ["½CV²", "CV", "C²V", "CV²"],
  "answer_hi": "½CV²",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_hi": "प्रेरकत्व का मात्रक है:",
  "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
  "answer_hi": "हेनरी",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_hi": "प्रत्यावर्ती धारा (AC) की आवृत्ति भारत में है:",
  "options_hi": ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
  "answer_hi": "50 Hz",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_hi": "विद्युत मीटर में किसका मापन होता है?",
  "options_hi": ["वोल्टेज", "धारा", "ऊर्जा खपत", "शक्ति"],
  "answer_hi": "ऊर्जा खपत",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_hi": "स्थिर विद्युतिकी का अध्ययन है:",
  "options_hi": ["गतिशील आवेश", "स्थिर आवेश", "चुंबकीय क्षेत्र", "प्रत्यावर्ती धारा"],
  "answer_hi": "स्थिर आवेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_hi": "विद्युत धारा का रासायनिक प्रभाव उपयोगी है:",
  "options_hi": ["बल्ब में", "मोटर में", "विद्युत लेपन में", "फ्यूज में"],
  "answer_hi": "विद्युत लेपन में",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_hi": "विद्युत अपघटन में, कैथोड पर क्या होता है?",
  "options_hi": ["ऑक्सीकरण", "अपचयन", "तटस्थीकरण", "विघटन"],
  "answer_hi": "अपचयन",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_hi": "फैराडे का विद्युत चुम्बकीय प्रेरण का प्रथम नियम:",
  "options_hi": ["EMF प्रेरित होता है", "धारा प्रेरित होती है", "प्रतिरोध बदलता है", "चुंबकीय क्षेत्र बदलता है"],
  "answer_hi": "EMF प्रेरित होता है",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_hi": "लेंज़ का नियम संबंधित है:",
  "options_hi": ["ऊर्जा संरक्षण से", "आवेश संरक्षण से", "संवेग संरक्षण से", "द्रव्यमान संरक्षण से"],
  "answer_hi": "ऊर्जा संरक्षण से",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_hi": "चुंबकीय फ्लक्स का मात्रक है:",
  "options_hi": ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
  "answer_hi": "वेबर",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_hi": "चुंबकीय क्षेत्र की तीव्रता का मात्रक है:",
  "options_hi": ["वेबर", "टेस्ला", "फैरड", "हेनरी"],
  "answer_hi": "टेस्ला",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_hi": "स्वप्रेरकत्व किसमें पाया जाता है?",
  "options_hi": ["प्रतिरोधक", "संधारित्र", "कुंडली", "डायोड"],
  "answer_hi": "कुंडली",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_hi": "परावैद्युत सामर्थ्य का मात्रक है:",
  "options_hi": ["वोल्ट/मीटर", "न्यूटन/कूलॉम", "टेस्ला", "वेबर"],
  "answer_hi": "वोल्ट/मीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_hi": "विद्युत चालकता का मात्रक है:",
  "options_hi": ["सीमेन्स", "ओम", "वोल्ट", "एम्पीयर"],
  "answer_hi": "सीमेन्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_hi": "सुपरकंडक्टर में प्रतिरोध होता है:",
  "options_hi": ["बहुत अधिक", "शून्य", "सामान्य", "अनंत"],
  "answer_hi": "शून्य",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_hi": "विद्युत द्विध्रुव आघूर्ण का मात्रक है:",
  "options_hi": ["कूलॉम-मीटर", "न्यूटन-मीटर", "जूल-सेकंड", "वोल्ट-मीटर"],
  "answer_hi": "कूलॉम-मीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_hi": "गॉस का नियम संबंधित है:",
  "options_hi": ["चुंबकत्व से", "विद्युत फ्लक्स से", "धारा से", "प्रतिरोध से"],
  "answer_hi": "विद्युत फ्लक्स से",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_hi": "विद्युत फ्लक्स का मात्रक है:",
  "options_hi": ["वोल्ट-मीटर", "न्यूटन-मीटर²/कूलॉम", "दोनों", "जूल-सेकंड"],
  "answer_hi": "दोनों",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_hi": "RC परिपथ का समय नियतांक है:",
  "options_hi": ["RC", "1/RC", "R/C", "C/R"],
  "answer_hi": "RC",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_hi": "LR परिपथ का समय नियतांक है:",
  "options_hi": ["L/R", "R/L", "LR", "1/LR"],
  "answer_hi": "L/R",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_hi": "शंट प्रतिरोध का उपयोग होता है:",
  "options_hi": ["वोल्टमीटर में", "एमीटर में", "गैल्वेनोमीटर में", "ओममीटर में"],
  "answer_hi": "एमीटर में",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_hi": "श्रेणी प्रतिरोध का उपयोग होता है:",
  "options_hi": ["वोल्टमीटर में", "एमीटर में", "दोनों में", "किसी में नहीं"],
  "answer_hi": "वोल्टमीटर में",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_hi": "व्हीटस्टोन ब्रिज का उपयोग होता है:",
  "options_hi": ["धारा मापने", "वोल्टेज मापने", "प्रतिरोध मापने", "शक्ति मापने"],
  "answer_hi": "प्रतिरोध मापने",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_hi": "पोटेंशियोमीटर का उपयोग होता है:",
  "options_hi": ["विभवांतर मापने", "धारा मापने", "प्रतिरोध मापने", "शक्ति मापने"],
  "answer_hi": "विभवांतर मापने",
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

