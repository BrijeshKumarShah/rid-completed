const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में constant घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a variable in Swift?",
    "question_hi": "Swift में variable घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["var", "let", "mut", "define"],
    "options_hi": ["var", "let", "mut", "define"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is Optional in Swift?",
    "question_hi": "Swift में Optional क्या होता है?",
    "options_en": ["A variable that can hold nil", "A loop", "A class", "A protocol"],
    "options_hi": ["ऐसा variable जो nil रख सकता है", "एक loop", "एक class", "एक protocol"],
    "answer_en": "A variable that can hold nil",
    "answer_hi": "ऐसा variable जो nil रख सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which symbol is used to unwrap an Optional forcefully?",
    "question_hi": "Optional को forcefully unwrap करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used for nil coalescing in Swift?",
    "question_hi": "Swift में nil coalescing के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "?:", "!", "&&"],
    "options_hi": ["??", "?:", "!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which loop is guaranteed to execute at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार जरूर execute होता है?",
    "options_en": ["repeat-while", "while", "for-in", "loop"],
    "options_hi": ["repeat-while", "while", "for-in", "loop"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which data type stores true or false?",
    "question_hi": "कौन सा data type true या false store करता है?",
    "options_en": ["Bool", "Int", "String", "Float"],
    "options_hi": ["Bool", "Int", "String", "Float"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which collection stores unique values?",
    "question_hi": "कौन सा collection unique values store करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "कौन सा collection key-value pairs store करता है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "Function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to create a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "object", "type"],
    "options_hi": ["class", "struct", "object", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to create a structure?",
    "question_hi": "Structure बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "enum", "protocol"],
    "options_hi": ["struct", "class", "enum", "protocol"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does ARC stand for?",
    "question_hi": "ARC का full form क्या है?",
    "options_en": ["Automatic Reference Counting", "Advanced Resource Control", "Auto Runtime Compiler", "Active Reference Code"],
    "options_hi": ["Automatic Reference Counting", "Advanced Resource Control", "Auto Runtime Compiler", "Active Reference Code"],
    "answer_en": "Automatic Reference Counting",
    "answer_hi": "Automatic Reference Counting",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword prevents a class from being inherited?",
    "question_hi": "कौन सा keyword class को inherit होने से रोकता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which access level allows use within the same file?",
    "question_hi": "कौन सा access level same file तक सीमित होता है?",
    "options_en": ["fileprivate", "private", "public", "open"],
    "options_hi": ["fileprivate", "private", "public", "open"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "Inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "->"],
    "options_hi": [":", "extends", "inherits", "->"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which feature allows one method name with different implementations?",
    "question_hi": "एक ही method name के अलग-अलग implementations को क्या कहते हैं?",
    "options_en": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "options_hi": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "Protocol define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "abstract"],
    "options_hi": ["protocol", "interface", "delegate", "abstract"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which statement is used to handle errors?",
    "question_hi": "Errors handle करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["do-catch", "try-finally", "throw-catch", "error-handle"],
    "options_hi": ["do-catch", "try-finally", "throw-catch", "error-handle"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to throw an error?",
    "question_hi": "Error throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "error", "catch"],
    "options_hi": ["throw", "throws", "error", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword marks a function that can throw errors?",
    "question_hi": "कौन सा keyword function को error throw करने योग्य बनाता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift feature observes property value changes?",
    "question_hi": "कौन सा feature property value change को observe करता है?",
    "options_en": ["Property Observers", "Delegates", "Protocols", "Extensions"],
    "options_hi": ["Property Observers", "Delegates", "Protocols", "Extensions"],
    "answer_en": "Property Observers",
    "answer_hi": "Property Observers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which observer is called before value changes?",
    "question_hi": "Value change होने से पहले कौन सा observer call होता है?",
    "options_en": ["willSet", "didSet", "set", "get"],
    "options_hi": ["willSet", "didSet", "set", "get"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which observer is called after value changes?",
    "question_hi": "Value change होने के बाद कौन सा observer call होता है?",
    "options_en": ["didSet", "willSet", "update", "change"],
    "options_hi": ["didSet", "willSet", "update", "change"],
    "answer_en": "didSet",
    "answer_hi": "didSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword adds new functionality without subclassing?",
    "question_hi": "Subclass किए बिना functionality जोड़ने के लिए कौन सा keyword है?",
    "options_en": ["extension", "protocol", "override", "inherit"],
    "options_hi": ["extension", "protocol", "override", "inherit"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used to override a method?",
    "question_hi": "Method override करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["override", "overload", "replace", "extends"],
    "options_hi": ["override", "overload", "replace", "extends"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which type supports value semantics?",
    "question_hi": "कौन सा type value semantics को support करता है?",
    "options_en": ["Struct", "Class", "Protocol", "Delegate"],
    "options_hi": ["Struct", "Class", "Protocol", "Delegate"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which type supports reference semantics?",
    "question_hi": "कौन सा type reference semantics को support करता है?",
    "options_en": ["Class", "Struct", "Enum", "Tuple"],
    "options_hi": ["Class", "Struct", "Enum", "Tuple"],
    "answer_en": "Class",
    "answer_hi": "Class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used for asynchronous code?",
    "question_hi": "Asynchronous code के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "sync", "thread"],
    "options_hi": ["async", "await", "sync", "thread"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "Async result का इंतज़ार करने के लिए कौन सा keyword है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword makes a property lazy?",
    "question_hi": "Property को lazy बनाने के लिए कौन सा keyword है?",
    "options_en": ["lazy", "delay", "optional", "weak"],
    "options_hi": ["lazy", "delay", "optional", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword avoids strong reference cycles?",
    "question_hi": "Strong reference cycle से बचने के लिए कौन सा keyword है?",
    "options_en": ["weak", "lazy", "strong", "final"],
    "options_hi": ["weak", "lazy", "strong", "final"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword keeps reference but allows nil?",
    "question_hi": "Reference रखते हुए nil allow करने के लिए कौन सा keyword है?",
    "options_en": ["unowned", "weak", "lazy", "static"],
    "options_hi": ["unowned", "weak", "lazy", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift UI framework is used for declarative UI?",
    "question_hi": "Declarative UI के लिए कौन सा Swift framework उपयोग होता है?",
    "options_en": ["SwiftUI", "UIKit", "CoreData", "Foundation"],
    "options_hi": ["SwiftUI", "UIKit", "CoreData", "Foundation"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which property wrapper is used for state in SwiftUI?",
    "question_hi": "SwiftUI में state के लिए कौन सा property wrapper है?",
    "options_en": ["@State", "@Binding", "@ObservedObject", "@StateObject"],
    "options_hi": ["@State", "@Binding", "@ObservedObject", "@StateObject"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which property wrapper passes state between views?",
    "question_hi": "Views के बीच state pass करने के लिए कौन सा wrapper है?",
    "options_en": ["@Binding", "@State", "@Published", "@Environment"],
    "options_hi": ["@Binding", "@State", "@Published", "@Environment"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword is used to create an enum?",
    "question_hi": "Enum बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["enum", "case", "struct", "type"],
    "options_hi": ["enum", "case", "struct", "type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which enum can store associated values?",
    "question_hi": "Associated values कौन सा enum store कर सकता है?",
    "options_en": ["Swift Enum", "C Enum", "Raw Enum", "Static Enum"],
    "options_hi": ["Swift Enum", "C Enum", "Raw Enum", "Static Enum"],
    "answer_en": "Swift Enum",
    "answer_hi": "Swift Enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword is used for pattern matching?",
    "question_hi": "Pattern matching के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "match"],
    "options_hi": ["switch", "if", "guard", "match"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword exits early if condition fails?",
    "question_hi": "Condition fail होने पर जल्दी exit करने के लिए कौन सा keyword है?",
    "options_en": ["guard", "if", "break", "return"],
    "options_hi": ["guard", "if", "break", "return"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which framework provides base Swift types?",
    "question_hi": "Base Swift types कौन सा framework देता है?",
    "options_en": ["Foundation", "UIKit", "SwiftUI", "CoreML"],
    "options_hi": ["Foundation", "UIKit", "SwiftUI", "CoreML"],
    "answer_en": "Foundation",
    "answer_hi": "Foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword marks unavailable API?",
    "question_hi": "Unavailable API को mark करने के लिए कौन सा keyword है?",
    "options_en": ["@available", "@discardableResult", "@objc", "@escaping"],
    "options_hi": ["@available", "@discardableResult", "@objc", "@escaping"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which attribute allows closure to escape?",
    "question_hi": "Closure को escape करने की अनुमति कौन सा attribute देता है?",
    "options_en": ["@escaping", "@autoclosure", "@objc", "@available"],
    "options_hi": ["@escaping", "@autoclosure", "@objc", "@available"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword makes method static?",
    "question_hi": "Method को static बनाने के लिए कौन सा keyword है?",
    "options_en": ["static", "class", "final", "lazy"],
    "options_hi": ["static", "class", "final", "lazy"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword allows Objective-C interoperability?",
    "question_hi": "Objective-C interoperability के लिए कौन सा keyword है?",
    "options_en": ["@objc", "@swift", "@interop", "@bridge"],
    "options_hi": ["@objc", "@swift", "@interop", "@bridge"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Swift feature groups related code?",
    "question_hi": "Related code को group करने के लिए कौन सा feature है?",
    "options_en": ["Module", "Function", "Loop", "Variable"],
    "options_hi": ["Module", "Function", "Loop", "Variable"],
    "answer_en": "Module",
    "answer_hi": "Module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which operator compares identity of classes?",
    "question_hi": "Classes की identity compare करने के लिए कौन सा operator है?",
    "options_en": ["===", "==", "!=", "<>"],
    "options_hi": ["===", "==", "!=", "<>"],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword marks deprecated APIs?",
    "question_hi": "Deprecated APIs को mark करने के लिए कौन सा keyword है?",
    "options_en": ["@available", "@deprecated", "@old", "@remove"],
    "options_hi": ["@available", "@deprecated", "@old", "@remove"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift type represents absence of value?",
    "question_hi": "Value की absence को कौन सा Swift type दर्शाता है?",
    "options_en": ["Optional", "Void", "Nil", "Empty"],
    "options_hi": ["Optional", "Void", "Nil", "Empty"],
    "answer_en": "Optional",
    "answer_hi": "Optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword indicates no return value?",
    "question_hi": "No return value को कौन सा keyword दर्शाता है?",
    "options_en": ["Void", "Nil", "None", "Empty"],
    "options_hi": ["Void", "Nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
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