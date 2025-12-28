const questions =[
  {
    "num": 1,
    "question_en": "Which device is used to point and click?",
    "question_hi": "पॉइंट और क्लिक करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Mouse", "Keyboard", "Printer", "Scanner"],
    "options_hi": ["माउस", "कीबोर्ड", "प्रिंटर", "स्कैनर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस"
  },
  {
    "num": 2,
    "question_en": "Which unit performs calculations in computer?",
    "question_hi": "कंप्यूटर में गणनाएँ कौन-सी इकाई करती है?",
    "options_en": ["ALU", "CU", "RAM", "ROM"],
    "options_hi": ["ALU", "CU", "RAM", "ROM"],
    "answer_en": "ALU",
    "answer_hi": "ALU"
  },
  {
    "num": 3,
    "question_en": "Which key deletes text to the left of cursor?",
    "question_hi": "कर्सर के बाईं ओर का टेक्स्ट कौन-सी कुंजी हटाती है?",
    "options_en": ["Backspace", "Delete", "Enter", "Shift"],
    "options_hi": ["बैकस्पेस", "डिलीट", "एंटर", "शिफ्ट"],
    "answer_en": "Backspace",
    "answer_hi": "बैकस्पेस"
  },
  {
    "num": 4,
    "question_en": "Which device is used to hear sound?",
    "question_hi": "ध्वनि सुनने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Speaker", "Monitor", "Keyboard", "Scanner"],
    "options_hi": ["स्पीकर", "मॉनिटर", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 5,
    "question_en": "Which file extension is used for MS Word?",
    "question_hi": "MS Word फाइल का एक्सटेंशन क्या है?",
    "options_en": [".docx", ".xlsx", ".pptx", ".txt"],
    "options_hi": [".docx", ".xlsx", ".pptx", ".txt"],
    "answer_en": ".docx",
    "answer_hi": ".docx"
  },

  {
    "num": 6,
    "question_en": "Which key is used to start a new line?",
    "question_hi": "नई पंक्ति शुरू करने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Enter", "Shift", "Ctrl", "Alt"],
    "options_hi": ["एंटर", "शिफ्ट", "कंट्रोल", "ऑल्ट"],
    "answer_en": "Enter",
    "answer_hi": "एंटर"
  },
  {
    "num": 7,
    "question_en": "Which software is used to browse the internet?",
    "question_hi": "इंटरनेट ब्राउज़ करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Browser", "Compiler", "Driver", "Antivirus"],
    "options_hi": ["ब्राउज़र", "कंपाइलर", "ड्राइवर", "एंटीवायरस"],
    "answer_en": "Browser",
    "answer_hi": "ब्राउज़र"
  },
  {
    "num": 8,
    "question_en": "Which shortcut is used to paste?",
    "question_hi": "पेस्ट करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + A"],
    "options_hi": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + A"],
    "answer_en": "Ctrl + V",
    "answer_hi": "Ctrl + V"
  },
  {
    "num": 9,
    "question_en": "Which device captures images?",
    "question_hi": "चित्र कैप्चर करने वाला उपकरण कौन-सा है?",
    "options_en": ["Webcam", "Printer", "Speaker", "UPS"],
    "options_hi": ["वेबकैम", "प्रिंटर", "स्पीकर", "UPS"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 10,
    "question_en": "Which memory is volatile?",
    "question_hi": "कौन-सी मेमोरी अस्थायी होती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Pen Drive"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "RAM"
  },

  {
    "num": 11,
    "question_en": "Which key selects all text?",
    "question_hi": "सारा टेक्स्ट चुनने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + Z", "Ctrl + D"],
    "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + Z", "Ctrl + D"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A"
  },
  {
    "num": 12,
    "question_en": "Which device provides backup power?",
    "question_hi": "बैकअप बिजली कौन-सा उपकरण देता है?",
    "options_en": ["UPS", "SMPS", "CPU", "Monitor"],
    "options_hi": ["UPS", "SMPS", "CPU", "मॉनिटर"],
    "answer_en": "UPS",
    "answer_hi": "UPS"
  },
  {
    "num": 13,
    "question_en": "Which software protects computer from virus?",
    "question_hi": "कंप्यूटर को वायरस से कौन-सा सॉफ्टवेयर बचाता है?",
    "options_en": ["Antivirus", "Browser", "OS", "Driver"],
    "options_hi": ["एंटीवायरस", "ब्राउज़र", "OS", "ड्राइवर"],
    "answer_en": "Antivirus",
    "answer_hi": "एंटीवायरस"
  },
  {
    "num": 14,
    "question_en": "Which device is used for video calls?",
    "question_hi": "वीडियो कॉल के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Webcam", "Scanner", "Printer", "Plotter"],
    "options_hi": ["वेबकैम", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 15,
    "question_en": "Which shortcut is used to undo?",
    "question_hi": "Undo करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + P"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + P"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z"
  },

  {
    "num": 16,
    "question_en": "Which storage has the largest capacity?",
    "question_hi": "किस स्टोरेज की क्षमता सबसे अधिक होती है?",
    "options_en": ["Hard Disk", "CD", "DVD", "Floppy"],
    "options_hi": ["हार्ड डिस्क", "CD", "DVD", "फ्लॉपी"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 17,
    "question_en": "Which key is used to rename a file?",
    "question_hi": "फाइल का नाम बदलने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["F2", "F5", "F1", "F12"],
    "options_hi": ["F2", "F5", "F1", "F12"],
    "answer_en": "F2",
    "answer_hi": "F2"
  },
  {
    "num": 18,
    "question_en": "Which device is used to draw digitally?",
    "question_hi": "डिजिटल ड्रॉइंग के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Light Pen", "Printer", "Speaker", "UPS"],
    "options_hi": ["लाइट पेन", "प्रिंटर", "स्पीकर", "UPS"],
    "answer_en": "Light Pen",
    "answer_hi": "लाइट पेन"
  },
  {
    "num": 19,
    "question_en": "Which extension is used for Excel files?",
    "question_hi": "Excel फाइल का एक्सटेंशन क्या है?",
    "options_en": [".xlsx", ".docx", ".pptx", ".html"],
    "options_hi": [".xlsx", ".docx", ".pptx", ".html"],
    "answer_en": ".xlsx",
    "answer_hi": ".xlsx"
  },
  {
    "num": 20,
    "question_en": "Which key combination locks Windows?",
    "question_hi": "Windows लॉक करने का शॉर्टकट क्या है?",
    "options_en": ["Win + L", "Ctrl + L", "Alt + L", "Shift + L"],
    "options_hi": ["Win + L", "Ctrl + L", "Alt + L", "Shift + L"],
    "answer_en": "Win + L",
    "answer_hi": "Win + L"
  },

  {
    "num": 21,
    "question_en": "Which device converts digital signal to sound?",
    "question_hi": "डिजिटल सिग्नल को ध्वनि में कौन बदलता है?",
    "options_en": ["Speaker", "Keyboard", "Scanner", "Mouse"],
    "options_hi": ["स्पीकर", "कीबोर्ड", "स्कैनर", "माउस"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 22,
    "question_en": "Which is an example of input device?",
    "question_hi": "इनपुट डिवाइस का उदाहरण कौन-सा है?",
    "options_en": ["Joystick", "Monitor", "Printer", "Speaker"],
    "options_hi": ["जॉयस्टिक", "मॉनिटर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Joystick",
    "answer_hi": "जॉयस्टिक"
  },
  {
    "num": 23,
    "question_en": "Which shortcut is used to print?",
    "question_hi": "प्रिंट करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + P", "Ctrl + O", "Ctrl + N", "Ctrl + Q"],
    "options_hi": ["Ctrl + P", "Ctrl + O", "Ctrl + N", "Ctrl + Q"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P"
  },
  {
    "num": 24,
    "question_en": "Which device is used to store data permanently?",
    "question_hi": "डाटा स्थायी रूप से स्टोर करने वाला उपकरण कौन-सा है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 25,
    "question_en": "Which software translates code into machine language?",
    "question_hi": "कोड को मशीन भाषा में कौन बदलता है?",
    "options_en": ["Compiler", "Editor", "Browser", "OS"],
    "options_hi": ["कंपाइलर", "एडिटर", "ब्राउज़र", "OS"],
    "answer_en": "Compiler",
    "answer_hi": "कंपाइलर"
  },
  [
  {
    "num": 25,
    "question_en": "Which device is used to connect computer to network?",
    "question_hi": "कंप्यूटर को नेटवर्क से जोड़ने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Modem", "Printer", "Scanner", "Plotter"],
    "options_hi": ["मोडेम", "प्रिंटर", "स्कैनर", "प्लॉटर"],
    "answer_en": "Modem",
    "answer_hi": "मोडेम"
  },
  {
    "num": 26,
    "question_en": "Which key is used to open Help menu?",
    "question_hi": "हेल्प मेनू खोलने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["F1", "F2", "F5", "F12"],
    "options_hi": ["F1", "F2", "F5", "F12"],
    "answer_en": "F1",
    "answer_hi": "F1"
  },
  {
    "num": 27,
    "question_en": "Which storage device uses magnetic disk?",
    "question_hi": "कौन-सा स्टोरेज डिवाइस मैग्नेटिक डिस्क का उपयोग करता है?",
    "options_en": ["Hard Disk", "Pen Drive", "CD", "DVD"],
    "options_hi": ["हार्ड डिस्क", "पेन ड्राइव", "CD", "DVD"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 28,
    "question_en": "Which software is used to make presentations?",
    "question_hi": "प्रेजेंटेशन बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS PowerPoint", "MS Word", "Paint", "Notepad"],
    "options_hi": ["MS पावरपॉइंट", "MS वर्ड", "पेंट", "नोटपैड"],
    "answer_en": "MS PowerPoint",
    "answer_hi": "MS पावरपॉइंट"
  },
  {
    "num": 29,
    "question_en": "Which device is used to draw graphs on paper?",
    "question_hi": "कागज़ पर ग्राफ़ बनाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Plotter", "Printer", "Scanner", "Monitor"],
    "options_hi": ["प्लॉटर", "प्रिंटर", "स्कैनर", "मॉनिटर"],
    "answer_en": "Plotter",
    "answer_hi": "प्लॉटर"
  },
  {
    "num": 30,
    "question_en": "Which type of software is Windows?",
    "question_hi": "Windows किस प्रकार का सॉफ्टवेयर है?",
    "options_en": ["Operating System", "Application Software", "Utility Software", "Programming Software"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एप्लिकेशन सॉफ्टवेयर", "यूटिलिटी सॉफ्टवेयर", "प्रोग्रामिंग सॉफ्टवेयर"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
  },
  {
    "num": 31,
    "question_en": "Which shortcut closes a window?",
    "question_hi": "विंडो बंद करने का शॉर्टकट क्या है?",
    "options_en": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Alt + Tab"],
    "options_hi": ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Alt + Tab"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4"
  },
  {
    "num": 32,
    "question_en": "Which device is used for biometric input?",
    "question_hi": "बायोमेट्रिक इनपुट के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Fingerprint Scanner", "Mouse", "Keyboard", "Speaker"],
    "options_hi": ["फिंगरप्रिंट स्कैनर", "माउस", "कीबोर्ड", "स्पीकर"],
    "answer_en": "Fingerprint Scanner",
    "answer_hi": "फिंगरप्रिंट स्कैनर"
  },
  {
    "num": 33,
    "question_en": "Which extension is used for PowerPoint files?",
    "question_hi": "PowerPoint फाइल का एक्सटेंशन क्या है?",
    "options_en": [".pptx", ".docx", ".xlsx", ".pdf"],
    "options_hi": [".pptx", ".docx", ".xlsx", ".pdf"],
    "answer_en": ".pptx",
    "answer_hi": ".pptx"
  },
  {
    "num": 34,
    "question_en": "Which device converts hard copy to soft copy?",
    "question_hi": "हार्ड कॉपी को सॉफ्ट कॉपी में कौन बदलता है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Speaker"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 35,
    "question_en": "Which key combination opens Task Manager?",
    "question_hi": "टास्क मैनेजर खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Esc", "Shift + Esc"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + Esc", "Shift + Esc"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc"
  },
  {
    "num": 36,
    "question_en": "Which device is used to record sound?",
    "question_hi": "ध्वनि रिकॉर्ड करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Microphone", "Speaker", "Monitor", "UPS"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "मॉनिटर", "UPS"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन"
  },
  {
    "num": 37,
    "question_en": "Which software is used to edit images?",
    "question_hi": "चित्र संपादन के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Photoshop", "MS Word", "Excel", "Notepad"],
    "options_hi": ["फोटोशॉप", "MS वर्ड", "एक्सेल", "नोटपैड"],
    "answer_en": "Photoshop",
    "answer_hi": "फोटोशॉप"
  },
  {
    "num": 38,
    "question_en": "Which network covers a small area like a building?",
    "question_hi": "छोटे क्षेत्र जैसे भवन को कवर करने वाला नेटवर्क कौन-सा है?",
    "options_en": ["LAN", "MAN", "WAN", "PAN"],
    "options_hi": ["LAN", "MAN", "WAN", "PAN"],
    "answer_en": "LAN",
    "answer_hi": "LAN"
  },
  {
    "num": 39,
    "question_en": "Which key combination switches between open apps?",
    "question_hi": "खुले ऐप्स के बीच स्विच करने का शॉर्टकट क्या है?",
    "options_en": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Win + Tab"],
    "options_hi": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Win + Tab"],
    "answer_en": "Alt + Tab",
    "answer_hi": "Alt + Tab"
  },
  {
    "num": 40,
    "question_en": "Which device protects computer from power failure?",
    "question_hi": "बिजली जाने पर कंप्यूटर को कौन-सा उपकरण बचाता है?",
    "options_en": ["UPS", "SMPS", "Stabilizer", "CPU"],
    "options_hi": ["UPS", "SMPS", "स्टेबलाइज़र", "CPU"],
    "answer_en": "UPS",
    "answer_hi": "UPS"
  },
  {
    "num": 41,
    "question_en": "Which unit controls all operations of computer?",
    "question_hi": "कंप्यूटर की सभी क्रियाओं को कौन नियंत्रित करता है?",
    "options_en": ["Control Unit", "ALU", "RAM", "ROM"],
    "options_hi": ["कंट्रोल यूनिट", "ALU", "RAM", "ROM"],
    "answer_en": "Control Unit",
    "answer_hi": "कंट्रोल यूनिट"
  },
  {
    "num": 42,
    "question_en": "Which file extension is used for PDF?",
    "question_hi": "PDF फाइल का एक्सटेंशन क्या है?",
    "options_en": [".pdf", ".docx", ".txt", ".html"],
    "options_hi": [".pdf", ".docx", ".txt", ".html"],
    "answer_en": ".pdf",
    "answer_hi": ".pdf"
  },
  {
    "num": 43,
    "question_en": "Which device is used for online classes?",
    "question_hi": "ऑनलाइन कक्षा के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Webcam", "Plotter", "Joystick", "UPS"],
    "options_hi": ["वेबकैम", "प्लॉटर", "जॉयस्टिक", "UPS"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 44,
    "question_en": "Which shortcut is used to open a new tab in browser?",
    "question_hi": "ब्राउज़र में नया टैब खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Shift + T"],
    "options_hi": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Shift + T"],
    "answer_en": "Ctrl + T",
    "answer_hi": "Ctrl + T"
  },
  {
    "num": 45,
    "question_en": "Which device provides visual output?",
    "question_hi": "दृश्य आउटपुट देने वाला उपकरण कौन-सा है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },
  {
    "num": 46,
    "question_en": "Which software helps in file compression?",
    "question_hi": "फाइल कंप्रेशन में कौन-सा सॉफ्टवेयर मदद करता है?",
    "options_en": ["WinZip", "MS Paint", "Chrome", "Notepad"],
    "options_hi": ["WinZip", "MS पेंट", "क्रोम", "नोटपैड"],
    "answer_en": "WinZip",
    "answer_hi": "WinZip"
  },
  {
    "num": 47,
    "question_en": "Which network device distributes internet connection?",
    "question_hi": "इंटरनेट कनेक्शन को वितरित करने वाला नेटवर्क डिवाइस कौन-सा है?",
    "options_en": ["Router", "Modem", "Switch", "Hub"],
    "options_hi": ["राउटर", "मोडेम", "स्विच", "हब"],
    "answer_en": "Router",
    "answer_hi": "राउटर"
  },
  {
    "num": 48,
    "question_en": "Which key is used to refresh browser page?",
    "question_hi": "ब्राउज़र पेज रिफ्रेश करने की कुंजी कौन-सी है?",
    "options_en": ["F5", "F2", "F1", "F12"],
    "options_hi": ["F5", "F2", "F1", "F12"],
    "answer_en": "F5",
    "answer_hi": "F5"
  },
  {
    "num": 49,
    "question_en": "Which device is used for gaming control?",
    "question_hi": "गेमिंग कंट्रोल के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Joystick", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["जॉयस्टिक", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Joystick",
    "answer_hi": "जॉयस्टिक"
  },
  {
    "num": 50,
    "question_en": "Which software is used to view web pages?",
    "question_hi": "वेब पेज देखने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Web Browser", "Compiler", "Editor", "Driver"],
    "options_hi": ["वेब ब्राउज़र", "कंपाइलर", "एडिटर", "ड्राइवर"],
    "answer_en": "Web Browser",
    "answer_hi": "वेब ब्राउज़र"
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

