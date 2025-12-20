const questions = [
  {
  "num": 1,
  "question_en": "Which planet is known as the Blue Planet?",
  "question_hi": "कौन सा ग्रह नीला ग्रह कहा जाता है?",
  "options_en": ["Earth", "Neptune", "Saturn", "Uranus"],
  "options_hi": ["पृथ्वी", "नेप्च्यून", "शनि", "यूरेनस"],
  "answer_en": "Earth",
  "answer_hi": "पृथ्वी",
  "attempted": false,
  "selected": ""
},
{
  "num": 2,
  "question_en": "Which is the largest internal organ in the human body?",
  "question_hi": "मानव शरीर का सबसे बड़ा अंतःस्थ अंग कौन सा है?",
  "options_en": ["Liver", "Heart", "Lungs", "Kidney"],
  "options_hi": ["यकृत", "हृदय", "फेफड़े", "गुर्दा"],
  "answer_en": "Liver",
  "answer_hi": "यकृत",
  "attempted": false,
  "selected": ""
},
{
  "num": 3,
  "question_en": "Which city is known as the City of Joy in India?",
  "question_hi": "भारत का 'City of Joy' कौन सा शहर है?",
  "options_en": ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
  "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
  "answer_en": "Kolkata",
  "answer_hi": "कोलकाता",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Which metal is liquid at room temperature?",
  "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
  "options_en": ["Mercury", "Gold", "Iron", "Copper"],
  "options_hi": ["पारा", "सोना", "लोहा", "तांबा"],
  "answer_en": "Mercury",
  "answer_hi": "पारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "Which is the largest planet in our solar system?",
  "question_hi": "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
  "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
  "answer_en": "Jupiter",
  "answer_hi": "बृहस्पति",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Which river is called the 'Sorrow of Bihar'?",
  "question_hi": "कौन सी नदी 'बिहार की पीड़ा' कहलाती है?",
  "options_en": ["Kosi", "Ganga", "Yamuna", "Brahmaputra"],
  "options_hi": ["कोसी", "गंगा", "यमुना", "ब्रह्मपुत्र"],
  "answer_en": "Kosi",
  "answer_hi": "कोसी",
  "attempted": false,
  "selected": ""
},
{
  "num": 7,
  "question_en": "Who discovered electricity?",
  "question_hi": "बिजली की खोज किसने की?",
  "options_en": ["Benjamin Franklin", "Isaac Newton", "Thomas Edison", "Albert Einstein"],
  "options_hi": ["बेंजामिन फ्रैंकलिन", "आइज़ैक न्यूटन", "थॉमस एडिसन", "अल्बर्ट आइंस्टीन"],
  "answer_en": "Benjamin Franklin",
  "answer_hi": "बेंजामिन फ्रैंकलिन",
  "attempted": false,
  "selected": ""
},
{
  "num": 8,
  "question_en": "Which is the largest continent in the world?",
  "question_hi": "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
  "options_en": ["Asia", "Africa", "Europe", "Antarctica"],
  "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "अंटार्कटिका"],
  "answer_en": "Asia",
  "answer_hi": "एशिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 9,
  "question_en": "Which planet is closest to Earth?",
  "question_hi": "पृथ्वी के सबसे निकट ग्रह कौन सा है?",
  "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
  "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
  "answer_en": "Venus",
  "answer_hi": "शुक्र",
  "attempted": false,
  "selected": ""
},
{
  "num": 10,
  "question_en": "Which is the fastest bird in the world?",
  "question_hi": "विश्व का सबसे तेज़ पक्षी कौन सा है?",
  "options_en": ["Peregrine Falcon", "Eagle", "Sparrow", "Ostrich"],
  "options_hi": ["पेरेग्रिन फाल्कन", "गरुड़", "गौरैया", "स्त्रौच"],
  "answer_en": "Peregrine Falcon",
  "answer_hi": "पेरेग्रिन फाल्कन",
  "attempted": false,
  "selected": ""
},

{
  "num": 11,
  "question_en": "Which is the smallest bone in the human body?",
  "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  "options_en": ["Stapes", "Femur", "Tibia", "Radius"],
  "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "रेडियस"],
  "answer_en": "Stapes",
  "answer_hi": "स्टेप्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Which is the main gas in the sun?",
  "question_hi": "सूर्य में मुख्य गैस कौन सी है?",
  "options_en": ["Hydrogen", "Oxygen", "Nitrogen", "Carbon Dioxide"],
  "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
  "answer_en": "Hydrogen",
  "answer_hi": "हाइड्रोजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which Indian state is known as the 'Land of Five Rivers'?",
  "question_hi": "कौन सा राज्य 'पांच नदियों की भूमि' कहा जाता है?",
  "options_en": ["Punjab", "Haryana", "Rajasthan", "Himachal Pradesh"],
  "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "हिमाचल प्रदेश"],
  "answer_en": "Punjab",
  "answer_hi": "पंजाब",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "Which is the largest species of shark?",
  "question_hi": "शार्क की सबसे बड़ी प्रजाति कौन सी है?",
  "options_en": ["Whale Shark", "Great White Shark", "Tiger Shark", "Hammerhead Shark"],
  "options_hi": ["व्हेल शार्क", "ग्रेट व्हाइट शार्क", "टाइगर शार्क", "हैमरहेड शार्क"],
  "answer_en": "Whale Shark",
  "answer_hi": "व्हेल शार्क",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "Who is the author of 'Harry Potter' series?",
  "question_hi": "'हैरी पॉटर' श्रृंखला के लेखक कौन हैं?",
  "options_en": ["J.K. Rowling", "C.S. Lewis", "George R.R. Martin", "Enid Blyton"],
  "options_hi": ["जे. के. राउलिंग", "सी. एस. लुईस", "जॉर्ज आर. आर. मार्टिन", "एनीड ब्लाइटन"],
  "answer_en": "J.K. Rowling",
  "answer_hi": "जे. के. राउलिंग",
  "attempted": false,
  "selected": ""
},

{
  "num": 16,
  "question_en": "Which Indian city is called the 'City of Pearls'?",
  "question_hi": "भारत का 'City of Pearls' कौन सा शहर है?",
  "options_en": ["Hyderabad", "Mumbai", "Chennai", "Kolkata"],
  "options_hi": ["हैदराबाद", "मुंबई", "चेन्नई", "कोलकाता"],
  "answer_en": "Hyderabad",
  "answer_hi": "हैदराबाद",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "Which gas is used in fire extinguishers?",
  "question_hi": "अग्निशमन यंत्र में कौन सी गैस इस्तेमाल होती है?",
  "options_en": ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
  "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Who is called the 'Missile Man' of India?",
  "question_hi": "भारत का 'मिसाइल मैन' किसे कहा जाता है?",
  "options_en": ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Rakesh Sharma"],
  "options_hi": ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "राकेश शर्मा"],
  "answer_en": "A.P.J. Abdul Kalam",
  "answer_hi": "ए. पी. जे. अब्दुल कलाम",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "Which is the highest mountain in Africa?",
  "question_hi": "अफ्रीका का सबसे ऊँचा पर्वत कौन सा है?",
  "options_en": ["Mount Kilimanjaro", "Mount Kenya", "Atlas Mountains", "Mount Elgon"],
  "options_hi": ["माउंट किलिमंजारो", "माउंट केन्या", "एटलस पर्वत", "माउंट एल्गोन"],
  "answer_en": "Mount Kilimanjaro",
  "answer_hi": "माउंट किलिमंजारो",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Which planet is known as the Evening Star?",
  "question_hi": "कौन सा ग्रह 'Evening Star' कहलाता है?",
  "options_en": ["Venus", "Mars", "Jupiter", "Mercury"],
  "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "बुध"],
  "answer_en": "Venus",
  "answer_hi": "शुक्र",
  "attempted": false,
  "selected": ""
},

{
  "num": 21,
  "question_en": "Which country is called the Land of the Rising Sun?",
  "question_hi": "उगते सूर्य की भूमि किस देश को कहा जाता है?",
  "options_en": ["Japan", "China", "Thailand", "Nepal"],
  "options_hi": ["जापान", "चीन", "थाईलैंड", "नेपाल"],
  "answer_en": "Japan",
  "answer_hi": "जापान",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which planet is famous for its rings?",
  "question_hi": "कौन सा ग्रह अपने छल्लों के लिए प्रसिद्ध है?",
  "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
  "options_hi": ["शनि", "बृहस्पति", "यूरेनस", "नेप्च्यून"],
  "answer_en": "Saturn",
  "answer_hi": "शनि",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which Indian river is also called the 'Ganga of South India'?",
  "question_hi": "भारत की कौन सी नदी 'दक्षिण भारत की गंगा' कहलाती है?",
  "options_en": ["Godavari", "Krishna", "Cauvery", "Periyar"],
  "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "पेरियार"],
  "answer_en": "Godavari",
  "answer_hi": "गोदावरी",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Which element has the chemical symbol 'Na'?",
  "question_hi": "'Na' का रासायनिक प्रतीक किस तत्व का है?",
  "options_en": ["Sodium", "Nitrogen", "Neon", "Nickel"],
  "options_hi": ["सोडियम", "नाइट्रोजन", "निऑन", "निकेल"],
  "answer_en": "Sodium",
  "answer_hi": "सोडियम",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Which is the largest carnivorous mammal?",
  "question_hi": "सबसे बड़ा मांसाहारी स्तनपायी कौन सा है?",
  "options_en": ["Polar Bear", "Lion", "Tiger", "Leopard"],
  "options_hi": ["ध्रुवीय भालू", "सिंह", "बाघ", "तेंदुआ"],
  "answer_en": "Polar Bear",
  "answer_hi": "ध्रुवीय भालू",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which planet is known as the Red Planet?",
  "question_hi": "कौन सा ग्रह लाल ग्रह कहलाता है?",
  "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
  "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
  "answer_en": "Mars",
  "answer_hi": "मंगल",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Who is known as the Father of Computers?",
  "question_hi": "कंप्यूटर का जनक किसे कहा जाता है?",
  "options_en": ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
  "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "जॉन वॉन न्यूमन", "बिल गेट्स"],
  "answer_en": "Charles Babbage",
  "answer_hi": "चार्ल्स बैबेज",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
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
  "num": 29,
  "question_en": "Which Indian monument is called the 'Symbol of Love'?",
  "question_hi": "भारत की कौन सी इमारत 'प्रेम का प्रतीक' कहलाती है?",
  "options_en": ["Taj Mahal", "Qutub Minar", "Red Fort", "India Gate"],
  "options_hi": ["ताज महल", "कुतुब मीनार", "लाल किला", "इंडिया गेट"],
  "answer_en": "Taj Mahal",
  "answer_hi": "ताज महल",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "Which is the largest desert in Asia?",
  "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  "options_en": ["Gobi Desert", "Thar Desert", "Karakum Desert", "Kyzylkum Desert"],
  "options_hi": ["गोबी रेगिस्तान", "थार रेगिस्तान", "काराकुम रेगिस्तान", "किज़िलकुम रेगिस्तान"],
  "answer_en": "Gobi Desert",
  "answer_hi": "गोबी रेगिस्तान",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which organ pumps blood in the human body?",
  "question_hi": "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
  "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
  "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
  "answer_en": "Heart",
  "answer_hi": "हृदय",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Which vitamin is essential for blood clotting?",
  "question_hi": "रक्त का थक्का जमाने के लिए कौन सा विटामिन आवश्यक है?",
  "options_en": ["Vitamin K", "Vitamin D", "Vitamin C", "Vitamin A"],
  "options_hi": ["विटामिन K", "विटामिन D", "विटामिन C", "विटामिन A"],
  "answer_en": "Vitamin K",
  "answer_hi": "विटामिन K",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Which is the largest planet in our solar system?",
  "question_hi": "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  "options_en": ["Jupiter", "Saturn", "Neptune", "Earth"],
  "options_hi": ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
  "answer_en": "Jupiter",
  "answer_hi": "बृहस्पति",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which is the smallest country in the world?",
  "question_hi": "विश्व का सबसे छोटा देश कौन सा है?",
  "options_en": ["Vatican City", "Monaco", "Nauru", "San Marino"],
  "options_hi": ["वेटिकन सिटी", "मोनाको", "नाउरु", "सान मारिनो"],
  "answer_en": "Vatican City",
  "answer_hi": "वेटिकन सिटी",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which Indian leader is known as 'Iron Man of India'?",
  "question_hi": "कौन सा भारतीय नेता 'भारत का लौह पुरुष' कहलाता है?",
  "options_en": ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"],
  "options_hi": ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस"],
  "answer_en": "Sardar Vallabhbhai Patel",
  "answer_hi": "सरदार वल्लभभाई पटेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
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
  "num": 37,
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
  "num": 38,
  "question_en": "Which element has the chemical symbol 'Fe'?",
  "question_hi": "'Fe' का रासायनिक प्रतीक किस तत्व का है?",
  "options_en": ["Iron", "Fluorine", "Francium", "Fermium"],
  "options_hi": ["लोहा", "फ्लोरीन", "फ्रैंसियम", "फेरियम"],
  "answer_en": "Iron",
  "answer_hi": "लोहा",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Which river is known as the 'Sorrow of Bengal'?",
  "question_hi": "कौन सी नदी 'बंगाल की पीड़ा' के नाम से जानी जाती है?",
  "options_en": ["Damodar", "Ganga", "Hooghly", "Brahmaputra"],
  "options_hi": ["दामोदर", "गंगा", "हुगली", "ब्रह्मपुत्र"],
  "answer_en": "Damodar",
  "answer_hi": "दामोदर",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Which is the highest mountain in the world?",
  "question_hi": "विश्व का सबसे ऊँचा पर्वत कौन सा है?",
  "options_en": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  "options_hi": ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "ल्होत्से"],
  "answer_en": "Mount Everest",
  "answer_hi": "माउंट एवरेस्ट",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which Indian festival is called 'Festival of Lights'?",
  "question_hi": "कौन सा भारतीय त्योहार 'दीयों का त्योहार' कहलाता है?",
  "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
  "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
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
  "num": 43,
  "question_en": "Which Indian leader is called 'Netaji'?",
  "question_hi": "कौन सा भारतीय नेता 'नेताजी' कहलाता है?",
  "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
  "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
  "answer_en": "Subhas Chandra Bose",
  "answer_hi": "सुभाष चंद्र बोस",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "Which planet is known as Earth's Twin?",
  "question_hi": "कौन सा ग्रह पृथ्वी का जुड़वां कहा जाता है?",
  "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
  "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
  "answer_en": "Venus",
  "answer_hi": "शुक्र",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which gas is used in balloons to make them float?",
  "question_hi": "गुब्बारे उड़ाने के लिए कौन सी गैस इस्तेमाल होती है?",
  "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  "answer_en": "Helium",
  "answer_hi": "हीलियम",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Which river is the longest in the world?",
  "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
  "options_hi": ["नील", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
  "answer_en": "Nile",
  "answer_hi": "नील",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which Indian city is called 'Silicon Valley of India'?",
  "question_hi": "भारत का 'सिलिकॉन वैली' कौन सा शहर है?",
  "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  "answer_en": "Bengaluru",
  "answer_hi": "बेंगलुरु",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
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
  "num": 49,
  "question_en": "Which blood group is called the universal donor?",
  "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता कहलाता है?",
  "options_en": ["O Negative", "AB Positive", "A Positive", "B Negative"],
  "options_hi": ["O नेगेटिव", "AB पॉजिटिव", "A पॉजिटिव", "B नेगेटिव"],
  "answer_en": "O Negative",
  "answer_hi": "O नेगेटिव",
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