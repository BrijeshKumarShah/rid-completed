const questions =[
  {
    "num": 1,
    "question_en": "Which device is used to move the cursor on screen?",
    "question_hi": "स्क्रीन पर कर्सर को चलाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Mouse", "Keyboard", "Monitor", "Printer"],
    "options_hi": ["माउस", "कीबोर्ड", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस"
  },
  {
    "num": 2,
    "question_en": "Which memory is volatile?",
    "question_hi": "कौन-सी मेमोरी अस्थायी होती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Pen Drive"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "RAM"
  },
  {
    "num": 3,
    "question_en": "Which key is used to delete text?",
    "question_hi": "टेक्स्ट हटाने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Delete", "Shift", "Enter", "Alt"],
    "options_hi": ["डिलीट", "शिफ्ट", "एंटर", "ऑल्ट"],
    "answer_en": "Delete",
    "answer_hi": "डिलीट"
  },
  {
    "num": 4,
    "question_en": "Which software is used for presentations?",
    "question_hi": "प्रेज़ेंटेशन बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS PowerPoint", "MS Word", "Paint", "Notepad"],
    "options_hi": ["MS PowerPoint", "MS Word", "पेंट", "नोटपैड"],
    "answer_en": "MS PowerPoint",
    "answer_hi": "MS PowerPoint"
  },
  {
    "num": 5,
    "question_en": "Which unit measures computer speed?",
    "question_hi": "कंप्यूटर की गति किसमें मापी जाती है?",
    "options_en": ["Hertz", "Byte", "Pixel", "Inch"],
    "options_hi": ["हर्ट्ज़", "बाइट", "पिक्सेल", "इंच"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज़"
  },

  {
    "num": 6,
    "question_en": "Which device connects computer to internet?",
    "question_hi": "कंप्यूटर को इंटरनेट से जोड़ने वाला उपकरण कौन-सा है?",
    "options_en": ["Modem", "Printer", "Scanner", "Monitor"],
    "options_hi": ["मॉडेम", "प्रिंटर", "स्कैनर", "मॉनिटर"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम"
  },
  {
    "num": 7,
    "question_en": "Which shortcut is used to paste?",
    "question_hi": "पेस्ट करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + V",
    "answer_hi": "Ctrl + V"
  },
  {
    "num": 8,
    "question_en": "Which is not an input device?",
    "question_hi": "निम्न में से कौन इनपुट डिवाइस नहीं है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },
  {
    "num": 9,
    "question_en": "Which memory stores BIOS?",
    "question_hi": "BIOS किस मेमोरी में संग्रहित होता है?",
    "options_en": ["ROM", "RAM", "Cache", "Register"],
    "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },
  {
    "num": 10,
    "question_en": "Which file extension is used for Word files?",
    "question_hi": "Word फाइल की एक्सटेंशन क्या होती है?",
    "options_en": [".docx", ".xlsx", ".pptx", ".jpg"],
    "options_hi": [".docx", ".xlsx", ".pptx", ".jpg"],
    "answer_en": ".docx",
    "answer_hi": ".docx"
  },

  {
    "num": 11,
    "question_en": "Which device records voice?",
    "question_hi": "आवाज़ रिकॉर्ड करने वाला उपकरण कौन-सा है?",
    "options_en": ["Microphone", "Speaker", "Printer", "Monitor"],
    "options_hi": ["माइक्रोफोन", "स्पीकर", "प्रिंटर", "मॉनिटर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन"
  },
  {
    "num": 12,
    "question_en": "Which key is used to start a new line?",
    "question_hi": "नई पंक्ति शुरू करने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["Enter", "Shift", "Ctrl", "Alt"],
    "options_hi": ["एंटर", "शिफ्ट", "कंट्रोल", "ऑल्ट"],
    "answer_en": "Enter",
    "answer_hi": "एंटर"
  },
  {
    "num": 13,
    "question_en": "Which is an example of system software?",
    "question_hi": "सिस्टम सॉफ्टवेयर का उदाहरण कौन-सा है?",
    "options_en": ["Windows", "Excel", "Paint", "Chrome"],
    "options_hi": ["विंडोज़", "एक्सेल", "पेंट", "क्रोम"],
    "answer_en": "Windows",
    "answer_hi": "विंडोज़"
  },
  {
    "num": 14,
    "question_en": "Which storage has highest capacity?",
    "question_hi": "किस स्टोरेज की क्षमता सबसे अधिक होती है?",
    "options_en": ["Hard Disk", "CD", "DVD", "Floppy"],
    "options_hi": ["हार्ड डिस्क", "CD", "DVD", "फ्लॉपी"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 15,
    "question_en": "Which browser is used to access websites?",
    "question_hi": "वेबसाइट देखने के लिए किसका उपयोग होता है?",
    "options_en": ["Web Browser", "Compiler", "OS", "Driver"],
    "options_hi": ["वेब ब्राउज़र", "कंपाइलर", "OS", "ड्राइवर"],
    "answer_en": "Web Browser",
    "answer_hi": "वेब ब्राउज़र"
  },

  {
    "num": 16,
    "question_en": "Which key combination closes a window?",
    "question_hi": "विंडो बंद करने का शॉर्टकट क्या है?",
    "options_en": ["Alt + F4", "Ctrl + S", "Ctrl + A", "Ctrl + P"],
    "options_hi": ["Alt + F4", "Ctrl + S", "Ctrl + A", "Ctrl + P"],
    "answer_en": "Alt + F4",
    "answer_hi": "Alt + F4"
  },
  {
    "num": 17,
    "question_en": "Which device displays images?",
    "question_hi": "चित्र दिखाने वाला उपकरण कौन-सा है?",
    "options_en": ["Monitor", "Printer", "Scanner", "Keyboard"],
    "options_hi": ["मॉनिटर", "प्रिंटर", "स्कैनर", "कीबोर्ड"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },
  {
    "num": 18,
    "question_en": "Which software is used for calculations?",
    "question_hi": "गणना के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Excel", "MS Word", "Paint", "Notepad"],
    "options_hi": ["MS Excel", "MS Word", "पेंट", "नोटपैड"],
    "answer_en": "MS Excel",
    "answer_hi": "MS Excel"
  },
  {
    "num": 19,
    "question_en": "Which key selects all text?",
    "question_hi": "पूरा टेक्स्ट चुनने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A"
  },
  {
    "num": 20,
    "question_en": "Which device produces sound?",
    "question_hi": "ध्वनि उत्पन्न करने वाला उपकरण कौन-सा है?",
    "options_en": ["Speaker", "Scanner", "Keyboard", "Mouse"],
    "options_hi": ["स्पीकर", "स्कैनर", "कीबोर्ड", "माउस"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },

  {
    "num": 21,
    "question_en": "Which file extension is used for Excel?",
    "question_hi": "Excel फाइल की एक्सटेंशन क्या होती है?",
    "options_en": [".xlsx", ".docx", ".pptx", ".png"],
    "options_hi": [".xlsx", ".docx", ".pptx", ".png"],
    "answer_en": ".xlsx",
    "answer_hi": ".xlsx"
  },
  {
    "num": 22,
    "question_en": "Which device is used to take printout?",
    "question_hi": "प्रिंटआउट लेने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Printer", "Monitor", "Mouse", "Scanner"],
    "options_hi": ["प्रिंटर", "मॉनिटर", "माउस", "स्कैनर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर"
  },
  {
    "num": 23,
    "question_en": "Which key opens help menu?",
    "question_hi": "हेल्प मेनू खोलने की कुंजी कौन-सी है?",
    "options_en": ["F1", "F2", "F5", "F12"],
    "options_hi": ["F1", "F2", "F5", "F12"],
    "answer_en": "F1",
    "answer_hi": "F1"
  },
  {
    "num": 24,
    "question_en": "Which memory is fastest?",
    "question_hi": "सबसे तेज़ मेमोरी कौन-सी होती है?",
    "options_en": ["Cache Memory", "RAM", "ROM", "Hard Disk"],
    "options_hi": ["कैश मेमोरी", "RAM", "ROM", "हार्ड डिस्क"],
    "answer_en": "Cache Memory",
    "answer_hi": "कैश मेमोरी"
  },
  {
    "num": 25,
    "question_en": "Which software is used to draw pictures?",
    "question_hi": "चित्र बनाने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Paint", "Word", "Excel", "Browser"],
    "options_hi": ["पेंट", "वर्ड", "एक्सेल", "ब्राउज़र"],
    "answer_en": "Paint",
    "answer_hi": "पेंट"
  },
  [
  {
    "num": 26,
    "question_en": "Which device is used to take images into computer?",
    "question_hi": "कंप्यूटर में चित्र डालने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Speaker"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 27,
    "question_en": "Which key is used to undo last action?",
    "question_hi": "पिछली क्रिया को वापस करने की कुंजी कौन-सी है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z"
  },
  {
    "num": 28,
    "question_en": "Which software is used for browsing internet?",
    "question_hi": "इंटरनेट ब्राउज़ करने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Chrome", "Windows", "Excel", "Paint"],
    "options_hi": ["क्रोम", "विंडोज़", "एक्सेल", "पेंट"],
    "answer_en": "Chrome",
    "answer_hi": "क्रोम"
  },
  {
    "num": 29,
    "question_en": "Which memory stores data temporarily?",
    "question_hi": "डेटा अस्थायी रूप से किस मेमोरी में संग्रहित होता है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "DVD"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "DVD"],
    "answer_en": "RAM",
    "answer_hi": "RAM"
  },
  {
    "num": 30,
    "question_en": "Which unit is used to measure memory?",
    "question_hi": "मेमोरी को मापने की इकाई क्या है?",
    "options_en": ["Byte", "Hertz", "Pixel", "Second"],
    "options_hi": ["बाइट", "हर्ट्ज़", "पिक्सेल", "सेकंड"],
    "answer_en": "Byte",
    "answer_hi": "बाइट"
  },

  {
    "num": 31,
    "question_en": "Which device is used to play audio?",
    "question_hi": "ऑडियो चलाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Speaker", "Printer", "Scanner", "Keyboard"],
    "options_hi": ["स्पीकर", "प्रिंटर", "स्कैनर", "कीबोर्ड"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 32,
    "question_en": "Which file extension is used for PowerPoint?",
    "question_hi": "PowerPoint फाइल की एक्सटेंशन क्या होती है?",
    "options_en": [".pptx", ".docx", ".xlsx", ".jpg"],
    "options_hi": [".pptx", ".docx", ".xlsx", ".jpg"],
    "answer_en": ".pptx",
    "answer_hi": ".pptx"
  },
  {
    "num": 33,
    "question_en": "Which key is used to rename a file?",
    "question_hi": "फाइल का नाम बदलने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["F2", "F1", "F5", "F12"],
    "options_hi": ["F2", "F1", "F5", "F12"],
    "answer_en": "F2",
    "answer_hi": "F2"
  },
  {
    "num": 34,
    "question_en": "Which device is used for video calling?",
    "question_hi": "वीडियो कॉलिंग के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Webcam", "Scanner", "Printer", "Plotter"],
    "options_hi": ["वेबकैम", "स्कैनर", "प्रिंटर", "प्लॉटर"],
    "answer_en": "Webcam",
    "answer_hi": "वेबकैम"
  },
  {
    "num": 35,
    "question_en": "Which software is used to write letters?",
    "question_hi": "पत्र लिखने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["MS Word", "Paint", "Excel", "Browser"],
    "options_hi": ["MS Word", "पेंट", "एक्सेल", "ब्राउज़र"],
    "answer_en": "MS Word",
    "answer_hi": "MS Word"
  },

  {
    "num": 36,
    "question_en": "Which key combination is used to print?",
    "question_hi": "प्रिंट करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P"
  },
  {
    "num": 37,
    "question_en": "Which memory is used to speed up CPU?",
    "question_hi": "CPU की गति बढ़ाने के लिए कौन-सी मेमोरी उपयोग होती है?",
    "options_en": ["Cache Memory", "ROM", "Hard Disk", "DVD"],
    "options_hi": ["कैश मेमोरी", "ROM", "हार्ड डिस्क", "DVD"],
    "answer_en": "Cache Memory",
    "answer_hi": "कैश मेमोरी"
  },
  {
    "num": 38,
    "question_en": "Which device is used to draw diagrams on large paper?",
    "question_hi": "बड़े कागज़ पर आरेख बनाने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Plotter", "Printer", "Scanner", "Monitor"],
    "options_hi": ["प्लॉटर", "प्रिंटर", "स्कैनर", "मॉनिटर"],
    "answer_en": "Plotter",
    "answer_hi": "प्लॉटर"
  },
  {
    "num": 39,
    "question_en": "Which shortcut is used to cut text?",
    "question_hi": "टेक्स्ट काटने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + X",
    "answer_hi": "Ctrl + X"
  },
  {
    "num": 40,
    "question_en": "Which part stores data permanently?",
    "question_hi": "डेटा स्थायी रूप से कौन-सा भाग संग्रहित करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },

  {
    "num": 41,
    "question_en": "Which software protects computer from viruses?",
    "question_hi": "कंप्यूटर को वायरस से सुरक्षित रखने वाला सॉफ्टवेयर कौन-सा है?",
    "options_en": ["Antivirus", "Browser", "OS", "Compiler"],
    "options_hi": ["एंटीवायरस", "ब्राउज़र", "OS", "कंपाइलर"],
    "answer_en": "Antivirus",
    "answer_hi": "एंटीवायरस"
  },
  {
    "num": 42,
    "question_en": "Which key is used to refresh desktop?",
    "question_hi": "डेस्कटॉप रिफ्रेश करने की कुंजी कौन-सी है?",
    "options_en": ["F5", "F2", "F1", "F12"],
    "options_hi": ["F5", "F2", "F1", "F12"],
    "answer_en": "F5",
    "answer_hi": "F5"
  },
  {
    "num": 43,
    "question_en": "Which device is used for typing?",
    "question_hi": "टाइपिंग के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Keyboard", "Mouse", "Monitor", "Speaker"],
    "options_hi": ["कीबोर्ड", "माउस", "मॉनिटर", "स्पीकर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड"
  },
  {
    "num": 44,
    "question_en": "Which network connects computers worldwide?",
    "question_hi": "विश्व भर के कंप्यूटरों को जोड़ने वाला नेटवर्क कौन-सा है?",
    "options_en": ["Internet", "LAN", "MAN", "PAN"],
    "options_hi": ["इंटरनेट", "LAN", "MAN", "PAN"],
    "answer_en": "Internet",
    "answer_hi": "इंटरनेट"
  },
  {
    "num": 45,
    "question_en": "Which software is used to send emails?",
    "question_hi": "ईमेल भेजने के लिए कौन-सा सॉफ्टवेयर उपयोग होता है?",
    "options_en": ["Email Client", "Paint", "Excel", "Calculator"],
    "options_hi": ["ईमेल क्लाइंट", "पेंट", "एक्सेल", "कैलकुलेटर"],
    "answer_en": "Email Client",
    "answer_hi": "ईमेल क्लाइंट"
  },

  {
    "num": 46,
    "question_en": "Which key combination opens a new file?",
    "question_hi": "नई फाइल खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + O",
    "answer_hi": "Ctrl + O"
  },
  {
    "num": 47,
    "question_en": "Which device is used to store data externally?",
    "question_hi": "डेटा बाहरी रूप से संग्रहित करने का उपकरण कौन-सा है?",
    "options_en": ["Pen Drive", "RAM", "Cache", "Register"],
    "options_hi": ["पेन ड्राइव", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Pen Drive",
    "answer_hi": "पेन ड्राइव"
  },
  {
    "num": 48,
    "question_en": "Which software converts source code to machine code?",
    "question_hi": "सोर्स कोड को मशीन कोड में बदलने वाला सॉफ्टवेयर कौन-सा है?",
    "options_en": ["Compiler", "Browser", "Editor", "OS"],
    "options_hi": ["कंपाइलर", "ब्राउज़र", "एडिटर", "OS"],
    "answer_en": "Compiler",
    "answer_hi": "कंपाइलर"
  },
  {
    "num": 49,
    "question_en": "Which key is used to open task manager?",
    "question_hi": "टास्क मैनेजर खोलने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + F4", "Ctrl + P"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + F4", "Ctrl + P"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc"
  },
  {
    "num": 50,
    "question_en": "Which device is used to view videos?",
    "question_hi": "वीडियो देखने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Monitor", "Printer", "Scanner", "Keyboard"],
    "options_hi": ["मॉनिटर", "प्रिंटर", "स्कैनर", "कीबोर्ड"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
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

