const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a computed property in Swift?",
    "question_hi": "Swift में computed property घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["get", "set", "computed", "calc"],
    "options_hi": ["get", "set", "computed", "calc"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword allows a method to be overridden?",
    "question_hi": "किस keyword से method को override किया जा सकता है?",
    "options_en": ["override", "final", "open", "public"],
    "options_hi": ["override", "final", "open", "public"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which access modifier allows subclassing outside the module?",
    "question_hi": "Module के बाहर subclassing के लिए कौन सा access modifier उपयोग होता है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift feature ensures thread safety for variables?",
    "question_hi": "Variables की thread safety सुनिश्चित करने वाला Swift feature कौन सा है?",
    "options_en": ["Actors", "Protocols", "Enums", "Structs"],
    "options_hi": ["Actors", "Protocols", "Enums", "Structs"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword defines an actor?",
    "question_hi": "Actor को define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["actor", "class", "struct", "object"],
    "options_hi": ["actor", "class", "struct", "object"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which SwiftUI protocol represents a screen?",
    "question_hi": "SwiftUI में screen को represent करने वाला protocol कौन सा है?",
    "options_en": ["View", "Scene", "Window", "Screen"],
    "options_hi": ["View", "Scene", "Window", "Screen"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which property wrapper stores data in AppStorage?",
    "question_hi": "AppStorage में data store करने के लिए कौन सा property wrapper उपयोग होता है?",
    "options_en": ["@AppStorage", "@State", "@Binding", "@SceneStorage"],
    "options_hi": ["@AppStorage", "@State", "@Binding", "@SceneStorage"],
    "answer_en": "@AppStorage",
    "answer_hi": "@AppStorage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword marks a throwing function?",
    "question_hi": "Throwing function को mark करने के लिए कौन सा keyword है?",
    "options_en": ["throws", "throw", "error", "catch"],
    "options_hi": ["throws", "throw", "error", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "Functional programming को support करने वाला Swift feature कौन सा है?",
    "options_en": ["Closures", "Classes", "Enums", "Protocols"],
    "options_hi": ["Closures", "Classes", "Enums", "Protocols"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword captures values in closures?",
    "question_hi": "Closures में values capture करने के लिए कौन सा concept उपयोग होता है?",
    "options_en": ["Capture list", "Binding", "Inheritance", "Scope"],
    "options_hi": ["Capture list", "Binding", "Inheritance", "Scope"],
    "answer_en": "Capture list",
    "answer_hi": "Capture list",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which attribute marks availability for iOS versions?",
    "question_hi": "iOS version availability दिखाने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@available", "@version", "@platform", "@ios"],
    "options_hi": ["@available", "@version", "@platform", "@ios"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword allows pattern matching?",
    "question_hi": "Pattern matching के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "match"],
    "options_hi": ["switch", "if", "guard", "match"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which statement exits early if condition fails?",
    "question_hi": "Condition fail होने पर जल्दी exit करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["guard", "if", "break", "return"],
    "options_hi": ["guard", "if", "break", "return"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which type stores unordered key-value pairs?",
    "question_hi": "Unordered key-value pairs store करने वाला type कौन सा है?",
    "options_en": ["Dictionary", "Array", "Tuple", "Set"],
    "options_hi": ["Dictionary", "Array", "Tuple", "Set"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Swift feature supports value semantics?",
    "question_hi": "Value semantics को support करने वाला Swift feature कौन सा है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword defines a generic constraint?",
    "question_hi": "Generic constraint define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["where", "extends", "limit", "constraint"],
    "options_hi": ["where", "extends", "limit", "constraint"],
    "answer_en": "where",
    "answer_hi": "where",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which protocol enables hashing?",
    "question_hi": "Hashing enable करने वाला protocol कौन सा है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword indicates lazy initialization?",
    "question_hi": "Lazy initialization दिखाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["lazy", "delay", "async", "defer"],
    "options_hi": ["lazy", "delay", "async", "defer"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which statement executes code before scope exit?",
    "question_hi": "Scope exit से पहले code execute करने वाला statement कौन सा है?",
    "options_en": ["defer", "finally", "cleanup", "exit"],
    "options_hi": ["defer", "finally", "cleanup", "exit"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword defines a result builder?",
    "question_hi": "Result builder define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@resultBuilder", "@builder", "@viewBuilder", "@compose"],
    "options_hi": ["@resultBuilder", "@builder", "@viewBuilder", "@compose"],
    "answer_en": "@resultBuilder",
    "answer_hi": "@resultBuilder",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which SwiftUI attribute groups multiple views?",
    "question_hi": "Multiple views को group करने के लिए कौन सा SwiftUI attribute उपयोग होता है?",
    "options_en": ["@ViewBuilder", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@ViewBuilder", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@ViewBuilder",
    "answer_hi": "@ViewBuilder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword makes a property read-only outside?",
    "question_hi": "Property को बाहर से read-only बनाने के लिए कौन सा keyword है?",
    "options_en": ["private(set)", "readonly", "final", "static"],
    "options_hi": ["private(set)", "readonly", "final", "static"],
    "answer_en": "private(set)",
    "answer_hi": "private(set)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which SwiftUI property wrapper observes an object?",
    "question_hi": "Object को observe करने के लिए कौन सा property wrapper उपयोग होता है?",
    "options_en": ["@ObservedObject", "@State", "@Binding", "@Environment"],
    "options_hi": ["@ObservedObject", "@State", "@Binding", "@Environment"],
    "answer_en": "@ObservedObject",
    "answer_hi": "@ObservedObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to import a module?",
    "question_hi": "Module import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "include", "require", "using"],
    "options_hi": ["import", "include", "require", "using"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which type represents no return value?",
    "question_hi": "No return value को represent करने वाला type कौन सा है?",
    "options_en": ["Void", "nil", "Empty", "None"],
    "options_hi": ["Void", "nil", "Empty", "None"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword marks a mutating method?",
    "question_hi": "Mutating method को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["mutating", "change", "modify", "update"],
    "options_hi": ["mutating", "change", "modify", "update"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which type supports copy-on-write?",
    "question_hi": "Copy-on-write को support करने वाला type कौन सा है?",
    "options_en": ["Array", "Class", "Actor", "Protocol"],
    "options_hi": ["Array", "Class", "Actor", "Protocol"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which attribute marks main thread execution?",
    "question_hi": "Main thread execution दिखाने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@MainActor", "@MainThread", "@UIActor", "@Thread"],
    "options_hi": ["@MainActor", "@MainThread", "@UIActor", "@Thread"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Swift feature allows protocol inheritance?",
    "question_hi": "Protocol inheritance किस feature से possible है?",
    "options_en": ["Protocol composition", "Struct", "Class", "Enum"],
    "options_hi": ["Protocol composition", "Struct", "Class", "Enum"],
    "answer_en": "Protocol composition",
    "answer_hi": "Protocol composition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which operator compares identity for classes?",
    "question_hi": "Class identity compare करने के लिए कौन सा operator है?",
    "options_en": ["===", "==", "!=", "<>"],
    "options_hi": ["===", "==", "!=", "<>"],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword defines a static property?",
    "question_hi": "Static property define करने के लिए कौन सा keyword है?",
    "options_en": ["static", "class", "fixed", "const"],
    "options_hi": ["static", "class", "fixed", "const"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which SwiftUI container provides navigation?",
    "question_hi": "Navigation के लिए कौन सा SwiftUI container उपयोग होता है?",
    "options_en": ["NavigationStack", "List", "VStack", "ZStack"],
    "options_hi": ["NavigationStack", "List", "VStack", "ZStack"],
    "answer_en": "NavigationStack",
    "answer_hi": "NavigationStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword marks escaping closures?",
    "question_hi": "Escaping closures को mark करने के लिए कौन सा keyword है?",
    "options_en": ["@escaping", "@closure", "@retain", "@async"],
    "options_hi": ["@escaping", "@closure", "@retain", "@async"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift feature enables dependency injection?",
    "question_hi": "Dependency injection को आसान बनाने वाला Swift feature कौन सा है?",
    "options_en": ["Protocols", "Enums", "Tuples", "Extensions"],
    "options_hi": ["Protocols", "Enums", "Tuples", "Extensions"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which property wrapper accesses environment values?",
    "question_hi": "Environment values access करने के लिए कौन सा property wrapper उपयोग होता है?",
    "options_en": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@Environment",
    "answer_hi": "@Environment",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword defines a custom operator?",
    "question_hi": "Custom operator define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["operator", "func", "custom", "define"],
    "options_hi": ["operator", "func", "custom", "define"],
    "answer_en": "operator",
    "answer_hi": "operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Swift feature supports pattern matching with ranges?",
    "question_hi": "Ranges के साथ pattern matching किस feature से होती है?",
    "options_en": ["switch-case", "if-else", "loops", "closures"],
    "options_hi": ["switch-case", "if-else", "loops", "closures"],
    "answer_en": "switch-case",
    "answer_hi": "switch-case",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which attribute marks test methods in Swift?",
    "question_hi": "Swift में test methods को mark करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@Test", "@testable", "@Testing", "@Check"],
    "options_hi": ["@Test", "@testable", "@Testing", "@Check"],
    "answer_en": "@testable",
    "answer_hi": "@testable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which SwiftUI view displays lists of data?",
    "question_hi": "Data की list दिखाने के लिए कौन सा SwiftUI view उपयोग होता है?",
    "options_en": ["List", "ScrollView", "Table", "Grid"],
    "options_hi": ["List", "ScrollView", "Table", "Grid"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift keyword allows conditional compilation?",
    "question_hi": "Conditional compilation के लिए कौन सा Swift keyword उपयोग होता है?",
    "options_en": ["#if", "#define", "#switch", "#when"],
    "options_hi": ["#if", "#define", "#switch", "#when"],
    "answer_en": "#if",
    "answer_hi": "#if",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword marks unavailable APIs?",
    "question_hi": "Unavailable APIs को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@available(*, unavailable)", "@deprecated", "@removed", "@hidden"],
    "options_hi": ["@available(*, unavailable)", "@deprecated", "@removed", "@hidden"],
    "answer_en": "@available(*, unavailable)",
    "answer_hi": "@available(*, unavailable)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Swift feature supports declarative UI?",
    "question_hi": "Declarative UI को support करने वाला Swift feature कौन सा है?",
    "options_en": ["SwiftUI", "UIKit", "CoreGraphics", "AppKit"],
    "options_hi": ["SwiftUI", "UIKit", "CoreGraphics", "AppKit"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword marks a failable initializer?",
    "question_hi": "Failable initializer को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["init?", "init!", "fail", "optional"],
    "options_hi": ["init?", "init!", "fail", "optional"],
    "answer_en": "init?",
    "answer_hi": "init?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Swift type represents a sequence of characters?",
    "question_hi": "Characters की sequence को represent करने वाला Swift type कौन सा है?",
    "options_en": ["String", "Character", "Text", "Array"],
    "options_hi": ["String", "Character", "Text", "Array"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift keyword is used to create a singleton?",
    "question_hi": "Singleton बनाने के लिए Swift में कौन सा keyword उपयोग होता है?",
    "options_en": ["static let", "private init", "final class", "All of these"],
    "options_hi": ["static let", "private init", "final class", "All of these"],
    "answer_en": "All of these",
    "answer_hi": "All of these",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Swift feature supports concurrency?",
    "question_hi": "Concurrency को support करने वाला Swift feature कौन सा है?",
    "options_en": ["async/await", "closures", "protocols", "generics"],
    "options_hi": ["async/await", "closures", "protocols", "generics"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword marks a throwing initializer?",
    "question_hi": "Throwing initializer को mark करने के लिए कौन सा keyword है?",
    "options_en": ["init throws", "throws init", "throw init", "init error"],
    "options_hi": ["init throws", "throws init", "throw init", "init error"],
    "answer_en": "init throws",
    "answer_hi": "init throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Swift feature enforces immutability?",
    "question_hi": "Immutability enforce करने वाला Swift feature कौन सा है?",
    "options_en": ["let", "var", "lazy", "static"],
    "options_hi": ["let", "var", "lazy", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which SwiftUI view arranges views horizontally?",
    "question_hi": "Views को horizontally arrange करने के लिए कौन सा SwiftUI view है?",
    "options_en": ["HStack", "VStack", "ZStack", "List"],
    "options_hi": ["HStack", "VStack", "ZStack", "List"],
    "answer_en": "HStack",
    "answer_hi": "HStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature ensures memory safety?",
    "question_hi": "Memory safety सुनिश्चित करने वाला Swift feature कौन सा है?",
    "options_en": ["ARC", "GC", "Pointers", "Manual memory"],
    "options_hi": ["ARC", "GC", "Pointers", "Manual memory"],
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