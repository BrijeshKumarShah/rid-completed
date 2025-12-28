const questions = [
  {
    "num": 1,
    "question_en": "Which word is an abstract noun?",
    "options_en": ["Love", "Table", "Book", "Pen"],
    "answer_en": "Love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Choose the correct article: He found ___ one-rupee coin.",
    "options_en": ["a", "an", "the", "no article"],
    "answer_en": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sentence is imperative?",
    "options_en": ["You are late", "Please sit down", "Is he ready?", "What a scene!"],
    "answer_en": "Please sit down",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Plural of 'Goose' is:",
    "options_en": ["Gooses", "Goose", "Geese", "Geeses"],
    "answer_en": "Geese",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which word is an adjective?",
    "options_en": ["Honesty", "Honest", "Honestly", "Honour"],
    "answer_en": "Honest",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Fill in the blank: The teacher is angry ___ him.",
    "options_en": ["on", "with", "at", "by"],
    "answer_en": "with",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tense is used in: She had finished her work?",
    "options_en": ["Past Perfect", "Present Perfect", "Past Continuous", "Future Perfect"],
    "answer_en": "Past Perfect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Choose the correct verb: Either of the boys ___ guilty.",
    "options_en": ["are", "were", "is", "have"],
    "answer_en": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is a modal verb?",
    "options_en": ["Shall", "Did", "Was", "Has"],
    "answer_en": "Shall",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Opposite of 'Arrival' is:",
    "options_en": ["Coming", "Entry", "Departure", "Visit"],
    "answer_en": "Departure",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Choose the correct preposition: He is proud ___ his son.",
    "options_en": ["of", "for", "with", "by"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which word is a possessive pronoun?",
    "options_en": ["Mine", "Me", "My", "I"],
    "answer_en": "Mine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Synonym of 'Silent' is:",
    "options_en": ["Loud", "Noisy", "Quiet", "Angry"],
    "answer_en": "Quiet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Antonym of 'Possible' is:",
    "options_en": ["Sure", "Easy", "Impossible", "Certain"],
    "answer_en": "Impossible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sentence is exclamatory?",
    "options_en": ["How beautiful the sky is!", "The sky is beautiful", "Is the sky beautiful?", "Look at the sky"],
    "answer_en": "How beautiful the sky is!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Choose the correct passive voice: They are painting the house.",
    "options_en": ["The house is painted by them", "The house was painted by them", "The house is being painted by them", "The house has painted them"],
    "answer_en": "The house is being painted by them",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Identify the object: She bought a new dress.",
    "options_en": ["She", "bought", "new", "dress"],
    "answer_en": "dress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which word is a collective noun?",
    "options_en": ["Army", "Soldier", "Gun", "Uniform"],
    "answer_en": "Army",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Choose the correct spelling:",
    "options_en": ["Succesful", "Successful", "Succesfull", "Successfull"],
    "answer_en": "Successful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Fill in the blank: He is good ___ English.",
    "options_en": ["at", "in", "on", "with"],
    "answer_en": "at",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Plural of 'Sheep' is:",
    "options_en": ["Sheeps", "Sheep", "Sheepen", "Sheepes"],
    "answer_en": "Sheep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sentence shows permission?",
    "options_en": ["You may go now", "Go now", "You went now", "Are you going?"],
    "answer_en": "You may go now",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Choose the correct form: She ___ a letter yesterday.",
    "options_en": ["writes", "has written", "wrote", "writing"],
    "answer_en": "wrote",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which word is a relative pronoun?",
    "options_en": ["Who", "He", "They", "This"],
    "answer_en": "Who",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "One who looks after sick people is called:",
    "options_en": ["Doctor", "Nurse", "Teacher", "Driver"],
    "answer_en": "Nurse",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is afraid from dogs", "He is afraid of dogs", "He afraid of dogs", "He afraid from dogs"],
    "answer_en": "He is afraid of dogs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Opposite of 'Remember' is:",
    "options_en": ["Recall", "Forget", "Learn", "Know"],
    "answer_en": "Forget",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which tense is used in: I am going to Delhi?",
    "options_en": ["Present Continuous", "Simple Present", "Future Perfect", "Past Continuous"],
    "answer_en": "Present Continuous",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which word is a past participle?",
    "options_en": ["Write", "Wrote", "Written", "Writing"],
    "answer_en": "Written",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Choose the correct preposition: He died ___ a fever.",
    "options_en": ["of", "from", "by", "with"],
    "answer_en": "of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which word means 'Very hungry'?",
    "options_en": ["Full", "Starving", "Satisfied", "Fresh"],
    "answer_en": "Starving",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A person who sells medicines is called:",
    "options_en": ["Doctor", "Chemist", "Nurse", "Guard"],
    "answer_en": "Chemist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Choose the correct question tag: He will come, ___?",
    "options_en": ["won't he", "will he", "doesn't he", "isn't he"],
    "answer_en": "won't he",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a complex sentence?",
    "options_en": ["He ran fast", "He ran and fell", "When he ran, he fell", "Run fast"],
    "answer_en": "When he ran, he fell",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Synonym of 'Buy' is:",
    "options_en": ["Sell", "Purchase", "Lend", "Borrow"],
    "answer_en": "Purchase",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Choose the correct sentence:",
    "options_en": ["She is junior than me", "She is junior to me", "She is junior of me", "She is junior from me"],
    "answer_en": "She is junior to me",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which word is a suffix?",
    "options_en": ["-ment", "Un-", "Pre-", "Re-"],
    "answer_en": "-ment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Plural of 'Phenomenon' is:",
    "options_en": ["Phenomenons", "Phenomena", "Phenomenaes", "Phenomenon"],
    "answer_en": "Phenomena",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Choose the correct sentence:",
    "options_en": ["The number of students are increasing", "The number of students is increasing", "A number of student is increasing", "Number of students are increasing"],
    "answer_en": "The number of students is increasing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is a polite suggestion?",
    "options_en": ["You must go", "You should try again", "Go now", "Do it"],
    "answer_en": "You should try again",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which word is an interjection?",
    "options_en": ["Oh!", "Walk", "Blue", "Cold"],
    "answer_en": "Oh!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Opposite of 'Ancient' is:",
    "options_en": ["Old", "Modern", "Past", "Historic"],
    "answer_en": "Modern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Choose the correct sentence:",
    "options_en": ["He is interested on music", "He is interested in music", "He is interested with music", "He interested in music"],
    "answer_en": "He is interested in music",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "One who repairs electrical fittings is called:",
    "options_en": ["Plumber", "Electrician", "Carpenter", "Painter"],
    "answer_en": "Electrician",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which sentence expresses prayer?",
    "options_en": ["May you live long", "You live long", "Live long", "Do you live long?"],
    "answer_en": "May you live long",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Choose the correct article: ___ university is far from here.",
    "options_en": ["A", "An", "The", "No article"],
    "answer_en": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Synonym of 'Fear' is:",
    "options_en": ["Courage", "Terror", "Hope", "Peace"],
    "answer_en": "Terror",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which word is a conjunction?",
    "options_en": ["Because", "Very", "Fast", "Tall"],
    "answer_en": "Because",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Choose the correct form: The police ___ arrived.",
    "options_en": ["has", "have", "is", "was"],
    "answer_en": "have",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which sentence is grammatically correct?",
    "options_en": ["She did not knew him", "She did not know him", "She does not knew him", "She not know him"],
    "answer_en": "She did not know him",
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

