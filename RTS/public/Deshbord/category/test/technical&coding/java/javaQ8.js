const questions = 
 [
  { num: 1, question: "Which of these allows type-safe code reusability in Java?", options: ["Interfaces", "Generics", "Inheritance", "Polymorphism"], answer: "Generics", attempted: false, selected: "" },
  { num: 2, question: "Which functional interface represents a function that accepts one argument and returns a result?", options: ["Consumer", "Supplier", "Function", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 3, question: "Which of these is a valid lambda expression?", options: ["x -> x + 2", "(x) => x + 2;", "x => {x+2}", "lambda x: x+2"], answer: "x -> x + 2", attempted: false, selected: "" },
  { num: 4, question: "Which stream method is used to filter elements based on a condition?", options: ["filter()", "map()", "reduce()", "collect()"], answer: "filter()", attempted: false, selected: "" },
  { num: 5, question: "Which method of Stream is used to transform elements?", options: ["map()", "filter()", "forEach()", "collect()"], answer: "map()", attempted: false, selected: "" },
  { num: 6, question: "Which keyword prevents a variable from being modified once assigned?", options: ["final", "static", "volatile", "const"], answer: "final", attempted: false, selected: "" },
  { num: 7, question: "Which class provides thread-safe dynamic array implementation?", options: ["ArrayList", "Vector", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 8, question: "Which interface provides a mechanism to iterate elements one by one?", options: ["Iterator", "Iterable", "Enumeration", "Collection"], answer: "Iterator", attempted: false, selected: "" },
  { num: 9, question: "Which Java feature is used to achieve runtime polymorphism?", options: ["Method Overloading", "Method Overriding", "Encapsulation", "Abstraction"], answer: "Method Overriding", attempted: false, selected: "" },
  { num: 10, question: "Which of these methods is used to start a thread execution?", options: ["run()", "execute()", "start()", "init()"], answer: "start()", attempted: false, selected: "" },
  { num: 11, question: "Which class is used for reading objects from a file?", options: ["FileReader", "ObjectInputStream", "BufferedReader", "Scanner"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 12, question: "Which exception is thrown when a thread is waiting, sleeping or blocked and another thread interrupts it?", options: ["InterruptedException", "IOException", "IllegalThreadStateException", "ThreadException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 13, question: "Which collection does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 14, question: "Which of the following is a marker interface?", options: ["Serializable", "Comparable", "Runnable", "Cloneable"], answer: "Serializable", attempted: false, selected: "" },
  { num: 15, question: "Which of these is not a valid functional interface in java.util.function?", options: ["Predicate", "Consumer", "Mapper", "Supplier"], answer: "Mapper", attempted: false, selected: "" },
  { num: 16, question: "Which stream terminal operation returns the count of elements?", options: ["count()", "sum()", "collect()", "reduce()"], answer: "count()", attempted: false, selected: "" },
  { num: 17, question: "Which of the following is used to execute multiple threads?", options: ["ExecutorService", "Runnable", "ThreadGroup", "Callable"], answer: "ExecutorService", attempted: false, selected: "" },
  { num: 18, question: "Which of these methods converts a stream to a list?", options: ["toList()", "collect(Collectors.toList())", "list()", "convert()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 19, question: "Which method in the Thread class is used to pause the execution?", options: ["wait()", "sleep()", "stop()", "yield()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 20, question: "Which Java 8 feature allows processing of data in parallel?", options: ["Parallel Streams", "Threads", "ForkJoin", "Lambda"], answer: "Parallel Streams", attempted: false, selected: "" },
  { num: 21, question: "Which keyword is used for exception propagation?", options: ["throws", "throw", "try", "catch"], answer: "throws", attempted: false, selected: "" },
  { num: 22, question: "Which class is used for high-performance random access of large files?", options: ["FileReader", "BufferedReader", "RandomAccessFile", "FileInputStream"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 23, question: "Which of these collections guarantees sorted order?", options: ["HashSet", "TreeSet", "ArrayList", "LinkedList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which method in Stream API is used to remove duplicate elements?", options: ["filter()", "distinct()", "map()", "collect()"], answer: "distinct()", attempted: false, selected: "" },
  { num: 25, question: "Which Java keyword ensures visibility and ordering of variables in threads?", options: ["volatile", "synchronized", "final", "transient"], answer: "volatile", attempted: false, selected: "" },
  { num: 26, question: "Which method in Object class creates and returns a copy of the object?", options: ["copy()", "clone()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 27, question: "Which class is used for handling formatted output?", options: ["Formatter", "PrintStream", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 28, question: "Which of these is a checked exception?", options: ["IOException", "NullPointerException", "ArithmeticException", "RuntimeException"], answer: "IOException", attempted: false, selected: "" },
  { num: 29, question: "Which of the following allows method references?", options: ["Java 8", "Java 7", "Java 5", "Java 6"], answer: "Java 8", attempted: false, selected: "" },
  { num: 30, question: "Which interface does every collection class implement?", options: ["Collection", "Iterable", "Iterator", "Comparator"], answer: "Iterable", attempted: false, selected: "" },
  { num: 31, question: "Which method is used to convert an Optional into a value or default?", options: ["getOrElse()", "orElse()", "value()", "default()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 32, question: "Which of these allows functional-style operations on collections?", options: ["Stream API", "Lambda", "Generics", "Reflection"], answer: "Stream API", attempted: false, selected: "" },
  { num: 33, question: "Which keyword is used to make a method thread-safe?", options: ["volatile", "synchronized", "static", "final"], answer: "synchronized", attempted: false, selected: "" },
  { num: 34, question: "Which class is used for immutable strings?", options: ["String", "StringBuffer", "StringBuilder", "CharArray"], answer: "String", attempted: false, selected: "" },
  { num: 35, question: "Which class provides a dynamic array with synchronized methods?", options: ["ArrayList", "Vector", "HashSet", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 36, question: "Which method in Thread class is used to check if thread is alive?", options: ["isAlive()", "isRunning()", "isStarted()", "exists()"], answer: "isAlive()", attempted: false, selected: "" },
  { num: 37, question: "Which exception is thrown when object serialization fails?", options: ["NotSerializableException", "IOException", "ClassNotFoundException", "RuntimeException"], answer: "NotSerializableException", attempted: false, selected: "" },
  { num: 38, question: "Which package contains collection framework interfaces?", options: ["java.util", "java.io", "java.net", "java.lang"], answer: "java.util", attempted: false, selected: "" },
  { num: 39, question: "Which of the following allows lazy computation in streams?", options: ["Intermediate Operations", "Terminal Operations", "Parallel Streams", "Collectors"], answer: "Intermediate Operations", attempted: false, selected: "" },
  { num: 40, question: "Which method in Stream is used for reduction operation?", options: ["reduce()", "map()", "filter()", "flatMap()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 41, question: "Which feature of Java enables code to discover class information at runtime?", options: ["Reflection", "Serialization", "Encapsulation", "Abstraction"], answer: "Reflection", attempted: false, selected: "" },
  { num: 42, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "Collection", "List"], answer: "Map", attempted: false, selected: "" },
  { num: 43, question: "Which method of Files class reads all lines from a file?", options: ["readLines()", "readAllLines()", "getLines()", "read()"], answer: "readAllLines()", attempted: false, selected: "" },
  { num: 44, question: "Which class in java.time package represents a date without time?", options: ["LocalDate", "LocalTime", "LocalDateTime", "Date"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 45, question: "Which interface provides total ordering on objects?", options: ["Comparable", "Comparator", "Iterable", "ComparatorChain"], answer: "Comparable", attempted: false, selected: "" },
  { num: 46, question: "Which Java feature helps in managing memory automatically?", options: ["Garbage Collection", "Manual Allocation", "Destructor", "Finalizer"], answer: "Garbage Collection", attempted: false, selected: "" },
  { num: 47, question: "Which annotation marks a method that should run after object construction?", options: ["@PostConstruct", "@Init", "@After", "@Construct"], answer: "@PostConstruct", attempted: false, selected: "" },
  { num: 48, question: "Which collection class allows null keys and values?", options: ["HashMap", "TreeMap", "Hashtable", "ConcurrentHashMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 49, question: "Which Java keyword is used to prevent serialization?", options: ["transient", "volatile", "final", "static"], answer: "transient", attempted: false, selected: "" },
  { num: 50, question: "Which method in Thread class waits for another thread to finish?", options: ["wait()", "join()", "sleep()", "yield()"], answer: "join()", attempted: false, selected: "" }
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
