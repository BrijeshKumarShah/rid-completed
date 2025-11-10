const questions=
 [
  { num: 1, question: "Which keyword is used for inner classes?", options: ["class", "inner", "nested", "private"], answer: "nested", attempted: false, selected: "" },
  { num: 2, question: "Which type of nested class is static?", options: ["Static Nested Class", "Inner Class", "Anonymous Class", "Local Class"], answer: "Static Nested Class", attempted: false, selected: "" },
  { num: 3, question: "Which class is anonymous?", options: ["Anonymous Class", "Inner Class", "Static Nested Class", "Top-level Class"], answer: "Anonymous Class", attempted: false, selected: "" },
  { num: 4, question: "Which keyword is used for interface variables?", options: ["static", "final", "const", "both static and final"], answer: "both static and final", attempted: false, selected: "" },
  { num: 5, question: "Which interface provides collection iteration?", options: ["Iterable", "Collection", "List", "Set"], answer: "Iterable", attempted: false, selected: "" },
  { num: 6, question: "Which method returns iterator from collection?", options: ["iterator()", "getIterator()", "next()", "allOfThese"], answer: "iterator()", attempted: false, selected: "" },
  { num: 7, question: "Which method checks if collection has more elements?", options: ["hasNext()", "next()", "contains()", "exists()"], answer: "hasNext()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns next element in iterator?", options: ["next()", "get()", "retrieve()", "element()"], answer: "next()", attempted: false, selected: "" },
  { num: 9, question: "Which interface allows list operations?", options: ["List", "Set", "Map", "Queue"], answer: "List", attempted: false, selected: "" },
  { num: 10, question: "Which interface does HashSet implement?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 11, question: "Which interface does LinkedHashMap implement?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 12, question: "Which method adds element to list?", options: ["add()", "insert()", "put()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 13, question: "Which method removes element from list?", options: ["remove()", "delete()", "discard()", "allOfThese"], answer: "remove()", attempted: false, selected: "" },
  { num: 14, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "allOfThese"], answer: "size()", attempted: false, selected: "" },
  { num: 15, question: "Which class implements priority queue?", options: ["PriorityQueue", "Queue", "LinkedList", "ArrayList"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 16, question: "Which method inserts element in queue?", options: ["offer()", "add()", "enqueue()", "put()"], answer: "offer()", attempted: false, selected: "" },
  { num: 17, question: "Which method retrieves element from queue without removing?", options: ["peek()", "poll()", "element()", "get()"], answer: "peek()", attempted: false, selected: "" },
  { num: 18, question: "Which method retrieves and removes element from queue?", options: ["poll()", "peek()", "remove()", "dequeue()"], answer: "poll()", attempted: false, selected: "" },
  { num: 19, question: "Which interface is implemented by Stack?", options: ["Deque", "List", "Queue", "Set"], answer: "Deque", attempted: false, selected: "" },
  { num: 20, question: "Which method adds element to stack?", options: ["push()", "add()", "offer()", "enqueue()"], answer: "push()", attempted: false, selected: "" },
  { num: 21, question: "Which method removes element from stack?", options: ["pop()", "remove()", "poll()", "dequeue()"], answer: "pop()", attempted: false, selected: "" },
  { num: 22, question: "Which interface supports map operations?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 23, question: "Which method puts key-value pair in map?", options: ["put()", "add()", "insert()", "append()"], answer: "put()", attempted: false, selected: "" },
  { num: 24, question: "Which method retrieves value by key from map?", options: ["get()", "find()", "retrieve()", "lookup()"], answer: "get()", attempted: false, selected: "" },
  { num: 25, question: "Which method removes key-value pair from map?", options: ["remove()", "delete()", "discard()", "allOfThese"], answer: "remove()", attempted: false, selected: "" },
  { num: 26, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 27, question: "Which interface is implemented by TreeMap?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 28, question: "Which interface is implemented by LinkedHashSet?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 29, question: "Which method checks if key exists in map?", options: ["containsKey()", "contains()", "existsKey()", "hasKey()"], answer: "containsKey()", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if value exists in map?", options: ["containsValue()", "hasValue()", "existsValue()", "checkValue()"], answer: "containsValue()", attempted: false, selected: "" },
  { num: 31, question: "Which class implements random-access list?", options: ["ArrayList", "LinkedList", "Vector", "Stack"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 32, question: "Which class implements synchronized list?", options: ["Vector", "ArrayList", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 33, question: "Which method converts collection to array?", options: ["toArray()", "asArray()", "array()", "getArray()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 34, question: "Which class is used for date and time in Java 8?", options: ["LocalDate", "Date", "Calendar", "Time"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 35, question: "Which class stores date and time?", options: ["LocalDateTime", "Date", "Calendar", "All of these"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 36, question: "Which method returns current time in millis?", options: ["System.currentTimeMillis()", "Time.now()", "Clock.getTime()", "Date.getTime()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },
  { num: 37, question: "Which interface is implemented by Comparator?", options: ["Comparator", "Comparable", "Collection", "Iterable"], answer: "Comparator", attempted: false, selected: "" },
  { num: 38, question: "Which method compares two objects in Comparator?", options: ["compare()", "compareTo()", "equals()", "match()"], answer: "compare()", attempted: false, selected: "" },
  { num: 39, question: "Which interface is implemented by Comparable?", options: ["Comparable", "Comparator", "Collection", "Iterable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 40, question: "Which method compares objects in Comparable?", options: ["compareTo()", "compare()", "equals()", "match()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 41, question: "Which class is used for regular expressions?", options: ["Pattern", "Matcher", "Regex", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method compiles regex pattern?", options: ["compile()", "pattern()", "create()", "build()"], answer: "compile()", attempted: false, selected: "" },
  { num: 43, question: "Which method matches regex with string?", options: ["matcher()", "matches()", "check()", "verify()"], answer: "matcher()", attempted: false, selected: "" },
  { num: 44, question: "Which method returns true if regex matches string?", options: ["matches()", "find()", "check()", "verify()"], answer: "matches()", attempted: false, selected: "" },
  { num: 45, question: "Which class replaces characters using regex?", options: ["Matcher", "Pattern", "String", "StringBuilder"], answer: "Matcher", attempted: false, selected: "" },
  { num: 46, question: "Which method finds regex pattern in string?", options: ["find()", "matches()", "search()", "look()"], answer: "find()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used for properties file?", options: ["Properties", "PropertyFile", "Config", "All of these"], answer: "Properties", attempted: false, selected: "" },
  { num: 48, question: "Which method loads properties from file?", options: ["load()", "read()", "open()", "get()"], answer: "load()", attempted: false, selected: "" },
  { num: 49, question: "Which method retrieves property value?", options: ["getProperty()", "get()", "value()", "read()"], answer: "getProperty()", attempted: false, selected: "" },
  { num: 50, question: "Which method sets property value?", options: ["setProperty()", "put()", "add()", "append()"], answer: "setProperty()", attempted: false, selected: "" }
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
