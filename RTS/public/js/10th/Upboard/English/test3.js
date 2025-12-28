const questions = [
  {
    "num": 1,
    "question_en": "Which word is a common noun?",
    "options_en": ["Delhi", "Ravi", "Teacher", "India"],
    "answer_en": "Teacher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Choose the correct article: She bought ___ umbrella.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "an",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sentence is affirmative?",
    "options_en": ["I do not like milk", "Do you like milk?", "I like milk", "What a milk!"],
    "answer_en": "I like milk",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Plural of 'Woman' is:",
    "options_en": ["Womans", "Womens", "Women", "Womanes"],
    "answer_en": "Women",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which word is an adjective?",
    "options_en": ["Beauty", "Beautiful", "Beautify", "Beautifully"],
    "answer_en": "Beautiful",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Fill in the blank: He was born ___ 2008.",
    "options_en": ["in", "on", "at", "by"],
    "answer_en": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which sentence is in simple present tense?",
    "options_en": ["She is writing", "She writes daily", "She wrote yesterday", "She will write"],
    "answer_en": "She writes daily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Choose the correct verb: They ___ football every evening.",
    "options_en": ["plays", "played", "play", "playing"],
    "answer_en": "play",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is a modal verb?",
    "options_en": ["May", "Did", "Does", "Done"],
    "answer_en": "May",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Happy' is:",
    "options_en": ["Glad", "Joyful", "Sad", "Cheerful"],
    "answer_en": "Sad",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Choose the correct preposition: He is sitting ___ the chair.",
    "options_en": ["on", "in", "at", "by"],
    "answer_en": "on",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which word is a conjunction?",
    "options_en": ["Because", "Very", "Slow", "Tall"],
    "answer_en": "Because",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Fast' is:",
    "options_en": ["Quick", "Slow", "Late", "Weak"],
    "answer_en": "Quick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Antonym of 'Clean' is:",
    "options_en": ["Pure", "Neat", "Dirty", "Fresh"],
    "answer_en": "Dirty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sentence is exclamatory?",
    "options_en": ["What a beautiful flower!", "This flower is beautiful", "Is this flower beautiful?", "Bring the flower"],
    "answer_en": "What a beautiful flower!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Choose the correct passive voice: She cleans the room.",
    "options_en": ["The room is cleaned by her", "The room was cleaned by her", "The room cleans her", "She is cleaned the room"],
    "answer_en": "The room is cleaned by her",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Identify the object: He wrote a letter.",
    "options_en": ["He", "wrote", "a", "letter"],
    "answer_en": "letter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which word is a concrete noun?",
    "options_en": ["Honesty", "Bravery", "Book", "Kindness"],
    "answer_en": "Book",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Definately", "Definitely", "Definitly", "Definetely"],
    "answer_en": "Definitely",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Fill in the blank: She is fond ___ chocolates.",
    "options_en": ["of", "for", "with", "on"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Plural of 'Tooth' is:",
    "options_en": ["Tooths", "Teeth", "Toothes", "Toothen"],
    "answer_en": "Teeth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sentence is imperative?",
    "options_en": ["Open the window", "He opened the window", "The window is open", "Is the window open?"],
    "answer_en": "Open the window",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Choose the correct form: I ___ my homework already.",
    "options_en": ["did", "have done", "am doing", "was doing"],
    "answer_en": "have done",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which word is a determiner?",
    "options_en": ["My", "Run", "Happy", "Quickly"],
    "answer_en": "My",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "One who cuts hair is called:",
    "options_en": ["Tailor", "Barber", "Cobbler", "Carpenter"],
    "answer_en": "Barber",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She can sings well", "She can sing well", "She could sings well", "She singing well"],
    "answer_en": "She can sing well",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Opposite of 'Always' is:",
    "options_en": ["Often", "Never", "Usually", "Daily"],
    "answer_en": "Never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which sentence is in future perfect tense?",
    "options_en": ["I will finish the work", "I finished the work", "I will have finished the work", "I am finishing the work"],
    "answer_en": "I will have finished the work",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which word is a gerund?",
    "options_en": ["Run", "Running", "Ran", "Runs"],
    "answer_en": "Running",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Choose the correct preposition: The train arrives ___ time.",
    "options_en": ["in", "on", "at", "by"],
    "answer_en": "on",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which word has the same meaning as 'Silent'?",
    "options_en": ["Noisy", "Quiet", "Loud", "Angry"],
    "answer_en": "Quiet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A person who teaches is called:",
    "options_en": ["Student", "Teacher", "Doctor", "Lawyer"],
    "answer_en": "Teacher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct question tag: He can swim, ___?",
    "options_en": ["can't he", "can he", "does he", "is he"],
    "answer_en": "can't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a compound word?",
    "options_en": ["Sunlight", "Sun", "Light", "Bright"],
    "answer_en": "Sunlight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Synonym of 'End' is:",
    "options_en": ["Begin", "Finish", "Open", "Start"],
    "answer_en": "Finish",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is more stronger than me", "He is strongest than me", "He is stronger than me", "He is strong than me"],
    "answer_en": "He is stronger than me",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which word is a suffix?",
    "options_en": ["-ful", "Un-", "Care", "Slow"],
    "answer_en": "-ful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Plural of 'Datum' is:",
    "options_en": ["Datums", "Data", "Dates", "Datum"],
    "answer_en": "Data",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct sentence:",
    "options_en": ["Neither of them are ready", "Neither of them is ready", "Neither of them were ready", "Neither of them have ready"],
    "answer_en": "Neither of them is ready",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is an informal greeting?",
    "options_en": ["Good morning", "Good evening", "Hello", "Respected sir"],
    "answer_en": "Hello",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Alas!", "Run", "Fast", "Blue"],
    "answer_en": "Alas!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Opposite of 'Truth' is:",
    "options_en": ["Fact", "Lie", "Reality", "Proof"],
    "answer_en": "Lie",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He insisted to go", "He insisted on going", "He insisted go", "He insisted for going"],
    "answer_en": "He insisted on going",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "One who makes furniture is called:",
    "options_en": ["Carpenter", "Painter", "Mason", "Plumber"],
    "answer_en": "Carpenter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which sentence is assertive?",
    "options_en": ["Please help me", "Is he ready?", "I am ready", "What a day!"],
    "answer_en": "I am ready",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Choose the correct word: She is ___ university student.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Synonym of 'Hard' is:",
    "options_en": ["Easy", "Difficult", "Soft", "Simple"],
    "answer_en": "Difficult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a prefix?",
    "options_en": ["Re-", "Happy", "Careful", "Slowly"],
    "answer_en": "Re-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Choose the correct form: The children ___ playing outside.",
    "options_en": ["is", "was", "are", "has"],
    "answer_en": "are",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is a polite request?",
    "options_en": ["Open the door", "Could you open the door?", "Door open", "I want door open"],
    "answer_en": "Could you open the door?",
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

