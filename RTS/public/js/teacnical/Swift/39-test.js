const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to define a lazy property in Swift?",
    "question_hi": "Swift में lazy property define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["lazy", "delay", "late", "defer"],
    "options_hi": ["lazy", "delay", "late", "defer"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to define a failable initializer?",
    "question_hi": "Swift में failable initializer define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["init?", "init!", "failinit", "optional init"],
    "options_hi": ["init?", "init!", "failinit", "optional init"],
    "answer_en": "init?",
    "answer_hi": "init?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to define a required initializer?",
    "question_hi": "Swift में required initializer define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["required", "mandatory", "force", "initreq"],
    "options_hi": ["required", "mandatory", "force", "initreq"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword delays execution until scope exits?",
    "question_hi": "Swift में scope खत्म होने पर code execute करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["defer", "delay", "wait", "lazy"],
    "options_hi": ["defer", "delay", "wait", "lazy"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which type is used to group multiple values into a single compound value?",
    "question_hi": "Swift में multiple values को एक single value में group करने के लिए कौन-सा type उपयोग होता है?",
    "options_en": ["Tuple", "Array", "Set", "Dictionary"],
    "options_hi": ["Tuple", "Array", "Set", "Dictionary"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which operator is used for range creation?",
    "question_hi": "Swift में range बनाने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["...", "..<", "=>", "??"],
    "options_hi": ["...", "..<", "=>", "??"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator creates a half-open range?",
    "question_hi": "Swift में half-open range बनाने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["..<", "...", "??", "::"],
    "options_hi": ["..<", "...", "??", "::"],
    "answer_en": "..<",
    "answer_hi": "..<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a mutating method in a struct?",
    "question_hi": "Swift में struct के अंदर mutating method define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["mutating", "changing", "modify", "update"],
    "options_hi": ["mutating", "changing", "modify", "update"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to prevent method overriding?",
    "question_hi": "Swift में method overriding रोकने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to define a type alias?",
    "question_hi": "Swift में type alias define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["typealias", "alias", "typedef", "rename"],
    "options_hi": ["typealias", "alias", "typedef", "rename"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which feature allows functions to be passed as arguments?",
    "question_hi": "Swift में functions को argument की तरह pass करने वाला feature कौन-सा है?",
    "options_en": ["Closures", "Protocols", "Extensions", "Enums"],
    "options_hi": ["Closures", "Protocols", "Extensions", "Enums"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to capture values in a closure?",
    "question_hi": "Swift में closure के अंदर values capture करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["capture list", "inout", "weak", "strong"],
    "options_hi": ["capture list", "inout", "weak", "strong"],
    "answer_en": "capture list",
    "answer_hi": "capture list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword prevents strong reference cycles?",
    "question_hi": "Swift में strong reference cycle रोकने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["weak", "strong", "unowned", "retain"],
    "options_hi": ["weak", "strong", "unowned", "retain"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is similar to weak but non-optional?",
    "question_hi": "Swift में weak जैसा लेकिन non-optional reference कौन-सा keyword है?",
    "options_en": ["unowned", "strong", "retain", "safe"],
    "options_hi": ["unowned", "strong", "retain", "safe"],
    "answer_en": "unowned",
    "answer_hi": "unowned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword marks a value parameter as modifiable?",
    "question_hi": "Swift में value parameter को modify करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["inout", "var", "let", "mutating"],
    "options_hi": ["inout", "var", "let", "mutating"],
    "answer_en": "inout",
    "answer_hi": "inout",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which statement checks pattern matching in Swift?",
    "question_hi": "Swift में pattern matching check करने के लिए कौन-सा statement उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to fall through cases in switch?",
    "question_hi": "Swift के switch case में fall through करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["fallthrough", "continue", "break", "next"],
    "options_hi": ["fallthrough", "continue", "break", "next"],
    "answer_en": "fallthrough",
    "answer_hi": "fallthrough",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which protocol enables object copying?",
    "question_hi": "Swift में object copy करने के लिए कौन-सा protocol उपयोग होता है?",
    "options_en": ["NSCopying", "Codable", "Equatable", "Hashable"],
    "options_hi": ["NSCopying", "Codable", "Equatable", "Hashable"],
    "answer_en": "NSCopying",
    "answer_hi": "NSCopying",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which protocol allows JSON encoding and decoding?",
    "question_hi": "Swift में JSON encode/decode करने के लिए कौन-सा protocol उपयोग होता है?",
    "options_en": ["Codable", "Serializable", "Parsable", "JSONable"],
    "options_hi": ["Codable", "Serializable", "Parsable", "JSONable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which protocol allows value comparison?",
    "question_hi": "Swift में values compare करने के लिए कौन-सा protocol उपयोग होता है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Codable"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Codable"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which protocol is required for sorting?",
    "question_hi": "Swift में sorting के लिए कौन-सा protocol जरूरी होता है?",
    "options_en": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "options_hi": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which protocol is required for dictionary keys?",
    "question_hi": "Swift में dictionary key बनने के लिए कौन-सा protocol जरूरी होता है?",
    "options_en": ["Hashable", "Equatable", "Codable", "Comparable"],
    "options_hi": ["Hashable", "Equatable", "Codable", "Comparable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword marks availability checks?",
    "question_hi": "Swift में availability check करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["#available", "#if", "#check", "#version"],
    "options_hi": ["#available", "#if", "#check", "#version"],
    "answer_en": "#available",
    "answer_hi": "#available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for conditional compilation?",
    "question_hi": "Swift में conditional compilation के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["#if", "#available", "#define", "#switch"],
    "options_hi": ["#if", "#available", "#define", "#switch"],
    "answer_en": "#if",
    "answer_hi": "#if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which type represents a sequence of characters?",
    "question_hi": "Swift में characters की sequence को कौन-सा type represent करता है?",
    "options_en": ["String", "Character", "Text", "CharArray"],
    "options_hi": ["String", "Character", "Text", "CharArray"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which type represents a single character?",
    "question_hi": "Swift में single character को कौन-सा type represent करता है?",
    "options_en": ["Character", "String", "Char", "Letter"],
    "options_hi": ["Character", "String", "Char", "Letter"],
    "answer_en": "Character",
    "answer_hi": "Character",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword allows method overloading?",
    "question_hi": "Swift में method overloading किस feature से संभव है?",
    "options_en": ["Same name different parameters", "override", "final", "static"],
    "options_hi": ["Same name different parameters", "override", "final", "static"],
    "answer_en": "Same name different parameters",
    "answer_hi": "Same name different parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword creates a read-only computed property?",
    "question_hi": "Swift में read-only computed property कैसे बनती है?",
    "options_en": ["get", "set", "let", "readonly"],
    "options_hi": ["get", "set", "let", "readonly"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator combines multiple Boolean conditions?",
    "question_hi": "Swift में multiple Boolean conditions जोड़ने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["&&", "||", "!", "??"],
    "options_hi": ["&&", "||", "!", "??"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which operator checks logical OR?",
    "question_hi": "Swift में logical OR check करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["||", "&&", "!", "??"],
    "options_hi": ["||", "&&", "!", "??"],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which operator negates a Boolean value?",
    "question_hi": "Swift में Boolean value को negate करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["!", "&&", "||", "??"],
    "options_hi": ["!", "&&", "||", "??"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which type is used for whole numbers?",
    "question_hi": "Swift में whole numbers के लिए कौन-सा type उपयोग होता है?",
    "options_en": ["Int", "Float", "Double", "Number"],
    "options_hi": ["Int", "Float", "Double", "Number"],
    "answer_en": "Int",
    "answer_hi": "Int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which type stores decimal numbers?",
    "question_hi": "Swift में decimal numbers store करने के लिए कौन-सा type उपयोग होता है?",
    "options_en": ["Double", "Int", "Bool", "String"],
    "options_hi": ["Double", "Int", "Bool", "String"],
    "answer_en": "Double",
    "answer_hi": "Double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which type is more precise for decimals?",
    "question_hi": "Swift में decimals के लिए कौन-सा type ज्यादा precise होता है?",
    "options_en": ["Double", "Float", "Int", "DecimalString"],
    "options_hi": ["Double", "Float", "Int", "DecimalString"],
    "answer_en": "Double",
    "answer_hi": "Double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used to exit a function?",
    "question_hi": "Swift में function से बाहर निकलने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["return", "break", "exit", "stop"],
    "options_hi": ["return", "break", "exit", "stop"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword defines a static property?",
    "question_hi": "Swift में static property define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["static", "class", "final", "shared"],
    "options_hi": ["static", "class", "final", "shared"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword allows class-level properties?",
    "question_hi": "Swift में class-level property के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["class", "static", "final", "open"],
    "options_hi": ["class", "static", "final", "open"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which framework provides basic data types?",
    "question_hi": "Swift में basic data types देने वाला framework कौन-सा है?",
    "options_en": ["Foundation", "UIKit", "SwiftUI", "CoreData"],
    "options_hi": ["Foundation", "UIKit", "SwiftUI", "CoreData"],
    "answer_en": "Foundation",
    "answer_hi": "Foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which framework is used for iOS app lifecycle?",
    "question_hi": "Swift में iOS app lifecycle के लिए कौन-सा framework उपयोग होता है?",
    "options_en": ["UIKit", "Foundation", "CoreML", "AVKit"],
    "options_hi": ["UIKit", "Foundation", "CoreML", "AVKit"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which SwiftUI structure defines a view?",
    "question_hi": "SwiftUI में view define करने के लिए कौन-सा structure उपयोग होता है?",
    "options_en": ["View", "Scene", "Body", "Layout"],
    "options_hi": ["View", "Scene", "Body", "Layout"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which property returns the UI of a SwiftUI view?",
    "question_hi": "SwiftUI view का UI return करने वाली property कौन-सी है?",
    "options_en": ["body", "view", "content", "layout"],
    "options_hi": ["body", "view", "content", "layout"],
    "answer_en": "body",
    "answer_hi": "body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to preview SwiftUI views?",
    "question_hi": "SwiftUI views preview करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["PreviewProvider", "ViewPreview", "Preview", "ShowUI"],
    "options_hi": ["PreviewProvider", "ViewPreview", "Preview", "ShowUI"],
    "answer_en": "PreviewProvider",
    "answer_hi": "PreviewProvider",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword handles navigation in SwiftUI?",
    "question_hi": "SwiftUI में navigation handle करने के लिए कौन-सा view उपयोग होता है?",
    "options_en": ["NavigationStack", "Navigator", "RouteView", "NavView"],
    "options_hi": ["NavigationStack", "Navigator", "RouteView", "NavView"],
    "answer_en": "NavigationStack",
    "answer_hi": "NavigationStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which view arranges items vertically?",
    "question_hi": "SwiftUI में items को vertically arrange करने वाला view कौन-सा है?",
    "options_en": ["VStack", "HStack", "ZStack", "List"],
    "options_hi": ["VStack", "HStack", "ZStack", "List"],
    "answer_en": "VStack",
    "answer_hi": "VStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which view arranges items horizontally?",
    "question_hi": "SwiftUI में items को horizontally arrange करने वाला view कौन-सा है?",
    "options_en": ["HStack", "VStack", "ZStack", "List"],
    "options_hi": ["HStack", "VStack", "ZStack", "List"],
    "answer_en": "HStack",
    "answer_hi": "HStack",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which view overlays items on top of each other?",
    "question_hi": "SwiftUI में items को एक-दूसरे के ऊपर रखने वाला view कौन-सा है?",
    "options_en": ["ZStack", "VStack", "HStack", "Overlay"],
    "options_hi": ["ZStack", "VStack", "HStack", "Overlay"],
    "answer_en": "ZStack",
    "answer_hi": "ZStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which view displays scrollable data?",
    "question_hi": "SwiftUI में scrollable data दिखाने के लिए कौन-सा view उपयोग होता है?",
    "options_en": ["List", "ScrollData", "Table", "DataView"],
    "options_hi": ["List", "ScrollData", "Table", "DataView"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which modifier adds padding around a view?",
    "question_hi": "SwiftUI में view के चारों तरफ padding जोड़ने के लिए कौन-सा modifier उपयोग होता है?",
    "options_en": ["padding()", "margin()", "space()", "gap()"],
    "options_hi": ["padding()", "margin()", "space()", "gap()"],
    "answer_en": "padding()",
    "answer_hi": "padding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which modifier changes text color?",
    "question_hi": "SwiftUI में text का color बदलने के लिए कौन-सा modifier उपयोग होता है?",
    "options_en": ["foregroundColor()", "textColor()", "fontColor()", "color()"],
    "options_hi": ["foregroundColor()", "textColor()", "fontColor()", "color()"],
    "answer_en": "foregroundColor()",
    "answer_hi": "foregroundColor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which modifier changes font size?",
    "question_hi": "SwiftUI में font size बदलने के लिए कौन-सा modifier उपयोग होता है?",
    "options_en": ["font()", "size()", "textSize()", "fontStyle()"],
    "options_hi": ["font()", "size()", "textSize()", "fontStyle()"],
    "answer_en": "font()",
    "answer_hi": "font()",
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