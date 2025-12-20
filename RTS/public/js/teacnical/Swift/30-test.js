const questions =[
  {
    "num": 1,
    "question_en": "Which keyword is used to import a module in Swift?",
    "question_hi": "Swift में किसी module को import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "include", "use", "require"],
    "options_hi": ["import", "include", "use", "require"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which data type stores true or false values in Swift?",
    "question_hi": "Swift में true या false value store करने के लिए कौन सा data type उपयोग होता है?",
    "options_en": ["Bool", "Int", "String", "Float"],
    "options_hi": ["Bool", "Int", "String", "Float"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
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
    "num": 4,
    "question_en": "Which keyword is used to define a constant property?",
    "question_hi": "Constant property define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "static", "final"],
    "options_hi": ["let", "var", "static", "final"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Swift feature prevents null pointer exceptions?",
    "question_hi": "Null pointer exception से बचाने वाली Swift feature कौन सी है?",
    "options_en": ["Optional", "Protocol", "Extension", "Closure"],
    "options_hi": ["Optional", "Protocol", "Extension", "Closure"],
    "answer_en": "Optional",
    "answer_hi": "Optional",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to unwrap an optional safely?",
    "question_hi": "Optional को safely unwrap करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["if let", "unwrap", "safe", "guarded"],
    "options_hi": ["if let", "unwrap", "safe", "guarded"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Swift type stores ordered values?",
    "question_hi": "Ordered values store करने के लिए Swift में कौन सा type उपयोग होता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Swift collection does not allow duplicate values?",
    "question_hi": "Swift का कौन सा collection duplicate values allow नहीं करता?",
    "options_en": ["Set", "Array", "Dictionary", "List"],
    "options_hi": ["Set", "Array", "Dictionary", "List"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to define a closure?",
    "question_hi": "Swift में closure define करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["in", "=>", "->", "::"],
    "options_hi": ["in", "=>", "->", "::"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator separates parameters and return type?",
    "question_hi": "Parameters और return type को अलग करने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["->", "=>", ":", "="],
    "options_hi": ["->", "=>", ":", "="],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "Swift में protocol define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "abstract"],
    "options_hi": ["protocol", "interface", "delegate", "abstract"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to conform to a protocol?",
    "question_hi": "Protocol conform करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": [":", "implements", "uses", "with"],
    "options_hi": [":", "implements", "uses", "with"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword defines a failable initializer?",
    "question_hi": "Failable initializer define करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["init?", "init!", "init", "fail"],
    "options_hi": ["init?", "init!", "init", "fail"],
    "answer_en": "init?",
    "answer_hi": "init?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift feature allows adding functionality to existing types?",
    "question_hi": "Existing types में functionality जोड़ने के लिए Swift की कौन सी feature उपयोग होती है?",
    "options_en": ["Extension", "Protocol", "Subclass", "Inheritance"],
    "options_hi": ["Extension", "Protocol", "Subclass", "Inheritance"],
    "answer_en": "Extension",
    "answer_hi": "Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used to make a property read-only?",
    "question_hi": "Property को read-only बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "private", "final", "static"],
    "options_hi": ["let", "private", "final", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword ensures code runs at least once?",
    "question_hi": "कम से कम एक बार code run करने के लिए कौन सा loop उपयोग होता है?",
    "options_en": ["repeat-while", "while", "for-in", "loop"],
    "options_hi": ["repeat-while", "while", "for-in", "loop"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which access level allows access only within the same file?",
    "question_hi": "Sirf same file के अंदर access देने वाला access level कौन सा है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword marks a property observer?",
    "question_hi": "Property observer के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["willSet", "didSet", "observe", "watch"],
    "options_hi": ["willSet", "didSet", "observe", "watch"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to define an enum case?",
    "question_hi": "Enum के case define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["case", "value", "option", "enum"],
    "options_hi": ["case", "value", "option", "enum"],
    "answer_en": "case",
    "answer_hi": "case",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "Functional programming को support करने वाली Swift feature कौन सी है?",
    "options_en": ["Closures", "Classes", "Structs", "Enums"],
    "options_hi": ["Closures", "Classes", "Structs", "Enums"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which operator is used for range creation?",
    "question_hi": "Range बनाने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["...", "..<", "=>", "<>"],
    "options_hi": ["...", "..<", "=>", "<>"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift keyword creates a lazy stored property?",
    "question_hi": "Lazy stored property बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["lazy", "static", "weak", "final"],
    "options_hi": ["lazy", "static", "weak", "final"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used to throw an error?",
    "question_hi": "Error throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "try", "catch"],
    "options_hi": ["throw", "throws", "try", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword marks a function that can throw errors?",
    "question_hi": "Error throw कर सकने वाले function को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Swift keyword ignores errors?",
    "question_hi": "Errors को ignore करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["try?", "try!", "catch", "ignore"],
    "options_hi": ["try?", "try!", "catch", "ignore"],
    "answer_en": "try?",
    "answer_hi": "try?",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which reference type avoids retain cycles?",
    "question_hi": "Retain cycle से बचने के लिए कौन सा reference type उपयोग होता है?",
    "options_en": ["weak", "strong", "lazy", "static"],
    "options_hi": ["weak", "strong", "lazy", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword defines a static method?",
    "question_hi": "Static method define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["static", "class", "final", "lazy"],
    "options_hi": ["static", "class", "final", "lazy"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Swift type represents no value?",
    "question_hi": "No value को represent करने वाला Swift type कौन सा है?",
    "options_en": ["Void", "Nil", "None", "Empty"],
    "options_hi": ["Void", "Nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Swift tool is used to manage dependencies?",
    "question_hi": "Dependencies manage करने के लिए Swift का कौन सा tool उपयोग होता है?",
    "options_en": ["Swift Package Manager", "CocoaPods", "Xcode", "Cartridge"],
    "options_hi": ["Swift Package Manager", "CocoaPods", "Xcode", "Cartridge"],
    "answer_en": "Swift Package Manager",
    "answer_hi": "Swift Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which file contains app entry point in SwiftUI?",
    "question_hi": "SwiftUI में app entry point किस file में होता है?",
    "options_en": ["@main App struct", "AppDelegate", "SceneDelegate", "Main.storyboard"],
    "options_hi": ["@main App struct", "AppDelegate", "SceneDelegate", "Main.storyboard"],
    "answer_en": "@main App struct",
    "answer_hi": "@main App struct",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which property wrapper stores simple data?",
    "question_hi": "Simple data store करने वाला property wrapper कौन सा है?",
    "options_en": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "options_hi": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which SwiftUI property wrapper shares data?",
    "question_hi": "Data share करने वाला SwiftUI property wrapper कौन सा है?",
    "options_en": ["@Binding", "@State", "@GestureState", "@SceneStorage"],
    "options_hi": ["@Binding", "@State", "@GestureState", "@SceneStorage"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
    "question_en": "Which operator unwraps optionals forcefully?",
    "question_hi": "Optionals को forcefully unwrap करने वाला operator कौन सा है?",
    "options_en": ["!", "?", "??", "*"],
    "options_hi": ["!", "?", "??", "*"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which operator provides default value for optional?",
    "question_hi": "Optional के लिए default value देने वाला operator कौन सा है?",
    "options_en": ["??", "?:", "!", "&&"],
    "options_hi": ["??", "?:", "!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword creates a singleton?",
    "question_hi": "Singleton बनाने के लिए सामान्यतः कौन सा keyword उपयोग होता है?",
    "options_en": ["static", "lazy", "final", "private"],
    "options_hi": ["static", "lazy", "final", "private"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which access level allows access everywhere?",
    "question_hi": "हर जगह access देने वाला access level कौन सा है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword prevents overriding?",
    "question_hi": "Override रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Swift keyword exits a function early?",
    "question_hi": "Function से जल्दी बाहर निकलने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["return", "break", "continue", "exit"],
    "options_hi": ["return", "break", "continue", "exit"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift feature ensures type safety?",
    "question_hi": "Type safety सुनिश्चित करने वाली Swift feature कौन सी है?",
    "options_en": ["Strong typing", "Protocols", "Extensions", "Closures"],
    "options_hi": ["Strong typing", "Protocols", "Extensions", "Closures"],
    "answer_en": "Strong typing",
    "answer_hi": "Strong typing",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which framework is used for basic Swift functionality?",
    "question_hi": "Basic Swift functionality के लिए कौन सा framework उपयोग होता है?",
    "options_en": ["Foundation", "UIKit", "SwiftUI", "CoreData"],
    "options_hi": ["Foundation", "UIKit", "SwiftUI", "CoreData"],
    "answer_en": "Foundation",
    "answer_hi": "Foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword defines a computed property?",
    "question_hi": "Computed property define करने के लिए क्या उपयोग होता है?",
    "options_en": ["get/set", "var", "let", "lazy"],
    "options_hi": ["get/set", "var", "let", "lazy"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Swift keyword defines an initializer?",
    "question_hi": "Initializer define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["init", "create", "new", "setup"],
    "options_hi": ["init", "create", "new", "setup"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword checks availability of API?",
    "question_hi": "API availability check करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@available", "@objc", "@main", "@discardableResult"],
    "options_hi": ["@available", "@objc", "@main", "@discardableResult"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which attribute hides unused return warnings?",
    "question_hi": "Unused return warning छुपाने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@discardableResult", "@available", "@objc", "@main"],
    "options_hi": ["@discardableResult", "@available", "@objc", "@main"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Swift keyword is used for concurrency?",
    "question_hi": "Concurrency के लिए Swift में कौन सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "thread", "queue"],
    "options_hi": ["async", "await", "thread", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword waits for async task?",
    "question_hi": "Async task का wait करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which SwiftUI view displays text?",
    "question_hi": "Text display करने के लिए SwiftUI view कौन सा है?",
    "options_en": ["Text", "Label", "StringView", "Title"],
    "options_hi": ["Text", "Label", "StringView", "Title"],
    "answer_en": "Text",
    "answer_hi": "Text",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which SwiftUI view handles user input?",
    "question_hi": "User input handle करने वाला SwiftUI view कौन सा है?",
    "options_en": ["TextField", "Text", "Image", "Spacer"],
    "options_hi": ["TextField", "Text", "Image", "Spacer"],
    "answer_en": "TextField",
    "answer_hi": "TextField",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Swift programming language was introduced in which year?",
    "question_hi": "Swift programming language किस साल introduce हुई थी?",
    "options_en": ["2014", "2012", "2016", "2010"],
    "options_hi": ["2014", "2012", "2016", "2010"],
    "answer_en": "2014",
    "answer_hi": "2014",
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