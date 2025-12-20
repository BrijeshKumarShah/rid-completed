const questions = [
  {
    num: 1,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the chemical symbol for water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता के सिद्धांत को किसने विकसित किया?",
    options_en: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "निकोल Tesla", "गैलीलियो गैलिली"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What gas do plants use for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which element has the chemical symbol 'Fe'?",
    question_hi: "'Fe' रासायनिक संकेत किस तत्व का है?",
    options_en: ["Iron", "Fluorine", "Lead", "Gold"],
    options_hi: ["लोहा", "फ्लोरीन", "सीसा", "सोना"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    options_en: ["Gold", "Diamond", "Quartz", "Iron"],
    options_hi: ["सोना", "हीरा", "क्वार्ट्ज", "लोहा"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["206", "210", "180", "230"],
    options_hi: ["206", "210", "180", "230"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the capital of France?",
    question_hi: "फ्रांस की राजधानी क्या है?",
    options_en: ["Berlin", "Madrid", "Paris", "Rome"],
    options_hi: ["बर्लिन", "मैड्रिड", "पेरिस", "रोम"],
    answer_en: "Paris",
    answer_hi: "पेरिस",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which gas do humans breathe to survive?",
    question_hi: "मनुष्य जीवित रहने के लिए किस गैस को सांस में लेते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the square root of 64?",
    question_hi: "64 का वर्गमूल क्या है?",
    options_en: ["6", "7", "8", "9"],
    options_hi: ["6", "7", "8", "9"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who wrote 'Hamlet'?",
    question_hi: "'हैमलेट' किसने लिखा?",
    options_en: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"],
    options_hi: ["विलियम वर्ड्सवर्थ", "विलियम शेक्सपियर", "जेन ऑस्टिन", "मार्क ट्वेन"],
    answer_en: "William Shakespeare",
    answer_hi: "विलियम शेक्सपियर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपनी वलयों के लिए प्रसिद्ध है?",
    options_en: ["Mars", "Jupiter", "Saturn", "Neptune"],
    options_hi: ["मंगल", "बृहस्पति", "शनि", "नेपच्यून"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "How many continents are there on Earth?",
    question_hi: "पृथ्वी पर कुल कितने महाद्वीप हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का क्वथनांक सेल्सियस में कितना होता है?",
    options_en: ["90°C", "100°C", "120°C", "150°C"],
    options_hi: ["90°C", "100°C", "120°C", "150°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the capital of Japan?",
    question_hi: "जापान की राजधानी क्या है?",
    options_en: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
    options_hi: ["बीजिंग", "सियोल", "बैंकॉक", "टोक्यो"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who painted the Mona Lisa?",
    question_hi: "मोना लिसा की पेंटिंग किसने बनाई?",
    options_en: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    options_hi: ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "माइकल एंजेलो"],
    answer_en: "Leonardo da Vinci",
    answer_hi: "लियोनार्डो दा विंची",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the largest ocean on Earth?",
    question_hi: "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["अटलांटिक महासागर", "हिन्द महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the smallest prime number?",
    question_hi: "सबसे छोटा अभाज्य संख्या कौन सा है?",
    options_en: ["0", "1", "2", "3"],
    options_hi: ["0", "1", "2", "3"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "कौन सा देश उगते सूरज की भूमि के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "India", "South Korea"],
    options_hi: ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the speed of light?",
    question_hi: "प्रकाश की गति क्या है?",
    options_en: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"],
    options_hi: ["300,000 किमी/से", "150,000 किमी/से", "500,000 किमी/से", "600,000 किमी/से"],
    answer_en: "300,000 km/s",
    answer_hi: "300,000 किमी/से",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which gas is used to fill balloons?",
    question_hi: "गुब्बारों को भरने के लिए किस गैस का उपयोग किया जाता है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Who is the author of 'Harry Potter'?",
    question_hi: "'हैरी पॉटर' के लेखक कौन हैं?",
    options_en: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
    options_hi: ["जे.आर.आर. टॉल्किन", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन", "स्टीफन किंग"],
    answer_en: "J.K. Rowling",
    answer_hi: "जे.के. रोलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which bird is known for its ability to mimic human speech?",
    question_hi: "कौन सा पक्षी मानव भाषा की नकल करने के लिए जाना जाता है?",
    options_en: ["Eagle", "Parrot", "Owl", "Pigeon"],
    options_hi: ["गरुड़", "तोता", "उल्लू", "कबूतर"],
    answer_en: "Parrot",
    answer_hi: "तोता",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which element is needed for breathing?",
    question_hi: "श्वसन के लिए किस तत्व की आवश्यकता होती है?",
    options_en: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
    options_hi: ["ऑक्सीजन", "कार्बन", "नाइट्रोजन", "सल्फर"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the main ingredient in chocolate?",
    question_hi: "चॉकलेट में मुख्य घटक क्या होता है?",
    options_en: ["Sugar", "Milk", "Cocoa", "Flour"],
    options_hi: ["चीनी", "दूध", "कोको", "आटा"],
    answer_en: "Cocoa",
    answer_hi: "कोको",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"],
    options_hi: ["वायुदाबमापी", "थर्मामीटर", "आर्द्रतामापी", "भूकंपमापी"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How many colors are there in a rainbow?",
    question_hi: "इंद्रधनुष में कुल कितने रंग होते हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which metal is the best conductor of electricity?",
    question_hi: "कौन सी धातु बिजली की सबसे अच्छी चालक होती है?",
    options_en: ["Iron", "Copper", "Gold", "Silver"],
    options_hi: ["लोहा", "तांबा", "सोना", "चांदी"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  }
];

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};