const questions=[
  { num: 1, question: "Which method converts int to string?", options: ["String.valueOf()", "Integer.toString()", "int.toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 2, question: "Which class provides mathematical functions?", options: ["Math", "Calculator", "Numbers", "Arithmetic"], answer: "Math", attempted: false, selected: "" },
  { num: 3, question: "Which method returns absolute value?", options: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.absValue()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns square root?", options: ["Math.sqrt()", "Math.root()", "Math.squareRoot()", "Math.getSqrt()"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns power of a number?", options: ["Math.pow()", "Math.power()", "Math.exponent()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns random number?", options: ["Math.random()", "Random.next()", "Math.rand()", "Random.number()"], answer: "Math.random()", attempted: false, selected: "" },
  { num: 7, question: "Which class generates random numbers?", options: ["Random", "Math", "NumberGenerator", "ThreadLocalRandom"], answer: "Random", attempted: false, selected: "" },
  { num: 8, question: "Which method generates next int in range?", options: ["nextInt()", "nextInteger()", "getInt()", "randInt()"], answer: "nextInt()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents immutable sequence of characters?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 10, question: "Which class represents mutable sequence of characters?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 11, question: "Which class is thread-safe mutable string?", options: ["StringBuffer", "String", "StringBuilder", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 12, question: "Which method appends string to StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 13, question: "Which method inserts string at index?", options: ["insert()", "appendAt()", "add()", "concatAt()"], answer: "insert()", attempted: false, selected: "" },
  { num: 14, question: "Which method deletes substring in StringBuilder?", options: ["delete()", "remove()", "discard()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 15, question: "Which method reverses StringBuilder?", options: ["reverse()", "flip()", "invert()", "backward()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 16, question: "Which class checks string equality ignoring case?", options: ["equalsIgnoreCase()", "StringUtils", "String.compare()", "compareIgnoreCase()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 17, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "removeSpaces()", "clean()"], answer: "trim()", attempted: false, selected: "" },
  { num: 18, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginWith()", "prefixCheck()", "matchStart()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "endWith()", "suffixCheck()", "matchEnd()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 20, question: "Which method replaces substring in string?", options: ["replace()", "replaceAll()", "substitute()", "change()"], answer: "replace()", attempted: false, selected: "" },
  { num: 21, question: "Which method splits string by delimiter?", options: ["split()", "divide()", "tokenize()", "partition()"], answer: "split()", attempted: false, selected: "" },
  { num: 22, question: "Which method returns substring from index?", options: ["substring()", "subStringFrom()", "slice()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 23, question: "Which method converts string to char array?", options: ["toCharArray()", "toChars()", "convertToArray()", "getChars()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 24, question: "Which class parses primitive from string?", options: ["Wrapper Classes", "Parser", "Converter", "PrimitiveParser"], answer: "Wrapper Classes", attempted: false, selected: "" },
  { num: 25, question: "Which method returns index of char?", options: ["indexOf()", "charIndex()", "find()", "search()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 26, question: "Which method returns last index of char?", options: ["lastIndexOf()", "findLast()", "searchLast()", "charLastIndex()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 27, question: "Which class provides character checks?", options: ["Character", "CharUtils", "String", "CharCheck"], answer: "Character", attempted: false, selected: "" },
  { num: 28, question: "Which method checks if char is digit?", options: ["Character.isDigit()", "Character.isNumber()", "Character.checkDigit()", "Char.isDigit()"], answer: "Character.isDigit()", attempted: false, selected: "" },
  { num: 29, question: "Which method checks if char is letter?", options: ["Character.isLetter()", "Character.isAlphabet()", "Character.isChar()", "Char.isLetter()"], answer: "Character.isLetter()", attempted: false, selected: "" },
  { num: 30, question: "Which method converts char to uppercase?", options: ["Character.toUpperCase()", "Character.upper()", "Char.toUpper()", "Char.uppercase()"], answer: "Character.toUpperCase()", attempted: false, selected: "" },
  { num: 31, question: "Which method converts char to lowercase?", options: ["Character.toLowerCase()", "Character.lower()", "Char.toLower()", "Char.lowercase()"], answer: "Character.toLowerCase()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns Unicode value of char?", options: ["Character.getNumericValue()", "Character.toInt()", "Char.getUnicode()", "Character.toCode()"], answer: "Character.getNumericValue()", attempted: false, selected: "" },
  { num: 33, question: "Which class represents system input/output?", options: ["System", "IO", "Console", "Scanner"], answer: "System", attempted: false, selected: "" },
  { num: 34, question: "Which object reads console input?", options: ["Scanner", "BufferedReader", "Console", "InputStreamReader"], answer: "Scanner", attempted: false, selected: "" },
  { num: 35, question: "Which method reads next line from Scanner?", options: ["nextLine()", "readLine()", "getLine()", "read()"], answer: "nextLine()", attempted: false, selected: "" },
  { num: 36, question: "Which method reads next token from Scanner?", options: ["next()", "nextToken()", "read()", "get()"], answer: "next()", attempted: false, selected: "" },
  { num: 37, question: "Which method closes Scanner?", options: ["close()", "end()", "shutdown()", "terminate()"], answer: "close()", attempted: false, selected: "" },
  { num: 38, question: "Which method flushes output stream?", options: ["flush()", "clear()", "reset()", "refresh()"], answer: "flush()", attempted: false, selected: "" },
  { num: 39, question: "Which method prints output without newline?", options: ["print()", "println()", "write()", "output()"], answer: "print()", attempted: false, selected: "" },
  { num: 40, question: "Which method prints output with newline?", options: ["println()", "print()", "writeLine()", "outputLine()"], answer: "println()", attempted: false, selected: "" },
  { num: 41, question: "Which class writes text to file?", options: ["FileWriter", "BufferedWriter", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method writes string to file?", options: ["write()", "append()", "print()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 43, question: "Which class reads text from file?", options: ["FileReader", "BufferedReader", "Scanner", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 44, question: "Which method closes file reader/writer?", options: ["close()", "end()", "finish()", "terminate()"], answer: "close()", attempted: false, selected: "" },
  { num: 45, question: "Which exception occurs when file not found?", options: ["FileNotFoundException", "IOException", "RuntimeException", "InputException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 46, question: "Which method checks if file exists?", options: ["exists()", "isFile()", "checkFile()", "fileExists()"], answer: "exists()", attempted: false, selected: "" },
  { num: 47, question: "Which method deletes a file?", options: ["delete()", "remove()", "erase()", "destroy()"], answer: "delete()", attempted: false, selected: "" },
  { num: 48, question: "Which class represents directories?", options: ["File", "Path", "Directory", "Folder"], answer: "File", attempted: false, selected: "" },
  { num: 49, question: "Which method creates new file?", options: ["createNewFile()", "newFile()", "makeFile()", "File.create()"], answer: "createNewFile()", attempted: false, selected: "" },
  { num: 50, question: "Which method creates directory?", options: ["mkdir()", "createDir()", "makeDir()", "newDir()"], answer: "mkdir()", attempted: false, selected: "" }
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
