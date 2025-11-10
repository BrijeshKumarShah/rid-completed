const questions = [
  { num: 1, question: "Which keyword is used to define a subclass of an abstract class?", options: ["extends", "inherits", "implements", "super"], answer: "extends", attempted: false, selected: "" },
  { num: 2, question: "What is the extension of compiled Java bytecode files?", options: [".java", ".class", ".jar", ".exe"], answer: ".class", attempted: false, selected: "" },
  { num: 3, question: "Which component converts Java source code into bytecode?", options: ["JVM", "JRE", "JIT", "Javac"], answer: "Javac", attempted: false, selected: "" },
  { num: 4, question: "Which keyword is used to stop a thread temporarily?", options: ["pause", "sleep", "wait", "halt"], answer: "sleep", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to define a block that must execute regardless of exception?", options: ["try", "catch", "finally", "throw"], answer: "finally", attempted: false, selected: "" },
  { num: 6, question: "Which of the following represents a valid Java array declaration?", options: ["int arr[];", "int arr;", "arr int[];", "array int;"], answer: "int arr[];", attempted: false, selected: "" },
  { num: 7, question: "Which method can be used to get the current thread in Java?", options: ["Thread.get()", "Thread.run()", "Thread.currentThread()", "Thread.active()"], answer: "Thread.currentThread()", attempted: false, selected: "" },
  { num: 8, question: "Which keyword is used to make a variable belong to the class rather than an instance?", options: ["final", "static", "constant", "shared"], answer: "static", attempted: false, selected: "" },
  { num: 9, question: "Which operator is used to create an instance of a class?", options: ["instanceof", "create", "new", "object"], answer: "new", attempted: false, selected: "" },
  { num: 10, question: "Which collection class allows key-value pairs with duplicate values but unique keys?", options: ["Set", "List", "Map", "Vector"], answer: "Map", attempted: false, selected: "" },
  { num: 11, question: "Which exception is thrown when an array is accessed out of its bounds?", options: ["IOException", "NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 12, question: "Which of these keywords is used for method overloading?", options: ["overload", "override", "sameName", "None of these"], answer: "None of these", attempted: false, selected: "" },
  { num: 13, question: "What is the output type of System.out.println()?", options: ["int", "void", "String", "boolean"], answer: "void", attempted: false, selected: "" },
  { num: 14, question: "Which class provides mathematical functions like sqrt() and pow()?", options: ["System", "Math", "Number", "Calculator"], answer: "Math", attempted: false, selected: "" },
  { num: 15, question: "Which method is called just before an object is garbage collected?", options: ["finalize()", "delete()", "dispose()", "clear()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 16, question: "Which of these is not a valid Java access modifier?", options: ["private", "protected", "default", "external"], answer: "external", attempted: false, selected: "" },
  { num: 17, question: "Which keyword is used to define a method that must be implemented by subclasses?", options: ["final", "static", "abstract", "implements"], answer: "abstract", attempted: false, selected: "" },
  { num: 18, question: "What is the parent package of all Java packages?", options: ["java", "lang", "util", "root"], answer: "java", attempted: false, selected: "" },
  { num: 19, question: "Which statement is used to throw an exception manually?", options: ["throws", "throw", "raise", "error"], answer: "throw", attempted: false, selected: "" },
  { num: 20, question: "Which of these allows dynamic method dispatch in Java?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], answer: "Polymorphism", attempted: false, selected: "" },
  { num: 21, question: "Which of these keywords is used to refer to the superclass version of a variable or method?", options: ["this", "super", "extends", "parent"], answer: "super", attempted: false, selected: "" },
  { num: 22, question: "Which interface is used to iterate over a collection?", options: ["Iterator", "Iterable", "Loop", "Collection"], answer: "Iterator", attempted: false, selected: "" },
  { num: 23, question: "Which class is the root of the Java exception hierarchy?", options: ["Throwable", "Exception", "Error", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },
  { num: 24, question: "Which keyword is used to make a class unmodifiable?", options: ["static", "final", "sealed", "const"], answer: "final", attempted: false, selected: "" },
  { num: 25, question: "Which operator is used for bitwise OR in Java?", options: ["||", "|", "or", "&&"], answer: "|", attempted: false, selected: "" },
  { num: 26, question: "Which function is used to find the absolute value of a number?", options: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.positive()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 27, question: "Which of these is not a valid String method?", options: ["concat()", "length()", "append()", "toLowerCase()"], answer: "append()", attempted: false, selected: "" },
  { num: 28, question: "Which class is used to take formatted input from console?", options: ["Scanner", "BufferedReader", "Console", "InputReader"], answer: "Scanner", attempted: false, selected: "" },
  { num: 29, question: "Which keyword is used to create a thread by implementing an interface?", options: ["Runnable", "Thread", "Executor", "Task"], answer: "Runnable", attempted: false, selected: "" },
  { num: 30, question: "Which type of variable is shared among all instances of a class?", options: ["local", "instance", "static", "final"], answer: "static", attempted: false, selected: "" },
  { num: 31, question: "Which method of Object class is used to compare two objects?", options: ["equals()", "compare()", "==", "isEqual()"], answer: "equals()", attempted: false, selected: "" },
  { num: 32, question: "Which Java operator is used for conditional branching?", options: ["?", ":", "?:", "->"], answer: "?:", attempted: false, selected: "" },
  { num: 33, question: "Which keyword prevents a variable from being changed once initialized?", options: ["static", "final", "const", "volatile"], answer: "final", attempted: false, selected: "" },
  { num: 34, question: "Which keyword is used to catch multiple exceptions together?", options: ["multi", "catch", "multi-catch", "pipe"], answer: "multi-catch", attempted: false, selected: "" },
  { num: 35, question: "Which class provides methods for manipulating arrays?", options: ["Collections", "Arrays", "List", "System"], answer: "Arrays", attempted: false, selected: "" },
  { num: 36, question: "Which method is used to get the current time in milliseconds?", options: ["System.getTime()", "System.nanoTime()", "System.currentTimeMillis()", "Date.now()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },
  { num: 37, question: "Which keyword allows using a class from another package?", options: ["package", "include", "import", "use"], answer: "import", attempted: false, selected: "" },
  { num: 38, question: "Which keyword allows a subclass to access superclass constructors?", options: ["extends", "super", "this", "base"], answer: "super", attempted: false, selected: "" },
  { num: 39, question: "Which method can convert a string to an integer?", options: ["Integer.parseInt()", "String.toInt()", "Integer.value()", "parseInt()"], answer: "Integer.parseInt()", attempted: false, selected: "" },
  { num: 40, question: "Which Java concept is achieved using interfaces?", options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"], answer: "Abstraction", attempted: false, selected: "" },
  { num: 41, question: "Which of these methods belongs to the Thread class?", options: ["run()", "execute()", "start()", "both run() and start()"], answer: "both run() and start()", attempted: false, selected: "" },
  { num: 42, question: "Which keyword is used to indicate that a method cannot be overridden?", options: ["final", "static", "const", "sealed"], answer: "final", attempted: false, selected: "" },
  { num: 43, question: "Which class is used to store elements in key-value format maintaining insertion order?", options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 44, question: "Which of these is not a valid collection type?", options: ["List", "Set", "Map", "Record"], answer: "Record", attempted: false, selected: "" },
  { num: 45, question: "Which keyword is used to prevent inheritance of a class?", options: ["static", "final", "sealed", "abstract"], answer: "final", attempted: false, selected: "" },
  { num: 46, question: "Which method is used to find the character at a given index in a string?", options: ["charAt()", "getChar()", "indexOf()", "charOf()"], answer: "charAt()", attempted: false, selected: "" },
  { num: 47, question: "Which operator is used to perform a ternary operation?", options: ["if-else", "?:", "&&", "||"], answer: "?:", attempted: false, selected: "" },
  { num: 48, question: "Which keyword is used to synchronize a method?", options: ["sync", "synchronized", "locked", "threadsafe"], answer: "synchronized", attempted: false, selected: "" },
  { num: 49, question: "Which method is called automatically when an object is printed?", options: ["print()", "toString()", "display()", "getInfo()"], answer: "toString()", attempted: false, selected: "" },
  { num: 50, question: "Which keyword is used to define a nested class?", options: ["inner", "nested", "class", "None of these"], answer: "class", attempted: false, selected: "" }
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
