const questions=[
  { num: 1, question: "Which class converts primitive to object?", options: ["Wrapper Classes", "Converter Classes", "PrimitiveClass", "ObjectClass"], answer: "Wrapper Classes", attempted: false, selected: "" },
  { num: 2, question: "Which method converts string to double?", options: ["Double.parseDouble()", "String.toDouble()", "Double.valueOfString()", "parseDouble()"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 3, question: "Which method converts string to float?", options: ["Float.parseFloat()", "String.toFloat()", "Float.valueOf()", "parseFloat()"], answer: "Float.parseFloat()", attempted: false, selected: "" },
  { num: 4, question: "Which method converts string to long?", options: ["Long.parseLong()", "String.toLong()", "Long.valueOfString()", "parseLong()"], answer: "Long.parseLong()", attempted: false, selected: "" },
  { num: 5, question: "Which class provides system properties?", options: ["System", "Properties", "Env", "Config"], answer: "System", attempted: false, selected: "" },
  { num: 6, question: "Which method gets system property?", options: ["System.getProperty()", "System.property()", "Properties.get()", "Env.getProperty()"], answer: "System.getProperty()", attempted: false, selected: "" },
  { num: 7, question: "Which method sets system property?", options: ["System.setProperty()", "Properties.set()", "System.propertySet()", "Env.setProperty()"], answer: "System.setProperty()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns current time in milliseconds?", options: ["System.currentTimeMillis()", "Date.now()", "Time.getMillis()", "Clock.currentMillis()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents date and time?", options: ["LocalDateTime", "DateTime", "Date", "Calendar"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 10, question: "Which class represents only date?", options: ["LocalDate", "Date", "Calendar", "DateTime"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 11, question: "Which class represents only time?", options: ["LocalTime", "Time", "Clock", "DateTime"], answer: "LocalTime", attempted: false, selected: "" },
  { num: 12, question: "Which method returns current date?", options: ["LocalDate.now()", "Date.today()", "Calendar.getDate()", "LocalDate.get()"], answer: "LocalDate.now()", attempted: false, selected: "" },
  { num: 13, question: "Which method returns current time?", options: ["LocalTime.now()", "Time.now()", "Clock.now()", "LocalTime.get()"], answer: "LocalTime.now()", attempted: false, selected: "" },
  { num: 14, question: "Which method adds days to date?", options: ["plusDays()", "addDays()", "increaseDays()", "nextDays()"], answer: "plusDays()", attempted: false, selected: "" },
  { num: 15, question: "Which method subtracts days from date?", options: ["minusDays()", "subtractDays()", "reduceDays()", "prevDays()"], answer: "minusDays()", attempted: false, selected: "" },
  { num: 16, question: "Which class represents time zone?", options: ["ZoneId", "TimeZone", "Zone", "Clock"], answer: "ZoneId", attempted: false, selected: "" },
  { num: 17, question: "Which method gets default system zone?", options: ["ZoneId.systemDefault()", "ZoneId.getDefault()", "TimeZone.getDefault()", "Zone.defaultZone()"], answer: "ZoneId.systemDefault()", attempted: false, selected: "" },
  { num: 18, question: "Which method formats date to string?", options: ["DateTimeFormatter.format()", "Date.format()", "DateTime.format()", "Format.date()"], answer: "DateTimeFormatter.format()", attempted: false, selected: "" },
  { num: 19, question: "Which class parses string to date?", options: ["DateTimeFormatter", "SimpleDateFormat", "DateParser", "DateFormat"], answer: "DateTimeFormatter", attempted: false, selected: "" },
  { num: 20, question: "Which interface represents unmodifiable collection?", options: ["Unmodifiable", "Immutable", "ReadOnlyCollection", "Collections.unmodifiableCollection()"], answer: "Collections.unmodifiableCollection()", attempted: false, selected: "" },
  { num: 21, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 22, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 23, question: "Which method removes element from collection?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 24, question: "Which method clears all elements from collection?", options: ["clear()", "reset()", "deleteAll()", "removeAll()"], answer: "clear()", attempted: false, selected: "" },
  { num: 25, question: "Which method converts collection to array?", options: ["toArray()", "asArray()", "convertToArray()", "array()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 26, question: "Which interface represents map of key-value pairs?", options: ["Map", "Dictionary", "HashMap", "Properties"], answer: "Map", attempted: false, selected: "" },
  { num: 27, question: "Which method gets value by key in map?", options: ["get()", "fetch()", "valueOf()", "lookup()"], answer: "get()", attempted: false, selected: "" },
  { num: 28, question: "Which method adds key-value pair in map?", options: ["put()", "add()", "insert()", "set()"], answer: "put()", attempted: false, selected: "" },
  { num: 29, question: "Which method removes key-value pair from map?", options: ["remove()", "delete()", "discard()", "unset()"], answer: "remove()", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if map contains key?", options: ["containsKey()", "hasKey()", "existsKey()", "checkKey()"], answer: "containsKey()", attempted: false, selected: "" },
  { num: 31, question: "Which method checks if map contains value?", options: ["containsValue()", "hasValue()", "existsValue()", "checkValue()"], answer: "containsValue()", attempted: false, selected: "" },
  { num: 32, question: "Which class provides synchronized map?", options: ["Collections.synchronizedMap()", "HashMap", "Hashtable", "ConcurrentMap"], answer: "Collections.synchronizedMap()", attempted: false, selected: "" },
  { num: 33, question: "Which interface allows sorted map?", options: ["SortedMap", "Map", "TreeMap", "HashMap"], answer: "SortedMap", attempted: false, selected: "" },
  { num: 34, question: "Which class implements sorted map?", options: ["TreeMap", "HashMap", "LinkedHashMap", "ConcurrentHashMap"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 35, question: "Which method returns first key in sorted map?", options: ["firstKey()", "getFirst()", "headKey()", "startKey()"], answer: "firstKey()", attempted: false, selected: "" },
  { num: 36, question: "Which method returns last key in sorted map?", options: ["lastKey()", "getLast()", "tailKey()", "endKey()"], answer: "lastKey()", attempted: false, selected: "" },
  { num: 37, question: "Which method returns submap from sorted map?", options: ["subMap()", "getSubMap()", "slice()", "range()"], answer: "subMap()", attempted: false, selected: "" },
  { num: 38, question: "Which interface allows set of unique keys?", options: ["Set", "Map", "HashMap", "SortedSet"], answer: "Set", attempted: false, selected: "" },
  { num: 39, question: "Which method adds element in set?", options: ["add()", "insert()", "put()", "set()"], answer: "add()", attempted: false, selected: "" },
  { num: 40, question: "Which method removes element from set?", options: ["remove()", "delete()", "discard()", "unset()"], answer: "remove()", attempted: false, selected: "" },
  { num: 41, question: "Which method checks if set contains element?", options: ["contains()", "has()", "exists()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 42, question: "Which interface allows queue operations?", options: ["Queue", "Deque", "List", "Stack"], answer: "Queue", attempted: false, selected: "" },
  { num: 43, question: "Which method adds element at end of queue?", options: ["offer()", "add()", "enqueue()", "push()"], answer: "offer()", attempted: false, selected: "" },
  { num: 44, question: "Which method removes element from head of queue?", options: ["poll()", "remove()", "dequeue()", "pop()"], answer: "poll()", attempted: false, selected: "" },
  { num: 45, question: "Which method retrieves head without removing?", options: ["peek()", "element()", "get()", "top()"], answer: "peek()", attempted: false, selected: "" },
  { num: 46, question: "Which interface represents double-ended queue?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 47, question: "Which method adds element at front of deque?", options: ["addFirst()", "addFront()", "pushFront()", "offerFirst()"], answer: "addFirst()", attempted: false, selected: "" },
  { num: 48, question: "Which method adds element at end of deque?", options: ["addLast()", "addEnd()", "pushEnd()", "offerLast()"], answer: "addLast()", attempted: false, selected: "" },
  { num: 49, question: "Which method removes element from front of deque?", options: ["removeFirst()", "pollFirst()", "popFront()", "deleteFront()"], answer: "removeFirst()", attempted: false, selected: "" },
  { num: 50, question: "Which method removes element from end of deque?", options: ["removeLast()", "pollLast()", "popEnd()", "deleteEnd()"], answer: "removeLast()", attempted: false, selected: "" }
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
