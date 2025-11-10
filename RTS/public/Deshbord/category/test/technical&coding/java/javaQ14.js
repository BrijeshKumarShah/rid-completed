const questions =[
  { num: 1, question: "Which method in Object class returns the hash code of an object?", options: ["hashCode()", "toString()", "equals()", "getClass()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 2, question: "Which interface represents a function with input and output?", options: ["Function", "Consumer", "Supplier", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 3, question: "Which method in Collections sorts list in natural order?", options: ["sort()", "reverse()", "shuffle()", "binarySearch()"], answer: "sort()", attempted: false, selected: "" },
  { num: 4, question: "Which annotation suppresses compiler warnings?", options: ["@SuppressWarnings", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@SuppressWarnings", attempted: false, selected: "" },
  { num: 5, question: "Which method in StringBuilder reverses content?", options: ["reverse()", "invert()", "flip()", "swap()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 6, question: "Which exception occurs when thread pool is exhausted?", options: ["RejectedExecutionException", "InterruptedException", "IllegalStateException", "RuntimeException"], answer: "RejectedExecutionException", attempted: false, selected: "" },
  { num: 7, question: "Which method splits string based on regex?", options: ["split()", "divide()", "partition()", "slice()"], answer: "split()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns unmodifiable view of map?", options: ["Collections.unmodifiableMap()", "Map.of()", "Map.copyOf()", "Both a and c"], answer: "Both a and c", attempted: false, selected: "" },
  { num: 9, question: "Which interface represents operation that accepts two inputs?", options: ["BiConsumer", "Consumer", "Supplier", "Function"], answer: "BiConsumer", attempted: false, selected: "" },
  { num: 10, question: "Which method in Arrays binary search requires sorted array?", options: ["binarySearch()", "search()", "indexOf()", "find()"], answer: "binarySearch()", attempted: false, selected: "" },
  { num: 11, question: "Which annotation marks class as immutable?", options: ["@Immutable", "@FunctionalInterface", "@Deprecated", "@Override"], answer: "@Immutable", attempted: false, selected: "" },
  { num: 12, question: "Which method removes duplicates from Stream?", options: ["distinct()", "unique()", "filter()", "map()"], answer: "distinct()", attempted: false, selected: "" },
  { num: 13, question: "Which interface allows lambda with no arguments and return value?", options: ["Supplier", "Function", "Consumer", "Predicate"], answer: "Supplier", attempted: false, selected: "" },
  { num: 14, question: "Which method joins multiple strings with delimiter?", options: ["String.join()", "concat()", "merge()", "append()"], answer: "String.join()", attempted: false, selected: "" },
  { num: 15, question: "Which method performs action only if Optional has value?", options: ["ifPresent()", "get()", "orElse()", "orElseGet()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 16, question: "Which method in CompletableFuture waits for completion without exception?", options: ["join()", "get()", "complete()", "completeExceptionally()"], answer: "join()", attempted: false, selected: "" },
  { num: 17, question: "Which annotation documents intended API deprecation?", options: ["@Deprecated", "@Override", "@FunctionalInterface", "@SafeVarargs"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 18, question: "Which method in Stream limits number of elements?", options: ["limit()", "skip()", "filter()", "map()"], answer: "limit()", attempted: false, selected: "" },
  { num: 19, question: "Which exception occurs for invalid object deserialization?", options: ["InvalidClassException", "IOException", "ClassNotFoundException", "RuntimeException"], answer: "InvalidClassException", attempted: false, selected: "" },
  { num: 20, question: "Which interface allows lambda with input and boolean return?", options: ["Predicate", "Consumer", "Supplier", "Function"], answer: "Predicate", attempted: false, selected: "" },
  { num: 21, question: "Which method converts primitive stream to boxed Stream?", options: ["boxed()", "map()", "collect()", "flatMap()"], answer: "boxed()", attempted: false, selected: "" },
  { num: 22, question: "Which method removes element from Collection if predicate matches?", options: ["removeIf()", "filter()", "retainAll()", "deleteIf()"], answer: "removeIf()", attempted: false, selected: "" },
  { num: 23, question: "Which collection maintains natural ordering of elements?", options: ["TreeSet", "HashSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which method converts Stream to List?", options: ["collect(Collectors.toList())", "toArray()", "forEach()", "map()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 25, question: "Which exception occurs if Optional.get() is empty?", options: ["NoSuchElementException", "NullPointerException", "IllegalStateException", "RuntimeException"], answer: "NoSuchElementException", attempted: false, selected: "" },
  { num: 26, question: "Which annotation indicates that method parameters can accept null?", options: ["@Nullable", "@NonNull", "@NotNull", "@Deprecated"], answer: "@Nullable", attempted: false, selected: "" },
  { num: 27, question: "Which method returns Set view of keys in Map?", options: ["keySet()", "values()", "entrySet()", "allKeys()"], answer: "keySet()", attempted: false, selected: "" },
  { num: 28, question: "Which interface allows lambda with two inputs and return value?", options: ["BiFunction", "Function", "Consumer", "Supplier"], answer: "BiFunction", attempted: false, selected: "" },
  { num: 29, question: "Which method converts Stream to Map with key mapper?", options: ["Collectors.toMap()", "collect()", "map()", "forEach()"], answer: "Collectors.toMap()", attempted: false, selected: "" },
  { num: 30, question: "Which method returns array of Map entries?", options: ["entrySet().toArray()", "keySet().toArray()", "values().toArray()", "toArray()"], answer: "entrySet().toArray()", attempted: false, selected: "" },
  { num: 31, question: "Which method retrieves last element from Deque?", options: ["getLast()", "peekLast()", "pollLast()", "removeLast()"], answer: "getLast()", attempted: false, selected: "" },
  { num: 32, question: "Which method in Collections rotates list elements?", options: ["rotate()", "shift()", "swap()", "shuffle()"], answer: "rotate()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns sum of IntStream?", options: ["sum()", "reduce()", "collect()", "count()"], answer: "sum()", attempted: false, selected: "" },
  { num: 34, question: "Which method in Arrays fills array with value?", options: ["fill()", "setAll()", "replaceAll()", "copyOf()"], answer: "fill()", attempted: false, selected: "" },
  { num: 35, question: "Which method in ThreadFactory creates new thread?", options: ["newThread()", "createThread()", "startThread()", "execute()"], answer: "newThread()", attempted: false, selected: "" },
  { num: 36, question: "Which method removes element from List by value?", options: ["remove(Object)", "remove(int)", "delete()", "discard()"], answer: "remove(Object)", attempted: false, selected: "" },
  { num: 37, question: "Which Stream method skips first n elements?", options: ["skip()", "limit()", "filter()", "map()"], answer: "skip()", attempted: false, selected: "" },
  { num: 38, question: "Which exception occurs when invoking method via reflection incorrectly?", options: ["InvocationTargetException", "IllegalAccessException", "NoSuchMethodException", "RuntimeException"], answer: "InvocationTargetException", attempted: false, selected: "" },
  { num: 39, question: "Which method converts Map values to List?", options: ["new ArrayList<>(map.values())", "map.values().toList()", "collect()", "stream().collect()"], answer: "new ArrayList<>(map.values())", attempted: false, selected: "" },
  { num: 40, question: "Which method in Comparator reverses order of comparison?", options: ["reversed()", "compare()", "thenComparing()", "naturalOrder()"], answer: "reversed()", attempted: false, selected: "" },
  { num: 41, question: "Which annotation documents that field should not be serialized?", options: ["@Transient", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@Transient", attempted: false, selected: "" },
  { num: 42, question: "Which interface represents operation with two inputs and no return?", options: ["BiConsumer", "Consumer", "Supplier", "Function"], answer: "BiConsumer", attempted: false, selected: "" },
  { num: 43, question: "Which method returns maximum element from Stream?", options: ["max()", "min()", "reduce()", "sorted()"], answer: "max()", attempted: false, selected: "" },
  { num: 44, question: "Which annotation marks method for unchecked warnings suppression?", options: ["@SafeVarargs", "@SuppressWarnings", "@Override", "@FunctionalInterface"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 45, question: "Which method ensures safe concurrent addition in list?", options: ["CopyOnWriteArrayList.add()", "ArrayList.add()", "Vector.add()", "LinkedList.add()"], answer: "CopyOnWriteArrayList.add()", attempted: false, selected: "" },
  { num: 46, question: "Which method in ForkJoinPool executes task recursively?", options: ["invokeAll()", "fork()", "join()", "submit()"], answer: "invokeAll()", attempted: false, selected: "" },
  { num: 47, question: "Which method retrieves first element from Deque?", options: ["getFirst()", "peekFirst()", "pollFirst()", "removeFirst()"], answer: "getFirst()", attempted: false, selected: "" },
  { num: 48, question: "Which exception occurs when casting primitive wrapper incorrectly?", options: ["ClassCastException", "ArithmeticException", "IllegalStateException", "RuntimeException"], answer: "ClassCastException", attempted: false, selected: "" },
  { num: 49, question: "Which Stream method combines all elements to single value?", options: ["reduce()", "collect()", "map()", "filter()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 50, question: "Which annotation marks field as read-only after initialization?", options: ["@Final", "@Transient", "@Immutable", "@Deprecated"], answer: "@Final", attempted: false, selected: "" }
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
