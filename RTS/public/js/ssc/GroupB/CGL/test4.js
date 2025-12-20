const questions = [
  {
    num: 1,
    question_en: "What is the capital of India?",
    question_hi: "भारत की राजधानी क्या है?",
    options_en: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    options_hi: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Who is known as the 'Father of the Indian Constitution'?",
    question_hi: "भारतीय संविधान के 'पिता' के रूप में किसे जाना जाता है?",
    options_en: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    options_hi: ["डॉ. बी.आर. आंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सदर पटेल"],
    answer_en: "Dr. B.R. Ambedkar",
    answer_hi: "डॉ. बी.आर. आंबेडकर",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which is the largest state of India by area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
},
{
    num: 4,
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
    num: 5,
    question_en: "Who wrote the Indian national anthem?",
    question_hi: "भारतीय राष्ट्रीय गान किसने लिखा?",
    options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Kavi Pradeep"],
    options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "कवि प्रदीप"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which planet is known as the 'Red Planet'?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar", "Sahara", "Gobi", "Kalahari"],
    options_hi: ["थार", "सहारा", "गोबी", "कालाहारी"],
    answer_en: "Thar",
    answer_hi: "थार",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which vitamin is known as the 'sunshine vitamin'?",
    question_hi: "कौन सा विटामिन 'सूरज की किरणों का विटामिन' कहलाता है?",
    options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    options_hi: ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"],
    options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जवाहरलाल नेहरू", "जाकिर हुसैन"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which is the largest freshwater lake in India?",
    question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    options_en: ["Vembanad", "Chilika", "Wular", "Sambhar"],
    options_hi: ["वेम्बनाड", "चिलिका", "वुलार", "सांभर"],
    answer_en: "Vembanad",
    answer_hi: "वेम्बनाड",
    attempted: false,
    selected: ""
},
// ------------------- 11–50 continue -------------------
{
    num: 11,
    question_en: "Which Indian state is known as the 'Land of Rising Sun'?",
    question_hi: "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
    options_en: ["Arunachal Pradesh", "Assam", "Manipur", "Nagaland"],
    options_hi: ["अरुणाचल प्रदेश", "असम", "मणिपुर", "नागालैंड"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 12,
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
    num: 13,
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
    num: 14,
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
    num: 15,
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
    num: 16,
    question_en: "Which is the first Indian satellite?",
    question_hi: "भारत का पहला कृत्रिम उपग्रह कौन सा था?",
    options_en: ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara I"],
    options_hi: ["आर्यभट्ट", "रोहिणी", "इंसैट-1ए", "भास्कर I"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which Indian scientist is known as the 'Missile Man'?",
    question_hi: "भारत के 'मिसाइल मैन' के नाम से किसे जाना जाता है?",
    options_en: ["APJ Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
    options_hi: ["ए पी जे अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रामन"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए पी जे अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 18,
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
    num: 19,
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
    num: 20,
    question_en: "Which is the largest planet in the Solar System?",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Earth", "Neptune"],
    options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "नेपच्यून"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which river is called the 'Sorrow of Bihar'?",
    question_hi: "कौन सी नदी 'बिहार का दुख' कहलाती है?",
    options_en: ["Kosi", "Ganga", "Son", "Ghaghara"],
    options_hi: ["कोसी", "गंगा", "सोन", "घाघरा"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Who is known as the 'Iron Man of India'?",
    question_hi: "भारत के 'लौह पुरुष' के नाम से किसे जाना जाता है?",
    options_en: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi"],
    options_hi: ["सार्दार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
    answer_en: "Sardar Vallabhbhai Patel",
    answer_hi: "सार्दार वल्लभभाई पटेल",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Which is the largest ocean in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Pacific", "Atlantic", "Indian", "Arctic"],
    options_hi: ["प्रशांत", "अटलांटिक", "भारतीय", "आर्कटिक"],
    answer_en: "Pacific",
    answer_hi: "प्रशांत",
    attempted: false,
    selected: ""
},
{
    num: 24,
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
    num: 25,
    question_en: "Who invented the zero?",
    question_hi: "शून्य का आविष्कार किसने किया?",
    options_en: ["Aryabhata", "Brahmagupta", "Bhaskara I", "Varahamihira"],
    options_hi: ["आर्यभट्ट", "भास्कराचार्य", "भास्कर I", "वराहमिहिर"],
    answer_en: "Brahmagupta",
    answer_hi: "भास्कराचार्य",
    attempted: false,
    selected: ""
},
{
    num: 26,
    question_en: "Which is the smallest state of India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Tripura", "Nagaland"],
    options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Which is the highest civilian award in India?",
    question_hi: "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?",
    options_en: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
    options_hi: ["भारत रत्न", "पद्म विभूषण", "पद्म भूषण", "पद्म श्री"],
    answer_en: "Bharat Ratna",
    answer_hi: "भारत रत्न",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which is the largest freshwater lake in India?",
    question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    options_en: ["Vembanad", "Chilika", "Wular", "Sambhar"],
    options_hi: ["वेम्बनाड", "चिलिका", "वुलार", "सांभर"],
    answer_en: "Vembanad",
    answer_hi: "वेम्बनाड",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थी?",
    options_en: ["Indira Gandhi", "Pratibha Patil", "Sushma Swaraj", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which is the largest island of India?",
    question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Andaman", "Lakshadweep", "Majuli", "Divar"],
    options_hi: ["अंडमान", "लक्षद्वीप", "माजुली", "दिवार"],
    answer_en: "Andaman",
    answer_hi: "अंडमान",
    attempted: false,
    selected: ""
},
{
    num: 31,
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
    num: 32,
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
    num: 33,
    question_en: "Which Indian river originates from the Himalayas?",
    question_hi: "कौन सी भारतीय नदी हिमालय से निकलती है?",
    options_en: ["Ganga", "Godavari", "Krishna", "Mahanadi"],
    options_hi: ["गंगा", "गोदावरी", "कृष्णा", "महानदी"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which is the largest bird in the world?",
    question_hi: "विश्व का सबसे बड़ा पक्षी कौन सा है?",
    options_en: ["Ostrich", "Eagle", "Albatross", "Peacock"],
    options_hi: ["शुतुरमुर्ग", "गरुड़", "एल्बाट्रॉस", "मोर"],
    answer_en: "Ostrich",
    answer_hi: "शुतुरमुर्ग",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Who wrote 'Gitanjali'?",
    question_hi: "'गीतांजलि' किसने लिखा?",
    options_en: ["Rabindranath Tagore", "Kalam", "Premchand", "Bankim Chandra Chatterjee"],
    options_hi: ["रवींद्रनाथ टैगोर", "कलाम", "प्रेमचंद", "बंकिम चंद्र चट्टोपाध्याय"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which is the largest state by population in India?",
    question_hi: "जनसंख्या के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 37,
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
    num: 38,
    question_en: "Who was the first Indian to win a Nobel Prize?",
    question_hi: "पहले भारतीय को नोबेल पुरस्कार किस क्षेत्र में मिला?",
    options_en: ["Rabindranath Tagore", "C.V. Raman", "Hargobind Khorana", "Mother Teresa"],
    options_hi: ["रवींद्रनाथ टैगोर", "सी.वी. रामन", "हर्गोबिंद खोराना", "मदर टेरेसा"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which Indian state is called 'God's Own Country'?",
    question_hi: "कौन सा भारतीय राज्य 'भगवान का अपना देश' कहलाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 40,
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
    num: 41,
    question_en: "Which is the largest volcano in India?",
    question_hi: "भारत का सबसे बड़ा ज्वालामुखी कौन सा है?",
    options_en: ["Barren Island", "Mount Abu", "Deccan Volcanoes", "Narcondam"],
    options_hi: ["बैरेन द्वीप", "माउंट आबू", "डेक्कन ज्वालामुखी", "नारकोंदम"],
    answer_en: "Barren Island",
    answer_hi: "बैरेन द्वीप",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which Indian river is known as 'Dakshin Ganga'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    options_hi: ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "Which Indian monument is a UNESCO World Heritage Site?",
    question_hi: "कौन सा भारतीय स्मारक यूनेस्को विश्व धरोहर स्थल है?",
    options_en: ["Taj Mahal", "Qutub Minar", "Red Fort", "All of these"],
    options_hi: ["ताज महल", "कुतुब मीनार", "लाल किला", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which Indian festival marks the arrival of spring?",
    question_hi: "भारत का कौन सा त्योहार वसंत के आगमन को दर्शाता है?",
    options_en: ["Holi", "Diwali", "Eid", "Christmas"],
    options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
    answer_en: "Holi",
    answer_hi: "होली",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which Indian state is known as the 'Spice Garden of India'?",
    question_hi: "कौन सा राज्य 'भारत का मसाले का बगीचा' कहलाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which is the first Indian nuclear test site?",
    question_hi: "भारत का पहला परमाणु परीक्षण स्थल कौन सा था?",
    options_en: ["Pokhran", "Kalpakkam", "Bhabha Atomic Research Centre", "Rajasthan Desert"],
    options_hi: ["पोखरण", "कल्पक्कम", "भाभा एटॉमिक रिसर्च सेंटर", "राजस्थान रेगिस्तान"],
    answer_en: "Pokhran",
    answer_hi: "पोखरण",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Who is known as the 'Father of the Indian Space Program'?",
    question_hi: "भारतीय अंतरिक्ष कार्यक्रम के 'पिता' के रूप में किसे जाना जाता है?",
    options_en: ["Vikram Sarabhai", "APJ Abdul Kalam", "Homi Bhabha", "Satish Dhawan"],
    options_hi: ["विक्रम साराभाई", "ए पी जे अब्दुल कलाम", "होमी भाभा", "सतीश धवन"],
    answer_en: "Vikram Sarabhai",
    answer_hi: "विक्रम साराभाई",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which is the national currency of India?",
    question_hi: "भारत की राष्ट्रीय मुद्रा क्या है?",
    options_en: ["Rupee", "Dollar", "Euro", "Yen"],
    options_hi: ["रुपया", "डॉलर", "यूरो", "येन"],
    answer_en: "Rupee",
    answer_hi: "रुपया",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which is the first Indian rocket to reach space?",
    question_hi: "अंतरिक्ष तक पहुँचने वाली पहली भारतीय रॉकेट कौन सी थी?",
    options_en: ["SLV-3", "Rohini", "PSLV", "GSLV"],
    options_hi: ["SLV-3", "रोहिणी", "PSLV", "GSLV"],
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