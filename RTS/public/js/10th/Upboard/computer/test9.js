


const questions = [
  {
    "num": 1,
    "question_en": "What is the primary purpose of a spreadsheet software?",
    "question_hi": "स्प्रेडशीट सॉफ्टवेयर का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["Organize and analyze numerical data", "Create documents", "Edit photos", "Browse internet"],
    "options_hi": ["संख्यात्मक डेटा को व्यवस्थित और विश्लेषण करना", "दस्तावेज़ बनाना", "फोटो संपादित करना", "इंटरनेट ब्राउज़ करना"],
    "answer_en": "Organize and analyze numerical data",
    "answer_hi": "संख्यात्मक डेटा को व्यवस्थित और विश्लेषण करना",
    "explanation_en": "Spreadsheets allow users to perform calculations, create charts, and analyze data in tabular form.",
    "explanation_hi": "स्प्रेडशीट उपयोगकर्ताओं को गणना करने, चार्ट बनाने और सारणीबद्ध रूप में डेटा का विश्लेषण करने की अनुमति देते हैं।"
  },
  {
    "num": 2,
    "question_en": "Which key combination is used to create a new document in most applications?",
    "question_hi": "अधिकांश एप्लिकेशन में नया दस्तावेज़ बनाने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
    "options_en": ["Ctrl + N", "Ctrl + S", "Ctrl + O", "Ctrl + P"],
    "options_hi": ["Ctrl + N", "Ctrl + S", "Ctrl + O", "Ctrl + P"],
    "answer_en": "Ctrl + N",
    "answer_hi": "Ctrl + N",
    "explanation_en": "Ctrl + N creates a new blank document, file, or window in most applications.",
    "explanation_hi": "Ctrl + N अधिकांश एप्लिकेशन में एक नया रिक्त दस्तावेज़, फ़ाइल या विंडो बनाता है।"
  },
  {
    "num": 3,
    "question_en": "What is the function of the 'Format Painter' tool?",
    "question_hi": "'फॉर्मेट पेंटर' टूल का कार्य क्या है?",
    "options_en": ["Copy formatting from one place to another", "Paint pictures", "Change font color", "Draw shapes"],
    "options_hi": ["एक स्थान से दूसरे स्थान पर फॉर्मेटिंग कॉपी करना", "चित्र बनाना", "फ़ॉन्ट रंग बदलना", "आकार बनाना"],
    "answer_en": "Copy formatting from one place to another",
    "answer_hi": "एक स्थान से दूसरे स्थान पर फॉर्मेटिंग कॉपी करना",
    "explanation_en": "Format Painter copies formatting (font, size, color, etc.) from selected text to other text.",
    "explanation_hi": "फॉर्मेट पेंटर चयनित टेक्स्ट से अन्य टेक्स्ट तक फॉर्मेटिंग (फ़ॉन्ट, आकार, रंग आदि) कॉपी करता है।"
  },
  {
    "num": 4,
    "question_en": "Which view in presentation software shows all slides in miniature?",
    "question_hi": "प्रेजेंटेशन सॉफ्टवेयर में कौन सा दृश्य सभी स्लाइड्स को लघु रूप में दिखाता है?",
    "options_en": ["Slide Sorter view", "Normal view", "Slide Show view", "Notes view"],
    "options_hi": ["स्लाइड सॉर्टर दृश्य", "सामान्य दृश्य", "स्लाइड शो दृश्य", "नोट्स दृश्य"],
    "answer_en": "Slide Sorter view",
    "answer_hi": "स्लाइड सॉर्टर दृश्य",
    "explanation_en": "Slide Sorter view displays all slides as thumbnails for easy rearrangement.",
    "explanation_hi": "स्लाइड सॉर्टर दृश्य आसान पुनर्व्यवस्था के लिए सभी स्लाइड्स को थंबनेल के रूप में प्रदर्शित करता है।"
  },
  {
    "num": 5,
    "question_en": "What does 'GUI' stand for?",
    "question_hi": "'GUI' का क्या अर्थ है?",
    "options_en": ["Graphical User Interface", "General User Interface", "Graphical Utility Interface", "General Utility Interface"],
    "options_hi": ["ग्राफिकल यूज़र इंटरफ़ेस", "जनरल यूज़र इंटरफ़ेस", "ग्राफिकल यूटिलिटी इंटरफ़ेस", "जनरल यूटिलिटी इंटरफ़ेस"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूज़र इंटरफ़ेस",
    "explanation_en": "GUI uses visual elements like icons, windows, and menus instead of text commands.",
    "explanation_hi": "GUI टेक्स्ट कमांड के बजाय आइकन, विंडोज और मेनू जैसे दृश्य तत्वों का उपयोग करता है।"
  },
  {
    "num": 6,
    "question_en": "Which function in spreadsheet software finds the smallest value?",
    "question_hi": "स्प्रेडशीट सॉफ्टवेयर में कौन सा फ़ंक्शन सबसे छोटा मान ढूंढता है?",
    "options_en": ["MIN", "MAX", "SUM", "AVERAGE"],
    "options_hi": ["MIN", "MAX", "SUM", "AVERAGE"],
    "answer_en": "MIN",
    "answer_hi": "MIN",
    "explanation_en": "MIN function returns the smallest value from a set of values or range.",
    "explanation_hi": "MIN फ़ंक्शन मानों या श्रेणी के सेट से सबसे छोटा मान लौटाता है।"
  },
  {
    "num": 7,
    "question_en": "What is the purpose of 'Slide Master' in presentation software?",
    "question_hi": "प्रेजेंटेशन सॉफ्टवेयर में 'स्लाइड मास्टर' का उद्देश्य क्या है?",
    "options_en": ["Apply consistent formatting to all slides", "Create animations", "Add sound effects", "Record narration"],
    "options_hi": ["सभी स्लाइड्स पर सुसंगत फॉर्मेटिंग लागू करना", "एनिमेशन बनाना", "साउंड इफेक्ट्स जोड़ना", "आवाज रिकॉर्ड करना"],
    "answer_en": "Apply consistent formatting to all slides",
    "answer_hi": "सभी स्लाइड्स पर सुसंगत फॉर्मेटिंग लागू करना",
    "explanation_en": "Slide Master controls the overall appearance (fonts, colors, layouts) of all slides.",
    "explanation_hi": "स्लाइड मास्टर सभी स्लाइड्स की समग्र उपस्थिति (फ़ॉन्ट, रंग, लेआउट) को नियंत्रित करता है।"
  },
  {
    "num": 8,
    "question_en": "Which feature in word processor automatically moves text to next line?",
    "question_hi": "वर्ड प्रोसेसर में कौन सी सुविधा स्वचालित रूप से टेक्स्ट को अगली लाइन पर ले जाती है?",
    "options_en": ["Word Wrap", "AutoCorrect", "Spell Check", "Thesaurus"],
    "options_hi": ["वर्ड रैप", "ऑटोकरेक्ट", "स्पेल चेक", "समानार्थी शब्दकोश"],
    "answer_en": "Word Wrap",
    "answer_hi": "वर्ड रैप",
    "explanation_en": "Word Wrap automatically moves text to next line when it reaches the right margin.",
    "explanation_hi": "वर्ड रैप स्वचालित रूप से टेक्स्ट को अगली लाइन पर ले जाती है जब यह दाएं मार्जिन तक पहुंच जाती है।"
  },
  {
    "num": 9,
    "question_en": "What is the function of the 'Fill Handle' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'फिल हैंडल' का कार्य क्या है?",
    "options_en": ["Copy or fill data series", "Delete cells", "Format cells", "Insert formulas"],
    "options_hi": ["डेटा श्रृंखला कॉपी या भरना", "सेल हटाना", "सेल फॉर्मेट करना", "सूत्र डालना"],
    "answer_en": "Copy or fill data series",
    "answer_hi": "डेटा श्रृंखला कॉपी या भरना",
    "explanation_en": "Fill Handle (small square at cell corner) copies formulas or fills series (like dates, numbers).",
    "explanation_hi": "फिल हैंडल (सेल कोने पर छोटा वर्ग) सूत्रों की प्रतिलिपि बनाता है या श्रृंखला भरता है (जैसे तिथियाँ, संख्याएँ)।"
  },
  {
    "num": 10,
    "question_en": "Which view shows speaker notes along with slides?",
    "question_hi": "कौन सा दृश्य स्लाइड्स के साथ स्पीकर नोट्स दिखाता है?",
    "options_en": ["Notes Page view", "Slide Show view", "Normal view", "Reading view"],
    "options_hi": ["नोट्स पेज दृश्य", "स्लाइड शो दृश्य", "सामान्य दृश्य", "रीडिंग दृश्य"],
    "answer_en": "Notes Page view",
    "answer_hi": "नोट्स पेज दृश्य",
    "explanation_en": "Notes Page view displays each slide with its associated speaker notes below.",
    "explanation_hi": "नोट्स पेज दृश्य प्रत्येक स्लाइड को उसके संबंधित स्पीकर नोट्स के साथ नीचे प्रदर्शित करता है।"
  },
  {
    "num": 11,
    "question_en": "What is 'mail merge' used for?",
    "question_hi": "'मेल मर्ज' का उपयोग किसके लिए किया जाता है?",
    "options_en": ["Create personalized letters for multiple recipients", "Merge email accounts", "Combine documents", "Send bulk emails"],
    "options_hi": ["कई प्राप्तकर्ताओं के लिए व्यक्तिगत पत्र बनाना", "ईमेल खातों को मर्ज करना", "दस्तावेज़ जोड़ना", "थोक ईमेल भेजना"],
    "answer_en": "Create personalized letters for multiple recipients",
    "answer_hi": "कई प्राप्तकर्ताओं के लिए व्यक्तिगत पत्र बनाना",
    "explanation_en": "Mail merge combines a template document with a data source to create personalized documents.",
    "explanation_hi": "मेल मर्ज व्यक्तिगत दस्तावेज़ बनाने के लिए एक टेम्पलेट दस्तावेज़ को डेटा स्रोत के साथ जोड़ता है।"
  },
  {
    "num": 12,
    "question_en": "Which key combination centers text alignment?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट एलाइनमेंट केंद्रित होता है?",
    "options_en": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
    "options_hi": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
    "answer_en": "Ctrl + E",
    "answer_hi": "Ctrl + E",
    "explanation_en": "Ctrl + E centers the text or selected paragraph horizontally.",
    "explanation_hi": "Ctrl + E टेक्स्ट या चयनित पैराग्राफ को क्षैतिज रूप से केंद्रित करता है।"
  },
  {
    "num": 13,
    "question_en": "What is the purpose of 'headers and footers' in a document?",
    "question_hi": "दस्तावेज़ में 'हेडर और फुटर' का उद्देश्य क्या है?",
    "options_en": ["Display repeated information on every page", "Create chapter titles", "Add page borders", "Insert images"],
    "options_hi": ["प्रत्येक पृष्ठ पर दोहराई जाने वाली जानकारी प्रदर्शित करना", "अध्याय शीर्षक बनाना", "पृष्ठ बॉर्डर जोड़ना", "छवियाँ डालना"],
    "answer_en": "Display repeated information on every page",
    "answer_hi": "प्रत्येक पृष्ठ पर दोहराई जाने वाली जानकारी प्रदर्शित करना",
    "explanation_en": "Headers appear at top, footers at bottom of each page for page numbers, dates, titles, etc.",
    "explanation_hi": "हेडर प्रत्येक पृष्ठ के शीर्ष पर, फुटर नीचे पृष्ठ संख्या, तिथियाँ, शीर्षक आदि के लिए दिखाई देते हैं।"
  },
  {
    "num": 14,
    "question_en": "Which function counts cells containing numbers?",
    "question_hi": "कौन सा फ़ंक्शन संख्याएँ युक्त सेल गिनता है?",
    "options_en": ["COUNT", "COUNTA", "COUNTIF", "COUNTBLANK"],
    "options_hi": ["COUNT", "COUNTA", "COUNTIF", "COUNTBLANK"],
    "answer_en": "COUNT",
    "answer_hi": "COUNT",
    "explanation_en": "COUNT function counts cells that contain numbers in a specified range.",
    "explanation_hi": "COUNT फ़ंक्शन निर्दिष्ट श्रेणी में संख्याएँ युक्त सेल गिनता है।"
  },
  {
    "num": 15,
    "question_en": "What does 'WYSIWYG' stand for?",
    "question_hi": "'WYSIWYG' का क्या अर्थ है?",
    "options_en": ["What You See Is What You Get", "What You Show Is What You Get", "What You See Is What You Give", "What You Show Is What You Give"],
    "options_hi": ["व्हाट यू सी इज व्हाट यू गेट", "व्हाट यू शो इज व्हाट यू गेट", "व्हाट यू सी इज व्हाट यू गिव", "व्हाट यू शो इज व्हाट यू गिव"],
    "answer_en": "What You See Is What You Get",
    "answer_hi": "व्हाट यू सी इज व्हाट यू गेट",
    "explanation_en": "WYSIWYG means the document appears on screen exactly as it will print.",
    "explanation_hi": "WYSIWYG का अर्थ है कि दस्तावेज़ स्क्रीन पर ठीक वैसा ही दिखाई देता है जैसा वह प्रिंट होगा।"
  },
  {
    "num": 16,
    "question_en": "Which feature suggests words as you type?",
    "question_hi": "कौन सी सुविधा टाइप करते समय शब्द सुझाती है?",
    "options_en": ["AutoComplete", "AutoCorrect", "Spell Check", "Thesaurus"],
    "options_hi": ["ऑटोकंप्लीट", "ऑटोकरेक्ट", "स्पेल चेक", "समानार्थी शब्दकोश"],
    "answer_en": "AutoComplete",
    "answer_hi": "ऑटोकंप्लीट",
    "explanation_en": "AutoComplete suggests words or phrases based on what you're typing.",
    "explanation_hi": "ऑटोकंप्लीट आपके टाइप किए जा रहे शब्दों के आधार पर शब्द या वाक्यांश सुझाती है।"
  },
  {
    "num": 17,
    "question_en": "What is the purpose of 'slide transitions'?",
    "question_hi": "'स्लाइड ट्रांजिशन' का उद्देश्य क्या है?",
    "options_en": ["Visual effects between slides", "Animation within slides", "Sound effects", "Timing controls"],
    "options_hi": ["स्लाइड्स के बीच दृश्य प्रभाव", "स्लाइड्स के भीतर एनिमेशन", "साउंड इफेक्ट्स", "टाइमिंग नियंत्रण"],
    "answer_en": "Visual effects between slides",
    "answer_hi": "स्लाइड्स के बीच दृश्य प्रभाव",
    "explanation_en": "Transitions control how one slide changes to the next during presentation.",
    "explanation_hi": "ट्रांजिशन नियंत्रित करते हैं कि प्रस्तुति के दौरान एक स्लाइड अगली स्लाइड में कैसे बदलती है।"
  },
  {
    "num": 18,
    "question_en": "Which key combination makes text bold?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट बोल्ड होता है?",
    "options_en": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    "options_hi": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    "answer_en": "Ctrl + B",
    "answer_hi": "Ctrl + B",
    "explanation_en": "Ctrl + B applies bold formatting to selected text.",
    "explanation_hi": "Ctrl + B चयनित टेक्स्ट पर बोल्ड फॉर्मेटिंग लागू करता है।"
  },
  {
    "num": 19,
    "question_en": "What is the function of 'conditional formatting' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'कंडीशनल फॉर्मेटिंग' का कार्य क्या है?",
    "options_en": ["Format cells based on conditions", "Create formulas", "Sort data", "Filter data"],
    "options_hi": ["शर्तों के आधार पर सेल फॉर्मेट करना", "सूत्र बनाना", "डेटा सॉर्ट करना", "डेटा फ़िल्टर करना"],
    "answer_en": "Format cells based on conditions",
    "answer_hi": "शर्तों के आधार पर सेल फॉर्मेट करना",
    "explanation_en": "Conditional formatting automatically applies formatting (color, font) based on cell values.",
    "explanation_hi": "कंडीशनल फॉर्मेटिंग सेल मानों के आधार पर स्वचालित रूप से फॉर्मेटिंग (रंग, फ़ॉन्ट) लागू करती है।"
  },
  {
    "num": 20,
    "question_en": "Which view hides all toolbars for maximum screen space?",
    "question_hi": "कौन सा दृश्य अधिकतम स्क्रीन स्थान के लिए सभी टूलबार छिपाता है?",
    "options_en": ["Full Screen view", "Normal view", "Print Layout view", "Web Layout view"],
    "options_hi": ["फुल स्क्रीन दृश्य", "सामान्य दृश्य", "प्रिंट लेआउट दृश्य", "वेब लेआउट दृश्य"],
    "answer_en": "Full Screen view",
    "answer_hi": "फुल स्क्रीन दृश्य",
    "explanation_en": "Full Screen view hides menus and toolbars to maximize document viewing area.",
    "explanation_hi": "फुल स्क्रीन दृश्य दस्तावेज़ देखने के क्षेत्र को अधिकतम करने के लिए मेनू और टूलबार छिपाता है।"
  },
  {
    "num": 21,
    "question_en": "What does 'PDF' stand for?",
    "question_hi": "'PDF' का क्या अर्थ है?",
    "options_en": ["Portable Document Format", "Printable Document Format", "Personal Data File", "Public Document Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "पब्लिक डॉक्यूमेंट फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "explanation_en": "PDF preserves document formatting across different platforms and devices.",
    "explanation_hi": "PDF विभिन्न प्लेटफॉर्म और उपकरणों में दस्तावेज़ स्वरूपण को संरक्षित करता है।"
  },
  {
    "num": 22,
    "question_en": "Which function calculates the average of numbers?",
    "question_hi": "कौन सा फ़ंक्शन संख्याओं का औसत गणना करता है?",
    "options_en": ["AVERAGE", "SUM", "MAX", "MIN"],
    "options_hi": ["AVERAGE", "SUM", "MAX", "MIN"],
    "answer_en": "AVERAGE",
    "answer_hi": "AVERAGE",
    "explanation_en": "AVERAGE function calculates the arithmetic mean of numbers in a range.",
    "explanation_hi": "AVERAGE फ़ंक्शन श्रेणी में संख्याओं का अंकगणितीय माध्य गणना करता है।"
  },
  {
    "num": 23,
    "question_en": "What is the purpose of 'bullets and numbering'?",
    "question_hi": "'बुलेट और नंबरिंग' का उद्देश्य क्या है?",
    "options_en": ["Create lists", "Align text", "Change font size", "Add borders"],
    "options_hi": ["सूचियाँ बनाना", "टेक्स्ट संरेखित करना", "फ़ॉन्ट आकार बदलना", "बॉर्डर जोड़ना"],
    "answer_en": "Create lists",
    "answer_hi": "सूचियाँ बनाना",
    "explanation_en": "Bullets create unordered lists, numbering creates ordered lists.",
    "explanation_hi": "बुलेट अक्रमबद्ध सूचियाँ बनाते हैं, नंबरिंग क्रमबद्ध सूचियाँ बनाती है।"
  },
  {
    "num": 24,
    "question_en": "Which key combination opens the 'Find and Replace' dialog?",
    "question_hi": "किस कुंजी संयोजन से 'फाइंड एंड रिप्लेस' डायलॉग खुलता है?",
    "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + R"],
    "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + R"],
    "answer_en": "Ctrl + H",
    "answer_hi": "Ctrl + H",
    "explanation_en": "Ctrl + H opens Find and Replace dialog to search and replace text.",
    "explanation_hi": "Ctrl + H टेक्स्ट खोजने और बदलने के लिए फाइंड एंड रिप्लेस डायलॉग खोलता है।"
  },
  {
    "num": 25,
    "question_en": "What is 'watermark' in a document?",
    "question_hi": "दस्तावेज़ में 'वॉटरमार्क' क्या है?",
    "options_en": ["Faint background image or text", "Page border", "Header text", "Footer text"],
    "options_hi": ["हल्की पृष्ठभूमि छवि या टेक्स्ट", "पृष्ठ बॉर्डर", "हेडर टेक्स्ट", "फुटर टेक्स्ट"],
    "answer_en": "Faint background image or text",
    "answer_hi": "हल्की पृष्ठभूमि छवि या टेक्स्ट",
    "explanation_en": "Watermark appears behind document text, often showing 'Draft' or 'Confidential'.",
    "explanation_hi": "वॉटरमार्क दस्तावेज़ टेक्स्ट के पीछे दिखाई देता है, जो अक्सर 'ड्राफ्ट' या 'गोपनीय' दिखाता है।"
  },
  {
    "num": 26,
    "question_en": "Which function concatenates (joins) text strings?",
    "question_hi": "कौन सा फ़ंक्शन टेक्स्ट स्ट्रिंग्स को जोड़ता (संयोजित करता) है?",
    "options_en": ["CONCATENATE", "SUM", "AVERAGE", "COUNT"],
    "options_hi": ["CONCATENATE", "SUM", "AVERAGE", "COUNT"],
    "answer_en": "CONCATENATE",
    "answer_hi": "CONCATENATE",
    "explanation_en": "CONCATENATE joins multiple text strings into one string.",
    "explanation_hi": "CONCATENATE कई टेक्स्ट स्ट्रिंग्स को एक स्ट्रिंग में जोड़ता है।"
  },
  {
    "num": 27,
    "question_en": "What is the purpose of 'animation' in presentations?",
    "question_hi": "प्रस्तुतियों में 'एनिमेशन' का उद्देश्य क्या है?",
    "options_en": ["Add movement to slide elements", "Change slide transitions", "Add background music", "Record narration"],
    "options_hi": ["स्लाइड तत्वों में गति जोड़ना", "स्लाइड ट्रांजिशन बदलना", "पृष्ठभूमि संगीत जोड़ना", "आवाज रिकॉर्ड करना"],
    "answer_en": "Add movement to slide elements",
    "answer_hi": "स्लाइड तत्वों में गति जोड़ना",
    "explanation_en": "Animation adds visual effects to text, images, or other objects on slides.",
    "explanation_hi": "एनिमेशन स्लाइड्स पर टेक्स्ट, छवियों या अन्य वस्तुओं में दृश्य प्रभाव जोड़ता है।"
  },
  {
    "num": 28,
    "question_en": "Which key combination justifies text alignment?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट एलाइनमेंट जस्टिफाई होता है?",
    "options_en": ["Ctrl + J", "Ctrl + E", "Ctrl + L", "Ctrl + R"],
    "options_hi": ["Ctrl + J", "Ctrl + E", "Ctrl + L", "Ctrl + R"],
    "answer_en": "Ctrl + J",
    "answer_hi": "Ctrl + J",
    "explanation_en": "Ctrl + J justifies text, creating straight edges on both left and right margins.",
    "explanation_hi": "Ctrl + J टेक्स्ट को जस्टिफाई करता है, बाएँ और दाएँ दोनों मार्जिन पर सीधे किनारे बनाता है।"
  },
  {
    "num": 29,
    "question_en": "What does 'RTF' stand for?",
    "question_hi": "'RTF' का क्या अर्थ है?",
    "options_en": ["Rich Text Format", "Rich Text File", "Real Text Format", "Real Text File"],
    "options_hi": ["रिच टेक्स्ट फॉर्मेट", "रिच टेक्स्ट फाइल", "रियल टेक्स्ट फॉर्मेट", "रियल टेक्स्ट फाइल"],
    "answer_en": "Rich Text Format",
    "answer_hi": "रिच टेक्स्ट फॉर्मेट",
    "explanation_en": "RTF supports text formatting (bold, italics, etc.) and can be read by many word processors.",
    "explanation_hi": "RTF टेक्स्ट फॉर्मेटिंग (बोल्ड, इटैलिक आदि) का समर्थन करता है और कई वर्ड प्रोसेसर द्वारा पढ़ा जा सकता है।"
  },
  {
    "num": 30,
    "question_en": "Which function returns the current date and time?",
    "question_hi": "कौन सा फ़ंक्शन वर्तमान दिनांक और समय लौटाता है?",
    "options_en": ["NOW", "TODAY", "DATE", "TIME"],
    "options_hi": ["NOW", "TODAY", "DATE", "TIME"],
    "answer_en": "NOW",
    "answer_hi": "NOW",
    "explanation_en": "NOW function returns the current date and time, updating each time worksheet recalculates.",
    "explanation_hi": "NOW फ़ंक्शन वर्तमान दिनांक और समय लौटाता है, प्रत्येक बार वर्कशीट पुनर्गणना करने पर अद्यतन होता है।"
  },
  {
    "num": 31,
    "question_en": "What is the purpose of 'columns' in word processing?",
    "question_hi": "वर्ड प्रोसेसिंग में 'कॉलम' का उद्देश्य क्या है?",
    "options_en": ["Divide page into vertical sections", "Create tables", "Align text", "Add page numbers"],
    "options_hi": ["पृष्ठ को लंबवत खंडों में विभाजित करना", "टेबल बनाना", "टेक्स्ट संरेखित करना", "पृष्ठ संख्याएँ जोड़ना"],
    "answer_en": "Divide page into vertical sections",
    "answer_hi": "पृष्ठ को लंबवत खंडों में विभाजित करना",
    "explanation_en": "Columns format text to flow from one column to next, like newspapers.",
    "explanation_hi": "कॉलम टेक्स्ट को एक कॉलम से अगले कॉलम में प्रवाहित करने के लिए फॉर्मेट करते हैं, जैसे समाचार पत्र।"
  },
  {
    "num": 32,
    "question_en": "Which feature automatically corrects common spelling mistakes?",
    "question_hi": "कौन सी सुविधा सामान्य वर्तनी गलतियों को स्वचालित रूप से सही करती है?",
    "options_en": ["AutoCorrect", "Spell Check", "Grammar Check", "Thesaurus"],
    "options_hi": ["ऑटोकरेक्ट", "स्पेल चेक", "ग्रामर चेक", "समानार्थी शब्दकोश"],
    "answer_en": "AutoCorrect",
    "answer_hi": "ऑटोकरेक्ट",
    "explanation_en": "AutoCorrect fixes common typos like 'teh' to 'the' automatically as you type.",
    "explanation_hi": "ऑटोकरेक्ट सामान्य टाइपो जैसे 'teh' से 'the' को टाइप करते समय स्वचालित रूप से ठीक करता है।"
  },
  {
    "num": 33,
    "question_en": "What is 'cell reference' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'सेल रेफरेंस' क्या है?",
    "options_en": ["Address of a cell", "Value in a cell", "Formula in a cell", "Format of a cell"],
    "options_hi": ["सेल का पता", "सेल में मान", "सेल में सूत्र", "सेल का प्रारूप"],
    "answer_en": "Address of a cell",
    "answer_hi": "सेल का पता",
    "explanation_en": "Cell reference identifies a cell's location (like A1, B2) in formulas and functions.",
    "explanation_hi": "सेल रेफरेंस सूत्र और फ़ंक्शन में सेल के स्थान (जैसे A1, B2) की पहचान करता है।"
  },
  {
    "num": 34,
    "question_en": "Which key combination creates a hyperlink?",
    "question_hi": "किस कुंजी संयोजन से हाइपरलिंक बनता है?",
    "options_en": ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + I"],
    "options_hi": ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + I"],
    "answer_en": "Ctrl + K",
    "answer_hi": "Ctrl + K",
    "explanation_en": "Ctrl + K inserts a hyperlink to a web page, email, or document location.",
    "explanation_hi": "Ctrl + K वेब पेज, ईमेल या दस्तावेज़ स्थान पर एक हाइपरलिंक डालता है।"
  },
  {
    "num": 35,
    "question_en": "What is the purpose of 'speaker notes' in presentations?",
    "question_hi": "प्रस्तुतियों में 'स्पीकर नोट्स' का उद्देश्य क्या है?",
    "options_en": ["Reminders for presenter", "Text on slides", "Audience handouts", "Slide titles"],
    "options_hi": ["प्रस्तुतकर्ता के लिए अनुस्मारक", "स्लाइड्स पर टेक्स्ट", "दर्शकों के लिए हैंडआउट्स", "स्लाइड शीर्षक"],
    "answer_en": "Reminders for presenter",
    "answer_hi": "प्रस्तुतकर्ता के लिए अनुस्मारक",
    "explanation_en": "Speaker notes are visible only to presenter during slideshow, not to audience.",
    "explanation_hi": "स्पीकर नोट्स स्लाइडशो के दौरान केवल प्रस्तुतकर्ता को दिखाई देते हैं, दर्शकों को नहीं।"
  },
  {
    "num": 36,
    "question_en": "Which function checks if a condition is true or false?",
    "question_hi": "कौन सा फ़ंक्शन जाँचता है कि कोई शर्त सही है या गलत?",
    "options_en": ["IF", "AND", "OR", "NOT"],
    "options_hi": ["IF", "AND", "OR", "NOT"],
    "answer_en": "IF",
    "answer_hi": "IF",
    "explanation_en": "IF function performs different actions based on whether a condition is TRUE or FALSE.",
    "explanation_hi": "IF फ़ंक्शन इस आधार पर अलग-अलग कार्य करता है कि कोई शर्त सही है या गलत।"
  },
  {
    "num": 37,
    "question_en": "What is 'template' in office software?",
    "question_hi": "ऑफिस सॉफ्टवेयर में 'टेम्पलेट' क्या है?",
    "options_en": ["Pre-designed document format", "Empty document", "Saved document", "Printed document"],
    "options_hi": ["पूर्व-डिज़ाइन किया गया दस्तावेज़ प्रारूप", "रिक्त दस्तावेज़", "सहेजा गया दस्तावेज़", "मुद्रित दस्तावेज़"],
    "answer_en": "Pre-designed document format",
    "answer_hi": "पूर्व-डिज़ाइन किया गया दस्तावेज़ प्रारूप",
    "explanation_en": "Template provides predefined layout, formatting, and content for creating new documents.",
    "explanation_hi": "टेम्पलेट नए दस्तावेज़ बनाने के लिए पूर्वनिर्धारित लेआउट, फॉर्मेटिंग और सामग्री प्रदान करता है।"
  },
  {
    "num": 38,
    "question_en": "Which key combination aligns text to the left?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट बाईं ओर संरेखित होता है?",
    "options_en": ["Ctrl + L", "Ctrl + E", "Ctrl + R", "Ctrl + J"],
    "options_hi": ["Ctrl + L", "Ctrl + E", "Ctrl + R", "Ctrl + J"],
    "answer_en": "Ctrl + L",
    "answer_hi": "Ctrl + L",
    "explanation_en": "Ctrl + L aligns text to the left margin (default alignment).",
    "explanation_hi": "Ctrl + L टेक्स्ट को बाएं मार्जिन पर संरेखित करता है (डिफ़ॉल्ट संरेखण)।"
  },
  {
    "num": 39,
    "question_en": "What is 'absolute cell reference'?",
    "question_hi": "'एब्सोल्यूट सेल रेफरेंस' क्या है?",
    "options_en": ["Fixed reference that doesn't change when copied", "Changing reference when copied", "Reference to another worksheet", "Reference to another workbook"],
    "options_hi": ["स्थिर संदर्भ जो कॉपी करने पर नहीं बदलता", "कॉपी करने पर बदलता संदर्भ", "दूसरी वर्कशीट का संदर्भ", "दूसरी वर्कबुक का संदर्भ"],
    "answer_en": "Fixed reference that doesn't change when copied",
    "answer_hi": "स्थिर संदर्भ जो कॉपी करने पर नहीं बदलता",
    "explanation_en": "Absolute reference uses dollar signs ($A$1) to fix column and/or row when copying formulas.",
    "explanation_hi": "एब्सोल्यूट रेफरेंस सूत्र कॉपी करते समय कॉलम और/या पंक्ति को ठीक करने के लिए डॉलर चिह्न ($A$1) का उपयोग करता है।"
  },
  {
    "num": 40,
    "question_en": "Which feature checks grammar errors?",
    "question_hi": "कौन सी सुविधा व्याकरण त्रुटियाँ जाँचती है?",
    "options_en": ["Grammar Check", "Spell Check", "AutoCorrect", "Thesaurus"],
    "options_hi": ["ग्रामर चेक", "स्पेल चेक", "ऑटोकरेक्ट", "समानार्थी शब्दकोश"],
    "answer_en": "Grammar Check",
    "answer_hi": "ग्रामर चेक",
    "explanation_en": "Grammar Check identifies grammatical errors like sentence fragments or subject-verb agreement.",
    "explanation_hi": "ग्रामर चेक व्याकरणिक त्रुटियों जैसे वाक्य खंड या कर्ता-क्रिया सहमति की पहचान करता है।"
  },
  {
    "num": 41,
    "question_en": "What is the purpose of 'handouts' in presentations?",
    "question_hi": "प्रस्तुतियों में 'हैंडआउट्स' का उद्देश्य क्या है?",
    "options_en": ["Printed copies of slides for audience", "Speaker notes", "Slide backgrounds", "Animation effects"],
    "options_hi": ["दर्शकों के लिए स्लाइड्स की मुद्रित प्रतियाँ", "स्पीकर नोट्स", "स्लाइड पृष्ठभूमि", "एनिमेशन प्रभाव"],
    "answer_en": "Printed copies of slides for audience",
    "answer_hi": "दर्शकों के लिए स्लाइड्स की मुद्रित प्रतियाँ",
    "explanation_en": "Handouts print multiple slides per page for audience reference during presentation.",
    "explanation_hi": "हैंडआउट्स प्रस्तुति के दौरान दर्शकों के संदर्भ के लिए प्रति पृष्ठ कई स्लाइड्स प्रिंट करते हैं।"
  },
  {
    "num": 42,
    "question_en": "Which function rounds a number to specified digits?",
    "question_hi": "कौन सा फ़ंक्शन किसी संख्या को निर्दिष्ट अंकों तक गोल करता है?",
    "options_en": ["ROUND", "INT", "MOD", "POWER"],
    "options_hi": ["ROUND", "INT", "MOD", "POWER"],
    "answer_en": "ROUND",
    "answer_hi": "ROUND",
    "explanation_en": "ROUND function rounds a number to specified number of digits.",
    "explanation_hi": "ROUND फ़ंक्शन किसी संख्या को निर्दिष्ट संख्या में अंकों तक गोल करता है।"
  },
  {
    "num": 43,
    "question_en": "What is 'word count' feature?",
    "question_hi": "'वर्ड काउंट' सुविधा क्या है?",
    "options_en": ["Counts words in document", "Checks spelling", "Finds synonyms", "Formats paragraphs"],
    "options_hi": ["दस्तावेज़ में शब्द गिनता है", "वर्तनी जाँचता है", "समानार्थी शब्द ढूंढता है", "पैराग्राफ फॉर्मेट करता है"],
    "answer_en": "Counts words in document",
    "answer_hi": "दस्तावेज़ में शब्द गिनता है",
    "explanation_en": "Word Count displays number of words, characters, paragraphs, and pages in document.",
    "explanation_hi": "वर्ड काउंट दस्तावेज़ में शब्दों, वर्णों, पैराग्राफ और पृष्ठों की संख्या प्रदर्शित करता है।"
  },
  {
    "num": 44,
    "question_en": "Which key combination aligns text to the right?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट दाईं ओर संरेखित होता है?",
    "options_en": ["Ctrl + R", "Ctrl + L", "Ctrl + E", "Ctrl + J"],
    "options_hi": ["Ctrl + R", "Ctrl + L", "Ctrl + E", "Ctrl + J"],
    "answer_en": "Ctrl + R",
    "answer_hi": "Ctrl + R",
    "explanation_en": "Ctrl + R aligns text to the right margin.",
    "explanation_hi": "Ctrl + R टेक्स्ट को दाएं मार्जिन पर संरेखित करता है।"
  },
  {
    "num": 45,
    "question_en": "What is 'relative cell reference'?",
    "question_hi": "'रिलेटिव सेल रेफरेंस' क्या है?",
    "options_en": ["Reference that changes when copied", "Fixed reference", "Reference to another sheet", "3D reference"],
    "options_hi": ["संदर्भ जो कॉपी करने पर बदलता है", "स्थिर संदर्भ", "दूसरी शीट का संदर्भ", "3D संदर्भ"],
    "answer_en": "Reference that changes when copied",
    "answer_hi": "संदर्भ जो कॉपी करने पर बदलता है",
    "explanation_en": "Relative reference (like A1) adjusts when formula is copied to different cells.",
    "explanation_hi": "रिलेटिव रेफरेंस (जैसे A1) तब समायोजित होता है जब सूत्र को अलग-अलग सेल में कॉपी किया जाता है।"
  },
  {
    "num": 46,
    "question_en": "Which feature finds synonyms for words?",
    "question_hi": "कौन सी सुविधा शब्दों के लिए समानार्थी शब्द ढूंढती है?",
    "options_en": ["Thesaurus", "Spell Check", "Grammar Check", "AutoCorrect"],
    "options_hi": ["समानार्थी शब्दकोश", "स्पेल चेक", "ग्रामर चेक", "ऑटोकरेक्ट"],
    "answer_en": "Thesaurus",
    "answer_hi": "समानार्थी शब्दकोश",
    "explanation_en": "Thesaurus suggests alternative words with similar meanings.",
    "explanation_hi": "समानार्थी शब्दकोश समान अर्थ वाले वैकल्पिक शब्द सुझाता है।"
  },
  {
    "num": 47,
    "question_en": "What is the purpose of 'chart' in spreadsheets?",
    "question_hi": "स्प्रेडशीट में 'चार्ट' का उद्देश्य क्या है?",
    "options_en": ["Visual representation of data", "Mathematical calculation", "Text formatting", "Data sorting"],
    "options_hi": ["डेटा का दृश्य निरूपण", "गणितीय गणना", "टेक्स्ट फॉर्मेटिंग", "डेटा सॉर्टिंग"],
    "answer_en": "Visual representation of data",
    "answer_hi": "डेटा का दृश्य निरूपण",
    "explanation_en": "Charts (bar, pie, line) make numerical data easier to understand visually.",
    "explanation_hi": "चार्ट (बार, पाई, लाइन) संख्यात्मक डेटा को दृश्य रूप से समझने में आसान बनाते हैं।"
  },
  {
    "num": 48,
    "question_en": "Which key combination makes text italic?",
    "question_hi": "किस कुंजी संयोजन से टेक्स्ट इटैलिक होता है?",
    "options_en": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + D"],
    "options_hi": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + D"],
    "answer_en": "Ctrl + I",
    "answer_hi": "Ctrl + I",
    "explanation_en": "Ctrl + I applies italic formatting to selected text.",
    "explanation_hi": "Ctrl + I चयनित टेक्स्ट पर इटैलिक फॉर्मेटिंग लागू करता है।"
  },
  {
    "num": 49,
    "question_en": "What is 'mixed cell reference'?",
    "question_hi": "'मिक्स्ड सेल रेफरेंस' क्या है?",
    "options_en": ["Part fixed, part changing reference", "Completely fixed reference", "Completely changing reference", "3D reference"],
    "options_hi": ["आंशिक रूप से स्थिर, आंशिक रूप से बदलता संदर्भ", "पूरी तरह से स्थिर संदर्भ", "पूरी तरह से बदलता संदर्भ", "3D संदर्भ"],
    "answer_en": "Part fixed, part changing reference",
    "answer_hi": "आंशिक रूप से स्थिर, आंशिक रूप से बदलता संदर्भ",
    "explanation_en": "Mixed reference fixes either column ($A1) or row (A$1) but not both.",
    "explanation_hi": "मिक्स्ड रेफरेंस या तो कॉलम ($A1) या पंक्ति (A$1) को ठीक करता है लेकिन दोनों को नहीं।"
  },
  {
    "num": 50,
    "question_en": "Which function returns the current date only?",
    "question_hi": "कौन सा फ़ंक्शन केवल वर्तमान दिनांक लौटाता है?",
    "options_en": ["TODAY", "NOW", "DATE", "DAY"],
    "options_hi": ["TODAY", "NOW", "DATE", "DAY"],
    "answer_en": "TODAY",
    "answer_hi": "TODAY",
    "explanation_en": "TODAY function returns current date (without time), updating daily.",
    "explanation_hi": "TODAY फ़ंक्शन वर्तमान दिनांक (समय के बिना) लौटाता है, दैनिक अद्यतन होता है।"
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

