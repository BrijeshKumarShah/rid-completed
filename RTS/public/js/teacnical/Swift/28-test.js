const questions= [
  {
    "num": 1,
    "question_en": "What keyword is used to define a constant in Swift?",
    "question_hi": "Swift में constant को define करने के लिए कौन सा keyword उपयोग होता है?",
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
    "question_hi": "Swift में variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["var", "let", "define", "mut"],
    "options_hi": ["var", "let", "define", "mut"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is used for whole numbers in Swift?",
    "question_hi": "Swift में whole numbers के लिए कौन सा data type उपयोग होता है?",
    "options_en": ["Int", "Float", "Double", "Bool"],
    "options_hi": ["Int", "Float", "Double", "Bool"],
    "answer_en": "Int",
    "answer_hi": "Int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which symbol is used for optional binding?",
    "question_hi": "Optional binding के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["?", "!", "*", "&"],
    "options_hi": ["?", "!", "*", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does '!' represent in Swift?",
    "question_hi": "Swift में '!' क्या दर्शाता है?",
    "options_en": ["Force unwrap", "Optional", "Comment", "Nil"],
    "options_hi": ["Force unwrap", "Optional", "Comment", "Nil"],
    "answer_en": "Force unwrap",
    "answer_hi": "Force unwrap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to define a function in Swift?",
    "question_hi": "Swift में function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection stores unique values in Swift?",
    "question_hi": "Swift में कौन सा collection unique values store करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "Key-value pairs को store करने वाला collection कौन सा है?",
    "options_en": ["Dictionary", "Array", "Set", "List"],
    "options_hi": ["Dictionary", "Array", "Set", "List"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which loop is used to iterate over a range?",
    "question_hi": "Range पर iterate करने के लिए कौन सा loop उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat-while", "loop"],
    "options_hi": ["for-in", "while", "repeat-while", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used for inheritance in Swift?",
    "question_hi": "Swift में inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "super"],
    "options_hi": [":", "extends", "inherits", "super"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which access level allows use within the same file?",
    "question_hi": "कौन सा access level सिर्फ same file में access देता है?",
    "options_en": ["fileprivate", "private", "public", "open"],
    "options_hi": ["fileprivate", "private", "public", "open"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "Class define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "object", "type"],
    "options_hi": ["class", "struct", "object", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to define a structure?",
    "question_hi": "Structure define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "enum", "object"],
    "options_hi": ["struct", "class", "enum", "object"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword defines an enumeration?",
    "question_hi": "Enumeration define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["enum", "case", "switch", "type"],
    "options_hi": ["enum", "case", "switch", "type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which statement handles multiple conditions?",
    "question_hi": "Multiple conditions handle करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword is used for safe early exit?",
    "question_hi": "Safe early exit के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["guard", "return", "break", "continue"],
    "options_hi": ["guard", "return", "break", "continue"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which protocol is required for sorting?",
    "question_hi": "Sorting के लिए कौन सा protocol जरूरी है?",
    "options_en": ["Comparable", "Codable", "Equatable", "Hashable"],
    "options_hi": ["Comparable", "Codable", "Equatable", "Hashable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which protocol allows object encoding and decoding?",
    "question_hi": "Object encoding-decoding के लिए कौन सा protocol उपयोग होता है?",
    "options_en": ["Codable", "Equatable", "Hashable", "Comparable"],
    "options_hi": ["Codable", "Equatable", "Hashable", "Comparable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to override a method?",
    "question_hi": "Method override करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["override", "super", "extend", "mutating"],
    "options_hi": ["override", "super", "extend", "mutating"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword makes a method change struct properties?",
    "question_hi": "Struct की properties बदलने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["mutating", "static", "override", "final"],
    "options_hi": ["mutating", "static", "override", "final"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword prevents inheritance?",
    "question_hi": "Inheritance रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which operator combines optionals safely?",
    "question_hi": "Optionals को safely combine करने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "&&", "||", "?:"] ,
    "options_hi": ["??", "&&", "||", "?:"] ,
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used for extensions?",
    "question_hi": "Extension बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extension", "extends", "expand", "add"],
    "options_hi": ["extension", "extends", "expand", "add"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword creates a computed property?",
    "question_hi": "Computed property बनाने के लिए कौन सा उपयोग होता है?",
    "options_en": ["get/set", "var", "let", "lazy"],
    "options_hi": ["get/set", "var", "let", "lazy"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword delays initialization?",
    "question_hi": "Initialization को delay करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["lazy", "static", "final", "weak"],
    "options_hi": ["lazy", "static", "final", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which reference prevents strong reference cycles?",
    "question_hi": "Strong reference cycle रोकने के लिए कौन सा reference उपयोग होता है?",
    "options_en": ["weak", "strong", "lazy", "static"],
    "options_hi": ["weak", "strong", "lazy", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword is used for concurrency tasks?",
    "question_hi": "Concurrency tasks के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "thread", "queue"],
    "options_hi": ["async", "await", "thread", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "Async result का wait करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which framework is used for UI in iOS?",
    "question_hi": "iOS में UI बनाने के लिए कौन सा framework उपयोग होता है?",
    "options_en": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "options_hi": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which UI framework is declarative?",
    "question_hi": "Declarative UI framework कौन सा है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which property wrapper observes changes?",
    "question_hi": "Changes observe करने वाला property wrapper कौन सा है?",
    "options_en": ["@State", "@Binding", "@Published", "@ObservedObject"],
    "options_hi": ["@State", "@Binding", "@Published", "@ObservedObject"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword handles errors?",
    "question_hi": "Errors handle करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["do-catch", "try", "throw", "handle"],
    "options_hi": ["do-catch", "try", "throw", "handle"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword throws an error?",
    "question_hi": "Error throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "try", "catch"],
    "options_hi": ["throw", "throws", "try", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword marks a throwing function?",
    "question_hi": "Throwing function को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword ignores errors?",
    "question_hi": "Errors ignore करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["try?", "try!", "catch", "ignore"],
    "options_hi": ["try?", "try!", "catch", "ignore"],
    "answer_en": "try?",
    "answer_hi": "try?",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which type represents absence of value?",
    "question_hi": "Value की absence को कौन सा type दर्शाता है?",
    "options_en": ["Optional", "Nil", "Void", "None"],
    "options_hi": ["Optional", "Nil", "Void", "None"],
    "answer_en": "Optional",
    "answer_hi": "Optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which type represents no return value?",
    "question_hi": "No return value को कौन सा type दर्शाता है?",
    "options_en": ["Void", "Nil", "None", "Empty"],
    "options_hi": ["Void", "Nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which operator checks equality?",
    "question_hi": "Equality check करने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["==", "=", "!=", "==="],
    "options_hi": ["==", "=", "!=", "==="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which operator assigns value?",
    "question_hi": "Value assign करने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["=", "==", ":=", "<-"],
    "options_hi": ["=", "==", ":=", "<-"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword defines a protocol?",
    "question_hi": "Protocol define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "contract"],
    "options_hi": ["protocol", "interface", "delegate", "contract"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which pattern uses delegates?",
    "question_hi": "Delegates किस pattern में उपयोग होते हैं?",
    "options_en": ["Delegation", "Observer", "Singleton", "MVC"],
    "options_hi": ["Delegation", "Observer", "Singleton", "MVC"],
    "answer_en": "Delegation",
    "answer_hi": "Delegation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which pattern ensures single instance?",
    "question_hi": "Single instance सुनिश्चित करने वाला pattern कौन सा है?",
    "options_en": ["Singleton", "Observer", "Factory", "Adapter"],
    "options_hi": ["Singleton", "Observer", "Factory", "Adapter"],
    "answer_en": "Singleton",
    "answer_hi": "Singleton",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword creates static property?",
    "question_hi": "Static property बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["static", "class", "final", "lazy"],
    "options_hi": ["static", "class", "final", "lazy"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which access level is most restrictive?",
    "question_hi": "सबसे ज्यादा restrictive access level कौन सा है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Default access level in Swift is?",
    "question_hi": "Swift में default access level कौन सा है?",
    "options_en": ["internal", "private", "public", "open"],
    "options_hi": ["internal", "private", "public", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword exits a loop?",
    "question_hi": "Loop से बाहर निकलने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["break", "continue", "return", "exit"],
    "options_hi": ["break", "continue", "return", "exit"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "Current iteration skip करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["continue", "break", "pass", "skip"],
    "options_hi": ["continue", "break", "pass", "skip"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword returns value from function?",
    "question_hi": "Function से value return करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["return", "yield", "send", "emit"],
    "options_hi": ["return", "yield", "send", "emit"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which tool compiles Swift code?",
    "question_hi": "Swift code compile करने वाला tool कौन सा है?",
    "options_en": ["swiftc", "xcode", "llvm", "clang"],
    "options_hi": ["swiftc", "xcode", "llvm", "clang"],
    "answer_en": "swiftc",
    "answer_hi": "swiftc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which company developed Swift?",
    "question_hi": "Swift को किस company ने develop किया?",
    "options_en": ["Apple", "Google", "Microsoft", "Meta"],
    "options_hi": ["Apple", "Google", "Microsoft", "Meta"],
    "answer_en": "Apple",
    "answer_hi": "Apple",
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