


const questions = [
   
  {
    "num": 1,
    "question_hi": "उत्तर प्रदेश में 'नैनीताल' किस लिए प्रसिद्ध है?",
    "options_hi": ["झीलों के लिए", "चाय के बागानों के लिए", "हिल स्टेशन के लिए", "वन्यजीव अभयारण्य के लिए"],
    "answer_hi": "झीलों के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला लोक निर्माण मंत्री कौन थीं?",
    "options_hi": ["मायावती", "सुषमा स्वराज", "गिरिजा व्यास", "सीमा द्विवेदी"],
    "answer_hi": "मायावती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "उत्तर प्रदेश में 'पीलीभीत टाइगर रिजर्व' कब स्थापित हुआ?",
    "options_hi": ["2008", "2010", "2012", "2014"],
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा बायोटेक पार्क कहाँ है?",
    "options_hi": ["लखनऊ", "नोएडा", "कानपुर", "वाराणसी"],
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "उत्तर प्रदेश में 'राजा भर्तहरि' की गुफा कहाँ स्थित है?",
    "options_hi": ["उज्जैन", "भोपाल", "इंदौर", "ग्वालियर"],
    "answer_hi": "उज्जैन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य महिला आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["सुधा मल्होत्रा", "रजनी सिंह", "शशि पांडे", "अनीता भटनागर"],
    "answer_hi": "सुधा मल्होत्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "उत्तर प्रदेश में 'जौनपुर' किसके लिए ऐतिहासिक रूप से प्रसिद्ध है?",
    "options_hi": ["शर्की सल्तनत", "मुगल साम्राज्य", "मराठा साम्राज्य", "सिक्ख साम्राज्य"],
    "answer_hi": "शर्की सल्तनत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा फल प्रसंस्करण उद्योग कहाँ है?",
    "options_hi": ["सहारनपुर", "मुजफ्फरनगर", "बागपत", "मेरठ"],
    "answer_hi": "सहारनपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "उत्तर प्रदेश में 'दुर्गावती' कौन थीं?",
    "options_hi": ["गोंड शासिका", "मराठा शासिका", "राजपूत शासिका", "जैन शासिका"],
    "answer_hi": "गोंड शासिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला मुख्य सूचना आयुक्त कौन थीं?",
    "options_hi": ["अनीता भटनागर", "सुधा मल्होत्रा", "रजनी सिंह", "शशि पांडे"],
    "answer_hi": "अनीता भटनागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "उत्तर प्रदेश में 'विंध्य पर्वत श्रृंखला' की अधिकतम ऊँचाई कितनी है?",
    "options_hi": ["600 मीटर", "800 मीटर", "1000 मीटर", "1200 मीटर"],
    "answer_hi": "800 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा औद्योगिक प्रशिक्षण संस्थान (ITI) कहाँ है?",
    "options_hi": ["कानपुर", "लखनऊ", "वाराणसी", "आगरा"],
    "answer_hi": "कानपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "उत्तर प्रदेश में 'महात्मा गांधी काशी विद्यापीठ' की स्थापना कब हुई?",
    "options_hi": ["1921", "1930", "1947", "1950"],
    "answer_hi": "1921",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला संघ लोक सेवा आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["रोज मिलियन बैथ्यू", "मेरी कॉम", "अनीता भटनागर", "सुधा मल्होत्रा"],
    "answer_hi": "रोज मिलियन बैथ्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "उत्तर प्रदेश में 'बागेश्वर धाम' कहाँ स्थित है?",
    "options_hi": ["छत्तीसगढ़", "मध्य प्रदेश", "उत्तराखंड", "राजस्थान"],
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा कृषि बाजार कहाँ है?",
    "options_hi": ["मेरठ", "गाजियाबाद", "सहारनपुर", "बुलंदशहर"],
    "answer_hi": "मेरठ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "उत्तर प्रदेश में 'सूफी संत ख्वाजा मोइनुद्दीन चिश्ती' की दरगाह कहाँ है?",
    "options_hi": ["अजमेर", "दिल्ली", "लखनऊ", "आगरा"],
    "answer_hi": "अजमेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला नेशनल ग्रीन ट्रिब्यूनल अध्यक्ष कौन थीं?",
    "options_hi": ["स्वतंत्रता कुमार", "आदर्श कुमार अग्रवाल", "अरुण कुमार त्यागी", "शीला दीक्षित"],
    "answer_hi": "स्वतंत्रता कुमार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "उत्तर प्रदेश में 'रामचरितमानस' की रचना किसने की?",
    "options_hi": ["तुलसीदास", "सूरदास", "मीराबाई", "कबीर"],
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा फिल्म स्टूडियो कहाँ है?",
    "options_hi": ["मुंबई", "चेन्नई", "हैदराबाद", "कोलकाता"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "उत्तर प्रदेश में 'चित्रकूट' किस नदी के किनारे स्थित है?",
    "options_hi": ["मंदाकिनी", "गंगा", "यमुना", "सरयू"],
    "answer_hi": "मंदाकिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला सूचना प्रसारण मंत्री कौन थीं?",
    "options_hi": ["सुषमा स्वराज", "प्रियंका गांधी", "मेनका गांधी", "स्मृति ईरानी"],
    "answer_hi": "सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "उत्तर प्रदेश में 'कुंभ मेला' कितने वर्षों बाद लगता है?",
    "options_hi": ["6 वर्ष", "12 वर्ष", "3 वर्ष", "4 वर्ष"],
    "answer_hi": "12 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा खाद्य प्रसंस्करण उद्योग कहाँ है?",
    "options_hi": ["मेरठ", "गाजियाबाद", "बुलंदशहर", "हापुड़"],
    "answer_hi": "मेरठ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "उत्तर प्रदेश में 'बाबर' का मकबरा कहाँ स्थित है?",
    "options_hi": ["काबुल", "दिल्ली", "आगरा", "लाहौर"],
    "answer_hi": "काबुल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला केन्द्रीय मंत्री कौन थीं?",
    "options_hi": ["राजकुमारी अमृत कौर", "विजयलक्ष्मी पंडित", "सरोजिनी नायडू", "इंदिरा गांधी"],
    "answer_hi": "राजकुमारी अमृत कौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "उत्तर प्रदेश में 'कान्हा राष्ट्रीय उद्यान' कहाँ स्थित है?",
    "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "महाराष्ट्र", "ओडिशा"],
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा फार्मा उद्योग केंद्र कहाँ है?",
    "options_hi": ["भोपाल", "हैदराबाद", "मुंबई", "बेंगलुरु"],
    "answer_hi": "भोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "उत्तर प्रदेश में 'जामा मस्जिद' किसने बनवाई?",
    "options_hi": ["शाहजहाँ", "अकबर", "जहाँगीर", "औरंगजेब"],
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला उपराष्ट्रपति कौन थीं?",
    "options_hi": ["सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "प्रतिभा पाटिल", "द्रौपदी मुर्मू"],
    "answer_hi": "विजयलक्ष्मी पंडित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "उत्तर प्रदेश में 'सरस्वती नदी' को किस नाम से भी जाना जाता है?",
    "options_hi": ["गुप्त सरिता", "अदृश्य नदी", "महानदी", "पवित्र नदी"],
    "answer_hi": "गुप्त सरिता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा शैक्षणिक संस्थान कौन सा है?",
    "options_hi": ["बनारस हिंदू विश्वविद्यालय", "अलीगढ़ मुस्लिम विश्वविद्यालय", "इलाहाबाद विश्वविद्यालय", "लखनऊ विश्वविद्यालय"],
    "answer_hi": "बनारस हिंदू विश्वविद्यालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "उत्तर प्रदेश में 'गुरु गोबिंद सिंह' का जन्मस्थान कहाँ है?",
    "options_hi": ["पटना", "आनंदपुर साहिब", "नांदेड़", "हिम्मतपुर"],
    "answer_hi": "पटना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला लेखिका कौन थीं?",
    "options_hi": ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "अमृता प्रीतम", "कमला दास"],
    "answer_hi": "महादेवी वर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "उत्तर प्रदेश में 'विदिशा' किस काल की राजधानी थी?",
    "options_hi": ["गुप्त काल", "मौर्य काल", "शुंग काल", "कुषाण काल"],
    "answer_hi": "शुंग काल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा नदी पुल कहाँ है?",
    "options_hi": ["गंगा पुल (पटना)", "ब्रह्मपुत्र पुल", "गोदावरी पुल", "नर्मदा पुल"],
    "answer_hi": "गंगा पुल (पटना)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "उत्तर प्रदेश में 'मुहम्मद गौरी' ने किसे हराया था?",
    "options_hi": ["पृथ्वीराज चौहान", "जयचंद", "भीम द्वितीय", "कुमारपाल"],
    "answer_hi": "पृथ्वीराज चौहान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य चुनाव आयुक्त कौन थीं?",
    "options_hi": ["सुनीता अरोड़ा", "मीना शर्मा", "रजनी सिंह", "अनीता भटनागर"],
    "answer_hi": "सुनीता अरोड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "उत्तर प्रदेश में 'तानसेन' किसके दरबार में थे?",
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "बहादुर शाह"],
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा बंदरगाह कहाँ है?",
    "options_hi": ["मुंबई", "चेन्नई", "कोलकाता", "कोचीन"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "उत्तर प्रदेश में 'कलकत्ता' की स्थापना किसने की?",
    "options_hi": ["जॉब चारनॉक", "वारेन हेस्टिंग्स", "रॉबर्ट क्लाइव", "लॉर्ड कर्जन"],
    "answer_hi": "जॉब चारनॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला संविधान सभा सदस्य कौन थीं?",
    "options_hi": ["सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "दुर्गाबाई देशमुख", "हंसा मेहता"],
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "उत्तर प्रदेश में 'मैसूर का टीपू सुल्तान' किस युद्ध में मारा गया?",
    "options_hi": ["श्रीरंगपट्टनम का युद्ध", "प्लासी का युद्ध", "बक्सर का युद्ध", "पानीपत का युद्ध"],
    "answer_hi": "श्रीरंगपट्टनम का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा विज्ञान संग्रहालय कहाँ है?",
    "options_hi": ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "उत्तर प्रदेश में 'छत्रपति शिवाजी महाराज' का राज्याभिषेक कब हुआ?",
    "options_hi": ["1674", "1680", "1690", "1700"],
    "answer_hi": "1674",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य मानवाधिकार आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["न्यायमूर्ति सुभाष चंद्र", "न्यायमूर्ति अशोक भूषण", "न्यायमूर्ति सुधा मल्होत्रा", "न्यायमूर्ति दलबीर भंडारी"],
    "answer_hi": "न्यायमूर्ति सुधा मल्होत्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "उत्तर प्रदेश में 'विजय स्तंभ' की ऊँचाई कितनी है?",
    "options_hi": ["37 मीटर", "47 मीटर", "57 मीटर", "67 मीटर"],
    "answer_hi": "37 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा संगीत महाविद्यालय कहाँ है?",
    "options_hi": ["लखनऊ", "वाराणसी", "आगरा", "मथुरा"],
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "उत्तर प्रदेश में 'हल्दीघाटी का युद्ध' कब हुआ?",
    "options_hi": ["1576", "1582", "1590", "1600"],
    "answer_hi": "1576",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य विधि आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["न्यायमूर्ति गीता मित्तल", "न्यायमूर्ति इंदिरा बनर्जी", "न्यायमूर्ति भानुमति", "न्यायमूर्ति रंजना देशाई"],
    "answer_hi": "न्यायमूर्ति गीता मित्तल",
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
