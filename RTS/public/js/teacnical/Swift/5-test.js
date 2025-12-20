const questions = [
  {
    "num": 1,
    "question_en": "What does 'UnsafeMutablePointer.initialize(repeating:count:)' method do?",
    "question_hi": "'UnsafeMutablePointer.initialize(repeating:count:)' मेथड क्या करता है?",
    "options_en": ["Initializes memory with repeating value", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["मेमोरी को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes memory with repeating value",
    "answer_hi": "मेमोरी को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which attribute makes a Swift declaration available only in Swift 5.3 or later?",
    "question_hi": "कौन सा एट्रिब्यूट Swift डिक्लेरेशन को केवल Swift 5.3 या बाद में उपलब्ध कराता है?",
    "options_en": ["@available(swift 5.3)", "@available(Swift 5.3)", "@swift(5.3)", "@version(5.3)"],
    "options_hi": ["@available(swift 5.3)", "@available(Swift 5.3)", "@swift(5.3)", "@version(5.3)"],
    "answer_en": "@available(swift 5.3)",
    "answer_hi": "@available(swift 5.3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'UnsafeRawBufferPointer.loadUnaligned' method used for?",
    "question_hi": "'UnsafeRawBufferPointer.loadUnaligned' मेथड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Loads value without alignment requirement", "Requires alignment", "Allocates memory", "Deallocates memory"],
    "options_hi": ["बिना अलाइनमेंट रिक्वायरमेंट के वैल्यू लोड करता है", "अलाइनमेंट रिक्वायर करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Loads value without alignment requirement",
    "answer_hi": "बिना अलाइनमेंट रिक्वायरमेंट के वैल्यू लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does '@_nonEphemeral' attribute enforce on parameters?",
    "question_hi": "'@_nonEphemeral' एट्रिब्यूट पैरामीटर्स पर क्या एनफोर्स करता है?",
    "options_en": ["Parameter must not be temporary", "Parameter must be temporary", "Optional parameter", "Required parameter"],
    "options_hi": ["पैरामीटर टेम्पररी नहीं होना चाहिए", "पैरामीटर टेम्पररी होना चाहिए", "ऑप्शनल पैरामीटर", "रिक्वायर्ड पैरामीटर"],
    "answer_en": "Parameter must not be temporary",
    "answer_hi": "पैरामीटर टेम्पररी नहीं होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method moves initialization from source to destination memory?",
    "question_hi": "कौन सी मेथड इनिशियलाइज़ेशन को सोर्स से डेस्टिनेशन मेमोरी में मूव करती है?",
    "options_en": ["UnsafeMutablePointer.moveInitialize(from:count:)", "copyInitialize()", "transferInitialize()", "shiftInitialize()"],
    "options_hi": ["UnsafeMutablePointer.moveInitialize(from:count:)", "copyInitialize()", "transferInitialize()", "shiftInitialize()"],
    "answer_en": "UnsafeMutablePointer.moveInitialize(from:count:)",
    "answer_hi": "UnsafeMutablePointer.moveInitialize(from:count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does '@_spi' attribute indicate?",
    "question_hi": "'@_spi' एट्रिब्यूट क्या इंडिकेट करता है?",
    "options_en": ["SPI (System Programming Interface) access", "Public API", "Private API", "Internal API"],
    "options_hi": ["SPI (सिस्टम प्रोग्रामिंग इंटरफेस) एक्सेस", "पब्लिक API", "प्राइवेट API", "इंटरनल API"],
    "answer_en": "SPI (System Programming Interface) access",
    "answer_hi": "SPI (सिस्टम प्रोग्रामिंग इंटरफेस) एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'UnsafeRawBufferPointer.load(fromByteOffset:as:)' method for?",
    "question_hi": "'UnsafeRawBufferPointer.load(fromByteOffset:as:)' मेथड किस लिए है?",
    "options_en": ["Loads value from specific byte offset", "Loads from beginning", "Stores value", "Allocates memory"],
    "options_hi": ["स्पेसिफिक बाइट ऑफसेट से वैल्यू लोड करता है", "शुरुआत से लोड करता है", "वैल्यू स्टोर करता है", "मेमोरी एलोकेट करता है"],
    "answer_en": "Loads value from specific byte offset",
    "answer_hi": "स्पेसिफिक बाइट ऑफसेट से वैल्यू लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which protocol provides 'withContiguousMutableStorageIfAvailable' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'withContiguousMutableStorageIfAvailable' मेथड प्रोवाइड करता है?",
    "options_en": ["MutableCollection", "Collection", "Sequence", "ContiguousMutable"],
    "options_hi": ["MutableCollection", "Collection", "Sequence", "ContiguousMutable"],
    "answer_en": "MutableCollection",
    "answer_hi": "MutableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does '@_hasStorage' attribute mean for computed properties?",
    "question_hi": "कंप्यूटेड प्रॉपर्टीज के लिए '@_hasStorage' एट्रिब्यूट का क्या अर्थ है?",
    "options_en": ["Computed property has backing storage", "No storage", "Shared storage", "Temporary storage"],
    "options_hi": ["कंप्यूटेड प्रॉपर्टी में बैकिंग स्टोरेज है", "कोई स्टोरेज नहीं", "शेयर्ड स्टोरेज", "टेम्पररी स्टोरेज"],
    "answer_en": "Computed property has backing storage",
    "answer_hi": "कंप्यूटेड प्रॉपर्टी में बैकिंग स्टोरेज है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'UnsafeMutableRawPointer.copyBytes(from:count:)' used for?",
    "question_hi": "'UnsafeMutableRawPointer.copyBytes(from:count:)' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Copies bytes from source memory", "Loads bytes", "Allocates memory", "Deallocates memory"],
    "options_hi": ["सोर्स मेमोरी से बाइट्स कॉपी करता है", "बाइट्स लोड करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Copies bytes from source memory",
    "answer_hi": "सोर्स मेमोरी से बाइट्स कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which attribute marks a function as having a discardable result?",
    "question_hi": "कौन सा एट्रिब्यूट फंक्शन को डिस्कार्डेबल रिजल्ट वाला मार्क करता है?",
    "options_en": ["@discardableResult", "@discardResult", "@ignoreResult", "@noResult"],
    "options_hi": ["@discardableResult", "@discardResult", "@ignoreResult", "@noResult"],
    "answer_en": "@discardableResult",
    "answer_hi": "@discardableResult",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'UnsafeBufferPointer.withUnsafeBytes' method provide?",
    "question_hi": "'UnsafeBufferPointer.withUnsafeBytes' मेथड क्या प्रोवाइड करती है?",
    "options_en": ["Access to buffer's raw bytes", "Access to elements", "Memory allocation", "Buffer copying"],
    "options_hi": ["बफर के रॉ बाइट्स तक पहुंच", "एलिमेंट्स तक पहुंच", "मेमोरी एलोकेशन", "बफर कॉपीइंग"],
    "answer_en": "Access to buffer's raw bytes",
    "answer_hi": "बफर के रॉ बाइट्स तक पहुंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of '@_specializeExtension' attribute?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Specializes entire extension", "Specializes single method", "Generalizes extension", "Removes specialization"],
    "options_hi": ["पूरे एक्सटेंशन को स्पेशलाइज़ करता है", "सिंगल मेथड को स्पेशलाइज़ करता है", "एक्सटेंशन को जनरलाइज़ करता है", "स्पेशलाइज़ेशन रिमूव करता है"],
    "answer_en": "Specializes entire extension",
    "answer_hi": "पूरे एक्सटेंशन को स्पेशलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method deinitializes memory referenced by pointer?",
    "question_hi": "कौन सी मेथड पॉइंटर द्वारा रेफरेंस की गई मेमोरी को डीइनिशियलाइज़ करती है?",
    "options_en": ["UnsafeMutablePointer.deinitialize(count:)", "destroy()", "remove()", "clear()"],
    "options_hi": ["UnsafeMutablePointer.deinitialize(count:)", "destroy()", "remove()", "clear()"],
    "answer_en": "UnsafeMutablePointer.deinitialize(count:)",
    "answer_hi": "UnsafeMutablePointer.deinitialize(count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does '@_optimize(speed)' attribute prioritize?",
    "question_hi": "'@_optimize(speed)' एट्रिब्यूट क्या प्रायोरिटाइज़ करता है?",
    "options_en": ["Execution speed over size", "Size over speed", "Balanced optimization", "No optimization"],
    "options_hi": ["साइज पर एक्जिक्यूशन स्पीड", "स्पीड पर साइज", "बैलेंस्ड ऑप्टिमाइज़ेशन", "कोई ऑप्टिमाइज़ेशन नहीं"],
    "answer_en": "Execution speed over size",
    "answer_hi": "साइज पर एक्जिक्यूशन स्पीड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'UnsafeMutableRawBufferPointer.copyMemory' method for?",
    "question_hi": "'UnsafeMutableRawBufferPointer.copyMemory' मेथड किस लिए है?",
    "options_en": ["Copies memory between buffers", "Allocates buffer", "Deallocates buffer", "Initializes buffer"],
    "options_hi": ["बफर्स के बीच मेमोरी कॉपी करता है", "बफर एलोकेट करता है", "बफर डीलोकेट करता है", "बफर इनिशियलाइज़ करता है"],
    "answer_en": "Copies memory between buffers",
    "answer_hi": "बफर्स के बीच मेमोरी कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which protocol provides 'withUnsafeMutableBufferPointer' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'withUnsafeMutableBufferPointer' मेथड प्रोवाइड करता है?",
    "options_en": ["MutableCollection", "Collection", "ContiguousMutable", "BufferMutable"],
    "options_hi": ["MutableCollection", "Collection", "ContiguousMutable", "BufferMutable"],
    "answer_en": "MutableCollection",
    "answer_hi": "MutableCollection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does '@_transparent' attribute guarantee about inlining?",
    "question_hi": "'@_transparent' एट्रिब्यूट इनलाइनिंग के बारे में क्या गारंटी देता है?",
    "options_en": ["Always inlined, even at -Onone", "Sometimes inlined", "Never inlined", "Conditionally inlined"],
    "options_hi": ["हमेशा इनलाइन्ड, -Onone पर भी", "कभी-कभी इनलाइन्ड", "कभी इनलाइन्ड नहीं", "कंडीशनली इनलाइन्ड"],
    "answer_en": "Always inlined, even at -Onone",
    "answer_hi": "हमेशा इनलाइन्ड, -Onone पर भी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'UnsafePointer.withMemoryRebound(to:capacity:_:)' method?",
    "question_hi": "'UnsafePointer.withMemoryRebound(to:capacity:_:)' मेथड क्या है?",
    "options_en": ["Temporarily rebinds memory to different type with capacity", "Permanent rebinding", "Allocation", "Deallocation"],
    "options_hi": ["कैपेसिटी के साथ मेमोरी को अलग टाइप से टेम्पररिली रीबाइंड करता है", "पर्मानेंट रीबाइंडिंग", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Temporarily rebinds memory to different type with capacity",
    "answer_hi": "कैपेसिटी के साथ मेमोरी को अलग टाइप से टेम्पररिली रीबाइंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which attribute marks a class as requiring all subclasses to be final?",
    "question_hi": "कौन सा एट्रिब्यूट क्लास को मार्क करता है कि सभी सबक्लासेस को फाइनल होना चाहिए?",
    "options_en": ["@_fixed_layout", "@_frozen", "@_hasMissingDesignatedInitializers", "@_inheritsConvenienceInitializers"],
    "options_hi": ["@_fixed_layout", "@_frozen", "@_hasMissingDesignatedInitializers", "@_inheritsConvenienceInitializers"],
    "answer_en": "@_fixed_layout",
    "answer_hi": "@_fixed_layout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does 'UnsafeMutableBufferPointer.withUnsafeMutableBytes' provide?",
    "question_hi": "'UnsafeMutableBufferPointer.withUnsafeMutableBytes' क्या प्रोवाइड करता है?",
    "options_en": ["Mutable access to buffer's raw bytes", "Immutable access", "Allocation", "Deallocation"],
    "options_hi": ["बफर के रॉ बाइट्स तक म्यूटेबल एक्सेस", "इम्यूटेबल एक्सेस", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Mutable access to buffer's raw bytes",
    "answer_hi": "बफर के रॉ बाइट्स तक म्यूटेबल एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of '@_alwaysEmitIntoClient' for library evolution?",
    "question_hi": "लाइब्रेरी एवोल्यूशन के लिए '@_alwaysEmitIntoClient' का उद्देश्य क्या है?",
    "options_en": ["Ensures code is always in client for ABI stability", "Optional inclusion", "Excludes from client", "Conditional inclusion"],
    "options_hi": ["ABI स्थिरता के लिए कोड हमेशा क्लाइंट में रहे", "ऑप्शनल इंक्लूज़न", "क्लाइंट से एक्सक्लूड", "कंडीशनल इंक्लूज़न"],
    "answer_en": "Ensures code is always in client for ABI stability",
    "answer_hi": "ABI स्थिरता के लिए कोड हमेशा क्लाइंट में रहे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method copies initialization from source to destination?",
    "question_hi": "कौन सी मेथड इनिशियलाइज़ेशन को सोर्स से डेस्टिनेशन में कॉपी करती है?",
    "options_en": ["UnsafeMutablePointer.copyInitialize(from:count:)", "moveInitialize()", "transferInitialize()", "duplicateInitialize()"],
    "options_hi": ["UnsafeMutablePointer.copyInitialize(from:count:)", "moveInitialize()", "transferInitialize()", "duplicateInitialize()"],
    "answer_en": "UnsafeMutablePointer.copyInitialize(from:count:)",
    "answer_hi": "UnsafeMutablePointer.copyInitialize(from:count:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does '@_cdecl(\"name\")' create for C interoperability?",
    "question_hi": "C इंटरऑपरेबिलिटी के लिए '@_cdecl(\"name\")' क्या क्रिएट करता है?",
    "options_en": ["C-callable function with specific name", "Swift-only function", "Generic function", "Inline function"],
    "options_hi": ["स्पेसिफिक नाम वाला C-कॉलेबल फंक्शन", "Swift-ओनली फंक्शन", "जेनेरिक फंक्शन", "इनलाइन फंक्शन"],
    "answer_en": "C-callable function with specific name",
    "answer_hi": "स्पेसिफिक नाम वाला C-कॉलेबल फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'UnsafeRawBufferPointer.storeBytes(of:toByteOffset:as:)' for?",
    "question_hi": "'UnsafeRawBufferPointer.storeBytes(of:toByteOffset:as:)' किस लिए है?",
    "options_en": ["Stores value at specific byte offset", "Stores at beginning", "Loads value", "Allocates memory"],
    "options_hi": ["स्पेसिफिक बाइट ऑफसेट पर वैल्यू स्टोर करता है", "शुरुआत में स्टोर करता है", "वैल्यू लोड करता है", "मेमोरी एलोकेट करता है"],
    "answer_en": "Stores value at specific byte offset",
    "answer_hi": "स्पेसिफिक बाइट ऑफसेट पर वैल्यू स्टोर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which protocol provides 'withUnsafeBufferPointer' method?",
    "question_hi": "कौन सा प्रोटोकॉल 'withUnsafeBufferPointer' मेथड प्रोवाइड करता है?",
    "options_en": ["Collection", "Sequence", "BufferAccess", "Contiguous"],
    "options_hi": ["Collection", "Sequence", "BufferAccess", "Contiguous"],
    "answer_en": "Collection",
    "answer_hi": "Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does '@_specialize(exported: true, kind: full)' do?",
    "question_hi": "'@_specialize(exported: true, kind: full)' क्या करता है?",
    "options_en": ["Exports full specialization", "Exports partial specialization", "Hides specialization", "Removes specialization"],
    "options_hi": ["फुल स्पेशलाइज़ेशन एक्सपोर्ट करता है", "पार्शियल स्पेशलाइज़ेशन एक्सपोर्ट करता है", "स्पेशलाइज़ेशन हाइड करता है", "स्पेशलाइज़ेशन रिमूव करता है"],
    "answer_en": "Exports full specialization",
    "answer_hi": "फुल स्पेशलाइज़ेशन एक्सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'UnsafeMutableRawPointer.initializeMemory(as:at:count:to:)' method?",
    "question_hi": "'UnsafeMutableRawPointer.initializeMemory(as:at:count:to:)' मेथड क्या है?",
    "options_en": ["Initializes specific type memory with value", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["स्पेसिफिक टाइप मेमोरी को वैल्यू से इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes specific type memory with value",
    "answer_hi": "स्पेसिफिक टाइप मेमोरी को वैल्यू से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which attribute marks a property wrapper's projected value?",
    "question_hi": "कौन सा एट्रिब्यूट प्रॉपर्टी रैपर के प्रोजेक्टेड वैल्यू को मार्क करता है?",
    "options_en": ["@ProjectedValue", "$ prefix", "@projected", "#projected"],
    "options_hi": ["@ProjectedValue", "$ प्रीफिक्स", "@projected", "#projected"],
    "answer_en": "$ prefix",
    "answer_hi": "$ प्रीफिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'UnsafeBufferPointer.withUnsafeBufferPointer' method do?",
    "question_hi": "'UnsafeBufferPointer.withUnsafeBufferPointer' मेथड क्या करती है?",
    "options_en": ["Provides access to another buffer pointer", "Allocates buffer", "Deallocates buffer", "Copies buffer"],
    "options_hi": ["दूसरे बफर पॉइंटर तक पहुंच प्रदान करती है", "बफर एलोकेट करती है", "बफर डीलोकेट करती है", "बफर कॉपी करती है"],
    "answer_en": "Provides access to another buffer pointer",
    "answer_hi": "दूसरे बफर पॉइंटर तक पहुंच प्रदान करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of '@_implements(Protocol, method)' attribute?",
    "question_hi": "'@_implements(Protocol, method)' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Implements protocol method with different name", "Creates new method", "Removes method", "Hides method"],
    "options_hi": ["अलग नाम से प्रोटोकॉल मेथड इम्प्लीमेंट करता है", "नई मेथड क्रिएट करता है", "मेथड रिमूव करता है", "मेथड हाइड करता है"],
    "answer_en": "Implements protocol method with different name",
    "answer_hi": "अलग नाम से प्रोटोकॉल मेथड इम्प्लीमेंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method moves bytes from source to destination buffer?",
    "question_hi": "कौन सी मेथड बाइट्स को सोर्स से डेस्टिनेशन बफर में मूव करती है?",
    "options_en": ["UnsafeMutableRawBufferPointer.moveInitialize(from:)", "copyInitialize()", "transfer()", "shift()"],
    "options_hi": ["UnsafeMutableRawBufferPointer.moveInitialize(from:)", "copyInitialize()", "transfer()", "shift()"],
    "answer_en": "UnsafeMutableRawBufferPointer.moveInitialize(from:)",
    "answer_hi": "UnsafeMutableRawBufferPointer.moveInitialize(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does '@_specializeExtension where T: Equatable' target?",
    "question_hi": "'@_specializeExtension where T: Equatable' क्या टार्गेट करता है?",
    "options_en": ["Extension methods for Equatable types", "All types", "Specific type", "No types"],
    "options_hi": ["Equatable टाइप्स के लिए एक्सटेंशन मेथड्स", "सभी टाइप्स", "स्पेसिफिक टाइप", "कोई टाइप नहीं"],
    "answer_en": "Extension methods for Equatable types",
    "answer_hi": "Equatable टाइप्स के लिए एक्सटेंशन मेथड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'UnsafeMutablePointer.withMemoryRebound' method used for?",
    "question_hi": "'UnsafeMutablePointer.withMemoryRebound' मेथड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Temporary type rebinding of mutable memory", "Permanent rebinding", "Allocation", "Deallocation"],
    "options_hi": ["म्यूटेबल मेमोरी का टेम्पररी टाइप रीबाइंडिंग", "पर्मानेंट रीबाइंडिंग", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Temporary type rebinding of mutable memory",
    "answer_hi": "म्यूटेबल मेमोरी का टेम्पररी टाइप रीबाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which attribute marks a closure parameter as non-escaping by default?",
    "question_hi": "कौन सा एट्रिब्यूट क्लोजर पैरामीटर को डिफ़ॉल्ट रूप से नॉन-एस्केपिंग मार्क करता है?",
    "options_en": ["@noescape (implicit in Swift 3+)", "@escaping", "@nonescaping", "@defaultNoEscape"],
    "options_hi": ["@noescape (Swift 3+ में इम्प्लिसिट)", "@escaping", "@nonescaping", "@defaultNoEscape"],
    "answer_en": "@noescape (implicit in Swift 3+)",
    "answer_hi": "@noescape (Swift 3+ में इम्प्लिसिट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does 'UnsafeRawBufferPointer.bindMemory' method do?",
    "question_hi": "'UnsafeRawBufferPointer.bindMemory' मेथड क्या करती है?",
    "options_en": ["Binds raw buffer memory to type", "Allocates buffer", "Deallocates buffer", "Copies buffer"],
    "options_hi": ["रॉ बफर मेमोरी को टाइप से बाइंड करती है", "बफर एलोकेट करती है", "बफर डीलोकेट करती है", "बफर कॉपी करती है"],
    "answer_en": "Binds raw buffer memory to type",
    "answer_hi": "रॉ बफर मेमोरी को टाइप से बाइंड करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is '@_optimize(size)' attribute's priority?",
    "question_hi": "'@_optimize(size)' एट्रिब्यूट की प्रायोरिटी क्या है?",
    "options_en": ["Code size over speed", "Speed over size", "Balanced", "No optimization"],
    "options_hi": ["स्पीड पर कोड साइज", "साइज पर स्पीड", "बैलेंस्ड", "कोई ऑप्टिमाइज़ेशन नहीं"],
    "answer_en": "Code size over speed",
    "answer_hi": "स्पीड पर कोड साइज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method copies bytes between buffers?",
    "question_hi": "कौन सी मेथड बफर्स के बीच बाइट्स कॉपी करती है?",
    "options_en": ["UnsafeMutableRawBufferPointer.copyBytes(from:)", "moveBytes()", "transferBytes()", "shiftBytes()"],
    "options_hi": ["UnsafeMutableRawBufferPointer.copyBytes(from:)", "moveBytes()", "transferBytes()", "shiftBytes()"],
    "answer_en": "UnsafeMutableRawBufferPointer.copyBytes(from:)",
    "answer_hi": "UnsafeMutableRawBufferPointer.copyBytes(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does '@_hasInitialValue' indicate for lazy properties?",
    "question_hi": "लेज़ी प्रॉपर्टीज के लिए '@_hasInitialValue' क्या इंडिकेट करता है?",
    "options_en": ["Lazy property has initial value expression", "No initial value", "Computed value", "Stored value"],
    "options_hi": ["लेज़ी प्रॉपर्टी में इनिशियल वैल्यू एक्सप्रेशन है", "कोई इनिशियल वैल्यू नहीं", "कंप्यूटेड वैल्यू", "स्टोर्ड वैल्यू"],
    "answer_en": "Lazy property has initial value expression",
    "answer_hi": "लेज़ी प्रॉपर्टी में इनिशियल वैल्यू एक्सप्रेशन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'UnsafeMutableBufferPointer.withUnsafeMutableBufferPointer' method?",
    "question_hi": "'UnsafeMutableBufferPointer.withUnsafeMutableBufferPointer' मेथड क्या है?",
    "options_en": ["Provides mutable access to another buffer pointer", "Immutable access", "Allocation", "Deallocation"],
    "options_hi": ["दूसरे बफर पॉइंटर तक म्यूटेबल एक्सेस प्रदान करती है", "इम्यूटेबल एक्सेस", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Provides mutable access to another buffer pointer",
    "answer_hi": "दूसरे बफर पॉइंटर तक म्यूटेबल एक्सेस प्रदान करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does '@_disfavoredOverload' help resolve?",
    "question_hi": "'@_disfavoredOverload' क्या रिज़ॉल्व करने में मदद करता है?",
    "options_en": ["Overload resolution ambiguity", "Type inference", "Memory management", "Error handling"],
    "options_hi": ["ओवरलोड रिज़ॉल्यूशन एम्बिग्युइटी", "टाइप इनफेरेंस", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
    "answer_en": "Overload resolution ambiguity",
    "answer_hi": "ओवरलोड रिज़ॉल्यूशन एम्बिग्युइटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method deinitializes memory in buffer?",
    "question_hi": "कौन सी मेथड बफर में मेमोरी को डीइनिशियलाइज़ करती है?",
    "options_en": ["UnsafeMutableRawBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "options_hi": ["UnsafeMutableRawBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "answer_en": "UnsafeMutableRawBufferPointer.deallocate()",
    "answer_hi": "UnsafeMutableRawBufferPointer.deallocate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is '@_alignment(16)' attribute's effect?",
    "question_hi": "'@_alignment(16)' एट्रिब्यूट का क्या प्रभाव है?",
    "options_en": ["16-byte alignment for type", "8-byte alignment", "4-byte alignment", "No alignment"],
    "options_hi": ["टाइप के लिए 16-बाइट अलाइनमेंट", "8-बाइट अलाइनमेंट", "4-बाइट अलाइनमेंट", "कोई अलाइनमेंट नहीं"],
    "answer_en": "16-byte alignment for type",
    "answer_hi": "टाइप के लिए 16-बाइट अलाइनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'UnsafeBufferPointer.withMemoryRebound' method allow?",
    "question_hi": "'UnsafeBufferPointer.withMemoryRebound' मेथड क्या अलाउ करती है?",
    "options_en": ["Temporary type rebinding of buffer memory", "Permanent rebinding", "Allocation", "Deallocation"],
    "options_hi": ["बफर मेमोरी का टेम्पररी टाइप रीबाइंडिंग", "पर्मानेंट रीबाइंडिंग", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Temporary type rebinding of buffer memory",
    "answer_hi": "बफर मेमोरी का टेम्पररी टाइप रीबाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which attribute marks a method as unavailable in Swift versions?",
    "question_hi": "कौन सा एट्रिब्यूट मेथड को Swift वर्जन्स में अनवैलेबल मार्क करता है?",
    "options_en": ["@available(swift, unavailable: 5.0)", "@unavailable(swift 5.0)", "@swift(unavailable: 5.0)", "@version(unavailable: 5.0)"],
    "options_hi": ["@available(swift, unavailable: 5.0)", "@unavailable(swift 5.0)", "@swift(unavailable: 5.0)", "@version(unavailable: 5.0)"],
    "answer_en": "@available(swift, unavailable: 5.0)",
    "answer_hi": "@available(swift, unavailable: 5.0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'UnsafeMutableRawPointer.bindMemory' method for?",
    "question_hi": "'UnsafeMutableRawPointer.bindMemory' मेथड किस लिए है?",
    "options_en": ["Binds raw memory to specific type", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["रॉ मेमोरी को स्पेसिफिक टाइप से बाइंड करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Binds raw memory to specific type",
    "answer_hi": "रॉ मेमोरी को स्पेसिफिक टाइप से बाइंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does '@_semantics(\"array.init\")' specify?",
    "question_hi": "'@_semantics(\"array.init\")' क्या स्पेसिफाई करता है?",
    "options_en": ["Array initialization semantics", "Array copy semantics", "Array access semantics", "Array deletion semantics"],
    "options_hi": ["ऐरे इनिशियलाइज़ेशन सेमेन्टिक्स", "ऐरे कॉपी सेमेन्टिक्स", "ऐरे एक्सेस सेमेन्टिक्स", "ऐरे डिलीशन सेमेन्टिक्स"],
    "answer_en": "Array initialization semantics",
    "answer_hi": "ऐरे इनिशियलाइज़ेशन सेमेन्टिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method allocates buffer for specific type?",
    "question_hi": "कौन सी मेथड स्पेसिफिक टाइप के लिए बफर एलोकेट करती है?",
    "options_en": ["UnsafeMutableBufferPointer.allocate(capacity:)", "createBuffer()", "makeBuffer()", "newBuffer()"],
    "options_hi": ["UnsafeMutableBufferPointer.allocate(capacity:)", "createBuffer()", "makeBuffer()", "newBuffer()"],
    "answer_en": "UnsafeMutableBufferPointer.allocate(capacity:)",
    "answer_hi": "UnsafeMutableBufferPointer.allocate(capacity:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is '@_implicitSelfCapture(unsafe)' attribute's warning?",
    "question_hi": "'@_implicitSelfCapture(unsafe)' एट्रिब्यूट की क्या चेतावनी है?",
    "options_en": ["Warns about unsafe implicit self capture", "Allows capture", "Prevents capture", "Ignores capture"],
    "options_hi": ["अनसेफ इम्प्लिसिट सेल्फ कैप्चर के बारे में चेतावनी देता है", "कैप्चर अलाउ करता है", "कैप्चर प्रिवेंट करता है", "कैप्चर इग्नोर करता है"],
    "answer_en": "Warns about unsafe implicit self capture",
    "answer_hi": "अनसेफ इम्प्लिसिट सेल्फ कैप्चर के बारे में चेतावनी देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does 'UnsafeRawPointer.assumingMemoryBound' method assume?",
    "question_hi": "'UnsafeRawPointer.assumingMemoryBound' मेथड क्या मानता है?",
    "options_en": ["Memory already bound to assumed type", "Memory unbound", "Memory allocated", "Memory deallocated"],
    "options_hi": ["मेमोरी पहले से ही असम्ड टाइप से बाउंड है", "मेमोरी अनबाउंड", "मेमोरी एलोकेटेड", "मेमोरी डीलोकेटेड"],
    "answer_en": "Memory already bound to assumed type",
    "answer_hi": "मेमोरी पहले से ही असम्ड टाइप से बाउंड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which attribute marks a property as having a didSet observer?",
    "question_hi": "कौन सा एट्रिब्यूट प्रॉपर्टी को didSet ऑब्ज़र्वर वाला मार्क करता है?",
    "options_en": ["@didSet", "didSet { }", "@observer(didSet)", "@propertyObserver(didSet)"],
    "options_hi": ["@didSet", "didSet { }", "@observer(didSet)", "@propertyObserver(didSet)"],
    "answer_en": "didSet { }",
    "answer_hi": "didSet { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'UnsafeMutableBufferPointer.withMemoryRebound' method?",
    "question_hi": "'UnsafeMutableBufferPointer.withMemoryRebound' मेथड क्या है?",
    "options_en": ["Temporary type rebinding of mutable buffer", "Permanent rebinding", "Allocation", "Deallocation"],
    "options_hi": ["म्यूटेबल बफर का टेम्पररी टाइप रीबाइंडिंग", "पर्मानेंट रीबाइंडिंग", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Temporary type rebinding of mutable buffer",
    "answer_hi": "म्यूटेबल बफर का टेम्पररी टाइप रीबाइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does '@_semantics(\"string.\")' enable for compiler?",
    "question_hi": "'@_semantics(\"string.\")' कंपाइलर के लिए क्या एनेबल करता है?",
    "options_en": ["String-specific optimizations", "Array optimizations", "Number optimizations", "Generic optimizations"],
    "options_hi": ["स्ट्रिंग-स्पेसिफिक ऑप्टिमाइज़ेशन", "ऐरे ऑप्टिमाइज़ेशन", "नंबर ऑप्टिमाइज़ेशन", "जेनेरिक ऑप्टिमाइज़ेशन"],
    "answer_en": "String-specific optimizations",
    "answer_hi": "स्ट्रिंग-स्पेसिफिक ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which method deallocates buffer memory?",
    "question_hi": "कौन सी मेथड बफर मेमोरी डीलोकेट करती है?",
    "options_en": ["UnsafeMutableBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "options_hi": ["UnsafeMutableBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "answer_en": "UnsafeMutableBufferPointer.deallocate()",
    "answer_hi": "UnsafeMutableBufferPointer.deallocate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is '@_typeSequence(_:)' attribute's purpose?",
    "question_hi": "'@_typeSequence(_:)' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Specifies type sequence for compiler", "Creates type sequence", "Removes type sequence", "Hides type sequence"],
    "options_hi": ["कंपाइलर के लिए टाइप सीक्वेंस स्पेसिफाई करता है", "टाइप सीक्वेंस क्रिएट करता है", "टाइप सीक्वेंस रिमूव करता है", "टाइप सीक्वेंस हाइड करता है"],
    "answer_en": "Specifies type sequence for compiler",
    "answer_hi": "कंपाइलर के लिए टाइप सीक्वेंस स्पेसिफाई करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does 'UnsafeRawBufferPointer.withUnsafeBytes' provide?",
    "question_hi": "'UnsafeRawBufferPointer.withUnsafeBytes' क्या प्रोवाइड करता है?",
    "options_en": ["Access to raw buffer's bytes", "Access to elements", "Allocation", "Deallocation"],
    "options_hi": ["रॉ बफर के बाइट्स तक पहुंच", "एलिमेंट्स तक पहुंच", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Access to raw buffer's bytes",
    "answer_hi": "रॉ बफर के बाइट्स तक पहुंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which attribute marks a closure as autoclosures?",
    "question_hi": "कौन सा एट्रिब्यूट क्लोजर को ऑटोक्लोजर के रूप में मार्क करता है?",
    "options_en": ["@autoclosure", "@autoClosure", "@closure", "@auto"],
    "options_hi": ["@autoclosure", "@autoClosure", "@closure", "@auto"],
    "answer_en": "@autoclosure",
    "answer_hi": "@autoclosure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'UnsafeMutableRawBufferPointer.withUnsafeMutableBytes' method?",
    "question_hi": "'UnsafeMutableRawBufferPointer.withUnsafeMutableBytes' मेथड क्या है?",
    "options_en": ["Mutable access to raw buffer bytes", "Immutable access", "Allocation", "Deallocation"],
    "options_hi": ["रॉ बफर बाइट्स तक म्यूटेबल एक्सेस", "इम्यूटेबल एक्सेस", "एलोकेशन", "डीलोकेशन"],
    "answer_en": "Mutable access to raw buffer bytes",
    "answer_hi": "रॉ बफर बाइट्स तक म्यूटेबल एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does '@_show_in_interface' control for declarations?",
    "question_hi": "'@_show_in_interface' डिक्लेरेशन्स के लिए क्या कंट्रोल करता है?",
    "options_en": ["Visibility in generated interface", "Compilation", "Execution", "Memory allocation"],
    "options_hi": ["जनरेटेड इंटरफेस में विजिबिलिटी", "कंपाइलेशन", "एक्जिक्यूशन", "मेमोरी एलोकेशन"],
    "answer_en": "Visibility in generated interface",
    "answer_hi": "जनरेटेड इंटरफेस में विजिबिलिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which method loads value from raw pointer with specific alignment?",
    "question_hi": "कौन सी मेथड स्पेसिफिक अलाइनमेंट के साथ रॉ पॉइंटर से वैल्यू लोड करती है?",
    "options_en": ["UnsafeRawPointer.load(fromByteOffset:as:)", "loadUnaligned()", "loadAligned()", "getValue()"],
    "options_hi": ["UnsafeRawPointer.load(fromByteOffset:as:)", "loadUnaligned()", "loadAligned()", "getValue()"],
    "answer_en": "UnsafeRawPointer.load(fromByteOffset:as:)",
    "answer_hi": "UnsafeRawPointer.load(fromByteOffset:as:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is '@_nonEphemeral' attribute's main use case?",
    "question_hi": "'@_nonEphemeral' एट्रिब्यूट का मुख्य यूज़ केस क्या है?",
    "options_en": ["Preventing temporary pointers in APIs", "Creating temporary values", "Memory allocation", "Type conversion"],
    "options_hi": ["APIs में टेम्पररी पॉइंटर्स को प्रिवेंट करना", "टेम्पररी वैल्यूज क्रिएट करना", "मेमोरी एलोकेशन", "टाइप कन्वर्जन"],
    "answer_en": "Preventing temporary pointers in APIs",
    "answer_hi": "APIs में टेम्पररी पॉइंटर्स को प्रिवेंट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does 'UnsafeMutablePointer.initialize(from:count:)' method do?",
    "question_hi": "'UnsafeMutablePointer.initialize(from:count:)' मेथड क्या करता है?",
    "options_en": ["Initializes memory from collection", "Allocates memory", "Deallocates memory", "Copies memory"],
    "options_hi": ["कलेक्शन से मेमोरी इनिशियलाइज़ करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है", "मेमोरी कॉपी करता है"],
    "answer_en": "Initializes memory from collection",
    "answer_hi": "कलेक्शन से मेमोरी इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which attribute marks a function as having a throwing variant?",
    "question_hi": "कौन सा एट्रिब्यूट फंक्शन को थ्रोइंग वेरिएंट वाला मार्क करता है?",
    "options_en": ["rethrows", "@rethrows", "@throwingVariant", "throws"],
    "options_hi": ["rethrows", "@rethrows", "@throwingVariant", "throws"],
    "answer_en": "rethrows",
    "answer_hi": "rethrows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'UnsafeRawBufferPointer.loadUnaligned(fromByteOffset:as:)' method?",
    "question_hi": "'UnsafeRawBufferPointer.loadUnaligned(fromByteOffset:as:)' मेथड क्या है?",
    "options_en": ["Loads unaligned value from byte offset", "Loads aligned value", "Stores value", "Allocates memory"],
    "options_hi": ["बाइट ऑफसेट से अनअलाइंड वैल्यू लोड करती है", "अलाइंड वैल्यू लोड करती है", "वैल्यू स्टोर करती है", "मेमोरी एलोकेट करती है"],
    "answer_en": "Loads unaligned value from byte offset",
    "answer_hi": "बाइट ऑफसेट से अनअलाइंड वैल्यू लोड करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does '@_semantics(\"array.\")' group of attributes target?",
    "question_hi": "'@_semantics(\"array.\")' एट्रिब्यूट्स का ग्रुप क्या टार्गेट करता है?",
    "options_en": ["Array operation optimizations", "String operations", "Number operations", "Generic operations"],
    "options_hi": ["ऐरे ऑपरेशन ऑप्टिमाइज़ेशन", "स्ट्रिंग ऑपरेशन", "नंबर ऑपरेशन", "जेनेरिक ऑपरेशन"],
    "answer_en": "Array operation optimizations",
    "answer_hi": "ऐरे ऑपरेशन ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which method stores value in raw pointer with alignment?",
    "question_hi": "कौन सी मेथड अलाइनमेंट के साथ रॉ पॉइंटर में वैल्यू स्टोर करती है?",
    "options_en": ["UnsafeMutableRawPointer.storeBytes(of:toByteOffset:as:)", "storeUnaligned()", "storeAligned()", "setValue()"],
    "options_hi": ["UnsafeMutableRawPointer.storeBytes(of:toByteOffset:as:)", "storeUnaligned()", "storeAligned()", "setValue()"],
    "answer_en": "UnsafeMutableRawPointer.storeBytes(of:toByteOffset:as:)",
    "answer_hi": "UnsafeMutableRawPointer.storeBytes(of:toByteOffset:as:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is '@_implements(P, requirement)' attribute's syntax?",
    "question_hi": "'@_implements(P, requirement)' एट्रिब्यूट का सिंटैक्स क्या है?",
    "options_en": ["@_implements(Protocol, \"requirement\")", "@implements Protocol.requirement", "@conforms Protocol", "@requires Protocol"],
    "options_hi": ["@_implements(Protocol, \"requirement\")", "@implements Protocol.requirement", "@conforms Protocol", "@requires Protocol"],
    "answer_en": "@_implements(Protocol, \"requirement\")",
    "answer_hi": "@_implements(Protocol, \"requirement\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does 'UnsafeMutableBufferPointer.initialize(repeating:count:)' do?",
    "question_hi": "'UnsafeMutableBufferPointer.initialize(repeating:count:)' क्या करता है?",
    "options_en": ["Initializes buffer with repeating value", "Allocates buffer", "Deallocates buffer", "Copies buffer"],
    "options_hi": ["बफर को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है", "बफर एलोकेट करता है", "बफर डीलोकेट करता है", "बफर कॉपी करता है"],
    "answer_en": "Initializes buffer with repeating value",
    "answer_hi": "बफर को रिपीटिंग वैल्यू से इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which attribute marks a property as having a willSet observer?",
    "question_hi": "कौन सा एट्रिब्यूट प्रॉपर्टी को willSet ऑब्ज़र्वर वाला मार्क करता है?",
    "options_en": ["@willSet", "willSet { }", "@observer(willSet)", "@propertyObserver(willSet)"],
    "options_hi": ["@willSet", "willSet { }", "@observer(willSet)", "@propertyObserver(willSet)"],
    "answer_en": "willSet { }",
    "answer_hi": "willSet { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'UnsafeRawPointer.loadUnaligned' method's advantage?",
    "question_hi": "'UnsafeRawPointer.loadUnaligned' मेथड का क्या फायदा है?",
    "options_en": ["Doesn't require memory alignment", "Faster", "Safer", "More precise"],
    "options_hi": ["मेमोरी अलाइनमेंट की आवश्यकता नहीं", "तेज़", "सुरक्षित", "अधिक सटीक"],
    "answer_en": "Doesn't require memory alignment",
    "answer_hi": "मेमोरी अलाइनमेंट की आवश्यकता नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@_semantics(\"optimize.sil.specialize.generic.\")' enable?",
    "question_hi": "'@_semantics(\"optimize.sil.specialize.generic.\")' क्या एनेबल करता है?",
    "options_en": ["Generic specialization in SIL", "Runtime specialization", "Compile-time optimization", "Code generation"],
    "options_hi": ["SIL में जेनेरिक स्पेशलाइज़ेशन", "रनटाइम स्पेशलाइज़ेशन", "कंपाइल-टाइम ऑप्टिमाइज़ेशन", "कोड जनरेशन"],
    "answer_en": "Generic specialization in SIL",
    "answer_hi": "SIL में जेनेरिक स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which method deinitializes buffer elements?",
    "question_hi": "कौन सी मेथड बफर एलिमेंट्स को डीइनिशियलाइज़ करती है?",
    "options_en": ["UnsafeMutableBufferPointer.deinitialize()", "destroy()", "remove()", "clear()"],
    "options_hi": ["UnsafeMutableBufferPointer.deinitialize()", "destroy()", "remove()", "clear()"],
    "answer_en": "UnsafeMutableBufferPointer.deinitialize()",
    "answer_hi": "UnsafeMutableBufferPointer.deinitialize()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is '@_show_in_interface' attribute's default behavior?",
    "question_hi": "'@_show_in_interface' एट्रिब्यूट का डिफ़ॉल्ट बिहेवियर क्या है?",
    "options_en": ["Shows in interface", "Hides from interface", "Conditional", "Optional"],
    "options_hi": ["इंटरफेस में दिखाता है", "इंटरफेस से छुपाता है", "कंडीशनल", "ऑप्शनल"],
    "answer_en": "Shows in interface",
    "answer_hi": "इंटरफेस में दिखाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does 'UnsafeMutableRawPointer.storeBytes(of:as:)' method do?",
    "question_hi": "'UnsafeMutableRawPointer.storeBytes(of:as:)' मेथड क्या करता है?",
    "options_en": ["Stores value in raw memory", "Loads value", "Allocates memory", "Deallocates memory"],
    "options_hi": ["रॉ मेमोरी में वैल्यू स्टोर करता है", "वैल्यू लोड करता है", "मेमोरी एलोकेट करता है", "मेमोरी डीलोकेट करता है"],
    "answer_en": "Stores value in raw memory",
    "answer_hi": "रॉ मेमोरी में वैल्यू स्टोर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which attribute marks a function as having a non-mutating variant?",
    "question_hi": "कौन सा एट्रिब्यूट फंक्शन को नॉन-म्यूटेटिंग वेरिएंट वाला मार्क करता है?",
    "options_en": ["@nonmutating", "nonmutating", "@immutable", "@stable"],
    "options_hi": ["@nonmutating", "nonmutating", "@immutable", "@stable"],
    "answer_en": "nonmutating",
    "answer_hi": "nonmutating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'UnsafeBufferPointer.deallocate' method's purpose?",
    "question_hi": "'UnsafeBufferPointer.deallocate' मेथड का उद्देश्य क्या है?",
    "options_en": ["Deallocates buffer memory", "Allocates buffer", "Initializes buffer", "Copies buffer"],
    "options_hi": ["बफर मेमोरी डीलोकेट करती है", "बफर एलोकेट करती है", "बफर इनिशियलाइज़ करती है", "बफर कॉपी करती है"],
    "answer_en": "Deallocates buffer memory",
    "answer_hi": "बफर मेमोरी डीलोकेट करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does '@_disfavoredOverload' attribute's placement matter?",
    "question_hi": "'@_disfavoredOverload' एट्रिब्यूट का प्लेसमेंट क्यों मायने रखता है?",
    "options_en": ["Affects overload resolution priority", "Affects compilation speed", "Affects runtime", "Affects memory"],
    "options_hi": ["ओवरलोड रिज़ॉल्यूशन प्रायोरिटी को प्रभावित करता है", "कंपाइलेशन स्पीड को प्रभावित करता है", "रनटाइम को प्रभावित करता है", "मेमोरी को प्रभावित करता है"],
    "answer_en": "Affects overload resolution priority",
    "answer_hi": "ओवरलोड रिज़ॉल्यूशन प्रायोरिटी को प्रभावित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which method copies buffer initialization?",
    "question_hi": "कौन सी मेथड बफर इनिशियलाइज़ेशन कॉपी करती है?",
    "options_en": ["UnsafeMutableBufferPointer.copyInitialize(from:)", "moveInitialize()", "transferInitialize()", "duplicateInitialize()"],
    "options_hi": ["UnsafeMutableBufferPointer.copyInitialize(from:)", "moveInitialize()", "transferInitialize()", "duplicateInitialize()"],
    "answer_en": "UnsafeMutableBufferPointer.copyInitialize(from:)",
    "answer_hi": "UnsafeMutableBufferPointer.copyInitialize(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is '@_fixed_layout' attribute's impact on ABI?",
    "question_hi": "'@_fixed_layout' एट्रिब्यूट का ABI पर क्या प्रभाव है?",
    "options_en": ["Guarantees stable ABI layout", "Allows layout changes", "Prevents ABI stability", "Optional stability"],
    "options_hi": ["स्टेबल ABI लेआउट गारंटी करता है", "लेआउट चेंजेस अलाउ करता है", "ABI स्थिरता प्रिवेंट करता है", "ऑप्शनल स्थिरता"],
    "answer_en": "Guarantees stable ABI layout",
    "answer_hi": "स्टेबल ABI लेआउट गारंटी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does 'UnsafeMutableRawBufferPointer.moveInitialize' method do?",
    "question_hi": "'UnsafeMutableRawBufferPointer.moveInitialize' मेथड क्या करती है?",
    "options_en": ["Moves initialization from source buffer", "Copies initialization", "Allocates buffer", "Deallocates buffer"],
    "options_hi": ["सोर्स बफर से इनिशियलाइज़ेशन मूव करती है", "इनिशियलाइज़ेशन कॉपी करती है", "बफर एलोकेट करती है", "बफर डीलोकेट करती है"],
    "answer_en": "Moves initialization from source buffer",
    "answer_hi": "सोर्स बफर से इनिशियलाइज़ेशन मूव करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which attribute marks a type as having reference semantics?",
    "question_hi": "कौन सा एट्रिब्यूट टाइप को रेफरेंस सेमेन्टिक्स वाला मार्क करता है?",
    "options_en": ["class", "@reference", "@refsemantics", "@referenceType"],
    "options_hi": ["class", "@reference", "@refsemantics", "@referenceType"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'UnsafePointer.withMemoryRebound' method's scope?",
    "question_hi": "'UnsafePointer.withMemoryRebound' मेथड का स्कोप क्या है?",
    "options_en": ["Temporary within closure", "Permanent", "Global", "Module-wide"],
    "options_hi": ["क्लोजर के अंदर टेम्पररी", "पर्मानेंट", "ग्लोबल", "मॉड्यूल-वाइड"],
    "answer_en": "Temporary within closure",
    "answer_hi": "क्लोजर के अंदर टेम्पररी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '@_semantics(\"arc.operation\")' group target?",
    "question_hi": "'@_semantics(\"arc.operation\")' ग्रुप क्या टार्गेट करता है?",
    "options_en": ["ARC operation optimizations", "Memory allocation", "Type checking", "Code generation"],
    "options_hi": ["ARC ऑपरेशन ऑप्टिमाइज़ेशन", "मेमोरी एलोकेशन", "टाइप चेकिंग", "कोड जनरेशन"],
    "answer_en": "ARC operation optimizations",
    "answer_hi": "ARC ऑपरेशन ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which method moves buffer initialization?",
    "question_hi": "कौन सी मेथड बफर इनिशियलाइज़ेशन मूव करती है?",
    "options_en": ["UnsafeMutableBufferPointer.moveInitialize(from:)", "copyInitialize()", "transferInitialize()", "shiftInitialize()"],
    "options_hi": ["UnsafeMutableBufferPointer.moveInitialize(from:)", "copyInitialize()", "transferInitialize()", "shiftInitialize()"],
    "answer_en": "UnsafeMutableBufferPointer.moveInitialize(from:)",
    "answer_hi": "UnsafeMutableBufferPointer.moveInitialize(from:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is '@_implicitlyUnwrappedOptional' attribute's replacement?",
    "question_hi": "'@_implicitlyUnwrappedOptional' एट्रिब्यूट का रिप्लेसमेंट क्या है?",
    "options_en": ["IUO type syntax (Type!)", "@IUO", "@unwrapped", "@implicitUnwrap"],
    "options_hi": ["IUO टाइप सिंटैक्स (Type!)", "@IUO", "@unwrapped", "@implicitUnwrap"],
    "answer_en": "IUO type syntax (Type!)",
    "answer_hi": "IUO टाइप सिंटैक्स (Type!)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does 'UnsafeRawBufferPointer.storeBytes' method's alignment requirement?",
    "question_hi": "'UnsafeRawBufferPointer.storeBytes' मेथड की अलाइनमेंट रिक्वायरमेंट क्या है?",
    "options_en": ["May require alignment", "No alignment", "Always aligned", "Optional alignment"],
    "options_hi": ["अलाइनमेंट की आवश्यकता हो सकती है", "कोई अलाइनमेंट नहीं", "हमेशा अलाइंड", "ऑप्शनल अलाइनमेंट"],
    "answer_en": "May require alignment",
    "answer_hi": "अलाइनमेंट की आवश्यकता हो सकती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which attribute marks a protocol as class-only?",
    "question_hi": "कौन सा एट्रिब्यूट प्रोटोकॉल को क्लास-ओनली मार्क करता है?",
    "options_en": ["class", "@class", "@classOnly", "@objc"],
    "options_hi": ["class", "@class", "@classOnly", "@objc"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'UnsafeMutableBufferPointer.withUnsafeMutableBufferPointer' scope?",
    "question_hi": "'UnsafeMutableBufferPointer.withUnsafeMutableBufferPointer' का स्कोप क्या है?",
    "options_en": ["Within closure execution", "Permanent", "Global", "Static"],
    "options_hi": ["क्लोजर एक्जिक्यूशन के अंदर", "पर्मानेंट", "ग्लोबल", "स्टेटिक"],
    "answer_en": "Within closure execution",
    "answer_hi": "क्लोजर एक्जिक्यूशन के अंदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What does '@_specialize(kind: full, where T == Int)' create?",
    "question_hi": "'@_specialize(kind: full, where T == Int)' क्या क्रिएट करता है?",
    "options_en": ["Full specialization for Int", "Partial specialization", "Generic version", "Runtime specialization"],
    "options_hi": ["Int के लिए फुल स्पेशलाइज़ेशन", "पार्शियल स्पेशलाइज़ेशन", "जेनेरिक वर्जन", "रनटाइम स्पेशलाइज़ेशन"],
    "answer_en": "Full specialization for Int",
    "answer_hi": "Int के लिए फुल स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which method allocates raw buffer?",
    "question_hi": "कौन सी मेथड रॉ बफर एलोकेट करती है?",
    "options_en": ["UnsafeMutableRawBufferPointer.allocate(byteCount:alignment:)", "createBuffer()", "makeBuffer()", "newBuffer()"],
    "options_hi": ["UnsafeMutableRawBufferPointer.allocate(byteCount:alignment:)", "createBuffer()", "makeBuffer()", "newBuffer()"],
    "answer_en": "UnsafeMutableRawBufferPointer.allocate(byteCount:alignment:)",
    "answer_hi": "UnsafeMutableRawBufferPointer.allocate(byteCount:alignment:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is '@_transparent' attribute's limitation?",
    "question_hi": "'@_transparent' एट्रिब्यूट की क्या सीमा है?",
    "options_en": ["Cannot contain certain operations", "No limitations", "Must be short", "Must be pure"],
    "options_hi": ["कुछ ऑपरेशन्स नहीं रख सकता", "कोई सीमा नहीं", "छोटा होना चाहिए", "प्योर होना चाहिए"],
    "answer_en": "Cannot contain certain operations",
    "answer_hi": "कुछ ऑपरेशन्स नहीं रख सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does 'UnsafeMutablePointer.move' method's effect on source?",
    "question_hi": "'UnsafeMutablePointer.move' मेथड का सोर्स पर क्या प्रभाव है?",
    "options_en": ["Leaves source uninitialized", "Copies source", "Deallocates source", "Initializes source"],
    "options_hi": ["सोर्स को अनइनिशियलाइज़्ड छोड़ता है", "सोर्स कॉपी करता है", "सोर्स डीलोकेट करता है", "सोर्स इनिशियलाइज़ करता है"],
    "answer_en": "Leaves source uninitialized",
    "answer_hi": "सोर्स को अनइनिशियलाइज़्ड छोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which attribute marks a stored property as lazy?",
    "question_hi": "कौन सा एट्रिब्यूट स्टोर्ड प्रॉपर्टी को लेज़ी मार्क करता है?",
    "options_en": ["lazy", "@lazy", "@delayed", "@deferred"],
    "options_hi": ["lazy", "@lazy", "@delayed", "@deferred"],
    "answer_en": "lazy",
    "answer_hi": "lazy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'UnsafeRawBufferPointer.withUnsafeBytes' closure parameter?",
    "question_hi": "'UnsafeRawBufferPointer.withUnsafeBytes' का क्लोजर पैरामीटर क्या है?",
    "options_en": ["UnsafeRawBufferPointer", "UnsafeBufferPointer", "UnsafePointer", "UnsafeMutablePointer"],
    "options_hi": ["UnsafeRawBufferPointer", "UnsafeBufferPointer", "UnsafePointer", "UnsafeMutablePointer"],
    "answer_en": "UnsafeRawBufferPointer",
    "answer_hi": "UnsafeRawBufferPointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does '@_semantics(\"typechecker.known\")' help with?",
    "question_hi": "'@_semantics(\"typechecker.known\")' किसमें मदद करता है?",
    "options_en": ["Type checker knowledge", "Runtime checks", "Memory allocation", "Code generation"],
    "options_hi": ["टाइप चेकर नॉलेज", "रनटाइम चेक्स", "मेमोरी एलोकेशन", "कोड जनरेशन"],
    "answer_en": "Type checker knowledge",
    "answer_hi": "टाइप चेकर नॉलेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which method deallocates raw buffer?",
    "question_hi": "कौन सी मेथड रॉ बफर डीलोकेट करती है?",
    "options_en": ["UnsafeMutableRawBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "options_hi": ["UnsafeMutableRawBufferPointer.deallocate()", "destroy()", "remove()", "clear()"],
    "answer_en": "UnsafeMutableRawBufferPointer.deallocate()",
    "answer_hi": "UnsafeMutableRawBufferPointer.deallocate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is '@_optimize(none)' attribute's use case?",
    "question_hi": "'@_optimize(none)' एट्रिब्यूट का यूज़ केस क्या है?",
    "options_en": ["Debugging or preventing optimizations", "Performance", "Memory saving", "Code size reduction"],
    "options_hi": ["डीबगिंग या ऑप्टिमाइज़ेशन प्रिवेंट करना", "परफॉर्मेंस", "मेमोरी सेविंग", "कोड साइज रिडक्शन"],
    "answer_en": "Debugging or preventing optimizations",
    "answer_hi": "डीबगिंग या ऑप्टिमाइज़ेशन प्रिवेंट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does 'UnsafeMutableBufferPointer.copyInitialize' method preserve?",
    "question_hi": "'UnsafeMutableBufferPointer.copyInitialize' मेथड क्या प्रिज़र्व करती है?",
    "options_en": ["Source buffer contents", "Destination buffer", "Memory allocation", "Buffer size"],
    "options_hi": ["सोर्स बफर कंटेंट", "डेस्टिनेशन बफर", "मेमोरी एलोकेशन", "बफर साइज"],
    "answer_en": "Source buffer contents",
    "answer_hi": "सोर्स बफर कंटेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which attribute marks an enum as frozen?",
    "question_hi": "कौन सा एट्रिब्यूट एनम को फ्रोजन मार्क करता है?",
    "options_en": ["@frozen", "@fixed", "@stable", "@immutable"],
    "options_hi": ["@frozen", "@fixed", "@stable", "@immutable"],
    "answer_en": "@frozen",
    "answer_hi": "@frozen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'UnsafeRawPointer.withMemoryRebound' method's type constraint?",
    "question_hi": "'UnsafeRawPointer.withMemoryRebound' मेथड का टाइप कंस्ट्रेंट क्या है?",
    "options_en": ["Source and destination types must be same size", "No constraint", "Must be reference types", "Must be value types"],
    "options_hi": ["सोर्स और डेस्टिनेशन टाइप्स का साइज समान होना चाहिए", "कोई कंस्ट्रेंट नहीं", "रेफरेंस टाइप्स होने चाहिए", "वैल्यू टाइप्स होने चाहिए"],
    "answer_en": "Source and destination types must be same size",
    "answer_hi": "सोर्स और डेस्टिनेशन टाइप्स का साइज समान होना चाहिए",
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