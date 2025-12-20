const questions = [
  {
    "num": 1,
    "question_en": "What does 'RangeReplaceableCollection' protocol provide in Swift?",
    "question_hi": "Swift में 'RangeReplaceableCollection' प्रोटोकॉल क्या प्रदान करता है?",
    "options_en": ["Range-based mutation operations", "Fixed-size collections", "Immutable collections", "Memory management"],
    "options_hi": ["रेंज-आधारित म्यूटेशन ऑपरेशंस", "फिक्स्ड-साइज कलेक्शंस", "इम्यूटेबल कलेक्शंस", "मेमोरी मैनेजमेंट"],
    "answer_en": "Range-based mutation operations",
    "answer_hi": "रेंज-आधारित म्यूटेशन ऑपरेशंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which attribute marks a Swift function as unavailable?",
    "question_hi": "कौन सा एट्रिब्यूट Swift फंक्शन को अनवैलेबल मार्क करता है?",
    "options_en": ["@available(*, unavailable)", "@unavailable", "@deprecated", "@removed"],
    "options_hi": ["@available(*, unavailable)", "@unavailable", "@deprecated", "@removed"],
    "answer_en": "@available(*, unavailable)",
    "answer_hi": "@available(*, unavailable)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the purpose of 'BidirectionalCollection' protocol?",
    "question_hi": "'BidirectionalCollection' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["Backward traversal capability", "Forward-only traversal", "Random access", "Indexed storage"],
    "options_hi": ["बैकवर्ड ट्रैवर्सल क्षमता", "फॉरवर्ड-ओनली ट्रैवर्सल", "रैंडम एक्सेस", "इंडेक्स्ड स्टोरेज"],
    "answer_en": "Backward traversal capability",
    "answer_hi": "बैकवर्ड ट्रैवर्सल क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'withContiguousStorageIfAvailable' method do?",
    "question_hi": "'withContiguousStorageIfAvailable' मेथड क्या करता है?",
    "options_en": ["Accesses contiguous memory if available", "Allocates contiguous memory", "Checks memory availability", "Manages memory contiguity"],
    "options_hi": ["कॉन्टिग्यूअस मेमोरी एक्सेस करता है अगर उपलब्ध है", "कॉन्टिग्यूअस मेमोरी एलोकेट करता है", "मेमोरी उपलब्धता चेक करता है", "मेमोरी कॉन्टिग्युइटी मैनेज करता है"],
    "answer_en": "Accesses contiguous memory if available",
    "answer_hi": "कॉन्टिग्यूअस मेमोरी एक्सेस करता है अगर उपलब्ध है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which protocol provides random access to collection elements?",
    "question_hi": "कौन सा प्रोटोकॉल कलेक्शन एलिमेंट्स को रैंडम एक्सेस प्रोवाइड करता है?",
    "options_en": ["RandomAccessCollection", "IndexedCollection", "DirectAccessCollection", "QuickAccessCollection"],
    "options_hi": ["RandomAccessCollection", "IndexedCollection", "DirectAccessCollection", "QuickAccessCollection"],
    "answer_en": "RandomAccessCollection",
    "answer_hi": "RandomAccessCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does '@frozen' attribute indicate for enums?",
    "question_hi": "एनम्स के लिए '@frozen' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["No future cases will be added", "Enum is frozen in memory", "Enum cannot be used", "Enum is deprecated"],
    "options_hi": ["भविष्य में कोई केस ऐड नहीं किया जाएगा", "एनम मेमोरी में फ्रोजन है", "एनम यूज़ नहीं किया जा सकता", "एनम डिप्रिकेटेड है"],
    "answer_en": "No future cases will be added",
    "answer_hi": "भविष्य में कोई केस ऐड नहीं किया जाएगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'CustomPlaygroundDisplayConvertible' protocol used for?",
    "question_hi": "'CustomPlaygroundDisplayConvertible' प्रोटोकॉल का उपयोग किस लिए किया जाता है?",
    "options_en": ["Custom playground visualization", "Debug visualization", "User interface display", "Console output"],
    "options_hi": ["कस्टम प्लेग्राउंड विज़ुअलाइज़ेशन", "डीबग विज़ुअलाइज़ेशन", "यूज़र इंटरफेस डिस्प्ले", "कंसोल आउटपुट"],
    "answer_en": "Custom playground visualization",
    "answer_hi": "कस्टम प्लेग्राउंड विज़ुअलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method creates a dictionary grouping elements by key?",
    "question_hi": "कौन सी मेथड एलिमेंट्स को की द्वारा ग्रुप करके डिक्शनरी क्रिएट करती है?",
    "options_en": ["Dictionary(grouping:by:)", "groupBy()", "createGroups()", "makeDictionary()"],
    "options_hi": ["Dictionary(grouping:by:)", "groupBy()", "createGroups()", "makeDictionary()"],
    "answer_en": "Dictionary(grouping:by:)",
    "answer_hi": "Dictionary(grouping:by:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'withMemoryRebound' function allow?",
    "question_hi": "'withMemoryRebound' फंक्शन क्या अलाउ करता है?",
    "options_en": ["Temporary type rebinding", "Permanent type change", "Memory allocation", "Buffer management"],
    "options_hi": ["टेम्पररी टाइप रीबाइंडिंग", "पर्मानेंट टाइप चेंज", "मेमोरी एलोकेशन", "बफर मैनेजमेंट"],
    "answer_en": "Temporary type rebinding",
    "answer_hi": "टेम्पररी टाइप रीबाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'TextOutputStream' protocol used for?",
    "question_hi": "'TextOutputStream' प्रोटोकॉल का उपयोग किस लिए किया जाता है?",
    "options_en": ["Custom text output destinations", "File writing", "Network streaming", "Console output"],
    "options_hi": ["कस्टम टेक्स्ट आउटपुट डेस्टिनेशन", "फाइल राइटिंग", "नेटवर्क स्ट्रीमिंग", "कंसोल आउटपुट"],
    "answer_en": "Custom text output destinations",
    "answer_hi": "कस्टम टेक्स्ट आउटपुट डेस्टिनेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method provides key-based subscript with default value?",
    "question_hi": "कौन सी मेथड डिफ़ॉल्ट वैल्यू के साथ की-बेस्ड सबस्क्रिप्ट प्रोवाइड करती है?",
    "options_en": ["subscript(_:default:)", "getValue()", "valueForKey()", "accessWithDefault()"],
    "options_hi": ["subscript(_:default:)", "getValue()", "valueForKey()", "accessWithDefault()"],
    "answer_en": "subscript(_:default:)",
    "answer_hi": "subscript(_:default:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does '@_optimize(none)' attribute do?",
    "question_hi": "'@_optimize(none)' एट्रिब्यूट क्या करता है?",
    "options_en": ["Disables optimizations for function", "Enables all optimizations", "Optimizes memory", "Improves performance"],
    "options_hi": ["फंक्शन के लिए ऑप्टिमाइज़ेशन डिसेबल करता है", "सभी ऑप्टिमाइज़ेशन एनेबल करता है", "मेमोरी ऑप्टिमाइज़ करता है", "परफॉर्मेंस इम्प्रूव करता है"],
    "answer_en": "Disables optimizations for function",
    "answer_hi": "फंक्शन के लिए ऑप्टिमाइज़ेशन डिसेबल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'UnsafeMutableRawBufferPointer' used for?",
    "question_hi": "'UnsafeMutableRawBufferPointer' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Unsafe mutable raw buffer access", "Safe buffer access", "Managed buffer", "Automatic buffer"],
    "options_hi": ["अनसेफ म्यूटेबल रॉ बफर एक्सेस", "सेफ बफर एक्सेस", "मैनेज्ड बफर", "ऑटोमेटिक बफर"],
    "answer_en": "Unsafe mutable raw buffer access",
    "answer_hi": "अनसेफ म्यूटेबल रॉ बफर एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which protocol enables pattern matching in switch statements?",
    "question_hi": "कौन सा प्रोटोकॉल स्विच स्टेटमेंट्स में पैटर्न मैचिंग एनेबल करता है?",
    "options_en": ["CaseIterable", "Equatable", "Comparable", "PatternMatchable"],
    "options_hi": ["CaseIterable", "Equatable", "Comparable", "PatternMatchable"],
    "answer_en": "CaseIterable",
    "answer_hi": "CaseIterable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does 'preconditionFailure()' function do?",
    "question_hi": "'preconditionFailure()' फंक्शन क्या करता है?",
    "options_en": ["Indicates unrecoverable precondition failure", "Checks precondition", "Logs precondition", "Recovers from failure"],
    "options_hi": ["अनरीकवरेबल प्रीकंडीशन फेल्यर इंडिकेट करता है", "प्रीकंडीशन चेक करता है", "प्रीकंडीशन लॉग करता है", "फेल्यर से रिकवर करता है"],
    "answer_en": "Indicates unrecoverable precondition failure",
    "answer_hi": "अनरीकवरेबल प्रीकंडीशन फेल्यर इंडिकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'ExpressibleByExtendedGraphemeClusterLiteral' protocol?",
    "question_hi": "'ExpressibleByExtendedGraphemeClusterLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Extended grapheme cluster literal creation", "Basic string creation", "Character creation", "Unicode creation"],
    "options_hi": ["एक्सटेंडेड ग्राफीम क्लस्टर लिटरल क्रिएशन", "बेसिक स्ट्रिंग क्रिएशन", "कैरेक्टर क्रिएशन", "यूनिकोड क्रिएशन"],
    "answer_en": "Extended grapheme cluster literal creation",
    "answer_hi": "एक्सटेंडेड ग्राफीम क्लस्टर लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method performs lexicographic comparison of sequences?",
    "question_hi": "कौन सी मेथड सीक्वेंस की लेक्सिकोग्राफिक कंपेरिजन परफॉर्म करती है?",
    "options_en": ["lexicographicallyPrecedes(_:)", "compareLex()", "lexCompare()", "alphabeticalCompare()"],
    "options_hi": ["lexicographicallyPrecedes(_:)", "compareLex()", "lexCompare()", "alphabeticalCompare()"],
    "answer_en": "lexicographicallyPrecedes(_:)",
    "answer_hi": "lexicographicallyPrecedes(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does '@_originallyDefinedIn' attribute specify?",
    "question_hi": "'@_originallyDefinedIn' एट्रिब्यूट क्या स्पेसिफाई करता है?",
    "options_en": ["Original module definition", "Current module", "Future module", "Deprecated module"],
    "options_hi": ["ओरिजिनल मॉड्यूल डेफिनिशन", "करंट मॉड्यूल", "फ्यूचर मॉड्यूल", "डिप्रिकेटेड मॉड्यूल"],
    "answer_en": "Original module definition",
    "answer_hi": "ओरिजिनल मॉड्यूल डेफिनिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'ManagedBufferPointer' used for?",
    "question_hi": "'ManagedBufferPointer' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Managed buffer with header", "Unmanaged buffer", "Raw buffer", "Simple buffer"],
    "options_hi": ["हेडर के साथ मैनेज्ड बफर", "अनमैनेज्ड बफर", "रॉ बफर", "सिंपल बफर"],
    "answer_en": "Managed buffer with header",
    "answer_hi": "हेडर के साथ मैनेज्ड बफर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method creates a string from UTF-8 code units?",
    "question_hi": "कौन सी मेथड UTF-8 कोड यूनिट्स से स्ट्रिंग क्रिएट करती है?",
    "options_en": ["String(decoding:as:)", "fromUTF8()", "createFromUTF8()", "decodeUTF8()"],
    "options_hi": ["String(decoding:as:)", "fromUTF8()", "createFromUTF8()", "decodeUTF8()"],
    "answer_en": "String(decoding:as:)",
    "answer_hi": "String(decoding:as:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does 'UnsafeBufferPointer' provide?",
    "question_hi": "'UnsafeBufferPointer' क्या प्रोवाइड करता है?",
    "options_en": ["Read-only buffer access", "Mutable buffer access", "Managed buffer", "Automatic buffer"],
    "options_hi": ["रीड-ओनली बफर एक्सेस", "म्यूटेबल बफर एक्सेस", "मैनेज्ड बफर", "ऑटोमेटिक बफर"],
    "answer_en": "Read-only buffer access",
    "answer_hi": "रीड-ओनली बफर एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is '@_typeSequence' attribute?",
    "question_hi": "'@_typeSequence' एट्रिब्यूट क्या है?",
    "options_en": ["Type sequence metadata", "Type ordering", "Type comparison", "Type storage"],
    "options_hi": ["टाइप सीक्वेंस मेटाडेटा", "टाइप ऑर्डरिंग", "टाइप कंपेरिजन", "टाइप स्टोरेज"],
    "answer_en": "Type sequence metadata",
    "answer_hi": "टाइप सीक्वेंस मेटाडेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method returns last element where predicate is true?",
    "question_hi": "कौन सी मेथड लास्ट एलिमेंट रिटर्न करती है जहाँ प्रिडिकेट ट्रू है?",
    "options_en": ["last(where:)", "findLast()", "lastWhere()", "final(where:)"],
    "options_hi": ["last(where:)", "findLast()", "lastWhere()", "final(where:)"],
    "answer_en": "last(where:)",
    "answer_hi": "last(where:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does '@_hasInitialValue' attribute indicate?",
    "question_hi": "'@_hasInitialValue' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["Property has initial value", "No initial value", "Default initializer", "Custom initializer"],
    "options_hi": ["प्रॉपर्टी में इनिशियल वैल्यू है", "कोई इनिशियल वैल्यू नहीं", "डिफ़ॉल्ट इनिशियलाइज़र", "कस्टम इनिशियलाइज़र"],
    "answer_en": "Property has initial value",
    "answer_hi": "प्रॉपर्टी में इनिशियल वैल्यू है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'ExpressibleByUnicodeScalarLiteral' protocol?",
    "question_hi": "'ExpressibleByUnicodeScalarLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Unicode scalar literal creation", "String creation", "Character creation", "UTF-8 creation"],
    "options_hi": ["यूनिकोड स्केलर लिटरल क्रिएशन", "स्ट्रिंग क्रिएशन", "कैरेक्टर क्रिएशन", "UTF-8 क्रिएशन"],
    "answer_en": "Unicode scalar literal creation",
    "answer_hi": "यूनिकोड स्केलर लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method returns elements except first n?",
    "question_hi": "कौन सी मेथड फर्स्ट n के अलावा एलिमेंट्स रिटर्न करती है?",
    "options_en": ["dropFirst(_:)", "skipFirst()", "exceptFirst()", "removeFirstN()"],
    "options_hi": ["dropFirst(_:)", "skipFirst()", "exceptFirst()", "removeFirstN()"],
    "answer_en": "dropFirst(_:)",
    "answer_hi": "dropFirst(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does '@_implicitSelfCapture' attribute control?",
    "question_hi": "'@_implicitSelfCapture' एट्रिब्यूट क्या कंट्रोल करता है?",
    "options_en": ["Implicit self capture in closures", "Explicit self capture", "No capture", "Weak capture"],
    "options_hi": ["क्लोजर्स में इम्प्लिसिट सेल्फ कैप्चर", "एक्सप्लिसिट सेल्फ कैप्चर", "कोई कैप्चर नहीं", "वीक कैप्चर"],
    "answer_en": "Implicit self capture in closures",
    "answer_hi": "क्लोजर्स में इम्प्लिसिट सेल्फ कैप्चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'AnyHashable' type used for?",
    "question_hi": "'AnyHashable' टाइप का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type-erased hashable value", "Any hashable type", "Specific hashable", "Generic hashable"],
    "options_hi": ["टाइप-इरेज़्ड हैशेबल वैल्यू", "कोई हैशेबल टाइप", "स्पेसिफिक हैशेबल", "जेनेरिक हैशेबल"],
    "answer_en": "Type-erased hashable value",
    "answer_hi": "टाइप-इरेज़्ड हैशेबल वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method returns first n elements?",
    "question_hi": "कौन सी मेथड फर्स्ट n एलिमेंट्स रिटर्न करती है?",
    "options_en": ["prefix(_:)", "firstN()", "take(_:)", "initial(_:)"],
    "options_hi": ["prefix(_:)", "firstN()", "take(_:)", "initial(_:)"],
    "answer_en": "prefix(_:)",
    "answer_hi": "prefix(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does '@_semantics' attribute specify?",
    "question_hi": "'@_semantics' एट्रिब्यूट क्या स्पेसिफाई करता है?",
    "options_en": ["Function semantics for compiler", "Runtime semantics", "User semantics", "Language semantics"],
    "options_hi": ["कंपाइलर के लिए फंक्शन सेमेन्टिक्स", "रनटाइम सेमेन्टिक्स", "यूज़र सेमेन्टिक्स", "लैंग्वेज सेमेन्टिक्स"],
    "answer_en": "Function semantics for compiler",
    "answer_hi": "कंपाइलर के लिए फंक्शन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'ExpressibleByStringInterpolation' protocol?",
    "question_hi": "'ExpressibleByStringInterpolation' प्रोटोकॉल क्या है?",
    "options_en": ["String interpolation creation", "Basic string creation", "Format string", "Template string"],
    "options_hi": ["स्ट्रिंग इंटरपोलेशन क्रिएशन", "बेसिक स्ट्रिंग क्रिएशन", "फॉर्मेट स्ट्रिंग", "टेम्पलेट स्ट्रिंग"],
    "answer_en": "String interpolation creation",
    "answer_hi": "स्ट्रिंग इंटरपोलेशन क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method returns last n elements?",
    "question_hi": "कौन सी मेथड लास्ट n एलिमेंट्स रिटर्न करती है?",
    "options_en": ["suffix(_:)", "lastN()", "takeLast()", "final(_:)"],
    "options_hi": ["suffix(_:)", "lastN()", "takeLast()", "final(_:)"],
    "answer_en": "suffix(_:)",
    "answer_hi": "suffix(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does '@_cdecl' attribute mark?",
    "question_hi": "'@_cdecl' एट्रिब्यूट क्या मार्क करता है?",
    "options_en": ["C-compatible function", "Swift-only function", "Objective-C function", "Export function"],
    "options_hi": ["C-कंपेटिबल फंक्शन", "Swift-ओनली फंक्शन", "Objective-C फंक्शन", "एक्सपोर्ट फंक्शन"],
    "answer_en": "C-compatible function",
    "answer_hi": "C-कंपेटिबल फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'ManagedBuffer' class used for?",
    "question_hi": "'ManagedBuffer' क्लास का उपयोग किस लिए किया जाता है?",
    "options_en": ["Buffer with managed memory", "Unmanaged buffer", "Raw buffer", "Simple buffer"],
    "options_hi": ["मैनेज्ड मेमोरी वाला बफर", "अनमैनेज्ड बफर", "रॉ बफर", "सिंपल बफर"],
    "answer_en": "Buffer with managed memory",
    "answer_hi": "मैनेज्ड मेमोरी वाला बफर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method shuffles array in-place?",
    "question_hi": "कौन सी मेथड ऐरे को इन-प्लेस शफल करती है?",
    "options_en": ["shuffle()", "shuffled()", "randomize()", "mix()"],
    "options_hi": ["shuffle()", "shuffled()", "randomize()", "mix()"],
    "answer_en": "shuffle()",
    "answer_hi": "shuffle()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does '@_transparent' attribute force?",
    "question_hi": "'@_transparent' एट्रिब्यूट क्या फोर्स करता है?",
    "options_en": ["Mandatory inlining", "Optional inlining", "No inlining", "Conditional inlining"],
    "options_hi": ["मैंडेटरी इनलाइनिंग", "ऑप्शनल इनलाइनिंग", "कोई इनलाइनिंग नहीं", "कंडीशनल इनलाइनिंग"],
    "answer_en": "Mandatory inlining",
    "answer_hi": "मैंडेटरी इनलाइनिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'ExpressibleByColorLiteral' protocol?",
    "question_hi": "'ExpressibleByColorLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Color literal creation", "Image creation", "Graphics creation", "UI creation"],
    "options_hi": ["कलर लिटरल क्रिएशन", "इमेज क्रिएशन", "ग्राफिक्स क्रिएशन", "UI क्रिएशन"],
    "answer_en": "Color literal creation",
    "answer_hi": "कलर लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method returns elements except last n?",
    "question_hi": "कौन सी मेथड लास्ट n के अलावा एलिमेंट्स रिटर्न करती है?",
    "options_en": ["dropLast(_:)", "skipLast()", "exceptLast()", "removeLastN()"],
    "options_hi": ["dropLast(_:)", "skipLast()", "exceptLast()", "removeLastN()"],
    "answer_en": "dropLast(_:)",
    "answer_hi": "dropLast(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does '@_silgen_name' specify for C functions?",
    "question_hi": "C फंक्शंस के लिए '@_silgen_name' क्या स्पेसिफाई करता है?",
    "options_en": ["C function name", "Swift function name", "Objective-C selector", "Export name"],
    "options_hi": ["C फंक्शन नाम", "Swift फंक्शन नाम", "Objective-C सेलेक्टर", "एक्सपोर्ट नाम"],
    "answer_en": "C function name",
    "answer_hi": "C फंक्शन नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'AnyIndex' type used for?",
    "question_hi": "'AnyIndex' टाइप का उपयोग किस लिए किया जाता है?",
    "options_en": ["Type-erased collection index", "Any index type", "Specific index", "Generic index"],
    "options_hi": ["टाइप-इरेज़्ड कलेक्शन इंडेक्स", "कोई इंडेक्स टाइप", "स्पेसिफिक इंडेक्स", "जेनेरिक इंडेक्स"],
    "answer_en": "Type-erased collection index",
    "answer_hi": "टाइप-इरेज़्ड कलेक्शन इंडेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method returns elements satisfying predicate as array?",
    "question_hi": "कौन सी मेथड प्रिडिकेट को सैटिस्फाई करने वाले एलिमेंट्स को ऐरे के रूप में रिटर्न करती है?",
    "options_en": ["filter(_:)", "where(_:)", "select(_:)", "findAll(_:)"],
    "options_hi": ["filter(_:)", "where(_:)", "select(_:)", "findAll(_:)"],
    "answer_en": "filter(_:)",
    "answer_hi": "filter(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does '@_inheritsConvenienceInitializers' attribute do?",
    "question_hi": "'@_inheritsConvenienceInitializers' एट्रिब्यूट क्या करता है?",
    "options_en": ["Inherits convenience initializers", "Prevents inheritance", "Creates new initializers", "Removes initializers"],
    "options_hi": ["कन्वीनियंस इनिशियलाइज़र्स इनहेरिट करता है", "इनहेरिटेंस प्रिवेंट करता है", "नए इनिशियलाइज़र्स क्रिएट करता है", "इनिशियलाइज़र्स रिमूव करता है"],
    "answer_en": "Inherits convenience initializers",
    "answer_hi": "कन्वीनियंस इनिशियलाइज़र्स इनहेरिट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'ExpressibleByImageLiteral' protocol?",
    "question_hi": "'ExpressibleByImageLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Image literal creation", "Color creation", "Graphics creation", "Media creation"],
    "options_hi": ["इमेज लिटरल क्रिएशन", "कलर क्रिएशन", "ग्राफिक्स क्रिएशन", "मीडिया क्रिएशन"],
    "answer_en": "Image literal creation",
    "answer_hi": "इमेज लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method returns elements up to but excluding index?",
    "question_hi": "कौन सी मेथड एलिमेंट्स को इंडेक्स तक लेकिन एक्सक्लूडिंग रिटर्न करती है?",
    "options_en": ["prefix(upTo:)", "upTo()", "before()", "until()"],
    "options_hi": ["prefix(upTo:)", "upTo()", "before()", "until()"],
    "answer_en": "prefix(upTo:)",
    "answer_hi": "prefix(upTo:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does '@_nonEphemeral' attribute indicate?",
    "question_hi": "'@_nonEphemeral' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["Parameter is not ephemeral", "Parameter is ephemeral", "Temporary parameter", "Permanent parameter"],
    "options_hi": ["पैरामीटर एफीमेरल नहीं है", "पैरामीटर एफीमेरल है", "टेम्पररी पैरामीटर", "पर्मानेंट पैरामीटर"],
    "answer_en": "Parameter is not ephemeral",
    "answer_hi": "पैरामीटर एफीमेरल नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'ExpressibleByFileReferenceLiteral' protocol?",
    "question_hi": "'ExpressibleByFileReferenceLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["File reference literal creation", "File creation", "Path creation", "URL creation"],
    "options_hi": ["फाइल रेफरेंस लिटरल क्रिएशन", "फाइल क्रिएशन", "पाथ क्रिएशन", "URL क्रिएशन"],
    "answer_en": "File reference literal creation",
    "answer_hi": "फाइल रेफरेंस लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method returns elements through index?",
    "question_hi": "कौन सी मेथड एलिमेंट्स को इंडेक्स के माध्यम से रिटर्न करती है?",
    "options_en": ["prefix(through:)", "through()", "including()", "upThrough()"],
    "options_hi": ["prefix(through:)", "through()", "including()", "upThrough()"],
    "answer_en": "prefix(through:)",
    "answer_hi": "prefix(through:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does '@_marker' attribute indicate?",
    "question_hi": "'@_marker' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["Marker protocol", "Marked type", "Special type", "Annotated type"],
    "options_hi": ["मार्कर प्रोटोकॉल", "मार्क्ड टाइप", "स्पेशल टाइप", "एनोटेटेड टाइप"],
    "answer_en": "Marker protocol",
    "answer_hi": "मार्कर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'ExpressibleByNilLiteral' protocol's purpose?",
    "question_hi": "'ExpressibleByNilLiteral' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["Allows nil literal initialization", "Prevents nil", "Requires nil", "Optional nil"],
    "options_hi": ["निल लिटरल इनिशियलाइज़ेशन अलाउ करता है", "निल प्रिवेंट करता है", "निल रिक्वायर करता है", "ऑप्शनल निल"],
    "answer_en": "Allows nil literal initialization",
    "answer_hi": "निल लिटरल इनिशियलाइज़ेशन अलाउ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method returns elements from index?",
    "question_hi": "कौन सी मेथड इंडेक्स से एलिमेंट्स रिटर्न करती है?",
    "options_en": ["suffix(from:)", "from()", "startingAt()", "beginningAt()"],
    "options_hi": ["suffix(from:)", "from()", "startingAt()", "beginningAt()"],
    "answer_en": "suffix(from:)",
    "answer_hi": "suffix(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@_implicitlyUnwrappedOptional' attribute do?",
    "question_hi": "'@_implicitlyUnwrappedOptional' एट्रिब्यूट क्या करता है?",
    "options_en": ["Creates implicitly unwrapped optional", "Creates regular optional", "Removes optional", "Forces unwrapping"],
    "options_hi": ["इम्प्लिसिटली अनरैप्ड ऑप्शनल क्रिएट करता है", "रेगुलर ऑप्शनल क्रिएट करता है", "ऑप्शनल रिमूव करता है", "फोर्स अनरैपिंग"],
    "answer_en": "Creates implicitly unwrapped optional",
    "answer_hi": "इम्प्लिसिटली अनरैप्ड ऑप्शनल क्रिएट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'ExpressibleByDictionaryLiteral' protocol's use?",
    "question_hi": "'ExpressibleByDictionaryLiteral' प्रोटोकॉल का उपयोग क्या है?",
    "options_en": ["Dictionary literal initialization", "Array initialization", "Set initialization", "Tuple initialization"],
    "options_hi": ["डिक्शनरी लिटरल इनिशियलाइज़ेशन", "ऐरे इनिशियलाइज़ेशन", "सेट इनिशियलाइज़ेशन", "ट्यूपल इनिशियलाइज़ेशन"],
    "answer_en": "Dictionary literal initialization",
    "answer_hi": "डिक्शनरी लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which method returns random element using generator?",
    "question_hi": "कौन सी मेथड जनरेटर यूज़ करके रैंडम एलिमेंट रिटर्न करती है?",
    "options_en": ["randomElement(using:)", "randomWith()", "elementRandom()", "pickRandom()"],
    "options_hi": ["randomElement(using:)", "randomWith()", "elementRandom()", "pickRandom()"],
    "answer_en": "randomElement(using:)",
    "answer_hi": "randomElement(using:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does '@_fixed_layout' ensure?",
    "question_hi": "'@_fixed_layout' क्या एनश्योर करता है?",
    "options_en": ["Fixed memory layout", "Dynamic layout", "Changing layout", "Flexible layout"],
    "options_hi": ["फिक्स्ड मेमोरी लेआउट", "डायनामिक लेआउट", "चेंजिंग लेआउट", "फ्लेक्सिबल लेआउट"],
    "answer_en": "Fixed memory layout",
    "answer_hi": "फिक्स्ड मेमोरी लेआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'ExpressibleByArrayLiteral' protocol's function?",
    "question_hi": "'ExpressibleByArrayLiteral' प्रोटोकॉल का फंक्शन क्या है?",
    "options_en": ["Array literal initialization", "Dictionary initialization", "Set initialization", "Value initialization"],
    "options_hi": ["ऐरे लिटरल इनिशियलाइज़ेशन", "डिक्शनरी इनिशियलाइज़ेशन", "सेट इनिशियलाइज़ेशन", "वैल्यू इनिशियलाइज़ेशन"],
    "answer_en": "Array literal initialization",
    "answer_hi": "ऐरे लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which method shuffles using specific generator?",
    "question_hi": "कौन सी मेथड स्पेसिफिक जनरेटर यूज़ करके शफल करती है?",
    "options_en": ["shuffle(using:)", "shuffleWith()", "randomizeWith()", "mixWith()"],
    "options_hi": ["shuffle(using:)", "shuffleWith()", "randomizeWith()", "mixWith()"],
    "answer_en": "shuffle(using:)",
    "answer_hi": "shuffle(using:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does '@_hasMissingDesignatedInitializers' indicate?",
    "question_hi": "'@_hasMissingDesignatedInitializers' क्या इंडिकेट करता है?",
    "options_en": ["Missing designated initializers", "Has all initializers", "Extra initializers", "No initializers"],
    "options_hi": ["मिसिंग डिज़िग्नेटेड इनिशियलाइज़र्स", "सभी इनिशियलाइज़र्स हैं", "एक्स्ट्रा इनिशियलाइज़र्स", "कोई इनिशियलाइज़र्स नहीं"],
    "answer_en": "Missing designated initializers",
    "answer_hi": "मिसिंग डिज़िग्नेटेड इनिशियलाइज़र्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'ExpressibleByFloatLiteral' protocol's role?",
    "question_hi": "'ExpressibleByFloatLiteral' प्रोटोकॉल की भूमिका क्या है?",
    "options_en": ["Float literal initialization", "Integer initialization", "Decimal initialization", "Number initialization"],
    "options_hi": ["फ्लोट लिटरल इनिशियलाइज़ेशन", "इंटीजर इनिशियलाइज़ेशन", "डेसिमल इनिशियलाइज़ेशन", "नंबर इनिशियलाइज़ेशन"],
    "answer_en": "Float literal initialization",
    "answer_hi": "फ्लोट लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which method returns elements while predicate true?",
    "question_hi": "कौन सी मेथड एलिमेंट्स रिटर्न करती है जबकि प्रिडिकेट ट्रू है?",
    "options_en": ["prefix(while:)", "while()", "takeWhile()", "keepWhile()"],
    "options_hi": ["prefix(while:)", "while()", "takeWhile()", "keepWhile()"],
    "answer_en": "prefix(while:)",
    "answer_hi": "prefix(while:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does '@_hasStorage' attribute mean?",
    "question_hi": "'@_hasStorage' एट्रिब्यूट का क्या अर्थ है?",
    "options_en": ["Has storage allocation", "No storage", "Temporary storage", "Permanent storage"],
    "options_hi": ["स्टोरेज एलोकेशन है", "कोई स्टोरेज नहीं", "टेम्पररी स्टोरेज", "पर्मानेंट स्टोरेज"],
    "answer_en": "Has storage allocation",
    "answer_hi": "स्टोरेज एलोकेशन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'ExpressibleByIntegerLiteral' protocol's purpose?",
    "question_hi": "'ExpressibleByIntegerLiteral' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["Integer literal initialization", "Float initialization", "String initialization", "Boolean initialization"],
    "options_hi": ["इंटीजर लिटरल इनिशियलाइज़ेशन", "फ्लोट इनिशियलाइज़ेशन", "स्ट्रिंग इनिशियलाइज़ेशन", "बूलियन इनिशियलाइज़ेशन"],
    "answer_en": "Integer literal initialization",
    "answer_hi": "इंटीजर लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which method returns elements from end while predicate true?",
    "question_hi": "कौन सी मेथड एंड से एलिमेंट्स रिटर्न करती है जबकि प्रिडिकेट ट्रू है?",
    "options_en": ["suffix(while:)", "endWhile()", "takeEndWhile()", "keepEndWhile()"],
    "options_hi": ["suffix(while:)", "endWhile()", "takeEndWhile()", "keepEndWhile()"],
    "answer_en": "suffix(while:)",
    "answer_hi": "suffix(while:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_alignment' attribute specify?",
    "question_hi": "'@_alignment' एट्रिब्यूट क्या स्पेसिफाई करता है?",
    "options_en": ["Memory alignment", "Code alignment", "Data alignment", "Structure alignment"],
    "options_hi": ["मेमोरी अलाइनमेंट", "कोड अलाइनमेंट", "डेटा अलाइनमेंट", "स्ट्रक्चर अलाइनमेंट"],
    "answer_en": "Memory alignment",
    "answer_hi": "मेमोरी अलाइनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'ExpressibleByBooleanLiteral' protocol's use?",
    "question_hi": "'ExpressibleByBooleanLiteral' प्रोटोकॉल का उपयोग क्या है?",
    "options_en": ["Boolean literal initialization", "Integer initialization", "String initialization", "Float initialization"],
    "options_hi": ["बूलियन लिटरल इनिशियलाइज़ेशन", "इंटीजर इनिशियलाइज़ेशन", "स्ट्रिंग इनिशियलाइज़ेशन", "फ्लोट इनिशियलाइज़ेशन"],
    "answer_en": "Boolean literal initialization",
    "answer_hi": "बूलियन लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which method returns index of first matching element?",
    "question_hi": "कौन सी मेथड फर्स्ट मैचिंग एलिमेंट का इंडेक्स रिटर्न करती है?",
    "options_en": ["firstIndex(where:)", "indexOf()", "findIndex()", "locate()"],
    "options_hi": ["firstIndex(where:)", "indexOf()", "findIndex()", "locate()"],
    "answer_en": "firstIndex(where:)",
    "answer_hi": "firstIndex(where:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does '@_versioned' attribute indicate?",
    "question_hi": "'@_versioned' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["Versioned symbol", "Unversioned symbol", "Deprecated symbol", "New symbol"],
    "options_hi": ["वर्शन्ड सिंबल", "अनवर्शन्ड सिंबल", "डिप्रिकेटेड सिंबल", "न्यू सिंबल"],
    "answer_en": "Versioned symbol",
    "answer_hi": "वर्शन्ड सिंबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'ExpressibleByStringLiteral' protocol's function?",
    "question_hi": "'ExpressibleByStringLiteral' प्रोटोकॉल का फंक्शन क्या है?",
    "options_en": ["String literal initialization", "Character initialization", "Text initialization", "Word initialization"],
    "options_hi": ["स्ट्रिंग लिटरल इनिशियलाइज़ेशन", "कैरेक्टर इनिशियलाइज़ेशन", "टेक्स्ट इनिशियलाइज़ेशन", "वर्ड इनिशियलाइज़ेशन"],
    "answer_en": "String literal initialization",
    "answer_hi": "स्ट्रिंग लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which method returns index of last matching element?",
    "question_hi": "कौन सी मेथड लास्ट मैचिंग एलिमेंट का इंडेक्स रिटर्न करती है?",
    "options_en": ["lastIndex(where:)", "lastIndexOf()", "findLastIndex()", "locateLast()"],
    "options_hi": ["lastIndex(where:)", "lastIndexOf()", "findLastIndex()", "locateLast()"],
    "answer_en": "lastIndex(where:)",
    "answer_hi": "lastIndex(where:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does '@_specialize(where T == Int)' do?",
    "question_hi": "'@_specialize(where T == Int)' क्या करता है?",
    "options_en": ["Specializes for Int type", "Generalizes for all types", "Removes specialization", "Adds constraints"],
    "options_hi": ["Int टाइप के लिए स्पेशलाइज़ करता है", "सभी टाइप्स के लिए जनरलाइज़ करता है", "स्पेशलाइज़ेशन रिमूव करता है", "कंस्ट्रेंट्स ऐड करता है"],
    "answer_en": "Specializes for Int type",
    "answer_hi": "Int टाइप के लिए स्पेशलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'ExpressibleByExtendedGraphemeClusterLiteral' protocol?",
    "question_hi": "'ExpressibleByExtendedGraphemeClusterLiteral' प्रोटोकॉल क्या है?",
    "options_en": ["Extended grapheme cluster literal initialization", "Basic string initialization", "Character initialization", "Unicode initialization"],
    "options_hi": ["एक्सटेंडेड ग्राफीम क्लस्टर लिटरल इनिशियलाइज़ेशन", "बेसिक स्ट्रिंग इनिशियलाइज़ेशन", "कैरेक्टर इनिशियलाइज़ेशन", "यूनिकोड इनिशियलाइज़ेशन"],
    "answer_en": "Extended grapheme cluster literal initialization",
    "answer_hi": "एक्सटेंडेड ग्राफीम क्लस्टर लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which method returns random index?",
    "question_hi": "कौन सी मेथड रैंडम इंडेक्स रिटर्न करती है?",
    "options_en": ["randomIndex()", "indexRandom()", "anyIndex()", "pickRandomIndex()"],
    "options_hi": ["randomIndex()", "indexRandom()", "anyIndex()", "pickRandomIndex()"],
    "answer_en": "randomIndex()",
    "answer_hi": "randomIndex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does '@_semantics(\"array.\")' specify?",
    "question_hi": "'@_semantics(\"array.\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array operation semantics", "String semantics", "Number semantics", "Generic semantics"],
    "options_hi": ["ऐरे ऑपरेशन सेमेन्टिक्स", "स्ट्रिंग सेमेन्टिक्स", "नंबर सेमेन्टिक्स", "जेनेरिक सेमेन्टिक्स"],
    "answer_en": "Array operation semantics",
    "answer_hi": "ऐरे ऑपरेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'ExpressibleByUnicodeScalarLiteral' protocol's role?",
    "question_hi": "'ExpressibleByUnicodeScalarLiteral' प्रोटोकॉल की भूमिका क्या है?",
    "options_en": ["Unicode scalar literal initialization", "String initialization", "Character initialization", "UTF-8 initialization"],
    "options_hi": ["यूनिकोड स्केलर लिटरल इनिशियलाइज़ेशन", "स्ट्रिंग इनिशियलाइज़ेशन", "कैरेक्टर इनिशियलाइज़ेशन", "UTF-8 इनिशियलाइज़ेशन"],
    "answer_en": "Unicode scalar literal initialization",
    "answer_hi": "यूनिकोड स्केलर लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which method returns first non-nil result of transform?",
    "question_hi": "कौन सी मेथड ट्रांसफॉर्म का फर्स्ट नॉन-निल रिजल्ट रिटर्न करती है?",
    "options_en": ["firstNonNil(_:)", "firstCompactMap(_:)", "compactFirst()", "mapFirstNonNil()"],
    "options_hi": ["firstNonNil(_:)", "firstCompactMap(_:)", "compactFirst()", "mapFirstNonNil()"],
    "answer_en": "firstNonNil(_:)",
    "answer_hi": "firstNonNil(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_semantics(\"string.\")' indicate?",
    "question_hi": "'@_semantics(\"string.\")' क्या इंडिकेट करता है?",
    "options_en": ["String operation semantics", "Array semantics", "Number semantics", "Boolean semantics"],
    "options_hi": ["स्ट्रिंग ऑपरेशन सेमेन्टिक्स", "ऐरे सेमेन्टिक्स", "नंबर सेमेन्टिक्स", "बूलियन सेमेन्टिक्स"],
    "answer_en": "String operation semantics",
    "answer_hi": "स्ट्रिंग ऑपरेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'ExpressibleByStringInterpolation' protocol's purpose?",
    "question_hi": "'ExpressibleByStringInterpolation' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["String interpolation initialization", "Basic string initialization", "Formatted string initialization", "Template string initialization"],
    "options_hi": ["स्ट्रिंग इंटरपोलेशन इनिशियलाइज़ेशन", "बेसिक स्ट्रिंग इनिशियलाइज़ेशन", "फॉर्मेटेड स्ट्रिंग इनिशियलाइज़ेशन", "टेम्पलेट स्ट्रिंग इनिशियलाइज़ेशन"],
    "answer_en": "String interpolation initialization",
    "answer_hi": "स्ट्रिंग इंटरपोलेशन इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which method returns elements except first while predicate true?",
    "question_hi": "कौन सी मेथड एलिमेंट्स रिटर्न करती है फर्स्ट के अलावा जबकि प्रिडिकेट ट्रू है?",
    "options_en": ["drop(while:)", "skipWhile()", "omitWhile()", "removeWhile()"],
    "options_hi": ["drop(while:)", "skipWhile()", "omitWhile()", "removeWhile()"],
    "answer_en": "drop(while:)",
    "answer_hi": "drop(while:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does '@_semantics(\"optimize.sil.\")' do?",
    "question_hi": "'@_semantics(\"optimize.sil.\")' क्या करता है?",
    "options_en": ["SIL optimization hints", "Runtime optimization", "Compiler flags", "Code generation"],
    "options_hi": ["SIL ऑप्टिमाइज़ेशन हिंट्स", "रनटाइम ऑप्टिमाइज़ेशन", "कंपाइलर फ्लैग्स", "कोड जनरेशन"],
    "answer_en": "SIL optimization hints",
    "answer_hi": "SIL ऑप्टिमाइज़ेशन हिंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'ExpressibleByColorLiteral' protocol's use?",
    "question_hi": "'ExpressibleByColorLiteral' प्रोटोकॉल का उपयोग क्या है?",
    "options_en": ["Color literal initialization", "Image initialization", "Graphics initialization", "UI initialization"],
    "options_hi": ["कलर लिटरल इनिशियलाइज़ेशन", "इमेज इनिशियलाइज़ेशन", "ग्राफिक्स इनिशियलाइज़ेशन", "UI इनिशियलाइज़ेशन"],
    "answer_en": "Color literal initialization",
    "answer_hi": "कलर लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which method returns elements until predicate false?",
    "question_hi": "कौन सी मेथड एलिमेंट्स रिटर्न करती है जब तक प्रिडिकेट फॉल्स है?",
    "options_en": ["prefix(while:)", "until()", "takeUntil()", "keepUntil()"],
    "options_hi": ["prefix(while:)", "until()", "takeUntil()", "keepUntil()"],
    "answer_en": "prefix(while:)",
    "answer_hi": "prefix(while:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does '@_semantics(\"arc.\")' specify?",
    "question_hi": "'@_semantics(\"arc.\")' क्या स्पेसिफाई करता है?",
    "options_en": ["ARC operation semantics", "Memory semantics", "Reference semantics", "Allocation semantics"],
    "options_hi": ["ARC ऑपरेशन सेमेन्टिक्स", "मेमोरी सेमेन्टिक्स", "रेफरेंस सेमेन्टिक्स", "एलोकेशन सेमेन्टिक्स"],
    "answer_en": "ARC operation semantics",
    "answer_hi": "ARC ऑपरेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'ExpressibleByImageLiteral' protocol's function?",
    "question_hi": "'ExpressibleByImageLiteral' प्रोटोकॉल का फंक्शन क्या है?",
    "options_en": ["Image literal initialization", "Color initialization", "Graphics initialization", "Media initialization"],
    "options_hi": ["इमेज लिटरल इनिशियलाइज़ेशन", "कलर इनिशियलाइज़ेशन", "ग्राफिक्स इनिशियलाइज़ेशन", "मीडिया इनिशियलाइज़ेशन"],
    "answer_en": "Image literal initialization",
    "answer_hi": "इमेज लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which method returns elements from end until predicate false?",
    "question_hi": "कौन सी मेथड एंड से एलिमेंट्स रिटर्न करती है जब तक प्रिडिकेट फॉल्स है?",
    "options_en": ["suffix(while:)", "endUntil()", "takeEndUntil()", "keepEndUntil()"],
    "options_hi": ["suffix(while:)", "endUntil()", "takeEndUntil()", "keepEndUntil()"],
    "answer_en": "suffix(while:)",
    "answer_hi": "suffix(while:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does '@_semantics(\"typechecker.\")' indicate?",
    "question_hi": "'@_semantics(\"typechecker.\")' क्या इंडिकेट करता है?",
    "options_en": ["Type checker semantics", "Runtime semantics", "Compiler semantics", "Codegen semantics"],
    "options_hi": ["टाइप चेकर सेमेन्टिक्स", "रनटाइम सेमेन्टिक्स", "कंपाइलर सेमेन्टिक्स", "कोडजन सेमेन्टिक्स"],
    "answer_en": "Type checker semantics",
    "answer_hi": "टाइप चेकर सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'ExpressibleByFileReferenceLiteral' protocol's purpose?",
    "question_hi": "'ExpressibleByFileReferenceLiteral' प्रोटोकॉल का उद्देश्य क्या है?",
    "options_en": ["File reference literal initialization", "File initialization", "Path initialization", "URL initialization"],
    "options_hi": ["फाइल रेफरेंस लिटरल इनिशियलाइज़ेशन", "फाइल इनिशियलाइज़ेशन", "पाथ इनिशियलाइज़ेशन", "URL इनिशियलाइज़ेशन"],
    "answer_en": "File reference literal initialization",
    "answer_hi": "फाइल रेफरेंस लिटरल इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which method returns random slice?",
    "question_hi": "कौन सी मेथड रैंडम स्लाइस रिटर्न करती है?",
    "options_en": ["randomSlice()", "sliceRandom()", "anySlice()", "pickRandomSlice()"],
    "options_hi": ["randomSlice()", "sliceRandom()", "anySlice()", "pickRandomSlice()"],
    "answer_en": "randomSlice()",
    "answer_hi": "randomSlice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_semantics(\"stdlib.\")' specify?",
    "question_hi": "'@_semantics(\"stdlib.\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Standard library semantics", "Runtime library semantics", "Core library semantics", "Foundation semantics"],
    "options_hi": ["स्टैंडर्ड लाइब्रेरी सेमेन्टिक्स", "रनटाइम लाइब्रेरी सेमेन्टिक्स", "कोर लाइब्रेरी सेमेन्टिक्स", "फाउंडेशन सेमेन्टिक्स"],
    "answer_en": "Standard library semantics",
    "answer_hi": "स्टैंडर्ड लाइब्रेरी सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'ExpressibleByColorLiteral' protocol's role?",
    "question_hi": "'ExpressibleByColorLiteral' प्रोटोकॉल की भूमिका क्या है?",
    "options_en": ["Color literal creation in playgrounds", "Runtime color creation", "UI color creation", "Graphics color creation"],
    "options_hi": ["प्लेग्राउंड में कलर लिटरल क्रिएशन", "रनटाइम कलर क्रिएशन", "UI कलर क्रिएशन", "ग्राफिक्स कलर क्रिएशन"],
    "answer_en": "Color literal creation in playgrounds",
    "answer_hi": "प्लेग्राउंड में कलर लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which method returns random subrange?",
    "question_hi": "कौन सी मेथड रैंडम सबरेंज रिटर्न करती है?",
    "options_en": ["randomSubrange()", "subrangeRandom()", "anySubrange()", "pickRandomSubrange()"],
    "options_hi": ["randomSubrange()", "subrangeRandom()", "anySubrange()", "pickRandomSubrange()"],
    "answer_en": "randomSubrange()",
    "answer_hi": "randomSubrange()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does '@_semantics(\"constexpr.\")' indicate?",
    "question_hi": "'@_semantics(\"constexpr.\")' क्या इंडिकेट करता है?",
    "options_en": ["Constant expression semantics", "Variable expression", "Runtime expression", "Dynamic expression"],
    "options_hi": ["कॉन्स्टेंट एक्सप्रेशन सेमेन्टिक्स", "वेरिएबल एक्सप्रेशन", "रनटाइम एक्सप्रेशन", "डायनामिक एक्सप्रेशन"],
    "answer_en": "Constant expression semantics",
    "answer_hi": "कॉन्स्टेंट एक्सप्रेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'ExpressibleByImageLiteral' protocol's use case?",
    "question_hi": "'ExpressibleByImageLiteral' प्रोटोकॉल का यूज़ केस क्या है?",
    "options_en": ["Image literal creation in playgrounds", "Runtime image creation", "UI image creation", "Graphics image creation"],
    "options_hi": ["प्लेग्राउंड में इमेज लिटरल क्रिएशन", "रनटाइम इमेज क्रिएशन", "UI इमेज क्रिएशन", "ग्राफिक्स इमेज क्रिएशन"],
    "answer_en": "Image literal creation in playgrounds",
    "answer_hi": "प्लेग्राउंड में इमेज लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which method returns random element with weight?",
    "question_hi": "कौन सी मेथड वेट के साथ रैंडम एलिमेंट रिटर्न करती है?",
    "options_en": ["randomElement(weightedBy:)", "weightedRandom()", "randomWeighted()", "pickWeighted()"],
    "options_hi": ["randomElement(weightedBy:)", "weightedRandom()", "randomWeighted()", "pickWeighted()"],
    "answer_en": "randomElement(weightedBy:)",
    "answer_hi": "randomElement(weightedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What does '@_semantics(\"inline.\")' specify?",
    "question_hi": "'@_semantics(\"inline.\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Inline function semantics", "Outline semantics", "Module semantics", "File semantics"],
    "options_hi": ["इनलाइन फंक्शन सेमेन्टिक्स", "आउटलाइन सेमेन्टिक्स", "मॉड्यूल सेमेन्टिक्स", "फाइल सेमेन्टिक्स"],
    "answer_en": "Inline function semantics",
    "answer_hi": "इनलाइन फंक्शन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'ExpressibleByFileReferenceLiteral' protocol's function?",
    "question_hi": "'ExpressibleByFileReferenceLiteral' प्रोटोकॉल का फंक्शन क्या है?",
    "options_en": ["File reference literal creation in playgrounds", "Runtime file creation", "File system creation", "URL creation"],
    "options_hi": ["प्लेग्राउंड में फाइल रेफरेंस लिटरल क्रिएशन", "रनटाइम फाइल क्रिएशन", "फाइल सिस्टम क्रिएशन", "URL क्रिएशन"],
    "answer_en": "File reference literal creation in playgrounds",
    "answer_hi": "प्लेग्राउंड में फाइल रेफरेंस लिटरल क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which method returns random index with weight?",
    "question_hi": "कौन सी मेथड वेट के साथ रैंडम इंडेक्स रिटर्न करती है?",
    "options_en": ["randomIndex(weightedBy:)", "weightedIndex()", "indexWeighted()", "pickWeightedIndex()"],
    "options_hi": ["randomIndex(weightedBy:)", "weightedIndex()", "indexWeighted()", "pickWeightedIndex()"],
    "answer_en": "randomIndex(weightedBy:)",
    "answer_hi": "randomIndex(weightedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does '@_semantics(\"accessor.\")' indicate?",
    "question_hi": "'@_semantics(\"accessor.\")' क्या इंडिकेट करता है?",
    "options_en": ["Accessor method semantics", "Mutator semantics", "Getter semantics", "Setter semantics"],
    "options_hi": ["एक्सेसर मेथड सेमेन्टिक्स", "म्यूटेटर सेमेन्टिक्स", "गेटर सेमेन्टिक्स", "सेटर सेमेन्टिक्स"],
    "answer_en": "Accessor method semantics",
    "answer_hi": "एक्सेसर मेथड सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'ExpressibleByColorLiteral' protocol's implementation?",
    "question_hi": "'ExpressibleByColorLiteral' प्रोटोकॉल का इम्प्लीमेंटेशन क्या है?",
    "options_en": ["Playground color literal support", "Runtime color support", "UI color support", "System color support"],
    "options_hi": ["प्लेग्राउंड कलर लिटरल सपोर्ट", "रनटाइम कलर सपोर्ट", "UI कलर सपोर्ट", "सिस्टम कलर सपोर्ट"],
    "answer_en": "Playground color literal support",
    "answer_hi": "प्लेग्राउंड कलर लिटरल सपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which method returns random slice with weight?",
    "question_hi": "कौन सी मेथड वेट के साथ रैंडम स्लाइस रिटर्न करती है?",
    "options_en": ["randomSlice(weightedBy:)", "weightedSlice()", "sliceWeighted()", "pickWeightedSlice()"],
    "options_hi": ["randomSlice(weightedBy:)", "weightedSlice()", "sliceWeighted()", "pickWeightedSlice()"],
    "answer_en": "randomSlice(weightedBy:)",
    "answer_hi": "randomSlice(weightedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_semantics(\"materializeForSet.\")' do?",
    "question_hi": "'@_semantics(\"materializeForSet.\")' क्या करता है?",
    "options_en": ["Materialize for setter semantics", "Getter semantics", "Accessor semantics", "Mutator semantics"],
    "options_hi": ["सेटर के लिए मैटीरियलाइज़ सेमेन्टिक्स", "गेटर सेमेन्टिक्स", "एक्सेसर सेमेन्टिक्स", "म्यूटेटर सेमेन्टिक्स"],
    "answer_en": "Materialize for setter semantics",
    "answer_hi": "सेटर के लिए मैटीरियलाइज़ सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'ExpressibleByImageLiteral' protocol's playground support?",
    "question_hi": "'ExpressibleByImageLiteral' प्रोटोकॉल का प्लेग्राउंड सपोर्ट क्या है?",
    "options_en": ["Playground image literal visualization", "Runtime image display", "UI image display", "Graphics image display"],
    "options_hi": ["प्लेग्राउंड इमेज लिटरल विज़ुअलाइज़ेशन", "रनटाइम इमेज डिस्प्ले", "UI इमेज डिस्प्ले", "ग्राफिक्स इमेज डिस्प्ले"],
    "answer_en": "Playground image literal visualization",
    "answer_hi": "प्लेग्राउंड इमेज लिटरल विज़ुअलाइज़ेशन",
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