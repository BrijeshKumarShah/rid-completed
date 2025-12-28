


const questions = [
  {
    "num": 1,
    "question_hi": "उत्तर प्रदेश में 'सिंगरौली' किस खनिज के लिए प्रसिद्ध है?",
    "options_hi": ["कोयला", "लौह अयस्क", "ताँबा", "बॉक्साइट"],
    "answer_hi": "कोयला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य विधानसभा अध्यक्ष कौन थीं?",
    "options_hi": ["सीमा द्विवेदी", "मायावती", "सुषमा स्वराज", "गिरिजा व्यास"],
    "answer_hi": "सीमा द्विवेदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "उत्तर प्रदेश में 'केदारनाथ वन्यजीव अभयारण्य' कहाँ स्थित है?",
    "options_hi": ["चंदौली", "सोनभद्र", "मिर्जापुर", "वाराणसी"],
    "answer_hi": "चंदौली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा एयरक्राफ्ट उद्योग कहाँ है?",
    "options_hi": ["कानपुर", "लखनऊ", "झाँसी", "आगरा"],
    "answer_hi": "कानपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "उत्तर प्रदेश में 'बैरवा' क्या है?",
    "options_hi": ["एक लोक नृत्य", "एक प्रकार की मिठाई", "एक त्योहार", "एक वाद्ययंत्र"],
    "answer_hi": "एक लोक नृत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्यसभा उपाध्यक्ष कौन थीं?",
    "options_hi": ["नजमा हेपतुल्ला", "विजयलक्ष्मी पंडित", "सरोजिनी नायडू", "सुचेता कृपलानी"],
    "answer_hi": "नजमा हेपतुल्ला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "उत्तर प्रदेश में 'नौगढ़' किसके लिए प्रसिद्ध है?",
    "options_hi": ["ताँबा खान", "सोना खान", "हीरा खान", "चूना पत्थर"],
    "answer_hi": "ताँबा खान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा कृषि विश्वविद्यालय कहाँ है?",
    "options_hi": ["पंतनगर", "फैजाबाद", "कानपुर", "लखनऊ"],
    "answer_hi": "पंतनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "उत्तर प्रदेश में 'मुगल गार्डन' किसने बनवाया?",
    "options_hi": ["जहाँगीर", "शाहजहाँ", "अकबर", "औरंगजेब"],
    "answer_hi": "जहाँगीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला महापौर कौन थीं?",
    "options_hi": ["तारा चेरियन", "मीनाक्षी लेखी", "सुषमा शर्मा", "राधिका सिंह"],
    "answer_hi": "तारा चेरियन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "उत्तर प्रदेश में 'सूर्य मंदिर' कहाँ स्थित है?",
    "options_hi": ["कोणार्क", "मोढ़ेरा", "द्वारका", "सोमनाथ"],
    "answer_hi": "मोढ़ेरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा रेलवे वर्कशॉप कहाँ है?",
    "options_hi": ["चरबाग (लखनऊ)", "मुगलसराय", "कानपुर", "झाँसी"],
    "answer_hi": "चरबाग (लखनऊ)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "उत्तर प्रदेश में 'पचपेड़वा' किसके लिए प्रसिद्ध है?",
    "options_hi": ["जलविद्युत परियोजना", "थर्मल पावर प्लांट", "सिंचाई परियोजना", "सड़क परियोजना"],
    "answer_hi": "थर्मल पावर प्लांट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला आर्किटेक्ट कौन थीं?",
    "options_hi": ["पेरीन बेन", "उषा जोशी", "सरोज खन्ना", "लीना शिवदासानी"],
    "answer_hi": "पेरीन बेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "उत्तर प्रदेश में 'राजा जयचंद' की राजधानी कहाँ थी?",
    "options_hi": ["कन्नौज", "दिल्ली", "अजमेर", "ग्वालियर"],
    "answer_hi": "कन्नौज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा चीनी मिल वाला क्षेत्र कौन सा है?",
    "options_hi": ["पश्चिमी उत्तर प्रदेश", "पूर्वी उत्तर प्रदेश", "मध्य उत्तर प्रदेश", "दक्षिणी उत्तर प्रदेश"],
    "answer_hi": "पश्चिमी उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "उत्तर प्रदेश में 'मुंशी प्रेमचंद' का जन्मस्थान कहाँ है?",
    "options_hi": ["लमही (वाराणसी)", "इलाहाबाद", "लखनऊ", "कानपुर"],
    "answer_hi": "लमही (वाराणसी)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला फैशन डिजाइनर कौन थीं?",
    "options_hi": ["रितु बेरी", "रितु कुमार", "शान्तनू-निकोल", "मनीष मल्होत्रा"],
    "answer_hi": "रितु कुमार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "उत्तर प्रदेश में 'दाऊद खाँ का मकबरा' कहाँ स्थित है?",
    "options_hi": ["आगरा", "फतेहपुर सीकरी", "सिकंदरा", "दिल्ली"],
    "answer_hi": "आगरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा बस निर्माण कारखाना कहाँ है?",
    "options_hi": ["लखनऊ", "कानपुर", "मेरठ", "गाजियाबाद"],
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "उत्तर प्रदेश में 'रानी की वाव' कहाँ स्थित है?",
    "options_hi": ["पाटण", "अहमदाबाद", "बड़ोदरा", "भावनगर"],
    "answer_hi": "पाटण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला इतिहासकार कौन थीं?",
    "options_hi": ["रोमिला थापर", "इरफान हबीब", "सुमित सरकार", "बिपिन चंद्र"],
    "answer_hi": "रोमिला थापर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "उत्तर प्रदेश में 'कालीघाट' क्या है?",
    "options_hi": ["एक प्रसिद्ध मंदिर", "एक ऐतिहासिक स्थल", "एक नदी घाट", "एक पर्वत दर्रा"],
    "answer_hi": "एक प्रसिद्ध मंदिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा कृत्रिम झील कहाँ है?",
    "options_hi": ["बुढ़िया ताल", "केवलादेव झील", "रामगढ़ ताल", "बड़ा तालाब"],
    "answer_hi": "बुढ़िया ताल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "उत्तर प्रदेश में 'महामल्लपुरम' किसके लिए प्रसिद्ध है?",
    "options_hi": ["रथ मंदिर", "विजय स्तंभ", "गुफा मंदिर", "जल मंदिर"],
    "answer_hi": "रथ मंदिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला समाजशास्त्री कौन थीं?",
    "options_hi": ["इरावती कर्वे", "लीला दुबे", "मृणालिनी साराभाई", "कमलादेवी चट्टोपाध्याय"],
    "answer_hi": "इरावती कर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "उत्तर प्रदेश में 'हिंदू कॉलेज' की स्थापना कब हुई?",
    "options_hi": ["1817", "1825", "1835", "1845"],
    "answer_hi": "1817",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा मेडिकल कॉलेज कहाँ है?",
    "options_hi": ["किंग जॉर्ज मेडिकल कॉलेज", "एसएन मेडिकल कॉलेज", "जीएसवीएम मेडिकल कॉलेज", "बीआरडी मेडिकल कॉलेज"],
    "answer_hi": "किंग जॉर्ज मेडिकल कॉलेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "उत्तर प्रदेश में 'साँची का स्तूप' किस धर्म से संबंधित है?",
    "options_hi": ["बौद्ध धर्म", "जैन धर्म", "हिंदू धर्म", "सिख धर्म"],
    "answer_hi": "बौद्ध धर्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला नृत्यांगना कौन थीं?",
    "options_hi": ["रुक्मिणी देवी", "मृणालिनी साराभाई", "सितारा देवी", "मल्लिका साराभाई"],
    "answer_hi": "रुक्मिणी देवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "उत्तर प्रदेश में 'विक्टोरिया मेमोरियल' कहाँ स्थित है?",
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा पशु चिकित्सा विश्वविद्यालय कहाँ है?",
    "options_hi": ["मथुरा", "बरेली", "फैजाबाद", "गोरखपुर"],
    "answer_hi": "मथुरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "उत्तर प्रदेश में 'अकबर का मकबरा' कहाँ स्थित है?",
    "options_hi": ["सिकंदरा", "फतेहपुर सीकरी", "आगरा", "दिल्ली"],
    "answer_hi": "सिकंदरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला चित्रकार कौन थीं?",
    "options_hi": ["अमृता शेरगिल", "अन्जोली इला मेनन", "भारती कैर", "मधु भंडारकर"],
    "answer_hi": "अमृता शेरगिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "उत्तर प्रदेश में 'पंचतंत्र' की रचना किसने की?",
    "options_hi": ["विष्णु शर्मा", "वाल्मीकि", "वेद व्यास", "कालिदास"],
    "answer_hi": "विष्णु शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा बांध (ऊँचाई में) कौन सा है?",
    "options_hi": ["टिहरी बांध", "भाखड़ा बांध", "हीराकुंड बांध", "नागार्जुन सागर बांध"],
    "answer_hi": "टिहरी बांध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "उत्तर प्रदेश में 'मोतीलाल नेहरू' का जन्मस्थान कहाँ है?",
    "options_hi": ["इलाहाबाद", "लखनऊ", "दिल्ली", "मुंबई"],
    "answer_hi": "इलाहाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला फिल्म निर्देशक कौन थीं?",
    "options_hi": ["विजयलक्ष्मी पंडित", "फातिमा बी", "साई परांजपे", "मीरा नायर"],
    "answer_hi": "फातिमा बी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "उत्तर प्रदेश में 'जंतर-मंतर' कहाँ स्थित है?",
    "options_hi": ["दिल्ली", "जयपुर", "उज्जैन", "वाराणसी"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा इलेक्ट्रॉनिक्स उद्योग केंद्र कहाँ है?",
    "options_hi": ["नोएडा", "गाजियाबाद", "लखनऊ", "कानपुर"],
    "answer_hi": "नोएडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "उत्तर प्रदेश में 'बिरला मंदिर' कहाँ स्थित है?",
    "options_hi": ["दिल्ली", "कोलकाता", "मुंबई", "हैदराबाद"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला शिक्षा मंत्री कौन थीं?",
    "options_hi": ["अबुल कलाम आजाद", "मौलाना मोहम्मद अली", "सरोजिनी नायडू", "के. एम. मुंशी"],
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "उत्तर प्रदेश में 'सूफी संत निजामुद्दीन औलिया' की दरगाह कहाँ है?",
    "options_hi": ["दिल्ली", "आगरा", "फतेहपुर सीकरी", "अजमेर"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा नगर निगम क्षेत्र कौन सा है?",
    "options_hi": ["लखनऊ", "कानपुर", "वाराणसी", "आगरा"],
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "उत्तर प्रदेश में 'चंद्रगुप्त मौर्य' का शासनकाल कब था?",
    "options_hi": ["322-298 ईसा पूर्व", "268-232 ईसा पूर्व", "185-173 ईसा पूर्व", "72-64 ईसा पूर्व"],
    "answer_hi": "322-298 ईसा पूर्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला संगीतकार कौन थीं?",
    "options_hi": ["सरस्वती देवी", "लता मंगेशकर", "आशा भोसले", "मृदुला सिन्हा"],
    "answer_hi": "सरस्वती देवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "उत्तर प्रदेश में 'झाँसी की रानी लक्ष्मीबाई' की मृत्यु कब हुई?",
    "options_hi": ["1857", "1858", "1859", "1860"],
    "answer_hi": "1858",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा मेट्रो रेल नेटवर्क कहाँ है?",
    "options_hi": ["दिल्ली", "कोलकाता", "चेन्नई", "बेंगलुरु"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "उत्तर प्रदेश में 'ताज-उल-मसाजिद' कहाँ स्थित है?",
    "options_hi": ["भोपाल", "दिल्ली", "हैदराबाद", "जयपुर"],
    "answer_hi": "भोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला टेनिस खिलाड़ी कौन थीं?",
    "options_hi": ["सानिया मिर्जा", "निरुपमा संजीव", "रश्मि चक्रवर्ती", "शिखा ओबेरॉय"],
    "answer_hi": "निरुपमा संजीव",
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
