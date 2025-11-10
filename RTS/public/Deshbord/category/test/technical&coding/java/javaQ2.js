const questions = [
  { num: 1, question: "Which data type is used to store true/false values?", options: ["int", "boolean", "char", "float"], answer: "boolean", attempted: false, selected: "" },

  { num: 2, question: "Which of the following is used to declare a variable in Java?", options: ["var", "dim", "let", "int"], answer: "int", attempted: false, selected: "" },

  { num: 3, question: "Which loop executes at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while", attempted: false, selected: "" },

  { num: 4, question: "Which symbol is used for single-line comments?", options: ["//", "/* */", "#", "--"], answer: "//", attempted: false, selected: "" },

  { num: 5, question: "What is the default value of a boolean variable?", options: ["true", "false", "0", "null"], answer: "false", attempted: false, selected: "" },

  { num: 6, question: "Which operator is used for logical AND?", options: ["&", "&&", "||", "|"], answer: "&&", attempted: false, selected: "" },

  { num: 7, question: "Which operator is used to check inequality?", options: ["!=", "==", "=", "<>"], answer: "!=", attempted: false, selected: "" },

  { num: 8, question: "Which of these is a floating-point type?", options: ["int", "double", "char", "boolean"], answer: "double", attempted: false, selected: "" },

  { num: 9, question: "Which statement is used to exit a loop?", options: ["exit", "break", "continue", "stop"], answer: "break", attempted: false, selected: "" },

  { num: 10, question: "Which method is used to convert a string to integer?", options: ["Integer.parseInt()", "String.toInt()", "Integer.valueOf()", "int.parse()"], answer: "Integer.parseInt()", attempted: false, selected: "" },

  { num: 11, question: "Which keyword is used to create a subclass?", options: ["inherits", "extends", "super", "implements"], answer: "extends", attempted: false, selected: "" },

  { num: 12, question: "Which type of array stores elements of the same data type?", options: ["Mixed Array", "Object Array", "Primitive Array", "All of these"], answer: "Primitive Array", attempted: false, selected: "" },

  { num: 13, question: "Which of these is a character type?", options: ["int", "double", "char", "boolean"], answer: "char", attempted: false, selected: "" },

  { num: 14, question: "Which of the following is used for reading input from console?", options: ["Scanner", "BufferedReader", "InputStreamReader", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 15, question: "Which keyword is used to prevent inheritance?", options: ["final", "static", "abstract", "sealed"], answer: "final", attempted: false, selected: "" },

  { num: 16, question: "Which method returns the character at a specified index in a string?", options: ["charAt()", "substring()", "getChar()", "indexOf()"], answer: "charAt()", attempted: false, selected: "" },

  { num: 17, question: "Which loop is best when the number of iterations is known?", options: ["for", "while", "do-while", "foreach"], answer: "for", attempted: false, selected: "" },

  { num: 18, question: "Which keyword refers to the parent class object?", options: ["parent", "super", "this", "base"], answer: "super", attempted: false, selected: "" },

  { num: 19, question: "Which method combines two strings?", options: ["concat()", "append()", "merge()", "combine()"], answer: "concat()", attempted: false, selected: "" },

  { num: 20, question: "Which operator is used for remainder calculation?", options: ["%", "/", "*", "mod"], answer: "%", attempted: false, selected: "" },

  { num: 21, question: "Which keyword defines a method that must be implemented by subclasses?", options: ["abstract", "final", "static", "override"], answer: "abstract", attempted: false, selected: "" },

  { num: 22, question: "Which data type can store whole numbers?", options: ["int", "float", "boolean", "char"], answer: "int", attempted: false, selected: "" },

  { num: 23, question: "Which method returns the length of an array?", options: ["length", "length()", "size()", "count()"], answer: "length", attempted: false, selected: "" },

  { num: 24, question: "Which operator is used for string concatenation?", options: ["+", "&", ".", "|"], answer: "+", attempted: false, selected: "" },

  { num: 25, question: "Which exception occurs when dividing by zero?", options: ["ArithmeticException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"], answer: "ArithmeticException", attempted: false, selected: "" },

  { num: 26, question: "Which of the following is an example of a wrapper class?", options: ["Integer", "int", "double", "char"], answer: "Integer", attempted: false, selected: "" },

  { num: 27, question: "Which keyword is used to define a constant?", options: ["final", "static", "const", "immutable"], answer: "final", attempted: false, selected: "" },

  { num: 28, question: "Which method converts a string to uppercase?", options: ["toUpperCase()", "toUpper()", "uppercase()", "convertToUpper()"], answer: "toUpperCase()", attempted: false, selected: "" },

  { num: 29, question: "Which access modifier allows access within the same package?", options: ["default", "private", "public", "protected"], answer: "default", attempted: false, selected: "" },

  { num: 30, question: "Which keyword is used to define an interface?", options: ["interface", "abstract", "class", "implements"], answer: "interface", attempted: false, selected: "" },

  { num: 31, question: "Which method compares two strings for equality?", options: ["equals()", "==", "compare()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },

  { num: 32, question: "Which keyword is used to inherit an interface?", options: ["implements", "extends", "inherits", "super"], answer: "implements", attempted: false, selected: "" },

  { num: 33, question: "Which of the following is used to declare a constant for all objects?", options: ["static final", "final", "const", "immutable"], answer: "static final", attempted: false, selected: "" },

  { num: 34, question: "Which loop is best when the number of iterations is unknown?", options: ["while", "for", "do-while", "foreach"], answer: "while", attempted: false, selected: "" },

  { num: 35, question: "Which keyword prevents a method from being overridden?", options: ["final", "static", "abstract", "sealed"], answer: "final", attempted: false, selected: "" },

  { num: 36, question: "Which class is used to handle exceptions?", options: ["Exception", "Error", "Throwable", "Runtime"], answer: "Exception", attempted: false, selected: "" },

  { num: 37, question: "Which of these is not a primitive type?", options: ["String", "int", "boolean", "char"], answer: "String", attempted: false, selected: "" },

  { num: 38, question: "Which operator is used for increment by 1?", options: ["++", "+", "--", "+="], answer: "++", attempted: false, selected: "" },

  { num: 39, question: "Which method returns a substring of a string?", options: ["substring()", "substr()", "getSubString()", "cut()"], answer: "substring()", attempted: false, selected: "" },

  { num: 40, question: "Which method converts a string to lowercase?", options: ["toLowerCase()", "toLower()", "lowercase()", "convertToLower()"], answer: "toLowerCase()", attempted: false, selected: "" },

  { num: 41, question: "Which type of variable is shared across all objects of a class?", options: ["instance variable", "local variable", "static variable", "parameter"], answer: "static variable", attempted: false, selected: "" },

  { num: 42, question: "Which keyword is used to refer to the current object?", options: ["this", "super", "self", "me"], answer: "this", attempted: false, selected: "" },

  { num: 43, question: "Which keyword is used to refer to the parent class constructor?", options: ["super", "parent", "base", "root"], answer: "super", attempted: false, selected: "" },

  { num: 44, question: "Which method of Thread class is used to pause execution?", options: ["sleep()", "wait()", "stop()", "pause()"], answer: "sleep()", attempted: false, selected: "" },

  { num: 45, question: "Which keyword is used to create an object?", options: ["new", "create", "make", "instance"], answer: "new", attempted: false, selected: "" },

  { num: 46, question: "Which operator is used for multiplication?", options: ["*", "+", "-", "%"], answer: "*", attempted: false, selected: "" },

  { num: 47, question: "Which method returns the index of a character in a string?", options: ["indexOf()", "charAt()", "search()", "find()"], answer: "indexOf()", attempted: false, selected: "" },

  { num: 48, question: "Which of these is used to terminate a program?", options: ["System.exit(0)", "stop()", "exit()", "terminate()"], answer: "System.exit(0)", attempted: false, selected: "" },

  { num: 49, question: "Which keyword is used to define a class?", options: ["class", "define", "object", "struct"], answer: "class", attempted: false, selected: "" },

  { num: 50, question: "Which operator is used for logical OR?", options: ["||", "|", "&&", "&"], answer: "||", attempted: false, selected: "" }
];


let currentQuestion = 0;
function loadQuestion(index) {
    const question = questions[index];

    // Question text
    document.getElementById("question").textContent = question.question;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    // Options
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const checked = question.selected === option ? "checked" : "";
        optionsElement.innerHTML += `<li>
            <input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')" ${checked}>
            ${option}
        </li>`;
    });

    // Agar question visit ho gaya lekin attempt nahi hua
    if (!question.attempted) {
        question.visited = true;
    }

    updateCircles();
}

        function markAttempted(index, selectedAnswer) {
    questions[index].selected = selectedAnswer;
    questions[index].attempted = true; // Attempt flag set
    questions[index].visited = true;   // Visited flag bhi set
    updateCircles();
}


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

        function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";

    questions.forEach((q, i) => {
        let status = "";

        if (i === currentQuestion) {
            status = "active"; // Current question
        } else if (q.attempted) {
            status = "answered"; // Green
        } else if (q.visited) {
            status = "visited"; // White
        } else {
            status = "not-attempted"; // Default gray
        }

        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

        function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };
