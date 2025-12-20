const questions = [
    {
        "num": 1,
        "question_en": "Which macro is used for printing in Rust?",
        "question_hi": "Rust में प्रिंटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "echo!", "display!"],
        "options_hi": ["println!", "print!", "echo!", "display!"],
        "answer_en": "println!",
        "answer_hi": "println!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is a 'trait' in Rust?",
        "question_hi": "Rust में 'trait' क्या है?",
        "options_en": ["A collection of methods", "A data type", "A module", "A function"],
        "options_hi": ["मेथड्स का कलेक्शन", "एक डेटा टाइप", "एक मॉड्यूल", "एक फंक्शन"],
        "answer_en": "A collection of methods",
        "answer_hi": "मेथड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the 'mut' keyword mean in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड का क्या अर्थ है?",
        "options_en": ["Mutable", "Mutable type", "Mutate", "Mutable reference"],
        "options_hi": ["परिवर्तनशील", "परिवर्तनशील प्रकार", "रूपांतरित", "परिवर्तनशील संदर्भ"],
        "answer_en": "Mutable",
        "answer_hi": "परिवर्तनशील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of these is not a Rust primitive data type?",
        "question_hi": "इनमें से कौन सा Rust आदिम डेटा प्रकार नहीं है?",
        "options_en": ["i32", "f64", "String", "bool"],
        "options_hi": ["i32", "f64", "String", "bool"],
        "answer_en": "String",
        "answer_hi": "String",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create a new vector in Rust?",
        "question_hi": "Rust में आप एक नया वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::new()", "vector::new()", "new Vec()", "Vec()"],
        "options_hi": ["Vec::new()", "vector::new()", "new Vec()", "Vec()"],
        "answer_en": "Vec::new()",
        "answer_hi": "Vec::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the entry point of a Rust program?",
        "question_hi": "Rust प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main() function", "start() function", "init() function", "run() function"],
        "options_hi": ["main() फंक्शन", "start() फंक्शन", "init() फंक्शन", "run() फंक्शन"],
        "answer_en": "main() function",
        "answer_hi": "main() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which keyword is used to define a function in Rust?",
        "question_hi": "Rust में फंक्शन को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["fn", "func", "function", "def"],
        "options_hi": ["fn", "func", "function", "def"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'Result<T, E>' represent in Rust?",
        "question_hi": "Rust में 'Result<T, E>' क्या दर्शाता है?",
        "options_en": ["Success or failure", "Optional value", "Either type", "Error type"],
        "options_hi": ["सफलता या विफलता", "वैकल्पिक मान", "या तो प्रकार", "त्रुटि प्रकार"],
        "answer_en": "Success or failure",
        "answer_hi": "सफलता या विफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which symbol is used for dereferencing in Rust?",
        "question_hi": "Rust में डीरेफरेंसिंग के लिए किस प्रतीक का उपयोग किया जाता है?",
        "options_en": ["*", "&", "->", "."],
        "options_hi": ["*", "&", "->", "."],
        "answer_en": "*",
        "answer_hi": "*",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you handle errors without panic in Rust?",
        "question_hi": "Rust में बिना पैनिक के त्रुटियों को कैसे हैंडल करते हैं?",
        "options_en": ["Result type", "Option type", "Error trait", "unwrap()"],
        "options_hi": ["Result प्रकार", "Option प्रकार", "Error ट्रेट", "unwrap()"],
        "answer_en": "Result type",
        "answer_hi": "Result प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफ़ॉल्ट पूर्णांक प्रकार क्या है?",
        "options_en": ["i32", "i64", "isize", "usize"],
        "options_hi": ["i32", "i64", "isize", "usize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which macro is used for debugging output?",
        "question_hi": "डिबगिंग आउटपुट के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["dbg!", "debug!", "print_debug!", "log!"],
        "options_hi": ["dbg!", "debug!", "print_debug!", "log!"],
        "answer_en": "dbg!",
        "answer_hi": "dbg!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is 'ownership' in Rust?",
        "question_hi": "Rust में 'ownership' क्या है?",
        "options_en": ["Memory management system", "Variable binding", "Function parameter", "Data structure"],
        "options_hi": ["मेमोरी प्रबंधन प्रणाली", "वेरिएबल बाइंडिंग", "फंक्शन पैरामीटर", "डेटा संरचना"],
        "answer_en": "Memory management system",
        "answer_hi": "मेमोरी प्रबंधन प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a string slice in Rust?",
        "question_hi": "Rust में स्ट्रिंग स्लाइस कैसे बनाते हैं?",
        "options_en": ["&str", "&String", "str", "slice str"],
        "options_hi": ["&str", "&String", "str", "slice str"],
        "answer_en": "&str",
        "answer_hi": "&str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which loop is infinite by default?",
        "question_hi": "कौन सा लूप डिफ़ॉल्ट रूप से अनंत होता है?",
        "options_en": ["loop", "while", "for", "until"],
        "options_hi": ["loop", "while", "for", "until"],
        "answer_en": "loop",
        "answer_hi": "loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'Option<T>' represent in Rust?",
        "question_hi": "Rust में 'Option<T>' क्या दर्शाता है?",
        "options_en": ["Optional value", "Required value", "Error value", "Default value"],
        "options_hi": ["वैकल्पिक मान", "आवश्यक मान", "त्रुटि मान", "डिफ़ॉल्ट मान"],
        "answer_en": "Optional value",
        "answer_hi": "वैकल्पिक मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you define a constant in Rust?",
        "question_hi": "Rust में आप कॉन्स्टेंट कैसे परिभाषित करते हैं?",
        "options_en": ["const", "let", "static", "define"],
        "options_hi": ["const", "let", "static", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which trait is used for comparing equality?",
        "question_hi": "समानता की तुलना के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Eq", "Ord", "PartialEq", "Compare"],
        "options_hi": ["Eq", "Ord", "PartialEq", "Compare"],
        "answer_en": "PartialEq",
        "answer_hi": "PartialEq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the size of 'usize' on a 64-bit system?",
        "question_hi": "64-बिट सिस्टम पर 'usize' का आकार क्या है?",
        "options_en": ["64 bits", "32 bits", "16 bits", "Platform dependent"],
        "options_hi": ["64 बिट", "32 बिट", "16 बिट", "प्लेटफ़ॉर्म पर निर्भर"],
        "answer_en": "64 bits",
        "answer_hi": "64 बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which keyword is used to import modules?",
        "question_hi": "मॉड्यूल आयात करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["use", "import", "include", "mod"],
        "options_hi": ["use", "import", "include", "mod"],
        "answer_en": "use",
        "answer_hi": "use",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is 'panic!' in Rust?",
        "question_hi": "Rust में 'panic!' क्या है?",
        "options_en": ["Terminates the program", "Prints error", "Returns error", "Logs error"],
        "options_hi": ["प्रोग्राम समाप्त करता है", "त्रुटि प्रिंट करता है", "त्रुटि लौटाता है", "त्रुटि लॉग करता है"],
        "answer_en": "Terminates the program",
        "answer_hi": "प्रोग्राम समाप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which collection type is growable in Rust?",
        "question_hi": "Rust में कौन सा संग्रह प्रकार बढ़ने योग्य है?",
        "options_en": ["Vector", "Array", "Tuple", "Slice"],
        "options_hi": ["वेक्टर", "ऐरे", "टपल", "स्लाइस"],
        "answer_en": "Vector",
        "answer_hi": "वेक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you create a new String from &str?",
        "question_hi": "&str से नया String कैसे बनाते हैं?",
        "options_en": ["to_string()", "into()", "String::new()", "as_string()"],
        "options_hi": ["to_string()", "into()", "String::new()", "as_string()"],
        "answer_en": "to_string()",
        "answer_hi": "to_string()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is a 'closure' in Rust?",
        "question_hi": "Rust में 'closure' क्या है?",
        "options_en": ["Anonymous function", "Named function", "Function pointer", "Method"],
        "options_hi": ["अनाम फ़ंक्शन", "नामित फ़ंक्शन", "फ़ंक्शन पॉइंटर", "मेथड"],
        "answer_en": "Anonymous function",
        "answer_hi": "अनाम फ़ंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which operator is used for pattern matching?",
        "question_hi": "पैटर्न मिलान के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["match", "switch", "case", "if let"],
        "options_hi": ["match", "switch", "case", "if let"],
        "answer_en": "match",
        "answer_hi": "match",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you define a struct in Rust?",
        "question_hi": "Rust में आप struct कैसे परिभाषित करते हैं?",
        "options_en": ["struct", "class", "object", "type"],
        "options_hi": ["struct", "class", "object", "type"],
        "answer_en": "struct",
        "answer_hi": "struct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is 'unwrap()' method used for?",
        "question_hi": "'unwrap()' मेथड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Extract value from Option/Result", "Wrap a value", "Handle error", "Check optional"],
        "options_hi": ["Option/Result से मान निकालना", "मान लपेटना", "त्रुटि संभालना", "वैकल्पिक जांचना"],
        "answer_en": "Extract value from Option/Result",
        "answer_hi": "Option/Result से मान निकालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which keyword defines an enumeration?",
        "question_hi": "कौन सा कीवर्ड एन्यूमरेशन को परिभाषित करता है?",
        "options_en": ["enum", "union", "type", "struct"],
        "options_hi": ["enum", "union", "type", "struct"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the output of: println!(\"{:.2}\", 3.14159);",
        "question_hi": "println!(\"{:.2}\", 3.14159); का आउटपुट क्या है?",
        "options_en": ["3.14", "3.14159", "3.1416", "3.142"],
        "options_hi": ["3.14", "3.14159", "3.1416", "3.142"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create a raw string in Rust?",
        "question_hi": "Rust में आप रॉ स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["r#\"...\"#", "raw\"...\"", "R\"...\"", "\"\"...\"\""],
        "options_hi": ["r#\"...\"#", "raw\"...\"", "R\"...\"", "\"\"...\"\""],
        "answer_en": "r#\"...\"#",
        "answer_hi": "r#\"...\"#",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which trait is required for copying values?",
        "question_hi": "मानों को कॉपी करने के लिए किस ट्रेट की आवश्यकता होती है?",
        "options_en": ["Copy", "Clone", "Duplicate", "Replicate"],
        "options_hi": ["Copy", "Clone", "Duplicate", "Replicate"],
        "answer_en": "Copy",
        "answer_hi": "Copy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of 'as' keyword?",
        "question_hi": "'as' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Type casting", "Aliasing", "Importing", "Defining"],
        "options_hi": ["टाइप कास्टिंग", "उपनाम देना", "आयात", "परिभाषित करना"],
        "answer_en": "Type casting",
        "answer_hi": "टाइप कास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which macro is used for string concatenation?",
        "question_hi": "स्ट्रिंग संयोजन के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["format!", "concat!", "join!", "append!"],
        "options_hi": ["format!", "concat!", "join!", "append!"],
        "answer_en": "format!",
        "answer_hi": "format!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you create a static variable?",
        "question_hi": "आप स्थिर वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static", "const", "let", "global"],
        "options_hi": ["static", "const", "let", "global"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the default floating point type?",
        "question_hi": "डिफ़ॉल्ट फ्लोटिंग पॉइंट प्रकार क्या है?",
        "options_en": ["f64", "f32", "float", "double"],
        "options_hi": ["f64", "f32", "float", "double"],
        "answer_en": "f64",
        "answer_hi": "f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which method is used to add elements to a vector?",
        "question_hi": "वेक्टर में तत्व जोड़ने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'Box<T>' used for?",
        "question_hi": "'Box<T>' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Reference counting", "Smart pointer"],
        "options_hi": ["हीप आवंटन", "स्टैक आवंटन", "संदर्भ गणना", "स्मार्ट पॉइंटर"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप आवंटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which keyword ends a match arm?",
        "question_hi": "कौन सा कीवर्ड मैच आर्म को समाप्त करता है?",
        "options_en": ["=>", "->", ":", ";"],
        "options_hi": ["=>", "->", ":", ";"],
        "answer_en": "=>",
        "answer_hi": "=>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you define a generic function?",
        "question_hi": "आप जेनेरिक फ़ंक्शन कैसे परिभाषित करते हैं?",
        "options_en": ["fn name<T>(...)", "fn name[type](...)", "fn name{type}(...)", "generic fn name(...)"],
        "options_hi": ["fn name<T>(...)", "fn name[type](...)", "fn name{type}(...)", "generic fn name(...)"],
        "answer_en": "fn name<T>(...)",
        "answer_hi": "fn name<T>(...)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'self' represent in a method?",
        "question_hi": "मेथड में 'self' क्या दर्शाता है?",
        "options_en": ["Instance of the struct", "Class reference", "Static reference", "Type parameter"],
        "options_hi": ["struct का इंस्टेंस", "क्लास संदर्भ", "स्थिर संदर्भ", "टाइप पैरामीटर"],
        "answer_en": "Instance of the struct",
        "answer_hi": "struct का इंस्टेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which trait provides the 'len()' method for collections?",
        "question_hi": "कौन सा ट्रेट संग्रह के लिए 'len()' मेथड प्रदान करता है?",
        "options_en": ["std::len::Len", "std::collections::Size", "std::iter::Length", "Built-in for collections"],
        "options_hi": ["std::len::Len", "std::collections::Size", "std::iter::Length", "संग्रह के लिए अंतर्निहित"],
        "answer_en": "Built-in for collections",
        "answer_hi": "संग्रह के लिए अंतर्निहित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you iterate over a vector?",
        "question_hi": "आप वेक्टर पर कैसे पुनरावृति करते हैं?",
        "options_en": ["for item in &vec", "vec.iter()", "vec.for_each()", "All of these"],
        "options_hi": ["for item in &vec", "vec.iter()", "vec.for_each()", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'Rc<T>' used for?",
        "question_hi": "'Rc<T>' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reference counting", "Atomic operations", "Mutex locking", "Heap allocation"],
        "options_hi": ["संदर्भ गणना", "परमाणु संचालन", "म्यूटेक्स लॉकिंग", "हीप आवंटन"],
        "answer_en": "Reference counting",
        "answer_hi": "संदर्भ गणना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which method converts Result to Option?",
        "question_hi": "कौन सी मेथड Result को Option में बदलती है?",
        "options_en": ["ok()", "unwrap()", "expect()", "unwrap_or()"],
        "options_hi": ["ok()", "unwrap()", "expect()", "unwrap_or()"],
        "answer_en": "ok()",
        "answer_hi": "ok()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the range syntax in Rust?",
        "question_hi": "Rust में रेंज सिंटैक्स क्या है?",
        "options_en": ["1..10", "1 to 10", "range(1,10)", "1-10"],
        "options_hi": ["1..10", "1 to 10", "range(1,10)", "1-10"],
        "answer_en": "1..10",
        "answer_hi": "1..10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you create a tuple?",
        "question_hi": "आप टपल कैसे बनाते हैं?",
        "options_en": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
        "options_hi": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
        "answer_en": "(1, 2, 3)",
        "answer_hi": "(1, 2, 3)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which macro is used for testing?",
        "question_hi": "टेस्टिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["#[test]", "#[cfg(test)]", "test!", "assert!"],
        "options_hi": ["#[test]", "#[cfg(test)]", "test!", "assert!"],
        "answer_en": "#[test]",
        "answer_hi": "#[test]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does 'dyn' keyword indicate?",
        "question_hi": "'dyn' कीवर्ड क्या इंगित करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic typing", "Dynamic memory", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक टाइपिंग", "डायनामिक मेमोरी", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a new HashMap?",
        "question_hi": "आप नया HashMap कैसे बनाते हैं?",
        "options_en": ["HashMap::new()", "new HashMap()", "map::new()", "HashMap()"],
        "options_hi": ["HashMap::new()", "new HashMap()", "map::new()", "HashMap()"],
        "answer_en": "HashMap::new()",
        "answer_hi": "HashMap::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'impl' block?",
        "question_hi": "'impl' ब्लॉक का उद्देश्य क्या है?",
        "options_en": ["Implement methods", "Implement traits", "Both A and B", "Define struct"],
        "options_hi": ["मेथड्स लागू करना", "ट्रेट्स लागू करना", "A और B दोनों", "struct परिभाषित करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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