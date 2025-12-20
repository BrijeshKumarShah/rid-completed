const questions= [
  {
    "num": 1,
    "question_en": "Which Swift keyword is used to define a custom infix operator?",
    "question_hi": "Swift में custom infix operator define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["operator", "infix", "custom", "define"],
    "options_hi": ["operator", "infix", "custom", "define"],
    "answer_en": "operator",
    "answer_hi": "operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which precedence group defines operator priority?",
    "question_hi": "Operator priority तय करने के लिए कौन सा precedence group होता है?",
    "options_en": ["precedencegroup", "prioritygroup", "operatorgroup", "ordergroup"],
    "options_hi": ["precedencegroup", "prioritygroup", "operatorgroup", "ordergroup"],
    "answer_en": "precedencegroup",
    "answer_hi": "precedencegroup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Swift keyword is used to mark code as unavailable?",
    "question_hi": "Code को unavailable mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@available", "@disabled", "@remove", "@invalid"],
    "options_hi": ["@available", "@disabled", "@remove", "@invalid"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift feature allows compile-time code execution?",
    "question_hi": "Compile-time code execution Swift में किससे संभव है?",
    "options_en": ["Property Wrappers", "Macros", "Protocols", "Actors"],
    "options_hi": ["Property Wrappers", "Macros", "Protocols", "Actors"],
    "answer_en": "Macros",
    "answer_hi": "Macros",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Swift macro generates code automatically?",
    "question_hi": "Automatic code generation के लिए कौन सा Swift macro उपयोग होता है?",
    "options_en": ["@freestanding", "@attached", "@macro", "@generate"],
    "options_hi": ["@freestanding", "@attached", "@macro", "@generate"],
    "answer_en": "@attached",
    "answer_hi": "@attached",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to mark Sendable conformance?",
    "question_hi": "Sendable conformance mark करने के लिए कौन सा keyword है?",
    "options_en": ["Sendable", "Concurrent", "Safe", "Threaded"],
    "options_hi": ["Sendable", "Concurrent", "Safe", "Threaded"],
    "answer_en": "Sendable",
    "answer_hi": "Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Swift attribute disables concurrency checks?",
    "question_hi": "Concurrency checks disable करने के लिए कौन सा attribute है?",
    "options_en": ["@unchecked", "@unsafe", "@nothread", "@ignore"],
    "options_hi": ["@unchecked", "@unsafe", "@nothread", "@ignore"],
    "answer_en": "@unchecked",
    "answer_hi": "@unchecked",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword allows async function to throw errors?",
    "question_hi": "Async function को error throw करने देने के लिए कौन सा keyword है?",
    "options_en": ["async throws", "throws async", "throw async", "async error"],
    "options_hi": ["async throws", "throws async", "throw async", "async error"],
    "answer_en": "async throws",
    "answer_hi": "async throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift type erases concrete types?",
    "question_hi": "Concrete types को erase करने वाला Swift type कौन सा है?",
    "options_en": ["Any", "Some", "Unknown", "Generic"],
    "options_hi": ["Any", "Some", "Unknown", "Generic"],
    "answer_en": "Any",
    "answer_hi": "Any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword preserves opaque return type?",
    "question_hi": "Opaque return type preserve करने के लिए कौन सा keyword है?",
    "options_en": ["some", "any", "opaque", "hidden"],
    "options_hi": ["some", "any", "opaque", "hidden"],
    "answer_en": "some",
    "answer_hi": "some",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Swift feature ensures exhaustive error handling?",
    "question_hi": "Exhaustive error handling Swift में किससे सुनिश्चित होती है?",
    "options_en": ["do-catch", "try?", "try!", "throw"],
    "options_hi": ["do-catch", "try?", "try!", "throw"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Swift keyword allows conditional protocol conformance?",
    "question_hi": "Conditional protocol conformance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["where", "if", "case", "guard"],
    "options_hi": ["where", "if", "case", "guard"],
    "answer_en": "where",
    "answer_hi": "where",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Swift feature allows default initializer synthesis?",
    "question_hi": "Default initializer synthesis Swift में किससे होता है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift keyword prevents subclassing outside module?",
    "question_hi": "Module के बाहर subclassing रोकने के लिए कौन सा keyword है?",
    "options_en": ["final", "open", "public", "sealed"],
    "options_hi": ["final", "open", "public", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Swift feature supports copy-on-write?",
    "question_hi": "Copy-on-write Swift में किस feature से मिलता है?",
    "options_en": ["Value Types", "Reference Types", "Actors", "Protocols"],
    "options_hi": ["Value Types", "Reference Types", "Actors", "Protocols"],
    "answer_en": "Value Types",
    "answer_hi": "Value Types",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword marks a required initializer?",
    "question_hi": "Required initializer को mark करने के लिए कौन सा keyword है?",
    "options_en": ["required", "mandatory", "init!", "force"],
    "options_hi": ["required", "mandatory", "init!", "force"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Swift attribute inlines functions aggressively?",
    "question_hi": "Functions को aggressively inline करने वाला attribute कौन सा है?",
    "options_en": ["@inline(__always)", "@optimize", "@fast", "@inline"],
    "options_hi": ["@inline(__always)", "@optimize", "@fast", "@inline"],
    "answer_en": "@inline(__always)",
    "answer_hi": "@inline(__always)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Swift attribute prevents inlining?",
    "question_hi": "Inlining रोकने वाला Swift attribute कौन सा है?",
    "options_en": ["@inline(never)", "@noinline", "@disable", "@static"],
    "options_hi": ["@inline(never)", "@noinline", "@disable", "@static"],
    "answer_en": "@inline(never)",
    "answer_hi": "@inline(never)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Swift feature allows dynamic member lookup?",
    "question_hi": "Dynamic member lookup Swift में किस feature से होता है?",
    "options_en": ["@dynamicMemberLookup", "@lookup", "@dynamic", "@member"],
    "options_hi": ["@dynamicMemberLookup", "@lookup", "@dynamic", "@member"],
    "answer_en": "@dynamicMemberLookup",
    "answer_hi": "@dynamicMemberLookup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Swift attribute enables callable instances?",
    "question_hi": "Callable instances enable करने वाला attribute कौन सा है?",
    "options_en": ["@callable", "@dynamicCallable", "@call", "@invoke"],
    "options_hi": ["@callable", "@dynamicCallable", "@call", "@invoke"],
    "answer_en": "@dynamicCallable",
    "answer_hi": "@dynamicCallable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Swift keyword ensures deterministic deinitialization?",
    "question_hi": "Deterministic deinitialization Swift में किससे सुनिश्चित होती है?",
    "options_en": ["deinit", "finalize", "destroy", "release"],
    "options_hi": ["deinit", "finalize", "destroy", "release"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift feature provides memory exclusivity?",
    "question_hi": "Memory exclusivity Swift में किस feature से मिलती है?",
    "options_en": ["Exclusivity Enforcement", "ARC", "GCD", "Actors"],
    "options_hi": ["Exclusivity Enforcement", "ARC", "GCD", "Actors"],
    "answer_en": "Exclusivity Enforcement",
    "answer_hi": "Exclusivity Enforcement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Swift keyword is used for deferred execution?",
    "question_hi": "Deferred execution के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["defer", "delay", "later", "wait"],
    "options_hi": ["defer", "delay", "later", "wait"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Swift type bridges Objective-C classes?",
    "question_hi": "Objective-C classes को bridge करने वाला Swift type कौन सा है?",
    "options_en": ["NSObject", "AnyObject", "ObjC", "Bridge"],
    "options_hi": ["NSObject", "AnyObject", "ObjC", "Bridge"],
    "answer_en": "NSObject",
    "answer_hi": "NSObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Swift feature ensures ABI stability?",
    "question_hi": "ABI stability Swift में किस version से सुनिश्चित हुई?",
    "options_en": ["Swift 5", "Swift 4", "Swift 3", "Swift 6"],
    "options_hi": ["Swift 5", "Swift 4", "Swift 3", "Swift 6"],
    "answer_en": "Swift 5",
    "answer_hi": "Swift 5",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Swift feature allows result builders?",
    "question_hi": "Result builders Swift में किससे संभव होते हैं?",
    "options_en": ["@resultBuilder", "@builder", "@compose", "@dsl"],
    "options_hi": ["@resultBuilder", "@builder", "@compose", "@dsl"],
    "answer_en": "@resultBuilder",
    "answer_hi": "@resultBuilder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Swift UI uses result builders heavily?",
    "question_hi": "Result builders का heavy use कौन सा Swift UI framework करता है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "CoreAnimation"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "CoreAnimation"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Swift keyword marks autoclosure parameters?",
    "question_hi": "Autoclosure parameters mark करने के लिए कौन सा keyword है?",
    "options_en": ["@autoclosure", "@escaping", "@inline", "@lazy"],
    "options_hi": ["@autoclosure", "@escaping", "@inline", "@lazy"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Swift feature enables structured concurrency?",
    "question_hi": "Structured concurrency Swift में किससे मिलती है?",
    "options_en": ["TaskGroup", "DispatchQueue", "Thread", "Operation"],
    "options_hi": ["TaskGroup", "DispatchQueue", "Thread", "Operation"],
    "answer_en": "TaskGroup",
    "answer_hi": "TaskGroup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift keyword starts a detached task?",
    "question_hi": "Detached task start करने के लिए कौन सा keyword है?",
    "options_en": ["Task.detached", "Task.async", "Task.start", "asyncTask"],
    "options_hi": ["Task.detached", "Task.async", "Task.start", "asyncTask"],
    "answer_en": "Task.detached",
    "answer_hi": "Task.detached",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Swift feature enforces main-thread execution?",
    "question_hi": "Main-thread execution enforce करने वाला feature कौन सा है?",
    "options_en": ["@MainActor", "@UIThread", "@Main", "@Actor"],
    "options_hi": ["@MainActor", "@UIThread", "@Main", "@Actor"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Swift keyword allows conditional availability checks?",
    "question_hi": "Conditional availability check के लिए कौन सा keyword है?",
    "options_en": ["if #available", "guard #available", "#check", "#os"],
    "options_hi": ["if #available", "guard #available", "#check", "#os"],
    "answer_en": "if #available",
    "answer_hi": "if #available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Swift type represents absence of errors?",
    "question_hi": "Errors की absence को कौन सा Swift type represent करता है?",
    "options_en": ["Never", "Void", "Nil", "None"],
    "options_hi": ["Never", "Void", "Nil", "None"],
    "answer_en": "Never",
    "answer_hi": "Never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift feature supports back-deployment?",
    "question_hi": "Back-deployment Swift में किससे संभव है?",
    "options_en": ["@backDeployed", "@available", "@legacy", "@compat"],
    "options_hi": ["@backDeployed", "@available", "@legacy", "@compat"],
    "answer_en": "@backDeployed",
    "answer_hi": "@backDeployed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Swift keyword is used to reference type metadata?",
    "question_hi": "Type metadata reference करने के लिए कौन सा keyword है?",
    "options_en": ["Self", "Type", "Meta", "This"],
    "options_hi": ["Self", "Type", "Meta", "This"],
    "answer_en": "Self",
    "answer_hi": "Self",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Swift operator performs optional chaining?",
    "question_hi": "Optional chaining करने वाला operator कौन सा है?",
    "options_en": ["?.", "??", "!", "::"],
    "options_hi": ["?.", "??", "!", "::"],
    "answer_en": "?.",
    "answer_hi": "?.",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Swift operator unwraps optionals safely?",
    "question_hi": "Optionals को safely unwrap करने वाला operator कौन सा है?",
    "options_en": ["??", "!", "?.", "as?"],
    "options_hi": ["??", "!", "?.", "as?"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Swift keyword marks compile-time constants?",
    "question_hi": "Compile-time constants mark करने के लिए कौन सा keyword है?",
    "options_en": ["static let", "const", "final let", "fixed"],
    "options_hi": ["static let", "const", "final let", "fixed"],
    "answer_en": "static let",
    "answer_hi": "static let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Swift feature supports DSL creation?",
    "question_hi": "DSL creation Swift में किस feature से होती है?",
    "options_en": ["Result Builders", "Macros", "Protocols", "Actors"],
    "options_hi": ["Result Builders", "Macros", "Protocols", "Actors"],
    "answer_en": "Result Builders",
    "answer_hi": "Result Builders",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift keyword enforces protocol-only inheritance?",
    "question_hi": "Protocol-only inheritance enforce करने वाला keyword कौन सा है?",
    "options_en": ["AnyObject", "NSObject", "ClassOnly", "Reference"],
    "options_hi": ["AnyObject", "NSObject", "ClassOnly", "Reference"],
    "answer_en": "AnyObject",
    "answer_hi": "AnyObject",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Swift feature allows type erasure patterns?",
    "question_hi": "Type erasure pattern Swift में किससे संभव है?",
    "options_en": ["Any", "some", "Generic", "Protocol"],
    "options_hi": ["Any", "some", "Generic", "Protocol"],
    "answer_en": "Any",
    "answer_hi": "Any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Swift keyword indicates no return ever?",
    "question_hi": "Function कभी return नहीं करेगा यह दिखाने वाला keyword कौन सा है?",
    "options_en": ["Never", "Void", "Nil", "None"],
    "options_hi": ["Never", "Void", "Nil", "None"],
    "answer_en": "Never",
    "answer_hi": "Never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Swift attribute enables Objective-C exposure?",
    "question_hi": "Objective-C exposure enable करने वाला attribute कौन सा है?",
    "options_en": ["@objc", "@expose", "@bridge", "@interop"],
    "options_hi": ["@objc", "@expose", "@bridge", "@interop"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Swift keyword prevents overriding in subclasses?",
    "question_hi": "Subclass में override रोकने वाला keyword कौन सा है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift feature guarantees memory safety?",
    "question_hi": "Memory safety Swift में किससे guarantee होती है?",
    "options_en": ["Ownership Model", "Garbage Collector", "Manual Free", "Pointers"],
    "options_hi": ["Ownership Model", "Garbage Collector", "Manual Free", "Pointers"],
    "answer_en": "Ownership Model",
    "answer_hi": "Ownership Model",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Swift keyword allows lazy sequence evaluation?",
    "question_hi": "Lazy sequence evaluation के लिए कौन सा keyword है?",
    "options_en": ["lazy", "delay", "async", "await"],
    "options_hi": ["lazy", "delay", "async", "await"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift type represents Unicode scalar values?",
    "question_hi": "Unicode scalar values represent करने वाला Swift type कौन सा है?",
    "options_en": ["Unicode.Scalar", "Character", "String", "ASCII"],
    "options_hi": ["Unicode.Scalar", "Character", "String", "ASCII"],
    "answer_en": "Unicode.Scalar",
    "answer_hi": "Unicode.Scalar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Swift feature supports reflection?",
    "question_hi": "Reflection Swift में किस feature से मिलती है?",
    "options_en": ["Mirror", "Reflect", "Inspect", "Meta"],
    "options_hi": ["Mirror", "Reflect", "Inspect", "Meta"],
    "answer_en": "Mirror",
    "answer_hi": "Mirror",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift keyword marks escaping closures?",
    "question_hi": "Escaping closures mark करने वाला keyword कौन सा है?",
    "options_en": ["@escaping", "@autoclosure", "@lazy", "@inline"],
    "options_hi": ["@escaping", "@autoclosure", "@lazy", "@inline"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature supports safe concurrency?",
    "question_hi": "Safe concurrency Swift में किस feature से मिलती है?",
    "options_en": ["Actors", "Threads", "Locks", "Semaphores"],
    "options_hi": ["Actors", "Threads", "Locks", "Semaphores"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
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