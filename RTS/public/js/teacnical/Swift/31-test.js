const questions = [
  {
    "num": 1,
    "question_en": "What keyword is used to declare a constant in Swift?",
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
    "options_en": ["var", "let", "define", "mutable"],
    "options_hi": ["var", "let", "define", "mutable"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is used to store true or false in Swift?",
    "question_hi": "Swift में true या false स्टोर करने के लिए कौन सा डेटा टाइप है?",
    "options_en": ["Bool", "Boolean", "Int", "String"],
    "options_hi": ["Bool", "Boolean", "Int", "String"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which symbol is used for single-line comments in Swift?",
    "question_hi": "Swift में single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["//", "/*", "#", "--"],
    "options_hi": ["//", "/*", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which type is used to store text in Swift?",
    "question_hi": "Swift में text स्टोर करने के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["String", "Char", "Text", "Array"],
    "options_hi": ["String", "Char", "Text", "Array"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the default integer type in Swift?",
    "question_hi": "Swift में default integer टाइप कौन सा होता है?",
    "options_en": ["Int", "Int32", "Int64", "Integer"],
    "options_hi": ["Int", "Int32", "Int64", "Integer"],
    "answer_en": "Int",
    "answer_hi": "Int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection stores unique values in Swift?",
    "question_hi": "Swift में कौन सा collection unique values स्टोर करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which collection stores key-value pairs in Swift?",
    "question_hi": "Swift में key-value pairs कौन सा collection स्टोर करता है?",
    "options_en": ["Dictionary", "Array", "Set", "List"],
    "options_hi": ["Dictionary", "Array", "Set", "List"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is used to unwrap an optional safely?",
    "question_hi": "Optional को safely unwrap करने के लिए क्या उपयोग होता है?",
    "options_en": ["Optional binding", "Force unwrap", "Casting", "Nil check"],
    "options_hi": ["Optional binding", "Force unwrap", "Casting", "Nil check"],
    "answer_en": "Optional binding",
    "answer_hi": "Optional binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which symbol is used for force unwrapping?",
    "question_hi": "Force unwrapping के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["!", "?", "*", "&"],
    "options_hi": ["!", "?", "*", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword defines a function in Swift?",
    "question_hi": "Swift में function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does optional type represent?",
    "question_hi": "Optional टाइप क्या दर्शाता है?",
    "options_en": ["Value or nil", "Only value", "Only nil", "Error"],
    "options_hi": ["Value या nil", "सिर्फ value", "सिर्फ nil", "Error"],
    "answer_en": "Value or nil",
    "answer_hi": "Value या nil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which loop is used to iterate over a collection?",
    "question_hi": "Collection पर iterate करने के लिए कौन सा loop उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat", "loop"],
    "options_hi": ["for-in", "while", "repeat", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to create a class?",
    "question_hi": "Swift में class बनाने के लिए कौन सा keyword है?",
    "options_en": ["class", "struct", "object", "type"],
    "options_hi": ["class", "struct", "object", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used to create a structure?",
    "question_hi": "Swift में structure बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "object", "enum"],
    "options_hi": ["struct", "class", "object", "enum"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which feature allows a class to inherit another class?",
    "question_hi": "कौन सा feature एक class को दूसरी class inherit करने देता है?",
    "options_en": ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    "options_hi": ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
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
    "num": 18,
    "question_en": "Which access level is most restrictive?",
    "question_hi": "सबसे ज्यादा restrictive access level कौन सा है?",
    "options_en": ["private", "internal", "public", "open"],
    "options_hi": ["private", "internal", "public", "open"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used for error handling?",
    "question_hi": "Swift में error handling के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["do-try-catch", "throw-catch", "error", "handle"],
    "options_hi": ["do-try-catch", "throw-catch", "error", "handle"],
    "answer_en": "do-try-catch",
    "answer_hi": "do-try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which protocol handles data persistence in iOS?",
    "question_hi": "iOS में data persistence के लिए कौन सा protocol उपयोग होता है?",
    "options_en": ["Codable", "Serializable", "NSCopying", "Hashable"],
    "options_hi": ["Codable", "Serializable", "NSCopying", "Hashable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used to define an enum?",
    "question_hi": "Swift में enum define करने के लिए कौन सा keyword है?",
    "options_en": ["enum", "case", "switch", "type"],
    "options_hi": ["enum", "case", "switch", "type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which statement is used with enums?",
    "question_hi": "Enum के साथ कौन सा statement उपयोग होता है?",
    "options_en": ["switch", "if", "for", "while"],
    "options_hi": ["switch", "if", "for", "while"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which type is immutable by default?",
    "question_hi": "कौन सा type default रूप से immutable होता है?",
    "options_en": ["let constant", "var variable", "class", "protocol"],
    "options_hi": ["let constant", "var variable", "class", "protocol"],
    "answer_en": "let constant",
    "answer_hi": "let constant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which operator is used for nil coalescing?",
    "question_hi": "Nil coalescing के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "?:", "!!", "&&"],
    "options_hi": ["??", "?:", "!!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which framework is used for UI in Swift?",
    "question_hi": "Swift में UI बनाने के लिए कौन सा framework उपयोग होता है?",
    "options_en": ["UIKit", "CoreData", "AVKit", "Foundation"],
    "options_hi": ["UIKit", "CoreData", "AVKit", "Foundation"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which framework is used for modern UI?",
    "question_hi": "Modern UI के लिए कौन सा framework उपयोग होता है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "SceneKit"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "SceneKit"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which property wrapper is used in SwiftUI?",
    "question_hi": "SwiftUI में कौन सा property wrapper उपयोग होता है?",
    "options_en": ["@State", "@Main", "@Safe", "@UI"],
    "options_hi": ["@State", "@Main", "@Safe", "@UI"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword marks an initializer?",
    "question_hi": "Initializer को कौन सा keyword दर्शाता है?",
    "options_en": ["init", "create", "new", "constructor"],
    "options_hi": ["init", "create", "new", "constructor"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which type allows multiple return values?",
    "question_hi": "Multiple return values के लिए कौन सा type उपयोग होता है?",
    "options_en": ["Tuple", "Array", "Dictionary", "Set"],
    "options_hi": ["Tuple", "Array", "Dictionary", "Set"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword is used for protocol?",
    "question_hi": "Swift में protocol के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "abstract"],
    "options_hi": ["protocol", "interface", "delegate", "abstract"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which concept allows same method name with different behavior?",
    "question_hi": "Same method नाम से अलग behavior किस concept में होता है?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Binding"],
    "options_hi": ["Polymorphism", "Inheritance", "Encapsulation", "Binding"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword refers to current instance?",
    "question_hi": "Current instance को refer करने के लिए कौन सा keyword है?",
    "options_en": ["self", "this", "current", "me"],
    "options_hi": ["self", "this", "current", "me"],
    "answer_en": "self",
    "answer_hi": "self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which tool is used to build iOS apps?",
    "question_hi": "iOS apps बनाने के लिए कौन सा tool उपयोग होता है?",
    "options_en": ["Xcode", "Android Studio", "VS Code", "Eclipse"],
    "options_hi": ["Xcode", "Android Studio", "VS Code", "Eclipse"],
    "answer_en": "Xcode",
    "answer_hi": "Xcode",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which file extension is used for Swift?",
    "question_hi": "Swift फाइल की extension क्या होती है?",
    "options_en": [".swift", ".sw", ".ios", ".code"],
    "options_hi": [".swift", ".sw", ".ios", ".code"],
    "answer_en": ".swift",
    "answer_hi": ".swift",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used for asynchronous code?",
    "question_hi": "Async code के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "delay", "thread"],
    "options_hi": ["async", "await", "delay", "thread"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "Async result का इंतजार करने के लिए कौन सा keyword है?",
    "options_en": ["await", "wait", "pause", "hold"],
    "options_hi": ["await", "wait", "pause", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which storage persists data permanently?",
    "question_hi": "Permanent data storage के लिए कौन सा उपयोग होता है?",
    "options_en": ["UserDefaults", "RAM", "Cache", "Variable"],
    "options_hi": ["UserDefaults", "RAM", "Cache", "Variable"],
    "answer_en": "UserDefaults",
    "answer_hi": "UserDefaults",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword throws an error?",
    "question_hi": "Error throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "error", "catch"],
    "options_hi": ["throw", "throws", "error", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which type conforms to Equatable?",
    "question_hi": "कौन सा protocol equality check के लिए है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Codable"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Codable"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword exits a loop?",
    "question_hi": "Loop से बाहर निकलने के लिए कौन सा keyword है?",
    "options_en": ["break", "exit", "stop", "return"],
    "options_hi": ["break", "exit", "stop", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "Current iteration skip करने के लिए कौन सा keyword है?",
    "options_en": ["continue", "skip", "pass", "next"],
    "options_hi": ["continue", "skip", "pass", "next"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which concept hides internal details?",
    "question_hi": "Internal details छुपाने वाला concept कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Binding"],
    "options_hi": ["Encapsulation", "Inheritance", "Polymorphism", "Binding"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword is used for extension?",
    "question_hi": "Swift में extension के लिए कौन सा keyword है?",
    "options_en": ["extension", "extend", "add", "expand"],
    "options_hi": ["extension", "extend", "add", "expand"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which feature adds functionality to existing types?",
    "question_hi": "Existing types में functionality जोड़ने वाला feature कौन सा है?",
    "options_en": ["Extension", "Protocol", "Inheritance", "Enum"],
    "options_hi": ["Extension", "Protocol", "Inheritance", "Enum"],
    "answer_en": "Extension",
    "answer_hi": "Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword defines computed property?",
    "question_hi": "Computed property define करने के लिए क्या उपयोग होता है?",
    "options_en": ["get/set", "compute", "calc", "property"],
    "options_hi": ["get/set", "compute", "calc", "property"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which type represents absence of value?",
    "question_hi": "Value की absence को कौन सा type दर्शाता है?",
    "options_en": ["nil", "void", "empty", "zero"],
    "options_hi": ["nil", "void", "empty", "zero"],
    "answer_en": "nil",
    "answer_hi": "nil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which typealias creates a new name?",
    "question_hi": "नया नाम बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["typealias", "alias", "rename", "typedef"],
    "options_hi": ["typealias", "alias", "rename", "typedef"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which operator checks equality?",
    "question_hi": "Equality check करने के लिए कौन सा operator है?",
    "options_en": ["==", "=", "===", "!="],
    "options_hi": ["==", "=", "===", "!="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword marks deinitializer?",
    "question_hi": "Deinitializer को कौन सा keyword दर्शाता है?",
    "options_en": ["deinit", "destroy", "free", "release"],
    "options_hi": ["deinit", "destroy", "free", "release"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which feature manages memory automatically?",
    "question_hi": "Memory को automatically manage करने वाला feature कौन सा है?",
    "options_en": ["ARC", "GC", "Manual", "Heap"],
    "options_hi": ["ARC", "GC", "Manual", "Heap"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
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