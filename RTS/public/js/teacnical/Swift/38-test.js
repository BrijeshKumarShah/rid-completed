const questions=[
    {
        "num": 1,
        "question_en": "Which keyword is used to create an enumeration in Swift?",
        "question_hi": "Swift में enumeration बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["enum", "struct", "class", "protocol"],
        "options_hi": ["enum", "struct", "class", "protocol"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the default case in a switch statement called?",
        "question_hi": "switch स्टेटमेंट में डिफ़ॉल्ट केस को क्या कहा जाता है?",
        "options_en": ["default", "case default", "else", "other"],
        "options_hi": ["default", "case default", "else", "other"],
        "answer_en": "default",
        "answer_hi": "default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which method is used to add an element to an array?",
        "question_hi": "ऐरे में element जोड़ने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["append()", "add()", "insert()", "push()"],
        "options_hi": ["append()", "add()", "insert()", "push()"],
        "answer_en": "append()",
        "answer_hi": "append()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the type of an empty array in Swift?",
        "question_hi": "Swift में खाली ऐरे का प्रकार क्या होता है?",
        "options_en": ["Array<T>", "[]", "EmptyArray", "Array()"],
        "options_hi": ["Array<T>", "[]", "EmptyArray", "Array()"],
        "answer_en": "Array<T>",
        "answer_hi": "Array<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which protocol must a type conform to be used in a Set?",
        "question_hi": "Set में उपयोग होने के लिए किसी प्रकार को किस protocol का पालन करना चाहिए?",
        "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
        "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
        "answer_en": "Hashable",
        "answer_hi": "Hashable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'indices' property on a collection?",
        "question_hi": "किसी collection पर 'indices' प्रॉपर्टी का उद्देश्य क्या है?",
        "options_en": ["Returns range of valid indices", "Returns all elements", "Returns count", "Checks if empty"],
        "options_hi": ["मान्य indices की रेंज लौटाता है", "सभी elements लौटाता है", "गिनती लौटाता है", "खाली है या नहीं जाँचता है"],
        "answer_en": "Returns range of valid indices",
        "answer_hi": "मान्य indices की रेंज लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which method removes the last element from an array?",
        "question_hi": "कौन सी मेथड ऐरे से अंतिम element हटाती है?",
        "options_en": ["removeLast()", "popLast()", "deleteLast()", "dropLast()"],
        "options_hi": ["removeLast()", "popLast()", "deleteLast()", "dropLast()"],
        "answer_en": "removeLast()",
        "answer_hi": "removeLast()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'isEmpty' property return on an empty string?",
        "question_hi": "खाली string पर 'isEmpty' प्रॉपर्टी क्या लौटाती है?",
        "options_en": ["true", "false", "0", "nil"],
        "options_hi": ["true", "false", "0", "nil"],
        "answer_en": "true",
        "answer_hi": "true",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which method converts a string to uppercase?",
        "question_hi": "string को uppercase में बदलने के लिए कौन सी मेथड है?",
        "options_en": ["uppercased()", "toUpperCase()", "upperCase()", "capitalized()"],
        "options_hi": ["uppercased()", "toUpperCase()", "upperCase()", "capitalized()"],
        "answer_en": "uppercased()",
        "answer_hi": "uppercased()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the type of 'Character' in Swift?",
        "question_hi": "Swift में 'Character' का प्रकार क्या है?",
        "options_en": ["A single Unicode scalar", "A string of length 1", "An integer", "A byte"],
        "options_hi": ["एक single Unicode scalar", "लंबाई 1 की string", "एक integer", "एक byte"],
        "answer_en": "A single Unicode scalar",
        "answer_hi": "एक single Unicode scalar",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which method is used to split a string into an array?",
        "question_hi": "string को ऐरे में split करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["split()", "separate()", "divide()", "break()"],
        "options_hi": ["split()", "separate()", "divide()", "break()"],
        "answer_en": "split()",
        "answer_hi": "split()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the result of 'nil ?? 5' in Swift?",
        "question_hi": "Swift में 'nil ?? 5' का परिणाम क्या है?",
        "options_en": ["5", "nil", "0", "Error"],
        "options_hi": ["5", "nil", "0", "Error"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the type of a function that takes no parameters and returns nothing?",
        "question_hi": "ऐसे function का प्रकार क्या है जो कोई parameters नहीं लेता और कुछ भी return नहीं करता?",
        "options_en": ["() -> Void", "Void -> Void", "() -> ()", "None -> None"],
        "options_hi": ["() -> Void", "Void -> Void", "() -> ()", "None -> None"],
        "answer_en": "() -> Void",
        "answer_hi": "() -> Void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which keyword is used to define a closure parameter?",
        "question_hi": "closure parameter को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["No keyword needed", "closure", "function", "block"],
        "options_hi": ["कोई कीवर्ड आवश्यक नहीं", "closure", "function", "block"],
        "answer_en": "No keyword needed",
        "answer_hi": "कोई कीवर्ड आवश्यक नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a trailing closure in Swift?",
        "question_hi": "Swift में trailing closure क्या है?",
        "options_en": ["Closure written outside function call parentheses", "Closure at the beginning", "Named closure", "Inline closure"],
        "options_hi": ["function call parentheses के बाहर लिखा closure", "शुरुआत में closure", "नामित closure", "इनलाइन closure"],
        "answer_en": "Closure written outside function call parentheses",
        "answer_hi": "function call parentheses के बाहर लिखा closure",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which method is used to sort an array in place?",
        "question_hi": "ऐरे को जगह पर sort करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["sort()", "sorted()", "order()", "arrange()"],
        "options_hi": ["sort()", "sorted()", "order()", "arrange()"],
        "answer_en": "sort()",
        "answer_hi": "sort()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'first' method on collections?",
        "question_hi": "collections पर 'first' मेथड का उद्देश्य क्या है?",
        "options_en": ["Returns first element or nil", "Returns first element always", "Checks if has elements", "Gets index of first"],
        "options_hi": ["पहला element या nil लौटाता है", "हमेशा पहला element लौटाता है", "elements हैं या नहीं जाँचता है", "पहले का index लाता है"],
        "answer_en": "Returns first element or nil",
        "answer_hi": "पहला element या nil लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the 'prefix' method return?",
        "question_hi": "'prefix' मेथड क्या लौटाती है?",
        "options_en": ["First n elements", "Last n elements", "Elements matching condition", "All elements"],
        "options_hi": ["पहले n elements", "अंतिम n elements", "शर्त से मेल खाने वाले elements", "सभी elements"],
        "answer_en": "First n elements",
        "answer_hi": "पहले n elements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the type of a dictionary literal?",
        "question_hi": "dictionary literal का प्रकार क्या है?",
        "options_en": ["Dictionary<Key, Value>", "[Key: Value]", "Dict<Key, Value>", "Map<Key, Value>"],
        "options_hi": ["Dictionary<Key, Value>", "[Key: Value]", "Dict<Key, Value>", "Map<Key, Value>"],
        "answer_en": "[Key: Value]",
        "answer_hi": "[Key: Value]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which method updates a value in a dictionary?",
        "question_hi": "dictionary में value update करने के लिए कौन सी मेथड है?",
        "options_en": ["updateValue(_:forKey:)", "setValue(_:forKey:)", "changeValue(_:forKey:)", "modifyValue(_:forKey:)"],
        "options_hi": ["updateValue(_:forKey:)", "setValue(_:forKey:)", "changeValue(_:forKey:)", "modifyValue(_:forKey:)"],
        "answer_en": "updateValue(_:forKey:)",
        "answer_hi": "updateValue(_:forKey:)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the result of accessing a non-existent dictionary key?",
        "question_hi": "गैर-मौजूद dictionary key तक पहुँचने का परिणाम क्या है?",
        "options_en": ["nil", "Runtime error", "Compile error", "Default value"],
        "options_hi": ["nil", "Runtime error", "Compile error", "Default value"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of 'removeValue(forKey:)' in dictionary?",
        "question_hi": "dictionary में 'removeValue(forKey:)' का उद्देश्य क्या है?",
        "options_en": ["Removes key-value pair", "Removes all values", "Removes key only", "Checks if key exists"],
        "options_hi": ["key-value pair हटाता है", "सभी values हटाता है", "केवल key हटाता है", "key मौजूद है या नहीं जाँचता है"],
        "answer_en": "Removes key-value pair",
        "answer_hi": "key-value pair हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a type method in Swift?",
        "question_hi": "Swift में type method क्या है?",
        "options_en": ["Method called on type itself", "Instance method", "Static function", "Class function"],
        "options_hi": ["प्रकार पर ही कॉल की गई मेथड", "instance method", "static function", "class function"],
        "answer_en": "Method called on type itself",
        "answer_hi": "प्रकार पर ही कॉल की गई मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which keyword defines a type method for a class?",
        "question_hi": "class के लिए type method को कौन सा कीवर्ड परिभाषित करता है?",
        "options_en": ["class func", "static func", "type func", "func class"],
        "options_hi": ["class func", "static func", "type func", "func class"],
        "answer_en": "class func",
        "answer_hi": "class func",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'convenience' init?",
        "question_hi": "'convenience' init का उद्देश्य क्या है?",
        "options_en": ["Secondary initializer", "Primary initializer", "Required initializer", "Designated initializer"],
        "options_hi": ["माध्यमिक initializer", "प्राथमिक initializer", "आवश्यक initializer", "निर्दिष्ट initializer"],
        "answer_en": "Secondary initializer",
        "answer_hi": "माध्यमिक initializer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is a failable initializer in Swift?",
        "question_hi": "Swift में failable initializer क्या है?",
        "options_en": ["init? that can return nil", "init that always succeeds", "init that throws", "init with parameters"],
        "options_hi": ["init? जो nil लौटा सकता है", "init जो हमेशा सफल होता है", "init जो throw करता है", "parameters के साथ init"],
        "answer_en": "init? that can return nil",
        "answer_hi": "init? जो nil लौटा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'required' keyword in init?",
        "question_hi": "init में 'required' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Subclasses must implement", "Optional to implement", "Prevents overriding", "Makes init public"],
        "options_hi": ["subclasses को implement करना चाहिए", "implement करना वैकल्पिक है", "override रोकता है", "init को public बनाता है"],
        "answer_en": "Subclasses must implement",
        "answer_hi": "subclasses को implement करना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the difference between '==' and '==='?",
        "question_hi": "'==' और '===' में क्या अंतर है?",
        "options_en": ["== value equality, === reference equality", "Both same", "=== for strings", "== for classes"],
        "options_hi": ["== मान समानता, === संदर्भ समानता", "दोनों समान हैं", "=== strings के लिए", "== classes के लिए"],
        "answer_en": "== value equality, === reference equality",
        "answer_hi": "== मान समानता, === संदर्भ समानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'deinit' in a class?",
        "question_hi": "class में 'deinit' का उद्देश्य क्या है?",
        "options_en": ["Cleanup before deallocation", "Initialization", "Memory allocation", "Object creation"],
        "options_hi": ["deallocation से पहले सफाई", "initialization", "मेमोरी आवंटन", "ऑब्जेक्ट बनाना"],
        "answer_en": "Cleanup before deallocation",
        "answer_hi": "deallocation से पहले सफाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which protocol provides 'description' property?",
        "question_hi": "कौन सा protocol 'description' प्रॉपर्टी प्रदान करता है?",
        "options_en": ["CustomStringConvertible", "StringConvertible", "Describable", "Printable"],
        "options_hi": ["CustomStringConvertible", "StringConvertible", "Describable", "Printable"],
        "answer_en": "CustomStringConvertible",
        "answer_hi": "CustomStringConvertible",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'Hashable' protocol?",
        "question_hi": "'Hashable' protocol का उद्देश्य क्या है?",
        "options_en": ["Provide hash value", "Provide equality", "Provide comparison", "Provide string representation"],
        "options_hi": ["hash value प्रदान करना", "समानता प्रदान करना", "तुलना प्रदान करना", "string representation प्रदान करना"],
        "answer_en": "Provide hash value",
        "answer_hi": "hash value प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What method must be implemented for 'Equatable' protocol?",
        "question_hi": "'Equatable' protocol के लिए किस मेथड को implement करना चाहिए?",
        "options_en": ["==(lhs:rhs:)", "equals()", "isEqual()", "compare()"],
        "options_hi": ["==(lhs:rhs:)", "equals()", "isEqual()", "compare()"],
        "answer_en": "==(lhs:rhs:)",
        "answer_hi": "==(lhs:rhs:)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is protocol composition?",
        "question_hi": "protocol composition क्या है?",
        "options_en": ["Combining multiple protocols", "Inheriting protocols", "Extending protocols", "Implementing protocols"],
        "options_hi": ["कई protocols को संयोजित करना", "protocols inherit करना", "protocols extend करना", "protocols implement करना"],
        "answer_en": "Combining multiple protocols",
        "answer_hi": "कई protocols को संयोजित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which syntax is used for protocol composition?",
        "question_hi": "protocol composition के लिए किस syntax का उपयोग किया जाता है?",
        "options_en": ["ProtocolA & ProtocolB", "ProtocolA, ProtocolB", "ProtocolA + ProtocolB", "ProtocolA | ProtocolB"],
        "options_hi": ["ProtocolA & ProtocolB", "ProtocolA, ProtocolB", "ProtocolA + ProtocolB", "ProtocolA | ProtocolB"],
        "answer_en": "ProtocolA & ProtocolB",
        "answer_hi": "ProtocolA & ProtocolB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is a protocol extension used for?",
        "question_hi": "protocol extension का उपयोग किस लिए किया जाता है?",
        "options_en": ["Provide default implementation", "Require implementation", "Restrict protocol", "Modify protocol"],
        "options_hi": ["default implementation प्रदान करना", "implementation की आवश्यकता", "protocol को प्रतिबंधित करना", "protocol संशोधित करना"],
        "answer_en": "Provide default implementation",
        "answer_hi": "default implementation प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'where' clause used for in generics?",
        "question_hi": "generics में 'where' clause का उपयोग किस लिए किया जाता है?",
        "options_en": ["Add type constraints", "Filter values", "Define conditions", "Specify return type"],
        "options_hi": ["type constraints जोड़ना", "values filter करना", "conditions परिभाषित करना", "return type निर्दिष्ट करना"],
        "answer_en": "Add type constraints",
        "answer_hi": "type constraints जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is an opaque return type?",
        "question_hi": "opaque return type क्या है?",
        "options_en": ["Hides concrete return type", "Shows return type", "Generic return", "Any return type"],
        "options_hi": ["concrete return type छुपाता है", "return type दिखाता है", "generic return", "कोई भी return type"],
        "answer_en": "Hides concrete return type",
        "answer_hi": "concrete return type छुपाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which keyword is used for opaque return types?",
        "question_hi": "opaque return types के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["some", "any", "opaque", "hidden"],
        "options_hi": ["some", "any", "opaque", "hidden"],
        "answer_en": "some",
        "answer_hi": "some",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'Never' return type?",
        "question_hi": "'Never' return type का उद्देश्य क्या है?",
        "options_en": ["Function never returns", "Function always returns", "Optional return", "Generic return"],
        "options_hi": ["function कभी return नहीं करती", "function हमेशा return करती है", "optional return", "generic return"],
        "answer_en": "Function never returns",
        "answer_hi": "function कभी return नहीं करती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the 'Error' protocol used for?",
        "question_hi": "'Error' protocol का उपयोग किस लिए किया जाता है?",
        "options_en": ["Represent errors", "Handle errors", "Log errors", "Ignore errors"],
        "options_hi": ["त्रुटियों का प्रतिनिधित्व करना", "त्रुटियों को संभालना", "त्रुटियों को लॉग करना", "त्रुटियों को नज़रअंदाज़ करना"],
        "answer_en": "Represent errors",
        "answer_hi": "त्रुटियों का प्रतिनिधित्व करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which keyword is used to throw an error?",
        "question_hi": "error throw करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["throw", "throws", "error", "raise"],
        "options_hi": ["throw", "throws", "error", "raise"],
        "answer_en": "throw",
        "answer_hi": "throw",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of 'rethrows' keyword?",
        "question_hi": "'rethrows' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Propagates errors from parameters", "Creates new errors", "Handles errors", "Ignores errors"],
        "options_hi": ["parameters से त्रुटियों को प्रचारित करता है", "नई त्रुटियाँ बनाता है", "त्रुटियों को संभालता है", "त्रुटियों को नज़रअंदाज़ करता है"],
        "answer_en": "Propagates errors from parameters",
        "answer_hi": "parameters से त्रुटियों को प्रचारित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does 'try?' do?",
        "question_hi": "'try?' क्या करता है?",
        "options_en": ["Converts error to optional", "Ignores error", "Propagates error", "Handles error"],
        "options_hi": ["त्रुटि को optional में बदलता है", "त्रुटि को नज़रअंदाज़ करता है", "त्रुटि को प्रचारित करता है", "त्रुटि को संभालता है"],
        "answer_en": "Converts error to optional",
        "answer_hi": "त्रुटि को optional में बदलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does 'try!' do?",
        "question_hi": "'try!' क्या करता है?",
        "options_en": ["Force unwraps throwing expression", "Safely tries", "Ignores errors", "Logs errors"],
        "options_hi": ["throwing expression को force unwrap करता है", "सुरक्षित रूप से try करता है", "त्रुटियों को नज़रअंदाज़ करता है", "त्रुटियों को लॉग करता है"],
        "answer_en": "Force unwraps throwing expression",
        "answer_hi": "throwing expression को force unwrap करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'defer' in error handling?",
        "question_hi": "error handling में 'defer' का उद्देश्य क्या है?",
        "options_en": ["Cleanup code that runs whether error occurs or not", "Handle error", "Throw error", "Catch error"],
        "options_hi": ["सफाई कोड जो error हो या न हो चलता है", "त्रुटि संभालना", "त्रुटि फेंकना", "त्रुटि पकड़ना"],
        "answer_en": "Cleanup code that runs whether error occurs or not",
        "answer_hi": "सफाई कोड जो error हो या न हो चलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is a throwing initializer?",
        "question_hi": "throwing initializer क्या है?",
        "options_en": ["init that can throw errors", "init that never fails", "init with parameters", "init? that returns nil"],
        "options_hi": ["init जो errors throw कर सकता है", "init जो कभी fail नहीं होता", "parameters के साथ init", "init? जो nil लौटाता है"],
        "answer_en": "init that can throw errors",
        "answer_hi": "init जो errors throw कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'Result' type in error handling?",
        "question_hi": "error handling में 'Result' type का उद्देश्य क्या है?",
        "options_en": ["Encapsulate success or failure", "Throw errors", "Catch errors", "Log errors"],
        "options_hi": ["सफलता या विफलता को समाहित करना", "त्रुटियाँ फेंकना", "त्रुटियाँ पकड़ना", "त्रुटियाँ लॉग करना"],
        "answer_en": "Encapsulate success or failure",
        "answer_hi": "सफलता या विफलता को समाहित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'async' keyword used for?",
        "question_hi": "'async' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mark function as asynchronous", "Make function synchronous", "Handle async errors", "Create async tasks"],
        "options_hi": ["function को asynchronous चिह्नित करना", "function को synchronous बनाना", "async errors संभालना", "async tasks बनाना"],
        "answer_en": "Mark function as asynchronous",
        "answer_hi": "function को asynchronous चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'await' keyword used for?",
        "question_hi": "'await' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Wait for async result", "Make code synchronous", "Create async call", "Handle completion"],
        "options_hi": ["async result की प्रतीक्षा करना", "code को synchronous बनाना", "async call बनाना", "completion संभालना"],
        "answer_en": "Wait for async result",
        "answer_hi": "async result की प्रतीक्षा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'Task' in Swift concurrency?",
        "question_hi": "Swift concurrency में 'Task' का उद्देश्य क्या है?",
        "options_en": ["Unit of asynchronous work", "Synchronous work", "Error handling", "Memory management"],
        "options_hi": ["अतुल्यकालिक कार्य की इकाई", "तुल्यकालिक कार्य", "त्रुटि प्रबंधन", "मेमोरी प्रबंधन"],
        "answer_en": "Unit of asynchronous work",
        "answer_hi": "अतुल्यकालिक कार्य की इकाई",
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