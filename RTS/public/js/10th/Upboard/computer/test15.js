const questions = [
  {
    "num": 1,
    "question_en": "Which function in Calc rounds a number to specified decimal places?",
    "question_hi": "Calc में कौन सा फ़ंक्शन संख्या को निर्दिष्ट दशमलव स्थानों तक पूर्णांकित करता है?",
    "options_en": ["ROUND", "SUM", "INT", "TRUNC"],
    "options_hi": ["ROUND", "SUM", "INT", "TRUNC"],
    "answer_en": "ROUND",
    "answer_hi": "ROUND",
    "explanation_en": "ROUND function rounds a number to a specified number of digits.",
    "explanation_hi": "ROUND फ़ंक्शन संख्या को निर्दिष्ट अंकों तक पूर्णांकित करता है।"
  },
  {
    "num": 2,
    "question_en": "What is the shortcut to switch between open applications in Windows?",
    "question_hi": "Windows में खुले एप्लिकेशन के बीच स्विच करने की शॉर्टकट क्या है?",
    "options_en": ["Alt + Tab", "Ctrl + Tab", "Alt + F4", "Win + Tab"],
    "options_hi": ["Alt + Tab", "Ctrl + Tab", "Alt + F4", "Win + Tab"],
    "answer_en": "Alt + Tab",
    "answer_hi": "Alt + Tab",
    "explanation_en": "Alt + Tab allows you to cycle through open applications.",
    "explanation_hi": "Alt + Tab आपको खुले एप्लिकेशन के माध्यम से चक्र करने की अनुमति देता है।"
  },
  {
    "num": 3,
    "question_en": "Which chart is best for showing trends over time?",
    "question_hi": "समय के साथ रुझान दिखाने के लिए कौन सा चार्ट सबसे अच्छा है?",
    "options_en": ["Line Chart", "Pie Chart", "Bar Chart", "Doughnut Chart"],
    "options_hi": ["लाइन चार्ट", "पाई चार्ट", "बार चार्ट", "डोनट चार्ट"],
    "answer_en": "Line Chart",
    "answer_hi": "लाइन चार्ट",
    "explanation_en": "Line charts are ideal for displaying trends and changes over time periods.",
    "explanation_hi": "लाइन चार्ट समय अवधि में रुझान और परिवर्तन प्रदर्शित करने के लिए आदर्श हैं।"
  },
  {
    "num": 4,
    "question_en": "What is the function of ALU in CPU?",
    "question_hi": "CPU में ALU का क्या कार्य है?",
    "options_en": ["Performs calculations", "Stores data", "Displays output", "Accepts input"],
    "options_hi": ["गणना करता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है", "इनपुट स्वीकार करता है"],
    "answer_en": "Performs calculations",
    "answer_hi": "गणना करता है",
    "explanation_en": "ALU (Arithmetic Logic Unit) performs all arithmetic and logical operations.",
    "explanation_hi": "ALU (अर्थमैटिक लॉजिक यूनिट) सभी अंकगणितीय और तार्किक संचालन करता है।"
  },
  {
    "num": 5,
    "question_en": "Which device converts digital signals to analog and vice versa?",
    "question_hi": "कौन सा उपकरण डिजिटल सिग्नल को एनालॉग में बदलता है और इसके विपरीत?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem modulates digital signals to analog for transmission and demodulates received analog signals back to digital.",
    "explanation_hi": "मॉडेम ट्रांसमिशन के लिए डिजिटल सिग्नल को एनालॉग में मॉड्यूलेट करता है और प्राप्त एनालॉग सिग्नल को वापस डिजिटल में डिमॉड्यूलेट करता है।"
  },
  {
    "num": 6,
    "question_en": "What does MAN stand for in networking?",
    "question_hi": "नेटवर्किंग में MAN का पूर्ण रूप क्या है?",
    "options_en": ["Metropolitan Area Network", "Metro Area Network", "Metropolitan Access Network", "Metro Access Network"],
    "options_hi": ["मेट्रोपॉलिटन एरिया नेटवर्क", "मेट्रो एरिया नेटवर्क", "मेट्रोपॉलिटन एक्सेस नेटवर्क", "मेट्रो एक्सेस नेटवर्क"],
    "answer_en": "Metropolitan Area Network",
    "answer_hi": "मेट्रोपॉलिटन एरिया नेटवर्क",
    "explanation_en": "MAN covers a metropolitan area like a city and is larger than LAN but smaller than WAN.",
    "explanation_hi": "MAN एक शहर जैसे महानगरीय क्षेत्र को कवर करता है और LAN से बड़ा लेकिन WAN से छोटा होता है।"
  },
  {
    "num": 7,
    "question_en": "What is the full form of JPEG?",
    "question_hi": "JPEG का पूर्ण रूप क्या है?",
    "options_en": ["Joint Photographic Experts Group", "Joint Picture Experts Group", "Joint Photo Experts Group", "Joint Photographic Encoding Group"],
    "options_hi": ["जॉइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप", "जॉइंट पिक्चर एक्सपर्ट्स ग्रुप", "जॉइंट फोटो एक्सपर्ट्स ग्रुप", "जॉइंट फोटोग्राफिक एन्कोडिंग ग्रुप"],
    "answer_en": "Joint Photographic Experts Group",
    "answer_hi": "जॉइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप",
    "explanation_en": "JPEG is a commonly used method of lossy compression for digital images.",
    "explanation_hi": "JPEG डिजिटल छवियों के लिए हानिपूर्ण संपीड़न की एक सामान्य रूप से प्रयुक्त विधि है।"
  },
  {
    "num": 8,
    "question_en": "What feature in Writer allows text to flow around an image?",
    "question_hi": "Writer में कौन सी सुविधा टेक्स्ट को छवि के चारों ओर प्रवाहित करने की अनुमति देती है?",
    "options_en": ["Wrap Text", "Align Text", "Indent Text", "Space Text"],
    "options_hi": ["रैप टेक्स्ट", "एलाइन टेक्स्ट", "इंडेंट टेक्स्ट", "स्पेस टेक्स्ट"],
    "answer_en": "Wrap Text",
    "answer_hi": "रैप टेक्स्ट",
    "explanation_en": "Wrap text feature controls how text flows around images or other objects in a document.",
    "explanation_hi": "रैप टेक्स्ट सुविधा नियंत्रित करती है कि दस्तावेज़ में छवियों या अन्य वस्तुओं के आसपास टेक्स्ट कैसे प्रवाहित होता है।"
  },
  {
    "num": 9,
    "question_en": "Which protocol is used for secure web browsing?",
    "question_hi": "सुरक्षित वेब ब्राउज़िंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "answer_en": "HTTPS",
    "answer_hi": "HTTPS",
    "explanation_en": "HTTPS (HTTP Secure) encrypts data between web browser and server for secure communication.",
    "explanation_hi": "HTTPS (HTTP सिक्योर) सुरक्षित संचार के लिए वेब ब्राउज़र और सर्वर के बीच डेटा को एन्क्रिप्ट करता है।"
  },
  {
    "num": 10,
    "question_en": "What is the shortcut for printing the current document?",
    "question_hi": "वर्तमान दस्तावेज़ प्रिंट करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + P", "Ctrl + Print", "Alt + P", "Shift + P"],
    "options_hi": ["Ctrl + P", "Ctrl + Print", "Alt + P", "Shift + P"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P",
    "explanation_en": "Ctrl + P opens the print dialog box in most applications.",
    "explanation_hi": "Ctrl + P अधिकांश एप्लिकेशन में प्रिंट डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 11,
    "question_en": "What is the function of the Start button in Windows?",
    "question_hi": "Windows में स्टार्ट बटन का क्या कार्य है?",
    "options_en": ["Opens programs and settings", "Shuts down computer", "Opens task manager", "Minimizes all windows"],
    "options_hi": ["प्रोग्राम और सेटिंग खोलता है", "कंप्यूटर बंद करता है", "टास्क मैनेजर खोलता है", "सभी विंडोज को छोटा करता है"],
    "answer_en": "Opens programs and settings",
    "answer_hi": "प्रोग्राम और सेटिंग खोलता है",
    "explanation_en": "The Start button provides access to programs, settings, files, and features in Windows.",
    "explanation_hi": "स्टार्ट बटन Windows में प्रोग्राम, सेटिंग, फाइल और सुविधाओं तक पहुंच प्रदान करता है।"
  },
  {
    "num": 12,
    "question_en": "What is the primary storage device in a computer?",
    "question_hi": "कंप्यूटर में प्राथमिक संग्रहण उपकरण क्या है?",
    "options_en": ["Hard Disk Drive", "RAM", "ROM", "USB Drive"],
    "options_hi": ["हार्ड डिस्क ड्राइव", "RAM", "ROM", "USB ड्राइव"],
    "answer_en": "Hard Disk Drive",
    "answer_hi": "हार्ड डिस्क ड्राइव",
    "explanation_en": "Hard Disk Drive stores the operating system, programs, and user data permanently.",
    "explanation_hi": "हार्ड डिस्क ड्राइव ऑपरेटिंग सिस्टम, प्रोग्राम और उपयोगकर्ता डेटा को स्थायी रूप से संग्रहीत करता है।"
  },
  {
    "num": 13,
    "question_en": "Which software is used for database management?",
    "question_hi": "डेटाबेस प्रबंधन के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Base", "Writer", "Calc", "Impress"],
    "options_hi": ["बेस", "राइटर", "कैल्क", "इम्प्रेस"],
    "answer_en": "Base",
    "answer_hi": "बेस",
    "explanation_en": "Base is the database management component of LibreOffice suite.",
    "explanation_hi": "बेस LibreOffice सुइट का डेटाबेस प्रबंधन घटक है।"
  },
  {
    "num": 14,
    "question_en": "What is the shortcut for copying selected text?",
    "question_hi": "चयनित टेक्स्ट को कॉपी करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + C",
    "answer_hi": "Ctrl + C",
    "explanation_en": "Ctrl + C copies the selected content to the clipboard.",
    "explanation_hi": "Ctrl + C चयनित सामग्री को क्लिपबोर्ड पर कॉपी करता है।"
  },
  {
    "num": 15,
    "question_en": "What does DNS stand for?",
    "question_hi": "DNS का पूर्ण रूप क्या है?",
    "options_en": ["Domain Name System", "Domain Network System", "Digital Name System", "Digital Network System"],
    "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डिजिटल नेम सिस्टम", "डिजिटल नेटवर्क सिस्टम"],
    "answer_en": "Domain Name System",
    "answer_hi": "डोमेन नेम सिस्टम",
    "explanation_en": "DNS translates domain names (like google.com) to IP addresses that computers use.",
    "explanation_hi": "DNS डोमेन नाम (जैसे google.com) को IP पतों में अनुवादित करता है जिनका उपयोग कंप्यूटर करते हैं।"
  },
  {
    "num": 16,
    "question_en": "What is the unit of memory equal to 1024 bytes?",
    "question_hi": "मेमोरी की वह इकाई क्या है जो 1024 बाइट के बराबर होती है?",
    "options_en": ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
    "options_hi": ["किलोबाइट", "मेगाबाइट", "गीगाबाइट", "टेराबाइट"],
    "answer_en": "Kilobyte",
    "answer_hi": "किलोबाइट",
    "explanation_en": "1 Kilobyte (KB) = 1024 bytes in binary system used by computers.",
    "explanation_hi": "1 किलोबाइट (KB) = कंप्यूटर द्वारा उपयोग किए जाने वाले बाइनरी सिस्टम में 1024 बाइट।"
  },
  {
    "num": 17,
    "question_en": "What does URL contain that identifies a specific web page?",
    "question_hi": "URL में क्या होता है जो एक विशिष्ट वेब पेज की पहचान करता है?",
    "options_en": ["Protocol, domain, path", "Username, password", "IP address only", "Email address"],
    "options_hi": ["प्रोटोकॉल, डोमेन, पथ", "उपयोगकर्ता नाम, पासवर्ड", "केवल IP पता", "ईमेल पता"],
    "answer_en": "Protocol, domain, path",
    "answer_hi": "प्रोटोकॉल, डोमेन, पथ",
    "explanation_en": "A complete URL includes protocol (http/https), domain name, and path to specific resource.",
    "explanation_hi": "एक पूर्ण URL में प्रोटोकॉल (http/https), डोमेन नाम और विशिष्ट संसाधन का पथ शामिल होता है।"
  },
  {
    "num": 18,
    "question_en": "Which key combination opens the Task Manager in Windows?",
    "question_hi": "Windows में टास्क मैनेजर खोलने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Win + X"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Win + X"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc",
    "explanation_en": "Ctrl + Shift + Esc directly opens Task Manager in Windows.",
    "explanation_hi": "Ctrl + Shift + Esc Windows में सीधे टास्क मैनेजर खोलता है।"
  },
  {
    "num": 19,
    "question_en": "What is the shortcut for finding text within a document?",
    "question_hi": "दस्तावेज़ के भीतर टेक्स्ट ढूँढने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
    "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
    "answer_en": "Ctrl + F",
    "answer_hi": "Ctrl + F",
    "explanation_en": "Ctrl + F opens the Find dialog box to search for specific text.",
    "explanation_hi": "Ctrl + F विशिष्ट टेक्स्ट खोजने के लिए फाइंड डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 20,
    "question_en": "Which function counts all non-empty cells in a range?",
    "question_hi": "कौन सा फ़ंक्शन एक श्रृंखला में सभी गैर-रिक्त सेल गिनता है?",
    "options_en": ["COUNTA", "COUNT", "COUNTBLANK", "COUNTIF"],
    "options_hi": ["COUNTA", "COUNT", "COUNTBLANK", "COUNTIF"],
    "answer_en": "COUNTA",
    "answer_hi": "COUNTA",
    "explanation_en": "COUNTA counts all cells that are not empty, including those with text, numbers, or errors.",
    "explanation_hi": "COUNTA सभी सेल गिनता है जो खाली नहीं हैं, जिनमें टेक्स्ट, संख्याएँ या त्रुटियाँ शामिल हैं।"
  },
  {
    "num": 21,
    "question_en": "What is the shortcut for applying underline formatting?",
    "question_hi": "अंडरलाइन फ़ॉर्मेटिंग लागू करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + D"],
    "options_hi": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + D"],
    "answer_en": "Ctrl + U",
    "answer_hi": "Ctrl + U",
    "explanation_en": "Ctrl + U underlines the selected text or removes underline if already applied.",
    "explanation_hi": "Ctrl + U चयनित टेक्स्ट को रेखांकित करता है या यदि पहले से लागू है तो अंडरलाइन हटाता है।"
  },
  {
    "num": 22,
    "question_en": "What is the purpose of CC in email?",
    "question_hi": "ईमेल में CC का उद्देश्य क्या है?",
    "options_en": ["To keep others informed", "To send blind copies", "To mark as important", "To schedule sending"],
    "options_hi": ["दूसरों को सूचित रखने के लिए", "ब्लाइंड कॉपी भेजने के लिए", "महत्वपूर्ण के रूप में चिह्नित करने के लिए", "भेजने का समय निर्धारित करने के लिए"],
    "answer_en": "To keep others informed",
    "answer_hi": "दूसरों को सूचित रखने के लिए",
    "explanation_en": "CC (Carbon Copy) allows you to send a copy of the email to additional recipients who should be informed but aren't primary recipients.",
    "explanation_hi": "CC (कार्बन कॉपी) आपको ईमेल की एक प्रति अतिरिक्त प्राप्तकर्ताओं को भेजने की अनुमति देता है जिन्हें सूचित किया जाना चाहिए लेकिन प्राथमिक प्राप्तकर्ता नहीं हैं।"
  },
  {
    "num": 23,
    "question_en": "What is the full form of OS?",
    "question_hi": "OS का पूर्ण रूप क्या है?",
    "options_en": ["Operating System", "Operating Software", "Operation System", "Operation Software"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "ऑपरेटिंग सॉफ़्टवेयर", "ऑपरेशन सिस्टम", "ऑपरेशन सॉफ़्टवेयर"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम",
    "explanation_en": "Operating System manages computer hardware and software resources.",
    "explanation_hi": "ऑपरेटिंग सिस्टम कंप्यूटर हार्डवेयर और सॉफ़्टवेयर संसाधनों का प्रबंधन करता है।"
  },
  {
    "num": 24,
    "question_en": "Which device is used to input text and commands into computer?",
    "question_hi": "कंप्यूटर में टेक्स्ट और कमांड इनपुट करने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Keyboard", "Mouse", "Monitor", "Printer"],
    "options_hi": ["कीबोर्ड", "माउस", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड",
    "explanation_en": "Keyboard is the primary input device for entering text, numbers, and commands.",
    "explanation_hi": "कीबोर्ड टेक्स्ट, संख्याएँ और कमांड दर्ज करने के लिए प्राथमिक इनपुट डिवाइस है।"
  },
  {
    "num": 25,
    "question_en": "What is the shortcut for closing the current window?",
    "question_hi": "वर्तमान विंडो बंद करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + W", "Ctrl + F4", "Both", "Alt + F4"],
    "options_hi": ["Ctrl + W", "Ctrl + F4", "दोनों", "Alt + F4"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Both Ctrl+W and Ctrl+F4 close the current window in most applications.",
    "explanation_hi": "Ctrl+W और Ctrl+F4 दोनों अधिकांश एप्लिकेशन में वर्तमान विंडो बंद करते हैं।"
  },
  {
    "num": 26,
    "question_en": "What does ROM store that cannot be changed?",
    "question_hi": "ROM क्या संग्रहीत करता है जिसे बदला नहीं जा सकता?",
    "options_en": ["Firmware/Boot instructions", "User documents", "Temporary data", "Application files"],
    "options_hi": ["फर्मवेयर/बूट निर्देश", "उपयोगकर्ता दस्तावेज़", "अस्थायी डेटा", "एप्लिकेशन फाइल"],
    "answer_en": "Firmware/Boot instructions",
    "answer_hi": "फर्मवेयर/बूट निर्देश",
    "explanation_en": "ROM contains firmware or boot instructions that are essential for starting the computer.",
    "explanation_hi": "ROM में फर्मवेयर या बूट निर्देश होते हैं जो कंप्यूटर शुरू करने के लिए आवश्यक हैं।"
  },
  {
    "num": 27,
    "question_en": "Which software is used for word processing?",
    "question_hi": "वर्ड प्रोसेसिंग के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Writer", "Calc", "Impress", "Base"],
    "options_hi": ["राइटर", "कैल्क", "इम्प्रेस", "बेस"],
    "answer_en": "Writer",
    "answer_hi": "राइटर",
    "explanation_en": "Writer is the word processing component of LibreOffice suite.",
    "explanation_hi": "राइटर LibreOffice सुइट का वर्ड प्रोसेसिंग घटक है।"
  },
  {
    "num": 28,
    "question_en": "What is the shortcut for replacing text in a document?",
    "question_hi": "दस्तावेज़ में टेक्स्ट बदलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
    "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
    "answer_en": "Ctrl + H",
    "answer_hi": "Ctrl + H",
    "explanation_en": "Ctrl + H opens Find and Replace dialog box.",
    "explanation_hi": "Ctrl + H फाइंड एंड रिप्लेस डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 29,
    "question_en": "What does CPU use to temporarily store data during processing?",
    "question_hi": "प्रोसेसिंग के दौरान डेटा को अस्थायी रूप से संग्रहीत करने के लिए CPU क्या उपयोग करता है?",
    "options_en": ["Registers", "Hard Disk", "USB Drive", "CD-ROM"],
    "options_hi": ["रजिस्टर", "हार्ड डिस्क", "USB ड्राइव", "CD-ROM"],
    "answer_en": "Registers",
    "answer_hi": "रजिस्टर",
    "explanation_en": "Registers are small, fast storage locations within CPU for temporary data during processing.",
    "explanation_hi": "रजिस्टर प्रोसेसिंग के दौरान अस्थायी डेटा के लिए CPU के भीतर छोटे, तेज़ संग्रहण स्थान हैं।"
  },
  {
    "num": 30,
    "question_en": "What is the main advantage of using spreadsheet software?",
    "question_hi": "स्प्रेडशीट सॉफ़्टवेयर का उपयोग करने का मुख्य लाभ क्या है?",
    "options_en": ["Automatic calculations", "Better graphics", "Audio editing", "Video playback"],
    "options_hi": ["स्वचालित गणना", "बेहतर ग्राफिक्स", "ऑडियो संपादन", "वीडियो प्लेबैक"],
    "answer_en": "Automatic calculations",
    "answer_hi": "स्वचालित गणना",
    "explanation_en": "Spreadsheets automatically recalculate formulas when data changes, saving time and reducing errors.",
    "explanation_hi": "जब डेटा बदलता है तो स्प्रेडशीट सूत्रों को स्वचालित रूप से पुनर्गणना करती हैं, जिससे समय बचता है और त्रुटियाँ कम होती हैं।"
  },
  {
    "num": 31,
    "question_en": "What is the shortcut for redoing the last undone action?",
    "question_hi": "अंतिम पूर्ववत किए गए कार्य को फिर से करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + Shift + Z", "Both Ctrl+Y and Ctrl+Shift+Z"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + Shift + Z", "दोनों Ctrl+Y और Ctrl+Shift+Z"],
    "answer_en": "Both Ctrl+Y and Ctrl+Shift+Z",
    "answer_hi": "दोनों Ctrl+Y और Ctrl+Shift+Z",
    "explanation_en": "Both Ctrl+Y and Ctrl+Shift+Z redo the last undone action in many applications.",
    "explanation_hi": "Ctrl+Y और Ctrl+Shift+Z दोनों कई एप्लिकेशन में अंतिम पूर्ववत किए गए कार्य को फिर से करते हैं।"
  },
  {
    "num": 32,
    "question_en": "What does FTP stand for?",
    "question_hi": "FTP का पूर्ण रूप क्या है?",
    "options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Process", "File Transmission Process"],
    "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रांसफर प्रोसेस", "फाइल ट्रांसमिशन प्रोसेस"],
    "answer_en": "File Transfer Protocol",
    "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
    "explanation_en": "FTP is used to transfer files between computers on a network.",
    "explanation_hi": "FTP का उपयोग नेटवर्क पर कंप्यूटरों के बीच फ़ाइलों को स्थानांतरित करने के लिए किया जाता है।"
  },
  {
    "num": 33,
    "question_en": "Which key moves cursor to end of line?",
    "question_hi": "कौन सी कुंजी कर्सर को लाइन के अंत में ले जाती है?",
    "options_en": ["End", "Home", "Page Down", "Page Up"],
    "options_hi": ["एंड", "होम", "पेज डाउन", "पेज अप"],
    "answer_en": "End",
    "answer_hi": "एंड",
    "explanation_en": "End key moves cursor to the end of current line.",
    "explanation_hi": "एंड कुंजी कर्सर को वर्तमान लाइन के अंत में ले जाती है।"
  },
  {
    "num": 34,
    "question_en": "What is the shortcut for opening a file?",
    "question_hi": "फ़ाइल खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + O",
    "answer_hi": "Ctrl + O",
    "explanation_en": "Ctrl + O opens the Open dialog box to select and open an existing file.",
    "explanation_hi": "Ctrl + O मौजूदा फ़ाइल चुनने और खोलने के लिए ओपन डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 35,
    "question_en": "What does IT stand for?",
    "question_hi": "IT का पूर्ण रूप क्या है?",
    "options_en": ["Information Technology", "Internet Technology", "Information Transfer", "Internet Transfer"],
    "options_hi": ["सूचना प्रौद्योगिकी", "इंटरनेट प्रौद्योगिकी", "सूचना हस्तांतरण", "इंटरनेट हस्तांतरण"],
    "answer_en": "Information Technology",
    "answer_hi": "सूचना प्रौद्योगिकी",
    "explanation_en": "IT involves use of computers and telecommunications to store, retrieve, transmit, and manipulate data.",
    "explanation_hi": "IT में डेटा को संग्रहीत करने, पुनर्प्राप्त करने, प्रसारित करने और हेरफेर करने के लिए कंप्यूटर और दूरसंचार का उपयोग शामिल है।"
  },
  {
    "num": 36,
    "question_en": "What is the shortcut for creating a new file?",
    "question_hi": "नई फ़ाइल बनाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + N",
    "answer_hi": "Ctrl + N",
    "explanation_en": "Ctrl + N creates a new, blank document in most applications.",
    "explanation_hi": "Ctrl + N अधिकांश एप्लिकेशन में एक नया, रिक्त दस्तावेज़ बनाता है।"
  },
  {
    "num": 37,
    "question_en": "What does PAN stand for in networking?",
    "question_hi": "नेटवर्किंग में PAN का पूर्ण रूप क्या है?",
    "options_en": ["Personal Area Network", "Private Area Network", "Public Area Network", "Primary Area Network"],
    "options_hi": ["पर्सनल एरिया नेटवर्क", "प्राइवेट एरिया नेटवर्क", "पब्लिक एरिया नेटवर्क", "प्राइमरी एरिया नेटवर्क"],
    "answer_en": "Personal Area Network",
    "answer_hi": "पर्सनल एरिया नेटवर्क",
    "explanation_en": "PAN connects devices in close proximity, typically within a range of 10 meters.",
    "explanation_hi": "PAN निकटता में उपकरणों को जोड़ता है, आमतौर पर 10 मीटर की सीमा के भीतर।"
  },
  {
    "num": 38,
    "question_en": "Which function key is commonly used for renaming files?",
    "question_hi": "फ़ाइलों का नाम बदलने के लिए आमतौर पर किस फ़ंक्शन कुंजी का उपयोग किया जाता है?",
    "options_en": ["F2", "F1", "F5", "F12"],
    "options_hi": ["F2", "F1", "F5", "F12"],
    "answer_en": "F2",
    "answer_hi": "F2",
    "explanation_en": "F2 is commonly used to rename selected files or folders in Windows.",
    "explanation_hi": "F2 का उपयोग आमतौर पर Windows में चयनित फ़ाइलों या फ़ोल्डरों का नाम बदलने के लिए किया जाता है।"
  },
  {
    "num": 39,
    "question_en": "What is the shortcut for closing an application?",
    "question_hi": "एप्लिकेशन बंद करने की शॉर्टकट क्या है?",
    "options_en": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "All of these"],
    "options_hi": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "ये सभी"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4",
    "explanation_en": "Alt + F4 closes the current application window in Windows.",
    "explanation_hi": "Alt + F4 Windows में वर्तमान एप्लिकेशन विंडो बंद करता है।"
  },
  {
    "num": 40,
    "question_en": "What does SSD stand for?",
    "question_hi": "SSD का पूर्ण रूप क्या है?",
    "options_en": ["Solid State Drive", "Solid Storage Drive", "Static State Drive", "Static Storage Drive"],
    "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "स्टेटिक स्टेट ड्राइव", "स्टेटिक स्टोरेज ड्राइव"],
    "answer_en": "Solid State Drive",
    "answer_hi": "सॉलिड स्टेट ड्राइव",
    "explanation_en": "SSD uses flash memory to store data, offering faster access than traditional hard drives.",
    "explanation_hi": "SSD डेटा संग्रहीत करने के लिए फ्लैश मेमोरी का उपयोग करता है, जो पारंपरिक हार्ड ड्राइव की तुलना में तेज़ पहुँच प्रदान करता है।"
  },
  {
    "num": 41,
    "question_en": "Which function returns the current date in Calc?",
    "question_hi": "Calc में कौन सा फ़ंक्शन वर्तमान तिथि लौटाता है?",
    "options_en": ["TODAY", "NOW", "DATE", "CURRENTDATE"],
    "options_hi": ["TODAY", "NOW", "DATE", "CURRENTDATE"],
    "answer_en": "TODAY",
    "answer_hi": "TODAY",
    "explanation_en": "TODAY function returns the current date (without time).",
    "explanation_hi": "TODAY फ़ंक्शन वर्तमान तिथि लौटाता है (समय के बिना)।"
  },
  {
    "num": 42,
    "question_en": "What is the shortcut for finding and replacing text?",
    "question_hi": "टेक्स्ट ढूँढने और बदलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + Shift + F"],
    "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + Shift + F"],
    "answer_en": "Ctrl + H",
    "answer_hi": "Ctrl + H",
    "explanation_en": "Ctrl + H opens the Find and Replace dialog box in most applications.",
    "explanation_hi": "Ctrl + H अधिकांश एप्लिकेशन में फाइंड एंड रिप्लेस डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 43,
    "question_en": "What does CAD stand for?",
    "question_hi": "CAD का पूर्ण रूप क्या है?",
    "options_en": ["Computer-Aided Design", "Computer-Assisted Design", "Computer-Aided Drawing", "Computer-Assisted Drawing"],
    "options_hi": ["कंप्यूटर-एडेड डिज़ाइन", "कंप्यूटर-असिस्टेड डिज़ाइन", "कंप्यूटर-एडेड ड्राइंग", "कंप्यूटर-असिस्टेड ड्राइंग"],
    "answer_en": "Computer-Aided Design",
    "answer_hi": "कंप्यूटर-एडेड डिज़ाइन",
    "explanation_en": "CAD software is used by engineers and architects to create precision drawings and technical illustrations.",
    "explanation_hi": "CAD सॉफ़्टवेयर का उपयोग इंजीनियरों और आर्किटेक्ट्स द्वारा सटीक चित्र और तकनीकी चित्र बनाने के लिए किया जाता है।"
  },
  {
    "num": 44,
    "question_en": "What is the shortcut for saving a file with a different name?",
    "question_hi": "अलग नाम से फ़ाइल सहेजने की शॉर्टकट क्या है?",
    "options_en": ["F12", "Ctrl + Shift + S", "Both", "Ctrl + S"],
    "options_hi": ["F12", "Ctrl + Shift + S", "दोनों", "Ctrl + S"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Both F12 and Ctrl+Shift+S open the Save As dialog box in many applications.",
    "explanation_hi": "F12 और Ctrl+Shift+S दोनों कई एप्लिकेशन में सेव ऐस डायलॉग बॉक्स खोलते हैं।"
  },
  {
    "num": 45,
    "question_en": "What does CSS stand for in web development?",
    "question_hi": "वेब विकास में CSS का पूर्ण रूप क्या है?",
    "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading System Sheets"],
    "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कैस्केडिंग सिस्टम शीट्स"],
    "answer_en": "Cascading Style Sheets",
    "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
    "explanation_en": "CSS describes how HTML elements should be displayed on screen, paper, or in other media.",
    "explanation_hi": "CSS बताता है कि HTML तत्वों को स्क्रीन, कागज या अन्य मीडिया पर कैसे प्रदर्शित किया जाना चाहिए।"
  },
  {
    "num": 46,
    "question_en": "What is the shortcut for refreshing a web page?",
    "question_hi": "वेब पेज रिफ्रेश करने की शॉर्टकट क्या है?",
    "options_en": ["F5", "Ctrl + R", "Both", "Ctrl + F5"],
    "options_hi": ["F5", "Ctrl + R", "दोनों", "Ctrl + F5"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Both F5 and Ctrl+R refresh or reload the current web page in browsers.",
    "explanation_hi": "F5 और Ctrl+R दोनों ब्राउज़र में वर्तमान वेब पेज को रिफ्रेश या रीलोड करते हैं।"
  },
  {
    "num": 47,
    "question_en": "What does Wi-Fi stand for?",
    "question_hi": "Wi-Fi का पूर्ण रूप क्या है?",
    "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wired Fidelity", "Wired Frequency"],
    "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फिडेलिटी", "वायर्ड फ्रीक्वेंसी"],
    "answer_en": "Wireless Fidelity",
    "answer_hi": "वायरलेस फिडेलिटी",
    "explanation_en": "Wi-Fi is a wireless networking technology that allows devices to connect to the internet.",
    "explanation_hi": "Wi-Fi एक वायरलेस नेटवर्किंग तकनीक है जो उपकरणों को इंटरनेट से जुड़ने की अनुमति देती है।"
  },
  {
    "num": 48,
    "question_en": "What is the shortcut for going to a specific page in a document?",
    "question_hi": "दस्तावेज़ में किसी विशिष्ट पेज पर जाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + G", "Ctrl + F", "Ctrl + H", "Ctrl + J"],
    "options_hi": ["Ctrl + G", "Ctrl + F", "Ctrl + H", "Ctrl + J"],
    "answer_en": "Ctrl + G",
    "answer_hi": "Ctrl + G",
    "explanation_en": "Ctrl + G opens the Go To dialog box to jump to a specific page, line, or section.",
    "explanation_hi": "Ctrl + G गो टू डायलॉग बॉक्स खोलता है ताकि किसी विशिष्ट पेज, लाइन या सेक्शन पर जाया जा सके।"
  },
  {
    "num": 49,
    "question_en": "What does CMOS stand for in computers?",
    "question_hi": "कंप्यूटर में CMOS का पूर्ण रूप क्या है?",
    "options_en": ["Complementary Metal-Oxide Semiconductor", "Computer Metal-Oxide Semiconductor", "Complementary Memory-Oxide Semiconductor", "Computer Memory-Oxide Semiconductor"],
    "options_hi": ["कंप्लीमेंटरी मेटल-ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेटल-ऑक्साइड सेमीकंडक्टर", "कंप्लीमेंटरी मेमोरी-ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेमोरी-ऑक्साइड सेमीकंडक्टर"],
    "answer_en": "Complementary Metal-Oxide Semiconductor",
    "answer_hi": "कंप्लीमेंटरी मेटल-ऑक्साइड सेमीकंडक्टर",
    "explanation_en": "CMOS stores BIOS settings and is powered by a small battery on the motherboard.",
    "explanation_hi": "CMOS BIOS सेटिंग्स संग्रहीत करता है और मदरबोर्ड पर एक छोटी बैटरी द्वारा संचालित होता है।"
  },
  {
    "num": 50,
    "question_en": "What is the shortcut for accessing right-click menu without mouse?",
    "question_hi": "माउस के बिना राइट-क्लिक मेन्यू एक्सेस करने की शॉर्टकट क्या है?",
    "options_en": ["Shift + F10", "Ctrl + Right Click", "Alt + Right Click", "Space + F10"],
    "options_hi": ["Shift + F10", "Ctrl + Right Click", "Alt + Right Click", "Space + F10"],
    "answer_en": "Shift + F10",
    "answer_hi": "Shift + F10",
    "explanation_en": "Shift + F10 opens the context menu (right-click menu) for the selected item.",
    "explanation_hi": "Shift + F10 चयनित आइटम के लिए संदर्भ मेनू (राइट-क्लिक मेनू) खोलता है।"
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

