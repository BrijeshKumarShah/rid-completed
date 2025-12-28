


const questions = [
  {
    "num": 1,
    "question_hi": "मेटावर्स की अवधारणा को सबसे पहले किस उपन्यास में प्रस्तुत किया गया?",
    "options_hi": ["स्नो क्रैश", "न्यूरोमैन्सर", "रेडी प्लेयर वन", "द मैट्रिक्स"],
    "answer_hi": "स्नो क्रैश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "2024 में लॉन्च होने वाला भारत का पहला निजी रॉकेट कौन सा है?",
    "options_hi": ["विक्रम-एस", "अग्नि-पी", "जीएसएलवी मार्क III", "पीएसएलवी"],
    "answer_hi": "विक्रम-एस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "क्वांटम सुप्रीमेसी हासिल करने वाली पहली कंपनी कौन सी थी?",
    "options_hi": ["Google", "IBM", "Microsoft", "Intel"],
    "answer_hi": "Google",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "2024 में शुरू होने वाली भारत की डिजिटल करेंसी का नाम क्या है?",
    "options_hi": ["डिजिटल रुपी (e₹)", "भारतपे", "यूपीआई कोइन", "डिजिटल पैसा"],
    "answer_hi": "डिजिटल रुपी (e₹)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "ग्लोबल AI सूचकांक 2023 में भारत की रैंकिंग क्या थी?",
    "options_hi": ["1st", "5th", "10th", "20th"],
    "answer_hi": "5th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "5G तकनीक में मिलीमीटर वेव का रेंज कितना होता है?",
    "options_hi": ["24-100 GHz", "1-6 GHz", "700-900 MHz", "2.4-5 GHz"],
    "answer_hi": "24-100 GHz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "चंद्रयान-3 मिशन की कुल लागत कितनी थी?",
    "options_hi": ["615 करोड़ रुपये", "1000 करोड़ रुपये", "2000 करोड़ रुपये", "500 करोड़ रुपये"],
    "answer_hi": "615 करोड़ रुपये",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "GPT-4 में कितने पैरामीटर हैं?",
    "options_hi": ["1.7 ट्रिलियन", "175 बिलियन", "1 ट्रिलियन", "निर्दिष्ट नहीं"],
    "answer_hi": "निर्दिष्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "भारत का पहला हाइड्रोजन फ्यूल सेल बस किस शहर में शुरू हुआ?",
    "options_hi": ["दिल्ली", "बेंगलुरु", "पुणे", "लेह"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "वेब 3.0 की मुख्य विशेषता क्या है?",
    "options_hi": ["विकेंद्रीकरण", "केंद्रीकरण", "केवल पढ़ने के लिए", "सामाजिक नेटवर्किंग"],
    "answer_hi": "विकेंद्रीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "2024 में शुरू होने वाला भारत का पहला सेमीकंडक्टर प्लांट कहाँ स्थापित होगा?",
    "options_hi": ["गुजरात", "तमिलनाडु", "कर्नाटक", "उत्तर प्रदेश"],
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "मेडिकल में प्रयोग होने वाला 4D प्रिंटिंग क्या है?",
    "options_hi": ["समय के साथ आकार बदलने वाली वस्तुएं", "4 रंगों में प्रिंटिंग", "4 दिशाओं में प्रिंटिंग", "4 गुना तेज प्रिंटिंग"],
    "answer_hi": "समय के साथ आकार बदलने वाली वस्तुएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "भारत का पहला ग्रीन हाइड्रोजन प्लांट कहाँ स्थापित हुआ?",
    "options_hi": ["राजस्थान", "गुजरात", "आंध्र प्रदेश", "असम"],
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "क्वांटम कंप्यूटिंग में क्यूबिट क्या है?",
    "options_hi": ["क्वांटम बिट", "क्वांटम बाइट", "क्वांटम सर्किट", "क्वांटम गेट"],
    "answer_hi": "क्वांटम बिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "2023 में लॉन्च हुआ भारत का पहला स्वदेशी वेब ब्राउजर कौन सा है?",
    "options_hi": ["भीम", "यूपीआई ब्राउजर", "सूचना", "भारत ब्राउजर"],
    "answer_hi": "सूचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "ब्लॉकचेन टेक्नोलॉजी का उपयोग सबसे पहले किसके लिए किया गया?",
    "options_hi": ["बिटकॉइन", "ईथेरियम", "बैंकिंग", "सप्लाई चेन"],
    "answer_hi": "बिटकॉइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "न्यूरालिंक कंपनी का संस्थापक कौन है?",
    "options_hi": ["एलोन मस्क", "मार्क जुकरबर्ग", "लैरी पेज", "बिल गेट्स"],
    "answer_hi": "एलोन मस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "6G नेटवर्क की अधिकतम स्पीड कितनी होने की उम्मीद है?",
    "options_hi": ["1 Tbps", "100 Gbps", "10 Gbps", "1 Gbps"],
    "answer_hi": "1 Tbps",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "भारत का पहला लाइटहाउस प्रोजेक्ट किस शहर में है?",
    "options_hi": ["इंदौर", "सूरत", "बेंगलुरु", "चेन्नई"],
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "एज कंप्यूटिंग में लेटेंसी कितनी होती है?",
    "options_hi": ["<10 मिलीसेकंड", "<1 सेकंड", "<5 सेकंड", "<1 मिनट"],
    "answer_hi": "<10 मिलीसेकंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "2023 में चालू हुई दुनिया की सबसे लंबी हाई-स्पीड रेल लाइन कहाँ है?",
    "options_hi": ["चीन", "जापान", "फ्रांस", "जर्मनी"],
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "ह्यूमनॉइड रोबोट 'ऑप्टिमस' किस कंपनी का है?",
    "options_hi": ["टेस्ला", "बोस्टन डायनेमिक्स", "सोफिया", "IBM"],
    "answer_hi": "टेस्ला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "भारत का पहला ड्रोन डिलीवरी कॉरिडोर कहाँ स्थापित हुआ?",
    "options_hi": ["विजयवाड़ा", "दिल्ली", "मुंबई", "चंडीगढ़"],
    "answer_hi": "विजयवाड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "फोल्डेबल स्मार्टफोन डिस्प्ले में प्रयुक्त तकनीक कौन सी है?",
    "options_hi": ["पॉलीमर OLED", "LCD", "LED", "क्यूएलईडी"],
    "answer_hi": "पॉलीमर OLED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "2024 ओलंपिक खेल कहाँ आयोजित होंगे?",
    "options_hi": ["पेरिस", "लॉस एंजिल्स", "टोक्यो", "लंदन"],
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "जेम्स वेब स्पेस टेलीस्कोप की मुख्य दर्पण का व्यास कितना है?",
    "options_hi": ["6.5 मीटर", "2.4 मीटर", "10 मीटर", "5 मीटर"],
    "answer_hi": "6.5 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "भारत का पहला वर्चुअल डिजिटल यूनिवर्सिटी कहाँ स्थापित हो रही है?",
    "options_hi": ["गुजरात", "कर्नाटक", "केरल", "तमिलनाडु"],
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "मेटावर्स में NFT का क्या उपयोग है?",
    "options_hi": ["डिजिटल संपत्ति का स्वामित्व", "क्रिप्टो करेंसी", "सोशल मीडिया", "गेमिंग"],
    "answer_hi": "डिजिटल संपत्ति का स्वामित्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "2023 में पृथ्वी की कक्षा में लॉन्च किए गए स्टारलिंक सैटेलाइट की संख्या कितनी है?",
    "options_hi": ["4000+", "1000", "500", "2000"],
    "answer_hi": "4000+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "भारत का पहला ग्रीन एनर्जी कॉरिडोर कहाँ है?",
    "options_hi": ["राजस्थान-तमिलनाडु", "गुजरात-तमिलनाडु", "कर्नाटक-महाराष्ट्र", "पंजाब-हरियाणा"],
    "answer_hi": "राजस्थान-तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "आर्टिफिशियल जनरल इंटेलिजेंस (AGI) क्या है?",
    "options_hi": ["मानव जैसी सामान्य बुद्धि", "विशेष कार्यों के लिए AI", "मशीन लर्निंग", "डीप लर्निंग"],
    "answer_hi": "मानव जैसी सामान्य बुद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "2023 में भारत की जीडीपी ग्रोथ रेट क्या थी?",
    "options_hi": ["7.2%", "6.5%", "8.1%", "5.9%"],
    "answer_hi": "7.2%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "स्पेसएक्स का स्टारशिप रॉकेट कितना पेलोड ले जा सकता है?",
    "options_hi": ["100 टन", "50 टन", "20 टन", "10 टन"],
    "answer_hi": "100 टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "भारत का पहला डिजिटल हेल्थ आईडी कार्यक्रम क्या है?",
    "options_hi": ["आयुष्मान भारत डिजिटल मिशन", "डिजिटल इंडिया हेल्थ", "ई-हेल्थ कार्ड", "स्वस्थ भारत"],
    "answer_hi": "आयुष्मान भारत डिजिटल मिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "टोक्यो ओलंपिक 2020 में भारत ने कितने पदक जीते?",
    "options_hi": ["7", "6", "8", "5"],
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "2024 में G20 शिखर सम्मेलन की मेजबानी कौन करेगा?",
    "options_hi": ["भारत", "ब्राजील", "इंडोनेशिया", "दक्षिण अफ्रीका"],
    "answer_hi": "ब्राजील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "ऑगमेंटेड रियलिटी और वर्चुअल रियलिटी में मुख्य अंतर क्या है?",
    "options_hi": ["AR वास्तविक दुनिया में डिजिटल जोड़ता है, VR पूरी तरह आभासी है", "दोनों समान हैं", "AR आभासी है, VR वास्तविक है", "कोई अंतर नहीं"],
    "answer_hi": "AR वास्तविक दुनिया में डिजिटल जोड़ता है, VR पूरी तरह आभासी है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "2023 नोबेल शांति पुरस्कार किसे मिला?",
    "options_hi": ["नेर्गेस मोहम्मदी", "मलाला यूसुफजई", "ग्रेटा थनबर्ग", "अलेक्सी नवालनी"],
    "answer_hi": "नेर्गेस मोहम्मदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "भारत का पहला लिथियम आयन बैटरी प्लांट कहाँ स्थापित हो रहा है?",
    "options_hi": ["गुजरात", "तमिलनाडु", "कर्नाटक", "महाराष्ट्र"],
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "स्वायत्त वाहनों (Autonomous Vehicles) में प्रयुक्त मुख्य तकनीक कौन सी है?",
    "options_hi": ["LiDAR", "GPS", "कैमरा", "सभी"],
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "COP28 सम्मेलन कहाँ आयोजित हुआ?",
    "options_hi": ["दुबई", "पेरिस", "ग्लासगो", "मैड्रिड"],
    "answer_hi": "दुबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "नीलम राफेल विमान भारत में किस कंपनी द्वारा निर्मित किए जाएंगे?",
    "options_hi": ["हिंदुस्तान एयरोनॉटिक्स लिमिटेड", "भारत इलेक्ट्रॉनिक्स", "टाटा", "रिलायंस"],
    "answer_hi": "हिंदुस्तान एयरोनॉटिक्स लिमिटेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "क्रिप्टोकरेंसी रेगुलेशन बिल किस वर्ष संसद में पेश हुआ?",
    "options_hi": ["2021", "2022", "2023", "2020"],
    "answer_hi": "2021",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "2023 में लॉन्च हुआ सबसे शक्तिशाली सुपरकंप्यूटर का नाम क्या है?",
    "options_hi": ["फ्रंटियर", "सनवे ताइहुलाइट", "टाइटन", "सेक्वोया"],
    "answer_hi": "फ्रंटियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "भारत का पहला पूर्णतः स्वदेशी सुपरकंप्यूटर कौन सा है?",
    "options_hi": ["परम शिवाय", "सहस्र-T", "अनुपम", "ईKA"],
    "answer_hi": "परम शिवाय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "डीप सी माइनिंग में प्रयुक्त मुख्य तकनीक कौन सी है?",
    "options_hi": ["ROV (Remotely Operated Vehicles)", "सबमरीन", "ड्रोन", "सैटेलाइट"],
    "answer_hi": "ROV (Remotely Operated Vehicles)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "2024 में भारत की जनसंख्या कितनी अनुमानित है?",
    "options_hi": ["1.44 अरब", "1.5 अरब", "1.3 अरब", "1.6 अरब"],
    "answer_hi": "1.44 अरब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "स्पेस टूरिज्म शुरू करने वाली पहली कंपनी कौन सी है?",
    "options_hi": ["वर्जिन गैलेक्टिक", "स्पेसएक्स", "ब्लू ओरिजिन", "नासा"],
    "answer_hi": "वर्जिन गैलेक्टिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "जीन एडिटिंग तकनीक CRISPR-Cas9 का आविष्कार किसने किया?",
    "options_hi": ["जेनिफर डाउडना और एमानुएल चार्पेंटियर", "जेम्स वाटसन", "क्रिस्पर जॉन", "आइंस्टाइन"],
    "answer_hi": "जेनिफर डाउडना और एमानुएल चार्पेंटियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "2023 में किस देश ने चंद्रमा के दक्षिणी ध्रुव पर पहला सफल लैंडिंग किया?",
    "options_hi": ["भारत", "चीन", "रूस", "USA"],
    "answer_hi": "भारत",
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
