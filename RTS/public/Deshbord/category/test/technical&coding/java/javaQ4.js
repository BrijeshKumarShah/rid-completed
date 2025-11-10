const questions = [
  { num: 1, question: "Which method is used to find the length of a string in Java?", options: ["getSize()", "length()", "size()", "getLength()"], answer: "length()", attempted: false, selected: "" },
  { num: 2, question: "Which of the following is not a keyword in Java?", options: ["static", "Boolean", "final", "super"], answer: "Boolean", attempted: false, selected: "" },
  { num: 3, question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], answer: "false", attempted: false, selected: "" },
  { num: 4, question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "goto", "if-else", "switch"], answer: "try-catch", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to inherit a class in Java?", options: ["inherit", "extends", "implements", "import"], answer: "extends", attempted: false, selected: "" },
  { num: 6, question: "Which operator is used to compare two values in Java?", options: ["=", "==", "equals", "!="], answer: "==", attempted: false, selected: "" },
  { num: 7, question: "What is the size of an int data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes", attempted: false, selected: "" },
  { num: 8, question: "Which of these is a reference data type?", options: ["int", "float", "String", "double"], answer: "String", attempted: false, selected: "" },
  { num: 9, question: "Which keyword is used to define an interface in Java?", options: ["interface", "class", "implements", "extends"], answer: "interface", attempted: false, selected: "" },
  { num: 10, question: "What is the parent class of all classes in Java?", options: ["Parent", "System", "Object", "Class"], answer: "Object", attempted: false, selected: "" },
  { num: 11, question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while", attempted: false, selected: "" },
  { num: 12, question: "Which access modifier makes members accessible only within the same class?", options: ["public", "private", "protected", "default"], answer: "private", attempted: false, selected: "" },
  { num: 13, question: "Which of these is not a valid data type in Java?", options: ["byte", "short", "real", "long"], answer: "real", attempted: false, selected: "" },
  { num: 14, question: "What is used to create an object in Java?", options: ["create", "new", "object", "construct"], answer: "new", attempted: false, selected: "" },
  { num: 15, question: "Which method is called when an object is created?", options: ["main()", "start()", "constructor", "init()"], answer: "constructor", attempted: false, selected: "" },
  { num: 16, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Visual Machine", "Java Variable Model", "Java Version Manager"], answer: "Java Virtual Machine", attempted: false, selected: "" },
  { num: 17, question: "Which of these is not a looping statement?", options: ["for", "while", "repeat", "do-while"], answer: "repeat", attempted: false, selected: "" },
  { num: 18, question: "Which keyword is used to prevent method overriding?", options: ["const", "final", "static", "volatile"], answer: "final", attempted: false, selected: "" },
  { num: 19, question: "Which method is the entry point of any Java program?", options: ["start()", "init()", "run()", "main()"], answer: "main()", attempted: false, selected: "" },
  { num: 20, question: "Which package is imported by default in Java?", options: ["java.io", "java.lang", "java.util", "java.net"], answer: "java.lang", attempted: false, selected: "" },
  { num: 21, question: "Which exception occurs when dividing by zero?", options: ["NullPointerException", "ArithmeticException", "IOException", "RuntimeException"], answer: "ArithmeticException", attempted: false, selected: "" },
  { num: 22, question: "Which of the following is not an OOP concept?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"], answer: "Compilation", attempted: false, selected: "" },
  { num: 23, question: "What does 'this' keyword refer to?", options: ["Current method", "Current class", "Current object", "Parent object"], answer: "Current object", attempted: false, selected: "" },
  { num: 24, question: "Which of these is not a valid identifier in Java?", options: ["myVar", "_data", "$sum", "123abc"], answer: "123abc", attempted: false, selected: "" },
  { num: 25, question: "Which of the following is not a Java feature?", options: ["Object-Oriented", "Platform Dependent", "Secure", "Robust"], answer: "Platform Dependent", attempted: false, selected: "" },
  { num: 26, question: "Which statement is used to exit a loop?", options: ["stop", "exit", "break", "return"], answer: "break", attempted: false, selected: "" },
  { num: 27, question: "Which method is used to compare two strings?", options: ["==", "equals()", "compare()", "match()"], answer: "equals()", attempted: false, selected: "" },
  { num: 28, question: "Which keyword is used to define a constant variable?", options: ["constant", "final", "static", "const"], answer: "final", attempted: false, selected: "" },
  { num: 29, question: "Which operator is used for logical AND?", options: ["&&", "&", "||", "|"], answer: "&&", attempted: false, selected: "" },
  { num: 30, question: "Which collection class does not allow duplicates?", options: ["List", "Map", "Set", "ArrayList"], answer: "Set", attempted: false, selected: "" },
  { num: 31, question: "Which keyword is used to call the parent class constructor?", options: ["this", "parent", "super", "extends"], answer: "super", attempted: false, selected: "" },
  { num: 32, question: "Which of these is not a valid access modifier?", options: ["public", "private", "protected", "friendly"], answer: "friendly", attempted: false, selected: "" },
  { num: 33, question: "Which class is used to handle input from the user?", options: ["Scanner", "Input", "Reader", "Console"], answer: "Scanner", attempted: false, selected: "" },
  { num: 34, question: "Which keyword is used to define a subclass?", options: ["inherits", "extends", "implements", "subclass"], answer: "extends", attempted: false, selected: "" },
  { num: 35, question: "Which method is used to convert string to lowercase?", options: ["toLowerCase()", "lower()", "makeLower()", "convertLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 36, question: "What is the default value of a local variable?", options: ["0", "false", "null", "No default value"], answer: "No default value", attempted: false, selected: "" },
  { num: 37, question: "Which of these is a wrapper class?", options: ["int", "Integer", "float", "char"], answer: "Integer", attempted: false, selected: "" },
  { num: 38, question: "Which keyword is used to create an interface reference?", options: ["interface", "class", "implements", "None of these"], answer: "None of these", attempted: false, selected: "" },
  { num: 39, question: "Which operator is used to access members of a class or object?", options: [".", "->", "::", ":"], answer: ".", attempted: false, selected: "" },
  { num: 40, question: "Which of these can be used to define an abstract method?", options: ["static", "final", "abstract", "private"], answer: "abstract", attempted: false, selected: "" },
  { num: 41, question: "Which of these keywords is used to define a package?", options: ["package", "import", "define", "namespace"], answer: "package", attempted: false, selected: "" },
  { num: 42, question: "Which collection class stores key-value pairs?", options: ["List", "Set", "Map", "ArrayList"], answer: "Map", attempted: false, selected: "" },
  { num: 43, question: "What is the return type of the main() method?", options: ["void", "int", "String", "boolean"], answer: "void", attempted: false, selected: "" },
  { num: 44, question: "Which exception is checked at compile time?", options: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"], answer: "IOException", attempted: false, selected: "" },
  { num: 45, question: "Which keyword is used to import a package?", options: ["import", "package", "include", "require"], answer: "import", attempted: false, selected: "" },
  { num: 46, question: "Which method is used to terminate a thread?", options: ["exit()", "stop()", "destroy()", "terminate()"], answer: "stop()", attempted: false, selected: "" },
  { num: 47, question: "Which of the following is used to generate documentation?", options: ["javac", "javadoc", "java", "jar"], answer: "javadoc", attempted: false, selected: "" },
  { num: 48, question: "Which keyword is used to implement an interface?", options: ["inherit", "extends", "implements", "interface"], answer: "implements", attempted: false, selected: "" },
  { num: 49, question: "Which of these classes is used to read data from a file?", options: ["FileReader", "FileWriter", "BufferedWriter", "PrintWriter"], answer: "FileReader", attempted: false, selected: "" },
  { num: 50, question: "Which keyword is used to define a subclass constructor?", options: ["this", "super", "parent", "inherit"], answer: "super", attempted: false, selected: "" }
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
