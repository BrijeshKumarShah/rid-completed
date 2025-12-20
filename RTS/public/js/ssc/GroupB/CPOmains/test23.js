const questions = [
  {
  "num": 1,
  "question_en": "What is the capital of India?",
  "question_hi": "भारत की राजधानी क्या है?",
  "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  "answer_en": "New Delhi",
  "answer_hi": "नई दिल्ली",
  "attempted": false,
  "selected": ""
},
{
  "num": 2,
  "question_en": "Which planet is known as the Red Planet?",
  "question_hi": "कौन सा ग्रह लाल ग्रह कहलाता है?",
  "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
  "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
  "answer_en": "Mars",
  "answer_hi": "मंगल",
  "attempted": false,
  "selected": ""
},
{
  "num": 3,
  "question_en": "What is the national bird of India?",
  "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
  "options_en": ["Peacock", "Eagle", "Parrot", "Sparrow"],
  "options_hi": ["मोर", "गरुड़", "तोता", "गौरैया"],
  "answer_en": "Peacock",
  "answer_hi": "मोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Who wrote the Ramayana?",
  "question_hi": "रामायण किसने लिखी?",
  "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
  "options_hi": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
  "answer_en": "Valmiki",
  "answer_hi": "वाल्मीकि",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "Which gas is essential for breathing?",
  "question_hi": "सांस लेने के लिए कौन सी गैस आवश्यक है?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Who is the Father of the Nation in India?",
  "question_hi": "भारत के राष्ट्रपिता कौन हैं?",
  "options_en": ["Mahatma Gandhi", "Nehru", "Patel", "Ambedkar"],
  "options_hi": ["महात्मा गांधी", "नेहरू", "पटेल", "अंबेडकर"],
  "answer_en": "Mahatma Gandhi",
  "answer_hi": "महात्मा गांधी",
  "attempted": false,
  "selected": ""
},
{
  "num": 7,
  "question_en": "Which is the largest ocean?",
  "question_hi": "सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Pacific", "Atlantic", "Indian", "Arctic"],
  "options_hi": ["प्रशांत", "अटलांटिक", "हिंद", "आर्कटिक"],
  "answer_en": "Pacific",
  "answer_hi": "प्रशांत",
  "attempted": false,
  "selected": ""
},
{
  "num": 8,
  "question_en": "Which vitamin is given by sunlight?",
  "question_hi": "धूप से कौन सा विटामिन मिलता है?",
  "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  "answer_en": "Vitamin D",
  "answer_hi": "विटामिन D",
  "attempted": false,
  "selected": ""
},
{
  "num": 9,
  "question_en": "Which is the fastest land animal?",
  "question_hi": "सबसे तेज़ स्थलीय जानवर कौन है?",
  "options_en": ["Cheetah", "Lion", "Horse", "Dog"],
  "options_hi": ["चीता", "शेर", "घोड़ा", "कुत्ता"],
  "answer_en": "Cheetah",
  "answer_hi": "चीता",
  "attempted": false,
  "selected": ""
},
{
  "num": 10,
  "question_en": "What is the SI unit of force?",
  "question_hi": "बल की SI इकाई क्या है?",
  "options_en": ["Newton", "Joule", "Watt", "Pascal"],
  "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
  "answer_en": "Newton",
  "answer_hi": "न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 11,
  "question_en": "Who was the first Prime Minister of India?",
  "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
  "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Rajendra Prasad", "Sardar Patel"],
  "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "राजेंद्र प्रसाद", "सरदार पटेल"],
  "answer_en": "Jawaharlal Nehru",
  "answer_hi": "जवाहरलाल नेहरू",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Which is the smallest continent?",
  "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
  "options_en": ["Australia", "Europe", "Antarctica", "South America"],
  "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
  "answer_en": "Australia",
  "answer_hi": "ऑस्ट्रेलिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
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
  "num": 14,
  "question_en": "Which country is known as the Land of Rising Sun?",
  "question_hi": "उगते सूरज की भूमि किस देश को कहा जाता है?",
  "options_en": ["Japan", "China", "Thailand", "Korea"],
  "options_hi": ["जापान", "चीन", "थाईलैंड", "कोरिया"],
  "answer_en": "Japan",
  "answer_hi": "जापान",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "What is the national animal of India?",
  "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
  "options_en": ["Tiger", "Lion", "Elephant", "Leopard"],
  "options_hi": ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  "answer_en": "Tiger",
  "answer_hi": "बाघ",
  "attempted": false,
  "selected": ""
},
{
  "num": 16,
  "question_en": "Which metal is liquid at room temperature?",
  "question_hi": "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
  "options_en": ["Mercury", "Iron", "Aluminium", "Copper"],
  "options_hi": ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  "answer_en": "Mercury",
  "answer_hi": "पारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "How many days are there in a leap year?",
  "question_hi": "लीप वर्ष में कितने दिन होते हैं?",
  "options_en": ["366", "365", "364", "367"],
  "options_hi": ["366", "365", "364", "367"],
  "answer_en": "366",
  "answer_hi": "366",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which gas is used in photosynthesis?",
  "question_hi": "प्रकाश संश्लेषण में कौन सी गैस उपयोग होती है?",
  "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "What is the hardest natural substance?",
  "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  "options_en": ["Diamond", "Iron", "Gold", "Silver"],
  "options_hi": ["हीरा", "लोहा", "सोना", "चांदी"],
  "answer_en": "Diamond",
  "answer_hi": "हीरा",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Who discovered gravity?",
  "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
  "options_en": ["Isaac Newton", "Albert Einstein", "Galileo", "Edison"],
  "options_hi": ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो", "एडिसन"],
  "answer_en": "Isaac Newton",
  "answer_hi": "आइज़ैक न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "Which river is the longest in the world?",
  "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Nile", "Amazon", "Yangtze", "Ganga"],
  "options_hi": ["नील", "अमेज़न", "यांग्त्से", "गंगा"],
  "answer_en": "Nile",
  "answer_hi": "नील",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which part of the plant prepares food?",
  "question_hi": "पौधे का कौन सा भाग भोजन बनाता है?",
  "options_en": ["Leaf", "Root", "Stem", "Flower"],
  "options_hi": ["पत्ता", "जड़", "तना", "फूल"],
  "answer_en": "Leaf",
  "answer_hi": "पत्ता",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "What is the SI unit of electric current?",
  "question_hi": "विद्युत धारा की SI इकाई क्या है?",
  "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
  "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
  "answer_en": "Ampere",
  "answer_hi": "एम्पियर",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Which planet is the closest to the Sun?",
  "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
  "options_en": ["Mercury", "Venus", "Earth", "Mars"],
  "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  "answer_en": "Mercury",
  "answer_hi": "बुध",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Who wrote the Indian National Anthem?",
  "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
  "options_en": ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Subhash Bose"],
  "options_hi": ["रवीन्द्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "सुभाष बोस"],
  "answer_en": "Rabindranath Tagore",
  "answer_hi": "रवीन्द्रनाथ टैगोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which is the largest mammal?",
  "question_hi": "सबसे बड़ा स्तनपायी कौन सा है?",
  "options_en": ["Blue Whale", "Elephant", "Giraffe", "Rhino"],
  "options_hi": ["नीली व्हेल", "हाथी", "जिराफ", "गैंडा"],
  "answer_en": "Blue Whale",
  "answer_hi": "नीली व्हेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which device is used to measure temperature?",
  "question_hi": "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
  "options_en": ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
  "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
  "answer_en": "Thermometer",
  "answer_hi": "थर्मामीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "Which continent is known as the Dark Continent?",
  "question_hi": "किस महाद्वीप को काला महाद्वीप कहा जाता है?",
  "options_en": ["Africa", "Asia", "Europe", "Australia"],
  "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
  "answer_en": "Africa",
  "answer_hi": "अफ्रीका",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "What is the boiling point of water?",
  "question_hi": "पानी का क्वथनांक क्या है?",
  "options_en": ["100°C", "90°C", "80°C", "120°C"],
  "options_hi": ["100°C", "90°C", "80°C", "120°C"],
  "answer_en": "100°C",
  "answer_hi": "100°C",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "Which Indian city is called the Pink City?",
  "question_hi": "भारत का गुलाबी शहर कौन सा है?",
  "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
  "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
  "answer_en": "Jaipur",
  "answer_hi": "जयपुर",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which blood group is the universal donor?",
  "question_hi": "सार्वभौमिक दाता रक्त समूह कौन सा है?",
  "options_en": ["O Negative", "O Positive", "AB Positive", "A Negative"],
  "options_hi": ["O नेगेटिव", "O पॉजिटिव", "AB पॉजिटिव", "A नेगेटिव"],
  "answer_en": "O Negative",
  "answer_hi": "O नेगेटिव",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Which organ controls the human body?",
  "question_hi": "मानव शरीर को नियंत्रित करने वाला अंग कौन सा है?",
  "options_en": ["Brain", "Heart", "Liver", "Kidney"],
  "options_hi": ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
  "answer_en": "Brain",
  "answer_hi": "मस्तिष्क",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "What is the chemical symbol of Gold?",
  "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
  "options_en": ["Au", "Ag", "Fe", "Cu"],
  "options_hi": ["Au", "Ag", "Fe", "Cu"],
  "answer_en": "Au",
  "answer_hi": "Au",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which festival is called the Festival of Lights?",
  "question_hi": "प्रकाश का पर्व किसे कहा जाता है?",
  "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
  "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which gas is essential for combustion?",
  "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
  "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
  "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन"],
  "answer_en": "Oxygen",
  "answer_hi": "ऑक्सीजन",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "Which instrument measures atmospheric pressure?",
  "question_hi": "वायुमंडलीय दाब मापने का यंत्र कौन सा है?",
  "options_en": ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
  "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
  "answer_en": "Barometer",
  "answer_hi": "बैरोमीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Which is the national flower of India?",
  "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
  "options_en": ["Lotus", "Rose", "Lily", "Sunflower"],
  "options_hi": ["कमल", "गुलाब", "लिली", "सूरजमुखी"],
  "answer_en": "Lotus",
  "answer_hi": "कमल",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which vitamin helps in blood clotting?",
  "question_hi": "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
  "options_en": ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  "options_hi": ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  "answer_en": "Vitamin K",
  "answer_hi": "विटामिन K",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Which country gifted the Statue of Liberty to USA?",
  "question_hi": "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की?",
  "options_en": ["France", "UK", "Germany", "Canada"],
  "options_hi": ["फ्रांस", "यूके", "जर्मनी", "कनाडा"],
  "answer_en": "France",
  "answer_hi": "फ्रांस",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Which metal is the best conductor of electricity?",
  "question_hi": "बिजली का सबसे अच्छा चालक कौन सी धातु है?",
  "options_en": ["Silver", "Copper", "Gold", "Aluminium"],
  "options_hi": ["चांदी", "तांबा", "सोना", "एल्युमिनियम"],
  "answer_en": "Silver",
  "answer_hi": "चांदी",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which is the largest desert in the world?",
  "question_hi": "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
  "options_en": ["Sahara", "Gobi", "Thar", "Kalahari"],
  "options_hi": ["सहारा", "गोबी", "थार", "कालाहारी"],
  "answer_en": "Sahara",
  "answer_hi": "सहारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "What is the currency of Japan?",
  "question_hi": "जापान की मुद्रा क्या है?",
  "options_en": ["Yen", "Won", "Dollar", "Peso"],
  "options_hi": ["येन", "वोन", "डॉलर", "पेसो"],
  "answer_en": "Yen",
  "answer_hi": "येन",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which Indian state has the longest coastline?",
  "question_hi": "भारत का सबसे लंबा समुद्री तट किस राज्य में है?",
  "options_en": ["Gujarat", "Tamil Nadu", "Maharashtra", "Odisha"],
  "options_hi": ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "ओडिशा"],
  "answer_en": "Gujarat",
  "answer_hi": "गुजरात",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "Which day is celebrated as World Environment Day?",
  "question_hi": "विश्व पर्यावरण दिवस कब मनाया जाता है?",
  "options_en": ["5 June", "22 April", "16 October", "1 May"],
  "options_hi": ["5 जून", "22 अप्रैल", "16 अक्टूबर", "1 मई"],
  "answer_en": "5 June",
  "answer_hi": "5 जून",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which gas is filled in balloons?",
  "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
  "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  "answer_en": "Helium",
  "answer_hi": "हीलियम",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Who is known as the Missile Man of India?",
  "question_hi": "भारत के मिसाइल मैन के नाम से कौन जाने जाते हैं?",
  "options_en": ["A. P. J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Rakesh Sharma"],
  "options_hi": ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "राकेश शर्मा"],
  "answer_en": "A. P. J. Abdul Kalam",
  "answer_hi": "ए. पी. जे. अब्दुल कलाम",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which instrument is used to see distant objects?",
  "question_hi": "दूर की वस्तुएँ देखने के लिए किस यंत्र का उपयोग होता है?",
  "options_en": ["Telescope", "Microscope", "Periscope", "Camera"],
  "options_hi": ["दूरबीन", "सूक्ष्मदर्शी", "पेरिस्कोप", "कैमरा"],
  "answer_en": "Telescope",
  "answer_hi": "दूरबीन",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "What is the full form of CPU?",
  "question_hi": "CPU का पूरा नाम क्या है?",
  "options_en": ["Central Processing Unit", "Control Processing Unit", "Central Program Unit", "Core Processing Unit"],
  "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कोर प्रोसेसिंग यूनिट"],
  "answer_en": "Central Processing Unit",
  "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Which gas do humans exhale?",
  "question_hi": "मनुष्य कौन सी गैस बाहर छोड़ते हैं?",
  "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "Which Indian river is called the Ganga of the South?",
  "question_hi": "भारत की दक्षिण की गंगा किस नदी को कहा जाता है?",
  "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
  "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
  "answer_en": "Godavari",
  "answer_hi": "गोदावरी",
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