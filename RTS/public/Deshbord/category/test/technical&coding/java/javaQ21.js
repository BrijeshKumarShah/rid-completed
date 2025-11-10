const questions=
  [
  { num: 1, question: "Which method converts float to string?", options: ["String.valueOf()", "Float.toString()", "toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 2, question: "Which wrapper class represents double?", options: ["Double", "Float", "Int", "Long"], answer: "Double", attempted: false, selected: "" },
  { num: 3, question: "Which wrapper class represents boolean?", options: ["Boolean", "Bool", "Integer", "Char"], answer: "Boolean", attempted: false, selected: "" },
  { num: 4, question: "Which wrapper class represents char?", options: ["Character", "Char", "String", "CharWrapper"], answer: "Character", attempted: false, selected: "" },
  { num: 5, question: "Which method parses string to double?", options: ["Double.parseDouble()", "parseDouble()", "Double.valueOfString()", "All of these"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 6, question: "Which method parses string to float?", options: ["Float.parseFloat()", "parseFloat()", "Float.valueOf()", "All of these"], answer: "Float.parseFloat()", attempted: false, selected: "" },
  { num: 7, question: "Which method parses string to boolean?", options: ["Boolean.parseBoolean()", "Boolean.valueOfString()", "parseBoolean()", "All of these"], answer: "Boolean.parseBoolean()", attempted: false, selected: "" },
  { num: 8, question: "Which class represents date and time?", options: ["LocalDateTime", "Date", "Calendar", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 9, question: "Which method returns current date?", options: ["LocalDate.now()", "Date.today()", "Calendar.getDate()", "Date.now()"], answer: "LocalDate.now()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns current time?", options: ["LocalTime.now()", "Time.now()", "Clock.getTime()", "Date.time()"], answer: "LocalTime.now()", attempted: false, selected: "" },
  { num: 11, question: "Which method adds days to date?", options: ["plusDays()", "addDays()", "nextDays()", "dateAdd()"], answer: "plusDays()", attempted: false, selected: "" },
  { num: 12, question: "Which method subtracts days from date?", options: ["minusDays()", "subtractDays()", "previousDays()", "dateMinus()"], answer: "minusDays()", attempted: false, selected: "" },
  { num: 13, question: "Which method formats date to string?", options: ["format()", "toString()", "formatDate()", "dateFormat()"], answer: "format()", attempted: false, selected: "" },
  { num: 14, question: "Which class represents calendar?", options: ["Calendar", "LocalDate", "Date", "DateTime"], answer: "Calendar", attempted: false, selected: "" },
  { num: 15, question: "Which method gets current year from Calendar?", options: ["get(Calendar.YEAR)", "getYear()", "year()", "currentYear()"], answer: "get(Calendar.YEAR)", attempted: false, selected: "" },
  { num: 16, question: "Which method gets current month from Calendar?", options: ["get(Calendar.MONTH)", "getMonth()", "month()", "currentMonth()"], answer: "get(Calendar.MONTH)", attempted: false, selected: "" },
  { num: 17, question: "Which method gets current day of month?", options: ["get(Calendar.DAY_OF_MONTH)", "getDay()", "day()", "currentDay()"], answer: "get(Calendar.DAY_OF_MONTH)", attempted: false, selected: "" },
  { num: 18, question: "Which method gets current hour from Calendar?", options: ["get(Calendar.HOUR)", "getHour()", "hour()", "currentHour()"], answer: "get(Calendar.HOUR)", attempted: false, selected: "" },
  { num: 19, question: "Which interface is implemented by ArrayList?", options: ["List", "Set", "Map", "Collection"], answer: "List", attempted: false, selected: "" },
  { num: 20, question: "Which interface is implemented by HashSet?", options: ["Set", "List", "Map", "Collection"], answer: "Set", attempted: false, selected: "" },
  { num: 21, question: "Which interface is implemented by HashMap?", options: ["Map", "List", "Set", "Collection"], answer: "Map", attempted: false, selected: "" },
  { num: 22, question: "Which method adds element to collection?", options: ["add()", "insert()", "append()", "put()"], answer: "add()", attempted: false, selected: "" },
  { num: 23, question: "Which method removes element from collection?", options: ["remove()", "delete()", "discard()", "drop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 24, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns collection size?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 26, question: "Which class is synchronized list?", options: ["Vector", "ArrayList", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 27, question: "Which class represents stack?", options: ["Stack", "Queue", "Deque", "LinkedList"], answer: "Stack", attempted: false, selected: "" },
  { num: 28, question: "Which method pushes element to stack?", options: ["push()", "add()", "append()", "insert()"], answer: "push()", attempted: false, selected: "" },
  { num: 29, question: "Which method pops element from stack?", options: ["pop()", "remove()", "delete()", "extract()"], answer: "pop()", attempted: false, selected: "" },
  { num: 30, question: "Which method peeks top element of stack?", options: ["peek()", "top()", "getTop()", "view()"], answer: "peek()", attempted: false, selected: "" },
  { num: 31, question: "Which interface represents queue?", options: ["Queue", "Stack", "List", "Deque"], answer: "Queue", attempted: false, selected: "" },
  { num: 32, question: "Which interface represents deque?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 33, question: "Which method adds element to queue?", options: ["offer()", "add()", "enqueue()", "insert()"], answer: "offer()", attempted: false, selected: "" },
  { num: 34, question: "Which method removes element from queue?", options: ["poll()", "remove()", "dequeue()", "delete()"], answer: "poll()", attempted: false, selected: "" },
  { num: 35, question: "Which class represents priority queue?", options: ["PriorityQueue", "Queue", "Deque", "ArrayList"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 36, question: "Which method retrieves head of priority queue?", options: ["peek()", "head()", "first()", "get()"], answer: "peek()", attempted: false, selected: "" },
  { num: 37, question: "Which class represents linked list?", options: ["LinkedList", "ArrayList", "List", "Vector"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 38, question: "Which method adds element at index in list?", options: ["add(index, element)", "insert(index, element)", "set(index, element)", "put(index, element)"], answer: "add(index, element)", attempted: false, selected: "" },
  { num: 39, question: "Which method removes element at index in list?", options: ["remove(index)", "delete(index)", "discard(index)", "drop(index)"], answer: "remove(index)", attempted: false, selected: "" },
  { num: 40, question: "Which method replaces element at index in list?", options: ["set(index, element)", "replace(index, element)", "update(index, element)", "put(index, element)"], answer: "set(index, element)", attempted: false, selected: "" },
  { num: 41, question: "Which class represents key-value pairs?", options: ["Map", "List", "Set", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 42, question: "Which method puts key-value pair in map?", options: ["put()", "add()", "insert()", "set()"], answer: "put()", attempted: false, selected: "" },
  { num: 43, question: "Which method removes key from map?", options: ["remove(key)", "delete(key)", "discard(key)", "drop(key)"], answer: "remove(key)", attempted: false, selected: "" },
  { num: 44, question: "Which method checks if map contains key?", options: ["containsKey()", "hasKey()", "exists()", "checkKey()"], answer: "containsKey()", attempted: false, selected: "" },
  { num: 45, question: "Which method checks if map contains value?", options: ["containsValue()", "hasValue()", "existsValue()", "checkValue()"], answer: "containsValue()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns set of keys from map?", options: ["keySet()", "keys()", "getKeys()", "allKeys()"], answer: "keySet()", attempted: false, selected: "" },
  { num: 47, question: "Which method returns collection of values from map?", options: ["values()", "getValues()", "allValues()", "valueSet()"], answer: "values()", attempted: false, selected: "" },
  { num: 48, question: "Which method returns entry set from map?", options: ["entrySet()", "entries()", "mapSet()", "allEntries()"], answer: "entrySet()", attempted: false, selected: "" },
  { num: 49, question: "Which class represents immutable map in Java 9+", options: ["Map.of()", "Collections.unmodifiableMap()", "ImmutableMap", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 50, question: "Which interface allows sorting in collections?", options: ["Comparable", "Comparator", "Sortable", "Ordered"], answer: "Comparable", attempted: false, selected: "" }
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
