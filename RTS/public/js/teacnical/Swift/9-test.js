const questions = [
  {
    "num": 1,
    "question_en": "What is the primary purpose of '@frozen' attribute on enums in Swift?",
    "question_hi": "Swift में enum पर '@frozen' एट्रिब्यूट का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["Prevents adding new cases in future", "Allows exhaustive switching", "Optimizes performance", "Enables pattern matching"],
    "options_hi": ["भविष्य में नए केसेस जोड़ने से रोकता है", "एक्सॉस्टिव स्विचिंग की अनुमति देता है", "परफॉर्मेंस ऑप्टिमाइज़ करता है", "पैटर्न मैचिंग सक्षम करता है"],
    "answer_en": "Prevents adding new cases in future",
    "answer_hi": "भविष्य में नए केसेस जोड़ने से रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Swift feature allows writing 'if let x = x' as 'if let x'?",
    "question_hi": "कौन सा Swift फीचर 'if let x = x' को 'if let x' के रूप में लिखने की अनुमति देता है?",
    "options_en": ["Shadowing with same name", "Optional pattern", "Implicit unwrapping", "Syntactic sugar"],
    "options_hi": ["समान नाम के साथ शैडोइंग", "ऑप्शनल पैटर्न", "इम्प्लिसिट अनरैपिंग", "सिंटैक्टिक शुगर"],
    "answer_en": "Shadowing with same name",
    "answer_hi": "समान नाम के साथ शैडोइंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'some' keyword before a protocol name indicate?",
    "question_hi": "प्रोटोकॉल नाम से पहले 'some' कीवर्ड क्या इंगित करता है?",
    "options_en": ["Opaque return type", "Existential type", "Generic constraint", "Type erasure"],
    "options_hi": ["ओपेक रिटर्न टाइप", "एक्जिस्टेंशियल टाइप", "जेनेरिक कंस्ट्रेंट", "टाइप इरेज़र"],
    "answer_en": "Opaque return type",
    "answer_hi": "ओपेक रिटर्न टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which property wrapper is used for 2-way bindings in SwiftUI?",
    "question_hi": "SwiftUI में 2-वे बाइंडिंग्स के लिए किस प्रॉपर्टी रैपर का उपयोग किया जाता है?",
    "options_en": ["@Binding", "@State", "@Published", "@ObservedObject"],
    "options_hi": ["@Binding", "@State", "@Published", "@ObservedObject"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of 'defer' statement in Swift?",
    "question_hi": "Swift में 'defer' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Execute code before leaving scope", "Delay execution", "Async execution", "Error handling"],
    "options_hi": ["स्कोप छोड़ने से पहले कोड एक्जीक्यूट करना", "एक्जीक्यूशन डिले करना", "एसिंक एक्जीक्यूशन", "एरर हैंडलिंग"],
    "answer_en": "Execute code before leaving scope",
    "answer_hi": "स्कोप छोड़ने से पहले कोड एक्जीक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Swift feature allows writing 'guard let self = self else { return }'?",
    "question_hi": "कौन सा Swift फीचर 'guard let self = self else { return }' लिखने की अनुमति देता है?",
    "options_en": ["Implicitly unwrapped optionals", "Optional chaining", "Weak self capture", "Strong self reference"],
    "options_hi": ["इम्प्लिसिटली अनरैप्ड ऑप्शनल्स", "ऑप्शनल चेनिंग", "वीक सेल्फ कैप्चर", "स्ट्रोंग सेल्फ रिफरेंस"],
    "answer_en": "Weak self capture",
    "answer_hi": "वीक सेल्फ कैप्चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does 'indirect' keyword do for enum cases in Swift?",
    "question_hi": "Swift में enum केस के लिए 'indirect' कीवर्ड क्या करता है?",
    "options_en": ["Allows recursive enum definitions", "Makes case optional", "Enables pattern matching", "Improves performance"],
    "options_hi": ["रिकर्सिव enum डेफिनिशन की अनुमति देता है", "केस को ऑप्शनल बनाता है", "पैटर्न मैचिंग सक्षम करता है", "परफॉर्मेंस सुधारता है"],
    "answer_en": "Allows recursive enum definitions",
    "answer_hi": "रिकर्सिव enum डेफिनिशन की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Swift operator checks for nil and returns alternative value?",
    "question_hi": "कौन सा Swift ऑपरेटर nil की जाँच करता है और वैकल्पिक मान लौटाता है?",
    "options_en": ["??", "?:", "!", "?"],
    "options_hi": ["??", "?:", "!", "?"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of '@MainActor' attribute in Swift?",
    "question_hi": "Swift में '@MainActor' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Ensures code runs on main thread", "Marks async functions", "Enables concurrency", "Improves performance"],
    "options_hi": ["कोड को मेन थ्रेड पर चलाना सुनिश्चित करता है", "एसिंक फंक्शन्स को चिह्नित करता है", "कंकरेंसी सक्षम करता है", "परफॉर्मेंस सुधारता है"],
    "answer_en": "Ensures code runs on main thread",
    "answer_hi": "कोड को मेन थ्रेड पर चलाना सुनिश्चित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Swift feature allows 'for await item in sequence' syntax?",
    "question_hi": "कौन सा Swift फीचर 'for await item in sequence' सिंटैक्स की अनुमति देता है?",
    "options_en": ["AsyncSequence", "Async/await", "Combine framework", "Reactive programming"],
    "options_hi": ["AsyncSequence", "Async/await", "Combine फ्रेमवर्क", "रिएक्टिव प्रोग्रामिंग"],
    "answer_en": "AsyncSequence",
    "answer_hi": "AsyncSequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does 'nonisolated' keyword do for actor methods?",
    "question_hi": "ऐक्टर मेथड्स के लिए 'nonisolated' कीवर्ड क्या करता है?",
    "options_en": ["Allows synchronous execution", "Prevents actor isolation", "Enables async calls", "Improves performance"],
    "options_hi": ["सिंक्रोनस एक्जीक्यूशन की अनुमति देता है", "ऐक्टर आइसोलेशन रोकता है", "एसिंक कॉल्स सक्षम करता है", "परफॉर्मेंस सुधारता है"],
    "answer_en": "Prevents actor isolation",
    "answer_hi": "ऐक्टर आइसोलेशन रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Swift feature enables 'if #available(iOS 15, *)' syntax?",
    "question_hi": "कौन सा Swift फीचर 'if #available(iOS 15, *)' सिंटैक्स सक्षम करता है?",
    "options_en": ["Availability checking", "Conditional compilation", "Platform detection", "Version checking"],
    "options_hi": ["उपलब्धता जाँच", "सशर्त संकलन", "प्लेटफॉर्म पहचान", "संस्करण जाँच"],
    "answer_en": "Availability checking",
    "answer_hi": "उपलब्धता जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of '@escaping' attribute on closure parameters?",
    "question_hi": "क्लोजर पैरामीटर्स पर '@escaping' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Closure can outlive function scope", "Closure cannot escape", "Improves performance", "Enables async execution"],
    "options_hi": ["क्लोजर फ़ंक्शन स्कोप से बाहर जा सकता है", "क्लोजर एस्केप नहीं कर सकता", "परफॉर्मेंस सुधारता है", "एसिंक एक्जीक्यूशन सक्षम करता है"],
    "answer_en": "Closure can outlive function scope",
    "answer_hi": "क्लोजर फ़ंक्शन स्कोप से बाहर जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift operator allows optional chaining 'object?.property'?",
    "question_hi": "कौन सा Swift ऑपरेटर ऑप्शनल चेनिंग 'object?.property' की अनुमति देता है?",
    "options_en": ["?", "!", "??", "?: "],
    "options_hi": ["?", "!", "??", "?: "],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does 'Sendable' protocol ensure in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में 'Sendable' प्रोटोकॉल क्या सुनिश्चित करता है?",
    "options_en": ["Safe to share across actors", "Thread safety", "Async compatibility", "Performance optimization"],
    "options_hi": ["ऐक्टर्स के बीच साझा करना सुरक्षित", "थ्रेड सुरक्षा", "एसिंक संगतता", "परफॉर्मेंस ऑप्टिमाइज़ेशन"],
    "answer_en": "Safe to share across actors",
    "answer_hi": "ऐक्टर्स के बीच साझा करना सुरक्षित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Swift feature allows 'case let .success(value)' pattern?",
    "question_hi": "कौन सा Swift फीचर 'case let .success(value)' पैटर्न की अनुमति देता है?",
    "options_en": ["Enum case patterns", "Optional binding", "Tuple decomposition", "Value extraction"],
    "options_hi": ["Enum केस पैटर्न्स", "ऑप्शनल बाइंडिंग", "टुपल डिकंपोज़िशन", "वैल्यू एक्सट्रैक्शन"],
    "answer_en": "Enum case patterns",
    "answer_hi": "Enum केस पैटर्न्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of '@resultBuilder' attribute in Swift?",
    "question_hi": "Swift में '@resultBuilder' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Creates domain-specific languages", "Builds result values", "Improves compilation", "Enables metaprogramming"],
    "options_hi": ["डोमेन-विशिष्ट भाषाएँ बनाता है", "रिजल्ट वैल्यू बनाता है", "संकलन सुधारता है", "मेटाप्रोग्रामिंग सक्षम करता है"],
    "answer_en": "Creates domain-specific languages",
    "answer_hi": "डोमेन-विशिष्ट भाषाएँ बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Swift keyword makes a property thread-safe for reading/writing?",
    "question_hi": "कौन सा Swift कीवर्ड प्रॉपर्टी को पढ़ने/लिखने के लिए थ्रेड-सेफ बनाता है?",
    "options_en": ["atomic", "synchronized", "threadsafe", "No built-in keyword"],
    "options_hi": ["atomic", "synchronized", "threadsafe", "कोई बिल्ट-इन कीवर्ड नहीं"],
    "answer_en": "No built-in keyword",
    "answer_hi": "कोई बिल्ट-इन कीवर्ड नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does 'where' clause in generic constraints allow?",
    "question_hi": "जेनेरिक कंस्ट्रेंट्स में 'where' क्लॉज क्या अनुमति देता है?",
    "options_en": ["Additional type constraints", "Conditional compilation", "Runtime checks", "Platform restrictions"],
    "options_hi": ["अतिरिक्त टाइप कंस्ट्रेंट्स", "सशर्त संकलन", "रनटाइम चेक्स", "प्लेटफॉर्म प्रतिबंध"],
    "answer_en": "Additional type constraints",
    "answer_hi": "अतिरिक्त टाइप कंस्ट्रेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Swift feature allows 'Self' to refer to conforming type?",
    "question_hi": "कौन सा Swift फीचर 'Self' को कन्फॉर्मिंग टाइप को संदर्भित करने की अनुमति देता है?",
    "options_en": ["Self type in protocols", "Type inference", "Metatype reference", "Dynamic type"],
    "options_hi": ["प्रोटोकॉल में Self टाइप", "टाइप इन्फरेंस", "मेटाटाइप रिफरेंस", "डायनामिक टाइप"],
    "answer_en": "Self type in protocols",
    "answer_hi": "प्रोटोकॉल में Self टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of 'lazy' keyword for properties?",
    "question_hi": "प्रॉपर्टीज के लिए 'lazy' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Defers initialization until first use", "Improves performance", "Enables background loading", "Prevents memory leaks"],
    "options_hi": ["पहले उपयोग तक इनिशियलाइज़ेशन स्थगित करता है", "परफॉर्मेंस सुधारता है", "बैकग्राउंड लोडिंग सक्षम करता है", "मेमोरी लीक्स रोकता है"],
    "answer_en": "Defers initialization until first use",
    "answer_hi": "पहले उपयोग तक इनिशियलाइज़ेशन स्थगित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift feature enables 'guard case let' pattern matching?",
    "question_hi": "कौन सा Swift फीचर 'guard case let' पैटर्न मैचिंग सक्षम करता है?",
    "options_en": ["Pattern matching in guards", "Optional binding", "Early exit", "Condition checking"],
    "options_hi": ["गार्ड में पैटर्न मैचिंग", "ऑप्शनल बाइंडिंग", "अर्ली एक्जिट", "कंडीशन चेकिंग"],
    "answer_en": "Pattern matching in guards",
    "answer_hi": "गार्ड में पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does '@unchecked Sendable' indicate for a type?",
    "question_hi": "किसी टाइप के लिए '@unchecked Sendable' क्या इंगित करता है?",
    "options_en": ["Manual Sendable conformance", "Automatic Sendable", "Not Sendable", "Conditional Sendable"],
    "options_hi": ["मैनुअल Sendable कन्फॉर्मेंस", "ऑटोमेटिक Sendable", "Sendable नहीं", "कंडीशनल Sendable"],
    "answer_en": "Manual Sendable conformance",
    "answer_hi": "मैनुअल Sendable कन्फॉर्मेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Swift operator allows force unwrapping 'object!.property'?",
    "question_hi": "कौन सा Swift ऑपरेटर फोर्स अनरैपिंग 'object!.property' की अनुमति देता है?",
    "options_en": ["!", "?", "??", "?: "],
    "options_hi": ["!", "?", "??", "?: "],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of 'preconcurrency' attribute on imports?",
    "question_hi": "इम्पोर्ट्स पर 'preconcurrency' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Disables concurrency checking", "Enables async support", "Improves performance", "Adds thread safety"],
    "options_hi": ["कंकरेंसी चेकिंग अक्षम करता है", "एसिंक सपोर्ट सक्षम करता है", "परफॉर्मेंस सुधारता है", "थ्रेड सेफ्टी जोड़ता है"],
    "answer_en": "Disables concurrency checking",
    "answer_hi": "कंकरेंसी चेकिंग अक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which Swift feature allows writing 'if #unavailable(iOS 15)'?",
    "question_hi": "कौन सा Swift फीचर 'if #unavailable(iOS 15)' लिखने की अनुमति देता है?",
    "options_en": ["Negative availability checking", "Platform detection", "Version comparison", "Conditional compilation"],
    "options_hi": ["नकारात्मक उपलब्धता जाँच", "प्लेटफॉर्म पहचान", "संस्करण तुलना", "सशर्त संकलन"],
    "answer_en": "Negative availability checking",
    "answer_hi": "नकारात्मक उपलब्धता जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does 'isolated' parameter in actor methods indicate?",
    "question_hi": "ऐक्टर मेथड्स में 'isolated' पैरामीटर क्या इंगित करता है?",
    "options_en": ["Parameter is actor-isolated", "Parameter is nonisolated", "Improves performance", "Enables async calls"],
    "options_hi": ["पैरामीटर ऐक्टर-आइसोलेटेड है", "पैरामीटर नॉनआइसोलेटेड है", "परफॉर्मेंस सुधारता है", "एसिंक कॉल्स सक्षम करता है"],
    "answer_en": "Parameter is actor-isolated",
    "answer_hi": "पैरामीटर ऐक्टर-आइसोलेटेड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Swift feature allows 'case .success(let value)' syntax?",
    "question_hi": "कौन सा Swift फीचर 'case .success(let value)' सिंटैक्स की अनुमति देता है?",
    "options_en": ["Enum case pattern with binding", "Optional pattern", "Tuple pattern", "Value binding pattern"],
    "options_hi": ["बाइंडिंग के साथ Enum केस पैटर्न", "ऑप्शनल पैटर्न", "टुपल पैटर्न", "वैल्यू बाइंडिंग पैटर्न"],
    "answer_en": "Enum case pattern with binding",
    "answer_hi": "बाइंडिंग के साथ Enum केस पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of '@_exported' attribute on imports?",
    "question_hi": "इम्पोर्ट्स पर '@_exported' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Re-exports imported module", "Hides imports", "Improves compilation", "Enables testing"],
    "options_hi": ["इम्पोर्टेड मॉड्यूल को पुनः निर्यात करता है", "इम्पोर्ट्स छुपाता है", "संकलन सुधारता है", "टेस्टिंग सक्षम करता है"],
    "answer_en": "Re-exports imported module",
    "answer_hi": "इम्पोर्टेड मॉड्यूल को पुनः निर्यात करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift feature allows writing 'for try await line in file.lines'?",
    "question_hi": "कौन सा Swift फीचर 'for try await line in file.lines' लिखने की अनुमति देता है?",
    "options_en": ["Async throwing sequence iteration", "Error handling in loops", "Async file operations", "Combined error and async handling"],
    "options_hi": ["एसिंक थ्रोइंग सीक्वेंस इटरेशन", "लूप्स में एरर हैंडलिंग", "एसिंक फाइल ऑपरेशन्स", "संयुक्त एरर और एसिंक हैंडलिंग"],
    "answer_en": "Async throwing sequence iteration",
    "answer_hi": "एसिंक थ्रोइंग सीक्वेंस इटरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does 'nonmutating' keyword do for setter accessors?",
    "question_hi": "सेटर एक्सेसर्स के लिए 'nonmutating' कीवर्ड क्या करता है?",
    "options_en": ["Allows mutation without modifying self", "Prevents mutation", "Improves performance", "Enables thread safety"],
    "options_hi": ["सेल्फ को संशोधित किए बिना म्यूटेशन की अनुमति देता है", "म्यूटेशन रोकता है", "परफॉर्मेंस सुधारता है", "थ्रेड सेफ्टी सक्षम करता है"],
    "answer_en": "Allows mutation without modifying self",
    "answer_hi": "सेल्फ को संशोधित किए बिना म्यूटेशन की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },  {
    "num": 32,
    "question_en": "Which method creates a type-erased distributed actor in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyDistributedActor", "eraseToAnyDistributedActor()", "DistributedActor.erase()", "No type-erased distributed actor"],
    "options_hi": ["AnyDistributedActor", "eraseToAnyDistributedActor()", "DistributedActor.erase()", "कोई टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर नहीं"],
    "answer_en": "No type-erased distributed actor",
    "answer_hi": "कोई टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of '@unknown default' in switch statements?",
    "question_hi": "स्विच स्टेटमेंट्स में '@unknown default' का उद्देश्य क्या है?",
    "options_en": ["Handles future enum cases", "Default case for all enums", "Improves compilation", "Enables exhaustive switching"],
    "options_hi": ["भविष्य के enum केसेस को हैंडल करता है", "सभी enums के लिए डिफ़ॉल्ट केस", "संकलन सुधारता है", "एक्सॉस्टिव स्विचिंग सक्षम करता है"],
    "answer_en": "Handles future enum cases",
    "answer_hi": "भविष्य के enum केसेस को हैंडल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift operator allows writing 'a ?? b ?? c' chaining?",
    "question_hi": "कौन सा Swift ऑपरेटर 'a ?? b ?? c' चेनिंग लिखने की अनुमति देता है?",
    "options_en": ["Nil-coalescing operator", "Optional chaining", "Ternary operator", "Logical OR"],
    "options_hi": ["निल-कोएलसिंग ऑपरेटर", "ऑप्शनल चेनिंग", "टर्नरी ऑपरेटर", "लॉजिकल OR"],
    "answer_en": "Nil-coalescing operator",
    "answer_hi": "निल-कोएलसिंग ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does 'distributed' keyword indicate for actors?",
    "question_hi": "ऐक्टर्स के लिए 'distributed' कीवर्ड क्या इंगित करता है?",
    "options_en": ["Actor can be accessed remotely", "Improves performance", "Enables clustering", "Distributes workload"],
    "options_hi": ["ऐक्टर को दूरस्थ रूप से एक्सेस किया जा सकता है", "परफॉर्मेंस सुधारता है", "क्लस्टरिंग सक्षम करता है", "वर्कलोड वितरित करता है"],
    "answer_en": "Actor can be accessed remotely",
    "answer_hi": "ऐक्टर को दूरस्थ रूप से एक्सेस किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which Swift feature allows 'guard !array.isEmpty else { return }'?",
    "question_hi": "कौन सा Swift फीचर 'guard !array.isEmpty else { return }' की अनुमति देता है?",
    "options_en": ["Boolean conditions in guard", "Optional binding", "Early exit", "Collection checking"],
    "options_hi": ["गार्ड में बूलियन कंडीशन्स", "ऑप्शनल बाइंडिंग", "अर्ली एक्जिट", "कलेक्शन चेकिंग"],
    "answer_en": "Boolean conditions in guard",
    "answer_hi": "गार्ड में बूलियन कंडीशन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of '@_implicitSelfCapture' attribute?",
    "question_hi": "'@_implicitSelfCapture' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Controls implicit self in closures", "Forces weak self", "Prevents retain cycles", "Improves performance"],
    "options_hi": ["क्लोजर्स में इम्प्लिसिट सेल्फ को नियंत्रित करता है", "वीक सेल्फ फोर्स करता है", "रिटेन साइकल्स रोकता है", "परफॉर्मेंस सुधारता है"],
    "answer_en": "Controls implicit self in closures",
    "answer_hi": "क्लोजर्स में इम्प्लिसिट सेल्फ को नियंत्रित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Swift feature allows writing 'try? expression'?",
    "question_hi": "कौन सा Swift फीचर 'try? expression' लिखने की अनुमति देता है?",
    "options_en": ["Optional try", "Force try", "Error conversion", "Do-try-catch"],
    "options_hi": ["ऑप्शनल ट्राई", "फोर्स ट्राई", "एरर कन्वर्जन", "डू-ट्राई-कैच"],
    "answer_en": "Optional try",
    "answer_hi": "ऑप्शनल ट्राई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does 'consuming' method parameter convention do?",
    "question_hi": "'consuming' मेथड पैरामीटर कन्वेंशन क्या करता है?",
    "options_en": ["Takes ownership of value", "Borrows value", "Copies value", "References value"],
    "options_hi": ["वैल्यू की ओनरशिप लेता है", "वैल्यू उधार लेता है", "वैल्यू कॉपी करता है", "वैल्यू को संदर्भित करता है"],
    "answer_en": "Takes ownership of value",
    "answer_hi": "वैल्यू की ओनरशिप लेता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift feature allows 'case (let x, let y)' tuple pattern?",
    "question_hi": "कौन सा Swift फीचर 'case (let x, let y)' टुपल पैटर्न की अनुमति देता है?",
    "options_en": ["Tuple pattern matching", "Multiple binding", "Value extraction", "Destructuring"],
    "options_hi": ["टुपल पैटर्न मैचिंग", "मल्टीपल बाइंडिंग", "वैल्यू एक्सट्रैक्शन", "डिस्ट्रक्चरिंग"],
    "answer_en": "Tuple pattern matching",
    "answer_hi": "टुपल पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the purpose of '@_dynamicReplacement' attribute?",
    "question_hi": "'@_dynamicReplacement' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Dynamic method replacement", "Runtime optimization", "Compile-time replacement", "Method overriding"],
    "options_hi": ["डायनामिक मेथड रिप्लेसमेंट", "रनटाइम ऑप्टिमाइज़ेशन", "कंपाइल-टाइम रिप्लेसमेंट", "मेथड ओवरराइडिंग"],
    "answer_en": "Dynamic method replacement",
    "answer_hi": "डायनामिक मेथड रिप्लेसमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Swift operator allows writing 'object?.method()'?",
    "question_hi": "कौन सा Swift ऑपरेटर 'object?.method()' लिखने की अनुमति देता है?",
    "options_en": ["Optional chaining", "Force unwrapping", "Nil coalescing", "Ternary operator"],
    "options_hi": ["ऑप्शनल चेनिंग", "फोर्स अनरैपिंग", "निल कोएलसिंग", "टर्नरी ऑपरेटर"],
    "answer_en": "Optional chaining",
    "answer_hi": "ऑप्शनल चेनिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does 'borrowing' parameter convention indicate?",
    "question_hi": "'borrowing' पैरामीटर कन्वेंशन क्या इंगित करता है?",
    "options_en": ["Read-only borrow of value", "Mutable borrow", "Ownership transfer", "Copy semantics"],
    "options_hi": ["वैल्यू की रीड-ओनली उधार", "म्यूटेबल उधार", "ओनरशिप ट्रांसफर", "कॉपी सेमेन्टिक्स"],
    "answer_en": "Read-only borrow of value",
    "answer_hi": "वैल्यू की रीड-ओनली उधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Swift feature allows 'case .success(value)?' pattern?",
    "question_hi": "कौन सा Swift फीचर 'case .success(value)?' पैटर्न की अनुमति देता है?",
    "options_en": ["Optional pattern matching", "Enum case with optional", "Force unwrapping in case", "Optional binding pattern"],
    "options_hi": ["ऑप्शनल पैटर्न मैचिंग", "ऑप्शनल के साथ Enum केस", "केस में फोर्स अनरैपिंग", "ऑप्शनल बाइंडिंग पैटर्न"],
    "answer_en": "Optional pattern matching",
    "answer_hi": "ऑप्शनल पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of '@_transparent' attribute?",
    "question_hi": "'@_transparent' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Force inlining at call site", "Make function transparent", "Improve debugging", "Enable optimization"],
    "options_hi": ["कॉल साइट पर इनलाइनिंग फोर्स करना", "फ़ंक्शन को पारदर्शी बनाना", "डीबगिंग सुधारना", "ऑप्टिमाइज़ेशन सक्षम करना"],
    "answer_en": "Force inlining at call site",
    "answer_hi": "कॉल साइट पर इनलाइनिंग फोर्स करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which Swift feature allows writing 'try! expression'?",
    "question_hi": "कौन सा Swift फीचर 'try! expression' लिखने की अनुमति देता है?",
    "options_en": ["Force try", "Optional try", "Do-try-catch", "Error propagation"],
    "options_hi": ["फोर्स ट्राई", "ऑप्शनल ट्राई", "डू-ट्राई-कैच", "एरर प्रोपेगेशन"],
    "answer_en": "Force try",
    "answer_hi": "फोर्स ट्राई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does 'isolated(any Actor)' parameter type indicate?",
    "question_hi": "'isolated(any Actor)' पैरामीटर टाइप क्या इंगित करता है?",
    "options_en": ["Accepts any actor type", "Specific actor only", "Non-isolated actor", "Global actor"],
    "options_hi": ["किसी भी ऐक्टर टाइप को स्वीकार करता है", "केवल विशिष्ट ऐक्टर", "नॉन-आइसोलेटेड ऐक्टर", "ग्लोबल ऐक्टर"],
    "answer_en": "Accepts any actor type",
    "answer_hi": "किसी भी ऐक्टर टाइप को स्वीकार करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Swift feature allows 'case let x? = optionalValue' pattern?",
    "question_hi": "कौन सा Swift फीचर 'case let x? = optionalValue' पैटर्न की अनुमति देता है?",
    "options_en": ["Optional pattern with binding", "Force unwrapping pattern", "Nil checking pattern", "Optional chaining pattern"],
    "options_hi": ["बाइंडिंग के साथ ऑप्शनल पैटर्न", "फोर्स अनरैपिंग पैटर्न", "निल चेकिंग पैटर्न", "ऑप्शनल चेनिंग पैटर्न"],
    "answer_en": "Optional pattern with binding",
    "answer_hi": "बाइंडिंग के साथ ऑप्शनल पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of '@_hasInitialValue' attribute?",
    "question_hi": "'@_hasInitialValue' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Indicates property has initial value", "No initial value", "Computed property", "Lazy property"],
    "options_hi": ["इंगित करता है कि प्रॉपर्टी में प्रारंभिक मान है", "कोई प्रारंभिक मान नहीं", "कंप्यूटेड प्रॉपर्टी", "आलसी प्रॉपर्टी"],
    "answer_en": "Indicates property has initial value",
    "answer_hi": "इंगित करता है कि प्रॉपर्टी में प्रारंभिक मान है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature allows writing 'await withTaskGroup'?",
    "question_hi": "कौन सा Swift फीचर 'await withTaskGroup' लिखने की अनुमति देता है?",
    "options_en": ["Structured concurrency", "Async/await", "Task groups", "Parallel execution"],
    "options_hi": ["संरचित समवर्तीता", "एसिंक/अवेट", "टास्क ग्रुप्स", "समानांतर निष्पादन"],
    "answer_en": "Structured concurrency",
    "answer_hi": "संरचित समवर्तीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@_nonEphemeral' attribute do for pointer parameters?",
    "question_hi": "पॉइंटर पैरामीटर्स के लिए '@_nonEphemeral' एट्रिब्यूट क्या करता है?",
    "options_en": ["Prevents temporary pointer conversion", "Allows ephemeral pointers", "Improves safety", "Enables optimization"],
    "options_hi": ["अस्थायी पॉइंटर रूपांतरण को रोकता है", "अस्थायी पॉइंटर्स की अनुमति देता है", "सुरक्षा में सुधार करता है", "अनुकूलन सक्षम करता है"],
    "answer_en": "Prevents temporary pointer conversion",
    "answer_hi": "अस्थायी पॉइंटर रूपांतरण को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which Swift feature allows writing 'case is String' type pattern?",
    "question_hi": "कौन सा Swift फीचर 'case is String' टाइप पैटर्न लिखने की अनुमति देता है?",
    "options_en": ["Type casting pattern", "Type checking", "Pattern matching", "Type inference"],
    "options_hi": ["टाइप कास्टिंग पैटर्न", "टाइप चेकिंग", "पैटर्न मैचिंग", "टाइप इन्फरेंस"],
    "answer_en": "Type casting pattern",
    "answer_hi": "टाइप कास्टिंग पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the purpose of '@_implements' attribute?",
    "question_hi": "'@_implements' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Provides protocol implementation", "Method overriding", "Protocol conformance", "Dynamic dispatch"],
    "options_hi": ["प्रोटोकॉल कार्यान्वयन प्रदान करता है", "विधि ओवरराइडिंग", "प्रोटोकॉल अनुपालन", "गतिशील प्रेषण"],
    "answer_en": "Provides protocol implementation",
    "answer_hi": "प्रोटोकॉल कार्यान्वयन प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which Swift feature allows writing 'for case let .success(value) in results'?",
    "question_hi": "कौन सा Swift फीचर 'for case let .success(value) in results' लिखने की अनुमति देता है?",
    "options_en": ["Pattern matching in for loops", "Enum iteration", "Value extraction", "Sequence filtering"],
    "options_hi": ["फॉर लूप्स में पैटर्न मैचिंग", "Enum पुनरावृत्ति", "मूल्य निष्कर्षण", "अनुक्रम फ़िल्टरिंग"],
    "answer_en": "Pattern matching in for loops",
    "answer_hi": "फॉर लूप्स में पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does '@_inheritActorContext' attribute do?",
    "question_hi": "'@_inheritActorContext' एट्रिब्यूट क्या करता है?",
    "options_en": ["Inherits actor context for async functions", "Creates new context", "Changes actor", "Improves performance"],
    "options_hi": ["एसिंक फ़ंक्शंस के लिए ऐक्टर संदर्भ विरासत में मिलता है", "नया संदर्भ बनाता है", "ऐक्टर बदलता है", "प्रदर्शन में सुधार करता है"],
    "answer_en": "Inherits actor context for async functions",
    "answer_hi": "एसिंक फ़ंक्शंस के लिए ऐक्टर संदर्भ विरासत में मिलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which Swift operator allows writing 'object ?? defaultValue'?",
    "question_hi": "कौन सा Swift ऑपरेटर 'object ?? defaultValue' लिखने की अनुमति देता है?",
    "options_en": ["Nil-coalescing operator", "Optional chaining", "Ternary operator", "Default value operator"],
    "options_hi": ["निल-कोएलसिंग ऑपरेटर", "ऑप्शनल चेनिंग", "टर्नरी ऑपरेटर", "डिफ़ॉल्ट वैल्यू ऑपरेटर"],
    "answer_en": "Nil-coalescing operator",
    "answer_hi": "निल-कोएलसिंग ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the purpose of '@_specialize' attribute?",
    "question_hi": "'@_specialize' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Creates specialized versions of generic functions", "Improves performance", "Enables optimization", "Customizes compilation"],
    "options_hi": ["जेनेरिक फ़ंक्शंस के विशेष संस्करण बनाता है", "प्रदर्शन में सुधार करता है", "अनुकूलन सक्षम करता है", "संकलन अनुकूलित करता है"],
    "answer_en": "Creates specialized versions of generic functions",
    "answer_hi": "जेनेरिक फ़ंक्शंस के विशेष संस्करण बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which Swift feature allows writing 'case let (x, y) where x > y'?",
    "question_hi": "कौन सा Swift फीचर 'case let (x, y) where x > y' लिखने की अनुमति देता है?",
    "options_en": ["Pattern matching with where clause", "Tuple pattern", "Conditional binding", "Value comparison"],
    "options_hi": ["व्हेयर क्लॉज के साथ पैटर्न मैचिंग", "टपल पैटर्न", "सशर्त बाध्यकारी", "मूल्य तुलना"],
    "answer_en": "Pattern matching with where clause",
    "answer_hi": "व्हेयर क्लॉज के साथ पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does '@_documentation' attribute provide?",
    "question_hi": "'@_documentation' एट्रिब्यूट क्या प्रदान करता है?",
    "options_en": ["Documentation metadata", "Code comments", "API documentation", "Inline documentation"],
    "options_hi": ["दस्तावेज़ीकरण मेटाडेटा", "कोड टिप्पणियाँ", "एपीआई दस्तावेज़ीकरण", "इनलाइन दस्तावेज़ीकरण"],
    "answer_en": "Documentation metadata",
    "answer_hi": "दस्तावेज़ीकरण मेटाडेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which Swift feature allows writing 'await withThrowingTaskGroup'?",
    "question_hi": "कौन सा Swift फीचर 'await withThrowingTaskGroup' लिखने की अनुमति देता है?",
    "options_en": ["Structured concurrency with error handling", "Async task groups", "Error propagation", "Parallel execution with errors"],
    "options_hi": ["त्रुटि हैंडलिंग के साथ संरचित समवर्तीता", "एसिंक टास्क ग्रुप्स", "त्रुटि प्रसार", "त्रुटियों के साथ समानांतर निष्पादन"],
    "answer_en": "Structured concurrency with error handling",
    "answer_hi": "त्रुटि हैंडलिंग के साथ संरचित समवर्तीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the purpose of '@_marker' attribute on protocols?",
    "question_hi": "प्रोटोकॉल पर '@_marker' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Creates marker protocols without requirements", "Marks important protocols", "Improves performance", "Enables optimization"],
    "options_hi": ["आवश्यकताओं के बिना मार्कर प्रोटोकॉल बनाता है", "महत्वपूर्ण प्रोटोकॉल चिह्नित करता है", "प्रदर्शन में सुधार करता है", "अनुकूलन सक्षम करता है"],
    "answer_en": "Creates marker protocols without requirements",
    "answer_hi": "आवश्यकताओं के बिना मार्कर प्रोटोकॉल बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which Swift feature allows writing 'case .failure(let error) where error.code == 404'?",
    "question_hi": "कौन सा Swift फीचर 'case .failure(let error) where error.code == 404' लिखने की अनुमति देता है?",
    "options_en": ["Pattern matching with conditions", "Enum case binding", "Error handling", "Conditional extraction"],
    "options_hi": ["शर्तों के साथ पैटर्न मैचिंग", "Enum केस बाइंडिंग", "त्रुटि हैंडलिंग", "सशर्त निष्कर्षण"],
    "answer_en": "Pattern matching with conditions",
    "answer_hi": "शर्तों के साथ पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_alwaysEmitIntoClient' attribute guarantee?",
    "question_hi": "'@_alwaysEmitIntoClient' एट्रिब्यूट क्या गारंटी देता है?",
    "options_en": ["Function body always included in client", "Optional inclusion", "Never included", "Conditional inclusion"],
    "options_hi": ["फ़ंक्शन बॉडी हमेशा क्लाइंट में शामिल होती है", "वैकल्पिक समावेश", "कभी शामिल नहीं", "सशर्त समावेश"],
    "answer_en": "Function body always included in client",
    "answer_hi": "फ़ंक्शन बॉडी हमेशा क्लाइंट में शामिल होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which Swift feature allows writing 'for await try line in file.lines'?",
    "question_hi": "कौन सा Swift फीचर 'for await try line in file.lines' लिखने की अनुमति देता है?",
    "options_en": ["Async throwing sequence iteration", "Combined async and error handling", "File streaming", "Concurrent processing"],
    "options_hi": ["एसिंक थ्रोइंग सीक्वेंस इटरेशन", "संयुक्त एसिंक और त्रुटि हैंडलिंग", "फ़ाइल स्ट्रीमिंग", "समवर्ती प्रसंस्करण"],
    "answer_en": "Async throwing sequence iteration",
    "answer_hi": "एसिंक थ्रोइंग सीक्वेंस इटरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the purpose of '@_semantics' attribute?",
    "question_hi": "'@_semantics' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Provides semantic information to compiler", "Improves performance", "Enables optimization", "Adds metadata"],
    "options_hi": ["संकलक को शब्दार्थ जानकारी प्रदान करता है", "प्रदर्शन में सुधार करता है", "अनुकूलन सक्षम करता है", "मेटाडेटा जोड़ता है"],
    "answer_en": "Provides semantic information to compiler",
    "answer_hi": "संकलक को शब्दार्थ जानकारी प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which Swift feature allows writing 'case let .some(value)'?",
    "question_hi": "कौन सा Swift फीचर 'case let .some(value)' लिखने की अनुमति देता है?",
    "options_en": ["Optional enum case pattern", "Some pattern matching", "Optional binding", "Value extraction"],
    "options_hi": ["ऑप्शनल enum केस पैटर्न", "Some पैटर्न मैचिंग", "ऑप्शनल बाइंडिंग", "वैल्यू एक्सट्रैक्शन"],
    "answer_en": "Optional enum case pattern",
    "answer_hi": "ऑप्शनल enum केस पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does '@_disfavoredOverload' attribute indicate?",
    "question_hi": "'@_disfavoredOverload' एट्रिब्यूट क्या इंगित करता है?",
    "options_en": ["Compiler should prefer other overloads", "Preferred overload", "Deprecated overload", "Experimental overload"],
    "options_hi": ["संकलक को अन्य ओवरलोड को प्राथमिकता देनी चाहिए", "पसंदीदा ओवरलोड", "अप्रचलित ओवरलोड", "प्रायोगिक ओवरलोड"],
    "answer_en": "Compiler should prefer other overloads",
    "answer_hi": "संकलक को अन्य ओवरलोड को प्राथमिकता देनी चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which Swift feature allows writing 'guard case .success(let value) = result else { return }'?",
    "question_hi": "कौन सा Swift फीचर 'guard case .success(let value) = result else { return }' लिखने की अनुमति देता है?",
    "options_en": ["Pattern matching in guard statements", "Enum case checking", "Early exit with patterns", "Result handling"],
    "options_hi": ["गार्ड स्टेटमेंट्स में पैटर्न मैचिंग", "Enum केस चेकिंग", "पैटर्न के साथ अर्ली एक्जिट", "रिजल्ट हैंडलिंग"],
    "answer_en": "Pattern matching in guard statements",
    "answer_hi": "गार्ड स्टेटमेंट्स में पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the purpose of '@_optimize' attribute?",
    "question_hi": "'@_optimize' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Controls compiler optimization level", "Improves performance", "Enables specific optimizations", "Customizes compilation"],
    "options_hi": ["संकलक अनुकूलन स्तर को नियंत्रित करता है", "प्रदर्शन में सुधार करता है", "विशिष्ट अनुकूलन सक्षम करता है", "संकलन अनुकूलित करता है"],
    "answer_en": "Controls compiler optimization level",
    "answer_hi": "संकलक अनुकूलन स्तर को नियंत्रित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which Swift feature allows writing 'case let x as String' type pattern?",
    "question_hi": "कौन सा Swift फीचर 'case let x as String' टाइप पैटर्न लिखने की अनुमति देता है?",
    "options_en": ["Type casting pattern with binding", "Type checking", "Pattern matching", "Type conversion"],
    "options_hi": ["बाइंडिंग के साथ टाइप कास्टिंग पैटर्न", "टाइप चेकिंग", "पैटर्न मैचिंग", "टाइप कन्वर्जन"],
    "answer_en": "Type casting pattern with binding",
    "answer_hi": "बाइंडिंग के साथ टाइप कास्टिंग पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@_rawLayout' attribute enable?",
    "question_hi": "'@_rawLayout' एट्रिब्यूट क्या सक्षम करता है?",
    "options_en": ["Control over memory layout", "Automatic layout", "Improved performance", "Memory optimization"],
    "options_hi": ["मेमोरी लेआउट पर नियंत्रण", "स्वचालित लेआउट", "बेहतर प्रदर्शन", "मेमोरी अनुकूलन"],
    "answer_en": "Control over memory layout",
    "answer_hi": "मेमोरी लेआउट पर नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which Swift feature allows writing 'if #unavailable(iOS 15, macOS 12)'?",
    "question_hi": "कौन सा Swift फीचर 'if #unavailable(iOS 15, macOS 12)' लिखने की अनुमति देता है?",
    "options_en": ["Multiple platform unavailability check", "Platform detection", "Version checking", "Conditional compilation"],
    "options_hi": ["एकाधिक प्लेटफॉर्म अनुपलब्धता जाँच", "प्लेटफॉर्म पहचान", "संस्करण जाँच", "सशर्त संकलन"],
    "answer_en": "Multiple platform unavailability check",
    "answer_hi": "एकाधिक प्लेटफॉर्म अनुपलब्धता जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the purpose of '@_specializeExtension' attribute?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Specializes extension methods", "Improves performance", "Enables optimization", "Customizes extensions"],
    "options_hi": ["एक्सटेंशन विधियों को विशेष बनाता है", "प्रदर्शन में सुधार करता है", "अनुकूलन सक्षम करता है", "एक्सटेंशन अनुकूलित करता है"],
    "answer_en": "Specializes extension methods",
    "answer_hi": "एक्सटेंशन विधियों को विशेष बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which Swift feature allows writing 'case .custom(let code, let message)'?",
    "question_hi": "कौन सा Swift फीचर 'case .custom(let code, let message)' लिखने की अनुमति देता है?",
    "options_en": ["Enum case with multiple associated values", "Tuple pattern", "Multiple binding", "Value extraction"],
    "options_hi": ["एकाधिक संबद्ध मानों के साथ Enum केस", "टपल पैटर्न", "एकाधिक बाध्यकारी", "मूल्य निष्कर्षण"],
    "answer_en": "Enum case with multiple associated values",
    "answer_hi": "एकाधिक संबद्ध मानों के साथ Enum केस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_assemblyVision' attribute provide?",
    "question_hi": "'@_assemblyVision' एट्रिब्यूट क्या प्रदान करता है?",
    "options_en": ["Assembly code generation insights", "Performance analysis", "Debug information", "Compilation details"],
    "options_hi": ["असेंबली कोड जनरेशन अंतर्दृष्टि", "प्रदर्शन विश्लेषण", "डीबग जानकारी", "संकलन विवरण"],
    "answer_en": "Assembly code generation insights",
    "answer_hi": "असेंबली कोड जनरेशन अंतर्दृष्टि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which Swift feature allows writing 'await withCheckedContinuation'?",
    "question_hi": "कौन सा Swift फीचर 'await withCheckedContinuation' लिखने की अनुमति देता है?",
    "options_en": ["Continuations for bridging async code", "Async/await", "Callback conversion", "Future/promise pattern"],
    "options_hi": ["एसिंक कोड को ब्रिज करने के लिए कंटिन्यूएशन", "एसिंक/अवेट", "कॉलबैक रूपांतरण", "फ्यूचर/प्रोमिस पैटर्न"],
    "answer_en": "Continuations for bridging async code",
    "answer_hi": "एसिंक कोड को ब्रिज करने के लिए कंटिन्यूएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the purpose of '@_implicitSelfCapture' with parameters?",
    "question_hi": "पैरामीटर्स के साथ '@_implicitSelfCapture' का उद्देश्य क्या है?",
    "options_en": ["Controls self capture behavior in closures", "Forces strong references", "Prevents retain cycles", "Improves performance"],
    "options_hi": ["क्लोजर्स में सेल्फ कैप्चर व्यवहार को नियंत्रित करता है", "स्ट्रांग रिफरेंस फोर्स करता है", "रिटेन साइकल्स रोकता है", "प्रदर्शन में सुधार करता है"],
    "answer_en": "Controls self capture behavior in closures",
    "answer_hi": "क्लोजर्स में सेल्फ कैप्चर व्यवहार को नियंत्रित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which Swift feature allows writing 'case let .range(start...end)'?",
    "question_hi": "कौन सा Swift फीचर 'case let .range(start...end)' लिखने की अनुमति देता है?",
    "options_en": ["Range pattern matching", "Enum case with range", "Pattern matching", "Value extraction"],
    "options_hi": ["रेंज पैटर्न मैचिंग", "रेंज के साथ Enum केस", "पैटर्न मैचिंग", "वैल्यू एक्सट्रैक्शन"],
    "answer_en": "Range pattern matching",
    "answer_hi": "रेंज पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does '@_alwaysEmitConformanceMetadata' attribute ensure?",
    "question_hi": "'@_alwaysEmitConformanceMetadata' एट्रिब्यूट क्या सुनिश्चित करता है?",
    "options_en": ["Protocol conformance metadata always emitted", "Optional emission", "Never emitted", "Conditional emission"],
    "options_hi": ["प्रोटोकॉल कन्फॉर्मेंस मेटाडेटा हमेशा उत्सर्जित होता है", "वैकल्पिक उत्सर्जन", "कभी उत्सर्जित नहीं", "सशर्त उत्सर्जन"],
    "answer_en": "Protocol conformance metadata always emitted",
    "answer_hi": "प्रोटोकॉल कन्फॉर्मेंस मेटाडेटा हमेशा उत्सर्जित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which Swift feature allows writing 'await Task.sleep(nanoseconds:)'?",
    "question_hi": "कौन सा Swift फीचर 'await Task.sleep(nanoseconds:)' लिखने की अनुमति देता है?",
    "options_en": ["Task-based sleeping", "Async delays", "Concurrent timing", "Suspending execution"],
    "options_hi": ["टास्क-आधारित स्लीपिंग", "एसिंक विलंब", "समवर्ती समय", "निष्पादन निलंबित करना"],
    "answer_en": "Task-based sleeping",
    "answer_hi": "टास्क-आधारित स्लीपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the purpose of '@_hasStorage' attribute?",
    "question_hi": "'@_hasStorage' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Indicates property has storage", "Computed property", "Lazy property", "Stored property"],
    "options_hi": ["इंगित करता है कि संपत्ति में भंडारण है", "गणना की गई संपत्ति", "आलसी संपत्ति", "संग्रहीत संपत्ति"],
    "answer_en": "Indicates property has storage",
    "answer_hi": "इंगित करता है कि संपत्ति में भंडारण है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which Swift feature allows writing 'case .none:' for optional?",
    "question_hi": "कौन सा Swift फीचर ऑप्शनल के लिए 'case .none:' लिखने की अनुमति देता है?",
    "options_en": ["Optional enum case pattern", "Nil pattern matching", "Optional checking", "Value absence pattern"],
    "options_hi": ["ऑप्शनल enum केस पैटर्न", "निल पैटर्न मैचिंग", "ऑप्शनल चेकिंग", "मूल्य अनुपस्थिति पैटर्न"],
    "answer_en": "Optional enum case pattern",
    "answer_hi": "ऑप्शनल enum केस पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '@_nonoverride' attribute indicate?",
    "question_hi": "'@_nonoverride' एट्रिब्यूट क्या इंगित करता है?",
    "options_en": ["Method does not override", "Force override", "Optional override", "Dynamic override"],
    "options_hi": ["विधि ओवरराइड नहीं करती", "फोर्स ओवरराइड", "ऑप्शनल ओवरराइड", "डायनामिक ओवरराइड"],
    "answer_en": "Method does not override",
    "answer_hi": "विधि ओवरराइड नहीं करती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which Swift feature allows writing 'case let path as KeyPath'?",
    "question_hi": "कौन सा Swift फीचर 'case let path as KeyPath' लिखने की अनुमति देता है?",
    "options_en": ["KeyPath type pattern matching", "Type casting", "Pattern matching", "KeyPath checking"],
    "options_hi": ["KeyPath टाइप पैटर्न मैचिंग", "टाइप कास्टिंग", "पैटर्न मैचिंग", "KeyPath चेकिंग"],
    "answer_en": "KeyPath type pattern matching",
    "answer_hi": "KeyPath टाइप पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the purpose of '@_effects(readonly)' attribute?",
    "question_hi": "'@_effects(readonly)' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Indicates function only reads memory", "No side effects", "Improves performance", "Enables optimization"],
    "options_hi": ["इंगित करता है कि फ़ंक्शन केवल मेमोरी पढ़ता है", "कोई साइड इफेक्ट नहीं", "प्रदर्शन में सुधार करता है", "अनुकूलन सक्षम करता है"],
    "answer_en": "Indicates function only reads memory",
    "answer_hi": "इंगित करता है कि फ़ंक्शन केवल मेमोरी पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which Swift feature allows writing 'await Task.detached'?",
    "question_hi": "कौन सा Swift फीचर 'await Task.detached' लिखने की अनुमति देता है?",
    "options_en": ["Detached task creation", "Async task spawning", "Concurrent execution", "Background tasks"],
    "options_hi": ["डिटैच्ड टास्क क्रिएशन", "एसिंक टास्क स्पॉनिंग", "समवर्ती निष्पादन", "बैकग्राउंड टास्क्स"],
    "answer_en": "Detached task creation",
    "answer_hi": "डिटैच्ड टास्क क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_show_in_interface' attribute control?",
    "question_hi": "'@_show_in_interface' एट्रिब्यूट क्या नियंत्रित करता है?",
    "options_en": ["Visibility in generated interface", "API exposure", "Documentation display", "Interface generation"],
    "options_hi": ["जनरेटेड इंटरफेस में दृश्यता", "एपीआई एक्सपोजर", "दस्तावेज़ीकरण प्रदर्शन", "इंटरफेस जनरेशन"],
    "answer_en": "Visibility in generated interface",
    "answer_hi": "जनरेटेड इंटरफेस में दृश्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which Swift feature allows writing 'case let regex = /pattern/'?",
    "question_hi": "कौन सा Swift फीचर 'case let regex = /pattern/' लिखने की अनुमति देता है?",
    "options_en": ["Regex literal pattern matching", "String pattern", "Regular expression matching", "Pattern compilation"],
    "options_hi": ["रेगेक्स लिटरल पैटर्न मैचिंग", "स्ट्रिंग पैटर्न", "रेगुलर एक्सप्रेशन मैचिंग", "पैटर्न कंपाइलेशन"],
    "answer_en": "Regex literal pattern matching",
    "answer_hi": "रेगेक्स लिटरल पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the purpose of '@_cdecl' attribute?",
    "question_hi": "'@_cdecl' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Exposes Swift function to C", "C compatibility", "Foreign function interface", "Interoperability"],
    "options_hi": ["Swift फ़ंक्शन को C में एक्सपोज़ करता है", "C संगतता", "विदेशी फ़ंक्शन इंटरफ़ेस", "अंतरसंचालन"],
    "answer_en": "Exposes Swift function to C",
    "answer_hi": "Swift फ़ंक्शन को C में एक्सपोज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which Swift feature allows writing 'await withUnsafeContinuation'?",
    "question_hi": "कौन सा Swift फीचर 'await withUnsafeContinuation' लिखने की अनुमति देता है?",
    "options_en": ["Unsafe continuations for performance", "Async/await", "Callback conversion", "Low-level async"],
    "options_hi": ["प्रदर्शन के लिए अनसेफ कंटिन्यूएशन", "एसिंक/अवेट", "कॉलबैक रूपांतरण", "लो-लेवल एसिंक"],
    "answer_en": "Unsafe continuations for performance",
    "answer_hi": "प्रदर्शन के लिए अनसेफ कंटिन्यूएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does '@_disfavoredOverload' do for function selection?",
    "question_hi": "फ़ंक्शन चयन के लिए '@_disfavoredOverload' क्या करता है?",
    "options_en": ["Makes overload less preferred", "Makes overload preferred", "Hides overload", "Deprecates overload"],
    "options_hi": ["ओवरलोड को कम पसंदीदा बनाता है", "ओवरलोड को पसंदीदा बनाता है", "ओवरलोड छुपाता है", "ओवरलोड अप्रचलित करता है"],
    "answer_en": "Makes overload less preferred",
    "answer_hi": "ओवरलोड को कम पसंदीदा बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which Swift feature allows writing 'case let .range(start..<end)'?",
    "question_hi": "कौन सा Swift फीचर 'case let .range(start..<end)' लिखने की अनुमति देता है?",
    "options_en": ["Half-open range pattern", "Range pattern matching", "Enum case with range", "Pattern matching"],
    "options_hi": ["हाफ-ओपन रेंज पैटर्न", "रेंज पैटर्न मैचिंग", "रेंज के साथ Enum केस", "पैटर्न मैचिंग"],
    "answer_en": "Half-open range pattern",
    "answer_hi": "हाफ-ओपन रेंज पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the purpose of '@_transparent' for debug builds?",
    "question_hi": "डीबग बिल्ड्स के लिए '@_transparent' का उद्देश्य क्या है?",
    "options_en": ["Always inlines for debugging", "Improves debug information", "Disables optimization", "Enables stepping"],
    "options_hi": ["डीबगिंग के लिए हमेशा इनलाइन करता है", "डीबग जानकारी में सुधार करता है", "अनुकूलन अक्षम करता है", "स्टेपिंग सक्षम करता है"],
    "answer_en": "Always inlines for debugging",
    "answer_hi": "डीबगिंग के लिए हमेशा इनलाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which Swift feature allows writing 'await Task.yield()'?",
    "question_hi": "कौन सा Swift फीचर 'await Task.yield()' लिखने की अनुमति देता है?",
    "options_en": ["Voluntarily yields thread", "Async suspension", "Cooperative multitasking", "Task switching"],
    "options_hi": ["स्वेच्छा से थ्रेड यील्ड करता है", "एसिंक सस्पेंशन", "सहकारी मल्टीटास्किंग", "टास्क स्विचिंग"],
    "answer_en": "Voluntarily yields thread",
    "answer_hi": "स्वेच्छा से थ्रेड यील्ड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does '@_implements(Protocol, method)' syntax do?",
    "question_hi": "'@_implements(Protocol, method)' सिंटैक्स क्या करता है?",
    "options_en": ["Provides implementation for protocol method", "Method overriding", "Protocol conformance", "Dynamic dispatch"],
    "options_hi": ["प्रोटोकॉल मेथड के लिए इम्प्लीमेंटेशन प्रदान करता है", "मेथड ओवरराइडिंग", "प्रोटोकॉल कन्फॉर्मेंस", "डायनामिक डिस्पैच"],
    "answer_en": "Provides implementation for protocol method",
    "answer_hi": "प्रोटोकॉल मेथड के लिए इम्प्लीमेंटेशन प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which Swift feature allows writing 'case let .regex(match)'?",
    "question_hi": "कौन सा Swift फीचर 'case let .regex(match)' लिखने की अनुमति देता है?",
    "options_en": ["Regex matching in pattern", "String pattern", "Regular expression", "Pattern extraction"],
    "options_hi": ["पैटर्न में रेगेक्स मैचिंग", "स्ट्रिंग पैटर्न", "रेगुलर एक्सप्रेशन", "पैटर्न एक्सट्रैक्शन"],
    "answer_en": "Regex matching in pattern",
    "answer_hi": "पैटर्न में रेगेक्स मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the purpose of '@_nonEphemeral' for safety?",
    "question_hi": "सुरक्षा के लिए '@_nonEphemeral' का उद्देश्य क्या है?",
    "options_en": ["Prevents dangling pointers", "Improves memory safety", "Enables optimization", "Prevents leaks"],
    "options_hi": ["डैंगलिंग पॉइंटर्स रोकता है", "मेमोरी सेफ्टी सुधारता है", "ऑप्टिमाइज़ेशन सक्षम करता है", "लीक्स रोकता है"],
    "answer_en": "Prevents dangling pointers",
    "answer_hi": "डैंगलिंग पॉइंटर्स रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which Swift feature allows writing 'await Task.group'?",
    "question_hi": "कौन सा Swift फीचर 'await Task.group' लिखने की अनुमति देता है?",
    "options_en": ["Task group creation and management", "Async task groups", "Structured concurrency", "Parallel execution"],
    "options_hi": ["टास्क ग्रुप क्रिएशन और मैनेजमेंट", "एसिंक टास्क ग्रुप्स", "स्ट्रक्चर्ड कंकरेंसी", "पैरेलल एक्जीक्यूशन"],
    "answer_en": "Task group creation and management",
    "answer_hi": "टास्क ग्रुप क्रिएशन और मैनेजमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_optimize(none)' disable?",
    "question_hi": "'@_optimize(none)' क्या अक्षम करता है?",
    "options_en": ["All compiler optimizations", "Specific optimizations", "Debug optimizations", "Release optimizations"],
    "options_hi": ["सभी कंपाइलर ऑप्टिमाइज़ेशन", "विशिष्ट ऑप्टिमाइज़ेशन", "डीबग ऑप्टिमाइज़ेशन", "रिलीज़ ऑप्टिमाइज़ेशन"],
    "answer_en": "All compiler optimizations",
    "answer_hi": "सभी कंपाइलर ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift feature allows writing 'case let .regex(captures)' with multiple groups?",
    "question_hi": "कौन सा Swift फीचर एकाधिक समूहों के साथ 'case let .regex(captures)' लिखने की अनुमति देता है?",
    "options_en": ["Regex capture group pattern matching", "Multiple value extraction", "Pattern matching", "String parsing"],
    "options_hi": ["रेगेक्स कैप्चर ग्रुप पैटर्न मैचिंग", "मल्टीपल वैल्यू एक्सट्रैक्शन", "पैटर्न मैचिंग", "स्ट्रिंग पार्सिंग"],
    "answer_en": "Regex capture group pattern matching",
    "answer_hi": "रेगेक्स कैप्चर ग्रुप पैटर्न मैचिंग",
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