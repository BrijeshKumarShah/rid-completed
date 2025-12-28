const questions =[
  {
    "num": 1,
    "question_en": "What does CPU stand for?",
    "question_hi": "CPU का पूरा नाम क्या है?",
    "options_en": ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पर्सनल यूनिट", "सेंट्रल प्रोग्राम यूटिलिटी", "कंप्यूटर प्रोसेसिंग यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "explanation_en": "CPU stands for Central Processing Unit, the primary component of a computer that performs most processing.",
    "explanation_hi": "CPU का मतलब सेंट्रल प्रोसेसिंग यूनिट है, जो कंप्यूटर का मुख्य घटक है जो अधिकांश प्रोसेसिंग करता है।"
  },
  {
    "num": 2,
    "question_en": "Which is a volatile memory?",
    "question_hi": "वाष्पशील मेमोरी कौन सी है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "SSD"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "SSD"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM (Random Access Memory) is volatile memory that loses data when power is off.",
    "explanation_hi": "RAM (रैंडम एक्सेस मेमोरी) वाष्पशील मेमोरी है जो बिजली बंद होने पर डेटा खो देती है।"
  },
  {
    "num": 3,
    "question_en": "What is the full form of GUI?",
    "question_hi": "GUI का पूर्ण रूप क्या है?",
    "options_en": ["Graphical User Interface", "General Utility Interface", "Graphical Unit Integration", "General User Interaction"],
    "options_hi": ["ग्राफिकल यूजर इंटरफेस", "जनरल यूटिलिटी इंटरफेस", "ग्राफिकल यूनिट इंटीग्रेशन", "जनरल यूजर इंटरैक्शन"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूजर इंटरफेस",
    "explanation_en": "GUI stands for Graphical User Interface, allowing users to interact with icons and visual indicators.",
    "explanation_hi": "GUI का अर्थ ग्राफिकल यूजर इंटरफेस है, जो उपयोगकर्ताओं को आइकन और दृश्य संकेतकों के साथ इंटरैक्ट करने देता है।"
  },
  {
    "num": 4,
    "question_en": "Which is an input device?",
    "question_hi": "कौन सा इनपुट डिवाइस है?",
    "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
    "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड",
    "explanation_en": "Keyboard is an input device used to enter data into a computer.",
    "explanation_hi": "कीबोर्ड एक इनपुट डिवाइस है जिसका उपयोग कंप्यूटर में डेटा दर्ज करने के लिए किया जाता है।"
  },
  {
    "num": 5,
    "question_en": "What does HTTP stand for?",
    "question_hi": "HTTP का मतलब क्या है?",
    "options_en": ["HyperText Transfer Protocol", "High Text Transfer Process", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
    "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोसेस", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल"],
    "answer_en": "HyperText Transfer Protocol",
    "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
    "explanation_en": "HTTP is the protocol used for transferring web pages on the internet.",
    "explanation_hi": "HTTP वह प्रोटोकॉल है जिसका उपयोग इंटरनेट पर वेब पेज स्थानांतरित करने के लिए किया जाता है।"
  },
  {
    "num": 6,
    "question_en": "Which programming language is used for web page styling?",
    "question_hi": "वेब पेज स्टाइलिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["CSS", "HTML", "JavaScript", "Python"],
    "options_hi": ["CSS", "HTML", "JavaScript", "Python"],
    "answer_en": "CSS",
    "answer_hi": "CSS",
    "explanation_en": "CSS (Cascading Style Sheets) is used to style and layout web pages.",
    "explanation_hi": "CSS (कैस्केडिंग स्टाइल शीट्स) का उपयोग वेब पेजों को स्टाइल और लेआउट करने के लिए किया जाता है।"
  },
  {
    "num": 7,
    "question_en": "What is the brain of the computer called?",
    "question_hi": "कंप्यूटर के दिमाग को क्या कहा जाता है?",
    "options_en": ["CPU", "RAM", "Motherboard", "Hard Disk"],
    "options_hi": ["CPU", "RAM", "मदरबोर्ड", "हार्ड डिस्क"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "explanation_en": "CPU is often called the brain of the computer as it processes instructions.",
    "explanation_hi": "CPU को अक्सर कंप्यूटर का दिमाग कहा जाता है क्योंकि यह निर्देशों को प्रोसेस करता है।"
  },
  {
    "num": 8,
    "question_en": "Which device converts digital signals to analog signals?",
    "question_hi": "कौन सा डिवाइस डिजिटल सिग्नल को एनालॉग सिग्नल में बदलता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem (Modulator-Demodulator) converts digital signals to analog for transmission over telephone lines.",
    "explanation_hi": "मॉडेम (मॉड्यूलेटर-डिमॉड्यूलेटर) टेलीफोन लाइनों पर ट्रांसमिशन के लिए डिजिटल सिग्नल को एनालॉग में बदलता है।"
  },
  {
    "num": 9,
    "question_en": "What is the extension of a Word document file?",
    "question_hi": "Word डॉक्यूमेंट फ़ाइल का एक्सटेंशन क्या है?",
    "options_en": [".docx", ".txt", ".pdf", ".xlsx"],
    "options_hi": [".docx", ".txt", ".pdf", ".xlsx"],
    "answer_en": ".docx",
    "answer_hi": ".docx",
    "explanation_en": "Microsoft Word documents typically have .doc or .docx extension.",
    "explanation_hi": "Microsoft Word डॉक्यूमेंट्स में आमतौर पर .doc या .docx एक्सटेंशन होता है।"
  },
  {
    "num": 10,
    "question_en": "Which key combination is used to copy selected text?",
    "question_hi": "चयनित टेक्स्ट को कॉपी करने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
    "options_en": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + C",
    "answer_hi": "Ctrl + C",
    "explanation_en": "Ctrl + C is the standard keyboard shortcut for copying selected content.",
    "explanation_hi": "Ctrl + C चयनित सामग्री को कॉपी करने के लिए मानक कीबोर्ड शॉर्टकट है।"
  },
  {
    "num": 11,
    "question_en": "What does LAN stand for?",
    "question_hi": "LAN का मतलब क्या है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Long Area Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लॉन्ग एरिया नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "explanation_en": "LAN is a network covering a small geographical area like a home, office, or building.",
    "explanation_hi": "LAN एक ऐसा नेटवर्क है जो एक छोटे भौगोलिक क्षेत्र जैसे घर, कार्यालय या इमारत को कवर करता है।"
  },
  {
    "num": 12,
    "question_en": "Which software is used to browse the internet?",
    "question_hi": "इंटरनेट ब्राउज़ करने के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Web Browser", "Word Processor", "Spreadsheet", "Database"],
    "options_hi": ["वेब ब्राउज़र", "वर्ड प्रोसेसर", "स्प्रेडशीट", "डेटाबेस"],
    "answer_en": "Web Browser",
    "answer_hi": "वेब ब्राउज़र",
    "explanation_en": "A web browser (like Chrome, Firefox) is used to access and view websites on the internet.",
    "explanation_hi": "वेब ब्राउज़र (जैसे Chrome, Firefox) का उपयोग इंटरनेट पर वेबसाइटों को एक्सेस और देखने के लिए किया जाता है।"
  },
  {
    "num": 13,
    "question_en": "What is the binary equivalent of decimal number 10?",
    "question_hi": "दशमलव संख्या 10 का बाइनरी समकक्ष क्या है?",
    "options_en": ["1010", "1001", "1100", "1110"],
    "options_hi": ["1010", "1001", "1100", "1110"],
    "answer_en": "1010",
    "answer_hi": "1010",
    "explanation_en": "Decimal 10 in binary is 1010 (8+0+2+0).",
    "explanation_hi": "दशमलव 10 का बाइनरी में 1010 (8+0+2+0) होता है।"
  },
  {
    "num": 14,
    "question_en": "Which component stores data permanently?",
    "question_hi": "कौन सा घटक डेटा को स्थायी रूप से संग्रहीत करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard Disk is a non-volatile storage device that retains data even when powered off.",
    "explanation_hi": "हार्ड डिस्क एक गैर-वाष्पशील संग्रहण उपकरण है जो बिजली बंद होने पर भी डेटा रखता है।"
  },
  {
    "num": 15,
    "question_en": "What does SQL stand for?",
    "question_hi": "SQL का मतलब क्या है?",
    "options_en": ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Structured Question Language"],
    "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "स्टैंडर्ड क्वेरी लॉजिक", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज"],
    "answer_en": "Structured Query Language",
    "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
    "explanation_en": "SQL is used to manage and manipulate relational databases.",
    "explanation_hi": "SQL का उपयोग रिलेशनल डेटाबेस को प्रबंधित और हेरफेर करने के लिए किया जाता है।"
  },
  {
    "num": 16,
    "question_en": "Which is an example of an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम का उदाहरण कौन सा है?",
    "options_en": ["Windows", "MS Word", "Photoshop", "Excel"],
    "options_hi": ["विंडोज", "MS Word", "फोटोशॉप", "एक्सेल"],
    "answer_en": "Windows",
    "answer_hi": "विंडोज",
    "explanation_en": "Windows is an operating system that manages computer hardware and software resources.",
    "explanation_hi": "विंडोज एक ऑपरेटिंग सिस्टम है जो कंप्यूटर हार्डवेयर और सॉफ़्टवेयर संसाधनों को प्रबंधित करता है।"
  },
  {
    "num": 17,
    "question_en": "What is the full form of PDF?",
    "question_hi": "PDF का पूर्ण रूप क्या है?",
    "options_en": ["Portable Document Format", "Printable Document Format", "Personal Data File", "Portable Data Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "पोर्टेबल डेटा फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "explanation_en": "PDF is a file format used to present documents independently of software or hardware.",
    "explanation_hi": "PDF एक फ़ाइल प्रारूप है जिसका उपयोग सॉफ़्टवेयर या हार्डवेयर से स्वतंत्र दस्तावेज़ प्रस्तुत करने के लिए किया जाता है।"
  },
  {
    "num": 18,
    "question_en": "Which function in Excel adds numbers in a range?",
    "question_hi": "Excel में कौन सा फ़ंक्शन एक रेंज में संख्याएँ जोड़ता है?",
    "options_en": ["SUM", "AVERAGE", "COUNT", "MAX"],
    "options_hi": ["SUM", "AVERAGE", "COUNT", "MAX"],
    "answer_en": "SUM",
    "answer_hi": "SUM",
    "explanation_en": "SUM function adds all numbers in a specified range of cells.",
    "explanation_hi": "SUM फ़ंक्शन सेल की निर्दिष्ट श्रृंखला में सभी संख्याओं को जोड़ता है।"
  },
  {
    "num": 19,
    "question_en": "What does URL stand for?",
    "question_hi": "URL का मतलब क्या है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL is the address used to access resources on the internet.",
    "explanation_hi": "URL वह पता है जिसका उपयोग इंटरनेट पर संसाधनों तक पहुंचने के लिए किया जाता है।"
  },
  {
    "num": 20,
    "question_en": "Which tag is used to create a hyperlink in HTML?",
    "question_hi": "HTML में हाइपरलिंक बनाने के लिए किस टैग का उपयोग किया जाता है?",
    "options_en": ["<a>", "<link>", "<href>", "<url>"],
    "options_hi": ["<a>", "<link>", "<href>", "<url>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "explanation_en": "The <a> tag with href attribute creates hyperlinks in HTML.",
    "explanation_hi": "href विशेषता के साथ <a> टैग HTML में हाइपरलिंक बनाता है।"
  },
  {
    "num": 21,
    "question_en": "Which is a programming language?",
    "question_hi": "कौन सी प्रोग्रामिंग भाषा है?",
    "options_en": ["Python", "Photoshop", "Excel", "Windows"],
    "options_hi": ["पायथन", "फोटोशॉप", "एक्सेल", "विंडोज"],
    "answer_en": "Python",
    "answer_hi": "पायथन",
    "explanation_en": "Python is a high-level programming language used for various applications.",
    "explanation_hi": "पायथन एक उच्च-स्तरीय प्रोग्रामिंग भाषा है जिसका उपयोग विभिन्न अनुप्रयोगों के लिए किया जाता है।"
  },
  {
    "num": 22,
    "question_en": "What does ROM stand for?",
    "question_hi": "ROM का मतलब क्या है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Output Memory", "Random Output Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम आउटपुट मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "explanation_en": "ROM is non-volatile memory that stores permanent data and instructions.",
    "explanation_hi": "ROM गैर-वाष्पशील मेमोरी है जो स्थायी डेटा और निर्देश संग्रहीत करती है।"
  },
  {
    "num": 23,
    "question_en": "Which device connects multiple computers in a network?",
    "question_hi": "कौन सा डिवाइस नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
    "options_en": ["Switch", "Printer", "Monitor", "Keyboard"],
    "options_hi": ["स्विच", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "explanation_en": "A switch is a networking device that connects multiple devices on a LAN.",
    "explanation_hi": "स्विच एक नेटवर्किंग डिवाइस है जो LAN पर कई उपकरणों को जोड़ता है।"
  },
  {
    "num": 24,
    "question_en": "Which protocol is used for secure internet communication?",
    "question_hi": "सुरक्षित इंटरनेट संचार के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "answer_en": "HTTPS",
    "answer_hi": "HTTPS",
    "explanation_en": "HTTPS (HTTP Secure) encrypts data for secure transmission over the internet.",
    "explanation_hi": "HTTPS (HTTP सिक्योर) इंटरनेट पर सुरक्षित ट्रांसमिशन के लिए डेटा को एन्क्रिप्ट करता है।"
  },
  {
    "num": 25,
    "question_en": "What is the default port number for HTTP?",
    "question_hi": "HTTP के लिए डिफ़ॉल्ट पोर्ट नंबर क्या है?",
    "options_en": ["80", "443", "21", "25"],
    "options_hi": ["80", "443", "21", "25"],
    "answer_en": "80",
    "answer_hi": "80",
    "explanation_en": "HTTP uses port 80 for unencrypted web communication.",
    "explanation_hi": "HTTP अएन्क्रिप्टेड वेब संचार के लिए पोर्ट 80 का उपयोग करता है।"
  },
  {
    "num": 26,
    "question_en": "Which Excel function finds the largest number in a range?",
    "question_hi": "कौन सा Excel फ़ंक्शन एक रेंज में सबसे बड़ी संख्या ढूंढता है?",
    "options_en": ["MAX", "MIN", "AVERAGE", "COUNT"],
    "options_hi": ["MAX", "MIN", "AVERAGE", "COUNT"],
    "answer_en": "MAX",
    "answer_hi": "MAX",
    "explanation_en": "MAX function returns the largest value in a set of values.",
    "explanation_hi": "MAX फ़ंक्शन मानों के सेट में सबसे बड़ा मान देता है।"
  },
  {
    "num": 27,
    "question_en": "What is the full form of BIOS?",
    "question_hi": "BIOS का पूर्ण रूप क्या है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS is firmware used to perform hardware initialization during booting.",
    "explanation_hi": "BIOS बूटिंग के दौरान हार्डवेयर प्रारंभिकीकरण करने के लिए उपयोग किया जाने वाला फर्मवेयर है।"
  },
  {
    "num": 28,
    "question_en": "Which is a spreadsheet software?",
    "question_hi": "कौन सा स्प्रेडशीट सॉफ़्टवेयर है?",
    "options_en": ["Microsoft Excel", "Microsoft Word", "Adobe Photoshop", "Visual Studio"],
    "options_hi": ["माइक्रोसॉफ्ट एक्सेल", "माइक्रोसॉफ्ट वर्ड", "एडोब फोटोशॉप", "विजुअल स्टूडियो"],
    "answer_en": "Microsoft Excel",
    "answer_hi": "माइक्रोसॉफ्ट एक्सेल",
    "explanation_en": "Microsoft Excel is a spreadsheet program for data organization and calculation.",
    "explanation_hi": "माइक्रोसॉफ्ट एक्सेल डेटा संगठन और गणना के लिए एक स्प्रेडशीट प्रोग्राम है।"
  },
  {
    "num": 29,
    "question_en": "What does VPN stand for?",
    "question_hi": "VPN का मतलब क्या है?",
    "options_en": ["Virtual Private Network", "Virtual Public Network", "Visual Private Network", "Visual Public Network"],
    "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "विजुअल प्राइवेट नेटवर्क", "विजुअल पब्लिक नेटवर्क"],
    "answer_en": "Virtual Private Network",
    "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
    "explanation_en": "VPN extends a private network across a public network, enabling secure connections.",
    "explanation_hi": "VPN एक सार्वजनिक नेटवर्क पर एक निजी नेटवर्क का विस्तार करता है, सुरक्षित कनेक्शन सक्षम करता है।"
  },
  {
    "num": 30,
    "question_en": "Which language is used for creating web pages?",
    "question_hi": "वेब पेज बनाने के लिए किस भाषा का उपयोग किया जाता है?",
    "options_en": ["HTML", "C++", "Java", "Python"],
    "options_hi": ["HTML", "C++", "Java", "Python"],
    "answer_en": "HTML",
    "answer_hi": "HTML",
    "explanation_en": "HTML (HyperText Markup Language) is the standard markup language for web pages.",
    "explanation_hi": "HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज) वेब पेजों के लिए मानक मार्कअप भाषा है।"
  },
  {
    "num": 31,
    "question_en": "What is the function of an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम का कार्य क्या है?",
    "options_en": ["Manages hardware and software resources", "Creates documents", "Edits photos", "Browses the internet"],
    "options_hi": ["हार्डवेयर और सॉफ़्टवेयर संसाधनों का प्रबंधन करता है", "दस्तावेज़ बनाता है", "फोटो संपादित करता है", "इंटरनेट ब्राउज़ करता है"],
    "answer_en": "Manages hardware and software resources",
    "answer_hi": "हार्डवेयर और सॉफ़्टवेयर संसाधनों का प्रबंधन करता है",
    "explanation_en": "OS acts as an interface between user and computer hardware, managing resources.",
    "explanation_hi": "OS उपयोगकर्ता और कंप्यूटर हार्डवेयर के बीच एक इंटरफेस के रूप में कार्य करता है, संसाधनों का प्रबंधन करता है।"
  },
  {
    "num": 32,
    "question_en": "Which is a search engine?",
    "question_hi": "कौन सा सर्च इंजन है?",
    "options_en": ["Google", "Windows", "Word", "Excel"],
    "options_hi": ["गूगल", "विंडोज", "वर्ड", "एक्सेल"],
    "answer_en": "Google",
    "answer_hi": "गूगल",
    "explanation_en": "Google is a search engine that helps find information on the internet.",
    "explanation_hi": "गूगल एक सर्च इंजन है जो इंटरनेट पर जानकारी खोजने में मदद करता है।"
  },
  {
    "num": 33,
    "question_en": "What is the full form of USB?",
    "question_hi": "USB का पूर्ण रूप क्या है?",
    "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
    "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
    "answer_en": "Universal Serial Bus",
    "answer_hi": "यूनिवर्सल सीरियल बस",
    "explanation_en": "USB is an industry standard for cables, connectors and protocols for connection and power supply.",
    "explanation_hi": "USB कनेक्शन और बिजली आपूर्ति के लिए केबल, कनेक्टर और प्रोटोकॉल के लिए एक उद्योग मानक है।"
  },
  {
    "num": 34,
    "question_en": "Which Excel function counts cells with numbers?",
    "question_hi": "कौन सा Excel फ़ंक्शन संख्याओं वाली सेल गिनता है?",
    "options_en": ["COUNT", "SUM", "AVERAGE", "MAX"],
    "options_hi": ["COUNT", "SUM", "AVERAGE", "MAX"],
    "answer_en": "COUNT",
    "answer_hi": "COUNT",
    "explanation_en": "COUNT function counts the number of cells that contain numbers in a range.",
    "explanation_hi": "COUNT फ़ंक्शन एक श्रृंखला में संख्याएँ रखने वाली सेल की संख्या गिनता है।"
  },
  {
    "num": 35,
    "question_en": "What does ISP stand for?",
    "question_hi": "ISP का मतलब क्या है?",
    "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
    "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सिस्टम प्रोवाइडर"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
    "explanation_en": "ISP provides services for accessing and using the internet.",
    "explanation_hi": "ISP इंटरनेट का उपयोग और पहुंचने के लिए सेवाएं प्रदान करता है।"
  },
  {
    "num": 36,
    "question_en": "Which tag is used for the largest heading in HTML?",
    "question_hi": "HTML में सबसे बड़े हेडिंग के लिए किस टैग का उपयोग किया जाता है?",
    "options_en": ["<h1>", "<h6>", "<head>", "<header>"],
    "options_hi": ["<h1>", "<h6>", "<head>", "<header>"],
    "answer_en": "<h1>",
    "answer_hi": "<h1>",
    "explanation_en": "<h1> defines the most important (largest) heading in HTML.",
    "explanation_hi": "<h1> HTML में सबसे महत्वपूर्ण (सबसे बड़ा) हेडिंग परिभाषित करता है।"
  },
  {
    "num": 37,
    "question_en": "What is the full form of WWW?",
    "question_hi": "WWW का पूर्ण रूप क्या है?",
    "options_en": ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
    "options_hi": ["वर्ल्ड वाइड वेब", "वर्ल्ड वेब वाइड", "वेब वर्ल्ड वाइड", "वाइड वर्ल्ड वेब"],
    "answer_en": "World Wide Web",
    "answer_hi": "वर्ल्ड वाइड वेब",
    "explanation_en": "WWW is an information system where documents are connected via hyperlinks.",
    "explanation_hi": "WWW एक सूचना प्रणाली है जहां दस्तावेज हाइपरलिंक के माध्यम से जुड़े होते हैं।"
  },
  {
    "num": 38,
    "question_en": "Which function returns the current date in Excel?",
    "question_hi": "Excel में कौन सा फ़ंक्शन वर्तमान दिनांक लौटाता है?",
    "options_en": ["TODAY", "NOW", "DATE", "DAY"],
    "options_hi": ["TODAY", "NOW", "DATE", "DAY"],
    "answer_en": "TODAY",
    "answer_hi": "TODAY",
    "explanation_en": "TODAY function returns the current date (without time), updating daily.",
    "explanation_hi": "TODAY फ़ंक्शन वर्तमान दिनांक (समय के बिना) लौटाता है, दैनिक अद्यतन होता है।"
  },
  {
    "num": 39,
    "question_en": "What does HTML stand for?",
    "question_hi": "HTML का मतलब क्या है?",
    "options_en": ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HighText Markup Language"],
    "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मशीन लैंग्वेज", "हाइपरटेक्स्ट मशीन लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज"],
    "answer_en": "HyperText Markup Language",
    "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
    "explanation_en": "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "explanation_hi": "HTML वेब ब्राउज़र में प्रदर्शित होने के लिए डिज़ाइन किए गए दस्तावेजों के लिए मानक मार्कअप भाषा है।"
  },
  {
    "num": 40,
    "question_en": "Which is an output device?",
    "question_hi": "कौन सा आउटपुट डिवाइस है?",
    "options_en": ["Printer", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["प्रिंटर", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "explanation_en": "Printer produces hard copies of electronic documents (output).",
    "explanation_hi": "प्रिंटर इलेक्ट्रॉनिक दस्तावेजों की हार्ड कॉपी (आउटपुट) तैयार करता है।"
  },
  {
    "num": 41,
    "question_en": "What is the binary number system base?",
    "question_hi": "बाइनरी नंबर सिस्टम का आधार क्या है?",
    "options_en": ["2", "10", "8", "16"],
    "options_hi": ["2", "10", "8", "16"],
    "answer_en": "2",
    "answer_hi": "2",
    "explanation_en": "Binary system uses base-2 (digits 0 and 1) to represent numbers.",
    "explanation_hi": "बाइनरी सिस्टम संख्याओं को दर्शाने के लिए आधार-2 (अंक 0 और 1) का उपयोग करता है।"
  },
  {
    "num": 42,
    "question_en": "Which Excel function calculates the average?",
    "question_hi": "कौन सा Excel फ़ंक्शन औसत की गणना करता है?",
    "options_en": ["AVERAGE", "SUM", "COUNT", "MAX"],
    "options_hi": ["AVERAGE", "SUM", "COUNT", "MAX"],
    "answer_en": "AVERAGE",
    "answer_hi": "AVERAGE",
    "explanation_en": "AVERAGE function calculates the arithmetic mean of numbers in a range.",
    "explanation_hi": "AVERAGE फ़ंक्शन एक श्रृंखला में संख्याओं का अंकगणितीय माध्य गणना करता है।"
  },
  {
    "num": 43,
    "question_en": "What does RAM stand for?",
    "question_hi": "RAM का मतलब क्या है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी",
    "explanation_en": "RAM is volatile memory that can be accessed randomly for read/write operations.",
    "explanation_hi": "RAM वाष्पशील मेमोरी है जिसे रीड/राइट ऑपरेशन के लिए यादृच्छिक रूप से एक्सेस किया जा सकता है।"
  },
  {
    "num": 44,
    "question_en": "Which protocol is used for email transmission?",
    "question_hi": "ईमेल ट्रांसमिशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SMTP", "HTTP", "FTP", "HTTPS"],
    "options_hi": ["SMTP", "HTTP", "FTP", "HTTPS"],
    "answer_en": "SMTP",
    "answer_hi": "SMTP",
    "explanation_en": "SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers.",
    "explanation_hi": "SMTP (सिंपल मेल ट्रांसफर प्रोटोकॉल) का उपयोग सर्वर के बीच ईमेल भेजने के लिए किया जाता है।"
  },
  {
    "num": 45,
    "question_en": "Which tag inserts a line break in HTML?",
    "question_hi": "HTML में लाइन ब्रेक डालने के लिए किस टैग का उपयोग किया जाता है?",
    "options_en": ["<br>", "<hr>", "<break>", "<lb>"],
    "options_hi": ["<br>", "<hr>", "<break>", "<lb>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "explanation_en": "<br> tag inserts a single line break in HTML documents.",
    "explanation_hi": "<br> टैग HTML दस्तावेजों में एकल लाइन ब्रेक डालता है।"
  },
  {
    "num": 46,
    "question_en": "What is the full form of IP?",
    "question_hi": "IP का पूर्ण रूप क्या है?",
    "options_en": ["Internet Protocol", "Internet Program", "International Protocol", "International Program"],
    "options_hi": ["इंटरनेट प्रोटोकॉल", "इंटरनेट प्रोग्राम", "इंटरनेशनल प्रोटोकॉल", "इंटरनेशनल प्रोग्राम"],
    "answer_en": "Internet Protocol",
    "answer_hi": "इंटरनेट प्रोटोकॉल",
    "explanation_en": "IP provides the addressing system for devices on networks.",
    "explanation_hi": "IP नेटवर्क पर उपकरणों के लिए पता प्रणाली प्रदान करता है।"
  },
  {
    "num": 47,
    "question_en": "Which function returns the current date and time in Excel?",
    "question_hi": "Excel में कौन सा फ़ंक्शन वर्तमान दिनांक और समय लौटाता है?",
    "options_en": ["NOW", "TODAY", "DATE", "TIME"],
    "options_hi": ["NOW", "TODAY", "DATE", "TIME"],
    "answer_en": "NOW",
    "answer_hi": "NOW",
    "explanation_en": "NOW function returns the current date and time, updating continuously.",
    "explanation_hi": "NOW फ़ंक्शन वर्तमान दिनांक और समय लौटाता है, लगातार अद्यतन होता है।"
  },
  {
    "num": 48,
    "question_en": "What does CSS stand for?",
    "question_hi": "CSS का मतलब क्या है?",
    "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Cascading Sheet Style"],
    "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल सिस्टम", "कैस्केडिंग शीट स्टाइल"],
    "answer_en": "Cascading Style Sheets",
    "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
    "explanation_en": "CSS describes how HTML elements are to be displayed on screen.",
    "explanation_hi": "CSS बताता है कि HTML तत्वों को स्क्रीन पर कैसे प्रदर्शित किया जाना है।"
  },
  {
    "num": 49,
    "question_en": "Which is a database management system?",
    "question_hi": "कौन सा डेटाबेस मैनेजमेंट सिस्टम है?",
    "options_en": ["MySQL", "Photoshop", "Excel", "Word"],
    "options_hi": ["MySQL", "फोटोशॉप", "एक्सेल", "वर्ड"],
    "answer_en": "MySQL",
    "answer_hi": "MySQL",
    "explanation_en": "MySQL is an open-source relational database management system.",
    "explanation_hi": "MySQL एक ओपन-सोर्स रिलेशनल डेटाबेस मैनेजमेंट सिस्टम है।"
  },
  {
    "num": 50,
    "question_en": "What is the shortcut to save a document?",
    "question_hi": "दस्तावेज़ सहेजने के लिए शॉर्टकट क्या है?",
    "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + V"],
    "options_hi": ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + V"],
    "answer_en": "Ctrl + S",
    "answer_hi": "Ctrl + S",
    "explanation_en": "Ctrl + S is the universal keyboard shortcut for saving documents.",
    "explanation_hi": "Ctrl + S दस्तावेज़ सहेजने के लिए सार्वभौमिक कीबोर्ड शॉर्टकट है।"
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

