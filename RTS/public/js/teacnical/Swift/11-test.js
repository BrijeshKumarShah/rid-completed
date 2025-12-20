const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of '@_alignment' attribute in Swift?",
    "question_hi": "Swift में '@_alignment' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Specifies memory alignment", "Controls type alignment", "Sets data alignment", "Manages memory layout"],
    "options_hi": ["मेमोरी एलाइनमेंट निर्दिष्ट करता है", "टाइप एलाइनमेंट नियंत्रित करता है", "डेटा एलाइनमेंट सेट करता है", "मेमोरी लेआउट प्रबंधित करता है"],
    "answer_en": "Specifies memory alignment",
    "answer_hi": "मेमोरी एलाइनमेंट निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Swift feature allows 'if let x = y as? String' pattern?",
    "question_hi": "कौन सा Swift फीचर 'if let x = y as? String' पैटर्न की अनुमति देता है?",
    "options_en": ["Optional casting with binding", "Conditional type cast", "Safe cast pattern", "Type conversion binding"],
    "options_hi": ["बाइंडिंग के साथ वैकल्पिक कास्टिंग", "सशर्त टाइप कास्ट", "सुरक्षित कास्ट पैटर्न", "टाइप कन्वर्जन बाइंडिंग"],
    "answer_en": "Optional casting with binding",
    "answer_hi": "बाइंडिंग के साथ वैकल्पिक कास्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does '@_implements(Protocol, static func method())' enable?",
    "question_hi": "'@_implements(Protocol, static func method())' क्या सक्षम करता है?",
    "options_en": ["Static protocol method implementation", "Instance method implementation", "Protocol requirement", "Static conformance"],
    "options_hi": ["स्थैतिक प्रोटोकॉल मेथड इम्प्लीमेंटेशन", "इंस्टेंस मेथड इम्प्लीमेंटेशन", "प्रोटोकॉल आवश्यकता", "स्थैतिक अनुपालन"],
    "answer_en": "Static protocol method implementation",
    "answer_hi": "स्थैतिक प्रोटोकॉल मेथड इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Swift operator enables 'array[index...]' slicing?",
    "question_hi": "कौन सा Swift ऑपरेटर 'array[index...]' स्लाइसिंग सक्षम करता है?",
    "options_en": ["Partial range from operator", "Range operator", "Slice operator", "Partial range"],
    "options_hi": ["आंशिक रेंज फ्रॉम ऑपरेटर", "रेंज ऑपरेटर", "स्लाइस ऑपरेटर", "आंशिक रेंज"],
    "answer_en": "Partial range from operator",
    "answer_hi": "आंशिक रेंज फ्रॉम ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of '@_transparent' attribute for inlining?",
    "question_hi": "इनलाइनिंग के लिए '@_transparent' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Forces function inlining", "Prevents inlining", "Optional inlining", "Selective inlining"],
    "options_hi": ["फंक्शन इनलाइनिंग फोर्स करता है", "इनलाइनिंग रोकता है", "वैकल्पिक इनलाइनिंग", "चयनात्मक इनलाइनिंग"],
    "answer_en": "Forces function inlining",
    "answer_hi": "फंक्शन इनलाइनिंग फोर्स करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Swift feature allows 'guard let url = URL(string: urlString) else { return }'?",
    "question_hi": "कौन सा Swift फीचर 'guard let url = URL(string: urlString) else { return }' की अनुमति देता है?",
    "options_en": ["Failable initializer in guard", "Optional binding with guard", "Guard with throwing initializer", "Safe URL creation"],
    "options_hi": ["गार्ड में फेलिएबल इनिशियलाइज़र", "गार्ड के साथ वैकल्पिक बाइंडिंग", "थ्रोइंग इनिशियलाइज़र के साथ गार्ड", "सुरक्षित URL निर्माण"],
    "answer_en": "Failable initializer in guard",
    "answer_hi": "गार्ड में फेलिएबल इनिशियलाइज़र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does '@_implements(Protocol, property, where T: Equatable)' enable?",
    "question_hi": "'@_implements(Protocol, property, where T: Equatable)' क्या सक्षम करता है?",
    "options_en": ["Conditional property implementation", "Unconditional implementation", "Generic property", "Constrained property"],
    "options_hi": ["सशर्त संपत्ति कार्यान्वयन", "बिना शर्त कार्यान्वयन", "सामान्य संपत्ति", "सीमित संपत्ति"],
    "answer_en": "Conditional property implementation",
    "answer_hi": "सशर्त संपत्ति कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Swift operator allows 'value is Any' type check?",
    "question_hi": "कौन सा Swift ऑपरेटर 'value is Any' टाइप चेक की अनुमति देता है?",
    "options_en": ["Type check operator", "Any type operator", "Universal type check", "Dynamic type operator"],
    "options_hi": ["टाइप चेक ऑपरेटर", "Any टाइप ऑपरेटर", "सार्वभौमिक टाइप चेक", "डायनामिक टाइप ऑपरेटर"],
    "answer_en": "Type check operator",
    "answer_hi": "टाइप चेक ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of '@_nonoverride' on inherited methods?",
    "question_hi": "इनहेरिटेड मेथड्स पर '@_nonoverride' का उद्देश्य क्या है?",
    "options_en": ["Prevents accidental overriding", "Forces overriding", "Marks final method", "Indicates base implementation"],
    "options_hi": ["आकस्मिक ओवरराइडिंग रोकता है", "ओवरराइडिंग बल देता है", "फाइनल मेथड चिह्नित करता है", "बेस इम्प्लीमेंटेशन इंगित करता है"],
    "answer_en": "Prevents accidental overriding",
    "answer_hi": "आकस्मिक ओवरराइडिंग रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Swift feature allows 'let regex = #/\\d+/#' digit matching?",
    "question_hi": "डिजिट मिलान के लिए कौन सा Swift फीचर 'let regex = #/\\d+/#' की अनुमति देता है?",
    "options_en": ["Regex literal syntax", "Digit pattern literal", "Number regex", "Pattern matching literal"],
    "options_hi": ["रेगेक्स लिटरल सिंटैक्स", "डिजिट पैटर्न लिटरल", "नंबर रेगेक्स", "पैटर्न मिलान लिटरल"],
    "answer_en": "Regex literal syntax",
    "answer_hi": "रेगेक्स लिटरल सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does '@_implements(Protocol, method, availability: *)' enable?",
    "question_hi": "'@_implements(Protocol, method, availability: *)' क्या सक्षम करता है?",
    "options_en": ["Universal availability implementation", "Platform-specific", "Limited availability", "Conditional compilation"],
    "options_hi": ["सार्वभौमिक उपलब्धता कार्यान्वयन", "प्लेटफॉर्म-विशिष्ट", "सीमित उपलब्धता", "सशर्त संकलन"],
    "answer_en": "Universal availability implementation",
    "answer_hi": "सार्वभौमिक उपलब्धता कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Swift operator allows 'value as? any Error' existential cast?",
    "question_hi": "एक्जिस्टेंशियल कास्ट के लिए कौन सा Swift ऑपरेटर 'value as? any Error' की अनुमति देता है?",
    "options_en": ["Conditional cast to existential", "Force existential cast", "Error protocol cast", "Any error cast"],
    "options_hi": ["एक्जिस्टेंशियल के लिए सशर्त कास्ट", "फोर्स एक्जिस्टेंशियल कास्ट", "एरर प्रोटोकॉल कास्ट", "कोई एरर कास्ट"],
    "answer_en": "Conditional cast to existential",
    "answer_hi": "एक्जिस्टेंशियल के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of '@_alwaysEmitIntoClient' for inlinable code?",
    "question_hi": "इनलाइनेबल कोड के लिए '@_alwaysEmitIntoClient' का उद्देश्य क्या है?",
    "options_en": ["Always includes code in client", "Optional inclusion", "Never includes", "Conditional inclusion"],
    "options_hi": ["हमेशा क्लाइंट में कोड शामिल करता है", "वैकल्पिक समावेश", "कभी शामिल नहीं करता", "सशर्त समावेश"],
    "answer_en": "Always includes code in client",
    "answer_hi": "हमेशा क्लाइंट में कोड शामिल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Swift feature allows 'let regex = #/(\\w+)/#' word matching?",
    "question_hi": "वर्ड मिलान के लिए कौन सा Swift फीचर 'let regex = #/(\\w+)/#' की अनुमति देता है?",
    "options_en": ["Word regex literal", "Alphanumeric pattern", "Word character regex", "Capture word pattern"],
    "options_hi": ["वर्ड रेगेक्स लिटरल", "अल्फान्यूमेरिक पैटर्न", "वर्ड कैरेक्टर रेगेक्स", "कैप्चर वर्ड पैटर्न"],
    "answer_en": "Word regex literal",
    "answer_hi": "वर्ड रेगेक्स लिटरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does '@_implements(Protocol, method, renamed: \"newMethod\")' indicate?",
    "question_hi": "'@_implements(Protocol, method, renamed: \"newMethod\")' क्या इंगित करता है?",
    "options_en": ["Renamed implementation", "Deprecated implementation", "New implementation", "Alias implementation"],
    "options_hi": ["नाम बदला गया कार्यान्वयन", "अप्रचलित कार्यान्वयन", "नया कार्यान्वयन", "उपनाम कार्यान्वयन"],
    "answer_en": "Renamed implementation",
    "answer_hi": "नाम बदला गया कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Swift operator enables 'value as! any Collection' force existential cast?",
    "question_hi": "फोर्स एक्जिस्टेंशियल कास्ट के लिए कौन सा Swift ऑपरेटर 'value as! any Collection' सक्षम करता है?",
    "options_en": ["Force cast to existential", "Conditional existential", "Any collection force cast", "Existential force operator"],
    "options_hi": ["एक्जिस्टेंशियल के लिए फोर्स कास्ट", "सशर्त एक्जिस्टेंशियल", "कोई कलेक्शन फोर्स कास्ट", "एक्जिस्टेंशियल फोर्स ऑपरेटर"],
    "answer_en": "Force cast to existential",
    "answer_hi": "एक्जिस्टेंशियल के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of '@_effects' attribute with 'readnone'?",
    "question_hi": "'readnone' के साथ '@_effects' एट्रिब्यूट का उद्देश्य क्या है?",
    "options_en": ["Function reads no memory", "Reads memory", "Writes memory", "Modifies memory"],
    "options_hi": ["फंक्शन कोई मेमोरी नहीं पढ़ता", "मेमोरी पढ़ता है", "मेमोरी लिखता है", "मेमोरी संशोधित करता है"],
    "answer_en": "Function reads no memory",
    "answer_hi": "फंक्शन कोई मेमोरी नहीं पढ़ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Swift feature allows 'let regex = #/(?<word>\\w+)/#' named capture?",
    "question_hi": "नामित कैप्चर के लिए कौन सा Swift फीचर 'let regex = #/(?<word>\\w+)/#' की अनुमति देता है?",
    "options_en": ["Named capture group regex", "Labeled regex pattern", "Named group literal", "Capture name syntax"],
    "options_hi": ["नामित कैप्चर ग्रुप रेगेक्स", "लेबल किया गया रेगेक्स पैटर्न", "नामित समूह लिटरल", "कैप्चर नाम सिंटैक्स"],
    "answer_en": "Named capture group regex",
    "answer_hi": "नामित कैप्चर ग्रुप रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does '@_implements(Protocol, method, obsoleted: 2.0)' indicate?",
    "question_hi": "'@_implements(Protocol, method, obsoleted: 2.0)' क्या इंगित करता है?",
    "options_en": ["Implementation obsoleted in version 2.0", "Introduced in 2.0", "Deprecated in 2.0", "Removed in 2.0"],
    "options_hi": ["संस्करण 2.0 में अप्रचलित कार्यान्वयन", "2.0 में पेश किया गया", "2.0 में अप्रचलित", "2.0 में हटाया गया"],
    "answer_en": "Implementation obsoleted in version 2.0",
    "answer_hi": "संस्करण 2.0 में अप्रचलित कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Swift operator allows 'value as? some Equatable' opaque cast?",
    "question_hi": "ओपेक कास्ट के लिए कौन सा Swift ऑपरेटर 'value as? some Equatable' की अनुमति देता है?",
    "options_en": ["Conditional cast to opaque type", "Force opaque cast", "Some type cast", "Opaque existential cast"],
    "options_hi": ["ओपेक टाइप के लिए सशर्त कास्ट", "फोर्स ओपेक कास्ट", "कुछ टाइप कास्ट", "ओपेक एक्जिस्टेंशियल कास्ट"],
    "answer_en": "Conditional cast to opaque type",
    "answer_hi": "ओपेक टाइप के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of '@_effects' with 'writenone' value?",
    "question_hi": "'writenone' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function writes no memory", "Writes memory", "Reads memory", "Accesses memory"],
    "options_hi": ["फंक्शन कोई मेमोरी नहीं लिखता", "मेमोरी लिखता है", "मेमोरी पढ़ता है", "मेमोरी एक्सेस करता है"],
    "answer_en": "Function writes no memory",
    "answer_hi": "फंक्शन कोई मेमोरी नहीं लिखता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Swift feature allows 'let regex = #/\\b\\w+\\b/#' word boundary?",
    "question_hi": "वर्ड बाउंड्री के लिए कौन सा Swift फीचर 'let regex = #/\\b\\w+\\b/#' की अनुमति देता है?",
    "options_en": ["Word boundary regex", "Boundary pattern literal", "Word edge regex", "Boundary word pattern"],
    "options_hi": ["वर्ड बाउंड्री रेगेक्स", "बाउंड्री पैटर्न लिटरल", "वर्ड एज रेगेक्स", "बाउंड्री वर्ड पैटर्न"],
    "answer_en": "Word boundary regex",
    "answer_hi": "वर्ड बाउंड्री रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does '@_implements(Protocol, method, introduced: 1.0, deprecated: 2.0)' indicate?",
    "question_hi": "'@_implements(Protocol, method, introduced: 1.0, deprecated: 2.0)' क्या इंगित करता है?",
    "options_en": ["Implementation version history", "Only introduction", "Only deprecation", "No version info"],
    "options_hi": ["कार्यान्वयन संस्करण इतिहास", "केवल परिचय", "केवल अप्रचलन", "कोई संस्करण जानकारी नहीं"],
    "answer_en": "Implementation version history",
    "answer_hi": "कार्यान्वयन संस्करण इतिहास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Swift operator allows 'value as! some Codable' force opaque cast?",
    "question_hi": "फोर्स ओपेक कास्ट के लिए कौन सा Swift ऑपरेटर 'value as! some Codable' की अनुमति देता है?",
    "options_en": ["Force cast to opaque type", "Conditional opaque cast", "Some type force cast", "Opaque force operator"],
    "options_hi": ["ओपेक टाइप के लिए फोर्स कास्ट", "सशर्त ओपेक कास्ट", "कुछ टाइप फोर्स कास्ट", "ओपेक फोर्स ऑपरेटर"],
    "answer_en": "Force cast to opaque type",
    "answer_hi": "ओपेक टाइप के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of '@_effects' with 'accessnone' value?",
    "question_hi": "'accessnone' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function accesses no memory", "Accesses memory", "Reads memory", "Writes memory"],
    "options_hi": ["फंक्शन कोई मेमोरी नहीं एक्सेस करता", "मेमोरी एक्सेस करता है", "मेमोरी पढ़ता है", "मेमोरी लिखता है"],
    "answer_en": "Function accesses no memory",
    "answer_hi": "फंक्शन कोई मेमोरी नहीं एक्सेस करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which Swift feature allows 'let regex = #/(?i)hello/#' case-insensitive?",
    "question_hi": "केस-इनसेंसिटिव के लिए कौन सा Swift फीचर 'let regex = #/(?i)hello/#' की अनुमति देता है?",
    "options_en": ["Case-insensitive regex", "Ignore case pattern", "Case flag regex", "Insensitive literal"],
    "options_hi": ["केस-इनसेंसिटिव रेगेक्स", "इग्नोर केस पैटर्न", "केस फ्लैग रेगेक्स", "इनसेंसिटिव लिटरल"],
    "answer_en": "Case-insensitive regex",
    "answer_hi": "केस-इनसेंसिटिव रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does '@_implements(Protocol, method, message: \"Use newMethod\")' indicate?",
    "question_hi": "'@_implements(Protocol, method, message: \"Use newMethod\")' क्या इंगित करता है?",
    "options_en": ["Deprecation message", "Renaming message", "Migration message", "Warning message"],
    "options_hi": ["अप्रचलन संदेश", "नाम बदलने का संदेश", "माइग्रेशन संदेश", "चेतावनी संदेश"],
    "answer_en": "Deprecation message",
    "answer_hi": "अप्रचलन संदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Swift operator allows 'value as? any View & Identifiable' composition cast?",
    "question_hi": "कंपोज़िशन कास्ट के लिए कौन सा Swift ऑपरेटर 'value as? any View & Identifiable' की अनुमति देता है?",
    "options_en": ["Conditional cast to protocol composition", "Force composition cast", "Multiple protocol cast", "Existential composition cast"],
    "options_hi": ["प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स कंपोज़िशन कास्ट", "एकाधिक प्रोटोकॉल कास्ट", "एक्जिस्टेंशियल कंपोज़िशन कास्ट"],
    "answer_en": "Conditional cast to protocol composition",
    "answer_hi": "प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of '@_effects' with 'noreturn' value?",
    "question_hi": "'noreturn' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function never returns", "Always returns", "May return", "Returns optional"],
    "options_hi": ["फंक्शन कभी वापस नहीं आता", "हमेशा वापस आता है", "वापस आ सकता है", "वैकल्पिक रिटर्न"],
    "answer_en": "Function never returns",
    "answer_hi": "फंक्शन कभी वापस नहीं आता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Swift feature allows 'let regex = #/(?m)^line$/m#' multi-line?",
    "question_hi": "मल्टी-लाइन के लिए कौन सा Swift फीचर 'let regex = #/(?m)^line$/m#' की अनुमति देता है?",
    "options_en": ["Multi-line regex", "Line mode pattern", "Multi-line flag", "Line boundary regex"],
    "options_hi": ["मल्टी-लाइन रेगेक्स", "लाइन मोड पैटर्न", "मल्टी-लाइन फ्लैग", "लाइन बाउंड्री रेगेक्स"],
    "answer_en": "Multi-line regex",
    "answer_hi": "मल्टी-लाइन रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does '@_implements(Protocol, method, introduced: 1.0, obsoleted: 3.0)' indicate?",
    "question_hi": "'@_implements(Protocol, method, introduced: 1.0, obsoleted: 3.0)' क्या इंगित करता है?",
    "options_en": ["Full version history", "Partial history", "No version info", "Only current version"],
    "options_hi": ["पूर्ण संस्करण इतिहास", "आंशिक इतिहास", "कोई संस्करण जानकारी नहीं", "केवल वर्तमान संस्करण"],
    "answer_en": "Full version history",
    "answer_hi": "पूर्ण संस्करण इतिहास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Swift operator allows 'value as! any Codable & Sendable' force composition?",
    "question_hi": "फोर्स कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as! any Codable & Sendable' की अनुमति देता है?",
    "options_en": ["Force cast to protocol composition", "Conditional composition", "Multiple protocol force cast", "Existential force composition"],
    "options_hi": ["प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त कंपोज़िशन", "एकाधिक प्रोटोकॉल फोर्स कास्ट", "एक्जिस्टेंशियल फोर्स कंपोज़िशन"],
    "answer_en": "Force cast to protocol composition",
    "answer_hi": "प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of '@_effects' with 'instantaneous' value?",
    "question_hi": "'instantaneous' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Immediate effect", "Delayed effect", "No effect", "Persistent effect"],
    "options_hi": ["तात्कालिक प्रभाव", "विलंबित प्रभाव", "कोई प्रभाव नहीं", "स्थायी प्रभाव"],
    "answer_en": "Immediate effect",
    "answer_hi": "तात्कालिक प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Swift feature allows 'let regex = #/(?s).*/s#' single-line?",
    "question_hi": "सिंगल-लाइन के लिए कौन सा Swift फीचर 'let regex = #/(?s).*/s#' की अनुमति देता है?",
    "options_en": ["Single-line regex", "Dot-all pattern", "Single-line mode", "Dot matches newline"],
    "options_hi": ["सिंगल-लाइन रेगेक्स", "डॉट-ऑल पैटर्न", "सिंगल-लाइन मोड", "डॉट मैचेस न्यूलाइन"],
    "answer_en": "Single-line regex",
    "answer_hi": "सिंगल-लाइन रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does '@_implements(Protocol, method, introduced: 1.0, deprecated: 2.0, obsoleted: 3.0)' indicate?",
    "question_hi": "'@_implements(Protocol, method, introduced: 1.0, deprecated: 2.0, obsoleted: 3.0)' क्या इंगित करता है?",
    "options_en": ["Complete version timeline", "Incomplete timeline", "No timeline", "Partial timeline"],
    "options_hi": ["पूर्ण संस्करण टाइमलाइन", "अपूर्ण टाइमलाइन", "कोई टाइमलाइन नहीं", "आंशिक टाइमलाइन"],
    "answer_en": "Complete version timeline",
    "answer_hi": "पूर्ण संस्करण टाइमलाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which Swift operator allows 'value as? some Collection & Equatable' opaque composition?",
    "question_hi": "ओपेक कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? some Collection & Equatable' की अनुमति देता है?",
    "options_en": ["Conditional cast to opaque composition", "Force opaque composition", "Some composition cast", "Opaque protocol composition"],
    "options_hi": ["ओपेक कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स ओपेक कंपोज़िशन", "कुछ कंपोज़िशन कास्ट", "ओपेक प्रोटोकॉल कंपोज़िशन"],
    "answer_en": "Conditional cast to opaque composition",
    "answer_hi": "ओपेक कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of '@_effects' with 'releasenone' value?",
    "question_hi": "'releasenone' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function releases no memory", "Releases memory", "Allocates memory", "Manages memory"],
    "options_hi": ["फंक्शन कोई मेमोरी नहीं रिलीज़ करता", "मेमोरी रिलीज़ करता है", "मेमोरी आवंटित करता है", "मेमोरी प्रबंधित करता है"],
    "answer_en": "Function releases no memory",
    "answer_hi": "फंक्शन कोई मेमोरी नहीं रिलीज़ करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Swift feature allows 'let regex = #/(?x) pattern with spaces/#' extended?",
    "question_hi": "एक्सटेंडेड के लिए कौन सा Swift फीचर 'let regex = #/(?x) pattern with spaces/#' की अनुमति देता है?",
    "options_en": ["Extended regex mode", "Verbose pattern", "Ignore whitespace", "Extended syntax"],
    "options_hi": ["एक्सटेंडेड रेगेक्स मोड", "वर्बोज़ पैटर्न", "व्हाइटस्पेस इग्नोर", "एक्सटेंडेड सिंटैक्स"],
    "answer_en": "Extended regex mode",
    "answer_hi": "एक्सटेंडेड रेगेक्स मोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does '@_implements(Protocol, method, where T: Hashable)' enable?",
    "question_hi": "'@_implements(Protocol, method, where T: Hashable)' क्या सक्षम करता है?",
    "options_en": ["Conditional implementation with constraint", "Unconstrained implementation", "Generic implementation", "Type-erased implementation"],
    "options_hi": ["बाध्यकारी के साथ सशर्त कार्यान्वयन", "अप्रतिबंधित कार्यान्वयन", "सामान्य कार्यान्वयन", "प्रकार-मिटाया गया कार्यान्वयन"],
    "answer_en": "Conditional implementation with constraint",
    "answer_hi": "बाध्यकारी के साथ सशर्त कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Swift operator allows 'value as! some View & Hashable' force opaque composition?",
    "question_hi": "फोर्स ओपेक कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as! some View & Hashable' की अनुमति देता है?",
    "options_en": ["Force cast to opaque composition", "Conditional opaque composition", "Some force composition", "Opaque force composition"],
    "options_hi": ["ओपेक कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त ओपेक कंपोज़िशन", "कुछ फोर्स कंपोज़िशन", "ओपेक फोर्स कंपोज़िशन"],
    "answer_en": "Force cast to opaque composition",
    "answer_hi": "ओपेक कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the purpose of '@_effects' with 'accessarg' value?",
    "question_hi": "'accessarg' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function accesses only arguments", "Accesses global memory", "Accesses heap", "No memory access"],
    "options_hi": ["फंक्शन केवल तर्कों तक पहुंचता है", "ग्लोबल मेमोरी एक्सेस करता है", "हीप एक्सेस करता है", "कोई मेमोरी एक्सेस नहीं"],
    "answer_en": "Function accesses only arguments",
    "answer_hi": "फंक्शन केवल तर्कों तक पहुंचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Swift feature allows 'let regex = #/(?<=\\()\\d+(?=\\))/#' lookaround?",
    "question_hi": "लुकअराउंड के लिए कौन सा Swift फीचर 'let regex = #/(?<=\\()\\d+(?=\\))/#' की अनुमति देता है?",
    "options_en": ["Lookaround regex", "Lookahead/lookbehind", "Assertion pattern", "Conditional pattern"],
    "options_hi": ["लुकअराउंड रेगेक्स", "लुकअहेड/लुकबिहाइंड", "असेर्शन पैटर्न", "सशर्त पैटर्न"],
    "answer_en": "Lookaround regex",
    "answer_hi": "लुकअराउंड रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does '@_implements(Protocol, subscript, where T: Comparable)' enable?",
    "question_hi": "'@_implements(Protocol, subscript, where T: Comparable)' क्या सक्षम करता है?",
    "options_en": ["Conditional subscript implementation", "Unconditional subscript", "Generic subscript", "Constrained subscript"],
    "options_hi": ["सशर्त सबस्क्रिप्ट कार्यान्वयन", "बिना शर्त सबस्क्रिप्ट", "सामान्य सबस्क्रिप्ट", "सीमित सबस्क्रिप्ट"],
    "answer_en": "Conditional subscript implementation",
    "answer_hi": "सशर्त सबस्क्रिप्ट कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Swift operator allows 'value as? any Collection<String>' existential generic?",
    "question_hi": "एक्जिस्टेंशियल जेनेरिक के लिए कौन सा Swift ऑपरेटर 'value as? any Collection<String>' की अनुमति देता है?",
    "options_en": ["Conditional cast to existential with generic", "Force existential generic", "Any generic collection cast", "Existential generic cast"],
    "options_hi": ["जेनेरिक के साथ एक्जिस्टेंशियल के लिए सशर्त कास्ट", "फोर्स एक्जिस्टेंशियल जेनेरिक", "कोई जेनेरिक कलेक्शन कास्ट", "एक्जिस्टेंशियल जेनेरिक कास्ट"],
    "answer_en": "Conditional cast to existential with generic",
    "answer_hi": "जेनेरिक के साथ एक्जिस्टेंशियल के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of '@_effects' with 'noescape' value?",
    "question_hi": "'noescape' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Parameter cannot escape", "May escape", "Always escapes", "Escape optional"],
    "options_hi": ["पैरामीटर एस्केप नहीं कर सकता", "एस्केप कर सकता है", "हमेशा एस्केप करता है", "एस्केप वैकल्पिक"],
    "answer_en": "Parameter cannot escape",
    "answer_hi": "पैरामीटर एस्केप नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which Swift feature allows 'let regex = #/\\bword\\b/#' exact word?",
    "question_hi": "एग्जैक्ट वर्ड के लिए कौन सा Swift फीचर 'let regex = #/\\bword\\b/#' की अनुमति देता है?",
    "options_en": ["Exact word boundary regex", "Word match pattern", "Exact match literal", "Boundary exact word"],
    "options_hi": ["एग्जैक्ट वर्ड बाउंड्री रेगेक्स", "वर्ड मैच पैटर्न", "एग्जैक्ट मैच लिटरल", "बाउंड्री एग्जैक्ट वर्ड"],
    "answer_en": "Exact word boundary regex",
    "answer_hi": "एग्जैक्ट वर्ड बाउंड्री रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does '@_implements(Protocol, property, availability: iOS 15)' enable?",
    "question_hi": "'@_implements(Protocol, property, availability: iOS 15)' क्या सक्षम करता है?",
    "options_en": ["Platform-specific property implementation", "Universal property", "Conditional property", "Version-specific property"],
    "options_hi": ["प्लेटफॉर्म-विशिष्ट संपत्ति कार्यान्वयन", "सार्वभौमिक संपत्ति", "सशर्त संपत्ति", "संस्करण-विशिष्ट संपत्ति"],
    "answer_en": "Platform-specific property implementation",
    "answer_hi": "प्लेटफॉर्म-विशिष्ट संपत्ति कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Swift operator allows 'value as! any Collection<Int>' force existential generic?",
    "question_hi": "फोर्स एक्जिस्टेंशियल जेनेरिक के लिए कौन सा Swift ऑपरेटर 'value as! any Collection<Int>' की अनुमति देता है?",
    "options_en": ["Force cast to existential with generic", "Conditional existential generic", "Any generic force cast", "Existential generic force cast"],
    "options_hi": ["जेनेरिक के साथ एक्जिस्टेंशियल के लिए फोर्स कास्ट", "सशर्त एक्जिस्टेंशियल जेनेरिक", "कोई जेनेरिक फोर्स कास्ट", "एक्जिस्टेंशियल जेनेरिक फोर्स कास्ट"],
    "answer_en": "Force cast to existential with generic",
    "answer_hi": "जेनेरिक के साथ एक्जिस्टेंशियल के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of '@_effects' with 'constant' value?",
    "question_hi": "'constant' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function returns constant value", "Variable return", "Mutable return", "Dynamic return"],
    "options_hi": ["फंक्शन स्थिर मान लौटाता है", "चर रिटर्न", "परिवर्तनशील रिटर्न", "गतिशील रिटर्न"],
    "answer_en": "Function returns constant value",
    "answer_hi": "फंक्शन स्थिर मान लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Swift feature allows 'let regex = #/[a-zA-Z]+/#' letter range?",
    "question_hi": "लेटर रेंज के लिए कौन सा Swift फीचर 'let regex = #/[a-zA-Z]+/#' की अनुमति देता है?",
    "options_en": ["Letter range regex", "Alphabet pattern", "Character range literal", "Letter pattern regex"],
    "options_hi": ["लेटर रेंज रेगेक्स", "अल्फाबेट पैटर्न", "कैरेक्टर रेंज लिटरल", "लेटर पैटर्न रेगेक्स"],
    "answer_en": "Letter range regex",
    "answer_hi": "लेटर रेंज रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does '@_implements(Protocol, static property, where T: Sendable)' enable?",
    "question_hi": "'@_implements(Protocol, static property, where T: Sendable)' क्या सक्षम करता है?",
    "options_en": ["Conditional static property implementation", "Unconditional static property", "Generic static property", "Constrained static property"],
    "options_hi": ["सशर्त स्थैतिक संपत्ति कार्यान्वयन", "बिना शर्त स्थैतिक संपत्ति", "सामान्य स्थैतिक संपत्ति", "सीमित स्थैतिक संपत्ति"],
    "answer_en": "Conditional static property implementation",
    "answer_hi": "सशर्त स्थैतिक संपत्ति कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which Swift operator allows 'value as? any Sequence<String> & Sendable' composition?",
    "question_hi": "कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? any Sequence<String> & Sendable' की अनुमति देता है?",
    "options_en": ["Conditional cast to generic protocol composition", "Force generic composition", "Any generic sequence cast", "Generic existential composition"],
    "options_hi": ["जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स जेनेरिक कंपोज़िशन", "कोई जेनेरिक सीक्वेंस कास्ट", "जेनेरिक एक्जिस्टेंशियल कंपोज़िशन"],
    "answer_en": "Conditional cast to generic protocol composition",
    "answer_hi": "जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the purpose of '@_effects' with 'readwrite' value?",
    "question_hi": "'readwrite' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Function reads and writes memory", "Read-only", "Write-only", "No memory access"],
    "options_hi": ["फंक्शन मेमोरी पढ़ता और लिखता है", "केवल पढ़ने योग्य", "केवल लिखने योग्य", "कोई मेमोरी एक्सेस नहीं"],
    "answer_en": "Function reads and writes memory",
    "answer_hi": "फंक्शन मेमोरी पढ़ता और लिखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which Swift feature allows 'let regex = #/\\d{3}-\\d{3}-\\d{4}/#' phone pattern?",
    "question_hi": "फोन पैटर्न के लिए कौन सा Swift फीचर 'let regex = #/\\d{3}-\\d{3}-\\d{4}/#' की अनुमति देता है?",
    "options_en": ["Phone number regex", "Digit pattern with dashes", "Phone format literal", "Number pattern regex"],
    "options_hi": ["फोन नंबर रेगेक्स", "डैश के साथ डिजिट पैटर्न", "फोन फॉर्मेट लिटरल", "नंबर पैटर्न रेगेक्स"],
    "answer_en": "Phone number regex",
    "answer_hi": "फोन नंबर रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does '@_implements(Protocol, method, where T: Encodable & Decodable)' enable?",
    "question_hi": "'@_implements(Protocol, method, where T: Encodable & Decodable)' क्या सक्षम करता है?",
    "options_en": ["Conditional implementation with multiple constraints", "Single constraint", "No constraints", "Type constraints"],
    "options_hi": ["एकाधिक बाध्यकारी के साथ सशर्त कार्यान्वयन", "एकल बाध्यकारी", "कोई बाध्यकारी नहीं", "प्रकार बाध्यकारी"],
    "answer_en": "Conditional implementation with multiple constraints",
    "answer_hi": "एकाधिक बाध्यकारी के साथ सशर्त कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which Swift operator allows 'value as! any Collection<Int> & Hashable' force composition?",
    "question_hi": "फोर्स कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as! any Collection<Int> & Hashable' की अनुमति देता है?",
    "options_en": ["Force cast to generic protocol composition", "Conditional generic composition", "Any generic force composition", "Generic existential force composition"],
    "options_hi": ["जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त जेनेरिक कंपोज़िशन", "कोई जेनेरिक फोर्स कंपोज़िशन", "जेनेरिक एक्जिस्टेंशियल फोर्स कंपोज़िशन"],
    "answer_en": "Force cast to generic protocol composition",
    "answer_hi": "जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the purpose of '@_effects' with 'escaping' value?",
    "question_hi": "'escaping' मान के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Parameter may escape", "Cannot escape", "Always escapes", "Escape required"],
    "options_hi": ["पैरामीटर एस्केप कर सकता है", "एस्केप नहीं कर सकता", "हमेशा एस्केप करता है", "एस्केप आवश्यक"],
    "answer_en": "Parameter may escape",
    "answer_hi": "पैरामीटर एस्केप कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which Swift feature allows 'let regex = #/^[\\w.%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$/#' email?",
    "question_hi": "ईमेल के लिए कौन सा Swift फीचर 'let regex = #/^[\\w.%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$/#' की अनुमति देता है?",
    "options_en": ["Email regex pattern", "Email validation literal", "Email format regex", "Mail pattern"],
    "options_hi": ["ईमेल रेगेक्स पैटर्न", "ईमेल वैलिडेशन लिटरल", "ईमेल फॉर्मेट रेगेक्स", "मेल पैटर्न"],
    "answer_en": "Email regex pattern",
    "answer_hi": "ईमेल रेगेक्स पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does '@_implements(Protocol, static method, availability: *)' enable?",
    "question_hi": "'@_implements(Protocol, static method, availability: *)' क्या सक्षम करता है?",
    "options_en": ["Universal static method implementation", "Platform-specific static method", "Conditional static method", "Version-specific static method"],
    "options_hi": ["सार्वभौमिक स्थैतिक विधि कार्यान्वयन", "प्लेटफॉर्म-विशिष्ट स्थैतिक विधि", "सशर्त स्थैतिक विधि", "संस्करण-विशिष्ट स्थैतिक विधि"],
    "answer_en": "Universal static method implementation",
    "answer_hi": "सार्वभौमिक स्थैतिक विधि कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which Swift operator allows 'value as? some Collection<String> & Sendable' opaque composition?",
    "question_hi": "ओपेक कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? some Collection<String> & Sendable' की अनुमति देता है?",
    "options_en": ["Conditional cast to opaque generic composition", "Force opaque generic composition", "Some generic composition", "Opaque generic protocol composition"],
    "options_hi": ["ओपेक जेनेरिक कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स ओपेक जेनेरिक कंपोज़िशन", "कुछ जेनेरिक कंपोज़िशन", "ओपेक जेनेरिक प्रोटोकॉल कंपोज़िशन"],
    "answer_en": "Conditional cast to opaque generic composition",
    "answer_hi": "ओपेक जेनेरिक कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the purpose of '@_effects' with 'noreturn' for closures?",
    "question_hi": "क्लोजर्स के लिए 'noreturn' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Closure never returns", "Always returns", "May return", "Returns value"],
    "options_hi": ["क्लोजर कभी वापस नहीं आता", "हमेशा वापस आता है", "वापस आ सकता है", "मान लौटाता है"],
    "answer_en": "Closure never returns",
    "answer_hi": "क्लोजर कभी वापस नहीं आता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which Swift feature allows 'let regex = #/(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/?=&#]*)/#' URL?",
    "question_hi": "URL के लिए कौन सा Swift फीचर 'let regex = #/(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/?=&#]*)/#' की अनुमति देता है?",
    "options_en": ["URL regex pattern", "URL validation literal", "Web address regex", "Link pattern"],
    "options_hi": ["URL रेगेक्स पैटर्न", "URL वैलिडेशन लिटरल", "वेब एड्रेस रेगेक्स", "लिंक पैटर्न"],
    "answer_en": "URL regex pattern",
    "answer_hi": "URL रेगेक्स पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does '@_implements(Protocol, property, where T: CaseIterable)' enable?",
    "question_hi": "'@_implements(Protocol, property, where T: CaseIterable)' क्या सक्षम करता है?",
    "options_en": ["Conditional property with CaseIterable constraint", "Unconstrained property", "Generic property", "Iterable property"],
    "options_hi": ["CaseIterable बाध्यकारी के साथ सशर्त संपत्ति", "अप्रतिबंधित संपत्ति", "सामान्य संपत्ति", "पुनरावृत्ति योग्य संपत्ति"],
    "answer_en": "Conditional property with CaseIterable constraint",
    "answer_hi": "CaseIterable बाध्यकारी के साथ सशर्त संपत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which Swift operator allows 'value as! some Sequence<Int> & Comparable' force opaque composition?",
    "question_hi": "फोर्स ओपेक कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as! some Sequence<Int> & Comparable' की अनुमति देता है?",
    "options_en": ["Force cast to opaque generic protocol composition", "Conditional opaque generic", "Some generic force composition", "Opaque generic force composition"],
    "options_hi": ["ओपेक जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त ओपेक जेनेरिक", "कुछ जेनेरिक फोर्स कंपोज़िशन", "ओपेक जेनेरिक फोर्स कंपोज़िशन"],
    "answer_en": "Force cast to opaque generic protocol composition",
    "answer_hi": "ओपेक जेनेरिक प्रोटोकॉल कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the purpose of '@_effects' with 'readonly' for computed properties?",
    "question_hi": "कंप्यूटेड प्रॉपर्टीज के लिए 'readonly' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Computed property only reads", "Reads and writes", "Write-only", "No access"],
    "options_hi": ["कंप्यूटेड प्रॉपर्टी केवल पढ़ती है", "पढ़ती और लिखती है", "केवल लिखने योग्य", "कोई पहुंच नहीं"],
    "answer_en": "Computed property only reads",
    "answer_hi": "कंप्यूटेड प्रॉपर्टी केवल पढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which Swift feature allows 'let regex = #/^(0x)?[0-9a-fA-F]+$/# hexadecimal?",
    "question_hi": "हेक्साडेसिमल के लिए कौन सा Swift फीचर 'let regex = #/^(0x)?[0-9a-fA-F]+$/# की अनुमति देता है?",
    "options_en": ["Hexadecimal regex pattern", "Hex number literal", "Hex validation regex", "Base-16 pattern"],
    "options_hi": ["हेक्साडेसिमल रेगेक्स पैटर्न", "हेक्स नंबर लिटरल", "हेक्स वैलिडेशन रेगेक्स", "बेस-16 पैटर्न"],
    "answer_en": "Hexadecimal regex pattern",
    "answer_hi": "हेक्साडेसिमल रेगेक्स पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does '@_implements(Protocol, subscript, availability: iOS 15)' enable?",
    "question_hi": "'@_implements(Protocol, subscript, availability: iOS 15)' क्या सक्षम करता है?",
    "options_en": ["Platform-specific subscript implementation", "Universal subscript", "Conditional subscript", "Version-specific subscript"],
    "options_hi": ["प्लेटफॉर्म-विशिष्ट सबस्क्रिप्ट कार्यान्वयन", "सार्वभौमिक सबस्क्रिप्ट", "सशर्त सबस्क्रिप्ट", "संस्करण-विशिष्ट सबस्क्रिप्ट"],
    "answer_en": "Platform-specific subscript implementation",
    "answer_hi": "प्लेटफॉर्म-विशिष्ट सबस्क्रिप्ट कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which Swift operator allows 'value as? any Dictionary<String, Int> & Codable' generic composition?",
    "question_hi": "जेनेरिक कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? any Dictionary<String, Int> & Codable' की अनुमति देता है?",
    "options_en": ["Conditional cast to generic dictionary composition", "Force generic dictionary", "Any dictionary cast", "Generic existential dictionary"],
    "options_hi": ["जेनेरिक डिक्शनरी कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स जेनेरिक डिक्शनरी", "कोई डिक्शनरी कास्ट", "जेनेरिक एक्जिस्टेंशियल डिक्शनरी"],
    "answer_en": "Conditional cast to generic dictionary composition",
    "answer_hi": "जेनेरिक डिक्शनरी कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the purpose of '@_effects' with 'writenone' for initializers?",
    "question_hi": "इनिशियलाइज़र्स के लिए 'writenone' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Initializer writes no memory", "Writes memory", "Reads memory", "Modifies memory"],
    "options_hi": ["इनिशियलाइज़र कोई मेमोरी नहीं लिखता", "मेमोरी लिखता है", "मेमोरी पढ़ता है", "मेमोरी संशोधित करता है"],
    "answer_en": "Initializer writes no memory",
    "answer_hi": "इनिशियलाइज़र कोई मेमोरी नहीं लिखता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which Swift feature allows 'let regex = #/\\d{4}-\\d{2}-\\d{2}/#' date format?",
    "question_hi": "डेट फॉर्मेट के लिए कौन सा Swift फीचर 'let regex = #/\\d{4}-\\d{2}-\\d{2}/#' की अनुमति देता है?",
    "options_en": ["Date regex pattern", "ISO date format", "Date validation literal", "Calendar pattern"],
    "options_hi": ["डेट रेगेक्स पैटर्न", "ISO डेट फॉर्मेट", "डेट वैलिडेशन लिटरल", "कैलेंडर पैटर्न"],
    "answer_en": "Date regex pattern",
    "answer_hi": "डेट रेगेक्स पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does '@_implements(Protocol, static subscript, where T: Hashable)' enable?",
    "question_hi": "'@_implements(Protocol, static subscript, where T: Hashable)' क्या सक्षम करता है?",
    "options_en": ["Conditional static subscript implementation", "Unconditional static subscript", "Generic static subscript", "Constrained static subscript"],
    "options_hi": ["सशर्त स्थैतिक सबस्क्रिप्ट कार्यान्वयन", "बिना शर्त स्थैतिक सबस्क्रिप्ट", "सामान्य स्थैतिक सबस्क्रिप्ट", "सीमित स्थैतिक सबस्क्रिप्ट"],
    "answer_en": "Conditional static subscript implementation",
    "answer_hi": "सशर्त स्थैतिक सबस्क्रिप्ट कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which Swift operator allows 'value as! any Set<String> & Hashable' force generic?",
    "question_hi": "फोर्स जेनेरिक के लिए कौन सा Swift ऑपरेटर 'value as! any Set<String> & Hashable' की अनुमति देता है?",
    "options_en": ["Force cast to generic set composition", "Conditional generic set", "Any set force cast", "Generic existential set"],
    "options_hi": ["जेनेरिक सेट कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त जेनेरिक सेट", "कोई सेट फोर्स कास्ट", "जेनेरिक एक्जिस्टेंशियल सेट"],
    "answer_en": "Force cast to generic set composition",
    "answer_hi": "जेनेरिक सेट कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the purpose of '@_effects' with 'accessnone' for deinitializers?",
    "question_hi": "डीइनिशियलाइज़र्स के लिए 'accessnone' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Deinitializer accesses no memory", "Accesses memory", "Reads memory", "Writes memory"],
    "options_hi": ["डीइनिशियलाइज़र कोई मेमोरी नहीं एक्सेस करता", "मेमोरी एक्सेस करता है", "मेमोरी पढ़ता है", "मेमोरी लिखता है"],
    "answer_en": "Deinitializer accesses no memory",
    "answer_hi": "डीइनिशियलाइज़र कोई मेमोरी नहीं एक्सेस करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which Swift feature allows 'let regex = #/[A-Z][a-z]*/#' capitalized word?",
    "question_hi": "कैपिटलाइज्ड वर्ड के लिए कौन सा Swift फीचर 'let regex = #/[A-Z][a-z]*/#' की अनुमति देता है?",
    "options_en": ["Capitalized word regex", "Title case pattern", "Capital letter word", "Proper noun pattern"],
    "options_hi": ["कैपिटलाइज्ड वर्ड रेगेक्स", "टाइटल केस पैटर्न", "कैपिटल लेटर वर्ड", "प्रॉपर नाउन पैटर्न"],
    "answer_en": "Capitalized word regex",
    "answer_hi": "कैपिटलाइज्ड वर्ड रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does '@_implements(Protocol, method, where T: RawRepresentable)' enable?",
    "question_hi": "'@_implements(Protocol, method, where T: RawRepresentable)' क्या सक्षम करता है?",
    "options_en": ["Conditional implementation with RawRepresentable", "Unconstrained implementation", "Generic implementation", "Raw value implementation"],
    "options_hi": ["RawRepresentable के साथ सशर्त कार्यान्वयन", "अप्रतिबंधित कार्यान्वयन", "सामान्य कार्यान्वयन", "कच्चा मान कार्यान्वयन"],
    "answer_en": "Conditional implementation with RawRepresentable",
    "answer_hi": "RawRepresentable के साथ सशर्त कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which Swift operator allows 'value as? any Array<Int> & RandomAccessCollection' composition?",
    "question_hi": "कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? any Array<Int> & RandomAccessCollection' की अनुमति देता है?",
    "options_en": ["Conditional cast to array protocol composition", "Force array composition", "Any array cast", "Array existential composition"],
    "options_hi": ["ऐरे प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स ऐरे कंपोज़िशन", "कोई ऐरे कास्ट", "ऐरे एक्जिस्टेंशियल कंपोज़िशन"],
    "answer_en": "Conditional cast to array protocol composition",
    "answer_hi": "ऐरे प्रोटोकॉल कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the purpose of '@_effects' with 'readonly' for type methods?",
    "question_hi": "टाइप मेथड्स के लिए 'readonly' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Type method only reads", "Reads and writes", "Write-only", "No static access"],
    "options_hi": ["टाइप मेथड केवल पढ़ती है", "पढ़ती और लिखती है", "केवल लिखने योग्य", "कोई स्थैतिक पहुंच नहीं"],
    "answer_en": "Type method only reads",
    "answer_hi": "टाइप मेथड केवल पढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which Swift feature allows 'let regex = #/\\$(\\d+(\\.\\d{2})?)/#' currency?",
    "question_hi": "करेंसी के लिए कौन सा Swift फीचर 'let regex = #/\\$(\\d+(\\.\\d{2})?)/#' की अनुमति देता है?",
    "options_en": ["Currency regex pattern", "Money format literal", "Dollar amount regex", "Price pattern"],
    "options_hi": ["करेंसी रेगेक्स पैटर्न", "मनी फॉर्मेट लिटरल", "डॉलर अमाउंट रेगेक्स", "प्राइस पैटर्न"],
    "answer_en": "Currency regex pattern",
    "answer_hi": "करेंसी रेगेक्स पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does '@_implements(Protocol, property, where T: Identifiable)' enable?",
    "question_hi": "'@_implements(Protocol, property, where T: Identifiable)' क्या सक्षम करता है?",
    "options_en": ["Conditional property with Identifiable constraint", "Unconstrained property", "Generic property", "Identifiable implementation"],
    "options_hi": ["Identifiable बाध्यकारी के साथ सशर्त संपत्ति", "अप्रतिबंधित संपत्ति", "सामान्य संपत्ति", "Identifiable कार्यान्वयन"],
    "answer_en": "Conditional property with Identifiable constraint",
    "answer_hi": "Identifiable बाध्यकारी के साथ सशर्त संपत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which Swift operator allows 'value as! any String.UTF8View & Collection' force composition?",
    "question_hi": "फोर्स कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as! any String.UTF8View & Collection' की अनुमति देता है?",
    "options_en": ["Force cast to string view composition", "Conditional string view", "Any UTF8 view cast", "String view existential"],
    "options_hi": ["स्ट्रिंग व्यू कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त स्ट्रिंग व्यू", "कोई UTF8 व्यू कास्ट", "स्ट्रिंग व्यू एक्जिस्टेंशियल"],
    "answer_en": "Force cast to string view composition",
    "answer_hi": "स्ट्रिंग व्यू कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the purpose of '@_effects' with 'writenone' for subscripts?",
    "question_hi": "सबस्क्रिप्ट्स के लिए 'writenone' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Subscript writes no memory", "Writes memory", "Reads memory", "Modifies memory"],
    "options_hi": ["सबस्क्रिप्ट कोई मेमोरी नहीं लिखती", "मेमोरी लिखती है", "मेमोरी पढ़ती है", "मेमोरी संशोधित करती है"],
    "answer_en": "Subscript writes no memory",
    "answer_hi": "सबस्क्रिप्ट कोई मेमोरी नहीं लिखती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which Swift feature allows 'let regex = #/[+-]?\\d+/#' signed number?",
    "question_hi": "साइन्ड नंबर के लिए कौन सा Swift फीचर 'let regex = #/[+-]?\\d+/#' की अनुमति देता है?",
    "options_en": ["Signed number regex", "Positive/negative pattern", "Sign number literal", "Integer with sign"],
    "options_hi": ["साइन्ड नंबर रेगेक्स", "पॉजिटिव/नेगेटिव पैटर्न", "साइन नंबर लिटरल", "साइन के साथ इंटीजर"],
    "answer_en": "Signed number regex",
    "answer_hi": "साइन्ड नंबर रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '@_implements(Protocol, static method, where T: CaseIterable)' enable?",
    "question_hi": "'@_implements(Protocol, static method, where T: CaseIterable)' क्या सक्षम करता है?",
    "options_en": ["Conditional static method with CaseIterable", "Unconstrained static method", "Generic static method", "Iterable static method"],
    "options_hi": ["CaseIterable के साथ सशर्त स्थैतिक विधि", "अप्रतिबंधित स्थैतिक विधि", "सामान्य स्थैतिक विधि", "पुनरावृत्ति योग्य स्थैतिक विधि"],
    "answer_en": "Conditional static method with CaseIterable",
    "answer_hi": "CaseIterable के साथ सशर्त स्थैतिक विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which Swift operator allows 'value as? any LazySequence<[Int]> & Sequence' composition?",
    "question_hi": "कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? any LazySequence<[Int]> & Sequence' की अनुमति देता है?",
    "options_en": ["Conditional cast to lazy sequence composition", "Force lazy sequence", "Any lazy sequence cast", "Lazy sequence existential"],
    "options_hi": ["लेज़ी सीक्वेंस कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स लेज़ी सीक्वेंस", "कोई लेज़ी सीक्वेंस कास्ट", "लेज़ी सीक्वेंस एक्जिस्टेंशियल"],
    "answer_en": "Conditional cast to lazy sequence composition",
    "answer_hi": "लेज़ी सीक्वेंस कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the purpose of '@_effects' with 'accessnone' for global functions?",
    "question_hi": "ग्लोबल फंक्शन्स के लिए 'accessnone' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Global function accesses no memory", "Accesses global variables", "Accesses heap", "Reads static memory"],
    "options_hi": ["ग्लोबल फंक्शन कोई मेमोरी नहीं एक्सेस करता", "ग्लोबल वेरिएबल्स एक्सेस करता है", "हीप एक्सेस करता है", "स्टेटिक मेमोरी पढ़ता है"],
    "answer_en": "Global function accesses no memory",
    "answer_hi": "ग्लोबल फंक्शन कोई मेमोरी नहीं एक्सेस करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which Swift feature allows 'let regex = #/\\d{1,3}(\\.\\d{1,3}){3}/#' IP address?",
    "question_hi": "IP एड्रेस के लिए कौन सा Swift फीचर 'let regex = #/\\d{1,3}(\\.\\d{1,3}){3}/#' की अनुमति देता है?",
    "options_en": ["IP address regex", "IPv4 pattern", "Internet protocol regex", "Network address pattern"],
    "options_hi": ["IP एड्रेस रेगेक्स", "IPv4 पैटर्न", "इंटरनेट प्रोटोकॉल रेगेक्स", "नेटवर्क एड्रेस पैटर्न"],
    "answer_en": "IP address regex",
    "answer_hi": "IP एड्रेस रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does '@_implements(Protocol, subscript, where T: RawRepresentable)' enable?",
    "question_hi": "'@_implements(Protocol, subscript, where T: RawRepresentable)' क्या सक्षम करता है?",
    "options_en": ["Conditional subscript with RawRepresentable", "Unconstrained subscript", "Generic subscript", "Raw value subscript"],
    "options_hi": ["RawRepresentable के साथ सशर्त सबस्क्रिप्ट", "अप्रतिबंधित सबस्क्रिप्ट", "सामान्य सबस्क्रिप्ट", "कच्चा मान सबस्क्रिप्ट"],
    "answer_en": "Conditional subscript with RawRepresentable",
    "answer_hi": "RawRepresentable के साथ सशर्त सबस्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which Swift operator allows 'value as! any ReversedCollection<[String]> & Collection' force?",
    "question_hi": "फोर्स के लिए कौन सा Swift ऑपरेटर 'value as! any ReversedCollection<[String]> & Collection' की अनुमति देता है?",
    "options_en": ["Force cast to reversed collection composition", "Conditional reversed collection", "Any reversed collection cast", "Reversed collection existential"],
    "options_hi": ["रिवर्स्ड कलेक्शन कंपोज़िशन के लिए फोर्स कास्ट", "सशर्त रिवर्स्ड कलेक्शन", "कोई रिवर्स्ड कलेक्शन कास्ट", "रिवर्स्ड कलेक्शन एक्जिस्टेंशियल"],
    "answer_en": "Force cast to reversed collection composition",
    "answer_hi": "रिवर्स्ड कलेक्शन कंपोज़िशन के लिए फोर्स कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the purpose of '@_effects' with 'readonly' for operators?",
    "question_hi": "ऑपरेटर्स के लिए 'readonly' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Operator only reads operands", "Reads and writes", "Write-only", "No operand access"],
    "options_hi": ["ऑपरेटर केवल ऑपरेंड्स पढ़ता है", "पढ़ता और लिखता है", "केवल लिखने योग्य", "कोई ऑपरेंड एक्सेस नहीं"],
    "answer_en": "Operator only reads operands",
    "answer_hi": "ऑपरेटर केवल ऑपरेंड्स पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which Swift feature allows 'let regex = #/[A-Z]{2}\\d{4}/#' license plate?",
    "question_hi": "लाइसेंस प्लेट के लिए कौन सा Swift फीचर 'let regex = #/[A-Z]{2}\\d{4}/#' की अनुमति देता है?",
    "options_en": ["License plate regex", "Vehicle registration pattern", "Plate number literal", "Registration format"],
    "options_hi": ["लाइसेंस प्लेट रेगेक्स", "वाहन पंजीकरण पैटर्न", "प्लेट नंबर लिटरल", "पंजीकरण प्रारूप"],
    "answer_en": "License plate regex",
    "answer_hi": "लाइसेंस प्लेट रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does '@_implements(Protocol, static property, where T: Sendable & Hashable)' enable?",
    "question_hi": "'@_implements(Protocol, static property, where T: Sendable & Hashable)' क्या सक्षम करता है?",
    "options_en": ["Conditional static property with multiple constraints", "Single constraint", "No constraints", "Constrained static property"],
    "options_hi": ["एकाधिक बाध्यकारी के साथ सशर्त स्थैतिक संपत्ति", "एकल बाध्यकारी", "कोई बाध्यकारी नहीं", "सीमित स्थैतिक संपत्ति"],
    "answer_en": "Conditional static property with multiple constraints",
    "answer_hi": "एकाधिक बाध्यकारी के साथ सशर्त स्थैतिक संपत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which Swift operator allows 'value as? any Slice<Array<Int>> & Collection' composition?",
    "question_hi": "कंपोज़िशन के लिए कौन सा Swift ऑपरेटर 'value as? any Slice<Array<Int>> & Collection' की अनुमति देता है?",
    "options_en": ["Conditional cast to slice composition", "Force slice cast", "Any slice cast", "Slice existential composition"],
    "options_hi": ["स्लाइस कंपोज़िशन के लिए सशर्त कास्ट", "फोर्स स्लाइस कास्ट", "कोई स्लाइस कास्ट", "स्लाइस एक्जिस्टेंशियल कंपोज़िशन"],
    "answer_en": "Conditional cast to slice composition",
    "answer_hi": "स्लाइस कंपोज़िशन के लिए सशर्त कास्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the purpose of '@_effects' with 'writenone' for class methods?",
    "question_hi": "क्लास मेथड्स के लिए 'writenone' के साथ '@_effects' का उद्देश्य क्या है?",
    "options_en": ["Class method writes no memory", "Writes to class", "Modifies class", "Manages class state"],
    "options_hi": ["क्लास मेथड कोई मेमोरी नहीं लिखती", "क्लास में लिखती है", "क्लास संशोधित करती है", "क्लास स्टेट प्रबंधित करती है"],
    "answer_en": "Class method writes no memory",
    "answer_hi": "क्लास मेथड कोई मेमोरी नहीं लिखती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which Swift feature allows 'let regex = #/\\d{5}(-\\d{4})?/#' ZIP code?",
    "question_hi": "ZIP कोड के लिए कौन सा Swift फीचर 'let regex = #/\\d{5}(-\\d{4})?/#' की अनुमति देता है?",
    "options_en": ["ZIP code regex", "Postal code pattern", "Mail code literal", "Postal format"],
    "options_hi": ["ZIP कोड रेगेक्स", "पोस्टल कोड पैटर्न", "मेल कोड लिटरल", "पोस्टल प्रारूप"],
    "answer_en": "ZIP code regex",
    "answer_hi": "ZIP कोड रेगेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does '@_implements(Protocol, method, where T: Codable & Equatable & Hashable)' enable?",
    "question_hi": "'@_implements(Protocol, method, where T: Codable & Equatable & Hashable)' क्या सक्षम करता है?",
    "options_en": ["Conditional implementation with three constraints", "Two constraints", "One constraint", "No constraints"],
    "options_hi": ["तीन बाध्यकारी के साथ सशर्त कार्यान्वयन", "दो बाध्यकारी", "एक बाध्यकारी", "कोई बाध्यकारी नहीं"],
    "answer_en": "Conditional implementation with three constraints",
    "answer_hi": "तीन बाध्यकारी के साथ सशर्त कार्यान्वयन",
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