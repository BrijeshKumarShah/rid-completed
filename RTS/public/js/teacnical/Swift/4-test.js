const questions = [
  {
    "num": 1,
    "question_en": "What does 'UnsafeRawBufferPointer.assumingMemoryBound' method do?",
    "question_hi": "'UnsafeRawBufferPointer.assumingMemoryBound' मेथड क्या करता है?",
    "options_en": ["Assumes memory is bound to type", "Changes memory binding", "Allocates memory", "Deallocates memory"],
    "options_hi": ["मेमोरी टाइप से बाउंड है ऐसा मानता है", "मेमोरी बाइंडिंग बदलता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Assumes memory is bound to type",
    "answer_hi": "मेमोरी टाइप से बाउंड है ऐसा मानता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which protocol provides 'callAsFunction' method capability?",
    "question_hi": "कौन सा प्रोटोकॉल 'callAsFunction' मेथड कैपेबिलिटी प्रोवाइड करता है?",
    "options_en": ["Callable", "FunctionConvertible", "DynamicCallable", "ExpressibleByFunctionCall"],
    "options_hi": ["Callable", "FunctionConvertible", "DynamicCallable", "ExpressibleByFunctionCall"],
    "answer_en": "Callable",
    "answer_hi": "Callable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the purpose of '@resultBuilder' attribute in Swift?",
    "question_hi": "Swift में '@resultBuilder' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Domain-specific language builder", "Result type builder", "Function builder", "View builder"],
    "options_hi": ["डोमेन-स्पेसिफिक लैंग्वेज बिल्डर", "रिजल्ट टाइप बिल्डर", "फंक्शन बिल्डर", "व्यू बिल्डर"],
    "answer_en": "Domain-specific language builder",
    "answer_hi": "डोमेन-स्पेसिफिक लैंग्वेज बिल्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'MemoryLayout.offset' property provide?",
    "question_hi": "'MemoryLayout.offset' प्रॉपर्टी क्या प्रोवाइड करती है?",
    "options_en": ["Byte offset of property", "Memory size", "Alignment", "Stride"],
    "options_hi": ["प्रॉपर्टी का बाइट ऑफसेट", "मेमोरी साइज", "अलाइनमेंट", "स्ट्राइड"],
    "answer_en": "Byte offset of property",
    "answer_hi": "प्रॉपर्टी का बाइट ऑफसेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method creates an 'UnsafeBufferPointer' from raw memory?",
    "question_hi": "कौन सी मेथड रॉ मेमोरी से 'UnsafeBufferPointer' क्रिएट करती है?",
    "options_en": ["UnsafeBufferPointer(start:count:)", "fromRawMemory()", "createBuffer()", "allocateBuffer()"],
    "options_hi": ["UnsafeBufferPointer(start:count:)", "fromRawMemory()", "createBuffer()", "allocateBuffer()"],
    "answer_en": "UnsafeBufferPointer(start:count:)",
    "answer_hi": "UnsafeBufferPointer(start:count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does '@dynamicCallable' attribute enable?",
    "question_hi": "'@dynamicCallable' एट्रिब्यूट क्या एनेबल करता है?",
    "options_en": ["Dynamic method call syntax", "Static method calls", "Function calls", "Closure calls"],
    "options_hi": ["डायनामिक मेथड कॉल सिंटैक्स", "स्टेटिक मेथड कॉल्स", "फंक्शन कॉल्स", "क्लोजर कॉल्स"],
    "answer_en": "Dynamic method call syntax",
    "answer_hi": "डायनामिक मेथड कॉल सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'UnsafeMutableRawPointer.initializeMemory' used for?",
    "question_hi": "'UnsafeMutableRawPointer.initializeMemory' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Initializes raw memory with values", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी को वैल्यूज से इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes raw memory with values",
    "answer_hi": "रॉ मेमोरी को वैल्यूज से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which protocol enables 'forEach' method on sequences?",
    "question_hi": "कौन सा प्रोटोकॉल सीक्वेंस पर 'forEach' मेथड एनेबल करता है?",
    "options_en": ["Sequence", "Collection", "IteratorProtocol", "Iterable"],
    "options_hi": ["Sequence", "Collection", "IteratorProtocol", "Iterable"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does '@differentiable' attribute indicate?",
    "question_hi": "'@differentiable' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["Function supports automatic differentiation", "Function is differentiable", "Math function", "Numeric function"],
    "options_hi": ["फंक्शन ऑटोमेटिक डिफरेंशिएशन सपोर्ट करता है", "फंक्शन डिफरेंशिएबल है", "मैथ फंक्शन", "न्यूमेरिक फंक्शन"],
    "answer_en": "Function supports automatic differentiation",
    "answer_hi": "फंक्शन ऑटोमेटिक डिफरेंशिएशन सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'UnsafePointer.withMemoryRebound' used for?",
    "question_hi": "'UnsafePointer.withMemoryRebound' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Temporary type rebinding of memory", "Permanent type change", "Memory allocation", "Buffer creation"],
    "options_hi": ["मेमोरी का टेम्पररी टाइप रीबाइंडिंग", "पर्मानेंट टाइप चेंज", "मेमोरी एलोकेशन", "बफर क्रिएशन"],
    "answer_en": "Temporary type rebinding of memory",
    "answer_hi": "मेमोरी का टेम्पररी टाइप रीबाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which property provides the alignment of a type in memory?",
    "question_hi": "कौन सी प्रॉपर्टी टाइप का मेमोरी में अलाइनमेंट प्रोवाइड करती है?",
    "options_en": ["MemoryLayout.alignment", "MemoryLayout.offset", "MemoryLayout.stride", "MemoryLayout.size"],
    "options_hi": ["MemoryLayout.alignment", "MemoryLayout.offset", "MemoryLayout.stride", "MemoryLayout.size"],
    "answer_en": "MemoryLayout.alignment",
    "answer_hi": "MemoryLayout.alignment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does '@autoclosure' attribute do to parameters?",
    "question_hi": "'@autoclosure' एट्रिब्यूट पैरामीटर्स को क्या करता है?",
    "options_en": ["Automatically creates closure", "Makes parameter closure", "Removes closure", "Converts to function"],
    "options_hi": ["ऑटोमेटिकली क्लोजर क्रिएट करता है", "पैरामीटर को क्लोजर बनाता है", "क्लोजर रिमूव करता है", "फंक्शन में कन्वर्ट करता है"],
    "answer_en": "Automatically creates closure",
    "answer_hi": "ऑटोमेटिकली क्लोजर क्रिएट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'UnsafeRawPointer.load' method used for?",
    "question_hi": "'UnsafeRawPointer.load' मेथड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Loads value from raw memory", "Stores value", "Allocates memory", "Deallocates memory"],
    "options_hi": ["रॉ मेमोरी से वैल्यू लोड करता है", "वैल्यू स्टोर करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Loads value from raw memory",
    "answer_hi": "रॉ मेमोरी से वैल्यू लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which protocol provides 'makeIterator' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'makeIterator' मेथड प्रोवाइड करता है?",
    "options_en": ["Sequence", "Collection", "IteratorProtocol", "Iterable"],
    "options_hi": ["Sequence", "Collection", "IteratorProtocol", "Iterable"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does '@convention' attribute specify?",
    "question_hi": "'@convention' एट्रिब्यूट क्या स्पेसिफाई करता है?",
    "options_en": ["Function calling convention", "Function type", "Return type", "Parameter convention"],
    "options_hi": ["फंक्शन कॉलिंग कन्वेंशन", "फंक्शन टाइप", "रिटर्न टाइप", "पैरामीटर कन्वेंशन"],
    "answer_en": "Function calling convention",
    "answer_hi": "फंक्शन कॉलिंग कन्वेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'UnsafeMutablePointer.initialize' method for?",
    "question_hi": "'UnsafeMutablePointer.initialize' मेथड किस लिए है?",
    "options_en": ["Initializes memory with value", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["मेमोरी को वैल्यू से इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes memory with value",
    "answer_hi": "मेमोरी को वैल्यू से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which property provides stride of a type in memory?",
    "question_hi": "कौन सी प्रॉपर्टी टाइप का मेमोरी में स्ट्राइड प्रोवाइड करती है?",
    "options_en": ["MemoryLayout.stride", "MemoryLayout.alignment", "MemoryLayout.size", "MemoryLayout.offset"],
    "options_hi": ["MemoryLayout.stride", "MemoryLayout.alignment", "MemoryLayout.size", "MemoryLayout.offset"],
    "answer_en": "MemoryLayout.stride",
    "answer_hi": "MemoryLayout.stride",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does '@noDerivative' attribute do?",
    "question_hi": "'@noDerivative' एट्रिब्यूट क्या करता है?",
    "options_en": ["Excludes from automatic differentiation", "Includes in differentiation", "Prevents function", "Enables derivative"],
    "options_hi": ["ऑटोमेटिक डिफरेंशिएशन से एक्सक्लूड करता है", "डिफरेंशिएशन में इंक्लूड करता है", "फंक्शन प्रिवेंट करता है", "डेरिवेटिव एनेबल करता है"],
    "answer_en": "Excludes from automatic differentiation",
    "answer_hi": "ऑटोमेटिक डिफरेंशिएशन से एक्सक्लूड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'UnsafeRawPointer.bindMemory' used for?",
    "question_hi": "'UnsafeRawPointer.bindMemory' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Binds raw memory to type", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी को टाइप से बाइंड करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Binds raw memory to type",
    "answer_hi": "रॉ मेमोरी को टाइप से बाइंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which protocol enables subscript access with indices?",
    "question_hi": "कौन सा प्रोटोकॉल इंडिसेज के साथ सबस्क्रिप्ट एक्सेस एनेबल करता है?",
    "options_en": ["Collection", "Sequence", "Indexable", "Subscriptable"],
    "options_hi": ["Collection", "Sequence", "Indexable", "Subscriptable"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does '@_specialize(exported: true)' attribute do?",
    "question_hi": "'@_specialize(exported: true)' एट्रिब्यूट क्या करता है?",
    "options_en": ["Exports specialized version", "Hides specialization", "Creates private specialization", "Removes specialization"],
    "options_hi": ["स्पेशलाइज़्ड वर्जन एक्सपोर्ट करता है", "स्पेशलाइज़ेशन हाइड करता है", "प्राइवेट स्पेशलाइज़ेशन क्रिएट करता है", "स्पेशलाइज़ेशन रिमूव करता है"],
    "answer_en": "Exports specialized version",
    "answer_hi": "स्पेशलाइज़्ड वर्जन एक्सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'UnsafeMutableRawPointer.storeBytes' used for?",
    "question_hi": "'UnsafeMutableRawPointer.storeBytes' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Stores bytes in raw memory", "Loads bytes", "Allocates memory", "Deallocates memory"],
    "options_hi": ["रॉ मेमोरी में बाइट्स स्टोर करता है", "बाइट्स लोड करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Stores bytes in raw memory",
    "answer_hi": "रॉ मेमोरी में बाइट्स स्टोर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which property provides the size of a type in memory?",
    "question_hi": "कौन सी प्रॉपर्टी टाइप का मेमोरी में साइज प्रोवाइड करती है?",
    "options_en": ["MemoryLayout.size", "MemoryLayout.stride", "MemoryLayout.alignment", "MemoryLayout.offset"],
    "options_hi": ["MemoryLayout.size", "MemoryLayout.stride", "MemoryLayout.alignment", "MemoryLayout.offset"],
    "answer_en": "MemoryLayout.size",
    "answer_hi": "MemoryLayout.size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does '@inlinable' attribute allow?",
    "question_hi": "'@inlinable' एट्रिब्यूट क्या अलाउ करता है?",
    "options_en": ["Inline expansion across modules", "Only within module", "No inlining", "Conditional inlining"],
    "options_hi": ["मॉड्यूल्स के बीच इनलाइन एक्सपेंशन", "केवल मॉड्यूल के अंदर", "कोई इनलाइनिंग नहीं", "कंडीशनल इनलाइनिंग"],
    "answer_en": "Inline expansion across modules",
    "answer_hi": "मॉड्यूल्स के बीच इनलाइन एक्सपेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'UnsafePointer.pointee' property?",
    "question_hi": "'UnsafePointer.pointee' प्रॉपर्टी क्या है?",
    "options_en": ["Value pointed to by pointer", "Pointer address", "Memory size", "Allocation size"],
    "options_hi": ["पॉइंटर द्वारा पॉइंट की गई वैल्यू", "पॉइंटर एड्रेस", "मेमोरी साइज", "एलोकेशन साइज"],
    "answer_en": "Value pointed to by pointer",
    "answer_hi": "पॉइंटर द्वारा पॉइंट की गई वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which protocol provides 'underestimatedCount' property?",
    "question_hi": "कौन सा प्रोटोकॉल 'underestimatedCount' प्रॉपर्टी प्रोवाइड करता है?",
    "options_en": ["Sequence", "Collection", "Countable", "Estimatable"],
    "options_hi": ["Sequence", "Collection", "Countable", "Estimatable"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does '@_transparent' do differently from '@inline(__always)'?",
    "question_hi": "'@_transparent' '@inline(__always)' से अलग क्या करता है?",
    "options_en": ["More aggressive inlining", "Less aggressive", "Same", "No inlining"],
    "options_hi": ["ज्यादा एग्रेसिव इनलाइनिंग", "कम एग्रेसिव", "समान", "कोई इनलाइनिंग नहीं"],
    "answer_en": "More aggressive inlining",
    "answer_hi": "ज्यादा एग्रेसिव इनलाइनिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'UnsafeMutableRawPointer.allocate' used for?",
    "question_hi": "'UnsafeMutableRawPointer.allocate' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Allocates raw memory", "Deallocates memory", "Initializes memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी इनिशियलाइज़ करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Allocates raw memory",
    "answer_hi": "रॉ मेमोरी एलोकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which property provides count of elements in collection?",
    "question_hi": "कौन सी प्रॉपर्टी कलेक्शन में एलिमेंट्स की काउंट प्रोवाइड करती है?",
    "options_en": ["count", "length", "size", "capacity"],
    "options_hi": ["count", "length", "size", "capacity"],
    "answer_en": "count",
    "answer_hi": "count",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does '@frozen' do for structs?",
    "question_hi": "'@frozen' स्ट्रक्चर्स के लिए क्या करता है?",
    "options_en": ["Prevents adding new stored properties", "Allows property addition", "Makes immutable", "Enables mutation"],
    "options_hi": ["न्यू स्टोर्ड प्रॉपर्टीज ऐड करने से रोकता है", "प्रॉपर्टी ऐडिशन अलाउ करता है", "इम्यूटेबल बनाता है", "म्यूटेशन एनेबल करता है"],
    "answer_en": "Prevents adding new stored properties",
    "answer_hi": "न्यू स्टोर्ड प्रॉपर्टीज ऐड करने से रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'UnsafeBufferPointer.baseAddress' property?",
    "question_hi": "'UnsafeBufferPointer.baseAddress' प्रॉपर्टी क्या है?",
    "options_en": ["Pointer to first element", "Buffer size", "Element count", "Memory address"],
    "options_hi": ["फर्स्ट एलिमेंट का पॉइंटर", "बफर साइज", "एलिमेंट काउंट", "मेमोरी एड्रेस"],
    "answer_en": "Pointer to first element",
    "answer_hi": "फर्स्ट एलिमेंट का पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which protocol provides 'startIndex' and 'endIndex' properties?",
    "question_hi": "कौन सा प्रोटोकॉल 'startIndex' और 'endIndex' प्रॉपर्टीज प्रोवाइड करता है?",
    "options_en": ["Collection", "Sequence", "Indexable", "RangeReplaceableCollection"],
    "options_hi": ["Collection", "Sequence", "Indexable", "RangeReplaceableCollection"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does '@_alwaysEmitIntoClient' ensure?",
    "question_hi": "'@_alwaysEmitIntoClient' क्या एनश्योर करता है?",
    "options_en": ["Code always emitted into client", "Never emitted", "Conditional emission", "Optional emission"],
    "options_hi": ["कोड हमेशा क्लाइंट में एमिट होता है", "कभी एमिट नहीं होता", "कंडीशनल एमिशन", "ऑप्शनल एमिशन"],
    "answer_en": "Code always emitted into client",
    "answer_hi": "कोड हमेशा क्लाइंट में एमिट होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'UnsafeRawBufferPointer.load' method for?",
    "question_hi": "'UnsafeRawBufferPointer.load' मेथड किस लिए है?",
    "options_en": ["Loads value from raw buffer", "Stores value", "Allocates buffer", "Deallocates buffer"],
    "options_hi": ["रॉ बफर से वैल्यू लोड करता है", "वैल्यू स्टोर करता है", "बफर एलोकेट करता है", "बफर डीलोकेट करता है"],
    "answer_en": "Loads value from raw buffer",
    "answer_hi": "रॉ बफर से वैल्यू लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which property indicates if collection is empty?",
    "question_hi": "कौन सी प्रॉपर्टी इंडिकेट करती है कि कलेक्शन खाली है या नहीं?",
    "options_en": ["isEmpty", "isZero", "hasNoElements", "empty"],
    "options_hi": ["isEmpty", "isZero", "hasNoElements", "empty"],
    "answer_en": "isEmpty",
    "answer_hi": "isEmpty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does '@_hasInitialValue' indicate about properties?",
    "question_hi": "'@_hasInitialValue' प्रॉपर्टीज के बारे में क्या इंडिकेट करता है?",
    "options_en": ["Property has default value", "No default value", "Required value", "Optional value"],
    "options_hi": ["प्रॉपर्टी में डिफ़ॉल्ट वैल्यू है", "कोई डिफ़ॉल्ट वैल्यू नहीं", "रिक्वायर्ड वैल्यू", "ऑप्शनल वैल्यू"],
    "answer_en": "Property has default value",
    "answer_hi": "प्रॉपर्टी में डिफ़ॉल्ट वैल्यू है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'UnsafeMutableBufferPointer.baseAddress'?",
    "question_hi": "'UnsafeMutableBufferPointer.baseAddress' क्या है?",
    "options_en": ["Mutable pointer to first element", "Immutable pointer", "Buffer size", "Element count"],
    "options_hi": ["फर्स्ट एलिमेंट का म्यूटेबल पॉइंटर", "इम्यूटेबल पॉइंटर", "बफर साइज", "एलिमेंट काउंट"],
    "answer_en": "Mutable pointer to first element",
    "answer_hi": "फर्स्ट एलिमेंट का म्यूटेबल पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which protocol provides 'indices' property?",
    "question_hi": "कौन सा प्रोटोकॉल 'indices' प्रॉपर्टी प्रोवाइड करता है?",
    "options_en": ["Collection", "Sequence", "Indexable", "RandomAccessCollection"],
    "options_hi": ["Collection", "Sequence", "Indexable", "RandomAccessCollection"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does '@_implements(Protocol, requirement)' do?",
    "question_hi": "'@_implements(Protocol, requirement)' क्या करता है?",
    "options_en": ["Implements protocol requirement with different name", "Creates new requirement", "Removes requirement", "Hides implementation"],
    "options_hi": ["अलग नाम से प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंट करता है", "नई रिक्वायरमेंट क्रिएट करता है", "रिक्वायरमेंट रिमूव करता है", "इम्प्लीमेंटेशन हाइड करता है"],
    "answer_en": "Implements protocol requirement with different name",
    "answer_hi": "अलग नाम से प्रोटोकॉल रिक्वायरमेंट इम्प्लीमेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'UnsafeRawPointer.assumingMemoryBound' used for?",
    "question_hi": "'UnsafeRawPointer.assumingMemoryBound' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Assumes memory bound to specific type", "Changes binding", "Allocates memory", "Deallocates memory"],
    "options_hi": ["मेमोरी स्पेसिफिक टाइप से बाउंड है ऐसा मानता है", "बाइंडिंग बदलता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Assumes memory bound to specific type",
    "answer_hi": "मेमोरी स्पेसिफिक टाइप से बाउंड है ऐसा मानता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method creates a slice of collection?",
    "question_hi": "कौन सी मेथड कलेक्शन का स्लाइस क्रिएट करती है?",
    "options_en": ["slice(at:)", "subrange(_:)", "range(_:)", "segment(_:)"],
    "options_hi": ["slice(at:)", "subrange(_:)", "range(_:)", "segment(_:)"],
    "answer_en": "slice(at:)",
    "answer_hi": "slice(at:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does '@_dynamicReplacement(for: function)' do?",
    "question_hi": "'@_dynamicReplacement(for: function)' क्या करता है?",
    "options_en": ["Replaces function at runtime", "Replaces at compile time", "Creates new function", "Removes function"],
    "options_hi": ["रनटाइम पर फंक्शन रिप्लेस करता है", "कंपाइल टाइम पर रिप्लेस करता है", "नया फंक्शन क्रिएट करता है", "फंक्शन रिमूव करता है"],
    "answer_en": "Replaces function at runtime",
    "answer_hi": "रनटाइम पर फंक्शन रिप्लेस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'UnsafeMutablePointer.deallocate' method for?",
    "question_hi": "'UnsafeMutablePointer.deallocate' मेथड किस लिए है?",
    "options_en": ["Deallocates memory", "Allocates memory", "Initializes memory", "Copies memory"],
    "options_hi": ["मेमोरी डीलोकेट करता है", "मेमोरी एलोकेट करता है", "मेमोरी इनिशियलाइज़ करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Deallocates memory",
    "answer_hi": "मेमोरी डीलोकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which protocol provides 'first' and 'last' properties?",
    "question_hi": "कौन सा प्रोटोकॉल 'first' और 'last' प्रॉपर्टीज प्रोवाइड करता है?",
    "options_en": ["BidirectionalCollection", "Collection", "Sequence", "RandomAccessCollection"],
    "options_hi": ["BidirectionalCollection", "Collection", "Sequence", "RandomAccessCollection"],
    "answer_en": "BidirectionalCollection",
    "answer_hi": "BidirectionalCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does '@_nonoverride' prevent?",
    "question_hi": "'@_nonoverride' क्या प्रिवेंट करता है?",
    "options_en": ["Prevents method overriding", "Allows overriding", "Forces override", "Enables override"],
    "options_hi": ["मेथड ओवरराइडिंग प्रिवेंट करता है", "ओवरराइडिंग अलाउ करता है", "फोर्स ओवरराइड", "ओवरराइड एनेबल करता है"],
    "answer_en": "Prevents method overriding",
    "answer_hi": "मेथड ओवरराइडिंग प्रिवेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'UnsafeBufferPointer.count' property?",
    "question_hi": "'UnsafeBufferPointer.count' प्रॉपर्टी क्या है?",
    "options_en": ["Number of elements in buffer", "Buffer size in bytes", "Element size", "Memory address"],
    "options_hi": ["बफर में एलिमेंट्स की संख्या", "बाइट्स में बफर साइज", "एलिमेंट साइज", "मेमोरी एड्रेस"],
    "answer_en": "Number of elements in buffer",
    "answer_hi": "बफर में एलिमेंट्स की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method advances index by n positions?",
    "question_hi": "कौन सी मेथड इंडेक्स को n पोजीशन आगे बढ़ाती है?",
    "options_en": ["index(_:offsetBy:)", "advance(by:)", "move(by:)", "shift(by:)"],
    "options_hi": ["index(_:offsetBy:)", "advance(by:)", "move(by:)", "shift(by:)"],
    "answer_en": "index(_:offsetBy:)",
    "answer_hi": "index(_:offsetBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does '@_disfavoredOverload' mark?",
    "question_hi": "'@_disfavoredOverload' क्या मार्क करता है?",
    "options_en": ["Less preferred overload", "Preferred overload", "Required overload", "Hidden overload"],
    "options_hi": ["कम प्रिफर्ड ओवरलोड", "प्रिफर्ड ओवरलोड", "रिक्वायर्ड ओवरलोड", "हिडन ओवरलोड"],
    "answer_en": "Less preferred overload",
    "answer_hi": "कम प्रिफर्ड ओवरलोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'UnsafeMutableRawPointer.copyMemory' used for?",
    "question_hi": "'UnsafeMutableRawPointer.copyMemory' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Copies memory from source", "Moves memory", "Allocates memory", "Deallocates memory"],
    "options_hi": ["सोर्स से मेमोरी कॉपी करता है", "मेमोरी मूव करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Copies memory from source",
    "answer_hi": "सोर्स से मेमोरी कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which protocol provides 'distance' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'distance' मेथड प्रोवाइड करता है?",
    "options_en": ["Collection", "BidirectionalCollection", "RandomAccessCollection", "Indexable"],
    "options_hi": ["Collection", "BidirectionalCollection", "RandomAccessCollection", "Indexable"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@_implicitlyUnwrappedOptional' create?",
    "question_hi": "'@_implicitlyUnwrappedOptional' क्या क्रिएट करता है?",
    "options_en": ["Implicitly unwrapped optional type", "Regular optional", "Non-optional", "Forced optional"],
    "options_hi": ["इम्प्लिसिटली अनरैप्ड ऑप्शनल टाइप", "रेगुलर ऑप्शनल", "नॉन-ऑप्शनल", "फोर्स्ड ऑप्शनल"],
    "answer_en": "Implicitly unwrapped optional type",
    "answer_hi": "इम्प्लिसिटली अनरैप्ड ऑप्शनल टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'UnsafeRawBufferPointer.bindMemory' method for?",
    "question_hi": "'UnsafeRawBufferPointer.bindMemory' मेथड किस लिए है?",
    "options_en": ["Binds raw buffer memory to type", "Allocates buffer", "Deallocates buffer", "Copies buffer"],
    "options_hi": ["रॉ बफर मेमोरी को टाइप से बाइंड करता है", "बफर एलोकेट करता है", "बफर डीलोकेट करता है", "बफर कॉपी करता है"],
    "answer_en": "Binds raw buffer memory to type",
    "answer_hi": "रॉ बफर मेमोरी को टाइप से बाइंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which method returns index offset by distance?",
    "question_hi": "कौन सी मेथड डिस्टेंस द्वारा ऑफसेट किया गया इंडेक्स रिटर्न करती है?",
    "options_en": ["index(_:offsetBy:)", "offset(_:by:)", "moveIndex(_:by:)", "shiftIndex(_:by:)"],
    "options_hi": ["index(_:offsetBy:)", "offset(_:by:)", "moveIndex(_:by:)", "shiftIndex(_:by:)"],
    "answer_en": "index(_:offsetBy:)",
    "answer_hi": "index(_:offsetBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does '@_marker' indicate for protocols?",
    "question_hi": "प्रोटोकॉल्स के लिए '@_marker' क्या इंडिकेट करता है?",
    "options_en": ["Marker protocol with no requirements", "Protocol with requirements", "Deprecated protocol", "New protocol"],
    "options_hi": ["बिना रिक्वायरमेंट्स वाला मार्कर प्रोटोकॉल", "रिक्वायरमेंट्स वाला प्रोटोकॉल", "डिप्रिकेटेड प्रोटोकॉल", "नया प्रोटोकॉल"],
    "answer_en": "Marker protocol with no requirements",
    "answer_hi": "बिना रिक्वायरमेंट्स वाला मार्कर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'UnsafeMutablePointer.move' method for?",
    "question_hi": "'UnsafeMutablePointer.move' मेथड किस लिए है?",
    "options_en": ["Moves value from memory", "Copies value", "Allocates memory", "Deallocates memory"],
    "options_hi": ["मेमोरी से वैल्यू मूव करता है", "वैल्यू कॉपी करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Moves value from memory",
    "answer_hi": "मेमोरी से वैल्यू मूव करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which protocol provides 'formIndex' methods?",
    "question_hi": "कौन सा प्रोटोकॉल 'formIndex' मेथड्स प्रोवाइड करता है?",
    "options_en": ["Collection", "BidirectionalCollection", "MutableCollection", "RangeReplaceableCollection"],
    "options_hi": ["Collection", "BidirectionalCollection", "MutableCollection", "RangeReplaceableCollection"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does '@_specialize(extension:)' target?",
    "question_hi": "'@_specialize(extension:)' क्या टार्गेट करता है?",
    "options_en": ["Extension methods", "Class methods", "Static methods", "Instance methods"],
    "options_hi": ["एक्सटेंशन मेथड्स", "क्लास मेथड्स", "स्टेटिक मेथड्स", "इंस्टेंस मेथड्स"],
    "answer_en": "Extension methods",
    "answer_hi": "एक्सटेंशन मेथड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'UnsafeRawPointer.deallocate' method?",
    "question_hi": "'UnsafeRawPointer.deallocate' मेथड क्या है?",
    "options_en": ["Deallocates raw memory", "Allocates memory", "Initializes memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी डीलोकेट करता है", "मेमोरी एलोकेट करता है", "मेमोरी इनिशियलाइज़ करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Deallocates raw memory",
    "answer_hi": "रॉ मेमोरी डीलोकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which method checks if index is valid?",
    "options_en": ["index(_:offsetBy:limitedBy:)", "isValidIndex(_:)", "checkIndex(_:)", "validateIndex(_:)"],
    "options_hi": ["index(_:offsetBy:limitedBy:)", "isValidIndex(_:)", "checkIndex(_:)", "validateIndex(_:)"],
    "answer_en": "index(_:offsetBy:limitedBy:)",
    "question_hi": "कौन सी मेथड चेक करती है कि इंडेक्स वैलिड है या नहीं?",
    "answer_hi": "index(_:offsetBy:limitedBy:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does '@_hasMissingDesignatedInitializers' mean?",
    "question_hi": "'@_hasMissingDesignatedInitializers' का क्या अर्थ है?",
    "options_en": ["Class missing some designated initializers", "Has all initializers", "Extra initializers", "No initializers"],
    "options_hi": ["क्लास में कुछ डिज़िग्नेटेड इनिशियलाइज़र्स मिसिंग हैं", "सभी इनिशियलाइज़र्स हैं", "एक्स्ट्रा इनिशियलाइज़र्स", "कोई इनिशियलाइज़र्स नहीं"],
    "answer_en": "Class missing some designated initializers",
    "answer_hi": "क्लास में कुछ डिज़िग्नेटेड इनिशियलाइज़र्स मिसिंग हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'UnsafeMutableRawBufferPointer.copyBytes' for?",
    "question_hi": "'UnsafeMutableRawBufferPointer.copyBytes' किस लिए है?",
    "options_en": ["Copies bytes to buffer", "Loads bytes", "Allocates buffer", "Deallocates buffer"],
    "options_hi": ["बाइट्स को बफर में कॉपी करता है", "बाइट्स लोड करता है", "बफर एलोकेट करता है", "बफर डीलोकेट करता है"],
    "answer_en": "Copies bytes to buffer",
    "answer_hi": "बाइट्स को बफर में कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which protocol provides 'subscript(bounds:)' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'subscript(bounds:)' मेथड प्रोवाइड करता है?",
    "options_en": ["Collection", "MutableCollection", "RangeReplaceableCollection", "RandomAccessCollection"],
    "options_hi": ["Collection", "MutableCollection", "RangeReplaceableCollection", "RandomAccessCollection"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_specialize(kind: partial)' do?",
    "question_hi": "'@_specialize(kind: partial)' क्या करता है?",
    "options_en": ["Partial specialization", "Full specialization", "No specialization", "Generic specialization"],
    "options_hi": ["पार्शियल स्पेशलाइज़ेशन", "फुल स्पेशलाइज़ेशन", "कोई स्पेशलाइज़ेशन नहीं", "जेनेरिक स्पेशलाइज़ेशन"],
    "answer_en": "Partial specialization",
    "answer_hi": "पार्शियल स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'UnsafePointer.withMemoryRebound' method?",
    "question_hi": "'UnsafePointer.withMemoryRebound' मेथड क्या है?",
    "options_en": ["Temporarily rebinds memory to different type", "Permanently changes type", "Allocates memory", "Deallocates memory"],
    "options_hi": ["टेम्पररिली मेमोरी को अलग टाइप से रीबाइंड करता है", "पर्मानेंटली टाइप चेंज करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Temporarily rebinds memory to different type",
    "answer_hi": "टेम्पररिली मेमोरी को अलग टाइप से रीबाइंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which method returns distance between indices?",
    "question_hi": "कौन सी मेथड इंडिसेज के बीच की दूरी रिटर्न करती है?",
    "options_en": ["distance(from:to:)", "measure(from:to:)", "space(from:to:)", "gap(from:to:)"],
    "options_hi": ["distance(from:to:)", "measure(from:to:)", "space(from:to:)", "gap(from:to:)"],
    "answer_en": "distance(from:to:)",
    "answer_hi": "distance(from:to:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does '@_implicitSelfCapture' enable?",
    "question_hi": "'@_implicitSelfCapture' क्या एनेबल करता है?",
    "options_en": ["Implicit self capture in closures", "Explicit self capture", "No capture", "Weak capture"],
    "options_hi": ["क्लोजर्स में इम्प्लिसिट सेल्फ कैप्चर", "एक्सप्लिसिट सेल्फ कैप्चर", "कोई कैप्चर नहीं", "वीक कैप्चर"],
    "answer_en": "Implicit self capture in closures",
    "answer_hi": "क्लोजर्स में इम्प्लिसिट सेल्फ कैप्चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'UnsafeMutableRawPointer.initializeMemory' method?",
    "question_hi": "'UnsafeMutableRawPointer.initializeMemory' मेथड क्या है?",
    "options_en": ["Initializes raw memory with repeating value", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes raw memory with repeating value",
    "answer_hi": "रॉ मेमोरी को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which protocol provides 'reserveCapacity' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'reserveCapacity' मेथड प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "Collection", "MutableCollection", "RandomAccessCollection"],
    "options_hi": ["RangeReplaceableCollection", "Collection", "MutableCollection", "RandomAccessCollection"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does '@_semantics(\"array.get_count\")' specify?",
    "question_hi": "'@_semantics(\"array.get_count\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array count getter semantics", "Array access semantics", "Array mutation semantics", "Array creation semantics"],
    "options_hi": ["ऐरे काउंट गेटर सेमेन्टिक्स", "ऐरे एक्सेस सेमेन्टिक्स", "ऐरे म्यूटेशन सेमेन्टिक्स", "ऐरे क्रिएशन सेमेन्टिक्स"],
    "answer_en": "Array count getter semantics",
    "answer_hi": "ऐरे काउंट गेटर सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'UnsafeBufferPointer.first' property?",
    "question_hi": "'UnsafeBufferPointer.first' प्रॉपर्टी क्या है?",
    "options_en": ["First element in buffer", "Buffer address", "Element count", "Memory size"],
    "options_hi": ["बफर में पहला एलिमेंट", "बफर एड्रेस", "एलिमेंट काउंट", "मेमोरी साइज"],
    "answer_en": "First element in buffer",
    "answer_hi": "बफर में पहला एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which method replaces elements in range?",
    "question_hi": "कौन सी मेथड रेंज में एलिमेंट्स रिप्लेस करती है?",
    "options_en": ["replaceSubrange(_:with:)", "substitute(_:with:)", "swap(_:with:)", "exchange(_:with:)"],
    "options_hi": ["replaceSubrange(_:with:)", "substitute(_:with:)", "swap(_:with:)", "exchange(_:with:)"],
    "answer_en": "replaceSubrange(_:with:)",
    "answer_hi": "replaceSubrange(_:with:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does '@_semantics(\"string.makeUTF8\")' indicate?",
    "question_hi": "'@_semantics(\"string.makeUTF8\")' क्या इंडिकेट करता है?",
    "options_en": ["String UTF-8 creation semantics", "String comparison semantics", "String concatenation semantics", "String encoding semantics"],
    "options_hi": ["स्ट्रिंग UTF-8 क्रिएशन सेमेन्टिक्स", "स्ट्रिंग कंपेरिजन सेमेन्टिक्स", "स्ट्रिंग कंकैटिनेशन सेमेन्टिक्स", "स्ट्रिंग एन्कोडिंग सेमेन्टिक्स"],
    "answer_en": "String UTF-8 creation semantics",
    "answer_hi": "स्ट्रिंग UTF-8 क्रिएशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'UnsafeMutableBufferPointer.first'?",
    "question_hi": "'UnsafeMutableBufferPointer.first' क्या है?",
    "options_en": ["Mutable first element in buffer", "Immutable first element", "Buffer address", "Element count"],
    "options_hi": ["बफर में म्यूटेबल पहला एलिमेंट", "इम्यूटेबल पहला एलिमेंट", "बफर एड्रेस", "एलिमेंट काउंट"],
    "answer_en": "Mutable first element in buffer",
    "answer_hi": "बफर में म्यूटेबल पहला एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which protocol provides 'append' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'append' मेथड प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "options_hi": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_semantics(\"typechecker.constant\")' mark?",
    "question_hi": "'@_semantics(\"typechecker.constant\")' क्या मार्क करता है?",
    "options_en": ["Constant value for type checker", "Variable value", "Mutable value", "Dynamic value"],
    "options_hi": ["टाइप चेकर के लिए कॉन्स्टेंट वैल्यू", "वेरिएबल वैल्यू", "म्यूटेबल वैल्यू", "डायनामिक वैल्यू"],
    "answer_en": "Constant value for type checker",
    "answer_hi": "टाइप चेकर के लिए कॉन्स्टेंट वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'UnsafeRawBufferPointer.baseAddress' property?",
    "question_hi": "'UnsafeRawBufferPointer.baseAddress' प्रॉपर्टी क्या है?",
    "options_en": ["Pointer to raw buffer start", "Buffer size", "Element count", "Memory alignment"],
    "options_hi": ["रॉ बफर स्टार्ट का पॉइंटर", "बफर साइज", "एलिमेंट काउंट", "मेमोरी अलाइनमेंट"],
    "answer_en": "Pointer to raw buffer start",
    "answer_hi": "रॉ बफर स्टार्ट का पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which method inserts contents of collection?",
    "question_hi": "कौन सी मेथड कलेक्शन के कंटेंट्स इन्सर्ट करती है?",
    "options_en": ["insert(contentsOf:at:)", "add(contentsOf:at:)", "put(contentsOf:at:)", "place(contentsOf:at:)"],
    "options_hi": ["insert(contentsOf:at:)", "add(contentsOf:at:)", "put(contentsOf:at:)", "place(contentsOf:at:)"],
    "answer_en": "insert(contentsOf:at:)",
    "answer_hi": "insert(contentsOf:at:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does '@_semantics(\"stdlib.\")' enable?",
    "question_hi": "'@_semantics(\"stdlib.\")' क्या एनेबल करता है?",
    "options_en": ["Standard library special handling", "Runtime library handling", "Core library handling", "Foundation handling"],
    "options_hi": ["स्टैंडर्ड लाइब्रेरी स्पेशल हैंडलिंग", "रनटाइम लाइब्रेरी हैंडलिंग", "कोर लाइब्रेरी हैंडलिंग", "फाउंडेशन हैंडलिंग"],
    "answer_en": "Standard library special handling",
    "answer_hi": "स्टैंडर्ड लाइब्रेरी स्पेशल हैंडलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'UnsafeMutableRawBufferPointer.baseAddress'?",
    "question_hi": "'UnsafeMutableRawBufferPointer.baseAddress' क्या है?",
    "options_en": ["Mutable pointer to raw buffer start", "Immutable pointer", "Buffer size", "Element count"],
    "options_hi": ["रॉ बफर स्टार्ट का म्यूटेबल पॉइंटर", "इम्यूटेबल पॉइंटर", "बफर साइज", "एलिमेंट काउंट"],
    "answer_en": "Mutable pointer to raw buffer start",
    "answer_hi": "रॉ बफर स्टार्ट का म्यूटेबल पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which protocol provides 'removeAll' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'removeAll' मेथड प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "options_hi": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does '@_semantics(\"optimize.sil.never\")' do?",
    "question_hi": "'@_semantics(\"optimize.sil.never\")' क्या करता है?",
    "options_en": ["Prevents SIL optimizations", "Enables optimizations", "Forces optimizations", "Suggests optimizations"],
    "options_hi": ["SIL ऑप्टिमाइज़ेशन प्रिवेंट करता है", "ऑप्टिमाइज़ेशन एनेबल करता है", "ऑप्टिमाइज़ेशन फोर्स करता है", "ऑप्टिमाइज़ेशन सजेस्ट करता है"],
    "answer_en": "Prevents SIL optimizations",
    "answer_hi": "SIL ऑप्टिमाइज़ेशन प्रिवेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'UnsafeBufferPointer.last' property?",
    "question_hi": "'UnsafeBufferPointer.last' प्रॉपर्टी क्या है?",
    "options_en": ["Last element in buffer", "First element", "Buffer size", "Element count"],
    "options_hi": ["बफर में आखिरी एलिमेंट", "पहला एलिमेंट", "बफर साइज", "एलिमेंट काउंट"],
    "answer_en": "Last element in buffer",
    "answer_hi": "बफर में आखिरी एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which method removes elements in range?",
    "question_hi": "कौन सी मेथड रेंज में एलिमेंट्स रिमूव करती है?",
    "options_en": ["removeSubrange(_:)", "deleteSubrange(_:)", "eraseSubrange(_:)", "clearSubrange(_:)"],
    "options_hi": ["removeSubrange(_:)", "deleteSubrange(_:)", "eraseSubrange(_:)", "clearSubrange(_:)"],
    "answer_en": "removeSubrange(_:)",
    "answer_hi": "removeSubrange(_:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does '@_semantics(\"array.make_mutable\")' specify?",
    "question_hi": "'@_semantics(\"array.make_mutable\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array mutable copy semantics", "Array creation semantics", "Array access semantics", "Array deletion semantics"],
    "options_hi": ["ऐरे म्यूटेबल कॉपी सेमेन्टिक्स", "ऐरे क्रिएशन सेमेन्टिक्स", "ऐरे एक्सेस सेमेन्टिक्स", "ऐरे डिलीशन सेमेन्टिक्स"],
    "answer_en": "Array mutable copy semantics",
    "answer_hi": "ऐरे म्यूटेबल कॉपी सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'UnsafeMutableBufferPointer.last'?",
    "question_hi": "'UnsafeMutableBufferPointer.last' क्या है?",
    "options_en": ["Mutable last element in buffer", "Immutable last element", "Buffer address", "Element count"],
    "options_hi": ["बफर में म्यूटेबल आखिरी एलिमेंट", "इम्यूटेबल आखिरी एलिमेंट", "बफर एड्रेस", "एलिमेंट काउंट"],
    "answer_en": "Mutable last element in buffer",
    "answer_hi": "बफर में म्यूटेबल आखिरी एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which protocol provides 'popLast' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'popLast' मेथड प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "MutableCollection", "BidirectionalCollection", "Collection"],
    "options_hi": ["RangeReplaceableCollection", "MutableCollection", "BidirectionalCollection", "Collection"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_semantics(\"string.concat\")' indicate?",
    "question_hi": "'@_semantics(\"string.concat\")' क्या इंडिकेट करता है?",
    "options_en": ["String concatenation semantics", "String comparison semantics", "String creation semantics", "String encoding semantics"],
    "options_hi": ["स्ट्रिंग कंकैटिनेशन सेमेन्टिक्स", "स्ट्रिंग कंपेरिजन सेमेन्टिक्स", "स्ट्रिंग क्रिएशन सेमेन्टिक्स", "स्ट्रिंग एन्कोडिंग सेमेन्टिक्स"],
    "answer_en": "String concatenation semantics",
    "answer_hi": "स्ट्रिंग कंकैटिनेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'UnsafeRawBufferPointer.count' property?",
    "question_hi": "'UnsafeRawBufferPointer.count' प्रॉपर्टी क्या है?",
    "options_en": ["Number of bytes in buffer", "Number of elements", "Buffer address", "Memory alignment"],
    "options_hi": ["बफर में बाइट्स की संख्या", "एलिमेंट्स की संख्या", "बफर एड्रेस", "मेमोरी अलाइनमेंट"],
    "answer_en": "Number of bytes in buffer",
    "answer_hi": "बफर में बाइट्स की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which method appends sequence to collection?",
    "question_hi": "कौन सी मेथड सीक्वेंस को कलेक्शन में ऐपेंड करती है?",
    "options_en": ["append(contentsOf:)", "add(contentsOf:)", "extend(contentsOf:)", "attach(contentsOf:)"],
    "options_hi": ["append(contentsOf:)", "add(contentsOf:)", "extend(contentsOf:)", "attach(contentsOf:)"],
    "answer_en": "append(contentsOf:)",
    "answer_hi": "append(contentsOf:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does '@_semantics(\"arc.retain\")' mark?",
    "question_hi": "'@_semantics(\"arc.retain\")' क्या मार्क करता है?",
    "options_en": ["ARC retain operation semantics", "ARC release semantics", "ARC copy semantics", "ARC autorelease semantics"],
    "options_hi": ["ARC रिटेन ऑपरेशन सेमेन्टिक्स", "ARC रिलीज़ सेमेन्टिक्स", "ARC कॉपी सेमेन्टिक्स", "ARC ऑटोरिलीज़ सेमेन्टिक्स"],
    "answer_en": "ARC retain operation semantics",
    "answer_hi": "ARC रिटेन ऑपरेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'UnsafeMutableRawBufferPointer.count'?",
    "question_hi": "'UnsafeMutableRawBufferPointer.count' क्या है?",
    "options_en": ["Number of bytes in mutable buffer", "Number of elements", "Buffer address", "Memory alignment"],
    "options_hi": ["म्यूटेबल बफर में बाइट्स की संख्या", "एलिमेंट्स की संख्या", "बफर एड्रेस", "मेमोरी अलाइनमेंट"],
    "answer_en": "Number of bytes in mutable buffer",
    "answer_hi": "म्यूटेबल बफर में बाइट्स की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which protocol provides 'removeFirst' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'removeFirst' मेथड प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "options_hi": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What does '@_semantics(\"array.subscript.read\")' specify?",
    "question_hi": "'@_semantics(\"array.subscript.read\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array subscript read semantics", "Array subscript write semantics", "Array creation semantics", "Array deletion semantics"],
    "options_hi": ["ऐरे सबस्क्रिप्ट रीड सेमेन्टिक्स", "ऐरे सबस्क्रिप्ट राइट सेमेन्टिक्स", "ऐरे क्रिएशन सेमेन्टिक्स", "ऐरे डिलीशन सेमेन्टिक्स"],
    "answer_en": "Array subscript read semantics",
    "answer_hi": "ऐरे सबस्क्रिप्ट रीड सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'UnsafeBufferPointer.index(after:)' method?",
    "question_hi": "'UnsafeBufferPointer.index(after:)' मेथड क्या है?",
    "options_en": ["Returns index after given index", "Returns index before", "Returns same index", "Returns first index"],
    "options_hi": ["दिए गए इंडेक्स के बाद का इंडेक्स रिटर्न करता है", "इंडेक्स से पहले का इंडेक्स रिटर्न करता है", "समान इंडेक्स रिटर्न करता है", "पहला इंडेक्स रिटर्न करता है"],
    "answer_en": "Returns index after given index",
    "answer_hi": "दिए गए इंडेक्स के बाद का इंडेक्स रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which method removes last element?",
    "question_hi": "कौन सी मेथड लास्ट एलिमेंट रिमूव करती है?",
    "options_en": ["removeLast()", "deleteLast()", "eraseLast()", "dropLast()"],
    "options_hi": ["removeLast()", "deleteLast()", "eraseLast()", "dropLast()"],
    "answer_en": "removeLast()",
    "answer_hi": "removeLast()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does '@_semantics(\"string.equals\")' indicate?",
    "question_hi": "'@_semantics(\"string.equals\")' क्या इंडिकेट करता है?",
    "options_en": ["String equality comparison semantics", "String concatenation semantics", "String creation semantics", "String encoding semantics"],
    "options_hi": ["स्ट्रिंग इक्वेलिटी कंपेरिजन सेमेन्टिक्स", "स्ट्रिंग कंकैटिनेशन सेमेन्टिक्स", "स्ट्रिंग क्रिएशन सेमेन्टिक्स", "स्ट्रिंग एन्कोडिंग सेमेन्टिक्स"],
    "answer_en": "String equality comparison semantics",
    "answer_hi": "स्ट्रिंग इक्वेलिटी कंपेरिजन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'UnsafeMutableBufferPointer.index(after:)'?",
    "question_hi": "'UnsafeMutableBufferPointer.index(after:)' क्या है?",
    "options_en": ["Mutable index after given index", "Immutable index", "Same index", "First index"],
    "options_hi": ["दिए गए इंडेक्स के बाद का म्यूटेबल इंडेक्स", "इम्यूटेबल इंडेक्स", "समान इंडेक्स", "पहला इंडेक्स"],
    "answer_en": "Mutable index after given index",
    "answer_hi": "दिए गए इंडेक्स के बाद का म्यूटेबल इंडेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which protocol provides 'removeAll(keepingCapacity:)'?",
    "question_hi": "कौन सा प्रोटोकॉल 'removeAll(keepingCapacity:)' प्रोवाइड करता है?",
    "options_en": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "options_hi": ["RangeReplaceableCollection", "MutableCollection", "Collection", "Sequence"],
    "answer_en": "RangeReplaceableCollection",
    "answer_hi": "RangeReplaceableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_semantics(\"array.subscript.modify\")' specify?",
    "question_hi": "'@_semantics(\"array.subscript.modify\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array subscript modify semantics", "Array subscript read semantics", "Array creation semantics", "Array deletion semantics"],
    "options_hi": ["ऐरे सबस्क्रिप्ट मॉडिफाई सेमेन्टिक्स", "ऐरे सबस्क्रिप्ट रीड सेमेन्टिक्स", "ऐरे क्रिएशन सेमेन्टिक्स", "ऐरे डिलीशन सेमेन्टिक्स"],
    "answer_en": "Array subscript modify semantics",
    "answer_hi": "ऐरे सबस्क्रिप्ट मॉडिफाई सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'UnsafeRawBufferPointer.index(after:)' method?",
    "question_hi": "'UnsafeRawBufferPointer.index(after:)' मेथड क्या है?",
    "options_en": ["Returns byte index after given index", "Returns element index", "Returns same index", "Returns first index"],
    "options_hi": ["दिए गए इंडेक्स के बाद का बाइट इंडेक्स रिटर्न करता है", "एलिमेंट इंडेक्स रिटर्न करता है", "समान इंडेक्स रिटर्न करता है", "पहला इंडेक्स रिटर्न करता है"],
    "answer_en": "Returns byte index after given index",
    "answer_hi": "दिए गए इंडेक्स के बाद का बाइट इंडेक्स रिटर्न करता है",
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