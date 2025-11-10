const questions = 
 [
  { num: 1, question: "Which memory area stores class-level variables and methods?", options: ["Heap", "Stack", "Method Area", "PC Register"], answer: "Method Area", attempted: false, selected: "" },
  { num: 2, question: "Which type of class loader loads classes from JDK libraries?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 3, question: "Which garbage collection algorithm is based on generations?", options: ["Mark and Sweep", "Generational GC", "Reference Counting", "Copying GC"], answer: "Generational GC", attempted: false, selected: "" },
  { num: 4, question: "Which annotation is used to suppress compiler warnings?", options: ["@SuppressWarnings", "@Deprecated", "@SafeVarargs", "@Override"], answer: "@SuppressWarnings", attempted: false, selected: "" },
  { num: 5, question: "Which Java class represents a thread-safe hash map?", options: ["HashMap", "Hashtable", "ConcurrentHashMap", "LinkedHashMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 6, question: "Which design pattern restricts instantiation to a single object?", options: ["Factory", "Singleton", "Builder", "Observer"], answer: "Singleton", attempted: false, selected: "" },
  { num: 7, question: "Which method in Object class is called by JVM before garbage collection?", options: ["finalize()", "destroy()", "cleanup()", "close()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 8, question: "Which keyword ensures that updates to a variable are visible across threads?", options: ["final", "volatile", "synchronized", "static"], answer: "volatile", attempted: false, selected: "" },
  { num: 9, question: "Which of these collections is optimized for fast lookups?", options: ["ArrayList", "HashMap", "LinkedList", "TreeSet"], answer: "HashMap", attempted: false, selected: "" },
  { num: 10, question: "Which design pattern provides a unified interface to a set of interfaces?", options: ["Adapter", "Facade", "Decorator", "Proxy"], answer: "Facade", attempted: false, selected: "" },
  { num: 11, question: "Which Java feature allows immutable objects with builder-like initialization?", options: ["Records", "StringBuilder", "Enums", "Optional"], answer: "Records", attempted: false, selected: "" },
  { num: 12, question: "Which method is used to get the class name at runtime?", options: ["getClassName()", "getName()", "getClass().getName()", "className()"], answer: "getClass().getName()", attempted: false, selected: "" },
  { num: 13, question: "Which type of reference allows GC to reclaim object even if reference exists?", options: ["Strong Reference", "Soft Reference", "Weak Reference", "Phantom Reference"], answer: "Weak Reference", attempted: false, selected: "" },
  { num: 14, question: "Which ExecutorService method waits for all tasks to complete?", options: ["shutdown()", "shutdownNow()", "awaitTermination()", "invokeAll()"], answer: "awaitTermination()", attempted: false, selected: "" },
  { num: 15, question: "Which interface represents a computation that returns a result and may throw exception?", options: ["Runnable", "Callable", "Supplier", "Executor"], answer: "Callable", attempted: false, selected: "" },
  { num: 16, question: "Which method in ThreadPoolExecutor controls number of active threads?", options: ["setCorePoolSize()", "setMaxThreads()", "setActiveCount()", "setThreads()"], answer: "setCorePoolSize()", attempted: false, selected: "" },
  { num: 17, question: "Which pattern separates object creation from its representation?", options: ["Factory", "Builder", "Prototype", "Singleton"], answer: "Builder", attempted: false, selected: "" },
  { num: 18, question: "Which Java feature allows multiple inheritance of behavior but not state?", options: ["Interfaces", "Abstract Classes", "Enums", "Records"], answer: "Interfaces", attempted: false, selected: "" },
  { num: 19, question: "Which of these collections maintain insertion order?", options: ["HashMap", "LinkedHashMap", "TreeMap", "HashSet"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 20, question: "Which annotation marks a deprecated method or class?", options: ["@SuppressWarnings", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 21, question: "Which type of class loader is used to load classes from custom locations?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Custom ClassLoader", attempted: false, selected: "" },
  { num: 22, question: "Which design pattern provides a surrogate or placeholder for another object?", options: ["Proxy", "Adapter", "Decorator", "Facade"], answer: "Proxy", attempted: false, selected: "" },
  { num: 23, question: "Which collection allows fast retrieval of elements in sorted order?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which class allows serialization of object state to byte stream?", options: ["ObjectInputStream", "ObjectOutputStream", "FileOutputStream", "FileReader"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 25, question: "Which Java 9 feature allows immutable collection creation?", options: ["List.of()", "Collections.unmodifiableList()", "Arrays.asList()", "Set.of()"], answer: "List.of()", attempted: false, selected: "" },
  { num: 26, question: "Which pattern defines a family of related objects without specifying concrete classes?", options: ["Abstract Factory", "Factory", "Builder", "Prototype"], answer: "Abstract Factory", attempted: false, selected: "" },
  { num: 27, question: "Which of these is not thread-safe?", options: ["Vector", "ArrayList", "Hashtable", "ConcurrentHashMap"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 28, question: "Which class loader is parent of Extension ClassLoader?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Custom ClassLoader", "None"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 29, question: "Which Java interface is used for observing changes in objects?", options: ["Observer", "Listener", "Callable", "Runnable"], answer: "Observer", attempted: false, selected: "" },
  { num: 30, question: "Which Java collection offers constant-time performance for get and put?", options: ["ArrayList", "HashMap", "LinkedList", "TreeMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 31, question: "Which method of ConcurrentHashMap avoids blocking for reads?", options: ["get()", "put()", "compute()", "replace()"], answer: "get()", attempted: false, selected: "" },
  { num: 32, question: "Which design pattern allows object cloning without coupling to concrete classes?", options: ["Prototype", "Builder", "Factory", "Singleton"], answer: "Prototype", attempted: false, selected: "" },
  { num: 33, question: "Which keyword ensures a class cannot be subclassed?", options: ["final", "abstract", "sealed", "private"], answer: "final", attempted: false, selected: "" },
  { num: 34, question: "Which JVM memory area stores primitive local variables?", options: ["Heap", "Stack", "Method Area", "Native Memory"], answer: "Stack", attempted: false, selected: "" },
  { num: 35, question: "Which interface is used to define natural ordering of objects?", options: ["Comparator", "Comparable", "Iterable", "Cloneable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 36, question: "Which class provides atomic operations for integers?", options: ["AtomicInteger", "Integer", "AtomicLong", "IntegerBuffer"], answer: "AtomicInteger", attempted: false, selected: "" },
  { num: 37, question: "Which annotation enforces that an interface has exactly one abstract method?", options: ["@FunctionalInterface", "@Override", "@Deprecated", "@SafeVarargs"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 38, question: "Which of these prevents a thread from being interrupted?", options: ["join()", "sleep()", "yield()", "Thread.currentThread().interrupt()"], answer: "yield()", attempted: false, selected: "" },
  { num: 39, question: "Which Java collection is most suitable for FIFO order?", options: ["ArrayList", "Stack", "Queue", "TreeSet"], answer: "Queue", attempted: false, selected: "" },
  { num: 40, question: "Which JVM option is used to enable verbose GC logging?", options: ["-verbose", "-Xloggc", "-XX:+PrintGC", "-Xms"], answer: "-Xloggc", attempted: false, selected: "" },
  { num: 41, question: "Which interface defines a comparison function for sorting?", options: ["Comparable", "Comparator", "Iterable", "Cloneable"], answer: "Comparator", attempted: false, selected: "" },
  { num: 42, question: "Which feature of Java supports multi-versioned JARs?", options: ["Modules", "Generics", "Records", "Optional"], answer: "Modules", attempted: false, selected: "" },
  { num: 43, question: "Which collection is backed by a hash table and allows null values?", options: ["HashMap", "Hashtable", "TreeMap", "ConcurrentHashMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 44, question: "Which method ensures atomic read-modify-write operation?", options: ["synchronized block", "AtomicInteger.incrementAndGet()", "volatile", "ReentrantLock"], answer: "AtomicInteger.incrementAndGet()", attempted: false, selected: "" },
  { num: 45, question: "Which class in java.util.concurrent manages a pool of threads?", options: ["ThreadPoolExecutor", "ExecutorService", "ForkJoinPool", "ScheduledThreadPool"], answer: "ThreadPoolExecutor", attempted: false, selected: "" },
  { num: 46, question: "Which type of reference is used to detect object reclamation after GC?", options: ["Soft Reference", "Weak Reference", "Phantom Reference", "Strong Reference"], answer: "Phantom Reference", attempted: false, selected: "" },
  { num: 47, question: "Which keyword in sealed class restricts which classes may extend it?", options: ["permits", "restricts", "extends", "sealed"], answer: "permits", attempted: false, selected: "" },
  { num: 48, question: "Which JVM memory area stores string literals?", options: ["Heap", "Stack", "String Pool", "Method Area"], answer: "String Pool", attempted: false, selected: "" },
  { num: 49, question: "Which method is used to atomically swap variables?", options: ["compareAndSwap()", "swap()", "exchange()", "replace()"], answer: "compareAndSwap()", attempted: false, selected: "" },
  { num: 50, question: "Which annotation indicates that a method parameter can never be null?", options: ["@NonNull", "@Nullable", "@NotNull", "@SafeVarargs"], answer: "@NonNull", attempted: false, selected: "" }
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
