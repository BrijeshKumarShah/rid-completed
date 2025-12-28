const questions =[
  {
    "num": 1,
    "question_en": "What is Artificial Intelligence (AI) in simple terms?",
    "question_hi": "सरल शब्दों में आर्टिफिशियल इंटेलिजेंस (AI) क्या है?",
    "options_en": ["Computers performing tasks requiring human intelligence", "Super fast calculations only", "Internet of Things", "Virtual Reality"],
    "options_hi": ["मानव बुद्धि की आवश्यकता वाले कार्य करने वाले कंप्यूटर", "केवल सुपर फास्ट गणना", "इंटरनेट ऑफ थिंग्स", "वर्चुअल रियलिटी"],
    "answer_en": "Computers performing tasks requiring human intelligence",
    "answer_hi": "मानव बुद्धि की आवश्यकता वाले कार्य करने वाले कंप्यूटर",
    "explanation_en": "AI enables computers to perform tasks like learning, reasoning, problem-solving, and perception that typically require human intelligence.",
    "explanation_hi": "AI कंप्यूटर को सीखने, तर्क करने, समस्या-समाधान और धारणा जैसे कार्य करने में सक्षम बनाता है जिनके लिए आमतौर पर मानव बुद्धि की आवश्यकता होती है।"
  },
  {
    "num": 2,
    "question_en": "What does IoT stand for?",
    "question_hi": "IoT का पूर्ण रूप क्या है?",
    "options_en": ["Internet of Things", "Internet of Technology", "Intelligent Objects Technology", "Integrated Online Tools"],
    "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटेलिजेंट ऑब्जेक्ट्स टेक्नोलॉजी", "इंटीग्रेटेड ऑनलाइन टूल्स"],
    "answer_en": "Internet of Things",
    "answer_hi": "इंटरनेट ऑफ थिंग्स",
    "explanation_en": "IoT refers to interconnected physical devices that collect and exchange data over the internet.",
    "explanation_hi": "IoT इंटरनेट पर डेटा एकत्र करने और आदान-प्रदान करने वाले परस्पर जुड़े भौतिक उपकरणों को संदर्भित करता है।"
  },
  {
    "num": 3,
    "question_en": "What is Machine Learning?",
    "question_hi": "मशीन लर्निंग क्या है?",
    "options_en": ["AI subset where systems learn from data", "Physical computer maintenance", "Internet speed optimization", "Data storage method"],
    "options_hi": ["AI उपसमुच्चय जहां सिस्टम डेटा से सीखते हैं", "भौतिक कंप्यूटर रखरखाव", "इंटरनेट गति अनुकूलन", "डेटा भंडारण विधि"],
    "answer_en": "AI subset where systems learn from data",
    "answer_hi": "AI उपसमुच्चय जहां सिस्टम डेटा से सीखते हैं",
    "explanation_en": "Machine Learning is a branch of AI where computer systems learn and improve from experience without being explicitly programmed.",
    "explanation_hi": "मशीन लर्निंग AI की एक शाखा है जहां कंप्यूटर सिस्टम स्पष्ट रूप से प्रोग्राम किए बिना अनुभव से सीखते और सुधार करते हैं।"
  },
  {
    "num": 4,
    "question_en": "What is Big Data?",
    "question_hi": "बिग डेटा क्या है?",
    "options_en": ["Extremely large datasets requiring special processing", "Large computer size", "Fast internet connection", "Many computers networked"],
    "options_hi": ["विशेष प्रसंस्करण की आवश्यकता वाले अत्यधिक बड़े डेटासेट", "बड़ा कंप्यूटर आकार", "तेज़ इंटरनेट कनेक्शन", "कई कंप्यूटर नेटवर्क"],
    "answer_en": "Extremely large datasets requiring special processing",
    "answer_hi": "विशेष प्रसंस्करण की आवश्यकता वाले अत्यधिक बड़े डेटासेट",
    "explanation_en": "Big Data refers to extremely large datasets that traditional data processing applications cannot handle efficiently.",
    "explanation_hi": "बिग डेटा अत्यधिक बड़े डेटासेट को संदर्भित करता है जिन्हें पारंपरिक डेटा प्रसंस्करण अनुप्रयोग कुशलतापूर्वक संभाल नहीं सकते।"
  },
  {
    "num": 5,
    "question_en": "What is Cloud Computing?",
    "question_hi": "क्लाउड कंप्यूटिंग क्या है?",
    "options_en": ["Delivering computing services over internet", "Weather forecasting software", "Computer cooling system", "Data backup on physical drives"],
    "options_hi": ["इंटरनेट पर कंप्यूटिंग सेवाएं देना", "मौसम पूर्वानुमान सॉफ़्टवेयर", "कंप्यूटर कूलिंग सिस्टम", "भौतिक ड्राइव पर डेटा बैकअप"],
    "answer_en": "Delivering computing services over internet",
    "answer_hi": "इंटरनेट पर कंप्यूटिंग सेवाएं देना",
    "explanation_en": "Cloud Computing provides computing services like servers, storage, databases, networking over the internet ('the cloud').",
    "explanation_hi": "क्लाउड कंप्यूटिंग इंटरनेट ('क्लाउड') पर सर्वर, भंडारण, डेटाबेस, नेटवर्किंग जैसी कंप्यूटिंग सेवाएं प्रदान करती है।"
  },
  {
    "num": 6,
    "question_en": "What is Blockchain technology?",
    "question_hi": "ब्लॉकचेन तकनीक क्या है?",
    "options_en": ["Decentralized digital ledger system", "Computer hardware component", "Internet security protocol", "Data compression method"],
    "options_hi": ["विकेंद्रीकृत डिजिटल लेजर प्रणाली", "कंप्यूटर हार्डवेयर घटक", "इंटरनेट सुरक्षा प्रोटोकॉल", "डेटा संपीड़न विधि"],
    "answer_en": "Decentralized digital ledger system",
    "answer_hi": "विकेंद्रीकृत डिजिटल लेजर प्रणाली",
    "explanation_en": "Blockchain is a distributed database that maintains a continuously growing list of records called blocks, secured from tampering.",
    "explanation_hi": "ब्लॉकचेन एक वितरित डेटाबेस है जो ब्लॉक नामक रिकॉर्ड की लगातार बढ़ती सूची बनाए रखता है, जिसे छेड़छाड़ से सुरक्षित रखा जाता है।"
  },
  {
    "num": 7,
    "question_en": "What is Virtual Reality (VR)?",
    "question_hi": "वर्चुअल रियलिटी (VR) क्या है?",
    "options_en": ["Computer-generated simulation of 3D environment", "Online shopping experience", "Video conferencing", "Digital photography"],
    "options_hi": ["3D वातावरण का कंप्यूटर-जनित सिमुलेशन", "ऑनलाइन शॉपिंग अनुभव", "वीडियो कॉन्फ्रेंसिंग", "डिजिटल फोटोग्राफी"],
    "answer_en": "Computer-generated simulation of 3D environment",
    "answer_hi": "3D वातावरण का कंप्यूटर-जनित सिमुलेशन",
    "explanation_en": "VR creates simulated environments that users can interact with using special electronic equipment like headsets.",
    "explanation_hi": "VR सिम्युलेटेड वातावरण बनाता है जिसके साथ उपयोगकर्ता हेडसेट जैसे विशेष इलेक्ट्रॉनिक उपकरणों का उपयोग करके इंटरैक्ट कर सकते हैं।"
  },
  {
    "num": 8,
    "question_en": "What is Augmented Reality (AR)?",
    "question_hi": "ऑगमेंटेड रियलिटी (AR) क्या है?",
    "options_en": ["Overlaying digital information on real world", "Complete virtual world", "Online gaming", "3D printing"],
    "options_hi": ["वास्तविक दुनिया पर डिजिटल जानकारी को ओवरले करना", "पूर्ण आभासी दुनिया", "ऑनलाइन गेमिंग", "3D प्रिंटिंग"],
    "answer_en": "Overlaying digital information on real world",
    "answer_hi": "वास्तविक दुनिया पर डिजिटल जानकारी को ओवरले करना",
    "explanation_en": "AR enhances real-world environments with computer-generated perceptual information, often through smartphone cameras.",
    "explanation_hi": "AR कंप्यूटर-जनित अवधारणात्मक जानकारी के साथ वास्तविक दुनिया के वातावरण को बढ़ाता है, अक्सर स्मार्टफोन कैमरों के माध्यम से।"
  },
  {
    "num": 9,
    "question_en": "What is 5G technology?",
    "question_hi": "5G तकनीक क्या है?",
    "options_en": ["Fifth generation wireless technology", "Fifth generation computer processor", "5 gigabyte storage", "5 times faster 4G"],
    "options_hi": ["पांचवीं पीढ़ी की वायरलेस तकनीक", "पांचवीं पीढ़ी का कंप्यूटर प्रोसेसर", "5 गीगाबाइट भंडारण", "5 गुना तेज 4G"],
    "answer_en": "Fifth generation wireless technology",
    "answer_hi": "पांचवीं पीढ़ी की वायरलेस तकनीक",
    "explanation_en": "5G is the fifth generation technology standard for broadband cellular networks, offering faster speeds and lower latency.",
    "explanation_hi": "5G ब्रॉडबैंड सेलुलर नेटवर्क के लिए पांचवीं पीढ़ी का तकनीकी मानक है, जो तेज गति और कम विलंबता प्रदान करता है।"
  },
  {
    "num": 10,
    "question_en": "What is Quantum Computing?",
    "question_hi": "क्वांटम कंप्यूटिंग क्या है?",
    "options_en": ["Computing using quantum-mechanical phenomena", "Extremely fast traditional computing", "Cloud computing alternative", "Biological computing"],
    "options_hi": ["क्वांटम-यांत्रिक घटनाओं का उपयोग कर कंप्यूटिंग", "अत्यंत तेज पारंपरिक कंप्यूटिंग", "क्लाउड कंप्यूटिंग विकल्प", "जैविक कंप्यूटिंग"],
    "answer_en": "Computing using quantum-mechanical phenomena",
    "answer_hi": "क्वांटम-यांत्रिक घटनाओं का उपयोग कर कंप्यूटिंग",
    "explanation_en": "Quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously, enabling solving complex problems faster.",
    "explanation_hi": "क्वांटम कंप्यूटर क्वांटम बिट्स (क्यूबिट्स) का उपयोग करते हैं जो एक साथ कई अवस्थाओं में मौजूद हो सकते हैं, जिससे जटिल समस्याओं को तेजी से हल करना संभव होता है।"
  },
  {
    "num": 11,
    "question_en": "What is Cybersecurity?",
    "question_hi": "साइबर सुरक्षा क्या है?",
    "options_en": ["Protecting systems/networks from digital attacks", "Physical computer security", "Internet speed management", "Data backup procedures"],
    "options_hi": ["डिजिटल हमलों से सिस्टम/नेटवर्क की सुरक्षा", "भौतिक कंप्यूटर सुरक्षा", "इंटरनेट गति प्रबंधन", "डेटा बैकअप प्रक्रियाएं"],
    "answer_en": "Protecting systems/networks from digital attacks",
    "answer_hi": "डिजिटल हमलों से सिस्टम/नेटवर्क की सुरक्षा",
    "explanation_en": "Cybersecurity involves protecting computers, servers, networks, and data from malicious attacks and unauthorized access.",
    "explanation_hi": "साइबर सुरक्षा में कंप्यूटर, सर्वर, नेटवर्क और डेटा को दुर्भावनापूर्ण हमलों और अनधिकृत पहुंच से बचाना शामिल है।"
  },
  {
    "num": 12,
    "question_en": "What is Digital Literacy?",
    "question_hi": "डिजिटल साक्षरता क्या है?",
    "options_en": ["Ability to use digital technology effectively", "Reading digital clocks", "Typing speed", "Computer programming"],
    "options_hi": ["डिजिटल तकनीक का प्रभावी ढंग से उपयोग करने की क्षमता", "डिजिटल घड़ियाँ पढ़ना", "टाइपिंग गति", "कंप्यूटर प्रोग्रामिंग"],
    "answer_en": "Ability to use digital technology effectively",
    "answer_hi": "डिजिटल तकनीक का प्रभावी ढंग से उपयोग करने की क्षमता",
    "explanation_en": "Digital Literacy includes skills to find, evaluate, create, and communicate information using digital technology.",
    "explanation_hi": "डिजिटल साक्षरता में डिजिटल तकनीक का उपयोग करके जानकारी ढूंढने, मूल्यांकन करने, बनाने और संप्रेषित करने के कौशल शामिल हैं।"
  },
  {
    "num": 13,
    "question_en": "What is E-Governance?",
    "question_hi": "ई-गवर्नेंस क्या है?",
    "options_en": ["Government services through digital means", "Online shopping", "Digital banking", "E-learning platforms"],
    "options_hi": ["डिजिटल माध्यम से सरकारी सेवाएं", "ऑनलाइन खरीदारी", "डिजिटल बैंकिंग", "ई-लर्निंग प्लेटफॉर्म"],
    "answer_en": "Government services through digital means",
    "answer_hi": "डिजिटल माध्यम से सरकारी सेवाएं",
    "explanation_en": "E-Governance uses information technology to deliver government services, exchange information, and integrate various systems.",
    "explanation_hi": "ई-गवर्नेंस सरकारी सेवाओं को वितरित करने, सूचना का आदान-प्रदान करने और विभिन्न प्रणालियों को एकीकृत करने के लिए सूचना प्रौद्योगिकी का उपयोग करता है।"
  },
  {
    "num": 14,
    "question_en": "What is Digital Payment?",
    "question_hi": "डिजिटल भुगतान क्या है?",
    "options_en": ["Electronic transaction instead of cash", "Credit card only", "Bank cheque", "Gold payment"],
    "options_hi": ["नकद के बजाय इलेक्ट्रॉनिक लेनदेन", "केवल क्रेडिट कार्ड", "बैंक चेक", "सोने का भुगतान"],
    "answer_en": "Electronic transaction instead of cash",
    "answer_hi": "नकद के बजाय इलेक्ट्रॉनिक लेनदेन",
    "explanation_en": "Digital payments include UPI, mobile wallets, internet banking, and cards that enable cashless transactions.",
    "explanation_hi": "डिजिटल भुगतान में UPI, मोबाइल वॉलेट, इंटरनेट बैंकिंग और कार्ड शामिल हैं जो कैशलेस लेनदेन सक्षम करते हैं।"
  },
  {
    "num": 15,
    "question_en": "What is Open Source Software?",
    "question_hi": "ओपन सोर्स सॉफ़्टवेयर क्या है?",
    "options_en": ["Software with publicly available source code", "Free trial software", "Cloud-based software", "Government software"],
    "options_hi": ["सार्वजनिक रूप से उपलब्ध सोर्स कोड वाला सॉफ़्टवेयर", "निःशुल्क परीक्षण सॉफ़्टवेयर", "क्लाउड-आधारित सॉफ़्टवेयर", "सरकारी सॉफ़्टवेयर"],
    "answer_en": "Software with publicly available source code",
    "answer_hi": "सार्वजनिक रूप से उपलब्ध सोर्स कोड वाला सॉफ़्टवेयर",
    "explanation_en": "Open source software allows users to study, modify, and distribute the software and its source code to anyone.",
    "explanation_hi": "ओपन सोर्स सॉफ़्टवेयर उपयोगकर्ताओं को सॉफ़्टवेयर और उसके सोर्स कोड का अध्ययन, संशोधन और वितरण किसी को भी करने की अनुमति देता है।"
  },
  {
    "num": 16,
    "question_en": "What is Digital Divide?",
    "question_hi": "डिजिटल डिवाइड क्या है?",
    "options_en": ["Gap between those with/without digital access", "Different computer brands", "Internet speed variations", "Software compatibility issues"],
    "options_hi": ["डिजिटल पहुंच वाले/बिना वाले के बीच अंतर", "विभिन्न कंप्यूटर ब्रांड", "इंटरनेट गति भिन्नताएं", "सॉफ़्टवेयर संगतता समस्याएं"],
    "answer_en": "Gap between those with/without digital access",
    "answer_hi": "डिजिटल पहुंच वाले/बिना वाले के बीच अंतर",
    "explanation_en": "Digital Divide refers to the gap between demographics that have access to modern ICT and those that don't.",
    "explanation_hi": "डिजिटल डिवाइड उन जनसांख्यिकीय समूहों के बीच के अंतर को संदर्भित करता है जिनकी आधुनिक ICT तक पहुंच है और जिनकी नहीं है।"
  },
  {
    "num": 17,
    "question_en": "What is Smart City concept?",
    "question_hi": "स्मार्ट सिटी अवधारणा क्या है?",
    "options_en": ["Using ICT to improve city services", "City with tall buildings", "City with many computers", "Fully automated city"],
    "options_hi": ["शहर सेवाओं में सुधार के लिए ICT का उपयोग", "ऊंची इमारतों वाला शहर", "कई कंप्यूटर वाला शहर", "पूरी तरह स्वचालित शहर"],
    "answer_en": "Using ICT to improve city services",
    "answer_hi": "शहर सेवाओं में सुधार के लिए ICT का उपयोग",
    "explanation_en": "Smart Cities use digital technology and data to enhance performance, well-being, and reduce costs/resource consumption.",
    "explanation_hi": "स्मार्ट सिटी प्रदर्शन, कल्याण में सुधार और लागत/संसाधन खपत को कम करने के लिए डिजिटल प्रौद्योगिकी और डेटा का उपयोग करती हैं।"
  },
  {
    "num": 18,
    "question_en": "What is Telemedicine?",
    "question_hi": "टेलीमेडिसिन क्या है?",
    "options_en": ["Remote medical services using technology", "Medical software only", "Robot doctors", "Online medical stores"],
    "options_hi": ["तकनीक का उपयोग करके दूरस्थ चिकित्सा सेवाएं", "केवल चिकित्सा सॉफ़्टवेयर", "रोबोट डॉक्टर", "ऑनलाइन मेडिकल स्टोर"],
    "answer_en": "Remote medical services using technology",
    "answer_hi": "तकनीक का उपयोग करके दूरस्थ चिकित्सा सेवाएं",
    "explanation_en": "Telemedicine allows patients to consult doctors remotely via video calls, especially useful in rural areas.",
    "explanation_hi": "टेलीमेडिसिन रोगियों को वीडियो कॉल के माध्यम से दूर से डॉक्टरों से परामर्श करने की अनुमति देता है, विशेष रूप से ग्रामीण क्षेत्रों में उपयोगी।"
  },
  {
    "num": 19,
    "question_en": "What is Digital Signature?",
    "question_hi": "डिजिटल हस्ताक्षर क्या है?",
    "options_en": ["Electronic signature verifying document authenticity", "Scanned handwritten signature", "Typed name in document", "Email signature"],
    "options_hi": ["दस्तावेज़ प्रामाणिकता सत्यापित करने वाला इलेक्ट्रॉनिक हस्ताक्षर", "स्कैन किया गया हस्तलिखित हस्ताक्षर", "दस्तावेज़ में टाइप किया गया नाम", "ईमेल हस्ताक्षर"],
    "answer_en": "Electronic signature verifying document authenticity",
    "answer_hi": "दस्तावेज़ प्रामाणिकता सत्यापित करने वाला इलेक्ट्रॉनिक हस्ताक्षर",
    "explanation_en": "Digital signatures use encryption to verify the authenticity and integrity of digital documents and messages.",
    "explanation_hi": "डिजिटल हस्ताक्षर डिजिटल दस्तावेजों और संदेशों की प्रामाणिकता और अखंडता सत्यापित करने के लिए एन्क्रिप्शन का उपयोग करते हैं।"
  },
  {
    "num": 20,
    "question_en": "What is E-Waste?",
    "question_hi": "ई-कचरा क्या है?",
    "options_en": ["Discarded electronic devices", "Digital garbage files", "Old internet data", "Corrupted software"],
    "options_hi": ["त्यागे गए इलेक्ट्रॉनिक उपकरण", "डिजिटल कचरा फ़ाइलें", "पुराना इंटरनेट डेटा", "दूषित सॉफ़्टवेयर"],
    "answer_en": "Discarded electronic devices",
    "answer_hi": "त्यागे गए इलेक्ट्रॉनिक उपकरण",
    "explanation_en": "E-Waste includes discarded computers, mobile phones, TVs, and other electronic equipment that need proper recycling.",
    "explanation_hi": "ई-कचरे में त्यागे गए कंप्यूटर, मोबाइल फोन, टीवी और अन्य इलेक्ट्रॉनिक उपकरण शामिल हैं जिनके उचित पुनर्चक्रण की आवश्यकता होती है।"
  },
  {
    "num": 21,
    "question_en": "What is Net Neutrality?",
    "question_hi": "नेट न्यूट्रैलिटी क्या है?",
    "options_en": ["Equal treatment of all internet data", "Free internet for all", "Government control of internet", "Internet without ads"],
    "options_hi": ["सभी इंटरनेट डेटा का समान उपचार", "सभी के लिए मुफ्त इंटरनेट", "इंटरनेट का सरकारी नियंत्रण", "विज्ञापनों के बिना इंटरनेट"],
    "answer_en": "Equal treatment of all internet data",
    "answer_hi": "सभी इंटरनेट डेटा का समान उपचार",
    "explanation_en": "Net Neutrality means Internet Service Providers should treat all data equally, not charging differentially or blocking content.",
    "explanation_hi": "नेट न्यूट्रैलिटी का मतलब है कि इंटरनेट सेवा प्रदाताओं को सभी डेटा को समान रूप से व्यवहार करना चाहिए, अलग-अलग शुल्क नहीं लेना या सामग्री को ब्लॉक नहीं करना।"
  },
  {
    "num": 22,
    "question_en": "What is Data Privacy?",
    "question_hi": "डेटा गोपनीयता क्या है?",
    "options_en": ["Right to control personal information", "Hiding all data", "Government data access", "Corporate data sharing"],
    "options_hi": ["व्यक्तिगत जानकारी को नियंत्रित करने का अधिकार", "सभी डेटा छिपाना", "सरकारी डेटा पहुंच", "कॉर्पोरेट डेटा साझाकरण"],
    "answer_en": "Right to control personal information",
    "answer_hi": "व्यक्तिगत जानकारी को नियंत्रित करने का अधिकार",
    "explanation_en": "Data Privacy involves proper handling of personal data including consent, notice, and regulatory obligations.",
    "explanation_hi": "डेटा गोपनीयता में सहमति, सूचना और नियामक दायित्वों सहित व्यक्तिगत डेटा का उचित संचालन शामिल है।"
  },
  {
    "num": 23,
    "question_en": "What is Digital Currency/Cryptocurrency?",
    "question_hi": "डिजिटल मुद्रा/क्रिप्टोकरेंसी क्या है?",
    "options_en": ["Digital asset using cryptography for security", "Online banking money", "Credit card balance", "Mobile wallet balance"],
    "options_hi": ["सुरक्षा के लिए क्रिप्टोग्राफी का उपयोग करने वाली डिजिटल संपत्ति", "ऑनलाइन बैंकिंग पैसा", "क्रेडिट कार्ड बैलेंस", "मोबाइल वॉलेट बैलेंस"],
    "answer_en": "Digital asset using cryptography for security",
    "answer_hi": "सुरक्षा के लिए क्रिप्टोग्राफी का उपयोग करने वाली डिजिटल संपत्ति",
    "explanation_en": "Cryptocurrencies like Bitcoin are digital currencies using blockchain technology for secure, decentralized transactions.",
    "explanation_hi": "बिटकॉइन जैसी क्रिप्टोकरेंसी सुरक्षित, विकेंद्रीकृत लेनदेन के लिए ब्लॉकचेन तकनीक का उपयोग करने वाली डिजिटल मुद्राएं हैं।"
  },
  {
    "num": 24,
    "question_en": "What is 3D Printing?",
    "question_hi": "3D प्रिंटिंग क्या है?",
    "options_en": ["Creating physical objects from digital models", "Printing 3D photos", "Three-color printing", "Printing on 3D paper"],
    "options_hi": ["डिजिटल मॉडल से भौतिक वस्तुएं बनाना", "3D फोटो प्रिंटिंग", "तीन-रंग प्रिंटिंग", "3D कागज पर प्रिंटिंग"],
    "answer_en": "Creating physical objects from digital models",
    "answer_hi": "डिजिटल मॉडल से भौतिक वस्तुएं बनाना",
    "explanation_en": "3D printing builds three-dimensional objects by adding material layer by layer based on digital designs.",
    "explanation_hi": "3D प्रिंटिंग डिजिटल डिजाइन के आधार पर सामग्री को परत दर परत जोड़कर त्रि-आयामी वस्तुएं बनाती है।"
  },
  {
    "num": 25,
    "question_en": "What is Robotics?",
    "question_hi": "रोबोटिक्स क्या है?",
    "options_en": ["Designing, constructing, operating robots", "Computer animation", "Remote control toys", "Video game characters"],
    "options_hi": ["रोबोट डिजाइनिंग, निर्माण, संचालन", "कंप्यूटर एनीमेशन", "रिमोट कंट्रोल खिलौने", "वीडियो गेम पात्र"],
    "answer_en": "Designing, constructing, operating robots",
    "answer_hi": "रोबोट डिजाइनिंग, निर्माण, संचालन",
    "explanation_en": "Robotics involves creating machines (robots) that can perform tasks automatically or with guidance.",
    "explanation_hi": "रोबोटिक्स में ऐसी मशीनें (रोबोट) बनाना शामिल है जो स्वचालित रूप से या मार्गदर्शन के साथ कार्य कर सकती हैं।"
  },
  {
    "num": 26,
    "question_en": "What is Drone Technology?",
    "question_hi": "ड्रोन तकनीक क्या है?",
    "options_en": ["Unmanned aerial vehicles (UAVs)", "Robot vacuum cleaners", "Self-driving cars", "Flying robots in movies"],
    "options_hi": ["मानव रहित हवाई वाहन (UAVs)", "रोबोट वैक्यूम क्लीनर", "स्व-चालित कारें", "फिल्मों में उड़ने वाले रोबोट"],
    "answer_en": "Unmanned aerial vehicles (UAVs)",
    "answer_hi": "मानव रहित हवाई वाहन (UAVs)",
    "explanation_en": "Drones are aircraft without human pilots, controlled remotely or autonomously, used for photography, delivery, surveillance.",
    "explanation_hi": "ड्रोन मानव पायलटों के बिना विमान हैं, जिन्हें दूर से या स्वायत्त रूप से नियंत्रित किया जाता है, फोटोग्राफी, वितरण, निगरानी के लिए उपयोग किया जाता है।"
  },
  {
    "num": 27,
    "question_en": "What is Self-Driving Car technology?",
    "question_hi": "सेल्फ-ड्राइविंग कार तकनीक क्या है?",
    "options_en": ["Autonomous vehicles using sensors/AI", "Remote controlled cars", "Cars with GPS only", "Electric vehicles"],
    "options_hi": ["सेंसर/AI का उपयोग करने वाले स्वायत्त वाहन", "रिमोट नियंत्रित कारें", "केवल जीपीएस वाली कारें", "इलेक्ट्रिक वाहन"],
    "answer_en": "Autonomous vehicles using sensors/AI",
    "answer_hi": "सेंसर/AI का उपयोग करने वाले स्वायत्त वाहन",
    "explanation_en": "Autonomous cars use sensors, cameras, radar, and AI to navigate without human input.",
    "explanation_hi": "स्वायत्त कारें मानव इनपुट के बिना नेविगेट करने के लिए सेंसर, कैमरा, रडार और AI का उपयोग करती हैं।"
  },
  {
    "num": 28,
    "question_en": "What is Biometric Authentication?",
    "question_hi": "बायोमेट्रिक प्रमाणीकरण क्या है?",
    "options_en": ["Using biological characteristics for identification", "Password authentication", "Security questions", "ID card verification"],
    "options_hi": ["पहचान के लिए जैविक विशेषताओं का उपयोग", "पासवर्ड प्रमाणीकरण", "सुरक्षा प्रश्न", "आईडी कार्ड सत्यापन"],
    "answer_en": "Using biological characteristics for identification",
    "answer_hi": "पहचान के लिए जैविक विशेषताओं का उपयोग",
    "explanation_en": "Biometric authentication uses unique physical characteristics like fingerprints, facial recognition, or iris scans.",
    "explanation_hi": "बायोमेट्रिक प्रमाणीकरण अंगुलियों के निशान, चेहरे की पहचान, या आईरिस स्कैन जैसी अद्वितीय शारीरिक विशेषताओं का उपयोग करता है।"
  },
  {
    "num": 29,
    "question_en": "What is Edge Computing?",
    "question_hi": "एज कंप्यूटिंग क्या है?",
    "options_en": ["Processing data near its source rather than cloud", "Computer edge design", "Sharp edge technology", "Cutting-edge computing"],
    "options_hi": ["क्लाउड के बजाय अपने स्रोत के पास डेटा प्रसंस्करण", "कंप्यूटर एज डिजाइन", "तीक्ष्ण किनारा तकनीक", "अत्याधुनिक कंप्यूटिंग"],
    "answer_en": "Processing data near its source rather than cloud",
    "answer_hi": "क्लाउड के बजाय अपने स्रोत के पास डेटा प्रसंस्करण",
    "explanation_en": "Edge Computing processes data closer to where it's generated (like IoT devices) rather than sending to centralized cloud.",
    "explanation_hi": "एज कंप्यूटिंग डेटा को उसके उत्पन्न होने के स्थान (जैसे IoT उपकरण) के करीब संसाधित करती है न कि केंद्रीकृत क्लाउड पर भेजती है।"
  },
  {
    "num": 30,
    "question_en": "What is Green Computing?",
    "question_hi": "ग्रीन कंप्यूटिंग क्या है?",
    "options_en": ["Environmentally responsible computing", "Green colored computers", "Computing in nature", "Plant-based computing"],
    "options_hi": ["पर्यावरण की दृष्टि से जिम्मेदार कंप्यूटिंग", "हरे रंग के कंप्यूटर", "प्रकृति में कंप्यूटिंग", "पौधे-आधारित कंप्यूटिंग"],
    "answer_en": "Environmentally responsible computing",
    "answer_hi": "पर्यावरण की दृष्टि से जिम्मेदार कंप्यूटिंग",
    "explanation_en": "Green Computing aims to reduce environmental impact through energy-efficient hardware, recycling, and sustainable practices.",
    "explanation_hi": "ग्रीन कंप्यूटिंग का लक्ष्य ऊर्जा-कुशल हार्डवेयर, पुनर्चक्रण और स्थायी प्रथाओं के माध्यम से पर्यावरणीय प्रभाव को कम करना है।"
  },
  {
    "num": 31,
    "question_en": "What is Wearable Technology?",
    "question_hi": "वेयरेबल तकनीक क्या है?",
    "options_en": ["Electronic devices worn on body", "Clothing with pockets", "Heavy computers", "Carry-on electronics"],
    "options_hi": ["शरीर पर पहने जाने वाले इलेक्ट्रॉनिक उपकरण", "जेब वाले कपड़े", "भारी कंप्यूटर", "हैंड-कैरी इलेक्ट्रॉनिक्स"],
    "answer_en": "Electronic devices worn on body",
    "answer_hi": "शरीर पर पहने जाने वाले इलेक्ट्रॉनिक उपकरण",
    "explanation_en": "Wearables include smartwatches, fitness trackers, and smart glasses that monitor health, activity, and provide notifications.",
    "explanation_hi": "वेयरेबल्स में स्मार्टवॉच, फिटनेस ट्रैकर और स्मार्ट ग्लास शामिल हैं जो स्वास्थ्य, गतिविधि की निगरानी करते हैं और सूचनाएं प्रदान करते हैं।"
  },
  {
    "num": 32,
    "question_en": "What is Digital Twin technology?",
    "question_hi": "डिजिटल ट्विन तकनीक क्या है?",
    "options_en": ["Virtual replica of physical system", "Identical computers", "Twin monitor setup", "Duplicate software"],
    "options_hi": ["भौतिक प्रणाली की आभासी प्रतिकृति", "समान कंप्यूटर", "ट्विन मॉनिटर सेटअप", "डुप्लिकेट सॉफ़्टवेयर"],
    "answer_en": "Virtual replica of physical system",
    "answer_hi": "भौतिक प्रणाली की आभासी प्रतिकृति",
    "explanation_en": "Digital Twin creates virtual models of physical objects/systems for simulation, analysis, and control.",
    "explanation_hi": "डिजिटल ट्विन सिमुलेशन, विश्लेषण और नियंत्रण के लिए भौतिक वस्तुओं/प्रणालियों के आभासी मॉडल बनाता है।"
  },
  {
    "num": 33,
    "question_en": "What is Metaverse?",
    "question_hi": "मेटावर्स क्या है?",
    "options_en": ["Virtual shared space merging physical/digital", "Advanced video game", "Social media platform", "3D internet"],
    "options_hi": ["भौतिक/डिजिटल को मिलाने वाला आभासी साझा स्थान", "उन्नत वीडियो गेम", "सोशल मीडिया प्लेटफॉर्म", "3D इंटरनेट"],
    "answer_en": "Virtual shared space merging physical/digital",
    "answer_hi": "भौतिक/डिजिटल को मिलाने वाला आभासी साझा स्थान",
    "explanation_en": "Metaverse is a collective virtual shared space created by converging virtual and physical reality.",
    "explanation_hi": "मेटावर्स आभासी और भौतिक वास्तविकता के अभिसरण द्वारा बनाई गई एक सामूहिक आभासी साझा स्थान है।"
  },
  {
    "num": 34,
    "question_en": "What is NAS (Network Attached Storage)?",
    "question_hi": "NAS (नेटवर्क अटैच्ड स्टोरेज) क्या है?",
    "options_en": ["Storage device connected to network", "National storage system", "Native computer storage", "Nearby storage"],
    "options_hi": ["नेटवर्क से जुड़ा भंडारण उपकरण", "राष्ट्रीय भंडारण प्रणाली", "मूल कंप्यूटर भंडारण", "निकटवर्ती भंडारण"],
    "answer_en": "Storage device connected to network",
    "answer_hi": "नेटवर्क से जुड़ा भंडारण उपकरण",
    "explanation_en": "NAS provides centralized data storage accessible to multiple users over a network.",
    "explanation_hi": "NAS केंद्रीकृत डेटा भंडारण प्रदान करता है जिस तक नेटवर्क पर कई उपयोगकर्ता पहुंच सकते हैं।"
  },
  {
    "num": 35,
    "question_en": "What is Ransomware?",
    "question_hi": "रैंसमवेयर क्या है?",
    "options_en": ["Malware that encrypts files for ransom", "Virus that deletes files", "Spyware for monitoring", "Adware showing ads"],
    "options_hi": ["फिरौती के लिए फ़ाइलों को एन्क्रिप्ट करने वाला मैलवेयर", "फ़ाइलें हटाने वाला वायरस", "निगरानी के लिए स्पाइवेयर", "विज्ञापन दिखाने वाला एडवेयर"],
    "answer_en": "Malware that encrypts files for ransom",
    "answer_hi": "फिरौती के लिए फ़ाइलों को एन्क्रिप्ट करने वाला मैलवेयर",
    "explanation_en": "Ransomware blocks access to computer systems or data until a ransom is paid.",
    "explanation_hi": "रैंसमवेयर फिरौती चुकाए जाने तक कंप्यूटर सिस्टम या डेटा तक पहुंच को रोकता है।"
  },
  {
    "num": 36,
    "question_en": "What is Phishing?",
    "question_hi": "फ़िशिंग क्या है?",
    "options_en": ["Fraudulent attempt to obtain sensitive information", "Catching fish online", "Photo sharing", "File sharing"],
    "options_hi": ["संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास", "ऑनलाइन मछली पकड़ना", "फोटो साझाकरण", "फ़ाइल साझाकरण"],
    "answer_en": "Fraudulent attempt to obtain sensitive information",
    "answer_hi": "संवेदनशील जानकारी प्राप्त करने का धोखाधड़ी प्रयास",
    "explanation_en": "Phishing uses deceptive emails or websites to trick users into revealing passwords, credit card numbers, etc.",
    "explanation_hi": "फ़िशिंग भ्रामक ईमेल या वेबसाइटों का उपयोग करके उपयोगकर्ताओं को पासवर्ड, क्रेडिट कार्ड नंबर आदि प्रकट करने के लिए धोखा देती है।"
  },
  {
    "num": 37,
    "question_en": "What is Deepfake?",
    "question_hi": "डीपफेक क्या है?",
    "options_en": ["AI-generated fake media content", "Deep search engine", "Deep learning software", "Deep web browsing"],
    "options_hi": ["AI-जनित नकली मीडिया सामग्री", "गहरी खोज इंजन", "डीप लर्निंग सॉफ़्टवेयर", "डीप वेब ब्राउज़िंग"],
    "answer_en": "AI-generated fake media content",
    "answer_hi": "AI-जनित नकली मीडिया सामग्री",
    "explanation_en": "Deepfakes use AI to create realistic but fake audio/video, often for malicious purposes.",
    "explanation_hi": "डीपफेक वास्तविक लेकिन नकली ऑडियो/वीडियो बनाने के लिए AI का उपयोग करते हैं, अक्सर दुर्भावनापूर्ण उद्देश्यों के लिए।"
  },
  {
    "num": 38,
    "question_en": "What is Zero Trust Security model?",
    "question_hi": "जीरो ट्रस्ट सुरक्षा मॉडल क्या है?",
    "options_en": ["Verify everything, trust nothing by default", "No security needed", "Trust all internal users", "Zero password policy"],
    "options_hi": ["डिफ़ॉल्ट रूप से सब कुछ सत्यापित करें, किसी पर भरोसा न करें", "कोई सुरक्षा आवश्यक नहीं", "सभी आंतरिक उपयोगकर्ताओं पर भरोसा करें", "जीरो पासवर्ड नीति"],
    "answer_en": "Verify everything, trust nothing by default",
    "answer_hi": "डिफ़ॉल्ट रूप से सब कुछ सत्यापित करें, किसी पर भरोसा न करें",
    "explanation_en": "Zero Trust assumes no trust for any entity inside or outside network, requiring verification for every access attempt.",
    "explanation_hi": "जीरो ट्रस्ट नेटवर्क के अंदर या बाहर किसी भी इकाई के लिए कोई विश्वास नहीं मानता है, जिसमें प्रत्येक पहुंच प्रयास के लिए सत्यापन की आवश्यकता होती है।"
  },
  {
    "num": 39,
    "question_en": "What is DevOps?",
    "question_hi": "डेवॉप्स क्या है?",
    "options_en": ["Combining development and operations", "Developer options", "Device operations", "Digital operations"],
    "options_hi": ["विकास और संचालन को जोड़ना", "डेवलपर विकल्प", "डिवाइस संचालन", "डिजिटल संचालन"],
    "answer_en": "Combining development and operations",
    "answer_hi": "विकास और संचालन को जोड़ना",
    "explanation_en": "DevOps integrates software development (Dev) and IT operations (Ops) to shorten development lifecycle.",
    "explanation_hi": "डेवॉप्स सॉफ़्टवेयर विकास (Dev) और आईटी संचालन (Ops) को विकास जीवनचक्र को छोटा करने के लिए एकीकृत करता है।"
  },
  {
    "num": 40,
    "question_en": "What is Agile Methodology?",
    "question_hi": "एजाइल मेथडोलॉजी क्या है?",
    "options_en": ["Iterative approach to project management", "Fast programming", "Flexible hardware", "Quick internet"],
    "options_hi": ["परियोजना प्रबंधन के लिए पुनरावृत्त दृष्टिकोण", "तेज़ प्रोग्रामिंग", "लचीला हार्डवेयर", "त्वरित इंटरनेट"],
    "answer_en": "Iterative approach to project management",
    "answer_hi": "परियोजना प्रबंधन के लिए पुनरावृत्त दृष्टिकोण",
    "explanation_en": "Agile breaks projects into small increments with minimal planning, allowing rapid adaptation to changes.",
    "explanation_hi": "एजाइल परियोजनाओं को न्यूनतम योजना के साथ छोटी वृद्धि में तोड़ता है, जिससे परिवर्तनों के लिए त्वरित अनुकूलन की अनुमति मिलती है।"
  },
  {
    "num": 41,
    "question_en": "What is Digital Forensics?",
    "question_hi": "डिजिटल फोरेंसिक क्या है?",
    "options_en": ["Recovering/investigating digital data", "Digital photography", "Online research", "Data entry"],
    "options_hi": ["डिजिटल डेटा की पुनर्प्राप्ति/जांच", "डिजिटल फोटोग्राफी", "ऑनलाइन शोध", "डेटा प्रविष्टि"],
    "answer_en": "Recovering/investigating digital data",
    "answer_hi": "डिजिटल डेटा की पुनर्प्राप्ति/जांच",
    "explanation_en": "Digital Forensics involves recovering and investigating material found in digital devices for legal evidence.",
    "explanation_hi": "डिजिटल फोरेंसिक में कानूनी सबूत के लिए डिजिटल उपकरणों में पाए जाने वाली सामग्री की पुनर्प्राप्ति और जांच शामिल है।"
  },
  {
    "num": 42,
    "question_en": "What is Ethical Hacking?",
    "question_hi": "एथिकल हैकिंग क्या है?",
    "options_en": ["Authorized hacking to improve security", "Illegal hacking", "Learning to hack", "Hacking for fun"],
    "options_hi": ["सुरक्षा में सुधार के लिए अधिकृत हैकिंग", "अवैध हैकिंग", "हैकिंग सीखना", "मनोरंजन के लिए हैकिंग"],
    "answer_en": "Authorized hacking to improve security",
    "answer_hi": "सुरक्षा में सुधार के लिए अधिकृत हैकिंग",
    "explanation_en": "Ethical hackers identify vulnerabilities in systems with permission to help organizations strengthen security.",
    "explanation_hi": "एथिकल हैकर संगठनों को सुरक्षा मजबूत करने में मदद करने के लिए अनुमति के साथ सिस्टम में कमजोरियों की पहचान करते हैं।"
  },
  {
    "num": 43,
    "question_en": "What is Data Mining?",
    "question_hi": "डेटा माइनिंग क्या है?",
    "options_en": ["Discovering patterns in large datasets", "Data storage", "Data deletion", "Data transfer"],
    "options_hi": ["बड़े डेटासेट में पैटर्न की खोज", "डेटा भंडारण", "डेटा विलोपन", "डेटा स्थानांतरण"],
    "answer_en": "Discovering patterns in large datasets",
    "answer_hi": "बड़े डेटासेट में पैटर्न की खोज",
    "explanation_en": "Data Mining analyzes large datasets to discover patterns, correlations, and insights for decision-making.",
    "explanation_hi": "डेटा माइनिंग निर्णय लेने के लिए पैटर्न, सहसंबंध और अंतर्दृष्टि की खोज करने के लिए बड़े डेटासेट का विश्लेषण करती है।"
  },
  {
    "num": 44,
    "question_en": "What is Predictive Analytics?",
    "question_hi": "प्रेडिक्टिव एनालिटिक्स क्या है?",
    "options_en": ["Using data to predict future outcomes", "Past data analysis", "Current data reporting", "Basic data counting"],
    "options_hi": ["भविष्य के परिणामों की भविष्यवाणी करने के लिए डेटा का उपयोग", "पिछले डेटा विश्लेषण", "वर्तमान डेटा रिपोर्टिंग", "मूल डेटा गिनती"],
    "answer_en": "Using data to predict future outcomes",
    "answer_hi": "भविष्य के परिणामों की भविष्यवाणी करने के लिए डेटा का उपयोग",
    "explanation_en": "Predictive Analytics uses historical data, statistical algorithms, and machine learning to predict future events.",
    "explanation_hi": "प्रेडिक्टिव एनालिटिक्स भविष्य की घटनाओं की भविष्यवाणी करने के लिए ऐतिहासिक डेटा, सांख्यिकीय एल्गोरिदम और मशीन लर्निंग का उपयोग करती है।"
  },
  {
    "num": 45,
    "question_en": "What is Natural Language Processing (NLP)?",
    "question_hi": "नेचुरल लैंग्वेज प्रोसेसिंग (NLP) क्या है?",
    "options_en": ["AI understanding human language", "Language translation only", "Speech recognition only", "Text formatting"],
    "options_hi": ["AI मानव भाषा समझना", "केवल भाषा अनुवाद", "केवल भाषण मान्यता", "टेक्स्ट फ़ॉर्मेटिंग"],
    "answer_en": "AI understanding human language",
    "answer_hi": "AI मानव भाषा समझना",
    "explanation_en": "NLP enables computers to understand, interpret, and generate human language, used in chatbots, translators, etc.",
    "explanation_hi": "NLP कंप्यूटर को मानव भाषा को समझने, व्याख्या करने और उत्पन्न करने में सक्षम बनाता है, चैटबॉट, अनुवादक आदि में उपयोग किया जाता है।"
  },
  {
    "num": 46,
    "question_en": "What is Computer Vision?",
    "question_hi": "कंप्यूटर विजन क्या है?",
    "options_en": ["AI interpreting visual information", "Computer display quality", "Video editing", "3D graphics"],
    "options_hi": ["AI दृश्य जानकारी की व्याख्या", "कंप्यूटर डिस्प्ले गुणवत्ता", "वीडियो संपादन", "3D ग्राफिक्स"],
    "answer_en": "AI interpreting visual information",
    "answer_hi": "AI दृश्य जानकारी की व्याख्या",
    "explanation_en": "Computer Vision enables computers to gain understanding from digital images/videos, used in facial recognition, autonomous vehicles.",
    "explanation_hi": "कंप्यूटर विजन कंप्यूटर को डिजिटल छवियों/वीडियो से समझ हासिल करने में सक्षम बनाता है, चेहरे की पहचान, स्वायत्त वाहनों में उपयोग किया जाता है।"
  },
  {
    "num": 47,
    "question_en": "What is Geofencing?",
    "question_hi": "जियोफेंसिंग क्या है?",
    "options_en": ["Virtual geographic boundary triggering actions", "Fencing around computers", "Network security fence", "Physical security fence"],
    "options_hi": ["कार्रवाई शुरू करने वाली आभासी भौगोलिक सीमा", "कंप्यूटर के चारों ओर बाड़ लगाना", "नेटवर्क सुरक्षा बाड़", "भौतिक सुरक्षा बाड़"],
    "answer_en": "Virtual geographic boundary triggering actions",
    "answer_hi": "कार्रवाई शुरू करने वाली आभासी भौगोलिक सीमा",
    "explanation_en": "Geofencing uses GPS or RFID to define virtual boundaries that trigger actions when devices enter/exit.",
    "explanation_hi": "जियोफेंसिंग आभासी सीमाएं परिभाषित करने के लिए जीपीएस या आरएफआईडी का उपयोग करती है जो उपकरणों के प्रवेश/निकास पर कार्रवाई शुरू करती हैं।"
  },
  {
    "num": 48,
    "question_en": "What is Digital Inclusion?",
    "question_hi": "डिजिटल समावेशन क्या है?",
    "options_en": ["Ensuring all have access to digital technologies", "Including digital content", "Digital file organization", "Online membership"],
    "options_hi": ["यह सुनिश्चित करना कि सभी की डिजिटल तकनीक तक पहुंच हो", "डिजिटल सामग्री शामिल करना", "डिजिटल फ़ाइल संगठन", "ऑनलाइन सदस्यता"],
    "answer_en": "Ensuring all have access to digital technologies",
    "answer_hi": "यह सुनिश्चित करना कि सभी की डिजिटल तकनीक तक पहुंच हो",
    "explanation_en": "Digital Inclusion aims to ensure all individuals have access to and can use information and communication technologies.",
    "explanation_hi": "डिजिटल समावेशन का उद्देश्य यह सुनिश्चित करना है कि सभी व्यक्तियों की सूचना और संचार प्रौद्योगिकी तक पहुंच हो और उनका उपयोग कर सकें।"
  },
  {
    "num": 49,
    "question_en": "What is Digital Transformation?",
    "question_hi": "डिजिटल परिवर्तन क्या है?",
    "options_en": ["Integration of digital technology in all areas", "Converting paper to digital", "Changing computer models", "Upgrading software"],
    "options_hi": ["सभी क्षेत्रों में डिजिटल तकनीक का एकीकरण", "कागज को डिजिटल में बदलना", "कंप्यूटर मॉडल बदलना", "सॉफ़्टवेयर उन्नयन"],
    "answer_en": "Integration of digital technology in all areas",
    "answer_hi": "सभी क्षेत्रों में डिजिटल तकनीक का एकीकरण",
    "explanation_en": "Digital Transformation is the adoption of digital technology to transform services/businesses through replacing non-digital processes.",
    "explanation_hi": "डिजिटल परिवर्तन गैर-डिजिटल प्रक्रियाओं को बदलकर सेवाओं/व्यवसायों को बदलने के लिए डिजिटल प्रौद्योगिकी को अपनाना है।"
  },
  {
    "num": 50,
    "question_en": "What is the Fourth Industrial Revolution?",
    "question_hi": "चौथी औद्योगिक क्रांति क्या है?",
    "options_en": ["Digital revolution blending physical/digital/biological", "Fourth computer generation", "Fourth internet version", "Fourth software era"],
    "options_hi": ["भौतिक/डिजिटल/जैविक को मिलाने वाली डिजिटल क्रांति", "चौथी कंप्यूटर पीढ़ी", "चौथा इंटरनेट संस्करण", "चौथा सॉफ़्टवेयर युग"],
    "answer_en": "Digital revolution blending physical/digital/biological",
    "answer_hi": "भौतिक/डिजिटल/जैविक को मिलाने वाली डिजिटल क्रांति",
    "explanation_en": "The 4th Industrial Revolution involves AI, robotics, IoT, genetic engineering, and other technologies merging physical, digital, biological worlds.",
    "explanation_hi": "चौथी औद्योगिक क्रांति में AI, रोबोटिक्स, IoT, जेनेटिक इंजीनियरिंग और अन्य तकनीकें शामिल हैं जो भौतिक, डिजिटल, जैविक दुनिया को मिलाती हैं।"
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

