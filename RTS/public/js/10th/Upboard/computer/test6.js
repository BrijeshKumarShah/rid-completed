


const questions =[
  {
    "num": 1,
    "question_en": "Which component stores the operating system?",
    "question_hi": "कौन सा घटक ऑपरेटिंग सिस्टम संग्रहीत करता है?",
    "options_en": ["Hard Disk", "RAM", "CPU", "Monitor"],
    "options_hi": ["हार्ड डिस्क", "RAM", "CPU", "मॉनिटर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Operating system is permanently stored on hard disk and loaded into RAM during boot.",
    "explanation_hi": "ऑपरेटिंग सिस्टम स्थायी रूप से हार्ड डिस्क पर संग्रहीत होता है और बूट के दौरान RAM में लोड होता है।"
  },
  {
    "num": 2,
    "question_en": "What is the purpose of a scanner?",
    "question_hi": "स्कैनर का उद्देश्य क्या है?",
    "options_en": ["Convert physical documents to digital", "Print documents", "Display images", "Type text"],
    "options_hi": ["भौतिक दस्तावेजों को डिजिटल में बदलना", "दस्तावेज प्रिंट करना", "छवियाँ प्रदर्शित करना", "टेक्स्ट टाइप करना"],
    "answer_en": "Convert physical documents to digital",
    "answer_hi": "भौतिक दस्तावेजों को डिजिटल में बदलना",
    "explanation_en": "Scanner creates digital copies of photographs, documents, or other physical items.",
    "explanation_hi": "स्कैनर फोटोग्राफ, दस्तावेज या अन्य भौतिक वस्तुओं की डिजिटल प्रतियां बनाता है।"
  },
  {
    "num": 3,
    "question_en": "Which programming language is used for web page structure?",
    "question_hi": "वेब पेज संरचना के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["HTML", "Python", "Java", "C++"],
    "options_hi": ["HTML", "पाइथन", "जावा", "C++"],
    "answer_en": "HTML",
    "answer_hi": "HTML",
    "explanation_en": "HTML provides the basic structure of web pages which is enhanced by CSS and JavaScript.",
    "explanation_hi": "HTML वेब पेजों की बुनियादी संरचना प्रदान करता है जिसे CSS और JavaScript द्वारा बढ़ाया जाता है।"
  },
  {
    "num": 4,
    "question_en": "What does 'ISP' stand for?",
    "question_hi": "'ISP' का क्या अर्थ है?",
    "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
    "options_hi": ["इंटरनेट सेवा प्रदाता", "इंटरनेट सिस्टम प्रदाता", "अंतर्राष्ट्रीय सेवा प्रदाता", "अंतर्राष्ट्रीय सिस्टम प्रदाता"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सेवा प्रदाता",
    "explanation_en": "ISP provides individuals and organizations access to the internet.",
    "explanation_hi": "ISP व्यक्तियों और संगठनों को इंटरनेट पहुंच प्रदान करता है।"
  },
  {
    "num": 5,
    "question_en": "Which device is used for voice input?",
    "question_hi": "वॉइस इनपुट के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Microphone", "Speaker", "Headphones", "Webcam"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "हेडफोन", "वेबकैम"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन",
    "explanation_en": "Microphone converts sound waves into electrical signals for computer processing.",
    "explanation_hi": "माइक्रोफोन कंप्यूटर प्रोसेसिंग के लिए ध्वनि तरंगों को विद्युत संकेतों में बदलता है।"
  },
  {
    "num": 6,
    "question_en": "What is the function of a webcam?",
    "question_hi": "वेबकैम का कार्य क्या है?",
    "options_en": ["Capture video for video calls", "Print documents", "Scan documents", "Play sound"],
    "options_hi": ["वीडियो कॉल के लिए वीडियो कैप्चर करना", "दस्तावेज प्रिंट करना", "दस्तावेज स्कैन करना", "ध्वनि चलाना"],
    "answer_en": "Capture video for video calls",
    "answer_hi": "वीडियो कॉल के लिए वीडियो कैप्चर करना",
    "explanation_en": "Webcam captures video and transmits it over the internet for video conferencing.",
    "explanation_hi": "वेबकैम वीडियो कैप्चर करता है और वीडियो कॉन्फ्रेंसिंग के लिए इंटरनेट पर प्रसारित करता है।"
  },
  {
    "num": 7,
    "question_en": "Which programming language is case-sensitive?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा केस-संवेदी है?",
    "options_en": ["Python", "HTML", "CSS", "All of these"],
    "options_hi": ["पाइथन", "HTML", "CSS", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "explanation_en": "Most programming languages distinguish between uppercase and lowercase letters.",
    "explanation_hi": "अधिकांश प्रोग्रामिंग भाषाएं अपरकेस और लोअरकेस अक्षरों के बीच अंतर करती हैं।"
  },
  {
    "num": 8,
    "question_en": "What does 'DNS' stand for?",
    "question_hi": "'DNS' का क्या अर्थ है?",
    "options_en": ["Domain Name System", "Data Name System", "Domain Network System", "Data Network System"],
    "options_hi": ["डोमेन नेम सिस्टम", "डेटा नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डेटा नेटवर्क सिस्टम"],
    "answer_en": "Domain Name System",
    "answer_hi": "डोमेन नेम सिस्टम",
    "explanation_en": "DNS translates human-readable domain names to machine-readable IP addresses.",
    "explanation_hi": "DNS मानव-पठनीय डोमेन नामों को मशीन-पठनीय IP पतों में अनुवाद करता है।"
  },
  {
    "num": 9,
    "question_en": "Which device provides audio output?",
    "question_hi": "कौन सा उपकरण ऑडियो आउटपुट प्रदान करता है?",
    "options_en": ["Speakers", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["स्पीकर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Speakers",
    "answer_hi": "स्पीकर",
    "explanation_en": "Speakers convert electrical signals from computer into audible sound waves.",
    "explanation_hi": "स्पीकर कंप्यूटर से विद्युत संकेतों को श्रव्य ध्वनि तरंगों में बदलते हैं।"
  },
  {
    "num": 10,
    "question_en": "What is the purpose of a touchscreen?",
    "question_hi": "टचस्क्रीन का उद्देश्य क्या है?",
    "options_en": ["Direct input through touch", "Keyboard input", "Mouse input", "Voice input"],
    "options_hi": ["टच के माध्यम से प्रत्यक्ष इनपुट", "कीबोर्ड इनपुट", "माउस इनपुट", "वॉइस इनपुट"],
    "answer_en": "Direct input through touch",
    "answer_hi": "टच के माध्यम से प्रत्यक्ष इनपुट",
    "explanation_en": "Touchscreen allows users to interact directly with display using finger or stylus.",
    "explanation_hi": "टचस्क्रीन उपयोगकर्ताओं को उंगली या स्टाइलस का उपयोग करके सीधे डिस्प्ले के साथ इंटरैक्ट करने की अनुमति देता है।"
  },
  {
    "num": 11,
    "question_en": "Which programming language is interpreted rather than compiled?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा कंपाइल की बजाय इंटरप्रेट की जाती है?",
    "options_en": ["Python", "C++", "Java", "C"],
    "options_hi": ["पाइथन", "C++", "जावा", "C"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "Python code is executed line by line by interpreter without separate compilation.",
    "explanation_hi": "पाइथन कोड अलग कंपाइलेशन के बिना इंटरप्रेटर द्वारा लाइन दर लाइन निष्पादित किया जाता है।"
  },
  {
    "num": 12,
    "question_en": "What does 'VPN' stand for?",
    "question_hi": "'VPN' का क्या अर्थ है?",
    "options_en": ["Virtual Private Network", "Virtual Public Network", "Visual Private Network", "Visual Public Network"],
    "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "विजुअल प्राइवेट नेटवर्क", "विजुअल पब्लिक नेटवर्क"],
    "answer_en": "Virtual Private Network",
    "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
    "explanation_en": "VPN extends private network across public network for secure connections.",
    "explanation_hi": "VPN सुरक्षित कनेक्शन के लिए सार्वजनिक नेटवर्क में निजी नेटवर्क का विस्तार करता है।"
  },
  {
    "num": 13,
    "question_en": "Which component determines computer speed?",
    "question_hi": "कौन सा घटक कंप्यूटर की गति निर्धारित करता है?",
    "options_en": ["CPU", "Monitor", "Keyboard", "Mouse"],
    "options_hi": ["CPU", "मॉनिटर", "कीबोर्ड", "माउस"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "explanation_en": "CPU clock speed and number of cores significantly affect computer performance.",
    "explanation_hi": "CPU क्लॉक स्पीड और कोर की संख्या कंप्यूटर प्रदर्शन को महत्वपूर्ण रूप से प्रभावित करती है।"
  },
  {
    "num": 14,
    "question_en": "What is the purpose of a graphics card?",
    "question_hi": "ग्राफिक्स कार्ड का उद्देश्य क्या है?",
    "options_en": ["Process and display images/videos", "Store data", "Type text", "Scan documents"],
    "options_hi": ["छवियों/वीडियो को प्रोसेस और प्रदर्शित करना", "डेटा संग्रहीत करना", "टेक्स्ट टाइप करना", "दस्तावेज स्कैन करना"],
    "answer_en": "Process and display images/videos",
    "answer_hi": "छवियों/वीडियो को प्रोसेस और प्रदर्शित करना",
    "explanation_en": "Graphics card renders images, animations and video for display on monitor.",
    "explanation_hi": "ग्राफिक्स कार्ड मॉनिटर पर प्रदर्शन के लिए छवियों, एनिमेशन और वीडियो को रेंडर करता है।"
  },
  {
    "num": 15,
    "question_en": "Which programming language uses indentation for code blocks?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा कोड ब्लॉक के लिए इंडेंटेशन का उपयोग करती है?",
    "options_en": ["Python", "Java", "C++", "JavaScript"],
    "options_hi": ["पाइथन", "जावा", "C++", "जावास्क्रिप्ट"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "Python uses indentation (whitespace) to define code blocks instead of braces.",
    "explanation_hi": "पाइथन कोड ब्लॉक को परिभाषित करने के लिए ब्रेस के बजाय इंडेंटेशन (व्हाइटस्पेस) का उपयोग करता है।"
  },
  {
    "num": 16,
    "question_en": "What does 'SSD' stand for?",
    "question_hi": "'SSD' का क्या अर्थ है?",
    "options_en": ["Solid State Drive", "Super Speed Drive", "Solid Storage Drive", "Super Storage Drive"],
    "options_hi": ["सॉलिड स्टेट ड्राइव", "सुपर स्पीड ड्राइव", "सॉलिड स्टोरेज ड्राइव", "सुपर स्टोरेज ड्राइव"],
    "answer_en": "Solid State Drive",
    "answer_hi": "सॉलिड स्टेट ड्राइव",
    "explanation_en": "SSD uses flash memory instead of spinning disks, making it faster than HDD.",
    "explanation_hi": "SSD घूमने वाली डिस्क के बजाय फ्लैश मेमोरी का उपयोग करता है, जो इसे HDD से तेज़ बनाता है।"
  },
  {
    "num": 17,
    "question_en": "Which device connects to wireless networks?",
    "question_hi": "कौन सा उपकरण वायरलेस नेटवर्क से जुड़ता है?",
    "options_en": ["WiFi Adapter", "Ethernet Cable", "Modem", "Router"],
    "options_hi": ["वाईफाई एडाप्टर", "ईथरनेट केबल", "मॉडेम", "राउटर"],
    "answer_en": "WiFi Adapter",
    "answer_hi": "वाईफाई एडाप्टर",
    "explanation_en": "WiFi adapter enables computer to connect to wireless networks.",
    "explanation_hi": "वाईफाई एडाप्टर कंप्यूटर को वायरलेस नेटवर्क से जोड़ने में सक्षम बनाता है।"
  },
  {
    "num": 18,
    "question_en": "What is the purpose of a sound card?",
    "question_hi": "साउंड कार्ड का उद्देश्य क्या है?",
    "options_en": ["Process audio signals", "Process video signals", "Store data", "Connect to internet"],
    "options_hi": ["ऑडियो सिग्नल प्रोसेस करना", "वीडियो सिग्नल प्रोसेस करना", "डेटा संग्रहीत करना", "इंटरनेट से कनेक्ट होना"],
    "answer_en": "Process audio signals",
    "answer_hi": "ऑडियो सिग्नल प्रोसेस करना",
    "explanation_en": "Sound card processes audio input/output, enabling recording and playback.",
    "explanation_hi": "साउंड कार्ड ऑडियो इनपुट/आउटपुट को प्रोसेस करता है, रिकॉर्डिंग और प्लेबैक को सक्षम करता है।"
  },
  {
    "num": 19,
    "question_en": "Which programming language is primarily used for iOS apps?",
    "question_hi": "iOS ऐप के लिए मुख्य रूप से किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["Swift", "Java", "Python", "C++"],
    "options_hi": ["स्विफ्ट", "जावा", "पाइथन", "C++"],
    "answer_en": "Swift",
    "answer_hi": "स्विफ्ट",
    "explanation_en": "Swift is programming language developed by Apple specifically for iOS and macOS.",
    "explanation_hi": "स्विफ्ट Apple द्वारा विशेष रूप से iOS और macOS के लिए विकसित प्रोग्रामिंग भाषा है।"
  },
  {
    "num": 20,
    "question_en": "What does 'HDD' stand for?",
    "question_hi": "'HDD' का क्या अर्थ है?",
    "options_en": ["Hard Disk Drive", "High Density Disk", "Hard Digital Drive", "High Digital Disk"],
    "options_hi": ["हार्ड डिस्क ड्राइव", "हाई डेंसिटी डिस्क", "हार्ड डिजिटल ड्राइव", "हाई डिजिटल डिस्क"],
    "answer_en": "Hard Disk Drive",
    "answer_hi": "हार्ड डिस्क ड्राइव",
    "explanation_en": "HDD stores data on spinning magnetic disks called platters.",
    "explanation_hi": "HDD प्लैटर नामक घूमने वाली चुंबकीय डिस्क पर डेटा संग्रहीत करता है।"
  },
  {
    "num": 21,
    "question_en": "Which component cools the computer?",
    "question_hi": "कौन सा घटक कंप्यूटर को ठंडा करता है?",
    "options_en": ["Cooling Fan", "Power Supply", "Motherboard", "RAM"],
    "options_hi": ["कूलिंग फैन", "पावर सप्लाई", "मदरबोर्ड", "RAM"],
    "answer_en": "Cooling Fan",
    "answer_hi": "कूलिंग फैन",
    "explanation_en": "Cooling fan dissipates heat generated by computer components to prevent overheating.",
    "explanation_hi": "कूलिंग फैन ओवरहीटिंग को रोकने के लिए कंप्यूटर घटकों द्वारा उत्पन्न गर्मी को दूर करता है।"
  },
  {
    "num": 22,
    "question_en": "What is the purpose of a network card?",
    "question_hi": "नेटवर्क कार्ड का उद्देश्य क्या है?",
    "options_en": ["Connect computer to network", "Store data", "Process audio", "Display graphics"],
    "options_hi": ["कंप्यूटर को नेटवर्क से जोड़ना", "डेटा संग्रहीत करना", "ऑडियो प्रोसेस करना", "ग्राफिक्स प्रदर्शित करना"],
    "answer_en": "Connect computer to network",
    "answer_hi": "कंप्यूटर को नेटवर्क से जोड़ना",
    "explanation_en": "Network card (NIC) provides physical connection between computer and network.",
    "explanation_hi": "नेटवर्क कार्ड (NIC) कंप्यूटर और नेटवर्क के बीच भौतिक कनेक्शन प्रदान करता है।"
  },
  {
    "num": 23,
    "question_en": "Which programming language is used for Android app development?",
    "question_hi": "एंड्रॉयड ऐप डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["Kotlin", "Python", "HTML", "CSS"],
    "options_hi": ["कोटलिन", "पाइथन", "HTML", "CSS"],
    "answer_en": "Kotlin",
    "answer_hi": "कोटलिन",
    "explanation_en": "Kotlin is now preferred language for Android development, alongside Java.",
    "explanation_hi": "कोटलिन अब जावा के साथ-साथ एंड्रॉयड डेवलपमेंट के लिए पसंदीदा भाषा है।"
  },
  {
    "num": 24,
    "question_en": "What does 'BIOS' stand for?",
    "question_hi": "'BIOS' का क्या अर्थ है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS initializes hardware during boot process and provides runtime services.",
    "explanation_hi": "BIOS बूट प्रक्रिया के दौरान हार्डवेयर को इनिशियलाइज़ करता है और रनटाइम सेवाएं प्रदान करता है।"
  },
  {
    "num": 25,
    "question_en": "Which component supplies power to computer?",
    "question_hi": "कौन सा घटक कंप्यूटर को बिजली की आपूर्ति करता है?",
    "options_en": ["Power Supply Unit", "Motherboard", "CPU", "RAM"],
    "options_hi": ["पावर सप्लाई यूनिट", "मदरबोर्ड", "CPU", "RAM"],
    "answer_en": "Power Supply Unit",
    "answer_hi": "पावर सप्लाई यूनिट",
    "explanation_en": "PSU converts AC power from wall outlet to DC power for computer components.",
    "explanation_hi": "PSU दीवार आउटलेट से एसी पावर को कंप्यूटर घटकों के लिए डीसी पावर में बदलता है।"
  },
  {
    "num": 26,
    "question_en": "What is the purpose of a barcode scanner?",
    "question_hi": "बारकोड स्कैनर का उद्देश्य क्या है?",
    "options_en": ["Read barcode information", "Print documents", "Scan photos", "Type text"],
    "options_hi": ["बारकोड जानकारी पढ़ना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना", "टेक्स्ट टाइप करना"],
    "answer_en": "Read barcode information",
    "answer_hi": "बारकोड जानकारी पढ़ना",
    "explanation_en": "Barcode scanner reads barcode labels and converts them to digital information.",
    "explanation_hi": "बारकोड स्कैनर बारकोड लेबल पढ़ता है और उन्हें डिजिटल जानकारी में बदलता है।"
  },
  {
    "num": 27,
    "question_en": "Which programming language is used for statistical analysis?",
    "question_hi": "सांख्यिकीय विश्लेषण के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["R", "Java", "C++", "HTML"],
    "options_hi": ["R", "जावा", "C++", "HTML"],
    "answer_en": "R",
    "answer_hi": "R",
    "explanation_en": "R is specifically designed for statistical computing and data visualization.",
    "explanation_hi": "R विशेष रूप से सांख्यिकीय कंप्यूटिंग और डेटा विज़ुअलाइज़ेशन के लिए डिज़ाइन किया गया है।"
  },
  {
    "num": 28,
    "question_en": "What does 'UEFI' stand for?",
    "question_hi": "'UEFI' का क्या अर्थ है?",
    "options_en": ["Unified Extensible Firmware Interface", "Universal Extensible Firmware Interface", "Unified Electronic Firmware Interface", "Universal Electronic Firmware Interface"],
    "options_hi": ["यूनिफाइड एक्स्टेंसिबल फर्मवेयर इंटरफेस", "यूनिवर्सल एक्स्टेंसिबल फर्मवेयर इंटरफेस", "यूनिफाइड इलेक्ट्रॉनिक फर्मवेयर इंटरफेस", "यूनिवर्सल इलेक्ट्रॉनिक फर्मवेयर इंटरफेस"],
    "answer_en": "Unified Extensible Firmware Interface",
    "answer_hi": "यूनिफाइड एक्स्टेंसिबल फर्मवेयर इंटरफेस",
    "explanation_en": "UEFI is modern replacement for BIOS with more features and faster boot times.",
    "explanation_hi": "UEFI BIOS का आधुनिक प्रतिस्थापन है जिसमें अधिक सुविधाएँ और तेज़ बूट समय है।"
  },
  {
    "num": 29,
    "question_en": "Which component connects all computer parts?",
    "question_hi": "कौन सा घटक सभी कंप्यूटर भागों को जोड़ता है?",
    "options_en": ["Motherboard", "CPU", "RAM", "Hard Disk"],
    "options_hi": ["मदरबोर्ड", "CPU", "RAM", "हार्ड डिस्क"],
    "answer_en": "Motherboard",
    "answer_hi": "मदरबोर्ड",
    "explanation_en": "Motherboard provides electrical connections for communication between components.",
    "explanation_hi": "मदरबोर्ड घटकों के बीच संचार के लिए विद्युत कनेक्शन प्रदान करता है।"
  },
  {
    "num": 30,
    "question_en": "What is the purpose of a joystick?",
    "question_hi": "जॉयस्टिक का उद्देश्य क्या है?",
    "options_en": ["Control games or simulations", "Type text", "Print documents", "Scan photos"],
    "options_hi": ["गेम या सिमुलेशन नियंत्रित करना", "टेक्स्ट टाइप करना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना"],
    "answer_en": "Control games or simulations",
    "answer_hi": "गेम या सिमुलेशन नियंत्रित करना",
    "explanation_en": "Joystick provides directional control input for gaming or flight simulation.",
    "explanation_hi": "जॉयस्टिक गेमिंग या फ्लाइट सिमुलेशन के लिए दिशात्मक नियंत्रण इनपुट प्रदान करता है।"
  },
  {
    "num": 31,
    "question_en": "Which programming language is used for database queries?",
    "question_hi": "डेटाबेस क्वेरी के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["SQL", "Python", "Java", "C++"],
    "options_hi": ["SQL", "पाइथन", "जावा", "C++"],
    "answer_en": "SQL",
    "answer_hi": "SQL",
    "explanation_en": "SQL (Structured Query Language) is standard language for relational database management.",
    "explanation_hi": "SQL (स्ट्रक्चर्ड क्वेरी लैंग्वेज) रिलेशनल डेटाबेस प्रबंधन के लिए मानक भाषा है।"
  },
  {
    "num": 32,
    "question_en": "What does 'GPU' stand for?",
    "question_hi": "'GPU' का क्या अर्थ है?",
    "options_en": ["Graphics Processing Unit", "Graphics Performance Unit", "General Processing Unit", "General Performance Unit"],
    "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स परफॉर्मेंस यूनिट", "जनरल प्रोसेसिंग यूनिट", "जनरल परफॉर्मेंस यूनिट"],
    "answer_en": "Graphics Processing Unit",
    "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
    "explanation_en": "GPU specializes in processing graphics and parallel computations.",
    "explanation_hi": "GPU ग्राफिक्स और समानांतर गणना प्रसंस्करण में विशेषज्ञता रखता है।"
  },
  {
    "num": 33,
    "question_en": "Which component stores temporary data?",
    "question_hi": "कौन सा घटक अस्थायी डेटा संग्रहीत करता है?",
    "options_en": ["RAM", "Hard Disk", "SSD", "DVD"],
    "options_hi": ["RAM", "हार्ड डिस्क", "SSD", "DVD"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM stores data temporarily while computer is running for quick access.",
    "explanation_hi": "RAM कंप्यूटर चलने के दौरान त्वरित पहुंच के लिए डेटा को अस्थायी रूप से संग्रहीत करता है।"
  },
  {
    "num": 34,
    "question_en": "What is the purpose of a light pen?",
    "question_hi": "लाइट पेन का उद्देश्य क्या है?",
    "options_en": ["Draw directly on screen", "Type text", "Print documents", "Scan photos"],
    "options_hi": ["स्क्रीन पर सीधे ड्रा करना", "टेक्स्ट टाइप करना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना"],
    "answer_en": "Draw directly on screen",
    "answer_hi": "स्क्रीन पर सीधे ड्रा करना",
    "explanation_en": "Light pen allows users to point to or draw directly on CRT monitor screen.",
    "explanation_hi": "लाइट पेन उपयोगकर्ताओं को CRT मॉनिटर स्क्रीन पर सीधे इंगित करने या ड्रा करने की अनुमति देता है।"
  },
  {
    "num": 35,
    "question_en": "Which programming language is used for scientific computing?",
    "question_hi": "वैज्ञानिक कंप्यूटिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["Fortran", "HTML", "CSS", "JavaScript"],
    "options_hi": ["फोरट्रान", "HTML", "CSS", "जावास्क्रिप्ट"],
    "answer_en": "Fortran",
    "answer_hi": "फोरट्रान",
    "explanation_en": "Fortran is specifically designed for scientific and engineering calculations.",
    "explanation_hi": "फोरट्रान विशेष रूप से वैज्ञानिक और इंजीनियरिंग गणनाओं के लिए डिज़ाइन किया गया है।"
  },
  {
    "num": 36,
    "question_en": "What does 'NIC' stand for?",
    "question_hi": "'NIC' का क्या अर्थ है?",
    "options_en": ["Network Interface Card", "Network Internet Card", "Network Interface Controller", "Network Internet Controller"],
    "options_hi": ["नेटवर्क इंटरफेस कार्ड", "नेटवर्क इंटरनेट कार्ड", "नेटवर्क इंटरफेस कंट्रोलर", "नेटवर्क इंटरनेट कंट्रोलर"],
    "answer_en": "Network Interface Card",
    "answer_hi": "नेटवर्क इंटरफेस कार्ड",
    "explanation_en": "NIC provides hardware interface between computer and network.",
    "explanation_hi": "NIC कंप्यूटर और नेटवर्क के बीच हार्डवेयर इंटरफेस प्रदान करता है।"
  },
  {
    "num": 37,
    "question_en": "Which component reads optical discs?",
    "question_hi": "कौन सा घटक ऑप्टिकल डिस्क पढ़ता है?",
    "options_en": ["Optical Drive", "Hard Disk", "SSD", "RAM"],
    "options_hi": ["ऑप्टिकल ड्राइव", "हार्ड डिस्क", "SSD", "RAM"],
    "answer_en": "Optical Drive",
    "answer_hi": "ऑप्टिकल ड्राइव",
    "explanation_en": "Optical drive uses laser to read data from CDs, DVDs, or Blu-ray discs.",
    "explanation_hi": "ऑप्टिकल ड्राइव CD, DVD या ब्लू-रे डिस्क से डेटा पढ़ने के लिए लेजर का उपयोग करता है।"
  },
  {
    "num": 38,
    "question_en": "What is the purpose of a digitizer tablet?",
    "question_hi": "डिजिटाइजर टैबलेट का उद्देश्य क्या है?",
    "options_en": ["Digital drawing and handwriting", "Typing text", "Printing documents", "Scanning photos"],
    "options_hi": ["डिजिटल ड्राइंग और हस्तलेखन", "टेक्स्ट टाइप करना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना"],
    "answer_en": "Digital drawing and handwriting",
    "answer_hi": "डिजिटल ड्राइंग और हस्तलेखन",
    "explanation_en": "Digitizer tablet allows precise drawing and handwriting input using stylus.",
    "explanation_hi": "डिजिटाइजर टैबलेट स्टाइलस का उपयोग करके सटीक ड्राइंग और हस्तलेखन इनपुट की अनुमति देता है।"
  },
  {
    "num": 39,
    "question_en": "Which programming language is used for system programming?",
    "question_hi": "सिस्टम प्रोग्रामिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["C", "HTML", "CSS", "JavaScript"],
    "options_hi": ["C", "HTML", "CSS", "जावास्क्रिप्ट"],
    "answer_en": "C",
    "answer_hi": "C",
    "explanation_en": "C is widely used for operating systems, compilers, and low-level programming.",
    "explanation_hi": "C का व्यापक रूप से ऑपरेटिंग सिस्टम, कंपाइलर और लो-लेवल प्रोग्रामिंग के लिए उपयोग किया जाता है।"
  },
  {
    "num": 40,
    "question_en": "What does 'ALU' stand for?",
    "question_hi": "'ALU' का क्या अर्थ है?",
    "options_en": ["Arithmetic Logic Unit", "Arithmetic Learning Unit", "Advanced Logic Unit", "Advanced Learning Unit"],
    "options_hi": ["अंकगणित तर्क इकाई", "अंकगणित सीखने की इकाई", "उन्नत तर्क इकाई", "उन्नत सीखने की इकाई"],
    "answer_en": "Arithmetic Logic Unit",
    "answer_hi": "अंकगणित तर्क इकाई",
    "explanation_en": "ALU performs arithmetic and logical operations in CPU.",
    "explanation_hi": "ALU CPU में अंकगणित और तार्किक संचालन करता है।"
  },
  {
    "num": 41,
    "question_en": "Which component provides permanent storage?",
    "question_hi": "कौन सा घटक स्थायी संग्रहण प्रदान करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Registers"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard disk retains data even when computer is powered off.",
    "explanation_hi": "हार्ड डिस्क कंप्यूटर बंद होने पर भी डेटा बनाए रखती है।"
  },
  {
    "num": 42,
    "question_en": "What is the purpose of a biometric scanner?",
    "question_hi": "बायोमेट्रिक स्कैनर का उद्देश्य क्या है?",
    "options_en": ["Identify individuals using unique traits", "Scan documents", "Print photos", "Type text"],
    "options_hi": ["अद्वितीय लक्षणों का उपयोग करके व्यक्तियों की पहचान करना", "दस्तावेज स्कैन करना", "फोटो प्रिंट करना", "टेक्स्ट टाइप करना"],
    "answer_en": "Identify individuals using unique traits",
    "answer_hi": "अद्वितीय लक्षणों का उपयोग करके व्यक्तियों की पहचान करना",
    "explanation_en": "Biometric scanner verifies identity using fingerprints, iris, face, etc.",
    "explanation_hi": "बायोमेट्रिक स्कैनर फिंगरप्रिंट, आईरिस, चेहरा आदि का उपयोग करके पहचान सत्यापित करता है।"
  },
  {
    "num": 43,
    "question_en": "Which programming language is used for web scripting?",
    "question_hi": "वेब स्क्रिप्टिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["PHP", "C++", "Java", "Fortran"],
    "options_hi": ["PHP", "C++", "जावा", "फोरट्रान"],
    "answer_en": "PHP",
    "answer_hi": "PHP",
    "explanation_en": "PHP is server-side scripting language designed for web development.",
    "explanation_hi": "PHP वेब डेवलपमेंट के लिए डिज़ाइन की गई सर्वर-साइड स्क्रिप्टिंग भाषा है।"
  },
  {
    "num": 44,
    "question_en": "What does 'CU' stand for?",
    "question_hi": "'CU' का क्या अर्थ है?",
    "options_en": ["Control Unit", "Central Unit", "Computer Unit", "Calculation Unit"],
    "options_hi": ["कंट्रोल यूनिट", "सेंट्रल यूनिट", "कंप्यूटर यूनिट", "कैलकुलेशन यूनिट"],
    "answer_en": "Control Unit",
    "answer_hi": "कंट्रोल यूनिट",
    "explanation_en": "Control Unit directs operation of processor and coordinates other components.",
    "explanation_hi": "कंट्रोल यूनिट प्रोसेसर के संचालन को निर्देशित करता है और अन्य घटकों का समन्वय करता है।"
  },
  {
    "num": 45,
    "question_en": "Which component displays visual output?",
    "question_hi": "कौन सा घटक दृश्य आउटपुट प्रदर्शित करता है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Printer"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "प्रिंटर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर",
    "explanation_en": "Monitor displays visual information from computer in graphical form.",
    "explanation_hi": "मॉनिटर कंप्यूटर से दृश्य जानकारी को ग्राफिकल रूप में प्रदर्शित करता है।"
  },
  {
    "num": 46,
    "question_en": "What is the purpose of a plotter?",
    "question_hi": "प्लॉटर का उद्देश्य क्या है?",
    "options_en": ["Print large-scale drawings", "Print documents", "Scan photos", "Type text"],
    "options_hi": ["बड़े पैमाने पर ड्राइंग प्रिंट करना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना", "टेक्स्ट टाइप करना"],
    "answer_en": "Print large-scale drawings",
    "answer_hi": "बड़े पैमाने पर ड्राइंग प्रिंट करना",
    "explanation_en": "Plotter produces vector graphics drawings, typically for architectural or engineering designs.",
    "explanation_hi": "प्लॉटर वेक्टर ग्राफिक्स ड्राइंग उत्पन्न करता है, आमतौर पर आर्किटेक्चरल या इंजीनियरिंग डिजाइन के लिए।"
  },
  {
    "num": 47,
    "question_en": "Which programming language is used for artificial intelligence?",
    "question_hi": "आर्टिफिशियल इंटेलिजेंस के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["LISP", "HTML", "CSS", "SQL"],
    "options_hi": ["LISP", "HTML", "CSS", "SQL"],
    "answer_en": "LISP",
    "answer_hi": "LISP",
    "explanation_en": "LISP is one of the oldest programming languages used in AI research.",
    "explanation_hi": "LISP AI अनुसंधान में उपयोग की जाने वाली सबसे पुरानी प्रोग्रामिंग भाषाओं में से एक है।"
  },
  {
    "num": 48,
    "question_en": "What does 'ROM' stand for?",
    "question_hi": "'ROM' का क्या अर्थ है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Output Memory", "Random Output Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम आउटपुट मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "explanation_en": "ROM contains permanent data that cannot be modified.",
    "explanation_hi": "ROM में स्थायी डेटा होता है जिसे संशोधित नहीं किया जा सकता।"
  },
  {
    "num": 49,
    "question_en": "Which component prints documents?",
    "question_hi": "कौन सा घटक दस्तावेज प्रिंट करता है?",
    "options_en": ["Printer", "Scanner", "Monitor", "Keyboard"],
    "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "explanation_en": "Printer produces physical copies of digital documents on paper.",
    "explanation_hi": "प्रिंटर डिजिटल दस्तावेजों की भौतिक प्रतियां कागज पर उत्पन्न करता है।"
  },
  {
    "num": 50,
    "question_en": "What is the purpose of a trackball?",
    "question_hi": "ट्रैकबॉल का उद्देश्य क्या है?",
    "options_en": ["Control cursor with rotating ball", "Type text", "Print documents", "Scan photos"],
    "options_hi": ["घूमने वाली गेंद के साथ कर्सर नियंत्रित करना", "टेक्स्ट टाइप करना", "दस्तावेज प्रिंट करना", "फोटो स्कैन करना"],
    "answer_en": "Control cursor with rotating ball",
    "answer_hi": "घूमने वाली गेंद के साथ कर्सर नियंत्रित करना",
    "explanation_en": "Trackball has stationary ball that user rotates to move cursor.",
    "explanation_hi": "ट्रैकबॉल में स्थिर गेंद होती है जिसे उपयोगकर्ता कर्सर स्थानांतरित करने के लिए घुमाता है।"
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

