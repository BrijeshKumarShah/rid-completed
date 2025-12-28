const questions = [
  {
    "num": 1,
    "question_en": "Which word is a proper noun?",
    "options_en": ["city", "girl", "India", "river"],
    "answer_en": "India",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Choose the correct article: He is ___ European.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sentence is negative?",
    "options_en": ["I like tea", "I do not like tea", "Do you like tea?", "How nice!"],
    "answer_en": "I do not like tea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Choose the correct plural of 'Leaf'.",
    "options_en": ["Leafs", "Leaves", "Leafes", "Leavs"],
    "answer_en": "Leaves",
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
    "question_en": "Fill in the blank: He goes to school ___ foot.",
    "options_en": ["by", "on", "with", "from"],
    "answer_en": "on",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which sentence is in present perfect tense?",
    "options_en": ["I eat food", "I ate food", "I have eaten food", "I am eating food"],
    "answer_en": "I have eaten food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Choose the correct word: She ___ to school daily.",
    "options_en": ["go", "goes", "going", "gone"],
    "answer_en": "goes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is a helping verb?",
    "options_en": ["Run", "Eat", "Is", "Play"],
    "answer_en": "Is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Early' is:",
    "options_en": ["Fast", "Late", "Soon", "Quick"],
    "answer_en": "Late",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Choose the correct preposition: The cat jumped ___ the wall.",
    "options_en": ["on", "over", "at", "in"],
    "answer_en": "over",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which word is a conjunction?",
    "options_en": ["But", "Very", "Blue", "Slow"],
    "answer_en": "But",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Angry' is:",
    "options_en": ["Happy", "Furious", "Calm", "Glad"],
    "answer_en": "Furious",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Antonym of 'Strong' is:",
    "options_en": ["Powerful", "Weak", "Healthy", "Hard"],
    "answer_en": "Weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sentence is interrogative?",
    "options_en": ["She is my friend", "Close the door", "How old are you?", "What a nice day!"],
    "answer_en": "How old are you?",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Choose the correct passive voice: They play cricket.",
    "options_en": ["Cricket is played by them", "Cricket was played by them", "Cricket plays them", "They are played cricket"],
    "answer_en": "Cricket is played by them",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Identify the subject: Ram is reading a book.",
    "options_en": ["Ram", "is", "reading", "book"],
    "answer_en": "Ram",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which word is an abstract noun?",
    "options_en": ["Chair", "Beauty", "Dog", "Car"],
    "answer_en": "Beauty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Succesful", "Successful", "Successfull", "Succeesful"],
    "answer_en": "Successful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Fill in the blank: He is interested ___ music.",
    "options_en": ["on", "at", "in", "with"],
    "answer_en": "in",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Plural of 'Ox' is:",
    "options_en": ["Oxes", "Oxen", "Oxs", "Oxens"],
    "answer_en": "Oxen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sentence is exclamatory?",
    "options_en": ["What a brave boy!", "He is brave", "Is he brave?", "Be brave"],
    "answer_en": "What a brave boy!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Choose the correct form: She ___ since morning.",
    "options_en": ["is working", "was working", "has been working", "worked"],
    "answer_en": "has been working",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which word is a determiner?",
    "options_en": ["Those", "Run", "Fast", "Quickly"],
    "answer_en": "Those",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "One who cannot speak is called:",
    "options_en": ["Blind", "Deaf", "Mute", "Lame"],
    "answer_en": "Mute",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He has done his work", "He have done his work", "He has did his work", "He done his work"],
    "answer_en": "He has done his work",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Opposite of 'Buy' is:",
    "options_en": ["Take", "Sell", "Give", "Pay"],
    "answer_en": "Sell",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which sentence shows future time?",
    "options_en": ["I eat rice", "I ate rice", "I will eat rice", "I am eating rice"],
    "answer_en": "I will eat rice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which word is a modal verb?",
    "options_en": ["Can", "Do", "Did", "Done"],
    "answer_en": "Can",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Choose the correct preposition: He is afraid ___ snakes.",
    "options_en": ["from", "of", "with", "by"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which word is a homonym?",
    "options_en": ["Bat", "Run", "Eat", "Jump"],
    "answer_en": "Bat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A person who drives a bus is called:",
    "options_en": ["Driver", "Conductor", "Pilot", "Captain"],
    "answer_en": "Driver",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct question tag: She sings well, ___?",
    "options_en": ["does she", "doesn't she", "is she", "isn't she"],
    "answer_en": "doesn't she",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a compound word?",
    "options_en": ["Blackboard", "Black", "Board", "Write"],
    "answer_en": "Blackboard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Synonym of 'Help' is:",
    "options_en": ["Assist", "Refuse", "Stop", "Delay"],
    "answer_en": "Assist",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She is taller than me", "She is taller to me", "She is taller from me", "She is taller of me"],
    "answer_en": "She is taller than me",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which word is a prefix?",
    "options_en": ["Un-", "Happiness", "Careful", "Slowly"],
    "answer_en": "Un-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Plural of 'Crisis' is:",
    "options_en": ["Crisises", "Crisis", "Crises", "Crisiss"],
    "answer_en": "Crises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct sentence:",
    "options_en": ["Each boy were happy", "Each boy was happy", "Each boys was happy", "Each boys were happy"],
    "answer_en": "Each boy was happy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is a formal greeting?",
    "options_en": ["Hey!", "Hi!", "Good evening", "Yo!"],
    "answer_en": "Good evening",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Wow!", "Run", "Slow", "Blue"],
    "answer_en": "Wow!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Opposite of 'Victory' is:",
    "options_en": ["Win", "Success", "Defeat", "Joy"],
    "answer_en": "Defeat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She prefers tea than coffee", "She prefers tea to coffee", "She prefer tea to coffee", "She preferring tea"],
    "answer_en": "She prefers tea to coffee",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "One who repairs shoes is called:",
    "options_en": ["Cobbler", "Tailor", "Barber", "Washerman"],
    "answer_en": "Cobbler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which sentence is imperative?",
    "options_en": ["Please sit down", "I am sitting", "He sat down", "Will you sit?"],
    "answer_en": "Please sit down",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Choose the correct word: He is ___ honest man.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "an",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Synonym of 'Small' is:",
    "options_en": ["Tiny", "Big", "Large", "Huge"],
    "answer_en": "Tiny",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a suffix?",
    "options_en": ["-ness", "Un-", "Care", "Slow"],
    "answer_en": "-ness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Choose the correct form: They ___ playing now.",
    "options_en": ["is", "was", "are", "has"],
    "answer_en": "are",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is a polite expression?",
    "options_en": ["Give me water", "Please give me water", "Water now", "I want water"],
    "answer_en": "Please give me water",
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

