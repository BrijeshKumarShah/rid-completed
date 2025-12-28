const questions =[
  {
    "num": 1,
    "question_en": "Which function in Calc counts cells that meet specific criteria?",
    "question_hi": "Calc में कौन सा फ़ंक्शन उन सेलों की गिनती करता है जो विशिष्ट मानदंडों को पूरा करते हैं?",
    "options_en": ["COUNTIF", "COUNT", "COUNTA", "COUNTBLANK"],
    "options_hi": ["COUNTIF", "COUNT", "COUNTA", "COUNTBLANK"],
    "answer_en": "COUNTIF",
    "answer_hi": "COUNTIF",
    "explanation_en": "COUNTIF counts the number of cells within a range that meet a single condition.",
    "explanation_hi": "COUNTIF एक श्रृंखला के भीतर उन सेलों की संख्या गिनता है जो एक शर्त को पूरा करते हैं।"
  },
  {
    "num": 2,
    "question_en": "What is the shortcut to minimize all windows in Windows?",
    "question_hi": "Windows में सभी विंडोज को छोटा करने की शॉर्टकट क्या है?",
    "options_en": ["Win + D", "Win + M", "Alt + F4", "Ctrl + M"],
    "options_hi": ["Win + D", "Win + M", "Alt + F4", "Ctrl + M"],
    "answer_en": "Win + D",
    "answer_hi": "Win + D",
    "explanation_en": "Win + D shows the desktop by minimizing all open windows.",
    "explanation_hi": "Win + D सभी खुली विंडोज को छोटा करके डेस्कटॉप दिखाता है।"
  },
  {
    "num": 3,
    "question_en": "Which chart type uses vertical bars to compare values?",
    "question_hi": "कौन सा चार्ट प्रकार मानों की तुलना करने के लिए ऊर्ध्वाधर बार का उपयोग करता है?",
    "options_en": ["Column Chart", "Bar Chart", "Line Chart", "Area Chart"],
    "options_hi": ["कॉलम चार्ट", "बार चार्ट", "लाइन चार्ट", "एरिया चार्ट"],
    "answer_en": "Column Chart",
    "answer_hi": "कॉलम चार्ट",
    "explanation_en": "Column charts use vertical bars to compare values across different categories.",
    "explanation_hi": "कॉलम चार्ट विभिन्न श्रेणियों में मानों की तुलना करने के लिए ऊर्ध्वाधर बार का उपयोग करते हैं।"
  },
  {
    "num": 4,
    "question_en": "What is the function of CU in CPU?",
    "question_hi": "CPU में CU का क्या कार्य है?",
    "options_en": ["Controls operations", "Performs calculations", "Stores data", "Displays output"],
    "options_hi": ["संचालन नियंत्रित करता है", "गणना करता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है"],
    "answer_en": "Controls operations",
    "answer_hi": "संचालन नियंत्रित करता है",
    "explanation_en": "CU (Control Unit) directs the operation of the processor and coordinates other components.",
    "explanation_hi": "CU (कंट्रोल यूनिट) प्रोसेसर के संचालन को निर्देशित करता है और अन्य घटकों का समन्वय करता है।"
  },
  {
    "num": 5,
    "question_en": "Which device connects multiple computers in a network?",
    "question_hi": "कौन सा उपकरण नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
    "options_en": ["Switch", "Modem", "Router", "Hub"],
    "options_hi": ["स्विच", "मॉडेम", "राउटर", "हब"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "explanation_en": "Switch connects multiple devices on a computer network and forwards data to specific devices.",
    "explanation_hi": "स्विच कंप्यूटर नेटवर्क पर कई उपकरणों को जोड़ता है और विशिष्ट उपकरणों को डेटा फॉरवर्ड करता है।"
  },
  {
    "num": 6,
    "question_en": "What does IP stand for in networking?",
    "question_hi": "नेटवर्किंग में IP का पूर्ण रूप क्या है?",
    "options_en": ["Internet Protocol", "Internet Provider", "Internet Port", "Internet Path"],
    "options_hi": ["इंटरनेट प्रोटोकॉल", "इंटरनेट प्रोवाइडर", "इंटरनेट पोर्ट", "इंटरनेट पथ"],
    "answer_en": "Internet Protocol",
    "answer_hi": "इंटरनेट प्रोटोकॉल",
    "explanation_en": "IP is the principal communications protocol for relaying datagrams across network boundaries.",
    "explanation_hi": "IP नेटवर्क सीमाओं के पार डेटाग्राम रिले करने के लिए प्रमुख संचार प्रोटोकॉल है।"
  },
  {
    "num": 7,
    "question_en": "What is the full form of MP3?",
    "question_hi": "MP3 का पूर्ण रूप क्या है?",
    "options_en": ["MPEG Audio Layer-3", "Music Player 3", "Media Player 3", "MPEG Player 3"],
    "options_hi": ["MPEG ऑडियो लेयर-3", "म्यूजिक प्लेयर 3", "मीडिया प्लेयर 3", "MPEG प्लेयर 3"],
    "answer_en": "MPEG Audio Layer-3",
    "answer_hi": "MPEG ऑडियो लेयर-3",
    "explanation_en": "MP3 is an audio coding format for digital audio that uses lossy data compression.",
    "explanation_hi": "MP3 डिजिटल ऑडियो के लिए एक ऑडियो कोडिंग प्रारूप है जो हानिपूर्ण डेटा संपीड़न का उपयोग करता है।"
  },
  {
    "num": 8,
    "question_en": "What feature in Writer checks spelling and grammar?",
    "question_hi": "Writer में कौन सी सुविधा वर्तनी और व्याकरण की जाँच करती है?",
    "options_en": ["Spell Check", "Word Count", "Thesaurus", "AutoCorrect"],
    "options_hi": ["स्पेल चेक", "वर्ड काउंट", "थिसॉरस", "ऑटोकरेक्ट"],
    "answer_en": "Spell Check",
    "answer_hi": "स्पेल चेक",
    "explanation_en": "Spell Check identifies and corrects spelling errors in a document.",
    "explanation_hi": "स्पेल चेक दस्तावेज़ में वर्तनी त्रुटियों की पहचान करता है और सही करता है।"
  },
  {
    "num": 9,
    "question_en": "Which protocol is used for file sharing between computers?",
    "question_hi": "कंप्यूटरों के बीच फ़ाइल साझाकरण के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["FTP", "HTTP", "SMTP", "POP3"],
    "options_hi": ["FTP", "HTTP", "SMTP", "POP3"],
    "answer_en": "FTP",
    "answer_hi": "FTP",
    "explanation_en": "FTP (File Transfer Protocol) is used to transfer files between computers on a network.",
    "explanation_hi": "FTP (फाइल ट्रांसफर प्रोटोकॉल) का उपयोग नेटवर्क पर कंप्यूटरों के बीच फ़ाइलों को स्थानांतरित करने के लिए किया जाता है।"
  },
  {
    "num": 10,
    "question_en": "What is the shortcut for selecting text from cursor to beginning of line?",
    "question_hi": "कर्सर से लाइन की शुरुआत तक टेक्स्ट चुनने की शॉर्टकट क्या है?",
    "options_en": ["Shift + Home", "Shift + End", "Ctrl + Home", "Ctrl + End"],
    "options_hi": ["Shift + Home", "Shift + End", "Ctrl + Home", "Ctrl + End"],
    "answer_en": "Shift + Home",
    "answer_hi": "Shift + Home",
    "explanation_en": "Shift + Home selects all text from cursor position to beginning of the line.",
    "explanation_hi": "Shift + Home कर्सर स्थिति से लाइन की शुरुआत तक सभी टेक्स्ट चुनता है।"
  },
  {
    "num": 11,
    "question_en": "What is the function of Recycle Bin in Windows?",
    "question_hi": "Windows में रीसाइकिल बिन का क्या कार्य है?",
    "options_en": ["Temporarily stores deleted files", "Compresses files", "Scans for viruses", "Backs up files"],
    "options_hi": ["हटाई गई फ़ाइलों को अस्थायी रूप से संग्रहीत करता है", "फ़ाइलों को संपीड़ित करता है", "वायरस के लिए स्कैन करता है", "फ़ाइलों का बैकअप लेता है"],
    "answer_en": "Temporarily stores deleted files",
    "answer_hi": "हटाई गई फ़ाइलों को अस्थायी रूप से संग्रहीत करता है",
    "explanation_en": "Recycle Bin holds deleted files until they are permanently removed or restored.",
    "explanation_hi": "रीसाइकिल बिन हटाई गई फ़ाइलों को तब तक रखता है जब तक कि उन्हें स्थायी रूप से हटाया या पुनर्स्थापित नहीं किया जाता।"
  },
  {
    "num": 12,
    "question_en": "What is the secondary storage device in a computer?",
    "question_hi": "कंप्यूटर में द्वितीयक संग्रहण उपकरण क्या है?",
    "options_en": ["Hard Disk", "RAM", "Cache", "Registers"],
    "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
    "answer_en": "Hard Disk",
    "answer_hi": "हार्ड डिस्क",
    "explanation_en": "Hard Disk provides permanent storage for data, programs, and operating system.",
    "explanation_hi": "हार्ड डिस्क डेटा, प्रोग्राम और ऑपरेटिंग सिस्टम के लिए स्थायी संग्रहण प्रदान करती है।"
  },
  {
    "num": 13,
    "question_en": "Which software is used for creating vector graphics?",
    "question_hi": "वेक्टर ग्राफिक्स बनाने के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Draw", "Impress", "Writer", "Calc"],
    "options_hi": ["ड्रॉ", "इम्प्रेस", "राइटर", "कैल्क"],
    "answer_en": "Draw",
    "answer_hi": "ड्रॉ",
    "explanation_en": "Draw is the vector graphics editor component of LibreOffice suite.",
    "explanation_hi": "ड्रॉ LibreOffice सुइट का वेक्टर ग्राफिक्स एडिटर घटक है।"
  },
  {
    "num": 14,
    "question_en": "What is the shortcut for moving cursor to beginning of document?",
    "question_hi": "कर्सर को दस्तावेज़ की शुरुआत में ले जाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Home", "Home", "Ctrl + Up Arrow", "Page Up"],
    "options_hi": ["Ctrl + Home", "Home", "Ctrl + Up Arrow", "Page Up"],
    "answer_en": "Ctrl + Home",
    "answer_hi": "Ctrl + Home",
    "explanation_en": "Ctrl + Home moves cursor to the beginning of the document.",
    "explanation_hi": "Ctrl + Home कर्सर को दस्तावेज़ की शुरुआत में ले जाता है।"
  },
  {
    "num": 15,
    "question_en": "What does HTML use to define structure of web pages?",
    "question_hi": "HTML वेब पेजों की संरचना को परिभाषित करने के लिए क्या उपयोग करता है?",
    "options_en": ["Tags", "Functions", "Commands", "Scripts"],
    "options_hi": ["टैग", "फ़ंक्शन", "कमांड", "स्क्रिप्ट"],
    "answer_en": "Tags",
    "answer_hi": "टैग",
    "explanation_en": "HTML uses tags (like <p>, <h1>, <div>) to define elements and structure of web pages.",
    "explanation_hi": "HTML वेब पेजों के तत्वों और संरचना को परिभाषित करने के लिए टैग (जैसे <p>, <h1>, <div>) का उपयोग करता है।"
  },
  {
    "num": 16,
    "question_en": "What is the unit of memory equal to 1024 kilobytes?",
    "question_hi": "मेमोरी की वह इकाई क्या है जो 1024 किलोबाइट के बराबर होती है?",
    "options_en": ["Megabyte", "Gigabyte", "Terabyte", "Petabyte"],
    "options_hi": ["मेगाबाइट", "गीगाबाइट", "टेराबाइट", "पेटाबाइट"],
    "answer_en": "Megabyte",
    "answer_hi": "मेगाबाइट",
    "explanation_en": "1 Megabyte (MB) = 1024 Kilobytes (KB) in binary system.",
    "explanation_hi": "बाइनरी सिस्टम में 1 मेगाबाइट (MB) = 1024 किलोबाइट (KB)।"
  },
  {
    "num": 17,
    "question_en": "What does 'https://' indicate in a URL?",
    "question_hi": "URL में 'https://' क्या इंगित करता है?",
    "options_en": ["Secure connection", "File transfer", "Email protocol", "Local file"],
    "options_hi": ["सुरक्षित कनेक्शन", "फ़ाइल स्थानांतरण", "ईमेल प्रोटोकॉल", "स्थानीय फ़ाइल"],
    "answer_en": "Secure connection",
    "answer_hi": "सुरक्षित कनेक्शन",
    "explanation_en": "https:// indicates that the website uses SSL/TLS encryption for secure communication.",
    "explanation_hi": "https:// इंगित करता है कि वेबसाइट सुरक्षित संचार के लिए SSL/TLS एन्क्रिप्शन का उपयोग करती है।"
  },
  {
    "num": 18,
    "question_en": "Which key combination opens the Run dialog in Windows?",
    "question_hi": "Windows में रन डायलॉग खोलने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
    "options_en": ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "options_hi": ["Win + R", "Ctrl + R", "Alt + R", "Shift + R"],
    "answer_en": "Win + R",
    "answer_hi": "Win + R",
    "explanation_en": "Win + R opens the Run dialog box for quickly launching programs and commands.",
    "explanation_hi": "Win + R प्रोग्राम और कमांड जल्दी लॉन्च करने के लिए रन डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 19,
    "question_en": "What is the shortcut for centering text?",
    "question_hi": "टेक्स्ट को केंद्र में करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
    "options_hi": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
    "answer_en": "Ctrl + E",
    "answer_hi": "Ctrl + E",
    "explanation_en": "Ctrl + E centers the selected text or paragraph.",
    "explanation_hi": "Ctrl + E चयनित टेक्स्ट या पैराग्राफ को केंद्र में करता है।"
  },
  {
    "num": 20,
    "question_en": "Which function returns the total number of characters in a text string?",
    "question_hi": "कौन सा फ़ंक्शन टेक्स्ट स्ट्रिंग में वर्णों की कुल संख्या लौटाता है?",
    "options_en": ["LEN", "COUNT", "SUM", "TEXT"],
    "options_hi": ["LEN", "COUNT", "SUM", "TEXT"],
    "answer_en": "LEN",
    "answer_hi": "LEN",
    "explanation_en": "LEN function returns the number of characters in a text string.",
    "explanation_hi": "LEN फ़ंक्शन टेक्स्ट स्ट्रिंग में वर्णों की संख्या लौटाता है।"
  },
  {
    "num": 21,
    "question_en": "What is the shortcut for applying double underline?",
    "question_hi": "डबल अंडरलाइन लागू करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + U twice", "Alt + U"],
    "options_hi": ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + U दो बार", "Alt + U"],
    "answer_en": "Ctrl + Shift + D",
    "answer_hi": "Ctrl + Shift + D",
    "explanation_en": "Ctrl + Shift + D applies double underline formatting to selected text.",
    "explanation_hi": "Ctrl + Shift + D चयनित टेक्स्ट पर डबल अंडरलाइन फ़ॉर्मेटिंग लागू करता है।"
  },
  {
    "num": 22,
    "question_en": "What is the purpose of BCC in email?",
    "question_hi": "ईमेल में BCC का उद्देश्य क्या है?",
    "options_en": ["To send blind copies", "To mark as important", "To schedule sending", "To request read receipt"],
    "options_hi": ["ब्लाइंड कॉपी भेजने के लिए", "महत्वपूर्ण के रूप में चिह्नित करने के लिए", "भेजने का समय निर्धारित करने के लिए", "रीड रसीद का अनुरोध करने के लिए"],
    "answer_en": "To send blind copies",
    "answer_hi": "ब्लाइंड कॉपी भेजने के लिए",
    "explanation_en": "BCC (Blind Carbon Copy) sends a copy without other recipients seeing who else received it.",
    "explanation_hi": "BCC (ब्लाइंड कार्बन कॉपी) एक कॉपी भेजता है बिना अन्य प्राप्तकर्ताओं को यह देखे कि और किसने इसे प्राप्त किया।"
  },
  {
    "num": 23,
    "question_en": "What is the full form of BIOS?",
    "question_hi": "BIOS का पूर्ण रूप क्या है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS initializes and tests system hardware components during startup.",
    "explanation_hi": "BIOS स्टार्टअप के दौरान सिस्टम हार्डवेयर घटकों को प्रारंभ और परीक्षण करता है।"
  },
  {
    "num": 24,
    "question_en": "Which device is used to point and click on screen elements?",
    "question_hi": "स्क्रीन तत्वों पर इशारा करने और क्लिक करने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Mouse", "Keyboard", "Joystick", "Trackpad"],
    "options_hi": ["माउस", "कीबोर्ड", "जॉयस्टिक", "ट्रैकपैड"],
    "answer_en": "Mouse",
    "answer_hi": "माउस",
    "explanation_en": "Mouse is a pointing device used to interact with graphical user interfaces.",
    "explanation_hi": "माउस एक पॉइंटिंग डिवाइस है जिसका उपयोग ग्राफिकल यूज़र इंटरफेस के साथ इंटरैक्ट करने के लिए किया जाता है।"
  },
  {
    "num": 25,
    "question_en": "What is the shortcut for opening Windows Explorer/File Explorer?",
    "question_hi": "Windows Explorer/File Explorer खोलने की शॉर्टकट क्या है?",
    "options_en": ["Win + E", "Win + F", "Ctrl + E", "Alt + E"],
    "options_hi": ["Win + E", "Win + F", "Ctrl + E", "Alt + E"],
    "answer_en": "Win + E",
    "answer_hi": "Win + E",
    "explanation_en": "Win + E opens File Explorer (Windows Explorer) for browsing files and folders.",
    "explanation_hi": "Win + E फ़ाइलें और फ़ोल्डर ब्राउज़ करने के लिए फ़ाइल एक्सप्लोरर (Windows Explorer) खोलता है।"
  },
  {
    "num": 26,
    "question_en": "What type of memory is cache?",
    "question_hi": "कैश किस प्रकार की मेमोरी है?",
    "options_en": ["High-speed volatile memory", "Permanent storage", "External storage", "Read-only memory"],
    "options_hi": ["उच्च-गति अस्थिर मेमोरी", "स्थायी संग्रहण", "बाह्य संग्रहण", "रीड-ओनली मेमोरी"],
    "answer_en": "High-speed volatile memory",
    "answer_hi": "उच्च-गति अस्थिर मेमोरी",
    "explanation_en": "Cache is high-speed volatile memory that stores frequently accessed data for quick retrieval.",
    "explanation_hi": "कैश उच्च-गति अस्थिर मेमोरी है जो त्वरित पुनर्प्राप्ति के लिए अक्सर एक्सेस किए गए डेटा को संग्रहीत करती है।"
  },
  {
    "num": 27,
    "question_en": "Which software is used for mathematical calculations and data analysis?",
    "question_hi": "गणितीय गणना और डेटा विश्लेषण के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Calc", "Writer", "Impress", "Math"],
    "options_hi": ["कैल्क", "राइटर", "इम्प्रेस", "मैथ"],
    "answer_en": "Calc",
    "answer_hi": "कैल्क",
    "explanation_en": "Calc is spreadsheet software used for calculations, data analysis, and chart creation.",
    "explanation_hi": "कैल्क स्प्रेडशीट सॉफ़्टवेयर है जिसका उपयोग गणना, डेटा विश्लेषण और चार्ट निर्माण के लिए किया जाता है।"
  },
  {
    "num": 28,
    "question_en": "What is the shortcut for changing font size?",
    "question_hi": "फ़ॉन्ट आकार बदलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + > or <", "Ctrl + + or -", "Alt + F", "Ctrl + F"],
    "options_hi": ["Ctrl + Shift + > या <", "Ctrl + + या -", "Alt + F", "Ctrl + F"],
    "answer_en": "Ctrl + Shift + > or <",
    "answer_hi": "Ctrl + Shift + > या <",
    "explanation_en": "Ctrl + Shift + > increases font size, Ctrl + Shift + < decreases font size.",
    "explanation_hi": "Ctrl + Shift + > फ़ॉन्ट आकार बढ़ाता है, Ctrl + Shift + < फ़ॉन्ट आकार घटाता है।"
  },
  {
    "num": 29,
    "question_en": "What is the purpose of motherboard in a computer?",
    "question_hi": "कंप्यूटर में मदरबोर्ड का उद्देश्य क्या है?",
    "options_en": ["Connects all components", "Processes data", "Stores data", "Displays output"],
    "options_hi": ["सभी घटकों को जोड़ता है", "डेटा संसाधित करता है", "डेटा संग्रहीत करता है", "आउटपुट प्रदर्शित करता है"],
    "answer_en": "Connects all components",
    "answer_hi": "सभी घटकों को जोड़ता है",
    "explanation_en": "Motherboard is the main circuit board that connects all components of a computer system.",
    "explanation_hi": "मदरबोर्ड मुख्य सर्किट बोर्ड है जो कंप्यूटर सिस्टम के सभी घटकों को जोड़ता है।"
  },
  {
    "num": 30,
    "question_en": "What is the main advantage of presentation software?",
    "question_hi": "प्रेजेंटेशन सॉफ़्टवेयर का मुख्य लाभ क्या है?",
    "options_en": ["Visual communication", "Mathematical calculations", "Text editing", "Database management"],
    "options_hi": ["दृश्य संचार", "गणितीय गणना", "टेक्स्ट संपादन", "डेटाबेस प्रबंधन"],
    "answer_en": "Visual communication",
    "answer_hi": "दृश्य संचार",
    "explanation_en": "Presentation software helps create visual aids to support oral presentations and communicate ideas effectively.",
    "explanation_hi": "प्रेजेंटेशन सॉफ़्टवेयर मौखिक प्रस्तुतियों का समर्थन करने और विचारों को प्रभावी ढंग से संप्रेषित करने के लिए दृश्य सहायता बनाने में मदद करता है।"
  },
  {
    "num": 31,
    "question_en": "What is the shortcut for inserting hyperlink?",
    "question_hi": "हाइपरलिंक डालने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + I"],
    "options_hi": ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + I"],
    "answer_en": "Ctrl + K",
    "answer_hi": "Ctrl + K",
    "explanation_en": "Ctrl + K opens the Insert Hyperlink dialog box.",
    "explanation_hi": "Ctrl + K इन्सर्ट हाइपरलिंक डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 32,
    "question_en": "What does SMTP stand for?",
    "question_hi": "SMTP का पूर्ण रूप क्या है?",
    "options_en": ["Simple Mail Transfer Protocol", "Simple Message Transfer Protocol", "System Mail Transfer Protocol", "System Message Transfer Protocol"],
    "options_hi": ["सिंपल मेल ट्रांसफर प्रोटोकॉल", "सिंपल मैसेज ट्रांसफर प्रोटोकॉल", "सिस्टम मेल ट्रांसफर प्रोटोकॉल", "सिस्टम मैसेज ट्रांसफर प्रोटोकॉल"],
    "answer_en": "Simple Mail Transfer Protocol",
    "answer_hi": "सिंपल मेल ट्रांसफर प्रोटोकॉल",
    "explanation_en": "SMTP is used for sending emails from a client to a server or between servers.",
    "explanation_hi": "SMTP का उपयोग क्लाइंट से सर्वर या सर्वर के बीच ईमेल भेजने के लिए किया जाता है।"
  },
  {
    "num": 33,
    "question_en": "Which key moves cursor one word to the left?",
    "question_hi": "कौन सी कुंजी कर्सर को एक शब्द बाईं ओर ले जाती है?",
    "options_en": ["Ctrl + Left Arrow", "Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    "options_hi": ["Ctrl + Left Arrow", "Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    "answer_en": "Ctrl + Left Arrow",
    "answer_hi": "Ctrl + Left Arrow",
    "explanation_en": "Ctrl + Left Arrow moves cursor one word to the left.",
    "explanation_hi": "Ctrl + Left Arrow कर्सर को एक शब्द बाईं ओर ले जाती है।"
  },
  {
    "num": 34,
    "question_en": "What is the shortcut for saving a file?",
    "question_hi": "फ़ाइल सहेजने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + S",
    "answer_hi": "Ctrl + S",
    "explanation_en": "Ctrl + S saves the current document or file.",
    "explanation_hi": "Ctrl + S वर्तमान दस्तावेज़ या फ़ाइल सहेजता है।"
  },
  {
    "num": 35,
    "question_en": "What does ICT enable in education?",
    "question_hi": "शिक्षा में ICT क्या सक्षम बनाता है?",
    "options_en": ["Digital learning", "Traditional teaching only", "Manual record keeping", "Paper-based exams"],
    "options_hi": ["डिजिटल लर्निंग", "केवल पारंपरिक शिक्षण", "मैन्युअल रिकॉर्ड रखरखाव", "कागज-आधारित परीक्षा"],
    "answer_en": "Digital learning",
    "answer_hi": "डिजिटल लर्निंग",
    "explanation_en": "ICT enables digital learning through computers, internet, and multimedia resources.",
    "explanation_hi": "ICT कंप्यूटर, इंटरनेट और मल्टीमीडिया संसाधनों के माध्यम से डिजिटल लर्निंग सक्षम बनाता है।"
  },
  {
    "num": 36,
    "question_en": "What is the shortcut for creating a new folder?",
    "question_hi": "नया फ़ोल्डर बनाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Shift + N"],
    "options_hi": ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Shift + N"],
    "answer_en": "Ctrl + Shift + N",
    "answer_hi": "Ctrl + Shift + N",
    "explanation_en": "Ctrl + Shift + N creates a new folder in Windows File Explorer.",
    "explanation_hi": "Ctrl + Shift + N Windows फ़ाइल एक्सप्लोरर में एक नया फ़ोल्डर बनाता है।"
  },
  {
    "num": 37,
    "question_en": "What does Bluetooth technology enable?",
    "question_hi": "ब्लूटूथ तकनीक क्या सक्षम बनाती है?",
    "options_en": ["Wireless short-range communication", "Internet access", "Wired networking", "Satellite communication"],
    "options_hi": ["वायरलेस लघु-सीमा संचार", "इंटरनेट पहुँच", "वायर्ड नेटवर्किंग", "सैटेलाइट संचार"],
    "answer_en": "Wireless short-range communication",
    "answer_hi": "वायरलेस लघु-सीमा संचार",
    "explanation_en": "Bluetooth enables wireless communication between devices over short distances (typically up to 10 meters).",
    "explanation_hi": "ब्लूटूथ लघु दूरी (आमतौर पर 10 मीटर तक) पर उपकरणों के बीच वायरलेस संचार सक्षम बनाता है।"
  },
  {
    "num": 38,
    "question_en": "Which function key is used for full-screen mode in browsers?",
    "question_hi": "ब्राउज़र में पूर्ण स्क्रीन मोड के लिए किस फ़ंक्शन कुंजी का उपयोग किया जाता है?",
    "options_en": ["F11", "F5", "F1", "F12"],
    "options_hi": ["F11", "F5", "F1", "F12"],
    "answer_en": "F11",
    "answer_hi": "F11",
    "explanation_en": "F11 toggles full-screen mode in most web browsers.",
    "explanation_hi": "F11 अधिकांश वेब ब्राउज़र में पूर्ण स्क्रीन मोड टॉगल करता है।"
  },
  {
    "num": 39,
    "question_en": "What is the shortcut for closing a tab in browser?",
    "question_hi": "ब्राउज़र में टैब बंद करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + W", "Ctrl + F4", "Both", "Ctrl + Q"],
    "options_hi": ["Ctrl + W", "Ctrl + F4", "दोनों", "Ctrl + Q"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Both Ctrl+W and Ctrl+F4 close the current tab in most web browsers.",
    "explanation_hi": "Ctrl+W और Ctrl+F4 दोनों अधिकांश वेब ब्राउज़र में वर्तमान टैब बंद करते हैं।"
  },
  {
    "num": 40,
    "question_en": "What does LED stand for in LED monitor?",
    "question_hi": "LED मॉनिटर में LED का पूर्ण रूप क्या है?",
    "options_en": ["Light Emitting Diode", "Light Emitting Display", "Liquid Emitting Diode", "Liquid Emitting Display"],
    "options_hi": ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिस्प्ले", "लिक्विड एमिटिंग डायोड", "लिक्विड एमिटिंग डिस्प्ले"],
    "answer_en": "Light Emitting Diode",
    "answer_hi": "लाइट एमिटिंग डायोड",
    "explanation_en": "LED monitors use Light Emitting Diodes for backlighting, making them more energy-efficient.",
    "explanation_hi": "LED मॉनिटर बैकलाइटिंग के लिए लाइट एमिटिंग डायोड का उपयोग करते हैं, जिससे वे अधिक ऊर्जा-कुशल होते हैं।"
  },
  {
    "num": 41,
    "question_en": "Which function extracts a specified number of characters from text?",
    "question_hi": "कौन सा फ़ंक्शन टेक्स्ट से निर्दिष्ट संख्या में वर्ण निकालता है?",
    "options_en": ["LEFT, RIGHT, MID", "EXTRACT", "TAKE", "SUBSTRING"],
    "options_hi": ["LEFT, RIGHT, MID", "EXTRACT", "TAKE", "SUBSTRING"],
    "answer_en": "LEFT, RIGHT, MID",
    "answer_hi": "LEFT, RIGHT, MID",
    "explanation_en": "LEFT, RIGHT, and MID functions extract specified number of characters from text strings.",
    "explanation_hi": "LEFT, RIGHT और MID फ़ंक्शन टेक्स्ट स्ट्रिंग से निर्दिष्ट संख्या में वर्ण निकालते हैं।"
  },
  {
    "num": 42,
    "question_en": "What is the shortcut for opening new tab in browser?",
    "question_hi": "ब्राउज़र में नया टैब खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Tab"],
    "options_hi": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Tab"],
    "answer_en": "Ctrl + T",
    "answer_hi": "Ctrl + T",
    "explanation_en": "Ctrl + T opens a new tab in most web browsers.",
    "explanation_hi": "Ctrl + T अधिकांश वेब ब्राउज़र में एक नया टैब खोलता है।"
  },
  {
    "num": 43,
    "question_en": "What does DBMS stand for?",
    "question_hi": "DBMS का पूर्ण रूप क्या है?",
    "options_en": ["Database Management System", "Data Base Management System", "Database Manipulation System", "Data Base Manipulation System"],
    "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "डेटा बेस मैनेजमेंट सिस्टम", "डेटाबेस मैनिपुलेशन सिस्टम", "डेटा बेस मैनिपुलेशन सिस्टम"],
    "answer_en": "Database Management System",
    "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
    "explanation_en": "DBMS is software for creating, managing, and manipulating databases.",
    "explanation_hi": "DBMS डेटाबेस बनाने, प्रबंधित करने और हेरफेर करने के लिए सॉफ़्टवेयर है।"
  },
  {
    "num": 44,
    "question_en": "What is the shortcut for opening recently closed tab in browser?",
    "question_hi": "ब्राउज़र में हाल ही में बंद टैब खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + R", "Alt + T"],
    "options_hi": ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + R", "Alt + T"],
    "answer_en": "Ctrl + Shift + T",
    "answer_hi": "Ctrl + Shift + T",
    "explanation_en": "Ctrl + Shift + T reopens the most recently closed tab in most web browsers.",
    "explanation_hi": "Ctrl + Shift + T अधिकांश वेब ब्राउज़र में सबसे हाल ही में बंद टैब को फिर से खोलता है।"
  },
  {
    "num": 45,
    "question_en": "What does SQL stand for in databases?",
    "question_hi": "डेटाबेस में SQL का पूर्ण रूप क्या है?",
    "options_en": ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Question Language"],
    "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
    "answer_en": "Structured Query Language",
    "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
    "explanation_en": "SQL is a domain-specific language used for managing and querying relational databases.",
    "explanation_hi": "SQL एक डोमेन-विशिष्ट भाषा है जिसका उपयोग रिलेशनल डेटाबेस को प्रबंधित करने और क्वेरी करने के लिए किया जाता है।"
  },
  {
    "num": 46,
    "question_en": "What is the shortcut for switching between tabs in browser?",
    "question_hi": "ब्राउज़र में टैब के बीच स्विच करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Tab", "Alt + Tab", "Ctrl + T", "Ctrl + Shift + Tab"],
    "options_hi": ["Ctrl + Tab", "Alt + Tab", "Ctrl + T", "Ctrl + Shift + Tab"],
    "answer_en": "Ctrl + Tab",
    "answer_hi": "Ctrl + Tab",
    "explanation_en": "Ctrl + Tab moves to the next tab, Ctrl + Shift + Tab moves to the previous tab.",
    "explanation_hi": "Ctrl + Tab अगले टैब पर जाता है, Ctrl + Shift + Tab पिछले टैब पर जाता है।"
  },
  {
    "num": 47,
    "question_en": "What does USB Type-C refer to?",
    "question_hi": "USB Type-C क्या दर्शाता है?",
    "options_en": ["Reversible USB connector", "Faster USB version", "Wireless USB", "USB for charging only"],
    "options_hi": ["उत्क्रमणीय USB कनेक्टर", "तेज़ USB संस्करण", "वायरलेस USB", "केवल चार्जिंग के लिए USB"],
    "answer_en": "Reversible USB connector",
    "answer_hi": "उत्क्रमणीय USB कनेक्टर",
    "explanation_en": "USB Type-C connector is reversible (can be inserted either way) and supports faster data transfer.",
    "explanation_hi": "USB Type-C कनेक्टर उत्क्रमणीय है (किसी भी तरफ डाला जा सकता है) और तेज़ डेटा ट्रांसफर का समर्थन करता है।"
  },
  {
    "num": 48,
    "question_en": "What is the shortcut for bookmarking a webpage?",
    "question_hi": "वेबपेज बुकमार्क करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + D", "Ctrl + B", "Ctrl + M", "Ctrl + K"],
    "options_hi": ["Ctrl + D", "Ctrl + B", "Ctrl + M", "Ctrl + K"],
    "answer_en": "Ctrl + D",
    "answer_hi": "Ctrl + D",
    "explanation_en": "Ctrl + D bookmarks the current webpage in most browsers.",
    "explanation_hi": "Ctrl + D अधिकांश ब्राउज़र में वर्तमान वेबपेज को बुकमार्क करता है।"
  },
  {
    "num": 49,
    "question_en": "What does HDMI stand for?",
    "question_hi": "HDMI का पूर्ण रूप क्या है?",
    "options_en": ["High Definition Multimedia Interface", "High Digital Multimedia Interface", "High Definition Media Interface", "High Digital Media Interface"],
    "options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डिजिटल मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डिजिटल मीडिया इंटरफेस"],
    "answer_en": "High Definition Multimedia Interface",
    "answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
    "explanation_en": "HDMI is a digital interface for transmitting audio and video data.",
    "explanation_hi": "HDMI ऑडियो और वीडियो डेटा प्रसारित करने के लिए एक डिजिटल इंटरफेस है।"
  },
  {
    "num": 50,
    "question_en": "What is the shortcut for opening browser's address bar?",
    "question_hi": "ब्राउज़र का एड्रेस बार खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + L", "F6", "Alt + D", "All of these"],
    "options_hi": ["Ctrl + L", "F6", "Alt + D", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "explanation_en": "Ctrl + L, F6, and Alt + D all focus on the browser's address bar in most web browsers.",
    "explanation_hi": "Ctrl + L, F6 और Alt + D सभी अधिकांश वेब ब्राउज़र में ब्राउज़र के एड्रेस बार पर फोकस करते हैं।"
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

