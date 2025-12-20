const questions=[
  {
    "num": 1,
    "question_en": "Swift is primarily used for developing which type of applications?",
    "question_hi": "Swift मुख्य रूप से किस प्रकार की applications develop करने के लिए उपयोग होती है?",
    "options_en": ["iOS applications", "Android applications", "Web applications", "Game engines"],
    "options_hi": ["iOS applications", "Android applications", "Web applications", "Game engines"],
    "answer_en": "iOS applications",
    "answer_hi": "iOS applications",
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
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में constant declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
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
    "num": 5,
    "question_en": "Which data type is used to store text in Swift?",
    "question_hi": "Swift में text store करने के लिए कौन सा data type उपयोग होता है?",
    "options_en": ["String", "Char", "Text", "NSString"],
    "options_hi": ["String", "Char", "Text", "NSString"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which data type represents true or false values?",
    "question_hi": "Swift में true या false को represent करने वाला data type कौन सा है?",
    "options_en": ["Bool", "Int", "String", "Double"],
    "options_hi": ["Bool", "Int", "String", "Double"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which symbol is used for single-line comments in Swift?",
    "question_hi": "Swift में single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["//", "/* */", "#", "--"],
    "options_hi": ["//", "/* */", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a function in Swift?",
    "question_hi": "Swift में function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["func", "def", "fn", "function"],
    "options_hi": ["func", "def", "fn", "function"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which collection stores ordered values in Swift?",
    "question_hi": "Swift में ordered values store करने के लिए कौन सा collection है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "Swift में key-value pairs store करने के लिए कौन सा collection है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which collection does not allow duplicate values?",
    "question_hi": "Swift में कौन सा collection duplicate values allow नहीं करता?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to define a class in Swift?",
    "question_hi": "Swift में class define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "enum", "object"],
    "options_hi": ["class", "struct", "enum", "object"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to define a structure?",
    "question_hi": "Swift में structure define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "enum", "type"],
    "options_hi": ["struct", "class", "enum", "type"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to define an enumeration?",
    "question_hi": "Swift में enumeration define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["enum", "case", "switch", "type"],
    "options_hi": ["enum", "case", "switch", "type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used for safe optional unwrapping?",
    "question_hi": "Swift में optional को safely unwrap करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["if let", "unwrap", "bind", "check"],
    "options_hi": ["if let", "unwrap", "bind", "check"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which operator is used for force unwrapping?",
    "question_hi": "Swift में force unwrap करने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which loop is commonly used to iterate over a range?",
    "question_hi": "Swift में range पर iterate करने के लिए कौन सा loop उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat-while", "loop"],
    "options_hi": ["for-in", "while", "repeat-while", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to exit a loop?",
    "question_hi": "Swift में loop से बाहर निकलने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["break", "exit", "stop", "return"],
    "options_hi": ["break", "exit", "stop", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which statement is used to handle multiple conditions?",
    "question_hi": "Swift में multiple conditions handle करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "Swift में protocol define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "rule"],
    "options_hi": ["protocol", "interface", "delegate", "rule"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which symbol is used for inheritance in Swift?",
    "question_hi": "Swift में inheritance के लिए कौन सा symbol उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "->"],
    "options_hi": [":", "extends", "inherits", "->"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword is used to define an initializer?",
    "question_hi": "Swift में initializer define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["init", "constructor", "new", "create"],
    "options_hi": ["init", "constructor", "new", "create"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used to return a value from a function?",
    "question_hi": "Swift में function से value return करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["return", "send", "yield", "exit"],
    "options_hi": ["return", "send", "yield", "exit"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which operator is used for nil coalescing?",
    "question_hi": "Swift में nil coalescing के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "!", "?", "&"],
    "options_hi": ["??", "!", "?", "&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword is used for error handling?",
    "question_hi": "Swift में error handling के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["do-try-catch", "handle", "error", "throwable"],
    "options_hi": ["do-try-catch", "handle", "error", "throwable"],
    "answer_en": "do-try-catch",
    "answer_hi": "do-try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which keyword is used to throw an error?",
    "question_hi": "Swift में error throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throw", "throws", "raise", "error"],
    "options_hi": ["throw", "throws", "raise", "error"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword marks a function that can throw errors?",
    "question_hi": "Swift में error throw करने वाले function को mark करने के लिए कौन सा keyword है?",
    "options_en": ["throws", "throw", "try", "error"],
    "options_hi": ["throws", "throw", "try", "error"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword refers to the current instance?",
    "question_hi": "Swift में current instance को refer करने के लिए कौन सा keyword है?",
    "options_en": ["self", "this", "me", "current"],
    "options_hi": ["self", "this", "me", "current"],
    "answer_en": "self",
    "answer_hi": "self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used to access superclass members?",
    "question_hi": "Swift में superclass के members access करने के लिए कौन सा keyword है?",
    "options_en": ["super", "self", "parent", "base"],
    "options_hi": ["super", "self", "parent", "base"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword is used to prevent inheritance?",
    "question_hi": "Swift में inheritance रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which access level is the most restrictive?",
    "question_hi": "Swift में सबसे ज्यादा restrictive access level कौन सा है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to make a property lazy?",
    "question_hi": "Swift में property को lazy बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["lazy", "delay", "late", "defer"],
    "options_hi": ["lazy", "delay", "late", "defer"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword delays execution until the scope ends?",
    "question_hi": "Swift में scope के end तक execution delay करने के लिए कौन सा keyword है?",
    "options_en": ["defer", "delay", "wait", "lazy"],
    "options_hi": ["defer", "delay", "wait", "lazy"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword is used to define asynchronous functions?",
    "question_hi": "Swift में asynchronous functions define करने के लिए कौन सा keyword है?",
    "options_en": ["async", "await", "thread", "queue"],
    "options_hi": ["async", "await", "thread", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used to wait for an async result?",
    "question_hi": "Swift में async result का wait करने के लिए कौन सा keyword है?",
    "options_en": ["await", "wait", "sync", "hold"],
    "options_hi": ["await", "wait", "sync", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which attribute marks the entry point of a Swift program?",
    "question_hi": "Swift program का entry point mark करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@main", "@start", "@entry", "@init"],
    "options_hi": ["@main", "@start", "@entry", "@init"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which attribute is used to check API availability?",
    "question_hi": "Swift में API availability check करने के लिए कौन सा attribute है?",
    "options_en": ["@available", "@objc", "@testable", "@discardableResult"],
    "options_hi": ["@available", "@objc", "@testable", "@discardableResult"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which type represents no return value in Swift?",
    "question_hi": "Swift में no return value को represent करने वाला type कौन सा है?",
    "options_en": ["Void", "Nil", "None", "Empty"],
    "options_hi": ["Void", "Nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which feature provides value semantics in Swift?",
    "question_hi": "Swift में value semantics किस feature से मिलती है?",
    "options_en": ["Struct", "Class", "Enum", "Protocol"],
    "options_hi": ["Struct", "Class", "Enum", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which feature provides reference semantics in Swift?",
    "question_hi": "Swift में reference semantics किस feature से मिलती है?",
    "options_en": ["Class", "Struct", "Enum", "Tuple"],
    "options_hi": ["Class", "Struct", "Enum", "Tuple"],
    "answer_en": "Class",
    "answer_hi": "Class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which keyword is used to override a method?",
    "question_hi": "Swift में method override करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["override", "virtual", "open", "extends"],
    "options_hi": ["override", "virtual", "open", "extends"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword allows subclassing outside the module?",
    "question_hi": "Swift में module के बाहर subclassing allow करने के लिए कौन सा keyword है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword is used to create a weak reference?",
    "question_hi": "Swift में weak reference बनाने के लिए कौन सा keyword है?",
    "options_en": ["weak", "unowned", "lazy", "static"],
    "options_hi": ["weak", "unowned", "lazy", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword is used to create an unowned reference?",
    "question_hi": "Swift में unowned reference बनाने के लिए कौन सा keyword है?",
    "options_en": ["unowned", "weak", "lazy", "final"],
    "options_hi": ["unowned", "weak", "lazy", "final"],
    "answer_en": "unowned",
    "answer_hi": "unowned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which programming approach is promoted by Swift?",
    "question_hi": "Swift किस programming approach को promote करता है?",
    "options_en": ["Protocol Oriented Programming", "Only OOP", "Procedural", "Script based"],
    "options_hi": ["Protocol Oriented Programming", "Only OOP", "Procedural", "Script based"],
    "answer_en": "Protocol Oriented Programming",
    "answer_hi": "Protocol Oriented Programming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which operator is used for optional chaining?",
    "question_hi": "Swift में optional chaining के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["?", "!", "??", "::"],
    "options_hi": ["?", "!", "??", "::"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which feature allows multiple return values from a function?",
    "question_hi": "Swift में function से multiple return values किस feature से possible हैं?",
    "options_en": ["Tuple", "Array", "Struct", "Dictionary"],
    "options_hi": ["Tuple", "Array", "Struct", "Dictionary"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword is used to import a module in Swift?",
    "question_hi": "Swift में module import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "include", "require", "use"],
    "options_hi": ["import", "include", "require", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword makes a variable read-only?",
    "question_hi": "Swift में variable को read-only बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "final", "static"],
    "options_hi": ["let", "var", "final", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which file extension is used for Swift source files?",
    "question_hi": "Swift source files की extension क्या होती है?",
    "options_en": [".swift", ".sw", ".ios", ".apple"],
    "options_hi": [".swift", ".sw", ".ios", ".apple"],
    "answer_en": ".swift",
    "answer_hi": ".swift",
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