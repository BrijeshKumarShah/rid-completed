const questions=[
  { num: 1, question: "Which JVM memory area stores class metadata?", options: ["Metaspace", "Heap", "Stack", "PermGen"], answer: "Metaspace", attempted: false, selected: "" },
  { num: 2, question: "Which type of reference allows GC to reclaim object eagerly?", options: ["PhantomReference", "WeakReference", "SoftReference", "StrongReference"], answer: "PhantomReference", attempted: false, selected: "" },
  { num: 3, question: "Which exception is thrown when ClassCast fails at runtime?", options: ["ClassCastException", "IllegalArgumentException", "TypeMismatchException", "RuntimeException"], answer: "ClassCastException", attempted: false, selected: "" },
  { num: 4, question: "Which method is called when an object is garbage collected?", options: ["finalize()", "destroy()", "cleanup()", "delete()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 5, question: "Which classloader loads classes from JDK internal classes?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 6, question: "Which method in ThreadPoolExecutor prevents new tasks from being submitted?", options: ["shutdown()", "shutdownNow()", "awaitTermination()", "terminate()"], answer: "shutdown()", attempted: false, selected: "" },
  { num: 7, question: "Which keyword ensures a variable is visible across threads?", options: ["volatile", "synchronized", "transient", "final"], answer: "volatile", attempted: false, selected: "" },
  { num: 8, question: "Which type of exception is not required to be caught or declared?", options: ["Unchecked Exception", "Checked Exception", "IOException", "SQLException"], answer: "Unchecked Exception", attempted: false, selected: "" },
  { num: 9, question: "Which method throws InterruptedException?", options: ["Thread.sleep()", "System.gc()", "Thread.yield()", "Object.wait()"], answer: "Object.wait()", attempted: false, selected: "" },
  { num: 10, question: "Which collection prevents concurrent modification exceptions?", options: ["CopyOnWriteArrayList", "ArrayList", "LinkedList", "HashSet"], answer: "CopyOnWriteArrayList", attempted: false, selected: "" },
  { num: 11, question: "Which type of nested class cannot access instance members of outer class?", options: ["Static Nested Class", "Inner Class", "Anonymous Class", "Local Class"], answer: "Static Nested Class", attempted: false, selected: "" },
  { num: 12, question: "Which annotation ensures a method overrides parent method?", options: ["@Override", "@Deprecated", "@FunctionalInterface", "@SafeVarargs"], answer: "@Override", attempted: false, selected: "" },
  { num: 13, question: "Which method in Runtime executes system commands?", options: ["exec()", "run()", "start()", "system()"], answer: "exec()", attempted: false, selected: "" },
  { num: 14, question: "Which class ensures thread-safe increment of integers?", options: ["AtomicInteger", "Integer", "LongAdder", "AtomicLong"], answer: "AtomicInteger", attempted: false, selected: "" },
  { num: 15, question: "Which keyword prevents method overriding but allows overloading?", options: ["final", "static", "abstract", "synchronized"], answer: "final", attempted: false, selected: "" },
  { num: 16, question: "Which collection is designed for high concurrency and non-blocking reads?", options: ["ConcurrentHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 17, question: "Which type of exception occurs when null is used in equals method?", options: ["NullPointerException", "IllegalArgumentException", "ClassCastException", "ArithmeticException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 18, question: "Which Java 8 feature allows method reference syntax?", options: ["Lambda Expressions", "Streams", "Optional", "Annotations"], answer: "Lambda Expressions", attempted: false, selected: "" },
  { num: 19, question: "Which method throws ConcurrentModificationException?", options: ["Iterator.next()", "List.get()", "Set.add()", "Map.put()"], answer: "Iterator.next()", attempted: false, selected: "" },
  { num: 20, question: "Which annotation processes code at compile time?", options: ["Annotation Processing Tool", "@Override", "@Deprecated", "@FunctionalInterface"], answer: "Annotation Processing Tool", attempted: false, selected: "" },
  { num: 21, question: "Which collection allows null values but not null keys?", options: ["Hashtable", "HashMap", "ConcurrentHashMap", "TreeMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 22, question: "Which method is used to start daemon thread?", options: ["setDaemon(true) + start()", "start()", "run()", "execute()"], answer: "setDaemon(true) + start()", attempted: false, selected: "" },
  { num: 23, question: "Which method in StringBuilder deletes characters?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 24, question: "Which JVM area stores local variables of method calls?", options: ["Stack", "Heap", "Metaspace", "Code Cache"], answer: "Stack", attempted: false, selected: "" },
  { num: 25, question: "Which exception occurs on invalid format in Scanner?", options: ["InputMismatchException", "NumberFormatException", "ParseException", "IOException"], answer: "InputMismatchException", attempted: false, selected: "" },
  { num: 26, question: "Which type of lock allows multiple readers but one writer?", options: ["ReadWriteLock", "ReentrantLock", "ReentrantReadLock", "Semaphore"], answer: "ReadWriteLock", attempted: false, selected: "" },
  { num: 27, question: "Which JVM phase converts bytecode to native code?", options: ["Just-In-Time Compilation", "Class Loading", "Linking", "Verification"], answer: "Just-In-Time Compilation", attempted: false, selected: "" },
  { num: 28, question: "Which generic type declaration is correct?", options: ["List<String>", "List<int>", "List<?>", "List<Object>"], answer: "List<String>", attempted: false, selected: "" },
  { num: 29, question: "Which exception occurs if interrupt() is called on sleeping thread?", options: ["InterruptedException", "IllegalThreadStateException", "TimeoutException", "RuntimeException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 30, question: "Which method in ClassLoader loads class bytes manually?", options: ["defineClass()", "loadClass()", "findClass()", "resolveClass()"], answer: "defineClass()", attempted: false, selected: "" },
  { num: 31, question: "Which keyword ensures compile-time type safety in generics?", options: ["extends", "super", "<?>", "T"], answer: "T", attempted: false, selected: "" },
  { num: 32, question: "Which collection is ideal for LRU cache implementation?", options: ["LinkedHashMap", "HashMap", "TreeMap", "ConcurrentHashMap"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 33, question: "Which method in ThreadPoolExecutor interrupts running tasks?", options: ["shutdownNow()", "shutdown()", "awaitTermination()", "execute()"], answer: "shutdownNow()", attempted: false, selected: "" },
  { num: 34, question: "Which annotation indicates deprecated method usage warning?", options: ["@Deprecated", "@Override", "@SafeVarargs", "@FunctionalInterface"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 35, question: "Which class is used for stack-safe recursion with ForkJoin?", options: ["RecursiveTask", "Thread", "Runnable", "Callable"], answer: "RecursiveTask", attempted: false, selected: "" },
  { num: 36, question: "Which exception occurs if finalize() throws exception?", options: ["Ignored by GC", "RuntimeException", "Error", "IOException"], answer: "Ignored by GC", attempted: false, selected: "" },
  { num: 37, question: "Which keyword ensures a class cannot be subclassed?", options: ["final", "abstract", "sealed", "private"], answer: "final", attempted: false, selected: "" },
  { num: 38, question: "Which type of inner class has no name?", options: ["Anonymous Class", "Static Nested Class", "Local Class", "Inner Class"], answer: "Anonymous Class", attempted: false, selected: "" },
  { num: 39, question: "Which method in Object class compares references only?", options: ["==", "equals()", "compareTo()", "hashCode()"], answer: "==", attempted: false, selected: "" },
  { num: 40, question: "Which exception occurs if array access is invalid?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 41, question: "Which method in CompletableFuture executes task asynchronously?", options: ["supplyAsync()", "runAsync()", "submit()", "execute()"], answer: "supplyAsync()", attempted: false, selected: "" },
  { num: 42, question: "Which memory area stores method bytecode instructions?", options: ["Code Cache", "Heap", "Stack", "Metaspace"], answer: "Code Cache", attempted: false, selected: "" },
  { num: 43, question: "Which exception occurs when accessing volatile variable incorrectly?", options: ["None", "IllegalMonitorStateException", "IllegalAccessException", "RuntimeException"], answer: "None", attempted: false, selected: "" },
  { num: 44, question: "Which keyword in generics allows upper-bound type restriction?", options: ["extends", "super", "T", "<?>"], answer: "extends", attempted: false, selected: "" },
  { num: 45, question: "Which annotation documents functional interface intended for lambda?", options: ["@FunctionalInterface", "@Override", "@SafeVarargs", "@Deprecated"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 46, question: "Which method in ThreadPoolExecutor waits for termination?", options: ["awaitTermination()", "shutdown()", "shutdownNow()", "execute()"], answer: "awaitTermination()", attempted: false, selected: "" },
  { num: 47, question: "Which method prevents external modification in unmodifiable collection?", options: ["Collections.unmodifiableList()", "List.copyOf()", "ArrayList()", "LinkedList()"], answer: "Collections.unmodifiableList()", attempted: false, selected: "" },
  { num: 48, question: "Which type of deadlock involves circular waiting?", options: ["Classic Deadlock", "Resource Deadlock", "Starvation", "Livelock"], answer: "Classic Deadlock", attempted: false, selected: "" },
  { num: 49, question: "Which method in ForkJoinPool submits a task recursively?", options: ["invoke()", "submit()", "execute()", "fork()"], answer: "fork()", attempted: false, selected: "" },
  { num: 50, question: "Which JVM option prints GC details?", options: ["-Xlog:gc", "-Xmx", "-Xms", "-XX:+UseG1GC"], answer: "-Xlog:gc", attempted: false, selected: "" }
]


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
