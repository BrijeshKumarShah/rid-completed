const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to define a constant in Swift?",
    "question_hi": "Swift में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Swift keyword is used to define a variable?",
    "question_hi": "Swift में वेरिएबल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["var", "let", "define", "mutable"],
    "options_hi": ["var", "let", "define", "mutable"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which symbol is used for type annotation?",
    "question_hi": "टाइप एनोटेशन के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "=", "->", "::"],
    "options_hi": [":", "=", "->", "::"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift type stores key-value pairs?",
    "question_hi": "कौन सा Swift टाइप key-value pairs स्टोर करता है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to create an enumeration?",
    "question_hi": "Enumeration बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["enum", "struct", "class", "case"],
    "options_hi": ["enum", "struct", "class", "case"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to define a structure?",
    "question_hi": "Structure डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["struct", "class", "object", "record"],
    "options_hi": ["struct", "class", "object", "record"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Swift type is value type?",
    "question_hi": "कौन सा Swift टाइप value type होता है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "Class डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift feature allows inheritance?",
    "question_hi": "Inheritance की अनुमति कौन सा Swift फीचर देता है?",
    "options_en": ["Class", "Struct", "Enum", "Tuple"],
    "options_hi": ["Class", "Struct", "Enum", "Tuple"],
    "answer_en": "Class",
    "answer_hi": "Class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which access level allows access within same module?",
    "question_hi": "कौन सा एक्सेस लेवल उसी मॉड्यूल के अंदर एक्सेस देता है?",
    "options_en": ["internal", "private", "public", "fileprivate"],
    "options_hi": ["internal", "private", "public", "fileprivate"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to handle optional safely?",
    "question_hi": "ऑप्शनल को सुरक्षित रूप से हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["if let", "unwrap", "force", "safe"],
    "options_hi": ["if let", "unwrap", "force", "safe"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator force unwraps an optional?",
    "question_hi": "कौन सा ऑपरेटर ऑप्शनल को फोर्स अनरैप करता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator checks for nil value?",
    "question_hi": "nil वैल्यू चेक करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["??", "!", "==", "?"],
    "options_hi": ["??", "!", "==", "?"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift loop repeats until condition is false?",
    "question_hi": "कौन सा Swift लूप तब तक चलता है जब तक कंडीशन false न हो जाए?",
    "options_en": ["while", "for", "repeat", "loop"],
    "options_hi": ["while", "for", "repeat", "loop"],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार चलता है?",
    "options_en": ["repeat-while", "while", "for", "foreach"],
    "options_hi": ["repeat-while", "while", "for", "foreach"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword exits a loop immediately?",
    "question_hi": "लूप को तुरंत बाहर निकालने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["break", "stop", "exit", "return"],
    "options_hi": ["break", "stop", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "करंट iteration स्किप करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["continue", "skip", "next", "pass"],
    "options_hi": ["continue", "skip", "next", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword defines a function?",
    "question_hi": "फ़ंक्शन डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["func", "function", "def", "method"],
    "options_hi": ["func", "function", "def", "method"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword allows function to throw errors?",
    "question_hi": "फ़ंक्शन को एरर थ्रो करने की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["throws", "throw", "error", "catch"],
    "options_hi": ["throws", "throw", "error", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to throw an error?",
    "question_hi": "एरर थ्रो करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["throw", "throws", "error", "raise"],
    "options_hi": ["throw", "throws", "error", "raise"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which protocol is required for error handling?",
    "question_hi": "एरर हैंडलिंग के लिए कौन सा प्रोटोकॉल आवश्यक है?",
    "options_en": ["Error", "Exception", "Throwable", "Fault"],
    "options_hi": ["Error", "Exception", "Throwable", "Fault"],
    "answer_en": "Error",
    "answer_hi": "Error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword defines a protocol?",
    "question_hi": "Protocol डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["protocol", "interface", "implements", "extends"],
    "options_hi": ["protocol", "interface", "implements", "extends"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used to conform to a protocol?",
    "question_hi": "Protocol को conform करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "->", "=", "::"],
    "options_hi": [":", "->", "=", "::"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword makes property read-only?",
    "question_hi": "कौन सा कीवर्ड प्रॉपर्टी को read-only बनाता है?",
    "options_en": ["let", "var", "static", "final"],
    "options_hi": ["let", "var", "static", "final"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword delays initialization?",
    "question_hi": "Initialization को डिले करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["lazy", "delay", "wait", "async"],
    "options_hi": ["lazy", "delay", "wait", "async"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Swift type represents no value?",
    "question_hi": "कोई वैल्यू न होने को कौन सा Swift टाइप दर्शाता है?",
    "options_en": ["Void", "Nil", "Empty", "None"],
    "options_hi": ["Void", "Nil", "Empty", "None"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword prevents inheritance?",
    "question_hi": "Inheritance रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "static", "sealed", "private"],
    "options_hi": ["final", "static", "sealed", "private"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword is used for default case in switch?",
    "question_hi": "switch में default केस के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["default", "else", "none", "case"],
    "options_hi": ["default", "else", "none", "case"],
    "answer_en": "default",
    "answer_hi": "default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword marks optional return?",
    "question_hi": "Optional return को कौन सा सिंबल मार्क करता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift feature supports asynchronous code?",
    "question_hi": "असिंक्रोनस कोड को कौन सा Swift फीचर सपोर्ट करता है?",
    "options_en": ["async/await", "thread", "queue", "parallel"],
    "options_hi": ["async/await", "thread", "queue", "parallel"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "async रिज़ल्ट के लिए कौन सा कीवर्ड इंतजार करता है?",
    "options_en": ["await", "wait", "sync", "hold"],
    "options_hi": ["await", "wait", "sync", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which type is thread-safe by default?",
    "question_hi": "कौन सा टाइप डिफ़ॉल्ट रूप से thread-safe होता है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword marks main thread execution?",
    "question_hi": "मेन थ्रेड execution को कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["@MainActor", "@UIThread", "@Main", "@Thread"],
    "options_hi": ["@MainActor", "@UIThread", "@Main", "@Thread"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword provides default protocol implementation?",
    "question_hi": "Protocol को default implementation कौन सा कीवर्ड देता है?",
    "options_en": ["extension", "override", "default", "expand"],
    "options_hi": ["extension", "override", "default", "expand"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword modifies struct properties?",
    "question_hi": "Struct प्रॉपर्टीज को मॉडिफाई करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["mutating", "modify", "change", "update"],
    "options_hi": ["mutating", "modify", "change", "update"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword allows value to escape function?",
    "question_hi": "कौन सा कीवर्ड वैल्यू को फ़ंक्शन से बाहर जाने देता है?",
    "options_en": ["escaping", "escape", "out", "return"],
    "options_hi": ["escaping", "escape", "out", "return"],
    "answer_en": "escaping",
    "answer_hi": "escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which operator combines optionals?",
    "question_hi": "कौन सा ऑपरेटर optionals को combine करता है?",
    "options_en": ["??", "!", "?", "&"],
    "options_hi": ["??", "!", "?", "&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method removes nil values?",
    "question_hi": "nil वैल्यू हटाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["compactMap", "map", "filter", "reduce"],
    "options_hi": ["compactMap", "map", "filter", "reduce"],
    "answer_en": "compactMap",
    "answer_hi": "compactMap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method flattens nested collections?",
    "question_hi": "नेस्टेड कलेक्शन को फ्लैटन करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["flatMap", "map", "reduce", "filter"],
    "options_hi": ["flatMap", "map", "reduce", "filter"],
    "answer_en": "flatMap",
    "answer_hi": "flatMap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which protocol allows comparison?",
    "question_hi": "तुलना की अनुमति कौन सा प्रोटोकॉल देता है?",
    "options_en": ["Comparable", "Equatable", "Sortable", "Orderable"],
    "options_hi": ["Comparable", "Equatable", "Sortable", "Orderable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which protocol checks equality?",
    "question_hi": "बराबरी चेक करने के लिए कौन सा प्रोटोकॉल उपयोग होता है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Iterable"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Iterable"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which protocol allows dictionary keys?",
    "question_hi": "डिक्शनरी keys के लिए कौन सा प्रोटोकॉल आवश्यक है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which protocol supports encoding and decoding?",
    "question_hi": "Encoding और decoding को कौन सा प्रोटोकॉल सपोर्ट करता है?",
    "options_en": ["Codable", "Serializable", "Archivable", "Storable"],
    "options_hi": ["Codable", "Serializable", "Archivable", "Storable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword defines a type alias?",
    "question_hi": "Type alias डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["typealias", "alias", "typedef", "rename"],
    "options_hi": ["typealias", "alias", "typedef", "rename"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword defines generic constraint?",
    "question_hi": "Generic constraint डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["where", "limit", "constraint", "extends"],
    "options_hi": ["where", "limit", "constraint", "extends"],
    "answer_en": "where",
    "answer_hi": "where",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword ignores unused return value?",
    "question_hi": "Unused return value को ignore करने के लिए कौन सा एट्रिब्यूट उपयोग होता है?",
    "options_en": ["@discardableResult", "@ignoreResult", "@unused", "@skip"],
    "options_hi": ["@discardableResult", "@ignoreResult", "@unused", "@skip"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword observes property change?",
    "question_hi": "प्रॉपर्टी चेंज को observe करने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["didSet", "willSet", "observe", "watch"],
    "options_hi": ["didSet", "willSet", "observe", "watch"],
    "answer_en": "didSet",
    "answer_hi": "didSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which observer is called before change?",
    "question_hi": "वैल्यू चेंज से पहले कौन सा observer कॉल होता है?",
    "options_en": ["willSet", "didSet", "beforeSet", "observe"],
    "options_hi": ["willSet", "didSet", "beforeSet", "observe"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword returns from function?",
    "question_hi": "फ़ंक्शन से वैल्यू लौटाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["return", "yield", "send", "give"],
    "options_hi": ["return", "yield", "send", "give"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword stops program execution in debug?",
    "question_hi": "डिबग मोड में प्रोग्राम रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["fatalError", "stop", "exit", "abort"],
    "options_hi": ["fatalError", "stop", "exit", "abort"],
    "answer_en": "fatalError",
    "answer_hi": "fatalError",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which Swift file extension is used?",
    "question_hi": "Swift फाइल की extension क्या होती है?",
    "options_en": [".swift", ".sw", ".ios", ".code"],
    "options_hi": [".swift", ".sw", ".ios", ".code"],
    "answer_en": ".swift",
    "answer_hi": ".swift",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which framework is core for iOS UI?",
    "question_hi": "iOS UI के लिए कौन सा फ्रेमवर्क मुख्य है?",
    "options_en": ["UIKit", "Foundation", "CoreData", "SwiftUI"],
    "options_hi": ["UIKit", "Foundation", "CoreData", "SwiftUI"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which framework is declarative UI?",
    "question_hi": "Declarative UI के लिए कौन सा फ्रेमवर्क उपयोग होता है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "CoreUI"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which keyword defines initializer?",
    "question_hi": "Initializer डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["init", "new", "create", "start"],
    "options_hi": ["init", "new", "create", "start"],
    "answer_en": "init",
    "answer_hi": "init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which keyword deinitializes class?",
    "question_hi": "Class को deinitialize करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["deinit", "destroy", "finalize", "release"],
    "options_hi": ["deinit", "destroy", "finalize", "release"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which keyword avoids retain cycle?",
    "question_hi": "Retain cycle से बचने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["weak", "strong", "unowned", "static"],
    "options_hi": ["weak", "strong", "unowned", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which reference does not increase retain count?",
    "question_hi": "कौन सा रेफरेंस retain count नहीं बढ़ाता?",
    "options_en": ["weak", "strong", "owned", "shared"],
    "options_hi": ["weak", "strong", "owned", "shared"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which keyword allows implicit unwrap?",
    "question_hi": "Implicit unwrap के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which type stores unique values?",
    "question_hi": "कौन सा टाइप यूनिक वैल्यू स्टोर करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which collection is ordered?",
    "question_hi": "कौन सा कलेक्शन ordered होता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which keyword creates infinite loop?",
    "question_hi": "Infinite loop बनाने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["while true", "for", "repeat", "loop"],
    "options_hi": ["while true", "for", "repeat", "loop"],
    "answer_en": "while true",
    "answer_hi": "while true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which keyword checks condition?",
    "question_hi": "Condition चेक करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["if", "check", "when", "case"],
    "options_hi": ["if", "check", "when", "case"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which keyword provides alternative condition?",
    "question_hi": "Alternative condition के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["else", "elseif", "otherwise", "default"],
    "options_hi": ["else", "elseif", "otherwise", "default"],
    "answer_en": "else",
    "answer_hi": "else",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which keyword matches multiple conditions?",
    "question_hi": "Multiple conditions मैच करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "match"],
    "options_hi": ["switch", "if", "guard", "match"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which keyword exits early from function?",
    "question_hi": "फ़ंक्शन से जल्दी बाहर निकलने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["guard", "break", "stop", "exit"],
    "options_hi": ["guard", "break", "stop", "exit"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which keyword unwraps optional safely?",
    "question_hi": "Optional को सुरक्षित रूप से unwrap करने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["guard let", "force", "unwrap", "cast"],
    "options_hi": ["guard let", "force", "unwrap", "cast"],
    "answer_en": "guard let",
    "answer_hi": "guard let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which operator checks type casting?",
    "question_hi": "Type casting चेक करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["is", "as", "==", "::"],
    "options_hi": ["is", "as", "==", "::"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which operator performs type casting?",
    "question_hi": "Type casting करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["as", "is", "cast", "type"],
    "options_hi": ["as", "is", "cast", "type"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword handles multiple values?",
    "question_hi": "Multiple values हैंडल करने के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["Tuple", "Array", "Set", "Dictionary"],
    "options_hi": ["Tuple", "Array", "Set", "Dictionary"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which Swift feature allows pattern matching?",
    "question_hi": "Pattern matching के लिए कौन सा Swift फीचर उपयोग होता है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which keyword repeats code fixed times?",
    "question_hi": "निश्चित बार कोड रिपीट करने के लिए कौन सा लूप उपयोग होता है?",
    "options_en": ["for-in", "while", "repeat", "loop"],
    "options_hi": ["for-in", "while", "repeat", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which keyword imports module?",
    "question_hi": "मॉड्यूल इम्पोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["import", "include", "require", "load"],
    "options_hi": ["import", "include", "require", "load"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which module provides basic Swift features?",
    "question_hi": "बेसिक Swift फीचर्स कौन सा मॉड्यूल देता है?",
    "options_en": ["Foundation", "UIKit", "CoreData", "SwiftUI"],
    "options_hi": ["Foundation", "UIKit", "CoreData", "SwiftUI"],
    "answer_en": "Foundation",
    "answer_hi": "Foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which keyword defines static property?",
    "question_hi": "Static प्रॉपर्टी डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["static", "class", "global", "fixed"],
    "options_hi": ["static", "class", "global", "fixed"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which keyword overrides superclass method?",
    "question_hi": "Superclass मेथड को override करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["override", "replace", "extend", "update"],
    "options_hi": ["override", "replace", "extend", "update"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which keyword creates singleton?",
    "question_hi": "Singleton बनाने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["static let", "init", "private", "shared"],
    "options_hi": ["static let", "init", "private", "shared"],
    "answer_en": "static let",
    "answer_hi": "static let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which keyword restricts access within file?",
    "question_hi": "फाइल के अंदर एक्सेस सीमित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which keyword restricts access within scope?",
    "question_hi": "स्कोप के अंदर एक्सेस सीमित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which access level allows everywhere?",
    "question_hi": "हर जगह एक्सेस देने वाला एक्सेस लेवल कौन सा है?",
    "options_en": ["public", "internal", "private", "fileprivate"],
    "options_hi": ["public", "internal", "private", "fileprivate"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which keyword handles concurrency safety?",
    "question_hi": "Concurrency safety को कौन सा फीचर हैंडल करता है?",
    "options_en": ["Actor", "Thread", "Queue", "Lock"],
    "options_hi": ["Actor", "Thread", "Queue", "Lock"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which attribute disables isolation?",
    "question_hi": "Isolation को disable करने के लिए कौन सा एट्रिब्यूट उपयोग होता है?",
    "options_en": ["nonisolated", "isolated", "unsafe", "unchecked"],
    "options_hi": ["nonisolated", "isolated", "unsafe", "unchecked"],
    "answer_en": "nonisolated",
    "answer_hi": "nonisolated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword ensures actor isolation?",
    "question_hi": "Actor isolation सुनिश्चित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["isolated", "nonisolated", "safe", "atomic"],
    "options_hi": ["isolated", "nonisolated", "safe", "atomic"],
    "answer_en": "isolated",
    "answer_hi": "isolated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which attribute suppresses Sendable warning?",
    "question_hi": "Sendable warning को suppress करने के लिए कौन सा एट्रिब्यूट उपयोग होता है?",
    "options_en": ["@unchecked Sendable", "@Sendable", "@safe", "@atomic"],
    "options_hi": ["@unchecked Sendable", "@Sendable", "@safe", "@atomic"],
    "answer_en": "@unchecked Sendable",
    "answer_hi": "@unchecked Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which protocol allows iteration?",
    "question_hi": "Iteration की अनुमति कौन सा प्रोटोकॉल देता है?",
    "options_en": ["Sequence", "Iterable", "Iterator", "Loopable"],
    "options_hi": ["Sequence", "Iterable", "Iterator", "Loopable"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which protocol provides iterator?",
    "question_hi": "Iterator प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["IteratorProtocol", "Sequence", "Iterable", "Enumerator"],
    "options_hi": ["IteratorProtocol", "Sequence", "Iterable", "Enumerator"],
    "answer_en": "IteratorProtocol",
    "answer_hi": "IteratorProtocol",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which keyword creates computed property?",
    "question_hi": "Computed property बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["get", "compute", "calc", "value"],
    "options_hi": ["get", "compute", "calc", "value"],
    "answer_en": "get",
    "answer_hi": "get",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which keyword sets computed property?",
    "question_hi": "Computed property सेट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["set", "put", "assign", "update"],
    "options_hi": ["set", "put", "assign", "update"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which keyword delays execution until scope exit?",
    "question_hi": "स्कोप exit होने तक execution डिले करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["defer", "delay", "wait", "postpone"],
    "options_hi": ["defer", "delay", "wait", "postpone"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which keyword converts value type to reference?",
    "question_hi": "Value type को reference में बदलने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["inout", "ref", "pointer", "link"],
    "options_hi": ["inout", "ref", "pointer", "link"],
    "answer_en": "inout",
    "answer_hi": "inout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which keyword defines closure?",
    "question_hi": "Closure डिफाइन करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["{}", "()", "[]", "<>"],
    "options_hi": ["{}", "()", "[]", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which keyword shortens closure syntax?",
    "question_hi": "Closure सिंटैक्स को छोटा करने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["$0", "self", "arg", "value"],
    "options_hi": ["$0", "self", "arg", "value"],
    "answer_en": "$0",
    "answer_hi": "$0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which keyword references current instance?",
    "question_hi": "करंट instance को रेफर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["self", "this", "me", "current"],
    "options_hi": ["self", "this", "me", "current"],
    "answer_en": "self",
    "answer_hi": "self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which keyword defines optional type?",
    "question_hi": "Optional टाइप डिफाइन करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["?", "!", "??", "&"],
    "options_hi": ["?", "!", "??", "&"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which keyword converts optional to non-optional?",
    "question_hi": "Optional को non-optional में बदलने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["unwrap", "force unwrap", "cast", "bind"],
    "options_hi": ["unwrap", "force unwrap", "cast", "bind"],
    "answer_en": "force unwrap",
    "answer_hi": "force unwrap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which Swift feature improves performance?",
    "question_hi": "परफॉर्मेंस सुधारने के लिए कौन सा Swift फीचर उपयोग होता है?",
    "options_en": ["ARC", "GC", "Thread", "Cache"],
    "options_hi": ["ARC", "GC", "Thread", "Cache"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which memory management system Swift uses?",
    "question_hi": "Swift कौन सा मेमोरी मैनेजमेंट सिस्टम उपयोग करता है?",
    "options_en": ["ARC", "GC", "Manual", "Hybrid"],
    "options_hi": ["ARC", "GC", "Manual", "Hybrid"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which keyword marks result as opaque?",
    "question_hi": "Opaque result मार्क करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["some", "any", "opaque", "hidden"],
    "options_hi": ["some", "any", "opaque", "hidden"],
    "answer_en": "some",
    "answer_hi": "some",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which keyword represents protocol type?",
    "question_hi": "Protocol टाइप को रेप्रेजेंट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["any", "some", "protocol", "type"],
    "options_hi": ["any", "some", "protocol", "type"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which keyword ensures thread safety?",
    "question_hi": "Thread safety सुनिश्चित करने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["Actor", "Queue", "Lock", "Thread"],
    "options_hi": ["Actor", "Queue", "Lock", "Thread"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyword stops execution with condition check?",
    "question_hi": "कंडीशन चेक के साथ execution रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["precondition", "assert", "fatalError", "stop"],
    "options_hi": ["precondition", "assert", "fatalError", "stop"],
    "answer_en": "precondition",
    "answer_hi": "precondition",
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