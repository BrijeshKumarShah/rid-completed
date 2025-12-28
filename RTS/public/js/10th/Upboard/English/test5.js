const questions = [
  {
    "num": 1,
    "question_en": "Which word is a verb?",
    "options_en": ["Teacher", "Beautiful", "Run", "Happiness"],
    "answer_en": "Run",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Choose the correct article: She is ___ MBA student.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "an",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sentence is declarative?",
    "options_en": ["What a day!", "Close the door", "She is my friend", "Is she your friend?"],
    "answer_en": "She is my friend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Plural of 'Mouse' is:",
    "options_en": ["Mouses", "Mouse", "Mice", "Mices"],
    "answer_en": "Mice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which word is an adverb of manner?",
    "options_en": ["Slow", "Slowness", "Slowly", "Slower"],
    "answer_en": "Slowly",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Fill in the blank: The train arrived ___ the station late.",
    "options_en": ["in", "on", "at", "by"],
    "answer_en": "at",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tense is used in: They have completed the work?",
    "options_en": ["Simple Present", "Present Perfect", "Past Perfect", "Future Perfect"],
    "answer_en": "Present Perfect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Choose the correct verb: Neither of the answers ___ correct.",
    "options_en": ["are", "were", "is", "have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is a modal auxiliary?",
    "options_en": ["Did", "Must", "Has", "Was"],
    "answer_en": "Must",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Victory' is:",
    "options_en": ["Success", "Prize", "Defeat", "Reward"],
    "answer_en": "Defeat",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Choose the correct preposition: He is suffering ___ fever.",
    "options_en": ["from", "with", "by", "of"],
    "answer_en": "from",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which word is a reflexive pronoun?",
    "options_en": ["Him", "Himself", "His", "He"],
    "answer_en": "Himself",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Brave' is:",
    "options_en": ["Coward", "Timid", "Bold", "Weak"],
    "answer_en": "Bold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Antonym of 'Increase' is:",
    "options_en": ["Grow", "Rise", "Decrease", "Improve"],
    "answer_en": "Decrease",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sentence expresses order?",
    "options_en": ["Please help me", "Can you help me?", "Do your homework", "What a help!"],
    "answer_en": "Do your homework",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Choose the correct passive voice: She is cooking food.",
    "options_en": ["Food is cooked by her", "Food was cooked by her", "Food is being cooked by her", "Food has cooked her"],
    "answer_en": "Food is being cooked by her",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Identify the predicate: The boys are playing.",
    "options_en": ["The boys", "boys", "are", "are playing"],
    "answer_en": "are playing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which word is a material noun?",
    "options_en": ["Gold", "Chair", "Boy", "Crowd"],
    "answer_en": "Gold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Occassion", "Occasion", "Ocassion", "Occesion"],
    "answer_en": "Occasion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Fill in the blank: She is married ___ a doctor.",
    "options_en": ["with", "to", "by", "of"],
    "answer_en": "to",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Plural of 'Deer' is:",
    "options_en": ["Deers", "Deeres", "Deer", "Deeren"],
    "answer_en": "Deer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sentence shows advice?",
    "options_en": ["You must go", "You should exercise daily", "Go there", "Are you fine?"],
    "answer_en": "You should exercise daily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Choose the correct form: He ___ since morning.",
    "options_en": ["slept", "is sleeping", "has been sleeping", "was sleeping"],
    "answer_en": "has been sleeping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which word is a demonstrative pronoun?",
    "options_en": ["He", "They", "This", "Who"],
    "answer_en": "This",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "One who drives a vehicle is called:",
    "options_en": ["Conductor", "Passenger", "Driver", "Guard"],
    "answer_en": "Driver",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Choose the correct sentence:",
    "options_en": ["I prefer tea than coffee", "I prefer tea to coffee", "I prefer tea over coffee than", "I prefer tea from coffee"],
    "answer_en": "I prefer tea to coffee",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Opposite of 'Accept' is:",
    "options_en": ["Receive", "Admit", "Reject", "Allow"],
    "answer_en": "Reject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which tense is used in: She will have arrived?",
    "options_en": ["Future Simple", "Future Continuous", "Future Perfect", "Present Perfect"],
    "answer_en": "Future Perfect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which word is an infinitive?",
    "options_en": ["Running", "Ran", "To run", "Runs"],
    "answer_en": "To run",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Choose the correct preposition: He is famous ___ his honesty.",
    "options_en": ["for", "of", "with", "by"],
    "answer_en": "for",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which word means 'Able to read and write'?",
    "options_en": ["Illiterate", "Educated", "Literate", "Skilled"],
    "answer_en": "Literate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A person who flies an aeroplane is called:",
    "options_en": ["Sailor", "Driver", "Pilot", "Guard"],
    "answer_en": "Pilot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct question tag: You finished it, ___?",
    "options_en": ["didn't you", "did you", "haven't you", "aren't you"],
    "answer_en": "didn't you",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a compound sentence?",
    "options_en": ["He ran fast", "He ran fast and won the race", "Running fast, he won", "To win the race"],
    "answer_en": "He ran fast and won the race",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Synonym of 'Allow' is:",
    "options_en": ["Permit", "Stop", "Refuse", "Deny"],
    "answer_en": "Permit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She is senior than me", "She is senior to me", "She is senior of me", "She is senior from me"],
    "answer_en": "She is senior to me",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which word is a suffix?",
    "options_en": ["-less", "Pre-", "Re-", "Un-"],
    "answer_en": "-less",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Plural of 'Analysis' is:",
    "options_en": ["Analysises", "Analysis", "Analyses", "Analysed"],
    "answer_en": "Analyses",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct sentence:",
    "options_en": ["A number of students is absent", "A number of students are absent", "The number of students are absent", "Number of students is absent"],
    "answer_en": "A number of students are absent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is a polite request?",
    "options_en": ["Give me water", "Water do", "Please give me water", "You give water"],
    "answer_en": "Please give me water",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Wow!", "Write", "Soft", "Tall"],
    "answer_en": "Wow!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Opposite of 'Visible' is:",
    "options_en": ["Clear", "Bright", "Invisible", "Open"],
    "answer_en": "Invisible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is married with her", "He married to her", "He is married to her", "He married with her"],
    "answer_en": "He is married to her",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "One who makes shoes is called:",
    "options_en": ["Cobbler", "Tailor", "Barber", "Carpenter"],
    "answer_en": "Cobbler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which sentence shows wish?",
    "options_en": ["May God bless you", "God blesses you", "Bless him", "Are you blessed?"],
    "answer_en": "May God bless you",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Choose the correct article: ___ honest person is respected.",
    "options_en": ["A", "An", "The", "No article"],
    "answer_en": "An",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Synonym of 'Danger' is:",
    "options_en": ["Safety", "Risk", "Peace", "Comfort"],
    "answer_en": "Risk",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a conjunction?",
    "options_en": ["Although", "Very", "Tall", "Fast"],
    "answer_en": "Although",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Choose the correct form: Mathematics ___ my favourite subject.",
    "options_en": ["are", "were", "is", "have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which sentence is correct?",
    "options_en": ["He is fond for music", "He is fond of music", "He is fond with music", "He is fond in music"],
    "answer_en": "He is fond of music",
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

