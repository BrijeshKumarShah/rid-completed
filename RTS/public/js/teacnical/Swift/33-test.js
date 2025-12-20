const questions= [
    {
        "num": 1,
        "question_en": "What is the output type of print() function in Swift?",
        "question_hi": "Swift में print() फ़ंक्शन का आउटपुट टाइप क्या है?",
        "options_en": ["Void", "String", "Int", "Bool"],
        "options_hi": ["Void", "String", "Int", "Bool"],
        "answer_en": "Void",
        "answer_hi": "Void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which method is used to convert String to Int in Swift?",
        "question_hi": "Swift में String को Int में बदलने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Int()", "toInt()", "parseInt()", "convertToInt()"],
        "options_hi": ["Int()", "toInt()", "parseInt()", "convertToInt()"],
        "answer_en": "Int()",
        "answer_hi": "Int()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does '!' operator do when used with an optional?",
        "question_hi": "जब '!' ऑपरेटर को ऑप्शनल के साथ उपयोग किया जाता है तो यह क्या करता है?",
        "options_en": ["Force unwraps the optional", "Safely unwraps", "Checks if nil", "Creates optional"],
        "options_hi": ["ऑप्शनल को जबरन अनरैप करता है", "सुरक्षित रूप से अनरैप करता है", "nil की जाँच करता है", "ऑप्शनल बनाता है"],
        "answer_en": "Force unwraps the optional",
        "answer_hi": "ऑप्शनल को जबरन अनरैप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the default access level in Swift?",
        "question_hi": "Swift में डिफ़ॉल्ट एक्सेस लेवल क्या है?",
        "options_en": ["Internal", "Public", "Private", "Fileprivate"],
        "options_hi": ["Internal", "Public", "Private", "Fileprivate"],
        "answer_en": "Internal",
        "answer_hi": "Internal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which protocol is used for sequence iteration?",
        "question_hi": "सीक्वेंस इटरेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["Sequence", "Iterator", "Iterable", "Enumerable"],
        "options_hi": ["Sequence", "Iterator", "Iterable", "Enumerable"],
        "answer_en": "Sequence",
        "answer_hi": "Sequence",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of 'fallthrough' in switch statement?",
        "question_hi": "switch स्टेटमेंट में 'fallthrough' का उद्देश्य क्या है?",
        "options_en": ["Continue to next case", "Break switch", "Return value", "Throw error"],
        "options_hi": ["अगले केस पर जारी रखना", "switch तोड़ना", "मान वापस करना", "त्रुटि फेंकना"],
        "answer_en": "Continue to next case",
        "answer_hi": "अगले केस पर जारी रखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does 'is' operator do in Swift?",
        "question_hi": "Swift में 'is' ऑपरेटर क्या करता है?",
        "options_en": ["Type checking", "Type casting", "Identity comparison", "Value comparison"],
        "options_hi": ["टाइप चेकिंग", "टाइप कास्टिंग", "पहचान तुलना", "मान तुलना"],
        "answer_en": "Type checking",
        "answer_hi": "टाइप चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'as?' operator do?",
        "question_hi": "'as?' ऑपरेटर क्या करता है?",
        "options_en": ["Conditional downcasting", "Force casting", "Type checking", "Pattern matching"],
        "options_hi": ["सशर्त डाउनकास्टिंग", "जबरन कास्टिंग", "टाइप चेकिंग", "पैटर्न मिलान"],
        "answer_en": "Conditional downcasting",
        "answer_hi": "सशर्त डाउनकास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of 'where' clause in for loop?",
        "question_hi": "for लूप में 'where' क्लॉज का उद्देश्य क्या है?",
        "options_en": ["Filter items", "Sort items", "Transform items", "Count items"],
        "options_hi": ["आइटम फ़िल्टर करना", "आइटम सॉर्ट करना", "आइटम ट्रांसफ़ॉर्म करना", "आइटम गिनना"],
        "answer_en": "Filter items",
        "answer_hi": "आइटम फ़िल्टर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is 'inout' parameter in Swift?",
        "question_hi": "Swift में 'inout' पैरामीटर क्या है?",
        "options_en": ["Parameter that can be modified", "Input parameter", "Output parameter", "Constant parameter"],
        "options_hi": ["वह पैरामीटर जिसे संशोधित किया जा सकता है", "इनपुट पैरामीटर", "आउटपुट पैरामीटर", "स्थिर पैरामीटर"],
        "answer_en": "Parameter that can be modified",
        "answer_hi": "वह पैरामीटर जिसे संशोधित किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is 'Self' with capital S in protocols?",
        "question_hi": "प्रोटोकॉल्स में बड़े S वाला 'Self' क्या है?",
        "options_en": ["Type of conforming type", "Instance of self", "Static reference", "Protocol type"],
        "options_hi": ["अनुरूप प्रकार का प्रकार", "self का उदाहरण", "स्थैतिक संदर्भ", "प्रोटोकॉल प्रकार"],
        "answer_en": "Type of conforming type",
        "answer_hi": "अनुरूप प्रकार का प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is 'associatedtype' in protocols?",
        "question_hi": "प्रोटोकॉल्स में 'associatedtype' क्या है?",
        "options_en": ["Placeholder type", "Concrete type", "Generic constraint", "Type alias"],
        "options_hi": ["प्लेसहोल्डर प्रकार", "ठोस प्रकार", "जेनेरिक कंस्ट्रेंट", "टाइप एलियास"],
        "answer_en": "Placeholder type",
        "answer_hi": "प्लेसहोल्डर प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is 'some' keyword used for?",
        "question_hi": "'some' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Opaque return types", "Optional types", "Some instances", "Specific types"],
        "options_hi": ["अपारदर्शी रिटर्न प्रकार", "वैकल्पिक प्रकार", "कुछ उदाहरण", "विशिष्ट प्रकार"],
        "answer_en": "Opaque return types",
        "answer_hi": "अपारदर्शी रिटर्न प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is 'any' keyword used for?",
        "question_hi": "'any' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Existential types", "Any type", "All types", "Generic types"],
        "options_hi": ["अस्तित्व प्रकार", "कोई भी प्रकार", "सभी प्रकार", "जेनेरिक प्रकार"],
        "answer_en": "Existential types",
        "answer_hi": "अस्तित्व प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the difference between map and flatMap?",
        "question_hi": "map और flatMap में क्या अंतर है?",
        "options_en": ["flatMap flattens result", "map is faster", "flatMap is for arrays only", "No difference"],
        "options_hi": ["flatMap परिणाम को समतल करता है", "map तेज़ है", "flatMap केवल arrays के लिए है", "कोई अंतर नहीं"],
        "answer_en": "flatMap flattens result",
        "answer_hi": "flatMap परिणाम को समतल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is compactMap used for?",
        "question_hi": "compactMap का उपयोग किस लिए किया जाता है?",
        "options_en": ["Map and remove nil values", "Compress array", "Map compactly", "Fast mapping"],
        "options_hi": ["मैप करना और nil मान हटाना", "ऐरे संपीड़ित करना", "संक्षिप्त रूप से मैप करना", "तेज़ मैपिंग"],
        "answer_en": "Map and remove nil values",
        "answer_hi": "मैप करना और nil मान हटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is reduce function used for?",
        "question_hi": "reduce फ़ंक्शन का उपयोग किस लिए किया जाता है?",
        "options_en": ["Combine all elements into single value", "Reduce array size", "Remove elements", "Sort elements"],
        "options_hi": ["सभी तत्वों को एकल मान में संयोजित करना", "ऐरे आकार कम करना", "तत्व हटाना", "तत्वों को सॉर्ट करना"],
        "answer_en": "Combine all elements into single value",
        "answer_hi": "सभी तत्वों को एकल मान में संयोजित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is filter function used for?",
        "question_hi": "filter फ़ंक्शन का उपयोग किस लिए किया जाता है?",
        "options_en": ["Select elements matching condition", "Remove all elements", "Transform elements", "Count elements"],
        "options_hi": ["शर्त से मेल खाने वाले तत्वों का चयन करना", "सभी तत्व हटाना", "तत्वों को रूपांतरित करना", "तत्वों की गिनती करना"],
        "answer_en": "Select elements matching condition",
        "answer_hi": "शर्त से मेल खाने वाले तत्वों का चयन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'lazy' keyword in collections?",
        "question_hi": "संग्रहों में 'lazy' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Defer computation until needed", "Make collection immutable", "Speed up computation", "Cache results"],
        "options_hi": ["आवश्यक होने तक गणना स्थगित करना", "संग्रह को अपरिवर्तनीय बनाना", "गणना गति बढ़ाना", "परिणाम कैश करना"],
        "answer_en": "Defer computation until needed",
        "answer_hi": "आवश्यक होने तक गणना स्थगित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is 'KeyPath' in Swift?",
        "question_hi": "Swift में 'KeyPath' क्या है?",
        "options_en": ["Reference to property", "Dictionary key", "Array index", "Function parameter"],
        "options_hi": ["प्रॉपर्टी का संदर्भ", "डिक्शनरी की", "ऐरे इंडेक्स", "फ़ंक्शन पैरामीटर"],
        "answer_en": "Reference to property",
        "answer_hi": "प्रॉपर्टी का संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of '@State' property wrapper?",
        "question_hi": "'@State' प्रॉपर्टी रैपर का उद्देश्य क्या है?",
        "options_en": ["Manage local view state", "Manage global state", "Persist state", "Share state"],
        "options_hi": ["स्थानीय दृश्य स्थिति प्रबंधित करना", "वैश्विक स्थिति प्रबंधित करना", "स्थिति बनाए रखना", "स्थिति साझा करना"],
        "answer_en": "Manage local view state",
        "answer_hi": "स्थानीय दृश्य स्थिति प्रबंधित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is '@Binding' property wrapper used for?",
        "question_hi": "'@Binding' प्रॉपर्टी रैपर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Two-way connection to state", "One-way connection", "Constant binding", "Optional binding"],
        "options_hi": ["स्थिति से दो-तरफ़ा कनेक्शन", "एक-तरफ़ा कनेक्शन", "स्थिर बाइंडिंग", "वैकल्पिक बाइंडिंग"],
        "answer_en": "Two-way connection to state",
        "answer_hi": "स्थिति से दो-तरफ़ा कनेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is '@ObservedObject' used for?",
        "question_hi": "'@ObservedObject' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Observe external object", "Create observable", "Manage local state", "Bind to view"],
        "options_hi": ["बाहरी ऑब्जेक्ट देखना", "अवलोकनीय बनाना", "स्थानीय स्थिति प्रबंधित करना", "दृश्य से बाँधना"],
        "answer_en": "Observe external object",
        "answer_hi": "बाहरी ऑब्जेक्ट देखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is '@EnvironmentObject' used for?",
        "question_hi": "'@EnvironmentObject' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Access shared data in environment", "Environment variables", "System environment", "App environment"],
        "options_hi": ["वातावरण में साझा डेटा तक पहुंच", "वातावरण चर", "सिस्टम वातावरण", "ऐप वातावरण"],
        "answer_en": "Access shared data in environment",
        "answer_hi": "वातावरण में साझा डेटा तक पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is '@Published' property wrapper used for?",
        "question_hi": "'@Published' प्रॉपर्टी रैपर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Publish property changes", "Make property public", "Print property", "Log property"],
        "options_hi": ["प्रॉपर्टी परिवर्तन प्रकाशित करना", "प्रॉपर्टी सार्वजनिक बनाना", "प्रॉपर्टी प्रिंट करना", "प्रॉपर्टी लॉग करना"],
        "answer_en": "Publish property changes",
        "answer_hi": "प्रॉपर्टी परिवर्तन प्रकाशित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is Combine framework used for?",
        "question_hi": "Combine फ्रेमवर्क का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reactive programming", "Combine files", "Merge frameworks", "Combine views"],
        "options_hi": ["प्रतिक्रियाशील प्रोग्रामिंग", "फ़ाइलें संयोजित करना", "फ्रेमवर्क मर्ज करना", "दृश्य संयोजित करना"],
        "answer_en": "Reactive programming",
        "answer_hi": "प्रतिक्रियाशील प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a Publisher in Combine?",
        "question_hi": "Combine में Publisher क्या है?",
        "options_en": ["Emits values over time", "Receives values", "Transforms values", "Filters values"],
        "options_hi": ["समय के साथ मान उत्सर्जित करता है", "मान प्राप्त करता है", "मान रूपांतरित करता है", "मान फ़िल्टर करता है"],
        "answer_en": "Emits values over time",
        "answer_hi": "समय के साथ मान उत्सर्जित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a Subscriber in Combine?",
        "question_hi": "Combine में Subscriber क्या है?",
        "options_en": ["Receives values from publisher", "Sends values", "Creates publishers", "Manages publishers"],
        "options_hi": ["प्रकाशक से मान प्राप्त करता है", "मान भेजता है", "प्रकाशक बनाता है", "प्रकाशक प्रबंधित करता है"],
        "answer_en": "Receives values from publisher",
        "answer_hi": "प्रकाशक से मान प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is an Operator in Combine?",
        "question_hi": "Combine में Operator क्या है?",
        "options_en": ["Transforms values between publisher and subscriber", "Mathematical operator", "Comparison operator", "Logical operator"],
        "options_hi": ["प्रकाशक और ग्राहक के बीच मानों को रूपांतरित करता है", "गणितीय ऑपरेटर", "तुलना ऑपरेटर", "तार्किक ऑपरेटर"],
        "answer_en": "Transforms values between publisher and subscriber",
        "answer_hi": "प्रकाशक और ग्राहक के बीच मानों को रूपांतरित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is Core Data framework used for?",
        "question_hi": "Core Data फ्रेमवर्क का उपयोग किस लिए किया जाता है?",
        "options_en": ["Object graph and persistence", "Network requests", "User interface", "Image processing"],
        "options_hi": ["ऑब्जेक्ट ग्राफ और दृढ़ता", "नेटवर्क अनुरोध", "यूजर इंटरफ़ेस", "इमेज प्रोसेसिंग"],
        "answer_en": "Object graph and persistence",
        "answer_hi": "ऑब्जेक्ट ग्राफ और दृढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is URLSession used for?",
        "question_hi": "URLSession का उपयोग किस लिए किया जाता है?",
        "options_en": ["Network requests", "URL parsing", "Session management", "User authentication"],
        "options_hi": ["नेटवर्क अनुरोध", "URL पार्सिंग", "सत्र प्रबंधन", "उपयोगकर्ता प्रमाणीकरण"],
        "answer_en": "Network requests",
        "answer_hi": "नेटवर्क अनुरोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is DispatchQueue used for?",
        "question_hi": "DispatchQueue का उपयोग किस लिए किया जाता है?",
        "options_en": ["Managing concurrency", "Dispatching events", "Queue management", "Thread creation"],
        "options_hi": ["समवर्तीता प्रबंधन", "घटनाएं डिस्पैच करना", "कतार प्रबंधन", "थ्रेड बनाना"],
        "answer_en": "Managing concurrency",
        "answer_hi": "समवर्तीता प्रबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the difference between async and sync dispatch?",
        "question_hi": "async और sync डिस्पैच में क्या अंतर है?",
        "options_en": ["async returns immediately, sync blocks", "sync returns immediately", "No difference", "async blocks"],
        "options_hi": ["async तुरंत लौटता है, sync ब्लॉक करता है", "sync तुरंत लौटता है", "कोई अंतर नहीं", "async ब्लॉक करता है"],
        "answer_en": "async returns immediately, sync blocks",
        "answer_hi": "async तुरंत लौटता है, sync ब्लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is MainActor used for?",
        "question_hi": "MainActor का उपयोग किस लिए किया जाता है?",
        "options_en": ["Execute code on main thread", "Create main thread", "Manage actors", "Schedule tasks"],
        "options_hi": ["मुख्य थ्रेड पर कोड निष्पादित करना", "मुख्य थ्रेड बनाना", "एक्टर्स प्रबंधित करना", "कार्य शेड्यूल करना"],
        "answer_en": "Execute code on main thread",
        "answer_hi": "मुख्य थ्रेड पर कोड निष्पादित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is @MainActor attribute used for?",
        "question_hi": "@MainActor एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mark code to run on main thread", "Create main actor", "Schedule main thread", "Manage UI"],
        "options_hi": ["मुख्य थ्रेड पर चलने के लिए कोड चिह्नित करना", "मुख्य एक्टर बनाना", "मुख्य थ्रेड शेड्यूल करना", "UI प्रबंधित करना"],
        "answer_en": "Mark code to run on main thread",
        "answer_hi": "मुख्य थ्रेड पर चलने के लिए कोड चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is Result type used for?",
        "question_hi": "Result प्रकार का उपयोग किस लिए किया जाता है?",
        "options_en": ["Represent success or failure", "Return multiple values", "Optional result", "Error only"],
        "options_hi": ["सफलता या विफलता का प्रतिनिधित्व करना", "कई मान लौटाना", "वैकल्पिक परिणाम", "केवल त्रुटि"],
        "answer_en": "Represent success or failure",
        "answer_hi": "सफलता या विफलता का प्रतिनिधित्व करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'precondition' function?",
        "question_hi": "'precondition' फ़ंक्शन का उद्देश्य क्या है?",
        "options_en": ["Check condition in debug builds", "Always check condition", "Log condition", "Ignore condition"],
        "options_hi": ["डिबग बिल्ड में शर्त जाँचना", "हमेशा शर्त जाँचना", "शर्त लॉग करना", "शर्त नज़रअंदाज़ करना"],
        "answer_en": "Check condition in debug builds",
        "answer_hi": "डिबग बिल्ड में शर्त जाँचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'fatalError' function used for?",
        "question_hi": "'fatalError' फ़ंक्शन का उपयोग किस लिए किया जाता है?",
        "options_en": ["Terminate program with message", "Log error", "Throw error", "Print error"],
        "options_hi": ["संदेश के साथ प्रोग्राम समाप्त करना", "त्रुटि लॉग करना", "त्रुटि फेंकना", "त्रुटि प्रिंट करना"],
        "answer_en": "Terminate program with message",
        "answer_hi": "संदेश के साथ प्रोग्राम समाप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'assert' function used for?",
        "question_hi": "'assert' फ़ंक्शन का उपयोग किस लिए किया जाता है?",
        "options_en": ["Check condition in debug builds", "Always check", "Release check", "Performance check"],
        "options_hi": ["डिबग बिल्ड में शर्त जाँचना", "हमेशा जाँचना", "रिलीज़ जाँच", "प्रदर्शन जाँच"],
        "answer_en": "Check condition in debug builds",
        "answer_hi": "डिबग बिल्ड में शर्त जाँचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of 'measure' in XCTest?",
        "question_hi": "XCTest में 'measure' का उद्देश्य क्या है?",
        "options_en": ["Measure performance", "Measure size", "Measure memory", "Measure coverage"],
        "options_hi": ["प्रदर्शन मापना", "आकार मापना", "मेमोरी मापना", "कवरेज मापना"],
        "answer_en": "Measure performance",
        "answer_hi": "प्रदर्शन मापना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'XCTestExpectation'?",
        "question_hi": "'XCTestExpectation' का उद्देश्य क्या है?",
        "options_en": ["Test asynchronous code", "Test expectations", "Test assertions", "Test performance"],
        "options_hi": ["अतुल्यकालिक कोड परीक्षण", "अपेक्षाएं परीक्षण", "दावे परीक्षण", "प्रदर्शन परीक्षण"],
        "answer_en": "Test asynchronous code",
        "answer_hi": "अतुल्यकालिक कोड परीक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is Swift Package Manager?",
        "question_hi": "Swift Package Manager क्या है?",
        "options_en": ["Dependency manager for Swift", "Package installer", "Code manager", "Build system"],
        "options_hi": ["Swift के लिए निर्भरता प्रबंधक", "पैकेज इंस्टॉलर", "कोड प्रबंधक", "बिल्ड सिस्टम"],
        "answer_en": "Dependency manager for Swift",
        "answer_hi": "Swift के लिए निर्भरता प्रबंधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is a Package.swift file?",
        "question_hi": "Package.swift फ़ाइल क्या है?",
        "options_en": ["Manifest file for Swift package", "Package source", "Package documentation", "Package tests"],
        "options_hi": ["Swift पैकेज के लिए मेनिफेस्ट फ़ाइल", "पैकेज सोर्स", "पैकेज दस्तावेज़ीकरण", "पैकेज टेस्ट"],
        "answer_en": "Manifest file for Swift package",
        "answer_hi": "Swift पैकेज के लिए मेनिफेस्ट फ़ाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is SwiftNIO?",
        "question_hi": "SwiftNIO क्या है?",
        "options_en": ["Non-blocking I/O framework", "Network framework", "IO library", "File system library"],
        "options_hi": ["गैर-ब्लॉकिंग I/O फ्रेमवर्क", "नेटवर्क फ्रेमवर्क", "IO लाइब्रेरी", "फ़ाइल सिस्टम लाइब्रेरी"],
        "answer_en": "Non-blocking I/O framework",
        "answer_hi": "गैर-ब्लॉकिंग I/O फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is Vapor framework?",
        "question_hi": "Vapor फ्रेमवर्क क्या है?",
        "options_en": ["Server-side Swift framework", "Client framework", "UI framework", "Testing framework"],
        "options_hi": ["सर्वर-साइड Swift फ्रेमवर्क", "क्लाइंट फ्रेमवर्क", "UI फ्रेमवर्क", "टेस्टिंग फ्रेमवर्क"],
        "answer_en": "Server-side Swift framework",
        "answer_hi": "सर्वर-साइड Swift फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of 'didSet' property observer?",
        "question_hi": "'didSet' प्रॉपर्टी ऑब्ज़र्वर का उद्देश्य क्या है?",
        "options_en": ["Called after property changes", "Called before property changes", "Prevent property changes", "Validate property"],
        "options_hi": ["प्रॉपर्टी बदलने के बाद कॉल किया जाता है", "प्रॉपर्टी बदलने से पहले कॉल किया जाता है", "प्रॉपर्टी परिवर्तन रोकना", "प्रॉपर्टी मान्य करना"],
        "answer_en": "Called after property changes",
        "answer_hi": "प्रॉपर्टी बदलने के बाद कॉल किया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'willSet' property observer?",
        "question_hi": "'willSet' प्रॉपर्टी ऑब्ज़र्वर का उद्देश्य क्या है?",
        "options_en": ["Called before property changes", "Called after property changes", "Override property", "Validate property"],
        "options_hi": ["प्रॉपर्टी बदलने से पहले कॉल किया जाता है", "प्रॉपर्टी बदलने के बाद कॉल किया जाता है", "प्रॉपर्टी ओवरराइड करना", "प्रॉपर्टी मान्य करना"],
        "answer_en": "Called before property changes",
        "answer_hi": "प्रॉपर्टी बदलने से पहले कॉल किया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'dynamic' keyword used for?",
        "question_hi": "'dynamic' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Objective-C interoperability", "Dynamic typing", "Dynamic dispatch", "Runtime modification"],
        "options_hi": ["Objective-C अंतरसंचालन", "गतिशील टाइपिंग", "गतिशील प्रेषण", "रनटाइम संशोधन"],
        "answer_en": "Objective-C interoperability",
        "answer_hi": "Objective-C अंतरसंचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is '@objc' attribute used for?",
        "question_hi": "'@objc' एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Expose Swift API to Objective-C", "Make Objective-C", "Optimize code", "Compile faster"],
        "options_hi": ["Swift API को Objective-C को उजागर करना", "Objective-C बनाना", "कोड ऑप्टिमाइज़ करना", "तेज़ कंपाइल करना"],
        "answer_en": "Expose Swift API to Objective-C",
        "answer_hi": "Swift API को Objective-C को उजागर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is Swift's memory management model?",
        "question_hi": "Swift का मेमोरी मैनेजमेंट मॉडल क्या है?",
        "options_en": ["Automatic Reference Counting (ARC)", "Garbage Collection", "Manual Memory Management", "Reference Counting"],
        "options_hi": ["स्वचालित संदर्भ गणना (ARC)", "कचरा संग्रह", "मैन्युअल मेमोरी प्रबंधन", "संदर्भ गणना"],
        "answer_en": "Automatic Reference Counting (ARC)",
        "answer_hi": "स्वचालित संदर्भ गणना (ARC)",
        "attempted": false,
        "selected": ""
    }
]
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};