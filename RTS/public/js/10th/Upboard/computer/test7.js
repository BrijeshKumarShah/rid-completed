


 const questions = [
  {
    "num": 1,
    "question_en": "Which software is used to manage databases?",
    "question_hi": "डेटाबेस प्रबंधित करने के लिए किस सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Database Management System", "Word Processor", "Spreadsheet", "Presentation Software"],
    "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "वर्ड प्रोसेसर", "स्प्रेडशीट", "प्रेजेंटेशन सॉफ्टवेयर"],
    "answer_en": "Database Management System",
    "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
    "explanation_en": "DBMS allows users to create, read, update and delete data in databases.",
    "explanation_hi": "DBMS उपयोगकर्ताओं को डेटाबेस में डेटा बनाने, पढ़ने, अपडेट करने और हटाने की अनुमति देता है।"
  },
  {
    "num": 2,
    "question_en": "What is the purpose of an algorithm in programming?",
    "question_hi": "प्रोग्रामिंग में एल्गोरिदम का उद्देश्य क्या है?",
    "options_en": ["Step-by-step problem solving method", "Programming language", "Computer hardware", "Output device"],
    "options_hi": ["चरणबद्ध समस्या समाधान विधि", "प्रोग्रामिंग भाषा", "कंप्यूटर हार्डवेयर", "आउटपुट डिवाइस"],
    "answer_en": "Step-by-step problem solving method",
    "answer_hi": "चरणबद्ध समस्या समाधान विधि",
    "explanation_en": "Algorithm provides clear instructions to solve specific problem efficiently.",
    "explanation_hi": "एल्गोरिदम विशिष्ट समस्या को कुशलतापूर्वक हल करने के लिए स्पष्ट निर्देश प्रदान करता है।"
  },
  {
    "num": 3,
    "question_en": "Which protocol is used for sending emails?",
    "question_hi": "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SMTP", "HTTP", "FTP", "TCP"],
    "options_hi": ["SMTP", "HTTP", "FTP", "TCP"],
    "answer_en": "SMTP",
    "answer_hi": "SMTP",
    "explanation_en": "SMTP (Simple Mail Transfer Protocol) transfers email between servers.",
    "explanation_hi": "SMTP (सिंपल मेल ट्रांसफर प्रोटोकॉल) सर्वरों के बीच ईमेल स्थानांतरित करता है।"
  },
  {
    "num": 4,
    "question_en": "What is a 'bug' in software?",
    "question_hi": "सॉफ्टवेयर में 'बग' क्या है?",
    "options_en": ["Error or flaw in program", "Computer virus", "Hardware failure", "Network problem"],
    "options_hi": ["प्रोग्राम में त्रुटि या दोष", "कंप्यूटर वायरस", "हार्डवेयर विफलता", "नेटवर्क समस्या"],
    "answer_en": "Error or flaw in program",
    "answer_hi": "प्रोग्राम में त्रुटि या दोष",
    "explanation_en": "Bug causes software to produce incorrect or unexpected results.",
    "explanation_hi": "बग सॉफ्टवेयर को गलत या अप्रत्याशित परिणाम उत्पन्न करने का कारण बनता है।"
  },
  {
    "num": 5,
    "question_en": "Which data structure uses LIFO principle?",
    "question_hi": "कौन सी डेटा संरचना LIFO सिद्धांत का उपयोग करती है?",
    "options_en": ["Stack", "Queue", "Array", "Linked List"],
    "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
    "answer_en": "Stack",
    "answer_hi": "स्टैक",
    "explanation_en": "Stack follows Last In First Out - last element added is first removed.",
    "explanation_hi": "स्टैक Last In First Out का पालन करता है - अंतिम जोड़ा गया तत्व पहले हटाया जाता है।"
  },
  {
    "num": 6,
    "question_en": "What is 'debugging' in programming?",
    "question_hi": "प्रोग्रामिंग में 'डिबगिंग' क्या है?",
    "options_en": ["Finding and fixing errors", "Writing code", "Designing interface", "Testing hardware"],
    "options_hi": ["त्रुटियाँ ढूँढना और ठीक करना", "कोड लिखना", "इंटरफ़ेस डिजाइन करना", "हार्डवेयर टेस्ट करना"],
    "answer_en": "Finding and fixing errors",
    "answer_hi": "त्रुटियाँ ढूँढना और ठीक करना",
    "explanation_en": "Debugging involves identifying, analyzing and removing software bugs.",
    "explanation_hi": "डिबगिंग में सॉफ्टवेयर बग की पहचान, विश्लेषण और हटाना शामिल है।"
  },
  {
    "num": 7,
    "question_en": "Which is a non-linear data structure?",
    "question_hi": "कौन सी गैर-रैखिक डेटा संरचना है?",
    "options_en": ["Tree", "Array", "Linked List", "Stack"],
    "options_hi": ["ट्री", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
    "answer_en": "Tree",
    "answer_hi": "ट्री",
    "explanation_en": "Tree has hierarchical structure with parent-child relationships.",
    "explanation_hi": "ट्री में पैरेंट-चाइल्ड संबंधों के साथ पदानुक्रमित संरचना होती है।"
  },
  {
    "num": 8,
    "question_en": "What is 'pseudocode'?",
    "question_hi": "'स्यूडोकोड' क्या है?",
    "options_en": ["Informal code-like description", "Programming language", "Computer hardware", "Output device"],
    "options_hi": ["अनौपचारिक कोड-जैसा विवरण", "प्रोग्रामिंग भाषा", "कंप्यूटर हार्डवेयर", "आउटपुट डिवाइस"],
    "answer_en": "Informal code-like description",
    "answer_hi": "अनौपचारिक कोड-जैसा विवरण",
    "explanation_en": "Pseudocode uses natural language mixed with programming concepts to describe algorithms.",
    "explanation_hi": "स्यूडोकोड एल्गोरिदम का वर्णन करने के लिए प्रोग्रामिंग अवधारणाओं के साथ मिश्रित प्राकृतिक भाषा का उपयोग करता है।"
  },
  {
    "num": 9,
    "question_en": "Which sorting algorithm is simplest?",
    "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम सबसे सरल है?",
    "options_en": ["Bubble Sort", "Quick Sort", "Merge Sort", "Heap Sort"],
    "options_hi": ["बबल सॉर्ट", "क्विक सॉर्ट", "मर्ज सॉर्ट", "हीप सॉर्ट"],
    "answer_en": "Bubble Sort",
    "answer_hi": "बबल सॉर्ट",
    "explanation_en": "Bubble Sort repeatedly steps through list comparing adjacent elements.",
    "explanation_hi": "बबल सॉर्ट आसन्न तत्वों की तुलना करते हुए सूची के माध्यम से बार-बार चलता है।"
  },
  {
    "num": 10,
    "question_en": "What is 'syntax' in programming?",
    "question_hi": "प्रोग्रामिंग में 'सिंटैक्स' क्या है?",
    "options_en": ["Rules for writing code", "Program output", "Computer hardware", "Network protocol"],
    "options_hi": ["कोड लिखने के नियम", "प्रोग्राम आउटपुट", "कंप्यूटर हार्डवेयर", "नेटवर्क प्रोटोकॉल"],
    "answer_en": "Rules for writing code",
    "answer_hi": "कोड लिखने के नियम",
    "explanation_en": "Syntax defines the structure and grammar of programming language.",
    "explanation_hi": "सिंटैक्स प्रोग्रामिंग भाषा की संरचना और व्याकरण को परिभाषित करता है।"
  },
  {
    "num": 11,
    "question_en": "Which data structure uses FIFO principle?",
    "question_hi": "कौन सी डेटा संरचना FIFO सिद्धांत का उपयोग करती है?",
    "options_en": ["Queue", "Stack", "Array", "Tree"],
    "options_hi": ["क्यू", "स्टैक", "ऐरे", "ट्री"],
    "answer_en": "Queue",
    "answer_hi": "क्यू",
    "explanation_en": "Queue follows First In First Out - first element added is first removed.",
    "explanation_hi": "क्यू First In First Out का पालन करता है - पहला जोड़ा गया तत्व पहले हटाया जाता है।"
  },
  {
    "num": 12,
    "question_en": "What is 'compilation' in programming?",
    "question_hi": "प्रोग्रामिंग में 'कंपाइलेशन' क्या है?",
    "options_en": ["Converting source code to machine code", "Executing program", "Debugging code", "Writing code"],
    "options_hi": ["सोर्स कोड को मशीन कोड में बदलना", "प्रोग्राम निष्पादित करना", "कोड डिबग करना", "कोड लिखना"],
    "answer_en": "Converting source code to machine code",
    "answer_hi": "सोर्स कोड को मशीन कोड में बदलना",
    "explanation_en": "Compilation translates entire program before execution.",
    "explanation_hi": "कंपाइलेशन निष्पादन से पहले पूरे प्रोग्राम का अनुवाद करता है।"
  },
  {
    "num": 13,
    "question_en": "Which is a linear data structure?",
    "question_hi": "कौन सी रैखिक डेटा संरचना है?",
    "options_en": ["Array", "Tree", "Graph", "Binary Tree"],
    "options_hi": ["ऐरे", "ट्री", "ग्राफ", "बाइनरी ट्री"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "explanation_en": "Array stores elements in contiguous memory locations.",
    "explanation_hi": "ऐरे तत्वों को सन्निहित मेमोरी स्थानों में संग्रहीत करता है।"
  },
  {
    "num": 14,
    "question_en": "What is 'runtime error'?",
    "question_hi": "'रनटाइम त्रुटि' क्या है?",
    "options_en": ["Error during program execution", "Error during compilation", "Syntax error", "Logical error"],
    "options_hi": ["प्रोग्राम निष्पादन के दौरान त्रुटि", "कंपाइलेशन के दौरान त्रुटि", "सिंटैक्स त्रुटि", "लॉजिकल त्रुटि"],
    "answer_en": "Error during program execution",
    "answer_hi": "प्रोग्राम निष्पादन के दौरान त्रुटि",
    "explanation_en": "Runtime error occurs while program is running, like division by zero.",
    "explanation_hi": "रनटाइम त्रुटि तब होती है जब प्रोग्राम चल रहा होता है, जैसे शून्य से विभाजन।"
  },
  {
    "num": 15,
    "question_en": "Which searching algorithm is simplest?",
    "question_hi": "कौन सा सर्चिंग एल्गोरिदम सबसे सरल है?",
    "options_en": ["Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"],
    "options_hi": ["लीनियर सर्च", "बाइनरी सर्च", "डेप्थ फर्स्ट सर्च", "ब्रेड्थ फर्स्ट सर्च"],
    "answer_en": "Linear Search",
    "answer_hi": "लीनियर सर्च",
    "explanation_en": "Linear Search checks each element sequentially until target is found.",
    "explanation_hi": "लीनियर सर्च प्रत्येक तत्व को क्रमिक रूप से तब तक जाँचता है जब तक लक्ष्य नहीं मिल जाता।"
  },
  {
    "num": 16,
    "question_en": "What is 'variable declaration'?",
    "question_hi": "'वेरिएबल डिक्लेरेशन' क्या है?",
    "options_en": ["Defining variable before use", "Changing variable value", "Deleting variable", "Printing variable"],
    "options_hi": ["उपयोग से पहले वेरिएबल को परिभाषित करना", "वेरिएबल मान बदलना", "वेरिएबल हटाना", "वेरिएबल प्रिंट करना"],
    "answer_en": "Defining variable before use",
    "answer_hi": "उपयोग से पहले वेरिएबल को परिभाषित करना",
    "explanation_en": "Declaration specifies variable name and data type to compiler.",
    "explanation_hi": "डिक्लेरेशन कंपाइलर को वेरिएबल नाम और डेटा प्रकार निर्दिष्ट करता है।"
  },
  {
    "num": 17,
    "question_en": "Which is a dynamic data structure?",
    "question_hi": "कौन सी डायनामिक डेटा संरचना है?",
    "options_en": ["Linked List", "Array", "String", "Integer"],
    "options_hi": ["लिंक्ड लिस्ट", "ऐरे", "स्ट्रिंग", "इंटीजर"],
    "answer_en": "Linked List",
    "answer_hi": "लिंक्ड लिस्ट",
    "explanation_en": "Linked List can grow or shrink during program execution.",
    "explanation_hi": "लिंक्ड लिस्ट प्रोग्राम निष्पादन के दौरान बढ़ या सिकुड़ सकती है।"
  },
  {
    "num": 18,
    "question_en": "What is 'syntax error'?",
    "question_hi": "'सिंटैक्स त्रुटि' क्या है?",
    "options_en": ["Error in code structure", "Error in program logic", "Runtime error", "Hardware error"],
    "options_hi": ["कोड संरचना में त्रुटि", "प्रोग्राम लॉजिक में त्रुटि", "रनटाइम त्रुटि", "हार्डवेयर त्रुटि"],
    "answer_en": "Error in code structure",
    "answer_hi": "कोड संरचना में त्रुटि",
    "explanation_en": "Syntax error violates programming language grammar rules.",
    "explanation_hi": "सिंटैक्स त्रुटि प्रोग्रामिंग भाषा व्याकरण नियमों का उल्लंघन करती है।"
  },
  {
    "num": 19,
    "question_en": "Which searching algorithm requires sorted data?",
    "question_hi": "किस सर्चिंग एल्गोरिदम को सॉर्टेड डेटा की आवश्यकता होती है?",
    "options_en": ["Binary Search", "Linear Search", "Sequential Search", "Jump Search"],
    "options_hi": ["बाइनरी सर्च", "लीनियर सर्च", "सीक्वेंशियल सर्च", "जंप सर्च"],
    "answer_en": "Binary Search",
    "answer_hi": "बाइनरी सर्च",
    "explanation_en": "Binary Search divides sorted array repeatedly to find target.",
    "explanation_hi": "बाइनरी सर्च लक्ष्य खोजने के लिए सॉर्टेड ऐरे को बार-बार विभाजित करता है।"
  },
  {
    "num": 20,
    "question_en": "What is 'algorithm efficiency'?",
    "question_hi": "'एल्गोरिदम दक्षता' क्या है?",
    "options_en": ["Measure of time and space used", "Program output", "Code length", "Number of variables"],
    "options_hi": ["उपयोग किए गए समय और स्थान का माप", "प्रोग्राम आउटपुट", "कोड लंबाई", "वेरिएबल की संख्या"],
    "answer_en": "Measure of time and space used",
    "answer_hi": "उपयोग किए गए समय और स्थान का माप",
    "explanation_en": "Efficiency measured by time complexity (speed) and space complexity (memory).",
    "explanation_hi": "दक्षता को टाइम कॉम्प्लेक्सिटी (गति) और स्पेस कॉम्प्लेक्सिटी (मेमोरी) द्वारा मापा जाता है।"
  },
  {
    "num": 21,
    "question_en": "Which is a static data structure?",
    "question_hi": "कौन सी स्टैटिक डेटा संरचना है?",
    "options_en": ["Array", "Linked List", "Tree", "Graph"],
    "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्री", "ग्राफ"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "explanation_en": "Array has fixed size determined at compile time.",
    "explanation_hi": "ऐरे का निश्चित आकार कंपाइल टाइम पर निर्धारित होता है।"
  },
  {
    "num": 22,
    "question_en": "What is 'logical error'?",
    "question_hi": "'लॉजिकल त्रुटि' क्या है?",
    "options_en": ["Error in program logic", "Syntax error", "Runtime error", "Compilation error"],
    "options_hi": ["प्रोग्राम लॉजिक में त्रुटि", "सिंटैक्स त्रुटि", "रनटाइम त्रुटि", "कंपाइलेशन त्रुटि"],
    "answer_en": "Error in program logic",
    "answer_hi": "प्रोग्राम लॉजिक में त्रुटि",
    "explanation_en": "Logical error produces incorrect output but program runs without crashing.",
    "explanation_hi": "लॉजिकल त्रुटि गलत आउटपुट उत्पन्न करती है लेकिन प्रोग्राम क्रैश किए बिना चलता है।"
  },
  {
    "num": 23,
    "question_en": "Which sorting algorithm is most efficient?",
    "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम सबसे कुशल है?",
    "options_en": ["Quick Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
    "options_hi": ["क्विक सॉर्ट", "बबल सॉर्ट", "सेलेक्शन सॉर्ट", "इंसर्शन सॉर्ट"],
    "answer_en": "Quick Sort",
    "answer_hi": "क्विक सॉर्ट",
    "explanation_en": "Quick Sort uses divide-and-conquer with average time complexity O(n log n).",
    "explanation_hi": "क्विक सॉर्ट औसत समय जटिलता O(n log n) के साथ डिवाइड-एंड-कॉनकर का उपयोग करता है।"
  },
  {
    "num": 24,
    "question_en": "What is 'flowchart'?",
    "question_hi": "'फ्लोचार्ट' क्या है?",
    "options_en": ["Visual representation of algorithm", "Programming language", "Computer hardware", "Output device"],
    "options_hi": ["एल्गोरिदम का दृश्य निरूपण", "प्रोग्रामिंग भाषा", "कंप्यूटर हार्डवेयर", "आउटपुट डिवाइस"],
    "answer_en": "Visual representation of algorithm",
    "answer_hi": "एल्गोरिदम का दृश्य निरूपण",
    "explanation_en": "Flowchart uses standard symbols to show program flow and logic.",
    "explanation_hi": "फ्लोचार्ट प्रोग्राम प्रवाह और तर्क दिखाने के लिए मानक प्रतीकों का उपयोग करता है।"
  },
  {
    "num": 25,
    "question_en": "Which is a primitive data type?",
    "question_hi": "कौन सा प्रिमिटिव डेटा प्रकार है?",
    "options_en": ["Integer", "Array", "Linked List", "Tree"],
    "options_hi": ["इंटीजर", "ऐरे", "लिंक्ड लिस्ट", "ट्री"],
    "answer_en": "Integer",
    "answer_hi": "इंटीजर",
    "explanation_en": "Primitive data types are basic types built into programming languages.",
    "explanation_hi": "प्रिमिटिव डेटा प्रकार बुनियादी प्रकार हैं जो प्रोग्रामिंग भाषाओं में निर्मित होते हैं।"
  },
  {
    "num": 26,
    "question_en": "What is 'compiler'?",
    "question_hi": "'कंपाइलर' क्या है?",
    "options_en": ["Translates entire program", "Executes line by line", "Debugs program", "Designs interface"],
    "options_hi": ["पूरे प्रोग्राम का अनुवाद करता है", "लाइन दर लाइन निष्पादित करता है", "प्रोग्राम डिबग करता है", "इंटरफ़ेस डिजाइन करता है"],
    "answer_en": "Translates entire program",
    "answer_hi": "पूरे प्रोग्राम का अनुवाद करता है",
    "explanation_en": "Compiler converts high-level language to machine code before execution.",
    "explanation_hi": "कंपाइलर निष्पादन से पहले उच्च-स्तरीय भाषा को मशीन कोड में बदलता है।"
  },
  {
    "num": 27,
    "question_en": "Which data structure represents hierarchical data?",
    "question_hi": "कौन सी डेटा संरचना पदानुक्रमित डेटा का प्रतिनिधित्व करती है?",
    "options_en": ["Tree", "Array", "Linked List", "Stack"],
    "options_hi": ["ट्री", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
    "answer_en": "Tree",
    "answer_hi": "ट्री",
    "explanation_en": "Tree organizes data in parent-child relationships forming hierarchy.",
    "explanation_hi": "ट्री डेटा को पदानुक्रम बनाने वाले पैरेंट-चाइल्ड संबंधों में व्यवस्थित करता है।"
  },
  {
    "num": 28,
    "question_en": "What is 'interpreter'?",
    "question_hi": "'इंटरप्रेटर' क्या है?",
    "options_en": ["Executes code line by line", "Compiles entire program", "Debugs program", "Designs interface"],
    "options_hi": ["कोड को लाइन दर लाइन निष्पादित करता है", "पूरे प्रोग्राम को कंपाइल करता है", "प्रोग्राम डिबग करता है", "इंटरफ़ेस डिजाइन करता है"],
    "answer_en": "Executes code line by line",
    "answer_hi": "कोड को लाइन दर लाइन निष्पादित करता है",
    "explanation_en": "Interpreter reads and executes source code directly without compilation.",
    "explanation_hi": "इंटरप्रेटर कंपाइलेशन के बिना सीधे सोर्स कोड को पढ़ता है और निष्पादित करता है।"
  },
  {
    "num": 29,
    "question_en": "Which is a composite data type?",
    "question_hi": "कौन सा कम्पोजिट डेटा प्रकार है?",
    "options_en": ["Array", "Integer", "Character", "Boolean"],
    "options_hi": ["ऐरे", "इंटीजर", "कैरेक्टर", "बूलियन"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "explanation_en": "Composite data types combine primitive types to form complex structures.",
    "explanation_hi": "कम्पोजिट डेटा प्रकार जटिल संरचनाएं बनाने के लिए प्रिमिटिव प्रकारों को जोड़ते हैं।"
  },
  {
    "num": 30,
    "question_en": "What is 'time complexity'?",
    "question_hi": "'टाइम कॉम्प्लेक्सिटी' क्या है?",
    "options_en": ["Measure of algorithm execution time", "Program output", "Code length", "Memory usage"],
    "options_hi": ["एल्गोरिदम निष्पादन समय का माप", "प्रोग्राम आउटपुट", "कोड लंबाई", "मेमोरी उपयोग"],
    "answer_en": "Measure of algorithm execution time",
    "answer_hi": "एल्गोरिदम निष्पादन समय का माप",
    "explanation_en": "Time complexity describes how execution time grows with input size.",
    "explanation_hi": "टाइम कॉम्प्लेक्सिटी बताती है कि निष्पादन समय इनपुट आकार के साथ कैसे बढ़ता है।"
  },
  {
    "num": 31,
    "question_en": "Which data structure allows random access?",
    "question_hi": "कौन सी डेटा संरचना रैंडम एक्सेस की अनुमति देती है?",
    "options_en": ["Array", "Linked List", "Stack", "Queue"],
    "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "स्टैक", "क्यू"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "explanation_en": "Array elements can be accessed directly using index positions.",
    "explanation_hi": "ऐरे तत्वों को इंडेक्स पोजीशन का उपयोग करके सीधे एक्सेस किया जा सकता है।"
  },
  {
    "num": 32,
    "question_en": "What is 'space complexity'?",
    "question_hi": "'स्पेस कॉम्प्लेक्सिटी' क्या है?",
    "options_en": ["Measure of algorithm memory usage", "Program speed", "Code quality", "Output size"],
    "options_hi": ["एल्गोरिदम मेमोरी उपयोग का माप", "प्रोग्राम गति", "कोड गुणवत्ता", "आउटपुट आकार"],
    "answer_en": "Measure of algorithm memory usage",
    "answer_hi": "एल्गोरिदम मेमोरी उपयोग का माप",
    "explanation_en": "Space complexity describes how memory usage grows with input size.",
    "explanation_hi": "स्पेस कॉम्प्लेक्सिटी बताती है कि मेमोरी उपयोग इनपुट आकार के साथ कैसे बढ़ता है।"
  },
  {
    "num": 33,
    "question_en": "Which is a linear data structure with two ends?",
    "question_hi": "दो सिरों वाली रैखिक डेटा संरचना कौन सी है?",
    "options_en": ["Queue", "Array", "Linked List", "Stack"],
    "options_hi": ["क्यू", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
    "answer_en": "Queue",
    "answer_hi": "क्यू",
    "explanation_en": "Queue has front for removal and rear for insertion.",
    "explanation_hi": "क्यू में निष्कासन के लिए फ्रंट और सम्मिलन के लिए रियर होता है।"
  },
  {
    "num": 34,
    "question_en": "What is 'recursion'?",
    "question_hi": "'रिकर्शन' क्या है?",
    "options_en": ["Function calling itself", "Loop structure", "Conditional statement", "Variable declaration"],
    "options_hi": ["फ़ंक्शन स्वयं को कॉल करता है", "लूप संरचना", "सशर्त कथन", "वेरिएबल घोषणा"],
    "answer_en": "Function calling itself",
    "answer_hi": "फ़ंक्शन स्वयं को कॉल करता है",
    "explanation_en": "Recursion solves problems by breaking them into smaller similar subproblems.",
    "explanation_hi": "रिकर्शन समस्याओं को छोटी समान उपसमस्याओं में तोड़कर हल करता है।"
  },
  {
    "num": 35,
    "question_en": "Which data structure is LIFO based?",
    "question_hi": "कौन सी डेटा संरचना LIFO आधारित है?",
    "options_en": ["Stack", "Queue", "Array", "Linked List"],
    "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
    "answer_en": "Stack",
    "answer_hi": "स्टैक",
    "explanation_en": "Stack operations work on Last In First Out principle.",
    "explanation_hi": "स्टैक संचालन Last In First Out सिद्धांत पर काम करते हैं।"
  },
  {
    "num": 36,
    "question_en": "What is 'iteration'?",
    "question_hi": "'इटरेशन' क्या है?",
    "options_en": ["Repeating process using loops", "Function calling itself", "Variable declaration", "Condition checking"],
    "options_hi": ["लूप का उपयोग करके प्रक्रिया दोहराना", "फ़ंक्शन स्वयं को कॉल करता है", "वेरिएबल घोषणा", "शर्त जाँच"],
    "answer_en": "Repeating process using loops",
    "answer_hi": "लूप का उपयोग करके प्रक्रिया दोहराना",
    "explanation_en": "Iteration repeats block of code using loops like for, while, do-while.",
    "explanation_hi": "इटरेशन for, while, do-while जैसे लूप का उपयोग करके कोड ब्लॉक को दोहराता है।"
  },
  {
    "num": 37,
    "question_en": "Which is a non-primitive data type?",
    "question_hi": "कौन सा नॉन-प्रिमिटिव डेटा प्रकार है?",
    "options_en": ["Array", "Integer", "Character", "Boolean"],
    "options_hi": ["ऐरे", "इंटीजर", "कैरेक्टर", "बूलियन"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "explanation_en": "Non-primitive data types are user-defined or derived from primitives.",
    "explanation_hi": "नॉन-प्रिमिटिव डेटा प्रकार उपयोगकर्ता-परिभाषित या प्रिमिटिव से व्युत्पन्न होते हैं।"
  },
  {
    "num": 38,
    "question_en": "What is 'base case' in recursion?",
    "question_hi": "रिकर्शन में 'बेस केस' क्या है?",
    "options_en": ["Condition to stop recursion", "First function call", "Last function call", "Middle function call"],
    "options_hi": ["रिकर्शन रोकने की शर्त", "पहला फ़ंक्शन कॉल", "अंतिम फ़ंक्शन कॉल", "मध्य फ़ंक्शन कॉल"],
    "answer_en": "Condition to stop recursion",
    "answer_hi": "रिकर्शन रोकने की शर्त",
    "explanation_en": "Base case prevents infinite recursion by providing stopping condition.",
    "explanation_hi": "बेस केस रोकने की स्थिति प्रदान करके अनंत रिकर्शन को रोकता है।"
  },
  {
    "num": 39,
    "question_en": "Which data structure is FIFO based?",
    "question_hi": "कौन सी डेटा संरचना FIFO आधारित है?",
    "options_en": ["Queue", "Stack", "Array", "Tree"],
    "options_hi": ["क्यू", "स्टैक", "ऐरे", "ट्री"],
    "answer_en": "Queue",
    "answer_hi": "क्यू",
    "explanation_en": "Queue operations work on First In First Out principle.",
    "explanation_hi": "क्यू संचालन First In First Out सिद्धांत पर काम करते हैं।"
  },
  {
    "num": 40,
    "question_en": "What is 'syntax analysis'?",
    "question_hi": "'सिंटैक्स विश्लेषण' क्या है?",
    "options_en": ["Checking code structure", "Executing program", "Debugging errors", "Optimizing code"],
    "options_hi": ["कोड संरचना जाँचना", "प्रोग्राम निष्पादित करना", "त्रुटियाँ डिबग करना", "कोड ऑप्टिमाइज़ करना"],
    "answer_en": "Checking code structure",
    "answer_hi": "कोड संरचना जाँचना",
    "explanation_en": "Syntax analysis verifies code follows programming language grammar rules.",
    "explanation_hi": "सिंटैक्स विश्लेषण सत्यापित करता है कि कोड प्रोग्रामिंग भाषा व्याकरण नियमों का पालन करता है।"
  },
  {
    "num": 41,
    "question_en": "Which is a searching algorithm for graphs?",
    "question_hi": "ग्राफ के लिए कौन सा सर्चिंग एल्गोरिदम है?",
    "options_en": ["Depth First Search", "Binary Search", "Linear Search", "Jump Search"],
    "options_hi": ["डेप्थ फर्स्ट सर्च", "बाइनरी सर्च", "लीनियर सर्च", "जंप सर्च"],
    "answer_en": "Depth First Search",
    "answer_hi": "डेप्थ फर्स्ट सर्च",
    "explanation_en": "DFS explores as far as possible along each branch before backtracking.",
    "explanation_hi": "DFS बैकट्रैकिंग से पहले प्रत्येक शाखा के साथ जितना संभव हो उतना गहराई तक जाता है।"
  },
  {
    "num": 42,
    "question_en": "What is 'semantic analysis'?",
    "question_hi": "'सिमेंटिक विश्लेषण' क्या है?",
    "options_en": ["Checking meaning of code", "Checking syntax", "Executing program", "Debugging errors"],
    "options_hi": ["कोड के अर्थ की जाँच", "सिंटैक्स जाँचना", "प्रोग्राम निष्पादित करना", "त्रुटियाँ डिबग करना"],
    "answer_en": "Checking meaning of code",
    "answer_hi": "कोड के अर्थ की जाँच",
    "explanation_en": "Semantic analysis verifies code makes logical sense within language rules.",
    "explanation_hi": "सिमेंटिक विश्लेषण सत्यापित करता है कि कोड भाषा नियमों के भीतर तार्किक अर्थ बनाता है।"
  },
  {
    "num": 43,
    "question_en": "Which data structure uses pointers?",
    "question_hi": "कौन सी डेटा संरचना पॉइंटर्स का उपयोग करती है?",
    "options_en": ["Linked List", "Array", "Stack", "Queue"],
    "options_hi": ["लिंक्ड लिस्ट", "ऐरे", "स्टैक", "क्यू"],
    "answer_en": "Linked List",
    "answer_hi": "लिंक्ड लिस्ट",
    "explanation_en": "Linked List nodes contain data and pointer to next node.",
    "explanation_hi": "लिंक्ड लिस्ट नोड में डेटा और अगले नोड के लिए पॉइंटर होता है।"
  },
  {
    "num": 44,
    "question_en": "What is 'compilation error'?",
    "question_hi": "'कंपाइलेशन त्रुटि' क्या है?",
    "options_en": ["Error during compilation", "Error during execution", "Logical error", "Runtime error"],
    "options_hi": ["कंपाइलेशन के दौरान त्रुटि", "निष्पादन के दौरान त्रुटि", "लॉजिकल त्रुटि", "रनटाइम त्रुटि"],
    "answer_en": "Error during compilation",
    "answer_hi": "कंपाइलेशन के दौरान त्रुटि",
    "explanation_en": "Compilation error prevents program from being compiled successfully.",
    "explanation_hi": "कंपाइलेशन त्रुटि प्रोग्राम को सफलतापूर्वक कंपाइल होने से रोकती है।"
  },
  {
    "num": 45,
    "question_en": "Which is a sorting algorithm using divide and conquer?",
    "question_hi": "डिवाइड एंड कॉनकर का उपयोग करने वाला सॉर्टिंग एल्गोरिदम कौन सा है?",
    "options_en": ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
    "options_hi": ["मर्ज सॉर्ट", "बबल सॉर्ट", "सेलेक्शन सॉर्ट", "इंसर्शन सॉर्ट"],
    "answer_en": "Merge Sort",
    "answer_hi": "मर्ज सॉर्ट",
    "explanation_en": "Merge Sort divides array into halves, sorts them, then merges.",
    "explanation_hi": "मर्ज सॉर्ट ऐरे को आधे में विभाजित करता है, उन्हें सॉर्ट करता है, फिर मर्ज करता है।"
  },
  {
    "num": 46,
    "question_en": "What is 'code optimization'?",
    "question_hi": "'कोड ऑप्टिमाइज़ेशन' क्या है?",
    "options_en": ["Improving code efficiency", "Writing code", "Debugging errors", "Designing interface"],
    "options_hi": ["कोड दक्षता में सुधार", "कोड लिखना", "त्रुटियाँ डिबग करना", "इंटरफ़ेस डिजाइन करना"],
    "answer_en": "Improving code efficiency",
    "answer_hi": "कोड दक्षता में सुधार",
    "explanation_en": "Optimization improves program speed, memory usage, or size without changing functionality.",
    "explanation_hi": "ऑप्टिमाइज़ेशन कार्यक्षमता बदले बिना प्रोग्राम गति, मेमोरी उपयोग या आकार में सुधार करता है।"
  },
  {
    "num": 47,
    "question_en": "Which data structure represents network connections?",
    "question_hi": "कौन सी डेटा संरचना नेटवर्क कनेक्शन का प्रतिनिधित्व करती है?",
    "options_en": ["Graph", "Array", "Linked List", "Stack"],
    "options_hi": ["ग्राफ", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
    "answer_en": "Graph",
    "answer_hi": "ग्राफ",
    "explanation_en": "Graph consists of vertices (nodes) connected by edges (links).",
    "explanation_hi": "ग्राफ में एज (लिंक्स) द्वारा जुड़े वर्टिसेस (नोड्स) होते हैं।"
  },
  {
    "num": 48,
    "question_en": "What is 'testing' in programming?",
    "question_hi": "प्रोग्रामिंग में 'टेस्टिंग' क्या है?",
    "options_en": ["Verifying program correctness", "Writing code", "Compiling program", "Designing interface"],
    "options_hi": ["प्रोग्राम शुद्धता सत्यापित करना", "कोड लिखना", "प्रोग्राम कंपाइल करना", "इंटरफ़ेस डिजाइन करना"],
    "answer_en": "Verifying program correctness",
    "answer_hi": "प्रोग्राम शुद्धता सत्यापित करना",
    "explanation_en": "Testing checks if program behaves as expected under various conditions.",
    "explanation_hi": "टेस्टिंग जाँच करती है कि प्रोग्राम विभिन्न परिस्थितियों में अपेक्षा के अनुरूप व्यवहार करता है या नहीं।"
  },
  {
    "num": 49,
    "question_en": "Which is a primitive data type for true/false values?",
    "question_hi": "सही/गलत मानों के लिए कौन सा प्रिमिटिव डेटा प्रकार है?",
    "options_en": ["Boolean", "Integer", "Character", "Float"],
    "options_hi": ["बूलियन", "इंटीजर", "कैरेक्टर", "फ्लोट"],
    "answer_en": "Boolean",
    "answer_hi": "बूलियन",
    "explanation_en": "Boolean represents logical values: true or false.",
    "explanation_hi": "बूलियन तार्किक मानों का प्रतिनिधित्व करता है: सही या गलत।"
  },
  {
    "num": 50,
    "question_en": "What is 'algorithm analysis'?",
    "question_hi": "'एल्गोरिदम विश्लेषण' क्या है?",
    "options_en": ["Studying algorithm efficiency", "Writing algorithm", "Debugging algorithm", "Executing algorithm"],
    "options_hi": ["एल्गोरिदम दक्षता का अध्ययन", "एल्गोरिदम लिखना", "एल्गोरिदम डिबग करना", "एल्गोरिदम निष्पादित करना"],
    "answer_en": "Studying algorithm efficiency",
    "answer_hi": "एल्गोरिदम दक्षता का अध्ययन",
    "explanation_en": "Algorithm analysis determines computational resources required by algorithm.",
    "explanation_hi": "एल्गोरिदम विश्लेषण एल्गोरिदम द्वारा आवश्यक कम्प्यूटेशनल संसाधनों को निर्धारित करता है।"
  }
]


let currentQuestion = 0; 
let language = "hindi";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};

