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
    question_en: "What is the chemical symbol for water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता के सिद्धांत को किसने विकसित किया?",
    options_en: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "निकोल Tesla", "गैलीलियो गैलिली"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What gas do plants use for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which element has the chemical symbol 'Fe'?",
    question_hi: "'Fe' रासायनिक संकेत किस तत्व का है?",
    options_en: ["Iron", "Fluorine", "Lead", "Gold"],
    options_hi: ["लोहा", "फ्लोरीन", "सीसा", "सोना"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    options_en: ["Gold", "Diamond", "Quartz", "Iron"],
    options_hi: ["सोना", "हीरा", "क्वार्ट्ज", "लोहा"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["206", "210", "180", "230"],
    options_hi: ["206", "210", "180", "230"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the capital of France?",
    question_hi: "फ्रांस की राजधानी क्या है?",
    options_en: ["Berlin", "Madrid", "Paris", "Rome"],
    options_hi: ["बर्लिन", "मैड्रिड", "पेरिस", "रोम"],
    answer_en: "Paris",
    answer_hi: "पेरिस",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which gas do humans breathe to survive?",
    question_hi: "मनुष्य जीवित रहने के लिए किस गैस को सांस में लेते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the square root of 64?",
    question_hi: "64 का वर्गमूल क्या है?",
    options_en: ["6", "7", "8", "9"],
    options_hi: ["6", "7", "8", "9"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who wrote 'Hamlet'?",
    question_hi: "'हैमलेट' किसने लिखा?",
    options_en: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"],
    options_hi: ["विलियम वर्ड्सवर्थ", "विलियम शेक्सपियर", "जेन ऑस्टिन", "मार्क ट्वेन"],
    answer_en: "William Shakespeare",
    answer_hi: "विलियम शेक्सपियर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपनी वलयों के लिए प्रसिद्ध है?",
    options_en: ["Mars", "Jupiter", "Saturn", "Neptune"],
    options_hi: ["मंगल", "बृहस्पति", "शनि", "नेपच्यून"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "How many continents are there on Earth?",
    question_hi: "पृथ्वी पर कुल कितने महाद्वीप हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का क्वथनांक सेल्सियस में कितना होता है?",
    options_en: ["90°C", "100°C", "120°C", "150°C"],
    options_hi: ["90°C", "100°C", "120°C", "150°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the capital of Japan?",
    question_hi: "जापान की राजधानी क्या है?",
    options_en: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
    options_hi: ["बीजिंग", "सियोल", "बैंकॉक", "टोक्यो"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who painted the Mona Lisa?",
    question_hi: "मोना लिसा की पेंटिंग किसने बनाई?",
    options_en: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    options_hi: ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "माइकल एंजेलो"],
    answer_en: "Leonardo da Vinci",
    answer_hi: "लियोनार्डो दा विंची",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the largest ocean on Earth?",
    question_hi: "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["अटलांटिक महासागर", "हिन्द महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the smallest prime number?",
    question_hi: "सबसे छोटा अभाज्य संख्या कौन सा है?",
    options_en: ["0", "1", "2", "3"],
    options_hi: ["0", "1", "2", "3"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "कौन सा देश उगते सूरज की भूमि के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "India", "South Korea"],
    options_hi: ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the speed of light?",
    question_hi: "प्रकाश की गति क्या है?",
    options_en: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"],
    options_hi: ["300,000 किमी/से", "150,000 किमी/से", "500,000 किमी/से", "600,000 किमी/से"],
    answer_en: "300,000 km/s",
    answer_hi: "300,000 किमी/से",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which gas is used to fill balloons?",
    question_hi: "गुब्बारों को भरने के लिए किस गैस का उपयोग किया जाता है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Who is the author of 'Harry Potter'?",
    question_hi: "'हैरी पॉटर' के लेखक कौन हैं?",
    options_en: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
    options_hi: ["जे.आर.आर. टॉल्किन", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन", "स्टीफन किंग"],
    answer_en: "J.K. Rowling",
    answer_hi: "जे.के. रोलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which bird is known for its ability to mimic human speech?",
    question_hi: "कौन सा पक्षी मानव भाषा की नकल करने के लिए जाना जाता है?",
    options_en: ["Eagle", "Parrot", "Owl", "Pigeon"],
    options_hi: ["गरुड़", "तोता", "उल्लू", "कबूतर"],
    answer_en: "Parrot",
    answer_hi: "तोता",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which element is needed for breathing?",
    question_hi: "श्वसन के लिए किस तत्व की आवश्यकता होती है?",
    options_en: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
    options_hi: ["ऑक्सीजन", "कार्बन", "नाइट्रोजन", "सल्फर"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the main ingredient in chocolate?",
    question_hi: "चॉकलेट में मुख्य घटक क्या होता है?",
    options_en: ["Sugar", "Milk", "Cocoa", "Flour"],
    options_hi: ["चीनी", "दूध", "कोको", "आटा"],
    answer_en: "Cocoa",
    answer_hi: "कोको",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"],
    options_hi: ["वायुदाबमापी", "थर्मामीटर", "आर्द्रतामापी", "भूकंपमापी"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "How many colors are there in a rainbow?",
    question_hi: "इंद्रधनुष में कुल कितने रंग होते हैं?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which metal is the best conductor of electricity?",
    question_hi: "कौन सी धातु बिजली की सबसे अच्छी चालक होती है?",
    options_en: ["Iron", "Copper", "Gold", "Silver"],
    options_hi: ["लोहा", "तांबा", "सोना", "चांदी"],
    answer_en: "Silver",
    answer_hi: "चांदी",
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
  num: 33,
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
  num: 34,
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
  num: 35,
  question_en: "Which Indian river is called the 'Sorrow of Bihar'?",
  question_hi: "कौन सी भारतीय नदी 'बिहार का दुःख' कहलाती है?",
  options_en: ["Kosi", "Ganga", "Yamuna", "Brahmaputra"],
  options_hi: ["कोसी", "गंगा", "यमुना", "ब्रह्मपुत्र"],
  answer_en: "Kosi",
  answer_hi: "कोसी",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which element has the atomic number 1?",
  question_hi: "कौन सा तत्व का परमाणु क्रमांक 1 है?",
  options_en: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  options_hi: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
  question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' के नाम से जाना जाता है?",
  options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
  options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num: 38,
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
  num: 39,
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
  num: 40,
  question_en: "Which is the first Indian city to get electricity?",
  question_hi: "कौन सा भारतीय शहर सबसे पहले विद्युत प्राप्त किया?",
  options_en: ["Darjeeling", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["दार्जीलिंग", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "Darjeeling",
  answer_hi: "दार्जीलिंग",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which is the largest island in India?",
  question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
  options_en: ["Andaman", "Lakshadweep", "Majuli", "Divar"],
  options_hi: ["अंडमान", "लक्षद्वीप", "माजुली", "दीवार"],
  answer_en: "Andaman",
  answer_hi: "अंडमान",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which is the largest planet in the solar system?",
  question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Earth", "Neptune"],
  options_hi: ["बृहस्पति", "शनि", "पृथ्वी", "नेप्च्यून"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which is the national aquatic animal of India?",
  question_hi: "भारत का राष्ट्रीय जलीय पशु कौन सा है?",
  options_en: ["River Dolphin", "Shark", "Turtle", "Whale"],
  options_hi: ["नदी डॉल्फिन", "शार्क", "कछुआ", "व्हेल"],
  answer_en: "River Dolphin",
  answer_hi: "नदी डॉल्फिन",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who wrote 'Ramcharitmanas'?",
  question_hi: "'रामचरितमानस' किसने लिखा?",
  options_en: ["Tulsidas", "Valmiki", "Kalidasa", "Kabir"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "कालिदास", "कबीर"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 45,
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
  num: 46,
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
  num: 47,
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
  num: 48,
  question_en: "Which Indian river is known as the 'Ganga of the South'?",
  question_hi: "दक्षिण भारत की कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
  options_en: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 49,
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
  num: 50,
  question_en: "Which Indian festival is known as the 'Festival of Lights'?",
  question_hi: "भारत का कौन सा त्योहार 'दीपों का त्योहार' कहलाता है?",
  options_en: ["Diwali", "Holi", "Eid", "Christmas"],
  options_hi: ["दीवाली", "होली", "ईद", "क्रिसमस"],
  answer_en: "Diwali",
  answer_hi: "दीवाली",
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