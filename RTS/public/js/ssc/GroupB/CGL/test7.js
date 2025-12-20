const questions = [
{
    num: 1,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
    options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "ग्रेगर मेंडल"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्जेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which gas do humans need to breathe?",
    question_hi: "मनुष्यों को सांस लेने के लिए किस गैस की आवश्यकता होती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Who is known as the Father of India?",
    question_hi: "भारत के पिता के रूप में किसे जाना जाता है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which is the largest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Earth", "Mars"],
    options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Tiger", "Lion", "Elephant", "Peacock"],
    options_hi: ["बाघ", "सिंह", "हाथी", "मोर"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिएल्मो मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which is the smallest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Mercury", "Mars", "Venus", "Pluto"],
    options_hi: ["बुध", "मंगल", "शुक्र", "प्लूटो"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "Who discovered gravity?",
    question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
    options_en: ["Isaac Newton", "Albert Einstein", "Galileo", "Edison"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो", "एडिसन"],
    answer_en: "Isaac Newton",
    answer_hi: "आइज़ैक न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which is the national fruit of India?",
    question_hi: "भारत का राष्ट्रीय फल कौन सा है?",
    options_en: ["Mango", "Apple", "Banana", "Guava"],
    options_hi: ["आम", "सेब", "केला", "अमरूद"],
    answer_en: "Mango",
    answer_hi: "आम",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which river is the longest in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Narmada"],
    options_hi: ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "Who is the author of 'Ramayana'?",
    question_hi: "'रामायण' के लेखक कौन हैं?",
    options_en: ["Valmiki", "Kalidasa", "Vyasa", "Tulsidas"],
    options_hi: ["वाल्मीकि", "कालिदास", "व्यास", "तुलसीदास"],
    answer_en: "Valmiki",
    answer_hi: "वाल्मीकि",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "Which gas is used in electric bulbs?",
    question_hi: "इलेक्ट्रिक बल्ब में किस गैस का उपयोग होता है?",
    options_en: ["Argon", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "Which country is called the 'Land of Rising Sun'?",
    question_hi: "किस देश को 'सूर्योदय की भूमि' कहा जाता है?",
    options_en: ["Japan", "China", "India", "Australia"],
    options_hi: ["जापान", "चीन", "भारत", "ऑस्ट्रेलिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which is the largest desert in the world?",
    question_hi: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Sahara", "Gobi", "Thar", "Kalahari"],
    options_hi: ["सहारा", "गोबी", "थार", "कालाहारी"],
    answer_en: "Sahara",
    answer_hi: "सहारा",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "किस तत्व का रासायनिक प्रतीक 'O' है?",
    options_en: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "सोना", "चांदी", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which is the fastest land animal?",
    question_hi: "सबसे तेज़ स्थलीय जानवर कौन सा है?",
    options_en: ["Cheetah", "Lion", "Tiger", "Leopard"],
    options_hi: ["चीता", "सिंह", "बाघ", "तेंदुआ"],
    answer_en: "Cheetah",
    answer_hi: "चीता",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत का 'मिसाइल मैन' कौन है?",
    options_en: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Satish Dhawan"],
    options_hi: ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सतीश धवन"],
    answer_en: "A.P.J. Abdul Kalam",
    answer_hi: "ए.पी.जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which is the national bird of India?",
    question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options_en: ["Peacock", "Eagle", "Parrot", "Sparrow"],
    options_hi: ["मोर", "गरुड़", "तोता", "गौरैया"],
    answer_en: "Peacock",
    answer_hi: "मोर",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which is the largest continent in the world?",
    question_hi: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    options_en: ["Asia", "Africa", "Europe", "Antarctica"],
    options_hi: ["एशिया", "अफ्रीका", "यूरोप", "अंटार्कटिका"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Who wrote 'The Discovery of India'?",
    question_hi: "'दि डिस्कवरी ऑफ इंडिया' किसने लिखा?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Rabindranath Tagore"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "रवींद्रनाथ टैगोर"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Which is the smallest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Tripura", "Manipur"],
    options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which Indian city is called 'Pink City'?",
    question_hi: "भारत का कौन सा शहर 'पिंक सिटी' कहलाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "Which planet has the most moons?",
    question_hi: "कौन सा ग्रह सबसे अधिक चंद्रमा रखता है?",
    options_en: ["Saturn", "Jupiter", "Mars", "Earth"],
    options_hi: ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
},
{
    num: 26,
    question_en: "Who discovered India’s first vaccine for rabies?",
    question_hi: "भारत का पहला रेबीज का टीका किसने विकसित किया?",
    options_en: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Edward Jenner"],
    options_hi: ["लुई पाश्चर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग", "एडवर्ड जेनर"],
    answer_en: "Louis Pasteur",
    answer_hi: "लुई पाश्चर",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Which is the first artificial satellite of India?",
    question_hi: "भारत का पहला कृत्रिम उपग्रह कौन सा था?",
    options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
    options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which is the largest island in India?",
    question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Andaman", "Lakshadweep", "Majuli", "Divar"],
    options_hi: ["अंडमान", "लक्षद्वीप", "माजुली", "दिवार"],
    answer_en: "Andaman",
    answer_hi: "अंडमान",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Who is known as the 'Iron Man of India'?",
    question_hi: "भारत के 'लौह पुरुष' के रूप में किसे जाना जाता है?",
    options_en: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
    options_hi: ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
    answer_en: "Sardar Vallabhbhai Patel",
    answer_hi: "सरदार वल्लभभाई पटेल",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which vitamin is produced when skin is exposed to sunlight?",
    question_hi: "सूरज की रोशनी में त्वचा के संपर्क में आने पर कौन सा विटामिन बनता है?",
    options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "Which Indian state is called the 'Land of Five Rivers'?",
    question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' कहलाता है?",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "राजस्थान"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which is the longest river in the world?",
    question_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
    options_en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    options_hi: ["नाइल", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "Which is the national flower of India?",
    question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
    options_en: ["Lotus", "Rose", "Marigold", "Jasmine"],
    options_hi: ["कमल", "गुलाब", "गेंदा", "चमेली"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which Indian festival is known as 'Festival of Lights'?",
    question_hi: "भारत का कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
    options_en: ["Diwali", "Holi", "Eid", "Christmas"],
    options_hi: ["दीवाली", "होली", "ईद", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दीवाली",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्र में कौन सी गैस का उपयोग होता है?",
    options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which is the first Indian state to achieve 100% literacy?",
    question_hi: "भारत का पहला राज्य जिसने 100% साक्षरता प्राप्त की?",
    options_en: ["Kerala", "Goa", "Sikkim", "Mizoram"],
    options_hi: ["केरल", "गोवा", "सिक्किम", "मिजोरम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Who wrote 'Geeta'?",
    question_hi: "'गीता' किसने लिखी?",
    options_en: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
    options_hi: ["व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
    answer_en: "Vyasa",
    answer_hi: "व्यास",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which is the national fruit of India?",
    question_hi: "भारत का राष्ट्रीय फल कौन सा है?",
    options_en: ["Mango", "Apple", "Banana", "Guava"],
    options_hi: ["आम", "सेब", "केला", "अमरूद"],
    answer_en: "Mango",
    answer_hi: "आम",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which Indian monument is known as the 'Symbol of Love'?",
    question_hi: "भारत का कौन सा स्मारक 'प्रेम का प्रतीक' कहलाता है?",
    options_en: ["Taj Mahal", "Red Fort", "Qutub Minar", "Gateway of India"],
    options_hi: ["ताज महल", "लाल किला", "कुतुब मीनार", "गेटवे ऑफ इंडिया"],
    answer_en: "Taj Mahal",
    answer_hi: "ताज महल",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Which is the national fish of India?",
    question_hi: "भारत की राष्ट्रीय मछली कौन सी है?",
    options_en: ["Hilsa", "Rohu", "Catla", "Mrigal"],
    options_hi: ["हिल्सा", "रोहू", "कातला", "मृगल"],
    answer_en: "Hilsa",
    answer_hi: "हिल्सा",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Which is the fastest marine animal?",
    question_hi: "सबसे तेज़ जलीय जानवर कौन सा है?",
    options_en: ["Sailfish", "Dolphin", "Shark", "Tuna"],
    options_hi: ["सेलफ़िश", "डॉल्फिन", "शार्क", "टूना"],
    answer_en: "Sailfish",
    answer_hi: "सेलफ़िश",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which Indian state is called 'Spice Garden of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत का मसाले का बगीचा' कहलाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which is the largest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "Which organ in human body pumps blood?",
    question_hi: "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
    options_en: ["Heart", "Lungs", "Kidney", "Liver"],
    options_hi: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    answer_en: "Heart",
    answer_hi: "हृदय",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which is the fastest mammal in air?",
    question_hi: "हवा में सबसे तेज़ स्तनपायी कौन सा है?",
    options_en: ["Bat", "Flying Squirrel", "Peregrine Falcon", "Swift"],
    options_hi: ["चमगादड़", "उड़ने वाला गिलहरी", "पेरेग्रिन फाल्कन", "स्विफ्ट"],
    answer_en: "Bat",
    answer_hi: "चमगादड़",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which Indian state has the largest population?",
    question_hi: "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which is the first Indian woman to go to space?",
    question_hi: "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन हैं?",
    options_en: ["Kalpana Chawla", "Sunita Williams", "Ritu Karidhal", "Anousheh Ansari"],
    options_hi: ["कल्पना चावला", "सुनिता विलियम्स", "ऋतु करीधल", "अनुशेह अंसारी"],
    answer_en: "Kalpana Chawla",
    answer_hi: "कल्पना चावला",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which is the tallest mountain in India?",
    question_hi: "भारत का सबसे ऊँचा पर्वत कौन सा है?",
    options_en: ["Kanchenjunga", "Everest", "Nanda Devi", "Annapurna"],
    options_hi: ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "अन्नपूर्णा"],
    answer_en: "Kanchenjunga",
    answer_hi: "कंचनजंगा",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which is the national reptile of India?",
    question_hi: "भारत का राष्ट्रीय सरीसृप कौन सा है?",
    options_en: ["King Cobra", "Crocodile", "Python", "Monitor Lizard"],
    options_hi: ["किंग कोबरा", "मगरमच्छ", "अजगर", "मानिटर लिज़ार्ड"],
    answer_en: "King Cobra",
    answer_hi: "किंग कोबरा",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which is the first Indian rocket to reach space?",
    question_hi: "अंतरिक्ष तक पहुँचने वाली पहली भारतीय रॉकेट कौन सी थी?",
    options_en: ["Rohini", "SLV-3", "PSLV", "GSLV"],
    options_hi: ["रोहिणी", "SLV-3", "PSLV", "GSLV"],
    answer_en: "SLV-3",
    answer_hi: "SLV-3",
    attempted: false,
    selected: ""
}


];


let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};