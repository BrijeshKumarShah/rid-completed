const questions = [
  {
    "num": 1,
    "question_en": "Which component of computer is called its brain?",
    "question_hi": "कंप्यूटर के किस घटक को उसका दिमाग कहा जाता है?",
    "options_en": ["CPU", "RAM", "Hard Disk", "Monitor"],
    "options_hi": ["CPU", "RAM", "हार्ड डिस्क", "मॉनिटर"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "explanation_en": "CPU (Central Processing Unit) processes all instructions and controls other components.",
    "explanation_hi": "CPU (सेंट्रल प्रोसेसिंग यूनिट) सभी निर्देशों को प्रोसेस करता है और अन्य घटकों को नियंत्रित करता है।"
  },
  {
    "num": 2,
    "question_en": "Which of these is an input device?",
    "question_hi": "इनमें से कौन इनपुट डिवाइस है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Speaker"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर",
    "explanation_en": "Scanner converts physical documents/images into digital format (input).",
    "explanation_hi": "स्कैनर भौतिक दस्तावेजों/छवियों को डिजिटल प्रारूप में बदलता है (इनपुट)।"
  },
  {
    "num": 3,
    "question_en": "What is the full form of ASCII?",
    "question_hi": "ASCII का पूर्ण रूप क्या है?",
    "options_en": ["American Standard Code for Information Interchange", "American System Code for Information Interchange", "Asian Standard Code for Information Interchange", "American Standard Computer for Information Interchange"],
    "options_hi": ["अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इनफॉर्मेशन इंटरचेंज", "एशियन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन स्टैंडर्ड कंप्यूटर फॉर इनफॉर्मेशन इंटरचेंज"],
    "answer_en": "American Standard Code for Information Interchange",
    "answer_hi": "अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज",
    "explanation_en": "ASCII represents text in computers and communication equipment.",
    "explanation_hi": "ASCII कंप्यूटर और संचार उपकरणों में टेक्स्ट का प्रतिनिधित्व करता है।"
  },
  {
    "num": 4,
    "question_en": "Which generation of computers used transistors?",
    "question_hi": "कंप्यूटर की किस पीढ़ी में ट्रांजिस्टर का उपयोग किया गया?",
    "options_en": ["Second Generation", "First Generation", "Third Generation", "Fourth Generation"],
    "options_hi": ["दूसरी पीढ़ी", "पहली पीढ़ी", "तीसरी पीढ़ी", "चौथी पीढ़ी"],
    "answer_en": "Second Generation",
    "answer_hi": "दूसरी पीढ़ी",
    "explanation_en": "Second generation computers (1959-1965) used transistors instead of vacuum tubes.",
    "explanation_hi": "दूसरी पीढ़ी के कंप्यूटरों (1959-1965) में वैक्यूम ट्यूबों के बजाय ट्रांजिस्टर का उपयोग किया गया।"
  },
  {
    "num": 5,
    "question_en": "What is the purpose of an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम का उद्देश्य क्या है?",
    "options_en": ["Manages computer hardware and software resources", "Creates documents", "Browses internet", "Plays games"],
    "options_hi": ["कंप्यूटर हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करता है", "दस्तावेज़ बनाता है", "इंटरनेट ब्राउज़ करता है", "गेम खेलता है"],
    "answer_en": "Manages computer hardware and software resources",
    "answer_hi": "कंप्यूटर हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करता है",
    "explanation_en": "OS acts as interface between user and computer hardware, managing memory, processes, etc.",
    "explanation_hi": "OS उपयोगकर्ता और कंप्यूटर हार्डवेयर के बीच इंटरफ़ेस के रूप में कार्य करता है, मेमोरी, प्रक्रियाओं आदि का प्रबंधन करता है।"
  },
  {
    "num": 6,
    "question_en": "Which of these is a system software?",
    "question_hi": "इनमें से कौन सिस्टम सॉफ्टवेयर है?",
    "options_en": ["Device Driver", "MS Word", "Photoshop", "Chrome"],
    "options_hi": ["डिवाइस ड्राइवर", "एमएस वर्ड", "फोटोशॉप", "क्रोम"],
    "answer_en": "Device Driver",
    "answer_hi": "डिवाइस ड्राइवर",
    "explanation_en": "Device drivers are system software that control hardware devices.",
    "explanation_hi": "डिवाइस ड्राइवर सिस्टम सॉफ्टवेयर हैं जो हार्डवेयर डिवाइस को नियंत्रित करते हैं।"
  },
  {
    "num": 7,
    "question_en": "What is the binary equivalent of decimal 15?",
    "question_hi": "दशमलव 15 का बाइनरी समतुल्य क्या है?",
    "options_en": ["1111", "1010", "1100", "1001"],
    "options_hi": ["1111", "1010", "1100", "1001"],
    "answer_en": "1111",
    "answer_hi": "1111",
    "explanation_en": "15 in decimal = 1111 in binary (8+4+2+1 = 15).",
    "explanation_hi": "दशमलव में 15 = बाइनरी में 1111 (8+4+2+1 = 15)।"
  },
  {
    "num": 8,
    "question_en": "Which memory is non-volatile?",
    "question_hi": "कौन सी मेमोरी नॉन-वोलेटाइल होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Registers"],
    "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "ROM",
    "answer_hi": "ROM",
    "explanation_en": "ROM retains data even when power is turned off (non-volatile).",
    "explanation_hi": "ROM बिजली बंद होने पर भी डेटा बनाए रखता है (नॉन-वोलेटाइल)।"
  },
  {
    "num": 9,
    "question_en": "What does ALU stand for?",
    "question_hi": "ALU का क्या अर्थ है?",
    "options_en": ["Arithmetic Logic Unit", "Arithmetic Learning Unit", "Advanced Logic Unit", "Advanced Learning Unit"],
    "options_hi": ["अंकगणित तर्क इकाई", "अंकगणित सीखने की इकाई", "उन्नत तर्क इकाई", "उन्नत सीखने की इकाई"],
    "answer_en": "Arithmetic Logic Unit",
    "answer_hi": "अंकगणित तर्क इकाई",
    "explanation_en": "ALU performs arithmetic and logical operations in CPU.",
    "explanation_hi": "ALU CPU में अंकगणित और तार्किक संचालन करता है।"
  },
  {
    "num": 10,
    "question_en": "Which is an example of application software?",
    "question_hi": "एप्लिकेशन सॉफ्टवेयर का उदाहरण कौन सा है?",
    "options_en": ["Microsoft PowerPoint", "Windows", "Linux", "BIOS"],
    "options_hi": ["माइक्रोसॉफ्ट पावरपॉइंट", "विंडोज", "लिनक्स", "BIOS"],
    "answer_en": "Microsoft PowerPoint",
    "answer_hi": "माइक्रोसॉफ्ट पावरपॉइंट",
    "explanation_en": "PowerPoint is application software for creating presentations.",
    "explanation_hi": "पावरपॉइंट प्रस्तुतियाँ बनाने के लिए एप्लिकेशन सॉफ्टवेयर है।"
  },
  {
    "num": 11,
    "question_en": "What is the main function of Control Unit in CPU?",
    "question_hi": "CPU में कंट्रोल यूनिट का मुख्य कार्य क्या है?",
    "options_en": ["Directs operation of processor", "Performs calculations", "Stores data", "Displays output"],
    "options_hi": ["प्रोसेसर के संचालन को निर्देशित करता है", "गणना करता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है"],
    "answer_en": "Directs operation of processor",
    "answer_hi": "प्रोसेसर के संचालन को निर्देशित करता है",
    "explanation_en": "Control Unit manages execution of instructions and coordinates other CPU components.",
    "explanation_hi": "कंट्रोल यूनिट निर्देशों के निष्पादन का प्रबंधन करता है और अन्य CPU घटकों का समन्वय करता है।"
  },
  {
    "num": 12,
    "question_en": "Which device provides internet connectivity without wires?",
    "question_hi": "कौन सा उपकरण बिना तारों के इंटरनेट कनेक्टिविटी प्रदान करता है?",
    "options_en": ["WiFi Router", "Modem", "Switch", "Hub"],
    "options_hi": ["वाईफाई राउटर", "मॉडेम", "स्विच", "हब"],
    "answer_en": "WiFi Router",
    "answer_hi": "वाईफाई राउटर",
    "explanation_en": "WiFi Router creates wireless network for multiple devices to connect to internet.",
    "explanation_hi": "वाईफाई राउटर कई उपकरणों के इंटरनेट से कनेक्ट होने के लिए वायरलेस नेटवर्क बनाता है।"
  },
  {
    "num": 13,
    "question_en": "What does GUI stand for?",
    "question_hi": "GUI का क्या अर्थ है?",
    "options_en": ["Graphical User Interface", "General User Interface", "Graphical Utility Interface", "General Utility Interface"],
    "options_hi": ["ग्राफिकल यूज़र इंटरफ़ेस", "जनरल यूज़र इंटरफ़ेस", "ग्राफिकल यूटिलिटी इंटरफ़ेस", "जनरल यूटिलिटी इंटरफ़ेस"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूज़र इंटरफ़ेस",
    "explanation_en": "GUI uses visual elements (icons, windows) instead of text commands.",
    "explanation_hi": "GUI टेक्स्ट कमांड के बजाय दृश्य तत्वों (आइकन, विंडो) का उपयोग करता है।"
  },
  {
    "num": 14,
    "question_en": "Which is the fastest memory in computer hierarchy?",
    "question_hi": "कंप्यूटर पदानुक्रम में सबसे तेज़ मेमोरी कौन सी है?",
    "options_en": ["Registers", "Cache", "RAM", "Hard Disk"],
    "options_hi": ["रजिस्टर", "कैश", "RAM", "हार्ड डिस्क"],
    "answer_en": "Registers",
    "answer_hi": "रजिस्टर",
    "explanation_en": "Registers are smallest and fastest memory located inside CPU.",
    "explanation_hi": "रजिस्टर सबसे छोटी और सबसे तेज़ मेमोरी होती है जो CPU के अंदर स्थित होती है।"
  },
  {
    "num": 15,
    "question_en": "What is the purpose of an assembler?",
    "question_hi": "असेम्बलर का उद्देश्य क्या है?",
    "options_en": ["Converts assembly language to machine code", "Converts high-level language to machine code", "Checks program errors", "Executes programs"],
    "options_hi": ["असेम्बली भाषा को मशीन कोड में बदलता है", "उच्च-स्तरीय भाषा को मशीन कोड में बदलता है", "प्रोग्राम त्रुटियाँ जाँचता है", "प्रोग्राम निष्पादित करता है"],
    "answer_en": "Converts assembly language to machine code",
    "answer_hi": "असेम्बली भाषा को मशीन कोड में बदलता है",
    "explanation_en": "Assembler translates assembly language (low-level) to machine language.",
    "explanation_hi": "असेम्बलर असेम्बली भाषा (निम्न-स्तरीय) को मशीन भाषा में अनुवाद करता है।"
  },
  {
    "num": 16,
    "question_en": "Which topology requires least cable length?",
    "question_hi": "किस टोपोलॉजी को सबसे कम केबल लंबाई की आवश्यकता होती है?",
    "options_en": ["Bus", "Star", "Ring", "Mesh"],
    "options_hi": ["बस", "स्टार", "रिंग", "मेश"],
    "answer_en": "Bus",
    "answer_hi": "बस",
    "explanation_en": "Bus topology uses single main cable to which all devices connect.",
    "explanation_hi": "बस टोपोलॉजी एक मुख्य केबल का उपयोग करती है जिससे सभी उपकरण जुड़े होते हैं।"
  },
  {
    "num": 17,
    "question_en": "What is a compiler?",
    "question_hi": "कंपाइलर क्या है?",
    "options_en": ["Translates entire program at once", "Translates line by line", "Checks spelling", "Creates documents"],
    "options_hi": ["पूरे प्रोग्राम को एक साथ अनुवाद करता है", "लाइन दर लाइन अनुवाद करता है", "वर्तनी जाँचता है", "दस्तावेज़ बनाता है"],
    "answer_en": "Translates entire program at once",
    "answer_hi": "पूरे प्रोग्राम को एक साथ अनुवाद करता है",
    "explanation_en": "Compiler converts entire high-level language program to machine code before execution.",
    "explanation_hi": "कंपाइलर निष्पादन से पहले पूरे उच्च-स्तरीय भाषा प्रोग्राम को मशीन कोड में बदलता है।"
  },
  {
    "num": 18,
    "question_en": "Which device connects multiple computers in a network?",
    "question_hi": "कौन सा उपकरण नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
    "options_en": ["Switch", "Modem", "Router", "Repeater"],
    "options_hi": ["स्विच", "मॉडेम", "राउटर", "रिपीटर"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "explanation_en": "Switch connects multiple devices in a LAN and manages data traffic.",
    "explanation_hi": "स्विच LAN में कई उपकरणों को जोड़ता है और डेटा ट्रैफ़िक का प्रबंधन करता है।"
  },
  {
    "num": 19,
    "question_en": "What is cloud storage?",
    "question_hi": "क्लाउड स्टोरेज क्या है?",
    "options_en": ["Online data storage", "Local hard disk", "Pen drive", "CD/DVD"],
    "options_hi": ["ऑनलाइन डेटा संग्रहण", "स्थानीय हार्ड डिस्क", "पेन ड्राइव", "CD/DVD"],
    "answer_en": "Online data storage",
    "answer_hi": "ऑनलाइन डेटा संग्रहण",
    "explanation_en": "Cloud storage stores data on remote servers accessible via internet.",
    "explanation_hi": "क्लाउड स्टोरेज इंटरनेट के माध्यम से सुलभ दूरस्थ सर्वर पर डेटा संग्रहीत करता है।"
  },
  {
    "num": 20,
    "question_en": "Which is a low-level programming language?",
    "question_hi": "निम्न-स्तरीय प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["Assembly Language", "Python", "Java", "C++"],
    "options_hi": ["असेम्बली भाषा", "पाइथन", "जावा", "C++"],
    "answer_en": "Assembly Language",
    "answer_hi": "असेम्बली भाषा",
    "explanation_en": "Assembly language is closer to machine code than high-level languages.",
    "explanation_hi": "असेम्बली भाषा उच्च-स्तरीय भाषाओं की तुलना में मशीन कोड के करीब है।"
  },
  {
    "num": 21,
    "question_en": "What is the function of an interpreter?",
    "question_hi": "इंटरप्रेटर का कार्य क्या है?",
    "options_en": ["Translates and executes line by line", "Translates entire program", "Checks syntax errors", "Optimizes code"],
    "options_hi": ["लाइन दर लाइन अनुवाद और निष्पादन करता है", "पूरे प्रोग्राम का अनुवाद करता है", "सिंटैक्स त्रुटियाँ जाँचता है", "कोड ऑप्टिमाइज़ करता है"],
    "answer_en": "Translates and executes line by line",
    "answer_hi": "लाइन दर लाइन अनुवाद और निष्पादन करता है",
    "explanation_en": "Interpreter translates and executes one statement at a time.",
    "explanation_hi": "इंटरप्रेटर एक समय में एक स्टेटमेंट का अनुवाद और निष्पादन करता है।"
  },
  {
    "num": 22,
    "question_en": "Which network topology is most fault-tolerant?",
    "question_hi": "कौन सी नेटवर्क टोपोलॉजी सबसे अधिक फॉल्ट-टॉलरेंट है?",
    "options_en": ["Mesh", "Star", "Bus", "Ring"],
    "options_hi": ["मेश", "स्टार", "बस", "रिंग"],
    "answer_en": "Mesh",
    "answer_hi": "मेश",
    "explanation_en": "Mesh topology provides multiple paths between nodes, so failure of one doesn't affect others.",
    "explanation_hi": "मेश टोपोलॉजी नोड्स के बीच कई रास्ते प्रदान करती है, इसलिए एक के विफल होने से दूसरों पर प्रभाव नहीं पड़ता।"
  },
  {
    "num": 23,
    "question_en": "What is malware?",
    "question_hi": "मैलवेयर क्या है?",
    "options_en": ["Malicious software", "Useful software", "System software", "Application software"],
    "options_hi": ["दुर्भावनापूर्ण सॉफ्टवेयर", "उपयोगी सॉफ्टवेयर", "सिस्टम सॉफ्टवेयर", "एप्लिकेशन सॉफ्टवेयर"],
    "answer_en": "Malicious software",
    "answer_hi": "दुर्भावनापूर्ण सॉफ्टवेयर",
    "explanation_en": "Malware includes viruses, worms, trojans designed to harm computers.",
    "explanation_hi": "मैलवेयर में वायरस, वर्म्स, ट्रोजन शामिल हैं जो कंप्यूटर को नुकसान पहुँचाने के लिए डिज़ाइन किए गए हैं।"
  },
  {
    "num": 24,
    "question_en": "Which generation used microprocessors?",
    "question_hi": "किस पीढ़ी में माइक्रोप्रोसेसर का उपयोग किया गया?",
    "options_en": ["Fourth Generation", "First Generation", "Second Generation", "Third Generation"],
    "options_hi": ["चौथी पीढ़ी", "पहली पीढ़ी", "दूसरी पीढ़ी", "तीसरी पीढ़ी"],
    "answer_en": "Fourth Generation",
    "answer_hi": "चौथी पीढ़ी",
    "explanation_en": "Fourth generation computers (1971-present) use microprocessors.",
    "explanation_hi": "चौथी पीढ़ी के कंप्यूटर (1971-वर्तमान) माइक्रोप्रोसेसर का उपयोग करते हैं।"
  },
  {
    "num": 25,
    "question_en": "What does RAM stand for?",
    "question_hi": "RAM का क्या अर्थ है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी",
    "explanation_en": "RAM is volatile memory that stores data temporarily while computer is running.",
    "explanation_hi": "RAM अस्थिर मेमोरी है जो कंप्यूटर चलने के दौरान डेटा को अस्थायी रूप से संग्रहीत करती है।"
  },
  {
    "num": 26,
    "question_en": "Which is an output device?",
    "question_hi": "कौन सा आउटपुट डिवाइस है?",
    "options_en": ["Projector", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["प्रोजेक्टर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Projector",
    "answer_hi": "प्रोजेक्टर",
    "explanation_en": "Projector displays computer output on large screen.",
    "explanation_hi": "प्रोजेक्टर कंप्यूटर आउटपुट को बड़ी स्क्रीन पर प्रदर्शित करता है।"
  },
  {
    "num": 27,
    "question_en": "What is a flowchart symbol for decision?",
    "question_hi": "निर्णय के लिए फ्लोचार्ट प्रतीक क्या है?",
    "options_en": ["Diamond", "Rectangle", "Parallelogram", "Oval"],
    "options_hi": ["डायमंड", "आयत", "समानांतर चतुर्भुज", "अंडाकार"],
    "answer_en": "Diamond",
    "answer_hi": "डायमंड",
    "explanation_en": "Diamond shape represents decision points in flowcharts.",
    "explanation_hi": "डायमंड आकार फ्लोचार्ट में निर्णय बिंदुओं का प्रतिनिधित्व करता है।"
  },
  {
    "num": 28,
    "question_en": "Which protocol is used for file transfer?",
    "question_hi": "फाइल ट्रांसफर के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["FTP", "HTTP", "SMTP", "TCP"],
    "options_hi": ["FTP", "HTTP", "SMTP", "TCP"],
    "answer_en": "FTP",
    "answer_hi": "FTP",
    "explanation_en": "FTP (File Transfer Protocol) transfers files between computers on network.",
    "explanation_hi": "FTP (फाइल ट्रांसफर प्रोटोकॉल) नेटवर्क पर कंप्यूटरों के बीच फाइलें स्थानांतरित करता है।"
  },
  {
    "num": 29,
    "question_en": "What is the function of CTRL+Z shortcut?",
    "question_hi": "CTRL+Z शॉर्टकट का कार्य क्या है?",
    "options_en": ["Undo last action", "Redo action", "Copy", "Paste"],
    "options_hi": ["अंतिम क्रिया पूर्ववत करें", "क्रिया फिर से करें", "कॉपी", "पेस्ट"],
    "answer_en": "Undo last action",
    "answer_hi": "अंतिम क्रिया पूर्ववत करें",
    "explanation_en": "CTRL+Z reverses the last action performed.",
    "explanation_hi": "CTRL+Z की गई अंतिम क्रिया को उलट देता है।"
  },
  {
    "num": 30,
    "question_en": "Which is a programming construct for decision making?",
    "question_hi": "निर्णय लेने के लिए कौन सा प्रोग्रामिंग कंस्ट्रक्ट है?",
    "options_en": ["If-else statement", "Loop", "Variable", "Array"],
    "options_hi": ["If-else स्टेटमेंट", "लूप", "वेरिएबल", "एरे"],
    "answer_en": "If-else statement",
    "answer_hi": "If-else स्टेटमेंट",
    "explanation_en": "If-else executes different code based on conditions.",
    "explanation_hi": "If-else शर्तों के आधार पर अलग-अलग कोड निष्पादित करता है।"
  },
  {
    "num": 31,
    "question_en": "What is the purpose of cache memory?",
    "question_hi": "कैश मेमोरी का उद्देश्य क्या है?",
    "options_en": ["Speed up CPU access to frequently used data", "Store permanent data", "Backup data", "Increase storage capacity"],
    "options_hi": ["अक्सर उपयोग किए जाने वाले डेटा तक CPU पहुंच को तेज़ करना", "स्थायी डेटा संग्रहीत करना", "डेटा का बैकअप", "स्टोरेज क्षमता बढ़ाना"],
    "answer_en": "Speed up CPU access to frequently used data",
    "answer_hi": "अक्सर उपयोग किए जाने वाले डेटा तक CPU पहुंच को तेज़ करना",
    "explanation_en": "Cache stores frequently accessed data for faster retrieval.",
    "explanation_hi": "कैश तेजी से पुनर्प्राप्ति के लिए अक्सर एक्सेस किए गए डेटा को संग्रहीत करता है।"
  },
  {
    "num": 32,
    "question_en": "Which device converts analog signals to digital?",
    "question_hi": "कौन सा उपकरण एनालॉग सिग्नल को डिजिटल में बदलता है?",
    "options_en": ["ADC (Analog to Digital Converter)", "DAC", "Modem", "Router"],
    "options_hi": ["ADC (एनालॉग से डिजिटल कन्वर्टर)", "DAC", "मॉडेम", "राउटर"],
    "answer_en": "ADC (Analog to Digital Converter)",
    "answer_hi": "ADC (एनालॉग से डिजिटल कन्वर्टर)",
    "explanation_en": "ADC converts continuous analog signals to discrete digital values.",
    "explanation_hi": "ADC निरंतर एनालॉग सिग्नल को असतत डिजिटल मानों में बदलता है।"
  },
  {
    "num": 33,
    "question_en": "What is an algorithm?",
    "question_hi": "एल्गोरिदम क्या है?",
    "options_en": ["Step-by-step procedure to solve problem", "Programming language", "Computer hardware", "Network device"],
    "options_hi": ["समस्या को हल करने के लिए चरणबद्ध प्रक्रिया", "प्रोग्रामिंग भाषा", "कंप्यूटर हार्डवेयर", "नेटवर्क डिवाइस"],
    "answer_en": "Step-by-step procedure to solve problem",
    "answer_hi": "समस्या को हल करने के लिए चरणबद्ध प्रक्रिया",
    "explanation_en": "Algorithm is finite sequence of instructions to solve specific problem.",
    "explanation_hi": "एल्गोरिदम विशिष्ट समस्या को हल करने के लिए निर्देशों का सीमित क्रम है।"
  },
  {
    "num": 34,
    "question_en": "Which is a programming language for databases?",
    "question_hi": "डेटाबेस के लिए प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["SQL", "HTML", "CSS", "Python"],
    "options_hi": ["SQL", "HTML", "CSS", "पाइथन"],
    "answer_en": "SQL",
    "answer_hi": "SQL",
    "explanation_en": "SQL (Structured Query Language) manages relational databases.",
    "explanation_hi": "SQL (स्ट्रक्चर्ड क्वेरी लैंग्वेज) रिलेशनल डेटाबेस को प्रबंधित करता है।"
  },
  {
    "num": 35,
    "question_en": "What is the internet?",
    "question_hi": "इंटरनेट क्या है?",
    "options_en": ["Global network of computers", "Local network", "Single computer", "Software program"],
    "options_hi": ["कंप्यूटरों का वैश्विक नेटवर्क", "स्थानीय नेटवर्क", "एकल कंप्यूटर", "सॉफ्टवेयर प्रोग्राम"],
    "answer_en": "Global network of computers",
    "answer_hi": "कंप्यूटरों का वैश्विक नेटवर्क",
    "explanation_en": "Internet connects millions of computers worldwide using TCP/IP.",
    "explanation_hi": "इंटरनेट TCP/IP का उपयोग करके दुनिया भर के लाखों कंप्यूटरों को जोड़ता है।"
  },
  {
    "num": 36,
    "question_en": "Which is a volatile storage device?",
    "question_hi": "वोलेटाइल स्टोरेज डिवाइस कौन सा है?",
    "options_en": ["RAM", "Hard Disk", "SSD", "CD-ROM"],
    "options_hi": ["RAM", "हार्ड डिस्क", "SSD", "CD-ROM"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM loses all data when power is turned off.",
    "explanation_hi": "बिजली बंद होने पर RAM सभी डेटा खो देती है।"
  },
  {
    "num": 37,
    "question_en": "What does ISP stand for?",
    "question_hi": "ISP का क्या अर्थ है?",
    "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
    "options_hi": ["इंटरनेट सेवा प्रदाता", "इंटरनेट सिस्टम प्रदाता", "अंतर्राष्ट्रीय सेवा प्रदाता", "अंतर्राष्ट्रीय सिस्टम प्रदाता"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सेवा प्रदाता",
    "explanation_en": "ISP provides internet access to customers.",
    "explanation_hi": "ISP ग्राहकों को इंटरनेट पहुंच प्रदान करता है।"
  },
  {
    "num": 38,
    "question_en": "Which is a programming language for web development?",
    "question_hi": "वेब डेवलपमेंट के लिए प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["JavaScript", "C", "Fortran", "Pascal"],
    "options_hi": ["जावास्क्रिप्ट", "C", "फोरट्रान", "पास्कल"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "explanation_en": "JavaScript adds interactivity to web pages.",
    "explanation_hi": "जावास्क्रिप्ट वेब पेजों में इंटरैक्टिविटी जोड़ती है।"
  },
  {
    "num": 39,
    "question_en": "What is the function of a router?",
    "question_hi": "राउटर का कार्य क्या है?",
    "options_en": ["Connects different networks", "Connects devices in same network", "Amplifies signals", "Converts signals"],
    "options_hi": ["विभिन्न नेटवर्कों को जोड़ता है", "समान नेटवर्क में उपकरणों को जोड़ता है", "सिग्नल प्रवर्धित करता है", "सिग्नल बदलता है"],
    "answer_en": "Connects different networks",
    "answer_hi": "विभिन्न नेटवर्कों को जोड़ता है",
    "explanation_en": "Router forwards data packets between different networks (e.g., home network to internet).",
    "explanation_hi": "राउटर विभिन्न नेटवर्कों (जैसे, घरेलू नेटवर्क से इंटरनेट) के बीच डेटा पैकेट आगे बढ़ाता है।"
  },
  {
    "num": 40,
    "question_en": "Which is an example of utility software?",
    "question_hi": "यूटिलिटी सॉफ्टवेयर का उदाहरण कौन सा है?",
    "options_en": ["Disk Defragmenter", "MS Word", "Photoshop", "Chrome"],
    "options_hi": ["डिस्क डीफ़्रैग्मेंटर", "एमएस वर्ड", "फोटोशॉप", "क्रोम"],
    "answer_en": "Disk Defragmenter",
    "answer_hi": "डिस्क डीफ़्रैग्मेंटर",
    "explanation_en": "Utility software performs maintenance tasks (disk cleanup, defragmentation).",
    "explanation_hi": "यूटिलिटी सॉफ्टवेयर रखरखाव कार्य करता है (डिस्क सफाई, डीफ़्रैग्मेंटेशन)।"
  },
  {
    "num": 41,
    "question_en": "What is the binary equivalent of decimal 7?",
    "question_hi": "दशमलव 7 का बाइनरी समतुल्य क्या है?",
    "options_en": ["111", "101", "110", "100"],
    "options_hi": ["111", "101", "110", "100"],
    "answer_en": "111",
    "answer_hi": "111",
    "explanation_en": "7 in decimal = 111 in binary (4+2+1 = 7).",
    "explanation_hi": "दशमलव में 7 = बाइनरी में 111 (4+2+1 = 7)।"
  },
  {
    "num": 42,
    "question_en": "Which topology has central hub?",
    "question_hi": "किस टोपोलॉजी में केंद्रीय हब होता है?",
    "options_en": ["Star", "Bus", "Ring", "Mesh"],
    "options_hi": ["स्टार", "बस", "रिंग", "मेश"],
    "answer_en": "Star",
    "answer_hi": "स्टार",
    "explanation_en": "Star topology connects all devices to central hub/switch.",
    "explanation_hi": "स्टार टोपोलॉजी सभी उपकरणों को केंद्रीय हब/स्विच से जोड़ती है।"
  },
  {
    "num": 43,
    "question_en": "What is a variable in programming?",
    "question_hi": "प्रोग्रामिंग में वेरिएबल क्या है?",
    "options_en": ["Named storage location for data", "Type of loop", "Programming language", "Output statement"],
    "options_hi": ["डेटा के लिए नामित संग्रहण स्थान", "लूप का प्रकार", "प्रोग्रामिंग भाषा", "आउटपुट स्टेटमेंट"],
    "answer_en": "Named storage location for data",
    "answer_hi": "डेटा के लिए नामित संग्रहण स्थान",
    "explanation_en": "Variables store values that can change during program execution.",
    "explanation_hi": "वेरिएबल वे मान संग्रहीत करते हैं जो प्रोग्राम निष्पादन के दौरान बदल सकते हैं।"
  },
  {
    "num": 44,
    "question_en": "Which device stores data permanently?",
    "question_hi": "कौन सा उपकरण डेटा को स्थायी रूप से संग्रहीत करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Registers"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard disk retains data even when computer is turned off.",
    "explanation_hi": "हार्ड डिस्क कंप्यूटर बंद होने पर भी डेटा बनाए रखती है।"
  },
  {
    "num": 45,
    "question_en": "What does LAN stand for?",
    "question_hi": "LAN का क्या अर्थ है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "explanation_en": "LAN connects computers in small area like home, office, or building.",
    "explanation_hi": "LAN घर, कार्यालय या इमारत जैसे छोटे क्षेत्र में कंप्यूटरों को जोड़ता है।"
  },
  {
    "num": 46,
    "question_en": "Which is a high-level programming language?",
    "question_hi": "उच्च-स्तरीय प्रोग्रामिंग भाषा कौन सी है?",
    "options_en": ["Python", "Machine Language", "Assembly Language", "Binary Code"],
    "options_hi": ["पाइथन", "मशीन भाषा", "असेम्बली भाषा", "बाइनरी कोड"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "High-level languages are easier for humans to read and write.",
    "explanation_hi": "उच्च-स्तरीय भाषाएँ मनुष्यों के लिए पढ़ने और लिखने में आसान होती हैं।"
  },
  {
    "num": 47,
    "question_en": "What is the purpose of UPS?",
    "question_hi": "UPS का उद्देश्य क्या है?",
    "options_en": ["Provide backup power", "Increase internet speed", "Clean computer", "Print documents"],
    "options_hi": ["बैकअप पावर प्रदान करना", "इंटरनेट की गति बढ़ाना", "कंप्यूटर साफ करना", "दस्तावेज़ प्रिंट करना"],
    "answer_en": "Provide backup power",
    "answer_hi": "बैकअप पावर प्रदान करना",
    "explanation_en": "UPS provides temporary power during electricity failure for safe shutdown.",
    "explanation_hi": "UPS बिजली विफलता के दौरान सुरक्षित शटडाउन के लिए अस्थायी बिजली प्रदान करता है।"
  },
  {
    "num": 48,
    "question_en": "Which device connects computer to internet via phone line?",
    "question_hi": "कौन सा उपकरण फोन लाइन के माध्यम से कंप्यूटर को इंटरनेट से जोड़ता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem modulates digital signals to analog for telephone lines.",
    "explanation_hi": "मॉडेम टेलीफोन लाइनों के लिए डिजिटल सिग्नल को एनालॉग में मॉड्यूलेट करता है।"
  },
  {
    "num": 49,
    "question_en": "What is a loop in programming?",
    "question_hi": "प्रोग्रामिंग में लूप क्या है?",
    "options_en": ["Repeats block of code", "Stores data", "Displays output", "Takes input"],
    "options_hi": ["कोड ब्लॉक दोहराता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है", "इनपुट लेता है"],
    "answer_en": "Repeats block of code",
    "answer_hi": "कोड ब्लॉक दोहराता है",
    "explanation_en": "Loops execute code repeatedly until condition is met.",
    "explanation_hi": "लूप तब तक कोड को बार-बार निष्पादित करते हैं जब तक शर्त पूरी न हो जाए।"
  },
  {
    "num": 50,
    "question_en": "Which is a storage measurement unit?",
    "question_hi": "स्टोरेज मापन इकाई कौन सी है?",
    "options_en": ["Gigabyte", "Megahertz", "Gigahertz", "Millisecond"],
    "options_hi": ["गीगाबाइट", "मेगाहर्ट्ज", "गीगाहर्ट्ज", "मिलीसेकंड"],
    "answer_en": "Gigabyte",
    "answer_hi": "गीगाबाइट",
    "explanation_en": "Gigabyte (GB) measures data storage capacity (1 GB = 1024 MB).",
    "explanation_hi": "गीगाबाइट (GB) डेटा संग्रहण क्षमता को मापता है (1 GB = 1024 MB)।"
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
