const questions =[
  {
    "num": 1,
    "question_en": "Which function in spreadsheet checks if a condition is met?",
    "question_hi": "स्प्रेडशीट में कौन सा फ़ंक्शन जाँचता है कि कोई शर्त पूरी होती है या नहीं?",
    "options_en": ["IF", "SUM", "COUNT", "AVERAGE"],
    "options_hi": ["IF", "SUM", "COUNT", "AVERAGE"],
    "answer_en": "IF",
    "answer_hi": "IF",
    "explanation_en": "IF function returns one value if condition is TRUE and another value if FALSE.",
    "explanation_hi": "IF फ़ंक्शन एक मान लौटाता है यदि शर्त सत्य है और दूसरा मान यदि गलत है।"
  },
  {
    "num": 2,
    "question_en": "What is the shortcut to save a document?",
    "question_hi": "दस्तावेज़ सहेजने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + S",
    "answer_hi": "Ctrl + S",
    "explanation_en": "Ctrl + S saves the current document to disk.",
    "explanation_hi": "Ctrl + S वर्तमान दस्तावेज़ को डिस्क पर सहेजता है।"
  },
  {
    "num": 3,
    "question_en": "Which chart type shows parts of a whole?",
    "question_hi": "कौन सा चार्ट प्रकार एक पूरे के भाग दिखाता है?",
    "options_en": ["Pie Chart", "Bar Chart", "Line Chart", "Column Chart"],
    "options_hi": ["पाई चार्ट", "बार चार्ट", "लाइन चार्ट", "कॉलम चार्ट"],
    "answer_en": "Pie Chart",
    "answer_hi": "पाई चार्ट",
    "explanation_en": "Pie chart displays data as slices of a circle, each representing a proportion of the whole.",
    "explanation_hi": "पाई चार्ट डेटा को एक वृत्त के टुकड़ों के रूप में प्रदर्शित करता है, प्रत्येक पूरे के अनुपात का प्रतिनिधित्व करता है।"
  },
  {
    "num": 4,
    "question_en": "What is the main component of a computer's CPU?",
    "question_hi": "कंप्यूटर के CPU का मुख्य घटक क्या है?",
    "options_en": ["ALU", "Monitor", "Keyboard", "Hard Disk"],
    "options_hi": ["ALU", "मॉनिटर", "कीबोर्ड", "हार्ड डिस्क"],
    "answer_en": "ALU",
    "answer_hi": "ALU",
    "explanation_en": "ALU (Arithmetic Logic Unit) performs arithmetic and logical operations in CPU.",
    "explanation_hi": "ALU (अर्थमैटिक लॉजिक यूनिट) CPU में अंकगणितीय और तार्किक संचालन करता है।"
  },
  {
    "num": 5,
    "question_en": "Which device connects computer to internet?",
    "question_hi": "कौन सा उपकरण कंप्यूटर को इंटरनेट से जोड़ता है?",
    "options_en": ["Modem", "Printer", "Scanner", "Speaker"],
    "options_hi": ["मॉडेम", "प्रिंटर", "स्कैनर", "स्पीकर"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "explanation_en": "Modem modulates and demodulates signals to connect computer to internet via telephone or cable lines.",
    "explanation_hi": "मॉडेम टेलीफोन या केबल लाइनों के माध्यम से कंप्यूटर को इंटरनेट से जोड़ने के लिए सिग्नल को मॉड्यूलेट और डिमॉड्यूलेट करता है।"
  },
  {
    "num": 6,
    "question_en": "What does LAN stand for?",
    "question_hi": "LAN का पूर्ण रूप क्या है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "explanation_en": "LAN connects computers in a limited area like a building or campus.",
    "explanation_hi": "LAN एक भवन या परिसर जैसे सीमित क्षेत्र में कंप्यूटरों को जोड़ता है।"
  },
  {
    "num": 7,
    "question_en": "What is the full form of PDF?",
    "question_hi": "PDF का पूर्ण रूप क्या है?",
    "options_en": ["Portable Document Format", "Printed Document Format", "Portable Data Format", "Printed Data Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेड डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेड डेटा फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "explanation_en": "PDF maintains document formatting across different platforms and devices.",
    "explanation_hi": "PDF विभिन्न प्लेटफॉर्म और उपकरणों में दस्तावेज़ फ़ॉर्मेटिंग बनाए रखता है।"
  },
  {
    "num": 8,
    "question_en": "What is used to create numbered lists in Writer?",
    "question_hi": "Writer में क्रमांकित सूचियाँ बनाने के लिए क्या उपयोग किया जाता है?",
    "options_en": ["Numbering", "Bullets", "Indent", "Alignment"],
    "options_hi": ["नंबरिंग", "बुलेट", "इंडेंट", "एलाइनमेंट"],
    "answer_en": "Numbering",
    "answer_hi": "नंबरिंग",
    "explanation_en": "Numbering feature creates sequential numbered lists in documents.",
    "explanation_hi": "नंबरिंग सुविधा दस्तावेज़ों में क्रमिक क्रमांकित सूचियाँ बनाती है।"
  },
  {
    "num": 9,
    "question_en": "Which protocol sends emails?",
    "question_hi": "कौन सा प्रोटोकॉल ईमेल भेजता है?",
    "options_en": ["SMTP", "POP3", "IMAP", "FTP"],
    "options_hi": ["SMTP", "POP3", "IMAP", "FTP"],
    "answer_en": "SMTP",
    "answer_hi": "SMTP",
    "explanation_en": "SMTP (Simple Mail Transfer Protocol) is used to send emails from client to server.",
    "explanation_hi": "SMTP (सिंपल मेल ट्रांसफर प्रोटोकॉल) का उपयोग क्लाइंट से सर्वर पर ईमेल भेजने के लिए किया जाता है।"
  },
  {
    "num": 10,
    "question_en": "What is the shortcut for Paste?",
    "question_hi": "पेस्ट की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + V",
    "answer_hi": "Ctrl + V",
    "explanation_en": "Ctrl + V inserts copied or cut content at cursor position.",
    "explanation_hi": "Ctrl + V कॉपी या कट किए गए कंटेंट को कर्सर स्थिति पर डालता है।"
  },
  {
    "num": 11,
    "question_en": "What displays time and date on Windows desktop?",
    "question_hi": "Windows डेस्कटॉप पर समय और तिथि क्या दिखाता है?",
    "options_en": ["Taskbar", "Desktop Icons", "Start Menu", "Notification Area"],
    "options_hi": ["टास्कबार", "डेस्कटॉप आइकन", "स्टार्ट मेन्यू", "नोटिफिकेशन एरिया"],
    "answer_en": "Taskbar",
    "answer_hi": "टास्कबार",
    "explanation_en": "Taskbar typically shows system time and date in bottom-right corner.",
    "explanation_hi": "टास्कबार आमतौर पर नीचे-दाएं कोने में सिस्टम समय और तिथि दिखाता है।"
  },
  {
    "num": 12,
    "question_en": "What is the brain of computer?",
    "question_hi": "कंप्यूटर का दिमाग क्या है?",
    "options_en": ["CPU", "RAM", "Hard Disk", "Motherboard"],
    "options_hi": ["CPU", "RAM", "हार्ड डिस्क", "मदरबोर्ड"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "explanation_en": "CPU (Central Processing Unit) processes instructions and controls computer operations.",
    "explanation_hi": "CPU (सेंट्रल प्रोसेसिंग यूनिट) निर्देशों को संसाधित करता है और कंप्यूटर संचालन को नियंत्रित करता है।"
  },
  {
    "num": 13,
    "question_en": "Which software creates presentations?",
    "question_hi": "कौन सा सॉफ़्टवेयर प्रस्तुतियाँ बनाता है?",
    "options_en": ["Impress", "Writer", "Calc", "Draw"],
    "options_hi": ["इम्प्रेस", "राइटर", "कैल्क", "ड्रॉ"],
    "answer_en": "Impress",
    "answer_hi": "इम्प्रेस",
    "explanation_en": "Impress is presentation software in LibreOffice suite.",
    "explanation_hi": "इम्प्रेस LibreOffice सुइट में प्रस्तुति सॉफ़्टवेयर है।"
  },
  {
    "num": 14,
    "question_en": "What is the shortcut for Cut?",
    "question_hi": "कट की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + X",
    "answer_hi": "Ctrl + X",
    "explanation_en": "Ctrl + X removes selected content and copies it to clipboard.",
    "explanation_hi": "Ctrl + X चयनित कंटेंट को हटाता है और इसे क्लिपबोर्ड पर कॉपी करता है।"
  },
  {
    "num": 15,
    "question_en": "What does ISP stand for?",
    "question_hi": "ISP का पूर्ण रूप क्या है?",
    "options_en": ["Internet Service Provider", "Internet System Provider", "Internet Service Protocol", "Internet System Protocol"],
    "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेट सर्विस प्रोटोकॉल", "इंटरनेट सिस्टम प्रोटोकॉल"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
    "explanation_en": "ISP provides internet connectivity to homes and businesses.",
    "explanation_hi": "ISP घरों और व्यवसायों को इंटरनेट कनेक्टिविटी प्रदान करता है।"
  },
  {
    "num": 16,
    "question_en": "What is the smallest unit of digital data?",
    "question_hi": "डिजिटल डेटा की सबसे छोटी इकाई क्या है?",
    "options_en": ["Bit", "Byte", "Kilobyte", "Megabyte"],
    "options_hi": ["बिट", "बाइट", "किलोबाइट", "मेगाबाइट"],
    "answer_en": "Bit",
    "answer_hi": "बिट",
    "explanation_en": "Bit (Binary Digit) is smallest unit, representing 0 or 1.",
    "explanation_hi": "बिट (बाइनरी डिजिट) सबसे छोटी इकाई है, जो 0 या 1 का प्रतिनिधित्व करती है।"
  },
  {
    "num": 17,
    "question_en": "What does 'www' stand for in website addresses?",
    "question_hi": "वेबसाइट पतों में 'www' का क्या अर्थ है?",
    "options_en": ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Wide"],
    "options_hi": ["वर्ल्ड वाइड वेब", "वेब वर्ल्ड वाइड", "वाइड वेब वर्ल्ड", "वर्ल्ड वेब वाइड"],
    "answer_en": "World Wide Web",
    "answer_hi": "वर्ल्ड वाइड वेब",
    "explanation_en": "WWW is system of interlinked hypertext documents accessed via internet.",
    "explanation_hi": "WWW इंटरनेट के माध्यम से एक्सेस किए जाने वाले आपस में जुड़े हाइपरटेक्स्ट दस्तावेज़ों की प्रणाली है।"
  },
  {
    "num": 18,
    "question_en": "Which key deletes character to right of cursor?",
    "question_hi": "कौन सी कुंजी कर्सर के दाएं वर्ण को हटाती है?",
    "options_en": ["Delete", "Backspace", "Enter", "Shift"],
    "options_hi": ["डिलीट", "बैकस्पेस", "एंटर", "शिफ्ट"],
    "answer_en": "Delete",
    "answer_hi": "डिलीट",
    "explanation_en": "Delete key removes character to the right of cursor position.",
    "explanation_hi": "डिलीट कुंजी कर्सर स्थिति के दाएं वर्ण को हटाती है।"
  },
  {
    "num": 19,
    "question_en": "What is the shortcut for Select All?",
    "question_hi": "सभी चुनने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
    "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A",
    "explanation_en": "Ctrl + A selects all content in current document or window.",
    "explanation_hi": "Ctrl + A वर्तमान दस्तावेज़ या विंडो में सभी कंटेंट चुनता है।"
  },
  {
    "num": 20,
    "question_en": "Which function concatenates text in Calc?",
    "question_hi": "Calc में कौन सा फ़ंक्शन टेक्स्ट को जोड़ता है?",
    "options_en": ["CONCATENATE", "SUM", "JOIN", "COMBINE"],
    "options_hi": ["CONCATENATE", "SUM", "JOIN", "COMBINE"],
    "answer_en": "CONCATENATE",
    "answer_hi": "CONCATENATE",
    "explanation_en": "CONCATENATE function joins multiple text strings into one string.",
    "explanation_hi": "CONCATENATE फ़ंक्शन कई टेक्स्ट स्ट्रिंग्स को एक स्ट्रिंग में जोड़ता है।"
  },
  {
    "num": 21,
    "question_en": "What is used to make text italic?",
    "question_hi": "टेक्स्ट को इटैलिक बनाने के लिए क्या उपयोग किया जाता है?",
    "options_en": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + T"],
    "options_hi": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + T"],
    "answer_en": "Ctrl + I",
    "answer_hi": "Ctrl + I",
    "explanation_en": "Ctrl + I applies italic formatting to selected text.",
    "explanation_hi": "Ctrl + I चयनित टेक्स्ट पर इटैलिक फ़ॉर्मेटिंग लागू करता है।"
  },
  {
    "num": 22,
    "question_en": "What does BCC mean in email?",
    "question_hi": "ईमेल में BCC का क्या अर्थ है?",
    "options_en": ["Blind Carbon Copy", "Basic Carbon Copy", "Blind Courtesy Copy", "Basic Courtesy Copy"],
    "options_hi": ["ब्लाइंड कार्बन कॉपी", "बेसिक कार्बन कॉपी", "ब्लाइंड कॉर्टिसी कॉपी", "बेसिक कॉर्टिसी कॉपी"],
    "answer_en": "Blind Carbon Copy",
    "answer_hi": "ब्लाइंड कार्बन कॉपी",
    "explanation_en": "BCC sends copy without other recipients seeing who received it.",
    "explanation_hi": "BCC कॉपी भेजता है बिना अन्य प्राप्तकर्ताओं को यह देखे कि इसे किसने प्राप्त किया।"
  },
  {
    "num": 23,
    "question_en": "What is the full form of CPU?",
    "question_hi": "CPU का पूर्ण रूप क्या है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "explanation_en": "CPU executes instructions of a computer program.",
    "explanation_hi": "CPU कंप्यूटर प्रोग्राम के निर्देशों को निष्पादित करता है।"
  },
  {
    "num": 24,
    "question_en": "Which device displays computer output?",
    "question_hi": "कौन सा उपकरण कंप्यूटर आउटपुट प्रदर्शित करता है?",
    "options_en": ["Monitor", "Keyboard", "Mouse", "Printer"],
    "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "प्रिंटर"],
    "answer_en": "Monitor",
    "answer_hi": "मॉनिटर",
    "explanation_en": "Monitor is output device that displays visual information from computer.",
    "explanation_hi": "मॉनिटर आउटपुट डिवाइस है जो कंप्यूटर से दृश्य जानकारी प्रदर्शित करता है।"
  },
  {
    "num": 25,
    "question_en": "What is the shortcut for Print?",
    "question_hi": "प्रिंट की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P",
    "explanation_en": "Ctrl + P opens print dialog box to print current document.",
    "explanation_hi": "Ctrl + P वर्तमान दस्तावेज़ प्रिंट करने के लिए प्रिंट डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 26,
    "question_en": "What does RAM stand for?",
    "question_hi": "RAM का पूर्ण रूप क्या है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Random Active Memory", "Read Active Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम एक्टिव मेमोरी", "रीड एक्टिव मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी",
    "explanation_en": "RAM is temporary memory that stores data while computer is running.",
    "explanation_hi": "RAM अस्थायी मेमोरी है जो कंप्यूटर चलने के दौरान डेटा संग्रहीत करती है।"
  },
  {
    "num": 27,
    "question_en": "Which software creates spreadsheets?",
    "question_hi": "कौन सा सॉफ़्टवेयर स्प्रेडशीट बनाता है?",
    "options_en": ["Calc", "Writer", "Impress", "Base"],
    "options_hi": ["कैल्क", "राइटर", "इम्प्रेस", "बेस"],
    "answer_en": "Calc",
    "answer_hi": "कैल्क",
    "explanation_en": "Calc is spreadsheet software in LibreOffice suite.",
    "explanation_hi": "कैल्क LibreOffice सुइट में स्प्रेडशीट सॉफ़्टवेयर है।"
  },
  {
    "num": 28,
    "question_en": "What is the shortcut for Find?",
    "question_hi": "ढूँढने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
    "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
    "answer_en": "Ctrl + F",
    "answer_hi": "Ctrl + F",
    "explanation_en": "Ctrl + F opens find dialog to search for text in document.",
    "explanation_hi": "Ctrl + F दस्तावेज़ में टेक्स्ट खोजने के लिए फाइंड डायलॉग खोलता है।"
  },
  {
    "num": 29,
    "question_en": "What does ROM stand for?",
    "question_hi": "ROM का पूर्ण रूप क्या है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Open Memory", "Random Open Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड ओपन मेमोरी", "रैंडम ओपन मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "explanation_en": "ROM stores permanent data that cannot be modified.",
    "explanation_hi": "ROM स्थायी डेटा संग्रहीत करता है जिसे संशोधित नहीं किया जा सकता।"
  },
  {
    "num": 30,
    "question_en": "What is the main purpose of spreadsheet?",
    "question_hi": "स्प्रेडशीट का मुख्य उद्देश्य क्या है?",
    "options_en": ["Data Calculation", "Writing Letters", "Creating Slides", "Drawing Pictures"],
    "options_hi": ["डेटा गणना", "पत्र लिखना", "स्लाइड बनाना", "चित्र बनाना"],
    "answer_en": "Data Calculation",
    "answer_hi": "डेटा गणना",
    "explanation_en": "Spreadsheets are designed for organizing, calculating, and analyzing numerical data.",
    "explanation_hi": "स्प्रेडशीट संख्यात्मक डेटा को व्यवस्थित करने, गणना करने और विश्लेषण करने के लिए डिज़ाइन किए गए हैं।"
  },
  {
    "num": 31,
    "question_en": "What is the shortcut for Redo?",
    "question_hi": "रीडू की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "answer_en": "Ctrl + Y",
    "answer_hi": "Ctrl + Y",
    "explanation_en": "Ctrl + Y reverses the last undo action.",
    "explanation_hi": "Ctrl + Y अंतिम अनडू कार्य को पूर्ववत करता है।"
  },
  {
    "num": 32,
    "question_en": "What does HTTP stand for?",
    "question_hi": "HTTP का पूर्ण रूप क्या है?",
    "options_en": ["HyperText Transfer Protocol", "High Text Transfer Protocol", "HyperText Transmission Protocol", "High Text Transmission Protocol"],
    "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाई टेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
    "answer_en": "HyperText Transfer Protocol",
    "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
    "explanation_en": "HTTP is protocol for transmitting hypertext documents on web.",
    "explanation_hi": "HTTP वेब पर हाइपरटेक्स्ट दस्तावेज़ प्रसारित करने के लिए प्रोटोकॉल है।"
  },
  {
    "num": 33,
    "question_en": "Which key moves cursor to beginning of line?",
    "question_hi": "कौन सी कुंजी कर्सर को लाइन की शुरुआत में ले जाती है?",
    "options_en": ["Home", "End", "Page Up", "Page Down"],
    "options_hi": ["होम", "एंड", "पेज अप", "पेज डाउन"],
    "answer_en": "Home",
    "answer_hi": "होम",
    "explanation_en": "Home key moves cursor to beginning of current line.",
    "explanation_hi": "होम कुंजी कर्सर को वर्तमान लाइन की शुरुआत में ले जाती है।"
  },
  {
    "num": 34,
    "question_en": "What is the shortcut for Open?",
    "question_hi": "खोलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + O",
    "answer_hi": "Ctrl + O",
    "explanation_en": "Ctrl + O opens dialog box to select and open existing file.",
    "explanation_hi": "Ctrl + O मौजूदा फ़ाइल चुनने और खोलने के लिए डायलॉग बॉक्स खोलता है।"
  },
  {
    "num": 35,
    "question_en": "What does GUI stand for?",
    "question_hi": "GUI का पूर्ण रूप क्या है?",
    "options_en": ["Graphical User Interface", "Graphical Unit Interface", "Graphical User Interaction", "Graphical Unit Interaction"],
    "options_hi": ["ग्राफिकल यूज़र इंटरफेस", "ग्राफिकल यूनिट इंटरफेस", "ग्राफिकल यूज़र इंटरैक्शन", "ग्राफिकल यूनिट इंटरैक्शन"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूज़र इंटरफेस",
    "explanation_en": "GUI uses visual elements like icons and windows instead of text commands.",
    "explanation_hi": "GUI टेक्स्ट कमांड के बजाय आइकन और विंडो जैसे दृश्य तत्वों का उपयोग करता है।"
  },
  {
    "num": 36,
    "question_en": "What is the shortcut for New Window?",
    "question_hi": "नई विंडो की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + N", "Ctrl + W", "Ctrl + T", "Ctrl + O"],
    "options_hi": ["Ctrl + N", "Ctrl + W", "Ctrl + T", "Ctrl + O"],
    "answer_en": "Ctrl + N",
    "answer_hi": "Ctrl + N",
    "explanation_en": "Ctrl + N creates new window or document in many applications.",
    "explanation_hi": "Ctrl + N कई एप्लिकेशन में नई विंडो या दस्तावेज़ बनाता है।"
  },
  {
    "num": 37,
    "question_en": "What does WAN stand for?",
    "question_hi": "WAN का पूर्ण रूप क्या है?",
    "options_en": ["Wide Area Network", "Wide Access Network", "Web Area Network", "Web Access Network"],
    "options_hi": ["वाइड एरिया नेटवर्क", "वाइड एक्सेस नेटवर्क", "वेब एरिया नेटवर्क", "वेब एक्सेस नेटवर्क"],
    "answer_en": "Wide Area Network",
    "answer_hi": "वाइड एरिया नेटवर्क",
    "explanation_en": "WAN spans large geographical area, often connecting multiple LANs.",
    "explanation_hi": "WAN बड़े भौगोलिक क्षेत्र में फैला होता है, अक्सर कई LAN को जोड़ता है।"
  },
  {
    "num": 38,
    "question_en": "Which key is used for Help?",
    "question_hi": "सहायता के लिए किस कुंजी का उपयोग किया जाता है?",
    "options_en": ["F1", "F2", "F5", "F12"],
    "options_hi": ["F1", "F2", "F5", "F12"],
    "answer_en": "F1",
    "answer_hi": "F1",
    "explanation_en": "F1 key typically opens help system in most applications.",
    "explanation_hi": "F1 कुंजी आमतौर पर अधिकांश एप्लिकेशन में सहायता प्रणाली खोलती है।"
  },
  {
    "num": 39,
    "question_en": "What is the shortcut for Close?",
    "question_hi": "बंद करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + W", "Ctrl + Q", "Ctrl + C", "Ctrl + X"],
    "options_hi": ["Ctrl + W", "Ctrl + Q", "Ctrl + C", "Ctrl + X"],
    "answer_en": "Ctrl + W",
    "answer_hi": "Ctrl + W",
    "explanation_en": "Ctrl + W closes current window or tab in many applications.",
    "explanation_hi": "Ctrl + W कई एप्लिकेशन में वर्तमान विंडो या टैब बंद करता है।"
  },
  {
    "num": 40,
    "question_en": "What does USB stand for?",
    "question_hi": "USB का पूर्ण रूप क्या है?",
    "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
    "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
    "answer_en": "Universal Serial Bus",
    "answer_hi": "यूनिवर्सल सीरियल बस",
    "explanation_en": "USB is standard for connecting peripherals to computers.",
    "explanation_hi": "USB कंप्यूटर से परिधीय उपकरणों को जोड़ने के लिए मानक है।"
  },
  {
    "num": 41,
    "question_en": "Which function finds smallest value?",
    "question_hi": "कौन सा फ़ंक्शन सबसे छोटा मान ढूँढता है?",
    "options_en": ["MIN", "MAX", "SUM", "AVERAGE"],
    "options_hi": ["MIN", "MAX", "SUM", "AVERAGE"],
    "answer_en": "MIN",
    "answer_hi": "MIN",
    "explanation_en": "MIN function returns smallest value in a set of values.",
    "explanation_hi": "MIN फ़ंक्शन मानों के एक सेट में सबसे छोटा मान लौटाता है।"
  },
  {
    "num": 42,
    "question_en": "What is the shortcut for Replace?",
    "question_hi": "बदलने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
    "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
    "answer_en": "Ctrl + H",
    "answer_hi": "Ctrl + H",
    "explanation_en": "Ctrl + H opens find and replace dialog in many applications.",
    "explanation_hi": "Ctrl + H कई एप्लिकेशन में फाइंड और रिप्लेस डायलॉग खोलता है।"
  },
  {
    "num": 43,
    "question_en": "What does ICT stand for?",
    "question_hi": "ICT का पूर्ण रूप क्या है?",
    "options_en": ["Information and Communication Technology", "Internet and Computer Technology", "Information and Computer Technology", "Internet and Communication Technology"],
    "options_hi": ["सूचना और संचार प्रौद्योगिकी", "इंटरनेट और कंप्यूटर प्रौद्योगिकी", "सूचना और कंप्यूटर प्रौद्योगिकी", "इंटरनेट और संचार प्रौद्योगिकी"],
    "answer_en": "Information and Communication Technology",
    "answer_hi": "सूचना और संचार प्रौद्योगिकी",
    "explanation_en": "ICT encompasses technologies for information handling and communication.",
    "explanation_hi": "ICT सूचना संचालन और संचार के लिए प्रौद्योगिकियों को शामिल करता है।"
  },
  {
    "num": 44,
    "question_en": "What is the shortcut for Save As?",
    "question_hi": "अलग नाम से सहेजने की शॉर्टकट क्या है?",
    "options_en": ["F12", "Ctrl + S", "Ctrl + Shift + S", "Both F12 and Ctrl+Shift+S"],
    "options_hi": ["F12", "Ctrl + S", "Ctrl + Shift + S", "दोनों F12 और Ctrl+Shift+S"],
    "answer_en": "Both F12 and Ctrl+Shift+S",
    "answer_hi": "दोनों F12 और Ctrl+Shift+S",
    "explanation_en": "Both F12 and Ctrl+Shift+S open Save As dialog in many applications.",
    "explanation_hi": "F12 और Ctrl+Shift+S दोनों कई एप्लिकेशन में सेव ऐस डायलॉग खोलते हैं।"
  },
  {
    "num": 45,
    "question_en": "What does HTML stand for?",
    "question_hi": "HTML का पूर्ण रूप क्या है?",
    "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Making Language", "HighText Making Language"],
    "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मेकिंग लैंग्वेज", "हाईटेक्स्ट मेकिंग लैंग्वेज"],
    "answer_en": "HyperText Markup Language",
    "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
    "explanation_en": "HTML is standard markup language for creating web pages.",
    "explanation_hi": "HTML वेब पेज बनाने के लिए मानक मार्कअप भाषा है।"
  },
  {
    "num": 46,
    "question_en": "What is the shortcut for Refresh?",
    "question_hi": "रिफ्रेश की शॉर्टकट क्या है?",
    "options_en": ["F5", "F1", "F2", "F3"],
    "options_hi": ["F5", "F1", "F2", "F3"],
    "answer_en": "F5",
    "answer_hi": "F5",
    "explanation_en": "F5 refreshes or reloads current page in browsers and updates in applications.",
    "explanation_hi": "F5 ब्राउज़र में वर्तमान पेज रिफ्रेश या रीलोड करता है और एप्लिकेशन में अपडेट करता है।"
  },
  {
    "num": 47,
    "question_en": "What does VPN stand for?",
    "question_hi": "VPN का पूर्ण रूप क्या है?",
    "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Verified Public Network"],
    "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरीफाइड प्राइवेट नेटवर्क", "वेरीफाइड पब्लिक नेटवर्क"],
    "answer_en": "Virtual Private Network",
    "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
    "explanation_en": "VPN creates secure connection over public network for private communication.",
    "explanation_hi": "VPN निजी संचार के लिए सार्वजनिक नेटवर्क पर सुरक्षित कनेक्शन बनाता है।"
  },
  {
    "num": 48,
    "question_en": "What is the shortcut for Go To?",
    "question_hi": "जाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + G", "Ctrl + T", "Ctrl + L", "Ctrl + J"],
    "options_hi": ["Ctrl + G", "Ctrl + T", "Ctrl + L", "Ctrl + J"],
    "answer_en": "Ctrl + G",
    "answer_hi": "Ctrl + G",
    "explanation_en": "Ctrl + G opens Go To dialog to jump to specific location in document.",
    "explanation_hi": "Ctrl + G गो टू डायलॉग खोलता है ताकि दस्तावेज़ में विशिष्ट स्थान पर जाया जा सके।"
  },
  {
    "num": 49,
    "question_en": "What does BIOS stand for?",
    "question_hi": "BIOS का पूर्ण रूप क्या है?",
    "options_en": ["Basic Input Output System", "Basic Input Operating System", "Binary Input Output System", "Binary Input Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इनपुट ऑपरेटिंग सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "explanation_en": "BIOS initializes hardware during computer startup.",
    "explanation_hi": "BIOS कंप्यूटर स्टार्टअप के दौरान हार्डवेयर को प्रारंभ करता है।"
  },
  {
    "num": 50,
    "question_en": "What is the shortcut for Properties?",
    "question_hi": "गुणों की शॉर्टकट क्या है?",
    "options_en": ["Alt + Enter", "Ctrl + P", "Ctrl + I", "Alt + P"],
    "options_hi": ["Alt + Enter", "Ctrl + P", "Ctrl + I", "Alt + P"],
    "answer_en": "Alt + Enter",
    "answer_hi": "Alt + Enter",
    "explanation_en": "Alt + Enter opens properties dialog for selected file or object.",
    "explanation_hi": "Alt + Enter चयनित फ़ाइल या ऑब्जेक्ट के लिए गुण डायलॉग खोलता है।"
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

