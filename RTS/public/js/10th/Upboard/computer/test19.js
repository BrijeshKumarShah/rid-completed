const questions =[
  {
    "num": 1,
    "question_en": "Which function in Calc counts cells that meet multiple criteria?",
    "question_hi": "Calc में कौन सा फ़ंक्शन उन सेलों की गिनती करता है जो कई मानदंडों को पूरा करते हैं?",
    "options_en": ["COUNTIFS", "COUNTIF", "COUNT", "COUNTA"],
    "options_hi": ["COUNTIFS", "COUNTIF", "COUNT", "COUNTA"],
    "answer_en": "COUNTIFS",
    "answer_hi": "COUNTIFS",
    "explanation_en": "COUNTIFS counts cells that meet multiple specified conditions or criteria across different ranges.",
    "explanation_hi": "COUNTIFS विभिन्न श्रृंखलाओं में कई निर्दिष्ट शर्तों या मानदंडों को पूरा करने वाले सेलों की गिनती करता है।"
  },
  {
    "num": 2,
    "question_en": "What is the shortcut to open Windows Task Manager directly?",
    "question_hi": "Windows टास्क मैनेजर सीधे खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Win + X"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Win + X"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc",
    "explanation_en": "Ctrl + Shift + Esc opens Task Manager directly without showing the security screen.",
    "explanation_hi": "Ctrl + Shift + Esc सुरक्षा स्क्रीन दिखाए बिना सीधे टास्क मैनेजर खोलता है।"
  },
  {
    "num": 3,
    "question_en": "Which chart type uses horizontal bars to compare values?",
    "question_hi": "कौन सा चार्ट प्रकार मानों की तुलना करने के लिए क्षैतिज बार का उपयोग करता है?",
    "options_en": ["Bar Chart", "Column Chart", "Line Chart", "Area Chart"],
    "options_hi": ["बार चार्ट", "कॉलम चार्ट", "लाइन चार्ट", "एरिया चार्ट"],
    "answer_en": "Bar Chart",
    "answer_hi": "बार चार्ट",
    "explanation_en": "Bar charts use horizontal bars to compare values across different categories, with categories on vertical axis.",
    "explanation_hi": "बार चार्ट विभिन्न श्रेणियों में मानों की तुलना करने के लिए क्षैतिज बार का उपयोग करते हैं, जिसमें श्रेणियाँ ऊर्ध्वाधर अक्ष पर होती हैं।"
  },
  {
    "num": 4,
    "question_en": "What is the function of Southbridge chip on a motherboard?",
    "question_hi": "मदरबोर्ड पर साउथब्रिज चिप का क्या कार्य है?",
    "options_en": ["Manages I/O functions and peripherals", "Connects CPU to RAM", "Handles graphics processing", "Controls power supply"],
    "options_hi": ["I/O कार्य और परिधीय उपकरण प्रबंधित करता है", "CPU को RAM से जोड़ता है", "ग्राफिक्स प्रसंस्करण संभालता है", "बिजली आपूर्ति नियंत्रित करता है"],
    "answer_en": "Manages I/O functions and peripherals",
    "answer_hi": "I/O कार्य और परिधीय उपकरण प्रबंधित करता है",
    "explanation_en": "Southbridge handles slower I/O functions like USB, audio, SATA, PCI, and legacy interfaces.",
    "explanation_hi": "साउथब्रिज धीमे I/O कार्यों जैसे USB, ऑडियो, SATA, PCI और लीगेसी इंटरफेस को संभालता है।"
  },
  {
    "num": 5,
    "question_en": "Which device connects two similar network segments?",
    "question_hi": "कौन सा उपकरण दो समान नेटवर्क खंडों को जोड़ता है?",
    "options_en": ["Bridge", "Router", "Gateway", "Repeater"],
    "options_hi": ["ब्रिज", "राउटर", "गेटवे", "रिपीटर"],
    "answer_en": "Bridge",
    "answer_hi": "ब्रिज",
    "explanation_en": "Bridge connects two network segments at the data link layer and filters traffic between them.",
    "explanation_hi": "ब्रिज डेटा लिंक लेयर पर दो नेटवर्क खंडों को जोड़ता है और उनके बीच ट्रैफ़िक फ़िल्टर करता है।"
  },
  {
    "num": 6,
    "question_en": "What does MAC address stand for?",
    "question_hi": "MAC एड्रेस का पूर्ण रूप क्या है?",
    "options_en": ["Media Access Control address", "Media Access Code address", "Machine Access Control address", "Machine Access Code address"],
    "options_hi": ["मीडिया एक्सेस कंट्रोल एड्रेस", "मीडिया एक्सेस कोड एड्रेस", "मशीन एक्सेस कंट्रोल एड्रेस", "मशीन एक्सेस कोड एड्रेस"],
    "answer_en": "Media Access Control address",
    "answer_hi": "मीडिया एक्सेस कंट्रोल एड्रेस",
    "explanation_en": "MAC address is a unique identifier assigned to network interface controllers for communications at data link layer.",
    "explanation_hi": "MAC एड्रेस डेटा लिंक लेयर पर संचार के लिए नेटवर्क इंटरफेस कंट्रोलर को नियत एक अद्वितीय पहचानकर्ता है।"
  },
  {
    "num": 7,
    "question_en": "What is the full form of TIFF?",
    "question_hi": "TIFF का पूर्ण रूप क्या है?",
    "options_en": ["Tagged Image File Format", "Tagged Image Format File", "Tagged Image File Form", "Tagged Image Format Form"],
    "options_hi": ["टैग्ड इमेज फाइल फॉर्मेट", "टैग्ड इमेज फॉर्मेट फाइल", "टैग्ड इमेज फाइल फॉर्म", "टैग्ड इमेज फॉर्मेट फॉर्म"],
    "answer_en": "Tagged Image File Format",
    "answer_hi": "टैग्ड इमेज फाइल फॉर्मेट",
    "explanation_en": "TIFF is a flexible, adaptable file format for storing images, including photographs and line art.",
    "explanation_hi": "TIFF छवियों, जिसमें फोटोग्राफ और लाइन आर्ट शामिल हैं, को संग्रहीत करने के लिए एक लचीला, अनुकूलनीय फ़ाइल प्रारूप है।"
  },
  {
    "num": 8,
    "question_en": "What feature in Writer allows recording and replaying repetitive tasks?",
    "question_hi": "Writer में कौन सी सुविधा दोहराए जाने वाले कार्यों को रिकॉर्ड करने और पुन: चलाने की अनुमति देती है?",
    "options_en": ["Macros", "Templates", "Styles", "AutoText"],
    "options_hi": ["मैक्रो", "टेम्पलेट", "स्टाइल", "ऑटोटेक्स्ट"],
    "answer_en": "Macros",
    "answer_hi": "मैक्रो",
    "explanation_en": "Macros record a series of commands and actions that can be replayed to automate repetitive tasks.",
    "explanation_hi": "मैक्रो कमांड और कार्यों की एक श्रृंखला रिकॉर्ड करते हैं जिन्हें दोहराए जाने वाले कार्यों को स्वचालित करने के लिए पुन: चलाया जा सकता है।"
  },
  {
    "num": 9,
    "question_en": "Which protocol is used for secure remote login to servers?",
    "question_hi": "सर्वरों पर सुरक्षित रिमोट लॉगिन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SSH", "Telnet", "HTTP", "FTP"],
    "options_hi": ["SSH", "टेलनेट", "HTTP", "FTP"],
    "answer_en": "SSH",
    "answer_hi": "SSH",
    "explanation_en": "SSH (Secure Shell) provides secure encrypted communications between two untrusted hosts over an insecure network.",
    "explanation_hi": "SSH (सिक्योर शेल) एक असुरक्षित नेटवर्क पर दो अविश्वसनीय होस्टों के बीच सुरक्षित एन्क्रिप्टेड संचार प्रदान करता है।"
  },
  {
    "num": 10,
    "question_en": "What is the shortcut for selecting text from cursor to end of document?",
    "question_hi": "कर्सर से दस्तावेज़ के अंत तक टेक्स्ट चुनने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + End", "Ctrl + Shift + Home", "Shift + End", "Shift + Home"],
    "options_hi": ["Ctrl + Shift + End", "Ctrl + Shift + Home", "Shift + End", "Shift + Home"],
    "answer_en": "Ctrl + Shift + End",
    "answer_hi": "Ctrl + Shift + End",
    "explanation_en": "Ctrl + Shift + End selects all text from cursor position to end of document.",
    "explanation_hi": "Ctrl + Shift + End कर्सर स्थिति से दस्तावेज़ के अंत तक सभी टेक्स्ट चुनता है।"
  },
  {
    "num": 11,
    "question_en": "What is the function of Control Panel in Windows?",
    "question_hi": "Windows में कंट्रोल पैनल का क्या कार्य है?",
    "options_en": ["System configuration and settings", "File management", "Application launching", "Internet browsing"],
    "options_hi": ["सिस्टम कॉन्फ़िगरेशन और सेटिंग्स", "फ़ाइल प्रबंधन", "एप्लिकेशन लॉन्चिंग", "इंटरनेट ब्राउज़िंग"],
    "answer_en": "System configuration and settings",
    "answer_hi": "सिस्टम कॉन्फ़िगरेशन और सेटिंग्स",
    "explanation_en": "Control Panel provides access to system settings for hardware, software, user accounts, and appearance.",
    "explanation_hi": "कंट्रोल पैनल हार्डवेयर, सॉफ़्टवेयर, उपयोगकर्ता खाते और उपस्थिति के लिए सिस्टम सेटिंग्स तक पहुंच प्रदान करता है।"
  },
  {
    "num": 12,
    "question_en": "What is the purpose of network interface card (NIC) in a computer?",
    "question_hi": "कंप्यूटर में नेटवर्क इंटरफेस कार्ड (NIC) का उद्देश्य क्या है?",
    "options_en": ["Connects computer to network", "Enhances graphics performance", "Increases storage capacity", "Improves audio quality"],
    "options_hi": ["कंप्यूटर को नेटवर्क से जोड़ता है", "ग्राफिक्स प्रदर्शन बढ़ाता है", "संग्रहण क्षमता बढ़ाता है", "ऑडियो गुणवत्ता में सुधार करता है"],
    "answer_en": "Connects computer to network",
    "answer_hi": "कंप्यूटर को नेटवर्क से जोड़ता है",
    "explanation_en": "NIC allows a computer to connect to a network, either wired (Ethernet) or wireless (Wi-Fi).",
    "explanation_hi": "NIC कंप्यूटर को नेटवर्क से जोड़ने की अनुमति देता है, चाहे वह वायर्ड (ईथरनेट) या वायरलेस (वाई-फाई) हो।"
  },
  {
    "num": 13,
    "question_en": "Which software is used for image editing and photo manipulation?",
    "question_hi": "इमेज एडिटिंग और फोटो मैनिपुलेशन के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["GIMP", "Writer", "Calc", "Impress"],
    "options_hi": ["GIMP", "राइटर", "कैल्क", "इम्प्रेस"],
    "answer_en": "GIMP",
    "answer_hi": "GIMP",
    "explanation_en": "GIMP (GNU Image Manipulation Program) is a free, open-source image editor similar to Photoshop.",
    "explanation_hi": "GIMP (GNU इमेज मैनिपुलेशन प्रोग्राम) एक मुफ्त, ओपन-सोर्स इमेज एडिटर है जो फोटोशॉप के समान है।"
  },
  {
    "num": 14,
    "question_en": "What is the shortcut for moving cursor to previous paragraph?",
    "question_hi": "कर्सर को पिछले पैराग्राफ में ले जाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Up Arrow", "Up Arrow", "Page Up", "Ctrl + Page Up"],
    "options_hi": ["Ctrl + Up Arrow", "Up Arrow", "पेज अप", "Ctrl + Page Up"],
    "answer_en": "Ctrl + Up Arrow",
    "answer_hi": "Ctrl + Up Arrow",
    "explanation_en": "Ctrl + Up Arrow moves cursor to beginning of previous paragraph.",
    "explanation_hi": "Ctrl + Up Arrow कर्सर को पिछले पैराग्राफ की शुरुआत में ले जाता है।"
  },
  {
    "num": 15,
    "question_en": "What does PHP do in web development?",
    "question_hi": "वेब विकास में PHP क्या करता है?",
    "options_en": ["Server-side scripting", "Client-side interactivity", "Page styling", "Database storage"],
    "options_hi": ["सर्वर-साइड स्क्रिप्टिंग", "क्लाइंट-साइड इंटरैक्टिविटी", "पेज स्टाइलिंग", "डेटाबेस संग्रहण"],
    "answer_en": "Server-side scripting",
    "answer_hi": "सर्वर-साइड स्क्रिप्टिंग",
    "explanation_en": "PHP is a server-side scripting language used to create dynamic web pages that interact with databases.",
    "explanation_hi": "PHP एक सर्वर-साइड स्क्रिप्टिंग भाषा है जिसका उपयोग डेटाबेस के साथ इंटरैक्ट करने वाले गतिशील वेब पेज बनाने के लिए किया जाता है।"
  },
  {
    "num": 16,
    "question_en": "What is the unit of memory equal to 1024 terabytes?",
    "question_hi": "मेमोरी की वह इकाई क्या है जो 1024 टेराबाइट के बराबर होती है?",
    "options_en": ["Petabyte", "Exabyte", "Zettabyte", "Yottabyte"],
    "options_hi": ["पेटाबाइट", "एक्साबाइट", "ज़ेटाबाइट", "योटाबाइट"],
    "answer_en": "Petabyte",
    "answer_hi": "पेटाबाइट",
    "explanation_en": "1 Petabyte (PB) = 1024 Terabytes (TB) in binary system.",
    "explanation_hi": "बाइनरी सिस्टम में 1 पेटाबाइट (PB) = 1024 टेराबाइट (TB)।"
  },
  {
    "num": 17,
    "question_en": "What does 'mailto:' indicate in a hyperlink?",
    "question_hi": "हाइपरलिंक में 'mailto:' क्या इंगित करता है?",
    "options_en": ["Email link", "File download link", "Website link", "Local file link"],
    "options_hi": ["ईमेल लिंक", "फ़ाइल डाउनलोड लिंक", "वेबसाइट लिंक", "स्थानीय फ़ाइल लिंक"],
    "answer_en": "Email link",
    "answer_hi": "ईमेल लिंक",
    "explanation_en": "mailto: creates a link that opens the user's default email client to compose a new message.",
    "explanation_hi": "mailto: एक लिंक बनाता है जो एक नया संदेश लिखने के लिए उपयोगकर्ता के डिफ़ॉल्ट ईमेल क्लाइंट को खोलता है।"
  },
  {
    "num": 18,
    "question_en": "Which key combination opens Windows Mobility Center?",
    "question_hi": "Windows मोबिलिटी सेंटर खोलने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
    "options_en": ["Win + X", "Win + B", "Win + M", "Win + P"],
    "options_hi": ["Win + X", "Win + B", "Win + M", "Win + P"],
    "answer_en": "Win + X",
    "answer_hi": "Win + X",
    "explanation_en": "Win + X opens the Quick Link menu which includes Mobility Center (on laptops).",
    "explanation_hi": "Win + X क्विक लिंक मेन्यू खोलता है जिसमें मोबिलिटी सेंटर शामिल है (लैपटॉप पर)।"
  },
  {
    "num": 19,
    "question_en": "What is the shortcut for left-aligning text?",
    "question_hi": "टेक्स्ट को बाएं संरेखित करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
    "options_hi": ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
    "answer_en": "Ctrl + L",
    "answer_hi": "Ctrl + L",
    "explanation_en": "Ctrl + L aligns the selected text or paragraph to the left margin.",
    "explanation_hi": "Ctrl + L चयनित टेक्स्ट या पैराग्राफ को बाएं मार्जिन पर संरेखित करता है।"
  },
  {
    "num": 20,
    "question_en": "Which function finds the position of text within another text?",
    "question_hi": "कौन सा फ़ंक्शन दूसरे टेक्स्ट के भीतर टेक्स्ट की स्थिति ढूँढता है?",
    "options_en": ["FIND/SEARCH", "VLOOKUP", "MATCH", "LOCATE"],
    "options_hi": ["FIND/SEARCH", "VLOOKUP", "MATCH", "LOCATE"],
    "answer_en": "FIND/SEARCH",
    "answer_hi": "FIND/SEARCH",
    "explanation_en": "FIND and SEARCH functions locate one text string within another and return its position.",
    "explanation_hi": "FIND और SEARCH फ़ंक्शन एक टेक्स्ट स्ट्रिंग को दूसरे के भीतर ढूँढते हैं और उसकी स्थिति लौटाते हैं।"
  },
  {
    "num": 21,
    "question_en": "What is the shortcut for increasing font size by one point?",
    "question_hi": "फ़ॉन्ट आकार एक पॉइंट बढ़ाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + ]", "Ctrl + Shift + >", "Ctrl + +", "All of these"],
    "options_hi": ["Ctrl + ]", "Ctrl + Shift + >", "Ctrl + +", "ये सभी"],
    "answer_en": "Ctrl + ]",
    "answer_hi": "Ctrl + ]",
    "explanation_en": "Ctrl + ] increases font size by one point; Ctrl + [ decreases by one point.",
    "explanation_hi": "Ctrl + ] फ़ॉन्ट आकार एक पॉइंट बढ़ाता है; Ctrl + [ एक पॉइंट घटाता है।"
  },
  {
    "num": 22,
    "question_en": "What is the purpose of Drafts folder in email?",
    "question_hi": "ईमेल में ड्राफ्ट फ़ोल्डर का उद्देश्य क्या है?",
    "options_en": ["Saves unfinished emails", "Stores sent emails", "Keeps received emails", "Holds deleted emails"],
    "options_hi": ["अधूरे ईमेल सहेजता है", "भेजे गए ईमेल संग्रहीत करता है", "प्राप्त ईमेल रखता है", "हटाए गए ईमेल रखता है"],
    "answer_en": "Saves unfinished emails",
    "answer_hi": "अधूरे ईमेल सहेजता है",
    "explanation_en": "Drafts folder automatically saves emails you're composing but haven't sent yet.",
    "explanation_hi": "ड्राफ्ट फ़ोल्डर स्वचालित रूप से उन ईमेल को सहेजता है जो आप लिख रहे हैं लेकिन अभी तक नहीं भेजे हैं।"
  },
  {
    "num": 23,
    "question_en": "What is the full form of LED?",
    "question_hi": "LED का पूर्ण रूप क्या है?",
    "options_en": ["Light Emitting Diode", "Light Emitting Device", "Light Emitting Display", "Light Emitting Detector"],
    "options_hi": ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिवाइस", "लाइट एमिटिंग डिस्प्ले", "लाइट एमिटिंग डिटेक्टर"],
    "answer_en": "Light Emitting Diode",
    "answer_hi": "लाइट एमिटिंग डायोड",
    "explanation_en": "LED is a semiconductor light source that emits light when current flows through it.",
    "explanation_hi": "LED एक अर्धचालक प्रकाश स्रोत है जो करंट प्रवाहित होने पर प्रकाश उत्सर्जित करता है।"
  },
  {
    "num": 24,
    "question_en": "Which device produces hard copy output from computer?",
    "question_hi": "कौन सा उपकरण कंप्यूटर से हार्ड कॉपी आउटपुट उत्पन्न करता है?",
    "options_en": ["Printer", "Monitor", "Projector", "Speaker"],
    "options_hi": ["प्रिंटर", "मॉनिटर", "प्रोजेक्टर", "स्पीकर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "explanation_en": "Printer produces physical copies (hard copies) of digital documents on paper or other media.",
    "explanation_hi": "प्रिंटर कागज या अन्य मीडिया पर डिजिटल दस्तावेज़ों की भौतिक प्रतियाँ (हार्ड कॉपी) उत्पन्न करता है।"
  },
  {
    "num": 25,
    "question_en": "What is the shortcut for opening Windows Narrator?",
    "question_hi": "Windows नैरेटर खोलने की शॉर्टकट क्या है?",
    "options_en": ["Win + Ctrl + Enter", "Win + N", "Ctrl + N", "Alt + N"],
    "options_hi": ["Win + Ctrl + Enter", "Win + N", "Ctrl + N", "Alt + N"],
    "answer_en": "Win + Ctrl + Enter",
    "answer_hi": "Win + Ctrl + Enter",
    "explanation_en": "Win + Ctrl + Enter starts or stops Windows Narrator, the screen reading app.",
    "explanation_hi": "Win + Ctrl + Enter Windows नैरेटर, स्क्रीन रीडिंग ऐप शुरू या बंद करता है।"
  },
  {
    "num": 26,
    "question_en": "What type of memory is BIOS stored in?",
    "question_hi": "BIOS किस प्रकार की मेमोरी में संग्रहीत होता है?",
    "options_en": ["Flash Memory", "DRAM", "SRAM", "Hard Disk"],
    "options_hi": ["फ्लैश मेमोरी", "DRAM", "SRAM", "हार्ड डिस्क"],
    "answer_en": "Flash Memory",
    "answer_hi": "फ्लैश मेमोरी",
    "explanation_en": "Modern BIOS is stored in flash memory which can be updated (flashed) with new versions.",
    "explanation_hi": "आधुनिक BIOS फ्लैश मेमोरी में संग्रहीत होता है जिसे नए संस्करणों के साथ अद्यतन (फ्लैश) किया जा सकता है।"
  },
  {
    "num": 27,
    "question_en": "Which software is used for creating 3D models and animations?",
    "question_hi": "3D मॉडल और एनिमेशन बनाने के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Blender", "Writer", "Calc", "Impress"],
    "options_hi": ["ब्लेंडर", "राइटर", "कैल्क", "इम्प्रेस"],
    "answer_en": "Blender",
    "answer_hi": "ब्लेंडर",
    "explanation_en": "Blender is a free, open-source 3D creation suite supporting modeling, animation, simulation, and rendering.",
    "explanation_hi": "ब्लेंडर एक मुफ्त, ओपन-सोर्स 3D निर्माण सुइट है जो मॉडलिंग, एनिमेशन, सिमुलेशन और रेंडरिंग का समर्थन करती है।"
  },
  {
    "num": 28,
    "question_en": "What is the shortcut for inserting line break (without new paragraph)?",
    "question_hi": "लाइन ब्रेक डालने की शॉर्टकट क्या है (नया पैराग्राफ के बिना)?",
    "options_en": ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
    "options_hi": ["Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Enter"],
    "answer_en": "Shift + Enter",
    "answer_hi": "Shift + Enter",
    "explanation_en": "Shift + Enter inserts a line break (soft return) without starting a new paragraph.",
    "explanation_hi": "Shift + Enter नया पैराग्राफ शुरू किए बिना एक लाइन ब्रेक (सॉफ्ट रिटर्न) डालता है।"
  },
  {
    "num": 29,
    "question_en": "What is the purpose of heat sink in computer?",
    "question_hi": "कंप्यूटर में हीट सिंक का उद्देश्य क्या है?",
    "options_en": ["Dissipates heat from components", "Generates electricity", "Stores thermal energy", "Controls fan speed"],
    "options_hi": ["घटकों से गर्मी दूर करता है", "बिजली उत्पन्न करता है", "थर्मल ऊर्जा संग्रहीत करता है", "फैन की गति नियंत्रित करता है"],
    "answer_en": "Dissipates heat from components",
    "answer_hi": "घटकों से गर्मी दूर करता है",
    "explanation_en": "Heat sink absorbs and dissipates heat from CPU, GPU, and other heat-producing components.",
    "explanation_hi": "हीट सिंक CPU, GPU और अन्य गर्मी उत्पन्न करने वाले घटकों से गर्मी को अवशोषित और दूर करता है।"
  },
  {
    "num": 30,
    "question_en": "What is the main advantage of accounting software?",
    "question_hi": "अकाउंटिंग सॉफ़्टवेयर का मुख्य लाभ क्या है?",
    "options_en": ["Automates financial transactions and reporting", "Creates presentations", "Edits photos", "Manages emails"],
    "options_hi": ["वित्तीय लेनदेन और रिपोर्टिंग को स्वचालित करता है", "प्रस्तुतियाँ बनाता है", "फोटो संपादित करता है", "ईमेल प्रबंधित करता है"],
    "answer_en": "Automates financial transactions and reporting",
    "answer_hi": "वित्तीय लेनदेन और रिपोर्टिंग को स्वचालित करता है",
    "explanation_en": "Accounting software automates bookkeeping, invoicing, payroll, tax calculations, and financial reporting.",
    "explanation_hi": "अकाउंटिंग सॉफ़्टवेयर बहीखाता, चालान, पेरोल, कर गणना और वित्तीय रिपोर्टिंग को स्वचालित करता है।"
  },
  {
    "num": 31,
    "question_en": "What is the shortcut for inserting date field?",
    "question_hi": "तिथि फ़ील्ड डालने की शॉर्टकट क्या है?",
    "options_en": ["Alt + Shift + D", "Ctrl + D", "Ctrl + ;", "Alt + D"],
    "options_hi": ["Alt + Shift + D", "Ctrl + D", "Ctrl + ;", "Alt + D"],
    "answer_en": "Alt + Shift + D",
    "answer_hi": "Alt + Shift + D",
    "explanation_en": "Alt + Shift + D inserts the current date as a field that updates automatically.",
    "explanation_hi": "Alt + Shift + D वर्तमान तिथि को एक फ़ील्ड के रूप में डालता है जो स्वचालित रूप से अपडेट होती है।"
  },
  {
    "num": 32,
    "question_en": "What does TCP stand for?",
    "question_hi": "TCP का पूर्ण रूप क्या है?",
    "options_en": ["Transmission Control Protocol", "Transfer Control Protocol", "Transmission Communication Protocol", "Transfer Communication Protocol"],
    "options_hi": ["ट्रांसमिशन कंट्रोल प्रोटोकॉल", "ट्रांसफर कंट्रोल प्रोटोकॉल", "ट्रांसमिशन कम्युनिकेशन प्रोटोकॉल", "ट्रांसफर कम्युनिकेशन प्रोटोकॉल"],
    "answer_en": "Transmission Control Protocol",
    "answer_hi": "ट्रांसमिशन कंट्रोल प्रोटोकॉल",
    "explanation_en": "TCP is a connection-oriented protocol that ensures reliable, ordered delivery of data packets.",
    "explanation_hi": "TCP एक कनेक्शन-उन्मुख प्रोटोकॉल है जो डेटा पैकेटों की विश्वसनीय, क्रमित डिलीवरी सुनिश्चित करता है।"
  },
  {
    "num": 33,
    "question_en": "Which key moves cursor one screen down?",
    "question_hi": "कौन सी कुंजी कर्सर को एक स्क्रीन नीचे ले जाती है?",
    "options_en": ["Page Down", "End", "Ctrl + Down Arrow", "Shift + Down Arrow"],
    "options_hi": ["पेज डाउन", "एंड", "Ctrl + Down Arrow", "Shift + Down Arrow"],
    "answer_en": "Page Down",
    "answer_hi": "पेज डाउन",
    "explanation_en": "Page Down moves cursor and viewport one screenful down in a document.",
    "explanation_hi": "पेज डाउन कर्सर और व्यूपोर्ट को दस्तावेज़ में एक स्क्रीनफुल नीचे ले जाता है।"
  },
  {
    "num": 34,
    "question_en": "What is the shortcut for opening Windows On-Screen Keyboard?",
    "question_hi": "Windows ऑन-स्क्रीन कीबोर्ड खोलने की शॉर्टकट क्या है?",
    "options_en": ["Win + Ctrl + O", "Win + K", "Ctrl + K", "Alt + K"],
    "options_hi": ["Win + Ctrl + O", "Win + K", "Ctrl + K", "Alt + K"],
    "answer_en": "Win + Ctrl + O",
    "answer_hi": "Win + Ctrl + O",
    "explanation_en": "Win + Ctrl + O turns On-Screen Keyboard on or off in Windows.",
    "explanation_hi": "Win + Ctrl + O Windows में ऑन-स्क्रीन कीबोर्ड चालू या बंद करता है।"
  },
  {
    "num": 35,
    "question_en": "What does ICT enable in agriculture?",
    "question_hi": "कृषि में ICT क्या सक्षम बनाता है?",
    "options_en": ["Precision farming and market access", "Traditional farming only", "Manual irrigation", "Animal husbandry"],
    "options_hi": ["परिशुद्ध खेती और बाजार पहुंच", "केवल पारंपरिक खेती", "मैन्युअल सिंचाई", "पशुपालन"],
    "answer_en": "Precision farming and market access",
    "answer_hi": "परिशुद्ध खेती और बाजार पहुंच",
    "explanation_en": "ICT enables precision agriculture, weather forecasting, market price information, and supply chain management.",
    "explanation_hi": "ICT परिशुद्ध कृषि, मौसम पूर्वानुमान, बाजार मूल्य जानकारी और आपूर्ति श्रृंखला प्रबंधन सक्षम बनाता है।"
  },
  {
    "num": 36,
    "question_en": "What is the shortcut for taking screenshot and saving as file?",
    "question_hi": "स्क्रीनशॉट लेने और फ़ाइल के रूप में सहेजने की शॉर्टकट क्या है?",
    "options_en": ["Win + Print Screen", "Print Screen", "Alt + Print Screen", "Ctrl + Print Screen"],
    "options_hi": ["Win + Print Screen", "Print Screen", "Alt + Print Screen", "Ctrl + Print Screen"],
    "answer_en": "Win + Print Screen",
    "answer_hi": "Win + Print Screen",
    "explanation_en": "Win + Print Screen captures entire screen and saves it as PNG file in Screenshots folder.",
    "explanation_hi": "Win + Print Screen पूरी स्क्रीन कैप्चर करता है और इसे स्क्रीनशॉट फ़ोल्डर में PNG फ़ाइल के रूप में सहेजता है।"
  },
  {
    "num": 37,
    "question_en": "What does RFID technology enable?",
    "question_hi": "RFID तकनीक क्या सक्षम बनाती है?",
    "options_en": ["Automatic identification and tracking", "Wireless internet", "Audio streaming", "Video conferencing"],
    "options_hi": ["स्वचालित पहचान और ट्रैकिंग", "वायरलेस इंटरनेट", "ऑडियो स्ट्रीमिंग", "वीडियो कॉन्फ्रेंसिंग"],
    "answer_en": "Automatic identification and tracking",
    "answer_hi": "स्वचालित पहचान और ट्रैकिंग",
    "explanation_en": "RFID (Radio Frequency Identification) uses electromagnetic fields to automatically identify and track tags attached to objects.",
    "explanation_hi": "RFID (रेडियो फ्रीक्वेंसी आइडेंटिफिकेशन) वस्तुओं से जुड़े टैग की स्वचालित पहचान और ट्रैकिंग के लिए विद्युत चुम्बकीय क्षेत्रों का उपयोग करता है।"
  },
  {
    "num": 38,
    "question_en": "Which function key opens thesaurus in word processors?",
    "question_hi": "कौन सी फ़ंक्शन कुंजी वर्ड प्रोसेसर में थिसॉरस खोलती है?",
    "options_en": ["Shift + F7", "F7", "F1", "F12"],
    "options_hi": ["Shift + F7", "F7", "F1", "F12"],
    "answer_en": "Shift + F7",
    "answer_hi": "Shift + F7",
    "explanation_en": "Shift + F7 typically opens the thesaurus to find synonyms for selected word.",
    "explanation_hi": "Shift + F7 आमतौर पर चयनित शब्द के लिए समानार्थी शब्द ढूँढने के लिए थिसॉरस खोलता है।"
  },
  {
    "num": 39,
    "question_en": "What is the shortcut for maximizing current window?",
    "question_hi": "वर्तमान विंडो को अधिकतम करने की शॉर्टकट क्या है?",
    "options_en": ["Win + Up Arrow", "Alt + Space, then X", "Both", "Ctrl + Up Arrow"],
    "options_hi": ["Win + Up Arrow", "Alt + Space, फिर X", "दोनों", "Ctrl + Up Arrow"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Both Win+Up Arrow and Alt+Space then X maximize the current window.",
    "explanation_hi": "Win+Up Arrow और Alt+Space फिर X दोनों वर्तमान विंडो को अधिकतम करते हैं।"
  },
  {
    "num": 40,
    "question_en": "What does PPI stand for in displays?",
    "question_hi": "डिस्प्ले में PPI का पूर्ण रूप क्या है?",
    "options_en": ["Pixels Per Inch", "Pixels Per Image", "Points Per Inch", "Points Per Image"],
    "options_hi": ["पिक्सेल पर इंच", "पिक्सेल पर इमेज", "पॉइंट पर इंच", "पॉइंट पर इमेज"],
    "answer_en": "Pixels Per Inch",
    "answer_hi": "पिक्सेल पर इंच",
    "explanation_en": "PPI measures pixel density of digital displays - higher PPI means sharper, more detailed images.",
    "explanation_hi": "PPI डिजिटल डिस्प्ले के पिक्सेल घनत्व को मापता है - उच्च PPI का अर्थ है तेज, अधिक विस्तृत छवियाँ।"
  },
  {
    "num": 41,
    "question_en": "Which function returns a random number between 0 and 1?",
    "question_hi": "कौन सा फ़ंक्शन 0 और 1 के बीच एक यादृच्छिक संख्या लौटाता है?",
    "options_en": ["RAND", "RANDBETWEEN", "RANDOM", "RANDN"],
    "options_hi": ["RAND", "RANDBETWEEN", "RANDOM", "RANDN"],
    "answer_en": "RAND",
    "answer_hi": "RAND",
    "explanation_en": "RAND function returns a random decimal number between 0 and 1, recalculating with each worksheet change.",
    "explanation_hi": "RAND फ़ंक्शन 0 और 1 के बीच एक यादृच्छिक दशमलव संख्या लौटाता है, प्रत्येक वर्कशीट परिवर्तन के साथ पुनर्गणना करता है।"
  },
  {
    "num": 42,
    "question_en": "What is the shortcut for opening browser's print dialog?",
    "question_hi": "ब्राउज़र का प्रिंट डायलॉग खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Print", "Alt + P"],
    "options_hi": ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Print", "Alt + P"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P",
    "explanation_en": "Ctrl + P opens the print dialog in web browsers to print the current page.",
    "explanation_hi": "Ctrl + P वेब ब्राउज़र में वर्तमान पेज प्रिंट करने के लिए प्रिंट डायलॉग खोलता है।"
  },
  {
    "num": 43,
    "question_en": "What does CRM stand for in business software?",
    "question_hi": "बिजनेस सॉफ़्टवेयर में CRM का पूर्ण रूप क्या है?",
    "options_en": ["Customer Relationship Management", "Customer Resource Management", "Client Relationship Management", "Client Resource Management"],
    "options_hi": ["कस्टमर रिलेशनशिप मैनेजमेंट", "कस्टमर रिसोर्स मैनेजमेंट", "क्लाइंट रिलेशनशिप मैनेजमेंट", "क्लाइंट रिसोर्स मैनेजमेंट"],
    "answer_en": "Customer Relationship Management",
    "answer_hi": "कस्टमर रिलेशनशिप मैनेजमेंट",
    "explanation_en": "CRM software manages company's interactions with current and potential customers.",
    "explanation_hi": "CRM सॉफ़्टवेयर कंपनी की वर्तमान और संभावित ग्राहकों के साथ बातचीत का प्रबंधन करता है।"
  },
  {
    "num": 44,
    "question_en": "What is the shortcut for opening browser's settings?",
    "question_hi": "ब्राउज़र की सेटिंग्स खोलने की शॉर्टकट क्या है?",
    "options_en": ["Alt + E then S (Chrome)", "Alt + F then S (Firefox)", "Depends on browser", "Ctrl + S"],
    "options_hi": ["Alt + E फिर S (क्रोम)", "Alt + F फिर S (फ़ायरफ़ॉक्स)", "ब्राउज़र पर निर्भर", "Ctrl + S"],
    "answer_en": "Depends on browser",
    "answer_hi": "ब्राउज़र पर निर्भर",
    "explanation_en": "Browser settings shortcut varies: Alt+E then S in Chrome, Alt+F then S in Firefox, Alt+X then O in Edge.",
    "explanation_hi": "ब्राउज़र सेटिंग्स शॉर्टकट भिन्न होती है: क्रोम में Alt+E फिर S, फ़ायरफ़ॉक्स में Alt+F फिर S, एज में Alt+X फिर O।"
  },
  {
    "num": 45,
    "question_en": "What does JSON stand for in data interchange?",
    "question_hi": "डेटा इंटरचेंज में JSON का पूर्ण रूप क्या है?",
    "options_en": ["JavaScript Object Notation", "JavaScript Object Naming", "Java Object Notation", "Java Object Naming"],
    "options_hi": ["जावास्क्रिप्ट ऑब्जेक्ट नोटेशन", "जावास्क्रिप्ट ऑब्जेक्ट नेमिंग", "जावा ऑब्जेक्ट नोटेशन", "जावा ऑब्जेक्ट नेमिंग"],
    "answer_en": "JavaScript Object Notation",
    "answer_hi": "जावास्क्रिप्ट ऑब्जेक्ट नोटेशन",
    "explanation_en": "JSON is a lightweight data interchange format that is easy for humans to read/write and machines to parse/generate.",
    "explanation_hi": "JSON एक हल्का डेटा इंटरचेंज प्रारूप है जिसे मनुष्यों के लिए पढ़ना/लिखना और मशीनों के लिए पार्स/जनरेट करना आसान है।"
  },
  {
    "num": 46,
    "question_en": "What is the shortcut for opening browser's task manager?",
    "question_hi": "ब्राउज़र का टास्क मैनेजर खोलने की शॉर्टकट क्या है?",
    "options_en": ["Shift + Esc", "Ctrl + Shift + Esc", "Alt + Esc", "Ctrl + Esc"],
    "options_hi": ["Shift + Esc", "Ctrl + Shift + Esc", "Alt + Esc", "Ctrl + Esc"],
    "answer_en": "Shift + Esc",
    "answer_hi": "Shift + Esc",
    "explanation_en": "Shift + Esc opens Chrome's built-in Task Manager to monitor resource usage by tabs and extensions.",
    "explanation_hi": "Shift + Esc टैब और एक्सटेंशन द्वारा संसाधन उपयोग की निगरानी करने के लिए क्रोम के अंतर्निहित टास्क मैनेजर को खोलता है।"
  },
  {
    "num": 47,
    "question_en": "What does PCIe stand for in computer expansion?",
    "question_hi": "कंप्यूटर विस्तार में PCIe का पूर्ण रूप क्या है?",
    "options_en": ["Peripheral Component Interconnect Express", "Peripheral Component Interface Express", "Personal Computer Interconnect Express", "Personal Computer Interface Express"],
    "options_hi": ["पेरिफेरल कम्पोनेंट इंटरकनेक्ट एक्सप्रेस", "पेरिफेरल कम्पोनेंट इंटरफेस एक्सप्रेस", "पर्सनल कंप्यूटर इंटरकनेक्ट एक्सप्रेस", "पर्सनल कंप्यूटर इंटरफेस एक्सप्रेस"],
    "answer_en": "Peripheral Component Interconnect Express",
    "answer_hi": "पेरिफेरल कम्पोनेंट इंटरकनेक्ट एक्सप्रेस",
    "explanation_en": "PCIe is a high-speed serial computer expansion bus standard for connecting hardware devices.",
    "explanation_hi": "PCIe हार्डवेयर उपकरणों को जोड़ने के लिए एक उच्च-गति धारावाहिक कंप्यूटर विस्तार बस मानक है।"
  },
  {
    "num": 48,
    "question_en": "What is the shortcut for opening browser's certificate information?",
    "question_hi": "ब्राउज़र का प्रमाणपत्र जानकारी खोलने की शॉर्टकट क्या है?",
    "options_en": ["Click lock icon in address bar", "Ctrl + I", "Ctrl + C", "Alt + C"],
    "options_hi": ["एड्रेस बार में लॉक आइकन पर क्लिक करें", "Ctrl + I", "Ctrl + C", "Alt + C"],
    "answer_en": "Click lock icon in address bar",
    "answer_hi": "एड्रेस बार में लॉक आइकन पर क्लिक करें",
    "explanation_en": "Clicking the lock icon (or view site information) in browser address bar shows SSL certificate details.",
    "explanation_hi": "ब्राउज़र एड्रेस बार में लॉक आइकन (या साइट जानकारी देखें) पर क्लिक करने से SSL प्रमाणपत्र विवरण दिखाता है।"
  },
  {
    "num": 49,
    "question_en": "What does RAID stand for in storage technology?",
    "question_hi": "स्टोरेज तकनीक में RAID का पूर्ण रूप क्या है?",
    "options_en": ["Redundant Array of Independent Disks", "Redundant Array of Inexpensive Disks", "Reliable Array of Independent Disks", "Reliable Array of Inexpensive Disks"],
    "options_hi": ["रिडंडेंट ऐरे ऑफ इंडिपेंडेंट डिस्क्स", "रिडंडेंट ऐरे ऑफ इनएक्सपेंसिव डिस्क्स", "रिलायबल ऐरे ऑफ इंडिपेंडेंट डिस्क्स", "रिलायबल ऐरे ऑफ इनएक्सपेंसिव डिस्क्स"],
    "answer_en": "Redundant Array of Independent Disks",
    "answer_hi": "रिडंडेंट ऐरे ऑफ इंडिपेंडेंट डिस्क्स",
    "explanation_en": "RAID combines multiple physical disk drives into a single logical unit for data redundancy or performance.",
    "explanation_hi": "RAID डेटा अतिरेक या प्रदर्शन के लिए कई भौतिक डिस्क ड्राइव को एक एकल तार्किक इकाई में जोड़ता है।"
  },
  {
    "num": 50,
    "question_en": "What is the shortcut for duplicating current tab in browser?",
    "question_hi": "ब्राउज़र में वर्तमान टैब की प्रतिलिपि बनाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + T then Ctrl + L", "Ctrl + K then duplicate"],
    "options_hi": ["Ctrl + Shift + D", "Ctrl + D", "Ctrl + T फिर Ctrl + L", "Ctrl + K फिर duplicate"],
    "answer_en": "Ctrl + Shift + D",
    "answer_hi": "Ctrl + Shift + D",
    "explanation_en": "Ctrl + Shift + D duplicates the current tab in many browsers.",
    "explanation_hi": "Ctrl + Shift + D कई ब्राउज़र में वर्तमान टैब की प्रतिलिपि बनाता है।"
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

