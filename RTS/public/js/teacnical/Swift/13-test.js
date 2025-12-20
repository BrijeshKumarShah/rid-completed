const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a constant in Swift?",
    "question_hi": "Swift में किस कीवर्ड का उपयोग कॉन्स्टेंट डिक्लेयर करने के लिए किया जाता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the default access level in Swift?",
    "question_hi": "Swift में डिफ़ॉल्ट एक्सेस लेवल क्या है?",
    "options_en": ["internal", "public", "private", "fileprivate"],
    "options_hi": ["internal", "public", "private", "fileprivate"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which protocol must be adopted for error handling in Swift?",
    "question_hi": "Swift में एरर हैंडलिंग के लिए किस प्रोटोकॉल को अपनाना चाहिए?",
    "options_en": ["Error", "Throwable", "Exception", "Fault"],
    "options_hi": ["Error", "Throwable", "Exception", "Fault"],
    "answer_en": "Error",
    "answer_hi": "Error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'weak' keyword do in Swift?",
    "question_hi": "Swift में 'weak' कीवर्ड क्या करता है?",
    "options_en": ["Prevents strong reference cycles", "Makes variable immutable", "Increases reference count", "Speeds up execution"],
    "options_hi": ["स्ट्रॉंग रेफरेंस साइकिल रोकता है", "वेरिएबल को इम्यूटेबल बनाता है", "रेफरेंस काउंट बढ़ाता है", "एक्जीक्यूशन तेज करता है"],
    "answer_en": "Prevents strong reference cycles",
    "answer_hi": "स्ट्रॉंग रेफरेंस साइकिल रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used for optional unwrapping in Swift?",
    "question_hi": "Swift में ऑप्शनल अनरैपिंग के लिए किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["!", "?", "??", "&"],
    "options_hi": ["!", "?", "??", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of 'guard' statement in Swift?",
    "question_hi": "Swift में 'guard' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Early exit from scope", "Loop control", "Error throwing", "Type checking"],
    "options_hi": ["स्कोप से जल्दी बाहर निकलना", "लूप कंट्रोल", "एरर थ्रो करना", "टाइप चेकिंग"],
    "answer_en": "Early exit from scope",
    "answer_hi": "स्कोप से जल्दी बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection type is ordered and allows duplicate elements in Swift?",
    "question_hi": "Swift में कौन सा कलेक्शन टाइप ऑर्डर होता है और डुप्लिकेट एलिमेंट्स की अनुमति देता है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["Array", "Set", "Dictionary", "Tuple"],
    "answer_en": "Array",
    "answer_hi": "Array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'Codable' protocol combine in Swift?",
    "question_hi": "Swift में 'Codable' प्रोटोकॉल किन दो को जोड़ता है?",
    "options_en": ["Encodable & Decodable", "Equatable & Hashable", "Comparable & Sequence", "Error & Result"],
    "options_hi": ["Encodable & Decodable", "Equatable & Hashable", "Comparable & Sequence", "Error & Result"],
    "answer_en": "Encodable & Decodable",
    "answer_hi": "Encodable & Decodable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword defines a function that can throw errors?",
    "question_hi": "कौन सा कीवर्ड एक फ़ंक्शन को डिफाइन करता है जो एरर्स थ्रो कर सकता है?",
    "options_en": ["throws", "throwsError", "canThrow", "throwable"],
    "options_hi": ["throws", "throwsError", "canThrow", "throwable"],
    "answer_en": "throws",
    "answer_hi": "throws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'lazy' used for in Swift?",
    "question_hi": "Swift में 'lazy' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Delayed initialization", "Slow execution", "Memory optimization", "Thread safety"],
    "options_hi": ["विलंबित इनिशियलाइज़ेशन", "धीमी एक्जीक्यूशन", "मेमोरी ऑप्टिमाइज़ेशन", "थ्रेड सेफ्टी"],
    "answer_en": "Delayed initialization",
    "answer_hi": "विलंबित इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which operator provides nil-coalescing in Swift?",
    "question_hi": "Swift में nil-coalescing प्रदान करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["??", "!", "?", "?:", "??"],
    "options_hi": ["??", "!", "?", "?:", "??"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the primary use of 'defer' in Swift?",
    "question_hi": "Swift में 'defer' का प्राथमिक उपयोग क्या है?",
    "options_en": ["Execute code before leaving scope", "Delay execution", "Skip code", "Loop termination"],
    "options_hi": ["स्कोप छोड़ने से पहले कोड एक्जीक्यूट करना", "एक्जीक्यूशन में देरी", "कोड स्किप करना", "लूप टर्मिनेशन"],
    "answer_en": "Execute code before leaving scope",
    "answer_hi": "स्कोप छोड़ने से पहले कोड एक्जीक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which protocol is required for custom types to be used as dictionary keys?",
    "question_hi": "कस्टम टाइप्स को डिक्शनरी कीज़ के रूप में उपयोग करने के लिए किस प्रोटोकॉल की आवश्यकता होती है?",
    "options_en": ["Hashable", "Equatable", "Comparable", "Codable"],
    "options_hi": ["Hashable", "Equatable", "Comparable", "Codable"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does 'inout' parameter do in Swift?",
    "question_hi": "Swift में 'inout' पैरामीटर क्या करता है?",
    "options_en": ["Allows modifying original value", "Makes parameter optional", "Forces value type", "Creates copy"],
    "options_hi": ["मूल वैल्यू को मॉडिफाई करने की अनुमति देता है", "पैरामीटर को ऑप्शनल बनाता है", "वैल्यू टाइप फोर्स करता है", "कॉपी बनाता है"],
    "answer_en": "Allows modifying original value",
    "answer_hi": "मूल वैल्यू को मॉडिफाई करने की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which collection type stores unique unordered elements?",
    "question_hi": "कौन सा कलेक्शन टाइप यूनिक अनऑर्डर्ड एलिमेंट्स स्टोर करता है?",
    "options_en": ["Set", "Array", "Dictionary", "Tuple"],
    "options_hi": ["Set", "Array", "Dictionary", "Tuple"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'associatedtype' used for in Swift protocols?",
    "question_hi": "Swift प्रोटोकॉल्स में 'associatedtype' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Placeholder for concrete type", "Type alias", "Generic constraint", "Protocol inheritance"],
    "options_hi": ["कंक्रीट टाइप के लिए प्लेसहोल्डर", "टाइप एलियास", "जेनेरिक कंस्ट्रेंट", "प्रोटोकॉल इनहेरिटेंस"],
    "answer_en": "Placeholder for concrete type",
    "answer_hi": "कंक्रीट टाइप के लिए प्लेसहोल्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which access control restricts usage to current file?",
    "question_hi": "कौन सा एक्सेस कंट्रोल करंट फाइल तक उपयोग को रिस्ट्रिक्ट करता है?",
    "options_en": ["fileprivate", "private", "internal", "public"],
    "options_hi": ["fileprivate", "private", "internal", "public"],
    "answer_en": "fileprivate",
    "answer_hi": "fileprivate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of 'didSet' property observer?",
    "question_hi": "'didSet' प्रॉपर्टी ऑब्जर्वर का उद्देश्य क्या है?",
    "options_en": ["Called after value changes", "Called before value changes", "Prevents changes", "Validates new value"],
    "options_hi": ["वैल्यू चेंज होने के बाद कॉल होता है", "वैल्यू चेंज होने से पहले कॉल होता है", "चेंजेस रोकता है", "नई वैल्यू वैलिडेट करता है"],
    "answer_en": "Called after value changes",
    "answer_hi": "वैल्यू चेंज होने के बाद कॉल होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which loop is guaranteed to execute at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार एक्जीक्यूट होने की गारंटी देता है?",
    "options_en": ["repeat-while", "while", "for-in", "for"],
    "options_hi": ["repeat-while", "while", "for-in", "for"],
    "answer_en": "repeat-while",
    "answer_hi": "repeat-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'Self' refer to in Swift protocols?",
    "question_hi": "Swift प्रोटोकॉल्स में 'Self' क्या रेफर करता है?",
    "options_en": ["Conforming type", "Protocol itself", "Current instance", "Base class"],
    "options_hi": ["कन्फॉर्मिंग टाइप", "प्रोटोकॉल खुद", "करंट इंस्टेंस", "बेस क्लास"],
    "answer_en": "Conforming type",
    "answer_hi": "कन्फॉर्मिंग टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which keyword creates a copy-on-write behavior?",
    "question_hi": "कौन सा कीवर्ड कॉपी-ऑन-राइट बिहेवियर बनाता है?",
    "options_en": ["struct", "class", "enum", "protocol"],
    "options_hi": ["struct", "class", "enum", "protocol"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'optional chaining' used for?",
    "question_hi": "'optional chaining' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Safely access optional properties", "Force unwrap optionals", "Create optional values", "Remove optionals"],
    "options_hi": ["ऑप्शनल प्रॉपर्टीज को सुरक्षित रूप से एक्सेस करना", "ऑप्शनल्स को फोर्स अनरैप करना", "ऑप्शनल वैल्यूज बनाना", "ऑप्शनल्स हटाना"],
    "answer_en": "Safely access optional properties",
    "answer_hi": "ऑप्शनल प्रॉपर्टीज को सुरक्षित रूप से एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which pattern is enforced by 'Result' type?",
    "question_hi": "'Result' टाइप द्वारा कौन सा पैटर्न लागू किया जाता है?",
    "options_en": ["Success/Failure handling", "Singleton", "Factory", "Observer"],
    "options_hi": ["सक्सेस/फेल्योर हैंडलिंग", "सिंगलटन", "फैक्टरी", "ऑब्जर्वर"],
    "answer_en": "Success/Failure handling",
    "answer_hi": "सक्सेस/फेल्योर हैंडलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does 'Equatable' protocol require?",
    "question_hi": "'Equatable' प्रोटोकॉल को क्या चाहिए?",
    "options_en": ["== operator implementation", "Hash function", "Comparison operators", "Encoding method"],
    "options_hi": ["== ऑपरेटर इम्प्लीमेंटेशन", "हैश फ़ंक्शन", "कम्पेरिज़न ऑपरेटर्स", "एन्कोडिंग मेथड"],
    "answer_en": "== operator implementation",
    "answer_hi": "== ऑपरेटर इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which closure captures values as mutable?",
    "question_hi": "कौन सा क्लोजर वैल्यूज को म्यूटेबल के रूप में कैप्चर करता है?",
    "options_en": ["escaping closure", "autoclosure", "inout closure", "trailing closure"],
    "options_hi": ["एस्केपिंग क्लोजर", "ऑटोक्लोजर", "इनआउट क्लोजर", "ट्रेलिंग क्लोजर"],
    "answer_en": "inout closure",
    "answer_hi": "इनआउट क्लोजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'typealias' used for?",
    "question_hi": "'typealias' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Create alternative type name", "Define new type", "Type conversion", "Protocol conformance"],
    "options_hi": ["वैकल्पिक टाइप नेम बनाना", "नया टाइप डिफाइन करना", "टाइप कन्वर्ज़न", "प्रोटोकॉल कन्फॉर्मेंस"],
    "answer_en": "Create alternative type name",
    "answer_hi": "वैकल्पिक टाइप नेम बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword makes class inheritance possible?",
    "question_hi": "कौन सा कीवर्ड क्लास इनहेरिटेंस को संभव बनाता है?",
    "options_en": ["class", "struct", "final", "private"],
    "options_hi": ["class", "struct", "final", "private"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does 'CaseIterable' protocol provide?",
    "question_hi": "'CaseIterable' प्रोटोकॉल क्या प्रदान करता है?",
    "options_en": ["allCases property", "Case enumeration", "Iteration protocol", "Sequence conformance"],
    "options_hi": ["allCases प्रॉपर्टी", "केस एन्यूमरेशन", "इटरेशन प्रोटोकॉल", "सीक्वेंस कन्फॉर्मेंस"],
    "answer_en": "allCases property",
    "answer_hi": "allCases प्रॉपर्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is called when optional value is nil?",
    "question_hi": "ऑप्शनल वैल्यू nil होने पर कौन सी मेथड कॉल होती है?",
    "options_en": ["nil-coalescing operator", "Force unwrap", "Optional binding", "Guard statement"],
    "options_hi": ["nil-coalescing ऑपरेटर", "फोर्स अनरैप", "ऑप्शनल बाइंडिंग", "गार्ड स्टेटमेंट"],
    "answer_en": "nil-coalescing operator",
    "answer_hi": "nil-coalescing ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'escaping' closure?",
    "question_hi": "'escaping' क्लोजर क्या है?",
    "options_en": ["Outlives function scope", "Immediately executed", "Cannot capture values", "Synchronous only"],
    "options_hi": ["फ़ंक्शन स्कोप से बाहर रहता है", "तुरंत एक्जीक्यूट होता है", "वैल्यूज कैप्चर नहीं कर सकता", "केवल सिंक्रोनस"],
    "answer_en": "Outlives function scope",
    "answer_hi": "फ़ंक्शन स्कोप से बाहर रहता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which protocol enables string representation?",
    "question_hi": "कौन सा प्रोटोकॉल स्ट्रिंग रिप्रेजेंटेशन सक्षम करता है?",
    "options_en": ["CustomStringConvertible", "StringProtocol", "TextRepresentable", "Displayable"],
    "options_hi": ["CustomStringConvertible", "StringProtocol", "TextRepresentable", "Displayable"],
    "answer_en": "CustomStringConvertible",
    "answer_hi": "CustomStringConvertible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does 'mutating' keyword allow?",
    "question_hi": "'mutating' कीवर्ड क्या अनुमति देता है?",
    "options_en": ["Modify struct properties", "Change class instances", "Alter constants", "Modify protocols"],
    "options_hi": ["स्ट्रक्चर प्रॉपर्टीज मॉडिफाई करना", "क्लास इंस्टेंसेस बदलना", "कॉन्स्टेंट्स बदलना", "प्रोटोकॉल मॉडिफाई करना"],
    "answer_en": "Modify struct properties",
    "answer_hi": "स्ट्रक्चर प्रॉपर्टीज मॉडिफाई करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which type is used for asynchronous code?",
    "question_hi": "असिंक्रोनस कोड के लिए किस टाइप का उपयोग किया जाता है?",
    "options_en": ["async/await", "DispatchQueue", "OperationQueue", "Thread"],
    "options_hi": ["async/await", "DispatchQueue", "OperationQueue", "Thread"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'where' clause used for in generics?",
    "question_hi": "जेनेरिक्स में 'where' क्लॉज़ का उपयोग किस लिए किया जाता है?",
    "options_en": ["Add type constraints", "Define scope", "Specify conditions", "Import modules"],
    "options_hi": ["टाइप कंस्ट्रेंट्स जोड़ना", "स्कोप डिफाइन करना", "कंडीशन्स स्पेसिफाई करना", "मॉड्यूल्स इम्पोर्ट करना"],
    "answer_en": "Add type constraints",
    "answer_hi": "टाइप कंस्ट्रेंट्स जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method provides default implementation?",
    "question_hi": "कौन सी मेथड डिफ़ॉल्ट इम्प्लीमेंटेशन प्रदान करती है?",
    "options_en": ["Protocol extension", "Base class", "Abstract class", "Interface"],
    "options_hi": ["प्रोटोकॉल एक्सटेंशन", "बेस क्लास", "अब्सट्रैक्ट क्लास", "इंटरफ़ेस"],
    "answer_en": "Protocol extension",
    "answer_hi": "प्रोटोकॉल एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does 'compactMap' do?",
    "question_hi": "'compactMap' क्या करता है?",
    "options_en": ["Transforms and removes nil", "Filters elements", "Maps to new type", "Reduces collection"],
    "options_hi": ["ट्रांसफॉर्म करता है और nil हटाता है", "एलिमेंट्स फ़िल्टर करता है", "नए टाइप में मैप करता है", "कलेक्शन रिड्यूस करता है"],
    "answer_en": "Transforms and removes nil",
    "answer_hi": "ट्रांसफॉर्म करता है और nil हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which attribute marks discardable result?",
    "question_hi": "कौन सा एट्रिब्यूट डिस्कार्डेबल रिजल्ट को मार्क करता है?",
    "options_en": ["@discardableResult", "@warn_unused_result", "@noResult", "@ignoreResult"],
    "options_hi": ["@discardableResult", "@warn_unused_result", "@noResult", "@ignoreResult"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'keyPath' used for?",
    "question_hi": "'keyPath' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Reference property indirectly", "Dictionary keys", "Encryption paths", "File system paths"],
    "options_hi": ["प्रॉपर्टी को इनडायरेक्ट रेफर करना", "डिक्शनरी कीज़", "एन्क्रिप्शन पाथ्स", "फाइल सिस्टम पाथ्स"],
    "answer_en": "Reference property indirectly",
    "answer_hi": "प्रॉपर्टी को इनडायरेक्ट रेफर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which protocol enables comparison with <, >, <=, >=?",
    "question_hi": "कौन सा प्रोटोकॉल <, >, <=, >= के साथ तुलना सक्षम करता है?",
    "options_en": ["Comparable", "Equatable", "Ordered", "Sortable"],
    "options_hi": ["Comparable", "Equatable", "Ordered", "Sortable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does 'fallthrough' do in switch?",
    "question_hi": "स्विच में 'fallthrough' क्या करता है?",
    "options_en": ["Continue to next case", "Break switch", "Return value", "Throw error"],
    "options_hi": ["अगले केस में जारी रखना", "स्विच ब्रेक करना", "वैल्यू रिटर्न करना", "एरर थ्रो करना"],
    "answer_en": "Continue to next case",
    "answer_hi": "अगले केस में जारी रखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which type is thread-safe by default?",
    "question_hi": "कौन सा टाइप डिफ़ॉल्ट रूप से थ्रेड-सेफ होता है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is '@MainActor' for?",
    "question_hi": "'@MainActor' किस लिए है?",
    "options_en": ["Main thread execution", "Primary actor", "Main class", "Principal object"],
    "options_hi": ["मेन थ्रेड एक्जीक्यूशन", "प्राइमरी एक्टर", "मेन क्लास", "प्रिंसिपल ऑब्जेक्ट"],
    "answer_en": "Main thread execution",
    "answer_hi": "मेन थ्रेड एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method creates array with repeated value?",
    "question_hi": "कौन सी मेथड रिपीटेड वैल्यू के साथ ऐरे बनाती है?",
    "options_en": ["Array(repeating:count:)", "Array(repeat:times:)", "Array(fill:count:)", "Array(duplicate:times:)"],
    "options_hi": ["Array(repeating:count:)", "Array(repeat:times:)", "Array(fill:count:)", "Array(duplicate:times:)"],
    "answer_en": "Array(repeating:count:)",
    "answer_hi": "Array(repeating:count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'isolated' parameter do?",
    "question_hi": "'isolated' पैरामीटर क्या करता है?",
    "options_en": ["Enforces actor isolation", "Creates separate thread", "Isolates memory", "Prevents sharing"],
    "options_hi": ["एक्टर आइसोलेशन लागू करता है", "अलग थ्रेड बनाता है", "मेमोरी आइसोलेट करता है", "शेयरिंग रोकता है"],
    "answer_en": "Enforces actor isolation",
    "answer_hi": "एक्टर आइसोलेशन लागू करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which pattern uses 'some' keyword?",
    "question_hi": "कौन सा पैटर्न 'some' कीवर्ड का उपयोग करता है?",
    "options_en": ["Opaque return type", "Optional type", "Generic type", "Protocol type"],
    "options_hi": ["ओपेक रिटर्न टाइप", "ऑप्शनल टाइप", "जेनेरिक टाइप", "प्रोटोकॉल टाइप"],
    "answer_en": "Opaque return type",
    "answer_hi": "ओपेक रिटर्न टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'nonisolated' used for?",
    "question_hi": "'nonisolated' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Opt out of actor isolation", "Create isolated context", "Prevent concurrency", "Enable threading"],
    "options_hi": ["एक्टर आइसोलेशन से बाहर निकलना", "आइसोलेटेड कॉन्टेक्स्ट बनाना", "कनकरेंसी रोकना", "थ्रेडिंग सक्षम करना"],
    "answer_en": "Opt out of actor isolation",
    "answer_hi": "एक्टर आइसोलेशन से बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which protocol enables sequence iteration?",
    "question_hi": "कौन सा प्रोटोकॉल सीक्वेंस इटरेशन सक्षम करता है?",
    "options_en": ["Sequence", "IteratorProtocol", "Iterable", "Enumerable"],
    "options_hi": ["Sequence", "IteratorProtocol", "Iterable", "Enumerable"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does '@unchecked Sendable' do?",
    "question_hi": "'@unchecked Sendable' क्या करता है?",
    "options_en": ["Suppresses concurrency warnings", "Forces Sendable conformance", "Disables checking", "Enables safety"],
    "options_hi": ["कनकरेंसी वार्निंग्स दबाता है", "Sendable कन्फॉर्मेंस फोर्स करता है", "चेकिंग डिसेबल करता है", "सेफ्टी सक्षम करता है"],
    "answer_en": "Suppresses concurrency warnings",
    "answer_hi": "कनकरेंसी वार्निंग्स दबाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method flattens nested optionals?",
    "question_hi": "कौन सी मेथड नेस्टेड ऑप्शनल्स को फ्लैटन करती है?",
    "options_en": ["flatMap", "map", "filter", "reduce"],
    "options_hi": ["flatMap", "map", "filter", "reduce"],
    "answer_en": "flatMap",
    "answer_hi": "flatMap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'precondition' used for?",
    "question_hi": "'precondition' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Debug-time check", "Runtime validation", "Compile-time check", "Performance test"],
    "options_hi": ["डीबग-टाइम चेक", "रनटाइम वैलिडेशन", "कम्पाइल-टाइम चेक", "परफॉर्मेंस टेस्ट"],
    "answer_en": "Debug-time check",
    "answer_hi": "डीबग-टाइम चेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@frozen' attribute indicate for enums?",
    "question_hi": "enum के लिए '@frozen' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["No future case additions", "Memory optimization", "Faster execution", "Compile-time checking"],
    "options_hi": ["भविष्य में कोई केस एडिशन नहीं", "मेमोरी ऑप्टिमाइज़ेशन", "तेज़ एक्जीक्यूशन", "कम्पाइल-टाइम चेकिंग"],
    "answer_en": "No future case additions",
    "answer_hi": "भविष्य में कोई केस एडिशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which property wrapper provides projected value?",
    "question_hi": "कौन सा प्रॉपर्टी रैपर प्रोजेक्टेड वैल्यू प्रदान करता है?",
    "options_en": ["@Published", "@State", "@Binding", "@Environment"],
    "options_hi": ["@Published", "@State", "@Binding", "@Environment"],
    "answer_en": "@Published",
    "answer_hi": "@Published",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is '@dynamicMemberLookup' used for?",
    "question_hi": "'@dynamicMemberLookup' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Runtime member access", "Compile-time checking", "Static members", "Protocol conformance"],
    "options_hi": ["रनटाइम मेंबर एक्सेस", "कम्पाइल-टाइम चेकिंग", "स्टेटिक मेंबर्स", "प्रोटोकॉल कन्फॉर्मेंस"],
    "answer_en": "Runtime member access",
    "answer_hi": "रनटाइम मेंबर एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which method creates a range in Swift?",
    "question_hi": "Swift में रेंज बनाने के लिए कौन सी मेथड है?",
    "options_en": ["... or ..<", "range()", "to()", "until()"],
    "options_hi": ["... या ..<", "range()", "to()", "until()"],
    "answer_en": "... or ..<",
    "answer_hi": "... या ..<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does '@autoclosure' do?",
    "question_hi": "'@autoclosure' क्या करता है?",
    "options_en": ["Automatically wraps expression in closure", "Creates async closure", "Escapes closure", "Captures self weakly"],
    "options_hi": ["एक्सप्रेशन को क्लोजर में ऑटोमेटिक रैप करता है", "एसिंक क्लोजर बनाता है", "क्लोजर एस्केप करता है", "सेल्फ को वीकली कैप्चर करता है"],
    "answer_en": "Automatically wraps expression in closure",
    "answer_hi": "एक्सप्रेशन को क्लोजर में ऑटोमेटिक रैप करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which protocol enables string interpolation?",
    "question_hi": "कौन सा प्रोटोकॉल स्ट्रिंग इंटरपोलेशन सक्षम करता है?",
    "options_en": ["ExpressibleByStringInterpolation", "StringConvertible", "Interpolatable", "StringComposable"],
    "options_hi": ["ExpressibleByStringInterpolation", "StringConvertible", "Interpolatable", "StringComposable"],
    "answer_en": "ExpressibleByStringInterpolation",
    "answer_hi": "ExpressibleByStringInterpolation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is '@resultBuilder' used for?",
    "question_hi": "'@resultBuilder' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Domain-specific languages", "Result type building", "Error building", "Async result creation"],
    "options_hi": ["डोमेन-स्पेसिफिक लैंग्वेजेस", "रिजल्ट टाइप बिल्डिंग", "एरर बिल्डिंग", "एसिंक रिजल्ट क्रिएशन"],
    "answer_en": "Domain-specific languages",
    "answer_hi": "डोमेन-स्पेसिफिक लैंग्वेजेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which method performs shallow copy of array?",
    "question_hi": "कौन सी मेथड ऐरे की शैलो कॉपी परफॉर्म करती है?",
    "options_en": ["Assignment operator (=)", "copy()", "clone()", "duplicate()"],
    "options_hi": ["असाइनमेंट ऑपरेटर (=)", "copy()", "clone()", "duplicate()"],
    "answer_en": "Assignment operator (=)",
    "answer_hi": "असाइनमेंट ऑपरेटर (=)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does '@unknown default' handle in switch?",
    "question_hi": "स्विच में '@unknown default' क्या हैंडल करता है?",
    "options_en": ["Future enum cases", "Unknown types", "Runtime errors", "Compile warnings"],
    "options_hi": ["भविष्य के enum केसेस", "अनजान टाइप्स", "रनटाइम एरर्स", "कम्पाइल वार्निंग्स"],
    "answer_en": "Future enum cases",
    "answer_hi": "भविष्य के enum केसेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which protocol enables pattern matching?",
    "question_hi": "कौन सा प्रोटोकॉल पैटर्न मैचिंग सक्षम करता है?",
    "options_en": ["~= operator", "Matchable", "PatternMatch", "Comparable"],
    "options_hi": ["~= ऑपरेटर", "Matchable", "PatternMatch", "Comparable"],
    "answer_en": "~= operator",
    "answer_hi": "~= ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is '@inlinable' used for?",
    "question_hi": "'@inlinable' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Performance optimization", "Memory safety", "Thread safety", "Error handling"],
    "options_hi": ["परफॉर्मेंस ऑप्टिमाइज़ेशन", "मेमोरी सेफ्टी", "थ्रेड सेफ्टी", "एरर हैंडलिंग"],
    "answer_en": "Performance optimization",
    "answer_hi": "परफॉर्मेंस ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which method checks for nil without unwrapping?",
    "question_hi": "कौन सी मेथड अनरैप किए बिना nil चेक करती है?",
    "options_en": ["if let", "guard let", "??", "Optional comparison (== nil)"],
    "options_hi": ["if let", "guard let", "??", "ऑप्शनल कम्पेरिज़न (== nil)"],
    "answer_en": "Optional comparison (== nil)",
    "answer_hi": "ऑप्शनल कम्पेरिज़न (== nil)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_transparent' attribute do?",
    "question_hi": "'@_transparent' एट्रिब्यूट क्या करता है?",
    "options_en": ["Forces function inlining", "Makes function transparent", "Hides implementation", "Enables optimization"],
    "options_hi": ["फ़ंक्शन इनलाइनिंग फोर्स करता है", "फ़ंक्शन ट्रांसपेरेंट बनाता है", "इम्प्लीमेंटेशन हाइड करता है", "ऑप्टिमाइज़ेशन सक्षम करता है"],
    "answer_en": "Forces function inlining",
    "answer_hi": "फ़ंक्शन इनलाइनिंग फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which protocol enables numeric operations?",
    "question_hi": "कौन सा प्रोटोकॉल न्यूमेरिक ऑपरेशन्स सक्षम करता है?",
    "options_en": ["Numeric", "AdditiveArithmetic", "IntegerArithmetic", "FloatingPoint"],
    "options_hi": ["Numeric", "AdditiveArithmetic", "IntegerArithmetic", "FloatingPoint"],
    "answer_en": "Numeric",
    "answer_hi": "Numeric",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is '@_specialize' used for?",
    "question_hi": "'@_specialize' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Performance optimization for specific types", "Type specialization", "Generic optimization", "Compile-time dispatch"],
    "options_hi": ["स्पेसिफिक टाइप्स के लिए परफॉर्मेंस ऑप्टिमाइज़ेशन", "टाइप स्पेशलाइज़ेशन", "जेनेरिक ऑप्टिमाइज़ेशन", "कम्पाइल-टाइम डिस्पैच"],
    "answer_en": "Performance optimization for specific types",
    "answer_hi": "स्पेसिफिक टाइप्स के लिए परफॉर्मेंस ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which method performs deep copy?",
    "question_hi": "कौन सी मेथड डीप कॉपी परफॉर्म करती है?",
    "options_en": ["NSCopying protocol", "copy() method", "Custom implementation", "Assignment operator"],
    "options_hi": ["NSCopying प्रोटोकॉल", "copy() मेथड", "कस्टम इम्प्लीमेंटेशन", "असाइनमेंट ऑपरेटर"],
    "answer_en": "Custom implementation",
    "answer_hi": "कस्टम इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does '@_alignment' control?",
    "question_hi": "'@_alignment' क्या कंट्रोल करता है?",
    "options_en": ["Memory alignment of types", "Text alignment", "UI alignment", "Code alignment"],
    "options_hi": ["टाइप्स की मेमोरी एलाइनमेंट", "टेक्स्ट एलाइनमेंट", "UI एलाइनमेंट", "कोड एलाइनमेंट"],
    "answer_en": "Memory alignment of types",
    "answer_hi": "टाइप्स की मेमोरी एलाइनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which protocol enables collection subscripting?",
    "question_hi": "कौन सा प्रोटोकॉल कलेक्शन सबस्क्रिप्टिंग सक्षम करता है?",
    "options_en": ["Collection", "Sequence", "RandomAccessCollection", "MutableCollection"],
    "options_hi": ["Collection", "Sequence", "RandomAccessCollection", "MutableCollection"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is '@_hasStorage' attribute for?",
    "question_hi": "'@_hasStorage' एट्रिब्यूट किस लिए है?",
    "options_en": ["Compiler internal use", "Storage declaration", "Memory management", "Property storage"],
    "options_hi": ["कम्पाइलर इंटरनल यूज़", "स्टोरेज डिक्लेरेशन", "मेमोरी मैनेजमेंट", "प्रॉपर्टी स्टोरेज"],
    "answer_en": "Compiler internal use",
    "answer_hi": "कम्पाइलर इंटरनल यूज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which method creates formatted strings?",
    "question_hi": "कौन सी मेथड फॉर्मेटेड स्ट्रिंग्स बनाती है?",
    "options_en": ["String(format:)", "String.interpolate()", "String.formatted()", "String.template()"],
    "options_hi": ["String(format:)", "String.interpolate()", "String.formatted()", "String.template()"],
    "answer_en": "String(format:)",
    "answer_hi": "String(format:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@_nonSendable' do?",
    "question_hi": "'@_nonSendable' क्या करता है?",
    "options_en": ["Marks type as not Sendable", "Prevents sending", "Disables concurrency", "Enables thread safety"],
    "options_hi": ["टाइप को नॉन-सेंडेबल मार्क करता है", "सेंडिंग रोकता है", "कनकरेंसी डिसेबल करता है", "थ्रेड सेफ्टी सक्षम करता है"],
    "answer_en": "Marks type as not Sendable",
    "answer_hi": "टाइप को नॉन-सेंडेबल मार्क करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which protocol enables reflection?",
    "question_hi": "कौन सा प्रोटोकॉल रिफ्लेक्शन सक्षम करता है?",
    "options_en": ["Mirror", "Reflectable", "CustomReflectable", "Reflection"],
    "options_hi": ["Mirror", "Reflectable", "CustomReflectable", "Reflection"],
    "answer_en": "CustomReflectable",
    "answer_hi": "CustomReflectable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is '@_implements' used for?",
    "question_hi": "'@_implements' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Protocol requirement implementation", "Interface implementation", "Method overriding", "Protocol conformance"],
    "options_hi": ["प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंटेशन", "इंटरफ़ेस इम्प्लीमेंटेशन", "मेथड ओवरराइडिंग", "प्रोटोकॉल कन्फॉर्मेंस"],
    "answer_en": "Protocol requirement implementation",
    "answer_hi": "प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which method converts between numeric types?",
    "question_hi": "कौन सी मेथड न्यूमेरिक टाइप्स के बीच कन्वर्ट करती है?",
    "options_en": ["Numeric initializers", "convert()", "cast()", "as operator"],
    "options_hi": ["न्यूमेरिक इनिशियलाइज़र्स", "convert()", "cast()", "as ऑपरेटर"],
    "answer_en": "Numeric initializers",
    "answer_hi": "न्यूमेरिक इनिशियलाइज़र्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_exported' do for imports?",
    "question_hi": "इम्पोर्ट्स के लिए '@_exported' क्या करता है?",
    "options_en": ["Re-exports module", "Exports symbols", "Public import", "Module export"],
    "options_hi": ["मॉड्यूल को री-एक्सपोर्ट करता है", "सिंबल्स एक्सपोर्ट करता है", "पब्लिक इम्पोर्ट", "मॉड्यूल एक्सपोर्ट"],
    "answer_en": "Re-exports module",
    "answer_hi": "मॉड्यूल को री-एक्सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which protocol enables raw representable values?",
    "question_hi": "कौन सा प्रोटोकॉल रॉ रिप्रेजेंटेबल वैल्यूज सक्षम करता है?",
    "options_en": ["RawRepresentable", "ExpressibleByLiteral", "Convertible", "Representable"],
    "options_hi": ["RawRepresentable", "ExpressibleByLiteral", "Convertible", "Representable"],
    "answer_en": "RawRepresentable",
    "answer_hi": "RawRepresentable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is '@_optimize' attribute for?",
    "question_hi": "'@_optimize' एट्रिब्यूट किस लिए है?",
    "options_en": ["Compiler optimization settings", "Performance tuning", "Code optimization", "Build optimization"],
    "options_hi": ["कम्पाइलर ऑप्टिमाइज़ेशन सेटिंग्स", "परफॉर्मेंस ट्यूनिंग", "कोड ऑप्टिमाइज़ेशन", "बिल्ड ऑप्टिमाइज़ेशन"],
    "answer_en": "Compiler optimization settings",
    "answer_hi": "कम्पाइलर ऑप्टिमाइज़ेशन सेटिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which method provides custom debug description?",
    "question_hi": "कौन सी मेथड कस्टम डीबग डिस्क्रिप्शन प्रदान करती है?",
    "options_en": ["debugDescription property", "CustomDebugStringConvertible", "debugPrint()", "dump()"],
    "options_hi": ["debugDescription प्रॉपर्टी", "CustomDebugStringConvertible", "debugPrint()", "dump()"],
    "answer_en": "debugDescription property",
    "answer_hi": "debugDescription प्रॉपर्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does '@_semantics' attribute control?",
    "question_hi": "'@_semantics' एट्रिब्यूट क्या कंट्रोल करता है?",
    "options_en": ["Compiler optimization hints", "Code semantics", "Language semantics", "Runtime behavior"],
    "options_hi": ["कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स", "कोड सेमेन्टिक्स", "लैंग्वेज सेमेन्टिक्स", "रनटाइम बिहेवियर"],
    "answer_en": "Compiler optimization hints",
    "answer_hi": "कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which protocol enables bidirectional iteration?",
    "question_hi": "कौन सा प्रोटोकॉल बाईडायरेक्शनल इटरेशन सक्षम करता है?",
    "options_en": ["BidirectionalCollection", "ReversibleCollection", "BackwardCollection", "TwoWayCollection"],
    "options_hi": ["BidirectionalCollection", "ReversibleCollection", "BackwardCollection", "TwoWayCollection"],
    "answer_en": "BidirectionalCollection",
    "answer_hi": "BidirectionalCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is '@_marker' protocol used for?",
    "question_hi": "'@_marker' प्रोटोकॉल का उपयोग किस लिए किया जाता है?",
    "options_en": ["Compiler internal markers", "Protocol markers", "Type markers", "Code markers"],
    "options_hi": ["कम्पाइलर इंटरनल मार्कर्स", "प्रोटोकॉल मार्कर्स", "टाइप मार्कर्स", "कोड मार्कर्स"],
    "answer_en": "Compiler internal markers",
    "answer_hi": "कम्पाइलर इंटरनल मार्कर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which method enables custom encoding?",
    "question_hi": "कौन सी मेथड कस्टम एन्कोडिंग सक्षम करती है?",
    "options_en": ["encode(to:) method", "Encodable protocol", "Coding protocol", "Serializable"],
    "options_hi": ["encode(to:) मेथड", "Encodable प्रोटोकॉल", "Coding प्रोटोकॉल", "Serializable"],
    "answer_en": "encode(to:) method",
    "answer_hi": "encode(to:) मेथड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '@_typeEraser' do?",
    "question_hi": "'@_typeEraser' क्या करता है?",
    "options_en": ["Hides concrete type", "Erases type information", "Type conversion", "Generic specialization"],
    "options_hi": ["कंक्रीट टाइप हाइड करता है", "टाइप इन्फॉर्मेशन इरेज़ करता है", "टाइप कन्वर्ज़न", "जेनेरिक स्पेशलाइज़ेशन"],
    "answer_en": "Hides concrete type",
    "answer_hi": "कंक्रीट टाइप हाइड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which protocol enables random access?",
    "question_hi": "कौन सा प्रोटोकॉल रैंडम एक्सेस सक्षम करता है?",
    "options_en": ["RandomAccessCollection", "DirectAccessCollection", "IndexedCollection", "FastCollection"],
    "options_hi": ["RandomAccessCollection", "DirectAccessCollection", "IndexedCollection", "FastCollection"],
    "answer_en": "RandomAccessCollection",
    "answer_hi": "RandomAccessCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is '@_hasInitialValue' for?",
    "question_hi": "'@_hasInitialValue' किस लिए है?",
    "options_en": ["Compiler property tracking", "Initial value marking", "Default value", "Property initialization"],
    "options_hi": ["कम्पाइलर प्रॉपर्टी ट्रैकिंग", "इनिशियल वैल्यू मार्किंग", "डिफ़ॉल्ट वैल्यू", "प्रॉपर्टी इनिशियलाइज़ेशन"],
    "answer_en": "Compiler property tracking",
    "answer_hi": "कम्पाइलर प्रॉपर्टी ट्रैकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which method enables custom decoding?",
    "question_hi": "कौन सी मेथड कस्टम डिकोडिंग सक्षम करती है?",
    "options_en": ["init(from:) initializer", "Decodable protocol", "Parsing protocol", "Deserializable"],
    "options_hi": ["init(from:) इनिशियलाइज़र", "Decodable प्रोटोकॉल", "पार्सिंग प्रोटोकॉल", "Deserializable"],
    "answer_en": "init(from:) initializer",
    "answer_hi": "init(from:) इनिशियलाइज़र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_fixed_layout' indicate?",
    "question_hi": "'@_fixed_layout' क्या इंडिकेट करता है?",
    "options_en": ["Stable ABI layout", "Fixed memory layout", "Compile-time layout", "Runtime layout"],
    "options_hi": ["स्टेबल ABI लेआउट", "फिक्स्ड मेमोरी लेआउट", "कम्पाइल-टाइम लेआउट", "रनटाइम लेआउट"],
    "answer_en": "Stable ABI layout",
    "answer_hi": "स्टेबल ABI लेआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which protocol enables custom operators?",
    "question_hi": "कौन सा प्रोटोकॉल कस्टम ऑपरेटर्स सक्षम करता है?",
    "options_en": ["No specific protocol", "OperatorProtocol", "CustomOperator", "ExpressibleByOperator"],
    "options_hi": ["कोई स्पेसिफिक प्रोटोकॉल नहीं", "OperatorProtocol", "CustomOperator", "ExpressibleByOperator"],
    "answer_en": "No specific protocol",
    "answer_hi": "कोई स्पेसिफिक प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is '@_implicitSelfCapture' for?",
    "question_hi": "'@_implicitSelfCapture' किस लिए है?",
    "options_en": ["Compiler closure behavior", "Implicit self capture", "Closure optimization", "Memory management"],
    "options_hi": ["कम्पाइलर क्लोजर बिहेवियर", "इम्प्लिसिट सेल्फ कैप्चर", "क्लोजर ऑप्टिमाइज़ेशन", "मेमोरी मैनेजमेंट"],
    "answer_en": "Compiler closure behavior",
    "answer_hi": "कम्पाइलर क्लोजर बिहेवियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which method provides sequence element access?",
    "question_hi": "कौन सी मेथड सीक्वेंस एलिमेंट एक्सेस प्रदान करती है?",
    "options_en": ["Iterator", "next() method", "Sequence protocol", "Element accessor"],
    "options_hi": ["Iterator", "next() मेथड", "Sequence प्रोटोकॉल", "एलिमेंट एक्सेसर"],
    "answer_en": "next() method",
    "answer_hi": "next() मेथड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does '@_inheritActorContext' do?",
    "question_hi": "'@_inheritActorContext' क्या करता है?",
    "options_en": ["Preserves actor context", "Inherits actor", "Context inheritance", "Actor context passing"],
    "options_hi": ["एक्टर कॉन्टेक्स्ट प्रिजर्व करता है", "एक्टर इनहेरिट करता है", "कॉन्टेक्स्ट इनहेरिटेंस", "एक्टर कॉन्टेक्स्ट पासिंग"],
    "answer_en": "Preserves actor context",
    "answer_hi": "एक्टर कॉन्टेक्स्ट प्रिजर्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which protocol enables string literal creation?",
    "question_hi": "कौन सा प्रोटोकॉल स्ट्रिंग लिटरल क्रिएशन सक्षम करता है?",
    "options_en": ["ExpressibleByStringLiteral", "StringLiteralConvertible", "LiteralString", "StringCreatable"],
    "options_hi": ["ExpressibleByStringLiteral", "StringLiteralConvertible", "LiteralString", "StringCreatable"],
    "answer_en": "ExpressibleByStringLiteral",
    "answer_hi": "ExpressibleByStringLiteral",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is '@_dynamicReplacement' for?",
    "question_hi": "'@_dynamicReplacement' किस लिए है?",
    "options_en": ["Function replacement at runtime", "Dynamic dispatch", "Method swizzling", "Runtime modification"],
    "options_hi": ["रनटाइम में फ़ंक्शन रिप्लेसमेंट", "डायनामिक डिस्पैच", "मेथड स्विज़लिंग", "रनटाइम मॉडिफिकेशन"],
    "answer_en": "Function replacement at runtime",
    "answer_hi": "रनटाइम में फ़ंक्शन रिप्लेसमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which method enables collection sorting?",
    "question_hi": "कौन सी मेथड कलेक्शन सॉर्टिंग सक्षम करती है?",
    "options_en": ["sort() method", "sorted() method", "order()", "arrange()"],
    "options_hi": ["sort() मेथड", "sorted() मेथड", "order()", "arrange()"],
    "answer_en": "sorted() method",
    "answer_hi": "sorted() मेथड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does '@_alwaysEmitIntoClient' do?",
    "question_hi": "'@_alwaysEmitIntoClient' क्या करता है?",
    "options_en": ["Forces inline emission", "Client code emission", "Always inline", "Compile emission"],
    "options_hi": ["इनलाइन एमिशन फोर्स करता है", "क्लाइंट कोड एमिशन", "हमेशा इनलाइन", "कम्पाइल एमिशन"],
    "answer_en": "Forces inline emission",
    "answer_hi": "इनलाइन एमिशन फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which Swift operator allows 'value as! any ContiguousArray<String> & RandomAccessCollection' force?",
    "question_hi": "फोर्स के लिए कौन सा Swift ऑपरेटर 'value as! any ContiguousArray<String> & RandomAccessCollection' की अनुमति देता है?",
    "options_en": ["Force cast to contiguous array composition", "Conditional contiguous array", "Any contiguous array cast", "Contiguous array existential"],
    "options_hi": ["कॉन्टिग्यूअस ऐरे कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त कॉन्टिग्यूअस ऐरे", "कोई कॉन्टिग्यूअस ऐरे कास्ट", "कॉन्टिग्यूअस ऐरे एक्जिस्टेंशियल"],
    "answer_en": "Force cast to contiguous array composition",
    "answer_hi": "कॉन्टिग्यूअस ऐरे कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the purpose of '@_effects' with 'readonly' for property wrappers?",
    "question_hi": "प्रॉपर्टी रैपर्स के लिए 'readonly' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Property wrapper only reads", "Reads and writes", "Write-only", "No wrapper access"],
    "options_hi": ["प्रॉपर्टी रैपर केवल पढ़ता है", "पढ़ता और लिखता है", "केवल लिखने योग्य", "कोई रैपर एक्सेस नहीं"],
    "answer_en": "Property wrapper only reads",
    "answer_hi": "प्रॉपर्टी रैपर केवल पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which Swift feature allows 'let regex = #/[1-9]\\d{0,2}(,\\d{3})*(\\.\\d{2})?/#' money?",
    "question_hi": "मनी के लिए कौन सा Swift फीचर 'let regex = #/[1-9]\\d{0,2}(,\\d{3})*(\\.\\d{2})?/#' की अनुमति देता है?",
    "options_en": ["Money amount regex", "Currency format pattern", "Financial amount literal", "Monetary pattern"],
    "options_hi": ["मनी अमाउंट रेगेक्स", "करेंसी फॉर्मेट पैटर्न", "फाइनेंशियल अमाउंट लिटरल", "मौद्रिक पैटर्न"],
    "answer_en": "Money amount regex",
    "answer_hi": "मनी अमाउंट रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_implements(Protocol, subscript, where T: Sendable & Codable)' enable?",
    "question_hi": "'@_implements(Protocol, subscript, where T: Sendable & Codable)' क्या सक्षम करता है?",
    "options_en": ["Conditional subscript with dual constraints", "Single constraint", "No constraints", "Constrained subscript"],
    "options_hi": ["दोहरी बाध्यकारी के साथ सशर्त सबस्क्रिप्ट", "एकल बाध्यकारी", "कोई बाध्यकारी नहीं", "सीमित सबस्क्रिप्ट"],
    "answer_en": "Conditional subscript with dual constraints",
    "answer_hi": "दोहरी बाध्यकारी के साथ सशर्त सबस्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift operator allows 'value as! any ArraySlice<Int> & BidirectionalCollection' force?",
    "question_hi": "फोर्स के लिए कौन सा Swift ऑपरेटर 'value as! any ArraySlice<Int> & BidirectionalCollection' की अनुमति देता है?",
    "options_en": ["Force cast to array slice composition", "Conditional array slice", "Any array slice cast", "Array slice existential"],
    "options_hi": ["ऐरे स्लाइस कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त ऐरे स्लाइस", "कोई ऐरे स्लाइस कास्ट", "ऐरे स्लाइस एक्जिस्टेंशियल"],
    "answer_en": "Force cast to array slice composition",
    "answer_hi": "ऐरे स्लाइस कंपोज़िशन के लिए फोर्स कास्ट",
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