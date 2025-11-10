const questions = 
 [
  { num: 1, question: "Which of the following is not a Java keyword?", options: ["static", "void", "then", "switch"], answer: "then", attempted: false, selected: "" },
  { num: 2, question: "What is the size of a char variable in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], answer: "16 bits", attempted: false, selected: "" },
  { num: 3, question: "Which method is called when an object is created?", options: ["finalize()", "main()", "constructor", "start()"], answer: "constructor", attempted: false, selected: "" },
  { num: 4, question: "Which of these is not a valid access modifier in Java?", options: ["public", "private", "protected", "internal"], answer: "internal", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to prevent inheritance?", options: ["final", "static", "sealed", "const"], answer: "final", attempted: false, selected: "" },
  { num: 6, question: "Which operator is used to compare two values?", options: ["=", "==", "===", "!="], answer: "==", attempted: false, selected: "" },
  { num: 7, question: "Which of the following is not a valid loop in Java?", options: ["for", "foreach", "while", "do-while"], answer: "foreach", attempted: false, selected: "" },
  { num: 8, question: "Which package is automatically imported in every Java program?", options: ["java.util", "java.io", "java.lang", "java.net"], answer: "java.lang", attempted: false, selected: "" },
  { num: 9, question: "Which of the following is used to create a thread?", options: ["Runnable interface", "Thread class", "Both", "None"], answer: "Both", attempted: false, selected: "" },
  { num: 10, question: "Which exception is thrown when dividing by zero?", options: ["ArithmeticException", "NullPointerException", "IOException", "ArrayIndexOutOfBoundsException"], answer: "ArithmeticException", attempted: false, selected: "" },
  { num: 11, question: "Which data type is used to store decimal numbers?", options: ["int", "float", "char", "boolean"], answer: "float", attempted: false, selected: "" },
  { num: 12, question: "What is the default value of a boolean variable?", options: ["true", "false", "0", "null"], answer: "false", attempted: false, selected: "" },
  { num: 13, question: "Which class is the superclass of all classes in Java?", options: ["Object", "Class", "Main", "Base"], answer: "Object", attempted: false, selected: "" },
  { num: 14, question: "Which method must be implemented by all threads?", options: ["run()", "start()", "stop()", "sleep()"], answer: "run()", attempted: false, selected: "" },
  { num: 15, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Verified Mode", "Java Version Manager"], answer: "Java Virtual Machine", attempted: false, selected: "" },
  { num: 16, question: "Which keyword is used to define an abstract class?", options: ["virtual", "abstract", "interface", "base"], answer: "abstract", attempted: false, selected: "" },
  { num: 17, question: "Which collection class allows duplicate elements?", options: ["Set", "List", "Map", "TreeSet"], answer: "List", attempted: false, selected: "" },
  { num: 18, question: "Which method is used to get the length of an array?", options: ["length()", "size()", "length", "getSize()"], answer: "length", attempted: false, selected: "" },
  { num: 19, question: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], answer: "extends", attempted: false, selected: "" },
  { num: 20, question: "Which of these is a marker interface?", options: ["Serializable", "Runnable", "Comparable", "Cloneable"], answer: "Serializable", attempted: false, selected: "" },
  { num: 21, question: "Which of the following can be used to handle exceptions?", options: ["try-catch", "if-else", "for loop", "switch"], answer: "try-catch", attempted: false, selected: "" },
  { num: 22, question: "Which keyword is used to refer to the current object?", options: ["this", "super", "self", "own"], answer: "this", attempted: false, selected: "" },
  { num: 23, question: "Which of these methods is used to start a thread?", options: ["run()", "execute()", "start()", "begin()"], answer: "start()", attempted: false, selected: "" },
  { num: 24, question: "Which of the following is not an OOP principle?", options: ["Inheritance", "Encapsulation", "Abstraction", "Compilation"], answer: "Compilation", attempted: false, selected: "" },
  { num: 25, question: "Which class provides system input and output?", options: ["System", "Scanner", "Console", "Input"], answer: "System", attempted: false, selected: "" },
  { num: 26, question: "Which operator is used to access members of a class?", options: [".", "::", "->", ":"], answer: ".", attempted: false, selected: "" },
  { num: 27, question: "What does the 'break' keyword do in a loop?", options: ["Ends the loop", "Skips one iteration", "Restarts the loop", "None"], answer: "Ends the loop", attempted: false, selected: "" },
  { num: 28, question: "Which method is used to find the length of a string?", options: ["size()", "length()", "getLength()", "len()"], answer: "length()", attempted: false, selected: "" },
  { num: 29, question: "Which of these is not a valid identifier in Java?", options: ["_temp", "1value", "value1", "VALUE"], answer: "1value", attempted: false, selected: "" },
  { num: 30, question: "Which keyword is used to create a subclass?", options: ["extends", "inherits", "derives", "implements"], answer: "extends", attempted: false, selected: "" },
  { num: 31, question: "Which keyword is used to define an interface?", options: ["class", "interface", "implements", "extends"], answer: "interface", attempted: false, selected: "" },
  { num: 32, question: "Which class is used to take input from the user?", options: ["BufferedReader", "Scanner", "InputStream", "Reader"], answer: "Scanner", attempted: false, selected: "" },
  { num: 33, question: "Which keyword is used to create an object?", options: ["create", "new", "make", "build"], answer: "new", attempted: false, selected: "" },
  { num: 34, question: "Which of the following is not a Java feature?", options: ["Object-Oriented", "Platform Dependent", "Portable", "Secure"], answer: "Platform Dependent", attempted: false, selected: "" },
  { num: 35, question: "Which of these is a valid conditional operator?", options: ["?:", "??", "::", "&&"], answer: "?:", attempted: false, selected: "" },
  { num: 36, question: "Which keyword is used to define a constant in Java?", options: ["final", "const", "static", "constant"], answer: "final", attempted: false, selected: "" },
  { num: 37, question: "What is the default value of an int variable?", options: ["0", "null", "undefined", "1"], answer: "0", attempted: false, selected: "" },
  { num: 38, question: "Which of these is a wrapper class?", options: ["Integer", "int", "number", "float"], answer: "Integer", attempted: false, selected: "" },
  { num: 39, question: "Which keyword is used to import packages?", options: ["include", "package", "import", "library"], answer: "import", attempted: false, selected: "" },
  { num: 40, question: "Which of the following is not a control statement?", options: ["if", "switch", "goto", "for"], answer: "goto", attempted: false, selected: "" },
  { num: 41, question: "Which of the following is not a type of constructor?", options: ["Default", "Parameterized", "Copy", "Inline"], answer: "Inline", attempted: false, selected: "" },
  { num: 42, question: "Which keyword is used for memory allocation?", options: ["malloc", "alloc", "new", "allocate"], answer: "new", attempted: false, selected: "" },
  { num: 43, question: "Which of the following statements is true?", options: ["Java is compiled only", "Java is interpreted only", "Java is both compiled and interpreted", "None"], answer: "Java is both compiled and interpreted", attempted: false, selected: "" },
  { num: 44, question: "Which of these allows multiple inheritance?", options: ["Classes", "Interfaces", "Abstract Classes", "None"], answer: "Interfaces", attempted: false, selected: "" },
  { num: 45, question: "Which exception is the parent of all exceptions?", options: ["Throwable", "Exception", "Error", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },
  { num: 46, question: "Which keyword is used to stop a thread?", options: ["stop()", "terminate()", "sleep()", "None"], answer: "None", attempted: false, selected: "" },
  { num: 47, question: "Which of these types cannot be returned by a method?", options: ["int", "float", "class", "constructor"], answer: "constructor", attempted: false, selected: "" },
  { num: 48, question: "Which keyword is used for exception handling?", options: ["try", "catch", "throw", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 49, question: "Which method is automatically called before an object is destroyed?", options: ["finalize()", "delete()", "dispose()", "end()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 50, question: "Which of the following is used to define packages?", options: ["package", "namespace", "import", "module"], answer: "package", attempted: false, selected: "" }
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
