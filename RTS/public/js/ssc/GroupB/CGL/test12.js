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
    num: 3,
    question_en: "Which is the largest ocean in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Which is the smallest country in the world?",
    question_hi: "विश्व का सबसे छोटा देश कौन सा है?",
    options_en: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
    options_hi: ["वेटिकन सिटी", "मोनाको", "सान मारीनो", "लिच्टेंस्टीन"],
    answer_en: "Vatican City",
    answer_hi: "वेटिकन सिटी",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which planet is nearest to the Sun?",
    question_hi: "कौन सा ग्रह सूर्य के सबसे निकट है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which is the largest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which gas do plants release during photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस छोड़ते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Who is known as the Father of Computers?",
    question_hi: "कंप्यूटर का जनक किसे कहा जाता है?",
    options_en: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    options_hi: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
    answer_en: "Charles Babbage",
    answer_hi: "चार्ल्स बैबेज",
    attempted: false,
    selected: ""
},
{
    num: 9,
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
    num: 10,
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
    num: 11,
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
    num: 12,
    question_en: "Which river is known as the 'Ganga of the South'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "Which vitamin is produced when skin is exposed to sunlight?",
    question_hi: "सूरज की रोशनी में त्वचा के संपर्क में आने पर कौन सा विटामिन बनता है?",
    options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    options_hi: ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 14,
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
    num: 15,
    question_en: "Which is the first Indian satellite to orbit the Earth?",
    question_hi: "पृथ्वी की परिक्रमा करने वाला पहला भारतीय उपग्रह कौन सा है?",
    options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
    options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar Desert", "Gobi", "Sahara", "Kalahari"],
    options_hi: ["थार रेगिस्तान", "गोबी", "सहारा", "कालाहारी"],
    answer_en: "Thar Desert",
    answer_hi: "थार रेगिस्तान",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which Indian state is called the 'Land of Five Rivers'?",
    question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' के नाम से जाना जाता है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    options_en: ["APJ Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "C.V. Raman"],
    options_hi: ["ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "विक्रम साराभाई", "सी.वी. रमन"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए.पी.जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 19,
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
    num: 20,
    question_en: "Which Indian monument is called the 'Symbol of Love'?",
    question_hi: "भारत का कौन सा स्मारक 'प्रेम का प्रतीक' कहलाता है?",
    options_en: ["Taj Mahal", "Red Fort", "Qutub Minar", "Gateway of India"],
    options_hi: ["ताज महल", "लाल किला", "कुतुब मीनार", "गेटवे ऑफ इंडिया"],
    answer_en: "Taj Mahal",
    answer_hi: "ताज महल",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    options_hi: ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Who is the author of 'India After Gandhi'?",
    question_hi: "'इंडिया आफ्टर गांधी' के लेखक कौन हैं?",
    options_en: ["Ramachandra Guha", "R.K. Narayan", "Arundhati Roy", "Chetan Bhagat"],
    options_hi: ["रामचंद्र गुहा", "आर.के. नारायण", "अरुंधती रॉय", "चेतन भगत"],
    answer_en: "Ramachandra Guha",
    answer_hi: "रामचंद्र गुहा",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Which Indian city is known as 'Pink City'?",
    question_hi: "कौन सा भारतीय शहर 'पिंक सिटी' के नाम से जाना जाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which is the national currency of India?",
    question_hi: "भारत की राष्ट्रीय मुद्रा क्या है?",
    options_en: ["Rupee", "Dollar", "Yen", "Pound"],
    options_hi: ["रुपया", "डॉलर", "येन्", "पाउंड"],
    answer_en: "Rupee",
    answer_hi: "रुपया",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "Who invented the light bulb?",
    question_hi: "लाइट बल्ब का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "James Watt"],
    options_hi: ["थॉमस एडिसन", "निकोला टेस्ला", "एलेक्जेंडर ग्राहम बेल", "जेम्स वाट"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
},
{
    num: 26,
    question_en: "Which planet is known as the 'Blue Planet'?",
    question_hi: "'ब्लू प्लैनेट' के नाम से कौन सा ग्रह जाना जाता है?",
    options_en: ["Earth", "Neptune", "Jupiter", "Saturn"],
    options_hi: ["पृथ्वी", "नेप्च्यून", "बृहस्पति", "शनि"],
    answer_en: "Earth",
    answer_hi: "पृथ्वी",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Which is the largest continent in the world?",
    question_hi: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    options_en: ["Asia", "Africa", "Europe", "North America"],
    options_hi: ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which Indian river is called 'Sorrow of Bihar'?",
    question_hi: "कौन सी भारतीय नदी को 'बिहार का दुःख' कहा जाता है?",
    options_en: ["Kosi", "Ganga", "Yamuna", "Ghaghara"],
    options_hi: ["कोसी", "गंगा", "यमुना", "घाघरा"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Which country is known as the 'Land of the Rising Sun'?",
    question_hi: "कौन सा देश 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
    options_en: ["Japan", "China", "South Korea", "Thailand"],
    options_hi: ["जापान", "चीन", "दक्षिण कोरिया", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which is the highest civilian award in India?",
    question_hi: "भारत में सर्वोच्च नागरिक पुरस्कार कौन सा है?",
    options_en: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
    options_hi: ["भारत रत्न", "पद्म विभूषण", "पद्म भूषण", "पद्म श्री"],
    answer_en: "Bharat Ratna",
    answer_hi: "भारत रत्न",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "Who is the first Prime Minister of India?",
    question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Sardar Patel"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "इंदिरा गांधी", "सरदार पटेल"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which is the national flower of India?",
    question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
    options_en: ["Lotus", "Rose", "Jasmine", "Sunflower"],
    options_hi: ["कमल", "गुलाब", "चमेली", "सूरजमुखी"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "Which gas is essential for human respiration?",
    question_hi: "मानव श्वसन के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which is the fastest bird in the world?",
    question_hi: "विश्व का सबसे तेज़ पक्षी कौन सा है?",
    options_en: ["Peregrine Falcon", "Eagle", "Hawk", "Ostrich"],
    options_hi: ["पेरेग्रिन फाल्कन", "गरुड़", "बाज़", "शुतुरमुर्ग"],
    answer_en: "Peregrine Falcon",
    answer_hi: "पेरेग्रिन फाल्कन",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    options_en: ["APJ Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
    options_hi: ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए.पी.जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which is the largest island in India?",
    question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Andaman", "Lakshadweep", "Sriharikota", "Majuli"],
    options_hi: ["अंडमान", "लक्षद्वीप", "श्रीहरिकोटा", "मजुली"],
    answer_en: "Andaman",
    answer_hi: "अंडमान",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which vitamin is known as the 'Sunshine Vitamin'?",
    question_hi: "कौन सा विटामिन 'सन्साइन विटामिन' के नाम से जाना जाता है?",
    options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
    options_hi: ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन B12"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which planet is known as the 'Red Planet'?",
    question_hi: "'लाल ग्रह' के नाम से कौन सा ग्रह जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which is the first Indian rocket to reach space?",
    question_hi: "अंतरिक्ष तक पहुँचने वाली पहली भारतीय रॉकेट कौन सी थी?",
    options_en: ["SLV-3", "PSLV", "GSLV", "Rohini"],
    options_hi: ["SLV-3", "PSLV", "GSLV", "रोहिणी"],
    answer_en: "SLV-3",
    answer_hi: "SLV-3",
    attempted: false,
    selected: ""
},
{
    num: 40,
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
    num: 41,
    question_en: "Which is the highest mountain in India?",
    question_hi: "भारत का सबसे ऊँचा पर्वत कौन सा है?",
    options_en: ["Kanchenjunga", "Everest", "Nanda Devi", "Annapurna"],
    options_hi: ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "अन्नपूर्णा"],
    answer_en: "Kanchenjunga",
    answer_hi: "कंचनजंगा",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which is the largest mammal in the world?",
    question_hi: "विश्व का सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    options_hi: ["ब्लू व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which blood group is known as the universal donor?",
    question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता कहा जाता है?",
    options_en: ["O negative", "A positive", "B positive", "AB positive"],
    options_hi: ["O नेगेटिव", "A पॉज़िटिव", "B पॉज़िटिव", "AB पॉज़िटिव"],
    answer_en: "O negative",
    answer_hi: "O नेगेटिव",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "Which is the largest waterfall in the world?",
    question_hi: "विश्व का सबसे बड़ा झरना कौन सा है?",
    options_en: ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"],
    options_hi: ["एंजेल फॉल्स", "नियाग्रा फॉल्स", "इगुआज़ु फॉल्स", "विक्टोरिया फॉल्स"],
    answer_en: "Angel Falls",
    answer_hi: "एंजेल फॉल्स",
    attempted: false,
    selected: ""
},
{
    num: 45,
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
    num: 46,
    question_en: "Which Indian state is known as 'God's Own Country'?",
    question_hi: "कौन सा भारतीय राज्य 'भगवान का अपना देश' कहा जाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 47,
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
    num: 48,
    question_en: "Which Indian city is known as the 'City of Lakes'?",
    question_hi: "कौन सा भारतीय शहर 'झीलों का शहर' कहलाता है?",
    options_en: ["Udaipur", "Bhopal", "Nainital", "Kolkata"],
    options_hi: ["उदयपुर", "भोपाल", "नैनीताल", "कोलकाता"],
    answer_en: "Udaipur",
    answer_hi: "उदयपुर",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which Indian monument is a UNESCO World Heritage Site?",
    question_hi: "कौन सा भारतीय स्मारक यूनेस्को विश्व धरोहर स्थल है?",
    options_en: ["Taj Mahal", "Red Fort", "Qutub Minar", "All of these"],
    options_hi: ["ताज महल", "लाल किला", "कुतुब मीनार", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which is the largest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
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