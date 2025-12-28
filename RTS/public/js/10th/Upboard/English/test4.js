const questions = [
  {
    "num": 1,
    "question_en": "Which word is a proper noun?",
    "options_en": ["city", "river", "Ganga", "country"],
    "answer_en": "Ganga",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Choose the correct article: He is ___ honest man.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "an",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sentence is negative?",
    "options_en": ["She is happy", "She is not happy", "Is she happy?", "How happy she is!"],
    "answer_en": "She is not happy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Plural of 'Child' is:",
    "options_en": ["Childs", "Children", "Childes", "Childrens"],
    "answer_en": "Children",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which word is an adverb?",
    "options_en": ["Quick", "Quickly", "Quicken", "Quickness"],
    "answer_en": "Quickly",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Fill in the blank: He has been working ___ morning.",
    "options_en": ["since", "for", "from", "by"],
    "answer_en": "since",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tense is used in: She was singing?",
    "options_en": ["Simple Past", "Past Continuous", "Present Continuous", "Future Continuous"],
    "answer_en": "Past Continuous",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Choose the correct verb: Everyone ___ ready.",
    "options_en": ["are", "were", "is", "have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is a helping verb?",
    "options_en": ["Run", "Eat", "Have", "Jump"],
    "answer_en": "Have",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Strong' is:",
    "options_en": ["Hard", "Weak", "Power", "Heavy"],
    "answer_en": "Weak",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Choose the correct preposition: He divided the cake ___ two parts.",
    "options_en": ["into", "in", "by", "on"],
    "answer_en": "into",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which word is a pronoun?",
    "options_en": ["Boy", "Girl", "They", "Teacher"],
    "answer_en": "They",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Begin' is:",
    "options_en": ["End", "Finish", "Start", "Close"],
    "answer_en": "Start",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Antonym of 'Cheap' is:",
    "options_en": ["Low", "Poor", "Expensive", "Easy"],
    "answer_en": "Expensive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sentence is interrogative?",
    "options_en": ["She is sleeping", "Open the door", "Is she sleeping?", "What a sleep!"],
    "answer_en": "Is she sleeping?",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Choose the correct passive voice: He wrote a letter.",
    "options_en": ["A letter is written by him", "A letter was written by him", "He was written a letter", "A letter writes him"],
    "answer_en": "A letter was written by him",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Identify the subject: The cat is sleeping.",
    "options_en": ["cat", "sleeping", "is", "the"],
    "answer_en": "cat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which word is an abstract noun?",
    "options_en": ["Chair", "Table", "Honesty", "Pen"],
    "answer_en": "Honesty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Enviroment", "Environment", "Environmant", "Enviornment"],
    "answer_en": "Environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Fill in the blank: He is afraid ___ dogs.",
    "options_en": ["from", "of", "with", "by"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Plural of 'Ox' is:",
    "options_en": ["Oxes", "Oxs", "Oxen", "Oxes"],
    "answer_en": "Oxen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sentence shows request?",
    "options_en": ["Shut the door", "Please shut the door", "Door is shut", "Door shut"],
    "answer_en": "Please shut the door",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Choose the correct form: She ___ to school every day.",
    "options_en": ["go", "goes", "gone", "going"],
    "answer_en": "goes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which word is a collective noun?",
    "options_en": ["Team", "Player", "Ball", "Field"],
    "answer_en": "Team",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "One who writes poems is called:",
    "options_en": ["Writer", "Author", "Poet", "Novelist"],
    "answer_en": "Poet",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He did not went there", "He did not go there", "He does not went there", "He not go there"],
    "answer_en": "He did not go there",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Opposite of 'Early' is:",
    "options_en": ["Fast", "Late", "Soon", "Quick"],
    "answer_en": "Late",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which tense is used in: I shall be waiting?",
    "options_en": ["Future Simple", "Future Continuous", "Present Continuous", "Past Continuous"],
    "answer_en": "Future Continuous",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which word is a participle?",
    "options_en": ["Broken", "Break", "Broke", "Breaks"],
    "answer_en": "Broken",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Choose the correct preposition: He succeeded ___ hard work.",
    "options_en": ["by", "with", "in", "on"],
    "answer_en": "by",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which word means 'Very tired'?",
    "options_en": ["Fresh", "Exhausted", "Active", "Ready"],
    "answer_en": "Exhausted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A person who repairs shoes is called:",
    "options_en": ["Barber", "Cobbler", "Tailor", "Painter"],
    "answer_en": "Cobbler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct question tag: She is late, ___?",
    "options_en": ["isn't she", "is she", "wasn't she", "does she"],
    "answer_en": "isn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a prefix?",
    "options_en": ["Dis-", "Careful", "Kindness", "Slowly"],
    "answer_en": "Dis-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Synonym of 'Help' is:",
    "options_en": ["Support", "Stop", "Refuse", "Ignore"],
    "answer_en": "Support",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Choose the correct sentence:",
    "options_en": ["This is most best book", "This is the best book", "This is better book", "This is the better book"],
    "answer_en": "This is the best book",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which word is a suffix?",
    "options_en": ["-ness", "Re-", "Un-", "Pre-"],
    "answer_en": "-ness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Plural of 'Crisis' is:",
    "options_en": ["Crisises", "Crisis", "Crises", "Crisen"],
    "answer_en": "Crises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct sentence:",
    "options_en": ["Each of the boys are ready", "Each of the boys is ready", "Each boys is ready", "Each boy are ready"],
    "answer_en": "Each of the boys is ready",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is a formal greeting?",
    "options_en": ["Hi", "Hey", "Good afternoon", "Hello buddy"],
    "answer_en": "Good afternoon",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Bravo!", "Walk", "Soft", "Green"],
    "answer_en": "Bravo!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Opposite of 'Victory' is:",
    "options_en": ["Win", "Success", "Defeat", "Prize"],
    "answer_en": "Defeat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is good in math", "He is good at math", "He is good on math", "He is good for math"],
    "answer_en": "He is good at math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "One who treats sick people is called:",
    "options_en": ["Nurse", "Doctor", "Teacher", "Driver"],
    "answer_en": "Doctor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which sentence is optative?",
    "options_en": ["May you succeed", "Open the door", "Are you ready?", "He is ready"],
    "answer_en": "May you succeed",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Choose the correct article: He is ___ European.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Synonym of 'Angry' is:",
    "options_en": ["Happy", "Furious", "Calm", "Quiet"],
    "answer_en": "Furious",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a conjunction?",
    "options_en": ["But", "Very", "Slow", "Tall"],
    "answer_en": "But",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Choose the correct form: The news ___ true.",
    "options_en": ["are", "were", "is", "have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is a polite command?",
    "options_en": ["Sit here", "Please sit here", "You sit here", "Sit fast"],
    "answer_en": "Please sit here",
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

