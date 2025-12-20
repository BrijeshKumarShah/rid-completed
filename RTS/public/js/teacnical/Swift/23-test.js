const questions = [
  {
    "num": 1,
    "question_en": "What does ARC stand for in Swift?",
    "question_hi": "Swift में ARC का पूरा नाम क्या है?",
    "options_en": ["Automatic Reference Counting", "Advanced Resource Control", "Auto Runtime Compiler", "Active Reference Control"],
    "options_hi": ["Automatic Reference Counting", "Advanced Resource Control", "Auto Runtime Compiler", "Active Reference Control"],
    "answer_en": "Automatic Reference Counting",
    "answer_hi": "Automatic Reference Counting",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to define a protocol?",
    "question_hi": "Swift में प्रोटोकॉल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["protocol", "interface", "implements", "delegate"],
    "options_hi": ["protocol", "interface", "implements", "delegate"],
    "answer_en": "protocol",
    "answer_hi": "protocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to conform to a protocol?",
    "question_hi": "प्रोटोकॉल को कन्फॉर्म करने के लिए कौन सा सिंटैक्स उपयोग होता है?",
    "options_en": [":", "implements", "extends", "uses"],
    "options_hi": [":", "implements", "extends", "uses"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift feature allows adding functionality without subclassing?",
    "question_hi": "बिना सबक्लास बनाए फंक्शनैलिटी जोड़ने के लिए कौन सा फीचर है?",
    "options_en": ["Extension", "Protocol", "Closure", "Inheritance"],
    "options_hi": ["Extension", "Protocol", "Closure", "Inheritance"],
    "answer_en": "Extension",
    "answer_hi": "Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define an extension?",
    "question_hi": "एक्सटेंशन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["extension", "extend", "category", "add"],
    "options_hi": ["extension", "extend", "category", "add"],
    "answer_en": "extension",
    "answer_hi": "extension",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which collection stores unique values?",
    "question_hi": "कौन सा कलेक्शन यूनिक वैल्यू स्टोर करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर किस कलेक्शन में होते हैं?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Swift keyword handles errors?",
    "question_hi": "एरर हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "catch", "throw", "All of these"],
    "options_hi": ["try", "catch", "throw", "All of these"],
    "answer_en": "All of these",
    "answer_hi": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to throw an error?",
    "question_hi": "एरर फेंकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "throws", "try", "catch"],
    "options_hi": ["throw", "throws", "try", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword marks a function that can throw errors?",
    "question_hi": "एरर फेंकने वाले फंक्शन को कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["throws", "throw", "try", "error"],
    "options_hi": ["throws", "throw", "try", "error"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to catch errors?",
    "question_hi": "एरर पकड़ने के लिए कौन सा कीवर्ड है?",
    "options_en": ["catch", "handle", "get", "except"],
    "options_hi": ["catch", "handle", "get", "except"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Swift feature ensures thread safety?",
    "question_hi": "थ्रेड सेफ्टी के लिए Swift में क्या उपयोग होता है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to define an actor?",
    "question_hi": "Actor डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["actor", "class", "struct", "thread"],
    "options_hi": ["actor", "class", "struct", "thread"],
    "answer_en": "actor",
    "answer_hi": "actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift feature supports async programming?",
    "question_hi": "असिंक्रोनस प्रोग्रामिंग के लिए कौन सा फीचर है?",
    "options_en": ["async/await", "GCD", "Thread", "Operation"],
    "options_hi": ["async/await", "GCD", "Thread", "Operation"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword marks an async function?",
    "question_hi": "असिंक्रोनस फंक्शन को कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["async", "await", "concurrent", "thread"],
    "options_hi": ["async", "await", "concurrent", "thread"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword waits for async result?",
    "question_hi": "असिंक्रोनस रिज़ल्ट का इंतजार करने के लिए क्या उपयोग होता है?",
    "options_en": ["await", "async", "wait", "sync"],
    "options_hi": ["await", "async", "wait", "sync"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which framework is used for UI in Swift?",
    "question_hi": "Swift में UI बनाने के लिए कौन सा फ्रेमवर्क उपयोग होता है?",
    "options_en": ["SwiftUI", "UIKit", "Both", "None"],
    "options_hi": ["SwiftUI", "UIKit", "Both", "None"],
    "answer_en": "Both",
    "answer_hi": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which SwiftUI element creates vertical layout?",
    "question_hi": "SwiftUI में वर्टिकल लेआउट कौन बनाता है?",
    "options_en": ["VStack", "HStack", "ZStack", "List"],
    "options_hi": ["VStack", "HStack", "ZStack", "List"],
    "answer_en": "VStack",
    "answer_hi": "VStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which SwiftUI element overlays views?",
    "question_hi": "SwiftUI में व्यू को ओवरले कौन करता है?",
    "options_en": ["ZStack", "VStack", "HStack", "Group"],
    "options_hi": ["ZStack", "VStack", "HStack", "Group"],
    "answer_en": "ZStack",
    "answer_hi": "ZStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which property wrapper stores state in SwiftUI?",
    "question_hi": "SwiftUI में स्टेट स्टोर करने के लिए कौन सा प्रॉपर्टी रैपर है?",
    "options_en": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "options_hi": ["@State", "@Binding", "@ObservedObject", "@Environment"],
    "answer_en": "@State",
    "answer_hi": "@State",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which property wrapper shares state between views?",
    "question_hi": "व्यू के बीच स्टेट शेयर करने के लिए कौन सा रैपर है?",
    "options_en": ["@Binding", "@State", "@StateObject", "@Environment"],
    "options_hi": ["@Binding", "@State", "@StateObject", "@Environment"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which wrapper owns reference type in SwiftUI?",
    "question_hi": "SwiftUI में रेफरेंस टाइप को ओन कौन करता है?",
    "options_en": ["@StateObject", "@ObservedObject", "@Binding", "@State"],
    "options_hi": ["@StateObject", "@ObservedObject", "@Binding", "@State"],
    "answer_en": "@StateObject",
    "answer_hi": "@StateObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which wrapper observes external object?",
    "question_hi": "बाहरी ऑब्जेक्ट को ऑब्ज़र्व करने के लिए कौन सा रैपर है?",
    "options_en": ["@ObservedObject", "@StateObject", "@State", "@Binding"],
    "options_hi": ["@ObservedObject", "@StateObject", "@State", "@Binding"],
    "answer_en": "@ObservedObject",
    "answer_hi": "@ObservedObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which protocol is required for observed objects?",
    "question_hi": "Observed object के लिए कौन सा प्रोटोकॉल जरूरी है?",
    "options_en": ["ObservableObject", "Codable", "Identifiable", "Equatable"],
    "options_hi": ["ObservableObject", "Codable", "Identifiable", "Equatable"],
    "answer_en": "ObservableObject",
    "answer_hi": "ObservableObject",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which property publishes changes?",
    "question_hi": "कौन सी प्रॉपर्टी चेंज को पब्लिश करती है?",
    "options_en": ["@Published", "@State", "@Binding", "@Environment"],
    "options_hi": ["@Published", "@State", "@Binding", "@Environment"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which protocol provides unique identity?",
    "question_hi": "यूनिक पहचान के लिए कौन सा प्रोटोकॉल है?",
    "options_en": ["Identifiable", "Hashable", "Equatable", "Codable"],
    "options_hi": ["Identifiable", "Hashable", "Equatable", "Codable"],
    "answer_en": "Identifiable",
    "answer_hi": "Identifiable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which protocol allows comparison?",
    "question_hi": "तुलना करने के लिए कौन सा प्रोटोकॉल है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Both A and B"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Both A and B"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which protocol allows sorting?",
    "question_hi": "सॉर्टिंग के लिए कौन सा प्रोटोकॉल जरूरी है?",
    "options_en": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "options_hi": ["Comparable", "Equatable", "Sortable", "Hashable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which protocol allows dictionary keys?",
    "question_hi": "डिक्शनरी की के लिए कौन सा प्रोटोकॉल जरूरी है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift feature improves performance by lazy loading?",
    "question_hi": "लेज़ी लोडिंग से परफॉर्मेंस सुधारने के लिए क्या उपयोग होता है?",
    "options_en": ["lazy", "static", "final", "weak"],
    "options_hi": ["lazy", "static", "final", "weak"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword avoids strong reference cycles?",
    "question_hi": "स्ट्रॉन्ग रेफरेंस साइकिल से बचने के लिए क्या उपयोग होता है?",
    "options_en": ["weak", "unowned", "Both", "strong"],
    "options_hi": ["weak", "unowned", "Both", "strong"],
    "answer_en": "Both",
    "answer_hi": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword crashes if object is deallocated?",
    "question_hi": "ऑब्जेक्ट डीलोकेट होने पर कौन सा क्रैश करता है?",
    "options_en": ["unowned", "weak", "lazy", "final"],
    "options_hi": ["unowned", "weak", "lazy", "final"],
    "answer_en": "unowned",
    "answer_hi": "unowned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword avoids mutation?",
    "question_hi": "म्यूटेशन रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["let", "var", "static", "final"],
    "options_hi": ["let", "var", "static", "final"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift feature enforces immutability?",
    "question_hi": "इम्यूटेबलिटी लागू करने के लिए कौन सा फीचर है?",
    "options_en": ["Value Types", "Reference Types", "Classes", "Actors"],
    "options_hi": ["Value Types", "Reference Types", "Classes", "Actors"],
    "answer_en": "Value Types",
    "answer_hi": "Value Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which type is best for data models?",
    "question_hi": "डेटा मॉडल के लिए कौन सा टाइप बेहतर है?",
    "options_en": ["Struct", "Class", "Actor", "Enum"],
    "options_hi": ["Struct", "Class", "Actor", "Enum"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Swift feature allows pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए कौन सा फीचर है?",
    "options_en": ["switch", "if", "guard", "loop"],
    "options_hi": ["switch", "if", "guard", "loop"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which case handles default condition in switch?",
    "question_hi": "स्विच में डिफॉल्ट कंडीशन कौन संभालता है?",
    "options_en": ["default", "else", "none", "fallback"],
    "options_hi": ["default", "else", "none", "fallback"],
    "answer_en": "default",
    "answer_hi": "default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Swift keyword exits early?",
    "question_hi": "जल्दी एग्ज़िट के लिए कौन सा कीवर्ड है?",
    "options_en": ["guard", "break", "return", "continue"],
    "options_hi": ["guard", "break", "return", "continue"],
    "answer_en": "guard",
    "answer_hi": "guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which statement is mandatory in guard?",
    "question_hi": "गार्ड में कौन सा स्टेटमेंट अनिवार्य है?",
    "options_en": ["else", "return", "break", "continue"],
    "options_hi": ["else", "return", "break", "continue"],
    "answer_en": "else",
    "answer_hi": "else",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift feature avoids null pointer exceptions?",
    "question_hi": "नल पॉइंटर एक्सेप्शन से बचने के लिए क्या है?",
    "options_en": ["Optionals", "Pointers", "Casting", "Inheritance"],
    "options_hi": ["Optionals", "Pointers", "Casting", "Inheritance"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator unwraps optional safely?",
    "question_hi": "ऑप्शनल को सेफली अनरैप करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["if let", "!", "??", "as"],
    "options_hi": ["if let", "!", "??", "as"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator provides default value?",
    "question_hi": "डिफॉल्ट वैल्यू देने वाला ऑपरेटर कौन सा है?",
    "options_en": ["??", "!", "?", "as"],
    "options_hi": ["??", "!", "?", "as"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator force unwraps optional?",
    "question_hi": "ऑप्शनल को फोर्स अनरैप कौन करता है?",
    "options_en": ["!", "?", "??", "as!"],
    "options_hi": ["!", "?", "??", "as!"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which casting operator is safe?",
    "question_hi": "सेफ टाइप कास्टिंग ऑपरेटर कौन सा है?",
    "options_en": ["as?", "as!", "is", "cast"],
    "options_hi": ["as?", "as!", "is", "cast"],
    "answer_en": "as?",
    "answer_hi": "as?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator checks type?",
    "question_hi": "टाइप चेक करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["is", "as", "==", "==="],
    "options_hi": ["is", "as", "==", "==="],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which operator checks reference equality?",
    "question_hi": "रेफरेंस इक्वैलिटी चेक करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["===", "==", "=", "!="],
    "options_hi": ["===", "==", "=", "!="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift feature supports unit testing?",
    "question_hi": "यूनिट टेस्टिंग के लिए कौन सा फ्रेमवर्क है?",
    "options_en": ["XCTest", "SwiftTest", "TestKit", "UnitSwift"],
    "options_hi": ["XCTest", "SwiftTest", "TestKit", "UnitSwift"],
    "answer_en": "XCTest",
    "answer_hi": "XCTest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which file runs first in SwiftUI app?",
    "question_hi": "SwiftUI ऐप में सबसे पहले कौन सी फ़ाइल चलती है?",
    "options_en": ["@main App", "ContentView", "SceneDelegate", "AppDelegate"],
    "options_hi": ["@main App", "ContentView", "SceneDelegate", "AppDelegate"],
    "answer_en": "@main App",
    "answer_hi": "@main App",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword marks app entry point?",
    "question_hi": "ऐप का एंट्री पॉइंट कौन सा कीवर्ड मार्क करता है?",
    "options_en": ["@main", "@App", "@Entry", "@Start"],
    "options_hi": ["@main", "@App", "@Entry", "@Start"],
    "answer_en": "@main",
    "answer_hi": "@main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift version introduced async/await?",
    "question_hi": "async/await किस Swift वर्ज़न में आया?",
    "options_en": ["Swift 5.5", "Swift 5.0", "Swift 4.2", "Swift 6.0"],
    "options_hi": ["Swift 5.5", "Swift 5.0", "Swift 4.2", "Swift 6.0"],
    "answer_en": "Swift 5.5",
    "answer_hi": "Swift 5.5",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which Swift feature improves safety?",
    "question_hi": "Swift की सेफ्टी बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Type Safety", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Type Safety", "Pointers", "Macros", "Selectors"],
    "answer_en": "Type Safety",
    "answer_hi": "Type Safety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which Swift feature improves readability?",
    "question_hi": "रीडेबिलिटी बढ़ाने के लिए कौन सा फीचर है?",
    "options_en": ["Named Parameters", "Pointers", "Threads", "Selectors"],
    "options_hi": ["Named Parameters", "Pointers", "Threads", "Selectors"],
    "answer_en": "Named Parameters",
    "answer_hi": "Named Parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which Swift feature allows default parameter values?",
    "question_hi": "डिफॉल्ट पैरामीटर वैल्यू किससे मिलती है?",
    "options_en": ["Functions", "Closures", "Enums", "Protocols"],
    "options_hi": ["Functions", "Closures", "Enums", "Protocols"],
    "answer_en": "Functions",
    "answer_hi": "Functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which Swift feature allows method overloading?",
    "question_hi": "मेथड ओवरलोडिंग किससे संभव है?",
    "options_en": ["Functions", "Enums", "Actors", "Extensions"],
    "options_hi": ["Functions", "Enums", "Actors", "Extensions"],
    "answer_en": "Functions",
    "answer_hi": "Functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which Swift keyword prevents overriding?",
    "question_hi": "ओवरराइड रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which Swift feature allows code reuse?",
    "question_hi": "कोड रीयूज़ के लिए कौन सा फीचर है?",
    "options_en": ["Protocols", "Closures", "Actors", "Threads"],
    "options_hi": ["Protocols", "Closures", "Actors", "Threads"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which protocol allows default implementation?",
    "question_hi": "डिफॉल्ट इम्प्लीमेंटेशन कौन देता है?",
    "options_en": ["Protocol Extension", "Class", "Struct", "Enum"],
    "options_hi": ["Protocol Extension", "Class", "Struct", "Enum"],
    "answer_en": "Protocol Extension",
    "answer_hi": "Protocol Extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which Swift feature improves modularity?",
    "question_hi": "मॉड्यूलरिटी बढ़ाने के लिए क्या है?",
    "options_en": ["Frameworks", "Threads", "Pointers", "Macros"],
    "options_hi": ["Frameworks", "Threads", "Pointers", "Macros"],
    "answer_en": "Frameworks",
    "answer_hi": "Frameworks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which Swift tool manages dependencies?",
    "question_hi": "डिपेंडेंसी मैनेज करने के लिए कौन सा टूल है?",
    "options_en": ["Swift Package Manager", "CocoaPods", "Carthage", "All"],
    "options_hi": ["Swift Package Manager", "CocoaPods", "Carthage", "All"],
    "answer_en": "All",
    "answer_hi": "All",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which Swift feature improves concurrency safety?",
    "question_hi": "कनकरेंसी सेफ्टी के लिए कौन सा फीचर है?",
    "options_en": ["Actors", "Classes", "Structs", "Enums"],
    "options_hi": ["Actors", "Classes", "Structs", "Enums"],
    "answer_en": "Actors",
    "answer_hi": "Actors",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which Swift keyword allows mutating struct method?",
    "question_hi": "स्ट्रक्चर मेथड को म्यूटेट करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["mutating", "modify", "change", "var"],
    "options_hi": ["mutating", "modify", "change", "var"],
    "answer_en": "mutating",
    "answer_hi": "mutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which Swift feature supports immutability by default?",
    "question_hi": "डिफॉल्ट रूप से इम्यूटेबल कौन सा फीचर है?",
    "options_en": ["Struct", "Class", "Actor", "Protocol"],
    "options_hi": ["Struct", "Class", "Actor", "Protocol"],
    "answer_en": "Struct",
    "answer_hi": "Struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which Swift feature enables memory safety?",
    "question_hi": "मेमोरी सेफ्टी के लिए कौन सा फीचर है?",
    "options_en": ["ARC", "Pointers", "Threads", "Macros"],
    "options_hi": ["ARC", "Pointers", "Threads", "Macros"],
    "answer_en": "ARC",
    "answer_hi": "ARC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which Swift feature replaces delegates?",
    "question_hi": "डेलीगेट की जगह कौन सा फीचर आता है?",
    "options_en": ["Closures", "Actors", "Enums", "Structs"],
    "options_hi": ["Closures", "Actors", "Enums", "Structs"],
    "answer_en": "Closures",
    "answer_hi": "Closures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which SwiftUI view displays lists?",
    "question_hi": "लिस्ट दिखाने के लिए SwiftUI में क्या उपयोग होता है?",
    "options_en": ["List", "ScrollView", "ForEach", "Group"],
    "options_hi": ["List", "ScrollView", "ForEach", "Group"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which SwiftUI view repeats views?",
    "question_hi": "व्यू को दोहराने के लिए कौन सा व्यू है?",
    "options_en": ["ForEach", "List", "Group", "Stack"],
    "options_hi": ["ForEach", "List", "Group", "Stack"],
    "answer_en": "ForEach",
    "answer_hi": "ForEach",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which SwiftUI modifier adds padding?",
    "question_hi": "पैडिंग जोड़ने के लिए कौन सा मॉडिफ़ायर है?",
    "options_en": [".padding()", ".margin()", ".space()", ".gap()"],
    "options_hi": [".padding()", ".margin()", ".space()", ".gap()"],
    "answer_en": ".padding()",
    "answer_hi": ".padding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which SwiftUI modifier changes text color?",
    "question_hi": "टेक्स्ट कलर बदलने के लिए कौन सा मॉडिफ़ायर है?",
    "options_en": [".foregroundColor()", ".color()", ".textColor()", ".fontColor()"],
    "options_hi": [".foregroundColor()", ".color()", ".textColor()", ".fontColor()"],
    "answer_en": ".foregroundColor()",
    "answer_hi": ".foregroundColor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which SwiftUI modifier changes font?",
    "question_hi": "फॉन्ट बदलने के लिए कौन सा मॉडिफ़ायर है?",
    "options_en": [".font()", ".text()", ".style()", ".size()"],
    "options_hi": [".font()", ".text()", ".style()", ".size()"],
    "answer_en": ".font()",
    "answer_hi": ".font()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which SwiftUI modifier aligns content?",
    "question_hi": "कंटेंट अलाइन करने के लिए कौन सा मॉडिफ़ायर है?",
    "options_en": [".alignment()", ".frame()", ".position()", ".layout()"],
    "options_hi": [".alignment()", ".frame()", ".position()", ".layout()"],
    "answer_en": ".frame()",
    "answer_hi": ".frame()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which SwiftUI container stacks horizontally?",
    "question_hi": "हॉरिज़ॉन्टली स्टैक करने के लिए क्या उपयोग होता है?",
    "options_en": ["HStack", "VStack", "ZStack", "List"],
    "options_hi": ["HStack", "VStack", "ZStack", "List"],
    "answer_en": "HStack",
    "answer_hi": "HStack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which SwiftUI view scrolls content?",
    "question_hi": "कंटेंट स्क्रॉल करने के लिए कौन सा व्यू है?",
    "options_en": ["ScrollView", "List", "Stack", "Group"],
    "options_hi": ["ScrollView", "List", "Stack", "Group"],
    "answer_en": "ScrollView",
    "answer_hi": "ScrollView",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which SwiftUI property enables dark mode?",
    "question_hi": "डार्क मोड के लिए कौन सी प्रॉपर्टी है?",
    "options_en": ["colorScheme", "appearance", "theme", "mode"],
    "options_hi": ["colorScheme", "appearance", "theme", "mode"],
    "answer_en": "colorScheme",
    "answer_hi": "colorScheme",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which SwiftUI modifier handles navigation?",
    "question_hi": "नेविगेशन के लिए कौन सा मॉडिफ़ायर है?",
    "options_en": ["NavigationStack", "NavigationView", "Both", "None"],
    "options_hi": ["NavigationStack", "NavigationView", "Both", "None"],
    "answer_en": "Both",
    "answer_hi": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which SwiftUI view presents modal screen?",
    "question_hi": "मॉडल स्क्रीन दिखाने के लिए कौन सा व्यू है?",
    "options_en": ["sheet", "alert", "popover", "toast"],
    "options_hi": ["sheet", "alert", "popover", "toast"],
    "answer_en": "sheet",
    "answer_hi": "sheet",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which SwiftUI view shows alert?",
    "question_hi": "अलर्ट दिखाने के लिए कौन सा व्यू है?",
    "options_en": ["alert", "sheet", "dialog", "popup"],
    "options_hi": ["alert", "sheet", "dialog", "popup"],
    "answer_en": "alert",
    "answer_hi": "alert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which SwiftUI view shows confirmation dialog?",
    "question_hi": "कन्फर्मेशन डायलॉग के लिए कौन सा व्यू है?",
    "options_en": ["confirmationDialog", "alert", "sheet", "popup"],
    "options_hi": ["confirmationDialog", "alert", "sheet", "popup"],
    "answer_en": "confirmationDialog",
    "answer_hi": "confirmationDialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which Swift feature improves compile-time safety?",
    "question_hi": "कंपाइल टाइम सेफ्टी के लिए कौन सा फीचर है?",
    "options_en": ["Strong Typing", "Pointers", "Reflection", "Casting"],
    "options_hi": ["Strong Typing", "Pointers", "Reflection", "Casting"],
    "answer_en": "Strong Typing",
    "answer_hi": "Strong Typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which Swift feature supports functional programming?",
    "question_hi": "फंक्शनल प्रोग्रामिंग के लिए कौन सा फीचर है?",
    "options_en": ["map, filter, reduce", "Pointers", "Threads", "Delegates"],
    "options_hi": ["map, filter, reduce", "Pointers", "Threads", "Delegates"],
    "answer_en": "map, filter, reduce",
    "answer_hi": "map, filter, reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
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
    "num": 81,
    "question_en": "Which method filters elements?",
    "question_hi": "एलिमेंट फ़िल्टर करने के लिए कौन सा मेथड है?",
    "options_en": ["filter", "map", "reduce", "sort"],
    "options_hi": ["filter", "map", "reduce", "sort"],
    "answer_en": "filter",
    "answer_hi": "filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which method reduces collection to single value?",
    "question_hi": "कलेक्शन को एक वैल्यू में बदलने वाला मेथड कौन सा है?",
    "options_en": ["reduce", "map", "filter", "combine"],
    "options_hi": ["reduce", "map", "filter", "combine"],
    "answer_en": "reduce",
    "answer_hi": "reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which Swift feature allows chaining methods?",
    "question_hi": "मेथड चेनिंग किससे संभव है?",
    "options_en": ["Functional Programming", "OOP", "Inheritance", "Delegation"],
    "options_hi": ["Functional Programming", "OOP", "Inheritance", "Delegation"],
    "answer_en": "Functional Programming",
    "answer_hi": "Functional Programming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which Swift feature improves code safety?",
    "question_hi": "कोड सेफ्टी बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Optionals", "Pointers", "Casting", "Reflection"],
    "options_hi": ["Optionals", "Pointers", "Casting", "Reflection"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which Swift feature improves performance?",
    "question_hi": "परफॉर्मेंस सुधारने के लिए कौन सा फीचर है?",
    "options_en": ["Value Types", "Reflection", "KVO", "Selectors"],
    "options_hi": ["Value Types", "Reflection", "KVO", "Selectors"],
    "answer_en": "Value Types",
    "answer_hi": "Value Types",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which Swift feature supports modern concurrency?",
    "question_hi": "मॉडर्न कनकरेंसी के लिए कौन सा फीचर है?",
    "options_en": ["async/await", "Threads", "GCD only", "Locks"],
    "options_hi": ["async/await", "Threads", "GCD only", "Locks"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which Swift feature improves app stability?",
    "question_hi": "ऐप स्टेबिलिटी बढ़ाने के लिए क्या है?",
    "options_en": ["Error Handling", "Pointers", "Macros", "Casting"],
    "options_hi": ["Error Handling", "Pointers", "Macros", "Casting"],
    "answer_en": "Error Handling",
    "answer_hi": "Error Handling",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which Swift feature reduces boilerplate code?",
    "question_hi": "बॉयलरप्लेट कोड कम करने के लिए क्या है?",
    "options_en": ["Extensions", "Inheritance", "Delegates", "Threads"],
    "options_hi": ["Extensions", "Inheritance", "Delegates", "Threads"],
    "answer_en": "Extensions",
    "answer_hi": "Extensions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Swift feature supports reactive UI?",
    "question_hi": "रिएक्टिव UI के लिए कौन सा फीचर है?",
    "options_en": ["SwiftUI", "UIKit", "AppKit", "Storyboards"],
    "options_hi": ["SwiftUI", "UIKit", "AppKit", "Storyboards"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which Swift feature binds UI with state?",
    "question_hi": "UI को स्टेट से बाइंड करने के लिए कौन सा फीचर है?",
    "options_en": ["Data Binding", "Delegates", "Callbacks", "Notifications"],
    "options_hi": ["Data Binding", "Delegates", "Callbacks", "Notifications"],
    "answer_en": "Data Binding",
    "answer_hi": "Data Binding",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which SwiftUI feature updates UI automatically?",
    "question_hi": "UI को ऑटोमैटिक अपडेट कौन करता है?",
    "options_en": ["State Management", "Threads", "Locks", "Selectors"],
    "options_hi": ["State Management", "Threads", "Locks", "Selectors"],
    "answer_en": "State Management",
    "answer_hi": "State Management",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which Swift feature improves testability?",
    "question_hi": "टेस्टेबिलिटी बढ़ाने के लिए कौन सा फीचर है?",
    "options_en": ["Protocols", "Classes", "Enums", "Threads"],
    "options_hi": ["Protocols", "Classes", "Enums", "Threads"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which Swift feature allows dependency injection?",
    "question_hi": "डिपेंडेंसी इंजेक्शन के लिए कौन सा फीचर है?",
    "options_en": ["Protocols", "Inheritance", "Closures", "Actors"],
    "options_hi": ["Protocols", "Inheritance", "Closures", "Actors"],
    "answer_en": "Protocols",
    "answer_hi": "Protocols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which Swift feature supports modular design?",
    "question_hi": "मॉड्यूलर डिज़ाइन के लिए कौन सा फीचर है?",
    "options_en": ["Frameworks", "Threads", "Pointers", "Macros"],
    "options_hi": ["Frameworks", "Threads", "Pointers", "Macros"],
    "answer_en": "Frameworks",
    "answer_hi": "Frameworks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which Swift feature supports code safety?",
    "question_hi": "कोड सेफ्टी के लिए कौन सा फीचर है?",
    "options_en": ["Type System", "Pointers", "Casting", "Reflection"],
    "options_hi": ["Type System", "Pointers", "Casting", "Reflection"],
    "answer_en": "Type System",
    "answer_hi": "Type System",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which Swift feature reduces runtime crashes?",
    "question_hi": "रनटाइम क्रैश कम करने के लिए क्या है?",
    "options_en": ["Optionals", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Optionals", "Pointers", "Macros", "Selectors"],
    "answer_en": "Optionals",
    "answer_hi": "Optionals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which Swift feature enables modern iOS apps?",
    "question_hi": "मॉडर्न iOS ऐप्स के लिए कौन सा फीचर है?",
    "options_en": ["SwiftUI", "Storyboards", "XIB", "AppKit"],
    "options_hi": ["SwiftUI", "Storyboards", "XIB", "AppKit"],
    "answer_en": "SwiftUI",
    "answer_hi": "SwiftUI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which Swift feature supports reactive programming?",
    "question_hi": "रिएक्टिव प्रोग्रामिंग के लिए कौन सा फीचर है?",
    "options_en": ["Combine", "Delegates", "Closures", "Callbacks"],
    "options_hi": ["Combine", "Delegates", "Closures", "Callbacks"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which Swift framework handles publishers and subscribers?",
    "question_hi": "पब्लिशर और सब्सक्राइबर कौन सा फ्रेमवर्क संभालता है?",
    "options_en": ["Combine", "SwiftUI", "UIKit", "Foundation"],
    "options_hi": ["Combine", "SwiftUI", "UIKit", "Foundation"],
    "answer_en": "Combine",
    "answer_hi": "Combine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift feature makes code safe, fast and modern?",
    "question_hi": "Swift को सेफ, फास्ट और मॉडर्न कौन बनाता है?",
    "options_en": ["Strong typing", "Pointers", "Macros", "Selectors"],
    "options_hi": ["Strong typing", "Pointers", "Macros", "Selectors"],
    "answer_en": "Strong typing",
    "answer_hi": "Strong typing",
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