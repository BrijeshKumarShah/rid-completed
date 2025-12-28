const questions = [
  {
    "num": 1,
    "question_hi": "भारत में प्रथम बार रेलवे लाइन कहाँ से कहाँ तक बिछाई गई थी?",
    "options_hi": ["मुंबई से थाणे", "कोलकाता से रानीगंज", "मद्रास से बंगलौर", "दिल्ली से आगरा"],
    "answer_hi": "मुंबई से थाणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "भारत का सबसे बड़ा कॉफी उत्पादक राज्य कौन सा है?",
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "मुगल साम्राज्य का संस्थापक कौन था?",
    "options_hi": ["बाबर", "हुमायूँ", "अकबर", "जहाँगीर"],
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "भारतीय संविधान की आठवीं अनुसूची में कितनी भाषाएँ शामिल हैं?",
    "options_hi": ["14", "18", "22", "25"],
    "answer_hi": "22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "किसे 'भारतीय राष्ट्रीय कांग्रेस का महान वयोवृद्ध' कहा जाता है?",
    "options_hi": ["दादाभाई नौरोजी", "फिरोजशाह मेहता", "सुरेंद्रनाथ बनर्जी", "गोपाल कृष्ण गोखले"],
    "answer_hi": "दादाभाई नौरोजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "गंगा नदी का उद्गम स्थल कहाँ है?",
    "options_hi": ["गंगोत्री", "यमुनोत्री", "केदारनाथ", "बद्रीनाथ"],
    "answer_hi": "गंगोत्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "भारत का प्रथम कृत्रिम उपग्रह किस रॉकेट द्वारा छोड़ा गया था?",
    "options_hi": ["एसएलवी-3", "पीएसएलवी", "एएसएलवी", "जीएसएलवी"],
    "answer_hi": "एसएलवी-3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "चोल वंश का सबसे प्रसिद्ध शासक कौन था?",
    "options_hi": ["राजराजा चोल-I", "राजेंद्र चोल-I", "कुलोत्तुंग-I", "विजयालय"],
    "answer_hi": "राजराजा चोल-I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "भारत की पहली महिला मुख्यमंत्री कौन थीं?",
    "options_hi": ["इंदिरा गांधी", "सुचेता कृपलानी", "विजयलक्ष्मी पंडित", "ममता बनर्जी"],
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "विश्व का सबसे बड़ा प्रायद्वीप कौन सा है?",
    "options_hi": ["भारतीय प्रायद्वीप", "अरब प्रायद्वीप", "इबेरियन प्रायद्वीप", "स्कैंडिनेवियाई प्रायद्वीप"],
    "answer_hi": "अरब प्रायद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "किस वायसराय के कार्यकाल में भारत में पहली जनगणना हुई?",
    "options_hi": ["लॉर्ड मेयो", "लॉर्ड रिपन", "लॉर्ड लिटन", "लॉर्ड डफरिन"],
    "answer_hi": "लॉर्ड मेयो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "भारत का सबसे बड़ा बांध कौन सा है?",
    "options_hi": ["भाखड़ा नांगल", "हीराकुंड", "टिहरी", "नागार्जुन सागर"],
    "answer_hi": "हीराकुंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "महात्मा गांधी ने सत्याग्रह का पहला प्रयोग कहाँ किया था?",
    "options_hi": ["भारत", "दक्षिण अफ्रीका", "इंग्लैंड", "अमेरिका"],
    "answer_hi": "दक्षिण अफ्रीका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
    "options_hi": ["सेब", "केला", "आम", "अंगूर"],
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "राष्ट्रीय आय में कृषि क्षेत्र का योगदान कितना है?",
    "options_hi": ["लगभग 15%", "लगभग 25%", "लगभग 35%", "लगभग 50%"],
    "answer_hi": "लगभग 15%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "किस सिख गुरु ने गुरु ग्रंथ साहिब का संकलन किया?",
    "options_hi": ["गुरु नानक", "गुरु अर्जन देव", "गुरु गोबिंद सिंह", "गुरु तेग बहादुर"],
    "answer_hi": "गुरु अर्जन देव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "भारत का सबसे बड़ा सॉफ्टवेयर निर्यातक राज्य कौन सा है?",
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "तमिलनाडु", "तेलंगाना"],
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "1857 के विद्रोह को किसने 'भारत का प्रथम स्वतंत्रता संग्राम' कहा?",
    "options_hi": ["वी.डी. सावरकर", "बाल गंगाधर तिलक", "महात्मा गांधी", "जवाहरलाल नेहरू"],
    "answer_hi": "वी.डी. सावरकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "भारत की सबसे लंबी सुरंग कौन सी है?",
    "options_hi": ["जवाहर सुरंग", "पीर पंजाल सुरंग", "चेनानी-नाशरी सुरंग", "कारकोरम सुरंग"],
    "answer_hi": "पीर पंजाल सुरंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "हड़प्पा सभ्यता की खोज किसने की थी?",
    "options_hi": ["आर.डी. बनर्जी", "दयाराम साहनी", "राखाल दास बनर्जी", "सर जॉन मार्शल"],
    "answer_hi": "दयाराम साहनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "भारत का सबसे बड़ा दूध उत्पादक राज्य कौन सा है?",
    "options_hi": ["उत्तर प्रदेश", "गुजरात", "राजस्थान", "महाराष्ट्र"],
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "किस गवर्नर जनरल ने बंगाल में स्थायी बंदोबस्त लागू किया?",
    "options_hi": ["लॉर्ड कार्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड हेस्टिंग्स", "लॉर्ड विलियम बेंटिक"],
    "answer_hi": "लॉर्ड कार्नवालिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "भारत का राष्ट्रीय खेल कौन सा है?",
    "options_hi": ["क्रिकेट", "हॉकी", "फुटबॉल", "कबड्डी"],
    "answer_hi": "हॉकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "नर्मदा नदी किस खाड़ी में गिरती है?",
    "options_hi": ["खंभात की खाड़ी", "कच्छ की खाड़ी", "मन्नार की खाड़ी", "बंगाल की खाड़ी"],
    "answer_hi": "खंभात की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "भारत में प्रथम सूती कपड़ा मिल कहाँ स्थापित हुई?",
    "options_hi": ["मुंबई", "अहमदाबाद", "कोलकाता", "कानपुर"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "किस सुल्तान ने 'दीन-ए-इलाही' धर्म चलाया?",
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगजेब"],
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "भारत का पहला बायोस्फीयर रिजर्व कौन सा है?",
    "options_hi": ["नंदादेवी", "सुंदरवन", "नीलगिरी", "मन्नार की खाड़ी"],
    "answer_hi": "नीलगिरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "किसे 'सीमांत गांधी' कहा जाता है?",
    "options_hi": ["अब्दुल गफ्फार खान", "मौलाना अबुल कलाम आजाद", "बादशाह खान", "सैयद अहमद खान"],
    "answer_hi": "अब्दुल गफ्फार खान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "भारत का सबसे बड़ा जिला क्षेत्रफल में कौन सा है?",
    "options_hi": ["लेह", "जैसलमेर", "कच्छ", "बीकानेर"],
    "answer_hi": "कच्छ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "वेदों की संख्या कितनी है?",
    "options_hi": ["3", "4", "5", "6"],
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "भारत में प्रथम परमाणु परीक्षण कब किया गया था?",
    "options_hi": ["1972", "1974", "1998", "1970"],
    "answer_hi": "1974",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "ताजमहल किस नदी के किनारे स्थित है?",
    "options_hi": ["यमुना", "गंगा", "गोमती", "चंबल"],
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "भारत का सबसे बड़ा थर्मल पावर प्लांट कहाँ है?",
    "options_hi": ["विंध्याचल", "तालचर", "नेवेली", "कपारक्कल"],
    "answer_hi": "विंध्याचल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "गुप्त साम्राज्य का संस्थापक कौन था?",
    "options_hi": ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
    "answer_hi": "चंद्रगुप्त प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "भारत का सबसे बड़ा राष्ट्रीय राजमार्ग कौन सा है?",
    "options_hi": ["NH-44", "NH-48", "NH-27", "NH-6"],
    "answer_hi": "NH-44",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "किस गवर्नर जनरल ने अंग्रेजी शिक्षा की शुरुआत की?",
    "options_hi": ["लॉर्ड विलियम बेंटिक", "लॉर्ड मैकाले", "लॉर्ड डलहौजी", "लॉर्ड कर्जन"],
    "answer_hi": "लॉर्ड विलियम बेंटिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "भारत की सबसे ऊँची चोटी K2 कहाँ स्थित है?",
    "options_hi": ["नेपाल", "भारत", "पाकिस्तान", "चीन"],
    "answer_hi": "पाकिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "बौद्ध धर्म का प्रचार-प्रसार करने वाला प्रथम शासक कौन था?",
    "options_hi": ["अशोक", "कनिष्क", "हर्षवर्धन", "बिंबिसार"],
    "answer_hi": "अशोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "भारत का सबसे बड़ा फल उत्पादक राज्य कौन सा है?",
    "options_hi": ["महाराष्ट्र", "आंध्र प्रदेश", "उत्तर प्रदेश", "गुजरात"],
    "answer_hi": "आंध्र प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "किस वायसराय के समय भारत में रेलवे की शुरुआत हुई?",
    "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड मेयो", "लॉर्ड रिपन"],
    "answer_hi": "लॉर्ड डलहौजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "भारत का राष्ट्रीय पेड़ कौन सा है?",
    "options_hi": ["बरगद", "पीपल", "आम", "नीम"],
    "answer_hi": "बरगद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "सिंधु घाटी सभ्यता का सबसे महत्वपूर्ण बंदरगाह कौन सा था?",
    "options_hi": ["लोथल", "मोहनजोदड़ो", "हड़प्पा", "कालीबंगा"],
    "answer_hi": "लोथल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "भारत में प्रथम एटीएम कब शुरू हुआ?",
    "options_hi": ["1987", "1990", "1995", "2000"],
    "answer_hi": "1987",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "विक्टोरिया जलप्रपात किस नदी पर स्थित है?",
    "options_hi": ["जाम्बेजी", "कांगो", "नील", "नाइजर"],
    "answer_hi": "जाम्बेजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "भारत का प्रथम समाचार पत्र कौन सा था?",
    "options_hi": ["बंगाल गजट", "हिक्की गजट", "मराठा", "केसरी"],
    "answer_hi": "बंगाल गजट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "स्वतंत्र भारत के प्रथम भारतीय गवर्नर जनरल कौन थे?",
    "options_hi": ["लॉर्ड माउंटबेटन", "चक्रवर्ती राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "सरदार पटेल"],
    "answer_hi": "चक्रवर्ती राजगोपालाचारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "भारत का सबसे बड़ा मैंगनीज उत्पादक राज्य कौन सा है?",
    "options_hi": ["मध्य प्रदेश", "ओडिशा", "महाराष्ट्र", "छत्तीसगढ़"],
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "किस मुगल बादशाह को 'जिंदा पीर' कहा जाता था?",
    "options_hi": ["औरंगजेब", "बहादुर शाह जफर", "शाह आलम", "फर्रुखसियर"],
    "answer_hi": "औरंगजेब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "भारत का सबसे बड़ा फिल्म उद्योग किस शहर में है?",
    "options_hi": ["मुंबई", "चेन्नई", "कोलकाता", "हैदराबाद"],
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "होमरूल आंदोलन के प्रणेता कौन थे?",
    "options_hi": ["बाल गंगाधर तिलक और एनी बेसेंट", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
    "answer_hi": "बाल गंगाधर तिलक और एनी बेसेंट",
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
