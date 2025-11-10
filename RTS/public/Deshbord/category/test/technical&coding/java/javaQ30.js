const questions=
  [
  { num: 1, question: "Which class is used for reading characters from file?", options: ["FileReader", "BufferedReader", "InputStreamReader", "FileInputStream"], answer: "FileReader", attempted: false, selected: "" },
  { num: 2, question: "Which class is used for writing characters to file?", options: ["FileWriter", "BufferedWriter", "OutputStreamWriter", "FileOutputStream"], answer: "FileWriter", attempted: false, selected: "" },
  { num: 3, question: "Which method reads a line from BufferedReader?", options: ["readLine()", "read()", "nextLine()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 4, question: "Which method writes string to BufferedWriter?", options: ["write()", "append()", "print()", "put()"], answer: "write()", attempted: false, selected: "" },
  { num: 5, question: "Which class is used to read bytes from file?", options: ["FileInputStream", "FileReader", "BufferedInputStream", "InputStream"], answer: "FileInputStream", attempted: false, selected: "" },
  { num: 6, question: "Which class is used to write bytes to file?", options: ["FileOutputStream", "FileWriter", "BufferedOutputStream", "OutputStream"], answer: "FileOutputStream", attempted: false, selected: "" },
  { num: 7, question: "Which method reads a byte from FileInputStream?", options: ["read()", "get()", "next()", "input()"], answer: "read()", attempted: false, selected: "" },
  { num: 8, question: "Which method closes a stream?", options: ["close()", "end()", "shutdown()", "finish()"], answer: "close()", attempted: false, selected: "" },
  { num: 9, question: "Which class implements Random Access File?", options: ["RandomAccessFile", "FileReader", "FileWriter", "BufferedReader"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 10, question: "Which mode opens file for reading?", options: ["r", "rw", "w", "a"], answer: "r", attempted: false, selected: "" },
  { num: 11, question: "Which mode opens file for read/write?", options: ["rw", "r", "w", "a"], answer: "rw", attempted: false, selected: "" },
  { num: 12, question: "Which class is used for formatted printing?", options: ["PrintWriter", "BufferedWriter", "Formatter", "PrintStream"], answer: "PrintWriter", attempted: false, selected: "" },
  { num: 13, question: "Which class formats strings?", options: ["Formatter", "StringBuilder", "StringBuffer", "PrintWriter"], answer: "Formatter", attempted: false, selected: "" },
  { num: 14, question: "Which method returns parent directory?", options: ["getParent()", "getPath()", "getRoot()", "getDirectory()"], answer: "getParent()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if file exists?", options: ["exists()", "isFile()", "check()", "found()"], answer: "exists()", attempted: false, selected: "" },
  { num: 16, question: "Which method deletes a file?", options: ["delete()", "remove()", "destroy()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 17, question: "Which method creates new file?", options: ["createNewFile()", "newFile()", "makeFile()", "addFile()"], answer: "createNewFile()", attempted: false, selected: "" },
  { num: 18, question: "Which method checks if file is readable?", options: ["canRead()", "isReadable()", "checkRead()", "readable()"], answer: "canRead()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if file is writable?", options: ["canWrite()", "isWritable()", "checkWrite()", "writable()"], answer: "canWrite()", attempted: false, selected: "" },
  { num: 20, question: "Which class reads primitive data types from file?", options: ["DataInputStream", "FileInputStream", "BufferedReader", "Scanner"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 21, question: "Which class writes primitive data types to file?", options: ["DataOutputStream", "FileOutputStream", "BufferedWriter", "PrintWriter"], answer: "DataOutputStream", attempted: false, selected: "" },
  { num: 22, question: "Which class reads objects from file?", options: ["ObjectInputStream", "DataInputStream", "FileInputStream", "BufferedReader"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 23, question: "Which class writes objects to file?", options: ["ObjectOutputStream", "DataOutputStream", "FileOutputStream", "PrintWriter"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 24, question: "Which exception occurs for file not found?", options: ["FileNotFoundException", "IOException", "NullPointerException", "RuntimeException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 25, question: "Which method flushes output stream?", options: ["flush()", "clear()", "close()", "commit()"], answer: "flush()", attempted: false, selected: "" },
  { num: 26, question: "Which class reads console input?", options: ["Console", "Scanner", "BufferedReader", "InputStreamReader"], answer: "Console", attempted: false, selected: "" },
  { num: 27, question: "Which method reads password from console?", options: ["readPassword()", "readLine()", "nextLine()", "getPassword()"], answer: "readPassword()", attempted: false, selected: "" },
  { num: 28, question: "Which method returns file length?", options: ["length()", "size()", "getLength()", "getSize()"], answer: "length()", attempted: false, selected: "" },
  { num: 29, question: "Which method renames a file?", options: ["renameTo()", "rename()", "changeName()", "setName()"], answer: "renameTo()", attempted: false, selected: "" },
  { num: 30, question: "Which class provides random access to file pointer?", options: ["RandomAccessFile", "FileReader", "FileWriter", "BufferedReader"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 31, question: "Which method moves file pointer?", options: ["seek()", "move()", "goto()", "position()"], answer: "seek()", attempted: false, selected: "" },
  { num: 32, question: "Which method reads byte array from file?", options: ["read(byte[] b)", "readBytes()", "readAll()", "getBytes()"], answer: "read(byte[] b)", attempted: false, selected: "" },
  { num: 33, question: "Which method writes byte array to file?", options: ["write(byte[] b)", "writeBytes()", "sendBytes()", "putBytes()"], answer: "write(byte[] b)", attempted: false, selected: "" },
  { num: 34, question: "Which method checks if file is directory?", options: ["isDirectory()", "isFolder()", "checkDirectory()", "directory()"], answer: "isDirectory()", attempted: false, selected: "" },
  { num: 35, question: "Which method lists files in directory?", options: ["list()", "getFiles()", "directoryFiles()", "listFiles()"], answer: "listFiles()", attempted: false, selected: "" },
  { num: 36, question: "Which method lists file names only?", options: ["list()", "listFiles()", "names()", "getNames()"], answer: "list()", attempted: false, selected: "" },
  { num: 37, question: "Which class reads data from byte array?", options: ["ByteArrayInputStream", "ByteInput", "ByteArrayReader", "ByteStream"], answer: "ByteArrayInputStream", attempted: false, selected: "" },
  { num: 38, question: "Which class writes data to byte array?", options: ["ByteArrayOutputStream", "ByteOutput", "ByteArrayWriter", "ByteStream"], answer: "ByteArrayOutputStream", attempted: false, selected: "" },
  { num: 39, question: "Which class reads data from string as stream?", options: ["StringReader", "StringInput", "Reader", "StringStream"], answer: "StringReader", attempted: false, selected: "" },
  { num: 40, question: "Which class writes data to string as stream?", options: ["StringWriter", "StringOutput", "Writer", "StringStream"], answer: "StringWriter", attempted: false, selected: "" },
  { num: 41, question: "Which method returns available bytes in InputStream?", options: ["available()", "bytesAvailable()", "getAvailable()", "remaining()"], answer: "available()", attempted: false, selected: "" },
  { num: 42, question: "Which class buffers output for efficiency?", options: ["BufferedOutputStream", "FileOutputStream", "PrintWriter", "DataOutputStream"], answer: "BufferedOutputStream", attempted: false, selected: "" },
  { num: 43, question: "Which class buffers input for efficiency?", options: ["BufferedInputStream", "FileInputStream", "Scanner", "DataInputStream"], answer: "BufferedInputStream", attempted: false, selected: "" },
  { num: 44, question: "Which class allows mark and reset of stream?", options: ["BufferedInputStream", "FileInputStream", "Scanner", "DataInputStream"], answer: "BufferedInputStream", attempted: false, selected: "" },
  { num: 45, question: "Which method marks current position in stream?", options: ["mark(int readlimit)", "position()", "bookmark()", "mark()"], answer: "mark(int readlimit)", attempted: false, selected: "" },
  { num: 46, question: "Which method resets stream to mark?", options: ["reset()", "goBack()", "rewind()", "restart()"], answer: "reset()", attempted: false, selected: "" },
  { num: 47, question: "Which method skips n bytes in stream?", options: ["skip(long n)", "move(long n)", "forward(long n)", "jump(long n)"], answer: "skip(long n)", attempted: false, selected: "" },
  { num: 48, question: "Which class reads primitive data from byte array?", options: ["DataInputStream", "ByteArrayInputStream", "ObjectInputStream", "Scanner"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 49, question: "Which class writes primitive data to byte array?", options: ["DataOutputStream", "ByteArrayOutputStream", "ObjectOutputStream", "PrintWriter"], answer: "DataOutputStream", attempted: false, selected: "" },
  { num: 50, question: "Which method closes all streams in try-with-resources?", options: ["automatic close", "close()", "shutdown()", "release()"], answer: "automatic close", attempted: false, selected: "" }
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
