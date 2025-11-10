const questions=
  [
  { num: 1, question: "Which method converts integer to string?", options: ["String.valueOf()", "Integer.toString()", "toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 2, question: "Which class represents immutable string?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 3, question: "Which class allows mutable strings?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 4, question: "Which class is synchronized for mutable strings?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 5, question: "Which method appends string in StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 6, question: "Which method inserts string at index in StringBuilder?", options: ["insert()", "append()", "add()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 7, question: "Which method deletes characters in StringBuilder?", options: ["delete()", "remove()", "discard()", "cut()"], answer: "delete()", attempted: false, selected: "" },
  { num: 8, question: "Which method replaces characters in StringBuilder?", options: ["replace()", "set()", "update()", "put()"], answer: "replace()", attempted: false, selected: "" },
  { num: 9, question: "Which method reverses StringBuilder?", options: ["reverse()", "invert()", "flip()", "revert()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns character at index in StringBuilder?", options: ["charAt()", "get()", "character()", "index()"], answer: "charAt()", attempted: false, selected: "" },
  { num: 11, question: "Which class represents random numbers?", options: ["Random", "Math", "SecureRandom", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 12, question: "Which method returns random integer?", options: ["nextInt()", "randomInt()", "randInt()", "getInt()"], answer: "nextInt()", attempted: false, selected: "" },
  { num: 13, question: "Which method returns random double?", options: ["nextDouble()", "randomDouble()", "randDouble()", "getDouble()"], answer: "nextDouble()", attempted: false, selected: "" },
  { num: 14, question: "Which class represents thread?", options: ["Thread", "Runnable", "Executor", "Task"], answer: "Thread", attempted: false, selected: "" },
  { num: 15, question: "Which method starts a new thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()", attempted: false, selected: "" },
  { num: 16, question: "Which method runs thread code?", options: ["run()", "start()", "execute()", "begin()"], answer: "run()", attempted: false, selected: "" },
  { num: 17, question: "Which interface allows thread implementation?", options: ["Runnable", "Threadable", "Executor", "Callable"], answer: "Runnable", attempted: false, selected: "" },
  { num: 18, question: "Which class allows thread sleeping?", options: ["Thread", "Runnable", "Executor", "Task"], answer: "Thread", attempted: false, selected: "" },
  { num: 19, question: "Which method pauses thread?", options: ["sleep()", "wait()", "pause()", "stop()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 20, question: "Which method notifies waiting threads?", options: ["notify()", "notifyAll()", "signal()", "wake()"], answer: "notify()", attempted: false, selected: "" },
  { num: 21, question: "Which method notifies all waiting threads?", options: ["notifyAll()", "notify()", "signalAll()", "wakeAll()"], answer: "notifyAll()", attempted: false, selected: "" },
  { num: 22, question: "Which exception occurs when thread sleeps?", options: ["InterruptedException", "IllegalStateException", "ThreadException", "RuntimeException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 23, question: "Which class allows scheduling tasks?", options: ["Timer", "TaskScheduler", "ScheduledExecutor", "ThreadScheduler"], answer: "Timer", attempted: false, selected: "" },
  { num: 24, question: "Which method schedules a task in Timer?", options: ["schedule()", "start()", "run()", "execute()"], answer: "schedule()", attempted: false, selected: "" },
  { num: 25, question: "Which method cancels a Timer task?", options: ["cancel()", "stop()", "end()", "terminate()"], answer: "cancel()", attempted: false, selected: "" },
  { num: 26, question: "Which class provides math constants and methods?", options: ["Math", "Random", "Calculator", "Number"], answer: "Math", attempted: false, selected: "" },
  { num: 27, question: "Which constant represents pi in Math class?", options: ["Math.PI", "Math.E", "Math.Pi", "Math.PiValue"], answer: "Math.PI", attempted: false, selected: "" },
  { num: 28, question: "Which method returns square root?", options: ["Math.sqrt()", "Math.squareRoot()", "Math.root()", "Math.pow(0.5)"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 29, question: "Which method returns power?", options: ["Math.pow()", "Math.power()", "Math.exp()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 30, question: "Which method returns absolute value?", options: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.mod()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 31, question: "Which method returns max of two numbers?", options: ["Math.max()", "Math.maximum()", "Math.greater()", "Math.top()"], answer: "Math.max()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns min of two numbers?", options: ["Math.min()", "Math.minimum()", "Math.lower()", "Math.bottom()"], answer: "Math.min()", attempted: false, selected: "" },
  { num: 33, question: "Which method rounds a number to nearest integer?", options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.fix()"], answer: "Math.round()", attempted: false, selected: "" },
  { num: 34, question: "Which method rounds a number up?", options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.up()"], answer: "Math.ceil()", attempted: false, selected: "" },
  { num: 35, question: "Which method rounds a number down?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.down()"], answer: "Math.floor()", attempted: false, selected: "" },
  { num: 36, question: "Which class provides formatting for numbers?", options: ["DecimalFormat", "NumberFormat", "Formatter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 37, question: "Which pattern rounds number to 2 decimal places?", options: ["#.##", "#.00", "0.00", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 38, question: "Which class formats dates?", options: ["SimpleDateFormat", "DateFormat", "DateTimeFormatter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 39, question: "Which pattern formats date as dd/MM/yyyy?", options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy/MM/dd", "All of these"], answer: "dd/MM/yyyy", attempted: false, selected: "" },
  { num: 40, question: "Which class provides file reading methods?", options: ["FileReader", "BufferedReader", "Scanner", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 41, question: "Which class provides file writing methods?", options: ["FileWriter", "BufferedWriter", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method reads a line from file?", options: ["readLine()", "read()", "getLine()", "nextLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 43, question: "Which method writes a line to file?", options: ["write()", "append()", "print()", "println()"], answer: "write()", attempted: false, selected: "" },
  { num: 44, question: "Which exception is thrown for file not found?", options: ["FileNotFoundException", "IOException", "NullPointerException", "RuntimeException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 45, question: "Which exception is thrown for I/O errors?", options: ["IOException", "FileNotFoundException", "RuntimeException", "InterruptedException"], answer: "IOException", attempted: false, selected: "" },
  { num: 46, question: "Which class represents object serialization?", options: ["ObjectOutputStream", "ObjectInputStream", "Serializable", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 47, question: "Which interface allows object serialization?", options: ["Serializable", "Externalizable", "Clonable", "All of these"], answer: "Serializable", attempted: false, selected: "" },
  { num: 48, question: "Which method writes object to stream?", options: ["writeObject()", "serialize()", "save()", "putObject()"], answer: "writeObject()", attempted: false, selected: "" },
  { num: 49, question: "Which method reads object from stream?", options: ["readObject()", "deserialize()", "getObject()", "loadObject()"], answer: "readObject()", attempted: false, selected: "" },
  { num: 50, question: "Which exception occurs during serialization?", options: ["NotSerializableException", "IOException", "ClassNotFoundException", "All of these"], answer: "NotSerializableException", attempted: false, selected: "" }
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
