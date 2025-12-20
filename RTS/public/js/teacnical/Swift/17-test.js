const questions= [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a variable in Swift?",
    "question_hi": "Swift में वेरिएबल घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["var", "let", "const", "define"],
    "options_hi": ["var", "let", "const", "define"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में कॉन्स्टेंट घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "final", "static"],
    "options_hi": ["let", "var", "final", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which symbol represents an Optional type?",
    "question_hi": "Optional टाइप को कौन सा सिंबल दर्शाता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which value represents absence of data?",
    "question_hi": "डेटा की अनुपस्थिति को कौन दर्शाता है?",
    "options_en": ["nil", "null", "void", "empty"],
    "options_hi": ["nil", "null", "void", "empty"],
    "answer_en": "nil",
    "answer_hi": "nil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["func", "def", "function", "fn"],
    "options_hi": ["func", "def", "function", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which statement is used for conditions?",
    "question_hi": "कंडीशन के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["if", "for", "while", "switch"],
    "options_hi": ["if", "for", "while", "switch"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which loop iterates over collections?",
    "question_hi": "कलेक्शन पर इटरेट करने के लिए कौन सा लूप है?",
    "options_en": ["for-in", "while", "repeat", "loop"],
    "options_hi": ["for-in", "while", "repeat", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword creates a class?",
    "question_hi": "क्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "struct", "enum", "object"],
    "options_hi": ["class", "struct", "enum", "object"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword creates a structure?",
    "question_hi": "स्ट्रक्चर बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["struct", "class", "enum", "object"],
    "options_hi": ["struct", "class", "enum", "object"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword defines an enum?",
    "question_hi": "Enum डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["enum", "struct", "class", "protocol"],
    "options_hi": ["enum", "struct", "class", "protocol"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which symbol is used for inheritance?",
    "question_hi": "इनहेरिटेंस के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "->"],
    "options_hi": [":", "extends", "inherits", "->"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which access level is default in Swift?",
    "question_hi": "Swift में डिफॉल्ट एक्सेस लेवल कौन सा है?",
    "options_en": ["internal", "private", "public", "fileprivate"],
    "options_hi": ["internal", "private", "public", "fileprivate"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword prevents inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword defines a protocol?",
    "question_hi": "प्रोटोकॉल डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["protocol", "interface", "delegate", "type"],
    "options_hi": ["protocol", "interface", "delegate", "type"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword extends existing type?",
    "question_hi": "किसी टाइप को एक्सटेंड करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["extension", "extend", "inherit", "expand"],
    "options_hi": ["extension", "extend", "inherit", "expand"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which feature manages memory automatically?",
    "question_hi": "ऑटोमैटिक मेमोरी मैनेजमेंट कौन करता है?",
    "options_en": ["ARC", "GC", "Heap", "Stack"],
    "options_hi": ["ARC", "GC", "Heap", "Stack"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used for error handling?",
    "question_hi": "एरर हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["do-catch", "try-finally", "throw-catch", "handle"],
    "options_hi": ["do-catch", "try-finally", "throw-catch", "handle"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword throws an error?",
    "question_hi": "एरर थ्रो करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "throws", "try", "catch"],
    "options_hi": ["throw", "throws", "try", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword calls a throwing function?",
    "question_hi": "थ्रोइंग फंक्शन कॉल करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["try", "throw", "catch", "do"],
    "options_hi": ["try", "throw", "catch", "do"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator handles nil value?",
    "question_hi": "nil वैल्यू को हैंडल करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["??", "?", "!", "&&"],
    "options_hi": ["??", "?", "!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which collection stores ordered values?",
    "question_hi": "ऑर्डर में वैल्यू स्टोर करने वाला कलेक्शन कौन सा है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which collection stores unique values?",
    "question_hi": "यूनिक वैल्यू स्टोर करने वाला कलेक्शन कौन सा है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर स्टोर करने वाला कलेक्शन कौन सा है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword defines a closure?",
    "question_hi": "क्लोज़र किससे डिफाइन होता है?",
    "options_en": ["{}", "()", "[]", "<>"],
    "options_hi": ["{}", "()", "[]", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword marks escaping closure?",
    "question_hi": "एस्केपिंग क्लोज़र के लिए कौन सा कीवर्ड है?",
    "options_en": ["@escaping", "@autoclosure", "@inline", "@main"],
    "options_hi": ["@escaping", "@autoclosure", "@inline", "@main"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword defines initializer?",
    "question_hi": "इनिशियलाइज़र डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["init", "new", "create", "start"],
    "options_hi": ["init", "new", "create", "start"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword deinitializes an object?",
    "question_hi": "ऑब्जेक्ट को डीइनिशियलाइज़ करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["deinit", "delete", "destroy", "remove"],
    "options_hi": ["deinit", "delete", "destroy", "remove"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword makes property lazy?",
    "question_hi": "प्रॉपर्टी को लेज़ी बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["lazy", "static", "final", "weak"],
    "options_hi": ["lazy", "static", "final", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword declares weak reference?",
    "question_hi": "वीक रेफरेंस घोषित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["weak", "unowned", "strong", "static"],
    "options_hi": ["weak", "unowned", "strong", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword declares unowned reference?",
    "question_hi": "अनओन्ड रेफरेंस घोषित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["unowned", "weak", "strong", "final"],
    "options_hi": ["unowned", "weak", "strong", "final"],
    "answer_en": "unowned",
    "answer_hi": "unowned",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword enables async function?",
    "question_hi": "एसिंक्रोनस फंक्शन के लिए कौन सा कीवर्ड है?",
    "options_en": ["async", "await", "Task", "thread"],
    "options_hi": ["async", "await", "Task", "thread"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "एसिंक्रोनस रिज़ल्ट के लिए कौन सा कीवर्ड वेट करता है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which feature prevents data races?",
    "question_hi": "डेटा रेस को रोकने वाला फीचर कौन सा है?",
    "options_en": ["actor", "class", "struct", "enum"],
    "options_hi": ["actor", "class", "struct", "enum"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword defines an actor?",
    "question_hi": "एक्टर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["actor", "class", "struct", "enum"],
    "options_hi": ["actor", "class", "struct", "enum"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword stops a loop?",
    "question_hi": "लूप रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["break", "stop", "exit", "return"],
    "options_hi": ["break", "stop", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword skips loop iteration?",
    "question_hi": "लूप की इटरेशन स्किप करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["continue", "skip", "pass", "break"],
    "options_hi": ["continue", "skip", "pass", "break"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword exits a function?",
    "question_hi": "फंक्शन से बाहर निकलने के लिए कौन सा कीवर्ड है?",
    "options_en": ["return", "exit", "break", "stop"],
    "options_hi": ["return", "exit", "break", "stop"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which type groups multiple values?",
    "question_hi": "कई वैल्यू को ग्रुप करने वाला टाइप कौन सा है?",
    "options_en": ["Tuple", "Array", "Set", "Dictionary"],
    "options_hi": ["Tuple", "Array", "Set", "Dictionary"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword supports generics?",
    "question_hi": "जेनरिक्स के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["<T>", "[]", "{}", "()"],
    "options_hi": ["<T>", "[]", "{}", "()"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword checks early condition?",
    "question_hi": "अर्ली कंडीशन चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["guard", "if", "switch", "for"],
    "options_hi": ["guard", "if", "switch", "for"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator compares values?",
    "question_hi": "वैल्यू कंपेयर करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["==", "=", "!=", "<="],
    "options_hi": ["==", "=", "!=", "<="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator assigns value?",
    "question_hi": "वैल्यू असाइन करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["=", "==", "!=", "<"],
    "options_hi": ["=", "==", "!=", "<"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which attribute marks availability?",
    "question_hi": "अवेलेबिलिटी मार्क करने वाला एट्रिब्यूट कौन सा है?",
    "options_en": ["@available", "@main", "@objc", "@testable"],
    "options_hi": ["@available", "@main", "@objc", "@testable"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which attribute marks entry point?",
    "question_hi": "एंट्री पॉइंट को कौन सा एट्रिब्यूट मार्क करता है?",
    "options_en": ["@main", "@available", "@objc", "@start"],
    "options_hi": ["@main", "@available", "@objc", "@start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which attribute supports Objective-C?",
    "question_hi": "Objective-C सपोर्ट के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@objc", "@main", "@available", "@swift"],
    "options_hi": ["@objc", "@main", "@available", "@swift"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword defines static property?",
    "question_hi": "स्टैटिक प्रॉपर्टी के लिए कौन सा कीवर्ड है?",
    "options_en": ["static", "class", "final", "lazy"],
    "options_hi": ["static", "class", "final", "lazy"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type is value type?",
    "question_hi": "वैल्यू टाइप कौन सा है?",
    "options_en": ["struct", "class", "actor", "protocol"],
    "options_hi": ["struct", "class", "actor", "protocol"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which type is reference type?",
    "question_hi": "रेफरेंस टाइप कौन सा है?",
    "options_en": ["class", "struct", "enum", "tuple"],
    "options_hi": ["class", "struct", "enum", "tuple"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword overrides method?",
    "question_hi": "मेथड ओवरराइड करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["override", "replace", "change", "extend"],
    "options_hi": ["override", "replace", "change", "extend"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword marks required initializer?",
    "question_hi": "रिक्वायर्ड इनिशियलाइज़र के लिए कौन सा कीवर्ड है?",
    "options_en": ["required", "init", "final", "override"],
    "options_hi": ["required", "init", "final", "override"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which method sorts array?",
    "question_hi": "एरे को सॉर्ट करने का मेथड कौन सा है?",
    "options_en": ["sorted()", "order()", "arrange()", "sortArray()"],
    "options_hi": ["sorted()", "order()", "arrange()", "sortArray()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which method filters elements?",
    "question_hi": "एलिमेंट फ़िल्टर करने का मेथड कौन सा है?",
    "options_en": ["filter()", "map()", "reduce()", "flatMap()"],
    "options_hi": ["filter()", "map()", "reduce()", "flatMap()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which method transforms elements?",
    "question_hi": "एलिमेंट ट्रांसफॉर्म करने का मेथड कौन सा है?",
    "options_en": ["map()", "filter()", "reduce()", "sort()"],
    "options_hi": ["map()", "filter()", "reduce()", "sort()"],
    "answer_en": "map()",
    "answer_hi": "map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which method combines values?",
    "question_hi": "वैल्यू कंबाइन करने का मेथड कौन सा है?",
    "options_en": ["reduce()", "map()", "filter()", "sort()"],
    "options_hi": ["reduce()", "map()", "filter()", "sort()"],
    "answer_en": "reduce()",
    "answer_hi": "reduce()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which type represents no return value?",
    "question_hi": "कोई रिटर्न वैल्यू न होने को कौन दर्शाता है?",
    "options_en": ["Void", "nil", "None", "Empty"],
    "options_hi": ["Void", "nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which directive checks availability?",
    "question_hi": "अवेलेबिलिटी चेक करने के लिए कौन सा डायरेक्टिव है?",
    "options_en": ["#available", "@available", "#if", "@check"],
    "options_hi": ["#available", "@available", "#if", "@check"],
    "answer_en": "#available",
    "answer_hi": "#available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which directive supports conditional compilation?",
    "question_hi": "कंडीशनल कम्पाइलेशन के लिए कौन सा डायरेक्टिव है?",
    "options_en": ["#if", "#define", "#else", "#switch"],
    "options_hi": ["#if", "#define", "#else", "#switch"],
    "answer_en": "#if",
    "answer_hi": "#if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which keyword captures weak self?",
    "question_hi": "weak self कैप्चर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["weak", "unowned", "strong", "static"],
    "options_hi": ["weak", "unowned", "strong", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which keyword marks escaping closure?",
    "question_hi": "एस्केपिंग क्लोज़र के लिए कौन सा कीवर्ड है?",
    "options_en": ["@escaping", "@autoclosure", "@inline", "@lazy"],
    "options_hi": ["@escaping", "@autoclosure", "@inline", "@lazy"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which keyword marks autoclosure?",
    "question_hi": "ऑटो क्लोज़र के लिए कौन सा कीवर्ड है?",
    "options_en": ["@autoclosure", "@escaping", "@main", "@inline"],
    "options_hi": ["@autoclosure", "@escaping", "@main", "@inline"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which protocol supports encoding and decoding?",
    "question_hi": "एन्कोडिंग और डीकोडिंग के लिए कौन सा प्रोटोकॉल है?",
    "options_en": ["Codable", "Serializable", "EncodableOnly", "Decoder"],
    "options_hi": ["Codable", "Serializable", "EncodableOnly", "Decoder"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which protocol supports equality check?",
    "question_hi": "इक्वैलिटी चेक के लिए कौन सा प्रोटोकॉल है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Codable"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Codable"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which protocol supports sorting?",
    "question_hi": "सॉर्टिंग सपोर्ट करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "options_hi": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which protocol supports hashing?",
    "question_hi": "हैशिंग सपोर्ट करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Hashable", "Comparable", "Equatable", "Codable"],
    "options_hi": ["Hashable", "Comparable", "Equatable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which keyword marks mutating method?",
    "question_hi": "म्यूटेटिंग मेथड के लिए कौन सा कीवर्ड है?",
    "options_en": ["mutating", "modify", "change", "update"],
    "options_hi": ["mutating", "modify", "change", "update"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which keyword creates a range?",
    "question_hi": "रेंज बनाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["...", "..<", "=>", "=="],
    "options_hi": ["...", "..<", "=>", "=="],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which operator creates half-open range?",
    "question_hi": "हाफ-ओपन रेंज बनाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["..<", "...", "==", "=>"],
    "options_hi": ["..<", "...", "==", "=>"],
    "answer_en": "..<",
    "answer_hi": "..<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which keyword supports pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["case", "if", "guard", "for"],
    "options_hi": ["case", "if", "guard", "for"],
    "answer_en": "case",
    "answer_hi": "case",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword checks type?",
    "question_hi": "टाइप चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["is", "as", "type", "check"],
    "options_hi": ["is", "as", "type", "check"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which keyword casts type?",
    "question_hi": "टाइप कास्ट करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["as", "is", "cast", "convert"],
    "options_hi": ["as", "is", "cast", "convert"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which keyword defines singleton pattern?",
    "question_hi": "सिंगलटन पैटर्न के लिए कौन सा कीवर्ड आमतौर पर उपयोग होता है?",
    "options_en": ["static", "final", "lazy", "private"],
    "options_hi": ["static", "final", "lazy", "private"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which keyword restricts setter access?",
    "question_hi": "सेटर एक्सेस सीमित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["private(set)", "private", "internal", "fileprivate"],
    "options_hi": ["private(set)", "private", "internal", "fileprivate"],
    "answer_en": "private(set)",
    "answer_hi": "private(set)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which observer runs before property change?",
    "question_hi": "प्रॉपर्टी बदलने से पहले कौन सा ऑब्ज़र्वर चलता है?",
    "options_en": ["willSet", "didSet", "observe", "watch"],
    "options_hi": ["willSet", "didSet", "observe", "watch"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which observer runs after property change?",
    "question_hi": "प्रॉपर्टी बदलने के बाद कौन सा ऑब्ज़र्वर चलता है?",
    "options_en": ["didSet", "willSet", "afterSet", "observe"],
    "options_hi": ["didSet", "willSet", "afterSet", "observe"],
    "answer_en": "didSet",
    "answer_hi": "didSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which keyword supports concurrency task?",
    "question_hi": "कनकरेंसी टास्क के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["Task", "Thread", "Queue", "Process"],
    "options_hi": ["Task", "Thread", "Queue", "Process"],
    "answer_en": "Task",
    "answer_hi": "Task",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which keyword creates detached task?",
    "question_hi": "डिटैच्ड टास्क बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["Task.detached", "Task.async", "Task.run", "Task.new"],
    "options_hi": ["Task.detached", "Task.async", "Task.run", "Task.new"],
    "answer_en": "Task.detached",
    "answer_hi": "Task.detached",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which attribute ensures main thread execution?",
    "question_hi": "मेन थ्रेड एक्ज़ीक्यूशन सुनिश्चित करने के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@MainActor", "@main", "@actor", "@thread"],
    "options_hi": ["@MainActor", "@main", "@actor", "@thread"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which protocol enforces concurrency safety?",
    "question_hi": "कनकरेंसी सेफ्टी को कौन सा प्रोटोकॉल लागू करता है?",
    "options_en": ["Sendable", "Codable", "Hashable", "Equatable"],
    "options_hi": ["Sendable", "Codable", "Hashable", "Equatable"],
    "answer_en": "Sendable",
    "answer_hi": "Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which keyword discards unused return value?",
    "question_hi": "अनयूज़्ड रिटर्न वैल्यू को डिस्कार्ड करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["@discardableResult", "@optional", "@ignore", "@result"],
    "options_hi": ["@discardableResult", "@optional", "@ignore", "@result"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which attribute allows testing internal code?",
    "question_hi": "इंटरनल कोड को टेस्ट करने के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@testable", "@available", "@main", "@objc"],
    "options_hi": ["@testable", "@available", "@main", "@objc"],
    "answer_en": "@testable",
    "answer_hi": "@testable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which keyword defines read-only computed property?",
    "question_hi": "रीड-ओनली कम्प्यूटेड प्रॉपर्टी के लिए कौन सा कीवर्ड है?",
    "options_en": ["get", "set", "readonly", "static"],
    "options_hi": ["get", "set", "readonly", "static"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword marks deprecated API?",
    "question_hi": "डिप्रिकेटेड API को कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["@available", "@deprecated", "@remove", "@old"],
    "options_hi": ["@available", "@deprecated", "@remove", "@old"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which keyword prevents override?",
    "question_hi": "ओवरराइड रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which keyword makes property immutable?",
    "question_hi": "प्रॉपर्टी को इम्यूटेबल बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["let", "var", "static", "final"],
    "options_hi": ["let", "var", "static", "final"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which type represents empty tuple?",
    "question_hi": "खाली ट्यूपल किसे दर्शाता है?",
    "options_en": ["()", "Void", "nil", "Empty"],
    "options_hi": ["()", "Void", "nil", "Empty"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which keyword marks file-level access?",
    "question_hi": "फाइल-लेवल एक्सेस के लिए कौन सा कीवर्ड है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which keyword allows module-wide access?",
    "question_hi": "मॉड्यूल-वाइड एक्सेस के लिए कौन सा कीवर्ड है?",
    "options_en": ["internal", "private", "public", "fileprivate"],
    "options_hi": ["internal", "private", "public", "fileprivate"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which keyword allows external access?",
    "question_hi": "एक्सटर्नल एक्सेस के लिए कौन सा कीवर्ड है?",
    "options_en": ["public", "internal", "private", "fileprivate"],
    "options_hi": ["public", "internal", "private", "fileprivate"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which keyword allows subclass outside module?",
    "question_hi": "मॉड्यूल के बाहर सबक्लासिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["open", "public", "internal", "final"],
    "options_hi": ["open", "public", "internal", "final"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which keyword defines main entry point?",
    "question_hi": "मेन एंट्री पॉइंट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["@main", "main()", "@entry", "@start"],
    "options_hi": ["@main", "main()", "@entry", "@start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which keyword exits program execution?",
    "question_hi": "प्रोग्राम एक्ज़ीक्यूशन खत्म करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["exit()", "stop()", "break", "return"],
    "options_hi": ["exit()", "stop()", "break", "return"],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which operator checks inequality?",
    "question_hi": "इनइक्वैलिटी चेक करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["!=", "==", "=", "<"],
    "options_hi": ["!=", "==", "=", "<"],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which keyword supports functional programming?",
    "question_hi": "फंक्शनल प्रोग्रामिंग को कौन सपोर्ट करता है?",
    "options_en": ["closures", "classes", "actors", "enums"],
    "options_hi": ["closures", "classes", "actors", "enums"],
    "answer_en": "closures",
    "answer_hi": "closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which keyword marks inline optimization?",
    "question_hi": "इनलाइन ऑप्टिमाइज़ेशन के लिए कौन सा कीवर्ड है?",
    "options_en": ["@inline", "@escaping", "@main", "@objc"],
    "options_hi": ["@inline", "@escaping", "@main", "@objc"],
    "answer_en": "@inline",
    "answer_hi": "@inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which keyword defines precedence group?",
    "question_hi": "प्रिसीडेंस ग्रुप डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["precedencegroup", "priority", "group", "order"],
    "options_hi": ["precedencegroup", "priority", "group", "order"],
    "answer_en": "precedencegroup",
    "answer_hi": "precedencegroup",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which keyword defines custom operator?",
    "question_hi": "कस्टम ऑपरेटर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["operator", "func", "static", "define"],
    "options_hi": ["operator", "func", "static", "define"],
    "answer_en": "operator",
    "answer_hi": "operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which keyword checks platform condition?",
    "question_hi": "प्लेटफॉर्म कंडीशन चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["#if", "#available", "@available", "@check"],
    "options_hi": ["#if", "#available", "@available", "@check"],
    "answer_en": "#if",
    "answer_hi": "#if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which keyword allows optional binding?",
    "question_hi": "ऑप्शनल बाइंडिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["if let", "guard", "!", "??"],
    "options_hi": ["if let", "guard", "!", "??"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which keyword ensures safe concurrency?",
    "question_hi": "सेफ कनकरेंसी सुनिश्चित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["Sendable", "Codable", "Equatable", "Hashable"],
    "options_hi": ["Sendable", "Codable", "Equatable", "Hashable"],
    "answer_en": "Sendable",
    "answer_hi": "Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyword prevents further subclassing?",
    "question_hi": "आगे सबक्लासिंग रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
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