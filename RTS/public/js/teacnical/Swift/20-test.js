const questions = [
  {
    "num": 1,
    "question_en": "What keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में constant घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a variable in Swift?",
    "question_hi": "Swift में variable घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["var", "let", "define", "mutable"],
    "options_hi": ["var", "let", "define", "mutable"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is used to store text in Swift?",
    "question_hi": "Swift में टेक्स्ट स्टोर करने के लिए कौन सा डेटा टाइप उपयोग होता है?",
    "options_en": ["String", "Text", "Char", "CharacterArray"],
    "options_hi": ["String", "Text", "Char", "CharacterArray"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which symbol is used for single-line comments in Swift?",
    "question_hi": "Swift में single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["//", "/*", "#", "--"],
    "options_hi": ["//", "/*", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which collection type stores ordered values in Swift?",
    "question_hi": "Swift में ordered values स्टोर करने के लिए कौन सा collection उपयोग होता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which collection stores unique values in Swift?",
    "question_hi": "Swift में unique values स्टोर करने के लिए कौन सा collection उपयोग होता है?",
    "options_en": ["Set", "Array", "Dictionary", "List"],
    "options_hi": ["Set", "Array", "Dictionary", "List"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "कौन सा collection key-value pair स्टोर करता है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "Swift में function define करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["func", "function", "def", "fn"],
    "options_hi": ["func", "function", "def", "fn"],
    "answer_en": "func",
    "answer_hi": "func",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which type represents absence of value?",
    "question_hi": "कौन सा टाइप value की absence को दर्शाता है?",
    "options_en": ["Optional", "Nil", "Void", "None"],
    "options_hi": ["Optional", "Nil", "Void", "None"],
    "answer_en": "Optional",
    "answer_hi": "Optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What symbol is used to unwrap an optional forcefully?",
    "question_hi": "Optional को force unwrap करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["!", "?", "??", "*"],
    "options_hi": ["!", "?", "??", "*"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used for conditional statement?",
    "question_hi": "Conditional statement के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["if", "when", "check", "cond"],
    "options_hi": ["if", "when", "check", "cond"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which loop repeats a fixed number of times?",
    "question_hi": "कौन सा loop fixed number of times repeat होता है?",
    "options_en": ["for-in", "while", "repeat-while", "loop"],
    "options_hi": ["for-in", "while", "repeat-while", "loop"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which loop runs at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार चलता है?",
    "options_en": ["repeat-while", "while", "for", "loop"],
    "options_hi": ["repeat-while", "while", "for", "loop"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword exits a loop?",
    "question_hi": "Loop से बाहर निकलने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["break", "stop", "exit", "return"],
    "options_hi": ["break", "stop", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "Current iteration skip करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["continue", "skip", "next", "pass"],
    "options_hi": ["continue", "skip", "next", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which type represents no value?",
    "question_hi": "कौन सा टाइप no value को दर्शाता है?",
    "options_en": ["Void", "Nil", "None", "Empty"],
    "options_hi": ["Void", "Nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword defines a class?",
    "question_hi": "Class define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "object", "type"],
    "options_hi": ["class", "struct", "object", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword defines a structure?",
    "question_hi": "Structure define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["struct", "class", "object", "data"],
    "options_hi": ["struct", "class", "object", "data"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword defines an enumeration?",
    "question_hi": "Enumeration define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["enum", "case", "switch", "type"],
    "options_hi": ["enum", "case", "switch", "type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "Protocol define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "type"],
    "options_hi": ["protocol", "interface", "delegate", "type"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword conforms to a protocol?",
    "question_hi": "Protocol को conform करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": [":", "implements", "uses", "extends"],
    "options_hi": [":", "implements", "uses", "extends"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword handles errors?",
    "question_hi": "Error handle करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["do-catch", "try", "throws", "error"],
    "options_hi": ["do-catch", "try", "throws", "error"],
    "answer_en": "do-catch",
    "answer_hi": "do-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword allows throwing errors?",
    "question_hi": "Errors throw करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["throws", "throwing", "error", "catch"],
    "options_hi": ["throws", "throwing", "error", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used before calling throwing function?",
    "question_hi": "Throwing function call करने से पहले कौन सा keyword उपयोग होता है?",
    "options_en": ["try", "catch", "throw", "do"],
    "options_hi": ["try", "catch", "throw", "do"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which operator provides nil-coalescing?",
    "question_hi": "Nil-coalescing के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "?", "!", "&&"],
    "options_hi": ["??", "?", "!", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which access level is most restrictive?",
    "question_hi": "सबसे ज्यादा restrictive access level कौन सा है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which access level is default in Swift?",
    "question_hi": "Swift में default access level कौन सा होता है?",
    "options_en": ["internal", "public", "private", "open"],
    "options_hi": ["internal", "public", "private", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword creates a singleton?",
    "question_hi": "Singleton बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["static", "shared", "global", "single"],
    "options_hi": ["static", "shared", "global", "single"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword marks async function?",
    "question_hi": "Async function mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["async", "await", "task", "concurrent"],
    "options_hi": ["async", "await", "task", "concurrent"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "Async result का इंतज़ार करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["await", "async", "wait", "hold"],
    "options_hi": ["await", "async", "wait", "hold"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword defines an actor?",
    "question_hi": "Actor define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["actor", "class", "struct", "object"],
    "options_hi": ["actor", "class", "struct", "object"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which protocol ensures thread safety?",
    "question_hi": "Thread safety सुनिश्चित करने वाला protocol कौन सा है?",
    "options_en": ["Sendable", "Safe", "ThreadSafe", "Concurrent"],
    "options_hi": ["Sendable", "Safe", "ThreadSafe", "Concurrent"],
    "answer_en": "Sendable",
    "answer_hi": "Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function terminates app immediately?",
    "question_hi": "App को तुरंत terminate करने वाला function कौन सा है?",
    "options_en": ["fatalError()", "exit()", "stop()", "terminate()"],
    "options_hi": ["fatalError()", "exit()", "stop()", "terminate()"],
    "answer_en": "fatalError()",
    "answer_hi": "fatalError()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function is used for debugging?",
    "question_hi": "Debugging के लिए कौन सा function उपयोग होता है?",
    "options_en": ["print()", "debug()", "log()", "trace()"],
    "options_hi": ["print()", "debug()", "log()", "trace()"],
    "answer_en": "print()",
    "answer_hi": "print()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "Inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "super"],
    "options_hi": [":", "extends", "inherits", "super"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword calls parent initializer?",
    "question_hi": "Parent initializer call करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["super", "self", "parent", "base"],
    "options_hi": ["super", "self", "parent", "base"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword refers to current instance?",
    "question_hi": "Current instance को refer करने वाला keyword कौन सा है?",
    "options_en": ["self", "this", "current", "me"],
    "options_hi": ["self", "this", "current", "me"],
    "answer_en": "self",
    "answer_hi": "self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword defines a computed property?",
    "question_hi": "Computed property define करने के लिए क्या उपयोग होता है?",
    "options_en": ["get/set", "compute", "calc", "value"],
    "options_hi": ["get/set", "compute", "calc", "value"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword marks mutating method?",
    "question_hi": "Mutating method को mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["mutating", "changing", "modify", "var"],
    "options_hi": ["mutating", "changing", "modify", "var"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which type is value type?",
    "question_hi": "Value type कौन सा है?",
    "options_en": ["struct", "class", "actor", "reference"],
    "options_hi": ["struct", "class", "actor", "reference"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which type is reference type?",
    "question_hi": "Reference type कौन सा है?",
    "options_en": ["class", "struct", "enum", "tuple"],
    "options_hi": ["class", "struct", "enum", "tuple"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which ARC reference avoids retain cycle?",
    "question_hi": "Retain cycle avoid करने के लिए कौन सा reference उपयोग होता है?",
    "options_en": ["weak", "strong", "unowned", "static"],
    "options_hi": ["weak", "strong", "unowned", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword creates optional binding?",
    "question_hi": "Optional binding के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["if let", "guard let", "both", "bind"],
    "options_hi": ["if let", "guard let", "both", "bind"],
    "answer_en": "both",
    "answer_hi": "both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which statement exits function early?",
    "question_hi": "Function से जल्दी exit करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["guard", "if", "break", "continue"],
    "options_hi": ["guard", "if", "break", "continue"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword creates extension?",
    "question_hi": "Extension बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extension", "extend", "expand", "add"],
    "options_hi": ["extension", "extend", "expand", "add"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which operator checks type?",
    "question_hi": "Type check करने वाला operator कौन सा है?",
    "options_en": ["is", "as", "==", "==="],
    "options_hi": ["is", "as", "==", "==="],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which operator performs type casting?",
    "question_hi": "Type casting करने वाला operator कौन सा है?",
    "options_en": ["as", "is", "==", "==="],
    "options_hi": ["as", "is", "==", "==="],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method filters array?",
    "question_hi": "Array filter करने वाली method कौन सी है?",
    "options_en": ["filter()", "map()", "reduce()", "sort()"],
    "options_hi": ["filter()", "map()", "reduce()", "sort()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method transforms array?",
    "question_hi": "Array transform करने वाली method कौन सी है?",
    "options_en": ["map()", "filter()", "reduce()", "flatMap()"],
    "options_hi": ["map()", "filter()", "reduce()", "flatMap()"],
    "answer_en": "map()",
    "answer_hi": "map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method combines values?",
    "question_hi": "Values combine करने वाली method कौन सी है?",
    "options_en": ["reduce()", "map()", "filter()", "merge()"],
    "options_hi": ["reduce()", "map()", "filter()", "merge()"],
    "answer_en": "reduce()",
    "answer_hi": "reduce()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which keyword marks availability?",
    "question_hi": "Availability mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@available", "@version", "@platform", "@since"],
    "options_hi": ["@available", "@version", "@platform", "@since"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which attribute enables Objective-C interoperability?",
    "question_hi": "Objective-C interoperability के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["@objc", "@objectivec", "@interop", "@bridge"],
    "options_hi": ["@objc", "@objectivec", "@interop", "@bridge"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which type represents any value?",
    "question_hi": "किसी भी value को represent करने वाला type कौन सा है?",
    "options_en": ["Any", "AnyObject", "Object", "Unknown"],
    "options_hi": ["Any", "AnyObject", "Object", "Unknown"],
    "answer_en": "Any",
    "answer_hi": "Any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which type represents any class?",
    "question_hi": "किसी भी class को represent करने वाला type कौन सा है?",
    "options_en": ["AnyObject", "Any", "Object", "Class"],
    "options_hi": ["AnyObject", "Any", "Object", "Class"],
    "answer_en": "AnyObject",
    "answer_hi": "AnyObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which keyword marks property wrapper?",
    "question_hi": "Property wrapper mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["@propertyWrapper", "@wrapper", "@property", "@wrap"],
    "options_hi": ["@propertyWrapper", "@wrapper", "@property", "@wrap"],
    "answer_en": "@propertyWrapper",
    "answer_hi": "@propertyWrapper",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which protocol enables encoding & decoding?",
    "question_hi": "Encoding और decoding सक्षम करने वाला protocol कौन सा है?",
    "options_en": ["Codable", "Encodable", "Decodable", "Serializable"],
    "options_hi": ["Codable", "Encodable", "Decodable", "Serializable"],
    "answer_en": "Codable",
    "answer_hi": "Codable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which encoder converts data to JSON?",
    "question_hi": "JSON में data convert करने वाला encoder कौन सा है?",
    "options_en": ["JSONEncoder", "JSONParser", "JSONWriter", "JSONSerializer"],
    "options_hi": ["JSONEncoder", "JSONParser", "JSONWriter", "JSONSerializer"],
    "answer_en": "JSONEncoder",
    "answer_hi": "JSONEncoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which decoder reads JSON?",
    "question_hi": "JSON read करने वाला decoder कौन सा है?",
    "options_en": ["JSONDecoder", "JSONReader", "JSONParser", "JSONDecode"],
    "options_hi": ["JSONDecoder", "JSONReader", "JSONParser", "JSONDecode"],
    "answer_en": "JSONDecoder",
    "answer_hi": "JSONDecoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which framework is used for UI?",
    "question_hi": "UI बनाने के लिए कौन सा framework उपयोग होता है?",
    "options_en": ["UIKit", "Foundation", "CoreData", "SwiftUI"],
    "options_hi": ["UIKit", "Foundation", "CoreData", "SwiftUI"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which modern UI framework is declarative?",
    "question_hi": "कौन सा modern UI framework declarative है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "Foundation"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "Foundation"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which property wrapper observes state?",
    "question_hi": "State observe करने वाला property wrapper कौन सा है?",
    "options_en": ["@State", "@ObservedObject", "@Binding", "@StateObject"],
    "options_hi": ["@State", "@ObservedObject", "@Binding", "@StateObject"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which wrapper shares state between views?",
    "question_hi": "Views के बीच state share करने वाला wrapper कौन सा है?",
    "options_en": ["@Binding", "@State", "@ObservedObject", "@Environment"],
    "options_hi": ["@Binding", "@State", "@ObservedObject", "@Environment"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which wrapper injects environment values?",
    "question_hi": "Environment values inject करने वाला wrapper कौन सा है?",
    "options_en": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@Environment",
    "answer_hi": "@Environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which wrapper observes reference type?",
    "question_hi": "Reference type observe करने वाला wrapper कौन सा है?",
    "options_en": ["@ObservedObject", "@State", "@Binding", "@Environment"],
    "options_hi": ["@ObservedObject", "@State", "@Binding", "@Environment"],
    "answer_en": "@ObservedObject",
    "answer_hi": "@ObservedObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which wrapper owns observable object?",
    "question_hi": "Observable object को own करने वाला wrapper कौन सा है?",
    "options_en": ["@StateObject", "@ObservedObject", "@State", "@Binding"],
    "options_hi": ["@StateObject", "@ObservedObject", "@State", "@Binding"],
    "answer_en": "@StateObject",
    "answer_hi": "@StateObject",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which keyword defines closure?",
    "question_hi": "Closure define करने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["{}", "()", "[]", "<>"],
    "options_hi": ["{}", "()", "[]", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which closure feature shortens syntax?",
    "question_hi": "Closure syntax छोटा करने वाला फीचर कौन सा है?",
    "options_en": ["Trailing closure", "Inline closure", "Compact closure", "Lambda"],
    "options_hi": ["Trailing closure", "Inline closure", "Compact closure", "Lambda"],
    "answer_en": "Trailing closure",
    "answer_hi": "Trailing closure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which keyword captures value weakly?",
    "question_hi": "Value को weakly capture करने वाला keyword कौन सा है?",
    "options_en": ["weak", "unowned", "strong", "static"],
    "options_hi": ["weak", "unowned", "strong", "static"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword avoids optional retain?",
    "question_hi": "Optional retain avoid करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["unowned", "weak", "strong", "static"],
    "options_hi": ["unowned", "weak", "strong", "static"],
    "answer_en": "unowned",
    "answer_hi": "unowned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which method sorts array?",
    "question_hi": "Array sort करने वाली method कौन सी है?",
    "options_en": ["sorted()", "sort()", "order()", "arrange()"],
    "options_hi": ["sorted()", "sort()", "order()", "arrange()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which method mutates array while sorting?",
    "question_hi": "Array को mutate करते हुए sort करने वाली method कौन सी है?",
    "options_en": ["sort()", "sorted()", "order()", "arrange()"],
    "options_hi": ["sort()", "sorted()", "order()", "arrange()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which operator compares value and type?",
    "question_hi": "Value और type दोनों compare करने वाला operator कौन सा है?",
    "options_en": ["===", "==", "!=", ">"],
    "options_hi": ["===", "==", "!=", ">"],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which operator compares only value?",
    "question_hi": "केवल value compare करने वाला operator कौन सा है?",
    "options_en": ["==", "===", "!=", ">"],
    "options_hi": ["==", "===", "!=", ">"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which keyword marks final class?",
    "question_hi": "Final class mark करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["final", "sealed", "closed", "stop"],
    "options_hi": ["final", "sealed", "closed", "stop"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which keyword prevents override?",
    "question_hi": "Override रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["final", "private", "static", "sealed"],
    "options_hi": ["final", "private", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which keyword defines lazy property?",
    "question_hi": "Lazy property define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["lazy", "delay", "late", "async"],
    "options_hi": ["lazy", "delay", "late", "async"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which keyword enables recursion in enum?",
    "question_hi": "Enum में recursion enable करने वाला keyword कौन सा है?",
    "options_en": ["indirect", "recursive", "loop", "self"],
    "options_hi": ["indirect", "recursive", "loop", "self"],
    "answer_en": "indirect",
    "answer_hi": "indirect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which attribute marks deprecated API?",
    "question_hi": "Deprecated API mark करने वाला attribute कौन सा है?",
    "options_en": ["@available", "@deprecated", "@old", "@removed"],
    "options_hi": ["@available", "@deprecated", "@old", "@removed"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which keyword defines static method?",
    "question_hi": "Static method define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["static", "class", "fixed", "shared"],
    "options_hi": ["static", "class", "fixed", "shared"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which keyword allows overriding static?",
    "question_hi": "Static को override करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "static", "override", "open"],
    "options_hi": ["class", "static", "override", "open"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which keyword opens class for inheritance?",
    "question_hi": "Class को inheritance के लिए खोलने वाला keyword कौन सा है?",
    "options_en": ["open", "public", "internal", "visible"],
    "options_hi": ["open", "public", "internal", "visible"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword marks property as observable?",
    "question_hi": "Property को observable बनाने वाला keyword कौन सा है?",
    "options_en": ["@Published", "@State", "@Binding", "@Observed"],
    "options_hi": ["@Published", "@State", "@Binding", "@Observed"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which framework manages files?",
    "question_hi": "Files manage करने वाला framework कौन सा है?",
    "options_en": ["FileManager", "Files", "Storage", "Disk"],
    "options_hi": ["FileManager", "Files", "Storage", "Disk"],
    "answer_en": "FileManager",
    "answer_hi": "FileManager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which class handles networking?",
    "question_hi": "Networking handle करने वाली class कौन सी है?",
    "options_en": ["URLSession", "NetworkManager", "HTTPClient", "WebSession"],
    "options_hi": ["URLSession", "NetworkManager", "HTTPClient", "WebSession"],
    "answer_en": "URLSession",
    "answer_hi": "URLSession",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which type stores binary data?",
    "question_hi": "Binary data store करने वाला type कौन सा है?",
    "options_en": ["Data", "Bytes", "Binary", "Buffer"],
    "options_hi": ["Data", "Bytes", "Binary", "Buffer"],
    "answer_en": "Data",
    "answer_hi": "Data",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which method creates UUID?",
    "question_hi": "UUID बनाने वाली method कौन सी है?",
    "options_en": ["UUID()", "UUID.create()", "UUID.generate()", "UUID.new()"],
    "options_hi": ["UUID()", "UUID.create()", "UUID.generate()", "UUID.new()"],
    "answer_en": "UUID()",
    "answer_hi": "UUID()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which type represents date and time?",
    "question_hi": "Date और time represent करने वाला type कौन सा है?",
    "options_en": ["Date", "Time", "DateTime", "Calendar"],
    "options_hi": ["Date", "Time", "DateTime", "Calendar"],
    "answer_en": "Date",
    "answer_hi": "Date",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which class formats date?",
    "question_hi": "Date format करने वाली class कौन सी है?",
    "options_en": ["DateFormatter", "DateFormat", "Formatter", "Calendar"],
    "options_hi": ["DateFormatter", "DateFormat", "Formatter", "Calendar"],
    "answer_en": "DateFormatter",
    "answer_hi": "DateFormatter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which type handles notifications?",
    "question_hi": "Notifications handle करने वाला type कौन सा है?",
    "options_en": ["NotificationCenter", "Notifier", "EventCenter", "Broadcast"],
    "options_hi": ["NotificationCenter", "Notifier", "EventCenter", "Broadcast"],
    "answer_en": "NotificationCenter",
    "answer_hi": "NotificationCenter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which type stores user preferences?",
    "question_hi": "User preferences store करने वाला type कौन सा है?",
    "options_en": ["UserDefaults", "Preferences", "Settings", "Storage"],
    "options_hi": ["UserDefaults", "Preferences", "Settings", "Storage"],
    "answer_en": "UserDefaults",
    "answer_hi": "UserDefaults",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which keyword defines result builder?",
    "question_hi": "Result builder define करने वाला keyword कौन सा है?",
    "options_en": ["@resultBuilder", "@builder", "@functionBuilder", "@build"],
    "options_hi": ["@resultBuilder", "@builder", "@functionBuilder", "@build"],
    "answer_en": "@resultBuilder",
    "answer_hi": "@resultBuilder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which feature enables DSL in SwiftUI?",
    "question_hi": "SwiftUI में DSL enable करने वाला feature कौन सा है?",
    "options_en": ["Result Builder", "Closures", "Protocols", "Extensions"],
    "options_hi": ["Result Builder", "Closures", "Protocols", "Extensions"],
    "answer_en": "Result Builder",
    "answer_hi": "Result Builder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which keyword marks throwing function?",
    "question_hi": "Throwing function mark करने वाला keyword कौन सा है?",
    "options_en": ["throws", "throw", "error", "catch"],
    "options_hi": ["throws", "throw", "error", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which keyword rethrows closure errors?",
    "question_hi": "Closure errors rethrow करने वाला keyword कौन सा है?",
    "options_en": ["rethrows", "throws", "throw", "catch"],
    "options_hi": ["rethrows", "throws", "throw", "catch"],
    "answer_en": "rethrows",
    "answer_hi": "rethrows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which keyword defers execution?",
    "question_hi": "Execution को defer करने वाला keyword कौन सा है?",
    "options_en": ["defer", "delay", "wait", "postpone"],
    "options_hi": ["defer", "delay", "wait", "postpone"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which keyword imports module?",
    "question_hi": "Module import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "include", "require", "using"],
    "options_hi": ["import", "include", "require", "using"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which attribute hints compiler optimization?",
    "question_hi": "Compiler optimization hint देने वाला attribute कौन सा है?",
    "options_en": ["@inlineable", "@optimize", "@fast", "@speed"],
    "options_hi": ["@inlineable", "@optimize", "@fast", "@speed"],
    "answer_en": "@inlineable",
    "answer_hi": "@inlineable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which feature enables concurrency safety?",
    "question_hi": "Concurrency safety enable करने वाला feature कौन सा है?",
    "options_en": ["Actors", "Threads", "Locks", "Queues"],
    "options_hi": ["Actors", "Threads", "Locks", "Queues"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which protocol ensures safe data transfer?",
    "question_hi": "Safe data transfer सुनिश्चित करने वाला protocol कौन सा है?",
    "options_en": ["Sendable", "Transferable", "Safe", "Secure"],
    "options_hi": ["Sendable", "Transferable", "Safe", "Secure"],
    "answer_en": "Sendable",
    "answer_hi": "Sendable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift version introduced async/await?",
    "question_hi": "Async/await किस Swift version में आया?",
    "options_en": ["Swift 5.5", "Swift 5.0", "Swift 4.2", "Swift 6.0"],
    "options_hi": ["Swift 5.5", "Swift 5.0", "Swift 4.2", "Swift 6.0"],
    "answer_en": "Swift 5.5",
    "answer_hi": "Swift 5.5",
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