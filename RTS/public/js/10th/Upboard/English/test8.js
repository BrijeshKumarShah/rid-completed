const questions = [
  {
    "num": 1,
    "question_en": "He is coming today, ___?",
    "options_en": ["isn't he", "is he", "doesn't he", "won't he"],
    "answer_en": "isn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "They play football every day, ___?",
    "options_en": ["don't they", "do they", "aren't they", "won't they"],
    "answer_en": "don't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "You have finished your work, ___?",
    "options_en": ["haven't you", "have you", "don't you", "didn't you"],
    "answer_en": "haven't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "She doesn't like coffee, ___?",
    "options_en": ["does she", "doesn't she", "is she", "will she"],
    "answer_en": "does she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "We should leave now, ___?",
    "options_en": ["shouldn't we", "should we", "shall we", "won't we"],
    "answer_en": "shouldn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "He can speak French, ___?",
    "options_en": ["can't he", "can he", "doesn't he", "isn't he"],
    "answer_en": "can't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "It was raining yesterday, ___?",
    "options_en": ["wasn't it", "was it", "didn't it", "isn't it"],
    "answer_en": "wasn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "You won't tell anyone, ___?",
    "options_en": ["will you", "won't you", "would you", "do you"],
    "answer_en": "will you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "They have been waiting for hours, ___?",
    "options_en": ["haven't they", "have they", "aren't they", "don't they"],
    "answer_en": "haven't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "I am right, ___?",
    "options_en": ["aren't I", "am I", "amn't I", "isn't I"],
    "answer_en": "aren't I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Nothing is impossible, ___?",
    "options_en": ["is it", "isn't it", "does it", "doesn't it"],
    "answer_en": "is it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Let's go for a walk, ___?",
    "options_en": ["shall we", "shan't we", "will we", "should we"],
    "answer_en": "shall we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Someone called me, ___?",
    "options_en": ["didn't they", "did they", "didn't he", "didn't someone"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "You never smoke, ___?",
    "options_en": ["do you", "don't you", "did you", "didn't you"],
    "answer_en": "do you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "She had completed her homework, ___?",
    "options_en": ["hadn't she", "had she", "didn't she", "wasn't she"],
    "answer_en": "hadn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "There is a problem, ___?",
    "options_en": ["isn't there", "is there", "doesn't there", "won't there"],
    "answer_en": "isn't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "You would help me, ___?",
    "options_en": ["wouldn't you", "would you", "will you", "won't you"],
    "answer_en": "wouldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "He seldom watches TV, ___?",
    "options_en": ["does he", "doesn't he", "did he", "is he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Everything is ready, ___?",
    "options_en": ["isn't it", "is it", "doesn't it", "won't it"],
    "answer_en": "isn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "They won the match, ___?",
    "options_en": ["didn't they", "did they", "won't they", "weren't they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "You could do better, ___?",
    "options_en": ["couldn't you", "could you", "can you", "will you"],
    "answer_en": "couldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "She has a beautiful voice, ___?",
    "options_en": ["doesn't she", "does she", "hasn't she", "isn't she"],
    "answer_en": "doesn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Nobody knows the answer, ___?",
    "options_en": ["do they", "don't they", "does he", "doesn't he"],
    "answer_en": "do they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "We must obey the rules, ___?",
    "options_en": ["mustn't we", "must we", "shouldn't we", "need we"],
    "answer_en": "mustn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "He used to live here, ___?",
    "options_en": ["didn't he", "did he", "used he", "usedn't he"],
    "answer_en": "didn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "You are not coming, ___?",
    "options_en": ["are you", "aren't you", "do you", "don't you"],
    "answer_en": "are you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "They will be arriving soon, ___?",
    "options_en": ["won't they", "will they", "aren't they", "don't they"],
    "answer_en": "won't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "She has been working hard, ___?",
    "options_en": ["hasn't she", "has she", "isn't she", "doesn't she"],
    "answer_en": "hasn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "I am not late, ___?",
    "options_en": ["am I", "aren't I", "isn't I", "do I"],
    "answer_en": "am I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "He never tells a lie, ___?",
    "options_en": ["does he", "doesn't he", "did he", "is he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "We have to complete this today, ___?",
    "options_en": ["don't we", "do we", "haven't we", "have we"],
    "answer_en": "don't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "She would have come if invited, ___?",
    "options_en": ["wouldn't she", "would she", "will she", "won't she"],
    "answer_en": "wouldn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "There were many people, ___?",
    "options_en": ["weren't there", "were there", "didn't there", "hadn't there"],
    "answer_en": "weren't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "You needn't worry, ___?",
    "options_en": ["need you", "needn't you", "do you", "don't you"],
    "answer_en": "need you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "He hardly ever writes letters, ___?",
    "options_en": ["does he", "doesn't he", "did he", "had he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "They had to leave early, ___?",
    "options_en": ["didn't they", "did they", "hadn't they", "had they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "She ought to apologize, ___?",
    "options_en": ["oughtn't she", "ought she", "shouldn't she", "should she"],
    "answer_en": "oughtn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "You'd better consult a doctor, ___?",
    "options_en": ["hadn't you", "had you", "wouldn't you", "would you"],
    "answer_en": "hadn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "He rarely makes mistakes, ___?",
    "options_en": ["does he", "doesn't he", "did he", "is he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "We shall overcome, ___?",
    "options_en": ["shan't we", "shall we", "will we", "won't we"],
    "answer_en": "shan't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "She might be late, ___?",
    "options_en": ["mightn't she", "might she", "will she", "won't she"],
    "answer_en": "mightn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "You used to smoke, ___?",
    "options_en": ["didn't you", "did you", "used you", "usedn't you"],
    "answer_en": "didn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "There will be a meeting tomorrow, ___?",
    "options_en": ["won't there", "will there", "isn't there", "is there"],
    "answer_en": "won't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "He dare not challenge me, ___?",
    "options_en": ["dare he", "daren't he", "does he", "doesn't he"],
    "answer_en": "dare he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "They were playing cricket, ___?",
    "options_en": ["weren't they", "were they", "didn't they", "hadn't they"],
    "answer_en": "weren't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "You have a car, ___?",
    "options_en": ["don't you", "do you", "haven't you", "have you"],
    "answer_en": "don't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "She needs help, ___?",
    "options_en": ["doesn't she", "does she", "need she", "needn't she"],
    "answer_en": "doesn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "I need not wait, ___?",
    "options_en": ["need I", "needn't I", "do I", "don't I"],
    "answer_en": "need I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "They have no money, ___?",
    "options_en": ["do they", "don't they", "have they", "haven't they"],
    "answer_en": "do they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "He will come, ___?",
    "options_en": ["won't he", "will he", "doesn't he", "isn't he"],
    "answer_en": "won't he",
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

