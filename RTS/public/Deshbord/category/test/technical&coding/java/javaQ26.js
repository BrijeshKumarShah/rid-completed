const questions=
  [
  { num: 1, question: "Which interface is used for sorting collections?", options: ["Comparable", "Comparator", "Iterable", "Collection"], answer: "Comparator", attempted: false, selected: "" },
  { num: 2, question: "Which method compares two objects using Comparator?", options: ["compare()", "compareTo()", "equals()", "match()"], answer: "compare()", attempted: false, selected: "" },
  { num: 3, question: "Which interface is implemented by classes that can be iterated?", options: ["Iterable", "Iterator", "Collection", "List"], answer: "Iterable", attempted: false, selected: "" },
  { num: 4, question: "Which interface is used to iterate over a collection?", options: ["Iterator", "Iterable", "Enumeration", "ListIterator"], answer: "Iterator", attempted: false, selected: "" },
  { num: 5, question: "Which method checks if collection has more elements in Iterator?", options: ["hasNext()", "next()", "more()", "isEmpty()"], answer: "hasNext()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns next element from Iterator?", options: ["next()", "getNext()", "nextElement()", "element()"], answer: "next()", attempted: false, selected: "" },
  { num: 7, question: "Which interface allows bidirectional iteration?", options: ["ListIterator", "Iterator", "Iterable", "Enumeration"], answer: "ListIterator", attempted: false, selected: "" },
  { num: 8, question: "Which method adds element to collection?", options: ["add()", "insert()", "put()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 9, question: "Which method removes element from collection?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 10, question: "Which collection interface is implemented by HashSet?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 11, question: "Which collection class maintains insertion order?", options: ["LinkedHashSet", "HashSet", "TreeSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" },
  { num: 12, question: "Which collection class sorts elements naturally?", options: ["TreeSet", "HashSet", "LinkedList", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 13, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "includes()"], answer: "contains()", attempted: false, selected: "" },
  { num: 14, question: "Which method removes all elements from collection?", options: ["clear()", "removeAll()", "deleteAll()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 15, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 16, question: "Which interface represents a key-value mapping?", options: ["Map", "Set", "List", "Collection"], answer: "Map", attempted: false, selected: "" },
  { num: 17, question: "Which method adds key-value pair in Map?", options: ["put()", "add()", "insert()", "set()"], answer: "put()", attempted: false, selected: "" },
  { num: 18, question: "Which method returns value for key in Map?", options: ["get()", "find()", "lookup()", "value()"], answer: "get()", attempted: false, selected: "" },
  { num: 19, question: "Which method removes key-value pair in Map?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 20, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "List", "Collection"], answer: "Map", attempted: false, selected: "" },
  { num: 21, question: "Which Map implementation preserves insertion order?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 22, question: "Which Map implementation sorts keys?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 23, question: "Which interface represents a queue?", options: ["Queue", "Deque", "Stack", "List"], answer: "Queue", attempted: false, selected: "" },
  { num: 24, question: "Which method adds element at end of queue?", options: ["offer()", "add()", "insert()", "enqueue()"], answer: "offer()", attempted: false, selected: "" },
  { num: 25, question: "Which method removes element from front of queue?", options: ["poll()", "remove()", "dequeue()", "pop()"], answer: "poll()", attempted: false, selected: "" },
  { num: 26, question: "Which interface represents double-ended queue?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 27, question: "Which class implements Deque?", options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Stack"], answer: "ArrayDeque", attempted: false, selected: "" },
  { num: 28, question: "Which interface represents a priority queue?", options: ["Queue", "PriorityQueue", "Deque", "List"], answer: "Queue", attempted: false, selected: "" },
  { num: 29, question: "Which class implements priority queue?", options: ["PriorityQueue", "ArrayDeque", "LinkedList", "Stack"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 30, question: "Which class represents LIFO structure?", options: ["Stack", "Queue", "ArrayList", "LinkedList"], answer: "Stack", attempted: false, selected: "" },
  { num: 31, question: "Which method pushes element onto stack?", options: ["push()", "add()", "insert()", "offer()"], answer: "push()", attempted: false, selected: "" },
  { num: 32, question: "Which method pops element from stack?", options: ["pop()", "remove()", "delete()", "poll()"], answer: "pop()", attempted: false, selected: "" },
  { num: 33, question: "Which method peeks top element of stack?", options: ["peek()", "top()", "element()", "front()"], answer: "peek()", attempted: false, selected: "" },
  { num: 34, question: "Which interface represents set of unique elements?", options: ["Set", "List", "Queue", "Map"], answer: "Set", attempted: false, selected: "" },
  { num: 35, question: "Which class implements Set and sorts elements?", options: ["TreeSet", "HashSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 36, question: "Which class implements Set without duplicates and order not guaranteed?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "HashSet", attempted: false, selected: "" },
  { num: 37, question: "Which class implements Set with insertion order preserved?", options: ["LinkedHashSet", "TreeSet", "HashSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" },
  { num: 38, question: "Which class provides synchronized map?", options: ["Hashtable", "HashMap", "TreeMap", "LinkedHashMap"], answer: "Hashtable", attempted: false, selected: "" },
  { num: 39, question: "Which class provides synchronized set?", options: ["Collections.synchronizedSet()", "HashSet", "TreeSet", "LinkedHashSet"], answer: "Collections.synchronizedSet()", attempted: false, selected: "" },
  { num: 40, question: "Which class provides unmodifiable collections?", options: ["Collections.unmodifiableList()", "HashSet", "ArrayList", "LinkedList"], answer: "Collections.unmodifiableList()", attempted: false, selected: "" },
  { num: 41, question: "Which class provides synchronized list?", options: ["Collections.synchronizedList()", "ArrayList", "LinkedList", "Vector"], answer: "Collections.synchronizedList()", attempted: false, selected: "" },
  { num: 42, question: "Which class is legacy synchronized vector?", options: ["Vector", "ArrayList", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 43, question: "Which class is legacy synchronized stack?", options: ["Stack", "Vector", "ArrayDeque", "ArrayList"], answer: "Stack", attempted: false, selected: "" },
  { num: 44, question: "Which method reverses order of elements in list?", options: ["Collections.reverse()", "list.reverse()", "invert()", "allOfThese"], answer: "Collections.reverse()", attempted: false, selected: "" },
  { num: 45, question: "Which method shuffles elements of list?", options: ["Collections.shuffle()", "shuffle()", "mix()", "allOfThese"], answer: "Collections.shuffle()", attempted: false, selected: "" },
  { num: 46, question: "Which method sorts list elements?", options: ["Collections.sort()", "list.sort()", "sort()", "allOfThese"], answer: "Collections.sort()", attempted: false, selected: "" },
  { num: 47, question: "Which method finds max element in collection?", options: ["Collections.max()", "max()", "findMax()", "allOfThese"], answer: "Collections.max()", attempted: false, selected: "" },
  { num: 48, question: "Which method finds min element in collection?", options: ["Collections.min()", "min()", "findMin()", "allOfThese"], answer: "Collections.min()", attempted: false, selected: "" },
  { num: 49, question: "Which method swaps two elements in list?", options: ["Collections.swap()", "swap()", "exchange()", "allOfThese"], answer: "Collections.swap()", attempted: false, selected: "" },
  { num: 50, question: "Which method copies elements from source list to destination list?", options: ["Collections.copy()", "copy()", "clone()", "allOfThese"], answer: "Collections.copy()", attempted: false, selected: "" }
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
