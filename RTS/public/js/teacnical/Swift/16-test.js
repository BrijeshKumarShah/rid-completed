const questions = [
  {
    "num": 1,
    "question_en": "Which Swift keyword is used to define a variable?",
    "question_hi": "Swift में वेरिएबल डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["var", "let", "const", "dynamic"],
    "options_hi": ["var", "let", "const", "dynamic"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the type inference feature in Swift called?",
    "question_hi": "Swift में टाइप इंफेरेंस फीचर को क्या कहा जाता है?",
    "options_en": ["Type Inference", "Auto Typing", "Dynamic Typing", "Type Deduction"],
    "options_hi": ["टाइप इंफेरेंस", "ऑटो टाइपिंग", "डायनामिक टाइपिंग", "टाइप डिडक्शन"],
    "answer_en": "Type Inference",
    "answer_hi": "टाइप इंफेरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Swift data type is used for true/false values?",
    "question_hi": "सही/गलत वैल्यू के लिए किस Swift डेटा टाइप का उपयोग किया जाता है?",
    "options_en": ["Bool", "Boolean", "Bit", "Flag"],
    "options_hi": ["Bool", "Boolean", "Bit", "Flag"],
    "answer_en": "Bool",
    "answer_hi": "Bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the main purpose of 'guard' statement in Swift?",
    "question_hi": "Swift में 'guard' स्टेटमेंट का मुख्य उद्देश्य क्या है?",
    "options_en": ["Early exit when condition fails", "Loop continuation", "Error handling", "Condition checking"],
    "options_hi": ["कंडीशन फेल होने पर जल्दी बाहर निकलना", "लूप कंटिन्यूएशन", "एरर हैंडलिंग", "कंडीशन चेकिंग"],
    "answer_en": "Early exit when condition fails",
    "answer_hi": "कंडीशन फेल होने पर जल्दी बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Swift operator is used for optional binding?",
    "question_hi": "ऑप्शनल बाइंडिंग के लिए किस Swift ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["if let", "guard let", "??", "optional"],
    "options_hi": ["if let", "guard let", "??", "optional"],
    "answer_en": "if let",
    "answer_hi": "if let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does 'nil' represent in Swift?",
    "question_hi": "Swift में 'nil' क्या रिप्रेजेंट करता है?",
    "options_en": ["Absence of a value", "Zero value", "Empty string", "False value"],
    "options_hi": ["वैल्यू की अनुपस्थिति", "जीरो वैल्यू", "खाली स्ट्रिंग", "फॉल्स वैल्यू"],
    "answer_en": "Absence of a value",
    "answer_hi": "वैल्यू की अनुपस्थिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Swift collection type stores key-value pairs?",
    "question_hi": "कौन सा Swift कलेक्शन टाइप की-वैल्यू पेयर्स स्टोर करता है?",
    "options_en": ["Dictionary", "Array", "Set", "Tuple"],
    "options_hi": ["Dictionary", "Array", "Set", "Tuple"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of 'defer' statement in Swift?",
    "question_hi": "Swift में 'defer' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Execute code before function returns", "Delay execution", "Skip code", "Error handling"],
    "options_hi": ["फ़ंक्शन रिटर्न करने से पहले कोड एक्जीक्यूट करना", "एक्जीक्यूशन डिले करना", "कोड स्किप करना", "एरर हैंडलिंग"],
    "answer_en": "Execute code before function returns",
    "answer_hi": "फ़ंक्शन रिटर्न करने से पहले कोड एक्जीक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Swift feature allows functions to return multiple values?",
    "question_hi": "कौन सा Swift फीचर फ़ंक्शन को मल्टीपल वैल्यू रिटर्न करने की अनुमति देता है?",
    "options_en": ["Tuples", "Arrays", "Dictionaries", "Sets"],
    "options_hi": ["Tuples", "Arrays", "Dictionaries", "Sets"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does 'weak' reference prevent in Swift?",
    "question_hi": "Swift में 'weak' रेफरेंस क्या रोकता है?",
    "options_en": ["Retain cycles", "Memory leaks", "Reference counting", "Object deletion"],
    "options_hi": ["रिटेन साइकिल्स", "मेमोरी लीक्स", "रेफरेंस काउंटिंग", "ऑब्जेक्ट डिलीशन"],
    "answer_en": "Retain cycles",
    "answer_hi": "रिटेन साइकिल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which Swift protocol is used for string representation?",
    "question_hi": "स्ट्रिंग रिप्रेजेंटेशन के लिए किस Swift प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["CustomStringConvertible", "StringProtocol", "Displayable", "Printable"],
    "options_hi": ["CustomStringConvertible", "StringProtocol", "Displayable", "Printable"],
    "answer_en": "CustomStringConvertible",
    "answer_hi": "CustomStringConvertible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of 'willSet' property observer?",
    "question_hi": "'willSet' प्रॉपर्टी ऑब्जर्वर का उद्देश्य क्या है?",
    "options_en": ["Called before value changes", "Called after value changes", "Prevents changes", "Validates value"],
    "options_hi": ["वैल्यू चेंज होने से पहले कॉल होता है", "वैल्यू चेंज होने के बाद कॉल होता है", "चेंजेस रोकता है", "वैल्यू वैलिडेट करता है"],
    "answer_en": "Called before value changes",
    "answer_hi": "वैल्यू चेंज होने से पहले कॉल होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Swift loop iterates over a sequence?",
    "question_hi": "कौन सा Swift लूप सीक्वेंस पर इटरेट करता है?",
    "options_en": ["for-in", "while", "repeat-while", "do-while"],
    "options_hi": ["for-in", "while", "repeat-while", "do-while"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does 'mutating' keyword do in Swift?",
    "question_hi": "Swift में 'mutating' कीवर्ड क्या करता है?",
    "options_en": ["Allows modification of struct properties", "Makes function mutable", "Changes variable type", "Enables mutation"],
    "options_hi": ["स्ट्रक्चर प्रॉपर्टीज के मॉडिफिकेशन की अनुमति देता है", "फ़ंक्शन म्यूटेबल बनाता है", "वेरिएबल टाइप बदलता है", "म्यूटेशन सक्षम करता है"],
    "answer_en": "Allows modification of struct properties",
    "answer_hi": "स्ट्रक्चर प्रॉपर्टीज के मॉडिफिकेशन की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Swift protocol enables comparison for equality?",
    "question_hi": "कौन सा Swift प्रोटोकॉल इक्वलिटी के लिए कम्पेरिज़न सक्षम करता है?",
    "options_en": ["Equatable", "Comparable", "Hashable", "Equal"],
    "options_hi": ["Equatable", "Comparable", "Hashable", "Equal"],
    "answer_en": "Equatable",
    "answer_hi": "Equatable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'optional chaining' used for in Swift?",
    "question_hi": "Swift में 'optional chaining' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Safely access properties/methods on optionals", "Chain multiple optionals", "Force unwrap optionals", "Create optional chains"],
    "options_hi": ["ऑप्शनल्स पर प्रॉपर्टीज/मेथड्स को सुरक्षित रूप से एक्सेस करना", "मल्टीपल ऑप्शनल्स चेन करना", "ऑप्शनल्स फोर्स अनरैप करना", "ऑप्शनल चेन बनाना"],
    "answer_en": "Safely access properties/methods on optionals",
    "answer_hi": "ऑप्शनल्स पर प्रॉपर्टीज/मेथड्स को सुरक्षित रूप से एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Swift feature allows defining multiple related values?",
    "question_hi": "कौन सा Swift फीचर मल्टीपल रिलेटेड वैल्यू डिफाइन करने की अनुमति देता है?",
    "options_en": ["Enumeration", "Structure", "Class", "Protocol"],
    "options_hi": ["Enumeration", "Structure", "Class", "Protocol"],
    "answer_en": "Enumeration",
    "answer_hi": "Enumeration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does 'inout' parameter allow in Swift functions?",
    "question_hi": "Swift फ़ंक्शन में 'inout' पैरामीटर क्या अनुमति देता है?",
    "options_en": ["Modify parameter value", "Input only parameter", "Output only parameter", "Optional parameter"],
    "options_hi": ["पैरामीटर वैल्यू मॉडिफाई करना", "इनपुट ओनली पैरामीटर", "आउटपुट ओनली पैरामीटर", "ऑप्शनल पैरामीटर"],
    "answer_en": "Modify parameter value",
    "answer_hi": "पैरामीटर वैल्यू मॉडिफाई करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Swift collection type ensures unique elements?",
    "question_hi": "कौन सा Swift कलेक्शन टाइप यूनिक एलिमेंट्स सुनिश्चित करता है?",
    "options_en": ["Set", "Array", "Dictionary", "List"],
    "options_hi": ["Set", "Array", "Dictionary", "List"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'typealias' used for in Swift?",
    "question_hi": "Swift में 'typealias' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Create alternative name for existing type", "Define new type", "Type conversion", "Alias for protocol"],
    "options_hi": ["एक्सिस्टिंग टाइप के लिए अल्टरनेटिव नेम बनाना", "नया टाइप डिफाइन करना", "टाइप कन्वर्ज़न", "प्रोटोकॉल के लिए एलियास"],
    "answer_en": "Create alternative name for existing type",
    "answer_hi": "एक्सिस्टिंग टाइप के लिए अल्टरनेटिव नेम बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which Swift keyword prevents method overriding?",
    "question_hi": "कौन सा Swift कीवर्ड मेथड ओवरराइडिंग रोकता है?",
    "options_en": ["final", "static", "private", "sealed"],
    "options_hi": ["final", "static", "private", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does 'lazy' property do in Swift?",
    "question_hi": "Swift में 'lazy' प्रॉपर्टी क्या करती है?",
    "options_en": ["Delays initialization until first use", "Makes property slow", "Reduces memory usage", "Improves performance"],
    "options_hi": ["पहले उपयोग तक इनिशियलाइज़ेशन डिले करती है", "प्रॉपर्टी को स्लो बनाती है", "मेमोरी यूज़ेज कम करती है", "परफॉर्मेंस इम्प्रूव करती है"],
    "answer_en": "Delays initialization until first use",
    "answer_hi": "पहले उपयोग तक इनिशियलाइज़ेशन डिले करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Swift operator provides default value for nil?",
    "question_hi": "nil के लिए डिफ़ॉल्ट वैल्यू प्रदान करने वाला Swift ऑपरेटर कौन सा है?",
    "options_en": ["??", "!", "?", "?:", "??"],
    "options_hi": ["??", "!", "?", "?:", "??"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of 'CaseIterable' protocol?",
    "question_hi": "'CaseIterable' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["Provides collection of all cases", "Enables case iteration", "Makes enum iterable", "Lists enum values"],
    "options_hi": ["सभी केसेस का कलेक्शन प्रदान करता है", "केस इटरेशन सक्षम करता है", "enum को इटरेबल बनाता है", "enum वैल्यू लिस्ट करता है"],
    "answer_en": "Provides collection of all cases",
    "answer_hi": "सभी केसेस का कलेक्शन प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Swift feature allows function overloading?",
    "question_hi": "कौन सा Swift फीचर फ़ंक्शन ओवरलोडिंग की अनुमति देता है?",
    "options_en": ["Multiple functions with same name", "Function overriding", "Protocol functions", "Generic functions"],
    "options_hi": ["समान नाम के मल्टीपल फ़ंक्शन", "फ़ंक्शन ओवरराइडिंग", "प्रोटोकॉल फ़ंक्शन", "जेनेरिक फ़ंक्शन"],
    "answer_en": "Multiple functions with same name",
    "answer_hi": "समान नाम के मल्टीपल फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does 'escaping' closure mean in Swift?",
    "question_hi": "Swift में 'escaping' क्लोजर का क्या अर्थ है?",
    "options_en": ["Closure outlives function scope", "Closure escapes function", "Async closure", "Non-returning closure"],
    "options_hi": ["क्लोजर फ़ंक्शन स्कोप से बाहर रहता है", "क्लोजर फ़ंक्शन से एस्केप करता है", "एसिंक क्लोजर", "नॉन-रिटर्निंग क्लोजर"],
    "answer_en": "Closure outlives function scope",
    "answer_hi": "क्लोजर फ़ंक्शन स्कोप से बाहर रहता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Swift protocol enables string interpolation?",
    "question_hi": "कौन सा Swift प्रोटोकॉल स्ट्रिंग इंटरपोलेशन सक्षम करता है?",
    "options_en": ["ExpressibleByStringInterpolation", "StringInterpolatable", "InterpolatedString", "StringTemplate"],
    "options_hi": ["ExpressibleByStringInterpolation", "StringInterpolatable", "InterpolatedString", "StringTemplate"],
    "answer_en": "ExpressibleByStringInterpolation",
    "answer_hi": "ExpressibleByStringInterpolation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is '@discardableResult' attribute used for?",
    "question_hi": "'@discardableResult' एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
    "options_en": ["Suppress unused result warning", "Discard function result", "Ignore return value", "Mark result as discardable"],
    "options_hi": ["अनयूज़्ड रिजल्ट वार्निंग सप्रेस करना", "फ़ंक्शन रिजल्ट डिस्कार्ड करना", "रिटर्न वैल्यू इग्नोर करना", "रिजल्ट को डिस्कार्डेबल मार्क करना"],
    "answer_en": "Suppress unused result warning",
    "answer_hi": "अनयूज़्ड रिजल्ट वार्निंग सप्रेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Swift method transforms sequence elements?",
    "question_hi": "कौन सी Swift मेथड सीक्वेंस एलिमेंट्स को ट्रांसफॉर्म करती है?",
    "options_en": ["map", "filter", "reduce", "forEach"],
    "options_hi": ["map", "filter", "reduce", "forEach"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'compactMap' do in Swift?",
    "question_hi": "Swift में 'compactMap' क्या करता है?",
    "options_en": ["Transforms and removes nil values", "Compacts array", "Maps compactly", "Filters and maps"],
    "options_hi": ["ट्रांसफॉर्म करता है और nil वैल्यू हटाता है", "ऐरे कॉम्पैक्ट करता है", "कॉम्पैक्टली मैप करता है", "फ़िल्टर और मैप करता है"],
    "answer_en": "Transforms and removes nil values",
    "answer_hi": "ट्रांसफॉर्म करता है और nil वैल्यू हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which Swift protocol enables sorting?",
    "question_hi": "कौन सा Swift प्रोटोकॉल सॉर्टिंग सक्षम करता है?",
    "options_en": ["Comparable", "Sortable", "Ordered", "Sequence"],
    "options_hi": ["Comparable", "Sortable", "Ordered", "Sequence"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'keyPath' used for in Swift?",
    "question_hi": "Swift में 'keyPath' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type-safe reference to property", "Dictionary key path", "File path", "Property path"],
    "options_hi": ["प्रॉपर्टी के लिए टाइप-सेफ रेफरेंस", "डिक्शनरी की पाथ", "फाइल पाथ", "प्रॉपर्टी पाथ"],
    "answer_en": "Type-safe reference to property",
    "answer_hi": "प्रॉपर्टी के लिए टाइप-सेफ रेफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Swift feature provides default parameter values?",
    "question_hi": "कौन सा Swift फीचर डिफ़ॉल्ट पैरामीटर वैल्यू प्रदान करता है?",
    "options_en": ["Default parameter values", "Optional parameters", "Parameter overloading", "Function defaults"],
    "options_hi": ["डिफ़ॉल्ट पैरामीटर वैल्यू", "ऑप्शनल पैरामीटर्स", "पैरामीटर ओवरलोडिंग", "फ़ंक्शन डिफ़ॉल्ट्स"],
    "answer_en": "Default parameter values",
    "answer_hi": "डिफ़ॉल्ट पैरामीटर वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does 'fallthrough' do in Swift switch statement?",
    "question_hi": "Swift स्विच स्टेटमेंट में 'fallthrough' क्या करता है?",
    "options_en": ["Continue to next case", "Break switch", "Return value", "Throw error"],
    "options_hi": ["अगले केस में जारी रखना", "स्विच ब्रेक करना", "वैल्यू रिटर्न करना", "एरर थ्रो करना"],
    "answer_en": "Continue to next case",
    "answer_hi": "अगले केस में जारी रखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Swift protocol enables hashing?",
    "question_hi": "कौन सा Swift प्रोटोकॉल हैशिंग सक्षम करता है?",
    "options_en": ["Hashable", "Hasher", "HashProtocol", "Hashing"],
    "options_hi": ["Hashable", "Hasher", "HashProtocol", "Hashing"],
    "answer_en": "Hashable",
    "answer_hi": "Hashable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'associatedtype' used for in protocols?",
    "question_hi": "प्रोटोकॉल में 'associatedtype' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Placeholder for type", "Type alias", "Generic type", "Protocol type"],
    "options_hi": ["टाइप के लिए प्लेसहोल्डर", "टाइप एलियास", "जेनेरिक टाइप", "प्रोटोकॉल टाइप"],
    "answer_en": "Placeholder for type",
    "answer_hi": "टाइप के लिए प्लेसहोल्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Swift feature enables error propagation?",
    "question_hi": "कौन सा Swift फीचर एरर प्रोपेगेशन सक्षम करता है?",
    "options_en": ["throw keyword", "throws keyword", "try keyword", "catch keyword"],
    "options_hi": ["throw कीवर्ड", "throws कीवर्ड", "try कीवर्ड", "catch कीवर्ड"],
    "answer_en": "throws keyword",
    "answer_hi": "throws कीवर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does 'where' clause do in Swift generics?",
    "question_hi": "Swift जेनेरिक्स में 'where' क्लॉज़ क्या करता है?",
    "options_en": ["Adds type constraints", "Specifies conditions", "Defines scope", "Limits generics"],
    "options_hi": ["टाइप कंस्ट्रेंट्स जोड़ता है", "कंडीशन्स स्पेसिफाई करता है", "स्कोप डिफाइन करता है", "जेनेरिक्स लिमिट करता है"],
    "answer_en": "Adds type constraints",
    "answer_hi": "टाइप कंस्ट्रेंट्स जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Swift feature provides multiple return types?",
    "question_hi": "कौन सा Swift फीचर मल्टीपल रिटर्न टाइप प्रदान करता है?",
    "options_en": ["Tuple return", "Multiple returns", "Array return", "Dictionary return"],
    "options_hi": ["Tuple रिटर्न", "मल्टीपल रिटर्न", "ऐरे रिटर्न", "डिक्शनरी रिटर्न"],
    "answer_en": "Tuple return",
    "answer_hi": "Tuple रिटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is '@MainActor' used for in Swift?",
    "question_hi": "Swift में '@MainActor' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Main thread execution", "Primary actor", "Main class", "UI updates"],
    "options_hi": ["मेन थ्रेड एक्जीक्यूशन", "प्राइमरी एक्टर", "मेन क्लास", "UI अपडेट्स"],
    "answer_en": "Main thread execution",
    "answer_hi": "मेन थ्रेड एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which Swift type is concurrency-safe by design?",
    "question_hi": "कौन सा Swift टाइप डिज़ाइन द्वारा कनकरेंसी-सेफ है?",
    "options_en": ["Actor", "Class", "Struct", "Enum"],
    "options_hi": ["Actor", "Class", "Struct", "Enum"],
    "answer_en": "Actor",
    "answer_hi": "Actor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does 'some' keyword indicate in Swift?",
    "question_hi": "Swift में 'some' कीवर्ड क्या इंडिकेट करता है?",
    "options_en": ["Opaque return type", "Some type", "Optional type", "Generic type"],
    "options_hi": ["ओपेक रिटर्न टाइप", "कुछ टाइप", "ऑप्शनल टाइप", "जेनेरिक टाइप"],
    "answer_en": "Opaque return type",
    "answer_hi": "ओपेक रिटर्न टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Swift feature enables pattern matching?",
    "question_hi": "कौन सा Swift फीचर पैटर्न मैचिंग सक्षम करता है?",
    "options_en": ["switch statement", "if statement", "guard statement", "pattern matching"],
    "options_hi": ["स्विच स्टेटमेंट", "if स्टेटमेंट", "गार्ड स्टेटमेंट", "पैटर्न मैचिंग"],
    "answer_en": "switch statement",
    "answer_hi": "स्विच स्टेटमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'nonisolated' used for in actors?",
    "question_hi": "एक्टर्स में 'nonisolated' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Opt out of actor isolation", "Make method non-isolated", "Disable isolation", "Public access"],
    "options_hi": ["एक्टर आइसोलेशन से बाहर निकलना", "मेथड को नॉन-आइसोलेटेड बनाना", "आइसोलेशन डिसेबल करना", "पब्लिक एक्सेस"],
    "answer_en": "Opt out of actor isolation",
    "answer_hi": "एक्टर आइसोलेशन से बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Swift protocol enables sequence operations?",
    "question_hi": "कौन सा Swift प्रोटोकॉल सीक्वेंस ऑपरेशन्स सक्षम करता है?",
    "options_en": ["Sequence", "Iterable", "Enumerable", "Collection"],
    "options_hi": ["Sequence", "Iterable", "Enumerable", "Collection"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does '@unchecked Sendable' do?",
    "question_hi": "'@unchecked Sendable' क्या करता है?",
    "options_en": ["Suppresses concurrency warnings", "Marks type as Sendable", "Disables checking", "Enables sending"],
    "options_hi": ["कनकरेंसी वार्निंग्स सप्रेस करता है", "टाइप को सेंडेबल मार्क करता है", "चेकिंग डिसेबल करता है", "सेंडिंग सक्षम करता है"],
    "answer_en": "Suppresses concurrency warnings",
    "answer_hi": "कनकरेंसी वार्निंग्स सप्रेस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Swift method combines sequence elements?",
    "question_hi": "कौन सी Swift मेथड सीक्वेंस एलिमेंट्स को कम्बाइन करती है?",
    "options_en": ["reduce", "map", "filter", "compactMap"],
    "options_hi": ["reduce", "map", "filter", "compactMap"],
    "answer_en": "reduce",
    "answer_hi": "reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'precondition' used for in Swift?",
    "question_hi": "Swift में 'precondition' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Debug-time assertion", "Runtime check", "Compile-time check", "Condition testing"],
    "options_hi": ["डीबग-टाइम असर्शन", "रनटाइम चेक", "कम्पाइल-टाइम चेक", "कंडीशन टेस्टिंग"],
    "answer_en": "Debug-time assertion",
    "answer_hi": "डीबग-टाइम असर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Swift feature enables property observation?",
    "question_hi": "कौन सा Swift फीचर प्रॉपर्टी ऑब्जर्वेशन सक्षम करता है?",
    "options_en": ["Property observers", "didSet/willSet", "Property wrappers", "Key-value observing"],
    "options_hi": ["प्रॉपर्टी ऑब्जर्वर्स", "didSet/willSet", "प्रॉपर्टी रैपर्स", "की-वैल्यू ऑब्जर्विंग"],
    "answer_en": "Property observers",
    "answer_hi": "प्रॉपर्टी ऑब्जर्वर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does 'flatMap' do in Swift?",
    "question_hi": "Swift में 'flatMap' क्या करता है?",
    "options_en": ["Transforms and flattens", "Maps flatly", "Flattens nested collections", "Combines mapping and flattening"],
    "options_hi": ["ट्रांसफॉर्म और फ्लैटन करता है", "फ्लैटली मैप करता है", "नेस्टेड कलेक्शन फ्लैटन करता है", "मैपिंग और फ्लैटनिंग कम्बाइन करता है"],
    "answer_en": "Transforms and flattens",
    "answer_hi": "ट्रांसफॉर्म और फ्लैटन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which Swift protocol enables custom debugging?",
    "question_hi": "कौन सा Swift प्रोटोकॉल कस्टम डीबगिंग सक्षम करता है?",
    "options_en": ["CustomDebugStringConvertible", "DebugPrintable", "DebugRepresentable", "DebugDescription"],
    "options_hi": ["CustomDebugStringConvertible", "DebugPrintable", "DebugRepresentable", "DebugDescription"],
    "answer_en": "CustomDebugStringConvertible",
    "answer_hi": "CustomDebugStringConvertible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is '@frozen' attribute for in Swift?",
    "question_hi": "Swift में '@frozen' एट्रिब्यूट किस लिए है?",
    "options_en": ["Prevents future enum case additions", "Freezes enum", "Makes enum immutable", "Optimizes enum"],
    "options_hi": ["भविष्य के enum केस एडिशन रोकता है", "enum फ्रीज करता है", "enum को इम्यूटेबल बनाता है", "enum ऑप्टिमाइज़ करता है"],
    "answer_en": "Prevents future enum case additions",
    "answer_hi": "भविष्य के enum केस एडिशन रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which Swift feature enables dynamic member lookup?",
    "question_hi": "कौन सा Swift फीचर डायनामिक मेंबर लुकअप सक्षम करता है?",
    "options_en": ["@dynamicMemberLookup", "DynamicMembers", "RuntimeMembers", "Reflection"],
    "options_hi": ["@dynamicMemberLookup", "DynamicMembers", "RuntimeMembers", "Reflection"],
    "answer_en": "@dynamicMemberLookup",
    "answer_hi": "@dynamicMemberLookup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does '@autoclosure' attribute do?",
    "question_hi": "'@autoclosure' एट्रिब्यूट क्या करता है?",
    "options_en": ["Automatically creates closure", "Auto-closes scope", "Automatic closure execution", "Closure automation"],
    "options_hi": ["ऑटोमेटिकली क्लोजर बनाता है", "स्कोप ऑटो-क्लोज करता है", "ऑटोमेटिक क्लोजर एक्जीक्यूशन", "क्लोजर ऑटोमेशन"],
    "answer_en": "Automatically creates closure",
    "answer_hi": "ऑटोमेटिकली क्लोजर बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which Swift method creates repeated array?",
    "question_hi": "कौन सी Swift मेथड रिपीटेड ऐरे बनाती है?",
    "options_en": ["Array(repeating:count:)", "Array.fill()", "Array.repeat()", "Array.duplicate()"],
    "options_hi": ["Array(repeating:count:)", "Array.fill()", "Array.repeat()", "Array.duplicate()"],
    "answer_en": "Array(repeating:count:)",
    "answer_hi": "Array(repeating:count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'isolated' parameter used for?",
    "question_hi": "'isolated' पैरामीटर का उपयोग किस लिए किया जाता है?",
    "options_en": ["Actor isolation enforcement", "Parameter isolation", "Thread isolation", "Memory isolation"],
    "options_hi": ["एक्टर आइसोलेशन एनफोर्समेंट", "पैरामीटर आइसोलेशन", "थ्रेड आइसोलेशन", "मेमोरी आइसोलेशन"],
    "answer_en": "Actor isolation enforcement",
    "answer_hi": "एक्टर आइसोलेशन एनफोर्समेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which Swift protocol enables raw values?",
    "question_hi": "कौन सा Swift प्रोटोकॉल रॉ वैल्यू सक्षम करता है?",
    "options_en": ["RawRepresentable", "RawValue", "ExpressibleByRawValue", "RawProtocol"],
    "options_hi": ["RawRepresentable", "RawValue", "ExpressibleByRawValue", "RawProtocol"],
    "answer_en": "RawRepresentable",
    "answer_hi": "RawRepresentable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does '@unknown default' handle?",
    "question_hi": "'@unknown default' क्या हैंडल करता है?",
    "options_en": ["Future enum cases", "Unknown types", "Runtime errors", "Default cases"],
    "options_hi": ["भविष्य के enum केस", "अनजान टाइप्स", "रनटाइम एरर्स", "डिफ़ॉल्ट केस"],
    "answer_en": "Future enum cases",
    "answer_hi": "भविष्य के enum केस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which Swift feature enables custom string literals?",
    "question_hi": "कौन सा Swift फीचर कस्टम स्ट्रिंग लिटरल सक्षम करता है?",
    "options_en": ["ExpressibleByStringLiteral", "CustomStringLiteral", "StringLiteralConvertible", "LiteralString"],
    "options_hi": ["ExpressibleByStringLiteral", "CustomStringLiteral", "StringLiteralConvertible", "LiteralString"],
    "answer_en": "ExpressibleByStringLiteral",
    "answer_hi": "ExpressibleByStringLiteral",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is '@resultBuilder' used for?",
    "question_hi": "'@resultBuilder' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Domain-specific language creation", "Result building", "Function building", "Code generation"],
    "options_hi": ["डोमेन-स्पेसिफिक लैंग्वेज क्रिएशन", "रिजल्ट बिल्डिंग", "फ़ंक्शन बिल्डिंग", "कोड जनरेशन"],
    "answer_en": "Domain-specific language creation",
    "answer_hi": "डोमेन-स्पेसिफिक लैंग्वेज क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which Swift protocol enables numeric operations?",
    "question_hi": "कौन सा Swift प्रोटोकॉल न्यूमेरिक ऑपरेशन्स सक्षम करता है?",
    "options_en": ["Numeric", "AdditiveArithmetic", "MultiplicativeArithmetic", "Arithmetic"],
    "options_hi": ["Numeric", "AdditiveArithmetic", "MultiplicativeArithmetic", "Arithmetic"],
    "answer_en": "Numeric",
    "answer_hi": "Numeric",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does '@_transparent' attribute do?",
    "question_hi": "'@_transparent' एट्रिब्यूट क्या करता है?",
    "options_en": ["Forces function inlining", "Makes function transparent", "Optimizes function", "Improves performance"],
    "options_hi": ["फ़ंक्शन इनलाइनिंग फोर्स करता है", "फ़ंक्शन ट्रांसपेरेंट बनाता है", "फ़ंक्शन ऑप्टिमाइज़ करता है", "परफॉर्मेंस इम्प्रूव करता है"],
    "answer_en": "Forces function inlining",
    "answer_hi": "फ़ंक्शन इनलाइनिंग फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which Swift feature enables reflection?",
    "question_hi": "कौन सा Swift फीचर रिफ्लेक्शन सक्षम करता है?",
    "options_en": ["Mirror", "Reflection API", "CustomReflectable", "Type inspection"],
    "options_hi": ["Mirror", "Reflection API", "CustomReflectable", "टाइप इंस्पेक्शन"],
    "answer_en": "Mirror",
    "answer_hi": "Mirror",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is '@_specialize' used for?",
    "question_hi": "'@_specialize' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Performance optimization", "Type specialization", "Function optimization", "Code specialization"],
    "options_hi": ["परफॉर्मेंस ऑप्टिमाइज़ेशन", "टाइप स्पेशलाइज़ेशन", "फ़ंक्शन ऑप्टिमाइज़ेशन", "कोड स्पेशलाइज़ेशन"],
    "answer_en": "Performance optimization",
    "answer_hi": "परफॉर्मेंस ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which Swift method creates formatted strings?",
    "question_hi": "कौन सी Swift मेथड फॉर्मेटेड स्ट्रिंग बनाती है?",
    "options_en": ["String(format:arguments:)", "String.formatted()", "String.template()", "String.interpolate()"],
    "options_hi": ["String(format:arguments:)", "String.formatted()", "String.template()", "String.interpolate()"],
    "answer_en": "String(format:arguments:)",
    "answer_hi": "String(format:arguments:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does '@_nonSendable' mark?",
    "question_hi": "'@_nonSendable' क्या मार्क करता है?",
    "options_en": ["Type as not Sendable", "Non-sendable types", "Disables sending", "Prevents concurrency"],
    "options_hi": ["टाइप को नॉन-सेंडेबल के रूप में मार्क करता है", "नॉन-सेंडेबल टाइप्स", "सेंडिंग डिसेबल करता है", "कनकरेंसी रोकता है"],
    "answer_en": "Type as not Sendable",
    "answer_hi": "टाइप को नॉन-सेंडेबल के रूप में मार्क करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which Swift protocol enables collection operations?",
    "question_hi": "कौन सा Swift प्रोटोकॉल कलेक्शन ऑपरेशन्स सक्षम करता है?",
    "options_en": ["Collection", "Sequence", "Iterable", "Enumerable"],
    "options_hi": ["Collection", "Sequence", "Iterable", "Enumerable"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is '@_implements' used for?",
    "question_hi": "'@_implements' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Protocol requirement implementation", "Interface implementation", "Method implementation", "Protocol conformance"],
    "options_hi": ["प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंटेशन", "इंटरफ़ेस इम्प्लीमेंटेशन", "मेथड इम्प्लीमेंटेशन", "प्रोटोकॉल कन्फॉर्मेंस"],
    "answer_en": "Protocol requirement implementation",
    "answer_hi": "प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which Swift feature enables custom operators?",
    "question_hi": "कौन सा Swift फीचर कस्टम ऑपरेटर्स सक्षम करता है?",
    "options_en": ["Operator declaration", "Custom operators", "Operator overloading", "Operator functions"],
    "options_hi": ["ऑपरेटर डिक्लेरेशन", "कस्टम ऑपरेटर्स", "ऑपरेटर ओवरलोडिंग", "ऑपरेटर फ़ंक्शन"],
    "answer_en": "Operator declaration",
    "answer_hi": "ऑपरेटर डिक्लेरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does '@_exported' do for imports?",
    "question_hi": "इम्पोर्ट्स के लिए '@_exported' क्या करता है?",
    "options_en": ["Re-exports module", "Exports symbols", "Public import", "Module visibility"],
    "options_hi": ["मॉड्यूल री-एक्सपोर्ट करता है", "सिंबल्स एक्सपोर्ट करता है", "पब्लिक इम्पोर्ट", "मॉड्यूल विजिबिलिटी"],
    "answer_en": "Re-exports module",
    "answer_hi": "मॉड्यूल री-एक्सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which Swift protocol enables error handling?",
    "question_hi": "कौन सा Swift प्रोटोकॉल एरर हैंडलिंग सक्षम करता है?",
    "options_en": ["Error", "Throwable", "Exception", "Fault"],
    "options_hi": ["Error", "Throwable", "Exception", "Fault"],
    "answer_en": "Error",
    "answer_hi": "Error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is '@_optimize' attribute for?",
    "question_hi": "'@_optimize' एट्रिब्यूट किस लिए है?",
    "options_en": ["Compiler optimization hints", "Code optimization", "Performance tuning", "Build optimization"],
    "options_hi": ["कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स", "कोड ऑप्टिमाइज़ेशन", "परफॉर्मेंस ट्यूनिंग", "बिल्ड ऑप्टिमाइज़ेशन"],
    "answer_en": "Compiler optimization hints",
    "answer_hi": "कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which Swift method enables custom encoding?",
    "question_hi": "कौन सी Swift मेथड कस्टम एन्कोडिंग सक्षम करती है?",
    "options_en": ["encode(to:)", "Encodable.encode()", "Coding.encode()", "Serializable.encode()"],
    "options_hi": ["encode(to:)", "Encodable.encode()", "Coding.encode()", "Serializable.encode()"],
    "answer_en": "encode(to:)",
    "answer_hi": "encode(to:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does '@_typeEraser' do?",
    "question_hi": "'@_typeEraser' क्या करता है?",
    "options_en": ["Hides concrete type", "Erases type information", "Type abstraction", "Generic erasure"],
    "options_hi": ["कंक्रीट टाइप हाइड करता है", "टाइप इन्फॉर्मेशन इरेज़ करता है", "टाइप एब्सट्रैक्शन", "जेनेरिक इरेज़र"],
    "answer_en": "Hides concrete type",
    "answer_hi": "कंक्रीट टाइप हाइड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which Swift protocol enables random access?",
    "question_hi": "कौन सा Swift प्रोटोकॉल रैंडम एक्सेस सक्षम करता है?",
    "options_en": ["RandomAccessCollection", "DirectAccessCollection", "IndexedCollection", "FastAccessCollection"],
    "options_hi": ["RandomAccessCollection", "DirectAccessCollection", "IndexedCollection", "FastAccessCollection"],
    "answer_en": "RandomAccessCollection",
    "answer_hi": "RandomAccessCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is '@_fixed_layout' for?",
    "question_hi": "'@_fixed_layout' किस लिए है?",
    "options_en": ["Stable ABI", "Fixed memory layout", "Compile-time layout", "Binary compatibility"],
    "options_hi": ["स्टेबल ABI", "फिक्स्ड मेमोरी लेआउट", "कम्पाइल-टाइम लेआउट", "बाइनरी कंपैटिबिलिटी"],
    "answer_en": "Stable ABI",
    "answer_hi": "स्टेबल ABI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which Swift method enables custom decoding?",
    "question_hi": "कौन सी Swift मेथड कस्टम डिकोडिंग सक्षम करती है?",
    "options_en": ["init(from:)", "Decodable.init()", "Coding.init()", "Deserializable.init()"],
    "options_hi": ["init(from:)", "Decodable.init()", "Coding.init()", "Deserializable.init()"],
    "answer_en": "init(from:)",
    "answer_hi": "init(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does '@_marker' protocol indicate?",
    "question_hi": "'@_marker' प्रोटोकॉल क्या इंडिकेट करता है?",
    "options_en": ["Compiler internal use", "Protocol marker", "Type marker", "Code marker"],
    "options_hi": ["कम्पाइलर इंटरनल यूज़", "प्रोटोकॉल मार्कर", "टाइप मार्कर", "कोड मार्कर"],
    "answer_en": "Compiler internal use",
    "answer_hi": "कम्पाइलर इंटरनल यूज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which Swift feature enables async/await?",
    "question_hi": "कौन सा Swift फीचर async/await सक्षम करता है?",
    "options_en": ["Concurrency", "Async functions", "Await keyword", "Task API"],
    "options_hi": ["कनकरेंसी", "एसिंक फ़ंक्शन", "await कीवर्ड", "Task API"],
    "answer_en": "Concurrency",
    "answer_hi": "कनकरेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is '@_implicitSelfCapture' for?",
    "question_hi": "'@_implicitSelfCapture' किस लिए है?",
    "options_en": ["Compiler closure behavior", "Self capture in closures", "Closure optimization", "Memory management"],
    "options_hi": ["कम्पाइलर क्लोजर बिहेवियर", "क्लोजर में सेल्फ कैप्चर", "क्लोजर ऑप्टिमाइज़ेशन", "मेमोरी मैनेजमेंट"],
    "answer_en": "Compiler closure behavior",
    "answer_hi": "कम्पाइलर क्लोजर बिहेवियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which Swift protocol enables bidirectional access?",
    "question_hi": "कौन सा Swift प्रोटोकॉल बाईडायरेक्शनल एक्सेस सक्षम करता है?",
    "options_en": ["BidirectionalCollection", "ReversibleCollection", "BackwardCollection", "TwoWayCollection"],
    "options_hi": ["BidirectionalCollection", "ReversibleCollection", "BackwardCollection", "TwoWayCollection"],
    "answer_en": "BidirectionalCollection",
    "answer_hi": "BidirectionalCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does '@_dynamicReplacement' do?",
    "question_hi": "'@_dynamicReplacement' क्या करता है?",
    "options_en": ["Function replacement at runtime", "Dynamic method replacement", "Runtime patching", "Function swapping"],
    "options_hi": ["रनटाइम में फ़ंक्शन रिप्लेसमेंट", "डायनामिक मेथड रिप्लेसमेंट", "रनटाइम पैचिंग", "फ़ंक्शन स्वैपिंग"],
    "answer_en": "Function replacement at runtime",
    "answer_hi": "रनटाइम में फ़ंक्शन रिप्लेसमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which Swift feature enables property wrappers?",
    "question_hi": "कौन सा Swift फीचर प्रॉपर्टी रैपर्स सक्षम करता है?",
    "options_en": ["Property Wrappers", "@propertyWrapper", "Wrapper types", "Property decorators"],
    "options_hi": ["प्रॉपर्टी रैपर्स", "@propertyWrapper", "रैपर टाइप्स", "प्रॉपर्टी डेकोरेटर्स"],
    "answer_en": "Property Wrappers",
    "answer_hi": "प्रॉपर्टी रैपर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is '@_alwaysEmitIntoClient' for?",
    "question_hi": "'@_alwaysEmitIntoClient' किस लिए है?",
    "options_en": ["Forces inline emission", "Client code generation", "Always inline", "Emission control"],
    "options_hi": ["इनलाइन एमिशन फोर्स करता है", "क्लाइंट कोड जनरेशन", "हमेशा इनलाइन", "एमिशन कंट्रोल"],
    "answer_en": "Forces inline emission",
    "answer_hi": "इनलाइन एमिशन फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which Swift protocol enables pattern matching?",
    "question_hi": "कौन सा Swift प्रोटोकॉल पैटर्न मैचिंग सक्षम करता है?",
    "options_en": ["~= operator", "PatternMatchable", "Matchable", "PatternProtocol"],
    "options_hi": ["~= ऑपरेटर", "PatternMatchable", "Matchable", "PatternProtocol"],
    "answer_en": "~= operator",
    "answer_hi": "~= ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does '@_hasInitialValue' indicate?",
    "question_hi": "'@_hasInitialValue' क्या इंडिकेट करता है?",
    "options_en": ["Property has initial value", "Initial value present", "Default value", "Property initialization"],
    "options_hi": ["प्रॉपर्टी में इनिशियल वैल्यू है", "इनिशियल वैल्यू प्रेजेंट है", "डिफ़ॉल्ट वैल्यू", "प्रॉपर्टी इनिशियलाइज़ेशन"],
    "answer_en": "Property has initial value",
    "answer_hi": "प्रॉपर्टी में इनिशियल वैल्यू है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which Swift method provides debug description?",
    "question_hi": "कौन सी Swift मेथड डीबग डिस्क्रिप्शन प्रदान करती है?",
    "options_en": ["debugDescription", "debugPrint", "dump", "printDebug"],
    "options_hi": ["debugDescription", "debugPrint", "dump", "printDebug"],
    "answer_en": "debugDescription",
    "answer_hi": "debugDescription",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is '@_semantics' attribute for?",
    "question_hi": "'@_semantics' एट्रिब्यूट किस लिए है?",
    "options_en": ["Compiler optimization hints", "Semantic analysis", "Code semantics", "Language semantics"],
    "options_hi": ["कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स", "सेमेन्टिक एनालिसिस", "कोड सेमेन्टिक्स", "लैंग्वेज सेमेन्टिक्स"],
    "answer_en": "Compiler optimization hints",
    "answer_hi": "कम्पाइलर ऑप्टिमाइज़ेशन हिंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Swift feature enables macros?",
    "question_hi": "कौन सा Swift फीचर मैक्रोस सक्षम करता है?",
    "options_en": ["Swift Macros", "Macro system", "Code generation", "Metaprogramming"],
    "options_hi": ["Swift मैक्रोस", "मैक्रो सिस्टम", "कोड जनरेशन", "मेटाप्रोग्रामिंग"],
    "answer_en": "Swift Macros",
    "answer_hi": "Swift मैक्रोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does '@_inheritActorContext' do?",
    "question_hi": "'@_inheritActorContext' क्या करता है?",
    "options_en": ["Preserves actor context", "Inherits actor", "Context inheritance", "Actor passing"],
    "options_hi": ["एक्टर कॉन्टेक्स्ट प्रिजर्व करता है", "एक्टर इनहेरिट करता है", "कॉन्टेक्स्ट इनहेरिटेंस", "एक्टर पासिंग"],
    "answer_en": "Preserves actor context",
    "answer_hi": "एक्टर कॉन्टेक्स्ट प्रिजर्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which Swift protocol enables collection subscripting?",
    "question_hi": "कौन सा Swift प्रोटोकॉल कलेक्शन सबस्क्रिप्टिंग सक्षम करता है?",
    "options_en": ["Collection", "Subscriptable", "Indexed", "Accessible"],
    "options_hi": ["Collection", "Subscriptable", "Indexed", "Accessible"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is '@_alignment' used for?",
    "question_hi": "'@_alignment' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Memory alignment", "Data alignment", "Type alignment", "Struct alignment"],
    "options_hi": ["मेमोरी एलाइनमेंट", "डेटा एलाइनमेंट", "टाइप एलाइनमेंट", "स्ट्रक्चर एलाइनमेंट"],
    "answer_en": "Memory alignment",
    "answer_hi": "मेमोरी एलाइनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which Swift feature enables C interoperability?",
    "question_hi": "कौन सा Swift फीचर C इंटरऑपरेबिलिटी सक्षम करता है?",
    "options_en": ["C interoperability", "C bridging", "Foreign function interface", "C compatibility"],
    "options_hi": ["C इंटरऑपरेबिलिटी", "C ब्रिजिंग", "फॉरेन फ़ंक्शन इंटरफ़ेस", "C कंपैटिबिलिटी"],
    "answer_en": "C interoperability",
    "answer_hi": "C इंटरऑपरेबिलिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does '@_hasStorage' indicate?",
    "question_hi": "'@_hasStorage' क्या इंडिकेट करता है?",
    "options_en": ["Compiler internal storage", "Property storage", "Memory storage", "Data storage"],
    "options_hi": ["कम्पाइलर इंटरनल स्टोरेज", "प्रॉपर्टी स्टोरेज", "मेमोरी स्टोरेज", "डेटा स्टोरेज"],
    "answer_en": "Compiler internal storage",
    "answer_hi": "कम्पाइलर इंटरनल स्टोरेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which Swift feature enables regex literals?",
    "question_hi": "कौन सा Swift फीचर रेगेक्स लिटरल सक्षम करता है?",
    "options_en": ["Regex literals", "Regular expressions", "Pattern literals", "String patterns"],
    "options_hi": ["रेगेक्स लिटरल", "रेगुलर एक्सप्रेशन", "पैटर्न लिटरल", "स्ट्रिंग पैटर्न"],
    "answer_en": "Regex literals",
    "answer_hi": "रेगेक्स लिटरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the purpose of '@_effects' with 'readonly'?",
    "question_hi": "'readonly' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Indicates read-only effects", "Read-only property", "No side effects", "Pure function"],
    "options_hi": ["रीड-ओनली इफेक्ट्स इंडिकेट करता है", "रीड-ओनली प्रॉपर्टी", "कोई साइड इफेक्ट नहीं", "प्योर फ़ंक्शन"],
    "answer_en": "Indicates read-only effects",
    "answer_hi": "रीड-ओनली इफेक्ट्स इंडिकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which Swift operator enables force cast to composition?",
    "question_hi": "कौन सा Swift ऑपरेटर कंपोज़िशन के लिए फोर्स कास्ट सक्षम करता है?",
    "options_en": ["as!", "as?", "as", "is"],
    "options_hi": ["as!", "as?", "as", "is"],
    "answer_en": "as!",
    "answer_hi": "as!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does Swift regex literal syntax enable?",
    "question_hi": "Swift रेगेक्स लिटरल सिंटैक्स क्या सक्षम करता है?",
    "options_en": ["Pattern matching in code", "Regex patterns", "String patterns", "Text matching"],
    "options_hi": ["कोड में पैटर्न मैचिंग", "रेगेक्स पैटर्न", "स्ट्रिंग पैटर्न", "टेक्स्ट मैचिंग"],
    "answer_en": "Pattern matching in code",
    "answer_hi": "कोड में पैटर्न मैचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_implements' with constraints enable?",
    "question_hi": "कंस्ट्रेंट्स के साथ '@_implements' क्या सक्षम करता है?",
    "options_en": ["Conditional protocol implementation", "Constrained implementation", "Generic implementation", "Type-constrained implementation"],
    "options_hi": ["सशर्त प्रोटोकॉल इम्प्लीमेंटेशन", "सीमित इम्प्लीमेंटेशन", "जेनेरिक इम्प्लीमेंटेशन", "टाइप-सीमित इम्प्लीमेंटेशन"],
    "answer_en": "Conditional protocol implementation",
    "answer_hi": "सशर्त प्रोटोकॉल इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which Swift feature enables existential types?",
    "question_hi": "कौन सा Swift फीचर एक्जिस्टेंशियल टाइप्स सक्षम करता है?",
    "options_en": ["any keyword", "some keyword", "any type", "existential types"],
    "options_hi": ["any कीवर्ड", "some कीवर्ड", "any टाइप", "एक्जिस्टेंशियल टाइप"],
    "answer_en": "any keyword",
    "answer_hi": "any कीवर्ड",
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