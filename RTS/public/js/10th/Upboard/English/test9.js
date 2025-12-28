const questions = [
    
  {
    "num": 1,
    "question_en": "She sings beautifully, ___?",
    "options_en": ["doesn't she", "does she", "isn't she", "won't she"],
    "answer_en": "doesn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "They aren't coming to the party, ___?",
    "options_en": ["are they", "aren't they", "do they", "don't they"],
    "answer_en": "are they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "You have seen that movie, ___?",
    "options_en": ["haven't you", "have you", "didn't you", "don't you"],
    "answer_en": "haven't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "He studies hard every day, ___?",
    "options_en": ["doesn't he", "does he", "isn't he", "won't he"],
    "answer_en": "doesn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "We should help the poor, ___?",
    "options_en": ["shouldn't we", "should we", "shall we", "will we"],
    "answer_en": "shouldn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "You can swim very well, ___?",
    "options_en": ["can't you", "can you", "don't you", "do you"],
    "answer_en": "can't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "It isn't too hot today, ___?",
    "options_en": ["is it", "isn't it", "does it", "doesn't it"],
    "answer_en": "is it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "They will arrive tomorrow, ___?",
    "options_en": ["won't they", "will they", "aren't they", "don't they"],
    "answer_en": "won't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "She has finished her homework, ___?",
    "options_en": ["hasn't she", "has she", "doesn't she", "isn't she"],
    "answer_en": "hasn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "I am your best friend, ___?",
    "options_en": ["aren't I", "amn't I", "isn't I", "am I"],
    "answer_en": "aren't I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Nothing was said about it, ___?",
    "options_en": ["was it", "wasn't it", "did it", "didn't it"],
    "answer_en": "was it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Let's start the meeting, ___?",
    "options_en": ["shall we", "will we", "shan't we", "should we"],
    "answer_en": "shall we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Somebody left the door open, ___?",
    "options_en": ["didn't they", "did they", "didn't he", "didn't she"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "You hardly ever exercise, ___?",
    "options_en": ["do you", "don't you", "did you", "are you"],
    "answer_en": "do you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "He had already eaten when you called, ___?",
    "options_en": ["hadn't he", "had he", "didn't he", "wasn't he"],
    "answer_en": "hadn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "There are many books on the shelf, ___?",
    "options_en": ["aren't there", "are there", "isn't there", "were there"],
    "answer_en": "aren't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "You would like some coffee, ___?",
    "options_en": ["wouldn't you", "would you", "will you", "won't you"],
    "answer_en": "wouldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "She scarcely speaks in class, ___?",
    "options_en": ["does she", "doesn't she", "is she", "has she"],
    "answer_en": "does she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Everything seems perfect now, ___?",
    "options_en": ["doesn't it", "does it", "isn't it", "is it"],
    "answer_en": "doesn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "They didn't attend the class, ___?",
    "options_en": ["did they", "didn't they", "do they", "don't they"],
    "answer_en": "did they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "You could have tried harder, ___?",
    "options_en": ["couldn't you", "could you", "can you", "would you"],
    "answer_en": "couldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "He owns a big house, ___?",
    "options_en": ["doesn't he", "does he", "hasn't he", "isn't he"],
    "answer_en": "doesn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Nobody wants to fail, ___?",
    "options_en": ["do they", "don't they", "does he", "does she"],
    "answer_en": "do they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "We must finish this project today, ___?",
    "options_en": ["mustn't we", "must we", "needn't we", "shouldn't we"],
    "answer_en": "mustn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "She used to be a teacher, ___?",
    "options_en": ["didn't she", "did she", "used she", "usedn't she"],
    "answer_en": "didn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "You aren't feeling well, ___?",
    "options_en": ["are you", "aren't you", "do you", "don't you"],
    "answer_en": "are you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "They will be waiting for us, ___?",
    "options_en": ["won't they", "will they", "aren't they", "weren't they"],
    "answer_en": "won't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "He has been working since morning, ___?",
    "options_en": ["hasn't he", "has he", "isn't he", "doesn't he"],
    "answer_en": "hasn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "I am not disturbing you, ___?",
    "options_en": ["am I", "aren't I", "isn't I", "do I"],
    "answer_en": "am I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "He rarely goes to parties, ___?",
    "options_en": ["does he", "doesn't he", "is he", "has he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "We have to submit the report tomorrow, ___?",
    "options_en": ["don't we", "do we", "haven't we", "have we"],
    "answer_en": "don't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "She would have succeeded if she tried, ___?",
    "options_en": ["wouldn't she", "would she", "will she", "won't she"],
    "answer_en": "wouldn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "There wasn't any problem, ___?",
    "options_en": ["was there", "wasn't there", "were there", "had there"],
    "answer_en": "was there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "You needn't come if you're busy, ___?",
    "options_en": ["need you", "needn't you", "do you", "must you"],
    "answer_en": "need you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "He barely knows the answer, ___?",
    "options_en": ["does he", "doesn't he", "is he", "has he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "They had to cancel the trip, ___?",
    "options_en": ["didn't they", "did they", "hadn't they", "had they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "He ought to respect his elders, ___?",
    "options_en": ["oughtn't he", "ought he", "shouldn't he", "should he"],
    "answer_en": "oughtn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "You'd rather stay at home, ___?",
    "options_en": ["wouldn't you", "would you", "hadn't you", "had you"],
    "answer_en": "wouldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "She scarcely ever smiles, ___?",
    "options_en": ["does she", "doesn't she", "is she", "has she"],
    "answer_en": "does she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "We shall meet again, ___?",
    "options_en": ["shan't we", "shall we", "will we", "won't we"],
    "answer_en": "shan't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "It might rain tonight, ___?",
    "options_en": ["mightn't it", "might it", "will it", "won't it"],
    "answer_en": "mightn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "They used to live in Delhi, ___?",
    "options_en": ["didn't they", "did they", "used they", "usedn't they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "There won't be any trouble, ___?",
    "options_en": ["will there", "won't there", "is there", "are there"],
    "answer_en": "will there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "She dare not oppose her father, ___?",
    "options_en": ["dare she", "daren't she", "does she", "doesn't she"],
    "answer_en": "dare she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "We were discussing the plan, ___?",
    "options_en": ["weren't we", "were we", "didn't we", "hadn't we"],
    "answer_en": "weren't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "You have two brothers, ___?",
    "options_en": ["don't you", "do you", "haven't you", "have you"],
    "answer_en": "don't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "He needs medical attention, ___?",
    "options_en": ["doesn't he", "does he", "need he", "needn't he"],
    "answer_en": "doesn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "I need not explain further, ___?",
    "options_en": ["need I", "needn't I", "do I", "must I"],
    "answer_en": "need I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "They have little hope of success, ___?",
    "options_en": ["do they", "don't they", "have they", "haven't they"],
    "answer_en": "do they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "She will never forget this day, ___?",
    "options_en": ["will she", "won't she", "does she", "is she"],
    "answer_en": "will she",
    "attempted": false,
    "selected": ""
  }
]
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

