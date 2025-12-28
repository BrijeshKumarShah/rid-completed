const questions = [
  {
    "num": 1,
    "question_en": "Resilience overcomes adversity, ___?",
    "options_en": ["doesn't it", "does it", "isn't it", "won't it"],
    "answer_en": "doesn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Sloths aren't lazy animals, ___?",
    "options_en": ["are they", "aren't they", "do they", "don't they"],
    "answer_en": "are they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "You haven't experienced virtual reality gaming, ___?",
    "options_en": ["have you", "haven't you", "did you", "do you"],
    "answer_en": "have you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The Thames River flows through London, ___?",
    "options_en": ["doesn't it", "does it", "isn't it", "won't it"],
    "answer_en": "doesn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "We should practice neuroplasticity exercises, ___?",
    "options_en": ["shouldn't we", "should we", "shall we", "will we"],
    "answer_en": "shouldn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Axolotls can regenerate limbs, ___?",
    "options_en": ["can't they", "can they", "do they", "don't they"],
    "answer_en": "can't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The Acropolis isn't in Spain, ___?",
    "options_en": ["is it", "isn't it", "does it", "doesn't it"],
    "answer_en": "is it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The neuroscience symposium will explore brain functions, ___?",
    "options_en": ["won't it", "will it", "isn't it", "doesn't it"],
    "answer_en": "won't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "He hasn't studied cognitive psychology, ___?",
    "options_en": ["has he", "hasn't he", "does he", "did he"],
    "answer_en": "has he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "I am not questioning your neural observations, ___?",
    "options_en": ["am I", "aren't I", "isn't I", "do I"],
    "answer_en": "am I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Nothing is as complex as consciousness, ___?",
    "options_en": ["is it", "isn't it", "does it", "doesn't it"],
    "answer_en": "is it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Let's establish a mindfulness research center, ___?",
    "options_en": ["shall we", "will we", "can we", "should we"],
    "answer_en": "shall we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Everybody requires cognitive stimulation, ___?",
    "options_en": ["don't they", "do they", "doesn't he", "doesn't she"],
    "answer_en": "don't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "You hardly ever neglect brain health exercises, ___?",
    "options_en": ["do you", "don't you", "are you", "have you"],
    "answer_en": "do you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "She had never experienced neurofeedback training, ___?",
    "options_en": ["had she", "hadn't she", "did she", "was she"],
    "answer_en": "had she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "There is wonder in neural connections, ___?",
    "options_en": ["isn't there", "is there", "are there", "aren't there"],
    "answer_en": "isn't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "You wouldn't ignore mental health symptoms, ___?",
    "options_en": ["would you", "wouldn't you", "will you", "won't you"],
    "answer_en": "would you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "He barely consumes processed sugars, ___?",
    "options_en": ["does he", "doesn't he", "is he", "has he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Everything involves neural processing, ___?",
    "options_en": ["doesn't it", "does it", "isn't it", "is it"],
    "answer_en": "doesn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The fMRI scanner didn't detect the activity, ___?",
    "options_en": ["did it", "didn't it", "does it", "do it"],
    "answer_en": "did it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "You couldn't have mapped the neural pathways alone, ___?",
    "options_en": ["could you", "couldn't you", "can you", "would you"],
    "answer_en": "could you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "My professor has published neuroscience research, ___?",
    "options_en": ["hasn't he", "has he", "doesn't he", "isn't he"],
    "answer_en": "hasn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Nobody anticipated the neuroplasticity discoveries, ___?",
    "options_en": ["did they", "didn't they", "did he", "did she"],
    "answer_en": "did they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "We must promote mental wellness programs, ___?",
    "options_en": ["mustn't we", "must we", "shouldn't we", "needn't we"],
    "answer_en": "mustn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "They used to practice phrenology, ___?",
    "options_en": ["didn't they", "did they", "used they", "usedn't they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "You aren't getting adequate REM sleep, ___?",
    "options_en": ["are you", "aren't you", "do you", "don't you"],
    "answer_en": "are you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The neuroimaging studies will yield insights, ___?",
    "options_en": ["won't they", "will they", "aren't they", "don't they"],
    "answer_en": "won't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "He has been studying synaptic transmission, ___?",
    "options_en": ["hasn't he", "has he", "isn't he", "doesn't he"],
    "answer_en": "hasn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "I am not challenging your neurocognitive findings, ___?",
    "options_en": ["am I", "aren't I", "isn't I", "do I"],
    "answer_en": "am I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "She hardly ever uses addictive substances, ___?",
    "options_en": ["does she", "doesn't she", "is she", "has she"],
    "answer_en": "does she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "We have to address neurodegenerative diseases, ___?",
    "options_en": ["don't we", "do we", "haven't we", "have we"],
    "answer_en": "don't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "You would have benefited from cognitive behavioral therapy, ___?",
    "options_en": ["wouldn't you", "would you", "will you", "won't you"],
    "answer_en": "wouldn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "There is no mental health without self-awareness, ___?",
    "options_en": ["is there", "isn't there", "are there", "aren't there"],
    "answer_en": "is there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "You needn't suppress emotional expressions, ___?",
    "options_en": ["need you", "needn't you", "do you", "must you"],
    "answer_en": "need you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "He barely discusses his meditation experiences, ___?",
    "options_en": ["does he", "doesn't he", "is he", "has he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "They had to revise their neuropsychological assessments, ___?",
    "options_en": ["didn't they", "did they", "hadn't they", "had they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "We ought to understand neurotransmitter functions, ___?",
    "options_en": ["oughtn't we", "ought we", "shouldn't we", "should we"],
    "answer_en": "oughtn't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "You'd better practice neurobic exercises, ___?",
    "options_en": ["hadn't you", "had you", "wouldn't you", "would you"],
    "answer_en": "hadn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "He rarely discusses his lucid dreaming experiences, ___?",
    "options_en": ["does he", "doesn't he", "is he", "has he"],
    "answer_en": "does he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "We shall unlock the mysteries of the brain, ___?",
    "options_en": ["shan't we", "shall we", "will we", "won't we"],
    "answer_en": "shan't we",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "It might involve deep brain stimulation, ___?",
    "options_en": ["mightn't it", "might it", "will it", "won't it"],
    "answer_en": "mightn't it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "They used to believe in four humors theory, ___?",
    "options_en": ["didn't they", "did they", "used they", "usedn't they"],
    "answer_en": "didn't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "There has been progress in brain-computer interfaces, ___?",
    "options_en": ["hasn't there", "has there", "had there", "is there"],
    "answer_en": "hasn't there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "She dare not question the neuroethical guidelines, ___?",
    "options_en": ["dare she", "daren't she", "does she", "doesn't she"],
    "answer_en": "dare she",
    attemptedly: false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The neuroscientists were mapping connectomes, ___?",
    "options_en": ["weren't they", "were they", "didn't they", "hadn't they"],
    "answer_en": "weren't they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "You have a neuropsychology workshop tomorrow, ___?",
    "options_en": ["don't you", "do you", "haven't you", "have you"],
    "answer_en": "don't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "He needs to understand neuroplasticity mechanisms, ___?",
    "options_en": ["doesn't he", "does he", "need he", "needn't he"],
    "answer_en": "doesn't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "I need not explain synaptic plasticity, ___?",
    "options_en": ["need I", "needn't I", "do I", "must I"],
    "answer_en": "need I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "They have no grasp of cognitive neuroscience, ___?",
    "options_en": ["do they", "don't they", "have they", "haven't they"],
    "answer_en": "do they",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Mindfulness will enhance well-being, ___?",
    "options_en": ["won't it", "will it", "does it", "is it"],
    "answer_en": "won't it",
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

