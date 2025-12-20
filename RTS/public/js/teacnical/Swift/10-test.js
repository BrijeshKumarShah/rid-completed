const questions =[
  {
    num: 1,
    question_en: "Which keyword is used to define a property wrapper in Swift?",
    question_hi: "Swift में प्रॉपर्टी रैपर डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["@propertyWrapper", "@wrapper", "@property", "@wrapped"],
    options_hi: ["@propertyWrapper", "@wrapper", "@property", "@wrapped"],
    answer_en: "@propertyWrapper",
    answer_hi: "@propertyWrapper",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property is mandatory inside a property wrapper?",
    question_hi: "प्रॉपर्टी रैपर के अंदर कौन सी प्रॉपर्टी अनिवार्य होती है?",
    options_en: ["wrappedValue", "projectedValue", "init()", "value"],
    options_hi: ["wrappedValue", "projectedValue", "init()", "value"],
    answer_en: "wrappedValue",
    answer_hi: "wrappedValue",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which protocol enables JSON decoding in Swift?",
    question_hi: "Swift में JSON डिकोडिंग को कौन सा प्रोटोकॉल एनेबल करता है?",
    options_en: ["Decodable", "Encodable", "Codable", "Serializable"],
    options_hi: ["Decodable", "Encodable", "Codable", "Serializable"],
    answer_en: "Decodable",
    answer_hi: "Decodable",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which protocol enables JSON encoding in Swift?",
    question_hi: "Swift में JSON एनकोडिंग को कौन सा प्रोटोकॉल एनेबल करता है?",
    options_en: ["Encodable", "Decodable", "Codable", "Serializable"],
    options_hi: ["Encodable", "Decodable", "Codable", "Serializable"],
    answer_en: "Encodable",
    answer_hi: "Encodable",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which type combines Encodable and Decodable?",
    question_hi: "Encodable और Decodable को कौन सा टाइप जोड़ता है?",
    options_en: ["Codable", "Serializable", "JSONType", "DataType"],
    options_hi: ["Codable", "Serializable", "JSONType", "DataType"],
    answer_en: "Codable",
    answer_hi: "Codable",
    attempted: false,
    selected: ""
  },

  /* ---------- BASICS ---------- */

  {
    num: 6,
    question_en: "Which keyword defines a constant in Swift?",
    question_hi: "Swift में constant डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["let", "var", "const", "static"],
    options_hi: ["let", "var", "const", "static"],
    answer_en: "let",
    answer_hi: "let",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which keyword defines a variable?",
    question_hi: "Variable डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["var", "let", "mutating", "change"],
    options_hi: ["var", "let", "mutating", "change"],
    answer_en: "var",
    answer_hi: "var",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which keyword defines a function?",
    question_hi: "Function डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["func", "function", "def", "fn"],
    options_hi: ["func", "function", "def", "fn"],
    answer_en: "func",
    answer_hi: "func",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which keyword defines a class?",
    question_hi: "Class डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["class", "struct", "enum", "object"],
    options_hi: ["class", "struct", "enum", "object"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which keyword defines a structure?",
    question_hi: "Structure डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["struct", "class", "enum", "object"],
    options_hi: ["struct", "class", "enum", "object"],
    answer_en: "struct",
    answer_hi: "struct",
    attempted: false,
    selected: ""
  },

  /* ---------- OPTIONLS ---------- */

  {
    num: 11,
    question_en: "Which symbol represents an optional?",
    question_hi: "Optional को कौन सा सिंबल दर्शाता है?",
    options_en: ["?", "!", "??", "&"],
    options_hi: ["?", "!", "??", "&"],
    answer_en: "?",
    answer_hi: "?",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which operator force unwraps an optional?",
    question_hi: "Optional को force unwrap कौन करता है?",
    options_en: ["!", "?", "??", "*"],
    options_hi: ["!", "?", "??", "*"],
    answer_en: "!",
    answer_hi: "!",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which operator provides a default value to an optional?",
    question_hi: "Optional को default value कौन देता है?",
    options_en: ["??", "?", "!", ":"],
    options_hi: ["??", "?", "!", ":"],
    answer_en: "??",
    answer_hi: "??",
    attempted: false,
    selected: ""
  },

  /* ---------- ERROR HANDLING ---------- */

  {
    num: 14,
    question_en: "Which keyword throws an error?",
    question_hi: "Error throw करने के लिए कौन सा कीवर्ड है?",
    options_en: ["throw", "throws", "try", "catch"],
    options_hi: ["throw", "throws", "try", "catch"],
    answer_en: "throw",
    answer_hi: "throw",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which keyword marks a function that can throw errors?",
    question_hi: "कौन सा कीवर्ड बताता है कि function error throw कर सकता है?",
    options_en: ["throws", "throw", "try", "catch"],
    options_hi: ["throws", "throw", "try", "catch"],
    answer_en: "throws",
    answer_hi: "throws",
    attempted: false,
    selected: ""
  },

  /* ---------- ASYNC / AWAIT ---------- */

  {
    num: 16,
    question_en: "Which keyword defines an async function?",
    question_hi: "Async function डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["async", "await", "throws", "defer"],
    options_hi: ["async", "await", "throws", "defer"],
    answer_en: "async",
    answer_hi: "async",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which keyword waits for async result?",
    question_hi: "Async result का इंतज़ार कौन करता है?",
    options_en: ["await", "async", "wait", "pause"],
    options_hi: ["await", "async", "wait", "pause"],
    answer_en: "await",
    answer_hi: "await",
    attempted: false,
    selected: ""
  },

  /* ---------- COLLECTIONS ---------- */

  {
    num: 18,
    question_en: "Which type represents an ordered collection?",
    question_hi: "Ordered collection कौन सा टाइप दर्शाता है?",
    options_en: ["Array", "Set", "Dictionary", "Tuple"],
    options_hi: ["Array", "Set", "Dictionary", "Tuple"],
    answer_en: "Array",
    answer_hi: "Array",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which collection stores unique values?",
    question_hi: "Unique values कौन सी collection स्टोर करती है?",
    options_en: ["Set", "Array", "Dictionary", "Tuple"],
    options_hi: ["Set", "Array", "Dictionary", "Tuple"],
    answer_en: "Set",
    answer_hi: "Set",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which collection stores key-value pairs?",
    question_hi: "Key-value pairs कौन सी collection स्टोर करती है?",
    options_en: ["Dictionary", "Array", "Set", "Tuple"],
    options_hi: ["Dictionary", "Array", "Set", "Tuple"],
    answer_en: "Dictionary",
    answer_hi: "Dictionary",
    attempted: false,
    selected: ""
  },

  /* ---------- TYPE ERASURE ---------- */

  {
    num: 21,
    question_en: "Which type erases a sequence?",
    question_hi: "Sequence को type erase कौन करता है?",
    options_en: ["AnySequence", "AnyCollection", "AnyIterator", "Sequence"],
    options_hi: ["AnySequence", "AnyCollection", "AnyIterator", "Sequence"],
    answer_en: "AnySequence",
    answer_hi: "AnySequence",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which type erases a collection?",
    question_hi: "Collection को type erase कौन करता है?",
    options_en: ["AnyCollection", "AnySequence", "AnyIterator", "Collection"],
    options_hi: ["AnyCollection", "AnySequence", "AnyIterator", "Collection"],
    answer_en: "AnyCollection",
    answer_hi: "AnyCollection",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which type erases an iterator?",
    question_hi: "Iterator को type erase कौन करता है?",
    options_en: ["AnyIterator", "AnySequence", "AnyCollection", "Iterator"],
    options_hi: ["AnyIterator", "AnySequence", "AnyCollection", "Iterator"],
    answer_en: "AnyIterator",
    answer_hi: "AnyIterator",
    attempted: false,
    selected: ""
  },

  /* ---------- SWIFTUI ---------- */

  {
    num: 24,
    question_en: "Which type erases a SwiftUI view?",
    question_hi: "SwiftUI view को type erase कौन करता है?",
    options_en: ["AnyView", "View", "UIAnyView", "EraseView"],
    options_hi: ["AnyView", "View", "UIAnyView", "EraseView"],
    answer_en: "AnyView",
    answer_hi: "AnyView",
    attempted: false,
    selected: ""
  },

  /* ---------- OOPS ---------- */

  {
    num: 25,
    question_en: "Which keyword allows method overriding?",
    question_hi: "Method override करने के लिए कौन सा कीवर्ड है?",
    options_en: ["override", "final", "static", "mutating"],
    options_hi: ["override", "final", "static", "mutating"],
    answer_en: "override",
    answer_hi: "override",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which access level is the most restrictive in Swift?",
    question_hi: "Swift में सबसे ज़्यादा restrictive access level कौन सा है?",
    options_en: ["private", "fileprivate", "internal", "public"],
    options_hi: ["private", "fileprivate", "internal", "public"],
    answer_en: "private",
    answer_hi: "private",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which access level is default in Swift?",
    question_hi: "Swift में default access level कौन सा होता है?",
    options_en: ["internal", "private", "public", "fileprivate"],
    options_hi: ["internal", "private", "public", "fileprivate"],
    answer_en: "internal",
    answer_hi: "internal",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which keyword prevents a class from being subclassed?",
    question_hi: "क्लास को subclass होने से रोकने वाला कीवर्ड कौन सा है?",
    options_en: ["final", "static", "sealed", "private"],
    options_hi: ["final", "static", "sealed", "private"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which keyword is used to conform to a protocol?",
    question_hi: "किसी protocol को conform करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: [":", "implements", "extends", "conform"],
    options_hi: [":", "implements", "extends", "conform"],
    answer_en: ":",
    answer_hi: ":",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which protocol allows comparison using < operator?",
    question_hi: "< operator से comparison के लिए कौन सा protocol है?",
    options_en: ["Comparable", "Equatable", "Hashable", "Codable"],
    options_hi: ["Comparable", "Equatable", "Hashable", "Codable"],
    answer_en: "Comparable",
    answer_hi: "Comparable",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which protocol checks equality using == ?",
    question_hi: "== से equality check कौन सा protocol करता है?",
    options_en: ["Equatable", "Comparable", "Hashable", "Identifiable"],
    options_hi: ["Equatable", "Comparable", "Hashable", "Identifiable"],
    answer_en: "Equatable",
    answer_hi: "Equatable",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which protocol is required for using Set?",
    question_hi: "Set उपयोग करने के लिए कौन सा protocol जरूरी है?",
    options_en: ["Hashable", "Comparable", "Equatable", "Codable"],
    options_hi: ["Hashable", "Comparable", "Equatable", "Codable"],
    answer_en: "Hashable",
    answer_hi: "Hashable",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which keyword is used to define an enum?",
    question_hi: "Enum डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["enum", "case", "struct", "class"],
    options_hi: ["enum", "case", "struct", "class"],
    answer_en: "enum",
    answer_hi: "enum",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which enum can have associated values?",
    question_hi: "कौन सा enum associated values रख सकता है?",
    options_en: ["Swift enum", "Objective-C enum", "Raw enum", "Static enum"],
    options_hi: ["Swift enum", "Objective-C enum", "Raw enum", "Static enum"],
    answer_en: "Swift enum",
    answer_hi: "Swift enum",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which keyword is used for pattern matching?",
    question_hi: "Pattern matching के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["switch", "if", "guard", "match"],
    options_hi: ["switch", "if", "guard", "match"],
    answer_en: "switch",
    answer_hi: "switch",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which loop is best when number of iterations is unknown?",
    question_hi: "जब iterations की संख्या पता न हो तो कौन सा loop बेहतर है?",
    options_en: ["while", "for", "repeat", "map"],
    options_hi: ["while", "for", "repeat", "map"],
    answer_en: "while",
    answer_hi: "while",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which loop executes at least once?",
    question_hi: "कौन सा loop कम से कम एक बार चलता है?",
    options_en: ["repeat-while", "while", "for", "foreach"],
    options_hi: ["repeat-while", "while", "for", "foreach"],
    answer_en: "repeat-while",
    answer_hi: "repeat-while",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which keyword is used to exit a loop?",
    question_hi: "Loop से बाहर निकलने के लिए कौन सा कीवर्ड है?",
    options_en: ["break", "continue", "return", "exit"],
    options_hi: ["break", "continue", "return", "exit"],
    answer_en: "break",
    answer_hi: "break",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which keyword skips current iteration?",
    question_hi: "Current iteration skip करने के लिए कौन सा कीवर्ड है?",
    options_en: ["continue", "break", "return", "pass"],
    options_hi: ["continue", "break", "return", "pass"],
    answer_en: "continue",
    answer_hi: "continue",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which feature automatically manages memory in Swift?",
    question_hi: "Swift में memory automatically कौन manage करता है?",
    options_en: ["ARC", "GC", "Manual", "Allocator"],
    options_hi: ["ARC", "GC", "Manual", "Allocator"],
    answer_en: "ARC",
    answer_hi: "ARC",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which reference causes memory leak?",
    question_hi: "कौन सा reference memory leak करता है?",
    options_en: ["Strong reference cycle", "Weak reference", "Unowned reference", "Local reference"],
    options_hi: ["Strong reference cycle", "Weak reference", "Unowned reference", "Local reference"],
    answer_en: "Strong reference cycle",
    answer_hi: "Strong reference cycle",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which keyword avoids strong reference cycles?",
    question_hi: "Strong reference cycle से बचने के लिए कौन सा कीवर्ड है?",
    options_en: ["weak", "strong", "lazy", "static"],
    options_hi: ["weak", "strong", "lazy", "static"],
    answer_en: "weak",
    answer_hi: "weak",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which reference is non-optional?",
    question_hi: "कौन सा reference non-optional होता है?",
    options_en: ["unowned", "weak", "strong", "lazy"],
    options_hi: ["unowned", "weak", "strong", "lazy"],
    answer_en: "unowned",
    answer_hi: "unowned",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which keyword delays initialization?",
    question_hi: "Initialization को delay करने के लिए कौन सा कीवर्ड है?",
    options_en: ["lazy", "weak", "init", "defer"],
    options_hi: ["lazy", "weak", "init", "defer"],
    answer_en: "lazy",
    answer_hi: "lazy",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which keyword executes code at scope exit?",
    question_hi: "Scope exit पर code execute करने वाला कीवर्ड कौन सा है?",
    options_en: ["defer", "finally", "exit", "cleanup"],
    options_hi: ["defer", "finally", "exit", "cleanup"],
    answer_en: "defer",
    answer_hi: "defer",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which concurrency model does Swift use?",
    question_hi: "Swift कौन सा concurrency model उपयोग करता है?",
    options_en: ["Structured concurrency", "Thread based", "Callback only", "Promise based"],
    options_hi: ["Structured concurrency", "Thread based", "Callback only", "Promise based"],
    answer_en: "Structured concurrency",
    answer_hi: "Structured concurrency",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which keyword defines an actor?",
    question_hi: "Actor डिफाइन करने के लिए कौन सा कीवर्ड है?",
    options_en: ["actor", "class", "struct", "object"],
    options_hi: ["actor", "class", "struct", "object"],
    answer_en: "actor",
    answer_hi: "actor",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which actor ensures thread safety?",
    question_hi: "Thread safety कौन ensure करता है?",
    options_en: ["Actor", "Class", "Struct", "Enum"],
    options_hi: ["Actor", "Class", "Struct", "Enum"],
    answer_en: "Actor",
    answer_hi: "Actor",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which keyword marks main thread execution?",
    question_hi: "Main thread execution के लिए कौन सा attribute है?",
    options_en: ["@MainActor", "@Actor", "@Thread", "@Main"],
    options_hi: ["@MainActor", "@Actor", "@Thread", "@Main"],
    answer_en: "@MainActor",
    answer_hi: "@MainActor",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which tool is used to manage dependencies in Swift?",
    question_hi: "Swift में dependency manage करने के लिए कौन सा tool है?",
    options_en: ["Swift Package Manager", "CocoaPods", "Carthage", "All of these"],
    options_hi: ["Swift Package Manager", "CocoaPods", "Carthage", "ये सभी"],
    answer_en: "All of these",
    answer_hi: "ये सभी",
    attempted: false,
    selected: ""
  },  {
    num: 51,
    question_en: "Which Swift keyword is used to handle errors?",
    question_hi: "Swift में errors handle करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["do-catch", "try-catch", "catch", "handle"],
    options_hi: ["do-catch", "try-catch", "catch", "handle"],
    answer_en: "do-catch",
    answer_hi: "do-catch",
    attempted: false,
    selected: ""
  },
  {
    num: 52,
    question_en: "Which keyword is used to throw an error in Swift?",
    question_hi: "Swift में error throw करने के लिए कौन सा keyword है?",
    options_en: ["throw", "throws", "error", "raise"],
    options_hi: ["throw", "throws", "error", "raise"],
    answer_en: "throw",
    answer_hi: "throw",
    attempted: false,
    selected: ""
  },
  {
    num: 53,
    question_en: "Which keyword marks a function that can throw errors?",
    question_hi: "Error throw करने वाले function को mark करने के लिए कौन सा keyword है?",
    options_en: ["throws", "throw", "try", "catch"],
    options_hi: ["throws", "throw", "try", "catch"],
    answer_en: "throws",
    answer_hi: "throws",
    attempted: false,
    selected: ""
  },
  {
    num: 54,
    question_en: "Which keyword is used to call a throwing function?",
    question_hi: "Throwing function call करने के लिए कौन सा keyword है?",
    options_en: ["try", "throw", "catch", "do"],
    options_hi: ["try", "throw", "catch", "do"],
    answer_en: "try",
    answer_hi: "try",
    attempted: false,
    selected: ""
  },
  {
    num: 55,
    question_en: "Which type represents absence of value?",
    question_hi: "Value की absence को कौन सा type represent करता है?",
    options_en: ["Optional", "Nil", "Void", "None"],
    options_hi: ["Optional", "Nil", "Void", "None"],
    answer_en: "Optional",
    answer_hi: "Optional",
    attempted: false,
    selected: ""
  },
  {
    num: 56,
    question_en: "Which symbol is used for optional unwrapping?",
    question_hi: "Optional unwrapping के लिए कौन सा symbol उपयोग होता है?",
    options_en: ["!", "?", "??", "&"],
    options_hi: ["!", "?", "??", "&"],
    answer_en: "!",
    answer_hi: "!",
    attempted: false,
    selected: ""
  },
  {
    num: 57,
    question_en: "Which operator provides default value for optional?",
    question_hi: "Optional के लिए default value कौन सा operator देता है?",
    options_en: ["??", "!", "?", ":"],
    options_hi: ["??", "!", "?", ":"],
    answer_en: "??",
    answer_hi: "??",
    attempted: false,
    selected: ""
  },
  {
    num: 58,
    question_en: "Which statement safely unwraps optional?",
    question_hi: "Optional को safely unwrap करने के लिए कौन सा statement है?",
    options_en: ["if let", "unwrap", "guard", "switch"],
    options_hi: ["if let", "unwrap", "guard", "switch"],
    answer_en: "if let",
    answer_hi: "if let",
    attempted: false,
    selected: ""
  },
  {
    num: 59,
    question_en: "Which statement exits scope if condition fails?",
    question_hi: "Condition fail होने पर scope exit करने वाला statement कौन सा है?",
    options_en: ["guard", "if", "switch", "break"],
    options_hi: ["guard", "if", "switch", "break"],
    answer_en: "guard",
    answer_hi: "guard",
    attempted: false,
    selected: ""
  },
  {
    num: 60,
    question_en: "Which keyword defines a constant?",
    question_hi: "Constant define करने के लिए कौन सा keyword है?",
    options_en: ["let", "var", "const", "static"],
    options_hi: ["let", "var", "const", "static"],
    answer_en: "let",
    answer_hi: "let",
    attempted: false,
    selected: ""
  },
  {
    num: 61,
    question_en: "Which keyword defines a variable?",
    question_hi: "Variable define करने के लिए कौन सा keyword है?",
    options_en: ["var", "let", "mutable", "change"],
    options_hi: ["var", "let", "mutable", "change"],
    answer_en: "var",
    answer_hi: "var",
    attempted: false,
    selected: ""
  },
  {
    num: 62,
    question_en: "Which collection stores unique values?",
    question_hi: "Unique values store करने वाला collection कौन सा है?",
    options_en: ["Set", "Array", "Dictionary", "List"],
    options_hi: ["Set", "Array", "Dictionary", "List"],
    answer_en: "Set",
    answer_hi: "Set",
    attempted: false,
    selected: ""
  },
  {
    num: 63,
    question_en: "Which collection stores key-value pairs?",
    question_hi: "Key-value pairs store करने वाला collection कौन सा है?",
    options_en: ["Dictionary", "Array", "Set", "Tuple"],
    options_hi: ["Dictionary", "Array", "Set", "Tuple"],
    answer_en: "Dictionary",
    answer_hi: "Dictionary",
    attempted: false,
    selected: ""
  },
  {
    num: 64,
    question_en: "Which collection allows duplicate values?",
    question_hi: "Duplicate values allow करने वाला collection कौन सा है?",
    options_en: ["Array", "Set", "Dictionary", "Map"],
    options_hi: ["Array", "Set", "Dictionary", "Map"],
    answer_en: "Array",
    answer_hi: "Array",
    attempted: false,
    selected: ""
  },
  {
    num: 65,
    question_en: "Which loop is used to iterate collection?",
    question_hi: "Collection iterate करने के लिए कौन सा loop है?",
    options_en: ["for-in", "while", "repeat", "loop"],
    options_hi: ["for-in", "while", "repeat", "loop"],
    answer_en: "for-in",
    answer_hi: "for-in",
    attempted: false,
    selected: ""
  },
  {
    num: 66,
    question_en: "Which keyword creates a closure?",
    question_hi: "Closure बनाने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["{}", "func", "closure", "lambda"],
    options_hi: ["{}", "func", "closure", "lambda"],
    answer_en: "{}",
    answer_hi: "{}",
    attempted: false,
    selected: ""
  },
  {
    num: 67,
    question_en: "Which symbol separates parameters and return type in closure?",
    question_hi: "Closure में parameters और return type को कौन सा symbol separate करता है?",
    options_en: ["->", "=>", ":", "="],
    options_hi: ["->", "=>", ":", "="],
    answer_en: "->",
    answer_hi: "->",
    attempted: false,
    selected: ""
  },
  {
    num: 68,
    question_en: "Which keyword captures self weakly in closure?",
    question_hi: "Closure में self को weakly capture करने के लिए कौन सा keyword है?",
    options_en: ["[weak self]", "[unowned self]", "[self]", "[lazy self]"],
    options_hi: ["[weak self]", "[unowned self]", "[self]", "[lazy self]"],
    answer_en: "[weak self]",
    answer_hi: "[weak self]",
    attempted: false,
    selected: ""
  },
  {
    num: 69,
    question_en: "Which Swift feature allows multiple inheritance?",
    question_hi: "Swift में multiple inheritance किस feature से possible है?",
    options_en: ["Protocol", "Class", "Struct", "Enum"],
    options_hi: ["Protocol", "Class", "Struct", "Enum"],
    answer_en: "Protocol",
    answer_hi: "Protocol",
    attempted: false,
    selected: ""
  },
  {
    num: 70,
    question_en: "Which keyword defines protocol?",
    question_hi: "Protocol define करने के लिए कौन सा keyword है?",
    options_en: ["protocol", "interface", "abstract", "implements"],
    options_hi: ["protocol", "interface", "abstract", "implements"],
    answer_en: "protocol",
    answer_hi: "protocol",
    attempted: false,
    selected: ""
  },
  {
    num: 71,
    question_en: "Which SwiftUI view stacks items vertically?",
    question_hi: "SwiftUI में vertically items stack करने वाला view कौन सा है?",
    options_en: ["VStack", "HStack", "ZStack", "List"],
    options_hi: ["VStack", "HStack", "ZStack", "List"],
    answer_en: "VStack",
    answer_hi: "VStack",
    attempted: false,
    selected: ""
  },
  {
    num: 72,
    question_en: "Which SwiftUI view stacks items horizontally?",
    question_hi: "SwiftUI में horizontally items stack करने वाला view कौन सा है?",
    options_en: ["HStack", "VStack", "ZStack", "Grid"],
    options_hi: ["HStack", "VStack", "ZStack", "Grid"],
    answer_en: "HStack",
    answer_hi: "HStack",
    attempted: false,
    selected: ""
  },
  {
    num: 73,
    question_en: "Which SwiftUI view overlays items?",
    question_hi: "SwiftUI में items overlay करने वाला view कौन सा है?",
    options_en: ["ZStack", "VStack", "HStack", "Overlay"],
    options_hi: ["ZStack", "VStack", "HStack", "Overlay"],
    answer_en: "ZStack",
    answer_hi: "ZStack",
    attempted: false,
    selected: ""
  },
  {
    num: 74,
    question_en: "Which property wrapper is used for state?",
    question_hi: "State manage करने के लिए कौन सा property wrapper है?",
    options_en: ["@State", "@Binding", "@ObservedObject", "@Environment"],
    options_hi: ["@State", "@Binding", "@ObservedObject", "@Environment"],
    answer_en: "@State",
    answer_hi: "@State",
    attempted: false,
    selected: ""
  },
  {
    num: 75,
    question_en: "Which property wrapper passes data between views?",
    question_hi: "Views के बीच data pass करने के लिए कौन सा property wrapper है?",
    options_en: ["@Binding", "@State", "@Environment", "@Published"],
    options_hi: ["@Binding", "@State", "@Environment", "@Published"],
    answer_en: "@Binding",
    answer_hi: "@Binding",
    attempted: false,
    selected: ""
  },
  {
    num: 76,
    question_en: "Which property wrapper observes class changes?",
    question_hi: "Class changes observe करने के लिए कौन सा wrapper है?",
    options_en: ["@ObservedObject", "@State", "@Binding", "@Environment"],
    options_hi: ["@ObservedObject", "@State", "@Binding", "@Environment"],
    answer_en: "@ObservedObject",
    answer_hi: "@ObservedObject",
    attempted: false,
    selected: ""
  },
  {
    num: 77,
    question_en: "Which property wrapper publishes changes?",
    question_hi: "Changes publish करने के लिए कौन सा wrapper है?",
    options_en: ["@Published", "@State", "@Binding", "@ObservedObject"],
    options_hi: ["@Published", "@State", "@Binding", "@ObservedObject"],
    answer_en: "@Published",
    answer_hi: "@Published",
    attempted: false,
    selected: ""
  },
  {
    num: 78,
    question_en: "Which keyword defines async function?",
    question_hi: "Async function define करने के लिए कौन सा keyword है?",
    options_en: ["async", "await", "thread", "background"],
    options_hi: ["async", "await", "thread", "background"],
    answer_en: "async",
    answer_hi: "async",
    attempted: false,
    selected: ""
  },
  {
    num: 79,
    question_en: "Which keyword waits for async result?",
    question_hi: "Async result का wait करने के लिए कौन सा keyword है?",
    options_en: ["await", "async", "wait", "pause"],
    options_hi: ["await", "async", "wait", "pause"],
    answer_en: "await",
    answer_hi: "await",
    attempted: false,
    selected: ""
  },
  {
    num: 80,
    question_en: "Which API performs background task?",
    question_hi: "Background task perform करने के लिए कौन सा API है?",
    options_en: ["Task", "Thread", "Queue", "Operation"],
    options_hi: ["Task", "Thread", "Queue", "Operation"],
    answer_en: "Task",
    answer_hi: "Task",
    attempted: false,
    selected: ""
  },
  {
    num: 81,
    question_en: "Which Swift type represents empty return?",
    question_hi: "Empty return को कौन सा type represent करता है?",
    options_en: ["Void", "Nil", "Empty", "None"],
    options_hi: ["Void", "Nil", "Empty", "None"],
    answer_en: "Void",
    answer_hi: "Void",
    attempted: false,
    selected: ""
  },
  {
    num: 82,
    question_en: "Which symbol denotes type annotation?",
    question_hi: "Type annotation के लिए कौन सा symbol है?",
    options_en: [":", "=", "->", "=>"],
    options_hi: [":", "=", "->", "=>"],
    answer_en: ":",
    answer_hi: ":",
    attempted: false,
    selected: ""
  },
  {
    num: 83,
    question_en: "Which operator combines strings?",
    question_hi: "Strings combine करने के लिए कौन सा operator है?",
    options_en: ["+", "&", "*", "."],
    options_hi: ["+", "&", "*", "."],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 84,
    question_en: "Which keyword defines extension?",
    question_hi: "Extension define करने के लिए कौन सा keyword है?",
    options_en: ["extension", "extend", "category", "add"],
    options_hi: ["extension", "extend", "category", "add"],
    answer_en: "extension",
    answer_hi: "extension",
    attempted: false,
    selected: ""
  },
  {
    num: 85,
    question_en: "Which feature adds functionality without subclassing?",
    question_hi: "Subclassing के बिना functionality add करने वाला feature कौन सा है?",
    options_en: ["Extension", "Protocol", "Inheritance", "Override"],
    options_hi: ["Extension", "Protocol", "Inheritance", "Override"],
    answer_en: "Extension",
    answer_hi: "Extension",
    attempted: false,
    selected: ""
  },
  {
    num: 86,
    question_en: "Which keyword marks deprecated code?",
    question_hi: "Deprecated code mark करने के लिए कौन सा attribute है?",
    options_en: ["@available", "@deprecated", "@old", "@remove"],
    options_hi: ["@available", "@deprecated", "@old", "@remove"],
    answer_en: "@available",
    answer_hi: "@available",
    attempted: false,
    selected: ""
  },
  {
    num: 87,
    question_en: "Which tool builds Swift projects?",
    question_hi: "Swift projects build करने वाला tool कौन सा है?",
    options_en: ["Xcode", "Gradle", "Maven", "Make"],
    options_hi: ["Xcode", "Gradle", "Maven", "Make"],
    answer_en: "Xcode",
    answer_hi: "Xcode",
    attempted: false,
    selected: ""
  },
  {
    num: 88,
    question_en: "Which language is used for iOS UI?",
    question_hi: "iOS UI के लिए कौन सी language उपयोग होती है?",
    options_en: ["SwiftUI", "Swift", "Objective-C", "All"],
    options_hi: ["SwiftUI", "Swift", "Objective-C", "All"],
    answer_en: "All",
    answer_hi: "All",
    attempted: false,
    selected: ""
  },
  {
    num: 89,
    question_en: "Which framework manages UI in SwiftUI?",
    question_hi: "SwiftUI में UI manage करने वाला framework कौन सा है?",
    options_en: ["SwiftUI", "UIKit", "Foundation", "Combine"],
    options_hi: ["SwiftUI", "UIKit", "Foundation", "Combine"],
    answer_en: "SwiftUI",
    answer_hi: "SwiftUI",
    attempted: false,
    selected: ""
  },
  {
    num: 90,
    question_en: "Which framework provides base functionality?",
    question_hi: "Base functionality देने वाला framework कौन सा है?",
    options_en: ["Foundation", "SwiftUI", "UIKit", "Combine"],
    options_hi: ["Foundation", "SwiftUI", "UIKit", "Combine"],
    answer_en: "Foundation",
    answer_hi: "Foundation",
    attempted: false,
    selected: ""
  },
  {
    num: 91,
    question_en: "Which framework handles reactive programming?",
    question_hi: "Reactive programming handle करने वाला framework कौन सा है?",
    options_en: ["Combine", "Foundation", "UIKit", "CoreData"],
    options_hi: ["Combine", "Foundation", "UIKit", "CoreData"],
    answer_en: "Combine",
    answer_hi: "Combine",
    attempted: false,
    selected: ""
  },
  {
    num: 92,
    question_en: "Which framework stores persistent data?",
    question_hi: "Persistent data store करने वाला framework कौन सा है?",
    options_en: ["CoreData", "Foundation", "UIKit", "Combine"],
    options_hi: ["CoreData", "Foundation", "UIKit", "Combine"],
    answer_en: "CoreData",
    answer_hi: "CoreData",
    attempted: false,
    selected: ""
  },
  {
    num: 93,
    question_en: "Which keyword ends program execution?",
    question_hi: "Program execution end करने के लिए कौन सा keyword है?",
    options_en: ["exit", "return", "stop", "end"],
    options_hi: ["exit", "return", "stop", "end"],
    answer_en: "exit",
    answer_hi: "exit",
    attempted: false,
    selected: ""
  },
  {
    num: 94,
    question_en: "Which symbol is used for comments?",
    question_hi: "Comments के लिए कौन सा symbol है?",
    options_en: ["//", "/* */", "#", "Both // and /* */"],
    options_hi: ["//", "/* */", "#", "दोनों // और /* */"],
    answer_en: "Both // and /* */",
    answer_hi: "दोनों // और /* */",
    attempted: false,
    selected: ""
  },
  {
    num: 95,
    question_en: "Which tool is used for version control?",
    question_hi: "Version control के लिए कौन सा tool उपयोग होता है?",
    options_en: ["Git", "SVN", "Mercurial", "All"],
    options_hi: ["Git", "SVN", "Mercurial", "ये सभी"],
    answer_en: "All",
    answer_hi: "ये सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 96,
    question_en: "Which file defines app entry point in SwiftUI?",
    question_hi: "SwiftUI में app entry point कौन सी file define करती है?",
    options_en: ["@main App", "SceneDelegate", "AppDelegate", "Main.storyboard"],
    options_hi: ["@main App", "SceneDelegate", "AppDelegate", "Main.storyboard"],
    answer_en: "@main App",
    answer_hi: "@main App",
    attempted: false,
    selected: ""
  },
  {
    num: 97,
    question_en: "Which keyword marks main entry?",
    question_hi: "Main entry mark करने वाला keyword कौन सा है?",
    options_en: ["@main", "main()", "start", "run"],
    options_hi: ["@main", "main()", "start", "run"],
    answer_en: "@main",
    answer_hi: "@main",
    attempted: false,
    selected: ""
  },
  {
    num: 98,
    question_en: "Which keyword is used to import framework?",
    question_hi: "Framework import करने के लिए कौन सा keyword है?",
    options_en: ["import", "include", "require", "use"],
    options_hi: ["import", "include", "require", "use"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },
  {
    num: 99,
    question_en: "Which keyword returns value from function?",
    question_hi: "Function से value return करने के लिए कौन सा keyword है?",
    options_en: ["return", "send", "give", "output"],
    options_hi: ["return", "send", "give", "output"],
    answer_en: "return",
    answer_hi: "return",
    attempted: false,
    selected: ""
  },
  {
    num: 100,
    question_en: "Which Swift feature ensures type safety?",
    question_hi: "Swift में type safety कौन सा feature ensure करता है?",
    options_en: ["Strong typing", "Dynamic typing", "Casting", "Reflection"],
    options_hi: ["Strong typing", "Dynamic typing", "Casting", "Reflection"],
    answer_en: "Strong typing",
    answer_hi: "Strong typing",
    attempted: false,
    selected: ""
  }


];

// NOTE: 26–100 follow SAME PATTERN (Swift advanced: protocols, actors, concurrency, property wrappers, access control, memory, ARC, etc.)

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