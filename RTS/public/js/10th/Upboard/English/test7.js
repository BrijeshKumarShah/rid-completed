const questions = [
  {
    "num": 1,
    "question_en": "Choose the correct synonym of 'Silent'.",
    "options_en": ["Noisy", "Quiet", "Loud", "Angry"],
    "answer_en": "Quiet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Antonym of 'Generous' is:",
    "options_en": ["Kind", "Selfish", "Helpful", "Brave"],
    "answer_en": "Selfish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Choose the correct article: He bought ___ apple.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "an",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which word is a verb?",
    "options_en": ["Run", "Runner", "Running", "Runned"],
    "answer_en": "Run",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Plural of 'Leaf' is:",
    "options_en": ["Leafs", "Leaves", "Leafes", "Leaf"],
    "answer_en": "Leaves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Choose the correct preposition: She is interested ___ music.",
    "options_en": ["in", "on", "at", "for"],
    "answer_en": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tense is used in: They have completed their work?",
    "options_en": ["Present Perfect", "Past Perfect", "Simple Present", "Future Perfect"],
    "answer_en": "Present Perfect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Identify the adjective: He is a tall boy.",
    "options_en": ["He", "Tall", "Boy", "Is"],
    "answer_en": "Tall",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which word is a pronoun?",
    "options_en": ["John", "He", "Runs", "School"],
    "answer_en": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Difficult' is:",
    "options_en": ["Easy", "Hard", "Tough", "Complicated"],
    "answer_en": "Easy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Choose the correct form: I ___ reading a book.",
    "options_en": ["am", "is", "are", "was"],
    "answer_en": "am",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is an uncountable noun?",
    "options_en": ["Sugar", "Apple", "Chair", "Book"],
    "answer_en": "Sugar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Beautiful' is:",
    "options_en": ["Ugly", "Pretty", "Bad", "Dark"],
    "answer_en": "Pretty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He go to school","He goes to school","He going to school","He gone to school"],
    "answer_en": "He goes to school",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which word is an adverb?",
    "options_en": ["Quick", "Quickly", "Quicken", "Quickness"],
    "answer_en": "Quickly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Fill in the blank: She is afraid ___ spiders.",
    "options_en": ["of", "for", "by", "with"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is a proper noun?",
    "options_en": ["City","River","Delhi","Country"],
    "answer_en": "Delhi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Choose the correct passive voice: He paints the walls.",
    "options_en": ["The walls are painted by him","The walls is painted by him","The walls painted by him","The walls has painted by him"],
    "answer_en": "The walls are painted by him",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Plural of 'Woman' is:",
    "options_en": ["Womans","Women","Womens","Woman"],
    "answer_en": "Women",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which sentence is interrogative?",
    "options_en": ["Sit down.","What is your name?","How beautiful!","Close the door."],
    "answer_en": "What is your name?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Enviroment","Environment","Environmant","Environmnent"],
    "answer_en": "Environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Opposite of 'Victory' is:",
    "options_en": ["Win","Success","Defeat","Joy"],
    "answer_en": "Defeat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which sentence is imperative?",
    "options_en": ["Please help me","He helps me","Did he help?","How kind!"],
    "answer_en": "Please help me",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Plural of 'Mouse' is:",
    "options_en": ["Mouses","Mice","Mouse","Mices"],
    "answer_en": "Mice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which word is an adverb?",
    "options_en": ["Fast","Faster","Fastly","Fastness"],
    "answer_en": "Fastly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Choose the correct preposition: He is married ___ her.",
    "options_en": ["with","to","by","on"],
    "answer_en": "to",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which word is an interjection?",
    "options_en": ["Alas!","Walk","Blue","Cold"],
    "answer_en": "Alas!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Synonym of 'Angry' is:",
    "options_en": ["Happy","Furious","Calm","Kind"],
    "answer_en": "Furious",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Choose the correct form: He ___ a letter yesterday.",
    "options_en": ["write","wrote","written","writing"],
    "answer_en": "wrote",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which word is a collective noun?",
    "options_en": ["Flock","Bird","Tree","House"],
    "answer_en": "Flock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Fill in the blank: She is good ___ English.",
    "options_en": ["at","in","on","with"],
    "answer_en": "at",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which word is a modal verb?",
    "options_en": ["Can","Did","Went","Has"],
    "answer_en": "Can",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She don't like tea","She does not like tea","She did not likes tea","She not like tea"],
    "answer_en": "She does not like tea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Synonym of 'Begin' is:",
    "options_en": ["End","Start","Stop","Close"],
    "answer_en": "Start",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is an abstract noun?",
    "options_en": ["Chair","Honesty","Book","Pen"],
    "answer_en": "Honesty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Plural of 'Child' is:",
    "options_en": ["Childs","Children","Childes","Child"],
    "answer_en": "Children",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Choose the correct preposition: He is proud ___ his son.",
    "options_en": ["of","for","with","by"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which sentence is exclamatory?",
    "options_en": ["How beautiful the sky is!","The sky is beautiful","Is the sky beautiful?","Look at the sky"],
    "answer_en": "How beautiful the sky is!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct passive voice: They are painting the house.",
    "options_en": ["The house is being painted by them","The house was painted by them","The house has painted by them","The house paints by them"],
    "answer_en": "The house is being painted by them",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "One who teaches students is called:",
    "options_en": ["Doctor","Teacher","Driver","Farmer"],
    "answer_en": "Teacher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Oh!","Walk","Blue","Cold"],
    "answer_en": "Oh!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Antonym of 'Easy' is:",
    "options_en": ["Hard","Simple","Light","Quick"],
    "answer_en": "Hard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is interested on music","He is interested in music","He is interested with music","He interested in music"],
    "answer_en": "He is interested in music",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Choose the correct article: ___ university is far from here.",
    "options_en": ["A","An","The","No article"],
    "answer_en": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Plural of 'Leaf' is:",
    "options_en": ["Leafs","Leaves","Leafes","Leaf"],
    "answer_en": "Leaves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which word is a suffix?",
    "options_en": ["-ment","Un-","Re-","Pre-"],
    "answer_en": "-ment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Choose the correct verb: Either of the boys ___ guilty.",
    "options_en": ["is","are","were","have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a relative pronoun?",
    "options_en": ["Who","He","They","This"],
    "answer_en": "Who",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "One who repairs electrical fittings is called:",
    "options_en": ["Plumber","Electrician","Carpenter","Painter"],
    "answer_en": "Electrician",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Choose the correct question tag: He will come, ___?",
    "options_en": ["won't he","will he","doesn't he","isn't he"],
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

