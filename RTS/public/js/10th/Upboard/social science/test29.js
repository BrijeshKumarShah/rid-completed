const questions = [
  {
    "num": 1,
    "question_hi": "विश्व का सबसे ऊँचा पर्वत शिखर कौन सा है?",
    "options_hi": ["कंचनजंगा", "माउंट एवरेस्ट", "किलिमंजारो", "एकांकागुआ"],
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "भारत में प्रथम परमाणु ऊर्जा केंद्र कहाँ स्थापित किया गया?",
    "options_hi": ["कलपक्कम", "तारापुर", "नरोरा", "रावतभाटा"],
    "answer_hi": "तारापुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "ग्रीन हाउस प्रभाव के लिए सबसे अधिक उत्तरदायी गैस कौन सी है?",
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_hi": ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "किस पंचवर्षीय योजना पर 'जवाहर रोजगार योजना' शुरू की गई?",
    "options_hi": ["सातवीं", "आठवीं", "नौवीं", "दसवीं"],
    "answer_hi": "आठवीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "विश्व व्यापार संगठन (WTO) में भारत कब शामिल हुआ?",
    "options_hi": ["1995", "1996", "1998", "2001"],
    "answer_hi": "1995",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "1857 के विद्रोह में झाँसी की रानी लक्ष्मीबाई ने किसके साथ मिलकर युद्ध किया?",
    "options_hi": ["तात्या टोपे", "नाना साहेब", "कुंवर सिंह", "बहादुर शाह जफर"],
    "answer_hi": "तात्या टोपे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
    "options_hi": ["ए.ओ. ह्यूम", "डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी"],
    "answer_hi": "डब्ल्यू.सी. बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद समानता का अधिकार देता है?",
    "options_hi": ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
    "answer_hi": "अनुच्छेद 14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "संविधान संशोधन की प्रक्रिया किस अनुच्छेद में दी गई है?",
    "options_hi": ["अनुच्छेद 368", "अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360"],
    "answer_hi": "अनुच्छेद 368",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "भारत का सबसे दक्षिणी बिंदु कौन सा है?",
    "options_hi": ["कन्याकुमारी", "इंदिरा प्वाइंट", "रामेश्वरम", "कोच्चि"],
    "answer_hi": "इंदिरा प्वाइंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "भारत में सबसे बड़ा मैंगनीज उत्पादक राज्य कौन सा है?",
    "options_hi": ["मध्य प्रदेश", "झारखंड", "ओडिशा", "कर्नाटक"],
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "पृथ्वी पर सबसे गहरी महासागरीय खाई कौन सी है?",
    "options_hi": ["मरियाना ट्रेंच", "जावा ट्रेंच", "प्यूर्टो रिको ट्रेंच", "टोंगा ट्रेंच"],
    "answer_hi": "मरियाना ट्रेंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "भारत की राष्ट्रीय आय में सबसे अधिक योगदान किस क्षेत्र का है?",
    "options_hi": ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "सभी समान"],
    "answer_hi": "तृतीयक क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "राजकोषीय नीति किसके द्वारा नियंत्रित की जाती है?",
    "options_hi": ["RBI", "वित्त मंत्रालय", "SEBI", "विश्व बैंक"],
    "answer_hi": "वित्त मंत्रालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "सविनय अवज्ञा आंदोलन कब शुरू हुआ?",
    "options_hi": ["1919", "1920", "1930", "1942"],
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "मुस्लिम लीग ने पाकिस्तान प्रस्ताव कब पारित किया?",
    "options_hi": ["1930", "1940", "1942", "1946"],
    "answer_hi": "1940",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "संविधान सभा की अंतिम बैठक कब हुई?",
    "options_hi": ["26 नवंबर 1949", "24 जनवरी 1950", "26 जनवरी 1950", "15 अगस्त 1947"],
    "answer_hi": "24 जनवरी 1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "भारत के उच्चतम न्यायालय के प्रथम मुख्य न्यायाधीश कौन थे?",
    "options_hi": ["हरिलाल जे. कानिया", "एम. पतंजलि शास्त्री", "बी.पी. सिन्हा", "वाई.वी. चंद्रचूड़"],
    "answer_hi": "हरिलाल जे. कानिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "उच्चतम न्यायालय"],
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत में सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
    "options_hi": ["NH-44", "NH-27", "NH-48", "NH-7"],
    "answer_hi": "NH-44",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "विश्व का सबसे बड़ा नदी द्वीप कौन सा है?",
    "options_hi": ["मजुली", "उज्जैन", "स्वालबार्ड", "ग्रीनलैंड"],
    "answer_hi": "मजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "भारत में हरित क्रांति का जनक किसे कहा जाता है?",
    "options_hi": ["एम.एस. स्वामीनाथन", "वर्गीज कुरियन", "सी. सुब्रह्मण्यम", "नॉर्मन बोरलॉग"],
    "answer_hi": "एम.एस. स्वामीनाथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "भारत का सबसे बड़ा सोना उत्पादक राज्य कौन सा है?",
    "options_hi": ["कर्नाटक", "झारखंड", "आंध्र प्रदेश", "राजस्थान"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "भारत में प्रत्यक्ष विदेशी निवेश (FDI) को मंजूरी देने वाली शीर्ष संस्था कौन सी है?",
    "options_hi": ["RBI", "SEBI", "DIPP", "वित्त मंत्रालय"],
    "answer_hi": "DIPP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "साइमन कमीशन का विरोध क्यों किया गया?",
    "options_hi": ["क्योंकि सभी सदस्य अंग्रेज थे", "क्योंकि यह महंगा था", "क्योंकि इसकी सिफारिशें कठोर थीं", "क्योंकि यह देरी से आया"],
    "answer_hi": "क्योंकि सभी सदस्य अंग्रेज थे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "कैबिनेट मिशन भारत कब आया?",
    "options_hi": ["1942", "1945", "1946", "1947"],
    "answer_hi": "1946",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "भारत के संविधान का निर्माता किसे कहा जाता है?",
    "options_hi": ["डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "भारत के संविधान की प्रस्तावना में कितने प्रकार के न्याय का उल्लेख है?",
    "options_hi": ["1", "2", "3", "4"],
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "लोकसभा का कार्यकाल कितना होता है?",
    "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "अनिश्चित"],
    "answer_hi": "5 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "भारत की सबसे लंबी नदी घाटी कौन सी है?",
    "options_hi": ["गंगा घाटी", "ब्रह्मपुत्र घाटी", "नर्मदा घाटी", "गोदावरी घाटी"],
    "answer_hi": "गंगा घाटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "विश्व का सबसे बड़ा डेल्टा कौन सा है?",
    "options_hi": ["गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नाइल डेल्टा", "अमेजन डेल्टा"],
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "भारत में सबसे बड़ा चाय उत्पादक राज्य कौन सा है?",
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "किस फसल को 'सुनहरा रेशा' कहा जाता है?",
    "options_hi": ["कपास", "जूट", "रेशम", "नारियल"],
    "answer_hi": "जूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "भारत में सबसे बड़ा परमाणु ऊर्जा संयंत्र कौन सा है?",
    "options_hi": ["कुडनकुलम", "तारापुर", "रावतभाटा", "कैगा"],
    "answer_hi": "कुडनकुलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "भारत में बेरोजगारी के आंकड़े कौन जारी करता है?",
    "options_hi": ["रिजर्व बैंक", "योजना आयोग", "श्रम मंत्रालय", "निति आयोग"],
    "answer_hi": "श्रम मंत्रालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "स्वदेशी आंदोलन कब शुरू हुआ?",
    "options_hi": ["1903", "1905", "1919", "1920"],
    "answer_hi": "1905",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "गदर पार्टी की स्थापना किसने की?",
    "options_hi": ["लाला हरदयाल", "भगत सिंह", "सुभाष चंद्र बोस", "रास बिहारी बोस"],
    "answer_hi": "लाला हरदयाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "भारतीय संविधान की आठवीं अनुसूची में कितनी भाषाएँ शामिल हैं?",
    "options_hi": ["14", "18", "22", "25"],
    "answer_hi": "22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "राज्यपाल की नियुक्ति कौन करता है?",
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्यमंत्री", "उच्चतम न्यायालय"],
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का सबसे बड़ा मसाला उत्पादक राज्य कौन सा है?",
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "हिमालय पर्वत श्रृंखला किस प्रकार की पर्वत श्रृंखला है?",
    "options_hi": ["वलित पर्वत", "ज्वालामुखी पर्वत", "ब्लॉक पर्वत", "अवशिष्ट पर्वत"],
    "answer_hi": "वलित पर्वत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "भारत में सबसे बड़ा कोयला उत्पादक राज्य कौन सा है?",
    "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "मध्य प्रदेश"],
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "भारत में नई आर्थिक नीति कब लागू की गई?",
    "options_hi": ["1985", "1991", "1995", "2000"],
    "answer_hi": "1991",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्यालय कहाँ है?",
    "options_hi": ["वाशिंगटन डी.सी.", "न्यूयॉर्क", "जिनेवा", "पेरिस"],
    "answer_hi": "वाशिंगटन डी.सी.",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "चंपारण सत्याग्रह कब हुआ?",
    "options_hi": ["1915", "1917", "1919", "1920"],
    "answer_hi": "1917",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "भारत के विभाजन के समय वायसराय कौन थे?",
    "options_hi": ["लॉर्ड माउंटबेटन", "लॉर्ड वेवेल", "लॉर्ड लिनलिथगो", "लॉर्ड इरविन"],
    "answer_hi": "लॉर्ड माउंटबेटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "भारत में पंचायती राज व्यवस्था किस राज्य में सबसे पहले शुरू की गई?",
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "कर्नाटक"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "भारत के संविधान में कितनी अनुसूचियाँ हैं?",
    "options_hi": ["8", "10", "12", "14"],
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "भारत का सबसे बड़ा वन्यजीव अभयारण्य कौन सा है?",
    "options_hi": ["काजीरंगा", "सुंदरवन", "गिर", "जिम कॉर्बेट"],
    "answer_hi": "जिम कॉर्बेट",
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
