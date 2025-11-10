const questions = [
    
  { num: 1, question: "Which keyword is used to create a subclass object in Java?", options: ["new", "extends", "implements", "create"], answer: "new", attempted: false, selected: "" },

  { num: 2, question: "Which method is used to print output to the console?", options: ["print()", "display()", "show()", "echo()"], answer: "print()", attempted: false, selected: "" },

  { num: 3, question: "What is the default value of an int variable in Java?", options: ["0", "1", "null", "undefined"], answer: "0", attempted: false, selected: "" },

  { num: 4, question: "Which keyword is used to define a constructor?", options: ["constructor", "init", "same as class name", "function"], answer: "same as class name", attempted: false, selected: "" },

  { num: 5, question: "Which keyword is used to exit from the current method?", options: ["stop", "break", "return", "exit"], answer: "return", attempted: false, selected: "" },

  { num: 6, question: "Which loop executes zero or more times based on a condition?", options: ["for", "while", "do-while", "foreach"], answer: "while", attempted: false, selected: "" },

  { num: 7, question: "Which operator is used to increment value by one?", options: ["++", "+", "+=", "--"], answer: "++", attempted: false, selected: "" },

  { num: 8, question: "Which method converts string to character array?", options: ["toCharArray()", "getChars()", "split()", "charArray()"], answer: "toCharArray()", attempted: false, selected: "" },

  { num: 9, question: "Which keyword is used to refer to immediate parent class?", options: ["super", "this", "parent", "extends"], answer: "super", attempted: false, selected: "" },

  { num: 10, question: "Which class is the base of all exceptions in Java?", options: ["Exception", "Throwable", "Error", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },

  { num: 11, question: "Which block handles exceptions in Java?", options: ["handle", "catch", "try", "error"], answer: "catch", attempted: false, selected: "" },

  { num: 12, question: "Which of these is not a valid return type in Java?", options: ["void", "int", "real", "boolean"], answer: "real", attempted: false, selected: "" },

  { num: 13, question: "Which keyword is used to define an interface method without a body?", options: ["abstract", "interface", "virtual", "none"], answer: "abstract", attempted: false, selected: "" },

  { num: 14, question: "Which collection class stores key-value pairs?", options: ["List", "Map", "Set", "Queue"], answer: "Map", attempted: false, selected: "" },

  { num: 15, question: "Which exception is thrown when array index is invalid?", options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IOException", "ClassNotFoundException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },

  { num: 16, question: "Which keyword is used to prevent subclassing of a class?", options: ["final", "private", "sealed", "static"], answer: "final", attempted: false, selected: "" },

  { num: 17, question: "Which operator is used for division?", options: ["/", "%", "*", "-"], answer: "/", attempted: false, selected: "" },

  { num: 18, question: "Which data type is used to store decimal values?", options: ["float", "int", "boolean", "char"], answer: "float", attempted: false, selected: "" },

  { num: 19, question: "Which method is called automatically when an object is created?", options: ["main()", "constructor", "init()", "create()"], answer: "constructor", attempted: false, selected: "" },

  { num: 20, question: "Which operator is used to access members of a class?", options: [".", "->", "::", ":"], answer: ".", attempted: false, selected: "" },

  { num: 21, question: "Which class is the parent of all exception classes?", options: ["Throwable", "Exception", "RuntimeException", "Error"], answer: "Throwable", attempted: false, selected: "" },

  { num: 22, question: "Which keyword is used to create a subclass relationship?", options: ["extends", "implements", "super", "inherits"], answer: "extends", attempted: false, selected: "" },

  { num: 23, question: "Which loop can iterate through arrays easily?", options: ["foreach", "while", "for", "do-while"], answer: "foreach", attempted: false, selected: "" },

  { num: 24, question: "Which operator performs logical NOT operation?", options: ["!", "||", "&&", "!="], answer: "!", attempted: false, selected: "" },

  { num: 25, question: "Which keyword is used for method overriding?", options: ["@Override", "extends", "inherit", "super"], answer: "@Override", attempted: false, selected: "" },

  { num: 26, question: "Which method is used to find maximum of two numbers?", options: ["Math.max()", "Math.min()", "Math.abs()", "Math.pow()"], answer: "Math.max()", attempted: false, selected: "" },

  { num: 27, question: "Which method converts a number to a string?", options: ["String.valueOf()", "Integer.toString()", "toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 28, question: "Which operator checks whether an object is of a certain type?", options: ["instanceof", "type", "is", "equals"], answer: "instanceof", attempted: false, selected: "" },

  { num: 29, question: "Which method is used to get current system time?", options: ["System.currentTimeMillis()", "System.getTime()", "Date.now()", "Clock.now()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },

  { num: 30, question: "Which keyword is used to define a variable constant?", options: ["final", "const", "static", "sealed"], answer: "final", attempted: false, selected: "" },

  { num: 31, question: "Which statement is used to skip current iteration?", options: ["skip", "next", "continue", "break"], answer: "continue", attempted: false, selected: "" },

  { num: 32, question: "Which class is used for mathematical operations?", options: ["Math", "Number", "Calculator", "Arithmetic"], answer: "Math", attempted: false, selected: "" },

  { num: 33, question: "Which keyword makes a variable belong to a class?", options: ["static", "final", "public", "constant"], answer: "static", attempted: false, selected: "" },

  { num: 34, question: "Which exception occurs when a null object is accessed?", options: ["NullPointerException", "IOException", "ClassCastException", "RuntimeException"], answer: "NullPointerException", attempted: false, selected: "" },

  { num: 35, question: "Which data structure uses LIFO order?", options: ["Stack", "Queue", "ArrayList", "LinkedList"], answer: "Stack", attempted: false, selected: "" },

  { num: 36, question: "Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "cut()", "clean()"], answer: "trim()", attempted: false, selected: "" },

  { num: 37, question: "Which keyword is used to handle multiple exceptions?", options: ["multi-catch", "catch", "throws", "try-catch"], answer: "multi-catch", attempted: false, selected: "" },

  { num: 38, question: "Which operator performs bitwise AND?", options: ["&", "&&", "|", "^"], answer: "&", attempted: false, selected: "" },

  { num: 39, question: "Which class is used to read input from console?", options: ["Scanner", "BufferedReader", "InputStreamReader", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 40, question: "Which keyword is used to import user-defined packages?", options: ["import", "package", "include", "require"], answer: "import", attempted: false, selected: "" },

  { num: 41, question: "Which operator performs modulus operation?", options: ["%", "/", "*", "-"], answer: "%", attempted: false, selected: "" },

  { num: 42, question: "Which loop runs indefinitely if condition never becomes false?", options: ["while", "for", "do-while", "any loop"], answer: "while", attempted: false, selected: "" },

  { num: 43, question: "Which method is used to pause a thread temporarily?", options: ["sleep()", "wait()", "stop()", "suspend()"], answer: "sleep()", attempted: false, selected: "" },

  { num: 44, question: "Which keyword is used to declare a variable inside a class but outside methods?", options: ["instance", "field", "class", "none of these"], answer: "instance", attempted: false, selected: "" },

  { num: 45, question: "Which exception occurs when dividing a number by zero?", options: ["ArithmeticException", "IOException", "NullPointerException", "ClassCastException"], answer: "ArithmeticException", attempted: false, selected: "" },

  { num: 46, question: "Which keyword is used to throw an exception manually?", options: ["throw", "throws", "error", "raise"], answer: "throw", attempted: false, selected: "" },

  { num: 47, question: "Which keyword is used to declare a method without implementation?", options: ["abstract", "final", "static", "default"], answer: "abstract", attempted: false, selected: "" },

  { num: 48, question: "Which interface provides the compare() method?", options: ["Comparator", "Comparable", "Iterable", "Cloneable"], answer: "Comparator", attempted: false, selected: "" },

  { num: 49, question: "Which class is used to work with dates?", options: ["Date", "Calendar", "Time", "Schedule"], answer: "Date", attempted: false, selected: "" },

  { num: 50, question: "Which method converts lowercase to uppercase in a string?", options: ["toUpperCase()", "upper()", "capitalize()", "changeCase()"], answer: "toUpperCase()", attempted: false, selected: "" }
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
