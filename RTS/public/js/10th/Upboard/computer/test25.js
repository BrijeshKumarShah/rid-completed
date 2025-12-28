const questions =[
  {
    "num": 1,
    "question_en": "What does CPU stand for?",
    "question_hi": "CPU का पूरा नाम क्या है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट"
  },
  {
    "num": 2,
    "question_en": "Which device is used to input sound?",
    "question_hi": "ध्वनि इनपुट के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Microphone", "Speaker", "Monitor", "Printer"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन"
  },
  {
    "num": 3,
    "question_en": "Which memory is fastest?",
    "question_hi": "सबसे तेज़ मेमोरी कौन-सी होती है?",
    "options_en": ["Cache Memory", "RAM", "ROM", "Hard Disk"],
    "options_hi": ["कैश मेमोरी", "RAM", "ROM", "हार्ड डिस्क"],
    "answer_en": "Cache Memory",
    "answer_hi": "कैश मेमोरी"
  },
  {
    "num": 4,
    "question_en": "Which key is used to delete selected item?",
    "question_hi": "चुने हुए आइटम को हटाने की कुंजी कौन-सी है?",
    "options_en": ["Delete", "Backspace", "Esc", "Shift"],
    "options_hi": ["डिलीट", "बैकस्पेस", "एस्केप", "शिफ्ट"],
    "answer_en": "Delete",
    "answer_hi": "डिलीट"
  },
  {
    "num": 5,
    "question_en": "Which device is used to display video?",
    "question_hi": "वीडियो दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Monitor", "Scanner", "Mouse", "UPS"],
    "options_hi": ["मॉनिटर", "स्कैनर", "माउस", "UPS"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },

  {
    "num": 6,
    "question_en": "Which software is used to type documents?",
    "question_hi": "दस्तावेज़ टाइप करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Word", "MS Excel", "Paint", "Chrome"],
    "options_hi": ["MS वर्ड", "MS एक्सेल", "पेंट", "क्रोम"],
    "answer_en": "MS Word",
    "answer_hi": "MS वर्ड"
  },
  {
    "num": 7,
    "question_en": "Which unit stores instructions temporarily?",
    "question_hi": "निर्देशों को अस्थायी रूप से कौन-सी इकाई स्टोर करती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Pen Drive"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "RAM"
  },
  {
    "num": 8,
    "question_en": "Which key opens Start Menu in Windows?",
    "question_hi": "Windows में स्टार्ट मेनू खोलने की कुंजी कौन-सी है?",
    "options_en": ["Windows Key", "Alt", "Ctrl", "Tab"],
    "options_hi": ["विंडोज़ कुंजी", "ऑल्ट", "कंट्रोल", "टैब"],
    "answer_en": "Windows Key",
    "answer_hi": "विंडोज़ कुंजी"
  },
  {
    "num": 9,
    "question_en": "Which device is used to scan photos?",
    "question_hi": "फोटो स्कैन करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Scanner", "Printer", "Webcam", "Monitor"],
    "options_hi": ["स्कैनर", "प्रिंटर", "वेबकैम", "मॉनिटर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 10,
    "question_en": "Which software is an operating system?",
    "question_hi": "निम्न में से कौन ऑपरेटिंग सिस्टम है?",
    "options_en": ["Linux", "MS Word", "Paint", "Excel"],
    "options_hi": ["लिनक्स", "MS वर्ड", "पेंट", "एक्सेल"],
    "answer_en": "Linux",
    "answer_hi": "लिनक्स"
  },

  {
    "num": 11,
    "question_en": "Which key combination copies text?",
    "question_hi": "टेक्स्ट कॉपी करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + C",
    "answer_hi": "Ctrl + C"
  },
  {
    "num": 12,
    "question_en": "Which storage device is optical?",
    "question_hi": "कौन-सा स्टोरेज डिवाइस ऑप्टिकल होता है?",
    "options_en": ["CD", "Hard Disk", "Pen Drive", "RAM"],
    "options_hi": ["CD", "हार्ड डिस्क", "पेन ड्राइव", "RAM"],
    "answer_en": "CD",
    "answer_hi": "CD"
  },
  {
    "num": 13,
    "question_en": "Which device is used for drawing on screen?",
    "question_hi": "स्क्रीन पर ड्रॉ करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Stylus", "Mouse", "Keyboard", "Speaker"],
    "options_hi": ["स्टाइलस", "माउस", "कीबोर्ड", "स्पीकर"],
    "answer_en": "Stylus",
    "answer_hi": "स्टाइलस"
  },
  {
    "num": 14,
    "question_en": "Which file extension is used for text files?",
    "question_hi": "टेक्स्ट फाइल का एक्सटेंशन क्या है?",
    "options_en": [".txt", ".docx", ".xlsx", ".pptx"],
    "options_hi": [".txt", ".docx", ".xlsx", ".pptx"],
    "answer_en": ".txt",
    "answer_hi": ".txt"
  },
  {
    "num": 15,
    "question_en": "Which network connects computers worldwide?",
    "question_hi": "विश्वभर के कंप्यूटरों को कौन-सा नेटवर्क जोड़ता है?",
    "options_en": ["Internet", "LAN", "MAN", "PAN"],
    "options_hi": ["इंटरनेट", "LAN", "MAN", "PAN"],
    "answer_en": "Internet",
    "answer_hi": "इंटरनेट"
  },

  {
    "num": 16,
    "question_en": "Which key cancels a command?",
    "question_hi": "किसी कमांड को रद्द करने की कुंजी कौन-सी है?",
    "options_en": ["Esc", "Enter", "Tab", "Shift"],
    "options_hi": ["एस्केप", "एंटर", "टैब", "शिफ्ट"],
    "answer_en": "Esc",
    "answer_hi": "एस्केप"
  },
  {
    "num": 17,
    "question_en": "Which device provides internet wirelessly?",
    "question_hi": "वायरलेस इंटरनेट देने वाला उपकरण कौन-सा है?",
    "options_en": ["Wi-Fi Router", "Modem", "Switch", "Hub"],
    "options_hi": ["वाई-फाई राउटर", "मोडेम", "स्विच", "हब"],
    "answer_en": "Wi-Fi Router",
    "answer_hi": "वाई-फाई राउटर"
  },
  {
    "num": 18,
    "question_en": "Which shortcut opens File Explorer?",
    "question_hi": "फाइल एक्सप्लोरर खोलने का शॉर्टकट क्या है?",
    "options_en": ["Win + E", "Win + D", "Ctrl + E", "Alt + E"],
    "options_hi": ["Win + E", "Win + D", "Ctrl + E", "Alt + E"],
    "answer_en": "Win + E",
    "answer_hi": "Win + E"
  },
  {
    "num": 19,
    "question_en": "Which device converts sound to digital form?",
    "question_hi": "ध्वनि को डिजिटल रूप में कौन बदलता है?",
    "options_en": ["Microphone", "Speaker", "UPS", "Monitor"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "UPS", "मॉनिटर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन"
  },
  {
    "num": 20,
    "question_en": "Which software is used for calculations?",
    "question_hi": "गणना के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Excel", "MS Word", "Paint", "Notepad"],
    "options_hi": ["MS एक्सेल", "MS वर्ड", "पेंट", "नोटपैड"],
    "answer_en": "MS Excel",
    "answer_hi": "MS एक्सेल"
  },

  {
    "num": 21,
    "question_en": "Which device gives printed output?",
    "question_hi": "मुद्रित आउटपुट कौन देता है?",
    "options_en": ["Printer", "Monitor", "Speaker", "Scanner"],
    "options_hi": ["प्रिंटर", "मॉनिटर", "स्पीकर", "स्कैनर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर"
  },
  {
    "num": 22,
    "question_en": "Which key is used to refresh desktop?",
    "question_hi": "डेस्कटॉप रिफ्रेश करने की कुंजी कौन-सी है?",
    "options_en": ["F5", "F2", "F1", "F12"],
    "options_hi": ["F5", "F2", "F1", "F12"],
    "answer_en": "F5",
    "answer_hi": "F5"
  },
  {
    "num": 23,
    "question_en": "Which device helps in video recording?",
    "question_hi": "वीडियो रिकॉर्डिंग में कौन-सा उपकरण मदद करता है?",
    "options_en": ["Webcam", "Printer", "Joystick", "Plotter"],
    "options_hi": ["वेबकैम", "प्रिंटर", "जॉयस्टिक", "प्लॉटर"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 24,
    "question_en": "Which key combination shuts down Windows?",
    "question_hi": "Windows शटडाउन का शॉर्टकट क्या है?",
    "options_en": ["Alt + F4", "Ctrl + F4", "Win + X", "Ctrl + Alt + Del"],
    "options_hi": ["Alt + F4", "Ctrl + F4", "Win + X", "Ctrl + Alt + Del"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4"
  },
  {
    "num": 25,
    "question_en": "Which device stores data in cloud?",
    "question_hi": "क्लाउड में डाटा कहाँ स्टोर होता है?",
    "options_en": ["Internet Server", "Hard Disk", "Pen Drive", "DVD"],
    "options_hi": ["इंटरनेट सर्वर", "हार्ड डिस्क", "पेन ड्राइव", "DVD"],
    "answer_en": "Internet Server",
    "answer_hi": "इंटरनेट सर्वर"
  },
  [
  {
    "num": 25,
    "question_en": "Which technology is used for video conferencing?",
    "question_hi": "वीडियो कॉन्फ्रेंसिंग के लिए कौन-सी तकनीक उपयोग होती है?",
    "options_en": ["Internet", "Bluetooth", "Infrared", "Fax"],
    "options_hi": ["इंटरनेट", "ब्लूटूथ", "इन्फ्रारेड", "फैक्स"],
    "answer_en": "Internet",
    "answer_hi": "इंटरनेट"
  },
  {
    "num": 26,
    "question_en": "Which device is used to read barcodes?",
    "question_hi": "बारकोड पढ़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Barcode Scanner", "OCR", "Mouse", "Light Pen"],
    "options_hi": ["बारकोड स्कैनर", "OCR", "माउस", "लाइट पेन"],
    "answer_en": "Barcode Scanner",
    "answer_hi": "बारकोड स्कैनर"
  },
  {
    "num": 27,
    "question_en": "Which memory is used during booting?",
    "question_hi": "बूटिंग के समय कौन-सी मेमोरी उपयोग होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Hard Disk"],
    "options_hi": ["ROM", "RAM", "कैश", "हार्ड डिस्क"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },
  {
    "num": 28,
    "question_en": "Which software is used to play videos?",
    "question_hi": "वीडियो चलाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Media Player", "MS Word", "Excel", "Notepad"],
    "options_hi": ["मीडिया प्लेयर", "MS वर्ड", "एक्सेल", "नोटपैड"],
    "answer_en": "Media Player",
    "answer_hi": "मीडिया प्लेयर"
  },
  {
    "num": 29,
    "question_en": "Which shortcut is used to redo an action?",
    "question_hi": "किसी क्रिया को फिर से करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "answer_en": "Ctrl + Y",
    "answer_hi": "Ctrl + Y"
  },
  {
    "num": 30,
    "question_en": "Which device converts soft copy to hard copy?",
    "question_hi": "सॉफ्ट कॉपी को हार्ड कॉपी में कौन बदलता है?",
    "options_en": ["Printer", "Scanner", "Monitor", "Speaker"],
    "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर"
  },
  {
    "num": 31,
    "question_en": "Which network type is used in offices?",
    "question_hi": "ऑफिस में किस प्रकार का नेटवर्क उपयोग होता है?",
    "options_en": ["LAN", "WAN", "MAN", "PAN"],
    "options_hi": ["LAN", "WAN", "MAN", "PAN"],
    "answer_en": "LAN",
    "answer_hi": "LAN"
  },
  {
    "num": 32,
    "question_en": "Which device supplies power to motherboard?",
    "question_hi": "मदरबोर्ड को बिजली कौन देता है?",
    "options_en": ["SMPS", "UPS", "CPU", "RAM"],
    "options_hi": ["SMPS", "UPS", "CPU", "RAM"],
    "answer_en": "SMPS",
    "answer_hi": "SMPS"
  },
  {
    "num": 33,
    "question_en": "Which key moves cursor to next tab space?",
    "question_hi": "कर्सर को अगले टैब स्पेस में ले जाने की कुंजी कौन-सी है?",
    "options_en": ["Tab", "Enter", "Shift", "Ctrl"],
    "options_hi": ["टैब", "एंटर", "शिफ्ट", "कंट्रोल"],
    "answer_en": "Tab",
    "answer_hi": "टैब"
  },
  {
    "num": 34,
    "question_en": "Which software helps to remove junk files?",
    "question_hi": "जंक फाइल हटाने में कौन-सा सॉफ्टवेयर मदद करता है?",
    "options_en": ["Disk Cleanup", "Paint", "Browser", "Compiler"],
    "options_hi": ["डिस्क क्लीनअप", "पेंट", "ब्राउज़र", "कंपाइलर"],
    "answer_en": "Disk Cleanup",
    "answer_hi": "डिस्क क्लीनअप"
  },
  {
    "num": 35,
    "question_en": "Which input device is used in games?",
    "question_hi": "गेम्स में कौन-सा इनपुट डिवाइस उपयोग होता है?",
    "options_en": ["Gamepad", "Scanner", "Printer", "Plotter"],
    "options_hi": ["गेमपैड", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Gamepad",
    "answer_hi": "गेमपैड"
  },
  {
    "num": 36,
    "question_en": "Which extension is used for image files?",
    "question_hi": "इमेज फाइल के लिए कौन-सा एक्सटेंशन उपयोग होता है?",
    "options_en": [".jpg", ".txt", ".exe", ".docx"],
    "options_hi": [".jpg", ".txt", ".exe", ".docx"],
    "answer_en": ".jpg",
    "answer_hi": ".jpg"
  },
  {
    "num": 37,
    "question_en": "Which device helps in online authentication?",
    "question_hi": "ऑनलाइन प्रमाणीकरण में कौन-सा उपकरण मदद करता है?",
    "options_en": ["OTP Generator", "Printer", "Speaker", "Monitor"],
    "options_hi": ["OTP जनरेटर", "प्रिंटर", "स्पीकर", "मॉनिटर"],
    "answer_en": "OTP Generator",
    "answer_hi": "OTP जनरेटर"
  },
  {
    "num": 38,
    "question_en": "Which key combination minimizes all windows?",
    "question_hi": "सभी विंडो मिनिमाइज़ करने का शॉर्टकट क्या है?",
    "options_en": ["Win + D", "Alt + D", "Ctrl + D", "Win + M"],
    "options_hi": ["Win + D", "Alt + D", "Ctrl + D", "Win + M"],
    "answer_en": "Win + D",
    "answer_hi": "Win + D"
  },
  {
    "num": 39,
    "question_en": "Which device is used to capture fingerprints?",
    "question_hi": "फिंगरप्रिंट कैप्चर करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Biometric Scanner", "Joystick", "Mouse", "Speaker"],
    "options_hi": ["बायोमेट्रिक स्कैनर", "जॉयस्टिक", "माउस", "स्पीकर"],
    "answer_en": "Biometric Scanner",
    "answer_hi": "बायोमेट्रिक स्कैनर"
  },
  {
    "num": 40,
    "question_en": "Which software manages computer resources?",
    "question_hi": "कंप्यूटर संसाधनों को कौन-सा सॉफ्टवेयर प्रबंधित करता है?",
    "options_en": ["Operating System", "Application Software", "Utility Software", "Antivirus"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एप्लिकेशन सॉफ्टवेयर", "यूटिलिटी सॉफ्टवेयर", "एंटीवायरस"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
  },
  {
    "num": 41,
    "question_en": "Which device is used to store photos?",
    "question_hi": "फोटो स्टोर करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Memory Card", "CPU", "Monitor", "Keyboard"],
    "options_hi": ["मेमोरी कार्ड", "CPU", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Memory Card",
    "answer_hi": "मेमोरी कार्ड"
  },
  {
    "num": 42,
    "question_en": "Which key opens Run dialog box?",
    "question_hi": "Run डायलॉग बॉक्स खोलने की कुंजी कौन-सी है?",
    "options_en": ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "options_hi": ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "answer_en": "Win + R",
    "answer_hi": "Win + R"
  },
  {
    "num": 43,
    "question_en": "Which technology is used in contactless cards?",
    "question_hi": "कॉन्टैक्टलेस कार्ड में कौन-सी तकनीक उपयोग होती है?",
    "options_en": ["NFC", "Bluetooth", "Wi-Fi", "Infrared"],
    "options_hi": ["NFC", "ब्लूटूथ", "वाई-फाई", "इन्फ्रारेड"],
    "answer_en": "NFC",
    "answer_hi": "NFC"
  },
  {
    "num": 44,
    "question_en": "Which device is used to type numeric data quickly?",
    "question_hi": "संख्यात्मक डेटा जल्दी टाइप करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Numeric Keypad", "Mouse", "Scanner", "Joystick"],
    "options_hi": ["न्यूमेरिक कीपैड", "माउस", "स्कैनर", "जॉयस्टिक"],
    "answer_en": "Numeric Keypad",
    "answer_hi": "न्यूमेरिक कीपैड"
  },
  {
    "num": 45,
    "question_en": "Which software is used for email?",
    "question_hi": "ईमेल के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Email Client", "Compiler", "Debugger", "Driver"],
    "options_hi": ["ईमेल क्लाइंट", "कंपाइलर", "डीबगर", "ड्राइवर"],
    "answer_en": "Email Client",
    "answer_hi": "ईमेल क्लाइंट"
  },
  {
    "num": 46,
    "question_en": "Which device is used for touch input?",
    "question_hi": "टच इनपुट के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Touch Screen", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["टच स्क्रीन", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Touch Screen",
    "answer_hi": "टच स्क्रीन"
  },
  {
    "num": 47,
    "question_en": "Which shortcut opens browser history?",
    "question_hi": "ब्राउज़र हिस्ट्री खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + H", "Ctrl + J", "Ctrl + B", "Ctrl + Y"],
    "options_hi": ["Ctrl + H", "Ctrl + J", "Ctrl + B", "Ctrl + Y"],
    "answer_en": "Ctrl + H",
    "answer_hi": "Ctrl + H"
  },
  {
    "num": 48,
    "question_en": "Which device helps in online payments?",
    "question_hi": "ऑनलाइन भुगतान में कौन-सा उपकरण मदद करता है?",
    "options_en": ["Smartphone", "Plotter", "Scanner", "UPS"],
    "options_hi": ["स्मार्टफोन", "प्लॉटर", "स्कैनर", "UPS"],
    "answer_en": "Smartphone",
    "answer_hi": "स्मार्टफोन"
  },
  {
    "num": 49,
    "question_en": "Which file extension is used for audio?",
    "question_hi": "ऑडियो फाइल का एक्सटेंशन क्या है?",
    "options_en": [".mp3", ".mp4", ".jpg", ".pdf"],
    "options_hi": [".mp3", ".mp4", ".jpg", ".pdf"],
    "answer_en": ".mp3",
    "answer_hi": ".mp3"
  },
  {
    "num": 50,
    "question_en": "Which service stores data online?",
    "question_hi": "डाटा को ऑनलाइन स्टोर करने वाली सेवा कौन-सी है?",
    "options_en": ["Cloud Storage", "Hard Disk", "DVD", "Pendrive"],
    "options_hi": ["क्लाउड स्टोरेज", "हार्ड डिस्क", "DVD", "पेन ड्राइव"],
    "answer_en": "Cloud Storage",
    "answer_hi": "क्लाउड स्टोरेज"
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

