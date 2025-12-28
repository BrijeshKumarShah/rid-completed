const questions =[
  {
    "num": 1,
    "question_en": "What is a computer?",
    "question_hi": "कंप्यूटर क्या है?",
    "options_en": ["Electronic device", "Mechanical device", "Electrical device", "Manual device"],
    "options_hi": ["इलेक्ट्रॉनिक उपकरण", "यांत्रिक उपकरण", "विद्युत उपकरण", "हाथ से चलने वाला उपकरण"],
    "answer_en": "Electronic device",
    "answer_hi": "इलेक्ट्रॉनिक उपकरण"
  },
  {
    "num": 2,
    "question_en": "Which part of computer is called brain?",
    "question_hi": "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
    "options_en": ["CPU", "Monitor", "Keyboard", "Mouse"],
    "options_hi": ["CPU", "मॉनिटर", "कीबोर्ड", "माउस"],
    "answer_en": "CPU",
    "answer_hi": "CPU"
  },
  {
    "num": 3,
    "question_en": "Which device is used to input text?",
    "question_hi": "टेक्स्ट इनपुट करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
    "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड"
  },
  {
    "num": 4,
    "question_en": "Which device is used to point and click?",
    "question_hi": "पॉइंट और क्लिक करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Mouse", "Scanner", "Printer", "Speaker"],
    "options_hi": ["माउस", "स्कैनर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस"
  },
  {
    "num": 5,
    "question_en": "Which is an output device?",
    "question_hi": "निम्न में से कौन आउटपुट डिवाइस है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर"
  },
  {
    "num": 6,
    "question_en": "What does RAM stand for?",
    "question_hi": "RAM का पूरा नाम क्या है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Rapid Access Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रन एक्सेस मेमोरी", "रैपिड एक्सेस मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी"
  },
  {
    "num": 7,
    "question_en": "Which memory is permanent?",
    "question_hi": "कौन-सी मेमोरी स्थायी होती है?",
    "options_en": ["ROM", "RAM", "Cache", "Register"],
    "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "ROM",
    "answer_hi": "ROM"
  },
  {
    "num": 8,
    "question_en": "Which storage device has the largest capacity?",
    "question_hi": "किस स्टोरेज डिवाइस की क्षमता सबसे अधिक होती है?",
    "options_en": ["Hard Disk", "Pen Drive", "CD", "DVD"],
    "options_hi": ["हार्ड डिस्क", "पेन ड्राइव", "CD", "DVD"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क"
  },
  {
    "num": 9,
    "question_en": "Which software controls computer hardware?",
    "question_hi": "कौन-सा सॉफ़्टवेयर कंप्यूटर हार्डवेयर को नियंत्रित करता है?",
    "options_en": ["Operating System", "Application Software", "Utility Software", "Compiler"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एप्लिकेशन सॉफ़्टवेयर", "यूटिलिटी सॉफ़्टवेयर", "कंपाइलर"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
  },
  {
    "num": 10,
    "question_en": "Which is application software?",
    "question_hi": "निम्न में से कौन एप्लिकेशन सॉफ़्टवेयर है?",
    "options_en": ["MS Word", "Windows", "Linux", "DOS"],
    "options_hi": ["MS Word", "विंडोज़", "लिनक्स", "DOS"],
    "answer_en": "MS Word",
    "answer_hi": "MS Word"
  },
  {
    "num": 11,
    "question_en": "What is the full form of OS?",
    "question_hi": "OS का पूरा नाम क्या है?",
    "options_en": ["Operating System", "Open Software", "Output System", "Office System"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "ओपन सॉफ़्टवेयर", "आउटपुट सिस्टम", "ऑफिस सिस्टम"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम"
  },
  {
    "num": 12,
    "question_en": "Which key is used to enter a new line?",
    "question_hi": "नई लाइन में जाने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Enter", "Shift", "Ctrl", "Alt"],
    "options_hi": ["एंटर", "शिफ्ट", "कंट्रोल", "ऑल्ट"],
    "answer_en": "Enter",
    "answer_hi": "एंटर"
  },
  {
    "num": 13,
    "question_en": "Which shortcut selects all text?",
    "question_hi": "पूरा टेक्स्ट चयन करने का शॉर्टकट क्या है?",
    "options_en": ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + X"],
    "options_hi": ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + X"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A"
  },
  {
    "num": 14,
    "question_en": "Which device is used to scan documents?",
    "question_hi": "दस्तावेज़ स्कैन करने के लिए कौन-सा उपकरण उपयोग होता है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Speaker"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "स्पीकर"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर"
  },
  {
    "num": 15,
    "question_en": "Which key combination is used to cut text?",
    "question_hi": "टेक्स्ट कट करने के लिए कौन-सा शॉर्टकट है?",
    "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + X",
    "answer_hi": "Ctrl + X"
  },
  {
    "num": 16,
    "question_en": "What does WWW stand for?",
    "question_hi": "WWW का पूरा नाम क्या है?",
    "options_en": ["World Wide Web", "Wide World Web", "World Web Wide", "Web World Wide"],
    "options_hi": ["वर्ल्ड वाइड वेब", "वाइड वर्ल्ड वेब", "वर्ल्ड वेब वाइड", "वेब वर्ल्ड वाइड"],
    "answer_en": "World Wide Web",
    "answer_hi": "वर्ल्ड वाइड वेब"
  },
  {
    "num": 17,
    "question_en": "Which is an example of input device?",
    "question_hi": "इनपुट डिवाइस का उदाहरण कौन-सा है?",
    "options_en": ["Keyboard", "Monitor", "Speaker", "Printer"],
    "options_hi": ["कीबोर्ड", "मॉनिटर", "स्पीकर", "प्रिंटर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड"
  },
  {
    "num": 18,
    "question_en": "Which device gives sound output?",
    "question_hi": "ध्वनि आउटपुट देने वाला उपकरण कौन-सा है?",
    "options_en": ["Speaker", "Monitor", "Scanner", "Keyboard"],
    "options_hi": ["स्पीकर", "मॉनिटर", "स्कैनर", "कीबोर्ड"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर"
  },
  {
    "num": 19,
    "question_en": "Which key deletes character to the right?",
    "question_hi": "दाईं ओर का अक्षर हटाने के लिए कौन-सी कुंजी होती है?",
    "options_en": ["Delete", "Backspace", "Enter", "Shift"],
    "options_hi": ["डिलीट", "बैकस्पेस", "एंटर", "शिफ्ट"],
    "answer_en": "Delete",
    "answer_hi": "डिलीट"
  },
  {
    "num": 20,
    "question_en": "Which software is used for calculations?",
    "question_hi": "गणना के लिए कौन-सा सॉफ़्टवेयर उपयोग होता है?",
    "options_en": ["MS Excel", "MS Word", "Paint", "Notepad"],
    "options_hi": ["MS Excel", "MS Word", "पेंट", "नोटपैड"],
    "answer_en": "MS Excel",
    "answer_hi": "MS Excel"
  },
  {
    "num": 21,
    "question_en": "Which is a portable storage device?",
    "question_hi": "पोर्टेबल स्टोरेज डिवाइस कौन-सा है?",
    "options_en": ["Pen Drive", "Hard Disk", "ROM", "RAM"],
    "options_hi": ["पेन ड्राइव", "हार्ड डिस्क", "ROM", "RAM"],
    "answer_en": "Pen Drive",
    "answer_hi": "पेन ड्राइव"
  },
  {
    "num": 22,
    "question_en": "Which part processes data?",
    "question_hi": "कंप्यूटर में डेटा को प्रोसेस कौन करता है?",
    "options_en": ["CPU", "Keyboard", "Mouse", "Monitor"],
    "options_hi": ["CPU", "कीबोर्ड", "माउस", "मॉनिटर"],
    "answer_en": "CPU",
    "answer_hi": "CPU"
  },
  {
    "num": 23,
    "question_en": "Which key is used to save a file?",
    "question_hi": "फाइल सेव करने के लिए कौन-सा शॉर्टकट है?",
    "options_en": ["Ctrl + S", "Ctrl + A", "Ctrl + C", "Ctrl + V"],
    "options_hi": ["Ctrl + S", "Ctrl + A", "Ctrl + C", "Ctrl + V"],
    "answer_en": "Ctrl + S",
    "answer_hi": "Ctrl + S"
  },
  {
    "num": 24,
    "question_en": "Which software is used to draw pictures?",
    "question_hi": "चित्र बनाने के लिए कौन-सा सॉफ़्टवेयर उपयोग होता है?",
    "options_en": ["Paint", "MS Word", "Excel", "Browser"],
    "options_hi": ["पेंट", "MS Word", "एक्सेल", "ब्राउज़र"],
    "answer_en": "Paint",
    "answer_hi": "पेंट"
  },
  {
    "num": 25,
    "question_en": "Your internet is working but websites won't load. What should you try FIRST?",
    "question_hi": "आपका इंटरनेट काम कर रहा है लेकिन वेबसाइटें लोड नहीं हो रही हैं। आपको पहले क्या आजमाना चाहिए?",
    "options_en": ["Clear browser cache", "Restart router", "Buy new internet plan", "Format computer"],
    "options_hi": ["ब्राउज़र कैश साफ़ करें", "राउटर रीस्टार्ट करें", "नई इंटरनेट योजना खरीदें", "कंप्यूटर फ़ॉर्मेट करें"],
    "answer_en": "Clear browser cache",
    "answer_hi": "ब्राउज़र कैश साफ़ करें"
  },
  [
  {
    "num": 25,
    "question_en": "Your internet is working but websites won't load. What should you try FIRST?",
    "question_hi": "आपका इंटरनेट काम कर रहा है लेकिन वेबसाइटें लोड नहीं हो रही हैं। आपको पहले क्या आजमाना चाहिए?",
    "options_en": [
      "Clear browser cache",
      "Restart router",
      "Buy new internet plan",
      "Format computer"
    ],
    "options_hi": [
      "ब्राउज़र कैश साफ़ करें",
      "राउटर रीस्टार्ट करें",
      "नई इंटरनेट योजना खरीदें",
      "कंप्यूटर फ़ॉर्मेट करें"
    ],
    "answer_en": "Clear browser cache",
    "answer_hi": "ब्राउज़र कैश साफ़ करें",
    "explanation_en": "Corrupted cache can prevent websites from loading properly. Clearing it often resolves this issue quickly.",
    "explanation_hi": "दूषित कैश वेबसाइटों को सही तरीके से लोड होने से रोक सकता है। इसे साफ़ करने से समस्या अक्सर जल्दी हल हो जाती है।"
  },
  [
  {
    "num": 25,
    "question_en": "Your internet is working but websites won't load. What should you try FIRST?",
    "question_hi": "आपका इंटरनेट काम कर रहा है लेकिन वेबसाइटें लोड नहीं हो रही हैं। आपको पहले क्या आजमाना चाहिए?",
    "options_en": ["Clear browser cache", "Restart router", "Buy new internet plan", "Format computer"],
    "options_hi": ["ब्राउज़र कैश साफ़ करें", "राउटर रीस्टार्ट करें", "नई इंटरनेट योजना खरीदें", "कंप्यूटर फ़ॉर्मेट करें"],
    "answer_en": "Clear browser cache",
    "answer_hi": "ब्राउज़र कैश साफ़ करें",
    "explanation_en": "Corrupted cache may block websites from loading properly.",
    "explanation_hi": "दूषित कैश वेबसाइटों को सही तरीके से लोड होने से रोक सकता है।"
  },
  {
    "num": 26,
    "question_en": "Which device is used to connect multiple computers in a LAN?",
    "question_hi": "LAN में कई कंप्यूटरों को जोड़ने के लिए किस डिवाइस का उपयोग होता है?",
    "options_en": ["Switch", "Printer", "Scanner", "Monitor"],
    "options_hi": ["स्विच", "प्रिंटर", "स्कैनर", "मॉनिटर"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "explanation_en": "A switch connects multiple computers within a local network.",
    "explanation_hi": "स्विच लोकल नेटवर्क में कई कंप्यूटरों को जोड़ता है।"
  },
  {
    "num": 27,
    "question_en": "What does CPU stand for?",
    "question_hi": "CPU का पूरा नाम क्या है?",
    "options_en": ["Central Processing Unit", "Computer Power Unit", "Central Program Unit", "Control Processing Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "explanation_en": "CPU is the brain of the computer.",
    "explanation_hi": "CPU कंप्यूटर का मस्तिष्क होता है।"
  },
  {
    "num": 28,
    "question_en": "Which memory is volatile?",
    "question_hi": "कौन-सी मेमोरी वोलाटाइल होती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Pen Drive"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM loses data when power is off.",
    "explanation_hi": "बिजली बंद होने पर RAM का डेटा नष्ट हो जाता है।"
  },
  {
    "num": 29,
    "question_en": "Which key is used to refresh a web page?",
    "question_hi": "वेब पेज को रिफ्रेश करने के लिए किस कुंजी का उपयोग होता है?",
    "options_en": ["F5", "F2", "F10", "Esc"],
    "options_hi": ["F5", "F2", "F10", "Esc"],
    "answer_en": "F5",
    "answer_hi": "F5",
    "explanation_en": "F5 reloads the current webpage.",
    "explanation_hi": "F5 वर्तमान वेब पेज को पुनः लोड करता है।"
  },
  {
    "num": 30,
    "question_en": "Which software is used to create documents?",
    "question_hi": "दस्तावेज़ बनाने के लिए किस सॉफ़्टवेयर का उपयोग होता है?",
    "options_en": ["MS Word", "MS Excel", "Paint", "Browser"],
    "options_hi": ["MS Word", "MS Excel", "पेंट", "ब्राउज़र"],
    "answer_en": "MS Word",
    "answer_hi": "MS Word",
    "explanation_en": "MS Word is a word processing software.",
    "explanation_hi": "MS Word एक वर्ड प्रोसेसिंग सॉफ़्टवेयर है।"
  },
  {
    "num": 31,
    "question_en": "What is the full form of URL?",
    "question_hi": "URL का पूरा नाम क्या है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Record Link", "Unified Resource Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रिकॉर्ड लिंक", "यूनिफ़ाइड रिसोर्स लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL specifies the address of a resource on the internet.",
    "explanation_hi": "URL इंटरनेट पर किसी संसाधन का पता बताता है।"
  },
  {
    "num": 32,
    "question_en": "Which device is used for printing?",
    "question_hi": "प्रिंटिंग के लिए किस डिवाइस का उपयोग होता है?",
    "options_en": ["Printer", "Scanner", "Monitor", "Keyboard"],
    "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "explanation_en": "Printer gives hard copy output.",
    "explanation_hi": "प्रिंटर हार्ड कॉपी आउटपुट देता है।"
  },
  {
    "num": 33,
    "question_en": "Which key combination is used to copy?",
    "question_hi": "कॉपी करने के लिए किस कुंजी संयोजन का उपयोग होता है?",
    "options_en": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + C",
    "answer_hi": "Ctrl + C",
    "explanation_en": "Ctrl + C copies selected text.",
    "explanation_hi": "Ctrl + C चयनित टेक्स्ट को कॉपी करता है।"
  },
  {
    "num": 34,
    "question_en": "Which part stores data permanently?",
    "question_hi": "कौन-सा भाग स्थायी रूप से डेटा संग्रहित करता है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard disk stores data permanently.",
    "explanation_hi": "हार्ड डिस्क में डेटा स्थायी रूप से रहता है।"
  },
  {
    "num": 35,
    "question_en": "Which is an input device?",
    "question_hi": "निम्न में से कौन इनपुट डिवाइस है?",
    "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
    "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड",
    "explanation_en": "Keyboard is used to input data.",
    "explanation_hi": "कीबोर्ड डेटा इनपुट करने के लिए उपयोग होता है।"
  },
  {
    "num": 36,
    "question_en": "Which OS is developed by Microsoft?",
    "question_hi": "Microsoft द्वारा विकसित ऑपरेटिंग सिस्टम कौन-सा है?",
    "options_en": ["Windows", "Linux", "Android", "iOS"],
    "options_hi": ["विंडोज़", "लिनक्स", "एंड्रॉइड", "iOS"],
    "answer_en": "Windows",
    "answer_hi": "विंडोज़",
    "explanation_en": "Windows is a Microsoft operating system.",
    "explanation_hi": "विंडोज़ Microsoft का ऑपरेटिंग सिस्टम है।"
  },
  {
    "num": 37,
    "question_en": "What is the use of antivirus software?",
    "question_hi": "एंटीवायरस सॉफ़्टवेयर का उपयोग क्या है?",
    "options_en": ["Protect from viruses", "Create files", "Play games", "Print documents"],
    "options_hi": ["वायरस से सुरक्षा", "फाइल बनाना", "गेम खेलना", "प्रिंट करना"],
    "answer_en": "Protect from viruses",
    "answer_hi": "वायरस से सुरक्षा",
    "explanation_en": "Antivirus protects the system from malware.",
    "explanation_hi": "एंटीवायरस सिस्टम को मैलवेयर से बचाता है।"
  },
  {
    "num": 38,
    "question_en": "Which storage device is portable?",
    "question_hi": "कौन-सा स्टोरेज डिवाइस पोर्टेबल है?",
    "options_en": ["Pen Drive", "Hard Disk", "RAM", "ROM"],
    "options_hi": ["पेन ड्राइव", "हार्ड डिस्क", "RAM", "ROM"],
    "answer_en": "Pen Drive",
    "answer_hi": "पेन ड्राइव",
    "explanation_en": "Pen drives are easy to carry.",
    "explanation_hi": "पेन ड्राइव आसानी से ले जाई जा सकती है।"
  },
  {
    "num": 39,
    "question_en": "Which symbol is used in email address?",
    "question_hi": "ई-मेल पते में किस प्रतीक का उपयोग होता है?",
    "options_en": ["@", "#", "$", "%"],
    "options_hi": ["@", "#", "$", "%"],
    "answer_en": "@",
    "answer_hi": "@",
    "explanation_en": "@ separates username and domain.",
    "explanation_hi": "@ यूज़रनेम और डोमेन को अलग करता है।"
  },
  {
    "num": 40,
    "question_en": "Which device shows visual output?",
    "question_hi": "कौन-सा डिवाइस दृश्य आउटपुट दिखाता है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर",
    "explanation_en": "Monitor displays output on screen.",
    "explanation_hi": "मॉनिटर स्क्रीन पर आउटपुट दिखाता है।"
  },
  {
    "num": 41,
    "question_en": "Which file extension is used for Word files?",
    "question_hi": "Word फाइल के लिए कौन-सा एक्सटेंशन उपयोग होता है?",
    "options_en": [".docx", ".xlsx", ".pptx", ".txt"],
    "options_hi": [".docx", ".xlsx", ".pptx", ".txt"],
    "answer_en": ".docx",
    "answer_hi": ".docx",
    "explanation_en": ".docx is used for MS Word documents.",
    "explanation_hi": ".docx MS Word दस्तावेज़ के लिए होता है।"
  },
  {
    "num": 42,
    "question_en": "What does WWW stand for?",
    "question_hi": "WWW का पूरा नाम क्या है?",
    "options_en": ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    "options_hi": ["वर्ल्ड वाइड वेब", "वर्ल्ड वेब वाइड", "वाइड वर्ल्ड वेब", "वेब वर्ल्ड वाइड"],
    "answer_en": "World Wide Web",
    "answer_hi": "वर्ल्ड वाइड वेब",
    "explanation_en": "WWW is a system of interlinked web pages.",
    "explanation_hi": "WWW आपस में जुड़े वेब पेजों की प्रणाली है।"
  },
  {
    "num": 43,
    "question_en": "Which shortcut is used to paste?",
    "question_hi": "पेस्ट करने के लिए कौन-सा शॉर्टकट उपयोग होता है?",
    "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + A"],
    "options_hi": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + A"],
    "answer_en": "Ctrl + V",
    "answer_hi": "Ctrl + V",
    "explanation_en": "Ctrl + V pastes copied data.",
    "explanation_hi": "Ctrl + V कॉपी किया गया डेटा पेस्ट करता है।"
  },
  {
    "num": 44,
    "question_en": "Which device converts paper into digital form?",
    "question_hi": "कौन-सा डिवाइस कागज़ को डिजिटल रूप में बदलता है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Keyboard"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर",
    "explanation_en": "Scanner digitizes documents.",
    "explanation_hi": "स्कैनर दस्तावेज़ों को डिजिटल बनाता है।"
  },
  {
    "num": 45,
    "question_en": "Which is not an operating system?",
    "question_hi": "निम्न में से कौन ऑपरेटिंग सिस्टम नहीं है?",
    "options_en": ["Windows", "Linux", "MS Word", "Android"],
    "options_hi": ["विंडोज़", "लिनक्स", "MS Word", "एंड्रॉइड"],
    "answer_en": "MS Word",
    "answer_hi": "MS Word",
    "explanation_en": "MS Word is application software.",
    "explanation_hi": "MS Word एप्लिकेशन सॉफ़्टवेयर है।"
  },
  {
    "num": 46,
    "question_en": "Which memory is fastest?",
    "question_hi": "कौन-सी मेमोरी सबसे तेज़ होती है?",
    "options_en": ["Cache", "RAM", "ROM", "Hard Disk"],
    "options_hi": ["कैश", "RAM", "ROM", "हार्ड डिस्क"],
    "answer_en": "Cache",
    "answer_hi": "कैश",
    "explanation_en": "Cache memory works at very high speed.",
    "explanation_hi": "कैश मेमोरी बहुत तेज़ गति से काम करती है।"
  },
  {
    "num": 47,
    "question_en": "Which key deletes text to the left?",
    "question_hi": "बाएँ तरफ का टेक्स्ट हटाने के लिए कौन-सी कुंजी उपयोग होती है?",
    "options_en": ["Backspace", "Delete", "Enter", "Shift"],
    "options_hi": ["बैकस्पेस", "डिलीट", "एंटर", "शिफ्ट"],
    "answer_en": "Backspace",
    "answer_hi": "बैकस्पेस",
    "explanation_en": "Backspace removes text to the left.",
    "explanation_hi": "बैकस्पेस बाईं ओर का टेक्स्ट हटाता है।"
  },
  {
    "num": 48,
    "question_en": "Which device is used to hear sound?",
    "question_hi": "ध्वनि सुनने के लिए किस डिवाइस का उपयोग होता है?",
    "options_en": ["Speaker", "Monitor", "Scanner", "Keyboard"],
    "options_hi": ["स्पीकर", "मॉनिटर", "स्कैनर", "कीबोर्ड"],
    "answer_en": "Speaker",
    "answer_hi": "स्पीकर",
    "explanation_en": "Speaker outputs sound.",
    "explanation_hi": "स्पीकर ध्वनि आउटपुट देता है।"
  },
  {
    "num": 49,
    "question_en": "Which file stores images?",
    "question_hi": "कौन-सी फाइल इमेज संग्रहित करती है?",
    "options_en": [".jpg", ".txt", ".exe", ".docx"],
    "options_hi": [".jpg", ".txt", ".exe", ".docx"],
    "answer_en": ".jpg",
    "answer_hi": ".jpg",
    "explanation_en": ".jpg is an image file format.",
    "explanation_hi": ".jpg एक इमेज फाइल फॉर्मेट है।"
  },
  {
    "num": 50,
    "question_en": "What is the main function of an OS?",
    "question_hi": "ऑपरेटिंग सिस्टम का मुख्य कार्य क्या है?",
    "options_en": ["Manage hardware and software", "Type documents", "Browse internet", "Play music"],
    "options_hi": ["हार्डवेयर और सॉफ़्टवेयर प्रबंधन", "दस्तावेज़ टाइप करना", "इंटरनेट चलाना", "संगीत चलाना"],
    "answer_en": "Manage hardware and software",
    "answer_hi": "हार्डवेयर और सॉफ़्टवेयर प्रबंधन",
    "explanation_en": "OS controls and manages system resources.",
    "explanation_hi": "OS सिस्टम संसाधनों को नियंत्रित और प्रबंधित करता है।"
  }
]
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

