const questions = [
  {
    "num": 1,
    "question_en": "Which method is used to create a dictionary with default values in Swift?",
    "question_hi": "Swift में डिफ़ॉल्ट वैल्यूज के साथ डिक्शनरी बनाने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["Dictionary(defaultValue:)", "withDefault()", "init(defaultValue:)", "createWithDefault()"],
    "options_hi": ["Dictionary(defaultValue:)", "withDefault()", "init(defaultValue:)", "createWithDefault()"],
    "answer_en": "init(defaultValue:)",
    "answer_hi": "init(defaultValue:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the purpose of '@preconcurrency' attribute in Swift?",
    "question_hi": "Swift में '@preconcurrency' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Suppresses concurrency warnings for non-Sendable types", "Enables concurrency", "Disables concurrency", "Marks async code"],
    "options_hi": ["नॉन-सेंडेबल टाइप्स के लिए कनकरेंसी वार्निंग्स सप्रेस करता है", "कनकरेंसी एनेबल करता है", "कनकरेंसी डिसेबल करता है", "एसिंक कोड मार्क करता है"],
    "answer_en": "Suppresses concurrency warnings for non-Sendable types",
    "answer_hi": "नॉन-सेंडेबल टाइप्स के लिए कनकरेंसी वार्निंग्स सप्रेस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which protocol enables string interpolation with custom types in Swift?",
    "question_hi": "Swift में कस्टम टाइप्स के साथ स्ट्रिंग इंटरपोलेशन एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["CustomStringConvertible", "StringInterpolationProtocol", "ExpressibleByStringInterpolation", "StringFormatable"],
    "options_hi": ["CustomStringConvertible", "StringInterpolationProtocol", "ExpressibleByStringInterpolation", "StringFormatable"],
    "answer_en": "StringInterpolationProtocol",
    "answer_hi": "StringInterpolationProtocol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'distinctUntilChanged()' method do in Combine framework?",
    "question_hi": "Combine फ्रेमवर्क में 'distinctUntilChanged()' मेथड क्या करती है?",
    "options_en": ["Emits only when value changes", "Filters all values", "Maps values", "Combines values"],
    "options_hi": ["केवल तभी एमिट करती है जब वैल्यू चेंज होती है", "सभी वैल्यूज फ़िल्टर करती है", "वैल्यूज मैप करती है", "वैल्यूज कंबाइन करती है"],
    "answer_en": "Emits only when value changes",
    "answer_hi": "केवल तभी एमिट करती है जब वैल्यू चेंज होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which property wrapper is used for two-way binding to UIKit components in SwiftUI?",
    "question_hi": "SwiftUI में UIKit कंपोनेंट्स से टू-वे बाइंडिंग के लिए किस प्रॉपर्टी रैपर का उपयोग किया जाता है?",
    "options_en": ["@State", "@Binding", "@UIKitBinding", "@Coordinator"],
    "options_hi": ["@State", "@Binding", "@UIKitBinding", "@Coordinator"],
    "answer_en": "@Binding",
    "answer_hi": "@Binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'TaskLocal' property wrapper used for in Swift?",
    "question_hi": "Swift में 'TaskLocal' प्रॉपर्टी रैपर का उपयोग किस लिए किया जाता है?",
    "options_en": ["Task-scoped values", "Global values", "Static values", "Thread-local values"],
    "options_hi": ["टास्क-स्कोप्ड वैल्यूज", "ग्लोबल वैल्यूज", "स्टेटिक वैल्यूज", "थ्रेड-लोकल वैल्यूज"],
    "answer_en": "Task-scoped values",
    "answer_hi": "टास्क-स्कोप्ड वैल्यूज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method converts a throwing function to optional in Swift?",
    "question_hi": "Swift में थ्रोइंग फंक्शन को ऑप्शनल में कन्वर्ट करने वाली मेथड कौन सी है?",
    "options_en": ["try?", "try!", "optionalTry()", "catchToOptional()"],
    "options_hi": ["try?", "try!", "optionalTry()", "catchToOptional()"],
    "answer_en": "try?",
    "answer_hi": "try?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does '@ViewBuilder' attribute enable for functions in SwiftUI?",
    "question_hi": "SwiftUI में फंक्शन्स के लिए '@ViewBuilder' एट्रिब्यूट क्या एनेबल करता है?",
    "options_en": ["Multiple view return syntax", "Single view return", "Async views", "Animation builders"],
    "options_hi": ["मल्टीपल व्यू रिटर्न सिंटैक्स", "सिंगल व्यू रिटर्न", "एसिंक व्यूज", "एनिमेशन बिल्डर्स"],
    "answer_en": "Multiple view return syntax",
    "answer_hi": "मल्टीपल व्यू रिटर्न सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which protocol provides 'reduce(into:_:)' method for collections in Swift?",
    "question_hi": "Swift में कलेक्शन्स के लिए 'reduce(into:_:)' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Sequence", "Collection", "Reducer", "Accumulator"],
    "options_hi": ["Sequence", "Collection", "Reducer", "Accumulator"],
    "answer_en": "Sequence",
    "answer_hi": "Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of 'unsafeFlags' in Swift Package Manager?",
    "question_hi": "Swift पैकेज मैनेजर में 'unsafeFlags' का उद्देश्य क्या है?",
    "options_en": ["Pass unsafe compiler flags", "Safe compiler flags", "Package dependencies", "Target settings"],
    "options_hi": ["अनसेफ कंपाइलर फ्लैग्स पास करना", "सेफ कंपाइलर फ्लैग्स", "पैकेज डिपेंडेंसीज", "टार्गेट सेटिंग्स"],
    "answer_en": "Pass unsafe compiler flags",
    "answer_hi": "अनसेफ कंपाइलर फ्लैग्स पास करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method creates a type-erased wrapper for publishers in Combine?",
    "question_hi": "Combine में पब्लिशर्स के लिए टाइप-इरेज़्ड रैपर बनाने वाली मेथड कौन सी है?",
    "options_en": ["eraseToAnyPublisher()", "typeErase()", "anyPublisher()", "wrap()"],
    "options_hi": ["eraseToAnyPublisher()", "typeErase()", "anyPublisher()", "wrap()"],
    "answer_en": "eraseToAnyPublisher()",
    "answer_hi": "eraseToAnyPublisher()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does '@_documentation' attribute provide in Swift?",
    "question_hi": "Swift में '@_documentation' एट्रिब्यूट क्या प्रोवाइड करता है?",
    "options_en": ["Enhanced documentation metadata", "Code documentation", "API documentation", "User documentation"],
    "options_hi": ["एनहांस्ड डॉक्यूमेंटेशन मेटाडेटा", "कोड डॉक्यूमेंटेशन", "API डॉक्यूमेंटेशन", "यूज़र डॉक्यूमेंटेशन"],
    "answer_en": "Enhanced documentation metadata",
    "answer_hi": "एनहांस्ड डॉक्यूमेंटेशन मेटाडेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which protocol enables dynamic member lookup for key paths in Swift?",
    "question_hi": "Swift में की पाथ्स के लिए डायनामिक मेंबर लुकअप एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["DynamicMemberLookup", "KeyPathLookup", "MemberAccess", "DynamicKeyPath"],
    "options_hi": ["DynamicMemberLookup", "KeyPathLookup", "MemberAccess", "DynamicKeyPath"],
    "answer_en": "DynamicMemberLookup",
    "answer_hi": "DynamicMemberLookup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'PreviewProvider' protocol used for in SwiftUI?",
    "question_hi": "SwiftUI में 'PreviewProvider' प्रोटोकॉल का उपयोग किस लिए किया जाता है?",
    "options_en": ["Xcode previews", "Live previews", "Debug previews", "Test previews"],
    "options_hi": ["Xcode प्रीव्यू", "लाइव प्रीव्यू", "डीबग प्रीव्यू", "टेस्ट प्रीव्यू"],
    "answer_en": "Xcode previews",
    "answer_hi": "Xcode प्रीव्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method performs early exit from a function with optional value in Swift?",
    "question_hi": "Swift में ऑप्शनल वैल्यू के साथ फंक्शन से अर्ली एक्जिट परफॉर्म करने वाली मेथड कौन सी है?",
    "options_en": ["guard let", "if let", "??", "!"],
    "options_hi": ["guard let", "if let", "??", "!"],
    "answer_en": "guard let",
    "answer_hi": "guard let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does 'debounce' operator do in Combine framework?",
    "question_hi": "Combine फ्रेमवर्क में 'debounce' ऑपरेटर क्या करता है?",
    "options_en": ["Delays emissions until quiet period", "Filters emissions", "Maps emissions", "Combines emissions"],
    "options_hi": ["शांत अवधि तक एमिशन्स डिले करता है", "एमिशन्स फ़िल्टर करता है", "एमिशन्स मैप करता है", "एमिशन्स कंबाइन करता है"],
    "answer_en": "Delays emissions until quiet period",
    "answer_hi": "शांत अवधि तक एमिशन्स डिले करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which property wrapper provides access to safe area insets in SwiftUI?",
    "question_hi": "SwiftUI में सेफ एरिया इंसेट्स तक पहुंच प्रदान करने वाला प्रॉपर्टी रैपर कौन सा है?",
    "options_en": ["@SafeArea", "@Environment(\\.safeAreaInsets)", "@GeometryReader", "@ViewSafeArea"],
    "options_hi": ["@SafeArea", "@Environment(\\.safeAreaInsets)", "@GeometryReader", "@ViewSafeArea"],
    "answer_en": "@Environment(\\.safeAreaInsets)",
    "answer_hi": "@Environment(\\.safeAreaInsets)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'Identifiable' protocol's requirement in Swift?",
    "question_hi": "Swift में 'Identifiable' प्रोटोकॉल की क्या आवश्यकता है?",
    "options_en": ["id property", "name property", "uuid property", "tag property"],
    "options_hi": ["id प्रॉपर्टी", "name प्रॉपर्टी", "uuid प्रॉपर्टी", "tag प्रॉपर्टी"],
    "answer_en": "id property",
    "answer_hi": "id प्रॉपर्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method creates a shared publisher in Combine?",
    "question_hi": "Combine में शेयर्ड पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["share()", "shared()", "makeShared()", "publishShared()"],
    "options_hi": ["share()", "shared()", "makeShared()", "publishShared()"],
    "answer_en": "share()",
    "answer_hi": "share()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does '@GestureState' property wrapper manage in SwiftUI?",
    "question_hi": "SwiftUI में '@GestureState' प्रॉपर्टी रैपर क्या मैनेज करता है?",
    "options_en": ["Temporary gesture state", "Permanent state", "View state", "App state"],
    "options_hi": ["टेम्पररी जेस्चर स्टेट", "पर्मानेंट स्टेट", "व्यू स्टेट", "ऐप स्टेट"],
    "answer_en": "Temporary gesture state",
    "answer_hi": "टेम्पररी जेस्चर स्टेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which protocol provides 'compactMapValues' method for dictionaries in Swift?",
    "question_hi": "Swift में डिक्शनरी के लिए 'compactMapValues' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Dictionary", "Mapable", "CompactMappable", "Sequence"],
    "options_hi": ["Dictionary", "Mapable", "CompactMappable", "Sequence"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'actor-isolated' method in Swift concurrency?",
    "question_hi": "Swift कनकरेंसी में 'actor-isolated' मेथड क्या है?",
    "options_en": ["Method that runs on actor's executor", "Global method", "Static method", "Async method"],
    "options_hi": ["ऐक्टर के एक्जिक्यूटर पर चलने वाली मेथड", "ग्लोबल मेथड", "स्टेटिक मेथड", "एसिंक मेथड"],
    "answer_en": "Method that runs on actor's executor",
    "answer_hi": "ऐक्टर के एक्जिक्यूटर पर चलने वाली मेथड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which operator combines latest values from multiple publishers in Combine?",
    "question_hi": "Combine में मल्टीपल पब्लिशर्स से लेटेस्ट वैल्यूज कंबाइन करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["combineLatest", "merge", "zip", "concat"],
    "options_hi": ["combineLatest", "merge", "zip", "concat"],
    "answer_en": "combineLatest",
    "answer_hi": "combineLatest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does '@SceneStorage' property wrapper persist in SwiftUI?",
    "question_hi": "SwiftUI में '@SceneStorage' प्रॉपर्टी रैपर क्या परसिस्ट करता है?",
    "options_en": ["Scene-specific data", "App-wide data", "User defaults", "File data"],
    "options_hi": ["सीन-स्पेसिफिक डेटा", "ऐप-वाइड डेटा", "यूज़र डिफ़ॉल्ट्स", "फाइल डेटा"],
    "answer_en": "Scene-specific data",
    "answer_hi": "सीन-स्पेसिफिक डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which protocol enables custom pattern matching in Swift switch statements?",
    "question_hi": "Swift स्विच स्टेटमेंट्स में कस्टम पैटर्न मैचिंग एनेबल करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["PatternMatchable", "CaseIterable", "Equatable", "CustomMatching"],
    "options_hi": ["PatternMatchable", "CaseIterable", "Equatable", "CustomMatching"],
    "answer_en": "CaseIterable",
    "answer_hi": "CaseIterable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'Task.yield()' method used for in Swift concurrency?",
    "question_hi": "Swift कनकरेंसी में 'Task.yield()' मेथड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Voluntarily suspends task", "Cancels task", "Resumes task", "Creates task"],
    "options_hi": ["स्वेच्छा से टास्क सस्पेंड करता है", "टास्क कैंसल करता है", "टास्क रिज्यूम करता है", "टास्क क्रिएट करता है"],
    "answer_en": "Voluntarily suspends task",
    "answer_hi": "स्वेच्छा से टास्क सस्पेंड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which property wrapper provides focus management in SwiftUI forms?",
    "question_hi": "SwiftUI फॉर्म्स में फोकस मैनेजमेंट प्रोवाइड करने वाला प्रॉपर्टी रैपर कौन सा है?",
    "options_en": ["@FocusState", "@Focused", "@Focus", "@TextFieldFocus"],
    "options_hi": ["@FocusState", "@Focused", "@Focus", "@TextFieldFocus"],
    "answer_en": "@FocusState",
    "answer_hi": "@FocusState",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does 'scan' operator do in Combine framework?",
    "question_hi": "Combine फ्रेमवर्क में 'scan' ऑपरेटर क्या करता है?",
    "options_en": ["Accumulates values over time", "Filters values", "Maps values", "Combines values"],
    "options_hi": ["समय के साथ वैल्यूज एक्यूमुलेट करता है", "वैल्यूज फ़िल्टर करता है", "वैल्यूज मैप करता है", "वैल्यूज कंबाइन करता है"],
    "answer_en": "Accumulates values over time",
    "answer_hi": "समय के साथ वैल्यूज एक्यूमुलेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which protocol provides 'removeDuplicates' method in Combine?",
    "question_hi": "Combine में 'removeDuplicates' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Equatable", "Comparable", "Hashable"],
    "options_hi": ["Publisher", "Equatable", "Comparable", "Hashable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is '@MainActor' attribute's purpose in Swift concurrency?",
    "question_hi": "Swift कनकरेंसी में '@MainActor' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Ensures code runs on main thread", "Runs in background", "Async execution", "Parallel execution"],
    "options_hi": ["कोड को मेन थ्रेड पर रन करवाता है", "बैकग्राउंड में रन करता है", "एसिंक एक्जिक्यूशन", "पैरेलल एक्जिक्यूशन"],
    "answer_en": "Ensures code runs on main thread",
    "answer_hi": "कोड को मेन थ्रेड पर रन करवाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method creates a sink subscriber in Combine?",
    "question_hi": "Combine में सिंक सब्सक्राइबर बनाने वाली मेथड कौन सी है?",
    "options_en": ["sink(receiveValue:)", "subscribe()", "receive()", "listen()"],
    "options_hi": ["sink(receiveValue:)", "subscribe()", "receive()", "listen()"],
    "answer_en": "sink(receiveValue:)",
    "answer_hi": "sink(receiveValue:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does '\.self' key path refer to in Swift?",
    "question_hi": "Swift में '\.self' की पाथ क्या रेफर करती है?",
    "options_en": ["The instance itself", "Self type", "Static self", "Metatype"],
    "options_hi": ["इंस्टेंस खुद", "Self टाइप", "स्टेटिक self", "मेटाटाइप"],
    "answer_en": "The instance itself",
    "answer_hi": "इंस्टेंस खुद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which property wrapper provides adaptive size classes in SwiftUI?",
    "question_hi": "SwiftUI में एडेप्टिव साइज क्लासेस प्रोवाइड करने वाला प्रॉपर्टी रैपर कौन सा है?",
    "options_en": ["@Environment(\\.horizontalSizeClass)", "@SizeClass", "@AdaptiveSize", "@DeviceSize"],
    "options_hi": ["@Environment(\\.horizontalSizeClass)", "@SizeClass", "@AdaptiveSize", "@DeviceSize"],
    "answer_en": "@Environment(\\.horizontalSizeClass)",
    "answer_hi": "@Environment(\\.horizontalSizeClass)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'nonisolated' keyword used for in Swift actors?",
    "question_hi": "Swift ऐक्टर्स में 'nonisolated' कीवर्ड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Methods that don't require actor isolation", "Isolated methods", "Async methods", "Sync methods"],
    "options_hi": ["ऐसी मेथड्स जिन्हें ऐक्टर आइसोलेशन की आवश्यकता नहीं", "आइसोलेटेड मेथड्स", "एसिंक मेथड्स", "सिंक मेथड्स"],
    "answer_en": "Methods that don't require actor isolation",
    "answer_hi": "ऐसी मेथड्स जिन्हें ऐक्टर आइसोलेशन की आवश्यकता नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which operator delays emissions in Combine?",
    "question_hi": "Combine में एमिशन्स डिले करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["delay", "debounce", "throttle", "wait"],
    "options_hi": ["delay", "debounce", "throttle", "wait"],
    "answer_en": "delay",
    "answer_hi": "delay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does '@ViewBuilder' closure return type allow?",
    "question_hi": "'@ViewBuilder' क्लोजर का रिटर्न टाइप क्या अलाउ करता है?",
    "options_en": ["Multiple View or empty view", "Single View only", "Any type", "No return"],
    "options_hi": ["मल्टीपल व्यू या खाली व्यू", "केवल सिंगल व्यू", "कोई भी टाइप", "कोई रिटर्न नहीं"],
    "answer_en": "Multiple View or empty view",
    "answer_hi": "मल्टीपल व्यू या खाली व्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which protocol provides 'mapError' method in Combine?",
    "question_hi": "Combine में 'mapError' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "ErrorMappable", "Throwable", "ErrorHandler"],
    "options_hi": ["Publisher", "ErrorMappable", "Throwable", "ErrorHandler"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is '\.dismiss' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.dismiss' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Dismissing modal views", "Closing apps", "Hiding keyboards", "Removing views"],
    "options_hi": ["मोडल व्यूज डिसमिस करना", "ऐप्स बंद करना", "कीबोर्ड छुपाना", "व्यूज रिमूव करना"],
    "answer_en": "Dismissing modal views",
    "answer_hi": "मोडल व्यूज डिसमिस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method creates a multicast publisher in Combine?",
    "question_hi": "Combine में मल्टीकास्ट पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["multicast()", "broadcast()", "shareToMany()", "publishToAll()"],
    "options_hi": ["multicast()", "broadcast()", "shareToMany()", "publishToAll()"],
    "answer_en": "multicast()",
    "answer_hi": "multicast()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does '@UIApplicationDelegateAdaptor' do in SwiftUI?",
    "question_hi": "SwiftUI में '@UIApplicationDelegateAdaptor' क्या करता है?",
    "options_en": ["Bridges AppDelegate to SwiftUI", "Creates app delegate", "Replaces AppDelegate", "Removes AppDelegate"],
    "options_hi": ["AppDelegate को SwiftUI से जोड़ता है", "ऐप डेलीगेट क्रिएट करता है", "AppDelegate रिप्लेस करता है", "AppDelegate रिमूव करता है"],
    "answer_en": "Bridges AppDelegate to SwiftUI",
    "answer_hi": "AppDelegate को SwiftUI से जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which protocol provides 'tryMap' method in Combine?",
    "question_hi": "Combine में 'tryMap' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "TryMappable", "ThrowingMap", "ErrorMap"],
    "options_hi": ["Publisher", "TryMappable", "ThrowingMap", "ErrorMap"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is '\.accessibilityReduceMotion' environment value for in SwiftUI?",
    "question_hi": "SwiftUI में '\.accessibilityReduceMotion' एनवायरनमेंट वैल्यू किस लिए है?",
    "options_en": ["Detecting reduced motion setting", "Controlling animation", "Disabling animations", "Speeding up animations"],
    "options_hi": ["रिड्यूस्ड मोशन सेटिंग डिटेक्ट करना", "एनिमेशन कंट्रोल करना", "एनिमेशन्स डिसेबल करना", "एनिमेशन्स स्पीड अप करना"],
    "answer_en": "Detecting reduced motion setting",
    "answer_hi": "रिड्यूस्ड मोशन सेटिंग डिटेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator combines publishers sequentially in Combine?",
    "question_hi": "Combine में पब्लिशर्स को सीक्वेंशियली कंबाइन करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["concat", "merge", "zip", "combineLatest"],
    "options_hi": ["concat", "merge", "zip", "combineLatest"],
    "answer_en": "concat",
    "answer_hi": "concat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does '@StateObject' ensure about object lifecycle in SwiftUI?",
    "question_hi": "SwiftUI में '@StateObject' ऑब्जेक्ट लाइफसाइकल के बारे में क्या एनश्योर करता है?",
    "options_en": ["Ownership and persistence", "Sharing", "Temporary storage", "Automatic cleanup"],
    "options_hi": ["ओनरशिप और परसिस्टेंस", "शेयरिंग", "टेम्पररी स्टोरेज", "ऑटोमेटिक क्लीनअप"],
    "answer_en": "Ownership and persistence",
    "answer_hi": "ओनरशिप और परसिस्टेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which protocol provides 'handleEvents' method in Combine?",
    "question_hi": "Combine में 'handleEvents' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "EventHandling", "Observable", "EventPublisher"],
    "options_hi": ["Publisher", "EventHandling", "Observable", "EventPublisher"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is '\.colorScheme' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.colorScheme' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Detecting light/dark mode", "Setting colors", "Creating themes", "Managing palettes"],
    "options_hi": ["लाइट/डार्क मोड डिटेक्ट करना", "कलर सेट करना", "थीम्स क्रिएट करना", "पैलेट्स मैनेज करना"],
    "answer_en": "Detecting light/dark mode",
    "answer_hi": "लाइट/डार्क मोड डिटेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method creates a future publisher in Combine?",
    "question_hi": "Combine में फ्यूचर पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Future(operation:)", "createFuture()", "makeFuture()", "asyncFuture()"],
    "options_hi": ["Future(operation:)", "createFuture()", "makeFuture()", "asyncFuture()"],
    "answer_en": "Future(operation:)",
    "answer_hi": "Future(operation:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does '@ScaledMetric' property wrapper adapt in SwiftUI?",
    "question_hi": "SwiftUI में '@ScaledMetric' प्रॉपर्टी रैपर क्या एडाप्ट करता है?",
    "options_en": ["Dynamic type size scaling", "Screen size", "Device orientation", "Color scheme"],
    "options_hi": ["डायनामिक टाइप साइज स्केलिंग", "स्क्रीन साइज", "डिवाइस ओरिएंटेशन", "कलर स्कीम"],
    "answer_en": "Dynamic type size scaling",
    "answer_hi": "डायनामिक टाइप साइज स्केलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which protocol provides 'timeout' method in Combine?",
    "question_hi": "Combine में 'timeout' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Timed", "Timeoutable", "Scheduler"],
    "options_hi": ["Publisher", "Timed", "Timeoutable", "Scheduler"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is '\.locale' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.locale' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Detecting user's locale", "Setting language", "Formatting dates", "Localizing strings"],
    "options_hi": ["यूज़र की लोकेल डिटेक्ट करना", "भाषा सेट करना", "डेट्स फॉर्मेट करना", "स्ट्रिंग्स लोकलाइज़ करना"],
    "answer_en": "Detecting user's locale",
    "answer_hi": "यूज़र की लोकेल डिटेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which operator buffers emissions in Combine?",
    "question_hi": "Combine में एमिशन्स बफर करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["buffer", "store", "cache", "hold"],
    "options_hi": ["buffer", "store", "cache", "hold"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does '@FetchRequest' property wrapper integrate with in SwiftUI?",
    "question_hi": "SwiftUI में '@FetchRequest' प्रॉपर्टी रैपर किसके साथ इंटीग्रेट होता है?",
    "options_en": ["Core Data", "UserDefaults", "File system", "Network"],
    "options_hi": ["Core Data", "UserDefaults", "फाइल सिस्टम", "नेटवर्क"],
    "answer_en": "Core Data",
    "answer_hi": "Core Data",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which protocol provides 'catch' method in Combine?",
    "question_hi": "Combine में 'catch' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "ErrorHandling", "Throwable", "Recoverable"],
    "options_hi": ["Publisher", "ErrorHandling", "Throwable", "Recoverable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is '\.managedObjectContext' environment value for in SwiftUI?",
    "question_hi": "SwiftUI में '\.managedObjectContext' एनवायरनमेंट वैल्यू किस लिए है?",
    "options_en": ["Core Data context", "View context", "App context", "Data context"],
    "options_hi": ["Core Data कॉन्टेक्स्ट", "व्यू कॉन्टेक्स्ट", "ऐप कॉन्टेक्स्ट", "डेटा कॉन्टेक्स्ट"],
    "answer_en": "Core Data context",
    "answer_hi": "Core Data कॉन्टेक्स्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which method creates a just publisher in Combine?",
    "question_hi": "Combine में जस्ट पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Just(value)", "createJust()", "makeJust()", "publishJust()"],
    "options_hi": ["Just(value)", "createJust()", "makeJust()", "publishJust()"],
    "answer_en": "Just(value)",
    "answer_hi": "Just(value)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does '@GestureState' reset to after gesture ends?",
    "question_hi": "जेस्चर खत्म होने के बाद '@GestureState' क्या रीसेट होता है?",
    "options_en": ["Initial value", "Current value", "Zero", "Nil"],
    "options_hi": ["इनिशियल वैल्यू", "करंट वैल्यू", "जीरो", "निल"],
    "answer_en": "Initial value",
    "answer_hi": "इनिशियल वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which protocol provides 'flatMap' method in Combine?",
    "question_hi": "Combine में 'flatMap' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "FlatMappable", "NestedMap", "Transformable"],
    "options_hi": ["Publisher", "FlatMappable", "NestedMap", "Transformable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is '\.displayScale' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.displayScale' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Screen scale factor", "Display size", "Resolution", "Pixel density"],
    "options_hi": ["स्क्रीन स्केल फैक्टर", "डिस्प्ले साइज", "रिज़ॉल्यूशन", "पिक्सेल डेंसिटी"],
    "answer_en": "Screen scale factor",
    "answer_hi": "स्क्रीन स्केल फैक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which operator creates a timer publisher in Combine?",
    "question_hi": "Combine में टाइमर पब्लिशर बनाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["Timer.publish()", "createTimer()", "makeTimer()", "timerPublisher()"],
    "options_hi": ["Timer.publish()", "createTimer()", "makeTimer()", "timerPublisher()"],
    "answer_en": "Timer.publish()",
    "answer_hi": "Timer.publish()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does '@EnvironmentObject' require to be injected?",
    "question_hi": "'@EnvironmentObject' को इंजेक्ट करने के लिए क्या आवश्यक है?",
    "options_en": ["Object in environment", "Object creation", "Object initialization", "Object destruction"],
    "options_hi": ["एनवायरनमेंट में ऑब्जेक्ट", "ऑब्जेक्ट क्रिएशन", "ऑब्जेक्ट इनिशियलाइज़ेशन", "ऑब्जेक्ट डिस्ट्रक्शन"],
    "answer_en": "Object in environment",
    "answer_hi": "एनवायरनमेंट में ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which protocol provides 'switchToLatest' method in Combine?",
    "question_hi": "Combine में 'switchToLatest' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Switchable", "LatestPublisher", "Flattenable"],
    "options_hi": ["Publisher", "Switchable", "LatestPublisher", "Flattenable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is '\.sizeCategory' environment value for in SwiftUI?",
    "question_hi": "SwiftUI में '\.sizeCategory' एनवायरनमेंट वैल्यू किस लिए है?",
    "options_en": ["Dynamic type size", "View size", "Screen size", "Font size"],
    "options_hi": ["डायनामिक टाइप साइज", "व्यू साइज", "स्क्रीन साइज", "फॉन्ट साइज"],
    "answer_en": "Dynamic type size",
    "answer_hi": "डायनामिक टाइप साइज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which method creates an empty publisher in Combine?",
    "question_hi": "Combine में एम्प्टी पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Empty()", "createEmpty()", "makeEmpty()", "publishEmpty()"],
    "options_hi": ["Empty()", "createEmpty()", "makeEmpty()", "publishEmpty()"],
    "answer_en": "Empty()",
    "answer_hi": "Empty()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does '@ObservedObject' do when object changes in SwiftUI?",
    "question_hi": "SwiftUI में जब ऑब्जेक्ट चेंज होता है तो '@ObservedObject' क्या करता है?",
    "options_en": ["Triggers view update", "Does nothing", "Logs change", "Cancels update"],
    "options_hi": ["व्यू अपडेट ट्रिगर करता है", "कुछ नहीं करता", "चेंज लॉग करता है", "अपडेट कैंसल करता है"],
    "answer_en": "Triggers view update",
    "answer_hi": "व्यू अपडेट ट्रिगर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which protocol provides 'filter' method in Combine?",
    "question_hi": "Combine में 'filter' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Filterable", "Conditional", "Selectable"],
    "options_hi": ["Publisher", "Filterable", "Conditional", "Selectable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is '\.layoutDirection' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.layoutDirection' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Right-to-left layout", "Left-to-right layout", "Vertical layout", "Horizontal layout"],
    "options_hi": ["राइट-टू-लेफ्ट लेआउट", "लेफ्ट-टू-राइट लेआउट", "वर्टिकल लेआउट", "हॉरिजॉन्टल लेआउट"],
    "answer_en": "Right-to-left layout",
    "answer_hi": "राइट-टू-लेफ्ट लेआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which operator throttles emissions in Combine?",
    "question_hi": "Combine में एमिशन्स थ्रोटल करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["throttle", "debounce", "delay", "slow"],
    "options_hi": ["throttle", "debounce", "delay", "slow"],
    "answer_en": "throttle",
    "answer_hi": "throttle",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does '@Published' property wrapper make observable?",
    "question_hi": "'@Published' प्रॉपर्टी रैपर क्या ऑब्ज़र्वेबल बनाता है?",
    "options_en": ["Property changes", "View changes", "Model changes", "App changes"],
    "options_hi": ["प्रॉपर्टी चेंजेस", "व्यू चेंजेस", "मॉडल चेंजेस", "ऐप चेंजेस"],
    "answer_en": "Property changes",
    "answer_hi": "प्रॉपर्टी चेंजेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which protocol provides 'first' method in Combine?",
    "question_hi": "Combine में 'first' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Firstable", "Initial", "Starting"],
    "options_hi": ["Publisher", "Firstable", "Initial", "Starting"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is '\.presentationMode' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.presentationMode' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Dismissing sheets", "Presenting views", "Mode switching", "View presentation"],
    "options_hi": ["शीट्स डिसमिस करना", "व्यूज प्रेजेंट करना", "मोड स्विचिंग", "व्यू प्रेजेंटेशन"],
    "answer_en": "Dismissing sheets",
    "answer_hi": "शीट्स डिसमिस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which method creates a fail publisher in Combine?",
    "question_hi": "Combine में फेल पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Fail(error:)", "createFail()", "makeFail()", "publishFail()"],
    "options_hi": ["Fail(error:)", "createFail()", "makeFail()", "publishFail()"],
    "answer_en": "Fail(error:)",
    "answer_hi": "Fail(error:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does '@AppStorage' property wrapper sync with?",
    "question_hi": "'@AppStorage' प्रॉपर्टी रैपर किसके साथ सिंक करता है?",
    "options_en": ["UserDefaults", "iCloud", "File system", "Network"],
    "options_hi": ["UserDefaults", "iCloud", "फाइल सिस्टम", "नेटवर्क"],
    "answer_en": "UserDefaults",
    "answer_hi": "UserDefaults",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which protocol provides 'last' method in Combine?",
    "question_hi": "Combine में 'last' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Lastable", "Final", "Ending"],
    "options_hi": ["Publisher", "Lastable", "Final", "Ending"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is '\.isEnabled' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.isEnabled' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["View enabled state", "Feature flags", "User permissions", "App state"],
    "options_hi": ["व्यू एनेबल्ड स्टेट", "फीचर फ्लैग्स", "यूज़र परमिशन", "ऐप स्टेट"],
    "answer_en": "View enabled state",
    "answer_hi": "व्यू एनेबल्ड स्टेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which operator creates a sequence publisher in Combine?",
    "question_hi": "Combine में सीक्वेंस पब्लिशर बनाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["Publishers.Sequence", "createSequence()", "makeSequence()", "sequencePublisher()"],
    "options_hi": ["Publishers.Sequence", "createSequence()", "makeSequence()", "sequencePublisher()"],
    "answer_en": "Publishers.Sequence",
    "answer_hi": "Publishers.Sequence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does '@State' property wrapper manage in SwiftUI?",
    "question_hi": "SwiftUI में '@State' प्रॉपर्टी रैपर क्या मैनेज करता है?",
    "options_en": ["View's private state", "App state", "Shared state", "Persistent state"],
    "options_hi": ["व्यू की प्राइवेट स्टेट", "ऐप स्टेट", "शेयर्ड स्टेट", "परसिस्टेंट स्टेट"],
    "answer_en": "View's private state",
    "answer_hi": "व्यू की प्राइवेट स्टेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which protocol provides 'count' method in Combine?",
    "question_hi": "Combine में 'count' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Countable", "Measurable", "Quantifiable"],
    "options_hi": ["Publisher", "Countable", "Measurable", "Quantifiable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is '\.redactionReasons' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.redactionReasons' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Content redaction", "Text hiding", "View removal", "Data masking"],
    "options_hi": ["कंटेंट रिडक्शन", "टेक्स्ट हाइडिंग", "व्यू रिमूवल", "डेटा मास्किंग"],
    "answer_en": "Content redaction",
    "answer_hi": "कंटेंट रिडक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which method creates a deferred publisher in Combine?",
    "question_hi": "Combine में डिफर्ड पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["Deferred(createPublisher:)", "createDeferred()", "makeDeferred()", "deferPublisher()"],
    "options_hi": ["Deferred(createPublisher:)", "createDeferred()", "makeDeferred()", "deferPublisher()"],
    "answer_en": "Deferred(createPublisher:)",
    "answer_hi": "Deferred(createPublisher:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does '@Binding' property wrapper create in SwiftUI?",
    "question_hi": "SwiftUI में '@Binding' प्रॉपर्टी रैपर क्या क्रिएट करता है?",
    "options_en": ["Two-way connection to state", "One-way connection", "Read-only connection", "Write-only connection"],
    "options_hi": ["स्टेट से टू-वे कनेक्शन", "वन-वे कनेक्शन", "रीड-ओनली कनेक्शन", "राइट-ओनली कनेक्शन"],
    "answer_en": "Two-way connection to state",
    "answer_hi": "स्टेट से टू-वे कनेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which protocol provides 'output' method in Combine?",
    "question_hi": "Combine में 'output' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Outputable", "Producible", "Emittable"],
    "options_hi": ["Publisher", "Outputable", "Producible", "Emittable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is '\.controlSize' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.controlSize' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Control sizing", "View size", "Text size", "Button size"],
    "options_hi": ["कंट्रोल साइज़िंग", "व्यू साइज", "टेक्स्ट साइज", "बटन साइज"],
    "answer_en": "Control sizing",
    "answer_hi": "कंट्रोल साइज़िंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which operator creates a record publisher in Combine?",
    "question_hi": "Combine में रिकॉर्ड पब्लिशर बनाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["Record(recording:)", "createRecord()", "makeRecord()", "recordPublisher()"],
    "options_hi": ["Record(recording:)", "createRecord()", "makeRecord()", "recordPublisher()"],
    "answer_en": "Record(recording:)",
    "answer_hi": "Record(recording:)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does '@Namespace' property wrapper provide in SwiftUI?",
    "question_hi": "SwiftUI में '@Namespace' प्रॉपर्टी रैपर क्या प्रोवाइड करता है?",
    "options_en": ["Animation namespace", "View namespace", "Data namespace", "Style namespace"],
    "options_hi": ["एनिमेशन नेमस्पेस", "व्यू नेमस्पेस", "डेटा नेमस्पेस", "स्टाइल नेमस्पेस"],
    "answer_en": "Animation namespace",
    "answer_hi": "एनिमेशन नेमस्पेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which protocol provides 'collect' method in Combine?",
    "question_hi": "Combine में 'collect' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Collectable", "Gatherable", "Accumulable"],
    "options_hi": ["Publisher", "Collectable", "Gatherable", "Accumulable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is '\.lineLimit' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.lineLimit' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Text line limiting", "View limits", "Layout limits", "Content limits"],
    "options_hi": ["टेक्स्ट लाइन लिमिटिंग", "व्यू लिमिट्स", "लेआउट लिमिट्स", "कंटेंट लिमिट्स"],
    "answer_en": "Text line limiting",
    "answer_hi": "टेक्स्ट लाइन लिमिटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which method creates a subject publisher in Combine?",
    "question_hi": "Combine में सब्जेक्ट पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["PassthroughSubject()", "createSubject()", "makeSubject()", "subjectPublisher()"],
    "options_hi": ["PassthroughSubject()", "createSubject()", "makeSubject()", "subjectPublisher()"],
    "answer_en": "PassthroughSubject()",
    "answer_hi": "PassthroughSubject()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does '@FocusedValue' property wrapper access in SwiftUI?",
    "question_hi": "SwiftUI में '@FocusedValue' प्रॉपर्टी रैपर क्या एक्सेस करता है?",
    "options_en": ["Focused view's values", "All view values", "App values", "User values"],
    "options_hi": ["फोकस्ड व्यू के वैल्यूज", "सभी व्यू वैल्यूज", "ऐप वैल्यूज", "यूज़र वैल्यूज"],
    "answer_en": "Focused view's values",
    "answer_hi": "फोकस्ड व्यू के वैल्यूज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which protocol provides 'drop' method in Combine?",
    "question_hi": "Combine में 'drop' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Droppable", "Skipable", "Omittable"],
    "options_hi": ["Publisher", "Droppable", "Skipable", "Omittable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is '\.symbolRenderingMode' environment value used for in SwiftUI?",
    "question_hi": "SwiftUI में '\.symbolRenderingMode' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["SF Symbols rendering", "Icon rendering", "Image rendering", "Graphics rendering"],
    "options_hi": ["SF Symbols रेंडरिंग", "आइकन रेंडरिंग", "इमेज रेंडरिंग", "ग्राफिक्स रेंडरिंग"],
    "answer_en": "SF Symbols rendering",
    "answer_hi": "SF Symbols रेंडरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which operator creates a measurement publisher in Combine?",
    "question_hi": "Combine में मेजरमेंट पब्लिशर बनाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["MeasurementPublisher", "createMeasurement()", "makeMeasurement()", "measurementPublisher()"],
    "options_hi": ["MeasurementPublisher", "createMeasurement()", "makeMeasurement()", "measurementPublisher()"],
    "answer_en": "MeasurementPublisher",
    "answer_hi": "MeasurementPublisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does '@ScaledMetric' adapt based on in SwiftUI?",
    "question_hi": "SwiftUI में '@ScaledMetric' किसके आधार पर एडाप्ट होता है?",
    "options_en": ["Dynamic type settings", "Screen size", "Device model", "OS version"],
    "options_hi": ["डायनामिक टाइप सेटिंग्स", "स्क्रीन साइज", "डिवाइस मॉडल", "OS वर्जन"],
    "answer_en": "Dynamic type settings",
    "answer_hi": "डायनामिक टाइप सेटिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which protocol provides 'prefix' method in Combine?",
    "question_hi": "Combine में 'prefix' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Prefixable", "Startable", "Initializable"],
    "options_hi": ["Publisher", "Prefixable", "Startable", "Initializable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is '\.accessibilityDifferentiateWithoutColor' environment value for?",
    "question_hi": "'\.accessibilityDifferentiateWithoutColor' एनवायरनमेंट वैल्यू किस लिए है?",
    "options_en": ["Color differentiation setting", "Color blindness", "High contrast", "Visual impairment"],
    "options_hi": ["कलर डिफरेंशिएशन सेटिंग", "कलर ब्लाइंडनेस", "हाई कंट्रास्ट", "विजुअल इम्पेयरमेंट"],
    "answer_en": "Color differentiation setting",
    "answer_hi": "कलर डिफरेंशिएशन सेटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which method creates a data task publisher in Combine?",
    "question_hi": "Combine में डेटा टास्क पब्लिशर बनाने वाली मेथड कौन सी है?",
    "options_en": ["URLSession.shared.dataTaskPublisher", "createDataTask()", "makeDataTask()", "dataTaskPublisher()"],
    "options_hi": ["URLSession.shared.dataTaskPublisher", "createDataTask()", "makeDataTask()", "dataTaskPublisher()"],
    "answer_en": "URLSession.shared.dataTaskPublisher",
    "answer_hi": "URLSession.shared.dataTaskPublisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does '@Environment' property wrapper access in SwiftUI?",
    "question_hi": "SwiftUI में '@Environment' प्रॉपर्टी रैपर क्या एक्सेस करता है?",
    "options_en": ["System-wide values", "View-specific values", "App values", "User values"],
    "options_hi": ["सिस्टम-वाइड वैल्यूज", "व्यू-स्पेसिफिक वैल्यूज", "ऐप वैल्यूज", "यूज़र वैल्यूज"],
    "answer_en": "System-wide values",
    "answer_hi": "सिस्टम-वाइड वैल्यूज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which protocol provides 'sink' method in Combine?",
    "question_hi": "Combine में 'sink' मेथड प्रोवाइड करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Publisher", "Sinkable", "Receivable", "Consumable"],
    "options_hi": ["Publisher", "Sinkable", "Receivable", "Consumable"],
    "answer_en": "Publisher",
    "answer_hi": "Publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is '\.accessibilityInvertColors' environment value used for?",
    "question_hi": "'\.accessibilityInvertColors' एनवायरनमेंट वैल्यू का उपयोग किस लिए किया जाता है?",
    "options_en": ["Smart invert setting", "Color inversion", "Dark mode", "High contrast"],
    "options_hi": ["स्मार्ट इनवर्ट सेटिंग", "कलर इनवर्जन", "डार्क मोड", "हाई कंट्रास्ट"],
    "answer_en": "Smart invert setting",
    "answer_hi": "स्मार्ट इनवर्ट सेटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which operator creates a notification publisher in Combine?",
    "question_hi": "Combine में नोटिफिकेशन पब्लिशर बनाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["NotificationCenter.default.publisher", "createNotification()", "makeNotification()", "notificationPublisher()"],
    "options_hi": ["NotificationCenter.default.publisher", "createNotification()", "makeNotification()", "notificationPublisher()"],
    "answer_en": "NotificationCenter.default.publisher",
    "answer_hi": "NotificationCenter.default.publisher",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What does '@UIApplicationDelegateAdaptor' property wrapper bridge?",
    "question_hi": "'@UIApplicationDelegateAdaptor' प्रॉपर्टी रैपर क्या ब्रिज करता है?",
    "options_en": ["UIKit AppDelegate to SwiftUI", "SwiftUI to UIKit", "UIKit to AppKit", "SwiftUI to AppKit"],
    "options_hi": ["UIKit AppDelegate को SwiftUI से", "SwiftUI को UIKit से", "UIKit को AppKit से", "SwiftUI को AppKit से"],
    "answer_en": "UIKit AppDelegate to SwiftUI",
    "answer_hi": "UIKit AppDelegate को SwiftUI से",
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