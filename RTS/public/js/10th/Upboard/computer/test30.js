const questions =[
  {
    "num": 1,
    "question_en": "Which device is used to measure internet speed?",
    "question_hi": "इंटरनेट की गति मापने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Speed Test Tool", "Modem", "Router", "Switch"],
    "options_hi": ["स्पीड टेस्ट टूल", "मॉडेम", "राउटर", "स्विच"],
    "answer_en": "Speed Test Tool",
    "answer_hi": "स्पीड टेस्ट टूल"
  },
  {
    "num": 2,
    "question_en": "Which software is used to create websites?",
    "question_hi": "वेबसाइट बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Dreamweaver", "Excel", "Notepad", "Paint"],
    "options_hi": ["ड्रीमवीवर", "एक्सेल", "नोटपैड", "पेंट"],
    "answer_en": "Dreamweaver",
    "answer_hi": "ड्रीमवीवर"
  },
  {
    "num": 3,
    "question_en": "Which key is used to switch input language?",
    "question_hi": "इनपुट भाषा बदलने की कुंजी कौन-सी है?",
    "options_en": ["Alt + Shift", "Ctrl + Shift", "Windows + L", "Ctrl + Alt + Del"],
    "options_hi": ["Alt + Shift", "Ctrl + Shift", "Windows + L", "Ctrl + Alt + Del"],
    "answer_en": "Alt + Shift",
    "answer_hi": "Alt + Shift"
  },
  {
    "num": 4,
    "question_en": "Which device is used to read QR codes?",
    "question_hi": "QR कोड पढ़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["QR Scanner", "Barcode Reader", "Printer", "Monitor"],
    "options_hi": ["QR स्कैनर", "बारकोड रीडर", "प्रिंटर", "मॉनिटर"],
    "answer_en": "QR Scanner",
    "answer_hi": "QR स्कैनर"
  },
  {
    "num": 5,
    "question_en": "Which memory is non-volatile?",
    "question_hi": "कौन-सी मेमोरी नॉन-वोलटाइल होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Register"],
    "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },

  {
    "num": 6,
    "question_en": "Which key combination is used to refresh a webpage?",
    "question_hi": "वेबपेज रिफ्रेश करने का शॉर्टकट क्या है?",
    "options_en": ["F5", "Ctrl + R", "Alt + F4", "Ctrl + N"],
    "options_hi": ["F5", "Ctrl + R", "Alt + F4", "Ctrl + N"],
    "answer_en": "F5",
    "answer_hi": "F5"
  },
  {
    "num": 7,
    "question_en": "Which software is used for creating slideshows?",
    "question_hi": "स्लाइडशो बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS PowerPoint", "MS Word", "Excel", "Paint"],
    "options_hi": ["MS पॉवरपॉइंट", "MS Word", "एक्सेल", "पेंट"],
    "answer_en": "MS PowerPoint",
    "answer_hi": "MS पॉवरपॉइंट"
  },
  {
    "num": 8,
    "question_en": "Which device is used to connect computer to projector?",
    "question_hi": "कंप्यूटर को प्रोजेक्टर से जोड़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["HDMI Cable", "USB", "VGA Cable", "Ethernet Cable"],
    "options_hi": ["HDMI केबल", "USB", "VGA केबल", "ईथरनेट केबल"],
    "answer_en": "HDMI Cable",
    "answer_hi": "HDMI केबल"
  },
  {
    "num": 9,
    "question_en": "Which device is used to capture real-world images?",
    "question_hi": "वास्तविक दुनिया की छवियों को कैप्चर करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Camera", "Scanner", "Monitor", "Printer"],
    "options_hi": ["कैमरा", "स्कैनर", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Camera",
    "answer_hi": "कैमरा"
  },
  {
    "num": 10,
    "question_en": "Which network type connects multiple cities?",
    "question_hi": "कई शहरों को जोड़ने वाला नेटवर्क कौन-सा है?",
    "options_en": ["WAN", "LAN", "PAN", "MAN"],
    "options_hi": ["WAN", "LAN", "PAN", "MAN"],
    "answer_en": "WAN",
    "answer_hi": "WAN"
  },

  {
    "num": 11,
    "question_en": "Which key is used to select all items?",
    "question_hi": "सभी आइटम्स को चुनने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + A", "Ctrl + C", "Ctrl + X", "Ctrl + V"],
    "options_hi": ["Ctrl + A", "Ctrl + C", "Ctrl + X", "Ctrl + V"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A"
  },
  {
    "num": 12,
    "question_en": "Which device is used to display 3D objects?",
    "question_hi": "3D ऑब्जेक्ट दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["3D Monitor", "Scanner", "Printer", "Plotter"],
    "options_hi": ["3D मॉनिटर", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "3D Monitor",
    "answer_hi": "3D मॉनिटर"
  },
  {
    "num": 13,
    "question_en": "Which device is used to connect wired network?",
    "question_hi": "वायर्ड नेटवर्क से कनेक्ट करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Ethernet Cable", "Wi-Fi Adapter", "Router", "Switch"],
    "options_hi": ["ईथरनेट केबल", "Wi-Fi एडेप्टर", "राउटर", "स्विच"],
    "answer_en": "Ethernet Cable",
    "answer_hi": "ईथरनेट केबल"
  },
  {
    "num": 14,
    "question_en": "Which software is used to edit text documents?",
    "question_hi": "टेक्स्ट दस्तावेज़ संपादित करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Word", "MS Excel", "MS PowerPoint", "Paint"],
    "options_hi": ["MS Word", "MS Excel", "MS PowerPoint", "पेंट"],
    "answer_en": "MS Word",
    "answer_hi": "MS Word"
  },
  {
    "num": 15,
    "question_en": "Which key is used to undo an action?",
    "question_hi": "किसी क्रिया को पूर्ववत करने के लिए कौन-सी कुंजी है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z"
  },

  {
    "num": 16,
    "question_en": "Which device is used to produce sound?",
    "question_hi": "ध्वनि उत्पन्न करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Speaker", "Monitor", "Printer", "Scanner"],
    "options_hi": ["स्पीकर", "मॉनिटर", "प्रिंटर", "स्कैनर"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 17,
    "question_en": "Which software is used to create graphs?",
    "question_hi": "ग्राफ बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Excel", "MS Word", "Paint", "PowerPoint"],
    "options_hi": ["MS Excel", "MS Word", "पेंट", "पावरपॉइंट"],
    "answer_en": "MS Excel",
    "answer_hi": "MS Excel"
  },
  {
    "num": 18,
    "question_en": "Which key combination is used to close a window?",
    "question_hi": "विंडो बंद करने का शॉर्टकट क्या है?",
    "options_en": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Esc"],
    "options_hi": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Esc"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4"
  },
  {
    "num": 19,
    "question_en": "Which device is used to store volatile data temporarily?",
    "question_hi": "अस्थायी डेटा अस्थायी रूप से संग्रहित करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Cache"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "कैश"],
    "answer_en": "RAM",
    "answer_hi": "RAM"
  },
  {
    "num": 20,
    "question_en": "Which device is used to protect computer from power failure?",
    "question_hi": "पावर फेल्योर से कंप्यूटर को सुरक्षित रखने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["UPS", "SMPS", "Battery", "Charger"],
    "options_hi": ["UPS", "SMPS", "बैटरी", "चार्जर"],
    "answer_en": "UPS",
    "answer_hi": "UPS"
  },

  {
    "num": 21,
    "question_en": "Which software is used to browse internet securely?",
    "question_hi": "इंटरनेट सुरक्षित रूप से ब्राउज़ करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Browser with HTTPS", "MS Word", "Paint", "Notepad"],
    "options_hi": ["HTTPS वाला ब्राउज़र", "MS Word", "पेंट", "नोटपैड"],
    "answer_en": "Browser with HTTPS",
    "answer_hi": "HTTPS वाला ब्राउज़र"
  },
  {
    "num": 22,
    "question_en": "Which device is used to store optical discs?",
    "question_hi": "ऑप्टिकल डिस्क संग्रहित करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["DVD Drive", "Hard Disk", "USB", "RAM"],
    "options_hi": ["DVD ड्राइव", "हार्ड डिस्क", "USB", "RAM"],
    "answer_en": "DVD Drive",
    "answer_hi": "DVD ड्राइव"
  },
  {
    "num": 23,
    "question_en": "Which software is used to edit images?",
    "question_hi": "छवि संपादित करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Adobe Photoshop", "MS Word", "Excel", "PowerPoint"],
    "options_hi": ["एडोबी फ़ोटोशॉप", "MS Word", "एक्सेल", "पावरपॉइंट"],
    "answer_en": "Adobe Photoshop",
    "answer_hi": "एडोबी फ़ोटोशॉप"
  },
  {
    "num": 24,
    "question_en": "Which key is used to open Task Manager quickly?",
    "question_hi": "टास्क मैनेजर जल्दी खोलने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Tab", "Windows + R"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Tab", "Windows + R"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc"
  },
  {
    "num": 25,
    "question_en": "Which device is used to scan documents quickly?",
    "question_hi": "दस्तावेज़ को जल्दी स्कैन करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Sheet-fed Scanner", "Flatbed Scanner", "Printer", "Plotter"],
    "options_hi": ["शीट-फेड स्कैनर", "फ्लैटबेड स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Sheet-fed Scanner",
    "answer_hi": "शीट-फेड स्कैनर"
  },
  [
  {
    "num": 26,
    "question_en": "Which device is used to project computer screen on a wall?",
    "question_hi": "कंप्यूटर स्क्रीन को दीवार पर दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Projector", "Monitor", "Printer", "Scanner"],
    "options_hi": ["प्रोजेक्टर", "मॉनिटर", "प्रिंटर", "स्कैनर"],
    "answer_en": "Projector",
    "answer_hi": "प्रोजेक्टर"
  },
  {
    "num": 27,
    "question_en": "Which software is used to write programming code?",
    "question_hi": "प्रोग्रामिंग कोड लिखने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["IDE", "MS Word", "Excel", "Paint"],
    "options_hi": ["IDE", "MS Word", "एक्सेल", "पेंट"],
    "answer_en": "IDE",
    "answer_hi": "IDE"
  },
  {
    "num": 28,
    "question_en": "Which device is used to connect multiple networks?",
    "question_hi": "कई नेटवर्क को जोड़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Router", "Switch", "Modem", "Hub"],
    "options_hi": ["राउटर", "स्विच", "मॉडेम", "हब"],
    "answer_en": "Router",
    "answer_hi": "राउटर"
  },
  {
    "num": 29,
    "question_en": "Which device is used to store permanent data?",
    "question_hi": "स्थायी डेटा संग्रहित करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "ROM"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "ROM"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 30,
    "question_en": "Which key combination opens Run dialog box?",
    "question_hi": "Run डायलॉग बॉक्स खोलने का शॉर्टकट क्या है?",
    "options_en": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "options_hi": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "answer_en": "Windows + R",
    "answer_hi": "Windows + R"
  },

  {
    "num": 31,
    "question_en": "Which device is used to display colors accurately?",
    "question_hi": "सटीक रंग दिखाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Monitor", "Printer", "Projector", "Scanner"],
    "options_hi": ["मॉनिटर", "प्रिंटर", "प्रोजेक्टर", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },
  {
    "num": 32,
    "question_en": "Which software is used to calculate numbers quickly?",
    "question_hi": "संख्याओं की तेजी से गणना करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Excel", "MS Word", "Paint", "PowerPoint"],
    "options_hi": ["MS Excel", "MS Word", "पेंट", "पावरपॉइंट"],
    "answer_en": "MS Excel",
    "answer_hi": "MS Excel"
  },
  {
    "num": 33,
    "question_en": "Which device helps to connect to internet wirelessly?",
    "question_hi": "बिना तार के इंटरनेट से कनेक्ट होने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Wi-Fi Adapter", "Ethernet Cable", "USB", "Modem"],
    "options_hi": ["Wi-Fi एडेप्टर", "ईथरनेट केबल", "USB", "मॉडेम"],
    "answer_en": "Wi-Fi Adapter",
    "answer_hi": "Wi-Fi एडेप्टर"
  },
  {
    "num": 34,
    "question_en": "Which device is used to read handwritten signatures?",
    "question_hi": "हस्ताक्षर पढ़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Signature Pad", "Scanner", "Mouse", "Keyboard"],
    "options_hi": ["सिग्नेचर पैड", "स्कैनर", "माउस", "कीबोर्ड"],
    "answer_en": "Signature Pad",
    "answer_hi": "सिग्नेचर पैड"
  },
  {
    "num": 35,
    "question_en": "Which key is used to pause a video or audio?",
    "question_hi": "वीडियो या ऑडियो को रोकने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Spacebar", "Enter", "Tab", "Shift"],
    "options_hi": ["स्पेसबार", "एंटर", "टैब", "शिफ्ट"],
    "answer_en": "Spacebar",
    "answer_hi": "स्पेसबार"
  },

  {
    "num": 36,
    "question_en": "Which device is used to backup important data?",
    "question_hi": "महत्वपूर्ण डेटा का बैकअप लेने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["External Hard Disk", "RAM", "ROM", "Cache"],
    "options_hi": ["एक्सटर्नल हार्ड डिस्क", "RAM", "ROM", "कैश"],
    "answer_en": "External Hard Disk",
    "answer_hi": "एक्सटर्नल हार्ड डिस्क"
  },
  {
    "num": 37,
    "question_en": "Which key combination closes current tab in browser?",
    "question_hi": "ब्राउज़र में वर्तमान टैब बंद करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + W", "Ctrl + Q", "Ctrl + F4", "Alt + F4"],
    "options_hi": ["Ctrl + W", "Ctrl + Q", "Ctrl + F4", "Alt + F4"],
    "answer_en": "Ctrl + W",
    "answer_hi": "Ctrl + W"
  },
  {
    "num": 38,
    "question_en": "Which software is used to play video files?",
    "question_hi": "वीडियो फ़ाइल चलाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["VLC Media Player", "MS Word", "Paint", "Notepad"],
    "options_hi": ["VLC मीडिया प्लेयर", "MS Word", "पेंट", "नोटपैड"],
    "answer_en": "VLC Media Player",
    "answer_hi": "VLC मीडिया प्लेयर"
  },
  {
    "num": 39,
    "question_en": "Which device helps in biometric authentication?",
    "question_hi": "बायोमेट्रिक प्रमाणीकरण में मदद करने वाला उपकरण कौन-सा है?",
    "options_en": ["Fingerprint Scanner", "Mouse", "Keyboard", "Monitor"],
    "options_hi": ["फिंगरप्रिंट स्कैनर", "माउस", "कीबोर्ड", "मॉनिटर"],
    "answer_en": "Fingerprint Scanner",
    "answer_hi": "फिंगरप्रिंट स्कैनर"
  },
  {
    "num": 40,
    "question_en": "Which key combination opens Task Manager?",
    "question_hi": "टास्क मैनेजर खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Tab", "Windows + R"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Tab", "Windows + R"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc"
  },

  {
    "num": 41,
    "question_en": "Which device converts digital signal into sound?",
    "question_hi": "डिजिटल सिग्नल को ध्वनि में बदलने वाला उपकरण कौन-सा है?",
    "options_en": ["Speaker", "Printer", "Monitor", "Scanner"],
    "options_hi": ["स्पीकर", "प्रिंटर", "मॉनिटर", "स्कैनर"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 42,
    "question_en": "Which software is used to manage contacts and emails?",
    "question_hi": "संपर्क और ईमेल प्रबंधित करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Outlook", "MS Word", "Excel", "PowerPoint"],
    "options_hi": ["MS Outlook", "MS Word", "एक्सेल", "पावरपॉइंट"],
    "answer_en": "MS Outlook",
    "answer_hi": "MS Outlook"
  },
  {
    "num": 43,
    "question_en": "Which key is used to repeat last action?",
    "question_hi": "पिछली क्रिया को दोहराने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
    "answer_en": "Ctrl + Y",
    "answer_hi": "Ctrl + Y"
  },
  {
    "num": 44,
    "question_en": "Which device helps visually impaired to read text?",
    "question_hi": "दृष्टिहीनों को टेक्स्ट पढ़ने में मदद करने वाला उपकरण कौन-सा है?",
    "options_en": ["Screen Reader", "Monitor", "Printer", "Scanner"],
    "options_hi": ["स्क्रीन रीडर", "मॉनिटर", "प्रिंटर", "स्कैनर"],
    "answer_en": "Screen Reader",
    "answer_hi": "स्क्रीन रीडर"
  },
  {
    "num": 45,
    "question_en": "Which device is used for 3D printing?",
    "question_hi": "3D प्रिंटिंग के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["3D Printer", "Laser Printer", "Inkjet Printer", "Plotter"],
    "options_hi": ["3D प्रिंटर", "लेजर प्रिंटर", "इंकजेट प्रिंटर", "प्लॉटर"],
    "answer_en": "3D Printer",
    "answer_hi": "3D प्रिंटर"
  },

  {
    "num": 46,
    "question_en": "Which software is used to edit PDF files?",
    "question_hi": "PDF फाइल संपादित करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Adobe Acrobat", "MS Word", "Excel", "Paint"],
    "options_hi": ["एडोबी अक्रोबेट", "MS Word", "एक्सेल", "पेंट"],
    "answer_en": "Adobe Acrobat",
    "answer_hi": "एडोबी अक्रोबेट"
  },
  {
    "num": 47,
    "question_en": "Which device connects computer to printer wirelessly?",
    "question_hi": "कंप्यूटर को प्रिंटर से वायरलेस तरीके से जोड़ने वाला उपकरण कौन-सा है?",
    "options_en": ["Wi-Fi", "Ethernet Cable", "USB", "Modem"],
    "options_hi": ["Wi-Fi", "ईथरनेट केबल", "USB", "मॉडेम"],
    "answer_en": "Wi-Fi",
    "answer_hi": "Wi-Fi"
  },
  {
    "num": 48,
    "question_en": "Which device helps in video conferencing?",
    "question_hi": "वीडियो कॉन्फ्रेंसिंग में मदद करने वाला उपकरण कौन-सा है?",
    "options_en": ["Webcam", "Monitor", "Scanner", "Printer"],
    "options_hi": ["वेबकैम", "मॉनिटर", "स्कैनर", "प्रिंटर"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 49,
    "question_en": "Which key combination is used to lock computer quickly?",
    "question_hi": "कंप्यूटर जल्दी लॉक करने का शॉर्टकट क्या है?",
    "options_en": ["Windows + L", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    "options_hi": ["Windows + L", "Ctrl + L", "Alt + L", "Ctrl + Alt + L"],
    "answer_en": "Windows + L",
    "answer_hi": "Windows + L"
  },
  {
    "num": 50,
    "question_en": "Which device is used to amplify sound from computer?",
    "question_hi": "कंप्यूटर से ध्वनि बढ़ाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Speaker", "Microphone", "Printer", "Monitor"],
    "options_hi": ["स्पीकर", "माइक्रोफोन", "प्रिंटर", "मॉनिटर"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
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

