const questions = [
{
  "num": 1,
  "question_en": "Which is the largest ocean in the world?",
  "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
  "answer_en": "Pacific Ocean",
  "answer_hi": "प्रशांत महासागर",
  "attempted": false,
  "selected": ""
},
{
  "num": 2,
  "question_en": "Who proposed the theory of relativity?",
  "question_hi": "सापेक्षता का सिद्धांत किसने प्रस्तावित किया?",
  "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  "options_hi": ["अल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
  "answer_en": "Albert Einstein",
  "answer_hi": "अल्बर्ट आइंस्टीन",
  "attempted": false,
  "selected": ""
},
{
  "num": 3,
  "question_en": "Which is the smallest country in the world?",
  "question_hi": "विश्व का सबसे छोटा देश कौन सा है?",
  "options_en": ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
  "options_hi": ["वेटिकन सिटी", "मोनाको", "सान मारीनो", "लिच्टेंस्टीन"],
  "answer_en": "Vatican City",
  "answer_hi": "वेटिकन सिटी",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Which planet is nearest to the Sun?",
  "question_hi": "कौन सा ग्रह सूर्य के सबसे निकट है?",
  "options_en": ["Mercury", "Venus", "Earth", "Mars"],
  "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  "answer_en": "Mercury",
  "answer_hi": "बुध",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "Which Indian state is famous for backwaters?",
  "question_hi": "कौन सा भारतीय राज्य बैकवाटर्स के लिए प्रसिद्ध है?",
  "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
  "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
  "answer_en": "Kerala",
  "answer_hi": "केरल",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Which is the largest planet in the solar system?",
  "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  "options_en": ["Jupiter", "Saturn", "Neptune", "Earth"],
  "options_hi": ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
  "answer_en": "Jupiter",
  "answer_hi": "बृहस्पति",
  "attempted": false,
  "selected": ""
},
{
  "num": 7,
  "question_en": "Which gas do plants release during photosynthesis?",
  "question_hi": "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस छोड़ते हैं?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 8,
  "question_en": "Which is the largest mammal?",
  "question_hi": "सबसे बड़ा स्तनपायी कौन सा है?",
  "options_en": ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
  "options_hi": ["ब्लू व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
  "answer_en": "Blue Whale",
  "answer_hi": "ब्लू व्हेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 9,
  "question_en": "Who is known as the Father of Computers?",
  "question_hi": "कंप्यूटर का जनक किसे कहा जाता है?",
  "options_en": ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
  "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
  "answer_en": "Charles Babbage",
  "answer_hi": "चार्ल्स बैबेज",
  "attempted": false,
  "selected": ""
},
{
  "num": 10,
  "question_en": "Which is the largest lake in India?",
  "question_hi": "भारत की सबसे बड़ी झील कौन सी है?",
  "options_en": ["Vembanad", "Chilika", "Wular", "Sambhar"],
  "options_hi": ["वेम्बानाड", "चिलिका", "वुलार", "सांभर"],
  "answer_en": "Vembanad",
  "answer_hi": "वेम्बानाड",
  "attempted": false,
  "selected": ""
},
{
  "num": 11,
  "question_en": "Which Indian state is known as the 'Land of the Rising Sun'?",
  "question_hi": "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
  "options_en": ["Arunachal Pradesh", "Assam", "Manipur", "Nagaland"],
  "options_hi": ["अरुणाचल प्रदेश", "असम", "मणिपुर", "नागालैंड"],
  "answer_en": "Arunachal Pradesh",
  "answer_hi": "अरुणाचल प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Which is the national animal of India?",
  "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
  "options_en": ["Tiger", "Lion", "Elephant", "Peacock"],
  "options_hi": ["बाघ", "सिंह", "हाथी", "मोर"],
  "answer_en": "Tiger",
  "answer_hi": "बाघ",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which is the national fruit of India?",
  "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
  "options_en": ["Mango", "Apple", "Banana", "Guava"],
  "options_hi": ["आम", "सेब", "केला", "अमरूद"],
  "answer_en": "Mango",
  "answer_hi": "आम",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "Which is the smallest planet in the solar system?",
  "question_hi": "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
  "options_en": ["Mercury", "Mars", "Venus", "Pluto"],
  "options_hi": ["बुध", "मंगल", "शुक्र", "प्लूटो"],
  "answer_en": "Mercury",
  "answer_hi": "बुध",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "Which is the largest desert in India?",
  "question_hi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
  "options_en": ["Thar Desert", "Gobi", "Sahara", "Kalahari"],
  "options_hi": ["थार रेगिस्तान", "गोबी", "सहारा", "कालाहारी"],
  "answer_en": "Thar Desert",
  "answer_hi": "थार रेगिस्तान",
  "attempted": false,
  "selected": ""
},
{
  "num": 16,
  "question_en": "Which is the largest river in India?",
  "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
  "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
  "answer_en": "Ganga",
  "answer_hi": "गंगा",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "Which gas is essential for respiration?",
  "question_hi": "साँस लेने के लिए कौन सी गैस आवश्यक है?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which vitamin is produced when skin is exposed to sunlight?",
  "question_hi": "सूरज की रोशनी में त्वचा के संपर्क में आने पर कौन सा विटामिन बनता है?",
  "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
  "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
  "answer_en": "Vitamin D",
  "answer_hi": "विटामिन D",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "Which is the largest coral reef in the world?",
  "question_hi": "विश्व का सबसे बड़ा प्रवाल भित्ति कौन सा है?",
  "options_en": ["Great Barrier Reef", "Red Sea Reef", "Belize Reef", "New Caledonia Reef"],
  "options_hi": ["ग्रेट बैरियर रीफ", "रेड सी रीफ", "बेलीज़ रीफ", "न्यू कैलेडोनिया रीफ"],
  "answer_en": "Great Barrier Reef",
  "answer_hi": "ग्रेट बैरियर रीफ",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Which is the fastest land animal?",
  "question_hi": "सबसे तेज़ स्थलीय जानवर कौन सा है?",
  "options_en": ["Cheetah", "Lion", "Tiger", "Leopard"],
  "options_hi": ["चीता", "सिंह", "बाघ", "तेंदुआ"],
  "answer_en": "Cheetah",
  "answer_hi": "चीता",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "Which planet is known as the Red Planet?",
  "question_hi": "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
  "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
  "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
  "answer_en": "Mars",
  "answer_hi": "मंगल",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which blood group is called the universal donor?",
  "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता कहा जाता है?",
  "options_en": ["O negative", "A positive", "B positive", "AB positive"],
  "options_hi": ["O नेगेटिव", "A पॉज़िटिव", "B पॉज़िटिव", "AB पॉज़िटिव"],
  "answer_en": "O negative",
  "answer_hi": "O नेगेटिव",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which is the largest bone in human body?",
  "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
  "options_en": ["Femur", "Tibia", "Humerus", "Fibula"],
  "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "फिबुला"],
  "answer_en": "Femur",
  "answer_hi": "फीमर",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Which is the fastest bird in the world?",
  "question_hi": "विश्व का सबसे तेज़ पक्षी कौन सा है?",
  "options_en": ["Peregrine Falcon", "Eagle", "Hawk", "Ostrich"],
  "options_hi": ["पेरेग्रिन फाल्कन", "गरुड़", "बाज़", "शुतुरमुर्ग"],
  "answer_en": "Peregrine Falcon",
  "answer_hi": "पेरेग्रिन फाल्कन",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Which is the first Indian satellite to orbit the Moon?",
  "question_hi": "चंद्रमा की परिक्रमा करने वाला पहला भारतीय उपग्रह कौन सा है?",
  "options_en": ["Chandrayaan-1", "Aryabhata", "Rohini", "INSAT-1A"],
  "options_hi": ["चंद्रयान-1", "आर्यभट्ट", "रोहिणी", "इंसैट-1ए"],
  "answer_en": "Chandrayaan-1",
  "answer_hi": "चंद्रयान-1",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which is the first Indian nuclear test site?",
  "question_hi": "भारत का पहला परमाणु परीक्षण स्थल कौन सा था?",
  "options_en": ["Pokhran", "Kalpakkam", "Bhabha Atomic Research Centre", "Rajasthan Desert"],
  "options_hi": ["पोखरण", "कल्पक्कम", "भाभा एटॉमिक रिसर्च सेंटर", "राजस्थान रेगिस्तान"],
  "answer_en": "Pokhran",
  "answer_hi": "पोखरण",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which is the first human-made satellite?",
  "question_hi": "पहला मानव निर्मित उपग्रह कौन सा था?",
  "options_en": ["Sputnik 1", "Aryabhata", "Explorer 1", "Telstar"],
  "options_hi": ["स्पुतनिक 1", "आर्यभट्ट", "एक्सप्लोरर 1", "टेलस्टार"],
  "answer_en": "Sputnik 1",
  "answer_hi": "स्पुतनिक 1",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "Which is the largest waterfall in the world?",
  "question_hi": "विश्व का सबसे बड़ा झरना कौन सा है?",
  "options_en": ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"],
  "options_hi": ["एंजेल फॉल्स", "नियाग्रा फॉल्स", "इगुआज़ु फॉल्स", "विक्टोरिया फॉल्स"],
  "answer_en": "Angel Falls",
  "answer_hi": "एंजेल फॉल्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
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
  "num": 30,
  "question_en": "Which is the largest volcano in India?",
  "question_hi": "भारत का सबसे बड़ा ज्वालामुखी कौन सा है?",
  "options_en": ["Barren Island", "Mount Abu", "Deccan Volcanoes", "Narcondam"],
  "options_hi": ["बैरेन द्वीप", "माउंट आबू", "डेक्कन ज्वालामुखी", "नारकोंदम"],
  "answer_en": "Barren Island",
  "answer_hi": "बैरेन द्वीप",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which Indian river is called the 'Ganga of the South'?",
  "question_hi": "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
  "options_en": ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
  "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  "answer_en": "Godavari",
  "answer_hi": "गोदावरी",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Which Indian monument is called the 'Symbol of Love'?",
  "question_hi": "भारत का कौन सा स्मारक 'प्रेम का प्रतीक' कहलाता है?",
  "options_en": ["Taj Mahal", "Red Fort", "Qutub Minar", "Gateway of India"],
  "options_hi": ["ताज महल", "लाल किला", "कुतुब मीनार", "गेटवे ऑफ इंडिया"],
  "answer_en": "Taj Mahal",
  "answer_hi": "ताज महल",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Which is the national flower of India?",
  "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
  "options_en": ["Lotus", "Rose", "Marigold", "Jasmine"],
  "options_hi": ["कमल", "गुलाब", "गेंदा", "चमेली"],
  "answer_en": "Lotus",
  "answer_hi": "कमल",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which is the national fish of India?",
  "question_hi": "भारत की राष्ट्रीय मछली कौन सी है?",
  "options_en": ["Hilsa", "Rohu", "Catla", "Mrigal"],
  "options_hi": ["हिल्सा", "रोहू", "कातला", "मृगल"],
  "answer_en": "Hilsa",
  "answer_hi": "हिल्सा",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which is the fastest marine animal?",
  "question_hi": "सबसे तेज़ जलीय जानवर कौन सा है?",
  "options_en": ["Sailfish", "Dolphin", "Shark", "Tuna"],
  "options_hi": ["सेलफ़िश", "डॉल्फिन", "शार्क", "टूना"],
  "answer_en": "Sailfish",
  "answer_hi": "सेलफ़िश",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "Which Indian state is called the 'Spice Garden of India'?",
  "question_hi": "कौन सा भारतीय राज्य 'भारत का मसाले का बगीचा' कहलाता है?",
  "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
  "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
  "answer_en": "Kerala",
  "answer_hi": "केरल",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Which is the largest state in India by area?",
  "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
  "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
  "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
  "answer_en": "Rajasthan",
  "answer_hi": "राजस्थान",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which is the national reptile of India?",
  "question_hi": "भारत का राष्ट्रीय सरीसृप कौन सा है?",
  "options_en": ["King Cobra", "Crocodile", "Python", "Monitor Lizard"],
  "options_hi": ["किंग कोबरा", "मगरमच्छ", "अजगर", "मानिटर लिज़ार्ड"],
  "answer_en": "King Cobra",
  "answer_hi": "किंग कोबरा",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Which organ in human body pumps blood?",
  "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
  "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
  "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
  "answer_en": "Heart",
  "answer_hi": "हृदय",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Which is the fastest mammal in air?",
  "question_hi": "हवा में सबसे तेज़ स्तनपायी कौन सा है?",
  "options_en": ["Bat", "Flying Squirrel", "Peregrine Falcon", "Swift"],
  "options_hi": ["चमगादड़", "उड़ने वाला गिलहरी", "पेरेग्रिन फाल्कन", "स्विफ्ट"],
  "answer_en": "Bat",
  "answer_hi": "चमगादड़",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which Indian state has the largest population?",
  "question_hi": "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
  "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
  "answer_en": "Uttar Pradesh",
  "answer_hi": "उत्तर प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "Which is the first Indian woman to go to space?",
  "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन हैं?",
  "options_en": ["Kalpana Chawla", "Sunita Williams", "Ritu Karidhal", "Anousheh Ansari"],
  "options_hi": ["कल्पना चावला", "सुनिता विलियम्स", "ऋतु करीधल", "अनुशेह अंसारी"],
  "answer_en": "Kalpana Chawla",
  "answer_hi": "कल्पना चावला",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which is the tallest mountain in India?",
  "question_hi": "भारत का सबसे ऊँचा पर्वत कौन सा है?",
  "options_en": ["Kanchenjunga", "Everest", "Nanda Devi", "Annapurna"],
  "options_hi": ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "अन्नपूर्णा"],
  "answer_en": "Kanchenjunga",
  "answer_hi": "कंचनजंगा",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "Which is the longest river in the world?",
  "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
  "options_hi": ["नाइल", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
  "answer_en": "Nile",
  "answer_hi": "नाइल",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which is the first artificial satellite of India?",
  "question_hi": "भारत का पहला कृत्रिम उपग्रह कौन सा था?",
  "options_en": ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
  "options_hi": ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
  "answer_en": "Aryabhata",
  "answer_hi": "आर्यभट्ट",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Which is the largest desert in the world?",
  "question_hi": "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
  "options_en": ["Sahara", "Gobi", "Kalahari", "Thar"],
  "options_hi": ["सहारा", "गोबी", "कालाहारी", "थार"],
  "answer_en": "Sahara",
  "answer_hi": "सहारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which is the largest state in India by population?",
  "question_hi": "जनसंख्या के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
  "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
  "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
  "answer_en": "Uttar Pradesh",
  "answer_hi": "उत्तर प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "Which Indian monument is a UNESCO World Heritage Site?",
  "question_hi": "कौन सा भारतीय स्मारक यूनेस्को विश्व धरोहर स्थल है?",
  "options_en": ["Qutub Minar", "Taj Mahal", "Red Fort", "All of these"],
  "options_hi": ["कुतुब मीनार", "ताज महल", "लाल किला", "इनमें से सभी"],
  "answer_en": "All of these",
  "answer_hi": "इनमें से सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Which Indian festival is known as 'Festival of Lights'?",
  "question_hi": "भारत का कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
  "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
  "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "Which is the first Indian rocket to reach space?",
  "question_hi": "अंतरिक्ष तक पहुँचने वाली पहली भारतीय रॉकेट कौन सी थी?",
  "options_en": ["Rohini", "SLV-3", "PSLV", "GSLV"],
  "options_hi": ["रोहिणी", "SLV-3", "PSLV", "GSLV"],
  "answer_en": "SLV-3",
  "answer_hi": "SLV-3",
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