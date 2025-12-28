const questions = [
  {
    "num": 1,
    "question_en": "What is the primary function of an Operating System?",
    "question_hi": "ऑपरेटिंग सिस्टम का प्राथमिक कार्य क्या है?",
    "options_en": ["Manages hardware and software resources", "Creates documents", "Browses internet", "Protects from viruses"],
    "options_hi": ["हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन", "दस्तावेज़ बनाता है", "इंटरनेट ब्राउज़ करता है", "वायरस से सुरक्षा करता है"],
    "answer_en": "Manages hardware and software resources",
    "answer_hi": "हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन",
    "explanation_en": "OS acts as an interface between user and computer hardware.",
    "explanation_hi": "OS उपयोगकर्ता और कंप्यूटर हार्डवेयर के बीच इंटरफ़ेस के रूप में कार्य करता है।"
  },
  {
    "num": 2,
    "question_en": "Which of these is an output device?",
    "question_hi": "इनमें से कौन आउटपुट डिवाइस है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर",
    "explanation_en": "Monitor displays information from computer (output).",
    "explanation_hi": "मॉनिटर कंप्यूटर से जानकारी प्रदर्शित करता है (आउटपुट)।"
  },
  {
    "num": 3,
    "question_en": "What is the binary equivalent of decimal number 10?",
    "question_hi": "दशमलव संख्या 10 का बाइनरी समतुल्य क्या है?",
    "options_en": ["1010", "1100", "1001", "1110"],
    "options_hi": ["1010", "1100", "1001", "1110"],
    "answer_en": "1010",
    "answer_hi": "1010",
    "explanation_en": "10 in decimal = 1010 in binary (8+2).",
    "explanation_hi": "दशमलव में 10 = बाइनरी में 1010 (8+2)।"
  },
  {
    "num": 4,
    "question_en": "Which memory is volatile?",
    "question_hi": "कौन सी मेमोरी वोलेटाइल होती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "CD-ROM"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "CD-ROM"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM loses data when power is off (volatile).",
    "explanation_hi": "RAM बिजली बंद होने पर डेटा खो देती है (वोलेटाइल)।"
  },
  {
    "num": 5,
    "question_en": "What does CPU stand for?",
    "question_hi": "CPU का क्या अर्थ है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "explanation_en": "CPU is the brain of computer that processes instructions.",
    "explanation_hi": "CPU कंप्यूटर का दिमाग है जो निर्देशों को प्रोसेस करता है।"
  },
  {
    "num": 6,
    "question_en": "Which of these is system software?",
    "question_hi": "इनमें से कौन सिस्टम सॉफ्टवेयर है?",
    "options_en": ["Windows", "MS Word", "Photoshop", "Chrome"],
    "options_hi": ["विंडोज", "एमएस वर्ड", "फोटोशॉप", "क्रोम"],
    "answer_en": "Windows",
    "answer_hi": "विंडोज",
    "explanation_en": "Windows is an operating system (system software).",
    "explanation_hi": "विंडोज एक ऑपरेटिंग सिस्टम है (सिस्टम सॉफ्टवेयर)।"
  },
  {
    "num": 7,
    "question_en": "What is the smallest unit of data in computers?",
    "question_hi": "कंप्यूटर में डेटा की सबसे छोटी इकाई क्या है?",
    "options_en": ["Bit", "Byte", "Kilobyte", "Megabyte"],
    "options_hi": ["बिट", "बाइट", "किलोबाइट", "मेगाबाइट"],
    "answer_en": "Bit",
    "answer_hi": "बिट",
    "explanation_en": "Bit (Binary Digit) is 0 or 1, smallest data unit.",
    "explanation_hi": "बिट (बाइनरी डिजिट) 0 या 1 होता है, डेटा की सबसे छोटी इकाई।"
  },
  {
    "num": 8,
    "question_en": "Which device connects computer to telephone line for internet?",
    "question_hi": "कौन सा उपकरण कंप्यूटर को इंटरनेट के लिए टेलीफोन लाइन से जोड़ता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem converts digital signals to analog for telephone lines.",
    "explanation_hi": "मॉडेम टेलीफोन लाइनों के लिए डिजिटल सिग्नल को एनालॉग में बदलता है।"
  },
  {
    "num": 9,
    "question_en": "Which programming language is known for web development?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा वेब डेवलपमेंट के लिए जानी जाती है?",
    "options_en": ["JavaScript", "C++", "Java", "Python"],
    "options_hi": ["जावास्क्रिप्ट", "C++", "जावा", "पाइथन"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "explanation_en": "JavaScript is primarily used for client-side web development.",
    "explanation_hi": "जावास्क्रिप्ट मुख्य रूप से क्लाइंट1साइड वेब डेवलपमेंट के लिए उपयोग की जाती है।"
  },
  {
    "num": 10,
    "question_en": "What is the full form of USB?",
    "question_hi": "USB का पूर्ण रूप क्या है?",
    "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
    "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
    "answer_en": "Universal Serial Bus",
    "answer_hi": "यूनिवर्सल सीरियल बस",
    "explanation_en": "USB is a standard for connecting peripherals to computers.",
    "explanation_hi": "USB कंप्यूटर से परिधीय उपकरणों को जोड़ने के लिए एक मानक है।"
  },
  {
    "num": 11,
    "question_en": "Which of these is a storage device?",
    "question_hi": "इनमें से कौन स्टोरेज डिवाइस है?",
    "options_en": ["Pen Drive", "Printer", "Monitor", "Keyboard"],
    "options_hi": ["पेन ड्राइव", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Pen Drive",
    "answer_hi": "पेन ड्राइव",
    "explanation_en": "Pen Drive (USB flash drive) stores data permanently.",
    "explanation_hi": "पेन ड्राइव (USB फ्लैश ड्राइव) डेटा को स्थायी रूप से संग्रहीत करता है।"
  },
  {
    "num": 12,
    "question_en": "What is the purpose of ALU in CPU?",
    "question_hi": "CPU में ALU का उद्देश्य क्या है?",
    "options_en": ["Performs arithmetic and logical operations", "Stores data", "Controls input/output", "Displays output"],
    "options_hi": ["अंकगणित और तार्किक संचालन करता है", "डेटा संग्रहीत करता है", "इनपुट/आउटपुट नियंत्रित करता है", "आउटपुट प्रदर्शित करता है"],
    "answer_en": "Performs arithmetic and logical operations",
    "answer_hi": "अंकगणित और तार्किक संचालन करता है",
    "explanation_en": "ALU (Arithmetic Logic Unit) handles calculations and comparisons.",
    "explanation_hi": "ALU (अंकगणित तर्क इकाई) गणना और तुलना संभालता है।"
  },
  {
    "num": 13,
    "question_en": "Which generation used Integrated Circuits (ICs)?",
    "question_hi": "किस पीढ़ी में इंटीग्रेटेड सर्किट (ICs) का उपयोग किया गया?",
    "options_en": ["Third Generation", "First Generation", "Second Generation", "Fourth Generation"],
    "options_hi": ["तीसरी पीढ़ी", "पहली पीढ़ी", "दूसरी पीढ़ी", "चौथी पीढ़ी"],
    "answer_en": "Third Generation",
    "answer_hi": "तीसरी पीढ़ी",
    "explanation_en": "Third generation computers (1965-1971) used ICs.",
    "explanation_hi": "तीसरी पीढ़ी के कंप्यूटरों (1965-1971) में ICs का उपयोग किया गया।"
  },
  {
    "num": 14,
    "question_en": "What does BIOS stand for?",
    "question_hi": "BIOS का क्या अर्थ है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS initializes hardware during computer startup.",
    "explanation_hi": "BIOS कंप्यूटर स्टार्टअप के दौरान हार्डवेयर को प्रारंभ करता है।"
  },
  {
    "num": 15,
    "question_en": "Which of these is a high-level language?",
    "question_hi": "इनमें से कौन एक उच्च1स्तरीय भाषा है?",
    "options_en": ["Python", "Machine Language", "Assembly Language", "Binary Code"],
    "options_hi": ["पाइथन", "मशीन भाषा", "असेम्बली भाषा", "बाइनरी कोड"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "High-level languages are closer to human language than machine code.",
    "explanation_hi": "उच्च1स्तरीय भाषाएँ मशीन कोड की तुलना में मानव भाषा के करीब हैं।"
  },
  {
    "num": 16,
    "question_en": "What is the function of a compiler?",
    "question_hi": "कंपाइलर का कार्य क्या है?",
    "options_en": ["Converts high-level language to machine language", "Executes program line by line", "Checks spelling errors", "Creates documents"],
    "options_hi": ["उच्च1स्तरीय भाषा को मशीन भाषा में बदलता है", "प्रोग्राम को लाइन दर लाइन निष्पादित करता है", "वर्तनी त्रुटियाँ जाँचता है", "दस्तावेज़ बनाता है"],
    "answer_en": "Converts high-level language to machine language",
    "answer_hi": "उच्च1स्तरीय भाषा को मशीन भाषा में बदलता है",
    "explanation_en": "Compiler translates entire program at once before execution.",
    "explanation_hi": "कंपाइलर निष्पादन से पहले पूरे प्रोग्राम का अनुवाद करता है।"
  },
  {
    "num": 17,
    "question_en": "Which topology uses a central device to connect all nodes?",
    "question_hi": "कौन सा टोपोलॉजी सभी नोड्स को जोड़ने के लिए एक केंद्रीय उपकरण का उपयोग करता है?",
    "options_en": ["Star", "Bus", "Ring", "Mesh"],
    "options_hi": ["स्टार", "बस", "रिंग", "मेश"],
    "answer_en": "Star",
    "answer_hi": "स्टार",
    "explanation_en": "In star topology, all devices connect to a central hub/switch.",
    "explanation_hi": "स्टार टोपोलॉजी में, सभी उपकरण एक केंद्रीय हब/स्विच से जुड़े होते हैं।"
  },
  {
    "num": 18,
    "question_en": "What does 'GUI' stand for?",
    "question_hi": "'GUI' का क्या अर्थ है?",
    "options_en": ["Graphical User Interface", "General User Interface", "Graphical Unified Interface", "General Unified Interface"],
    "options_hi": ["ग्राफिकल यूज़र इंटरफ़ेस", "जनरल यूज़र इंटरफ़ेस", "ग्राफिकल यूनिफ़ाइड इंटरफ़ेस", "जनरल यूनिफ़ाइड इंटरफ़ेस"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूज़र इंटरफ़ेस",
    "explanation_en": "GUI uses visual elements like icons and windows for interaction.",
    "explanation_hi": "GUI इंटरैक्शन के लिए आइकन और विंडोज जैसे दृश्य तत्वों का उपयोग करता है।"
  },
  {
    "num": 19,
    "question_en": "Which of these is an example of application software?",
    "question_hi": "इनमें से कौन एप्लिकेशन सॉफ्टवेयर का उदाहरण है?",
    "options_en": ["MS Excel", "Linux", "Windows", "BIOS"],
    "options_hi": ["एमएस एक्सेल", "लिनक्स", "विंडोज", "BIOS"],
    "answer_en": "MS Excel",
    "answer_hi": "एमएस एक्सेल",
    "explanation_en": "MS Excel is application software for specific tasks.",
    "explanation_hi": "एमएस एक्सेल विशिष्ट कार्यों के लिए एप्लिकेशन सॉफ्टवेयर है।"
  },
  {
    "num": 20,
    "question_en": "What is the purpose of an algorithm?",
    "question_hi": "एल्गोरिदम का उद्देश्य क्या है?",
    "options_en": ["Step-by-step solution to a problem", "Hardware component", "Programming language", "Storage device"],
    "options_hi": ["किसी समस्या का चरणबद्ध समाधान", "हार्डवेयर घटक", "प्रोग्रामिंग भाषा", "स्टोरेज डिवाइस"],
    "answer_en": "Step-by-step solution to a problem",
    "answer_hi": "किसी समस्या का चरणबद्ध समाधान",
    "explanation_en": "Algorithm is a sequence of instructions to solve a problem.",
    "explanation_hi": "एल्गोरिदम किसी समस्या को हल करने के लिए निर्देशों का क्रम है।"
  },
  {
    "num": 21,
    "question_en": "Which device converts digital to analog signals?",
    "question_hi": "कौन सा उपकरण डिजिटल को एनालॉग सिग्नल में बदलता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem modulates digital to analog and demodulates analog to digital.",
    "explanation_hi": "मॉडेम डिजिटल को एनालॉग में मॉड्यूलेट करता है और एनालॉग को डिजिटल में डीमॉड्यूलेट करता है।"
  },
  {
    "num": 22,
    "question_en": "What is cloud computing?",
    "question_hi": "क्लाउड कंप्यूटिंग क्या है?",
    "options_en": ["Storing and accessing data over internet", "Local storage on computer", "Using pen drives", "CD-ROM storage"],
    "options_hi": ["इंटरनेट पर डेटा संग्रहीत करना और एक्सेस करना", "कंप्यूटर पर स्थानीय संग्रहण", "पेन ड्राइव का उपयोग", "CD-ROM संग्रहण"],
    "answer_en": "Storing and accessing data over internet",
    "answer_hi": "इंटरनेट पर डेटा संग्रहीत करना और एक्सेस करना",
    "explanation_en": "Cloud computing delivers computing services over the internet.",
    "explanation_hi": "क्लाउड कंप्यूटिंग इंटरनेट पर कंप्यूटिंग सेवाएँ प्रदान करती है।"
  },
  {
    "num": 23,
    "question_en": "Which memory is directly accessed by CPU?",
    "question_hi": "कौन सी मेमोरी CPU द्वारा सीधे एक्सेस की जाती है?",
    "options_en": ["Cache Memory", "Hard Disk", "DVD", "Pen Drive"],
    "options_hi": ["कैश मेमोरी", "हार्ड डिस्क", "DVD", "पेन ड्राइव"],
    "answer_en": "Cache Memory",
    "answer_hi": "कैश मेमोरी",
    "explanation_en": "Cache is fastest memory located close to CPU for quick access.",
    "explanation_hi": "कैश तेजी से एक्सेस के लिए CPU के करीब स्थित सबसे तेज मेमोरी है।"
  },
  {
    "num": 24,
    "question_en": "What is phishing?",
    "question_hi": "फ़िशिंग क्या है?",
    "options_en": ["Fraudulent attempt to obtain sensitive information", "Computer virus", "Hardware device", "Programming error"],
    "options_hi": ["संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास", "कंप्यूटर वायरस", "हार्डवेयर उपकरण", "प्रोग्रामिंग त्रुटि"],
    "answer_en": "Fraudulent attempt to obtain sensitive information",
    "answer_hi": "संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास",
    "explanation_en": "Phishing uses fake emails/websites to steal personal information.",
    "explanation_hi": "फ़िशिंग व्यक्तिगत जानकारी चुराने के लिए नकली ईमेल/वेबसाइटों का उपयोग करती है।"
  },
  {
    "num": 25,
    "question_en": "Which is the fastest type of internet connection?",
    "question_hi": "किस प्रकार का इंटरनेट कनेक्शन सबसे तेज़ है?",
    "options_en": ["Fiber Optic", "Dial-up", "DSL", "ISDN"],
    "options_hi": ["फाइबर ऑप्टिक", "डायल1अप", "DSL", "ISDN"],
    "answer_en": "Fiber Optic",
    "answer_hi": "फाइबर ऑप्टिक",
    "explanation_en": "Fiber optic uses light signals for very high-speed data transmission.",
    "explanation_hi": "फाइबर ऑप्टिक बहुत उच्च गति डेटा ट्रांसमिशन के लिए प्रकाश संकेतों का उपयोग करता है।"
  },
  {
    "num": 26,
    "question_en": "What does 'ROM' stand for?",
    "question_hi": "'ROM' का क्या अर्थ है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Output Memory", "Random Output Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम आउटपुट मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "explanation_en": "ROM stores permanent data that can only be read, not modified.",
    "explanation_hi": "ROM स्थायी डेटा संग्रहीत करता है जिसे केवल पढ़ा जा सकता है, संशोधित नहीं किया जा सकता।"
  },
  {
    "num": 27,
    "question_en": "Which programming construct repeats a block of code?",
    "question_hi": "कौन सा प्रोग्रामिंग कंस्ट्रक्ट कोड के ब्लॉक को दोहराता है?",
    "options_en": ["Loop", "Variable", "Function", "Array"],
    "options_hi": ["लूप", "वेरिएबल", "फ़ंक्शन", "एरे"],
    "answer_en": "Loop",
    "answer_hi": "लूप",
    "explanation_en": "Loops (for, while) repeat code execution until condition met.",
    "explanation_hi": "लूप (for, while) शर्त पूरी होने तक कोड निष्पादन को दोहराते हैं।"
  },
  {
    "num": 28,
    "question_en": "What is the function of UPS?",
    "question_hi": "UPS का कार्य क्या है?",
    "options_en": ["Provides backup power during electricity failure", "Increases internet speed", "Cleans computer", "Prints documents"],
    "options_hi": ["बिजली विफलता के दौरान बैकअप पावर प्रदान करता है", "इंटरनेट की गति बढ़ाता है", "कंप्यूटर साफ करता है", "दस्तावेज़ प्रिंट करता है"],
    "answer_en": "Provides backup power during electricity failure",
    "answer_hi": "बिजली विफलता के दौरान बैकअप पावर प्रदान करता है",
    "explanation_en": "UPS allows safe shutdown during power outages.",
    "explanation_hi": "UPS बिजली कटौती के दौरान सुरक्षित शटडाउन की अनुमति देता है।"
  },
  {
    "num": 29,
    "question_en": "Which network device connects multiple networks?",
    "question_hi": "कौन सा नेटवर्क डिवाइस कई नेटवर्कों को जोड़ता है?",
    "options_en": ["Router", "Hub", "Switch", "Repeater"],
    "options_hi": ["राउटर", "हब", "स्विच", "रिपीटर"],
    "answer_en": "Router",
    "answer_hi": "राउटर",
    "explanation_en": "Router connects different networks and routes data packets.",
    "explanation_hi": "राउटर विभिन्न नेटवर्कों को जोड़ता है और डेटा पैकेट रूट करता है।"
  },
  {
    "num": 30,
    "question_en": "What is a variable in programming?",
    "question_hi": "प्रोग्रामिंग में वेरिएबल क्या है?",
    "options_en": ["Container for storing data", "Type of loop", "Programming language", "Output device"],
    "options_hi": ["डेटा संग्रहीत करने के लिए कंटेनर", "लूप का प्रकार", "प्रोग्रामिंग भाषा", "आउटपुट डिवाइस"],
    "answer_en": "Container for storing data",
    "answer_hi": "डेटा संग्रहीत करने के लिए कंटेनर",
    "explanation_en": "Variables hold values that can change during program execution.",
    "explanation_hi": "वेरिएबल वे मान रखते हैं जो प्रोग्राम निष्पादन के दौरान बदल सकते हैं।"
  },
  {
    "num": 31,
    "question_en": "Which is a pointing device?",
    "question_hi": "कौन सा पॉइंटिंग डिवाइस है?",
    "options_en": ["Mouse", "Keyboard", "Printer", "Scanner"],
    "options_hi": ["माउस", "कीबोर्ड", "प्रिंटर", "स्कैनर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस",
    "explanation_en": "Mouse controls cursor movement on screen.",
    "explanation_hi": "माउस स्क्रीन पर कर्सर की गति को नियंत्रित करता है।"
  },
  {
    "num": 32,
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
    "num": 33,
    "question_en": "Which generation used vacuum tubes?",
    "question_hi": "किस पीढ़ी में वैक्यूम ट्यूब का उपयोग किया गया?",
    "options_en": ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    "options_hi": ["पहली पीढ़ी", "दूसरी पीढ़ी", "तीसरी पीढ़ी", "चौथी पीढ़ी"],
    "answer_en": "First Generation",
    "answer_hi": "पहली पीढ़ी",
    "explanation_en": "First generation computers (1946-1959) used vacuum tubes.",
    "explanation_hi": "पहली पीढ़ी के कंप्यूटरों (1946-1959) में वैक्यूम ट्यूब का उपयोग किया गया।"
  },
  {
    "num": 34,
    "question_en": "What is a flowchart?",
    "question_hi": "फ्लोचार्ट क्या है?",
    "options_en": ["Visual representation of algorithm", "Hardware diagram", "Circuit design", "Network layout"],
    "options_hi": ["एल्गोरिदम का दृश्य निरूपण", "हार्डवेयर आरेख", "सर्किट डिजाइन", "नेटवर्क लेआउट"],
    "answer_en": "Visual representation of algorithm",
    "answer_hi": "एल्गोरिदम का दृश्य निरूपण",
    "explanation_en": "Flowchart uses symbols to show steps of a process/algorithm.",
    "explanation_hi": "फ्लोचार्ट किसी प्रक्रिया/एल्गोरिदम के चरणों को दिखाने के लिए प्रतीकों का उपयोग करता है।"
  },
  {
    "num": 35,
    "question_en": "Which is a secondary storage device?",
    "question_hi": "कौन सा सेकेंडरी स्टोरेज डिवाइस है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Registers"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard disk stores data permanently (non-volatile secondary storage).",
    "explanation_hi": "हार्ड डिस्क डेटा को स्थायी रूप से संग्रहीत करती है (गैर1वाष्पशील द्वितीयक संग्रहण)।"
  },
  {
    "num": 36,
    "question_en": "What is the internet backbone?",
    "question_hi": "इंटरनेट बैकबोन क्या है?",
    "options_en": ["Main high-speed data routes", "Personal computer", "WiFi router", "Telephone line"],
    "options_hi": ["मुख्य उच्च गति डेटा मार्ग", "पर्सनल कंप्यूटर", "वाईफाई राउटर", "टेलीफोन लाइन"],
    "answer_en": "Main high-speed data routes",
    "answer_hi": "मुख्य उच्च गति डेटा मार्ग",
    "explanation_en": "Backbone consists of major internet connection routes between countries.",
    "explanation_hi": "बैकबोन में देशों के बीच प्रमुख इंटरनेट कनेक्शन मार्ग शामिल होते हैं।"
  },
 {
    "num": 37,
    "question_en": "Which programming language is used for AI?",
    "question_hi": "AI के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["Python", "HTML", "CSS", "SQL"],
    "options_hi": ["पाइथन", "HTML", "CSS", "SQL"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "Python is widely used in AI and machine learning due to its libraries and simplicity.",
    "explanation_hi": "पाइथन का AI और मशीन लर्निंग में व्यापक रूप से उपयोग किया जाता है क्योंकि इसकी लाइब्रेरी और सरलता होती है।"
  },
  {
    "num": 38,
    "question_en": "What does SQL stand for?",
    "question_hi": "SQL का क्या अर्थ है?",
    "options_en": ["Structured Query Language", "Simple Query Language", "System Query Language", "Structured Question Language"],
    "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज"],
    "answer_en": "Structured Query Language",
    "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
    "explanation_en": "SQL is used to manage and manipulate relational databases.",
    "explanation_hi": "SQL का उपयोग रिलेशनल डेटाबेस को प्रबंधित और हेरफेर करने के लिए किया जाता है।"
  },
  {
    "num": 39,
    "question_en": "Which device amplifies network signals?",
    "question_hi": "कौन सा उपकरण नेटवर्क सिग्नल को प्रवर्धित करता है?",
    "options_en": ["Repeater", "Router", "Switch", "Hub"],
    "options_hi": ["रिपीटर", "राउटर", "स्विच", "हब"],
    "answer_en": "Repeater",
    "answer_hi": "रिपीटर",
    "explanation_en": "Repeater regenerates network signals to extend transmission distance.",
    "explanation_hi": "रिपीटर ट्रांसमिशन दूरी बढ़ाने के लिए नेटवर्क सिग्नल को पुनर्जीवित करता है।"
  },
  {
    "num": 40,
    "question_en": "What is a software bug?",
    "question_hi": "सॉफ्टवेयर बग क्या है?",
    "options_en": ["Error or flaw in software", "Computer virus", "Hardware failure", "Network problem"],
    "options_hi": ["सॉफ्टवेयर में त्रुटि या दोष", "कंप्यूटर वायरस", "हार्डवेयर विफलता", "नेटवर्क समस्या"],
    "answer_en": "Error or flaw in software",
    "answer_hi": "सॉफ्टवेयर में त्रुटि या दोष",
    "explanation_en": "Bug causes software to produce incorrect or unexpected results.",
    "explanation_hi": "बग सॉफ्टवेयर को गलत या अप्रत्याशित परिणाम उत्पन्न करने का कारण बनता है।"
  },
  {
    "num": 41,
    "question_en": "Which is an example of open-source OS?",
    "question_hi": "ओपन-सोर्स OS का उदाहरण कौन सा है?",
    "options_en": ["Linux", "Windows", "macOS", "iOS"],
    "options_hi": ["लिनक्स", "विंडोज", "macOS", "iOS"],
    "answer_en": "Linux",
    "answer_hi": "लिनक्स",
    "explanation_en": "Linux is open-source, allowing users to modify and distribute its source code.",
    "explanation_hi": "लिनक्स ओपन-सोर्स है, जो उपयोगकर्ताओं को इसके स्रोत कोड को संशोधित और वितरित करने की अनुमति देता है।"
  },
  {
    "num": 42,
    "question_en": "What does 'WiFi' stand for?",
    "question_hi": "'WiFi' का क्या अर्थ है?",
    "options_en": ["Wireless Fidelity", "Wired Fidelity", "Wireless Frequency", "Wired Frequency"],
    "options_hi": ["वायरलेस फिडेलिटी", "वायर्ड फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फ्रीक्वेंसी"],
    "answer_en": "Wireless Fidelity",
    "answer_hi": "वायरलेस फिडेलिटी",
    "explanation_en": "WiFi allows wireless internet access using radio waves.",
    "explanation_hi": "WiFi रेडियो तरंगों का उपयोग करके वायरलेस इंटरनेट पहुंच की अनुमति देता है।"
  },
  {
    "num": 43,
    "question_en": "Which is used for 3D modeling?",
    "question_hi": "3D मॉडलिंग के लिए किसका उपयोग किया जाता है?",
    "options_en": ["Blender", "MS Paint", "Notepad", "Calculator"],
    "options_hi": ["ब्लेंडर", "एमएस पेंट", "नोटपैड", "कैलकुलेटर"],
    "answer_en": "Blender",
    "answer_hi": "ब्लेंडर",
    "explanation_en": "Blender is free open-source 3D computer graphics software.",
    "explanation_hi": "ब्लेंडर मुफ्त ओपन-सोर्स 3D कंप्यूटर ग्राफिक्स सॉफ्टवेयर है।"
  },
  {
    "num": 44,
    "question_en": "What is a motherboard?",
    "question_hi": "मदरबोर्ड क्या है?",
    "options_en": ["Main circuit board of computer", "External storage", "Display device", "Input device"],
    "options_hi": ["कंप्यूटर का मुख्य सर्किट बोर्ड", "बाहरी संग्रहण", "डिस्प्ले डिवाइस", "इनपुट डिवाइस"],
    "answer_en": "Main circuit board of computer",
    "answer_hi": "कंप्यूटर का मुख्य सर्किट बोर्ड",
    "explanation_en": "Motherboard connects all computer components (CPU, RAM, etc.).",
    "explanation_hi": "मदरबोर्ड सभी कंप्यूटर घटकों (CPU, RAM, आदि) को जोड़ता है।"
  },
  {
    "num": 45,
    "question_en": "Which is a social engineering attack?",
    "question_hi": "सोशल इंजीनियरिंग हमला कौन सा है?",
    "options_en": ["Phishing", "Virus", "Hardware failure", "Software bug"],
    "options_hi": ["फ़िशिंग", "वायरस", "हार्डवेयर विफलता", "सॉफ्टवेयर बग"],
    "answer_en": "Phishing",
    "answer_hi": "फ़िशिंग",
    "explanation_en": "Social engineering manipulates people to reveal confidential information.",
    "explanation_hi": "सोशल इंजीनियरिंग लोगों को गोपनीय जानकारी प्रकट करने के लिए हेरफेर करती है।"
  },
  {
    "num": 46,
    "question_en": "What is the function of CTRL+V shortcut?",
    "question_hi": "CTRL+V शॉर्टकट का कार्य क्या है?",
    "options_en": ["Paste", "Copy", "Cut", "Undo"],
    "options_hi": ["पेस्ट", "कॉपी", "कट", "अनडू"],
    "answer_en": "Paste",
    "answer_hi": "पेस्ट",
    "explanation_en": "CTRL+V pastes copied or cut content from clipboard.",
    "explanation_hi": "CTRL+V क्लिपबोर्ड से कॉपी या कट किए गए कॉन्टेंट को पेस्ट करता है।"
  },
  {
    "num": 47,
    "question_en": "Which is a database software?",
    "question_hi": "डेटाबेस सॉफ्टवेयर कौन सा है?",
    "options_en": ["MySQL", "Photoshop", "Word", "Excel"],
    "options_hi": ["MySQL", "फोटोशॉप", "वर्ड", "एक्सेल"],
    "answer_en": "MySQL",
    "answer_hi": "MySQL",
    "explanation_en": "MySQL is a popular open-source relational database management system.",
    "explanation_hi": "MySQL एक लोकप्रिय ओपन-सोर्स रिलेशनल डेटाबेस मैनेजमेंट सिस्टम है।"
  },
  {
    "num": 48,
    "question_en": "What is binary code?",
    "question_hi": "बाइनरी कोड क्या है?",
    "options_en": ["Code using 0s and 1s", "Programming language", "English language code", "Decimal code"],
    "options_hi": ["0 और 1 का उपयोग करने वाला कोड", "प्रोग्रामिंग भाषा", "अंग्रेजी भाषा कोड", "दशमलव कोड"],
    "answer_en": "Code using 0s and 1s",
    "answer_hi": "0 और 1 का उपयोग करने वाला कोड",
    "explanation_en": "Binary is the fundamental language of computers using two digits.",
    "explanation_hi": "बाइनरी दो अंकों का उपयोग करके कंप्यूटर की मूलभूत भाषा है।"
  },
  {
    "num": 49,
    "question_en": "Which topology connects all nodes in a circle?",
    "question_hi": "कौन सा टोपोलॉजी सभी नोड्स को एक सर्कल में जोड़ता है?",
    "options_en": ["Ring", "Star", "Bus", "Mesh"],
    "options_hi": ["रिंग", "स्टार", "बस", "मेश"],
    "answer_en": "Ring",
    "answer_hi": "रिंग",
    "explanation_en": "In ring topology, each node connects to exactly two other nodes forming a ring.",
    "explanation_hi": "रिंग टोपोलॉजी में, प्रत्येक नोड ठीक दो अन्य नोड्स से जुड़ता है जो एक रिंग बनाता है।"
  },
  {
    "num": 50,
    "question_en": "What is debugging?",
    "question_hi": "डिबगिंग क्या है?",
    "options_en": ["Finding and fixing errors in code", "Writing new code", "Designing interface", "Testing hardware"],
    "options_hi": ["कोड में त्रुटियाँ ढूँढना और ठीक करना", "नया कोड लिखना", "इंटरफ़ेस डिजाइन करना", "हार्डवेयर टेस्ट करना"],
    "answer_en": "Finding and fixing errors in code",
    "answer_hi": "कोड में त्रुटियाँ ढूँढना और ठीक करना",
    "explanation_en": "Debugging identifies and removes bugs/errors from software.",
    "explanation_hi": "डिबगिंग सॉफ्टवेयर से बग/त्रुटियों की पहचान करता है और उन्हें हटाता है।"
  }
]



let currentQuestion = 0; 
let language = "en";
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
