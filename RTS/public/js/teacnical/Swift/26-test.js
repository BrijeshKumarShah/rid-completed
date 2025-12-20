const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to create a computed property in Swift?",
    "question_hi": "Swift में computed property बनाने के लिए किसका उपयोग होता है?",
    "options_en": ["get/set", "willSet", "didSet", "lazy"],
    "options_hi": ["get/set", "willSet", "didSet", "lazy"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Swift feature ensures thread safety for async code?",
    "question_hi": "Async code के लिए thread safety कौन सा Swift feature देता है?",
    "options_en": ["Actor", "Protocol", "Class", "Struct"],
    "options_hi": ["Actor", "Protocol", "Class", "Struct"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to define an actor?",
    "question_hi": "Actor define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["actor", "async", "await", "thread"],
    "options_hi": ["actor", "async", "await", "thread"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift type is used to represent an empty tuple?",
    "question_hi": "Empty tuple को represent करने के लिए कौन सा Swift type है?",
    "options_en": ["()", "Void", "Nil", "Empty"],
    "options_hi": ["()", "Void", "Nil", "Empty"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword allows pattern matching with conditions?",
    "question_hi": "Condition के साथ pattern matching के लिए कौन सा keyword है?",
    "options_en": ["where", "guard", "if", "case"],
    "options_hi": ["where", "guard", "if", "case"],
    "answer_en": "where",
    "answer_hi": "where",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Swift statement binds optionals safely?",
    "question_hi": "Optionals को safely bind करने के लिए कौन सा statement है?",
    "options_en": ["if let", "unwrap", "bind", "guard try"],
    "options_hi": ["if let", "unwrap", "bind", "guard try"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword enforces immutability inside a function?",
    "question_hi": "Function के अंदर immutability enforce करने के लिए कौन सा keyword है?",
    "options_en": ["let", "var", "const", "final"],
    "options_hi": ["let", "var", "const", "final"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Swift collection maintains insertion order?",
    "question_hi": "Insertion order को कौन सा Swift collection maintain करता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift feature allows default method implementations?",
    "question_hi": "Default method implementation किस feature से मिलती है?",
    "options_en": ["Protocol Extension", "Class", "Struct", "Enum"],
    "options_hi": ["Protocol Extension", "Class", "Struct", "Enum"],
    "answer_en": "Protocol Extension",
    "answer_hi": "Protocol Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword prevents method overriding?",
    "question_hi": "Method overriding रोकने के लिए कौन सा keyword है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Swift feature allows code reuse without inheritance?",
    "question_hi": "Inheritance के बिना code reuse किससे होता है?",
    "options_en": ["Extension", "Subclass", "Override", "Copy"],
    "options_hi": ["Extension", "Subclass", "Override", "Copy"],
    "answer_en": "Extension",
    "answer_hi": "Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword allows a closure to capture self weakly?",
    "question_hi": "Closure में self को weak capture करने के लिए क्या उपयोग होता है?",
    "options_en": ["[weak self]", "[unowned self]", "[self]", "[safe self]"],
    "options_hi": ["[weak self]", "[unowned self]", "[self]", "[safe self]"],
    "answer_en": "[weak self]",
    "answer_hi": "[weak self]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Swift type represents an immutable sequence of characters?",
    "question_hi": "Immutable characters sequence कौन सा Swift type है?",
    "options_en": ["String", "Array", "Text", "Char"],
    "options_hi": ["String", "Array", "Text", "Char"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to mark a function result discardable?",
    "question_hi": "Function result को discardable बनाने के लिए कौन सा keyword है?",
    "options_en": ["@discardableResult", "@available", "@escaping", "@objc"],
    "options_hi": ["@discardableResult", "@available", "@escaping", "@objc"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Swift feature groups multiple values into one?",
    "question_hi": "Multiple values को एक में group करने वाला feature कौन सा है?",
    "options_en": ["Tuple", "Struct", "Class", "Array"],
    "options_hi": ["Tuple", "Struct", "Class", "Array"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Swift statement ensures early exit on failure?",
    "question_hi": "Failure होने पर early exit के लिए कौन सा statement है?",
    "options_en": ["guard", "if", "break", "continue"],
    "options_hi": ["guard", "if", "break", "continue"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Swift type is used for key-value observing?",
    "question_hi": "Key-value observing के लिए कौन सा Swift type उपयोग होता है?",
    "options_en": ["@Published", "@State", "@Binding", "@Environment"],
    "options_hi": ["@Published", "@State", "@Binding", "@Environment"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword marks a throwing initializer?",
    "question_hi": "Throwing initializer को कौन सा keyword mark करता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Swift feature enables dependency injection in SwiftUI?",
    "question_hi": "SwiftUI में dependency injection किससे होता है?",
    "options_en": ["@EnvironmentObject", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@EnvironmentObject", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@EnvironmentObject",
    "answer_hi": "@EnvironmentObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator checks reference equality?",
    "question_hi": "Reference equality check करने वाला operator कौन सा है?",
    "options_en": ["===", "==", "!=", "<="],
    "options_hi": ["===", "==", "!=", "<="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Swift keyword allows dynamic dispatch?",
    "question_hi": "Dynamic dispatch enable करने के लिए कौन सा keyword है?",
    "options_en": ["dynamic", "static", "final", "lazy"],
    "options_hi": ["dynamic", "static", "final", "lazy"],
    "answer_en": "dynamic",
    "answer_hi": "dynamic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "Functional programming को कौन सा feature support करता है?",
    "options_en": ["Closures", "Classes", "Actors", "Protocols"],
    "options_hi": ["Closures", "Classes", "Actors", "Protocols"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Swift function transforms collections?",
    "question_hi": "Collection transform करने वाला function कौन सा है?",
    "options_en": ["map", "filter", "reduce", "sort"],
    "options_hi": ["map", "filter", "reduce", "sort"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which function filters elements from a collection?",
    "question_hi": "Collection से elements filter करने वाला function कौन सा है?",
    "options_en": ["filter", "map", "reduce", "flatMap"],
    "options_hi": ["filter", "map", "reduce", "flatMap"],
    "answer_en": "filter",
    "answer_hi": "filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function combines all elements into one value?",
    "question_hi": "सभी elements को एक value में combine करने वाला function कौन सा है?",
    "options_en": ["reduce", "map", "filter", "zip"],
    "options_hi": ["reduce", "map", "filter", "zip"],
    "answer_en": "reduce",
    "answer_hi": "reduce",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Swift keyword marks a failable initializer?",
    "question_hi": "Failable initializer को कौन सा keyword mark करता है?",
    "options_en": ["init?", "init!", "throws", "fail"],
    "options_hi": ["init?", "init!", "throws", "fail"],
    "answer_en": "init?",
    "answer_hi": "init?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Swift type supports exhaustive switching?",
    "question_hi": "Exhaustive switching किस type पर जरूरी होता है?",
    "options_en": ["Enum", "Class", "Struct", "Protocol"],
    "options_hi": ["Enum", "Class", "Struct", "Protocol"],
    "answer_en": "Enum",
    "answer_hi": "Enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Swift feature allows generic programming?",
    "question_hi": "Generic programming किस feature से होती है?",
    "options_en": ["Generics", "Protocols", "Actors", "Enums"],
    "options_hi": ["Generics", "Protocols", "Actors", "Enums"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword restricts access to same file?",
    "question_hi": "Same file तक access restrict करने वाला keyword कौन सा है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift access level is default?",
    "question_hi": "Swift का default access level कौन सा है?",
    "options_en": ["internal", "private", "public", "open"],
    "options_hi": ["internal", "private", "public", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Swift keyword supports value copying?",
    "question_hi": "Value copying किस keyword/type से जुड़ा है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Swift keyword enables concurrency context?",
    "question_hi": "Concurrency context enable करने के लिए कौन सा keyword है?",
    "options_en": ["Task", "Thread", "Queue", "Dispatch"],
    "options_hi": ["Task", "Thread", "Queue", "Dispatch"],
    "answer_en": "Task",
    "answer_hi": "Task",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Swift framework handles data persistence?",
    "question_hi": "Data persistence के लिए कौन सा Swift framework है?",
    "options_en": ["CoreData", "Foundation", "SwiftUI", "Combine"],
    "options_hi": ["CoreData", "Foundation", "SwiftUI", "Combine"],
    "answer_en": "CoreData",
    "answer_hi": "CoreData",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift feature publishes value changes?",
    "question_hi": "Value changes publish करने वाला feature कौन सा है?",
    "options_en": ["Combine", "UIKit", "Foundation", "GCD"],
    "options_hi": ["Combine", "UIKit", "Foundation", "GCD"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Swift keyword marks main thread execution?",
    "question_hi": "Main thread execution mark करने वाला keyword कौन सा है?",
    "options_en": ["@MainActor", "@UIActor", "@Thread", "@Main"],
    "options_hi": ["@MainActor", "@UIActor", "@Thread", "@Main"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Swift keyword enables conditional compilation?",
    "question_hi": "Conditional compilation के लिए कौन सा keyword है?",
    "options_en": ["#if", "#define", "#switch", "#when"],
    "options_hi": ["#if", "#define", "#switch", "#when"],
    "answer_en": "#if",
    "answer_hi": "#if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Swift type represents binary data?",
    "question_hi": "Binary data को represent करने वाला Swift type कौन सा है?",
    "options_en": ["Data", "Bytes", "Binary", "Blob"],
    "options_hi": ["Data", "Bytes", "Binary", "Blob"],
    "answer_en": "Data",
    "answer_hi": "Data",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Swift feature allows method chaining?",
    "question_hi": "Method chaining किस feature से संभव है?",
    "options_en": ["Fluent API", "Inheritance", "Delegation", "Copying"],
    "options_hi": ["Fluent API", "Inheritance", "Delegation", "Copying"],
    "answer_en": "Fluent API",
    "answer_hi": "Fluent API",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Swift keyword marks a mutating method?",
    "question_hi": "Mutating method को mark करने वाला keyword कौन सा है?",
    "options_en": ["mutating", "changing", "modify", "var"],
    "options_hi": ["mutating", "changing", "modify", "var"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift feature provides reactive programming?",
    "question_hi": "Reactive programming किस feature से मिलती है?",
    "options_en": ["Combine", "Actors", "Protocols", "GCD"],
    "options_hi": ["Combine", "Actors", "Protocols", "GCD"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Swift keyword exposes API outside module?",
    "question_hi": "Module के बाहर API expose करने वाला keyword कौन सा है?",
    "options_en": ["public", "internal", "fileprivate", "private"],
    "options_hi": ["public", "internal", "fileprivate", "private"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which access level allows subclassing outside module?",
    "question_hi": "Module के बाहर subclassing किस access level से संभव है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Swift feature reduces boilerplate code?",
    "question_hi": "Boilerplate code कम करने वाला feature कौन सा है?",
    "options_en": ["Property Wrapper", "Subclass", "Protocol", "Actor"],
    "options_hi": ["Property Wrapper", "Subclass", "Protocol", "Actor"],
    "answer_en": "Property Wrapper",
    "answer_hi": "Property Wrapper",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword allows method to be overridden by subclass?",
    "question_hi": "Subclass द्वारा method override होने देने के लिए क्या जरूरी है?",
    "options_en": ["class", "open", "dynamic", "public"],
    "options_hi": ["class", "open", "dynamic", "public"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift feature ensures memory safety?",
    "question_hi": "Memory safety Swift में किससे सुनिश्चित होती है?",
    "options_en": ["ARC", "GC", "Manual Free", "Pointers"],
    "options_hi": ["ARC", "GC", "Manual Free", "Pointers"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Swift keyword converts expression to closure automatically?",
    "question_hi": "Expression को automatically closure में बदलने वाला keyword कौन सा है?",
    "options_en": ["@autoclosure", "@escaping", "@objc", "@inline"],
    "options_hi": ["@autoclosure", "@escaping", "@objc", "@inline"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift feature supports safe type casting?",
    "question_hi": "Safe type casting के लिए कौन सा operator है?",
    "options_en": ["as?", "as!", "is", "cast"],
    "options_hi": ["as?", "as!", "is", "cast"],
    "answer_en": "as?",
    "answer_hi": "as?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which operator checks type at runtime?",
    "question_hi": "Runtime पर type check करने वाला operator कौन सा है?",
    "options_en": ["is", "as", "==", "==="],
    "options_hi": ["is", "as", "==", "==="],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift keyword ensures function runs only once?",
    "question_hi": "Function को सिर्फ एक बार run कराने के लिए क्या उपयोग होता है?",
    "options_en": ["static", "lazy", "final", "once"],
    "options_hi": ["static", "lazy", "final", "once"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature supports modular architecture?",
    "question_hi": "Modular architecture को कौन सा Swift feature support करता है?",
    "options_en": ["Framework", "Class", "Struct", "Enum"],
    "options_hi": ["Framework", "Class", "Struct", "Enum"],
    "answer_en": "Framework",
    "answer_hi": "Framework",
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