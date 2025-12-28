const questions = [
  {
    "num": 1,
    "question_en": "Who was the author of the book 'Hind Swaraj'?",
    "question_hi": "‘हिंद स्वराज’ पुस्तक के लेखक कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bal Gangadhar Tilak"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which movement was started in 1919?",
    "question_hi": "1919 में कौन सा आंदोलन शुरू हुआ था?",
    "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
    "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "खिलाफत आंदोलन"],
    "answer_en": "Khilafat Movement",
    "answer_hi": "खिलाफत आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who was the Viceroy of India during the Quit India Movement?",
    "question_hi": "भारत छोड़ो आंदोलन के समय भारत का वायसराय कौन था?",
    "options_en": ["Lord Mountbatten", "Lord Linlithgow", "Lord Curzon", "Lord Irwin"],
    "options_hi": ["लॉर्ड माउंटबेटन", "लॉर्ड लिनलिथगो", "लॉर्ड कर्जन", "लॉर्ड इरविन"],
    "answer_en": "Lord Linlithgow",
    "answer_hi": "लॉर्ड लिनलिथगो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which soil is best for cotton cultivation?",
    "question_hi": "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
    "options_en": ["Red soil", "Black soil", "Alluvial soil", "Laterite soil"],
    "options_hi": ["लाल मिट्टी", "काली मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
    "answer_en": "Black soil",
    "answer_hi": "काली मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "‘बिहार का शोक’ किस नदी को कहा जाता है?",
    "options_en": ["Ganga", "Kosi", "Yamuna", "Ghaghara"],
    "options_hi": ["गंगा", "कोसी", "यमुना", "घाघरा"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which mineral is essential for iron and steel industry?",
    "question_hi": "लौह एवं इस्पात उद्योग के लिए कौन सा खनिज आवश्यक है?",
    "options_en": ["Bauxite", "Mica", "Iron ore", "Copper"],
    "options_hi": ["बॉक्साइट", "अभ्रक", "लौह अयस्क", "तांबा"],
    "answer_en": "Iron ore",
    "answer_hi": "लौह अयस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which sector contributes the maximum to India's GDP?",
    "question_hi": "भारत के GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
    "options_en": ["Primary sector", "Secondary sector", "Tertiary sector", "Agricultural sector"],
    "options_hi": ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "कृषि क्षेत्र"],
    "answer_en": "Tertiary sector",
    "answer_hi": "तृतीयक क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the full form of WTO?",
    "question_hi": "WTO का पूर्ण रूप क्या है?",
    "options_en": ["World Trade Organization", "World Transport Organization", "World Tourism Organization", "World Technical Organization"],
    "options_hi": ["विश्व व्यापार संगठन", "विश्व परिवहन संगठन", "विश्व पर्यटन संगठन", "विश्व तकनीकी संगठन"],
    "answer_en": "World Trade Organization",
    "answer_hi": "विश्व व्यापार संगठन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How many fundamental rights are there in India?",
    "question_hi": "भारत में कितने मौलिक अधिकार हैं?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which body conducts elections in India?",
    "question_hi": "भारत में चुनाव कौन कराता है?",
    "options_en": ["Supreme Court", "Election Commission", "Parliament", "President"],
    "options_hi": ["सुप्रीम कोर्ट", "निर्वाचन आयोग", "संसद", "राष्ट्रपति"],
    "answer_en": "Election Commission",
    "answer_hi": "निर्वाचन आयोग",
    "attempted": false,
    "selected": ""
  },
  [
  {
    "num": 11,
    "question_en": "When was the Civil Disobedience Movement started?",
    "question_hi": "सविनय अवज्ञा आंदोलन कब प्रारंभ हुआ?",
    "options_en": ["1927", "1929", "1930", "1932"],
    "options_hi": ["1927", "1929", "1930", "1932"],
    "answer_en": "1930",
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who wrote the book 'Discovery of India'?",
    "question_hi": "‘डिस्कवरी ऑफ इंडिया’ पुस्तक किसने लिखी?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Rabindranath Tagore"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "रवींद्रनाथ टैगोर"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which crop is known as a Kharif crop?",
    "question_hi": "कौन सी फसल खरीफ की फसल है?",
    "options_en": ["Wheat", "Gram", "Rice", "Mustard"],
    "options_hi": ["गेहूं", "चना", "धान", "सरसों"],
    "answer_en": "Rice",
    "answer_hi": "धान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which state is the largest producer of sugarcane in India?",
    "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Bihar", "Punjab", "Uttar Pradesh", "Maharashtra"],
    "options_hi": ["बिहार", "पंजाब", "उत्तर प्रदेश", "महाराष्ट्र"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which dam is built on the river Narmada?",
    "question_hi": "नर्मदा नदी पर कौन सा बांध बनाया गया है?",
    "options_en": ["Bhakra Nangal", "Hirakud", "Sardar Sarovar", "Tehri"],
    "options_hi": ["भाखड़ा नांगल", "हीराकुंड", "सरदार सरोवर", "टिहरी"],
    "answer_en": "Sardar Sarovar",
    "answer_hi": "सरदार सरोवर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What type of government does India have?",
    "question_hi": "भारत में किस प्रकार की सरकार है?",
    "options_en": ["Unitary", "Federal", "Presidential", "Monarchy"],
    "options_hi": ["एकात्मक", "संघीय", "राष्ट्रपति प्रणाली", "राजतंत्र"],
    "answer_en": "Federal",
    "answer_hi": "संघीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who is the head of the state in India?",
    "question_hi": "भारत में राज्य का प्रमुख कौन होता है?",
    "options_en": ["Prime Minister", "Chief Justice", "President", "Governor"],
    "options_hi": ["प्रधानमंत्री", "मुख्य न्यायाधीश", "राष्ट्रपति", "राज्यपाल"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which right ensures freedom of speech?",
    "question_hi": "कौन सा अधिकार अभिव्यक्ति की स्वतंत्रता देता है?",
    "options_en": ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Religion"],
    "options_hi": ["समानता का अधिकार", "स्वतंत्रता का अधिकार", "शोषण के विरुद्ध अधिकार", "धर्म की स्वतंत्रता"],
    "answer_en": "Right to Freedom",
    "answer_hi": "स्वतंत्रता का अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the main aim of democracy?",
    "question_hi": "लोकतंत्र का मुख्य उद्देश्य क्या है?",
    "options_en": ["Power", "Profit", "Welfare of people", "Rule of king"],
    "options_hi": ["सत्ता", "लाभ", "जनकल्याण", "राजा का शासन"],
    "answer_en": "Welfare of people",
    "answer_hi": "जनकल्याण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which sector provides services?",
    "question_hi": "कौन सा क्षेत्र सेवाएं प्रदान करता है?",
    "options_en": ["Primary", "Secondary", "Tertiary", "Agricultural"],
    "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "कृषि"],
    "answer_en": "Tertiary",
    "answer_hi": "तृतीयक",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which organisation controls money supply in India?",
    "question_hi": "भारत में मुद्रा आपूर्ति को कौन नियंत्रित करता है?",
    "options_en": ["Finance Ministry", "RBI", "SEBI", "Planning Commission"],
    "options_hi": ["वित्त मंत्रालय", "आरबीआई", "सेबी", "योजना आयोग"],
    "answer_en": "RBI",
    "answer_hi": "आरबीआई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which country is called the world's largest democracy?",
    "question_hi": "विश्व का सबसे बड़ा लोकतंत्र किस देश को कहा जाता है?",
    "options_en": ["USA", "India", "China", "UK"],
    "options_hi": ["अमेरिका", "भारत", "चीन", "ब्रिटेन"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the tenure of the Lok Sabha?",
    "question_hi": "लोकसभा का कार्यकाल कितना होता है?",
    "options_en": ["4 years", "5 years", "6 years", "7 years"],
    "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
    "answer_en": "5 years",
    "answer_hi": "5 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which mineral is used in electrical industries?",
    "question_hi": "विद्युत उद्योग में कौन सा खनिज प्रयोग होता है?",
    "options_en": ["Coal", "Iron", "Copper", "Bauxite"],
    "options_hi": ["कोयला", "लोहा", "तांबा", "बॉक्साइट"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which river is the longest in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Yamuna", "Godavari", "Ganga", "Narmada"],
    "options_hi": ["यमुना", "गोदावरी", "गंगा", "नर्मदा"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who appoints the Governor of a state?",
    "question_hi": "राज्य के राज्यपाल की नियुक्ति कौन करता है?",
    "options_en": ["Prime Minister", "Chief Minister", "President", "Parliament"],
    "options_hi": ["प्रधानमंत्री", "मुख्यमंत्री", "राष्ट्रपति", "संसद"],
    "answer_en": "President",
    "answer_hi": "राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which movement gave the slogan 'Do or Die'?",
    "question_hi": "‘करो या मरो’ का नारा किस आंदोलन ने दिया?",
    "options_en": ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
    "options_hi": ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    "answer_en": "Quit India",
    "answer_hi": "भारत छोड़ो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which type of unemployment is found in agriculture?",
    "question_hi": "कृषि में किस प्रकार की बेरोजगारी पाई जाती है?",
    "options_en": ["Seasonal", "Educated", "Industrial", "Urban"],
    "options_hi": ["मौसमी", "शिक्षित", "औद्योगिक", "शहरी"],
    "answer_en": "Seasonal",
    "answer_hi": "मौसमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which day is celebrated as Constitution Day?",
    "question_hi": "संविधान दिवस कब मनाया जाता है?",
    "options_en": ["15 August", "26 January", "26 November", "2 October"],
    "options_hi": ["15 अगस्त", "26 जनवरी", "26 नवंबर", "2 अक्टूबर"],
    "answer_en": "26 November",
    "answer_hi": "26 नवंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which crop is known as a commercial crop?",
    "question_hi": "कौन सी फसल नकदी फसल कहलाती है?",
    "options_en": ["Rice", "Wheat", "Cotton", "Maize"],
    "options_hi": ["धान", "गेहूं", "कपास", "मक्का"],
    "answer_en": "Cotton",
    "answer_hi": "कपास",
    "attempted": false,
    "selected": ""
  },
  [
  {
    "num": 31,
    "question_en": "Who founded the Indian National Congress?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की?",
    "options_en": ["A.O. Hume", "Mahatma Gandhi", "Dadabhai Naoroji", "Bal Gangadhar Tilak"],
    "options_hi": ["ए.ओ. ह्यूम", "महात्मा गांधी", "दादाभाई नौरोजी", "बाल गंगाधर तिलक"],
    "answer_en": "A.O. Hume",
    "answer_hi": "ए.ओ. ह्यूम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "In which year was the Jallianwala Bagh massacre?",
    "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
    "options_en": ["1917", "1918", "1919", "1920"],
    "options_hi": ["1917", "1918", "1919", "1920"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which latitude passes through the middle of India?",
    "question_hi": "भारत के मध्य से कौन सी अक्षांश रेखा गुजरती है?",
    "options_en": ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Prime Meridian"],
    "options_hi": ["भूमध्य रेखा", "कर्क रेखा", "मकर रेखा", "प्रधान मध्यान्ह रेखा"],
    "answer_en": "Tropic of Cancer",
    "answer_hi": "कर्क रेखा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which state has the longest coastline in India?",
    "question_hi": "भारत में सबसे लंबा तटरेखा किस राज्य की है?",
    "options_en": ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    "options_hi": ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which type of forest is found in the Ganga–Brahmaputra delta?",
    "question_hi": "गंगा–ब्रह्मपुत्र डेल्टा में किस प्रकार के वन पाए जाते हैं?",
    "options_en": ["Tropical evergreen", "Mangrove", "Deciduous", "Coniferous"],
    "options_hi": ["उष्णकटिबंधीय सदाबहार", "मैंग्रोव", "पतझड़ी", "शंकुधारी"],
    "answer_en": "Mangrove",
    "answer_hi": "मैंग्रोव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which body makes laws for the whole country?",
    "question_hi": "पूरे देश के लिए कानून कौन बनाता है?",
    "options_en": ["Supreme Court", "Parliament", "Election Commission", "President"],
    "options_hi": ["सुप्रीम कोर्ट", "संसद", "निर्वाचन आयोग", "राष्ट्रपति"],
    "answer_en": "Parliament",
    "answer_hi": "संसद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which house of Parliament is permanent?",
    "question_hi": "संसद का कौन सा सदन स्थायी है?",
    "options_en": ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Vidhan Parishad"],
    "options_hi": ["लोकसभा", "राज्यसभा", "विधानसभा", "विधान परिषद"],
    "answer_en": "Rajya Sabha",
    "answer_hi": "राज्यसभा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which right was added by the 86th Constitutional Amendment?",
    "question_hi": "86वें संविधान संशोधन द्वारा कौन सा अधिकार जोड़ा गया?",
    "options_en": ["Right to Education", "Right to Property", "Right to Privacy", "Right to Work"],
    "options_hi": ["शिक्षा का अधिकार", "संपत्ति का अधिकार", "निजता का अधिकार", "काम का अधिकार"],
    "answer_en": "Right to Education",
    "answer_hi": "शिक्षा का अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which sector includes mining and fishing?",
    "question_hi": "खनन और मत्स्य पालन किस क्षेत्र में आते हैं?",
    "options_en": ["Primary sector", "Secondary sector", "Tertiary sector", "Service sector"],
    "options_hi": ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "सेवा क्षेत्र"],
    "answer_en": "Primary sector",
    "answer_hi": "प्राथमिक क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the main objective of sustainable development?",
    "question_hi": "सतत विकास का मुख्य उद्देश्य क्या है?",
    "options_en": ["Maximum profit", "Use of all resources", "Development without harming future", "Rapid industrialization"],
    "options_hi": ["अधिकतम लाभ", "सभी संसाधनों का उपयोग", "भविष्य को नुकसान पहुँचाए बिना विकास", "तेज औद्योगिकीकरण"],
    "answer_en": "Development without harming future",
    "answer_hi": "भविष्य को नुकसान पहुँचाए बिना विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which crop requires maximum water?",
    "question_hi": "किस फसल को सबसे अधिक पानी की आवश्यकता होती है?",
    "options_en": ["Wheat", "Rice", "Maize", "Pulses"],
    "options_hi": ["गेहूं", "धान", "मक्का", "दलहन"],
    "answer_en": "Rice",
    "answer_hi": "धान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which port is the oldest artificial port in India?",
    "question_hi": "भारत का सबसे पुराना कृत्रिम बंदरगाह कौन सा है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Kandla"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "कांडला"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "बी.आर. अंबेडकर", "राजेंद्र प्रसाद"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which mineral is known as 'Brown Gold'?",
    "question_hi": "‘भूरा सोना’ किस खनिज को कहा जाता है?",
    "options_en": ["Iron ore", "Coal", "Bauxite", "Mica"],
    "options_hi": ["लौह अयस्क", "कोयला", "बॉक्साइट", "अभ्रक"],
    "answer_en": "Coal",
    "answer_hi": "कोयला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which movement was launched after the Jallianwala Bagh incident?",
    "question_hi": "जलियांवाला बाग कांड के बाद कौन सा आंदोलन शुरू हुआ?",
    "options_en": ["Civil Disobedience", "Non-Cooperation", "Quit India", "Swadeshi"],
    "options_hi": ["सविनय अवज्ञा", "असहयोग", "भारत छोड़ो", "स्वदेशी"],
    "answer_en": "Non-Cooperation",
    "answer_hi": "असहयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which industry is known as a basic industry?",
    "question_hi": "कौन सा उद्योग आधारभूत उद्योग कहलाता है?",
    "options_en": ["Cotton textile", "Iron and steel", "Sugar", "Cement"],
    "options_hi": ["कपास वस्त्र", "लौह एवं इस्पात", "चीनी", "सीमेंट"],
    "answer_en": "Iron and steel",
    "answer_hi": "लौह एवं इस्पात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the minimum age to vote in India?",
    "question_hi": "भारत में मतदान की न्यूनतम आयु क्या है?",
    "options_en": ["18 years", "21 years", "25 years", "16 years"],
    "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "16 वर्ष"],
    "answer_en": "18 years",
    "answer_hi": "18 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which crop is known as the 'Golden Fibre'?",
    "question_hi": "किस फसल को ‘सुनहरा रेशा’ कहा जाता है?",
    "options_en": ["Cotton", "Jute", "Silk", "Wool"],
    "options_hi": ["कपास", "जूट", "रेशम", "ऊन"],
    "answer_en": "Jute",
    "answer_hi": "जूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which type of democracy is practiced in India?",
    "question_hi": "भारत में किस प्रकार का लोकतंत्र है?",
    "options_en": ["Direct democracy", "Monarchy", "Representative democracy", "Military rule"],
    "options_hi": ["प्रत्यक्ष लोकतंत्र", "राजतंत्र", "प्रतिनिधि लोकतंत्र", "सैन्य शासन"],
    "answer_en": "Representative democracy",
    "answer_hi": "प्रतिनिधि लोकतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which programme guarantees 100 days of employment?",
    "question_hi": "कौन सी योजना 100 दिनों के रोजगार की गारंटी देती है?",
    "options_en": ["PMAY", "MGNREGA", "Skill India", "Make in India"],
    "options_hi": ["प्रधानमंत्री आवास योजना", "मनरेगा", "स्किल इंडिया", "मेक इन इंडिया"],
    "answer_en": "MGNREGA",
    "answer_hi": "मनरेगा",
    "attempted": false,
    "selected": ""
  }
]

]


  // Questions 11–30 continue in same format
]
// Add more questions here...


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
