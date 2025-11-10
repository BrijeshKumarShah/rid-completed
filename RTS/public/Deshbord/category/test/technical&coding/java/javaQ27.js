const questions=
  [
  { num: 1, question: "Which class provides utility methods for math operations?", options: ["Math", "Number", "Calculator", "Arithmetic"], answer: "Math", attempted: false, selected: "" },
  { num: 2, question: "Which method returns absolute value of number?", options: ["abs()", "absolute()", "value()", "mod()"], answer: "abs()", attempted: false, selected: "" },
  { num: 3, question: "Which method returns square root of number?", options: ["sqrt()", "squareRoot()", "root()", "pow()"], answer: "sqrt()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns power of number?", options: ["pow()", "power()", "exp()", "multiply()"], answer: "pow()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns maximum of two numbers?", options: ["max()", "maximum()", "larger()", "compare()"], answer: "max()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns minimum of two numbers?", options: ["min()", "minimum()", "smaller()", "compare()"], answer: "min()", attempted: false, selected: "" },
  { num: 7, question: "Which method rounds decimal to nearest integer?", options: ["round()", "ceil()", "floor()", "approx()"], answer: "round()", attempted: false, selected: "" },
  { num: 8, question: "Which method rounds decimal upward?", options: ["ceil()", "round()", "floor()", "up()"], answer: "ceil()", attempted: false, selected: "" },
  { num: 9, question: "Which method rounds decimal downward?", options: ["floor()", "ceil()", "round()", "down()"], answer: "floor()", attempted: false, selected: "" },
  { num: 10, question: "Which method generates random number between 0.0 and 1.0?", options: ["random()", "rand()", "next()", "generate()"], answer: "random()", attempted: false, selected: "" },
  { num: 11, question: "Which class is used to format numbers?", options: ["DecimalFormat", "NumberFormat", "Format", "NumericFormatter"], answer: "DecimalFormat", attempted: false, selected: "" },
  { num: 12, question: "Which method formats number with pattern?", options: ["format()", "apply()", "convert()", "style()"], answer: "format()", attempted: false, selected: "" },
  { num: 13, question: "Which class is used to generate random integers?", options: ["Random", "Math", "Number", "Integer"], answer: "Random", attempted: false, selected: "" },
  { num: 14, question: "Which method returns next integer from Random?", options: ["nextInt()", "next()", "getInt()", "randomInt()"], answer: "nextInt()", attempted: false, selected: "" },
  { num: 15, question: "Which method returns next double from Random?", options: ["nextDouble()", "next()", "getDouble()", "randomDouble()"], answer: "nextDouble()", attempted: false, selected: "" },
  { num: 16, question: "Which wrapper class represents int?", options: ["Integer", "Int", "Number", "IntWrapper"], answer: "Integer", attempted: false, selected: "" },
  { num: 17, question: "Which wrapper class represents boolean?", options: ["Boolean", "Bool", "TrueFalse", "BooleanWrapper"], answer: "Boolean", attempted: false, selected: "" },
  { num: 18, question: "Which wrapper class represents char?", options: ["Character", "Char", "CharWrapper", "Letter"], answer: "Character", attempted: false, selected: "" },
  { num: 19, question: "Which wrapper class represents double?", options: ["Double", "Decimal", "Number", "Float"], answer: "Double", attempted: false, selected: "" },
  { num: 20, question: "Which method converts string to integer using wrapper?", options: ["parseInt()", "toInt()", "convertInt()", "valueOfInt()"], answer: "parseInt()", attempted: false, selected: "" },
  { num: 21, question: "Which method converts string to boolean?", options: ["parseBoolean()", "toBoolean()", "valueOfBoolean()", "convertBoolean()"], answer: "parseBoolean()", attempted: false, selected: "" },
  { num: 22, question: "Which method converts integer to string?", options: ["toString()", "stringValue()", "convert()", "asString()"], answer: "toString()", attempted: false, selected: "" },
  { num: 23, question: "Which class is used to handle dates?", options: ["Date", "Calendar", "LocalDate", "DateTime"], answer: "Date", attempted: false, selected: "" },
  { num: 24, question: "Which method returns current date and time?", options: ["new Date()", "getDate()", "now()", "currentDate()"], answer: "new Date()", attempted: false, selected: "" },
  { num: 25, question: "Which class is used for advanced date manipulation?", options: ["Calendar", "Date", "LocalDate", "DateTime"], answer: "Calendar", attempted: false, selected: "" },
  { num: 26, question: "Which method adds days to Calendar?", options: ["add()", "plusDays()", "increment()", "nextDay()"], answer: "add()", attempted: false, selected: "" },
  { num: 27, question: "Which class represents local date in Java 8+", options: ["LocalDate", "Date", "Calendar", "DateTime"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 28, question: "Which class represents local time in Java 8+", options: ["LocalTime", "Time", "Calendar", "DateTime"], answer: "LocalTime", attempted: false, selected: "" },
  { num: 29, question: "Which class represents date and time in Java 8+", options: ["LocalDateTime", "Date", "Calendar", "DateTime"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 30, question: "Which class is used for formatting date?", options: ["SimpleDateFormat", "DateFormat", "DateFormatter", "Formatter"], answer: "SimpleDateFormat", attempted: false, selected: "" },
  { num: 31, question: "Which method formats date according to pattern?", options: ["format()", "apply()", "convert()", "style()"], answer: "format()", attempted: false, selected: "" },
  { num: 32, question: "Which class represents immutable string in Java?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 33, question: "Which class represents mutable string?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 34, question: "Which class represents thread-safe mutable string?", options: ["StringBuffer", "String", "StringBuilder", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 35, question: "Which method appends string in StringBuilder?", options: ["append()", "add()", "insert()", "concat()"], answer: "append()", attempted: false, selected: "" },
  { num: 36, question: "Which method inserts string at specific index in StringBuilder?", options: ["insert()", "append()", "add()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 37, question: "Which method deletes substring in StringBuilder?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 38, question: "Which method reverses string in StringBuilder?", options: ["reverse()", "invert()", "flip()", "swap()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 39, question: "Which interface represents key-value pair for Map.Entry?", options: ["Map.Entry", "Entry", "KeyValue", "Pair"], answer: "Map.Entry", attempted: false, selected: "" },
  { num: 40, question: "Which method returns key from Map.Entry?", options: ["getKey()", "key()", "get()", "fetchKey()"], answer: "getKey()", attempted: false, selected: "" },
  { num: 41, question: "Which method returns value from Map.Entry?", options: ["getValue()", "value()", "get()", "fetchValue()"], answer: "getValue()", attempted: false, selected: "" },
  { num: 42, question: "Which method sets value in Map.Entry?", options: ["setValue()", "update()", "put()", "replace()"], answer: "setValue()", attempted: false, selected: "" },
  { num: 43, question: "Which class is used to create threads?", options: ["Thread", "Runnable", "Task", "Executor"], answer: "Thread", attempted: false, selected: "" },
  { num: 44, question: "Which interface is implemented for threads?", options: ["Runnable", "Callable", "Task", "Executor"], answer: "Runnable", attempted: false, selected: "" },
  { num: 45, question: "Which method starts execution of thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()", attempted: false, selected: "" },
  { num: 46, question: "Which method pauses thread for specified time?", options: ["sleep()", "wait()", "pause()", "stop()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used for thread synchronization?", options: ["Object", "Thread", "Lock", "Mutex"], answer: "Lock", attempted: false, selected: "" },
  { num: 48, question: "Which method is called when thread is running?", options: ["run()", "start()", "execute()", "begin()"], answer: "run()", attempted: false, selected: "" },
  { num: 49, question: "Which class provides delay execution in threads?", options: ["Thread", "Timer", "Scheduler", "Executor"], answer: "Timer", attempted: false, selected: "" },
  { num: 50, question: "Which class schedules tasks for future execution?", options: ["Timer", "Thread", "Executor", "TaskScheduler"], answer: "Timer", attempted: false, selected: "" }
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
