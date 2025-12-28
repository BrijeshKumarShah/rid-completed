const questions =[
  {
    "num": 1,
    "question_en": "What is the shortcut to create a new document in LibreOffice Writer?",
    "question_hi": "LibreOffice Writer में नया दस्तावेज़ बनाने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + N",
    "answer_hi": "Ctrl + N",
    "explanation_en": "Ctrl + N creates a new blank document in word processors.",
    "explanation_hi": "Ctrl + N वर्ड प्रोसेसर में एक नया रिक्त दस्तावेज़ बनाता है।"
  },
  {
    "num": 2,
    "question_en": "Which function adds numbers in LibreOffice Calc?",
    "question_hi": "LibreOffice Calc में संख्याएँ जोड़ने के लिए किस फ़ंक्शन का उपयोग करते हैं?",
    "options_en": ["SUM", "AVERAGE", "MAX", "MIN"],
    "options_hi": ["SUM", "AVERAGE", "MAX", "MIN"],
    "answer_en": "SUM",
    "answer_hi": "SUM",
    "explanation_en": "SUM function calculates the total of selected cells.",
    "explanation_hi": "SUM फ़ंक्शन चयनित सेलों का कुल योग निकालता है।"
  },
  {
    "num": 3,
    "question_en": "Which view shows all slides as thumbnails in Impress?",
    "question_hi": "Impress में कौन सा दृश्य सभी स्लाइडों को थंबनेल के रूप में दिखाता है?",
    "options_en": ["Slide Sorter", "Normal", "Outline", "Notes"],
    "options_hi": ["स्लाइड सॉर्टर", "सामान्य", "आउटलाइन", "नोट्स"],
    "answer_en": "Slide Sorter",
    "answer_hi": "स्लाइड सॉर्टर",
    "explanation_en": "Slide Sorter view displays miniature versions of all slides for easy rearrangement.",
    "explanation_hi": "स्लाइड सॉर्टर दृश्य सभी स्लाइडों के छोटे संस्करण दिखाता है जिससे उन्हें आसानी से पुनर्व्यवस्थित किया जा सकता है।"
  },
  {
    "num": 4,
    "question_en": "What does URL stand for?",
    "question_hi": "URL का पूर्ण रूप क्या है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL is the web address that specifies the location of a resource on the internet.",
    "explanation_hi": "URL वह वेब पता है जो इंटरनेट पर किसी संसाधन का स्थान निर्दिष्ट करता है।"
  },
  {
    "num": 5,
    "question_en": "Which protocol receives emails from server?",
    "question_hi": "सर्वर से ईमेल प्राप्त करने के लिए किस प्रोटोकॉल का उपयोग होता है?",
    "options_en": ["POP3", "SMTP", "HTTP", "FTP"],
    "options_hi": ["POP3", "SMTP", "HTTP", "FTP"],
    "answer_en": "POP3",
    "answer_hi": "POP3",
    "explanation_en": "POP3 (Post Office Protocol version 3) retrieves emails from a mail server to a local device.",
    "explanation_hi": "POP3 (पोस्ट ऑफिस प्रोटोकॉल वर्जन 3) मेल सर्वर से ईमेल स्थानीय उपकरण पर प्राप्त करता है।"
  },
  {
    "num": 6,
    "question_en": "What is the shortcut for Undo action?",
    "question_hi": "अनडू करने की शॉर्टकट कुंजी क्या है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z",
    "explanation_en": "Ctrl + Z reverses the last action performed.",
    "explanation_hi": "Ctrl + Z अंतिम किए गए कार्य को पूर्ववत करता है।"
  },
  {
    "num": 7,
    "question_en": "Which software manages computer hardware and software?",
    "question_hi": "कौन सा सॉफ़्टवेयर कंप्यूटर हार्डवेयर और सॉफ़्टवेयर प्रबंधित करता है?",
    "options_en": ["Operating System", "Application Software", "Utility Software", "Device Driver"],
    "options_hi": ["ऑपरेटिंग सिस्टम", "एप्लिकेशन सॉफ़्टवेयर", "यूटिलिटी सॉफ़्टवेयर", "डिवाइस ड्राइवर"],
    "answer_en": "Operating System",
    "answer_hi": "ऑपरेटिंग सिस्टम",
    "explanation_en": "Operating System acts as an interface between user and computer hardware.",
    "explanation_hi": "ऑपरेटिंग सिस्टम उपयोगकर्ता और कंप्यूटर हार्डवेयर के बीच इंटरफेस का काम करता है।"
  },
  {
    "num": 8,
    "question_en": "Which memory loses data when power is off?",
    "question_hi": "कौन सी मेमोरी बिजली बंद होने पर डेटा खो देती है?",
    "options_en": ["RAM", "ROM", "Hard Disk", "Pen Drive"],
    "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "explanation_en": "RAM (Random Access Memory) is volatile memory that requires power to retain data.",
    "explanation_hi": "RAM (रैंडम एक्सेस मेमोरी) अस्थिर मेमोरी है जिसे डेटा रखने के लिए बिजली की आवश्यकता होती है।"
  },
  {
    "num": 9,
    "question_en": "Where do deleted files go in Windows?",
    "question_hi": "Windows में हटाए गए फ़ाइलें कहाँ जाती हैं?",
    "options_en": ["Recycle Bin", "Temp Folder", "Downloads", "Desktop"],
    "options_hi": ["रीसाइकिल बिन", "टेम्प फ़ोल्डर", "डाउनलोड", "डेस्कटॉप"],
    "answer_en": "Recycle Bin",
    "answer_hi": "रीसाइकिल बिन",
    "explanation_en": "Deleted files are moved to Recycle Bin where they can be restored or permanently deleted.",
    "explanation_hi": "हटाए गए फ़ाइल रीसाइकिल बिन में जाते हैं जहाँ से उन्हें पुनर्स्थापित या स्थायी रूप से हटाया जा सकता है।"
  },
  {
    "num": 10,
    "question_en": "What should you do if computer freezes?",
    "question_hi": "यदि कंप्यूटर फ्रीज हो जाए तो आपको क्या करना चाहिए?",
    "options_en": ["Restart Computer", "Unplug Monitor", "Hit Keyboard Hard", "Wait Indefinitely"],
    "options_hi": ["कंप्यूटर रीस्टार्ट करें", "मॉनिटर का प्लग निकालें", "कीबोर्ड जोर से मारें", "अनिश्चित काल तक प्रतीक्षा करें"],
    "answer_en": "Restart Computer",
    "answer_hi": "कंप्यूटर रीस्टार्ट करें",
    "explanation_en": "Restarting clears temporary memory issues and is the safest solution for a frozen computer.",
    "explanation_hi": "रीस्टार्ट करने से अस्थायी मेमोरी समस्याएँ दूर होती हैं और यह फ्रीज कंप्यूटर के लिए सबसे सुरक्षित समाधान है।"
  },
  {
    "num": 11,
    "question_en": "What is the shortcut for Bold text?",
    "question_hi": "टेक्स्ट को बोल्ड करने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    "options_hi": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    "answer_en": "Ctrl + B",
    "answer_hi": "Ctrl + B",
    "explanation_en": "Ctrl + B applies or removes bold formatting from selected text.",
    "explanation_hi": "Ctrl + B चयनित टेक्स्ट से बोल्ड फ़ॉर्मेटिंग लागू करता है या हटाता है।"
  },
  {
    "num": 12,
    "question_en": "What starts a new page in a document?",
    "question_hi": "दस्तावेज़ में नया पेज क्या शुरू करता है?",
    "options_en": ["Page Break", "Line Break", "Paragraph Break", "Section Break"],
    "options_hi": ["पेज ब्रेक", "लाइन ब्रेक", "पैराग्राफ ब्रेक", "सेक्शन ब्रेक"],
    "answer_en": "Page Break",
    "answer_hi": "पेज ब्रेक",
    "explanation_en": "Page Break forces the following content to start on a new page.",
    "explanation_hi": "पेज ब्रेक अगले कंटेंट को नए पेज पर शुरू करने के लिए मजबूर करता है।"
  },
  {
    "num": 13,
    "question_en": "Which alignment makes text even on both sides?",
    "question_hi": "कौन सा एलाइनमेंट टेक्स्ट को दोनों तरफ समान बनाता है?",
    "options_en": ["Justify", "Left", "Right", "Center"],
    "options_hi": ["जस्टिफाई", "लेफ्ट", "राइट", "सेंटर"],
    "answer_en": "Justify",
    "answer_hi": "जस्टिफाई",
    "explanation_en": "Justify alignment spreads text evenly between left and right margins.",
    "explanation_hi": "जस्टिफाई एलाइनमेंट टेक्स्ट को बाएँ और दाएँ मार्जिन के बीच समान रूप से फैलाता है।"
  },
  {
    "num": 14,
    "question_en": "Where are page numbers usually inserted?",
    "question_hi": "पेज नंबर आमतौर पर कहाँ डाले जाते हैं?",
    "options_en": ["Header or Footer", "Title Page", "Middle of Page", "Document End"],
    "options_hi": ["हेडर या फुटर", "टाइटल पेज", "पेज के बीच में", "दस्तावेज़ के अंत में"],
    "answer_en": "Header or Footer",
    "answer_hi": "हेडर या फुटर",
    "explanation_en": "Page numbers are typically placed in header or footer sections for consistency across pages.",
    "explanation_hi": "पेज नंबर आमतौर पर हेडर या फुटर सेक्शन में रखे जाते हैं ताकि सभी पेजों में एकरूपता बनी रहे।"
  },
  {
    "num": 15,
    "question_en": "What feature creates personalized letters?",
    "question_hi": "कौन सी सुविधा व्यक्तिगत पत्र बनाती है?",
    "options_en": ["Mail Merge", "Template", "Macro", "Style"],
    "options_hi": ["मेल मर्ज", "टेम्पलेट", "मैक्रो", "स्टाइल"],
    "answer_en": "Mail Merge",
    "answer_hi": "मेल मर्ज",
    "explanation_en": "Mail Merge combines a main document with a data source to create multiple personalized documents.",
    "explanation_hi": "मेल मर्ज एक मुख्य दस्तावेज़ को डेटा स्रोत के साथ जोड़कर कई व्यक्तिगत दस्तावेज़ बनाता है।"
  },
  {
    "num": 16,
    "question_en": "Which function calculates average?",
    "question_hi": "कौन सा फ़ंक्शन औसत निकालता है?",
    "options_en": ["AVERAGE", "SUM", "COUNT", "MAX"],
    "options_hi": ["AVERAGE", "SUM", "COUNT", "MAX"],
    "answer_en": "AVERAGE",
    "answer_hi": "AVERAGE",
    "explanation_en": "AVERAGE function calculates the mean of selected numbers.",
    "explanation_hi": "AVERAGE फ़ंक्शन चयनित संख्याओं का माध्य निकालता है।"
  },
  {
    "num": 17,
    "question_en": "Which function counts cells with numbers?",
    "question_hi": "कौन सा फ़ंक्शन संख्याओं वाले सेल गिनता है?",
    "options_en": ["COUNT", "COUNTA", "COUNTBLANK", "COUNTIF"],
    "options_hi": ["COUNT", "COUNTA", "COUNTBLANK", "COUNTIF"],
    "answer_en": "COUNT",
    "answer_hi": "COUNT",
    "explanation_en": "COUNT function counts cells containing only numbers in a range.",
    "explanation_hi": "COUNT फ़ंक्शन एक रेंज में केवल संख्याएँ रखने वाले सेल गिनता है।"
  },
  {
    "num": 18,
    "question_en": "Which function finds highest value?",
    "question_hi": "कौन सा फ़ंक्शन सबसे बड़ा मान ढूँढता है?",
    "options_en": ["MAX", "MIN", "SUM", "AVERAGE"],
    "options_hi": ["MAX", "MIN", "SUM", "AVERAGE"],
    "answer_en": "MAX",
    "answer_hi": "MAX",
    "explanation_en": "MAX function returns the largest value in a set of values.",
    "explanation_hi": "MAX फ़ंक्शन मानों के एक सेट में सबसे बड़ा मान लौटाता है।"
  },
  {
    "num": 19,
    "question_en": "What is absolute cell reference in Excel?",
    "question_hi": "Excel में एब्सोल्यूट सेल रेफरेंस क्या है?",
    "options_en": ["$A$1", "A1", "A$1", "$A1"],
    "options_hi": ["$A$1", "A1", "A$1", "$A1"],
    "answer_en": "$A$1",
    "answer_hi": "$A$1",
    "explanation_en": "$A$1 is absolute reference where both column and row remain fixed when copied.",
    "explanation_hi": "$A$1 एब्सोल्यूट रेफरेंस है जहाँ कॉलम और पंक्ति दोनों कॉपी करने पर स्थिर रहते हैं।"
  },
  {
    "num": 20,
    "question_en": "What represents data visually in spreadsheet?",
    "question_hi": "स्प्रेडशीट में डेटा का दृश्य प्रतिनिधित्व क्या करता है?",
    "options_en": ["Chart", "Formula", "Function", "Filter"],
    "options_hi": ["चार्ट", "फॉर्मूला", "फ़ंक्शन", "फ़िल्टर"],
    "answer_en": "Chart",
    "answer_hi": "चार्ट",
    "explanation_en": "Charts provide visual representation of spreadsheet data for better understanding.",
    "explanation_hi": "चार्ट स्प्रेडशीट डेटा का दृश्य प्रतिनिधित्व प्रदान करते हैं जिससे बेहतर समझ बनती है।"
  },
  {
    "num": 21,
    "question_en": "Which key starts slideshow in Impress?",
    "question_hi": "Impress में स्लाइडशो किस कुंजी से शुरू होता है?",
    "options_en": ["F5", "F1", "F7", "F12"],
    "options_hi": ["F5", "F1", "F7", "F12"],
    "answer_en": "F5",
    "answer_hi": "F5",
    "explanation_en": "F5 key starts presentation from the beginning in most presentation software.",
    "explanation_hi": "F5 कुंजी अधिकांश प्रेजेंटेशन सॉफ़्टवेयर में शुरुआत से प्रेजेंटेशन शुरू करती है।"
  },
  {
    "num": 22,
    "question_en": "What adds movement to objects in slides?",
    "question_hi": "स्लाइड में ऑब्जेक्ट्स को गति क्या देता है?",
    "options_en": ["Animation", "Transition", "Hyperlink", "Template"],
    "options_hi": ["एनिमेशन", "ट्रांजिशन", "हाइपरलिंक", "टेम्पलेट"],
    "answer_en": "Animation",
    "answer_hi": "एनिमेशन",
    "explanation_en": "Animation controls how objects enter, move, or exit on a slide.",
    "explanation_hi": "एनिमेशन नियंत्रित करता है कि स्लाइड पर ऑब्जेक्ट कैसे प्रवेश करते हैं, चलते हैं या बाहर निकलते हैं।"
  },
  {
    "num": 23,
    "question_en": "Which slide controls overall design?",
    "question_hi": "कौन सी स्लाइड समग्र डिज़ाइन नियंत्रित करती है?",
    "options_en": ["Master Slide", "Title Slide", "Content Slide", "End Slide"],
    "options_hi": ["मास्टर स्लाइड", "टाइटल स्लाइड", "कंटेंट स्लाइड", "अंत स्लाइड"],
    "answer_en": "Master Slide",
    "answer_hi": "मास्टर स्लाइड",
    "explanation_en": "Master Slide defines the layout, design, and formatting for all slides in a presentation.",
    "explanation_hi": "मास्टर स्लाइड प्रेजेंटेशन में सभी स्लाइडों के लिए लेआउट, डिज़ाइन और फ़ॉर्मेटिंग निर्धारित करती है।"
  },
  {
    "num": 24,
    "question_en": "What links to another slide or file?",
    "question_hi": "क्या दूसरी स्लाइड या फ़ाइल से लिंक करता है?",
    "options_en": ["Hyperlink", "Bookmark", "Reference", "Shortcut"],
    "options_hi": ["हाइपरलिंक", "बुकमार्क", "संदर्भ", "शॉर्टकट"],
    "answer_en": "Hyperlink",
    "answer_hi": "हाइपरलिंक",
    "explanation_en": "Hyperlink connects text or object to another slide, document, or webpage.",
    "explanation_hi": "हाइपरलिंक टेक्स्ट या ऑब्जेक्ट को दूसरी स्लाइड, दस्तावेज़ या वेबपेज से जोड़ता है।"
  },
  {
    "num": 25,
    "question_en": "What is the shortcut to insert new slide?",
    "question_hi": "नई स्लाइड डालने की शॉर्टकट क्या है?",
    "options_en": ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + M",
    "answer_hi": "Ctrl + M",
    "explanation_en": "Ctrl + M inserts a new slide with default layout in presentation software.",
    "explanation_hi": "Ctrl + M प्रेजेंटेशन सॉफ़्टवेयर में डिफ़ॉल्ट लेआउट के साथ नई स्लाइड डालता है।"
  },
  {
    "num": 26,
    "question_en": "What software accesses websites?",
    "question_hi": "कौन सा सॉफ़्टवेयर वेबसाइटों तक पहुँचता है?",
    "options_en": ["Web Browser", "Word Processor", "Spreadsheet", "Email Client"],
    "options_hi": ["वेब ब्राउज़र", "वर्ड प्रोसेसर", "स्प्रेडशीट", "ईमेल क्लाइंट"],
    "answer_en": "Web Browser",
    "answer_hi": "वेब ब्राउज़र",
    "explanation_en": "Web browsers like Chrome, Firefox, and Edge allow users to view websites.",
    "explanation_hi": "क्रोम, फ़ायरफ़ॉक्स और एज जैसे वेब ब्राउज़र उपयोगकर्ताओं को वेबसाइट देखने की अनुमति देते हैं।"
  },
  {
    "num": 27,
    "question_en": "What saves files from internet to computer?",
    "question_hi": "क्या इंटरनेट से फ़ाइलें कंप्यूटर में सहेजता है?",
    "options_en": ["Downloading", "Uploading", "Streaming", "Browsing"],
    "options_hi": ["डाउनलोडिंग", "अपलोडिंग", "स्ट्रीमिंग", "ब्राउज़िंग"],
    "answer_en": "Downloading",
    "answer_hi": "डाउनलोडिंग",
    "explanation_en": "Downloading transfers files from a remote server to your local device.",
    "explanation_hi": "डाउनलोडिंग रिमोट सर्वर से आपके स्थानीय उपकरण पर फ़ाइलें स्थानांतरित करती है।"
  },
  {
    "num": 28,
    "question_en": "What helps find information on internet?",
    "question_hi": "इंटरनेट पर जानकारी ढूँढने में क्या मदद करता है?",
    "options_en": ["Search Engine", "Web Browser", "Email", "Social Media"],
    "options_hi": ["सर्च इंजन", "वेब ब्राउज़र", "ईमेल", "सोशल मीडिया"],
    "answer_en": "Search Engine",
    "answer_hi": "सर्च इंजन",
    "explanation_en": "Search engines like Google index web pages and help users find specific information.",
    "explanation_hi": "गूगल जैसे सर्च इंजन वेब पेजों को इंडेक्स करते हैं और उपयोगकर्ताओं को विशिष्ट जानकारी ढूँढने में मदद करते हैं।"
  },
  {
    "num": 29,
    "question_en": "What is the first page of a website called?",
    "question_hi": "वेबसाइट के पहले पेज को क्या कहते हैं?",
    "options_en": ["Homepage", "Index Page", "Main Page", "All of these"],
    "options_hi": ["होमपेज", "इंडेक्स पेज", "मुख्य पृष्ठ", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "explanation_en": "Homepage, index page, and main page are all terms for the starting page of a website.",
    "explanation_hi": "होमपेज, इंडेक्स पेज और मुख्य पृष्ठ सभी वेबसाइट के शुरुआती पेज के लिए शब्द हैं।"
  },
  {
    "num": 30,
    "question_en": "What saves website addresses for quick access?",
    "question_hi": "त्वरित पहुँच के लिए वेबसाइट पते क्या सहेजते हैं?",
    "options_en": ["Bookmarks/Favorites", "History", "Cookies", "Cache"],
    "options_hi": ["बुकमार्क/फेवरिट्स", "इतिहास", "कुकीज़", "कैश"],
    "answer_en": "Bookmarks/Favorites",
    "answer_hi": "बुकमार्क/फेवरिट्स",
    "explanation_en": "Bookmarks (or Favorites) save website URLs so you can return to them quickly.",
    "explanation_hi": "बुकमार्क (या फेवरिट्स) वेबसाइट यूआरएल सहेजते हैं ताकि आप उन पर जल्दी लौट सकें।"
  },
  {
    "num": 31,
    "question_en": "What does CC stand for in email?",
    "question_hi": "ईमेल में CC का क्या अर्थ है?",
    "options_en": ["Carbon Copy", "Courtesy Copy", "Computer Copy", "Client Copy"],
    "options_hi": ["कार्बन कॉपी", "कॉर्टिसी कॉपी", "कंप्यूटर कॉपी", "क्लाइंट कॉपी"],
    "answer_en": "Carbon Copy",
    "answer_hi": "कार्बन कॉपी",
    "explanation_en": "CC (Carbon Copy) sends a copy of the email to additional recipients who are not the primary addressee.",
    "explanation_hi": "CC (कार्बन कॉपी) ईमेल की एक कॉपी अतिरिक्त प्राप्तकर्ताओं को भेजता है जो प्राथमिक पते नहीं हैं।"
  },
  {
    "num": 32,
    "question_en": "What should an email subject line be?",
    "question_hi": "ईमेल सब्जेक्ट लाइन कैसी होनी चाहिए?",
    "options_en": ["Brief and Clear", "Very Long", "Blank", "In Code"],
    "options_hi": ["संक्षिप्त और स्पष्ट", "बहुत लंबी", "खाली", "कोड में"],
    "answer_en": "Brief and Clear",
    "answer_hi": "संक्षिप्त और स्पष्ट",
    "explanation_en": "Subject line should concisely summarize email content for quick understanding.",
    "explanation_hi": "सब्जेक्ट लाइन त्वरित समझ के लिए ईमेल सामग्री को संक्षेप में प्रस्तुत करनी चाहिए।"
  },
  {
    "num": 33,
    "question_en": "What sends files with an email?",
    "question_hi": "ईमेल के साथ फ़ाइलें क्या भेजता है?",
    "options_en": ["Attachment", "Embedding", "Linking", "Inserting"],
    "options_hi": ["अटैचमेंट", "एम्बेडिंग", "लिंकिंग", "इन्सर्टिंग"],
    "answer_en": "Attachment",
    "answer_hi": "अटैचमेंट",
    "explanation_en": "Attachments are files sent along with an email message.",
    "explanation_hi": "अटैचमेंट ईमेल संदेश के साथ भेजी जाने वाली फ़ाइलें हैं।"
  },
  {
    "num": 34,
    "question_en": "Where are received emails stored?",
    "question_hi": "प्राप्त ईमेल कहाँ संग्रहीत होते हैं?",
    "options_en": ["Inbox", "Sent Items", "Drafts", "Trash"],
    "options_hi": ["इनबॉक्स", "भेजे गए आइटम", "ड्राफ्ट", "कचरा"],
    "answer_en": "Inbox",
    "answer_hi": "इनबॉक्स",
    "explanation_en": "Inbox is the default folder where incoming emails are stored.",
    "explanation_hi": "इनबॉक्स डिफ़ॉल्ट फ़ोल्डर है जहाँ आने वाले ईमेल संग्रहीत होते हैं।"
  },
  {
    "num": 35,
    "question_en": "Where do spam emails go?",
    "question_hi": "स्पैम ईमेल कहाँ जाते हैं?",
    "options_en": ["Spam/Junk Folder", "Inbox", "Drafts", "Sent"],
    "options_hi": ["स्पैम/जंक फ़ोल्डर", "इनबॉक्स", "ड्राफ्ट", "भेजे गए"],
    "answer_en": "Spam/Junk Folder",
    "answer_hi": "स्पैम/जंक फ़ोल्डर",
    "explanation_en": "Spam filters automatically move unwanted emails to Spam or Junk folder.",
    "explanation_hi": "स्पैम फ़िल्टर स्वचालित रूप से अवांछित ईमेल को स्पैम या जंक फ़ोल्डर में ले जाते हैं।"
  },
  {
    "num": 36,
    "question_en": "What protects computer from viruses?",
    "question_hi": "कंप्यूटर को वायरस से क्या बचाता है?",
    "options_en": ["Antivirus Software", "Firewall", "Both", "None"],
    "options_hi": ["एंटीवायरस सॉफ़्टवेयर", "फ़ायरवॉल", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "explanation_en": "Antivirus detects malware while firewall blocks unauthorized access - both provide protection.",
    "explanation_hi": "एंटीवायरस मैलवेयर का पता लगाता है जबकि फ़ायरवॉल अनधिकृत पहुँच रोकता है - दोनों सुरक्षा प्रदान करते हैं।"
  },
  {
    "num": 37,
    "question_en": "What provides basic computer security?",
    "question_hi": "बुनियादी कंप्यूटर सुरक्षा क्या प्रदान करती है?",
    "options_en": ["Strong Password", "Antivirus", "Firewall", "All of these"],
    "options_hi": ["मजबूत पासवर्ड", "एंटीवायरस", "फ़ायरवॉल", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "explanation_en": "Strong password, antivirus, and firewall together form basic computer security.",
    "explanation_hi": "मजबूत पासवर्ड, एंटीवायरस और फ़ायरवॉल मिलकर बुनियादी कंप्यूटर सुरक्षा बनाते हैं।"
  },
  {
    "num": 38,
    "question_en": "What blocks unauthorized network access?",
    "question_hi": "अनधिकृत नेटवर्क पहुँच क्या रोकता है?",
    "options_en": ["Firewall", "Antivirus", "Password", "Encryption"],
    "options_hi": ["फ़ायरवॉल", "एंटीवायरस", "पासवर्ड", "एन्क्रिप्शन"],
    "answer_en": "Firewall",
    "answer_hi": "फ़ायरवॉल",
    "explanation_en": "Firewall monitors and controls incoming and outgoing network traffic based on security rules.",
    "explanation_hi": "फ़ायरवॉल सुरक्षा नियमों के आधार पर आने वाले और जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करता है।"
  },
  {
    "num": 39,
    "question_en": "What creates copy of data for safety?",
    "question_hi": "सुरक्षा के लिए डेटा की प्रतिलिपि क्या बनाता है?",
    "options_en": ["Backup", "Restore", "Copy", "Paste"],
    "options_hi": ["बैकअप", "रिस्टोर", "कॉपी", "पेस्ट"],
    "answer_en": "Backup",
    "answer_hi": "बैकअप",
    "explanation_en": "Backup creates duplicate copies of data to restore in case of data loss.",
    "explanation_hi": "बैकअप डेटा हानि की स्थिति में पुनर्स्थापित करने के लिए डेटा की डुप्लिकेट प्रतियाँ बनाता है।"
  },
  {
    "num": 40,
    "question_en": "What is fake email to steal information called?",
    "question_hi": "जानकारी चुराने के लिए नकली ईमेल को क्या कहते हैं?",
    "options_en": ["Phishing", "Spamming", "Hacking", "Virusing"],
    "options_hi": ["फ़िशिंग", "स्पैमिंग", "हैकिंग", "वायरसिंग"],
    "answer_en": "Phishing",
    "answer_hi": "फ़िशिंग",
    "explanation_en": "Phishing emails pretend to be from legitimate sources to trick users into revealing sensitive information.",
    "explanation_hi": "फ़िशिंग ईमेल वैध स्रोतों से होने का नाटक करते हैं ताकि उपयोगकर्ताओं को संवेदनशील जानकारी प्रकट करने में फँसाया जा सके।"
  },
  {
    "num": 41,
    "question_en": "What organizes files in computer?",
    "question_hi": "कंप्यूटर में फ़ाइलों को क्या व्यवस्थित करता है?",
    "options_en": ["Folder/Directory", "File", "Document", "Program"],
    "options_hi": ["फ़ोल्डर/डायरेक्टरी", "फ़ाइल", "दस्तावेज़", "प्रोग्राम"],
    "answer_en": "Folder/Directory",
    "answer_hi": "फ़ोल्डर/डायरेक्टरी",
    "explanation_en": "Folders (directories) help organize files into logical groups for easy management.",
    "explanation_hi": "फ़ोल्डर (डायरेक्टरी) फ़ाइलों को आसान प्रबंधन के लिए तार्किक समूहों में व्यवस्थित करने में मदद करते हैं।"
  },
  {
    "num": 42,
    "question_en": "What duplicates files to another location?",
    "question_hi": "फ़ाइलों को दूसरे स्थान पर डुप्लिकेट क्या करता है?",
    "options_en": ["Copy and Paste", "Cut and Paste", "Delete", "Move"],
    "options_hi": ["कॉपी और पेस्ट", "कट और पेस्ट", "डिलीट", "मूव"],
    "answer_en": "Copy and Paste",
    "answer_hi": "कॉपी और पेस्ट",
    "explanation_en": "Copy creates duplicate of file, Paste places it in new location while keeping original.",
    "explanation_hi": "कॉपी फ़ाइल की डुप्लिकेट बनाता है, पेस्ट इसे नए स्थान पर रखता है जबकि मूल फ़ाइल रहती है।"
  },
  {
    "num": 43,
    "question_en": "What is PDF file format used for?",
    "question_hi": "PDF फ़ाइल फ़ॉर्मेट किसके लिए उपयोग किया जाता है?",
    "options_en": ["Documents", "Images", "Videos", "Music"],
    "options_hi": ["दस्तावेज़", "चित्र", "वीडियो", "संगीत"],
    "answer_en": "Documents",
    "answer_hi": "दस्तावेज़",
    "explanation_en": "PDF (Portable Document Format) preserves document formatting across different devices.",
    "explanation_hi": "PDF (पोर्टेबल दस्तावेज़ प्रारूप) विभिन्न उपकरणों में दस्तावेज़ फ़ॉर्मेटिंग संरक्षित रखता है।"
  },
  {
    "num": 44,
    "question_en": "What is common image file format?",
    "question_hi": "सामान्य इमेज फ़ाइल फ़ॉर्मेट क्या है?",
    "options_en": ["JPEG", "MP3", "DOC", "PDF"],
    "options_hi": ["JPEG", "MP3", "DOC", "PDF"],
    "answer_en": "JPEG",
    "answer_hi": "JPEG",
    "explanation_en": "JPEG (Joint Photographic Experts Group) is widely used compressed image format.",
    "explanation_hi": "JPEG (जॉइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप) व्यापक रूप से उपयोग किया जाने वाला संपीड़ित इमेज प्रारूप है।"
  },
  {
    "num": 45,
    "question_en": "What is audio file format?",
    "question_hi": "ऑडियो फ़ाइल फ़ॉर्मेट क्या है?",
    "options_en": ["MP3", "JPEG", "DOCX", "PDF"],
    "options_hi": ["MP3", "JPEG", "DOCX", "PDF"],
    "answer_en": "MP3",
    "answer_hi": "MP3",
    "explanation_en": "MP3 is compressed audio format that reduces file size while maintaining sound quality.",
    "explanation_hi": "MP3 संपीड़ित ऑडियो प्रारूप है जो ध्वनि गुणवत्ता बनाए रखते हुए फ़ाइल आकार कम करता है।"
  },
  {
    "num": 46,
    "question_en": "What language creates web pages?",
    "question_hi": "वेब पेज बनाने की भाषा क्या है?",
    "options_en": ["HTML", "Java", "Python", "C++"],
    "options_hi": ["HTML", "जावा", "पायथन", "C++"],
    "answer_en": "HTML",
    "answer_hi": "HTML",
    "explanation_en": "HTML (HyperText Markup Language) is standard language for creating web pages.",
    "explanation_hi": "HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज) वेब पेज बनाने की मानक भाषा है।"
  },
  {
    "num": 47,
    "question_en": "What is open source software?",
    "question_hi": "ओपन सोर्स सॉफ़्टवेयर क्या है?",
    "options_en": ["Source code available", "Free always", "Both", "Neither"],
    "options_hi": ["सोर्स कोड उपलब्ध", "हमेशा मुफ्त", "दोनों", "न ही"],
    "answer_en": "Source code available",
    "answer_hi": "सोर्स कोड उपलब्ध",
    "explanation_en": "Open source software has publicly accessible source code that can be modified.",
    "explanation_hi": "ओपन सोर्स सॉफ़्टवेयर में सार्वजनिक रूप से सुलभ सोर्स कोड होता है जिसे संशोधित किया जा सकता है।"
  },
  {
    "num": 48,
    "question_en": "What stores data on internet servers?",
    "question_hi": "इंटरनेट सर्वर पर डेटा क्या संग्रहीत करता है?",
    "options_en": ["Cloud Storage", "Hard Disk", "Pen Drive", "CD"],
    "options_hi": ["क्लाउड स्टोरेज", "हार्ड डिस्क", "पेन ड्राइव", "CD"],
    "answer_en": "Cloud Storage",
    "answer_hi": "क्लाउड स्टोरेज",
    "explanation_en": "Cloud storage saves data on remote servers accessed via internet instead of local drives.",
    "explanation_hi": "क्लाउड स्टोरेज स्थानीय ड्राइव के बजाय इंटरनेट के माध्यम से एक्सेस किए गए रिमोट सर्वर पर डेटा सहेजता है।"
  },
  {
    "num": 49,
    "question_en": "What is online shopping called?",
    "question_hi": "ऑनलाइन खरीदारी को क्या कहते हैं?",
    "options_en": ["E-commerce", "E-banking", "E-learning", "E-governance"],
    "options_hi": ["ई-कॉमर्स", "ई-बैंकिंग", "ई-लर्निंग", "ई-गवर्नेंस"],
    "answer_en": "E-commerce",
    "answer_hi": "ई-कॉमर्स",
    "explanation_en": "E-commerce involves buying and selling goods/services over the internet.",
    "explanation_hi": "ई-कॉमर्स में इंटरनेट पर सामान/सेवाएँ खरीदना और बेचना शामिल है।"
  },
  {
    "num": 50,
    "question_en": "What promotes digital literacy in India?",
    "question_hi": "भारत में डिजिटल साक्षरता को क्या बढ़ावा देता है?",
    "options_en": ["Digital India", "Make in India", "Swachh Bharat", "Skill India"],
    "options_hi": ["डिजिटल इंडिया", "मेक इन इंडिया", "स्वच्छ भारत", "स्किल इंडिया"],
    "answer_en": "Digital India",
    "answer_hi": "डिजिटल इंडिया",
    "explanation_en": "Digital India initiative aims to transform India into digitally empowered society.",
    "explanation_hi": "डिजिटल इंडिया पहल का उद्देश्य भारत को डिजिटल रूप से सशक्त समाज में बदलना है।"
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

