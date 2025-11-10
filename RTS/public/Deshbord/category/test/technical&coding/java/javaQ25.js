const questions=
  [
  { num: 1, question: "Which class represents a mutable sequence of characters?", options: ["StringBuilder", "StringBuffer", "String", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 2, question: "Which class represents a thread-safe mutable sequence of characters?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 3, question: "Which method appends string to StringBuilder?", options: ["append()", "add()", "concat()", "join()"], answer: "append()", attempted: false, selected: "" },
  { num: 4, question: "Which method inserts string at given index?", options: ["insert()", "addAt()", "put()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 5, question: "Which method deletes characters from sequence?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 6, question: "Which method reverses the sequence?", options: ["reverse()", "invert()", "flip()", "back()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns length of sequence?", options: ["length()", "size()", "count()", "getLength()"], answer: "length()", attempted: false, selected: "" },
  { num: 8, question: "Which interface is implemented by StringBuilder?", options: ["Serializable", "CharSequence", "Comparable", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 9, question: "Which method compares two strings ignoring case?", options: ["equalsIgnoreCase()", "compareToIgnoreCase()", "compare()", "equals()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns Unicode value of character?", options: ["codePointAt()", "charAt()", "getCode()", "unicodeValue()"], answer: "codePointAt()", attempted: false, selected: "" },
  { num: 11, question: "Which method returns substring from string?", options: ["substring()", "substr()", "getSubString()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 12, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "removeSpaces()", "allOfThese"], answer: "trim()", attempted: false, selected: "" },
  { num: 13, question: "Which method replaces characters in string?", options: ["replace()", "substitute()", "change()", "set()"], answer: "replace()", attempted: false, selected: "" },
  { num: 14, question: "Which method splits string by delimiter?", options: ["split()", "divide()", "partition()", "separate()"], answer: "split()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginsWith()", "hasPrefix()", "checkStart()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 16, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "hasSuffix()", "finishWith()", "checkEnd()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 17, question: "Which method converts string to character array?", options: ["toCharArray()", "toArray()", "getChars()", "asArray()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 18, question: "Which method compares two strings lexicographically?", options: ["compareTo()", "equals()", "compare()", "match()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if string contains substring?", options: ["contains()", "has()", "find()", "indexOf()"], answer: "contains()", attempted: false, selected: "" },
  { num: 20, question: "Which method returns index of substring?", options: ["indexOf()", "search()", "findIndex()", "position()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 21, question: "Which method returns last index of character?", options: ["lastIndexOf()", "indexOfLast()", "findLast()", "searchLast()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 22, question: "Which method converts string to lowercase?", options: ["toLowerCase()", "lowercase()", "toLower()", "allOfThese"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 23, question: "Which method converts string to uppercase?", options: ["toUpperCase()", "uppercase()", "toUpper()", "allOfThese"], answer: "toUpperCase()", attempted: false, selected: "" },
  { num: 24, question: "Which method returns true if string is empty?", options: ["isEmpty()", "empty()", "hasContent()", "length()==0"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 25, question: "Which class is used for regex pattern?", options: ["Pattern", "Matcher", "Regex", "RegExp"], answer: "Pattern", attempted: false, selected: "" },
  { num: 26, question: "Which class is used to match regex?", options: ["Matcher", "Pattern", "RegExp", "Regex"], answer: "Matcher", attempted: false, selected: "" },
  { num: 27, question: "Which method checks regex match?", options: ["matches()", "check()", "validate()", "find()"], answer: "matches()", attempted: false, selected: "" },
  { num: 28, question: "Which method finds regex occurrences?", options: ["find()", "matches()", "search()", "allMatches()"], answer: "find()", attempted: false, selected: "" },
  { num: 29, question: "Which method replaces regex matches?", options: ["replaceAll()", "replace()", "substitute()", "replaceFirst()"], answer: "replaceAll()", attempted: false, selected: "" },
  { num: 30, question: "Which method replaces first regex match?", options: ["replaceFirst()", "replace()", "replaceAll()", "substitute()"], answer: "replaceFirst()", attempted: false, selected: "" },
  { num: 31, question: "Which class converts string to primitive?", options: ["Wrapper classes", "String", "Scanner", "Object"], answer: "Wrapper classes", attempted: false, selected: "" },
  { num: 32, question: "Which method parses string to int?", options: ["Integer.parseInt()", "Integer.valueOf()", "parseInt()", "toInt()"], answer: "Integer.parseInt()", attempted: false, selected: "" },
  { num: 33, question: "Which method parses string to double?", options: ["Double.parseDouble()", "parseDouble()", "Double.valueOf()", "toDouble()"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 34, question: "Which class converts primitive to string?", options: ["String.valueOf()", "Integer.toString()", "Double.toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 35, question: "Which method returns class of object?", options: ["getClass()", "classOf()", "getType()", "objectClass()"], answer: "getClass()", attempted: false, selected: "" },
  { num: 36, question: "Which method returns hashcode of object?", options: ["hashCode()", "getHash()", "code()", "getCode()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 37, question: "Which method checks equality of objects?", options: ["equals()", "==", "isEqual()", "match()"], answer: "equals()", attempted: false, selected: "" },
  { num: 38, question: "Which method returns string representation of object?", options: ["toString()", "asString()", "stringify()", "getString()"], answer: "toString()", attempted: false, selected: "" },
  { num: 39, question: "Which method clones object?", options: ["clone()", "copy()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 40, question: "Which interface supports object cloning?", options: ["Cloneable", "Serializable", "Comparable", "Runnable"], answer: "Cloneable", attempted: false, selected: "" },
  { num: 41, question: "Which method finalizes object before GC?", options: ["finalize()", "cleanup()", "destroy()", "onDelete()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 42, question: "Which method requests garbage collection?", options: ["System.gc()", "Runtime.gc()", "collect()", "allOfThese"], answer: "System.gc()", attempted: false, selected: "" },
  { num: 43, question: "Which class provides runtime info?", options: ["Runtime", "System", "Process", "Thread"], answer: "Runtime", attempted: false, selected: "" },
  { num: 44, question: "Which method returns available processors?", options: ["availableProcessors()", "getProcessors()", "processorCount()", "allOfThese"], answer: "availableProcessors()", attempted: false, selected: "" },
  { num: 45, question: "Which method returns free memory in JVM?", options: ["freeMemory()", "getFreeMemory()", "memoryAvailable()", "allOfThese"], answer: "freeMemory()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns total memory in JVM?", options: ["totalMemory()", "getTotalMemory()", "memoryTotal()", "allOfThese"], answer: "totalMemory()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used to execute external process?", options: ["ProcessBuilder", "Runtime", "Process", "System"], answer: "ProcessBuilder", attempted: false, selected: "" },
  { num: 48, question: "Which method starts process with ProcessBuilder?", options: ["start()", "run()", "exec()", "launch()"], answer: "start()", attempted: false, selected: "" },
  { num: 49, question: "Which class manages environment variables?", options: ["System", "Runtime", "ProcessBuilder", "Env"], answer: "System", attempted: false, selected: "" },
  { num: 50, question: "Which method returns available memory after GC?", options: ["gc()", "freeMemory()", "totalMemory()", "maxMemory()"], answer: "freeMemory()", attempted: false, selected: "" }
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
