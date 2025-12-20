const questions = [
  {
    "num": 1,
    "question_en": "Swift was introduced in which year?",
    "question_hi": "Swift भाषा किस साल में लॉन्च की गई थी?",
    "options_en": ["2014", "2012", "2016", "2010"],
    "options_hi": ["2014", "2012", "2016", "2010"],
    "answer_en": "2014",
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which company developed Swift?",
    "question_hi": "Swift किस कंपनी द्वारा विकसित की गई है?",
    "options_en": ["Apple", "Google", "Microsoft", "IBM"],
    "options_hi": ["Apple", "Google", "Microsoft", "IBM"],
    "answer_en": "Apple",
    "answer_hi": "Apple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Swift primarily supports which programming paradigm?",
    "question_hi": "Swift मुख्य रूप से कौन सा प्रोग्रामिंग पैराडाइम सपोर्ट करती है?",
    "options_en": ["Multi-paradigm", "Procedural", "Logic", "Markup"],
    "options_hi": ["Multi-paradigm", "Procedural", "Logic", "Markup"],
    "answer_en": "Multi-paradigm",
    "answer_hi": "Multi-paradigm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which file extension is used for Swift files?",
    "question_hi": "Swift फाइल का एक्सटेंशन क्या होता है?",
    "options_en": [".swift", ".sw", ".ios", ".apple"],
    "options_hi": [".swift", ".sw", ".ios", ".apple"],
    "answer_en": ".swift",
    "answer_hi": ".swift",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to import a module?",
    "question_hi": "मॉड्यूल इम्पोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["import", "include", "require", "using"],
    "options_hi": ["import", "include", "require", "using"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which Swift type stores true or false?",
    "question_hi": "true या false स्टोर करने के लिए कौन सा टाइप है?",
    "options_en": ["Bool", "Boolean", "Int", "Flag"],
    "options_hi": ["Bool", "Boolean", "Int", "Flag"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which integer type is platform dependent?",
    "question_hi": "कौन सा integer टाइप प्लेटफॉर्म पर निर्भर करता है?",
    "options_en": ["Int", "Int32", "Int64", "UInt8"],
    "options_hi": ["Int", "Int32", "Int64", "UInt8"],
    "answer_en": "Int",
    "answer_hi": "Int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type represents decimal numbers?",
    "question_hi": "दशमलव संख्या के लिए कौन सा टाइप उपयोग होता है?",
    "options_en": ["Double", "Int", "Bool", "Char"],
    "options_hi": ["Double", "Int", "Bool", "Char"],
    "answer_en": "Double",
    "answer_hi": "Double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to define type alias?",
    "question_hi": "टाइप एलियास बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["typealias", "alias", "typedef", "define"],
    "options_hi": ["typealias", "alias", "typedef", "define"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which statement selects multiple cases?",
    "question_hi": "एक से अधिक केस सिलेक्ट करने के लिए कौन सा स्टेटमेंट है?",
    "options_en": ["switch", "if", "guard", "for"],
    "options_hi": ["switch", "if", "guard", "for"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword allows fallthrough in switch?",
    "question_hi": "switch में फॉलथ्रू के लिए कौन सा कीवर्ड है?",
    "options_en": ["fallthrough", "continue", "break", "next"],
    "options_hi": ["fallthrough", "continue", "break", "next"],
    "answer_en": "fallthrough",
    "answer_hi": "fallthrough",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword labels loops?",
    "question_hi": "लूप को लेबल करने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["label", "tag", "mark", "name"],
    "options_hi": ["label", "tag", "mark", "name"],
    "answer_en": "label",
    "answer_hi": "label",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which statement exits labeled loop?",
    "question_hi": "लेबल वाले लूप से बाहर निकलने के लिए क्या उपयोग होता है?",
    "options_en": ["break label", "exit", "stop", "return"],
    "options_hi": ["break label", "exit", "stop", "return"],
    "answer_en": "break label",
    "answer_hi": "break label",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift feature supports immutability by default?",
    "question_hi": "डिफॉल्ट रूप से इम्यूटेबल बिहेवियर कौन देता है?",
    "options_en": ["let", "var", "static", "lazy"],
    "options_hi": ["let", "var", "static", "lazy"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword marks computed property?",
    "question_hi": "कम्प्यूटेड प्रॉपर्टी को कौन सा कीवर्ड दर्शाता है?",
    "options_en": ["get/set", "compute", "calc", "value"],
    "options_hi": ["get/set", "compute", "calc", "value"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Swift type is used for characters?",
    "question_hi": "कैरेक्टर के लिए कौन सा Swift टाइप है?",
    "options_en": ["Character", "Char", "String", "Text"],
    "options_hi": ["Character", "Char", "String", "Text"],
    "answer_en": "Character",
    "answer_hi": "Character",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which type stores Unicode text?",
    "question_hi": "Unicode टेक्स्ट स्टोर करने के लिए कौन सा टाइप है?",
    "options_en": ["String", "Text", "CharArray", "Unicode"],
    "options_hi": ["String", "Text", "CharArray", "Unicode"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which property returns string length?",
    "question_hi": "String की लंबाई पाने के लिए कौन सी प्रॉपर्टी है?",
    "options_en": ["count", "length", "size", "total"],
    "options_hi": ["count", "length", "size", "total"],
    "answer_en": "count",
    "answer_hi": "count",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method converts string to uppercase?",
    "question_hi": "String को uppercase में बदलने का मेथड कौन सा है?",
    "options_en": ["uppercased()", "toUpper()", "capitalize()", "upper()"],
    "options_hi": ["uppercased()", "toUpper()", "capitalize()", "upper()"],
    "answer_en": "uppercased()",
    "answer_hi": "uppercased()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method converts string to lowercase?",
    "question_hi": "String को lowercase में बदलने का मेथड कौन सा है?",
    "options_en": ["lowercased()", "toLower()", "small()", "down()"],
    "options_hi": ["lowercased()", "toLower()", "small()", "down()"],
    "answer_en": "lowercased()",
    "answer_hi": "lowercased()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword marks throwing function?",
    "question_hi": "थ्रोइंग फंक्शन को कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["throws", "throw", "try", "catch"],
    "options_hi": ["throws", "throw", "try", "catch"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword handles error?",
    "question_hi": "एरर हैंडल करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["catch", "handle", "error", "fix"],
    "options_hi": ["catch", "handle", "error", "fix"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Swift feature avoids null pointer exceptions?",
    "question_hi": "नल पॉइंटर एक्सेप्शन से बचाने वाला फीचर कौन सा है?",
    "options_en": ["Optionals", "ARC", "Guard", "Actors"],
    "options_hi": ["Optionals", "ARC", "Guard", "Actors"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which operator force unwraps optional?",
    "question_hi": "ऑप्शनल को फोर्स अनरैप करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword safely unwraps optional?",
    "question_hi": "ऑप्शनल को सेफली अनरैप करने के लिए क्या उपयोग होता है?",
    "options_en": ["if let", "!", "??", "as"],
    "options_hi": ["if let", "!", "??", "as"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Swift construct supports dependency injection?",
    "question_hi": "डिपेंडेंसी इंजेक्शन में कौन सा कॉन्सेप्ट उपयोगी है?",
    "options_en": ["Protocol", "Enum", "Tuple", "Extension"],
    "options_hi": ["Protocol", "Enum", "Tuple", "Extension"],
    "answer_en": "Protocol",
    "answer_hi": "Protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword conforms to protocol?",
    "question_hi": "प्रोटोकॉल कंफॉर्म करने के लिए कौन सा सिंबल है?",
    "options_en": [":", "implements", "uses", "adopts"],
    "options_hi": [":", "implements", "uses", "adopts"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which protocol allows comparison operators?",
    "question_hi": "कम्पैरिजन ऑपरेटर सपोर्ट करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Comparable", "Equatable", "Hashable", "Codable"],
    "options_hi": ["Comparable", "Equatable", "Hashable", "Codable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which protocol is required for Set keys?",
    "question_hi": "Set के एलिमेंट्स के लिए कौन सा प्रोटोकॉल जरूरी है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which feature enables code reuse?",
    "question_hi": "कोड रीयूज़ को कौन सक्षम करता है?",
    "options_en": ["Extension", "Enum", "Tuple", "Actor"],
    "options_hi": ["Extension", "Enum", "Tuple", "Actor"],
    "answer_en": "Extension",
    "answer_hi": "Extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Swift tool compiles code?",
    "question_hi": "Swift को कम्पाइल करने वाला टूल कौन सा है?",
    "options_en": ["Swift Compiler", "LLVM", "Xcode", "Clang"],
    "options_hi": ["Swift Compiler", "LLVM", "Xcode", "Clang"],
    "answer_en": "Swift Compiler",
    "answer_hi": "Swift Compiler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which framework is used for UI development?",
    "question_hi": "UI डेवलपमेंट के लिए कौन सा फ्रेमवर्क उपयोग होता है?",
    "options_en": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "options_hi": ["UIKit", "Foundation", "CoreData", "AVKit"],
    "answer_en": "UIKit",
    "answer_hi": "UIKit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which modern UI framework uses Swift?",
    "question_hi": "कौन सा मॉडर्न UI फ्रेमवर्क Swift का उपयोग करता है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "SpriteKit"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "SpriteKit"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which property wrapper stores data persistently?",
    "question_hi": "डेटा को पर्सिस्टेंट स्टोर करने वाला प्रॉपर्टी रैपर कौन सा है?",
    "options_en": ["@AppStorage", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@AppStorage", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@AppStorage",
    "answer_hi": "@AppStorage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which property wrapper manages view state?",
    "question_hi": "व्यू स्टेट मैनेज करने वाला प्रॉपर्टी रैपर कौन सा है?",
    "options_en": ["@State", "@Binding", "@Published", "@Environment"],
    "options_hi": ["@State", "@Binding", "@Published", "@Environment"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which wrapper shares state between views?",
    "question_hi": "व्यूज़ के बीच स्टेट शेयर करने वाला रैपर कौन सा है?",
    "options_en": ["@Binding", "@State", "@ObservedObject", "@StateObject"],
    "options_hi": ["@Binding", "@State", "@ObservedObject", "@StateObject"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which wrapper publishes changes?",
    "question_hi": "चेंज को पब्लिश करने वाला रैपर कौन सा है?",
    "options_en": ["@Published", "@State", "@Binding", "@Environment"],
    "options_hi": ["@Published", "@State", "@Binding", "@Environment"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which protocol works with @Published?",
    "question_hi": "@Published किस प्रोटोकॉल के साथ काम करता है?",
    "options_en": ["ObservableObject", "Codable", "Equatable", "Sendable"],
    "options_hi": ["ObservableObject", "Codable", "Equatable", "Sendable"],
    "answer_en": "ObservableObject",
    "answer_hi": "ObservableObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which wrapper owns observable object?",
    "question_hi": "Observable object का ओनर कौन सा रैपर होता है?",
    "options_en": ["@StateObject", "@ObservedObject", "@Binding", "@State"],
    "options_hi": ["@StateObject", "@ObservedObject", "@Binding", "@State"],
    "answer_en": "@StateObject",
    "answer_hi": "@StateObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which wrapper injects environment values?",
    "question_hi": "एनवायरनमेंट वैल्यू इंजेक्ट करने वाला रैपर कौन सा है?",
    "options_en": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@Environment",
    "answer_hi": "@Environment",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword defines actor isolation?",
    "question_hi": "एक्टर आइसोलेशन के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["actor", "async", "await", "isolated"],
    "options_hi": ["actor", "async", "await", "isolated"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which feature avoids race conditions?",
    "question_hi": "रेस कंडीशन से बचाने वाला फीचर कौन सा है?",
    "options_en": ["Actors", "Threads", "Locks", "Queues"],
    "options_hi": ["Actors", "Threads", "Locks", "Queues"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword suspends execution?",
    "question_hi": "एक्ज़ीक्यूशन सस्पेंड करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["await", "async", "pause", "wait"],
    "options_hi": ["await", "async", "pause", "wait"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which concurrency feature launches new task?",
    "question_hi": "नया टास्क लॉन्च करने वाला फीचर कौन सा है?",
    "options_en": ["Task", "Thread", "DispatchQueue", "Operation"],
    "options_hi": ["Task", "Thread", "DispatchQueue", "Operation"],
    "answer_en": "Task",
    "answer_hi": "Task",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which attribute confines code to main thread?",
    "question_hi": "कोड को मेन थ्रेड तक सीमित करने वाला एट्रिब्यूट कौन सा है?",
    "options_en": ["@MainActor", "@main", "@actor", "@thread"],
    "options_hi": ["@MainActor", "@main", "@actor", "@thread"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword allows function overloading?",
    "question_hi": "फंक्शन ओवरलोडिंग Swift में कैसे संभव है?",
    "options_en": ["Same name, different parameters", "override", "overload", "extend"],
    "options_hi": ["Same name, different parameters", "override", "overload", "extend"],
    "answer_en": "Same name, different parameters",
    "answer_hi": "Same name, different parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift feature supports default parameter values?",
    "question_hi": "डिफॉल्ट पैरामीटर वैल्यू किस फीचर से मिलती है?",
    "options_en": ["Function parameters", "Closures", "Protocols", "Enums"],
    "options_hi": ["Function parameters", "Closures", "Protocols", "Enums"],
    "answer_en": "Function parameters",
    "answer_hi": "Function parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword allows variadic parameters?",
    "question_hi": "वैरिएडिक पैरामीटर के लिए कौन सा सिंबल है?",
    "options_en": ["...", "..<", "*", "?"],
    "options_hi": ["...", "..<", "*", "?"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift feature supports named parameters?",
    "question_hi": "नेम्ड पैरामीटर किस फीचर से सपोर्ट होते हैं?",
    "options_en": ["External labels", "Closures", "Tuples", "Enums"],
    "options_hi": ["External labels", "Closures", "Tuples", "Enums"],
    "answer_en": "External labels",
    "answer_hi": "External labels",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword omits external parameter name?",
    "question_hi": "एक्सटर्नल पैरामीटर नेम हटाने के लिए कौन सा सिंबल है?",
    "options_en": ["_", "-", "nil", "*"],
    "options_hi": ["_", "-", "nil", "*"],
    "answer_en": "_",
    "answer_hi": "_",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which collection type is unordered?",
    "question_hi": "कौन सा कलेक्शन अनऑर्डर्ड होता है?",
    "options_en": ["Set", "Array", "Tuple", "String"],
    "options_hi": ["Set", "Array", "Tuple", "String"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which collection provides fast lookup?",
    "question_hi": "फास्ट लुकअप किस कलेक्शन में होता है?",
    "options_en": ["Dictionary", "Array", "Tuple", "String"],
    "options_hi": ["Dictionary", "Array", "Tuple", "String"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which keyword iterates dictionary keys?",
    "question_hi": "डिक्शनरी कीज़ पर इटरेट करने के लिए क्या उपयोग होता है?",
    "options_en": ["keys", "values", "items", "entries"],
    "options_hi": ["keys", "values", "items", "entries"],
    "answer_en": "keys",
    "answer_hi": "keys",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which keyword iterates dictionary values?",
    "question_hi": "डिक्शनरी वैल्यूज़ पर इटरेट करने के लिए क्या उपयोग होता है?",
    "options_en": ["values", "keys", "items", "pairs"],
    "options_hi": ["values", "keys", "items", "pairs"],
    "answer_en": "values",
    "answer_hi": "values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which Swift feature supports subscripts?",
    "question_hi": "सबस्क्रिप्ट किस फीचर में सपोर्ट होता है?",
    "options_en": ["Collections", "Protocols", "Actors", "Enums"],
    "options_hi": ["Collections", "Protocols", "Actors", "Enums"],
    "answer_en": "Collections",
    "answer_hi": "Collections",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which keyword defines custom subscript?",
    "question_hi": "कस्टम सबस्क्रिप्ट के लिए कौन सा कीवर्ड है?",
    "options_en": ["subscript", "index", "get", "set"],
    "options_hi": ["subscript", "index", "get", "set"],
    "answer_en": "subscript",
    "answer_hi": "subscript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which feature supports operator overloading?",
    "question_hi": "ऑपरेटर ओवरलोडिंग किससे सपोर्ट होती है?",
    "options_en": ["Functions", "Classes", "Protocols", "Actors"],
    "options_hi": ["Functions", "Classes", "Protocols", "Actors"],
    "answer_en": "Functions",
    "answer_hi": "Functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which keyword declares prefix operator?",
    "question_hi": "प्रीफिक्स ऑपरेटर डिक्लेयर करने के लिए क्या उपयोग होता है?",
    "options_en": ["prefix", "infix", "postfix", "operator"],
    "options_hi": ["prefix", "infix", "postfix", "operator"],
    "answer_en": "prefix",
    "answer_hi": "prefix",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which keyword declares postfix operator?",
    "question_hi": "पोस्टफिक्स ऑपरेटर के लिए कौन सा कीवर्ड है?",
    "options_en": ["postfix", "prefix", "infix", "operator"],
    "options_hi": ["postfix", "prefix", "infix", "operator"],
    "answer_en": "postfix",
    "answer_hi": "postfix",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which keyword declares infix operator?",
    "question_hi": "इनफिक्स ऑपरेटर के लिए कौन सा कीवर्ड है?",
    "options_en": ["infix", "prefix", "postfix", "operator"],
    "options_hi": ["infix", "prefix", "postfix", "operator"],
    "answer_en": "infix",
    "answer_hi": "infix",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which Swift feature supports lazy evaluation?",
    "question_hi": "लेज़ी इवैल्युएशन किससे सपोर्ट होता है?",
    "options_en": ["lazy", "static", "final", "weak"],
    "options_hi": ["lazy", "static", "final", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which property wrapper delays computation?",
    "question_hi": "कम्प्यूटेशन को डिले करने वाला फीचर कौन सा है?",
    "options_en": ["lazy", "@State", "@Binding", "@Published"],
    "options_hi": ["lazy", "@State", "@Binding", "@Published"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which Swift feature improves performance by value semantics?",
    "question_hi": "वैल्यू सेमांटिक्स से परफॉर्मेंस सुधारने वाला फीचर कौन सा है?",
    "options_en": ["Structs", "Classes", "Actors", "Protocols"],
    "options_hi": ["Structs", "Classes", "Actors", "Protocols"],
    "answer_en": "Structs",
    "answer_hi": "Structs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which keyword enforces reference counting?",
    "question_hi": "रेफरेंस काउंटिंग को कौन लागू करता है?",
    "options_en": ["ARC", "GC", "Heap", "Stack"],
    "options_hi": ["ARC", "GC", "Heap", "Stack"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which reference type avoids strong cycle?",
    "question_hi": "स्ट्रॉन्ग साइकिल से बचाने वाला रेफरेंस कौन सा है?",
    "options_en": ["weak", "strong", "static", "lazy"],
    "options_hi": ["weak", "strong", "static", "lazy"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which Swift feature supports memory safety?",
    "question_hi": "मेमोरी सेफ्टी किस फीचर से मिलती है?",
    "options_en": ["ARC", "Pointers", "Threads", "Locks"],
    "options_hi": ["ARC", "Pointers", "Threads", "Locks"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which keyword marks unsafe pointer?",
    "question_hi": "अनसेफ पॉइंटर को कौन सा टाइप दर्शाता है?",
    "options_en": ["UnsafePointer", "RawPointer", "VoidPointer", "AnyPointer"],
    "options_hi": ["UnsafePointer", "RawPointer", "VoidPointer", "AnyPointer"],
    "answer_en": "UnsafePointer",
    "answer_hi": "UnsafePointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which Swift feature supports C interoperability?",
    "question_hi": "C इंटरऑपरेबिलिटी किससे मिलती है?",
    "options_en": ["Clang", "LLVM", "Xcode", "SwiftUI"],
    "options_hi": ["Clang", "LLVM", "Xcode", "SwiftUI"],
    "answer_en": "Clang",
    "answer_hi": "Clang",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which keyword imports C headers?",
    "question_hi": "C हेडर इम्पोर्ट करने के लिए क्या उपयोग होता है?",
    "options_en": ["Bridging Header", "import C", "include", "use"],
    "options_hi": ["Bridging Header", "import C", "include", "use"],
    "answer_en": "Bridging Header",
    "answer_hi": "Bridging Header",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which Swift feature improves safety over Objective-C?",
    "question_hi": "Objective-C की तुलना में Swift को सेफ क्या बनाता है?",
    "options_en": ["Optionals", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Optionals", "Pointers", "Macros", "Selectors"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which keyword enables pattern matching?",
    "question_hi": "पैटर्न मैचिंग सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["switch", "if", "guard", "while"],
    "options_hi": ["switch", "if", "guard", "while"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which operator matches ranges?",
    "question_hi": "रेंज मैच करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["~=", "==", "!=", "<"],
    "options_hi": ["~=", "==", "!=", "<"],
    "answer_en": "~=",
    "answer_hi": "~=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which Swift feature supports exhaustive checks?",
    "question_hi": "एक्सहॉस्टिव चेक किसमें जरूरी होता है?",
    "options_en": ["Enum", "Class", "Struct", "Protocol"],
    "options_hi": ["Enum", "Class", "Struct", "Protocol"],
    "answer_en": "Enum",
    "answer_hi": "Enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which enum feature stores associated values?",
    "question_hi": "Enum में वैल्यू स्टोर करने का फीचर कौन सा है?",
    "options_en": ["Associated values", "Raw values", "Cases", "Tags"],
    "options_hi": ["Associated values", "Raw values", "Cases", "Tags"],
    "answer_en": "Associated values",
    "answer_hi": "Associated values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which enum feature stores fixed values?",
    "question_hi": "Enum में फिक्स्ड वैल्यू स्टोर करने का फीचर कौन सा है?",
    "options_en": ["Raw values", "Associated values", "Cases", "Keys"],
    "options_hi": ["Raw values", "Associated values", "Cases", "Keys"],
    "answer_en": "Raw values",
    "answer_hi": "Raw values",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which Swift feature supports namespaces?",
    "question_hi": "नेमस्पेस की तरह कौन सा फीचर काम करता है?",
    "options_en": ["Enum", "Struct", "Class", "Protocol"],
    "options_hi": ["Enum", "Struct", "Class", "Protocol"],
    "answer_en": "Enum",
    "answer_hi": "Enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which keyword prevents method overriding?",
    "question_hi": "मेथड ओवरराइड रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which keyword restricts inheritance?",
    "question_hi": "इनहेरिटेंस को सीमित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "open", "public", "internal"],
    "options_hi": ["final", "open", "public", "internal"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which keyword allows subclassing outside module?",
    "question_hi": "मॉड्यूल के बाहर सबक्लासिंग किससे संभव है?",
    "options_en": ["open", "public", "internal", "final"],
    "options_hi": ["open", "public", "internal", "final"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which keyword allows override outside module?",
    "question_hi": "मॉड्यूल के बाहर ओवरराइड की अनुमति कौन देता है?",
    "options_en": ["open", "public", "internal", "private"],
    "options_hi": ["open", "public", "internal", "private"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which Swift feature supports testing internal APIs?",
    "question_hi": "इंटरनल API टेस्टिंग किससे संभव होती है?",
    "options_en": ["@testable", "@available", "@main", "@objc"],
    "options_hi": ["@testable", "@available", "@main", "@objc"],
    "answer_en": "@testable",
    "answer_hi": "@testable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword marks deprecated function?",
    "question_hi": "डिप्रिकेटेड फंक्शन को कौन सा एट्रिब्यूट मार्क करता है?",
    "options_en": ["@available", "@deprecated", "@remove", "@old"],
    "options_hi": ["@available", "@deprecated", "@remove", "@old"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which Swift feature supports documentation comments?",
    "question_hi": "डॉक्यूमेंटेशन कमेंट किससे सपोर्ट होता है?",
    "options_en": ["///", "//", "/* */", "#"],
    "options_hi": ["///", "//", "/* */", "#"],
    "answer_en": "///",
    "answer_hi": "///",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which tool generates Swift documentation?",
    "question_hi": "Swift डॉक्यूमेंटेशन जनरेट करने वाला टूल कौन सा है?",
    "options_en": ["Xcode", "DocC", "SwiftLint", "LLVM"],
    "options_hi": ["Xcode", "DocC", "SwiftLint", "LLVM"],
    "answer_en": "DocC",
    "answer_hi": "DocC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which tool enforces Swift style rules?",
    "question_hi": "Swift स्टाइल रूल्स लागू करने वाला टूल कौन सा है?",
    "options_en": ["SwiftLint", "DocC", "Xcode", "Clang"],
    "options_hi": ["SwiftLint", "DocC", "Xcode", "Clang"],
    "answer_en": "SwiftLint",
    "answer_hi": "SwiftLint",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which Swift feature supports compile-time checks?",
    "question_hi": "कम्पाइल टाइम चेक किससे होते हैं?",
    "options_en": ["Strong typing", "Dynamic typing", "Reflection", "Macros"],
    "options_hi": ["Strong typing", "Dynamic typing", "Reflection", "Macros"],
    "answer_en": "Strong typing",
    "answer_hi": "Strong typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which Swift feature supports type inference?",
    "question_hi": "टाइप इनफेरेंस किससे मिलता है?",
    "options_en": ["Compiler", "Runtime", "Framework", "Debugger"],
    "options_hi": ["Compiler", "Runtime", "Framework", "Debugger"],
    "answer_en": "Compiler",
    "answer_hi": "Compiler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which Swift feature reduces boilerplate code?",
    "question_hi": "बॉयलरप्लेट कोड कम करने वाला फीचर कौन सा है?",
    "options_en": ["Type inference", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Type inference", "Pointers", "Macros", "Selectors"],
    "answer_en": "Type inference",
    "answer_hi": "Type inference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Swift feature supports safety with performance?",
    "question_hi": "सेफ्टी के साथ परफॉर्मेंस कौन देता है?",
    "options_en": ["Swift", "Objective-C", "C", "Java"],
    "options_hi": ["Swift", "Objective-C", "C", "Java"],
    "answer_en": "Swift",
    "answer_hi": "Swift",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which keyword defines program entry in SwiftUI app?",
    "question_hi": "SwiftUI ऐप में प्रोग्राम एंट्री कौन सा कीवर्ड तय करता है?",
    "options_en": ["@main", "main()", "@App", "@Start"],
    "options_hi": ["@main", "main()", "@App", "@Start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which Swift feature supports previews?",
    "question_hi": "प्रीव्यू सपोर्ट कौन सा फीचर देता है?",
    "options_en": ["SwiftUI", "UIKit", "Foundation", "CoreData"],
    "options_hi": ["SwiftUI", "UIKit", "Foundation", "CoreData"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which attribute enables live preview?",
    "question_hi": "लाइव प्रीव्यू के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["#Preview", "@Preview", "@main", "@available"],
    "options_hi": ["#Preview", "@Preview", "@main", "@available"],
    "answer_en": "#Preview",
    "answer_hi": "#Preview",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which Swift feature supports reactive UI?",
    "question_hi": "रिएक्टिव UI किससे सपोर्ट होता है?",
    "options_en": ["State-driven views", "Delegates", "Callbacks", "Selectors"],
    "options_hi": ["State-driven views", "Delegates", "Callbacks", "Selectors"],
    "answer_en": "State-driven views",
    "answer_hi": "State-driven views",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which SwiftUI concept redraws view?",
    "question_hi": "SwiftUI में व्यू को दोबारा ड्रॉ कौन करता है?",
    "options_en": ["State change", "Loop", "Timer", "Thread"],
    "options_hi": ["State change", "Loop", "Timer", "Thread"],
    "answer_en": "State change",
    "answer_hi": "State change",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which SwiftUI protocol defines UI body?",
    "question_hi": "UI बॉडी किस प्रोटोकॉल में डिफाइन होती है?",
    "options_en": ["View", "Scene", "App", "Window"],
    "options_hi": ["View", "Scene", "App", "Window"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which property returns UI body?",
    "question_hi": "UI बॉडी रिटर्न करने वाली प्रॉपर्टी कौन सी है?",
    "options_en": ["body", "view", "content", "layout"],
    "options_hi": ["body", "view", "content", "layout"],
    "answer_en": "body",
    "answer_hi": "body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which SwiftUI container stacks views vertically?",
    "question_hi": "व्यू को वर्टिकली स्टैक करने वाला कंटेनर कौन सा है?",
    "options_en": ["VStack", "HStack", "ZStack", "List"],
    "options_hi": ["VStack", "HStack", "ZStack", "List"],
    "answer_en": "VStack",
    "answer_hi": "VStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which SwiftUI container stacks views horizontally?",
    "question_hi": "व्यू को हॉरिजॉन्टली स्टैक करने वाला कंटेनर कौन सा है?",
    "options_en": ["HStack", "VStack", "ZStack", "Grid"],
    "options_hi": ["HStack", "VStack", "ZStack", "Grid"],
    "answer_en": "HStack",
    "answer_hi": "HStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which SwiftUI container overlaps views?",
    "question_hi": "व्यू को ओवरलैप करने वाला कंटेनर कौन सा है?",
    "options_en": ["ZStack", "VStack", "HStack", "List"],
    "options_hi": ["ZStack", "VStack", "HStack", "List"],
    "answer_en": "ZStack",
    "answer_hi": "ZStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which SwiftUI view displays scrollable list?",
    "question_hi": "स्क्रॉलेबल लिस्ट दिखाने वाला SwiftUI व्यू कौन सा है?",
    "options_en": ["List", "ScrollView", "Table", "Collection"],
    "options_hi": ["List", "ScrollView", "Table", "Collection"],
    "answer_en": "List",
    "answer_hi": "List",
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