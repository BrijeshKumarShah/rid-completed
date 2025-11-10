const questions =[
  { num: 1, question: "Which method rounds a floating number to nearest integer?", options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"], answer: "Math.round()", attempted: false, selected: "" },
  { num: 2, question: "Which method returns largest of two numbers?", options: ["Math.max()", "Math.min()", "Math.greater()", "Math.compare()"], answer: "Math.max()", attempted: false, selected: "" },
  { num: 3, question: "Which method returns smallest of two numbers?", options: ["Math.min()", "Math.max()", "Math.lower()", "Math.compare()"], answer: "Math.min()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns square root of number?", options: ["Math.sqrt()", "Math.square()", "Math.pow()", "Math.root()"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns power of number?", options: ["Math.pow()", "Math.power()", "Math.exp()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns exponential e^x?", options: ["Math.exp()", "Math.exponent()", "Math.pow()", "Math.e()"], answer: "Math.exp()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns natural logarithm?", options: ["Math.log()", "Math.ln()", "Math.log10()", "Math.log2()"], answer: "Math.log()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns base 10 logarithm?", options: ["Math.log10()", "Math.log()", "Math.ln()", "Math.log2()"], answer: "Math.log10()", attempted: false, selected: "" },
  { num: 9, question: "Which method returns absolute difference?", options: ["Math.abs()", "Math.diff()", "Math.delta()", "Math.subtract()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns random double between 0.0 and 1.0?", options: ["Math.random()", "Random.nextDouble()", "Math.rand()", "Random.random()"], answer: "Math.random()", attempted: false, selected: "" },
  { num: 11, question: "Which class allows formatting numbers?", options: ["DecimalFormat", "NumberFormat", "Formatter", "Format"], answer: "DecimalFormat", attempted: false, selected: "" },
  { num: 12, question: "Which method formats number as currency?", options: ["NumberFormat.getCurrencyInstance()", "DecimalFormat.currency()", "Currency.format()", "Format.currency()"], answer: "NumberFormat.getCurrencyInstance()", attempted: false, selected: "" },
  { num: 13, question: "Which method formats percentage?", options: ["NumberFormat.getPercentInstance()", "DecimalFormat.percent()", "Percent.format()", "Format.percent()"], answer: "NumberFormat.getPercentInstance()", attempted: false, selected: "" },
  { num: 14, question: "Which class parses numeric strings?", options: ["Integer", "Double", "Long", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 15, question: "Which method converts integer to string?", options: ["String.valueOf()", "Integer.toString()", "Both a and b", "toString()"], answer: "Both a and b", attempted: false, selected: "" },
  { num: 16, question: "Which interface allows sorting by comparator?", options: ["Comparator", "Comparable", "ComparableList", "Sorter"], answer: "Comparator", attempted: false, selected: "" },
  { num: 17, question: "Which interface allows natural ordering?", options: ["Comparable", "Comparator", "Ordered", "Sort"], answer: "Comparable", attempted: false, selected: "" },
  { num: 18, question: "Which method in Comparator compares two objects?", options: ["compare()", "compareTo()", "compareObjects()", "check()"], answer: "compare()", attempted: false, selected: "" },
  { num: 19, question: "Which method in Comparable compares current object?", options: ["compareTo()", "compare()", "equals()", "check()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 20, question: "Which class represents fixed-size queue?", options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Queue"], answer: "ArrayDeque", attempted: false, selected: "" },
  { num: 21, question: "Which class represents priority queue?", options: ["PriorityQueue", "LinkedList", "ArrayDeque", "Queue"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 22, question: "Which interface allows LIFO stack?", options: ["Stack", "Deque", "Queue", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 23, question: "Which method in Stack adds element?", options: ["push()", "add()", "append()", "insert()"], answer: "push()", attempted: false, selected: "" },
  { num: 24, question: "Which method in Stack removes top element?", options: ["pop()", "remove()", "delete()", "discard()"], answer: "pop()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns top element without removing?", options: ["peek()", "top()", "get()", "first()"], answer: "peek()", attempted: false, selected: "" },
  { num: 26, question: "Which class provides system input and output streams?", options: ["System", "Scanner", "Console", "IOStream"], answer: "System", attempted: false, selected: "" },
  { num: 27, question: "Which class provides console input?", options: ["Console", "Scanner", "System", "BufferedReader"], answer: "Console", attempted: false, selected: "" },
  { num: 28, question: "Which method in Console reads password securely?", options: ["readPassword()", "readSecure()", "readLine()", "getPassword()"], answer: "readPassword()", attempted: false, selected: "" },
  { num: 29, question: "Which class represents immutable list?", options: ["List.of()", "Collections.unmodifiableList()", "Arrays.asList()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if object equals another?", options: ["equals()", "==", "compareTo()", "isEqual()"], answer: "equals()", attempted: false, selected: "" },
  { num: 31, question: "Which method returns class name of object?", options: ["getClass()", "className()", "getName()", "toString()"], answer: "getClass()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns canonical name of class?", options: ["getCanonicalName()", "getName()", "className()", "getSimpleName()"], answer: "getCanonicalName()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns simple name of class?", options: ["getSimpleName()", "getName()", "className()", "getCanonicalName()"], answer: "getSimpleName()", attempted: false, selected: "" },
  { num: 34, question: "Which method returns superclass of class?", options: ["getSuperclass()", "getParent()", "superClass()", "parentClass()"], answer: "getSuperclass()", attempted: false, selected: "" },
  { num: 35, question: "Which method checks if object is instance of class?", options: ["instanceof", "isInstance()", "checkInstance()", "typeOf()"], answer: "instanceof", attempted: false, selected: "" },
  { num: 36, question: "Which class allows property change listener?", options: ["PropertyChangeSupport", "PropertyListener", "Observable", "ChangeSupport"], answer: "PropertyChangeSupport", attempted: false, selected: "" },
  { num: 37, question: "Which method fires property change event?", options: ["firePropertyChange()", "notifyChange()", "fireChange()", "triggerChange()"], answer: "firePropertyChange()", attempted: false, selected: "" },
  { num: 38, question: "Which interface allows object cloning?", options: ["Cloneable", "Serializable", "Copiable", "Duplicable"], answer: "Cloneable", attempted: false, selected: "" },
  { num: 39, question: "Which method in Object clones object?", options: ["clone()", "copy()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 40, question: "Which interface allows object serialization?", options: ["Serializable", "Cloneable", "Externalizable", "Persistable"], answer: "Serializable", attempted: false, selected: "" },
  { num: 41, question: "Which class writes objects to file?", options: ["ObjectOutputStream", "ObjectWriter", "FileWriter", "ObjectStream"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 42, question: "Which class reads objects from file?", options: ["ObjectInputStream", "ObjectReader", "FileReader", "ObjectStream"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 43, question: "Which method returns character array from string?", options: ["toCharArray()", "getChars()", "charArray()", "extractChars()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 44, question: "Which method copies string characters to array?", options: ["getChars()", "toCharArray()", "copyChars()", "extractChars()"], answer: "getChars()", attempted: false, selected: "" },
  { num: 45, question: "Which class provides regular expressions?", options: ["Pattern", "Matcher", "Regex", "Expression"], answer: "Pattern", attempted: false, selected: "" },
  { num: 46, question: "Which class matches regex on string?", options: ["Matcher", "Pattern", "RegexMatcher", "Expression"], answer: "Matcher", attempted: false, selected: "" },
  { num: 47, question: "Which method checks if string matches regex?", options: ["matches()", "match()", "check()", "verify()"], answer: "matches()", attempted: false, selected: "" },
  { num: 48, question: "Which method splits string by regex?", options: ["split()", "divide()", "tokenize()", "cut()"], answer: "split()", attempted: false, selected: "" },
  { num: 49, question: "Which method replaces substring in string?", options: ["replace()", "replaceAll()", "substitute()", "update()"], answer: "replace()", attempted: false, selected: "" },
  { num: 50, question: "Which method replaces all regex matches?", options: ["replaceAll()", "replace()", "replaceFirst()", "updateAll()"], answer: "replaceAll()", attempted: false, selected: "" }
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
