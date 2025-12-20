const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to define a constant in Swift?",
    "question_hi": "Swift में constant define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to define a variable in Swift?",
    "question_hi": "Swift में variable define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["var", "let", "mutable", "change"],
    "options_hi": ["var", "let", "mutable", "change"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is used to store true or false values in Swift?",
    "question_hi": "Swift में true या false value store करने के लिए कौन-सा data type उपयोग होता है?",
    "options_en": ["Bool", "Boolean", "Int", "String"],
    "options_hi": ["Bool", "Boolean", "Int", "String"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which symbol is used for optional binding in Swift?",
    "question_hi": "Swift में optional binding के लिए कौन-सा symbol उपयोग होता है?",
    "options_en": ["?", "!", "&", "*"],
    "options_hi": ["?", "!", "&", "*"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword unwraps an optional forcefully?",
    "question_hi": "Swift में optional को forcefully unwrap करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["!", "?", "unwrap", "force"],
    "options_hi": ["!", "?", "unwrap", "force"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which collection type stores ordered values in Swift?",
    "question_hi": "Swift में ordered values store करने के लिए कौन-सा collection type उपयोग होता है?",
    "options_en": ["Array", "Dictionary", "Set", "Tuple"],
    "options_hi": ["Array", "Dictionary", "Set", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection does not allow duplicate values?",
    "question_hi": "Swift में कौन-सा collection duplicate values allow नहीं करता?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a function in Swift?",
    "question_hi": "Swift में function define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used for inheritance in Swift?",
    "question_hi": "Swift में inheritance के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "super"],
    "options_hi": [":", "extends", "inherits", "super"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to create a class in Swift?",
    "question_hi": "Swift में class बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "object", "type"],
    "options_hi": ["class", "struct", "object", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to create a structure in Swift?",
    "question_hi": "Swift में structure बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "object", "enum"],
    "options_hi": ["struct", "class", "object", "enum"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword defines an enumeration in Swift?",
    "question_hi": "Swift में enumeration define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["enum", "struct", "class", "switch"],
    "options_hi": ["enum", "struct", "class", "switch"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which statement is used for decision making in Swift?",
    "question_hi": "Swift में decision making के लिए कौन-सा statement उपयोग होता है?",
    "options_en": ["if", "for", "while", "loop"],
    "options_hi": ["if", "for", "while", "loop"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which loop is used to iterate over a range in Swift?",
    "question_hi": "Swift में range पर iterate करने के लिए कौन-सा loop उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat-while", "loop"],
    "options_hi": ["for-in", "while", "repeat-while", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used to exit a loop in Swift?",
    "question_hi": "Swift में loop से बाहर निकलने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["break", "exit", "stop", "return"],
    "options_hi": ["break", "exit", "stop", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword skips the current iteration in Swift?",
    "question_hi": "Swift में current iteration skip करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["continue", "break", "skip", "pass"],
    "options_hi": ["continue", "break", "skip", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which access level allows use within the same file only?",
    "question_hi": "Swift में कौन-सा access level केवल उसी file में use करने देता है?",
    "options_en": ["private", "public", "open", "internal"],
    "options_hi": ["private", "public", "open", "internal"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which access level is default in Swift?",
    "question_hi": "Swift में default access level कौन-सा होता है?",
    "options_en": ["internal", "private", "public", "open"],
    "options_hi": ["internal", "private", "public", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to handle errors in Swift?",
    "question_hi": "Swift में errors handle करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["do-catch", "try-fail", "error", "handle"],
    "options_hi": ["do-catch", "try-fail", "error", "handle"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to throw an error in Swift?",
    "question_hi": "Swift में error throw करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "error", "fail"],
    "options_hi": ["throw", "throws", "error", "fail"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword marks a function that can throw an error?",
    "question_hi": "Swift में error throw करने वाली function को mark करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["throws", "throw", "error", "fail"],
    "options_hi": ["throws", "throw", "error", "fail"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword is used to safely unwrap an optional?",
    "question_hi": "Swift में optional को safely unwrap करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["if let", "unwrap", "!", "guard"],
    "options_hi": ["if let", "unwrap", "!", "guard"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword exits the current scope early in Swift?",
    "question_hi": "Swift में current scope से जल्दी बाहर निकलने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["guard", "if", "break", "exit"],
    "options_hi": ["guard", "if", "break", "exit"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to define a protocol in Swift?",
    "question_hi": "Swift में protocol define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "trait", "delegate"],
    "options_hi": ["protocol", "interface", "trait", "delegate"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword is used to conform to a protocol?",
    "question_hi": "Swift में protocol conform करने के लिए कौन-सा symbol उपयोग होता है?",
    "options_en": [":", "implements", "uses", "extends"],
    "options_hi": [":", "implements", "uses", "extends"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used for type inference in Swift?",
    "question_hi": "Swift में type inference किस feature से होता है?",
    "options_en": ["Automatic", "Compiler", "Inference", "Implicit"],
    "options_hi": ["Automatic", "Compiler", "Inference", "Implicit"],
    "answer_en": "Compiler",
    "answer_hi": "Compiler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which operator is used for nil coalescing?",
    "question_hi": "Swift में nil coalescing के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["??", "?", "!", "&&"],
    "options_hi": ["??", "?", "!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword creates a computed property?",
    "question_hi": "Swift में computed property बनाने के लिए कौन-सा feature उपयोग होता है?",
    "options_en": ["get/set", "var", "let", "compute"],
    "options_hi": ["get/set", "var", "let", "compute"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used to create extensions in Swift?",
    "question_hi": "Swift में extension बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["extension", "extend", "add", "attach"],
    "options_hi": ["extension", "extend", "add", "attach"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword is used to create a closure?",
    "question_hi": "Swift में closure बनाने के लिए कौन-सा symbol उपयोग होता है?",
    "options_en": ["{}", "()", "[]", "<>"],
    "options_hi": ["{}", "()", "[]", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which attribute allows Objective-C interoperability?",
    "question_hi": "Swift में Objective-C interoperability के लिए कौन-सा attribute उपयोग होता है?",
    "options_en": ["@objc", "@swift", "@interop", "@native"],
    "options_hi": ["@objc", "@swift", "@interop", "@native"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used for concurrency in Swift?",
    "question_hi": "Swift में concurrency के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "thread", "queue"],
    "options_hi": ["async", "await", "thread", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword waits for an async task to finish?",
    "question_hi": "Swift में async task पूरा होने का इंतज़ार करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["await", "wait", "hold", "sync"],
    "options_hi": ["await", "wait", "hold", "sync"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which framework is used for UI in Swift?",
    "question_hi": "Swift में UI बनाने के लिए कौन-सा framework उपयोग होता है?",
    "options_en": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "options_hi": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which modern UI framework is declarative in Swift?",
    "question_hi": "Swift में कौन-सा modern declarative UI framework है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword makes a property observable in SwiftUI?",
    "question_hi": "SwiftUI में property को observable बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["@State", "@Let", "@Var", "@Bind"],
    "options_hi": ["@State", "@Let", "@Var", "@Bind"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword shares data between views in SwiftUI?",
    "question_hi": "SwiftUI में views के बीच data share करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["@Binding", "@State", "@Data", "@Link"],
    "options_hi": ["@Binding", "@State", "@Data", "@Link"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword is used to observe external data?",
    "question_hi": "SwiftUI में external data observe करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["@ObservedObject", "@State", "@Binding", "@Fetch"],
    "options_hi": ["@ObservedObject", "@State", "@Binding", "@Fetch"],
    "answer_en": "@ObservedObject",
    "answer_hi": "@ObservedObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword provides global app state?",
    "question_hi": "SwiftUI में global app state देने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["@EnvironmentObject", "@ObservedObject", "@State", "@Global"],
    "options_hi": ["@EnvironmentObject", "@ObservedObject", "@State", "@Global"],
    "answer_en": "@EnvironmentObject",
    "answer_hi": "@EnvironmentObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword is used to import frameworks?",
    "question_hi": "Swift में framework import करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["import", "include", "use", "require"],
    "options_hi": ["import", "include", "use", "require"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which type represents absence of value?",
    "question_hi": "Swift में value की absence को कौन-सा type represent करता है?",
    "options_en": ["Optional", "NilType", "Void", "Empty"],
    "options_hi": ["Optional", "NilType", "Void", "Empty"],
    "answer_en": "Optional",
    "answer_hi": "Optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword returns no value?",
    "question_hi": "Swift में कौन-सा type कोई value return नहीं करता?",
    "options_en": ["Void", "Nil", "Empty", "None"],
    "options_hi": ["Void", "Nil", "Empty", "None"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator compares two values?",
    "question_hi": "Swift में दो values compare करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["==", "=", "!=", ":="],
    "options_hi": ["==", "=", "!=", ":="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator assigns a value?",
    "question_hi": "Swift में value assign करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["=", "==", "=>", "<-"],
    "options_hi": ["=", "==", "=>", "<-"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword is used for comments in Swift?",
    "question_hi": "Swift में single line comment के लिए कौन-सा symbol उपयोग होता है?",
    "options_en": ["//", "/*", "#", "--"],
    "options_hi": ["//", "/*", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which comment supports multi-line comments?",
    "question_hi": "Swift में multi-line comment के लिए कौन-सा syntax उपयोग होता है?",
    "options_en": ["/* */", "//", "#", "--"],
    "options_hi": ["/* */", "//", "#", "--"],
    "answer_en": "/* */",
    "answer_hi": "/* */",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword marks a method that can be overridden?",
    "question_hi": "Swift में method को override करने योग्य बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["override", "open", "public", "virtual"],
    "options_hi": ["override", "open", "public", "virtual"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword prevents inheritance?",
    "question_hi": "Swift में inheritance रोकने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword creates a singleton instance?",
    "question_hi": "Swift में singleton instance बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["static", "shared", "single", "global"],
    "options_hi": ["static", "shared", "single", "global"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which tool is used to manage Swift packages?",
    "question_hi": "Swift packages manage करने के लिए कौन-सा tool उपयोग होता है?",
    "options_en": ["Swift Package Manager", "CocoaPods", "Carthage", "NPM"],
    "options_hi": ["Swift Package Manager", "CocoaPods", "Carthage", "NPM"],
    "answer_en": "Swift Package Manager",
    "answer_hi": "Swift Package Manager",
    "attempted": false,
    "selected": ""
  }
]

// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};