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
    question_en: "Who proposed the theory of relativity?",
    question_hi: "सापेक्षता का सिद्धांत किसने प्रस्तावित किया?",
    options_en: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    options_hi: ["अल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
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
    num: 4,
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
    num: 5,
    question_en: "Which Indian state is famous for backwaters?",
    question_hi: "कौन सा भारतीय राज्य बैकवाटर्स के लिए प्रसिद्ध है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
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
    num: 9,
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
    num: 10,
    question_en: "Which is the largest lake in India?",
    question_hi: "भारत की सबसे बड़ी झील कौन सी है?",
    options_en: ["Vembanad", "Chilika", "Wular", "Sambhar"],
    options_hi: ["वेम्बानाड", "चिलिका", "वुलार", "सांभर"],
    answer_en: "Vembanad",
    answer_hi: "वेम्बानाड",
    attempted: false,
    selected: ""
  },

  // 🔹 NEW Questions 11–50
  {
    num: 11,
    question_en: "Which Indian river is known as the 'Ganga of the South'?",
    question_hi: "कौन सी भारतीय नदी 'दक्षिण की गंगा' कहलाती है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Narmada"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who wrote the book 'Discovery of India'?",
    question_hi: "किताब 'डिस्कवरी ऑफ़ इंडिया' किसने लिखी?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sarvepalli Radhakrishnan", "Netaji Subhas Bose"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सर्वेपल्ली राधाकृष्णन", "नेताजी सुभाष बोस"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which gas is used in balloons to make them float?",
    question_hi: "गुब्बारे उड़ाने के लिए कौन सी गैस उपयोग होती है?",
    options_en: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    options_hi: ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the main language of Brazil?",
    question_hi: "ब्राज़ील की मुख्य भाषा कौन सी है?",
    options_en: ["Portuguese", "Spanish", "English", "French"],
    options_hi: ["पुर्तगाली", "स्पेनी", "अंग्रेज़ी", "फ्रेंच"],
    answer_en: "Portuguese",
    answer_hi: "पुर्तगाली",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which device is used to measure atmospheric pressure?",
    question_hi: "वायुमंडलीय दबाव मापने के लिए कौन सा यंत्र प्रयोग होता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाईग्रोमीटर", "एल्टीमीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत में सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
    options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the freezing point of water in °C?",
    question_hi: "पानी का शीतांक °C में क्या है?",
    options_en: ["0", "32", "100", "50"],
    options_hi: ["0", "32", "100", "50"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने का यंत्र क्या कहलाता है?",
    options_en: ["Thermometer", "Barometer", "Speedometer", "Hygrometer"],
    options_hi: ["थर्मामीटर", "बैरोमीटर", "स्पीडोमीटर", "हाईग्रोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Rajendra Prasad", "Zakir Husain", "Sarvepalli Radhakrishnan", "Dr. Ambedkar"],
    options_hi: ["राजेंद्र प्रसाद", "जाकिर हुसैन", "सर्वेपल्ली राधाकृष्णन", "डा. अंबेडकर"],  
    answer_en: "Rajendra Prasad",
    answer_hi: "राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which Indian state is known as the 'Land of Rising Sun'?",
    question_hi: "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
    options_en: ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    options_hi: ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Which element has the chemical symbol 'Na'?",
    question_hi: "कौन सा तत्व 'Na' प्रतीक द्वारा दर्शाया जाता है?",
    options_en: ["Sodium", "Nitrogen", "Neon", "Nickel"],
    options_hi: ["सोडियम", "नाइट्रोजन", "नीऑन", "निकेल"],
    answer_en: "Sodium",
    answer_hi: "सोडियम",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "Who is the author of 'Ramayana'?",
    question_hi: "'रामायण' के लेखक कौन हैं?",
    options_en: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"],
    options_hi: ["वाल्मीकि", "व्यास", "तुलसीदास", "कालिदास"],
    answer_en: "Valmiki",
    answer_hi: "वाल्मीकि",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "What is the powerhouse of the cell?",
    question_hi: "कोशिका का ऊर्जा केंद्र क्या कहलाता है?",
    options_en: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
    options_hi: ["माइटोकॉन्ड्रिया", "न्यूक्लियस", "राइबोसोम", "क्लोरोप्लास्ट"],
    answer_en: "Mitochondria",
    answer_hi: "माइटोकॉन्ड्रिया",
    attempted: false,
    selected: ""
},
{
    num: 25,
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
    num: 26,
    question_en: "Which planet is called the 'Morning Star'?",
    question_hi: "कौन सा ग्रह 'प्रभात तारा' कहलाता है?",
    options_en: ["Venus", "Mars", "Mercury", "Jupiter"],
    options_hi: ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
    answer_en: "Venus",
    answer_hi: "शुक्र",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "Which is the largest desert in the world?",
    question_hi: "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Sahara", "Gobi", "Kalahari", "Thar"],
    options_hi: ["सहारा", "गोबी", "कालाहारी", "थार"],
    answer_en: "Sahara",
    answer_hi: "सहारा",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which is the national fruit of India?",
    question_hi: "भारत का राष्ट्रीय फल कौन सा है?",
    options_en: ["Mango", "Apple", "Banana", "Orange"],
    options_hi: ["आम", "सेब", "केला", "संतरा"],
    answer_en: "Mango",
    answer_hi: "आम",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "What is the formula of table salt?",
    question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
    options_en: ["NaCl", "KCl", "CaCl2", "MgCl2"],
    options_hi: ["NaCl", "KCl", "CaCl2", "MgCl2"],
    answer_en: "NaCl",
    answer_hi: "NaCl",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which country hosted the 2020 Summer Olympics?",
    question_hi: "2020 ग्रीष्मकालीन ओलंपिक की मेज़बानी किस देश ने की थी?",
    options_en: ["Japan", "China", "USA", "UK"],
    options_hi: ["जापान", "चीन", "यूएसए", "यूके"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
    options_hi: ["अलेक्ज़ेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "रॉबर्ट कोच"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्ज़ेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which instrument is used to measure humidity?",
    question_hi: "नमी मापने के लिए कौन सा यंत्र प्रयोग होता है?",
    options_en: ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    options_hi: ["हाईग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनेमोमीटर"],
    answer_en: "Hygrometer",
    answer_hi: "हाईग्रोमीटर",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के नाम से किसे जाना जाता है?",
    options_en: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Rakesh Sharma"],
    options_hi: ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "राकेश शर्मा"],
    answer_en: "A.P.J. Abdul Kalam",
    answer_hi: "ए. पी. जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which organ in human body produces insulin?",
    question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
    options_en: ["Pancreas", "Liver", "Kidney", "Spleen"],
    options_hi: ["अग्न्याशय", "यकृत", "गुर्दा", "प्लीहा"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Which Indian festival is known as the 'Festival of Lights'?",
    question_hi: "कौन सा भारतीय त्योहार 'दीयों का त्योहार' कहलाता है?",
    options_en: ["Diwali", "Holi", "Eid", "Christmas"],
    options_hi: ["दिवाली", "होली", "ईद", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दिवाली",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "What is the speed of light in vacuum?",
    question_hi: "शून्य स्थान (Vacuum) में प्रकाश की गति कितनी है?",
    options_en: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 km/s", "3×10^7 m/s"],
    options_hi: ["3×10^8 मी/से", "3×10^6 मी/से", "3×10^5 किमी/से", "3×10^7 मी/से"],
    answer_en: "3×10^8 m/s",
    answer_hi: "3×10^8 मी/से",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which planet is called the 'Evening Star'?",
    question_hi: "कौन सा ग्रह 'संध्या तारा' कहलाता है?",
    options_en: ["Venus", "Mars", "Mercury", "Jupiter"],
    options_hi: ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
    answer_en: "Venus",
    answer_hi: "शुक्र",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which is the deepest ocean in the world?",
    question_hi: "विश्व का सबसे गहरा महासागर कौन सा है?",
    options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which vitamin is essential for blood clotting?",
    question_hi: "रक्त जमने के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Who painted the 'Mona Lisa'?",
    question_hi: "'मोना लिसा' चित्रकला किसने बनाई?",
    options_en: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Rembrandt"],
    options_hi: ["लियोनार्डो दा विंची", "माइकल एंजेलो", "राफेल", "रेम्ब्रांट"],
    answer_en: "Leonardo da Vinci",
    answer_hi: "लियोनार्डो दा विंची",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Which is the fastest bird in the world?",
    question_hi: "विश्व का सबसे तेज़ पक्षी कौन सा है?",
    options_en: ["Peregrine Falcon", "Eagle", "Hawk", "Ostrich"],
    options_hi: ["पैरेग्रिन फाल्कन", "गरुड़", "बाज", "शुतुरमुर्ग"],
    answer_en: "Peregrine Falcon",
    answer_hi: "पैरेग्रिन फाल्कन",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which planet has the largest number of moons?",
    question_hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    options_en: ["Jupiter", "Saturn", "Mars", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "मंगल", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 43,
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
    num: 44,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक गैस कौन सी है?",
    options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which Indian city is known as the 'Pink City'?",
    question_hi: "कौन सा भारतीय शहर 'गुलाबी शहर' के नाम से जाना जाता है?",
    options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which is the largest island in the world?",
    question_hi: "विश्व का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Greenland", "Australia", "Madagascar", "Borneo"],
    options_hi: ["ग्रीनलैंड", "ऑस्ट्रेलिया", "मेडागास्कर", "बोर्नियो"],
    answer_en: "Greenland",
    answer_hi: "ग्रीनलैंड",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Who developed the theory of evolution by natural selection?",
    question_hi: "प्राकृतिक चयन द्वारा विकास का सिद्धांत किसने विकसित किया?",
    options_en: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"],
    options_hi: ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "लुई पाश्चर", "आइज़ैक न्यूटन"],
    answer_en: "Charles Darwin",
    answer_hi: "चार्ल्स डार्विन",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर द्रव होता है?",
    options_en: ["Mercury", "Lead", "Gold", "Silver"],
    options_hi: ["पारा", "सीसा", "सोना", "चांदी"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
},
{
    num: 49,
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
    num: 50,
    question_en: "Which is the largest internal organ of the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
    options_en: ["Liver", "Heart", "Lung", "Kidney"],
    options_hi: ["यकृत", "हृदय", "फेफड़ा", "गुर्दा"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
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