const questions =[
  {
    "num": 1,
    "question_en": "What should you do if a webpage is not loading properly?",
    "question_hi": "यदि वेबपेज ठीक से लोड नहीं हो रहा है तो आपको क्या करना चाहिए?",
    "options_en": ["Refresh the page (F5)", "Clear browser cache", "Check internet connection", "All of these"],
    "options_hi": ["पेज रिफ्रेश करें (F5)", "ब्राउज़र कैश साफ़ करें", "इंटरनेट कनेक्शन जाँचें", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "explanation_en": "When a webpage doesn't load, try refreshing, clearing cache, or checking internet connection before other troubleshooting.",
    "explanation_hi": "जब वेबपेज लोड नहीं होता है, तो अन्य समस्या निवारण से पहले रिफ्रेश करने, कैश साफ़ करने या इंटरनेट कनेक्शन जाँचने का प्रयास करें।"
  },
  {
    "num": 2,
    "question_en": "Which LibreOffice component would you use to create a school newsletter?",
    "question_hi": "स्कूल न्यूज़लेटर बनाने के लिए आप LibreOffice के किस घटक का उपयोग करेंगे?",
    "options_en": ["Writer with columns and images", "Calc", "Impress", "Base"],
    "options_hi": ["कॉलम और छवियों के साथ राइटर", "कैल्क", "इम्प्रेस", "बेस"],
    "answer_en": "Writer with columns and images",
    "answer_hi": "कॉलम और छवियों के साथ राइटर",
    "explanation_en": "Writer with column formatting and image insertion is best for creating newsletters with text and visuals.",
    "explanation_hi": "पाठ और दृश्यों के साथ न्यूज़लेटर बनाने के लिए कॉलम फ़ॉर्मेटिंग और छवि सम्मिलन के साथ राइटर सबसे अच्छा है।"
  },
  {
    "num": 3,
    "question_en": "What is the purpose of 'Paste Special' in word processors?",
    "question_hi": "वर्ड प्रोसेसर में 'Paste Special' का उद्देश्य क्या है?",
    "options_en": ["Paste with specific formatting options", "Paste only text", "Paste only images", "Delete formatting"],
    "options_hi": ["विशिष्ट फ़ॉर्मेटिंग विकल्पों के साथ पेस्ट करें", "केवल टेक्स्ट पेस्ट करें", "केवल छवियाँ पेस्ट करें", "फ़ॉर्मेटिंग हटाएं"],
    "answer_en": "Paste with specific formatting options",
    "answer_hi": "विशिष्ट फ़ॉर्मेटिंग विकल्पों के साथ पेस्ट करें",
    "explanation_en": "Paste Special allows you to paste content with specific formatting like unformatted text, values only, or transpose data.",
    "explanation_hi": "Paste Special आपको अव्यवस्थित टेक्स्ट, केवल मान, या डेटा ट्रांसपोज़ जैसे विशिष्ट फ़ॉर्मेटिंग के साथ सामग्री पेस्ट करने की अनुमति देता है।"
  },
  {
    "num": 4,
    "question_en": "When creating a presentation about historical events, which slide layout is most appropriate for timeline?",
    "question_hi": "ऐतिहासिक घटनाओं के बारे में प्रस्तुति बनाते समय, टाइमलाइन के लिए कौन सा स्लाइड लेआउट सबसे उपयुक्त है?",
    "options_en": ["Title and Content with bullet points", "Blank slide with SmartArt", "Comparison layout", "Picture with caption"],
    "options_hi": ["बुलेट पॉइंट के साथ शीर्षक और सामग्री", "स्मार्टआर्ट के साथ रिक्त स्लाइड", "तुलना लेआउट", "कैप्शन के साथ चित्र"],
    "answer_en": "Blank slide with SmartArt",
    "answer_hi": "स्मार्टआर्ट के साथ रिक्त स्लाइड",
    "explanation_en": "SmartArt graphics in Impress can create visual timelines showing historical events in chronological order.",
    "explanation_hi": "इम्प्रेस में स्मार्टआर्ट ग्राफिक्स कालानुक्रमिक क्रम में ऐतिहासिक घटनाओं को दिखाने वाले दृश्य टाइमलाइन बना सकते हैं।"
  },
  {
    "num": 5,
    "question_en": "What is the most secure way to share a password with a team member?",
    "question_hi": "टीम के सदस्य के साथ पासवर्ड साझा करने का सबसे सुरक्षित तरीका क्या है?",
    "options_en": ["Send in encrypted email", "Share verbally in person", "Use password manager sharing", "Write on paper"],
    "options_hi": ["एन्क्रिप्टेड ईमेल में भेजें", "व्यक्तिगत रूप से मौखिक रूप से साझा करें", "पासवर्ड मैनेजर शेयरिंग का उपयोग करें", "कागज पर लिखें"],
    "answer_en": "Use password manager sharing",
    "answer_hi": "पासवर्ड मैनेजर शेयरिंग का उपयोग करें",
    "explanation_en": "Password managers have secure sharing features that don't expose the actual password and can revoke access later.",
    "explanation_hi": "पासवर्ड मैनेजर में सुरक्षित शेयरिंग सुविधाएँ होती हैं जो वास्तविक पासवर्ड उजागर नहीं करती हैं और बाद में एक्सेस रद्द कर सकती हैं।"
  },
  {
    "num": 6,
    "question_en": "Which Calc feature would help analyze survey data with multiple choice questions?",
    "question_hi": "बहुविकल्पीय प्रश्नों के साथ सर्वेक्षण डेटा का विश्लेषण करने में कौन सी Calc सुविधा मदद करेगी?",
    "options_en": ["Pivot Tables", "Charts", "Conditional Formatting", "Data Validation"],
    "options_hi": ["पिवट टेबल", "चार्ट", "सशर्त फ़ॉर्मेटिंग", "डेटा वैलिडेशन"],
    "answer_en": "Pivot Tables",
    "answer_hi": "पिवट टेबल",
    "explanation_en": "Pivot Tables can summarize and analyze survey data, showing counts and percentages for each response option.",
    "explanation_hi": "पिवट टेबल सर्वेक्षण डेटा को संक्षेप और विश्लेषण कर सकते हैं, प्रत्येक प्रतिक्रिया विकल्प के लिए गिनती और प्रतिशत दिखाते हैं।"
  },
  {
    "num": 7,
    "question_en": "What should be your first step when your computer is running very slow?",
    "question_hi": "जब आपका कंप्यूटर बहुत धीमा चल रहा हो तो आपका पहला कदम क्या होना चाहिए?",
    "options_en": ["Check Task Manager for resource usage", "Restart computer", "Run antivirus scan", "Clear temporary files"],
    "options_hi": ["संसाधन उपयोग के लिए टास्क मैनेजर जाँचें", "कंप्यूटर रीस्टार्ट करें", "एंटीवायरस स्कैन चलाएं", "अस्थायी फ़ाइलें साफ़ करें"],
    "answer_en": "Check Task Manager for resource usage",
    "answer_hi": "संसाधन उपयोग के लिए टास्क मैनेजर जाँचें",
    "explanation_en": "Task Manager shows which programs are using most CPU, memory, or disk, helping identify the cause of slowness.",
    "explanation_hi": "टास्क मैनेजर दिखाता है कि कौन से प्रोग्राम अधिकांश CPU, मेमोरी या डिस्क का उपयोग कर रहे हैं, धीमेपन का कारण पहचानने में मदद करता है।"
  },
  {
    "num": 8,
    "question_en": "Which feature prevents accidental changes to important spreadsheet cells?",
    "question_hi": "कौन सी सुविधा महत्वपूर्ण स्प्रेडशीट सेल में आकस्मिक परिवर्तनों को रोकती है?",
    "options_en": ["Cell Protection", "Data Validation", "Conditional Formatting", "Freeze Panes"],
    "options_hi": ["सेल सुरक्षा", "डेटा वैलिडेशन", "सशर्त फ़ॉर्मेटिंग", "फ्रीज पेन"],
    "answer_en": "Cell Protection",
    "answer_hi": "सेल सुरक्षा",
    "explanation_en": "Cell Protection locks specific cells to prevent accidental editing while allowing changes to other cells.",
    "explanation_hi": "सेल सुरक्षा विशिष्ट सेल को लॉक करती है ताकि आकस्मिक संपादन को रोका जा सके जबकि अन्य सेल में परिवर्तन की अनुमति दी जा सके।"
  },
  {
    "num": 9,
    "question_en": "What is the best practice for naming computer files?",
    "question_hi": "कंप्यूटर फ़ाइलों का नामकरण करने का सर्वोत्तम अभ्यास क्या है?",
    "options_en": ["Use descriptive names with dates", "Use short random names", "Keep default names", "Use only numbers"],
    "options_hi": ["तिथियों के साथ वर्णनात्मक नामों का उपयोग करें", "छोटे यादृच्छिक नामों का उपयोग करें", "डिफ़ॉल्ट नाम रखें", "केवल संख्याओं का उपयोग करें"],
    "answer_en": "Use descriptive names with dates",
    "answer_hi": "तिथियों के साथ वर्णनात्मक नामों का उपयोग करें",
    "explanation_en": "Descriptive names with dates (e.g., 'Project_Report_2024_02_15') make files easy to identify and organize.",
    "explanation_hi": "तिथियों के साथ वर्णनात्मक नाम (जैसे, 'Project_Report_2024_02_15') फ़ाइलों को पहचानने और व्यवस्थित करने में आसान बनाते हैं।"
  },
  {
    "num": 10,
    "question_en": "Which internet safety practice is most important for students?",
    "question_hi": "छात्रों के लिए कौन सी इंटरनेट सुरक्षा प्रथा सबसे महत्वपूर्ण है?",
    "options_en": ["Never share personal information online", "Use strong passwords", "Keep software updated", "All are equally important"],
    "options_hi": ["ऑनलाइन व्यक्तिगत जानकारी कभी साझा न करें", "मजबूत पासवर्ड का उपयोग करें", "सॉफ़्टवेयर अपडेट रखें", "सभी समान रूप से महत्वपूर्ण हैं"],
    "answer_en": "All are equally important",
    "answer_hi": "सभी समान रूप से महत्वपूर्ण हैं",
    "explanation_en": "All these practices work together for internet safety: privacy protection, account security, and vulnerability prevention.",
    "explanation_hi": "ये सभी प्रथाएँ इंटरनेट सुरक्षा के लिए एक साथ काम करती हैं: गोपनीयता सुरक्षा, खाता सुरक्षा और भेद्यता रोकथाम।"
  },
  {
    "num": 11,
    "question_en": "When preparing a resume in Writer, which formatting is most professional?",
    "question_hi": "राइटर में रिज्यूमे तैयार करते समय, कौन सी फ़ॉर्मेटिंग सबसे पेशेवर है?",
    "options_en": ["Clean layout with consistent formatting", "Multiple fonts and colors", "Fancy borders and backgrounds", "Animated text"],
    "options_hi": ["सुसंगत फ़ॉर्मेटिंग के साथ साफ लेआउट", "एकाधिक फ़ॉन्ट और रंग", "फैंसी बॉर्डर और बैकग्राउंड", "एनिमेटेड टेक्स्ट"],
    "answer_en": "Clean layout with consistent formatting",
    "answer_hi": "सुसंगत फ़ॉर्मेटिंग के साथ साफ लेआउट",
    "explanation_en": "Professional resumes use clean, consistent formatting with clear headings and organized sections for easy reading.",
    "explanation_hi": "पेशेवर रिज्यूमे आसान पठन के लिए स्पष्ट शीर्षक और व्यवस्थित अनुभागों के साथ साफ, सुसंगत फ़ॉर्मेटिंग का उपयोग करते हैं।"
  },
  {
    "num": 12,
    "question_en": "What is the purpose of 'Track Changes' in collaborative document editing?",
    "question_hi": "सहयोगी दस्तावेज़ संपादन में 'ट्रैक परिवर्तन' का उद्देश्य क्या है?",
    "options_en": ["Shows who made what changes", "Automatically corrects errors", "Prevents all changes", "Creates backup copies"],
    "options_hi": ["दिखाता है कि किसने क्या बदलाव किए", "त्रुटियों को स्वचालित रूप से सही करता है", "सभी परिवर्तनों को रोकता है", "बैकअप प्रतियाँ बनाता है"],
    "answer_en": "Shows who made what changes",
    "answer_hi": "दिखाता है कि किसने क्या बदलाव किए",
    "explanation_en": "Track Changes highlights edits made by different collaborators, showing who changed what for review and approval.",
    "explanation_hi": "ट्रैक परिवर्तन विभिन्न सहयोगियों द्वारा किए गए संपादनों को हाइलाइट करता है, समीक्षा और अनुमोदन के लिए दिखाता है कि किसने क्या बदला।"
  },
  {
    "num": 13,
    "question_en": "Which email attachment practice is safest?",
    "question_hi": "कौन सी ईमेल अटैचमेंट प्रथा सबसे सुरक्षित है?",
    "options_en": ["Scan attachments before opening", "Open all attachments immediately", "Only open .exe files", "Disable antivirus for attachments"],
    "options_hi": ["खोलने से पहले अटैचमेंट स्कैन करें", "सभी अटैचमेंट तुरंत खोलें", "केवल .exe फ़ाइलें खोलें", "अटैचमेंट के लिए एंटीवायरस अक्षम करें"],
    "answer_en": "Scan attachments before opening",
    "answer_hi": "खोलने से पहले अटैचमेंट स्कैन करें",
    "explanation_en": "Always scan email attachments with antivirus software before opening to protect against malware.",
    "explanation_hi": "मैलवेयर से बचाव के लिए खोलने से पहले हमेशा ईमेल अटैचमेंट को एंटीवायरस सॉफ़्टवेयर से स्कैन करें।"
  },
  {
    "num": 14,
    "question_en": "What should you do before installing new software on a school computer?",
    "question_hi": "स्कूल कंप्यूटर पर नया सॉफ़्टवेयर इंस्टॉल करने से पहले आपको क्या करना चाहिए?",
    "options_en": ["Get permission from administrator", "Install immediately", "Disable antivirus", "Delete old software first"],
    "options_hi": "प्रशासक से अनुमति लें",
    "answer_en": "Get permission from administrator",
    "answer_hi": "प्रशासक से अनुमति लें",
    "explanation_en": "School computers often have restrictions; always get permission to ensure compliance with policies and avoid security issues.",
    "explanation_hi": "स्कूल कंप्यूटर में अक्सर प्रतिबंध होते हैं; नीतियों का अनुपालन सुनिश्चित करने और सुरक्षा समस्याओं से बचने के लिए हमेशा अनुमति लें।"
  },
  {
    "num": 15,
    "question_en": "Which presentation practice engages the audience best?",
    "question_hi": "कौन सी प्रस्तुति अभ्यास दर्शकों को सबसे अच्छी तरह संलग्न करती है?",
    "options_en": ["Ask questions and encourage participation", "Read all slides verbatim", "Use maximum text on slides", "Avoid eye contact"],
    "options_hi": ["प्रश्न पूछें और भागीदारी को प्रोत्साहित करें", "सभी स्लाइडें शब्दशः पढ़ें", "स्लाइड पर अधिकतम टेक्स्ट का उपयोग करें", "आँख से संपर्क से बचें"],
    "answer_en": "Ask questions and encourage participation",
    "answer_hi": "प्रश्न पूछें और भागीदारी को प्रोत्साहित करें",
    "explanation_en": "Interactive presentations with questions and audience participation are more engaging and memorable.",
    "explanation_hi": "प्रश्नों और दर्शकों की भागीदारी के साथ इंटरैक्टिव प्रस्तुतियाँ अधिक आकर्षक और यादगार होती हैं।"
  },
  {
    "num": 16,
    "question_en": "What is the purpose of 'Data Validation' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'डेटा वैलिडेशन' का उद्देश्य क्या है?",
    "options_en": ["Restrict data entry to specific criteria", "Automatically calculate formulas", "Format cells beautifully", "Create charts automatically"],
    "options_hi": ["डेटा प्रविष्टि को विशिष्ट मानदंडों तक सीमित करें", "सूत्र स्वचालित रूप से गणना करें", "सेल को सुंदर रूप से फ़ॉर्मेट करें", "चार्ट स्वचालित रूप से बनाएं"],
    "answer_en": "Restrict data entry to specific criteria",
    "answer_hi": "डेटा प्रविष्टि को विशिष्ट मानदंडों तक सीमित करें",
    "explanation_en": "Data Validation controls what can be entered in a cell (e.g., numbers only, dates within range, from a list).",
    "explanation_hi": "डेटा वैलिडेशन नियंत्रित करता है कि सेल में क्या दर्ज किया जा सकता है (जैसे, केवल संख्याएँ, सीमा के भीतर तिथियाँ, सूची से)।"
  },
  {
    "num": 17,
    "question_en": "Why should you regularly back up important files?",
    "question_hi": "आपको नियमित रूप से महत्वपूर्ण फ़ाइलों का बैकअप क्यों लेना चाहिए?",
    "options_en": ["Protect against data loss from hardware failure", "Make computer faster", "Increase storage space", "Improve internet speed"],
    "options_hi": ["हार्डवेयर विफलता से डेटा हानि के खिलाफ सुरक्षा करें", "कंप्यूटर तेज बनाएं", "संग्रहण स्थान बढ़ाएं", "इंटरनेट गति में सुधार करें"],
    "answer_en": "Protect against data loss from hardware failure",
    "answer_hi": "हार्डवेयर विफलता से डेटा हानि के खिलाफ सुरक्षा करें",
    "explanation_en": "Regular backups protect your data from loss due to hardware failure, theft, malware, or accidental deletion.",
    "explanation_hi": "नियमित बैकअप हार्डवेयर विफलता, चोरी, मैलवेयर या आकस्मिक विलोपन के कारण आपके डेटा को हानि से बचाते हैं।"
  },
  {
    "num": 18,
    "question_en": "What is 'phishing' and how can you recognize it?",
    "question_hi": "'फ़िशिंग' क्या है और आप इसे कैसे पहचान सकते हैं?",
    "options_en": ["Fake emails trying to steal information; look for suspicious links", "Computer virus; shows pop-ups", "Slow internet; check connection", "Hardware problem; computer crashes"],
    "options_hi": ["जानकारी चुराने की कोशिश करने वाले नकली ईमेल; संदिग्ध लिंक देखें", "कंप्यूटर वायरस; पॉप-अप दिखाता है", "धीमी इंटरनेट; कनेक्शन जाँचें", "हार्डवेयर समस्या; कंप्यूटर क्रैश होता है"],
    "answer_en": "Fake emails trying to steal information; look for suspicious links",
    "answer_hi": "जानकारी चुराने की कोशिश करने वाले नकली ईमेल; संदिग्ध लिंक देखें",
    "explanation_en": "Phishing emails impersonate legitimate organizations to steal login credentials or personal information; recognize by urgent tone, suspicious links, and poor grammar.",
    "explanation_hi": "फ़िशिंग ईमेल लॉगिन क्रेडेंशियल या व्यक्तिगत जानकारी चुराने के लिए वैध संगठनों का रूप धारण करते हैं; तत्काल टोन, संदिग्ध लिंक और खराब व्याकरण से पहचानें।"
  },
  {
    "num": 19,
    "question_en": "Which Calc function would help calculate final grades with different weightings?",
    "question_hi": "विभिन्न वेटिंग के साथ अंतिम ग्रेड की गणना करने में कौन सा Calc फ़ंक्शन मदद करेगा?",
    "options_en": ["SUMPRODUCT", "SUM", "AVERAGE", "COUNT"],
    "options_hi": ["SUMPRODUCT", "SUM", "AVERAGE", "COUNT"],
    "answer_en": "SUMPRODUCT",
    "answer_hi": "SUMPRODUCT",
    "explanation_en": "SUMPRODUCT multiplies arrays and sums the products, perfect for weighted averages like grades with different percentages.",
    "explanation_hi": "SUMPRODUCT सरणियों को गुणा करता है और उत्पादों का योग करता है, विभिन्न प्रतिशत के साथ ग्रेड जैसे भारित औसत के लिए आदर्श।"
  },
  {
    "num": 20,
    "question_en": "What is the benefit of using styles in Writer?",
    "question_hi": "राइटर में स्टाइल का उपयोग करने का क्या लाभ है?",
    "options_en": ["Consistent formatting and easy updates", "More colors available", "Faster typing", "Automatic grammar check"],
    "options_hi": ["सुसंगत फ़ॉर्मेटिंग और आसान अद्यतन", "अधिक रंग उपलब्ध", "तेज़ टाइपिंग", "स्वचालित व्याकरण जाँच"],
    "answer_en": "Consistent formatting and easy updates",
    "answer_hi": "सुसंगत फ़ॉर्मेटिंग और आसान अद्यतन",
    "explanation_en": "Styles ensure consistent formatting throughout document; changing a style updates all text using that style automatically.",
    "explanation_hi": "स्टाइल दस्तावेज़ भर में सुसंगत फ़ॉर्मेटिंग सुनिश्चित करते हैं; स्टाइल बदलने से उस स्टाइल का उपयोग करने वाला सभी टेक्स्ट स्वचालित रूप से अपडेट हो जाता है।"
  },
  {
    "num": 21,
    "question_en": "How can you verify if online information is reliable?",
    "question_hi": "आप कैसे सत्यापित कर सकते हैं कि ऑनलाइन जानकारी विश्वसनीय है?",
    "options_en": ["Check multiple sources and author credentials", "Believe everything you read", "Only trust social media", "Assume all .com sites are accurate"],
    "options_hi": ["एकाधिक स्रोत और लेखक क्रेडेंशियल जाँचें", "जो कुछ भी आप पढ़ते हैं उस पर विश्वास करें", "केवल सोशल मीडिया पर भरोसा करें", "मान लें कि सभी .com साइटें सटीक हैं"],
    "answer_en": "Check multiple sources and author credentials",
    "answer_hi": "एकाधिक स्रोत और लेखक क्रेडेंशियल जाँचें",
    "explanation_en": "Verify online information by checking multiple reputable sources, examining author credentials, and looking for citations.",
    "explanation_hi": "एकाधिक प्रतिष्ठित स्रोतों की जाँच करके, लेखक क्रेडेंशियल की जाँच करके और उद्धरणों की तलाश करके ऑनलाइन जानकारी सत्यापित करें।"
  },
  {
    "num": 22,
    "question_en": "What should you include in a professional email signature?",
    "question_hi": "पेशेवर ईमेल हस्ताक्षर में आपको क्या शामिल करना चाहिए?",
    "options_en": ["Name, position, contact information", "Favorite quotes", "Multiple colors and fonts", "Personal photos"],
    "options_hi": ["नाम, पद, संपर्क जानकारी", "पसंदीदा उद्धरण", "एकाधिक रंग और फ़ॉन्ट", "व्यक्तिगत फोटो"],
    "answer_en": "Name, position, contact information",
    "answer_hi": "नाम, पद, संपर्क जानकारी",
    "explanation_en": "Professional email signatures include your name, position/organization, phone number, and website if appropriate.",
    "explanation_hi": "पेशेवर ईमेल हस्ताक्षर में आपका नाम, पद/संगठन, फ़ोन नंबर और यदि उपयुक्त हो तो वेबसाइट शामिल होती है।"
  },
  {
    "num": 23,
    "question_en": "Which is the most energy-efficient way to use a laptop?",
    "question_hi": "लैपटॉप का उपयोग करने का सबसे ऊर्जा-कुशल तरीका कौन सा है?",
    "options_en": ["Adjust power settings and lower screen brightness", "Keep maximum brightness always", "Leave plugged in constantly", "Run multiple programs simultaneously"],
    "options_hi": ["पावर सेटिंग्स समायोजित करें और स्क्रीन चमक कम करें", "हमेशा अधिकतम चमक रखें", "लगातार प्लग इन रहें", "एक साथ कई प्रोग्राम चलाएं"],
    "answer_en": "Adjust power settings and lower screen brightness",
    "answer_hi": "पावर सेटिंग्स समायोजित करें और स्क्रीन चमक कम करें",
    "explanation_en": "Lowering screen brightness and using power-saving modes significantly extends battery life and saves energy.",
    "explanation_hi": "स्क्रीन चमक कम करने और बिजली बचत मोड का उपयोग करने से बैटरी जीवन काफी बढ़ जाता है और ऊर्जा की बचत होती है।"
  },
  {
    "num": 24,
    "question_en": "What is 'netiquette' in online communication?",
    "question_hi": "ऑनलाइन संचार में 'नेटिकेट' क्या है?",
    "options_en": ["Proper behavior and etiquette online", "Internet speed", "Network configuration", "Web browser"],
    "options_hi": ["ऑनलाइन उचित व्यवहार और शिष्टाचार", "इंटरनेट गति", "नेटवर्क कॉन्फ़िगरेशन", "वेब ब्राउज़र"],
    "answer_en": "Proper behavior and etiquette online",
    "answer_hi": "ऑनला�ाइन उचित व्यवहार और शिष्टाचार",
    "explanation_en": "Netiquette refers to proper behavior, courtesy, and etiquette in online communications like email, forums, and social media.",
    "explanation_hi": "नेटिकेट ईमेल, फोरम और सोशल मीडिया जैसे ऑनलाइन संचार में उचित व्यवहार, विनम्रता और शिष्टाचार को संदर्भित करता है।"
  },
  {
    "num": 25,
    "question_en": "Which feature helps organize long documents in Writer?",
    "question_hi": "कौन सी सुविधा राइटर में लंबे दस्तावेज़ों को व्यवस्थित करने में मदद करती है?",
    "options_en": ["Navigation Pane with headings", "Page borders", "Watermarks", "Text boxes"],
    "options_hi": ["शीर्षक के साथ नेविगेशन पेन", "पेज बॉर्डर", "वॉटरमार्क", "टेक्स्ट बॉक्स"],
    "answer_en": "Navigation Pane with headings",
    "answer_hi": "शीर्षक के साथ नेविगेशन पेन",
    "explanation_en": "Navigation Pane shows document structure with headings, allowing quick jumping between sections of long documents.",
    "explanation_hi": "नेविगेशन पेन शीर्षक के साथ दस्तावेज़ संरचना दिखाता है, जिससे लंबे दस्तावेज़ों के अनुभागों के बीच त्वरित कूदने की अनुमति मिलती है।"
  },
  {
    "num": 26,
    "question_en": "What is the 3-2-1 backup rule?",
    "question_hi": "3-2-1 बैकअप नियम क्या है?",
    "options_en": ["3 copies, 2 media types, 1 offsite", "3 days, 2 locations, 1 copy", "3 files, 2 computers, 1 cloud", "3 backups, 2 weeks, 1 check"],
    "options_hi": ["3 प्रतियाँ, 2 मीडिया प्रकार, 1 ऑफ़साइट", "3 दिन, 2 स्थान, 1 प्रति", "3 फ़ाइलें, 2 कंप्यूटर, 1 क्लाउड", "3 बैकअप, 2 सप्ताह, 1 जाँच"],
    "answer_en": "3 copies, 2 media types, 1 offsite",
    "answer_hi": "3 प्रतियाँ, 2 मीडिया प्रकार, 1 ऑफ़साइट",
    "explanation_en": "Keep 3 copies of data, on 2 different media types, with 1 copy stored offsite for disaster recovery.",
    "explanation_hi": "आपदा पुनर्प्राप्ति के लिए डेटा की 3 प्रतियाँ रखें, 2 अलग-अलग मीडिया प्रकारों पर, 1 प्रति ऑफ़साइट संग्रहीत।"
  },
  {
    "num": 27,
    "question_en": "How can you make a presentation accessible to people with visual impairments?",
    "question_hi": "आप दृष्टिबाधित लोगों के लिए प्रस्तुति को कैसे सुलभ बना सकते हैं?",
    "options_en": ["Use high contrast colors and alt text for images", "Use very small fonts", "Avoid all images", "Use only audio"],
    "options_hi": ["छवियों के लिए उच्च कंट्रास्ट रंग और वैकल्पिक टेक्स्ट का उपयोग करें", "बहुत छोटे फ़ॉन्ट का उपयोग करें", "सभी छवियों से बचें", "केवल ऑडियो का उपयोग करें"],
    "answer_en": "Use high contrast colors and alt text for images",
    "answer_hi": "छवियों के लिए उच्च कंट्रास्ट रंग और वैकल्पिक टेक्स्ट का उपयोग करें",
    "explanation_en": "High contrast helps low vision, and alt text describes images for screen readers used by blind individuals.",
    "explanation_hi": "उच्च कंट्रास्ट कम दृष्टि में मदद करता है, और वैकल्पिक टेक्स्ट नेत्रहीन व्यक्तियों द्वारा उपयोग किए जाने वाले स्क्रीन रीडर के लिए छवियों का वर्णन करता है।"
  },
  {
    "num": 28,
    "question_en": "What is 'two-factor authentication' and why is it important?",
    "question_hi": "'दो-कारक प्रमाणीकरण' क्या है और यह महत्वपूर्ण क्यों है?",
    "options_en": ["Two verification methods; adds security layer", "Two passwords; easier to remember", "Two usernames; more options", "Two emails; backup access"],
    "options_hi": ["दो सत्यापन विधियाँ; सुरक्षा परत जोड़ती है", "दो पासवर्ड; याद रखना आसान", "दो उपयोगकर्ता नाम; अधिक विकल्प", "दो ईमेल; बैकअप एक्सेस"],
    "answer_en": "Two verification methods; adds security layer",
    "answer_hi": "दो सत्यापन विधियाँ; सुरक्षा परत जोड़ती है",
    "explanation_en": "Two-factor authentication requires password plus another verification (like SMS code or app notification), making accounts much more secure.",
    "explanation_hi": "दो-कारक प्रमाणीकरण के लिए पासवर्ड प्लस एक अन्य सत्यापन (जैसे एसएमएस कोड या ऐप सूचना) की आवश्यकता होती है, जिससे खाते अधिक सुरक्षित हो जाते हैं।"
  },
  {
    "num": 29,
    "question_en": "Which is better for environment: printing double-sided or single-sided?",
    "question_hi": "पर्यावरण के लिए कौन सा बेहतर है: दोनों तरफ प्रिंटिंग या एक तरफ प्रिंटिंग?",
    "options_en": ["Double-sided saves paper", "Single-sided is clearer", "Both are equal", "Digital only is best"],
    "options_hi": ["दोनों तरफ कागज बचाता है", "एक तरफ स्पष्ट है", "दोनों समान हैं", "केवल डिजिटल सबसे अच्छा है"],
    "answer_en": "Double-sided saves paper",
    "answer_hi": "दोनों तरफ कागज बचाता है",
    "explanation_en": "Double-sided printing uses half the paper, reducing resource consumption and waste.",
    "explanation_hi": "दोनों तरफ प्रिंटिंग आधा कागज का उपयोग करती है, जिससे संसाधन खपत और कचरा कम होता है।"
  },
  {
    "num": 30,
    "question_en": "What is 'digital footprint' and why does it matter?",
    "question_hi": "'डिजिटल फुटप्रिंट' क्या है और यह क्यों महत्वपूर्ण है?",
    "options_en": ["Online trail of activities; affects reputation and opportunities", "Computer storage space", "Internet speed measurement", "Social media followers count"],
    "options_hi": ["गतिविधियों की ऑनलाइन ट्रेल; प्रतिष्ठा और अवसरों को प्रभावित करती है", "कंप्यूटर संग्रहण स्थान", "इंटरनेट गति माप", "सोशल मीडिया अनुयायी गिनती"],
    "answer_en": "Online trail of activities; affects reputation and opportunities",
    "answer_hi": "गतिविधियों की ऑनलाइन ट्रेल; प्रतिष्ठा और अवसरों को प्रभावित करती है",
    "explanation_en": "Your digital footprint is the record of your online activities; colleges and employers often check it, so maintain a positive one.",
    "explanation_hi": "आपका डिजिटल फुटप्रिंट आपकी ऑनलाइन गतिविधियों का रिकॉर्ड है; कॉलेज और नियोक्ता अक्सर इसे जाँचते हैं, इसलिए एक सकारात्मक बनाए रखें।"
  },
  {
    "num": 31,
    "question_en": "How can you collaborate on a document in real-time with classmates?",
    "question_hi": "आप कक्षा के साथियों के साथ वास्तविक समय में दस्तावेज़ पर कैसे सहयोग कर सकते हैं?",
    "options_en": ["Use cloud services like Google Docs", "Email attachments back and forth", "Print and physically share", "Use USB drives"],
    "options_hi": ["Google डॉक्स जैसी क्लाउड सेवाओं का उपयोग करें", "आगे-पीछे ईमेल अटैचमेंट", "प्रिंट करें और शारीरिक रूप से साझा करें", "USB ड्राइव का उपयोग करें"],
    "answer_en": "Use cloud services like Google Docs",
    "answer_hi": "Google डॉक्स जैसी क्लाउड सेवाओं का उपयोग करें",
    "explanation_en": "Cloud-based document editors allow multiple people to edit simultaneously with changes visible in real-time.",
    "explanation_hi": "क्लाउड-आधारित दस्तावेज़ संपादक कई लोगों को वास्तविक समय में दिखाई देने वाले परिवर्तनों के साथ एक साथ संपादन करने की अनुमति देते हैं।"
  },
  {
    "num": 32,
    "question_en": "What is 'ergonomics' in computer use?",
    "question_hi": "कंप्यूटर उपयोग में 'एर्गोनॉमिक्स' क्या है?",
    "options_en": ["Proper setup to prevent strain and injury", "Computer speed optimization", "Internet connection quality", "Software efficiency"],
    "options_hi": ["तनाव और चोट को रोकने के लिए उचित सेटअप", "कंप्यूटर गति अनुकूलन", "इंटरनेट कनेक्शन गुणवत्ता", "सॉफ़्टवेयर दक्षता"],
    "answer_en": "Proper setup to prevent strain and injury",
    "answer_hi": "तनाव और चोट को रोकने के लिए उचित सेटअप",
    "explanation_en": "Ergonomics involves arranging computer workstation (chair, desk, monitor, keyboard) to minimize physical strain and prevent injuries.",
    "explanation_hi": "एर्गोनॉमिक्स में शारीरिक तनाव को कम करने और चोटों को रोकने के लिए कंप्यूटर वर्कस्टेशन (कुर्सी, डेस्क, मॉनिटर, कीबोर्ड) की व्यवस्था शामिल है।"
  },
  {
    "num": 33,
    "question_en": "Which practice helps prevent eye strain during long computer sessions?",
    "question_hi": "लंबे कंप्यूटर सत्र के दौरान आँखों के तनाव को रोकने में कौन सा अभ्यास मदद करता है?",
    "options_en": ["20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds", "Stare continuously at screen", "Increase screen brightness", "Sit closer to monitor"],
    "options_hi": ["20-20-20 नियम: हर 20 मिनट में, 20 सेकंड के लिए 20 फीट दूर देखें", "स्क्रीन पर लगातार घूरें", "स्क्रीन चमक बढ़ाएं", "मॉनिटर के करीब बैठें"],
    "answer_en": "20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds",
    "answer_hi": "20-20-20 नियम: हर 20 मिनट में, 20 सेकंड के लिए 20 फीट दूर देखें",
    "explanation_en": "The 20-20-20 rule gives eyes regular breaks from screen focus, reducing digital eye strain.",
    "explanation_hi": "20-20-20 नियम आँखों को स्क्रीन फोकस से नियमित विराम देता है, डिजिटल आँखों के तनाव को कम करता है।"
  },
  {
    "num": 34,
    "question_en": "What is the difference between 'Save' and 'Save As'?",
    "question_hi": "'सेव' और 'सेव ऐस' में क्या अंतर है?",
    "options_en": ["Save updates current file; Save As creates new file with different name/location", "Save is faster; Save As is slower", "Save works online; Save As works offline", "No difference"],
    "options_hi": ["सेव वर्तमान फ़ाइल अपडेट करता है; सेव ऐस अलग नाम/स्थान के साथ नई फ़ाइल बनाता है", "सेव तेज है; सेव ऐस धीमा है", "सेव ऑनलाइन काम करता है; सेव ऐस ऑफ़लाइन काम करता है", "कोई अंतर नहीं"],
    "answer_en": "Save updates current file; Save As creates new file with different name/location",
    "answer_hi": "सेव वर्तमान फ़ाइल अपडेट करता है; सेव ऐस अलग नाम/स्थान के साथ नई फ़ाइल बनाता है",
    "explanation_en": "Save updates the existing file. Save As lets you save a copy with a new name, location, or format while keeping the original.",
    "explanation_hi": "सेव मौजूदा फ़ाइल अपडेट करता है। सेव ऐस आपको मूल फ़ाइल रखते हुए नए नाम, स्थान या प्रारूप के साथ एक प्रति सहेजने देता है।"
  },
  {
    "num": 35,
    "question_en": "Why is it important to cite online sources in school projects?",
    "question_hi": "स्कूल परियोजनाओं में ऑनलाइन स्रोतों का हवाला देना क्यों महत्वपूर्ण है?",
    "options_en": ["Gives credit to original authors and avoids plagiarism", "Makes project longer", "Improves internet speed", "Is required by law only"],
    "options_hi": ["मूल लेखकों को श्रेय देता है और साहित्यिक चोरी से बचता है", "परियोजना लंबी बनाता है", "इंटरनेट गति में सुधार करता है", "केवल कानून द्वारा आवश्यक है"],
    "answer_en": "Gives credit to original authors and avoids plagiarism",
    "answer_hi": "मूल लेखकों को श्रेय देता है और साहित्यिक चोरी से बचता है",
    "explanation_en": "Citing sources acknowledges the original creators' work and demonstrates academic integrity by avoiding plagiarism.",
    "explanation_hi": "स्रोतों का हवाला देने से मूल रचनाकारों के काम को स्वीकार किया जाता है और साहित्यिक चोरी से बचकर शैक्षणिक अखंडता का प्रदर्शन किया जाता है।"
  },
  {
    "num": 36,
    "question_en": "What should you do with old computers and electronics?",
    "question_hi": "आपको पुराने कंप्यूटर और इलेक्ट्रॉनिक्स के साथ क्या करना चाहिए?",
    "options_en": ["Recycle at e-waste facility", "Throw in regular trash", "Burn them", "Bury in backyard"],
    "options_hi": ["ई-कचरा सुविधा में रीसायकल करें", "नियमित कचरे में फेंकें", "उन्हें जलाएं", "पिछवाड़े में दफनाएं"],
    "answer_en": "Recycle at e-waste facility",
    "answer_hi": "ई-कचरा सुविधा में रीसायकल करें",
    "explanation_en": "E-waste contains hazardous materials and valuable metals; proper recycling protects environment and recovers resources.",
    "explanation_hi": "ई-कचरे में खतरनाक सामग्री और मूल्यवान धातुएँ होती हैं; उचित रीसाइक्लिंग पर्यावरण की रक्षा करती है और संसाधनों को पुनर्प्राप्त करती है।"
  },
  {
    "num": 37,
    "question_en": "What is 'cloud storage' and what are its advantages?",
    "question_hi": "'क्लाउड स्टोरेज' क्या है और इसके क्या फायदे हैं?",
    "options_en": ["Online storage; accessible anywhere, automatic backup", "Physical hard drive; fastest speed", "USB drive; most secure", "DVD; permanent storage"],
    "options_hi": ["ऑनलाइन संग्रहण; कहीं भी सुलभ, स्वचालित बैकअप", "भौतिक हार्ड ड्राइव; सबसे तेज़ गति", "USB ड्राइव; सबसे सुरक्षित", "DVD; स्थायी संग्रहण"],
    "answer_en": "Online storage; accessible anywhere, automatic backup",
    "answer_hi": "ऑनलाइन संग्रहण; कहीं भी सुलभ, स्वचालित बैकअप",
    "explanation_en": "Cloud storage saves files on internet servers, accessible from any device with internet, often with automatic sync and backup.",
    "explanation_hi": "क्लाउड स्टोरेज इंटरनेट सर्वर पर फ़ाइलें सहेजता है, इंटरनेट के साथ किसी भी डिवाइस से सुलभ, अक्सर स्वचालित सिंक और बैकअप के साथ।"
  },
  {
    "num": 38,
    "question_en": "How can you tell if a website connection is secure?",
    "question_hi": "आप कैसे बता सकते हैं कि वेबसाइट कनेक्शन सुरक्षित है?",
    "options_en": ["Look for https:// and lock icon in address bar", "Website loads quickly", "Has many images", "Asks for password"],
    "options_hi": ["एड्रेस बार में https:// और लॉक आइकन देखें", "वेबसाइट तेजी से लोड होती है", "कई छवियाँ हैं", "पासवर्ड मांगता है"],
    "answer_en": "Look for https:// and lock icon in address bar",
    "answer_hi": "एड्रेस बार में https:// और लॉक आइकन देखें",
    "explanation_en": "HTTPS (not HTTP) and a lock icon indicate encrypted connection, protecting data from interception.",
    "explanation_hi": "HTTPS (HTTP नहीं) और एक लॉक आइकन एन्क्रिप्टेड कनेक्शन को इंगित करता है, डेटा को अवरोधन से बचाता है।"
  },
  {
    "num": 39,
    "question_en": "What is the benefit of using templates in office software?",
    "question_hi": "ऑफिस सॉफ़्टवेयर में टेम्पलेट का उपयोग करने का क्या लाभ है?",
    "options_en": ["Saves time with pre-designed formats", "Makes files larger", "Requires more skill", "Only for experts"],
    "options_hi": ["पूर्व-डिज़ाइन किए गए प्रारूपों के साथ समय बचाता है", "फ़ाइलें बड़ी बनाता है", "अधिक कौशल की आवश्यकता है", "केवल विशेषज्ञों के लिए"],
    "answer_en": "Saves time with pre-designed formats",
    "answer_hi": "पूर्व-डिज़ाइन किए गए प्रारूपों के साथ समय बचाता है",
    "explanation_en": "Templates provide professionally designed layouts for documents, spreadsheets, or presentations, saving design time.",
    "explanation_hi": "टेम्पलेट दस्तावेज़ों, स्प्रेडशीट या प्रस्तुतियों के लिए पेशेवर रूप से डिज़ाइन किए गए लेआउट प्रदान करते हैं, डिजाइन समय बचाते हैं।"
  },
  {
    "num": 40,
    "question_en": "Why should you log out of public computers?",
    "question_hi": "आपको सार्वजनिक कंप्यूटर से लॉग आउट क्यों करना चाहिए?",
    "options_en": ["Prevents others from accessing your accounts", "Makes computer faster for next user", "Saves electricity", "Is polite but not necessary"],
    "options_hi": ["दूसरों को आपके खातों तक पहुंचने से रोकता है", "अगले उपयोगकर्ता के लिए कंप्यूटर तेज बनाता है", "बिजली बचाता है", "विनम्र है लेकिन आवश्यक नहीं"],
    "answer_en": "Prevents others from accessing your accounts",
    "answer_hi": "दूसरों को आपके खातों तक पहुंचने से रोकता है",
    "explanation_en": "Logging out prevents the next user from accessing your email, social media, or other accounts you were signed into.",
    "explanation_hi": "लॉग आउट करने से अगला उपयोगकर्ता आपके ईमेल, सोशल मीडिया या अन्य खातों तक पहुँचने से रोकता है जिनमें आप साइन इन थे।"
  },
  {
    "num": 41,
    "question_en": "What is 'fair use' in digital content?",
    "question_hi": "डिजिटल सामग्री में 'निष्पक्ष उपयोग' क्या है?",
    "options_en": ["Limited use of copyrighted material for education/criticism", "Free use of any content", "Sharing passwords", "Copying entire books"],
    "options_hi": ["शिक्षा/आलोचना के लिए कॉपीराइट सामग्री का सीमित उपयोग", "किसी भी सामग्री का मुफ्त उपयोग", "पासवर्ड साझा करना", "पूरी किताबें कॉपी करना"],
    "answer_en": "Limited use of copyrighted material for education/criticism",
    "answer_hi": "शिक्षा/आलोचना के लिए कॉपीराइट सामग्री का सीमित उपयोग",
    "explanation_en": "Fair use allows limited use of copyrighted material without permission for purposes like education, criticism, or news reporting.",
    "explanation_hi": "निष्पक्ष उपयोग शिक्षा, आलोचना या समाचार रिपोर्टिंग जैसे उद्देश्यों के लिए बिना अनुमति के कॉपीराइट सामग्री के सीमित उपयोग की अनुमति देता है।"
  },
  {
    "num": 42,
    "question_en": "How can you reduce digital distractions while studying?",
    "question_hi": "अध्ययन करते समय आप डिजिटल विचलन को कैसे कम कर सकते हैं?",
    "options_en": ["Use focus apps or turn off notifications", "Keep all apps open", "Check social media frequently", "Study with loud music"],
    "options_hi": ["फोकस ऐप का उपयोग करें या सूचनाएं बंद करें", "सभी ऐप खुले रखें", "सोशल मीडिया की बार-बार जाँच करें", "तेज संगीत के साथ अध्ययन करें"],
    "answer_en": "Use focus apps or turn off notifications",
    "answer_hi": "फोकस ऐप का उपयोग करें या सूचनाएं बंद करें",
    "explanation_en": "Turning off notifications or using focus apps that block distracting websites helps maintain concentration.",
    "explanation_hi": "सूचनाएं बंद करने या ऐसे फोकस ऐप का उपयोग करने से जो विचलित करने वाली वेबसाइटों को ब्लॉक करते हैं, एकाग्रता बनाए रखने में मदद करते हैं।"
  },
  {
    "num": 43,
    "question_en": "What is the purpose of 'conditional formatting' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'सशर्त फ़ॉर्मेटिंग' का उद्देश्य क्या है?",
    "options_en": ["Automatically format cells based on their values", "Protect cells from editing", "Create formulas automatically", "Sort data alphabetically"],
    "options_hi": ["उनके मानों के आधार पर सेल को स्वचालित रूप से फ़ॉर्मेट करें", "संपादन से सेल की सुरक्षा करें", "सूत्र स्वचालित रूप से बनाएं", "डेटा को वर्णानुक्रम में क्रमबद्ध करें"],
    "answer_en": "Automatically format cells based on their values",
    "answer_hi": "उनके मानों के आधार पर सेल को स्वचालित रूप से फ़ॉर्मेट करें",
    "explanation_en": "Conditional formatting changes cell appearance (color, font, etc.) based on rules, highlighting important data patterns.",
    "explanation_hi": "सशर्त फ़ॉर्मेटिंग नियमों के आधार पर सेल की उपस्थिति (रंग, फ़ॉन्ट, आदि) बदलती है, महत्वपूर्ण डेटा पैटर्न को उजागर करती है।"
  },
  {
    "num": 44,
    "question_en": "Why is software updating important?",
    "question_hi": "सॉफ़्टवेयर अपडेट करना क्यों महत्वपूर्ण है?",
    "options_en": ["Fixes security vulnerabilities and bugs", "Makes computer slower", "Only adds new features", "Is optional for users"],
    "options_hi": ["सुरक्षा भेद्यता और बग ठीक करता है", "कंप्यूटर धीमा बनाता है", "केवल नई सुविधाएँ जोड़ता है", "उपयोगकर्ताओं के लिए वैकल्पिक है"],
    "answer_en": "Fixes security vulnerabilities and bugs",
    "answer_hi": "सुरक्षा भेद्यता और बग ठीक करता है",
    "explanation_en": "Updates patch security holes, fix bugs, improve stability, and sometimes add features.",
    "explanation_hi": "अपडेट सुरक्षा छेद को पैच करते हैं, बग ठीक करते हैं, स्थिरता में सुधार करते हैं और कभी-कभी सुविधाएँ जोड़ते हैं।"
  },
  {
    "num": 45,
    "question_en": "What is 'responsive design' in websites?",
    "question_hi": "वेबसाइटों में 'उत्तरदायी डिजाइन' क्या है?",
    "options_en": ["Website adjusts to different screen sizes", "Website loads quickly", "Website has many colors", "Website uses videos"],
    "options_hi": ["वेबसाइट विभिन्न स्क्रीन आकारों के लिए समायोजित होती है", "वेबसाइट तेजी से लोड होती है", "वेबसाइट में कई रंग हैं", "वेबसाइट वीडियो का उपयोग करती है"],
    "answer_en": "Website adjusts to different screen sizes",
    "answer_hi": "वेबसाइट विभिन्न स्क्रीन आकारों के लिए समायोजित होती है",
    "explanation_en": "Responsive design makes websites work well on desktops, tablets, and phones by adjusting layout automatically.",
    "explanation_hi": "उत्तरदायी डिजाइन लेआउट को स्वचालित रूप से समायोजित करके वेबसाइटों को डेस्कटॉप, टैबलेट और फोन पर अच्छी तरह से काम करता है।"
  },
  {
    "num": 46,
    "question_en": "How can you organize files for a school project?",
    "question_hi": "आप स्कूल परियोजना के लिए फ़ाइलों को कैसे व्यवस्थित कर सकते हैं?",
    "options_en": ["Create folders for different components", "Keep all files on desktop", "Use random names", "Store only in email"],
    "options_hi": ["विभिन्न घटकों के लिए फ़ोल्डर बनाएँ", "सभी फ़ाइलें डेस्कटॉप पर रखें", "यादृच्छिक नामों का उपयोग करें", "केवल ईमेल में संग्रहीत करें"],
    "answer_en": "Create folders for different components",
    "answer_hi": "विभिन्न घटकों के लिए फ़ोल्डर बनाएँ",
    "explanation_en": "Organize project files into logical folders (Research, Drafts, Images, Final) for easy access and management.",
    "explanation_hi": "आसान पहुंच और प्रबंधन के लिए परियोजना फ़ाइलों को तार्किक फ़ोल्डर (अनुसंधान, ड्राफ्ट, छवियाँ, अंतिम) में व्यवस्थित करें।"
  },
  {
    "num": 47,
    "question_en": "What is 'data encryption' and why is it used?",
    "question_hi": "'डेटा एन्क्रिप्शन' क्या है और इसका उपयोग क्यों किया जाता है?",
    "options_en": ["Scrambling data to prevent unauthorized access", "Compressing files to save space", "Organizing data alphabetically", "Deleting unnecessary files"],
    "options_hi": ["अनधिकृत पहुँच को रोकने के लिए डेटा को हलचल करना", "जगह बचाने के लिए फ़ाइलों को संपीड़ित करना", "डेटा को वर्णानुक्रम में व्यवस्थित करना", "अनावश्यक फ़ाइलें हटाना"],
    "answer_en": "Scrambling data to prevent unauthorized access",
    "answer_hi": "अनधिकृत पहुँच को रोकने के लिए डेटा को हलचल करना",
    "explanation_en": "Encryption converts data into code to prevent unauthorized access, protecting sensitive information during transmission or storage.",
    "explanation_hi": "एन्क्रिप्शन अनधिकृत पहुंच को रोकने के लिए डेटा को कोड में परिवर्तित करता है, ट्रांसमिशन या भंडारण के दौरान संवेदनशील जानकारी की रक्षा करता है।"
  },
  {
    "num": 48,
    "question_en": "What is the difference between 'cut' and 'copy'?",
    "question_hi": "'कट' और 'कॉपी' में क्या अंतर है?",
    "options_en": ["Cut removes from original; copy leaves original", "Cut is faster; copy is slower", "Cut works only text; copy works everything", "No practical difference"],
    "options_hi": ["कट मूल से हटाता है; कॉपी मूल छोड़ देता है", "कट तेज है; कॉपी धीमी है", "कट केवल टेक्स्ट काम करता है; कॉपी सब कुछ काम करता है", "कोई व्यावहारिक अंतर नहीं"],
    "answer_en": "Cut removes from original; copy leaves original",
    "answer_hi": "कट मूल से हटाता है; कॉपी मूल छोड़ देता है",
    "explanation_en": "Cut (Ctrl+X) removes selected content from original location; Copy (Ctrl+C) duplicates it while keeping original.",
    "explanation_hi": "कट (Ctrl+X) चयनित सामग्री को मूल स्थान से हटाता है; कॉपी (Ctrl+C) इसे डुप्लिकेट करता है जबकि मूल रखता है।"
  },
  {
    "num": 49,
    "question_en": "Why is it important to use strong, unique passwords?",
    "question_hi": "मजबूत, अद्वितीय पासवर्ड का उपयोग करना क्यों महत्वपूर्ण है?",
    "options_en": ["Prevents unauthorized access and protects accounts", "Makes logging in faster", "Is required by all websites", "Only important for email"],
    "options_hi": ["अनधिकृत पहुँच को रोकता है और खातों की रक्षा करता है", "लॉग इन करने को तेज बनाता है", "सभी वेबसाइटों द्वारा आवश्यक है", "केवल ईमेल के लिए महत्वपूर्ण है"],
    "answer_en": "Prevents unauthorized access and protects accounts",
    "answer_hi": "अनधिकृत पहुँच को रोकता है और खातों की रक्षा करता है",
    "explanation_en": "Strong, unique passwords for each account prevent hackers from accessing multiple accounts if one password is compromised.",
    "explanation_hi": "प्रत्येक खाते के लिए मजबूत, अद्वितीय पासवर्ड हैकर्स को एक पासवर्ड से समझौता होने पर कई खातों तक पहुंचने से रोकते हैं।"
  },
  {
    "num": 50,
    "question_en": "What should you consider when creating content for social media?",
    "question_hi": "सोशल मीडिया के लिए सामग्री बनाते समय आपको क्या विचार करना चाहिए?",
    "options_en": ["Privacy, audience, and digital footprint", "Only number of likes", "Using trending hashtags only", "Posting frequently regardless of content"],
    "options_hi": ["गोपनीयता, दर्शक और डिजिटल फुटप्रिंट", "केवल लाइक की संख्या", "केवल ट्रेंडिंग हैशटैग का उपयोग करना", "सामग्री की परवाह किए बिना बार-बार पोस्ट करना"],
    "answer_en": "Privacy, audience, and digital footprint",
    "answer_hi": "गोपनीयता, दर्शक और डिजिटल फुटप्रिंट",
    "explanation_en": "Consider what personal information you're sharing, who can see it, and how it affects your long-term digital reputation.",
    "explanation_hi": "विचार करें कि आप क्या व्यक्तिगत जानकारी साझा कर रहे हैं, इसे कौन देख सकता है, और यह आपकी दीर्घकालिक डिजिटल प्रतिष्ठा को कैसे प्रभावित करता है।"
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

