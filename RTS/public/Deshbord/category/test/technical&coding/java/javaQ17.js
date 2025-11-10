const questions =[
  { num: 1, question: "Which method checks if string contains sequence?", options: ["contains()", "includes()", "has()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 2, question: "Which method returns substring from start to end index?", options: ["substring()", "subStr()", "slice()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 3, question: "Which class provides random numbers?", options: ["Random", "Math", "Randomizer", "NumberGenerator"], answer: "Random", attempted: false, selected: "" },
  { num: 4, question: "Which method returns hash code of object?", options: ["hashCode()", "getHash()", "hash()", "code()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 5, question: "Which class represents immutable string?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 6, question: "Which class represents mutable string?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 7, question: "Which method appends character sequence to StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 8, question: "Which method reverses StringBuilder content?", options: ["reverse()", "flip()", "invert()", "mirror()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents synchronized mutable string?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 10, question: "Which interface allows mapping input to output?", options: ["Function", "Consumer", "Supplier", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 11, question: "Which method in Collections finds minimum element?", options: ["min()", "minimum()", "least()", "findMin()"], answer: "min()", attempted: false, selected: "" },
  { num: 12, question: "Which method in Collections finds maximum element?", options: ["max()", "maximum()", "greatest()", "findMax()"], answer: "max()", attempted: false, selected: "" },
  { num: 13, question: "Which class represents key-value mapping?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 14, question: "Which method returns keys of Map?", options: ["keySet()", "keys()", "getKeys()", "entrySet()"], answer: "keySet()", attempted: false, selected: "" },
  { num: 15, question: "Which method adds element to Set?", options: ["add()", "put()", "insert()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 16, question: "Which method removes element from Set?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 17, question: "Which method checks if Set contains element?", options: ["contains()", "has()", "exists()", "find()"], answer: "contains()", attempted: false, selected: "" },
  { num: 18, question: "Which interface allows testing boolean condition?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 19, question: "Which method returns boolean if Optional has value?", options: ["isPresent()", "hasValue()", "exists()", "isEmpty()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 20, question: "Which method removes all elements from Collection?", options: ["clear()", "removeAll()", "deleteAll()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 21, question: "Which method converts primitive int to Integer object?", options: ["valueOf()", "parseInt()", "toInteger()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 22, question: "Which method parses string to integer?", options: ["parseInt()", "valueOf()", "toInt()", "convert()"], answer: "parseInt()", attempted: false, selected: "" },
  { num: 23, question: "Which method in Collections counts frequency of element?", options: ["frequency()", "count()", "occurrence()", "repeat()"], answer: "frequency()", attempted: false, selected: "" },
  { num: 24, question: "Which interface represents two inputs and one output?", options: ["BiFunction", "Function", "BiConsumer", "BinaryOperator"], answer: "BiFunction", attempted: false, selected: "" },
  { num: 25, question: "Which class sorts arrays?", options: ["Arrays", "Collections", "SortUtil", "ArrayUtils"], answer: "Arrays", attempted: false, selected: "" },
  { num: 26, question: "Which method returns true if array contains value?", options: ["binarySearch()", "contains()", "indexOf()", "search()"], answer: "binarySearch()", attempted: false, selected: "" },
  { num: 27, question: "Which class allows dynamic array?", options: ["ArrayList", "List", "Vector", "LinkedList"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 28, question: "Which method in ArrayList adds element?", options: ["add()", "insert()", "append()", "push()"], answer: "add()", attempted: false, selected: "" },
  { num: 29, question: "Which method in ArrayList removes element by index?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 30, question: "Which class represents doubly linked list?", options: ["LinkedList", "ArrayList", "Vector", "Deque"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 31, question: "Which interface allows adding and removing elements from end?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 32, question: "Which method returns and removes first element from Queue?", options: ["poll()", "remove()", "pop()", "peek()"], answer: "poll()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns first element without removing from Queue?", options: ["peek()", "poll()", "get()", "first()"], answer: "peek()", attempted: false, selected: "" },
  { num: 34, question: "Which method reverses list in Collections?", options: ["reverse()", "flip()", "invert()", "mirror()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 35, question: "Which interface allows performing action on element?", options: ["Consumer", "Supplier", "Predicate", "Function"], answer: "Consumer", attempted: false, selected: "" },
  { num: 36, question: "Which method executes action if Optional value present?", options: ["ifPresent()", "isPresent()", "get()", "orElse()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 37, question: "Which class is used for date and time?", options: ["LocalDateTime", "Date", "Calendar", "Time"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 38, question: "Which method adds element at specific index in List?", options: ["add(index, element)", "insert()", "set()", "put()"], answer: "add(index, element)", attempted: false, selected: "" },
  { num: 39, question: "Which method updates element at index in List?", options: ["set()", "add()", "replace()", "update()"], answer: "set()", attempted: false, selected: "" },
  { num: 40, question: "Which method removes element by object in List?", options: ["remove(Object)", "removeAt()", "delete()", "discard()"], answer: "remove(Object)", attempted: false, selected: "" },
  { num: 41, question: "Which method converts Stream to List?", options: ["collect(Collectors.toList())", "toList()", "asList()", "streamToList()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 42, question: "Which class allows storing key-value pairs in sorted order?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Map"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 43, question: "Which class allows key-value pairs with insertion order?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Map"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 44, question: "Which class allows concurrent hash map?", options: ["ConcurrentHashMap", "HashMap", "Hashtable", "TreeMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 45, question: "Which method splits string by regex?", options: ["split()", "divide()", "tokenize()", "cut()"], answer: "split()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns Unicode code point at index?", options: ["codePointAt()", "charAt()", "unicodeAt()", "getCode()"], answer: "codePointAt()", attempted: false, selected: "" },
  { num: 47, question: "Which method converts string to bytes?", options: ["getBytes()", "toBytes()", "bytes()", "convertToBytes()"], answer: "getBytes()", attempted: false, selected: "" },
  { num: 48, question: "Which class provides system properties?", options: ["System", "Runtime", "Properties", "Environment"], answer: "System", attempted: false, selected: "" },
  { num: 49, question: "Which method returns system property by key?", options: ["getProperty()", "property()", "get()", "fetchProperty()"], answer: "getProperty()", attempted: false, selected: "" },
  { num: 50, question: "Which method in Math returns absolute value?", options: ["abs()", "absolute()", "mod()", "valueOf()"], answer: "abs()", attempted: false, selected: "" }
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
