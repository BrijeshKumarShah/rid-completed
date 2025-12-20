const questions = [
  {
    "num": 1,
    "question_en": "Which Swift keyword is used to define a protocol?",
    "question_hi": "Swift में प्रोटोकॉल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["protocol", "interface", "delegate", "implements"],
    "options_hi": ["protocol", "interface", "delegate", "implements"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to adopt a protocol?",
    "question_hi": "किसी प्रोटोकॉल को अपनाने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "implements", "extends", "adopt"],
    "options_hi": [":", "implements", "extends", "adopt"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Swift collection stores unique values?",
    "question_hi": "Swift में कौन सा कलेक्शन यूनिक वैल्यू स्टोर करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
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
    "num": 5,
    "question_en": "Which keyword is used to extend existing type?",
    "question_hi": "किसी मौजूदा टाइप को बढ़ाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["extension", "expand", "inherit", "augment"],
    "options_hi": ["extension", "expand", "inherit", "augment"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which Swift feature manages memory automatically?",
    "question_hi": "Swift में मेमोरी अपने आप मैनेज करने वाला फीचर कौन सा है?",
    "options_en": ["ARC", "GC", "Manual", "Heap"],
    "options_hi": ["ARC", "GC", "Manual", "Heap"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which reference increases retain count?",
    "question_hi": "कौन सा रेफरेंस रिटेन काउंट बढ़ाता है?",
    "options_en": ["strong", "weak", "unowned", "lazy"],
    "options_hi": ["strong", "weak", "unowned", "lazy"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which reference does not increase retain count?",
    "question_hi": "कौन सा रेफरेंस रिटेन काउंट नहीं बढ़ाता?",
    "options_en": ["weak", "strong", "static", "final"],
    "options_hi": ["weak", "strong", "static", "final"],
    "answer_en": "weak",
    "answer_hi": "weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift keyword creates lazy property?",
    "question_hi": "लेज़ी प्रॉपर्टी बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["lazy", "static", "final", "weak"],
    "options_hi": ["lazy", "static", "final", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used for error handling?",
    "question_hi": "एरर हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["throw", "error", "catcher", "handle"],
    "options_hi": ["throw", "error", "catcher", "handle"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword handles thrown error?",
    "question_hi": "थ्रो किए गए एरर को हैंडल करने के लिए क्या उपयोग होता है?",
    "options_en": ["catch", "handle", "fix", "resolve"],
    "options_hi": ["catch", "handle", "fix", "resolve"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword calls throwing function?",
    "question_hi": "थ्रो करने वाले फंक्शन को कॉल करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["try", "do", "catch", "throw"],
    "options_hi": ["try", "do", "catch", "throw"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword ignores error?",
    "question_hi": "एरर को इग्नोर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["try?", "try!", "ignore", "skip"],
    "options_hi": ["try?", "try!", "ignore", "skip"],
    "answer_en": "try?",
    "answer_hi": "try?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift statement ensures early exit?",
    "question_hi": "अर्ली एग्ज़िट के लिए कौन सा स्टेटमेंट है?",
    "options_en": ["guard", "if", "switch", "loop"],
    "options_hi": ["guard", "if", "switch", "loop"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used for pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["switch", "if", "guard", "case"],
    "options_hi": ["switch", "if", "guard", "case"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword defines enum case?",
    "question_hi": "एनम केस डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["case", "enum", "value", "option"],
    "options_hi": ["case", "enum", "value", "option"],
    "answer_en": "case",
    "answer_hi": "case",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which enum can store associated values?",
    "question_hi": "कौन सा एनम एसोसिएटेड वैल्यू स्टोर कर सकता है?",
    "options_en": ["Swift enum", "C enum", "Raw enum", "Static enum"],
    "options_hi": ["Swift enum", "C enum", "Raw enum", "Static enum"],
    "answer_en": "Swift enum",
    "answer_hi": "Swift enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which enum supports raw values?",
    "question_hi": "रॉ वैल्यू सपोर्ट करने वाला एनम कौन सा है?",
    "options_en": ["RawValue enum", "Tuple enum", "Generic enum", "Lazy enum"],
    "options_hi": ["RawValue enum", "Tuple enum", "Generic enum", "Lazy enum"],
    "answer_en": "RawValue enum",
    "answer_hi": "RawValue enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which typealias creates type shortcut?",
    "question_hi": "टाइप का शॉर्टकट बनाने के लिए क्या उपयोग होता है?",
    "options_en": ["typealias", "alias", "typedef", "shortcut"],
    "options_hi": ["typealias", "alias", "typedef", "shortcut"],
    "answer_en": "typealias",
    "answer_hi": "typealias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Swift feature supports concurrency?",
    "question_hi": "कनकरेंसी के लिए Swift का कौन सा फीचर है?",
    "options_en": ["async/await", "thread", "queue", "lock"],
    "options_hi": ["async/await", "thread", "queue", "lock"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword marks async function?",
    "question_hi": "एसिंक फंक्शन को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["async", "await", "task", "queue"],
    "options_hi": ["async", "await", "task", "queue"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "एसिंक रिज़ल्ट का इंतज़ार करने के लिए क्या उपयोग होता है?",
    "options_en": ["await", "async", "wait", "pause"],
    "options_hi": ["await", "async", "wait", "pause"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Swift type handles concurrent tasks?",
    "question_hi": "कनकरेंट टास्क संभालने के लिए कौन सा टाइप है?",
    "options_en": ["Task", "Thread", "Queue", "Actor"],
    "options_hi": ["Task", "Thread", "Queue", "Actor"],
    "answer_en": "Task",
    "answer_hi": "Task",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Swift feature protects shared mutable state?",
    "question_hi": "शेयर्ड म्यूटेबल स्टेट को सुरक्षित रखने वाला फीचर कौन सा है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword defines actor?",
    "question_hi": "एक्टर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["actor", "class", "struct", "protocol"],
    "options_hi": ["actor", "class", "struct", "protocol"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which SwiftUI structure represents UI?",
    "question_hi": "SwiftUI में UI को कौन सा स्ट्रक्चर दर्शाता है?",
    "options_en": ["View", "Screen", "Layout", "Window"],
    "options_hi": ["View", "Screen", "Layout", "Window"],
    "answer_en": "View",
    "answer_hi": "View",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which property wrapper stores state?",
    "question_hi": "स्टेट स्टोर करने के लिए कौन सा प्रॉपर्टी रैपर है?",
    "options_en": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "options_hi": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which property wrapper shares state?",
    "question_hi": "स्टेट शेयर करने के लिए कौन सा रैपर है?",
    "options_en": ["@Binding", "@State", "@Published", "@MainActor"],
    "options_hi": ["@Binding", "@State", "@Published", "@MainActor"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which wrapper publishes changes?",
    "question_hi": "चेंज पब्लिश करने वाला रैपर कौन सा है?",
    "options_en": ["@Published", "@State", "@Binding", "@SceneStorage"],
    "options_hi": ["@Published", "@State", "@Binding", "@SceneStorage"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift feature improves safety?",
    "question_hi": "सेफ्टी बढ़ाने वाला Swift फीचर कौन सा है?",
    "options_en": ["Optionals", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Optionals", "Pointers", "Macros", "Selectors"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which operator unwraps optional forcefully?",
    "question_hi": "ऑप्शनल को ज़बरदस्ती अनरैप करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which operator provides default value?",
    "question_hi": "डिफ़ॉल्ट वैल्यू देने वाला ऑपरेटर कौन सा है?",
    "options_en": ["??", "?", "!", ":"],
    "options_hi": ["??", "?", "!", ":"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword creates computed property?",
    "question_hi": "कम्प्यूटेड प्रॉपर्टी किससे बनती है?",
    "options_en": ["get/set", "lazy", "static", "final"],
    "options_hi": ["get/set", "lazy", "static", "final"],
    "answer_en": "get/set",
    "answer_hi": "get/set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which block runs before value change?",
    "question_hi": "वैल्यू बदलने से पहले कौन सा ब्लॉक चलता है?",
    "options_en": ["willSet", "didSet", "get", "set"],
    "options_hi": ["willSet", "didSet", "get", "set"],
    "answer_en": "willSet",
    "answer_hi": "willSet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which block runs after value change?",
    "question_hi": "वैल्यू बदलने के बाद कौन सा ब्लॉक चलता है?",
    "options_en": ["didSet", "willSet", "get", "set"],
    "options_hi": ["didSet", "willSet", "get", "set"],
    "answer_en": "didSet",
    "answer_hi": "didSet",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
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
    "num": 37,
    "question_en": "Which Swift access level is most restrictive?",
    "question_hi": "सबसे ज़्यादा रेस्ट्रिक्टिव एक्सेस लेवल कौन सा है?",
    "options_en": ["private", "fileprivate", "internal", "public"],
    "options_hi": ["private", "fileprivate", "internal", "public"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which access level is default?",
    "question_hi": "डिफ़ॉल्ट एक्सेस लेवल कौन सा होता है?",
    "options_en": ["internal", "private", "public", "open"],
    "options_hi": ["internal", "private", "public", "open"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword allows subclassing outside module?",
    "question_hi": "मॉड्यूल के बाहर सबक्लासिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["open", "public", "internal", "final"],
    "options_hi": ["open", "public", "internal", "final"],
    "answer_en": "open",
    "answer_hi": "open",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift type is immutable?",
    "question_hi": "कौन सा Swift टाइप इम्यूटेबल होता है?",
    "options_en": ["let constant", "var variable", "class", "actor"],
    "options_hi": ["let constant", "var variable", "class", "actor"],
    "answer_en": "let constant",
    "answer_hi": "let constant",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which function has no return value?",
    "question_hi": "जिस फंक्शन का कोई रिटर्न नहीं होता उसे क्या कहते हैं?",
    "options_en": ["Void function", "Optional function", "Lazy function", "Static function"],
    "options_hi": ["Void function", "Optional function", "Lazy function", "Static function"],
    "answer_en": "Void function",
    "answer_hi": "Void function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword indicates no return value?",
    "question_hi": "नो रिटर्न वैल्यू दिखाने के लिए कौन सा टाइप है?",
    "options_en": ["Void", "nil", "None", "Empty"],
    "options_hi": ["Void", "nil", "None", "Empty"],
    "answer_en": "Void",
    "answer_hi": "Void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Swift feature enables chaining?",
    "question_hi": "चेनिंग की सुविधा कौन सा फीचर देता है?",
    "options_en": ["Optional chaining", "Lazy loading", "ARC", "Concurrency"],
    "options_hi": ["Optional chaining", "Lazy loading", "ARC", "Concurrency"],
    "answer_en": "Optional chaining",
    "answer_hi": "Optional chaining",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator is used in optional chaining?",
    "question_hi": "ऑप्शनल चेनिंग में कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?", "!", "??", ":"],
    "options_hi": ["?", "!", "??", ":"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift feature allows multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस की अनुमति कौन देता है?",
    "options_en": ["Protocols", "Classes", "Structs", "Enums"],
    "options_hi": ["Protocols", "Classes", "Structs", "Enums"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword marks deinitializer?",
    "question_hi": "डीइनिशियलाइज़र के लिए कौन सा कीवर्ड है?",
    "options_en": ["deinit", "destroy", "finalize", "release"],
    "options_hi": ["deinit", "destroy", "finalize", "release"],
    "answer_en": "deinit",
    "answer_hi": "deinit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift keyword enables inheritance?",
    "question_hi": "इनहेरिटेंस को सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["class", "struct", "enum", "actor"],
    "options_hi": ["class", "struct", "enum", "actor"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Swift type cannot be inherited?",
    "question_hi": "कौन सा Swift टाइप इनहेरिट नहीं किया जा सकता?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift feature supports reactive programming?",
    "question_hi": "रिएक्टिव प्रोग्रामिंग के लिए कौन सा फ्रेमवर्क है?",
    "options_en": ["Combine", "UIKit", "Foundation", "CoreData"],
    "options_hi": ["Combine", "UIKit", "Foundation", "CoreData"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which SwiftUI modifier adds padding?",
    "question_hi": "SwiftUI में पैडिंग जोड़ने के लिए कौन सा मॉडिफायर है?",
    "options_en": [".padding()", ".margin()", ".space()", ".inset()"],
    "options_hi": [".padding()", ".margin()", ".space()", ".inset()"],
    "answer_en": ".padding()",
    "answer_hi": ".padding()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which SwiftUI modifier changes text color?",
    "question_hi": "टेक्स्ट का रंग बदलने के लिए कौन सा मॉडिफायर है?",
    "options_en": [".foregroundColor()", ".textColor()", ".color()", ".fontColor()"],
    "options_hi": [".foregroundColor()", ".textColor()", ".color()", ".fontColor()"],
    "answer_en": ".foregroundColor()",
    "answer_hi": ".foregroundColor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which SwiftUI view stacks vertically?",
    "question_hi": "वर्टिकली स्टैक करने वाला व्यू कौन सा है?",
    "options_en": ["VStack", "HStack", "ZStack", "List"],
    "options_hi": ["VStack", "HStack", "ZStack", "List"],
    "answer_en": "VStack",
    "answer_hi": "VStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which SwiftUI view stacks horizontally?",
    "question_hi": "हॉरिज़ॉन्टली स्टैक करने वाला व्यू कौन सा है?",
    "options_en": ["HStack", "VStack", "ZStack", "Grid"],
    "options_hi": ["HStack", "VStack", "ZStack", "Grid"],
    "answer_en": "HStack",
    "answer_hi": "HStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which SwiftUI view overlaps views?",
    "question_hi": "व्यू को ओवरलैप करने वाला SwiftUI व्यू कौन सा है?",
    "options_en": ["ZStack", "VStack", "HStack", "List"],
    "options_hi": ["ZStack", "VStack", "HStack", "List"],
    "answer_en": "ZStack",
    "answer_hi": "ZStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which SwiftUI view displays list?",
    "question_hi": "लिस्ट दिखाने के लिए कौन सा SwiftUI व्यू है?",
    "options_en": ["List", "Table", "Scroll", "Group"],
    "options_hi": ["List", "Table", "Scroll", "Group"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which SwiftUI view enables scrolling?",
    "question_hi": "स्क्रॉलिंग के लिए कौन सा व्यू है?",
    "options_en": ["ScrollView", "List", "Stack", "Grid"],
    "options_hi": ["ScrollView", "List", "Stack", "Grid"],
    "answer_en": "ScrollView",
    "answer_hi": "ScrollView",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which Swift keyword defines main entry?",
    "question_hi": "मेन एंट्री पॉइंट के लिए कौन सा कीवर्ड है?",
    "options_en": ["@main", "main()", "App", "start"],
    "options_hi": ["@main", "main()", "App", "start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which SwiftUI protocol represents app?",
    "question_hi": "ऐप को रिप्रेज़ेंट करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["App", "Scene", "View", "Window"],
    "options_hi": ["App", "Scene", "View", "Window"],
    "answer_en": "App",
    "answer_hi": "App",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which scene creates window?",
    "question_hi": "विंडो बनाने वाला सीन कौन सा है?",
    "options_en": ["WindowGroup", "SceneGroup", "MainScene", "AppScene"],
    "options_hi": ["WindowGroup", "SceneGroup", "MainScene", "AppScene"],
    "answer_en": "WindowGroup",
    "answer_hi": "WindowGroup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which Swift feature enables immutability?",
    "question_hi": "इम्यूटेबिलिटी को सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["let", "var", "static", "lazy"],
    "options_hi": ["let", "var", "static", "lazy"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which Swift keyword exits loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड है?",
    "options_en": ["break", "stop", "exit", "return"],
    "options_hi": ["break", "stop", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which keyword skips iteration?",
    "question_hi": "इटरेशन स्किप करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["continue", "skip", "pass", "next"],
    "options_hi": ["continue", "skip", "pass", "next"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which Swift loop checks condition first?",
    "question_hi": "कंडीशन पहले चेक करने वाला लूप कौन सा है?",
    "options_en": ["while", "repeat-while", "for-in", "loop"],
    "options_hi": ["while", "repeat-while", "for-in", "loop"],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which loop runs at least once?",
    "question_hi": "कम से कम एक बार चलने वाला लूप कौन सा है?",
    "options_en": ["repeat-while", "while", "for", "if"],
    "options_hi": ["repeat-while", "while", "for", "if"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "फंक्शनल प्रोग्रामिंग सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Closures", "Actors", "Classes", "Enums"],
    "options_hi": ["Closures", "Actors", "Classes", "Enums"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which function transforms collection?",
    "question_hi": "कलेक्शन को ट्रांसफॉर्म करने वाला फंक्शन कौन सा है?",
    "options_en": ["map", "filter", "reduce", "forEach"],
    "options_hi": ["map", "filter", "reduce", "forEach"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which function filters elements?",
    "question_hi": "एलिमेंट फ़िल्टर करने वाला फंक्शन कौन सा है?",
    "options_en": ["filter", "map", "reduce", "sort"],
    "options_hi": ["filter", "map", "reduce", "sort"],
    "answer_en": "filter",
    "answer_hi": "filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which function combines values?",
    "question_hi": "वैल्यू को कंबाइन करने वाला फंक्शन कौन सा है?",
    "options_en": ["reduce", "map", "filter", "zip"],
    "options_hi": ["reduce", "map", "filter", "zip"],
    "answer_en": "reduce",
    "answer_hi": "reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which Swift function sorts collection?",
    "question_hi": "कलेक्शन को सॉर्ट करने वाला फंक्शन कौन सा है?",
    "options_en": ["sorted()", "sort()", "order()", "arrange()"],
    "options_hi": ["sorted()", "sort()", "order()", "arrange()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which function mutates original array?",
    "question_hi": "ओरिजिनल ऐरे को बदलने वाला फंक्शन कौन सा है?",
    "options_en": ["sort()", "sorted()", "map()", "filter()"],
    "options_hi": ["sort()", "sorted()", "map()", "filter()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which Swift keyword marks unavailable API?",
    "question_hi": "अनअवेलेबल API को मार्क करने के लिए क्या उपयोग होता है?",
    "options_en": ["@available", "@discardableResult", "@objc", "@main"],
    "options_hi": ["@available", "@discardableResult", "@objc", "@main"],
    "answer_en": "@available",
    "answer_hi": "@available",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which attribute ignores unused result?",
    "question_hi": "अनयूज़्ड रिज़ल्ट को इग्नोर करने वाला एट्रिब्यूट कौन सा है?",
    "options_en": ["@discardableResult", "@available", "@objc", "@main"],
    "options_hi": ["@discardableResult", "@available", "@objc", "@main"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which attribute exposes Swift to Objective-C?",
    "question_hi": "Swift को Objective-C में एक्सपोज़ करने वाला एट्रिब्यूट कौन सा है?",
    "options_en": ["@objc", "@main", "@available", "@inline"],
    "options_hi": ["@objc", "@main", "@available", "@inline"],
    "answer_en": "@objc",
    "answer_hi": "@objc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which Swift feature improves performance?",
    "question_hi": "परफॉर्मेंस सुधारने वाला फीचर कौन सा है?",
    "options_en": ["Value types", "Inheritance", "Pointers", "Reflection"],
    "options_hi": ["Value types", "Inheritance", "Pointers", "Reflection"],
    "answer_en": "Value types",
    "answer_hi": "Value types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which Swift keyword inlines function?",
    "question_hi": "फंक्शन इनलाइन करने के लिए कौन सा एट्रिब्यूट है?",
    "options_en": ["@inline", "@inlinable", "@objc", "@main"],
    "options_hi": ["@inline", "@inlinable", "@objc", "@main"],
    "answer_en": "@inlinable",
    "answer_hi": "@inlinable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which Swift feature enables safety at compile time?",
    "question_hi": "कम्पाइल टाइम सेफ्टी देने वाला फीचर कौन सा है?",
    "options_en": ["Type safety", "Runtime checks", "Pointers", "Casting"],
    "options_hi": ["Type safety", "Runtime checks", "Pointers", "Casting"],
    "answer_en": "Type safety",
    "answer_hi": "Type safety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which keyword performs type casting?",
    "question_hi": "टाइप कास्टिंग के लिए कौन सा कीवर्ड है?",
    "options_en": ["as", "is", "cast", "convert"],
    "options_hi": ["as", "is", "cast", "convert"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which keyword checks type?",
    "question_hi": "टाइप चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["is", "as", "typeof", "check"],
    "options_hi": ["is", "as", "typeof", "check"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which cast returns optional?",
    "question_hi": "कौन सा कास्ट ऑप्शनल रिटर्न करता है?",
    "options_en": ["as?", "as!", "as", "is"],
    "options_hi": ["as?", "as!", "as", "is"],
    "answer_en": "as?",
    "answer_hi": "as?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which cast forcefully unwraps?",
    "question_hi": "फोर्सफुली अनरैप करने वाला कास्ट कौन सा है?",
    "options_en": ["as!", "as?", "is", "cast"],
    "options_hi": ["as!", "as?", "is", "cast"],
    "answer_en": "as!",
    "answer_hi": "as!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which Swift feature supports dependency injection?",
    "question_hi": "डिपेंडेंसी इंजेक्शन में सहायक फीचर कौन सा है?",
    "options_en": ["Protocols", "Structs", "Enums", "Actors"],
    "options_hi": ["Protocols", "Structs", "Enums", "Actors"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which keyword marks escaping closure?",
    "question_hi": "एस्केपिंग क्लोज़र को मार्क करने वाला कीवर्ड कौन सा है?",
    "options_en": ["@escaping", "@autoclosure", "@objc", "@main"],
    "options_hi": ["@escaping", "@autoclosure", "@objc", "@main"],
    "answer_en": "@escaping",
    "answer_hi": "@escaping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which attribute delays closure execution?",
    "question_hi": "क्लोज़र एक्ज़ीक्यूशन को डिले करने वाला एट्रिब्यूट कौन सा है?",
    "options_en": ["@autoclosure", "@escaping", "@lazy", "@inline"],
    "options_hi": ["@autoclosure", "@escaping", "@lazy", "@inline"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which Swift feature allows code reuse?",
    "question_hi": "कोड रीयूज़ की सुविधा कौन सा फीचर देता है?",
    "options_en": ["Extensions", "Actors", "Enums", "Tuples"],
    "options_hi": ["Extensions", "Actors", "Enums", "Tuples"],
    "answer_en": "Extensions",
    "answer_hi": "Extensions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which Swift keyword marks main thread?",
    "question_hi": "मेन थ्रेड को मार्क करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["@MainActor", "@main", "@objc", "@available"],
    "options_hi": ["@MainActor", "@main", "@objc", "@available"],
    "answer_en": "@MainActor",
    "answer_hi": "@MainActor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which SwiftUI property wrapper reads environment?",
    "question_hi": "एनवायरनमेंट पढ़ने वाला रैपर कौन सा है?",
    "options_en": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "options_hi": ["@Environment", "@State", "@Binding", "@ObservedObject"],
    "answer_en": "@Environment",
    "answer_hi": "@Environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which wrapper observes object?",
    "question_hi": "ऑब्जेक्ट को ऑब्ज़र्व करने वाला रैपर कौन सा है?",
    "options_en": ["@ObservedObject", "@State", "@Environment", "@Binding"],
    "options_hi": ["@ObservedObject", "@State", "@Environment", "@Binding"],
    "answer_en": "@ObservedObject",
    "answer_hi": "@ObservedObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which wrapper owns observable object?",
    "question_hi": "ऑब्ज़र्वेबल ऑब्जेक्ट को ओन करने वाला रैपर कौन सा है?",
    "options_en": ["@StateObject", "@ObservedObject", "@Environment", "@Binding"],
    "options_hi": ["@StateObject", "@ObservedObject", "@Environment", "@Binding"],
    "answer_en": "@StateObject",
    "answer_hi": "@StateObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Swift feature ensures thread safety?",
    "question_hi": "थ्रेड सेफ्टी सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["Actors", "Classes", "Structs", "Protocols"],
    "options_hi": ["Actors", "Classes", "Structs", "Protocols"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which Swift type supports pattern matching?",
    "question_hi": "पैटर्न मैचिंग सपोर्ट करने वाला टाइप कौन सा है?",
    "options_en": ["Enum", "Class", "Struct", "Actor"],
    "options_hi": ["Enum", "Class", "Struct", "Actor"],
    "answer_en": "Enum",
    "answer_hi": "Enum",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which Swift feature reduces boilerplate?",
    "question_hi": "बॉयलरप्लेट को कम करने वाला फीचर कौन सा है?",
    "options_en": ["Type inference", "Inheritance", "Pointers", "Casting"],
    "options_hi": ["Type inference", "Inheritance", "Pointers", "Casting"],
    "answer_en": "Type inference",
    "answer_hi": "Type inference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which Swift compiler infers type automatically?",
    "question_hi": "टाइप अपने आप समझने वाला कम्पाइलर कौन सा है?",
    "options_en": ["Swift compiler", "LLVM", "GCC", "Clang"],
    "options_hi": ["Swift compiler", "LLVM", "GCC", "Clang"],
    "answer_en": "Swift compiler",
    "answer_hi": "Swift compiler",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which Swift feature supports modern syntax?",
    "question_hi": "मॉडर्न सिंटैक्स सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Concise syntax", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Concise syntax", "Pointers", "Macros", "Selectors"],
    "answer_en": "Concise syntax",
    "answer_hi": "Concise syntax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which Swift version introduced async/await?",
    "question_hi": "async/await किस Swift वर्ज़न में आया?",
    "options_en": ["Swift 5.5", "Swift 4", "Swift 6", "Swift 5.0"],
    "options_hi": ["Swift 5.5", "Swift 4", "Swift 6", "Swift 5.0"],
    "answer_en": "Swift 5.5",
    "answer_hi": "Swift 5.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which Swift framework is used for UI?",
    "question_hi": "UI बनाने के लिए कौन सा Swift फ्रेमवर्क उपयोग होता है?",
    "options_en": ["SwiftUI", "Foundation", "Combine", "CoreData"],
    "options_hi": ["SwiftUI", "Foundation", "Combine", "CoreData"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which Swift framework is used for data persistence?",
    "question_hi": "डेटा स्टोर करने के लिए कौन सा फ्रेमवर्क उपयोग होता है?",
    "options_en": ["CoreData", "SwiftUI", "UIKit", "Combine"],
    "options_hi": ["CoreData", "SwiftUI", "UIKit", "Combine"],
    "answer_en": "CoreData",
    "answer_hi": "CoreData",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which Swift framework handles basic utilities?",
    "question_hi": "बेसिक यूटिलिटी देने वाला फ्रेमवर्क कौन सा है?",
    "options_en": ["Foundation", "SwiftUI", "Combine", "CoreML"],
    "options_hi": ["Foundation", "SwiftUI", "Combine", "CoreML"],
    "answer_en": "Foundation",
    "answer_hi": "Foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which Swift framework supports machine learning?",
    "question_hi": "मशीन लर्निंग सपोर्ट करने वाला फ्रेमवर्क कौन सा है?",
    "options_en": ["CoreML", "ARKit", "Combine", "MapKit"],
    "options_hi": ["CoreML", "ARKit", "Combine", "MapKit"],
    "answer_en": "CoreML",
    "answer_hi": "CoreML",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which Swift framework supports reactive streams?",
    "question_hi": "रिएक्टिव स्ट्रीम सपोर्ट करने वाला फ्रेमवर्क कौन सा है?",
    "options_en": ["Combine", "Foundation", "UIKit", "CoreData"],
    "options_hi": ["Combine", "Foundation", "UIKit", "CoreData"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift feature makes code safe, fast and modern?",
    "question_hi": "कोड को सेफ, फास्ट और मॉडर्न बनाने वाला फीचर कौन सा है?",
    "options_en": ["Type safety", "Pointers", "Manual memory", "Selectors"],
    "options_hi": ["Type safety", "Pointers", "Manual memory", "Selectors"],
    "answer_en": "Type safety",
    "answer_hi": "Type safety",
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