const questions = [
  { num: 1, question: "Which keyword is used to define a class in Java?", options: ["define", "class", "struct", "object"], answer: "class", attempted: false, selected: "" },

  { num: 2, question: "Which of the following is not a primitive data type in Java?", options: ["int", "float", "String", "boolean"], answer: "String", attempted: false, selected: "" },

  { num: 3, question: "What is the entry point of a Java program?", options: ["start()", "main()", "execute()", "run()"], answer: "main()", attempted: false, selected: "" },

  { num: 4, question: "Which symbol is used to terminate a statement in Java?", options: [";", ":", ".", ","], answer: ";", attempted: false, selected: "" },

  { num: 5, question: "Which keyword is used to inherit a class in Java?", options: ["inherits", "extends", "implements", "super"], answer: "extends", attempted: false, selected: "" },

  { num: 6, question: "Which class is used to take input from the user in Java?", options: ["BufferedReader", "Scanner", "InputStream", "DataReader"], answer: "Scanner", attempted: false, selected: "" },

  { num: 7, question: "Which of the following is not a valid access modifier?", options: ["public", "private", "protected", "global"], answer: "global", attempted: false, selected: "" },

  { num: 8, question: "Which operator is used for equality comparison?", options: ["=", "==", "!=", "==="], answer: "==", attempted: false, selected: "" },

  { num: 9, question: "What is used to create objects in Java?", options: ["new", "create", "make", "instance"], answer: "new", attempted: false, selected: "" },

  { num: 10, question: "Which of the following loops is entry-controlled?", options: ["do-while", "for", "while", "both b and c"], answer: "both b and c", attempted: false, selected: "" },

  { num: 11, question: "Which keyword is used to stop loop execution?", options: ["exit", "stop", "break", "return"], answer: "break", attempted: false, selected: "" },

  { num: 12, question: "Which method is used to compare two strings?", options: ["equals()", "==", "compare()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },

  { num: 13, question: "Which package is automatically imported in every Java program?", options: ["java.io", "java.util", "java.lang", "java.net"], answer: "java.lang", attempted: false, selected: "" },

  { num: 14, question: "Which keyword is used to define a constant variable?", options: ["final", "static", "constant", "const"], answer: "final", attempted: false, selected: "" },

  { num: 15, question: "Which method is used to get the length of a string?", options: ["len()", "length()", "size()", "count()"], answer: "length()", attempted: false, selected: "" },

  { num: 16, question: "Which statement always executes after try and catch blocks?", options: ["end", "finally", "exit", "default"], answer: "finally", attempted: false, selected: "" },

  { num: 17, question: "Which keyword is used to handle exceptions?", options: ["error", "catch", "try", "Both try and catch"], answer: "Both try and catch", attempted: false, selected: "" },

  { num: 18, question: "Which of these is not an OOP concept?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: "Compilation", attempted: false, selected: "" },

  { num: 19, question: "What is the parent class of all classes in Java?", options: ["Base", "Object", "Core", "Root"], answer: "Object", attempted: false, selected: "" },

  { num: 20, question: "Which keyword is used to inherit an interface?", options: ["extends", "implements", "inherits", "super"], answer: "implements", attempted: false, selected: "" },

  { num: 21, question: "Which method must be in every Java application?", options: ["start()", "run()", "main()", "execute()"], answer: "main()", attempted: false, selected: "" },

  { num: 22, question: "What is the size of int in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"], answer: "4 bytes", attempted: false, selected: "" },

  { num: 23, question: "Which of the following is used for comments in Java?", options: ["//", "#", "<!-- -->", "/* */"], answer: "//", attempted: false, selected: "" },

  { num: 24, question: "Which keyword refers to the current object?", options: ["self", "this", "super", "own"], answer: "this", attempted: false, selected: "" },

  { num: 25, question: "Which keyword calls the parent class constructor?", options: ["parent", "base", "super", "root"], answer: "super", attempted: false, selected: "" },

  { num: 26, question: "Which of these is not a valid identifier?", options: ["_value", "value1", "1value", "value_"], answer: "1value", attempted: false, selected: "" },

  { num: 27, question: "Which collection class allows duplicates?", options: ["Set", "List", "Map", "TreeSet"], answer: "List", attempted: false, selected: "" },

  { num: 28, question: "Which collection does not allow duplicates?", options: ["ArrayList", "HashSet", "LinkedList", "Vector"], answer: "HashSet", attempted: false, selected: "" },

  { num: 29, question: "Which keyword is used to make a method belong to a class rather than an object?", options: ["static", "public", "final", "constant"], answer: "static", attempted: false, selected: "" },

  { num: 30, question: "Which interface must be implemented for multithreading?", options: ["Runnable", "Threadable", "Executable", "Task"], answer: "Runnable", attempted: false, selected: "" },

  { num: 31, question: "Which method starts a thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()", attempted: false, selected: "" },

  { num: 32, question: "Which keyword is used for synchronization?", options: ["sync", "locked", "synchronized", "threadsafe"], answer: "synchronized", attempted: false, selected: "" },

  { num: 33, question: "Which keyword prevents method overriding?", options: ["final", "private", "protected", "static"], answer: "final", attempted: false, selected: "" },

  { num: 34, question: "Which class is used for file operations in Java?", options: ["File", "FileReader", "FileWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 35, question: "Which method reads a single character from a file?", options: ["readChar()", "read()", "getChar()", "nextChar()"], answer: "read()", attempted: false, selected: "" },

  { num: 36, question: "Which keyword is used to define an abstract class?", options: ["abstract", "virtual", "interface", "class"], answer: "abstract", attempted: false, selected: "" },

  { num: 37, question: "Which keyword defines an interface?", options: ["interface", "implements", "abstract", "protocol"], answer: "interface", attempted: false, selected: "" },

  { num: 38, question: "Which collection class is synchronized?", options: ["ArrayList", "HashMap", "Vector", "HashSet"], answer: "Vector", attempted: false, selected: "" },

  { num: 39, question: "Which of these is checked exception?", options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], answer: "IOException", attempted: false, selected: "" },

  { num: 40, question: "What will System.exit(0) do?", options: ["Terminates JVM", "Pauses JVM", "Restarts JVM", "Throws error"], answer: "Terminates JVM", attempted: false, selected: "" },

  { num: 41, question: "Which keyword is used to define packages in Java?", options: ["package", "namespace", "include", "import"], answer: "package", attempted: false, selected: "" },

  { num: 42, question: "Which keyword is used to import packages?", options: ["import", "include", "use", "load"], answer: "import", attempted: false, selected: "" },

  { num: 43, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Version Manager", "Java Value Machine", "Java Variable Manager"], answer: "Java Virtual Machine", attempted: false, selected: "" },

  { num: 44, question: "Which method is used to find array length?", options: ["length()", "size()", "count()", "len()"], answer: "length()", attempted: false, selected: "" },

  { num: 45, question: "Which operator is used to concatenate strings?", options: ["+", "&", ".", "concat"], answer: "+", attempted: false, selected: "" },

  { num: 46, question: "Which exception is thrown when dividing by zero?", options: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"], answer: "ArithmeticException", attempted: false, selected: "" },

  { num: 47, question: "Which keyword is used to create an enumeration?", options: ["enum", "enumerate", "define", "type"], answer: "enum", attempted: false, selected: "" },

  { num: 48, question: "Which method is used to pause a thread?", options: ["wait()", "sleep()", "stop()", "delay()"], answer: "sleep()", attempted: false, selected: "" },

  { num: 49, question: "Which collection stores unique elements in sorted order?", options: ["HashSet", "TreeSet", "LinkedList", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },

  { num: 50, question: "Which collection maintains insertion order and no duplicates?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" }
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
