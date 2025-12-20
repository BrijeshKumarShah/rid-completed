const questions = [
{
    num: 1,
    question_en: "What is the chemical symbol for water?",
    question_hi: "पानी का रासायनिक प्रतीक क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता का सिद्धांत किसने विकसित किया?",
    options_en: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    options_hi: ["अल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which planet is called the 'Blue Planet'?",
    question_hi: "'ब्लू प्लैनेट' किस ग्रह को कहा जाता है?",
    options_en: ["Earth", "Mars", "Neptune", "Jupiter"],
    options_hi: ["पृथ्वी", "मंगल", "नेप्च्यून", "बृहस्पति"],
    answer_en: "Earth",
    answer_hi: "पृथ्वी",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "Who is known as the 'Father of the Nation' of India?",
    question_hi: "भारत के 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सर्दार पटेल"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की SI इकाई क्या है?",
    options_en: ["Newton", "Joule", "Pascal", "Watt"],
    options_hi: ["न्यूटन", "जूल", "पास्कल", "वाट"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "कौन सा तत्व 'O' प्रतीक से जाना जाता है?",
    options_en: ["Oxygen", "Gold", "Osmium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "सोना", "ऑस्मियम", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which gas is most abundant in the Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस होती है?",
    options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Which planet has the most moons in our solar system?",
    question_hi: "हमारे सौरमंडल में किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    options_en: ["Saturn", "Jupiter", "Mars", "Earth"],
    options_hi: ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "What is the freezing point of water in Celsius?",
    question_hi: "पानी का शून्यांक (Celsius में) क्या है?",
    options_en: ["0°C", "32°C", "100°C", "-273°C"],
    options_hi: ["0°C", "32°C", "100°C", "-273°C"],
    answer_en: "0°C",
    answer_hi: "0°C",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which is the largest organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Skin", "Heart", "Liver", "Lungs"],
    options_hi: ["त्वचा", "हृदय", "यकृत", "फेफड़े"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which is the first element in the periodic table?",
    question_hi: "आवर्त सारणी में पहला तत्व कौन सा है?",
    options_en: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
    options_hi: ["हाइड्रोजन", "हीलियम", "लिथियम", "ऑक्सीजन"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 12,
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
    num: 13,
    question_en: "Who proposed the three laws of motion?",
    question_hi: "गति के तीन नियम किसने प्रस्तावित किए?",
    options_en: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "James Clerk Maxwell"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "जेम्स क्लार्क मैक्सवेल"],
    answer_en: "Isaac Newton",
    answer_hi: "आइज़ैक न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "Which gas is used in fluorescent lamps?",
    question_hi: "फ्लोरोसेंट लैंप में कौन सी गैस उपयोग होती है?",
    options_en: ["Mercury Vapor", "Neon", "Helium", "Argon"],
    options_hi: ["पारा वाष्प", "निऑन", "हीलियम", "आर्गन"],
    answer_en: "Mercury Vapor",
    answer_hi: "पारा वाष्प",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "What is the atomic number of Carbon?",
    question_hi: "कार्बन का परमाणु क्रमांक क्या है?",
    options_en: ["6", "12", "8", "14"],
    options_hi: ["6", "12", "8", "14"],
    answer_en: "6",
    answer_hi: "6",
    attempted: false,
    selected: ""
},
{
    num: 16,
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
    num: 17,
    question_en: "Which element is used in nuclear reactors as fuel?",
    question_hi: "नाभिकीय रिएक्टरों में ईंधन के रूप में कौन सा तत्व उपयोग होता है?",
    options_en: ["Uranium", "Plutonium", "Thorium", "All of these"],
    options_hi: ["यूरेनियम", "प्लूटोनियम", "थोरियम", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which vitamin is obtained from sunlight?",
    question_hi: "सूरज की रोशनी से कौन सा विटामिन प्राप्त होता है?",
    options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Which is the largest planet by mass in our solar system?",
    question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह (द्रव्यमान के हिसाब से) कौन सा है?",
    options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which is the hardest naturally occurring mineral?",
    question_hi: "सबसे कठोर प्राकृतिक खनिज कौन सा है?",
    options_en: ["Diamond", "Quartz", "Graphite", "Corundum"],
    options_hi: ["हीरा", "क्वार्ट्ज़", "ग्रेफाइट", "कोरंडम"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which is the lightest gas?",
    question_hi: "सबसे हल्की गैस कौन सी है?",
    options_en: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
    options_hi: ["हाइड्रोजन", "हीलियम", "नाइट्रोजन", "ऑक्सीजन"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "Which scientist discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किस वैज्ञानिक ने की?",
    options_en: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
    options_hi: ["अलेक्जेंडर फ्लेमिंग", "लुई पास्चर", "मैरी क्यूरी", "आइज़ैक न्यूटन"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्जेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का उबलने का तापमान (Celsius में) क्या है?",
    options_en: ["100°C", "0°C", "50°C", "212°C"],
    options_hi: ["100°C", "0°C", "50°C", "212°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which planet is known as the 'Giant Planet'?",
    question_hi: "कौन सा ग्रह 'महान ग्रह' के रूप में जाना जाता है?",
    options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "नेप्च्यून", "पृथ्वी"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "Which is the main gas responsible for global warming?",
    question_hi: "वैश्विक ताप वृद्धि के लिए मुख्य गैस कौन सी जिम्मेदार है?",
    options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 26,
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
    num: 27,
    question_en: "Which acid is found in stomach?",
    question_hi: "पेट में कौन सा अम्ल पाया जाता है?",
    options_en: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["हाइड्रोक्लोरिक एसिड", "सल्फ्यूरिक एसिड", "नाइट्रिक एसिड", "सिरका अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक एसिड",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which planet has a ring system?",
    question_hi: "किस ग्रह के पास रिंग सिस्टम है?",
    options_en: ["Saturn", "Jupiter", "Mars", "Earth"],
    options_hi: ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_en: "Which gas is commonly used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्र में सामान्यतः कौन सी गैस उपयोग होती है?",
    options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_en: "Which metal has the highest electrical conductivity?",
    question_hi: "कौन सा धातु सबसे अधिक विद्युत चालक है?",
    options_en: ["Silver", "Copper", "Gold", "Aluminium"],
    options_hi: ["चांदी", "तांबा", "सोना", "एल्यूमिनियम"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "Who discovered the electron?",
    question_hi: "इलेक्ट्रॉन की खोज किसने की?",
    options_en: ["J.J. Thomson", "Rutherford", "Einstein", "Bohr"],
    options_hi: ["जे. जे. थॉमसन", "रदरफोर्ड", "आइंस्टीन", "बॉहर"],
    answer_en: "J.J. Thomson",
    answer_hi: "जे. जे. थॉमसन",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which is the hardest substance found in nature?",
    question_hi: "प्रकृति में पाया जाने वाला सबसे कठोर पदार्थ कौन सा है?",
    options_en: ["Diamond", "Graphite", "Quartz", "Corundum"],
    options_hi: ["हीरा", "ग्रेफाइट", "क्वार्ट्ज़", "कोरंडम"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "Which chemical is used in making soap?",
    question_hi: "साबुन बनाने में कौन सा रासायनिक पदार्थ उपयोग होता है?",
    options_en: ["Sodium Hydroxide", "Hydrochloric Acid", "Sulfuric Acid", "Ammonia"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक एसिड", "सल्फ्यूरिक एसिड", "अमोनिया"],
    answer_en: "Sodium Hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "What is the pH of pure water?",
    question_hi: "शुद्ध पानी का pH क्या है?",
    options_en: ["7", "0", "14", "1"],
    options_hi: ["7", "0", "14", "1"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "Which organelle is called the powerhouse of the cell?",
    question_hi: "कौन सा अंगकण कोशिका का पावरहाउस कहलाता है?",
    options_en: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Body"],
    options_hi: ["माइटोकॉन्ड्रिया", "न्यूक्लियस", "राइबोसोम", "गोल्जी बॉडी"],
    answer_en: "Mitochondria",
    answer_hi: "माइटोकॉन्ड्रिया",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which is the most abundant element in Earth's crust?",
    question_hi: "पृथ्वी की पपड़ी में सबसे अधिक पाया जाने वाला तत्व कौन सा है?",
    options_en: ["Oxygen", "Silicon", "Aluminium", "Iron"],
    options_hi: ["ऑक्सीजन", "सिलिकॉन", "एल्यूमिनियम", "लोहा"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which is the heaviest naturally occurring element?",
    question_hi: "प्राकृतिक रूप से पाया जाने वाला सबसे भारी तत्व कौन सा है?",
    options_en: ["Uranium", "Lead", "Platinum", "Gold"],
    options_hi: ["यूरेनियम", "सीसा", "प्लैटिनम", "सोना"],
    answer_en: "Uranium",
    answer_hi: "यूरेनियम",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे करीब कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "Which acid is present in lemon?",
    question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric Acid", "Sulfuric Acid", "Hydrochloric Acid", "Acetic Acid"],
    options_hi: ["सिट्रिक एसिड", "सल्फ्यूरिक एसिड", "हाइड्रोक्लोरिक एसिड", "सिरका अम्ल"],
    answer_en: "Citric Acid",
    answer_hi: "सिट्रिक एसिड",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Which is the first element of Halogens?",
    question_hi: "हलोजन का पहला तत्व कौन सा है?",
    options_en: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
    options_hi: ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
    answer_en: "Fluorine",
    answer_hi: "फ्लोरीन",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Who discovered gravity?",
    question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
    options_en: ["Isaac Newton", "Galileo", "Albert Einstein", "Kepler"],
    options_hi: ["आइज़ैक न्यूटन", "गैलीलियो", "अल्बर्ट आइंस्टीन", "केपलर"],
    answer_en: "Isaac Newton",
    answer_hi: "आइज़ैक न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which is the largest gland in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    options_en: ["Liver", "Pancreas", "Thyroid", "Pituitary"],
    options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "पिट्यूटरी"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which gas is responsible for acid rain?",
    question_hi: "अम्लीय वर्षा के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Sulfur Dioxide", "Carbon Dioxide", "Nitrogen", "Oxygen"],
    options_hi: ["सल्फर डाइऑक्साइड", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन"],
    answer_en: "Sulfur Dioxide",
    answer_hi: "सल्फर डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "Which is the most reactive metal?",
    question_hi: "सबसे प्रतिक्रियाशील धातु कौन सी है?",
    options_en: ["Potassium", "Sodium", "Calcium", "Magnesium"],
    options_hi: ["पोटेशियम", "सोडियम", "कैल्शियम", "मैग्नीशियम"],
    answer_en: "Potassium",
    answer_hi: "पोटेशियम",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which is the main component of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक कौन सा है?",
    options_en: ["Methane", "Ethane", "Propane", "Butane"],
    options_hi: ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "Which planet rotates on its axis the fastest?",
    question_hi: "कौन सा ग्रह अपनी धुरी पर सबसे तेजी से घूमता है?",
    options_en: ["Jupiter", "Earth", "Mars", "Venus"],
    options_hi: ["बृहस्पति", "पृथ्वी", "मंगल", "शुक्र"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which element is used in making nuclear bombs?",
    question_hi: "नाभिकीय बम बनाने में कौन सा तत्व उपयोग होता है?",
    options_en: ["Uranium", "Plutonium", "Thorium", "All of these"],
    options_hi: ["यूरेनियम", "प्लूटोनियम", "थोरियम", "इनमें से सभी"],
    answer_en: "All of these",
    answer_hi: "इनमें से सभी",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which is the smallest unit of matter?",
    question_hi: "पदार्थ की सबसे छोटी इकाई क्या है?",
    options_en: ["Atom", "Molecule", "Electron", "Proton"],
    options_hi: ["परमाणु", "अणु", "इलेक्ट्रॉन", "प्रोटॉन"],
    answer_en: "Atom",
    answer_hi: "परमाणु",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which is the most abundant metal in Earth's crust?",
    question_hi: "पृथ्वी की पपड़ी में सबसे अधिक मात्रा में पाया जाने वाला धातु कौन सी है?",
    options_en: ["Aluminium", "Iron", "Copper", "Gold"],
    options_hi: ["एल्यूमिनियम", "लोहा", "तांबा", "सोना"],
    answer_en: "Aluminium",
    answer_hi: "एल्यूमिनियम",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which is the only metal that is liquid at room temperature?",
    question_hi: "कौन सी धातु सामान्य तापमान पर द्रव होती है?",
    options_en: ["Mercury", "Gold", "Silver", "Copper"],
    options_hi: ["पारा", "सोना", "चांदी", "तांबा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
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