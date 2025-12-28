const questions =[
  {
    "num": 1,
    "question_en": "Which unit performs arithmetic operations in a computer?",
    "question_hi": "कंप्यूटर में अंकगणितीय क्रियाएँ कौन-सी इकाई करती है?",
    "options_en": ["ALU", "CU", "RAM", "ROM"],
    "options_hi": ["ALU", "CU", "RAM", "ROM"],
    "answer_en": "ALU",
    "answer_hi": "ALU"
  },
  {
    "num": 2,
    "question_en": "Which key is used to cancel a command?",
    "question_hi": "किस कुंजी का उपयोग कमांड रद्द करने के लिए होता है?",
    "options_en": ["Esc", "Enter", "Shift", "Ctrl"],
    "options_hi": ["Esc", "एंटर", "शिफ्ट", "कंट्रोल"],
    "answer_en": "Esc",
    "answer_hi": "Esc"
  },
  {
    "num": 3,
    "question_en": "Which device is used to move the cursor?",
    "question_hi": "कर्सर को चलाने के लिए किस उपकरण का उपयोग होता है?",
    "options_en": ["Mouse", "Keyboard", "Printer", "Scanner"],
    "options_hi": ["माउस", "कीबोर्ड", "प्रिंटर", "स्कैनर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस"
  },
  {
    "num": 4,
    "question_en": "Which type of software is MS Paint?",
    "question_hi": "MS Paint किस प्रकार का सॉफ़्टवेयर है?",
    "options_en": ["Application software", "System software", "Utility software", "Firmware"],
    "options_hi": ["एप्लिकेशन सॉफ़्टवेयर", "सिस्टम सॉफ़्टवेयर", "यूटिलिटी सॉफ़्टवेयर", "फर्मवेयर"],
    "answer_en": "Application software",
    "answer_hi": "एप्लिकेशन सॉफ़्टवेयर"
  },
  {
    "num": 5,
    "question_en": "Which key is used to open help?",
    "question_hi": "हेल्प खोलने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["F1", "F2", "F5", "F12"],
    "options_hi": ["F1", "F2", "F5", "F12"],
    "answer_en": "F1",
    "answer_hi": "F1"
  },
  {
    "num": 6,
    "question_en": "Which memory stores booting information?",
    "question_hi": "बूटिंग जानकारी कौन-सी मेमोरी में होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Register"],
    "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },
  {
    "num": 7,
    "question_en": "Which device connects computer to internet?",
    "question_hi": "कंप्यूटर को इंटरनेट से जोड़ने वाला उपकरण कौन-सा है?",
    "options_en": ["Modem", "Scanner", "Printer", "Monitor"],
    "options_hi": ["मोडेम", "स्कैनर", "प्रिंटर", "मॉनिटर"],
    "answer_en": "Modem",
    "answer_hi": "मोडेम"
  },
  {
    "num": 8,
    "question_en": "Which storage uses magnetic technology?",
    "question_hi": "कौन-सा स्टोरेज चुंबकीय तकनीक का उपयोग करता है?",
    "options_en": ["Hard Disk", "CD", "DVD", "Pen Drive"],
    "options_hi": ["हार्ड डिस्क", "CD", "DVD", "पेन ड्राइव"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 9,
    "question_en": "Which shortcut closes a window?",
    "question_hi": "विंडो बंद करने का शॉर्टकट कौन-सा है?",
    "options_en": ["Alt + F4", "Ctrl + W", "Ctrl + Alt + Del", "Alt + Tab"],
    "options_hi": ["Alt + F4", "Ctrl + W", "Ctrl + Alt + Del", "Alt + Tab"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4"
  },
  {
    "num": 10,
    "question_en": "Which device produces hard copy?",
    "question_hi": "हार्ड कॉपी कौन-सा उपकरण देता है?",
    "options_en": ["Printer", "Monitor", "Speaker", "Scanner"],
    "options_hi": ["प्रिंटर", "मॉनिटर", "स्पीकर", "स्कैनर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर"
  },

  {
    "num": 11,
    "question_en": "Which language is understood by computer?",
    "question_hi": "कंप्यूटर कौन-सी भाषा समझता है?",
    "options_en": ["Machine language", "English", "Hindi", "High level language"],
    "options_hi": ["मशीन भाषा", "अंग्रेज़ी", "हिंदी", "हाई लेवल भाषा"],
    "answer_en": "Machine language",
    "answer_hi": "मशीन भाषा"
  },
  {
    "num": 12,
    "question_en": "Which part controls all operations?",
    "question_hi": "सभी क्रियाओं को नियंत्रित कौन करता है?",
    "options_en": ["Control Unit", "ALU", "RAM", "Hard Disk"],
    "options_hi": ["कंट्रोल यूनिट", "ALU", "RAM", "हार्ड डिस्क"],
    "answer_en": "Control Unit",
    "answer_hi": "कंट्रोल यूनिट"
  },
  {
    "num": 13,
    "question_en": "Which file extension is for Excel?",
    "question_hi": "Excel फ़ाइल का एक्सटेंशन क्या है?",
    "options_en": [".xlsx", ".docx", ".pptx", ".txt"],
    "options_hi": [".xlsx", ".docx", ".pptx", ".txt"],
    "answer_en": ".xlsx",
    "answer_hi": ".xlsx"
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
    "question_en": "Which key moves cursor to next line?",
    "question_hi": "कर्सर को अगली लाइन में ले जाने की कुंजी कौन-सी है?",
    "options_en": ["Enter", "Tab", "Shift", "Ctrl"],
    "options_hi": ["एंटर", "टैब", "शिफ्ट", "कंट्रोल"],
    "answer_en": "Enter",
    "answer_hi": "एंटर"
  },

  {
    "num": 16,
    "question_en": "Which storage is optical?",
    "question_hi": "कौन-सा स्टोरेज ऑप्टिकल है?",
    "options_en": ["CD", "Hard Disk", "Pen Drive", "RAM"],
    "options_hi": ["CD", "हार्ड डिस्क", "पेन ड्राइव", "RAM"],
    "answer_en": "CD",
    "answer_hi": "CD"
  },
  {
    "num": 17,
    "question_en": "Which key is used to undo?",
    "question_hi": "Undo करने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + D"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + D"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z"
  },
  {
    "num": 18,
    "question_en": "Which device is used to type numbers fast?",
    "question_hi": "तेज़ी से नंबर टाइप करने के लिए कौन-सा भाग उपयोग होता है?",
    "options_en": ["Numeric keypad", "Mouse", "Touchpad", "Joystick"],
    "options_hi": ["न्यूमेरिक कीपैड", "माउस", "टचपैड", "जॉयस्टिक"],
    "answer_en": "Numeric keypad",
    "answer_hi": "न्यूमेरिक कीपैड"
  },
  {
    "num": 19,
    "question_en": "Which is a search engine?",
    "question_hi": "निम्न में से कौन सर्च इंजन है?",
    "options_en": ["Google", "Chrome", "Windows", "Linux"],
    "options_hi": ["गूगल", "क्रोम", "विंडोज़", "लिनक्स"],
    "answer_en": "Google",
    "answer_hi": "गूगल"
  },
  {
    "num": 20,
    "question_en": "Which software removes virus?",
    "question_hi": "वायरस हटाने वाला सॉफ़्टवेयर कौन-सा है?",
    "options_en": ["Antivirus", "Browser", "Compiler", "Editor"],
    "options_hi": ["एंटीवायरस", "ब्राउज़र", "कंपाइलर", "एडिटर"],
    "answer_en": "Antivirus",
    "answer_hi": "एंटीवायरस"
  },

  {
    "num": 21,
    "question_en": "Which shortcut opens task manager?",
    "question_hi": "टास्क मैनेजर खोलने का शॉर्टकट कौन-सा है?",
    "options_en": ["Ctrl + Shift + Esc", "Alt + F4", "Ctrl + C", "Ctrl + S"],
    "options_hi": ["Ctrl + Shift + Esc", "Alt + F4", "Ctrl + C", "Ctrl + S"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc"
  },
  {
    "num": 22,
    "question_en": "Which is an example of cloud storage?",
    "question_hi": "क्लाउड स्टोरेज का उदाहरण कौन-सा है?",
    "options_en": ["Google Drive", "Hard Disk", "DVD", "Pen Drive"],
    "options_hi": ["गूगल ड्राइव", "हार्ड डिस्क", "DVD", "पेन ड्राइव"],
    "answer_en": "Google Drive",
    "answer_hi": "गूगल ड्राइव"
  },
  {
    "num": 23,
    "question_en": "Which device is used in gaming?",
    "question_hi": "गेमिंग में कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Joystick", "Scanner", "Printer", "Plotter"],
    "options_hi": ["जॉयस्टिक", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Joystick",
    "answer_hi": "जॉयस्टिक"
  },
  {
    "num": 24,
    "question_en": "Which file extension is for audio?",
    "question_hi": "ऑडियो फ़ाइल का एक्सटेंशन कौन-सा है?",
    "options_en": [".mp3", ".jpg", ".txt", ".html"],
    "options_hi": [".mp3", ".jpg", ".txt", ".html"],
    "answer_en": ".mp3",
    "answer_hi": ".mp3"
  },
  {
    "num": 25,
    "question_en": "Which device shows soft copy?",
    "question_hi": "सॉफ्ट कॉपी कौन-सा उपकरण दिखाता है?",
    "options_en": ["Monitor", "Printer", "Scanner", "Plotter"],
    "options_hi": ["मॉनिटर", "प्रिंटर", "स्कैनर", "प्लॉटर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },

  {
    "num": 26,
    "question_en": "Which network covers a city?",
    "question_hi": "कौन-सा नेटवर्क पूरे शहर को कवर करता है?",
    "options_en": ["MAN", "LAN", "PAN", "WAN"],
    "options_hi": ["MAN", "LAN", "PAN", "WAN"],
    "answer_en": "MAN",
    "answer_hi": "MAN"
  },
  {
    "num": 27,
    "question_en": "Which key is used to rename a file?",
    "question_hi": "फ़ाइल का नाम बदलने की कुंजी कौन-सी है?",
    "options_en": ["F2", "F5", "F1", "F12"],
    "options_hi": ["F2", "F5", "F1", "F12"],
    "answer_en": "F2",
    "answer_hi": "F2"
  },
  {
    "num": 28,
    "question_en": "Which software is used to browse internet?",
    "question_hi": "इंटरनेट चलाने के लिए कौन-सा सॉफ़्टवेयर उपयोग होता है?",
    "options_en": ["Browser", "Antivirus", "OS", "Compiler"],
    "options_hi": ["ब्राउज़र", "एंटीवायरस", "OS", "कंपाइलर"],
    "answer_en": "Browser",
    "answer_hi": "ब्राउज़र"
  },
  {
    "num": 29,
    "question_en": "Which memory is closest to CPU?",
    "question_hi": "CPU के सबसे पास कौन-सी मेमोरी होती है?",
    "options_en": ["Cache", "RAM", "ROM", "Hard Disk"],
    "options_hi": ["कैश", "RAM", "ROM", "हार्ड डिस्क"],
    "answer_en": "Cache",
    "answer_hi": "कैश"
  },
  {
    "num": 30,
    "question_en": "Which output device is used for maps?",
    "question_hi": "नक्शे छापने के लिए कौन-सा आउटपुट डिवाइस है?",
    "options_en": ["Plotter", "Printer", "Monitor", "Speaker"],
    "options_hi": ["प्लॉटर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Plotter",
    "answer_hi": "प्लॉटर"
  },

  {
    "num": 31,
    "question_en": "Which key opens start menu?",
    "question_hi": "स्टार्ट मेनू खोलने की कुंजी कौन-सी है?",
    "options_en": ["Windows key", "Alt", "Ctrl", "Esc"],
    "options_hi": ["विंडोज़ कुंजी", "ऑल्ट", "कंट्रोल", "Esc"],
    "answer_en": "Windows key",
    "answer_hi": "विंडोज़ कुंजी"
  },
  {
    "num": 32,
    "question_en": "Which type of printer uses ink?",
    "question_hi": "कौन-सा प्रिंटर इंक का उपयोग करता है?",
    "options_en": ["Inkjet", "Laser", "Dot matrix", "Plotter"],
    "options_hi": ["इंकजेट", "लेज़र", "डॉट मैट्रिक्स", "प्लॉटर"],
    "answer_en": "Inkjet",
    "answer_hi": "इंकजेट"
  },
  {
    "num": 33,
    "question_en": "Which extension is for PowerPoint?",
    "question_hi": "PowerPoint फ़ाइल का एक्सटेंशन क्या है?",
    "options_en": [".pptx", ".docx", ".xlsx", ".html"],
    "options_hi": [".pptx", ".docx", ".xlsx", ".html"],
    "answer_en": ".pptx",
    "answer_hi": ".pptx"
  },
  {
    "num": 34,
    "question_en": "Which device records sound?",
    "question_hi": "ध्वनि रिकॉर्ड करने वाला उपकरण कौन-सा है?",
    "options_en": ["Microphone", "Speaker", "Monitor", "Printer"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन"
  },
  {
    "num": 35,
    "question_en": "Which key is used to redo?",
    "question_hi": "Redo करने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + R"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + R"],
    "answer_en": "Ctrl + Y",
    "answer_hi": "Ctrl + Y"
  },

  {
    "num": 36,
    "question_en": "Which network covers large distance?",
    "question_hi": "लंबी दूरी को कवर करने वाला नेटवर्क कौन-सा है?",
    "options_en": ["WAN", "LAN", "MAN", "PAN"],
    "options_hi": ["WAN", "LAN", "MAN", "PAN"],
    "answer_en": "WAN",
    "answer_hi": "WAN"
  },
  {
    "num": 37,
    "question_en": "Which device is touch sensitive?",
    "question_hi": "कौन-सा उपकरण टच सेंसिटिव होता है?",
    "options_en": ["Touch screen", "Mouse", "Keyboard", "Scanner"],
    "options_hi": ["टच स्क्रीन", "माउस", "कीबोर्ड", "स्कैनर"],
    "answer_en": "Touch screen",
    "answer_hi": "टच स्क्रीन"
  },
  {
    "num": 38,
    "question_en": "Which software compresses files?",
    "question_hi": "फ़ाइल को कंप्रेस करने वाला सॉफ़्टवेयर कौन-सा है?",
    "options_en": ["WinZip", "MS Word", "Paint", "Chrome"],
    "options_hi": ["WinZip", "MS Word", "पेंट", "क्रोम"],
    "answer_en": "WinZip",
    "answer_hi": "WinZip"
  },
  {
    "num": 39,
    "question_en": "Which key locks the computer?",
    "question_hi": "कंप्यूटर लॉक करने की कुंजी कौन-सी है?",
    "options_en": ["Windows + L", "Ctrl + L", "Alt + L", "Shift + L"],
    "options_hi": ["Windows + L", "Ctrl + L", "Alt + L", "Shift + L"],
    "answer_en": "Windows + L",
    "answer_hi": "Windows + L"
  },
  {
    "num": 40,
    "question_en": "Which device is used in ATM?",
    "question_hi": "ATM में कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Card reader", "Joystick", "Plotter", "Speaker"],
    "options_hi": ["कार्ड रीडर", "जॉयस्टिक", "प्लॉटर", "स्पीकर"],
    "answer_en": "Card reader",
    "answer_hi": "कार्ड रीडर"
  },

  {
    "num": 41,
    "question_en": "Which file is used for web page?",
    "question_hi": "वेब पेज के लिए कौन-सी फ़ाइल उपयोग होती है?",
    "options_en": [".html", ".exe", ".mp3", ".docx"],
    "options_hi": [".html", ".exe", ".mp3", ".docx"],
    "answer_en": ".html",
    "answer_hi": ".html"
  },
  {
    "num": 42,
    "question_en": "Which device measures finger print?",
    "question_hi": "फिंगरप्रिंट मापने वाला उपकरण कौन-सा है?",
    "options_en": ["Biometric scanner", "Joystick", "Mouse", "Plotter"],
    "options_hi": ["बायोमेट्रिक स्कैनर", "जॉयस्टिक", "माउस", "प्लॉटर"],
    "answer_en": "Biometric scanner",
    "answer_hi": "बायोमेट्रिक स्कैनर"
  },
  {
    "num": 43,
    "question_en": "Which key refreshes a page?",
    "question_hi": "पेज रिफ्रेश करने की कुंजी कौन-सी है?",
    "options_en": ["F5", "F2", "F1", "F12"],
    "options_hi": ["F5", "F2", "F1", "F12"],
    "answer_en": "F5",
    "answer_hi": "F5"
  },
  {
    "num": 44,
    "question_en": "Which storage is solid state?",
    "question_hi": "सॉलिड स्टेट स्टोरेज कौन-सा है?",
    "options_en": ["SSD", "Hard Disk", "CD", "DVD"],
    "options_hi": ["SSD", "हार्ड डिस्क", "CD", "DVD"],
    "answer_en": "SSD",
    "answer_hi": "SSD"
  },
  {
    "num": 45,
    "question_en": "Which software translates code?",
    "question_hi": "कोड का अनुवाद करने वाला सॉफ़्टवेयर कौन-सा है?",
    "options_en": ["Compiler", "Browser", "Editor", "OS"],
    "options_hi": ["कंपाइलर", "ब्राउज़र", "एडिटर", "OS"],
    "answer_en": "Compiler",
    "answer_hi": "कंपाइलर"
  },

  {
    "num": 46,
    "question_en": "Which key moves cursor right?",
    "question_hi": "कर्सर को दाईं ओर ले जाने की कुंजी कौन-सी है?",
    "options_en": ["Right Arrow", "Left Arrow", "Up Arrow", "Down Arrow"],
    "options_hi": ["राइट एरो", "लेफ्ट एरो", "अप एरो", "डाउन एरो"],
    "answer_en": "Right Arrow",
    "answer_hi": "राइट एरो"
  },
  {
    "num": 47,
    "question_en": "Which device reads QR code?",
    "question_hi": "QR कोड पढ़ने वाला उपकरण कौन-सा है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Plotter"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "प्लॉटर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 48,
    "question_en": "Which key opens run dialog?",
    "question_hi": "Run डायलॉग खोलने की कुंजी कौन-सी है?",
    "options_en": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "options_hi": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "answer_en": "Windows + R",
    "answer_hi": "Windows + R"
  },
  {
    "num": 49,
    "question_en": "Which device provides wireless internet?",
    "question_hi": "वायरलेस इंटरनेट देने वाला उपकरण कौन-सा है?",
    "options_en": ["Wi-Fi router", "Scanner", "Printer", "Plotter"],
    "options_hi": ["वाई-फाई राउटर", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Wi-Fi router",
    "answer_hi": "वाई-फाई राउटर"
  },
  {
    "num": 50,
    "question_en": "Which software manages files?",
    "question_hi": "फ़ाइल प्रबंधन करने वाला सॉफ़्टवेयर कौन-सा है?",
    "options_en": ["Operating System", "Paint", "Browser", "Antivirus"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "पेंट", "ब्राउज़र", "एंटीवायरस"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
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

