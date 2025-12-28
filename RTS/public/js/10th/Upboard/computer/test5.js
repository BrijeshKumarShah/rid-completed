


const questions = [
  {
    "num": 1,
    "question_en": "Which protocol is used for secure web browsing?",
    "question_hi": "सुरक्षित वेब ब्राउज़िंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "answer_en": "HTTPS",
    "answer_hi": "HTTPS",
    "explanation_en": "HTTPS (Hyper Text Transfer Protocol Secure) encrypts data for secure communication.",
    "explanation_hi": "HTTPS (हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर) सुरक्षित संचार के लिए डेटा को एन्क्रिप्ट करता है।"
  },
  {
    "num": 2,
    "question_en": "What is the purpose of a firewall?",
    "question_hi": "फ़ायरवॉल का उद्देश्य क्या है?",
    "options_en": ["Block unauthorized access", "Speed up internet", "Store files", "Print documents"],
    "options_hi": ["अनधिकृत पहुँच रोकना", "इंटरनेट गति बढ़ाना", "फाइलें संग्रहीत करना", "दस्तावेज़ प्रिंट करना"],
    "answer_en": "Block unauthorized access",
    "answer_hi": "अनधिकृत पहुँच रोकना",
    "explanation_en": "Firewall monitors and controls incoming/outgoing network traffic based on security rules.",
    "explanation_hi": "फ़ायरवॉल सुरक्षा नियमों के आधार पर आने/जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करता है।"
  },
  {
    "num": 3,
    "question_en": "Which of these is a markup language?",
    "question_hi": "इनमें से कौन मार्कअप लैंग्वेज है?",
    "options_en": ["HTML", "Python", "Java", "C++"],
    "options_hi": ["HTML", "पाइथन", "जावा", "C++"],
    "answer_en": "HTML",
    "answer_hi": "HTML",
    "explanation_en": "HTML (HyperText Markup Language) structures web content with tags.",
    "explanation_hi": "HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज) टैग के साथ वेब कंटेंट को संरचित करता है।"
  },
  {
    "num": 4,
    "question_en": "What is an IP address?",
    "question_hi": "IP पता क्या है?",
    "options_en": ["Unique identifier for devices on network", "Email address", "Website name", "Computer brand"],
    "options_hi": ["नेटवर्क पर उपकरणों के लिए अद्वितीय पहचानकर्ता", "ईमेल पता", "वेबसाइट नाम", "कंप्यूटर ब्रांड"],
    "answer_en": "Unique identifier for devices on network",
    "answer_hi": "नेटवर्क पर उपकरणों के लिए अद्वितीय पहचानकर्ता",
    "explanation_en": "IP address identifies devices on network and enables communication between them.",
    "explanation_hi": "IP पता नेटवर्क पर उपकरणों की पहचान करता है और उनके बीच संचार सक्षम करता है।"
  },
  {
    "num": 5,
    "question_en": "Which programming language is used for data analysis?",
    "question_hi": "डेटा विश्लेषण के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["R", "HTML", "CSS", "SQL"],
    "options_hi": ["R", "HTML", "CSS", "SQL"],
    "answer_en": "R",
    "answer_hi": "R",
    "explanation_en": "R is specifically designed for statistical computing and graphics.",
    "explanation_hi": "R विशेष रूप से सांख्यिकीय कंप्यूटिंग और ग्राफिक्स के लिए डिज़ाइन किया गया है।"
  },
  {
    "num": 6,
    "question_en": "What does 'CSS' stand for?",
    "question_hi": "'CSS' का क्या अर्थ है?",
    "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल सिस्टम", "कलरफुल स्टाइल शीट्स"],
    "answer_en": "Cascading Style Sheets",
    "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
    "explanation_en": "CSS describes presentation of HTML documents including colors, layout, fonts.",
    "explanation_hi": "CSS रंग, लेआउट, फ़ॉन्ट सहित HTML दस्तावेज़ों की प्रस्तुति का वर्णन करता है।"
  },
  {
    "num": 7,
    "question_en": "Which device connects wireless devices to wired network?",
    "question_hi": "कौन सा उपकरण वायरलेस उपकरणों को वायर्ड नेटवर्क से जोड़ता है?",
    "options_en": ["Access Point", "Router", "Switch", "Hub"],
    "options_hi": ["एक्सेस पॉइंट", "राउटर", "स्विच", "हब"],
    "answer_en": "Access Point",
    "answer_hi": "एक्सेस पॉइंट",
    "explanation_en": "Access Point creates wireless local area network (WLAN).",
    "explanation_hi": "एक्सेस पॉइंट वायरलेस लोकल एरिया नेटवर्क (WLAN) बनाता है।"
  },
  {
    "num": 8,
    "question_en": "What is the purpose of 'git'?",
    "question_hi": "'git' का उद्देश्य क्या है?",
    "options_en": ["Version control system", "Programming language", "Database system", "Web browser"],
    "options_hi": ["वर्जन कंट्रोल सिस्टम", "प्रोग्रामिंग भाषा", "डेटाबेस सिस्टम", "वेब ब्राउज़र"],
    "answer_en": "Version control system",
    "answer_hi": "वर्जन कंट्रोल सिस्टम",
    "explanation_en": "Git tracks changes in source code during software development.",
    "explanation_hi": "Git सॉफ्टवेयर डेवलपमेंट के दौरान सोर्स कोड में परिवर्तनों को ट्रैक करता है।"
  },
  {
    "num": 9,
    "question_en": "Which of these is a NoSQL database?",
    "question_hi": "इनमें से कौन NoSQL डेटाबेस है?",
    "options_en": ["MongoDB", "MySQL", "Oracle", "SQL Server"],
    "options_hi": ["मोंगोडीबी", "MySQL", "ओरेकल", "SQL सर्वर"],
    "answer_en": "MongoDB",
    "answer_hi": "मोंगोडीबी",
    "explanation_en": "MongoDB is document-oriented NoSQL database.",
    "explanation_hi": "मोंगोडीबी डॉक्यूमेंट-ओरिएंटेड NoSQL डेटाबेस है।"
  },
  {
    "num": 10,
    "question_en": "What is 'phishing'?",
    "question_hi": "'फ़िशिंग' क्या है?",
    "options_en": ["Fraudulent attempt to obtain sensitive information", "Computer hardware", "Programming error", "Network device"],
    "options_hi": ["संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास", "कंप्यूटर हार्डवेयर", "प्रोग्रामिंग त्रुटि", "नेटवर्क डिवाइस"],
    "answer_en": "Fraudulent attempt to obtain sensitive information",
    "answer_hi": "संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास",
    "explanation_en": "Phishing uses deceptive emails/websites to steal personal information.",
    "explanation_hi": "फ़िशिंग व्यक्तिगत जानकारी चुराने के लिए भ्रामक ईमेल/वेबसाइटों का उपयोग करती है।"
  },
  {
    "num": 11,
    "question_en": "Which programming paradigm is Python?",
    "question_hi": "पाइथन कौन सा प्रोग्रामिंग पैराडाइम है?",
    "options_en": ["Multi-paradigm", "Only procedural", "Only object-oriented", "Only functional"],
    "options_hi": ["मल्टी-पैराडाइम", "केवल प्रोसीजरल", "केवल ऑब्जेक्ट-ओरिएंटेड", "केवल फंक्शनल"],
    "answer_en": "Multi-paradigm",
    "answer_hi": "मल्टी-पैराडाइम",
    "explanation_en": "Python supports procedural, object-oriented, and functional programming.",
    "explanation_hi": "पाइथन प्रोसीजरल, ऑब्जेक्ट-ओरिएंटेड और फंक्शनल प्रोग्रामिंग का समर्थन करता है।"
  },
  {
    "num": 12,
    "question_en": "What is 'blockchain' technology?",
    "question_hi": "'ब्लॉकचेन' तकनीक क्या है?",
    "options_en": ["Decentralized distributed ledger", "Computer virus", "Programming language", "Storage device"],
    "options_hi": ["विकेंद्रीकृत वितरित लेजर", "कंप्यूटर वायरस", "प्रोग्रामिंग भाषा", "संग्रहण उपकरण"],
    "answer_en": "Decentralized distributed ledger",
    "answer_hi": "विकेंद्रीकृत वितरित लेजर",
    "explanation_en": "Blockchain records transactions in blocks linked via cryptography.",
    "explanation_hi": "ब्लॉकचेन क्रिप्टोग्राफी के माध्यम से जुड़े ब्लॉक में लेनदेन रिकॉर्ड करता है।"
  },
  {
    "num": 13,
    "question_en": "Which protocol is used for email reception?",
    "question_hi": "ईमेल प्राप्ति के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["POP3/IMAP", "SMTP", "FTP", "HTTP"],
    "options_hi": ["POP3/IMAP", "SMTP", "FTP", "HTTP"],
    "answer_en": "POP3/IMAP",
    "answer_hi": "POP3/IMAP",
    "explanation_en": "POP3 (Post Office Protocol) and IMAP (Internet Message Access Protocol) retrieve emails.",
    "explanation_hi": "POP3 (पोस्ट ऑफिस प्रोटोकॉल) और IMAP (इंटरनेट मैसेज एक्सेस प्रोटोकॉल) ईमेल प्राप्त करते हैं।"
  },
  {
    "num": 14,
    "question_en": "What is 'machine learning'?",
    "question_hi": "'मशीन लर्निंग' क्या है?",
    "options_en": ["AI enabling computers to learn from data", "Computer hardware", "Programming language", "Network device"],
    "options_hi": ["डेटा से सीखने के लिए कंप्यूटर सक्षम करने वाली AI", "कंप्यूटर हार्डवेयर", "प्रोग्रामिंग भाषा", "नेटवर्क डिवाइस"],
    "answer_en": "AI enabling computers to learn from data",
    "answer_hi": "डेटा से सीखने के लिए कंप्यूटर सक्षम करने वाली AI",
    "explanation_en": "Machine learning uses algorithms to parse data, learn from it, and make predictions.",
    "explanation_hi": "मशीन लर्निंग डेटा को पार्स करने, उससे सीखने और भविष्यवाणियाँ करने के लिए एल्गोरिदम का उपयोग करती है।"
  },
  {
    "num": 15,
    "question_en": "Which of these is a frontend framework?",
    "question_hi": "इनमें से कौन फ्रंटएंड फ्रेमवर्क है?",
    "options_en": ["React", "Node.js", "Django", "Spring"],
    "options_hi": ["रिएक्ट", "Node.js", "जैंगो", "स्प्रिंग"],
    "answer_en": "React",
    "answer_hi": "रिएक्ट",
    "explanation_en": "React is JavaScript library for building user interfaces.",
    "explanation_hi": "रिएक्ट यूज़र इंटरफेस बनाने के लिए जावास्क्रिप्ट लाइब्रेरी है।"
  },
  {
    "num": 16,
    "question_en": "What is 'API'?",
    "question_hi": "'API' क्या है?",
    "options_en": ["Application Programming Interface", "Advanced Programming Interface", "Application Program Interface", "Advanced Program Interface"],
    "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफ़ेस", "एडवांस्ड प्रोग्रामिंग इंटरफ़ेस", "एप्लिकेशन प्रोग्राम इंटरफ़ेस", "एडवांस्ड प्रोग्राम इंटरफ़ेस"],
    "answer_en": "Application Programming Interface",
    "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफ़ेस",
    "explanation_en": "API defines interactions between multiple software intermediaries.",
    "explanation_hi": "API कई सॉफ्टवेयर इंटरमीडिएरीज़ के बीच इंटरैक्शन को परिभाषित करता है।"
  },
  {
    "num": 17,
    "question_en": "Which is a containerization platform?",
    "question_hi": "कंटेनराइजेशन प्लेटफॉर्म कौन सा है?",
    "options_en": ["Docker", "MySQL", "Photoshop", "Word"],
    "options_hi": ["डॉकर", "MySQL", "फोटोशॉप", "वर्ड"],
    "answer_en": "Docker",
    "answer_hi": "डॉकर",
    "explanation_en": "Docker packages applications into containers for consistent deployment.",
    "explanation_hi": "डॉकर एप्लिकेशन को सुसंगत तैनाती के लिए कंटेनर में पैकेज करता है।"
  },
  {
    "num": 18,
    "question_en": "What is 'responsive web design'?",
    "question_hi": "'रिस्पॉन्सिव वेब डिज़ाइन' क्या है?",
    "options_en": ["Websites that adapt to different screen sizes", "Fast loading websites", "Animated websites", "Database design"],
    "options_hi": ["विभिन्न स्क्रीन आकारों के अनुकूल वेबसाइटें", "तेज़ लोडिंग वेबसाइटें", "एनिमेटेड वेबसाइटें", "डेटाबेस डिजाइन"],
    "answer_en": "Websites that adapt to different screen sizes",
    "answer_hi": "विभिन्न स्क्रीन आकारों के अनुकूल वेबसाइटें",
    "explanation_en": "Responsive design uses flexible layouts and media queries.",
    "explanation_hi": "रिस्पॉन्सिव डिज़ाइन लचीले लेआउट और मीडिया क्वेरी का उपयोग करता है।"
  },
  {
    "num": 19,
    "question_en": "Which protocol transfers files between computers?",
    "question_hi": "कौन सा प्रोटोकॉल कंप्यूटरों के बीच फाइलें स्थानांतरित करता है?",
    "options_en": ["FTP", "HTTP", "SMTP", "TCP"],
    "options_hi": ["FTP", "HTTP", "SMTP", "TCP"],
    "answer_en": "FTP",
    "answer_hi": "FTP",
    "explanation_en": "FTP (File Transfer Protocol) transfers files between client and server.",
    "explanation_hi": "FTP (फाइल ट्रांसफर प्रोटोकॉल) क्लाइंट और सर्वर के बीच फाइलें स्थानांतरित करता है।"
  },
  {
    "num": 20,
    "question_en": "What is 'agile methodology'?",
    "question_hi": "'एजाइल मेथोडोलॉजी' क्या है?",
    "options_en": ["Iterative approach to project management", "Programming language", "Database system", "Network protocol"],
    "options_hi": ["प्रोजेक्ट प्रबंधन के लिए पुनरावृत्त दृष्टिकोण", "प्रोग्रामिंग भाषा", "डेटाबेस सिस्टम", "नेटवर्क प्रोटोकॉल"],
    "answer_en": "Iterative approach to project management",
    "answer_hi": "प्रोजेक्ट प्रबंधन के लिए पुनरावृत्त दृष्टिकोण",
    "explanation_en": "Agile emphasizes flexibility, collaboration, and customer feedback.",
    "explanation_hi": "एजाइल लचीलापन, सहयोग और ग्राहक प्रतिक्रिया पर जोर देता है।"
  },
  {
    "num": 21,
    "question_en": "Which is a version control system?",
    "question_hi": "वर्जन कंट्रोल सिस्टम कौन सा है?",
    "options_en": ["Git", "Java", "Python", "HTML"],
    "options_hi": ["गिट", "जावा", "पाइथन", "HTML"],
    "answer_en": "Git",
    "answer_hi": "गिट",
    "explanation_en": "Git tracks changes in code and coordinates work among programmers.",
    "explanation_hi": "गिट कोड में परिवर्तनों को ट्रैक करता है और प्रोग्रामरों के बीच कार्य का समन्वय करता है।"
  },
  {
    "num": 22,
    "question_en": "What is 'cloud storage'?",
    "question_hi": "'क्लाउड स्टोरेज' क्या है?",
    "options_en": ["Data storage on remote servers", "Local hard disk", "Pen drive", "CD/DVD"],
    "options_hi": ["दूरस्थ सर्वर पर डेटा संग्रहण", "स्थानीय हार्ड डिस्क", "पेन ड्राइव", "CD/DVD"],
    "answer_en": "Data storage on remote servers",
    "answer_hi": "दूरस्थ सर्वर पर डेटा संग्रहण",
    "explanation_en": "Cloud storage saves data on internet servers accessible from anywhere.",
    "explanation_hi": "क्लाउड स्टोरेज इंटरनेट सर्वर पर डेटा सहेजता है जो कहीं से भी सुलभ है।"
  },
  {
    "num": 23,
    "question_en": "Which programming language is statically typed?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा स्टैटिकली टाइप्ड है?",
    "options_en": ["Java", "Python", "JavaScript", "PHP"],
    "options_hi": ["जावा", "पाइथन", "जावास्क्रिप्ट", "PHP"],
    "answer_en": "Java",
    "answer_hi": "जावा",
    "explanation_en": "Statically typed languages check variable types at compile time.",
    "explanation_hi": "स्टैटिकली टाइप्ड भाषाएँ कंपाइल टाइम पर वेरिएबल टाइप की जाँच करती हैं।"
  },
  {
    "num": 24,
    "question_en": "What is 'DNS'?",
    "question_hi": "'DNS' क्या है?",
    "options_en": ["Domain Name System", "Data Name System", "Domain Network System", "Data Network System"],
    "options_hi": ["डोमेन नेम सिस्टम", "डेटा नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डेटा नेटवर्क सिस्टम"],
    "answer_en": "Domain Name System",
    "answer_hi": "डोमेन नेम सिस्टम",
    "explanation_en": "DNS translates domain names to IP addresses.",
    "explanation_hi": "DNS डोमेन नामों को IP पतों में अनुवाद करता है।"
  },
  {
    "num": 25,
    "question_en": "Which is a backend framework?",
    "question_hi": "बैकएंड फ्रेमवर्क कौन सा है?",
    "options_en": ["Django", "React", "Angular", "Vue"],
    "options_hi": ["जैंगो", "रिएक्ट", "एंगुलर", "व्यू"],
    "answer_en": "Django",
    "answer_hi": "जैंगो",
    "explanation_en": "Django is Python web framework for backend development.",
    "explanation_hi": "जैंगो बैकएंड डेवलपमेंट के लिए पाइथन वेब फ्रेमवर्क है।"
  },
  {
    "num": 26,
    "question_en": "What is 'IoT'?",
    "question_hi": "'IoT' क्या है?",
    "options_en": ["Internet of Things", "Internet of Technology", "Integrated Online Things", "Integrated Online Technology"],
    "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटीग्रेटेड ऑनलाइन थिंग्स", "इंटीग्रेटेड ऑनलाइन टेक्नोलॉजी"],
    "answer_en": "Internet of Things",
    "answer_hi": "इंटरनेट ऑफ थिंग्स",
    "explanation_en": "IoT connects physical devices to internet for data exchange.",
    "explanation_hi": "IoT डेटा एक्सचेंज के लिए भौतिक उपकरणों को इंटरनेट से जोड़ता है।"
  },
  {
    "num": 27,
    "question_en": "Which database model uses tables?",
    "question_hi": "कौन सा डेटाबेस मॉडल टेबल का उपयोग करता है?",
    "options_en": ["Relational", "Document", "Graph", "Key-Value"],
    "options_hi": ["रिलेशनल", "डॉक्यूमेंट", "ग्राफ", "की-वैल्यू"],
    "answer_en": "Relational",
    "answer_hi": "रिलेशनल",
    "explanation_en": "Relational databases organize data into tables with rows and columns.",
    "explanation_hi": "रिलेशनल डेटाबेस डेटा को पंक्तियों और स्तंभों वाली तालिकाओं में व्यवस्थित करते हैं।"
  },
  {
    "num": 28,
    "question_en": "What is 'SEO'?",
    "question_hi": "'SEO' क्या है?",
    "options_en": ["Search Engine Optimization", "Search Engine Operation", "System Engine Optimization", "System Engine Operation"],
    "options_hi": ["सर्च इंजन ऑप्टिमाइज़ेशन", "सर्च इंजन ऑपरेशन", "सिस्टम इंजन ऑप्टिमाइज़ेशन", "सिस्टम इंजन ऑपरेशन"],
    "answer_en": "Search Engine Optimization",
    "answer_hi": "सर्च इंजन ऑप्टिमाइज़ेशन",
    "explanation_en": "SEO improves website visibility in search engine results.",
    "explanation_hi": "SEO सर्च इंजन परिणामों में वेबसाइट दृश्यता में सुधार करता है।"
  },
  {
    "num": 29,
    "question_en": "Which is a scripting language?",
    "question_hi": "स्क्रिप्टिंग भाषा कौन सी है?",
    "options_en": ["JavaScript", "C++", "Java", "C#"],
    "options_hi": ["जावास्क्रिप्ट", "C++", "जावा", "C#"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "explanation_en": "Scripting languages interpret code at runtime rather than compiling.",
    "explanation_hi": "स्क्रिप्टिंग भाषाएँ कंपाइल करने के बजाय रनटाइम में कोड की व्याख्या करती हैं।"
  },
  {
    "num": 30,
    "question_en": "What is 'virtual reality'?",
    "question_hi": "'वर्चुअल रियलिटी' क्या है?",
    "options_en": ["Computer-generated simulation environment", "Real world experience", "Video game", "Movie"],
    "options_hi": ["कंप्यूटर-जनित सिमुलेशन वातावरण", "वास्तविक दुनिया अनुभव", "वीडियो गेम", "मूवी"],
    "answer_en": "Computer-generated simulation environment",
    "answer_hi": "कंप्यूटर-जनित सिमुलेशन वातावरण",
    "explanation_en": "VR immerses users in simulated 3D environment.",
    "explanation_hi": "VR उपयोगकर्ताओं को सिम्युलेटेड 3D वातावरण में डुबो देता है।"
  },
  {
    "num": 31,
    "question_en": "Which protocol is connection-oriented?",
    "question_hi": "कौन सा प्रोटोकॉल कनेक्शन-ओरिएंटेड है?",
    "options_en": ["TCP", "UDP", "IP", "HTTP"],
    "options_hi": ["TCP", "UDP", "IP", "HTTP"],
    "answer_en": "TCP",
    "answer_hi": "TCP",
    "explanation_en": "TCP establishes connection before data transfer and ensures delivery.",
    "explanation_hi": "TCP डेटा ट्रांसफर से पहले कनेक्शन स्थापित करता है और डिलीवरी सुनिश्चित करता है।"
  },
  {
    "num": 32,
    "question_en": "What is 'big data'?",
    "question_hi": "'बिग डेटा' क्या है?",
    "options_en": ["Extremely large datasets", "Small files", "Computer programs", "Hardware devices"],
    "options_hi": ["अत्यधिक बड़े डेटासेट", "छोटी फाइलें", "कंप्यूटर प्रोग्राम", "हार्डवेयर उपकरण"],
    "answer_en": "Extremely large datasets",
    "answer_hi": "अत्यधिक बड़े डेटासेट",
    "explanation_en": "Big data refers to datasets too large for traditional processing methods.",
    "explanation_hi": "बिग डेटा पारंपरिक प्रोसेसिंग विधियों के लिए बहुत बड़े डेटासेट को संदर्भित करता है।"
  },
  {
    "num": 33,
    "question_en": "Which is a NoSQL database type?",
    "question_hi": "NoSQL डेटाबेस प्रकार कौन सा है?",
    "options_en": ["Document", "Table", "Row", "Column"],
    "options_hi": ["डॉक्यूमेंट", "टेबल", "रो", "कॉलम"],
    "answer_en": "Document",
    "answer_hi": "डॉक्यूमेंट",
    "explanation_en": "Document databases store data in JSON, BSON, or XML documents.",
    "explanation_hi": "डॉक्यूमेंट डेटाबेस JSON, BSON या XML दस्तावेज़ों में डेटा संग्रहीत करते हैं।"
  },
  {
    "num": 34,
    "question_en": "What is 'cybersecurity'?",
    "question_hi": "'साइबर सुरक्षा' क्या है?",
    "options_en": ["Protection of computer systems", "Computer programming", "Hardware design", "Network cabling"],
    "options_hi": ["कंप्यूटर सिस्टम की सुरक्षा", "कंप्यूटर प्रोग्रामिंग", "हार्डवेयर डिजाइन", "नेटवर्क केबलिंग"],
    "answer_en": "Protection of computer systems",
    "answer_hi": "कंप्यूटर सिस्टम की सुरक्षा",
    "explanation_en": "Cybersecurity protects systems, networks, and programs from digital attacks.",
    "explanation_hi": "साइबर सुरक्षा सिस्टम, नेटवर्क और प्रोग्राम को डिजिटल हमलों से बचाती है।"
  },
  {
    "num": 35,
    "question_en": "Which programming language is for statistics?",
    "question_hi": "सांख्यिकी के लिए कौन सी प्रोग्रामिंग भाषा है?",
    "options_en": ["R", "HTML", "CSS", "JavaScript"],
    "options_hi": ["R", "HTML", "CSS", "जावास्क्रिप्ट"],
    "answer_en": "R",
    "answer_hi": "R",
    "explanation_en": "R provides statistical techniques and graphical capabilities.",
    "explanation_hi": "R सांख्यिकीय तकनीक और ग्राफिकल क्षमताएँ प्रदान करता है।"
  },
  {
    "num": 36,
    "question_en": "What is 'AR'?",
    "question_hi": "'AR' क्या है?",
    "options_en": ["Augmented Reality", "Artificial Reality", "Advanced Reality", "Artificial Response"],
    "options_hi": ["ऑगमेंटेड रियलिटी", "आर्टिफिशियल रियलिटी", "एडवांस्ड रियलिटी", "आर्टिफिशियल रिस्पॉन्स"],
    "answer_en": "Augmented Reality",
    "answer_hi": "ऑगमेंटेड रियलिटी",
    "explanation_en": "AR overlays digital information on real-world environment.",
    "explanation_hi": "AR वास्तविक दुनिया के वातावरण पर डिजिटल जानकारी को ओवरले करता है।"
  },
  {
    "num": 37,
    "question_en": "Which is a JavaScript runtime?",
    "question_hi": "जावास्क्रिप्ट रनटाइम कौन सा है?",
    "options_en": ["Node.js", "Django", "Spring", "Laravel"],
    "options_hi": ["Node.js", "जैंगो", "स्प्रिंग", "लारवेल"],
    "answer_en": "Node.js",
    "answer_hi": "Node.js",
    "explanation_en": "Node.js executes JavaScript code outside web browser.",
    "explanation_hi": "Node.js वेब ब्राउज़र के बाहर जावास्क्रिप्ट कोड निष्पादित करता है।"
  },
  {
    "num": 38,
    "question_en": "What is 'open source' software?",
    "question_hi": "'ओपन सोर्स' सॉफ्टवेयर क्या है?",
    "options_en": ["Source code publicly available", "Expensive software", "Hardware device", "Operating system"],
    "options_hi": ["सार्वजनिक रूप से उपलब्ध स्रोत कोड", "महंगा सॉफ्टवेयर", "हार्डवेयर उपकरण", "ऑपरेटिंग सिस्टम"],
    "answer_en": "Source code publicly available",
    "answer_hi": "सार्वजनिक रूप से उपलब्ध स्रोत कोड",
    "explanation_en": "Open source allows users to study, change, and distribute software.",
    "explanation_hi": "ओपन सोर्स उपयोगकर्ताओं को सॉफ्टवेयर का अध्ययन, परिवर्तन और वितरण करने की अनुमति देता है।"
  },
  {
    "num": 39,
    "question_en": "Which database language manipulates data?",
    "question_hi": "कौन सी डेटाबेस भाषा डेटा में हेरफेर करती है?",
    "options_en": ["DML", "DDL", "DCL", "TCL"],
    "options_hi": ["DML", "DDL", "DCL", "TCL"],
    "answer_en": "DML",
    "answer_hi": "DML",
    "explanation_en": "DML (Data Manipulation Language) includes SELECT, INSERT, UPDATE, DELETE.",
    "explanation_hi": "DML (डेटा मैनिपुलेशन लैंग्वेज) में SELECT, INSERT, UPDATE, DELETE शामिल हैं।"
  },
  {
    "num": 40,
    "question_en": "What is 'responsive design'?",
    "question_hi": "'रिस्पॉन्सिव डिज़ाइन' क्या है?",
    "options_en": ["Design adapting to screen size", "Fast design", "Colorful design", "Animated design"],
    "options_hi": ["स्क्रीन आकार के अनुकूल डिजाइन", "तेज़ डिजाइन", "रंगीन डिजाइन", "एनिमेटेड डिजाइन"],
    "answer_en": "Design adapting to screen size",
    "answer_hi": "स्क्रीन आकार के अनुकूल डिजाइन",
    "explanation_en": "Responsive design uses CSS media queries for different devices.",
    "explanation_hi": "रिस्पॉन्सिव डिज़ाइन विभिन्न उपकरणों के लिए CSS मीडिया क्वेरी का उपयोग करता है।"
  },
  {
    "num": 41,
    "question_en": "Which is a PHP framework?",
    "question_hi": "PHP फ्रेमवर्क कौन सा है?",
    "options_en": ["Laravel", "Django", "Spring", "React"],
    "options_hi": ["लारवेल", "जैंगो", "स्प्रिंग", "रिएक्ट"],
    "answer_en": "Laravel",
    "answer_hi": "लारवेल",
    "explanation_en": "Laravel is PHP web application framework following MVC pattern.",
    "explanation_hi": "लारवेल MVC पैटर्न का पालन करने वाला PHP वेब एप्लिकेशन फ्रेमवर्क है।"
  },
  {
    "num": 42,
    "question_en": "What is 'data mining'?",
    "question_hi": "'डेटा माइनिंग' क्या है?",
    "options_en": ["Extracting patterns from large datasets", "Storing data", "Deleting data", "Printing data"],
    "options_hi": ["बड़े डेटासेट से पैटर्न निकालना", "डेटा संग्रहीत करना", "डेटा हटाना", "डेटा प्रिंट करना"],
    "answer_en": "Extracting patterns from large datasets",
    "answer_hi": "बड़े डेटासेट से पैटर्न निकालना",
    "explanation_en": "Data mining discovers patterns in large datasets using machine learning.",
    "explanation_hi": "डेटा माइनिंग मशीन लर्निंग का उपयोग करके बड़े डेटासेट में पैटर्न खोजता है।"
  },
  {
    "num": 43,
    "question_en": "Which protocol is connectionless?",
    "question_hi": "कौन सा प्रोटोकॉल कनेक्शनलेस है?",
    "options_en": ["UDP", "TCP", "HTTP", "FTP"],
    "options_hi": ["UDP", "TCP", "HTTP", "FTP"],
    "answer_en": "UDP",
    "answer_hi": "UDP",
    "explanation_en": "UDP sends datagrams without establishing connection.",
    "explanation_hi": "UDP कनेक्शन स्थापित किए बिना डेटाग्राम भेजता है।"
  },
  {
    "num": 44,
    "question_en": "What is 'CMS'?",
    "question_hi": "'CMS' क्या है?",
    "options_en": ["Content Management System", "Computer Management System", "Content Manipulation System", "Computer Manipulation System"],
    "options_hi": ["कंटेंट मैनेजमेंट सिस्टम", "कंप्यूटर मैनेजमेंट सिस्टम", "कंटेंट मैनिपुलेशन सिस्टम", "कंप्यूटर मैनिपुलेशन सिस्टम"],
    "answer_en": "Content Management System",
    "answer_hi": "कंटेंट मैनेजमेंट सिस्टम",
    "explanation_en": "CMS manages creation and modification of digital content.",
    "explanation_hi": "CMS डिजिटल सामग्री के निर्माण और संशोधन का प्रबंधन करता है।"
  },
  {
    "num": 45,
    "question_en": "Which is a Java framework?",
    "question_hi": "जावा फ्रेमवर्क कौन सा है?",
    "options_en": ["Spring", "Django", "Laravel", "Express"],
    "options_hi": ["स्प्रिंग", "जैंगो", "लारवेल", "एक्सप्रेस"],
    "answer_en": "Spring",
    "answer_hi": "स्प्रिंग",
    "explanation_en": "Spring is Java framework for enterprise applications.",
    "explanation_hi": "स्प्रिंग एंटरप्राइज़ एप्लिकेशन के लिए जावा फ्रेमवर्क है।"
  },
  {
    "num": 46,
    "question_en": "What is 'metadata'?",
    "question_hi": "'मेटाडेटा' क्या है?",
    "options_en": ["Data about data", "Large data", "Small data", "Deleted data"],
    "options_hi": ["डेटा के बारे में डेटा", "बड़ा डेटा", "छोटा डेटा", "हटाया गया डेटा"],
    "answer_en": "Data about data",
    "answer_hi": "डेटा के बारे में डेटा",
    "explanation_en": "Metadata describes characteristics of other data.",
    "explanation_hi": "मेटाडेटा अन्य डेटा की विशेषताओं का वर्णन करता है।"
  },
  {
    "num": 47,
    "question_en": "Which is a Python web framework?",
    "question_hi": "पाइथन वेब फ्रेमवर्क कौन सा है?",
    "options_en": ["Flask", "React", "Angular", "Vue"],
    "options_hi": ["फ्लास्क", "रिएक्ट", "एंगुलर", "व्यू"],
    "answer_en": "Flask",
    "answer_hi": "फ्लास्क",
    "explanation_en": "Flask is micro web framework written in Python.",
    "explanation_hi": "फ्लास्क पाइथन में लिखा गया माइक्रो वेब फ्रेमवर्क है।"
  },
  {
    "num": 48,
    "question_en": "What is 'cache memory'?",
    "question_hi": "'कैश मेमोरी' क्या है?",
    "options_en": ["Fast memory for frequently used data", "Slow memory", "Permanent storage", "External storage"],
    "options_hi": ["अक्सर उपयोग किए जाने वाले डेटा के लिए तेज़ मेमोरी", "धीमी मेमोरी", "स्थायी संग्रहण", "बाहरी संग्रहण"],
    "answer_en": "Fast memory for frequently used data",
    "answer_hi": "अक्सर उपयोग किए जाने वाले डेटा के लिए तेज़ मेमोरी",
    "explanation_en": "Cache stores frequently accessed data for faster retrieval.",
    "explanation_hi": "कैश तेजी से पुनर्प्राप्ति के लिए अक्सर एक्सेस किए गए डेटा को संग्रहीत करता है।"
  },
  {
    "num": 49,
    "question_en": "Which is a mobile operating system?",
    "question_hi": "मोबाइल ऑपरेटिंग सिस्टम कौन सा है?",
    "options_en": ["Android", "Windows", "Linux", "macOS"],
    "options_hi": ["एंड्रॉयड", "विंडोज", "लिनक्स", "macOS"],
    "answer_en": "Android",
    "answer_hi": "एंड्रॉयड",
    "explanation_en": "Android is mobile OS developed by Google.",
    "explanation_hi": "एंड्रॉयड Google द्वारा विकसित मोबाइल OS है।"
  },
  {
    "num": 50,
    "question_en": "What is 'encryption'?",
    "question_hi": "'एन्क्रिप्शन' क्या है?",
    "options_en": ["Converting data to secure code", "Deleting data", "Printing data", "Storing data"],
    "options_hi": ["डेटा को सुरक्षित कोड में बदलना", "डेटा हटाना", "डेटा प्रिंट करना", "डेटा संग्रहीत करना"],
    "answer_en": "Converting data to secure code",
    "answer_hi": "डेटा को सुरक्षित कोड में बदलना",
    "explanation_en": "Encryption transforms data to prevent unauthorized access.",
    "explanation_hi": "एन्क्रिप्शन अनधिकृत पहुँच को रोकने के लिए डेटा को रूपांतरित करता है।"
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

