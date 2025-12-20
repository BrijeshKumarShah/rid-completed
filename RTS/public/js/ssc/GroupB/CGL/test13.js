const questions = [
  {
    num: 1,
    question_en: "Which Indian state is called 'Land of Temples'?",
    question_hi: "कौन सा भारतीय राज्य 'मंदिरों की भूमि' कहा जाता है?",
    options_en: ["Odisha", "Tamil Nadu", "Rajasthan", "Kerala"],
    options_hi: ["ओडिशा", "तमिलनाडु", "राजस्थान", "केरल"],
    answer_en: "Odisha",
    answer_hi: "ओडिशा",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपनी अंगूठियों के लिए जाना जाता है?",
    options_en: ["Saturn", "Jupiter", "Mars", "Venus"],
    options_hi: ["शनि", "बृहस्पति", "मंगल", "शुक्र"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which is the highest waterfall in India?",
    question_hi: "भारत का सबसे ऊँचा झरना कौन सा है?",
    options_en: ["Kunchikal Falls", "Jog Falls", "Nohkalikai Falls", "Athirappilly Falls"],
    options_hi: ["कुंचिकल फॉल्स", "जोग फॉल्स", "नोहलिकाइ फॉल्स", "अथिरप्पिली फॉल्स"],
    answer_en: "Kunchikal Falls",
    answer_hi: "कुंचिकल फॉल्स",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Who is the author of 'Wings of Fire'?",
    question_hi: "'विंग्स ऑफ़ फायर' के लेखक कौन हैं?",
    options_en: ["APJ Abdul Kalam", "R.K. Narayan", "Arundhati Roy", "Chetan Bhagat"],
    options_hi: ["ए.पी.जे. अब्दुल कलाम", "आर.के. नारायण", "अरुंधती रॉय", "चेतन भगत"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए.पी.जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar Desert", "Sahara", "Gobi", "Kalahari"],
    options_hi: ["थार रेगिस्तान", "सहारा", "गोबी", "कालाहारी"],
    answer_en: "Thar Desert",
    answer_hi: "थार रेगिस्तान",
    attempted: false,
    selected: ""
},
{
    num: 6,
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
    num: 7,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर द्रव होती है?",
    options_en: ["Mercury", "Gold", "Silver", "Copper"],
    options_hi: ["पारा", "सोना", "चाँदी", "तांबा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which is the smallest planet in our solar system?",
    question_hi: "हमारे सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Mercury", "Mars", "Venus", "Earth"],
    options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Thomas Edison"],
    options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "थॉमस एडिसन"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्जेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which Indian city is called 'Silicon Valley of India'?",
    question_hi: "कौन सा भारतीय शहर 'भारत की सिलिकॉन वैली' कहा जाता है?",
    options_en: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which river is known as 'Sorrow of Bihar'?",
    question_hi: "कौन सी नदी 'बिहार का दुःख' कहलाती है?",
    options_en: ["Kosi", "Ganga", "Brahmaputra", "Yamuna"],
    options_hi: ["कोसी", "गंगा", "ब्रह्मपुत्र", "यमुना"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    options_en: ["APJ Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "C.V. Raman"],
    options_hi: ["ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "विक्रम साराभाई", "सी.वी. रामन"],
    answer_en: "APJ Abdul Kalam",
    answer_hi: "ए.पी.जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "Which is the largest state of India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "Which Indian monument is also called the 'Pink City Palace'?",
    question_hi: "कौन सा भारतीय स्मारक 'पिंक सिटी पैलेस' के नाम से भी जाना जाता है?",
    options_en: ["City Palace Jaipur", "Taj Mahal", "Red Fort", "Qutub Minar"],
    options_hi: ["सिटी पैलेस जयपुर", "ताज महल", "लाल किला", "कुतुब मीनार"],
    answer_en: "City Palace Jaipur",
    answer_hi: "सिटी पैलेस जयपुर",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which is the national aquatic animal of India?",
    question_hi: "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
    options_en: ["Ganges River Dolphin", "Shark", "Whale", "Crocodile"],
    options_hi: ["गंगा डॉल्फिन", "शार्क", "व्हेल", "मगरमच्छ"],
    answer_en: "Ganges River Dolphin",
    answer_hi: "गंगा डॉल्फिन",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "Who wrote the book 'India Wins Freedom'?",
    question_hi: "'इंडिया विंस फ्रीडम' पुस्तक किसने लिखी?",
    options_en: ["Maulana Abul Kalam Azad", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"],
    options_hi: ["मौलाना अबुल कलाम आज़ाद", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सर्दार पटेल"],
    answer_en: "Maulana Abul Kalam Azad",
    answer_hi: "मौलाना अबुल कलाम आज़ाद",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which Indian state has the largest coastline?",
    question_hi: "सबसे लंबा तटरेखा वाला भारतीय राज्य कौन सा है?",
    options_en: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Odisha"],
    options_hi: ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "ओडिशा"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which gas is commonly used in electric bulbs?",
    question_hi: "बिजली के बल्ब में सामान्यतः कौन सी गैस उपयोग होती है?",
    options_en: ["Argon", "Oxygen", "Nitrogen", "Helium"],
    options_hi: ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Which Indian city is called 'City of Joy'?",
    question_hi: "कौन सा भारतीय शहर 'सिटी ऑफ़ जॉय' के नाम से जाना जाता है?",
    options_en: ["Kolkata", "Mumbai", "Chennai", "Bangalore"],
    options_hi: ["कोलकाता", "मुंबई", "चेन्नई", "बेंगलुरु"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "कौन सा तत्व का रासायनिक प्रतीक 'O' है?",
    options_en: ["Oxygen", "Gold", "Silver", "Iron"],
    options_hi: ["ऑक्सीजन", "सोना", "चाँदी", "लोहा"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which Indian state is known as 'God's Own Country'?",
    question_hi: "'गॉड्स ओन कंट्री' के रूप में प्रसिद्ध भारतीय राज्य कौन सा है?",
    options_en: ["Kerala", "Goa", "Himachal Pradesh", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "हिमाचल प्रदेश", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Which Indian river is called 'Dakshin Ganga'?",
    question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Narmada"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Who invented the radio?",
    question_hi: "रेडियो का आविष्कार किसने किया?",
    options_en: ["Guglielmo Marconi", "Thomas Edison", "Alexander Graham Bell", "Nikola Tesla"],
    options_hi: ["गुग्लिएल्मो मार्कोनी", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला"],
    answer_en: "Guglielmo Marconi",
    answer_hi: "गुग्लिएल्मो मार्कोनी",
    attempted: false,
    selected: ""
},
{
    num: 24,
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
    num: 25,
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
    num: 26,
    question_en: "Which Indian state is called the 'Land of Five Rivers'?",
    question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' कहलाता है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
    options_hi: ["अलेक्ज़ेंडर फ्लेमिंग", "मेरी क्यूरी", "लुई पाश्चर", "रॉबर्ट कोच"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्ज़ेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which Indian city is known as 'Electronic City'?",
    question_hi: "कौन सा भारतीय शहर 'इलेक्ट्रॉनिक सिटी' के नाम से जाना जाता है?",
    options_en: ["Bangalore", "Hyderabad", "Pune", "Chennai"],
    options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    answer_en: "Bangalore",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
},
{
    num: 29,
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
    num: 30,
    question_en: "Who is known as the 'Father of Indian Constitution'?",
    question_hi: "भारत के संविधान का 'पिता' किसे कहा जाता है?",
    options_en: ["B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    options_hi: ["बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सर्दार पटेल"],
    answer_en: "B.R. Ambedkar",
    answer_hi: "बी.आर. अम्बेडकर",
    attempted: false,
    selected: ""
},
{
    num: 31,
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
    num: 32,
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
    num: 33,
    question_en: "Which Indian state is called 'Scotland of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत का स्कॉटलैंड' कहलाता है?",
    options_en: ["Meghalaya", "Himachal Pradesh", "Sikkim", "Kerala"],
    options_hi: ["मेघालय", "हिमाचल प्रदेश", "सिक्किम", "केरल"],
    answer_en: "Meghalaya",
    answer_hi: "मेघालय",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
    options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
},
{
    num: 35,
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
    num: 36,
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
    num: 37,
    question_en: "Which planet is known as 'Red Planet'?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Rajendra Prasad", "Zakir Husain", "V.V. Giri", "R. K. Narayan"],
    options_hi: ["राजेंद्र प्रसाद", "जाकिर हुसैन", "वी.वी. गिरी", "आर. के. नारायण"],
    answer_en: "Rajendra Prasad",
    answer_hi: "राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar Desert", "Sahara", "Gobi", "Kalahari"],
    options_hi: ["थार रेगिस्तान", "सहारा", "गोबी", "कालाहारी"],
    answer_en: "Thar Desert",
    answer_hi: "थार रेगिस्तान",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Which gas is used in balloons to make them float?",
    question_hi: "गुब्बारों को तैरने के लिए कौन सी गैस उपयोग होती है?",
    options_en: ["Helium", "Oxygen", "Nitrogen", "Carbon Dioxide"],
    options_hi: ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Which Indian state has the largest tea production?",
    question_hi: "कौन सा भारतीय राज्य सबसे अधिक चाय का उत्पादन करता है?",
    options_en: ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    options_hi: ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which is the largest freshwater lake in India?",
    question_hi: "भारत की सबसे बड़ी ताजे पानी की झील कौन सी है?",
    options_en: ["Vembanad", "Chilika", "Wular", "Sambhar"],
    options_hi: ["वेम्बानाड", "चिलिका", "वुलार", "सांभर"],
    answer_en: "Vembanad",
    answer_hi: "वेम्बानाड",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which Indian leader is called 'Iron Man of India'?",
    question_hi: "भारत के किस नेता को 'भारत का लौह पुरुष' कहा जाता है?",
    options_en: ["Sardar Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi"],
    options_hi: ["सर्दार पटेल", "जवाहरलाल नेहरू", "महात्मा गांधी", "इंदिरा गांधी"],
    answer_en: "Sardar Patel",
    answer_hi: "सर्दार पटेल",
    attempted: false,
    selected: ""
},
{
    num: 44,
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
    num: 45,
    question_en: "Who discovered electricity?",
    question_hi: "विद्युत की खोज किसने की?",
    options_en: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    options_hi: ["बेंजामिन फ्रैंकलिन", "थॉमस एडिसन", "निकोला टेस्ला", "माइकल फैराडे"],
    answer_en: "Benjamin Franklin",
    answer_hi: "बेंजामिन फ्रैंकलिन",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which Indian monument is also called 'Symbol of Love'?",
    question_hi: "भारत का कौन सा स्मारक 'प्रेम का प्रतीक' कहलाता है?",
    options_en: ["Taj Mahal", "Red Fort", "Qutub Minar", "Gateway of India"],
    options_hi: ["ताज महल", "लाल किला", "कुतुब मीनार", "गेटवे ऑफ इंडिया"],
    answer_en: "Taj Mahal",
    answer_hi: "ताज महल",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which is the largest mammal on earth?",
    question_hi: "पृथ्वी का सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    options_hi: ["ब्लू व्हेल", "हाथी", "जिराफ़", "हिप्पोपोटामस"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which is the national fruit of India?",
    question_hi: "भारत का राष्ट्रीय फल कौन सा है?",
    options_en: ["Mango", "Banana", "Apple", "Guava"],
    options_hi: ["आम", "केला", "सेब", "अमरूद"],
    answer_en: "Mango",
    answer_hi: "आम",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which Indian festival is celebrated to mark the harvest season?",
    question_hi: "कौन सा भारतीय त्योहार फसल के मौसम को चिह्नित करने के लिए मनाया जाता है?",
    options_en: ["Pongal", "Diwali", "Holi", "Eid"],
    options_hi: ["पोंगल", "दीवाली", "होली", "ईद"],
    answer_en: "Pongal",
    answer_hi: "पोंगल",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    options_hi: ["अलेक्ज़ेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिएल्मो मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्ज़ेंडर ग्राहम बेल",
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