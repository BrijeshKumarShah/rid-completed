const questions = [
  {
  "num": 1,
  "question_en": "Which planet is closest to the Sun?",
  "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
  "options_en": ["Mercury", "Venus", "Earth", "Mars"],
  "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  "answer_en": "Mercury",
  "answer_hi": "बुध",
  "attempted": false,
  "selected": ""
},
{
  "num": 2,
  "question_en": "What is the capital of Canada?",
  "question_hi": "कनाडा की राजधानी क्या है?",
  "options_en": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  "options_hi": ["ओटावा", "टोरंटो", "वैंकूवर", "मॉन्ट्रियल"],
  "answer_en": "Ottawa",
  "answer_hi": "ओटावा",
  "attempted": false,
  "selected": ""
},
{
  "num": 3,
  "question_en": "Which gas is most abundant in the Earth's atmosphere?",
  "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
  "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  "answer_en": "Nitrogen",
  "answer_hi": "नाइट्रोजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Who wrote the national anthem of India?",
  "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
  "options_en": ["Rabindranath Tagore", "Bankim Chandra", "Premchand", "Sarojini Naidu"],
  "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "प्रेमचंद", "सरोजिनी नायडू"],
  "answer_en": "Rabindranath Tagore",
  "answer_hi": "रवींद्रनाथ टैगोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "Which instrument measures earthquakes?",
  "question_hi": "भूकंप मापने वाला यंत्र कौन सा है?",
  "options_en": ["Seismograph", "Barometer", "Anemometer", "Thermometer"],
  "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
  "answer_en": "Seismograph",
  "answer_hi": "सीस्मोग्राफ",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Which Indian state has the longest coastline?",
  "question_hi": "भारत का सबसे लंबा समुद्र तट किस राज्य में है?",
  "options_en": ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
  "options_hi": ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
  "answer_en": "Gujarat",
  "answer_hi": "गुजरात",
  "attempted": false,
  "selected": ""
},
{
  "num": 7,
  "question_en": "What is the chemical formula of common salt?",
  "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
  "options_en": ["NaCl", "KCl", "HCl", "Na2CO3"],
  "options_hi": ["NaCl", "KCl", "HCl", "Na2CO3"],
  "answer_en": "NaCl",
  "answer_hi": "NaCl",
  "attempted": false,
  "selected": ""
},
{
  "num": 8,
  "question_en": "Which Indian city is known as the Pink City?",
  "question_hi": "गुलाबी नगर किस शहर को कहा जाता है?",
  "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
  "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
  "answer_en": "Jaipur",
  "answer_hi": "जयपुर",
  "attempted": false,
  "selected": ""
},
{
  "num": 9,
  "question_en": "Which vitamin is produced in the skin by sunlight?",
  "question_hi": "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
  "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  "answer_en": "Vitamin D",
  "answer_hi": "विटामिन D",
  "attempted": false,
  "selected": ""
},
{
  "num": 10,
  "question_en": "Which country is called the Land of Rising Sun?",
  "question_hi": "उगते सूर्य की भूमि किस देश को कहा जाता है?",
  "options_en": ["Japan", "China", "Thailand", "Korea"],
  "options_hi": ["जापान", "चीन", "थाईलैंड", "कोरिया"],
  "answer_en": "Japan",
  "answer_hi": "जापान",
  "attempted": false,
  "selected": ""
},
{
  "num": 11,
  "question_en": "Which river is the longest in India?",
  "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
  "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
  "answer_en": "Ganga",
  "answer_hi": "गंगा",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Who was the first Prime Minister of India?",
  "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
  "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajendra Prasad"],
  "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
  "answer_en": "Jawaharlal Nehru",
  "answer_hi": "जवाहरलाल नेहरू",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which metal is used to make electric wires?",
  "question_hi": "बिजली के तार बनाने में किस धातु का उपयोग होता है?",
  "options_en": ["Copper", "Iron", "Aluminium", "Silver"],
  "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
  "answer_en": "Copper",
  "answer_hi": "तांबा",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "Which organ purifies blood in the human body?",
  "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
  "options_en": ["Kidney", "Heart", "Liver", "Lungs"],
  "options_hi": ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
  "answer_en": "Kidney",
  "answer_hi": "गुर्दा",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "Which Indian festival is known as the Festival of Lights?",
  "question_hi": "रोशनी का त्योहार किसे कहा जाता है?",
  "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
  "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 16,
  "question_en": "Which gas is used by plants for photosynthesis?",
  "question_hi": "प्रकाश संश्लेषण के लिए पौधे कौन सी गैस लेते हैं?",
  "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "What is the capital of Japan?",
  "question_hi": "जापान की राजधानी क्या है?",
  "options_en": ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  "options_hi": ["टोक्यो", "क्योटो", "ओसाका", "हिरोशिमा"],
  "answer_en": "Tokyo",
  "answer_hi": "टोक्यो",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which blood group is called the universal donor?",
  "question_hi": "सार्वभौमिक दाता कौन सा रक्त समूह है?",
  "options_en": ["O Negative", "AB Positive", "A Positive", "B Negative"],
  "options_hi": ["O नेगेटिव", "AB पॉजिटिव", "A पॉजिटिव", "B नेगेटिव"],
  "answer_en": "O Negative",
  "answer_hi": "O नेगेटिव",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "Which planet is known as the Red Planet?",
  "question_hi": "लाल ग्रह किसे कहा जाता है?",
  "options_en": ["Mars", "Jupiter", "Venus", "Saturn"],
  "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "शनि"],
  "answer_en": "Mars",
  "answer_hi": "मंगल",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Which Indian state is known as Devbhoomi?",
  "question_hi": "देवभूमि किस राज्य को कहा जाता है?",
  "options_en": ["Uttarakhand", "Himachal Pradesh", "Kerala", "Assam"],
  "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "केरल", "असम"],
  "answer_en": "Uttarakhand",
  "answer_hi": "उत्तराखंड",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "Who discovered penicillin?",
  "question_hi": "पेनिसिलिन की खोज किसने की?",
  "options_en": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Thomas Edison"],
  "options_hi": ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पास्चर", "थॉमस एडिसन"],
  "answer_en": "Alexander Fleming",
  "answer_hi": "अलेक्जेंडर फ्लेमिंग",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which is the smallest continent by area?",
  "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
  "options_en": ["Australia", "Europe", "Antarctica", "South America"],
  "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  "answer_en": "Australia",
  "answer_hi": "ऑस्ट्रेलिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which organ produces insulin in the human body?",
  "question_hi": "मानव शरीर में इंसुलिन किस अंग से बनता है?",
  "options_en": ["Pancreas", "Liver", "Kidney", "Heart"],
  "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "हृदय"],
  "answer_en": "Pancreas",
  "answer_hi": "अग्न्याशय",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Which Indian city is known as the City of Lakes?",
  "question_hi": "सिरो-सरोवरो का शहर किसे कहा जाता है?",
  "options_en": ["Udaipur", "Bhopal", "Jaipur", "Kochi"],
  "options_hi": ["उदयपुर", "भोपाल", "जयपुर", "कोच्चि"],
  "answer_en": "Udaipur",
  "answer_hi": "उदयपुर",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "What is the main gas in the Earth's atmosphere?",
  "question_hi": "पृथ्वी के वायुमंडल में मुख्य गैस कौन सी है?",
  "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  "answer_en": "Nitrogen",
  "answer_hi": "नाइट्रोजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Who invented the first airplane?",
  "question_hi": "पहला हवाई जहाज किसने बनाया?",
  "options_en": ["Wright Brothers", "Alexander Graham Bell", "Thomas Edison", "James Watt"],
  "options_hi": ["राइट ब्रदर्स", "अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "जेम्स वाट"],
  "answer_en": "Wright Brothers",
  "answer_hi": "राइट ब्रदर्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which element has the chemical symbol 'O'?",
  "question_hi": "'O' का रासायनिक प्रतीक किस तत्व का है?",
  "options_en": ["Oxygen", "Gold", "Silver", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "सोना", "चांदी", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "Which is the largest desert in the world?",
  "question_hi": "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
  "options_en": ["Sahara", "Gobi", "Thar", "Kalahari"],
  "options_hi": ["सहारा", "गोबी", "थार", "कालाहारी"],
  "answer_en": "Sahara",
  "answer_hi": "सहारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "Which planet has the most moons?",
  "question_hi": "किस ग्रह के सबसे ज्यादा चाँद हैं?",
  "options_en": ["Saturn", "Jupiter", "Mars", "Earth"],
  "options_hi": ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
  "answer_en": "Saturn",
  "answer_hi": "शनि",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "Which is the largest organ in the human body?",
  "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  "options_en": ["Skin", "Heart", "Liver", "Lungs"],
  "options_hi": ["त्वचा", "हृदय", "यकृत", "फेफड़े"],
  "answer_en": "Skin",
  "answer_hi": "त्वचा",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which Indian festival is known as the Festival of Colors?",
  "question_hi": "रंगों का त्योहार किसे कहा जाता है?",
  "options_en": ["Holi", "Diwali", "Eid", "Christmas"],
  "options_hi": ["होली", "दीवाली", "ईद", "क्रिसमस"],
  "answer_en": "Holi",
  "answer_hi": "होली",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Which is the fastest land animal?",
  "question_hi": "सबसे तेज़ स्थलीय जानवर कौन सा है?",
  "options_en": ["Cheetah", "Lion", "Tiger", "Leopard"],
  "options_hi": ["चीताह", "सिंह", "बाघ", "तेंदुआ"],
  "answer_en": "Cheetah",
  "answer_hi": "चीताह",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Who is known as the Father of the Nation in India?",
  "question_hi": "भारत में राष्ट्रपिता किसे कहा जाता है?",
  "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Bhagat Singh"],
  "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "भगत सिंह"],
  "answer_en": "Mahatma Gandhi",
  "answer_hi": "महात्मा गांधी",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which planet is known for its rings?",
  "question_hi": "किस ग्रह को उसके छल्लों के लिए जाना जाता है?",
  "options_en": ["Saturn", "Jupiter", "Mars", "Venus"],
  "options_hi": ["शनि", "बृहस्पति", "मंगल", "शुक्र"],
  "answer_en": "Saturn",
  "answer_hi": "शनि",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which is the largest mammal in the world?",
  "question_hi": "विश्व का सबसे बड़ा स्तनपायी कौन सा है?",
  "options_en": ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
  "options_hi": ["नीली व्हेल", "हाथी", "जिराफ", "हिप्पोपोटामस"],
  "answer_en": "Blue Whale",
  "answer_hi": "नीली व्हेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "Which gas do humans breathe in for survival?",
  "question_hi": "मानव जीवन के लिए कौन सी गैस सांस में ली जाती है?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Who is known as the Missile Man of India?",
  "question_hi": "भारत का मिसाइल मैन किसे कहा जाता है?",
  "options_en": ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Rakesh Sharma"],
  "options_hi": ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "राकेश शर्मा"],
  "answer_en": "A.P.J. Abdul Kalam",
  "answer_hi": "ए. पी. जे. अब्दुल कलाम",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which is the largest ocean in the world?",
  "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
  "answer_en": "Pacific Ocean",
  "answer_hi": "प्रशांत महासागर",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Which is the national animal of India?",
  "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
  "options_en": ["Bengal Tiger", "Lion", "Elephant", "Peacock"],
  "options_hi": ["बंगाल टाइगर", "सिंह", "हाथी", "मोर"],
  "answer_en": "Bengal Tiger",
  "answer_hi": "बंगाल टाइगर",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Which element has the chemical symbol 'Au'?",
  "question_hi": "'Au' का रासायनिक प्रतीक किस तत्व का है?",
  "options_en": ["Gold", "Silver", "Iron", "Copper"],
  "options_hi": ["सोना", "चांदी", "लोहा", "तांबा"],
  "answer_en": "Gold",
  "answer_hi": "सोना",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which planet is called Earth's Twin?",
  "question_hi": "कौन सा ग्रह पृथ्वी का जुड़वां कहा जाता है?",
  "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
  "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
  "answer_en": "Venus",
  "answer_hi": "शुक्र",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "Which is the largest island in the world?",
  "question_hi": "विश्व का सबसे बड़ा द्वीप कौन सा है?",
  "options_en": ["Greenland", "Australia", "Borneo", "Madagascar"],
  "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बोर्नियो", "मेडागास्कर"],
  "answer_en": "Greenland",
  "answer_hi": "ग्रीनलैंड",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which Indian state is known as the Land of Rising Sun?",
  "question_hi": "उगते सूर्य की भूमि किस राज्य को कहा जाता है?",
  "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Sikkim"],
  "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "सिक्किम"],
  "answer_en": "Arunachal Pradesh",
  "answer_hi": "अरुणाचल प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "Which Indian city is known as the Silicon Valley of India?",
  "question_hi": "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
  "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  "answer_en": "Bengaluru",
  "answer_hi": "बेंगलुरु",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which gas is used in balloons to make them float?",
  "question_hi": "गुब्बारे उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
  "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  "answer_en": "Helium",
  "answer_hi": "हीलियम",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Who invented the light bulb?",
  "question_hi": "बिजली का बल्ब किसने बनाया?",
  "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
  "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "जेम्स वाट"],
  "answer_en": "Thomas Edison",
  "answer_hi": "थॉमस एडिसन",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which is the national aquatic animal of India?",
  "question_hi": "भारत का राष्ट्रीय जलीय पशु कौन सा है?",
  "options_en": ["Ganges River Dolphin", "Crocodile", "Shark", "Turtle"],
  "options_hi": ["गंगा नदी डॉल्फिन", "मगरमच्छ", "शार्क", "कछुआ"],
  "answer_en": "Ganges River Dolphin",
  "answer_hi": "गंगा नदी डॉल्फिन",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "Which planet is known as the Morning Star?",
  "question_hi": "भोर का तारा किस ग्रह को कहा जाता है?",
  "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
  "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
  "answer_en": "Venus",
  "answer_hi": "शुक्र",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Which Indian freedom fighter is known as Netaji?",
  "question_hi": "किस भारतीय स्वतंत्रता सेनानी को नेताजी कहा जाता है?",
  "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Bal Gangadhar Tilak"],
  "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "बाल गंगाधर तिलक"],
  "answer_en": "Subhas Chandra Bose",
  "answer_hi": "सुभाष चंद्र बोस",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "What is the national bird of India?",
  "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
  "options_en": ["Peacock", "Eagle", "Parrot", "Sparrow"],
  "options_hi": ["मोर", "गरुड़", "तोता", "गौरैया"],
  "answer_en": "Peacock",
  "answer_hi": "मोर",
  "attempted": false,
  "selected": ""
}
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};