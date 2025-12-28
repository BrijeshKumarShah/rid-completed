const questions = [
   {
    "num": 1,
    "question_en": "What is the full form of HTML?",
    "question_hi": "HTML का पूर्ण रूप क्या है?",
    "options_en": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "High Transfer Machine Language"],
    "options_hi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक्स्ट मशीन लैंग्वेज", "हाइपर ट्रांसफर मार्कअप लैंग्वेज", "हाई ट्रांसफर मशीन लैंग्वेज"],
    "answer_en": "Hyper Text Markup Language",
    "answer_hi": "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
    "explanation_en": "HTML stands for Hyper Text Markup Language, used to create web pages.",
    "explanation_hi": "HTML का अर्थ है हाइपर टेक्स्ट मार्कअप लैंग्वेज, जिसका उपयोग वेब पेज बनाने के लिए किया जाता है।"
  },
  {
    "num": 2,
    "question_en": "Which tag is used to create the largest heading in HTML?",
    "question_hi": "HTML में सबसे बड़ा हेडिंग बनाने के लिए किस टैग का उपयोग होता है?",
    "options_en": ["<h1>", "<h6>", "<head>", "<header>"],
    "options_hi": ["<h1>", "<h6>", "<head>", "<header>"],
    "answer_en": "<h1>",
    "answer_hi": "<h1>",
    "explanation_en": "<h1> tag is used for the largest heading, while <h6> is the smallest.",
    "explanation_hi": "<h1> टैग का उपयोग सबसे बड़े हेडिंग के लिए होता है, जबकि <h6> सबसे छोटा होता है।"
  },
  {
    "num": 3,
    "question_en": "Which of the following is a network security device?",
    "question_hi": "निम्नलिखित में से कौन एक नेटवर्क सुरक्षा उपकरण है?",
    "options_en": ["Firewall", "Modem", "Router", "Hub"],
    "options_hi": ["फ़ायरवॉल", "मॉडेम", "राउटर", "हब"],
    "answer_en": "Firewall",
    "answer_hi": "फ़ायरवॉल",
    "explanation_en": "Firewall monitors and controls incoming and outgoing network traffic based on security rules.",
    "explanation_hi": "फ़ायरवॉल सुरक्षा नियमों के आधार पर आने-जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करता है।"
  },
  {
    "num": 4,
    "question_en": "Which protocol is used for sending emails?",
    "question_hi": "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SMTP", "HTTP", "FTP", "TCP"],
    "options_hi": ["SMTP", "HTTP", "FTP", "TCP"],
    "answer_en": "SMTP",
    "answer_hi": "SMTP",
    "explanation_en": "SMTP (Simple Mail Transfer Protocol) is used for sending emails.",
    "explanation_hi": "SMTP (सिंपल मेल ट्रांसफर प्रोटोकॉल) का उपयोग ईमेल भेजने के लिए किया जाता है।"
  },
  {
    "num": 5,
    "question_en": "What is the full form of URL?",
    "question_hi": "URL का पूर्ण रूप क्या है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Read Link", "Universal Read Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रीड लिंक", "यूनिवर्सल रीड लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL is the address of a resource on the internet.",
    "explanation_hi": "URL इंटरनेट पर किसी संसाधन का पता होता है।"
  },
  {
    "num": 6,
    "question_en": "Which software is used to create presentations?",
    "question_hi": "प्रेजेंटेशन बनाने के लिए किस सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["OpenOffice Impress", "OpenOffice Calc", "OpenOffice Writer", "OpenOffice Base"],
    "options_hi": ["ओपनऑफिस इम्प्रेस", "ओपनऑफिस कैल्क", "ओपनऑफिस राइटर", "ओपनऑफिस बेस"],
    "answer_en": "OpenOffice Impress",
    "answer_hi": "ओपनऑफिस इम्प्रेस",
    "explanation_en": "OpenOffice Impress is specifically designed for creating presentations.",
    "explanation_hi": "ओपनऑफिस इम्प्रेस विशेष रूप से प्रेजेंटेशन बनाने के लिए डिज़ाइन किया गया है।"
  },
  {
    "num": 7,
    "question_en": "Which of the following is an example of a web browser?",
    "question_hi": "निम्नलिखित में से कौन वेब ब्राउज़र का उदाहरण है?",
    "options_en": ["Mozilla Firefox", "Microsoft Word", "Adobe Photoshop", "VLC Media Player"],
    "options_hi": ["मोज़िला फ़ायरफ़ॉक्स", "माइक्रोसॉफ्ट वर्ड", "एडोब फ़ोटोशॉप", "VLC मीडिया प्लेयर"],
    "answer_en": "Mozilla Firefox",
    "answer_hi": "मोज़िला फ़ायरफ़ॉक्स",
    "explanation_en": "Mozilla Firefox is a popular web browser used to access websites.",
    "explanation_hi": "मोज़िला फ़ायरफ़ॉक्स एक लोकप्रिय वेब ब्राउज़र है जिसका उपयोग वेबसाइटों तक पहुँचने के लिए किया जाता है।"
  },
  {
    "num": 8,
    "question_en": "What does CSS stand for?",
    "question_hi": "CSS का क्या अर्थ है?",
    "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल सिस्टम", "कलरफुल स्टाइल शीट्स"],
    "answer_en": "Cascading Style Sheets",
    "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
    "explanation_en": "CSS is used to style and layout web pages.",
    "explanation_hi": "CSS का उपयोग वेब पेजों को स्टाइल और लेआउट करने के लिए किया जाता है।"
  },
  {
    "num": 9,
    "question_en": "Which tag is used to insert an image in HTML?",
    "question_hi": "HTML में छवि डालने के लिए किस टैग का उपयोग होता है?",
    "options_en": ["<img>", "<image>", "<picture>", "<photo>"],
    "options_hi": ["<img>", "<image>", "<picture>", "<photo>"],
    "answer_en": "<img>",
    "answer_hi": "<img>",
    "explanation_en": "<img> tag with src attribute is used to insert images in HTML.",
    "explanation_hi": "HTML में छवियाँ डालने के लिए src विशेषता के साथ <img> टैग का उपयोग किया जाता है।"
  },
  {
    "num": 10,
    "question_en": "Which of the following is NOT a type of computer network?",
    "question_hi": "निम्नलिखित में से कौन कंप्यूटर नेटवर्क का प्रकार नहीं है?",
    "options_en": ["MAN", "LAN", "WAN", "CAN"],
    "options_hi": ["MAN", "LAN", "WAN", "CAN"],
    "answer_en": "CAN",
    "answer_hi": "CAN",
    "explanation_en": "Common network types are LAN, MAN, WAN, PAN. CAN is not a standard network type.",
    "explanation_hi": "सामान्य नेटवर्क प्रकार LAN, MAN, WAN, PAN हैं। CAN एक मानक नेटवर्क प्रकार नहीं है।"
  },
  {
    "num": 11,
    "question_en": "What is the purpose of a search engine?",
    "question_hi": "सर्च इंजन का उद्देश्य क्या है?",
    "options_en": ["To find information on the internet", "To create documents", "To protect from viruses", "To send emails"],
    "options_hi": ["इंटरनेट पर जानकारी ढूंढना", "दस्तावेज़ बनाना", "वायरस से सुरक्षा करना", "ईमेल भेजना"],
    "answer_en": "To find information on the internet",
    "answer_hi": "इंटरनेट पर जानकारी ढूंढना",
    "explanation_en": "Search engines like Google help users find information on the internet.",
    "explanation_hi": "गूगल जैसे सर्च इंजन उपयोगकर्ताओं को इंटरनेट पर जानकारी ढूंढने में मदद करते हैं।"
  },
  {
    "num": 12,
    "question_en": "Which of the following is an example of a spreadsheet software?",
    "question_hi": "निम्नलिखित में से कौन स्प्रेडशीट सॉफ्टवेयर का उदाहरण है?",
    "options_en": ["OpenOffice Calc", "OpenOffice Writer", "OpenOffice Impress", "OpenOffice Base"],
    "options_hi": ["ओपनऑफिस कैल्क", "ओपनऑफिस राइटर", "ओपनऑफिस इम्प्रेस", "ओपनऑफिस बेस"],
    "answer_en": "OpenOffice Calc",
    "answer_hi": "ओपनऑफिस कैल्क",
    "explanation_en": "OpenOffice Calc is a spreadsheet program used for calculations and data analysis.",
    "explanation_hi": "ओपनऑफिस कैल्क एक स्प्रेडशीट प्रोग्राम है जिसका उपयोग गणनाओं और डेटा विश्लेषण के लिए किया जाता है।"
  },
  {
    "num": 13,
    "question_en": "What does HTTP stand for?",
    "question_hi": "HTTP का क्या अर्थ है?",
    "options_en": ["Hyper Text Transfer Protocol", "High Tech Transfer Process", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"],
    "options_hi": ["हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक ट्रांसफर प्रोसेस", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल"],
    "answer_en": "Hyper Text Transfer Protocol",
    "answer_hi": "हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल",
    "explanation_en": "HTTP is the protocol used for transferring web pages on the internet.",
    "explanation_hi": "HTTP वह प्रोटोकॉल है जिसका उपयोग इंटरनेट पर वेब पेज स्थानांतरित करने के लिए किया जाता है।"
  },
  {
    "num": 14,
    "question_en": "Which tag is used to create a hyperlink in HTML?",
    "question_hi": "HTML में हाइपरलिंक बनाने के लिए किस टैग का उपयोग होता है?",
    "options_en": ["<a>", "<link>", "<href>", "<url>"],
    "options_hi": ["<a>", "<link>", "<href>", "<url>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "explanation_en": "<a> tag with href attribute creates hyperlinks in HTML.",
    "explanation_hi": "href विशेषता के साथ <a> टैग HTML में हाइपरलिंक बनाता है।"
  },
  {
    "num": 15,
    "question_en": "What is the purpose of antivirus software?",
    "question_hi": "एंटीवायरस सॉफ्टवेयर का उद्देश्य क्या है?",
    "options_en": ["To detect and remove viruses", "To create documents", "To browse the internet", "To calculate data"],
    "options_hi": ["वायरस का पता लगाना और हटाना", "दस्तावेज़ बनाना", "इंटरनेट ब्राउज़ करना", "डेटा की गणना करना"],
    "answer_en": "To detect and remove viruses",
    "answer_hi": "वायरस का पता लगाना और हटाना",
    "explanation_en": "Antivirus software protects computers from malicious software and viruses.",
    "explanation_hi": "एंटीवायरस सॉफ्टवेयर कंप्यूटर को दुर्भावनापूर्ण सॉफ्टवेयर और वायरस से बचाता है।"
  },
  {
    "num": 16,
    "question_en": "Which OpenOffice component is used for word processing?",
    "question_hi": "वर्ड प्रोसेसिंग के लिए किस ओपनऑफिस घटक का उपयोग किया जाता है?",
    "options_en": ["OpenOffice Writer", "OpenOffice Calc", "OpenOffice Impress", "OpenOffice Base"],
    "options_hi": ["ओपनऑफिस राइटर", "ओपनऑफिस कैल्क", "ओपनऑफिस इम्प्रेस", "ओपनऑफिस बेस"],
    "answer_en": "OpenOffice Writer",
    "answer_hi": "ओपनऑफिस राइटर",
    "explanation_en": "OpenOffice Writer is a word processor for creating and editing documents.",
    "explanation_hi": "ओपनऑफिस राइटर दस्तावेज़ बनाने और संपादित करने के लिए एक वर्ड प्रोसेसर है।"
  },
  {
    "num": 17,
    "question_en": "What is the full form of LAN?",
    "question_hi": "LAN का पूर्ण रूप क्या है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "explanation_en": "LAN connects computers in a small area like a building or office.",
    "explanation_hi": "LAN एक इमारत या कार्यालय जैसे छोटे क्षेत्र में कंप्यूटरों को जोड़ता है।"
  },
  {
    "num": 18,
    "question_en": "Which symbol is used to start a formula in OpenOffice Calc?",
    "question_hi": "ओपनऑफिस कैल्क में सूत्र शुरू करने के लिए किस चिन्ह का उपयोग किया जाता है?",
    "options_en": ["=", "+", "#", "@"],
    "options_hi": ["=", "+", "#", "@"],
    "answer_en": "=",
    "answer_hi": "=",
    "explanation_en": "All formulas in OpenOffice Calc must begin with the equals (=) sign.",
    "explanation_hi": "ओपनऑफिस कैल्क में सभी सूत्र बराबर (=) चिन्ह से शुरू होने चाहिए।"
  },
  {
    "num": 19,
    "question_en": "What does 'CC' stand for in email?",
    "question_hi": "ईमेल में 'CC' का क्या अर्थ है?",
    "options_en": ["Carbon Copy", "Computer Copy", "Credit Card", "Content Copy"],
    "options_hi": ["कार्बन कॉपी", "कंप्यूटर कॉपी", "क्रेडिट कार्ड", "कंटेंट कॉपी"],
    "answer_en": "Carbon Copy",
    "answer_hi": "कार्बन कॉपी",
    "explanation_en": "CC sends a copy of the email to additional recipients.",
    "explanation_hi": "CC ईमेल की एक प्रति अतिरिक्त प्राप्तकर्ताओं को भेजता है।"
  },
  {
    "num": 20,
    "question_en": "Which of these is a programming language?",
    "question_hi": "इनमें से कौन एक प्रोग्रामिंग भाषा है?",
    "options_en": ["Python", "HTML", "CSS", "HTTP"],
    "options_hi": ["पाइथन", "HTML", "CSS", "HTTP"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "explanation_en": "Python is a programming language, while HTML and CSS are markup and styling languages.",
    "explanation_hi": "पाइथन एक प्रोग्रामिंग भाषा है, जबकि HTML और CSS मार्कअप और स्टाइलिंग भाषाएँ हैं।"
  },
  [
  {
    "num": 21,
    "question_en": "What is the purpose of the 'SUM' function in OpenOffice Calc?",
    "question_hi": "ओपनऑफिस कैल्क में 'SUM' फ़ंक्शन का क्या उद्देश्य है?",
    "options_en": ["To add numbers", "To find average", "To multiply numbers", "To count cells"],
    "options_hi": ["संख्याओं को जोड़ना", "औसत निकालना", "संख्याओं को गुणा करना", "सेल गिनना"],
    "answer_en": "To add numbers",
    "answer_hi": "संख्याओं को जोड़ना",
    "explanation_en": "SUM function adds all numbers in a range of cells.",
    "explanation_hi": "SUM फ़ंक्शन सेलों की एक श्रृंखला में सभी संख्याओं को जोड़ता है।"
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to create an ordered list?",
    "question_hi": "क्रमबद्ध सूची बनाने के लिए किस HTML टैग का उपयोग किया जाता है?",
    "options_en": ["<ol>", "<ul>", "<li>", "<list>"],
    "options_hi": ["<ol>", "<ul>", "<li>", "<list>"],
    "answer_en": "<ol>",
    "answer_hi": "<ol>",
    "explanation_en": "<ol> creates an ordered (numbered) list, while <ul> creates an unordered list.",
    "explanation_hi": "<ol> एक क्रमबद्ध (संख्या सहित) सूची बनाता है, जबकि <ul> एक अक्रमबद्ध सूची बनाता है।"
  },
  {
    "num": 23,
    "question_en": "What does WAN stand for?",
    "question_hi": "WAN का क्या अर्थ है?",
    "options_en": ["Wide Area Network", "World Area Network", "Wireless Area Network", "Web Access Network"],
    "options_hi": ["वाइड एरिया नेटवर्क", "वर्ल्ड एरिया नेटवर्क", "वायरलेस एरिया नेटवर्क", "वेब एक्सेस नेटवर्क"],
    "answer_en": "Wide Area Network",
    "answer_hi": "वाइड एरिया नेटवर्क",
    "explanation_en": "WAN covers a large geographical area like a country or continent.",
    "explanation_hi": "WAN एक बड़े भौगोलिक क्षेत्र जैसे देश या महाद्वीप को कवर करता है।"
  },
  {
    "num": 24,
    "question_en": "Which feature in OpenOffice Writer checks spelling errors?",
    "question_hi": "ओपनऑफिस राइटर में कौन सी सुविधा वर्तनी त्रुटियों की जाँच करती है?",
    "options_en": ["Spell Check", "Word Count", "Thesaurus", "AutoCorrect"],
    "options_hi": ["स्पेल चेक", "शब्द गिनती", "समानार्थी शब्दकोश", "स्वतः सुधार"],
    "answer_en": "Spell Check",
    "answer_hi": "स्पेल चेक",
    "explanation_en": "Spell Check identifies and corrects spelling mistakes in the document.",
    "explanation_hi": "स्पेल चेक दस्तावेज़ में वर्तनी की गलतियों की पहचान और सुधार करता है।"
  },
  {
    "num": 25,
    "question_en": "What is the main purpose of a web browser?",
    "question_hi": "वेब ब्राउज़र का मुख्य उद्देश्य क्या है?",
    "options_en": ["To access and view websites", "To create websites", "To protect from viruses", "To send emails"],
    "options_hi": ["वेबसाइटों तक पहुँचना और देखना", "वेबसाइट बनाना", "वायरस से सुरक्षा करना", "ईमेल भेजना"],
    "answer_en": "To access and view websites",
    "answer_hi": "वेबसाइटों तक पहुँचना और देखना",
    "explanation_en": "A web browser retrieves and displays web pages from the internet.",
    "explanation_hi": "एक वेब ब्राउज़र इंटरनेट से वेब पेज प्राप्त करता है और प्रदर्शित करता है।"
  },
  {
    "num": 26,
    "question_en": "Which tag defines a table row in HTML?",
    "question_hi": "HTML में कौन सा टैग टेबल पंक्ति को परिभाषित करता है?",
    "options_en": ["<tr>", "<td>", "<th>", "<table>"],
    "options_hi": ["<tr>", "<td>", "<th>", "<table>"],
    "answer_en": "<tr>",
    "answer_hi": "<tr>",
    "explanation_en": "<tr> tag defines a table row, which contains table cells (<td> or <th>).",
    "explanation_hi": "<tr> टैग टेबल पंक्ति को परिभाषित करता है, जिसमें टेबल सेल (<td> या <th>) होते हैं।"
  },
  {
    "num": 27,
    "question_en": "What does 'PDF' stand for?",
    "question_hi": "'PDF' का क्या अर्थ है?",
    "options_en": ["Portable Document Format", "Printable Document Format", "Personal Data File", "Public Document Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "पब्लिक डॉक्यूमेंट फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "explanation_en": "PDF is a file format that preserves document formatting across different devices.",
    "explanation_hi": "PDF एक फ़ाइल स्वरूप है जो विभिन्न उपकरणों में दस्तावेज़ स्वरूपण को संरक्षित रखता है।"
  },
  {
    "num": 28,
    "question_en": "Which of these is a database management software?",
    "question_hi": "इनमें से कौन एक डेटाबेस प्रबंधन सॉफ्टवेयर है?",
    "options_en": ["OpenOffice Base", "OpenOffice Writer", "OpenOffice Calc", "OpenOffice Impress"],
    "options_hi": ["ओपनऑफिस बेस", "ओपनऑफिस राइटर", "ओपनऑफिस कैल्क", "ओपनऑफिस इम्प्रेस"],
    "answer_en": "OpenOffice Base",
    "answer_hi": "ओपनऑफिस बेस",
    "explanation_en": "OpenOffice Base is used for creating and managing databases.",
    "explanation_hi": "ओपनऑफिस बेस का उपयोग डेटाबेस बनाने और प्रबंधित करने के लिए किया जाता है।"
  },
  {
    "num": 29,
    "question_en": "What is the purpose of 'Mail Merge'?",
    "question_hi": "'मेल मर्ज' का उद्देश्य क्या है?",
    "options_en": ["To send personalized letters to multiple people", "To merge email accounts", "To combine multiple documents", "To send large files"],
    "options_hi": ["कई लोगों को व्यक्तिगत पत्र भेजना", "ईमेल खातों को मर्ज करना", "कई दस्तावेज़ों को जोड़ना", "बड़ी फाइलें भेजना"],
    "answer_en": "To send personalized letters to multiple people",
    "answer_hi": "कई लोगों को व्यक्तिगत पत्र भेजना",
    "explanation_en": "Mail Merge combines a template document with a data source to create personalized documents.",
    "explanation_hi": "मेल मर्ज एक टेम्पलेट दस्तावेज़ को डेटा स्रोत के साथ जोड़कर व्यक्तिगत दस्तावेज़ बनाता है।"
  },
  {
    "num": 30,
    "question_en": "Which CSS property is used to change text color?",
    "question_hi": "टेक्स्ट का रंग बदलने के लिए किस CSS गुण का उपयोग किया जाता है?",
    "options_en": ["color", "background-color", "font-color", "text-color"],
    "options_hi": ["color", "background-color", "font-color", "text-color"],
    "answer_en": "color",
    "answer_hi": "color",
    "explanation_en": "The 'color' property specifies the color of text.",
    "explanation_hi": "'color' गुण टेक्स्ट के रंग को निर्दिष्ट करता है।"
  },
  {
    "num": 31,
    "question_en": "What is a 'cookie' in internet terms?",
    "question_hi": "इंटरनेट शब्दों में 'कुकी' क्या है?",
    "options_en": ["A small file stored by websites", "A type of virus", "A hardware device", "A search engine"],
    "options_hi": ["वेबसाइटों द्वारा संग्रहीत एक छोटी फाइल", "एक प्रकार का वायरस", "एक हार्डवेयर उपकरण", "एक सर्च इंजन"],
    "answer_en": "A small file stored by websites",
    "answer_hi": "वेबसाइटों द्वारा संग्रहीत एक छोटी फाइल",
    "explanation_en": "Cookies store user preferences and browsing information.",
    "explanation_hi": "कुकीज़ उपयोगकर्ता की प्राथमिकताएँ और ब्राउज़िंग जानकारी संग्रहीत करती हैं।"
  },
  {
    "num": 32,
    "question_en": "Which function key starts slideshow in OpenOffice Impress?",
    "question_hi": "ओपनऑफिस इम्प्रेस में स्लाइडशो शुरू करने के लिए कौन सी फ़ंक्शन कुंजी का उपयोग किया जाता है?",
    "options_en": ["F5", "F1", "F7", "F9"],
    "options_hi": ["F5", "F1", "F7", "F9"],
    "answer_en": "F5",
    "answer_hi": "F5",
    "explanation_en": "Pressing F5 starts the slideshow presentation from the beginning.",
    "explanation_hi": "F5 दबाने से स्लाइडशो प्रस्तुति शुरुआत से शुरू होती है।"
  },
  {
    "num": 33,
    "question_en": "What is the purpose of a 'firewall'?",
    "question_hi": "'फ़ायरवॉल' का उद्देश्य क्या है?",
    "options_en": ["To block unauthorized access", "To speed up internet", "To create websites", "To store files"],
    "options_hi": ["अनधिकृत पहुँच को रोकना", "इंटरनेट की गति बढ़ाना", "वेबसाइट बनाना", "फाइलें संग्रहीत करना"],
    "answer_en": "To block unauthorized access",
    "answer_hi": "अनधिकृत पहुँच को रोकना",
    "explanation_en": "Firewall monitors and controls network traffic based on security rules.",
    "explanation_hi": "फ़ायरवॉल सुरक्षा नियमों के आधार पर नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करता है।"
  },
  {
    "num": 34,
    "question_en": "Which tag is used for paragraph in HTML?",
    "question_hi": "HTML में पैराग्राफ के लिए किस टैग का उपयोग किया जाता है?",
    "options_en": ["<p>", "<para>", "<paragraph>", "<pg>"],
    "options_hi": ["<p>", "<para>", "<paragraph>", "<pg>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "explanation_en": "<p> tag defines a paragraph in HTML.",
    "explanation_hi": "<p> टैग HTML में एक पैराग्राफ को परिभाषित करता है।"
  },
  {
    "num": 35,
    "question_en": "What does 'URL' stand for?",
    "question_hi": "'URL' का क्या अर्थ है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Read Link", "Universal Read Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रीड लिंक", "यूनिवर्सल रीड लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "explanation_en": "URL is the address used to access resources on the internet.",
    "explanation_hi": "URL वह पता है जिसका उपयोग इंटरनेट पर संसाधनों तक पहुँचने के लिए किया जाता है।"
  },
  {
    "num": 36,
    "question_en": "Which chart type is best for showing trends over time?",
    "question_hi": "समय के साथ रुझान दिखाने के लिए कौन सा चार्ट प्रकार सर्वोत्तम है?",
    "options_en": ["Line Chart", "Pie Chart", "Bar Chart", "Column Chart"],
    "options_hi": ["लाइन चार्ट", "पाई चार्ट", "बार चार्ट", "कॉलम चार्ट"],
    "answer_en": "Line Chart",
    "answer_hi": "लाइन चार्ट",
    "explanation_en": "Line charts are ideal for displaying trends and changes over time periods.",
    "explanation_hi": "लाइन चार्ट समय अवधि में रुझान और परिवर्तन प्रदर्शित करने के लिए आदर्श हैं।"
  },
  {
    "num": 37,
    "question_en": "What is 'spam' email?",
    "question_hi": "'स्पैम' ईमेल क्या है?",
    "options_en": ["Unwanted junk email", "Important official email", "Personal email", "Encrypted email"],
    "options_hi": ["अवांछित कचरा ईमेल", "महत्वपूर्ण आधिकारिक ईमेल", "व्यक्तिगत ईमेल", "एन्क्रिप्टेड ईमेल"],
    "answer_en": "Unwanted junk email",
    "answer_hi": "अवांछित कचरा ईमेल",
    "explanation_en": "Spam refers to unsolicited bulk messages sent to many recipients.",
    "explanation_hi": "स्पैम बड़ी संख्या में प्राप्तकर्ताओं को भेजे गए अवांछित सामूहिक संदेशों को संदर्भित करता है।"
  },
  {
    "num": 38,
    "question_en": "Which HTML attribute is used with <a> tag for hyperlink?",
    "question_hi": "हाइपरलिंक के लिए <a> टैग के साथ किस HTML विशेषता का उपयोग किया जाता है?",
    "options_en": ["href", "src", "link", "url"],
    "options_hi": ["href", "src", "link", "url"],
    "answer_en": "href",
    "answer_hi": "href",
    "explanation_en": "href attribute specifies the URL of the page the link goes to.",
    "explanation_hi": "href विशेषता उस पृष्ठ के URL को निर्दिष्ट करती है जहां लिंक जाता है।"
  },
  {
    "num": 39,
    "question_en": "What is 'Open Source Software'?",
    "question_hi": "'ओपन सोर्स सॉफ्टवेयर' क्या है?",
    "options_en": ["Software with publicly available source code", "Expensive commercial software", "Hardware device", "Operating system"],
    "options_hi": ["सार्वजनिक रूप से उपलब्ध स्रोत कोड वाला सॉफ्टवेयर", "महंगा व्यावसायिक सॉफ्टवेयर", "हार्डवेयर उपकरण", "ऑपरेटिंग सिस्टम"],
    "answer_en": "Software with publicly available source code",
    "answer_hi": "सार्वजनिक रूप से उपलब्ध स्रोत कोड वाला सॉफ्टवेयर",
    "explanation_en": "Open source software allows users to view, modify, and distribute the source code.",
    "explanation_hi": "ओपन सोर्स सॉफ्टवेयर उपयोगकर्ताओं को स्रोत कोड देखने, संशोधित करने और वितरित करने की अनुमति देता है।"
  },
  {
    "num": 40,
    "question_en": "Which CSS property controls text size?",
    "question_hi": "कौन सा CSS गुण टेक्स्ट आकार को नियंत्रित करता है?",
    "options_en": ["font-size", "text-size", "size", "font-style"],
    "options_hi": ["font-size", "text-size", "size", "font-style"],
    "answer_en": "font-size",
    "answer_hi": "font-size",
    "explanation_en": "font-size property sets the size of the font.",
    "explanation_hi": "font-size गुण फ़ॉन्ट के आकार को सेट करता है।"
  },
  {
    "num": 41,
    "question_en": "What does 'IP Address' stand for?",
    "question_hi": "'IP एड्रेस' का क्या अर्थ है?",
    "options_en": ["Internet Protocol Address", "Internet Program Address", "International Protocol Address", "Internal Protocol Address"],
    "options_hi": ["इंटरनेट प्रोटोकॉल एड्रेस", "इंटरनेट प्रोग्राम एड्रेस", "इंटरनेशनल प्रोटोकॉल एड्रेस", "इंटरनल प्रोटोकॉल एड्रेस"],
    "answer_en": "Internet Protocol Address",
    "answer_hi": "इंटरनेट प्रोटोकॉल एड्रेस",
    "explanation_en": "IP Address is a unique numerical identifier for devices on a network.",
    "explanation_hi": "IP एड्रेस नेटवर्क पर उपकरणों के लिए एक अद्वितीय संख्यात्मक पहचानकर्ता है।"
  },
  {
    "num": 42,
    "question_en": "Which OpenOffice component creates vector graphics?",
    "question_hi": "कौन सा ओपनऑफिस घटक वेक्टर ग्राफिक्स बनाता है?",
    "options_en": ["OpenOffice Draw", "OpenOffice Writer", "OpenOffice Calc", "OpenOffice Impress"],
    "options_hi": ["ओपनऑफिस ड्रा", "ओपनऑफिस राइटर", "ओपनऑफिस कैल्क", "ओपनऑफिस इम्प्रेस"],
    "answer_en": "OpenOffice Draw",
    "answer_hi": "ओपनऑफिस ड्रा",
    "explanation_en": "OpenOffice Draw is used for creating vector graphics and diagrams.",
    "explanation_hi": "ओपनऑफिस ड्रा का उपयोग वेक्टर ग्राफिक्स और आरेख बनाने के लिए किया जाता है।"
  },
  {
    "num": 43,
    "question_en": "What is the purpose of 'Headers and Footers' in a document?",
    "question_hi": "दस्तावेज़ में 'हेडर और फुटर' का उद्देश्य क्या है?",
    "options_en": ["To display information at top and bottom of pages", "To create tables", "To change font size", "To add images"],
    "options_hi": ["पृष्ठों के शीर्ष और निचले भाग में जानकारी प्रदर्शित करना", "टेबल बनाना", "फ़ॉन्ट आकार बदलना", "छवियाँ जोड़ना"],
    "answer_en": "To display information at top and bottom of pages",
    "answer_hi": "पृष्ठों के शीर्ष और निचले भाग में जानकारी प्रदर्शित करना",
    "explanation_en": "Headers and footers contain recurring information like page numbers, dates, or document titles.",
    "explanation_hi": "हेडर और फुटर में पृष्ठ संख्या, तिथियाँ या दस्तावेज़ शीर्षक जैसी बार-बार आने वाली जानकारी होती है।"
  },
  {
    "num": 44,
    "question_en": "Which tag is used for bold text in HTML?",
    "question_hi": "HTML में बोल्ड टेक्स्ट के लिए किस टैग का उपयोग किया जाता है?",
    "options_en": ["<b>", "<strong>", "<bold>", "<big>"],
    "options_hi": ["<b>", "<strong>", "<bold>", "<big>"],
    "answer_en": "<b>",
    "answer_hi": "<b>",
    "explanation_en": "<b> tag makes text bold, <strong> adds semantic importance with bold display.",
    "explanation_hi": "<b> टैग टेक्स्ट को बोल्ड बनाता है, <strong> बोल्ड डिस्प्ले के साथ अर्थपूर्ण महत्व जोड़ता है।"
  },
  {
    "num": 45,
    "question_en": "What is 'E-commerce'?",
    "question_hi": "'ई-कॉमर्स' क्या है?",
    "options_en": ["Buying and selling goods online", "Sending emails", "Online banking", "Social networking"],
    "options_hi": ["ऑनलाइन सामान खरीदना और बेचना", "ईमेल भेजना", "ऑनलाइन बैंकिंग", "सोशल नेटवर्किंग"],
    "answer_en": "Buying and selling goods online",
    "answer_hi": "ऑनलाइन सामान खरीदना और बेचना",
    "explanation_en": "E-commerce involves commercial transactions conducted electronically on the internet.",
    "explanation_hi": "ई-कॉमर्स में इंटरनेट पर इलेक्ट्रॉनिक रूप से किए गए व्यावसायिक लेनदेन शामिल होते हैं।"
  },
  {
    "num": 46,
    "question_en": "Which function in Calc finds the highest value?",
    "question_hi": "कैल्क में कौन सा फ़ंक्शन सबसे ऊँचा मान ढूंढता है?",
    "options_en": ["MAX", "MIN", "SUM", "AVERAGE"],
    "options_hi": ["MAX", "MIN", "SUM", "AVERAGE"],
    "answer_en": "MAX",
    "answer_hi": "MAX",
    "explanation_en": "MAX function returns the largest value from a set of values.",
    "explanation_hi": "MAX फ़ंक्शन मानों के एक सेट से सबसे बड़ा मान लौटाता है।"
  },
  {
    "num": 47,
    "question_en": "What does 'MAN' stand for in networking?",
    "question_hi": "नेटवर्किंग में 'MAN' का क्या अर्थ है?",
    "options_en": ["Metropolitan Area Network", "Mobile Area Network", "Main Area Network", "Multiple Access Network"],
    "options_hi": ["मेट्रोपॉलिटन एरिया नेटवर्क", "मोबाइल एरिया नेटवर्क", "मेन एरिया नेटवर्क", "मल्टीपल एक्सेस नेटवर्क"],
    "answer_en": "Metropolitan Area Network",
    "answer_hi": "मेट्रोपॉलिटन एरिया नेटवर्क",
    "explanation_en": "MAN covers a larger area than LAN but smaller than WAN, typically a city.",
    "explanation_hi": "MAN LAN से बड़े लेकिन WAN से छोटे क्षेत्र को कवर करता है, आमतौर पर एक शहर।"
  },
  {
    "num": 48,
    "question_en": "Which CSS method applies style directly to an HTML element?",
    "question_hi": "कौन सी CSS विधि सीधे HTML तत्व पर शैली लागू करती है?",
    "options_en": ["Inline CSS", "Internal CSS", "External CSS", "Imported CSS"],
    "options_hi": ["इनलाइन CSS", "इंटरनल CSS", "एक्सटर्नल CSS", "इम्पोर्टेड CSS"],
    "answer_en": "Inline CSS",
    "answer_hi": "इनलाइन CSS",
    "explanation_en": "Inline CSS uses the style attribute directly within an HTML element.",
    "explanation_hi": "इनलाइन CSS HTML तत्व के भीतर सीधे स्टाइल विशेषता का उपयोग करता है।"
  },
  {
    "num": 49,
    "question_en": "What is 'Digital Literacy'?",
    "question_hi": "'डिजिटल साक्षरता' क्या है?",
    "options_en": ["Ability to use digital technology effectively", "Programming skills", "Hardware repair skills", "Typing speed"],
    "options_hi": ["डिजिटल तकनीक का प्रभावी ढंग से उपयोग करने की क्षमता", "प्रोग्रामिंग कौशल", "हार्डवेयर मरम्मत कौशल", "टाइपिंग गति"],
    "answer_en": "Ability to use digital technology effectively",
    "answer_hi": "डिजिटल तकनीक का प्रभावी ढंग से उपयोग करने की क्षमता",
    "explanation_en": "Digital literacy involves the skills needed to use digital devices and internet resources.",
    "explanation_hi": "डिजिटल साक्षरता में डिजिटल उपकरणों और इंटरनेट संसाधनों का उपयोग करने के लिए आवश्यक कौशल शामिल हैं।"
  },
  {
    "num": 50,
    "question_en": "Which protocol is used for secure websites (HTTPS)?",
    "question_hi": "सुरक्षित वेबसाइटों (HTTPS) के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SSL/TLS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["SSL/TLS", "HTTP", "FTP", "SMTP"],
    "answer_en": "SSL/TLS",
    "answer_hi": "SSL/TLS",
    "explanation_en": "HTTPS uses SSL/TLS encryption to secure data transmission.",
    "explanation_hi": "HTTPS डेटा ट्रांसमिशन को सुरक्षित करने के लिए SSL/TLS एन्क्रिप्शन का उपयोग करता है।"
  }
  ]
]




let currentQuestion = 0; 
let language = "en";
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
