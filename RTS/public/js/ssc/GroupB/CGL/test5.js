const questions = [
  {
    num: 1,
    question_en: "What is the capital of France?",
    question_hi: "फ्रांस की राजधानी क्या है?",
    options_en: ["Paris", "Berlin", "Rome", "Madrid"],
    options_hi: ["पेरिस", "बर्लिन", "रोम", "मैड्रिड"],
    answer_en: "Paris",
    answer_hi: "पेरिस",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Who wrote the 'Mahabharata'?",
    question_hi: "'महाभारत' किसने लिखा?",
    options_en: ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
    options_hi: ["व्यास", "वाल्मीकि", "कालिदास", "तुलसीदास"],
    answer_en: "Vyasa",
    answer_hi: "व्यास",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which planet is known as the Blue Planet?",
    question_hi: "कौन सा ग्रह 'नीला ग्रह' कहलाता है?",
    options_en: ["Earth", "Mars", "Neptune", "Jupiter"],
    options_hi: ["पृथ्वी", "मंगल", "नेप्च्यून", "बृहस्पति"],
    answer_en: "Earth",
    answer_hi: "पृथ्वी",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लीएल्मो मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which is the largest planet in our solar system?",
    question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    options_hi: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Who is known as the 'Father of the Nation' in India?",
    question_hi: "भारत में 'राष्ट्रपिता' के नाम से किसे जाना जाता है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Bhagat Singh"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सार्दार पटेल", "भगत सिंह"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which is the smallest continent by area?",
    question_hi: "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    options_en: ["Australia", "Europe", "Antarctica", "South America"],
    options_hi: ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Gregor Mendel"],
    options_hi: ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "ग्रेगर मेंडल"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्जेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which Indian state is famous for its backwaters?",
    question_hi: "कौन सा भारतीय राज्य अपनी बैकवाटर के लिए प्रसिद्ध है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which Indian festival is known as the 'Festival of Lights'?",
    question_hi: "भारत का कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
    options_en: ["Diwali", "Holi", "Eid", "Christmas"],
    options_hi: ["दीवाली", "होली", "ईद", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दीवाली",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Rajendra Prasad", "Zakir Hussain", "Radhakrishnan", "V. V. Giri"],
    options_hi: ["राजेंद्र प्रसाद", "जाकिर हुसैन", "राधाकृष्णन", "वी. वी. गिरी"],
    answer_en: "Rajendra Prasad",
    answer_hi: "राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
},
{
    num: 13,
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
    num: 14,
    question_en: "Which river is called the 'Sorrow of Bihar'?",
    question_hi: "कौन सी नदी 'बिहार का दुःख' कहलाती है?",
    options_en: ["Kosi", "Ganga", "Yamuna", "Ghaghara"],
    options_hi: ["कोसी", "गंगा", "यमुना", "घाघरा"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which metal has the highest electrical conductivity?",
    question_hi: "कौन सा धातु सबसे उच्च विद्युत चालकता रखता है?",
    options_en: ["Silver", "Copper", "Aluminum", "Gold"],
    options_hi: ["चांदी", "तांबा", "एल्यूमिनियम", "सोना"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "Who wrote 'Gitanjali'?",
    question_hi: "'गीतांजलि' किसने लिखी?",
    options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Kavi Pradeep", "Sarojini Naidu"],
    options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "कवि प्रदीप", "सरोजिनी नायडू"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
},
{
    num: 17,
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
    num: 18,
    question_en: "Which vitamin is known as the 'Sunshine Vitamin'?",
    question_hi: "कौन सा विटामिन 'सनशाइन विटामिन' के नाम से जाना जाता है?",
    options_en: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
    options_hi: ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन B12"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "सोनिया गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 20,
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
    num: 21,
    question_en: "Which Indian city is called the 'Pink City'?",
    question_hi: "भारत का कौन सा शहर 'पिंक सिटी' कहलाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar", "Gobi", "Sahara", "Kalahari"],
    options_hi: ["थार", "गोबी", "सहारा", "कालाहारी"],
    answer_en: "Thar",
    answer_hi: "थार",
    attempted: false,
    selected: ""
},
{
    num: 23,
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
    num: 24,
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
    num: 25,
    question_en: "Which is the largest mammal?",
    question_hi: "सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    options_hi: ["ब्लू व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
},
{
    num: 26,
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
    num: 27,
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
    num: 28,
    question_en: "Which blood group is called the universal donor?",
    question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता कहा जाता है?",
    options_en: ["O negative", "A positive", "B positive", "AB positive"],
    options_hi: ["O नेगेटिव", "A पॉज़िटिव", "B पॉज़िटिव", "AB पॉज़िटिव"],
    answer_en: "O negative",
    answer_hi: "O नेगेटिव",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Which is the first Indian satellite to orbit the Moon?",
    question_hi: "चंद्रमा की परिक्रमा करने वाला पहला भारतीय उपग्रह कौन सा है?",
    options_en: ["Chandrayaan-1", "Aryabhata", "Rohini", "INSAT-1A"],
    options_hi: ["चंद्रयान-1", "आर्यभट्ट", "रोहिणी", "इंसैट-1ए"],
    answer_en: "Chandrayaan-1",
    answer_hi: "चंद्रयान-1",
    attempted: false,
    selected: ""
},
{
    num: 30,
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
    num: 31,
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
    num: 32,
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
    num: 33,
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
    num: 34,
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
    num: 35,
    question_en: "Which is the largest island in the world?",
    question_hi: "विश्व का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Greenland", "Australia", "Borneo", "Madagascar"],
    options_hi: ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बोर्नियो", "मेडागास्कर"],
    answer_en: "Greenland",
    answer_hi: "ग्रीनलैंड",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which Indian river is called the 'Ganga of the South'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which is the first human-made satellite?",
    question_hi: "पहला मानव निर्मित उपग्रह कौन सा था?",
    options_en: ["Sputnik 1", "Aryabhata", "Explorer 1", "Telstar"],
    options_hi: ["स्पुतनिक 1", "आर्यभट्ट", "एक्सप्लोरर 1", "टेलस्टार"],
    answer_en: "Sputnik 1",
    answer_hi: "स्पुतनिक 1",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which Indian state is called the 'Spice Garden of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत का मसाले का बगीचा' कहलाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 39,
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
    num: 40,
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
    num: 41,
    question_en: "Which Indian river is the longest?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Godavari", "Krishna", "Yamuna"],
    options_hi: ["गंगा", "गोदावरी", "कृष्णा", "यमुना"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 42,
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
    num: 43,
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
    num: 44,
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
    num: 45,
    question_en: "Which is the smallest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Mercury", "Mars", "Venus", "Earth"],
    options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Who is the author of 'Wings of Fire'?",
    question_hi: "'विंग्स ऑफ़ फायर' के लेखक कौन हैं?",
    options_en: ["A. P. J. Abdul Kalam", "R.K. Narayan", "Chetan Bhagat", "Ruskin Bond"],
    options_hi: ["ए. पी. जे. अब्दुल कलाम", "आर. के. नारायण", "चेतन भगत", "रसकिन बॉन्ड"],
    answer_en: "A. P. J. Abdul Kalam",
    answer_hi: "ए. पी. जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which gas is used in electric bulbs?",
    question_hi: "बिजली के बल्ब में कौन सी गैस का उपयोग होता है?",
    options_en: ["Argon", "Oxygen", "Nitrogen", "Helium"],
    options_hi: ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which Indian state has the largest population?",
    question_hi: "सबसे अधिक जनसंख्या वाला भारतीय राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपने वलयों के लिए जाना जाता है?",
    options_en: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    options_hi: ["शनि", "बृहस्पति", "यूरेनस", "नेप्च्यून"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत का 'मिसाइल मैन' कौन है?",
    options_en: ["A. P. J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Satish Dhawan"],
    options_hi: ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सतीश धवन"],
    answer_en: "A. P. J. Abdul Kalam",
    answer_hi: "ए. पी. जे. अब्दुल कलाम",
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