 const questions = [
  {
    "num": 1,
    "question_en": "Which of these is a primary storage device?",
    "question_hi": "इनमें से कौन प्राथमिक संग्रहण उपकरण है?",
    "options_en": ["RAM", "Hard Disk", "Pen Drive", "CD-ROM"],
    "options_hi": ["RAM", "हार्ड डिस्क", "पेन ड्राइव", "CD-ROM"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "Primary storage includes RAM and ROM that CPU directly accesses.",
    "explanation_hi": "प्राथमिक संग्रहण में RAM और ROM शामिल हैं जिन्हें CPU सीधे एक्सेस करता है।"
  },
  {
    "num": 2,
    "question_en": "What is the function of an interpreter in programming?",
    "question_hi": "प्रोग्रामिंग में इंटरप्रेटर का कार्य क्या है?",
    "options_en": ["Executes code line by line", "Compiles entire program", "Checks syntax errors", "Optimizes code"],
    "options_hi": ["कोड को लाइन दर लाइन निष्पादित करता है", "पूरे प्रोग्राम को कंपाइल करता है", "सिंटैक्स त्रुटियाँ जाँचता है", "कोड ऑप्टिमाइज़ करता है"],
    "answer_en": "Executes code line by line",
    "answer_hi": "कोड को लाइन दर लाइन निष्पादित करता है",
    "explanation_en": "Interpreter translates and executes one statement at a time without creating executable file.",
    "explanation_hi": "इंटरप्रेटर एक समय में एक स्टेटमेंट का अनुवाद और निष्पादन करता है बिना एक्ज़ीक्यूटेबल फाइल बनाए।"
  },
  {
    "num": 3,
    "question_en": "Which network device operates at Physical layer of OSI model?",
    "question_hi": "कौन सा नेटवर्क डिवाइस OSI मॉडल की फिजिकल लेयर पर काम करता है?",
    "options_en": ["Hub", "Router", "Switch", "Bridge"],
    "options_hi": ["हब", "राउटर", "स्विच", "ब्रिज"],
    "answer_en": "Hub",
    "answer_hi": "हब",
    "explanation_en": "Hub operates at Physical layer and simply forwards data to all connected devices.",
    "explanation_hi": "हब फिजिकल लेयर पर काम करता है और डेटा को सभी कनेक्टेड डिवाइस पर भेजता है।"
  },
  {
    "num": 4,
    "question_en": "What is the full form of BIOS?",
    "question_hi": "BIOS का पूर्ण रूप क्या है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS initializes hardware during boot process before OS loads.",
    "explanation_hi": "BIOS ओएस लोड होने से पहले बूट प्रक्रिया के दौरान हार्डवेयर को इनिशियलाइज़ करता है।"
  },
  {
    "num": 5,
    "question_en": "Which programming language is used for Android app development?",
    "question_hi": "एंड्रॉयड ऐप डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["Java", "Python", "C++", "HTML"],
    "options_hi": ["जावा", "पाइथन", "C++", "HTML"],
    "answer_en": "Java",
    "answer_hi": "जावा",
    "explanation_en": "Java is primary language for native Android app development.",
    "explanation_hi": "जावा नेटिव एंड्रॉयड ऐप डेवलपमेंट के लिए प्राथमिक भाषा है।"
  },
  {
    "num": 6,
    "question_en": "What does 'HTTP' stand for?",
    "question_hi": "'HTTP' का क्या अर्थ है?",
    "options_en": ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
    "options_hi": ["हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल"],
    "answer_en": "Hyper Text Transfer Protocol",
    "answer_hi": "हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल",
    "explanation_en": "HTTP is foundation of data communication for World Wide Web.",
    "explanation_hi": "HTTP वर्ल्ड वाइड वेब के लिए डेटा संचार की नींव है।"
  },
  {
    "num": 7,
    "question_en": "Which of these is an optical storage device?",
    "question_hi": "इनमें से कौन ऑप्टिकल स्टोरेज डिवाइस है?",
    "options_en": ["DVD", "Hard Disk", "Pen Drive", "Memory Card"],
    "options_hi": ["DVD", "हार्ड डिस्क", "पेन ड्राइव", "मेमोरी कार्ड"],
    "answer_en": "DVD",
    "answer_hi": "DVD",
    "explanation_en": "DVD uses laser technology to read/write data (optical storage).",
    "explanation_hi": "DVD डेटा पढ़ने/लिखने के लिए लेजर तकनीक का उपयोग करता है (ऑप्टिकल स्टोरेज)।"
  },
  {
    "num": 8,
    "question_en": "What is a compiler?",
    "question_hi": "कंपाइलर क्या है?",
    "options_en": ["Converts high-level language to machine code", "Executes program line by line", "Checks spelling errors", "Creates user interface"],
    "options_hi": ["उच्च-स्तरीय भाषा को मशीन कोड में बदलता है", "प्रोग्राम को लाइन दर लाइन निष्पादित करता है", "वर्तनी त्रुटियाँ जाँचता है", "यूज़र इंटरफ़ेस बनाता है"],
    "answer_en": "Converts high-level language to machine code",
    "answer_hi": "उच्च-स्तरीय भाषा को मशीन कोड में बदलता है",
    "explanation_en": "Compiler translates entire source code to machine code before execution.",
    "explanation_hi": "कंपाइलर निष्पादन से पहले पूरे सोर्स कोड को मशीन कोड में अनुवाद करता है।"
  },
  {
    "num": 9,
    "question_en": "Which topology forms a closed loop?",
    "question_hi": "कौन सी टोपोलॉजी एक बंद लूप बनाती है?",
    "options_en": ["Ring", "Star", "Bus", "Mesh"],
    "options_hi": ["रिंग", "स्टार", "बस", "मेश"],
    "answer_en": "Ring",
    "answer_hi": "रिंग",
    "explanation_en": "Ring topology connects devices in circular fashion where each device connects to two neighbors.",
    "explanation_hi": "रिंग टोपोलॉजी उपकरणों को गोलाकार तरीके से जोड़ती है जहाँ प्रत्येक उपकरण दो पड़ोसियों से जुड़ा होता है।"
  },
  {
    "num": 10,
    "question_en": "What is the purpose of an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम का उद्देश्य क्या है?",
    "options_en": ["Manages computer resources", "Creates documents", "Browses internet", "Plays multimedia"],
    "options_hi": ["कंप्यूटर संसाधनों का प्रबंधन करता है", "दस्तावेज़ बनाता है", "इंटरनेट ब्राउज़ करता है", "मल्टीमीडिया चलाता है"],
    "answer_en": "Manages computer resources",
    "answer_hi": "कंप्यूटर संसाधनों का प्रबंधन करता है",
    "explanation_en": "OS manages hardware resources and provides services for application software.",
    "explanation_hi": "OS हार्डवेयर संसाधनों का प्रबंधन करता है और एप्लिकेशन सॉफ्टवेयर के लिए सेवाएँ प्रदान करता है।"
  },
  {
    "num": 11,
    "question_en": "Which device converts digital signals to analog?",
    "question_hi": "कौन सा उपकरण डिजिटल सिग्नल को एनालॉग में बदलता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem modulates digital to analog for transmission over telephone lines.",
    "explanation_hi": "मॉडेम टेलीफोन लाइनों पर ट्रांसमिशन के लिए डिजिटल को एनालॉग में मॉड्यूलेट करता है।"
  },
  {
    "num": 12,
    "question_en": "What does 'CPU' stand for?",
    "question_hi": "'CPU' का क्या अर्थ है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "explanation_en": "CPU is the primary component that executes instructions of a computer program.",
    "explanation_hi": "CPU प्राथमिक घटक है जो कंप्यूटर प्रोग्राम के निर्देशों को निष्पादित करता है।"
  },
  {
    "num": 13,
    "question_en": "Which is a secondary storage device?",
    "question_hi": "सेकेंडरी स्टोरेज डिवाइस कौन सा है?",
    "options_en": ["SSD", "RAM", "Cache", "Registers"],
    "options_hi": ["SSD", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "SSD",
    "answer_hi": "SSD",
    "explanation_en": "SSD (Solid State Drive) is non-volatile secondary storage.",
    "explanation_hi": "SSD (सॉलिड स्टेट ड्राइव) नॉन-वोलेटाइल सेकेंडरी स्टोरेज है।"
  },
  {
    "num": 14,
    "question_en": "What is cloud computing?",
    "question_hi": "क्लाउड कंप्यूटिंग क्या है?",
    "options_en": ["Delivery of computing services over internet", "Local storage on computer", "Using external hard disk", "Network within building"],
    "options_hi": ["इंटरनेट पर कंप्यूटिंग सेवाओं का वितरण", "कंप्यूटर पर स्थानीय संग्रहण", "बाहरी हार्ड डिस्क का उपयोग", "इमारत के भीतर नेटवर्क"],
    "answer_en": "Delivery of computing services over internet",
    "answer_hi": "इंटरनेट पर कंप्यूटिंग सेवाओं का वितरण",
    "explanation_en": "Cloud computing provides servers, storage, databases, networking over internet.",
    "explanation_hi": "क्लाउड कंप्यूटिंग इंटरनेट पर सर्वर, संग्रहण, डेटाबेस, नेटवर्किंग प्रदान करता है।"
  },
  {
    "num": 15,
    "question_en": "Which programming language is known for web development?",
    "question_hi": "वेब डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा को जाना जाता है?",
    "options_en": ["JavaScript", "C", "Fortran", "Pascal"],
    "options_hi": ["जावास्क्रिप्ट", "C", "फोरट्रान", "पास्कल"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "explanation_en": "JavaScript adds interactivity and dynamic content to web pages.",
    "explanation_hi": "जावास्क्रिप्ट वेब पेजों में इंटरैक्टिविटी और डायनामिक कंटेंट जोड़ती है।"
  },
  {
    "num": 16,
    "question_en": "What does 'URL' stand for?",
    "question_hi": "'URL' का क्या अर्थ है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Read Link", "Universal Read Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रीड लिंक", "यूनिवर्सल रीड लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL is address used to access resources on internet.",
    "explanation_hi": "URL इंटरनेट पर संसाधनों तक पहुँचने के लिए उपयोग किया जाने वाला पता है।"
  },
  {
    "num": 17,
    "question_en": "Which device connects multiple networks?",
    "question_hi": "कौन सा उपकरण कई नेटवर्कों को जोड़ता है?",
    "options_en": ["Router", "Hub", "Switch", "Repeater"],
    "options_hi": ["राउटर", "हब", "स्विच", "रिपीटर"],
    "answer_en": "Router",
    "answer_hi": "राउटर",
    "explanation_en": "Router connects different networks and forwards data packets between them.",
    "explanation_hi": "राउटर विभिन्न नेटवर्कों को जोड़ता है और उनके बीच डेटा पैकेट भेजता है।"
  },
  {
    "num": 18,
    "question_en": "What is the binary number system?",
    "question_hi": "बाइनरी नंबर सिस्टम क्या है?",
    "options_en": ["Base-2 number system", "Base-10 number system", "Base-8 number system", "Base-16 number system"],
    "options_hi": ["बेस-2 नंबर सिस्टम", "बेस-10 नंबर सिस्टम", "बेस-8 नंबर सिस्टम", "बेस-16 नंबर सिस्टम"],
    "answer_en": "Base-2 number system",
    "answer_hi": "बेस-2 नंबर सिस्टम",
    "explanation_en": "Binary uses only two digits: 0 and 1, fundamental to digital electronics.",
    "explanation_hi": "बाइनरी केवल दो अंकों का उपयोग करता है: 0 और 1, डिजिटल इलेक्ट्रॉनिक्स के लिए मौलिक।"
  },
  {
    "num": 19,
    "question_en": "Which is an example of system software?",
    "question_hi": "सिस्टम सॉफ्टवेयर का उदाहरण कौन सा है?",
    "options_en": ["Operating System", "MS Word", "Photoshop", "Chrome"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एमएस वर्ड", "फोटोशॉप", "क्रोम"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम",
    "explanation_en": "System software manages computer hardware and provides platform for applications.",
    "explanation_hi": "सिस्टम सॉफ्टवेयर कंप्यूटर हार्डवेयर का प्रबंधन करता है और एप्लिकेशन के लिए प्लेटफॉर्म प्रदान करता है।"
  },
  {
    "num": 20,
    "question_en": "What does 'HTML' stand for?",
    "question_hi": "'HTML' का क्या अर्थ है?",
    "options_en": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "High Transfer Machine Language"],
    "options_hi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक्स्ट मशीन लैंग्वेज", "हाइपर ट्रांसफर मार्कअप लैंग्वेज", "हाई ट्रांसफर मशीन लैंग्वेज"],
    "answer_en": "Hyper Text Markup Language",
    "answer_hi": "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
    "explanation_en": "HTML is standard markup language for creating web pages.",
    "explanation_hi": "HTML वेब पेज बनाने के लिए मानक मार्कअप भाषा है।"
  },
  {
    "num": 21,
    "question_en": "Which network topology is most reliable?",
    "question_hi": "कौन सी नेटवर्क टोपोलॉजी सबसे विश्वसनीय है?",
    "options_en": ["Mesh", "Star", "Bus", "Ring"],
    "options_hi": ["मेश", "स्टार", "बस", "रिंग"],
    "answer_en": "Mesh",
    "answer_hi": "मेश",
    "explanation_en": "Mesh topology has multiple connections between nodes, providing redundancy.",
    "explanation_hi": "मेश टोपोलॉजी में नोड्स के बीच कई कनेक्शन होते हैं, जो रिडंडेंसी प्रदान करते हैं।"
  },
  {
    "num": 22,
    "question_en": "What is the purpose of CTRL+S shortcut?",
    "question_hi": "CTRL+S शॉर्टकट का उद्देश्य क्या है?",
    "options_en": ["Save document", "Copy", "Paste", "Undo"],
    "options_hi": ["दस्तावेज़ सहेजें", "कॉपी", "पेस्ट", "अनडू"],
    "answer_en": "Save document",
    "answer_hi": "दस्तावेज़ सहेजें",
    "explanation_en": "CTRL+S saves the current document or file.",
    "explanation_hi": "CTRL+S वर्तमान दस्तावेज़ या फाइल को सहेजता है।"
  },
  {
    "num": 23,
    "question_en": "Which generation used vacuum tubes?",
    "question_hi": "किस पीढ़ी में वैक्यूम ट्यूब का उपयोग किया गया?",
    "options_en": ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    "options_hi": ["पहली पीढ़ी", "दूसरी पीढ़ी", "तीसरी पीढ़ी", "चौथी पीढ़ी"],
    "answer_en": "First Generation",
    "answer_hi": "पहली पीढ़ी",
    "explanation_en": "First generation computers (1940-1956) used vacuum tubes.",
    "explanation_hi": "पहली पीढ़ी के कंप्यूटर (1940-1956) वैक्यूम ट्यूब का उपयोग करते थे।"
  },
  {
    "num": 24,
    "question_en": "What is a variable in programming?",
    "question_hi": "प्रोग्रामिंग में वेरिएबल क्या है?",
    "options_en": ["Named storage location", "Type of loop", "Programming language", "Output device"],
    "options_hi": ["नामित संग्रहण स्थान", "लूप का प्रकार", "प्रोग्रामिंग भाषा", "आउटपुट डिवाइस"],
    "answer_en": "Named storage location",
    "answer_hi": "नामित संग्रहण स्थान",
    "explanation_en": "Variables store data values that can be changed during program execution.",
    "explanation_hi": "वेरिएबल डेटा मान संग्रहीत करते हैं जिन्हें प्रोग्राम निष्पादन के दौरान बदला जा सकता है।"
  },
  {
    "num": 25,
    "question_en": "Which is a pointing device?",
    "question_hi": "पॉइंटिंग डिवाइस कौन सा है?",
    "options_en": ["Touchpad", "Keyboard", "Printer", "Scanner"],
    "options_hi": ["टचपैड", "कीबोर्ड", "प्रिंटर", "स्कैनर"],
    "answer_en": "Touchpad",
    "answer_hi": "टचपैड",
    "explanation_en": "Touchpad controls cursor movement on laptops.",
    "explanation_hi": "टचपैड लैपटॉप पर कर्सर की गति को नियंत्रित करता है।"
  },
  {
    "num": 26,
    "question_en": "What does 'LAN' stand for?",
    "question_hi": "'LAN' का क्या अर्थ है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "explanation_en": "LAN covers small geographical area like home, school, or office building.",
    "explanation_hi": "LAN छोटे भौगोलिक क्षेत्र जैसे घर, स्कूल या कार्यालय भवन को कवर करता है।"
  },
  {
    "num": 27,
    "question_en": "Which is a high-level programming language?",
    "question_hi": "उच्च-स्तरीय प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["Python", "Machine Language", "Assembly Language", "Binary Code"],
    "options_hi": ["पाइथन", "मशीन भाषा", "असेम्बली भाषा", "बाइनरी कोड"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "High-level languages are closer to human language than machine language.",
    "explanation_hi": "उच्च-स्तरीय भाषाएँ मशीन भाषा की तुलना में मानव भाषा के करीब हैं।"
  },
  {
    "num": 28,
    "question_en": "What is the purpose of UPS?",
    "question_hi": "UPS का उद्देश्य क्या है?",
    "options_en": ["Provide backup power", "Increase internet speed", "Clean computer", "Print documents"],
    "options_hi": ["बैकअप बिजली प्रदान करना", "इंटरनेट गति बढ़ाना", "कंप्यूटर साफ करना", "दस्तावेज़ प्रिंट करना"],
    "answer_en": "Provide backup power",
    "answer_hi": "बैकअप बिजली प्रदान करना",
    "explanation_en": "UPS provides emergency power during electricity outages.",
    "explanation_hi": "UPS बिजली कटौती के दौरान आपातकालीन बिजली प्रदान करता है।"
  },
  {
    "num": 29,
    "question_en": "Which device connects computers in a network?",
    "question_hi": "कौन सा उपकरण नेटवर्क में कंप्यूटरों को जोड़ता है?",
    "options_en": ["Switch", "Modem", "Router", "Repeater"],
    "options_hi": ["स्विच", "मॉडेम", "राउटर", "रिपीटर"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "explanation_en": "Switch connects devices within same network and manages data flow.",
    "explanation_hi": "स्विच समान नेटवर्क के भीतर उपकरणों को जोड़ता है और डेटा प्रवाह का प्रबंधन करता है।"
  },
  {
    "num": 30,
    "question_en": "What is a loop in programming?",
    "question_hi": "प्रोग्रामिंग में लूप क्या है?",
    "options_en": ["Repeats code multiple times", "Stores data", "Displays output", "Takes input"],
    "options_hi": ["कोड को कई बार दोहराता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है", "इनपुट लेता है"],
    "answer_en": "Repeats code multiple times",
    "answer_hi": "कोड को कई बार दोहराता है",
    "explanation_en": "Loops execute code repeatedly until specified condition is met.",
    "explanation_hi": "लूप निर्दिष्ट शर्त पूरी होने तक कोड को बार-बार निष्पादित करते हैं।"
  },
  {
    "num": 31,
    "question_en": "Which is a storage measurement unit?",
    "question_hi": "स्टोरेज मापन इकाई कौन सी है?",
    "options_en": ["Terabyte", "Gigahertz", "Megapixel", "Millisecond"],
    "options_hi": ["टेराबाइट", "गीगाहर्ट्ज", "मेगापिक्सल", "मिलीसेकंड"],
    "answer_en": "Terabyte",
    "answer_hi": "टेराबाइट",
    "explanation_en": "Terabyte (TB) measures data storage capacity (1 TB = 1024 GB).",
    "explanation_hi": "टेराबाइट (TB) डेटा संग्रहण क्षमता को मापता है (1 TB = 1024 GB)।"
  },
  {
    "num": 32,
    "question_en": "What does 'ROM' stand for?",
    "question_hi": "'ROM' का क्या अर्थ है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Output Memory", "Random Output Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम आउटपुट मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "explanation_en": "ROM stores permanent data that cannot be modified.",
    "explanation_hi": "ROM स्थायी डेटा संग्रहीत करता है जिसे संशोधित नहीं किया जा सकता।"
  },
  {
    "num": 33,
    "question_en": "Which programming language is used for databases?",
    "question_hi": "डेटाबेस के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["SQL", "HTML", "CSS", "Python"],
    "options_hi": ["SQL", "HTML", "CSS", "पाइथन"],
    "answer_en": "SQL",
    "answer_hi": "SQL",
    "explanation_en": "SQL (Structured Query Language) manages and manipulates databases.",
    "explanation_hi": "SQL (स्ट्रक्चर्ड क्वेरी लैंग्वेज) डेटाबेस को प्रबंधित और हेरफेर करता है।"
  },
  {
    "num": 34,
    "question_en": "What is the internet?",
    "question_hi": "इंटरनेट क्या है?",
    "options_en": ["Global network of networks", "Local network", "Single computer", "Software program"],
    "options_hi": ["नेटवर्कों का वैश्विक नेटवर्क", "स्थानीय नेटवर्क", "एकल कंप्यूटर", "सॉफ्टवेयर प्रोग्राम"],
    "answer_en": "Global network of networks",
    "answer_hi": "नेटवर्कों का वैश्विक नेटवर्क",
    "explanation_en": "Internet is worldwide system of interconnected computer networks.",
    "explanation_hi": "इंटरनेट आपस में जुड़े कंप्यूटर नेटवर्क की विश्वव्यापी प्रणाली है।"
  },
  {
    "num": 35,
    "question_en": "Which is a volatile storage device?",
    "question_hi": "वोलेटाइल स्टोरेज डिवाइस कौन सा है?",
    "options_en": ["RAM", "Hard Disk", "SSD", "DVD"],
    "options_hi": ["RAM", "हार्ड डिस्क", "SSD", "DVD"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM loses data when power is turned off (volatile).",
    "explanation_hi": "RAM बिजली बंद होने पर डेटा खो देती है (वोलेटाइल)।"
  },
  {
    "num": 36,
    "question_en": "What does 'ISP' stand for?",
    "question_hi": "'ISP' का क्या अर्थ है?",
    "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
    "options_hi": ["इंटरनेट सेवा प्रदाता", "इंटरनेट सिस्टम प्रदाता", "अंतर्राष्ट्रीय सेवा प्रदाता", "अंतर्राष्ट्रीय सिस्टम प्रदाता"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सेवा प्रदाता",
    "explanation_en": "ISP provides access to internet for homes and businesses.",
    "explanation_hi": "ISP घरों और व्यवसायों के लिए इंटरनेट पहुंच प्रदान करता है।"
  },
  {
    "num": 37,
    "question_en": "Which is a programming language for artificial intelligence?",
    "question_hi": "आर्टिफिशियल इंटेलिजेंस के लिए प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["Python", "HTML", "CSS", "SQL"],
    "options_hi": ["पाइथन", "HTML", "CSS", "SQL"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "Python has extensive libraries for AI and machine learning.",
    "explanation_hi": "पाइथन में AI और मशीन लर्निंग के लिए व्यापक लाइब्रेरी हैं।"
  },
  {
    "num": 38,
    "question_en": "What is the function of a router?",
    "question_hi": "राउटर का कार्य क्या है?",
    "options_en": ["Connects different networks", "Connects devices in same network", "Amplifies signals", "Converts signals"],
    "options_hi": ["विभिन्न नेटवर्कों को जोड़ता है", "समान नेटवर्क में उपकरणों को जोड़ता है", "सिग्नल प्रवर्धित करता है", "सिग्नल बदलता है"],
    "answer_en": "Connects different networks",
    "answer_hi": "विभिन्न नेटवर्कों को जोड़ता है",
    "explanation_en": "Router forwards data between different networks using IP addresses.",
    "explanation_hi": "राउटर IP पतों का उपयोग करके विभिन्न नेटवर्कों के बीच डेटा भेजता है।"
  },
  {
    "num": 39,
    "question_en": "Which is an example of utility software?",
    "question_hi": "यूटिलिटी सॉफ्टवेयर का उदाहरण कौन सा है?",
    "options_en": ["Antivirus", "MS Word", "Photoshop", "Chrome"],
    "options_hi": ["एंटीवायरस", "एमएस वर्ड", "फोटोशॉप", "क्रोम"],
    "answer_en": "Antivirus",
    "answer_hi": "एंटीवायरस",
    "explanation_en": "Utility software performs maintenance tasks like virus protection.",
    "explanation_hi": "यूटिलिटी सॉफ्टवेयर वायरस सुरक्षा जैसे रखरखाव कार्य करता है।"
  },
  {
    "num": 40,
    "question_en": "What is the binary equivalent of decimal 10?",
    "question_hi": "दशमलव 10 का बाइनरी समतुल्य क्या है?",
    "options_en": ["1010", "1100", "1001", "1110"],
    "options_hi": ["1010", "1100", "1001", "1110"],
    "answer_en": "1010",
    "answer_hi": "1010",
    "explanation_en": "10 in decimal = 1010 in binary (8+2 = 10).",
    "explanation_hi": "दशमलव में 10 = बाइनरी में 1010 (8+2 = 10)।"
  },
  {
    "num": 41,
    "question_en": "Which topology has central node?",
    "question_hi": "किस टोपोलॉजी में केंद्रीय नोड होता है?",
    "options_en": ["Star", "Bus", "Ring", "Mesh"],
    "options_hi": ["स्टार", "बस", "रिंग", "मेश"],
    "answer_en": "Star",
    "answer_hi": "स्टार",
    "explanation_en": "Star topology has central hub/switch to which all devices connect.",
    "explanation_hi": "स्टार टोपोलॉजी में केंद्रीय हब/स्विच होता है जिससे सभी उपकरण जुड़े होते हैं।"
  },
  {
    "num": 42,
    "question_en": "What is a variable in programming?",
    "question_hi": "प्रोग्रामिंग में वेरिएबल क्या है?",
    "options_en": ["Container for storing data", "Type of loop", "Programming language", "Output statement"],
    "options_hi": ["डेटा संग्रहीत करने के लिए कंटेनर", "लूप का प्रकार", "प्रोग्रामिंग भाषा", "आउटपुट स्टेटमेंट"],
    "answer_en": "Container for storing data",
    "answer_hi": "डेटा संग्रहीत करने के लिए कंटेनर",
    "explanation_en": "Variables hold values that can be used and modified in program.",
    "explanation_hi": "वेरिएबल वे मान रखते हैं जिनका प्रोग्राम में उपयोग और संशोधन किया जा सकता है।"
  },
  {
    "num": 43,
    "question_en": "Which device stores data permanently?",
    "question_hi": "कौन सा उपकरण डेटा को स्थायी रूप से संग्रहीत करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Registers"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard disk stores data even when computer is powered off.",
    "explanation_hi": "हार्ड डिस्क कंप्यूटर बंद होने पर भी डेटा संग्रहीत करता है।"
  },
  {
    "num": 44,
    "question_en": "What does 'WAN' stand for?",
    "question_hi": "'WAN' का क्या अर्थ है?",
    "options_en": ["Wide Area Network", "World Area Network", "Web Access Network", "Wireless Area Network"],
    "options_hi": ["वाइड एरिया नेटवर्क", "वर्ल्ड एरिया नेटवर्क", "वेब एक्सेस नेटवर्क", "वायरलेस एरिया नेटवर्क"],
    "answer_en": "Wide Area Network",
    "answer_hi": "वाइड एरिया नेटवर्क",
    "explanation_en": "WAN spans large geographical area like country or continent.",
    "explanation_hi": "WAN देश या महाद्वीप जैसे बड़े भौगोलिक क्षेत्र में फैला होता है।"
  },
  {
    "num": 45,
    "question_en": "Which is a low-level programming language?",
    "question_hi": "निम्न-स्तरीय प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["Assembly Language", "Python", "Java", "C++"],
    "options_hi": ["असेम्बली भाषा", "पाइथन", "जावा", "C++"],
    "answer_en": "Assembly Language",
    "answer_hi": "असेम्बली भाषा",
    "explanation_en": "Low-level languages are closer to machine code.",
    "explanation_hi": "निम्न-स्तरीय भाषाएँ मशीन कोड के करीब होती हैं।"
  },
  {
    "num": 46,
    "question_en": "What is the purpose of CTRL+C shortcut?",
    "question_hi": "CTRL+C शॉर्टकट का उद्देश्य क्या है?",
    "options_en": ["Copy selected item", "Paste item", "Cut item", "Save document"],
    "options_hi": ["चयनित आइटम कॉपी करें", "आइटम पेस्ट करें", "आइटम कट करें", "दस्तावेज़ सहेजें"],
    "answer_en": "Copy selected item",
    "answer_hi": "चयनित आइटम कॉपी करें",
    "explanation_en": "CTRL+C copies selected text/item to clipboard.",
    "explanation_hi": "CTRL+C चयनित टेक्स्ट/आइटम को क्लिपबोर्ड पर कॉपी करता है।"
  },
  {
    "num": 47,
    "question_en": "Which device connects computer to internet?",
    "question_hi": "कौन सा उपकरण कंप्यूटर को इंटरनेट से जोड़ता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem connects computer to internet through telephone or cable lines.",
    "explanation_hi": "मॉडेम टेलीफोन या केबल लाइनों के माध्यम से कंप्यूटर को इंटरनेट से जोड़ता है।"
  },
  {
    "num": 48,
    "question_en": "What is an algorithm?",
    "question_hi": "एल्गोरिदम क्या है?",
    "options_en": ["Step-by-step problem-solving procedure", "Programming language", "Computer hardware", "Network device"],
    "options_hi": ["चरणबद्ध समस्या-समाधान प्रक्रिया", "प्रोग्रामिंग भाषा", "कंप्यूटर हार्डवेयर", "नेटवर्क डिवाइस"],
    "answer_en": "Step-by-step problem-solving procedure",
    "answer_hi": "चरणबद्ध समस्या-समाधान प्रक्रिया",
    "explanation_en": "Algorithm is finite sequence of instructions to accomplish specific task.",
    "explanation_hi": "एल्गोरिदम विशिष्ट कार्य को पूरा करने के लिए निर्देशों का सीमित क्रम है।"
  },
  {
    "num": 49,
    "question_en": "Which is a database management system?",
    "question_hi": "डेटाबेस मैनेजमेंट सिस्टम कौन सा है?",
    "options_en": ["MySQL", "Photoshop", "Word", "Excel"],
    "options_hi": ["MySQL", "फोटोशॉप", "वर्ड", "एक्सेल"],
    "answer_en": "MySQL",
    "answer_hi": "MySQL",
    "explanation_en": "MySQL is open-source relational database management system.",
    "explanation_hi": "MySQL ओपन-सोर्स रिलेशनल डेटाबेस मैनेजमेंट सिस्टम है।"
  },
  {
    "num": 50,
    "question_en": "What is debugging?",
    "question_hi": "डिबगिंग क्या है?",
    "options_en": ["Finding and fixing errors in code", "Writing new code", "Designing interface", "Testing hardware"],
    "options_hi": ["कोड में त्रुटियाँ ढूँढना और ठीक करना", "नया कोड लिखना", "इंटरफ़ेस डिजाइन करना", "हार्डवेयर टेस्ट करना"],
    "answer_en": "Finding and fixing errors in code",
    "answer_hi": "कोड में त्रुटियाँ ढूँढना और ठीक करना",
    "explanation_en": "Debugging identifies and removes bugs from software.",
    "explanation_hi": "डिबगिंग सॉफ्टवेयर से बग की पहचान करता है और उन्हें हटाता है।"
  }
]

let currentQuestion = 0; 
let language = "hindi";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};

