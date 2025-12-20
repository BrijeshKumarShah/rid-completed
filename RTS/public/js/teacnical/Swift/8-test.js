const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of '@_specialize' attribute's 'spi' parameter in Swift?",
    "question_hi": "Swift में '@_specialize' एट्रिब्यूट के 'spi' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["System Programming Interface specialization", "Swift Package Index", "Specialized interface", "Standard protocol implementation"],
    "options_hi": ["सिस्टम प्रोग्रामिंग इंटरफेस स्पेशलाइज़ेशन", "Swift पैकेज इंडेक्स", "स्पेशलाइज़्ड इंटरफेस", "स्टैंडर्ड प्रोटोकॉल इम्प्लीमेंटेशन"],
    "answer_en": "System Programming Interface specialization",
    "answer_hi": "सिस्टम प्रोग्रामिंग इंटरफेस स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which protocol provides custom encoding for Result types in Swift?",
    "question_hi": "Swift में Result टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Result with Encodable success/failure", "ResultEncodable", "EncodableResult", "No specific protocol"],
    "options_hi": ["Encodable सक्सेस/फेलियर वाला Result", "ResultEncodable", "EncodableResult", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Result with Encodable success/failure",
    "answer_hi": "Encodable सक्सेस/फेलियर वाला Result",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does '@_optimize(size)' attribute do to a function?",
    "question_hi": "'@_optimize(size)' एट्रिब्यूट किसी फ़ंक्शन पर क्या करता है?",
    "options_en": ["Optimizes for code size", "Optimizes for speed", "Disables optimization", "Enables debug mode"],
    "options_hi": ["कोड साइज़ के लिए ऑप्टिमाइज़ करता है", "स्पीड के लिए ऑप्टिमाइज़ करता है", "ऑप्टिमाइज़ेशन अक्षम करता है", "डीबग मोड सक्षम करता है"],
    "answer_en": "Optimizes for code size",
    "answer_hi": "कोड साइज़ के लिए ऑप्टिमाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method creates a type-erased binding in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड बाइंडिंग बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyBinding", "eraseToAnyBinding()", "Binding.erase()", "No type-erased binding"],
    "options_hi": ["AnyBinding", "eraseToAnyBinding()", "Binding.erase()", "कोई टाइप-इरेज़्ड बाइंडिंग नहीं"],
    "answer_en": "No type-erased binding",
    "answer_hi": "कोई टाइप-इरेज़्ड बाइंडिंग नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'generic_signature' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'generic_signature' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Specifies generic signature for specialization", "Generic type name", "Protocol requirements", "Type constraints"],
    "options_hi": ["स्पेशलाइज़ेशन के लिए जेनेरिक सिग्नेचर निर्दिष्ट करता है", "जेनेरिक टाइप नाम", "प्रोटोकॉल रिक्वायरमेंट्स", "टाइप कंस्ट्रेंट्स"],
    "answer_en": "Specifies generic signature for specialization",
    "answer_hi": "स्पेशलाइज़ेशन के लिए जेनेरिक सिग्नेचर निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which protocol provides custom decoding for Result types in Swift?",
    "question_hi": "Swift में Result टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Result with Decodable success/failure", "ResultDecodable", "DecodableResult", "No specific protocol"],
    "options_hi": ["Decodable सक्सेस/फेलियर वाला Result", "ResultDecodable", "DecodableResult", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Result with Decodable success/failure",
    "answer_hi": "Decodable सक्सेस/फेलियर वाला Result",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does '@_optimize(speed)' attribute do to a function?",
    "question_hi": "'@_optimize(speed)' एट्रिब्यूट किसी फ़ंक्शन पर क्या करता है?",
    "options_en": ["Optimizes for execution speed", "Optimizes for size", "Disables optimization", "Enables safety checks"],
    "options_hi": ["एक्जीक्यूशन स्पीड के लिए ऑप्टिमाइज़ करता है", "साइज़ के लिए ऑप्टिमाइज़ करता है", "ऑप्टिमाइज़ेशन अक्षम करता है", "सेफ्टी चेक्स सक्षम करता है"],
    "answer_en": "Optimizes for execution speed",
    "answer_hi": "एक्जीक्यूशन स्पीड के लिए ऑप्टिमाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method creates a type-erased focus state in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड फोकस स्टेट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyFocusState", "eraseToAnyFocusState()", "FocusState.erase()", "No type-erased focus state"],
    "options_hi": ["AnyFocusState", "eraseToAnyFocusState()", "FocusState.erase()", "कोई टाइप-इरेज़्ड फोकस स्टेट नहीं"],
    "answer_en": "No type-erased focus state",
    "answer_hi": "कोई टाइप-इरेज़्ड फोकस स्टेट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of '@_specialize' attribute's 'availability' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'availability' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Specifies platform availability", "Function availability", "Protocol availability", "Type availability"],
    "options_hi": ["प्लेटफॉर्म उपलब्धता निर्दिष्ट करता है", "फ़ंक्शन उपलब्धता", "प्रोटोकॉल उपलब्धता", "टाइप उपलब्धता"],
    "answer_en": "Specifies platform availability",
    "answer_hi": "प्लेटफॉर्म उपलब्धता निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which protocol enables custom encoding for actor-isolated types?",
    "question_hi": "ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as non-actor types", "ActorEncodable", "IsolatedEncodable", "No specific protocol"],
    "options_hi": ["नॉन-ऐक्टर टाइप्स के समान", "ActorEncodable", "IsolatedEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as non-actor types",
    "answer_hi": "नॉन-ऐक्टर टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does '@_assemblyVision' attribute provide in Swift?",
    "question_hi": "Swift में '@_assemblyVision' एट्रिब्यूट क्या प्रदान करता है?",
    "options_en": ["Assembly code visualization", "Memory visualization", "Performance analysis", "Debug information"],
    "options_hi": ["असेम्बली कोड विज़ुअलाइज़ेशन", "मेमोरी विज़ुअलाइज़ेशन", "परफॉर्मेंस एनालिसिस", "डीबग इन्फॉर्मेशन"],
    "answer_en": "Assembly code visualization",
    "answer_hi": "असेम्बली कोड विज़ुअलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method creates a type-erased environment value in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड एनवायरनमेंट वैल्यू बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyEnvironmentValue", "eraseToAnyEnvironmentValue()", "EnvironmentValue.erase()", "No type-erased environment value"],
    "options_hi": ["AnyEnvironmentValue", "eraseToAnyEnvironmentValue()", "EnvironmentValue.erase()", "कोई टाइप-इरेज़्ड एनवायरनमेंट वैल्यू नहीं"],
    "answer_en": "No type-erased environment value",
    "answer_hi": "कोई टाइप-इरेज़्ड एनवायरनमेंट वैल्यू नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'serialized' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'serialized' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Whether specialization is serialized", "Serialization format", "Deserialization method", "Binary format"],
    "options_hi": ["क्या स्पेशलाइज़ेशन सीरियलाइज़्ड है", "सीरियलाइज़ेशन फॉर्मेट", "डिसीरियलाइज़ेशन मेथड", "बाइनरी फॉर्मेट"],
    "answer_en": "Whether specialization is serialized",
    "answer_hi": "क्या स्पेशलाइज़ेशन सीरियलाइज़्ड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which protocol enables custom decoding for actor-isolated types?",
    "question_hi": "ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as non-actor types", "ActorDecodable", "IsolatedDecodable", "No specific protocol"],
    "options_hi": ["नॉन-ऐक्टर टाइप्स के समान", "ActorDecodable", "IsolatedDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as non-actor types",
    "answer_hi": "नॉन-ऐक्टर टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does '@_rawLayout' attribute enable for Swift types?",
    "question_hi": "Swift टाइप्स के लिए '@_rawLayout' एट्रिब्यूट क्या सक्षम करता है?",
    "options_en": ["Raw memory layout control", "Automatic layout", "Dynamic layout", "Fixed layout"],
    "options_hi": ["रॉ मेमोरी लेआउट कंट्रोल", "ऑटोमेटिक लेआउट", "डायनामिक लेआउट", "फिक्स्ड लेआउट"],
    "answer_en": "Raw memory layout control",
    "answer_hi": "रॉ मेमोरी लेआउट कंट्रोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method creates a type-erased preference value in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड प्रेफरेंस वैल्यू बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyPreferenceValue", "eraseToAnyPreferenceValue()", "PreferenceValue.erase()", "No type-erased preference value"],
    "options_hi": ["AnyPreferenceValue", "eraseToAnyPreferenceValue()", "PreferenceValue.erase()", "कोई टाइप-इरेज़्ड प्रेफरेंस वैल्यू नहीं"],
    "answer_en": "No type-erased preference value",
    "answer_hi": "कोई टाइप-इरेज़्ड प्रेफरेंस वैल्यू नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of '@_specialize' attribute's 'inline' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'inline' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Controls inlining behavior", "Forces inlining", "Prevents inlining", "Optional inlining"],
    "options_hi": ["इनलाइनिंग बिहेवियर कंट्रोल करता है", "इनलाइनिंग फोर्स करता है", "इनलाइनिंग रोकता है", "ऑप्शनल इनलाइनिंग"],
    "answer_en": "Controls inlining behavior",
    "answer_hi": "इनलाइनिंग बिहेवियर कंट्रोल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which protocol provides custom encoding for Sendable types?",
    "question_hi": "Sendable टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as non-Sendable types", "SendableEncodable", "ConcurrentEncodable", "No specific protocol"],
    "options_hi": ["नॉन-Sendable टाइप्स के समान", "SendableEncodable", "ConcurrentEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as non-Sendable types",
    "answer_hi": "नॉन-Sendable टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does '@_marker' attribute's 'requirement' parameter specify?",
    "question_hi": "'@_marker' एट्रिब्यूट का 'requirement' पैरामीटर क्या निर्दिष्ट करता है?",
    "options_en": ["Protocol requirements (none for marker)", "Type requirements", "Method requirements", "Property requirements"],
    "options_hi": ["प्रोटोकॉल रिक्वायरमेंट्स (मार्कर के लिए कोई नहीं)", "टाइप रिक्वायरमेंट्स", "मेथड रिक्वायरमेंट्स", "प्रॉपर्टी रिक्वायरमेंट्स"],
    "answer_en": "Protocol requirements (none for marker)",
    "answer_hi": "प्रोटोकॉल रिक्वायरमेंट्स (मार्कर के लिए कोई नहीं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method creates a type-erased state object in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड स्टेट ऑब्जेक्ट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyStateObject", "eraseToAnyStateObject()", "StateObject.erase()", "No type-erased state object"],
    "options_hi": ["AnyStateObject", "eraseToAnyStateObject()", "StateObject.erase()", "कोई टाइप-इरेज़्ड स्टेट ऑब्जेक्ट नहीं"],
    "answer_en": "No type-erased state object",
    "answer_hi": "कोई टाइप-इरेज़्ड स्टेट ऑब्जेक्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'preserve_moveonly' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'preserve_moveonly' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Preserves move-only type semantics", "Allows copying", "Disables move semantics", "Enables copying"],
    "options_hi": ["मूव-ओनली टाइप सेमेन्टिक्स प्रिज़र्व करता है", "कॉपीइंग अलाउ करता है", "मूव सेमेन्टिक्स अक्षम करता है", "कॉपीइंग सक्षम करता है"],
    "answer_en": "Preserves move-only type semantics",
    "answer_hi": "मूव-ओनली टाइप सेमेन्टिक्स प्रिज़र्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which protocol provides custom decoding for Sendable types?",
    "question_hi": "Sendable टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as non-Sendable types", "SendableDecodable", "ConcurrentDecodable", "No specific protocol"],
    "options_hi": ["नॉन-Sendable टाइप्स के समान", "SendableDecodable", "ConcurrentDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as non-Sendable types",
    "answer_hi": "नॉन-Sendable टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does '@_effects' attribute's 'readonly' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'readonly' मान क्या इंगित करता है?",
    "options_en": ["Function only reads memory", "Function writes memory", "Function has no side effects", "Function modifies memory"],
    "options_hi": ["फ़ंक्शन केवल मेमोरी पढ़ता है", "फ़ंक्शन मेमोरी लिखता है", "फ़ंक्शन का कोई साइड इफेक्ट नहीं है", "फ़ंक्शन मेमोरी मॉडिफाई करता है"],
    "answer_en": "Function only reads memory",
    "answer_hi": "फ़ंक्शन केवल मेमोरी पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method creates a type-erased observed object in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड ऑब्ज़र्व्ड ऑब्जेक्ट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyObservedObject", "eraseToAnyObservedObject()", "ObservedObject.erase()", "No type-erased observed object"],
    "options_hi": ["AnyObservedObject", "eraseToAnyObservedObject()", "ObservedObject.erase()", "कोई टाइप-इरेज़्ड ऑब्ज़र्व्ड ऑब्जेक्ट नहीं"],
    "answer_en": "No type-erased observed object",
    "answer_hi": "कोई टाइप-इरेज़्ड ऑब्ज़र्व्ड ऑब्जेक्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of '@_specialize' attribute's 'guaranteed' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'guaranteed' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Guaranteed optimization success", "Optional optimization", "No guarantee", "Performance guarantee"],
    "options_hi": ["गारंटीड ऑप्टिमाइज़ेशन सक्सेस", "ऑप्शनल ऑप्टिमाइज़ेशन", "कोई गारंटी नहीं", "परफॉर्मेंस गारंटी"],
    "answer_en": "Guaranteed optimization success",
    "answer_hi": "गारंटीड ऑप्टिमाइज़ेशन सक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which protocol enables custom encoding for main actor-isolated types?",
    "question_hi": "मेन ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as other actors", "MainActorEncodable", "UIMainEncodable", "No specific protocol"],
    "options_hi": ["अन्य ऐक्टर्स के समान", "MainActorEncodable", "UIMainEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as other actors",
    "answer_hi": "अन्य ऐक्टर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does '@_effects' attribute's 'releasenone' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'releasenone' मान क्या इंगित करता है?",
    "options_en": ["Function releases no memory", "Function releases memory", "Function allocates memory", "Function deallocates memory"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी रिलीज़ नहीं करता", "फ़ंक्शन मेमोरी रिलीज़ करता है", "फ़ंक्शन मेमोरी एलोकेट करता है", "फ़ंक्शन मेमोरी डीलोकेट करता है"],
    "answer_en": "Function releases no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी रिलीज़ नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method creates a type-erased environment object in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड एनवायरनमेंट ऑब्जेक्ट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyEnvironmentObject", "eraseToAnyEnvironmentObject()", "EnvironmentObject.erase()", "No type-erased environment object"],
    "options_hi": ["AnyEnvironmentObject", "eraseToAnyEnvironmentObject()", "EnvironmentObject.erase()", "कोई टाइप-इरेज़्ड एनवायरनमेंट ऑब्जेक्ट नहीं"],
    "answer_en": "No type-erased environment object",
    "answer_hi": "कोई टाइप-इरेज़्ड एनवायरनमेंट ऑब्जेक्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'layout_string' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'layout_string' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Memory layout specification", "String layout", "Type layout", "Binary layout"],
    "options_hi": ["मेमोरी लेआउट स्पेसिफिकेशन", "स्ट्रिंग लेआउट", "टाइप लेआउट", "बाइनरी लेआउट"],
    "answer_en": "Memory layout specification",
    "answer_hi": "मेमोरी लेआउट स्पेसिफिकेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which protocol enables custom decoding for main actor-isolated types?",
    "question_hi": "मेन ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as other actors", "MainActorDecodable", "UIMainDecodable", "No specific protocol"],
    "options_hi": ["अन्य ऐक्टर्स के समान", "MainActorDecodable", "UIMainDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as other actors",
    "answer_hi": "अन्य ऐक्टर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does '@_effects' attribute's 'readwrite' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'readwrite' मान क्या इंगित करता है?",
    "options_en": ["Function reads and writes memory", "Function only reads", "Function only writes", "Function has no access"],
    "options_hi": ["फ़ंक्शन मेमोरी पढ़ता और लिखता है", "फ़ंक्शन केवल पढ़ता है", "फ़ंक्शन केवल लिखता है", "फ़ंक्शन की कोई एक्सेस नहीं है"],
    "answer_en": "Function reads and writes memory",
    "answer_hi": "फ़ंक्शन मेमोरी पढ़ता और लिखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method creates a type-erased state in SwiftUI?",
    "question_hi": "SwiftUI में टाइप-इरेज़्ड स्टेट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyState", "eraseToAnyState()", "State.erase()", "No type-erased state"],
    "options_hi": ["AnyState", "eraseToAnyState()", "State.erase()", "कोई टाइप-इरेज़्ड स्टेट नहीं"],
    "answer_en": "No type-erased state",
    "answer_hi": "कोई टाइप-इरेज़्ड स्टेट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of '@_specialize' attribute's 'onFastPath' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'onFastPath' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Indicates fast path optimization", "Slow path optimization", "No optimization", "Debug path"],
    "options_hi": ["फास्ट पाथ ऑप्टिमाइज़ेशन इंडिकेट करता है", "स्लो पाथ ऑप्टिमाइज़ेशन", "कोई ऑप्टिमाइज़ेशन नहीं", "डीबग पाथ"],
    "answer_en": "Indicates fast path optimization",
    "answer_hi": "फास्ट पाथ ऑप्टिमाइज़ेशन इंडिकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which protocol provides custom encoding for global actor-isolated types?",
    "question_hi": "ग्लोबल ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as other actors", "GlobalActorEncodable", "IsolatedGlobalEncodable", "No specific protocol"],
    "options_hi": ["अन्य ऐक्टर्स के समान", "GlobalActorEncodable", "IsolatedGlobalEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as other actors",
    "answer_hi": "अन्य ऐक्टर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does '@_effects' attribute's 'escaping' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'escaping' मान क्या इंगित करता है?",
    "options_en": ["Function parameter escapes", "Function doesn't escape", "Function escapes scope", "Function captured"],
    "options_hi": ["फ़ंक्शन पैरामीटर एस्केप करता है", "फ़ंक्शन एस्केप नहीं करता", "फ़ंक्शन स्कोप एस्केप करता है", "फ़ंक्शन कैप्चर किया गया"],
    "answer_en": "Function parameter escapes",
    "answer_hi": "फ़ंक्शन पैरामीटर एस्केप करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method creates a type-erased binding in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड बाइंडिंग बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyTaskLocal", "eraseToAnyTaskLocal()", "TaskLocal.erase()", "No type-erased binding"],
    "options_hi": ["AnyTaskLocal", "eraseToAnyTaskLocal()", "TaskLocal.erase()", "कोई टाइप-इरेज़्ड बाइंडिंग नहीं"],
    "answer_en": "No type-erased binding",
    "answer_hi": "कोई टाइप-इरेज़्ड बाइंडिंग नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'sensitive' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'sensitive' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Security-sensitive specialization", "Performance sensitive", "Memory sensitive", "Thread sensitive"],
    "options_hi": ["सिक्योरिटी-सेंसिटिव स्पेशलाइज़ेशन", "परफॉर्मेंस सेंसिटिव", "मेमोरी सेंसिटिव", "थ्रेड सेंसिटिव"],
    "answer_en": "Security-sensitive specialization",
    "answer_hi": "सिक्योरिटी-सेंसिटिव स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which protocol provides custom decoding for global actor-isolated types?",
    "question_hi": "ग्लोबल ऐक्टर-आइसोलेटेड टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as other actors", "GlobalActorDecodable", "IsolatedGlobalDecodable", "No specific protocol"],
    "options_hi": ["अन्य ऐक्टर्स के समान", "GlobalActorDecodable", "IsolatedGlobalDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as other actors",
    "answer_hi": "अन्य ऐक्टर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does '@_effects' attribute's 'noreturn' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'noreturn' मान क्या इंगित करता है?",
    "options_en": ["Function never returns", "Function always returns", "Function may return", "Function returns void"],
    "options_hi": ["फ़ंक्शन कभी रिटर्न नहीं करता", "फ़ंक्शन हमेशा रिटर्न करता है", "फ़ंक्शन रिटर्न कर सकता है", "फ़ंक्शन void रिटर्न करता है"],
    "answer_en": "Function never returns",
    "answer_hi": "फ़ंक्शन कभी रिटर्न नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method creates a type-erased task in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड टास्क बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyTask", "eraseToAnyTask()", "Task.erase()", "No type-erased task"],
    "options_hi": ["AnyTask", "eraseToAnyTask()", "Task.erase()", "कोई टाइप-इरेज़्ड टास्क नहीं"],
    "answer_en": "No type-erased task",
    "answer_hi": "कोई टाइप-इरेज़्ड टास्क नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noMetadata' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noMetadata' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["No runtime metadata needed", "Requires metadata", "Optional metadata", "Dynamic metadata"],
    "options_hi": ["कोई रनटाइम मेटाडेटा आवश्यक नहीं", "मेटाडेटा की आवश्यकता है", "ऑप्शनल मेटाडेटा", "डायनामिक मेटाडेटा"],
    "answer_en": "No runtime metadata needed",
    "answer_hi": "कोई रनटाइम मेटाडेटा आवश्यक नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which protocol enables custom encoding for distributed actors?",
    "question_hi": "डिस्ट्रीब्यूटेड ऐक्टर्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["DistributedActor with Codable", "DistributedEncodable", "RemoteEncodable", "No specific protocol"],
    "options_hi": ["Codable वाला DistributedActor", "DistributedEncodable", "RemoteEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "DistributedActor with Codable",
    "answer_hi": "Codable वाला DistributedActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does '@_effects' attribute's 'readnone' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'readnone' मान क्या इंगित करता है?",
    "options_en": ["Function reads no memory", "Function reads memory", "Function writes memory", "Function has side effects"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी नहीं पढ़ता", "फ़ंक्शन मेमोरी पढ़ता है", "फ़ंक्शन मेमोरी लिखता है", "फ़ंक्शन के साइड इफेक्ट्स हैं"],
    "answer_en": "Function reads no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी नहीं पढ़ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method creates a type-erased continuation in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड कंटिन्यूएशन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyContinuation", "eraseToAnyContinuation()", "Continuation.erase()", "No type-erased continuation"],
    "options_hi": ["AnyContinuation", "eraseToAnyContinuation()", "Continuation.erase()", "कोई टाइप-इरेज़्ड कंटिन्यूएशन नहीं"],
    "answer_en": "No type-erased continuation",
    "answer_hi": "कोई टाइप-इरेज़्ड कंटिन्यूएशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'trivial' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'trivial' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Trivial type specialization", "Complex type", "Reference type", "Value type"],
    "options_hi": ["ट्रिवियल टाइप स्पेशलाइज़ेशन", "कॉम्प्लेक्स टाइप", "रिफरेंस टाइप", "वैल्यू टाइप"],
    "answer_en": "Trivial type specialization",
    "answer_hi": "ट्रिवियल टाइप स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which protocol enables custom decoding for distributed actors?",
    "question_hi": "डिस्ट्रीब्यूटेड ऐक्टर्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["DistributedActor with Codable", "DistributedDecodable", "RemoteDecodable", "No specific protocol"],
    "options_hi": ["Codable वाला DistributedActor", "DistributedDecodable", "RemoteDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "DistributedActor with Codable",
    "answer_hi": "Codable वाला DistributedActor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does '@_effects' attribute's 'writenone' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'writenone' मान क्या इंगित करता है?",
    "options_en": ["Function writes no memory", "Function writes memory", "Function reads memory", "Function allocates memory"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी नहीं लिखता", "फ़ंक्शन मेमोरी लिखता है", "फ़ंक्शन मेमोरी पढ़ता है", "फ़ंक्शन मेमोरी एलोकेट करता है"],
    "answer_en": "Function writes no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी नहीं लिखता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method creates a type-erased async stream in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड एसिंक स्ट्रीम बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAsyncStream", "eraseToAnyAsyncStream()", "AsyncStream.erase()", "No type-erased async stream"],
    "options_hi": ["AnyAsyncStream", "eraseToAnyAsyncStream()", "AsyncStream.erase()", "कोई टाइप-इरेज़्ड एसिंक स्ट्रीम नहीं"],
    "answer_en": "No type-erased async stream",
    "answer_hi": "कोई टाइप-इरेज़्ड एसिंक स्ट्रीम नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of '@_specialize' attribute's 'preserveDebugInfo' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'preserveDebugInfo' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Preserves debug information", "Removes debug info", "Optimizes debug info", "Disables debugging"],
    "options_hi": ["डीबग इन्फॉर्मेशन प्रिज़र्व करता है", "डीबग इन्फो रिमूव करता है", "डीबग इन्फो ऑप्टिमाइज़ करता है", "डीबगिंग अक्षम करता है"],
    "answer_en": "Preserves debug information",
    "answer_hi": "डीबग इन्फॉर्मेशन प्रिज़र्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which protocol provides custom encoding for existential types?",
    "question_hi": "एक्जिस्टेंशियल टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as concrete types", "ExistentialEncodable", "ProtocolEncodable", "No specific protocol"],
    "options_hi": ["कंक्रीट टाइप्स के समान", "ExistentialEncodable", "ProtocolEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as concrete types",
    "answer_hi": "कंक्रीट टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@_effects' attribute's 'accessnone' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'accessnone' मान क्या इंगित करता है?",
    "options_en": ["Function accesses no memory", "Function accesses memory", "Function reads/writes", "Function modifies"],
    "options_hi": ["फ़ंक्शन कोई मेमोरी एक्सेस नहीं करता", "फ़ंक्शन मेमोरी एक्सेस करता है", "फ़ंक्शन पढ़ता/लिखता है", "फ़ंक्शन मॉडिफाई करता है"],
    "answer_en": "Function accesses no memory",
    "answer_hi": "फ़ंक्शन कोई मेमोरी एक्सेस नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which method creates a type-erased async throwing stream in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड एसिंक थ्रोइंग स्ट्रीम बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAsyncThrowingStream", "eraseToAnyAsyncThrowingStream()", "AsyncThrowingStream.erase()", "No type-erased async throwing stream"],
    "options_hi": ["AnyAsyncThrowingStream", "eraseToAnyAsyncThrowingStream()", "AsyncThrowingStream.erase()", "कोई टाइप-इरेज़्ड एसिंक थ्रोइंग स्ट्रीम नहीं"],
    "answer_en": "No type-erased async throwing stream",
    "answer_hi": "कोई टाइप-इरेज़्ड एसिंक थ्रोइंग स्ट्रीम नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'opaque' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'opaque' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Opaque type specialization", "Transparent type", "Generic type", "Concrete type"],
    "options_hi": ["ओपेक टाइप स्पेशलाइज़ेशन", "ट्रांसपेरेंट टाइप", "जेनेरिक टाइप", "कंक्रीट टाइप"],
    "answer_en": "Opaque type specialization",
    "answer_hi": "ओपेक टाइप स्पेशलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which protocol provides custom decoding for existential types?",
    "question_hi": "एक्जिस्टेंशियल टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as concrete types", "ExistentialDecodable", "ProtocolDecodable", "No specific protocol"],
    "options_hi": ["कंक्रीट टाइप्स के समान", "ExistentialDecodable", "ProtocolDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as concrete types",
    "answer_hi": "कंक्रीट टाइप्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does '@_effects' attribute's 'instantaneous' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'instantaneous' मान क्या इंगित करता है?",
    "options_en": ["Function has instantaneous effect", "Long-running effect", "Delayed effect", "No effect"],
    "options_hi": ["फ़ंक्शन का तात्कालिक प्रभाव है", "लॉन्ग-रनिंग इफेक्ट", "डिलेड इफेक्ट", "कोई प्रभाव नहीं"],
    "answer_en": "Function has instantaneous effect",
    "answer_hi": "फ़ंक्शन का तात्कालिक प्रभाव है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which method creates a type-erased async sequence in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड एसिंक सीक्वेंस बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAsyncSequence", "eraseToAnyAsyncSequence()", "AsyncSequence.erase()", "No type-erased async sequence"],
    "options_hi": ["AnyAsyncSequence", "eraseToAnyAsyncSequence()", "AsyncSequence.erase()", "कोई टाइप-इरेज़्ड एसिंक सीक्वेंस नहीं"],
    "answer_en": "No type-erased async sequence",
    "answer_hi": "कोई टाइप-इरेज़्ड एसिंक सीक्वेंस नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noAllocation' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noAllocation' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["No heap allocation", "Allows allocation", "Requires allocation", "Stack allocation only"],
    "options_hi": ["कोई हीप एलोकेशन नहीं", "एलोकेशन अलाउ करता है", "एलोकेशन रिक्वायर करता है", "केवल स्टैक एलोकेशन"],
    "answer_en": "No heap allocation",
    "answer_hi": "कोई हीप एलोकेशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which protocol enables custom encoding for opaque types?",
    "question_hi": "ओपेक टाइप्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as underlying type", "OpaqueEncodable", "SomeEncodable", "No specific protocol"],
    "options_hi": ["अंडरलाइंग टाइप के समान", "OpaqueEncodable", "SomeEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as underlying type",
    "answer_hi": "अंडरलाइंग टाइप के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does '@_effects' attribute's 'releasenone' value indicate for closures?",
    "question_hi": "क्लोजर्स के लिए '@_effects' एट्रिब्यूट का 'releasenone' मान क्या इंगित करता है?",
    "options_en": ["Closure releases no captures", "Closure releases captures", "Closure retains captures", "Closure copies captures"],
    "options_hi": ["क्लोजर कोई कैप्चर रिलीज़ नहीं करता", "क्लोजर कैप्चर्स रिलीज़ करता है", "क्लोजर कैप्चर्स रिटेन करता है", "क्लोजर कैप्चर्स कॉपी करता है"],
    "answer_en": "Closure releases no captures",
    "answer_hi": "क्लोजर कोई कैप्चर रिलीज़ नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which method creates a type-erased async iterator in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड एसिंक इटरेटर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyAsyncIterator", "eraseToAnyAsyncIterator()", "AsyncIterator.erase()", "No type-erased async iterator"],
    "options_hi": ["AnyAsyncIterator", "eraseToAnyAsyncIterator()", "AsyncIterator.erase()", "कोई टाइप-इरेज़्ड एसिंक इटरेटर नहीं"],
    "answer_en": "No type-erased async iterator",
    "answer_hi": "कोई टाइप-इरेज़्ड एसिंक इटरेटर नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'inlineable' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'inlineable' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Makes specialization inlineable", "Prevents inlining", "Optional inlining", "Forced inlining"],
    "options_hi": ["स्पेशलाइज़ेशन को इनलाइनेबल बनाता है", "इनलाइनिंग रोकता है", "ऑप्शनल इनलाइनिंग", "फोर्स्ड इनलाइनिंग"],
    "answer_en": "Makes specialization inlineable",
    "answer_hi": "स्पेशलाइज़ेशन को इनलाइनेबल बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which protocol enables custom decoding for opaque types?",
    "question_hi": "ओपेक टाइप्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as underlying type", "OpaqueDecodable", "SomeDecodable", "No specific protocol"],
    "options_hi": ["अंडरलाइंग टाइप के समान", "OpaqueDecodable", "SomeDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as underlying type",
    "answer_hi": "अंडरलाइंग टाइप के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_effects' attribute's 'accessarg' value indicate?",
    "question_hi": "'@_effects' एट्रिब्यूट का 'accessarg' मान क्या इंगित करता है?",
    "options_en": ["Function accesses arguments only", "Accesses global memory", "Accesses heap memory", "Accesses all memory"],
    "options_hi": ["फ़ंक्शन केवल आर्गुमेंट्स एक्सेस करता है", "ग्लोबल मेमोरी एक्सेस करता है", "हीप मेमोरी एक्सेस करता है", "सभी मेमोरी एक्सेस करता है"],
    "answer_en": "Function accesses arguments only",
    "answer_hi": "फ़ंक्शन केवल आर्गुमेंट्स एक्सेस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which method creates a type-erased task group in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड टास्क ग्रुप बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyTaskGroup", "eraseToAnyTaskGroup()", "TaskGroup.erase()", "No type-erased task group"],
    "options_hi": ["AnyTaskGroup", "eraseToAnyTaskGroup()", "TaskGroup.erase()", "कोई टाइप-इरेज़्ड टास्क ग्रुप नहीं"],
    "answer_en": "No type-erased task group",
    "answer_hi": "कोई टाइप-इरेज़्ड टास्क ग्रुप नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noFramePointer' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noFramePointer' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Omits frame pointer", "Requires frame pointer", "Uses frame pointer", "Optimizes frame pointer"],
    "options_hi": ["फ्रेम पॉइंटर ओमिट करता है", "फ्रेम पॉइंटर रिक्वायर करता है", "फ्रेम पॉइंटर यूज़ करता है", "फ्रेम पॉइंटर ऑप्टिमाइज़ करता है"],
    "answer_en": "Omits frame pointer",
    "answer_hi": "फ्रेम पॉइंटर ओमिट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which protocol provides custom encoding for never type?",
    "question_hi": "Never टाइप के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Never is already Encodable", "NeverEncodable", "NoReturnEncodable", "No specific protocol"],
    "options_hi": ["Never पहले से ही Encodable है", "NeverEncodable", "NoReturnEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Never is already Encodable",
    "answer_hi": "Never पहले से ही Encodable है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does '@_effects' attribute's 'accessnone' value indicate for initializers?",
    "question_hi": "इनिशियलाइज़र्स के लिए '@_effects' एट्रिब्यूट का 'accessnone' मान क्या इंगित करता है?",
    "options_en": ["Initializer accesses no memory", "Accesses instance memory", "Accesses static memory", "Accesses all memory"],
    "options_hi": ["इनिशियलाइज़र कोई मेमोरी एक्सेस नहीं करता", "इंस्टेंस मेमोरी एक्सेस करता है", "स्टैटिक मेमोरी एक्सेस करता है", "सभी मेमोरी एक्सेस करता है"],
    "answer_en": "Initializer accesses no memory",
    "answer_hi": "इनिशियलाइज़र कोई मेमोरी एक्सेस नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which method creates a type-erased clock in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड क्लॉक बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyClock", "eraseToAnyClock()", "Clock.erase()", "No type-erased clock"],
    "options_hi": ["AnyClock", "eraseToAnyClock()", "Clock.erase()", "कोई टाइप-इरेज़्ड क्लॉक नहीं"],
    "answer_en": "No type-erased clock",
    "answer_hi": "कोई टाइप-इरेज़्ड क्लॉक नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'serializable' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'serializable' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Specialization is serializable", "Not serializable", "Binary serialization", "Text serialization"],
    "options_hi": ["स्पेशलाइज़ेशन सीरियलाइज़ेबल है", "सीरियलाइज़ेबल नहीं", "बाइनरी सीरियलाइज़ेशन", "टेक्स्ट सीरियलाइज़ेशन"],
    "answer_en": "Specialization is serializable",
    "answer_hi": "स्पेशलाइज़ेशन सीरियलाइज़ेबल है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which protocol provides custom decoding for never type?",
    "question_hi": "Never टाइप के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Never is already Decodable", "NeverDecodable", "NoReturnDecodable", "No specific protocol"],
    "options_hi": ["Never पहले से ही Decodable है", "NeverDecodable", "NoReturnDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Never is already Decodable",
    "answer_hi": "Never पहले से ही Decodable है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@_effects' attribute's 'readonly' value indicate for deinitializers?",
    "question_hi": "डीइनिशियलाइज़र्स के लिए '@_effects' एट्रिब्यूट का 'readonly' मान क्या इंगित करता है?",
    "options_en": ["Deinitializer only reads", "Deinitializer writes", "Deinitializer modifies", "Deinitializer releases"],
    "options_hi": ["डीइनिशियलाइज़र केवल पढ़ता है", "डीइनिशियलाइज़र लिखता है", "डीइनिशियलाइज़र मॉडिफाई करता है", "डीइनिशियलाइज़र रिलीज़ करता है"],
    "answer_en": "Deinitializer only reads",
    "answer_hi": "डीइनिशियलाइज़र केवल पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which method creates a type-erased duration in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड ड्यूरेशन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyDuration", "eraseToAnyDuration()", "Duration.erase()", "No type-erased duration"],
    "options_hi": ["AnyDuration", "eraseToAnyDuration()", "Duration.erase()", "कोई टाइप-इरेज़्ड ड्यूरेशन नहीं"],
    "answer_en": "No type-erased duration",
    "answer_hi": "कोई टाइप-इरेज़्ड ड्यूरेशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noCalls' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noCalls' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Function makes no calls", "Makes direct calls", "Makes indirect calls", "Makes many calls"],
    "options_hi": ["फ़ंक्शन कोई कॉल नहीं करता", "डायरेक्ट कॉल्स करता है", "इनडायरेक्ट कॉल्स करता है", "कई कॉल्स करता है"],
    "answer_en": "Function makes no calls",
    "answer_hi": "फ़ंक्शन कोई कॉल नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which protocol enables custom encoding for autoclosure parameters?",
    "question_hi": "ऑटोक्लोजर पैरामीटर्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as regular closures", "AutoclosureEncodable", "AutoEncodable", "No specific protocol"],
    "options_hi": ["रेगुलर क्लोजर्स के समान", "AutoclosureEncodable", "AutoEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as regular closures",
    "answer_hi": "रेगुलर क्लोजर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_effects' attribute's 'writenone' value indicate for accessors?",
    "question_hi": "एक्सेसर्स के लिए '@_effects' एट्रिब्यूट का 'writenone' मान क्या इंगित करता है?",
    "options_en": ["Accessor writes no memory", "Accessor writes memory", "Accessor reads memory", "Accessor modifies memory"],
    "options_hi": ["एक्सेसर कोई मेमोरी नहीं लिखता", "एक्सेसर मेमोरी लिखता है", "एक्सेसर मेमोरी पढ़ता है", "एक्सेसर मेमोरी मॉडिफाई करता है"],
    "answer_en": "Accessor writes no memory",
    "answer_hi": "एक्सेसर कोई मेमोरी नहीं लिखता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which method creates a type-erased instant in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड इंस्टेंट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyInstant", "eraseToAnyInstant()", "Instant.erase()", "No type-erased instant"],
    "options_hi": ["AnyInstant", "eraseToAnyInstant()", "Instant.erase()", "कोई टाइप-इरेज़्ड इंस्टेंट नहीं"],
    "answer_en": "No type-erased instant",
    "answer_hi": "कोई टाइप-इरेज़्ड इंस्टेंट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'preserve_abi' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'preserve_abi' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Preserves ABI stability", "Breaks ABI", "Ignores ABI", "Modifies ABI"],
    "options_hi": ["ABI स्टेबिलिटी प्रिज़र्व करता है", "ABI ब्रेक करता है", "ABI इग्नोर करता है", "ABI मॉडिफाई करता है"],
    "answer_en": "Preserves ABI stability",
    "answer_hi": "ABI स्टेबिलिटी प्रिज़र्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which protocol enables custom decoding for autoclosure parameters?",
    "question_hi": "ऑटोक्लोजर पैरामीटर्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Same as regular closures", "AutoclosureDecodable", "AutoDecodable", "No specific protocol"],
    "options_hi": ["रेगुलर क्लोजर्स के समान", "AutoclosureDecodable", "AutoDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Same as regular closures",
    "answer_hi": "रेगुलर क्लोजर्स के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does '@_effects' attribute's 'readnone' value indicate for property wrappers?",
    "question_hi": "प्रॉपर्टी रैपर्स के लिए '@_effects' एट्रिब्यूट का 'readnone' मान क्या इंगित करता है?",
    "options_en": ["Wrapper reads no memory", "Wrapper reads memory", "Wrapper writes memory", "Wrapper modifies memory"],
    "options_hi": ["रैपर कोई मेमोरी नहीं पढ़ता", "रैपर मेमोरी पढ़ता है", "रैपर मेमोरी लिखता है", "रैपर मेमोरी मॉडिफाई करता है"],
    "answer_en": "Wrapper reads no memory",
    "answer_hi": "रैपर कोई मेमोरी नहीं पढ़ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which method creates a type-erased sleep unit in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड स्लीप यूनिट बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnySleepUnit", "eraseToAnySleepUnit()", "SleepUnit.erase()", "No type-erased sleep unit"],
    "options_hi": ["AnySleepUnit", "eraseToAnySleepUnit()", "SleepUnit.erase()", "कोई टाइप-इरेज़्ड स्लीप यूनिट नहीं"],
    "answer_en": "No type-erased sleep unit",
    "answer_hi": "कोई टाइप-इरेज़्ड स्लीप यूनिट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noInline' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noInline' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Prevents inlining", "Forces inlining", "Allows inlining", "Optional inlining"],
    "options_hi": ["इनलाइनिंग रोकता है", "इनलाइनिंग फोर्स करता है", "इनलाइनिंग अलाउ करता है", "ऑप्शनल इनलाइनिंग"],
    "answer_en": "Prevents inlining",
    "answer_hi": "इनलाइनिंग रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which protocol provides custom encoding for function types?",
    "question_hi": "फ़ंक्शन टाइप्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Not directly encodable", "FunctionEncodable", "ClosureEncodable", "No specific protocol"],
    "options_hi": ["सीधे एनकोडेबल नहीं", "FunctionEncodable", "ClosureEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Not directly encodable",
    "answer_hi": "सीधे एनकोडेबल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '@_effects' attribute's 'accessnone' value indicate for subscripts?",
    "question_hi": "सबस्क्रिप्ट्स के लिए '@_effects' एट्रिब्यूट का 'accessnone' मान क्या इंगित करता है?",
    "options_en": ["Subscript accesses no memory", "Accesses collection memory", "Accesses element memory", "Accesses all memory"],
    "options_hi": ["सबस्क्रिप्ट कोई मेमोरी एक्सेस नहीं करता", "कलेक्शन मेमोरी एक्सेस करता है", "एलीमेंट मेमोरी एक्सेस करता है", "सभी मेमोरी एक्सेस करता है"],
    "answer_en": "Subscript accesses no memory",
    "answer_hi": "सबस्क्रिप्ट कोई मेमोरी एक्सेस नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which method creates a type-erased deadline in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड डेडलाइन बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyDeadline", "eraseToAnyDeadline()", "Deadline.erase()", "No type-erased deadline"],
    "options_hi": ["AnyDeadline", "eraseToAnyDeadline()", "Deadline.erase()", "कोई टाइप-इरेज़्ड डेडलाइन नहीं"],
    "answer_en": "No type-erased deadline",
    "answer_hi": "कोई टाइप-इरेज़्ड डेडलाइन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'no_mangle' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'no_mangle' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Prevents name mangling", "Allows mangling", "Requires mangling", "Optional mangling"],
    "options_hi": ["नेम मैंगलिंग रोकता है", "मैंगलिंग अलाउ करता है", "मैंगलिंग रिक्वायर करता है", "ऑप्शनल मैंगलिंग"],
    "answer_en": "Prevents name mangling",
    "answer_hi": "नेम मैंगलिंग रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which protocol provides custom decoding for function types?",
    "question_hi": "फ़ंक्शन टाइप्स के लिए कस्टम डिकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Not directly decodable", "FunctionDecodable", "ClosureDecodable", "No specific protocol"],
    "options_hi": ["सीधे डिकोडेबल नहीं", "FunctionDecodable", "ClosureDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Not directly decodable",
    "answer_hi": "सीधे डिकोडेबल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_effects' attribute's 'readonly' value indicate for operators?",
    "question_hi": "ऑपरेटर्स के लिए '@_effects' एट्रिब्यूट का 'readonly' मान क्या इंगित करता है?",
    "options_en": ["Operator only reads operands", "Operator writes", "Operator modifies", "Operator computes"],
    "options_hi": ["ऑपरेटर केवल ऑपरेंड्स पढ़ता है", "ऑपरेटर लिखता है", "ऑपरेटर मॉडिफाई करता है", "ऑपरेटर कंप्यूट करता है"],
    "answer_en": "Operator only reads operands",
    "answer_hi": "ऑपरेटर केवल ऑपरेंड्स पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which method creates a type-erased task priority in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड टास्क प्रायोरिटी बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyTaskPriority", "eraseToAnyTaskPriority()", "TaskPriority.erase()", "No type-erased task priority"],
    "options_hi": ["AnyTaskPriority", "eraseToAnyTaskPriority()", "TaskPriority.erase()", "कोई टाइप-इरेज़्ड टास्क प्रायोरिटी नहीं"],
    "answer_en": "No type-erased task priority",
    "answer_hi": "कोई टाइप-इरेज़्ड टास्क प्रायोरिटी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the purpose of '@_specialize' attribute's 'alwaysInline' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'alwaysInline' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Forces always inlining", "Prevents inlining", "Optional inlining", "Selective inlining"],
    "options_hi": ["हमेशा इनलाइनिंग फोर्स करता है", "इनलाइनिंग रोकता है", "ऑप्शनल इनलाइनिंग", "सेलेक्टिव इनलाइनिंग"],
    "answer_en": "Forces always inlining",
    "answer_hi": "हमेशा इनलाइनिंग फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which protocol enables custom encoding for metatypes?",
    "question_hi": "मेटाटाइप्स के लिए कस्टम एनकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Not directly encodable", "MetatypeEncodable", "TypeEncodable", "No specific protocol"],
    "options_hi": ["सीधे एनकोडेबल नहीं", "MetatypeEncodable", "TypeEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Not directly encodable",
    "answer_hi": "सीधे एनकोडेबल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does '@_effects' attribute's 'writenone' value indicate for type methods?",
    "question_hi": "टाइप मेथड्स के लिए '@_effects' एट्रिब्यूट का 'writenone' मान क्या इंगित करता है?",
    "options_en": ["Type method writes no memory", "Writes static memory", "Writes instance memory", "Writes all memory"],
    "options_hi": ["टाइप मेथड कोई मेमोरी नहीं लिखता", "स्टैटिक मेमोरी लिखता है", "इंस्टेंस मेमोरी लिखता है", "सभी मेमोरी लिखता है"],
    "answer_en": "Type method writes no memory",
    "answer_hi": "टाइप मेथड कोई मेमोरी नहीं लिखता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which method creates a type-erased task local value in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड टास्क लोकल वैल्यू बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyTaskLocalValue", "eraseToAnyTaskLocalValue()", "TaskLocalValue.erase()", "No type-erased task local value"],
    "options_hi": ["AnyTaskLocalValue", "eraseToAnyTaskLocalValue()", "TaskLocalValue.erase()", "कोई टाइप-इरेज़्ड टास्क लोकल वैल्यू नहीं"],
    "answer_en": "No type-erased task local value",
    "answer_hi": "कोई टाइप-इरेज़्ड टास्क लोकल वैल्यू नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the purpose of '@_specializeExtension' attribute's 'weak_import' parameter?",
    "question_hi": "'@_specializeExtension' एट्रिब्यूट के 'weak_import' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Weak linkage import", "Strong import", "Optional import", "Required import"],
    "options_hi": ["वीक लिंकेज इम्पोर्ट", "स्ट्रोंग इम्पोर्ट", "ऑप्शनल इम्पोर्ट", "रिक्वायर्ड इम्पोर्ट"],
    "answer_en": "Weak linkage import",
    "answer_hi": "वीक लिंकेज इम्पोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which protocol enables custom decoding for metatypes?",
    "question_hi": "मेटाटाइप्स के लिए कस्टम डिकोडिंग सक्षम करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Not directly decodable", "MetatypeDecodable", "TypeDecodable", "No specific protocol"],
    "options_hi": ["सीधे डिकोडेबल नहीं", "MetatypeDecodable", "TypeDecodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Not directly decodable",
    "answer_hi": "सीधे डिकोडेबल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does '@_effects' attribute's 'accessnone' value indicate for global functions?",
    "question_hi": "ग्लोबल फ़ंक्शन्स के लिए '@_effects' एट्रिब्यूट का 'accessnone' मान क्या इंगित करता है?",
    "options_en": ["Global function accesses no memory", "Accesses global variables", "Accesses heap", "Accesses all memory"],
    "options_hi": ["ग्लोबल फ़ंक्शन कोई मेमोरी एक्सेस नहीं करता", "ग्लोबल वेरिएबल्स एक्सेस करता है", "हीप एक्सेस करता है", "सभी मेमोरी एक्सेस करता है"],
    "answer_en": "Global function accesses no memory",
    "answer_hi": "ग्लोबल फ़ंक्शन कोई मेमोरी एक्सेस नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which method creates a type-erased actor in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड ऐक्टर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyActor", "eraseToAnyActor()", "Actor.erase()", "No type-erased actor"],
    "options_hi": ["AnyActor", "eraseToAnyActor()", "Actor.erase()", "कोई टाइप-इरेज़्ड ऐक्टर नहीं"],
    "answer_en": "No type-erased actor",
    "answer_hi": "कोई टाइप-इरेज़्ड ऐक्टर नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the purpose of '@_specialize' attribute's 'noLocks' parameter?",
    "question_hi": "'@_specialize' एट्रिब्यूट के 'noLocks' पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Function uses no locks", "Uses locks", "Requires locks", "Manages locks"],
    "options_hi": ["फ़ंक्शन कोई लॉक्स नहीं उपयोग करता", "लॉक्स उपयोग करता है", "लॉक्स रिक्वायर करता है", "लॉक्स मैनेज करता है"],
    "answer_en": "Function uses no locks",
    "answer_hi": "फ़ंक्शन कोई लॉक्स नहीं उपयोग करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which protocol provides custom encoding for tuples?",
    "question_hi": "टुपल्स के लिए कस्टम एनकोडिंग प्रदान करने वाला प्रोटोकॉल कौन सा है?",
    "options_en": ["Tuples with all Encodable elements", "TupleEncodable", "PairEncodable", "No specific protocol"],
    "options_hi": ["सभी Encodable एलीमेंट्स वाले टुपल्स", "TupleEncodable", "PairEncodable", "कोई विशिष्ट प्रोटोकॉल नहीं"],
    "answer_en": "Tuples with all Encodable elements",
    "answer_hi": "सभी Encodable एलीमेंट्स वाले टुपल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does '@_effects' attribute's 'readonly' value indicate for class methods?",
    "question_hi": "क्लास मेथड्स के लिए '@_effects' एट्रिब्यूट का 'readonly' मान क्या इंगित करता है?",
    "options_en": ["Class method only reads", "Writes to class", "Modifies class", "Manages class state"],
    "options_hi": ["क्लास मेथड केवल पढ़ता है", "क्लास में लिखता है", "क्लास मॉडिफाई करता है", "क्लास स्टेट मैनेज करता है"],
    "answer_en": "Class method only reads",
    "answer_hi": "क्लास मेथड केवल पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which method creates a type-erased distributed actor in Swift concurrency?",
    "question_hi": "Swift कंकरेंसी में टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर बनाने वाली मेथड कौन सी है?",
    "options_en": ["AnyDistributedActor", "eraseToAnyDistributedActor()", "DistributedActor.erase()", "No type-erased distributed actor"],
    "options_hi": ["AnyDistributedActor", "eraseToAnyDistributedActor()", "DistributedActor.erase()", "कोई टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर नहीं"],
    "answer_en": "No type-erased distributed actor",
    "answer_hi": "कोई टाइप-इरेज़्ड डिस्ट्रीब्यूटेड ऐक्टर नहीं",
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