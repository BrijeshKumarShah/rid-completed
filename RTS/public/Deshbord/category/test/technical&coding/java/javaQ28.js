const questions=
  [
  { num: 1, question: "Which method checks if string is empty?", options: ["isEmpty()", "empty()", "length()==0", "checkEmpty()"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 2, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "remove()", "clean()"], answer: "trim()", attempted: false, selected: "" },
  { num: 3, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginWith()", "prefix()", "hasPrefix()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 4, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "finishWith()", "suffix()", "hasSuffix()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns substring from start to end index?", options: ["substring()", "substr()", "slice()", "getSubString()"], answer: "substring()", attempted: false, selected: "" },
  { num: 6, question: "Which method compares strings ignoring case?", options: ["equalsIgnoreCase()", "compareIgnoreCase()", "equals()", "matchIgnoreCase()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns index of substring?", options: ["indexOf()", "search()", "find()", "getIndex()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 8, question: "Which method replaces characters in string?", options: ["replace()", "change()", "substitute()", "update()"], answer: "replace()", attempted: false, selected: "" },
  { num: 9, question: "Which method splits string by regex?", options: ["split()", "divide()", "break()", "tokenize()"], answer: "split()", attempted: false, selected: "" },
  { num: 10, question: "Which class is used to format text output?", options: ["Formatter", "Format", "TextFormat", "PrintFormat"], answer: "Formatter", attempted: false, selected: "" },
  { num: 11, question: "Which method formats string using format specifiers?", options: ["format()", "apply()", "convert()", "style()"], answer: "format()", attempted: false, selected: "" },
  { num: 12, question: "Which class is used for console input?", options: ["Scanner", "Console", "InputReader", "BufferedReader"], answer: "Console", attempted: false, selected: "" },
  { num: 13, question: "Which method reads line from Console?", options: ["readLine()", "nextLine()", "input()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 14, question: "Which class allows reading characters from file?", options: ["FileReader", "BufferedReader", "InputStreamReader", "Reader"], answer: "FileReader", attempted: false, selected: "" },
  { num: 15, question: "Which class buffers input for efficiency?", options: ["BufferedReader", "FileReader", "Scanner", "InputReader"], answer: "BufferedReader", attempted: false, selected: "" },
  { num: 16, question: "Which method reads a line from BufferedReader?", options: ["readLine()", "read()", "nextLine()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 17, question: "Which exception is thrown for IO errors?", options: ["IOException", "FileNotFoundException", "RuntimeException", "NullPointerException"], answer: "IOException", attempted: false, selected: "" },
  { num: 18, question: "Which exception occurs when file not found?", options: ["FileNotFoundException", "IOException", "RuntimeException", "NullPointerException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 19, question: "Which class reads primitive data types from input?", options: ["DataInputStream", "Scanner", "BufferedReader", "Console"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 20, question: "Which method reads integer from DataInputStream?", options: ["readInt()", "readInteger()", "nextInt()", "getInt()"], answer: "readInt()", attempted: false, selected: "" },
  { num: 21, question: "Which interface represents list of elements?", options: ["List", "Array", "Collection", "Sequence"], answer: "List", attempted: false, selected: "" },
  { num: 22, question: "Which method adds element to list?", options: ["add()", "insert()", "append()", "put()"], answer: "add()", attempted: false, selected: "" },
  { num: 23, question: "Which method removes element from list?", options: ["remove()", "delete()", "discard()", "erase()"], answer: "remove()", attempted: false, selected: "" },
  { num: 24, question: "Which method returns element at index?", options: ["get()", "elementAt()", "fetch()", "read()"], answer: "get()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns size of list?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 26, question: "Which class implements dynamic array?", options: ["ArrayList", "Vector", "LinkedList", "HashMap"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 27, question: "Which class implements thread-safe dynamic array?", options: ["Vector", "ArrayList", "LinkedList", "HashMap"], answer: "Vector", attempted: false, selected: "" },
  { num: 28, question: "Which class implements doubly-linked list?", options: ["LinkedList", "ArrayList", "Vector", "HashMap"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 29, question: "Which interface defines a set of unique elements?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 30, question: "Which interface defines key-value mapping?", options: ["Map", "List", "Set", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 31, question: "Which class implements Map with hash table?", options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"], answer: "HashMap", attempted: false, selected: "" },
  { num: 32, question: "Which class implements Map in sorted order?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 33, question: "Which class maintains insertion order of map?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 34, question: "Which class implements legacy synchronized map?", options: ["Hashtable", "HashMap", "TreeMap", "LinkedHashMap"], answer: "Hashtable", attempted: false, selected: "" },
  { num: 35, question: "Which interface represents FIFO collection?", options: ["Queue", "Stack", "List", "Set"], answer: "Queue", attempted: false, selected: "" },
  { num: 36, question: "Which class implements queue using linked list?", options: ["LinkedList", "ArrayList", "PriorityQueue", "HashSet"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 37, question: "Which class implements priority queue?", options: ["PriorityQueue", "LinkedList", "ArrayList", "HashSet"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 38, question: "Which interface represents LIFO collection?", options: ["Stack", "Queue", "List", "Set"], answer: "Stack", attempted: false, selected: "" },
  { num: 39, question: "Which class implements stack?", options: ["Stack", "LinkedList", "ArrayList", "Vector"], answer: "Stack", attempted: false, selected: "" },
  { num: 40, question: "Which interface represents collection of elements?", options: ["Collection", "List", "Set", "Map"], answer: "Collection", attempted: false, selected: "" },
  { num: 41, question: "Which method returns iterator for collection?", options: ["iterator()", "getIterator()", "iterate()", "next()"], answer: "iterator()", attempted: false, selected: "" },
  { num: 42, question: "Which class implements synchronization for collection?", options: ["Collections", "Concurrent", "SyncCollection", "ThreadSafe"], answer: "Collections", attempted: false, selected: "" },
  { num: 43, question: "Which method sorts list in ascending order?", options: ["sort()", "order()", "arrange()", "ascending()"], answer: "sort()", attempted: false, selected: "" },
  { num: 44, question: "Which method shuffles elements of list?", options: ["shuffle()", "randomize()", "mix()", "scramble()"], answer: "shuffle()", attempted: false, selected: "" },
  { num: 45, question: "Which class provides thread pool for tasks?", options: ["ExecutorService", "ThreadPool", "Executor", "TaskScheduler"], answer: "ExecutorService", attempted: false, selected: "" },
  { num: 46, question: "Which method submits task to executor?", options: ["submit()", "execute()", "run()", "schedule()"], answer: "submit()", attempted: false, selected: "" },
  { num: 47, question: "Which class schedules tasks at fixed rate?", options: ["ScheduledExecutorService", "ExecutorService", "Timer", "ThreadPool"], answer: "ScheduledExecutorService", attempted: false, selected: "" },
  { num: 48, question: "Which class implements concurrent hash map?", options: ["ConcurrentHashMap", "HashMap", "TreeMap", "LinkedHashMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 49, question: "Which interface supports callable tasks?", options: ["Callable", "Runnable", "Task", "Executor"], answer: "Callable", attempted: false, selected: "" },
  { num: 50, question: "Which class is used for atomic operations?", options: ["AtomicInteger", "Integer", "Number", "Atomic"], answer: "AtomicInteger", attempted: false, selected: "" }
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
