const questions = [
  {
    "num": 1,
    "question_hi": "भारत में सबसे ऊँचा बांध कौन सा है?",
    "options_hi": ["टिहरी बांध", "भाखड़ा बांध", "हीराकुंड बांध", "सरदार सरोवर बांध"],
    "answer_hi": "टिहरी बांध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "स्वेज नहर किन दो समुद्रों को जोड़ती है?",
    "options_hi": ["लाल सागर और भूमध्य सागर", "अटलांटिक और प्रशांत", "हिंद और प्रशांत", "काला सागर और भूमध्य"],
    "answer_hi": "लाल सागर और भूमध्य सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "भारत का पहला राष्ट्रीय उद्यान कौन सा है?",
    "options_hi": ["काजीरंगा", "जिम कॉर्बेट", "गिर", "कान्हा"],
    "answer_hi": "जिम कॉर्बेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "भारत में कौन सी मिट्टी सबसे अधिक उपजाऊ होती है?",
    "options_hi": ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लैटेराइट मिट्टी"],
    "answer_hi": "जलोढ़ मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "भारत में योजना आयोग को किस वर्ष भंग किया गया?",
    "options_hi": ["2014", "2015", "2016", "2017"],
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "जीएसटी (GST) किस प्रकार का कर है?",
    "options_hi": ["प्रत्यक्ष कर", "अप्रत्यक्ष कर", "आय कर", "संपत्ति कर"],
    "answer_hi": "अप्रत्यक्ष कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "नमक सत्याग्रह किस वर्ष शुरू हुआ?",
    "options_hi": ["1920", "1930", "1931", "1942"],
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "गांधी-इरविन समझौता कब हुआ?",
    "options_hi": ["1930", "1931", "1932", "1935"],
    "answer_hi": "1931",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "भारत के संविधान की प्रस्तावना में 'धर्मनिरपेक्ष' शब्द कब जोड़ा गया?",
    "options_hi": ["1976", "1950", "1951", "1949"],
    "answer_hi": "1976",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "राज्य सभा का सभापति कौन होता है?",
    "options_hi": ["राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री", "गृह मंत्री"],
    "answer_hi": "उपराष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "भारत की सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
    "options_hi": ["गुजरात", "आंध्र प्रदेश", "महाराष्ट्र", "तमिलनाडु"],
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "विश्व का सबसे बड़ा महाद्वीपीय देश कौन सा है?",
    "options_hi": ["कनाडा", "रूस", "चीन", "संयुक्त राज्य अमेरिका"],
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत में 'नीली क्रांति' किससे संबंधित है?",
    "options_hi": ["दुग्ध उत्पादन", "मत्स्य पालन", "खाद्य तेल", "बागवानी"],
    "answer_hi": "मत्स्य पालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "भारत में किस वर्ष रुपये का अवमूल्यन किया गया?",
    "options_hi": ["1990", "1991", "1992", "1993"],
    "answer_hi": "1991",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "विश्व व्यापार संगठन (WTO) के पहले महानिदेशक कौन थे?",
    "options_hi": ["पीटर सदरलैंड", "रेनाटो रुजिएरो", "माइक मूर", "सुपाचाई पनिचपकड़ी"],
    "answer_hi": "पीटर सदरलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "बंगाल का विभाजन कब रद्द किया गया?",
    "options_hi": ["1906", "1911", "1915", "1920"],
    "answer_hi": "1911",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "अखिल भारतीय किसान सभा की स्थापना कब हुई?",
    "options_hi": ["1935", "1936", "1937", "1938"],
    "answer_hi": "1936",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "भारतीय संविधान के किस अनुच्छेद में राज्य के नीति निर्देशक तत्व हैं?",
    "options_hi": ["अनुच्छेद 36-51", "अनुच्छेद 14-35", "अनुच्छेद 52-78", "अनुच्छेद 79-122"],
    "answer_hi": "अनुच्छेद 36-51",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "सर्वोच्च न्यायालय के न्यायाधीशों की नियुक्ति कौन करता है?",
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "सीजेआई", "संसद"],
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "भारत में वित्त आयोग का गठन कितने वर्षों के लिए होता है?",
    "options_hi": ["3 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
    "answer_hi": "5 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "विश्व का सबसे बड़ा मीठे पानी की झील कौन सी है?",
    "options_hi": ["बैकाल झील", "विक्टोरिया झील", "सुपीरियर झील", "मिशिगन झील"],
    "answer_hi": "सुपीरियर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "भारत में सबसे अधिक तांबा उत्पादक राज्य कौन सा है?",
    "options_hi": ["मध्य प्रदेश", "झारखंड", "राजस्थान", "आंध्र प्रदेश"],
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "वायुमंडल की सबसे निचली परत कौन सी है?",
    "options_hi": ["क्षोभमंडल", "समताप मंडल", "मध्यमंडल", "बाह्यमंडल"],
    "answer_hi": "क्षोभमंडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "भारत का पहला विशेष आर्थिक क्षेत्र (SEZ) कहाँ स्थापित किया गया?",
    "options_hi": ["कांडला", "सूरत", "नोएडा", "चेन्नई"],
    "answer_hi": "कांडला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "भारत का केन्द्रीय बैंक कौन सा है?",
    "options_hi": ["भारतीय स्टेट बैंक", "भारतीय रिजर्व बैंक", "भारतीय औद्योगिक विकास बैंक", "एक्सिस बैंक"],
    "answer_hi": "भारतीय रिजर्व बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "द्वैध शासन प्रणाली कब लागू की गई?",
    "options_hi": ["1909", "1919", "1935", "1947"],
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "साइमन कमीशन के अध्यक्ष कौन थे?",
    "options_hi": ["सर जॉन साइमन", "लॉर्ड इरविन", "लॉर्ड चेम्सफोर्ड", "लॉर्ड रीडिंग"],
    "answer_hi": "सर जॉन साइमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "भारत का पहला आम चुनाव कब हुआ?",
    "options_hi": ["1947", "1950", "1951-52", "1955"],
    "answer_hi": "1951-52",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद संवैधानिक उपचारों का अधिकार देता है?",
    "options_hi": ["अनुच्छेद 32", "अनुच्छेद 226", "अनुच्छेद 14", "अनुच्छेद 21"],
    "answer_hi": "अनुच्छेद 32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) की नियुक्ति कौन करता है?",
    "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय"],
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "भारत में सबसे बड़ा अभयारण्य कौन सा है?",
    "options_hi": ["रणथंभौर", "सुंदरवन", "गिर", "काजीरंगा"],
    "answer_hi": "सुंदरवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
    "options_hi": ["अमेजन", "नाइल", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_hi": "नाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "भारत में सबसे अधिक गन्ना उत्पादक राज्य कौन सा है?",
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत में पेट्रोलियम और प्राकृतिक गैस मंत्रालय द्वारा जारी 'प्रमुख संकेतक' क्या मापते हैं?",
    "options_hi": ["तेल की खपत", "गैस उत्पादन", "रिफाइनरी क्षमता", "आयात-निर्यात"],
    "answer_hi": "तेल की खपत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "विश्व बैंक का उद्देश्य क्या है?",
    "options_hi": ["विकास परियोजनाओं को वित्त देना", "मुद्रा विनिमय दर तय करना", "अंतर्राष्ट्रीय व्यापार को बढ़ावा देना", "शेयर बाजार को नियंत्रित करना"],
    "answer_hi": "विकास परियोजनाओं को वित्त देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "रॉलेट एक्ट कब पारित हुआ?",
    "options_hi": ["1917", "1918", "1919", "1920"],
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "स्वराज पार्टी की स्थापना किसने की?",
    "options_hi": ["मोतीलाल नेहरू और चितरंजन दास", "बाल गंगाधर तिलक", "लाला लाजपत राय", "गोपाल कृष्ण गोखले"],
    "answer_hi": "मोतीलाल नेहरू और चितरंजन दास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "भारत का संविधान किस तिथि को अपनाया गया?",
    "options_hi": ["26 जनवरी 1950", "26 नवंबर 1949", "15 अगस्त 1947", "9 दिसंबर 1946"],
    "answer_hi": "26 नवंबर 1949",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "भारत के उपराष्ट्रपति का चुनाव कौन करता है?",
    "options_hi": ["संसद के दोनों सदन", "लोकसभा", "राज्यसभा", "राष्ट्रपति"],
    "answer_hi": "संसद के दोनों सदन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "भारत में चुनाव आयोग के सदस्यों की संख्या कितनी है?",
    "options_hi": ["1", "2", "3", "4"],
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत में सबसे बड़ा रेलवे जंक्शन कौन सा है?",
    "options_hi": ["हावड़ा", "मुंबई", "नई दिल्ली", "गोरखपुर"],
    "answer_hi": "गोरखपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "भूकंप का केंद्र क्या कहलाता है?",
    "options_hi": ["अधिकेंद्र", "भूकंप केंद्र", "भ्रंश", "तरंग केंद्र"],
    "answer_hi": "भूकंप केंद्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "भारत में सबसे बड़ा सीमेंट उत्पादक राज्य कौन सा है?",
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "आंध्र प्रदेश", "तमिलनाडु"],
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "भारत में मुद्रास्फीति को नियंत्रित करने की जिम्मेदारी किसकी है?",
    "options_hi": ["वित्त मंत्रालय", "रिजर्व बैंक", "योजना आयोग", "वाणिज्य मंत्रालय"],
    "answer_hi": "रिजर्व बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "अंतर्राष्ट्रीय श्रम संगठन (ILO) का मुख्यालय कहाँ है?",
    "options_hi": ["जिनेवा", "पेरिस", "न्यूयॉर्क", "वाशिंगटन डी.सी."],
    "answer_hi": "जिनेवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "पूना पैक्ट कब हुआ?",
    "options_hi": ["1931", "1932", "1935", "1940"],
    "answer_hi": "1932",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "इंडियन लिबरल फेडरेशन की स्थापना किसने की?",
    "options_hi": ["सर तेज बहादुर सप्रू", "एम.ए. जिन्ना", "मोतीलाल नेहरू", "डॉ. बी.आर. अंबेडकर"],
    "answer_hi": "सर तेज बहादुर सप्रू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "भारत में पंचायती राज संस्थाओं का वैधानिक आधार क्या है?",
    "options_hi": ["73वां संविधान संशोधन", "74वां संविधान संशोधन", "42वां संविधान संशोधन", "44वां संविधान संशोधन"],
    "answer_hi": "73वां संविधान संशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति के क्षमादान की शक्ति से संबंधित है?",
    "options_hi": ["अनुच्छेद 72", "अनुच्छेद 74", "अनुच्छेद 76", "अनुच्छेद 78"],
    "answer_hi": "अनुच्छेद 72",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "भारत में सबसे बड़ा पक्षी अभयारण्य कौन सा है?",
    "options_hi": ["केओलादेव", "सुंदरवन", "भरतपुर", "नाल सरोवर"],
    "answer_hi": "भरतपुर",
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
