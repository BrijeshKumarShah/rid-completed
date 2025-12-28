const questions =[
  {
    "num": 1,
    "question_en": "Which device is used to input pictures into a computer?",
    "question_hi": "कंप्यूटर में चित्र डालने के लिए कौन-सा उपकरण प्रयोग होता है?",
    "options_en": ["Scanner", "Printer", "Speaker", "Monitor"],
    "options_hi": ["स्कैनर", "प्रिंटर", "स्पीकर", "मॉनिटर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 2,
    "question_en": "Which key is used to open Start Menu?",
    "question_hi": "स्टार्ट मेनू खोलने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["Windows key", "Ctrl", "Alt", "Shift"],
    "options_hi": ["विंडोज़ कुंजी", "कंट्रोल", "ऑल्ट", "शिफ्ट"],
    "answer_en": "Windows key",
    "answer_hi": "विंडोज़ कुंजी"
  },
  {
    "num": 3,
    "question_en": "Which type of computer is used in banks?",
    "question_hi": "बैंकों में किस प्रकार का कंप्यूटर उपयोग होता है?",
    "options_en": ["Mainframe", "Supercomputer", "Laptop", "Tablet"],
    "options_hi": ["मेनफ्रेम", "सुपरकंप्यूटर", "लैपटॉप", "टैबलेट"],
    "answer_en": "Mainframe",
    "answer_hi": "मेनफ्रेम"
  },
  {
    "num": 4,
    "question_en": "Which storage device uses magnetic tape?",
    "question_hi": "कौन-सा स्टोरेज डिवाइस मैग्नेटिक टेप का उपयोग करता है?",
    "options_en": ["Tape Drive", "DVD", "Pen Drive", "SSD"],
    "options_hi": ["टेप ड्राइव", "DVD", "पेन ड्राइव", "SSD"],
    "answer_en": "Tape Drive",
    "answer_hi": "टेप ड्राइव"
  },
  {
    "num": 5,
    "question_en": "Which symbol is used in email address?",
    "question_hi": "ईमेल एड्रेस में कौन-सा चिन्ह उपयोग होता है?",
    "options_en": ["@", "#", "$", "&"],
    "options_hi": ["@", "#", "$", "&"],
    "answer_en": "@",
    "answer_hi": "@"
  },

  {
    "num": 6,
    "question_en": "Which software is used to view PDF files?",
    "question_hi": "PDF फाइल देखने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Adobe Reader", "Paint", "Notepad", "Excel"],
    "options_hi": ["एडोबी रीडर", "पेंट", "नोटपैड", "एक्सेल"],
    "answer_en": "Adobe Reader",
    "answer_hi": "एडोबी रीडर"
  },
  {
    "num": 7,
    "question_en": "Which device converts digital signal to analog?",
    "question_hi": "डिजिटल सिग्नल को एनालॉग में बदलने वाला उपकरण कौन-सा है?",
    "options_en": ["Modem", "Router", "Hub", "Switch"],
    "options_hi": ["मॉडेम", "राउटर", "हब", "स्विच"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम"
  },
  {
    "num": 8,
    "question_en": "Which key is used to move cursor to next line?",
    "question_hi": "कर्सर को अगली पंक्ति में ले जाने की कुंजी कौन-सी है?",
    "options_en": ["Enter", "Tab", "Spacebar", "Shift"],
    "options_hi": ["एंटर", "टैब", "स्पेसबार", "शिफ्ट"],
    "answer_en": "Enter",
    "answer_hi": "एंटर"
  },
  {
    "num": 9,
    "question_en": "Which device is used for biometric input?",
    "question_hi": "बायोमेट्रिक इनपुट के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Fingerprint Scanner", "Mouse", "Joystick", "Plotter"],
    "options_hi": ["फिंगरप्रिंट स्कैनर", "माउस", "जॉयस्टिक", "प्लॉटर"],
    "answer_en": "Fingerprint Scanner",
    "answer_hi": "फिंगरप्रिंट स्कैनर"
  },
  {
    "num": 10,
    "question_en": "Which memory is used during booting?",
    "question_hi": "बूटिंग के समय कौन-सी मेमोरी उपयोग होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Hard Disk"],
    "options_hi": ["ROM", "RAM", "कैश", "हार्ड डिस्क"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },

  {
    "num": 11,
    "question_en": "Which unit converts AC to DC power?",
    "question_hi": "AC को DC में बदलने वाली इकाई कौन-सी है?",
    "options_en": ["SMPS", "UPS", "CPU", "ALU"],
    "options_hi": ["SMPS", "UPS", "CPU", "ALU"],
    "answer_en": "SMPS",
    "answer_hi": "SMPS"
  },
  {
    "num": 12,
    "question_en": "Which key combination locks the computer?",
    "question_hi": "कंप्यूटर लॉक करने का शॉर्टकट क्या है?",
    "options_en": ["Windows + L", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    "options_hi": ["Windows + L", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    "answer_en": "Windows + L",
    "answer_hi": "Windows + L"
  },
  {
    "num": 13,
    "question_en": "Which device is used in gaming?",
    "question_hi": "गेम खेलने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Joystick", "Scanner", "Printer", "Plotter"],
    "options_hi": ["जॉयस्टिक", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Joystick",
    "answer_hi": "जॉयस्टिक"
  },
  {
    "num": 14,
    "question_en": "Which software checks spelling errors?",
    "question_hi": "वर्तनी की जाँच करने वाला सॉफ्टवेयर कौन-सा है?",
    "options_en": ["Spell Checker", "Compiler", "Interpreter", "Driver"],
    "options_hi": ["स्पेल चेकर", "कंपाइलर", "इंटरप्रेटर", "ड्राइवर"],
    "answer_en": "Spell Checker",
    "answer_hi": "स्पेल चेकर"
  },
  {
    "num": 15,
    "question_en": "Which port is used for keyboard?",
    "question_hi": "कीबोर्ड के लिए कौन-सा पोर्ट उपयोग होता है?",
    "options_en": ["USB", "HDMI", "VGA", "LAN"],
    "options_hi": ["USB", "HDMI", "VGA", "LAN"],
    "answer_en": "USB",
    "answer_hi": "USB"
  },

  {
    "num": 16,
    "question_en": "Which device is used to store backup?",
    "question_hi": "बैकअप संग्रहित करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["External Hard Disk", "RAM", "Cache", "Register"],
    "options_hi": ["एक्सटर्नल हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "External Hard Disk",
    "answer_hi": "एक्सटर्नल हार्ड डिस्क"
  },
  {
    "num": 17,
    "question_en": "Which software is used for video editing?",
    "question_hi": "वीडियो एडिटिंग के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Adobe Premiere", "MS Word", "Excel", "Paint"],
    "options_hi": ["एडोबी प्रीमियर", "MS Word", "एक्सेल", "पेंट"],
    "answer_en": "Adobe Premiere",
    "answer_hi": "एडोबी प्रीमियर"
  },
  {
    "num": 18,
    "question_en": "Which key is used to open Run dialog box?",
    "question_hi": "Run डायलॉग बॉक्स खोलने की कुंजी कौन-सी है?",
    "options_en": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "options_hi": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "answer_en": "Windows + R",
    "answer_hi": "Windows + R"
  },
  {
    "num": 19,
    "question_en": "Which memory has no moving parts?",
    "question_hi": "किस मेमोरी में कोई मूविंग पार्ट नहीं होता?",
    "options_en": ["SSD", "Hard Disk", "DVD", "CD"],
    "options_hi": ["SSD", "हार्ड डिस्क", "DVD", "CD"],
    "answer_en": "SSD",
    "answer_hi": "SSD"
  },
  {
    "num": 20,
    "question_en": "Which device is used to connect multiple computers?",
    "question_hi": "कई कंप्यूटरों को जोड़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Switch", "Printer", "Scanner", "Plotter"],
    "options_hi": ["स्विच", "प्रिंटर", "स्कैनर", "प्लॉटर"],
    "answer_en": "Switch",
    "answer_hi": "स्विच"
  },

  {
    "num": 21,
    "question_en": "Which file extension is used for images?",
    "question_hi": "चित्रों के लिए कौन-सी फाइल एक्सटेंशन होती है?",
    "options_en": [".jpg", ".txt", ".exe", ".mp3"],
    "options_hi": [".jpg", ".txt", ".exe", ".mp3"],
    "answer_en": ".jpg",
    "answer_hi": ".jpg"
  },
  {
    "num": 22,
    "question_en": "Which software translates high-level language?",
    "question_hi": "हाई लेवल लैंग्वेज को अनुवाद करने वाला सॉफ्टवेयर कौन-सा है?",
    "options_en": ["Interpreter", "Browser", "Editor", "Player"],
    "options_hi": ["इंटरप्रेटर", "ब्राउज़र", "एडिटर", "प्लेयर"],
    "answer_en": "Interpreter",
    "answer_hi": "इंटरप्रेटर"
  },
  {
    "num": 23,
    "question_en": "Which device is used to display maps and designs?",
    "question_hi": "नक्शे और डिज़ाइन दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Plotter", "Printer", "Monitor", "Speaker"],
    "options_hi": ["प्लॉटर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Plotter",
    "answer_hi": "प्लॉटर"
  },
  {
    "num": 24,
    "question_en": "Which network covers a small area?",
    "question_hi": "छोटे क्षेत्र को कवर करने वाला नेटवर्क कौन-सा है?",
    "options_en": ["LAN", "WAN", "MAN", "Internet"],
    "options_hi": ["LAN", "WAN", "MAN", "इंटरनेट"],
    "answer_en": "LAN",
    "answer_hi": "LAN"
  },
  {
    "num": 25,
    "question_en": "Which key combination is used to minimize all windows?",
    "question_hi": "सभी विंडो मिनिमाइज़ करने का शॉर्टकट क्या है?",
    "options_en": ["Windows + D", "Alt + F4", "Ctrl + M", "Ctrl + D"],
    "options_hi": ["Windows + D", "Alt + F4", "Ctrl + M", "Ctrl + D"],
    "answer_en": "Windows + D",
    "answer_hi": "Windows + D"
  },
  [
  {
    "num": 26,
    "question_en": "Which device is used to store large amount of data online?",
    "question_hi": "ऑनलाइन बड़ी मात्रा में डेटा संग्रहित करने के लिए किसका उपयोग होता है?",
    "options_en": ["Cloud Storage", "RAM", "Cache", "Register"],
    "options_hi": ["क्लाउड स्टोरेज", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Cloud Storage",
    "answer_hi": "क्लाउड स्टोरेज"
  },
  {
    "num": 27,
    "question_en": "Which key is used to open File Explorer?",
    "question_hi": "फाइल एक्सप्लोरर खोलने की कुंजी कौन-सी है?",
    "options_en": ["Windows + E", "Ctrl + E", "Alt + E", "Shift + E"],
    "options_hi": ["Windows + E", "Ctrl + E", "Alt + E", "Shift + E"],
    "answer_en": "Windows + E",
    "answer_hi": "Windows + E"
  },
  {
    "num": 28,
    "question_en": "Which software is used for online meetings?",
    "question_hi": "ऑनलाइन मीटिंग के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Zoom", "Paint", "Notepad", "Calculator"],
    "options_hi": ["ज़ूम", "पेंट", "नोटपैड", "कैलकुलेटर"],
    "answer_en": "Zoom",
    "answer_hi": "ज़ूम"
  },
  {
    "num": 29,
    "question_en": "Which part of CPU performs calculations?",
    "question_hi": "CPU का कौन-सा भाग गणना करता है?",
    "options_en": ["ALU", "CU", "Register", "Cache"],
    "options_hi": ["ALU", "CU", "रजिस्टर", "कैश"],
    "answer_en": "ALU",
    "answer_hi": "ALU"
  },
  {
    "num": 30,
    "question_en": "Which device is used to read barcodes?",
    "question_hi": "बारकोड पढ़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Barcode Reader", "Scanner", "Mouse", "Light Pen"],
    "options_hi": ["बारकोड रीडर", "स्कैनर", "माउस", "लाइट पेन"],
    "answer_en": "Barcode Reader",
    "answer_hi": "बारकोड रीडर"
  },

  {
    "num": 31,
    "question_en": "Which software is used to play music?",
    "question_hi": "संगीत चलाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Media Player", "Compiler", "Driver", "Editor"],
    "options_hi": ["मीडिया प्लेयर", "कंपाइलर", "ड्राइवर", "एडिटर"],
    "answer_en": "Media Player",
    "answer_hi": "मीडिया प्लेयर"
  },
  {
    "num": 32,
    "question_en": "Which memory is closest to CPU?",
    "question_hi": "CPU के सबसे निकट कौन-सी मेमोरी होती है?",
    "options_en": ["Cache Memory", "RAM", "ROM", "Hard Disk"],
    "options_hi": ["कैश मेमोरी", "RAM", "ROM", "हार्ड डिस्क"],
    "answer_en": "Cache Memory",
    "answer_hi": "कैश मेमोरी"
  },
  {
    "num": 33,
    "question_en": "Which key is used to take screenshot?",
    "question_hi": "स्क्रीनशॉट लेने की कुंजी कौन-सी है?",
    "options_en": ["Print Screen", "Scroll Lock", "Pause", "Insert"],
    "options_hi": ["प्रिंट स्क्रीन", "स्क्रॉल लॉक", "पॉज़", "इंसर्ट"],
    "answer_en": "Print Screen",
    "answer_hi": "प्रिंट स्क्रीन"
  },
  {
    "num": 34,
    "question_en": "Which device is used for touch input?",
    "question_hi": "टच इनपुट के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Touch Screen", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["टच स्क्रीन", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Touch Screen",
    "answer_hi": "टच स्क्रीन"
  },
  {
    "num": 35,
    "question_en": "Which software is used to compress files?",
    "question_hi": "फाइल को संपीड़ित करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["WinZip", "Paint", "Word", "Excel"],
    "options_hi": ["विनज़िप", "पेंट", "वर्ड", "एक्सेल"],
    "answer_en": "WinZip",
    "answer_hi": "विनज़िप"
  },

  {
    "num": 36,
    "question_en": "Which device provides backup power?",
    "question_hi": "बैकअप पावर देने वाला उपकरण कौन-सा है?",
    "options_en": ["UPS", "SMPS", "CPU", "Modem"],
    "options_hi": ["UPS", "SMPS", "CPU", "मॉडेम"],
    "answer_en": "UPS",
    "answer_hi": "UPS"
  },
  {
    "num": 37,
    "question_en": "Which key combination is used to search files?",
    "question_hi": "फाइल खोजने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + F", "Ctrl + S", "Ctrl + N", "Ctrl + O"],
    "options_hi": ["Ctrl + F", "Ctrl + S", "Ctrl + N", "Ctrl + O"],
    "answer_en": "Ctrl + F",
    "answer_hi": "Ctrl + F"
  },
  {
    "num": 38,
    "question_en": "Which device measures computer performance?",
    "question_hi": "कंप्यूटर के प्रदर्शन को मापने के लिए क्या उपयोग होता है?",
    "options_en": ["Benchmark Tool", "Printer", "Scanner", "Plotter"],
    "options_hi": ["बेंचमार्क टूल", "प्रिंटर", "स्कैनर", "प्लॉटर"],
    "answer_en": "Benchmark Tool",
    "answer_hi": "बेंचमार्क टूल"
  },
  {
    "num": 39,
    "question_en": "Which type of software is antivirus?",
    "question_hi": "एंटीवायरस किस प्रकार का सॉफ्टवेयर है?",
    "options_en": ["Utility Software", "Application Software", "System Software", "Firmware"],
    "options_hi": ["यूटिलिटी सॉफ्टवेयर", "एप्लिकेशन सॉफ्टवेयर", "सिस्टम सॉफ्टवेयर", "फर्मवेयर"],
    "answer_en": "Utility Software",
    "answer_hi": "यूटिलिटी सॉफ्टवेयर"
  },
  {
    "num": 40,
    "question_en": "Which device is used to read smart cards?",
    "question_hi": "स्मार्ट कार्ड पढ़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Card Reader", "Scanner", "Barcode Reader", "Joystick"],
    "options_hi": ["कार्ड रीडर", "स्कैनर", "बारकोड रीडर", "जॉयस्टिक"],
    "answer_en": "Card Reader",
    "answer_hi": "कार्ड रीडर"
  },

  {
    "num": 41,
    "question_en": "Which software is used for database management?",
    "question_hi": "डेटाबेस प्रबंधन के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Access", "Paint", "Notepad", "Browser"],
    "options_hi": ["MS Access", "पेंट", "नोटपैड", "ब्राउज़र"],
    "answer_en": "MS Access",
    "answer_hi": "MS Access"
  },
  {
    "num": 42,
    "question_en": "Which network type is used in offices?",
    "question_hi": "कार्यालयों में किस प्रकार का नेटवर्क उपयोग होता है?",
    "options_en": ["LAN", "WAN", "PAN", "Internet"],
    "options_hi": ["LAN", "WAN", "PAN", "इंटरनेट"],
    "answer_en": "LAN",
    "answer_hi": "LAN"
  },
  {
    "num": 43,
    "question_en": "Which device is used to input handwritten text?",
    "question_hi": "हस्तलिखित टेक्स्ट इनपुट करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Light Pen", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["लाइट पेन", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Light Pen",
    "answer_hi": "लाइट पेन"
  },
  {
    "num": 44,
    "question_en": "Which key combination switches between open apps?",
    "question_hi": "खुले ऐप्स के बीच स्विच करने का शॉर्टकट क्या है?",
    "options_en": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Ctrl + Alt"],
    "options_hi": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Ctrl + Alt"],
    "answer_en": "Alt + Tab",
    "answer_hi": "Alt + Tab"
  },
  {
    "num": 45,
    "question_en": "Which device is used for virtual reality?",
    "question_hi": "वर्चुअल रियलिटी के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["VR Headset", "Webcam", "Projector", "Plotter"],
    "options_hi": ["VR हेडसेट", "वेबकैम", "प्रोजेक्टर", "प्लॉटर"],
    "answer_en": "VR Headset",
    "answer_hi": "VR हेडसेट"
  },

  {
    "num": 46,
    "question_en": "Which software manages hardware resources?",
    "question_hi": "हार्डवेयर संसाधनों का प्रबंधन करने वाला सॉफ्टवेयर कौन-सा है?",
    "options_en": ["Operating System", "Application Software", "Utility", "Driver"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एप्लिकेशन सॉफ्टवेयर", "यूटिलिटी", "ड्राइवर"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
  },
  {
    "num": 47,
    "question_en": "Which device is used to display presentations to audience?",
    "question_hi": "दर्शकों को प्रेज़ेंटेशन दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Projector", "Monitor", "Printer", "Scanner"],
    "options_hi": ["प्रोजेक्टर", "मॉनिटर", "प्रिंटर", "स्कैनर"],
    "answer_en": "Projector",
    "answer_hi": "प्रोजेक्टर"
  },
  {
    "num": 48,
    "question_en": "Which key is used to cancel an operation?",
    "question_hi": "किसी क्रिया को रद्द करने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["Esc", "Enter", "Tab", "Shift"],
    "options_hi": ["एस्केप", "एंटर", "टैब", "शिफ्ट"],
    "answer_en": "Esc",
    "answer_hi": "Esc"
  },
  {
    "num": 49,
    "question_en": "Which software is used to design graphics?",
    "question_hi": "ग्राफिक्स डिज़ाइन करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["CorelDRAW", "MS Word", "Notepad", "Calculator"],
    "options_hi": ["कोरलड्रॉ", "MS Word", "नोटपैड", "कैलकुलेटर"],
    "answer_en": "CorelDRAW",
    "answer_hi": "CorelDRAW"
  },
  {
    "num": 50,
    "question_en": "Which device is used to connect to Wi-Fi?",
    "question_hi": "Wi-Fi से कनेक्ट होने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Wi-Fi Adapter", "Printer", "Scanner", "Plotter"],
    "options_hi": ["Wi-फाई एडेप्टर", "प्रिंटर", "स्कैनर", "प्लॉटर"],
    "answer_en": "Wi-Fi Adapter",
    "answer_hi": "Wi-फाई एडेप्टर"
  }
]

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

