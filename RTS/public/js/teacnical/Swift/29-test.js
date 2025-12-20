const questions=[
    {
        "num": 1,
        "question_en": "What is the primary programming language for iOS development?",
        "question_hi": "iOS डेवलपमेंट के लिए प्राथमिक प्रोग्रामिंग भाषा कौन सी है?",
        "options_en": ["Swift", "Objective-C", "Kotlin", "Java"],
        "options_hi": ["Swift", "Objective-C", "Kotlin", "Java"],
        "answer_en": "Swift",
        "answer_hi": "Swift",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which company developed Swift?",
        "question_hi": "Swift को किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Google", "Microsoft", "Facebook"],
        "options_hi": ["Apple", "Google", "Microsoft", "Facebook"],
        "answer_en": "Apple",
        "answer_hi": "Apple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What year was Swift first introduced?",
        "question_hi": "Swift पहली बार किस वर्ष पेश की गई थी?",
        "options_en": ["2014", "2010", "2016", "2012"],
        "options_hi": ["2014", "2010", "2016", "2012"],
        "answer_en": "2014",
        "answer_hi": "2014",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the file extension for Swift source files?",
        "question_hi": "Swift सोर्स फ़ाइलों का फ़ाइल एक्सटेंशन क्या है?",
        "options_en": [".swift", ".sw", ".sf", ".st"],
        "options_hi": [".swift", ".sw", ".sf", ".st"],
        "answer_en": ".swift",
        "answer_hi": ".swift",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which keyword is used to declare a constant in Swift?",
        "question_hi": "Swift में कॉन्स्टेंट घोषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["let", "const", "var", "constant"],
        "options_hi": ["let", "const", "var", "constant"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which keyword is used to declare a variable in Swift?",
        "question_hi": "Swift में वेरिएबल घोषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["var", "let", "variable", "mutable"],
        "options_hi": ["var", "let", "variable", "mutable"],
        "answer_en": "var",
        "answer_hi": "var",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the data type for whole numbers in Swift?",
        "question_hi": "Swift में पूर्ण संख्याओं के लिए डेटा प्रकार क्या है?",
        "options_en": ["Int", "Float", "Double", "Number"],
        "options_hi": ["Int", "Float", "Double", "Number"],
        "answer_en": "Int",
        "answer_hi": "Int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which operator is used for string interpolation in Swift?",
        "question_hi": "Swift में स्ट्रिंग इंटरपोलेशन के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["\\()", "{}", "${}", "#{}"],
        "options_hi": ["\\()", "{}", "${}", "#{}"],
        "answer_en": "\\()",
        "answer_hi": "\\()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main function called in Swift?",
        "question_hi": "Swift में मुख्य फ़ंक्शन को क्या कहा जाता है?",
        "options_en": ["main()", "start()", "init()", "Swift doesn't need main"],
        "options_hi": ["main()", "start()", "init()", "Swift को main की आवश्यकता नहीं है"],
        "answer_en": "Swift doesn't need main",
        "answer_hi": "Swift को main की आवश्यकता नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which framework is essential for iOS app development?",
        "question_hi": "iOS ऐप डेवलपमेंट के लिए कौन सा फ्रेमवर्क आवश्यक है?",
        "options_en": ["UIKit", "AppKit", "WatchKit", "All of these"],
        "options_hi": ["UIKit", "AppKit", "WatchKit", "ये सभी"],
        "answer_en": "UIKit",
        "answer_hi": "UIKit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is optional in Swift?",
        "question_hi": "Swift में ऑप्शनल क्या है?",
        "options_en": ["A type that can hold either a value or nil", "A required value", "A constant value", "A function parameter"],
        "options_hi": ["एक प्रकार जो या तो मान या nil रख सकता है", "एक आवश्यक मान", "एक स्थिर मान", "एक फ़ंक्शन पैरामीटर"],
        "answer_en": "A type that can hold either a value or nil",
        "answer_hi": "एक प्रकार जो या तो मान या nil रख सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is forced unwrapping of optionals?",
        "question_hi": "ऑप्शनल्स की फोर्स्ड अनरैपिंग क्या है?",
        "options_en": ["Using ! after optional", "Using ? after optional", "Using if let", "Using guard"],
        "options_hi": ["ऑप्शनल के बाद ! का उपयोग", "ऑप्शनल के बाद ? का उपयोग", "if let का उपयोग", "guard का उपयोग"],
        "answer_en": "Using ! after optional",
        "answer_hi": "ऑप्शनल के बाद ! का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is optional binding?",
        "question_hi": "ऑप्शनल बाइंडिंग क्या है?",
        "options_en": ["if let or guard let", "Using ! operator", "Using ?? operator", "Declaring optionals"],
        "options_hi": ["if let या guard let", "! ऑपरेटर का उपयोग", "?? ऑपरेटर का उपयोग", "ऑप्शनल्स घोषित करना"],
        "answer_en": "if let or guard let",
        "answer_hi": "if let या guard let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which keyword is used to define a function in Swift?",
        "question_hi": "Swift में फ़ंक्शन को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["func", "function", "def", "fn"],
        "options_hi": ["func", "function", "def", "fn"],
        "answer_en": "func",
        "answer_hi": "func",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the nil-coalescing operator in Swift?",
        "question_hi": "Swift में निल-कोएलिसिंग ऑपरेटर क्या है?",
        "options_en": ["??", "?:", "!!", "::"],
        "options_hi": ["??", "?:", "!!", "::"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is an array in Swift?",
        "question_hi": "Swift में ऐरे क्या है?",
        "options_en": ["Ordered collection of values", "Unordered collection", "Key-value pairs", "Single value"],
        "options_hi": ["मानों का क्रमित संग्रह", "अक्रमित संग्रह", "की-वैल्यू जोड़े", "एकल मान"],
        "answer_en": "Ordered collection of values",
        "answer_hi": "मानों का क्रमित संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is a dictionary in Swift?",
        "question_hi": "Swift में डिक्शनरी क्या है?",
        "options_en": ["Collection of key-value pairs", "Ordered collection", "Unordered set", "Array of tuples"],
        "options_hi": ["की-वैल्यू जोड़ों का संग्रह", "क्रमित संग्रह", "अक्रमित सेट", "टुपल्स का ऐरे"],
        "answer_en": "Collection of key-value pairs",
        "answer_hi": "की-वैल्यू जोड़ों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is a set in Swift?",
        "question_hi": "Swift में सेट क्या है?",
        "options_en": ["Unordered collection of unique values", "Ordered collection", "Key-value pairs", "Array"],
        "options_hi": ["अद्वितीय मानों का अक्रमित संग्रह", "क्रमित संग्रह", "की-वैल्यू जोड़े", "ऐरे"],
        "answer_en": "Unordered collection of unique values",
        "answer_hi": "अद्वितीय मानों का अक्रमित संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which loop is used for iterating over collections?",
        "question_hi": "संग्रहों पर पुनरावृत्ति के लिए किस लूप का उपयोग किया जाता है?",
        "options_en": ["for-in", "while", "repeat-while", "All of these"],
        "options_hi": ["for-in", "while", "repeat-while", "ये सभी"],
        "answer_en": "for-in",
        "answer_hi": "for-in",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is a closure in Swift?",
        "question_hi": "Swift में क्लोजर क्या है?",
        "options_en": ["Self-contained blocks of functionality", "Function", "Method", "Class"],
        "options_hi": ["कार्यक्षमता के स्वतंत्र ब्लॉक", "फ़ंक्शन", "मेथड", "क्लास"],
        "answer_en": "Self-contained blocks of functionality",
        "answer_hi": "कार्यक्षमता के स्वतंत्र ब्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the shorthand argument name for closures?",
        "question_hi": "क्लोजर के लिए शॉर्टहैंड आर्गुमेंट नाम क्या है?",
        "options_en": ["$0, $1, etc.", "arg1, arg2", "a, b", "first, second"],
        "options_hi": ["$0, $1, आदि", "arg1, arg2", "a, b", "first, second"],
        "answer_en": "$0, $1, etc.",
        "answer_hi": "$0, $1, आदि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is a struct in Swift?",
        "question_hi": "Swift में struct क्या है?",
        "options_en": ["Value type", "Reference type", "Function type", "Protocol type"],
        "options_hi": ["वैल्यू टाइप", "रेफरेंस टाइप", "फ़ंक्शन टाइप", "प्रोटोकॉल टाइप"],
        "answer_en": "Value type",
        "answer_hi": "वैल्यू टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a class in Swift?",
        "question_hi": "Swift में class क्या है?",
        "options_en": ["Reference type", "Value type", "Protocol", "Enum"],
        "options_hi": ["रेफरेंस टाइप", "वैल्यू टाइप", "प्रोटोकॉल", "Enum"],
        "answer_en": "Reference type",
        "answer_hi": "रेफरेंस टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is inheritance in Swift?",
        "question_hi": "Swift में इनहेरिटेंस क्या है?",
        "options_en": ["Class can inherit from another class", "Struct can inherit", "Enum can inherit", "All can inherit"],
        "options_hi": ["क्लास दूसरी क्लास से इनहेरिट कर सकती है", "struct इनहेरिट कर सकता है", "enum इनहेरिट कर सकता है", "सभी इनहेरिट कर सकते हैं"],
        "answer_en": "Class can inherit from another class",
        "answer_hi": "क्लास दूसरी क्लास से इनहेरिट कर सकती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is a protocol in Swift?",
        "question_hi": "Swift में प्रोटोकॉल क्या है?",
        "options_en": ["Blueprint of methods and properties", "Base class", "Function template", "Type alias"],
        "options_hi": ["मेथड्स और प्रॉपर्टीज़ का ब्लूप्रिंट", "बेस क्लास", "फ़ंक्शन टेम्पलेट", "टाइप एलियास"],
        "answer_en": "Blueprint of methods and properties",
        "answer_hi": "मेथड्स और प्रॉपर्टीज़ का ब्लूप्रिंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is an enum in Swift?",
        "question_hi": "Swift में enum क्या है?",
        "options_en": ["Group of related values", "Collection type", "Function type", "Protocol"],
        "options_hi": ["संबंधित मानों का समूह", "संग्रह प्रकार", "फ़ंक्शन प्रकार", "प्रोटोकॉल"],
        "answer_en": "Group of related values",
        "answer_hi": "संबंधित मानों का समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the switch statement's feature in Swift?",
        "question_hi": "Swift में switch स्टेटमेंट की विशेषता क्या है?",
        "options_en": ["Must be exhaustive", "Optional break", "No default needed", "All of these"],
        "options_hi": ["संपूर्ण होना चाहिए", "वैकल्पिक break", "default की आवश्यकता नहीं", "ये सभी"],
        "answer_en": "Must be exhaustive",
        "answer_hi": "संपूर्ण होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is guard statement used for?",
        "question_hi": "guard स्टेटमेंट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Early exit from scope", "Loop control", "Error throwing", "Function definition"],
        "options_hi": ["स्कोप से शीघ्र बाहर निकलना", "लूप नियंत्रण", "त्रुटि फेंकना", "फ़ंक्शन परिभाषा"],
        "answer_en": "Early exit from scope",
        "answer_hi": "स्कोप से शीघ्र बाहर निकलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is defer used for?",
        "question_hi": "defer का उपयोग किस लिए किया जाता है?",
        "options_en": ["Execute code before leaving scope", "Delay execution", "Skip execution", "Conditional execution"],
        "options_hi": ["स्कोप छोड़ने से पहले कोड निष्पादित करना", "निष्पादन में देरी", "निष्पादन छोड़ना", "सशर्त निष्पादन"],
        "answer_en": "Execute code before leaving scope",
        "answer_hi": "स्कोप छोड़ने से पहले कोड निष्पादित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is a tuple in Swift?",
        "question_hi": "Swift में tuple क्या है?",
        "options_en": ["Group multiple values into single compound", "Array", "Dictionary", "Set"],
        "options_hi": ["कई मानों को एकल यौगिक में समूहित करना", "ऐरे", "डिक्शनरी", "सेट"],
        "answer_en": "Group multiple values into single compound",
        "answer_hi": "कई मानों को एकल यौगिक में समूहित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is type inference in Swift?",
        "question_hi": "Swift में टाइप इन्फेरेंस क्या है?",
        "options_en": ["Compiler deduces type from value", "Manual type declaration", "Type casting", "Type checking"],
        "options_hi": ["कंपाइलर मान से प्रकार निकालता है", "मैनुअल टाइप घोषणा", "टाइप कास्टिंग", "टाइप चेकिंग"],
        "answer_en": "Compiler deduces type from value",
        "answer_hi": "कंपाइलर मान से प्रकार निकालता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is typealias in Swift?",
        "question_hi": "Swift में typealias क्या है?",
        "options_en": ["Give alternative name to existing type", "Create new type", "Type conversion", "Type checking"],
        "options_hi": ["मौजूदा प्रकार को वैकल्पिक नाम देना", "नया प्रकार बनाना", "टाइप रूपांतरण", "टाइप चेकिंग"],
        "answer_en": "Give alternative name to existing type",
        "answer_hi": "मौजूदा प्रकार को वैकल्पिक नाम देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is computed property in Swift?",
        "question_hi": "Swift में computed property क्या है?",
        "options_en": ["Property that calculates value", "Stored property", "Constant property", "Lazy property"],
        "options_hi": ["वह प्रॉपर्टी जो मान की गणना करती है", "संग्रहीत प्रॉपर्टी", "स्थिर प्रॉपर्टी", "आलसी प्रॉपर्टी"],
        "answer_en": "Property that calculates value",
        "answer_hi": "वह प्रॉपर्टी जो मान की गणना करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is property observer?",
        "question_hi": "प्रॉपर्टी ऑब्ज़र्वर क्या है?",
        "options_en": ["willSet and didSet", "get and set", "lazy var", "computed var"],
        "options_hi": ["willSet और didSet", "get और set", "lazy var", "computed var"],
        "answer_en": "willSet and didSet",
        "answer_hi": "willSet और didSet",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is lazy property?",
        "question_hi": "लेज़ी प्रॉपर्टी क्या है?",
        "options_en": ["Initialized only when first accessed", "Always initialized", "Never initialized", "Computed property"],
        "options_hi": ["केवल पहली बार एक्सेस होने पर इनिशियलाइज़ होती है", "हमेशा इनिशियलाइज़ होती है", "कभी इनिशियलाइज़ नहीं होती", "कंप्यूटेड प्रॉपर्टी"],
        "answer_en": "Initialized only when first accessed",
        "answer_hi": "केवल पहली बार एक्सेस होने पर इनिशियलाइज़ होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a mutating method?",
        "question_hi": "म्यूटेटिंग मेथड क्या है?",
        "options_en": ["Method that modifies struct/enum", "Method that doesn't modify", "Static method", "Class method"],
        "options_hi": ["वह मेथड जो struct/enum को संशोधित करती है", "वह मेथड जो संशोधित नहीं करती", "स्थैतिक मेथड", "क्लास मेथड"],
        "answer_en": "Method that modifies struct/enum",
        "answer_hi": "वह मेथड जो struct/enum को संशोधित करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is extension in Swift?",
        "question_hi": "Swift में एक्सटेंशन क्या है?",
        "options_en": ["Add functionality to existing type", "Create new type", "Inherit from type", "Override type"],
        "options_hi": ["मौजूदा प्रकार में कार्यक्षमता जोड़ना", "नया प्रकार बनाना", "प्रकार से इनहेरिट करना", "प्रकार को ओवरराइड करना"],
        "answer_en": "Add functionality to existing type",
        "answer_hi": "मौजूदा प्रकार में कार्यक्षमता जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is error handling in Swift?",
        "question_hi": "Swift में एरर हैंडलिंग क्या है?",
        "options_en": ["do-try-catch", "try-catch-finally", "throw-catch", "error-try"],
        "options_hi": ["do-try-catch", "try-catch-finally", "throw-catch", "error-try"],
        "answer_en": "do-try-catch",
        "answer_hi": "do-try-catch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the difference between throws and rethrows?",
        "question_hi": "throws और rethrows में क्या अंतर है?",
        "options_en": ["rethrows for throwing functions passed as parameters", "No difference", "throws is stronger", "rethrows is for async"],
        "options_hi": ["rethrows पैरामीटर के रूप में पास की गई थ्रोइंग फ़ंक्शंस के लिए है", "कोई अंतर नहीं", "throws मजबूत है", "rethrows async के लिए है"],
        "answer_en": "rethrows for throwing functions passed as parameters",
        "answer_hi": "rethrows पैरामीटर के रूप में पास की गई थ्रोइंग फ़ंक्शंस के लिए है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is async/await in Swift?",
        "question_hi": "Swift में async/await क्या है?",
        "options_en": ["Concurrency model", "Error handling", "Memory management", "Type system"],
        "options_hi": ["समवर्ती मॉडल", "त्रुटि प्रबंधन", "मेमोरी प्रबंधन", "टाइप सिस्टम"],
        "answer_en": "Concurrency model",
        "answer_hi": "समवर्ती मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is Actor in Swift?",
        "question_hi": "Swift में Actor क्या है?",
        "options_en": ["Reference type for safe concurrency", "Value type", "Protocol", "Enum"],
        "options_hi": ["सुरक्षित समवर्तीता के लिए संदर्भ प्रकार", "मान प्रकार", "प्रोटोकॉल", "Enum"],
        "answer_en": "Reference type for safe concurrency",
        "answer_hi": "सुरक्षित समवर्तीता के लिए संदर्भ प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is @main attribute used for?",
        "question_hi": "@main एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Designate program entry point", "Main thread", "Main class", "Main function"],
        "options_hi": ["प्रोग्राम एंट्री पॉइंट निर्दिष्ट करना", "मुख्य थ्रेड", "मुख्य क्लास", "मुख्य फ़ंक्शन"],
        "answer_en": "Designate program entry point",
        "answer_hi": "प्रोग्राम एंट्री पॉइंट निर्दिष्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is @escaping closure?",
        "question_hi": "@escaping क्लोजर क्या है?",
        "options_en": ["Closure that can outlive function call", "Non-returning closure", "Immediate closure", "Local closure"],
        "options_hi": ["वह क्लोजर जो फ़ंक्शन कॉल से अधिक समय तक रह सकता है", "गैर-वापसी क्लोजर", "तत्काल क्लोजर", "स्थानीय क्लोजर"],
        "answer_en": "Closure that can outlive function call",
        "answer_hi": "वह क्लोजर जो फ़ंक्शन कॉल से अधिक समय तक रह सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is weak reference?",
        "question_hi": "वीक रेफरेंस क्या है?",
        "options_en": ["Reference that doesn't keep strong hold", "Strong reference", "Unowned reference", "Owned reference"],
        "options_hi": ["वह संदर्भ जो मजबूत पकड़ नहीं रखता", "मजबूत संदर्भ", "अनाउन्ड संदर्भ", "स्वामित्व संदर्भ"],
        "answer_en": "Reference that doesn't keep strong hold",
        "answer_hi": "वह संदर्भ जो मजबूत पकड़ नहीं रखता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is unowned reference?",
        "question_hi": "अनाउन्ड रेफरेंस क्या है?",
        "options_en": ["Reference that is never nil", "Weak reference", "Strong reference", "Optional reference"],
        "options_hi": ["वह संदर्भ जो कभी nil नहीं होता", "कमजोर संदर्भ", "मजबूत संदर्भ", "वैकल्पिक संदर्भ"],
        "answer_en": "Reference that is never nil",
        "answer_hi": "वह संदर्भ जो कभी nil नहीं होता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the difference between == and ===?",
        "question_hi": "== और === में क्या अंतर है?",
        "options_en": ["== value equality, === reference equality", "No difference", "=== stronger", "== for objects"],
        "options_hi": ["== मान समानता, === संदर्भ समानता", "कोई अंतर नहीं", "=== मजबूत है", "== ऑब्जेक्ट्स के लिए"],
        "answer_en": "== value equality, === reference equality",
        "answer_hi": "== मान समानता, === संदर्भ समानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is @available attribute?",
        "question_hi": "@available एट्रिब्यूट क्या है?",
        "options_en": ["Declare API availability", "Check availability", "Make available", "Remove availability"],
        "options_hi": ["API उपलब्धता घोषित करना", "उपलब्धता जांचना", "उपलब्ध बनाना", "उपलब्धता हटाना"],
        "answer_en": "Declare API availability",
        "answer_hi": "API उपलब्धता घोषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is String vs Substring?",
        "question_hi": "String vs Substring में क्या अंतर है?",
        "options_en": ["Substring references part of String", "No difference", "Substring is mutable", "String is reference type"],
        "options_hi": ["Substring String के भाग को संदर्भित करता है", "कोई अंतर नहीं", "Substring परिवर्तनशील है", "String संदर्भ प्रकार है"],
        "answer_en": "Substring references part of String",
        "answer_hi": "Substring String के भाग को संदर्भित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is Codable protocol?",
        "question_hi": "Codable प्रोटोकॉल क्या है?",
        "options_en": ["For encoding/decoding", "For copying", "For comparing", "For iterating"],
        "options_hi": ["एन्कोडिंग/डीकोडिंग के लिए", "कॉपी करने के लिए", "तुलना करने के लिए", "पुनरावृत्ति के लिए"],
        "answer_en": "For encoding/decoding",
        "answer_hi": "एन्कोडिंग/डीकोडिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is SwiftUI?",
        "question_hi": "SwiftUI क्या है?",
        "options_en": ["Declarative UI framework", "Imperative UI framework", "Backend framework", "Database framework"],
        "options_hi": ["घोषणात्मक UI फ्रेमवर्क", "आदेशात्मक UI फ्रेमवर्क", "बैकएंड फ्रेमवर्क", "डेटाबेस फ्रेमवर्क"],
        "answer_en": "Declarative UI framework",
        "answer_hi": "घोषणात्मक UI फ्रेमवर्क",
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