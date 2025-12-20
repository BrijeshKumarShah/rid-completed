const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to define a variable in Swift?",
    "question_hi": "Swift में वेरिएबल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["var", "let", "const", "static"],
    "options_hi": ["var", "let", "const", "static"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to define a constant?",
    "question_hi": "Swift में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "final", "static"],
    "options_hi": ["let", "var", "final", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which symbol defines an optional type?",
    "question_hi": "ऑप्शनल टाइप को दर्शाने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which value represents absence of value?",
    "question_hi": "वैल्यू की अनुपस्थिति को कौन दर्शाता है?",
    "options_en": ["nil", "null", "void", "none"],
    "options_hi": ["nil", "null", "void", "none"],
    "answer_en": "nil",
    "answer_hi": "nil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which statement is used for condition checking?",
    "question_hi": "कंडीशन चेक करने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["if", "for", "while", "switch"],
    "options_hi": ["if", "for", "while", "switch"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which loop iterates over a sequence?",
    "question_hi": "सीक्वेंस पर लूप चलाने के लिए कौन सा लूप उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat", "loop"],
    "options_hi": ["for-in", "while", "repeat", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword defines a function?",
    "question_hi": "फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword creates a structure?",
    "question_hi": "स्ट्रक्चर बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["struct", "class", "enum", "object"],
    "options_hi": ["struct", "class", "enum", "object"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
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
    "num": 10,
    "question_en": "Which keyword defines an enumeration?",
    "question_hi": "एनमरेशन बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["enum", "struct", "class", "protocol"],
    "options_hi": ["enum", "struct", "class", "protocol"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used for inheritance?",
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
    "question_hi": "Swift में डिफ़ॉल्ट एक्सेस लेवल कौन सा होता है?",
    "options_en": ["internal", "private", "public", "fileprivate"],
    "options_hi": ["internal", "private", "public", "fileprivate"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword stops execution in a loop?",
    "question_hi": "लूप को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["break", "stop", "exit", "end"],
    "options_hi": ["break", "stop", "exit", "end"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "करंट इटरेशन स्किप करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["continue", "skip", "pass", "next"],
    "options_hi": ["continue", "skip", "pass", "next"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which statement handles multiple conditions?",
    "question_hi": "कई कंडीशन हैंडल करने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "प्रोटोकॉल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "type"],
    "options_hi": ["protocol", "interface", "delegate", "type"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword conforms to a protocol?",
    "question_hi": "प्रोटोकॉल को अपनाने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "implements", "uses", "adopt"],
    "options_hi": [":", "implements", "uses", "adopt"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword creates an extension?",
    "question_hi": "एक्सटेंशन बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["extension", "extend", "add", "append"],
    "options_hi": ["extension", "extend", "add", "append"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword marks a throwing function?",
    "question_hi": "थ्रो करने वाले फंक्शन को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["throws", "throw", "error", "catch"],
    "options_hi": ["throws", "throw", "error", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which block handles errors?",
    "question_hi": "एरर हैंडल करने के लिए कौन सा ब्लॉक उपयोग होता है?",
    "options_en": ["do-catch", "try-catch", "handle", "error"],
    "options_hi": ["do-catch", "try-catch", "handle", "error"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword throws an error?",
    "question_hi": "एरर फेंकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["throw", "throws", "error", "catch"],
    "options_hi": ["throw", "throws", "error", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword unwraps optional forcefully?",
    "question_hi": "ऑप्शनल को फोर्स अनरैप करने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which operator provides default value?",
    "question_hi": "डिफ़ॉल्ट वैल्यू देने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["??", "?", "!", "&"],
    "options_hi": ["??", "?", "!", "&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which type stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर स्टोर करने के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which type stores unique values?",
    "question_hi": "यूनिक वैल्यू स्टोर करने के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which type stores ordered values?",
    "question_hi": "ऑर्डर में वैल्यू स्टोर करने के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["Array", "Set", "Dictionary", "Enum"],
    "options_hi": ["Array", "Set", "Dictionary", "Enum"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword creates a closure?",
    "question_hi": "क्लोज़र बनाने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["{ }", "( )", "[ ]", "< >"],
    "options_hi": ["{ }", "( )", "[ ]", "< >"],
    "answer_en": "{ }",
    "answer_hi": "{ }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword captures value weakly?",
    "question_hi": "वैल्यू को वीकली कैप्चर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["weak", "unowned", "strong", "lazy"],
    "options_hi": ["weak", "unowned", "strong", "lazy"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which memory management technique does Swift use?",
    "question_hi": "Swift कौन सी मेमोरी मैनेजमेंट तकनीक उपयोग करता है?",
    "options_en": ["ARC", "GC", "Manual", "Hybrid"],
    "options_hi": ["ARC", "GC", "Manual", "Hybrid"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword delays property initialization?",
    "question_hi": "प्रॉपर्टी इनिशियलाइज़ेशन को देर से करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["lazy", "weak", "static", "final"],
    "options_hi": ["lazy", "weak", "static", "final"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword marks class non-inheritable?",
    "question_hi": "क्लास को इनहेरिट होने से रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "private", "static", "sealed"],
    "options_hi": ["final", "private", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used for concurrency?",
    "question_hi": "कनकरेंसी के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["async", "await", "thread", "queue"],
    "options_hi": ["async", "await", "thread", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "async रिज़ल्ट के लिए इंतज़ार करने को कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["await", "wait", "hold", "sync"],
    "options_hi": ["await", "wait", "hold", "sync"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift type ensures thread safety?",
    "question_hi": "थ्रेड सेफ्टी सुनिश्चित करने के लिए कौन सा Swift टाइप उपयोग होता है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword defines generic type?",
    "question_hi": "जेनेरिक टाइप डिफाइन करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["<T>", "{T}", "(T)", "[T]"],
    "options_hi": ["<T>", "{T}", "(T)", "[T]"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword exits function early?",
    "question_hi": "फंक्शन को जल्दी बाहर निकालने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["guard", "break", "return", "continue"],
    "options_hi": ["guard", "break", "return", "continue"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword returns a value?",
    "question_hi": "वैल्यू वापस करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["return", "break", "yield", "send"],
    "options_hi": ["return", "break", "yield", "send"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which property belongs to type itself?",
    "question_hi": "जो प्रॉपर्टी टाइप से जुड़ी होती है उसे क्या कहते हैं?",
    "options_en": ["static", "lazy", "weak", "final"],
    "options_hi": ["static", "lazy", "weak", "final"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword prevents retain cycle?",
    "question_hi": "रिटेन साइकिल रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["weak", "lazy", "static", "final"],
    "options_hi": ["weak", "lazy", "static", "final"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword marks unavailable code?",
    "question_hi": "अनएवेलेबल कोड को दर्शाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["@available", "@discardableResult", "@objc", "@main"],
    "options_hi": ["@available", "@discardableResult", "@objc", "@main"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword defines main entry point?",
    "question_hi": "मेन एंट्री पॉइंट को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@main", "@start", "@entry", "@app"],
    "options_hi": ["@main", "@start", "@entry", "@app"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which annotation exposes Swift to Objective-C?",
    "question_hi": "Swift को Objective-C से जोड़ने के लिए कौन सा एनोटेशन उपयोग होता है?",
    "options_en": ["@objc", "@available", "@main", "@testable"],
    "options_hi": ["@objc", "@available", "@main", "@testable"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword is used for testing import?",
    "question_hi": "टेस्टिंग इम्पोर्ट के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["@testable", "@objc", "@main", "@available"],
    "options_hi": ["@testable", "@objc", "@main", "@available"],
    "answer_en": "@testable",
    "answer_hi": "@testable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword avoids unused result warning?",
    "question_hi": "अनयूज़्ड रिज़ल्ट वार्निंग हटाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["@discardableResult", "@objc", "@main", "@available"],
    "options_hi": ["@discardableResult", "@objc", "@main", "@available"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword marks deprecated API?",
    "question_hi": "डिप्रिकेटेड API को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@available", "@deprecated", "@objc", "@main"],
    "options_hi": ["@available", "@deprecated", "@objc", "@main"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword creates a tuple?",
    "question_hi": "टपल बनाने के लिए कौन सा सिंटैक्स उपयोग होता है?",
    "options_en": ["()", "[]", "{}", "<>"],
    "options_hi": ["()", "[]", "{}", "<>"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword defines mutating method?",
    "question_hi": "म्यूटेटिंग मेथड के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["mutating", "changing", "var", "modify"],
    "options_hi": ["mutating", "changing", "var", "modify"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword refers to current instance?",
    "question_hi": "करंट इंस्टेंस को रेफर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["self", "this", "me", "current"],
    "options_hi": ["self", "this", "me", "current"],
    "answer_en": "self",
    "answer_hi": "self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword imports a module?",
    "question_hi": "मॉड्यूल इम्पोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["import", "include", "require", "use"],
    "options_hi": ["import", "include", "require", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword marks unavailable initializer?",
    "question_hi": "अनएवेलेबल इनिशियलाइज़र को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@available", "@discardableResult", "@objc", "@main"],
    "options_hi": ["@available", "@discardableResult", "@objc", "@main"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which keyword initializes an object?",
    "question_hi": "ऑब्जेक्ट इनिशियलाइज़ करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["init", "new", "create", "start"],
    "options_hi": ["init", "new", "create", "start"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which keyword deinitializes an object?",
    "question_hi": "ऑब्जेक्ट डिइनिशियलाइज़ करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["deinit", "destroy", "free", "release"],
    "options_hi": ["deinit", "destroy", "free", "release"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which keyword marks optional binding?",
    "question_hi": "ऑप्शनल बाइंडिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["if let", "guard let", "let", "var"],
    "options_hi": ["if let", "guard let", "let", "var"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which keyword ensures single execution?",
    "question_hi": "एक बार ही एक्सीक्यूशन सुनिश्चित करने के लिए क्या उपयोग होता है?",
    "options_en": ["static", "lazy", "final", "private"],
    "options_hi": ["static", "lazy", "final", "private"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which keyword allows method override?",
    "question_hi": "मेथड ओवरराइड करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["override", "final", "static", "mutating"],
    "options_hi": ["override", "final", "static", "mutating"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which keyword prevents override?",
    "question_hi": "ओवरराइड रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which keyword accesses superclass?",
    "question_hi": "सुपरक्लास को एक्सेस करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["super", "parent", "base", "this"],
    "options_hi": ["super", "parent", "base", "this"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which keyword is used for pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["switch", "if", "for", "while"],
    "options_hi": ["switch", "if", "for", "while"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which keyword defines type alias?",
    "question_hi": "टाइप एलियास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["typealias", "typedef", "alias", "rename"],
    "options_hi": ["typealias", "typedef", "alias", "rename"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which keyword marks escaping closure?",
    "question_hi": "एस्केपिंग क्लोज़र को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@escaping", "@autoclosure", "@objc", "@main"],
    "options_hi": ["@escaping", "@autoclosure", "@objc", "@main"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which keyword delays execution?",
    "question_hi": "एग्जीक्यूशन को देर से करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["defer", "delay", "wait", "sleep"],
    "options_hi": ["defer", "delay", "wait", "sleep"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which keyword marks autoclosure?",
    "question_hi": "ऑटोक्लोज़र को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@autoclosure", "@escaping", "@objc", "@main"],
    "options_hi": ["@autoclosure", "@escaping", "@objc", "@main"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which keyword accesses file scope?",
    "question_hi": "फाइल स्कोप एक्सेस करने के लिए कौन सा एक्सेस लेवल उपयोग होता है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which keyword restricts to same declaration?",
    "question_hi": "सिर्फ उसी डिक्लेरेशन तक सीमित रखने के लिए कौन सा एक्सेस लेवल उपयोग होता है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which keyword exposes API publicly?",
    "question_hi": "API को पब्लिक एक्सेस देने के लिए कौन सा एक्सेस लेवल उपयोग होता है?",
    "options_en": ["public", "internal", "private", "fileprivate"],
    "options_hi": ["public", "internal", "private", "fileprivate"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which keyword allows override across modules?",
    "question_hi": "मॉड्यूल्स के बीच ओवरराइड की अनुमति देने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which keyword marks read-only computed property?",
    "question_hi": "रीड-ओनली कम्प्यूटेड प्रॉपर्टी के लिए क्या जरूरी है?",
    "options_en": ["get", "set", "var", "let"],
    "options_hi": ["get", "set", "var", "let"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which keyword defines setter?",
    "question_hi": "सेटर डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["set", "get", "put", "update"],
    "options_hi": ["set", "get", "put", "update"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword defines subscripts?",
    "question_hi": "सबस्क्रिप्ट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["subscript", "index", "access", "slice"],
    "options_hi": ["subscript", "index", "access", "slice"],
    "answer_en": "subscript",
    "answer_hi": "subscript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which keyword defines operator?",
    "question_hi": "ऑपरेटर डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["operator", "func", "define", "custom"],
    "options_hi": ["operator", "func", "define", "custom"],
    "answer_en": "operator",
    "answer_hi": "operator",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which keyword defines precedence group?",
    "question_hi": "प्रिसीडेन्स ग्रुप बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["precedencegroup", "priority", "group", "order"],
    "options_hi": ["precedencegroup", "priority", "group", "order"],
    "answer_en": "precedencegroup",
    "answer_hi": "precedencegroup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which keyword compares identity?",
    "question_hi": "ऑब्जेक्ट आइडेंटिटी तुलना के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["===", "==", "!=", "<="],
    "options_hi": ["===", "==", "!=", "<="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which keyword compares equality?",
    "question_hi": "इक्वैलिटी तुलना के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["==", "===", "!=", "<"],
    "options_hi": ["==", "===", "!=", "<"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which protocol enables equality check?",
    "question_hi": "इक्वैलिटी चेक सक्षम करने के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Codable"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Codable"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which protocol enables sorting?",
    "question_hi": "सॉर्टिंग सक्षम करने के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["Comparable", "Equatable", "Hashable", "Codable"],
    "options_hi": ["Comparable", "Equatable", "Hashable", "Codable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which protocol enables dictionary keys?",
    "question_hi": "डिक्शनरी की के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which protocol enables JSON encoding?",
    "question_hi": "JSON एन्कोडिंग के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["Codable", "Serializable", "Encodable", "Decodable"],
    "options_hi": ["Codable", "Serializable", "Encodable", "Decodable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which keyword decodes JSON?",
    "question_hi": "JSON डिकोड करने के लिए कौन सी क्लास उपयोग होती है?",
    "options_en": ["JSONDecoder", "JSONEncoder", "Decoder", "Parser"],
    "options_hi": ["JSONDecoder", "JSONEncoder", "Decoder", "Parser"],
    "answer_en": "JSONDecoder",
    "answer_hi": "JSONDecoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which keyword encodes JSON?",
    "question_hi": "JSON एन्कोड करने के लिए कौन सी क्लास उपयोग होती है?",
    "options_en": ["JSONEncoder", "JSONDecoder", "Encoder", "Parser"],
    "options_hi": ["JSONEncoder", "JSONDecoder", "Encoder", "Parser"],
    "answer_en": "JSONEncoder",
    "answer_hi": "JSONEncoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which keyword marks async throwing function?",
    "question_hi": "async और throwing फंक्शन के लिए कौन सा सही क्रम है?",
    "options_en": ["async throws", "throws async", "throw async", "async error"],
    "options_hi": ["async throws", "throws async", "throw async", "async error"],
    "answer_en": "async throws",
    "answer_hi": "async throws",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which keyword defines result type?",
    "question_hi": "रिज़ल्ट टाइप डिफाइन करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["->", "=>", ":", "="],
    "options_hi": ["->", "=>", ":", "="],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword creates property observer?",
    "question_hi": "प्रॉपर्टी ऑब्ज़र्वर के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["willSet", "didSet", "observe", "watch"],
    "options_hi": ["willSet", "didSet", "observe", "watch"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which observer runs after value change?",
    "question_hi": "वैल्यू बदलने के बाद कौन सा ऑब्ज़र्वर चलता है?",
    "options_en": ["didSet", "willSet", "observe", "afterSet"],
    "options_hi": ["didSet", "willSet", "observe", "afterSet"],
    "answer_en": "didSet",
    "answer_hi": "didSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which keyword marks unavailable code path?",
    "question_hi": "अनरीचेबल कोड के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["fatalError", "assert", "precondition", "throw"],
    "options_hi": ["fatalError", "assert", "precondition", "throw"],
    "answer_en": "fatalError",
    "answer_hi": "fatalError",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which keyword checks condition in debug?",
    "question_hi": "डिबग में कंडीशन चेक करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["assert", "fatalError", "guard", "if"],
    "options_hi": ["assert", "fatalError", "guard", "if"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which keyword enforces condition always?",
    "question_hi": "हमेशा कंडीशन लागू करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["precondition", "assert", "fatalError", "guard"],
    "options_hi": ["precondition", "assert", "fatalError", "guard"],
    "answer_en": "precondition",
    "answer_hi": "precondition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which keyword marks value type?",
    "question_hi": "वैल्यू टाइप कौन सा होता है?",
    "options_en": ["struct", "class", "actor", "protocol"],
    "options_hi": ["struct", "class", "actor", "protocol"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which keyword marks reference type?",
    "question_hi": "रेफरेंस टाइप कौन सा होता है?",
    "options_en": ["class", "struct", "enum", "tuple"],
    "options_hi": ["class", "struct", "enum", "tuple"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which keyword enables concurrency safety?",
    "question_hi": "कनकरेंसी सेफ्टी के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which keyword defines main application?",
    "question_hi": "मेन एप्लिकेशन को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["@main", "@app", "@start", "@entry"],
    "options_hi": ["@main", "@app", "@start", "@entry"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which keyword handles optional chaining?",
    "question_hi": "ऑप्शनल चेनिंग के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which keyword unwraps optional safely?",
    "question_hi": "ऑप्शनल को सुरक्षित रूप से अनरैप करने के लिए क्या उपयोग होता है?",
    "options_en": ["if let", "!", "??", "as"],
    "options_hi": ["if let", "!", "??", "as"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which keyword performs type casting?",
    "question_hi": "टाइप कास्टिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["as", "is", "cast", "type"],
    "options_hi": ["as", "is", "cast", "type"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which keyword checks type?",
    "question_hi": "टाइप चेक करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["is", "as", "type", "check"],
    "options_hi": ["is", "as", "type", "check"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which keyword creates property wrapper?",
    "question_hi": "प्रॉपर्टी रैपर बनाने के लिए क्या उपयोग होता है?",
    "options_en": ["@propertyWrapper", "@wrapper", "@property", "@wrap"],
    "options_hi": ["@propertyWrapper", "@wrapper", "@property", "@wrap"],
    "answer_en": "@propertyWrapper",
    "answer_hi": "@propertyWrapper",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which keyword accesses wrapped value?",
    "question_hi": "रैप्ड वैल्यू एक्सेस करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    "options_en": ["wrappedValue", "value", "wrapped", "data"],
    "options_hi": ["wrappedValue", "value", "wrapped", "data"],
    "answer_en": "wrappedValue",
    "answer_hi": "wrappedValue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which keyword accesses projected value?",
    "question_hi": "प्रोजेक्टेड वैल्यू एक्सेस करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    "options_en": ["projectedValue", "wrappedValue", "value", "data"],
    "options_hi": ["projectedValue", "wrappedValue", "value", "data"],
    "answer_en": "projectedValue",
    "answer_hi": "projectedValue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which keyword defines result builder?",
    "question_hi": "रिज़ल्ट बिल्डर डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["@resultBuilder", "@builder", "@functionBuilder", "@compose"],
    "options_hi": ["@resultBuilder", "@builder", "@functionBuilder", "@compose"],
    "answer_en": "@resultBuilder",
    "answer_hi": "@resultBuilder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which keyword is used in SwiftUI app entry?",
    "question_hi": "SwiftUI ऐप एंट्री के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["App", "Scene", "View", "Main"],
    "options_hi": ["App", "Scene", "View", "Main"],
    "answer_en": "App",
    "answer_hi": "App",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyword prevents subclassing?",
    "question_hi": "सबक्लासिंग रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
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