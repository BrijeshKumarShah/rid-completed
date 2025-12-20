const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a variable in Swift?",
    "question_hi": "Swift में वेरिएबल डिक्लेयर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["var", "let", "const", "static"],
    "options_hi": ["var", "let", "const", "static"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में कॉन्स्टेंट डिक्लेयर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "final", "static"],
    "options_hi": ["let", "var", "final", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which symbol is used to define an optional type?",
    "question_hi": "ऑप्शनल टाइप डिफाइन करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to unwrap an optional forcefully?",
    "question_hi": "ऑप्शनल को फोर्सफुली अनरैप करने के लिए क्या उपयोग होता है?",
    "options_en": ["!", "?", "??", "as"],
    "options_hi": ["!", "?", "??", "as"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used for safe optional unwrapping?",
    "question_hi": "सेफ ऑप्शनल अनरैपिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["if let", "guard", "try", "unwrap"],
    "options_hi": ["if let", "guard", "try", "unwrap"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which statement exits a function early if condition fails?",
    "question_hi": "कंडीशन फेल होने पर फंक्शन से जल्दी बाहर निकलने के लिए क्या उपयोग होता है?",
    "options_en": ["guard", "if", "break", "return"],
    "options_hi": ["guard", "if", "break", "return"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which loop is used to iterate over a collection?",
    "question_hi": "कलेक्शन पर इटरेट करने के लिए कौन सा लूप उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat-while", "loop"],
    "options_hi": ["for-in", "while", "repeat-while", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type stores ordered collection of values?",
    "question_hi": "ऑर्डर में वैल्यू स्टोर करने के लिए कौन सा टाइप है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which collection stores unique values?",
    "question_hi": "यूनिक वैल्यू स्टोर करने वाला कलेक्शन कौन सा है?",
    "options_en": ["Set", "Array", "Tuple", "Dictionary"],
    "options_hi": ["Set", "Array", "Tuple", "Dictionary"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर स्टोर करने के लिए कौन सा कलेक्शन है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["func", "function", "def", "method"],
    "options_hi": ["func", "function", "def", "method"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword returns a value from function?",
    "question_hi": "फंक्शन से वैल्यू रिटर्न करने के लिए क्या उपयोग होता है?",
    "options_en": ["return", "break", "yield", "exit"],
    "options_hi": ["return", "break", "yield", "exit"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "क्लास डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["class", "struct", "enum", "object"],
    "options_hi": ["class", "struct", "enum", "object"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to define a structure?",
    "question_hi": "स्ट्रक्चर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["struct", "class", "enum", "type"],
    "options_hi": ["struct", "class", "enum", "type"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword defines an enumeration?",
    "question_hi": "एनमरेशन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["enum", "struct", "class", "protocol"],
    "options_hi": ["enum", "struct", "class", "protocol"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "प्रोटोकॉल डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["protocol", "interface", "abstract", "implements"],
    "options_hi": ["protocol", "interface", "abstract", "implements"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to conform to a protocol?",
    "question_hi": "प्रोटोकॉल को अपनाने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "implements", "extends", "->"],
    "options_hi": [":", "implements", "extends", "->"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
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
    "num": 19,
    "question_en": "Which keyword creates initializer?",
    "question_hi": "इनिशियलाइज़र बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["init", "new", "create", "start"],
    "options_hi": ["init", "new", "create", "start"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword deinitializes a class?",
    "question_hi": "क्लास को डीइनिशियलाइज़ करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["deinit", "destroy", "free", "remove"],
    "options_hi": ["deinit", "destroy", "free", "remove"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Swift feature manages memory automatically?",
    "question_hi": "Swift में मेमोरी अपने आप कौन मैनेज करता है?",
    "options_en": ["ARC", "GC", "Manual", "Heap"],
    "options_hi": ["ARC", "GC", "Manual", "Heap"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which reference avoids retain cycle?",
    "question_hi": "रिटेन साइकिल से बचने के लिए कौन सा रेफरेंस उपयोग होता है?",
    "options_en": ["weak", "strong", "lazy", "static"],
    "options_hi": ["weak", "strong", "lazy", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which reference keeps object alive?",
    "question_hi": "ऑब्जेक्ट को ज़िंदा रखने के लिए कौन सा रेफरेंस है?",
    "options_en": ["strong", "weak", "unowned", "lazy"],
    "options_hi": ["strong", "weak", "unowned", "lazy"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword defines closure?",
    "question_hi": "क्लोज़र बनाने के लिए कौन सा सिंटैक्स है?",
    "options_en": ["{ }", "( )", "[ ]", "< >"],
    "options_hi": ["{ }", "( )", "[ ]", "< >"],
    "answer_en": "{ }",
    "answer_hi": "{ }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword separates closure body?",
    "question_hi": "क्लोज़र में बॉडी अलग करने के लिए क्या उपयोग होता है?",
    "options_en": ["in", "->", ":", "="],
    "options_hi": ["in", "->", ":", "="],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Swift feature supports asynchronous code?",
    "question_hi": "असिंक्रोनस कोड के लिए Swift का कौन सा फीचर है?",
    "options_en": ["async/await", "thread", "promise", "callback"],
    "options_hi": ["async/await", "thread", "promise", "callback"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword marks asynchronous function?",
    "question_hi": "असिंक्रोनस फंक्शन को मार्क करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["async", "await", "throws", "lazy"],
    "options_hi": ["async", "await", "throws", "lazy"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "असिंक्रोनस रिज़ल्ट का इंतज़ार करने के लिए क्या उपयोग होता है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Swift concurrency type ensures data safety?",
    "question_hi": "डेटा सेफ्टी के लिए Swift में कौन सा टाइप है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword defines actor?",
    "question_hi": "एक्टर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["actor", "class", "struct", "object"],
    "options_hi": ["actor", "class", "struct", "object"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Swift feature allows code reuse?",
    "question_hi": "कोड रीयूज़ के लिए कौन सा फीचर है?",
    "options_en": ["Extensions", "Closures", "Actors", "Enums"],
    "options_hi": ["Extensions", "Closures", "Actors", "Enums"],
    "answer_en": "Extensions",
    "answer_hi": "Extensions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword adds functionality to existing type?",
    "question_hi": "मौजूदा टाइप में फंक्शनलिटी जोड़ने के लिए क्या उपयोग होता है?",
    "options_en": ["extension", "protocol", "inheritance", "override"],
    "options_hi": ["extension", "protocol", "inheritance", "override"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Swift feature enables generic programming?",
    "question_hi": "जनरिक प्रोग्रामिंग के लिए कौन सा फीचर है?",
    "options_en": ["Generics", "Protocols", "Actors", "Enums"],
    "options_hi": ["Generics", "Protocols", "Actors", "Enums"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which symbol defines generic type?",
    "question_hi": "जनरिक टाइप किससे डिफाइन होता है?",
    "options_en": ["<T>", "(T)", "[T]", "{T}"],
    "options_hi": ["<T>", "(T)", "[T]", "{T}"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword adds condition to generic?",
    "question_hi": "जनरिक में कंडीशन जोड़ने के लिए क्या उपयोग होता है?",
    "options_en": ["where", "if", "guard", "limit"],
    "options_hi": ["where", "if", "guard", "limit"],
    "answer_en": "where",
    "answer_hi": "where",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which protocol supports encoding and decoding?",
    "question_hi": "एन्कोडिंग और डिकोडिंग के लिए कौन सा प्रोटोकॉल है?",
    "options_en": ["Codable", "Serializable", "Encodable", "Decodable"],
    "options_hi": ["Codable", "Serializable", "Encodable", "Decodable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword handles errors?",
    "question_hi": "एरर हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["do-catch", "try-finally", "handle", "throw-catch"],
    "options_hi": ["do-catch", "try-finally", "handle", "throw-catch"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword throws error?",
    "question_hi": "एरर फेंकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "throws", "error", "catch"],
    "options_hi": ["throw", "throws", "error", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword marks throwing function?",
    "question_hi": "थ्रो करने वाले फंक्शन को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword calls throwing function?",
    "question_hi": "थ्रो करने वाले फंक्शन को कॉल करने के लिए क्या उपयोग होता है?",
    "options_en": ["try", "throw", "catch", "await"],
    "options_hi": ["try", "throw", "catch", "await"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword ignores thrown error?",
    "question_hi": "थ्रो हुए एरर को इग्नोर करने के लिए क्या उपयोग होता है?",
    "options_en": ["try?", "try!", "catch", "ignore"],
    "options_hi": ["try?", "try!", "catch", "ignore"],
    "answer_en": "try?",
    "answer_hi": "try?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword crashes app on error?",
    "question_hi": "एरर आने पर ऐप क्रैश करने के लिए क्या उपयोग होता है?",
    "options_en": ["try!", "try?", "throw", "fatal"],
    "options_hi": ["try!", "try?", "throw", "fatal"],
    "answer_en": "try!",
    "answer_hi": "try!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword stops loop execution?",
    "question_hi": "लूप को रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["break", "stop", "exit", "end"],
    "options_hi": ["break", "stop", "exit", "end"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "करेंट इटरेशन स्किप करने के लिए क्या उपयोग होता है?",
    "options_en": ["continue", "skip", "next", "pass"],
    "options_hi": ["continue", "skip", "next", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift type represents no value?",
    "question_hi": "कोई वैल्यू न होने को कौन सा टाइप दर्शाता है?",
    "options_en": ["Void", "nil", "Empty", "None"],
    "options_hi": ["Void", "nil", "Empty", "None"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword defines computed property?",
    "question_hi": "कम्प्यूटेड प्रॉपर्टी किससे डिफाइन होती है?",
    "options_en": ["get/set", "compute", "lazy", "static"],
    "options_hi": ["get/set", "compute", "lazy", "static"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword delays property initialization?",
    "question_hi": "प्रॉपर्टी इनिशियलाइज़ेशन देर से करने के लिए क्या उपयोग होता है?",
    "options_en": ["lazy", "weak", "static", "final"],
    "options_hi": ["lazy", "weak", "static", "final"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword restricts setter access?",
    "question_hi": "सेटर एक्सेस को सीमित करने के लिए क्या उपयोग होता है?",
    "options_en": ["private(set)", "final", "static", "lazy"],
    "options_hi": ["private(set)", "final", "static", "lazy"],
    "answer_en": "private(set)",
    "answer_hi": "private(set)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword marks override method?",
    "question_hi": "ओवरराइड मेथड को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["override", "final", "static", "class"],
    "options_hi": ["override", "final", "static", "class"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature ensures type safety?",
    "question_hi": "टाइप सेफ्टी सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["Type inference", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Type inference", "Pointers", "Macros", "Selectors"],
    "answer_en": "Type inference",
    "answer_hi": "Type inference",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which keyword marks unavailable code?",
    "question_hi": "अनअवेलेबल कोड को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["@available", "@discardableResult", "@objc", "@main"],
    "options_hi": ["@available", "@discardableResult", "@objc", "@main"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which attribute allows Objective-C interoperability?",
    "question_hi": "Objective-C इंटरऑपरेबिलिटी के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@objc", "@main", "@frozen", "@inline"],
    "options_hi": ["@objc", "@main", "@frozen", "@inline"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which attribute marks app entry point?",
    "question_hi": "ऐप के एंट्री पॉइंट को कौन सा एट्रिब्यूट मार्क करता है?",
    "options_en": ["@main", "@objc", "@UIApplicationMain", "@start"],
    "options_hi": ["@main", "@objc", "@UIApplicationMain", "@start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which Swift type represents characters?",
    "question_hi": "कैरेक्टर को रिप्रेज़ेंट करने वाला टाइप कौन सा है?",
    "options_en": ["Character", "String", "Char", "Text"],
    "options_hi": ["Character", "String", "Char", "Text"],
    "answer_en": "Character",
    "answer_hi": "Character",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which type stores text?",
    "question_hi": "टेक्स्ट स्टोर करने के लिए कौन सा टाइप है?",
    "options_en": ["String", "Character", "Text", "Array"],
    "options_hi": ["String", "Character", "Text", "Array"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which Swift operator combines strings?",
    "question_hi": "स्ट्रिंग जोड़ने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["+", "&", "++", "*"],
    "options_hi": ["+", "&", "++", "*"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which feature converts type automatically?",
    "question_hi": "ऑटोमैटिक टाइप कन्वर्ज़न के लिए क्या जिम्मेदार है?",
    "options_en": ["Type inference", "Casting", "Parsing", "Bridging"],
    "options_hi": ["Type inference", "Casting", "Parsing", "Bridging"],
    "answer_en": "Type inference",
    "answer_hi": "Type inference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which operator checks equality?",
    "question_hi": "इक्वैलिटी चेक करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["==", "=", "!=", "==="],
    "options_hi": ["==", "=", "!=", "==="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which operator checks identity?",
    "question_hi": "ऑब्जेक्ट आइडेंटिटी चेक करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["===", "==", "!=", "="],
    "options_hi": ["===", "==", "!=", "="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which keyword stops program execution?",
    "question_hi": "प्रोग्राम को तुरंत रोकने के लिए क्या उपयोग होता है?",
    "options_en": ["fatalError", "exit", "break", "stop"],
    "options_hi": ["fatalError", "exit", "break", "stop"],
    "answer_en": "fatalError",
    "answer_hi": "fatalError",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which Swift feature supports immutability?",
    "question_hi": "इम्यूटेबल डेटा को कौन सपोर्ट करता है?",
    "options_en": ["let", "var", "static", "lazy"],
    "options_hi": ["let", "var", "static", "lazy"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which keyword allows method overriding?",
    "question_hi": "मेथड ओवरराइड की अनुमति कौन देता है?",
    "options_en": ["override", "class", "static", "final"],
    "options_hi": ["override", "class", "static", "final"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which keyword disallows overriding?",
    "question_hi": "ओवरराइड रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which Swift feature supports protocol-oriented programming?",
    "question_hi": "प्रोटोकॉल ओरिएंटेड प्रोग्रामिंग किससे होती है?",
    "options_en": ["Protocols", "Classes", "Actors", "Closures"],
    "options_hi": ["Protocols", "Classes", "Actors", "Closures"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which keyword provides default protocol implementation?",
    "question_hi": "डिफ़ॉल्ट प्रोटोकॉल इम्प्लीमेंटेशन के लिए क्या उपयोग होता है?",
    "options_en": ["extension", "protocol", "override", "inherit"],
    "options_hi": ["extension", "protocol", "override", "inherit"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which Swift feature improves performance?",
    "question_hi": "परफॉर्मेंस बेहतर करने वाला फीचर कौन सा है?",
    "options_en": ["Compile-time safety", "Reflection", "Dynamic typing", "Pointers"],
    "options_hi": ["Compile-time safety", "Reflection", "Dynamic typing", "Pointers"],
    "answer_en": "Compile-time safety",
    "answer_hi": "Compile-time safety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which keyword marks inline function?",
    "question_hi": "इनलाइन फंक्शन के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@inline", "@available", "@objc", "@main"],
    "options_hi": ["@inline", "@available", "@objc", "@main"],
    "answer_en": "@inline",
    "answer_hi": "@inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which Swift feature ensures thread safety?",
    "question_hi": "थ्रेड सेफ्टी सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["Actors", "Classes", "Structs", "Enums"],
    "options_hi": ["Actors", "Classes", "Structs", "Enums"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword defines read-only computed property?",
    "question_hi": "रीड-ओनली कम्प्यूटेड प्रॉपर्टी किससे बनती है?",
    "options_en": ["get", "set", "lazy", "static"],
    "options_hi": ["get", "set", "lazy", "static"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which Swift feature allows pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए कौन सा फीचर है?",
    "options_en": ["switch", "if", "guard", "for"],
    "options_hi": ["switch", "if", "guard", "for"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which keyword matches multiple cases?",
    "question_hi": "एक से ज्यादा केस मैच करने के लिए क्या उपयोग होता है?",
    "options_en": ["fallthrough", "default", "case", "break"],
    "options_hi": ["fallthrough", "default", "case", "break"],
    "answer_en": "fallthrough",
    "answer_hi": "fallthrough",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which keyword handles unmatched switch cases?",
    "question_hi": "स्विच के अनमैच्ड केस को कौन हैंडल करता है?",
    "options_en": ["default", "case", "else", "none"],
    "options_hi": ["default", "case", "else", "none"],
    "answer_en": "default",
    "answer_hi": "default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which Swift feature supports optional chaining?",
    "question_hi": "ऑप्शनल चेनिंग किससे होती है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which operator provides default value for optional?",
    "question_hi": "ऑप्शनल के लिए डिफ़ॉल्ट वैल्यू देने वाला ऑपरेटर कौन सा है?",
    "options_en": ["??", "?", "!", "==="],
    "options_hi": ["??", "?", "!", "==="],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which Swift feature supports safe casting?",
    "question_hi": "सेफ कास्टिंग के लिए कौन सा फीचर है?",
    "options_en": ["as?", "as!", "is", "cast"],
    "options_hi": ["as?", "as!", "is", "cast"],
    "answer_en": "as?",
    "answer_hi": "as?",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which keyword checks type?",
    "question_hi": "टाइप चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["is", "as", "typeof", "instance"],
    "options_hi": ["is", "as", "typeof", "instance"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "फंक्शनल प्रोग्रामिंग के लिए कौन सा फीचर है?",
    "options_en": ["map/filter/reduce", "loops", "classes", "actors"],
    "options_hi": ["map/filter/reduce", "loops", "classes", "actors"],
    "answer_en": "map/filter/reduce",
    "answer_hi": "map/filter/reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which method transforms collection?",
    "question_hi": "कलेक्शन को ट्रांसफॉर्म करने वाला मेथड कौन सा है?",
    "options_en": ["map", "filter", "reduce", "forEach"],
    "options_hi": ["map", "filter", "reduce", "forEach"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which method filters values?",
    "question_hi": "वैल्यू फिल्टर करने के लिए कौन सा मेथड है?",
    "options_en": ["filter", "map", "reduce", "sort"],
    "options_hi": ["filter", "map", "reduce", "sort"],
    "answer_en": "filter",
    "answer_hi": "filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which method combines values?",
    "question_hi": "वैल्यू को कंबाइन करने वाला मेथड कौन सा है?",
    "options_en": ["reduce", "map", "filter", "merge"],
    "options_hi": ["reduce", "map", "filter", "merge"],
    "answer_en": "reduce",
    "answer_hi": "reduce",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which Swift feature supports immutability by default?",
    "question_hi": "डिफ़ॉल्ट रूप से इम्यूटेबल डेटा को कौन सपोर्ट करता है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which Swift feature supports reference semantics?",
    "question_hi": "रेफरेंस सेमांटिक्स किससे होती है?",
    "options_en": ["Class", "Struct", "Enum", "Tuple"],
    "options_hi": ["Class", "Struct", "Enum", "Tuple"],
    "answer_en": "Class",
    "answer_hi": "Class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which Swift type can conform to multiple protocols?",
    "question_hi": "एक से ज्यादा प्रोटोकॉल को कौन कन्फ़ॉर्म कर सकता है?",
    "options_en": ["Class", "Struct", "Enum", "All"],
    "options_hi": ["Class", "Struct", "Enum", "All"],
    "answer_en": "All",
    "answer_hi": "All",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which Swift feature ensures memory safety?",
    "question_hi": "मेमोरी सेफ्टी कौन सुनिश्चित करता है?",
    "options_en": ["ARC", "Pointers", "Manual memory", "GC"],
    "options_hi": ["ARC", "Pointers", "Manual memory", "GC"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which keyword marks deprecated API?",
    "question_hi": "डिप्रिकेटेड API को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["@available", "@deprecated", "@old", "@removed"],
    "options_hi": ["@available", "@deprecated", "@old", "@removed"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which Swift feature improves readability?",
    "question_hi": "रीडेबिलिटी बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Named parameters", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Named parameters", "Pointers", "Macros", "Selectors"],
    "answer_en": "Named parameters",
    "answer_hi": "Named parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which keyword hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने के लिए क्या उपयोग होता है?",
    "options_en": ["private", "public", "internal", "open"],
    "options_hi": ["private", "public", "internal", "open"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which access level allows subclassing outside module?",
    "question_hi": "मॉड्यूल के बाहर सबक्लासिंग के लिए कौन सा एक्सेस लेवल है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which access level is default in Swift?",
    "question_hi": "Swift में डिफ़ॉल्ट एक्सेस लेवल कौन सा है?",
    "options_en": ["internal", "private", "public", "open"],
    "options_hi": ["internal", "private", "public", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which Swift feature enables modern iOS development?",
    "question_hi": "मॉडर्न iOS डेवलपमेंट के लिए सबसे जरूरी फीचर कौन सा है?",
    "options_en": ["Type safety", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Type safety", "Pointers", "Macros", "Selectors"],
    "answer_en": "Type safety",
    "answer_hi": "Type safety",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which Swift feature supports safety and speed?",
    "question_hi": "सेफ्टी और स्पीड दोनों को कौन सपोर्ट करता है?",
    "options_en": ["Swift compiler", "Interpreter", "Runtime only", "Manual memory"],
    "options_hi": ["Swift compiler", "Interpreter", "Runtime only", "Manual memory"],
    "answer_en": "Swift compiler",
    "answer_hi": "Swift compiler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which Swift feature reduces runtime crashes?",
    "question_hi": "रनटाइम क्रैश कम करने वाला फीचर कौन सा है?",
    "options_en": ["Optionals", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Optionals", "Pointers", "Macros", "Selectors"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which Swift feature enables expressive syntax?",
    "question_hi": "एक्सप्रेसिव सिंटैक्स किससे मिलता है?",
    "options_en": ["Closures", "Pointers", "Assembly", "Macros"],
    "options_hi": ["Closures", "Pointers", "Assembly", "Macros"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which Swift feature supports modern concurrency?",
    "question_hi": "मॉडर्न कॉनकरेंसी के लिए कौन सा फीचर है?",
    "options_en": ["Actors", "Threads", "Locks", "Queues"],
    "options_hi": ["Actors", "Threads", "Locks", "Queues"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which Swift feature improves maintainability?",
    "question_hi": "मेंटेनेबिलिटी बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Protocol-oriented design", "Pointers", "Macros", "Assembly"],
    "options_hi": ["Protocol-oriented design", "Pointers", "Macros", "Assembly"],
    "answer_en": "Protocol-oriented design",
    "answer_hi": "Protocol-oriented design",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which Swift feature supports safe API design?",
    "question_hi": "सेफ API डिज़ाइन के लिए कौन सा फीचर है?",
    "options_en": ["Strong typing", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Strong typing", "Pointers", "Macros", "Selectors"],
    "answer_en": "Strong typing",
    "answer_hi": "Strong typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which Swift feature helps avoid null pointer errors?",
    "question_hi": "नल पॉइंटर एरर से बचने में कौन मदद करता है?",
    "options_en": ["Optionals", "Pointers", "GC", "Manual memory"],
    "options_hi": ["Optionals", "Pointers", "GC", "Manual memory"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which Swift feature ensures predictable behavior?",
    "question_hi": "प्रेडिक्टेबल बिहेवियर कौन सुनिश्चित करता है?",
    "options_en": ["Value semantics", "Pointers", "Reflection", "Macros"],
    "options_hi": ["Value semantics", "Pointers", "Reflection", "Macros"],
    "answer_en": "Value semantics",
    "answer_hi": "Value semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which Swift feature improves app stability?",
    "question_hi": "ऐप स्टेबिलिटी बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Memory safety", "Pointers", "Manual memory", "GC"],
    "options_hi": ["Memory safety", "Pointers", "Manual memory", "GC"],
    "answer_en": "Memory safety",
    "answer_hi": "Memory safety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift feature makes it a modern programming language?",
    "question_hi": "Swift को मॉडर्न प्रोग्रामिंग लैंग्वेज बनाने वाला फीचर कौन सा है?",
    "options_en": ["Safety + Performance", "Pointers", "Assembly", "Manual memory"],
    "options_hi": ["Safety + Performance", "Pointers", "Assembly", "Manual memory"],
    "answer_en": "Safety + Performance",
    "answer_hi": "Safety + Performance",
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