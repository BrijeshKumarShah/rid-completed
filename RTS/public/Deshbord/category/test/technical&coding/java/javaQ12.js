const questions =[
  { num: 1, question: "Which method is called when an object implements AutoCloseable in try-with-resources?", options: ["close()", "finalize()", "destroy()", "cleanup()"], answer: "close()", attempted: false, selected: "" },
  { num: 2, question: "Which happens first during class loading?", options: ["Loading", "Linking", "Initialization", "Execution"], answer: "Loading", attempted: false, selected: "" },
  { num: 3, question: "Which Stream operation is lazy and does not execute until terminal operation?", options: ["Intermediate operations", "Terminal operations", "Collect", "ForEach"], answer: "Intermediate operations", attempted: false, selected: "" },
  { num: 4, question: "Which serialization mechanism allows object versioning?", options: ["Serializable + serialVersionUID", "Externalizable", "Cloneable", "Transient"], answer: "Serializable + serialVersionUID", attempted: false, selected: "" },
  { num: 5, question: "Which method ensures CompletableFuture runs after multiple futures complete?", options: ["allOf()", "anyOf()", "thenRun()", "runAsync()"], answer: "allOf()", attempted: false, selected: "" },
  { num: 6, question: "Which pattern is used for global object access with lazy initialization?", options: ["Singleton", "Factory", "Prototype", "Observer"], answer: "Singleton", attempted: false, selected: "" },
  { num: 7, question: "Which happens when final, static, and instance blocks are used together?", options: ["Static block → Instance block → Constructor", "Final block → Constructor → Static block", "Constructor → Instance block → Static block", "Instance block → Static block → Constructor"], answer: "Static block → Instance block → Constructor", attempted: false, selected: "" },
  { num: 8, question: "Which exception occurs when transient field is accessed after deserialization incorrectly?", options: ["NullPointerException", "IOException", "ClassCastException", "IllegalArgumentException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 9, question: "Which keyword in Java ensures thread safety for method?", options: ["synchronized", "volatile", "atomic", "transient"], answer: "synchronized", attempted: false, selected: "" },
  { num: 10, question: "Which happens if HashMap key hashCode() changes after insertion?", options: ["Key becomes unreachable", "Nothing happens", "Key duplicates", "HashMap crashes"], answer: "Key becomes unreachable", attempted: false, selected: "" },
  { num: 11, question: "Which optional method prevents null access without exception?", options: ["isPresent()", "get()", "orElseThrow()", "ifPresent()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 12, question: "Which method in ForkJoinPool waits for all subtasks recursively?", options: ["join()", "fork()", "invoke()", "submit()"], answer: "join()", attempted: false, selected: "" },
  { num: 13, question: "Which method in Stream avoids boxing for primitive streams?", options: ["mapToInt()", "map()", "flatMap()", "filter()"], answer: "mapToInt()", attempted: false, selected: "" },
  { num: 14, question: "Which exception occurs if ThreadGroup is destroyed while thread is running?", options: ["IllegalThreadStateException", "InterruptedException", "RuntimeException", "ThreadDeath"], answer: "IllegalThreadStateException", attempted: false, selected: "" },
  { num: 15, question: "Which pattern decouples object creation from implementation?", options: ["Factory", "Singleton", "Observer", "Adapter"], answer: "Factory", attempted: false, selected: "" },
  { num: 16, question: "Which method allows stream to reuse elements safely after terminal operation?", options: ["collect()", "map()", "peek()", "none, stream cannot be reused"], answer: "none, stream cannot be reused", attempted: false, selected: "" },
  { num: 17, question: "Which class ensures thread-safe lazy singleton using holder idiom?", options: ["Private static inner class", "Enum Singleton", "Synchronized getInstance", "Double-checked locking"], answer: "Private static inner class", attempted: false, selected: "" },
  { num: 18, question: "Which method prevents serialization of singleton breaking?", options: ["readResolve()", "writeReplace()", "clone()", "finalize()"], answer: "readResolve()", attempted: false, selected: "" },
  { num: 19, question: "Which occurs if synchronized block locks object but throws exception?", options: ["Lock released automatically", "Deadlock occurs", "Lock remains", "RuntimeException thrown"], answer: "Lock released automatically", attempted: false, selected: "" },
  { num: 20, question: "Which annotation allows unchecked warnings to be suppressed?", options: ["@SuppressWarnings(\"unchecked\")", "@Override", "@Deprecated", "@SafeVarargs"], answer: "@SuppressWarnings(\"unchecked\")", attempted: false, selected: "" },
  { num: 21, question: "Which collection is best for high read and occasional writes?", options: ["CopyOnWriteArrayList", "ArrayList", "LinkedList", "Vector"], answer: "CopyOnWriteArrayList", attempted: false, selected: "" },
  { num: 22, question: "Which serialization interface requires custom writeObject/readObject?", options: ["Serializable", "Externalizable", "Cloneable", "AutoCloseable"], answer: "Externalizable", attempted: false, selected: "" },
  { num: 23, question: "Which method ensures correct ordering in priority queues?", options: ["Comparator", "Comparable", "equals()", "hashCode()"], answer: "Comparator", attempted: false, selected: "" },
  { num: 24, question: "Which ThreadPoolExecutor method interrupts idle threads immediately?", options: ["shutdownNow()", "shutdown()", "awaitTermination()", "execute()"], answer: "shutdownNow()", attempted: false, selected: "" },
  { num: 25, question: "Which design pattern allows adding behavior dynamically?", options: ["Decorator", "Strategy", "Proxy", "Adapter"], answer: "Decorator", attempted: false, selected: "" },
  { num: 26, question: "Which method checks if stream contains elements matching predicate?", options: ["anyMatch()", "allMatch()", "noneMatch()", "filter()"], answer: "anyMatch()", attempted: false, selected: "" },
  { num: 27, question: "Which class ensures atomic updates for long values?", options: ["AtomicLong", "LongAdder", "Long", "Integer"], answer: "AtomicLong", attempted: false, selected: "" },
  { num: 28, question: "Which method in Optional executes lambda if value is present?", options: ["ifPresent()", "orElse()", "get()", "orElseGet()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 29, question: "Which collection maintains insertion order and allows nulls?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 30, question: "Which JVM option enables assertions?", options: ["-ea", "-Xmx", "-Xms", "-verbose"], answer: "-ea", attempted: false, selected: "" },
  { num: 31, question: "Which keyword prevents cloning of object?", options: ["final", "private clone()", "abstract", "sealed"], answer: "private clone()", attempted: false, selected: "" },
  { num: 32, question: "Which method in CompletableFuture handles exceptions?", options: ["exceptionally()", "handle()", "thenApply()", "thenAccept()"], answer: "exceptionally()", attempted: false, selected: "" },
  { num: 33, question: "Which method executes after JVM shuts down?", options: ["Runtime.addShutdownHook()", "System.exit()", "finalize()", "close()"], answer: "Runtime.addShutdownHook()", attempted: false, selected: "" },
  { num: 34, question: "Which Stream operation triggers short-circuit evaluation?", options: ["anyMatch()", "map()", "filter()", "flatMap()"], answer: "anyMatch()", attempted: false, selected: "" },
  { num: 35, question: "Which interface allows lambda expression to define single abstract method?", options: ["FunctionalInterface", "Serializable", "Cloneable", "Runnable"], answer: "FunctionalInterface", attempted: false, selected: "" },
  { num: 36, question: "Which exception occurs on invalid format in DateTime parsing?", options: ["DateTimeParseException", "ParseException", "IllegalArgumentException", "IOException"], answer: "DateTimeParseException", attempted: false, selected: "" },
  { num: 37, question: "Which annotation ensures method arguments are not null at runtime?", options: ["@NonNull", "@Override", "@SafeVarargs", "@Deprecated"], answer: "@NonNull", attempted: false, selected: "" },
  { num: 38, question: "Which pattern defers object creation until needed?", options: ["Lazy Initialization", "Singleton", "Factory", "Builder"], answer: "Lazy Initialization", attempted: false, selected: "" },
  { num: 39, question: "Which method avoids deadlock in multiple synchronized blocks?", options: ["lock ordering", "wait()", "notify()", "yield()"], answer: "lock ordering", attempted: false, selected: "" },
  { num: 40, question: "Which collection class supports concurrent addition/removal without locking?", options: ["ConcurrentLinkedQueue", "ArrayList", "LinkedList", "Vector"], answer: "ConcurrentLinkedQueue", attempted: false, selected: "" },
  { num: 41, question: "Which method prevents serialization from creating new instance in singleton?", options: ["readResolve()", "writeReplace()", "clone()", "finalize()"], answer: "readResolve()", attempted: false, selected: "" },
  { num: 42, question: "Which Optional method returns default if value is empty?", options: ["orElse()", "get()", "orElseThrow()", "ifPresent()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 43, question: "Which annotation helps in type-safe varargs?", options: ["@SafeVarargs", "@Override", "@Deprecated", "@FunctionalInterface"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 44, question: "Which class allows fork-join with recursive decomposition?", options: ["ForkJoinTask", "Thread", "Runnable", "ExecutorService"], answer: "ForkJoinTask", attempted: false, selected: "" },
  { num: 45, question: "Which JVM option enables printing compilation details?", options: ["-XX:+PrintCompilation", "-Xmx", "-Xms", "-verbose"], answer: "-XX:+PrintCompilation", attempted: false, selected: "" },
  { num: 46, question: "Which method ensures Optional chaining without NPE?", options: ["map()", "get()", "orElse()", "ifPresent()"], answer: "map()", attempted: false, selected: "" },
  { num: 47, question: "Which collection allows concurrent reads and blocking writes?", options: ["ReadWriteLock with HashMap", "ConcurrentHashMap", "CopyOnWriteArrayList", "Vector"], answer: "ReadWriteLock with HashMap", attempted: false, selected: "" },
  { num: 48, question: "Which keyword prevents serialization using default mechanism?", options: ["transient", "final", "volatile", "static"], answer: "transient", attempted: false, selected: "" },
  { num: 49, question: "Which Stream operation converts elements to a different type?", options: ["map()", "filter()", "flatMap()", "collect()"], answer: "map()", attempted: false, selected: "" },
  { num: 50, question: "Which exception occurs if thread pool task throws exception?", options: ["ExecutionException", "InterruptedException", "RuntimeException", "TimeoutException"], answer: "ExecutionException", attempted: false, selected: "" }
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
