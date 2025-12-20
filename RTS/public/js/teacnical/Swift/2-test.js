const questions = [
  {
    "num": 1,
    "question_en": "What is the primary purpose of 'Equatable' protocol in Swift?",
    "question_hi": "Swift में 'Equatable' प्रोटोकॉल का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["Value comparison", "Type safety", "Memory management", "Error handling"],
    "options_hi": ["वैल्यू तुलना", "टाइप सुरक्षा", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन"],
    "answer_en": "Value comparison",
    "answer_hi": "वैल्यू तुलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to sort an array in-place in Swift?",
    "question_hi": "Swift में ऐरे को इन-प्लेस सॉर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["sort()", "sorted()", "order()", "arrange()"],
    "options_hi": ["sort()", "sorted()", "order()", "arrange()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'Comparable' protocol provide in Swift?",
    "question_hi": "Swift में 'Comparable' प्रोटोकॉल क्या प्रदान करता है?",
    "options_en": ["Comparison operators", "Equality operators", "Arithmetic operators", "Logical operators"],
    "options_hi": ["तुलना ऑपरेटर", "समानता ऑपरेटर", "अंकगणितीय ऑपरेटर", "तार्किक ऑपरेटर"],
    "answer_en": "Comparison operators",
    "answer_hi": "तुलना ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of '@main' attribute in Swift?",
    "question_hi": "Swift में '@main' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Entry point declaration", "Main thread marking", "Primary class", "Main function"],
    "options_hi": ["एंट्री प्वाइंट घोषणा", "मेन थ्रेड मार्किंग", "प्राथमिक क्लास", "मुख्य फ़ंक्शन"],
    "answer_en": "Entry point declaration",
    "answer_hi": "एंट्री प्वाइंट घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which protocol is used to make a type iterable in Swift?",
    "question_hi": "Swift में किसी टाइप को इटरेबल बनाने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["Iterable", "Sequence", "Enumerator", "Iterator"],
    "options_hi": ["Iterable", "Sequence", "Enumerator", "Iterator"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does 'static' keyword indicate in Swift?",
    "question_hi": "Swift में 'static' कीवर्ड क्या इंगित करता है?",
    "options_en": ["Type-level member", "Constant value", "Immutable variable", "Singleton pattern"],
    "options_hi": ["टाइप-लेवल सदस्य", "निरंतर मान", "अपरिवर्तनीय चर", "सिंगलटन पैटर्न"],
    "answer_en": "Type-level member",
    "answer_hi": "टाइप-लेवल सदस्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which collection type is optimized for key-value lookups in Swift?",
    "question_hi": "Swift में की-वैल्यू लुकअप के लिए कौन सा संग्रह प्रकार अनुकूलित है?",
    "options_en": ["Array", "Set", "Dictionary", "Tuple"],
    "options_hi": ["सरणी", "सेट", "शब्दकोश", "टुपल"],
    "answer_en": "Dictionary",
    "answer_hi": "शब्दकोश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of 'CustomDebugStringConvertible' protocol?",
    "question_hi": "'CustomDebugStringConvertible' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["Debug description", "User display", "Log formatting", "Error messages"],
    "options_hi": ["डीबग विवरण", "उपयोगकर्ता प्रदर्शन", "लॉग फ़ॉर्मेटिंग", "त्रुटि संदेश"],
    "answer_en": "Debug description",
    "answer_hi": "डीबग विवरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'is' operator do in Swift?",
    "question_hi": "Swift में 'is' ऑपरेटर क्या करता है?",
    "options_en": ["Type checking", "Type casting", "Value comparison", "Identity checking"],
    "options_hi": ["टाइप जाँच", "टाइप कास्टिंग", "मान तुलना", "पहचान जाँच"],
    "answer_en": "Type checking",
    "answer_hi": "टाइप जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method creates a new array with non-nil elements?",
    "question_hi": "कौन सी विधि गैर-निल तत्वों के साथ एक नई सरणी बनाती है?",
    "options_en": ["compactMap()", "filter()", "map()", "flatMap()"],
    "options_hi": ["compactMap()", "filter()", "map()", "flatMap()"],
    "answer_en": "compactMap()",
    "answer_hi": "compactMap()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'ExpressibleByIntegerLiteral' protocol used for?",
    "question_hi": "'ExpressibleByIntegerLiteral' प्रोटोकॉल का उपयोग किस लिए किया जाता है?",
    "options_en": ["Integer literal creation", "String conversion", "Number formatting", "Math operations"],
    "options_hi": ["पूर्णांक लिटरल निर्माण", "स्ट्रिंग रूपांतरण", "संख्या फ़ॉर्मेटिंग", "गणितीय संचालन"],
    "answer_en": "Integer literal creation",
    "answer_hi": "पूर्णांक लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'fallthrough' keyword do in switch statements?",
    "question_hi": "स्विच स्टेटमेंट में 'fallthrough' कीवर्ड क्या करता है?",
    "options_en": ["Continue to next case", "Break execution", "Return value", "Throw error"],
    "options_hi": ["अगले केस में जारी रखें", "निष्पादन रोकें", "मान वापस करें", "त्रुटि फेंकें"],
    "answer_en": "Continue to next case",
    "answer_hi": "अगले केस में जारी रखें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which property wrapper is used for animation in SwiftUI?",
    "question_hi": "SwiftUI में एनिमेशन के लिए किस प्रॉपर्टी रैपर का उपयोग किया जाता है?",
    "options_en": ["@State", "@Binding", "@Animation", "@Namespace"],
    "options_hi": ["@State", "@Binding", "@Animation", "@Namespace"],
    "answer_en": "@Namespace",
    "answer_hi": "@Namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'MemoryLayout' used for in Swift?",
    "question_hi": "Swift में 'MemoryLayout' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Memory size information", "Memory allocation", "Memory deallocation", "Memory optimization"],
    "options_hi": ["मेमोरी आकार जानकारी", "मेमोरी आवंटन", "मेमोरी मुक्ति", "मेमोरी अनुकूलन"],
    "answer_en": "Memory size information",
    "answer_hi": "मेमोरी आकार जानकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does 'withUnsafePointer' function provide?",
    "question_hi": "'withUnsafePointer' फ़ंक्शन क्या प्रदान करता है?",
    "options_en": ["Unsafe pointer access", "Safe memory access", "Buffer management", "Memory copying"],
    "options_hi": ["असुरक्षित पॉइंटर पहुंच", "सुरक्षित मेमोरी पहुंच", "बफर प्रबंधन", "मेमोरी कॉपी करना"],
    "answer_en": "Unsafe pointer access",
    "answer_hi": "असुरक्षित पॉइंटर पहुंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'ExpressibleByArrayLiteral' protocol for?",
    "question_hi": "'ExpressibleByArrayLiteral' प्रोटोकॉल किस लिए है?",
    "options_en": ["Array literal creation", "Array operations", "Array sorting", "Array filtering"],
    "options_hi": ["सरणी लिटरल निर्माण", "सरणी संचालन", "सरणी छँटाई", "सरणी फ़िल्टरिंग"],
    "answer_en": "Array literal creation",
    "answer_hi": "सरणी लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does '@escaping' indicate in closure parameters?",
    "question_hi": "क्लोजर पैरामीटर्स में '@escaping' क्या इंगित करता है?",
    "options_en": ["Closure escapes function scope", "Closure is synchronous", "Closure returns value", "Closure has parameters"],
    "options_hi": ["क्लोजर फ़ंक्शन स्कोप से बच जाता है", "क्लोजर तुल्यकालिक है", "क्लोजर मान लौटाता है", "क्लोजर में पैरामीटर हैं"],
    "answer_en": "Closure escapes function scope",
    "answer_hi": "क्लोजर फ़ंक्शन स्कोप से बच जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method joins array elements into a string?",
    "question_hi": "कौन सी विधि सरणी तत्वों को स्ट्रिंग में जोड़ती है?",
    "options_en": ["joined()", "combined()", "concatenated()", "merged()"],
    "options_hi": ["joined()", "combined()", "concatenated()", "merged()"],
    "answer_en": "joined()",
    "answer_hi": "joined()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'Mirror' type used for in Swift?",
    "question_hi": "Swift में 'Mirror' प्रकार का उपयोग किस लिए किया जाता है?",
    "options_en": ["Reflection/introspection", "Image reflection", "View mirroring", "Data reflection"],
    "options_hi": ["प्रतिबिंब/आत्मनिरीक्षण", "छवि प्रतिबिंब", "व्यू मिररिंग", "डेटा प्रतिबिंब"],
    "answer_en": "Reflection/introspection",
    "answer_hi": "प्रतिबिंब/आत्मनिरीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'prefix(while:)' method do?",
    "question_hi": "'prefix(while:)' विधि क्या करती है?",
    "options_en": ["Returns elements while condition is true", "Returns all elements", "Filters elements", "Maps elements"],
    "options_hi": ["तत्व तब तक लौटाता है जब तक स्थिति सत्य है", "सभी तत्व लौटाता है", "तत्व फ़िल्टर करता है", "तत्व मैप करता है"],
    "answer_en": "Returns elements while condition is true",
    "answer_hi": "तत्व तब तक लौटाता है जब तक स्थिति सत्य है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'ExpressibleByDictionaryLiteral' protocol?",
    "question_hi": "'ExpressibleByDictionaryLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Dictionary literal creation", "Dictionary operations", "Key-value storage", "Hash table"],
    "options_hi": ["शब्दकोश लिटरल निर्माण", "शब्दकोश संचालन", "कुंजी-मान संग्रहण", "हैश टेबल"],
    "answer_en": "Dictionary literal creation",
    "answer_hi": "शब्दकोश लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does 'uniquingKeysWith' parameter do in dictionary merging?",
    "question_hi": "शब्दकोश विलय में 'uniquingKeysWith' पैरामीटर क्या करता है?",
    "options_en": ["Handles duplicate keys", "Creates unique keys", "Filters keys", "Sorts keys"],
    "options_hi": ["डुप्लिकेट कुंजियों को संभालता है", "अद्वितीय कुंजियाँ बनाता है", "कुंजियाँ फ़िल्टर करता है", "कुंजियाँ क्रमबद्ध करता है"],
    "answer_en": "Handles duplicate keys",
    "answer_hi": "डुप्लिकेट कुंजियों को संभालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'Collection' protocol in Swift?",
    "question_hi": "Swift में 'Collection' प्रोटोकॉल क्या है?",
    "options_en": ["Multi-pass sequence", "Single-pass sequence", "Random access", "Bidirectional access"],
    "options_hi": ["मल्टी-पास अनुक्रम", "सिंगल-पास अनुक्रम", "यादृच्छिक पहुंच", "द्वि-दिशात्मक पहुंच"],
    "answer_en": "Multi-pass sequence",
    "answer_hi": "मल्टी-पास अनुक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method splits a string by separator?",
    "question_hi": "कौन सी विधि स्ट्रिंग को विभाजक द्वारा विभाजित करती है?",
    "options_en": ["split()", "separate()", "divide()", "partition()"],
    "options_hi": ["split()", "separate()", "divide()", "partition()"],
    "answer_en": "split()",
    "answer_hi": "split()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does 'case let' pattern do in switch statements?",
    "question_hi": "स्विच स्टेटमेंट में 'case let' पैटर्न क्या करता है?",
    "options_en": ["Binds associated value", "Checks type", "Compares value", "Throws error"],
    "options_hi": ["संबद्ध मान बाँधता है", "प्रकार जाँचता है", "मान तुलना करता है", "त्रुटि फेंकता है"],
    "answer_en": "Binds associated value",
    "answer_hi": "संबद्ध मान बाँधता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is '@unknown default' in switch statements?",
    "question_hi": "स्विच स्टेटमेंट में '@unknown default' क्या है?",
    "options_en": ["Handles future enum cases", "Unknown type handling", "Default error case", "Wildcard pattern"],
    "options_hi": ["भविष्य के एनम केस संभालता है", "अज्ञात प्रकार प्रबंधन", "डिफ़ॉल्ट त्रुटि केस", "वाइल्डकार्ड पैटर्न"],
    "answer_en": "Handles future enum cases",
    "answer_hi": "भविष्य के एनम केस संभालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does 'indices' property provide for collections?",
    "question_hi": "संग्रह के लिए 'indices' गुण क्या प्रदान करता है?",
    "options_en": ["Valid index range", "All indices", "Sorted indices", "Filtered indices"],
    "options_hi": ["मान्य सूचकांक सीमा", "सभी सूचकांक", "क्रमबद्ध सूचकांक", "फ़िल्टर्ड सूचकांक"],
    "answer_en": "Valid index range",
    "answer_hi": "मान्य सूचकांक सीमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'ExpressibleByFloatLiteral' protocol?",
    "question_hi": "'ExpressibleByFloatLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Float literal creation", "Decimal creation", "Number formatting", "Math operations"],
    "options_hi": ["फ्लोट लिटरल निर्माण", "दशमलव निर्माण", "संख्या फ़ॉर्मेटिंग", "गणितीय संचालन"],
    "answer_en": "Float literal creation",
    "answer_hi": "फ्लोट लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method converts string to lowercase?",
    "question_hi": "कौन सी विधि स्ट्रिंग को लोअरकेस में परिवर्तित करती है?",
    "options_en": ["lowercased()", "toLower()", "smallCase()", "lowerCase()"],
    "options_hi": ["lowercased()", "toLower()", "smallCase()", "lowerCase()"],
    "answer_en": "lowercased()",
    "answer_hi": "lowercased()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'unsafeBitCast' function do?",
    "question_hi": "'unsafeBitCast' फ़ंक्शन क्या करता है?",
    "options_en": ["Bit pattern reinterpretation", "Safe type casting", "Memory copying", "Buffer conversion"],
    "options_hi": ["बिट पैटर्न पुनर्व्याख्या", "सुरक्षित प्रकार कास्टिंग", "मेमोरी कॉपी करना", "बफर रूपांतरण"],
    "answer_en": "Bit pattern reinterpretation",
    "answer_hi": "बिट पैटर्न पुनर्व्याख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'BinaryInteger' protocol?",
    "question_hi": "'BinaryInteger' प्रोटोकॉल क्या है?",
    "options_en": ["Binary integer operations", "Decimal operations", "Float operations", "Math protocol"],
    "options_hi": ["बाइनरी पूर्णांक संचालन", "दशमलव संचालन", "फ्लोट संचालन", "गणित प्रोटोकॉल"],
    "answer_en": "Binary integer operations",
    "answer_hi": "बाइनरी पूर्णांक संचालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does 'removeAll(where:)' method do?",
    "question_hi": "'removeAll(where:)' विधि क्या करती है?",
    "options_en": ["Removes elements matching condition", "Removes all elements", "Filters elements", "Clears collection"],
    "options_hi": ["स्थिति से मेल खाने वाले तत्व हटाता है", "सभी तत्व हटाता है", "तत्व फ़िल्टर करता है", "संग्रह साफ़ करता है"],
    "answer_en": "Removes elements matching condition",
    "answer_hi": "स्थिति से मेल खाने वाले तत्व हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is '@_exported' attribute used for?",
    "question_hi": "'@_exported' विशेषता का उपयोग किस लिए किया जाता है?",
    "options_en": ["Module re-export", "Public access", "Private access", "Internal access"],
    "options_hi": ["मॉड्यूल पुनः-निर्यात", "सार्वजनिक पहुंच", "निजी पहुंच", "आंतरिक पहुंच"],
    "answer_en": "Module re-export",
    "answer_hi": "मॉड्यूल पुनः-निर्यात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method finds the maximum element in a sequence?",
    "question_hi": "कौन सी विधि अनुक्रम में अधिकतम तत्व ढूंढती है?",
    "options_en": ["max()", "maximum()", "greatest()", "top()"],
    "options_hi": ["max()", "maximum()", "greatest()", "top()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does 'reversed()' method return for arrays?",
    "question_hi": "सरणियों के लिए 'reversed()' विधि क्या लौटाती है?",
    "options_en": ["Reversed collection", "Reversed array", "Array slice", "Iterator"],
    "options_hi": ["उलटा संग्रह", "उलटी सरणी", "सरणी स्लाइस", "पुनरावर्तक"],
    "answer_en": "Reversed collection",
    "answer_hi": "उलटा संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'ExpressibleByNilLiteral' protocol?",
    "question_hi": "'ExpressibleByNilLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Nil literal creation", "Optional creation", "Null handling", "Error handling"],
    "options_hi": ["निल लिटरल निर्माण", "वैकल्पिक निर्माण", "नल प्रबंधन", "त्रुटि प्रबंधन"],
    "answer_en": "Nil literal creation",
    "answer_hi": "निल लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does 'capacity' property indicate for arrays?",
    "question_hi": "सरणियों के लिए 'capacity' गुण क्या इंगित करता है?",
    "options_en": ["Allocated memory size", "Current element count", "Maximum possible size", "Minimum required size"],
    "options_hi": ["आवंटित मेमोरी आकार", "वर्तमान तत्व गणना", "अधिकतम संभव आकार", "न्यूनतम आवश्यक आकार"],
    "answer_en": "Allocated memory size",
    "answer_hi": "आवंटित मेमोरी आकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'BidirectionalCollection' protocol?",
    "question_hi": "'BidirectionalCollection' प्रोटोकॉल क्या है?",
    "options_en": ["Backward traversal", "Forward traversal", "Random access", "Indexed access"],
    "options_hi": ["पिछड़ा ट्रैवर्सल", "आगे का ट्रैवर्सल", "यादृच्छिक पहुंच", "अनुक्रमित पहुंच"],
    "answer_en": "Backward traversal",
    "answer_hi": "पिछड़ा ट्रैवर्सल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method checks if all elements satisfy condition?",
    "question_hi": "कौन सी विधि जाँचती है कि क्या सभी तत्व शर्त को पूरा करते हैं?",
    "options_en": ["allSatisfy()", "every()", "all()", "satisfyAll()"],
    "options_hi": ["allSatisfy()", "every()", "all()", "satisfyAll()"],
    "answer_en": "allSatisfy()",
    "answer_hi": "allSatisfy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does 'String.Index' represent?",
    "question_hi": "'String.Index' क्या दर्शाता है?",
    "options_en": ["Character position", "Byte position", "UTF-8 position", "Unicode scalar position"],
    "options_hi": ["वर्ण स्थिति", "बाइट स्थिति", "UTF-8 स्थिति", "यूनिकोड स्केलर स्थिति"],
    "answer_en": "Character position",
    "answer_hi": "वर्ण स्थिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is '@_specialize' attribute used for?",
    "question_hi": "'@_specialize' विशेषता का उपयोग किस लिए किया जाता है?",
    "options_en": ["Function specialization", "Generic optimization", "Inline expansion", "Code generation"],
    "options_hi": ["फ़ंक्शन विशेषज्ञता", "सामान्य अनुकूलन", "इनलाइन विस्तार", "कोड जनरेशन"],
    "answer_en": "Function specialization",
    "answer_hi": "फ़ंक्शन विशेषज्ञता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does 'firstIndex(of:)' method return?",
    "question_hi": "'firstIndex(of:)' विधि क्या लौटाती है?",
    "options_en": ["First occurrence index", "All indices", "Last index", "Element count"],
    "options_hi": ["पहली घटना सूचकांक", "सभी सूचकांक", "अंतिम सूचकांक", "तत्व गणना"],
    "answer_en": "First occurrence index",
    "answer_hi": "पहली घटना सूचकांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'FixedWidthInteger' protocol?",
    "question_hi": "'FixedWidthInteger' प्रोटोकॉल क्या है?",
    "options_en": ["Fixed-bit-width integer", "Variable integer", "Big integer", "Small integer"],
    "options_hi": ["निश्चित-बिट-चौड़ाई पूर्णांक", "चर पूर्णांक", "बड़ा पूर्णांक", "छोटा पूर्णांक"],
    "answer_en": "Fixed-bit-width integer",
    "answer_hi": "निश्चित-बिट-चौड़ाई पूर्णांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method creates a dictionary from key-value pairs?",
    "question_hi": "कौन सी विधि कुंजी-मान जोड़ियों से शब्दकोश बनाती है?",
    "options_en": ["Dictionary(uniqueKeysWithValues:)", "Dict.fromPairs()", "createDictionary()", "makeDict()"],
    "options_hi": ["Dictionary(uniqueKeysWithValues:)", "Dict.fromPairs()", "createDictionary()", "makeDict()"],
    "answer_en": "Dictionary(uniqueKeysWithValues:)",
    "answer_hi": "Dictionary(uniqueKeysWithValues:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does 'removeFirst()' method do for arrays?",
    "question_hi": "सरणियों के लिए 'removeFirst()' विधि क्या करती है?",
    "options_en": ["Removes and returns first element", "Removes first element only", "Returns first element", "Filters first element"],
    "options_hi": ["पहला तत्व हटाता है और लौटाता है", "केवल पहला तत्व हटाता है", "पहला तत्व लौटाता है", "पहला तत्व फ़िल्टर करता है"],
    "answer_en": "Removes and returns first element",
    "answer_hi": "पहला तत्व हटाता है और लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is '@transparent' attribute?",
    "question_hi": "'@transparent' विशेषता क्या है?",
    "options_en": ["Inline function hint", "Transparent view", "Clear function", "Visible property"],
    "options_hi": ["इनलाइन फ़ंक्शन संकेत", "पारदर्शी दृश्य", "स्पष्ट फ़ंक्शन", "दृश्यमान संपत्ति"],
    "answer_en": "Inline function hint",
    "answer_hi": "इनलाइन फ़ंक्शन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does 'replacingOccurrences(of:with:)' method do?",
    "question_hi": "'replacingOccurrences(of:with:)' विधि क्या करती है?",
    "options_en": ["String replacement", "Array replacement", "Dictionary replacement", "Set replacement"],
    "options_hi": ["स्ट्रिंग प्रतिस्थापन", "सरणी प्रतिस्थापन", "शब्दकोश प्रतिस्थापन", "सेट प्रतिस्थापन"],
    "answer_en": "String replacement",
    "answer_hi": "स्ट्रिंग प्रतिस्थापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'CustomReflectable' protocol?",
    "question_hi": "'CustomReflectable' प्रोटोकॉल क्या है?",
    "options_en": ["Custom reflection", "Debug reflection", "User reflection", "Data reflection"],
    "options_hi": ["कस्टम प्रतिबिंब", "डीबग प्रतिबिंब", "उपयोगकर्ता प्रतिबिंब", "डेटा प्रतिबिंब"],
    "answer_en": "Custom reflection",
    "answer_hi": "कस्टम प्रतिबिंब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method creates a set from a sequence?",
    "question_hi": "कौन सी विधि अनुक्रम से सेट बनाती है?",
    "options_en": ["Set()", "createSet()", "makeSet()", "fromSequence()"],
    "options_hi": ["Set()", "createSet()", "makeSet()", "fromSequence()"],
    "answer_en": "Set()",
    "answer_hi": "Set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does 'isMultiple(of:)' method check?",
    "question_hi": "'isMultiple(of:)' विधि क्या जाँचती है?",
    "options_en": ["Divisibility", "Equality", "Greater than", "Less than"],
    "options_hi": ["विभाज्यता", "समानता", "से अधिक", "से कम"],
    "answer_en": "Divisibility",
    "answer_hi": "विभाज्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is '@warn_unqualified_access' attribute?",
    "question_hi": "'@warn_unqualified_access' विशेषता क्या है?",
    "options_en": ["Warns about unqualified access", "Allows unqualified access", "Prevents access", "Qualifies access"],
    "options_hi": ["अयोग्य पहुंच के बारे में चेतावनी देता है", "अयोग्य पहुंच की अनुमति देता है", "पहुंच रोकता है", "पहुंच योग्य बनाता है"],
    "answer_en": "Warns about unqualified access",
    "answer_hi": "अयोग्य पहुंच के बारे में चेतावनी देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does 'dropLast()' method return?",
    "question_hi": "'dropLast()' विधि क्या लौटाती है?",
    "options_en": ["Sequence without last elements", "Last element", "All elements", "Filtered elements"],
    "options_hi": ["अंतिम तत्वों के बिना अनुक्रम", "अंतिम तत्व", "सभी तत्व", "फ़िल्टर्ड तत्व"],
    "answer_en": "Sequence without last elements",
    "answer_hi": "अंतिम तत्वों के बिना अनुक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is '@objcMembers' attribute?",
    "question_hi": "'@objcMembers' विशेषता क्या है?",
    "options_en": ["Exposes all members to Objective-C", "Hides members", "Obj-C compatibility", "Swift-only members"],
    "options_hi": ["सभी सदस्यों को Objective-C के लिए उजागर करता है", "सदस्यों को छुपाता है", "Obj-C संगतता", "केवल स्विफ्ट सदस्य"],
    "answer_en": "Exposes all members to Objective-C",
    "answer_hi": "सभी सदस्यों को Objective-C के लिए उजागर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which method checks if string starts with prefix?",
    "question_hi": "कौन सी विधि जाँचती है कि स्ट्रिंग उपसर्ग से शुरू होती है या नहीं?",
    "options_en": ["hasPrefix()", "startsWith()", "beginsWith()", "startWith()"],
    "options_hi": ["hasPrefix()", "startsWith()", "beginsWith()", "startWith()"],
    "answer_en": "hasPrefix()",
    "answer_hi": "hasPrefix()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does 'MemoryLayout.stride' provide?",
    "question_hi": "'MemoryLayout.stride' क्या प्रदान करता है?",
    "options_en": ["Memory stride size", "Memory alignment", "Memory size", "Memory offset"],
    "options_hi": ["मेमोरी स्ट्राइड आकार", "मेमोरी संरेखण", "मेमोरी आकार", "मेमोरी ऑफ़सेट"],
    "answer_en": "Memory stride size",
    "answer_hi": "मेमोरी स्ट्राइड आकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'SIMD' type in Swift?",
    "question_hi": "Swift में 'SIMD' प्रकार क्या है?",
    "options_en": ["Single Instruction Multiple Data", "Simple Data", "Sequential Data", "Structured Data"],
    "options_hi": ["सिंगल इंस्ट्रक्शन मल्टीपल डेटा", "सरल डेटा", "अनुक्रमिक डेटा", "संरचित डेटा"],
    "answer_en": "Single Instruction Multiple Data",
    "answer_hi": "सिंगल इंस्ट्रक्शन मल्टीपल डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does 'reserveCapacity()' method do for arrays?",
    "question_hi": "सरणियों के लिए 'reserveCapacity()' विधि क्या करती है?",
    "options_en": ["Pre-allocates memory", "Reduces memory", "Clears memory", "Optimizes memory"],
    "options_hi": ["पूर्व-आवंटित मेमोरी", "मेमोरी कम करता है", "मेमोरी साफ़ करता है", "मेमोरी अनुकूलित करता है"],
    "answer_en": "Pre-allocates memory",
    "answer_hi": "पूर्व-आवंटित मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is '@_implements' attribute?",
    "question_hi": "'@_implements' विशेषता क्या है?",
    "options_en": ["Protocol requirement implementation", "Function implementation", "Class implementation", "Type implementation"],
    "options_hi": ["प्रोटोकॉल आवश्यकता कार्यान्वयन", "फ़ंक्शन कार्यान्वयन", "कक्षा कार्यान्वयन", "प्रकार कार्यान्वयन"],
    "answer_en": "Protocol requirement implementation",
    "answer_hi": "प्रोटोकॉल आवश्यकता कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which method converts string to uppercase?",
    "question_hi": "कौन सी विधि स्ट्रिंग को अपरकेस में परिवर्तित करती है?",
    "options_en": ["uppercased()", "toUpper()", "bigCase()", "upperCase()"],
    "options_hi": ["uppercased()", "toUpper()", "bigCase()", "upperCase()"],
    "answer_en": "uppercased()",
    "answer_hi": "uppercased()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does 'isSubset(of:)' method check for sets?",
    "question_hi": "सेट के लिए 'isSubset(of:)' विधि क्या जाँचती है?",
    "options_en": ["Set containment", "Set equality", "Set intersection", "Set union"],
    "options_hi": ["सेट समावेशन", "सेट समानता", "सेट प्रतिच्छेद", "सेट संघ"],
    "answer_en": "Set containment",
    "answer_hi": "सेट समावेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'ExpressibleByBooleanLiteral' protocol?",
    "question_hi": "'ExpressibleByBooleanLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Boolean literal creation", "True/false values", "Logical operations", "Conditional statements"],
    "options_hi": ["बूलियन लिटरल निर्माण", "सत्य/असत्य मान", "तार्किक संचालन", "सशर्त कथन"],
    "answer_en": "Boolean literal creation",
    "answer_hi": "बूलियन लिटरल निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does 'partition(by:)' method do?",
    "question_hi": "'partition(by:)' विधि क्या करती है?",
    "options_en": ["Partitions based on predicate", "Divides equally", "Splits randomly", "Separates elements"],
    "options_hi": ["प्रिडिकेट के आधार पर विभाजन करता है", "समान रूप से विभाजित करता है", "यादृच्छिक रूप से विभाजित करता है", "तत्व अलग करता है"],
    "answer_en": "Partitions based on predicate",
    "answer_hi": "प्रिडिकेट के आधार पर विभाजन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is '@inlinable' attribute?",
    "question_hi": "'@inlinable' विशेषता क्या है?",
    "options_en": ["Allows inline expansion", "Prevents inlining", "Module-private", "Internal only"],
    "options_hi": ["इनलाइन विस्तार की अनुमति देता है", "इनलाइनिंग रोकता है", "मॉड्यूल-निजी", "केवल आंतरिक"],
    "answer_en": "Allows inline expansion",
    "answer_hi": "इनलाइन विस्तार की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which method finds the minimum element in a sequence?",
    "question_hi": "कौन सी विधि अनुक्रम में न्यूनतम तत्व ढूंढती है?",
    "options_en": ["min()", "minimum()", "smallest()", "lowest()"],
    "options_hi": ["min()", "minimum()", "smallest()", "lowest()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does 'String.Encoding' represent?",
    "question_hi": "'String.Encoding' क्या दर्शाता है?",
    "options_en": ["String encoding types", "String format", "String conversion", "String storage"],
    "options_hi": ["स्ट्रिंग एन्कोडिंग प्रकार", "स्ट्रिंग फ़ॉर्मेट", "स्ट्रिंग रूपांतरण", "स्ट्रिंग संग्रहण"],
    "answer_en": "String encoding types",
    "answer_hi": "स्ट्रिंग एन्कोडिंग प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is '@_fixed_layout' attribute?",
    "question_hi": "'@_fixed_layout' विशेषता क्या है?",
    "options_en": ["Fixed memory layout", "Variable layout", "Dynamic layout", "Flexible layout"],
    "options_hi": ["निश्चित मेमोरी लेआउट", "चर लेआउट", "गतिशील लेआउट", "लचीला लेआउट"],
    "answer_en": "Fixed memory layout",
    "answer_hi": "निश्चित मेमोरी लेआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does 'formIndex(after:)' method do?",
    "question_hi": "'formIndex(after:)' विधि क्या करती है?",
    "options_en": ["Advances index", "Creates index", "Removes index", "Validates index"],
    "options_hi": ["सूचकांक आगे बढ़ाता है", "सूचकांक बनाता है", "सूचकांक हटाता है", "सूचकांक मान्य करता है"],
    "answer_en": "Advances index",
    "answer_hi": "सूचकांक आगे बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is '@_hasStorage' attribute?",
    "question_hi": "'@_hasStorage' विशेषता क्या है?",
    "options_en": ["Indicates storage", "No storage", "Temporary storage", "Permanent storage"],
    "options_hi": ["संग्रहण इंगित करता है", "कोई संग्रहण नहीं", "अस्थायी संग्रहण", "स्थायी संग्रहण"],
    "answer_en": "Indicates storage",
    "answer_hi": "संग्रहण इंगित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which method creates a repeated collection?",
    "question_hi": "कौन सी विधि दोहराए गए संग्रह को बनाती है?",
    "options_en": ["repeatElement()", "repeated()", "duplicate()", "copy()"],
    "options_hi": ["repeatElement()", "repeated()", "duplicate()", "copy()"],
    "answer_en": "repeatElement()",
    "answer_hi": "repeatElement()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does 'isStrictSubset(of:)' method check?",
    "question_hi": "'isStrictSubset(of:)' विधि क्या जाँचती है?",
    "options_en": ["Proper subset", "Equal sets", "Superset", "Disjoint sets"],
    "options_hi": ["उचित उपसमुच्चय", "समान सेट", "अधिसमुच्चय", "असंयुक्त सेट"],
    "answer_en": "Proper subset",
    "answer_hi": "उचित उपसमुच्चय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is '@usableFromInline' attribute?",
    "question_hi": "'@usableFromInline' विशेषता क्या है?",
    "options_en": ["Accessible from inline code", "Inline only", "Not accessible", "Private access"],
    "options_hi": ["इनलाइन कोड से सुलभ", "केवल इनलाइन", "पहुंच योग्य नहीं", "निजी पहुंच"],
    "answer_en": "Accessible from inline code",
    "answer_hi": "इनलाइन कोड से सुलभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does 'suffix(from:)' method return?",
    "question_hi": "'suffix(from:)' विधि क्या लौटाती है?",
    "options_en": ["Elements from index to end", "Last elements", "All elements", "Filtered elements"],
    "options_hi": ["सूचकांक से अंत तक के तत्व", "अंतिम तत्व", "सभी तत्व", "फ़िल्टर्ड तत्व"],
    "answer_en": "Elements from index to end",
    "answer_hi": "सूचकांक से अंत तक के तत्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is '@_silgen_name' attribute?",
    "question_hi": "'@_silgen_name' विशेषता क्या है?",
    "options_en": ["Specifies SIL symbol name", "Swift symbol name", "C symbol name", "Objective-C symbol"],
    "options_hi": ["SIL प्रतीक नाम निर्दिष्ट करता है", "स्विफ्ट प्रतीक नाम", "C प्रतीक नाम", "Objective-C प्रतीक"],
    "answer_en": "Specifies SIL symbol name",
    "answer_hi": "SIL प्रतीक नाम निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which method checks if string contains substring?",
    "question_hi": "कौन सी विधि जाँचती है कि स्ट्रिंग में उपस्ट्रिंग है या नहीं?",
    "options_en": ["contains()", "hasSubstring()", "includes()", "find()"],
    "options_hi": ["contains()", "hasSubstring()", "includes()", "find()"],
    "answer_en": "contains()",
    "answer_hi": "contains()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does 'isSuperset(of:)' method check for sets?",
    "question_hi": "सेट के लिए 'isSuperset(of:)' विधि क्या जाँचती है?",
    "options_en": ["Set containment (reverse)", "Set equality", "Set difference", "Set symmetric difference"],
    "options_hi": ["सेट समावेशन (उल्टा)", "सेट समानता", "सेट अंतर", "सेट सममित अंतर"],
    "answer_en": "Set containment (reverse)",
    "answer_hi": "सेट समावेशन (उल्टा)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is '@_optimize' attribute?",
    "question_hi": "'@_optimize' विशेषता क्या है?",
    "options_en": ["Compiler optimization hint", "Runtime optimization", "Code optimization", "Performance hint"],
    "options_hi": ["कंपाइलर अनुकूलन संकेत", "रनटाइम अनुकूलन", "कोड अनुकूलन", "प्रदर्शन संकेत"],
    "answer_en": "Compiler optimization hint",
    "answer_hi": "कंपाइलर अनुकूलन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does 'distance(from:to:)' method return?",
    "question_hi": "'distance(from:to:)' विधि क्या लौटाती है?",
    "options_en": ["Distance between indices", "Element count", "Array length", "Collection size"],
    "options_hi": ["सूचकांकों के बीच की दूरी", "तत्व गणना", "सरणी लंबाई", "संग्रह आकार"],
    "answer_en": "Distance between indices",
    "answer_hi": "सूचकांकों के बीच की दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is '@_specialize(extension:)' attribute?",
    "question_hi": "'@_specialize(extension:)' विशेषता क्या है?",
    "options_en": ["Extension specialization", "Type specialization", "Function specialization", "Protocol specialization"],
    "options_hi": ["एक्सटेंशन विशेषज्ञता", "प्रकार विशेषज्ञता", "फ़ंक्शन विशेषज्ञता", "प्रोटोकॉल विशेषज्ञता"],
    "answer_en": "Extension specialization",
    "answer_hi": "एक्सटेंशन विशेषज्ञता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which method removes and returns last array element?",
    "question_hi": "कौन सी विधि अंतिम सरणी तत्व को हटाती है और लौटाती है?",
    "options_en": ["removeLast()", "popLast()", "deleteLast()", "dropLastElement()"],
    "options_hi": ["removeLast()", "popLast()", "deleteLast()", "dropLastElement()"],
    "answer_en": "removeLast()",
    "answer_hi": "removeLast()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does 'isDisjoint(with:)' method check for sets?",
    "question_hi": "सेट के लिए 'isDisjoint(with:)' विधि क्या जाँचती है?",
    "options_en": ["No common elements", "All common elements", "Some common elements", "Equal elements"],
    "options_hi": ["कोई सामान्य तत्व नहीं", "सभी सामान्य तत्व", "कुछ सामान्य तत्व", "समान तत्व"],
    "answer_en": "No common elements",
    "answer_hi": "कोई सामान्य तत्व नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is '@_effects' attribute?",
    "question_hi": "'@_effects' विशेषता क्या है?",
    "options_en": ["Function effects description", "Side effects", "No effects", "All effects"],
    "options_hi": ["फ़ंक्शन प्रभाव विवरण", "साइड इफेक्ट्स", "कोई प्रभाव नहीं", "सभी प्रभाव"],
    "answer_en": "Function effects description",
    "answer_hi": "फ़ंक्शन प्रभाव विवरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does 'formUnion(_:)' method do for sets?",
    "question_hi": "सेट के लिए 'formUnion(_:)' विधि क्या करती है?",
    "options_en": ["Modifies set with union", "Returns new union", "Creates union", "Checks union"],
    "options_hi": ["संघ के साथ सेट संशोधित करता है", "नया संघ लौटाता है", "संघ बनाता है", "संघ जाँचता है"],
    "answer_en": "Modifies set with union",
    "answer_hi": "संघ के साथ सेट संशोधित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is '@_show_in_interface' attribute?",
    "question_hi": "'@_show_in_interface' विशेषता क्या है?",
    "options_en": ["Shows in generated interface", "Hides from interface", "Interface only", "No interface"],
    "options_hi": ["जनरेटेड इंटरफेस में दिखाता है", "इंटरफेस से छुपाता है", "केवल इंटरफेस", "कोई इंटरफेस नहीं"],
    "answer_en": "Shows in generated interface",
    "answer_hi": "जनरेटेड इंटरफेस में दिखाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which method inserts element at array index?",
    "question_hi": "कौन सी विधि सरणी सूचकांक पर तत्व सम्मिलित करती है?",
    "options_en": ["insert(_:at:)", "add(_:at:)", "put(_:at:)", "place(_:at:)"],
    "options_hi": ["insert(_:at:)", "add(_:at:)", "put(_:at:)", "place(_:at:)"],
    "answer_en": "insert(_:at:)",
    "answer_hi": "insert(_:at:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does 'subtract(_:)' method do for sets?",
    "question_hi": "सेट के लिए 'subtract(_:)' विधि क्या करती है?",
    "options_en": ["Modifies set with difference", "Returns difference", "Creates difference", "Checks difference"],
    "options_hi": ["अंतर के साथ सेट संशोधित करता है", "अंतर लौटाता है", "अंतर बनाता है", "अंतर जाँचता है"],
    "answer_en": "Modifies set with difference",
    "answer_hi": "अंतर के साथ सेट संशोधित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is '@_dynamicReplacement' attribute?",
    "question_hi": "'@_dynamicReplacement' विशेषता क्या है?",
    "options_en": ["Dynamic function replacement", "Static replacement", "Runtime replacement", "Compile-time replacement"],
    "options_hi": ["गतिशील फ़ंक्शन प्रतिस्थापन", "स्थिर प्रतिस्थापन", "रनटाइम प्रतिस्थापन", "कंपाइल-टाइम प्रतिस्थापन"],
    "answer_en": "Dynamic function replacement",
    "answer_hi": "गतिशील फ़ंक्शन प्रतिस्थापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does 'prefix(upTo:)' method return?",
    "question_hi": "'prefix(upTo:)' विधि क्या लौटाती है?",
    "options_en": ["Elements up to index", "All elements", "First elements", "Filtered elements"],
    "options_hi": ["सूचकांक तक के तत्व", "सभी तत्व", "पहले तत्व", "फ़िल्टर्ड तत्व"],
    "answer_en": "Elements up to index",
    "answer_hi": "सूचकांक तक के तत्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is '@_implicitSelfCapture' attribute?",
    "question_hi": "'@_implicitSelfCapture' विशेषता क्या है?",
    "options_en": ["Implicit self capture", "Explicit self capture", "No self capture", "Weak self capture"],
    "options_hi": ["अंतर्निहित सेल्फ कैप्चर", "स्पष्ट सेल्फ कैप्चर", "कोई सेल्फ कैप्चर नहीं", "कमजोर सेल्फ कैप्चर"],
    "answer_en": "Implicit self capture",
    "answer_hi": "अंतर्निहित सेल्फ कैप्चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which method returns elements satisfying predicate?",
    "question_hi": "कौन सी विधि प्रिडिकेट को संतुष्ट करने वाले तत्व लौटाती है?",
    "options_en": ["filter()", "where()", "select()", "findAll()"],
    "options_hi": ["filter()", "where()", "select()", "findAll()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does 'formIntersection(_:)' method do for sets?",
    "question_hi": "सेट के लिए 'formIntersection(_:)' विधि क्या करती है?",
    "options_en": ["Modifies set with intersection", "Returns intersection", "Creates intersection", "Checks intersection"],
    "options_hi": ["प्रतिच्छेद के साथ सेट संशोधित करता है", "प्रतिच्छेद लौटाता है", "प्रतिच्छेद बनाता है", "प्रतिच्छेद जाँचता है"],
    "answer_en": "Modifies set with intersection",
    "answer_hi": "प्रतिच्छेद के साथ सेट संशोधित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is '@_transparent' attribute (different meaning)?",
    "question_hi": "'@_transparent' विशेषता (अलग अर्थ) क्या है?",
    "options_en": ["Forces inline expansion", "Makes transparent", "Clear code", "Visible implementation"],
    "options_hi": ["इनलाइन विस्तार बल देता है", "पारदर्शी बनाता है", "स्पष्ट कोड", "दृश्यमान कार्यान्वयन"],
    "answer_en": "Forces inline expansion",
    "answer_hi": "इनलाइन विस्तार बल देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does 'suffix(while:)' method return?",
    "question_hi": "'suffix(while:)' विधि क्या लौटाती है?",
    "options_en": ["Elements from end while condition true", "Last elements", "All elements", "Filtered elements"],
    "options_hi": ["अंत से तत्व जब तक स्थिति सत्य है", "अंतिम तत्व", "सभी तत्व", "फ़िल्टर्ड तत्व"],
    "answer_en": "Elements from end while condition true",
    "answer_hi": "अंत से तत्व जब तक स्थिति सत्य है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is '@_alwaysEmitIntoClient' attribute?",
    "question_hi": "'@_alwaysEmitIntoClient' विशेषता क्या है?",
    "options_en": ["Always emit into client", "Never emit", "Sometimes emit", "Conditional emit"],
    "options_hi": ["हमेशा क्लाइंट में उत्सर्जित करें", "कभी उत्सर्जित न करें", "कभी-कभी उत्सर्जित करें", "सशर्त उत्सर्जन"],
    "answer_en": "Always emit into client",
    "answer_hi": "हमेशा क्लाइंट में उत्सर्जित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which method returns random element from collection?",
    "question_hi": "कौन सी विधि संग्रह से यादृच्छिक तत्व लौटाती है?",
    "options_en": ["randomElement()", "random()", "any()", "pickRandom()"],
    "options_hi": ["randomElement()", "random()", "any()", "pickRandom()"],
    "answer_en": "randomElement()",
    "answer_hi": "randomElement()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does 'isStrictSuperset(of:)' method check?",
    "question_hi": "'isStrictSuperset(of:)' विधि क्या जाँचती है?",
    "options_en": ["Proper superset", "Equal sets", "Subset", "Disjoint sets"],
    "options_hi": ["उचित अधिसमुच्चय", "समान सेट", "उपसमुच्चय", "असंयुक्त सेट"],
    "answer_en": "Proper superset",
    "answer_hi": "उचित अधिसमुच्चय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is '@_nonoverride' attribute?",
    "question_hi": "'@_nonoverride' विशेषता क्या है?",
    "options_en": ["Prevents overriding", "Allows overriding", "Force override", "Optional override"],
    "options_hi": ["ओवरराइडिंग रोकता है", "ओवरराइडिंग की अनुमति देता है", "फोर्स ओवरराइड", "वैकल्पिक ओवरराइड"],
    "answer_en": "Prevents overriding",
    "answer_hi": "ओवरराइडिंग रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does 'removeSubrange(_:)' method do?",
    "question_hi": "'removeSubrange(_:)' विधि क्या करती है?",
    "options_en": ["Removes elements in range", "Returns subrange", "Creates subrange", "Checks subrange"],
    "options_hi": ["सीमा में तत्व हटाता है", "उपसीमा लौटाता है", "उपसीमा बनाता है", "उपसीमा जाँचता है"],
    "answer_en": "Removes elements in range",
    "answer_hi": "सीमा में तत्व हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is '@_disfavoredOverload' attribute?",
    "question_hi": "'@_disfavoredOverload' विशेषता क्या है?",
    "options_en": ["Marks overload as less preferred", "Preferred overload", "Required overload", "Optional overload"],
    "options_hi": ["ओवरलोड को कम पसंदीदा के रूप में चिह्नित करता है", "पसंदीदा ओवरलोड", "आवश्यक ओवरलोड", "वैकल्पिक ओवरलोड"],
    "answer_en": "Marks overload as less preferred",
    "answer_hi": "ओवरलोड को कम पसंदीदा के रूप में चिह्नित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which method checks if string ends with suffix?",
    "question_hi": "कौन सी विधि जाँचती है कि स्ट्रिंग प्रत्यय के साथ समाप्त होती है या नहीं?",
    "options_en": ["hasSuffix()", "endsWith()", "terminatesWith()", "endWith()"],
    "options_hi": ["hasSuffix()", "endsWith()", "terminatesWith()", "endWith()"],
    "answer_en": "hasSuffix()",
    "answer_hi": "hasSuffix()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What does 'formSymmetricDifference(_:)' method do for sets?",
    "question_hi": "सेट के लिए 'formSymmetricDifference(_:)' विधि क्या करती है?",
    "options_en": ["Modifies set with symmetric difference", "Returns symmetric difference", "Creates symmetric difference", "Checks symmetric difference"],
    "options_hi": ["सममित अंतर के साथ सेट संशोधित करता है", "सममित अंतर लौटाता है", "सममित अंतर बनाता है", "सममित अंतर जाँचता है"],
    "answer_en": "Modifies set with symmetric difference",
    "answer_hi": "सममित अंतर के साथ सेट संशोधित करता है",
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