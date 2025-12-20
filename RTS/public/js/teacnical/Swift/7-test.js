const questions = [
  {
    "num": 1,
    "question_en": "Which method is used to create a custom attribute for property wrappers in Swift?",
    "question_hi": "Swift में प्रॉपर्टी रैपर्स के लिए कस्टम एट्रिब्यूट बनाने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["static subscript", "dynamicMemberLookup", "propertyWrapper", "wrappedValue"],
    "options_hi": ["static subscript", "dynamicMemberLookup", "propertyWrapper", "wrappedValue"],
    "answer_en": "static subscript",
    "answer_hi": "static subscript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the purpose of '_read' accessor in Swift computed properties?",
    "question_hi": "Swift कंप्यूटेड प्रॉपर्टीज में '_read' एक्सेसर का उद्देश्य क्या है?",
    "options_en": ["Custom read-only projection", "Write access", "Async reading", "Thread-safe reading"],
    "options_hi": ["कस्टम रीड-ओनली प्रोजेक्शन", "राइट एक्सेस", "एसिंक रीडिंग", "थ्रेड-सेफ रीडिंग"],
    "answer_en": "Custom read-only projection",
    "answer_hi": "कस्टम रीड-ओनली प्रोजेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which protocol enables custom decoding of single values from JSON in Swift?",
    "question_hi": "Swift में JSON से सिंगल वैल्यूज के कस्टम डिकोडिंग को एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["SingleValueDecodingContainer", "Decodable", "JSONDecoder", "ValueDecodable"],
    "options_hi": ["SingleValueDecodingContainer", "Decodable", "JSONDecoder", "ValueDecodable"],
    "answer_en": "SingleValueDecodingContainer",
    "answer_hi": "SingleValueDecodingContainer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'nonmutating set' accessor indicate in Swift?",
    "question_hi": "Swift में 'nonmutating set' एक्सेसर क्या इंडिकेट करता है?",
    "options_en": ["Setter doesn't mutate instance", "Setter is immutable", "Read-only property", "Constant property"],
    "options_hi": ["सेटर इंस्टेंस को म्यूटेट नहीं करता", "सेटर इम्यूटेबल है", "रीड-ओनली प्रॉपर्टी", "कॉन्स्टेंट प्रॉपर्टी"],
    "answer_en": "Setter doesn't mutate instance",
    "answer_hi": "सेटर इंस्टेंस को म्यूटेट नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method creates a type-erased sequence in Swift?",
    "question_hi": "Swift में टाइप-इरेज़्ड सीक्वेंस बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnySequence", "eraseToAnySequence()", "typeErased()", "Sequence.erase()"],
    "options_hi": ["AnySequence", "eraseToAnySequence()", "typeErased()", "Sequence.erase()"],
    "answer_en": "AnySequence",
    "answer_hi": "AnySequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of '@_implicitSelfCapture' attribute in Swift closures?",
    "question_hi": "Swift क्लोजर्स में '@_implicitSelfCapture' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Control implicit self capture behavior", "Force self capture", "Prevent capture", "Async capture"],
    "options_hi": ["इम्प्लिसिट सेल्फ कैप्चर बिहेवियर कंट्रोल करना", "फोर्स सेल्फ कैप्चर", "कैप्चर प्रिवेंट करना", "एसिंक कैप्चर"],
    "answer_en": "Control implicit self capture behavior",
    "answer_hi": "इम्प्लिसिट सेल्फ कैप्चर बिहेवियर कंट्रोल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which protocol provides custom encoding for single values in Swift?",
    "question_hi": "Swift में सिंगल वैल्यूज के लिए कस्टम एनकोडिंग प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["SingleValueEncodingContainer", "Encodable", "JSONEncoder", "ValueEncodable"],
    "options_hi": ["SingleValueEncodingContainer", "Encodable", "JSONEncoder", "ValueEncodable"],
    "answer_en": "SingleValueEncodingContainer",
    "answer_hi": "SingleValueEncodingContainer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'consuming' method parameter convention do in Swift?",
    "question_hi": "Swift में 'consuming' मेथड पैरामीटर कन्वेंशन क्या करता है?",
    "options_en": ["Consumes ownership of parameter", "Borrows parameter", "Copies parameter", "References parameter"],
    "options_hi": ["पैरामीटर की ओनरशिप कंज्यूम करता है", "पैरामीटर उधार लेता है", "पैरामीटर कॉपी करता है", "पैरामीटर रेफर करता है"],
    "answer_en": "Consumes ownership of parameter",
    "answer_hi": "पैरामीटर की ओनरशिप कंज्यूम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method creates a heterogeneous array literal in Swift?",
    "question_hi": "Swift में हेटेरोजीनियस ऐरे लिटरल बनाने वाली मेथड कौन सी है?",
    "options_en": ["ArrayLiteralElement", "ExpressibleByArrayLiteral", "HeterogeneousArray", "MixedArray"],
    "options_hi": ["ArrayLiteralElement", "ExpressibleByArrayLiteral", "HeterogeneousArray", "MixedArray"],
    "answer_en": "ExpressibleByArrayLiteral",
    "answer_hi": "ExpressibleByArrayLiteral",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of '@_inheritActorContext' attribute in Swift?",
    "question_hi": "Swift में '@_inheritActorContext' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Inherits actor context for async functions", "Creates new context", "Ignores context", "Changes context"],
    "options_hi": ["एसिंक फंक्शन्स के लिए ऐक्टर कॉन्टेक्स्ट इनहेरिट करता है", "नया कॉन्टेक्स्ट क्रिएट करता है", "कॉन्टेक्स्ट इग्नोर करता है", "कॉन्टेक्स्ट चेंज करता है"],
    "answer_en": "Inherits actor context for async functions",
    "answer_hi": "एसिंक फंक्शन्स के लिए ऐक्टर कॉन्टेक्स्ट इनहेरिट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which protocol enables custom keyed encoding containers in Swift?",
    "question_hi": "Swift में कस्टम कीड एनकोडिंग कंटेनर्स एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["KeyedEncodingContainerProtocol", "Encodable", "KeyedContainer", "EncodingContainer"],
    "options_hi": ["KeyedEncodingContainerProtocol", "Encodable", "KeyedContainer", "EncodingContainer"],
    "answer_en": "KeyedEncodingContainerProtocol",
    "answer_hi": "KeyedEncodingContainerProtocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does '@_alwaysEmitConformanceMetadata' attribute ensure?",
    "question_hi": "'@_alwaysEmitConformanceMetadata' एट्रिब्यूट क्या एनश्योर करता है?",
    "options_en": ["Protocol conformance metadata always emitted", "Optional emission", "Never emitted", "Conditional emission"],
    "options_hi": ["प्रोटोकॉल कन्फॉर्मेंस मेटाडेटा हमेशा एमिट होता है", "ऑप्शनल एमिशन", "कभी एमिट नहीं होता", "कंडीशनल एमिशन"],
    "answer_en": "Protocol conformance metadata always emitted",
    "answer_hi": "प्रोटोकॉल कन्फॉर्मेंस मेटाडेटा हमेशा एमिट होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method creates a type-erased collection in Swift?",
    "question_hi": "Swift में टाइप-इरेज़्ड कलेक्शन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyCollection", "eraseToAnyCollection()", "typeEraseCollection()", "Collection.erase()"],
    "options_hi": ["AnyCollection", "eraseToAnyCollection()", "typeEraseCollection()", "Collection.erase()"],
    "answer_en": "AnyCollection",
    "answer_hi": "AnyCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of '_modify' accessor in Swift properties?",
    "question_hi": "Swift प्रॉपर्टीज में '_modify' एक्सेसर का उद्देश्य क्या है?",
    "options_en": ["In-place mutation access", "Read access", "Copy access", "Async access"],
    "options_hi": ["इन-प्लेस म्यूटेशन एक्सेस", "रीड एक्सेस", "कॉपी एक्सेस", "एसिंक एक्सेस"],
    "answer_en": "In-place mutation access",
    "answer_hi": "इन-प्लेस म्यूटेशन एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which protocol provides custom unkeyed decoding in Swift?",
    "question_hi": "Swift में कस्टम अनकीड डिकोडिंग प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["UnkeyedDecodingContainer", "Decodable", "UnkeyedContainer", "ArrayDecodable"],
    "options_hi": ["UnkeyedDecodingContainer", "Decodable", "UnkeyedContainer", "ArrayDecodable"],
    "answer_en": "UnkeyedDecodingContainer",
    "answer_hi": "UnkeyedDecodingContainer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does '@_hasInitialValue' indicate for property wrappers?",
    "question_hi": "प्रॉपर्टी रैपर्स के लिए '@_hasInitialValue' क्या इंडिकेट करता है?",
    "options_en": ["Wrapper has initial value", "No initial value", "Optional value", "Default value"],
    "options_hi": ["रैपर में इनिशियल वैल्यू है", "कोई इनिशियल वैल्यू नहीं", "ऑप्शनल वैल्यू", "डिफ़ॉल्ट वैल्यू"],
    "answer_en": "Wrapper has initial value",
    "answer_hi": "रैपर में इनिशियल वैल्यू है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method creates a bidirectional type-erased collection?",
    "question_hi": "बायडायरेक्शनल टाइप-इरेज़्ड कलेक्शन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyBidirectionalCollection", "eraseToBidirectional()", "BidirectionalCollection.erase()", "AnyCollection"],
    "options_hi": ["AnyBidirectionalCollection", "eraseToBidirectional()", "BidirectionalCollection.erase()", "AnyCollection"],
    "answer_en": "AnyBidirectionalCollection",
    "answer_hi": "AnyBidirectionalCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of '@_nonEphemeral' attribute on pointer parameters?",
    "question_hi": "पॉइंटर पैरामीटर्स पर '@_nonEphemeral' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Prevents temporary pointer conversion", "Allows ephemeral pointers", "Creates pointers", "Destroys pointers"],
    "options_hi": ["टेम्पररी पॉइंटर कन्वर्जन प्रिवेंट करता है", "एफीमेरल पॉइंटर्स अलाउ करता है", "पॉइंटर्स क्रिएट करता है", "पॉइंटर्स डिस्ट्रॉय करता है"],
    "answer_en": "Prevents temporary pointer conversion",
    "answer_hi": "टेम्पररी पॉइंटर कन्वर्जन प्रिवेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which protocol enables custom keyed decoding containers in Swift?",
    "question_hi": "Swift में कस्टम कीड डिकोडिंग कंटेनर्स एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["KeyedDecodingContainerProtocol", "Decodable", "KeyedContainer", "DecodingContainer"],
    "options_hi": ["KeyedDecodingContainerProtocol", "Decodable", "KeyedContainer", "DecodingContainer"],
    "answer_en": "KeyedDecodingContainerProtocol",
    "answer_hi": "KeyedDecodingContainerProtocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'borrowing' method parameter convention indicate?",
    "question_hi": "'borrowing' मेथड पैरामीटर कन्वेंशन क्या इंडिकेट करता है?",
    "options_en": ["Parameter is borrowed (immutable)", "Parameter is consumed", "Parameter is mutable", "Parameter is owned"],
    "options_hi": ["पैरामीटर उधार लिया गया है (इम्यूटेबल)", "पैरामीटर कंज्यूम किया गया है", "पैरामीटर म्यूटेबल है", "पैरामीटर का ओनर है"],
    "answer_en": "Parameter is borrowed (immutable)",
    "answer_hi": "पैरामीटर उधार लिया गया है (इम्यूटेबल)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method creates a random access type-erased collection?",
    "question_hi": "रैंडम एक्सेस टाइप-इरेज़्ड कलेक्शन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyRandomAccessCollection", "eraseToRandomAccess()", "RandomAccessCollection.erase()", "AnyCollection"],
    "options_hi": ["AnyRandomAccessCollection", "eraseToRandomAccess()", "RandomAccessCollection.erase()", "AnyCollection"],
    "answer_en": "AnyRandomAccessCollection",
    "answer_hi": "AnyRandomAccessCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of '@_implements' attribute with where clauses?",
    "question_hi": "व्हेयर क्लॉजेस के साथ '@_implements' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Conditional protocol implementation", "Unconditional implementation", "Default implementation", "Optional implementation"],
    "options_hi": ["कंडीशनल प्रोटोकॉल इम्प्लीमेंटेशन", "अनकंडीशनल इम्प्लीमेंटेशन", "डिफ़ॉल्ट इम्प्लीमेंटेशन", "ऑप्शनल इम्प्लीमेंटेशन"],
    "answer_en": "Conditional protocol implementation",
    "answer_hi": "कंडीशनल प्रोटोकॉल इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which protocol provides custom unkeyed encoding in Swift?",
    "question_hi": "Swift में कस्टम अनकीड एनकोडिंग प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["UnkeyedEncodingContainer", "Encodable", "UnkeyedContainer", "ArrayEncodable"],
    "options_hi": ["UnkeyedEncodingContainer", "Encodable", "UnkeyedContainer", "ArrayEncodable"],
    "answer_en": "UnkeyedEncodingContainer",
    "answer_hi": "UnkeyedEncodingContainer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does '@_documentation' attribute's visibility parameter control?",
    "question_hi": "'@_documentation' एट्रिब्यूट का विजिबिलिटी पैरामीटर क्या कंट्रोल करता है?",
    "options_en": ["Documentation visibility level", "Code visibility", "API visibility", "Source visibility"],
    "options_hi": ["डॉक्यूमेंटेशन विजिबिलिटी लेवल", "कोड विजिबिलिटी", "API विजिबिलिटी", "सोर्स विजिबिलिटी"],
    "answer_en": "Documentation visibility level",
    "answer_hi": "डॉक्यूमेंटेशन विजिबिलिटी लेवल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method creates a mutable type-erased collection?",
    "question_hi": "म्यूटेबल टाइप-इरेज़्ड कलेक्शन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyMutableCollection", "eraseToMutable()", "MutableCollection.erase()", "AnyCollection"],
    "options_hi": ["AnyMutableCollection", "eraseToMutable()", "MutableCollection.erase()", "AnyCollection"],
    "answer_en": "AnyMutableCollection",
    "answer_hi": "AnyMutableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the purpose of '@_specializeExtension' with generic constraints?",
    "question_hi": "जेनेरिक कंस्ट्रेंट्स के साथ '@_specializeExtension' का उद्देश्य क्या है?",
    "options_en": ["Specialize extension for specific types", "Generalize extension", "Remove specialization", "Add constraints"],
    "options_hi": ["स्पेसिफिक टाइप्स के लिए एक्सटेंशन स्पेशलाइज़ करना", "एक्सटेंशन जनरलाइज़ करना", "स्पेशलाइज़ेशन रिमूव करना", "कंस्ट्रेंट्स ऐड करना"],
    "answer_en": "Specialize extension for specific types",
    "answer_hi": "स्पेसिफिक टाइप्स के लिए एक्सटेंशन स्पेशलाइज़ करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which protocol enables custom super decoding in Swift?",
    "question_hi": "Swift में कस्टम सुपर डिकोडिंग एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["superDecoder()", "Decodable", "SuperContainer", "InheritanceDecoder"],
    "options_hi": ["superDecoder()", "Decodable", "SuperContainer", "InheritanceDecoder"],
    "answer_en": "superDecoder()",
    "answer_hi": "superDecoder()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does '@_alwaysEmitIntoClient' attribute's availability control?",
    "question_hi": "'@_alwaysEmitIntoClient' एट्रिब्यूट की एवेलेबिलिटी क्या कंट्रोल करती है?",
    "options_en": ["Minimum deployment target", "Maximum deployment", "Current version", "Future versions"],
    "options_hi": ["मिनिमम डिप्लॉयमेंट टार्गेट", "मैक्सिमम डिप्लॉयमेंट", "करंट वर्जन", "फ्यूचर वर्जन्स"],
    "answer_en": "Minimum deployment target",
    "answer_hi": "मिनिमम डिप्लॉयमेंट टार्गेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method creates a type-erased iterator in Swift?",
    "question_hi": "Swift में टाइप-इरेज़्ड इटरेटर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyIterator", "eraseToAnyIterator()", "Iterator.erase()", "makeAnyIterator()"],
    "options_hi": ["AnyIterator", "eraseToAnyIterator()", "Iterator.erase()", "makeAnyIterator()"],
    "answer_en": "AnyIterator",
    "answer_hi": "AnyIterator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of '@_hasInitialValue' for stored properties?",
    "question_hi": "स्टोर्ड प्रॉपर्टीज के लिए '@_hasInitialValue' का उद्देश्य क्या है?",
    "options_en": ["Indicates default initializer", "No initial value", "Computed property", "Lazy property"],
    "options_hi": ["डिफ़ॉल्ट इनिशियलाइज़र इंडिकेट करता है", "कोई इनिशियल वैल्यू नहीं", "कंप्यूटेड प्रॉपर्टी", "लेज़ी प्रॉपर्टी"],
    "answer_en": "Indicates default initializer",
    "answer_hi": "डिफ़ॉल्ट इनिशियलाइज़र इंडिकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which protocol enables custom super encoding in Swift?",
    "question_hi": "Swift में कस्टम सुपर एनकोडिंग एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["superEncoder()", "Encodable", "SuperContainer", "InheritanceEncoder"],
    "options_hi": ["superEncoder()", "Encodable", "SuperContainer", "InheritanceEncoder"],
    "answer_en": "superEncoder()",
    "answer_hi": "superEncoder()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does '@_implements' attribute's 'as' parameter specify?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'as' पैरामीटर क्या स्पेसिफाई करता है?",
    "options_en": ["Implementation name", "Protocol name", "Type name", "Method signature"],
    "options_hi": ["इम्प्लीमेंटेशन नाम", "प्रोटोकॉल नाम", "टाइप नाम", "मेथड सिग्नेचर"],
    "answer_en": "Implementation name",
    "answer_hi": "इम्प्लीमेंटेशन नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method creates a type-erased view in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड व्यू बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyView", "eraseToAnyView()", "View.erase()", "typeErasedView()"],
    "options_hi": ["AnyView", "eraseToAnyView()", "View.erase()", "typeErasedView()"],
    "answer_en": "AnyView",
    "answer_hi": "AnyView",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of '@_marker' attribute on protocols?",
    "question_hi": "प्रोटोकॉल्स पर '@_marker' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Marker protocol with no requirements", "Protocol with requirements", "Deprecated protocol", "Experimental protocol"],
    "options_hi": ["बिना रिक्वायरमेंट्स वाला मार्कर प्रोटोकॉल", "रिक्वायरमेंट्स वाला प्रोटोकॉल", "डिप्रिकेटेड प्रोटोकॉल", "एक्सपेरिमेंटल प्रोटोकॉल"],
    "answer_en": "Marker protocol with no requirements",
    "answer_hi": "बिना रिक्वायरमेंट्स वाला मार्कर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which protocol enables custom nested container encoding?",
    "question_hi": "कस्टम नेस्टेड कंटेनर एनकोडिंग एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["nestedContainer(keyedBy:)", "Encodable", "NestedContainer", "ContainerEncoder"],
    "options_hi": ["nestedContainer(keyedBy:)", "Encodable", "NestedContainer", "ContainerEncoder"],
    "answer_en": "nestedContainer(keyedBy:)",
    "answer_hi": "nestedContainer(keyedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does '@_documentation' attribute's metadata include?",
    "question_hi": "'@_documentation' एट्रिब्यूट के मेटाडेटा में क्या शामिल होता है?",
    "options_en": ["Visibility, availability, metadata", "Code only", "Comments only", "Types only"],
    "options_hi": ["विजिबिलिटी, एवेलेबिलिटी, मेटाडेटा", "केवल कोड", "केवल कमेंट्स", "केवल टाइप्स"],
    "answer_en": "Visibility, availability, metadata",
    "answer_hi": "विजिबिलिटी, एवेलेबिलिटी, मेटाडेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method creates a type-erased shape in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड शेप बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyShape", "eraseToAnyShape()", "Shape.erase()", "typeErasedShape()"],
    "options_hi": ["AnyShape", "eraseToAnyShape()", "Shape.erase()", "typeErasedShape()"],
    "answer_en": "AnyShape",
    "answer_hi": "AnyShape",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the purpose of '@_implements' with multiple protocols?",
    "question_hi": "मल्टीपल प्रोटोकॉल्स के साथ '@_implements' का उद्देश्य क्या है?",
    "options_en": ["Implement multiple protocol requirements", "Single protocol only", "No implementation", "Default implementation"],
    "options_hi": ["मल्टीपल प्रोटोकॉल रिक्वायरमेंट्स इम्प्लीमेंट करना", "केवल सिंगल प्रोटोकॉल", "कोई इम्प्लीमेंटेशन नहीं", "डिफ़ॉल्ट इम्प्लीमेंटेशन"],
    "answer_en": "Implement multiple protocol requirements",
    "answer_hi": "मल्टीपल प्रोटोकॉल रिक्वायरमेंट्स इम्प्लीमेंट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which protocol enables custom nested container decoding?",
    "question_hi": "कस्टम नेस्टेड कंटेनर डिकोडिंग एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["nestedContainer(keyedBy:)", "Decodable", "NestedContainer", "ContainerDecoder"],
    "options_hi": ["nestedContainer(keyedBy:)", "Decodable", "NestedContainer", "ContainerDecoder"],
    "answer_en": "nestedContainer(keyedBy:)",
    "answer_hi": "nestedContainer(keyedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does '@_disfavoredOverload' attribute indicate about a function?",
    "question_hi": "किसी फ़ंक्शन के बारे में '@_disfavoredOverload' एट्रिब्यूट क्या इंगित करता है?",
    "options_en": ["Compiler should prefer other overloads", "Function is preferred", "Function is deprecated", "Function is experimental"],
    "options_hi": ["कंपाइलर को दूसरे ओवरलोड्स को प्राथमिकता देनी चाहिए", "फ़ंक्शन को प्राथमिकता दी जाती है", "फ़ंक्शन डिप्रेकेटेड है", "फ़ंक्शन प्रयोगात्मक है"],
    "answer_en": "Compiler should prefer other overloads",
    "answer_hi": "कंपाइलर को दूसरे ओवरलोड्स को प्राथमिकता देनी चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which protocol enables custom encoding of dynamic types in Swift?",
    "question_hi": "Swift में डायनामिक टाइप्स की कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["DynamicTypeEncodable", "EncodableWithType", "encode(to:for:) method", "No specific protocol"],
    "options_hi": ["DynamicTypeEncodable", "EncodableWithType", "encode(to:for:) मेथड", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "No specific protocol",
    "answer_hi": "कोई विशिष्ट प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of '_ConditionalConformance' internal attribute?",
    "question_hi": "'_ConditionalConformance' आंतरिक एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Marks conditional protocol conformance", "Unconditional conformance", "Protocol inheritance", "Class inheritance"],
    "options_hi": ["कंडीशनल प्रोटोकॉल कन्फॉर्मेंस को चिह्नित करता है", "बिना शर्त अनुपालन", "प्रोटोकॉल इनहेरिटेंस", "क्लास इनहेरिटेंस"],
    "answer_en": "Marks conditional protocol conformance",
    "answer_hi": "कंडीशनल प्रोटोकॉल कन्फॉर्मेंस को चिह्नित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method creates a type-erased error in Swift's Result type?",
    "question_hi": "Swift के Result टाइप में टाइप-इरेज़्ड एरर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Result.failure() with Error", "AnyError", "eraseToAnyError()", "Error.erase()"],
    "options_hi": ["Result.failure() Error के साथ", "AnyError", "eraseToAnyError()", "Error.erase()"],
    "answer_en": "Result.failure() with Error",
    "answer_hi": "Result.failure() Error के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does '@_optimize(none)' attribute do to a function?",
    "question_hi": "'@_optimize(none)' एट्रिब्यूट किसी फ़ंक्शन पर क्या करता है?",
    "options_en": ["Disables compiler optimizations", "Enables maximum optimization", "Enables size optimization", "Enables speed optimization"],
    "options_hi": ["कंपाइलर ऑप्टिमाइज़ेशन अक्षम करता है", "अधिकतम ऑप्टिमाइज़ेशन सक्षम करता है", "साइज़ ऑप्टिमाइज़ेशन सक्षम करता है", "स्पीड ऑप्टिमाइज़ेशन सक्षम करता है"],
    "answer_en": "Disables compiler optimizations",
    "answer_hi": "कंपाइलर ऑप्टिमाइज़ेशन अक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which protocol provides custom decoding for inheritance hierarchies?",
    "question_hi": "इनहेरिटेंस हाइरार्की के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Protocol with type discriminator", "InheritanceDecodable", "PolymorphicDecodable", "No standard protocol"],
    "options_hi": ["टाइप डिस्क्रिमिनेटर वाला प्रोटोकॉल", "InheritanceDecodable", "PolymorphicDecodable", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "No standard protocol",
    "answer_hi": "कोई मानक प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of '@_transparent' attribute on functions?",
    "question_hi": "फ़ंक्शन्स पर '@_transparent' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Force inlining at call site", "Make function transparent", "Disable inlining", "Optimize for size"],
    "options_hi": ["कॉल साइट पर इनलाइनिंग फोर्स करना", "फ़ंक्शन को पारदर्शी बनाना", "इनलाइनिंग अक्षम करना", "साइज़ के लिए ऑप्टिमाइज़ करना"],
    "answer_en": "Force inlining at call site",
    "answer_hi": "कॉल साइट पर इनलाइनिंग फोर्स करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method creates a type-erased publisher in Combine?",
    "question_hi": "Combine में टाइप-इरेज़्ड पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["eraseToAnyPublisher()", "AnyPublisher", "Publisher.erase()", "typeErasedPublisher()"],
    "options_hi": ["eraseToAnyPublisher()", "AnyPublisher", "Publisher.erase()", "typeErasedPublisher()"],
    "answer_en": "eraseToAnyPublisher()",
    "answer_hi": "eraseToAnyPublisher()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does '@_alwaysEmitIntoClient' attribute guarantee?",
    "question_hi": "'@_alwaysEmitIntoClient' एट्रिब्यूट क्या गारंटी देता है?",
    "options_en": ["Function body always in client", "Function body never in client", "Optional inclusion", "Conditional inclusion"],
    "options_hi": ["फ़ंक्शन बॉडी हमेशा क्लाइंट में", "फ़ंक्शन बॉडी कभी क्लाइंट में नहीं", "वैकल्पिक समावेश", "सशर्त समावेश"],
    "answer_en": "Function body always in client",
    "answer_hi": "फ़ंक्शन बॉडी हमेशा क्लाइंट में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which protocol enables custom encoding of inheritance hierarchies?",
    "question_hi": "इनहेरिटेंस हाइरार्की की कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Protocol with type field", "InheritanceEncodable", "PolymorphicEncodable", "No standard protocol"],
    "options_hi": ["टाइप फील्ड वाला प्रोटोकॉल", "InheritanceEncodable", "PolymorphicEncodable", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "No standard protocol",
    "answer_hi": "कोई मानक प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the purpose of '@_semantics' attribute's 'array.final' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'array.final' मान का उद्देश्य क्या है?",
    "options_en": ["Array will not be mutated", "Array can be mutated", "Array is empty", "Array is fixed size"],
    "options_hi": ["ऐरे म्यूटेट नहीं होगी", "ऐरे म्यूटेट हो सकती है", "ऐरे खाली है", "ऐरे फिक्स्ड साइज़ की है"],
    "answer_en": "Array will not be mutated",
    "answer_hi": "ऐरे म्यूटेट नहीं होगी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which method creates a type-erased effect in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड इफेक्ट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyEffect", "eraseToAnyEffect()", "Effect.erase()", "No type-erased effect"],
    "options_hi": ["AnyEffect", "eraseToAnyEffect()", "Effect.erase()", "कोई टाइप-इरेज़्ड इफेक्ट नहीं"],
    "answer_en": "No type-erased effect",
    "answer_hi": "कोई टाइप-इरेज़्ड इफेक्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does '@_semantics' attribute's 'string.makeUTF8' value indicate?",
    "question_hi": "'@_semantics' एट्रिब्यूट का 'string.makeUTF8' मान क्या इंगित करता है?",
    "options_en": ["String UTF-8 buffer creation", "String copying", "String concatenation", "String encoding"],
    "options_hi": ["स्ट्रिंग UTF-8 बफर क्रिएशन", "स्ट्रिंग कॉपीइंग", "स्ट्रिंग कॉन्केटिनेशन", "स्ट्रिंग एन्कोडिंग"],
    "answer_en": "String UTF-8 buffer creation",
    "answer_hi": "स्ट्रिंग UTF-8 बफर क्रिएशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which protocol provides custom encoding for dynamic member lookup?",
    "question_hi": "डायनामिक मेम्बर लुकअप के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["No specific protocol", "DynamicEncodable", "MemberLookupEncodable", "EncodableWithLookup"],
    "options_hi": ["कोई विशिष्ट प्रोटोकॉल नहीं", "DynamicEncodable", "MemberLookupEncodable", "EncodableWithLookup"],
    "answer_en": "No specific protocol",
    "answer_hi": "कोई विशिष्ट प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the purpose of '@_semantics' attribute's 'optimize.sil.never' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'optimize.sil.never' मान का उद्देश्य क्या है?",
    "options_en": ["Prevent SIL optimizations", "Enable SIL optimizations", "Disable all optimizations", "Enable all optimizations"],
    "options_hi": ["SIL ऑप्टिमाइज़ेशन रोकना", "SIL ऑप्टिमाइज़ेशन सक्षम करना", "सभी ऑप्टिमाइज़ेशन अक्षम करना", "सभी ऑप्टिमाइज़ेशन सक्षम करना"],
    "answer_en": "Prevent SIL optimizations",
    "answer_hi": "SIL ऑप्टिमाइज़ेशन रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which method creates a type-erased animation in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड एनीमेशन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAnimation", "eraseToAnyAnimation()", "Animation.erase()", "No type-erased animation"],
    "options_hi": ["AnyAnimation", "eraseToAnyAnimation()", "Animation.erase()", "कोई टाइप-इरेज़्ड एनीमेशन नहीं"],
    "answer_en": "No type-erased animation",
    "answer_hi": "कोई टाइप-इरेज़्ड एनीमेशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does '@_semantics' attribute's 'arc.immortal' value guarantee?",
    "question_hi": "'@_semantics' एट्रिब्यूट का 'arc.immortal' मान क्या गारंटी देता है?",
    "options_en": ["Object never deallocated", "Object can be deallocated", "Object is immortal", "Object is temporary"],
    "options_hi": ["ऑब्जेक्ट कभी डीलोकेट नहीं होता", "ऑब्जेक्ट डीलोकेट हो सकता है", "ऑब्जेक्ट अमर है", "ऑब्जेक्ट अस्थायी है"],
    "answer_en": "Object never deallocated",
    "answer_hi": "ऑब्जेक्ट कभी डीलोकेट नहीं होता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which protocol provides custom decoding for dynamic member lookup?",
    "question_hi": "डायनामिक मेम्बर लुकअप के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["No specific protocol", "DynamicDecodable", "MemberLookupDecodable", "DecodableWithLookup"],
    "options_hi": ["कोई विशिष्ट प्रोटोकॉल नहीं", "DynamicDecodable", "MemberLookupDecodable", "DecodableWithLookup"],
    "answer_en": "No specific protocol",
    "answer_hi": "कोई विशिष्ट प्रोटोकॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the purpose of '@_semantics' attribute's 'typechecker.typeof' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'typechecker.typeof' मान का उद्देश्य क्या है?",
    "options_en": ["Type check operation", "Value check", "Runtime type", "Compile-time type"],
    "options_hi": ["टाइप चेक ऑपरेशन", "वैल्यू चेक", "रनटाइम टाइप", "कंपाइल-टाइम टाइप"],
    "answer_en": "Type check operation",
    "answer_hi": "टाइप चेक ऑपरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which method creates a type-erased gesture in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड जेस्चर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyGesture", "eraseToAnyGesture()", "Gesture.erase()", "typeErasedGesture()"],
    "options_hi": ["AnyGesture", "eraseToAnyGesture()", "Gesture.erase()", "typeErasedGesture()"],
    "answer_en": "AnyGesture",
    "answer_hi": "AnyGesture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does '@_specialize' attribute's 'exported:' parameter control?",
    "question_hi": "'@_specialize' एट्रिब्यूट का 'exported:' पैरामीटर क्या नियंत्रित करता है?",
    "options_en": ["Whether specialization is exported", "Specialization type", "Specialization priority", "Specialization target"],
    "options_hi": ["क्या स्पेशलाइज़ेशन एक्सपोर्ट किया जाता है", "स्पेशलाइज़ेशन टाइप", "स्पेशलाइज़ेशन प्राथमिकता", "स्पेशलाइज़ेशन लक्ष्य"],
    "answer_en": "Whether specialization is exported",
    "answer_hi": "क्या स्पेशलाइज़ेशन एक्सपोर्ट किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which protocol enables custom encoding with type discriminator?",
    "question_hi": "टाइप डिस्क्रिमिनेटर के साथ कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Custom protocol with type field", "TypeDiscriminatedEncodable", "PolymorphicEncoder", "No standard protocol"],
    "options_hi": ["टाइप फील्ड वाला कस्टम प्रोटोकॉल", "TypeDiscriminatedEncodable", "PolymorphicEncoder", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "Custom protocol with type field",
    "answer_hi": "टाइप फील्ड वाला कस्टम प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the purpose of '@_semantics' attribute's 'oslog.message' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'oslog.message' मान का उद्देश्य क्या है?",
    "options_en": ["OSLog message optimization", "Console output", "Debug logging", "Error logging"],
    "options_hi": ["OSLog मैसेज ऑप्टिमाइज़ेशन", "कंसोल आउटपुट", "डीबग लॉगिंग", "एरर लॉगिंग"],
    "answer_en": "OSLog message optimization",
    "answer_hi": "OSLog मैसेज ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which method creates a type-erased preference key in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड प्रेफरेंस की बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyPreferenceKey", "eraseToAnyPreferenceKey()", "PreferenceKey.erase()", "No type-erased preference key"],
    "options_hi": ["AnyPreferenceKey", "eraseToAnyPreferenceKey()", "PreferenceKey.erase()", "कोई टाइप-इरेज़्ड प्रेफरेंस की नहीं"],
    "answer_en": "No type-erased preference key",
    "answer_hi": "कोई टाइप-इरेज़्ड प्रेफरेंस की नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does '@_specialize' attribute's 'target:' parameter specify?",
    "question_hi": "'@_specialize' एट्रिब्यूट का 'target:' पैरामीटर क्या निर्दिष्ट करता है?",
    "options_en": ["Target function to specialize", "Specialization method", "Optimization level", "Compilation target"],
    "options_hi": ["स्पेशलाइज़ करने के लिए लक्ष्य फ़ंक्शन", "स्पेशलाइज़ेशन मेथड", "ऑप्टिमाइज़ेशन लेवल", "कंपाइलेशन लक्ष्य"],
    "answer_en": "Target function to specialize",
    "answer_hi": "स्पेशलाइज़ करने के लिए लक्ष्य फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which protocol enables custom decoding with type discriminator?",
    "question_hi": "टाइप डिस्क्रिमिनेटर के साथ कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Custom protocol with type field", "TypeDiscriminatedDecodable", "PolymorphicDecoder", "No standard protocol"],
    "options_hi": ["टाइप फील्ड वाला कस्टम प्रोटोकॉल", "TypeDiscriminatedDecodable", "PolymorphicDecoder", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "Custom protocol with type field",
    "answer_hi": "टाइप फील्ड वाला कस्टम प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the purpose of '@_semantics' attribute's 'stdlib.collection' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'stdlib.collection' मान का उद्देश्य क्या है?",
    "options_en": ["Standard library collection operation", "Custom collection", "Array operation", "Dictionary operation"],
    "options_hi": ["स्टैंडर्ड लाइब्रेरी कलेक्शन ऑपरेशन", "कस्टम कलेक्शन", "ऐरे ऑपरेशन", "डिक्शनरी ऑपरेशन"],
    "answer_en": "Standard library collection operation",
    "answer_hi": "स्टैंडर्ड लाइब्रेरी कलेक्शन ऑपरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which method creates a type-erased environment key in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड एनवायरनमेंट की बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyEnvironmentKey", "eraseToAnyEnvironmentKey()", "EnvironmentKey.erase()", "No type-erased environment key"],
    "options_hi": ["AnyEnvironmentKey", "eraseToAnyEnvironmentKey()", "EnvironmentKey.erase()", "कोई टाइप-इरेज़्ड एनवायरनमेंट की नहीं"],
    "answer_en": "No type-erased environment key",
    "answer_hi": "कोई टाइप-इरेज़्ड एनवायरनमेंट की नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does '@_specializeExtension' attribute's 'kind:' parameter control?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट का 'kind:' पैरामीटर क्या नियंत्रित करता है?",
    "options_en": ["Specialization kind (full/partial)", "Extension type", "Optimization level", "Target platform"],
    "options_hi": ["स्पेशलाइज़ेशन काइंड (फुल/पार्शियल)", "एक्सटेंशन टाइप", "ऑप्टिमाइज़ेशन लेवल", "लक्ष्य प्लेटफॉर्म"],
    "answer_en": "Specialization kind (full/partial)",
    "answer_hi": "स्पेशलाइज़ेशन काइंड (फुल/पार्शियल)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which protocol provides custom encoding for property wrappers?",
    "question_hi": "प्रॉपर्टी रैपर्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Encodable on wrapped value", "PropertyWrapperEncodable", "WrapperEncodable", "No specific protocol"],
    "options_hi": ["रैप्ड वैल्यू पर Encodable", "PropertyWrapperEncodable", "WrapperEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Encodable on wrapped value",
    "answer_hi": "रैप्ड वैल्यू पर Encodable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the purpose of '@_semantics' attribute's 'programtermination_point' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'programtermination_point' मान का उद्देश्य क्या है?",
    "options_en": ["Program termination point", "Program start point", "Function entry point", "Loop termination"],
    "options_hi": ["प्रोग्राम टर्मिनेशन पॉइंट", "प्रोग्राम स्टार्ट पॉइंट", "फ़ंक्शन एंट्री पॉइंट", "लूप टर्मिनेशन"],
    "answer_en": "Program termination point",
    "answer_hi": "प्रोग्राम टर्मिनेशन पॉइंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which method creates a type-erased scene in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड सीन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyScene", "eraseToAnyScene()", "Scene.erase()", "typeErasedScene()"],
    "options_hi": ["AnyScene", "eraseToAnyScene()", "Scene.erase()", "typeErasedScene()"],
    "answer_en": "AnyScene",
    "answer_hi": "AnyScene",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does '@_specializeExtension' attribute's 'where' clause specify?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट का 'where' क्लॉज क्या निर्दिष्ट करता है?",
    "options_en": ["Constraints for specialization", "Extension location", "Specialization scope", "Optimization constraints"],
    "options_hi": ["स्पेशलाइज़ेशन के लिए कंस्ट्रेंट्स", "एक्सटेंशन लोकेशन", "स्पेशलाइज़ेशन स्कोप", "ऑप्टिमाइज़ेशन कंस्ट्रेंट्स"],
    "answer_en": "Constraints for specialization",
    "answer_hi": "स्पेशलाइज़ेशन के लिए कंस्ट्रेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which protocol provides custom decoding for property wrappers?",
    "question_hi": "प्रॉपर्टी रैपर्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Decodable on wrapped value", "PropertyWrapperDecodable", "WrapperDecodable", "No specific protocol"],
    "options_hi": ["रैप्ड वैल्यू पर Decodable", "PropertyWrapperDecodable", "WrapperDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Decodable on wrapped value",
    "answer_hi": "रैप्ड वैल्यू पर Decodable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the purpose of '@_semantics' attribute's 'escaping' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'escaping' मान का उद्देश्य क्या है?",
    "options_en": ["Escaping closure semantics", "Non-escaping closure", "Function escape", "Memory escape"],
    "options_hi": ["एस्केपिंग क्लोजर सेमेन्टिक्स", "नॉन-एस्केपिंग क्लोजर", "फ़ंक्शन एस्केप", "मेमोरी एस्केप"],
    "answer_en": "Escaping closure semantics",
    "answer_hi": "एस्केपिंग क्लोजर सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which method creates a type-erased window in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड विंडो बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyWindow", "eraseToAnyWindow()", "Window.erase()", "No type-erased window"],
    "options_hi": ["AnyWindow", "eraseToAnyWindow()", "Window.erase()", "कोई टाइप-इरेज़्ड विंडो नहीं"],
    "answer_en": "No type-erased window",
    "answer_hi": "कोई टाइप-इरेज़्ड विंडो नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does '@_implements' attribute's 'availability' parameter control?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'availability' पैरामीटर क्या नियंत्रित करता है?",
    "options_en": ["Implementation availability", "Protocol availability", "Type availability", "Method availability"],
    "options_hi": ["इम्प्लीमेंटेशन उपलब्धता", "प्रोटोकॉल उपलब्धता", "टाइप उपलब्धता", "मेथड उपलब्धता"],
    "answer_en": "Implementation availability",
    "answer_hi": "इम्प्लीमेंटेशन उपलब्धता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which protocol provides custom encoding for dynamic types with inheritance?",
    "question_hi": "इनहेरिटेंस के साथ डायनामिक टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Custom protocol with type discriminator", "InheritanceDynamicEncodable", "PolymorphicDynamicEncoder", "No standard protocol"],
    "options_hi": ["टाइप डिस्क्रिमिनेटर वाला कस्टम प्रोटोकॉल", "InheritanceDynamicEncodable", "PolymorphicDynamicEncoder", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "Custom protocol with type discriminator",
    "answer_hi": "टाइप डिस्क्रिमिनेटर वाला कस्टम प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the purpose of '@_semantics' attribute's 'programtermination' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'programtermination' मान का उद्देश्य क्या है?",
    "options_en": ["Program termination semantics", "Program start", "Function termination", "Thread termination"],
    "options_hi": ["प्रोग्राम टर्मिनेशन सेमेन्टिक्स", "प्रोग्राम स्टार्ट", "फ़ंक्शन टर्मिनेशन", "थ्रेड टर्मिनेशन"],
    "answer_en": "Program termination semantics",
    "answer_hi": "प्रोग्राम टर्मिनेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which method creates a type-erased command in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड कमांड बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyCommand", "eraseToAnyCommand()", "Command.erase()", "typeErasedCommand()"],
    "options_hi": ["AnyCommand", "eraseToAnyCommand()", "Command.erase()", "typeErasedCommand()"],
    "answer_en": "AnyCommand",
    "answer_hi": "AnyCommand",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does '@_implements' attribute's 'deprecated' parameter indicate?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'deprecated' पैरामीटर क्या इंगित करता है?",
    "options_en": ["Implementation is deprecated", "Protocol is deprecated", "Type is deprecated", "Method is deprecated"],
    "options_hi": ["इम्प्लीमेंटेशन डिप्रेकेटेड है", "प्रोटोकॉल डिप्रेकेटेड है", "टाइप डिप्रेकेटेड है", "मेथड डिप्रेकेटेड है"],
    "answer_en": "Implementation is deprecated",
    "answer_hi": "इम्प्लीमेंटेशन डिप्रेकेटेड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which protocol provides custom decoding for dynamic types with inheritance?",
    "question_hi": "इनहेरिटेंस के साथ डायनामिक टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Custom protocol with type discriminator", "InheritanceDynamicDecodable", "PolymorphicDynamicDecoder", "No standard protocol"],
    "options_hi": ["टाइप डिस्क्रिमिनेटर वाला कस्टम प्रोटोकॉल", "InheritanceDynamicDecodable", "PolymorphicDynamicDecoder", "कोई मानक प्रोटोकॉल नहीं"],
    "answer_en": "Custom protocol with type discriminator",
    "answer_hi": "टाइप डिस्क्रिमिनेटर वाला कस्टम प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the purpose of '@_semantics' attribute's 'constant_evaluable' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'constant_evaluable' मान का उद्देश्य क्या है?",
    "options_en": ["Constant evaluable at compile time", "Runtime evaluation", "Dynamic evaluation", "Lazy evaluation"],
    "options_hi": ["कंपाइल टाइम पर कॉन्स्टेंट एवेल्युएबल", "रनटाइम एवेल्युएशन", "डायनामिक एवेल्युएशन", "लेज़ी एवेल्युएशन"],
    "answer_en": "Constant evaluable at compile time",
    "answer_hi": "कंपाइल टाइम पर कॉन्स्टेंट एवेल्युएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which method creates a type-erased toolbar in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड टूलबार बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyToolbar", "eraseToAnyToolbar()", "Toolbar.erase()", "No type-erased toolbar"],
    "options_hi": ["AnyToolbar", "eraseToAnyToolbar()", "Toolbar.erase()", "कोई टाइप-इरेज़्ड टूलबार नहीं"],
    "answer_en": "No type-erased toolbar",
    "answer_hi": "कोई टाइप-इरेज़्ड टूलबार नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does '@_implements' attribute's 'renamed' parameter specify?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'renamed' पैरामीटर क्या निर्दिष्ट करता है?",
    "options_en": ["New name for implementation", "Old name", "Protocol name", "Type name"],
    "options_hi": ["इम्प्लीमेंटेशन के लिए नया नाम", "पुराना नाम", "प्रोटोकॉल नाम", "टाइप नाम"],
    "answer_en": "New name for implementation",
    "answer_hi": "इम्प्लीमेंटेशन के लिए नया नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which protocol enables custom encoding for type-erased collections?",
    "question_hi": "टाइप-इरेज़्ड कलेक्शन्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as underlying collection", "AnyCollectionEncodable", "TypeErasedEncodable", "No specific protocol"],
    "options_hi": ["अंडरलाइंग कलेक्शन के समान", "AnyCollectionEncodable", "TypeErasedEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as underlying collection",
    "answer_hi": "अंडरलाइंग कलेक्शन के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the purpose of '@_semantics' attribute's 'no_locks' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'no_locks' मान का उद्देश्य क्या है?",
    "options_en": ["Function uses no locks", "Function uses locks", "Lock-free operation", "Thread-safe operation"],
    "options_hi": ["फ़ंक्शन कोई लॉक्स नहीं उपयोग करता", "फ़ंक्शन लॉक्स उपयोग करता है", "लॉक-फ्री ऑपरेशन", "थ्रेड-सेफ ऑपरेशन"],
    "answer_en": "Function uses no locks",
    "answer_hi": "फ़ंक्शन कोई लॉक्स नहीं उपयोग करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which method creates a type-erased menu in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड मेनू बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyMenu", "eraseToAnyMenu()", "Menu.erase()", "typeErasedMenu()"],
    "options_hi": ["AnyMenu", "eraseToAnyMenu()", "Menu.erase()", "typeErasedMenu()"],
    "answer_en": "AnyMenu",
    "answer_hi": "AnyMenu",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does '@_implements' attribute's 'message' parameter provide?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'message' पैरामीटर क्या प्रदान करता है?",
    "options_en": ["Deprecation message", "Implementation message", "Protocol message", "Type message"],
    "options_hi": ["डिप्रिकेशन मैसेज", "इम्प्लीमेंटेशन मैसेज", "प्रोटोकॉल मैसेज", "टाइप मैसेज"],
    "answer_en": "Deprecation message",
    "answer_hi": "डिप्रिकेशन मैसेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which protocol enables custom decoding for type-erased collections?",
    "question_hi": "टाइप-इरेज़्ड कलेक्शन्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as underlying collection", "AnyCollectionDecodable", "TypeErasedDecodable", "No specific protocol"],
    "options_hi": ["अंडरलाइंग कलेक्शन के समान", "AnyCollectionDecodable", "TypeErasedDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as underlying collection",
    "answer_hi": "अंडरलाइंग कलेक्शन के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the purpose of '@_semantics' attribute's 'no_allocation' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'no_allocation' मान का उद्देश्य क्या है?",
    "options_en": ["Function performs no allocation", "Function allocates memory", "Stack allocation only", "Heap allocation"],
    "options_hi": ["फ़ंक्शन कोई एलोकेशन नहीं करता", "फ़ंक्शन मेमोरी एलोकेट करता है", "केवल स्टैक एलोकेशन", "हीप एलोकेशन"],
    "answer_en": "Function performs no allocation",
    "answer_hi": "फ़ंक्शन कोई एलोकेशन नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which method creates a type-erased alert in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड अलर्ट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAlert", "eraseToAnyAlert()", "Alert.erase()", "No type-erased alert"],
    "options_hi": ["AnyAlert", "eraseToAnyAlert()", "Alert.erase()", "कोई टाइप-इरेज़्ड अलर्ट नहीं"],
    "answer_en": "No type-erased alert",
    "answer_hi": "कोई टाइप-इरेज़्ड अलर्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does '@_implements' attribute's 'obsoleted' parameter indicate?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'obsoleted' पैरामीटर क्या इंगित करता है?",
    "options_en": ["Implementation is obsoleted", "Protocol is obsoleted", "Type is obsoleted", "Method is obsoleted"],
    "options_hi": ["इम्प्लीमेंटेशन ऑब्सोलेटेड है", "प्रोटोकॉल ऑब्सोलेटेड है", "टाइप ऑब्सोलेटेड है", "मेथड ऑब्सोलेटेड है"],
    "answer_en": "Implementation is obsoleted",
    "answer_hi": "इम्प्लीमेंटेशन ऑब्सोलेटेड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which protocol provides custom encoding for async sequences?",
    "question_hi": "एसिंक सीक्वेंसेस के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["AsyncSequence with Encodable elements", "AsyncEncodableSequence", "EncodableAsyncSequence", "No specific protocol"],
    "options_hi": ["Encodable एलीमेंट्स वाला AsyncSequence", "AsyncEncodableSequence", "EncodableAsyncSequence", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "AsyncSequence with Encodable elements",
    "answer_hi": "Encodable एलीमेंट्स वाला AsyncSequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the purpose of '@_semantics' attribute's 'readnone' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'readnone' मान का उद्देश्य क्या है?",
    "options_en": ["Function reads no memory", "Function reads memory", "Function writes memory", "Function modifies memory"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी नहीं पढ़ता", "फ़ंक्शन मेमोरी पढ़ता है", "फ़ंक्शन मेमोरी लिखता है", "फ़ंक्शन मेमोरी मॉडिफाई करता है"],
    "answer_en": "Function reads no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी नहीं पढ़ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which method creates a type-erased sheet in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड शीट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnySheet", "eraseToAnySheet()", "Sheet.erase()", "No type-erased sheet"],
    "options_hi": ["AnySheet", "eraseToAnySheet()", "Sheet.erase()", "कोई टाइप-इरेज़्ड शीट नहीं"],
    "answer_en": "No type-erased sheet",
    "answer_hi": "कोई टाइप-इरेज़्ड शीट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does '@_implements' attribute's 'introduced' parameter specify?",
    "question_hi": "'@_implements' एट्रिब्यूट का 'introduced' पैरामीटर क्या निर्दिष्ट करता है?",
    "options_en": ["Version where implementation was introduced", "Protocol version", "Type version", "Method version"],
    "options_hi": ["वर्जन जहां इम्प्लीमेंटेशन इंट्रोड्यूस किया गया", "प्रोटोकॉल वर्जन", "टाइप वर्जन", "मेथड वर्जन"],
    "answer_en": "Version where implementation was introduced",
    "answer_hi": "वर्जन जहां इम्प्लीमेंटेशन इंट्रोड्यूस किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which protocol provides custom decoding for async sequences?",
    "question_hi": "एसिंक सीक्वेंसेस के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["AsyncSequence with Decodable elements", "AsyncDecodableSequence", "DecodableAsyncSequence", "No specific protocol"],
    "options_hi": ["Decodable एलीमेंट्स वाला AsyncSequence", "AsyncDecodableSequence", "DecodableAsyncSequence", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "AsyncSequence with Decodable elements",
    "answer_hi": "Decodable एलीमेंट्स वाला AsyncSequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the purpose of '@_semantics' attribute's 'writenone' value?",
    "question_hi": "'@_semantics' एट्रिब्यूट के 'writenone' मान का उद्देश्य क्या है?",
    "options_en": ["Function writes no memory", "Function writes memory", "Function reads memory", "Function modifies memory"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी नहीं लिखता", "फ़ंक्शन मेमोरी लिखता है", "फ़ंक्शन मेमोरी पढ़ता है", "फ़ंक्शन मेमोरी मॉडिफाई करता है"],
    "answer_en": "Function writes no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी नहीं लिखता",
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